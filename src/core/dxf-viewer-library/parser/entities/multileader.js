
import * as helpers from "../ParseHelpers.js"

export default function EntityParser() {}

EntityParser.ForEntityName = 'MULTILEADER';

EntityParser.prototype.parseEntity = function(scanner, curr) {
    var entity = {
        type: curr.value,
        leaders: [],
        context: null,
        contentType: 2, // default: MTEXT
    };

    curr = scanner.next();
    while (curr !== 'EOF') {
        if (curr.code === 0) break;

        switch (curr.code) {
        case 170: // Leader type (1=straight, 2=spline)
            entity.leaderType = curr.value;
            break;
        case 171: // Leader line weight
            entity.leaderLineWeight = curr.value;
            break;
        case 172: // Content type (1=block, 2=mtext)
            entity.contentType = curr.value;
            break;
        case 173: // Text left attachment type
            entity.textLeftAttachment = curr.value;
            break;
        case 174: // Text right attachment type
            entity.textRightAttachment = curr.value;
            break;
        case 175: // Text top attachment type
            entity.textTopAttachment = curr.value;
            break;
        case 176: // Text bottom attachment type
            entity.textBottomAttachment = curr.value;
            break;
        case 178: // Text angle type
            entity.textAngleType = curr.value;
            break;
        case 90: // Property override flags
            entity.propertyOverrideFlags = curr.value;
            break;
        case 91: // Leader line color (true color)
            entity.leaderLineColor = curr.value;
            break;
        case 92: // Leader line color 2
            entity.leaderLineColor2 = curr.value;
            break;
        case 290: // Enable landing
            entity.enableLanding = curr.value;
            break;
        case 291: // Enable dogleg
            entity.enableDogleg = curr.value;
            break;
        case 41: // Dogleg length
            entity.doglegLength = curr.value;
            break;
        case 42: // Arrowhead size
            entity.arrowheadSize = curr.value;
            break;
        case 43: // Block content scale
            entity.blockScale = curr.value;
            break;
        case 340: // MLeader style handle
            entity.mleaderStyleHandle = curr.value;
            break;
        case 341: // Arrowhead block handle
            entity.arrowheadBlockHandle = curr.value;
            break;
        case 343: // Text style handle
            entity.textStyleHandle = curr.value;
            break;
        case 10: // Content base point
            entity.contentBasePoint = helpers.parsePoint(scanner);
            break;
        case 300: // CONTEXT_DATA{ start marker
            if (curr.value === 'CONTEXT_DATA{') {
                entity.context = parseContextData(scanner);
                // After parseContextData returns, scanner.lastReadGroup has the current group
                curr = scanner.lastReadGroup;
                continue; // don't call scanner.next() again
            }
            break;
        case 270: // MLeader version
            entity.version = curr.value;
            break;
        case 271: // Text top attachment type (top-level)
            entity.textTopAttachmentType = curr.value;
            break;
        case 272: // Text bottom attachment type (top-level)
            entity.textBottomAttachmentType = curr.value;
            break;
        case 273: // unused
            break;
        case 295: // Text direction negative
            entity.textDirectionNegative = curr.value;
            break;
        case 95: // Flags
            entity.flags = curr.value;
            break;
        default:
            helpers.checkCommonEntityProperties(entity, curr, scanner);
            break;
        }
        curr = scanner.next();
    }
    return entity;
};

