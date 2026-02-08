import * as J from "three";
import { InstancedBufferGeometry as te, Float32BufferAttribute as j, InstancedInterleavedBuffer as I, InterleavedBufferAttribute as E, WireframeGeometry as ne, Box3 as R, Sphere as X, Vector3 as w, ShaderMaterial as ie, ShaderLib as T, UniformsUtils as K, Vector2 as re, UniformsLib as C, Mesh as se, Vector4 as M, Line3 as oe, Matrix4 as ae, MathUtils as le } from "three";
const G = new R(), B = new w();
class H extends te {
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const e = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], t = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new j(e, 3)), this.setAttribute("uv", new j(t, 2));
  }
  applyMatrix4(e) {
    const t = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new I(t, 6, 1);
    return this.setAttribute("instanceStart", new E(n, 3, 0)), this.setAttribute("instanceEnd", new E(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(e) {
    let t;
    e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
    const n = new I(t, 6, 1);
    return this.setAttribute("instanceColorStart", new E(n, 3, 0)), this.setAttribute("instanceColorEnd", new E(n, 3, 3)), this;
  }
  fromWireframeGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromEdgesGeometry(e) {
    return this.setPositions(e.attributes.position.array), this;
  }
  fromMesh(e) {
    return this.fromWireframeGeometry(new ne(e.geometry)), this;
  }
  fromLineSegments(e) {
    const t = e.geometry;
    return this.setPositions(t.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new R());
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), G.setFromBufferAttribute(t), this.boundingBox.union(G));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new X()), this.boundingBox === null && this.computeBoundingBox();
    const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    if (e !== void 0 && t !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let r = 0;
      for (let o = 0, l = e.count; o < l; o++)
        B.fromBufferAttribute(e, o), r = Math.max(r, n.distanceToSquared(B)), B.fromBufferAttribute(t, o), r = Math.max(r, n.distanceToSquared(B));
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
  applyMatrix(e) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(e);
  }
}
C.line = {
  worldUnits: { value: 1 },
  linewidth: { value: 1 },
  resolution: { value: new re(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
T.line = {
  uniforms: K.merge([
    C.common,
    C.fog,
    C.line
  ]),
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  )
};
class Q extends ie {
  static get type() {
    return "LineMaterial";
  }
  constructor(e) {
    super({
      uniforms: K.clone(T.line.uniforms),
      vertexShader: T.line.vertexShader,
      fragmentShader: T.line.fragmentShader,
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, this.setValues(e);
  }
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(e) {
    this.uniforms.diffuse.value = e;
  }
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(e) {
    e === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(e) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
  }
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(e) {
    e === !0 !== this.dashed && (this.needsUpdate = !0), e === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(e) {
    this.uniforms.dashScale.value = e;
  }
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(e) {
    this.uniforms.dashSize.value = e;
  }
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(e) {
    this.uniforms.dashOffset.value = e;
  }
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(e) {
    this.uniforms.gapSize.value = e;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(e) {
    this.uniforms && (this.uniforms.opacity.value = e);
  }
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(e) {
    this.uniforms.resolution.value.copy(e);
  }
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(e) {
    this.defines && (e === !0 !== this.alphaToCoverage && (this.needsUpdate = !0), e === !0 ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
  }
}
const O = new M(), V = new w(), q = new w(), f = new M(), p = new M(), v = new M(), P = new w(), W = new ae(), h = new oe(), k = new w(), L = new R(), D = new X(), g = new M();
let x, b;
function $(i, e, t) {
  return g.set(0, 0, -e, 1).applyMatrix4(i.projectionMatrix), g.multiplyScalar(1 / g.w), g.x = b / t.width, g.y = b / t.height, g.applyMatrix4(i.projectionMatrixInverse), g.multiplyScalar(1 / g.w), Math.abs(Math.max(g.x, g.y));
}
function de(i, e) {
  const t = i.matrixWorld, n = i.geometry, r = n.attributes.instanceStart, o = n.attributes.instanceEnd, l = Math.min(n.instanceCount, r.count);
  for (let s = 0, u = l; s < u; s++) {
    h.start.fromBufferAttribute(r, s), h.end.fromBufferAttribute(o, s), h.applyMatrix4(t);
    const c = new w(), a = new w();
    x.distanceSqToSegment(h.start, h.end, a, c), a.distanceTo(c) < b * 0.5 && e.push({
      point: a,
      pointOnLine: c,
      distance: x.origin.distanceTo(a),
      object: i,
      face: null,
      faceIndex: s,
      uv: null,
      uv1: null
    });
  }
}
function ce(i, e, t) {
  const n = e.projectionMatrix, o = i.material.resolution, l = i.matrixWorld, s = i.geometry, u = s.attributes.instanceStart, c = s.attributes.instanceEnd, a = Math.min(s.instanceCount, u.count), d = -e.near;
  x.at(1, v), v.w = 1, v.applyMatrix4(e.matrixWorldInverse), v.applyMatrix4(n), v.multiplyScalar(1 / v.w), v.x *= o.x / 2, v.y *= o.y / 2, v.z = 0, P.copy(v), W.multiplyMatrices(e.matrixWorldInverse, l);
  for (let m = 0, y = a; m < y; m++) {
    if (f.fromBufferAttribute(u, m), p.fromBufferAttribute(c, m), f.w = 1, p.w = 1, f.applyMatrix4(W), p.applyMatrix4(W), f.z > d && p.z > d)
      continue;
    if (f.z > d) {
      const z = f.z - p.z, S = (f.z - d) / z;
      f.lerp(p, S);
    } else if (p.z > d) {
      const z = p.z - f.z, S = (p.z - d) / z;
      p.lerp(f, S);
    }
    f.applyMatrix4(n), p.applyMatrix4(n), f.multiplyScalar(1 / f.w), p.multiplyScalar(1 / p.w), f.x *= o.x / 2, f.y *= o.y / 2, p.x *= o.x / 2, p.y *= o.y / 2, h.start.copy(f), h.start.z = 0, h.end.copy(p), h.end.z = 0;
    const A = h.closestPointToPointParameter(P, !0);
    h.at(A, k);
    const F = le.lerp(f.z, p.z, A), Z = F >= -1 && F <= 1, ee = P.distanceTo(k) < b * 0.5;
    if (Z && ee) {
      h.start.fromBufferAttribute(u, m), h.end.fromBufferAttribute(c, m), h.start.applyMatrix4(l), h.end.applyMatrix4(l);
      const z = new w(), S = new w();
      x.distanceSqToSegment(h.start, h.end, S, z), t.push({
        point: S,
        pointOnLine: z,
        distance: x.origin.distanceTo(S),
        object: i,
        face: null,
        faceIndex: m,
        uv: null,
        uv1: null
      });
    }
  }
}
class Y extends se {
  constructor(e = new H(), t = new Q({ color: Math.random() * 16777215 })) {
    super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, r = new Float32Array(2 * t.count);
    for (let l = 0, s = 0, u = t.count; l < u; l++, s += 2)
      V.fromBufferAttribute(t, l), q.fromBufferAttribute(n, l), r[s] = s === 0 ? 0 : r[s - 1], r[s + 1] = r[s] + V.distanceTo(q);
    const o = new I(r, 2, 1);
    return e.setAttribute("instanceDistanceStart", new E(o, 1, 0)), e.setAttribute("instanceDistanceEnd", new E(o, 1, 1)), this;
  }
  raycast(e, t) {
    const n = this.material.worldUnits, r = e.camera;
    r === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const o = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0;
    x = e.ray;
    const l = this.matrixWorld, s = this.geometry, u = this.material;
    b = u.linewidth + o, s.boundingSphere === null && s.computeBoundingSphere(), D.copy(s.boundingSphere).applyMatrix4(l);
    let c;
    if (n)
      c = b * 0.5;
    else {
      const d = Math.max(r.near, D.distanceToPoint(x.origin));
      c = $(r, d, u.resolution);
    }
    if (D.radius += c, x.intersectsSphere(D) === !1)
      return;
    s.boundingBox === null && s.computeBoundingBox(), L.copy(s.boundingBox).applyMatrix4(l);
    let a;
    if (n)
      a = b * 0.5;
    else {
      const d = Math.max(r.near, L.distanceToPoint(x.origin));
      a = $(r, d, u.resolution);
    }
    L.expandByScalar(a), x.intersectsBox(L) !== !1 && (n ? de(this, t) : ce(this, r, t));
  }
  onBeforeRender(e) {
    const t = this.material.uniforms;
    t && t.resolution && (e.getViewport(O), this.material.uniforms.resolution.value.set(O.z, O.w));
  }
}
const U = new J.Vector2(1, 1), N = /* @__PURE__ */ new Map();
function fe(i, e) {
  U.set(i, e), N.forEach((t) => {
    t.resolution.copy(U), t.needsUpdate = !0;
  });
}
function pe(i, e = 3, t = 1) {
  const n = `${i}-${e}-${t}`;
  if (N.has(n)) {
    const o = N.get(n);
    return (o.resolution.x !== U.x || o.resolution.y !== U.y) && (o.resolution.copy(U), o.needsUpdate = !0), o;
  }
  const r = new Q({
    color: new J.Color(i),
    linewidth: e,
    resolution: U,
    // Binds to shared vector
    dashed: !1,
    worldUnits: !1,
    // Use screen-space width
    depthTest: !1,
    // Ensure overlays render on top
    transparent: !0,
    opacity: t
  });
  return N.set(n, r), r;
}
function he() {
  N.forEach((i) => i.dispose()), N.clear();
}
function me(i, e) {
  if (!i.geometry) return null;
  const t = new H(), n = [], r = i.geometry.getAttribute("position");
  if (!r) return null;
  const o = r.array, l = r.itemSize, s = r.count, u = (a) => {
    const d = Number(o[a * l]), m = Number(o[a * l + 1]), y = l >= 3 ? Number(o[a * l + 2]) : 0;
    isNaN(d) || isNaN(m) || isNaN(y) ? n.push(0, 0, 0) : n.push(d, m, y);
  };
  if (i.geometry.index) {
    const a = i.geometry.index.array;
    for (let d = 0; d < a.length; d++) u(a[d]);
  } else
    for (let a = 0; a < s; a++) u(a);
  t.setPositions(n), t.computeBoundingBox(), t.computeBoundingSphere();
  const c = new Y(t, e);
  return i.updateMatrixWorld(), c.matrix.copy(i.matrixWorld), c.matrixAutoUpdate = !1, c.renderOrder = 999, c.computeLineDistances(), c;
}
function ye(i, e, t = !1, n = null) {
  if (!i || i.length < 2) return null;
  const r = [];
  for (let s = 0; s < i.length - 1; s++) {
    const u = i[s], c = i[s + 1], a = Number(u.x), d = Number(u.y), m = Number(u.z || 0), y = Number(c.x), _ = Number(c.y), A = Number(c.z || 0);
    isNaN(a) || isNaN(d) || isNaN(m) || isNaN(y) || isNaN(_) || isNaN(A) || (r.push(a, d, m), r.push(y, _, A));
  }
  if (t && i.length > 2) {
    const s = i[i.length - 1], u = i[0], c = Number(s.x), a = Number(s.y), d = Number(s.z || 0), m = Number(u.x), y = Number(u.y), _ = Number(u.z || 0);
    !isNaN(c) && !isNaN(a) && !isNaN(d) && !isNaN(m) && !isNaN(y) && !isNaN(_) && (r.push(c, a, d), r.push(m, y, _));
  }
  if (r.length === 0) return null;
  const o = new H();
  o.setPositions(r), o.computeBoundingBox(), o.computeBoundingSphere();
  const l = new Y(o, e);
  return n && (l.matrix.copy(n), l.matrixAutoUpdate = !1), l.renderOrder = 999, l.computeLineDistances(), l;
}
export {
  he as clearLineMaterialCache,
  me as createOverlay,
  ye as createOverlayFromCoordinates,
  pe as getLineMaterial,
  U as sharedResolution,
  fe as updateResolution
};
//# sourceMappingURL=Line2Helper-D4QmpFuS.js.map
