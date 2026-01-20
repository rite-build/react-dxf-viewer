import { Vector2 } from "three"

/**
 * Standard DXF arrowhead block definitions.
 * 
 * Each arrowhead is defined with:
 * - type: 'TRIANGLES' for filled shapes, 'LINES' for line-based shapes
 * - vertices: Array of Vector2 points defining the shape
 * - indices: For triangles, the vertex indices to form triangles
 * 
 * Shapes are defined in unit size (1 unit length) pointing left (towards -X),
 * with origin at the arrow tip. They will be scaled by DIMASZ and transformed
 * to the correct position/rotation.
 */

/**
 * Create a circular dot approximation using triangles (tessellated).
 * @param {number} segments Number of segments for circle approximation
 * @returns {{vertices: Vector2[], indices: number[]}}
 */
function createCircleDot(segments = 12) {
    const vertices = [new Vector2(0.5, 0)] // Center at 0.5, 0 (offset from tip)
    const indices = []
    const radius = 0.25
    
    for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2
        vertices.push(new Vector2(
            0.5 + radius * Math.cos(angle),
            radius * Math.sin(angle)
        ))
    }
    
    // Create triangle fan
    for (let i = 1; i <= segments; i++) {
        indices.push(0, i, i + 1)
    }
    // Close the circle
    indices.push(0, segments, 1)
    
    return { vertices, indices }
}

/**
 * Create a small filled dot (smaller than _Dot).
 */
function createDotSmall(segments = 12) {
    const vertices = [new Vector2(0.25, 0)] // Center
    const indices = []
    const radius = 0.125
    
    for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2
        vertices.push(new Vector2(
            0.25 + radius * Math.cos(angle),
            radius * Math.sin(angle)
        ))
    }
    
    for (let i = 1; i <= segments; i++) {
        indices.push(0, i, i + 1)
    }
    indices.push(0, segments, 1)
    
    return { vertices, indices }
}

/**
 * Create a dot with a blank center (ring/donut shape).
 */
function createDotBlank(segments = 12) {
    const vertices = []
    const indices = []
    const outerRadius = 0.25
    const innerRadius = 0.15
    const centerX = 0.5
    
    // Create outer and inner circles
    for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2
        // Outer vertex
        vertices.push(new Vector2(
            centerX + outerRadius * Math.cos(angle),
            outerRadius * Math.sin(angle)
        ))
        // Inner vertex
        vertices.push(new Vector2(
            centerX + innerRadius * Math.cos(angle),
            innerRadius * Math.sin(angle)
        ))
    }
    
    // Create triangle strip between outer and inner circles
    for (let i = 0; i < segments; i++) {
        const outer1 = i * 2
        const inner1 = i * 2 + 1
        const outer2 = (i + 1) * 2
        const inner2 = (i + 1) * 2 + 1
        
        indices.push(outer1, inner1, outer2)
        indices.push(inner1, inner2, outer2)
    }
    
    return { vertices, indices }
}

const dotGeometry = createCircleDot()
const dotSmallGeometry = createDotSmall()
const dotBlankGeometry = createDotBlank()

/**
 * Standard DXF arrowhead shapes.
 * Keys are the standard DXF block names (case-insensitive matching should be used).
 */
