# Implement LEADER Entity Support - Plan

**Date**: 2026-02-05

## Overview

Implement LEADER entity support for annotations and callouts in the DXF viewer. LEADER entities consist of a polyline path (straight segments or spline) with optional arrowheads and associated text/block annotations. This will enable rendering of callouts, annotations, and dimension-like markings that are commonly used in CAD drawings.

## Scope

**Modify**: 
- `src/core/dxf-viewer-library/parser/DxfParser.js` - Register LEADER entity handler
- `src/core/dxf-viewer-library/DxfScene.js` - Add LEADER processing and decomposition methods

**Create**: 
- `src/core/dxf-viewer-library/parser/entities/leader.js` - LEADER entity parser

**Delete**: None

## Prerequisites

- [x] Understanding of existing entity parser patterns (LINE, DIMENSION, SPLINE)
- [x] Understanding of DxfScene decomposition methods (_DecomposeLine, _DecomposeDimension, _DecomposeSpline)
- [x] Understanding of dimension style system (_GetDimStyleValue, dimStyles Map)
- [x] Understanding of arrowhead rendering from LinearDimension.js
- [x] Understanding of Entity.Type enum (LINE_SEGMENTS, POLYLINE, TRIANGLES)

## Architecture

### Entity Parser Pattern
- Follows existing pattern: `EntityParser.ForEntityName = 'LEADER'`
- Uses `helpers.parsePoint()` for coordinate parsing
- Uses `helpers.checkCommonEntityProperties()` for common attributes
- Returns entity object with parsed properties

### DxfScene Integration
- LEADER case added to `_ProcessDxfEntity()` switch statement
- Main decomposition method: `_DecomposeLeader()` (generator function)
- Helper methods for different rendering aspects:
  - `_DecomposeLeaderStraightPath()` - Straight line segments
  - `_DecomposeLeaderSplinePath()` - Spline tessellation
  - `_DecomposeLeaderArrowhead()` - Arrowhead rendering
  - `_DecomposeLeaderHookline()` - Hookline rendering
  - `_TessellateLeaderSpline()` - Spline interpolation helper

### Rendering Strategy
- Straight paths: Convert to LINE_SEGMENTS entities (one per segment)
- Spline paths: Tessellate into POLYLINE entity using existing spline interpolation
- Arrowheads: Create TRIANGLES entity using arrowhead shape from LinearDimension pattern
- Hooklines: Create LINE_SEGMENTS entity at last vertex

### Dimension Style Integration
- Use `_GetDimStyleValue()` for style lookups
- Support DIMASZ (arrowhead size)
- Support DIMGAP (hookline length)
- Support DIMCLRD (color override)
- Fallback to default values when style not available

## Steps

### Phase 1: Entity Parser Implementation

1. **Create LEADER entity parser file**
   - File: `src/core/dxf-viewer-library/parser/entities/leader.js`
   - Import helpers from `../ParseHelpers.js`
   - Export default EntityParser function
   - Set `EntityParser.ForEntityName = 'LEADER'`
   - Validation: File exists and follows pattern

2. **Implement parseEntity method**
   - File: `src/core/dxf-viewer-library/parser/entities/leader.js`
   - Initialize entity object with defaults:
     - `type: curr.value`
     - `vertices: []`
     - `arrowheadEnabled: true` (default)
     - `pathType: 0` (straight segments, default)
     - `creationFlag: 3` (no annotation, default)
     - `hasHookline: false` (default)
   - Parse group codes in switch statement:
     - Group 3: `dimStyleName`
     - Group 71: `arrowheadEnabled` (0=disabled, 1=enabled)
     - Group 72: `pathType` (0=straight, 1=spline)
     - Group 73: `creationFlag` (0=text, 1=tolerance, 2=block, 3=no annotation)
     - Group 74: `hooklineDirection`
     - Group 75: `hasHookline` (0=no, 1=yes)
     - Group 40: `textHeight`
     - Group 41: `textWidth`
     - Group 76: `vertexCount`
     - Group 10: Parse vertex coordinates (use `helpers.parsePoint()`)
     - Group 77: `colorOverride`
     - Group 340: `annotationHandle`
     - Group 210: `extrusionDirection` (use `helpers.parsePoint()`)
     - Group 211: `horizontalDirection` (use `helpers.parsePoint()`)
     - Group 212: `blockOffset` (use `helpers.parsePoint()`)
     - Group 213: `annotationOffset` (use `helpers.parsePoint()`)
     - Default: `helpers.checkCommonEntityProperties()`
   - Return entity object
   - Validation: Parser handles all group codes correctly

