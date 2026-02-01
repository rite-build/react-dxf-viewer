var Me = Object.defineProperty;
var Ce = (c, e, t) => e in c ? Me(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t;
var f = (c, e, t) => Ce(c, typeof e != "symbol" ? e + "" : e, t);
import Se, { forwardRef as Le, createElement as me, useMemo as Re, useRef as ie, useState as se, useEffect as K, useCallback as J } from "react";
import * as l from "three";
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
      for (var a in i)
        a !== "key" && (s[a] = i[a]);
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
        return r.$$typeof === U ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case D:
          return "Fragment";
        case k:
          return "Profiler";
        case H:
          return "StrictMode";
        case F:
          return "Suspense";
        case W:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case L:
            return "Portal";
          case p:
            return r.displayName || "Context";
          case E:
            return (r._context.displayName || "Context") + ".Consumer";
          case N:
            var v = r.render;
            return r = r.displayName, r || (r = v.displayName || v.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case T:
            return v = r.displayName || null, v !== null ? v : c(r.type) || "Memo";
          case w:
            v = r._payload, r = r._init;
            try {
              return c(r(v));
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
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var y = v.error, O = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return y.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), e(r);
      }
    }
    function n(r) {
      if (r === D) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === w)
        return "<...>";
      try {
        var v = c(r);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var r = z.A;
      return r === null ? null : r.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(r) {
      if (G.call(r, "key")) {
        var v = Object.getOwnPropertyDescriptor(r, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function a(r, v) {
      function y() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      y.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: y,
        configurable: !0
      });
    }
    function u() {
      var r = c(this.type);
      return ee[r] || (ee[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function x(r, v, y, O, Z, re) {
      var _ = y.ref;
      return r = {
        $$typeof: j,
        type: r,
        key: v,
        props: y,
        _owner: O
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: u
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
    function P(r, v, y, O, Z, re) {
      var _ = v.children;
      if (_ !== void 0)
        if (O)
          if (Q(_)) {
            for (O = 0; O < _.length; O++)
              I(_[O]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else I(_);
      if (G.call(v, "key")) {
        _ = c(r);
        var X = Object.keys(v).filter(function(d) {
          return d !== "key";
        });
        O = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", $[_ + O] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          _,
          X,
          _
        ), $[_ + O] = !0);
      }
      if (_ = null, y !== void 0 && (t(y), _ = "" + y), o(v) && (t(v.key), _ = "" + v.key), "key" in v) {
        y = {};
        for (var h in v)
          h !== "key" && (y[h] = v[h]);
      } else y = v;
      return _ && a(
        y,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), x(
        r,
        _,
        y,
        i(),
        Z,
        re
      );
    }
    function I(r) {
      C(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === w && (r._payload.status === "fulfilled" ? C(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function C(r) {
      return typeof r == "object" && r !== null && r.$$typeof === j;
    }
    var S = Se, j = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), p = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), U = Symbol.for("react.client.reference"), z = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, Q = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var ce, ee = {}, Y = S.react_stack_bottom_frame.bind(
      S,
      s
    )(), q = B(n(s)), $ = {};
    ae.Fragment = D, ae.jsx = function(r, v, y) {
      var O = 1e4 > z.recentlyCreatedOwnerStacks++;
      return P(
        r,
        v,
        y,
        !1,
        O ? Error("react-stack-top-frame") : Y,
        O ? B(n(r)) : q
      );
    }, ae.jsxs = function(r, v, y) {
      var O = 1e4 > z.recentlyCreatedOwnerStacks++;
      return P(
        r,
        v,
        y,
        !0,
        O ? Error("react-stack-top-frame") : Y,
        O ? B(n(r)) : q
      );
    };
  })()), ae;
}
var be;
function Te() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? ue.exports = De() : ue.exports = ke()), ue.exports;
}
var b = Te();
function Oe(c) {
  const e = c.isLineSegments2;
  if (!(c instanceof l.Mesh || c instanceof l.Line || c instanceof l.LineSegments || e))
    return null;
  const t = c.geometry;
  if (!t) return null;
  if (e) {
    const u = t.getAttribute("instanceStart"), x = t.getAttribute("instanceEnd");
    if (!u || !x) {
      if (!t.getAttribute("position")) return null;
    } else {
      const P = new l.Box3();
      let I = !1;
      c.updateMatrixWorld(!0);
      const C = (S) => {
        const j = S.array, L = S.itemSize;
        for (let D = 0; D < j.length; D += L) {
          const H = j[D], k = j[D + 1], E = L > 2 ? j[D + 2] : 0;
          if (isFinite(H) && isFinite(k) && isFinite(E)) {
            const p = new l.Vector3(H, k, E).applyMatrix4(c.matrixWorld);
            isFinite(p.x) && isFinite(p.y) && isFinite(p.z) && (P.expandByPoint(p), I = !0);
          }
        }
      };
      return C(u), C(x), I ? P : null;
    }
  }
  const n = t.getAttribute("position");
  if (!n || !n.array) return null;
  const i = n.array, s = n.itemSize, o = new l.Box3();
  let a = !1;
  c.updateMatrixWorld(!0);
  for (let u = 0; u < i.length; u += s) {
    const x = i[u], P = i[u + 1], I = s > 2 ? i[u + 2] : 0;
    if (isFinite(x) && isFinite(P) && isFinite(I)) {
      const C = new l.Vector3(x, P, I).applyMatrix4(c.matrixWorld);
      isFinite(C.x) && isFinite(C.y) && isFinite(C.z) && (o.expandByPoint(C), a = !0);
    }
  }
  return a ? o : null;
}
function Ie(c) {
  const e = new l.Box3();
  let t = !1;
  for (const n of c) {
    const i = Oe(n);
    i && !i.isEmpty() && (e.union(i), t = !0);
  }
  return t ? e : null;
}
function we(c, e, t) {
  const n = t.getBoundingClientRect();
  return new l.Vector2(
    (c - n.left) / n.width * 2 - 1,
    -((e - n.top) / n.height) * 2 + 1
  );
}
function Ae(c, e, t, n) {
  const i = we(c, e, t), s = new l.Vector3(i.x, i.y, 0);
  return s.unproject(n), s.z = 0, s;
}
let A = null;
async function He() {
  return A || (A = await import("./Line2Helper-D4QmpFuS.js")), A;
}
function Pe(c, e, t = 1) {
  return A ? A.getLineMaterial(c, e, t) : new l.LineBasicMaterial({ color: c, linewidth: e, transparent: !0, opacity: t });
}
function Fe(c, e, t, n) {
  return A ? A.createOverlayFromCoordinates(c, e, t, n) : null;
}
function je(c, e) {
  return A ? A.createOverlay(c, e) : null;
}
function Ne(c, e) {
  A && A.updateResolution(c, e);
}
function Ve() {
  A && A.clearLineMaterialCache();
}
class ze {
  constructor(e, t) {
    f(this, "viewer");
    f(this, "hoveredObject", null);
    f(this, "isMouseDown", !1);
    f(this, "isDragging", !1);
    f(this, "interactionLayer");
    f(this, "activeOverlays", /* @__PURE__ */ new Map());
    f(this, "selectedHandles", /* @__PURE__ */ new Set());
    f(this, "validHandles", /* @__PURE__ */ new Set());
    f(this, "intersectableObjectsCache", null);
    f(this, "cacheLastUpdated", 0);
    f(this, "CACHE_TTL", 2e3);
    f(this, "dxfEntities", null);
    f(this, "_boundOnPointerMove");
    f(this, "_boundOnPointerLeave");
    f(this, "_boundOnPointerDown");
    f(this, "_boundOnPointerUp");
    f(this, "_boundOnViewChanged");
    f(this, "isEnabled", !0);
    f(this, "onClick");
    f(this, "boundingBoxMesh", null);
    f(this, "animationFrameId", null);
    f(this, "_boundOnLoaded");
    f(this, "_boundOnCleared");
    this.viewer = e, this.onClick = t, this.interactionLayer = new l.Group(), this.interactionLayer.name = "InteractionLayer", this.interactionLayer.renderOrder = 999, this.viewer.GetScene().add(this.interactionLayer), this.updateResolution(), this._boundOnPointerMove = this._onPointerMove.bind(this), this._boundOnPointerLeave = this._onPointerLeave.bind(this), this._boundOnPointerDown = this._onPointerDown.bind(this), this._boundOnPointerUp = this._onPointerUp.bind(this), this._boundOnViewChanged = this.updateResolution.bind(this), this._boundOnLoaded = this._onLoaded.bind(this), this._boundOnCleared = this._onCleared.bind(this), this.setupEventListeners(), this.initLine2Helper();
  }
  _onLoaded() {
    this.viewer.GetScene().add(this.interactionLayer), this.dxfEntities = null, this.clearHighlights();
  }
  _onCleared() {
    this.clearHighlights(), this.dxfEntities = null, this.intersectableObjectsCache = null;
  }
  async initLine2Helper() {
    await He();
  }
  updateResolution() {
    const e = this.viewer.GetCanvas();
    e && Ne(e.width, e.height);
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
    e && (e.removeEventListener("pointermove", this._boundOnPointerMove), e.removeEventListener("pointerleave", this._boundOnPointerLeave), e.removeEventListener("pointerdown", this._boundOnPointerDown), e.removeEventListener("pointerup", this._boundOnPointerUp)), this.viewer.Unsubscribe("pointerdown", this._boundOnPointerDown), this.viewer.Unsubscribe("resized", this._boundOnViewChanged), this.viewer.Unsubscribe("loaded", this._boundOnLoaded), this.viewer.Unsubscribe("cleared", this._boundOnCleared), this._clearHover(), this.clearHighlights(), Ve(), this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.viewer.GetScene().remove(this.interactionLayer);
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
    let a = null;
    const u = o.userData.dxfHandle, x = s ? null : this.getGeometryFromHandle(u);
    if (x) {
      const P = Pe(t, n, i);
      a = Fe(
        x.vertices,
        P,
        x.isClosed,
        o.matrixWorld
      );
    }
    if (!a) {
      if (o instanceof l.LineSegments || o instanceof l.Line)
        if (s) {
          const P = new l.LineBasicMaterial({
            color: t,
            linewidth: 1,
            depthTest: !1,
            transparent: !0,
            opacity: i
          });
          a = o.clone(), a.material = P, a.renderOrder = 999;
        } else {
          const P = Pe(t, n, i);
          a = je(o, P);
        }
      else if (o instanceof l.Mesh) {
        const P = new l.MeshBasicMaterial({
          color: t,
          transparent: !0,
          opacity: i,
          depthTest: !1
        });
        a = o.clone(), a.material = P, a.renderOrder = 999;
      }
    }
    return a ? (this.interactionLayer.add(a), this.activeOverlays.set(o, a), !0) : !1;
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
    this.validHandles = e && e.length > 0 ? new Set(e.map((t) => t.toLowerCase())) : /* @__PURE__ */ new Set(), this.intersectableObjectsCache = null, this.cacheLastUpdated = 0;
  }
  /**
   * Check if a handle is in the valid/interactive handles list.
   * Returns true if interaction is allowed, false if blocked.
   * If validHandles is empty, NOTHING is interactive.
   */
  isHandleInteractive(e) {
    if (!e || this.validHandles.size === 0)
      return !1;
    const t = e.toLowerCase();
    return this.validHandles.has(t);
  }
  getIntersectableObjects() {
    if (this.validHandles.size === 0)
      return [];
    const e = Date.now();
    if (this.intersectableObjectsCache && e - this.cacheLastUpdated < this.CACHE_TTL)
      return this.intersectableObjectsCache;
    const t = [];
    return this.viewer.GetScene().traverse((n) => {
      if (n.userData.dxfHandle && n.parent !== this.interactionLayer) {
        if (!this.validHandles.has(n.userData.dxfHandle.toLowerCase()))
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
    const n = we(e.clientX, e.clientY, t), i = new l.Raycaster();
    i.setFromCamera(n, this.viewer.GetCamera()), i.params.Line.threshold = 6;
    const s = i.intersectObjects(this.getIntersectableObjects());
    let o = null;
    for (const a of s) {
      const u = this.resolveDxfObject(a.object);
      if (u) {
        const x = u.userData.dxfHandle;
        if (this.isHandleInteractive(x)) {
          o = u;
          break;
        }
      }
    }
    o ? o !== this.hoveredObject && (this._clearHover(), this._startHover(o)) : this.hoveredObject && this._clearHover();
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
      this.isHandleInteractive(o) && this.onClick && this.onClick(o), this.isMouseDown = !1, this.isDragging = !1;
      return;
    }
    const t = this.viewer.GetCanvas();
    if (!t) return;
    const n = we(e.clientX, e.clientY, t), i = new l.Raycaster();
    i.setFromCamera(n, this.viewer.GetCamera()), i.params.Line.threshold = 3;
    const s = i.intersectObjects(this.getIntersectableObjects());
    for (const o of s) {
      const a = this.resolveDxfObject(o.object);
      if (a) {
        const u = a.userData.dxfHandle;
        if (this.isHandleInteractive(u)) {
          this.onClick ? this.onClick(u) : console.warn("[EntityInteraction] onClick callback is not defined!");
          break;
        }
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
    const i = e.map((a) => a.toLowerCase());
    e.forEach((a) => this.selectedHandles.add(a.toLowerCase())), t.length > 0 && this.highlightContext(t);
    const s = [];
    if (this.viewer.GetScene().traverse((a) => {
      const u = a.userData.dxfHandle;
      u && i.includes(u.toLowerCase()) && a.parent !== this.interactionLayer && ((a instanceof l.LineSegments || a instanceof l.Line) && a.geometry && !a.geometry.boundingBox && a.geometry.computeBoundingBox(), s.push(a));
    }), s.length === 0) return;
    s.forEach((a) => {
      const u = a.userData.dxfType;
      (u === "TEXT" || u === "MTEXT" || u === "ATTRIB") && a instanceof l.LineSegments ? this.addOverlay(a, 39423, 2, 1, !0) : this.addOverlay(a, 39423, 5);
    }), this.viewer.Render();
    const o = Ie(s);
    !o || o.isEmpty() || (t.length === 0 && this.highlightContextInBounds(o, Array.from(this.selectedHandles)), this.createBoundingBoxOverlay(o), n && this.animateToFit(o, 800));
  }
  highlightContextInBounds(e, t) {
    const n = e.clone(), i = new l.Vector3();
    e.getSize(i), n.expandByVector(i.multiplyScalar(0.1));
    const s = t.map((o) => o.toLowerCase());
    this.viewer.GetScene().traverse((o) => {
      if (o.parent === this.interactionLayer) return;
      const a = o.userData.dxfHandle;
      if (a && s.includes(a.toLowerCase()) || !(o instanceof l.Mesh || o instanceof l.Line || o instanceof l.LineSegments)) return;
      const u = new l.Vector3();
      o.getWorldPosition(u), n.containsPoint(u) && this.addOverlay(o, 13421772, 2);
    }), this.viewer.Render();
  }
  clearHighlights() {
    this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.selectedHandles.clear(), this.clearAllOverlays(), this.boundingBoxMesh && (this.cleanupOverlayResource(this.boundingBoxMesh), this.boundingBoxMesh = null), this.viewer.Render();
  }
  createBoundingBoxOverlay(e) {
    if (e.isEmpty() || !isFinite(e.min.x) || !isFinite(e.min.y) || !isFinite(e.min.z) || !isFinite(e.max.x) || !isFinite(e.max.y) || !isFinite(e.max.z))
      return;
    this.boundingBoxMesh && (this.cleanupOverlayResource(this.boundingBoxMesh), this.boundingBoxMesh = null);
    const t = new l.Vector3(), n = new l.Vector3();
    e.getSize(t), e.getCenter(n);
    const i = 10;
    t.x < i && (t.x = i), t.y < i && (t.y = i), t.z < i && (t.z = i);
    try {
      const s = new l.BoxGeometry(t.x, t.y, t.z), o = new l.MeshBasicMaterial({
        color: 9647082,
        transparent: !0,
        opacity: 0.2,
        side: l.DoubleSide,
        depthTest: !1
      });
      this.boundingBoxMesh = new l.Mesh(s, o), this.boundingBoxMesh.position.copy(n);
      const a = new l.EdgesGeometry(s), u = new l.LineBasicMaterial({
        color: 9647082,
        linewidth: 2,
        depthTest: !1
      }), x = new l.LineSegments(a, u);
      this.boundingBoxMesh.add(x), this.viewer.GetScene().add(this.boundingBoxMesh), this.viewer.Render();
    } catch (s) {
      console.error("[EntityInteraction] Error creating bounding box overlay:", s);
    }
  }
  animateToFit(e, t) {
    this.animationFrameId !== null && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
    const n = this.viewer.GetOrigin();
    if (e.isEmpty() || !isFinite(e.min.x) || !isFinite(e.min.y)) return;
    const i = new l.Vector3(), s = new l.Vector3();
    e.getSize(i), e.getCenter(s);
    const o = s.x - n.x, a = s.y - n.y, u = this.viewer.GetCanvas(), x = u ? u.width : 800, P = u ? u.height : 600, I = x / P, C = 1.5;
    let S = i.x * C;
    i.y * C * I > S && (S = i.y * C * I), S = Math.max(S, 30);
    let L = null;
    const D = performance.now(), H = (k) => {
      if (!L) {
        const w = this.viewer.GetCamera();
        if (!isFinite(w.position.x) || !isFinite(w.zoom)) {
          this.animationFrameId = null;
          return;
        }
        if (L = {
          cx: w.position.x - n.x,
          cy: w.position.y - n.y,
          vw: w.right - w.left
        }, Math.hypot(o - L.cx, a - L.cy) < L.vw * 0.01 && Math.abs(S - L.vw) < L.vw * 0.01) {
          this.animationFrameId = null;
          return;
        }
      }
      const E = k - D, p = Math.min(E / t, 1), N = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2, F = L.cx + (o - L.cx) * N, W = L.cy + (a - L.cy) * N, T = L.vw + (S - L.vw) * N;
      this.viewer.SetView({ x: F + n.x, y: W + n.y }, T), this.viewer.Render(), p < 1 ? this.animationFrameId = requestAnimationFrame(H) : this.animationFrameId = null;
    };
    this.animationFrameId = requestAnimationFrame(H);
  }
}
const Ge = 40, Be = 10, We = 20, ve = 7, le = 16711680, Ue = 16733525, Ye = 16711680, $e = 3, ne = 999, pe = !1;
class Xe {
  constructor(e, t, n) {
    f(this, "viewer");
    f(this, "canvas");
    f(this, "isActive", !1);
    f(this, "points", []);
    f(this, "previewLine", null);
    f(this, "polygonLine", null);
    f(this, "pointsMesh", null);
    f(this, "startPointMesh", null);
    f(this, "mousePosition", new l.Vector3());
    f(this, "completedPolygonLine", null);
    f(this, "completedPointsMesh", null);
    f(this, "isHoveringNearStart", !1);
    f(this, "onComplete");
    f(this, "onCancel");
    // Valid handles for filtering - only entities with these handles will be selected
    // Empty set means nothing is selectable
    f(this, "validHandles", /* @__PURE__ */ new Set());
    f(this, "_boundOnPointerDown");
    f(this, "_boundOnPointerMove");
    f(this, "_boundOnKeyDown");
    f(this, "_boundOnDblClick");
    this.viewer = e;
    const i = e.GetCanvas();
    if (!i)
      throw new Error("Canvas not available");
    this.canvas = i, this.onComplete = t, this.onCancel = n, this._boundOnPointerDown = this._onPointerDown.bind(this), this._boundOnPointerMove = this._onPointerMove.bind(this), this._boundOnKeyDown = this._onKeyDown.bind(this), this._boundOnDblClick = this._onDblClick.bind(this);
  }
  /**
   * Set the valid handles that can be selected by polygon selection.
   * If null/undefined or empty array is passed, nothing will be selectable.
   * @param handles Array of valid handle strings, or null/undefined
   */
  setValidHandles(e) {
    e && e.length > 0 ? this.validHandles = new Set(e.map((t) => t.toLowerCase())) : this.validHandles = /* @__PURE__ */ new Set();
  }
  /**
   * Check if a handle is in the valid handles list
   */
  isHandleValid(e) {
    return this.validHandles.size === 0 ? !1 : this.validHandles.has(e.toLowerCase());
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
    return Ge * n;
  }
  isNearStartPoint(e) {
    if (this.points.length < 3)
      return !1;
    const t = this.points[0], n = e.distanceTo(t), i = this.getSnapThreshold();
    return n < i;
  }
  _getWorldPosition(e) {
    return Ae(e.clientX, e.clientY, this.canvas, this.viewer.GetCamera());
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
    const t = new l.BufferGeometry().setFromPoints(this.points.slice(1)), n = new l.PointsMaterial({
      color: le,
      size: ve,
      sizeAttenuation: pe
    });
    this.pointsMesh = new l.Points(t, n), this.pointsMesh.renderOrder = ne, e.add(this.pointsMesh);
  }
  drawStartPoint(e) {
    const t = this.isHoveringNearStart ? Ue : le, n = new l.BufferGeometry().setFromPoints([this.points[0]]), i = new l.PointsMaterial({
      color: t,
      size: ve,
      sizeAttenuation: pe
    });
    this.startPointMesh = new l.Points(n, i), this.startPointMesh.renderOrder = ne, e.add(this.startPointMesh);
  }
  drawPolygonLine(e) {
    if (this.points.length <= 1) return;
    const t = new l.BufferGeometry().setFromPoints(this.points), n = new l.LineBasicMaterial({ color: le });
    this.polygonLine = new l.Line(t, n), this.polygonLine.renderOrder = ne, e.add(this.polygonLine);
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
    this.previewLine = new l.Line(
      new l.BufferGeometry().setFromPoints([t, n]),
      i
    ), i instanceof l.LineDashedMaterial && this.previewLine.computeLineDistances(), this.previewLine.renderOrder = ne, e.add(this.previewLine), this.viewer.Render();
  }
  clearPreviewLine(e) {
    this.previewLine && (e.remove(this.previewLine), this.previewLine.geometry.dispose(), this.previewLine.material.dispose(), this.previewLine = null);
  }
  calculatePreviewEndPoint() {
    return this.isHoveringNearStart && this.points.length >= 3 ? this.points[0] : this.mousePosition;
  }
  createPreviewMaterial() {
    return new l.LineDashedMaterial({
      color: Ye,
      dashSize: Be,
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
    const t = new l.BufferGeometry().setFromPoints(this.points), n = new l.PointsMaterial({
      color: le,
      size: ve,
      sizeAttenuation: pe
    });
    this.completedPointsMesh = new l.Points(t, n), this.completedPointsMesh.renderOrder = ne, this.completedPointsMesh.name = "completed-polygon-points", e.add(this.completedPointsMesh);
    const i = new l.BufferGeometry().setFromPoints(this.points), s = new l.LineBasicMaterial({
      color: le
    });
    this.completedPolygonLine = new l.LineLoop(i, s), this.completedPolygonLine.renderOrder = ne, this.completedPolygonLine.name = "completed-polygon-boundary", e.add(this.completedPolygonLine), this.viewer.Render();
  }
  cancelSelection() {
    this.onCancel(), this.deactivate();
  }
  findEntitiesInPolygon() {
    const e = [];
    if (this.validHandles.size === 0)
      return e;
    const t = new l.Box3().setFromPoints(this.points);
    return this.viewer.GetScene().traverse((n) => {
      if (n.userData.dxfHandle) {
        const i = n.userData.dxfHandle;
        if (!this.isHandleValid(i))
          return;
        const s = Oe(n);
        if (s && t.intersectsBox(s)) {
          const o = new l.Vector3();
          s.getCenter(o), this.isPointInPolygon(o) && e.push(i);
        }
      }
    }), e;
  }
  isPointInPolygon(e) {
    let t = !1;
    for (let n = 0, i = this.points.length - 1; n < this.points.length; i = n++) {
      const s = this.points[n].x, o = this.points[n].y, a = this.points[i].x, u = this.points[i].y;
      o > e.y != u > e.y && e.x < (a - s) * (e.y - o) / (u - o) + s && (t = !t);
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
const Je = Le(
  ({
    color: c = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: s,
    iconNode: o,
    ...a
  }, u) => me(
    "svg",
    {
      ref: u,
      ...Ze,
      width: e,
      height: e,
      stroke: c,
      strokeWidth: n ? Number(t) * 24 / Number(e) : t,
      className: _e("lucide", i),
      ...a
    },
    [
      ...o.map(([x, P]) => me(x, P)),
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
  const t = Le(
    ({ className: n, ...i }, s) => me(Je, {
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
function de(c) {
  const e = ie(c);
  return K(() => {
    e.current = c;
  }, [c]), e;
}
function he({ onClick: c, active: e, title: t, children: n }) {
  return /* @__PURE__ */ b.jsx(
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
  filteredHandles: a = null,
  interactiveHandles: u = null,
  isPolygonMode: x = !1,
  // Outputs
  onLoad: P,
  onError: I,
  onSelectionChange: C,
  onPolygonModeChange: S,
  // Options
  showToolbar: j = !0,
  enablePolygonSelection: L = !0,
  enableInteraction: D = !0,
  enableZoomOnSelect: H = !0
}) {
  const k = Re(
    () => u ?? o,
    [u, o]
  ), E = de(C), p = de(S), N = de(P), F = de(I), W = ie(null), T = ie(null), w = ie(null), R = ie(null), U = ie(!1), [z, G] = se(!1), [Q, B] = se(!0), [ce, ee] = se("Initializing..."), [Y, q] = se(null), [$, r] = se(null);
  K(() => {
    G(x);
  }, [x]), K(() => {
    typeof window > "u" || import("./index-eV3yEHKa.js").then((h) => {
      r(() => h.DxfViewer);
    }).catch((h) => {
      console.error("Failed to load DxfViewer:", h), q(h instanceof Error ? h : new Error(String(h))), B(!1);
    });
  }, []);
  const v = J(() => {
    var h;
    if (!W.current || !$) return null;
    if (T.current) {
      try {
        T.current.Destroy();
      } catch (d) {
        console.warn("Error destroying viewer:", d);
      }
      T.current = null;
    }
    try {
      const d = {
        autoResize: !0,
        clearColor: new l.Color("#ffffff"),
        clearAlpha: 1,
        antialias: !0,
        colorCorrection: !0,
        blackWhiteInversion: !0
      }, m = new $(W.current, d);
      if (!m.HasRenderer())
        throw new Error("WebGL not available. Please check your browser supports WebGL.");
      return T.current = m, m.Subscribe("loaded", () => {
        var M;
        console.log("DXF loaded successfully");
        const g = m.GetBounds();
        if (g) {
          const V = m.GetOrigin();
          m.FitView(
            g.minX - V.x,
            g.maxX - V.x,
            g.minY - V.y,
            g.maxY - V.y,
            0.1
          );
        }
        m.Render(), B(!1), (M = N.current) == null || M.call(N);
      }), m.Subscribe("message", (g) => {
        const { message: M, level: V } = g.detail;
        V === "error" ? console.error("[DxfViewer]", M) : V === "warn" && console.warn("[DxfViewer]", M);
      }), m;
    } catch (d) {
      const m = d instanceof Error ? d : new Error(String(d));
      return q(m), B(!1), (h = F.current) == null || h.call(F, m), null;
    }
  }, [$, N, F]), y = J(
    async (h, d) => {
      var m;
      B(!0), q(null), ee("Loading...");
      try {
        let g;
        if (typeof d == "string")
          g = d;
        else {
          const M = new Blob([d], { type: "application/octet-stream" });
          g = URL.createObjectURL(M);
        }
        await h.Load({
          url: g,
          fonts: n ?? null,
          progressCbk: (M, V, ye) => {
            let te = M;
            if (M === "fetch" ? te = "Downloading..." : M === "parse" ? te = "Parsing DXF..." : M === "prepare" ? te = "Preparing scene..." : M === "font" && (te = "Loading fonts..."), ye && V) {
              const Ee = Math.round(V / ye * 100);
              ee(`${te} ${Ee}%`);
            } else
              ee(te);
          }
        }), typeof d != "string" && URL.revokeObjectURL(g);
      } catch (g) {
        const M = g instanceof Error ? g : new Error(String(g));
        console.error("Failed to load DXF:", M), q(M), B(!1), (m = F.current) == null || m.call(F, M);
      }
    },
    [n, F]
  );
  K(() => {
    if (!$ || !W.current) return;
    const h = v();
    if (h)
      return D && (w.current = new ze(h, (d) => {
        var m, g;
        G(!1), (m = p.current) == null || m.call(p, !1), U.current = !1, (g = E.current) == null || g.call(E, [d]);
      }), k && w.current.setValidHandles(k)), L && (R.current = new Xe(
        h,
        (d) => {
          var m, g;
          G(!1), (m = p.current) == null || m.call(p, !1), U.current = !0, (g = E.current) == null || g.call(E, d, { isPolygonSelection: !0 });
        },
        () => {
          var d;
          G(!1), (d = p.current) == null || d.call(p, !1);
        }
      ), k && R.current.setValidHandles(k)), c ? y(h, c) : e && y(h, e), () => {
        var d, m;
        if ((d = w.current) == null || d.destroy(), w.current = null, (m = R.current) == null || m.deactivate(), R.current = null, T.current) {
          try {
            T.current.Destroy();
          } catch (g) {
            console.warn("Error destroying viewer:", g);
          }
          T.current = null;
        }
      };
  }, [$, c, e, v, y, D, L, E, p]), K(() => {
    !w.current || !R.current || (z ? (w.current.setEnabled(!1), R.current.activate()) : (R.current.deactivate(), w.current.setEnabled(!0), s.length > 0 && !U.current && w.current.selectHandles(s, [], H)));
  }, [z, s, H]), K(() => {
    if (!w.current || Q || Y) return;
    const h = U.current;
    U.current = !1;
    const d = o || [];
    if (s.length > 0) {
      const m = s.length === 1, g = H && (m || !h);
      w.current.selectHandles(s, d, g);
    } else a && a.length > 0 ? w.current.highlightHandles(a) : w.current.selectHandles([], d, !1);
  }, [s, o, a, Q, Y, H]), K(() => {
    w.current && w.current.setValidHandles(k), R.current && R.current.setValidHandles(k);
  }, [k, u]);
  const O = J(() => {
    var d;
    const h = !z;
    G(h), (d = p.current) == null || d.call(p, h);
  }, [z, p]), Z = J(() => {
    const h = T.current;
    if (!h) return;
    const d = h.GetBounds();
    if (d) {
      const m = h.GetOrigin();
      h.FitView(
        d.minX - m.x,
        d.maxX - m.x,
        d.minY - m.y,
        d.maxY - m.y,
        0.1
      ), h.Render();
    }
  }, []), re = J(() => {
    var h, d;
    G(!1), (h = p.current) == null || h.call(p, !1), w.current && w.current.clearHighlights(), R.current && (R.current.clearCompletedPolygon(), R.current.clearInProgressPolygon()), U.current = !1, (d = E.current) == null || d.call(E, [], { isReset: !0 }), Z();
  }, [Z, E, p]), _ = J(() => {
    const h = T.current;
    if (!h) return;
    const d = h.GetCamera();
    d.zoom *= 1.25, d.updateProjectionMatrix(), h.Render();
  }, []), X = J(() => {
    const h = T.current;
    if (!h) return;
    const d = h.GetCamera();
    d.zoom *= 0.8, d.updateProjectionMatrix(), h.Render();
  }, []);
  return /* @__PURE__ */ b.jsx("div", { className: `dxf-viewer-wrapper ${i ?? ""}`, children: /* @__PURE__ */ b.jsx("div", { className: "dxf-main-content", children: /* @__PURE__ */ b.jsxs("div", { className: "dxf-viewer-container", children: [
    /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: W,
        style: { width: "100%", height: "100%", position: "absolute", inset: 0 }
      }
    ),
    Q && /* @__PURE__ */ b.jsxs("div", { className: "dxf-loading-overlay", children: [
      /* @__PURE__ */ b.jsx("div", { className: "dxf-loading-spinner" }),
      /* @__PURE__ */ b.jsx("div", { className: "dxf-loading-progress", children: ce })
    ] }),
    Y && /* @__PURE__ */ b.jsxs("div", { className: "dxf-error-overlay", children: [
      /* @__PURE__ */ b.jsxs("svg", { className: "dxf-error-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
        /* @__PURE__ */ b.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ b.jsx("path", { d: "M15 9l-6 6M9 9l6 6" })
      ] }),
      /* @__PURE__ */ b.jsx("div", { className: "dxf-error-title", children: "Failed to load DXF" }),
      /* @__PURE__ */ b.jsx("div", { className: "dxf-error-message", children: Y.message })
    ] }),
    j && !Q && !Y && /* @__PURE__ */ b.jsxs("div", { className: "dxf-bottom-toolbar", children: [
      /* @__PURE__ */ b.jsx(he, { onClick: re, title: "Reset View", children: /* @__PURE__ */ b.jsx(Ke, { size: 18 }) }),
      L && /* @__PURE__ */ b.jsx(
        he,
        {
          active: z,
          onClick: O,
          title: "Polygon Selection Tool",
          children: /* @__PURE__ */ b.jsx(Qe, { size: 18 })
        }
      ),
      /* @__PURE__ */ b.jsx("div", { className: "dxf-toolbar-separator" }),
      /* @__PURE__ */ b.jsx(he, { onClick: X, title: "Zoom Out", children: /* @__PURE__ */ b.jsx(tt, { size: 18 }) }),
      /* @__PURE__ */ b.jsx(he, { onClick: _, title: "Zoom In", children: /* @__PURE__ */ b.jsx(et, { size: 18 }) })
    ] })
  ] }) }) });
}
export {
  rt as DxfViewer,
  ze as EntityInteraction,
  Xe as PolygonSelectionTool,
  we as getNDC,
  Oe as getSafeObjectBounds,
  Ie as getSafeObjectsBounds,
  Ae as unprojectToPlane
};
