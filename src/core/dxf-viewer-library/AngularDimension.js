import { Vector2, Matrix3 } from "three";
import { ParseSpecialChars } from "./TextRenderer.js";
import { DimensionLayout } from "./LinearDimension.js";
import { getArrowheadShape } from "./ArrowheadShapes.js";

/**
 * @typedef AngularDimensionParams
 * @property {Vector2} center Arc center point (from anchorPoint).
 * @property {Vector2} point1 First angle definition point.
 * @property {Vector2} point2 Second angle definition point.
 * @property {Vector2} arcPoint Point on dimension arc (defines radius and arc side).
 * @property {?string} text Dimension text pattern.
 * @property {?Vector2} textAnchor Text location (middle point) override.
 * @property {?number} textRotation Rotation angle of the dimension text away from its default orientation.
 * @property {number} arcTessellationAngle Target angle for each segment of tessellated arc (radians).
 */

export class AngularDimension {

    /**
     * @param {AngularDimensionParams} params
     * @param {Function<any(string)>} styleResolver Provides value for a requested style parameter.
     * @param {Function<number(string, number)>} textWidthCalculator Get text width in model space
     *  units for a given text and font size (height).
     */
    constructor(params, styleResolver, textWidthCalculator) {
        this.params = params;
        this.styleResolver = styleResolver;
        this.textWidthCalculator = textWidthCalculator;
        this.isValid = true;
        this._CalculateGeometry();
    }

    IsValid() {
        return this.isValid;
    }

    GetTexts() {
        return [this._GetText()];
    }

    /**
     * @return {DimensionLayout}
     */
    GenerateLayout() {
        const result = new DimensionLayout();

        let dimScale = this.styleResolver("DIMSCALE") ?? 1;
        if (dimScale == 0) {
            dimScale = 1;
        }

        const dimColor = this.styleResolver("DIMCLRD");
        const textColor = this.styleResolver("DIMCLRT");
        const extColor = this.styleResolver("DIMCLRE");
        const fontSize = (this.styleResolver("DIMTXT") ?? 1) * dimScale;
        const arrowSize = (this.styleResolver("DIMASZ") ?? 1) * dimScale;
        const tickSize = (this.styleResolver("DIMTSZ") ?? 0) * dimScale;

        const arcVertices = this._GenerateArcVertices();
        for (let i = 0; i < arcVertices.length - 1; i++) {
            result.AddLine(arcVertices[i], arcVertices[i + 1], dimColor);
        }

        const extLines = this._CreateExtensionLines(dimScale, extColor);
        for (const line of extLines) {
            result.AddLine(line.start, line.end, line.color);
        }

        const arcLength = this.radius * Math.abs(this.arcAngle);
        const flipArrows = arcLength < arrowSize * 2;

        /* Get arrowhead block names from dimension style.
         * DIMSAH: If true, use separate arrowheads (DIMBLK1 and DIMBLK2) for each end.
         * DIMBLK: Default arrowhead block for both ends when DIMSAH is false.
         * DIMBLK1: Arrowhead block for first end when DIMSAH is true.
         * DIMBLK2: Arrowhead block for second end when DIMSAH is true.
         */
        const useSeparateArrows = this.styleResolver("DIMSAH") ?? 0;
        const defaultBlock = this.styleResolver("DIMBLK");
        const block1 = useSeparateArrows ? (this.styleResolver("DIMBLK1") ?? defaultBlock) : defaultBlock;
        const block2 = useSeparateArrows ? (this.styleResolver("DIMBLK2") ?? defaultBlock) : defaultBlock;

        for (let i = 0; i < 2; i++) {
            const isStart = i === 0;
            const arcPt = isStart ? this.arcStart : this.arcEnd;
            const tangentAngle = isStart ? this.startAngle : this.endAngle;
            
            // Get the appropriate arrowhead block for this end
            const arrowBlock = isStart ? block1 : block2;
            const arrowShape = getArrowheadShape(arrowBlock);

            let arrowAngle;
            if (isStart) {
                arrowAngle = this.arcAngle > 0 
                    ? tangentAngle - Math.PI / 2 
                    : tangentAngle + Math.PI / 2;
            } else {
                arrowAngle = this.arcAngle > 0 
                    ? tangentAngle + Math.PI / 2 
                    : tangentAngle - Math.PI / 2;
            }

            if (flipArrows) {
                arrowAngle += Math.PI;
            }

            let transform = new Matrix3().identity();
            if (tickSize > 0) {
                transform.scale(tickSize, tickSize);
            } else {
                transform.scale(arrowSize, arrowSize);
            }

            transform.rotate(-arrowAngle);
            transform.translate(arcPt.x, arcPt.y);

            if (tickSize > 0) {
                this._CreateTick(result, transform, dimColor);
            } else {
                this._CreateArrowShape(result, transform, dimColor, arrowShape);
            }
        }

        const text = this._GetText();
        let textAnchor = this.params.textAnchor;
        if (!textAnchor) {
            const midAngle = this.startAngle + this.arcAngle / 2;
            textAnchor = new Vector2(
                this.params.center.x + this.radius * Math.cos(midAngle),
                this.params.center.y + this.radius * Math.sin(midAngle)
            );
            const offsetDir = new Vector2(
                Math.cos(midAngle),
                Math.sin(midAngle)
            );
            textAnchor.add(offsetDir.multiplyScalar(fontSize * 0.75));
        }

        let textAngle = (this.startAngle + this.arcAngle / 2) * 180 / Math.PI;
        if (textAngle > 90 || textAngle < -90) {
            textAngle += 180;
        }
        textAngle += (this.params.textRotation ?? 0);

        result.AddText(text, fontSize, textAngle, textColor, textAnchor);

        return result;
    }

