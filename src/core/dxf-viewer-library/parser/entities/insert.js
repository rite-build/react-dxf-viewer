
import * as helpers from "../ParseHelpers.js"
import AttribParser from "./attribute.js"

export default function EntityParser() {}

EntityParser.ForEntityName = 'INSERT';

EntityParser.prototype.parseEntity = function(scanner, curr) {
    var entity;
    entity = { type: curr.value };
    var hasAttributes = false;
    curr = scanner.next();
    while(curr !== 'EOF') {
        if(curr.code === 0) break;

        switch(curr.code) {
        case 2:
            entity.name = curr.value;
            break;
        case 41:
            entity.xScale = curr.value;
            break;
        case 42:
            entity.yScale = curr.value;
            break;
        case 43:
            entity.zScale = curr.value;
            break;
        case 10:
            entity.position = helpers.parsePoint(scanner);
            break;
        case 50:
            entity.rotation = curr.value;
            break;
        case 66:
            // Attributes-follow flag: 1 = ATTRIB entities follow this INSERT
            hasAttributes = curr.value === 1;
            break;
        case 70:
            entity.columnCount = curr.value;
            break;
        case 71:
            entity.rowCount = curr.value;
            break;
        case 44:
            entity.columnSpacing = curr.value;
            break;
        case 45:
            entity.rowSpacing = curr.value;
            break;
        case 210:
            entity.extrusionDirection = helpers.parsePoint(scanner);
            break;
        default: // check common entity attributes
            helpers.checkCommonEntityProperties(entity, curr, scanner);
            break;
        }
        curr = scanner.next();
    }

    // Parse ATTRIB entities that follow the INSERT (if attributes-follow flag is set)
    if (hasAttributes && curr.code === 0) {
        entity.attribs = [];
        var attribParser = new AttribParser();
        
        while (curr !== 'EOF' && curr.code === 0) {
            if (curr.value === 'ATTRIB') {
                var attrib = attribParser.parseEntity(scanner, curr);
                // Set ownerHandle to link ATTRIB to this INSERT
                attrib.ownerHandle = entity.handle;
                entity.attribs.push(attrib);
                curr = scanner.lastReadGroup;
            } else if (curr.value === 'SEQEND') {
                // Skip SEQEND entity
                curr = scanner.next();
                while (curr !== 'EOF' && curr.code !== 0) {
                    curr = scanner.next();
                }
                break;
            } else {
                // End of attribute sequence (unexpected entity)
                break;
            }
        }
    }

    return entity;
};
