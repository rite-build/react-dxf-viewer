var Me = Object.defineProperty;
var Ce = (c, e, t) => e in c ? Me(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t;
var d = (c, e, t) => Ce(c, typeof e != "symbol" ? e + "" : e, t);
import Se, { forwardRef as Oe, createElement as ve, useMemo as Re, useRef as ie, useState as se, useEffect as K, useCallback as J } from "react";
import * as a from "three";
var ue = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function De() {
  if (ge) return oe;
  ge = 1;
  var c = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(n, i, s) {
    var o = null;
    if (s !== void 0 && (o = "" + s), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      s = {};
      for (var l in i)
        l !== "key" && (s[l] = i[l]);
    } else s = i;
    return i = s.ref, {
      $$typeof: c,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return oe.Fragment = e, oe.jsx = t, oe.jsxs = t, oe;
}
var ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function ke() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === Y ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case R:
          return "Fragment";
        case G:
          return "Profiler";
        case A:
          return "StrictMode";
        case F:
          return "Suspense";
        case W:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case O:
            return "Portal";
          case m:
            return r.displayName || "Context";
          case E:
            return (r._context.displayName || "Context") + ".Consumer";
          case N:
            var f = r.render;
            return r = r.displayName, r || (r = f.displayName || f.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case D:
            return f = r.displayName || null, f !== null ? f : c(r.type) || "Memo";
          case w:
            f = r._payload, r = r._init;
            try {
              return c(r(f));
            } catch {
            }
        }
      return null;
    }
    function e(r) {
      return "" + r;
    }
    function t(r) {
      try {
        e(r);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var y = f.error, L = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return y.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), e(r);
      }
    }
    function n(r) {
      if (r === R) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === w)
        return "<...>";
      try {
        var f = c(r);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = B.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(r) {
      if (V.call(r, "key")) {
        var f = Object.getOwnPropertyDescriptor(r, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function l(r, f) {
      function y() {
        le || (le = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      y.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: y,
        configurable: !0
      });
    }
    function p() {
      var r = c(this.type);
      return ee[r] || (ee[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function b(r, f, y, L, Z, re) {
      var _ = y.ref;
      return r = {
        $$typeof: j,
        type: r,
        key: f,
        props: y,
        _owner: L
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function P(r, f, y, L, Z, re) {
      var _ = f.children;
      if (_ !== void 0)
        if (L)
          if (Q(_)) {
            for (L = 0; L < _.length; L++)
              k(_[L]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(_);
      if (V.call(f, "key")) {
        _ = c(r);
        var X = Object.keys(f).filter(function(u) {
          return u !== "key";
        });
        L = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", $[_ + L] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          _,
          X,
          _
        ), $[_ + L] = !0);
      }
      if (_ = null, y !== void 0 && (t(y), _ = "" + y), o(f) && (t(f.key), _ = "" + f.key), "key" in f) {
        y = {};
        for (var h in f)
          h !== "key" && (y[h] = f[h]);
      } else y = f;
      return _ && l(
        y,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), b(
        r,
        _,
        y,
        i(),
        Z,
        re
      );
    }
    function k(r) {
      C(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === w && (r._payload.status === "fulfilled" ? C(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function C(r) {
      return typeof r == "object" && r !== null && r.$$typeof === j;
    }
    var S = Se, j = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), m = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), Y = Symbol.for("react.client.reference"), B = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, Q = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var le, ee = {}, U = S.react_stack_bottom_frame.bind(
      S,
      s
    )(), q = z(n(s)), $ = {};
    ae.Fragment = R, ae.jsx = function(r, f, y) {
      var L = 1e4 > B.recentlyCreatedOwnerStacks++;
      return P(
        r,
        f,
        y,
        !1,
        L ? Error("react-stack-top-frame") : U,
        L ? z(n(r)) : q
      );
    }, ae.jsxs = function(r, f, y) {
      var L = 1e4 > B.recentlyCreatedOwnerStacks++;
      return P(
        r,
        f,
        y,
        !0,
        L ? Error("react-stack-top-frame") : U,
        L ? z(n(r)) : q
      );
    };
  })()), ae;
}
var be;
function Te() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ue.exports = De() : ue.exports = ke()), ue.exports;
}
var x = Te();
function Le(c) {
  const e = c.isLineSegments2;
  if (!(c instanceof a.Mesh || c instanceof a.Line || c instanceof a.LineSegments || e))
    return null;
  const t = c.geometry;
  if (!t) return null;
  if (e) {
    const p = t.getAttribute("instanceStart"), b = t.getAttribute("instanceEnd");
    if (!p || !b) {
      if (!t.getAttribute("position")) return null;
    } else {
      const P = new a.Box3();
      let k = !1;
      c.updateMatrixWorld(!0);
      const C = (S) => {
        const j = S.array, O = S.itemSize;
        for (let R = 0; R < j.length; R += O) {
          const A = j[R], G = j[R + 1], E = O > 2 ? j[R + 2] : 0;
          if (isFinite(A) && isFinite(G) && isFinite(E)) {
            const m = new a.Vector3(A, G, E).applyMatrix4(c.matrixWorld);
            isFinite(m.x) && isFinite(m.y) && isFinite(m.z) && (P.expandByPoint(m), k = !0);
          }
        }
      };
      return C(p), C(b), k ? P : null;
    }
  }
  const n = t.getAttribute("position");
  if (!n || !n.array) return null;
  const i = n.array, s = n.itemSize, o = new a.Box3();
  let l = !1;
  c.updateMatrixWorld(!0);
  for (let p = 0; p < i.length; p += s) {
    const b = i[p], P = i[p + 1], k = s > 2 ? i[p + 2] : 0;
    if (isFinite(b) && isFinite(P) && isFinite(k)) {
      const C = new a.Vector3(b, P, k).applyMatrix4(c.matrixWorld);
      isFinite(C.x) && isFinite(C.y) && isFinite(C.z) && (o.expandByPoint(C), l = !0);
    }
  }
  return l ? o : null;
}
function Ae(c) {
  const e = new a.Box3();
  let t = !1;
  for (const n of c) {
    const i = Le(n);
    i && !i.isEmpty() && (e.union(i), t = !0);
  }
  return t ? e : null;
}
function we(c, e, t) {
  const n = t.getBoundingClientRect();
  return new a.Vector2(
    (c - n.left) / n.width * 2 - 1,
    -((e - n.top) / n.height) * 2 + 1
  );
}
function Fe(c, e, t, n) {
  const i = we(c, e, t), s = new a.Vector3(i.x, i.y, 0);
  return s.unproject(n), s.z = 0, s;
}
let T = null;
async function Ie() {
  return T || (T = await import("./Line2Helper-D4QmpFuS.js")), T;
}
function Pe(c, e, t = 1) {
  return T ? T.getLineMaterial(c, e, t) : new a.LineBasicMaterial({ color: c, linewidth: e, transparent: !0, opacity: t });
}
function je(c, e, t, n) {
  return T ? T.createOverlayFromCoordinates(c, e, t, n) : null;
}
function Ne(c, e) {
  return T ? T.createOverlay(c, e) : null;
}
function He(c, e) {
  T && T.updateResolution(c, e);
}
function Ge() {
  T && T.clearLineMaterialCache();
}
class Be {
  constructor(e, t) {
    d(this, "viewer");
    d(this, "hoveredObject", null);
    d(this, "isMouseDown", !1);
    d(this, "isDragging", !1);
    d(this, "interactionLayer");
    d(this, "activeOverlays", /* @__PURE__ */ new Map());
    d(this, "selectedHandles", /* @__PURE__ */ new Set());
    d(this, "validHandles", null);
    d(this, "intersectableObjectsCache", null);
    d(this, "cacheLastUpdated", 0);
    d(this, "CACHE_TTL", 2e3);
    d(this, "dxfEntities", null);
    d(this, "_boundOnPointerMove");
    d(this, "_boundOnPointerLeave");
    d(this, "_boundOnPointerDown");
    d(this, "_boundOnPointerUp");
    d(this, "_boundOnViewChanged");
    d(this, "isEnabled", !0);
    d(this, "onClick");
    d(this, "boundingBoxMesh", null);
    d(this, "animationFrameId", null);
    d(this, "_boundOnLoaded");
    d(this, "_boundOnCleared");
    this.viewer = e, this.onClick = t, this.interactionLayer = new a.Group(), this.interactionLayer.name = "InteractionLayer", this.interactionLayer.renderOrder = 999, this.viewer.GetScene().add(this.interactionLayer), this.updateResolution(), this._boundOnPointerMove = this._onPointerMove.bind(this), this._boundOnPointerLeave = this._onPointerLeave.bind(this), this._boundOnPointerDown = this._onPointerDown.bind(this), this._boundOnPointerUp = this._onPointerUp.bind(this), this._boundOnViewChanged = this.updateResolution.bind(this), this._boundOnLoaded = this._onLoaded.bind(this), this._boundOnCleared = this._onCleared.bind(this), this.setupEventListeners(), this.initLine2Helper();
  }
  _onLoaded() {
    this.viewer.GetScene().add(this.interactionLayer), this.dxfEntities = null, this.clearHighlights();
  }
  _onCleared() {
    this.clearHighlights(), this.dxfEntities = null, this.intersectableObjectsCache = null;
  }
  async initLine2Helper() {
    await Ie();
  }
  updateResolution() {
    const e = this.viewer.GetCanvas();
    e && He(e.width, e.height);
  }
  setEnabled(e) {
    this.isEnabled = e, e || (this._clearHover(), this.clearHighlights());
  }
  setupEventListeners() {
    const e = this.viewer.GetCanvas();
    e && (e.addEventListener("pointermove", this._boundOnPointerMove), e.addEventListener("pointerleave", this._boundOnPointerLeave), e.addEventListener("pointerdown", this._boundOnPointerDown), e.addEventListener("pointerup", this._boundOnPointerUp), this.viewer.Subscribe("pointerdown", this._boundOnPointerDown), this.viewer.Subscribe("resized", this._boundOnViewChanged), this.viewer.Subscribe("loaded", this._boundOnLoaded), this.viewer.Subscribe("cleared", this._boundOnCleared));
  }
  destroy() {
    const e = this.viewer.GetCanvas();
    e && (e.removeEventListener("pointermove", this._boundOnPointerMove), e.removeEventListener("pointerleave", this._boundOnPointerLeave), e.removeEventListener("pointerdown", this._boundOnPointerDown), e.removeEventListener("pointerup", this._boundOnPointerUp)), this.viewer.Unsubscribe("pointerdown", this._boundOnPointerDown), this.viewer.Unsubscribe("resized", this._boundOnViewChanged), this.viewer.Unsubscribe("loaded", this._boundOnLoaded), this.viewer.Unsubscribe("cleared", this._boundOnCleared), this._clearHover(), this.clearHighlights(), Ge(), this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.viewer.GetScene().remove(this.interactionLayer);
  }
  resolveDxfObject(e) {
    let t = e;
    for (; t; ) {
      if (t.userData && t.userData.dxfHandle)
        return t;
      t = t.parent;
    }
    return null;
  }
  ensureDxfIndex() {
    if (this.dxfEntities) return;
    const e = this.viewer.GetDxf();
    if (!e) return;
    this.dxfEntities = /* @__PURE__ */ new Map();
    const t = (n) => {
      if (n)
        for (const i of n)
          i.handle && this.dxfEntities.set(i.handle, i);
    };
    if (e.entities && t(e.entities), e.blocks)
      if (e.blocks instanceof Map)
        e.blocks.forEach((n) => {
          n.entities && t(n.entities);
        });
      else
        for (const n in e.blocks) {
          const i = e.blocks[n];
          i.entities && t(i.entities);
        }
  }
  getGeometryFromHandle(e) {
    if (this.ensureDxfIndex(), !this.dxfEntities) return null;
    const t = this.dxfEntities.get(e);
    if (!t) return null;
    if (t.type === "LWPOLYLINE") {
      const n = t.elevation || 0;
      return { vertices: (t.vertices || []).map((s) => ({ x: s.x ?? 0, y: s.y ?? 0, z: n })), isClosed: !!(t.shape || t.closed) };
    } else {
      if (t.type === "POLYLINE")
        return { vertices: (t.vertices || []).map((i) => ({ x: i.x ?? 0, y: i.y ?? 0, z: i.z ?? 0 })), isClosed: !!(t.shape || t.closed) };
      if (t.type === "LINE") {
        if (t.vertices)
          return { vertices: t.vertices.map((i) => ({ x: i.x ?? 0, y: i.y ?? 0, z: i.z ?? 0 })), isClosed: !1 };
        if (t.start && t.end)
          return {
            vertices: [
              { x: t.start.x ?? 0, y: t.start.y ?? 0, z: t.start.z ?? 0 },
              { x: t.end.x ?? 0, y: t.end.y ?? 0, z: t.end.z ?? 0 }
            ],
            isClosed: !1
          };
      }
    }
    return null;
  }
  addOverlay(e, t, n = 3, i = 1, s = !1) {
    const o = this.resolveDxfObject(e);
    if (!o || this.activeOverlays.has(o)) return !1;
    o.updateMatrixWorld(!0);
    let l = null;
    const p = o.userData.dxfHandle, b = s ? null : this.getGeometryFromHandle(p);
    if (b) {
      const P = Pe(t, n, i);
      l = je(
        b.vertices,
        P,
        b.isClosed,
        o.matrixWorld
      );
    }
    if (!l) {
      if (o instanceof a.LineSegments || o instanceof a.Line)
        if (s) {
          const P = new a.LineBasicMaterial({
            color: t,
            linewidth: 1,
            depthTest: !1,
            transparent: !0,
            opacity: i
          });
          l = o.clone(), l.material = P, l.renderOrder = 999;
        } else {
          const P = Pe(t, n, i);
          l = Ne(o, P);
        }
      else if (o instanceof a.Mesh) {
        const P = new a.MeshBasicMaterial({
          color: t,
          transparent: !0,
          opacity: i,
          depthTest: !1
        });
        l = o.clone(), l.material = P, l.renderOrder = 999;
      }
    }
    return l ? (this.interactionLayer.add(l), this.activeOverlays.set(o, l), !0) : !1;
  }
  removeOverlay(e) {
    const t = this.resolveDxfObject(e);
    if (!t) return;
    const n = this.activeOverlays.get(t);
    n && (this.cleanupOverlayResource(n), this.activeOverlays.delete(t), this.viewer.Render());
  }
  clearAllOverlays() {
    this.activeOverlays.forEach((e) => {
      this.cleanupOverlayResource(e);
    }), this.activeOverlays.clear(), this.viewer.Render();
  }
  cleanupOverlayResource(e) {
    if (!e) return;
    e.parent && e.parent.remove(e), e.geometry && e.geometry.dispose();
    const t = e.material;
    if (t) {
      const n = e.isLineSegments2 || e.type === "LineSegments2", i = e.isLine2 || e.type === "Line2";
      !n && !i && (Array.isArray(t) ? t.forEach((s) => s.dispose()) : t.dispose());
    }
    e.children && [...e.children].forEach((n) => this.cleanupOverlayResource(n));
  }
  setValidHandles(e) {
    this.validHandles = e ? new Set(e.map((t) => t.toLowerCase())) : null, this.intersectableObjectsCache = null;
  }
  getIntersectableObjects() {
    const e = Date.now();
    if (this.intersectableObjectsCache && e - this.cacheLastUpdated < this.CACHE_TTL)
      return this.intersectableObjectsCache;
    const t = [];
    return this.viewer.GetScene().traverse((n) => {
      if (n.userData.dxfHandle && n.parent !== this.interactionLayer) {
        if (this.validHandles && !this.validHandles.has(n.userData.dxfHandle.toLowerCase()))
          return;
        t.push(n);
      }
    }), this.intersectableObjectsCache = t, this.cacheLastUpdated = e, t;
  }
  _onPointerMove(e) {
    if (!this.isEnabled) return;
    this.isMouseDown && (this.isDragging = !0);
    const t = this.viewer.GetCanvas();
    if (!t) {
      this._clearHover();
      return;
    }
    const n = we(e.clientX, e.clientY, t), i = new a.Raycaster();
    i.setFromCamera(n, this.viewer.GetCamera()), i.params.Line.threshold = 6;
    const s = i.intersectObjects(this.getIntersectableObjects());
    let o = null;
    s.length > 0 && (o = this.resolveDxfObject(s[0].object)), o ? o !== this.hoveredObject && (this._clearHover(), this._startHover(o)) : this.hoveredObject && this._clearHover();
  }
  _startHover(e) {
    this.hoveredObject = e;
    const t = this.viewer.GetCanvas();
    t && (t.style.cursor = "pointer"), this.addOverlay(e, 39423, 4, 0.5), this.viewer.Render();
  }
  _clearHover() {
    if (this.hoveredObject) {
      const t = this.hoveredObject.userData.dxfHandle;
      (!t || !this.selectedHandles.has(t.toLowerCase())) && this.removeOverlay(this.hoveredObject), this.hoveredObject = null;
    }
    const e = this.viewer.GetCanvas();
    e && (e.style.cursor = "default");
  }
  _onPointerDown(e) {
    this.isEnabled && (this.isMouseDown = !0, this.isDragging = !1);
  }
  _onPointerUp(e) {
    if (!this.isEnabled) return;
    if (this.isDragging) {
      this.isMouseDown = !1, this.isDragging = !1;
      return;
    }
    if (this.hoveredObject) {
      const o = this.hoveredObject.userData.dxfHandle;
      this.onClick && this.onClick(o), this.isMouseDown = !1, this.isDragging = !1;
      return;
    }
    const t = this.viewer.GetCanvas();
    if (!t) return;
    const n = we(e.clientX, e.clientY, t), i = new a.Raycaster();
    i.setFromCamera(n, this.viewer.GetCamera()), i.params.Line.threshold = 3;
    const s = i.intersectObjects(this.getIntersectableObjects());
    if (s.length > 0) {
      const o = this.resolveDxfObject(s[0].object);
      if (o) {
        const l = o.userData.dxfHandle;
        this.onClick && this.onClick(l);
      }
    }
    this.isMouseDown = !1, this.isDragging = !1;
  }
  _onPointerLeave() {
    this._clearHover(), this.isMouseDown = !1, this.isDragging = !1;
  }
  highlightHandles(e) {
    if (this.clearHighlights(), e.length === 0) return;
    const t = e.map((n) => n.toLowerCase());
    this.viewer.GetScene().traverse((n) => {
      const i = n.userData.dxfHandle;
      i && t.includes(i.toLowerCase()) && n.parent !== this.interactionLayer && this.addOverlay(n, 39423, 6);
    }), this.viewer.Render();
  }
  highlightContext(e) {
    if (e.length === 0) return;
    const t = e.map((n) => n.toLowerCase());
    this.viewer.GetScene().traverse((n) => {
      const i = n.userData.dxfHandle;
      if (i && t.includes(i.toLowerCase()) && n.parent !== this.interactionLayer) {
        if (this.selectedHandles.has(i.toLowerCase())) return;
        this.addOverlay(n, 13421772, 2);
      }
    }), this.viewer.Render();
  }
  selectHandles(e, t = [], n = !0) {
    if (this.clearHighlights(), e.length === 0) return;
    const i = e.map((l) => l.toLowerCase());
    e.forEach((l) => this.selectedHandles.add(l.toLowerCase())), t.length > 0 && this.highlightContext(t);
    const s = [];
    if (this.viewer.GetScene().traverse((l) => {
      const p = l.userData.dxfHandle;
      p && i.includes(p.toLowerCase()) && l.parent !== this.interactionLayer && ((l instanceof a.LineSegments || l instanceof a.Line) && l.geometry && !l.geometry.boundingBox && l.geometry.computeBoundingBox(), s.push(l));
    }), s.length === 0) return;
    s.forEach((l) => {
      const p = l.userData.dxfType;
      (p === "TEXT" || p === "MTEXT" || p === "ATTRIB") && l instanceof a.LineSegments ? this.addOverlay(l, 39423, 2, 1, !0) : this.addOverlay(l, 39423, 5);
    }), this.viewer.Render();
    const o = Ae(s);
    !o || o.isEmpty() || (t.length === 0 && this.highlightContextInBounds(o, Array.from(this.selectedHandles)), this.createBoundingBoxOverlay(o), n && this.animateToFit(o, 800));
  }
  highlightContextInBounds(e, t) {
    const n = e.clone(), i = new a.Vector3();
    e.getSize(i), n.expandByVector(i.multiplyScalar(0.1));
    const s = t.map((o) => o.toLowerCase());
    this.viewer.GetScene().traverse((o) => {
      if (o.parent === this.interactionLayer) return;
      const l = o.userData.dxfHandle;
      if (l && s.includes(l.toLowerCase()) || !(o instanceof a.Mesh || o instanceof a.Line || o instanceof a.LineSegments)) return;
      const p = new a.Vector3();
      o.getWorldPosition(p), n.containsPoint(p) && this.addOverlay(o, 13421772, 2);
    }), this.viewer.Render();
  }
  clearHighlights() {
    this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.selectedHandles.clear(), this.clearAllOverlays(), this.boundingBoxMesh && (this.cleanupOverlayResource(this.boundingBoxMesh), this.boundingBoxMesh = null), this.viewer.Render();
  }
  createBoundingBoxOverlay(e) {
    if (e.isEmpty() || !isFinite(e.min.x) || !isFinite(e.min.y) || !isFinite(e.min.z) || !isFinite(e.max.x) || !isFinite(e.max.y) || !isFinite(e.max.z))
      return;
    this.boundingBoxMesh && (this.cleanupOverlayResource(this.boundingBoxMesh), this.boundingBoxMesh = null);
    const t = new a.Vector3(), n = new a.Vector3();
    e.getSize(t), e.getCenter(n);
    const i = 10;
    t.x < i && (t.x = i), t.y < i && (t.y = i), t.z < i && (t.z = i);
    try {
      const s = new a.BoxGeometry(t.x, t.y, t.z), o = new a.MeshBasicMaterial({
        color: 9647082,
        transparent: !0,
        opacity: 0.2,
        side: a.DoubleSide,
        depthTest: !1
      });
      this.boundingBoxMesh = new a.Mesh(s, o), this.boundingBoxMesh.position.copy(n);
      const l = new a.EdgesGeometry(s), p = new a.LineBasicMaterial({
        color: 9647082,
        linewidth: 2,
        depthTest: !1
      }), b = new a.LineSegments(l, p);
      this.boundingBoxMesh.add(b), this.viewer.GetScene().add(this.boundingBoxMesh), this.viewer.Render();
    } catch (s) {
      console.error("[EntityInteraction] Error creating bounding box overlay:", s);
    }
  }
  animateToFit(e, t) {
    this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
    const n = this.viewer.GetOrigin();
    if (e.isEmpty() || !isFinite(e.min.x) || !isFinite(e.min.y)) return;
    const i = new a.Vector3(), s = new a.Vector3();
    e.getSize(i), e.getCenter(s);
    const o = s.x - n.x, l = s.y - n.y, p = this.viewer.GetCanvas(), b = p ? p.width : 800, P = p ? p.height : 600, k = b / P, C = 1.5;
    let S = i.x * C;
    i.y * C * k > S && (S = i.y * C * k), S = Math.max(S, 30);
    let O = null;
    const R = performance.now(), A = (G) => {
      if (!O) {
        const w = this.viewer.GetCamera();
        if (!isFinite(w.position.x) || !isFinite(w.zoom)) {
          this.animationFrameId = null;
          return;
        }
        if (O = {
          cx: w.position.x - n.x,
          cy: w.position.y - n.y,
          vw: w.right - w.left
        }, Math.hypot(o - O.cx, l - O.cy) < O.vw * 0.01 && Math.abs(S - O.vw) < O.vw * 0.01) {
          this.animationFrameId = null;
          return;
        }
      }
      const E = G - R, m = Math.min(E / t, 1), N = m < 0.5 ? 4 * m * m * m : 1 - Math.pow(-2 * m + 2, 3) / 2, F = O.cx + (o - O.cx) * N, W = O.cy + (l - O.cy) * N, D = O.vw + (S - O.vw) * N;
      this.viewer.SetView({ x: F + n.x, y: W + n.y }, D), this.viewer.Render(), m < 1 ? this.animationFrameId = requestAnimationFrame(A) : this.animationFrameId = null;
    };
    this.animationFrameId = requestAnimationFrame(A);
  }
}
const Ve = 40, ze = 10, We = 20, pe = 7, ce = 16711680, Ye = 16733525, Ue = 16711680, $e = 3, ne = 999, me = !1;
class Xe {
  constructor(e, t, n) {
    d(this, "viewer");
    d(this, "canvas");
    d(this, "isActive", !1);
    d(this, "points", []);
    d(this, "previewLine", null);
    d(this, "polygonLine", null);
    d(this, "pointsMesh", null);
    d(this, "startPointMesh", null);
    d(this, "mousePosition", new a.Vector3());
    d(this, "completedPolygonLine", null);
    d(this, "completedPointsMesh", null);
    d(this, "isHoveringNearStart", !1);
    d(this, "onComplete");
    d(this, "onCancel");
    d(this, "_boundOnPointerDown");
    d(this, "_boundOnPointerMove");
    d(this, "_boundOnKeyDown");
    d(this, "_boundOnDblClick");
    this.viewer = e;
    const i = e.GetCanvas();
    if (!i)
      throw new Error("Canvas not available");
    this.canvas = i, this.onComplete = t, this.onCancel = n, this._boundOnPointerDown = this._onPointerDown.bind(this), this._boundOnPointerMove = this._onPointerMove.bind(this), this._boundOnKeyDown = this._onKeyDown.bind(this), this._boundOnDblClick = this._onDblClick.bind(this);
  }
  activate() {
    this.isActive || (this.isActive = !0, this.points = [], this.canvas.style.cursor = "crosshair", this.canvas.addEventListener("pointerdown", this._boundOnPointerDown, { capture: !0 }), this.canvas.addEventListener("pointermove", this._boundOnPointerMove), window.addEventListener("keydown", this._boundOnKeyDown), this.canvas.addEventListener("dblclick", this._boundOnDblClick, { capture: !0 }));
  }
  deactivate() {
    this.isActive && (this.isActive = !1, this.canvas.style.cursor = "default", this.canvas.removeEventListener("pointerdown", this._boundOnPointerDown, { capture: !0 }), this.canvas.removeEventListener("pointermove", this._boundOnPointerMove), window.removeEventListener("keydown", this._boundOnKeyDown), this.canvas.removeEventListener("dblclick", this._boundOnDblClick, { capture: !0 }), this.clearDrawingVisuals());
  }
  clearCompletedPolygon() {
    const e = this.viewer.GetScene();
    this.completedPolygonLine && (e.remove(this.completedPolygonLine), this.completedPolygonLine.geometry.dispose(), this.completedPolygonLine.material.dispose(), this.completedPolygonLine = null), this.completedPointsMesh && (e.remove(this.completedPointsMesh), this.completedPointsMesh.geometry.dispose(), this.completedPointsMesh.material.dispose(), this.completedPointsMesh = null), this.viewer.Render();
  }
  clearInProgressPolygon() {
    this.points = [], this.clearDrawingVisuals();
  }
  clearDrawingVisuals() {
    this.clearDrawingVisualsOnly();
    const e = this.viewer.GetScene();
    this.previewLine && (e.remove(this.previewLine), this.previewLine.geometry.dispose(), this.previewLine.material.dispose(), this.previewLine = null), this.viewer.Render();
  }
  getSnapThreshold() {
    const e = this.viewer.GetCamera(), n = (e.right - e.left) / e.zoom / this.canvas.width;
    return Ve * n;
  }
  isNearStartPoint(e) {
    if (this.points.length < 3)
      return !1;
    const t = this.points[0], n = e.distanceTo(t), i = this.getSnapThreshold();
    return n < i;
  }
  _getWorldPosition(e) {
    return Fe(e.clientX, e.clientY, this.canvas, this.viewer.GetCamera());
  }
  _onPointerDown(e) {
    if (e.button !== 0) return;
    e.stopPropagation(), e.preventDefault();
    const t = this._getWorldPosition(e);
    if (t) {
      if (this.isNearStartPoint(t)) {
        this.completeSelection();
        return;
      }
      this.points.push(t), this.updateVisuals();
    }
  }
  _onPointerMove(e) {
    const t = this._getWorldPosition(e);
    t && (this.mousePosition.copy(t), this.isHoveringNearStart = this.isNearStartPoint(t), this.canvas.style.cursor = this.isHoveringNearStart ? "pointer" : "crosshair", this.updatePreview(), this.updateVisuals());
  }
  _onDblClick(e) {
    e.preventDefault(), e.stopPropagation(), this.completeSelection();
  }
  _onKeyDown(e) {
    this.isActive && (e.key === "Enter" ? (e.preventDefault(), e.stopPropagation(), this.completeSelection()) : e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), this.cancelSelection()));
  }
  updateVisuals() {
    const e = this.viewer.GetScene();
    this.clearDrawingVisualsOnly(), this.points.length > 0 && (this.drawRegularPoints(e), this.drawStartPoint(e), this.drawPolygonLine(e)), this.viewer.Render();
  }
  drawRegularPoints(e) {
    if (this.points.length <= 1) return;
    const t = new a.BufferGeometry().setFromPoints(this.points.slice(1)), n = new a.PointsMaterial({
      color: ce,
      size: pe,
      sizeAttenuation: me
    });
    this.pointsMesh = new a.Points(t, n), this.pointsMesh.renderOrder = ne, e.add(this.pointsMesh);
  }
  drawStartPoint(e) {
    const t = this.isHoveringNearStart ? Ye : ce, n = new a.BufferGeometry().setFromPoints([this.points[0]]), i = new a.PointsMaterial({
      color: t,
      size: pe,
      sizeAttenuation: me
    });
    this.startPointMesh = new a.Points(n, i), this.startPointMesh.renderOrder = ne, e.add(this.startPointMesh);
  }
  drawPolygonLine(e) {
    if (this.points.length <= 1) return;
    const t = new a.BufferGeometry().setFromPoints(this.points), n = new a.LineBasicMaterial({ color: ce });
    this.polygonLine = new a.Line(t, n), this.polygonLine.renderOrder = ne, e.add(this.polygonLine);
  }
  clearDrawingVisualsOnly() {
    const e = this.viewer.GetScene();
    this.polygonLine && (e.remove(this.polygonLine), this.polygonLine.geometry.dispose(), this.polygonLine.material.dispose(), this.polygonLine = null), this.pointsMesh && (e.remove(this.pointsMesh), this.pointsMesh.geometry.dispose(), this.pointsMesh.material.dispose(), this.pointsMesh = null), this.startPointMesh && (e.remove(this.startPointMesh), this.startPointMesh.geometry.dispose(), this.startPointMesh.material.dispose(), this.startPointMesh = null);
  }
  updatePreview() {
    if (this.points.length === 0) return;
    const e = this.viewer.GetScene();
    this.clearPreviewLine(e);
    const t = this.points[this.points.length - 1], n = this.calculatePreviewEndPoint(), i = this.createPreviewMaterial();
    this.previewLine = new a.Line(
      new a.BufferGeometry().setFromPoints([t, n]),
      i
    ), i instanceof a.LineDashedMaterial && this.previewLine.computeLineDistances(), this.previewLine.renderOrder = ne, e.add(this.previewLine), this.viewer.Render();
  }
  clearPreviewLine(e) {
    this.previewLine && (e.remove(this.previewLine), this.previewLine.geometry.dispose(), this.previewLine.material.dispose(), this.previewLine = null);
  }
  calculatePreviewEndPoint() {
    return this.isHoveringNearStart && this.points.length >= 3 ? this.points[0] : this.mousePosition;
  }
  createPreviewMaterial() {
    return new a.LineDashedMaterial({
      color: Ue,
      dashSize: ze,
      gapSize: We,
      transparent: !1
    });
  }
  completeSelection() {
    if (this.points.length < $e) {
      this.cancelSelection();
      return;
    }
    this.createCompletedPolygonBoundary();
    const e = this.findEntitiesInPolygon();
    this.onComplete(e), this.deactivate();
  }
  createCompletedPolygonBoundary() {
    const e = this.viewer.GetScene();
    this.completedPolygonLine && e.remove(this.completedPolygonLine), this.completedPointsMesh && e.remove(this.completedPointsMesh);
    const t = new a.BufferGeometry().setFromPoints(this.points), n = new a.PointsMaterial({
      color: ce,
      size: pe,
      sizeAttenuation: me
    });
    this.completedPointsMesh = new a.Points(t, n), this.completedPointsMesh.renderOrder = ne, this.completedPointsMesh.name = "completed-polygon-points", e.add(this.completedPointsMesh);
    const i = new a.BufferGeometry().setFromPoints(this.points), s = new a.LineBasicMaterial({
      color: ce
    });
    this.completedPolygonLine = new a.LineLoop(i, s), this.completedPolygonLine.renderOrder = ne, this.completedPolygonLine.name = "completed-polygon-boundary", e.add(this.completedPolygonLine), this.viewer.Render();
  }
  cancelSelection() {
    this.onCancel(), this.deactivate();
  }
  findEntitiesInPolygon() {
    const e = [], t = new a.Box3().setFromPoints(this.points);
    return this.viewer.GetScene().traverse((n) => {
      if (n.userData.dxfHandle) {
        const i = Le(n);
        if (i && t.intersectsBox(i)) {
          const s = new a.Vector3();
          i.getCenter(s), this.isPointInPolygon(s) && e.push(n.userData.dxfHandle);
        }
      }
    }), e;
  }
  isPointInPolygon(e) {
    let t = !1;
    for (let n = 0, i = this.points.length - 1; n < this.points.length; i = n++) {
      const s = this.points[n].x, o = this.points[n].y, l = this.points[i].x, p = this.points[i].y;
      o > e.y != p > e.y && e.x < (l - s) * (e.y - o) / (p - o) + s && (t = !t);
    }
    return t;
  }
}
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _e = (...c) => c.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ze = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = Oe(
  ({
    color: c = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: s,
    iconNode: o,
    ...l
  }, p) => ve(
    "svg",
    {
      ref: p,
      ...Ze,
      width: e,
      height: e,
      stroke: c,
      strokeWidth: n ? Number(t) * 24 / Number(e) : t,
      className: _e("lucide", i),
      ...l
    },
    [
      ...o.map(([b, P]) => ve(b, P)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = (c, e) => {
  const t = Oe(
    ({ className: n, ...i }, s) => ve(Je, {
      ref: s,
      iconNode: e,
      className: _e(`lucide-${qe(c)}`, n),
      ...i
    })
  );
  return t.displayName = `${c}`, t;
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = fe("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = fe("SquareDashedMousePointer", [
  [
    "path",
    {
      d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
      key: "xwnzip"
    }
  ],
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h2", key: "1qve2z" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v2", key: "p14lih" }],
  ["path", { d: "M3 14v1", key: "vnatye" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = fe("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = fe("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
function he(c) {
  const e = ie(c);
  return K(() => {
    e.current = c;
  }, [c]), e;
}
function de({ onClick: c, active: e, title: t, children: n }) {
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      className: `dxf-toolbar-btn ${e ? "dxf-toolbar-btn-active" : ""}`,
      onClick: c,
      title: t,
      type: "button",
      children: n
    }
  );
}
function rt({
  file: c,
  url: e,
  fileName: t = "drawing.dxf",
  fonts: n,
  className: i,
  // Inputs
  selectedHandles: s = [],
  visibleHandles: o = null,
  filteredHandles: l = null,
  interactiveHandles: p = null,
  isPolygonMode: b = !1,
  // Outputs
  onLoad: P,
  onError: k,
  onSelectionChange: C,
  onPolygonModeChange: S,
  // Options
  showToolbar: j = !0,
  enablePolygonSelection: O = !0,
  enableInteraction: R = !0,
  enableZoomOnSelect: A = !0
}) {
  const G = Re(
    () => p ?? o,
    [p, o]
  ), E = he(C), m = he(S), N = he(P), F = he(k), W = ie(null), D = ie(null), w = ie(null), I = ie(null), Y = ie(!1), [B, V] = se(!1), [Q, z] = se(!0), [le, ee] = se("Initializing..."), [U, q] = se(null), [$, r] = se(null);
  K(() => {
    V(b);
  }, [b]), K(() => {
    typeof window > "u" || import("./index-eV3yEHKa.js").then((h) => {
      r(() => h.DxfViewer);
    }).catch((h) => {
      console.error("Failed to load DxfViewer:", h), q(h instanceof Error ? h : new Error(String(h))), z(!1);
    });
  }, []);
  const f = J(() => {
    var h;
    if (!W.current || !$) return null;
    if (D.current) {
      try {
        D.current.Destroy();
      } catch (u) {
        console.warn("Error destroying viewer:", u);
      }
      D.current = null;
    }
    try {
      const u = {
        autoResize: !0,
        clearColor: new a.Color("#ffffff"),
        clearAlpha: 1,
        antialias: !0,
        colorCorrection: !0,
        blackWhiteInversion: !0
      }, v = new $(W.current, u);
      if (!v.HasRenderer())
        throw new Error("WebGL not available. Please check your browser supports WebGL.");
      return D.current = v, v.Subscribe("loaded", () => {
        var M;
        console.log("DXF loaded successfully");
        const g = v.GetBounds();
        if (g) {
          const H = v.GetOrigin();
          v.FitView(
            g.minX - H.x,
            g.maxX - H.x,
            g.minY - H.y,
            g.maxY - H.y,
            0.1
          );
        }
        v.Render(), z(!1), (M = N.current) == null || M.call(N);
      }), v.Subscribe("message", (g) => {
        const { message: M, level: H } = g.detail;
        H === "error" ? console.error("[DxfViewer]", M) : H === "warn" && console.warn("[DxfViewer]", M);
      }), v;
    } catch (u) {
      const v = u instanceof Error ? u : new Error(String(u));
      return q(v), z(!1), (h = F.current) == null || h.call(F, v), null;
    }
  }, [$, N, F]), y = J(
    async (h, u) => {
      var v;
      z(!0), q(null), ee("Loading...");
      try {
        let g;
        if (typeof u == "string")
          g = u;
        else {
          const M = new Blob([u], { type: "application/octet-stream" });
          g = URL.createObjectURL(M);
        }
        await h.Load({
          url: g,
          fonts: n ?? null,
          progressCbk: (M, H, ye) => {
            let te = M;
            if (M === "fetch" ? te = "Downloading..." : M === "parse" ? te = "Parsing DXF..." : M === "prepare" ? te = "Preparing scene..." : M === "font" && (te = "Loading fonts..."), ye && H) {
              const Ee = Math.round(H / ye * 100);
              ee(`${te} ${Ee}%`);
            } else
              ee(te);
          }
        }), typeof u != "string" && URL.revokeObjectURL(g);
      } catch (g) {
        const M = g instanceof Error ? g : new Error(String(g));
        console.error("Failed to load DXF:", M), q(M), z(!1), (v = F.current) == null || v.call(F, M);
      }
    },
    [n, F]
  );
  K(() => {
    if (!$ || !W.current) return;
    const h = f();
    if (h)
      return R && (w.current = new Be(h, (u) => {
        var v, g;
        V(!1), (v = m.current) == null || v.call(m, !1), Y.current = !1, (g = E.current) == null || g.call(E, [u]);
      })), O && (I.current = new Xe(
        h,
        (u) => {
          var v, g;
          V(!1), (v = m.current) == null || v.call(m, !1), Y.current = !0, (g = E.current) == null || g.call(E, u, { isPolygonSelection: !0 });
        },
        () => {
          var u;
          V(!1), (u = m.current) == null || u.call(m, !1);
        }
      )), c ? y(h, c) : e && y(h, e), () => {
        var u, v;
        if ((u = w.current) == null || u.destroy(), w.current = null, (v = I.current) == null || v.deactivate(), I.current = null, D.current) {
          try {
            D.current.Destroy();
          } catch (g) {
            console.warn("Error destroying viewer:", g);
          }
          D.current = null;
        }
      };
  }, [$, c, e, f, y, R, O, E, m]), K(() => {
    !w.current || !I.current || (B ? (w.current.setEnabled(!1), I.current.activate()) : (I.current.deactivate(), w.current.setEnabled(!0), s.length > 0 && !Y.current && w.current.selectHandles(s, [], A)));
  }, [B, s, A]), K(() => {
    if (!w.current || Q || U) return;
    const h = Y.current;
    Y.current = !1;
    const u = o || [];
    if (s.length > 0) {
      const v = s.length === 1, g = A && (v || !h);
      w.current.selectHandles(s, u, g);
    } else l && l.length > 0 ? w.current.highlightHandles(l) : w.current.selectHandles([], u, !1);
  }, [s, o, l, Q, U, A]), K(() => {
    w.current && w.current.setValidHandles(G);
  }, [G]);
  const L = J(() => {
    var u;
    const h = !B;
    V(h), (u = m.current) == null || u.call(m, h);
  }, [B, m]), Z = J(() => {
    const h = D.current;
    if (!h) return;
    const u = h.GetBounds();
    if (u) {
      const v = h.GetOrigin();
      h.FitView(
        u.minX - v.x,
        u.maxX - v.x,
        u.minY - v.y,
        u.maxY - v.y,
        0.1
      ), h.Render();
    }
  }, []), re = J(() => {
    var h, u;
    V(!1), (h = m.current) == null || h.call(m, !1), w.current && w.current.clearHighlights(), I.current && (I.current.clearCompletedPolygon(), I.current.clearInProgressPolygon()), Y.current = !1, (u = E.current) == null || u.call(E, [], { isReset: !0 }), Z();
  }, [Z, E, m]), _ = J(() => {
    const h = D.current;
    if (!h) return;
    const u = h.GetCamera();
    u.zoom *= 1.25, u.updateProjectionMatrix(), h.Render();
  }, []), X = J(() => {
    const h = D.current;
    if (!h) return;
    const u = h.GetCamera();
    u.zoom *= 0.8, u.updateProjectionMatrix(), h.Render();
  }, []);
  return /* @__PURE__ */ x.jsx("div", { className: `dxf-viewer-wrapper ${i ?? ""}`, children: /* @__PURE__ */ x.jsx("div", { className: "dxf-main-content", children: /* @__PURE__ */ x.jsxs("div", { className: "dxf-viewer-container", children: [
    /* @__PURE__ */ x.jsx(
      "div",
      {
        ref: W,
        style: { width: "100%", height: "100%", position: "absolute", inset: 0 }
      }
    ),
    Q && /* @__PURE__ */ x.jsxs("div", { className: "dxf-loading-overlay", children: [
      /* @__PURE__ */ x.jsx("div", { className: "dxf-loading-spinner" }),
      /* @__PURE__ */ x.jsx("div", { className: "dxf-loading-progress", children: le })
    ] }),
    U && /* @__PURE__ */ x.jsxs("div", { className: "dxf-error-overlay", children: [
      /* @__PURE__ */ x.jsxs("svg", { className: "dxf-error-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
        /* @__PURE__ */ x.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ x.jsx("path", { d: "M15 9l-6 6M9 9l6 6" })
      ] }),
      /* @__PURE__ */ x.jsx("div", { className: "dxf-error-title", children: "Failed to load DXF" }),
      /* @__PURE__ */ x.jsx("div", { className: "dxf-error-message", children: U.message })
    ] }),
    j && !Q && !U && /* @__PURE__ */ x.jsxs("div", { className: "dxf-bottom-toolbar", children: [
      /* @__PURE__ */ x.jsx(de, { onClick: re, title: "Reset View", children: /* @__PURE__ */ x.jsx(Ke, { size: 18 }) }),
      O && /* @__PURE__ */ x.jsx(
        de,
        {
          active: B,
          onClick: L,
          title: "Polygon Selection Tool",
          children: /* @__PURE__ */ x.jsx(Qe, { size: 18 })
        }
      ),
      /* @__PURE__ */ x.jsx("div", { className: "dxf-toolbar-separator" }),
      /* @__PURE__ */ x.jsx(de, { onClick: X, title: "Zoom Out", children: /* @__PURE__ */ x.jsx(tt, { size: 18 }) }),
      /* @__PURE__ */ x.jsx(de, { onClick: _, title: "Zoom In", children: /* @__PURE__ */ x.jsx(et, { size: 18 }) })
    ] })
  ] }) }) });
}
export {
  rt as DxfViewer,
  Be as EntityInteraction,
  Xe as PolygonSelectionTool,
  we as getNDC,
  Le as getSafeObjectBounds,
  Ae as getSafeObjectsBounds,
  Fe as unprojectToPlane
};