    _CalculateGeometry() {
        const { center, point1, point2, arcPoint } = this.params;

        this.radius = center.distanceTo(arcPoint);
        if (this.radius === 0) {
            this.isValid = false;
            return;
        }

        this.angle1 = Math.atan2(point1.y - center.y, point1.x - center.x);
        this.angle2 = Math.atan2(point2.y - center.y, point2.x - center.x);
        const arcPointAngle = Math.atan2(arcPoint.y - center.y, arcPoint.x - center.x);

        let diff = this.angle2 - this.angle1;
        while (diff > Math.PI) diff -= 2 * Math.PI;
        while (diff < -Math.PI) diff += 2 * Math.PI;

        const arcPointInPositiveArc = this._isAngleBetween(arcPointAngle, this.angle1, this.angle1 + diff);
        
        if (diff > 0) {
            if (arcPointInPositiveArc) {
                this.startAngle = this.angle1;
                this.arcAngle = diff;
            } else {
                this.startAngle = this.angle1;
                this.arcAngle = diff - 2 * Math.PI;
            }
        } else {
            if (arcPointInPositiveArc) {
                this.startAngle = this.angle1;
                this.arcAngle = diff + 2 * Math.PI;
            } else {
                this.startAngle = this.angle1;
                this.arcAngle = diff;
            }
        }

        if (Math.abs(this.arcAngle) < 1e-10) {
            this.isValid = false;
            return;
        }

        this.arcStart = new Vector2(
            center.x + this.radius * Math.cos(this.startAngle),
            center.y + this.radius * Math.sin(this.startAngle)
        );
        this.arcEnd = new Vector2(
            center.x + this.radius * Math.cos(this.startAngle + this.arcAngle),
            center.y + this.radius * Math.sin(this.startAngle + this.arcAngle)
        );
    }

    _isAngleBetween(angle, start, end) {
        const normalize = (a) => {
            while (a < 0) a += 2 * Math.PI;
            while (a >= 2 * Math.PI) a -= 2 * Math.PI;
            return a;
        };
        
        const normAngle = normalize(angle);
        let normStart = normalize(start);
        let normEnd = normalize(end);
        
        if (normStart <= normEnd) {
            return normAngle >= normStart && normAngle <= normEnd;
        } else {
            return normAngle >= normStart || normAngle <= normEnd;
        }
    }

    _GenerateArcVertices() {
        const vertices = [];
        const tessellationAngle = this.params.arcTessellationAngle || (10 * Math.PI / 180);
        const numSegments = Math.max(1, Math.floor(Math.abs(this.arcAngle) / tessellationAngle));
        const step = this.arcAngle / numSegments;

        for (let i = 0; i <= numSegments; i++) {
            const angle = this.startAngle + i * step;
            vertices.push(new Vector2(
                this.params.center.x + this.radius * Math.cos(angle),
                this.params.center.y + this.radius * Math.sin(angle)
            ));
        }

        return vertices;
    }