3. **Register LEADER handler in DxfParser**
   - File: `src/core/dxf-viewer-library/parser/DxfParser.js`
   - Import Leader entity parser at top with other entity imports
   - Add `dxfParser.registerEntityHandler(Leader)` in `registerDefaultEntityHandlers()`
   - Validation: LEADER handler registered and available

### Phase 2: DxfScene Integration - Basic Structure

4. **Add LEADER case to _ProcessDxfEntity**
   - File: `src/core/dxf-viewer-library/DxfScene.js`
   - Add case `"LEADER"` in switch statement (around line 374)
   - Call `renderEntities = this._DecomposeLeader(entity, blockCtx)`
   - Add break statement
   - Validation: LEADER entities are routed to decomposition method

5. **Implement _DecomposeLeader main method**
   - File: `src/core/dxf-viewer-library/DxfScene.js`
   - Generator function (`*_DecomposeLeader`)
   - Validate entity has at least 2 vertices, return early if invalid
   - Get layer using `_GetEntityLayer(entity, blockCtx)`
   - Get color using `_GetEntityColor(entity, blockCtx)`
   - Handle path type:
     - If `pathType === 0`: yield from `_DecomposeLeaderStraightPath()`
     - If `pathType === 1`: yield from `_DecomposeLeaderSplinePath()`
   - Handle arrowhead:
     - If `arrowheadEnabled && vertices.length >= 2`: yield from `_DecomposeLeaderArrowhead()`
   - Handle hookline:
     - If `hasHookline && vertices.length >= 2`: yield from `_DecomposeLeaderHookline()`
   - Note: Annotation references (group 340) handled separately by text/block systems
   - Validation: Method structure correct, handles all path types

### Phase 3: Path Rendering Implementation

6. **Implement _DecomposeLeaderStraightPath**
   - File: `src/core/dxf-viewer-library/DxfScene.js`
   - Generator function (`*_DecomposeLeaderStraightPath`)
   - Parameters: `entity, blockCtx`
   - Get layer and color
   - Get transform using `_GetEntityExtrusionTransform(entity)` if needed
   - Iterate through vertices (i = 0 to length - 2):
     - Get start vertex: `entity.vertices[i]`
     - Get end vertex: `entity.vertices[i + 1]`
     - Apply transform if present
     - Create new Entity with:
       - `type: Entity.Type.LINE_SEGMENTS`
       - `vertices: [start, end]`
       - `indices: null`
       - `layer: layer`
       - `color: color`
     - Yield entity
   - Validation: Straight leaders render as connected line segments

7. **Implement _TessellateLeaderSpline helper**
   - File: `src/core/dxf-viewer-library/DxfScene.js`
   - Method: `_TessellateLeaderSpline(vertices)`
   - Parameters: `vertices` array
   - Get subdivisions from `this.options.splineSubdivision` or default to 4
   - Initialize empty tessellated array
   - Iterate through vertices (i = 0 to length - 2):
     - Get v0 = vertices[i], v1 = vertices[i + 1]
     - For each subdivision (j = 0 to subdivisions):
       - Calculate t = j / subdivisions
       - Interpolate: x = v0.x + (v1.x - v0.x) * t
       - Interpolate: y = v0.y + (v1.y - v0.y) * t
       - Interpolate: z = (v0.z || 0) + ((v1.z || 0) - (v0.z || 0)) * t
       - Push interpolated point to tessellated array
   - Return tessellated array
   - Note: For initial implementation, use linear interpolation. Future enhancement could use proper B-spline interpolation like `_InterpolateSpline()`
   - Validation: Spline vertices tessellated into smooth polyline

8. **Implement _DecomposeLeaderSplinePath**
   - File: `src/core/dxf-viewer-library/DxfScene.js`
   - Generator function (`*_DecomposeLeaderSplinePath`)
   - Parameters: `entity, blockCtx`
   - Get layer and color
   - Call `_TessellateLeaderSpline(entity.vertices)` to get tessellated vertices
   - Get transform using `_GetEntityExtrusionTransform(entity)` if needed
   - Apply transform to each tessellated vertex if present
   - Create new Entity with:
     - `type: Entity.Type.POLYLINE`
     - `vertices: tessellatedVertices` (transformed)
     - `shape: false` (not closed)
     - `layer: layer`
     - `color: color`
   - Yield entity
   - Validation: Spline leaders render as smooth polylines