function parseContextData(scanner) {
    var context = {
        leaders: [],
        textLabel: null,
        contentBasePosition: null,
        textHeight: null,
        textDirection: null,
        textPosition: null,
        textRotation: 0,
        textWidth: 0,
        textStyleHandle: null,
    };

    var curr = scanner.next();
    while (curr !== 'EOF') {
        if (curr.code === 0) break;

        // Check for nested LEADER{ block
        if (curr.code === 302 && curr.value === 'LEADER{') {
            context.leaders.push(parseLeaderData(scanner));
            curr = scanner.lastReadGroup;
            continue;
        }

        // End of CONTEXT_DATA block
        if (curr.code === 301 && curr.value === '}') {
            // Advance past the closing marker
            scanner.next();
            return context;
        }

        switch (curr.code) {
        case 40: // Scale
            context.scale = curr.value;
            break;
        case 10: // Content base point
            context.contentBasePosition = helpers.parsePoint(scanner);
            break;
        case 41: // Text height
            context.textHeight = curr.value;
            break;
        case 140: // Text height (override)
            context.textHeightOverride = curr.value;
            break;
        case 145: // Text line spacing
            context.textLineSpacing = curr.value;
            break;
        case 174: // Text left attachment type
            context.textLeftAttachment = curr.value;
            break;
        case 175: // Text right attachment type
            context.textRightAttachment = curr.value;
            break;
        case 176: // Text angle type
            context.textAngleType = curr.value;
            break;
        case 177: // Text alignment type
            context.textAlignment = curr.value;
            break;
        case 290: // Has text content
            context.hasTextContent = curr.value;
            break;
        case 304: // Text label (MTEXT content string)
            context.textLabel = curr.value;
            break;
        case 11: // Text normal direction
            context.textNormal = helpers.parsePoint(scanner);
            break;
        case 340: // Text style handle
            context.textStyleHandle = curr.value;
            break;
        case 12: // Text position
            context.textPosition = helpers.parsePoint(scanner);
            break;
        case 13: // Text direction
            context.textDirection = helpers.parsePoint(scanner);
            break;
        case 42: // Text rotation
            context.textRotation = curr.value;
            break;
        case 43: // Text width
            context.textWidth = curr.value;
            break;
        case 44: // Text defined width
            context.textDefinedWidth = curr.value;
            break;
        case 45: // Text defined height
            context.textDefinedHeight = curr.value;
            break;
        case 170: // Text attachment direction
            context.textAttachmentDirection = curr.value;
            break;
        case 171: // Text flow direction
            context.textFlowDirection = curr.value;
            break;
        case 172: // Column type
            context.columnType = curr.value;
            break;
        case 90: // Text color
            context.textColor = curr.value;
            break;
        case 91: // Text color (true color)
            context.textColorTrue = curr.value;
            break;
        case 92: // fill color
            break;
        case 141: // Landing gap
            context.landingGap = curr.value;
            break;
        case 142: // another gap
            break;
        case 143: // another param
            break;
        case 110: // Block content base position
            context.blockBasePosition = helpers.parsePoint(scanner);
            break;
        case 111: // Block content X direction
            context.blockXDir = helpers.parsePoint(scanner);
            break;
        case 112: // Block content Y direction
            context.blockYDir = helpers.parsePoint(scanner);
            break;
        case 272: // text count / attachment type
            break;
        case 273: // text count / alignment type
            break;
        case 291: // hasMText
            break;
        case 292: // isNormalReversed
            break;
        case 293: // useDefaultContent
            break;
        case 294: // hasBlock
            break;
        case 295: // unused
            break;
        case 296: // unused
            break;
        case 297: // content type 2
            break;
        default:
            break;
        }
        curr = scanner.next();
    }
    return context;
}

function parseLeaderData(scanner) {
    var leader = {
        lines: [],
        hasSetLastLeaderLinePoint: false,
        hasSetDoglegVector: false,
        lastLeaderLinePoint: null,
        doglegVector: null,
        doglegLength: 0,
    };

    var curr = scanner.next();
    while (curr !== 'EOF') {
        if (curr.code === 0) break;

        // Check for nested LEADER_LINE block
        if (curr.code === 304 && curr.value === 'LEADER_LINE{') {
            leader.lines.push(parseLeaderLineData(scanner));
            curr = scanner.lastReadGroup;
            continue;
        }

        // End of LEADER block
        if (curr.code === 303 && curr.value === '}') {
            // Advance past the closing marker
            scanner.next();
            return leader;
        }

        switch (curr.code) {
        case 290: // Has set last leader line point
            leader.hasSetLastLeaderLinePoint = curr.value;
            break;
        case 291: // Has set dogleg vector
            leader.hasSetDoglegVector = curr.value;
            break;
        case 10: // Last leader line point / connection point
            leader.lastLeaderLinePoint = helpers.parsePoint(scanner);
            break;
        case 11: // Dogleg vector
            leader.doglegVector = helpers.parsePoint(scanner);
            break;
        case 40: // Dogleg length
            leader.doglegLength = curr.value;
            break;
        case 90: // Leader branch index
            leader.branchIndex = curr.value;
            break;
        case 271: // Leader line index
            leader.lineIndex = curr.value;
            break;
        default:
            break;
        }
        curr = scanner.next();
    }
    return leader;
}

function parseLeaderLineData(scanner) {
    var line = {
        vertices: [],
    };

    var curr = scanner.next();
    while (curr !== 'EOF') {
        if (curr.code === 0) break;

        // End of LEADER_LINE block
        if (curr.code === 305 && curr.value === '}') {
            // Advance past the closing marker
            scanner.next();
            return line;
        }

        switch (curr.code) {
        case 10: // Vertex coordinates (repeated)
            line.vertices.push(helpers.parsePoint(scanner));
            break;
        case 91: // Leader line index
            line.lineIndex = curr.value;
            break;
        case 92: // Leader line color
            line.color = curr.value;
            break;
        default:
            break;
        }
        curr = scanner.next();
    }
    return line;
}