    _CreateExtensionLines(dimScale, extColor) {
        const lines = [];
        const extOffset = (this.styleResolver("DIMEXO") ?? 0) * dimScale;
        const extExt = (this.styleResolver("DIMEXE") ?? 0) * dimScale;

        const drawExtLine = (basePt, arcPt, suppressFlag) => {
            if (this.styleResolver(suppressFlag) ?? 0) {
                return null;
            }

            const vExt = arcPt.clone().sub(basePt);
            const dist = vExt.length();
            if (dist === 0) {
                return null;
            }
            vExt.normalize();

            const start = basePt.clone();
            if (extOffset !== 0) {
                start.add(vExt.clone().multiplyScalar(extOffset));
            }

            const end = arcPt.clone();
            if (extExt !== 0) {
                end.add(vExt.clone().multiplyScalar(extExt));
            }

            return { start, end, color: extColor };
        };

        const line1 = drawExtLine(this.params.point1, this.arcStart, "DIMSE1");
        if (line1) lines.push(line1);

        const line2 = drawExtLine(this.params.point2, this.arcEnd, "DIMSE2");
        if (line2) lines.push(line2);

        return lines;
    }

    /**
     * Create arrowhead shape based on the arrowhead definition.
     * @param {DimensionLayout} layout The layout to add the shape to
     * @param {Matrix3} transform The transformation matrix
     * @param {number} color The color for the shape
     * @param {Object} arrowShape The arrowhead shape definition
     */
    _CreateArrowShape(layout, transform, color, arrowShape) {
        if (arrowShape.type === 'NONE') {
            // No arrowhead
            return;
        }

        if (arrowShape.type === 'LINES') {
            // Line-based arrowhead (e.g., _Open, _Closed outline)
            if (arrowShape.lineSegments) {
                for (const segment of arrowShape.lineSegments) {
                    const start = arrowShape.vertices[segment[0]].clone().applyMatrix3(transform);
                    const end = arrowShape.vertices[segment[1]].clone().applyMatrix3(transform);
                    layout.AddLine(start, end, color);
                }
            }
        } else {
            // Triangle-based arrowhead (filled)
            const vertices = [];
            for (const v of arrowShape.vertices) {
                vertices.push(v.clone().applyMatrix3(transform));
            }
            layout.AddTriangles(vertices, arrowShape.indices, color);
        }
    }

    _CreateTick(layout, transform, color) {
        layout.AddLine(
            new Vector2(0.5, 0.5).applyMatrix3(transform),
            new Vector2(-0.5, -0.5).applyMatrix3(transform),
            color
        );
    }

    _GetText() {
        if (this.params.text === " ") {
            return "";
        }
        if ((this.params.text ?? "") !== "" && this.params.text.indexOf("<>") === -1) {
            return ParseSpecialChars(this.params.text);
        }

        let measurement = Math.abs(this.arcAngle) * 180 / Math.PI;

        measurement *= this.styleResolver("DIMLFAC") ?? 1;

        const rnd = this.styleResolver("DIMRND") ?? 0;
        if (rnd > 0) {
            const n = Math.round(measurement / rnd);
            measurement = rnd * n;
        }

        const zeroSupp = this.styleResolver("DIMZIN") ?? 0;
        const leadZeroSupp = (zeroSupp & 4) !== 0;
        const trailingZeroSupp = (zeroSupp & 8) !== 0;

        let measText = measurement.toFixed(this.styleResolver("DIMDEC") ?? 2);

        if (trailingZeroSupp) {
            measText = measText.replace(/\.?0+$/, "");
        }

        if (leadZeroSupp) {
            measText = measText.replace(/^0+/, "");
        }

        if (measText.startsWith(".")) {
            measText = "0" + measText;
        } else if (measText === "") {
            measText = "0";
        }
        if (measText.endsWith(".")) {
            measText = measText.substring(0, measText.length - 1);
        }

        let decSep = this.styleResolver("DIMDSEP") ?? ".";
        if (!isNaN(decSep)) {
            decSep = String.fromCharCode(decSep);
        }
        if (decSep !== ".") {
            measText = measText.replace(".", decSep);
        }

        measText += "\u00B0";

        const suffix = this.styleResolver("DIMPOST") ?? "";
        if (suffix !== "") {
            if (suffix.indexOf("<>") !== -1) {
                measText = suffix.replaceAll("<>", measText);
            } else {
                measText += suffix;
            }
        }

        if ((this.params.text ?? "") !== "") {
            measText = this.params.text.replaceAll("<>", measText);
        }

        return ParseSpecialChars(measText);
    }
}