### Phase 4: Arrowhead and Hookline Rendering

9. **Implement _DecomposeLeaderArrowhead**
   - File: `src/core/dxf-viewer-library/DxfScene.js`
   - Generator function (`*_DecomposeLeaderArrowhead`)
   - Parameters: `entity, blockCtx`
   - Get layer and color
   - Get dimension style using `entity.dimStyleName`:
     - Create styleResolver function: `valueName => this._GetDimStyleValue(valueName, entity, style)`
     - Get style from `this.dimStyles.get(entity.dimStyleName)` or null
   - Get arrowhead size:
     - Use `styleResolver("DIMASZ")` or fallback to default (0.18 or from options)
   - Calculate arrowhead direction from first two vertices:
     - v0 = entity.vertices[0]
     - v1 = entity.vertices[1]
     - direction = {x: v1.x - v0.x, y: v1.y - v0.y, z: (v1.z || 0) - (v0.z || 0)}
     - Normalize direction vector
   - Create arrowhead triangle:
     - Use arrowhead shape pattern from LinearDimension (vertices: [0,0], [1,-0.25], [1,0.25])
     - Create Matrix3 transform:
       - Translate to v0 position
       - Rotate to match direction
       - Scale by arrowSize
     - Transform arrowhead shape vertices
     - Create new Entity with:
       - `type: Entity.Type.TRIANGLES`
       - `vertices: transformedArrowheadVertices`
       - `indices: [0, 1, 2]`
       - `layer: layer`
       - `color: color`
   - Yield entity
   - Validation: Arrowheads render at first vertex pointing along leader path

10. **Implement _DecomposeLeaderHookline**
    - File: `src/core/dxf-viewer-library/DxfScene.js`
    - Generator function (`*_DecomposeLeaderHookline`)
    - Parameters: `entity, blockCtx`
    - Get layer and color
    - Get dimension style:
      - Create styleResolver function
      - Get style from dimStyles Map
    - Get hookline length:
      - Use `styleResolver("DIMGAP")` or fallback to default (0.09)
    - Get last vertex: `entity.vertices[entity.vertices.length - 1]`
    - Get horizontal direction:
      - Use `entity.horizontalDirection` or default to `{x: 1, y: 0, z: 0}`
    - Determine hookline direction:
      - Use `entity.hooklineDirection === 0 ? -1 : 1`
    - Calculate hookline end point:
      - x = lastVertex.x + (horizontalDir.x * hooklineLength * direction)
      - y = lastVertex.y + (horizontalDir.y * hooklineLength * direction)
      - z = (lastVertex.z || 0) + ((horizontalDir.z || 0) * hooklineLength * direction)
    - Get transform using `_GetEntityExtrusionTransform(entity)` if needed
    - Apply transform to start and end points if present
    - Create new Entity with:
      - `type: Entity.Type.LINE_SEGMENTS`
      - `vertices: [start, end]`
      - `indices: null`
      - `layer: layer`
      - `color: color`
    - Yield entity
    - Validation: Hooklines render as short horizontal lines at last vertex

### Phase 5: Edge Cases and Polish

11. **Handle edge cases**
    - File: `src/core/dxf-viewer-library/DxfScene.js`
    - In `_DecomposeLeader`: Validate minimum 2 vertices
    - In `_DecomposeLeaderArrowhead`: Check vertices.length >= 2 before accessing
    - In `_DecomposeLeaderHookline`: Check vertices.length >= 2 before accessing
    - Handle missing dimension style gracefully (use defaults)
    - Handle missing horizontalDirection (default to {x: 1, y: 0, z: 0})
    - Handle zero-length direction vectors in arrowhead calculation
    - Handle missing z coordinates (default to 0)
    - Validation: No crashes on malformed or incomplete LEADER entities

12. **Handle 3D extrusion direction**
    - File: `src/core/dxf-viewer-library/DxfScene.js`
    - Use `_GetEntityExtrusionTransform(entity)` for all vertex transformations
    - Apply transform in straight path, spline path, arrowhead, and hookline methods
    - Validation: 3D leaders render correctly with extrusion direction

