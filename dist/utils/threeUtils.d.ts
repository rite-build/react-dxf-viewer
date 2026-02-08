import * as THREE from 'three';
/**
 * Safely computes the bounding box for a Three.js object, skipping invalid coordinates.
 */
export declare function getSafeObjectBounds(obj: THREE.Object3D): THREE.Box3 | null;
/**
 * Safely computes the bounding box for multiple Three.js objects.
 */
export declare function getSafeObjectsBounds(objects: THREE.Object3D[]): THREE.Box3 | null;
/**
 * Converts screen coordinates to Normalized Device Coordinates (NDC).
 */
export declare function getNDC(clientX: number, clientY: number, canvas: HTMLCanvasElement): THREE.Vector2;
/**
 * Unprojects screen coordinates to a world position on the Z=0 plane.
 */
export declare function unprojectToPlane(clientX: number, clientY: number, canvas: HTMLCanvasElement, camera: THREE.Camera): THREE.Vector3;