export const ARROWHEAD_SHAPES = {
    // Default closed filled arrow (most common)
    '_ClosedFilled': {
        type: 'TRIANGLES',
        vertices: [
            new Vector2(0, 0),        // Tip
            new Vector2(1, -0.25),    // Bottom right
            new Vector2(1, 0.25)      // Top right
        ],
        indices: [0, 1, 2]
    },
    
    // Also the default when no block name is specified
    '': {
        type: 'TRIANGLES',
        vertices: [
            new Vector2(0, 0),
            new Vector2(1, -0.25),
            new Vector2(1, 0.25)
        ],
        indices: [0, 1, 2]
    },
    
    // Open arrowhead (V-shape, lines only)
    '_Open': {
        type: 'LINES',
        vertices: [
            new Vector2(1, 0.25),     // Top
            new Vector2(0, 0),        // Tip
            new Vector2(1, -0.25)     // Bottom
        ],
        lineSegments: [[0, 1], [1, 2]]
    },
    
    // Closed but not filled (outline triangle)
    '_Closed': {
        type: 'LINES',
        vertices: [
            new Vector2(0, 0),        // Tip
            new Vector2(1, -0.25),    // Bottom right
            new Vector2(1, 0.25)      // Top right
        ],
        lineSegments: [[0, 1], [1, 2], [2, 0]]
    },
    
    // Dot marker (filled circle)
    '_Dot': {
        type: 'TRIANGLES',
        vertices: dotGeometry.vertices,
        indices: dotGeometry.indices
    },
    
    // Architectural tick (45-degree slash)
    '_ArchTick': {
        type: 'LINES',
        vertices: [
            new Vector2(-0.5, -0.5),
            new Vector2(0.5, 0.5)
        ],
        lineSegments: [[0, 1]]
    },
    
    // Oblique stroke (similar to architectural tick)
    '_Oblique': {
        type: 'LINES',
        vertices: [
            new Vector2(-0.5, -0.5),
            new Vector2(0.5, 0.5)
        ],
        lineSegments: [[0, 1]]
    },
    
    // No arrowhead
    '_None': {
        type: 'NONE',
        vertices: [],
        indices: []
    },
    
    // Right angle arrowhead
    '_Open90': {
        type: 'LINES',
        vertices: [
            new Vector2(0.5, 0.5),    // Top
            new Vector2(0, 0),        // Corner/tip
            new Vector2(0.5, -0.5)    // Bottom
        ],
        lineSegments: [[0, 1], [1, 2]]
    },
    
    // 30-degree open arrow
    '_Open30': {
        type: 'LINES',
        vertices: [
            new Vector2(1, 0.29),     // Top (tan(30°) ≈ 0.577, half = 0.29)
            new Vector2(0, 0),        // Tip
            new Vector2(1, -0.29)     // Bottom
        ],
        lineSegments: [[0, 1], [1, 2]]
    },
    
    // Closed filled blank (filled arrow with gap)
    '_ClosedBlank': {
        type: 'LINES',
        vertices: [
            new Vector2(0, 0),
            new Vector2(1, -0.25),
            new Vector2(1, 0.25)
        ],
        lineSegments: [[0, 1], [1, 2], [2, 0]]
    },
    
    // Small dot
    '_DotSmall': {
        type: 'TRIANGLES',
        vertices: dotSmallGeometry.vertices,
        indices: dotSmallGeometry.indices
    },
    
    // Dot blank (ring)
    '_DotBlank': {
        type: 'TRIANGLES',
        vertices: dotBlankGeometry.vertices,
        indices: dotBlankGeometry.indices
    },
    
    // Small filled arrow
    '_Small': {
        type: 'TRIANGLES',
        vertices: [
            new Vector2(0, 0),
            new Vector2(0.5, -0.125),
            new Vector2(0.5, 0.125)
        ],
        indices: [0, 1, 2]
    },
    
    // Box/square filled
    '_BoxFilled': {
        type: 'TRIANGLES',
        vertices: [
            new Vector2(0, -0.25),
            new Vector2(0.5, -0.25),
            new Vector2(0.5, 0.25),
            new Vector2(0, 0.25)
        ],
        indices: [0, 1, 2, 0, 2, 3]
    },
    
    // Box blank (outline)
    '_BoxBlank': {
        type: 'LINES',
        vertices: [
            new Vector2(0, -0.25),
            new Vector2(0.5, -0.25),
            new Vector2(0.5, 0.25),
            new Vector2(0, 0.25)
        ],
        lineSegments: [[0, 1], [1, 2], [2, 3], [3, 0]]
    },
    
    // Datum triangle filled (pointing the other way)
    '_DatumFilled': {
        type: 'TRIANGLES',
        vertices: [
            new Vector2(0, 0),
            new Vector2(0.5, -0.25),
            new Vector2(0.5, 0.25)
        ],
        indices: [0, 1, 2]
    },
    
    // Datum triangle blank
    '_DatumBlank': {
        type: 'LINES',
        vertices: [
            new Vector2(0, 0),
            new Vector2(0.5, -0.25),
            new Vector2(0.5, 0.25)
        ],
        lineSegments: [[0, 1], [1, 2], [2, 0]]
    },
    
    // Integral sign
    '_Integral': {
        type: 'LINES',
        vertices: [
            new Vector2(0, 0.3),
            new Vector2(0.15, 0.4),
            new Vector2(0.15, -0.4),
            new Vector2(0, -0.3)
        ],
        lineSegments: [[0, 1], [1, 2], [2, 3]]
    },
    
    // Origin indicator (circle with lines)
    '_Origin': {
        type: 'TRIANGLES',
        vertices: dotGeometry.vertices,
        indices: dotGeometry.indices
    },
    
    // Origin indicator 2
    '_Origin2': {
        type: 'TRIANGLES',
        vertices: dotSmallGeometry.vertices,
        indices: dotSmallGeometry.indices
    }
}

// Create lowercase lookup map for case-insensitive matching
const lowercaseShapeMap = new Map()
for (const [key, value] of Object.entries(ARROWHEAD_SHAPES)) {
    lowercaseShapeMap.set(key.toLowerCase(), value)
}

/**
 * Get arrowhead shape by block name.
 * @param {string|null|undefined} blockName The arrowhead block name (e.g., '_ClosedFilled', '_Open')
 * @returns {Object} The arrowhead shape definition, defaults to closed filled triangle
 */
export function getArrowheadShape(blockName) {
    if (!blockName || blockName === '') {
        return ARROWHEAD_SHAPES['_ClosedFilled']
    }
    
    // Try exact match first
    if (ARROWHEAD_SHAPES.hasOwnProperty(blockName)) {
        return ARROWHEAD_SHAPES[blockName]
    }
    
    // Try case-insensitive match
    const lowerName = blockName.toLowerCase()
    if (lowercaseShapeMap.has(lowerName)) {
        return lowercaseShapeMap.get(lowerName)
    }
    
    // Unknown block name - return default closed filled
    // Note: For custom blocks defined in the DXF, the caller should handle
    // block rendering separately (using INSERT-like logic)
    return ARROWHEAD_SHAPES['_ClosedFilled']
}

/**
 * Check if a block name is a known standard arrowhead.
 * @param {string} blockName The block name to check
 * @returns {boolean} True if it's a known standard arrowhead
 */
export function isStandardArrowhead(blockName) {
    if (!blockName || blockName === '') {
        return true // Default is standard
    }
    
    if (ARROWHEAD_SHAPES.hasOwnProperty(blockName)) {
        return true
    }
    
    return lowercaseShapeMap.has(blockName.toLowerCase())
}

export default ARROWHEAD_SHAPES