13. **Handle color overrides**
    - File: `src/core/dxf-viewer-library/DxfScene.js`
    - Check `entity.colorOverride` when DIMCLRD=BYBLOCK
    - Apply color override in decomposition methods if present
    - Validation: Color overrides apply correctly

## Testing

**Type**: Comprehensive

### Unit Tests
- Test LEADER parser with various group code combinations
- Test parser handles missing optional group codes
- Test parser handles all vertex coordinate formats (2D and 3D)
- Test dimension style integration (DIMASZ, DIMGAP, DIMCLRD)

### Integration Tests
- Test straight-line leader rendering with arrowhead
- Test multi-segment leader path rendering
- Test spline leader path rendering
- Test leader with hookline rendering
- Test leader with both arrowhead and hookline
- Test leader in different layers and colors
- Test leader with dimension style applied
- Test leader with 3D extrusion direction
- Test leader with color override

### Edge Cases
- Test leader with single vertex (should skip or handle gracefully)
- Test leader with no vertices (should skip)
- Test leader with missing dimension style (should use defaults)
- Test leader with zero-length segments
- Test leader with very long paths
- Test leader with many vertices (performance)
- Test leader with annotation reference (group 340) - verify doesn't break

### Visual Testing
- Load DXF files with LEADER entities from AutoCAD
- Verify leaders render correctly in viewer
- Compare with AutoCAD rendering
- Test with various dimension styles
- Test with different arrowhead sizes
- Test with different hookline lengths

### Test Files Needed
- Simple leader examples from AutoCAD
- Leaders with different path types (straight, spline)
- Leaders with various annotation types
- Complex drawings with multiple leaders
- Leaders with different dimension styles

## Rollback

1. Revert changes to `DxfParser.js` (remove LEADER import and registration)
2. Revert changes to `DxfScene.js` (remove LEADER case and all decomposition methods)
3. Delete `src/core/dxf-viewer-library/parser/entities/leader.js`
4. Verify no references to LEADER remain in codebase

## Effort

**Complexity**: Medium-High

**Time**: 11-15 hours
- Phase 1 (Parser): 2-3 hours
- Phase 2 (Basic Structure): 1-2 hours
- Phase 3 (Path Rendering): 3-4 hours
- Phase 4 (Arrowhead/Hookline): 3-4 hours
- Phase 5 (Edge Cases/Polish): 2-3 hours

## Dependencies

- Existing dimension style system (`DimStyleCodes.js`, `_GetDimStyleValue()`)
- Existing spline tessellation logic (`_InterpolateSpline()`)
- Existing arrowhead shape from `LinearDimension.js`
- Existing entity decomposition patterns
- Existing helper methods (`_GetEntityColor()`, `_GetEntityLayer()`, `_GetEntityExtrusionTransform()`)

## Potential Challenges

1. **Spline Tessellation**: Initial implementation uses linear interpolation between control points. May need proper B-spline or Catmull-Rom interpolation for accurate rendering (can enhance later).

2. **Annotation References**: Group 340 references to MTEXT, INSERT, or TOLERANCE entities are handled separately by existing text/block systems. No special handling needed initially.

3. **3D Leaders**: Extrusion direction handling must be consistent across all decomposition methods. Use `_GetEntityExtrusionTransform()` consistently.

4. **Dimension Style Overrides**: Extended data (XDATA) may contain style overrides. Initial implementation uses entity-level style name; XDATA overrides can be added later if needed.

5. **Arrowhead Orientation**: Must correctly calculate direction from first two vertices, accounting for 3D coordinates and extrusion direction.

6. **Hookline Direction**: Must correctly interpret hooklineDirection flag and horizontalDirection vector to place hookline correctly.

## Success Criteria

- ✅ LEADER entities parse correctly from DXF files
- ✅ Leader paths render as connected line segments (straight) or smooth polylines (spline)
- ✅ Arrowheads render at correct position and orientation (first vertex)
- ✅ Hooklines render when present (last vertex)
- ✅ Dimension styles apply correctly (arrow size, hookline length, colors)
- ✅ No console errors or rendering artifacts
- ✅ Performance remains acceptable with many leaders
- ✅ 3D leaders handle extrusion direction correctly
- ✅ Edge cases handled gracefully (missing data, invalid geometry)

## Related Issues

- Parent: RITE-995 (Implement missing DXF entity types)
- Related: Any dimension rendering issues
