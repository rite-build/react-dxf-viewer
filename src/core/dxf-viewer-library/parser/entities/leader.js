
import * as helpers from "../ParseHelpers.js"

export default function EntityParser() {}

EntityParser.ForEntityName = 'LEADER';

EntityParser.prototype.parseEntity = function(scanner, curr) {
    var entity = { 
        type: curr.value,
        vertices: [],
        arrowheadEnabled: true,
        pathType: 0, // straight segments
        creationFlag: 3, // no annotation
        hasHookline: false
    };
    
    curr = scanner.next();
    while(curr !== 'EOF') {
        if(curr.code === 0) break;
        
        switch(curr.code) {
        case 3: // Dimension style name reference
            entity.dimStyleName = curr.value;
            break;
        case 71: // Arrowhead flag (0=disabled, 1=enabled)
            entity.arrowheadEnabled = curr.value === 1;
            break;
        case 72: // Leader path type (0=straight segments, 1=spline)
            entity.pathType = curr.value;
            break;
        case 73: // Leader creation flag (0=text, 1=tolerance, 2=block, 3=no annotation)
            entity.creationFlag = curr.value;
            break;
        case 74: // Hookline direction flag
            entity.hooklineDirection = curr.value;
            break;
        case 75: // Hookline flag (0=no hookline, 1=has hookline)
            entity.hasHookline = curr.value === 1;
            break;
        case 40: // Text annotation height
            entity.textHeight = curr.value;
            break;
        case 41: // Text annotation width
            entity.textWidth = curr.value;
            break;
        case 76: // Number of vertices
            entity.vertexCount = curr.value;
            break;
        case 10: // Vertex X coordinate (repeated for each vertex)
            entity.vertices.push(helpers.parsePoint(scanner));
            break;
        case 77: // Color override (when DIMCLRD=BYBLOCK)
            entity.colorOverride = curr.value;
            break;
        case 340: // Hard reference to associated annotation entity
            entity.annotationHandle = curr.value;
            break;
        case 210: // Normal vector (extrusion direction)
            entity.extrusionDirection = helpers.parsePoint(scanner);
            break;
        case 211: // Horizontal direction vector
            entity.horizontalDirection = helpers.parsePoint(scanner);
            break;
        case 212: // Offset from block insertion point
            entity.blockOffset = helpers.parsePoint(scanner);
            break;
        case 213: // Offset from annotation placement point
            entity.annotationOffset = helpers.parsePoint(scanner);
            break;
        default:
            helpers.checkCommonEntityProperties(entity, curr, scanner);
            break;
        }
        curr = scanner.next();
    }
    return entity;
};
