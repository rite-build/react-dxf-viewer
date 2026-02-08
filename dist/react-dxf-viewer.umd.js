(function(D,e0){typeof exports=="object"&&typeof module<"u"?e0(exports,require("react"),require("three")):typeof define=="function"&&define.amd?define(["exports","react","three"],e0):(D=typeof globalThis<"u"?globalThis:D||self,e0(D.ReactDxfViewer={},D.React,D.THREE))})(this,(function(D,e0,A){"use strict";var zs=Object.defineProperty;var Hs=(D,e0,A)=>e0 in D?zs(D,e0,{enumerable:!0,configurable:!0,writable:!0,value:A}):D[e0]=A;var $=(D,e0,A)=>Hs(D,typeof e0!="symbol"?e0+"":e0,A);function K6(n){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const t in n)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return e.default=n,Object.freeze(e)}const F=K6(A);function $6(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var V2={exports:{}},u2={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n5;function e3(){if(n5)return u2;n5=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,s,i){var a=null;if(i!==void 0&&(a=""+i),s.key!==void 0&&(a=""+s.key),"key"in s){i={};for(var o in s)o!=="key"&&(i[o]=s[o])}else i=s;return s=i.ref,{$$typeof:n,type:r,key:a,ref:s!==void 0?s:null,props:i}}return u2.Fragment=e,u2.jsx=t,u2.jsxs=t,u2}var f2={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r5;function t3(){return r5||(r5=1,process.env.NODE_ENV!=="production"&&(function(){function n(k){if(k==null)return null;if(typeof k=="function")return k.$$typeof===R?null:k.displayName||k.name||null;if(typeof k=="string")return k;switch(k){case m:return"Fragment";case P:return"Profiler";case g:return"StrictMode";case I:return"Suspense";case M:return"SuspenseList";case _:return"Activity"}if(typeof k=="object")switch(typeof k.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),k.$$typeof){case y:return"Portal";case w:return k.displayName||"Context";case S:return(k._context.displayName||"Context")+".Consumer";case O:var B=k.render;return k=k.displayName,k||(k=B.displayName||B.name||"",k=k!==""?"ForwardRef("+k+")":"ForwardRef"),k;case T:return B=k.displayName||null,B!==null?B:n(k.type)||"Memo";case C:B=k._payload,k=k._init;try{return n(k(B))}catch{}}return null}function e(k){return""+k}function t(k){try{e(k);var B=!1}catch{B=!0}if(B){B=console;var t0=B.error,f0=typeof Symbol=="function"&&Symbol.toStringTag&&k[Symbol.toStringTag]||k.constructor.name||"Object";return t0.call(B,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",f0),e(k)}}function r(k){if(k===m)return"<>";if(typeof k=="object"&&k!==null&&k.$$typeof===C)return"<...>";try{var B=n(k);return B?"<"+B+">":"<...>"}catch{return"<...>"}}function s(){var k=W.A;return k===null?null:k.getOwner()}function i(){return Error("react-stack-top-frame")}function a(k){if(r0.call(k,"key")){var B=Object.getOwnPropertyDescriptor(k,"key").get;if(B&&B.isReactWarning)return!1}return k.key!==void 0}function o(k,B){function t0(){l0||(l0=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",B))}t0.isReactWarning=!0,Object.defineProperty(k,"key",{get:t0,configurable:!0})}function l(){var k=n(this.type);return a0[k]||(a0[k]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),k=this.props.ref,k!==void 0?k:null}function c(k,B,t0,f0,L0,G0){var p0=t0.ref;return k={$$typeof:v,type:k,key:B,props:t0,_owner:f0},(p0!==void 0?p0:null)!==null?Object.defineProperty(k,"ref",{enumerable:!1,get:l}):Object.defineProperty(k,"ref",{enumerable:!1,value:null}),k._store={},Object.defineProperty(k._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(k,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(k,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:L0}),Object.defineProperty(k,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:G0}),Object.freeze&&(Object.freeze(k.props),Object.freeze(k)),k}function u(k,B,t0,f0,L0,G0){var p0=B.children;if(p0!==void 0)if(f0)if(Z(p0)){for(f0=0;f0<p0.length;f0++)f(p0[f0]);Object.freeze&&Object.freeze(p0)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else f(p0);if(r0.call(B,"key")){p0=n(k);var O0=Object.keys(B).filter(function(j){return j!=="key"});f0=0<O0.length?"{key: someKey, "+O0.join(": ..., ")+": ...}":"{key: someKey}",o0[p0+f0]||(O0=0<O0.length?"{"+O0.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,f0,p0,O0,p0),o0[p0+f0]=!0)}if(p0=null,t0!==void 0&&(t(t0),p0=""+t0),a(B)&&(t(B.key),p0=""+B.key),"key"in B){t0={};for(var K in B)K!=="key"&&(t0[K]=B[K])}else t0=B;return p0&&o(t0,typeof k=="function"?k.displayName||k.name||"Unknown":k),c(k,p0,t0,s(),L0,G0)}function f(k){p(k)?k._store&&(k._store.validated=1):typeof k=="object"&&k!==null&&k.$$typeof===C&&(k._payload.status==="fulfilled"?p(k._payload.value)&&k._payload.value._store&&(k._payload.value._store.validated=1):k._store&&(k._store.validated=1))}function p(k){return typeof k=="object"&&k!==null&&k.$$typeof===v}var d=e0,v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),w=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),R=Symbol.for("react.client.reference"),W=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,r0=Object.prototype.hasOwnProperty,Z=Array.isArray,n0=console.createTask?console.createTask:function(){return null};d={react_stack_bottom_frame:function(k){return k()}};var l0,a0={},s0=d.react_stack_bottom_frame.bind(d,i)(),i0=n0(r(i)),o0={};f2.Fragment=m,f2.jsx=function(k,B,t0){var f0=1e4>W.recentlyCreatedOwnerStacks++;return u(k,B,t0,!1,f0?Error("react-stack-top-frame"):s0,f0?n0(r(k)):i0)},f2.jsxs=function(k,B,t0){var f0=1e4>W.recentlyCreatedOwnerStacks++;return u(k,B,t0,!0,f0?Error("react-stack-top-frame"):s0,f0?n0(r(k)):i0)}})()),f2}var s5;function n3(){return s5||(s5=1,process.env.NODE_ENV==="production"?V2.exports=e3():V2.exports=t3()),V2.exports}var g0=n3();function Le(n){const e=n.isLineSegments2;if(!(n instanceof F.Mesh||n instanceof F.Line||n instanceof F.LineSegments||e))return null;const t=n.geometry;if(!t)return null;if(e){const l=t.getAttribute("instanceStart"),c=t.getAttribute("instanceEnd");if(!l||!c){if(!t.getAttribute("position"))return null}else{const u=new F.Box3;let f=!1;n.updateMatrixWorld(!0);const p=d=>{const v=d.array,y=d.itemSize;for(let m=0;m<v.length;m+=y){const g=v[m],P=v[m+1],S=y>2?v[m+2]:0;if(isFinite(g)&&isFinite(P)&&isFinite(S)){const w=new F.Vector3(g,P,S).applyMatrix4(n.matrixWorld);isFinite(w.x)&&isFinite(w.y)&&isFinite(w.z)&&(u.expandByPoint(w),f=!0)}}};return p(l),p(c),f?u:null}}const r=t.getAttribute("position");if(!r||!r.array)return null;const s=r.array,i=r.itemSize,a=new F.Box3;let o=!1;n.updateMatrixWorld(!0);for(let l=0;l<s.length;l+=i){const c=s[l],u=s[l+1],f=i>2?s[l+2]:0;if(isFinite(c)&&isFinite(u)&&isFinite(f)){const p=new F.Vector3(c,u,f).applyMatrix4(n.matrixWorld);isFinite(p.x)&&isFinite(p.y)&&isFinite(p.z)&&(a.expandByPoint(p),o=!0)}}return o?a:null}function i5(n){const e=new F.Box3;let t=!1;for(const r of n){const s=Le(r);s&&!s.isEmpty()&&(e.union(s),t=!0)}return t?e:null}function W2(n,e,t){const r=t.getBoundingClientRect();return new F.Vector2((n-r.left)/r.width*2-1,-((e-r.top)/r.height)*2+1)}function a5(n,e,t,r){const s=W2(n,e,t),i=new F.Vector3(s.x,s.y,0);return i.unproject(r),i.z=0,i}let H0=null;async function r3(){return H0||(H0=await Promise.resolve().then(()=>L3)),H0}function o5(n,e,t=1){return H0?H0.getLineMaterial(n,e,t):new F.LineBasicMaterial({color:n,linewidth:e,transparent:!0,opacity:t})}function s3(n,e,t,r){return H0?H0.createOverlayFromCoordinates(n,e,t,r):null}function i3(n,e){return H0?H0.createOverlay(n,e):null}function a3(n,e){H0&&H0.updateResolution(n,e)}function o3(){H0&&H0.clearLineMaterialCache()}class l5{constructor(e,t){$(this,"viewer");$(this,"hoveredObject",null);$(this,"isMouseDown",!1);$(this,"isDragging",!1);$(this,"interactionLayer");$(this,"activeOverlays",new Map);$(this,"selectedHandles",new Set);$(this,"validHandles",new Set);$(this,"intersectableObjectsCache",null);$(this,"cacheLastUpdated",0);$(this,"CACHE_TTL",2e3);$(this,"dxfEntities",null);$(this,"_boundOnPointerMove");$(this,"_boundOnPointerLeave");$(this,"_boundOnPointerDown");$(this,"_boundOnPointerUp");$(this,"_boundOnViewChanged");$(this,"isEnabled",!0);$(this,"onClick");$(this,"boundingBoxMesh",null);$(this,"animationFrameId",null);$(this,"_boundOnLoaded");$(this,"_boundOnCleared");this.viewer=e,this.onClick=t,this.interactionLayer=new F.Group,this.interactionLayer.name="InteractionLayer",this.interactionLayer.renderOrder=999,this.viewer.GetScene().add(this.interactionLayer),this.updateResolution(),this._boundOnPointerMove=this._onPointerMove.bind(this),this._boundOnPointerLeave=this._onPointerLeave.bind(this),this._boundOnPointerDown=this._onPointerDown.bind(this),this._boundOnPointerUp=this._onPointerUp.bind(this),this._boundOnViewChanged=this.updateResolution.bind(this),this._boundOnLoaded=this._onLoaded.bind(this),this._boundOnCleared=this._onCleared.bind(this),this.setupEventListeners(),this.initLine2Helper()}_onLoaded(){this.viewer.GetScene().add(this.interactionLayer),this.dxfEntities=null,this.clearHighlights()}_onCleared(){this.clearHighlights(),this.dxfEntities=null,this.intersectableObjectsCache=null}async initLine2Helper(){await r3()}updateResolution(){const e=this.viewer.GetCanvas();e&&a3(e.width,e.height)}setEnabled(e){this.isEnabled=e,e||(this._clearHover(),this.clearHighlights())}setupEventListeners(){const e=this.viewer.GetCanvas();e&&(e.addEventListener("pointermove",this._boundOnPointerMove),e.addEventListener("pointerleave",this._boundOnPointerLeave),e.addEventListener("pointerdown",this._boundOnPointerDown),e.addEventListener("pointerup",this._boundOnPointerUp),this.viewer.Subscribe("pointerdown",this._boundOnPointerDown),this.viewer.Subscribe("resized",this._boundOnViewChanged),this.viewer.Subscribe("loaded",this._boundOnLoaded),this.viewer.Subscribe("cleared",this._boundOnCleared))}destroy(){const e=this.viewer.GetCanvas();e&&(e.removeEventListener("pointermove",this._boundOnPointerMove),e.removeEventListener("pointerleave",this._boundOnPointerLeave),e.removeEventListener("pointerdown",this._boundOnPointerDown),e.removeEventListener("pointerup",this._boundOnPointerUp)),this.viewer.Unsubscribe("pointerdown",this._boundOnPointerDown),this.viewer.Unsubscribe("resized",this._boundOnViewChanged),this.viewer.Unsubscribe("loaded",this._boundOnLoaded),this.viewer.Unsubscribe("cleared",this._boundOnCleared),this._clearHover(),this.clearHighlights(),o3(),this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.viewer.GetScene().remove(this.interactionLayer)}resolveDxfObject(e){let t=e;for(;t;){if(t.userData&&t.userData.dxfHandle)return t;t=t.parent}return null}ensureDxfIndex(){if(this.dxfEntities)return;const e=this.viewer.GetDxf();if(!e)return;this.dxfEntities=new Map;const t=r=>{if(r)for(const s of r)s.handle&&this.dxfEntities.set(s.handle,s)};if(e.entities&&t(e.entities),e.blocks)if(e.blocks instanceof Map)e.blocks.forEach(r=>{r.entities&&t(r.entities)});else for(const r in e.blocks){const s=e.blocks[r];s.entities&&t(s.entities)}}getGeometryFromHandle(e){if(this.ensureDxfIndex(),!this.dxfEntities)return null;const t=this.dxfEntities.get(e);if(!t)return null;if(t.type==="LWPOLYLINE"){const r=t.elevation||0;return{vertices:(t.vertices||[]).map(i=>({x:i.x??0,y:i.y??0,z:r})),isClosed:!!(t.shape||t.closed)}}else{if(t.type==="POLYLINE")return{vertices:(t.vertices||[]).map(s=>({x:s.x??0,y:s.y??0,z:s.z??0})),isClosed:!!(t.shape||t.closed)};if(t.type==="LINE"){if(t.vertices)return{vertices:t.vertices.map(s=>({x:s.x??0,y:s.y??0,z:s.z??0})),isClosed:!1};if(t.start&&t.end)return{vertices:[{x:t.start.x??0,y:t.start.y??0,z:t.start.z??0},{x:t.end.x??0,y:t.end.y??0,z:t.end.z??0}],isClosed:!1}}}return null}addOverlay(e,t,r=3,s=1,i=!1){const a=this.resolveDxfObject(e);if(!a||this.activeOverlays.has(a))return!1;a.updateMatrixWorld(!0);let o=null;const l=a.userData.dxfHandle,c=i?null:this.getGeometryFromHandle(l);if(c){const u=o5(t,r,s);o=s3(c.vertices,u,c.isClosed,a.matrixWorld)}if(!o){if(a instanceof F.LineSegments||a instanceof F.Line)if(i){const u=new F.LineBasicMaterial({color:t,linewidth:1,depthTest:!1,transparent:!0,opacity:s});o=a.clone(),o.material=u,o.renderOrder=999}else{const u=o5(t,r,s);o=i3(a,u)}else if(a instanceof F.Mesh){const u=new F.MeshBasicMaterial({color:t,transparent:!0,opacity:s,depthTest:!1});o=a.clone(),o.material=u,o.renderOrder=999}}return o?(this.interactionLayer.add(o),this.activeOverlays.set(a,o),!0):!1}removeOverlay(e){const t=this.resolveDxfObject(e);if(!t)return;const r=this.activeOverlays.get(t);r&&(this.cleanupOverlayResource(r),this.activeOverlays.delete(t),this.viewer.Render())}clearAllOverlays(){this.activeOverlays.forEach(e=>{this.cleanupOverlayResource(e)}),this.activeOverlays.clear(),this.viewer.Render()}cleanupOverlayResource(e){if(!e)return;e.parent&&e.parent.remove(e),e.geometry&&e.geometry.dispose();const t=e.material;if(t){const r=e.isLineSegments2||e.type==="LineSegments2",s=e.isLine2||e.type==="Line2";!r&&!s&&(Array.isArray(t)?t.forEach(i=>i.dispose()):t.dispose())}e.children&&[...e.children].forEach(r=>this.cleanupOverlayResource(r))}setValidHandles(e){this.validHandles=e&&e.length>0?new Set(e.map(t=>t.toLowerCase())):new Set,this.intersectableObjectsCache=null,this.cacheLastUpdated=0}isHandleInteractive(e){if(!e||this.validHandles.size===0)return!1;const t=e.toLowerCase();return this.validHandles.has(t)}getIntersectableObjects(){if(this.validHandles.size===0)return[];const e=Date.now();if(this.intersectableObjectsCache&&e-this.cacheLastUpdated<this.CACHE_TTL)return this.intersectableObjectsCache;const t=[];return this.viewer.GetScene().traverse(r=>{if(r.userData.dxfHandle&&r.parent!==this.interactionLayer){if(!this.validHandles.has(r.userData.dxfHandle.toLowerCase()))return;t.push(r)}}),this.intersectableObjectsCache=t,this.cacheLastUpdated=e,t}_onPointerMove(e){if(!this.isEnabled)return;this.isMouseDown&&(this.isDragging=!0);const t=this.viewer.GetCanvas();if(!t){this._clearHover();return}const r=W2(e.clientX,e.clientY,t),s=new F.Raycaster;s.setFromCamera(r,this.viewer.GetCamera()),s.params.Line.threshold=6;const i=s.intersectObjects(this.getIntersectableObjects());let a=null;for(const o of i){const l=this.resolveDxfObject(o.object);if(l){const c=l.userData.dxfHandle;if(this.isHandleInteractive(c)){a=l;break}}}a?a!==this.hoveredObject&&(this._clearHover(),this._startHover(a)):this.hoveredObject&&this._clearHover()}_startHover(e){this.hoveredObject=e;const t=this.viewer.GetCanvas();t&&(t.style.cursor="pointer"),this.addOverlay(e,39423,4,.5),this.viewer.Render()}_clearHover(){if(this.hoveredObject){const t=this.hoveredObject.userData.dxfHandle;(!t||!this.selectedHandles.has(t.toLowerCase()))&&this.removeOverlay(this.hoveredObject),this.hoveredObject=null}const e=this.viewer.GetCanvas();e&&(e.style.cursor="default")}_onPointerDown(e){this.isEnabled&&(this.isMouseDown=!0,this.isDragging=!1)}_onPointerUp(e){if(!this.isEnabled)return;if(this.isDragging){this.isMouseDown=!1,this.isDragging=!1;return}if(this.hoveredObject){const a=this.hoveredObject.userData.dxfHandle;this.isHandleInteractive(a)&&this.onClick&&this.onClick(a),this.isMouseDown=!1,this.isDragging=!1;return}const t=this.viewer.GetCanvas();if(!t)return;const r=W2(e.clientX,e.clientY,t),s=new F.Raycaster;s.setFromCamera(r,this.viewer.GetCamera()),s.params.Line.threshold=3;const i=s.intersectObjects(this.getIntersectableObjects());for(const a of i){const o=this.resolveDxfObject(a.object);if(o){const l=o.userData.dxfHandle;if(this.isHandleInteractive(l)){this.onClick?this.onClick(l):console.warn("[EntityInteraction] onClick callback is not defined!");break}}}this.isMouseDown=!1,this.isDragging=!1}_onPointerLeave(){this._clearHover(),this.isMouseDown=!1,this.isDragging=!1}highlightHandles(e){if(this.clearHighlights(),e.length===0)return;const t=e.map(r=>r.toLowerCase());this.viewer.GetScene().traverse(r=>{const s=r.userData.dxfHandle;s&&t.includes(s.toLowerCase())&&r.parent!==this.interactionLayer&&this.addOverlay(r,39423,6)}),this.viewer.Render()}highlightContext(e){if(e.length===0)return;const t=e.map(r=>r.toLowerCase());this.viewer.GetScene().traverse(r=>{const s=r.userData.dxfHandle;if(s&&t.includes(s.toLowerCase())&&r.parent!==this.interactionLayer){if(this.selectedHandles.has(s.toLowerCase()))return;this.addOverlay(r,13421772,2)}}),this.viewer.Render()}selectHandles(e,t=[],r=!0){if(this.clearHighlights(),e.length===0)return;const s=e.map(o=>o.toLowerCase());e.forEach(o=>this.selectedHandles.add(o.toLowerCase())),t.length>0&&this.highlightContext(t);const i=[];if(this.viewer.GetScene().traverse(o=>{const l=o.userData.dxfHandle;l&&s.includes(l.toLowerCase())&&o.parent!==this.interactionLayer&&((o instanceof F.LineSegments||o instanceof F.Line)&&o.geometry&&!o.geometry.boundingBox&&o.geometry.computeBoundingBox(),i.push(o))}),i.length===0)return;i.forEach(o=>{const l=o.userData.dxfType;(l==="TEXT"||l==="MTEXT"||l==="ATTRIB")&&o instanceof F.LineSegments?this.addOverlay(o,39423,2,1,!0):this.addOverlay(o,39423,5)}),this.viewer.Render();const a=i5(i);!a||a.isEmpty()||(t.length===0&&this.highlightContextInBounds(a,Array.from(this.selectedHandles)),this.createBoundingBoxOverlay(a),r&&this.animateToFit(a,800))}highlightContextInBounds(e,t){const r=e.clone(),s=new F.Vector3;e.getSize(s),r.expandByVector(s.multiplyScalar(.1));const i=t.map(a=>a.toLowerCase());this.viewer.GetScene().traverse(a=>{if(a.parent===this.interactionLayer)return;const o=a.userData.dxfHandle;if(o&&i.includes(o.toLowerCase())||!(a instanceof F.Mesh||a instanceof F.Line||a instanceof F.LineSegments))return;const l=new F.Vector3;a.getWorldPosition(l),r.containsPoint(l)&&this.addOverlay(a,13421772,2)}),this.viewer.Render()}clearHighlights(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.selectedHandles.clear(),this.clearAllOverlays(),this.boundingBoxMesh&&(this.cleanupOverlayResource(this.boundingBoxMesh),this.boundingBoxMesh=null),this.viewer.Render()}createBoundingBoxOverlay(e){if(e.isEmpty()||!isFinite(e.min.x)||!isFinite(e.min.y)||!isFinite(e.min.z)||!isFinite(e.max.x)||!isFinite(e.max.y)||!isFinite(e.max.z))return;this.boundingBoxMesh&&(this.cleanupOverlayResource(this.boundingBoxMesh),this.boundingBoxMesh=null);const t=new F.Vector3,r=new F.Vector3;e.getSize(t),e.getCenter(r);const s=10;t.x<s&&(t.x=s),t.y<s&&(t.y=s),t.z<s&&(t.z=s);try{const i=new F.BoxGeometry(t.x,t.y,t.z),a=new F.MeshBasicMaterial({color:9647082,transparent:!0,opacity:.2,side:F.DoubleSide,depthTest:!1});this.boundingBoxMesh=new F.Mesh(i,a),this.boundingBoxMesh.position.copy(r);const o=new F.EdgesGeometry(i),l=new F.LineBasicMaterial({color:9647082,linewidth:2,depthTest:!1}),c=new F.LineSegments(o,l);this.boundingBoxMesh.add(c),this.viewer.GetScene().add(this.boundingBoxMesh),this.viewer.Render()}catch(i){console.error("[EntityInteraction] Error creating bounding box overlay:",i)}}animateToFit(e,t){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);const r=this.viewer.GetOrigin();if(e.isEmpty()||!isFinite(e.min.x)||!isFinite(e.min.y))return;const s=new F.Vector3,i=new F.Vector3;e.getSize(s),e.getCenter(i);const a=i.x-r.x,o=i.y-r.y,l=this.viewer.GetCanvas(),c=l?l.width:800,u=l?l.height:600,f=c/u,p=1.5;let d=s.x*p;s.y*p*f>d&&(d=s.y*p*f),d=Math.max(d,30);let y=null;const m=performance.now(),g=P=>{if(!y){const C=this.viewer.GetCamera();if(!isFinite(C.position.x)||!isFinite(C.zoom)){this.animationFrameId=null;return}if(y={cx:C.position.x-r.x,cy:C.position.y-r.y,vw:C.right-C.left},Math.hypot(a-y.cx,o-y.cy)<y.vw*.01&&Math.abs(d-y.vw)<y.vw*.01){this.animationFrameId=null;return}}const S=P-m,w=Math.min(S/t,1),O=w<.5?4*w*w*w:1-Math.pow(-2*w+2,3)/2,I=y.cx+(a-y.cx)*O,M=y.cy+(o-y.cy)*O,T=y.vw+(d-y.vw)*O;this.viewer.SetView({x:I+r.x,y:M+r.y},T),this.viewer.Render(),w<1?this.animationFrameId=requestAnimationFrame(g):this.animationFrameId=null};this.animationFrameId=requestAnimationFrame(g)}}const l3=40,c3=10,h3=20,Fe=7,p2=16711680,u3=16733525,f3=16711680,p3=3,Y1=999,Oe=!1;class c5{constructor(e,t,r){$(this,"viewer");$(this,"canvas");$(this,"isActive",!1);$(this,"points",[]);$(this,"previewLine",null);$(this,"polygonLine",null);$(this,"pointsMesh",null);$(this,"startPointMesh",null);$(this,"mousePosition",new F.Vector3);$(this,"completedPolygonLine",null);$(this,"completedPointsMesh",null);$(this,"isHoveringNearStart",!1);$(this,"onComplete");$(this,"onCancel");$(this,"validHandles",new Set);$(this,"_boundOnPointerDown");$(this,"_boundOnPointerMove");$(this,"_boundOnKeyDown");$(this,"_boundOnDblClick");this.viewer=e;const s=e.GetCanvas();if(!s)throw new Error("Canvas not available");this.canvas=s,this.onComplete=t,this.onCancel=r,this._boundOnPointerDown=this._onPointerDown.bind(this),this._boundOnPointerMove=this._onPointerMove.bind(this),this._boundOnKeyDown=this._onKeyDown.bind(this),this._boundOnDblClick=this._onDblClick.bind(this)}setValidHandles(e){e&&e.length>0?this.validHandles=new Set(e.map(t=>t.toLowerCase())):this.validHandles=new Set}isHandleValid(e){return this.validHandles.size===0?!1:this.validHandles.has(e.toLowerCase())}activate(){this.isActive||(this.isActive=!0,this.points=[],this.canvas.style.cursor="crosshair",this.canvas.addEventListener("pointerdown",this._boundOnPointerDown,{capture:!0}),this.canvas.addEventListener("pointermove",this._boundOnPointerMove),window.addEventListener("keydown",this._boundOnKeyDown),this.canvas.addEventListener("dblclick",this._boundOnDblClick,{capture:!0}))}deactivate(){this.isActive&&(this.isActive=!1,this.canvas.style.cursor="default",this.canvas.removeEventListener("pointerdown",this._boundOnPointerDown,{capture:!0}),this.canvas.removeEventListener("pointermove",this._boundOnPointerMove),window.removeEventListener("keydown",this._boundOnKeyDown),this.canvas.removeEventListener("dblclick",this._boundOnDblClick,{capture:!0}),this.clearDrawingVisuals())}clearCompletedPolygon(){const e=this.viewer.GetScene();this.completedPolygonLine&&(e.remove(this.completedPolygonLine),this.completedPolygonLine.geometry.dispose(),this.completedPolygonLine.material.dispose(),this.completedPolygonLine=null),this.completedPointsMesh&&(e.remove(this.completedPointsMesh),this.completedPointsMesh.geometry.dispose(),this.completedPointsMesh.material.dispose(),this.completedPointsMesh=null),this.viewer.Render()}clearInProgressPolygon(){this.points=[],this.clearDrawingVisuals()}clearDrawingVisuals(){this.clearDrawingVisualsOnly();const e=this.viewer.GetScene();this.previewLine&&(e.remove(this.previewLine),this.previewLine.geometry.dispose(),this.previewLine.material.dispose(),this.previewLine=null),this.viewer.Render()}getSnapThreshold(){const e=this.viewer.GetCamera(),r=(e.right-e.left)/e.zoom/this.canvas.width;return l3*r}isNearStartPoint(e){if(this.points.length<3)return!1;const t=this.points[0],r=e.distanceTo(t),s=this.getSnapThreshold();return r<s}_getWorldPosition(e){return a5(e.clientX,e.clientY,this.canvas,this.viewer.GetCamera())}_onPointerDown(e){if(e.button!==0)return;e.stopPropagation(),e.preventDefault();const t=this._getWorldPosition(e);if(t){if(this.isNearStartPoint(t)){this.completeSelection();return}this.points.push(t),this.updateVisuals()}}_onPointerMove(e){const t=this._getWorldPosition(e);t&&(this.mousePosition.copy(t),this.isHoveringNearStart=this.isNearStartPoint(t),this.canvas.style.cursor=this.isHoveringNearStart?"pointer":"crosshair",this.updatePreview(),this.updateVisuals())}_onDblClick(e){e.preventDefault(),e.stopPropagation(),this.completeSelection()}_onKeyDown(e){this.isActive&&(e.key==="Enter"?(e.preventDefault(),e.stopPropagation(),this.completeSelection()):e.key==="Escape"&&(e.preventDefault(),e.stopPropagation(),this.cancelSelection()))}updateVisuals(){const e=this.viewer.GetScene();this.clearDrawingVisualsOnly(),this.points.length>0&&(this.drawRegularPoints(e),this.drawStartPoint(e),this.drawPolygonLine(e)),this.viewer.Render()}drawRegularPoints(e){if(this.points.length<=1)return;const t=new F.BufferGeometry().setFromPoints(this.points.slice(1)),r=new F.PointsMaterial({color:p2,size:Fe,sizeAttenuation:Oe});this.pointsMesh=new F.Points(t,r),this.pointsMesh.renderOrder=Y1,e.add(this.pointsMesh)}drawStartPoint(e){const t=this.isHoveringNearStart?u3:p2,r=new F.BufferGeometry().setFromPoints([this.points[0]]),s=new F.PointsMaterial({color:t,size:Fe,sizeAttenuation:Oe});this.startPointMesh=new F.Points(r,s),this.startPointMesh.renderOrder=Y1,e.add(this.startPointMesh)}drawPolygonLine(e){if(this.points.length<=1)return;const t=new F.BufferGeometry().setFromPoints(this.points),r=new F.LineBasicMaterial({color:p2});this.polygonLine=new F.Line(t,r),this.polygonLine.renderOrder=Y1,e.add(this.polygonLine)}clearDrawingVisualsOnly(){const e=this.viewer.GetScene();this.polygonLine&&(e.remove(this.polygonLine),this.polygonLine.geometry.dispose(),this.polygonLine.material.dispose(),this.polygonLine=null),this.pointsMesh&&(e.remove(this.pointsMesh),this.pointsMesh.geometry.dispose(),this.pointsMesh.material.dispose(),this.pointsMesh=null),this.startPointMesh&&(e.remove(this.startPointMesh),this.startPointMesh.geometry.dispose(),this.startPointMesh.material.dispose(),this.startPointMesh=null)}updatePreview(){if(this.points.length===0)return;const e=this.viewer.GetScene();this.clearPreviewLine(e);const t=this.points[this.points.length-1],r=this.calculatePreviewEndPoint(),s=this.createPreviewMaterial();this.previewLine=new F.Line(new F.BufferGeometry().setFromPoints([t,r]),s),s instanceof F.LineDashedMaterial&&this.previewLine.computeLineDistances(),this.previewLine.renderOrder=Y1,e.add(this.previewLine),this.viewer.Render()}clearPreviewLine(e){this.previewLine&&(e.remove(this.previewLine),this.previewLine.geometry.dispose(),this.previewLine.material.dispose(),this.previewLine=null)}calculatePreviewEndPoint(){return this.isHoveringNearStart&&this.points.length>=3?this.points[0]:this.mousePosition}createPreviewMaterial(){return new F.LineDashedMaterial({color:f3,dashSize:c3,gapSize:h3,transparent:!1})}completeSelection(){if(this.points.length<p3){this.cancelSelection();return}this.createCompletedPolygonBoundary();const e=this.findEntitiesInPolygon();this.onComplete(e),this.deactivate()}createCompletedPolygonBoundary(){const e=this.viewer.GetScene();this.completedPolygonLine&&e.remove(this.completedPolygonLine),this.completedPointsMesh&&e.remove(this.completedPointsMesh);const t=new F.BufferGeometry().setFromPoints(this.points),r=new F.PointsMaterial({color:p2,size:Fe,sizeAttenuation:Oe});this.completedPointsMesh=new F.Points(t,r),this.completedPointsMesh.renderOrder=Y1,this.completedPointsMesh.name="completed-polygon-points",e.add(this.completedPointsMesh);const s=new F.BufferGeometry().setFromPoints(this.points),i=new F.LineBasicMaterial({color:p2});this.completedPolygonLine=new F.LineLoop(s,i),this.completedPolygonLine.renderOrder=Y1,this.completedPolygonLine.name="completed-polygon-boundary",e.add(this.completedPolygonLine),this.viewer.Render()}cancelSelection(){this.onCancel(),this.deactivate()}findEntitiesInPolygon(){const e=[];if(this.validHandles.size===0)return e;const t=new F.Box3().setFromPoints(this.points);return this.viewer.GetScene().traverse(r=>{if(r.userData.dxfHandle){const s=r.userData.dxfHandle;if(!this.isHandleValid(s))return;const i=Le(r);if(i&&t.intersectsBox(i)){const a=new F.Vector3;i.getCenter(a),this.isPointInPolygon(a)&&e.push(s)}}}),e}isPointInPolygon(e){let t=!1;for(let r=0,s=this.points.length-1;r<this.points.length;s=r++){const i=this.points[r].x,a=this.points[r].y,o=this.points[s].x,l=this.points[s].y;a>e.y!=l>e.y&&e.x<(o-i)*(e.y-a)/(l-a)+i&&(t=!t)}return t}}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h5=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=e0.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:a,...o},l)=>e0.createElement("svg",{ref:l,...v3,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:h5("lucide",s),...o},[...a.map(([c,u])=>e0.createElement(c,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=(n,e)=>{const t=e0.forwardRef(({className:r,...s},i)=>e0.createElement(y3,{ref:i,iconNode:e,className:h5(`lucide-${d3(n)}`,r),...s}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=X2("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=X2("SquareDashedMousePointer",[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=X2("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=X2("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);function Y2(n){const e=e0.useRef(n);return e0.useEffect(()=>{e.current=n},[n]),e}function Z2({onClick:n,active:e,title:t,children:r}){return g0.jsx("button",{className:`dxf-toolbar-btn ${e?"dxf-toolbar-btn-active":""}`,onClick:n,title:t,type:"button",children:r})}function S3({file:n,url:e,fileName:t="drawing.dxf",fonts:r,className:s,selectedHandles:i=[],visibleHandles:a=null,filteredHandles:o=null,interactiveHandles:l=null,isPolygonMode:c=!1,onLoad:u,onError:f,onSelectionChange:p,onPolygonModeChange:d,showToolbar:v=!0,enablePolygonSelection:y=!0,enableInteraction:m=!0,enableZoomOnSelect:g=!0}){const P=e0.useMemo(()=>l??a,[l,a]),S=Y2(p),w=Y2(d),O=Y2(u),I=Y2(f),M=e0.useRef(null),T=e0.useRef(null),C=e0.useRef(null),_=e0.useRef(null),R=e0.useRef(!1),[W,r0]=e0.useState(!1),[Z,n0]=e0.useState(!0),[l0,a0]=e0.useState("Initializing..."),[s0,i0]=e0.useState(null),[o0,k]=e0.useState(null);e0.useEffect(()=>{r0(c)},[c]),e0.useEffect(()=>{typeof window>"u"||Promise.resolve().then(()=>Ns).then(K=>{k(()=>K.DxfViewer)}).catch(K=>{console.error("Failed to load DxfViewer:",K),i0(K instanceof Error?K:new Error(String(K))),n0(!1)})},[]);const B=e0.useCallback(()=>{var K;if(!M.current||!o0)return null;if(T.current){try{T.current.Destroy()}catch(j){console.warn("Error destroying viewer:",j)}T.current=null}try{const j={autoResize:!0,clearColor:new F.Color("#ffffff"),clearAlpha:1,antialias:!0,colorCorrection:!0,blackWhiteInversion:!0},c0=new o0(M.current,j);if(!c0.HasRenderer())throw new Error("WebGL not available. Please check your browser supports WebGL.");return T.current=c0,c0.Subscribe("loaded",()=>{var P0;console.log("DXF loaded successfully");const d0=c0.GetBounds();if(d0){const e1=c0.GetOrigin();c0.FitView(d0.minX-e1.x,d0.maxX-e1.x,d0.minY-e1.y,d0.maxY-e1.y,.1)}c0.Render(),n0(!1),(P0=O.current)==null||P0.call(O)}),c0.Subscribe("message",d0=>{const{message:P0,level:e1}=d0.detail;e1==="error"?console.error("[DxfViewer]",P0):e1==="warn"&&console.warn("[DxfViewer]",P0)}),c0}catch(j){const c0=j instanceof Error?j:new Error(String(j));return i0(c0),n0(!1),(K=I.current)==null||K.call(I,c0),null}},[o0,O,I]),t0=e0.useCallback(async(K,j)=>{var c0;n0(!0),i0(null),a0("Loading...");try{let d0;if(typeof j=="string")d0=j;else{const P0=new Blob([j],{type:"application/octet-stream"});d0=URL.createObjectURL(P0)}await K.Load({url:d0,fonts:r??null,progressCbk:(P0,e1,Ae)=>{let E1=P0;if(P0==="fetch"?E1="Downloading...":P0==="parse"?E1="Parsing DXF...":P0==="prepare"?E1="Preparing scene...":P0==="font"&&(E1="Loading fonts..."),Ae&&e1){const H2=Math.round(e1/Ae*100);a0(`${E1} ${H2}%`)}else a0(E1)}}),typeof j!="string"&&URL.revokeObjectURL(d0)}catch(d0){const P0=d0 instanceof Error?d0:new Error(String(d0));console.error("Failed to load DXF:",P0),i0(P0),n0(!1),(c0=I.current)==null||c0.call(I,P0)}},[r,I]);e0.useEffect(()=>{if(!o0||!M.current)return;const K=B();if(K)return m&&(C.current=new l5(K,j=>{var c0,d0;r0(!1),(c0=w.current)==null||c0.call(w,!1),R.current=!1,(d0=S.current)==null||d0.call(S,[j])}),P&&C.current.setValidHandles(P)),y&&(_.current=new c5(K,j=>{var c0,d0;r0(!1),(c0=w.current)==null||c0.call(w,!1),R.current=!0,(d0=S.current)==null||d0.call(S,j,{isPolygonSelection:!0})},()=>{var j;r0(!1),(j=w.current)==null||j.call(w,!1)}),P&&_.current.setValidHandles(P)),n?t0(K,n):e&&t0(K,e),()=>{var j,c0;if((j=C.current)==null||j.destroy(),C.current=null,(c0=_.current)==null||c0.deactivate(),_.current=null,T.current){try{T.current.Destroy()}catch(d0){console.warn("Error destroying viewer:",d0)}T.current=null}}},[o0,n,e,B,t0,m,y,S,w]),e0.useEffect(()=>{!C.current||!_.current||(W?(C.current.setEnabled(!1),_.current.activate()):(_.current.deactivate(),C.current.setEnabled(!0),i.length>0&&!R.current&&C.current.selectHandles(i,[],g)))},[W,i,g]),e0.useEffect(()=>{if(!C.current||Z||s0)return;const K=R.current;R.current=!1;const j=a||[];if(i.length>0){const c0=i.length===1,d0=g&&(c0||!K);C.current.selectHandles(i,j,d0)}else o&&o.length>0?C.current.highlightHandles(o):C.current.selectHandles([],j,!1)},[i,a,o,Z,s0,g]),e0.useEffect(()=>{C.current&&C.current.setValidHandles(P),_.current&&_.current.setValidHandles(P)},[P,l]);const f0=e0.useCallback(()=>{var j;const K=!W;r0(K),(j=w.current)==null||j.call(w,K)},[W,w]),L0=e0.useCallback(()=>{const K=T.current;if(!K)return;const j=K.GetBounds();if(j){const c0=K.GetOrigin();K.FitView(j.minX-c0.x,j.maxX-c0.x,j.minY-c0.y,j.maxY-c0.y,.1),K.Render()}},[]),G0=e0.useCallback(()=>{var K,j;r0(!1),(K=w.current)==null||K.call(w,!1),C.current&&C.current.clearHighlights(),_.current&&(_.current.clearCompletedPolygon(),_.current.clearInProgressPolygon()),R.current=!1,(j=S.current)==null||j.call(S,[],{isReset:!0}),L0()},[L0,S,w]),p0=e0.useCallback(()=>{const K=T.current;if(!K)return;const j=K.GetCamera();j.zoom*=1.25,j.updateProjectionMatrix(),K.Render()},[]),O0=e0.useCallback(()=>{const K=T.current;if(!K)return;const j=K.GetCamera();j.zoom*=.8,j.updateProjectionMatrix(),K.Render()},[]);return g0.jsx("div",{className:`dxf-viewer-wrapper ${s??""}`,children:g0.jsx("div",{className:"dxf-main-content",children:g0.jsxs("div",{className:"dxf-viewer-container",children:[g0.jsx("div",{ref:M,style:{width:"100%",height:"100%",position:"absolute",inset:0}}),Z&&g0.jsxs("div",{className:"dxf-loading-overlay",children:[g0.jsx("div",{className:"dxf-loading-spinner"}),g0.jsx("div",{className:"dxf-loading-progress",children:l0})]}),s0&&g0.jsxs("div",{className:"dxf-error-overlay",children:[g0.jsxs("svg",{className:"dxf-error-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[g0.jsx("circle",{cx:"12",cy:"12",r:"10"}),g0.jsx("path",{d:"M15 9l-6 6M9 9l6 6"})]}),g0.jsx("div",{className:"dxf-error-title",children:"Failed to load DXF"}),g0.jsx("div",{className:"dxf-error-message",children:s0.message})]}),v&&!Z&&!s0&&g0.jsxs("div",{className:"dxf-bottom-toolbar",children:[g0.jsx(Z2,{onClick:G0,title:"Reset View",children:g0.jsx(g3,{size:18})}),y&&g0.jsx(Z2,{active:W,onClick:f0,title:"Polygon Selection Tool",children:g0.jsx(m3,{size:18})}),g0.jsx("div",{className:"dxf-toolbar-separator"}),g0.jsx(Z2,{onClick:O0,title:"Zoom Out",children:g0.jsx(b3,{size:18})}),g0.jsx(Z2,{onClick:p0,title:"Zoom In",children:g0.jsx(x3,{size:18})})]})]})})})}const u5=new A.Box3,J2=new A.Vector3;class De extends A.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new A.Float32BufferAttribute(e,3)),this.setAttribute("uv",new A.Float32BufferAttribute(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const r=new A.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new A.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceEnd",new A.InterleavedBufferAttribute(r,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const r=new A.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceColorStart",new A.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceColorEnd",new A.InterleavedBufferAttribute(r,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new A.WireframeGeometry(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new A.Box3);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),u5.setFromBufferAttribute(t),this.boundingBox.union(u5))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new A.Sphere),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let s=0;for(let i=0,a=e.count;i<a;i++)J2.fromBufferAttribute(e,i),s=Math.max(s,r.distanceToSquared(J2)),J2.fromBufferAttribute(t,i),s=Math.max(s,r.distanceToSquared(J2));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}A.UniformsLib.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new A.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},A.ShaderLib.line={uniforms:A.UniformsUtils.merge([A.UniformsLib.common,A.UniformsLib.fog,A.UniformsLib.line]),vertexShader:`
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
		`,fragmentShader:`
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
		`};class f5 extends A.ShaderMaterial{static get type(){return"LineMaterial"}constructor(e){super({uniforms:A.UniformsUtils.clone(A.ShaderLib.line.uniforms),vertexShader:A.ShaderLib.line.vertexShader,fragmentShader:A.ShaderLib.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Me=new A.Vector4,p5=new A.Vector3,d5=new A.Vector3,D0=new A.Vector4,M0=new A.Vector4,h1=new A.Vector4,Ie=new A.Vector3,_e=new A.Matrix4,I0=new A.Line3,v5=new A.Vector3,j2=new A.Box3,Q2=new A.Sphere,u1=new A.Vector4;let f1,N1;function y5(n,e,t){return u1.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),u1.multiplyScalar(1/u1.w),u1.x=N1/t.width,u1.y=N1/t.height,u1.applyMatrix4(n.projectionMatrixInverse),u1.multiplyScalar(1/u1.w),Math.abs(Math.max(u1.x,u1.y))}function w3(n,e){const t=n.matrixWorld,r=n.geometry,s=r.attributes.instanceStart,i=r.attributes.instanceEnd,a=Math.min(r.instanceCount,s.count);for(let o=0,l=a;o<l;o++){I0.start.fromBufferAttribute(s,o),I0.end.fromBufferAttribute(i,o),I0.applyMatrix4(t);const c=new A.Vector3,u=new A.Vector3;f1.distanceSqToSegment(I0.start,I0.end,u,c),u.distanceTo(c)<N1*.5&&e.push({point:u,pointOnLine:c,distance:f1.origin.distanceTo(u),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function T3(n,e,t){const r=e.projectionMatrix,i=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),f=-e.near;f1.at(1,h1),h1.w=1,h1.applyMatrix4(e.matrixWorldInverse),h1.applyMatrix4(r),h1.multiplyScalar(1/h1.w),h1.x*=i.x/2,h1.y*=i.y/2,h1.z=0,Ie.copy(h1),_e.multiplyMatrices(e.matrixWorldInverse,a);for(let p=0,d=u;p<d;p++){if(D0.fromBufferAttribute(l,p),M0.fromBufferAttribute(c,p),D0.w=1,M0.w=1,D0.applyMatrix4(_e),M0.applyMatrix4(_e),D0.z>f&&M0.z>f)continue;if(D0.z>f){const S=D0.z-M0.z,w=(D0.z-f)/S;D0.lerp(M0,w)}else if(M0.z>f){const S=M0.z-D0.z,w=(M0.z-f)/S;M0.lerp(D0,w)}D0.applyMatrix4(r),M0.applyMatrix4(r),D0.multiplyScalar(1/D0.w),M0.multiplyScalar(1/M0.w),D0.x*=i.x/2,D0.y*=i.y/2,M0.x*=i.x/2,M0.y*=i.y/2,I0.start.copy(D0),I0.start.z=0,I0.end.copy(M0),I0.end.z=0;const y=I0.closestPointToPointParameter(Ie,!0);I0.at(y,v5);const m=A.MathUtils.lerp(D0.z,M0.z,y),g=m>=-1&&m<=1,P=Ie.distanceTo(v5)<N1*.5;if(g&&P){I0.start.fromBufferAttribute(l,p),I0.end.fromBufferAttribute(c,p),I0.start.applyMatrix4(a),I0.end.applyMatrix4(a);const S=new A.Vector3,w=new A.Vector3;f1.distanceSqToSegment(I0.start,I0.end,w,S),t.push({point:w,pointOnLine:S,distance:f1.origin.distanceTo(w),object:n,face:null,faceIndex:p,uv:null,uv1:null})}}}class g5 extends A.Mesh{constructor(e=new De,t=new f5({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)p5.fromBufferAttribute(t,a),d5.fromBufferAttribute(r,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+p5.distanceTo(d5);const i=new A.InstancedInterleavedBuffer(s,2,1);return e.setAttribute("instanceDistanceStart",new A.InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new A.InterleavedBufferAttribute(i,1,1)),this}raycast(e,t){const r=this.material.worldUnits,s=e.camera;s===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;f1=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;N1=l.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),Q2.copy(o.boundingSphere).applyMatrix4(a);let c;if(r)c=N1*.5;else{const f=Math.max(s.near,Q2.distanceToPoint(f1.origin));c=y5(s,f,l.resolution)}if(Q2.radius+=c,f1.intersectsSphere(Q2)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),j2.copy(o.boundingBox).applyMatrix4(a);let u;if(r)u=N1*.5;else{const f=Math.max(s.near,j2.distanceToPoint(f1.origin));u=y5(s,f,l.resolution)}j2.expandByScalar(u),f1.intersectsBox(j2)!==!1&&(r?w3(this,t):T3(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Me),this.material.uniforms.resolution.value.set(Me.z,Me.w))}}const B1=new F.Vector2(1,1),Z1=new Map;function E3(n,e){B1.set(n,e),Z1.forEach(t=>{t.resolution.copy(B1),t.needsUpdate=!0})}function C3(n,e=3,t=1){const r=`${n}-${e}-${t}`;if(Z1.has(r)){const i=Z1.get(r);return(i.resolution.x!==B1.x||i.resolution.y!==B1.y)&&(i.resolution.copy(B1),i.needsUpdate=!0),i}const s=new f5({color:new F.Color(n),linewidth:e,resolution:B1,dashed:!1,worldUnits:!1,depthTest:!1,transparent:!0,opacity:t});return Z1.set(r,s),s}function P3(){Z1.forEach(n=>n.dispose()),Z1.clear()}function A3(n,e){if(!n.geometry)return null;const t=new De,r=[],s=n.geometry.getAttribute("position");if(!s)return null;const i=s.array,a=s.itemSize,o=s.count,l=u=>{const f=Number(i[u*a]),p=Number(i[u*a+1]),d=a>=3?Number(i[u*a+2]):0;isNaN(f)||isNaN(p)||isNaN(d)?r.push(0,0,0):r.push(f,p,d)};if(n.geometry.index){const u=n.geometry.index.array;for(let f=0;f<u.length;f++)l(u[f])}else for(let u=0;u<o;u++)l(u);t.setPositions(r),t.computeBoundingBox(),t.computeBoundingSphere();const c=new g5(t,e);return n.updateMatrixWorld(),c.matrix.copy(n.matrixWorld),c.matrixAutoUpdate=!1,c.renderOrder=999,c.computeLineDistances(),c}function k3(n,e,t=!1,r=null){if(!n||n.length<2)return null;const s=[];for(let o=0;o<n.length-1;o++){const l=n[o],c=n[o+1],u=Number(l.x),f=Number(l.y),p=Number(l.z||0),d=Number(c.x),v=Number(c.y),y=Number(c.z||0);isNaN(u)||isNaN(f)||isNaN(p)||isNaN(d)||isNaN(v)||isNaN(y)||(s.push(u,f,p),s.push(d,v,y))}if(t&&n.length>2){const o=n[n.length-1],l=n[0],c=Number(o.x),u=Number(o.y),f=Number(o.z||0),p=Number(l.x),d=Number(l.y),v=Number(l.z||0);!isNaN(c)&&!isNaN(u)&&!isNaN(f)&&!isNaN(p)&&!isNaN(d)&&!isNaN(v)&&(s.push(c,u,f),s.push(p,d,v))}if(s.length===0)return null;const i=new De;i.setPositions(s),i.computeBoundingBox(),i.computeBoundingSphere();const a=new g5(i,e);return r&&(a.matrix.copy(r),a.matrixAutoUpdate=!1),a.renderOrder=999,a.computeLineDistances(),a}const L3=Object.freeze(Object.defineProperty({__proto__:null,clearLineMaterialCache:P3,createOverlay:A3,createOverlayFromCoordinates:k3,getLineMaterial:C3,sharedResolution:B1,updateResolution:E3},Symbol.toStringTag,{value:"Module"}));function J1(n){this._pointer=0,this._data=n,this._eof=!1}J1.prototype.next=function(){var n;if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);if(n={code:parseInt(this._data[this._pointer])},isNaN(n.code))throw new Error("Cannot parse group code: "+this._data[this._pointer]);return this._pointer++,n.value=m5(n.code,this._data[this._pointer]),this._pointer++,n.code===0&&n.value==="EOF"&&(this._eof=!0),this.lastReadGroup=n,n},J1.prototype.peek=function(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);var n={code:parseInt(this._data[this._pointer])};if(isNaN(n.code))throw new Error("Cannot parse group code: "+this._data[this._pointer]);return n.value=m5(n.code,this._data[this._pointer+1]),n},J1.prototype.rewind=function(n){n=n||1,this._pointer=this._pointer-n*2},J1.prototype.hasNext=function(){return!(this._eof||this._pointer>this._data.length-2)},J1.prototype.isEOF=function(){return this._eof};function m5(n,e){return n<=9?e:n>=10&&n<=59?parseFloat(e.trim()):n>=60&&n<=99?parseInt(e.trim()):n>=100&&n<=109?e:n>=110&&n<=149?parseFloat(e.trim()):n>=160&&n<=179?parseInt(e.trim()):n>=210&&n<=239?parseFloat(e.trim()):n>=270&&n<=289?parseInt(e.trim()):n>=290&&n<=299?F3(e.trim()):n>=300&&n<=369?e:n>=370&&n<=389?parseInt(e.trim()):n>=390&&n<=399?e:n>=400&&n<=409?parseInt(e.trim()):n>=410&&n<=419?e:n>=420&&n<=429?parseInt(e.trim()):n>=430&&n<=439?e:n>=440&&n<=459?parseInt(e.trim()):n>=460&&n<=469?parseFloat(e.trim()):n>=470&&n<=481||n===999||n>=1e3&&n<=1009?e:n>=1010&&n<=1059?parseFloat(e.trim()):n>=1060&&n<=1071?parseInt(e.trim()):(console.log("WARNING: Group code does not have a defined type: %j",{code:n,value:e}),e)}function F3(n){if(n==="0")return!1;if(n==="1")return!0;throw TypeError("String '"+n+"' cannot be cast to Boolean type")}const x5=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];var q2={exports:{}},O3=q2.exports,b5;function D3(){return b5||(b5=1,(function(n){(function(e,t){n.exports?n.exports=t():e.log=t()})(O3,function(){var e=function(){},t="undefined",r=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),s=["trace","debug","info","warn","error"],i={},a=null;function o(y,m){var g=y[m];if(typeof g.bind=="function")return g.bind(y);try{return Function.prototype.bind.call(g,y)}catch{return function(){return Function.prototype.apply.apply(g,[y,arguments])}}}function l(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function c(y){return y==="debug"&&(y="log"),typeof console===t?!1:y==="trace"&&r?l:console[y]!==void 0?o(console,y):console.log!==void 0?o(console,"log"):e}function u(){for(var y=this.getLevel(),m=0;m<s.length;m++){var g=s[m];this[g]=m<y?e:this.methodFactory(g,y,this.name)}if(this.log=this.debug,typeof console===t&&y<this.levels.SILENT)return"No console available for logging"}function f(y){return function(){typeof console!==t&&(u.call(this),this[y].apply(this,arguments))}}function p(y,m,g){return c(y)||f.apply(this,arguments)}function d(y,m){var g=this,P,S,w,O="loglevel";typeof y=="string"?O+=":"+y:typeof y=="symbol"&&(O=void 0);function I(R){var W=(s[R]||"silent").toUpperCase();if(!(typeof window===t||!O)){try{window.localStorage[O]=W;return}catch{}try{window.document.cookie=encodeURIComponent(O)+"="+W+";"}catch{}}}function M(){var R;if(!(typeof window===t||!O)){try{R=window.localStorage[O]}catch{}if(typeof R===t)try{var W=window.document.cookie,r0=encodeURIComponent(O),Z=W.indexOf(r0+"=");Z!==-1&&(R=/^([^;]+)/.exec(W.slice(Z+r0.length+1))[1])}catch{}return g.levels[R]===void 0&&(R=void 0),R}}function T(){if(!(typeof window===t||!O)){try{window.localStorage.removeItem(O)}catch{}try{window.document.cookie=encodeURIComponent(O)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function C(R){var W=R;if(typeof W=="string"&&g.levels[W.toUpperCase()]!==void 0&&(W=g.levels[W.toUpperCase()]),typeof W=="number"&&W>=0&&W<=g.levels.SILENT)return W;throw new TypeError("log.setLevel() called with invalid level: "+R)}g.name=y,g.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},g.methodFactory=m||p,g.getLevel=function(){return w??S??P},g.setLevel=function(R,W){return w=C(R),W!==!1&&I(w),u.call(g)},g.setDefaultLevel=function(R){S=C(R),M()||g.setLevel(R,!1)},g.resetLevel=function(){w=null,T(),u.call(g)},g.enableAll=function(R){g.setLevel(g.levels.TRACE,R)},g.disableAll=function(R){g.setLevel(g.levels.SILENT,R)},g.rebuild=function(){if(a!==g&&(P=C(a.getLevel())),u.call(g),a===g)for(var R in i)i[R].rebuild()},P=C(a?a.getLevel():"WARN");var _=M();_!=null&&(w=C(_)),u.call(g)}a=new d,a.getLogger=function(m){if(typeof m!="symbol"&&typeof m!="string"||m==="")throw new TypeError("You must supply a name when creating a logger.");var g=i[m];return g||(g=i[m]=new d(m,a.methodFactory)),g};var v=typeof window!==t?window.log:void 0;return a.noConflict=function(){return typeof window!==t&&window.log===a&&(window.log=v),a},a.getLoggers=function(){return i},a.default=a,a})})(q2)),q2.exports}var M3=D3();const Y=$6(M3);class I3{constructor(){this.appName=null,this.appNameWarningShown=!1,this.lastString=null,this.sectionStack=[this._CreateSection()],this.failure=!1}Feed(e){if(!this.appName)return e.code==1001?(this.appName=e.value,!1):(this.appNameWarningShown||(this.appNameWarningShown=!0,Y.warn("XDATA section does not start with application name")),!1);if(e.code==1001)return!0;if(this.failure)return!1;if(e.code==1e3)return this.lastString&&Y.warn("XDATA section unused string: "+this.lastString),this.lastString=e.value,!1;const t=this._currentSection;if(e.code==1002){if(e.value=="{"){if(!this.lastString)return Y.warn("Unnamed XDATA section encountered"),this.failure=!0,!1;const r=this._CreateSection();return t[this.lastString]=r,this.lastString=null,this.sectionStack.push(r),!1}return e.value=="}"?this.sectionStack.length<2?(Y.warn("Unmatched XDATA section closing"),this.failure=!0,!1):(this.sectionStack.length=this.sectionStack.length-1,!1):(Y.warn("Bad XDATA section control string encountered: "+e.value),this.failure=!0,!1)}return this.lastString!==null&&(t.values.push(this._CreateValue(1e3,this.lastString)),this.lastString=null),t.values.push(this._CreateValue(e.code,e.value)),!1}Finish(e){if(!this.failure&&this.appName){let t;e.hasOwnProperty("xdata")?t=e.xdata:(t={},e.xdata=t),t[this.appName]=this.sectionStack[0]}}get _currentSection(){return this.sectionStack[this.sectionStack.length-1]}_CreateSection(){return{values:[]}}_CreateValue(e,t){return{code:e,value:t}}}function _3(n){return x5[n]}function z(n){var e={};n.rewind();var t=n.next(),r=t.code;if(e.x=t.value,r+=10,t=n.next(),t.code!==r)throw new Error("Expected code for point value to be "+r+" but got "+t.code+".");return e.y=t.value,r+=10,t=n.next(),t.code!==r?(n.rewind(),e):(e.z=t.value,e)}function S5(n){n.rewind();let e=n.next();if(e.code!==101)throw new Error("Bad call for skipEmbeddedObject()");do e=n.next();while(e.code!==0);n.rewind()}function w0(n,e,t){let r=null;for(;e.code>=1e3;)r==null&&(r=new I3),r.Feed(e)?(r.Finish(n),r=null):e=t.next();if(r)return r.Finish(n),t.rewind(),!0;switch(e.code){case 0:n.type=e.value;break;case 5:n.handle=e.value;break;case 6:n.lineType=e.value;break;case 8:n.layer=e.value;break;case 48:n.lineTypeScale=e.value;break;case 60:n.hidden=!!e.value;break;case 62:n.colorIndex=e.value,n.color=_3(Math.abs(e.value));break;case 67:n.inPaperSpace=e.value!==0;break;case 100:break;case 330:n.ownerHandle=e.value;break;case 347:n.materialObjectHandle=e.value;break;case 370:n.lineweight=e.value;break;case 420:n.color=e.value;break;default:return!1}return!0}function Re(){}Re.ForEntityName="3DFACE",Re.prototype.parseEntity=function(n,e){var t={type:e.value,vertices:[]};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 70:t.shape=(e.value&1)===1,t.hasContinuousLinetypePattern=(e.value&128)===128;break;case 10:t.vertices=R3(n,e),e=n.lastReadGroup;break;default:w0(t,e,n);break}e=n.next()}return t};function R3(n,e){var t=[],r,s=!1,i=!1,a=4;for(r=0;r<=a;r++){for(var o={};e!=="EOF"&&!(e.code===0||i);){switch(e.code){case 10:case 11:case 12:case 13:if(s){i=!0;continue}o.x=e.value,s=!0;break;case 20:case 21:case 22:case 23:o.y=e.value;break;case 30:case 31:case 32:case 33:o.z=e.value;break;default:return t}e=n.next()}t.push(o),s=!1,i=!1}return n.rewind(),t}function Ne(){}Ne.ForEntityName="ARC",Ne.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.center=z(n);break;case 40:t.radius=e.value;break;case 50:t.startAngle=Math.PI/180*e.value;break;case 51:t.endAngle=Math.PI/180*e.value;break;case 210:t.extrusionDirection=z(n);break;default:w0(t,e,n);break}e=n.next()}return t};function Be(){}Be.ForEntityName="ATTDEF",Be.prototype.parseEntity=function(n,e){var t={type:e.value,scale:1,textStyle:"STANDARD"};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 1:t.text=e.value;break;case 2:t.tag=e.value;break;case 3:t.prompt=e.value;break;case 7:t.textStyle=e.value;break;case 10:t.startPoint=z(n);break;case 11:t.endPoint=z(n);break;case 39:t.thickness=e.value;break;case 40:t.textHeight=e.value;break;case 41:t.scale=e.value;break;case 50:t.rotation=e.value;break;case 51:t.obliqueAngle=e.value;break;case 70:t.hidden=!!(e.value&1),t.constant=!!(e.value&2),t.verificationRequired=!!(e.value&4),t.preset=!!(e.value&8);break;case 71:t.backwards=!!(e.value&2),t.mirrored=!!(e.value&4);break;case 72:t.horizontalJustification=e.value;break;case 73:t.fieldLength=e.value;break;case 74:t.verticalJustification=e.value;break;case 100:break;case 101:S5(n);break;case 210:t.extrusionDirection=z(n);break;default:w0(t,e,n);break}e=n.next()}return t};function K2(){}K2.ForEntityName="ATTRIB",K2.prototype.parseEntity=function(n,e){var t={type:e.value,scale:1,textStyle:"STANDARD"},r=!1;for(e=n.next();e!=="EOF"&&e.code!==0;){if(e.code===100){const s=typeof e.value=="string"?e.value.toUpperCase():"";s==="ACDBXRECORD"?r=!0:s==="ACDBATTRIBUTE"&&(r=!1)}if(!r)switch(e.code){case 1:t.text=e.value;break;case 2:t.tag=e.value;break;case 3:t.prompt=e.value;break;case 7:t.textStyle=e.value;break;case 10:t.startPoint=z(n);break;case 11:t.endPoint=z(n);break;case 39:t.thickness=e.value;break;case 40:t.textHeight=e.value;break;case 41:t.scale=e.value;break;case 44:t.lineSpacingFactor=e.value;break;case 45:t.fillBoxScale=e.value;break;case 46:t.annotationHeight=e.value;break;case 50:t.rotation=e.value;break;case 51:t.obliqueAngle=e.value;break;case 63:t.backgroundFillColor=e.value;break;case 70:t.hidden=!!(e.value&1),t.constant=!!(e.value&2),t.verificationRequired=!!(e.value&4),t.preset=!!(e.value&8);break;case 71:t.attachmentPoint=e.value;break;case 72:t.horizontalJustification=e.value;break;case 73:t.lineSpacing=e.value;break;case 74:t.verticalJustification=e.value;break;case 90:t.backgroundFillSetting=e.value;break;case 100:break;case 210:t.extrusionDirection=z(n);break;case 280:t.lockPositionFlag=e.value;break;case 340:t.hardPointerId=e.value;break;default:w0(t,e,n);break}e=n.next()}return t};function Ue(){}Ue.ForEntityName="CIRCLE",Ue.prototype.parseEntity=function(n,e){var t,r;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.center=z(n);break;case 40:t.radius=e.value;break;case 50:t.startAngle=Math.PI/180*e.value;break;case 51:r=Math.PI/180*e.value,r<t.startAngle?t.angleLength=r+2*Math.PI-t.startAngle:t.angleLength=r-t.startAngle,t.endAngle=r;break;case 210:t.extrusionDirection=z(n);break;default:w0(t,e,n);break}e=n.next()}return t};function Ge(){}Ge.ForEntityName="DIMENSION",Ge.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 2:t.block=e.value;break;case 3:t.styleName=e.value;break;case 10:t.anchorPoint=z(n);break;case 11:t.middleOfText=z(n);break;case 12:t.insertionPoint=z(n);break;case 13:t.linearOrAngularPoint1=z(n);break;case 14:t.linearOrAngularPoint2=z(n);break;case 15:t.diameterOrRadiusPoint=z(n);break;case 16:t.arcPoint=z(n);break;case 70:t.dimensionType=e.value;break;case 71:t.attachmentPoint=e.value;break;case 42:t.actualMeasurement=e.value;break;case 1:t.text=e.value;break;case 50:t.angle=e.value;break;case 53:t.textRotation=e.value;break;default:w0(t,e,n);break}e=n.next()}return t};function ze(){}ze.ForEntityName="ELLIPSE",ze.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.center=z(n);break;case 11:t.majorAxisEndPoint=z(n);break;case 40:t.axisRatio=e.value;break;case 41:t.startAngle=e.value;break;case 42:t.endAngle=e.value;break;case 2:t.name=e.value;break;case 210:t.extrusionDirection=z(n);break;default:w0(t,e,n);break}e=n.next()}return t};function He(){}He.ForEntityName="INSERT",He.prototype.parseEntity=function(n,e){var t;t={type:e.value};var r=!1;for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 2:t.name=e.value;break;case 41:t.xScale=e.value;break;case 42:t.yScale=e.value;break;case 43:t.zScale=e.value;break;case 10:t.position=z(n);break;case 50:t.rotation=e.value;break;case 66:r=e.value===1;break;case 70:t.columnCount=e.value;break;case 71:t.rowCount=e.value;break;case 44:t.columnSpacing=e.value;break;case 45:t.rowSpacing=e.value;break;case 210:t.extrusionDirection=z(n);break;default:w0(t,e,n);break}e=n.next()}if(r&&e.code===0){t.attribs=[];for(var s=new K2;e!=="EOF"&&e.code===0;)if(e.value==="ATTRIB"){var i=s.parseEntity(n,e);i.ownerHandle=t.handle,t.attribs.push(i),e=n.lastReadGroup}else if(e.value==="SEQEND"){for(e=n.next();e!=="EOF"&&e.code!==0;)e=n.next();break}else break}return t};function Ve(){}Ve.ForEntityName="LEADER",Ve.prototype.parseEntity=function(n,e){var t={type:e.value,vertices:[],arrowheadEnabled:!0,pathType:0,creationFlag:3,hasHookline:!1};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 3:t.dimStyleName=e.value;break;case 71:t.arrowheadEnabled=e.value===1;break;case 72:t.pathType=e.value;break;case 73:t.creationFlag=e.value;break;case 74:t.hooklineDirection=e.value;break;case 75:t.hasHookline=e.value===1;break;case 40:t.textHeight=e.value;break;case 41:t.textWidth=e.value;break;case 76:t.vertexCount=e.value;break;case 10:t.vertices.push(z(n));break;case 77:t.colorOverride=e.value;break;case 340:t.annotationHandle=e.value;break;case 210:t.extrusionDirection=z(n);break;case 211:t.horizontalDirection=z(n);break;case 212:t.blockOffset=z(n);break;case 213:t.annotationOffset=z(n);break;default:w0(t,e,n);break}e=n.next()}return t};function We(){}We.ForEntityName="MULTILEADER",We.prototype.parseEntity=function(n,e){var t={type:e.value,leaders:[],context:null,contentType:2};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 170:t.leaderType=e.value;break;case 171:t.leaderLineWeight=e.value;break;case 172:t.contentType=e.value;break;case 173:t.textLeftAttachment=e.value;break;case 174:t.textRightAttachment=e.value;break;case 175:t.textTopAttachment=e.value;break;case 176:t.textBottomAttachment=e.value;break;case 178:t.textAngleType=e.value;break;case 90:t.propertyOverrideFlags=e.value;break;case 91:t.leaderLineColor=e.value;break;case 92:t.leaderLineColor2=e.value;break;case 290:t.enableLanding=e.value;break;case 291:t.enableDogleg=e.value;break;case 41:t.doglegLength=e.value;break;case 42:t.arrowheadSize=e.value;break;case 43:t.blockScale=e.value;break;case 340:t.mleaderStyleHandle=e.value;break;case 341:t.arrowheadBlockHandle=e.value;break;case 343:t.textStyleHandle=e.value;break;case 10:t.contentBasePoint=z(n);break;case 300:if(e.value==="CONTEXT_DATA{"){t.context=N3(n),e=n.lastReadGroup;continue}break;case 270:t.version=e.value;break;case 271:t.textTopAttachmentType=e.value;break;case 272:t.textBottomAttachmentType=e.value;break;case 273:break;case 295:t.textDirectionNegative=e.value;break;case 95:t.flags=e.value;break;default:w0(t,e,n);break}e=n.next()}return t};function N3(n){for(var e={leaders:[],textLabel:null,contentBasePosition:null,textHeight:null,textDirection:null,textPosition:null,textRotation:0,textWidth:0,textStyleHandle:null},t=n.next();t!=="EOF"&&t.code!==0;){if(t.code===302&&t.value==="LEADER{"){e.leaders.push(B3(n)),t=n.lastReadGroup;continue}if(t.code===301&&t.value==="}")return n.next(),e;switch(t.code){case 40:e.scale=t.value;break;case 10:e.contentBasePosition=z(n);break;case 41:e.textHeight=t.value;break;case 140:e.textHeightOverride=t.value;break;case 145:e.textLineSpacing=t.value;break;case 174:e.textLeftAttachment=t.value;break;case 175:e.textRightAttachment=t.value;break;case 176:e.textAngleType=t.value;break;case 177:e.textAlignment=t.value;break;case 290:e.hasTextContent=t.value;break;case 304:e.textLabel=t.value;break;case 11:e.textNormal=z(n);break;case 340:e.textStyleHandle=t.value;break;case 12:e.textPosition=z(n);break;case 13:e.textDirection=z(n);break;case 42:e.textRotation=t.value;break;case 43:e.textWidth=t.value;break;case 44:e.textDefinedWidth=t.value;break;case 45:e.textDefinedHeight=t.value;break;case 170:e.textAttachmentDirection=t.value;break;case 171:e.textFlowDirection=t.value;break;case 172:e.columnType=t.value;break;case 90:e.textColor=t.value;break;case 91:e.textColorTrue=t.value;break;case 92:break;case 141:e.landingGap=t.value;break;case 142:break;case 143:break;case 110:e.blockBasePosition=z(n);break;case 111:e.blockXDir=z(n);break;case 112:e.blockYDir=z(n);break}t=n.next()}return e}function B3(n){for(var e={lines:[],hasSetLastLeaderLinePoint:!1,hasSetDoglegVector:!1,lastLeaderLinePoint:null,doglegVector:null,doglegLength:0},t=n.next();t!=="EOF"&&t.code!==0;){if(t.code===304&&t.value==="LEADER_LINE{"){e.lines.push(U3(n)),t=n.lastReadGroup;continue}if(t.code===303&&t.value==="}")return n.next(),e;switch(t.code){case 290:e.hasSetLastLeaderLinePoint=t.value;break;case 291:e.hasSetDoglegVector=t.value;break;case 10:e.lastLeaderLinePoint=z(n);break;case 11:e.doglegVector=z(n);break;case 40:e.doglegLength=t.value;break;case 90:e.branchIndex=t.value;break;case 271:e.lineIndex=t.value;break}t=n.next()}return e}function U3(n){for(var e={vertices:[]},t=n.next();t!=="EOF"&&t.code!==0;){if(t.code===305&&t.value==="}")return n.next(),e;switch(t.code){case 10:e.vertices.push(z(n));break;case 91:e.lineIndex=t.value;break;case 92:e.color=t.value;break}t=n.next()}return e}function Xe(){}Xe.ForEntityName="LINE",Xe.prototype.parseEntity=function(n,e){var t={type:e.value,vertices:[]};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.vertices.unshift(z(n));break;case 11:t.vertices.push(z(n));break;case 210:t.extrusionDirection=z(n);break;case 100:break;default:w0(t,e,n);break}e=n.next()}return t};function Ye(){}Ye.ForEntityName="LWPOLYLINE",Ye.prototype.parseEntity=function(n,e){var t={type:e.value,vertices:[]},r=0;for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 38:t.elevation=e.value;break;case 39:t.depth=e.value;break;case 70:t.shape=(e.value&1)===1,t.hasContinuousLinetypePattern=(e.value&128)===128;break;case 90:r=e.value;break;case 10:t.vertices=G3(r,n);break;case 43:e.value!==0&&(t.width=e.value);break;case 210:t.extrusionDirection=z(n);break;default:w0(t,e,n);break}e=n.next()}return t};function G3(n,e){if(!n||n<=0)throw Error("n must be greater than 0 vertices");var t=[],r,s=!1,i=!1,a=e.lastReadGroup;for(r=0;r<n;r++){for(var o={};a!=="EOF"&&!(a.code===0||i);){switch(a.code){case 10:if(s){i=!0;continue}o.x=a.value,s=!0;break;case 20:o.y=a.value;break;case 30:o.z=a.value;break;case 40:o.startWidth=a.value;break;case 41:o.endWidth=a.value;break;case 42:a.value!=0&&(o.bulge=a.value);break;case 91:o.id=a.value;break;default:return s&&t.push(o),e.rewind(),t}a=e.next()}t.push(o),s=!1,i=!1}return e.rewind(),t}function Ze(){}Ze.ForEntityName="MTEXT",Ze.prototype.parseEntity=function(n,e){var t={type:e.value};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 3:case 1:t.text?t.text+=e.value:t.text=e.value;break;case 10:t.position=z(n);break;case 11:t.direction=z(n);break;case 40:t.height=e.value;break;case 41:t.width=e.value;break;case 44:t.lineSpacing=e.value;break;case 50:t.rotation=e.value;break;case 7:t.styleName=e.value;break;case 71:t.attachmentPoint=e.value;break;case 72:t.drawingDirection=e.value;break;case 101:S5(n);break;default:w0(t,e,n);break}e=n.next()}return t};function Je(){}Je.ForEntityName="POINT",Je.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.position=z(n);break;case 39:t.thickness=e.value;break;case 210:t.extrusionDirection=z(n);break;case 100:break;default:w0(t,e,n);break}e=n.next()}return t};function je(){}je.ForEntityName="VERTEX",je.prototype.parseEntity=function(n,e){var t={type:e.value};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.x=e.value;break;case 20:t.y=e.value;break;case 30:t.z=e.value;break;case 40:break;case 41:break;case 42:e.value!=0&&(t.bulge=e.value);break;case 70:t.curveFittingVertex=(e.value&1)!==0,t.curveFitTangent=(e.value&2)!==0,t.splineVertex=(e.value&8)!==0,t.splineControlPoint=(e.value&16)!==0,t.threeDPolylineVertex=(e.value&32)!==0,t.threeDPolylineMesh=(e.value&64)!==0,t.polyfaceMeshVertex=(e.value&128)!==0;break;case 50:break;case 71:t.faces=[e.value];break;case 72:t.faces[1]=e.value;break;case 73:t.faces[2]=e.value;break;case 74:t.faces[3]=e.value;break;default:w0(t,e,n);break}e=n.next()}return t};function Qe(){}Qe.ForEntityName="POLYLINE",Qe.prototype.parseEntity=function(n,e){var t={type:e.value,vertices:[]};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:break;case 20:break;case 30:break;case 39:t.thickness=e.value;break;case 40:break;case 41:break;case 70:t.shape=(e.value&1)!==0,t.includesCurveFitVertices=(e.value&2)!==0,t.includesSplineFitVertices=(e.value&4)!==0,t.is3dPolyline=(e.value&8)!==0,t.is3dPolygonMesh=(e.value&16)!==0,t.is3dPolygonMeshClosed=(e.value&32)!==0,t.isPolyfaceMesh=(e.value&64)!==0,t.hasContinuousLinetypePattern=(e.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:t.extrusionDirection=z(n);break;default:w0(t,e,n);break}e=n.next()}return t.vertices=z3(n,e),t};function z3(n,e){for(var t=new je,r=[];!n.isEOF();)if(e.code===0){if(e.value==="VERTEX")r.push(t.parseEntity(n,e)),e=n.lastReadGroup;else if(e.value==="SEQEND"){H3(n,e);break}}return r}function H3(n,e){var t={type:e.value};for(e=n.next();e!="EOF"&&e.code!=0;)w0(t,e,n),e=n.next();return t}function qe(){}qe.ForEntityName="SOLID",qe.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},t.points=[],e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.points[0]=z(n);break;case 11:t.points[1]=z(n);break;case 12:t.points[2]=z(n);break;case 13:t.points[3]=z(n);break;case 210:t.extrusionDirection=z(n);break;default:w0(t,e,n);break}e=n.next()}return t};function Ke(){}Ke.ForEntityName="SPLINE",Ke.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.controlPoints||(t.controlPoints=[]),t.controlPoints.push(z(n));break;case 11:t.fitPoints||(t.fitPoints=[]),t.fitPoints.push(z(n));break;case 12:t.startTangent=z(n);break;case 13:t.endTangent=z(n);break;case 40:t.knotValues||(t.knotValues=[]),t.knotValues.push(e.value);break;case 70:(e.value&1)!=0&&(t.closed=!0),(e.value&2)!=0&&(t.periodic=!0),(e.value&4)!=0&&(t.rational=!0),(e.value&8)!=0&&(t.planar=!0),(e.value&16)!=0&&(t.planar=!0,t.linear=!0);break;case 71:t.degreeOfSplineCurve=e.value;break;case 72:t.numberOfKnots=e.value;break;case 73:t.numberOfControlPoints=e.value;break;case 74:t.numberOfFitPoints=e.value;break;case 210:t.extrusionDirection=z(n);break;default:w0(t,e,n);break}e=n.next()}return t};function $e(){}$e.ForEntityName="TEXT",$e.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.startPoint=z(n);break;case 11:t.endPoint=z(n);break;case 40:t.textHeight=e.value;break;case 41:t.xScale=e.value;break;case 50:t.rotation=e.value;break;case 7:t.styleName=e.value;break;case 1:t.text=e.value;break;case 72:t.halign=e.value;break;case 73:t.valign=e.value;break;default:w0(t,e,n);break}e=n.next()}return t};function e4(){}e4.ForEntityName="HATCH",e4.prototype.parseEntity=function(n,e){var t;t={type:e.value};let r=0,s=0,i=0;for(e=n.next();e!=="EOF"&&e.code!==0;){for(;r>0;){const a=V3(e,n);a?(t.boundaryLoops.push(a),r--,e=n.next()):r=0}for(;s>0;){const a=W3(e,n);a?(t.definitionLines.push(a),s--,e=n.next()):s=0}for(;i>0;){const a=X3(e,n);a?(t.seedPoints.push(a),i--,e=n.next()):i=0}if(e.code===0)break;switch(e.code){case 2:t.patternName=e.value;break;case 70:t.isSolid=e.value!=0;break;case 91:r=e.value,r>0&&(t.boundaryLoops=[]);break;case 75:t.hatchStyle=e.value;break;case 76:t.patternType=e.value;break;case 52:t.patternAngle=e.value*Math.PI/180;break;case 41:t.patternScale=e.value;break;case 78:s=e.value,s>0&&(t.definitionLines=[]);break;case 98:i=e.value,i>0&&(t.seedPoints=[]);break;default:w0(t,e,n);break}e=n.next()}return t};function V3(n,e){let t=null;const r=()=>{const l={vertices:[],isClosed:!1};let c=0;for(;;){if(c>0){for(let u=0;u<c&&n.code==10;u++){const f=z(e);n=e.next(),n.code==42&&(f.bulge=n.value,n=e.next()),l.vertices.push(f)}return l}switch(n.code){case 72:n.value;break;case 73:l.isClosed=n.value;break;case 93:c=n.value;break;default:return l}n=e.next()}},s=()=>{if(n.code!=72)return null;const l={type:n.value};n=e.next();const c=l.type==4;for(;;){switch(n.code){case 10:c?(l.controlPoints||(l.controlPoints=[]),l.controlPoints.push(z(e))):l.start=z(e);break;case 11:c?(l.fitPoints||(l.fitPoints=[]),l.fitPoints.push(z(e))):l.end=z(e);break;case 40:c?(l.knotValues||(l.knotValues=[]),l.knotValues.push(n.value)):l.radius=n.value;break;case 50:l.startAngle=n.value*Math.PI/180;break;case 51:l.endAngle=n.value*Math.PI/180;break;case 73:c?l.rational=n.value:l.isCcw=n.value;break;case 74:l.periodic=n.value;break;case 94:l.degreeOfSplineCurve=n.value;break;case 95:case 96:case 40:case 42:case 97:break;default:return l}n=e.next()}};let i=!1,a=0,o=0;for(;;){if(!t){if(n.code!=92)return null;t={type:n.value,isExternal:(n.value&1)!=0,isOutermost:(n.value&16)!=0},n=e.next()}for(t.type&2&&!i&&(t.polyline=r(),i=!0);a;){const l=s();l?(t.edges.push(l),a--):a=0}for(;o;)n.code==330?(t.sourceRefs.push(n.value),o--,n=e.next()):o=0;switch(n.code){case 93:a=n.value,a>0&&(t.edges=[]);break;case 97:o=n.value,o>0&&(t.sourceRefs=[]);break;default:return e.rewind(),t}n=e.next()}}function W3(n,e){if(n.code!=53)return null;const t={angle:n.value*Math.PI/180,base:{x:0,y:0},offset:{x:0,y:0}};n=e.next();let r=0;for(;;){switch(n.code){case 43:t.base.x=n.value;break;case 44:t.base.y=n.value;break;case 45:t.offset.x=n.value;break;case 46:t.offset.y=n.value;break;case 49:r>0&&(t.dashes.push(n.value),r--);break;case 79:r=n.value,n.value&&(t.dashes=[]);break;default:return e.rewind(),t}n=e.next()}}function X3(n,e){return n.code!=10?null:z(e)}const t4=new Map([[140,"DIMTXT"],[142,"DIMTSZ"],[144,"DIMLFAC"],[147,"DIMGAP"],[173,"DIMSAH"],[175,"DIMSOXD"],[176,"DIMCLRD"],[177,"DIMCLRE"],[178,"DIMCLRT"],[271,"DIMDEC"],[278,"DIMDSEP"],[281,"DIMSD1"],[282,"DIMSD2"],[3,"DIMPOST"],[40,"DIMSCALE"],[41,"DIMASZ"],[42,"DIMEXO"],[44,"DIMEXE"],[45,"DIMRND"],[46,"DIMDLE"],[5,"DIMBLK"],[6,"DIMBLK1"],[7,"DIMBLK2"],[75,"DIMSE1"],[76,"DIMSE2"],[78,"DIMZIN"]]);Y.setLevel("error");function Y3(n){n.registerEntityHandler(Re),n.registerEntityHandler(Ne),n.registerEntityHandler(Be),n.registerEntityHandler(K2),n.registerEntityHandler(Ue),n.registerEntityHandler(Ge),n.registerEntityHandler(ze),n.registerEntityHandler(He),n.registerEntityHandler(Ve),n.registerEntityHandler(We),n.registerEntityHandler(Xe),n.registerEntityHandler(Ye),n.registerEntityHandler(Ze),n.registerEntityHandler(Je),n.registerEntityHandler(Qe),n.registerEntityHandler(qe),n.registerEntityHandler(Ke),n.registerEntityHandler($e),n.registerEntityHandler(e4)}function j1(){this._entityHandlers={},Y3(this)}j1.prototype.parse=function(n,e){throw new Error("read() not implemented. Use readSync()")},j1.prototype.registerEntityHandler=function(n){var e=new n;this._entityHandlers[n.ForEntityName]=e},j1.prototype.parseSync=function(n){return typeof n=="string"?this._parse(n):(console.error("Cannot read DXF source of type `"+typeof n),null)},j1.prototype.parseStream=function(n,e){var t="",r=this;n.on("data",s),n.on("end",i),n.on("error",a);function s(o){t+=o}function i(){try{var o=r._parse(t)}catch(l){return e(l)}e(null,o)}function a(o){e(o)}},j1.prototype._parse=function(n){var e,t,r={},s=0,i=n.split(/\r\n|\r|\n/g);if(e=new J1(i),!e.hasNext())throw Error("Empty file");var a=this,o=function(){for(t=e.next();!e.isEOF();)if(t.code===0&&t.value==="SECTION"){if(t=e.next(),t.code!==2){console.error("Unexpected code %s after 0:SECTION",w5(t)),t=e.next();continue}t.value==="HEADER"?(Y.debug("> HEADER"),r.header=c(),Y.debug("<")):t.value==="BLOCKS"?(Y.debug("> BLOCKS"),r.blocks=u(),Y.debug("<")):t.value==="ENTITIES"?(Y.debug("> ENTITIES"),r.entities=O(!1),Y.debug("<")):t.value==="TABLES"?(Y.debug("> TABLES"),r.tables=p(),Y.debug("<")):t.value==="EOF"?Y.debug("EOF"):Y.warn("Skipping section '%s'",t.value)}else t=e.next()},l=function(T,C){return t.code===T&&t.value===C},c=function(){var T=null,C=null,_={};for(t=e.next();;){if(l(0,"ENDSEC")){T!=null&&(_[T]=C);break}else t.code===9?(T!=null&&(_[T]=C),T=t.value):t.code===10?C={x:t.value}:t.code===20?C.y=t.value:t.code===30?C.z=t.value:C=t.value;t=e.next()}return t=e.next(),_},u=function(){var T={},C;for(t=e.next();t.value!=="EOF"&&!l(0,"ENDSEC");)l(0,"BLOCK")?(Y.debug("block {"),C=f(),Y.debug("}"),M(C),C.name?T[C.name]=C:Y.error('block with handle "'+C.handle+'" is missing a name.')):(x1(t),t=e.next());return T},f=function(){var T={};for(t=e.next();t.value!=="EOF";){switch(t.code){case 1:T.xrefPath=t.value,t=e.next();break;case 2:T.name=t.value,t=e.next();break;case 3:T.name2=t.value,t=e.next();break;case 5:T.handle=t.value,t=e.next();break;case 8:T.layer=t.value,t=e.next();break;case 10:T.position=I(),t=e.next();break;case 67:T.inPaperSpace=!!(t.value&&t.value==1),t=e.next();break;case 70:t.value!=0&&(T.type=t.value),t=e.next();break;case 100:t=e.next();break;case 330:T.ownerHandle=t.value,t=e.next();break;case 0:if(t.value=="ENDBLK")break;T.entities=O(!0);break;default:x1(t),t=e.next()}if(l(0,"ENDBLK")){t=e.next();break}}return T},p=function(){var T={};for(t=e.next();t.value!=="EOF"&&!l(0,"ENDSEC");)if(l(0,"TABLE")){t=e.next();var C=w[t.value];C?(Y.debug(t.value+" Table {"),T[w[t.value].tableName]=v(),Y.debug("}")):Y.debug("Unhandled Table "+t.value)}else t=e.next();return t=e.next(),T};const d="ENDTAB";var v=function(){var T=w[t.value],C={},_=0,R;for(t=e.next();!l(0,d);)switch(t.code){case 5:C.handle=t.value,t=e.next();break;case 330:C.ownerHandle=t.value,t=e.next();break;case 100:t.value==="AcDbSymbolTable"||x1(t),t=e.next();break;case 70:_=t.value,t=e.next();break;case 0:t.value===T.dxfSymbolName?C[T.tableRecordsProperty]=T.parseTableRecords():(x1(t),t=e.next());break;default:x1(t),t=e.next()}var W=C[T.tableRecordsProperty];return W?(W.constructor===Array?R=W.length:typeof W=="object"&&(R=Object.keys(W).length),_!==R&&Y.warn(`Parsed ${R} ${T.dxfSymbolName}'s but expected ${_}`)):C[T.tableRecordsProperty]=[],t=e.next(),C},y=function(){var T=[],C={};for(Y.debug("ViewPort {"),t=e.next();!l(0,d);)switch(t.code){case 2:C.name=t.value,t=e.next();break;case 10:C.lowerLeftCorner=I(),t=e.next();break;case 11:C.upperRightCorner=I(),t=e.next();break;case 12:C.center=I(),t=e.next();break;case 13:C.snapBasePoint=I(),t=e.next();break;case 14:C.snapSpacing=I(),t=e.next();break;case 15:C.gridSpacing=I(),t=e.next();break;case 16:C.viewDirectionFromTarget=I(),t=e.next();break;case 17:C.viewTarget=I(),t=e.next();break;case 42:C.lensLength=t.value,t=e.next();break;case 43:C.frontClippingPlane=t.value,t=e.next();break;case 44:C.backClippingPlane=t.value,t=e.next();break;case 45:C.viewHeight=t.value,t=e.next();break;case 50:C.snapRotationAngle=t.value,t=e.next();break;case 51:C.viewTwistAngle=t.value,t=e.next();break;case 79:C.orthographicType=t.value,t=e.next();break;case 110:C.ucsOrigin=I(),t=e.next();break;case 111:C.ucsXAxis=I(),t=e.next();break;case 112:C.ucsYAxis=I(),t=e.next();break;case 110:C.ucsOrigin=I(),t=e.next();break;case 281:C.renderMode=t.value,t=e.next();break;case 281:C.defaultLightingType=t.value,t=e.next();break;case 292:C.defaultLightingOn=t.value,t=e.next();break;case 330:C.ownerHandle=t.value,t=e.next();break;case 63:case 421:case 431:C.ambientColor=t.value,t=e.next();break;case 0:t.value==="VPORT"&&(Y.debug("}"),T.push(C),Y.debug("ViewPort {"),C={},t=e.next());break;default:x1(t),t=e.next();break}return Y.debug("}"),T.push(C),T},m=function(){var T={},C,_={},R;for(Y.debug("LType {"),t=e.next();!l(0,"ENDTAB");)switch(t.code){case 2:_.name=t.value,C=t.value,t=e.next();break;case 3:_.description=t.value,t=e.next();break;case 73:R=t.value,R>0&&(_.pattern=[]),t=e.next();break;case 40:_.patternLength=t.value,t=e.next();break;case 49:_.pattern.push(t.value),t=e.next();break;case 0:Y.debug("}"),R>0&&R!==_.pattern.length&&Y.warn("lengths do not match on LTYPE pattern"),T[C]=_,_={},Y.debug("LType {"),t=e.next();break;default:t=e.next()}return Y.debug("}"),T[C]=_,T},g=function(){var T={},C,_={};for(Y.debug("Layer {"),t=e.next();!l(0,"ENDTAB");)switch(t.code){case 2:_.name=t.value,C=t.value,t=e.next();break;case 62:_.visible=t.value>=0,_.colorIndex=Math.abs(t.value),_.color=Z3(_.colorIndex),t=e.next();break;case 70:_.frozen=(t.value&1)!==0||(t.value&2)!==0,t=e.next();break;case 420:_.color=t.value,t=e.next();break;case 0:t.value==="LAYER"&&(Y.debug("}"),T[C]=_,Y.debug("Layer {"),_={},C=void 0,t=e.next());break;default:x1(t),t=e.next();break}return Y.debug("}"),T[C]=_,T},P=function(){var T={},C,_={};for(Y.debug("DimStyle {"),t=e.next();!l(0,"ENDTAB");)if(t4.has(t.code))_[t4.get(t.code)]=t.value,t=e.next();else switch(t.code){case 2:_.name=t.value,C=t.value,t=e.next();break;case 0:t.value==="DIMSTYLE"&&(Y.debug("}"),T[C]=_,Y.debug("DimStyle {"),_={},C=void 0,t=e.next());break;default:x1(t),t=e.next();break}return Y.debug("}"),T[C]=_,T},S=function(){var T={},C={},_;for(Y.debug("Style {"),t=e.next();!l(0,d);)switch(t.code){case 100:C.subClassMarker=t.value,t=e.next();break;case 2:C.styleName=t.value,_=t.value,t=e.next();break;case 70:C.standardFlag=t.value,t=e.next();break;case 40:C.fixedTextHeight=t.value,t=e.next();break;case 41:C.widthFactor=t.value,t=e.next();break;case 50:C.obliqueAngle=t.value,t=e.next();break;case 71:C.textGenerationFlag=t.value,t=e.next();break;case 42:C.lastHeight=t.value,t=e.next();break;case 3:C.font=t.value,t=e.next();break;case 4:C.bigFont=t.value,t=e.next();break;case 1071:C.extendedFont=t.value,t=e.next();break;case 0:t.value==="STYLE"&&(Y.debug("}"),T[_]=C,Y.debug("Style {"),C={},_=void 0,t=e.next());break;default:x1(t),t=e.next();break}return Y.debug("}"),T[_]=C,T},w={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:y},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:m},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:g},DIMSTYLE:{tableRecordsProperty:"dimStyles",tableName:"dimstyle",dxfSymbolName:"DIMSTYLE",parseTableRecords:P},STYLE:{tableRecordsProperty:"styles",tableName:"style",dxfSymbolName:"STYLE",parseTableRecords:S}},O=function(T){var C=[],_=T?"ENDBLK":"ENDSEC";for(T||(t=e.next());;)if(t.code===0){if(t.value===_)break;var R,W=a._entityHandlers[t.value];if(W!=null)Y.debug(t.value+" {"),R=W.parseEntity(e,t),t=e.lastReadGroup,Y.debug("}");else{Y.warn("Unhandled entity "+t.value),t=e.next();continue}M(R),C.push(R)}else t=e.next();return _=="ENDSEC"&&(t=e.next()),C},I=function(){var T={},C=t.code;if(T.x=t.value,C+=10,t=e.next(),t.code!=C)throw new Error("Expected code for point value to be "+C+" but got "+t.code+".");return T.y=t.value,C+=10,t=e.next(),t.code!=C?(e.rewind(),T):(T.z=t.value,T)},M=function(T){if(!T)throw new TypeError("entity cannot be undefined or null");T.handle||(T.handle=s++)};return o(),r};function x1(n){Y.debug("unhandled group "+w5(n))}function w5(n){return n.code+":"+n.value}function Z3(n){return x5[n]}class T5{constructor(e,t="utf-8"){this.url=e,this.encoding=t}async Fetch(e=null){const t=await fetch(this.url),r=+t.headers.get("Content-Length"),s=t.body.getReader();let i=0,a="",o=new TextDecoder(this.encoding);for(;;){const{done:c,value:u}=await s.read();if(c){a+=o.decode(new ArrayBuffer(0),{stream:!1});break}a+=o.decode(u,{stream:!0}),i+=u.length,e!==null&&e("fetch",i,r)}return e!==null&&e("parse",0,null),new j1().parseSync(a)}}class q{constructor(e,t,r,s,i,a=null,o=null){this.layerName=e??null,this.blockName=t??null,this.geometryType=r??null,this.color=s,this.lineType=i??null,this.dxfHandle=a,this.dxfType=o}Compare(e){let t=t1(this.layerName,e.layerName);return t!==0||(t=t1(this.blockName,e.blockName),t!==0)||(t=t1(this.geometryType,e.geometryType),t!==0)||(t=t1(this.color,e.color),t!==0)||(t=t1(this.lineType,e.lineType),t!==0)||(t=t1(this.dxfHandle,e.dxfHandle),t!==0)?t:t1(this.dxfType,e.dxfType)}IsIndexed(){return this.geometryType===q.GeometryType.INDEXED_LINES||this.geometryType===q.GeometryType.INDEXED_TRIANGLES}IsInstanced(){return this.geometryType===q.GeometryType.BLOCK_INSTANCE||this.geometryType===q.GeometryType.POINT_INSTANCE}}q.GeometryType=Object.freeze({POINTS:0,LINES:1,INDEXED_LINES:2,TRIANGLES:3,INDEXED_TRIANGLES:4,BLOCK_INSTANCE:5,POINT_INSTANCE:6});function t1(n,e){return n===null?e===null?0:-1:e===null?1:n<e?-1:n>e?1:0}class $2{constructor(e,t=16){this.type=e,this.capacity=t,this.size=0,this.buffer=new(n4(e))(t)}GetSize(){return this.size}Push(e){this._CheckGrow();const t=this.size;return this.buffer[t]=e,this.size++,t}Get(e){if(e>=this.size)throw new Error(`Index out of range: ${e}/${this.size}`);return this.buffer[e]}CopyTo(e,t,r=0,s=-1){s===-1&&(s=this.size-r);const i=new(n4(this.type))(this.buffer.buffer,r,s);e.set(i,t)}_CheckGrow(){if(this.size<this.capacity)return;this.capacity*=2;const e=new(n4(this.type))(this.capacity);e.set(this.buffer),this.buffer=e}}const V0={INT8:0,UINT8:1,UINT8_CLAMPED:2,INT16:3,UINT16:4,INT32:5,UINT32:6,FLOAT32:9,FLOAT64:10};function n4(n){switch(n){case V0.INT8:return Int8Array;case V0.UINT8:return Uint8Array;case V0.UINT8_CLAMPED:return Uint8ClampedArray;case V0.INT16:return Int16Array;case V0.UINT16:return Uint16Array;case V0.INT32:return Int32Array;case V0.UINT32:return Uint32Array;case V0.FLOAT32:return Float32Array;case V0.FLOAT64:return Float64Array;default:throw new Error("Unrecognized native type: "+n)}}const _0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];function J3(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_0[n&255]+_0[n>>8&255]+_0[n>>16&255]+_0[n>>24&255]+"-"+_0[e&255]+_0[e>>8&255]+"-"+_0[e>>16&15|64]+_0[e>>24&255]+"-"+_0[t&63|128]+_0[t>>8&255]+"-"+_0[t>>16&255]+_0[t>>24&255]+_0[r&255]+_0[r>>8&255]+_0[r>>16&255]+_0[r>>24&255]).toLowerCase()}function p1(n,e,t){return Math.max(e,Math.min(t,n))}function j3(n,e){return(n%e+e)%e}function r4(n,e,t){return(1-t)*n+t*e}const Q3="",n1="srgb",E5="srgb-linear",C5="linear",s4="srgb",ee=2e3,P5=2001;class d2{constructor(e,t,r,s,i,a,o,l,c){d2.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,i,a,o,l,c)}set(e,t,r,s,i,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,i=this.elements,a=r[0],o=r[3],l=r[6],c=r[1],u=r[4],f=r[7],p=r[2],d=r[5],v=r[8],y=s[0],m=s[3],g=s[6],P=s[1],S=s[4],w=s[7],O=s[2],I=s[5],M=s[8];return i[0]=a*y+o*P+l*O,i[3]=a*m+o*S+l*I,i[6]=a*g+o*w+l*M,i[1]=c*y+u*P+f*O,i[4]=c*m+u*S+f*I,i[7]=c*g+u*w+f*M,i[2]=p*y+d*P+v*O,i[5]=p*m+d*S+v*I,i[8]=p*g+d*w+v*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-r*i*u+r*o*l+s*i*c-s*a*l}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,p=o*l-u*i,d=c*i-a*l,v=t*f+r*p+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(s*c-u*r)*y,e[2]=(o*r-s*a)*y,e[3]=p*y,e[4]=(u*t-s*l)*y,e[5]=(s*i-o*t)*y,e[6]=d*y,e[7]=(r*l-c*t)*y,e[8]=(a*t-r*i)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,i,a,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(i4.makeScale(e,t)),this}rotate(e){return this.premultiply(i4.makeRotation(-e)),this}translate(e,t){return this.premultiply(i4.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const i4=new d2,q0={enabled:!0,workingColorSpace:E5,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===s4&&(n.r=Q1(n.r),n.g=Q1(n.g),n.b=Q1(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===s4&&(n.r=q1(n.r),n.g=q1(n.g),n.b=q1(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Q3?C5:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Q1(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function q1(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const A5=[.64,.33,.3,.6,.15,.06],k5=[.2126,.7152,.0722],L5=[.3127,.329],F5=new d2().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O5=new d2().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);q0.define({[E5]:{primaries:A5,whitePoint:L5,transfer:C5,toXYZ:F5,fromXYZ:O5,luminanceCoefficients:k5,workingColorSpaceConfig:{unpackColorSpace:n1},outputColorSpaceConfig:{drawingBufferColorSpace:n1}},[n1]:{primaries:A5,whitePoint:L5,transfer:s4,toXYZ:F5,fromXYZ:O5,luminanceCoefficients:k5,outputColorSpaceConfig:{drawingBufferColorSpace:n1}}});const D5={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},k1={h:0,s:0,l:0},te={h:0,s:0,l:0};function a4(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class o4{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=n1){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,q0.toWorkingColorSpace(this,t),this}setRGB(e,t,r,s=q0.workingColorSpace){return this.r=e,this.g=t,this.b=r,q0.toWorkingColorSpace(this,s),this}setHSL(e,t,r,s=q0.workingColorSpace){if(e=j3(e,1),t=p1(t,0,1),r=p1(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=a4(a,i,e+1/3),this.g=a4(a,i,e),this.b=a4(a,i,e-1/3)}return q0.toWorkingColorSpace(this,s),this}setStyle(e,t=n1){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=s[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=n1){const r=D5[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Q1(e.r),this.g=Q1(e.g),this.b=Q1(e.b),this}copyLinearToSRGB(e){return this.r=q1(e.r),this.g=q1(e.g),this.b=q1(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=n1){return q0.fromWorkingColorSpace(R0.copy(this),e),Math.round(p1(R0.r*255,0,255))*65536+Math.round(p1(R0.g*255,0,255))*256+Math.round(p1(R0.b*255,0,255))}getHexString(e=n1){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=q0.workingColorSpace){q0.fromWorkingColorSpace(R0.copy(this),t);const r=R0.r,s=R0.g,i=R0.b,a=Math.max(r,s,i),o=Math.min(r,s,i);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case r:l=(s-i)/f+(s<i?6:0);break;case s:l=(i-r)/f+2;break;case i:l=(r-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=q0.workingColorSpace){return q0.fromWorkingColorSpace(R0.copy(this),t),e.r=R0.r,e.g=R0.g,e.b=R0.b,e}getStyle(e=n1){q0.fromWorkingColorSpace(R0.copy(this),e);const t=R0.r,r=R0.g,s=R0.b;return e!==n1?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(k1),this.setHSL(k1.h+e,k1.s+t,k1.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(k1),e.getHSL(te);const r=r4(k1.h,te.h,t),s=r4(k1.s,te.s,t),i=r4(k1.l,te.l,t);return this.setHSL(r,s,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*s,this.g=i[1]*t+i[4]*r+i[7]*s,this.b=i[2]*t+i[5]*r+i[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const R0=new o4;o4.NAMES=D5;class y0{constructor(e=0,t=0){y0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(p1(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*r-a*s+e.x,this.y=i*s+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class q3{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,i,a,o){let l=r[s+0],c=r[s+1],u=r[s+2],f=r[s+3];const p=i[a+0],d=i[a+1],v=i[a+2],y=i[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=v,e[t+3]=y;return}if(f!==y||l!==p||c!==d||u!==v){let m=1-o;const g=l*p+c*d+u*v+f*y,P=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const O=Math.sqrt(S),I=Math.atan2(O,g*P);m=Math.sin(m*I)/O,o=Math.sin(o*I)/O}const w=o*P;if(l=l*m+p*w,c=c*m+d*w,u=u*m+v*w,f=f*m+y*w,m===1-o){const O=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=O,c*=O,u*=O,f*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,r,s,i,a){const o=r[s],l=r[s+1],c=r[s+2],u=r[s+3],f=i[a],p=i[a+1],d=i[a+2],v=i[a+3];return e[t]=o*v+u*f+l*d-c*p,e[t+1]=l*v+u*p+c*f-o*d,e[t+2]=c*v+u*d+o*p-l*f,e[t+3]=u*v-o*f-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(s/2),f=o(i/2),p=l(r/2),d=l(s/2),v=l(i/2);switch(a){case"XYZ":this._x=p*u*f+c*d*v,this._y=c*d*f-p*u*v,this._z=c*u*v+p*d*f,this._w=c*u*f-p*d*v;break;case"YXZ":this._x=p*u*f+c*d*v,this._y=c*d*f-p*u*v,this._z=c*u*v-p*d*f,this._w=c*u*f+p*d*v;break;case"ZXY":this._x=p*u*f-c*d*v,this._y=c*d*f+p*u*v,this._z=c*u*v+p*d*f,this._w=c*u*f-p*d*v;break;case"ZYX":this._x=p*u*f-c*d*v,this._y=c*d*f+p*u*v,this._z=c*u*v-p*d*f,this._w=c*u*f+p*d*v;break;case"YZX":this._x=p*u*f+c*d*v,this._y=c*d*f+p*u*v,this._z=c*u*v-p*d*f,this._w=c*u*f-p*d*v;break;case"XZY":this._x=p*u*f-c*d*v,this._y=c*d*f-p*u*v,this._z=c*u*v+p*d*f,this._w=c*u*f+p*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],i=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],p=r+o+f;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(a-s)*d}else if(r>o&&r>f){const d=2*Math.sqrt(1+r-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(i+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-r-f);this._w=(i-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-r-o);this._w=(a-s)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(p1(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,i=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+a*o+s*c-i*l,this._y=s*u+a*l+i*o-r*c,this._z=i*u+a*c+r*l-s*o,this._w=a*u-r*o-s*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,s=this._y,i=this._z,a=this._w;let o=a*e._w+r*e._x+s*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=s,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*r+t*this._x,this._y=d*s+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*f+this._w*p,this._x=r*f+this._x*p,this._y=s*f+this._y*p,this._z=i*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class u0{constructor(e=0,t=0,r=0){u0.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(M5.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(M5.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*s,this.y=i[1]*t+i[4]*r+i[7]*s,this.z=i[2]*t+i[5]*r+i[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,i=e.elements,a=1/(i[3]*t+i[7]*r+i[11]*s+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*s+i[12])*a,this.y=(i[1]*t+i[5]*r+i[9]*s+i[13])*a,this.z=(i[2]*t+i[6]*r+i[10]*s+i[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,i=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*r),u=2*(o*t-i*s),f=2*(i*r-a*t);return this.x=t+l*c+a*f-o*u,this.y=r+l*u+o*c-i*f,this.z=s+l*f+i*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*s,this.y=i[1]*t+i[5]*r+i[9]*s,this.z=i[2]*t+i[6]*r+i[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-i*o,this.y=i*a-r*l,this.z=r*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return l4.copy(this).projectOnVector(e),this.sub(l4)}reflect(e){return this.sub(l4.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(p1(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const l4=new u0,M5=new q3;class v2{constructor(e,t,r,s,i,a,o,l,c,u,f,p,d,v,y,m){v2.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,i,a,o,l,c,u,f,p,d,v,y,m)}set(e,t,r,s,i,a,o,l,c,u,f,p,d,v,y,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=s,g[1]=i,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=p,g[3]=d,g[7]=v,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new v2().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,s=1/K1.setFromMatrixColumn(e,0).length(),i=1/K1.setFromMatrixColumn(e,1).length(),a=1/K1.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,i=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(s),c=Math.sin(s),u=Math.cos(i),f=Math.sin(i);if(e.order==="XYZ"){const p=a*u,d=a*f,v=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+v*c,t[5]=p-y*c,t[9]=-o*l,t[2]=y-p*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,d=l*f,v=c*u,y=c*f;t[0]=p+y*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-v,t[6]=y+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,d=l*f,v=c*u,y=c*f;t[0]=p-y*o,t[4]=-a*f,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*u,t[9]=y-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,d=a*f,v=o*u,y=o*f;t[0]=l*u,t[4]=v*c-d,t[8]=p*c+y,t[1]=l*f,t[5]=y*c+p,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,d=a*c,v=o*l,y=o*c;t[0]=l*u,t[4]=y-p*f,t[8]=v*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+v,t[10]=p-y*f}else if(e.order==="XZY"){const p=a*l,d=a*c,v=o*l,y=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=p*f+y,t[5]=a*u,t[9]=d*f-v,t[2]=v*f-d,t[6]=o*u,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K3,e,$3)}lookAt(e,t,r){const s=this.elements;return W0.subVectors(e,t),W0.lengthSq()===0&&(W0.z=1),W0.normalize(),L1.crossVectors(r,W0),L1.lengthSq()===0&&(Math.abs(r.z)===1?W0.x+=1e-4:W0.z+=1e-4,W0.normalize(),L1.crossVectors(r,W0)),L1.normalize(),ne.crossVectors(W0,L1),s[0]=L1.x,s[4]=ne.x,s[8]=W0.x,s[1]=L1.y,s[5]=ne.y,s[9]=W0.y,s[2]=L1.z,s[6]=ne.z,s[10]=W0.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,i=this.elements,a=r[0],o=r[4],l=r[8],c=r[12],u=r[1],f=r[5],p=r[9],d=r[13],v=r[2],y=r[6],m=r[10],g=r[14],P=r[3],S=r[7],w=r[11],O=r[15],I=s[0],M=s[4],T=s[8],C=s[12],_=s[1],R=s[5],W=s[9],r0=s[13],Z=s[2],n0=s[6],l0=s[10],a0=s[14],s0=s[3],i0=s[7],o0=s[11],k=s[15];return i[0]=a*I+o*_+l*Z+c*s0,i[4]=a*M+o*R+l*n0+c*i0,i[8]=a*T+o*W+l*l0+c*o0,i[12]=a*C+o*r0+l*a0+c*k,i[1]=u*I+f*_+p*Z+d*s0,i[5]=u*M+f*R+p*n0+d*i0,i[9]=u*T+f*W+p*l0+d*o0,i[13]=u*C+f*r0+p*a0+d*k,i[2]=v*I+y*_+m*Z+g*s0,i[6]=v*M+y*R+m*n0+g*i0,i[10]=v*T+y*W+m*l0+g*o0,i[14]=v*C+y*r0+m*a0+g*k,i[3]=P*I+S*_+w*Z+O*s0,i[7]=P*M+S*R+w*n0+O*i0,i[11]=P*T+S*W+w*l0+O*o0,i[15]=P*C+S*r0+w*a0+O*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],i=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],p=e[10],d=e[14],v=e[3],y=e[7],m=e[11],g=e[15];return v*(+i*l*f-s*c*f-i*o*p+r*c*p+s*o*d-r*l*d)+y*(+t*l*d-t*c*p+i*a*p-s*a*d+s*c*u-i*l*u)+m*(+t*c*f-t*o*d-i*a*f+r*a*d+i*o*u-r*c*u)+g*(-s*o*u-t*l*f+t*o*p+s*a*f-r*a*p+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],p=e[10],d=e[11],v=e[12],y=e[13],m=e[14],g=e[15],P=f*m*c-y*p*c+y*l*d-o*m*d-f*l*g+o*p*g,S=v*p*c-u*m*c-v*l*d+a*m*d+u*l*g-a*p*g,w=u*y*c-v*f*c+v*o*d-a*y*d-u*o*g+a*f*g,O=v*f*l-u*y*l-v*o*p+a*y*p+u*o*m-a*f*m,I=t*P+r*S+s*w+i*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/I;return e[0]=P*M,e[1]=(y*p*i-f*m*i-y*s*d+r*m*d+f*s*g-r*p*g)*M,e[2]=(o*m*i-y*l*i+y*s*c-r*m*c-o*s*g+r*l*g)*M,e[3]=(f*l*i-o*p*i-f*s*c+r*p*c+o*s*d-r*l*d)*M,e[4]=S*M,e[5]=(u*m*i-v*p*i+v*s*d-t*m*d-u*s*g+t*p*g)*M,e[6]=(v*l*i-a*m*i-v*s*c+t*m*c+a*s*g-t*l*g)*M,e[7]=(a*p*i-u*l*i+u*s*c-t*p*c-a*s*d+t*l*d)*M,e[8]=w*M,e[9]=(v*f*i-u*y*i-v*r*d+t*y*d+u*r*g-t*f*g)*M,e[10]=(a*y*i-v*o*i+v*r*c-t*y*c-a*r*g+t*o*g)*M,e[11]=(u*o*i-a*f*i-u*r*c+t*f*c+a*r*d-t*o*d)*M,e[12]=O*M,e[13]=(u*y*s-v*f*s+v*r*p-t*y*p-u*r*m+t*f*m)*M,e[14]=(v*o*s-a*y*s-v*r*l+t*y*l+a*r*m-t*o*m)*M,e[15]=(a*f*s-u*o*s+u*r*l-t*f*l-a*r*p+t*o*p)*M,this}scale(e){const t=this.elements,r=e.x,s=e.y,i=e.z;return t[0]*=r,t[4]*=s,t[8]*=i,t[1]*=r,t[5]*=s,t[9]*=i,t[2]*=r,t[6]*=s,t[10]*=i,t[3]*=r,t[7]*=s,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),i=1-r,a=e.x,o=e.y,l=e.z,c=i*a,u=i*o;return this.set(c*a+r,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+r,u*l-s*a,0,c*l-s*o,u*l+s*a,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,i,a){return this.set(1,r,i,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,c=i+i,u=a+a,f=o+o,p=i*c,d=i*u,v=i*f,y=a*u,m=a*f,g=o*f,P=l*c,S=l*u,w=l*f,O=r.x,I=r.y,M=r.z;return s[0]=(1-(y+g))*O,s[1]=(d+w)*O,s[2]=(v-S)*O,s[3]=0,s[4]=(d-w)*I,s[5]=(1-(p+g))*I,s[6]=(m+P)*I,s[7]=0,s[8]=(v+S)*M,s[9]=(m-P)*M,s[10]=(1-(p+y))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;let i=K1.set(s[0],s[1],s[2]).length();const a=K1.set(s[4],s[5],s[6]).length(),o=K1.set(s[8],s[9],s[10]).length();this.determinant()<0&&(i=-i),e.x=s[12],e.y=s[13],e.z=s[14],r1.copy(this);const c=1/i,u=1/a,f=1/o;return r1.elements[0]*=c,r1.elements[1]*=c,r1.elements[2]*=c,r1.elements[4]*=u,r1.elements[5]*=u,r1.elements[6]*=u,r1.elements[8]*=f,r1.elements[9]*=f,r1.elements[10]*=f,t.setFromRotationMatrix(r1),r.x=i,r.y=a,r.z=o,this}makePerspective(e,t,r,s,i,a,o=ee){const l=this.elements,c=2*i/(t-e),u=2*i/(r-s),f=(t+e)/(t-e),p=(r+s)/(r-s);let d,v;if(o===ee)d=-(a+i)/(a-i),v=-2*a*i/(a-i);else if(o===P5)d=-a/(a-i),v=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,s,i,a,o=ee){const l=this.elements,c=1/(t-e),u=1/(r-s),f=1/(a-i),p=(t+e)*c,d=(r+s)*u;let v,y;if(o===ee)v=(a+i)*f,y=-2*f;else if(o===P5)v=i*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const K1=new u0,r1=new v2,K3=new u0(0,0,0),$3=new u0(1,1,1),L1=new u0,ne=new u0,W0=new u0;class d1{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,s=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),i+=r.distanceTo(s),t.push(i),s=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let s=0;const i=r.length;let a;t?a=t:a=e*r[i-1];let o=0,l=i-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=r[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,r[s]===a)return s/(i-1);const u=r[s],p=r[s+1]-u,d=(a-u)/p;return(s+d)/(i-1)}getTangent(e,t){let s=e-1e-4,i=e+1e-4;s<0&&(s=0),i>1&&(i=1);const a=this.getPoint(s),o=this.getPoint(i),l=t||(a.isVector2?new y0:new u0);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new u0,s=[],i=[],a=[],o=new u0,l=new v2;for(let d=0;d<=e;d++){const v=d/e;s[d]=this.getTangentAt(v,new u0)}i[0]=new u0,a[0]=new u0;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,r.set(1,0,0)),f<=c&&(c=f,r.set(0,1,0)),p<=c&&r.set(0,0,1),o.crossVectors(s[0],r).normalize(),i[0].crossVectors(s[0],o),a[0].crossVectors(s[0],i[0]);for(let d=1;d<=e;d++){if(i[d]=i[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(p1(s[d-1].dot(s[d]),-1,1));i[d].applyMatrix4(l.makeRotationAxis(o,v))}a[d].crossVectors(s[d],i[d])}if(t===!0){let d=Math.acos(p1(i[0].dot(i[e]),-1,1));d/=e,s[0].dot(o.crossVectors(i[0],i[e]))>0&&(d=-d);for(let v=1;v<=e;v++)i[v].applyMatrix4(l.makeRotationAxis(s[v],d*v)),a[v].crossVectors(s[v],i[v])}return{tangents:s,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class c4 extends d1{constructor(e=0,t=0,r=1,s=1,i=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=s,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new y0){const r=t,s=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=s;for(;i>s;)i-=s;i<Number.EPSILON&&(a?i=0:i=s),this.aClockwise===!0&&!a&&(i===s?i=-s:i=i-s);const o=this.aStartAngle+e*i;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*f+this.aX,c=p*f+d*u+this.aY}return r.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class e8 extends c4{constructor(e,t,r,s,i,a){super(e,t,r,r,s,i,a),this.isArcCurve=!0,this.type="ArcCurve"}}function h4(){let n=0,e=0,t=0,r=0;function s(i,a,o,l){n=i,e=o,t=-3*i+3*a-2*o-l,r=2*i-2*a+o+l}return{initCatmullRom:function(i,a,o,l,c){s(a,o,c*(o-i),c*(l-a))},initNonuniformCatmullRom:function(i,a,o,l,c,u,f){let p=(a-i)/c-(o-i)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;p*=u,d*=u,s(a,o,p,d)},calc:function(i){const a=i*i,o=a*i;return n+e*i+t*a+r*o}}}const re=new u0,u4=new h4,f4=new h4,p4=new h4;class t8 extends d1{constructor(e=[],t=!1,r="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=s}getPoint(e,t=new u0){const r=t,s=this.points,i=s.length,a=(i-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:l===0&&o===i-1&&(o=i-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%i]:(re.subVectors(s[0],s[1]).add(s[0]),c=re);const f=s[o%i],p=s[(o+1)%i];if(this.closed||o+2<i?u=s[(o+2)%i]:(re.subVectors(s[i-1],s[i-2]).add(s[i-1]),u=re),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);y<1e-4&&(y=1),v<1e-4&&(v=y),m<1e-4&&(m=y),u4.initNonuniformCatmullRom(c.x,f.x,p.x,u.x,v,y,m),f4.initNonuniformCatmullRom(c.y,f.y,p.y,u.y,v,y,m),p4.initNonuniformCatmullRom(c.z,f.z,p.z,u.z,v,y,m)}else this.curveType==="catmullrom"&&(u4.initCatmullRom(c.x,f.x,p.x,u.x,this.tension),f4.initCatmullRom(c.y,f.y,p.y,u.y,this.tension),p4.initCatmullRom(c.z,f.z,p.z,u.z,this.tension));return r.set(u4.calc(l),f4.calc(l),p4.calc(l)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const s=e.points[t];this.points.push(new u0().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function I5(n,e,t,r,s){const i=(r-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*r+i+a)*l+(-3*t+3*r-2*i-a)*o+i*n+t}function n8(n,e){const t=1-n;return t*t*e}function r8(n,e){return 2*(1-n)*n*e}function s8(n,e){return n*n*e}function y2(n,e,t,r){return n8(n,e)+r8(n,t)+s8(n,r)}function i8(n,e){const t=1-n;return t*t*t*e}function a8(n,e){const t=1-n;return 3*t*t*n*e}function o8(n,e){return 3*(1-n)*n*n*e}function l8(n,e){return n*n*n*e}function g2(n,e,t,r,s){return i8(n,e)+a8(n,t)+o8(n,r)+l8(n,s)}class _5 extends d1{constructor(e=new y0,t=new y0,r=new y0,s=new y0){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=s}getPoint(e,t=new y0){const r=t,s=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(g2(e,s.x,i.x,a.x,o.x),g2(e,s.y,i.y,a.y,o.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class c8 extends d1{constructor(e=new u0,t=new u0,r=new u0,s=new u0){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=s}getPoint(e,t=new u0){const r=t,s=this.v0,i=this.v1,a=this.v2,o=this.v3;return r.set(g2(e,s.x,i.x,a.x,o.x),g2(e,s.y,i.y,a.y,o.y),g2(e,s.z,i.z,a.z,o.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class R5 extends d1{constructor(e=new y0,t=new y0){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new y0){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new y0){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h8 extends d1{constructor(e=new u0,t=new u0){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new u0){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new u0){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N5 extends d1{constructor(e=new y0,t=new y0,r=new y0){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new y0){const r=t,s=this.v0,i=this.v1,a=this.v2;return r.set(y2(e,s.x,i.x,a.x),y2(e,s.y,i.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u8 extends d1{constructor(e=new u0,t=new u0,r=new u0){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new u0){const r=t,s=this.v0,i=this.v1,a=this.v2;return r.set(y2(e,s.x,i.x,a.x),y2(e,s.y,i.y,a.y),y2(e,s.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B5 extends d1{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new y0){const r=t,s=this.points,i=(s.length-1)*e,a=Math.floor(i),o=i-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return r.set(I5(o,l.x,c.x,u.x,f.x),I5(o,l.y,c.y,u.y,f.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const s=e.points[t];this.points.push(new y0().fromArray(s))}return this}}const U5=Object.freeze(Object.defineProperty({__proto__:null,ArcCurve:e8,CatmullRomCurve3:t8,CubicBezierCurve:_5,CubicBezierCurve3:c8,EllipseCurve:c4,LineCurve:R5,LineCurve3:h8,QuadraticBezierCurve:N5,QuadraticBezierCurve3:u8,SplineCurve:B5},Symbol.toStringTag,{value:"Module"}));class f8 extends d1{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new U5[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),s=this.getCurveLengths();let i=0;for(;i<s.length;){if(s[i]>=r){const a=s[i]-r,o=this.curves[i],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,s=this.curves.length;r<s;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let s=0,i=this.curves;s<i.length;s++){const a=i[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const s=e.curves[t];this.curves.push(new U5[s.type]().fromJSON(s))}return this}}let d4=class extends f8{constructor(e){super(),this.type="Path",this.currentPoint=new y0,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new R5(this.currentPoint.clone(),new y0(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,s){const i=new N5(this.currentPoint.clone(),new y0(e,t),new y0(r,s));return this.curves.push(i),this.currentPoint.set(r,s),this}bezierCurveTo(e,t,r,s,i,a){const o=new _5(this.currentPoint.clone(),new y0(e,t),new y0(r,s),new y0(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new B5(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,s,i,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,r,s,i,a),this}absarc(e,t,r,s,i,a){return this.absellipse(e,t,r,r,s,i,a),this}ellipse(e,t,r,s,i,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,r,s,i,a,o,l),this}absellipse(e,t,r,s,i,a,o,l){const c=new c4(e,t,r,s,i,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};class v4 extends d4{constructor(e){super(e),this.uuid=J3(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,s=this.holes.length;r<s;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const s=e.holes[t];this.holes.push(new d4().fromJSON(s))}return this}}const p8={triangulate:function(n,e,t=2){const r=e&&e.length,s=r?e[0]*t:n.length;let i=G5(n,0,s,t,!0);const a=[];if(!i||i.next===i.prev)return a;let o,l,c,u,f,p,d;if(r&&(i=m8(n,e,i,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let v=t;v<s;v+=t)f=n[v],p=n[v+1],f<o&&(o=f),p<l&&(l=p),f>c&&(c=f),p>u&&(u=p);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return m2(i,a,t,o,l,d,0),a}};function G5(n,e,t,r,s){let i,a;if(s===L8(n,e,t,r)>0)for(i=e;i<t;i+=r)a=V5(i,n[i],n[i+1],a);else for(i=t-r;i>=e;i-=r)a=V5(i,n[i],n[i+1],a);return a&&se(a,a.next)&&(b2(a),a=a.next),a}function U1(n,e){if(!n)return n;e||(e=n);let t=n,r;do if(r=!1,!t.steiner&&(se(t,t.next)||m0(t.prev,t,t.next)===0)){if(b2(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function m2(n,e,t,r,s,i,a){if(!n)return;!a&&i&&T8(n,r,s,i);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,i?v8(n,r,s,i):d8(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),b2(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=y8(U1(n),e,t),m2(n,e,t,r,s,i,2)):a===2&&g8(n,e,t,r,s,i):m2(U1(n),e,t,r,s,i,1);break}}}function d8(n){const e=n.prev,t=n,r=n.next;if(m0(e,t,r)>=0)return!1;const s=e.x,i=t.x,a=r.x,o=e.y,l=t.y,c=r.y,u=s<i?s<a?s:a:i<a?i:a,f=o<l?o<c?o:c:l<c?l:c,p=s>i?s>a?s:a:i>a?i:a,d=o>l?o>c?o:c:l>c?l:c;let v=r.next;for(;v!==e;){if(v.x>=u&&v.x<=p&&v.y>=f&&v.y<=d&&$1(s,o,i,l,a,c,v.x,v.y)&&m0(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function v8(n,e,t,r){const s=n.prev,i=n,a=n.next;if(m0(s,i,a)>=0)return!1;const o=s.x,l=i.x,c=a.x,u=s.y,f=i.y,p=a.y,d=o<l?o<c?o:c:l<c?l:c,v=u<f?u<p?u:p:f<p?f:p,y=o>l?o>c?o:c:l>c?l:c,m=u>f?u>p?u:p:f>p?f:p,g=y4(d,v,e,t,r),P=y4(y,m,e,t,r);let S=n.prevZ,w=n.nextZ;for(;S&&S.z>=g&&w&&w.z<=P;){if(S.x>=d&&S.x<=y&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&$1(o,u,l,f,c,p,S.x,S.y)&&m0(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=d&&w.x<=y&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&$1(o,u,l,f,c,p,w.x,w.y)&&m0(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=y&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&$1(o,u,l,f,c,p,S.x,S.y)&&m0(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=P;){if(w.x>=d&&w.x<=y&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&$1(o,u,l,f,c,p,w.x,w.y)&&m0(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function y8(n,e,t){let r=n;do{const s=r.prev,i=r.next.next;!se(s,i)&&z5(s,r,r.next,i)&&x2(s,i)&&x2(i,s)&&(e.push(s.i/t|0),e.push(r.i/t|0),e.push(i.i/t|0),b2(r),b2(r.next),r=n=i),r=r.next}while(r!==n);return U1(r)}function g8(n,e,t,r,s,i){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&P8(a,o)){let l=H5(a,o);a=U1(a,a.next),l=U1(l,l.next),m2(a,e,t,r,s,i,0),m2(l,e,t,r,s,i,0);return}o=o.next}a=a.next}while(a!==n)}function m8(n,e,t,r){const s=[];let i,a,o,l,c;for(i=0,a=e.length;i<a;i++)o=e[i]*r,l=i<a-1?e[i+1]*r:n.length,c=G5(n,o,l,r,!1),c===c.next&&(c.steiner=!0),s.push(C8(c));for(s.sort(x8),i=0;i<s.length;i++)t=b8(s[i],t);return t}function x8(n,e){return n.x-e.x}function b8(n,e){const t=S8(n,e);if(!t)return e;const r=H5(t,n);return U1(r,r.next),U1(t,t.next)}function S8(n,e){let t=e,r=-1/0,s;const i=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=i&&p>r&&(r=p,s=t.x<t.next.x?t:t.next,p===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,f;t=s;do i>=t.x&&t.x>=l&&i!==t.x&&$1(a<c?i:r,a,l,c,a<c?r:i,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(i-t.x),x2(t,n)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&w8(s,t)))&&(s=t,u=f)),t=t.next;while(t!==o);return s}function w8(n,e){return m0(n.prev,n,e.prev)<0&&m0(e.next,n,n.next)<0}function T8(n,e,t,r){let s=n;do s.z===0&&(s.z=y4(s.x,s.y,e,t,r)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,E8(s)}function E8(n){let e,t,r,s,i,a,o,l,c=1;do{for(t=n,n=null,i=null,a=0;t;){for(a++,r=t,o=0,e=0;e<c&&(o++,r=r.nextZ,!!r);e++);for(l=c;o>0||l>0&&r;)o!==0&&(l===0||!r||t.z<=r.z)?(s=t,t=t.nextZ,o--):(s=r,r=r.nextZ,l--),i?i.nextZ=s:n=s,s.prevZ=i,i=s;t=r}i.nextZ=null,c*=2}while(a>1);return n}function y4(n,e,t,r,s){return n=(n-t)*s|0,e=(e-r)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function C8(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $1(n,e,t,r,s,i,a,o){return(s-a)*(e-o)>=(n-a)*(i-o)&&(n-a)*(r-o)>=(t-a)*(e-o)&&(t-a)*(i-o)>=(s-a)*(r-o)}function P8(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!A8(n,e)&&(x2(n,e)&&x2(e,n)&&k8(n,e)&&(m0(n.prev,n,e.prev)||m0(n,e.prev,e))||se(n,e)&&m0(n.prev,n,n.next)>0&&m0(e.prev,e,e.next)>0)}function m0(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function se(n,e){return n.x===e.x&&n.y===e.y}function z5(n,e,t,r){const s=ae(m0(n,e,t)),i=ae(m0(n,e,r)),a=ae(m0(t,r,n)),o=ae(m0(t,r,e));return!!(s!==i&&a!==o||s===0&&ie(n,t,e)||i===0&&ie(n,r,e)||a===0&&ie(t,n,r)||o===0&&ie(t,e,r))}function ie(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ae(n){return n>0?1:n<0?-1:0}function A8(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&z5(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function x2(n,e){return m0(n.prev,n,n.next)<0?m0(n,e,n.next)>=0&&m0(n,n.prev,e)>=0:m0(n,e,n.prev)<0||m0(n,n.next,e)<0}function k8(n,e){let t=n,r=!1;const s=(n.x+e.x)/2,i=(n.y+e.y)/2;do t.y>i!=t.next.y>i&&t.next.y!==t.y&&s<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==n);return r}function H5(n,e){const t=new g4(n.i,n.x,n.y),r=new g4(e.i,e.x,e.y),s=n.next,i=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function V5(n,e,t,r){const s=new g4(n,e,t);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s}function b2(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function g4(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function L8(n,e,t,r){let s=0;for(let i=e,a=t-r;i<t;i+=r)s+=(n[a]-n[i])*(n[i+1]+n[a+1]),a=i;return s}class e2{static area(e){const t=e.length;let r=0;for(let s=t-1,i=0;i<t;s=i++)r+=e[s].x*e[i].y-e[i].x*e[s].y;return r*.5}static isClockWise(e){return e2.area(e)<0}static triangulateShape(e,t){const r=[],s=[],i=[];W5(e),X5(r,e);let a=e.length;t.forEach(W5);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,X5(r,t[l]);const o=p8.triangulate(r,s);for(let l=0;l<o.length;l+=3)i.push(o.slice(l,l+3));return i}}function W5(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function X5(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class F8{constructor(){this.type="ShapePath",this.color=new o4,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new d4,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,s){return this.currentPath.quadraticCurveTo(e,t,r,s),this}bezierCurveTo(e,t,r,s,i,a){return this.currentPath.bezierCurveTo(e,t,r,s,i,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const P=[];for(let S=0,w=g.length;S<w;S++){const O=g[S],I=new v4;I.curves=O.curves,P.push(I)}return P}function r(g,P){const S=P.length;let w=!1;for(let O=S-1,I=0;I<S;O=I++){let M=P[O],T=P[I],C=T.x-M.x,_=T.y-M.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(M=P[I],C=-C,T=P[O],_=-_),g.y<M.y||g.y>T.y)continue;if(g.y===M.y){if(g.x===M.x)return!0}else{const R=_*(g.x-M.x)-C*(g.y-M.y);if(R===0)return!0;if(R<0)continue;w=!w}}else{if(g.y!==M.y)continue;if(T.x<=g.x&&g.x<=M.x||M.x<=g.x&&g.x<=T.x)return!0}}return w}const s=e2.isClockWise,i=this.subPaths;if(i.length===0)return[];let a,o,l;const c=[];if(i.length===1)return o=i[0],l=new v4,l.curves=o.curves,c.push(l),c;let u=!s(i[0].getPoints());u=e?!u:u;const f=[],p=[];let d=[],v=0,y;p[v]=void 0,d[v]=[];for(let g=0,P=i.length;g<P;g++)o=i[g],y=o.getPoints(),a=s(y),a=e?!a:a,a?(!u&&p[v]&&v++,p[v]={s:new v4,p:y},p[v].s.curves=o.curves,u&&v++,d[v]=[]):d[v].push({h:o,p:y[0]});if(!p[0])return t(i);if(p.length>1){let g=!1,P=0;for(let S=0,w=p.length;S<w;S++)f[S]=[];for(let S=0,w=p.length;S<w;S++){const O=d[S];for(let I=0;I<O.length;I++){const M=O[I];let T=!0;for(let C=0;C<p.length;C++)r(M.p,p[C].p)&&(S!==C&&P++,T?(T=!1,f[C].push(M)):g=!0);T&&f[S].push(M)}}P>0&&g===!1&&(d=f)}let m;for(let g=0,P=p.length;g<P;g++){l=p[g].s,c.push(l),m=d[g];for(let S=0,w=m.length;S<w;S++)l.holes.push(m[S].h)}return c}}const k0=Object.freeze({TEXT:0,ESCAPE:1,SKIP_FORMAT:2,PARAGRAPH1:3,PARAGRAPH2:4,PARAGRAPH3:5}),F1=Object.freeze({TEXT:0,SCOPE:1,PARAGRAPH:2,NON_BREAKING_SPACE:3,PARAGRAPH_ALIGNMENT:4}),O8=new Set(["L","l","O","o","K","k","P","X","~"]),D8=new Set(["f","F","p","Q","H","W","S","A","C","T"]),M8=new Set(["\\","{","}"]);class b1{constructor(){this.entities=[]}Parse(e){const t=e.length;let r=0,s=k0.TEXT,i=[],a=this.entities,o=0;const l=this;function c(){s!==k0.TEXT||r===o||(a.push({type:F1.TEXT,content:e.slice(r,o)}),r=o)}function u(d){a.push({type:d})}function f(){const d={type:F1.SCOPE,content:[]};a.push(d),a=d.content,i.push(d)}function p(){i.length!==0&&(i.pop(),i.length===0?a=l.entities:a=i[i.length-1].content)}for(;o<t;o++){const d=e.charAt(o);switch(s){case k0.TEXT:if(d==="{"){c(),f(),r=o+1;continue}if(d==="}"){c(),p(),r=o+1;continue}if(d==="\\"){c(),s=k0.ESCAPE;continue}continue;case k0.ESCAPE:if(O8.has(d)){switch(d){case"P":u(F1.PARAGRAPH);break;case"~":u(F1.NON_BREAKING_SPACE);break}s=k0.TEXT,r=o+1;continue}if(D8.has(d)){switch(d){case"p":s=k0.PARAGRAPH1;continue}s=k0.SKIP_FORMAT;continue}M8.has(d)?r=o:r=o-1,s=k0.TEXT;continue;case k0.PARAGRAPH1:s=d==="x"?k0.PARAGRAPH2:k0.SKIP_FORMAT;continue;case k0.PARAGRAPH2:s=d==="q"?k0.PARAGRAPH3:k0.SKIP_FORMAT;continue;case k0.PARAGRAPH3:a.push({type:F1.PARAGRAPH_ALIGNMENT,alignment:d}),s=k0.SKIP_FORMAT;continue;case k0.SKIP_FORMAT:d===";"&&(r=o+1,s=k0.TEXT);continue;default:throw new Error("Unhandled state")}}c()}GetContent(){return this.entities}*GetText(){function*e(t){for(const r of t)r.type===F1.TEXT?yield r.content:r.type===F1.SCOPE&&(yield*e(r.content))}yield*e(this.GetContent())}}b1.EntityType=F1;const I8=/(?:%%([dpcouK%]))|(?:%%(\d{1,3}))|(?:\\U\+([0-9a-f]{4}))/gi;function K0(n){return n.replaceAll(I8,(e,t,r,s)=>{if(t!==void 0)switch(t.toLowerCase()){case"d":return"°";case"p":return"±";case"c":return"∅";case"o":return"";case"u":return"";case"k":return"";case"%":return"%"}else if(r!==void 0){const i=parseInt(r,10);return!isNaN(i)&&i>0&&i<=65535?String.fromCharCode(i):""}else if(s!==void 0){const i=parseInt(s,16);return isNaN(i)?e:String.fromCharCode(i)}return e})}class S2{constructor(e,t=null){this.fontFetchers=e,this.fonts=[],this.options=Object.create(S2.DefaultOptions),t&&Object.assign(this.options,t),this.shapes=new Map,this.stubShapeLoaded=!1,this.stubShape=null}async FetchFonts(e){if(!e||e.length===0)return!0;if(!this.stubShapeLoaded){this.stubShapeLoaded=!0;for(const s of Array.from(this.options.fallbackChar))if(await this.FetchFonts(s)){this.stubShape=this._CreateCharShape(s);break}}let t=!1;const r=[];for(const s of e){if(s.codePointAt(0)<32)continue;let i=!1;for(const a of this.fonts)if(a.HasChar(s)){i=!0;break}if(!i){if(!this.fontFetchers||this.fontFetchers.length===0){r.includes(s)||(r.push(s),console.warn(`[TextRenderer] No font fetchers available for character: ${s} (U+${s.codePointAt(0).toString(16).toUpperCase()})`)),t=!0;continue}for(;this.fontFetchers.length>0;)try{const a=this.fontFetchers.shift(),o=await this._FetchFont(a);if(this.fonts.push(o),o.HasChar(s)){i=!0;break}}catch(a){console.warn(`[TextRenderer] Failed to fetch font for character '${s}':`,a)}if(!i){if(!r.includes(s)){r.push(s);const a=s.codePointAt(0);console.warn(`[TextRenderer] Missing glyph for character: ${s} (U+${a.toString(16).toUpperCase()})`)}t=!0}}}return t&&r.length>0&&console.warn(`[TextRenderer] Missing ${r.length} character(s):`,r.map(s=>`'${s}' (U+${s.codePointAt(0).toString(16).toUpperCase()})`).join(", ")),!t}get canRender(){return this.fonts!==null&&this.fonts.length>0}GetLineWidth(e,t){const r=new oe(t);for(const s of e){const i=this._GetCharShape(s);i&&r.PushChar(s,i)}return r.GetCurrentPosition()}*Render({text:e,startPos:t,endPos:r,rotation:s=0,widthFactor:i=1,hAlign:a=0,vAlign:o=0,color:l,layer:c=null,fontSize:u}){const f=new oe(u);for(const p of e){const d=this._GetCharShape(p);d&&f.PushChar(p,d)}yield*f.Render(t,r,s,i,a,o,l,c)}RenderMerged({text:e,startPos:t,endPos:r,rotation:s=0,widthFactor:i=1,hAlign:a=0,vAlign:o=0,color:l,layer:c=null,fontSize:u}){if(!e||e.trim()==="")return null;const f=new oe(u);for(const p of e){const d=this._GetCharShape(p);d&&f.PushChar(p,d)}return f.RenderMerged(t,r,s,i,a,o,l,c)}*RenderMText({formattedText:e,position:t,fontSize:r,width:s=null,rotation:i=0,direction:a=null,attachment:o,lineSpacing:l=1,color:c,layer:u=null}){r||(r=1);const f=new T0(r,this._GetCharShape.bind(this));f.FeedText(e),yield*f.Render(t,s,i,a,o,l,c,u)}_GetCharShape(e){let t=this.shapes.get(e);return t||(t=this._CreateCharShape(e),this.shapes.set(e,t),t)}_CreateCharShape(e){for(const t of this.fonts){const r=t.GetCharPath(e);if(r)return new _8(t,r,this.options)}return this.stubShape}async _FetchFont(e){try{const t=await e();if(!t)throw new Error("Font fetcher returned null/undefined");return new R8(t)}catch(t){throw console.error("[TextRenderer] Error fetching font:",t),t}}}S2.DefaultOptions={curveSubdivision:2,fallbackChar:"�?"};class _8{constructor(e,t,r){if(this.font=e,this.advance=t.advance,this.bounds=t.bounds,t.path){const s=t.path.toShapes(!1);this.vertices=[],this.indices=[];for(const i of s){let u=function(f){for(const p of f)l.vertices.push(p)};const a=i.extractPoints(r.curveSubdivision);if(!e2.isClockWise(a.shape)){a.shape=a.shape.reverse();for(const f of a.holes)e2.isClockWise(f)&&(a.holes[h]=f.reverse())}const o=e2.triangulateShape(a.shape,a.holes),l=this,c=this.vertices.length;u(a.shape);for(const f of a.holes)u(f);for(const f of o)for(const p of f)this.indices.push(c+p)}}else this.vertices=null}GetVertices(e,t){return this.vertices.map(r=>r.clone().multiplyScalar(t).add(e))}}let R8=class{constructor(e){this.data=e,this.charMap=new Map;for(const t of Object.values(e.glyphs.glyphs))t.unicode!==void 0&&this.charMap.set(String.fromCodePoint(t.unicode),t);this.scale=100/((this.data.unitsPerEm||2048)*72)}HasChar(e){return this.charMap.has(e)}GetCharPath(e){const t=this.charMap.get(e);if(!t)return null;const r=this.scale,s=new F8;for(const i of t.path.commands)switch(i.type){case"M":s.moveTo(i.x*r,i.y*r);break;case"L":s.lineTo(i.x*r,i.y*r);break;case"Q":s.quadraticCurveTo(i.x1*r,i.y1*r,i.x*r,i.y*r);break;case"C":s.bezierCurveTo(i.x1*r,i.y1*r,i.x2*r,i.y2*r,i.x*r,i.y*r);break}return{advance:t.advanceWidth*r,path:s,bounds:{xMin:t.xMin*r,xMax:t.xMax*r,yMin:t.yMin*r,yMax:t.yMax*r}}}GetKerning(e,t){const r=this.data.charToGlyphIndex(e);if(r===0)return 0;const s=this.data.charToGlyphIndex(e);return s===0?0:this.data.getKerningValue(r,s)*this.scale}};const b0=Object.freeze({LEFT:0,CENTER:1,RIGHT:2,ALIGNED:3,MIDDLE:4,FIT:5}),z0=Object.freeze({BASELINE:0,BOTTOM:1,MIDDLE:2,TOP:3}),N0=Object.freeze({TOP_LEFT:1,TOP_CENTER:2,TOP_RIGHT:3,MIDDLE_LEFT:4,MIDDLE_CENTER:5,MIDDLE_RIGHT:6,BOTTOM_LEFT:7,BOTTOM_CENTER:8,BOTTOM_RIGHT:9});class T0{constructor(e,t){this.fontSize=e,this.charShapeProvider=t,this.curParagraph=new T0.Paragraph(this),this.paragraphs=[this.curParagraph],this.spaceShape=t(" ")}FeedText(e){function*t(s){for(const i of s)i.type===b1.EntityType.SCOPE?yield*t(i.content):yield i}let r=null;for(const s of t(e))switch(s.type){case b1.EntityType.TEXT:for(const a of s.content)a===" "?this.curParagraph.FeedSpace():this.curParagraph.FeedChar(a);break;case b1.EntityType.PARAGRAPH:this.curParagraph=new T0.Paragraph(this),this.curParagraph.SetAlignment(r),this.paragraphs.push(this.curParagraph);break;case b1.EntityType.NON_BREAKING_SPACE:this.curParagraph.FeedChar(" ");break;case b1.EntityType.PARAGRAPH_ALIGNMENT:let i=null;switch(s.alignment){case"l":i=T0.Paragraph.Alignment.LEFT;break;case"c":i=T0.Paragraph.Alignment.CENTER;break;case"r":i=T0.Paragraph.Alignment.RIGHT;break;case"d":i=T0.Paragraph.Alignment.JUSTIFY;break;case"j":i=null;break}this.curParagraph.SetAlignment(i),r=i;break}}*Render(e,t,r,s,i,a,o,l){for(const y of this.paragraphs)y.BuildLines(t);if(t===null||t===0){t=0;for(const y of this.paragraphs){const m=y.GetMaxLineWidth();m>t&&(t=m)}}let c=T0.Paragraph.Alignment.LEFT;switch(i){case N0.TOP_CENTER:case N0.MIDDLE_CENTER:case N0.BOTTOM_CENTER:c=T0.Paragraph.Alignment.CENTER;break;case N0.TOP_RIGHT:case N0.MIDDLE_RIGHT:case N0.BOTTOM_RIGHT:c=T0.Paragraph.Alignment.RIGHT;break}for(const y of this.paragraphs)y.ApplyAlignment(t,c);s!==null&&(r=Math.atan2(s.y,s.x)*180/Math.PI);const u=a*5*this.fontSize/3;let f=0;for(const y of this.paragraphs)y.lines===null?f++:f+=y.lines.length;f*=u;let p=new A.Vector2;switch(i){case N0.TOP_LEFT:break;case N0.TOP_CENTER:p.x=t/2;break;case N0.TOP_RIGHT:p.x=t;break;case N0.MIDDLE_LEFT:p.y=-f/2;break;case N0.MIDDLE_CENTER:p.x=t/2,p.y=-f/2;break;case N0.MIDDLE_RIGHT:p.x=t,p.y=-f/2;break;case N0.BOTTOM_LEFT:p.y=-f;break;case N0.BOTTOM_CENTER:p.x=t/2,p.y=-f;break;case N0.BOTTOM_RIGHT:p.x=t,p.y=-f;break;default:throw new Error("Unhandled alignment")}const d=new A.Matrix3().translate(-p.x,-p.y).rotate(-r*Math.PI/180).translate(e.x,e.y);let v=-this.fontSize;for(const y of this.paragraphs){if(y.lines===null){v-=u;continue}for(const m of y.lines){for(let g=m.startChunkIdx;g<m.startChunkIdx+m.numChunks;g++){const P=y.chunks[g];let S=P.position;(g===0||g!==m.startChunkIdx)&&(S+=P.GetSpacingWidth());const w=new A.Vector2(S,v);w.applyMatrix3(d),P.block&&(yield*P.block.Render(w,null,r,null,b0.LEFT,z0.BASELINE,o,l))}v-=u}}}}T0.Paragraph=class{constructor(n){this.textBox=n,this.chunks=[],this.curChunk=null,this.alignment=null,this.lines=null}FeedChar(n){const e=this.textBox.charShapeProvider(n);e!==null&&(this.curChunk===null&&this._AddChunk(),this.curChunk.PushChar(n,e))}FeedSpace(){(this.curChunk===null||this.curChunk.lastChar!==null)&&this._AddChunk(),this.curChunk.PushSpace()}SetAlignment(n){this.alignment=n}BuildLines(n){if(this.curChunk===null)return;this.lines=[];let e=0,t=0,r=0;const s=()=>{this.lines.push(new T0.Paragraph.Line(this,e,t-e,r)),e=t,r=0};for(;t<this.chunks.length;t++){const i=this.chunks[t],a=i.GetWidth(e===0||t!==e);n!==null&&n!==0&&r!==0&&r+a>n&&s(),i.position=r,r+=a}e!==t&&r!==0&&s()}GetMaxLineWidth(){if(this.lines===null)return 0;let n=0;for(const e of this.lines)e.width>n&&(n=e.width);return n}ApplyAlignment(n,e){if(this.lines)for(const t of this.lines)t.ApplyAlignment(n,e)}_AddChunk(){this.curChunk=new T0.Paragraph.Chunk(this,this.textBox.fontSize,this.curChunk),this.chunks.push(this.curChunk)}},T0.Paragraph.Alignment=Object.freeze({LEFT:0,CENTER:1,RIGHT:2,JUSTIFY:3}),T0.Paragraph.Chunk=class{constructor(n,e,t){this.paragraph=n,this.fontSize=e,this.prevChunk=t,this.lastChar=null,this.lastShape=null,this.leadingSpaces=0,this.spaceStartKerning=null,this.spaceEndKerning=null,this.block=null,this.position=null}PushSpace(){if(this.block)throw new Error("Illegal operation");this.leadingSpaces++}PushChar(n,e){this.spaceStartKerning===null&&(this.leadingSpaces===0?(this.spaceStartKerning=0,this.spaceEndKerning=0):(this.prevChunk&&this.prevChunk.lastShape&&this.prevChunk.fontSize===this.fontSize&&this.prevChunk.lastShape.font===this.paragraph.textBox.spaceShape.font?this.spaceStartKerning=this.prevChunk.lastShape.font.GetKerning(this.prevChunk.lastChar," "):this.spaceStartKerning=0,e.font===this.paragraph.textBox.spaceShape.font?this.spaceEndKerning=e.font.GetKerning(" ",n):this.spaceEndKerning=0)),this.block===null&&(this.block=new oe(this.fontSize)),this.block.PushChar(n,e),this.lastChar=n,this.lastShape=e}GetSpacingWidth(){return(this.leadingSpaces*this.paragraph.textBox.spaceShape.advance+this.spaceStartKerning+this.spaceEndKerning)*this.fontSize}GetWidth(n){if(this.block===null)return 0;let e=this.block.GetCurrentPosition();return n&&(e+=this.GetSpacingWidth()),e}},T0.Paragraph.Line=class{constructor(n,e,t,r){this.paragraph=n,this.startChunkIdx=e,this.numChunks=t,this.width=r}ApplyAlignment(n,e){switch(this.paragraph.alignment??e){case T0.Paragraph.Alignment.LEFT:break;case T0.Paragraph.Alignment.CENTER:{const r=(n-this.width)/2;this.ForEachChunk(s=>s.position+=r);break}case T0.Paragraph.Alignment.RIGHT:{const r=n-this.width;this.ForEachChunk(s=>s.position+=r);break}case T0.Paragraph.Alignment.JUSTIFY:{const r=n-this.width;if(r<=0||this.numChunks===1)break;const s=r/(this.numChunks-1);let i=0;this.ForEachChunk(a=>{a.position+=i,i+=s});break}default:throw new Error("Unhandled alignment: "+this.paragraph.alignment)}}ForEachChunk(n){for(let e=0;e<this.numChunks;e++)n(this.paragraph.chunks[this.startChunkIdx+e])}};class oe{constructor(e){this.fontSize=e,this.glyphs=[],this.bounds=null,this.curX=0,this.prevChar=null,this.prevFont=null}PushChar(e,t){let r;this.prevChar!==null&&this.prevFont===t.font?r=this.prevFont.GetKerning(this.prevChar,e):r=0;const s=this.curX+r*this.fontSize;let i;if(t.vertices&&t.vertices.length>0){i=t.GetVertices({x:s,y:0},this.fontSize);const a=s+t.bounds.xMin*this.fontSize,o=s+t.bounds.xMax*this.fontSize,l=t.bounds.yMin*this.fontSize,c=t.bounds.yMax*this.fontSize;this.bounds===null?this.bounds={xMin:a,xMax:o,yMin:l,yMax:c}:(a<this.bounds.xMin&&(this.bounds.xMin=a),l<this.bounds.yMin&&(this.bounds.yMin=l),o>this.bounds.xMax&&(this.bounds.xMax=o),c>this.bounds.yMax&&(this.bounds.yMax=c))}else i=null;this.curX=s+t.advance*this.fontSize,this.glyphs.push({shape:t,vertices:i}),this.prevChar=e,this.prevFont=t.font}GetCurrentPosition(){return this.curX}*Render(e,t,r,s,i,a,o,l){if(this.bounds===null)return;t=t??e,r?r*=-Math.PI/180:r=0,s=s??1,i=i??b0.LEFT,a=a??z0.BASELINE;let c=new A.Vector2,u=new A.Vector2(s,1),f=i===b0.LEFT&&a===z0.BASELINE||i===b0.FIT||i===b0.ALIGNED?new A.Vector2(e.x,e.y):new A.Vector2(t.x,t.y);const p=()=>{const y=t.x-e.x;return y<Number.MIN_VALUE*2?s:y/(this.bounds.xMax-this.bounds.xMin)},d=()=>-Math.atan2(t.y-e.y,t.x-e.x);switch(i){case b0.LEFT:c.x=this.bounds.xMin;break;case b0.CENTER:c.x=(this.bounds.xMax-this.bounds.xMin)/2;break;case b0.RIGHT:c.x=this.bounds.xMax;break;case b0.MIDDLE:c.x=(this.bounds.xMax-this.bounds.xMin)/2,c.y=(this.bounds.yMax-this.bounds.yMin)/2;break;case b0.ALIGNED:{const y=p();u.x=y,u.y=y,r=d();break}case b0.FIT:u.x=p(),r=d();break;default:console.warn("Unrecognized hAlign value: "+i)}switch(a){case z0.BASELINE:break;case z0.BOTTOM:c.y=this.bounds.yMin;break;case z0.MIDDLE:c.y=(this.bounds.yMax-this.bounds.yMin)/2;break;case z0.TOP:c.y=this.bounds.yMax;break;default:console.warn("Unrecognized vAlign value: "+a)}const v=new A.Matrix3().translate(-c.x,-c.y).scale(u.x,u.y).rotate(r).translate(f.x,f.y);for(const y of this.glyphs)if(y.vertices){for(const m of y.vertices)m.applyMatrix3(v);yield new G({type:G.Type.TRIANGLES,vertices:y.vertices,indices:y.shape.indices,layer:l,color:o})}}RenderMerged(e,t,r,s,i,a,o,l){if(this.bounds===null)return null;t=t??e,r?r*=-Math.PI/180:r=0,s=s??1,i=i??b0.LEFT,a=a??z0.BASELINE;let c=new A.Vector2,u=new A.Vector2(s,1),f=i===b0.LEFT&&a===z0.BASELINE||i===b0.FIT||i===b0.ALIGNED?new A.Vector2(e.x,e.y):new A.Vector2(t.x,t.y);const p=()=>{const P=t.x-e.x;return P<Number.MIN_VALUE*2?s:P/(this.bounds.xMax-this.bounds.xMin)},d=()=>-Math.atan2(t.y-e.y,t.x-e.x);switch(i){case b0.LEFT:c.x=this.bounds.xMin;break;case b0.CENTER:c.x=(this.bounds.xMax-this.bounds.xMin)/2;break;case b0.RIGHT:c.x=this.bounds.xMax;break;case b0.MIDDLE:c.x=(this.bounds.xMax-this.bounds.xMin)/2,c.y=(this.bounds.yMax-this.bounds.yMin)/2;break;case b0.ALIGNED:{const P=p();u.x=P,u.y=P,r=d();break}case b0.FIT:u.x=p(),r=d();break;default:console.warn("Unrecognized hAlign value: "+i)}switch(a){case z0.BASELINE:break;case z0.BOTTOM:c.y=this.bounds.yMin;break;case z0.MIDDLE:c.y=(this.bounds.yMax-this.bounds.yMin)/2;break;case z0.TOP:c.y=this.bounds.yMax;break;default:console.warn("Unrecognized vAlign value: "+a)}const v=new A.Matrix3().translate(-c.x,-c.y).scale(u.x,u.y).rotate(r).translate(f.x,f.y),y=[],m=[];let g=0;for(const P of this.glyphs)if(P.vertices&&P.vertices.length>0){for(const S of P.vertices)S.applyMatrix3(v),y.push(S);for(const S of P.shape.indices)m.push(g+S);g+=P.vertices.length}return y.length===0?null:new G({type:G.Type.TRIANGLES,vertices:y,indices:m,layer:l,color:o})}}function s1(){}s1.prototype.clear=function(){this._root=null,this.size=0},s1.prototype.find=function(n){for(var e=this._root;e!==null;){var t=this._comparator(n,e.data);if(t===0)return e.data;e=e.get_child(t>0)}return null},s1.prototype.findIter=function(n){for(var e=this._root,t=this.iterator();e!==null;){var r=this._comparator(n,e.data);if(r===0)return t._cursor=e,t;t._ancestors.push(e),e=e.get_child(r>0)}return null},s1.prototype.lowerBound=function(n){for(var e=this._root,t=this.iterator(),r=this._comparator;e!==null;){var s=r(n,e.data);if(s===0)return t._cursor=e,t;t._ancestors.push(e),e=e.get_child(s>0)}for(var i=t._ancestors.length-1;i>=0;--i)if(e=t._ancestors[i],r(n,e.data)<0)return t._cursor=e,t._ancestors.length=i,t;return t._ancestors.length=0,t},s1.prototype.upperBound=function(n){for(var e=this.lowerBound(n),t=this._comparator;e.data()!==null&&t(e.data(),n)===0;)e.next();return e},s1.prototype.min=function(){var n=this._root;if(n===null)return null;for(;n.left!==null;)n=n.left;return n.data},s1.prototype.max=function(){var n=this._root;if(n===null)return null;for(;n.right!==null;)n=n.right;return n.data},s1.prototype.iterator=function(){return new t2(this)},s1.prototype.each=function(n){for(var e=this.iterator(),t;(t=e.next())!==null;)n(t)},s1.prototype.reach=function(n){for(var e=this.iterator(),t;(t=e.prev())!==null;)n(t)};function t2(n){this._tree=n,this._ancestors=[],this._cursor=null}t2.prototype.data=function(){return this._cursor!==null?this._cursor.data:null},t2.prototype.next=function(){if(this._cursor===null){var n=this._tree._root;n!==null&&this._minNode(n)}else if(this._cursor.right===null){var e;do if(e=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.right===e)}else this._ancestors.push(this._cursor),this._minNode(this._cursor.right);return this._cursor!==null?this._cursor.data:null},t2.prototype.prev=function(){if(this._cursor===null){var n=this._tree._root;n!==null&&this._maxNode(n)}else if(this._cursor.left===null){var e;do if(e=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.left===e)}else this._ancestors.push(this._cursor),this._maxNode(this._cursor.left);return this._cursor!==null?this._cursor.data:null},t2.prototype._minNode=function(n){for(;n.left!==null;)this._ancestors.push(n),n=n.left;this._cursor=n},t2.prototype._maxNode=function(n){for(;n.right!==null;)this._ancestors.push(n),n=n.right;this._cursor=n};function n2(n){this.data=n,this.left=null,this.right=null,this.red=!0}n2.prototype.get_child=function(n){return n?this.right:this.left},n2.prototype.set_child=function(n,e){n?this.right=e:this.left=e};function w2(n){this._root=null,this._comparator=n,this.size=0}w2.prototype=new s1,w2.prototype.insert=function(n){var e=!1;if(this._root===null)this._root=new n2(n),e=!0,this.size++;else{var t=new n2(void 0),r=0,s=0,i=null,a=t,o=null,l=this._root;for(a.right=this._root;;){if(l===null?(l=new n2(n),o.set_child(r,l),e=!0,this.size++):$0(l.left)&&$0(l.right)&&(l.red=!0,l.left.red=!1,l.right.red=!1),$0(l)&&$0(o)){var c=a.right===i;l===o.get_child(s)?a.set_child(c,T2(i,!s)):a.set_child(c,Y5(i,!s))}var u=this._comparator(l.data,n);if(u===0)break;s=r,r=u<0,i!==null&&(a=i),i=o,o=l,l=l.get_child(r)}this._root=t.right}return this._root.red=!1,e},w2.prototype.remove=function(n){if(this._root===null)return!1;var e=new n2(void 0),t=e;t.right=this._root;for(var r=null,s=null,i=null,a=1;t.get_child(a)!==null;){var o=a;s=r,r=t,t=t.get_child(a);var l=this._comparator(n,t.data);if(a=l>0,l===0&&(i=t),!$0(t)&&!$0(t.get_child(a))){if($0(t.get_child(!a))){var c=T2(t,a);r.set_child(o,c),r=c}else if(!$0(t.get_child(!a))){var u=r.get_child(!o);if(u!==null)if(!$0(u.get_child(!o))&&!$0(u.get_child(o)))r.red=!1,u.red=!0,t.red=!0;else{var f=s.right===r;$0(u.get_child(o))?s.set_child(f,Y5(r,o)):$0(u.get_child(!o))&&s.set_child(f,T2(r,o));var p=s.get_child(f);p.red=!0,t.red=!0,p.left.red=!1,p.right.red=!1}}}}return i!==null&&(i.data=t.data,r.set_child(r.right===t,t.get_child(t.left===null)),this.size--),this._root=e.right,this._root!==null&&(this._root.red=!1),i!==null};function $0(n){return n!==null&&n.red}function T2(n,e){var t=n.get_child(!e);return n.set_child(!e,t.get_child(e)),t.set_child(e,n),n.red=!0,t.red=!1,t}function Y5(n,e){return n.set_child(!e,T2(n.get_child(!e),!e)),T2(n,e)}class Z5{constructor(){this.lines=[],this.triangles=[],this.texts=[]}AddLine(e,t,r=null){this.lines.push({start:e,end:t,color:r})}AddTriangles(e,t,r=null){this.triangles.push({vertices:e,indices:t,color:r})}AddText(e,t,r,s,i){this.texts.push({text:e,size:t,angle:r,color:s,position:i})}}const J5={vertices:[new A.Vector2(0,0),new A.Vector2(1,-.25),new A.Vector2(1,.25)],indices:[0,1,2]};class N8{constructor(e,t,r){this.params=e,this.styleResolver=t,this.textWidthCalculator=r,this.isValid=!0,this._CalculateGeometry()}IsValid(){return this.isValid}GetTexts(){return[this._GetText()]}GenerateLayout(){const e=new Z5,t=this.d1.distanceTo(this.d2),r=this.styleResolver("DIMCLRD");let s=this.styleResolver("DIMSCALE")??1;s==0&&(s=1);const i=this._GetText(),a=(this.styleResolver("DIMTXT")??1)*s;this.textWidthCalculator(i,a);const o=this.styleResolver("DIMCLRT"),l=(this.styleResolver("DIMASZ")??1)*s,c=(this.styleResolver("DIMTSZ")??0)*s;let u=this.params.textAnchor,f=!1;const p=this.d1.clone(),d=(this.styleResolver("DIMDLE")??0)*s;d!=0&&p.add(this.vDim.clone().multiplyScalar(-d));const v=this.d2.clone();d!=0&&v.add(this.vDim.clone().multiplyScalar(d)),e.AddLine(p,v,r),t<l*2&&(f=!0),u||(u=this.vDim.clone().multiplyScalar(this.d1.distanceTo(this.d2)/2).add(this.d1).add(this.vDimNorm.clone().multiplyScalar(a*.75)));const y=this.vDimNorm.angle()*180/Math.PI-90+(this.params.textRotation??0);e.AddText(i,a,y,o,u);const m=this.styleResolver("DIMCLRE"),g=(this.styleResolver("DIMEXO")??0)*s,P=(this.styleResolver("DIMEXE")??0)*s,S=(w,O)=>{const I=O.clone().sub(w);if(I.length()==0)return;I.normalize();const T=w.clone();g!=0&&T.add(I.clone().multiplyScalar(g));const C=O.clone();P!=0&&C.add(I.clone().multiplyScalar(P)),e.AddLine(T,C,m)};(this.styleResolver("DIMSE1")??0)||S(this.params.p1,this.d1),(this.styleResolver("DIMSE2")??0)||S(this.params.p2,this.d2);for(let w=0;w<2;w++){const O=w==0?this.d1:this.d2;let I=w==1;f&&(I=!I);let M=new A.Matrix3().identity();c>0?M.scale(c,c):(M.scale(l,l),I&&M.scale(-1,1));const T=-this.vDim.angle();M.rotate(T),M.translate(O.x,O.y),c>0?this._CreateTick(e,M,r):this._CreateArrowShape(e,M,r)}return e}_CreateArrowShape(e,t,r){const s=[];for(const i of J5.vertices)s.push(i.clone().applyMatrix3(t));e.AddTriangles(s,J5.indices,r)}_CreateTick(e,t,r){e.AddLine(new A.Vector2(.5,.5).applyMatrix3(t),new A.Vector2(-.5,-.5).applyMatrix3(t),r)}_CalculateGeometry(){if(this.vBase=this.params.p2.clone().sub(this.params.p1).normalize(),this.params.isAligned)this.vDim=this.vBase;else{const e=(this.params.angle??0)*Math.PI/180;this.vDim=new A.Vector2(Math.cos(e),Math.sin(e))}this.d1=this.vDim.clone().multiplyScalar(this.params.p1.clone().sub(this.params.anchor).dot(this.vDim)).add(this.params.anchor),this.d2=this.vDim.clone().multiplyScalar(this.params.p2.clone().sub(this.params.anchor).dot(this.vDim)).add(this.params.anchor),this.d1.distanceTo(this.d2)==0&&(this.isValid=!1),this.vDim.copy(this.d2).sub(this.d1).normalize(),this.vDim.y<-this.vDim.x?this.vDimNorm=new A.Vector2(this.vDim.y,-this.vDim.x):this.vDimNorm=new A.Vector2(-this.vDim.y,this.vDim.x)}_GetText(){if(this.params.text==" ")return"";if((this.params.text??"")!=""&&this.params.text.indexOf("<>")==-1)return K0(this.params.text);let e=this.d2.distanceTo(this.d1);e*=this.styleResolver("DIMLFAC")??1;const t=this.styleResolver("DIMRND")??0;if(t>0){const c=Math.round(e/t);e=t*c}const r=this.styleResolver("DIMZIN")??0,s=(r&4)!=0,i=(r&8)!=0;let a=e.toFixed(this.styleResolver("DIMDEC")??2);i&&(a=a.replace(/.0+$/,"")),s&&(a=a.replace(/^0+/,"")),a.startsWith(".")?a="0"+a:a==""&&(a="0"),a.endsWith(".")&&(a=a.substring(0,a.length-1));let o=this.styleResolver("DIMDSEP")??".";isNaN(o)||(o=String.fromCharCode(o)),o!="."&&(a=a.replace(".",o));const l=this.styleResolver("DIMPOST")??"";return l!=""&&(l.indexOf("<>")!=-1?a=l.replaceAll("<>",a):a+=l),(this.params.text??"")!=""&&(a=this.params.text.replaceAll("<>",a)),K0(a)}}const j5={vertices:[new A.Vector2(0,0),new A.Vector2(1,-.25),new A.Vector2(1,.25)],indices:[0,1,2]};class B8{constructor(e,t,r){this.params=e,this.styleResolver=t,this.textWidthCalculator=r,this.isValid=!0,this._CalculateGeometry()}IsValid(){return this.isValid}GetTexts(){return[this._GetText()]}GenerateLayout(){const e=new Z5;let t=this.styleResolver("DIMSCALE")??1;t==0&&(t=1);const r=this.styleResolver("DIMCLRD"),s=this.styleResolver("DIMCLRT"),i=this.styleResolver("DIMCLRE"),a=(this.styleResolver("DIMTXT")??1)*t,o=(this.styleResolver("DIMASZ")??1)*t,l=(this.styleResolver("DIMTSZ")??0)*t,c=this._GenerateArcVertices();for(let m=0;m<c.length-1;m++)e.AddLine(c[m],c[m+1],r);const u=this._CreateExtensionLines(t,i);for(const m of u)e.AddLine(m.start,m.end,m.color);const p=this.radius*Math.abs(this.arcAngle)<o*2;for(let m=0;m<2;m++){const g=m===0,P=g?this.arcStart:this.arcEnd,S=g?this.startAngle:this.endAngle;let w;g?w=this.arcAngle>0?S-Math.PI/2:S+Math.PI/2:w=this.arcAngle>0?S+Math.PI/2:S-Math.PI/2,p&&(w+=Math.PI);let O=new A.Matrix3().identity();l>0?O.scale(l,l):O.scale(o,o),O.rotate(-w),O.translate(P.x,P.y),l>0?this._CreateTick(e,O,r):this._CreateArrowShape(e,O,r)}const d=this._GetText();let v=this.params.textAnchor;if(!v){const m=this.startAngle+this.arcAngle/2;v=new A.Vector2(this.params.center.x+this.radius*Math.cos(m),this.params.center.y+this.radius*Math.sin(m));const g=new A.Vector2(Math.cos(m),Math.sin(m));v.add(g.multiplyScalar(a*.75))}let y=(this.startAngle+this.arcAngle/2)*180/Math.PI;return(y>90||y<-90)&&(y+=180),y+=this.params.textRotation??0,e.AddText(d,a,y,s,v),e}_CalculateGeometry(){const{center:e,point1:t,point2:r,arcPoint:s}=this.params;if(this.radius=e.distanceTo(s),this.radius===0){this.isValid=!1;return}this.angle1=Math.atan2(t.y-e.y,t.x-e.x),this.angle2=Math.atan2(r.y-e.y,r.x-e.x);const i=Math.atan2(s.y-e.y,s.x-e.x);let a=this.angle2-this.angle1;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;const o=this._isAngleBetween(i,this.angle1,this.angle1+a);if(a>0?o?(this.startAngle=this.angle1,this.arcAngle=a):(this.startAngle=this.angle1,this.arcAngle=a-2*Math.PI):o?(this.startAngle=this.angle1,this.arcAngle=a+2*Math.PI):(this.startAngle=this.angle1,this.arcAngle=a),Math.abs(this.arcAngle)<1e-10){this.isValid=!1;return}this.arcStart=new A.Vector2(e.x+this.radius*Math.cos(this.startAngle),e.y+this.radius*Math.sin(this.startAngle)),this.arcEnd=new A.Vector2(e.x+this.radius*Math.cos(this.startAngle+this.arcAngle),e.y+this.radius*Math.sin(this.startAngle+this.arcAngle))}_isAngleBetween(e,t,r){const s=l=>{for(;l<0;)l+=2*Math.PI;for(;l>=2*Math.PI;)l-=2*Math.PI;return l},i=s(e);let a=s(t),o=s(r);return a<=o?i>=a&&i<=o:i>=a||i<=o}_GenerateArcVertices(){const e=[],t=this.params.arcTessellationAngle||10*Math.PI/180,r=Math.max(1,Math.floor(Math.abs(this.arcAngle)/t)),s=this.arcAngle/r;for(let i=0;i<=r;i++){const a=this.startAngle+i*s;e.push(new A.Vector2(this.params.center.x+this.radius*Math.cos(a),this.params.center.y+this.radius*Math.sin(a)))}return e}_CreateExtensionLines(e,t){const r=[],s=(this.styleResolver("DIMEXO")??0)*e,i=(this.styleResolver("DIMEXE")??0)*e,a=(c,u,f)=>{if(this.styleResolver(f)??0)return null;const p=u.clone().sub(c);if(p.length()===0)return null;p.normalize();const v=c.clone();s!==0&&v.add(p.clone().multiplyScalar(s));const y=u.clone();return i!==0&&y.add(p.clone().multiplyScalar(i)),{start:v,end:y,color:t}},o=a(this.params.point1,this.arcStart,"DIMSE1");o&&r.push(o);const l=a(this.params.point2,this.arcEnd,"DIMSE2");return l&&r.push(l),r}_CreateArrowShape(e,t,r){const s=[];for(const i of j5.vertices)s.push(i.clone().applyMatrix3(t));e.AddTriangles(s,j5.indices,r)}_CreateTick(e,t,r){e.AddLine(new A.Vector2(.5,.5).applyMatrix3(t),new A.Vector2(-.5,-.5).applyMatrix3(t),r)}_GetText(){if(this.params.text===" ")return"";if((this.params.text??"")!==""&&this.params.text.indexOf("<>")===-1)return K0(this.params.text);let e=Math.abs(this.arcAngle)*180/Math.PI;e*=this.styleResolver("DIMLFAC")??1;const t=this.styleResolver("DIMRND")??0;if(t>0){const c=Math.round(e/t);e=t*c}const r=this.styleResolver("DIMZIN")??0,s=(r&4)!==0,i=(r&8)!==0;let a=e.toFixed(this.styleResolver("DIMDEC")??2);i&&(a=a.replace(/\.?0+$/,"")),s&&(a=a.replace(/^0+/,"")),a.startsWith(".")?a="0"+a:a===""&&(a="0"),a.endsWith(".")&&(a=a.substring(0,a.length-1));let o=this.styleResolver("DIMDSEP")??".";isNaN(o)||(o=String.fromCharCode(o)),o!=="."&&(a=a.replace(".",o)),a+="°";const l=this.styleResolver("DIMPOST")??"";return l!==""&&(l.indexOf("<>")!==-1?a=l.replaceAll("<>",a):a+=l),(this.params.text??"")!==""&&(a=this.params.text.replaceAll("<>",a)),K0(a)}}function U8(n,e,t,r,s=!1){const i=e.x-n.x,a=e.y-n.y,o=r.x-t.x,l=r.y-t.y,c=i*l-a*o;if(Math.abs(c)<1e-10)return null;const u=t.x-n.x,f=t.y-n.y,p=(u*l-f*o)/c,d=(u*a-f*i)/c;return!s&&(p<0||p>1||d<0||d>1)?null:[p,d,c]}const m4=Object.freeze({ODD_PARITY:0,OUTERMOST:1,THROUGH_ENTIRE_AREA:2}),le=1e-4;function Q5(n,e){return!n.intersection||!e.intersection?!1:n.intersection[2]>0&&e.intersection[2]>0||n.intersection[2]<0&&e.intersection[2]<0}class G8{constructor(e,t,r){this.style=t,this.line=r,this.lineDir=r[1].clone().sub(r[0]).normalize(),this.loops=[];for(let s=0;s<e.length;s++){const i=e[s],a=[];for(let o=0;o<i.length;o++)a.push({idx:o,start:i[o],end:i[o==i.length-1?0:o+1],loopIdx:s});this.loops.push(a)}}Calculate(){return this._ProcessEdges(),this._CreateNodes(),this.nodes.sort((e,t)=>e.intersection[0]-t.intersection[0]),this.style==m4.THROUGH_ENTIRE_AREA?this._GenerateThroughAllSegments():this._GenerateOddParitySegments()}_ProcessEdges(){for(const e of this.loops)for(const t of e){const r=t.end.clone().sub(t.start),s=r.length();if(t.isZero=s<=Number.EPSILON,t.isZero)continue;r.divideScalar(s);const i=r.cross(this.lineDir);t.isParallel=Math.abs(i)<=1e-6,!t.isParallel&&(t.intersection=U8(this.line[0],this.line[1],t.start,t.end,!0))}}_CreateNodes(){this.nodes=[];for(const e of this.loops)for(let t of e){if(t.isZero||t.isParallel||t.isProcessed||!t.intersection||t.intersection[1]<-le||t.intersection[1]>1+le)continue;const r=t.intersection[1]<=le;if(r||t.intersection[1]>=1-le){let[s,i]=this._GetConnectedEdge(t,r);if(!s||!s.intersection)continue;if(t.isProcessed=!0,s.isProcessed=!0,i)Q5(t,s)&&(t.toggle=!0,this.nodes.push(t));else{if(t.intersection[0]>s.intersection[0]){const a=s;s=t,t=a}t.suppress=!0,s.unsuppress=!0,this.nodes.push(t),Q5(t,s)&&(s.toggle=!0),this.nodes.push(s)}}else t.isProcessed=!0,t.toggle=!0,this.nodes.push(t)}}_GetConnectedEdge(e,t){const r=this.loops[e.loopIdx];let s=e.idx,i=!0;do{t?s==0?s=r.length-1:s--:s==r.length-1?s=0:s++;const a=r[s];if(a.isZero||a.isParallel)i=!1;else return[a,i]}while(s!=e.idx);return[null,!1]}_GenerateOddParitySegments(){const e=[];let t=!1,r=0,s=null;for(const i of this.nodes)i.suppress&&r++,i.unsuppress&&r--,i.toggle&&(t=!t),r==0&&t&&(i.unsuppress||i.toggle)?s=i:(r||!t)&&s&&(i.intersection[0]-s.intersection[0]>Number.EPSILON&&e.push([s.intersection[0],i.intersection[0]]),s=null);return e}_GenerateThroughAllSegments(){const e=[];let t=0,r=null;const s=new Array(this.loops.length).fill(0);function i(){for(const a of s)if(a!=0)return!1;return!0}for(const a of this.nodes){a.suppress&&t++,a.unsuppress&&t--;const o=i();a.toggle&&(a.intersection[2]>0?s[a.loopIdx]++:s[a.loopIdx]--),t==0&&!i()&&(a.unsuppress||o)?r=a:(t||i())&&r&&(a.intersection[0]-r.intersection[0]>Number.EPSILON&&e.push([r.intersection[0],a.intersection[0]]),r=null)}return e}}class z8{constructor(e,t){$(this,"boundaryLoops");$(this,"style");this.boundaryLoops=e,this.style=t}ClipLine(e){return new G8(this.boundaryLoops,this.style,e).Calculate()}GetPatternTransform({seedPoint:e,angle:t,scale:r}){const s=new A.Matrix3().makeTranslation(-e.x,-e.y);return t&&s.rotate(t),(r??1)!=1&&s.scale(1/r,1/r),s}GetLineTransform({patTransform:e,basePoint:t,angle:r}){const s=e.clone();return t&&s.translate(-t.x,-t.y),r&&s.rotate(r),s}GetBoundingBox(e){const t=new A.Box2;for(const r of this.boundaryLoops)for(const s of r)t.expandByPoint(s.clone().applyMatrix3(e));return t}}class x{constructor(e,t=null,r=!0){this.lines=e,this.name=t,this.offsetInLineSpace=r}get isQcadDefault(){if(this.lines.length!=1)return!1;const e=this.lines[0];return!(e.dashes||Math.abs(e.angle-Math.PI/4)>1e-13)}static ParsePatFile(e){const t=e.split(/\r?\n/);if(t.length<2)throw new Error("Invalid .pat file content");let r=null;const s=[];for(let i of t){if(i=i.trim(),i==""||i.startsWith(";"))continue;if(r===null){const c=i.match(/\*([^,]+)(?:,.*)?/);if(!c)throw new Error("Bad header for .pat file content");r=c[1];continue}const a=i.indexOf(";");a!=-1&&(i=i.substring(0,a).trim());let o=i.split(/\s*,\s*/);o[o.length-1]==""&&(o.length=o.length-1),o=o.map(c=>{const u=parseFloat(c);if(isNaN(u))throw new Error("Failed to parse number in .pat file: "+c);return u});const l={angle:o[0]*Math.PI/180,base:new A.Vector2(o[1],o[2]),offset:new A.Vector2(o[3],o[4])};o.length>5&&(l.dashes=o.slice(5)),s.push(l)}return new x(s,r)}}const q5=new Map,K5=new Map;function b(n,e=!0){if(!n.name)throw new Error("Anonymous pattern cannot be registered");const t=n.name.toUpperCase(),r=e?q5:K5;if(r.has(t)){console.warn(`Pattern with name ${t} is already registered`);return}r.set(t,n)}function $5(n,e=!0){return(e?q5:K5).get(n.toUpperCase())}b(x.ParsePatFile(`
*ACAD_ISO02W100,ACAD_ISO02W100
0, 0,0, 0,5, 12,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO03W100,ACAD_ISO03W100
0, 0,0, 0,5, 12,-18
`)),b(x.ParsePatFile(`
*ACAD_ISO04W100,ACAD_ISO04W100
0, 0,0, 0,5, 24,-3,.5,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO05W100,ACAD_ISO05W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO06W100,ACAD_ISO06W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -34,.5,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO07W100,ACAD_ISO07W100
0, 0,0, 0,5, .5,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO08W100,ACAD_ISO08W100
0, 0,0, 0,5, 24,-3,6,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO09W100,ACAD_ISO09W100
0, 0,0, 0,5, 24,-3,6,-3,6,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO10W100,ACAD_ISO10W100
0, 0,0, 0,5, 12,-3,.5,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO11W100,ACAD_ISO11W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO12W100,ACAD_ISO12W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO13W100,ACAD_ISO13W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-6.5
0, 0,0, 0,5, -33.5,.5,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO14W100,ACAD_ISO14W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -22,.5,-3
`)),b(x.ParsePatFile(`
*ACAD_ISO15W100,ACAD_ISO15W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-10
0, 0,0, 0,5, -33.5,.5,-3,.5,-3
`)),b(x.ParsePatFile(`
*ANGLE,ANGLE
0, 0,0, 0,6.985, 5.08,-1.905
90, 0,0, 0,6.985, 5.08,-1.905
`)),b(x.ParsePatFile(`
*ANSI31,ANSI31
45, 0,0, 0,3.175
`)),b(x.ParsePatFile(`
*ANSI32,ANSI32
45, 0,0, 0,9.525
45, 4.49013,0, 0,9.525
`)),b(x.ParsePatFile(`
*ANSI33,ANSI33
45, 0,0, 0,6.35
45, 4.49013,0, 0,6.35, 3.175,-1.5875
`)),b(x.ParsePatFile(`
*ANSI34,ANSI34
45, 0,0, 0,19.05
45, 4.49013,0, 0,19.05
45, 8.98026,0, 0,19.05
45, 13.4704,0, 0,19.05
`)),b(x.ParsePatFile(`
*ANSI35,ANSI35
45, 0,0, 0,6.35
45, 4.49013,0, 0,6.35, 7.9375,-1.5875,0,-1.5875
`)),b(x.ParsePatFile(`
*ANSI36,ANSI36
45, 0,0, 5.55625,3.175, 7.9375,-1.5875,0,-1.5875
`)),b(x.ParsePatFile(`
*ANSI37,ANSI37
45, 0,0, 0,3.175
135, 0,0, 0,3.175
`)),b(x.ParsePatFile(`
*ANSI38,ANSI38
45, 0,0, 0,3.175
135, 0,0, 6.35,3.175, 7.9375,-4.7625
`)),b(x.ParsePatFile(`
*AR-B816,AR-B816
0, 0,0, 0,203.2
90, 0,0, 203.2,203.2, 203.2,-203.2
`)),b(x.ParsePatFile(`
*AR-B816C,AR-B816C
0, 0,0, 203.2,203.2, 396.875,-9.525
0, -203.2,9.525, 203.2,203.2, 396.875,-9.525
90, 0,0, 203.2,203.2, -212.725,193.675
90, -9.525,0, 203.2,203.2, -212.725,193.675
`)),b(x.ParsePatFile(`
*AR-B88,AR-B88
0, 0,0, 0,203.2
90, 0,0, 203.2,101.6, 203.2,-203.2
`)),b(x.ParsePatFile(`
*AR-BRELM,AR-BRELM
0, 0,0, 0,135.484, 193.675,-9.525
0, 0,57.15, 0,135.484, 193.675,-9.525
0, 50.8,67.7418, 0,135.484, 92.075,-9.525
0, 50.8,124.892, 0,135.484, 92.075,-9.525
90, 0,0, 0,203.2, 57.15,-78.3336
90, -9.525,0, 0,203.2, 57.15,-78.3336
90, 50.8,67.7418, 0,101.6, 57.15,-78.3336
90, 41.275,67.7418, 0,101.6, 57.15,-78.3336
`)),b(x.ParsePatFile(`
*AR-BRSTD,AR-BRSTD
0, 0,0, 0,67.7418
90, 0,0, 67.7418,101.6, 67.7418,-67.7418
`)),b(x.ParsePatFile(`
*AR-CONC-01,AR-CONC-01
;Optimize to replace existing AR-CONC Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
243.434949,7.62,20.32,227.18450626,113.5922544,5.67961272,-562.2816542
90,7.62,15.24,0,254,5.08,-248.92
0,5.08,15.24,0,254,2.54,-251.46
315,2.54,2.54,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,7.62,5.08,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,5.08,0,227.18450626,113.5922544,5.67961272,-562.2816542
45,50.8,10.16,179.60512212,179.60512212,7.18420458,-352.02603966
161.565051,58.42,7.62,240.9655582,80.32185358,8.03218612,-795.18633952
288.434949,55.88,15.24,562.25296744,80.32185358,8.03218612,-795.18633952
315,58.42,22.86,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,63.5,25.4,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,60.96,20.32,227.18450626,113.5922544,5.67961272,-562.2816542
270,104.14,15.24,0,254,5.08,-248.92
45,99.06,10.16,179.60512212,179.60512212,7.18420458,-352.02603966
180,104.14,10.16,0,254,5.08,-248.92
333.434949,99.06,5.08,227.18450626,113.5922544,5.67961272,-562.2816542
225,101.6,7.62,179.60512212,179.60512212,3.59210356,-355.61814322
116.565051,104.14,2.54,340.77676066,113.5922544,5.67961272,-562.2816542
198.434949,160.02,20.32,562.25296744,80.32185358,8.03218612,-795.18633952
63.434949,157.48,15.24,227.18450626,113.5922544,5.67961272,-562.2816542
333.434949,152.4,17.78,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,144.78,0,340.77676066,113.5922544,5.67961272,-562.2816542
251.565051,147.32,7.62,240.9655582,80.32185358,8.03218612,-795.18633952
116.565051,149.86,2.54,340.77676066,113.5922544,5.67961272,-562.2816542
45,170.18,2.54,179.60512212,179.60512212,7.18420458,-352.02603966
161.565051,177.8,0,240.9655582,80.32185358,8.03218612,-795.18633952
288.434949,175.26,7.62,562.25296744,80.32185358,8.03218612,-795.18633952
315,76.2,71.12,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,81.28,73.66,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,78.74,68.58,227.18450626,113.5922544,5.67961272,-562.2816542
45,27.94,20.32,179.60512212,179.60512212,7.18420458,-352.02603966
180,33.02,20.32,0,254,5.08,-248.92
270,33.02,25.4,0,254,5.08,-248.92
225,45.72,60.96,179.60512212,179.60512212,3.59210356,-355.61814322
270,45.72,66.04,0,254,5.08,-248.92
71.565051,43.18,58.42,240.9655582,80.32185358,8.03218612,-795.18633952
198.434949,25.4,53.34,562.25296744,80.32185358,8.03218612,-795.18633952
63.434949,22.86,48.26,227.18450626,113.5922544,5.67961272,-562.2816542
333.434949,17.78,50.8,227.18450626,113.5922544,5.67961272,-562.2816542
0,88.9,55.88,0,254,5.08,-248.92
225,93.98,60.96,179.60512212,179.60512212,7.18420458,-352.02603966
90,93.98,55.88,0,254,5.08,-248.92
315,114.3,43.18,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,119.38,45.72,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,116.84,40.64,227.18450626,113.5922544,5.67961272,-562.2816542
315,139.7,53.34,179.60512212,179.60512212,3.59210356,-355.61814322
270,139.7,58.42,0,254,5.08,-248.92
108.434949,142.24,50.8,562.25296744,80.32185358,8.03218612,-795.18633952
206.565051,175.26,68.58,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,172.72,63.5,227.18450626,113.5922544,5.67961272,-562.2816542
315,170.18,66.04,179.60512212,179.60512212,3.59210356,-355.61814322
333.434949,185.42,48.26,227.18450626,113.5922544,5.67961272,-562.2816542
225,187.96,50.8,179.60512212,179.60512212,3.59210356,-355.61814322
116.565051,190.5,45.72,340.77676066,113.5922544,5.67961272,-562.2816542
26.565051,208.28,38.1,340.77676066,113.5922544,5.67961272,-562.2816542
153.434949,213.36,35.56,227.18450626,113.5922544,5.67961272,-562.2816542
270,213.36,40.64,0,254,5.08,-248.92
180,236.22,43.18,0,254,2.54,-251.46
270,236.22,45.72,0,254,2.54,-251.46
45,233.68,43.18,179.60512212,179.60512212,3.59210356,-355.61814322
153.434949,236.22,60.96,227.18450626,113.5922544,5.67961272,-562.2816542
270,236.22,68.58,0,254,7.62,-246.38
45,231.14,63.5,179.60512212,179.60512212,7.18420458,-352.02603966
206.565051,231.14,88.9,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,228.6,83.82,227.18450626,113.5922544,5.67961272,-562.2816542
315,226.06,86.36,179.60512212,179.60512212,3.59210356,-355.61814322
180,165.1,73.66,0,254,5.08,-248.92
270,165.1,81.28,0,254,7.62,-246.38
56.309932,160.02,73.66,563.57539812,70.4469254,9.15809954,-906.65192304
198.434949,137.16,96.52,562.25296744,80.32185358,8.03218612,-795.18633952
71.565051,134.62,88.9,240.9655582,80.32185358,8.03218612,-795.18633952
315,129.54,93.98,179.60512212,179.60512212,7.18420458,-352.02603966
180,96.52,83.82,0,254,7.62,-246.38
270,96.52,91.44,0,254,7.62,-246.38
45,88.9,83.82,179.60512212,179.60512212,10.77630814,-348.43393864
225,83.82,109.22,179.60512212,179.60512212,7.18420458,-352.02603966
90,83.82,104.14,0,254,5.08,-248.92
0,78.74,104.14,0,254,5.08,-248.92
206.565051,40.64,99.06,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,38.1,93.98,227.18450626,113.5922544,5.67961272,-562.2816542
315,35.56,96.52,179.60512212,179.60512212,3.59210356,-355.61814322
108.434949,25.4,93.98,562.25296744,80.32185358,8.03218612,-795.18633952
341.565051,17.78,96.52,240.9655582,80.32185358,8.03218612,-795.18633952
225,22.86,101.6,179.60512212,179.60512212,7.18420458,-352.02603966
270,38.1,114.3,0,254,5.08,-248.92
45,33.02,109.22,179.60512212,179.60512212,7.18420458,-352.02603966
180,38.1,109.22,0,254,5.08,-248.92
315,91.44,119.38,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,96.52,121.92,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,93.98,116.84,227.18450626,113.5922544,5.67961272,-562.2816542
0,129.54,101.6,0,254,2.54,-251.46
225,132.08,104.14,179.60512212,179.60512212,3.59210356,-355.61814322
90,132.08,101.6,0,254,2.54,-251.46
0,175.26,96.52,0,254,5.08,-248.92
243.434949,177.8,101.6,227.18450626,113.5922544,5.67961272,-562.2816542
116.565051,180.34,96.52,340.77676066,113.5922544,5.67961272,-562.2816542
26.565051,185.42,114.3,340.77676066,113.5922544,5.67961272,-562.2816542
116.565051,187.96,109.22,340.77676066,113.5922544,5.67961272,-562.2816542
251.565051,190.5,116.84,240.9655582,80.32185358,8.03218612,-795.18633952
63.434949,223.52,91.44,227.18450626,113.5922544,5.67961272,-562.2816542
180,228.6,91.44,0,254,5.08,-248.92
296.565051,226.06,96.52,340.77676066,113.5922544,5.67961272,-562.2816542
180,228.6,137.16,0,254,7.62,-246.38
270,228.6,144.78,0,254,7.62,-246.38
45,220.98,137.16,179.60512212,179.60512212,10.77630814,-348.43393864
180,218.44,142.24,0,254,5.08,-248.92
270,218.44,147.32,0,254,5.08,-248.92
45,213.36,142.24,179.60512212,179.60512212,7.18420458,-352.02603966
243.434949,208.28,165.1,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,203.2,162.56,340.77676066,113.5922544,5.67961272,-562.2816542
135,205.74,160.02,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,170.18,152.4,227.18450626,113.5922544,5.67961272,-562.2816542
116.565051,172.72,147.32,340.77676066,113.5922544,5.67961272,-562.2816542
0,167.64,147.32,0,254,5.08,-248.92
225,157.48,154.94,179.60512212,179.60512212,7.18420458,-352.02603966
108.434949,160.02,147.32,562.25296744,80.32185358,8.03218612,-795.18633952
341.565051,152.4,149.86,240.9655582,80.32185358,8.03218612,-795.18633952
135,149.86,137.16,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,152.4,142.24,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,147.32,139.7,340.77676066,113.5922544,5.67961272,-562.2816542
180,121.92,152.4,0,254,2.54,-251.46
270,121.92,154.94,0,254,2.54,-251.46
45,119.38,152.4,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,111.76,170.18,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,109.22,165.1,227.18450626,113.5922544,5.67961272,-562.2816542
315,106.68,167.64,179.60512212,179.60512212,3.59210356,-355.61814322
225,86.36,165.1,179.60512212,179.60512212,7.18420458,-352.02603966
90,86.36,157.48,0,254,7.62,-246.38
333.434949,81.28,160.02,227.18450626,113.5922544,5.67961272,-562.2816542
180,76.2,154.94,0,254,5.08,-248.92
270,76.2,160.02,0,254,5.08,-248.92
45,71.12,154.94,179.60512212,179.60512212,7.18420458,-352.02603966
135,53.34,142.24,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,55.88,147.32,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,50.8,144.78,340.77676066,113.5922544,5.67961272,-562.2816542
180,27.94,160.02,0,254,5.08,-248.92
270,27.94,165.1,0,254,5.08,-248.92
45,22.86,160.02,179.60512212,179.60512212,7.18420458,-352.02603966
270,15.24,177.8,0,254,7.62,-246.38
45,10.16,172.72,179.60512212,179.60512212,7.18420458,-352.02603966
153.434949,15.24,170.18,227.18450626,113.5922544,5.67961272,-562.2816542
243.434949,208.28,198.12,227.18450626,113.5922544,5.67961272,-562.2816542
90,208.28,193.04,0,254,5.08,-248.92
0,205.74,193.04,0,254,2.54,-251.46
135,220.98,208.28,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,223.52,213.36,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,218.44,210.82,340.77676066,113.5922544,5.67961272,-562.2816542
180,218.44,213.36,0,254,5.08,-248.92
251.565051,220.98,220.98,240.9655582,80.32185358,8.03218612,-795.18633952
45,213.36,213.36,179.60512212,179.60512212,10.77630814,-348.43393864
153.434949,182.88,233.68,227.18450626,113.5922544,5.67961272,-562.2816542
135,165.1,185.42,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,167.64,190.5,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,162.56,187.96,340.77676066,113.5922544,5.67961272,-562.2816542
135,160.02,195.58,179.60512212,179.60512212,3.59210356,-355.61814322
251.565051,162.56,203.2,240.9655582,80.32185358,8.03218612,-795.18633952
45,157.48,198.12,179.60512212,179.60512212,7.18420458,-352.02603966
26.565051,66.04,193.04,340.77676066,113.5922544,5.67961272,-562.2816542
153.434949,71.12,190.5,227.18450626,113.5922544,5.67961272,-562.2816542
270,71.12,195.58,0,254,5.08,-248.92
90,114.3,200.66,0,254,5.08,-248.92
0,109.22,200.66,0,254,5.08,-248.92
225,114.3,205.74,179.60512212,179.60512212,7.18420458,-352.02603966
63.434949,124.46,210.82,227.18450626,113.5922544,5.67961272,-562.2816542
315,121.92,213.36,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,127,215.9,340.77676066,113.5922544,5.67961272,-562.2816542
153.434949,147.32,223.52,227.18450626,113.5922544,5.67961272,-562.2816542
270,147.32,231.14,0,254,7.62,-246.38
45,142.24,226.06,179.60512212,179.60512212,7.18420458,-352.02603966
0,71.12,236.22,0,254,7.62,-246.38
135,66.04,203.2,179.60512212,179.60512212,3.59210356,-355.61814322
270,66.04,208.28,0,254,5.08,-248.92
45,63.5,205.74,179.60512212,179.60512212,3.59210356,-355.61814322
116.565051,20.32,208.28,340.77676066,113.5922544,5.67961272,-562.2816542
333.434949,15.24,210.82,227.18450626,113.5922544,5.67961272,-562.2816542
225,17.78,213.36,179.60512212,179.60512212,3.59210356,-355.61814322
135,30.48,218.44,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,33.02,223.52,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,27.94,220.98,340.77676066,113.5922544,5.67961272,-562.2816542
0,222.21825,218.170506,0,254,0,-254
0,206.330804,232.72877,0,254,0,-254
0,208.872836,188.32957,0,254,0,-254
0,183.55056,211.532978,0,254,0,-254
0,167.663114,226.091242,0,254,0,-254
0,222.022924,134.20979,0,254,0,-254
0,206.135224,148.768054,0,254,0,-254
0,170.205146,181.692042,0,254,0,-254
0,144.88287,204.895704,0,254,0,-254
0,128.99517,219.453968,0,254,0,-254
0,208.677256,104.368854,0,254,0,-254
0,183.35498,127.572516,0,254,0,-254
0,167.467534,142.13078,0,254,0,-254
0,131.537202,175.054768,0,254,0,-254
0,106.214926,198.258176,0,254,0,-254
0,90.32748,212.81644,0,254,0,-254
0,221.827344,50.249328,0,254,0,-254
0,205.939898,64.807592,0,254,0,-254
0,170.009566,97.73158,0,254,0,-254
0,144.68729,120.934988,0,254,0,-254
0,128.799844,135.493252,0,254,0,-254
0,92.869512,168.41724,0,254,0,-254
0,67.547236,191.620902,0,254,0,-254
0,51.65979,206.179166,0,254,0,-254
0,208.48193,20.408392,0,254,0,-254
0,183.159654,43.6118,0,254,0,-254
0,167.271954,58.170064,0,254,0,-254
0,131.341876,91.094052,0,254,0,-254
0,106.0196,114.297714,0,254,0,-254
0,90.1319,128.855978,0,254,0,-254
0,54.201822,161.779966,0,254,0,-254
0,28.879546,184.983628,0,254,0,-254
0,12.991846,199.541638,0,254,0,-254
0,169.813986,13.770864,0,254,0,-254
0,144.49171,36.974526,0,254,0,-254
0,128.604264,51.53279,0,254,0,-254
0,89.821004,81.952846,0,254,0,-254
0,67.351656,107.660186,0,254,0,-254
0,51.46421,122.21845,0,254,0,-254
0,15.533878,155.142438,0,254,0,-254
0,131.146296,7.13359,0,254,0,-254
0,105.82402,30.336998,0,254,0,-254
0,89.936574,44.895262,0,254,0,-254
0,54.006242,77.81925,0,254,0,-254
0,28.683966,101.022912,0,254,0,-254
0,12.79652,115.581176,0,254,0,-254
0,92.478606,0.496062,0,254,0,-254
0,67.15633,23.699724,0,254,0,-254
0,51.26863,38.257988,0,254,0,-254
0,15.338552,71.181976,0,254,0,-254
0,28.488386,17.062196,0,254,0,-254
0,12.60094,31.62046,0,254,0,-254
0,232.573576,212.125814,0,254,0,-254
0,211.15909,204.714856,0,254,0,-254
0,197.17893,213.621112,0,254,0,-254
0,219.38234,178.422554,0,254,0,-254
0,175.76419,206.210408,0,254,0,-254
0,161.78403,215.116664,0,254,0,-254
0,183.98744,179.918106,0,254,0,-254
0,140.369544,207.705706,0,254,0,-254
0,126.389384,216.612216,0,254,0,-254
0,220.450664,135.634984,0,254,0,-254
0,206.470504,144.541494,0,254,0,-254
0,148.592794,181.413658,0,254,0,-254
0,104.974898,209.201258,0,254,0,-254
0,90.994738,218.107514,0,254,0,-254
0,228.673914,109.342936,0,254,0,-254
0,185.055764,137.130536,0,254,0,-254
0,171.075858,146.036792,0,254,0,-254
0,113.198148,182.908956,0,254,0,-254
0,69.579998,210.69681,0,254,0,-254
0,55.599838,219.603066,0,254,0,-254
0,193.279268,110.838234,0,254,0,-254
0,149.661118,138.626088,0,254,0,-254
0,135.680958,147.532344,0,254,0,-254
0,77.803248,184.404508,0,254,0,-254
0,34.185352,212.192362,0,254,0,-254
0,20.205192,221.098618,0,254,0,-254
0,229.742238,66.555366,0,254,0,-254
0,215.762078,75.461622,0,254,0,-254
0,157.884368,112.333786,0,254,0,-254
0,114.266472,140.12164,0,254,0,-254
0,100.286312,149.027896,0,254,0,-254
0,42.408602,185.90006,0,254,0,-254
0,237.965488,40.263064,0,254,0,-254
0,194.347592,68.050918,0,254,0,-254
0,180.367432,76.957174,0,254,0,-254
0,122.489722,113.829338,0,254,0,-254
0,78.871572,141.616938,0,254,0,-254
0,64.891666,150.523448,0,254,0,-254
0,7.013702,187.395612,0,254,0,-254
0,202.570842,41.758616,0,254,0,-254
0,158.952692,69.546216,0,254,0,-254
0,144.972532,78.452726,0,254,0,-254
0,87.094822,115.32489,0,254,0,-254
0,43.476926,143.11249,0,254,0,-254
0,29.496766,152.018746,0,254,0,-254
0,225.053652,6.38175,0,254,0,-254
0,167.175942,43.254168,0,254,0,-254
0,123.558046,71.041768,0,254,0,-254
0,109.577886,79.948024,0,254,0,-254
0,51.700176,116.820188,0,254,0,-254
0,8.08228,144.608042,0,254,0,-254
0,189.659006,7.877302,0,254,0,-254
0,131.781296,44.749466,0,254,0,-254
0,88.1634,72.53732,0,254,0,-254
0,74.18324,81.443576,0,254,0,-254
0,16.30553,118.31574,0,254,0,-254
0,168.24452,0.466598,0,254,0,-254
0,154.26436,9.372854,0,254,0,-254
0,96.38665,46.245018,0,254,0,-254
0,52.7685,74.032872,0,254,0,-254
0,38.78834,82.939128,0,254,0,-254
0,132.84962,1.961896,0,254,0,-254
0,118.86946,10.868406,0,254,0,-254
0,60.99175,47.74057,0,254,0,-254
0,17.373854,75.52817,0,254,0,-254
0,3.393694,84.43468,0,254,0,-254
0,97.454974,3.457448,0,254,0,-254
0,83.474814,12.363704,0,254,0,-254
0,25.597104,49.235868,0,254,0,-254
0,62.060074,4.953,0,254,0,-254
0,48.080168,13.859256,0,254,0,-254
0,26.665428,6.448552,0,254,0,-254
0,12.685268,15.354808,0,254,0,-254
0,163.20897,236.374178,0,254,0,-254
0,121.33453,230.861362,0,254,0,-254
0,96.22282,227.555298,0,254,0,-254
0,79.624174,225.370136,0,254,0,-254
0,37.749734,219.85732,0,254,0,-254
0,12.638278,216.551256,0,254,0,-254
0,229.351078,221.227142,0,254,0,-254
0,187.476638,215.714326,0,254,0,-254
0,162.364928,212.408262,0,254,0,-254
0,145.766282,210.2231,0,254,0,-254
0,103.891842,204.710284,0,254,0,-254
0,78.780132,201.40422,0,254,0,-254
0,62.18174,199.219058,0,254,0,-254
0,20.307046,193.705988,0,254,0,-254
0,228.507036,197.261226,0,254,0,-254
0,211.90839,195.076064,0,254,0,-254
0,170.03395,189.563248,0,254,0,-254
0,144.92224,186.257184,0,254,0,-254
0,128.323594,184.071768,0,254,0,-254
0,86.449154,178.558952,0,254,0,-254
0,61.337698,175.252888,0,254,0,-254
0,44.739052,173.067726,0,254,0,-254
0,2.864358,167.55491,0,254,0,-254
0,236.176058,174.415958,0,254,0,-254
0,211.064348,171.110148,0,254,0,-254
0,194.465702,168.924732,0,254,0,-254
0,152.591262,163.411916,0,254,0,-254
0,127.479552,160.105852,0,254,0,-254
0,110.88116,157.92069,0,254,0,-254
0,69.006466,152.407874,0,254,0,-254
0,43.89501,149.10181,0,254,0,-254
0,27.296364,146.916648,0,254,0,-254
0,218.73337,148.26488,0,254,0,-254
0,193.62166,144.958816,0,254,0,-254
0,177.023014,142.773654,0,254,0,-254
0,135.148574,137.260838,0,254,0,-254
0,110.037118,133.954774,0,254,0,-254
0,93.438472,131.769358,0,254,0,-254
0,51.563778,126.256542,0,254,0,-254
0,26.452322,122.950478,0,254,0,-254
0,9.853676,120.765316,0,254,0,-254
0,201.290682,122.113548,0,254,0,-254
0,176.178972,118.807738,0,254,0,-254
0,159.58058,116.622322,0,254,0,-254
0,117.705886,111.109506,0,254,0,-254
0,92.59443,107.803442,0,254,0,-254
0,75.995784,105.61828,0,254,0,-254
0,34.121344,100.105464,0,254,0,-254
0,9.009634,96.7994,0,254,0,-254
0,225.722434,101.475286,0,254,0,-254
0,183.847994,95.96247,0,254,0,-254
0,158.736538,92.656406,0,254,0,-254
0,142.137892,90.471244,0,254,0,-254
0,100.263198,84.958428,0,254,0,-254
0,75.151742,81.652364,0,254,0,-254
0,58.553096,79.466948,0,254,0,-254
0,16.678656,73.954132,0,254,0,-254
0,224.878392,77.50937,0,254,0,-254
0,208.279746,75.324208,0,254,0,-254
0,166.405306,69.811138,0,254,0,-254
0,141.29385,66.505328,0,254,0,-254
0,124.695204,64.319912,0,254,0,-254
0,82.82051,58.807096,0,254,0,-254
0,57.709054,55.501032,0,254,0,-254
0,41.110408,53.31587,0,254,0,-254
0,232.547414,54.664102,0,254,0,-254
0,207.435704,51.358038,0,254,0,-254
0,190.837312,49.172876,0,254,0,-254
0,148.962618,43.66006,0,254,0,-254
0,123.851162,40.353996,0,254,0,-254
0,107.252516,38.168834,0,254,0,-254
0,65.378076,32.656018,0,254,0,-254
0,40.266366,29.349954,0,254,0,-254
0,23.66772,27.164538,0,254,0,-254
0,215.104726,28.513024,0,254,0,-254
0,189.99327,25.20696,0,254,0,-254
0,173.394624,23.021798,0,254,0,-254
0,131.51993,17.508728,0,254,0,-254
0,106.408474,14.202918,0,254,0,-254
0,89.809828,12.017502,0,254,0,-254
0,47.935388,6.504686,0,254,0,-254
0,22.823678,3.198622,0,254,0,-254
0,6.225032,1.01346,0,254,0,-254
0,197.662038,2.361692,0,254,0,-254
0,31.866332,226.2124,0,254,0,-254
0,65.909444,230.88092,0,254,0,-254
0,31.060136,204.140054,0,254,0,-254
0,99.400106,235.125768,0,254,0,-254
0,65.103248,208.808574,0,254,0,-254
0,30.253686,182.067962,0,254,0,-254
0,98.59391,213.053422,0,254,0,-254
0,64.296798,186.736482,0,254,0,-254
0,29.44749,159.995616,0,254,0,-254
0,133.031484,218.02471,0,254,0,-254
0,97.787714,190.981076,0,254,0,-254
0,63.490602,164.664136,0,254,0,-254
0,28.641294,137.92327,0,254,0,-254
0,167.074596,222.69323,0,254,0,-254
0,132.225288,195.952364,0,254,0,-254
0,96.981264,168.90873,0,254,0,-254
0,62.684406,142.59179,0,254,0,-254
0,27.835098,115.850924,0,254,0,-254
0,200.565258,226.937824,0,254,0,-254
0,166.2684,200.620884,0,254,0,-254
0,131.419092,173.880018,0,254,0,-254
0,96.175068,146.836384,0,254,0,-254
0,61.87821,120.519444,0,254,0,-254
0,27.028902,93.778578,0,254,0,-254
0,235.002832,231.909112,0,254,0,-254
0,199.759062,204.865478,0,254,0,-254
0,165.46195,178.548538,0,254,0,-254
0,130.612642,151.807672,0,254,0,-254
0,95.368872,124.764292,0,254,0,-254
0,61.07176,98.447098,0,254,0,-254
0,26.222452,71.706232,0,254,0,-254
0,234.196636,209.836766,0,254,0,-254
0,198.952866,182.793386,0,254,0,-254
0,164.655754,156.476192,0,254,0,-254
0,129.806446,129.735326,0,254,0,-254
0,94.562676,102.691946,0,254,0,-254
0,60.265564,76.374752,0,254,0,-254
0,25.416256,49.63414,0,254,0,-254
0,233.39044,187.76442,0,254,0,-254
0,198.14667,160.72104,0,254,0,-254
0,163.849558,134.403846,0,254,0,-254
0,129.00025,107.663234,0,254,0,-254
0,93.75648,80.6196,0,254,0,-254
0,59.459368,54.30266,0,254,0,-254
0,24.61006,27.561794,0,254,0,-254
0,232.584244,165.692328,0,254,0,-254
0,197.34022,138.648694,0,254,0,-254
0,163.043362,112.331754,0,254,0,-254
0,128.194054,85.590888,0,254,0,-254
0,58.653172,32.230314,0,254,0,-254
0,23.803864,5.489448,0,254,0,-254
0,231.777794,143.619982,0,254,0,-254
0,196.534024,116.576348,0,254,0,-254
0,162.237166,90.259408,0,254,0,-254
0,127.387858,63.518542,0,254,0,-254
0,92.143834,36.474908,0,254,0,-254
0,57.846976,10.157968,0,254,0,-254
0,230.971598,121.547636,0,254,0,-254
0,195.727828,94.504002,0,254,0,-254
0,161.430716,68.187062,0,254,0,-254
0,126.581408,41.446196,0,254,0,-254
0,91.337638,14.402562,0,254,0,-254
0,230.165402,99.47529,0,254,0,-254
0,194.921632,72.431656,0,254,0,-254
0,160.62452,46.114716,0,254,0,-254
0,125.775212,19.37385,0,254,0,-254
0,229.359206,77.402944,0,254,0,-254
0,194.115436,50.359564,0,254,0,-254
0,159.818324,24.04237,0,254,0,-254
0,228.55301,55.330598,0,254,0,-254
0,193.308986,28.287218,0,254,0,-254
0,159.012128,1.970024,0,254,0,-254
0,227.74656,33.258506,0,254,0,-254
0,192.50279,6.214872,0,254,0,-254
0,226.940364,11.18616,0,254,0,-254
206.565051,254,15.24,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,251.46,10.16,227.18450626,113.5922544,5.67961272,-562.2816542
315,248.92,12.7,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,246.38,137.16,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,243.84,132.08,227.18450626,113.5922544,5.67961272,-562.2816542
315,241.3,134.62,179.60512212,179.60512212,3.59210356,-355.61814322
153.434949,254,182.88,227.18450626,113.5922544,5.67961272,-562.2816542
288.434949,251.46,190.5,562.25296744,80.32185358,8.03218612,-795.18633952
63.434949,248.92,185.42,227.18450626,113.5922544,5.67961272,-562.2816542
135,246.38,236.22,179.60512212,179.60512212,3.59210356,-355.61814322
270,246.38,241.3,0,254,5.08,-248.92
45,243.84,238.76,179.60512212,179.60512212,3.59210356,-355.61814322
0,195.58,243.84,0,254,5.08,-248.92
270,182.88,238.76,0,254,5.08,-248.92
26.565051,177.8,236.22,340.77676066,113.5922544,5.67961272,-562.2816542
0,241.457734,241.2111,0,254,0,-254
0,247.540526,194.966844,0,254,0,-254
0,244.803168,155.405582,0,254,0,-254
0,247.3452,111.006382,0,254,0,-254
0,244.607588,71.444866,0,254,0,-254
0,247.14962,27.045666,0,254,0,-254
0,246.553736,203.219304,0,254,0,-254
0,241.86515,143.045942,0,254,0,-254
0,251.156978,73.96607,0,254,0,-254
0,204.919072,241.865658,0,254,0,-254
0,179.807616,238.559594,0,254,0,-254
0,245.949724,223.412558,0,254,0,-254
0,253.618492,200.56729,0,254,0,-254
0,243.165122,127.626618,0,254,0,-254
0,242.32108,103.660448,0,254,0,-254
0,249.990102,80.815434,0,254,0,-254
0,239.536732,7.874762,0,254,0,-254
243.434949,198.12,248.92,227.18450626,113.5922544,5.67961272,-562.2816542
116.565051,200.66,243.84,340.77676066,113.5922544,5.67961272,-562.2816542
180,152.4,246.38,0,254,5.08,-248.92
270,152.4,251.46,0,254,5.08,-248.92
45,147.32,246.38,179.60512212,179.60512212,7.18420458,-352.02603966
296.565051,104.14,254,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,101.6,248.92,227.18450626,113.5922544,5.67961272,-562.2816542
180,106.68,248.92,0,254,5.08,-248.92
135,86.36,238.76,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,88.9,243.84,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,83.82,241.3,340.77676066,113.5922544,5.67961272,-562.2816542
116.565051,78.74,236.22,340.77676066,113.5922544,5.67961272,-562.2816542
225,76.2,241.3,179.60512212,179.60512212,7.18420458,-352.02603966
45,0,246.38,179.60512212,179.60512212,7.18420458,-352.02603966
161.565051,7.62,243.84,240.9655582,80.32185358,8.03218612,-795.18633952
288.434949,5.08,251.46,562.25296744,80.32185358,8.03218612,-795.18633952
0,93.065092,252.377956,0,254,0,-254
0,54.397148,245.740428,0,254,0,-254
0,15.729458,239.103154,0,254,0,-254
0,174.695866,248.997978,0,254,0,-254
0,139.30122,250.493276,0,254,0,-254
0,68.511674,253.48438,0,254,0,-254
0,113.665508,253.70663,0,254,0,-254
0,97.066862,251.521468,0,254,0,-254
0,55.192422,246.008398,0,254,0,-254
0,30.080966,242.702588,0,254,0,-254
0,13.48232,240.517172,0,254,0,-254
0,32.672528,248.284746,0,254,0,-254
0,66.71564,252.953266,0,254,0,-254
0,133.83768,240.097056,0,254,0,-254
0,167.880792,244.765576,0,254,0,-254
0,201.371454,249.01017,0,254,0,-254
0,245.485412,246.006874,0,254,0,-254
0,210.090512,247.502426,0,254,0,-254
0,246.793766,247.378474,0,254,0,-254
0,235.809282,253.981458,0,254,0,-254
`)),b(x.ParsePatFile(`
*AR-CONC,AR-CONC
50, 0,0, 104.896,-149.807, 19.05,-209.55
355, 0,0, -51.7604,187.258, 15.24,-167.64
100.451, 15.182,-1.32825, 145.557,-176.27, 16.19,-178.09
46.1842, 0,50.8, 157.343,-224.71, 28.575,-314.325
96.6356, 22.5899,47.2965, 218.335,-264.405, 24.285,-267.135
351.184, 0,50.8, 196.679,280.887, 22.86,-251.46
21, 25.4,38.1, 104.896,-149.807, 19.05,-209.55
326, 25.4,38.1, -51.7604,187.258, 15.24,-167.64
71.4514, 38.0345,29.5779, 145.557,-176.27, 16.19,-178.09
37.5, 0,0, 53.9242,65.2018, 0,-165.608,0,-170.18,0,-168.275
7.5, 0,0, 79.3242,90.6018, 0,-97.028,0,-161.798,0,-64.135
-32.5, -56.642,0, 117.434,68.0212, 0,-63.5,0,-198.12,0,-262.89
-42.5, -82.042,0, 92.0344,118.821, 0,-82.55,0,-131.572,0,-186.69
`)),b(x.ParsePatFile(`
*AR-HBONE,AR-HBONE
45, 0,0, 101.6,101.6, 304.8,-101.6
135, 71.842,71.842, 101.6,-101.6, 304.8,-101.6
`)),b(x.ParsePatFile(`
*AR-PARQ1,AR-PARQ1
90, 0,0, 304.8,304.8, 304.8,-304.8
90, 50.8,0, 304.8,304.8, 304.8,-304.8
90, 101.6,0, 304.8,304.8, 304.8,-304.8
90, 152.4,0, 304.8,304.8, 304.8,-304.8
90, 203.2,0, 304.8,304.8, 304.8,-304.8
90, 254,0, 304.8,304.8, 304.8,-304.8
90, 304.8,0, 304.8,304.8, 304.8,-304.8
0, 0,304.8, 304.8,-304.8, 304.8,-304.8
0, 0,355.6, 304.8,-304.8, 304.8,-304.8
0, 0,406.4, 304.8,-304.8, 304.8,-304.8
0, 0,457.2, 304.8,-304.8, 304.8,-304.8
0, 0,508, 304.8,-304.8, 304.8,-304.8
0, 0,558.8, 304.8,-304.8, 304.8,-304.8
0, 0,609.6, 304.8,-304.8, 304.8,-304.8
`)),b(x.ParsePatFile(`
*AR-RROOF,AR-RROOF
0, 0,0, 55.88,25.4, 381,-50.8,127,-25.4
0, 33.782,12.7, -25.4,33.782, 76.2,-8.382,152.4,-19.05
0, 12.7,21.59, 132.08,17.018, 203.2,-35.56,101.6,-25.4
`)),b(x.ParsePatFile(`
*AR-RSHKE,AR-RSHKE
0, 0,0, 647.7,304.8, 152.4,-127,177.8,-76.2,228.6,-101.6
0, 152.4,12.7, 647.7,304.8, 127,-482.6,101.6,-152.4
0, 457.2,-19.05, 647.7,304.8, 76.2,-787.4
90, 0,0, 304.8,215.9, 292.1,-927.1
90, 152.4,0, 304.8,215.9, 285.75,-933.45
90, 279.4,0, 304.8,215.9, 266.7,-952.5
90, 457.2,-19.05, 304.8,215.9, 292.1,-927.1
90, 533.4,-19.05, 304.8,215.9, 292.1,-927.1
90, 762,0, 304.8,215.9, 279.4,-939.8
`)),b(x.ParsePatFile(`
*AR-SAND,AR-SAND
37.5, 0,0, 28.5242,39.8018, 0,-38.608,0,-43.18,0,-41.275
7.5, 0,0, 53.9242,65.2018, 0,-20.828,0,-34.798,0,-13.335
-32.5, -31.242,0, 66.6344,42.6212, 0,-12.7,0,-45.72,0,-59.69
-42.5, -31.242,0, 41.2344,68.0212, 0,-6.35,0,-29.972,0,-34.29
`)),b(x.ParsePatFile(`
*BARBWIRE,BARBWIRE
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
315,7.62,14.224,17.960512212,17.960512212,0.359210356,-35.561814322
288.434949,6.604,17.272,56.225296744,8.032185358,3.212874194,-77.10897837
158.198591,7.874,16.764,80.18324705,4.716661636,1.36783191,-135.415354264
116.565051,8.128,16.256,34.077676066,11.35922544,0.567961272,-56.22816542
116.565051,8.636,15.24,34.077676066,11.35922544,1.135922544,-55.660204148
111.801409,11.176,9.906,56.599939124,4.716661636,1.36783191,-135.415354264
156.801409,12.954,9.144,136.74251925,3.335183322,1.934406342,-191.506230398
289.653824,11.684,12.7,297.294468148,1.708588912,3.775981526,-373.822164724
194.036243,7.874,9.144,80.085263502,6.160405002,1.047268924,-103.679614078
251.565051,8.128,9.906,24.09655582,8.032185358,0.803218612,-79.518633952
254.054604,8.636,11.684,104.668749768,3.488958224,1.84914794,-183.065643266
74.744881,8.636,11.684,104.703186326,2.22772732,2.896045516,-286.708512434
135,9.144,11.176,17.960512212,17.960512212,0.718420458,-35.202603966
180,9.906,11.176,0,25.4,0.762,-24.638
270,9.906,11.43,0,25.4,0.254,-25.146
74.054604,9.906,11.43,104.668749768,3.488958224,3.69829588,-181.216495326
161.565051,10.668,11.176,24.09655582,8.032185358,0.803218612,-79.518633952
198.434949,11.43,11.43,56.225296744,8.032185358,0.803218612,-79.518633952
258.231711,12.7,17.526,129.51095129,1.03608759,6.226886454,-616.461767582
21.801409,11.43,17.018,56.599939124,4.716661636,1.36783191,-135.415354264
75.963757,10.922,14.986,24.6416195,6.160405002,2.094537594,-102.632345154
341.565051,10.16,15.24,24.09655582,8.032185358,0.803218612,-79.518633952
45,9.398,14.478,17.960512212,17.960512212,1.077630814,-34.843393864
288.434949,9.144,15.24,56.225296744,8.032185358,0.803218612,-79.518633952
0,8.636,15.24,0,25.4,0.508,-24.892
26.565051,8.128,14.986,34.077676066,11.35922544,0.567961272,-56.22816542
78.231711,6.858,8.89,129.51095129,1.03608759,6.226886454,-616.461767582
4.085617,19.812,12.192,331.17053781,1.80967507,3.565059926,-352.940928864
0,17.526,12.192,0,25.4,2.286,-23.114
354.289407,14.986,12.446,25.273944626,2.527394488,2.552668504,-252.714172244
356.185925,11.938,13.97,25.343743064,1.689582854,3.818457184,-378.027270614
351.469234,20.32,13.97,179.600730968,1.255949228,5.136831992,-508.546377622
0,16.764,13.97,0,25.4,3.556,-21.844
14.036243,11.684,12.7,80.085263502,6.160405002,5.236344112,-99.490538636
189.865807,17.78,12.954,438.470633344,1.088016366,5.92968969,-587.039280834
180,20.32,12.954,0,25.4,2.54,-22.86
171.469234,25.4,12.192,179.600730968,1.255949228,5.136831992,-508.546377622
186.115504,25.4,14.224,230.005013954,0.901980416,3.973724844,-711.296769428
5.52754,3.499555612,13.546666582,255.265537982,0.815544724,4.394880466,-786.683623734
3.691386,0,12.192,381.844852514,0.817654956,3.84896106,-785.188047096
348.310631,0,13.208,129.51225558,0.85769704,7.522003244,-744.678315822
348.690068,0,14.224,24.906749272,4.981349956,7.770905718,-121.744189836
`)),b(x.ParsePatFile(`
*BLOCKS-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,7.874,16.764,25.4,25.4,5.588,-19.812
180,2.032,2.286,0,25.4,14.478,-10.922
270,2.032,2.286,25.4,25.4,5.334,-20.066
180,2.032,22.352,0,25.4,14.478,-10.922
270,12.954,2.286,25.4,25.4,5.334,-20.066
270,22.606,8.128,25.4,25.4,5.08,-20.32
0,12.446,8.128,0,25.4,10.16,-15.24
90,12.446,3.048,25.4,25.4,5.08,-20.32
180,22.606,3.048,0,25.4,10.16,-15.24
270,17.526,21.336,25.4,25.4,12.192,-13.208
0,12.192,21.336,0,25.4,5.334,-20.066
90,12.192,9.144,25.4,25.4,12.192,-13.208
180,17.526,9.144,0,25.4,5.334,-20.066
270,3.048,0.762,25.4,25.4,8.382,-17.018
0,3.048,17.78,0,25.4,8.128,-17.272
270,11.176,0.762,25.4,25.4,8.382,-17.018
0,3.048,0.762,0,25.4,8.128,-17.272
270,11.43,17.018,25.4,25.4,6.096,-19.304
0,9.144,17.018,0,25.4,2.286,-23.114
90,9.144,10.922,25.4,25.4,6.096,-19.304
180,11.43,10.922,0,25.4,2.286,-23.114
270,11.43,10.16,25.4,25.4,8.382,-17.018
0,2.794,10.16,0,25.4,8.636,-16.764
90,2.794,1.778,25.4,25.4,8.382,-17.018
180,11.43,1.778,0,25.4,8.636,-16.764
270,22.606,10.414,25.4,25.4,1.524,-23.876
0,18.542,10.414,0,25.4,4.064,-21.336
90,18.542,8.89,25.4,25.4,1.524,-23.876
180,22.606,8.89,0,25.4,4.064,-21.336
180,1.778,10.16,0,25.4,3.556,-21.844
270,23.622,10.16,25.4,25.4,6.858,-18.542
180,1.778,3.302,0,25.4,3.556,-21.844
270,1.778,10.16,25.4,25.4,6.858,-18.542
180,2.032,20.574,0,25.4,8.636,-16.764
270,18.796,20.574,25.4,25.4,2.54,-22.86
180,2.032,18.034,0,25.4,8.636,-16.764
270,2.032,20.574,25.4,25.4,2.54,-22.86
180,7.874,16.764,0,25.4,14.986,-10.414
270,18.288,16.764,25.4,25.4,5.588,-19.812
180,7.874,11.176,0,25.4,14.986,-10.414
`)),b(x.ParsePatFile(`
*BLOCKS-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,8.128,4.572,0,25.4,12.446,-12.954
270,8.128,13.97,25.4,25.4,9.398,-16.002
0,9.398,24.384,0,25.4,10.668,-14.732
0,4.318,24.892,0,25.4,4.318,-21.082
90,20.828,0,25.4,25.4,3.81,-21.59
180,23.368,0,0,25.4,2.54,-22.86
180,8.128,13.97,0,25.4,12.446,-12.954
270,21.082,13.97,25.4,25.4,9.398,-16.002
180,3.302,20.32,0,25.4,4.572,-20.828
90,3.556,14.986,25.4,25.4,4.318,-21.082
270,3.302,3.81,25.4,25.4,8.89,-16.51
180,18.034,14.986,0,25.4,14.478,-10.922
270,23.368,3.81,25.4,25.4,3.81,-21.59
0,20.828,3.81,0,25.4,2.54,-22.86
270,18.034,19.304,25.4,25.4,4.318,-21.082
0,3.556,19.304,0,25.4,14.478,-10.922
180,2.032,14.986,0,25.4,8.128,-17.272
270,2.032,19.304,25.4,25.4,4.318,-21.082
180,3.302,3.81,0,25.4,4.572,-20.828
270,24.13,3.81,25.4,25.4,8.89,-16.51
90,4.572,20.32,25.4,25.4,3.302,-22.098
180,23.114,20.32,0,25.4,18.542,-6.858
180,2.032,19.304,0,25.4,8.128,-17.272
270,19.304,19.304,25.4,25.4,4.318,-21.082
270,8.636,3.81,25.4,25.4,4.318,-21.082
0,4.318,3.81,0,25.4,4.318,-21.082
270,23.114,23.622,25.4,25.4,3.302,-22.098
0,4.572,23.622,0,25.4,18.542,-6.858
0,9.398,13.97,0,25.4,10.668,-14.732
270,9.398,13.97,25.4,25.4,14.986,-10.414
270,4.318,3.81,25.4,25.4,4.318,-21.082
270,20.066,13.97,25.4,25.4,14.986,-10.414
`)),b(x.ParsePatFile(`
*BOX-OVERLAP
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,5.08,17.78,0,25.4,10.16,-15.24
90,5.08,5.08,25.4,25.4,15.24,-10.16
270,7.62,5.08,25.4,25.4,10.16,-15.24
180,5.08,7.62,0,25.4,10.16,-15.24
0,5.08,20.32,0,25.4,15.24,-10.16
180,20.32,5.08,0,25.4,15.24,-10.16
270,20.32,20.32,25.4,25.4,15.24,-10.16
270,17.78,5.08,25.4,25.4,10.16,-15.24
`)),b(x.ParsePatFile(`
*BOX,BOX
90, 0,0, 0,25.4
90, 6.35,0, 0,25.4
0, 0,0, 0,25.4, -6.35,6.35
0, 0,6.35, 0,25.4, -6.35,6.35
0, 0,12.7, 0,25.4, 6.35,-6.35
0, 0,19.05, 0,25.4, 6.35,-6.35
90, 12.7,0, 0,25.4, 6.35,-6.35
90, 19.05,0, 0,25.4, 6.35,-6.35
`)),b(x.ParsePatFile(`
*BOXJOIN-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
90,3.810000254,3.81,25.4,25.4,17.78,-7.62
0,3.810000254,21.59,0,25.4,17.78,-7.62
270,11.430000254,3.81,25.4,25.4,7.62,-17.78
180,3.810000254,11.43,0,25.4,7.62,-17.78
270,13.970000254,3.81,25.4,25.4,7.62,-17.78
180,21.590000254,3.81,0,25.4,17.78,-7.62
270,21.590000254,21.59,25.4,25.4,17.78,-7.62
180,3.810000254,13.97,0,25.4,7.62,-17.78
`)),b(x.ParsePatFile(`
*BOXJOIN-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
90,3.810000254,13.97,25.4,25.4,7.62,-17.78
270,21.590000254,21.59,25.4,25.4,7.62,-17.78
0,13.970000254,21.59,0,25.4,7.62,-17.78
180,3.810000254,13.97,0,25.4,7.62,-17.78
90,3.810000254,3.81,25.4,25.4,7.62,-17.78
180,11.430000254,3.81,0,25.4,7.62,-17.78
180,3.810000254,11.43,0,25.4,7.62,-17.78
180,21.590000254,3.81,0,25.4,7.62,-17.78
270,21.590000254,11.43,25.4,25.4,7.62,-17.78
270,11.430000254,3.81,25.4,25.4,7.62,-17.78
270,13.970000254,3.81,25.4,25.4,7.62,-17.78
0,3.810000254,21.59,0,25.4,7.62,-17.78
`)),b(x.ParsePatFile(`
*BRASS,BRASS
0, 0,0, 0,6.35
0, 0,3.175, 0,6.35, 3.175,-1.5875
`)),b(x.ParsePatFile(`
*BRICK,BRICK
0, 0,0, 0,6.35
90, 0,0, 0,12.7, 6.35,-6.35
90, 6.35,0, 0,12.7, -6.35,6.35
`)),b(x.ParsePatFile(`
*BRSTONE,BRSTONE
0, 0,0, 0,8.382
90, 22.86,0, 8.382,12.7, 8.382,-8.382
90, 20.32,0, 8.382,12.7, 8.382,-8.382
0, 22.86,1.397, 12.7,8.382, -22.86,2.54
0, 22.86,2.794, 12.7,8.382, -22.86,2.54
0, 22.86,4.191, 12.7,8.382, -22.86,2.54
0, 22.86,5.588, 12.7,8.382, -22.86,2.54
0, 22.86,6.985, 12.7,8.382, -22.86,2.54
`)),b(x.ParsePatFile(`
*BUBBLES-01,BUBBLES-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
0,1.4976856,0.4251706,0,25.4,0,-25.4
0,1.5807944,0.8431022,0,25.4,0,-25.4
0,1.7177766,1.2465812,0,25.4,0,-25.4
0,1.9062192,1.6287242,0,25.4,0,-25.4
0,2.1429472,1.9830034,0,25.4,0,-25.4
0,2.4238966,2.3033736,0,25.4,0,-25.4
0,2.7442414,2.584323,0,25.4,0,-25.4
0,3.098546,2.821051,0,25.4,0,-25.4
0,3.480689,3.0094936,0,25.4,0,-25.4
0,3.884168,3.1464504,0,25.4,0,-25.4
0,4.3020742,3.2295846,0,25.4,0,-25.4
0,4.7272702,3.2574484,0,25.4,0,-25.4
0,5.1524408,3.2295846,0,25.4,0,-25.4
0,5.570347,3.1464504,0,25.4,0,-25.4
0,5.973826,3.0094936,0,25.4,0,-25.4
0,6.3559944,2.821051,0,25.4,0,-25.4
0,6.7102736,2.584323,0,25.4,0,-25.4
0,7.0306184,2.3033736,0,25.4,0,-25.4
0,7.3115678,1.9830034,0,25.4,0,-25.4
0,7.5482958,1.6287242,0,25.4,0,-25.4
0,7.7367638,1.2465812,0,25.4,0,-25.4
0,7.8737206,0.8431022,0,25.4,0,-25.4
0,7.9568548,0.4251706,0,25.4,0,-25.4
0,3.0482032,5.5942992,0,25.4,0,-25.4
0,2.9839412,5.1610768,0,25.4,0,-25.4
0,2.8775152,4.7362618,0,25.4,0,-25.4
0,2.729992,4.3239182,0,25.4,0,-25.4
0,2.5427432,3.9280338,0,25.4,0,-25.4
0,2.3175976,3.5523932,0,25.4,0,-25.4
0,2.0567142,3.2006286,0,25.4,0,-25.4
0,1.7626076,2.8761436,0,25.4,0,-25.4
0,1.4380972,2.582037,0,25.4,0,-25.4
0,1.086358,2.3211536,0,25.4,0,-25.4
0,0.7107174,2.096008,0,25.4,0,-25.4
0,0.3148076,1.9087592,0,25.4,0,-25.4
0,0.3148076,10.154666,0,25.4,0,-25.4
0,0.7107174,9.9674172,0,25.4,0,-25.4
0,1.086358,9.7422716,0,25.4,0,-25.4
0,1.4380972,9.4813882,0,25.4,0,-25.4
0,1.7626076,9.1872816,0,25.4,0,-25.4
0,2.0567142,8.8627966,0,25.4,0,-25.4
0,2.3175976,8.511032,0,25.4,0,-25.4
0,2.5427432,8.1353914,0,25.4,0,-25.4
0,2.729992,7.7394816,0,25.4,0,-25.4
0,2.8775152,7.327138,0,25.4,0,-25.4
0,2.9839412,6.902323,0,25.4,0,-25.4
0,3.0482032,6.469126,0,25.4,0,-25.4
0,3.0696916,6.0317126,0,25.4,0,-25.4
0,18.7471304,9.4569026,0,25.4,0,-25.4
0,18.6083702,9.0603324,0,25.4,0,-25.4
0,18.3848248,8.70458,0,25.4,0,-25.4
0,18.0877464,8.4074762,0,25.4,0,-25.4
0,17.731994,8.1839562,0,25.4,0,-25.4
0,17.3354238,8.0451706,0,25.4,0,-25.4
0,16.9178986,7.9981298,0,25.4,0,-25.4
0,16.5003988,8.0451706,0,25.4,0,-25.4
0,16.1038286,8.1839562,0,25.4,0,-25.4
0,15.7480762,8.4074762,0,25.4,0,-25.4
0,15.4509724,8.70458,0,25.4,0,-25.4
0,15.2274524,9.0603324,0,25.4,0,-25.4
0,15.0886668,9.4569026,0,25.4,0,-25.4
0,15.041626,9.8744024,0,25.4,0,-25.4
0,15.0886668,10.2919276,0,25.4,0,-25.4
0,15.2274524,10.6884978,0,25.4,0,-25.4
0,15.4509724,11.0442502,0,25.4,0,-25.4
0,15.7480762,11.341354,0,25.4,0,-25.4
0,16.1038286,11.564874,0,25.4,0,-25.4
0,16.5003988,11.7036342,0,25.4,0,-25.4
0,16.9178986,11.750675,0,25.4,0,-25.4
0,17.3354238,11.7036342,0,25.4,0,-25.4
0,17.731994,11.564874,0,25.4,0,-25.4
0,18.0877464,11.341354,0,25.4,0,-25.4
0,18.3848248,11.0442502,0,25.4,0,-25.4
0,18.6083702,10.6884978,0,25.4,0,-25.4
0,18.7471304,10.2919276,0,25.4,0,-25.4
0,18.7941712,9.8744024,0,25.4,0,-25.4
0,21.2068664,21.1084414,0,25.4,0,-25.4
0,20.8647792,21.3569804,0,25.4,0,-25.4
0,20.5818486,21.6712292,0,25.4,0,-25.4
0,11.7541802,19.0603632,0,25.4,0,-25.4
0,11.6505482,18.6510676,0,25.4,0,-25.4
0,11.480927,18.264378,0,25.4,0,-25.4
0,11.2499902,17.9108862,0,25.4,0,-25.4
0,10.9640116,17.6002442,0,25.4,0,-25.4
0,10.6308144,17.3409102,0,25.4,0,-25.4
0,10.2594664,17.1399454,0,25.4,0,-25.4
0,9.8601022,17.0028362,0,25.4,0,-25.4
0,9.4436184,16.9333418,0,25.4,0,-25.4
0,9.0213688,16.9333418,0,25.4,0,-25.4
0,8.6049104,17.0028362,0,25.4,0,-25.4
0,8.2055462,17.1399454,0,25.4,0,-25.4
0,7.8341982,17.3409102,0,25.4,0,-25.4
0,7.5009756,17.6002442,0,25.4,0,-25.4
0,7.2150224,17.9108862,0,25.4,0,-25.4
0,6.9840602,18.264378,0,25.4,0,-25.4
0,6.8144644,18.6510676,0,25.4,0,-25.4
0,6.710807,19.0603632,0,25.4,0,-25.4
0,6.6759328,19.481165,0,25.4,0,-25.4
0,6.710807,19.9019668,0,25.4,0,-25.4
0,6.8144644,20.3112878,0,25.4,0,-25.4
0,6.9840602,20.697952,0,25.4,0,-25.4
0,7.2150224,21.0514438,0,25.4,0,-25.4
0,7.5009756,21.3620858,0,25.4,0,-25.4
0,7.8341982,21.6214452,0,25.4,0,-25.4
0,8.2055462,21.82241,0,25.4,0,-25.4
0,10.2594664,21.82241,0,25.4,0,-25.4
0,10.6308144,21.6214452,0,25.4,0,-25.4
0,10.9640116,21.3620858,0,25.4,0,-25.4
0,11.2499902,21.0514438,0,25.4,0,-25.4
0,11.480927,20.697952,0,25.4,0,-25.4
0,11.6505482,20.3112878,0,25.4,0,-25.4
0,11.7541802,19.9019668,0,25.4,0,-25.4
0,11.7890544,19.481165,0,25.4,0,-25.4
0,20.8583784,16.4692076,0,25.4,0,-25.4
0,20.7913224,16.0457896,0,25.4,0,-25.4
0,20.6803752,15.6317442,0,25.4,0,-25.4
0,20.5267306,15.2315418,0,25.4,0,-25.4
0,20.3321158,14.8495766,0,25.4,0,-25.4
0,20.0986644,14.490065,0,25.4,0,-25.4
0,19.828891,14.1569186,0,25.4,0,-25.4
0,19.5257674,13.853795,0,25.4,0,-25.4
0,19.192621,13.5840216,0,25.4,0,-25.4
0,18.8331094,13.3505448,0,25.4,0,-25.4
0,18.4511442,13.15593,0,25.4,0,-25.4
0,18.0509418,13.0023108,0,25.4,0,-25.4
0,17.636871,12.8913636,0,25.4,0,-25.4
0,17.2134784,12.8243076,0,25.4,0,-25.4
0,16.7853868,12.8018794,0,25.4,0,-25.4
0,16.3573206,12.8243076,0,25.4,0,-25.4
0,15.9339026,12.8913636,0,25.4,0,-25.4
0,15.5198572,13.0023108,0,25.4,0,-25.4
0,15.1196548,13.15593,0,25.4,0,-25.4
0,14.7376896,13.3505448,0,25.4,0,-25.4
0,14.378178,13.5840216,0,25.4,0,-25.4
0,14.0450316,13.853795,0,25.4,0,-25.4
0,13.741908,14.1569186,0,25.4,0,-25.4
0,13.4721346,14.490065,0,25.4,0,-25.4
0,13.2386578,14.8495766,0,25.4,0,-25.4
0,13.044043,15.2315418,0,25.4,0,-25.4
0,12.8904238,15.6317442,0,25.4,0,-25.4
0,12.7794766,16.0457896,0,25.4,0,-25.4
0,12.7124206,16.4692076,0,25.4,0,-25.4
0,12.6899924,16.8972738,0,25.4,0,-25.4
0,12.7124206,17.3253654,0,25.4,0,-25.4
0,12.7794766,17.748758,0,25.4,0,-25.4
0,12.8904238,18.1628288,0,25.4,0,-25.4
0,13.044043,18.5630312,0,25.4,0,-25.4
0,13.2386578,18.9449964,0,25.4,0,-25.4
0,13.4721346,19.304508,0,25.4,0,-25.4
0,13.741908,19.6376544,0,25.4,0,-25.4
0,14.0450316,19.9407526,0,25.4,0,-25.4
0,14.378178,20.2105514,0,25.4,0,-25.4
0,14.7376896,20.4440028,0,25.4,0,-25.4
0,15.1196548,20.6386176,0,25.4,0,-25.4
0,15.5198572,20.7922368,0,25.4,0,-25.4
0,15.9339026,20.9032094,0,25.4,0,-25.4
0,16.3573206,20.9702654,0,25.4,0,-25.4
0,16.7853868,20.9926936,0,25.4,0,-25.4
0,17.2134784,20.9702654,0,25.4,0,-25.4
0,17.636871,20.9032094,0,25.4,0,-25.4
0,18.0509418,20.7922368,0,25.4,0,-25.4
0,18.4511442,20.6386176,0,25.4,0,-25.4
0,18.8331094,20.4440028,0,25.4,0,-25.4
0,19.192621,20.2105514,0,25.4,0,-25.4
0,19.5257674,19.9407526,0,25.4,0,-25.4
0,19.828891,19.6376544,0,25.4,0,-25.4
0,20.0986644,19.304508,0,25.4,0,-25.4
0,20.3321158,18.9449964,0,25.4,0,-25.4
0,20.5267306,18.5630312,0,25.4,0,-25.4
0,20.6803752,18.1628288,0,25.4,0,-25.4
0,20.7913224,17.748758,0,25.4,0,-25.4
0,20.8583784,17.3253654,0,25.4,0,-25.4
0,20.8808066,16.8972738,0,25.4,0,-25.4
0,13.3174994,9.6961452,0,25.4,0,-25.4
0,13.2480558,9.2577158,0,25.4,0,-25.4
0,13.1331716,8.8289638,0,25.4,0,-25.4
0,12.9740914,8.4145628,0,25.4,0,-25.4
0,12.7725932,8.0190594,0,25.4,0,-25.4
0,12.530836,7.6467716,0,25.4,0,-25.4
0,12.2514868,7.3018142,0,25.4,0,-25.4
0,11.9375936,6.9879464,0,25.4,0,-25.4
0,11.5926362,6.7085972,0,25.4,0,-25.4
0,11.2203738,6.46684,0,25.4,0,-25.4
0,10.824845,6.2653164,0,25.4,0,-25.4
0,10.410444,6.1062362,0,25.4,0,-25.4
0,9.981692,5.991352,0,25.4,0,-25.4
0,9.5432626,5.9219084,0,25.4,0,-25.4
0,9.0999818,5.8986928,0,25.4,0,-25.4
0,8.6567264,5.9219084,0,25.4,0,-25.4
0,8.218297,5.991352,0,25.4,0,-25.4
0,7.7895196,6.1062362,0,25.4,0,-25.4
0,7.3751186,6.2653164,0,25.4,0,-25.4
0,6.9796152,6.46684,0,25.4,0,-25.4
0,6.6073528,6.7085972,0,25.4,0,-25.4
0,6.2623954,6.9879464,0,25.4,0,-25.4
0,5.9485022,7.3018142,0,25.4,0,-25.4
0,5.669153,7.6467716,0,25.4,0,-25.4
0,5.4273958,8.0190594,0,25.4,0,-25.4
0,5.2258722,8.4145628,0,25.4,0,-25.4
0,5.0668174,8.8289638,0,25.4,0,-25.4
0,4.9519332,9.2577158,0,25.4,0,-25.4
0,4.8824896,9.6961452,0,25.4,0,-25.4
0,4.8592486,10.139426,0,25.4,0,-25.4
0,4.8824896,10.5827068,0,25.4,0,-25.4
0,4.9519332,11.0211362,0,25.4,0,-25.4
0,5.0668174,11.4498882,0,25.4,0,-25.4
0,5.2258722,11.8642892,0,25.4,0,-25.4
0,5.4273958,12.2597926,0,25.4,0,-25.4
0,5.669153,12.6320804,0,25.4,0,-25.4
0,5.9485022,12.9770378,0,25.4,0,-25.4
0,6.2623954,13.2909056,0,25.4,0,-25.4
0,6.6073528,13.5702548,0,25.4,0,-25.4
0,6.9796152,13.812012,0,25.4,0,-25.4
0,7.3751186,14.0135356,0,25.4,0,-25.4
0,7.7895196,14.1726158,0,25.4,0,-25.4
0,8.218297,14.2875,0,25.4,0,-25.4
0,8.6567264,14.3569436,0,25.4,0,-25.4
0,9.0999818,14.3801592,0,25.4,0,-25.4
0,9.5432626,14.3569436,0,25.4,0,-25.4
0,9.981692,14.2875,0,25.4,0,-25.4
0,10.410444,14.1726158,0,25.4,0,-25.4
0,10.824845,14.0135356,0,25.4,0,-25.4
0,11.2203738,13.812012,0,25.4,0,-25.4
0,11.5926362,13.5702548,0,25.4,0,-25.4
0,11.9375936,13.2909056,0,25.4,0,-25.4
0,12.2514868,12.9770378,0,25.4,0,-25.4
0,12.530836,12.6320804,0,25.4,0,-25.4
0,12.7725932,12.2597926,0,25.4,0,-25.4
0,12.9740914,11.8642892,0,25.4,0,-25.4
0,13.1331716,11.4498882,0,25.4,0,-25.4
0,13.2480558,11.0211362,0,25.4,0,-25.4
0,13.3174994,10.5827068,0,25.4,0,-25.4
0,13.3407404,10.139426,0,25.4,0,-25.4
0,21.5277192,2.3211536,0,25.4,0,-25.4
0,21.1759546,2.582037,0,25.4,0,-25.4
0,20.8514442,2.8761436,0,25.4,0,-25.4
0,20.557363,3.2006286,0,25.4,0,-25.4
0,20.2964796,3.5523932,0,25.4,0,-25.4
0,20.0713086,3.9280338,0,25.4,0,-25.4
0,19.8840852,4.3239182,0,25.4,0,-25.4
0,19.7365366,4.7362618,0,25.4,0,-25.4
0,19.630136,5.1610768,0,25.4,0,-25.4
0,19.565874,5.5942992,0,25.4,0,-25.4
0,19.5443856,6.0317126,0,25.4,0,-25.4
0,19.565874,6.469126,0,25.4,0,-25.4
0,19.630136,6.902323,0,25.4,0,-25.4
0,19.7365366,7.327138,0,25.4,0,-25.4
0,19.8840852,7.7394816,0,25.4,0,-25.4
0,20.0713086,8.1353914,0,25.4,0,-25.4
0,20.2964796,8.511032,0,25.4,0,-25.4
0,20.557363,8.8627966,0,25.4,0,-25.4
0,20.8514442,9.1872816,0,25.4,0,-25.4
0,21.1759546,9.4813882,0,25.4,0,-25.4
0,21.5277192,9.7422716,0,25.4,0,-25.4
0,6.1278008,16.064738,0,25.4,0,-25.4
0,6.0612782,15.6162756,0,25.4,0,-25.4
0,5.9511438,15.1765,0,25.4,0,-25.4
0,5.7983882,14.749653,0,25.4,0,-25.4
0,5.6045608,14.339824,0,25.4,0,-25.4
0,5.3714904,13.95095,0,25.4,0,-25.4
0,5.1014122,13.5868156,0,25.4,0,-25.4
0,4.7969678,13.2509006,0,25.4,0,-25.4
0,4.4610528,12.9464308,0,25.4,0,-25.4
0,4.0969184,12.676378,0,25.4,0,-25.4
0,3.7080444,12.4433076,0,25.4,0,-25.4
0,3.2982154,12.2494548,0,25.4,0,-25.4
0,2.8713684,12.0967246,0,25.4,0,-25.4
0,2.4315928,11.9865648,0,25.4,0,-25.4
0,1.9831304,11.9200422,0,25.4,0,-25.4
0,1.5303246,11.8977918,0,25.4,0,-25.4
0,1.0774934,11.9200422,0,25.4,0,-25.4
0,0.6290564,11.9865648,0,25.4,0,-25.4
0,0.1892808,12.0967246,0,25.4,0,-25.4
0,0.1892808,20.938363,0,25.4,0,-25.4
0,0.6290564,21.0485228,0,25.4,0,-25.4
0,1.0774934,21.1150454,0,25.4,0,-25.4
0,1.5303246,21.1372958,0,25.4,0,-25.4
0,1.9831304,21.1150454,0,25.4,0,-25.4
0,2.4315928,21.0485228,0,25.4,0,-25.4
0,2.8713684,20.938363,0,25.4,0,-25.4
0,3.2982154,20.7856328,0,25.4,0,-25.4
0,3.7080444,20.59178,0,25.4,0,-25.4
0,4.0969184,20.3587096,0,25.4,0,-25.4
0,4.4610528,20.0886568,0,25.4,0,-25.4
0,4.7969678,19.784187,0,25.4,0,-25.4
0,5.1014122,19.448272,0,25.4,0,-25.4
0,5.3714904,19.0841376,0,25.4,0,-25.4
0,5.6045608,18.6952636,0,25.4,0,-25.4
0,5.7983882,18.2854346,0,25.4,0,-25.4
0,5.9511438,17.8585876,0,25.4,0,-25.4
0,6.0612782,17.418812,0,25.4,0,-25.4
0,6.1278008,16.9703496,0,25.4,0,-25.4
0,6.1500512,16.5175438,0,25.4,0,-25.4
0,19.5946268,1.221359,0,25.4,0,-25.4
0,19.5242688,0.7469886,0,25.4,0,-25.4
0,19.4077336,0.281813,0,25.4,0,-25.4
0,10.055352,0.281813,0,25.4,0,-25.4
0,9.9388168,0.7469886,0,25.4,0,-25.4
0,9.8684588,1.221359,0,25.4,0,-25.4
0,9.844913,1.7003268,0,25.4,0,-25.4
0,9.8684588,2.1792946,0,25.4,0,-25.4
0,9.9388168,2.653665,0,25.4,0,-25.4
0,10.055352,3.1188406,0,25.4,0,-25.4
0,10.216896,3.570351,0,25.4,0,-25.4
0,10.4219248,4.0038528,0,25.4,0,-25.4
0,10.6684572,4.4151804,0,25.4,0,-25.4
0,10.954131,4.800346,0,25.4,0,-25.4
0,11.2761776,5.155692,0,25.4,0,-25.4
0,11.6314982,5.4777386,0,25.4,0,-25.4
0,12.0166892,5.763387,0,25.4,0,-25.4
0,12.4280168,6.0099448,0,25.4,0,-25.4
0,12.8615186,6.2149736,0,25.4,0,-25.4
0,13.313029,6.3765176,0,25.4,0,-25.4
0,13.7782046,6.4930528,0,25.4,0,-25.4
0,14.252575,6.5634108,0,25.4,0,-25.4
0,14.7315428,6.5869312,0,25.4,0,-25.4
0,15.2105106,6.5634108,0,25.4,0,-25.4
0,15.684881,6.4930528,0,25.4,0,-25.4
0,16.1500566,6.3765176,0,25.4,0,-25.4
0,16.601567,6.2149736,0,25.4,0,-25.4
0,17.0350688,6.0099448,0,25.4,0,-25.4
0,17.4463964,5.763387,0,25.4,0,-25.4
0,17.8315874,5.4777386,0,25.4,0,-25.4
0,18.186908,5.155692,0,25.4,0,-25.4
0,18.5089546,4.800346,0,25.4,0,-25.4
0,18.794603,4.4151804,0,25.4,0,-25.4
0,19.0411608,4.0038528,0,25.4,0,-25.4
0,19.2461896,3.570351,0,25.4,0,-25.4
0,19.4077336,3.1188406,0,25.4,0,-25.4
0,19.5242688,2.653665,0,25.4,0,-25.4
0,19.5946268,2.1792946,0,25.4,0,-25.4
0,19.6181472,1.7003268,0,25.4,0,-25.4
0,25.1624084,12.2494548,0,25.4,0,-25.4
0,24.7525794,12.4433076,0,25.4,0,-25.4
0,24.3637308,12.676378,0,25.4,0,-25.4
0,23.9995964,12.9464308,0,25.4,0,-25.4
0,23.663656,13.2509006,0,25.4,0,-25.4
0,23.3592116,13.5868156,0,25.4,0,-25.4
0,23.0891334,13.95095,0,25.4,0,-25.4
0,22.856063,14.339824,0,25.4,0,-25.4
0,22.6622356,14.749653,0,25.4,0,-25.4
0,22.5095054,15.1765,0,25.4,0,-25.4
0,22.3993456,15.6162756,0,25.4,0,-25.4
0,22.332823,16.064738,0,25.4,0,-25.4
0,22.3105726,16.5175438,0,25.4,0,-25.4
0,22.332823,16.9703496,0,25.4,0,-25.4
0,22.3993456,17.418812,0,25.4,0,-25.4
0,22.5095054,17.8585876,0,25.4,0,-25.4
0,22.6622356,18.2854346,0,25.4,0,-25.4
0,22.856063,18.6952636,0,25.4,0,-25.4
0,23.0891334,19.0841376,0,25.4,0,-25.4
0,23.3592116,19.448272,0,25.4,0,-25.4
0,23.663656,19.784187,0,25.4,0,-25.4
0,23.9995964,20.0886568,0,25.4,0,-25.4
0,24.3637308,20.3587096,0,25.4,0,-25.4
0,24.7525794,20.59178,0,25.4,0,-25.4
0,25.1624084,20.7856328,0,25.4,0,-25.4
0,24.0659412,22.037421,0,25.4,0,-25.4
0,23.854537,21.6712292,0,25.4,0,-25.4
0,23.571581,21.3569804,0,25.4,0,-25.4
0,23.2294938,21.1084414,0,25.4,0,-25.4
0,22.8432106,20.936458,0,25.4,0,-25.4
0,22.429597,20.8485486,0,25.4,0,-25.4
0,22.0067632,20.8485486,0,25.4,0,-25.4
0,21.5931496,20.936458,0,25.4,0,-25.4
0,20.370419,22.037421,0,25.4,0,-25.4
0,25.302464,1.7612106,0,25.4,0,-25.4
0,24.877649,1.65481,0,25.4,0,-25.4
0,24.444452,1.590548,0,25.4,0,-25.4
0,24.0070386,1.5690596,0,25.4,0,-25.4
0,23.5696252,1.590548,0,25.4,0,-25.4
0,23.1364028,1.65481,0,25.4,0,-25.4
0,22.7115878,1.7612106,0,25.4,0,-25.4
0,22.2992442,1.9087592,0,25.4,0,-25.4
0,21.9033598,2.096008,0,25.4,0,-25.4
0,21.9033598,9.9674172,0,25.4,0,-25.4
0,22.2992442,10.154666,0,25.4,0,-25.4
0,22.7115878,10.3022146,0,25.4,0,-25.4
0,23.1364028,10.4086152,0,25.4,0,-25.4
0,23.5696252,10.4728772,0,25.4,0,-25.4
0,24.0070386,10.4943656,0,25.4,0,-25.4
0,24.444452,10.4728772,0,25.4,0,-25.4
0,24.877649,10.4086152,0,25.4,0,-25.4
0,25.302464,10.3022146,0,25.4,0,-25.4
0,19.2461896,25.2303026,0,25.4,0,-25.4
0,19.0411608,24.7967754,0,25.4,0,-25.4
0,18.794603,24.3854732,0,25.4,0,-25.4
0,18.5089546,24.0002822,0,25.4,0,-25.4
0,18.186908,23.6449616,0,25.4,0,-25.4
0,17.8315874,23.322915,0,25.4,0,-25.4
0,17.4463964,23.0372412,0,25.4,0,-25.4
0,17.0350688,22.7907088,0,25.4,0,-25.4
0,16.601567,22.58568,0,25.4,0,-25.4
0,16.1500566,22.4241106,0,25.4,0,-25.4
0,15.684881,22.3076008,0,25.4,0,-25.4
0,15.2105106,22.2372428,0,25.4,0,-25.4
0,14.7315428,22.213697,0,25.4,0,-25.4
0,14.252575,22.2372428,0,25.4,0,-25.4
0,13.7782046,22.3076008,0,25.4,0,-25.4
0,13.313029,22.4241106,0,25.4,0,-25.4
0,12.8615186,22.58568,0,25.4,0,-25.4
0,12.4280168,22.7907088,0,25.4,0,-25.4
0,12.0166892,23.0372412,0,25.4,0,-25.4
0,11.6314982,23.322915,0,25.4,0,-25.4
0,11.2761776,23.6449616,0,25.4,0,-25.4
0,10.954131,24.0002822,0,25.4,0,-25.4
0,10.6684572,24.3854732,0,25.4,0,-25.4
0,10.4219248,24.7967754,0,25.4,0,-25.4
0,10.216896,25.2303026,0,25.4,0,-25.4
0,20.2397614,22.4395792,0,25.4,0,-25.4
0,20.1955654,22.8601016,0,25.4,0,-25.4
0,20.2397614,23.280624,0,25.4,0,-25.4
0,20.370419,23.6827822,0,25.4,0,-25.4
0,20.5818486,24.048974,0,25.4,0,-25.4
0,20.8647792,24.3631974,0,25.4,0,-25.4
0,21.2068664,24.6117364,0,25.4,0,-25.4
0,8.6049104,21.9594938,0,25.4,0,-25.4
0,9.0213688,22.0289882,0,25.4,0,-25.4
0,9.4436184,22.0289882,0,25.4,0,-25.4
0,9.8601022,21.9594938,0,25.4,0,-25.4
0,7.9568548,24.9748294,0,25.4,0,-25.4
0,7.8737206,24.5568978,0,25.4,0,-25.4
0,7.7367638,24.1534188,0,25.4,0,-25.4
0,7.5482958,23.7712758,0,25.4,0,-25.4
0,7.3115678,23.4169966,0,25.4,0,-25.4
0,7.0306184,23.0966264,0,25.4,0,-25.4
0,6.7102736,22.815677,0,25.4,0,-25.4
0,6.3559944,22.578949,0,25.4,0,-25.4
0,5.973826,22.3905064,0,25.4,0,-25.4
0,5.570347,22.2535496,0,25.4,0,-25.4
0,5.1524408,22.1704154,0,25.4,0,-25.4
0,4.7272702,22.1425516,0,25.4,0,-25.4
0,4.3020742,22.1704154,0,25.4,0,-25.4
0,3.884168,22.2535496,0,25.4,0,-25.4
0,3.480689,22.3905064,0,25.4,0,-25.4
0,3.098546,22.578949,0,25.4,0,-25.4
0,2.7442414,22.815677,0,25.4,0,-25.4
0,2.4238966,23.0966264,0,25.4,0,-25.4
0,2.1429472,23.4169966,0,25.4,0,-25.4
0,1.9062192,23.7712758,0,25.4,0,-25.4
0,1.7177766,24.1534188,0,25.4,0,-25.4
0,1.5807944,24.5568978,0,25.4,0,-25.4
0,1.4976856,24.9748294,0,25.4,0,-25.4
0,1.4697964,25.4,0,25.4,0,-25.4
0,7.9847186,25.4,0,25.4,0,-25.4
0,24.1966242,22.4395792,0,25.4,0,-25.4
0,21.5931496,24.7837452,0,25.4,0,-25.4
0,22.0067632,24.8716546,0,25.4,0,-25.4
0,22.429597,24.8716546,0,25.4,0,-25.4
0,22.8432106,24.7837452,0,25.4,0,-25.4
0,23.2294938,24.6117364,0,25.4,0,-25.4
0,23.571581,24.3631974,0,25.4,0,-25.4
0,23.854537,24.048974,0,25.4,0,-25.4
0,24.0659412,23.6827822,0,25.4,0,-25.4
0,24.1966242,23.280624,0,25.4,0,-25.4
0,24.2408202,22.8601016,0,25.4,0,-25.4
`)),b(x.ParsePatFile(`
*BUBBLES-02,BUBBLES-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
0,0.315722,3.5481006,0,25.4,0,-25.4
0,0.1191006,3.162173,0,25.4,0,-25.4
0,0.1191006,4.7896018,0,25.4,0,-25.4
0,0.315722,4.4036742,0,25.4,0,-25.4
0,0.3834892,3.9758874,0,25.4,0,-25.4
0,0.9946386,13.9859512,0,25.4,0,-25.4
0,0.840232,13.5788146,0,25.4,0,-25.4
0,0.5928614,13.220446,0,25.4,0,-25.4
0,0.2669286,12.9316988,0,25.4,0,-25.4
0,0.2669286,15.9047688,0,25.4,0,-25.4
0,0.5928614,15.6160216,0,25.4,0,-25.4
0,0.840232,15.257653,0,25.4,0,-25.4
0,0.9946386,14.8505164,0,25.4,0,-25.4
0,1.0471404,14.4182338,0,25.4,0,-25.4
0,0.321437,1.5549118,0,25.4,0,-25.4
0,0.7453122,1.6269208,0,25.4,0,-25.4
0,1.1745976,1.6510254,0,25.4,0,-25.4
0,1.6039084,1.6269208,0,25.4,0,-25.4
0,2.0277836,1.5549118,0,25.4,0,-25.4
0,2.44094,1.435862,0,25.4,0,-25.4
0,2.838196,1.2713208,0,25.4,0,-25.4
0,3.214497,1.0633456,0,25.4,0,-25.4
0,3.5651694,0.8145526,0,25.4,0,-25.4
0,3.8857682,0.5280406,0,25.4,0,-25.4
0,4.1722802,0.2074418,0,25.4,0,-25.4
0,5.3785008,15.8337504,0,25.4,0,-25.4
0,5.1644804,15.4630628,0,25.4,0,-25.4
0,4.8365664,15.1879046,0,25.4,0,-25.4
0,4.434332,15.041499,0,25.4,0,-25.4
0,4.0062658,15.041499,0,25.4,0,-25.4
0,3.6040314,15.1879046,0,25.4,0,-25.4
0,3.2761174,15.4630628,0,25.4,0,-25.4
0,3.062097,15.8337504,0,25.4,0,-25.4
0,2.9877512,16.2553142,0,25.4,0,-25.4
0,3.062097,16.676878,0,25.4,0,-25.4
0,3.2761174,17.0475656,0,25.4,0,-25.4
0,3.6040314,17.3227238,0,25.4,0,-25.4
0,4.0062658,17.4691294,0,25.4,0,-25.4
0,4.434332,17.4691294,0,25.4,0,-25.4
0,4.8365664,17.3227238,0,25.4,0,-25.4
0,5.1644804,17.0475656,0,25.4,0,-25.4
0,5.3785008,16.676878,0,25.4,0,-25.4
0,5.4528212,16.2553142,0,25.4,0,-25.4
0,1.6039084,19.4068192,0,25.4,0,-25.4
0,1.1745976,19.3827146,0,25.4,0,-25.4
0,0.7453122,19.4068192,0,25.4,0,-25.4
0,8.07212,6.3135002,0,25.4,0,-25.4
0,7.9904082,5.9026552,0,25.4,0,-25.4
0,7.8557628,5.5059834,0,25.4,0,-25.4
0,7.6704952,5.130292,0,25.4,0,-25.4
0,7.437755,4.7820072,0,25.4,0,-25.4
0,7.1615554,4.4670472,0,25.4,0,-25.4
0,6.8466208,4.1908476,0,25.4,0,-25.4
0,6.4983106,3.9581328,0,25.4,0,-25.4
0,6.1226192,3.7728652,0,25.4,0,-25.4
0,5.7259474,3.6382198,0,25.4,0,-25.4
0,5.3151024,3.5564826,0,25.4,0,-25.4
0,4.89712,3.5291014,0,25.4,0,-25.4
0,4.4791122,3.5564826,0,25.4,0,-25.4
0,4.0682672,3.6382198,0,25.4,0,-25.4
0,3.6715954,3.7728652,0,25.4,0,-25.4
0,3.295904,3.9581328,0,25.4,0,-25.4
0,2.9475938,4.1908476,0,25.4,0,-25.4
0,2.6326592,4.4670472,0,25.4,0,-25.4
0,2.3564596,4.7820072,0,25.4,0,-25.4
0,2.1237448,5.130292,0,25.4,0,-25.4
0,1.9384772,5.5059834,0,25.4,0,-25.4
0,1.8038064,5.9026552,0,25.4,0,-25.4
0,1.7220946,6.3135002,0,25.4,0,-25.4
0,1.694688,6.731508,0,25.4,0,-25.4
0,1.7220946,7.1495158,0,25.4,0,-25.4
0,1.8038064,7.5603608,0,25.4,0,-25.4
0,1.9384772,7.9570072,0,25.4,0,-25.4
0,2.1237448,8.332724,0,25.4,0,-25.4
0,2.3564596,8.6810088,0,25.4,0,-25.4
0,2.6326592,8.9959434,0,25.4,0,-25.4
0,2.9475938,9.272143,0,25.4,0,-25.4
0,3.295904,9.5048832,0,25.4,0,-25.4
0,3.6715954,9.6901508,0,25.4,0,-25.4
0,4.0682672,9.8247962,0,25.4,0,-25.4
0,4.4791122,9.9065334,0,25.4,0,-25.4
0,4.89712,9.9339146,0,25.4,0,-25.4
0,5.3151024,9.9065334,0,25.4,0,-25.4
0,5.7259474,9.8247962,0,25.4,0,-25.4
0,6.1226192,9.6901508,0,25.4,0,-25.4
0,6.4983106,9.5048832,0,25.4,0,-25.4
0,6.8466208,9.272143,0,25.4,0,-25.4
0,7.1615554,8.9959434,0,25.4,0,-25.4
0,7.437755,8.6810088,0,25.4,0,-25.4
0,7.6704952,8.332724,0,25.4,0,-25.4
0,7.8557628,7.9570072,0,25.4,0,-25.4
0,7.9904082,7.5603608,0,25.4,0,-25.4
0,8.07212,7.1495158,0,25.4,0,-25.4
0,8.0995266,6.731508,0,25.4,0,-25.4
0,18.0404516,13.0813048,0,25.4,0,-25.4
0,17.9789836,12.6669292,0,25.4,0,-25.4
0,17.8771804,12.2606054,0,25.4,0,-25.4
0,17.736058,11.8661942,0,25.4,0,-25.4
0,17.5569626,11.4875056,0,25.4,0,-25.4
0,17.3416214,11.1282226,0,25.4,0,-25.4
0,17.0920664,10.7917488,0,25.4,0,-25.4
0,16.8107614,10.4813862,0,25.4,0,-25.4
0,16.5003734,10.2000558,0,25.4,0,-25.4
0,16.163925,9.9505262,0,25.4,0,-25.4
0,15.8046166,9.7351596,0,25.4,0,-25.4
0,15.4259534,9.5560642,0,25.4,0,-25.4
0,15.0315422,9.4149418,0,25.4,0,-25.4
0,14.625193,9.313164,0,25.4,0,-25.4
0,14.2108428,9.251696,0,25.4,0,-25.4
0,13.792454,9.2311474,0,25.4,0,-25.4
0,13.3740652,9.251696,0,25.4,0,-25.4
0,12.9596896,9.313164,0,25.4,0,-25.4
0,12.5533404,9.4149418,0,25.4,0,-25.4
0,12.1589292,9.5560642,0,25.4,0,-25.4
0,11.780266,9.7351596,0,25.4,0,-25.4
0,11.4209576,9.9505262,0,25.4,0,-25.4
0,11.0845092,10.2000558,0,25.4,0,-25.4
0,10.7741212,10.4813862,0,25.4,0,-25.4
0,10.4928162,10.7917488,0,25.4,0,-25.4
0,10.2432866,11.1282226,0,25.4,0,-25.4
0,10.02792,11.4875056,0,25.4,0,-25.4
0,9.8488246,11.8661942,0,25.4,0,-25.4
0,9.7077022,12.2606054,0,25.4,0,-25.4
0,9.6059244,12.6669292,0,25.4,0,-25.4
0,9.5444564,13.0813048,0,25.4,0,-25.4
0,9.5239078,13.4996936,0,25.4,0,-25.4
0,9.5444564,13.9180824,0,25.4,0,-25.4
0,9.6059244,14.332458,0,25.4,0,-25.4
0,9.7077022,14.7387818,0,25.4,0,-25.4
0,9.8488246,15.133193,0,25.4,0,-25.4
0,10.02792,15.5118816,0,25.4,0,-25.4
0,10.2432866,15.8711646,0,25.4,0,-25.4
0,10.4928162,16.2076384,0,25.4,0,-25.4
0,10.7741212,16.518001,0,25.4,0,-25.4
0,11.0845092,16.7993314,0,25.4,0,-25.4
0,11.4209576,17.048861,0,25.4,0,-25.4
0,11.780266,17.2642276,0,25.4,0,-25.4
0,12.1589292,17.443323,0,25.4,0,-25.4
0,12.5533404,17.5844454,0,25.4,0,-25.4
0,12.9596896,17.6862232,0,25.4,0,-25.4
0,13.3740652,17.7476912,0,25.4,0,-25.4
0,13.792454,17.7682398,0,25.4,0,-25.4
0,14.2108428,17.7476912,0,25.4,0,-25.4
0,14.625193,17.6862232,0,25.4,0,-25.4
0,15.0315422,17.5844454,0,25.4,0,-25.4
0,15.4259534,17.443323,0,25.4,0,-25.4
0,15.8046166,17.2642276,0,25.4,0,-25.4
0,16.163925,17.048861,0,25.4,0,-25.4
0,16.5003734,16.7993314,0,25.4,0,-25.4
0,16.8107614,16.518001,0,25.4,0,-25.4
0,17.0920664,16.2076384,0,25.4,0,-25.4
0,17.3416214,15.8711646,0,25.4,0,-25.4
0,17.5569626,15.5118816,0,25.4,0,-25.4
0,17.736058,15.133193,0,25.4,0,-25.4
0,17.8771804,14.7387818,0,25.4,0,-25.4
0,17.9789836,14.332458,0,25.4,0,-25.4
0,18.0404516,13.9180824,0,25.4,0,-25.4
0,18.0610002,13.4996936,0,25.4,0,-25.4
0,8.9792048,0.3298444,0,25.4,0,-25.4
0,8.9318846,0.7497064,0,25.4,0,-25.4
0,8.9160858,1.1719306,0,25.4,0,-25.4
0,8.9318846,1.5941294,0,25.4,0,-25.4
0,8.9792048,2.0139914,0,25.4,0,-25.4
0,9.0577416,2.429129,0,25.4,0,-25.4
0,9.1670886,2.8372562,0,25.4,0,-25.4
0,9.3066362,3.2360616,0,25.4,0,-25.4
0,9.475597,3.62331,0,25.4,0,-25.4
0,9.6730312,3.9968424,0,25.4,0,-25.4
0,9.8978212,4.3546014,0,25.4,0,-25.4
0,10.1487224,4.694555,0,25.4,0,-25.4
0,10.4243124,5.0147982,0,25.4,0,-25.4
0,10.7230672,5.3135784,0,25.4,0,-25.4
0,11.0433104,5.5891684,0,25.4,0,-25.4
0,11.383264,5.8400696,0,25.4,0,-25.4
0,11.741023,6.0648596,0,25.4,0,-25.4
0,12.1145554,6.2622684,0,25.4,0,-25.4
0,12.5018292,6.4312292,0,25.4,0,-25.4
0,12.9006346,6.5707768,0,25.4,0,-25.4
0,13.3087364,6.6801238,0,25.4,0,-25.4
0,13.723874,6.758686,0,25.4,0,-25.4
0,14.143736,6.8059808,0,25.4,0,-25.4
0,14.5659602,6.8217796,0,25.4,0,-25.4
0,14.988159,6.8059808,0,25.4,0,-25.4
0,15.408021,6.758686,0,25.4,0,-25.4
0,15.8231586,6.6801238,0,25.4,0,-25.4
0,16.2312858,6.5707768,0,25.4,0,-25.4
0,16.6300658,6.4312292,0,25.4,0,-25.4
0,17.0173396,6.2622684,0,25.4,0,-25.4
0,17.390872,6.0648596,0,25.4,0,-25.4
0,17.748631,5.8400696,0,25.4,0,-25.4
0,18.0885846,5.5891684,0,25.4,0,-25.4
0,18.4088278,5.3135784,0,25.4,0,-25.4
0,18.7075826,5.0147982,0,25.4,0,-25.4
0,18.983198,4.694555,0,25.4,0,-25.4
0,19.2340992,4.3546014,0,25.4,0,-25.4
0,19.4588892,3.9968424,0,25.4,0,-25.4
0,19.656298,3.62331,0,25.4,0,-25.4
0,19.8252588,3.2360616,0,25.4,0,-25.4
0,23.5769404,0.2074418,0,25.4,0,-25.4
0,23.8634524,0.5280406,0,25.4,0,-25.4
0,24.1840512,0.8145526,0,25.4,0,-25.4
0,24.5347236,1.0633456,0,25.4,0,-25.4
0,24.9110246,1.2713208,0,25.4,0,-25.4
0,25.3082552,1.435862,0,25.4,0,-25.4
0,25.2128274,2.8558998,0,25.4,0,-25.4
0,24.8269252,2.6592784,0,25.4,0,-25.4
0,24.399113,2.5915112,0,25.4,0,-25.4
0,23.9713262,2.6592784,0,25.4,0,-25.4
0,23.5853986,2.8558998,0,25.4,0,-25.4
0,23.2791508,3.162173,0,25.4,0,-25.4
0,23.082504,3.5481006,0,25.4,0,-25.4
0,23.0147622,3.9758874,0,25.4,0,-25.4
0,23.082504,4.4036742,0,25.4,0,-25.4
0,23.2791508,4.7896018,0,25.4,0,-25.4
0,23.5853986,5.095875,0,25.4,0,-25.4
0,23.9713262,5.2924964,0,25.4,0,-25.4
0,24.399113,5.3602636,0,25.4,0,-25.4
0,24.8269252,5.2924964,0,25.4,0,-25.4
0,25.2128274,5.095875,0,25.4,0,-25.4
0,25.2813566,12.729337,0,25.4,0,-25.4
0,24.8585736,12.6251208,0,25.4,0,-25.4
0,24.423116,12.6251208,0,25.4,0,-25.4
0,24.000333,12.729337,0,25.4,0,-25.4
0,23.614761,12.9316988,0,25.4,0,-25.4
0,23.2888028,13.220446,0,25.4,0,-25.4
0,23.0414576,13.5788146,0,25.4,0,-25.4
0,22.887051,13.9859512,0,25.4,0,-25.4
0,22.8345492,14.4182338,0,25.4,0,-25.4
0,22.887051,14.8505164,0,25.4,0,-25.4
0,23.0414576,15.257653,0,25.4,0,-25.4
0,23.2888028,15.6160216,0,25.4,0,-25.4
0,23.614761,15.9047688,0,25.4,0,-25.4
0,24.000333,16.1071306,0,25.4,0,-25.4
0,24.423116,16.2113468,0,25.4,0,-25.4
0,24.8585736,16.2113468,0,25.4,0,-25.4
0,25.2813566,16.1071306,0,25.4,0,-25.4
0,20.2000104,0.7497064,0,25.4,0,-25.4
0,20.1527156,0.3298444,0,25.4,0,-25.4
0,19.9648064,2.8372562,0,25.4,0,-25.4
0,20.0741534,2.429129,0,25.4,0,-25.4
0,20.1527156,2.0139914,0,25.4,0,-25.4
0,20.2000104,1.5941294,0,25.4,0,-25.4
0,20.2158092,1.1719306,0,25.4,0,-25.4
0,20.0741534,25.3147068,0,25.4,0,-25.4
0,19.9648064,24.906605,0,25.4,0,-25.4
0,19.8252588,24.5077996,0,25.4,0,-25.4
0,19.656298,24.1205512,0,25.4,0,-25.4
0,19.4588892,23.7469934,0,25.4,0,-25.4
0,19.2340992,23.3892344,0,25.4,0,-25.4
0,18.983198,23.0492808,0,25.4,0,-25.4
0,18.7075826,22.7290376,0,25.4,0,-25.4
0,18.4088278,22.4302828,0,25.4,0,-25.4
0,18.0885846,22.1546928,0,25.4,0,-25.4
0,17.748631,21.9037916,0,25.4,0,-25.4
0,17.390872,21.6790016,0,25.4,0,-25.4
0,17.0173396,21.4815674,0,25.4,0,-25.4
0,16.6300658,21.3126066,0,25.4,0,-25.4
0,16.2312858,21.173059,0,25.4,0,-25.4
0,15.8231586,21.063712,0,25.4,0,-25.4
0,15.408021,20.9851752,0,25.4,0,-25.4
0,14.988159,20.937855,0,25.4,0,-25.4
0,14.5659602,20.9220562,0,25.4,0,-25.4
0,14.143736,20.937855,0,25.4,0,-25.4
0,13.723874,20.9851752,0,25.4,0,-25.4
0,13.3087364,21.063712,0,25.4,0,-25.4
0,12.9006346,21.173059,0,25.4,0,-25.4
0,12.5018292,21.3126066,0,25.4,0,-25.4
0,12.1145554,21.4815674,0,25.4,0,-25.4
0,11.741023,21.6790016,0,25.4,0,-25.4
0,11.383264,21.9037916,0,25.4,0,-25.4
0,11.0433104,22.1546928,0,25.4,0,-25.4
0,10.7230672,22.4302828,0,25.4,0,-25.4
0,10.4243124,22.7290376,0,25.4,0,-25.4
0,10.1487224,23.0492808,0,25.4,0,-25.4
0,9.8978212,23.3892344,0,25.4,0,-25.4
0,9.6730312,23.7469934,0,25.4,0,-25.4
0,9.475597,24.1205512,0,25.4,0,-25.4
0,9.3066362,24.5077996,0,25.4,0,-25.4
0,9.1670886,24.906605,0,25.4,0,-25.4
0,9.0577416,25.3147068,0,25.4,0,-25.4
0,4.9846484,22.7875846,0,25.4,0,-25.4
0,4.9126394,22.3637094,0,25.4,0,-25.4
0,4.793615,21.9505276,0,25.4,0,-25.4
0,4.6290738,21.553297,0,25.4,0,-25.4
0,4.4210732,21.176996,0,25.4,0,-25.4
0,4.1722802,20.8263236,0,25.4,0,-25.4
0,3.8857682,20.5057248,0,25.4,0,-25.4
0,3.5651694,20.2192128,0,25.4,0,-25.4
0,3.214497,19.9703944,0,25.4,0,-25.4
0,2.838196,19.7624192,0,25.4,0,-25.4
0,2.44094,19.597878,0,25.4,0,-25.4
0,2.0277836,19.4788536,0,25.4,0,-25.4
0,0.321437,19.4788536,0,25.4,0,-25.4
0,4.4210732,25.2567694,0,25.4,0,-25.4
0,4.6290738,24.880443,0,25.4,0,-25.4
0,4.793615,24.4832124,0,25.4,0,-25.4
0,4.9126394,24.070056,0,25.4,0,-25.4
0,4.9846484,23.6461554,0,25.4,0,-25.4
0,5.008753,23.21687,0,25.4,0,-25.4
0,25.3082552,19.597878,0,25.4,0,-25.4
0,24.9110246,19.7624192,0,25.4,0,-25.4
0,24.5347236,19.9703944,0,25.4,0,-25.4
0,24.1840512,20.2192128,0,25.4,0,-25.4
0,23.8634524,20.5057248,0,25.4,0,-25.4
0,23.5769404,20.8263236,0,25.4,0,-25.4
0,23.3281474,21.176996,0,25.4,0,-25.4
0,23.1201468,21.553297,0,25.4,0,-25.4
0,22.9556056,21.9505276,0,25.4,0,-25.4
0,22.8365812,22.3637094,0,25.4,0,-25.4
0,22.7645722,22.7875846,0,25.4,0,-25.4
0,22.7404422,23.21687,0,25.4,0,-25.4
0,22.7645722,23.6461554,0,25.4,0,-25.4
0,22.8365812,24.070056,0,25.4,0,-25.4
0,22.9556056,24.4832124,0,25.4,0,-25.4
0,23.1201468,24.880443,0,25.4,0,-25.4
0,23.3281474,25.2567694,0,25.4,0,-25.4
`)),b(x.ParsePatFile(`
*BUBBLES-03,BUBBLES-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
0,10.1887274,4.1559734,0,25.4,0,-25.4
0,10.0855526,3.6595304,0,25.4,0,-25.4
0,9.9157536,3.181731,0,25.4,0,-25.4
0,9.68248,2.7315414,0,25.4,0,-25.4
0,9.3900752,2.3172928,0,25.4,0,-25.4
0,9.0439748,1.9467068,0,25.4,0,-25.4
0,8.6506558,1.6267176,0,25.4,0,-25.4
0,8.217408,1.3632688,0,25.4,0,-25.4
0,7.752334,1.1612372,0,25.4,0,-25.4
0,7.2640952,1.0244582,0,25.4,0,-25.4
0,6.7617594,0.9553956,0,25.4,0,-25.4
0,6.2546992,0.9553956,0,25.4,0,-25.4
0,5.7523634,1.0244582,0,25.4,0,-25.4
0,5.2641246,1.1612372,0,25.4,0,-25.4
0,4.7990252,1.3632688,0,25.4,0,-25.4
0,4.3658028,1.6267176,0,25.4,0,-25.4
0,3.9724838,1.9467068,0,25.4,0,-25.4
0,3.6263834,2.3172928,0,25.4,0,-25.4
0,3.3339786,2.7315414,0,25.4,0,-25.4
0,3.100705,3.181731,0,25.4,0,-25.4
0,2.9308806,3.6595304,0,25.4,0,-25.4
0,2.8277312,4.1559734,0,25.4,0,-25.4
0,2.7931364,4.6618398,0,25.4,0,-25.4
0,2.8277312,5.1677062,0,25.4,0,-25.4
0,2.9308806,5.6641746,0,25.4,0,-25.4
0,3.100705,6.1419486,0,25.4,0,-25.4
0,3.3339786,6.5921382,0,25.4,0,-25.4
0,3.6263834,7.0063868,0,25.4,0,-25.4
0,3.9724838,7.3769728,0,25.4,0,-25.4
0,4.3658028,7.696962,0,25.4,0,-25.4
0,4.7990252,7.9604362,0,25.4,0,-25.4
0,5.2641246,8.1624424,0,25.4,0,-25.4
0,5.7523634,8.2992468,0,25.4,0,-25.4
0,6.2546992,8.368284,0,25.4,0,-25.4
0,6.7617594,8.368284,0,25.4,0,-25.4
0,7.2640952,8.2992468,0,25.4,0,-25.4
0,7.752334,8.1624424,0,25.4,0,-25.4
0,8.217408,7.9604362,0,25.4,0,-25.4
0,8.6506558,7.696962,0,25.4,0,-25.4
0,9.0439748,7.3769728,0,25.4,0,-25.4
0,9.3900752,7.0063868,0,25.4,0,-25.4
0,9.68248,6.5921382,0,25.4,0,-25.4
0,9.9157536,6.1419486,0,25.4,0,-25.4
0,10.0855526,5.6641746,0,25.4,0,-25.4
0,10.1887274,5.1677062,0,25.4,0,-25.4
0,10.2233222,4.6618398,0,25.4,0,-25.4
0,18.2143908,14.7408138,0,25.4,0,-25.4
0,17.687036,14.9496018,0,25.4,0,-25.4
0,17.1900342,15.222855,0,25.4,0,-25.4
0,16.7311578,15.55623,0,25.4,0,-25.4
0,16.317722,15.9444944,0,25.4,0,-25.4
0,15.9561784,16.3815014,0,25.4,0,-25.4
0,15.6522674,16.860393,0,25.4,0,-25.4
0,15.4107896,17.3736,0,25.4,0,-25.4
0,15.2355042,17.9130198,0,25.4,0,-25.4
0,15.1292306,18.4701434,0,25.4,0,-25.4
0,15.0936198,19.0362078,0,25.4,0,-25.4
0,15.1292306,19.6022722,0,25.4,0,-25.4
0,15.2355042,20.1593958,0,25.4,0,-25.4
0,15.4107896,20.6988156,0,25.4,0,-25.4
0,18.1163722,0.530352,0,25.4,0,-25.4
0,17.4814484,0.5615432,0,25.4,0,-25.4
0,16.8526714,0.654812,0,25.4,0,-25.4
0,16.236061,0.8092694,0,25.4,0,-25.4
0,15.6375354,1.0234168,0,25.4,0,-25.4
0,15.0629112,1.2951968,0,25.4,0,-25.4
0,14.5176748,1.6219932,0,25.4,0,-25.4
0,14.0071094,2.0006564,0,25.4,0,-25.4
0,13.5361172,2.4275542,0,25.4,0,-25.4
0,13.1092194,2.8985464,0,25.4,0,-25.4
0,12.7305562,3.4091372,0,25.4,0,-25.4
0,12.4037598,3.9543482,0,25.4,0,-25.4
0,12.1319798,4.5289978,0,25.4,0,-25.4
0,11.9178324,5.127498,0,25.4,0,-25.4
0,11.763375,5.7441084,0,25.4,0,-25.4
0,11.6701062,6.3729108,0,25.4,0,-25.4
0,11.638915,7.0078092,0,25.4,0,-25.4
0,11.6701062,7.6427076,0,25.4,0,-25.4
0,11.763375,8.2714846,0,25.4,0,-25.4
0,11.9178324,8.8881204,0,25.4,0,-25.4
0,12.1319798,9.4866206,0,25.4,0,-25.4
0,12.4037598,10.0612702,0,25.4,0,-25.4
0,12.7305562,10.6064812,0,25.4,0,-25.4
0,13.1092194,11.117072,0,25.4,0,-25.4
0,13.5361172,11.5880642,0,25.4,0,-25.4
0,14.0071094,12.0149366,0,25.4,0,-25.4
0,14.5176748,12.3936252,0,25.4,0,-25.4
0,15.0629112,12.7204216,0,25.4,0,-25.4
0,15.6375354,12.9922016,0,25.4,0,-25.4
0,16.236061,13.206349,0,25.4,0,-25.4
0,16.8526714,13.3608064,0,25.4,0,-25.4
0,17.4814484,13.4540752,0,25.4,0,-25.4
0,18.1163722,13.4852664,0,25.4,0,-25.4
0,14.3025876,16.7496744,0,25.4,0,-25.4
0,14.1946122,16.0217104,0,25.4,0,-25.4
0,14.0157962,15.3078434,0,25.4,0,-25.4
0,13.7678668,14.6149568,0,25.4,0,-25.4
0,13.453237,13.94968,0,25.4,0,-25.4
0,13.0748786,13.3184646,0,25.4,0,-25.4
0,12.6365,12.7273558,0,25.4,0,-25.4
0,12.1422922,12.1820686,0,25.4,0,-25.4
0,11.597005,11.6878608,0,25.4,0,-25.4
0,11.0058962,11.2494822,0,25.4,0,-25.4
0,10.3746808,10.8711492,0,25.4,0,-25.4
0,9.7094294,10.556494,0,25.4,0,-25.4
0,9.0165174,10.3085646,0,25.4,0,-25.4
0,8.3026504,10.1297486,0,25.4,0,-25.4
0,7.5746864,10.0217732,0,25.4,0,-25.4
0,6.8396612,9.9856544,0,25.4,0,-25.4
0,6.1046106,10.0217732,0,25.4,0,-25.4
0,5.376672,10.1297486,0,25.4,0,-25.4
0,4.662805,10.3085646,0,25.4,0,-25.4
0,3.969893,10.556494,0,25.4,0,-25.4
0,3.3046416,10.8711492,0,25.4,0,-25.4
0,2.6734008,11.2494822,0,25.4,0,-25.4
0,2.0823174,11.6878608,0,25.4,0,-25.4
0,1.5370302,12.1820686,0,25.4,0,-25.4
0,1.0428224,12.7273558,0,25.4,0,-25.4
0,0.6044184,13.3184646,0,25.4,0,-25.4
0,0.2260854,13.94968,0,25.4,0,-25.4
0,13.7678668,20.3544678,0,25.4,0,-25.4
0,14.0157962,19.6615558,0,25.4,0,-25.4
0,14.1946122,18.9476888,0,25.4,0,-25.4
0,14.3025876,18.2197502,0,25.4,0,-25.4
0,14.3387064,17.4846996,0,25.4,0,-25.4
0,25.3114302,14.6149568,0,25.4,0,-25.4
0,25.0635262,15.3078434,0,25.4,0,-25.4
0,24.8847102,16.0217104,0,25.4,0,-25.4
0,24.7767094,16.7496744,0,25.4,0,-25.4
0,24.740616,17.4846996,0,25.4,0,-25.4
0,24.7767094,18.2197502,0,25.4,0,-25.4
0,24.8847102,18.9476888,0,25.4,0,-25.4
0,25.0635262,19.6615558,0,25.4,0,-25.4
0,25.3114302,20.3544678,0,25.4,0,-25.4
0,24.090884,18.4701434,0,25.4,0,-25.4
0,23.984585,17.9130198,0,25.4,0,-25.4
0,23.809325,17.3736,0,25.4,0,-25.4
0,23.5678472,16.860393,0,25.4,0,-25.4
0,23.2639362,16.3815014,0,25.4,0,-25.4
0,22.9023926,15.9444944,0,25.4,0,-25.4
0,22.4889314,15.55623,0,25.4,0,-25.4
0,22.0300804,15.222855,0,25.4,0,-25.4
0,21.5330532,14.9496018,0,25.4,0,-25.4
0,21.0056984,14.7408138,0,25.4,0,-25.4
0,20.4563472,14.5997676,0,25.4,0,-25.4
0,19.8936356,14.528673,0,25.4,0,-25.4
0,19.3264536,14.528673,0,25.4,0,-25.4
0,18.7637674,14.5997676,0,25.4,0,-25.4
0,15.6522674,21.2120226,0,25.4,0,-25.4
0,15.9561784,21.6908888,0,25.4,0,-25.4
0,16.317722,22.1279212,0,25.4,0,-25.4
0,16.7311578,22.5161856,0,25.4,0,-25.4
0,17.1900342,22.8495606,0,25.4,0,-25.4
0,17.687036,23.1227884,0,25.4,0,-25.4
0,18.2143908,23.3315764,0,25.4,0,-25.4
0,18.7637674,23.472648,0,25.4,0,-25.4
0,19.3264536,23.5437172,0,25.4,0,-25.4
0,19.8936356,23.5437172,0,25.4,0,-25.4
0,20.4563472,23.472648,0,25.4,0,-25.4
0,21.0056984,23.3315764,0,25.4,0,-25.4
0,21.5330532,23.1227884,0,25.4,0,-25.4
0,22.0300804,22.8495606,0,25.4,0,-25.4
0,22.4889314,22.5161856,0,25.4,0,-25.4
0,22.9023926,22.1279212,0,25.4,0,-25.4
0,23.2639362,21.6908888,0,25.4,0,-25.4
0,23.5678472,21.2120226,0,25.4,0,-25.4
0,23.809325,20.6988156,0,25.4,0,-25.4
0,23.984585,20.1593958,0,25.4,0,-25.4
0,24.090884,19.6022722,0,25.4,0,-25.4
0,24.1264948,19.0362078,0,25.4,0,-25.4
0,24.5626128,6.3729108,0,25.4,0,-25.4
0,24.469344,5.7441084,0,25.4,0,-25.4
0,24.3148866,5.127498,0,25.4,0,-25.4
0,24.1007392,4.5289978,0,25.4,0,-25.4
0,23.8289592,3.9543482,0,25.4,0,-25.4
0,23.5021628,3.4091372,0,25.4,0,-25.4
0,23.1234996,2.8985464,0,25.4,0,-25.4
0,22.6966018,2.4275542,0,25.4,0,-25.4
0,22.2256096,2.0006564,0,25.4,0,-25.4
0,21.7150442,1.6219932,0,25.4,0,-25.4
0,21.1698078,1.2951968,0,25.4,0,-25.4
0,20.5951836,1.0234168,0,25.4,0,-25.4
0,19.996658,0.8092694,0,25.4,0,-25.4
0,19.3800476,0.654812,0,25.4,0,-25.4
0,18.7512706,0.5615432,0,25.4,0,-25.4
0,18.7512706,13.4540752,0,25.4,0,-25.4
0,19.3800476,13.3608064,0,25.4,0,-25.4
0,19.996658,13.206349,0,25.4,0,-25.4
0,20.5951836,12.9922016,0,25.4,0,-25.4
0,21.1698078,12.7204216,0,25.4,0,-25.4
0,21.7150442,12.3936252,0,25.4,0,-25.4
0,22.2256096,12.0149366,0,25.4,0,-25.4
0,22.6966018,11.5880642,0,25.4,0,-25.4
0,23.1234996,11.117072,0,25.4,0,-25.4
0,23.5021628,10.6064812,0,25.4,0,-25.4
0,23.8289592,10.0612702,0,25.4,0,-25.4
0,24.1007392,9.4866206,0,25.4,0,-25.4
0,24.3148866,8.8881204,0,25.4,0,-25.4
0,24.469344,8.2714846,0,25.4,0,-25.4
0,24.5626128,7.6427076,0,25.4,0,-25.4
0,24.593804,7.0078092,0,25.4,0,-25.4
0,12.6365,22.2420434,0,25.4,0,-25.4
0,13.0748786,21.65096,0,25.4,0,-25.4
0,13.453237,21.0197446,0,25.4,0,-25.4
0,0.2260854,21.0197446,0,25.4,0,-25.4
0,0.6044184,21.65096,0,25.4,0,-25.4
0,1.0428224,22.2420434,0,25.4,0,-25.4
0,1.5370302,22.7873306,0,25.4,0,-25.4
0,2.0823174,23.2815638,0,25.4,0,-25.4
0,2.6734008,23.7199424,0,25.4,0,-25.4
0,3.3046416,24.0982754,0,25.4,0,-25.4
0,3.969893,24.4129306,0,25.4,0,-25.4
0,4.662805,24.66086,0,25.4,0,-25.4
0,5.376672,24.839676,0,25.4,0,-25.4
0,6.1046106,24.9476514,0,25.4,0,-25.4
0,6.8396612,24.9837448,0,25.4,0,-25.4
0,7.5746864,24.9476514,0,25.4,0,-25.4
0,8.3026504,24.839676,0,25.4,0,-25.4
0,9.0165174,24.66086,0,25.4,0,-25.4
0,9.7094294,24.4129306,0,25.4,0,-25.4
0,10.3746808,24.0982754,0,25.4,0,-25.4
0,11.0058962,23.7199424,0,25.4,0,-25.4
0,11.597005,23.2815638,0,25.4,0,-25.4
0,12.1422922,22.7873306,0,25.4,0,-25.4
`)),b(x.ParsePatFile(`
*CELTIC-01,CELTIC PATTERN 01
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
135,9.144,10.72444439,17.96051221,17.96051221,2.235085954,-33.68593847
135,10.72444439,9.934222194,17.96051221,17.96051221,6.565564974,-29.35545945
315,9.934222194,14.67555561,17.96051221,17.96051221,2.235085954,-33.68593847
315,7.662333418,16.15722219,17.96051221,17.96051221,6.565564974,-29.35545945
225,19.31811122,10.82322219,17.96051221,17.96051221,2.235085954,-33.68593847
225,21.98511122,12.7,17.96051221,17.96051221,7.124336526,-28.7966879
225,21.68877781,8.452555612,17.96051221,17.96051221,2.235085954,-33.68593847
225,25.146,12.7,17.96051221,17.96051221,9.35942248,-26.56160194
225,19.31811122,18.52788878,17.96051221,17.96051221,2.235085954,-33.68593847
225,21.68877781,16.15722219,17.96051221,17.96051221,2.235085954,-33.68593847
90,25.146,22.91091405,0,25.4,2.235085954,-23.16491405
0,22.91091405,22.35214249,0,25.4,2.235085954,-23.16491405
0,21.33046966,22.91091405,0,25.4,3.815530342,-21.58446966
0,20.40466658,25.146,0,25.4,4.741333418,-20.65866658
90,22.91091405,21.33046966,0,25.4,1.021672836,-24.37832716
90,25.146,20.40466658,0,25.4,1.947475912,-23.45252409
180,2.489085954,25.146,0,25.4,2.235085954,-23.16491405
90,3.047857506,22.91091405,0,25.4,2.235085954,-23.16491405
90,2.489085954,21.33046966,0,25.4,3.815530342,-21.58446966
90,0.254,20.40466658,0,25.4,4.741333418,-20.65866658
180,4.069530342,22.91091405,0,25.4,1.021672836,-24.37832716
180,4.995333418,25.146,0,25.4,1.947475912,-23.45252409
270,0.254,2.489085954,0,25.4,2.235085954,-23.16491405
180,2.489085954,3.047857506,0,25.4,2.235085954,-23.16491405
180,4.069530342,2.489085954,0,25.4,3.815530342,-21.58446966
180,4.995333418,0.254,0,25.4,4.741333418,-20.65866658
270,2.489085954,4.069530342,0,25.4,1.021672836,-24.37832716
270,0.254,4.995333418,0,25.4,1.947475912,-23.45252409
45,17.83644439,13.09511122,17.96051221,17.96051221,10.3372727,-25.58375198
45,13.09511122,7.563555612,17.96051221,17.96051221,2.235085954,-33.68593847
45,10.82322219,6.081888776,17.96051221,17.96051221,6.565564974,-29.35545945
45,4.995333418,0.254,17.96051221,17.96051221,4.889250572,-31.03177385
45,16.256,14.67555561,17.96051221,17.96051221,9.41146962,-26.5095548
45,10.72444439,9.934222194,17.96051221,17.96051221,2.235085954,-33.68593847
45,9.242777806,7.662333418,17.96051221,17.96051221,6.565564974,-29.35545945
45,4.069530342,2.489085954,17.96051221,17.96051221,3.96344775,-31.95757693
45,16.94744439,21.68877781,17.96051221,17.96051221,4.889250572,-31.03177385
45,10.72444439,16.256,17.96051221,17.96051221,2.235085954,-33.68593847
45,3.711222194,9.242777806,17.96051221,17.96051221,2.235085954,-33.68593847
45,9.934222194,14.67555561,17.96051221,17.96051221,6.565564974,-29.35545945
45,0.254,4.995333418,17.96051221,17.96051221,10.3372727,-25.58375198
45,18.52788878,20.10833342,17.96051221,17.96051221,3.96344775,-31.95757693
45,6.081888776,6.872111224,17.96051221,17.96051221,2.235085954,-33.68593847
45,13.09511122,13.88533342,17.96051221,17.96051221,2.235085954,-33.68593847
45,11.51466658,13.09511122,17.96051221,17.96051221,6.565564974,-29.35545945
45,2.489085954,4.069530342,17.96051221,17.96051221,9.41146962,-26.5095548
0,22.91091405,0.254,0,25.4,2.235085954,-23.16491405
135,17.83644439,13.09511122,17.96051221,17.96051221,2.235085954,-33.68593847
135,10.82322219,20.10833342,17.96051221,17.96051221,2.235085954,-33.68593847
135,12.30488878,17.83644439,17.96051221,17.96051221,10.3372727,-25.58375198
135,19.31811122,10.82322219,17.96051221,17.96051221,6.565564974,-29.35545945
135,25.146,4.995333418,17.96051221,17.96051221,4.889250572,-31.03177385
135,8.452555612,17.73766658,17.96051221,17.96051221,2.235085954,-33.68593847
135,10.72444439,16.256,17.96051221,17.96051221,9.41146962,-26.5095548
135,15.46577781,10.72444439,17.96051221,17.96051221,2.235085954,-33.68593847
135,17.73766658,9.242777806,17.96051221,17.96051221,6.565564974,-29.35545945
135,22.91091405,4.069530342,17.96051221,17.96051221,3.96344775,-31.95757693
135,16.15722219,3.711222194,17.96051221,17.96051221,2.235085954,-33.68593847
135,3.711222194,16.94744439,17.96051221,17.96051221,4.889250572,-31.03177385
135,20.40466658,0.254,17.96051221,17.96051221,10.3372727,-25.58375198
135,18.52788878,6.081888776,17.96051221,17.96051221,2.235085954,-33.68593847
135,5.291666582,18.52788878,17.96051221,17.96051221,3.96344775,-31.95757693
135,21.33046966,2.489085954,17.96051221,17.96051221,9.41146962,-26.5095548
270,22.35214249,2.489085954,0,25.4,2.235085954,-23.16491405
270,22.91091405,4.069530342,0,25.4,3.815530342,-21.58446966
270,25.146,4.995333418,0,25.4,4.741333418,-20.65866658
0,21.33046966,2.489085954,0,25.4,1.021672836,-24.37832716
0,20.40466658,0.254,0,25.4,1.947475912,-23.45252409
135,25.146,12.7,17.96051221,17.96051221,4.889250572,-31.03177385
45,12.7,0.254,17.96051221,17.96051221,4.889250572,-31.03177385
315,6.872111224,5.291666582,17.96051221,17.96051221,2.235085954,-33.68593847
315,6.081888776,6.872111224,17.96051221,17.96051221,9.35942248,-26.56160194
315,0.254,12.7,17.96051221,17.96051221,4.889250572,-31.03177385
225,5.291666582,18.52788878,17.96051221,17.96051221,2.235085954,-33.68593847
225,6.872111224,19.31811122,17.96051221,17.96051221,9.35942248,-26.56160194
225,12.7,25.146,17.96051221,17.96051221,4.889250572,-31.03177385
135,18.52788878,20.10833342,17.96051221,17.96051221,2.235085954,-33.68593847
135,19.31811122,18.52788878,17.96051221,17.96051221,9.35942248,-26.56160194
135,21.98511122,12.7,17.96051221,17.96051221,2.654164618,-33.26685981
45,12.7,3.414888776,17.96051221,17.96051221,2.654164618,-33.26685981
315,9.242777806,7.662333418,17.96051221,17.96051221,2.235085954,-33.68593847
315,7.662333418,8.452555612,17.96051221,17.96051221,7.124336526,-28.7966879
315,3.414888776,12.7,17.96051221,17.96051221,2.654164618,-33.26685981
225,7.662333418,16.15722219,17.96051221,17.96051221,2.235085954,-33.68593847
225,8.452555612,17.73766658,17.96051221,17.96051221,7.124336526,-28.7966879
225,12.7,21.98511122,17.96051221,17.96051221,2.654164618,-33.26685981
135,16.15722219,17.73766658,17.96051221,17.96051221,2.235085954,-33.68593847
135,17.73766658,16.94744439,17.96051221,17.96051221,7.124336526,-28.7966879
`)),b(x.ParsePatFile(`
*CELTIC-02,CELTIC PATTERN 02
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern,,,,,,
180,11.1371634,0.392662664,0,25.4,3.125672946,-22.27432705
270,25.00733734,11.1371634,0,25.4,3.125672946,-22.27432705
270,0.392662664,17.38850955,0,25.4,3.125672946,-22.27432705
180,17.38850955,25.00733734,0,25.4,3.125672946,-22.27432705
90,25.00733734,11.9185817,0,25.4,13.08875564,-12.31124436
270,25.00733734,7.230072408,0,25.4,6.837409744,-18.56259026
180,11.1371634,7.230072408,0,25.4,3.125672946,-22.27432705
180,13.4814183,8.011490454,0,25.4,9.18166439,-16.21833561
0,8.011490454,11.9185817,0,25.4,3.125672946,-22.27432705
0,4.29975391,11.1371634,0,25.4,9.18166439,-16.21833561
270,21.10024609,17.38850955,0,25.4,3.125672946,-22.27432705
270,21.88166439,21.88166439,0,25.4,9.96308269,-15.43691731
270,13.4814183,25.00733734,0,25.4,3.125672946,-22.27432705
270,18.16992759,25.00733734,0,25.4,3.125672946,-22.27432705
90,17.38850955,18.16992759,0,25.4,6.837409744,-18.56259026
90,18.16992759,8.011490454,0,25.4,3.125672946,-22.27432705
90,17.38850955,4.29975391,0,25.4,9.18166439,-16.21833561
90,14.2628366,18.16992759,0,25.4,6.837409744,-18.56259026
90,13.4814183,8.011490454,0,25.4,3.125672946,-22.27432705
90,14.2628366,4.29975391,0,25.4,9.18166439,-16.21833561
90,7.230072408,14.2628366,0,25.4,3.125672946,-22.27432705
90,7.230072408,0.392662664,0,25.4,3.125672946,-22.27432705
90,8.011490454,11.9185817,0,25.4,9.18166439,-16.21833561
90,8.011490454,0.392662664,0,25.4,6.837409744,-18.56259026
90,11.9185817,0.392662664,0,25.4,3.125672946,-22.27432705
90,11.9185817,14.2628366,0,25.4,3.125672946,-22.27432705
90,11.1371634,11.9185817,0,25.4,9.18166439,-16.21833561
90,11.1371634,0.392662664,0,25.4,6.837409744,-18.56259026
180,17.38850955,18.16992759,0,25.4,3.125672946,-22.27432705
180,3.51833561,18.16992759,0,25.4,3.125672946,-22.27432705
180,7.230072408,17.38850955,0,25.4,6.837409744,-18.56259026
180,21.10024609,17.38850955,0,25.4,9.18166439,-16.21833561
180,3.51833561,13.4814183,0,25.4,3.125672946,-22.27432705
180,7.230072408,14.2628366,0,25.4,6.837409744,-18.56259026
180,17.38850955,13.4814183,0,25.4,3.125672946,-22.27432705
180,21.10024609,14.2628366,0,25.4,9.18166439,-16.21833561
180,25.00733734,7.230072408,0,25.4,3.125672946,-22.27432705
180,25.00733734,8.011490454,0,25.4,6.837409744,-18.56259026
180,25.00733734,11.9185817,0,25.4,3.125672946,-22.27432705
180,25.00733734,11.1371634,0,25.4,6.837409744,-18.56259026
180,25.00733734,25.00733734,0,25.4,6.837409744,-18.56259026
0,11.9185817,0.392662664,0,25.4,13.08875564,-12.31124436
0,0.392662664,0.392662664,0,25.4,6.837409744,-18.56259026
270,0.392662664,13.4814183,0,25.4,13.08875564,-12.31124436
270,0.392662664,25.00733734,0,25.4,6.837409744,-18.56259026
180,13.4814183,25.00733734,0,25.4,13.08875564,-12.31124436
180,21.88166439,21.88166439,0,25.4,3.711736544,-21.68826346
90,21.88166439,3.51833561,0,25.4,3.711736544,-21.68826346
0,14.2628366,4.29975391,0,25.4,3.125672946,-22.27432705
0,11.9185817,3.51833561,0,25.4,9.96308269,-15.43691731
0,3.51833561,3.51833561,0,25.4,3.711736544,-21.68826346
270,4.29975391,11.1371634,0,25.4,3.125672946,-22.27432705
270,3.51833561,13.4814183,0,25.4,9.96308269,-15.43691731
270,3.51833561,21.88166439,0,25.4,3.711736544,-21.68826346
180,11.1371634,21.10024609,0,25.4,3.125672946,-22.27432705
180,13.4814183,21.88166439,0,25.4,9.96308269,-15.43691731
`)),b(x.ParsePatFile(`
*CELTIC-03,CELTIC-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,6.35,13.97,0,25.4,5.08,-20.32
90,19.05,6.35,0,25.4,5.08,-20.32
0,6.35,6.35,0,25.4,12.7,-12.7
270,6.35,11.43,0,25.4,5.08,-20.32
90,3.81,3.81,0,25.4,7.62,-17.78
180,21.59,3.81,0,25.4,17.78,-7.62
270,21.59,11.43,0,25.4,7.62,-17.78
270,21.59,21.59,0,25.4,7.62,-17.78
0,3.81,21.59,0,25.4,17.78,-7.62
90,3.81,13.97,0,25.4,7.62,-17.78
270,19.05,19.05,0,25.4,5.08,-20.32
0,6.35,19.05,0,25.4,12.7,-12.7
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`)),b(x.ParsePatFile(`
*CELTIC-04,CELTIC-04
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
45,3.81,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
135,21.59,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
45,12.7,2.54,17.960512212,17.960512212,12.57235865,-23.348666028
315,3.81,11.43,17.960512212,17.960512212,12.57235865,-23.348666028
135,12.7,5.08,17.960512212,17.960512212,8.980256106,-26.940768318
225,19.05,11.43,17.960512212,17.960512212,8.980256106,-26.940768318
315,12.7,20.32,17.960512212,17.960512212,8.980256106,-26.940768318
45,6.35,13.97,17.960512212,17.960512212,8.980256106,-26.940768318
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`)),b(x.ParsePatFile(`
*CIRCLES-02,CIRCLES-02
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,24.3609368,11.9663464,0,25.4,0,-25.4
0,24.2918742,11.2356138,0,25.4,0,-25.4
0,24.1770408,10.510647,0,25.4,0,-25.4
0,24.0169192,9.7943162,0,25.4,0,-25.4
0,23.8121444,9.0894408,0,25.4,0,-25.4
0,23.5635038,8.3988402,0,25.4,0,-25.4
0,23.271988,7.7252068,0,25.4,0,-25.4
0,22.9387654,7.0711822,0,25.4,0,-25.4
0,22.5651314,6.439408,0,25.4,0,-25.4
0,22.1525592,5.8323226,0,25.4,0,-25.4
0,21.7026744,5.252339,0,25.4,0,-25.4
0,21.2172804,4.7017432,0,25.4,0,-25.4
0,20.6982568,4.1827196,0,25.4,0,-25.4
0,20.147661,3.6973256,0,25.4,0,-25.4
0,19.5676774,3.2474408,0,25.4,0,-25.4
0,18.960592,2.8348686,0,25.4,0,-25.4
0,18.3288178,2.4612346,0,25.4,0,-25.4
0,17.6747932,2.128012,0,25.4,0,-25.4
0,17.0011598,1.8364962,0,25.4,0,-25.4
0,16.3105592,1.5878556,0,25.4,0,-25.4
0,15.6056838,1.3830808,0,25.4,0,-25.4
0,14.889353,1.2229592,0,25.4,0,-25.4
0,14.1643862,1.1081258,0,25.4,0,-25.4
0,13.4336536,1.0390632,0,25.4,0,-25.4
0,12.7,1.016,0,25.4,0,-25.4
0,11.9663464,1.0390632,0,25.4,0,-25.4
0,11.2356138,1.1081258,0,25.4,0,-25.4
0,10.510647,1.2229592,0,25.4,0,-25.4
0,9.7943162,1.3830808,0,25.4,0,-25.4
0,9.0894408,1.5878556,0,25.4,0,-25.4
0,8.3988402,1.8364962,0,25.4,0,-25.4
0,7.7252068,2.128012,0,25.4,0,-25.4
0,7.0711822,2.4612346,0,25.4,0,-25.4
0,6.439408,2.8348686,0,25.4,0,-25.4
0,5.8323226,3.2474408,0,25.4,0,-25.4
0,5.252339,3.6973256,0,25.4,0,-25.4
0,4.7017432,4.1827196,0,25.4,0,-25.4
0,4.1827196,4.7017432,0,25.4,0,-25.4
0,3.6973256,5.252339,0,25.4,0,-25.4
0,3.2474408,5.8323226,0,25.4,0,-25.4
0,2.8348686,6.439408,0,25.4,0,-25.4
0,2.4612346,7.0711822,0,25.4,0,-25.4
0,2.128012,7.7252068,0,25.4,0,-25.4
0,1.8364962,8.3988402,0,25.4,0,-25.4
0,1.5878556,9.0894408,0,25.4,0,-25.4
0,1.3830808,9.7943162,0,25.4,0,-25.4
0,1.2229592,10.510647,0,25.4,0,-25.4
0,1.1081258,11.2356138,0,25.4,0,-25.4
0,1.0390632,11.9663464,0,25.4,0,-25.4
0,1.016,12.7,0,25.4,0,-25.4
0,1.0390632,13.4336536,0,25.4,0,-25.4
0,1.1081258,14.1643862,0,25.4,0,-25.4
0,1.2229592,14.889353,0,25.4,0,-25.4
0,1.3830808,15.6056838,0,25.4,0,-25.4
0,1.5878556,16.3105592,0,25.4,0,-25.4
0,1.8364962,17.0011598,0,25.4,0,-25.4
0,2.128012,17.6747932,0,25.4,0,-25.4
0,2.4612346,18.3288178,0,25.4,0,-25.4
0,2.8348686,18.960592,0,25.4,0,-25.4
0,3.2474408,19.5676774,0,25.4,0,-25.4
0,3.6973256,20.147661,0,25.4,0,-25.4
0,4.1827196,20.6982568,0,25.4,0,-25.4
0,4.7017432,21.2172804,0,25.4,0,-25.4
0,5.252339,21.7026744,0,25.4,0,-25.4
0,5.8323226,22.1525592,0,25.4,0,-25.4
0,6.439408,22.5651314,0,25.4,0,-25.4
0,7.0711822,22.9387654,0,25.4,0,-25.4
0,7.7252068,23.271988,0,25.4,0,-25.4
0,8.3988402,23.5635038,0,25.4,0,-25.4
0,9.0894408,23.8121444,0,25.4,0,-25.4
0,9.7943162,24.0169192,0,25.4,0,-25.4
0,10.510647,24.1770408,0,25.4,0,-25.4
0,11.2356138,24.2918742,0,25.4,0,-25.4
0,11.9663464,24.3609368,0,25.4,0,-25.4
0,12.7,24.384,0,25.4,0,-25.4
0,13.4336536,24.3609368,0,25.4,0,-25.4
0,14.1643862,24.2918742,0,25.4,0,-25.4
0,14.889353,24.1770408,0,25.4,0,-25.4
0,15.6056838,24.0169192,0,25.4,0,-25.4
0,16.3105592,23.8121444,0,25.4,0,-25.4
0,17.0011598,23.5635038,0,25.4,0,-25.4
0,17.6747932,23.271988,0,25.4,0,-25.4
0,18.3288178,22.9387654,0,25.4,0,-25.4
0,18.960592,22.5651314,0,25.4,0,-25.4
0,19.5676774,22.1525592,0,25.4,0,-25.4
0,20.147661,21.7026744,0,25.4,0,-25.4
0,20.6982568,21.2172804,0,25.4,0,-25.4
0,21.2172804,20.6982568,0,25.4,0,-25.4
0,21.7026744,20.147661,0,25.4,0,-25.4
0,22.1525592,19.5676774,0,25.4,0,-25.4
0,22.5651314,18.960592,0,25.4,0,-25.4
0,22.9387654,18.3288178,0,25.4,0,-25.4
0,23.271988,17.6747932,0,25.4,0,-25.4
0,23.5635038,17.0011598,0,25.4,0,-25.4
0,23.8121444,16.3105592,0,25.4,0,-25.4
0,24.0169192,15.6056838,0,25.4,0,-25.4
0,24.1770408,14.889353,0,25.4,0,-25.4
0,24.2918742,14.1643862,0,25.4,0,-25.4
0,24.3609368,13.4336536,0,25.4,0,-25.4
0,24.384,12.7,0,25.4,0,-25.4
`)),b(x.ParsePatFile(`
*CIRCLES,CIRCLES
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,23.7384082,10.9516926,0,25.4,0,-25.4
0,23.329011,9.2464382,0,25.4,0,-25.4
0,22.6578922,7.6261976,0,25.4,0,-25.4
0,21.7415618,6.1308996,0,25.4,0,-25.4
0,20.6026258,4.7973742,0,25.4,0,-25.4
0,19.2691004,3.6584382,0,25.4,0,-25.4
0,17.7738024,2.7421078,0,25.4,0,-25.4
0,16.1535618,2.070989,0,25.4,0,-25.4
0,14.4483074,1.6615918,0,25.4,0,-25.4
0,12.7,1.524,0,25.4,0,-25.4
0,10.9516926,1.6615918,0,25.4,0,-25.4
0,9.2464382,2.070989,0,25.4,0,-25.4
0,7.6261976,2.7421078,0,25.4,0,-25.4
0,6.1308996,3.6584382,0,25.4,0,-25.4
0,4.7973742,4.7973742,0,25.4,0,-25.4
0,3.6584382,6.1308996,0,25.4,0,-25.4
0,2.7421078,7.6261976,0,25.4,0,-25.4
0,2.070989,9.2464382,0,25.4,0,-25.4
0,1.6615918,10.9516926,0,25.4,0,-25.4
0,1.524,12.7,0,25.4,0,-25.4
0,1.6615918,14.4483074,0,25.4,0,-25.4
0,2.070989,16.1535618,0,25.4,0,-25.4
0,2.7421078,17.7738024,0,25.4,0,-25.4
0,3.6584382,19.2691004,0,25.4,0,-25.4
0,4.7973742,20.6026258,0,25.4,0,-25.4
0,6.1308996,21.7415618,0,25.4,0,-25.4
0,7.6261976,22.6578922,0,25.4,0,-25.4
0,9.2464382,23.329011,0,25.4,0,-25.4
0,10.9516926,23.7384082,0,25.4,0,-25.4
0,12.7,23.876,0,25.4,0,-25.4
0,14.4483074,23.7384082,0,25.4,0,-25.4
0,16.1535618,23.329011,0,25.4,0,-25.4
0,17.7738024,22.6578922,0,25.4,0,-25.4
0,19.2691004,21.7415618,0,25.4,0,-25.4
0,20.6026258,20.6026258,0,25.4,0,-25.4
0,21.7415618,19.2691004,0,25.4,0,-25.4
0,22.6578922,17.7738024,0,25.4,0,-25.4
0,23.329011,16.1535618,0,25.4,0,-25.4
0,23.7384082,14.4483074,0,25.4,0,-25.4
0,23.876,12.7,0,25.4,0,-25.4
`)),b(x.ParsePatFile(`
*CLAY,CLAY
0, 0,0, 0,4.7625
0, 0,.79375, 0,4.7625
0, 0,1.5875, 0,4.7625
0, 0,3.175, 0,4.7625, 4.7625,-3.175
`)),b(x.ParsePatFile(`
*CORK,CORK
0, 0,0, 0,3.175
135, 1.5875,-1.5875, 0,8.98026, 4.49013,-4.49013
135, 2.38125,-1.5875, 0,8.98026, 4.49013,-4.49013
135, 3.175,-1.5875, 0,8.98026, 4.49013,-4.49013
`)),b(x.ParsePatFile(`
*CROSS,CROSS
0, 0,0, 6.35,6.35, 3.175,-9.525
90, 1.5875,-1.5875, 6.35,6.35, 3.175,-9.525
`)),b(x.ParsePatFile(`
*DASH,DASH
0, 0,0, 3.175,3.175, 3.175,-3.175
`)),b(x.ParsePatFile(`
*DOLMIT,DOLMIT
0, 0,0, 0,6.35
45, 0,0, 0,17.9605, 8.98026,-17.9605
`)),b(x.ParsePatFile(`
*DOTS,DOTS
0, 0,0, .79375,1.5875, 0,-1.5875
`)),b(x.ParsePatFile(`
*EARTH,EARTH
0, 0,0, 6.35,6.35, 6.35,-6.35
0, 0,2.38125, 6.35,6.35, 6.35,-6.35
0, 0,4.7625, 6.35,6.35, 6.35,-6.35
90, .79375,5.55625, 6.35,6.35, 6.35,-6.35
90, 3.175,5.55625, 6.35,6.35, 6.35,-6.35
90, 5.55625,5.55625, 6.35,6.35, 6.35,-6.35
`)),b(x.ParsePatFile(`
*ESCHER,ESCHER
60, 0,0, -15.24,26.3965, 27.94,-2.54
180, 0,0, -15.24,26.3965, 27.94,-2.54
300, 0,0, 15.24,26.3965, 27.94,-2.54
60, 2.54,0, -15.24,26.3965, 5.08,-25.4
300, 2.54,0, 15.24,26.3965, 5.08,-25.4
60, -1.27,2.1997, -15.24,26.3965, 5.08,-25.4
180, -1.27,2.1997, -15.24,26.3965, 5.08,-25.4
300, -1.27,-2.1997, 15.24,26.3965, 5.08,-25.4
180, -1.27,-2.1997, -15.24,26.3965, 5.08,-25.4
60, -10.16,0, -15.24,26.3965, 5.08,-25.4
300, -10.16,0, 15.24,26.3965, 5.08,-25.4
60, 5.08,-8.79882, -15.24,26.3965, 5.08,-25.4
180, 5.08,-8.79882, -15.24,26.3965, 5.08,-25.4
300, 5.08,8.79882, 15.24,26.3965, 5.08,-25.4
180, 5.08,8.79882, -15.24,26.3965, 5.08,-25.4
0, 5.08,4.39941, -15.24,26.3965, 17.78,-12.7
0, 5.08,-4.39941, -15.24,26.3965, 17.78,-12.7
120, 1.27,6.59911, 15.24,26.3965, 17.78,-12.7
120, -6.35,2.1997, 15.24,26.3965, 17.78,-12.7
240, -6.35,-2.1997, 15.24,26.3965, 17.78,-12.7
240, 1.27,-6.59911, 15.24,26.3965, 17.78,-12.7
`)),b(x.ParsePatFile(`
*EXPLOSION,EXPLOSION
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
270,11.43,2.794,0,25.4,2.794,-22.606
143.130102,12.446,2.032,91.44,5.08,1.27,-125.73
270,12.446,4.318,0,25.4,2.286,-23.114
112.380135,14.224,0,330.1971097,1.381577882,4.669733104,-462.3035852
75.256437,12.954,20.574,104.7189028,1.292825964,4.990308282,-494.0405126
287.525568,11.43,25.4,80.31173574,1.274789424,5.060914186,-501.0305006
135,1.524,12.446,17.96051221,17.96051221,2.155261374,-33.76576305
26.565051,0,11.684,34.07767607,11.35922544,1.703883816,-55.09224288
353.884496,18.288,12.446,485.2654803,0.901980416,7.152705024,-708.1177892
192.094757,25.4,13.97,234.1697095,1.774012962,7.273453068,-356.3992019
3.691386,17.526,9.652,381.8448525,0.817654956,7.890370046,-781.1466379
136.080924,24.384,3.048,916.1619403,0.677634662,9.52076582,-942.5558068
336.037511,22.098,4.064,193.4234445,2.578979348,2.501609932,-247.6593782
123.690068,24.638,0.254,35.22346245,7.04469254,4.579050024,-87.00195223
324.462322,15.748,6.604,91.53339072,2.952690056,10.924953,-207.5741086
117.645975,18.542,1.27,545.3600756,1.07143423,6.021460906,-596.1246343
326.309932,13.97,4.318,56.35753981,7.04469254,5.494860232,-86.08614228
106.38954,15.24,0,265.1799113,1.433404804,4.50089143,-445.5882554
153.434949,3.048,8.636,22.71845063,11.35922544,3.407767632,-53.38835906
64.798876,1.016,4.318,420.4426387,1.351905602,4.772226676,-472.4504468
202.619865,4.064,5.588,193.4307693,1.953846232,3.302,-326.898
59.036243,2.54,3.048,56.62883289,4.356064186,2.962123616,-145.1440546
211.75948,7.874,6.35,239.620914,1.028416028,6.273337212,-621.0603858
79.215702,6.858,1.016,413.4803361,1.188161962,5.429899732,-537.5600816
212.471192,9.652,2.794,91.56028043,1.9480911,3.31175487,-327.8637273
63.434949,8.89,1.27,22.71845063,11.35922544,1.703883816,-55.09224288
135,10.16,0,17.96051221,17.96051221,1.796051272,-34.12497315
74.357754,8.382,19.05,474.5101503,0.978371424,6.59422354,-652.8281297
333.434949,0.762,22.86,22.71845063,11.35922544,8.51941908,-48.27670761
110.556045,4.572,12.7,136.7508764,2.97284521,10.85088483,-206.1668104
330.945396,0,15.24,56.74251999,2.467066186,5.23018004,-256.2788255
99.462322,16.002,20.828,129.4477627,4.175734346,4.635065152,-149.8671031
222.70939,19.304,23.876,35.89232217,1.435692836,4.493718724,-444.8781539
74.744881,18.542,21.082,104.7031863,2.22772732,2.896045516,-286.7085124
208.61046,24.13,24.13,261.5011486,2.027140726,6.365221712,-311.8958659
62.744672,19.812,15.748,56.79200478,0.684240948,9.428841188,-933.4552873
212.275644,24.638,18.796,331.1735533,1.130285268,5.70794007,-565.0860682
55.00798,22.86,16.256,91.55735943,2.080849026,3.100465224,-306.9460475
158.198591,25.4,15.24,80.18324705,4.716661636,2.73566382,-134.0475224
51.911227,14.986,12.954,741.8363621,0.540303212,11.9407018,-1182.12948
153.434949,16.51,12.192,22.71845063,11.35922544,1.703883816,-55.09224288
35.537678,14.732,10.922,126.9656711,2.952690056,2.18499055,-216.3140711
129.289407,19.304,5.334,198.3722919,1.78713765,7.220036614,-353.7817918
322.30576,13.716,9.652,416.5899728,0.9135745,7.061931012,-699.1311588
77.905243,12.954,6.096,129.5029455,1.774012962,3.636726534,-360.0359284
282.994617,12.192,9.398,104.709577,1.903810518,3.388782656,-335.4894845
62.525568,8.89,3.048,56.78897304,0.901412218,7.157213524,-708.564129
267.137595,9.144,8.128,25.36830944,1.268415548,5.086345936,-503.5482576
12.994617,2.54,6.604,104.709577,1.903810518,6.777565312,-332.1007018
211.75948,7.874,9.906,239.620914,1.028416028,6.273337212,-621.0603858
318.366461,5.588,11.938,269.9974641,2.109355192,3.05856513,-302.7979372
189.462322,7.112,12.192,129.4477627,4.175734346,1.545021802,-152.9571465
297.299572,3.048,20.066,829.3009284,0.728095572,8.860923858,-877.231464
132.273689,8.128,14.478,35.8803669,1.708588912,7.551962798,-370.0461832
282.994617,7.366,17.78,104.709577,1.903810518,3.388782656,-335.4894845
140.194429,10.414,15.24,162.6068376,3.252136752,3.967606746,-194.4127349
268.363423,10.668,24.13,25.38963909,0.725418158,8.893627882,-880.4691552
102.200469,12.7,14.732,597.8446202,0.67098164,9.615166444,-951.9014896
250.016893,14.732,20.32,80.29253258,2.170068558,5.9459876,-291.3533901
84.559668,14.224,14.986,280.549586,1.20407557,5.358135842,-530.4554512
222.184443,22.352,22.352,377.597688,0.588158336,10.96915408,-1085.946248
`)),b(x.ParsePatFile(`
*FLEX,FLEX
0, 0,0, 0,6.35, 6.35,-6.35
45, 6.35,0, 4.49013,4.49013, 1.5875,-5.80526,1.5875,-8.98026
`)),b(x.ParsePatFile(`
*GRASS,GRASS
90, 0,0, 17.9605,17.9605, 4.7625,-31.1585
45, 0,0, 0,25.4, 4.7625,-20.6375
135, 0,0, 0,25.4, 4.7625,-20.6375
`)),b(x.ParsePatFile(`
*GRATE,GRATE
0, 0,0, 0,.79375
90, 0,0, 0,3.175
`)),b(x.ParsePatFile(`
*GRAVEL-01,GRAVEL-01
;Optimize to replace existing GRAVEL Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
159.443955,4.064,3.302,80.266818638,2.97284521,4.340353778,-212.677341218
114.775141,5.588,0,56.76841453,1.774012962,3.636726534,-360.03592839
249.443955,8.128,2.032,80.266818638,2.97284521,2.170177016,-214.847518234
186.009006,12.954,2.54,230.002940044,1.329496706,4.852663142,-480.413655376
165.963757,18.034,1.27,24.6416195,6.160405002,5.236344112,-99.490538636
101.309932,18.288,0,104.608346536,4.981349956,1.29515108,-128.219944728
243.434949,21.336,3.556,22.718450626,11.35922544,3.975728904,-52.820397788
355.426079,12.446,3.302,331.173933536,1.012764294,6.370287488,-630.658471472
300.256437,10.668,6.35,148.094892532,1.828332132,3.528680776,-349.33939657
228.012788,15.24,11.43,305.850675318,1.887967014,6.834440992,-334.887609878
180,21.844,11.43,0,25.4,6.604,-18.796
303.690068,15.748,15.748,35.223462446,7.04469254,3.66324007,-87.917762188
225,18.288,18.288,17.960512212,17.960512212,3.592102544,-32.328922134
110.224859,2.032,5.842,217.014069654,1.254416592,5.143108078,-509.167692864
177.273689,7.366,5.588,25.371250756,1.20815481,5.340044184,-528.664375232
217.69424,12.954,9.906,289.603117008,0.9135745,7.061931012,-699.131158758
252.255328,14.986,16.256,586.403737782,0.967663038,6.667197486,-660.05256356
301.429566,12.192,20.828,387.712303314,1.20407557,5.358135842,-530.455451152
355.236358,6.096,21.336,25.312262304,2.109355192,6.117130006,-299.739372326
43.66778,0.508,16.002,35.911314766,0.83514692,7.725108502,-764.785732808
87.273689,0.254,10.668,25.371250756,1.20815481,5.340044184,-528.664375232
30.963757,15.748,18.034,91.477345366,4.356064186,4.443185424,-143.662992836
291.801409,14.732,20.574,56.599939124,4.716661636,2.73566382,-134.047522354
203.198591,16.51,21.336,56.698117744,3.335183322,1.934406342,-191.506230398
161.565051,19.558,20.32,24.09655582,8.032185358,3.212874194,-77.10897837
4.969741,10.16,22.352,280.550012686,1.100196174,5.864045422,-580.540490682
16.38954,0,20.574,265.179911346,1.433404804,4.50089143,-445.58825538
197.354025,25.4,4.826,80.307559222,1.515237,4.25781597,-421.523771378
74.054604,24.13,5.588,104.668749768,3.488958224,3.69829588,-181.216495326
27.645975,18.796,2.794,545.360075648,1.07143423,6.021460906,-596.124634266
145.304846,25.146,9.144,91.566911862,1.60643697,4.016092552,-397.593170268
353.157227,17.78,12.7,434.77679618,1.008762778,6.395556678,-633.160101724
171.469234,23.368,17.526,179.600730968,1.255949228,5.136831992,-508.546377622
138.814075,25.4,15.748,234.164238554,2.389431086,2.700057084,-267.30564649
90,25.4,14.224,0,25.4,1.524,-23.876
60.945396,24.13,11.938,56.742519992,2.467066186,2.61509002,-258.893915536
343.61046,21.082,21.844,184.909235464,1.433404804,4.50089143,-445.58825538
293.198591,19.558,25.4,56.698117744,3.335183322,3.868812684,-189.571824056
48.012788,16.002,22.86,305.850675318,1.887967014,3.417220496,-338.304830374
312.510447,7.366,25.4,35.887120758,1.560309554,4.134820534,-409.347222706
70.346176,4.318,21.844,80.303678102,1.708588912,3.775981526,-373.822164724
`)),b(x.ParsePatFile(`
*GRAVEL,GRAVEL
228.0128, 18.288,25.4, 305.851,1.88796, 3.41721,-338.305
184.9697, 16.002,22.86, -305.855,1.1002, 5.86405,-580.54
132.5104, 10.16,22.352, -377.595,1.56032, 4.13482,-409.347
267.2737, .254,16.002, -508.633,1.20815, 5.34005,-528.664
292.8337, 0,10.668, -330.198,1.23208, 5.23634,-518.398
357.2737, 2.032,5.842, -508.633,1.20815, 5.34005,-528.664
37.6942, 7.366,5.588, -416.59,.913587, 7.06194,-699.131
72.2553, 12.954,9.906, 586.404,.967664, 6.6672,-660.053
121.4296, 14.986,16.256, 387.712,1.20409, 5.35813,-530.455
175.2364, 12.192,20.828, -280.544,2.10934, 6.11713,-299.739
222.3974, 6.096,21.336, 413.481,.815543, 7.91078,-783.168
138.8141, 25.4,15.748, 234.164,2.38943, 2.70005,-267.306
171.4692, 23.368,17.526, -334.082,1.25595, 5.13682,-508.546
225, 18.288,18.288, 17.9605,17.9605, 3.59209,-32.3289
203.1986, 16.51,21.336, -136.743,3.33517, 1.93441,-191.506
291.8014, 14.732,20.574, -80.1833,4.71665, 2.73566,-134.048
30.9638, 15.748,18.034, 91.4773,4.35607, 4.4432,-143.663
161.5651, 19.558,20.32, -56.2253,8.03219, 3.21287,-77.109
16.3895, 0,20.574, 265.18,1.4334, 4.50088,-445.588
70.3462, 4.318,21.844, -297.294,1.70858, 3.77599,-373.822
293.1986, 19.558,25.4, -136.743,3.33517, 3.8688,-189.572
343.6105, 21.082,21.844, -265.18,1.4334, 4.50088,-445.588
339.444, 0,4.826, -136.751,2.97284, 4.34035,-212.677
294.7751, 4.064,3.302, -306.904,1.77401, 3.63672,-360.036
66.8014, 19.812,0, 136.743,3.33517, 3.8688,-189.572
17.354, 21.336,3.556, -345.474,1.51524, 4.25783,-421.524
69.444, 7.366,0, -136.751,2.97284, 2.17018,-214.848
101.3099, 18.288,0, 104.608,4.98135, 1.29515,-128.22
165.9638, 18.034,1.27, -80.0853,6.16041, 5.23634,-99.4905
186.009, 12.954,2.54, -255.263,1.32949, 4.85267,-480.414
303.6901, 15.748,15.748, -56.3575,7.04469, 3.66324,-87.9178
353.1572, 17.78,12.7, 434.777,1.00876, 6.39557,-633.16
60.9454, 24.13,11.938, -204.766,2.46708, 2.61508,-258.894
90, 25.4,14.224, 25.4,25.4, 1.524,-23.876
120.2564, 12.446,3.302, -204.773,1.82834, 3.52867,-349.339
48.0128, 10.668,6.35, 305.851,1.88796, 6.83443,-334.888
0, 15.24,11.43, 25.4,25.4, 6.604,-18.796
325.3048, 21.844,11.43, -310.042,1.60645, 4.0161,-397.593
254.0546, 25.146,9.144, 104.669,3.48897, 3.69829,-181.217
207.646, 24.13,5.588, 545.36,1.07142, 6.02145,-596.125
175.4261, 18.796,2.794, 331.174,1.01277, 6.37029,-630.658
175.4261, 18.796,2.794, 331.174,1.01277, 6.37029,-630.658
`)),b(x.ParsePatFile(`
*HATCH-DOTS
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
225,14.364914374,2.934914374,17.960512212,17.960512212,11.492295278,-24.428729146
225,6.359242552,5.089242552,17.960512212,17.960512212,16.19060262,-19.730421804
225,3.281299762,9.631299762,17.960512212,17.960512212,18.261173282,-17.659851142
225,19.161365538,5.191365538,17.960512212,17.960512212,11.492295278,-24.428729146
225,7.864421914,4.054421914,17.960512212,17.960512212,16.85579052,-19.065234158
225,2.841461932,11.731461932,17.960512212,17.960512212,20.609227006,-15.311797418
225,9.631299762,3.281299762,17.960512212,17.960512212,18.261173282,-17.659851142
225,2.934914374,14.364914374,17.960512212,17.960512212,11.492295278,-24.428729146
225,5.089242552,6.359242552,17.960512212,17.960512212,16.19060262,-19.730421804
225,11.731462186,2.841462186,17.960512212,17.960512212,20.60922726,-15.311797164
225,5.191365538,19.161365538,17.960512212,17.960512212,11.492295278,-24.428729146
225,4.054421914,7.864421914,17.960512212,17.960512212,16.85579052,-19.065234158
`)),b(x.ParsePatFile(`
*HATCH-SQRS
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
225,2.794,9.144,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,21.844,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,6.604,17.960512212,17.960512212,13.290779108,-22.630245316
225,19.304,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,14.224,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,11.684,17.960512212,17.960512212,7.902625292,-28.018399132
225,6.604,2.794,17.960512212,17.960512212,13.290779108,-22.630245316
225,2.794,19.304,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,4.064,17.960512212,17.960512212,9.698676564,-26.22234786
225,4.064,2.794,17.960512212,17.960512212,9.698676564,-26.22234786
225,11.684,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,14.224,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,9.144,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,21.844,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,16.764,17.960512212,17.960512212,7.902625292,-28.018399132
225,16.764,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
`)),b(x.ParsePatFile(`
*HEX,HEX
0, 0,0, 0,5.49926, 3.175,-6.35
120, 0,0, 0,5.49926, 3.175,-6.35
60, 3.175,0, 0,5.49926, 3.175,-6.35
`)),b(x.ParsePatFile(`
*HEXAGONS
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
239.931417,5.587999746,25.399999492,204.778078632,1.15693825,5.576441984,-552.067817376
239.931417,22.606,4.826,204.778078632,1.15693825,5.576441984,-552.067817376
300.068583,19.812000254,25.399999492,352.866180728,1.15693825,5.576441984,-552.067817376
60.068488,3.048,12.7,204.780260492,0.667036766,9.672031964,-957.531152498
119.931512,7.874,4.318,762.42292397,0.667036766,9.67203171,-957.531152498
300.068583,2.794,4.826,352.866180728,1.15693825,5.576441984,-552.067817376
180,2.794,4.826,0,25.4,5.587998984,-19.812001016
299.931512,17.526,21.082,762.42292397,0.667036766,9.67203171,-957.531152498
0,7.874,21.082,0,25.4,9.652,-15.748
180,17.526,4.318,0,25.4,9.652,-15.748
240.068488,22.352,12.7,204.780260492,0.667036766,9.672031964,-957.531152498
180,2.794,20.574,0,25.4,5.587998984,-19.812001016
`)),b(x.ParsePatFile(`
*HEXJOIN-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
45,3.81,16.51,17.960512212,17.960512212,7.184204834,-28.73681959
270,21.59,16.51,25.4,25.4,7.62,-17.78
315,16.51,21.59,17.960512212,17.960512212,7.184204834,-28.73681959
180,16.51,3.81,0,25.4,7.62,-17.78
270,13.97,3.81,25.4,25.4,7.62,-17.78
90,3.81,8.89,25.4,25.4,7.62,-17.78
135,8.89,3.81,17.960512212,17.960512212,7.184204834,-28.73681959
180,3.81,13.97,0,25.4,7.62,-17.78
270,11.43,3.81,25.4,25.4,7.62,-17.78
180,3.81,11.43,0,25.4,7.62,-17.78
225,21.59,8.89,17.960512212,17.960512212,7.184204834,-28.73681959
0,8.89,21.59,0,25.4,7.62,-17.78
`)),b(x.ParsePatFile(`
*HEXJOIN-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,21.59,11.43,25.4,25.4,2.54,-22.86
315,16.51,21.59,17.960512212,17.960512212,7.184204834,-28.73681959
270,13.97,3.81,25.4,25.4,7.62,-17.78
180,3.81,13.97,0,25.4,7.62,-17.78
180,16.51,3.81,0,25.4,2.54,-22.86
45,3.81,16.51,17.960512212,17.960512212,7.184204834,-28.73681959
90,3.81,13.97,25.4,25.4,2.54,-22.86
180,3.81,11.43,0,25.4,7.62,-17.78
180,11.43,3.81,0,25.4,2.54,-22.86
270,11.43,3.81,25.4,25.4,7.62,-17.78
90,3.81,8.89,25.4,25.4,2.54,-22.86
0,13.97,21.59,0,25.4,2.54,-22.86
135,8.89,3.81,17.960512212,17.960512212,7.184204834,-28.73681959
0,8.89,21.59,0,25.4,2.54,-22.86
225,21.59,8.89,17.960512212,17.960512212,7.184204834,-28.73681959
270,21.59,16.51,25.4,25.4,2.54,-22.86
`)),b(x.ParsePatFile(`
*HOLLY,HOLLY
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
99.462322,20.32,2.794,129.4477627,4.175734346,1.545021802,-152.9571465
74.744881,17.018,2.032,104.7031863,2.22772732,2.896045516,-286.7085124
68.198591,13.462,3.81,80.18324705,4.716661636,2.73566382,-134.0475224
270,14.732,9.398,0,25.4,1.778,-23.622
248.198591,19.05,8.89,80.18324705,4.716661636,2.73566382,-134.0475224
45,20.32,5.08,17.96051221,17.96051221,2.155261374,-33.76576305
351.869898,22.86,3.302,25.14471705,3.592102544,1.796051272,-177.8090711
0,21.844,3.302,0,25.4,1.016,-24.384
26.565051,20.828,2.794,34.07767607,11.35922544,1.135922544,-55.66020415
45,20.32,2.286,17.96051221,17.96051221,0.718420458,-35.20260397
341.565051,19.558,2.54,24.09655582,8.032185358,0.803218612,-79.51863395
0,18.542,2.54,0,25.4,1.016,-24.384
26.565051,18.034,2.286,34.07767607,11.35922544,0.567961272,-56.22816542
26.565051,17.526,2.032,34.07767607,11.35922544,0.567961272,-56.22816542
53.130102,16.764,1.016,91.44,5.08,1.27,-125.73
270,16.764,2.032,0,25.4,1.016,-24.384
303.690068,16.256,2.794,35.22346245,7.04469254,0.915809954,-90.6651923
315,15.748,3.302,17.96051221,17.96051221,0.718420458,-35.20260397
345.963757,14.732,3.556,24.6416195,6.160405002,1.047268924,-103.6796141
0,13.716,3.556,0,25.4,1.016,-24.384
33.690068,12.954,3.048,35.22346245,7.04469254,0.915809954,-90.6651923
255.963757,13.208,4.064,24.6416195,6.160405002,1.047268924,-103.6796141
281.309932,12.954,5.334,104.6083465,4.981349956,1.29515108,-128.2199447
284.036243,12.7,6.35,80.0852635,6.160405002,1.047268924,-103.6796141
296.565051,12.192,7.366,34.07767607,11.35922544,1.135922544,-55.66020415
303.690068,11.684,8.128,35.22346245,7.04469254,0.915809954,-90.6651923
180,12.7,8.128,0,25.4,1.016,-24.384
180,13.462,8.128,0,25.4,0.762,-24.638
213.690068,14.224,8.636,35.22346245,7.04469254,0.915809954,-90.6651923
243.434949,14.478,9.144,22.71845063,11.35922544,0.567961272,-56.22816542
251.565051,14.732,9.906,24.09655582,8.032185358,0.803218612,-79.51863395
108.434949,14.986,9.144,56.22529674,8.032185358,0.803218612,-79.51863395
135,15.494,8.636,17.96051221,17.96051221,0.718420458,-35.20260397
153.434949,16.002,8.382,22.71845063,11.35922544,0.567961272,-56.22816542
161.565051,16.764,8.128,24.09655582,8.032185358,0.803218612,-79.51863395
180,17.526,8.128,0,25.4,0.762,-24.638
198.434949,18.288,8.382,56.22529674,8.032185358,0.803218612,-79.51863395
225,18.796,8.89,17.96051221,17.96051221,0.718420458,-35.20260397
251.565051,19.05,9.652,24.09655582,8.032185358,0.803218612,-79.51863395
108.434949,19.304,8.89,56.22529674,8.032185358,0.803218612,-79.51863395
116.565051,19.812,7.874,34.07767607,11.35922544,1.135922544,-55.66020415
135,20.574,7.112,17.96051221,17.96051221,1.077630814,-34.84339386
161.565051,21.336,6.858,24.09655582,8.032185358,0.803218612,-79.51863395
180,22.098,6.858,0,25.4,0.762,-24.638
90,22.098,6.096,0,25.4,0.762,-24.638
111.801409,22.606,4.826,56.59993912,4.716661636,1.36783191,-135.4153543
126.869898,23.368,3.81,35.56,5.08,1.27,-125.73
149.036243,24.638,3.048,56.62883289,4.356064186,1.481061808,-146.6251165
338.587031,11.684,8.128,627.3335515,0.463661252,13.91447154,-1377.532674
338.198591,20.32,17.526,80.18324705,4.716661636,1.36783191,-135.4153543
323.972627,18.034,15.748,218.4910814,1.867445084,3.454773634,-342.0225773
315,15.24,13.462,17.96051221,17.96051221,2.873681832,-33.04734259
135,14.732,13.97,17.96051221,17.96051221,1.796051272,-34.12497315
126.869898,17.272,16.51,35.56,5.08,2.54,-124.46
105.945396,19.558,18.288,80.24604144,3.488958224,1.84914794,-183.0656433
30.963757,22.098,20.32,91.47734537,4.356064186,1.481061808,-146.6251165
14.036243,21.082,20.066,80.0852635,6.160405002,1.047268924,-103.6796141
0,20.32,20.066,0,25.4,0.762,-24.638
341.565051,19.558,20.32,24.09655582,8.032185358,0.803218612,-79.51863395
333.434949,19.05,20.574,22.71845063,11.35922544,0.567961272,-56.22816542
63.434949,18.796,20.066,22.71845063,11.35922544,0.567961272,-56.22816542
45,18.288,19.558,17.96051221,17.96051221,0.718420458,-35.20260397
33.690068,17.526,19.05,35.22346245,7.04469254,0.915809954,-90.6651923
18.434949,16.764,18.796,56.22529674,8.032185358,0.803218612,-79.51863395
0,16.002,18.796,0,25.4,0.762,-24.638
341.565051,15.24,19.05,24.09655582,8.032185358,0.803218612,-79.51863395
108.434949,15.494,18.288,56.22529674,8.032185358,0.803218612,-79.51863395
90,15.494,17.526,0,25.4,0.762,-24.638
75.963757,15.24,16.51,24.6416195,6.160405002,1.047268924,-103.6796141
45,14.478,15.748,17.96051221,17.96051221,1.077630814,-34.84339386
14.036243,13.462,15.494,80.0852635,6.160405002,1.047268924,-103.6796141
0,12.7,15.494,0,25.4,0.762,-24.638
126.869898,13.462,14.478,35.56,5.08,1.27,-125.73
90,13.462,13.716,0,25.4,0.762,-24.638
75.963757,13.208,12.7,24.6416195,6.160405002,1.047268924,-103.6796141
56.309932,12.7,11.938,56.35753981,7.04469254,0.915809954,-90.6651923
191.309932,13.97,12.192,104.6083465,4.981349956,1.29515108,-128.2199447
168.690068,15.24,11.938,24.90674927,4.981349956,1.29515108,-128.2199447
161.565051,16.764,11.43,24.09655582,8.032185358,1.60643697,-78.71541559
143.130102,17.78,10.668,91.44,5.08,1.27,-125.73
270,17.78,10.922,0,25.4,0.254,-25.146
270,17.78,11.684,0,25.4,0.762,-24.638
243.434949,18.288,12.7,22.71845063,11.35922544,1.135922544,-55.66020415
213.690068,19.05,13.208,35.22346245,7.04469254,0.915809954,-90.6651923
198.434949,19.812,13.462,56.22529674,8.032185358,0.803218612,-79.51863395
180,20.828,13.462,0,25.4,1.016,-24.384
146.309932,21.59,12.954,56.35753981,7.04469254,0.915809954,-90.6651923
303.690068,21.082,13.716,35.22346245,7.04469254,0.915809954,-90.6651923
270,21.082,14.478,0,25.4,0.762,-24.638
270,21.082,15.494,0,25.4,1.016,-24.384
243.434949,21.59,16.51,22.71845063,11.35922544,1.135922544,-55.66020415
225,22.098,17.018,17.96051221,17.96051221,0.718420458,-35.20260397
296.565051,21.844,17.526,34.07767607,11.35922544,0.567961272,-56.22816542
270,21.844,18.034,0,25.4,0.508,-24.892
255.963757,22.098,19.05,24.6416195,6.160405002,1.047268924,-103.6796141
243.434949,22.606,20.066,22.71845063,11.35922544,1.135922544,-55.66020415
233.130102,23.368,21.082,91.44,5.08,1.27,-125.73
40.601295,12.7,11.938,35.81521869,2.755016842,14.05058582,-220.1258435
195.945396,6.604,13.716,80.24604144,3.488958224,1.84914794,-183.0656433
5.194429,7.366,13.97,255.2564824,2.29960805,2.805521694,-277.7466482
19.983107,7.112,17.272,217.0068451,2.170068558,2.9729938,-294.3263839
185.710593,5.842,17.272,229.9928961,2.527394488,2.552668504,-252.7141722
164.054604,5.588,20.066,104.6687498,3.488958224,1.84914794,-183.0656433
45,6.858,20.066,17.96051221,17.96051221,1.436840916,-34.48418351
90,5.334,23.368,0,25.4,1.016,-24.384
75.963757,5.08,22.352,24.6416195,6.160405002,1.047268924,-103.6796141
243.434949,7.874,11.938,22.71845063,11.35922544,1.135922544,-55.66020415
236.309932,8.382,12.7,56.35753981,7.04469254,0.915809954,-90.6651923
225,9.144,13.462,17.96051221,17.96051221,1.077630814,-34.84339386
213.690068,9.906,13.97,35.22346245,7.04469254,0.915809954,-90.6651923
189.462322,11.43,14.224,129.4477627,4.175734346,1.545021802,-152.9571465
333.434949,10.922,14.478,22.71845063,11.35922544,0.567961272,-56.22816542
326.309932,10.16,14.986,56.35753981,7.04469254,0.915809954,-90.6651923
303.690068,9.652,15.748,35.22346245,7.04469254,0.915809954,-90.6651923
270,9.652,16.764,0,25.4,1.016,-24.384
251.565051,9.906,17.526,24.09655582,8.032185358,0.803218612,-79.51863395
236.309932,10.414,18.288,56.35753981,7.04469254,0.915809954,-90.6651923
213.690068,11.176,18.796,35.22346245,7.04469254,0.915809954,-90.6651923
0,10.16,18.796,0,25.4,1.016,-24.384
333.434949,9.144,19.304,22.71845063,11.35922544,1.135922544,-55.66020415
306.869898,8.382,20.32,35.56,5.08,1.27,-125.73
284.036243,8.128,21.336,80.0852635,6.160405002,1.047268924,-103.6796141
341.565051,7.366,21.59,24.09655582,8.032185358,0.803218612,-79.51863395
326.309932,6.604,22.098,56.35753981,7.04469254,0.915809954,-90.6651923
303.690068,6.096,22.86,35.22346245,7.04469254,0.915809954,-90.6651923
296.565051,5.334,24.384,34.07767607,11.35922544,1.703883816,-55.09224288
56.309932,4.572,21.59,56.35753981,7.04469254,0.915809954,-90.6651923
45,4.064,21.082,17.96051221,17.96051221,0.718420458,-35.20260397
33.690068,3.302,20.574,35.22346245,7.04469254,0.915809954,-90.6651923
116.565051,3.556,20.066,34.07767607,11.35922544,0.567961272,-56.22816542
108.434949,3.81,19.304,56.22529674,8.032185358,0.803218612,-79.51863395
90,3.81,18.288,0,25.4,1.016,-24.384
63.434949,3.302,17.272,22.71845063,11.35922544,1.135922544,-55.66020415
33.690068,2.54,16.764,35.22346245,7.04469254,0.915809954,-90.6651923
165.963757,3.556,16.51,24.6416195,6.160405002,1.047268924,-103.6796141
143.130102,4.572,15.748,91.44,5.08,1.27,-125.73
116.565051,5.08,14.732,34.07767607,11.35922544,1.135922544,-55.66020415
75.963757,4.826,13.716,24.6416195,6.160405002,1.047268924,-103.6796141
63.434949,4.318,12.7,22.71845063,11.35922544,1.135922544,-55.66020415
180,5.334,12.7,0,25.4,1.016,-24.384
165.963757,6.35,12.446,24.6416195,6.160405002,1.047268924,-103.6796141
135,6.858,11.938,17.96051221,17.96051221,0.718420458,-35.20260397
116.565051,7.366,10.922,34.07767607,11.35922544,1.135922544,-55.66020415
278.583621,5.334,24.384,847.7664863,0.473877386,13.61449474,-1347.834983
104.036243,7.62,5.08,80.0852635,6.160405002,1.047268924,-103.6796141
123.690068,8.128,4.318,35.22346245,7.04469254,0.915809954,-90.6651923
153.434949,9.144,3.81,22.71845063,11.35922544,1.135922544,-55.66020415
180,9.906,3.81,0,25.4,0.762,-24.638
206.565051,10.922,4.318,34.07767607,11.35922544,1.135922544,-55.66020415
236.309932,11.43,5.08,56.35753981,7.04469254,0.915809954,-90.6651923
255.963757,11.684,6.096,24.6416195,6.160405002,1.047268924,-103.6796141
288.434949,11.43,6.858,56.22529674,8.032185358,0.803218612,-79.51863395
303.690068,10.922,7.62,35.22346245,7.04469254,0.915809954,-90.6651923
333.434949,9.906,8.128,22.71845063,11.35922544,1.135922544,-55.66020415
0,9.144,8.128,0,25.4,0.762,-24.638
26.565051,8.128,7.62,34.07767607,11.35922544,1.135922544,-55.66020415
56.309932,7.62,6.858,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,7.366,6.096,24.09655582,8.032185358,0.803218612,-79.51863395
104.036243,4.064,7.874,80.0852635,6.160405002,1.047268924,-103.6796141
123.690068,4.572,7.112,35.22346245,7.04469254,0.915809954,-90.6651923
153.434949,5.588,6.604,22.71845063,11.35922544,1.135922544,-55.66020415
180,6.35,6.604,0,25.4,0.762,-24.638
206.565051,7.366,7.112,34.07767607,11.35922544,1.135922544,-55.66020415
236.309932,7.874,7.874,56.35753981,7.04469254,0.915809954,-90.6651923
255.963757,8.128,8.89,24.6416195,6.160405002,1.047268924,-103.6796141
288.434949,7.874,9.652,56.22529674,8.032185358,0.803218612,-79.51863395
303.690068,7.366,10.414,35.22346245,7.04469254,0.915809954,-90.6651923
333.434949,6.35,10.922,22.71845063,11.35922544,1.135922544,-55.66020415
0,5.588,10.922,0,25.4,0.762,-24.638
26.565051,4.572,10.414,34.07767607,11.35922544,1.135922544,-55.66020415
56.309932,4.064,9.652,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,3.81,8.89,24.09655582,8.032185358,0.803218612,-79.51863395
104.036243,8.636,9.652,80.0852635,6.160405002,1.047268924,-103.6796141
123.690068,9.144,8.89,35.22346245,7.04469254,0.915809954,-90.6651923
153.434949,10.16,8.382,22.71845063,11.35922544,1.135922544,-55.66020415
180,10.922,8.382,0,25.4,0.762,-24.638
206.565051,11.938,8.89,34.07767607,11.35922544,1.135922544,-55.66020415
236.309932,12.446,9.652,56.35753981,7.04469254,0.915809954,-90.6651923
255.963757,12.7,10.668,24.6416195,6.160405002,1.047268924,-103.6796141
288.434949,12.446,11.43,56.22529674,8.032185358,0.803218612,-79.51863395
303.690068,11.938,12.192,35.22346245,7.04469254,0.915809954,-90.6651923
333.434949,10.922,12.7,22.71845063,11.35922544,1.135922544,-55.66020415
0,10.16,12.7,0,25.4,0.762,-24.638
26.565051,9.144,12.192,34.07767607,11.35922544,1.135922544,-55.66020415
56.309932,8.636,11.43,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,8.382,10.668,24.09655582,8.032185358,0.803218612,-79.51863395
`)),b(x.ParsePatFile(`
*HONEY,HONEY
0, 0,0, 4.7625,2.74963, 3.175,-6.35
120, 0,0, 4.7625,2.74963, 3.175,-6.35
60, 0,0, 4.7625,2.74963, -6.35,3.175
`)),b(x.ParsePatFile(`
*HOUND,HOUND
0, 0,0, 6.35,1.5875, 25.4,-12.7
90, 0,0, -6.35,1.5875, 25.4,-12.7
`)),b(x.ParsePatFile(`
*INSUL,INSUL
0, 0,0, 0,9.525
0, 0,3.175, 0,9.525, 3.175,-3.175
0, 0,6.35, 0,9.525, 3.175,-3.175
`)),b(x.ParsePatFile(`
*JIS_LC_20,JIS_LC_20
45, 0,0, 0,20
45, .4,0, 0,20
`)),b(x.ParsePatFile(`
*JIS_LC_20A,JIS_LC_20A
45, 0,0, 0,20
45, 1,0, 0,20
`)),b(x.ParsePatFile(`
*JIS_LC_8,JIS_LC_8
45, 0,0, 0,7.8
45, .4,0, 0,7.8
`)),b(x.ParsePatFile(`
*JIS_LC_8A,JIS_LC_8A
45, 0,0, 0,7.8
45, 1,0, 0,7.8
`)),b(x.ParsePatFile(`
*JIS_RC_10,JIS_RC_10
45, 0,0, 0,10
45, .725,0, 0,10
45, 1.45,0, 0,10
`)),b(x.ParsePatFile(`
*JIS_RC_15,JIS_RC_15
45, 0,0, 0,15
45, .725,0, 0,15
45, 1.45,0, 0,15
`)),b(x.ParsePatFile(`
*JIS_RC_18,JIS_RC_18
45, 0,0, 0,18
45, 1,0, 0,18
45, 2,0, 0,18
`)),b(x.ParsePatFile(`
*JIS_RC_30,JIS_RC_30
45, 0,0, 0,30
45, 1,0, 0,30
45, 2,0, 0,30
`)),b(x.ParsePatFile(`
*JIS_STN_1E,JIS_STN_1E
45, 0,0, 0,1
45, .705,0, 0,1, 1,-.5
`)),b(x.ParsePatFile(`
*JIS_STN_2.5,JIS_STN_2.5
45, 0,0, 0,2.5
45, 1.765,0, 0,2.5, 1.2,-.5
`)),b(x.ParsePatFile(`
*JIS_WOOD,JIS_WOOD
45, 0,0, 0,.70710678
`)),b(x.ParsePatFile(`
*LATTICE-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,2.162738626,10.16,0,25.4,4.325477252,-21.074522748
270,15.24,2.162738626,25.4,25.4,4.325477252,-21.074522748
270,10.16,2.162738626,25.4,25.4,4.325477252,-21.074522748
135,12.7,6.80694346,17.960512212,17.960512212,8.334040482,-27.586983942
225,18.59305654,12.7,17.960512212,17.960512212,8.334040482,-27.586983942
45,2.162738626,15.24,17.960512212,17.960512212,11.309835394,-24.61118903
180,2.162738626,15.24,0,25.4,4.325477252,-21.074522748
315,12.7,18.59305654,17.960512212,17.960512212,8.334040482,-27.586983942
45,6.80694346,12.7,17.960512212,17.960512212,8.334040482,-27.586983942
315,15.24,23.237261374,17.960512212,17.960512212,11.309835394,-24.61118903
45,15.24,2.162738626,17.960512212,17.960512212,11.309835394,-24.61118903
315,2.162738626,10.16,17.960512212,17.960512212,11.309835394,-24.61118903
`)),b(x.ParsePatFile(`
*LATTICE-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,9.736666582,9.736666582,0,25.4,19.473333164,-5.926666836
270,15.663333418,25.4,25.4,25.4,25.4;,0 Removed 0 IT RENDERS A POINT
180,9.736666582,15.663333418,0,25.4,19.473333164,-5.926666836
270,9.736666582,25.4,25.4,25.4,25.4;,0 Removed 0 IT RENDERS A POINT
`)),b(x.ParsePatFile(`
*LATTICE-03
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,9.736666582,9.736666582,0,25.4,19.473333164,-5.926666836
180,9.736666582,15.663333418,0,25.4,19.473333164,-5.926666836
270,15.663333418,9.736666582,25.4,25.4,19.473333164,-5.926666836
270,9.736666582,9.736666582,25.4,25.4,19.473333164,-5.926666836
`)),b(x.ParsePatFile(`
*LATTICE-04
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
296.565051,3.894666582,11.684,34.077676066,11.35922544,28.776704194,-28.019422498
296.565051,8.636000254,14.054666582,34.077676066,11.35922544,28.776704194,-28.019422498
206.565051,11.684,21.505333418,34.077676066,11.35922544,28.776704194,-28.019422498
206.565051,14.054666582,16.763999746,34.077676066,11.35922544,28.776704194,-28.019422498
`)),b(x.ParsePatFile(`
*LATTICE-05,LATTICE-05
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,19.685,1.905,0,25.4,3.81,-21.59
180,5.715,23.495,0,25.4,3.81,-21.59
180,15.875,5.715,0,25.4,10.16,-15.24
180,15.875,1.905,0,25.4,13.97,-11.43
270,15.875,5.715,0,25.4,3.81,-21.59
270,19.685,19.685,0,25.4,17.78,-7.62
270,23.495,23.495,0,25.4,21.59,-3.81
0,9.525,19.685,0,25.4,10.16,-15.24
0,9.525,23.495,0,25.4,13.97,-11.43
90,9.525,19.685,0,25.4,3.81,-21.59
90,5.715,5.715,0,25.4,17.78,-7.62
90,1.905,1.905,0,25.4,21.59,-3.81
`)),b(x.ParsePatFile(`
*LATTICE-06,LATTICE-06
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
180,15.875,9.525,0,25.4,6.35,-19.05
270,15.875,15.875,0,25.4,6.35,-19.05
0,9.525,15.875,0,25.4,6.35,-19.05
90,9.525,9.525,0,25.4,6.35,-19.05
0,19.685,1.905,0,25.4,3.81,-21.59
180,5.715,23.495,0,25.4,3.81,-21.59
180,15.875,5.715,0,25.4,10.16,-15.24
180,15.875,1.905,0,25.4,13.97,-11.43
270,15.875,5.715,0,25.4,3.81,-21.59
270,19.685,19.685,0,25.4,17.78,-7.62
270,23.495,23.495,0,25.4,21.59,-3.81
0,9.525,19.685,0,25.4,10.16,-15.24
0,9.525,23.495,0,25.4,13.97,-11.43
90,9.525,19.685,0,25.4,3.81,-21.59
90,5.715,5.715,0,25.4,17.78,-7.62
90,1.905,1.905,0,25.4,21.59,-3.81
`)),b(x.ParsePatFile(`
*LATTICE-07
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,17.568333418,17.568333164,25.4,25.4,22.436666582,-2.963333418
270,20.531666836,17.568333164,25.4,25.4,22.436666582,-2.963333418
270,4.868333164,4.868333418,25.4,25.4,22.436666582,-2.963333418
270,7.831666582,4.868333418,25.4,25.4,22.436666582,-2.963333418
180,17.568333418,7.831666582,0,25.4,22.436666582,-2.963333418
180,17.568333418,4.868333164,0,25.4,22.436666582,-2.963333418
180,4.868333418,20.531666836,0,25.4,22.436666582,-2.963333418
180,4.868333418,17.568333418,0,25.4,22.436666582,-2.963333418
`)),b(x.ParsePatFile(`
*LEAF-01,LEAF-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
83.659808,22.86,5.08,25.244646742,2.804960862,2.30006779,-227.706714766
26.565051,22.352,4.826,34.077676066,11.35922544,0.567961272,-56.22816542
14.036243,21.336,4.572,80.085263502,6.160405002,1.047268924,-103.679614078
315,21.336,4.572,17.960512212,17.960512212,1.436840916,-34.484183508
83.659808,21.336,4.572,25.244646742,2.804960862,2.30006779,-227.706714766
0,20.066,4.572,0,25.4,1.27,-24.13
345.963757,20.828,3.048,24.6416195,6.160405002,1.047268924,-103.679614078
326.309932,20.066,3.556,56.357539812,7.04469254,0.915809954,-90.665192304
303.690068,19.558,4.318,35.223462446,7.04469254,0.915809954,-90.665192304
18.434949,18.796,4.064,56.225296744,8.032185358,0.803218612,-79.518633952
288.434949,18.542,4.826,56.225296744,8.032185358,0.803218612,-79.518633952
180,19.558,4.826,0,25.4,1.016,-24.384
258.690068,19.812,6.096,24.906749272,4.981349956,1.29515108,-128.219944728
243.434949,20.066,6.604,22.718450626,11.35922544,0.567961272,-56.22816542
225,20.828,7.366,17.960512212,17.960512212,1.077630814,-34.843393864
213.690068,21.59,7.874,35.223462446,7.04469254,0.915809954,-90.665192304
191.309932,22.86,8.128,104.608346536,4.981349956,1.29515108,-128.219944728
128.659808,7.62,10.668,35.701322044,3.966813504,1.626393496,-161.0129622
143.130102,8.636,9.906,91.44,5.08,1.27,-125.73
153.434949,9.652,9.398,22.718450626,11.35922544,1.135922544,-55.660204148
192.528808,9.652,9.398,104.69063898,2.755016842,2.341764176,-231.834664854
105.945396,9.652,9.398,80.246041438,3.488958224,1.84914794,-183.065643266
153.434949,10.668,8.89,22.718450626,11.35922544,1.135922544,-55.660204148
149.036243,11.938,8.128,56.628832894,4.356064186,1.481061808,-146.625116452
95.710593,11.938,8.128,229.992896122,2.527394488,2.552668504,-252.714172244
194.931417,11.938,8.128,289.599936166,1.636157764,3.94314045,-390.37089693
135,12.954,7.112,17.960512212,17.960512212,1.436840916,-34.484183508
123.690068,13.462,6.35,35.223462446,7.04469254,0.915809954,-90.665192304
199.653824,13.462,6.35,297.294468148,1.708588912,3.775981526,-373.822164724
71.565051,13.462,6.35,24.09655582,8.032185358,2.409655582,-77.912196982
119.054604,14.732,4.064,204.766485564,2.467066186,2.61509002,-258.893915536
288.434949,14.732,3.556,56.225296744,8.032185358,1.60643697,-78.715415594
21.801409,13.462,3.048,56.599939124,4.716661636,1.36783191,-135.415354264
11.309932,12.192,2.794,104.608346536,4.981349956,1.29515108,-128.219944728
0,11.43,2.794,0,25.4,0.762,-24.638
341.565051,9.906,3.302,24.09655582,8.032185358,1.60643697,-78.715415594
326.309932,8.382,4.318,56.357539812,7.04469254,1.831620162,-89.74938235
308.659808,7.366,5.588,35.701322044,3.966813504,1.626393496,-161.0129622
300.963757,6.604,6.858,91.477345366,4.356064186,1.481061808,-146.625116452
285.945396,6.096,8.636,80.246041438,3.488958224,1.84914794,-183.065643266
270,6.096,10.414,0,25.4,1.778,-23.622
279.462322,5.842,11.938,129.447762694,4.175734346,1.545021802,-152.95714646
285.945396,5.334,13.716,80.246041438,3.488958224,1.84914794,-183.065643266
123.690068,5.842,12.954,35.223462446,7.04469254,0.915809954,-90.665192304
161.565051,6.604,12.7,24.09655582,8.032185358,0.803218612,-79.518633952
171.869898,8.382,12.446,25.144717046,3.592102544,1.796051272,-177.809071102
171.869898,10.16,12.192,25.144717046,3.592102544,1.796051272,-177.809071102
161.565051,11.684,11.684,24.09655582,8.032185358,1.60643697,-78.715415594
161.565051,13.208,11.176,24.09655582,8.032185358,1.60643697,-78.715415594
146.309932,14.732,10.16,56.357539812,7.04469254,1.831620162,-89.74938235
119.744881,15.748,8.382,148.072666262,3.150482142,2.047813532,-202.733533318
111.801409,16.256,7.112,56.599939124,4.716661636,1.36783191,-135.415354264
90,16.256,6.096,0,25.4,1.016,-24.384
75.963757,16.002,5.08,24.6416195,6.160405002,1.047268924,-103.679614078
56.309932,15.494,4.318,56.357539812,7.04469254,0.915809954,-90.665192304
63.434949,15.24,3.81,22.718450626,11.35922544,0.567961272,-56.22816542
126.869898,16.002,2.794,35.56,5.08,1.27,-125.73
45,15.24,2.032,17.960512212,17.960512212,1.077630814,-34.843393864
233.130102,22.606,1.016,91.44,5.08,1.27,-125.73
258.690068,1.778,1.27,24.906749272,4.981349956,1.29515108,-128.219944728
258.690068,3.556,1.27,24.906749272,4.981349956,1.29515108,-128.219944728
198.434949,6.604,0.508,56.225296744,8.032185358,1.60643697,-78.715415594
225,7.874,0.508,17.960512212,17.960512212,0.718420458,-35.202603966
198.434949,8.636,0.762,56.225296744,8.032185358,0.803218612,-79.518633952
348.690068,7.366,1.016,24.906749272,4.981349956,1.29515108,-128.219944728
345.963757,6.35,1.27,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,5.334,1.778,22.718450626,11.35922544,1.135922544,-55.660204148
333.434949,3.81,2.54,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,2.54,2.794,24.906749272,4.981349956,1.29515108,-128.219944728
0,1.778,2.794,0,25.4,0.762,-24.638
8.130102,0,2.54,154.460405328,3.592102544,1.796051272,-177.809071102
236.309932,0.508,5.842,56.357539812,7.04469254,0.915809954,-90.665192304
236.309932,1.016,6.604,56.357539812,7.04469254,0.915809954,-90.665192304
213.690068,1.778,7.112,35.223462446,7.04469254,0.915809954,-90.665192304
0,0.762,7.112,0,25.4,1.016,-24.384
326.309932,0,7.62,56.357539812,7.04469254,0.915809954,-90.665192304
18.434949,0,6.604,56.225296744,8.032185358,0.803218612,-79.518633952
0,0,13.97,0,25.4,1.778,-23.622
14.036243,2.54,15.494,80.085263502,6.160405002,1.047268924,-103.679614078
21.801409,1.27,14.986,56.599939124,4.716661636,1.36783191,-135.415354264
30.963757,0,14.224,91.477345366,4.356064186,1.481061808,-146.625116452
254.054604,0.508,16.764,104.668749768,3.488958224,1.84914794,-183.065643266
158.198591,1.27,17.526,80.18324705,4.716661636,1.36783191,-135.415354264
153.434949,2.794,16.764,22.718450626,11.35922544,1.703883816,-55.092242876
158.198591,4.064,16.256,80.18324705,4.716661636,1.36783191,-135.415354264
180,5.334,16.256,0,25.4,1.27,-24.13
33.690068,4.572,15.748,35.223462446,7.04469254,0.915809954,-90.665192304
45,4.064,15.24,17.960512212,17.960512212,0.718420458,-35.202603966
53.130102,3.302,14.224,91.44,5.08,1.27,-125.73
56.309932,2.286,12.7,56.357539812,7.04469254,1.831620162,-89.74938235
51.340192,1.27,11.43,126.938033652,3.966813504,1.626393496,-161.0129622
38.659808,0,10.414,35.701322044,3.966813504,1.626393496,-161.0129622
180,20.828,12.192,0,25.4,2.54,-22.86
310.601295,20.828,12.192,35.815218692,2.755016842,2.341764176,-231.834664854
82.405357,20.828,12.192,204.774468022,1.678479244,3.843717484,-380.528029646
180,21.336,12.192,0,25.4,0.508,-24.892
194.036243,22.352,12.446,80.085263502,6.160405002,1.047268924,-103.679614078
198.434949,23.114,12.7,56.225296744,8.032185358,0.803218612,-79.518633952
0,21.082,9.398,0,25.4,2.032,-23.368
348.690068,19.812,9.652,24.906749272,4.981349956,1.29515108,-128.219944728
321.340192,18.542,10.668,126.938033652,3.966813504,1.626393496,-161.0129622
300.963757,17.78,11.938,91.477345366,4.356064186,1.481061808,-146.625116452
21.801409,16.51,11.43,56.599939124,4.716661636,1.36783191,-135.415354264
284.036243,16.256,12.446,80.085263502,6.160405002,1.047268924,-103.679614078
180,17.78,12.446,0,25.4,1.524,-23.876
261.869898,18.034,14.224,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,18.542,15.494,80.18324705,4.716661636,1.36783191,-135.415354264
225,19.558,16.51,17.960512212,17.960512212,1.436840916,-34.484183508
216.869898,20.574,17.272,35.56,5.08,1.27,-125.73
198.434949,22.86,18.034,56.225296744,8.032185358,2.409655582,-77.912196982
153.434949,9.144,16.51,22.718450626,11.35922544,1.703883816,-55.092242876
170.537678,10.668,16.256,25.054405568,4.175734346,1.545021802,-152.95714646
188.130102,12.446,16.51,154.460405328,3.592102544,1.796051272,-177.809071102
201.801409,13.716,17.018,56.599939124,4.716661636,1.36783191,-135.415354264
219.805571,15.24,18.288,35.773504272,3.252136752,1.9838035,-196.396538372
18.434949,24.638,6.35,56.225296744,8.032185358,0.803218612,-79.518633952
33.690068,23.876,5.842,35.223462446,7.04469254,0.915809954,-90.665192304
0,23.876,5.842,0,25.4,1.016,-24.384
80.537678,23.876,5.842,25.054405568,4.175734346,1.545021802,-152.95714646
36.869898,22.86,5.08,35.56,5.08,1.27,-125.73
341.565051,22.86,5.08,24.09655582,8.032185358,1.60643697,-78.715415594
53.130102,24.638,4.064,91.44,5.08,1.27,-125.73
38.659808,23.368,3.048,35.701322044,3.966813504,1.626393496,-161.0129622
9.462322,21.844,2.794,129.447762694,4.175734346,1.545021802,-152.95714646
180,24.13,8.128,0,25.4,1.27,-24.13
158.198591,25.4,7.62,80.18324705,4.716661636,1.36783191,-135.415354264
216.869898,23.622,1.778,35.56,5.08,1.27,-125.73
206.565051,24.638,2.286,34.077676066,11.35922544,1.135922544,-55.660204148
198.434949,25.4,2.54,56.225296744,8.032185358,0.803218612,-79.518633952
90,24.638,0,0,25.4,0.508,-24.892
26.565051,24.384,13.462,34.077676066,11.35922544,1.135922544,-55.660204148
56.309932,24.384,13.462,56.357539812,7.04469254,1.831620162,-89.74938235
36.869898,24.384,13.462,35.56,5.08,1.27,-125.73
30.963757,23.114,12.7,91.477345366,4.356064186,1.481061808,-146.625116452
78.690068,23.114,12.7,24.906749272,4.981349956,3.885452986,-125.629642822
156.037511,25.4,11.684,193.423444496,2.578979348,2.501609932,-247.659378188
30.963757,24.13,9.652,91.477345366,4.356064186,1.481061808,-146.625116452
14.036243,23.114,9.398,80.085263502,6.160405002,1.047268924,-103.679614078
180,25.4,18.034,0,25.4,2.54,-22.86
0,21.844,22.098,0,25.4,2.286,-23.114
11.309932,24.13,22.098,104.608346536,4.981349956,1.29515108,-128.219944728
135,25.4,20.828,17.960512212,17.960512212,1.796051272,-34.124973152
0,24.384,19.304,0,25.4,1.016,-24.384
345.963757,23.368,19.558,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,22.352,20.066,22.718450626,11.35922544,1.135922544,-55.660204148
315,21.844,20.574,17.960512212,17.960512212,0.718420458,-35.202603966
306.869898,21.082,21.59,35.56,5.08,1.27,-125.73
11.309932,19.812,21.336,104.608346536,4.981349956,1.29515108,-128.219944728
284.036243,19.558,22.352,80.085263502,6.160405002,1.047268924,-103.679614078
180,21.082,22.352,0,25.4,1.524,-23.876
14.036243,16.51,22.606,80.085263502,6.160405002,1.047268924,-103.679614078
18.434949,15.748,22.352,56.225296744,8.032185358,0.803218612,-79.518633952
33.690068,14.986,21.844,35.223462446,7.04469254,0.915809954,-90.665192304
230.194429,16.51,19.812,162.6068376,3.252136752,1.9838035,-196.396538372
239.036243,17.272,21.082,56.628832894,4.356064186,1.481061808,-146.625116452
236.309932,18.288,22.606,56.357539812,7.04469254,1.831620162,-89.74938235
213.690068,19.05,23.114,35.223462446,7.04469254,0.915809954,-90.665192304
198.434949,19.812,23.368,56.225296744,8.032185358,0.803218612,-79.518633952
0,18.796,23.368,0,25.4,1.016,-24.384
345.963757,17.78,23.622,24.6416195,6.160405002,1.047268924,-103.679614078
261.869898,21.336,24.13,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,21.844,25.4,80.18324705,4.716661636,1.36783191,-135.415354264
36.869898,13.97,21.082,35.56,5.08,1.27,-125.73
0,13.97,21.082,0,25.4,2.032,-23.368
78.690068,13.97,21.082,24.906749272,4.981349956,2.590301906,-126.924793648
33.690068,13.208,20.574,35.223462446,7.04469254,0.915809954,-90.665192304
30.963757,11.938,19.812,91.477345366,4.356064186,1.481061808,-146.625116452
336.037511,11.938,19.812,193.423444496,2.578979348,2.501609932,-247.659378188
79.380345,11.938,19.812,283.976346702,1.560309554,4.134820534,-409.347222706
26.565051,10.922,19.304,34.077676066,11.35922544,1.135922544,-55.660204148
9.462322,9.398,19.05,129.447762694,4.175734346,1.545021802,-152.95714646
318.814075,9.398,19.05,234.164238554,2.389431086,2.700057084,-267.30564649
82.405357,9.398,19.05,204.774468022,1.678479244,3.843717484,-380.528029646
0,8.382,19.05,0,25.4,1.016,-24.384
0,7.366,19.05,0,25.4,1.016,-24.384
0,5.08,19.304,0,25.4,1.524,-23.876
104.036243,5.334,18.288,80.085263502,6.160405002,1.047268924,-103.679614078
201.801409,6.604,18.796,56.599939124,4.716661636,1.36783191,-135.415354264
123.690068,7.62,17.272,35.223462446,7.04469254,1.831620162,-89.74938235
338.198591,16.51,24.13,80.18324705,4.716661636,1.36783191,-135.415354264
333.434949,14.986,24.892,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,13.716,25.146,24.906749272,4.981349956,1.29515108,-128.219944728
0,11.684,25.146,0,25.4,2.032,-23.368
18.434949,10.16,24.638,56.225296744,8.032185358,1.60643697,-78.715415594
26.565051,8.636,23.876,34.077676066,11.35922544,1.703883816,-55.092242876
45,7.366,22.606,17.960512212,17.960512212,1.796051272,-34.124973152
71.565051,6.858,21.082,24.09655582,8.032185358,1.60643697,-78.715415594
81.869898,6.604,19.304,25.144717046,3.592102544,1.796051272,-177.809071102
;0,5.08,19.304,0,25.4,1.524,-23.876
315,0,20.828,17.960512212,17.960512212,0.718420458,-35.202603966
198.434949,0.762,22.606,56.225296744,8.032185358,0.803218612,-79.518633952
343.300756,0.762,22.606,184.898786158,2.432878802,2.651837978,-262.531947376
74.744881,0.762,22.606,104.703186326,2.22772732,2.896045516,-286.708512434
206.565051,1.27,22.86,34.077676066,11.35922544,0.567961272,-56.22816542
213.690068,2.032,23.368,35.223462446,7.04469254,0.915809954,-90.665192304
216.869898,3.048,24.13,35.56,5.08,1.27,-125.73
352.874984,3.048,24.13,25.203858152,3.150482142,2.047813532,-202.733533318
78.690068,3.048,24.13,24.906749272,4.981349956,1.29515108,-128.219944728
213.690068,3.81,24.638,35.223462446,7.04469254,0.915809954,-90.665192304
213.690068,4.572,25.146,35.223462446,7.04469254,0.915809954,-90.665192304
206.565051,5.08,25.4,34.077676066,11.35922544,0.567961272,-56.22816542
45,7.112,25.146,17.960512212,17.960512212,0.359210356,-35.561814322
56.309932,6.604,24.384,56.357539812,7.04469254,0.915809954,-90.665192304
56.309932,5.588,22.86,56.357539812,7.04469254,1.831620162,-89.74938235
53.130102,4.826,21.844,91.44,5.08,1.27,-125.73
45,3.556,20.574,17.960512212,17.960512212,1.796051272,-34.124973152
36.869898,2.54,19.812,35.56,5.08,1.27,-125.73
18.434949,1.016,19.304,56.225296744,8.032185358,1.60643697,-78.715415594
0,0,19.304,0,25.4,1.016,-24.384
81.253838,24.13,22.098,179.594740378,1.931126186,3.340848284,-330.743991038
`)),b(x.ParsePatFile(`
*LEAF-02,LEAF-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
303.690068,19.558,4.318,35.223462446,7.04469254,0.915809954,-90.665192304
18.434949,18.796,4.064,56.225296744,8.032185358,0.803218612,-79.518633952
288.434949,18.542,4.826,56.225296744,8.032185358,0.803218612,-79.518633952
180,19.558,4.826,0,25.4,1.016,-24.384
258.690068,19.812,6.096,24.906749272,4.981349956,1.29515108,-128.219944728
243.434949,20.066,6.604,22.718450626,11.35922544,0.567961272,-56.22816542
288.434949,14.732,3.556,56.225296744,8.032185358,1.60643697,-78.715415594
21.801409,13.462,3.048,56.599939124,4.716661636,1.36783191,-135.415354264
11.309932,12.192,2.794,104.608346536,4.981349956,1.29515108,-128.219944728
0,11.43,2.794,0,25.4,0.762,-24.638
341.565051,9.906,3.302,24.09655582,8.032185358,1.60643697,-78.715415594
326.309932,8.382,4.318,56.357539812,7.04469254,1.831620162,-89.74938235
308.659808,7.366,5.588,35.701322044,3.966813504,1.626393496,-161.0129622
300.963757,6.604,6.858,91.477345366,4.356064186,1.481061808,-146.625116452
285.945396,6.096,8.636,80.246041438,3.488958224,1.84914794,-183.065643266
270,6.096,10.414,0,25.4,1.778,-23.622
279.462322,5.842,11.938,129.447762694,4.175734346,1.545021802,-152.95714646
285.945396,5.334,13.716,80.246041438,3.488958224,1.84914794,-183.065643266
123.690068,5.842,12.954,35.223462446,7.04469254,0.915809954,-90.665192304
161.565051,6.604,12.7,24.09655582,8.032185358,0.803218612,-79.518633952
171.869898,8.382,12.446,25.144717046,3.592102544,1.796051272,-177.809071102
171.869898,10.16,12.192,25.144717046,3.592102544,1.796051272,-177.809071102
161.565051,11.684,11.684,24.09655582,8.032185358,1.60643697,-78.715415594
161.565051,13.208,11.176,24.09655582,8.032185358,1.60643697,-78.715415594
146.309932,14.732,10.16,56.357539812,7.04469254,1.831620162,-89.74938235
119.744881,15.748,8.382,148.072666262,3.150482142,2.047813532,-202.733533318
111.801409,16.256,7.112,56.599939124,4.716661636,1.36783191,-135.415354264
90,16.256,6.096,0,25.4,1.016,-24.384
75.963757,16.002,5.08,24.6416195,6.160405002,1.047268924,-103.679614078
56.309932,15.494,4.318,56.357539812,7.04469254,0.915809954,-90.665192304
63.434949,15.24,3.81,22.718450626,11.35922544,0.567961272,-56.22816542
126.869898,16.002,2.794,35.56,5.08,1.27,-125.73
45,15.24,2.032,17.960512212,17.960512212,1.077630814,-34.843393864
225,7.874,0.508,17.960512212,17.960512212,0.718420458,-35.202603966
198.434949,8.636,0.762,56.225296744,8.032185358,0.803218612,-79.518633952
348.690068,7.366,1.016,24.906749272,4.981349956,1.29515108,-128.219944728
345.963757,6.35,1.27,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,5.334,1.778,22.718450626,11.35922544,1.135922544,-55.660204148
333.434949,3.81,2.54,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,2.54,2.794,24.906749272,4.981349956,1.29515108,-128.219944728
0,1.778,2.794,0,25.4,0.762,-24.638
8.130102,0,2.54,154.460405328,3.592102544,1.796051272,-177.809071102
236.309932,0.508,5.842,56.357539812,7.04469254,0.915809954,-90.665192304
236.309932,1.016,6.604,56.357539812,7.04469254,0.915809954,-90.665192304
213.690068,1.778,7.112,35.223462446,7.04469254,0.915809954,-90.665192304
0,0.762,7.112,0,25.4,1.016,-24.384
326.309932,0,7.62,56.357539812,7.04469254,0.915809954,-90.665192304
158.198591,1.27,17.526,80.18324705,4.716661636,1.36783191,-135.415354264
153.434949,2.794,16.764,22.718450626,11.35922544,1.703883816,-55.092242876
158.198591,4.064,16.256,80.18324705,4.716661636,1.36783191,-135.415354264
180,5.334,16.256,0,25.4,1.27,-24.13
33.690068,4.572,15.748,35.223462446,7.04469254,0.915809954,-90.665192304
45,4.064,15.24,17.960512212,17.960512212,0.718420458,-35.202603966
53.130102,3.302,14.224,91.44,5.08,1.27,-125.73
56.309932,2.286,12.7,56.357539812,7.04469254,1.831620162,-89.74938235
51.340192,1.27,11.43,126.938033652,3.966813504,1.626393496,-161.0129622
38.659808,0,10.414,35.701322044,3.966813504,1.626393496,-161.0129622
321.340192,18.542,10.668,126.938033652,3.966813504,1.626393496,-161.0129622
300.963757,17.78,11.938,91.477345366,4.356064186,1.481061808,-146.625116452
21.801409,16.51,11.43,56.599939124,4.716661636,1.36783191,-135.415354264
284.036243,16.256,12.446,80.085263502,6.160405002,1.047268924,-103.679614078
180,17.78,12.446,0,25.4,1.524,-23.876
261.869898,18.034,14.224,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,18.542,15.494,80.18324705,4.716661636,1.36783191,-135.415354264
225,19.558,16.51,17.960512212,17.960512212,1.436840916,-34.484183508
284.036243,19.558,22.352,80.085263502,6.160405002,1.047268924,-103.679614078
0,5.08,19.304,0,25.4,1.524,-23.876
104.036243,5.334,18.288,80.085263502,6.160405002,1.047268924,-103.679614078
201.801409,6.604,18.796,56.599939124,4.716661636,1.36783191,-135.415354264
123.690068,7.62,17.272,35.223462446,7.04469254,1.831620162,-89.74938235
153.434949,9.144,16.51,22.718450626,11.35922544,1.703883816,-55.092242876
170.537678,10.668,16.256,25.054405568,4.175734346,1.545021802,-152.95714646
188.130102,12.446,16.51,154.460405328,3.592102544,1.796051272,-177.809071102
201.801409,13.716,17.018,56.599939124,4.716661636,1.36783191,-135.415354264
219.805571,15.24,18.288,35.773504272,3.252136752,1.9838035,-196.396538372
230.194429,16.51,19.812,162.6068376,3.252136752,1.9838035,-196.396538372
239.036243,17.272,21.082,56.628832894,4.356064186,1.481061808,-146.625116452
236.309932,18.288,22.606,56.357539812,7.04469254,1.831620162,-89.74938235
213.690068,19.05,23.114,35.223462446,7.04469254,0.915809954,-90.665192304
198.434949,19.812,23.368,56.225296744,8.032185358,0.803218612,-79.518633952
0,18.796,23.368,0,25.4,1.016,-24.384
345.963757,17.78,23.622,24.6416195,6.160405002,1.047268924,-103.679614078
338.198591,16.51,24.13,80.18324705,4.716661636,1.36783191,-135.415354264
45,7.366,22.606,17.960512212,17.960512212,1.796051272,-34.124973152
71.565051,6.858,21.082,24.09655582,8.032185358,1.60643697,-78.715415594
81.869898,6.604,19.304,25.144717046,3.592102544,1.796051272,-177.809071102
;0,5.08,19.304,0,25.4,1.524,-23.876
53.130102,4.826,21.844,91.44,5.08,1.27,-125.73
45,3.556,20.574,17.960512212,17.960512212,1.796051272,-34.124973152
36.869898,2.54,19.812,35.56,5.08,1.27,-125.73
18.434949,1.016,19.304,56.225296744,8.032185358,1.60643697,-78.715415594
0,0,19.304,0,25.4,1.016,-24.384
0,24.384,19.304,0,25.4,1.016,-24.384
345.963757,23.368,19.558,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,22.352,20.066,22.718450626,11.35922544,1.135922544,-55.660204148
315,21.844,20.574,17.960512212,17.960512212,0.718420458,-35.202603966
306.869898,21.082,21.59,35.56,5.08,1.27,-125.73
11.309932,19.812,21.336,104.608346536,4.981349956,1.29515108,-128.219944728
180,21.082,22.352,0,25.4,1.524,-23.876
261.869898,21.336,24.13,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,21.844,25.4,80.18324705,4.716661636,1.36783191,-135.415354264
333.434949,14.986,24.892,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,13.716,25.146,24.906749272,4.981349956,1.29515108,-128.219944728
0,11.684,25.146,0,25.4,2.032,-23.368
18.434949,10.16,24.638,56.225296744,8.032185358,1.60643697,-78.715415594
26.565051,8.636,23.876,34.077676066,11.35922544,1.703883816,-55.092242876
45,7.112,25.146,17.960512212,17.960512212,0.359210356,-35.561814322
56.309932,6.604,24.384,56.357539812,7.04469254,0.915809954,-90.665192304
56.309932,5.588,22.86,56.357539812,7.04469254,1.831620162,-89.74938235
53.130102,24.638,4.064,91.44,5.08,1.27,-125.73
38.659808,23.368,3.048,35.701322044,3.966813504,1.626393496,-161.0129622
9.462322,21.844,2.794,129.447762694,4.175734346,1.545021802,-152.95714646
345.963757,20.828,3.048,24.6416195,6.160405002,1.047268924,-103.679614078
326.309932,20.066,3.556,56.357539812,7.04469254,0.915809954,-90.665192304
225,20.828,7.366,17.960512212,17.960512212,1.077630814,-34.843393864
213.690068,21.59,7.874,35.223462446,7.04469254,0.915809954,-90.665192304
191.309932,22.86,8.128,104.608346536,4.981349956,1.29515108,-128.219944728
180,24.13,8.128,0,25.4,1.27,-24.13
158.198591,25.4,7.62,80.18324705,4.716661636,1.36783191,-135.415354264
233.130102,22.606,1.016,91.44,5.08,1.27,-125.73
216.869898,23.622,1.778,35.56,5.08,1.27,-125.73
206.565051,24.638,2.286,34.077676066,11.35922544,1.135922544,-55.660204148
198.434949,25.4,2.54,56.225296744,8.032185358,0.803218612,-79.518633952
30.963757,24.13,9.652,91.477345366,4.356064186,1.481061808,-146.625116452
14.036243,23.114,9.398,80.085263502,6.160405002,1.047268924,-103.679614078
0,21.082,9.398,0,25.4,2.032,-23.368
348.690068,19.812,9.652,24.906749272,4.981349956,1.29515108,-128.219944728
216.869898,20.574,17.272,35.56,5.08,1.27,-125.73
198.434949,22.86,18.034,56.225296744,8.032185358,2.409655582,-77.912196982
180,25.4,18.034,0,25.4,2.54,-22.86
`)),b(x.ParsePatFile(`
*LEAF-03,LEAF-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
344.054604,21.844,9.652,104.668749768,3.488958224,1.84914794,-183.065643266
338.198591,20.574,10.16,80.18324705,4.716661636,1.36783191,-135.415354264
326.309932,19.05,11.176,56.357539812,7.04469254,1.831620162,-89.74938235
320.194429,17.526,12.446,162.6068376,3.252136752,1.9838035,-196.396538372
308.659808,16.51,13.716,35.701322044,3.966813504,1.626393496,-161.0129622
300.963757,15.748,14.986,91.477345366,4.356064186,1.481061808,-146.625116452
293.198591,14.986,16.764,56.698117744,3.335183322,1.934406342,-191.506230398
281.309932,14.732,18.034,104.608346536,4.981349956,1.29515108,-128.219944728
276.340192,14.478,20.32,204.76213556,2.804960862,2.30006779,-227.706714766
270,14.478,21.59,0,25.4,1.27,-24.13
257.471192,14.986,23.876,129.485790304,2.755016842,2.341764176,-231.834664854
164.054604,16.764,23.368,104.668749768,3.488958224,1.84914794,-183.065643266
158.198591,18.034,22.86,80.18324705,4.716661636,1.36783191,-135.415354264
146.309932,19.558,21.844,56.357539812,7.04469254,1.831620162,-89.74938235
140.194429,21.082,20.574,162.6068376,3.252136752,1.9838035,-196.396538372
125.537678,22.352,18.796,126.965671138,2.952690056,2.18499055,-216.314071054
116.565051,23.368,16.764,34.077676066,11.35922544,2.271845088,-54.524281604
105.945396,23.876,14.986,80.246041438,3.488958224,1.84914794,-183.065643266
97.125016,24.13,12.954,179.577488698,3.150482142,2.047813532,-202.733533318
90,24.13,11.43,0,25.4,1.524,-23.876
77.471192,23.622,9.144,129.485790304,2.755016842,2.341764176,-231.834664854
195.945396,3.556,9.652,80.246041438,3.488958224,1.84914794,-183.065643266
201.801409,4.826,10.16,56.599939124,4.716661636,1.36783191,-135.415354264
213.690068,6.35,11.176,35.223462446,7.04469254,1.831620162,-89.74938235
219.805571,7.874,12.446,35.773504272,3.252136752,1.9838035,-196.396538372
231.340192,8.89,13.716,126.938033652,3.966813504,1.626393496,-161.0129622
239.036243,9.652,14.986,56.628832894,4.356064186,1.481061808,-146.625116452
246.801409,10.414,16.764,136.74251925,3.335183322,1.934406342,-191.506230398
258.690068,10.668,18.034,24.906749272,4.981349956,1.29515108,-128.219944728
263.659808,10.922,20.32,25.244646742,2.804960862,2.30006779,-227.706714766
270,10.922,21.59,0,25.4,1.27,-24.13
282.528808,10.414,23.876,104.69063898,2.755016842,2.341764176,-231.834664854
15.945396,8.636,23.368,80.246041438,3.488958224,1.84914794,-183.065643266
21.801409,7.366,22.86,56.599939124,4.716661636,1.36783191,-135.415354264
33.690068,5.842,21.844,35.223462446,7.04469254,1.831620162,-89.74938235
39.805571,4.318,20.574,35.773504272,3.252136752,1.9838035,-196.396538372
54.462322,3.048,18.796,91.53339072,2.952690056,2.18499055,-216.314071054
63.434949,2.032,16.764,22.718450626,11.35922544,2.271845088,-54.524281604
74.054604,1.524,14.986,104.668749768,3.488958224,1.84914794,-183.065643266
82.874984,1.27,12.954,25.203858152,3.150482142,2.047813532,-202.733533318
90,1.27,11.43,0,25.4,1.524,-23.876
102.528808,1.778,9.144,104.69063898,2.755016842,2.341764176,-231.834664854
128.659808,5.334,3.81,35.701322044,3.966813504,1.626393496,-161.0129622
146.309932,6.858,2.794,56.357539812,7.04469254,1.831620162,-89.74938235
153.434949,8.382,2.032,22.718450626,11.35922544,1.703883816,-55.092242876
164.054604,10.16,1.524,104.668749768,3.488958224,1.84914794,-183.065643266
171.869898,11.938,1.27,25.144717046,3.592102544,1.796051272,-177.809071102
180,13.462,1.27,0,25.4,1.524,-23.876
188.130102,15.24,1.524,154.460405328,3.592102544,1.796051272,-177.809071102
195.945396,17.018,2.032,80.246041438,3.488958224,1.84914794,-183.065643266
206.565051,18.542,2.794,34.077676066,11.35922544,1.703883816,-55.092242876
218.659808,19.812,3.81,35.701322044,3.966813504,1.626393496,-161.0129622
225,21.082,5.08,17.960512212,17.960512212,1.796051272,-34.124973152
315,19.812,6.35,17.960512212,17.960512212,1.796051272,-34.124973152
321.340192,18.542,7.366,126.938033652,3.966813504,1.626393496,-161.0129622
336.801409,16.764,8.128,136.74251925,3.335183322,1.934406342,-191.506230398
341.565051,15.24,8.636,24.09655582,8.032185358,1.60643697,-78.715415594
351.869898,13.462,8.89,25.144717046,3.592102544,1.796051272,-177.809071102
0,11.938,8.89,0,25.4,1.524,-23.876
8.130102,10.16,8.636,154.460405328,3.592102544,1.796051272,-177.809071102
18.434949,8.636,8.128,56.225296744,8.032185358,1.60643697,-78.715415594
23.198591,6.858,7.366,56.698117744,3.335183322,1.934406342,-191.506230398
38.659808,5.588,6.35,35.701322044,3.966813504,1.626393496,-161.0129622
45,4.318,5.08,17.960512212,17.960512212,1.796051272,-34.124973152
`)),b(x.ParsePatFile(`
*LINE,LINE
0, 0,0, 0,3.175
`)),b(x.ParsePatFile(`
*LOOPLINKS,LOOPLINKS
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
206.565051,13.462,17.018,34.077676066,11.35922544,0.567961272,-56.22816542
243.434949,13.716,17.526,22.718450626,11.35922544,0.567961272,-56.22816542
116.565051,11.938,17.018,34.077676066,11.35922544,0.567961272,-56.22816542
153.434949,12.446,16.764,22.718450626,11.35922544,0.567961272,-56.22816542
180,12.954,16.764,0,25.4,0.508,-24.892
258.690068,4.826,14.986,24.906749272,4.981349956,1.29515108,-128.219944728
251.565051,5.08,15.748,24.09655582,8.032185358,0.803218612,-79.518633952
243.434949,5.588,16.764,22.718450626,11.35922544,1.135922544,-55.660204148
230.194429,6.858,18.288,162.6068376,3.252136752,1.9838035,-196.396538372
225,7.874,19.304,17.960512212,17.960512212,1.436840916,-34.484183508
209.744881,9.652,20.32,148.072666262,3.150482142,2.047813532,-202.733533318
194.036243,11.684,20.828,80.085263502,6.160405002,2.094537594,-102.632345154
251.565051,7.112,15.24,24.09655582,8.032185358,1.60643697,-78.715415594
239.036243,7.874,16.51,56.628832894,4.356064186,1.481061808,-146.625116452
225,8.89,17.526,17.960512212,17.960512212,1.436840916,-34.484183508
210.963757,10.16,18.288,91.477345366,4.356064186,1.481061808,-146.625116452
198.434949,11.684,18.796,56.225296744,8.032185358,1.60643697,-78.715415594
116.565051,17.018,11.938,34.077676066,11.35922544,0.567961272,-56.22816542
153.434949,17.526,11.684,22.718450626,11.35922544,0.567961272,-56.22816542
26.565051,17.018,13.462,34.077676066,11.35922544,0.567961272,-56.22816542
63.434949,16.764,12.954,22.718450626,11.35922544,0.567961272,-56.22816542
90,16.764,12.446,0,25.4,0.508,-24.892
168.690068,14.986,20.574,24.906749272,4.981349956,1.29515108,-128.219944728
161.565051,15.748,20.32,24.09655582,8.032185358,0.803218612,-79.518633952
153.434949,16.764,19.812,22.718450626,11.35922544,1.135922544,-55.660204148
140.194429,18.288,18.542,162.6068376,3.252136752,1.9838035,-196.396538372
135,19.304,17.526,17.960512212,17.960512212,1.436840916,-34.484183508
119.744881,20.32,15.748,148.072666262,3.150482142,2.047813532,-202.733533318
104.036243,20.828,13.716,80.085263502,6.160405002,2.094537594,-102.632345154
161.565051,15.24,18.288,24.09655582,8.032185358,1.60643697,-78.715415594
149.036243,16.51,17.526,56.628832894,4.356064186,1.481061808,-146.625116452
135,17.526,16.51,17.960512212,17.960512212,1.436840916,-34.484183508
120.963757,18.288,15.24,91.477345366,4.356064186,1.481061808,-146.625116452
108.434949,18.796,13.716,56.225296744,8.032185358,1.60643697,-78.715415594
26.565051,11.938,8.382,34.077676066,11.35922544,0.567961272,-56.22816542
63.434949,11.684,7.874,22.718450626,11.35922544,0.567961272,-56.22816542
296.565051,13.462,8.382,34.077676066,11.35922544,0.567961272,-56.22816542
333.434949,12.954,8.636,22.718450626,11.35922544,0.567961272,-56.22816542
0,12.446,8.636,0,25.4,0.508,-24.892
78.690068,20.574,10.414,24.906749272,4.981349956,1.29515108,-128.219944728
71.565051,20.32,9.652,24.09655582,8.032185358,0.803218612,-79.518633952
63.434949,19.812,8.636,22.718450626,11.35922544,1.135922544,-55.660204148
50.194429,18.542,7.112,162.6068376,3.252136752,1.9838035,-196.396538372
45,17.526,6.096,17.960512212,17.960512212,1.436840916,-34.484183508
29.744881,15.748,5.08,148.072666262,3.150482142,2.047813532,-202.733533318
14.036243,13.716,4.572,80.085263502,6.160405002,2.094537594,-102.632345154
71.565051,18.288,10.16,24.09655582,8.032185358,1.60643697,-78.715415594
59.036243,17.526,8.89,56.628832894,4.356064186,1.481061808,-146.625116452
45,16.51,7.874,17.960512212,17.960512212,1.436840916,-34.484183508
30.963757,15.24,7.112,91.477345366,4.356064186,1.481061808,-146.625116452
18.434949,13.716,6.604,56.225296744,8.032185358,1.60643697,-78.715415594
296.565051,8.382,13.462,34.077676066,11.35922544,0.567961272,-56.22816542
333.434949,7.874,13.716,22.718450626,11.35922544,0.567961272,-56.22816542
206.565051,8.382,11.938,34.077676066,11.35922544,0.567961272,-56.22816542
243.434949,8.636,12.446,22.718450626,11.35922544,0.567961272,-56.22816542
270,8.636,12.954,0,25.4,0.508,-24.892
348.690068,10.414,4.826,24.906749272,4.981349956,1.29515108,-128.219944728
341.565051,9.652,5.08,24.09655582,8.032185358,0.803218612,-79.518633952
333.434949,8.636,5.588,22.718450626,11.35922544,1.135922544,-55.660204148
320.194429,7.112,6.858,162.6068376,3.252136752,1.9838035,-196.396538372
315,6.096,7.874,17.960512212,17.960512212,1.436840916,-34.484183508
299.744881,5.08,9.652,148.072666262,3.150482142,2.047813532,-202.733533318
284.036243,4.572,11.684,80.085263502,6.160405002,2.094537594,-102.632345154
341.565051,10.16,7.112,24.09655582,8.032185358,1.60643697,-78.715415594
329.036243,8.89,7.874,56.628832894,4.356064186,1.481061808,-146.625116452
315,7.874,8.89,17.960512212,17.960512212,1.436840916,-34.484183508
300.963757,7.112,10.16,91.477345366,4.356064186,1.481061808,-146.625116452
288.434949,6.604,11.684,56.225296744,8.032185358,1.60643697,-78.715415594
90,11.684,-7.874,0,25.4,15.748,-9.652
270,13.716,7.874,0,25.4,15.748,-9.652
180,7.874,11.684,0,25.4,15.748,-9.652
0,-7.874,13.716,0,25.4,15.748,-9.652
`)),b(x.ParsePatFile(`
*MAZE-01
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,24.13,23.368,0,25.4,6.35,-19.05
90,24.13,13.97,25.4,25.4,9.398,-16.002
90,21.082,13.97,25.4,25.4,6.35,-19.05
0,17.78,10.668,0,25.4,2.794,-22.606
180,14.478,20.32,0,25.4,9.652,-15.748
270,14.478,23.368,25.4,25.4,3.048,-22.352
0,1.778,23.368,0,25.4,12.7,-12.7
90,24.13,7.366,25.4,25.4,3.302,-22.098
180,11.43,1.27,0,25.4,9.652,-15.748
0,17.78,7.366,0,25.4,6.35,-19.05
270,11.43,4.318,25.4,25.4,3.048,-22.352
0,4.826,4.318,0,25.4,6.604,-18.796
90,17.78,4.318,25.4,25.4,3.048,-22.352
270,4.826,20.32,25.4,25.4,16.002,-9.398
0,7.874,7.366,0,25.4,6.604,-18.796
270,7.874,17.272,25.4,25.4,9.906,-15.494
180,17.78,17.272,0,25.4,9.906,-15.494
270,17.78,23.368,25.4,25.4,6.096,-19.304
180,24.13,4.318,0,25.4,6.35,-19.05
90,24.13,1.27,25.4,25.4,3.048,-22.352
0,14.478,1.27,0,25.4,9.652,-15.748
270,14.478,10.668,25.4,25.4,9.398,-16.002
270,17.78,13.97,25.4,25.4,3.302,-22.098
0,11.43,13.97,0,25.4,6.35,-19.05
90,11.43,10.668,25.4,25.4,3.302,-22.098
90,1.778,1.27,25.4,25.4,22.098,-3.302
`)),b(x.ParsePatFile(`
*MAZE-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,22.859999746,2.54,25.4,25.4,2.54,-22.86
0,17.779999746,2.54,0,25.4,5.08,-20.32
90,0,7.62,25.4,25.4,12.7,-12.7
270,22.859999746,22.86,25.4,25.4,12.7,-12.7
270,7.619999746,22.86,25.4,25.4,2.54,-22.86
180,7.619999746,22.86,0,25.4,10.16,-15.24
0,5.079999746,5.08,0,25.4,3.81,-21.59
90,5.079999746,7.62,25.4,25.4,5.08,-20.32
180,12.699999746,7.62,0,25.4,7.62,-17.78
90,12.699999746,2.54,25.4,25.4,5.08,-20.32
270,17.779999746,5.08,25.4,25.4,2.54,-22.86
0,15.239999746,5.08,0,25.4,2.54,-22.86
270,15.239999746,7.62,25.4,25.4,2.54,-22.86
180,17.779999746,7.62,0,25.4,2.54,-22.86
270,15.239999746,15.24,25.4,25.4,2.54,-22.86
0,7.619999746,15.24,0,25.4,7.62,-17.78
90,7.619999746,10.16,25.4,25.4,5.08,-20.32
180,17.779999746,10.16,0,25.4,10.16,-15.24
180,15.239999746,12.7,0,25.4,5.08,-20.32
270,20.319999746,20.32,25.4,25.4,12.7,-12.7
0,2.539999746,2.54,0,25.4,10.16,-15.24
0,2.539999746,20.32,0,25.4,17.78,-7.62
270,2.539999746,5.08,25.4,25.4,2.54,-22.86
90,2.539999746,7.62,25.4,25.4,12.7,-12.7
180,2.539999746,5.08,0,25.4,7.62,-17.78
180,0,7.62,0,25.4,5.080000254,-20.319999746
180,7.619999746,0,0,25.4,7.62,-17.78
270,17.779999746,17.78,25.4,25.4,5.08,-20.32
0,10.159999746,0,0,25.4,10.16,-15.24
0,5.079999746,17.78,0,25.4,12.7,-12.7
90,5.079999746,15.24,25.4,25.4,2.54,-22.86
270,15.239999746,2.54,25.4,25.4,2.54,-22.86
0,10.159999746,22.86,0,25.4,10.16,-15.24
270,10.159999746,25.4,25.4,25.4,2.54,-22.86
`)),b(x.ParsePatFile(`
*MUDST,MUDST
0, 0,0, 12.7,6.35, 6.35,-6.35,0,-6.35,0,-6.35
`)),b(x.ParsePatFile(`
*NET,NET
0, 0,0, 0,3.175
90, 0,0, 0,3.175
`)),b(x.ParsePatFile(`
*NET3,NET3
0, 0,0, 0,3.175
60, 0,0, 0,3.175
120, 0,0, 0,3.175
`)),b(x.ParsePatFile(`
*PLAST,PLAST
0, 0,0, 0,6.35
0, 0,.79375, 0,6.35
0, 0,1.5875, 0,6.35
`)),b(x.ParsePatFile(`
*PLASTI,PLASTI
0, 0,0, 0,6.35
0, 0,.79375, 0,6.35
0, 0,1.5875, 0,6.35
0, 0,3.96875, 0,6.35
`)),b(x.ParsePatFile(`
*QCAD-LOGO
;By John Hyslop,    Line 101 modified by CVH to fix left side of pencil drift when hatching far from Origin
;Developed in mm as metric QCAD3 pattern
243.434949,20.32,9.144,22.718450626,11.35922544,0.567961272,-56.22816542
248.198591,20.828,10.414,80.18324705,4.716661636,1.36783191,-135.415354264
263.659808,21.082,12.7,25.244646742,2.804960862,2.30006779,-227.706714766
276.340192,20.828,14.986,204.76213556,2.804960862,2.30006779,-227.706714766
290.556045,20.066,17.018,136.750876358,2.97284521,2.170177016,-214.847518234
310.601295,18.542,18.796,35.815218692,2.755016842,2.341764176,-231.834664854
324.462322,16.764,20.066,91.53339072,2.952690056,2.18499055,-216.314071054
336.801409,14.986,20.828,136.74251925,3.335183322,1.934406342,-191.506230398
351.869898,13.208,21.082,25.144717046,3.592102544,1.796051272,-177.809071102
26.565051,15.494,4.572,34.077676066,11.35922544,1.703883816,-55.092242876
7.125016,13.462,4.318,179.577488698,3.150482142,2.047813532,-202.733533318
0,11.43,4.318,0,25.4,2.032,-23.368
344.054604,9.652,4.826,104.668749768,3.488958224,1.84914794,-183.065643266
336.801409,7.874,5.588,136.74251925,3.335183322,1.934406342,-191.506230398
320.194429,6.35,6.858,162.6068376,3.252136752,1.9838035,-196.396538372
308.659808,5.334,8.128,35.701322044,3.966813504,1.626393496,-161.0129622
293.198591,4.572,9.906,56.698117744,3.335183322,1.934406342,-191.506230398
285.945396,4.064,11.684,80.246041438,3.488958224,1.84914794,-183.065643266
270,4.064,13.208,0,25.4,1.524,-23.876
261.869898,4.318,14.986,25.144717046,3.592102544,1.796051272,-177.809071102
246.801409,5.08,16.764,136.74251925,3.335183322,1.934406342,-191.506230398
234.462322,6.35,18.542,91.53339072,2.952690056,2.18499055,-216.314071054
219.805571,7.874,19.812,35.773504272,3.252136752,1.9838035,-196.396538372
206.565051,9.398,20.574,34.077676066,11.35922544,1.703883816,-55.092242876
195.945396,11.176,21.082,80.246041438,3.488958224,1.84914794,-183.065643266
180,12.192,21.082,0,25.4,1.016,-24.384
180,13.208,21.082,0,25.4,1.016,-24.384
233.130102,23.368,6.858,91.44,5.08,1.27,-125.73
248.198591,23.876,8.128,80.18324705,4.716661636,1.36783191,-135.415354264
248.198591,24.384,9.398,80.18324705,4.716661636,1.36783191,-135.415354264
260.537678,24.638,10.922,25.054405568,4.175734346,1.545021802,-152.95714646
261.869898,24.892,12.7,25.144717046,3.592102544,1.796051272,-177.809071102
278.130102,24.638,14.478,154.460405328,3.592102544,1.796051272,-177.809071102
279.462322,24.384,16.002,129.447762694,4.175734346,1.545021802,-152.95714646
288.434949,23.876,17.526,56.225296744,8.032185358,1.60643697,-78.715415594
299.744881,22.86,19.304,148.072666262,3.150482142,2.047813532,-202.733533318
308.659808,21.844,20.574,35.701322044,3.966813504,1.626393496,-161.0129622
315,20.574,21.844,17.960512212,17.960512212,1.796051272,-34.124973152
321.340192,19.304,22.86,126.938033652,3.966813504,1.626393496,-161.0129622
329.036243,18.034,23.622,56.628832894,4.356064186,1.481061808,-146.625116452
338.198591,16.764,24.13,80.18324705,4.716661636,1.36783191,-135.415354264
338.198591,15.494,24.638,80.18324705,4.716661636,1.36783191,-135.415354264
350.537678,13.97,24.892,25.054405568,4.175734346,1.545021802,-152.95714646
0,12.7,24.892,0,25.4,1.27,-24.13
0,11.43,24.892,0,25.4,1.27,-24.13
11.309932,10.16,24.638,104.608346536,4.981349956,1.29515108,-128.219944728
14.036243,9.144,24.384,80.085263502,6.160405002,1.047268924,-103.679614078
21.801409,7.874,23.876,56.599939124,4.716661636,1.36783191,-135.415354264
21.801409,6.604,23.368,56.599939124,4.716661636,1.36783191,-135.415354264
36.869898,5.588,22.606,35.56,5.08,1.27,-125.73
36.869898,4.572,21.844,35.56,5.08,1.27,-125.73
33.690068,19.05,2.286,35.223462446,7.04469254,0.915809954,-90.665192304
26.565051,17.526,1.524,34.077676066,11.35922544,1.703883816,-55.092242876
21.801409,16.256,1.016,56.599939124,4.716661636,1.36783191,-135.415354264
11.309932,14.986,0.762,104.608346536,4.981349956,1.29515108,-128.219944728
8.130102,13.208,0.508,154.460405328,3.592102544,1.796051272,-177.809071102
0,11.684,0.508,0,25.4,1.524,-23.876
350.537678,10.16,0.762,25.054405568,4.175734346,1.545021802,-152.95714646
348.690068,8.89,1.016,24.906749272,4.981349956,1.29515108,-128.219944728
338.198591,7.62,1.524,80.18324705,4.716661636,1.36783191,-135.415354264
333.434949,6.604,2.032,22.718450626,11.35922544,1.135922544,-55.660204148
323.130102,5.588,2.794,91.44,5.08,1.27,-125.73
323.130102,4.572,3.556,91.44,5.08,1.27,-125.73
315,3.556,4.572,17.960512212,17.960512212,1.436840916,-34.484183508
306.869898,2.794,5.588,35.56,5.08,1.27,-125.73
306.869898,2.032,6.604,35.56,5.08,1.27,-125.73
296.565051,1.524,7.62,34.077676066,11.35922544,1.135922544,-55.660204148
291.801409,1.016,8.89,56.599939124,4.716661636,1.36783191,-135.415354264
281.309932,0.762,10.16,104.608346536,4.981349956,1.29515108,-128.219944728
281.309932,0.508,11.43,104.608346536,4.981349956,1.29515108,-128.219944728
270,0.508,12.7,0,25.4,1.27,-24.13
270,0.508,13.97,0,25.4,1.27,-24.13
258.690068,0.762,15.24,24.906749272,4.981349956,1.29515108,-128.219944728
258.690068,1.016,16.51,24.906749272,4.981349956,1.29515108,-128.219944728
248.198591,1.524,17.78,80.18324705,4.716661636,1.36783191,-135.415354264
243.434949,2.032,18.796,22.718450626,11.35922544,1.135922544,-55.660204148
233.130102,2.794,19.812,91.44,5.08,1.27,-125.73
233.130102,3.556,20.828,91.44,5.08,1.27,-125.73
225,4.572,21.844,17.960512212,17.960512212,1.436840916,-34.484183508
0,8.89,5.334,0,25.4,7.366,-18.034
180,14.224,9.906,0,25.4,1.016,-24.384
270,14.224,11.176,0,25.4,1.27,-24.13
180,15.748,11.176,0,25.4,1.524,-23.876
270,15.748,12.192,0,25.4,1.016,-24.384
270,24.892,2.794,0,25.4,0.254,-25.146
270,24.892,3.302,0,25.4,0.508,-24.892
45,20.828,2.032,17.960512212,17.960512212,3.592102544,-32.328922134
225,22.86,5.08,17.960512212,17.960512212,3.592102544,-32.328922134
45,20.066,2.794,17.960512212,17.960512212,3.592102544,-32.328922134
0,13.8209782,14.218285,0,25.4,0,-25.4
0,14.9935692,16.1227008,0,25.4,0,-25.4
0,16.2642042,18.3038496,0,25.4,0,-25.4
135,24.892,3.302,17.960512212,17.960512212,12.57235865,-23.348666028
56.309932,24.384,1.778,56.357539812,7.04469254,0.915809954,-90.665192304
45,23.876,1.27,17.960512212,17.960512212,0.718420458,-35.202603966
33.690068,23.114,0.762,35.223462446,7.04469254,0.915809954,-90.665192304
18.434949,22.352,0.508,56.225296744,8.032185358,0.803218612,-79.518633952
135.806929,22.352,0.508,-35.917462074,0.505879862,12.753228494,-1262.569616842
289.983107,12.192,12.192,217.006845132,2.170068558,2.9729938,-294.326383914
338.198591,13.462,13.208,80.18324705,4.716661636,2.73566382,-134.047522354
105.945396,12.192,12.192,80.246041438,3.488958224,1.84914794,-183.065643266
218.659808,13.462,13.208,35.701322044,3.966813504,1.626393496,-161.0129622
336.801409,11.684,13.97,136.74251925,3.335183322,1.934406342,-191.506230398
56.309932,16.764,19.177,56.357539812,7.04469254,0.457905104,-91.123097408
239.036243,12.065,11.049,56.628832894,4.356064186,0.740530904,-147.365647356
236.309932,14.478,15.24,56.357539812,7.04469254,0.457905104,-91.123097408
236.309932,15.748,17.272,56.357539812,7.04469254,0.457905104,-91.123097408
0,11.684,10.414,0,25.4,0,-25.4
0,12.446,8.636,0,25.4,0.508,-24.892
0,13.716,8.636,0,25.4,0,-25.4
0,11.43,8.636,0,25.4,0,-25.4
0,9.144,8.636,0,25.4,0,-25.4
0,6.858,8.636,0,25.4,0,-25.4
180,6.096,8.636,0,25.4,0.762,-24.638
180,8.382,8.636,0,25.4,0.762,-24.638
180,10.668,8.636,0,25.4,0.762,-24.638
239.036243,11.43,9.906,56.628832894,4.356064186,1.481061808,-146.625116452
0,11.176,11.176,0,25.4,1.27,-24.13
341.565051,10.414,11.43,24.09655582,8.032185358,0.803218612,-79.518633952
315,9.906,11.938,17.960512212,17.960512212,0.718420458,-35.202603966
296.565051,9.652,12.446,34.077676066,11.35922544,0.567961272,-56.22816542
180,9.652,12.446,0,25.4,5.334,-20.066
240.068488,14.478,20.828,204.780260492,0.667036766,9.672031964,-957.531152498
0,16.002,12.446,0,25.4,4.572,-20.828
240.255119,19.05,17.78,56.708680588,3.150482142,6.143440342,-198.637906508
`)),b(x.ParsePatFile(`
*REDBACK,REDBACK
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
63.434949,18.542,19.812,22.71845063,11.35922544,0.567961272,-56.22816542
33.690068,17.78,19.304,35.22346245,7.04469254,0.915809954,-90.6651923
75.963757,17.526,18.288,24.6416195,6.160405002,1.047268924,-103.6796141
0,16.764,18.288,0,25.4,0.762,-24.638
108.434949,17.018,17.526,56.22529674,8.032185358,0.803218612,-79.51863395
90,17.018,17.272,0,25.4,0.254,-25.146
0,13.716,14.478,0,25.4,0.254,-25.146
270,13.716,14.732,0,25.4,0.254,-25.146
225,13.97,14.986,17.96051221,17.96051221,0.359210356,-35.56181432
180,14.224,14.986,0,25.4,0.254,-25.146
315,13.97,15.24,17.96051221,17.96051221,0.359210356,-35.56181432
15.524111,9.398,13.97,184.9097925,1.359630758,4.745111668,-469.7660475
0,8.89,13.97,0,25.4,0.508,-24.892
45,8.636,13.716,17.96051221,17.96051221,0.359210356,-35.56181432
0,7.874,13.716,0,25.4,0.762,-24.638
26.565051,4.826,12.192,34.07767607,11.35922544,3.407767632,-53.38835906
0,4.572,12.192,0,25.4,0.254,-25.146
33.690068,3.81,11.684,35.22346245,7.04469254,0.915809954,-90.6651923
32.005383,1.778,10.414,91.54141687,2.692394666,2.396231174,-237.2268895
45,1.524,10.16,17.96051221,17.96051221,0.359210356,-35.56181432
270,1.524,10.414,0,25.4,0.254,-25.146
225,1.778,10.668,17.96051221,17.96051221,0.359210356,-35.56181432
213.690068,4.064,12.192,35.22346245,7.04469254,2.747430116,-88.8335724
243.434949,4.318,12.7,22.71845063,11.35922544,0.567961272,-56.22816542
205.016893,8.128,14.478,56.77539445,1.534470134,4.20444803,-416.2403639
189.462322,9.652,14.732,129.4477627,4.175734346,1.545021802,-152.9571465
194.036243,10.668,14.986,80.0852635,6.160405002,1.047268924,-103.6796141
194.036243,12.7,15.494,80.0852635,6.160405002,2.094537594,-102.6323452
198.434949,14.224,16.002,56.22529674,8.032185358,1.60643697,-78.71541559
6.340192,11.938,15.748,204.7621356,2.804960862,2.30006779,-227.7067148
315,11.684,16.002,17.96051221,17.96051221,0.359210356,-35.56181432
45,11.43,15.748,17.96051221,17.96051221,0.359210356,-35.56181432
23.198591,9.652,14.986,56.69811774,3.335183322,1.934406342,-191.5062304
0,8.89,14.986,0,25.4,0.762,-24.638
45,8.128,14.224,17.96051221,17.96051221,1.077630814,-34.84339386
236.309932,8.636,14.986,56.35753981,7.04469254,0.915809954,-90.6651923
206.565051,9.144,15.24,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,10.668,16.002,34.07767607,11.35922544,1.703883816,-55.09224288
206.565051,11.176,16.256,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,11.684,16.51,34.07767607,11.35922544,0.567961272,-56.22816542
180,14.478,16.51,0,25.4,2.794,-22.606
225,14.732,16.764,17.96051221,17.96051221,0.359210356,-35.56181432
321.340192,13.462,17.78,126.9380337,3.966813504,1.626393496,-161.0129622
296.565051,13.208,18.288,34.07767607,11.35922544,0.567961272,-56.22816542
285.945396,12.7,20.066,80.24604144,3.488958224,1.84914794,-183.0656433
254.054604,13.208,21.844,104.6687498,3.488958224,1.84914794,-183.0656433
135,13.462,21.59,17.96051221,17.96051221,0.359210356,-35.56181432
90,13.462,20.828,0,25.4,0.762,-24.638
71.565051,13.208,20.066,24.09655582,8.032185358,0.803218612,-79.51863395
105.945396,13.716,18.288,80.24604144,3.488958224,1.84914794,-183.0656433
135,14.732,17.272,17.96051221,17.96051221,1.436840916,-34.48418351
180,14.986,17.272,0,25.4,0.254,-25.146
270,14.986,17.526,0,25.4,0.254,-25.146
270,14.986,18.034,0,25.4,0.508,-24.892
296.565051,14.732,18.542,34.07767607,11.35922544,0.567961272,-56.22816542
278.130102,14.478,20.32,154.4604053,3.592102544,1.796051272,-177.8090711
251.565051,14.732,21.082,24.09655582,8.032185358,0.803218612,-79.51863395
225,14.986,21.336,17.96051221,17.96051221,0.359210356,-35.56181432
225,15.24,21.59,17.96051221,17.96051221,0.359210356,-35.56181432
243.434949,15.494,22.098,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,16.002,23.114,22.71845063,11.35922544,1.135922544,-55.66020415
243.434949,16.51,24.13,22.71845063,11.35922544,1.135922544,-55.66020415
225,16.764,24.384,17.96051221,17.96051221,0.359210356,-35.56181432
168.690068,20.574,23.622,24.90674927,4.981349956,3.885452986,-125.6296428
355.601295,17.272,23.876,25.32518405,1.9480911,3.31175487,-327.8637273
56.309932,16.764,23.114,56.35753981,7.04469254,0.915809954,-90.6651923
56.309932,16.256,22.352,56.35753981,7.04469254,0.915809954,-90.6651923
63.434949,16.002,21.844,22.71845063,11.35922544,0.567961272,-56.22816542
56.309932,15.494,21.082,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,15.24,20.32,24.09655582,8.032185358,0.803218612,-79.51863395
90,15.24,20.066,0,25.4,0.254,-25.146
90,15.24,19.558,0,25.4,0.508,-24.892
90,15.24,18.796,0,25.4,0.762,-24.638
225,15.494,19.05,17.96051221,17.96051221,0.359210356,-35.56181432
243.434949,15.748,19.558,22.71845063,11.35922544,0.567961272,-56.22816542
225,16.002,19.812,17.96051221,17.96051221,0.359210356,-35.56181432
206.565051,16.51,20.066,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,17.018,20.32,34.07767607,11.35922544,0.567961272,-56.22816542
180,17.526,20.32,0,25.4,0.508,-24.892
180,18.034,20.32,0,25.4,0.508,-24.892
180,18.796,20.32,0,25.4,0.762,-24.638
153.434949,19.304,20.066,22.71845063,11.35922544,0.567961272,-56.22816542
135,19.558,19.812,17.96051221,17.96051221,0.359210356,-35.56181432
135,14.224,14.224,17.96051221,17.96051221,0.359210356,-35.56181432
26.565051,19.558,18.796,34.07767607,11.35922544,0.567961272,-56.22816542
56.309932,19.05,18.034,56.35753981,7.04469254,0.915809954,-90.6651923
14.036243,18.034,17.78,80.0852635,6.160405002,1.047268924,-103.6796141
90,18.034,17.018,0,25.4,0.762,-24.638
341.565051,17.272,17.272,24.09655582,8.032185358,0.803218612,-79.51863395
0,17.018,17.272,0,25.4,0.254,-25.146
90,14.224,13.97,0,25.4,0.254,-25.146
180,14.478,13.97,0,25.4,0.254,-25.146
225,14.732,14.224,17.96051221,17.96051221,0.359210356,-35.56181432
270,14.732,14.478,0,25.4,0.254,-25.146
135,14.986,14.224,17.96051221,17.96051221,0.359210356,-35.56181432
74.475889,13.716,9.652,289.6013664,1.359630758,4.745111668,-469.7660475
90,13.716,9.144,0,25.4,0.508,-24.892
45,13.462,8.89,17.96051221,17.96051221,0.359210356,-35.56181432
90,13.462,8.128,0,25.4,0.762,-24.638
63.434949,11.938,5.08,22.71845063,11.35922544,3.407767632,-53.38835906
90,11.938,4.826,0,25.4,0.254,-25.146
56.309932,11.43,4.064,56.35753981,7.04469254,0.915809954,-90.6651923
57.994617,10.16,2.032,148.0817038,2.692394666,2.396231174,-237.2268895
45,9.906,1.778,17.96051221,17.96051221,0.359210356,-35.56181432
180,10.16,1.778,0,25.4,0.254,-25.146
225,10.414,2.032,17.96051221,17.96051221,0.359210356,-35.56181432
236.309932,11.938,4.318,56.35753981,7.04469254,2.747430116,-88.8335724
206.565051,12.446,4.572,34.07767607,11.35922544,0.567961272,-56.22816542
244.983107,14.224,8.382,363.6694177,1.534470134,4.20444803,-416.2403639
260.537678,14.478,9.906,25.05440557,4.175734346,1.545021802,-152.9571465
255.963757,14.732,10.922,24.6416195,6.160405002,1.047268924,-103.6796141
255.963757,15.24,12.954,24.6416195,6.160405002,2.094537594,-102.6323452
251.565051,15.748,14.478,24.09655582,8.032185358,1.60643697,-78.71541559
83.659808,15.494,12.192,25.24464674,2.804960862,2.30006779,-227.7067148
135,15.748,11.938,17.96051221,17.96051221,0.359210356,-35.56181432
45,15.494,11.684,17.96051221,17.96051221,0.359210356,-35.56181432
66.801409,14.732,9.906,136.7425193,3.335183322,1.934406342,-191.5062304
90,14.732,9.144,0,25.4,0.762,-24.638
45,13.97,8.382,17.96051221,17.96051221,1.077630814,-34.84339386
213.690068,14.732,8.89,35.22346245,7.04469254,0.915809954,-90.6651923
243.434949,14.986,9.398,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,15.748,10.922,22.71845063,11.35922544,1.703883816,-55.09224288
243.434949,16.002,11.43,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,16.256,11.938,22.71845063,11.35922544,0.567961272,-56.22816542
270,16.256,14.732,0,25.4,2.794,-22.606
225,16.51,14.986,17.96051221,17.96051221,0.359210356,-35.56181432
128.659808,17.526,13.716,35.70132204,3.966813504,1.626393496,-161.0129622
153.434949,18.034,13.462,22.71845063,11.35922544,0.567961272,-56.22816542
164.054604,19.812,12.954,104.6687498,3.488958224,1.84914794,-183.0656433
195.945396,21.59,13.462,80.24604144,3.488958224,1.84914794,-183.0656433
315,21.336,13.716,17.96051221,17.96051221,0.359210356,-35.56181432
0,20.574,13.716,0,25.4,0.762,-24.638
18.434949,19.812,13.462,56.22529674,8.032185358,0.803218612,-79.51863395
344.054604,18.034,13.97,104.6687498,3.488958224,1.84914794,-183.0656433
315,17.018,14.986,17.96051221,17.96051221,1.436840916,-34.48418351
270,17.018,15.24,0,25.4,0.254,-25.146
180,17.272,15.24,0,25.4,0.254,-25.146
180,17.78,15.24,0,25.4,0.508,-24.892
153.434949,18.288,14.986,22.71845063,11.35922544,0.567961272,-56.22816542
171.869898,20.066,14.732,25.14471705,3.592102544,1.796051272,-177.8090711
198.434949,20.828,14.986,56.22529674,8.032185358,0.803218612,-79.51863395
225,21.082,15.24,17.96051221,17.96051221,0.359210356,-35.56181432
225,21.336,15.494,17.96051221,17.96051221,0.359210356,-35.56181432
206.565051,21.844,15.748,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,22.86,16.256,34.07767607,11.35922544,1.135922544,-55.66020415
206.565051,23.876,16.764,34.07767607,11.35922544,1.135922544,-55.66020415
225,24.13,17.018,17.96051221,17.96051221,0.359210356,-35.56181432
281.309932,23.368,20.828,104.6083465,4.981349956,3.885452986,-125.6296428
94.398705,23.622,17.526,305.8502981,1.9480911,3.31175487,-327.8637273
33.690068,22.86,17.018,35.22346245,7.04469254,0.915809954,-90.6651923
33.690068,22.098,16.51,35.22346245,7.04469254,0.915809954,-90.6651923
26.565051,21.59,16.256,34.07767607,11.35922544,0.567961272,-56.22816542
33.690068,20.828,15.748,35.22346245,7.04469254,0.915809954,-90.6651923
18.434949,20.066,15.494,56.22529674,8.032185358,0.803218612,-79.51863395
0,19.812,15.494,0,25.4,0.254,-25.146
0,19.304,15.494,0,25.4,0.508,-24.892
0,18.542,15.494,0,25.4,0.762,-24.638
225,18.796,15.748,17.96051221,17.96051221,0.359210356,-35.56181432
206.565051,19.304,16.002,34.07767607,11.35922544,0.567961272,-56.22816542
225,19.558,16.256,17.96051221,17.96051221,0.359210356,-35.56181432
243.434949,19.812,16.764,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,20.066,17.272,22.71845063,11.35922544,0.567961272,-56.22816542
270,20.066,17.78,0,25.4,0.508,-24.892
270,20.066,18.288,0,25.4,0.508,-24.892
270,20.066,19.05,0,25.4,0.762,-24.638
296.565051,19.812,19.558,34.07767607,11.35922544,0.567961272,-56.22816542
315,19.558,19.812,17.96051221,17.96051221,0.359210356,-35.56181432
`)),b(x.ParsePatFile(`
*SACNCR,SACNCR
45, 0,0, 0,2.38125
45, 1.6838,0, 0,2.38125, 0,-2.38125
`)),b(x.ParsePatFile(`
*SCAFFOLD
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
270,19.304,21.336,25.4,25.4,0.508,-24.892
326.3099325,6.604,4.064,56.357539812,7.04469254,14.652960026,-76.928042486
90,6.096,12.446,25.4,25.4,0.508,-24.892
270,6.35,4.064,25.4,25.4,8.128,-17.272
146.3099325,6.096,21.336,56.357539812,7.04469254,14.65296028,-76.928041978
180,19.304,12.446,0,25.4,0.508,-24.892
270,18.796,4.572,25.4,25.4,0.508,-24.892
0,18.796,21.336,0,25.4,0.508,-24.892
90,6.35,12.954,25.4,25.4,7.874,-17.526
270,19.304,12.954,25.4,25.4,0.508,-24.892
0,6.604,4.318,0,25.4,12.192,-13.208
0,6.096,12.954,0,25.4,0.508,-24.892
180,19.304,4.572,0,25.4,0.508,-24.892
90,18.796,20.828,25.4,25.4,0.508,-24.892
212.855722,6.096,12.446,514.310608918,0.444520828,14.513605212,-1436.846928942
147.144278,6.096,4.572,937.049925236,0.444520828,14.513605212,-1436.846928942
213.6900675,6.096,4.064,35.223462446,7.04469254,14.652959772,-76.928042486
180,6.096,4.318,0,25.4,12.192,-13.208
0,6.604,21.082,0,25.4,12.192,-13.208
90,6.604,4.064,25.4,25.4,0.508,-24.892
180,19.304,20.828,0,25.4,0.508,-24.892
90,18.796,12.446,25.4,25.4,0.508,-24.892
147.144278,18.796,4.572,937.049925236,0.444520828,14.513605466,-1436.846928688
0,6.096,4.064,0,25.4,0.508,-24.892
0,6.604,12.7,0,25.4,12.192,-13.208
270,6.604,21.336,25.4,25.4,0.508,-24.892
90,19.05,4.572,25.4,25.4,7.874,-17.526
212.855722,18.796,20.828,514.310608918,0.444520828,14.513605466,-1436.846928688
180,6.604,12.446,0,25.4,0.508,-24.892
270,6.096,4.572,25.4,25.4,0.508,-24.892
0,6.096,21.336,0,25.4,0.508,-24.892
270,6.604,12.954,25.4,25.4,0.508,-24.892
270,19.05,20.828,25.4,25.4,7.874,-17.526
32.855722,6.604,4.572,514.310608918,0.444520828,14.513605466,-1436.846928688
180,6.604,4.572,0,25.4,0.508,-24.892
0,18.796,12.954,0,25.4,0.508,-24.892
90,19.304,4.064,25.4,25.4,0.508,-24.892
90,6.096,20.828,25.4,25.4,0.508,-24.892
180,6.096,21.082,0,25.4,12.192,-13.208
147.144278,6.096,12.954,937.049925236,0.444520828,14.513605212,-1436.846928942
180,6.096,12.7,0,25.4,12.192,-13.208
270,6.35,12.446,25.4,25.4,7.874,-17.526
212.855722,6.096,20.828,514.310608918,0.444520828,14.513605466,-1436.846928688
0,18.796,4.064,0,25.4,0.508,-24.892
270,19.05,4.064,25.4,25.4,8.128,-17.272
180,6.604,20.828,0,25.4,0.508,-24.892
213.6900675,18.796,4.064,35.223462446,7.04469254,14.652960026,-76.928042486
327.144278,6.604,20.828,937.049925236,0.444520828,14.513605466,-1436.846928688
`)),b(x.ParsePatFile(`
*SQUARE,SQUARE
0, 0,0, 0,3.175, 3.175,-3.175
90, 0,0, 0,3.175, 3.175,-3.175
`)),b(x.ParsePatFile(`
*SQUIGGLE-01,SQUIGGLE-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
45,2.794,-9.906,17.960512212,17.960512212,28.377609234,-7.54341519
56.309932,1.778,13.97,56.357539812,7.04469254,1.831620162,-89.74938235
81.869898,1.524,12.192,25.144717046,3.592102544,1.796051272,-177.809071102
99.462322,1.778,10.668,129.447762694,4.175734346,1.545021802,-152.95714646
123.690068,2.794,9.144,35.223462446,7.04469254,1.831620162,-89.74938235
146.309932,4.318,8.128,56.357539812,7.04469254,1.831620162,-89.74938235
170.537678,5.842,7.874,25.054405568,4.175734346,1.545021802,-152.95714646
188.130102,7.62,8.128,154.460405328,3.592102544,1.796051272,-177.809071102
213.690068,9.144,9.144,35.223462446,7.04469254,1.831620162,-89.74938235
225,16.51,16.51,17.960512212,17.960512212,10.417097022,-25.503927402
213.690068,18.034,17.526,35.223462446,7.04469254,1.831620162,-89.74938235
189.462322,19.558,17.78,129.447762694,4.175734346,1.545021802,-152.95714646
171.869898,21.336,17.526,25.144717046,3.592102544,1.796051272,-177.809071102
146.309932,22.86,16.51,56.357539812,7.04469254,1.831620162,-89.74938235
123.690068,23.876,14.986,35.223462446,7.04469254,1.831620162,-89.74938235
99.462322,24.13,13.462,129.447762694,4.175734346,1.545021802,-152.95714646
81.869898,23.876,11.684,25.144717046,3.592102544,1.796051272,-177.809071102
56.309932,22.86,10.16,56.357539812,7.04469254,1.831620162,-89.74938235
`)),b(x.ParsePatFile(`
*SQUIGGLE-02,SQUIGGLE-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
75.963757,25.146,4.064,24.6416195,6.160405002,1.047268924,-103.679614078
63.434949,24.638,3.048,22.718450626,11.35922544,1.135922544,-55.660204148
45,23.876,2.286,17.960512212,17.960512212,1.077630814,-34.843393864
14.036243,22.86,2.032,80.085263502,6.160405002,1.047268924,-103.679614078
0,21.59,2.032,0,25.4,1.27,-24.13
345.963757,20.574,2.286,24.6416195,6.160405002,1.047268924,-103.679614078
315,19.812,3.048,17.960512212,17.960512212,1.077630814,-34.843393864
296.565051,19.304,4.064,34.077676066,11.35922544,1.135922544,-55.660204148
284.036243,19.05,5.08,80.085263502,6.160405002,1.047268924,-103.679614078
281.309932,18.796,21.59,104.608346536,4.981349956,1.29515108,-128.219944728
303.690068,18.288,22.352,35.223462446,7.04469254,0.915809954,-90.665192304
315,17.526,23.114,17.960512212,17.960512212,1.077630814,-34.843393864
345.963757,16.51,23.368,24.6416195,6.160405002,1.047268924,-103.679614078
0,15.24,23.368,0,25.4,1.27,-24.13
14.036243,14.224,23.114,80.085263502,6.160405002,1.047268924,-103.679614078
45,13.462,22.352,17.960512212,17.960512212,1.077630814,-34.843393864
56.309932,12.954,21.59,56.357539812,7.04469254,0.915809954,-90.665192304
78.690068,12.7,20.32,24.906749272,4.981349956,1.29515108,-128.219944728
75.963757,12.446,4.064,24.6416195,6.160405002,1.047268924,-103.679614078
63.434949,11.938,3.048,22.718450626,11.35922544,1.135922544,-55.660204148
45,11.176,2.286,17.960512212,17.960512212,1.077630814,-34.843393864
14.036243,10.16,2.032,80.085263502,6.160405002,1.047268924,-103.679614078
0,8.89,2.032,0,25.4,1.27,-24.13
345.963757,7.874,2.286,24.6416195,6.160405002,1.047268924,-103.679614078
315,7.112,3.048,17.960512212,17.960512212,1.077630814,-34.843393864
296.565051,6.604,4.064,34.077676066,11.35922544,1.135922544,-55.660204148
284.036243,6.35,5.08,80.085263502,6.160405002,1.047268924,-103.679614078
281.309932,6.096,21.59,104.608346536,4.981349956,1.29515108,-128.219944728
303.690068,5.588,22.352,35.223462446,7.04469254,0.915809954,-90.665192304
315,4.826,23.114,17.960512212,17.960512212,1.077630814,-34.843393864
345.963757,3.81,23.368,24.6416195,6.160405002,1.047268924,-103.679614078
0,2.54,23.368,0,25.4,1.27,-24.13
14.036243,1.524,23.114,80.085263502,6.160405002,1.047268924,-103.679614078
45,0.762,22.352,17.960512212,17.960512212,1.077630814,-34.843393864
56.309932,0.254,21.59,56.357539812,7.04469254,0.915809954,-90.665192304
78.690068,0,20.32,24.906749272,4.981349956,1.29515108,-128.219944728
270,19.05,20.32,0,25.4,15.24,-10.16
270,12.7,20.32,0,25.4,15.24,-10.16
270,6.35,20.32,0,25.4,15.24,-10.16
270,0,20.32,0,25.4,15.24,-10.16
`)),b(x.ParsePatFile(`
*STARS,STARS
0, 0,0, 0,5.49926, 3.175,-3.175
60, 0,0, 0,5.49926, 3.175,-3.175
120, 1.5875,2.74963, 0,5.49926, 3.175,-3.175
`)),b(x.ParsePatFile(`
*STEEL,STEEL
45, 0,0, 0,3.175
45, 0,1.5875, 0,3.175
`)),b(x.ParsePatFile(`
*SWAMP,SWAMP
0, 0,0, 12.7,21.997, 3.175,-22.225
90, 1.5875,0, 21.997,12.7, 1.5875,-42.4066
90, 1.98438,0, 21.997,12.7, 1.27,-42.7241
90, 1.19062,0, 21.997,12.7, 1.27,-42.7241
60, 2.38125,0, 12.7,21.997, 1.016,-24.384
120, .79375,0, 12.7,21.997, 1.016,-24.384
`)),b(x.ParsePatFile(`
*TRANS,TRANS
0, 0,0, 0,6.35
0, 0,3.175, 0,6.35, 3.175,-3.175
`)),b(x.ParsePatFile(`
*TRI-OVERLAP
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
59.641885,2.286000254,3.81,1206.700468992,0.313103514,20.605334202,-2039.928082188
300.358115,12.7,21.590000254,853.832947398,0.313103514,20.605334202,-2039.928082188
180,9.129485678,15.494,0,25.4,18.258981262,-7.141018738
59.036243,22.737590288,4.452650734,56.628832894,4.356064186,5.17479407,-142.931383936
180,23.114,3.81,0,25.4,20.827999746,-4.572000254
300.963757,0,8.89,91.477345366,4.356064186,5.174794324,-142.931383682
300.784147,3.048,3.81,148.105450296,0.464280504,13.89591328,-1375.695350204
239.215853,22.352,3.81,1241.485813188,0.464280504,13.89591328,-1375.695350204
`)),b(x.ParsePatFile(`
*TRIANG,TRIANG
60, 0,0, 4.7625,8.24889, 4.7625,-4.7625
120, 0,0, 4.76250001,8.24889, 4.7625,-4.7625
0, -2.38125,4.12445, 4.7625,8.24889, 4.7625,-4.7625
`)),b(x.ParsePatFile(`
*WEATHERBOARD,WEATHERBOARD
; By John Hyslop,    Manually Entered QCAD3 pattern
; Developed in mm as metric QCAD3 pattern
; Metric Hatch Scale 1 Makes 152mm horizontally placed boards
; with a 13mm offset line to simulate a rounded edge
0,0,0,0,152
0,0,13,0,152
`)),b(x.ParsePatFile(`
*WEAVING,WEAVING
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
90,22.86,5.08,0,25.4,1.27,-24.13
75.963757,22.352,3.048,24.6416195,6.160405002,2.094537594,-102.632345154
66.801409,21.59,1.27,136.74251925,3.335183322,1.934406342,-191.506230398
54.462322,20.32,-0.508,91.53339072,2.952690056,2.18499055,-216.314071054
56.309932,19.304,-2.032,56.357539812,7.04469254,1.831620162,-89.74938235
90,20.066,5.588,0,25.4,1.778,-23.622
80.537678,19.812,4.064,25.054405568,4.175734346,1.545021802,-152.95714646
63.434949,19.05,2.54,22.718450626,11.35922544,1.703883816,-55.092242876
56.309932,18.034,1.016,56.357539812,7.04469254,1.831620162,-89.74938235
56.309932,17.018,-0.508,56.357539812,7.04469254,1.831620162,-89.74938235
333.434949,21.844,6.858,22.718450626,11.35922544,1.703883816,-55.092242876
344.054604,20.066,7.366,104.668749768,3.488958224,1.84914794,-183.065643266
0,18.034,7.366,0,25.4,2.032,-23.368
9.462322,16.51,7.112,129.447762694,4.175734346,1.545021802,-152.95714646
26.565051,14.986,6.35,34.077676066,11.35922544,1.703883816,-55.092242876
38.659808,13.716,5.334,35.701322044,3.966813504,1.626393496,-161.0129622
36.869898,11.684,3.81,35.56,5.08,2.54,-124.46
20.556045,9.652,3.048,136.750876358,2.97284521,2.170177016,-214.847518234
330.255119,23.114,9.398,56.708680588,3.150482142,2.047813532,-202.733533318
344.054604,21.336,9.906,104.668749768,3.488958224,1.84914794,-183.065643266
352.874984,19.304,10.16,25.203858152,3.150482142,2.047813532,-202.733533318
0,17.526,10.16,0,25.4,1.778,-23.622
14.036243,15.494,9.652,80.085263502,6.160405002,2.094537594,-102.632345154
26.565051,13.462,8.636,34.077676066,11.35922544,2.271845088,-54.524281604
33.690068,11.938,7.62,35.223462446,7.04469254,1.831620162,-89.74938235
35.537678,10.16,6.35,126.965671138,2.952690056,2.18499055,-216.314071054
0,5.08,2.54,0,25.4,1.27,-24.13
348.690068,3.81,2.794,24.906749272,4.981349956,1.29515108,-128.219944728
341.565051,3.048,3.048,24.09655582,8.032185358,0.803218612,-79.518633952
336.801409,1.27,3.81,136.74251925,3.335183322,1.934406342,-191.506230398
326.309932,-0.254,4.826,56.357539812,7.04469254,1.831620162,-89.74938235
324.462322,-2.032,6.096,91.53339072,2.952690056,2.18499055,-216.314071054
0,5.588,5.334,0,25.4,1.778,-23.622
350.537678,4.064,5.588,25.054405568,4.175734346,1.545021802,-152.95714646
333.434949,2.54,6.35,22.718450626,11.35922544,1.703883816,-55.092242876
326.309932,1.016,7.366,56.357539812,7.04469254,1.831620162,-89.74938235
326.309932,-0.508,8.382,56.357539812,7.04469254,1.831620162,-89.74938235
60.255119,16.002,23.114,56.708680588,3.150482142,2.047813532,-202.733533318
180,20.066,20.066,0,25.4,2.032,-23.368
164.054604,21.844,19.558,104.668749768,3.488958224,1.84914794,-183.065643266
153.434949,23.368,18.796,22.718450626,11.35922544,1.703883816,-55.092242876
330.255119,23.114,22.098,56.708680588,3.150482142,2.047813532,-202.733533318
345.963757,21.082,22.606,24.6416195,6.160405002,2.094537594,-102.632345154
352.874984,19.05,22.86,25.203858152,3.150482142,2.047813532,-202.733533318
60.255119,18.288,21.59,56.708680588,3.150482142,2.047813532,-202.733533318
80.537678,18.034,20.066,25.054405568,4.175734346,1.545021802,-152.95714646
90,18.034,18.034,0,25.4,2.032,-23.368
104.036243,18.542,16.002,80.085263502,6.160405002,2.094537594,-102.632345154
116.565051,19.304,14.478,34.077676066,11.35922544,1.703883816,-55.092242876
129.805571,20.574,12.954,35.773504272,3.252136752,1.9838035,-196.396538372
123.690068,21.59,11.43,35.223462446,7.04469254,1.831620162,-89.74938235
113.198591,22.352,9.652,56.698117744,3.335183322,1.934406342,-191.506230398
309.805571,18.034,11.684,35.773504272,3.252136752,1.9838035,-196.396538372
305.537678,16.764,13.462,126.965671138,2.952690056,2.18499055,-216.314071054
299.744881,15.748,15.24,148.072666262,3.150482142,2.047813532,-202.733533318
285.945396,15.24,17.018,80.246041438,3.488958224,1.84914794,-183.065643266
270,15.24,19.304,0,25.4,2.286,-23.114
74.054604,15.494,21.336,104.668749768,3.488958224,1.84914794,-183.065643266
82.874984,15.24,19.304,25.203858152,3.150482142,2.047813532,-202.733533318
39.805571,13.716,18.034,35.773504272,3.252136752,1.9838035,-196.396538372
35.537678,11.938,16.764,126.965671138,2.952690056,2.18499055,-216.314071054
33.690068,10.414,15.748,35.223462446,7.04469254,1.831620162,-89.74938235
15.945396,8.636,15.24,80.246041438,3.488958224,1.84914794,-183.065643266
6.340192,6.35,14.986,204.76213556,2.804960862,2.30006779,-227.706714766
350.537678,4.826,15.24,25.054405568,4.175734346,1.545021802,-152.95714646
344.054604,3.048,15.748,104.668749768,3.488958224,1.84914794,-183.065643266
23.198591,13.97,21.59,56.698117744,3.335183322,1.934406342,-191.506230398
29.744881,12.192,20.574,148.072666262,3.150482142,2.047813532,-202.733533318
39.805571,10.668,19.304,35.773504272,3.252136752,1.9838035,-196.396538372
29.744881,8.89,18.288,148.072666262,3.150482142,2.047813532,-202.733533318
7.125016,6.858,18.034,179.577488698,3.150482142,2.047813532,-202.733533318
0,5.334,18.034,0,25.4,1.524,-23.876
344.054604,3.556,18.542,104.668749768,3.488958224,1.84914794,-183.065643266
333.434949,2.54,19.05,22.718450626,11.35922544,1.135922544,-55.660204148
234.462322,7.874,-0.254,91.53339072,2.952690056,2.18499055,-216.314071054
240.255119,8.89,1.524,56.708680588,3.150482142,2.047813532,-202.733533318
243.434949,9.906,3.556,22.718450626,11.35922544,2.271845088,-54.524281604
262.874984,10.16,5.588,25.203858152,3.150482142,2.047813532,-202.733533318
270,10.16,7.62,0,25.4,2.032,-23.368
282.528808,9.652,9.906,104.69063898,2.755016842,2.341764176,-231.834664854
293.198591,8.89,11.684,56.698117744,3.335183322,1.934406342,-191.506230398
309.805571,7.62,13.208,35.773504272,3.252136752,1.9838035,-196.396538372
305.537678,6.35,14.986,126.965671138,2.952690056,2.18499055,-216.314071054
270,5.334,19.812,0,25.4,1.778,-23.622
254.054604,5.842,21.59,104.668749768,3.488958224,1.84914794,-183.065643266
246.801409,6.604,23.368,136.74251925,3.335183322,1.934406342,-191.506230398
236.309932,5.334,1.016,56.357539812,7.04469254,1.831620162,-89.74938235
234.462322,6.604,2.794,91.53339072,2.952690056,2.18499055,-216.314071054
249.443955,7.366,4.826,80.266818638,2.97284521,2.170177016,-214.847518234
270,7.366,6.858,0,25.4,2.032,-23.368
278.130102,7.112,8.636,154.460405328,3.592102544,1.796051272,-177.809071102
296.565051,6.096,10.668,34.077676066,11.35922544,2.271845088,-54.524281604
309.805571,4.826,12.192,35.773504272,3.252136752,1.9838035,-196.396538372
303.690068,3.81,13.716,35.223462446,7.04469254,1.831620162,-89.74938235
290.556045,3.048,15.748,136.750876358,2.97284521,2.170177016,-214.847518234
341.565051,1.524,16.256,24.09655582,8.032185358,1.60643697,-78.715415594
324.462322,-0.254,17.526,91.53339072,2.952690056,2.18499055,-216.314071054
324.462322,-2.032,18.796,91.53339072,2.952690056,2.18499055,-216.314071054
146.309932,1.016,20.066,56.357539812,7.04469254,1.831620162,-89.74938235
146.309932,2.54,19.05,56.357539812,7.04469254,1.831620162,-89.74938235
262.874984,2.794,21.082,25.203858152,3.150482142,2.047813532,-202.733533318
255.963757,3.302,23.114,24.6416195,6.160405002,2.094537594,-102.632345154
240.255119,4.318,24.892,56.708680588,3.150482142,2.047813532,-202.733533318
`)),b(x.ParsePatFile(`
*WIRE-FENCE
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
315,11.684,12.7,17.960512212,17.960512212,1.186955462,-34.734068962
315,13.353142966,14.332857034,17.960512212,17.960512212,1.231577928,-34.689446496
3.731397,12.767918076,14.294690232,381.845330542,0.55100347,0.586467966,-1170.2956782
183.17983,11.77579941,14.229987034,432.544118908,1.408938508,23.016097986,-434.888914066
183.17983,11.714581854,13.209697736,432.544118908,1.408938508,23.012451308,-434.892560744
153.434949,13.208,12.954,22.718450626,11.35922544,0.567961272,-56.22816542
266.593556,13.208,12.954,432.546308388,0.301846742,25.69937837,-2111.67704156
266.593556,14.224,13.462,432.546308388,0.301846742,25.69937837,-2111.67704156
2.602562,12.523304392,11.860695608,534.003174054,1.153354564,0.622066574,-558.754908396
`)),b(x.ParsePatFile(`
*XMASTREE-01,XMASTREE-01
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
180,1.016,24.13,0,25.4,1.016,-24.384
90,1.016,20.828,0,25.4,3.302,-22.098
180,8.382,20.828,0,25.4,7.366,-18.034
49.763642,5.588,17.526,198.374734568,1.491539308,4.325464044,-428.2209495
180,7.112,17.526,0,25.4,1.524,-23.876
51.340192,4.064,13.716,126.938033652,3.966813504,4.879180742,-157.760174954
180,5.588,13.716,0,25.4,1.524,-23.876
52.431408,3.048,10.414,126.990557296,1.548665432,4.165909626,-412.425064658
180,4.318,10.414,0,25.4,1.27,-24.13
53.130102,2.032,7.366,91.44,5.08,3.81,-123.19
180,3.302,7.366,0,25.4,1.27,-24.13
53.972627,1.27,4.572,218.491081432,1.867445084,3.454773634,-342.02257732
180,2.54,4.572,0,25.4,1.27,-24.13
54.462322,0,1.016,91.53339072,2.952690056,4.369981354,-214.129080504
0,24.384,24.13,0,25.4,1.016,-24.384
90,24.384,20.828,0,25.4,3.302,-22.098
0,17.018,20.828,0,25.4,7.366,-18.034
130.236358,19.812,17.526,234.17167923,1.491539308,4.325464044,-428.2209495
0,18.288,17.526,0,25.4,1.524,-23.876
128.659808,21.336,13.716,35.701322044,3.966813504,4.879180742,-157.760174954
0,19.812,13.716,0,25.4,1.524,-23.876
127.568592,22.352,10.414,289.600417242,1.548665432,4.165909626,-412.425064658
0,21.082,10.414,0,25.4,1.27,-24.13
126.869898,23.368,7.366,35.56,5.08,3.81,-123.19
0,22.098,7.366,0,25.4,1.27,-24.13
126.027373,24.13,4.572,126.986269522,1.867445084,3.454773634,-342.02257732
0,22.86,4.572,0,25.4,1.27,-24.13
125.537678,25.4,1.016,126.965671138,2.952690056,4.369981354,-214.129080504
0,11.684,1.016,0,25.4,1.016,-24.384
270,11.684,4.318,0,25.4,3.302,-22.098
0,4.318,4.318,0,25.4,7.366,-18.034
229.763642,7.112,7.62,198.374734568,1.491539308,4.325464044,-428.2209495
0,5.588,7.62,0,25.4,1.524,-23.876
231.340192,8.636,11.43,126.938033652,3.966813504,4.879180742,-157.760174954
0,7.112,11.43,0,25.4,1.524,-23.876
232.431408,9.652,14.732,126.990557296,1.548665432,4.165909626,-412.425064658
0,8.382,14.732,0,25.4,1.27,-24.13
233.130102,10.668,17.78,91.44,5.08,3.81,-123.19
0,9.398,17.78,0,25.4,1.27,-24.13
233.972627,11.43,20.574,218.491081432,1.867445084,3.454773634,-342.02257732
0,10.16,20.574,0,25.4,1.27,-24.13
234.462322,12.7,24.13,91.53339072,2.952690056,4.369981354,-214.129080504
180,13.716,1.016,0,25.4,1.016,-24.384
270,13.716,4.318,0,25.4,3.302,-22.098
180,21.082,4.318,0,25.4,7.366,-18.034
310.236358,18.288,7.62,234.17167923,1.491539308,4.325464044,-428.2209495
180,19.812,7.62,0,25.4,1.524,-23.876
308.659808,16.764,11.43,35.701322044,3.966813504,4.879180742,-157.760174954
180,18.288,11.43,0,25.4,1.524,-23.876
307.568592,15.748,14.732,289.600417242,1.548665432,4.165909626,-412.425064658
180,17.018,14.732,0,25.4,1.27,-24.13
306.869898,14.732,17.78,35.56,5.08,3.81,-123.19
180,16.002,17.78,0,25.4,1.27,-24.13
306.027373,13.97,20.574,126.986269522,1.867445084,3.454773634,-342.02257732
180,15.24,20.574,0,25.4,1.27,-24.13
305.537678,12.7,24.13,126.965671138,2.952690056,4.369981354,-214.129080504
`)),b(x.ParsePatFile(`
*XMASTREE-02,XMASTREE-02
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
180,1.016,6.604,0,25.4,1.016,-24.384
90,1.016,3.302,0,25.4,3.302,-22.098
180,8.382,3.302,0,25.4,7.366,-18.034
49.763642,5.588,0,198.374734568,1.491539308,4.325464044,-428.2209495
180,7.112,25.4,0,25.4,1.524,-23.876
51.340192,4.064,21.59,126.938033652,3.966813504,4.879180742,-157.760174954
180,5.588,21.59,0,25.4,1.524,-23.876
52.431408,3.048,18.288,126.990557296,1.548665432,4.165909626,-412.425064658
180,4.318,18.288,0,25.4,1.27,-24.13
53.130102,2.032,15.24,91.44,5.08,3.81,-123.19
180,3.302,15.24,0,25.4,1.27,-24.13
53.972627,1.27,12.446,218.491081432,1.867445084,3.454773634,-342.02257732
180,2.54,12.446,0,25.4,1.27,-24.13
54.462322,0,8.89,91.53339072,2.952690056,4.369981354,-214.129080504
0,24.384,6.604,0,25.4,1.016,-24.384
90,24.384,3.302,0,25.4,3.302,-22.098
0,17.018,3.302,0,25.4,7.366,-18.034
130.236358,19.812,0,234.17167923,1.491539308,4.325464044,-428.2209495
0,18.288,25.4,0,25.4,1.524,-23.876
128.659808,21.336,21.59,35.701322044,3.966813504,4.879180742,-157.760174954
0,19.812,21.59,0,25.4,1.524,-23.876
127.568592,22.352,18.288,289.600417242,1.548665432,4.165909626,-412.425064658
0,21.082,18.288,0,25.4,1.27,-24.13
126.869898,23.368,15.24,35.56,5.08,3.81,-123.19
0,22.098,15.24,0,25.4,1.27,-24.13
126.027373,24.13,12.446,126.986269522,1.867445084,3.454773634,-342.02257732
0,22.86,12.446,0,25.4,1.27,-24.13
125.537678,25.4,8.89,126.965671138,2.952690056,4.369981354,-214.129080504
0,11.684,2.286,0,25.4,1.016,-24.384
270,11.684,5.588,0,25.4,3.302,-22.098
0,4.318,5.588,0,25.4,7.366,-18.034
229.763642,7.112,8.89,198.374734568,1.491539308,4.325464044,-428.2209495
0,5.588,8.89,0,25.4,1.524,-23.876
231.340192,8.636,12.7,126.938033652,3.966813504,4.879180742,-157.760174954
0,7.112,12.7,0,25.4,1.524,-23.876
232.431408,9.652,16.002,126.990557296,1.548665432,4.165909626,-412.425064658
0,8.382,16.002,0,25.4,1.27,-24.13
233.130102,10.668,19.05,91.44,5.08,3.81,-123.19
0,9.398,19.05,0,25.4,1.27,-24.13
233.972627,11.43,21.844,218.491081432,1.867445084,3.454773634,-342.02257732
0,10.16,21.844,0,25.4,1.27,-24.13
234.462322,12.7,25.4,91.53339072,2.952690056,4.369981354,-214.129080504
180,13.716,2.286,0,25.4,1.016,-24.384
270,13.716,5.588,0,25.4,3.302,-22.098
180,21.082,5.588,0,25.4,7.366,-18.034
310.236358,18.288,8.89,234.17167923,1.491539308,4.325464044,-428.2209495
180,19.812,8.89,0,25.4,1.524,-23.876
308.659808,16.764,12.7,35.701322044,3.966813504,4.879180742,-157.760174954
180,18.288,12.7,0,25.4,1.524,-23.876
307.568592,15.748,16.002,289.600417242,1.548665432,4.165909626,-412.425064658
180,17.018,16.002,0,25.4,1.27,-24.13
306.869898,14.732,19.05,35.56,5.08,3.81,-123.19
180,16.002,19.05,0,25.4,1.27,-24.13
306.027373,13.97,21.844,126.986269522,1.867445084,3.454773634,-342.02257732
180,15.24,21.844,0,25.4,1.27,-24.13
305.537678,12.7,25.4,126.965671138,2.952690056,4.369981354,-214.129080504
`)),b(x.ParsePatFile(`
*ZIGZAG,ZIGZAG
0, 0,0, 3.175,3.175, 3.175,-3.175
90, 3.175,0, 3.175,3.175, 3.175,-3.175
`)),b(x.ParsePatFile(`
*ACAD_ISO02W100,ACAD_ISO02W100
0, 0,0, 0,5, 12,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO03W100,ACAD_ISO03W100
0, 0,0, 0,5, 12,-18
`),!1),b(x.ParsePatFile(`
*ACAD_ISO04W100,ACAD_ISO04W100
0, 0,0, 0,5, 24,-3,.5,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO05W100,ACAD_ISO05W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO06W100,ACAD_ISO06W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -34,.5,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO07W100,ACAD_ISO07W100
0, 0,0, 0,5, .5,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO08W100,ACAD_ISO08W100
0, 0,0, 0,5, 24,-3,6,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO09W100,ACAD_ISO09W100
0, 0,0, 0,5, 24,-3,6,-3,6,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO10W100,ACAD_ISO10W100
0, 0,0, 0,5, 12,-3,.5,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO11W100,ACAD_ISO11W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO12W100,ACAD_ISO12W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO13W100,ACAD_ISO13W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-6.5
0, 0,0, 0,5, -33.5,.5,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO14W100,ACAD_ISO14W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -22,.5,-3
`),!1),b(x.ParsePatFile(`
*ACAD_ISO15W100,ACAD_ISO15W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-10
0, 0,0, 0,5, -33.5,.5,-3,.5,-3
`),!1),b(x.ParsePatFile(`
*ANGLE,ANGLE
0, 0,0, 0,.275, .2,-.075
90, 0,0, 0,.275, .2,-.075
`),!1),b(x.ParsePatFile(`
*ANSI31,ANSI31
45, 0,0, 0,.125
`),!1),b(x.ParsePatFile(`
*ANSI32,ANSI32
45, 0,0, 0,.375
45, .1767767,0, 0,.375
`),!1),b(x.ParsePatFile(`
*ANSI33,ANSI33
45, 0,0, 0,.25
45, .1767767,0, 0,.25, .125,-.0625
`),!1),b(x.ParsePatFile(`
*ANSI34,ANSI34
45, 0,0, 0,.75
45, .1767767,0, 0,.75
45, .35355339,0, 0,.75
45, .53033009,0, 0,.75
`),!1),b(x.ParsePatFile(`
*ANSI35,ANSI35
45, 0,0, 0,.25
45, .1767767,0, 0,.25, .3125,-.0625,0,-.0625
`),!1),b(x.ParsePatFile(`
*ANSI36,ANSI36
45, 0,0, .21875,.125, .3125,-.0625,0,-.0625
`),!1),b(x.ParsePatFile(`
*ANSI37,ANSI37
45, 0,0, 0,.125
135, 0,0, 0,.125
`),!1),b(x.ParsePatFile(`
*ANSI38,ANSI38
45, 0,0, 0,.125
135, 0,0, .25,.125, .3125,-.1875
`),!1),b(x.ParsePatFile(`
*AR-B816C,AR-B816C
0, 0,0, 8,8, 15.625,-.375
0, -8,.375, 8,8, 15.625,-.375
90, 0,0, 8,8, -8.375,7.625
90, -.375,0, 8,8, -8.375,7.625
`),!1),b(x.ParsePatFile(`
*AR-B816,AR-B816
0, 0,0, 0,8
90, 0,0, 8,8, 8,-8
`),!1),b(x.ParsePatFile(`
*AR-B88,AR-B88
0, 0,0, 0,8
90, 0,0, 8,4, 8,-8
`),!1),b(x.ParsePatFile(`
*AR-BRELM,AR-BRELM
0, 0,0, 0,5.334, 7.625,-.375
0, 0,2.25, 0,5.334, 7.625,-.375
0, 2,2.667, 0,5.334, 3.625,-.375
0, 2,4.917, 0,5.334, 3.625,-.375
90, 0,0, 0,8, 2.25,-3.084
90, -.375,0, 0,8, 2.25,-3.084
90, 2,2.667, 0,4, 2.25,-3.084
90, 1.625,2.667, 0,4, 2.25,-3.084
`),!1),b(x.ParsePatFile(`
*AR-BRSTD,AR-BRSTD
0, 0,0, 0,2.667
90, 0,0, 2.667,4, 2.667,-2.667
`),!1),b(x.ParsePatFile(`
*AR-CONC-01,AR-CONC-01
;Optimize to replace existing AR-CONC Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
243.434949,0.3,0.8,8.9442719,4.472136,0.2236068,-22.137073
90,0.3,0.6,0,10,0.2,-9.8
0,0.2,0.6,0,10,0.1,-9.9
315,0.1,0.1,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,0.3,0.2,13.4164079,4.472136,0.2236068,-22.137073
63.434949,0.2,0,8.9442719,4.472136,0.2236068,-22.137073
45,2,0.4,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,2.3,0.3,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,2.2,0.6,22.1359436,3.1622777,0.3162278,-31.3065488
315,2.3,0.9,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,2.5,1,13.4164079,4.472136,0.2236068,-22.137073
63.434949,2.4,0.8,8.9442719,4.472136,0.2236068,-22.137073
270,4.1,0.6,0,10,0.2,-9.8
45,3.9,0.4,7.0710678,7.0710678,0.2828427,-13.8592929
180,4.1,0.4,0,10,0.2,-9.8
333.434949,3.9,0.2,8.9442719,4.472136,0.2236068,-22.137073
225,4,0.3,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,4.1,0.1,13.4164079,4.472136,0.2236068,-22.137073
198.434949,6.3,0.8,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,6.2,0.6,8.9442719,4.472136,0.2236068,-22.137073
333.434949,6,0.7,8.9442719,4.472136,0.2236068,-22.137073
26.565051,5.7,0,13.4164079,4.472136,0.2236068,-22.137073
251.565051,5.8,0.3,9.486833,3.1622777,0.3162278,-31.3065488
116.565051,5.9,0.1,13.4164079,4.472136,0.2236068,-22.137073
45,6.7,0.1,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,7,0,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,6.9,0.3,22.1359436,3.1622777,0.3162278,-31.3065488
315,3,2.8,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,3.2,2.9,13.4164079,4.472136,0.2236068,-22.137073
63.434949,3.1,2.7,8.9442719,4.472136,0.2236068,-22.137073
45,1.1,0.8,7.0710678,7.0710678,0.2828427,-13.8592929
180,1.3,0.8,0,10,0.2,-9.8
270,1.3,1,0,10,0.2,-9.8
225,1.8,2.4,7.0710678,7.0710678,0.1414214,-14.0007143
270,1.8,2.6,0,10,0.2,-9.8
71.565051,1.7,2.3,9.486833,3.1622777,0.3162278,-31.3065488
198.434949,1,2.1,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,0.9,1.9,8.9442719,4.472136,0.2236068,-22.137073
333.434949,0.7,2,8.9442719,4.472136,0.2236068,-22.137073
0,3.5,2.2,0,10,0.2,-9.8
225,3.7,2.4,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.7,2.2,0,10,0.2,-9.8
315,4.5,1.7,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,4.7,1.8,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4.6,1.6,8.9442719,4.472136,0.2236068,-22.137073
315,5.5,2.1,7.0710678,7.0710678,0.1414214,-14.0007143
270,5.5,2.3,0,10,0.2,-9.8
108.434949,5.6,2,22.1359436,3.1622777,0.3162278,-31.3065488
206.565051,6.9,2.7,13.4164079,4.472136,0.2236068,-22.137073
63.434949,6.8,2.5,8.9442719,4.472136,0.2236068,-22.137073
315,6.7,2.6,7.0710678,7.0710678,0.1414214,-14.0007143
333.434949,7.3,1.9,8.9442719,4.472136,0.2236068,-22.137073
225,7.4,2,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,7.5,1.8,13.4164079,4.472136,0.2236068,-22.137073
26.565051,8.2,1.5,13.4164079,4.472136,0.2236068,-22.137073
153.434949,8.4,1.4,8.9442719,4.472136,0.2236068,-22.137073
270,8.4,1.6,0,10,0.2,-9.8
180,9.3,1.7,0,10,0.1,-9.9
270,9.3,1.8,0,10,0.1,-9.9
45,9.2,1.7,7.0710678,7.0710678,0.1414214,-14.0007143
153.434949,9.3,2.4,8.9442719,4.472136,0.2236068,-22.137073
270,9.3,2.7,0,10,0.3,-9.7
45,9.1,2.5,7.0710678,7.0710678,0.2828427,-13.8592929
206.565051,9.1,3.5,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9,3.3,8.9442719,4.472136,0.2236068,-22.137073
315,8.9,3.4,7.0710678,7.0710678,0.1414214,-14.0007143
180,6.5,2.9,0,10,0.2,-9.8
270,6.5,3.2,0,10,0.3,-9.7
56.309932,6.3,2.9,22.1880078,2.773501,0.3605551,-35.6949576
198.434949,5.4,3.8,22.1359436,3.1622777,0.3162278,-31.3065488
71.565051,5.3,3.5,9.486833,3.1622777,0.3162278,-31.3065488
315,5.1,3.7,7.0710678,7.0710678,0.2828427,-13.8592929
180,3.8,3.3,0,10,0.3,-9.7
270,3.8,3.6,0,10,0.3,-9.7
45,3.5,3.3,7.0710678,7.0710678,0.4242641,-13.7178716
225,3.3,4.3,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.3,4.1,0,10,0.2,-9.8
0,3.1,4.1,0,10,0.2,-9.8
206.565051,1.6,3.9,13.4164079,4.472136,0.2236068,-22.137073
63.434949,1.5,3.7,8.9442719,4.472136,0.2236068,-22.137073
315,1.4,3.8,7.0710678,7.0710678,0.1414214,-14.0007143
108.434949,1,3.7,22.1359436,3.1622777,0.3162278,-31.3065488
341.565051,0.7,3.8,9.486833,3.1622777,0.3162278,-31.3065488
225,0.9,4,7.0710678,7.0710678,0.2828427,-13.8592929
270,1.5,4.5,0,10,0.2,-9.8
45,1.3,4.3,7.0710678,7.0710678,0.2828427,-13.8592929
180,1.5,4.3,0,10,0.2,-9.8
315,3.6,4.7,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,3.8,4.8,13.4164079,4.472136,0.2236068,-22.137073
63.434949,3.7,4.6,8.9442719,4.472136,0.2236068,-22.137073
0,5.1,4,0,10,0.1,-9.9
225,5.2,4.1,7.0710678,7.0710678,0.1414214,-14.0007143
90,5.2,4,0,10,0.1,-9.9
0,6.9,3.8,0,10,0.2,-9.8
243.434949,7,4,8.9442719,4.472136,0.2236068,-22.137073
116.565051,7.1,3.8,13.4164079,4.472136,0.2236068,-22.137073
26.565051,7.3,4.5,13.4164079,4.472136,0.2236068,-22.137073
116.565051,7.4,4.3,13.4164079,4.472136,0.2236068,-22.137073
251.565051,7.5,4.6,9.486833,3.1622777,0.3162278,-31.3065488
63.434949,8.8,3.6,8.9442719,4.472136,0.2236068,-22.137073
180,9,3.6,0,10,0.2,-9.8
296.565051,8.9,3.8,13.4164079,4.472136,0.2236068,-22.137073
180,9,5.4,0,10,0.3,-9.7
270,9,5.7,0,10,0.3,-9.7
45,8.7,5.4,7.0710678,7.0710678,0.4242641,-13.7178716
180,8.6,5.6,0,10,0.2,-9.8
270,8.6,5.8,0,10,0.2,-9.8
45,8.4,5.6,7.0710678,7.0710678,0.2828427,-13.8592929
243.434949,8.2,6.5,8.9442719,4.472136,0.2236068,-22.137073
26.565051,8,6.4,13.4164079,4.472136,0.2236068,-22.137073
135,8.1,6.3,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6.7,6,8.9442719,4.472136,0.2236068,-22.137073
116.565051,6.8,5.8,13.4164079,4.472136,0.2236068,-22.137073
0,6.6,5.8,0,10,0.2,-9.8
225,6.2,6.1,7.0710678,7.0710678,0.2828427,-13.8592929
108.434949,6.3,5.8,22.1359436,3.1622777,0.3162278,-31.3065488
341.565051,6,5.9,9.486833,3.1622777,0.3162278,-31.3065488
135,5.9,5.4,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6,5.6,8.9442719,4.472136,0.2236068,-22.137073
26.565051,5.8,5.5,13.4164079,4.472136,0.2236068,-22.137073
180,4.8,6,0,10,0.1,-9.9
270,4.8,6.1,0,10,0.1,-9.9
45,4.7,6,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,4.4,6.7,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4.3,6.5,8.9442719,4.472136,0.2236068,-22.137073
315,4.2,6.6,7.0710678,7.0710678,0.1414214,-14.0007143
225,3.4,6.5,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.4,6.2,0,10,0.3,-9.7
333.434949,3.2,6.3,8.9442719,4.472136,0.2236068,-22.137073
180,3,6.1,0,10,0.2,-9.8
270,3,6.3,0,10,0.2,-9.8
45,2.8,6.1,7.0710678,7.0710678,0.2828427,-13.8592929
135,2.1,5.6,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,2.2,5.8,8.9442719,4.472136,0.2236068,-22.137073
26.565051,2,5.7,13.4164079,4.472136,0.2236068,-22.137073
180,1.1,6.3,0,10,0.2,-9.8
270,1.1,6.5,0,10,0.2,-9.8
45,0.9,6.3,7.0710678,7.0710678,0.2828427,-13.8592929
270,0.6,7,0,10,0.3,-9.7
45,0.4,6.8,7.0710678,7.0710678,0.2828427,-13.8592929
153.434949,0.6,6.7,8.9442719,4.472136,0.2236068,-22.137073
243.434949,8.2,7.8,8.9442719,4.472136,0.2236068,-22.137073
90,8.2,7.6,0,10,0.2,-9.8
0,8.1,7.6,0,10,0.1,-9.9
135,8.7,8.2,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,8.8,8.4,8.9442719,4.472136,0.2236068,-22.137073
26.565051,8.6,8.3,13.4164079,4.472136,0.2236068,-22.137073
180,8.6,8.4,0,10,0.2,-9.8
251.565051,8.7,8.7,9.486833,3.1622777,0.3162278,-31.3065488
45,8.4,8.4,7.0710678,7.0710678,0.4242641,-13.7178716
153.434949,7.2,9.2,8.9442719,4.472136,0.2236068,-22.137073
135,6.5,7.3,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6.6,7.5,8.9442719,4.472136,0.2236068,-22.137073
26.565051,6.4,7.4,13.4164079,4.472136,0.2236068,-22.137073
135,6.3,7.7,7.0710678,7.0710678,0.1414214,-14.0007143
251.565051,6.4,8,9.486833,3.1622777,0.3162278,-31.3065488
45,6.2,7.8,7.0710678,7.0710678,0.2828427,-13.8592929
26.565051,2.6,7.6,13.4164079,4.472136,0.2236068,-22.137073
153.434949,2.8,7.5,8.9442719,4.472136,0.2236068,-22.137073
270,2.8,7.7,0,10,0.2,-9.8
90,4.5,7.9,0,10,0.2,-9.8
0,4.3,7.9,0,10,0.2,-9.8
225,4.5,8.1,7.0710678,7.0710678,0.2828427,-13.8592929
63.434949,4.9,8.3,8.9442719,4.472136,0.2236068,-22.137073
315,4.8,8.4,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,5,8.5,13.4164079,4.472136,0.2236068,-22.137073
153.434949,5.8,8.8,8.9442719,4.472136,0.2236068,-22.137073
270,5.8,9.1,0,10,0.3,-9.7
45,5.6,8.9,7.0710678,7.0710678,0.2828427,-13.8592929
0,2.8,9.3,0,10,0.3,-9.7
135,2.6,8,7.0710678,7.0710678,0.1414214,-14.0007143
270,2.6,8.2,0,10,0.2,-9.8
45,2.5,8.1,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,0.8,8.2,13.4164079,4.472136,0.2236068,-22.137073
333.434949,0.6,8.3,8.9442719,4.472136,0.2236068,-22.137073
225,0.7,8.4,7.0710678,7.0710678,0.1414214,-14.0007143
135,1.2,8.6,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,1.3,8.8,8.9442719,4.472136,0.2236068,-22.137073
26.565051,1.1,8.7,13.4164079,4.472136,0.2236068,-22.137073
0,8.74875,8.58939,0,10,0,-10
0,8.12326,9.16255,0,10,0,-10
0,8.22334,7.41455,0,10,0,-10
0,7.2264,8.32807,0,10,0,-10
0,6.60091,8.90123,0,10,0,-10
0,8.74106,5.28385,0,10,0,-10
0,8.11556,5.85701,0,10,0,-10
0,6.70099,7.15323,0,10,0,-10
0,5.70405,8.06676,0,10,0,-10
0,5.07855,8.63992,0,10,0,-10
0,8.21564,4.10901,0,10,0,-10
0,7.2187,5.02254,0,10,0,-10
0,6.59321,5.5957,0,10,0,-10
0,5.17863,6.89192,0,10,0,-10
0,4.18169,7.80544,0,10,0,-10
0,3.5562,8.3786,0,10,0,-10
0,8.73336,1.97832,0,10,0,-10
0,8.10787,2.55148,0,10,0,-10
0,6.69329,3.8477,0,10,0,-10
0,5.69635,4.76122,0,10,0,-10
0,5.07086,5.33438,0,10,0,-10
0,3.65628,6.6306,0,10,0,-10
0,2.65934,7.54413,0,10,0,-10
0,2.03385,8.11729,0,10,0,-10
0,8.20795,0.80348,0,10,0,-10
0,7.21101,1.717,0,10,0,-10
0,6.58551,2.29016,0,10,0,-10
0,5.17094,3.58638,0,10,0,-10
0,4.174,4.49991,0,10,0,-10
0,3.5485,5.07307,0,10,0,-10
0,2.13393,6.36929,0,10,0,-10
0,1.13699,7.28282,0,10,0,-10
0,0.51149,7.85597,0,10,0,-10
0,6.68559,0.54216,0,10,0,-10
0,5.68865,1.45569,0,10,0,-10
0,5.06316,2.02885,0,10,0,-10
0,3.53626,3.22649,0,10,0,-10
0,2.65164,4.23859,0,10,0,-10
0,2.02615,4.81175,0,10,0,-10
0,0.61157,6.10797,0,10,0,-10
0,5.16324,0.28085,0,10,0,-10
0,4.1663,1.19437,0,10,0,-10
0,3.54081,1.76753,0,10,0,-10
0,2.12623,3.06375,0,10,0,-10
0,1.12929,3.97728,0,10,0,-10
0,0.5038,4.55044,0,10,0,-10
0,3.64089,0.01953,0,10,0,-10
0,2.64395,0.93306,0,10,0,-10
0,2.01845,1.50622,0,10,0,-10
0,0.60388,2.80244,0,10,0,-10
0,1.12159,0.67174,0,10,0,-10
0,0.4961,1.2449,0,10,0,-10
0,9.15644,8.35141,0,10,0,-10
0,8.31335,8.05964,0,10,0,-10
0,7.76295,8.41028,0,10,0,-10
0,8.6371,7.02451,0,10,0,-10
0,6.91985,8.11852,0,10,0,-10
0,6.36945,8.46916,0,10,0,-10
0,7.2436,7.08339,0,10,0,-10
0,5.52636,8.17739,0,10,0,-10
0,4.97596,8.52804,0,10,0,-10
0,8.67916,5.33996,0,10,0,-10
0,8.12876,5.69061,0,10,0,-10
0,5.85011,7.14227,0,10,0,-10
0,4.13287,8.23627,0,10,0,-10
0,3.58247,8.58691,0,10,0,-10
0,9.00291,4.30484,0,10,0,-10
0,7.28566,5.39884,0,10,0,-10
0,6.73527,5.74948,0,10,0,-10
0,4.45662,7.20114,0,10,0,-10
0,2.73937,8.29515,0,10,0,-10
0,2.18897,8.64579,0,10,0,-10
0,7.60942,4.36371,0,10,0,-10
0,5.89217,5.45772,0,10,0,-10
0,5.34177,5.80836,0,10,0,-10
0,3.06312,7.26002,0,10,0,-10
0,1.34588,8.35403,0,10,0,-10
0,0.79548,8.70467,0,10,0,-10
0,9.04497,2.62029,0,10,0,-10
0,8.49457,2.97093,0,10,0,-10
0,6.21592,4.42259,0,10,0,-10
0,4.49868,5.5166,0,10,0,-10
0,3.94828,5.86724,0,10,0,-10
0,1.66963,7.3189,0,10,0,-10
0,9.36872,1.58516,0,10,0,-10
0,7.65148,2.67917,0,10,0,-10
0,7.10108,3.02981,0,10,0,-10
0,4.82243,4.48147,0,10,0,-10
0,3.10518,5.57547,0,10,0,-10
0,2.55479,5.92612,0,10,0,-10
0,0.27613,7.37778,0,10,0,-10
0,7.97523,1.64404,0,10,0,-10
0,6.25798,2.73804,0,10,0,-10
0,5.70758,3.08869,0,10,0,-10
0,3.42893,4.54035,0,10,0,-10
0,1.71169,5.63435,0,10,0,-10
0,1.16129,5.98499,0,10,0,-10
0,8.86038,0.25125,0,10,0,-10
0,6.58173,1.70292,0,10,0,-10
0,4.86449,2.79692,0,10,0,-10
0,4.31409,3.14756,0,10,0,-10
0,2.03544,4.59922,0,10,0,-10
0,0.3182,5.69323,0,10,0,-10
0,7.46689,0.31013,0,10,0,-10
0,5.18824,1.76179,0,10,0,-10
0,3.471,2.8558,0,10,0,-10
0,2.9206,3.20644,0,10,0,-10
0,0.64195,4.6581,0,10,0,-10
0,6.6238,0.01837,0,10,0,-10
0,6.0734,0.36901,0,10,0,-10
0,3.79475,1.82067,0,10,0,-10
0,2.0775,2.91468,0,10,0,-10
0,1.5271,3.26532,0,10,0,-10
0,5.2303,0.07724,0,10,0,-10
0,4.6799,0.42789,0,10,0,-10
0,2.40125,1.87955,0,10,0,-10
0,0.68401,2.97355,0,10,0,-10
0,0.13361,3.3242,0,10,0,-10
0,3.83681,0.13612,0,10,0,-10
0,3.28641,0.48676,0,10,0,-10
0,1.00776,1.93842,0,10,0,-10
0,2.44331,0.195,0,10,0,-10
0,1.89292,0.54564,0,10,0,-10
0,1.04982,0.25388,0,10,0,-10
0,0.49942,0.60452,0,10,0,-10
0,6.42555,9.30607,0,10,0,-10
0,4.77695,9.08903,0,10,0,-10
0,3.7883,8.95887,0,10,0,-10
0,3.13481,8.87284,0,10,0,-10
0,1.48621,8.6558,0,10,0,-10
0,0.49757,8.52564,0,10,0,-10
0,9.02957,8.70973,0,10,0,-10
0,7.38097,8.49269,0,10,0,-10
0,6.39232,8.36253,0,10,0,-10
0,5.73883,8.2765,0,10,0,-10
0,4.09023,8.05946,0,10,0,-10
0,3.10158,7.9293,0,10,0,-10
0,2.4481,7.84327,0,10,0,-10
0,0.79949,7.62622,0,10,0,-10
0,8.99634,7.76619,0,10,0,-10
0,8.34285,7.68016,0,10,0,-10
0,6.69425,7.46312,0,10,0,-10
0,5.7056,7.33296,0,10,0,-10
0,5.05211,7.24692,0,10,0,-10
0,3.40351,7.02988,0,10,0,-10
0,2.41487,6.89972,0,10,0,-10
0,1.76138,6.81369,0,10,0,-10
0,0.11277,6.59665,0,10,0,-10
0,9.29827,6.86677,0,10,0,-10
0,8.30962,6.73662,0,10,0,-10
0,7.65613,6.65058,0,10,0,-10
0,6.00753,6.43354,0,10,0,-10
0,5.01888,6.30338,0,10,0,-10
0,4.3654,6.21735,0,10,0,-10
0,2.71679,6.00031,0,10,0,-10
0,1.72815,5.87015,0,10,0,-10
0,1.07466,5.78412,0,10,0,-10
0,8.61155,5.8372,0,10,0,-10
0,7.6229,5.70704,0,10,0,-10
0,6.96941,5.62101,0,10,0,-10
0,5.32081,5.40397,0,10,0,-10
0,4.33217,5.27381,0,10,0,-10
0,3.67868,5.18777,0,10,0,-10
0,2.03007,4.97073,0,10,0,-10
0,1.04143,4.84057,0,10,0,-10
0,0.38794,4.75454,0,10,0,-10
0,7.92483,4.80762,0,10,0,-10
0,6.93618,4.67747,0,10,0,-10
0,6.2827,4.59143,0,10,0,-10
0,4.63409,4.37439,0,10,0,-10
0,3.64545,4.24423,0,10,0,-10
0,2.99196,4.1582,0,10,0,-10
0,1.34336,3.94116,0,10,0,-10
0,0.35471,3.811,0,10,0,-10
0,8.88671,3.99509,0,10,0,-10
0,7.23811,3.77805,0,10,0,-10
0,6.24947,3.64789,0,10,0,-10
0,5.59598,3.56186,0,10,0,-10
0,3.94737,3.34482,0,10,0,-10
0,2.95873,3.21466,0,10,0,-10
0,2.30524,3.12862,0,10,0,-10
0,0.65664,2.91158,0,10,0,-10
0,8.85348,3.05155,0,10,0,-10
0,8.19999,2.96552,0,10,0,-10
0,6.55139,2.74847,0,10,0,-10
0,5.56275,2.61832,0,10,0,-10
0,4.90926,2.53228,0,10,0,-10
0,3.26065,2.31524,0,10,0,-10
0,2.27201,2.18508,0,10,0,-10
0,1.61852,2.09905,0,10,0,-10
0,9.15541,2.15213,0,10,0,-10
0,8.16676,2.02197,0,10,0,-10
0,7.51328,1.93594,0,10,0,-10
0,5.86467,1.7189,0,10,0,-10
0,4.87603,1.58874,0,10,0,-10
0,4.22254,1.50271,0,10,0,-10
0,2.57394,1.28567,0,10,0,-10
0,1.58529,1.15551,0,10,0,-10
0,0.9318,1.06947,0,10,0,-10
0,8.46869,1.12256,0,10,0,-10
0,7.48005,0.9924,0,10,0,-10
0,6.82656,0.90637,0,10,0,-10
0,5.17795,0.68932,0,10,0,-10
0,4.18931,0.55917,0,10,0,-10
0,3.53582,0.47313,0,10,0,-10
0,1.88722,0.25609,0,10,0,-10
0,0.89857,0.12593,0,10,0,-10
0,0.24508,0.0399,0,10,0,-10
0,7.78197,0.09298,0,10,0,-10
0,1.25458,8.906,0,10,0,-10
0,2.59486,9.0898,0,10,0,-10
0,1.22284,8.03701,0,10,0,-10
0,3.91339,9.25692,0,10,0,-10
0,2.56312,8.22081,0,10,0,-10
0,1.19109,7.16803,0,10,0,-10
0,3.88165,8.38793,0,10,0,-10
0,2.53137,7.35183,0,10,0,-10
0,1.15935,6.29904,0,10,0,-10
0,5.23746,8.58365,0,10,0,-10
0,3.84991,7.51894,0,10,0,-10
0,2.49963,6.48284,0,10,0,-10
0,1.12761,5.43005,0,10,0,-10
0,6.57774,8.76745,0,10,0,-10
0,5.20572,7.71466,0,10,0,-10
0,3.81816,6.64995,0,10,0,-10
0,2.46789,5.61385,0,10,0,-10
0,1.09587,4.56106,0,10,0,-10
0,7.89627,8.93456,0,10,0,-10
0,6.546,7.89846,0,10,0,-10
0,5.17398,6.84567,0,10,0,-10
0,3.78642,5.78096,0,10,0,-10
0,2.43615,4.74486,0,10,0,-10
0,1.06413,3.69207,0,10,0,-10
0,9.25208,9.13028,0,10,0,-10
0,7.86453,8.06557,0,10,0,-10
0,6.51425,7.02947,0,10,0,-10
0,5.14223,5.97668,0,10,0,-10
0,3.75468,4.91198,0,10,0,-10
0,2.4044,3.87587,0,10,0,-10
0,1.03238,2.82308,0,10,0,-10
0,9.22034,8.26129,0,10,0,-10
0,7.83279,7.19659,0,10,0,-10
0,6.48251,6.16048,0,10,0,-10
0,5.11049,5.10769,0,10,0,-10
0,3.72294,4.04299,0,10,0,-10
0,2.37266,3.00688,0,10,0,-10
0,1.00064,1.9541,0,10,0,-10
0,9.1886,7.3923,0,10,0,-10
0,7.80105,6.3276,0,10,0,-10
0,6.45077,5.29149,0,10,0,-10
0,5.07875,4.23871,0,10,0,-10
0,3.6912,3.174,0,10,0,-10
0,2.34092,2.1379,0,10,0,-10
0,0.9689,1.08511,0,10,0,-10
0,9.15686,6.52332,0,10,0,-10
0,7.7693,5.45861,0,10,0,-10
0,6.41903,4.42251,0,10,0,-10
0,5.04701,3.36972,0,10,0,-10
0,2.30918,1.26891,0,10,0,-10
0,0.93716,0.21612,0,10,0,-10
0,9.12511,5.65433,0,10,0,-10
0,7.73756,4.58962,0,10,0,-10
0,6.38729,3.55352,0,10,0,-10
0,5.01527,2.50073,0,10,0,-10
0,3.62771,1.43602,0,10,0,-10
0,2.27744,0.39992,0,10,0,-10
0,9.09337,4.78534,0,10,0,-10
0,7.70582,3.72063,0,10,0,-10
0,6.35554,2.68453,0,10,0,-10
0,4.98352,1.63174,0,10,0,-10
0,3.59597,0.56703,0,10,0,-10
0,9.06163,3.91635,0,10,0,-10
0,7.67408,2.85164,0,10,0,-10
0,6.3238,1.81554,0,10,0,-10
0,4.95178,0.76275,0,10,0,-10
0,9.02989,3.04736,0,10,0,-10
0,7.64234,1.98266,0,10,0,-10
0,6.29206,0.94655,0,10,0,-10
0,8.99815,2.17837,0,10,0,-10
0,7.61059,1.11367,0,10,0,-10
0,6.26032,0.07756,0,10,0,-10
0,8.9664,1.30939,0,10,0,-10
0,7.57885,0.24468,0,10,0,-10
0,8.93466,0.4404,0,10,0,-10
206.565051,10,0.6,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9.9,0.4,8.9442719,4.472136,0.2236068,-22.137073
315,9.8,0.5,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,9.7,5.4,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9.6,5.2,8.9442719,4.472136,0.2236068,-22.137073
315,9.5,5.3,7.0710678,7.0710678,0.1414214,-14.0007143
153.434949,10,7.2,8.9442719,4.472136,0.2236068,-22.137073
288.434949,9.9,7.5,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,9.8,7.3,8.9442719,4.472136,0.2236068,-22.137073
135,9.7,9.3,7.0710678,7.0710678,0.1414214,-14.0007143
270,9.7,9.5,0,10,0.2,-9.8
45,9.6,9.4,7.0710678,7.0710678,0.1414214,-14.0007143
0,7.7,9.6,0,10,0.2,-9.8
270,7.2,9.4,0,10,0.2,-9.8
26.565051,7,9.3,13.4164079,4.472136,0.2236068,-22.137073
0,9.50621,9.4965,0,10,0,-10
0,9.74569,7.67586,0,10,0,-10
0,9.63792,6.11833,0,10,0,-10
0,9.738,4.37033,0,10,0,-10
0,9.63022,2.81279,0,10,0,-10
0,9.7303,1.06479,0,10,0,-10
0,9.70684,8.00076,0,10,0,-10
0,9.52225,5.63173,0,10,0,-10
0,9.88807,2.91205,0,10,0,-10
0,8.06768,9.52227,0,10,0,-10
0,7.07904,9.39211,0,10,0,-10
0,9.68306,8.79577,0,10,0,-10
0,9.98498,7.89635,0,10,0,-10
0,9.57343,5.02467,0,10,0,-10
0,9.5402,4.08112,0,10,0,-10
0,9.84213,3.18171,0,10,0,-10
0,9.43058,0.31003,0,10,0,-10
243.434949,7.8,9.8,8.9442719,4.472136,0.2236068,-22.137073
116.565051,7.9,9.6,13.4164079,4.472136,0.2236068,-22.137073
180,6,9.7,0,10,0.2,-9.8
270,6,9.9,0,10,0.2,-9.8
45,5.8,9.7,7.0710678,7.0710678,0.2828427,-13.8592929
296.565051,4.1,10,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4,9.8,8.9442719,4.472136,0.2236068,-22.137073
180,4.2,9.8,0,10,0.2,-9.8
135,3.4,9.4,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,3.5,9.6,8.9442719,4.472136,0.2236068,-22.137073
26.565051,3.3,9.5,13.4164079,4.472136,0.2236068,-22.137073
116.565051,3.1,9.3,13.4164079,4.472136,0.2236068,-22.137073
225,3,9.5,7.0710678,7.0710678,0.2828427,-13.8592929
45,0,9.7,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,0.3,9.6,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,0.2,9.9,22.1359436,3.1622777,0.3162278,-31.3065488
0,3.66398,9.93614,0,10,0,-10
0,2.14162,9.67482,0,10,0,-10
0,0.61927,9.41351,0,10,0,-10
0,6.87779,9.80307,0,10,0,-10
0,5.4843,9.86194,0,10,0,-10
0,2.69731,9.9797,0,10,0,-10
0,4.47502,9.98845,0,10,0,-10
0,3.82153,9.90242,0,10,0,-10
0,2.17293,9.68537,0,10,0,-10
0,1.18429,9.55522,0,10,0,-10
0,0.5308,9.46918,0,10,0,-10
0,1.28632,9.77499,0,10,0,-10
0,2.6266,9.95879,0,10,0,-10
0,5.2692,9.45264,0,10,0,-10
0,6.60948,9.63644,0,10,0,-10
0,7.92801,9.80355,0,10,0,-10
0,9.66478,9.68531,0,10,0,-10
0,8.27128,9.74419,0,10,0,-10
0,9.71629,9.73931,0,10,0,-10
0,9.28383,9.99927,0,10,0,-10
`),!1),b(x.ParsePatFile(`
*AR-CONC,AR-CONC
50, 0,0, 4.12975034,-5.89789472, .75,-8.25
355, 0,0, -2.03781207,7.3723684, .6,-6.6
100.4514, .5977168,-.0522934, 5.7305871,-6.9397673, .6374019,-7.01142112
46.1842, 0,2, 6.19462551,-8.84684208, 1.125,-12.375
96.6356, .88936745,1.86206693, 8.59588071,-10.40965104, .95610288,-10.51713
351.1842, 0,2, 7.74328189,11.0585526, .9,-9.9
21, 1,1.5, 4.12975034,-5.89789472, .75,-8.25
326, 1,1.5, -2.03781207,7.3723684, .6,-6.6
71.4514, 1.49742233,1.16448394, 5.7305871,-6.9397673, .6374019,-7.01142112
37.5, 0,0, 2.123,2.567, 0,-6.52,0,-6.7,0,-6.625
7.5, 0,0, 3.123,3.567, 0,-3.82,0,-6.37,0,-2.525
-32.5, -2.23,0, 4.6234,2.678, 0,-2.5,0,-7.8,0,-10.35
-42.5, -3.23,0, 3.6234,4.678, 0,-3.25,0,-5.18,0,-7.35
`),!1),b(x.ParsePatFile(`
*AR-HBONE,AR-HBONE
45, 0,0, 4,4, 12,-4
135, 2.82842713,2.82842713, 4,-4, 12,-4
`),!1),b(x.ParsePatFile(`
*AR-PARQ1,AR-PARQ1
90, 0,0, 12,12, 12,-12
90, 2,0, 12,12, 12,-12
90, 4,0, 12,12, 12,-12
90, 6,0, 12,12, 12,-12
90, 8,0, 12,12, 12,-12
90, 10,0, 12,12, 12,-12
90, 12,0, 12,12, 12,-12
0, 0,12, 12,-12, 12,-12
0, 0,14, 12,-12, 12,-12
0, 0,16, 12,-12, 12,-12
0, 0,18, 12,-12, 12,-12
0, 0,20, 12,-12, 12,-12
0, 0,22, 12,-12, 12,-12
0, 0,24, 12,-12, 12,-12
`),!1),b(x.ParsePatFile(`
*AR-RROOF,AR-RROOF
0, 0,0, 2.2,1, 15,-2,5,-1
0, 1.33,.5, -1,1.33, 3,-.33,6,-.75
0, .5,.85, 5.2,.67, 8,-1.4,4,-1
`),!1),b(x.ParsePatFile(`
*AR-RSHKE,AR-RSHKE
0, 0,0, 25.5,12, 6,-5,7,-3,9,-4
0, 6,.5, 25.5,12, 5,-19,4,-6
0, 18,-.75, 25.5,12, 3,-31
90, 0,0, 12,8.5, 11.5,-36.5
90, 6,0, 12,8.5, 11.25,-36.75
90, 11,0, 12,8.5, 10.5,-37.5
90, 18,-.75, 12,8.5, 11.5,-36.5
90, 21,-.75, 12,8.5, 11.5,-36.5
90, 30,0, 12,8.5, 11,-37
`),!1),b(x.ParsePatFile(`
*AR-SAND,AR-SAND
37.5, 0,0, 1.123,1.567, 0,-1.52,0,-1.7,0,-1.625
7.5, 0,0, 2.123,2.567, 0,-.82,0,-1.37,0,-.525
-32.5, -1.23,0, 2.6234,1.678, 0,-.5,0,-1.8,0,-2.35
-42.5, -1.23,0, 1.6234,2.678, 0,-.25,0,-1.18,0,-1.35
`),!1),b(x.ParsePatFile(`
*BARBWIRE,BARBWIRE
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
315,0.3,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
288.434949,0.26,0.68,2.21359436,0.31622777,0.12649111,-3.03578655
158.198591,0.31,0.66,3.15682075,0.18569534,0.05385165,-5.33131316
116.565051,0.32,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
116.565051,0.34,0.6,1.34164079,0.4472136,0.04472136,-2.19134662
111.801409,0.44,0.39,2.22834406,0.18569534,0.05385165,-5.33131316
156.801409,0.51,0.36,5.38356375,0.13130643,0.07615773,-7.53961537
289.653824,0.46,0.5,11.70450662,0.06726728,0.14866069,-14.71740806
194.036243,0.31,0.36,3.15296313,0.24253563,0.04123106,-4.08187457
251.565051,0.32,0.39,0.9486833,0.31622777,0.03162278,-3.13065488
254.054604,0.34,0.46,4.12081692,0.13736056,0.0728011,-7.20730879
74.744881,0.34,0.46,4.12217269,0.0877058,0.11401754,-11.28773671
135,0.36,0.44,0.70710678,0.70710678,0.02828427,-1.38592929
180,0.39,0.44,0,1,0.03,-0.97
270,0.39,0.45,0,1,0.01,-0.99
74.054604,0.39,0.45,4.12081692,0.13736056,0.1456022,-7.13450769
161.565051,0.42,0.44,0.9486833,0.31622777,0.03162278,-3.13065488
198.434949,0.45,0.45,2.21359436,0.31622777,0.03162278,-3.13065488
258.231711,0.5,0.69,5.09885635,0.04079085,0.24515301,-24.27014833
21.801409,0.45,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
75.963757,0.43,0.59,0.9701425,0.24253563,0.08246211,-4.04064351
341.565051,0.4,0.6,0.9486833,0.31622777,0.03162278,-3.13065488
45,0.37,0.57,0.70710678,0.70710678,0.04242641,-1.37178716
288.434949,0.36,0.6,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.34,0.6,0,1,0.02,-0.98
26.565051,0.32,0.59,1.34164079,0.4472136,0.02236068,-2.2137073
78.231711,0.27,0.35,5.09885635,0.04079085,0.24515301,-24.27014833
4.085617,0.78,0.48,13.03821015,0.07124705,0.14035669,-13.89531216
0,0.69,0.48,0,1,0.09,-0.91
354.289407,0.59,0.49,0.99503719,0.09950372,0.10049876,-9.94937686
356.185925,0.47,0.55,0.99778516,0.06651901,0.15033296,-14.88296341
351.469234,0.8,0.55,7.07089492,0.04944682,0.20223748,-20.02151093
0,0.66,0.55,0,1,0.14,-0.86
14.036243,0.46,0.5,3.15296313,0.24253563,0.20615528,-3.91695034
189.865807,0.7,0.51,17.26262336,0.04283529,0.23345235,-23.11178271
180,0.8,0.51,0,1,0.1,-0.9
171.469234,1,0.48,7.07089492,0.04944682,0.20223748,-20.02151093
186.115504,1,0.56,9.05531551,0.03551104,0.15644586,-28.00380982
5.52754,0.13777778,0.53333333,10.04982433,0.03210806,0.17302679,-30.97179621
3.691386,0,0.48,15.03326191,0.03219114,0.1515339,-30.91291524
348.310631,0,0.52,5.0989077,0.0337676,0.29614186,-29.31804393
348.690068,0,0.56,0.98058068,0.19611614,0.30594117,-4.79307834
`),!1),b(x.ParsePatFile(`
*BLOCKS-01,BLOCKS-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.31,0.66,1,1,0.22,-0.78
180,0.08,0.09,0,1,0.57,-0.43
270,0.08,0.09,1,1,0.21,-0.79
180,0.08,0.88,0,1,0.57,-0.43
270,0.51,0.09,1,1,0.21,-0.79
270,0.89,0.32,1,1,0.2,-0.8
0,0.49,0.32,0,1,0.4,-0.6
90,0.49,0.12,1,1,0.2,-0.8
180,0.89,0.12,0,1,0.4,-0.6
270,0.69,0.84,1,1,0.48,-0.52
0,0.48,0.84,0,1,0.21,-0.79
90,0.48,0.36,1,1,0.48,-0.52
180,0.69,0.36,0,1,0.21,-0.79
270,0.12,0.03,1,1,0.33,-0.67
0,0.12,0.7,0,1,0.32,-0.68
270,0.44,0.03,1,1,0.33,-0.67
0,0.12,0.03,0,1,0.32,-0.68
270,0.45,0.67,1,1,0.24,-0.76
0,0.36,0.67,0,1,0.09,-0.91
90,0.36,0.43,1,1,0.24,-0.76
180,0.45,0.43,0,1,0.09,-0.91
270,0.45,0.4,1,1,0.33,-0.67
0,0.11,0.4,0,1,0.34,-0.66
90,0.11,0.07,1,1,0.33,-0.67
180,0.45,0.07,0,1,0.34,-0.66
270,0.89,0.41,1,1,0.06,-0.94
0,0.73,0.41,0,1,0.16,-0.84
90,0.73,0.35,1,1,0.06,-0.94
180,0.89,0.35,0,1,0.16,-0.84
180,0.07,0.4,0,1,0.14,-0.86
270,0.93,0.4,1,1,0.27,-0.73
180,0.07,0.13,0,1,0.14,-0.86
270,0.07,0.4,1,1,0.27,-0.73
180,0.08,0.81,0,1,0.34,-0.66
270,0.74,0.81,1,1,0.1,-0.9
180,0.08,0.71,0,1,0.34,-0.66
270,0.08,0.81,1,1,0.1,-0.9
180,0.31,0.66,0,1,0.59,-0.41
270,0.72,0.66,1,1,0.22,-0.78
180,0.31,0.44,0,1,0.59,-0.41
`),!1),b(x.ParsePatFile(`
*BLOCKS-02,BLOCKS-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.32,0.18,0,1,0.49,-0.51
270,0.32,0.55,1,1,0.37,-0.63
0,0.37,0.96,0,1,0.42,-0.58
0,0.17,0.98,0,1,0.17,-0.83
90,0.82,0,1,1,0.15,-0.85
180,0.92,0,0,1,0.1,-0.9
180,0.32,0.55,0,1,0.49,-0.51
270,0.83,0.55,1,1,0.37,-0.63
180,0.13,0.8,0,1,0.18,-0.82
90,0.14,0.59,1,1,0.17,-0.83
270,0.13,0.15,1,1,0.35,-0.65
180,0.71,0.59,0,1,0.57,-0.43
270,0.92,0.15,1,1,0.15,-0.85
0,0.82,0.15,0,1,0.1,-0.9
270,0.71,0.76,1,1,0.17,-0.83
0,0.14,0.76,0,1,0.57,-0.43
180,0.08,0.59,0,1,0.32,-0.68
270,0.08,0.76,1,1,0.17,-0.83
180,0.13,0.15,0,1,0.18,-0.82
270,0.95,0.15,1,1,0.35,-0.65
90,0.18,0.8,1,1,0.13,-0.87
180,0.91,0.8,0,1,0.73,-0.27
180,0.08,0.76,0,1,0.32,-0.68
270,0.76,0.76,1,1,0.17,-0.83
270,0.34,0.15,1,1,0.17,-0.83
0,0.17,0.15,0,1,0.17,-0.83
270,0.91,0.93,1,1,0.13,-0.87
0,0.18,0.93,0,1,0.73,-0.27
0,0.37,0.55,0,1,0.42,-0.58
270,0.37,0.55,1,1,0.59,-0.41
270,0.17,0.15,1,1,0.17,-0.83
270,0.79,0.55,1,1,0.59,-0.41
`),!1),b(x.ParsePatFile(`
*BOXJOIN-01,BOXJOIN-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
90,0.15000001,0.15,1,1,0.7,-0.3
0,0.15000001,0.85,0,1,0.7,-0.3
270,0.45000001,0.15,1,1,0.3,-0.7
180,0.15000001,0.45,0,1,0.3,-0.7
270,0.55000001,0.15,1,1,0.3,-0.7
180,0.85000001,0.15,0,1,0.7,-0.3
270,0.85000001,0.85,1,1,0.7,-0.3
180,0.15000001,0.55,0,1,0.3,-0.7
`),!1),b(x.ParsePatFile(`
*BOXJOIN-02,BOXJOIN-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
90,0.15000001,0.55,1,1,0.3,-0.7
270,0.85000001,0.85,1,1,0.3,-0.7
0,0.55000001,0.85,0,1,0.3,-0.7
180,0.15000001,0.55,0,1,0.3,-0.7
90,0.15000001,0.15,1,1,0.3,-0.7
180,0.45000001,0.15,0,1,0.3,-0.7
180,0.15000001,0.45,0,1,0.3,-0.7
180,0.85000001,0.15,0,1,0.3,-0.7
270,0.85000001,0.45,1,1,0.3,-0.7
270,0.45000001,0.15,1,1,0.3,-0.7
270,0.55000001,0.15,1,1,0.3,-0.7
0,0.15000001,0.85,0,1,0.3,-0.7
`),!1),b(x.ParsePatFile(`
*BOX,BOX
90, 0,0, 0,1
90, .25,0, 0,1
0, 0,0, 0,1, -.25,.25
0, 0,.25, 0,1, -.25,.25
0, 0,.5, 0,1, .25,-.25
0, 0,.75, 0,1, .25,-.25
90, .5,0, 0,1, .25,-.25
90, .75,0, 0,1, .25,-.25
`),!1),b(x.ParsePatFile(`
*BOX-OVERLAP,BOX-OVERLAP verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.2,0.7,0,1,0.4,-0.6
90,0.2,0.2,1,1,0.6,-0.4
270,0.3,0.2,1,1,0.4,-0.6
180,0.2,0.3,0,1,0.4,-0.6
0,0.2,0.8,0,1,0.6,-0.4
180,0.8,0.2,0,1,0.6,-0.4
270,0.8,0.8,1,1,0.6,-0.4
270,0.7,0.2,1,1,0.4,-0.6
`),!1),b(x.ParsePatFile(`
*BRASS,BRASS
0, 0,0, 0,.25
0, 0,.125, 0,.25, .125,-.0625
`),!1),b(x.ParsePatFile(`
*BRICK,BRICK
0, 0,0, 0,.25
90, 0,0, 0,.5, .25,-.25
90, .25,0, 0,.5, -.25,.25
`),!1),b(x.ParsePatFile(`
*BRSTONE,BRSTONE
0, 0,0, 0,.33
90, .9,0, .33,.5, .33,-.33
90, .8,0, .33,.5, .33,-.33
0, .9,.055, .5,.33, -.9,.1
0, .9,.11, .5,.33, -.9,.1
0, .9,.165, .5,.33, -.9,.1
0, .9,.22, .5,.33, -.9,.1
0, .9,.275, .5,.33, -.9,.1
`),!1),b(x.ParsePatFile(`
*BUBBLES-01,BUBBLES-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
0,0.058964,0.016739,0,1,0,-1
0,0.062236,0.033193,0,1,0,-1
0,0.067629,0.049078,0,1,0,-1
0,0.075048,0.064123,0,1,0,-1
0,0.084368,0.078071,0,1,0,-1
0,0.095429,0.090684,0,1,0,-1
0,0.108041,0.101745,0,1,0,-1
0,0.12199,0.111065,0,1,0,-1
0,0.137035,0.118484,0,1,0,-1
0,0.15292,0.123876,0,1,0,-1
0,0.169373,0.127149,0,1,0,-1
0,0.186113,0.128246,0,1,0,-1
0,0.202852,0.127149,0,1,0,-1
0,0.219305,0.123876,0,1,0,-1
0,0.23519,0.118484,0,1,0,-1
0,0.250236,0.111065,0,1,0,-1
0,0.264184,0.101745,0,1,0,-1
0,0.276796,0.090684,0,1,0,-1
0,0.287857,0.078071,0,1,0,-1
0,0.297177,0.064123,0,1,0,-1
0,0.304597,0.049078,0,1,0,-1
0,0.309989,0.033193,0,1,0,-1
0,0.313262,0.016739,0,1,0,-1
0,0.120008,0.220248,0,1,0,-1
0,0.117478,0.203192,0,1,0,-1
0,0.113288,0.186467,0,1,0,-1
0,0.10748,0.170233,0,1,0,-1
0,0.100108,0.154647,0,1,0,-1
0,0.091244,0.139858,0,1,0,-1
0,0.080973,0.126009,0,1,0,-1
0,0.069394,0.113234,0,1,0,-1
0,0.056618,0.101655,0,1,0,-1
0,0.04277,0.091384,0,1,0,-1
0,0.027981,0.08252,0,1,0,-1
0,0.012394,0.075148,0,1,0,-1
0,0.012394,0.39979,0,1,0,-1
0,0.027981,0.392418,0,1,0,-1
0,0.04277,0.383554,0,1,0,-1
0,0.056618,0.373283,0,1,0,-1
0,0.069394,0.361704,0,1,0,-1
0,0.080973,0.348929,0,1,0,-1
0,0.091244,0.33508,0,1,0,-1
0,0.100108,0.320291,0,1,0,-1
0,0.10748,0.304704,0,1,0,-1
0,0.113288,0.28847,0,1,0,-1
0,0.117478,0.271745,0,1,0,-1
0,0.120008,0.25469,0,1,0,-1
0,0.120854,0.237469,0,1,0,-1
0,0.738076,0.372319,0,1,0,-1
0,0.732613,0.356706,0,1,0,-1
0,0.723812,0.3427,0,1,0,-1
0,0.712116,0.331003,0,1,0,-1
0,0.69811,0.322203,0,1,0,-1
0,0.682497,0.316739,0,1,0,-1
0,0.666059,0.314887,0,1,0,-1
0,0.649622,0.316739,0,1,0,-1
0,0.634009,0.322203,0,1,0,-1
0,0.620003,0.331003,0,1,0,-1
0,0.608306,0.3427,0,1,0,-1
0,0.599506,0.356706,0,1,0,-1
0,0.594042,0.372319,0,1,0,-1
0,0.59219,0.388756,0,1,0,-1
0,0.594042,0.405194,0,1,0,-1
0,0.599506,0.420807,0,1,0,-1
0,0.608306,0.434813,0,1,0,-1
0,0.620003,0.44651,0,1,0,-1
0,0.634009,0.45531,0,1,0,-1
0,0.649622,0.460773,0,1,0,-1
0,0.666059,0.462625,0,1,0,-1
0,0.682497,0.460773,0,1,0,-1
0,0.69811,0.45531,0,1,0,-1
0,0.712116,0.44651,0,1,0,-1
0,0.723812,0.434813,0,1,0,-1
0,0.732613,0.420807,0,1,0,-1
0,0.738076,0.405194,0,1,0,-1
0,0.739928,0.388756,0,1,0,-1
0,0.834916,0.831041,0,1,0,-1
0,0.821448,0.840826,0,1,0,-1
0,0.810309,0.853198,0,1,0,-1
0,0.462763,0.750408,0,1,0,-1
0,0.458683,0.734294,0,1,0,-1
0,0.452005,0.71907,0,1,0,-1
0,0.442913,0.705153,0,1,0,-1
0,0.431654,0.692923,0,1,0,-1
0,0.418536,0.682713,0,1,0,-1
0,0.403916,0.674801,0,1,0,-1
0,0.388193,0.669403,0,1,0,-1
0,0.371796,0.666667,0,1,0,-1
0,0.355172,0.666667,0,1,0,-1
0,0.338776,0.669403,0,1,0,-1
0,0.323053,0.674801,0,1,0,-1
0,0.308433,0.682713,0,1,0,-1
0,0.295314,0.692923,0,1,0,-1
0,0.284056,0.705153,0,1,0,-1
0,0.274963,0.71907,0,1,0,-1
0,0.268286,0.734294,0,1,0,-1
0,0.264205,0.750408,0,1,0,-1
0,0.262832,0.766975,0,1,0,-1
0,0.264205,0.783542,0,1,0,-1
0,0.268286,0.799657,0,1,0,-1
0,0.274963,0.81488,0,1,0,-1
0,0.284056,0.828797,0,1,0,-1
0,0.295314,0.841027,0,1,0,-1
0,0.308433,0.851238,0,1,0,-1
0,0.323053,0.85915,0,1,0,-1
0,0.403916,0.85915,0,1,0,-1
0,0.418536,0.851238,0,1,0,-1
0,0.431654,0.841027,0,1,0,-1
0,0.442913,0.828797,0,1,0,-1
0,0.452005,0.81488,0,1,0,-1
0,0.458683,0.799657,0,1,0,-1
0,0.462763,0.783542,0,1,0,-1
0,0.464136,0.766975,0,1,0,-1
0,0.821196,0.648394,0,1,0,-1
0,0.818556,0.631724,0,1,0,-1
0,0.814188,0.615423,0,1,0,-1
0,0.808139,0.599667,0,1,0,-1
0,0.800477,0.584629,0,1,0,-1
0,0.791286,0.570475,0,1,0,-1
0,0.780665,0.557359,0,1,0,-1
0,0.768731,0.545425,0,1,0,-1
0,0.755615,0.534804,0,1,0,-1
0,0.741461,0.525612,0,1,0,-1
0,0.726423,0.51795,0,1,0,-1
0,0.710667,0.511902,0,1,0,-1
0,0.694365,0.507534,0,1,0,-1
0,0.677696,0.504894,0,1,0,-1
0,0.660842,0.504011,0,1,0,-1
0,0.643989,0.504894,0,1,0,-1
0,0.627319,0.507534,0,1,0,-1
0,0.611018,0.511902,0,1,0,-1
0,0.595262,0.51795,0,1,0,-1
0,0.580224,0.525612,0,1,0,-1
0,0.56607,0.534804,0,1,0,-1
0,0.552954,0.545425,0,1,0,-1
0,0.54102,0.557359,0,1,0,-1
0,0.530399,0.570475,0,1,0,-1
0,0.521207,0.584629,0,1,0,-1
0,0.513545,0.599667,0,1,0,-1
0,0.507497,0.615423,0,1,0,-1
0,0.503129,0.631724,0,1,0,-1
0,0.500489,0.648394,0,1,0,-1
0,0.499606,0.665247,0,1,0,-1
0,0.500489,0.682101,0,1,0,-1
0,0.503129,0.69877,0,1,0,-1
0,0.507497,0.715072,0,1,0,-1
0,0.513545,0.730828,0,1,0,-1
0,0.521207,0.745866,0,1,0,-1
0,0.530399,0.76002,0,1,0,-1
0,0.54102,0.773136,0,1,0,-1
0,0.552954,0.785069,0,1,0,-1
0,0.56607,0.795691,0,1,0,-1
0,0.580224,0.804882,0,1,0,-1
0,0.595262,0.812544,0,1,0,-1
0,0.611018,0.818592,0,1,0,-1
0,0.627319,0.822961,0,1,0,-1
0,0.643989,0.825601,0,1,0,-1
0,0.660842,0.826484,0,1,0,-1
0,0.677696,0.825601,0,1,0,-1
0,0.694365,0.822961,0,1,0,-1
0,0.710667,0.818592,0,1,0,-1
0,0.726423,0.812544,0,1,0,-1
0,0.741461,0.804882,0,1,0,-1
0,0.755615,0.795691,0,1,0,-1
0,0.768731,0.785069,0,1,0,-1
0,0.780665,0.773136,0,1,0,-1
0,0.791286,0.76002,0,1,0,-1
0,0.800477,0.745866,0,1,0,-1
0,0.808139,0.730828,0,1,0,-1
0,0.814188,0.715072,0,1,0,-1
0,0.818556,0.69877,0,1,0,-1
0,0.821196,0.682101,0,1,0,-1
0,0.822079,0.665247,0,1,0,-1
0,0.524311,0.381738,0,1,0,-1
0,0.521577,0.364477,0,1,0,-1
0,0.517054,0.347597,0,1,0,-1
0,0.510791,0.331282,0,1,0,-1
0,0.502858,0.315711,0,1,0,-1
0,0.49334,0.301054,0,1,0,-1
0,0.482342,0.287473,0,1,0,-1
0,0.469984,0.275116,0,1,0,-1
0,0.456403,0.264118,0,1,0,-1
0,0.441747,0.2546,0,1,0,-1
0,0.426175,0.246666,0,1,0,-1
0,0.40986,0.240403,0,1,0,-1
0,0.39298,0.23588,0,1,0,-1
0,0.375719,0.233146,0,1,0,-1
0,0.358267,0.232232,0,1,0,-1
0,0.340816,0.233146,0,1,0,-1
0,0.323555,0.23588,0,1,0,-1
0,0.306674,0.240403,0,1,0,-1
0,0.290359,0.246666,0,1,0,-1
0,0.274788,0.2546,0,1,0,-1
0,0.260132,0.264118,0,1,0,-1
0,0.246551,0.275116,0,1,0,-1
0,0.234193,0.287473,0,1,0,-1
0,0.223195,0.301054,0,1,0,-1
0,0.213677,0.315711,0,1,0,-1
0,0.205743,0.331282,0,1,0,-1
0,0.199481,0.347597,0,1,0,-1
0,0.194958,0.364477,0,1,0,-1
0,0.192224,0.381738,0,1,0,-1
0,0.191309,0.39919,0,1,0,-1
0,0.192224,0.416642,0,1,0,-1
0,0.194958,0.433903,0,1,0,-1
0,0.199481,0.450783,0,1,0,-1
0,0.205743,0.467098,0,1,0,-1
0,0.213677,0.482669,0,1,0,-1
0,0.223195,0.497326,0,1,0,-1
0,0.234193,0.510907,0,1,0,-1
0,0.246551,0.523264,0,1,0,-1
0,0.260132,0.534262,0,1,0,-1
0,0.274788,0.54378,0,1,0,-1
0,0.290359,0.551714,0,1,0,-1
0,0.306674,0.557977,0,1,0,-1
0,0.323555,0.5625,0,1,0,-1
0,0.340816,0.565234,0,1,0,-1
0,0.358267,0.566148,0,1,0,-1
0,0.375719,0.565234,0,1,0,-1
0,0.39298,0.5625,0,1,0,-1
0,0.40986,0.557977,0,1,0,-1
0,0.426175,0.551714,0,1,0,-1
0,0.441747,0.54378,0,1,0,-1
0,0.456403,0.534262,0,1,0,-1
0,0.469984,0.523264,0,1,0,-1
0,0.482342,0.510907,0,1,0,-1
0,0.49334,0.497326,0,1,0,-1
0,0.502858,0.482669,0,1,0,-1
0,0.510791,0.467098,0,1,0,-1
0,0.517054,0.450783,0,1,0,-1
0,0.521577,0.433903,0,1,0,-1
0,0.524311,0.416642,0,1,0,-1
0,0.525226,0.39919,0,1,0,-1
0,0.847548,0.091384,0,1,0,-1
0,0.833699,0.101655,0,1,0,-1
0,0.820923,0.113234,0,1,0,-1
0,0.809345,0.126009,0,1,0,-1
0,0.799074,0.139858,0,1,0,-1
0,0.790209,0.154647,0,1,0,-1
0,0.782838,0.170233,0,1,0,-1
0,0.777029,0.186467,0,1,0,-1
0,0.77284,0.203192,0,1,0,-1
0,0.77031,0.220248,0,1,0,-1
0,0.769464,0.237469,0,1,0,-1
0,0.77031,0.25469,0,1,0,-1
0,0.77284,0.271745,0,1,0,-1
0,0.777029,0.28847,0,1,0,-1
0,0.782838,0.304704,0,1,0,-1
0,0.790209,0.320291,0,1,0,-1
0,0.799074,0.33508,0,1,0,-1
0,0.809345,0.348929,0,1,0,-1
0,0.820923,0.361704,0,1,0,-1
0,0.833699,0.373283,0,1,0,-1
0,0.847548,0.383554,0,1,0,-1
0,0.241252,0.63247,0,1,0,-1
0,0.238633,0.614814,0,1,0,-1
0,0.234297,0.5975,0,1,0,-1
0,0.228283,0.580695,0,1,0,-1
0,0.220652,0.56456,0,1,0,-1
0,0.211476,0.54925,0,1,0,-1
0,0.200843,0.534914,0,1,0,-1
0,0.188857,0.521689,0,1,0,-1
0,0.175632,0.509702,0,1,0,-1
0,0.161296,0.49907,0,1,0,-1
0,0.145986,0.489894,0,1,0,-1
0,0.129851,0.482262,0,1,0,-1
0,0.113046,0.476249,0,1,0,-1
0,0.095732,0.471912,0,1,0,-1
0,0.078076,0.469293,0,1,0,-1
0,0.060249,0.468417,0,1,0,-1
0,0.042421,0.469293,0,1,0,-1
0,0.024766,0.471912,0,1,0,-1
0,0.007452,0.476249,0,1,0,-1
0,0.007452,0.824345,0,1,0,-1
0,0.024766,0.828682,0,1,0,-1
0,0.042421,0.831301,0,1,0,-1
0,0.060249,0.832177,0,1,0,-1
0,0.078076,0.831301,0,1,0,-1
0,0.095732,0.828682,0,1,0,-1
0,0.113046,0.824345,0,1,0,-1
0,0.129851,0.818332,0,1,0,-1
0,0.145986,0.8107,0,1,0,-1
0,0.161296,0.801524,0,1,0,-1
0,0.175632,0.790892,0,1,0,-1
0,0.188857,0.778905,0,1,0,-1
0,0.200843,0.76568,0,1,0,-1
0,0.211476,0.751344,0,1,0,-1
0,0.220652,0.736034,0,1,0,-1
0,0.228283,0.719899,0,1,0,-1
0,0.234297,0.703094,0,1,0,-1
0,0.238633,0.68578,0,1,0,-1
0,0.241252,0.668124,0,1,0,-1
0,0.242128,0.650297,0,1,0,-1
0,0.771442,0.048085,0,1,0,-1
0,0.768672,0.029409,0,1,0,-1
0,0.764084,0.011095,0,1,0,-1
0,0.39588,0.011095,0,1,0,-1
0,0.391292,0.029409,0,1,0,-1
0,0.388522,0.048085,0,1,0,-1
0,0.387595,0.066942,0,1,0,-1
0,0.388522,0.085799,0,1,0,-1
0,0.391292,0.104475,0,1,0,-1
0,0.39588,0.122789,0,1,0,-1
0,0.40224,0.140565,0,1,0,-1
0,0.410312,0.157632,0,1,0,-1
0,0.420018,0.173826,0,1,0,-1
0,0.431265,0.18899,0,1,0,-1
0,0.443944,0.20298,0,1,0,-1
0,0.457933,0.215659,0,1,0,-1
0,0.473098,0.226905,0,1,0,-1
0,0.489292,0.236612,0,1,0,-1
0,0.506359,0.244684,0,1,0,-1
0,0.524135,0.251044,0,1,0,-1
0,0.542449,0.255632,0,1,0,-1
0,0.561125,0.258402,0,1,0,-1
0,0.579982,0.259328,0,1,0,-1
0,0.598839,0.258402,0,1,0,-1
0,0.617515,0.255632,0,1,0,-1
0,0.635829,0.251044,0,1,0,-1
0,0.653605,0.244684,0,1,0,-1
0,0.670672,0.236612,0,1,0,-1
0,0.686866,0.226905,0,1,0,-1
0,0.702031,0.215659,0,1,0,-1
0,0.71602,0.20298,0,1,0,-1
0,0.728699,0.18899,0,1,0,-1
0,0.739945,0.173826,0,1,0,-1
0,0.749652,0.157632,0,1,0,-1
0,0.757724,0.140565,0,1,0,-1
0,0.764084,0.122789,0,1,0,-1
0,0.768672,0.104475,0,1,0,-1
0,0.771442,0.085799,0,1,0,-1
0,0.772368,0.066942,0,1,0,-1
0,0.990646,0.482262,0,1,0,-1
0,0.974511,0.489894,0,1,0,-1
0,0.959202,0.49907,0,1,0,-1
0,0.944866,0.509702,0,1,0,-1
0,0.93164,0.521689,0,1,0,-1
0,0.919654,0.534914,0,1,0,-1
0,0.909021,0.54925,0,1,0,-1
0,0.899845,0.56456,0,1,0,-1
0,0.892214,0.580695,0,1,0,-1
0,0.886201,0.5975,0,1,0,-1
0,0.881864,0.614814,0,1,0,-1
0,0.879245,0.63247,0,1,0,-1
0,0.878369,0.650297,0,1,0,-1
0,0.879245,0.668124,0,1,0,-1
0,0.881864,0.68578,0,1,0,-1
0,0.886201,0.703094,0,1,0,-1
0,0.892214,0.719899,0,1,0,-1
0,0.899845,0.736034,0,1,0,-1
0,0.909021,0.751344,0,1,0,-1
0,0.919654,0.76568,0,1,0,-1
0,0.93164,0.778905,0,1,0,-1
0,0.944866,0.790892,0,1,0,-1
0,0.959202,0.801524,0,1,0,-1
0,0.974511,0.8107,0,1,0,-1
0,0.990646,0.818332,0,1,0,-1
0,0.947478,0.867615,0,1,0,-1
0,0.939155,0.853198,0,1,0,-1
0,0.928015,0.840826,0,1,0,-1
0,0.914547,0.831041,0,1,0,-1
0,0.899339,0.82427,0,1,0,-1
0,0.883055,0.820809,0,1,0,-1
0,0.866408,0.820809,0,1,0,-1
0,0.850124,0.82427,0,1,0,-1
0,0.801985,0.867615,0,1,0,-1
0,0.99616,0.069339,0,1,0,-1
0,0.979435,0.06515,0,1,0,-1
0,0.96238,0.06262,0,1,0,-1
0,0.945159,0.061774,0,1,0,-1
0,0.927938,0.06262,0,1,0,-1
0,0.910882,0.06515,0,1,0,-1
0,0.894157,0.069339,0,1,0,-1
0,0.877923,0.075148,0,1,0,-1
0,0.862337,0.08252,0,1,0,-1
0,0.862337,0.392418,0,1,0,-1
0,0.877923,0.39979,0,1,0,-1
0,0.894157,0.405599,0,1,0,-1
0,0.910882,0.409788,0,1,0,-1
0,0.927938,0.412318,0,1,0,-1
0,0.945159,0.413164,0,1,0,-1
0,0.96238,0.412318,0,1,0,-1
0,0.979435,0.409788,0,1,0,-1
0,0.99616,0.405599,0,1,0,-1
0,0.757724,0.993319,0,1,0,-1
0,0.749652,0.976251,0,1,0,-1
0,0.739945,0.960058,0,1,0,-1
0,0.728699,0.944893,0,1,0,-1
0,0.71602,0.930904,0,1,0,-1
0,0.702031,0.918225,0,1,0,-1
0,0.686866,0.906978,0,1,0,-1
0,0.670672,0.897272,0,1,0,-1
0,0.653605,0.8892,0,1,0,-1
0,0.635829,0.882839,0,1,0,-1
0,0.617515,0.878252,0,1,0,-1
0,0.598839,0.875482,0,1,0,-1
0,0.579982,0.874555,0,1,0,-1
0,0.561125,0.875482,0,1,0,-1
0,0.542449,0.878252,0,1,0,-1
0,0.524135,0.882839,0,1,0,-1
0,0.506359,0.8892,0,1,0,-1
0,0.489292,0.897272,0,1,0,-1
0,0.473098,0.906978,0,1,0,-1
0,0.457933,0.918225,0,1,0,-1
0,0.443944,0.930904,0,1,0,-1
0,0.431265,0.944893,0,1,0,-1
0,0.420018,0.960058,0,1,0,-1
0,0.410312,0.976251,0,1,0,-1
0,0.40224,0.993319,0,1,0,-1
0,0.796841,0.883448,0,1,0,-1
0,0.795101,0.900004,0,1,0,-1
0,0.796841,0.91656,0,1,0,-1
0,0.801985,0.932393,0,1,0,-1
0,0.810309,0.94681,0,1,0,-1
0,0.821448,0.959181,0,1,0,-1
0,0.834916,0.968966,0,1,0,-1
0,0.338776,0.864547,0,1,0,-1
0,0.355172,0.867283,0,1,0,-1
0,0.371796,0.867283,0,1,0,-1
0,0.388193,0.864547,0,1,0,-1
0,0.313262,0.983261,0,1,0,-1
0,0.309989,0.966807,0,1,0,-1
0,0.304597,0.950922,0,1,0,-1
0,0.297177,0.935877,0,1,0,-1
0,0.287857,0.921929,0,1,0,-1
0,0.276796,0.909316,0,1,0,-1
0,0.264184,0.898255,0,1,0,-1
0,0.250236,0.888935,0,1,0,-1
0,0.23519,0.881516,0,1,0,-1
0,0.219305,0.876124,0,1,0,-1
0,0.202852,0.872851,0,1,0,-1
0,0.186113,0.871754,0,1,0,-1
0,0.169373,0.872851,0,1,0,-1
0,0.15292,0.876124,0,1,0,-1
0,0.137035,0.881516,0,1,0,-1
0,0.12199,0.888935,0,1,0,-1
0,0.108041,0.898255,0,1,0,-1
0,0.095429,0.909316,0,1,0,-1
0,0.084368,0.921929,0,1,0,-1
0,0.075048,0.935877,0,1,0,-1
0,0.067629,0.950922,0,1,0,-1
0,0.062236,0.966807,0,1,0,-1
0,0.058964,0.983261,0,1,0,-1
0,0.057866,1,0,1,0,-1
0,0.314359,1,0,1,0,-1
0,0.952623,0.883448,0,1,0,-1
0,0.850124,0.975738,0,1,0,-1
0,0.866408,0.979199,0,1,0,-1
0,0.883055,0.979199,0,1,0,-1
0,0.899339,0.975738,0,1,0,-1
0,0.914547,0.968966,0,1,0,-1
0,0.928015,0.959181,0,1,0,-1
0,0.939155,0.94681,0,1,0,-1
0,0.947478,0.932393,0,1,0,-1
0,0.952623,0.91656,0,1,0,-1
0,0.954363,0.900004,0,1,0,-1
`),!1),b(x.ParsePatFile(`
*BUBBLES-02,BUBBLES-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
0,0.01243,0.139689,0,1,0,-1
0,0.004689,0.124495,0,1,0,-1
0,0.004689,0.188567,0,1,0,-1
0,0.01243,0.173373,0,1,0,-1
0,0.015098,0.156531,0,1,0,-1
0,0.039159,0.550628,0,1,0,-1
0,0.03308,0.534599,0,1,0,-1
0,0.023341,0.52049,0,1,0,-1
0,0.010509,0.509122,0,1,0,-1
0,0.010509,0.626172,0,1,0,-1
0,0.023341,0.614804,0,1,0,-1
0,0.03308,0.600695,0,1,0,-1
0,0.039159,0.584666,0,1,0,-1
0,0.041226,0.567647,0,1,0,-1
0,0.012655,0.061217,0,1,0,-1
0,0.029343,0.064052,0,1,0,-1
0,0.046244,0.065001,0,1,0,-1
0,0.063146,0.064052,0,1,0,-1
0,0.079834,0.061217,0,1,0,-1
0,0.0961,0.05653,0,1,0,-1
0,0.11174,0.050052,0,1,0,-1
0,0.126555,0.041864,0,1,0,-1
0,0.140361,0.032069,0,1,0,-1
0,0.152983,0.020789,0,1,0,-1
0,0.164263,0.008167,0,1,0,-1
0,0.211752,0.623376,0,1,0,-1
0,0.203326,0.608782,0,1,0,-1
0,0.190416,0.597949,0,1,0,-1
0,0.17458,0.592185,0,1,0,-1
0,0.157727,0.592185,0,1,0,-1
0,0.141891,0.597949,0,1,0,-1
0,0.128981,0.608782,0,1,0,-1
0,0.120555,0.623376,0,1,0,-1
0,0.117628,0.639973,0,1,0,-1
0,0.120555,0.65657,0,1,0,-1
0,0.128981,0.671164,0,1,0,-1
0,0.141891,0.681997,0,1,0,-1
0,0.157727,0.687761,0,1,0,-1
0,0.17458,0.687761,0,1,0,-1
0,0.190416,0.681997,0,1,0,-1
0,0.203326,0.671164,0,1,0,-1
0,0.211752,0.65657,0,1,0,-1
0,0.214678,0.639973,0,1,0,-1
0,0.063146,0.764048,0,1,0,-1
0,0.046244,0.763099,0,1,0,-1
0,0.029343,0.764048,0,1,0,-1
0,0.3178,0.248563,0,1,0,-1
0,0.314583,0.232388,0,1,0,-1
0,0.309282,0.216771,0,1,0,-1
0,0.301988,0.20198,0,1,0,-1
0,0.292825,0.188268,0,1,0,-1
0,0.281951,0.175868,0,1,0,-1
0,0.269552,0.164994,0,1,0,-1
0,0.255839,0.155832,0,1,0,-1
0,0.241048,0.148538,0,1,0,-1
0,0.225431,0.143237,0,1,0,-1
0,0.209256,0.140019,0,1,0,-1
0,0.1928,0.138941,0,1,0,-1
0,0.176343,0.140019,0,1,0,-1
0,0.160168,0.143237,0,1,0,-1
0,0.144551,0.148538,0,1,0,-1
0,0.12976,0.155832,0,1,0,-1
0,0.116047,0.164994,0,1,0,-1
0,0.103648,0.175868,0,1,0,-1
0,0.092774,0.188268,0,1,0,-1
0,0.083612,0.20198,0,1,0,-1
0,0.076318,0.216771,0,1,0,-1
0,0.071016,0.232388,0,1,0,-1
0,0.067799,0.248563,0,1,0,-1
0,0.06672,0.26502,0,1,0,-1
0,0.067799,0.281477,0,1,0,-1
0,0.071016,0.297652,0,1,0,-1
0,0.076318,0.313268,0,1,0,-1
0,0.083612,0.32806,0,1,0,-1
0,0.092774,0.341772,0,1,0,-1
0,0.103648,0.354171,0,1,0,-1
0,0.116047,0.365045,0,1,0,-1
0,0.12976,0.374208,0,1,0,-1
0,0.144551,0.381502,0,1,0,-1
0,0.160168,0.386803,0,1,0,-1
0,0.176343,0.390021,0,1,0,-1
0,0.1928,0.391099,0,1,0,-1
0,0.209256,0.390021,0,1,0,-1
0,0.225431,0.386803,0,1,0,-1
0,0.241048,0.381502,0,1,0,-1
0,0.255839,0.374208,0,1,0,-1
0,0.269552,0.365045,0,1,0,-1
0,0.281951,0.354171,0,1,0,-1
0,0.292825,0.341772,0,1,0,-1
0,0.301988,0.32806,0,1,0,-1
0,0.309282,0.313268,0,1,0,-1
0,0.314583,0.297652,0,1,0,-1
0,0.3178,0.281477,0,1,0,-1
0,0.318879,0.26502,0,1,0,-1
0,0.710254,0.515012,0,1,0,-1
0,0.707834,0.498698,0,1,0,-1
0,0.703826,0.482701,0,1,0,-1
0,0.69827,0.467173,0,1,0,-1
0,0.691219,0.452264,0,1,0,-1
0,0.682741,0.438119,0,1,0,-1
0,0.672916,0.424872,0,1,0,-1
0,0.661841,0.412653,0,1,0,-1
0,0.649621,0.401577,0,1,0,-1
0,0.636375,0.391753,0,1,0,-1
0,0.622229,0.383274,0,1,0,-1
0,0.607321,0.376223,0,1,0,-1
0,0.591793,0.370667,0,1,0,-1
0,0.575795,0.36666,0,1,0,-1
0,0.559482,0.36424,0,1,0,-1
0,0.54301,0.363431,0,1,0,-1
0,0.526538,0.36424,0,1,0,-1
0,0.510224,0.36666,0,1,0,-1
0,0.494226,0.370667,0,1,0,-1
0,0.478698,0.376223,0,1,0,-1
0,0.46379,0.383274,0,1,0,-1
0,0.449644,0.391753,0,1,0,-1
0,0.436398,0.401577,0,1,0,-1
0,0.424178,0.412653,0,1,0,-1
0,0.413103,0.424872,0,1,0,-1
0,0.403279,0.438119,0,1,0,-1
0,0.3948,0.452264,0,1,0,-1
0,0.387749,0.467173,0,1,0,-1
0,0.382193,0.482701,0,1,0,-1
0,0.378186,0.498698,0,1,0,-1
0,0.375766,0.515012,0,1,0,-1
0,0.374957,0.531484,0,1,0,-1
0,0.375766,0.547956,0,1,0,-1
0,0.378186,0.56427,0,1,0,-1
0,0.382193,0.580267,0,1,0,-1
0,0.387749,0.595795,0,1,0,-1
0,0.3948,0.610704,0,1,0,-1
0,0.403279,0.624849,0,1,0,-1
0,0.413103,0.638096,0,1,0,-1
0,0.424178,0.650315,0,1,0,-1
0,0.436398,0.661391,0,1,0,-1
0,0.449644,0.671215,0,1,0,-1
0,0.46379,0.679694,0,1,0,-1
0,0.478698,0.686745,0,1,0,-1
0,0.494226,0.692301,0,1,0,-1
0,0.510224,0.696308,0,1,0,-1
0,0.526538,0.698728,0,1,0,-1
0,0.54301,0.699537,0,1,0,-1
0,0.559482,0.698728,0,1,0,-1
0,0.575795,0.696308,0,1,0,-1
0,0.591793,0.692301,0,1,0,-1
0,0.607321,0.686745,0,1,0,-1
0,0.622229,0.679694,0,1,0,-1
0,0.636375,0.671215,0,1,0,-1
0,0.649621,0.661391,0,1,0,-1
0,0.661841,0.650315,0,1,0,-1
0,0.672916,0.638096,0,1,0,-1
0,0.682741,0.624849,0,1,0,-1
0,0.691219,0.610704,0,1,0,-1
0,0.69827,0.595795,0,1,0,-1
0,0.703826,0.580267,0,1,0,-1
0,0.707834,0.56427,0,1,0,-1
0,0.710254,0.547956,0,1,0,-1
0,0.711063,0.531484,0,1,0,-1
0,0.353512,0.012986,0,1,0,-1
0,0.351649,0.029516,0,1,0,-1
0,0.351027,0.046139,0,1,0,-1
0,0.351649,0.062761,0,1,0,-1
0,0.353512,0.079291,0,1,0,-1
0,0.356604,0.095635,0,1,0,-1
0,0.360909,0.111703,0,1,0,-1
0,0.366403,0.127404,0,1,0,-1
0,0.373055,0.14265,0,1,0,-1
0,0.380828,0.157356,0,1,0,-1
0,0.389678,0.171441,0,1,0,-1
0,0.399556,0.184825,0,1,0,-1
0,0.410406,0.197433,0,1,0,-1
0,0.422168,0.209196,0,1,0,-1
0,0.434776,0.220046,0,1,0,-1
0,0.44816,0.229924,0,1,0,-1
0,0.462245,0.238774,0,1,0,-1
0,0.476951,0.246546,0,1,0,-1
0,0.492198,0.253198,0,1,0,-1
0,0.507899,0.258692,0,1,0,-1
0,0.523966,0.262997,0,1,0,-1
0,0.54031,0.26609,0,1,0,-1
0,0.55684,0.267952,0,1,0,-1
0,0.573463,0.268574,0,1,0,-1
0,0.590085,0.267952,0,1,0,-1
0,0.606615,0.26609,0,1,0,-1
0,0.622959,0.262997,0,1,0,-1
0,0.639027,0.258692,0,1,0,-1
0,0.654727,0.253198,0,1,0,-1
0,0.669974,0.246546,0,1,0,-1
0,0.68468,0.238774,0,1,0,-1
0,0.698765,0.229924,0,1,0,-1
0,0.712149,0.220046,0,1,0,-1
0,0.724757,0.209196,0,1,0,-1
0,0.736519,0.197433,0,1,0,-1
0,0.74737,0.184825,0,1,0,-1
0,0.757248,0.171441,0,1,0,-1
0,0.766098,0.157356,0,1,0,-1
0,0.77387,0.14265,0,1,0,-1
0,0.780522,0.127404,0,1,0,-1
0,0.928226,0.008167,0,1,0,-1
0,0.939506,0.020789,0,1,0,-1
0,0.952128,0.032069,0,1,0,-1
0,0.965934,0.041864,0,1,0,-1
0,0.980749,0.050052,0,1,0,-1
0,0.996388,0.05653,0,1,0,-1
0,0.992631,0.112437,0,1,0,-1
0,0.977438,0.104696,0,1,0,-1
0,0.960595,0.102028,0,1,0,-1
0,0.943753,0.104696,0,1,0,-1
0,0.928559,0.112437,0,1,0,-1
0,0.916502,0.124495,0,1,0,-1
0,0.90876,0.139689,0,1,0,-1
0,0.906093,0.156531,0,1,0,-1
0,0.90876,0.173373,0,1,0,-1
0,0.916502,0.188567,0,1,0,-1
0,0.928559,0.200625,0,1,0,-1
0,0.943753,0.208366,0,1,0,-1
0,0.960595,0.211034,0,1,0,-1
0,0.977438,0.208366,0,1,0,-1
0,0.992631,0.200625,0,1,0,-1
0,0.995329,0.501155,0,1,0,-1
0,0.978684,0.497052,0,1,0,-1
0,0.96154,0.497052,0,1,0,-1
0,0.944895,0.501155,0,1,0,-1
0,0.929715,0.509122,0,1,0,-1
0,0.916882,0.52049,0,1,0,-1
0,0.907144,0.534599,0,1,0,-1
0,0.901065,0.550628,0,1,0,-1
0,0.898998,0.567647,0,1,0,-1
0,0.901065,0.584666,0,1,0,-1
0,0.907144,0.600695,0,1,0,-1
0,0.916882,0.614804,0,1,0,-1
0,0.929715,0.626172,0,1,0,-1
0,0.944895,0.634139,0,1,0,-1
0,0.96154,0.638242,0,1,0,-1
0,0.978684,0.638242,0,1,0,-1
0,0.995329,0.634139,0,1,0,-1
0,0.795276,0.029516,0,1,0,-1
0,0.793414,0.012986,0,1,0,-1
0,0.786016,0.111703,0,1,0,-1
0,0.790321,0.095635,0,1,0,-1
0,0.793414,0.079291,0,1,0,-1
0,0.795276,0.062761,0,1,0,-1
0,0.795898,0.046139,0,1,0,-1
0,0.790321,0.996642,0,1,0,-1
0,0.786016,0.980575,0,1,0,-1
0,0.780522,0.964874,0,1,0,-1
0,0.77387,0.949628,0,1,0,-1
0,0.766098,0.934921,0,1,0,-1
0,0.757248,0.920836,0,1,0,-1
0,0.74737,0.907452,0,1,0,-1
0,0.736519,0.894844,0,1,0,-1
0,0.724757,0.883082,0,1,0,-1
0,0.712149,0.872232,0,1,0,-1
0,0.698765,0.862354,0,1,0,-1
0,0.68468,0.853504,0,1,0,-1
0,0.669974,0.845731,0,1,0,-1
0,0.654727,0.839079,0,1,0,-1
0,0.639027,0.833585,0,1,0,-1
0,0.622959,0.82928,0,1,0,-1
0,0.606615,0.826188,0,1,0,-1
0,0.590085,0.824325,0,1,0,-1
0,0.573463,0.823703,0,1,0,-1
0,0.55684,0.824325,0,1,0,-1
0,0.54031,0.826188,0,1,0,-1
0,0.523966,0.82928,0,1,0,-1
0,0.507899,0.833585,0,1,0,-1
0,0.492198,0.839079,0,1,0,-1
0,0.476951,0.845731,0,1,0,-1
0,0.462245,0.853504,0,1,0,-1
0,0.44816,0.862354,0,1,0,-1
0,0.434776,0.872232,0,1,0,-1
0,0.422168,0.883082,0,1,0,-1
0,0.410406,0.894844,0,1,0,-1
0,0.399556,0.907452,0,1,0,-1
0,0.389678,0.920836,0,1,0,-1
0,0.380828,0.934921,0,1,0,-1
0,0.373055,0.949628,0,1,0,-1
0,0.366403,0.964874,0,1,0,-1
0,0.360909,0.980575,0,1,0,-1
0,0.356604,0.996642,0,1,0,-1
0,0.196246,0.897149,0,1,0,-1
0,0.193411,0.880461,0,1,0,-1
0,0.188725,0.864194,0,1,0,-1
0,0.182247,0.848555,0,1,0,-1
0,0.174058,0.83374,0,1,0,-1
0,0.164263,0.819934,0,1,0,-1
0,0.152983,0.807312,0,1,0,-1
0,0.140361,0.796032,0,1,0,-1
0,0.126555,0.786236,0,1,0,-1
0,0.11174,0.778048,0,1,0,-1
0,0.0961,0.77157,0,1,0,-1
0,0.079834,0.766884,0,1,0,-1
0,0.012655,0.766884,0,1,0,-1
0,0.174058,0.994361,0,1,0,-1
0,0.182247,0.979545,0,1,0,-1
0,0.188725,0.963906,0,1,0,-1
0,0.193411,0.94764,0,1,0,-1
0,0.196246,0.930951,0,1,0,-1
0,0.197195,0.91405,0,1,0,-1
0,0.996388,0.77157,0,1,0,-1
0,0.980749,0.778048,0,1,0,-1
0,0.965934,0.786236,0,1,0,-1
0,0.952128,0.796032,0,1,0,-1
0,0.939506,0.807312,0,1,0,-1
0,0.928226,0.819934,0,1,0,-1
0,0.918431,0.83374,0,1,0,-1
0,0.910242,0.848555,0,1,0,-1
0,0.903764,0.864194,0,1,0,-1
0,0.899078,0.880461,0,1,0,-1
0,0.896243,0.897149,0,1,0,-1
0,0.895293,0.91405,0,1,0,-1
0,0.896243,0.930951,0,1,0,-1
0,0.899078,0.94764,0,1,0,-1
0,0.903764,0.963906,0,1,0,-1
0,0.910242,0.979545,0,1,0,-1
0,0.918431,0.994361,0,1,0,-1
`),!1),b(x.ParsePatFile(`
*BUBBLES-03,BUBBLES-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
0,0.401131,0.163621,0,1,0,-1
0,0.397069,0.144076,0,1,0,-1
0,0.390384,0.125265,0,1,0,-1
0,0.3812,0.107541,0,1,0,-1
0,0.369688,0.091232,0,1,0,-1
0,0.356062,0.076642,0,1,0,-1
0,0.340577,0.064044,0,1,0,-1
0,0.32352,0.053672,0,1,0,-1
0,0.30521,0.045718,0,1,0,-1
0,0.285988,0.040333,0,1,0,-1
0,0.266211,0.037614,0,1,0,-1
0,0.246248,0.037614,0,1,0,-1
0,0.226471,0.040333,0,1,0,-1
0,0.207249,0.045718,0,1,0,-1
0,0.188938,0.053672,0,1,0,-1
0,0.171882,0.064044,0,1,0,-1
0,0.156397,0.076642,0,1,0,-1
0,0.142771,0.091232,0,1,0,-1
0,0.131259,0.107541,0,1,0,-1
0,0.122075,0.125265,0,1,0,-1
0,0.115389,0.144076,0,1,0,-1
0,0.111328,0.163621,0,1,0,-1
0,0.109966,0.183537,0,1,0,-1
0,0.111328,0.203453,0,1,0,-1
0,0.115389,0.222999,0,1,0,-1
0,0.122075,0.241809,0,1,0,-1
0,0.131259,0.259533,0,1,0,-1
0,0.142771,0.275842,0,1,0,-1
0,0.156397,0.290432,0,1,0,-1
0,0.171882,0.30303,0,1,0,-1
0,0.188938,0.313403,0,1,0,-1
0,0.207249,0.321356,0,1,0,-1
0,0.226471,0.326742,0,1,0,-1
0,0.246248,0.32946,0,1,0,-1
0,0.266211,0.32946,0,1,0,-1
0,0.285988,0.326742,0,1,0,-1
0,0.30521,0.321356,0,1,0,-1
0,0.32352,0.313403,0,1,0,-1
0,0.340577,0.30303,0,1,0,-1
0,0.356062,0.290432,0,1,0,-1
0,0.369688,0.275842,0,1,0,-1
0,0.3812,0.259533,0,1,0,-1
0,0.390384,0.241809,0,1,0,-1
0,0.397069,0.222999,0,1,0,-1
0,0.401131,0.203453,0,1,0,-1
0,0.402493,0.183537,0,1,0,-1
0,0.717102,0.580347,0,1,0,-1
0,0.69634,0.588567,0,1,0,-1
0,0.676773,0.599325,0,1,0,-1
0,0.658707,0.61245,0,1,0,-1
0,0.64243,0.627736,0,1,0,-1
0,0.628196,0.644941,0,1,0,-1
0,0.616231,0.663795,0,1,0,-1
0,0.606724,0.684,0,1,0,-1
0,0.599823,0.705237,0,1,0,-1
0,0.595639,0.727171,0,1,0,-1
0,0.594237,0.749457,0,1,0,-1
0,0.595639,0.771743,0,1,0,-1
0,0.599823,0.793677,0,1,0,-1
0,0.606724,0.814914,0,1,0,-1
0,0.713243,0.02088,0,1,0,-1
0,0.688246,0.022108,0,1,0,-1
0,0.663491,0.02578,0,1,0,-1
0,0.639215,0.031861,0,1,0,-1
0,0.615651,0.040292,0,1,0,-1
0,0.593028,0.050992,0,1,0,-1
0,0.571562,0.063858,0,1,0,-1
0,0.551461,0.078766,0,1,0,-1
0,0.532918,0.095573,0,1,0,-1
0,0.516111,0.114116,0,1,0,-1
0,0.501203,0.134218,0,1,0,-1
0,0.488337,0.155683,0,1,0,-1
0,0.477637,0.178307,0,1,0,-1
0,0.469206,0.20187,0,1,0,-1
0,0.463125,0.226146,0,1,0,-1
0,0.459453,0.250902,0,1,0,-1
0,0.458225,0.275898,0,1,0,-1
0,0.459453,0.300894,0,1,0,-1
0,0.463125,0.325649,0,1,0,-1
0,0.469206,0.349926,0,1,0,-1
0,0.477637,0.373489,0,1,0,-1
0,0.488337,0.396113,0,1,0,-1
0,0.501203,0.417578,0,1,0,-1
0,0.516111,0.43768,0,1,0,-1
0,0.532918,0.456223,0,1,0,-1
0,0.551461,0.473029,0,1,0,-1
0,0.571562,0.487938,0,1,0,-1
0,0.593028,0.500804,0,1,0,-1
0,0.615651,0.511504,0,1,0,-1
0,0.639215,0.519935,0,1,0,-1
0,0.663491,0.526016,0,1,0,-1
0,0.688246,0.529688,0,1,0,-1
0,0.713243,0.530916,0,1,0,-1
0,0.563094,0.659436,0,1,0,-1
0,0.558843,0.630776,0,1,0,-1
0,0.551803,0.602671,0,1,0,-1
0,0.542042,0.575392,0,1,0,-1
0,0.529655,0.5492,0,1,0,-1
0,0.514759,0.524349,0,1,0,-1
0,0.4975,0.501077,0,1,0,-1
0,0.478043,0.479609,0,1,0,-1
0,0.456575,0.460152,0,1,0,-1
0,0.433303,0.442893,0,1,0,-1
0,0.408452,0.427998,0,1,0,-1
0,0.382261,0.41561,0,1,0,-1
0,0.354981,0.405849,0,1,0,-1
0,0.326876,0.398809,0,1,0,-1
0,0.298216,0.394558,0,1,0,-1
0,0.269278,0.393136,0,1,0,-1
0,0.240339,0.394558,0,1,0,-1
0,0.21168,0.398809,0,1,0,-1
0,0.183575,0.405849,0,1,0,-1
0,0.156295,0.41561,0,1,0,-1
0,0.130104,0.427998,0,1,0,-1
0,0.105252,0.442893,0,1,0,-1
0,0.081981,0.460152,0,1,0,-1
0,0.060513,0.479609,0,1,0,-1
0,0.041056,0.501077,0,1,0,-1
0,0.023796,0.524349,0,1,0,-1
0,0.008901,0.5492,0,1,0,-1
0,0.542042,0.801357,0,1,0,-1
0,0.551803,0.774077,0,1,0,-1
0,0.558843,0.745972,0,1,0,-1
0,0.563094,0.717313,0,1,0,-1
0,0.564516,0.688374,0,1,0,-1
0,0.996513,0.575392,0,1,0,-1
0,0.986753,0.602671,0,1,0,-1
0,0.979713,0.630776,0,1,0,-1
0,0.975461,0.659436,0,1,0,-1
0,0.97404,0.688374,0,1,0,-1
0,0.975461,0.717313,0,1,0,-1
0,0.979713,0.745972,0,1,0,-1
0,0.986753,0.774077,0,1,0,-1
0,0.996513,0.801357,0,1,0,-1
0,0.94846,0.727171,0,1,0,-1
0,0.944275,0.705237,0,1,0,-1
0,0.937375,0.684,0,1,0,-1
0,0.927868,0.663795,0,1,0,-1
0,0.915903,0.644941,0,1,0,-1
0,0.901669,0.627736,0,1,0,-1
0,0.885391,0.61245,0,1,0,-1
0,0.867326,0.599325,0,1,0,-1
0,0.847758,0.588567,0,1,0,-1
0,0.826996,0.580347,0,1,0,-1
0,0.805368,0.574794,0,1,0,-1
0,0.783214,0.571995,0,1,0,-1
0,0.760884,0.571995,0,1,0,-1
0,0.738731,0.574794,0,1,0,-1
0,0.616231,0.835119,0,1,0,-1
0,0.628196,0.853972,0,1,0,-1
0,0.64243,0.871178,0,1,0,-1
0,0.658707,0.886464,0,1,0,-1
0,0.676773,0.899589,0,1,0,-1
0,0.69634,0.910346,0,1,0,-1
0,0.717102,0.918566,0,1,0,-1
0,0.738731,0.92412,0,1,0,-1
0,0.760884,0.926918,0,1,0,-1
0,0.783214,0.926918,0,1,0,-1
0,0.805368,0.92412,0,1,0,-1
0,0.826996,0.918566,0,1,0,-1
0,0.847758,0.910346,0,1,0,-1
0,0.867326,0.899589,0,1,0,-1
0,0.885391,0.886464,0,1,0,-1
0,0.901669,0.871178,0,1,0,-1
0,0.915903,0.853972,0,1,0,-1
0,0.927868,0.835119,0,1,0,-1
0,0.937375,0.814914,0,1,0,-1
0,0.944275,0.793677,0,1,0,-1
0,0.94846,0.771743,0,1,0,-1
0,0.949862,0.749457,0,1,0,-1
0,0.967032,0.250902,0,1,0,-1
0,0.96336,0.226146,0,1,0,-1
0,0.957279,0.20187,0,1,0,-1
0,0.948848,0.178307,0,1,0,-1
0,0.938148,0.155683,0,1,0,-1
0,0.925282,0.134218,0,1,0,-1
0,0.910374,0.114116,0,1,0,-1
0,0.893567,0.095573,0,1,0,-1
0,0.875024,0.078766,0,1,0,-1
0,0.854923,0.063858,0,1,0,-1
0,0.833457,0.050992,0,1,0,-1
0,0.810834,0.040292,0,1,0,-1
0,0.78727,0.031861,0,1,0,-1
0,0.762994,0.02578,0,1,0,-1
0,0.738239,0.022108,0,1,0,-1
0,0.738239,0.529688,0,1,0,-1
0,0.762994,0.526016,0,1,0,-1
0,0.78727,0.519935,0,1,0,-1
0,0.810834,0.511504,0,1,0,-1
0,0.833457,0.500804,0,1,0,-1
0,0.854923,0.487938,0,1,0,-1
0,0.875024,0.473029,0,1,0,-1
0,0.893567,0.456223,0,1,0,-1
0,0.910374,0.43768,0,1,0,-1
0,0.925282,0.417578,0,1,0,-1
0,0.938148,0.396113,0,1,0,-1
0,0.948848,0.373489,0,1,0,-1
0,0.957279,0.349926,0,1,0,-1
0,0.96336,0.325649,0,1,0,-1
0,0.967032,0.300894,0,1,0,-1
0,0.96826,0.275898,0,1,0,-1
0,0.4975,0.875671,0,1,0,-1
0,0.514759,0.8524,0,1,0,-1
0,0.529655,0.827549,0,1,0,-1
0,0.008901,0.827549,0,1,0,-1
0,0.023796,0.8524,0,1,0,-1
0,0.041056,0.875671,0,1,0,-1
0,0.060513,0.897139,0,1,0,-1
0,0.081981,0.916597,0,1,0,-1
0,0.105252,0.933856,0,1,0,-1
0,0.130104,0.948751,0,1,0,-1
0,0.156295,0.961139,0,1,0,-1
0,0.183575,0.9709,0,1,0,-1
0,0.21168,0.97794,0,1,0,-1
0,0.240339,0.982191,0,1,0,-1
0,0.269278,0.983612,0,1,0,-1
0,0.298216,0.982191,0,1,0,-1
0,0.326876,0.97794,0,1,0,-1
0,0.354981,0.9709,0,1,0,-1
0,0.382261,0.961139,0,1,0,-1
0,0.408452,0.948751,0,1,0,-1
0,0.433303,0.933856,0,1,0,-1
0,0.456575,0.916597,0,1,0,-1
0,0.478043,0.897139,0,1,0,-1
`),!1),b(x.ParsePatFile(`
*CELTIC-01,CELTIC PATTERN 01
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
135,0.36,0.42222222,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.42222222,0.39111111,0.70710678,0.70710678,0.25848681,-1.15572675
315,0.39111111,0.57777778,0.70710678,0.70710678,0.08799551,-1.32621805
315,0.30166667,0.63611111,0.70710678,0.70710678,0.25848681,-1.15572675
225,0.76055556,0.42611111,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.86555556,0.5,0.70710678,0.70710678,0.28048569,-1.13372787
225,0.85388889,0.33277778,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.99,0.5,0.70710678,0.70710678,0.3684812,-1.04573236
225,0.76055556,0.72944444,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.85388889,0.63611111,0.70710678,0.70710678,0.08799551,-1.32621805
90,0.99,0.90200449,0,1,0.08799551,-0.91200449
0,0.90200449,0.88000561,0,1,0.08799551,-0.91200449
0,0.83978227,0.90200449,0,1,0.15021773,-0.84978227
0,0.80333333,0.99,0,1,0.18666667,-0.81333333
90,0.90200449,0.83978227,0,1,0.04022334,-0.95977666
90,0.99,0.80333333,0,1,0.07667228,-0.92332772
180,0.09799551,0.99,0,1,0.08799551,-0.91200449
90,0.11999439,0.90200449,0,1,0.08799551,-0.91200449
90,0.09799551,0.83978227,0,1,0.15021773,-0.84978227
90,0.01,0.80333333,0,1,0.18666667,-0.81333333
180,0.16021773,0.90200449,0,1,0.04022334,-0.95977666
180,0.19666667,0.99,0,1,0.07667228,-0.92332772
270,0.01,0.09799551,0,1,0.08799551,-0.91200449
180,0.09799551,0.11999439,0,1,0.08799551,-0.91200449
180,0.16021773,0.09799551,0,1,0.15021773,-0.84978227
180,0.19666667,0.01,0,1,0.18666667,-0.81333333
270,0.09799551,0.16021773,0,1,0.04022334,-0.95977666
270,0.01,0.19666667,0,1,0.07667228,-0.92332772
45,0.70222222,0.51555556,0.70710678,0.70710678,0.40697924,-1.00723433
45,0.51555556,0.29777778,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.42611111,0.23944444,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.19666667,0.01,0.70710678,0.70710678,0.19249018,-1.22172338
45,0.64,0.57777778,0.70710678,0.70710678,0.3705303,-1.04368326
45,0.42222222,0.39111111,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.36388889,0.30166667,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.16021773,0.09799551,0.70710678,0.70710678,0.15604125,-1.25817232
45,0.66722222,0.85388889,0.70710678,0.70710678,0.19249018,-1.22172338
45,0.42222222,0.64,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.14611111,0.36388889,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.39111111,0.57777778,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.01,0.19666667,0.70710678,0.70710678,0.40697924,-1.00723433
45,0.72944444,0.79166667,0.70710678,0.70710678,0.15604125,-1.25817232
45,0.23944444,0.27055556,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.51555556,0.54666667,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.45333333,0.51555556,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.09799551,0.16021773,0.70710678,0.70710678,0.3705303,-1.04368326
0,0.90200449,0.01,0,1,0.08799551,-0.91200449
135,0.70222222,0.51555556,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.42611111,0.79166667,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.48444444,0.70222222,0.70710678,0.70710678,0.40697924,-1.00723433
135,0.76055556,0.42611111,0.70710678,0.70710678,0.25848681,-1.15572675
135,0.99,0.19666667,0.70710678,0.70710678,0.19249018,-1.22172338
135,0.33277778,0.69833333,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.42222222,0.64,0.70710678,0.70710678,0.3705303,-1.04368326
135,0.60888889,0.42222222,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.69833333,0.36388889,0.70710678,0.70710678,0.25848681,-1.15572675
135,0.90200449,0.16021773,0.70710678,0.70710678,0.15604125,-1.25817232
135,0.63611111,0.14611111,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.14611111,0.66722222,0.70710678,0.70710678,0.19249018,-1.22172338
135,0.80333333,0.01,0.70710678,0.70710678,0.40697924,-1.00723433
135,0.72944444,0.23944444,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.20833333,0.72944444,0.70710678,0.70710678,0.15604125,-1.25817232
135,0.83978227,0.09799551,0.70710678,0.70710678,0.3705303,-1.04368326
270,0.88000561,0.09799551,0,1,0.08799551,-0.91200449
270,0.90200449,0.16021773,0,1,0.15021773,-0.84978227
270,0.99,0.19666667,0,1,0.18666667,-0.81333333
0,0.83978227,0.09799551,0,1,0.04022334,-0.95977666
0,0.80333333,0.01,0,1,0.07667228,-0.92332772
135,0.99,0.5,0.70710678,0.70710678,0.19249018,-1.22172338
45,0.5,0.01,0.70710678,0.70710678,0.19249018,-1.22172338
315,0.27055556,0.20833333,0.70710678,0.70710678,0.08799551,-1.32621805
315,0.23944444,0.27055556,0.70710678,0.70710678,0.3684812,-1.04573236
315,0.01,0.5,0.70710678,0.70710678,0.19249018,-1.22172338
225,0.20833333,0.72944444,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.27055556,0.76055556,0.70710678,0.70710678,0.3684812,-1.04573236
225,0.5,0.99,0.70710678,0.70710678,0.19249018,-1.22172338
135,0.72944444,0.79166667,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.76055556,0.72944444,0.70710678,0.70710678,0.3684812,-1.04573236
135,0.86555556,0.5,0.70710678,0.70710678,0.10449467,-1.30971889
45,0.5,0.13444444,0.70710678,0.70710678,0.10449467,-1.30971889
315,0.36388889,0.30166667,0.70710678,0.70710678,0.08799551,-1.32621805
315,0.30166667,0.33277778,0.70710678,0.70710678,0.28048569,-1.13372787
315,0.13444444,0.5,0.70710678,0.70710678,0.10449467,-1.30971889
225,0.30166667,0.63611111,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.33277778,0.69833333,0.70710678,0.70710678,0.28048569,-1.13372787
225,0.5,0.86555556,0.70710678,0.70710678,0.10449467,-1.30971889
135,0.63611111,0.69833333,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.69833333,0.66722222,0.70710678,0.70710678,0.28048569,-1.13372787
`),!1),b(x.ParsePatFile(`
*CELTIC-02,CELTIC PATTERN 02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.438471,0.01545916,0,1,0.12305799,-0.87694201
270,0.98454084,0.438471,0,1,0.12305799,-0.87694201
270,0.01545916,0.68458699,0,1,0.12305799,-0.87694201
180,0.68458699,0.98454084,0,1,0.12305799,-0.87694201
90,0.98454084,0.4692355,0,1,0.51530534,-0.48469466
270,0.98454084,0.28464852,0,1,0.26918936,-0.73081064
180,0.438471,0.28464852,0,1,0.12305799,-0.87694201
180,0.5307645,0.31541301,0,1,0.36148285,-0.63851715
0,0.31541301,0.4692355,0,1,0.12305799,-0.87694201
0,0.16928165,0.438471,0,1,0.36148285,-0.63851715
270,0.83071835,0.68458699,0,1,0.12305799,-0.87694201
270,0.86148285,0.86148285,0,1,0.39224735,-0.60775265
270,0.5307645,0.98454084,0,1,0.12305799,-0.87694201
270,0.71535148,0.98454084,0,1,0.12305799,-0.87694201
90,0.68458699,0.71535148,0,1,0.26918936,-0.73081064
90,0.71535148,0.31541301,0,1,0.12305799,-0.87694201
90,0.68458699,0.16928165,0,1,0.36148285,-0.63851715
90,0.561529,0.71535148,0,1,0.26918936,-0.73081064
90,0.5307645,0.31541301,0,1,0.12305799,-0.87694201
90,0.561529,0.16928165,0,1,0.36148285,-0.63851715
90,0.28464852,0.561529,0,1,0.12305799,-0.87694201
90,0.28464852,0.01545916,0,1,0.12305799,-0.87694201
90,0.31541301,0.4692355,0,1,0.36148285,-0.63851715
90,0.31541301,0.01545916,0,1,0.26918936,-0.73081064
90,0.4692355,0.01545916,0,1,0.12305799,-0.87694201
90,0.4692355,0.561529,0,1,0.12305799,-0.87694201
90,0.438471,0.4692355,0,1,0.36148285,-0.63851715
90,0.438471,0.01545916,0,1,0.26918936,-0.73081064
180,0.68458699,0.71535148,0,1,0.12305799,-0.87694201
180,0.13851715,0.71535148,0,1,0.12305799,-0.87694201
180,0.28464852,0.68458699,0,1,0.26918936,-0.73081064
180,0.83071835,0.68458699,0,1,0.36148285,-0.63851715
180,0.13851715,0.5307645,0,1,0.12305799,-0.87694201
180,0.28464852,0.561529,0,1,0.26918936,-0.73081064
180,0.68458699,0.5307645,0,1,0.12305799,-0.87694201
180,0.83071835,0.561529,0,1,0.36148285,-0.63851715
180,0.98454084,0.28464852,0,1,0.12305799,-0.87694201
180,0.98454084,0.31541301,0,1,0.26918936,-0.73081064
180,0.98454084,0.4692355,0,1,0.12305799,-0.87694201
180,0.98454084,0.438471,0,1,0.26918936,-0.73081064
180,0.98454084,0.98454084,0,1,0.26918936,-0.73081064
0,0.4692355,0.01545916,0,1,0.51530534,-0.48469466
0,0.01545916,0.01545916,0,1,0.26918936,-0.73081064
270,0.01545916,0.5307645,0,1,0.51530534,-0.48469466
270,0.01545916,0.98454084,0,1,0.26918936,-0.73081064
180,0.5307645,0.98454084,0,1,0.51530534,-0.48469466
180,0.86148285,0.86148285,0,1,0.14613136,-0.85386864
90,0.86148285,0.13851715,0,1,0.14613136,-0.85386864
0,0.561529,0.16928165,0,1,0.12305799,-0.87694201
0,0.4692355,0.13851715,0,1,0.39224735,-0.60775265
0,0.13851715,0.13851715,0,1,0.14613136,-0.85386864
270,0.16928165,0.438471,0,1,0.12305799,-0.87694201
270,0.13851715,0.5307645,0,1,0.39224735,-0.60775265
270,0.13851715,0.86148285,0,1,0.14613136,-0.85386864
180,0.438471,0.83071835,0,1,0.12305799,-0.87694201
180,0.5307645,0.86148285,0,1,0.39224735,-0.60775265
`),!1),b(x.ParsePatFile(`
*CELTIC-03,CELTIC-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,6.35,13.97,0,25.4,5.08,-20.32
90,19.05,6.35,0,25.4,5.08,-20.32
0,6.35,6.35,0,25.4,12.7,-12.7
270,6.35,11.43,0,25.4,5.08,-20.32
90,3.81,3.81,0,25.4,7.62,-17.78
180,21.59,3.81,0,25.4,17.78,-7.62
270,21.59,11.43,0,25.4,7.62,-17.78
270,21.59,21.59,0,25.4,7.62,-17.78
0,3.81,21.59,0,25.4,17.78,-7.62
90,3.81,13.97,0,25.4,7.62,-17.78
270,19.05,19.05,0,25.4,5.08,-20.32
0,6.35,19.05,0,25.4,12.7,-12.7
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`),!1),b(x.ParsePatFile(`
*CELTIC-04,CELTIC-04
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
45,3.81,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
135,21.59,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
45,12.7,2.54,17.960512212,17.960512212,12.57235865,-23.348666028
315,3.81,11.43,17.960512212,17.960512212,12.57235865,-23.348666028
135,12.7,5.08,17.960512212,17.960512212,8.980256106,-26.940768318
225,19.05,11.43,17.960512212,17.960512212,8.980256106,-26.940768318
315,12.7,20.32,17.960512212,17.960512212,8.980256106,-26.940768318
45,6.35,13.97,17.960512212,17.960512212,8.980256106,-26.940768318
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`),!1),b(x.ParsePatFile(`
*CIRCLES-02,CIRCLES-02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
0,0.959092,0.471116,0,1,0,-1
0,0.956373,0.442347,0,1,0,-1
0,0.951852,0.413805,0,1,0,-1
0,0.945548,0.385603,0,1,0,-1
0,0.937486,0.357852,0,1,0,-1
0,0.927697,0.330663,0,1,0,-1
0,0.91622,0.304142,0,1,0,-1
0,0.903101,0.278393,0,1,0,-1
0,0.888391,0.25352,0,1,0,-1
0,0.872148,0.229619,0,1,0,-1
0,0.854436,0.206785,0,1,0,-1
0,0.835326,0.185108,0,1,0,-1
0,0.814892,0.164674,0,1,0,-1
0,0.793215,0.145564,0,1,0,-1
0,0.770381,0.127852,0,1,0,-1
0,0.74648,0.111609,0,1,0,-1
0,0.721607,0.096899,0,1,0,-1
0,0.695858,0.08378,0,1,0,-1
0,0.669337,0.072303,0,1,0,-1
0,0.642148,0.062514,0,1,0,-1
0,0.614397,0.054452,0,1,0,-1
0,0.586195,0.048148,0,1,0,-1
0,0.557653,0.043627,0,1,0,-1
0,0.528884,0.040908,0,1,0,-1
0,0.5,0.04,0,1,0,-1
0,0.471116,0.040908,0,1,0,-1
0,0.442347,0.043627,0,1,0,-1
0,0.413805,0.048148,0,1,0,-1
0,0.385603,0.054452,0,1,0,-1
0,0.357852,0.062514,0,1,0,-1
0,0.330663,0.072303,0,1,0,-1
0,0.304142,0.08378,0,1,0,-1
0,0.278393,0.096899,0,1,0,-1
0,0.25352,0.111609,0,1,0,-1
0,0.229619,0.127852,0,1,0,-1
0,0.206785,0.145564,0,1,0,-1
0,0.185108,0.164674,0,1,0,-1
0,0.164674,0.185108,0,1,0,-1
0,0.145564,0.206785,0,1,0,-1
0,0.127852,0.229619,0,1,0,-1
0,0.111609,0.25352,0,1,0,-1
0,0.096899,0.278393,0,1,0,-1
0,0.08378,0.304142,0,1,0,-1
0,0.072303,0.330663,0,1,0,-1
0,0.062514,0.357852,0,1,0,-1
0,0.054452,0.385603,0,1,0,-1
0,0.048148,0.413805,0,1,0,-1
0,0.043627,0.442347,0,1,0,-1
0,0.040908,0.471116,0,1,0,-1
0,0.04,0.5,0,1,0,-1
0,0.040908,0.528884,0,1,0,-1
0,0.043627,0.557653,0,1,0,-1
0,0.048148,0.586195,0,1,0,-1
0,0.054452,0.614397,0,1,0,-1
0,0.062514,0.642148,0,1,0,-1
0,0.072303,0.669337,0,1,0,-1
0,0.08378,0.695858,0,1,0,-1
0,0.096899,0.721607,0,1,0,-1
0,0.111609,0.74648,0,1,0,-1
0,0.127852,0.770381,0,1,0,-1
0,0.145564,0.793215,0,1,0,-1
0,0.164674,0.814892,0,1,0,-1
0,0.185108,0.835326,0,1,0,-1
0,0.206785,0.854436,0,1,0,-1
0,0.229619,0.872148,0,1,0,-1
0,0.25352,0.888391,0,1,0,-1
0,0.278393,0.903101,0,1,0,-1
0,0.304142,0.91622,0,1,0,-1
0,0.330663,0.927697,0,1,0,-1
0,0.357852,0.937486,0,1,0,-1
0,0.385603,0.945548,0,1,0,-1
0,0.413805,0.951852,0,1,0,-1
0,0.442347,0.956373,0,1,0,-1
0,0.471116,0.959092,0,1,0,-1
0,0.5,0.96,0,1,0,-1
0,0.528884,0.959092,0,1,0,-1
0,0.557653,0.956373,0,1,0,-1
0,0.586195,0.951852,0,1,0,-1
0,0.614397,0.945548,0,1,0,-1
0,0.642148,0.937486,0,1,0,-1
0,0.669337,0.927697,0,1,0,-1
0,0.695858,0.91622,0,1,0,-1
0,0.721607,0.903101,0,1,0,-1
0,0.74648,0.888391,0,1,0,-1
0,0.770381,0.872148,0,1,0,-1
0,0.793215,0.854436,0,1,0,-1
0,0.814892,0.835326,0,1,0,-1
0,0.835326,0.814892,0,1,0,-1
0,0.854436,0.793215,0,1,0,-1
0,0.872148,0.770381,0,1,0,-1
0,0.888391,0.74648,0,1,0,-1
0,0.903101,0.721607,0,1,0,-1
0,0.91622,0.695858,0,1,0,-1
0,0.927697,0.669337,0,1,0,-1
0,0.937486,0.642148,0,1,0,-1
0,0.945548,0.614397,0,1,0,-1
0,0.951852,0.586195,0,1,0,-1
0,0.956373,0.557653,0,1,0,-1
0,0.959092,0.528884,0,1,0,-1
0,0.96,0.5,0,1,0,-1
`),!1),b(x.ParsePatFile(`
*CIRCLES,CIRCLES
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
0,0.934583,0.431169,0,1,0,-1
0,0.918465,0.364033,0,1,0,-1
0,0.892043,0.300244,0,1,0,-1
0,0.855967,0.241374,0,1,0,-1
0,0.811127,0.188873,0,1,0,-1
0,0.758626,0.144033,0,1,0,-1
0,0.699756,0.107957,0,1,0,-1
0,0.635967,0.081535,0,1,0,-1
0,0.568831,0.065417,0,1,0,-1
0,0.5,0.06,0,1,0,-1
0,0.431169,0.065417,0,1,0,-1
0,0.364033,0.081535,0,1,0,-1
0,0.300244,0.107957,0,1,0,-1
0,0.241374,0.144033,0,1,0,-1
0,0.188873,0.188873,0,1,0,-1
0,0.144033,0.241374,0,1,0,-1
0,0.107957,0.300244,0,1,0,-1
0,0.081535,0.364033,0,1,0,-1
0,0.065417,0.431169,0,1,0,-1
0,0.06,0.5,0,1,0,-1
0,0.065417,0.568831,0,1,0,-1
0,0.081535,0.635967,0,1,0,-1
0,0.107957,0.699756,0,1,0,-1
0,0.144033,0.758626,0,1,0,-1
0,0.188873,0.811127,0,1,0,-1
0,0.241374,0.855967,0,1,0,-1
0,0.300244,0.892043,0,1,0,-1
0,0.364033,0.918465,0,1,0,-1
0,0.431169,0.934583,0,1,0,-1
0,0.5,0.94,0,1,0,-1
0,0.568831,0.934583,0,1,0,-1
0,0.635967,0.918465,0,1,0,-1
0,0.699756,0.892043,0,1,0,-1
0,0.758626,0.855967,0,1,0,-1
0,0.811127,0.811127,0,1,0,-1
0,0.855967,0.758626,0,1,0,-1
0,0.892043,0.699756,0,1,0,-1
0,0.918465,0.635967,0,1,0,-1
0,0.934583,0.568831,0,1,0,-1
0,0.94,0.5,0,1,0,-1
`),!1),b(x.ParsePatFile(`
*CLAY,CLAY
0, 0,0, 0,.1875
0, 0,.03125, 0,.1875
0, 0,.0625, 0,.1875
0, 0,.125, 0,.1875, .1875,-.125
`),!1),b(x.ParsePatFile(`
*CORK,CORK
0, 0,0, 0,.125
135, .0625,-.0625, 0,.35355339, .1767767,-.1767767
135, .09375,-.0625, 0,.35355339, .1767767,-.1767767
135, .125,-.0625, 0,.35355339, .1767767,-.1767767
`),!1),b(x.ParsePatFile(`
*CROSS,CROSS
0, 0,0, .25,.25, .125,-.375
90, .0625,-.0625, .25,.25, .125,-.375
`),!1),b(x.ParsePatFile(`
*DASH,DASH
0, 0,0, .125,.125, .125,-.125
`),!1),b(x.ParsePatFile(`
*DOLMIT,DOLMIT
0, 0,0, 0,.25
45, 0,0, 0,.70710678, .35355339,-.70710768
`),!1),b(x.ParsePatFile(`
*DOTS,DOTS
0, 0,0, .03125,.0625, 0,-.0625
`),!1),b(x.ParsePatFile(`
*EARTH,EARTH
0, 0,0, .25,.25, .25,-.25
0, 0,.09375, .25,.25, .25,-.25
0, 0,.1875, .25,.25, .25,-.25
90, .03125,.21875, .25,.25, .25,-.25
90, .125,.21875, .25,.25, .25,-.25
90, .21875,.21875, .25,.25, .25,-.25
`),!1),b(x.ParsePatFile(`
*ESCHER,ESCHER
60, 0,0, -.6,1.03923048, 1.1,-.1
180, 0,0, -.6,1.03923048, 1.1,-.1
300, 0,0, .6,1.03923048, 1.1,-.1
60, .1,0, -.6,1.03923048, .2,-1
300, .1,0, .6,1.03923048, .2,-1
60, -.05,.08660254, -.6,1.03923048, .2,-1
180, -.05,.08660254, -.6,1.03923048, .2,-1
300, -.05,-.08660254, .6,1.03923048, .2,-1
180, -.05,-.08660254, -.6,1.03923048, .2,-1
60, -.4,0, -.6,1.03923048, .2,-1
300, -.4,0, .6,1.03923048, .2,-1
60, .2,-.34641016, -.6,1.03923048, .2,-1
180, .2,-.34641016, -.6,1.03923048, .2,-1
300, .2,.34641016, .6,1.03923048, .2,-1
180, .2,.34641016, -.6,1.03923048, .2,-1
0, .2,.17320508, -.6,1.03923048, .7,-.5
0, .2,-.17320508, -.6,1.03923048, .7,-.5
120, .05,.25980762, .6,1.03923048, .7,-.5
120, -.25,.08660254, .6,1.03923048, .7,-.5
240, -.25,-.08660254, .6,1.03923048, .7,-.5
240, .05,-.25980762, .6,1.03923048, .7,-.5
`),!1),b(x.ParsePatFile(`
*EXPLOSION,EXPLOSION
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
270,0.45,0.11,0,1,0.11,-0.89
143.130102,0.49,0.08,3.6,0.2,0.05,-4.95
270,0.49,0.17,0,1,0.09,-0.91
112.380135,0.56,0,12.99988621,0.05439283,0.18384776,-18.20092855
75.256437,0.51,0.81,4.12279145,0.05089866,0.19646883,-19.45041388
287.525568,0.45,1,3.16187936,0.05018856,0.19924859,-19.72561026
135,0.06,0.49,0.70710678,0.70710678,0.08485281,-1.32936075
26.565051,0,0.46,1.34164079,0.4472136,0.06708204,-2.16898594
353.884496,0.72,0.49,19.10494017,0.03551104,0.28160256,-27.87865312
192.094757,1,0.55,9.2192799,0.06984303,0.28635642,-14.03146464
3.691386,0.69,0.38,15.03326191,0.03219114,0.31064449,-30.75380464
136.080924,0.96,0.12,36.06936773,0.02667853,0.3748333,-37.10849633
336.037511,0.87,0.16,7.61509624,0.10153462,0.09848858,-9.75036922
123.690068,0.97,0.01,1.38675049,0.2773501,0.18027756,-3.42527371
324.462322,0.62,0.26,3.6036768,0.11624764,0.43011626,-8.172209
117.645975,0.73,0.05,21.47086912,0.04218245,0.23706539,-23.46947379
326.309932,0.55,0.17,2.21880078,0.2773501,0.21633308,-3.3892182
106.38954,0.6,0,10.44015399,0.05643326,0.17720045,-17.5428447
153.434949,0.12,0.34,0.89442719,0.4472136,0.13416408,-2.1019039
64.798876,0.04,0.17,16.55285979,0.05322463,0.18788294,-18.60041129
202.619865,0.16,0.22,7.61538462,0.07692308,0.13,-12.87
59.036243,0.1,0.12,2.22948161,0.17149859,0.11661904,-5.71433286
211.75948,0.31,0.25,9.43389425,0.04048882,0.24698178,-24.45119629
79.215702,0.27,0.04,16.27875339,0.04677803,0.21377558,-21.16378274
212.471192,0.38,0.11,3.60473545,0.0766965,0.13038405,-12.90802076
63.434949,0.35,0.05,0.89442719,0.4472136,0.06708204,-2.16898594
135,0.4,0,0.70710678,0.70710678,0.07071068,-1.34350288
74.357754,0.33,0.75,18.68150198,0.03851856,0.2596151,-25.70189487
333.434949,0.03,0.9,0.89442719,0.4472136,0.3354102,-1.90065778
110.556045,0.18,0.5,5.38389277,0.11704115,0.42720019,-8.11680356
330.945396,0,0.6,2.23395748,0.09712859,0.2059126,-10.08971754
99.462322,0.63,0.82,5.09636861,0.16439899,0.18248288,-5.90027965
222.70939,0.76,0.94,1.41308355,0.05652334,0.17691806,-17.51488795
74.744881,0.73,0.83,4.12217269,0.0877058,0.11401754,-11.28773671
208.61046,0.95,0.95,10.29532081,0.07980869,0.25059928,-12.2793648
62.744672,0.78,0.62,2.2359057,0.02693862,0.37121422,-36.75020816
212.275644,0.97,0.74,13.03832887,0.04449942,0.22472205,-22.247483
55.00798,0.9,0.64,3.60462045,0.08192319,0.12206556,-12.08449006
158.198591,1,0.6,3.15682075,0.18569534,0.1077033,-5.27746151
51.911227,0.59,0.51,29.20615599,0.02127178,0.47010637,-46.54053072
153.434949,0.65,0.48,0.89442719,0.4472136,0.06708204,-2.16898594
35.537678,0.58,0.43,4.99864847,0.11624764,0.08602325,-8.51630201
129.289407,0.76,0.21,7.80993275,0.07035975,0.28425341,-13.928417
322.30576,0.54,0.38,16.40118003,0.0359675,0.27802878,-27.52484877
77.905243,0.51,0.24,5.09854116,0.06984303,0.14317821,-14.17464285
282.994617,0.48,0.37,4.12242429,0.07495317,0.13341664,-13.20824742
62.525568,0.35,0.12,2.23578634,0.03548867,0.28178006,-27.89622555
267.137595,0.36,0.32,0.99875234,0.04993762,0.20024984,-19.82473455
12.994617,0.1,0.26,4.12242429,0.07495317,0.26683328,-13.07483078
211.75948,0.31,0.39,9.43389425,0.04048882,0.24698178,-24.45119629
318.366461,0.22,0.47,10.62982142,0.08304548,0.12041595,-11.92117863
189.462322,0.28,0.48,5.09636861,0.16439899,0.06082763,-6.0219349
297.299572,0.12,0.79,32.64964285,0.02866518,0.34885527,-34.53667181
132.273689,0.32,0.57,1.41261287,0.06726728,0.29732137,-14.56874737
282.994617,0.29,0.7,4.12242429,0.07495317,0.13341664,-13.20824742
140.194429,0.41,0.6,6.401844,0.12803688,0.15620499,-7.65404468
268.363423,0.42,0.95,0.99959209,0.02855977,0.35014283,-34.66413997
102.200469,0.5,0.58,23.53718977,0.0264166,0.37854986,-37.4764366
250.016893,0.58,0.8,3.16112333,0.08543577,0.234094,-11.47060591
84.559668,0.56,0.59,11.04525929,0.04740455,0.21095023,-20.88407288
222.184443,0.88,0.88,14.86605071,0.02315584,0.43185646,-42.75378931
`),!1),b(x.ParsePatFile(`
*FLEX,FLEX
0, 0,0, 0,.25, .25,-.25
45, .25,0, .1767767,.1767767, .0625,-.22855339,.0625,-.35355339
`),!1),b(x.ParsePatFile(`
*GRASS,GRASS
90, 0,0, .70710678,.70710678, .1875,-1.22671356
45, 0,0, 0,1, .1875,-.8125
135, 0,0, 0,1, .1875,-.8125
`),!1),b(x.ParsePatFile(`
*GRATE,GRATE
0, 0,0, 0,.03125
90, 0,0, 0,.125
`),!1),b(x.ParsePatFile(`
*GRAVEL-01,GRAVEL-01
;Optimize to replace existing GRAVEL Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
159.443955,0.16,0.13,3.16011097,0.11704115,0.17088007,-8.37312367
114.775141,0.22,0,2.23497695,0.06984303,0.14317821,-14.17464285
249.443955,0.32,0.08,3.16011097,0.11704115,0.08544004,-8.45856371
186.009006,0.51,0.1,9.05523386,0.05234239,0.19104973,-18.91392344
165.963757,0.71,0.05,0.9701425,0.24253563,0.20615528,-3.91695034
101.309932,0.72,0,4.11843884,0.19611614,0.0509902,-5.04802932
243.434949,0.84,0.14,0.89442719,0.4472136,0.15652476,-2.07954322
355.426079,0.49,0.13,13.03834384,0.03987261,0.25079872,-24.82907368
300.256437,0.42,0.25,5.83050758,0.07198158,0.13892444,-13.75351955
228.012788,0.6,0.45,12.04136517,0.07432941,0.26907248,-13.18455157
180,0.86,0.45,0,1,0.26,-0.74
303.690068,0.62,0.62,1.38675049,0.2773501,0.14422205,-3.46132922
225,0.72,0.72,0.70710678,0.70710678,0.14142136,-1.27279221
110.224859,0.08,0.23,8.54386101,0.04938648,0.20248457,-20.04597216
177.273689,0.29,0.22,0.99886814,0.04756515,0.21023796,-20.81355808
217.69424,0.51,0.39,11.40169752,0.0359675,0.27802878,-27.52484877
252.255328,0.59,0.64,23.08676133,0.03809697,0.26248809,-25.9863214
301.429566,0.48,0.82,15.26426391,0.04740455,0.21095023,-20.88407288
355.236358,0.24,0.84,0.99654576,0.08304548,0.24083189,-11.80076269
43.66778,0.02,0.63,1.41383129,0.0328798,0.30413813,-30.10967452
87.273689,0.01,0.42,0.99886814,0.04756515,0.21023796,-20.81355808
30.963757,0.62,0.71,3.60147029,0.17149859,0.17492856,-5.65602334
291.801409,0.58,0.81,2.22834406,0.18569534,0.1077033,-5.27746151
203.198591,0.65,0.84,2.23220936,0.13130643,0.07615773,-7.53961537
161.565051,0.77,0.8,0.9486833,0.31622777,0.12649111,-3.03578655
4.969741,0.4,0.88,11.04527609,0.04331481,0.23086793,-22.85592483
16.38954,0,0.81,10.44015399,0.05643326,0.17720045,-17.5428447
197.354025,1,0.19,3.16171493,0.059655,0.16763055,-16.59542407
74.054604,0.95,0.22,4.12081692,0.13736056,0.1456022,-7.13450769
27.645975,0.74,0.11,21.47086912,0.04218245,0.23706539,-23.46947379
145.304846,0.99,0.36,3.60499653,0.06324555,0.15811388,-15.65327442
353.157227,0.7,0.5,17.1171967,0.03971507,0.25179357,-24.92756306
171.469234,0.92,0.69,7.07089492,0.04944682,0.20223748,-20.02151093
138.814075,1,0.62,9.21906451,0.09407209,0.10630146,-10.52384435
90,1,0.56,0,1,0.06,-0.94
60.945396,0.95,0.47,2.23395748,0.09712859,0.1029563,-10.19267384
343.61046,0.83,0.86,7.27989116,0.05643326,0.17720045,-17.5428447
293.198591,0.77,1,2.23220936,0.13130643,0.15231546,-7.46345764
48.012788,0.63,0.9,12.04136517,0.07432941,0.13453624,-13.31908781
312.510447,0.29,1,1.41287877,0.06142951,0.16278821,-16.11603239
70.346176,0.17,0.86,3.16156213,0.06726728,0.14866069,-14.71740806
`),!1),b(x.ParsePatFile(`
*GRAVEL,GRAVEL
228.0128, .72,1, 12.041365,.074329, .134536,-13.319088
184.9697, .63,.9, -12.041517,.043315, .230868,-22.855925
132.5104, .4,.88, -14.865942,.06143, .162788,-16.116032
267.2737, .01,.63, -20.024928,.047565, .210238,-20.813558
292.8337, 0,.42, -12.99991,.048507, .206155,-20.409373
357.2737, .08,.23, -20.024928,.047565, .210238,-20.813558
37.6942, .29,.22, -16.40118,.035968, .278029,-27.524849
72.2553, .51,.39, 23.086761,.038097, .262488,-25.986321
121.4296, .59,.64, 15.264264,.047405, .21095,-20.884073
175.2364, .48,.82, -11.045049,.083045, .240832,-11.800763
222.3974, .24,.84, 16.278789,.032108, .311448,-30.833375
138.8141, 1,.62, 9.219065,.094072, .106301,-10.523844
171.4692, .92,.69, -13.152853,.049447, .202237,-20.021511
225, .72,.72, .707107,.707107, .141421,-1.272792
203.1986, .65,.84, -5.383564,.131306, .076158,-7.539615
291.8014, .58,.81, -3.156821,.185695, .107703,-5.277462
30.9638, .62,.71, 3.60147,.171499, .174929,-5.656023
161.5651, .77,.8, -2.213594,.316228, .126491,-3.035787
16.3895, 0,.81, 10.440154,.056433, .1772,-17.542845
70.3462, .17,.86, -11.704507,.067267, .148661,-14.717408
293.1986, .77,1, -5.383564,.131306, .152315,-7.463458
343.6105, .83,.86, -10.440154,.056433, .1772,-17.542845
339.444, 0,.19, -5.383893,.117041, .17088,-8.373124
294.7751, .16,.13, -12.082844,.069843, .143178,-14.174643
66.8014, .78,0, 5.383564,.131306, .152315,-7.463458
17.354, .84,.14, -13.60134,.059655, .167631,-16.595424
69.444, .29,0, -5.383893,.117041, .08544,-8.458564
101.3099, .72,0, 4.118439,.196116, .05099,-5.048029
165.9638, .71,.05, -3.152963,.242536, .206155,-3.91695
186.009, .51,.1, -10.049739,.052342, .19105,-18.913923
303.6901, .62,.62, -2.218801,.27735, .144222,-3.461329
353.1572, .7,.5, 17.117197,.039715, .251794,-24.927563
60.9454, .95,.47, -8.061673,.097129, .102956,-10.192674
90, 1,.56, 1,1, .06,-.94
120.2564, .49,.13, -8.061936,.071982, .138924,-13.75352
48.0128, .42,.25, 12.041365,.074329, .269072,-13.184552
0, .6,.45, 1,1, .26,-.74
325.3048, .86,.45, -12.206392,.063246, .158114,-15.653274
254.0546, .99,.36, 4.120817,.137361, .145602,-7.134508
207.646, .95,.22, 21.470869,.042182, .237065,-23.469474
175.4261, .74,.11, 13.038344,.039873, .250799,-24.829074
`),!1),b(x.ParsePatFile(`
*HATCH-DOTS,HATCH-DOTS verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
225,0.56554781,0.11554781,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.25036388,0.20036388,0.70710678,0.70710678,0.6374253,-0.77678826
225,0.12918503,0.37918503,0.70710678,0.70710678,0.71894383,-0.69526973
225,0.75438447,0.20438447,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.30962291,0.15962291,0.70710678,0.70710678,0.6636138,-0.75059977
225,0.11186858,0.46186858,0.70710678,0.70710678,0.81138689,-0.60282667
225,0.37918503,0.12918503,0.70710678,0.70710678,0.71894383,-0.69526973
225,0.11554781,0.56554781,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.20036388,0.25036388,0.70710678,0.70710678,0.6374253,-0.77678826
225,0.46186859,0.11186859,0.70710678,0.70710678,0.8113869,-0.60282666
225,0.20438447,0.75438447,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.15962291,0.30962291,0.70710678,0.70710678,0.6636138,-0.75059977
`),!1),b(x.ParsePatFile(`
*HATCH-SQRS,HATCH-SQRS verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
225,0.11,0.36,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.86,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.26,0.70710678,0.70710678,0.52325902,-0.89095454
225,0.76,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.56,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.46,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.26,0.11,0.70710678,0.70710678,0.52325902,-0.89095454
225,0.11,0.76,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.16,0.70710678,0.70710678,0.38183766,-1.0323759
225,0.16,0.11,0.70710678,0.70710678,0.38183766,-1.0323759
225,0.46,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.56,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.36,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.86,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.66,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.66,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
`),!1),b(x.ParsePatFile(`
*HEXAGONS,HEXAGONS verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
239.931417,0.21999999,0.99999998,8.06212908,0.04554875,0.21954496,-21.73495344
239.931417,0.89,0.19,8.06212908,0.04554875,0.21954496,-21.73495344
300.068583,0.78000001,0.99999998,13.89236932,0.04554875,0.21954496,-21.73495344
60.068488,0.12,0.5,8.06221498,0.02626129,0.38078866,-37.69807687
119.931512,0.31,0.17,30.01665055,0.02626129,0.38078865,-37.69807687
300.068583,0.11,0.19,13.89236932,0.04554875,0.21954496,-21.73495344
180,0.11,0.19,0,1,0.21999996,-0.78000004
299.931512,0.69,0.83,30.01665055,0.02626129,0.38078865,-37.69807687
0,0.31,0.83,0,1,0.38,-0.62
180,0.69,0.17,0,1,0.38,-0.62
240.068488,0.88,0.5,8.06221498,0.02626129,0.38078866,-37.69807687
180,0.11,0.81,0,1,0.21999996,-0.78000004
`),!1),b(x.ParsePatFile(`
*HEXJOIN-01,HEXJOIN-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
45,0.15,0.65,0.70710678,0.70710678,0.28284271,-1.13137085
270,0.85,0.65,1,1,0.3,-0.7
315,0.65,0.85,0.70710678,0.70710678,0.28284271,-1.13137085
180,0.65,0.15,0,1,0.3,-0.7
270,0.55,0.15,1,1,0.3,-0.7
90,0.15,0.35,1,1,0.3,-0.7
135,0.35,0.15,0.70710678,0.70710678,0.28284271,-1.13137085
180,0.15,0.55,0,1,0.3,-0.7
270,0.45,0.15,1,1,0.3,-0.7
180,0.15,0.45,0,1,0.3,-0.7
225,0.85,0.35,0.70710678,0.70710678,0.28284271,-1.13137085
0,0.35,0.85,0,1,0.3,-0.7
`),!1),b(x.ParsePatFile(`
*HEXJOIN-02,HEXJOIN-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.85,0.45,1,1,0.1,-0.9
315,0.65,0.85,0.70710678,0.70710678,0.28284271,-1.13137085
270,0.55,0.15,1,1,0.3,-0.7
180,0.15,0.55,0,1,0.3,-0.7
180,0.65,0.15,0,1,0.1,-0.9
45,0.15,0.65,0.70710678,0.70710678,0.28284271,-1.13137085
90,0.15,0.55,1,1,0.1,-0.9
180,0.15,0.45,0,1,0.3,-0.7
180,0.45,0.15,0,1,0.1,-0.9
270,0.45,0.15,1,1,0.3,-0.7
90,0.15,0.35,1,1,0.1,-0.9
0,0.55,0.85,0,1,0.1,-0.9
135,0.35,0.15,0.70710678,0.70710678,0.28284271,-1.13137085
0,0.35,0.85,0,1,0.1,-0.9
225,0.85,0.35,0.70710678,0.70710678,0.28284271,-1.13137085
270,0.85,0.65,1,1,0.1,-0.9
`),!1),b(x.ParsePatFile(`
*HEX,HEX
0, 0,0, 0,.21650635, .125,-.25
120, 0,0, 0,.21650635, .125,-.25
60, .125,0, 0,.21650635, .125,-.25
`),!1),b(x.ParsePatFile(`
*HOLLY,HOLLY
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
99.462322,0.8,0.11,5.09636861,0.16439899,0.06082763,-6.0219349
74.744881,0.67,0.08,4.12217269,0.0877058,0.11401754,-11.28773671
68.198591,0.53,0.15,3.15682075,0.18569534,0.1077033,-5.27746151
270,0.58,0.37,0,1,0.07,-0.93
248.198591,0.75,0.35,3.15682075,0.18569534,0.1077033,-5.27746151
45,0.8,0.2,0.70710678,0.70710678,0.08485281,-1.32936075
351.869898,0.9,0.13,0.98994949,0.14142136,0.07071068,-7.00035713
0,0.86,0.13,0,1,0.04,-0.96
26.565051,0.82,0.11,1.34164079,0.4472136,0.04472136,-2.19134662
45,0.8,0.09,0.70710678,0.70710678,0.02828427,-1.38592929
341.565051,0.77,0.1,0.9486833,0.31622777,0.03162278,-3.13065488
0,0.73,0.1,0,1,0.04,-0.96
26.565051,0.71,0.09,1.34164079,0.4472136,0.02236068,-2.2137073
26.565051,0.69,0.08,1.34164079,0.4472136,0.02236068,-2.2137073
53.130102,0.66,0.04,3.6,0.2,0.05,-4.95
270,0.66,0.08,0,1,0.04,-0.96
303.690068,0.64,0.11,1.38675049,0.2773501,0.03605551,-3.56949576
315,0.62,0.13,0.70710678,0.70710678,0.02828427,-1.38592929
345.963757,0.58,0.14,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.54,0.14,0,1,0.04,-0.96
33.690068,0.51,0.12,1.38675049,0.2773501,0.03605551,-3.56949576
255.963757,0.52,0.16,0.9701425,0.24253563,0.04123106,-4.08187457
281.309932,0.51,0.21,4.11843884,0.19611614,0.0509902,-5.04802932
284.036243,0.5,0.25,3.15296313,0.24253563,0.04123106,-4.08187457
296.565051,0.48,0.29,1.34164079,0.4472136,0.04472136,-2.19134662
303.690068,0.46,0.32,1.38675049,0.2773501,0.03605551,-3.56949576
180,0.5,0.32,0,1,0.04,-0.96
180,0.53,0.32,0,1,0.03,-0.97
213.690068,0.56,0.34,1.38675049,0.2773501,0.03605551,-3.56949576
243.434949,0.57,0.36,0.89442719,0.4472136,0.02236068,-2.2137073
251.565051,0.58,0.39,0.9486833,0.31622777,0.03162278,-3.13065488
108.434949,0.59,0.36,2.21359436,0.31622777,0.03162278,-3.13065488
135,0.61,0.34,0.70710678,0.70710678,0.02828427,-1.38592929
153.434949,0.63,0.33,0.89442719,0.4472136,0.02236068,-2.2137073
161.565051,0.66,0.32,0.9486833,0.31622777,0.03162278,-3.13065488
180,0.69,0.32,0,1,0.03,-0.97
198.434949,0.72,0.33,2.21359436,0.31622777,0.03162278,-3.13065488
225,0.74,0.35,0.70710678,0.70710678,0.02828427,-1.38592929
251.565051,0.75,0.38,0.9486833,0.31622777,0.03162278,-3.13065488
108.434949,0.76,0.35,2.21359436,0.31622777,0.03162278,-3.13065488
116.565051,0.78,0.31,1.34164079,0.4472136,0.04472136,-2.19134662
135,0.81,0.28,0.70710678,0.70710678,0.04242641,-1.37178716
161.565051,0.84,0.27,0.9486833,0.31622777,0.03162278,-3.13065488
180,0.87,0.27,0,1,0.03,-0.97
90,0.87,0.24,0,1,0.03,-0.97
111.801409,0.89,0.19,2.22834406,0.18569534,0.05385165,-5.33131316
126.869898,0.92,0.15,1.4,0.2,0.05,-4.95
149.036243,0.97,0.12,2.22948161,0.17149859,0.05830952,-5.77264238
338.587031,0.46,0.32,24.69817132,0.01825438,0.54781384,-54.23356986
338.198591,0.8,0.69,3.15682075,0.18569534,0.05385165,-5.33131316
323.972627,0.71,0.62,8.60201108,0.07352146,0.13601471,-13.4654558
315,0.6,0.53,0.70710678,0.70710678,0.11313708,-1.30107648
135,0.58,0.55,0.70710678,0.70710678,0.07071068,-1.34350288
126.869898,0.68,0.65,1.4,0.2,0.1,-4.9
105.945396,0.77,0.72,3.15929297,0.13736056,0.0728011,-7.20730879
30.963757,0.87,0.8,3.60147029,0.17149859,0.05830952,-5.77264238
14.036243,0.83,0.79,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.8,0.79,0,1,0.03,-0.97
341.565051,0.77,0.8,0.9486833,0.31622777,0.03162278,-3.13065488
333.434949,0.75,0.81,0.89442719,0.4472136,0.02236068,-2.2137073
63.434949,0.74,0.79,0.89442719,0.4472136,0.02236068,-2.2137073
45,0.72,0.77,0.70710678,0.70710678,0.02828427,-1.38592929
33.690068,0.69,0.75,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.66,0.74,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.63,0.74,0,1,0.03,-0.97
341.565051,0.6,0.75,0.9486833,0.31622777,0.03162278,-3.13065488
108.434949,0.61,0.72,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.61,0.69,0,1,0.03,-0.97
75.963757,0.6,0.65,0.9701425,0.24253563,0.04123106,-4.08187457
45,0.57,0.62,0.70710678,0.70710678,0.04242641,-1.37178716
14.036243,0.53,0.61,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.5,0.61,0,1,0.03,-0.97
126.869898,0.53,0.57,1.4,0.2,0.05,-4.95
90,0.53,0.54,0,1,0.03,-0.97
75.963757,0.52,0.5,0.9701425,0.24253563,0.04123106,-4.08187457
56.309932,0.5,0.47,2.21880078,0.2773501,0.03605551,-3.56949576
191.309932,0.55,0.48,4.11843884,0.19611614,0.0509902,-5.04802932
168.690068,0.6,0.47,0.98058068,0.19611614,0.0509902,-5.04802932
161.565051,0.66,0.45,0.9486833,0.31622777,0.06324555,-3.09903211
143.130102,0.7,0.42,3.6,0.2,0.05,-4.95
270,0.7,0.43,0,1,0.01,-0.99
270,0.7,0.46,0,1,0.03,-0.97
243.434949,0.72,0.5,0.89442719,0.4472136,0.04472136,-2.19134662
213.690068,0.75,0.52,1.38675049,0.2773501,0.03605551,-3.56949576
198.434949,0.78,0.53,2.21359436,0.31622777,0.03162278,-3.13065488
180,0.82,0.53,0,1,0.04,-0.96
146.309932,0.85,0.51,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.83,0.54,1.38675049,0.2773501,0.03605551,-3.56949576
270,0.83,0.57,0,1,0.03,-0.97
270,0.83,0.61,0,1,0.04,-0.96
243.434949,0.85,0.65,0.89442719,0.4472136,0.04472136,-2.19134662
225,0.87,0.67,0.70710678,0.70710678,0.02828427,-1.38592929
296.565051,0.86,0.69,1.34164079,0.4472136,0.02236068,-2.2137073
270,0.86,0.71,0,1,0.02,-0.98
255.963757,0.87,0.75,0.9701425,0.24253563,0.04123106,-4.08187457
243.434949,0.89,0.79,0.89442719,0.4472136,0.04472136,-2.19134662
233.130102,0.92,0.83,3.6,0.2,0.05,-4.95
40.601295,0.5,0.47,1.41004798,0.10846523,0.55317267,-8.66637179
195.945396,0.26,0.54,3.15929297,0.13736056,0.0728011,-7.20730879
5.194429,0.29,0.55,10.04946781,0.09053575,0.11045361,-10.93490741
19.983107,0.28,0.68,8.54357658,0.08543577,0.117047,-11.58765291
185.710593,0.23,0.68,9.05483843,0.09950372,0.10049876,-9.94937686
164.054604,0.22,0.79,4.12081692,0.13736056,0.0728011,-7.20730879
45,0.27,0.79,0.70710678,0.70710678,0.05656854,-1.35764502
90,0.21,0.92,0,1,0.04,-0.96
75.963757,0.2,0.88,0.9701425,0.24253563,0.04123106,-4.08187457
243.434949,0.31,0.47,0.89442719,0.4472136,0.04472136,-2.19134662
236.309932,0.33,0.5,2.21880078,0.2773501,0.03605551,-3.56949576
225,0.36,0.53,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.39,0.55,1.38675049,0.2773501,0.03605551,-3.56949576
189.462322,0.45,0.56,5.09636861,0.16439899,0.06082763,-6.0219349
333.434949,0.43,0.57,0.89442719,0.4472136,0.02236068,-2.2137073
326.309932,0.4,0.59,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.38,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
270,0.38,0.66,0,1,0.04,-0.96
251.565051,0.39,0.69,0.9486833,0.31622777,0.03162278,-3.13065488
236.309932,0.41,0.72,2.21880078,0.2773501,0.03605551,-3.56949576
213.690068,0.44,0.74,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.4,0.74,0,1,0.04,-0.96
333.434949,0.36,0.76,0.89442719,0.4472136,0.04472136,-2.19134662
306.869898,0.33,0.8,1.4,0.2,0.05,-4.95
284.036243,0.32,0.84,3.15296313,0.24253563,0.04123106,-4.08187457
341.565051,0.29,0.85,0.9486833,0.31622777,0.03162278,-3.13065488
326.309932,0.26,0.87,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.24,0.9,1.38675049,0.2773501,0.03605551,-3.56949576
296.565051,0.21,0.96,1.34164079,0.4472136,0.06708204,-2.16898594
56.309932,0.18,0.85,2.21880078,0.2773501,0.03605551,-3.56949576
45,0.16,0.83,0.70710678,0.70710678,0.02828427,-1.38592929
33.690068,0.13,0.81,1.38675049,0.2773501,0.03605551,-3.56949576
116.565051,0.14,0.79,1.34164079,0.4472136,0.02236068,-2.2137073
108.434949,0.15,0.76,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.15,0.72,0,1,0.04,-0.96
63.434949,0.13,0.68,0.89442719,0.4472136,0.04472136,-2.19134662
33.690068,0.1,0.66,1.38675049,0.2773501,0.03605551,-3.56949576
165.963757,0.14,0.65,0.9701425,0.24253563,0.04123106,-4.08187457
143.130102,0.18,0.62,3.6,0.2,0.05,-4.95
116.565051,0.2,0.58,1.34164079,0.4472136,0.04472136,-2.19134662
75.963757,0.19,0.54,0.9701425,0.24253563,0.04123106,-4.08187457
63.434949,0.17,0.5,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.21,0.5,0,1,0.04,-0.96
165.963757,0.25,0.49,0.9701425,0.24253563,0.04123106,-4.08187457
135,0.27,0.47,0.70710678,0.70710678,0.02828427,-1.38592929
116.565051,0.29,0.43,1.34164079,0.4472136,0.04472136,-2.19134662
278.583621,0.21,0.96,33.37663332,0.01865659,0.53600373,-53.0643694
104.036243,0.3,0.2,3.15296313,0.24253563,0.04123106,-4.08187457
123.690068,0.32,0.17,1.38675049,0.2773501,0.03605551,-3.56949576
153.434949,0.36,0.15,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.39,0.15,0,1,0.03,-0.97
206.565051,0.43,0.17,1.34164079,0.4472136,0.04472136,-2.19134662
236.309932,0.45,0.2,2.21880078,0.2773501,0.03605551,-3.56949576
255.963757,0.46,0.24,0.9701425,0.24253563,0.04123106,-4.08187457
288.434949,0.45,0.27,2.21359436,0.31622777,0.03162278,-3.13065488
303.690068,0.43,0.3,1.38675049,0.2773501,0.03605551,-3.56949576
333.434949,0.39,0.32,0.89442719,0.4472136,0.04472136,-2.19134662
0,0.36,0.32,0,1,0.03,-0.97
26.565051,0.32,0.3,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.3,0.27,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.29,0.24,0.9486833,0.31622777,0.03162278,-3.13065488
104.036243,0.16,0.31,3.15296313,0.24253563,0.04123106,-4.08187457
123.690068,0.18,0.28,1.38675049,0.2773501,0.03605551,-3.56949576
153.434949,0.22,0.26,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.25,0.26,0,1,0.03,-0.97
206.565051,0.29,0.28,1.34164079,0.4472136,0.04472136,-2.19134662
236.309932,0.31,0.31,2.21880078,0.2773501,0.03605551,-3.56949576
255.963757,0.32,0.35,0.9701425,0.24253563,0.04123106,-4.08187457
288.434949,0.31,0.38,2.21359436,0.31622777,0.03162278,-3.13065488
303.690068,0.29,0.41,1.38675049,0.2773501,0.03605551,-3.56949576
333.434949,0.25,0.43,0.89442719,0.4472136,0.04472136,-2.19134662
0,0.22,0.43,0,1,0.03,-0.97
26.565051,0.18,0.41,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.16,0.38,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.15,0.35,0.9486833,0.31622777,0.03162278,-3.13065488
104.036243,0.34,0.38,3.15296313,0.24253563,0.04123106,-4.08187457
123.690068,0.36,0.35,1.38675049,0.2773501,0.03605551,-3.56949576
153.434949,0.4,0.33,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.43,0.33,0,1,0.03,-0.97
206.565051,0.47,0.35,1.34164079,0.4472136,0.04472136,-2.19134662
236.309932,0.49,0.38,2.21880078,0.2773501,0.03605551,-3.56949576
255.963757,0.5,0.42,0.9701425,0.24253563,0.04123106,-4.08187457
288.434949,0.49,0.45,2.21359436,0.31622777,0.03162278,-3.13065488
303.690068,0.47,0.48,1.38675049,0.2773501,0.03605551,-3.56949576
333.434949,0.43,0.5,0.89442719,0.4472136,0.04472136,-2.19134662
0,0.4,0.5,0,1,0.03,-0.97
26.565051,0.36,0.48,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.34,0.45,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.33,0.42,0.9486833,0.31622777,0.03162278,-3.13065488
`),!1),b(x.ParsePatFile(`
*HONEY,HONEY
0, 0,0, .1875,.10825317, .125,-.25
120, 0,0, .1875,.10825317, .125,-.25
60, 0,0, .1875,.10825317, -.25,.125
`),!1),b(x.ParsePatFile(`
*HOUND,HOUND
0, 0,0, .25,.0625, 1,-.5
90, 0,0, -.25,.0625, 1,-.5
`),!1),b(x.ParsePatFile(`
*INSUL,INSUL
0, 0,0, 0,.375
0, 0,.125, 0,.375, .125,-.125
0, 0,.25, 0,.375, .125,-.125
`),!1),b(x.ParsePatFile(`
*LATTICE-01,LATTICE-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.08514719,0.4,0,1,0.17029438,-0.82970562
270,0.6,0.08514719,1,1,0.17029438,-0.82970562
270,0.4,0.08514719,1,1,0.17029438,-0.82970562
135,0.5,0.2679899,0.70710678,0.70710678,0.32811183,-1.08610173
225,0.7320101,0.5,0.70710678,0.70710678,0.32811183,-1.08610173
45,0.08514719,0.6,0.70710678,0.70710678,0.44526911,-0.96894445
180,0.08514719,0.6,0,1,0.17029438,-0.82970562
315,0.5,0.7320101,0.70710678,0.70710678,0.32811183,-1.08610173
45,0.2679899,0.5,0.70710678,0.70710678,0.32811183,-1.08610173
315,0.6,0.91485281,0.70710678,0.70710678,0.44526911,-0.96894445
45,0.6,0.08514719,0.70710678,0.70710678,0.44526911,-0.96894445
315,0.08514719,0.4,0.70710678,0.70710678,0.44526911,-0.96894445
`),!1),b(x.ParsePatFile(`
*LATTICE-02,LATTICE-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.38333333,0.38333333,0,1,0.76666666,-0.23333334
270,0.61666667,1,1,1,1;,0 Removed 0 IT RENDERS A POINT
180,0.38333333,0.61666667,0,1,0.76666666,-0.23333334
270,0.38333333,1,1,1,1,;0 Removed 0 IT RENDERS A POINT
`),!1),b(x.ParsePatFile(`
*LATTICE-03,LATTICE-03 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.38333333,0.38333333,0,1,0.76666666,-0.23333334
180,0.38333333,0.61666667,0,1,0.76666666,-0.23333334
270,0.61666667,0.38333333,1,1,0.76666666,-0.23333334
270,0.38333333,0.38333333,1,1,0.76666666,-0.23333334
`),!1),b(x.ParsePatFile(`
*LATTICE-04,LATTICE-04 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
296.565051,0.15333333,0.46,1.34164079,0.4472136,1.13294111,-1.10312687
296.565051,0.34000001,0.55333333,1.34164079,0.4472136,1.13294111,-1.10312687
206.565051,0.46,0.84666667,1.34164079,0.4472136,1.13294111,-1.10312687
206.565051,0.55333333,0.65999999,1.34164079,0.4472136,1.13294111,-1.10312687
`),!1),b(x.ParsePatFile(`
*LATTICE-05,LATTICE-05
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
0,0.775,0.075,0,1,0.15,-0.85
180,0.225,0.925,0,1,0.15,-0.85
180,0.625,0.225,0,1,0.4,-0.6
180,0.625,0.075,0,1,0.55,-0.45
270,0.625,0.225,0,1,0.15,-0.85
270,0.775,0.775,0,1,0.7,-0.3
270,0.925,0.925,0,1,0.85,-0.15
0,0.375,0.775,0,1,0.4,-0.6
0,0.375,0.925,0,1,0.55,-0.45
90,0.375,0.775,0,1,0.15,-0.85
90,0.225,0.225,0,1,0.7,-0.3
90,0.075,0.075,0,1,0.85,-0.15
`),!1),b(x.ParsePatFile(`
*LATTICE-06,LATTICE-06
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.625,0.375,0,1,0.25,-0.75
270,0.625,0.625,0,1,0.25,-0.75
0,0.375,0.625,0,1,0.25,-0.75
90,0.375,0.375,0,1,0.25,-0.75
0,0.775,0.075,0,1,0.15,-0.85
180,0.225,0.925,0,1,0.15,-0.85
180,0.625,0.225,0,1,0.4,-0.6
180,0.625,0.075,0,1,0.55,-0.45
270,0.625,0.225,0,1,0.15,-0.85
270,0.775,0.775,0,1,0.7,-0.3
270,0.925,0.925,0,1,0.85,-0.15
0,0.375,0.775,0,1,0.4,-0.6
0,0.375,0.925,0,1,0.55,-0.45
90,0.375,0.775,0,1,0.15,-0.85
90,0.225,0.225,0,1,0.7,-0.3
90,0.075,0.075,0,1,0.85,-0.15
`),!1),b(x.ParsePatFile(`
*LATTICE-07, verbose comment
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.69166667,0.69166666,1,1,0.88333333,-0.11666667
270,0.80833334,0.69166666,1,1,0.88333333,-0.11666667
270,0.19166666,0.19166667,1,1,0.88333333,-0.11666667
270,0.30833333,0.19166667,1,1,0.88333333,-0.11666667
180,0.69166667,0.30833333,0,1,0.88333333,-0.11666667
180,0.69166667,0.19166666,0,1,0.88333333,-0.11666667
180,0.19166667,0.80833334,0,1,0.88333333,-0.11666667
180,0.19166667,0.69166667,0,1,0.88333333,-0.11666667
`),!1),b(x.ParsePatFile(`
*LEAF-01,LEAF-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
83.659808,0.9,0.2,0.99388373,0.11043153,0.09055385,-8.96483129
26.565051,0.88,0.19,1.34164079,0.4472136,0.02236068,-2.2137073
14.036243,0.84,0.18,3.15296313,0.24253563,0.04123106,-4.08187457
315,0.84,0.18,0.70710678,0.70710678,0.05656854,-1.35764502
83.659808,0.84,0.18,0.99388373,0.11043153,0.09055385,-8.96483129
0,0.79,0.18,0,1,0.05,-0.95
345.963757,0.82,0.12,0.9701425,0.24253563,0.04123106,-4.08187457
326.309932,0.79,0.14,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.77,0.17,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.74,0.16,2.21359436,0.31622777,0.03162278,-3.13065488
288.434949,0.73,0.19,2.21359436,0.31622777,0.03162278,-3.13065488
180,0.77,0.19,0,1,0.04,-0.96
258.690068,0.78,0.24,0.98058068,0.19611614,0.0509902,-5.04802932
243.434949,0.79,0.26,0.89442719,0.4472136,0.02236068,-2.2137073
225,0.82,0.29,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.85,0.31,1.38675049,0.2773501,0.03605551,-3.56949576
191.309932,0.9,0.32,4.11843884,0.19611614,0.0509902,-5.04802932
128.659808,0.3,0.42,1.40556386,0.15617376,0.06403124,-6.339093
143.130102,0.34,0.39,3.6,0.2,0.05,-4.95
153.434949,0.38,0.37,0.89442719,0.4472136,0.04472136,-2.19134662
192.528808,0.38,0.37,4.1216787,0.10846523,0.09219544,-9.12734901
105.945396,0.38,0.37,3.15929297,0.13736056,0.0728011,-7.20730879
153.434949,0.42,0.35,0.89442719,0.4472136,0.04472136,-2.19134662
149.036243,0.47,0.32,2.22948161,0.17149859,0.05830952,-5.77264238
95.710593,0.47,0.32,9.05483843,0.09950372,0.10049876,-9.94937686
194.931417,0.47,0.32,11.40157229,0.06441566,0.15524175,-15.36893295
135,0.51,0.28,0.70710678,0.70710678,0.05656854,-1.35764502
123.690068,0.53,0.25,1.38675049,0.2773501,0.03605551,-3.56949576
199.653824,0.53,0.25,11.70450662,0.06726728,0.14866069,-14.71740806
71.565051,0.53,0.25,0.9486833,0.31622777,0.09486833,-3.06740933
119.054604,0.58,0.16,8.06167266,0.09712859,0.1029563,-10.19267384
288.434949,0.58,0.14,2.21359436,0.31622777,0.06324555,-3.09903211
21.801409,0.53,0.12,2.22834406,0.18569534,0.05385165,-5.33131316
11.309932,0.48,0.11,4.11843884,0.19611614,0.0509902,-5.04802932
0,0.45,0.11,0,1,0.03,-0.97
341.565051,0.39,0.13,0.9486833,0.31622777,0.06324555,-3.09903211
326.309932,0.33,0.17,2.21880078,0.2773501,0.07211103,-3.53344025
308.659808,0.29,0.22,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.26,0.27,3.60147029,0.17149859,0.05830952,-5.77264238
285.945396,0.24,0.34,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.24,0.41,0,1,0.07,-0.93
279.462322,0.23,0.47,5.09636861,0.16439899,0.06082763,-6.0219349
285.945396,0.21,0.54,3.15929297,0.13736056,0.0728011,-7.20730879
123.690068,0.23,0.51,1.38675049,0.2773501,0.03605551,-3.56949576
161.565051,0.26,0.5,0.9486833,0.31622777,0.03162278,-3.13065488
171.869898,0.33,0.49,0.98994949,0.14142136,0.07071068,-7.00035713
171.869898,0.4,0.48,0.98994949,0.14142136,0.07071068,-7.00035713
161.565051,0.46,0.46,0.9486833,0.31622777,0.06324555,-3.09903211
161.565051,0.52,0.44,0.9486833,0.31622777,0.06324555,-3.09903211
146.309932,0.58,0.4,2.21880078,0.2773501,0.07211103,-3.53344025
119.744881,0.62,0.33,5.82963253,0.12403473,0.08062258,-7.98163517
111.801409,0.64,0.28,2.22834406,0.18569534,0.05385165,-5.33131316
90,0.64,0.24,0,1,0.04,-0.96
75.963757,0.63,0.2,0.9701425,0.24253563,0.04123106,-4.08187457
56.309932,0.61,0.17,2.21880078,0.2773501,0.03605551,-3.56949576
63.434949,0.6,0.15,0.89442719,0.4472136,0.02236068,-2.2137073
126.869898,0.63,0.11,1.4,0.2,0.05,-4.95
45,0.6,0.08,0.70710678,0.70710678,0.04242641,-1.37178716
233.130102,0.89,0.04,3.6,0.2,0.05,-4.95
258.690068,0.07,0.05,0.98058068,0.19611614,0.0509902,-5.04802932
258.690068,0.14,0.05,0.98058068,0.19611614,0.0509902,-5.04802932
198.434949,0.26,0.02,2.21359436,0.31622777,0.06324555,-3.09903211
225,0.31,0.02,0.70710678,0.70710678,0.02828427,-1.38592929
198.434949,0.34,0.03,2.21359436,0.31622777,0.03162278,-3.13065488
348.690068,0.29,0.04,0.98058068,0.19611614,0.0509902,-5.04802932
345.963757,0.25,0.05,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.21,0.07,0.89442719,0.4472136,0.04472136,-2.19134662
333.434949,0.15,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.1,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.07,0.11,0,1,0.03,-0.97
8.130102,0,0.1,6.08111832,0.14142136,0.07071068,-7.00035713
236.309932,0.02,0.23,2.21880078,0.2773501,0.03605551,-3.56949576
236.309932,0.04,0.26,2.21880078,0.2773501,0.03605551,-3.56949576
213.690068,0.07,0.28,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.03,0.28,0,1,0.04,-0.96
326.309932,0,0.3,2.21880078,0.2773501,0.03605551,-3.56949576
18.434949,0,0.26,2.21359436,0.31622777,0.03162278,-3.13065488
0,0,0.55,0,1,0.07,-0.93
14.036243,0.1,0.61,3.15296313,0.24253563,0.04123106,-4.08187457
21.801409,0.05,0.59,2.22834406,0.18569534,0.05385165,-5.33131316
30.963757,0,0.56,3.60147029,0.17149859,0.05830952,-5.77264238
254.054604,0.02,0.66,4.12081692,0.13736056,0.0728011,-7.20730879
158.198591,0.05,0.69,3.15682075,0.18569534,0.05385165,-5.33131316
153.434949,0.11,0.66,0.89442719,0.4472136,0.06708204,-2.16898594
158.198591,0.16,0.64,3.15682075,0.18569534,0.05385165,-5.33131316
180,0.21,0.64,0,1,0.05,-0.95
33.690068,0.18,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
45,0.16,0.6,0.70710678,0.70710678,0.02828427,-1.38592929
53.130102,0.13,0.56,3.6,0.2,0.05,-4.95
56.309932,0.09,0.5,2.21880078,0.2773501,0.07211103,-3.53344025
51.340192,0.05,0.45,4.99756038,0.15617376,0.06403124,-6.339093
38.659808,0,0.41,1.40556386,0.15617376,0.06403124,-6.339093
180,0.82,0.48,0,1,0.1,-0.9
310.601295,0.82,0.48,1.41004798,0.10846523,0.09219544,-9.12734901
82.405357,0.82,0.48,8.06198693,0.06608186,0.15132746,-14.98141849
180,0.84,0.48,0,1,0.02,-0.98
194.036243,0.88,0.49,3.15296313,0.24253563,0.04123106,-4.08187457
198.434949,0.91,0.5,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.83,0.37,0,1,0.08,-0.92
348.690068,0.78,0.38,0.98058068,0.19611614,0.0509902,-5.04802932
321.340192,0.73,0.42,4.99756038,0.15617376,0.06403124,-6.339093
300.963757,0.7,0.47,3.60147029,0.17149859,0.05830952,-5.77264238
21.801409,0.65,0.45,2.22834406,0.18569534,0.05385165,-5.33131316
284.036243,0.64,0.49,3.15296313,0.24253563,0.04123106,-4.08187457
180,0.7,0.49,0,1,0.06,-0.94
261.869898,0.71,0.56,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.73,0.61,3.15682075,0.18569534,0.05385165,-5.33131316
225,0.77,0.65,0.70710678,0.70710678,0.05656854,-1.35764502
216.869898,0.81,0.68,1.4,0.2,0.05,-4.95
198.434949,0.9,0.71,2.21359436,0.31622777,0.09486833,-3.06740933
153.434949,0.36,0.65,0.89442719,0.4472136,0.06708204,-2.16898594
170.537678,0.42,0.64,0.98639392,0.16439899,0.06082763,-6.0219349
188.130102,0.49,0.65,6.08111832,0.14142136,0.07071068,-7.00035713
201.801409,0.54,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
219.805571,0.6,0.72,1.40840568,0.12803688,0.0781025,-7.73214718
18.434949,0.97,0.25,2.21359436,0.31622777,0.03162278,-3.13065488
33.690068,0.94,0.23,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.94,0.23,0,1,0.04,-0.96
80.537678,0.94,0.23,0.98639392,0.16439899,0.06082763,-6.0219349
36.869898,0.9,0.2,1.4,0.2,0.05,-4.95
341.565051,0.9,0.2,0.9486833,0.31622777,0.06324555,-3.09903211
53.130102,0.97,0.16,3.6,0.2,0.05,-4.95
38.659808,0.92,0.12,1.40556386,0.15617376,0.06403124,-6.339093
9.462322,0.86,0.11,5.09636861,0.16439899,0.06082763,-6.0219349
180,0.95,0.32,0,1,0.05,-0.95
158.198591,1,0.3,3.15682075,0.18569534,0.05385165,-5.33131316
216.869898,0.93,0.07,1.4,0.2,0.05,-4.95
206.565051,0.97,0.09,1.34164079,0.4472136,0.04472136,-2.19134662
198.434949,1,0.1,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.97,0,0,1,0.02,-0.98
26.565051,0.96,0.53,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.96,0.53,2.21880078,0.2773501,0.07211103,-3.53344025
36.869898,0.96,0.53,1.4,0.2,0.05,-4.95
30.963757,0.91,0.5,3.60147029,0.17149859,0.05830952,-5.77264238
78.690068,0.91,0.5,0.98058068,0.19611614,0.15297059,-4.94604893
156.037511,1,0.46,7.61509624,0.10153462,0.09848858,-9.75036922
30.963757,0.95,0.38,3.60147029,0.17149859,0.05830952,-5.77264238
14.036243,0.91,0.37,3.15296313,0.24253563,0.04123106,-4.08187457
180,1,0.71,0,1,0.1,-0.9
0,0.86,0.87,0,1,0.09,-0.91
11.309932,0.95,0.87,4.11843884,0.19611614,0.0509902,-5.04802932
135,1,0.82,0.70710678,0.70710678,0.07071068,-1.34350288
0,0.96,0.76,0,1,0.04,-0.96
345.963757,0.92,0.77,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.88,0.79,0.89442719,0.4472136,0.04472136,-2.19134662
315,0.86,0.81,0.70710678,0.70710678,0.02828427,-1.38592929
306.869898,0.83,0.85,1.4,0.2,0.05,-4.95
11.309932,0.78,0.84,4.11843884,0.19611614,0.0509902,-5.04802932
284.036243,0.77,0.88,3.15296313,0.24253563,0.04123106,-4.08187457
180,0.83,0.88,0,1,0.06,-0.94
14.036243,0.65,0.89,3.15296313,0.24253563,0.04123106,-4.08187457
18.434949,0.62,0.88,2.21359436,0.31622777,0.03162278,-3.13065488
33.690068,0.59,0.86,1.38675049,0.2773501,0.03605551,-3.56949576
230.194429,0.65,0.78,6.401844,0.12803688,0.0781025,-7.73214718
239.036243,0.68,0.83,2.22948161,0.17149859,0.05830952,-5.77264238
236.309932,0.72,0.89,2.21880078,0.2773501,0.07211103,-3.53344025
213.690068,0.75,0.91,1.38675049,0.2773501,0.03605551,-3.56949576
198.434949,0.78,0.92,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.74,0.92,0,1,0.04,-0.96
345.963757,0.7,0.93,0.9701425,0.24253563,0.04123106,-4.08187457
261.869898,0.84,0.95,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.86,1,3.15682075,0.18569534,0.05385165,-5.33131316
36.869898,0.55,0.83,1.4,0.2,0.05,-4.95
0,0.55,0.83,0,1,0.08,-0.92
78.690068,0.55,0.83,0.98058068,0.19611614,0.10198039,-4.99703912
33.690068,0.52,0.81,1.38675049,0.2773501,0.03605551,-3.56949576
30.963757,0.47,0.78,3.60147029,0.17149859,0.05830952,-5.77264238
336.037511,0.47,0.78,7.61509624,0.10153462,0.09848858,-9.75036922
79.380345,0.47,0.78,11.18017113,0.06142951,0.16278821,-16.11603239
26.565051,0.43,0.76,1.34164079,0.4472136,0.04472136,-2.19134662
9.462322,0.37,0.75,5.09636861,0.16439899,0.06082763,-6.0219349
318.814075,0.37,0.75,9.21906451,0.09407209,0.10630146,-10.52384435
82.405357,0.37,0.75,8.06198693,0.06608186,0.15132746,-14.98141849
0,0.33,0.75,0,1,0.04,-0.96
0,0.29,0.75,0,1,0.04,-0.96
0,0.2,0.76,0,1,0.06,-0.94
104.036243,0.21,0.72,3.15296313,0.24253563,0.04123106,-4.08187457
201.801409,0.26,0.74,2.22834406,0.18569534,0.05385165,-5.33131316
123.690068,0.3,0.68,1.38675049,0.2773501,0.07211103,-3.53344025
338.198591,0.65,0.95,3.15682075,0.18569534,0.05385165,-5.33131316
333.434949,0.59,0.98,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.54,0.99,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.46,0.99,0,1,0.08,-0.92
18.434949,0.4,0.97,2.21359436,0.31622777,0.06324555,-3.09903211
26.565051,0.34,0.94,1.34164079,0.4472136,0.06708204,-2.16898594
45,0.29,0.89,0.70710678,0.70710678,0.07071068,-1.34350288
71.565051,0.27,0.83,0.9486833,0.31622777,0.06324555,-3.09903211
81.869898,0.26,0.76,0.98994949,0.14142136,0.07071068,-7.00035713
;0,0.2,0.76,0,1,0.06,-0.94
315,0,0.82,0.70710678,0.70710678,0.02828427,-1.38592929
198.434949,0.03,0.89,2.21359436,0.31622777,0.03162278,-3.13065488
343.300756,0.03,0.89,7.27947977,0.09578263,0.10440307,-10.33590344
74.744881,0.03,0.89,4.12217269,0.0877058,0.11401754,-11.28773671
206.565051,0.05,0.9,1.34164079,0.4472136,0.02236068,-2.2137073
213.690068,0.08,0.92,1.38675049,0.2773501,0.03605551,-3.56949576
216.869898,0.12,0.95,1.4,0.2,0.05,-4.95
352.874984,0.12,0.95,0.99227788,0.12403473,0.08062258,-7.98163517
78.690068,0.12,0.95,0.98058068,0.19611614,0.0509902,-5.04802932
213.690068,0.15,0.97,1.38675049,0.2773501,0.03605551,-3.56949576
213.690068,0.18,0.99,1.38675049,0.2773501,0.03605551,-3.56949576
206.565051,0.2,1,1.34164079,0.4472136,0.02236068,-2.2137073
45,0.28,0.99,0.70710678,0.70710678,0.01414214,-1.40007143
56.309932,0.26,0.96,2.21880078,0.2773501,0.03605551,-3.56949576
56.309932,0.22,0.9,2.21880078,0.2773501,0.07211103,-3.53344025
53.130102,0.19,0.86,3.6,0.2,0.05,-4.95
45,0.14,0.81,0.70710678,0.70710678,0.07071068,-1.34350288
36.869898,0.1,0.78,1.4,0.2,0.05,-4.95
18.434949,0.04,0.76,2.21359436,0.31622777,0.06324555,-3.09903211
0,0,0.76,0,1,0.04,-0.96
81.253838,0.95,0.87,7.07065907,0.07602859,0.13152946,-13.02141697
`),!1),b(x.ParsePatFile(`
*LEAF-02,LEAF-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
303.690068,0.77,0.17,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.74,0.16,2.21359436,0.31622777,0.03162278,-3.13065488
288.434949,0.73,0.19,2.21359436,0.31622777,0.03162278,-3.13065488
180,0.77,0.19,0,1,0.04,-0.96
258.690068,0.78,0.24,0.98058068,0.19611614,0.0509902,-5.04802932
243.434949,0.79,0.26,0.89442719,0.4472136,0.02236068,-2.2137073
288.434949,0.58,0.14,2.21359436,0.31622777,0.06324555,-3.09903211
21.801409,0.53,0.12,2.22834406,0.18569534,0.05385165,-5.33131316
11.309932,0.48,0.11,4.11843884,0.19611614,0.0509902,-5.04802932
0,0.45,0.11,0,1,0.03,-0.97
341.565051,0.39,0.13,0.9486833,0.31622777,0.06324555,-3.09903211
326.309932,0.33,0.17,2.21880078,0.2773501,0.07211103,-3.53344025
308.659808,0.29,0.22,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.26,0.27,3.60147029,0.17149859,0.05830952,-5.77264238
285.945396,0.24,0.34,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.24,0.41,0,1,0.07,-0.93
279.462322,0.23,0.47,5.09636861,0.16439899,0.06082763,-6.0219349
285.945396,0.21,0.54,3.15929297,0.13736056,0.0728011,-7.20730879
123.690068,0.23,0.51,1.38675049,0.2773501,0.03605551,-3.56949576
161.565051,0.26,0.5,0.9486833,0.31622777,0.03162278,-3.13065488
171.869898,0.33,0.49,0.98994949,0.14142136,0.07071068,-7.00035713
171.869898,0.4,0.48,0.98994949,0.14142136,0.07071068,-7.00035713
161.565051,0.46,0.46,0.9486833,0.31622777,0.06324555,-3.09903211
161.565051,0.52,0.44,0.9486833,0.31622777,0.06324555,-3.09903211
146.309932,0.58,0.4,2.21880078,0.2773501,0.07211103,-3.53344025
119.744881,0.62,0.33,5.82963253,0.12403473,0.08062258,-7.98163517
111.801409,0.64,0.28,2.22834406,0.18569534,0.05385165,-5.33131316
90,0.64,0.24,0,1,0.04,-0.96
75.963757,0.63,0.2,0.9701425,0.24253563,0.04123106,-4.08187457
56.309932,0.61,0.17,2.21880078,0.2773501,0.03605551,-3.56949576
63.434949,0.6,0.15,0.89442719,0.4472136,0.02236068,-2.2137073
126.869898,0.63,0.11,1.4,0.2,0.05,-4.95
45,0.6,0.08,0.70710678,0.70710678,0.04242641,-1.37178716
225,0.31,0.02,0.70710678,0.70710678,0.02828427,-1.38592929
198.434949,0.34,0.03,2.21359436,0.31622777,0.03162278,-3.13065488
348.690068,0.29,0.04,0.98058068,0.19611614,0.0509902,-5.04802932
345.963757,0.25,0.05,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.21,0.07,0.89442719,0.4472136,0.04472136,-2.19134662
333.434949,0.15,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.1,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.07,0.11,0,1,0.03,-0.97
8.130102,0,0.1,6.08111832,0.14142136,0.07071068,-7.00035713
236.309932,0.02,0.23,2.21880078,0.2773501,0.03605551,-3.56949576
236.309932,0.04,0.26,2.21880078,0.2773501,0.03605551,-3.56949576
213.690068,0.07,0.28,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.03,0.28,0,1,0.04,-0.96
326.309932,0,0.3,2.21880078,0.2773501,0.03605551,-3.56949576
158.198591,0.05,0.69,3.15682075,0.18569534,0.05385165,-5.33131316
153.434949,0.11,0.66,0.89442719,0.4472136,0.06708204,-2.16898594
158.198591,0.16,0.64,3.15682075,0.18569534,0.05385165,-5.33131316
180,0.21,0.64,0,1,0.05,-0.95
33.690068,0.18,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
45,0.16,0.6,0.70710678,0.70710678,0.02828427,-1.38592929
53.130102,0.13,0.56,3.6,0.2,0.05,-4.95
56.309932,0.09,0.5,2.21880078,0.2773501,0.07211103,-3.53344025
51.340192,0.05,0.45,4.99756038,0.15617376,0.06403124,-6.339093
38.659808,0,0.41,1.40556386,0.15617376,0.06403124,-6.339093
321.340192,0.73,0.42,4.99756038,0.15617376,0.06403124,-6.339093
300.963757,0.7,0.47,3.60147029,0.17149859,0.05830952,-5.77264238
21.801409,0.65,0.45,2.22834406,0.18569534,0.05385165,-5.33131316
284.036243,0.64,0.49,3.15296313,0.24253563,0.04123106,-4.08187457
180,0.7,0.49,0,1,0.06,-0.94
261.869898,0.71,0.56,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.73,0.61,3.15682075,0.18569534,0.05385165,-5.33131316
225,0.77,0.65,0.70710678,0.70710678,0.05656854,-1.35764502
284.036243,0.77,0.88,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.2,0.76,0,1,0.06,-0.94
104.036243,0.21,0.72,3.15296313,0.24253563,0.04123106,-4.08187457
201.801409,0.26,0.74,2.22834406,0.18569534,0.05385165,-5.33131316
123.690068,0.3,0.68,1.38675049,0.2773501,0.07211103,-3.53344025
153.434949,0.36,0.65,0.89442719,0.4472136,0.06708204,-2.16898594
170.537678,0.42,0.64,0.98639392,0.16439899,0.06082763,-6.0219349
188.130102,0.49,0.65,6.08111832,0.14142136,0.07071068,-7.00035713
201.801409,0.54,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
219.805571,0.6,0.72,1.40840568,0.12803688,0.0781025,-7.73214718
230.194429,0.65,0.78,6.401844,0.12803688,0.0781025,-7.73214718
239.036243,0.68,0.83,2.22948161,0.17149859,0.05830952,-5.77264238
236.309932,0.72,0.89,2.21880078,0.2773501,0.07211103,-3.53344025
213.690068,0.75,0.91,1.38675049,0.2773501,0.03605551,-3.56949576
198.434949,0.78,0.92,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.74,0.92,0,1,0.04,-0.96
345.963757,0.7,0.93,0.9701425,0.24253563,0.04123106,-4.08187457
338.198591,0.65,0.95,3.15682075,0.18569534,0.05385165,-5.33131316
45,0.29,0.89,0.70710678,0.70710678,0.07071068,-1.34350288
71.565051,0.27,0.83,0.9486833,0.31622777,0.06324555,-3.09903211
81.869898,0.26,0.76,0.98994949,0.14142136,0.07071068,-7.00035713
;0,0.2,0.76,0,1,0.06,-0.94
53.130102,0.19,0.86,3.6,0.2,0.05,-4.95
45,0.14,0.81,0.70710678,0.70710678,0.07071068,-1.34350288
36.869898,0.1,0.78,1.4,0.2,0.05,-4.95
18.434949,0.04,0.76,2.21359436,0.31622777,0.06324555,-3.09903211
0,0,0.76,0,1,0.04,-0.96
0,0.96,0.76,0,1,0.04,-0.96
345.963757,0.92,0.77,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.88,0.79,0.89442719,0.4472136,0.04472136,-2.19134662
315,0.86,0.81,0.70710678,0.70710678,0.02828427,-1.38592929
306.869898,0.83,0.85,1.4,0.2,0.05,-4.95
11.309932,0.78,0.84,4.11843884,0.19611614,0.0509902,-5.04802932
180,0.83,0.88,0,1,0.06,-0.94
261.869898,0.84,0.95,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.86,1,3.15682075,0.18569534,0.05385165,-5.33131316
333.434949,0.59,0.98,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.54,0.99,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.46,0.99,0,1,0.08,-0.92
18.434949,0.4,0.97,2.21359436,0.31622777,0.06324555,-3.09903211
26.565051,0.34,0.94,1.34164079,0.4472136,0.06708204,-2.16898594
45,0.28,0.99,0.70710678,0.70710678,0.01414214,-1.40007143
56.309932,0.26,0.96,2.21880078,0.2773501,0.03605551,-3.56949576
56.309932,0.22,0.9,2.21880078,0.2773501,0.07211103,-3.53344025
53.130102,0.97,0.16,3.6,0.2,0.05,-4.95
38.659808,0.92,0.12,1.40556386,0.15617376,0.06403124,-6.339093
9.462322,0.86,0.11,5.09636861,0.16439899,0.06082763,-6.0219349
345.963757,0.82,0.12,0.9701425,0.24253563,0.04123106,-4.08187457
326.309932,0.79,0.14,2.21880078,0.2773501,0.03605551,-3.56949576
225,0.82,0.29,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.85,0.31,1.38675049,0.2773501,0.03605551,-3.56949576
191.309932,0.9,0.32,4.11843884,0.19611614,0.0509902,-5.04802932
180,0.95,0.32,0,1,0.05,-0.95
158.198591,1,0.3,3.15682075,0.18569534,0.05385165,-5.33131316
233.130102,0.89,0.04,3.6,0.2,0.05,-4.95
216.869898,0.93,0.07,1.4,0.2,0.05,-4.95
206.565051,0.97,0.09,1.34164079,0.4472136,0.04472136,-2.19134662
198.434949,1,0.1,2.21359436,0.31622777,0.03162278,-3.13065488
30.963757,0.95,0.38,3.60147029,0.17149859,0.05830952,-5.77264238
14.036243,0.91,0.37,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.83,0.37,0,1,0.08,-0.92
348.690068,0.78,0.38,0.98058068,0.19611614,0.0509902,-5.04802932
216.869898,0.81,0.68,1.4,0.2,0.05,-4.95
198.434949,0.9,0.71,2.21359436,0.31622777,0.09486833,-3.06740933
180,1,0.71,0,1,0.1,-0.9
`),!1),b(x.ParsePatFile(`
*LEAF-03,LEAF-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
344.054604,0.86,0.38,4.12081692,0.13736056,0.0728011,-7.20730879
338.198591,0.81,0.4,3.15682075,0.18569534,0.05385165,-5.33131316
326.309932,0.75,0.44,2.21880078,0.2773501,0.07211103,-3.53344025
320.194429,0.69,0.49,6.401844,0.12803688,0.0781025,-7.73214718
308.659808,0.65,0.54,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.62,0.59,3.60147029,0.17149859,0.05830952,-5.77264238
293.198591,0.59,0.66,2.23220936,0.13130643,0.07615773,-7.53961537
281.309932,0.58,0.71,4.11843884,0.19611614,0.0509902,-5.04802932
276.340192,0.57,0.8,8.0615014,0.11043153,0.09055385,-8.96483129
270,0.57,0.85,0,1,0.05,-0.95
257.471192,0.59,0.94,5.09786576,0.10846523,0.09219544,-9.12734901
164.054604,0.66,0.92,4.12081692,0.13736056,0.0728011,-7.20730879
158.198591,0.71,0.9,3.15682075,0.18569534,0.05385165,-5.33131316
146.309932,0.77,0.86,2.21880078,0.2773501,0.07211103,-3.53344025
140.194429,0.83,0.81,6.401844,0.12803688,0.0781025,-7.73214718
125.537678,0.88,0.74,4.99864847,0.11624764,0.08602325,-8.51630201
116.565051,0.92,0.66,1.34164079,0.4472136,0.08944272,-2.14662526
105.945396,0.94,0.59,3.15929297,0.13736056,0.0728011,-7.20730879
97.125016,0.95,0.51,7.06997987,0.12403473,0.08062258,-7.98163517
90,0.95,0.45,0,1,0.06,-0.94
77.471192,0.93,0.36,5.09786576,0.10846523,0.09219544,-9.12734901
195.945396,0.14,0.38,3.15929297,0.13736056,0.0728011,-7.20730879
201.801409,0.19,0.4,2.22834406,0.18569534,0.05385165,-5.33131316
213.690068,0.25,0.44,1.38675049,0.2773501,0.07211103,-3.53344025
219.805571,0.31,0.49,1.40840568,0.12803688,0.0781025,-7.73214718
231.340192,0.35,0.54,4.99756038,0.15617376,0.06403124,-6.339093
239.036243,0.38,0.59,2.22948161,0.17149859,0.05830952,-5.77264238
246.801409,0.41,0.66,5.38356375,0.13130643,0.07615773,-7.53961537
258.690068,0.42,0.71,0.98058068,0.19611614,0.0509902,-5.04802932
263.659808,0.43,0.8,0.99388373,0.11043153,0.09055385,-8.96483129
270,0.43,0.85,0,1,0.05,-0.95
282.528808,0.41,0.94,4.1216787,0.10846523,0.09219544,-9.12734901
15.945396,0.34,0.92,3.15929297,0.13736056,0.0728011,-7.20730879
21.801409,0.29,0.9,2.22834406,0.18569534,0.05385165,-5.33131316
33.690068,0.23,0.86,1.38675049,0.2773501,0.07211103,-3.53344025
39.805571,0.17,0.81,1.40840568,0.12803688,0.0781025,-7.73214718
54.462322,0.12,0.74,3.6036768,0.11624764,0.08602325,-8.51630201
63.434949,0.08,0.66,0.89442719,0.4472136,0.08944272,-2.14662526
74.054604,0.06,0.59,4.12081692,0.13736056,0.0728011,-7.20730879
82.874984,0.05,0.51,0.99227788,0.12403473,0.08062258,-7.98163517
90,0.05,0.45,0,1,0.06,-0.94
102.528808,0.07,0.36,4.1216787,0.10846523,0.09219544,-9.12734901
128.659808,0.21,0.15,1.40556386,0.15617376,0.06403124,-6.339093
146.309932,0.27,0.11,2.21880078,0.2773501,0.07211103,-3.53344025
153.434949,0.33,0.08,0.89442719,0.4472136,0.06708204,-2.16898594
164.054604,0.4,0.06,4.12081692,0.13736056,0.0728011,-7.20730879
171.869898,0.47,0.05,0.98994949,0.14142136,0.07071068,-7.00035713
180,0.53,0.05,0,1,0.06,-0.94
188.130102,0.6,0.06,6.08111832,0.14142136,0.07071068,-7.00035713
195.945396,0.67,0.08,3.15929297,0.13736056,0.0728011,-7.20730879
206.565051,0.73,0.11,1.34164079,0.4472136,0.06708204,-2.16898594
218.659808,0.78,0.15,1.40556386,0.15617376,0.06403124,-6.339093
225,0.83,0.2,0.70710678,0.70710678,0.07071068,-1.34350288
315,0.78,0.25,0.70710678,0.70710678,0.07071068,-1.34350288
321.340192,0.73,0.29,4.99756038,0.15617376,0.06403124,-6.339093
336.801409,0.66,0.32,5.38356375,0.13130643,0.07615773,-7.53961537
341.565051,0.6,0.34,0.9486833,0.31622777,0.06324555,-3.09903211
351.869898,0.53,0.35,0.98994949,0.14142136,0.07071068,-7.00035713
0,0.47,0.35,0,1,0.06,-0.94
8.130102,0.4,0.34,6.08111832,0.14142136,0.07071068,-7.00035713
18.434949,0.34,0.32,2.21359436,0.31622777,0.06324555,-3.09903211
23.198591,0.27,0.29,2.23220936,0.13130643,0.07615773,-7.53961537
38.659808,0.22,0.25,1.40556386,0.15617376,0.06403124,-6.339093
45,0.17,0.2,0.70710678,0.70710678,0.07071068,-1.34350288
`),!1),b(x.ParsePatFile(`
*LINE,LINE
0, 0,0, 0,.125
`),!1),b(x.ParsePatFile(`
*LOOPLINKS,LOOPLINKS
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
206.565051,0.53,0.67,1.34164079,0.4472136,0.02236068,-2.2137073
243.434949,0.54,0.69,0.89442719,0.4472136,0.02236068,-2.2137073
116.565051,0.47,0.67,1.34164079,0.4472136,0.02236068,-2.2137073
153.434949,0.49,0.66,0.89442719,0.4472136,0.02236068,-2.2137073
180,0.51,0.66,0,1,0.02,-0.98
258.690068,0.19,0.59,0.98058068,0.19611614,0.0509902,-5.04802932
251.565051,0.2,0.62,0.9486833,0.31622777,0.03162278,-3.13065488
243.434949,0.22,0.66,0.89442719,0.4472136,0.04472136,-2.19134662
230.194429,0.27,0.72,6.401844,0.12803688,0.0781025,-7.73214718
225,0.31,0.76,0.70710678,0.70710678,0.05656854,-1.35764502
209.744881,0.38,0.8,5.82963253,0.12403473,0.08062258,-7.98163517
194.036243,0.46,0.82,3.15296313,0.24253563,0.08246211,-4.04064351
251.565051,0.28,0.6,0.9486833,0.31622777,0.06324555,-3.09903211
239.036243,0.31,0.65,2.22948161,0.17149859,0.05830952,-5.77264238
225,0.35,0.69,0.70710678,0.70710678,0.05656854,-1.35764502
210.963757,0.4,0.72,3.60147029,0.17149859,0.05830952,-5.77264238
198.434949,0.46,0.74,2.21359436,0.31622777,0.06324555,-3.09903211
116.565051,0.67,0.47,1.34164079,0.4472136,0.02236068,-2.2137073
153.434949,0.69,0.46,0.89442719,0.4472136,0.02236068,-2.2137073
26.565051,0.67,0.53,1.34164079,0.4472136,0.02236068,-2.2137073
63.434949,0.66,0.51,0.89442719,0.4472136,0.02236068,-2.2137073
90,0.66,0.49,0,1,0.02,-0.98
168.690068,0.59,0.81,0.98058068,0.19611614,0.0509902,-5.04802932
161.565051,0.62,0.8,0.9486833,0.31622777,0.03162278,-3.13065488
153.434949,0.66,0.78,0.89442719,0.4472136,0.04472136,-2.19134662
140.194429,0.72,0.73,6.401844,0.12803688,0.0781025,-7.73214718
135,0.76,0.69,0.70710678,0.70710678,0.05656854,-1.35764502
119.744881,0.8,0.62,5.82963253,0.12403473,0.08062258,-7.98163517
104.036243,0.82,0.54,3.15296313,0.24253563,0.08246211,-4.04064351
161.565051,0.6,0.72,0.9486833,0.31622777,0.06324555,-3.09903211
149.036243,0.65,0.69,2.22948161,0.17149859,0.05830952,-5.77264238
135,0.69,0.65,0.70710678,0.70710678,0.05656854,-1.35764502
120.963757,0.72,0.6,3.60147029,0.17149859,0.05830952,-5.77264238
108.434949,0.74,0.54,2.21359436,0.31622777,0.06324555,-3.09903211
26.565051,0.47,0.33,1.34164079,0.4472136,0.02236068,-2.2137073
63.434949,0.46,0.31,0.89442719,0.4472136,0.02236068,-2.2137073
296.565051,0.53,0.33,1.34164079,0.4472136,0.02236068,-2.2137073
333.434949,0.51,0.34,0.89442719,0.4472136,0.02236068,-2.2137073
0,0.49,0.34,0,1,0.02,-0.98
78.690068,0.81,0.41,0.98058068,0.19611614,0.0509902,-5.04802932
71.565051,0.8,0.38,0.9486833,0.31622777,0.03162278,-3.13065488
63.434949,0.78,0.34,0.89442719,0.4472136,0.04472136,-2.19134662
50.194429,0.73,0.28,6.401844,0.12803688,0.0781025,-7.73214718
45,0.69,0.24,0.70710678,0.70710678,0.05656854,-1.35764502
29.744881,0.62,0.2,5.82963253,0.12403473,0.08062258,-7.98163517
14.036243,0.54,0.18,3.15296313,0.24253563,0.08246211,-4.04064351
71.565051,0.72,0.4,0.9486833,0.31622777,0.06324555,-3.09903211
59.036243,0.69,0.35,2.22948161,0.17149859,0.05830952,-5.77264238
45,0.65,0.31,0.70710678,0.70710678,0.05656854,-1.35764502
30.963757,0.6,0.28,3.60147029,0.17149859,0.05830952,-5.77264238
18.434949,0.54,0.26,2.21359436,0.31622777,0.06324555,-3.09903211
296.565051,0.33,0.53,1.34164079,0.4472136,0.02236068,-2.2137073
333.434949,0.31,0.54,0.89442719,0.4472136,0.02236068,-2.2137073
206.565051,0.33,0.47,1.34164079,0.4472136,0.02236068,-2.2137073
243.434949,0.34,0.49,0.89442719,0.4472136,0.02236068,-2.2137073
270,0.34,0.51,0,1,0.02,-0.98
348.690068,0.41,0.19,0.98058068,0.19611614,0.0509902,-5.04802932
341.565051,0.38,0.2,0.9486833,0.31622777,0.03162278,-3.13065488
333.434949,0.34,0.22,0.89442719,0.4472136,0.04472136,-2.19134662
320.194429,0.28,0.27,6.401844,0.12803688,0.0781025,-7.73214718
315,0.24,0.31,0.70710678,0.70710678,0.05656854,-1.35764502
299.744881,0.2,0.38,5.82963253,0.12403473,0.08062258,-7.98163517
284.036243,0.18,0.46,3.15296313,0.24253563,0.08246211,-4.04064351
341.565051,0.4,0.28,0.9486833,0.31622777,0.06324555,-3.09903211
329.036243,0.35,0.31,2.22948161,0.17149859,0.05830952,-5.77264238
315,0.31,0.35,0.70710678,0.70710678,0.05656854,-1.35764502
300.963757,0.28,0.4,3.60147029,0.17149859,0.05830952,-5.77264238
288.434949,0.26,0.46,2.21359436,0.31622777,0.06324555,-3.09903211
90,0.46,-0.31,0,1,0.62,-0.38
270,0.54,0.31,0,1,0.62,-0.38
180,0.31,0.46,0,1,0.62,-0.38
0,-0.31,0.54,0,1,0.62,-0.38
`),!1),b(x.ParsePatFile(`
*MAZE-01,MAZE-01 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.95,0.92,0,1,0.25,-0.75
90,0.95,0.55,1,1,0.37,-0.63
90,0.83,0.55,1,1,0.25,-0.75
0,0.7,0.42,0,1,0.11,-0.89
180,0.57,0.8,0,1,0.38,-0.62
270,0.57,0.92,1,1,0.12,-0.88
0,0.07,0.92,0,1,0.5,-0.5
90,0.95,0.29,1,1,0.13,-0.87
180,0.45,0.05,0,1,0.38,-0.62
0,0.7,0.29,0,1,0.25,-0.75
270,0.45,0.17,1,1,0.12,-0.88
0,0.19,0.17,0,1,0.26,-0.74
90,0.7,0.17,1,1,0.12,-0.88
270,0.19,0.8,1,1,0.63,-0.37
0,0.31,0.29,0,1,0.26,-0.74
270,0.31,0.68,1,1,0.39,-0.61
180,0.7,0.68,0,1,0.39,-0.61
270,0.7,0.92,1,1,0.24,-0.76
180,0.95,0.17,0,1,0.25,-0.75
90,0.95,0.05,1,1,0.12,-0.88
0,0.57,0.05,0,1,0.38,-0.62
270,0.57,0.42,1,1,0.37,-0.63
270,0.7,0.55,1,1,0.13,-0.87
0,0.45,0.55,0,1,0.25,-0.75
90,0.45,0.42,1,1,0.13,-0.87
90,0.07,0.05,1,1,0.87,-0.13
`),!1),b(x.ParsePatFile(`
*MAZE-02,MAZE-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.89999999,0.1,1,1,0.1,-0.9
0,0.69999999,0.1,0,1,0.2,-0.8
90,0,0.3,1,1,0.5,-0.5
270,0.89999999,0.9,1,1,0.5,-0.5
270,0.29999999,0.9,1,1,0.1,-0.9
180,0.29999999,0.9,0,1,0.4,-0.6
0,0.19999999,0.2,0,1,0.15,-0.85
90,0.19999999,0.3,1,1,0.2,-0.8
180,0.49999999,0.3,0,1,0.3,-0.7
90,0.49999999,0.1,1,1,0.2,-0.8
270,0.69999999,0.2,1,1,0.1,-0.9
0,0.59999999,0.2,0,1,0.1,-0.9
270,0.59999999,0.3,1,1,0.1,-0.9
180,0.69999999,0.3,0,1,0.1,-0.9
270,0.59999999,0.6,1,1,0.1,-0.9
0,0.29999999,0.6,0,1,0.3,-0.7
90,0.29999999,0.4,1,1,0.2,-0.8
180,0.69999999,0.4,0,1,0.4,-0.6
180,0.59999999,0.5,0,1,0.2,-0.8
270,0.79999999,0.8,1,1,0.5,-0.5
0,0.09999999,0.1,0,1,0.4,-0.6
0,0.09999999,0.8,0,1,0.7,-0.3
270,0.09999999,0.2,1,1,0.1,-0.9
90,0.09999999,0.3,1,1,0.5,-0.5
180,0.09999999,0.2,0,1,0.3,-0.7
180,0,0.3,0,1,0.20000001,-0.79999999
180,0.29999999,0,0,1,0.3,-0.7
270,0.69999999,0.7,1,1,0.2,-0.8
0,0.39999999,0,0,1,0.4,-0.6
0,0.19999999,0.7,0,1,0.5,-0.5
90,0.19999999,0.6,1,1,0.1,-0.9
270,0.59999999,0.1,1,1,0.1,-0.9
0,0.39999999,0.9,0,1,0.4,-0.6
270,0.39999999,1,1,1,0.1,-0.9
`),!1),b(x.ParsePatFile(`
*MUDST,MUDST
0, 0,0, .5,.25, .25,-.25,0,-.25,0,-.25
`),!1),b(x.ParsePatFile(`
*NET3,NET3
0, 0,0, 0,.125
60, 0,0, 0,.125
120, 0,0, 0,.125
`),!1),b(x.ParsePatFile(`
*NET,NET
0, 0,0, 0,.125
90, 0,0, 0,.125
`),!1),b(x.ParsePatFile(`
*PLASTI,PLASTI
0, 0,0, 0,.25
0, 0,.03125, 0,.25
0, 0,.0625, 0,.25
0, 0,.15625, 0,.25
`),!1),b(x.ParsePatFile(`
*PLAST,PLAST
0, 0,0, 0,.25
0, 0,.03125, 0,.25
0, 0,.0625, 0,.25
`),!1),b(x.ParsePatFile(`
*QCAD-LOGO,QCAD-LOGO
;By John Hyslop, Line 101 modified by CVH to fix left side of pencil drift when hatching far from Origin
;Developed in inch as imperial QCAD3 pattern
243.434949,0.8,0.36,0.89442719,0.4472136,0.02236068,-2.2137073
248.198591,0.82,0.41,3.15682075,0.18569534,0.05385165,-5.33131316
263.659808,0.83,0.5,0.99388373,0.11043153,0.09055385,-8.96483129
276.340192,0.82,0.59,8.0615014,0.11043153,0.09055385,-8.96483129
290.556045,0.79,0.67,5.38389277,0.11704115,0.08544004,-8.45856371
310.601295,0.73,0.74,1.41004798,0.10846523,0.09219544,-9.12734901
324.462322,0.66,0.79,3.6036768,0.11624764,0.08602325,-8.51630201
336.801409,0.59,0.82,5.38356375,0.13130643,0.07615773,-7.53961537
351.869898,0.52,0.83,0.98994949,0.14142136,0.07071068,-7.00035713
26.565051,0.61,0.18,1.34164079,0.4472136,0.06708204,-2.16898594
7.125016,0.53,0.17,7.06997987,0.12403473,0.08062258,-7.98163517
0,0.45,0.17,0,1,0.08,-0.92
344.054604,0.38,0.19,4.12081692,0.13736056,0.0728011,-7.20730879
336.801409,0.31,0.22,5.38356375,0.13130643,0.07615773,-7.53961537
320.194429,0.25,0.27,6.401844,0.12803688,0.0781025,-7.73214718
308.659808,0.21,0.32,1.40556386,0.15617376,0.06403124,-6.339093
293.198591,0.18,0.39,2.23220936,0.13130643,0.07615773,-7.53961537
285.945396,0.16,0.46,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.16,0.52,0,1,0.06,-0.94
261.869898,0.17,0.59,0.98994949,0.14142136,0.07071068,-7.00035713
246.801409,0.2,0.66,5.38356375,0.13130643,0.07615773,-7.53961537
234.462322,0.25,0.73,3.6036768,0.11624764,0.08602325,-8.51630201
219.805571,0.31,0.78,1.40840568,0.12803688,0.0781025,-7.73214718
206.565051,0.37,0.81,1.34164079,0.4472136,0.06708204,-2.16898594
195.945396,0.44,0.83,3.15929297,0.13736056,0.0728011,-7.20730879
180,0.48,0.83,0,1,0.04,-0.96
180,0.52,0.83,0,1,0.04,-0.96
233.130102,0.92,0.27,3.6,0.2,0.05,-4.95
248.198591,0.94,0.32,3.15682075,0.18569534,0.05385165,-5.33131316
248.198591,0.96,0.37,3.15682075,0.18569534,0.05385165,-5.33131316
260.537678,0.97,0.43,0.98639392,0.16439899,0.06082763,-6.0219349
261.869898,0.98,0.5,0.98994949,0.14142136,0.07071068,-7.00035713
278.130102,0.97,0.57,6.08111832,0.14142136,0.07071068,-7.00035713
279.462322,0.96,0.63,5.09636861,0.16439899,0.06082763,-6.0219349
288.434949,0.94,0.69,2.21359436,0.31622777,0.06324555,-3.09903211
299.744881,0.9,0.76,5.82963253,0.12403473,0.08062258,-7.98163517
308.659808,0.86,0.81,1.40556386,0.15617376,0.06403124,-6.339093
315,0.81,0.86,0.70710678,0.70710678,0.07071068,-1.34350288
321.340192,0.76,0.9,4.99756038,0.15617376,0.06403124,-6.339093
329.036243,0.71,0.93,2.22948161,0.17149859,0.05830952,-5.77264238
338.198591,0.66,0.95,3.15682075,0.18569534,0.05385165,-5.33131316
338.198591,0.61,0.97,3.15682075,0.18569534,0.05385165,-5.33131316
350.537678,0.55,0.98,0.98639392,0.16439899,0.06082763,-6.0219349
0,0.5,0.98,0,1,0.05,-0.95
0,0.45,0.98,0,1,0.05,-0.95
11.309932,0.4,0.97,4.11843884,0.19611614,0.0509902,-5.04802932
14.036243,0.36,0.96,3.15296313,0.24253563,0.04123106,-4.08187457
21.801409,0.31,0.94,2.22834406,0.18569534,0.05385165,-5.33131316
21.801409,0.26,0.92,2.22834406,0.18569534,0.05385165,-5.33131316
36.869898,0.22,0.89,1.4,0.2,0.05,-4.95
36.869898,0.18,0.86,1.4,0.2,0.05,-4.95
33.690068,0.75,0.09,1.38675049,0.2773501,0.03605551,-3.56949576
26.565051,0.69,0.06,1.34164079,0.4472136,0.06708204,-2.16898594
21.801409,0.64,0.04,2.22834406,0.18569534,0.05385165,-5.33131316
11.309932,0.59,0.03,4.11843884,0.19611614,0.0509902,-5.04802932
8.130102,0.52,0.02,6.08111832,0.14142136,0.07071068,-7.00035713
0,0.46,0.02,0,1,0.06,-0.94
350.537678,0.4,0.03,0.98639392,0.16439899,0.06082763,-6.0219349
348.690068,0.35,0.04,0.98058068,0.19611614,0.0509902,-5.04802932
338.198591,0.3,0.06,3.15682075,0.18569534,0.05385165,-5.33131316
333.434949,0.26,0.08,0.89442719,0.4472136,0.04472136,-2.19134662
323.130102,0.22,0.11,3.6,0.2,0.05,-4.95
323.130102,0.18,0.14,3.6,0.2,0.05,-4.95
315,0.14,0.18,0.70710678,0.70710678,0.05656854,-1.35764502
306.869898,0.11,0.22,1.4,0.2,0.05,-4.95
306.869898,0.08,0.26,1.4,0.2,0.05,-4.95
296.565051,0.06,0.3,1.34164079,0.4472136,0.04472136,-2.19134662
291.801409,0.04,0.35,2.22834406,0.18569534,0.05385165,-5.33131316
281.309932,0.03,0.4,4.11843884,0.19611614,0.0509902,-5.04802932
281.309932,0.02,0.45,4.11843884,0.19611614,0.0509902,-5.04802932
270,0.02,0.5,0,1,0.05,-0.95
270,0.02,0.55,0,1,0.05,-0.95
258.690068,0.03,0.6,0.98058068,0.19611614,0.0509902,-5.04802932
258.690068,0.04,0.65,0.98058068,0.19611614,0.0509902,-5.04802932
248.198591,0.06,0.7,3.15682075,0.18569534,0.05385165,-5.33131316
243.434949,0.08,0.74,0.89442719,0.4472136,0.04472136,-2.19134662
233.130102,0.11,0.78,3.6,0.2,0.05,-4.95
233.130102,0.14,0.82,3.6,0.2,0.05,-4.95
225,0.18,0.86,0.70710678,0.70710678,0.05656854,-1.35764502
0,0.35,0.21,0,1,0.29,-0.71
180,0.56,0.39,0,1,0.04,-0.96
270,0.56,0.44,0,1,0.05,-0.95
180,0.62,0.44,0,1,0.06,-0.94
270,0.62,0.48,0,1,0.04,-0.96
270,0.98,0.11,0,1,0.01,-0.99
270,0.98,0.13,0,1,0.02,-0.98
45,0.82,0.08,0.70710678,0.70710678,0.14142136,-1.27279221
225,0.9,0.2,0.70710678,0.70710678,0.14142136,-1.27279221
45,0.79,0.11,0.70710678,0.70710678,0.14142136,-1.27279221
0,0.544133,0.559775,0,1,0,-1
0,0.590298,0.634752,0,1,0,-1
0,0.640323,0.720624,0,1,0,-1
135,0.98,0.13,0.70710678,0.70710678,0.49497475,-0.91923882
56.309932,0.96,0.07,2.21880078,0.2773501,0.03605551,-3.56949576
45,0.94,0.05,0.70710678,0.70710678,0.02828427,-1.38592929
33.690068,0.91,0.03,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.88,0.02,2.21359436,0.31622777,0.03162278,-3.13065488
135.806929,0.88,0.02,-1.41407331,0.01991653,0.50209561,-49.70746523
289.983107,0.48,0.48,8.54357658,0.08543577,0.117047,-11.58765291
338.198591,0.53,0.52,3.15682075,0.18569534,0.1077033,-5.27746151
105.945396,0.48,0.48,3.15929297,0.13736056,0.0728011,-7.20730879
218.659808,0.53,0.52,1.40556386,0.15617376,0.06403124,-6.339093
336.801409,0.46,0.55,5.38356375,0.13130643,0.07615773,-7.53961537
56.309932,0.66,0.755,2.21880078,0.2773501,0.01802776,-3.58752352
239.036243,0.475,0.435,2.22948161,0.17149859,0.02915476,-5.80179714
236.309932,0.57,0.6,2.21880078,0.2773501,0.01802776,-3.58752352
236.309932,0.62,0.68,2.21880078,0.2773501,0.01802776,-3.58752352
0,0.46,0.41,0,1,0,-1
0,0.49,0.34,0,1,0.02,-0.98
0,0.54,0.34,0,1,0,-1
0,0.45,0.34,0,1,0,-1
0,0.36,0.34,0,1,0,-1
0,0.27,0.34,0,1,0,-1
180,0.24,0.34,0,1,0.03,-0.97
180,0.33,0.34,0,1,0.03,-0.97
180,0.42,0.34,0,1,0.03,-0.97
239.036243,0.45,0.39,2.22948161,0.17149859,0.05830952,-5.77264238
0,0.44,0.44,0,1,0.05,-0.95
341.565051,0.41,0.45,0.9486833,0.31622777,0.03162278,-3.13065488
315,0.39,0.47,0.70710678,0.70710678,0.02828427,-1.38592929
296.565051,0.38,0.49,1.34164079,0.4472136,0.02236068,-2.2137073
180,0.38,0.49,0,1,0.21,-0.79
240.068488,0.57,0.82,8.06221498,0.02626129,0.38078866,-37.69807687
0,0.63,0.49,0,1,0.18,-0.82
240.255119,0.75,0.7,2.23262522,0.12403473,0.24186773,-7.82039002
`),!1),b(x.ParsePatFile(`
*REDBACK,REDBACK
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
63.434949,0.73,0.78,0.89442719,0.4472136,0.02236068,-2.2137073
33.690068,0.7,0.76,1.38675049,0.2773501,0.03605551,-3.56949576
75.963757,0.69,0.72,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.66,0.72,0,1,0.03,-0.97
108.434949,0.67,0.69,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.67,0.68,0,1,0.01,-0.99
0,0.54,0.57,0,1,0.01,-0.99
270,0.54,0.58,0,1,0.01,-0.99
225,0.55,0.59,0.70710678,0.70710678,0.01414214,-1.40007143
180,0.56,0.59,0,1,0.01,-0.99
315,0.55,0.6,0.70710678,0.70710678,0.01414214,-1.40007143
15.524111,0.37,0.55,7.27991309,0.05352877,0.18681542,-18.49472628
0,0.35,0.55,0,1,0.02,-0.98
45,0.34,0.54,0.70710678,0.70710678,0.01414214,-1.40007143
0,0.31,0.54,0,1,0.03,-0.97
26.565051,0.19,0.48,1.34164079,0.4472136,0.13416408,-2.1019039
0,0.18,0.48,0,1,0.01,-0.99
33.690068,0.15,0.46,1.38675049,0.2773501,0.03605551,-3.56949576
32.005383,0.07,0.41,3.60399279,0.10599979,0.09433981,-9.33964132
45,0.06,0.4,0.70710678,0.70710678,0.01414214,-1.40007143
270,0.06,0.41,0,1,0.01,-0.99
225,0.07,0.42,0.70710678,0.70710678,0.01414214,-1.40007143
213.690068,0.16,0.48,1.38675049,0.2773501,0.10816654,-3.49738474
243.434949,0.17,0.5,0.89442719,0.4472136,0.02236068,-2.2137073
205.016893,0.32,0.57,2.23525175,0.06041221,0.16552945,-16.3874159
189.462322,0.38,0.58,5.09636861,0.16439899,0.06082763,-6.0219349
194.036243,0.42,0.59,3.15296313,0.24253563,0.04123106,-4.08187457
194.036243,0.5,0.61,3.15296313,0.24253563,0.08246211,-4.04064351
198.434949,0.56,0.63,2.21359436,0.31622777,0.06324555,-3.09903211
6.340192,0.47,0.62,8.0615014,0.11043153,0.09055385,-8.96483129
315,0.46,0.63,0.70710678,0.70710678,0.01414214,-1.40007143
45,0.45,0.62,0.70710678,0.70710678,0.01414214,-1.40007143
23.198591,0.38,0.59,2.23220936,0.13130643,0.07615773,-7.53961537
0,0.35,0.59,0,1,0.03,-0.97
45,0.32,0.56,0.70710678,0.70710678,0.04242641,-1.37178716
236.309932,0.34,0.59,2.21880078,0.2773501,0.03605551,-3.56949576
206.565051,0.36,0.6,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.42,0.63,1.34164079,0.4472136,0.06708204,-2.16898594
206.565051,0.44,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.46,0.65,1.34164079,0.4472136,0.02236068,-2.2137073
180,0.57,0.65,0,1,0.11,-0.89
225,0.58,0.66,0.70710678,0.70710678,0.01414214,-1.40007143
321.340192,0.53,0.7,4.99756038,0.15617376,0.06403124,-6.339093
296.565051,0.52,0.72,1.34164079,0.4472136,0.02236068,-2.2137073
285.945396,0.5,0.79,3.15929297,0.13736056,0.0728011,-7.20730879
254.054604,0.52,0.86,4.12081692,0.13736056,0.0728011,-7.20730879
135,0.53,0.85,0.70710678,0.70710678,0.01414214,-1.40007143
90,0.53,0.82,0,1,0.03,-0.97
71.565051,0.52,0.79,0.9486833,0.31622777,0.03162278,-3.13065488
105.945396,0.54,0.72,3.15929297,0.13736056,0.0728011,-7.20730879
135,0.58,0.68,0.70710678,0.70710678,0.05656854,-1.35764502
180,0.59,0.68,0,1,0.01,-0.99
270,0.59,0.69,0,1,0.01,-0.99
270,0.59,0.71,0,1,0.02,-0.98
296.565051,0.58,0.73,1.34164079,0.4472136,0.02236068,-2.2137073
278.130102,0.57,0.8,6.08111832,0.14142136,0.07071068,-7.00035713
251.565051,0.58,0.83,0.9486833,0.31622777,0.03162278,-3.13065488
225,0.59,0.84,0.70710678,0.70710678,0.01414214,-1.40007143
225,0.6,0.85,0.70710678,0.70710678,0.01414214,-1.40007143
243.434949,0.61,0.87,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.63,0.91,0.89442719,0.4472136,0.04472136,-2.19134662
243.434949,0.65,0.95,0.89442719,0.4472136,0.04472136,-2.19134662
225,0.66,0.96,0.70710678,0.70710678,0.01414214,-1.40007143
168.690068,0.81,0.93,0.98058068,0.19611614,0.15297059,-4.94604893
355.601295,0.68,0.94,0.99705449,0.0766965,0.13038405,-12.90802076
56.309932,0.66,0.91,2.21880078,0.2773501,0.03605551,-3.56949576
56.309932,0.64,0.88,2.21880078,0.2773501,0.03605551,-3.56949576
63.434949,0.63,0.86,0.89442719,0.4472136,0.02236068,-2.2137073
56.309932,0.61,0.83,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.6,0.8,0.9486833,0.31622777,0.03162278,-3.13065488
90,0.6,0.79,0,1,0.01,-0.99
90,0.6,0.77,0,1,0.02,-0.98
90,0.6,0.74,0,1,0.03,-0.97
225,0.61,0.75,0.70710678,0.70710678,0.01414214,-1.40007143
243.434949,0.62,0.77,0.89442719,0.4472136,0.02236068,-2.2137073
225,0.63,0.78,0.70710678,0.70710678,0.01414214,-1.40007143
206.565051,0.65,0.79,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.67,0.8,1.34164079,0.4472136,0.02236068,-2.2137073
180,0.69,0.8,0,1,0.02,-0.98
180,0.71,0.8,0,1,0.02,-0.98
180,0.74,0.8,0,1,0.03,-0.97
153.434949,0.76,0.79,0.89442719,0.4472136,0.02236068,-2.2137073
135,0.77,0.78,0.70710678,0.70710678,0.01414214,-1.40007143
135,0.56,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
26.565051,0.77,0.74,1.34164079,0.4472136,0.02236068,-2.2137073
56.309932,0.75,0.71,2.21880078,0.2773501,0.03605551,-3.56949576
14.036243,0.71,0.7,3.15296313,0.24253563,0.04123106,-4.08187457
90,0.71,0.67,0,1,0.03,-0.97
341.565051,0.68,0.68,0.9486833,0.31622777,0.03162278,-3.13065488
0,0.67,0.68,0,1,0.01,-0.99
90,0.56,0.55,0,1,0.01,-0.99
180,0.57,0.55,0,1,0.01,-0.99
225,0.58,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
270,0.58,0.57,0,1,0.01,-0.99
135,0.59,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
74.475889,0.54,0.38,11.4016286,0.05352877,0.18681542,-18.49472628
90,0.54,0.36,0,1,0.02,-0.98
45,0.53,0.35,0.70710678,0.70710678,0.01414214,-1.40007143
90,0.53,0.32,0,1,0.03,-0.97
63.434949,0.47,0.2,0.89442719,0.4472136,0.13416408,-2.1019039
90,0.47,0.19,0,1,0.01,-0.99
56.309932,0.45,0.16,2.21880078,0.2773501,0.03605551,-3.56949576
57.994617,0.4,0.08,5.82998834,0.10599979,0.09433981,-9.33964132
45,0.39,0.07,0.70710678,0.70710678,0.01414214,-1.40007143
180,0.4,0.07,0,1,0.01,-0.99
225,0.41,0.08,0.70710678,0.70710678,0.01414214,-1.40007143
236.309932,0.47,0.17,2.21880078,0.2773501,0.10816654,-3.49738474
206.565051,0.49,0.18,1.34164079,0.4472136,0.02236068,-2.2137073
244.983107,0.56,0.33,14.31769361,0.06041221,0.16552945,-16.3874159
260.537678,0.57,0.39,0.98639392,0.16439899,0.06082763,-6.0219349
255.963757,0.58,0.43,0.9701425,0.24253563,0.04123106,-4.08187457
255.963757,0.6,0.51,0.9701425,0.24253563,0.08246211,-4.04064351
251.565051,0.62,0.57,0.9486833,0.31622777,0.06324555,-3.09903211
83.659808,0.61,0.48,0.99388373,0.11043153,0.09055385,-8.96483129
135,0.62,0.47,0.70710678,0.70710678,0.01414214,-1.40007143
45,0.61,0.46,0.70710678,0.70710678,0.01414214,-1.40007143
66.801409,0.58,0.39,5.38356375,0.13130643,0.07615773,-7.53961537
90,0.58,0.36,0,1,0.03,-0.97
45,0.55,0.33,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.58,0.35,1.38675049,0.2773501,0.03605551,-3.56949576
243.434949,0.59,0.37,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.62,0.43,0.89442719,0.4472136,0.06708204,-2.16898594
243.434949,0.63,0.45,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.64,0.47,0.89442719,0.4472136,0.02236068,-2.2137073
270,0.64,0.58,0,1,0.11,-0.89
225,0.65,0.59,0.70710678,0.70710678,0.01414214,-1.40007143
128.659808,0.69,0.54,1.40556386,0.15617376,0.06403124,-6.339093
153.434949,0.71,0.53,0.89442719,0.4472136,0.02236068,-2.2137073
164.054604,0.78,0.51,4.12081692,0.13736056,0.0728011,-7.20730879
195.945396,0.85,0.53,3.15929297,0.13736056,0.0728011,-7.20730879
315,0.84,0.54,0.70710678,0.70710678,0.01414214,-1.40007143
0,0.81,0.54,0,1,0.03,-0.97
18.434949,0.78,0.53,2.21359436,0.31622777,0.03162278,-3.13065488
344.054604,0.71,0.55,4.12081692,0.13736056,0.0728011,-7.20730879
315,0.67,0.59,0.70710678,0.70710678,0.05656854,-1.35764502
270,0.67,0.6,0,1,0.01,-0.99
180,0.68,0.6,0,1,0.01,-0.99
180,0.7,0.6,0,1,0.02,-0.98
153.434949,0.72,0.59,0.89442719,0.4472136,0.02236068,-2.2137073
171.869898,0.79,0.58,0.98994949,0.14142136,0.07071068,-7.00035713
198.434949,0.82,0.59,2.21359436,0.31622777,0.03162278,-3.13065488
225,0.83,0.6,0.70710678,0.70710678,0.01414214,-1.40007143
225,0.84,0.61,0.70710678,0.70710678,0.01414214,-1.40007143
206.565051,0.86,0.62,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.9,0.64,1.34164079,0.4472136,0.04472136,-2.19134662
206.565051,0.94,0.66,1.34164079,0.4472136,0.04472136,-2.19134662
225,0.95,0.67,0.70710678,0.70710678,0.01414214,-1.40007143
281.309932,0.92,0.82,4.11843884,0.19611614,0.15297059,-4.94604893
94.398705,0.93,0.69,12.04135032,0.0766965,0.13038405,-12.90802076
33.690068,0.9,0.67,1.38675049,0.2773501,0.03605551,-3.56949576
33.690068,0.87,0.65,1.38675049,0.2773501,0.03605551,-3.56949576
26.565051,0.85,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
33.690068,0.82,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.79,0.61,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.78,0.61,0,1,0.01,-0.99
0,0.76,0.61,0,1,0.02,-0.98
0,0.73,0.61,0,1,0.03,-0.97
225,0.74,0.62,0.70710678,0.70710678,0.01414214,-1.40007143
206.565051,0.76,0.63,1.34164079,0.4472136,0.02236068,-2.2137073
225,0.77,0.64,0.70710678,0.70710678,0.01414214,-1.40007143
243.434949,0.78,0.66,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.79,0.68,0.89442719,0.4472136,0.02236068,-2.2137073
270,0.79,0.7,0,1,0.02,-0.98
270,0.79,0.72,0,1,0.02,-0.98
270,0.79,0.75,0,1,0.03,-0.97
296.565051,0.78,0.77,1.34164079,0.4472136,0.02236068,-2.2137073
315,0.77,0.78,0.70710678,0.70710678,0.01414214,-1.40007143
`),!1),b(x.ParsePatFile(`
*SACNCR,SACNCR
45, 0,0, 0,.09375
45, .06629126,0, 0,.09375, 0,-.09375
`),!1),b(x.ParsePatFile(`
*SCAFFOLD, verbose comment
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.76,0.84,1,1,0.02,-0.98
326.3099325,0.26,0.16,2.21880078,0.2773501,0.57688819,-3.02866309
90,0.24,0.49,1,1,0.02,-0.98
270,0.25,0.16,1,1,0.32,-0.68
146.3099325,0.24,0.84,2.21880078,0.2773501,0.5768882,-3.02866307
180,0.76,0.49,0,1,0.02,-0.98
270,0.74,0.18,1,1,0.02,-0.98
0,0.74,0.84,0,1,0.02,-0.98
90,0.25,0.51,1,1,0.31,-0.69
270,0.76,0.51,1,1,0.02,-0.98
0,0.26,0.17,0,1,0.48,-0.52
0,0.24,0.51,0,1,0.02,-0.98
180,0.76,0.18,0,1,0.02,-0.98
90,0.74,0.82,1,1,0.02,-0.98
212.855722,0.24,0.49,20.24844917,0.01750082,0.57140178,-56.56877673
147.144278,0.24,0.18,36.89172934,0.01750082,0.57140178,-56.56877673
213.6900675,0.24,0.16,1.38675049,0.2773501,0.57688818,-3.02866309
180,0.24,0.17,0,1,0.48,-0.52
0,0.26,0.83,0,1,0.48,-0.52
90,0.26,0.16,1,1,0.02,-0.98
180,0.76,0.82,0,1,0.02,-0.98
90,0.74,0.49,1,1,0.02,-0.98
147.144278,0.74,0.18,36.89172934,0.01750082,0.57140179,-56.56877672
0,0.24,0.16,0,1,0.02,-0.98
0,0.26,0.5,0,1,0.48,-0.52
270,0.26,0.84,1,1,0.02,-0.98
90,0.75,0.18,1,1,0.31,-0.69
212.855722,0.74,0.82,20.24844917,0.01750082,0.57140179,-56.56877672
180,0.26,0.49,0,1,0.02,-0.98
270,0.24,0.18,1,1,0.02,-0.98
0,0.24,0.84,0,1,0.02,-0.98
270,0.26,0.51,1,1,0.02,-0.98
270,0.75,0.82,1,1,0.31,-0.69
32.855722,0.26,0.18,20.24844917,0.01750082,0.57140179,-56.56877672
180,0.26,0.18,0,1,0.02,-0.98
0,0.74,0.51,0,1,0.02,-0.98
90,0.76,0.16,1,1,0.02,-0.98
90,0.24,0.82,1,1,0.02,-0.98
180,0.24,0.83,0,1,0.48,-0.52
147.144278,0.24,0.51,36.89172934,0.01750082,0.57140178,-56.56877673
180,0.24,0.5,0,1,0.48,-0.52
270,0.25,0.49,1,1,0.31,-0.69
212.855722,0.24,0.82,20.24844917,0.01750082,0.57140179,-56.56877672
0,0.74,0.16,0,1,0.02,-0.98
270,0.75,0.16,1,1,0.32,-0.68
180,0.26,0.82,0,1,0.02,-0.98
213.6900675,0.74,0.16,1.38675049,0.2773501,0.57688819,-3.02866309
327.144278,0.26,0.82,36.89172934,0.01750082,0.57140179,-56.56877672
`),!1),b(x.ParsePatFile(`
*SQUARE,SQUARE
0, 0,0, 0,.125, .125,-.125
90, 0,0, 0,.125, .125,-.125
`),!1),b(x.ParsePatFile(`
*SQUIGGLE-01,SQUIGGLE-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
45,0.11,-0.39,0.70710678,0.70710678,1.11722871,-0.29698485
56.309932,0.07,0.55,2.21880078,0.2773501,0.07211103,-3.53344025
81.869898,0.06,0.48,0.98994949,0.14142136,0.07071068,-7.00035713
99.462322,0.07,0.42,5.09636861,0.16439899,0.06082763,-6.0219349
123.690068,0.11,0.36,1.38675049,0.2773501,0.07211103,-3.53344025
146.309932,0.17,0.32,2.21880078,0.2773501,0.07211103,-3.53344025
170.537678,0.23,0.31,0.98639392,0.16439899,0.06082763,-6.0219349
188.130102,0.3,0.32,6.08111832,0.14142136,0.07071068,-7.00035713
213.690068,0.36,0.36,1.38675049,0.2773501,0.07211103,-3.53344025
225,0.65,0.65,0.70710678,0.70710678,0.41012193,-1.00409163
213.690068,0.71,0.69,1.38675049,0.2773501,0.07211103,-3.53344025
189.462322,0.77,0.7,5.09636861,0.16439899,0.06082763,-6.0219349
171.869898,0.84,0.69,0.98994949,0.14142136,0.07071068,-7.00035713
146.309932,0.9,0.65,2.21880078,0.2773501,0.07211103,-3.53344025
123.690068,0.94,0.59,1.38675049,0.2773501,0.07211103,-3.53344025
99.462322,0.95,0.53,5.09636861,0.16439899,0.06082763,-6.0219349
81.869898,0.94,0.46,0.98994949,0.14142136,0.07071068,-7.00035713
56.309932,0.9,0.4,2.21880078,0.2773501,0.07211103,-3.53344025
`),!1),b(x.ParsePatFile(`
*SQUIGGLE-02,SQUIGGLE-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
75.963757,0.99,0.16,0.9701425,0.24253563,0.04123106,-4.08187457
63.434949,0.97,0.12,0.89442719,0.4472136,0.04472136,-2.19134662
45,0.94,0.09,0.70710678,0.70710678,0.04242641,-1.37178716
14.036243,0.9,0.08,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.85,0.08,0,1,0.05,-0.95
345.963757,0.81,0.09,0.9701425,0.24253563,0.04123106,-4.08187457
315,0.78,0.12,0.70710678,0.70710678,0.04242641,-1.37178716
296.565051,0.76,0.16,1.34164079,0.4472136,0.04472136,-2.19134662
284.036243,0.75,0.2,3.15296313,0.24253563,0.04123106,-4.08187457
281.309932,0.74,0.85,4.11843884,0.19611614,0.0509902,-5.04802932
303.690068,0.72,0.88,1.38675049,0.2773501,0.03605551,-3.56949576
315,0.69,0.91,0.70710678,0.70710678,0.04242641,-1.37178716
345.963757,0.65,0.92,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.6,0.92,0,1,0.05,-0.95
14.036243,0.56,0.91,3.15296313,0.24253563,0.04123106,-4.08187457
45,0.53,0.88,0.70710678,0.70710678,0.04242641,-1.37178716
56.309932,0.51,0.85,2.21880078,0.2773501,0.03605551,-3.56949576
78.690068,0.5,0.8,0.98058068,0.19611614,0.0509902,-5.04802932
75.963757,0.49,0.16,0.9701425,0.24253563,0.04123106,-4.08187457
63.434949,0.47,0.12,0.89442719,0.4472136,0.04472136,-2.19134662
45,0.44,0.09,0.70710678,0.70710678,0.04242641,-1.37178716
14.036243,0.4,0.08,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.35,0.08,0,1,0.05,-0.95
345.963757,0.31,0.09,0.9701425,0.24253563,0.04123106,-4.08187457
315,0.28,0.12,0.70710678,0.70710678,0.04242641,-1.37178716
296.565051,0.26,0.16,1.34164079,0.4472136,0.04472136,-2.19134662
284.036243,0.25,0.2,3.15296313,0.24253563,0.04123106,-4.08187457
281.309932,0.24,0.85,4.11843884,0.19611614,0.0509902,-5.04802932
303.690068,0.22,0.88,1.38675049,0.2773501,0.03605551,-3.56949576
315,0.19,0.91,0.70710678,0.70710678,0.04242641,-1.37178716
345.963757,0.15,0.92,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.1,0.92,0,1,0.05,-0.95
14.036243,0.06,0.91,3.15296313,0.24253563,0.04123106,-4.08187457
45,0.03,0.88,0.70710678,0.70710678,0.04242641,-1.37178716
56.309932,0.01,0.85,2.21880078,0.2773501,0.03605551,-3.56949576
78.690068,0,0.8,0.98058068,0.19611614,0.0509902,-5.04802932
270,0.75,0.8,0,1,0.6,-0.4
270,0.5,0.8,0,1,0.6,-0.4
270,0.25,0.8,0,1,0.6,-0.4
270,0,0.8,0,1,0.6,-0.4
`),!1),b(x.ParsePatFile(`
*STARS,STARS
0, 0,0, 0,.21650635, .125,-.125
60, 0,0, 0,.21650635, .125,-.125
120, .0625,.10825318, 0,.21650635, .125,-.125
`),!1),b(x.ParsePatFile(`
*STEEL,STEEL
45, 0,0, 0,.125
45, 0,.0625, 0,.125
`),!1),b(x.ParsePatFile(`
*SWAMP,SWAMP
0, 0,0, .5,.8660254, .125,-.875
90, .0625,0, .8660254,.5, .0625,-1.66955081
90, .078125,0, .8660254,.5, .05,-1.68205081
90, .046875,0, .8660254,.5, .05,-1.68205081
60, .09375,0, .5,.8660254, .04,-.96
120, .03125,0, .5,.8660254, .04,-.96
`),!1),b(x.ParsePatFile(`
*TRANS,TRANS
0, 0,0, 0,.25
0, 0,.125, 0,.25, .125,-.125
`),!1),b(x.ParsePatFile(`
*TRIANG,TRIANG
60, 0,0, .1875,.32475953, .1875,-.1875
120, 0,0, .1875,.32475953, .1875,-.1875
0, -.09375,.16237976, .1875,.32475953, .1875,-.1875
`),!1),b(x.ParsePatFile(`
*TRI-OVERLAP,TRI-OVERLAP verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
59.641885,0.09000001,0.15,47.50789248,0.01232691,0.81123363,-80.31212922
300.358115,0.5,0.85000001,33.61547037,0.01232691,0.81123363,-80.31212922
180,0.35942857,0.61,0,1,0.71885753,-0.28114247
59.036243,0.89518072,0.17530121,2.22948161,0.17149859,0.20373205,-5.62721984
180,0.91,0.15,0,1,0.81999999,-0.18000001
300.963757,0,0.35,3.60147029,0.17149859,0.20373206,-5.62721983
300.784147,0.12,0.15,5.83092324,0.01827876,0.5470832,-54.16123426
239.215853,0.88,0.15,48.87739422,0.01827876,0.5470832,-54.16123426
`),!1),b(x.ParsePatFile(`
*WEATHERBOARD,WEATHERBOARD
; By John Hyslop,    Manually Entered QCAD3 pattern
; Developed in inch as imperial QCAD3 pattern
; Imperial Hatch Scale 1 Makes 6inch horizontally placed boards
; with a 0.5in offset line to simulate a rounded edge
0,0,0,0,6
0,0,0.5,0,6
`),!1),b(x.ParsePatFile(`
*WEAVING,WEAVING
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,0.9,0.2,0,1,0.05,-0.95
75.963757,0.88,0.12,0.9701425,0.24253563,0.08246211,-4.04064351
66.801409,0.85,0.05,5.38356375,0.13130643,0.07615773,-7.53961537
54.462322,0.8,-0.02,3.6036768,0.11624764,0.08602325,-8.51630201
56.309932,0.76,-0.08,2.21880078,0.2773501,0.07211103,-3.53344025
90,0.79,0.22,0,1,0.07,-0.93
80.537678,0.78,0.16,0.98639392,0.16439899,0.06082763,-6.0219349
63.434949,0.75,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
56.309932,0.71,0.04,2.21880078,0.2773501,0.07211103,-3.53344025
56.309932,0.67,-0.02,2.21880078,0.2773501,0.07211103,-3.53344025
333.434949,0.86,0.27,0.89442719,0.4472136,0.06708204,-2.16898594
344.054604,0.79,0.29,4.12081692,0.13736056,0.0728011,-7.20730879
0,0.71,0.29,0,1,0.08,-0.92
9.462322,0.65,0.28,5.09636861,0.16439899,0.06082763,-6.0219349
26.565051,0.59,0.25,1.34164079,0.4472136,0.06708204,-2.16898594
38.659808,0.54,0.21,1.40556386,0.15617376,0.06403124,-6.339093
36.869898,0.46,0.15,1.4,0.2,0.1,-4.9
20.556045,0.38,0.12,5.38389277,0.11704115,0.08544004,-8.45856371
330.255119,0.91,0.37,2.23262522,0.12403473,0.08062258,-7.98163517
344.054604,0.84,0.39,4.12081692,0.13736056,0.0728011,-7.20730879
352.874984,0.76,0.4,0.99227788,0.12403473,0.08062258,-7.98163517
0,0.69,0.4,0,1,0.07,-0.93
14.036243,0.61,0.38,3.15296313,0.24253563,0.08246211,-4.04064351
26.565051,0.53,0.34,1.34164079,0.4472136,0.08944272,-2.14662526
33.690068,0.47,0.3,1.38675049,0.2773501,0.07211103,-3.53344025
35.537678,0.4,0.25,4.99864847,0.11624764,0.08602325,-8.51630201
0,0.2,0.1,0,1,0.05,-0.95
348.690068,0.15,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
341.565051,0.12,0.12,0.9486833,0.31622777,0.03162278,-3.13065488
336.801409,0.05,0.15,5.38356375,0.13130643,0.07615773,-7.53961537
326.309932,-0.01,0.19,2.21880078,0.2773501,0.07211103,-3.53344025
324.462322,-0.08,0.24,3.6036768,0.11624764,0.08602325,-8.51630201
0,0.22,0.21,0,1,0.07,-0.93
350.537678,0.16,0.22,0.98639392,0.16439899,0.06082763,-6.0219349
333.434949,0.1,0.25,0.89442719,0.4472136,0.06708204,-2.16898594
326.309932,0.04,0.29,2.21880078,0.2773501,0.07211103,-3.53344025
326.309932,-0.02,0.33,2.21880078,0.2773501,0.07211103,-3.53344025
60.255119,0.63,0.91,2.23262522,0.12403473,0.08062258,-7.98163517
180,0.79,0.79,0,1,0.08,-0.92
164.054604,0.86,0.77,4.12081692,0.13736056,0.0728011,-7.20730879
153.434949,0.92,0.74,0.89442719,0.4472136,0.06708204,-2.16898594
330.255119,0.91,0.87,2.23262522,0.12403473,0.08062258,-7.98163517
345.963757,0.83,0.89,0.9701425,0.24253563,0.08246211,-4.04064351
352.874984,0.75,0.9,0.99227788,0.12403473,0.08062258,-7.98163517
60.255119,0.72,0.85,2.23262522,0.12403473,0.08062258,-7.98163517
80.537678,0.71,0.79,0.98639392,0.16439899,0.06082763,-6.0219349
90,0.71,0.71,0,1,0.08,-0.92
104.036243,0.73,0.63,3.15296313,0.24253563,0.08246211,-4.04064351
116.565051,0.76,0.57,1.34164079,0.4472136,0.06708204,-2.16898594
129.805571,0.81,0.51,1.40840568,0.12803688,0.0781025,-7.73214718
123.690068,0.85,0.45,1.38675049,0.2773501,0.07211103,-3.53344025
113.198591,0.88,0.38,2.23220936,0.13130643,0.07615773,-7.53961537
309.805571,0.71,0.46,1.40840568,0.12803688,0.0781025,-7.73214718
305.537678,0.66,0.53,4.99864847,0.11624764,0.08602325,-8.51630201
299.744881,0.62,0.6,5.82963253,0.12403473,0.08062258,-7.98163517
285.945396,0.6,0.67,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.6,0.76,0,1,0.09,-0.91
74.054604,0.61,0.84,4.12081692,0.13736056,0.0728011,-7.20730879
82.874984,0.6,0.76,0.99227788,0.12403473,0.08062258,-7.98163517
39.805571,0.54,0.71,1.40840568,0.12803688,0.0781025,-7.73214718
35.537678,0.47,0.66,4.99864847,0.11624764,0.08602325,-8.51630201
33.690068,0.41,0.62,1.38675049,0.2773501,0.07211103,-3.53344025
15.945396,0.34,0.6,3.15929297,0.13736056,0.0728011,-7.20730879
6.340192,0.25,0.59,8.0615014,0.11043153,0.09055385,-8.96483129
350.537678,0.19,0.6,0.98639392,0.16439899,0.06082763,-6.0219349
344.054604,0.12,0.62,4.12081692,0.13736056,0.0728011,-7.20730879
23.198591,0.55,0.85,2.23220936,0.13130643,0.07615773,-7.53961537
29.744881,0.48,0.81,5.82963253,0.12403473,0.08062258,-7.98163517
39.805571,0.42,0.76,1.40840568,0.12803688,0.0781025,-7.73214718
29.744881,0.35,0.72,5.82963253,0.12403473,0.08062258,-7.98163517
7.125016,0.27,0.71,7.06997987,0.12403473,0.08062258,-7.98163517
0,0.21,0.71,0,1,0.06,-0.94
344.054604,0.14,0.73,4.12081692,0.13736056,0.0728011,-7.20730879
333.434949,0.1,0.75,0.89442719,0.4472136,0.04472136,-2.19134662
234.462322,0.31,-0.01,3.6036768,0.11624764,0.08602325,-8.51630201
240.255119,0.35,0.06,2.23262522,0.12403473,0.08062258,-7.98163517
243.434949,0.39,0.14,0.89442719,0.4472136,0.08944272,-2.14662526
262.874984,0.4,0.22,0.99227788,0.12403473,0.08062258,-7.98163517
270,0.4,0.3,0,1,0.08,-0.92
282.528808,0.38,0.39,4.1216787,0.10846523,0.09219544,-9.12734901
293.198591,0.35,0.46,2.23220936,0.13130643,0.07615773,-7.53961537
309.805571,0.3,0.52,1.40840568,0.12803688,0.0781025,-7.73214718
305.537678,0.25,0.59,4.99864847,0.11624764,0.08602325,-8.51630201
270,0.21,0.78,0,1,0.07,-0.93
254.054604,0.23,0.85,4.12081692,0.13736056,0.0728011,-7.20730879
246.801409,0.26,0.92,5.38356375,0.13130643,0.07615773,-7.53961537
236.309932,0.21,0.04,2.21880078,0.2773501,0.07211103,-3.53344025
234.462322,0.26,0.11,3.6036768,0.11624764,0.08602325,-8.51630201
249.443955,0.29,0.19,3.16011097,0.11704115,0.08544004,-8.45856371
270,0.29,0.27,0,1,0.08,-0.92
278.130102,0.28,0.34,6.08111832,0.14142136,0.07071068,-7.00035713
296.565051,0.24,0.42,1.34164079,0.4472136,0.08944272,-2.14662526
309.805571,0.19,0.48,1.40840568,0.12803688,0.0781025,-7.73214718
303.690068,0.15,0.54,1.38675049,0.2773501,0.07211103,-3.53344025
290.556045,0.12,0.62,5.38389277,0.11704115,0.08544004,-8.45856371
341.565051,0.06,0.64,0.9486833,0.31622777,0.06324555,-3.09903211
324.462322,-0.01,0.69,3.6036768,0.11624764,0.08602325,-8.51630201
324.462322,-0.08,0.74,3.6036768,0.11624764,0.08602325,-8.51630201
146.309932,0.04,0.79,2.21880078,0.2773501,0.07211103,-3.53344025
146.309932,0.1,0.75,2.21880078,0.2773501,0.07211103,-3.53344025
262.874984,0.11,0.83,0.99227788,0.12403473,0.08062258,-7.98163517
255.963757,0.13,0.91,0.9701425,0.24253563,0.08246211,-4.04064351
240.255119,0.17,0.98,2.23262522,0.12403473,0.08062258,-7.98163517
`),!1),b(x.ParsePatFile(`
*WIRE-FENCE,WIRE-FENCE verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
315,0.46,0.5,0.70710678,0.70710678,0.04673053,-1.36748303
315,0.52571429,0.56428571,0.70710678,0.70710678,0.04848732,-1.36572624
3.731397,0.50267394,0.56278308,15.03328073,0.02169305,0.02308929,-46.074633
183.17983,0.46361415,0.56023571,17.02929602,0.05547002,0.90614559,-17.12161079
183.17983,0.46120401,0.52006684,17.02929602,0.05547002,0.90600202,-17.12175436
153.434949,0.52,0.51,0.89442719,0.4472136,0.02236068,-2.2137073
266.593556,0.52,0.51,17.02938222,0.01188373,1.01178655,-83.1368914
266.593556,0.56,0.53,17.02938222,0.01188373,1.01178655,-83.1368914
2.602562,0.49304348,0.46695652,21.02374701,0.04540766,0.02449081,-21.99822474
`),!1),b(x.ParsePatFile(`
*XMASTREE-01,XMASTREE-01
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.04,0.95,0,1,0.04,-0.96
90,0.04,0.82,0,1,0.13,-0.87
180,0.33,0.82,0,1,0.29,-0.71
49.763642,0.22,0.69,7.81002892,0.05872202,0.17029386,-16.8590925
180,0.28,0.69,0,1,0.06,-0.94
51.340192,0.16,0.54,4.99756038,0.15617376,0.19209373,-6.21103051
180,0.22,0.54,0,1,0.06,-0.94
52.431408,0.12,0.41,4.99962824,0.06097108,0.16401219,-16.23720727
180,0.17,0.41,0,1,0.05,-0.95
53.130102,0.08,0.29,3.6,0.2,0.15,-4.85
180,0.13,0.29,0,1,0.05,-0.95
53.972627,0.05,0.18,8.60201108,0.07352146,0.13601471,-13.4654558
180,0.1,0.18,0,1,0.05,-0.95
54.462322,0,0.04,3.6036768,0.11624764,0.17204651,-8.43027876
0,0.96,0.95,0,1,0.04,-0.96
90,0.96,0.82,0,1,0.13,-0.87
0,0.67,0.82,0,1,0.29,-0.71
130.236358,0.78,0.69,9.21935745,0.05872202,0.17029386,-16.8590925
0,0.72,0.69,0,1,0.06,-0.94
128.659808,0.84,0.54,1.40556386,0.15617376,0.19209373,-6.21103051
0,0.78,0.54,0,1,0.06,-0.94
127.568592,0.88,0.41,11.40159123,0.06097108,0.16401219,-16.23720727
0,0.83,0.41,0,1,0.05,-0.95
126.869898,0.92,0.29,1.4,0.2,0.15,-4.85
0,0.87,0.29,0,1,0.05,-0.95
126.027373,0.95,0.18,4.99945943,0.07352146,0.13601471,-13.4654558
0,0.9,0.18,0,1,0.05,-0.95
125.537678,1,0.04,4.99864847,0.11624764,0.17204651,-8.43027876
0,0.46,0.04,0,1,0.04,-0.96
270,0.46,0.17,0,1,0.13,-0.87
0,0.17,0.17,0,1,0.29,-0.71
229.763642,0.28,0.3,7.81002892,0.05872202,0.17029386,-16.8590925
0,0.22,0.3,0,1,0.06,-0.94
231.340192,0.34,0.45,4.99756038,0.15617376,0.19209373,-6.21103051
0,0.28,0.45,0,1,0.06,-0.94
232.431408,0.38,0.58,4.99962824,0.06097108,0.16401219,-16.23720727
0,0.33,0.58,0,1,0.05,-0.95
233.130102,0.42,0.7,3.6,0.2,0.15,-4.85
0,0.37,0.7,0,1,0.05,-0.95
233.972627,0.45,0.81,8.60201108,0.07352146,0.13601471,-13.4654558
0,0.4,0.81,0,1,0.05,-0.95
234.462322,0.5,0.95,3.6036768,0.11624764,0.17204651,-8.43027876
180,0.54,0.04,0,1,0.04,-0.96
270,0.54,0.17,0,1,0.13,-0.87
180,0.83,0.17,0,1,0.29,-0.71
310.236358,0.72,0.3,9.21935745,0.05872202,0.17029386,-16.8590925
180,0.78,0.3,0,1,0.06,-0.94
308.659808,0.66,0.45,1.40556386,0.15617376,0.19209373,-6.21103051
180,0.72,0.45,0,1,0.06,-0.94
307.568592,0.62,0.58,11.40159123,0.06097108,0.16401219,-16.23720727
180,0.67,0.58,0,1,0.05,-0.95
306.869898,0.58,0.7,1.4,0.2,0.15,-4.85
180,0.63,0.7,0,1,0.05,-0.95
306.027373,0.55,0.81,4.99945943,0.07352146,0.13601471,-13.4654558
180,0.6,0.81,0,1,0.05,-0.95
305.537678,0.5,0.95,4.99864847,0.11624764,0.17204651,-8.43027876
`),!1),b(x.ParsePatFile(`
*XMASTREE-02,XMASTREE-02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.04,0.26,0,1,0.04,-0.96
90,0.04,0.13,0,1,0.13,-0.87
180,0.33,0.13,0,1,0.29,-0.71
49.763642,0.22,0,7.81002892,0.05872202,0.17029386,-16.8590925
180,0.28,1,0,1,0.06,-0.94
51.340192,0.16,0.85,4.99756038,0.15617376,0.19209373,-6.21103051
180,0.22,0.85,0,1,0.06,-0.94
52.431408,0.12,0.72,4.99962824,0.06097108,0.16401219,-16.23720727
180,0.17,0.72,0,1,0.05,-0.95
53.130102,0.08,0.6,3.6,0.2,0.15,-4.85
180,0.13,0.6,0,1,0.05,-0.95
53.972627,0.05,0.49,8.60201108,0.07352146,0.13601471,-13.4654558
180,0.1,0.49,0,1,0.05,-0.95
54.462322,0,0.35,3.6036768,0.11624764,0.17204651,-8.43027876
0,0.96,0.26,0,1,0.04,-0.96
90,0.96,0.13,0,1,0.13,-0.87
0,0.67,0.13,0,1,0.29,-0.71
130.236358,0.78,0,9.21935745,0.05872202,0.17029386,-16.8590925
0,0.72,1,0,1,0.06,-0.94
128.659808,0.84,0.85,1.40556386,0.15617376,0.19209373,-6.21103051
0,0.78,0.85,0,1,0.06,-0.94
127.568592,0.88,0.72,11.40159123,0.06097108,0.16401219,-16.23720727
0,0.83,0.72,0,1,0.05,-0.95
126.869898,0.92,0.6,1.4,0.2,0.15,-4.85
0,0.87,0.6,0,1,0.05,-0.95
126.027373,0.95,0.49,4.99945943,0.07352146,0.13601471,-13.4654558
0,0.9,0.49,0,1,0.05,-0.95
125.537678,1,0.35,4.99864847,0.11624764,0.17204651,-8.43027876
0,0.46,0.09,0,1,0.04,-0.96
270,0.46,0.22,0,1,0.13,-0.87
0,0.17,0.22,0,1,0.29,-0.71
229.763642,0.28,0.35,7.81002892,0.05872202,0.17029386,-16.8590925
0,0.22,0.35,0,1,0.06,-0.94
231.340192,0.34,0.5,4.99756038,0.15617376,0.19209373,-6.21103051
0,0.28,0.5,0,1,0.06,-0.94
232.431408,0.38,0.63,4.99962824,0.06097108,0.16401219,-16.23720727
0,0.33,0.63,0,1,0.05,-0.95
233.130102,0.42,0.75,3.6,0.2,0.15,-4.85
0,0.37,0.75,0,1,0.05,-0.95
233.972627,0.45,0.86,8.60201108,0.07352146,0.13601471,-13.4654558
0,0.4,0.86,0,1,0.05,-0.95
234.462322,0.5,1,3.6036768,0.11624764,0.17204651,-8.43027876
180,0.54,0.09,0,1,0.04,-0.96
270,0.54,0.22,0,1,0.13,-0.87
180,0.83,0.22,0,1,0.29,-0.71
310.236358,0.72,0.35,9.21935745,0.05872202,0.17029386,-16.8590925
180,0.78,0.35,0,1,0.06,-0.94
308.659808,0.66,0.5,1.40556386,0.15617376,0.19209373,-6.21103051
180,0.72,0.5,0,1,0.06,-0.94
307.568592,0.62,0.63,11.40159123,0.06097108,0.16401219,-16.23720727
180,0.67,0.63,0,1,0.05,-0.95
306.869898,0.58,0.75,1.4,0.2,0.15,-4.85
180,0.63,0.75,0,1,0.05,-0.95
306.027373,0.55,0.86,4.99945943,0.07352146,0.13601471,-13.4654558
180,0.6,0.86,0,1,0.05,-0.95
305.537678,0.5,1,4.99864847,0.11624764,0.17204651,-8.43027876
`),!1),b(x.ParsePatFile(`
*ZIGZAG,ZIGZAG
0, 0,0, .125,.125, .125,-.125
90, .125,0, .125,.125, .125,-.125
`),!1);function H8(n,e,t=2){const r=e&&e.length,s=r?e[0]*t:n.length;let i=et(n,0,s,t,!0);const a=[];if(!i||i.next===i.prev)return a;let o,l,c;if(r&&(i=Z8(n,e,i,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let p=t;p<s;p+=t){const d=n[p],v=n[p+1];d<o&&(o=d),v<l&&(l=v),d>u&&(u=d),v>f&&(f=v)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return E2(i,a,t,o,l,c,0),a}function et(n,e,t,r,s){let i;if(s===sn(n,e,t,r)>0)for(let a=e;a<t;a+=r)i=st(a/r|0,n[a],n[a+1],i);else for(let a=t-r;a>=e;a-=r)i=st(a/r|0,n[a],n[a+1],i);return i&&r2(i,i.next)&&(A2(i),i=i.next),i}function G1(n,e){if(!n)return n;e||(e=n);let t=n,r;do if(r=!1,!t.steiner&&(r2(t,t.next)||x0(t.prev,t,t.next)===0)){if(A2(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function E2(n,e,t,r,s,i,a){if(!n)return;!a&&i&&K8(n,r,s,i);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(i?W8(n,r,s,i):V8(n)){e.push(l.i,n.i,c.i),A2(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=X8(G1(n),e),E2(n,e,t,r,s,i,2)):a===2&&Y8(n,e,t,r,s,i):E2(G1(n),e,t,r,s,i,1);break}}}function V8(n){const e=n.prev,t=n,r=n.next;if(x0(e,t,r)>=0)return!1;const s=e.x,i=t.x,a=r.x,o=e.y,l=t.y,c=r.y,u=Math.min(s,i,a),f=Math.min(o,l,c),p=Math.max(s,i,a),d=Math.max(o,l,c);let v=r.next;for(;v!==e;){if(v.x>=u&&v.x<=p&&v.y>=f&&v.y<=d&&C2(s,o,i,l,a,c,v.x,v.y)&&x0(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function W8(n,e,t,r){const s=n.prev,i=n,a=n.next;if(x0(s,i,a)>=0)return!1;const o=s.x,l=i.x,c=a.x,u=s.y,f=i.y,p=a.y,d=Math.min(o,l,c),v=Math.min(u,f,p),y=Math.max(o,l,c),m=Math.max(u,f,p),g=x4(d,v,e,t,r),P=x4(y,m,e,t,r);let S=n.prevZ,w=n.nextZ;for(;S&&S.z>=g&&w&&w.z<=P;){if(S.x>=d&&S.x<=y&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&C2(o,u,l,f,c,p,S.x,S.y)&&x0(S.prev,S,S.next)>=0||(S=S.prevZ,w.x>=d&&w.x<=y&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&C2(o,u,l,f,c,p,w.x,w.y)&&x0(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=y&&S.y>=v&&S.y<=m&&S!==s&&S!==a&&C2(o,u,l,f,c,p,S.x,S.y)&&x0(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;w&&w.z<=P;){if(w.x>=d&&w.x<=y&&w.y>=v&&w.y<=m&&w!==s&&w!==a&&C2(o,u,l,f,c,p,w.x,w.y)&&x0(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function X8(n,e){let t=n;do{const r=t.prev,s=t.next.next;!r2(r,s)&&nt(r,t,t.next,s)&&P2(r,s)&&P2(s,r)&&(e.push(r.i,t.i,s.i),A2(t),A2(t.next),t=n=s),t=t.next}while(t!==n);return G1(t)}function Y8(n,e,t,r,s,i){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&tn(a,o)){let l=rt(a,o);a=G1(a,a.next),l=G1(l,l.next),E2(a,e,t,r,s,i,0),E2(l,e,t,r,s,i,0);return}o=o.next}a=a.next}while(a!==n)}function Z8(n,e,t,r){const s=[];for(let i=0,a=e.length;i<a;i++){const o=e[i]*r,l=i<a-1?e[i+1]*r:n.length,c=et(n,o,l,r,!1);c===c.next&&(c.steiner=!0),s.push(en(c))}s.sort(J8);for(let i=0;i<s.length;i++)t=j8(s[i],t);return t}function J8(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const r=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=r-s}return t}function j8(n,e){const t=Q8(n,e);if(!t)return e;const r=rt(t,n);return G1(r,r.next),G1(t,t.next)}function Q8(n,e){let t=e;const r=n.x,s=n.y;let i=-1/0,a;if(r2(n,t))return t;do{if(r2(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,a=t.x<t.next.x?t:t.next,f===r))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(r>=t.x&&t.x>=l&&r!==t.x&&tt(s<c?r:i,s,l,c,s<c?i:r,s,t.x,t.y)){const f=Math.abs(s-t.y)/(r-t.x);P2(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&q8(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function q8(n,e){return x0(n.prev,n,e.prev)<0&&x0(e.next,n,n.next)<0}function K8(n,e,t,r){let s=n;do s.z===0&&(s.z=x4(s.x,s.y,e,t,r)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$8(s)}function $8(n){let e,t=1;do{let r=n,s;n=null;let i=null;for(e=0;r;){e++;let a=r,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||r.z<=a.z)?(s=r,r=r.nextZ,o--):(s=a,a=a.nextZ,l--),i?i.nextZ=s:n=s,s.prevZ=i,i=s;r=a}i.nextZ=null,t*=2}while(e>1);return n}function x4(n,e,t,r,s){return n=(n-t)*s|0,e=(e-r)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function en(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function tt(n,e,t,r,s,i,a,o){return(s-a)*(e-o)>=(n-a)*(i-o)&&(n-a)*(r-o)>=(t-a)*(e-o)&&(t-a)*(i-o)>=(s-a)*(r-o)}function C2(n,e,t,r,s,i,a,o){return!(n===a&&e===o)&&tt(n,e,t,r,s,i,a,o)}function tn(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!nn(n,e)&&(P2(n,e)&&P2(e,n)&&rn(n,e)&&(x0(n.prev,n,e.prev)||x0(n,e.prev,e))||r2(n,e)&&x0(n.prev,n,n.next)>0&&x0(e.prev,e,e.next)>0)}function x0(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function r2(n,e){return n.x===e.x&&n.y===e.y}function nt(n,e,t,r){const s=he(x0(n,e,t)),i=he(x0(n,e,r)),a=he(x0(t,r,n)),o=he(x0(t,r,e));return!!(s!==i&&a!==o||s===0&&ce(n,t,e)||i===0&&ce(n,r,e)||a===0&&ce(t,n,r)||o===0&&ce(t,e,r))}function ce(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function he(n){return n>0?1:n<0?-1:0}function nn(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&nt(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function P2(n,e){return x0(n.prev,n,n.next)<0?x0(n,e,n.next)>=0&&x0(n,n.prev,e)>=0:x0(n,e,n.prev)<0||x0(n,n.next,e)<0}function rn(n,e){let t=n,r=!1;const s=(n.x+e.x)/2,i=(n.y+e.y)/2;do t.y>i!=t.next.y>i&&t.next.y!==t.y&&s<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==n);return r}function rt(n,e){const t=b4(n.i,n.x,n.y),r=b4(e.i,e.x,e.y),s=n.next,i=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function st(n,e,t,r){const s=b4(n,e,t);return r?(s.next=r.next,s.prev=r,r.next.prev=s,r.next=s):(s.prev=s,s.next=s),s}function A2(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function b4(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sn(n,e,t,r){let s=0;for(let i=e,a=t-r;i<t;i+=r)s+=(n[a]-n[i])*(n[i+1]+n[a+1]),a=i;return s}const z1=65536,an=15*Math.PI/180,it="__point_shape",on=1024,at=4,ln=2e4,cn=2e4,ot={DIMTXT:function(){return 2.5},DIMASZ:2.5,DIMCLRD:0,DIMCLRE:0,DIMCLRT:0,DIMDEC:2,DIMDLE:0,DIMDSEP:46,DIMEXE:1.25,DIMEXO:.625,DIMFXL:1,DIMFXLON:!1,DIMGAP:.625,DIMLFAC:1,DIMRND:0,DIMSAH:0,DIMSCALE:1,DIMSD1:0,DIMSD2:0,DIMSE1:0,DIMSE2:0,DIMSOXD:!1,DIMTSZ:0,DIMZIN:8};class k2{constructor(e){this.options=Object.create(k2.DefaultOptions),e&&Object.assign(this.options,e.sceneOptions),this.origin=null,this.batches=new w2((t,r)=>t.key.Compare(r.key)),this.layers=new Map,this.blocks=new Map,this.dimStyles=new Map,this.vars=new Map,this.fontStyles=new Map,this.inserts=new Map,this.bounds=null,this.pointShapeBlock=null,this.numBlocksFlattened=0,this.numEntitiesFiltered=0}async Build(e,t){const r=e.header||{};for(const[s,i]of Object.entries(r))s.startsWith("$")&&this.vars.set(s.slice(1),i);if(this.angBase=this.vars.get("ANGBASE")??0,this.angDir=this.vars.get("ANGDIR")??0,this.pdMode=this.vars.get("PDMODE")??0,this.pdSize=this.vars.get("PDSIZE")??0,this.attMode=this.vars.get("ATTMODE")??1,this.isMetric=(this.vars.get("MEASUREMENT")??1)==1,e.tables&&e.tables.layer)for(const[,s]of Object.entries(e.tables.layer.layers))s.displayName=K0(s.name),this.layers.set(s.name,s);if(e.tables&&e.tables.dimstyle)for(const[,s]of Object.entries(e.tables.dimstyle.dimStyles))this.dimStyles.set(s.name,s);if(e.tables&&e.tables.style)for(const[,s]of Object.entries(e.tables.style.styles))this.fontStyles.set(s.styleName,s);if(e.blocks)for(const[,s]of Object.entries(e.blocks))this.blocks.set(s.name,new lt(s));this.textRenderer=new S2(t,this.options.textOptions),this.hasMissingChars=!1,await this._FetchFonts(e);for(const s of e.entities)if(this._FilterEntity(s)){if(s.type==="INSERT"){this.inserts.set(s.handle,s);const i=this.blocks.get(s.name);i==null||i.RegisterInsert(s)}else if(s.type=="DIMENSION"&&(s.block??null)!==null){const i=this.blocks.get(s.block);i==null||i.RegisterInsert(s)}}for(const s of this.blocks.values()){if(s.data.hasOwnProperty("entities")){const i=s.DefinitionContext();for(const a of s.data.entities)this._FilterEntity(a)&&(a.type==="ATTDEF"?this._DecomposeAttdef(a,s):this._ProcessDxfEntity(a,i))}s.SetFlatten()&&this.numBlocksFlattened++}console.log(`${this.numBlocksFlattened} blocks flattened`);for(const s of e.entities){if(!this._FilterEntity(s)){this.numEntitiesFiltered++;continue}this._ProcessDxfEntity(s)}console.log(`${this.numEntitiesFiltered} entities filtered`),this.scene=this._BuildScene(),delete this.batches,delete this.layers,delete this.blocks,delete this.textRenderer}_FilterEntity(e){if(e.type==="ATTRIB"&&this.attMode===0||e.hidden&&!(this.attMode===2&&e.type==="ATTRIB"))return!1;const t=this._GetEntityLayer(e);if(t!="0"){const r=this.layers.get(t);if(r!=null&&r.frozen)return!1}return!this.options.suppressPaperSpace||!e.inPaperSpace}async _FetchFonts(e){function t(s){return s.type==="TEXT"||s.type==="MTEXT"||s.type==="DIMENSION"||s.type==="ATTDEF"||s.type==="ATTRIB"}const r=async s=>{if(!this._FilterEntity(s))return!0;let i;if(s.type==="TEXT"||s.type==="ATTRIB"||s.type==="ATTDEF")i=await this.textRenderer.FetchFonts(K0(s.text||""));else if(s.type==="MTEXT"){const a=new b1;a.Parse(s.text),i=!0;for(const o of a.GetText())if(!await this.textRenderer.FetchFonts(K0(o))){i=!1;break}}else if(s.type==="DIMENSION"){i=!0;const a=this._CreateDimension(s);if(a){for(const o of a.GetTexts())if(!await this.textRenderer.FetchFonts(o)){i=!1;break}}}else throw new Error("Bad entity type");return i||(this.hasMissingChars=!0),i};for(const s of e.entities)if(t(s)){if(!await r(s))return}else if(s.type==="INSERT"&&s.attribs){for(const i of s.attribs)if(!await r(i))return}for(const s of this.blocks.values())if(s.data.hasOwnProperty("entities")){for(const i of s.data.entities)if(t(i)){if(!await r(i))return}else if(i.type==="INSERT"&&i.attribs){for(const a of i.attribs)if(!await r(a))return}}}_ProcessDxfEntity(e,t=null){let r;switch(e.type){case"LINE":r=this._DecomposeLine(e,t);break;case"POLYLINE":case"LWPOLYLINE":r=this._DecomposePolyline(e,t);break;case"ARC":r=this._DecomposeArc(e,t);break;case"CIRCLE":r=this._DecomposeCircle(e,t);break;case"ELLIPSE":r=this._DecomposeEllipse(e,t);break;case"POINT":r=this._DecomposePoint(e,t);break;case"SPLINE":r=this._DecomposeSpline(e,t);break;case"INSERT":this._ProcessInsert(e,t);return;case"TEXT":r=this._DecomposeText(e,t);break;case"MTEXT":r=this._DecomposeMText(e,t);break;case"3DFACE":r=this._Decompose3DFace(e,t);break;case"SOLID":r=this._DecomposeSolid(e,t);break;case"DIMENSION":r=this._DecomposeDimension(e,t);break;case"ATTRIB":if(e.ownerHandle&&this.inserts&&this.inserts.has(e.ownerHandle))return;r=this._DecomposeAttribute(e,t);break;case"HATCH":r=this._DecomposeHatch(e,t);break;case"LEADER":r=this._DecomposeLeader(e,t);break;case"MULTILEADER":r=this._DecomposeMultiLeader(e,t);break;default:console.log("Unhandled entity type: "+e.type);return}for(const s of r)s.dxfType=e.type,s.dxfHandle=e.handle,this._ProcessEntity(s,t)}_ProcessEntity(e,t=null){switch(e.type){case G.Type.POINTS:this._ProcessPoints(e,t);break;case G.Type.LINE_SEGMENTS:this._ProcessLineSegments(e,t);break;case G.Type.POLYLINE:this._ProcessPolyline(e,t);break;case G.Type.TRIANGLES:this._ProcessTriangles(e,t);break;default:throw new Error("Unhandled entity type: "+e.type)}}_GetLineType(e,t=null,r=null){return 0}_IsPlainLine(e){return!0}*_DecomposeLine(e,t){if(e.vertices.length!==2)return;const r=this._GetEntityLayer(e,t),s=this._GetEntityColor(e,t);yield new G({type:G.Type.LINE_SEGMENTS,vertices:e.vertices,layer:r,color:s,lineType:this._GetLineType(e,e.vertices[0])})}_GenerateBulgeVertices(e,t,r,s){const i=4*Math.atan(s),a=Math.abs(i);if(a<this.options.arcTessellationAngle){e.push(new A.Vector2(r.x,r.y));return}const o=i/2,l=Math.sin(o),c=Math.cos(o),u={x:r.x-t.x,y:r.y-t.y},f=u.x*u.x+u.y*u.y;if(f<Number.MIN_VALUE*2)return;const p=Math.sqrt(f);let d=p/2/l;u.x/=p,u.y/=p;const v={x:(u.x*l-u.y*c)*d+t.x,y:(u.x*c+u.y*l)*d+t.y};let y=Math.floor(a/this.options.arcTessellationAngle);if(y<this.options.minArcTessellationSubdivisions&&(y=this.options.minArcTessellationSubdivisions),y>1){const m=Math.atan2(t.y-v.y,t.x-v.x),g=i/y;i<0&&(d=-d);for(let P=1;P<y;P++){const S=m+P*g,w=new A.Vector2(v.x+d*Math.cos(S),v.y+d*Math.sin(S));e.push(w)}}e.push(new A.Vector2(r.x,r.y))}_GenerateArcVertices({vertices:e,center:t,radius:r,startAngle:s=null,endAngle:i=null,tessellationAngle:a=null,yRadius:o=null,transform:l=null,rotation:c=null,ccwAngleDir:u=!0}){if(!t||!r)return;a||(a=this.options.arcTessellationAngle),o===null&&(o=r),s==null?s=0:s+=this.angBase;let f=!1;if(i==null?(i=s+2*Math.PI,f=!0):i+=this.angBase,!u){const m=s;s=-i,i=-m}for(;i<=s;)i+=Math.PI*2;const p=i-s;let d=Math.floor(p/a);d===0&&(d=1);const v=p/d;let y=null;c&&(y=new A.Matrix3().makeRotation(c));for(let m=0;m<=d&&!(m===d&&f);m++){let g;u?g=s+m*v:g=s+(d-m)*v;const P=new A.Vector2(r*Math.cos(g),o*Math.sin(g));y&&P.applyMatrix3(y),P.add(t),l&&P.applyMatrix3(l),e.push(P)}}*_DecomposeArc(e,t){const r=this._GetEntityColor(e,t),s=this._GetEntityLayer(e,t),i=this._GetLineType(e,null,t),a=[];this._GenerateArcVertices({vertices:a,center:e.center,radius:e.radius,startAngle:e.startAngle,endAngle:e.endAngle,transform:this._GetEntityExtrusionTransform(e)}),yield new G({type:G.Type.POLYLINE,vertices:a,layer:s,color:r,lineType:i,shape:e.endAngle===void 0})}*_DecomposeCircle(e,t){const r=this._GetEntityColor(e,t),s=this._GetEntityLayer(e,t),i=this._GetLineType(e,null,t),a=[];this._GenerateArcVertices({vertices:a,center:e.center,radius:e.radius,transform:this._GetEntityExtrusionTransform(e)}),yield new G({type:G.Type.POLYLINE,vertices:a,layer:s,color:r,lineType:i,shape:!0})}*_DecomposeEllipse(e,t){const r=this._GetEntityColor(e,t),s=this._GetEntityLayer(e,t),i=this._GetLineType(e,null,t),a=[],o=Math.sqrt(e.majorAxisEndPoint.x*e.majorAxisEndPoint.x+e.majorAxisEndPoint.y*e.majorAxisEndPoint.y),l=o*e.axisRatio,c=Math.atan2(e.majorAxisEndPoint.y,e.majorAxisEndPoint.x),u=e.startAngle??0;let f=e.endAngle??u+2*Math.PI;for(;f<=u;)f+=Math.PI*2;const p=(e.endAngle??null)===null||Math.abs(f-u-2*Math.PI)<1e-6;this._GenerateArcVertices({vertices:a,center:e.center,radius:o,startAngle:e.startAngle,endAngle:p?null:e.endAngle,yRadius:l,rotation:c,ccwAngleDir:!this._GetEntityExtrusionTransform(e)}),yield new G({type:G.Type.POLYLINE,vertices:a,layer:s,color:r,lineType:i,shape:p})}*_DecomposePoint(e,t){if(this.pdMode===B0.NONE||this.pdMode!==B0.DOT&&this.pdSize<=0)return;const r=this._GetEntityColor(e,t),s=this._GetEntityLayer(e,t),i=this.pdMode&B0.MARK_MASK;if((this.pdMode&B0.SHAPE_MASK)!==0){const l=new q(s,it,q.GeometryType.POINT_INSTANCE,r,0);this._GetBatch(l).PushVertex(this._TransformVertex(e.position)),this._CreatePointShapeBlock();return}if(i===B0.DOT){yield new G({type:G.Type.POINTS,vertices:[e.position],layer:s,color:r,lineType:null});return}const o=[];this._CreatePointMarker(o,i,e.position),yield new G({type:G.Type.LINE_SEGMENTS,vertices:o,layer:s,color:r,lineType:null})}_DecomposeAttdef(e,t){e.tag&&t.attdefs.set(e.tag,e)}_ProcessInsertAttributes(e,t,r,s,i,a){if(this.textRenderer.canRender)for(const o of r){const l=o.tag?t.attdefs.get(o.tag):null;if(!!o.hidden&&this.attMode!==2)continue;const u=o.text??(l==null?void 0:l.text)??"";if(!u||u.length===0)continue;const f=o.textHeight??(l==null?void 0:l.textHeight)??1,p=o.scale??(l==null?void 0:l.scale)??1,d=f,v=o.rotation??(l==null?void 0:l.rotation)??0,y=o.horizontalJustification??(l==null?void 0:l.horizontalJustification)??0,m=o.verticalJustification??(l==null?void 0:l.verticalJustification)??0;o.textStyle??(l==null||l.textStyle);let g=o.startPoint,P=o.endPoint,S=!1;if(!g&&(l!=null&&l.startPoint)&&(g=l.startPoint,P=l.endPoint,S=!0),!g)continue;const w=S?new A.Vector2(g.x,g.y).applyMatrix3(s):new A.Vector2(g.x,g.y),O=P?S?new A.Vector2(P.x,P.y).applyMatrix3(s):new A.Vector2(P.x,P.y):w,I=this._GetEntityLayer(o,null)??i,M=this._GetEntityColor(o,null)??a,T=this.textRenderer.RenderMerged({text:K0(u),fontSize:d,widthFactor:p,startPos:w,endPos:O,rotation:v,hAlign:y,vAlign:m,color:M,layer:I});T?(T.vertices&&T.vertices.length>0&&T.vertices[0],T.dxfType="ATTRIB",T.dxfHandle=o.handle,this._ProcessEntity(T,null)):console.warn(`[ATTRIB] RenderMerged returned null for text="${u}"`)}}*_DecomposeAttribute(e,t){if(!this.textRenderer.canRender)return;const r=this.inserts.get(e.ownerHandle),s=this._GetEntityLayer(r??e,t),i=this._GetEntityColor(r??e,t);yield*this.textRenderer.Render({text:K0(e.text),fontSize:e.textHeight*e.scale,startPos:e.startPoint,endPos:e.endPoint,rotation:e.rotation,hAlign:e.horizontalJustification,vAlign:e.verticalJustification,color:i,layer:s})}_CreatePointMarker(e,t,r=null){const s=this;function i(a,o){e.push({x:((r==null?void 0:r.x)??0)+a*s.pdSize*.5,y:((r==null?void 0:r.y)??0)+o*s.pdSize*.5})}switch(t){case B0.PLUS:i(0,1.5),i(0,-1.5),i(-1.5,0),i(1.5,0);break;case B0.CROSS:i(-1,1),i(1,-1),i(1,1),i(-1,-1);break;case B0.TICK:i(0,1),i(0,0);break;default:console.warn("Unsupported point display type: "+t)}}_CreatePointShapeBlock(){if(this.pointShapeBlock)return;this.pointShapeBlock=new lt({name:it,position:{x:0,y:0}}),this.pointShapeBlock.offset=new A.Vector2(0,0);const e=this.pointShapeBlock.DefinitionContext(),t=this.pdMode&B0.MARK_MASK;if(t!==B0.DOT&&t!==B0.NONE){const r=[];this._CreatePointMarker(r,t);const s=new G({type:G.Type.LINE_SEGMENTS,vertices:r,color:Y0.BY_BLOCK});this._ProcessEntity(s,e)}if(this.pdMode&B0.SQUARE){const r=this.pdSize*.5,s=[{x:-r,y:r},{x:r,y:r},{x:r,y:-r},{x:-r,y:-r}],i=new G({type:G.Type.POLYLINE,vertices:s,color:Y0.BY_BLOCK,shape:!0});this._ProcessEntity(i,e)}if(this.pdMode&B0.CIRCLE){const r=[];this._GenerateArcVertices({vertices:r,center:{x:0,y:0},radius:this.pdSize*.5,tessellationAngle:an});const s=new G({type:G.Type.POLYLINE,vertices:r,color:Y0.BY_BLOCK,shape:!0});this._ProcessEntity(s,e)}}*_Decompose3DFace(e,t){yield*this._DecomposeFace(e,e.vertices,t,this.options.wireframeMesh)}*_DecomposeSolid(e,t){yield*this._DecomposeFace(e,e.points,t,!1,this._GetEntityExtrusionTransform(e))}*_DecomposeFace(e,t,r,s,i=null){const a=this._GetEntityLayer(e,r),o=this._GetEntityColor(e,r);function l(y,m,g){const P=new A.Vector2().subVectors(m,y),S=new A.Vector2().subVectors(g,y);return Math.abs(P.cross(S))>Number.EPSILON}const c=new A.Vector2(t[0].x,t[0].y),u=new A.Vector2(t[1].x,t[1].y),f=new A.Vector2(t[2].x,t[2].y);let p=null,d=l(c,u,f),v=!1;if(t.length>3&&(p=new A.Vector2(t[3].x,t[3].y),v=l(u,p,f),i&&p.applyMatrix3(i)),i&&(c.applyMatrix3(i),u.applyMatrix3(i),f.applyMatrix3(i)),!(!d&&!v))if(s){const y=[];d&&!v?y.push(c,u,f):!d&&v?y.push(u,p,f):y.push(c,u,p,f),yield new G({type:G.Type.POLYLINE,vertices:y,layer:a,color:o,shape:!0})}else{const y=[],m=[];d&&(y.push(c,u,f),m.push(0,1,2)),v&&(d?m.push(1,2,3):(y.push(u,f),m.push(0,1,2)),y.push(p)),yield new G({type:G.Type.TRIANGLES,vertices:y,indices:m,layer:a,color:o})}}*_DecomposeText(e,t){if(!this.textRenderer.canRender)return;const r=this._GetEntityLayer(e,t),s=this._GetEntityColor(e,t),i=this._GetEntityTextStyle(e),a=(i==null?void 0:i.fixedTextHeight)===0?null:i==null?void 0:i.fixedTextHeight;yield*this.textRenderer.Render({text:K0(e.text),fontSize:e.textHeight??a??1,startPos:e.startPoint,endPos:e.endPoint,rotation:e.rotation,hAlign:e.halign,vAlign:e.valign,widthFactor:e.xScale,color:s,layer:r})}*_DecomposeMText(e,t){if(!this.textRenderer.canRender)return;const r=this._GetEntityLayer(e,t),s=this._GetEntityColor(e,t),i=this._GetEntityTextStyle(e),a=(i==null?void 0:i.fixedTextHeight)===0?null:i==null?void 0:i.fixedTextHeight,o=new b1;o.Parse(K0(e.text)),yield*this.textRenderer.RenderMText({formattedText:o.GetContent(),fontSize:e.height??a,position:e.position,rotation:e.rotation,direction:e.direction,attachment:e.attachmentPoint,lineSpacing:e.lineSpacing,width:e.width,color:s,layer:r})}_CreateDimension(e){const t=(e.dimensionType||0)&15;let r=null;e.hasOwnProperty("styleName")&&(r=this.dimStyles.get(e.styleName));const s=o=>this._GetDimStyleValue(o,e,r),i=(o,l)=>this.textRenderer.GetLineWidth(o,l);let a=null;if(t===0||t===1){if(!e.linearOrAngularPoint1||!e.linearOrAngularPoint2||!e.anchorPoint)return null;a=new N8({p1:new A.Vector2().copy(e.linearOrAngularPoint1),p2:new A.Vector2().copy(e.linearOrAngularPoint2),anchor:new A.Vector2().copy(e.anchorPoint),isAligned:t===1,angle:e.angle,text:e.text,textAnchor:e.middleOfText?new A.Vector2().copy(e.middleOfText):null,textRotation:e.textRotation},s,i)}else if(t===2||t===5){if(!e.anchorPoint||!e.linearOrAngularPoint1||!e.linearOrAngularPoint2||!e.arcPoint)return null;a=new B8({center:new A.Vector2().copy(e.anchorPoint),point1:new A.Vector2().copy(e.linearOrAngularPoint1),point2:new A.Vector2().copy(e.linearOrAngularPoint2),arcPoint:new A.Vector2().copy(e.arcPoint),text:e.text,textAnchor:e.middleOfText?new A.Vector2().copy(e.middleOfText):null,textRotation:e.textRotation,arcTessellationAngle:this.options.arcTessellationAngle},s,i)}return a?a.IsValid()?a:(console.warn("Invalid dimension geometry detected for "+e.handle),null):(console.warn("Unsupported dimension type detected for "+e.handle),null)}*_DecomposeDimension(e,t){if((e.block??null)!==null&&this.blocks.has(e.block)){const l={name:e.block,position:{x:0,y:0},layer:e.layer,color:e.color,colorIndex:e.colorIndex};this._ProcessInsert(l,t);return}const r=this._CreateDimension(e);if(!r)return;const s=this._GetEntityLayer(e,t),i=this._GetEntityColor(e,t),a=this._GetEntityExtrusionTransform(e),o=r.GenerateLayout();for(const l of o.lines){const c=[];a&&(l.start.applyMatrix3(a),l.end.applyMatrix3(a)),c.push(l.start,l.end),yield new G({type:G.Type.LINE_SEGMENTS,vertices:c,layer:s,color:l.color??i})}for(const l of o.triangles){if(a)for(const c of l.vertices)c.applyMatrix3(a);yield new G({type:G.Type.TRIANGLES,vertices:l.vertices,indices:l.indices,layer:s,color:l.color??i})}if(this.textRenderer.canRender)for(const l of o.texts)a&&l.position.applyMatrix3(a),yield*this.textRenderer.Render({text:l.text,fontSize:l.size,startPos:l.position,rotation:l.angle,hAlign:b0.CENTER,vAlign:z0.MIDDLE,color:l.color??i,layer:s})}_TransformBoundaryLoop(e,t,r){r||(r=[]);for(const s of e)t&&s.applyMatrix3(t),r.push(s.x),r.push(s.y);return r}*_DecomposeHatch(e,t){const r=this._GetHatchBoundaryLoops(e);if(r.length==0){console.warn("HATCH entity with empty boundary loops array (perhaps some loop types are not implemented yet)");return}const s=e.hatchStyle??0,i=this._GetEntityLayer(e,t),a=this._GetEntityColor(e,t),o=this._GetEntityExtrusionTransform(e);let l=null;if(r.sort((p,d)=>p.isExternal!=d.isExternal?p.isExternal?-1:1:p.isOutermost!=d.isOutermost?p.isOutermost?-1:1:0),s==m4.THROUGH_ENTIRE_AREA)l=[r[0].vertices];else if(s==m4.OUTERMOST){l=[];for(const p of r)(p.isExternal||p.isOutermost)&&l.push(p.vertices);l.length==0&&(l=null)}if(l||(l=r.map(p=>p.vertices)),e.isSolid){const p=this._TransformBoundaryLoop(l[0],o),d=[];for(let m=1;m<l.length;m++)d.push(p.length/2),this._TransformBoundaryLoop(l[m],o,p);const v=H8(p,d),y=[];for(const m of l)y.push(...m);yield new G({type:G.Type.TRIANGLES,vertices:y,indices:v,layer:i,color:a});return}const c=new z8(l,s);let u=null;if(e.definitionLines&&(u=new x(e.definitionLines,e.patternName,!1)),(u==null||u.isQcadDefault)&&e.patternName){const p=$5(e.patternName,this.isMetric);p?u=p:console.log(`Hatch pattern with name ${e.patternName} not found (metric: ${this.isMetric})`)}if(u==null&&(u=$5("ANSI31")),!u)return;const f=e.seedPoints?e.seedPoints:[{x:0,y:0}];for(const p of f){const d=u.offsetInLineSpace?c.GetPatternTransform({seedPoint:p,angle:e.patternAngle,scale:e.patternScale}):new A.Matrix3;for(const v of u.lines){let y,m;if(u.offsetInLineSpace)y=v.offset.x,m=v.offset.y;else{const T=Math.sin(-(v.angle??0)),C=Math.cos(-(v.angle??0));y=v.offset.x*C-v.offset.y*T,m=v.offset.x*T+v.offset.y*C}m<0&&(m=-m,y=-y);const g=c.GetLineTransform({patTransform:d,basePoint:v.base,angle:v.angle??0}),P=c.GetBoundingBox(g),S=(P.max.x-P.min.x)*.05;let w,O;if(m==0?(w=0,O=0):(w=Math.ceil(P.min.y/m),O=Math.floor(P.max.y/m)),O-w>ln){console.warn("Too many lines produced by hatching pattern");continue}let I;if(v.dashes&&v.dashes.length>1){I=0;for(const T of v.dashes)T<0?I-=T:I+=T}else I=null;const M=g.clone().invert();for(let T=w;T<=O;T++){let s0=function(k){return(k-R)/r0},i0=function(k){const B=l0.clone().multiplyScalar(k[0]).add(Z),t0=l0.clone().multiplyScalar(k[1]).add(Z);return o&&(B.applyMatrix3(o),t0.applyMatrix3(o)),k[1]-k[0]<=Number.EPSILON?new G({type:G.Type.POINTS,vertices:[B],layer:i,color:a}):new G({type:G.Type.LINE_SEGMENTS,vertices:[B,t0],layer:i,color:a})};const C=T*m,_=T*y,R=P.min.x-S,W=P.max.x+S,r0=W-R,Z=new A.Vector2(R,C).applyMatrix3(M),n0=new A.Vector2(W,C).applyMatrix3(M),l0=n0.clone().sub(Z),a0=c.ClipLine([Z,n0]);function*o0(k,B){for(const t0 of a0){if(t0[0]>=B)return;if(t0[1]<=k)continue;const f0=Math.max(k,t0[0]),L0=Math.min(B,t0[1]);yield[f0,L0],k=L0}}if(I!==null){let k=Math.floor((R-_)/I),B=Math.floor((W-_)/I);if(B-k>=cn){console.warn("Too many segments produced by hatching pattern line");continue}for(let t0=k;t0<=B;t0++){let f0=s0(_+t0*I);for(let L0 of v.dashes){const G0=L0<0;G0&&(L0=-L0);const p0=L0/r0;if(!G0)for(const O0 of o0(f0,f0+p0))yield i0(O0);f0+=p0}}}else for(const k of a0)yield i0(k)}}}}*_DecomposeLeader(e,t){if(!e.vertices||e.vertices.length<2)return;const r=this._GetEntityLayer(e,t),s=this._GetEntityColor(e,t);e.pathType===0?yield*this._DecomposeLeaderStraightPath(e,t,r,s):e.pathType===1&&(yield*this._DecomposeLeaderSplinePath(e,t,r,s)),e.arrowheadEnabled&&e.vertices.length>=2&&(yield*this._DecomposeLeaderArrowhead(e,t,r,s)),e.hasHookline&&e.vertices.length>=2&&(yield*this._DecomposeLeaderHookline(e,t,r,s))}*_DecomposeLeaderStraightPath(e,t,r,s){const i=this._GetEntityExtrusionTransform(e),a=e.vertices;for(let o=0;o<a.length-1;o++){let l=new A.Vector2(a[o].x,a[o].y),c=new A.Vector2(a[o+1].x,a[o+1].y);i&&(l.applyMatrix3(i),c.applyMatrix3(i)),yield new G({type:G.Type.LINE_SEGMENTS,vertices:[l,c],indices:null,layer:r,color:s})}}_TessellateLeaderSpline(e){const t=this.options.splineSubdivision||4,r=[];for(let s=0;s<e.length-1;s++){const i=e[s],a=e[s+1];for(let o=0;o<=t;o++){const l=o/t;r.push({x:i.x+(a.x-i.x)*l,y:i.y+(a.y-i.y)*l,z:(i.z||0)+((a.z||0)-(i.z||0))*l})}}return r}*_DecomposeLeaderSplinePath(e,t,r,s){const i=this._GetEntityExtrusionTransform(e),o=this._TessellateLeaderSpline(e.vertices).map(l=>{const c=new A.Vector2(l.x,l.y);return i&&c.applyMatrix3(i),c});yield new G({type:G.Type.POLYLINE,vertices:o,shape:!1,layer:r,color:s})}*_DecomposeLeaderArrowhead(e,t,r,s){let i=null;e.dimStyleName&&(i=this.dimStyles.get(e.dimStyleName));const o=(g=>this._GetDimStyleValue(g,e,i))("DIMASZ")||.18,l=e.vertices[0],c=e.vertices[1];let u={x:c.x-l.x,y:c.y-l.y,z:(c.z||0)-(l.z||0)};const f=Math.sqrt(u.x*u.x+u.y*u.y+u.z*u.z);if(f<Number.MIN_VALUE)return;u.x/=f,u.y/=f,u.z/=f;const p={vertices:[new A.Vector2(0,0),new A.Vector2(1,-.25),new A.Vector2(1,.25)],indices:[0,1,2]},d=Math.atan2(u.y,u.x),v=new A.Matrix3().scale(o,o).rotate(d).translate(l.x,l.y);let y=p.vertices.map(g=>g.clone().applyMatrix3(v));const m=this._GetEntityExtrusionTransform(e);m&&(y=y.map(g=>g.applyMatrix3(m))),yield new G({type:G.Type.TRIANGLES,vertices:y,indices:p.indices,layer:r,color:s})}*_DecomposeLeaderHookline(e,t,r,s){let i=null;e.dimStyleName&&(i=this.dimStyles.get(e.dimStyleName));const o=(y=>this._GetDimStyleValue(y,e,i))("DIMGAP")||.09,l=e.vertices[e.vertices.length-1],c=e.horizontalDirection||{x:1,y:0,z:0},u=e.hooklineDirection===0?-1:1,f={x:l.x+c.x*o*u,y:l.y+c.y*o*u,z:(l.z||0)+(c.z||0)*o*u},p=this._GetEntityExtrusionTransform(e);let d=new A.Vector2(l.x,l.y),v=new A.Vector2(f.x,f.y);p&&(d.applyMatrix3(p),v.applyMatrix3(p)),yield new G({type:G.Type.LINE_SEGMENTS,vertices:[d,v],indices:null,layer:r,color:s})}*_DecomposeMultiLeader(e,t){const r=this._GetEntityLayer(e,t),s=this._GetEntityColor(e,t),i=e.context;if(i){for(const a of i.leaders){for(const o of a.lines){if(!o.vertices||o.vertices.length===0)continue;const l=[...o.vertices];a.lastLeaderLinePoint&&l.push(a.lastLeaderLinePoint);for(let c=0;c<l.length-1;c++){const u=new A.Vector2(l[c].x,l[c].y),f=new A.Vector2(l[c+1].x,l[c+1].y);yield new G({type:G.Type.LINE_SEGMENTS,vertices:[u,f],indices:null,layer:r,color:s})}if(l.length>=2){const c=e.arrowheadSize||4,u=l[0],f=l[1],p=f.x-u.x,d=f.y-u.y;if(Math.sqrt(p*p+d*d)>Number.EPSILON){const y=Math.atan2(d,p),m=new A.Matrix3().scale(c,c).rotate(-y).translate(u.x,u.y),g=[new A.Vector2(0,0),new A.Vector2(1,-.25),new A.Vector2(1,.25)].map(P=>P.clone().applyMatrix3(m));yield new G({type:G.Type.TRIANGLES,vertices:g,indices:[0,1,2],layer:r,color:s})}}}if(e.enableDogleg&&a.hasSetDoglegVector&&a.lastLeaderLinePoint&&a.doglegVector){const o=a.doglegLength||e.doglegLength||8,l=new A.Vector2(a.lastLeaderLinePoint.x,a.lastLeaderLinePoint.y),c=new A.Vector2(a.lastLeaderLinePoint.x+a.doglegVector.x*o,a.lastLeaderLinePoint.y+a.doglegVector.y*o);yield new G({type:G.Type.LINE_SEGMENTS,vertices:[l,c],indices:null,layer:r,color:s})}}if(e.contentType===2&&i.textLabel&&this.textRenderer.canRender){const a=i.textLabel,o=i.textHeight||i.textHeightOverride||4,l=i.textPosition||i.contentBasePosition,c=i.textDirection,u=i.textWidth||i.textDefinedWidth||0;if(l){let f=i.textRotation||0;c&&(c.x!==0||c.y!==0)&&(f=Math.atan2(c.y,c.x));const p=new b1;p.Parse(K0(a)),yield*this.textRenderer.RenderMText({formattedText:p.GetContent(),fontSize:o,position:l,rotation:f,direction:c,attachment:i.textLeftAttachment||i.textAttachmentDirection||1,lineSpacing:i.textLineSpacing,width:u,color:s,layer:r})}}}}_GetHatchBoundaryLoops(e){if(!e.boundaryLoops)return[];const t=[],r=(s,i)=>{const a=i.length;if(a!=0){if(s.length==0)s.push(i[0]);else{const o=s[s.length-1];(o.x!=i[0].x||o.y!=i[0].y)&&s.push(i[0])}for(let o=1;o<a;o++)s.push(i[o])}};for(const s of e.boundaryLoops){const i=[];if(s.type&2)for(let a=0;a<s.polyline.vertices.length;a++){const o=s.polyline.vertices[a];if((o.bulge??0)==0)i.push(new A.Vector2(o.x,o.y));else{(s.polyline.vertices[a==0?s.polyline.vertices.length-1:a-1].bulge??0)==0&&i.push(new A.Vector2(o.x,o.y));const c=s.polyline.vertices[a==s.polyline.vertices.length-1?0:a+1];this._GenerateBulgeVertices(i,o,c,o.bulge)}}else if(s.edges&&s.edges.length>0)for(const a of s.edges)switch(a.type){case 1:r(i,[new A.Vector2(a.start.x,a.start.y),new A.Vector2(a.end.x,a.end.y)]);break;case 2:{const u=[];this._GenerateArcVertices({vertices:u,center:a.start,radius:a.radius,startAngle:a.startAngle,endAngle:a.endAngle,ccwAngleDir:a.isCcw}),r(i,u);break}case 3:{const u=a.start,f=a.end,p=Math.sqrt(f.x*f.x+f.y*f.y),d=a.radius,v=p*d,y=Math.atan2(f.y,f.x),m=[];if(this._GenerateArcVertices({vertices:m,center:u,radius:p,startAngle:a.startAngle,endAngle:a.endAngle,yRadius:v,ccwAngleDir:a.isCcw}),y!==0){const g=Math.cos(y),P=Math.sin(y);for(const S of m){const w=S.x-u.x,O=S.y-u.y;S.x=w*g-O*P+u.x,S.y=w*P+O*g+u.y}}r(i,m);break}case 4:const o=a.controlPoints.map(u=>[u.x,u.y]),l=o.length*at,c=1/l;for(let u=0;u<=l;u++){const f=this._InterpolateSpline(u*c,a.degreeOfSplineCurve,o,a.knotValues);i.push(new A.Vector2(f[0],f[1]))}break;default:console.warn("Unhandled hatch boundary loop edge type: "+a.type)}if(i.length>2){const a=i[0],o=i[i.length-1];o.x==a.x&&o.y==a.y&&(i.length=i.length-1)}i.length>2&&t.push({vertices:i,isExternal:s.isExternal,isOutermost:s.isOutermost})}return t}_GetDimStyleValue(e,t,r){var i,a,o;const s=(o=(a=(i=t==null?void 0:t.xdata)==null?void 0:i.ACAD)==null?void 0:a.DSTYLE)==null?void 0:o.values;if(s){let l=!0,c=!1;for(const u of s){if(l){if(u.code!=1070)break;t4.get(u.value)==e&&(c=!0)}else if(c)return u.value;l=!l}}if(r&&r.hasOwnProperty(e))return r[e];if(this.vars.has(e))return this.vars.get(e);if(ot.hasOwnProperty(e)){const l=ot[e];return l instanceof Function?l.call(this):l}return null}_ProcessInsert(e,t=null){if(t){if(t.name===e.name){console.warn("Recursive block reference: "+t.name);return}const u=this.blocks.get(e.name);if(!u){console.warn("Unresolved nested block reference: "+e.name);return}const f=t.NestedBlockContext(u,e);if(u.data.entities)for(const p of u.data.entities)this._ProcessDxfEntity(p,f);return}const r=this.blocks.get(e.name);if(!r){console.warn("Unresolved block reference in INSERT: "+e.name);return}const s=r.HasGeometry(),i=e.attribs||[];if(!s&&i.length===0)return;const a=this._GetEntityLayer(e,null),o=this._GetEntityColor(e,null),l=this._GetLineType(e,null,null),c=r.InstantiationContext().GetInsertionTransform(e);if(s&&r.bounds){const u=r.bounds;this._UpdateBounds(new A.Vector2(u.minX,u.minY).applyMatrix3(c)),this._UpdateBounds(new A.Vector2(u.maxX,u.maxY).applyMatrix3(c)),this._UpdateBounds(new A.Vector2(u.minX,u.maxY).applyMatrix3(c)),this._UpdateBounds(new A.Vector2(u.maxX,u.minY).applyMatrix3(c))}if(c.translate(-this.origin.x,-this.origin.y),s)if(r.flatten)for(const u of r.batches)this._FlattenBatch(u,a,o,l,c);else{const u=new q(a,e.name,q.GeometryType.BLOCK_INSTANCE,o,l,e.handle,e.type);this._GetBatch(u).PushInstanceTransform(c)}i.length>0&&this._ProcessInsertAttributes(e,r,i,c,a,o)}_FlattenBatch(e,t,r,s,i){t??(t=e.key.layerName);const a=t?this.layers.get(t):null;let o,l=0;e.key.color===Y0.BY_BLOCK?o=r:e.key.color===Y0.BY_LAYER?o=(a==null?void 0:a.color)??0:o=e.key.color;const c=new q(t,null,e.key.geometryType,o,l);this._GetBatch(c).Merge(e,i)}*_GenerateShapedPolyline(e,t,r,s,i){yield new G({type:G.Type.POLYLINE,vertices:e,layer:t,color:r,lineType:s,shape:i})}_MirrorEntityVertices(e,t=null){if(!e.extrusionDirection||e.extrusionDirection.z>=0)return t??e.vertices;(!t||t===e.vertices)&&(t=e.vertices.slice());const r=t.length;for(let s=0;s<r;s++){const i=t[s],a={x:-i.x};for(const o in i)i.hasOwnProperty(o)&&o!=="x"&&(a[o]=i[o]);t[s]=a}return t}*_DecomposePolyline(e,t=null){if(e.isPolyfaceMesh){yield*this._DecomposePolyfaceMesh(e,t);return}let r,s;if(e.includesCurveFitVertices||e.includesSplineFitVertices?(r=e.vertices.filter(d=>d.splineVertex||d.curveFittingVertex),s=r.length):(r=e.vertices,s=e.vertices.length),s<2)return;r=this._MirrorEntityVertices(e,r);const i=this._GetEntityColor(e,t),a=this._GetEntityLayer(e,t),o=this;let l=0,c=this._IsPlainLine(r[0]),u=this._GetLineType(e,r[0],t),f=null;function*p(d){if(d===l)return;let v=!1,y=f;d===s&&l===0?(v=!0,y===null&&(y=r)):d===s-1&&l===0?y===null&&(y=r):d===s?y===null&&(y=r.slice(l,d),y.push(r[0])):y===null&&(y=r.slice(l,d+1)),c?yield new G({type:G.Type.POLYLINE,vertices:y,layer:a,color:i,lineType:u,shape:v}):yield*o._GenerateShapedPolyline(y,a,i,u,v),l=d,d!==s&&(c=o._IsPlainLine(r[d]),u=o._GetLineType(e,r[d])),f=null}for(let d=1;d<=s;d++){const v=r[d-1];let y;if(d===s){if(!e.shape){yield*p(d-1);break}y=r[0]}else y=r[d];if(v.bulge&&c?(f===null&&(f=r.slice(l,d)),this._GenerateBulgeVertices(f,v,y,v.bulge)):f!==null&&f.push(y),d===s){yield*p(d);break}const m=this._IsPlainLine(y),g=this._GetLineType(e,y);(m!==c||c&&g!==u)&&(yield*p(d))}}*_DecomposePolyfaceMesh(e,t=null){const r=this._GetEntityLayer(e,t),s=this._GetEntityColor(e,t),i=[],a=[];for(const c of e.vertices)if(c.faces){const u={indices:[],hiddenEdges:[]};for(let f of c.faces){if(f==0)break;if(f>i.length){if(65536-f>i.length)continue;f=f-65536}u.indices.push(f<0?-f-1:f-1),u.hiddenEdges.push(f<0)}(u.indices.length==3||u.indices.length==4)&&a.push(u)}else i.push(new A.Vector2(c.x,c.y));const o=[],l=(c,u)=>{if(o.length>0){const f=o[o.length-1];if(f.indices[f.indices.length-1]==c){f.indices.push(u);return}f.indices[0]==f.indices[f.indices.length-1]&&(f.isClosed=!0)}o.push({indices:[c,u],isClosed:!1})};for(const c of a)if(this.options.wireframeMesh)for(let u=0;u<c.indices.length;u++){if(c.hiddenEdges[u])continue;const f=u<c.indices.length-1?u+1:0;l(c.indices[u],c.indices[f])}else{let u;c.indices.length==3?u=c.indices:u=[c.indices[0],c.indices[1],c.indices[2],c.indices[0],c.indices[2],c.indices[3]],yield new G({type:G.Type.TRIANGLES,vertices:i,indices:u,layer:r,color:s})}if(this.options.wireframeMesh)for(const c of o)if(c.length==2)yield new G({type:G.Type.LINE_SEGMENTS,vertices:[i[c.indices[0]],i[c.indices[1]]],layer:r,color:s});else{const u=[];for(const f of c.indices)u.push(i[f]);yield new G({type:G.Type.POLYLINE,vertices:u,layer:r,color:s,shape:c.isClosed})}}*_DecomposeSpline(e,t=null){const r=this._GetEntityColor(e,t),s=this._GetEntityLayer(e,t),i=this._GetLineType(e,null,t);if(!e.controlPoints)return;const a=e.controlPoints.map(u=>[u.x,u.y]),o=[],l=a.length*at,c=1/l;for(let u=0;u<=l;u++){const f=this._InterpolateSpline(u*c,e.degreeOfSplineCurve,a,e.knotValues);o.push({x:f[0],y:f[1]})}yield new G({type:G.Type.POLYLINE,vertices:o,layer:s,color:r,lineType:i})}_InterpolateSpline(e,t,r,s=null,i=null){let a,o,l,c;const u=r.length,f=r[0].length;if(t<1)throw new Error("Degree must be at least 1 (linear)");if(t>u-1)throw new Error("Degree must be less than or equal to point count - 1");if(!i)for(i=[],a=0;a<u;a++)i[a]=1;if(s){if(s.length!==u+t+1)throw new Error("Bad knot vector length")}else for(s=[],a=0;a<u+t+1;a++)s[a]=a;const p=[t,s.length-1-t],d=s[p[0]],v=s[p[1]];for(e=e*(v-d)+d,e<d?e=d:e>v&&(e=v),l=p[0];l<p[1]&&!(e>=s[l]&&e<=s[l+1]);l++);const y=[];for(a=0;a<u;a++){for(y[a]=[],o=0;o<f;o++)y[a][o]=r[a][o]*i[a];y[a][f]=i[a]}let m;for(c=1;c<=t+1;c++)for(a=l;a>l-t-1+c;a--)for(m=(e-s[a])/(s[a+t+1-c]-s[a]),o=0;o<f+1;o++)y[a][o]=(1-m)*y[a-1][o]+m*y[a][o];const g=[];for(a=0;a<f;a++)g[a]=y[l][a]/y[l][f];return g}_ProcessPoints(e,t=null){const r=new q(e.layer,t==null?void 0:t.name,q.GeometryType.POINTS,e.color,0,e.dxfHandle,e.dxfType),s=this._GetBatch(r);for(const i of e.vertices)s.PushVertex(this._TransformVertex(i,t))}_ProcessLineSegments(e,t=null){if(e.vertices.length%2!==0)throw Error("Even number of vertices expected");const r=e.dxfType==="LINE"||e.dxfType==="LWPOLYLINE"||e.dxfType==="POLYLINE"||e.dxfType==="ARC"||e.dxfType==="CIRCLE"||e.dxfType==="ELLIPSE"||e.dxfType==="SPLINE"||e.dxfType==="TEXT"||e.dxfType==="MTEXT"||e.dxfType==="ATTRIB",s=new q(e.layer,t==null?void 0:t.name,q.GeometryType.LINES,e.color,e.lineType,r?e.dxfHandle:null,r?e.dxfType:null),i=this._GetBatch(s);for(const a of e.vertices)i.PushVertex(this._TransformVertex(a,t))}_ProcessPolyline(e,t=null){if(e.vertices.length<2)return;const r=e.vertices.length,s=e.dxfType==="LINE"||e.dxfType==="LWPOLYLINE"||e.dxfType==="POLYLINE"||e.dxfType==="ARC"||e.dxfType==="CIRCLE"||e.dxfType==="ELLIPSE"||e.dxfType==="SPLINE"||e.dxfType==="TEXT"||e.dxfType==="MTEXT"||e.dxfType==="ATTRIB";if(r<=3){const o=new q(e.layer,t==null?void 0:t.name,q.GeometryType.LINES,e.color,e.lineType,s?e.dxfHandle:null,s?e.dxfType:null),l=this._GetBatch(o);let c=null;for(const u of e.vertices)c!==null&&(l.PushVertex(this._TransformVertex(c,t)),l.PushVertex(this._TransformVertex(u,t))),c=u;e.shape&&r>2&&(l.PushVertex(this._TransformVertex(e.vertices[r-1],t)),l.PushVertex(this._TransformVertex(e.vertices[0],t)));return}const i=new q(e.layer,t==null?void 0:t.name,q.GeometryType.INDEXED_LINES,e.color,e.lineType,s?e.dxfHandle:null,s?e.dxfType:null),a=this._GetBatch(i);for(const o of e._IterateLineChunks()){const l=a.PushChunk(o.verticesCount);for(const c of o.vertices)l.PushVertex(this._TransformVertex(c,t));for(const c of o.indices)l.PushIndex(c);l.Finish()}}_ProcessTriangles(e,t=null){if(e.vertices.length<3)return;if(e.indices.length%3!==0){console.error("Unexpected size of indices array: "+e.indices.length);return}const r=e.dxfType==="TEXT"||e.dxfType==="MTEXT"||e.dxfType==="ATTRIB"||e.dxfType==="HATCH"||e.dxfType==="SOLID"||e.dxfType==="3DFACE",s=new q(e.layer,t==null?void 0:t.name,q.GeometryType.INDEXED_TRIANGLES,e.color,0,r?e.dxfHandle:null,r?e.dxfType:null),a=this._GetBatch(s).PushChunk(e.vertices.length);for(const o of e.vertices)a.PushVertex(this._TransformVertex(o,t));for(const o of e.indices)a.PushIndex(o);a.Finish()}_GetEntityColor(e,t=null){let r=Y0.BY_LAYER;if(e.colorIndex===0)r=Y0.BY_BLOCK;else if(e.colorIndex===256){if(e.hasOwnProperty("layer")){const s=this.layers.get(e.layer);if(s)return s.color}r=Y0.BY_LAYER}else e.hasOwnProperty("color")&&e.color!=null&&(r=e.color);if(t)return r;if(r===Y0.BY_BLOCK&&(r=Y0.BY_LAYER),r===Y0.BY_LAYER){const s=e.hasOwnProperty("layer")?e.layer:"0",i=this.layers.get(s);if(i&&i.color!=null)return i.color}else return r;return 0}_GetEntityLayer(e,t=null){return e.hasOwnProperty("layer")&&e.layer!=null?e.layer:t?null:"0"}_GetEntityTextStyle(e){return e.hasOwnProperty("styleName")?this.fontStyles.get(e.styleName)??null:null}_GetEntityExtrusionTransform(e){return!e.hasOwnProperty("extrusionDirection")||e.extrusionDirection.z>0?null:new A.Matrix3().scale(-1,1)}_GetBatch(e){let t=this.batches.find({key:e});if(t!==null)return t;if(t=new hn(e),this.batches.insert(t),e.blockName!==null&&!e.IsInstanced()){const r=this.blocks.get(e.blockName);r&&r.batches.push(t)}return t}_TransformVertex(e,t=null){return t?t.TransformVertex(e):(this._UpdateBounds(e),{x:e.x-this.origin.x,y:e.y-this.origin.y})}_UpdateBounds(e){this.bounds===null?this.bounds={minX:e.x,maxX:e.x,minY:e.y,maxY:e.y}:(e.x<this.bounds.minX?this.bounds.minX=e.x:e.x>this.bounds.maxX&&(this.bounds.maxX=e.x),e.y<this.bounds.minY?this.bounds.minY=e.y:e.y>this.bounds.maxY&&(this.bounds.maxY=e.y)),this.origin===null&&(this.origin={x:e.x,y:e.y})}_BuildScene(){let e=0,t=0,r=0;this.batches.each(a=>{e+=a.GetVerticesBufferSize(),t+=a.GetIndicesBufferSize(),r+=a.GetTransformsSize()});const s={vertices:new ArrayBuffer(e),indices:new ArrayBuffer(t),transforms:new ArrayBuffer(r),batches:[],layers:[],origin:this.origin,bounds:this.bounds,hasMissingChars:this.hasMissingChars},i={vertices:new Float32Array(s.vertices),verticesOffset:0,indices:new Uint16Array(s.indices),indicesOffset:0,transforms:new Float32Array(s.transforms),transformsOffset:0};this.batches.each(a=>{s.batches.push(a.Serialize(i))});for(const a of this.layers.values())a.frozen||s.layers.push({name:a.name,displayName:a.displayName,color:a.color});return s.pointShapeHasDot=(this.pdMode&B0.MARK_MASK)===B0.DOT,s}}class hn{constructor(e){this.key=e,e.IsIndexed()?this.chunks=[]:e.geometryType===q.GeometryType.BLOCK_INSTANCE?this.transforms=new $2(V0.FLOAT32):this.vertices=new $2(V0.FLOAT32)}PushVertex(e){const t=this.vertices.Push(e.x);return this.vertices.Push(e.y),t}PushInstanceTransform(e){for(let t=0;t<2;t++)for(let r=0;r<3;r++)this.transforms.Push(e.elements[r*3+t])}PushChunk(e){if(e>z1)throw new Error("Vertices count exceeds chunk limit: "+e);let t=null,r=0;for(const s of this.chunks){const i=z1-s.vertices.GetSize()/2;i<e||(t===null||i<r)&&(t=s,r=i)}return t===null&&(t=this._NewChunk(e)),new fn(t,e)}Merge(e,t=null){if(this.key.geometryType!==e.key.geometryType)throw new Error(`Rendering batch merging geometry type mismatch: ${this.key.geometryType} !== ${e.key.geometryType}`);if(this.key.IsInstanced())throw new Error("Attempted to merge instanced batch");if(this.key.IsIndexed())for(const r of e.chunks){const s=r.vertices.size,i=this.PushChunk(s/2);for(let o=0;o<s;o+=2){const l=new A.Vector2(r.vertices.Get(o),r.vertices.Get(o+1));t&&l.applyMatrix3(t),i.PushVertex(l)}const a=r.indices.size;for(let o=0;o<a;o++)i.PushIndex(r.indices.Get(o));i.Finish()}else{const r=e.vertices.size;for(let s=0;s<r;s+=2){const i=new A.Vector2(e.vertices.Get(s),e.vertices.Get(s+1));t&&i.applyMatrix3(t),this.PushVertex(i)}}}GetVerticesBufferSize(){if(this.key.IsIndexed()){let e=0;for(const t of this.chunks)e+=t.vertices.GetSize();return e*Float32Array.BYTES_PER_ELEMENT}else return this.key.geometryType===q.GeometryType.BLOCK_INSTANCE?0:this.vertices.GetSize()*Float32Array.BYTES_PER_ELEMENT}GetIndicesBufferSize(){if(this.key.IsIndexed()){let e=0;for(const t of this.chunks)e+=t.indices.GetSize();return e*Uint16Array.BYTES_PER_ELEMENT}else return 0}GetTransformsSize(){return this.key.geometryType===q.GeometryType.BLOCK_INSTANCE?this.transforms.GetSize()*Float32Array.BYTES_PER_ELEMENT:0}Serialize(e){if(this.key.IsIndexed()){const t={key:this.key,dxfHandle:this.key.dxfHandle,dxfType:this.key.dxfType,chunks:[]};for(const r of this.chunks)t.chunks.push(r.Serialize(e));return t}else if(this.key.geometryType===q.GeometryType.BLOCK_INSTANCE){const t=this.transforms.GetSize(),r={key:this.key,dxfHandle:this.key.dxfHandle,dxfType:this.key.dxfType,transformsOffset:e.transformsOffset,transformsSize:t};return this.transforms.CopyTo(e.transforms,e.transformsOffset),e.transformsOffset+=t,r}else{const t=this.vertices.GetSize(),r={key:this.key,dxfHandle:this.key.dxfHandle,dxfType:this.key.dxfType,verticesOffset:e.verticesOffset,verticesSize:t};return this.vertices.CopyTo(e.vertices,e.verticesOffset),e.verticesOffset+=t,r}}_NewChunk(e){const t=new un(e);return this.chunks.push(t),t}}let lt=class{constructor(e){this.data=e,this.useCount=0,this.nestedUseCount=0,this.verticesCount=0,this.offset=null,this.batches=[],this.flatten=!1,this.bounds=null,this.attdefs=new Map}SetFlatten(){return this.HasGeometry()?(this.flatten=this.useCount===1||this.useCount*this.verticesCount<=on,this.flatten):!1}HasGeometry(){return this.offset!==null}RegisterInsert(e){this.useCount++}RegisterNestedUse(e){this.nestedUseCount++}DefinitionContext(){return new X0(this,X0.Type.DEFINITION)}InstantiationContext(){return new X0(this,X0.Type.INSTANTIATION)}UpdateBounds(e){this.bounds===null?this.bounds={minX:e.x,maxX:e.x,minY:e.y,maxY:e.y}:(e.x<this.bounds.minX?this.bounds.minX=e.x:e.x>this.bounds.maxX&&(this.bounds.maxX=e.x),e.y<this.bounds.minY?this.bounds.minY=e.y:e.y>this.bounds.maxY&&(this.bounds.maxY=e.y))}};class X0{constructor(e,t){this.block=e,this.type=t,this.origin=this.block.data.position,this.transform=new A.Matrix3}get name(){return this.block.data.name}TransformVertex(e){const t=new A.Vector2(e.x,e.y).applyMatrix3(this.transform);if(this.type!==X0.Type.DEFINITION&&this.type!==X0.Type.NESTED_DEFINITION)throw new Error("Unexpected transform type");if(this.block.verticesCount++,this.block.offset===null){this.block.offset=t;const r=new A.Vector2;return this.block.UpdateBounds(r),r}return t.sub(this.block.offset),this.block.UpdateBounds(t),t}GetInsertionTransform(e){const t=new A.Matrix3().translate(-this.origin.x,-this.origin.y),r=e.yScale||1,s=e.xScale||1,i=-(e.rotation||0)*Math.PI/180;let a=e.position.x;const o=e.position.y;if(t.scale(s,r),t.rotate(i),t.translate(a,o),e.extrusionDirection&&e.extrusionDirection.z<0&&t.scale(-1,1),this.type!==X0.Type.INSTANTIATION)return t;if(this.block.offset){const l=new A.Matrix3().translate(this.block.offset.x,this.block.offset.y);return t.multiply(l)}return t}NestedBlockContext(e,t){e.RegisterNestedUse(this.block);const s=new X0(e,X0.Type.NESTED_DEFINITION).GetInsertionTransform(t),i=new X0(this.block,X0.Type.NESTED_DEFINITION);return i.transform=new A.Matrix3().multiplyMatrices(this.transform,s),i}}X0.Type=Object.freeze({DEFINITION:0,NESTED_DEFINITION:1,INSTANTIATION:2});class un{constructor(e){e<16&&(e=16),this.indices=new $2(V0.UINT16,e*2),this.vertices=new $2(V0.FLOAT32,e*2)}Serialize(e){const t={};{const r=this.vertices.GetSize();t.verticesOffset=e.verticesOffset,t.verticesSize=r,this.vertices.CopyTo(e.vertices,e.verticesOffset),e.verticesOffset+=r}{const r=this.indices.GetSize();t.indicesOffset=e.indicesOffset,t.indicesSize=r,this.indices.CopyTo(e.indices,e.indicesOffset),e.indicesOffset+=r}return t}}class fn{constructor(e,t){this.chunk=e,this.verticesCount=t,this.verticesOffset=this.chunk.vertices.GetSize()/2,this.numVerticesPushed=0}PushVertex(e){if(this.numVerticesPushed===this.verticesCount)throw new Error;this.chunk.vertices.Push(e.x),this.chunk.vertices.Push(e.y),this.numVerticesPushed++}PushIndex(e){if(e<0||e>=this.verticesCount)throw new Error(`Index out of range: ${e}/${this.verticesCount}`);this.chunk.indices.Push(e+this.verticesOffset)}Finish(){if(this.numVerticesPushed!==this.verticesCount)throw new Error(`Not all vertices pushed: ${this.numVerticesPushed}/${this.verticesCount}`)}}class G{constructor({type:e,vertices:t,indices:r=null,layer:s=null,color:i,lineType:a=0,shape:o=!1}){this.type=e,this.vertices=t,this.indices=r,this.layer=s,this.color=i,this.lineType=a,this.shape=o}*_IterateVertices(e,t){for(let r=e;r<e+t;r++)yield this.vertices[r]}*_IterateLineChunks(){const e=this.vertices.length;if(e<2)return;const t=this;for(let r=0;r<=e;r+=z1){let s=e-r,i;if(s>z1?(s=z1,i=!1):i=!0,i&&this.shape&&r>0&&s===z1&&(i=!1),r===e&&!this.shape)break;let a,o,l;s<2?(s===1&&this.shape?a=(function*(){yield this.vertices[r],yield this.vertices[0]})():s===1?a=(function*(){yield this.vertices[r-1],yield this.vertices[r]})():a=(function*(){yield this.vertices[e-1],yield this.vertices[0]})(),o=S4(2,!1),l=2):i&&this.shape&&r>0&&s<z1?(a=(function*(){yield*t._IterateVertices(r,s),yield this.vertices[0]})(),o=S4(s+1,!1),l=s+1):(a=this._IterateVertices(r,s),o=S4(s,i&&r===0&&this.shape),l=s),yield{verticesCount:l,vertices:a,indices:o}}}}G.Type=Object.freeze({POINTS:0,LINE_SEGMENTS:1,POLYLINE:2,TRIANGLES:3});function*S4(n,e){for(let t=0;t<n-1;t++)yield t,yield t+1;e&&n>2&&(yield n-1,yield 0)}const B0=Object.freeze({DOT:0,NONE:1,PLUS:2,CROSS:3,TICK:4,MARK_MASK:15,CIRCLE:32,SQUARE:64,SHAPE_MASK:240}),Y0=Object.freeze({BY_LAYER:-1,BY_BLOCK:-2});k2.DefaultOptions={arcTessellationAngle:10/180*Math.PI,minArcTessellationSubdivisions:8,wireframeMesh:!1,suppressPaperSpace:!1,textOptions:S2.DefaultOptions};/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||(function(){var n=(function(){try{var t={},r=Object.defineProperty,s=r(t,t,t)&&r}catch{}return s})(),e=function(t){if(this==null)throw TypeError();var r=String(this),s=r.length,i=t?Number(t):0;if(i!=i&&(i=0),!(i<0||i>=s)){var a=r.charCodeAt(i),o;return a>=55296&&a<=56319&&s>i+1&&(o=r.charCodeAt(i+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}};n?n(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e})();var w4=0,ct=-3;function L2(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function pn(n,e){this.source=n,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new L2,this.dtree=new L2}var ht=new L2,ut=new L2,T4=new Uint8Array(30),E4=new Uint16Array(30),ft=new Uint8Array(30),pt=new Uint16Array(30),dn=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dt=new L2,v1=new Uint8Array(320);function vt(n,e,t,r){var s,i;for(s=0;s<t;++s)n[s]=0;for(s=0;s<30-t;++s)n[s+t]=s/t|0;for(i=r,s=0;s<30;++s)e[s]=i,i+=1<<n[s]}function vn(n,e){var t;for(t=0;t<7;++t)n.table[t]=0;for(n.table[7]=24,n.table[8]=152,n.table[9]=112,t=0;t<24;++t)n.trans[t]=256+t;for(t=0;t<144;++t)n.trans[24+t]=t;for(t=0;t<8;++t)n.trans[168+t]=280+t;for(t=0;t<112;++t)n.trans[176+t]=144+t;for(t=0;t<5;++t)e.table[t]=0;for(e.table[5]=32,t=0;t<32;++t)e.trans[t]=t}var yt=new Uint16Array(16);function C4(n,e,t,r){var s,i;for(s=0;s<16;++s)n.table[s]=0;for(s=0;s<r;++s)n.table[e[t+s]]++;for(n.table[0]=0,i=0,s=0;s<16;++s)yt[s]=i,i+=n.table[s];for(s=0;s<r;++s)e[t+s]&&(n.trans[yt[e[t+s]]++]=s)}function yn(n){n.bitcount--||(n.tag=n.source[n.sourceIndex++],n.bitcount=7);var e=n.tag&1;return n.tag>>>=1,e}function y1(n,e,t){if(!e)return t;for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var r=n.tag&65535>>>16-e;return n.tag>>>=e,n.bitcount-=e,r+t}function P4(n,e){for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var t=0,r=0,s=0,i=n.tag;do r=2*r+(i&1),i>>>=1,++s,t+=e.table[s],r-=e.table[s];while(r>=0);return n.tag=i,n.bitcount-=s,e.trans[t+r]}function gn(n,e,t){var r,s,i,a,o,l;for(r=y1(n,5,257),s=y1(n,5,1),i=y1(n,4,4),a=0;a<19;++a)v1[a]=0;for(a=0;a<i;++a){var c=y1(n,3,0);v1[dn[a]]=c}for(C4(dt,v1,0,19),o=0;o<r+s;){var u=P4(n,dt);switch(u){case 16:var f=v1[o-1];for(l=y1(n,2,3);l;--l)v1[o++]=f;break;case 17:for(l=y1(n,3,3);l;--l)v1[o++]=0;break;case 18:for(l=y1(n,7,11);l;--l)v1[o++]=0;break;default:v1[o++]=u;break}}C4(e,v1,0,r),C4(t,v1,r,s)}function gt(n,e,t){for(;;){var r=P4(n,e);if(r===256)return w4;if(r<256)n.dest[n.destLen++]=r;else{var s,i,a,o;for(r-=257,s=y1(n,T4[r],E4[r]),i=P4(n,t),a=n.destLen-y1(n,ft[i],pt[i]),o=a;o<a+s;++o)n.dest[n.destLen++]=n.dest[o]}}}function mn(n){for(var e,t,r;n.bitcount>8;)n.sourceIndex--,n.bitcount-=8;if(e=n.source[n.sourceIndex+1],e=256*e+n.source[n.sourceIndex],t=n.source[n.sourceIndex+3],t=256*t+n.source[n.sourceIndex+2],e!==(~t&65535))return ct;for(n.sourceIndex+=4,r=e;r;--r)n.dest[n.destLen++]=n.source[n.sourceIndex++];return n.bitcount=0,w4}function xn(n,e){var t=new pn(n,e),r,s,i;do{switch(r=yn(t),s=y1(t,2,0),s){case 0:i=mn(t);break;case 1:i=gt(t,ht,ut);break;case 2:gn(t,t.ltree,t.dtree),i=gt(t,t.ltree,t.dtree);break;default:i=ct}if(i!==w4)throw new Error("Data error")}while(!r);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}vn(ht,ut),vt(T4,E4,4,3),vt(ft,pt,2,1),T4[28]=0,E4[28]=258;var bn=xn;function s2(n,e,t,r,s){return Math.pow(1-s,3)*n+3*Math.pow(1-s,2)*s*e+3*(1-s)*Math.pow(s,2)*t+Math.pow(s,3)*r}function S1(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}S1.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)},S1.prototype.addPoint=function(n,e){typeof n=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=n,this.x2=n),n<this.x1&&(this.x1=n),n>this.x2&&(this.x2=n)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))},S1.prototype.addX=function(n){this.addPoint(n,null)},S1.prototype.addY=function(n){this.addPoint(null,n)},S1.prototype.addBezier=function(n,e,t,r,s,i,a,o){var l=[n,e],c=[t,r],u=[s,i],f=[a,o];this.addPoint(n,e),this.addPoint(a,o);for(var p=0;p<=1;p++){var d=6*l[p]-12*c[p]+6*u[p],v=-3*l[p]+9*c[p]-9*u[p]+3*f[p],y=3*c[p]-3*l[p];if(v===0){if(d===0)continue;var m=-y/d;0<m&&m<1&&(p===0&&this.addX(s2(l[p],c[p],u[p],f[p],m)),p===1&&this.addY(s2(l[p],c[p],u[p],f[p],m)));continue}var g=Math.pow(d,2)-4*y*v;if(!(g<0)){var P=(-d+Math.sqrt(g))/(2*v);0<P&&P<1&&(p===0&&this.addX(s2(l[p],c[p],u[p],f[p],P)),p===1&&this.addY(s2(l[p],c[p],u[p],f[p],P)));var S=(-d-Math.sqrt(g))/(2*v);0<S&&S<1&&(p===0&&this.addX(s2(l[p],c[p],u[p],f[p],S)),p===1&&this.addY(s2(l[p],c[p],u[p],f[p],S)))}}},S1.prototype.addQuad=function(n,e,t,r,s,i){var a=n+.6666666666666666*(t-n),o=e+2/3*(r-e),l=a+1/3*(s-n),c=o+1/3*(i-e);this.addBezier(n,e,a,o,l,c,s,i)};function C0(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}C0.prototype.moveTo=function(n,e){this.commands.push({type:"M",x:n,y:e})},C0.prototype.lineTo=function(n,e){this.commands.push({type:"L",x:n,y:e})},C0.prototype.curveTo=C0.prototype.bezierCurveTo=function(n,e,t,r,s,i){this.commands.push({type:"C",x1:n,y1:e,x2:t,y2:r,x:s,y:i})},C0.prototype.quadTo=C0.prototype.quadraticCurveTo=function(n,e,t,r){this.commands.push({type:"Q",x1:n,y1:e,x:t,y:r})},C0.prototype.close=C0.prototype.closePath=function(){this.commands.push({type:"Z"})},C0.prototype.extend=function(n){if(n.commands)n=n.commands;else if(n instanceof S1){var e=n;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,n)},C0.prototype.getBoundingBox=function(){for(var n=new S1,e=0,t=0,r=0,s=0,i=0;i<this.commands.length;i++){var a=this.commands[i];switch(a.type){case"M":n.addPoint(a.x,a.y),e=r=a.x,t=s=a.y;break;case"L":n.addPoint(a.x,a.y),r=a.x,s=a.y;break;case"Q":n.addQuad(r,s,a.x1,a.y1,a.x,a.y),r=a.x,s=a.y;break;case"C":n.addBezier(r,s,a.x1,a.y1,a.x2,a.y2,a.x,a.y),r=a.x,s=a.y;break;case"Z":r=e,s=t;break;default:throw new Error("Unexpected path command "+a.type)}}return n.isEmpty()&&n.addPoint(0,0),n},C0.prototype.draw=function(n){n.beginPath();for(var e=0;e<this.commands.length;e+=1){var t=this.commands[e];t.type==="M"?n.moveTo(t.x,t.y):t.type==="L"?n.lineTo(t.x,t.y):t.type==="C"?n.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y):t.type==="Q"?n.quadraticCurveTo(t.x1,t.y1,t.x,t.y):t.type==="Z"&&n.closePath()}this.fill&&(n.fillStyle=this.fill,n.fill()),this.stroke&&(n.strokeStyle=this.stroke,n.lineWidth=this.strokeWidth,n.stroke())},C0.prototype.toPathData=function(n){n=n!==void 0?n:2;function e(a){return Math.round(a)===a?""+Math.round(a):a.toFixed(n)}function t(){for(var a=arguments,o="",l=0;l<arguments.length;l+=1){var c=a[l];c>=0&&l>0&&(o+=" "),o+=e(c)}return o}for(var r="",s=0;s<this.commands.length;s+=1){var i=this.commands[s];i.type==="M"?r+="M"+t(i.x,i.y):i.type==="L"?r+="L"+t(i.x,i.y):i.type==="C"?r+="C"+t(i.x1,i.y1,i.x2,i.y2,i.x,i.y):i.type==="Q"?r+="Q"+t(i.x1,i.y1,i.x,i.y):i.type==="Z"&&(r+="Z")}return r},C0.prototype.toSVG=function(n){var e='<path d="';return e+=this.toPathData(n),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e},C0.prototype.toDOMElement=function(n){var e=this.toPathData(n),t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",e),t};function mt(n){throw new Error(n)}function xt(n,e){n||mt(e)}var X={fail:mt,argument:xt,assert:xt},bt=32768,St=2147483648,i2={},N={},J={};function i1(n){return function(){return n}}N.BYTE=function(n){return X.argument(n>=0&&n<=255,"Byte value should be between 0 and 255."),[n]},J.BYTE=i1(1),N.CHAR=function(n){return[n.charCodeAt(0)]},J.CHAR=i1(1),N.CHARARRAY=function(n){typeof n>"u"&&(n="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],t=0;t<n.length;t+=1)e[t]=n.charCodeAt(t);return e},J.CHARARRAY=function(n){return typeof n>"u"?0:n.length},N.USHORT=function(n){return[n>>8&255,n&255]},J.USHORT=i1(2),N.SHORT=function(n){return n>=bt&&(n=-(2*bt-n)),[n>>8&255,n&255]},J.SHORT=i1(2),N.UINT24=function(n){return[n>>16&255,n>>8&255,n&255]},J.UINT24=i1(3),N.ULONG=function(n){return[n>>24&255,n>>16&255,n>>8&255,n&255]},J.ULONG=i1(4),N.LONG=function(n){return n>=St&&(n=-(2*St-n)),[n>>24&255,n>>16&255,n>>8&255,n&255]},J.LONG=i1(4),N.FIXED=N.ULONG,J.FIXED=J.ULONG,N.FWORD=N.SHORT,J.FWORD=J.SHORT,N.UFWORD=N.USHORT,J.UFWORD=J.USHORT,N.LONGDATETIME=function(n){return[0,0,0,0,n>>24&255,n>>16&255,n>>8&255,n&255]},J.LONGDATETIME=i1(8),N.TAG=function(n){return X.argument(n.length===4,"Tag should be exactly 4 ASCII characters."),[n.charCodeAt(0),n.charCodeAt(1),n.charCodeAt(2),n.charCodeAt(3)]},J.TAG=i1(4),N.Card8=N.BYTE,J.Card8=J.BYTE,N.Card16=N.USHORT,J.Card16=J.USHORT,N.OffSize=N.BYTE,J.OffSize=J.BYTE,N.SID=N.USHORT,J.SID=J.USHORT,N.NUMBER=function(n){return n>=-107&&n<=107?[n+139]:n>=108&&n<=1131?(n=n-108,[(n>>8)+247,n&255]):n>=-1131&&n<=-108?(n=-n-108,[(n>>8)+251,n&255]):n>=-32768&&n<=32767?N.NUMBER16(n):N.NUMBER32(n)},J.NUMBER=function(n){return N.NUMBER(n).length},N.NUMBER16=function(n){return[28,n>>8&255,n&255]},J.NUMBER16=i1(3),N.NUMBER32=function(n){return[29,n>>24&255,n>>16&255,n>>8&255,n&255]},J.NUMBER32=i1(5),N.REAL=function(n){var e=n.toString(),t=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(t){var r=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));e=(Math.round(n*r)/r).toString()}for(var s="",i=0,a=e.length;i<a;i+=1){var o=e[i];o==="e"?s+=e[++i]==="-"?"c":"b":o==="."?s+="a":o==="-"?s+="e":s+=o}s+=s.length&1?"f":"ff";for(var l=[30],c=0,u=s.length;c<u;c+=2)l.push(parseInt(s.substr(c,2),16));return l},J.REAL=function(n){return N.REAL(n).length},N.NAME=N.CHARARRAY,J.NAME=J.CHARARRAY,N.STRING=N.CHARARRAY,J.STRING=J.CHARARRAY,i2.UTF8=function(n,e,t){for(var r=[],s=t,i=0;i<s;i++,e+=1)r[i]=n.getUint8(e);return String.fromCharCode.apply(null,r)},i2.UTF16=function(n,e,t){for(var r=[],s=t/2,i=0;i<s;i++,e+=2)r[i]=n.getUint16(e);return String.fromCharCode.apply(null,r)},N.UTF16=function(n){for(var e=[],t=0;t<n.length;t+=1){var r=n.charCodeAt(t);e[e.length]=r>>8&255,e[e.length]=r&255}return e},J.UTF16=function(n){return n.length*2};var A4={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};i2.MACSTRING=function(n,e,t,r){var s=A4[r];if(s!==void 0){for(var i="",a=0;a<t;a++){var o=n.getUint8(e+a);o<=127?i+=String.fromCharCode(o):i+=s[o&127]}return i}};var ue=typeof WeakMap=="function"&&new WeakMap,fe,Sn=function(n){if(!fe){fe={};for(var e in A4)fe[e]=new String(e)}var t=fe[n];if(t!==void 0){if(ue){var r=ue.get(t);if(r!==void 0)return r}var s=A4[n];if(s!==void 0){for(var i={},a=0;a<s.length;a++)i[s.charCodeAt(a)]=a+128;return ue&&ue.set(t,i),i}}};N.MACSTRING=function(n,e){var t=Sn(e);if(t!==void 0){for(var r=[],s=0;s<n.length;s++){var i=n.charCodeAt(s);if(i>=128&&(i=t[i],i===void 0))return;r[s]=i}return r}},J.MACSTRING=function(n,e){var t=N.MACSTRING(n,e);return t!==void 0?t.length:0};function k4(n){return n>=-128&&n<=127}function wn(n,e,t){for(var r=0,s=n.length;e<s&&r<64&&n[e]===0;)++e,++r;return t.push(128|r-1),e}function Tn(n,e,t){for(var r=0,s=n.length,i=e;i<s&&r<64;){var a=n[i];if(!k4(a)||a===0&&i+1<s&&n[i+1]===0)break;++i,++r}t.push(r-1);for(var o=e;o<i;++o)t.push(n[o]+256&255);return i}function En(n,e,t){for(var r=0,s=n.length,i=e;i<s&&r<64;){var a=n[i];if(a===0||k4(a)&&i+1<s&&k4(n[i+1]))break;++i,++r}t.push(64|r-1);for(var o=e;o<i;++o){var l=n[o];t.push(l+65536>>8&255,l+256&255)}return i}N.VARDELTAS=function(n){for(var e=0,t=[];e<n.length;){var r=n[e];r===0?e=wn(n,e,t):r>=-128&&r<=127?e=Tn(n,e,t):e=En(n,e,t)}return t},N.INDEX=function(n){for(var e=1,t=[e],r=[],s=0;s<n.length;s+=1){var i=N.OBJECT(n[s]);Array.prototype.push.apply(r,i),e+=i.length,t.push(e)}if(r.length===0)return[0,0];for(var a=[],o=1+Math.floor(Math.log(e)/Math.log(2))/8|0,l=[void 0,N.BYTE,N.USHORT,N.UINT24,N.ULONG][o],c=0;c<t.length;c+=1){var u=l(t[c]);Array.prototype.push.apply(a,u)}return Array.prototype.concat(N.Card16(n.length),N.OffSize(o),a,r)},J.INDEX=function(n){return N.INDEX(n).length},N.DICT=function(n){for(var e=[],t=Object.keys(n),r=t.length,s=0;s<r;s+=1){var i=parseInt(t[s],0),a=n[i];e=e.concat(N.OPERAND(a.value,a.type)),e=e.concat(N.OPERATOR(i))}return e},J.DICT=function(n){return N.DICT(n).length},N.OPERATOR=function(n){return n<1200?[n]:[12,n-1200]},N.OPERAND=function(n,e){var t=[];if(Array.isArray(e))for(var r=0;r<e.length;r+=1)X.argument(n.length===e.length,"Not enough arguments given for type"+e),t=t.concat(N.OPERAND(n[r],e[r]));else if(e==="SID")t=t.concat(N.NUMBER(n));else if(e==="offset")t=t.concat(N.NUMBER32(n));else if(e==="number")t=t.concat(N.NUMBER(n));else if(e==="real")t=t.concat(N.REAL(n));else throw new Error("Unknown operand type "+e);return t},N.OP=N.BYTE,J.OP=J.BYTE;var pe=typeof WeakMap=="function"&&new WeakMap;N.CHARSTRING=function(n){if(pe){var e=pe.get(n);if(e!==void 0)return e}for(var t=[],r=n.length,s=0;s<r;s+=1){var i=n[s];t=t.concat(N[i.type](i.value))}return pe&&pe.set(n,t),t},J.CHARSTRING=function(n){return N.CHARSTRING(n).length},N.OBJECT=function(n){var e=N[n.type];return X.argument(e!==void 0,"No encoding function for type "+n.type),e(n.value)},J.OBJECT=function(n){var e=J[n.type];return X.argument(e!==void 0,"No sizeOf function for type "+n.type),e(n.value)},N.TABLE=function(n){for(var e=[],t=n.fields.length,r=[],s=[],i=0;i<t;i+=1){var a=n.fields[i],o=N[a.type];X.argument(o!==void 0,"No encoding function for field type "+a.type+" ("+a.name+")");var l=n[a.name];l===void 0&&(l=a.value);var c=o(l);a.type==="TABLE"?(s.push(e.length),e=e.concat([0,0]),r.push(c)):e=e.concat(c)}for(var u=0;u<r.length;u+=1){var f=s[u],p=e.length;X.argument(p<65536,"Table "+n.tableName+" too big."),e[f]=p>>8,e[f+1]=p&255,e=e.concat(r[u])}return e},J.TABLE=function(n){for(var e=0,t=n.fields.length,r=0;r<t;r+=1){var s=n.fields[r],i=J[s.type];X.argument(i!==void 0,"No sizeOf function for field type "+s.type+" ("+s.name+")");var a=n[s.name];a===void 0&&(a=s.value),e+=i(a),s.type==="TABLE"&&(e+=2)}return e},N.RECORD=N.TABLE,J.RECORD=J.TABLE,N.LITERAL=function(n){return n},J.LITERAL=function(n){return n.length};function F0(n,e,t){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var r=0;r<e.length;r+=1){var s=e[r];this[s.name]=s.value}if(this.tableName=n,this.fields=e,t)for(var i=Object.keys(t),a=0;a<i.length;a+=1){var o=i[a],l=t[o];this[o]!==void 0&&(this[o]=l)}}F0.prototype.encode=function(){return N.TABLE(this)},F0.prototype.sizeOf=function(){return J.TABLE(this)};function F2(n,e,t){t===void 0&&(t=e.length);var r=new Array(e.length+1);r[0]={name:n+"Count",type:"USHORT",value:t};for(var s=0;s<e.length;s++)r[s+1]={name:n+s,type:"USHORT",value:e[s]};return r}function L4(n,e,t){var r=e.length,s=new Array(r+1);s[0]={name:n+"Count",type:"USHORT",value:r};for(var i=0;i<r;i++)s[i+1]={name:n+i,type:"TABLE",value:t(e[i],i)};return s}function O2(n,e,t){var r=e.length,s=[];s[0]={name:n+"Count",type:"USHORT",value:r};for(var i=0;i<r;i++)s=s.concat(t(e[i],i));return s}function de(n){n.format===1?F0.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(F2("glyph",n.glyphs))):n.format===2?F0.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(O2("rangeRecord",n.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):X.assert(!1,"Coverage format must be 1 or 2.")}de.prototype=Object.create(F0.prototype),de.prototype.constructor=de;function ve(n){F0.call(this,"scriptListTable",O2("scriptRecord",n,function(e,t){var r=e.script,s=r.defaultLangSys;return X.assert(!!s,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:e.tag},{name:"script"+t,type:"TABLE",value:new F0("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new F0("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:s.reqFeatureIndex}].concat(F2("featureIndex",s.featureIndexes)))}].concat(O2("langSys",r.langSysRecords,function(i,a){var o=i.langSys;return[{name:"langSysTag"+a,type:"TAG",value:i.tag},{name:"langSys"+a,type:"TABLE",value:new F0("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:o.reqFeatureIndex}].concat(F2("featureIndex",o.featureIndexes)))}]})))}]}))}ve.prototype=Object.create(F0.prototype),ve.prototype.constructor=ve;function ye(n){F0.call(this,"featureListTable",O2("featureRecord",n,function(e,t){var r=e.feature;return[{name:"featureTag"+t,type:"TAG",value:e.tag},{name:"feature"+t,type:"TABLE",value:new F0("featureTable",[{name:"featureParams",type:"USHORT",value:r.featureParams}].concat(F2("lookupListIndex",r.lookupListIndexes)))}]}))}ye.prototype=Object.create(F0.prototype),ye.prototype.constructor=ye;function ge(n,e){F0.call(this,"lookupListTable",L4("lookup",n,function(t){var r=e[t.lookupType];return X.assert(!!r,"Unable to write GSUB lookup type "+t.lookupType+" tables."),new F0("lookupTable",[{name:"lookupType",type:"USHORT",value:t.lookupType},{name:"lookupFlag",type:"USHORT",value:t.lookupFlag}].concat(L4("subtable",t.subtables,r)))}))}ge.prototype=Object.create(F0.prototype),ge.prototype.constructor=ge;var U={Table:F0,Record:F0,Coverage:de,ScriptList:ve,FeatureList:ye,LookupList:ge,ushortList:F2,tableList:L4,recordList:O2};function wt(n,e){return n.getUint8(e)}function me(n,e){return n.getUint16(e,!1)}function Cn(n,e){return n.getInt16(e,!1)}function F4(n,e){return n.getUint32(e,!1)}function Tt(n,e){var t=n.getInt16(e,!1),r=n.getUint16(e+2,!1);return t+r/65535}function Pn(n,e){for(var t="",r=e;r<e+4;r+=1)t+=String.fromCharCode(n.getInt8(r));return t}function An(n,e,t){for(var r=0,s=0;s<t;s+=1)r<<=8,r+=n.getUint8(e+s);return r}function kn(n,e,t){for(var r=[],s=e;s<t;s+=1)r.push(n.getUint8(s));return r}function Ln(n){for(var e="",t=0;t<n.length;t+=1)e+=String.fromCharCode(n[t]);return e}var Fn={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function L(n,e){this.data=n,this.offset=e,this.relativeOffset=0}L.prototype.parseByte=function(){var n=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n},L.prototype.parseChar=function(){var n=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n},L.prototype.parseCard8=L.prototype.parseByte,L.prototype.parseUShort=function(){var n=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n},L.prototype.parseCard16=L.prototype.parseUShort,L.prototype.parseSID=L.prototype.parseUShort,L.prototype.parseOffset16=L.prototype.parseUShort,L.prototype.parseShort=function(){var n=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n},L.prototype.parseF2Dot14=function(){var n=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,n},L.prototype.parseULong=function(){var n=F4(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n},L.prototype.parseOffset32=L.prototype.parseULong,L.prototype.parseFixed=function(){var n=Tt(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n},L.prototype.parseString=function(n){var e=this.data,t=this.offset+this.relativeOffset,r="";this.relativeOffset+=n;for(var s=0;s<n;s++)r+=String.fromCharCode(e.getUint8(t+s));return r},L.prototype.parseTag=function(){return this.parseString(4)},L.prototype.parseLongDateTime=function(){var n=F4(this.data,this.offset+this.relativeOffset+4);return n-=2082844800,this.relativeOffset+=8,n},L.prototype.parseVersion=function(n){var e=me(this.data,this.offset+this.relativeOffset),t=me(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,n===void 0&&(n=4096),e+t/n/10},L.prototype.skip=function(n,e){e===void 0&&(e=1),this.relativeOffset+=Fn[n]*e},L.prototype.parseULongList=function(n){n===void 0&&(n=this.parseULong());for(var e=new Array(n),t=this.data,r=this.offset+this.relativeOffset,s=0;s<n;s++)e[s]=t.getUint32(r),r+=4;return this.relativeOffset+=n*4,e},L.prototype.parseOffset16List=L.prototype.parseUShortList=function(n){n===void 0&&(n=this.parseUShort());for(var e=new Array(n),t=this.data,r=this.offset+this.relativeOffset,s=0;s<n;s++)e[s]=t.getUint16(r),r+=2;return this.relativeOffset+=n*2,e},L.prototype.parseShortList=function(n){for(var e=new Array(n),t=this.data,r=this.offset+this.relativeOffset,s=0;s<n;s++)e[s]=t.getInt16(r),r+=2;return this.relativeOffset+=n*2,e},L.prototype.parseByteList=function(n){for(var e=new Array(n),t=this.data,r=this.offset+this.relativeOffset,s=0;s<n;s++)e[s]=t.getUint8(r++);return this.relativeOffset+=n,e},L.prototype.parseList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),r=0;r<n;r++)t[r]=e.call(this);return t},L.prototype.parseList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),r=0;r<n;r++)t[r]=e.call(this);return t},L.prototype.parseRecordList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),r=Object.keys(e),s=0;s<n;s++){for(var i={},a=0;a<r.length;a++){var o=r[a],l=e[o];i[o]=l.call(this)}t[s]=i}return t},L.prototype.parseRecordList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),r=Object.keys(e),s=0;s<n;s++){for(var i={},a=0;a<r.length;a++){var o=r[a],l=e[o];i[o]=l.call(this)}t[s]=i}return t},L.prototype.parseStruct=function(n){if(typeof n=="function")return n.call(this);for(var e=Object.keys(n),t={},r=0;r<e.length;r++){var s=e[r],i=n[s];t[s]=i.call(this)}return t},L.prototype.parseValueRecord=function(n){if(n===void 0&&(n=this.parseUShort()),n!==0){var e={};return n&1&&(e.xPlacement=this.parseShort()),n&2&&(e.yPlacement=this.parseShort()),n&4&&(e.xAdvance=this.parseShort()),n&8&&(e.yAdvance=this.parseShort()),n&16&&(e.xPlaDevice=void 0,this.parseShort()),n&32&&(e.yPlaDevice=void 0,this.parseShort()),n&64&&(e.xAdvDevice=void 0,this.parseShort()),n&128&&(e.yAdvDevice=void 0,this.parseShort()),e}},L.prototype.parseValueRecordList=function(){for(var n=this.parseUShort(),e=this.parseUShort(),t=new Array(e),r=0;r<e;r++)t[r]=this.parseValueRecord(n);return t},L.prototype.parsePointer=function(n){var e=this.parseOffset16();if(e>0)return new L(this.data,this.offset+e).parseStruct(n)},L.prototype.parsePointer32=function(n){var e=this.parseOffset32();if(e>0)return new L(this.data,this.offset+e).parseStruct(n)},L.prototype.parseListOfLists=function(n){for(var e=this.parseOffset16List(),t=e.length,r=this.relativeOffset,s=new Array(t),i=0;i<t;i++){var a=e[i];if(a===0){s[i]=void 0;continue}if(this.relativeOffset=a,n){for(var o=this.parseOffset16List(),l=new Array(o.length),c=0;c<o.length;c++)this.relativeOffset=a+o[c],l[c]=n.call(this);s[i]=l}else s[i]=this.parseUShortList()}return this.relativeOffset=r,s},L.prototype.parseCoverage=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort(),t=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(t)};if(e===2){for(var r=new Array(t),s=0;s<t;s++)r[s]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:r}}throw new Error("0x"+n.toString(16)+": Coverage format must be 1 or 2.")},L.prototype.parseClassDef=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:L.uShort,end:L.uShort,classId:L.uShort})};throw new Error("0x"+n.toString(16)+": ClassDef format must be 1 or 2.")},L.list=function(n,e){return function(){return this.parseList(n,e)}},L.list32=function(n,e){return function(){return this.parseList32(n,e)}},L.recordList=function(n,e){return function(){return this.parseRecordList(n,e)}},L.recordList32=function(n,e){return function(){return this.parseRecordList32(n,e)}},L.pointer=function(n){return function(){return this.parsePointer(n)}},L.pointer32=function(n){return function(){return this.parsePointer32(n)}},L.tag=L.prototype.parseTag,L.byte=L.prototype.parseByte,L.uShort=L.offset16=L.prototype.parseUShort,L.uShortList=L.prototype.parseUShortList,L.uLong=L.offset32=L.prototype.parseULong,L.uLongList=L.prototype.parseULongList,L.struct=L.prototype.parseStruct,L.coverage=L.prototype.parseCoverage,L.classDef=L.prototype.parseClassDef;var Et={reserved:L.uShort,reqFeatureIndex:L.uShort,featureIndexes:L.uShortList};L.prototype.parseScriptList=function(){return this.parsePointer(L.recordList({tag:L.tag,script:L.pointer({defaultLangSys:L.pointer(Et),langSysRecords:L.recordList({tag:L.tag,langSys:L.pointer(Et)})})}))||[]},L.prototype.parseFeatureList=function(){return this.parsePointer(L.recordList({tag:L.tag,feature:L.pointer({featureParams:L.offset16,lookupListIndexes:L.uShortList})}))||[]},L.prototype.parseLookupList=function(n){return this.parsePointer(L.list(L.pointer(function(){var e=this.parseUShort();X.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var t=this.parseUShort(),r=t&16;return{lookupType:e,lookupFlag:t,subtables:this.parseList(L.pointer(n[e])),markFilteringSet:r?this.parseUShort():void 0}})))||[]},L.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var n=this.parseUShort(),e=this.parseUShort();X.argument(n===1&&e<1,"GPOS/GSUB feature variations table unknown.");var t=this.parseRecordList32({conditionSetOffset:L.offset32,featureTableSubstitutionOffset:L.offset32});return t})||[]};var H={getByte:wt,getCard8:wt,getUShort:me,getCard16:me,getShort:Cn,getULong:F4,getFixed:Tt,getTag:Pn,getOffset:An,getBytes:kn,bytesToString:Ln,Parser:L};function On(n,e){e.parseUShort(),n.length=e.parseULong(),n.language=e.parseULong();var t;n.groupCount=t=e.parseULong(),n.glyphIndexMap={};for(var r=0;r<t;r+=1)for(var s=e.parseULong(),i=e.parseULong(),a=e.parseULong(),o=s;o<=i;o+=1)n.glyphIndexMap[o]=a,a++}function Dn(n,e,t,r,s){n.length=e.parseUShort(),n.language=e.parseUShort();var i;n.segCount=i=e.parseUShort()>>1,e.skip("uShort",3),n.glyphIndexMap={};for(var a=new H.Parser(t,r+s+14),o=new H.Parser(t,r+s+16+i*2),l=new H.Parser(t,r+s+16+i*4),c=new H.Parser(t,r+s+16+i*6),u=r+s+16+i*8,f=0;f<i-1;f+=1)for(var p=void 0,d=a.parseUShort(),v=o.parseUShort(),y=l.parseShort(),m=c.parseUShort(),g=v;g<=d;g+=1)m!==0?(u=c.offset+c.relativeOffset-2,u+=m,u+=(g-v)*2,p=H.getUShort(t,u),p!==0&&(p=p+y&65535)):p=g+y&65535,n.glyphIndexMap[g]=p}function Mn(n,e){var t={};t.version=H.getUShort(n,e),X.argument(t.version===0,"cmap table version should be 0."),t.numTables=H.getUShort(n,e+2);for(var r=-1,s=t.numTables-1;s>=0;s-=1){var i=H.getUShort(n,e+4+s*8),a=H.getUShort(n,e+4+s*8+2);if(i===3&&(a===0||a===1||a===10)||i===0&&(a===0||a===1||a===2||a===3||a===4)){r=H.getULong(n,e+4+s*8+4);break}}if(r===-1)throw new Error("No valid cmap sub-tables found.");var o=new H.Parser(n,e+r);if(t.format=o.parseUShort(),t.format===12)On(t,o);else if(t.format===4)Dn(t,o,n,e,r);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+t.format+").");return t}function In(n,e,t){n.segments.push({end:e,start:e,delta:-(e-t),offset:0,glyphIndex:t})}function _n(n){n.segments.push({end:65535,start:65535,delta:1,offset:0})}function Rn(n){var e=!0,t;for(t=n.length-1;t>0;t-=1){var r=n.get(t);if(r.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var s=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(s=s.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),s=s.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var i=new U.Table("cmap",s);for(i.segments=[],t=0;t<n.length;t+=1){for(var a=n.get(t),o=0;o<a.unicodes.length;o+=1)In(i,a.unicodes[o],t);i.segments=i.segments.sort(function(P,S){return P.start-S.start})}_n(i);var l=i.segments.length,c=0,u=[],f=[],p=[],d=[],v=[],y=[];for(t=0;t<l;t+=1){var m=i.segments[t];m.end<=65535&&m.start<=65535?(u=u.concat({name:"end_"+t,type:"USHORT",value:m.end}),f=f.concat({name:"start_"+t,type:"USHORT",value:m.start}),p=p.concat({name:"idDelta_"+t,type:"SHORT",value:m.delta}),d=d.concat({name:"idRangeOffset_"+t,type:"USHORT",value:m.offset}),m.glyphId!==void 0&&(v=v.concat({name:"glyph_"+t,type:"USHORT",value:m.glyphId}))):c+=1,!e&&m.glyphIndex!==void 0&&(y=y.concat({name:"cmap12Start_"+t,type:"ULONG",value:m.start}),y=y.concat({name:"cmap12End_"+t,type:"ULONG",value:m.end}),y=y.concat({name:"cmap12Glyph_"+t,type:"ULONG",value:m.glyphIndex}))}if(i.segCountX2=(l-c)*2,i.searchRange=Math.pow(2,Math.floor(Math.log(l-c)/Math.log(2)))*2,i.entrySelector=Math.log(i.searchRange/2)/Math.log(2),i.rangeShift=i.segCountX2-i.searchRange,i.fields=i.fields.concat(u),i.fields.push({name:"reservedPad",type:"USHORT",value:0}),i.fields=i.fields.concat(f),i.fields=i.fields.concat(p),i.fields=i.fields.concat(d),i.fields=i.fields.concat(v),i.cmap4Length=14+u.length*2+2+f.length*2+p.length*2+d.length*2+v.length*2,!e){var g=16+y.length*4;i.cmap12Offset=20+i.cmap4Length,i.fields=i.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:g},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:y.length/3}]),i.fields=i.fields.concat(y)}return i}var Ct={parse:Mn,make:Rn},xe=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],Nn=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],Bn=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],H1=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function Pt(n){this.font=n}Pt.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.font.glyphs;if(t){for(var r=0;r<t.length;r+=1)for(var s=t.get(r),i=0;i<s.unicodes.length;i+=1)if(s.unicodes[i]===e)return r}return null};function At(n){this.cmap=n}At.prototype.charToGlyphIndex=function(n){return this.cmap.glyphIndexMap[n.codePointAt(0)]||0};function be(n,e){this.encoding=n,this.charset=e}be.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.encoding[e];return this.charset.indexOf(t)};function O4(n){switch(n.version){case 1:this.names=H1.slice();break;case 2:this.names=new Array(n.numberOfGlyphs);for(var e=0;e<n.numberOfGlyphs;e++)n.glyphNameIndex[e]<H1.length?this.names[e]=H1[n.glyphNameIndex[e]]:this.names[e]=n.names[n.glyphNameIndex[e]-H1.length];break;case 2.5:this.names=new Array(n.numberOfGlyphs);for(var t=0;t<n.numberOfGlyphs;t++)this.names[t]=H1[t+n.glyphNameIndex[t]];break;case 3:this.names=[];break;default:this.names=[];break}}O4.prototype.nameToGlyphIndex=function(n){return this.names.indexOf(n)},O4.prototype.glyphIndexToName=function(n){return this.names[n]};function Un(n){for(var e,t=n.tables.cmap.glyphIndexMap,r=Object.keys(t),s=0;s<r.length;s+=1){var i=r[s],a=t[i];e=n.glyphs.get(a),e.addUnicode(parseInt(i))}for(var o=0;o<n.glyphs.length;o+=1)e=n.glyphs.get(o),n.cffEncoding?n.isCIDFont?e.name="gid"+o:e.name=n.cffEncoding.charset[o]:n.glyphNames.names&&(e.name=n.glyphNames.glyphIndexToName(o))}function Gn(n){n._IndexToUnicodeMap={};for(var e=n.tables.cmap.glyphIndexMap,t=Object.keys(e),r=0;r<t.length;r+=1){var s=t[r],i=e[s];n._IndexToUnicodeMap[i]===void 0?n._IndexToUnicodeMap[i]={unicodes:[parseInt(s)]}:n._IndexToUnicodeMap[i].unicodes.push(parseInt(s))}}function zn(n,e){e.lowMemory?Gn(n):Un(n)}function Hn(n,e,t,r,s){n.beginPath(),n.moveTo(e,t),n.lineTo(r,s),n.stroke()}var V1={line:Hn};function Vn(n,e){var t=e||new C0;return{configurable:!0,get:function(){return typeof t=="function"&&(t=t()),t},set:function(r){t=r}}}function Z0(n){this.bindConstructorValues(n)}Z0.prototype.bindConstructorValues=function(n){this.index=n.index||0,this.name=n.name||null,this.unicode=n.unicode||void 0,this.unicodes=n.unicodes||n.unicode!==void 0?[n.unicode]:[],"xMin"in n&&(this.xMin=n.xMin),"yMin"in n&&(this.yMin=n.yMin),"xMax"in n&&(this.xMax=n.xMax),"yMax"in n&&(this.yMax=n.yMax),"advanceWidth"in n&&(this.advanceWidth=n.advanceWidth),Object.defineProperty(this,"path",Vn(this,n.path))},Z0.prototype.addUnicode=function(n){this.unicodes.length===0&&(this.unicode=n),this.unicodes.push(n)},Z0.prototype.getBoundingBox=function(){return this.path.getBoundingBox()},Z0.prototype.getPath=function(n,e,t,r,s){n=n!==void 0?n:0,e=e!==void 0?e:0,t=t!==void 0?t:72;var i,a;r||(r={});var o=r.xScale,l=r.yScale;if(r.hinting&&s&&s.hinting&&(a=this.path&&s.hinting.exec(this,t)),a)i=s.hinting.getCommands(a),n=Math.round(n),e=Math.round(e),o=l=1;else{i=this.path.commands;var c=1/(this.path.unitsPerEm||1e3)*t;o===void 0&&(o=c),l===void 0&&(l=c)}for(var u=new C0,f=0;f<i.length;f+=1){var p=i[f];p.type==="M"?u.moveTo(n+p.x*o,e+-p.y*l):p.type==="L"?u.lineTo(n+p.x*o,e+-p.y*l):p.type==="Q"?u.quadraticCurveTo(n+p.x1*o,e+-p.y1*l,n+p.x*o,e+-p.y*l):p.type==="C"?u.curveTo(n+p.x1*o,e+-p.y1*l,n+p.x2*o,e+-p.y2*l,n+p.x*o,e+-p.y*l):p.type==="Z"&&u.closePath()}return u},Z0.prototype.getContours=function(){if(this.points===void 0)return[];for(var n=[],e=[],t=0;t<this.points.length;t+=1){var r=this.points[t];e.push(r),r.lastPointOfContour&&(n.push(e),e=[])}return X.argument(e.length===0,"There are still points left in the current contour."),n},Z0.prototype.getMetrics=function(){for(var n=this.path.commands,e=[],t=[],r=0;r<n.length;r+=1){var s=n[r];s.type!=="Z"&&(e.push(s.x),t.push(s.y)),(s.type==="Q"||s.type==="C")&&(e.push(s.x1),t.push(s.y1)),s.type==="C"&&(e.push(s.x2),t.push(s.y2))}var i={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,t),leftSideBearing:this.leftSideBearing};return isFinite(i.xMin)||(i.xMin=0),isFinite(i.xMax)||(i.xMax=this.advanceWidth),isFinite(i.yMin)||(i.yMin=0),isFinite(i.yMax)||(i.yMax=0),i.rightSideBearing=this.advanceWidth-i.leftSideBearing-(i.xMax-i.xMin),i},Z0.prototype.draw=function(n,e,t,r,s){this.getPath(e,t,r,s).draw(n)},Z0.prototype.drawPoints=function(n,e,t,r){function s(f,p,d,v){n.beginPath();for(var y=0;y<f.length;y+=1)n.moveTo(p+f[y].x*v,d+f[y].y*v),n.arc(p+f[y].x*v,d+f[y].y*v,2,0,Math.PI*2,!1);n.closePath(),n.fill()}e=e!==void 0?e:0,t=t!==void 0?t:0,r=r!==void 0?r:24;for(var i=1/this.path.unitsPerEm*r,a=[],o=[],l=this.path,c=0;c<l.commands.length;c+=1){var u=l.commands[c];u.x!==void 0&&a.push({x:u.x,y:-u.y}),u.x1!==void 0&&o.push({x:u.x1,y:-u.y1}),u.x2!==void 0&&o.push({x:u.x2,y:-u.y2})}n.fillStyle="blue",s(a,e,t,i),n.fillStyle="red",s(o,e,t,i)},Z0.prototype.drawMetrics=function(n,e,t,r){var s;e=e!==void 0?e:0,t=t!==void 0?t:0,r=r!==void 0?r:24,s=1/this.path.unitsPerEm*r,n.lineWidth=1,n.strokeStyle="black",V1.line(n,e,-1e4,e,1e4),V1.line(n,-1e4,t,1e4,t);var i=this.xMin||0,a=this.yMin||0,o=this.xMax||0,l=this.yMax||0,c=this.advanceWidth||0;n.strokeStyle="blue",V1.line(n,e+i*s,-1e4,e+i*s,1e4),V1.line(n,e+o*s,-1e4,e+o*s,1e4),V1.line(n,-1e4,t+-a*s,1e4,t+-a*s),V1.line(n,-1e4,t+-l*s,1e4,t+-l*s),n.strokeStyle="green",V1.line(n,e+c*s,-1e4,e+c*s,1e4)};function Se(n,e,t){Object.defineProperty(n,e,{get:function(){return n.path,n[t]},set:function(r){n[t]=r},enumerable:!0,configurable:!0})}function D4(n,e){if(this.font=n,this.glyphs={},Array.isArray(e))for(var t=0;t<e.length;t++){var r=e[t];r.path.unitsPerEm=n.unitsPerEm,this.glyphs[t]=r}this.length=e&&e.length||0}D4.prototype.get=function(n){if(this.glyphs[n]===void 0){this.font._push(n),typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());var e=this.glyphs[n],t=this.font._IndexToUnicodeMap[n];if(t)for(var r=0;r<t.unicodes.length;r++)e.addUnicode(t.unicodes[r]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+n:e.name=this.font.cffEncoding.charset[n]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(n)),this.glyphs[n].advanceWidth=this.font._hmtxTableData[n].advanceWidth,this.glyphs[n].leftSideBearing=this.font._hmtxTableData[n].leftSideBearing}else typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());return this.glyphs[n]},D4.prototype.push=function(n,e){this.glyphs[n]=e,this.length++};function Wn(n,e){return new Z0({index:e,font:n})}function Xn(n,e,t,r,s,i){return function(){var a=new Z0({index:e,font:n});return a.path=function(){t(a,r,s);var o=i(n.glyphs,a);return o.unitsPerEm=n.unitsPerEm,o},Se(a,"xMin","_xMin"),Se(a,"xMax","_xMax"),Se(a,"yMin","_yMin"),Se(a,"yMax","_yMax"),a}}function Yn(n,e,t,r){return function(){var s=new Z0({index:e,font:n});return s.path=function(){var i=t(n,s,r);return i.unitsPerEm=n.unitsPerEm,i},s}}var g1={GlyphSet:D4,glyphLoader:Wn,ttfGlyphLoader:Xn,cffGlyphLoader:Yn};function kt(n,e){if(n===e)return!0;if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;for(var t=0;t<n.length;t+=1)if(!kt(n[t],e[t]))return!1;return!0}else return!1}function M4(n){var e;return n.length<1240?e=107:n.length<33900?e=1131:e=32768,e}function O1(n,e,t){var r=[],s=[],i=H.getCard16(n,e),a,o;if(i!==0){var l=H.getByte(n,e+2);a=e+(i+1)*l+2;for(var c=e+3,u=0;u<i+1;u+=1)r.push(H.getOffset(n,c,l)),c+=l;o=a+r[i]}else o=e+2;for(var f=0;f<r.length-1;f+=1){var p=H.getBytes(n,a+r[f],a+r[f+1]);t&&(p=t(p)),s.push(p)}return{objects:s,startOffset:e,endOffset:o}}function Zn(n,e){var t=[],r=H.getCard16(n,e),s,i;if(r!==0){var a=H.getByte(n,e+2);s=e+(r+1)*a+2;for(var o=e+3,l=0;l<r+1;l+=1)t.push(H.getOffset(n,o,a)),o+=a;i=s+t[r]}else i=e+2;return{offsets:t,startOffset:e,endOffset:i}}function Jn(n,e,t,r,s){var i=H.getCard16(t,r),a=0;if(i!==0){var o=H.getByte(t,r+2);a=r+(i+1)*o+2}var l=H.getBytes(t,a+e[n],a+e[n+1]);return l}function jn(n){for(var e="",t=15,r=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var s=n.parseByte(),i=s>>4,a=s&15;if(i===t||(e+=r[i],a===t))break;e+=r[a]}return parseFloat(e)}function Qn(n,e){var t,r,s,i;if(e===28)return t=n.parseByte(),r=n.parseByte(),t<<8|r;if(e===29)return t=n.parseByte(),r=n.parseByte(),s=n.parseByte(),i=n.parseByte(),t<<24|r<<16|s<<8|i;if(e===30)return jn(n);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return t=n.parseByte(),(e-247)*256+t+108;if(e>=251&&e<=254)return t=n.parseByte(),-(e-251)*256-t-108;throw new Error("Invalid b0 "+e)}function qn(n){for(var e={},t=0;t<n.length;t+=1){var r=n[t][0],s=n[t][1],i=void 0;if(s.length===1?i=s[0]:i=s,e.hasOwnProperty(r)&&!isNaN(e[r]))throw new Error("Object "+e+" already has key "+r);e[r]=i}return e}function Lt(n,e,t){e=e!==void 0?e:0;var r=new H.Parser(n,e),s=[],i=[];for(t=t!==void 0?t:n.length;r.relativeOffset<t;){var a=r.parseByte();a<=21?(a===12&&(a=1200+r.parseByte()),s.push([a,i]),i=[]):i.push(Qn(r,a))}return qn(s)}function D2(n,e){return e<=390?e=xe[e]:e=n[e-391],e}function Ft(n,e,t){for(var r={},s,i=0;i<e.length;i+=1){var a=e[i];if(Array.isArray(a.type)){var o=[];o.length=a.type.length;for(var l=0;l<a.type.length;l++)s=n[a.op]!==void 0?n[a.op][l]:void 0,s===void 0&&(s=a.value!==void 0&&a.value[l]!==void 0?a.value[l]:null),a.type[l]==="SID"&&(s=D2(t,s)),o[l]=s;r[a.name]=o}else s=n[a.op],s===void 0&&(s=a.value!==void 0?a.value:null),a.type==="SID"&&(s=D2(t,s)),r[a.name]=s}return r}function Kn(n,e){var t={};return t.formatMajor=H.getCard8(n,e),t.formatMinor=H.getCard8(n,e+1),t.size=H.getCard8(n,e+2),t.offsetSize=H.getCard8(n,e+3),t.startOffset=e,t.endOffset=e+4,t}var Ot=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],Dt=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function $n(n,e){var t=Lt(n,0,n.byteLength);return Ft(t,Ot,e)}function Mt(n,e,t,r){var s=Lt(n,e,t);return Ft(s,Dt,r)}function It(n,e,t,r){for(var s=[],i=0;i<t.length;i+=1){var a=new DataView(new Uint8Array(t[i]).buffer),o=$n(a,r);o._subrs=[],o._subrsBias=0,o._defaultWidthX=0,o._nominalWidthX=0;var l=o.private[0],c=o.private[1];if(l!==0&&c!==0){var u=Mt(n,c+e,l,r);if(o._defaultWidthX=u.defaultWidthX,o._nominalWidthX=u.nominalWidthX,u.subrs!==0){var f=c+u.subrs,p=O1(n,f+e);o._subrs=p.objects,o._subrsBias=M4(o._subrs)}o._privateDict=u}s.push(o)}return s}function e7(n,e,t,r){var s,i,a=new H.Parser(n,e);t-=1;var o=[".notdef"],l=a.parseCard8();if(l===0)for(var c=0;c<t;c+=1)s=a.parseSID(),o.push(D2(r,s));else if(l===1)for(;o.length<=t;){s=a.parseSID(),i=a.parseCard8();for(var u=0;u<=i;u+=1)o.push(D2(r,s)),s+=1}else if(l===2)for(;o.length<=t;){s=a.parseSID(),i=a.parseCard16();for(var f=0;f<=i;f+=1)o.push(D2(r,s)),s+=1}else throw new Error("Unknown charset format "+l);return o}function t7(n,e,t){var r,s={},i=new H.Parser(n,e),a=i.parseCard8();if(a===0)for(var o=i.parseCard8(),l=0;l<o;l+=1)r=i.parseCard8(),s[r]=l;else if(a===1){var c=i.parseCard8();r=1;for(var u=0;u<c;u+=1)for(var f=i.parseCard8(),p=i.parseCard8(),d=f;d<=f+p;d+=1)s[d]=r,r+=1}else throw new Error("Unknown encoding format "+a);return new be(s,t)}function _t(n,e,t){var r,s,i,a,o=new C0,l=[],c=0,u=!1,f=!1,p=0,d=0,v,y,m,g;if(n.isCIDFont){var P=n.tables.cff.topDict._fdSelect[e.index],S=n.tables.cff.topDict._fdArray[P];v=S._subrs,y=S._subrsBias,m=S._defaultWidthX,g=S._nominalWidthX}else v=n.tables.cff.topDict._subrs,y=n.tables.cff.topDict._subrsBias,m=n.tables.cff.topDict._defaultWidthX,g=n.tables.cff.topDict._nominalWidthX;var w=m;function O(T,C){f&&o.closePath(),o.moveTo(T,C),f=!0}function I(){var T;T=l.length%2!==0,T&&!u&&(w=l.shift()+g),c+=l.length>>1,l.length=0,u=!0}function M(T){for(var C,_,R,W,r0,Z,n0,l0,a0,s0,i0,o0,k=0;k<T.length;){var B=T[k];switch(k+=1,B){case 1:I();break;case 3:I();break;case 4:l.length>1&&!u&&(w=l.shift()+g,u=!0),d+=l.pop(),O(p,d);break;case 5:for(;l.length>0;)p+=l.shift(),d+=l.shift(),o.lineTo(p,d);break;case 6:for(;l.length>0&&(p+=l.shift(),o.lineTo(p,d),l.length!==0);)d+=l.shift(),o.lineTo(p,d);break;case 7:for(;l.length>0&&(d+=l.shift(),o.lineTo(p,d),l.length!==0);)p+=l.shift(),o.lineTo(p,d);break;case 8:for(;l.length>0;)r=p+l.shift(),s=d+l.shift(),i=r+l.shift(),a=s+l.shift(),p=i+l.shift(),d=a+l.shift(),o.curveTo(r,s,i,a,p,d);break;case 10:r0=l.pop()+y,Z=v[r0],Z&&M(Z);break;case 11:return;case 12:switch(B=T[k],k+=1,B){case 35:r=p+l.shift(),s=d+l.shift(),i=r+l.shift(),a=s+l.shift(),n0=i+l.shift(),l0=a+l.shift(),a0=n0+l.shift(),s0=l0+l.shift(),i0=a0+l.shift(),o0=s0+l.shift(),p=i0+l.shift(),d=o0+l.shift(),l.shift(),o.curveTo(r,s,i,a,n0,l0),o.curveTo(a0,s0,i0,o0,p,d);break;case 34:r=p+l.shift(),s=d,i=r+l.shift(),a=s+l.shift(),n0=i+l.shift(),l0=a,a0=n0+l.shift(),s0=a,i0=a0+l.shift(),o0=d,p=i0+l.shift(),o.curveTo(r,s,i,a,n0,l0),o.curveTo(a0,s0,i0,o0,p,d);break;case 36:r=p+l.shift(),s=d+l.shift(),i=r+l.shift(),a=s+l.shift(),n0=i+l.shift(),l0=a,a0=n0+l.shift(),s0=a,i0=a0+l.shift(),o0=s0+l.shift(),p=i0+l.shift(),o.curveTo(r,s,i,a,n0,l0),o.curveTo(a0,s0,i0,o0,p,d);break;case 37:r=p+l.shift(),s=d+l.shift(),i=r+l.shift(),a=s+l.shift(),n0=i+l.shift(),l0=a+l.shift(),a0=n0+l.shift(),s0=l0+l.shift(),i0=a0+l.shift(),o0=s0+l.shift(),Math.abs(i0-p)>Math.abs(o0-d)?p=i0+l.shift():d=o0+l.shift(),o.curveTo(r,s,i,a,n0,l0),o.curveTo(a0,s0,i0,o0,p,d);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+B),l.length=0}break;case 14:l.length>0&&!u&&(w=l.shift()+g,u=!0),f&&(o.closePath(),f=!1);break;case 18:I();break;case 19:case 20:I(),k+=c+7>>3;break;case 21:l.length>2&&!u&&(w=l.shift()+g,u=!0),d+=l.pop(),p+=l.pop(),O(p,d);break;case 22:l.length>1&&!u&&(w=l.shift()+g,u=!0),p+=l.pop(),O(p,d);break;case 23:I();break;case 24:for(;l.length>2;)r=p+l.shift(),s=d+l.shift(),i=r+l.shift(),a=s+l.shift(),p=i+l.shift(),d=a+l.shift(),o.curveTo(r,s,i,a,p,d);p+=l.shift(),d+=l.shift(),o.lineTo(p,d);break;case 25:for(;l.length>6;)p+=l.shift(),d+=l.shift(),o.lineTo(p,d);r=p+l.shift(),s=d+l.shift(),i=r+l.shift(),a=s+l.shift(),p=i+l.shift(),d=a+l.shift(),o.curveTo(r,s,i,a,p,d);break;case 26:for(l.length%2&&(p+=l.shift());l.length>0;)r=p,s=d+l.shift(),i=r+l.shift(),a=s+l.shift(),p=i,d=a+l.shift(),o.curveTo(r,s,i,a,p,d);break;case 27:for(l.length%2&&(d+=l.shift());l.length>0;)r=p+l.shift(),s=d,i=r+l.shift(),a=s+l.shift(),p=i+l.shift(),d=a,o.curveTo(r,s,i,a,p,d);break;case 28:C=T[k],_=T[k+1],l.push((C<<24|_<<16)>>16),k+=2;break;case 29:r0=l.pop()+n.gsubrsBias,Z=n.gsubrs[r0],Z&&M(Z);break;case 30:for(;l.length>0&&(r=p,s=d+l.shift(),i=r+l.shift(),a=s+l.shift(),p=i+l.shift(),d=a+(l.length===1?l.shift():0),o.curveTo(r,s,i,a,p,d),l.length!==0);)r=p+l.shift(),s=d,i=r+l.shift(),a=s+l.shift(),d=a+l.shift(),p=i+(l.length===1?l.shift():0),o.curveTo(r,s,i,a,p,d);break;case 31:for(;l.length>0&&(r=p+l.shift(),s=d,i=r+l.shift(),a=s+l.shift(),d=a+l.shift(),p=i+(l.length===1?l.shift():0),o.curveTo(r,s,i,a,p,d),l.length!==0);)r=p,s=d+l.shift(),i=r+l.shift(),a=s+l.shift(),p=i+l.shift(),d=a+(l.length===1?l.shift():0),o.curveTo(r,s,i,a,p,d);break;default:B<32?console.log("Glyph "+e.index+": unknown operator "+B):B<247?l.push(B-139):B<251?(C=T[k],k+=1,l.push((B-247)*256+C+108)):B<255?(C=T[k],k+=1,l.push(-(B-251)*256-C-108)):(C=T[k],_=T[k+1],R=T[k+2],W=T[k+3],k+=4,l.push((C<<24|_<<16|R<<8|W)/65536))}}}return M(t),e.advanceWidth=w,o}function n7(n,e,t,r){var s=[],i,a=new H.Parser(n,e),o=a.parseCard8();if(o===0)for(var l=0;l<t;l++){if(i=a.parseCard8(),i>=r)throw new Error("CFF table CID Font FDSelect has bad FD index value "+i+" (FD count "+r+")");s.push(i)}else if(o===3){var c=a.parseCard16(),u=a.parseCard16();if(u!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+u);for(var f,p=0;p<c;p++){if(i=a.parseCard8(),f=a.parseCard16(),i>=r)throw new Error("CFF table CID Font FDSelect has bad FD index value "+i+" (FD count "+r+")");if(f>t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+f);for(;u<f;u++)s.push(i);u=f}if(f!==t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+f)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+o);return s}function r7(n,e,t,r){t.tables.cff={};var s=Kn(n,e),i=O1(n,s.endOffset,H.bytesToString),a=O1(n,i.endOffset),o=O1(n,a.endOffset,H.bytesToString),l=O1(n,o.endOffset);t.gsubrs=l.objects,t.gsubrsBias=M4(t.gsubrs);var c=It(n,e,a.objects,o.objects);if(c.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+c.length);var u=c[0];if(t.tables.cff.topDict=u,u._privateDict&&(t.defaultWidthX=u._privateDict.defaultWidthX,t.nominalWidthX=u._privateDict.nominalWidthX),u.ros[0]!==void 0&&u.ros[1]!==void 0&&(t.isCIDFont=!0),t.isCIDFont){var f=u.fdArray,p=u.fdSelect;if(f===0||p===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");f+=e;var d=O1(n,f),v=It(n,e,d.objects,o.objects);u._fdArray=v,p+=e,u._fdSelect=n7(n,p,t.numGlyphs,v.length)}var y=e+u.private[1],m=Mt(n,y,u.private[0],o.objects);if(t.defaultWidthX=m.defaultWidthX,t.nominalWidthX=m.nominalWidthX,m.subrs!==0){var g=y+m.subrs,P=O1(n,g);t.subrs=P.objects,t.subrsBias=M4(t.subrs)}else t.subrs=[],t.subrsBias=0;var S;r.lowMemory?(S=Zn(n,e+u.charStrings),t.nGlyphs=S.offsets.length):(S=O1(n,e+u.charStrings),t.nGlyphs=S.objects.length);var w=e7(n,e+u.charset,t.nGlyphs,o.objects);if(u.encoding===0?t.cffEncoding=new be(Nn,w):u.encoding===1?t.cffEncoding=new be(Bn,w):t.cffEncoding=t7(n,e+u.encoding,w),t.encoding=t.encoding||t.cffEncoding,t.glyphs=new g1.GlyphSet(t),r.lowMemory)t._push=function(M){var T=Jn(M,S.offsets,n,e+u.charStrings);t.glyphs.push(M,g1.cffGlyphLoader(t,M,_t,T))};else for(var O=0;O<t.nGlyphs;O+=1){var I=S.objects[O];t.glyphs.push(O,g1.cffGlyphLoader(t,O,_t,I))}}function Rt(n,e){var t,r=xe.indexOf(n);return r>=0&&(t=r),r=e.indexOf(n),r>=0?t=r+xe.length:(t=xe.length+e.length,e.push(n)),t}function s7(){return new U.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function i7(n){var e=new U.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var t=0;t<n.length;t+=1)e.names.push({name:"name_"+t,type:"NAME",value:n[t]});return e}function Nt(n,e,t){for(var r={},s=0;s<n.length;s+=1){var i=n[s],a=e[i.name];a!==void 0&&!kt(a,i.value)&&(i.type==="SID"&&(a=Rt(a,t)),r[i.op]={name:i.name,type:i.type,value:a})}return r}function Bt(n,e){var t=new U.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=Nt(Ot,n,e),t}function Ut(n){var e=new U.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:n}],e}function a7(n){var e=new U.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var t=0;t<n.length;t+=1)e.strings.push({name:"string_"+t,type:"STRING",value:n[t]});return e}function o7(){return new U.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function l7(n,e){for(var t=new U.Record("Charsets",[{name:"format",type:"Card8",value:0}]),r=0;r<n.length;r+=1){var s=n[r],i=Rt(s,e);t.fields.push({name:"glyph_"+r,type:"SID",value:i})}return t}function c7(n){var e=[],t=n.path;e.push({name:"width",type:"NUMBER",value:n.advanceWidth});for(var r=0,s=0,i=0;i<t.commands.length;i+=1){var a=void 0,o=void 0,l=t.commands[i];if(l.type==="Q"){var c=.3333333333333333,u=2/3;l={type:"C",x:l.x,y:l.y,x1:Math.round(c*r+u*l.x1),y1:Math.round(c*s+u*l.y1),x2:Math.round(c*l.x+u*l.x1),y2:Math.round(c*l.y+u*l.y1)}}if(l.type==="M")a=Math.round(l.x-r),o=Math.round(l.y-s),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rmoveto",type:"OP",value:21}),r=Math.round(l.x),s=Math.round(l.y);else if(l.type==="L")a=Math.round(l.x-r),o=Math.round(l.y-s),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rlineto",type:"OP",value:5}),r=Math.round(l.x),s=Math.round(l.y);else if(l.type==="C"){var f=Math.round(l.x1-r),p=Math.round(l.y1-s),d=Math.round(l.x2-l.x1),v=Math.round(l.y2-l.y1);a=Math.round(l.x-l.x2),o=Math.round(l.y-l.y2),e.push({name:"dx1",type:"NUMBER",value:f}),e.push({name:"dy1",type:"NUMBER",value:p}),e.push({name:"dx2",type:"NUMBER",value:d}),e.push({name:"dy2",type:"NUMBER",value:v}),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rrcurveto",type:"OP",value:8}),r=Math.round(l.x),s=Math.round(l.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function h7(n){for(var e=new U.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),t=0;t<n.length;t+=1){var r=n.get(t),s=c7(r);e.charStrings.push({name:r.name,type:"CHARSTRING",value:s})}return e}function u7(n,e){var t=new U.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=Nt(Dt,n,e),t}function f7(n,e){for(var t=new U.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),r=1/e.unitsPerEm,s={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[r,0,0,r,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},i={},a=[],o,l=1;l<n.length;l+=1)o=n.get(l),a.push(o.name);var c=[];t.header=s7(),t.nameIndex=i7([e.postScriptName]);var u=Bt(s,c);t.topDictIndex=Ut(u),t.globalSubrIndex=o7(),t.charsets=l7(a,c),t.charStringsIndex=h7(n),t.privateDict=u7(i,c),t.stringIndex=a7(c);var f=t.header.sizeOf()+t.nameIndex.sizeOf()+t.topDictIndex.sizeOf()+t.stringIndex.sizeOf()+t.globalSubrIndex.sizeOf();return s.charset=f,s.encoding=0,s.charStrings=s.charset+t.charsets.sizeOf(),s.private[1]=s.charStrings+t.charStringsIndex.sizeOf(),u=Bt(s,c),t.topDictIndex=Ut(u),t}var Gt={parse:r7,make:f7};function p7(n,e){var t={},r=new H.Parser(n,e);return t.version=r.parseVersion(),t.fontRevision=Math.round(r.parseFixed()*1e3)/1e3,t.checkSumAdjustment=r.parseULong(),t.magicNumber=r.parseULong(),X.argument(t.magicNumber===1594834165,"Font header has wrong magic number."),t.flags=r.parseUShort(),t.unitsPerEm=r.parseUShort(),t.created=r.parseLongDateTime(),t.modified=r.parseLongDateTime(),t.xMin=r.parseShort(),t.yMin=r.parseShort(),t.xMax=r.parseShort(),t.yMax=r.parseShort(),t.macStyle=r.parseUShort(),t.lowestRecPPEM=r.parseUShort(),t.fontDirectionHint=r.parseShort(),t.indexToLocFormat=r.parseShort(),t.glyphDataFormat=r.parseShort(),t}function d7(n){var e=Math.round(new Date().getTime()/1e3)+2082844800,t=e;return n.createdTimestamp&&(t=n.createdTimestamp+2082844800),new U.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:t},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],n)}var zt={parse:p7,make:d7};function v7(n,e){var t={},r=new H.Parser(n,e);return t.version=r.parseVersion(),t.ascender=r.parseShort(),t.descender=r.parseShort(),t.lineGap=r.parseShort(),t.advanceWidthMax=r.parseUShort(),t.minLeftSideBearing=r.parseShort(),t.minRightSideBearing=r.parseShort(),t.xMaxExtent=r.parseShort(),t.caretSlopeRise=r.parseShort(),t.caretSlopeRun=r.parseShort(),t.caretOffset=r.parseShort(),r.relativeOffset+=8,t.metricDataFormat=r.parseShort(),t.numberOfHMetrics=r.parseUShort(),t}function y7(n){return new U.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],n)}var Ht={parse:v7,make:y7};function g7(n,e,t,r,s){for(var i,a,o=new H.Parser(n,e),l=0;l<r;l+=1){l<t&&(i=o.parseUShort(),a=o.parseShort());var c=s.get(l);c.advanceWidth=i,c.leftSideBearing=a}}function m7(n,e,t,r,s){n._hmtxTableData={};for(var i,a,o=new H.Parser(e,t),l=0;l<s;l+=1)l<r&&(i=o.parseUShort(),a=o.parseShort()),n._hmtxTableData[l]={advanceWidth:i,leftSideBearing:a}}function x7(n,e,t,r,s,i,a){a.lowMemory?m7(n,e,t,r,s):g7(e,t,r,s,i)}function b7(n){for(var e=new U.Table("hmtx",[]),t=0;t<n.length;t+=1){var r=n.get(t),s=r.advanceWidth||0,i=r.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+t,type:"USHORT",value:s}),e.fields.push({name:"leftSideBearing_"+t,type:"SHORT",value:i})}return e}var Vt={parse:x7,make:b7};function S7(n){for(var e=new U.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:n.length}]),t="",r=12+n.length*4,s=0;s<n.length;++s){var i=t.indexOf(n[s]);i<0&&(i=t.length,t+=n[s]),e.fields.push({name:"offset "+s,type:"USHORT",value:r+i}),e.fields.push({name:"length "+s,type:"USHORT",value:n[s].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),e}function w7(n,e){var t=new H.Parser(n,e),r=t.parseULong();X.argument(r===1,"Unsupported ltag table version."),t.skip("uLong",1);for(var s=t.parseULong(),i=[],a=0;a<s;a++){for(var o="",l=e+t.parseUShort(),c=t.parseUShort(),u=l;u<l+c;++u)o+=String.fromCharCode(n.getInt8(u));i.push(o)}return i}var Wt={make:S7,parse:w7};function T7(n,e){var t={},r=new H.Parser(n,e);return t.version=r.parseVersion(),t.numGlyphs=r.parseUShort(),t.version===1&&(t.maxPoints=r.parseUShort(),t.maxContours=r.parseUShort(),t.maxCompositePoints=r.parseUShort(),t.maxCompositeContours=r.parseUShort(),t.maxZones=r.parseUShort(),t.maxTwilightPoints=r.parseUShort(),t.maxStorage=r.parseUShort(),t.maxFunctionDefs=r.parseUShort(),t.maxInstructionDefs=r.parseUShort(),t.maxStackElements=r.parseUShort(),t.maxSizeOfInstructions=r.parseUShort(),t.maxComponentElements=r.parseUShort(),t.maxComponentDepth=r.parseUShort()),t}function E7(n){return new U.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:n}])}var Xt={parse:T7,make:E7},Yt=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],Zt={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},C7={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Jt={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function P7(n,e,t){switch(n){case 0:if(e===65535)return"und";if(t)return t[e];break;case 1:return Zt[e];case 3:return Jt[e]}}var I4="utf-16",A7={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},k7={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function jt(n,e,t){switch(n){case 0:return I4;case 1:return k7[t]||A7[e];case 3:if(e===1||e===10)return I4;break}}function L7(n,e,t){for(var r={},s=new H.Parser(n,e),i=s.parseUShort(),a=s.parseUShort(),o=s.offset+s.parseUShort(),l=0;l<a;l++){var c=s.parseUShort(),u=s.parseUShort(),f=s.parseUShort(),p=s.parseUShort(),d=Yt[p]||p,v=s.parseUShort(),y=s.parseUShort(),m=P7(c,f,t),g=jt(c,u,f);if(g!==void 0&&m!==void 0){var P=void 0;if(g===I4?P=i2.UTF16(n,o+y,v):P=i2.MACSTRING(n,o+y,v,g),P){var S=r[d];S===void 0&&(S=r[d]={}),S[m]=P}}}return i===1&&s.parseUShort(),r}function _4(n){var e={};for(var t in n)e[n[t]]=parseInt(t);return e}function Qt(n,e,t,r,s,i){return new U.Record("NameRecord",[{name:"platformID",type:"USHORT",value:n},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:t},{name:"nameID",type:"USHORT",value:r},{name:"length",type:"USHORT",value:s},{name:"offset",type:"USHORT",value:i}])}function F7(n,e){var t=n.length,r=e.length-t+1;e:for(var s=0;s<r;s++)for(;s<r;s++){for(var i=0;i<t;i++)if(e[s+i]!==n[i])continue e;return s}return-1}function qt(n,e){var t=F7(n,e);if(t<0){t=e.length;for(var r=0,s=n.length;r<s;++r)e.push(n[r])}return t}function O7(n,e){var t,r=[],s={},i=_4(Yt);for(var a in n){var o=i[a];if(o===void 0&&(o=a),t=parseInt(o),isNaN(t))throw new Error('Name table entry "'+a+'" does not exist, see nameTableNames for complete list.');s[t]=n[a],r.push(t)}for(var l=_4(Zt),c=_4(Jt),u=[],f=[],p=0;p<r.length;p++){t=r[p];var d=s[t];for(var v in d){var y=d[v],m=1,g=l[v],P=C7[g],S=jt(m,P,g),w=N.MACSTRING(y,S);w===void 0&&(m=0,g=e.indexOf(v),g<0&&(g=e.length,e.push(v)),P=4,w=N.UTF16(y));var O=qt(w,f);u.push(Qt(m,P,g,t,w.length,O));var I=c[v];if(I!==void 0){var M=N.UTF16(y),T=qt(M,f);u.push(Qt(3,1,I,t,M.length,T))}}}u.sort(function(R,W){return R.platformID-W.platformID||R.encodingID-W.encodingID||R.languageID-W.languageID||R.nameID-W.nameID});for(var C=new U.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:u.length},{name:"stringOffset",type:"USHORT",value:6+u.length*12}]),_=0;_<u.length;_++)C.fields.push({name:"record_"+_,type:"RECORD",value:u[_]});return C.fields.push({name:"strings",type:"LITERAL",value:f}),C}var Kt={parse:L7,make:O7},R4=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function D7(n){for(var e=0;e<R4.length;e+=1){var t=R4[e];if(n>=t.begin&&n<t.end)return e}return-1}function M7(n,e){var t={},r=new H.Parser(n,e);t.version=r.parseUShort(),t.xAvgCharWidth=r.parseShort(),t.usWeightClass=r.parseUShort(),t.usWidthClass=r.parseUShort(),t.fsType=r.parseUShort(),t.ySubscriptXSize=r.parseShort(),t.ySubscriptYSize=r.parseShort(),t.ySubscriptXOffset=r.parseShort(),t.ySubscriptYOffset=r.parseShort(),t.ySuperscriptXSize=r.parseShort(),t.ySuperscriptYSize=r.parseShort(),t.ySuperscriptXOffset=r.parseShort(),t.ySuperscriptYOffset=r.parseShort(),t.yStrikeoutSize=r.parseShort(),t.yStrikeoutPosition=r.parseShort(),t.sFamilyClass=r.parseShort(),t.panose=[];for(var s=0;s<10;s++)t.panose[s]=r.parseByte();return t.ulUnicodeRange1=r.parseULong(),t.ulUnicodeRange2=r.parseULong(),t.ulUnicodeRange3=r.parseULong(),t.ulUnicodeRange4=r.parseULong(),t.achVendID=String.fromCharCode(r.parseByte(),r.parseByte(),r.parseByte(),r.parseByte()),t.fsSelection=r.parseUShort(),t.usFirstCharIndex=r.parseUShort(),t.usLastCharIndex=r.parseUShort(),t.sTypoAscender=r.parseShort(),t.sTypoDescender=r.parseShort(),t.sTypoLineGap=r.parseShort(),t.usWinAscent=r.parseUShort(),t.usWinDescent=r.parseUShort(),t.version>=1&&(t.ulCodePageRange1=r.parseULong(),t.ulCodePageRange2=r.parseULong()),t.version>=2&&(t.sxHeight=r.parseShort(),t.sCapHeight=r.parseShort(),t.usDefaultChar=r.parseUShort(),t.usBreakChar=r.parseUShort(),t.usMaxContent=r.parseUShort()),t}function I7(n){return new U.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],n)}var N4={parse:M7,make:I7,unicodeRanges:R4,getUnicodeRange:D7};function _7(n,e){var t={},r=new H.Parser(n,e);switch(t.version=r.parseVersion(),t.italicAngle=r.parseFixed(),t.underlinePosition=r.parseShort(),t.underlineThickness=r.parseShort(),t.isFixedPitch=r.parseULong(),t.minMemType42=r.parseULong(),t.maxMemType42=r.parseULong(),t.minMemType1=r.parseULong(),t.maxMemType1=r.parseULong(),t.version){case 1:t.names=H1.slice();break;case 2:t.numberOfGlyphs=r.parseUShort(),t.glyphNameIndex=new Array(t.numberOfGlyphs);for(var s=0;s<t.numberOfGlyphs;s++)t.glyphNameIndex[s]=r.parseUShort();t.names=[];for(var i=0;i<t.numberOfGlyphs;i++)if(t.glyphNameIndex[i]>=H1.length){var a=r.parseChar();t.names.push(r.parseString(a))}break;case 2.5:t.numberOfGlyphs=r.parseUShort(),t.offset=new Array(t.numberOfGlyphs);for(var o=0;o<t.numberOfGlyphs;o++)t.offset[o]=r.parseChar();break}return t}function R7(){return new U.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var $t={parse:_7,make:R7},a1=new Array(9);a1[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(L.coverage),deltaGlyphId:this.parseUShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(L.coverage),substitute:this.parseOffset16List()};X.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")},a1[2]=function(){var e=this.parseUShort();return X.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(L.coverage),sequences:this.parseListOfLists()}},a1[3]=function(){var e=this.parseUShort();return X.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(L.coverage),alternateSets:this.parseListOfLists()}},a1[4]=function(){var e=this.parseUShort();return X.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(L.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var a2={sequenceIndex:L.uShort,lookupListIndex:L.uShort};a1[5]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(L.coverage),ruleSets:this.parseListOfLists(function(){var i=this.parseUShort(),a=this.parseUShort();return{input:this.parseUShortList(i-1),lookupRecords:this.parseRecordList(a,a2)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(L.coverage),classDef:this.parsePointer(L.classDef),classSets:this.parseListOfLists(function(){var i=this.parseUShort(),a=this.parseUShort();return{classes:this.parseUShortList(i-1),lookupRecords:this.parseRecordList(a,a2)}})};if(t===3){var r=this.parseUShort(),s=this.parseUShort();return{substFormat:t,coverages:this.parseList(r,L.pointer(L.coverage)),lookupRecords:this.parseRecordList(s,a2)}}X.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")},a1[6]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(L.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(a2)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(L.coverage),backtrackClassDef:this.parsePointer(L.classDef),inputClassDef:this.parsePointer(L.classDef),lookaheadClassDef:this.parsePointer(L.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(a2)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(L.pointer(L.coverage)),inputCoverage:this.parseList(L.pointer(L.coverage)),lookaheadCoverage:this.parseList(L.pointer(L.coverage)),lookupRecords:this.parseRecordList(a2)};X.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")},a1[7]=function(){var e=this.parseUShort();X.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var t=this.parseUShort(),r=new L(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:a1[t].call(r)}},a1[8]=function(){var e=this.parseUShort();return X.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(L.coverage),backtrackCoverage:this.parseList(L.pointer(L.coverage)),lookaheadCoverage:this.parseList(L.pointer(L.coverage)),substitutes:this.parseUShortList()}};function N7(n,e){e=e||0;var t=new L(n,e),r=t.parseVersion(1);return X.argument(r===1||r===1.1,"Unsupported GSUB table version."),r===1?{version:r,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(a1)}:{version:r,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(a1),variations:t.parseFeatureVariationsList()}}var o2=new Array(9);o2[1]=function(e){return e.substFormat===1?new U.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new U.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new U.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new U.Coverage(e.coverage)}].concat(U.ushortList("substitute",e.substitute)))},o2[2]=function(e){return X.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new U.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new U.Coverage(e.coverage)}].concat(U.tableList("seqSet",e.sequences,function(t){return new U.Table("sequenceSetTable",U.ushortList("sequence",t))})))},o2[3]=function(e){return X.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new U.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new U.Coverage(e.coverage)}].concat(U.tableList("altSet",e.alternateSets,function(t){return new U.Table("alternateSetTable",U.ushortList("alternate",t))})))},o2[4]=function(e){return X.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new U.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new U.Coverage(e.coverage)}].concat(U.tableList("ligSet",e.ligatureSets,function(t){return new U.Table("ligatureSetTable",U.tableList("ligature",t,function(r){return new U.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:r.ligGlyph}].concat(U.ushortList("component",r.components,r.components.length+1)))}))})))},o2[6]=function(e){if(e.substFormat===1){var t=new U.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new U.Coverage(e.coverage)}].concat(U.tableList("chainRuleSet",e.chainRuleSets,function(i){return new U.Table("chainRuleSetTable",U.tableList("chainRule",i,function(a){var o=U.ushortList("backtrackGlyph",a.backtrack,a.backtrack.length).concat(U.ushortList("inputGlyph",a.input,a.input.length+1)).concat(U.ushortList("lookaheadGlyph",a.lookahead,a.lookahead.length)).concat(U.ushortList("substitution",[],a.lookupRecords.length));return a.lookupRecords.forEach(function(l,c){o=o.concat({name:"sequenceIndex"+c,type:"USHORT",value:l.sequenceIndex}).concat({name:"lookupListIndex"+c,type:"USHORT",value:l.lookupListIndex})}),new U.Table("chainRuleTable",o)}))})));return t}else if(e.substFormat===2)X.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var r=[{name:"substFormat",type:"USHORT",value:e.substFormat}];r.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(i,a){r.push({name:"backtrackCoverage"+a,type:"TABLE",value:new U.Coverage(i)})}),r.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(i,a){r.push({name:"inputCoverage"+a,type:"TABLE",value:new U.Coverage(i)})}),r.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(i,a){r.push({name:"lookaheadCoverage"+a,type:"TABLE",value:new U.Coverage(i)})}),r.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(i,a){r=r.concat({name:"sequenceIndex"+a,type:"USHORT",value:i.sequenceIndex}).concat({name:"lookupListIndex"+a,type:"USHORT",value:i.lookupListIndex})});var s=new U.Table("chainContextTable",r);return s}X.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function B7(n){return new U.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new U.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new U.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new U.LookupList(n.lookups,o2)}])}var e6={parse:N7,make:B7};function U7(n,e){var t=new H.Parser(n,e),r=t.parseULong();X.argument(r===1,"Unsupported META table version."),t.parseULong(),t.parseULong();for(var s=t.parseULong(),i={},a=0;a<s;a++){var o=t.parseTag(),l=t.parseULong(),c=t.parseULong(),u=i2.UTF8(n,e+l,c);i[o]=u}return i}function G7(n){var e=Object.keys(n).length,t="",r=16+e*12,s=new U.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:r},{name:"numTags",type:"ULONG",value:e}]);for(var i in n){var a=t.length;t+=n[i],s.fields.push({name:"tag "+i,type:"TAG",value:i}),s.fields.push({name:"offset "+i,type:"ULONG",value:r+a}),s.fields.push({name:"length "+i,type:"ULONG",value:n[i].length})}return s.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),s}var t6={parse:U7,make:G7};function n6(n){return Math.log(n)/Math.log(2)|0}function B4(n){for(;n.length%4!==0;)n.push(0);for(var e=0,t=0;t<n.length;t+=4)e+=(n[t]<<24)+(n[t+1]<<16)+(n[t+2]<<8)+n[t+3];return e%=Math.pow(2,32),e}function r6(n,e,t,r){return new U.Record("Table Record",[{name:"tag",type:"TAG",value:n!==void 0?n:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:t!==void 0?t:0},{name:"length",type:"ULONG",value:r!==void 0?r:0}])}function s6(n){var e=new U.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=n,e.numTables=n.length;var t=Math.pow(2,n6(e.numTables));e.searchRange=16*t,e.entrySelector=n6(t),e.rangeShift=e.numTables*16-e.searchRange;for(var r=[],s=[],i=e.sizeOf()+r6().sizeOf()*e.numTables;i%4!==0;)i+=1,s.push({name:"padding",type:"BYTE",value:0});for(var a=0;a<n.length;a+=1){var o=n[a];X.argument(o.tableName.length===4,"Table name"+o.tableName+" is invalid.");var l=o.sizeOf(),c=r6(o.tableName,B4(o.encode()),i,l);for(r.push({name:c.tag+" Table Record",type:"RECORD",value:c}),s.push({name:o.tableName+" table",type:"RECORD",value:o}),i+=l,X.argument(!isNaN(i),"Something went wrong calculating the offset.");i%4!==0;)i+=1,s.push({name:"padding",type:"BYTE",value:0})}return r.sort(function(u,f){return u.value.tag>f.value.tag?1:-1}),e.fields=e.fields.concat(r),e.fields=e.fields.concat(s),e}function i6(n,e,t){for(var r=0;r<e.length;r+=1){var s=n.charToGlyphIndex(e[r]);if(s>0){var i=n.glyphs.get(s);return i.getMetrics()}}return t}function z7(n){for(var e=0,t=0;t<n.length;t+=1)e+=n[t];return e/n.length}function H7(n){for(var e=[],t=[],r=[],s=[],i=[],a=[],o=[],l,c=0,u=0,f=0,p=0,d=0,v=0;v<n.glyphs.length;v+=1){var y=n.glyphs.get(v),m=y.unicode|0;if(isNaN(y.advanceWidth))throw new Error("Glyph "+y.name+" ("+v+"): advanceWidth is not a number.");(l>m||l===void 0)&&m>0&&(l=m),c<m&&(c=m);var g=N4.getUnicodeRange(m);if(g<32)u|=1<<g;else if(g<64)f|=1<<g-32;else if(g<96)p|=1<<g-64;else if(g<123)d|=1<<g-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(y.name!==".notdef"){var P=y.getMetrics();e.push(P.xMin),t.push(P.yMin),r.push(P.xMax),s.push(P.yMax),a.push(P.leftSideBearing),o.push(P.rightSideBearing),i.push(y.advanceWidth)}}var S={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,r),yMax:Math.max.apply(null,s),advanceWidthMax:Math.max.apply(null,i),advanceWidthAvg:z7(i),minLeftSideBearing:Math.min.apply(null,a),maxLeftSideBearing:Math.max.apply(null,a),minRightSideBearing:Math.min.apply(null,o)};S.ascender=n.ascender,S.descender=n.descender;var w=zt.make({flags:3,unitsPerEm:n.unitsPerEm,xMin:S.xMin,yMin:S.yMin,xMax:S.xMax,yMax:S.yMax,lowestRecPPEM:3,createdTimestamp:n.createdTimestamp}),O=Ht.make({ascender:S.ascender,descender:S.descender,advanceWidthMax:S.advanceWidthMax,minLeftSideBearing:S.minLeftSideBearing,minRightSideBearing:S.minRightSideBearing,xMaxExtent:S.maxLeftSideBearing+(S.xMax-S.xMin),numberOfHMetrics:n.glyphs.length}),I=Xt.make(n.glyphs.length),M=N4.make(Object.assign({xAvgCharWidth:Math.round(S.advanceWidthAvg),usFirstCharIndex:l,usLastCharIndex:c,ulUnicodeRange1:u,ulUnicodeRange2:f,ulUnicodeRange3:p,ulUnicodeRange4:d,sTypoAscender:S.ascender,sTypoDescender:S.descender,sTypoLineGap:0,usWinAscent:S.yMax,usWinDescent:Math.abs(S.yMin),ulCodePageRange1:1,sxHeight:i6(n,"xyvw",{yMax:Math.round(S.ascender/2)}).yMax,sCapHeight:i6(n,"HIKLEFJMNTZBDPRAGOQSUVWXY",S).yMax,usDefaultChar:n.hasChar(" ")?32:0,usBreakChar:n.hasChar(" ")?32:0},n.tables.os2)),T=Vt.make(n.glyphs),C=Ct.make(n.glyphs),_=n.getEnglishName("fontFamily"),R=n.getEnglishName("fontSubfamily"),W=_+" "+R,r0=n.getEnglishName("postScriptName");r0||(r0=_.replace(/\s/g,"")+"-"+R);var Z={};for(var n0 in n.names)Z[n0]=n.names[n0];Z.uniqueID||(Z.uniqueID={en:n.getEnglishName("manufacturer")+":"+W}),Z.postScriptName||(Z.postScriptName={en:r0}),Z.preferredFamily||(Z.preferredFamily=n.names.fontFamily),Z.preferredSubfamily||(Z.preferredSubfamily=n.names.fontSubfamily);var l0=[],a0=Kt.make(Z,l0),s0=l0.length>0?Wt.make(l0):void 0,i0=$t.make(),o0=Gt.make(n.glyphs,{version:n.getEnglishName("version"),fullName:W,familyName:_,weightName:R,postScriptName:r0,unitsPerEm:n.unitsPerEm,fontBBox:[0,S.yMin,S.ascender,S.advanceWidthMax]}),k=n.metas&&Object.keys(n.metas).length>0?t6.make(n.metas):void 0,B=[w,O,I,M,a0,C,i0,o0,T];s0&&B.push(s0),n.tables.gsub&&B.push(e6.make(n.tables.gsub)),k&&B.push(k);for(var t0=s6(B),f0=t0.encode(),L0=B4(f0),G0=t0.fields,p0=!1,O0=0;O0<G0.length;O0+=1)if(G0[O0].name==="head table"){G0[O0].value.checkSumAdjustment=2981146554-L0,p0=!0;break}if(!p0)throw new Error("Could not find head table with checkSum to adjust.");return t0}var V7={make:s6,fontToTable:H7,computeCheckSum:B4};function U4(n,e){for(var t=0,r=n.length-1;t<=r;){var s=t+r>>>1,i=n[s].tag;if(i===e)return s;i<e?t=s+1:r=s-1}return-t-1}function a6(n,e){for(var t=0,r=n.length-1;t<=r;){var s=t+r>>>1,i=n[s];if(i===e)return s;i<e?t=s+1:r=s-1}return-t-1}function o6(n,e){for(var t,r=0,s=n.length-1;r<=s;){var i=r+s>>>1;t=n[i];var a=t.start;if(a===e)return t;a<e?r=i+1:s=i-1}if(r>0)return t=n[r-1],e>t.end?0:t}function M2(n,e){this.font=n,this.tableName=e}M2.prototype={searchTag:U4,binSearch:a6,getTable:function(n){var e=this.font.tables[this.tableName];return!e&&n&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var n=this.getTable();return n?n.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var n=this.getTable();if(n){for(var e=!1,t=0;t<n.scripts.length;t++){var r=n.scripts[t].tag;if(r==="DFLT")return r;r==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(n,e){var t=this.getTable(e);if(t){n=n||"DFLT";var r=t.scripts,s=U4(t.scripts,n);if(s>=0)return r[s].script;if(e){var i={tag:n,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return r.splice(-1-s,0,i),i.script}}},getLangSysTable:function(n,e,t){var r=this.getScriptTable(n,t);if(r){if(!e||e==="dflt"||e==="DFLT")return r.defaultLangSys;var s=U4(r.langSysRecords,e);if(s>=0)return r.langSysRecords[s].langSys;if(t){var i={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return r.langSysRecords.splice(-1-s,0,i),i.langSys}}},getFeatureTable:function(n,e,t,r){var s=this.getLangSysTable(n,e,r);if(s){for(var i,a=s.featureIndexes,o=this.font.tables[this.tableName].features,l=0;l<a.length;l++)if(i=o[a[l]],i.tag===t)return i.feature;if(r){var c=o.length;return X.assert(c===0||t>=o[c-1].tag,"Features must be added in alphabetical order."),i={tag:t,feature:{params:0,lookupListIndexes:[]}},o.push(i),a.push(c),i.feature}}},getLookupTables:function(n,e,t,r,s){var i=this.getFeatureTable(n,e,t,s),a=[];if(i){for(var o,l=i.lookupListIndexes,c=this.font.tables[this.tableName].lookups,u=0;u<l.length;u++)o=c[l[u]],o.lookupType===r&&a.push(o);if(a.length===0&&s){o={lookupType:r,lookupFlag:0,subtables:[],markFilteringSet:void 0};var f=c.length;return c.push(o),l.push(f),[o]}}return a},getGlyphClass:function(n,e){switch(n.format){case 1:return n.startGlyph<=e&&e<n.startGlyph+n.classes.length?n.classes[e-n.startGlyph]:0;case 2:var t=o6(n.ranges,e);return t?t.classId:0}},getCoverageIndex:function(n,e){switch(n.format){case 1:var t=a6(n.glyphs,e);return t>=0?t:-1;case 2:var r=o6(n.ranges,e);return r?r.index+e-r.start:-1}},expandCoverage:function(n){if(n.format===1)return n.glyphs;for(var e=[],t=n.ranges,r=0;r<t.length;r++)for(var s=t[r],i=s.start,a=s.end,o=i;o<=a;o++)e.push(o);return e}};function I2(n){M2.call(this,n,"gpos")}I2.prototype=M2.prototype,I2.prototype.init=function(){var n=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(n)},I2.prototype.getKerningValue=function(n,e,t){for(var r=0;r<n.length;r++)for(var s=n[r].subtables,i=0;i<s.length;i++){var a=s[i],o=this.getCoverageIndex(a.coverage,e);if(!(o<0))switch(a.posFormat){case 1:for(var l=a.pairSets[o],c=0;c<l.length;c++){var u=l[c];if(u.secondGlyph===t)return u.value1&&u.value1.xAdvance||0}break;case 2:var f=this.getGlyphClass(a.classDef1,e),p=this.getGlyphClass(a.classDef2,t),d=a.classRecords[f][p];return d.value1&&d.value1.xAdvance||0}}return 0},I2.prototype.getKerningTables=function(n,e){if(this.font.tables.gpos)return this.getLookupTables(n,e,"kern",2)};function J0(n){M2.call(this,n,"gsub")}function W7(n,e){var t=n.length;if(t!==e.length)return!1;for(var r=0;r<t;r++)if(n[r]!==e[r])return!1;return!0}function G4(n,e,t){for(var r=n.subtables,s=0;s<r.length;s++){var i=r[s];if(i.substFormat===e)return i}if(t)return r.push(t),t}J0.prototype=M2.prototype,J0.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}},J0.prototype.getSingle=function(n,e,t){for(var r=[],s=this.getLookupTables(e,t,n,1),i=0;i<s.length;i++)for(var a=s[i].subtables,o=0;o<a.length;o++){var l=a[o],c=this.expandCoverage(l.coverage),u=void 0;if(l.substFormat===1){var f=l.deltaGlyphId;for(u=0;u<c.length;u++){var p=c[u];r.push({sub:p,by:p+f})}}else{var d=l.substitute;for(u=0;u<c.length;u++)r.push({sub:c[u],by:d[u]})}}return r},J0.prototype.getMultiple=function(n,e,t){for(var r=[],s=this.getLookupTables(e,t,n,2),i=0;i<s.length;i++)for(var a=s[i].subtables,o=0;o<a.length;o++){var l=a[o],c=this.expandCoverage(l.coverage),u=void 0;for(u=0;u<c.length;u++){var f=c[u],p=l.sequences[u];r.push({sub:f,by:p})}}return r},J0.prototype.getAlternates=function(n,e,t){for(var r=[],s=this.getLookupTables(e,t,n,3),i=0;i<s.length;i++)for(var a=s[i].subtables,o=0;o<a.length;o++)for(var l=a[o],c=this.expandCoverage(l.coverage),u=l.alternateSets,f=0;f<c.length;f++)r.push({sub:c[f],by:u[f]});return r},J0.prototype.getLigatures=function(n,e,t){for(var r=[],s=this.getLookupTables(e,t,n,4),i=0;i<s.length;i++)for(var a=s[i].subtables,o=0;o<a.length;o++)for(var l=a[o],c=this.expandCoverage(l.coverage),u=l.ligatureSets,f=0;f<c.length;f++)for(var p=c[f],d=u[f],v=0;v<d.length;v++){var y=d[v];r.push({sub:[p].concat(y.components),by:y.ligGlyph})}return r},J0.prototype.addSingle=function(n,e,t,r){var s=this.getLookupTables(t,r,n,1,!0)[0],i=G4(s,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});X.assert(i.coverage.format===1,"Single: unable to modify coverage table format "+i.coverage.format);var a=e.sub,o=this.binSearch(i.coverage.glyphs,a);o<0&&(o=-1-o,i.coverage.glyphs.splice(o,0,a),i.substitute.splice(o,0,0)),i.substitute[o]=e.by},J0.prototype.addMultiple=function(n,e,t,r){X.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var s=this.getLookupTables(t,r,n,2,!0)[0],i=G4(s,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});X.assert(i.coverage.format===1,"Multiple: unable to modify coverage table format "+i.coverage.format);var a=e.sub,o=this.binSearch(i.coverage.glyphs,a);o<0&&(o=-1-o,i.coverage.glyphs.splice(o,0,a),i.sequences.splice(o,0,0)),i.sequences[o]=e.by},J0.prototype.addAlternate=function(n,e,t,r){var s=this.getLookupTables(t,r,n,3,!0)[0],i=G4(s,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});X.assert(i.coverage.format===1,"Alternate: unable to modify coverage table format "+i.coverage.format);var a=e.sub,o=this.binSearch(i.coverage.glyphs,a);o<0&&(o=-1-o,i.coverage.glyphs.splice(o,0,a),i.alternateSets.splice(o,0,0)),i.alternateSets[o]=e.by},J0.prototype.addLigature=function(n,e,t,r){var s=this.getLookupTables(t,r,n,4,!0)[0],i=s.subtables[0];i||(i={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},s.subtables[0]=i),X.assert(i.coverage.format===1,"Ligature: unable to modify coverage table format "+i.coverage.format);var a=e.sub[0],o=e.sub.slice(1),l={ligGlyph:e.by,components:o},c=this.binSearch(i.coverage.glyphs,a);if(c>=0){for(var u=i.ligatureSets[c],f=0;f<u.length;f++)if(W7(u[f].components,o))return;u.push(l)}else c=-1-c,i.coverage.glyphs.splice(c,0,a),i.ligatureSets.splice(c,0,[l])},J0.prototype.getFeature=function(n,e,t){if(/ss\d\d/.test(n))return this.getSingle(n,e,t);switch(n){case"aalt":case"salt":return this.getSingle(n,e,t).concat(this.getAlternates(n,e,t));case"dlig":case"liga":case"rlig":return this.getLigatures(n,e,t);case"ccmp":return this.getMultiple(n,e,t).concat(this.getLigatures(n,e,t));case"stch":return this.getMultiple(n,e,t)}},J0.prototype.add=function(n,e,t,r){if(/ss\d\d/.test(n))return this.addSingle(n,e,t,r);switch(n){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(n,e,t,r):this.addAlternate(n,e,t,r);case"dlig":case"liga":case"rlig":return this.addLigature(n,e,t,r);case"ccmp":return e.by instanceof Array?this.addMultiple(n,e,t,r):this.addLigature(n,e,t,r)}};function X7(){return typeof window<"u"}function l6(n){for(var e=new ArrayBuffer(n.length),t=new Uint8Array(e),r=0;r<n.length;++r)t[r]=n[r];return e}function Y7(n){for(var e=new Buffer(n.byteLength),t=new Uint8Array(n),r=0;r<e.length;++r)e[r]=t[r];return e}function _2(n,e){if(!n)throw e}function c6(n,e,t,r,s){var i;return(e&r)>0?(i=n.parseByte(),(e&s)===0&&(i=-i),i=t+i):(e&s)>0?i=t:i=t+n.parseShort(),i}function h6(n,e,t){var r=new H.Parser(e,t);n.numberOfContours=r.parseShort(),n._xMin=r.parseShort(),n._yMin=r.parseShort(),n._xMax=r.parseShort(),n._yMax=r.parseShort();var s,i;if(n.numberOfContours>0){for(var a=n.endPointIndices=[],o=0;o<n.numberOfContours;o+=1)a.push(r.parseUShort());n.instructionLength=r.parseUShort(),n.instructions=[];for(var l=0;l<n.instructionLength;l+=1)n.instructions.push(r.parseByte());var c=a[a.length-1]+1;s=[];for(var u=0;u<c;u+=1)if(i=r.parseByte(),s.push(i),(i&8)>0)for(var f=r.parseByte(),p=0;p<f;p+=1)s.push(i),u+=1;if(X.argument(s.length===c,"Bad flags."),a.length>0){var d=[],v;if(c>0){for(var y=0;y<c;y+=1)i=s[y],v={},v.onCurve=!!(i&1),v.lastPointOfContour=a.indexOf(y)>=0,d.push(v);for(var m=0,g=0;g<c;g+=1)i=s[g],v=d[g],v.x=c6(r,i,m,2,16),m=v.x;for(var P=0,S=0;S<c;S+=1)i=s[S],v=d[S],v.y=c6(r,i,P,4,32),P=v.y}n.points=d}else n.points=[]}else if(n.numberOfContours===0)n.points=[];else{n.isComposite=!0,n.points=[],n.components=[];for(var w=!0;w;){s=r.parseUShort();var O={glyphIndex:r.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(s&1)>0?(s&2)>0?(O.dx=r.parseShort(),O.dy=r.parseShort()):O.matchedPoints=[r.parseUShort(),r.parseUShort()]:(s&2)>0?(O.dx=r.parseChar(),O.dy=r.parseChar()):O.matchedPoints=[r.parseByte(),r.parseByte()],(s&8)>0?O.xScale=O.yScale=r.parseF2Dot14():(s&64)>0?(O.xScale=r.parseF2Dot14(),O.yScale=r.parseF2Dot14()):(s&128)>0&&(O.xScale=r.parseF2Dot14(),O.scale01=r.parseF2Dot14(),O.scale10=r.parseF2Dot14(),O.yScale=r.parseF2Dot14()),n.components.push(O),w=!!(s&32)}if(s&256){n.instructionLength=r.parseUShort(),n.instructions=[];for(var I=0;I<n.instructionLength;I+=1)n.instructions.push(r.parseByte())}}}function z4(n,e){for(var t=[],r=0;r<n.length;r+=1){var s=n[r],i={x:e.xScale*s.x+e.scale01*s.y+e.dx,y:e.scale10*s.x+e.yScale*s.y+e.dy,onCurve:s.onCurve,lastPointOfContour:s.lastPointOfContour};t.push(i)}return t}function Z7(n){for(var e=[],t=[],r=0;r<n.length;r+=1){var s=n[r];t.push(s),s.lastPointOfContour&&(e.push(t),t=[])}return X.argument(t.length===0,"There are still points left in the current contour."),e}function u6(n){var e=new C0;if(!n)return e;for(var t=Z7(n),r=0;r<t.length;++r){var s=t[r],i=null,a=s[s.length-1],o=s[0];if(a.onCurve)e.moveTo(a.x,a.y);else if(o.onCurve)e.moveTo(o.x,o.y);else{var l={x:(a.x+o.x)*.5,y:(a.y+o.y)*.5};e.moveTo(l.x,l.y)}for(var c=0;c<s.length;++c)if(i=a,a=o,o=s[(c+1)%s.length],a.onCurve)e.lineTo(a.x,a.y);else{var u=o;i.onCurve||((a.x+i.x)*.5,(a.y+i.y)*.5),o.onCurve||(u={x:(a.x+o.x)*.5,y:(a.y+o.y)*.5}),e.quadraticCurveTo(a.x,a.y,u.x,u.y)}e.closePath()}return e}function f6(n,e){if(e.isComposite)for(var t=0;t<e.components.length;t+=1){var r=e.components[t],s=n.get(r.glyphIndex);if(s.getPath(),s.points){var i=void 0;if(r.matchedPoints===void 0)i=z4(s.points,r);else{if(r.matchedPoints[0]>e.points.length-1||r.matchedPoints[1]>s.points.length-1)throw Error("Matched points out of range in "+e.name);var a=e.points[r.matchedPoints[0]],o=s.points[r.matchedPoints[1]],l={xScale:r.xScale,scale01:r.scale01,scale10:r.scale10,yScale:r.yScale,dx:0,dy:0};o=z4([o],l)[0],l.dx=a.x-o.x,l.dy=a.y-o.y,i=z4(s.points,l)}e.points=e.points.concat(i)}}return u6(e.points)}function J7(n,e,t,r){for(var s=new g1.GlyphSet(r),i=0;i<t.length-1;i+=1){var a=t[i],o=t[i+1];a!==o?s.push(i,g1.ttfGlyphLoader(r,i,h6,n,e+a,f6)):s.push(i,g1.glyphLoader(r,i))}return s}function j7(n,e,t,r){var s=new g1.GlyphSet(r);return r._push=function(i){var a=t[i],o=t[i+1];a!==o?s.push(i,g1.ttfGlyphLoader(r,i,h6,n,e+a,f6)):s.push(i,g1.glyphLoader(r,i))},s}function Q7(n,e,t,r,s){return s.lowMemory?j7(n,e,t,r):J7(n,e,t,r)}var p6={getPath:u6,parse:Q7},d6,W1,v6,H4;function y6(n){this.font=n,this.getCommands=function(e){return p6.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function q7(n){return n}function g6(n){return Math.sign(n)*Math.round(Math.abs(n))}function K7(n){return Math.sign(n)*Math.round(Math.abs(n*2))/2}function $7(n){return Math.sign(n)*(Math.round(Math.abs(n)+.5)-.5)}function er(n){return Math.sign(n)*Math.ceil(Math.abs(n))}function tr(n){return Math.sign(n)*Math.floor(Math.abs(n))}var m6=function(n){var e=this.srPeriod,t=this.srPhase,r=this.srThreshold,s=1;return n<0&&(n=-n,s=-1),n+=r-t,n=Math.trunc(n/e)*e,n+=t,n<0?t*s:n*s},m1={x:1,y:0,axis:"x",distance:function(n,e,t,r){return(t?n.xo:n.x)-(r?e.xo:e.x)},interpolate:function(n,e,t,r){var s,i,a,o,l,c,u;if(!r||r===this){if(s=n.xo-e.xo,i=n.xo-t.xo,l=e.x-e.xo,c=t.x-t.xo,a=Math.abs(s),o=Math.abs(i),u=a+o,u===0){n.x=n.xo+(l+c)/2;return}n.x=n.xo+(l*o+c*a)/u;return}if(s=r.distance(n,e,!0,!0),i=r.distance(n,t,!0,!0),l=r.distance(e,e,!1,!0),c=r.distance(t,t,!1,!0),a=Math.abs(s),o=Math.abs(i),u=a+o,u===0){m1.setRelative(n,n,(l+c)/2,r,!0);return}m1.setRelative(n,n,(l*o+c*a)/u,r,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(n,e,t,r,s){if(!r||r===this){n.x=(s?e.xo:e.x)+t;return}var i=s?e.xo:e.x,a=s?e.yo:e.y,o=i+t*r.x,l=a+t*r.y;n.x=o+(n.y-l)/r.normalSlope},slope:0,touch:function(n){n.xTouched=!0},touched:function(n){return n.xTouched},untouch:function(n){n.xTouched=!1}},w1={x:0,y:1,axis:"y",distance:function(n,e,t,r){return(t?n.yo:n.y)-(r?e.yo:e.y)},interpolate:function(n,e,t,r){var s,i,a,o,l,c,u;if(!r||r===this){if(s=n.yo-e.yo,i=n.yo-t.yo,l=e.y-e.yo,c=t.y-t.yo,a=Math.abs(s),o=Math.abs(i),u=a+o,u===0){n.y=n.yo+(l+c)/2;return}n.y=n.yo+(l*o+c*a)/u;return}if(s=r.distance(n,e,!0,!0),i=r.distance(n,t,!0,!0),l=r.distance(e,e,!1,!0),c=r.distance(t,t,!1,!0),a=Math.abs(s),o=Math.abs(i),u=a+o,u===0){w1.setRelative(n,n,(l+c)/2,r,!0);return}w1.setRelative(n,n,(l*o+c*a)/u,r,!0)},normalSlope:0,setRelative:function(n,e,t,r,s){if(!r||r===this){n.y=(s?e.yo:e.y)+t;return}var i=s?e.xo:e.x,a=s?e.yo:e.y,o=i+t*r.x,l=a+t*r.y;n.y=l+r.normalSlope*(n.x-o)},slope:Number.POSITIVE_INFINITY,touch:function(n){n.yTouched=!0},touched:function(n){return n.yTouched},untouch:function(n){n.yTouched=!1}};Object.freeze(m1),Object.freeze(w1);function R2(n,e){this.x=n,this.y=e,this.axis=void 0,this.slope=e/n,this.normalSlope=-n/e,Object.freeze(this)}R2.prototype.distance=function(n,e,t,r){return this.x*m1.distance(n,e,t,r)+this.y*w1.distance(n,e,t,r)},R2.prototype.interpolate=function(n,e,t,r){var s,i,a,o,l,c,u;if(a=r.distance(n,e,!0,!0),o=r.distance(n,t,!0,!0),s=r.distance(e,e,!1,!0),i=r.distance(t,t,!1,!0),l=Math.abs(a),c=Math.abs(o),u=l+c,u===0){this.setRelative(n,n,(s+i)/2,r,!0);return}this.setRelative(n,n,(s*c+i*l)/u,r,!0)},R2.prototype.setRelative=function(n,e,t,r,s){r=r||this;var i=s?e.xo:e.x,a=s?e.yo:e.y,o=i+t*r.x,l=a+t*r.y,c=r.normalSlope,u=this.slope,f=n.x,p=n.y;n.x=(u*f-c*o+l-p)/(u-c),n.y=u*(n.x-f)+p},R2.prototype.touch=function(n){n.xTouched=!0,n.yTouched=!0};function N2(n,e){var t=Math.sqrt(n*n+e*e);return n/=t,e/=t,n===1&&e===0?m1:n===0&&e===1?w1:new R2(n,e)}function T1(n,e,t,r){this.x=this.xo=Math.round(n*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=t,this.onCurve=r,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}T1.prototype.nextTouched=function(n){for(var e=this.nextPointOnContour;!n.touched(e)&&e!==this;)e=e.nextPointOnContour;return e},T1.prototype.prevTouched=function(n){for(var e=this.prevPointOnContour;!n.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var B2=Object.freeze(new T1(0,0)),nr={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function D1(n,e){switch(this.env=n,this.stack=[],this.prog=e,n){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=m1,this.round=g6}}y6.prototype.exec=function(n,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var t=this.font,r=this._prepState;if(!r||r.ppem!==e){var s=this._fpgmState;if(!s){D1.prototype=nr,s=this._fpgmState=new D1("fpgm",t.tables.fpgm),s.funcs=[],s.font=t,D.DEBUG&&(console.log("---EXEC FPGM---"),s.step=-1);try{W1(s)}catch(c){console.log("Hinting error in FPGM:"+c),this._errorState=3;return}}D1.prototype=s,r=this._prepState=new D1("prep",t.tables.prep),r.ppem=e;var i=t.tables.cvt;if(i)for(var a=r.cvt=new Array(i.length),o=e/t.unitsPerEm,l=0;l<i.length;l++)a[l]=i[l]*o;else r.cvt=[];D.DEBUG&&(console.log("---EXEC PREP---"),r.step=-1);try{W1(r)}catch(c){this._errorState<2&&console.log("Hinting error in PREP:"+c),this._errorState=2}}if(!(this._errorState>1))try{return v6(n,r)}catch(c){this._errorState<1&&(console.log("Hinting error:"+c),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}},v6=function(n,e){var t=e.ppem/e.font.unitsPerEm,r=t,s=n.components,i,a,o;if(D1.prototype=e,!s)o=new D1("glyf",n.instructions),D.DEBUG&&(console.log("---EXEC GLYPH---"),o.step=-1),H4(n,o,t,r),a=o.gZone;else{var l=e.font;a=[],i=[];for(var c=0;c<s.length;c++){var u=s[c],f=l.glyphs.get(u.glyphIndex);o=new D1("glyf",f.instructions),D.DEBUG&&(console.log("---EXEC COMP "+c+"---"),o.step=-1),H4(f,o,t,r);for(var p=Math.round(u.dx*t),d=Math.round(u.dy*r),v=o.gZone,y=o.contours,m=0;m<v.length;m++){var g=v[m];g.xTouched=g.yTouched=!1,g.xo=g.x=g.x+p,g.yo=g.y=g.y+d}var P=a.length;a.push.apply(a,v);for(var S=0;S<y.length;S++)i.push(y[S]+P)}n.instructions&&!o.inhibitGridFit&&(o=new D1("glyf",n.instructions),o.gZone=o.z0=o.z1=o.z2=a,o.contours=i,a.push(new T1(0,0),new T1(Math.round(n.advanceWidth*t),0)),D.DEBUG&&(console.log("---EXEC COMPOSITE---"),o.step=-1),W1(o),a.length-=2)}return a},H4=function(n,e,t,r){for(var s=n.points||[],i=s.length,a=e.gZone=e.z0=e.z1=e.z2=[],o=e.contours=[],l,c=0;c<i;c++)l=s[c],a[c]=new T1(l.x*t,l.y*r,l.lastPointOfContour,l.onCurve);for(var u,f,p=0;p<i;p++)l=a[p],u||(u=l,o.push(p)),l.lastPointOfContour?(l.nextPointOnContour=u,u.prevPointOnContour=l,u=void 0):(f=a[p+1],l.nextPointOnContour=f,f.prevPointOnContour=l);if(!e.inhibitGridFit){if(D.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var d=0;d<i;d++)console.log(d,a[d].x,a[d].y)}if(a.push(new T1(0,0),new T1(Math.round(n.advanceWidth*t),0)),W1(e),a.length-=2,D.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var v=0;v<i;v++)console.log(v,a[v].x,a[v].y)}}},W1=function(n){var e=n.prog;if(e){var t=e.length,r;for(n.ip=0;n.ip<t;n.ip++){if(D.DEBUG&&n.step++,r=d6[e[n.ip]],!r)throw new Error("unknown instruction: 0x"+Number(e[n.ip]).toString(16));r(n)}}};function we(n){for(var e=n.tZone=new Array(n.gZone.length),t=0;t<e.length;t++)e[t]=new T1(0,0)}function x6(n,e){var t=n.prog,r=n.ip,s=1,i;do if(i=t[++r],i===88)s++;else if(i===89)s--;else if(i===64)r+=t[r+1]+1;else if(i===65)r+=2*t[r+1]+1;else if(i>=176&&i<=183)r+=i-176+1;else if(i>=184&&i<=191)r+=(i-184+1)*2;else if(e&&s===1&&i===27)break;while(s>0);n.ip=r}function b6(n,e){D.DEBUG&&console.log(e.step,"SVTCA["+n.axis+"]"),e.fv=e.pv=e.dpv=n}function S6(n,e){D.DEBUG&&console.log(e.step,"SPVTCA["+n.axis+"]"),e.pv=e.dpv=n}function w6(n,e){D.DEBUG&&console.log(e.step,"SFVTCA["+n.axis+"]"),e.fv=n}function T6(n,e){var t=e.stack,r=t.pop(),s=t.pop(),i=e.z2[r],a=e.z1[s];D.DEBUG&&console.log("SPVTL["+n+"]",r,s);var o,l;n?(o=i.y-a.y,l=a.x-i.x):(o=a.x-i.x,l=a.y-i.y),e.pv=e.dpv=N2(o,l)}function E6(n,e){var t=e.stack,r=t.pop(),s=t.pop(),i=e.z2[r],a=e.z1[s];D.DEBUG&&console.log("SFVTL["+n+"]",r,s);var o,l;n?(o=i.y-a.y,l=a.x-i.x):(o=a.x-i.x,l=a.y-i.y),e.fv=N2(o,l)}function rr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"SPVFS[]",t,r),n.pv=n.dpv=N2(r,t)}function sr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"SPVFS[]",t,r),n.fv=N2(r,t)}function ir(n){var e=n.stack,t=n.pv;D.DEBUG&&console.log(n.step,"GPV[]"),e.push(t.x*16384),e.push(t.y*16384)}function ar(n){var e=n.stack,t=n.fv;D.DEBUG&&console.log(n.step,"GFV[]"),e.push(t.x*16384),e.push(t.y*16384)}function or(n){n.fv=n.pv,D.DEBUG&&console.log(n.step,"SFVTPV[]")}function lr(n){var e=n.stack,t=e.pop(),r=e.pop(),s=e.pop(),i=e.pop(),a=e.pop(),o=n.z0,l=n.z1,c=o[t],u=o[r],f=l[s],p=l[i],d=n.z2[a];D.DEBUG&&console.log("ISECT[], ",t,r,s,i,a);var v=c.x,y=c.y,m=u.x,g=u.y,P=f.x,S=f.y,w=p.x,O=p.y,I=(v-m)*(S-O)-(y-g)*(P-w),M=v*g-y*m,T=P*O-S*w;d.x=(M*(P-w)-T*(v-m))/I,d.y=(M*(S-O)-T*(y-g))/I}function cr(n){n.rp0=n.stack.pop(),D.DEBUG&&console.log(n.step,"SRP0[]",n.rp0)}function hr(n){n.rp1=n.stack.pop(),D.DEBUG&&console.log(n.step,"SRP1[]",n.rp1)}function ur(n){n.rp2=n.stack.pop(),D.DEBUG&&console.log(n.step,"SRP2[]",n.rp2)}function fr(n){var e=n.stack.pop();switch(D.DEBUG&&console.log(n.step,"SZP0[]",e),n.zp0=e,e){case 0:n.tZone||we(n),n.z0=n.tZone;break;case 1:n.z0=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function pr(n){var e=n.stack.pop();switch(D.DEBUG&&console.log(n.step,"SZP1[]",e),n.zp1=e,e){case 0:n.tZone||we(n),n.z1=n.tZone;break;case 1:n.z1=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function dr(n){var e=n.stack.pop();switch(D.DEBUG&&console.log(n.step,"SZP2[]",e),n.zp2=e,e){case 0:n.tZone||we(n),n.z2=n.tZone;break;case 1:n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function vr(n){var e=n.stack.pop();switch(D.DEBUG&&console.log(n.step,"SZPS[]",e),n.zp0=n.zp1=n.zp2=e,e){case 0:n.tZone||we(n),n.z0=n.z1=n.z2=n.tZone;break;case 1:n.z0=n.z1=n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function yr(n){n.loop=n.stack.pop(),D.DEBUG&&console.log(n.step,"SLOOP[]",n.loop)}function gr(n){D.DEBUG&&console.log(n.step,"RTG[]"),n.round=g6}function mr(n){D.DEBUG&&console.log(n.step,"RTHG[]"),n.round=$7}function xr(n){var e=n.stack.pop();D.DEBUG&&console.log(n.step,"SMD[]",e),n.minDis=e/64}function br(n){D.DEBUG&&console.log(n.step,"ELSE[]"),x6(n,!1)}function Sr(n){var e=n.stack.pop();D.DEBUG&&console.log(n.step,"JMPR[]",e),n.ip+=e-1}function wr(n){var e=n.stack.pop();D.DEBUG&&console.log(n.step,"SCVTCI[]",e),n.cvCutIn=e/64}function Tr(n){var e=n.stack;D.DEBUG&&console.log(n.step,"DUP[]"),e.push(e[e.length-1])}function V4(n){D.DEBUG&&console.log(n.step,"POP[]"),n.stack.pop()}function Er(n){D.DEBUG&&console.log(n.step,"CLEAR[]"),n.stack.length=0}function Cr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"SWAP[]"),e.push(t),e.push(r)}function Pr(n){var e=n.stack;D.DEBUG&&console.log(n.step,"DEPTH[]"),e.push(e.length)}function Ar(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"LOOPCALL[]",t,r);var s=n.ip,i=n.prog;n.prog=n.funcs[t];for(var a=0;a<r;a++)W1(n),D.DEBUG&&console.log(++n.step,a+1<r?"next loopcall":"done loopcall",a);n.ip=s,n.prog=i}function kr(n){var e=n.stack.pop();D.DEBUG&&console.log(n.step,"CALL[]",e);var t=n.ip,r=n.prog;n.prog=n.funcs[e],W1(n),n.ip=t,n.prog=r,D.DEBUG&&console.log(++n.step,"returning from",e)}function Lr(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"CINDEX[]",t),e.push(e[e.length-t])}function Fr(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"MINDEX[]",t),e.push(e.splice(e.length-t,1)[0])}function Or(n){if(n.env!=="fpgm")throw new Error("FDEF not allowed here");var e=n.stack,t=n.prog,r=n.ip,s=e.pop(),i=r;for(D.DEBUG&&console.log(n.step,"FDEF[]",s);t[++r]!==45;);n.ip=r,n.funcs[s]=t.slice(i+1,r)}function C6(n,e){var t=e.stack.pop(),r=e.z0[t],s=e.fv,i=e.pv;D.DEBUG&&console.log(e.step,"MDAP["+n+"]",t);var a=i.distance(r,B2);n&&(a=e.round(a)),s.setRelative(r,B2,a,i),s.touch(r),e.rp0=e.rp1=t}function P6(n,e){var t=e.z2,r=t.length-2,s,i,a;D.DEBUG&&console.log(e.step,"IUP["+n.axis+"]");for(var o=0;o<r;o++)s=t[o],!n.touched(s)&&(i=s.prevTouched(n),i!==s&&(a=s.nextTouched(n),i===a&&n.setRelative(s,s,n.distance(i,i,!1,!0),n,!0),n.interpolate(s,i,a,n)))}function A6(n,e){for(var t=e.stack,r=n?e.rp1:e.rp2,s=(n?e.z0:e.z1)[r],i=e.fv,a=e.pv,o=e.loop,l=e.z2;o--;){var c=t.pop(),u=l[c],f=a.distance(s,s,!1,!0);i.setRelative(u,u,f,a),i.touch(u),D.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-o)+": ":"")+"SHP["+(n?"rp1":"rp2")+"]",c)}e.loop=1}function k6(n,e){var t=e.stack,r=n?e.rp1:e.rp2,s=(n?e.z0:e.z1)[r],i=e.fv,a=e.pv,o=t.pop(),l=e.z2[e.contours[o]],c=l;D.DEBUG&&console.log(e.step,"SHC["+n+"]",o);var u=a.distance(s,s,!1,!0);do c!==s&&i.setRelative(c,c,u,a),c=c.nextPointOnContour;while(c!==l)}function L6(n,e){var t=e.stack,r=n?e.rp1:e.rp2,s=(n?e.z0:e.z1)[r],i=e.fv,a=e.pv,o=t.pop();D.DEBUG&&console.log(e.step,"SHZ["+n+"]",o);var l;switch(o){case 0:l=e.tZone;break;case 1:l=e.gZone;break;default:throw new Error("Invalid zone")}for(var c,u=a.distance(s,s,!1,!0),f=l.length-2,p=0;p<f;p++)c=l[p],i.setRelative(c,c,u,a)}function Dr(n){for(var e=n.stack,t=n.loop,r=n.fv,s=e.pop()/64,i=n.z2;t--;){var a=e.pop(),o=i[a];D.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-t)+": ":"")+"SHPIX[]",a,s),r.setRelative(o,o,s),r.touch(o)}n.loop=1}function Mr(n){for(var e=n.stack,t=n.rp1,r=n.rp2,s=n.loop,i=n.z0[t],a=n.z1[r],o=n.fv,l=n.dpv,c=n.z2;s--;){var u=e.pop(),f=c[u];D.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-s)+": ":"")+"IP[]",u,t,"<->",r),o.interpolate(f,i,a,l),o.touch(f)}n.loop=1}function F6(n,e){var t=e.stack,r=t.pop()/64,s=t.pop(),i=e.z1[s],a=e.z0[e.rp0],o=e.fv,l=e.pv;o.setRelative(i,a,r,l),o.touch(i),D.DEBUG&&console.log(e.step,"MSIRP["+n+"]",r,s),e.rp1=e.rp0,e.rp2=s,n&&(e.rp0=s)}function Ir(n){for(var e=n.stack,t=n.rp0,r=n.z0[t],s=n.loop,i=n.fv,a=n.pv,o=n.z1;s--;){var l=e.pop(),c=o[l];D.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-s)+": ":"")+"ALIGNRP[]",l),i.setRelative(c,r,0,a),i.touch(c)}n.loop=1}function _r(n){D.DEBUG&&console.log(n.step,"RTDG[]"),n.round=K7}function O6(n,e){var t=e.stack,r=t.pop(),s=t.pop(),i=e.z0[s],a=e.fv,o=e.pv,l=e.cvt[r];D.DEBUG&&console.log(e.step,"MIAP["+n+"]",r,"(",l,")",s);var c=o.distance(i,B2);n&&(Math.abs(c-l)<e.cvCutIn&&(c=l),c=e.round(c)),a.setRelative(i,B2,c,o),e.zp0===0&&(i.xo=i.x,i.yo=i.y),a.touch(i),e.rp0=e.rp1=s}function Rr(n){var e=n.prog,t=n.ip,r=n.stack,s=e[++t];D.DEBUG&&console.log(n.step,"NPUSHB[]",s);for(var i=0;i<s;i++)r.push(e[++t]);n.ip=t}function Nr(n){var e=n.ip,t=n.prog,r=n.stack,s=t[++e];D.DEBUG&&console.log(n.step,"NPUSHW[]",s);for(var i=0;i<s;i++){var a=t[++e]<<8|t[++e];a&32768&&(a=-((a^65535)+1)),r.push(a)}n.ip=e}function Br(n){var e=n.stack,t=n.store;t||(t=n.store=[]);var r=e.pop(),s=e.pop();D.DEBUG&&console.log(n.step,"WS",r,s),t[s]=r}function Ur(n){var e=n.stack,t=n.store,r=e.pop();D.DEBUG&&console.log(n.step,"RS",r);var s=t&&t[r]||0;e.push(s)}function Gr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"WCVTP",t,r),n.cvt[r]=t/64}function zr(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"RCVT",t),e.push(n.cvt[t]*64)}function D6(n,e){var t=e.stack,r=t.pop(),s=e.z2[r];D.DEBUG&&console.log(e.step,"GC["+n+"]",r),t.push(e.dpv.distance(s,B2,n,!1)*64)}function M6(n,e){var t=e.stack,r=t.pop(),s=t.pop(),i=e.z1[r],a=e.z0[s],o=e.dpv.distance(a,i,n,n);D.DEBUG&&console.log(e.step,"MD["+n+"]",r,s,"->",o),e.stack.push(Math.round(o*64))}function Hr(n){D.DEBUG&&console.log(n.step,"MPPEM[]"),n.stack.push(n.ppem)}function Vr(n){D.DEBUG&&console.log(n.step,"FLIPON[]"),n.autoFlip=!0}function Wr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"LT[]",t,r),e.push(r<t?1:0)}function Xr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"LTEQ[]",t,r),e.push(r<=t?1:0)}function Yr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"GT[]",t,r),e.push(r>t?1:0)}function Zr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"GTEQ[]",t,r),e.push(r>=t?1:0)}function Jr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"EQ[]",t,r),e.push(t===r?1:0)}function jr(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"NEQ[]",t,r),e.push(t!==r?1:0)}function Qr(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"ODD[]",t),e.push(Math.trunc(t)%2?1:0)}function qr(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"EVEN[]",t),e.push(Math.trunc(t)%2?0:1)}function Kr(n){var e=n.stack.pop();D.DEBUG&&console.log(n.step,"IF[]",e),e||(x6(n,!0),D.DEBUG&&console.log(n.step,"EIF[]"))}function $r(n){D.DEBUG&&console.log(n.step,"EIF[]")}function e9(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"AND[]",t,r),e.push(t&&r?1:0)}function t9(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"OR[]",t,r),e.push(t||r?1:0)}function n9(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"NOT[]",t),e.push(t?0:1)}function W4(n,e){var t=e.stack,r=t.pop(),s=e.fv,i=e.pv,a=e.ppem,o=e.deltaBase+(n-1)*16,l=e.deltaShift,c=e.z0;D.DEBUG&&console.log(e.step,"DELTAP["+n+"]",r,t);for(var u=0;u<r;u++){var f=t.pop(),p=t.pop(),d=o+((p&240)>>4);if(d===a){var v=(p&15)-8;v>=0&&v++,D.DEBUG&&console.log(e.step,"DELTAPFIX",f,"by",v*l);var y=c[f];s.setRelative(y,y,v*l,i)}}}function r9(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"SDB[]",t),n.deltaBase=t}function s9(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"SDS[]",t),n.deltaShift=Math.pow(.5,t)}function i9(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"ADD[]",t,r),e.push(r+t)}function a9(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"SUB[]",t,r),e.push(r-t)}function o9(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"DIV[]",t,r),e.push(r*64/t)}function l9(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"MUL[]",t,r),e.push(r*t/64)}function c9(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"ABS[]",t),e.push(Math.abs(t))}function h9(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"NEG[]",t),e.push(-t)}function u9(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"FLOOR[]",t),e.push(Math.floor(t/64)*64)}function f9(n){var e=n.stack,t=e.pop();D.DEBUG&&console.log(n.step,"CEILING[]",t),e.push(Math.ceil(t/64)*64)}function Te(n,e){var t=e.stack,r=t.pop();D.DEBUG&&console.log(e.step,"ROUND[]"),t.push(e.round(r/64)*64)}function p9(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"WCVTF[]",t,r),n.cvt[r]=t*n.ppem/n.font.unitsPerEm}function X4(n,e){var t=e.stack,r=t.pop(),s=e.ppem,i=e.deltaBase+(n-1)*16,a=e.deltaShift;D.DEBUG&&console.log(e.step,"DELTAC["+n+"]",r,t);for(var o=0;o<r;o++){var l=t.pop(),c=t.pop(),u=i+((c&240)>>4);if(u===s){var f=(c&15)-8;f>=0&&f++;var p=f*a;D.DEBUG&&console.log(e.step,"DELTACFIX",l,"by",p),e.cvt[l]+=p}}}function d9(n){var e=n.stack.pop();D.DEBUG&&console.log(n.step,"SROUND[]",e),n.round=m6;var t;switch(e&192){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw new Error("invalid SROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function v9(n){var e=n.stack.pop();D.DEBUG&&console.log(n.step,"S45ROUND[]",e),n.round=m6;var t;switch(e&192){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function y9(n){D.DEBUG&&console.log(n.step,"ROFF[]"),n.round=q7}function g9(n){D.DEBUG&&console.log(n.step,"RUTG[]"),n.round=er}function m9(n){D.DEBUG&&console.log(n.step,"RDTG[]"),n.round=tr}function x9(n){var e=n.stack.pop();D.DEBUG&&console.log(n.step,"SCANCTRL[]",e)}function I6(n,e){var t=e.stack,r=t.pop(),s=t.pop(),i=e.z2[r],a=e.z1[s];D.DEBUG&&console.log(e.step,"SDPVTL["+n+"]",r,s);var o,l;n?(o=i.y-a.y,l=a.x-i.x):(o=a.x-i.x,l=a.y-i.y),e.dpv=N2(o,l)}function b9(n){var e=n.stack,t=e.pop(),r=0;D.DEBUG&&console.log(n.step,"GETINFO[]",t),t&1&&(r=35),t&32&&(r|=4096),e.push(r)}function S9(n){var e=n.stack,t=e.pop(),r=e.pop(),s=e.pop();D.DEBUG&&console.log(n.step,"ROLL[]"),e.push(r),e.push(t),e.push(s)}function w9(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"MAX[]",t,r),e.push(Math.max(r,t))}function T9(n){var e=n.stack,t=e.pop(),r=e.pop();D.DEBUG&&console.log(n.step,"MIN[]",t,r),e.push(Math.min(r,t))}function E9(n){var e=n.stack.pop();D.DEBUG&&console.log(n.step,"SCANTYPE[]",e)}function C9(n){var e=n.stack.pop(),t=n.stack.pop();switch(D.DEBUG&&console.log(n.step,"INSTCTRL[]",e,t),e){case 1:n.inhibitGridFit=!!t;return;case 2:n.ignoreCvt=!!t;return;default:throw new Error("invalid INSTCTRL[] selector")}}function M1(n,e){var t=e.stack,r=e.prog,s=e.ip;D.DEBUG&&console.log(e.step,"PUSHB["+n+"]");for(var i=0;i<n;i++)t.push(r[++s]);e.ip=s}function I1(n,e){var t=e.ip,r=e.prog,s=e.stack;D.DEBUG&&console.log(e.ip,"PUSHW["+n+"]");for(var i=0;i<n;i++){var a=r[++t]<<8|r[++t];a&32768&&(a=-((a^65535)+1)),s.push(a)}e.ip=t}function V(n,e,t,r,s,i){var a=i.stack,o=n&&a.pop(),l=a.pop(),c=i.rp0,u=i.z0[c],f=i.z1[l],p=i.minDis,d=i.fv,v=i.dpv,y,m,g,P;m=y=v.distance(f,u,!0,!0),g=m>=0?1:-1,m=Math.abs(m),n&&(P=i.cvt[o],r&&Math.abs(m-P)<i.cvCutIn&&(m=P)),t&&m<p&&(m=p),r&&(m=i.round(m)),d.setRelative(f,u,g*m,v),d.touch(f),D.DEBUG&&console.log(i.step,(n?"MIRP[":"MDRP[")+(e?"M":"m")+(t?">":"_")+(r?"R":"_")+(s===0?"Gr":s===1?"Bl":s===2?"Wh":"")+"]",n?o+"("+i.cvt[o]+","+P+")":"",l,"(d =",y,"->",g*m,")"),i.rp1=i.rp0,i.rp2=l,e&&(i.rp0=l)}d6=[b6.bind(void 0,w1),b6.bind(void 0,m1),S6.bind(void 0,w1),S6.bind(void 0,m1),w6.bind(void 0,w1),w6.bind(void 0,m1),T6.bind(void 0,0),T6.bind(void 0,1),E6.bind(void 0,0),E6.bind(void 0,1),rr,sr,ir,ar,or,lr,cr,hr,ur,fr,pr,dr,vr,yr,gr,mr,xr,br,Sr,wr,void 0,void 0,Tr,V4,Er,Cr,Pr,Lr,Fr,void 0,void 0,void 0,Ar,kr,Or,void 0,C6.bind(void 0,0),C6.bind(void 0,1),P6.bind(void 0,w1),P6.bind(void 0,m1),A6.bind(void 0,0),A6.bind(void 0,1),k6.bind(void 0,0),k6.bind(void 0,1),L6.bind(void 0,0),L6.bind(void 0,1),Dr,Mr,F6.bind(void 0,0),F6.bind(void 0,1),Ir,_r,O6.bind(void 0,0),O6.bind(void 0,1),Rr,Nr,Br,Ur,Gr,zr,D6.bind(void 0,0),D6.bind(void 0,1),void 0,M6.bind(void 0,0),M6.bind(void 0,1),Hr,void 0,Vr,void 0,void 0,Wr,Xr,Yr,Zr,Jr,jr,Qr,qr,Kr,$r,e9,t9,n9,W4.bind(void 0,1),r9,s9,i9,a9,o9,l9,c9,h9,u9,f9,Te.bind(void 0,0),Te.bind(void 0,1),Te.bind(void 0,2),Te.bind(void 0,3),void 0,void 0,void 0,void 0,p9,W4.bind(void 0,2),W4.bind(void 0,3),X4.bind(void 0,1),X4.bind(void 0,2),X4.bind(void 0,3),d9,v9,void 0,void 0,y9,void 0,g9,m9,V4,V4,void 0,void 0,void 0,void 0,void 0,x9,I6.bind(void 0,0),I6.bind(void 0,1),b9,void 0,S9,w9,T9,E9,C9,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,M1.bind(void 0,1),M1.bind(void 0,2),M1.bind(void 0,3),M1.bind(void 0,4),M1.bind(void 0,5),M1.bind(void 0,6),M1.bind(void 0,7),M1.bind(void 0,8),I1.bind(void 0,1),I1.bind(void 0,2),I1.bind(void 0,3),I1.bind(void 0,4),I1.bind(void 0,5),I1.bind(void 0,6),I1.bind(void 0,7),I1.bind(void 0,8),V.bind(void 0,0,0,0,0,0),V.bind(void 0,0,0,0,0,1),V.bind(void 0,0,0,0,0,2),V.bind(void 0,0,0,0,0,3),V.bind(void 0,0,0,0,1,0),V.bind(void 0,0,0,0,1,1),V.bind(void 0,0,0,0,1,2),V.bind(void 0,0,0,0,1,3),V.bind(void 0,0,0,1,0,0),V.bind(void 0,0,0,1,0,1),V.bind(void 0,0,0,1,0,2),V.bind(void 0,0,0,1,0,3),V.bind(void 0,0,0,1,1,0),V.bind(void 0,0,0,1,1,1),V.bind(void 0,0,0,1,1,2),V.bind(void 0,0,0,1,1,3),V.bind(void 0,0,1,0,0,0),V.bind(void 0,0,1,0,0,1),V.bind(void 0,0,1,0,0,2),V.bind(void 0,0,1,0,0,3),V.bind(void 0,0,1,0,1,0),V.bind(void 0,0,1,0,1,1),V.bind(void 0,0,1,0,1,2),V.bind(void 0,0,1,0,1,3),V.bind(void 0,0,1,1,0,0),V.bind(void 0,0,1,1,0,1),V.bind(void 0,0,1,1,0,2),V.bind(void 0,0,1,1,0,3),V.bind(void 0,0,1,1,1,0),V.bind(void 0,0,1,1,1,1),V.bind(void 0,0,1,1,1,2),V.bind(void 0,0,1,1,1,3),V.bind(void 0,1,0,0,0,0),V.bind(void 0,1,0,0,0,1),V.bind(void 0,1,0,0,0,2),V.bind(void 0,1,0,0,0,3),V.bind(void 0,1,0,0,1,0),V.bind(void 0,1,0,0,1,1),V.bind(void 0,1,0,0,1,2),V.bind(void 0,1,0,0,1,3),V.bind(void 0,1,0,1,0,0),V.bind(void 0,1,0,1,0,1),V.bind(void 0,1,0,1,0,2),V.bind(void 0,1,0,1,0,3),V.bind(void 0,1,0,1,1,0),V.bind(void 0,1,0,1,1,1),V.bind(void 0,1,0,1,1,2),V.bind(void 0,1,0,1,1,3),V.bind(void 0,1,1,0,0,0),V.bind(void 0,1,1,0,0,1),V.bind(void 0,1,1,0,0,2),V.bind(void 0,1,1,0,0,3),V.bind(void 0,1,1,0,1,0),V.bind(void 0,1,1,0,1,1),V.bind(void 0,1,1,0,1,2),V.bind(void 0,1,1,0,1,3),V.bind(void 0,1,1,1,0,0),V.bind(void 0,1,1,1,0,1),V.bind(void 0,1,1,1,0,2),V.bind(void 0,1,1,1,0,3),V.bind(void 0,1,1,1,1,0),V.bind(void 0,1,1,1,1,1),V.bind(void 0,1,1,1,1,2),V.bind(void 0,1,1,1,1,3)];function l2(n){this.char=n,this.state={},this.activeState=null}function Y4(n,e,t){this.contextName=t,this.startIndex=n,this.endOffset=e}function P9(n,e,t){this.contextName=n,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=t}function o1(n,e){this.context=n,this.index=e,this.length=n.length,this.current=n[e],this.backtrack=n.slice(0,e),this.lookahead=n.slice(e+1)}function Ee(n){this.eventId=n,this.subscribers=[]}function A9(n){var e=this,t=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];t.forEach(function(s){Object.defineProperty(e.events,s,{value:new Ee(s)})}),n&&t.forEach(function(s){var i=n[s];typeof i=="function"&&e.events[s].subscribe(i)});var r=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];r.forEach(function(s){e.events[s].subscribe(e.updateContextsRanges)})}function S0(n){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],A9.call(this,n)}l2.prototype.setState=function(n,e){return this.state[n]=e,this.activeState={key:n,value:this.state[n]},this.activeState},l2.prototype.getState=function(n){return this.state[n]||null},S0.prototype.inboundIndex=function(n){return n>=0&&n<this.tokens.length},S0.prototype.composeRUD=function(n){var e=this,t=!0,r=n.map(function(i){return e[i[0]].apply(e,i.slice(1).concat(t))}),s=function(i){return typeof i=="object"&&i.hasOwnProperty("FAIL")};if(r.every(s))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:r.filter(s)};this.dispatch("composeRUD",[r.filter(function(i){return!s(i)})])},S0.prototype.replaceRange=function(n,e,t,r){e=e!==null?e:this.tokens.length;var s=t.every(function(a){return a instanceof l2});if(!isNaN(n)&&this.inboundIndex(n)&&s){var i=this.tokens.splice.apply(this.tokens,[n,e].concat(t));return r||this.dispatch("replaceToken",[n,e,t]),[i,t]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}},S0.prototype.replaceToken=function(n,e,t){if(!isNaN(n)&&this.inboundIndex(n)&&e instanceof l2){var r=this.tokens.splice(n,1,e);return t||this.dispatch("replaceToken",[n,e]),[r[0],e]}else return{FAIL:"replaceToken: invalid token or index."}},S0.prototype.removeRange=function(n,e,t){e=isNaN(e)?this.tokens.length:e;var r=this.tokens.splice(n,e);return t||this.dispatch("removeRange",[r,n,e]),r},S0.prototype.removeToken=function(n,e){if(!isNaN(n)&&this.inboundIndex(n)){var t=this.tokens.splice(n,1);return e||this.dispatch("removeToken",[t,n]),t}else return{FAIL:"removeToken: invalid token index."}},S0.prototype.insertToken=function(n,e,t){var r=n.every(function(s){return s instanceof l2});return r?(this.tokens.splice.apply(this.tokens,[e,0].concat(n)),t||this.dispatch("insertToken",[n,e]),n):{FAIL:"insertToken: invalid token(s)."}},S0.prototype.registerModifier=function(n,e,t){this.events.newToken.subscribe(function(r,s){var i=[r,s],a=e===null||e.apply(this,i)===!0,o=[r,s];if(a){var l=t.apply(this,o);r.setState(n,l)}}),this.registeredModifiers.push(n)},Ee.prototype.subscribe=function(n){return typeof n=="function"?this.subscribers.push(n)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}},Ee.prototype.unsubscribe=function(n){this.subscribers.splice(n,1)},o1.prototype.setCurrentIndex=function(n){this.index=n,this.current=this.context[n],this.backtrack=this.context.slice(0,n),this.lookahead=this.context.slice(n+1)},o1.prototype.get=function(n){switch(!0){case n===0:return this.current;case(n<0&&Math.abs(n)<=this.backtrack.length):return this.backtrack.slice(n)[0];case(n>0&&n<=this.lookahead.length):return this.lookahead[n-1];default:return null}},S0.prototype.rangeToText=function(n){if(n instanceof Y4)return this.getRangeTokens(n).map(function(e){return e.char}).join("")},S0.prototype.getText=function(){return this.tokens.map(function(n){return n.char}).join("")},S0.prototype.getContext=function(n){var e=this.registeredContexts[n];return e||null},S0.prototype.on=function(n,e){var t=this.events[n];return t?t.subscribe(e):null},S0.prototype.dispatch=function(n,e){var t=this,r=this.events[n];r instanceof Ee&&r.subscribers.forEach(function(s){s.apply(t,e||[])})},S0.prototype.registerContextChecker=function(n,e,t){if(this.getContext(n))return{FAIL:"context name '"+n+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof t!="function")return{FAIL:"missing context end check."};var r=new P9(n,e,t);return this.registeredContexts[n]=r,this.contextCheckers.push(r),r},S0.prototype.getRangeTokens=function(n){var e=n.startIndex+n.endOffset;return[].concat(this.tokens.slice(n.startIndex,e))},S0.prototype.getContextRanges=function(n){var e=this.getContext(n);return e?e.ranges:{FAIL:"context checker '"+n+"' is not registered."}},S0.prototype.resetContextsRanges=function(){var n=this.registeredContexts;for(var e in n)if(n.hasOwnProperty(e)){var t=n[e];t.ranges=[]}},S0.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var n=this.tokens.map(function(r){return r.char}),e=0;e<n.length;e++){var t=new o1(n,e);this.runContextCheck(t)}this.dispatch("updateContextsRanges",[this.registeredContexts])},S0.prototype.setEndOffset=function(n,e){var t=this.getContext(e).openRange.startIndex,r=new Y4(t,n,e),s=this.getContext(e).ranges;return r.rangeId=e+"."+s.length,s.push(r),this.getContext(e).openRange=null,r},S0.prototype.runContextCheck=function(n){var e=this,t=n.index;this.contextCheckers.forEach(function(r){var s=r.contextName,i=e.getContext(s).openRange;if(!i&&r.checkStart(n)&&(i=new Y4(t,null,s),e.getContext(s).openRange=i,e.dispatch("contextStart",[s,t])),i&&r.checkEnd(n)){var a=t-i.startIndex+1,o=e.setEndOffset(a,s);e.dispatch("contextEnd",[s,o])}})},S0.prototype.tokenize=function(n){this.tokens=[],this.resetContextsRanges();var e=Array.from(n);this.dispatch("start");for(var t=0;t<e.length;t++){var r=e[t],s=new o1(e,t);this.dispatch("next",[s]),this.runContextCheck(s);var i=new l2(r);this.tokens.push(i),this.dispatch("newToken",[i,s])}return this.dispatch("end",[this.tokens]),this.tokens};function _1(n){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(n)}function _6(n){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(n)}function R1(n){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(n)}function Ce(n){return/[A-z]/.test(n)}function k9(n){return/\s/.test(n)}function j0(n){this.font=n,this.features={}}function X1(n){this.id=n.id,this.tag=n.tag,this.substitution=n.substitution}function U2(n,e){if(!n)return-1;switch(e.format){case 1:return e.glyphs.indexOf(n);case 2:for(var t=e.ranges,r=0;r<t.length;r++){var s=t[r];if(n>=s.start&&n<=s.end){var i=n-s.start;return s.index+i}}break;default:return-1}return-1}function L9(n,e){var t=U2(n,e.coverage);return t===-1?null:n+e.deltaGlyphId}function F9(n,e){var t=U2(n,e.coverage);return t===-1?null:e.substitute[t]}function Z4(n,e){for(var t=[],r=0;r<n.length;r++){var s=n[r],i=e.current;i=Array.isArray(i)?i[0]:i;var a=U2(i,s);a!==-1&&t.push(a)}return t.length!==n.length?-1:t}function O9(n,e){var t=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(n.context.length<t)return[];var r=Z4(e.inputCoverage,n);if(r===-1)return[];var s=e.inputCoverage.length-1;if(n.lookahead.length<e.lookaheadCoverage.length)return[];for(var i=n.lookahead.slice(s);i.length&&R1(i[0].char);)i.shift();var a=new o1(i,0),o=Z4(e.lookaheadCoverage,a),l=[].concat(n.backtrack);for(l.reverse();l.length&&R1(l[0].char);)l.shift();if(l.length<e.backtrackCoverage.length)return[];var c=new o1(l,0),u=Z4(e.backtrackCoverage,c),f=r.length===e.inputCoverage.length&&o.length===e.lookaheadCoverage.length&&u.length===e.backtrackCoverage.length,p=[];if(f)for(var d=0;d<e.lookupRecords.length;d++)for(var v=e.lookupRecords[d],y=v.lookupListIndex,m=this.getLookupByIndex(y),g=0;g<m.subtables.length;g++){var P=m.subtables[g],S=this.getLookupMethod(m,P),w=this.getSubstitutionType(m,P);if(w==="12")for(var O=0;O<r.length;O++){var I=n.get(O),M=S(I);M&&p.push(M)}}return p}function D9(n,e){var t=n.current,r=U2(t,e.coverage);if(r===-1)return null;for(var s,i=e.ligatureSets[r],a=0;a<i.length;a++){s=i[a];for(var o=0;o<s.components.length;o++){var l=n.lookahead[o],c=s.components[o];if(l!==c)break;if(o===s.components.length-1)return s}}return null}function M9(n,e){var t=U2(n,e.coverage);return t===-1?null:e.sequences[t]}j0.prototype.getDefaultScriptFeaturesIndexes=function(){for(var n=this.font.tables.gsub.scripts,e=0;e<n.length;e++){var t=n[e];if(t.tag==="DFLT")return t.script.defaultLangSys.featureIndexes}return[]},j0.prototype.getScriptFeaturesIndexes=function(n){var e=this.font.tables;if(!e.gsub)return[];if(!n)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,r=0;r<t.length;r++){var s=t[r];if(s.tag===n&&s.script.defaultLangSys)return s.script.defaultLangSys.featureIndexes;var i=s.langSysRecords;if(i)for(var a=0;a<i.length;a++){var o=i[a];if(o.tag===n){var l=o.langSys;return l.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()},j0.prototype.mapTagsToFeatures=function(n,e){for(var t={},r=0;r<n.length;r++){var s=n[r].tag,i=n[r].feature;t[s]=i}this.features[e].tags=t},j0.prototype.getScriptFeatures=function(n){var e=this.features[n];if(this.features.hasOwnProperty(n))return e;var t=this.getScriptFeaturesIndexes(n);if(!t)return null;var r=this.font.tables.gsub;return e=t.map(function(s){return r.features[s]}),this.features[n]=e,this.mapTagsToFeatures(e,n),e},j0.prototype.getSubstitutionType=function(n,e){var t=n.lookupType.toString(),r=e.substFormat.toString();return t+r},j0.prototype.getLookupMethod=function(n,e){var t=this,r=this.getSubstitutionType(n,e);switch(r){case"11":return function(s){return L9.apply(t,[s,e])};case"12":return function(s){return F9.apply(t,[s,e])};case"63":return function(s){return O9.apply(t,[s,e])};case"41":return function(s){return D9.apply(t,[s,e])};case"21":return function(s){return M9.apply(t,[s,e])};default:throw new Error("lookupType: "+n.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}},j0.prototype.lookupFeature=function(n){var e=n.contextParams,t=e.index,r=this.getFeature({tag:n.tag,script:n.script});if(!r)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+n.tag+"' for script '"+n.script+"'.");for(var s=this.getFeatureLookups(r),i=[].concat(e.context),a=0;a<s.length;a++)for(var o=s[a],l=this.getLookupSubtables(o),c=0;c<l.length;c++){var u=l[c],f=this.getSubstitutionType(o,u),p=this.getLookupMethod(o,u),d=void 0;switch(f){case"11":d=p(e.current),d&&i.splice(t,1,new X1({id:11,tag:n.tag,substitution:d}));break;case"12":d=p(e.current),d&&i.splice(t,1,new X1({id:12,tag:n.tag,substitution:d}));break;case"63":d=p(e),Array.isArray(d)&&d.length&&i.splice(t,1,new X1({id:63,tag:n.tag,substitution:d}));break;case"41":d=p(e),d&&i.splice(t,1,new X1({id:41,tag:n.tag,substitution:d}));break;case"21":d=p(e.current),d&&i.splice(t,1,new X1({id:21,tag:n.tag,substitution:d}));break}e=new o1(i,t),!(Array.isArray(d)&&!d.length)&&(d=null)}return i.length?i:null},j0.prototype.supports=function(n){if(!n.script)return!1;this.getScriptFeatures(n.script);var e=this.features.hasOwnProperty(n.script);if(!n.tag)return e;var t=this.features[n.script].some(function(r){return r.tag===n.tag});return e&&t},j0.prototype.getLookupSubtables=function(n){return n.subtables||null},j0.prototype.getLookupByIndex=function(n){var e=this.font.tables.gsub.lookups;return e[n]||null},j0.prototype.getFeatureLookups=function(n){return n.lookupListIndexes.map(this.getLookupByIndex.bind(this))},j0.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function I9(n){var e=n.current,t=n.get(-1);return t===null&&_1(e)||!_1(t)&&_1(e)}function _9(n){var e=n.get(1);return e===null||!_1(e)}var R9={startCheck:I9,endCheck:_9};function N9(n){var e=n.current,t=n.get(-1);return(_1(e)||R1(e))&&!_1(t)}function B9(n){var e=n.get(1);switch(!0){case e===null:return!0;case(!_1(e)&&!R1(e)):var t=k9(e);if(!t)return!0;if(t){var r=!1;if(r=n.lookahead.some(function(s){return _1(s)||R1(s)}),!r)return!0}break;default:return!1}}var U9={startCheck:N9,endCheck:B9};function G9(n,e,t){e[t].setState(n.tag,n.substitution)}function z9(n,e,t){e[t].setState(n.tag,n.substitution)}function H9(n,e,t){n.substitution.forEach(function(r,s){var i=e[t+s];i.setState(n.tag,r)})}function V9(n,e,t){var r=e[t];r.setState(n.tag,n.substitution.ligGlyph);for(var s=n.substitution.components.length,i=0;i<s;i++)r=e[t+i+1],r.setState("deleted",!0)}var R6={11:G9,12:z9,63:H9,41:V9};function J4(n,e,t){n instanceof X1&&R6[n.id]&&R6[n.id](n,e,t)}function W9(n){for(var e=[].concat(n.backtrack),t=e.length-1;t>=0;t--){var r=e[t],s=_6(r),i=R1(r);if(!s&&!i)return!0;if(s)return!1}return!1}function X9(n){if(_6(n.current))return!1;for(var e=0;e<n.lookahead.length;e++){var t=n.lookahead[e],r=R1(t);if(!r)return!0}return!1}function Y9(n){var e=this,t="arab",r=this.featuresTags[t],s=this.tokenizer.getRangeTokens(n);if(s.length!==1){var i=new o1(s.map(function(o){return o.getState("glyphIndex")}),0),a=new o1(s.map(function(o){return o.char}),0);s.forEach(function(o,l){if(!R1(o.char)){i.setCurrentIndex(l),a.setCurrentIndex(l);var c=0;W9(a)&&(c|=1),X9(a)&&(c|=2);var u;switch(c){case 1:u="fina";break;case 2:u="init";break;case 3:u="medi";break}if(r.indexOf(u)!==-1){var f=e.query.lookupFeature({tag:u,script:t,contextParams:i});if(f instanceof Error)return console.info(f.message);f.forEach(function(p,d){p instanceof X1&&(J4(p,s,d),i.context[d]=p.substitution)})}}})}}function N6(n,e){var t=n.map(function(r){return r.activeState.value});return new o1(t,0)}function Z9(n){var e=this,t="arab",r=this.tokenizer.getRangeTokens(n),s=N6(r);s.context.forEach(function(i,a){s.setCurrentIndex(a);var o=e.query.lookupFeature({tag:"rlig",script:t,contextParams:s});o.length&&(o.forEach(function(l){return J4(l,r,a)}),s=N6(r))})}function J9(n){var e=n.current,t=n.get(-1);return t===null&&Ce(e)||!Ce(t)&&Ce(e)}function j9(n){var e=n.get(1);return e===null||!Ce(e)}var Q9={startCheck:J9,endCheck:j9};function B6(n,e){var t=n.map(function(r){return r.activeState.value});return new o1(t,0)}function q9(n){var e=this,t="latn",r=this.tokenizer.getRangeTokens(n),s=B6(r);s.context.forEach(function(i,a){s.setCurrentIndex(a);var o=e.query.lookupFeature({tag:"liga",script:t,contextParams:s});o.length&&(o.forEach(function(l){return J4(l,r,a)}),s=B6(r))})}function l1(n){this.baseDir=n||"ltr",this.tokenizer=new S0,this.featuresTags={}}l1.prototype.setText=function(n){this.text=n},l1.prototype.contextChecks={latinWordCheck:Q9,arabicWordCheck:R9,arabicSentenceCheck:U9};function j4(n){var e=this.contextChecks[n+"Check"];return this.tokenizer.registerContextChecker(n,e.startCheck,e.endCheck)}function K9(){return j4.call(this,"latinWord"),j4.call(this,"arabicWord"),j4.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function $9(){var n=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(t){var r=n.tokenizer.getRangeTokens(t);n.tokenizer.replaceRange(t.startIndex,t.endOffset,r.reverse())})}l1.prototype.registerFeatures=function(n,e){var t=this,r=e.filter(function(s){return t.query.supports({script:n,tag:s})});this.featuresTags.hasOwnProperty(n)?this.featuresTags[n]=this.featuresTags[n].concat(r):this.featuresTags[n]=r},l1.prototype.applyFeatures=function(n,e){if(!n)throw new Error("No valid font was provided to apply features");this.query||(this.query=new j0(n));for(var t=0;t<e.length;t++){var r=e[t];this.query.supports({script:r.script})&&this.registerFeatures(r.script,r.tags)}},l1.prototype.registerModifier=function(n,e,t){this.tokenizer.registerModifier(n,e,t)};function Q4(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function es(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){Q4.call(this);var t=this.tokenizer.getContextRanges("arabicWord");t.forEach(function(r){Y9.call(n,r)})}}function ts(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("rlig")!==-1){Q4.call(this);var r=this.tokenizer.getContextRanges("arabicWord");r.forEach(function(s){Z9.call(n,s)})}}}function ns(){var n=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("liga")!==-1){Q4.call(this);var r=this.tokenizer.getContextRanges("latinWord");r.forEach(function(s){q9.call(n,s)})}}}l1.prototype.checkContextReady=function(n){return!!this.tokenizer.getContext(n)},l1.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(es.call(this),ts.call(this)),this.checkContextReady("latinWord")&&ns.call(this),this.checkContextReady("arabicSentence")&&$9.call(this)},l1.prototype.processText=function(n){(!this.text||this.text!==n)&&(this.setText(n),K9.call(this),this.applyFeaturesToContexts())},l1.prototype.getBidiText=function(n){return this.processText(n),this.tokenizer.getText()},l1.prototype.getTextGlyphs=function(n){this.processText(n);for(var e=[],t=0;t<this.tokenizer.tokens.length;t++){var r=this.tokenizer.tokens[t];if(!r.state.deleted){var s=r.activeState.value;e.push(Array.isArray(s)?s[0]:s)}}return e};function v0(n){n=n||{},n.tables=n.tables||{},n.empty||(_2(n.familyName,"When creating a new Font object, familyName is required."),_2(n.styleName,"When creating a new Font object, styleName is required."),_2(n.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),_2(n.ascender,"When creating a new Font object, ascender is required."),_2(n.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:n.familyName||" "},fontSubfamily:{en:n.styleName||" "},fullName:{en:n.fullName||n.familyName+" "+n.styleName},postScriptName:{en:n.postScriptName||(n.familyName+n.styleName).replace(/\s/g,"")},designer:{en:n.designer||" "},designerURL:{en:n.designerURL||" "},manufacturer:{en:n.manufacturer||" "},manufacturerURL:{en:n.manufacturerURL||" "},license:{en:n.license||" "},licenseURL:{en:n.licenseURL||" "},version:{en:n.version||"Version 0.1"},description:{en:n.description||" "},copyright:{en:n.copyright||" "},trademark:{en:n.trademark||" "}},this.unitsPerEm=n.unitsPerEm||1e3,this.ascender=n.ascender,this.descender=n.descender,this.createdTimestamp=n.createdTimestamp,this.tables=Object.assign(n.tables,{os2:Object.assign({usWeightClass:n.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:n.widthClass||this.usWidthClasses.MEDIUM,fsSelection:n.fsSelection||this.fsSelectionValues.REGULAR},n.tables.os2)})),this.supported=!0,this.glyphs=new g1.GlyphSet(this,n.glyphs||[]),this.encoding=new Pt(this),this.position=new I2(this),this.substitution=new J0(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new y6(this)}})}v0.prototype.hasChar=function(n){return this.encoding.charToGlyphIndex(n)!==null},v0.prototype.charToGlyphIndex=function(n){return this.encoding.charToGlyphIndex(n)},v0.prototype.charToGlyph=function(n){var e=this.charToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t},v0.prototype.updateFeatures=function(n){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(t){return n[t]})}:e})},v0.prototype.stringToGlyphs=function(n,e){var t=this,r=new l1,s=function(f){return t.charToGlyphIndex(f.char)};r.registerModifier("glyphIndex",null,s);var i=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;r.applyFeatures(this,i);for(var a=r.getTextGlyphs(n),o=a.length,l=new Array(o),c=this.glyphs.get(0),u=0;u<o;u+=1)l[u]=this.glyphs.get(a[u])||c;return l},v0.prototype.nameToGlyphIndex=function(n){return this.glyphNames.nameToGlyphIndex(n)},v0.prototype.nameToGlyph=function(n){var e=this.nameToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t},v0.prototype.glyphIndexToName=function(n){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(n):""},v0.prototype.getKerningValue=function(n,e){n=n.index||n,e=e.index||e;var t=this.position.defaultKerningTables;return t?this.position.getKerningValue(t,n,e):this.kerningPairs[n+","+e]||0},v0.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]},v0.prototype.forEachGlyph=function(n,e,t,r,s,i){e=e!==void 0?e:0,t=t!==void 0?t:0,r=r!==void 0?r:72,s=Object.assign({},this.defaultRenderOptions,s);var a=1/this.unitsPerEm*r,o=this.stringToGlyphs(n,s),l;if(s.kerning){var c=s.script||this.position.getDefaultScriptName();l=this.position.getKerningTables(c,s.language)}for(var u=0;u<o.length;u+=1){var f=o[u];if(i.call(this,f,e,t,r,s),f.advanceWidth&&(e+=f.advanceWidth*a),s.kerning&&u<o.length-1){var p=l?this.position.getKerningValue(l,f.index,o[u+1].index):this.getKerningValue(f,o[u+1]);e+=p*a}s.letterSpacing?e+=s.letterSpacing*r:s.tracking&&(e+=s.tracking/1e3*r)}return e},v0.prototype.getPath=function(n,e,t,r,s){var i=new C0;return this.forEachGlyph(n,e,t,r,s,function(a,o,l,c){var u=a.getPath(o,l,c,s,this);i.extend(u)}),i},v0.prototype.getPaths=function(n,e,t,r,s){var i=[];return this.forEachGlyph(n,e,t,r,s,function(a,o,l,c){var u=a.getPath(o,l,c,s,this);i.push(u)}),i},v0.prototype.getAdvanceWidth=function(n,e,t){return this.forEachGlyph(n,0,0,e,t,function(){})},v0.prototype.draw=function(n,e,t,r,s,i){this.getPath(e,t,r,s,i).draw(n)},v0.prototype.drawPoints=function(n,e,t,r,s,i){this.forEachGlyph(e,t,r,s,i,function(a,o,l,c){a.drawPoints(n,o,l,c)})},v0.prototype.drawMetrics=function(n,e,t,r,s,i){this.forEachGlyph(e,t,r,s,i,function(a,o,l,c){a.drawMetrics(n,o,l,c)})},v0.prototype.getEnglishName=function(n){var e=this.names[n];if(e)return e.en},v0.prototype.validate=function(){var n=this;function e(r,s){}function t(r){var s=n.getEnglishName(r);s&&s.trim().length>0}t("fontFamily"),t("weightName"),t("manufacturer"),t("copyright"),t("version"),this.unitsPerEm>0},v0.prototype.toTables=function(){return V7.fontToTable(this)},v0.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()},v0.prototype.toArrayBuffer=function(){for(var n=this.toTables(),e=n.encode(),t=new ArrayBuffer(e.length),r=new Uint8Array(t),s=0;s<e.length;s++)r[s]=e[s];return t},v0.prototype.download=function(n){var e=this.getEnglishName("fontFamily"),t=this.getEnglishName("fontSubfamily");n=n||e.replace(/\s/g,"")+"-"+t+".otf";var r=this.toArrayBuffer();if(X7())if(window.URL=window.URL||window.webkitURL,window.URL){var s=new DataView(r),i=new Blob([s],{type:"font/opentype"}),a=document.createElement("a");a.href=window.URL.createObjectURL(i),a.download=n;var o=document.createEvent("MouseEvents");o.initEvent("click",!0,!1),a.dispatchEvent(o)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var l={readFileSync:function(){throw new Error("fs not available in browser")},readFile:function(u,f,p){var d=typeof f=="function"?f:p;d&&d(new Error("fs not available"))},existsSync:function(){return!1},writeFileSync:function(){}},c=Y7(r);l.writeFileSync(n,c)}},v0.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512},v0.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9},v0.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function U6(n,e){var t=JSON.stringify(n),r=256;for(var s in e){var i=parseInt(s);if(!(!i||i<256)){if(JSON.stringify(e[s])===t)return i;r<=i&&(r=i+1)}}return e[r]=n,r}function rs(n,e,t){var r=U6(e.name,t);return[{name:"tag_"+n,type:"TAG",value:e.tag},{name:"minValue_"+n,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+n,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+n,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+n,type:"USHORT",value:0},{name:"nameID_"+n,type:"USHORT",value:r}]}function ss(n,e,t){var r={},s=new H.Parser(n,e);return r.tag=s.parseTag(),r.minValue=s.parseFixed(),r.defaultValue=s.parseFixed(),r.maxValue=s.parseFixed(),s.skip("uShort",1),r.name=t[s.parseUShort()]||{},r}function is(n,e,t,r){for(var s=U6(e.name,r),i=[{name:"nameID_"+n,type:"USHORT",value:s},{name:"flags_"+n,type:"USHORT",value:0}],a=0;a<t.length;++a){var o=t[a].tag;i.push({name:"axis_"+n+" "+o,type:"FIXED",value:e.coordinates[o]<<16})}return i}function as(n,e,t,r){var s={},i=new H.Parser(n,e);s.name=r[i.parseUShort()]||{},i.skip("uShort",1),s.coordinates={};for(var a=0;a<t.length;++a)s.coordinates[t[a].tag]=i.parseFixed();return s}function os(n,e){var t=new U.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:n.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:n.instances.length},{name:"instanceSize",type:"USHORT",value:4+n.axes.length*4}]);t.offsetToData=t.sizeOf();for(var r=0;r<n.axes.length;r++)t.fields=t.fields.concat(rs(r,n.axes[r],e));for(var s=0;s<n.instances.length;s++)t.fields=t.fields.concat(is(s,n.instances[s],n.axes,e));return t}function ls(n,e,t){var r=new H.Parser(n,e),s=r.parseULong();X.argument(s===65536,"Unsupported fvar table version.");var i=r.parseOffset16();r.skip("uShort",1);for(var a=r.parseUShort(),o=r.parseUShort(),l=r.parseUShort(),c=r.parseUShort(),u=[],f=0;f<a;f++)u.push(ss(n,e+i+f*o,t));for(var p=[],d=e+i+a*o,v=0;v<l;v++)p.push(as(n,d+v*c,u,t));return{axes:u,instances:p}}var cs={make:os,parse:ls},hs=function(){return{coverage:this.parsePointer(L.coverage),attachPoints:this.parseList(L.pointer(L.uShortList))}},us=function(){var n=this.parseUShort();if(X.argument(n===1||n===2||n===3,"Unsupported CaretValue table version."),n===1)return{coordinate:this.parseShort()};if(n===2)return{pointindex:this.parseShort()};if(n===3)return{coordinate:this.parseShort()}},fs=function(){return this.parseList(L.pointer(us))},ps=function(){return{coverage:this.parsePointer(L.coverage),ligGlyphs:this.parseList(L.pointer(fs))}},ds=function(){return this.parseUShort(),this.parseList(L.pointer(L.coverage))};function vs(n,e){e=e||0;var t=new L(n,e),r=t.parseVersion(1);X.argument(r===1||r===1.2||r===1.3,"Unsupported GDEF table version.");var s={version:r,classDef:t.parsePointer(L.classDef),attachList:t.parsePointer(hs),ligCaretList:t.parsePointer(ps),markAttachClassDef:t.parsePointer(L.classDef)};return r>=1.2&&(s.markGlyphSets=t.parsePointer(ds)),s}var ys={parse:vs},c1=new Array(10);c1[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(L.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(L.coverage),values:this.parseValueRecordList()};X.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")},c1[2]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();X.assert(t===1||t===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var r=this.parsePointer(L.coverage),s=this.parseUShort(),i=this.parseUShort();if(t===1)return{posFormat:t,coverage:r,valueFormat1:s,valueFormat2:i,pairSets:this.parseList(L.pointer(L.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(s),value2:this.parseValueRecord(i)}})))};if(t===2){var a=this.parsePointer(L.classDef),o=this.parsePointer(L.classDef),l=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:r,valueFormat1:s,valueFormat2:i,classDef1:a,classDef2:o,class1Count:l,class2Count:c,classRecords:this.parseList(l,L.list(c,function(){return{value1:this.parseValueRecord(s),value2:this.parseValueRecord(i)}}))}}},c1[3]=function(){return{error:"GPOS Lookup 3 not supported"}},c1[4]=function(){return{error:"GPOS Lookup 4 not supported"}},c1[5]=function(){return{error:"GPOS Lookup 5 not supported"}},c1[6]=function(){return{error:"GPOS Lookup 6 not supported"}},c1[7]=function(){return{error:"GPOS Lookup 7 not supported"}},c1[8]=function(){return{error:"GPOS Lookup 8 not supported"}},c1[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function gs(n,e){e=e||0;var t=new L(n,e),r=t.parseVersion(1);return X.argument(r===1||r===1.1,"Unsupported GPOS table version "+r),r===1?{version:r,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(c1)}:{version:r,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(c1),variations:t.parseFeatureVariationsList()}}var ms=new Array(10);function xs(n){return new U.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new U.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new U.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new U.LookupList(n.lookups,ms)}])}var bs={parse:gs,make:xs};function Ss(n){var e={};n.skip("uShort");var t=n.parseUShort();X.argument(t===0,"Unsupported kern sub-table version."),n.skip("uShort",2);var r=n.parseUShort();n.skip("uShort",3);for(var s=0;s<r;s+=1){var i=n.parseUShort(),a=n.parseUShort(),o=n.parseShort();e[i+","+a]=o}return e}function ws(n){var e={};n.skip("uShort");var t=n.parseULong();t>1&&console.warn("Only the first kern subtable is supported."),n.skip("uLong");var r=n.parseUShort(),s=r&255;if(n.skip("uShort"),s===0){var i=n.parseUShort();n.skip("uShort",3);for(var a=0;a<i;a+=1){var o=n.parseUShort(),l=n.parseUShort(),c=n.parseShort();e[o+","+l]=c}}return e}function Ts(n,e){var t=new H.Parser(n,e),r=t.parseUShort();if(r===0)return Ss(t);if(r===1)return ws(t);throw new Error("Unsupported kern table version ("+r+").")}var Es={parse:Ts};function Cs(n,e,t,r){for(var s=new H.Parser(n,e),i=r?s.parseUShort:s.parseULong,a=[],o=0;o<t+1;o+=1){var l=i.call(s);r&&(l*=2),a.push(l)}return a}var Ps={parse:Cs};function As(n,e){var t={readFileSync:function(){throw new Error("fs not available in browser")},readFile:function(r,s,i){var a=typeof s=="function"?s:i;a&&a(new Error("fs not available"))},existsSync:function(){return!1},writeFileSync:function(){}};t.readFile(n,function(r,s){if(r)return e(r.message);e(null,l6(s))})}function ks(n,e){var t=new XMLHttpRequest;t.open("get",n,!0),t.responseType="arraybuffer",t.onload=function(){return t.response?e(null,t.response):e("Font could not be loaded: "+t.statusText)},t.onerror=function(){e("Font could not be loaded")},t.send()}function G6(n,e){for(var t=[],r=12,s=0;s<e;s+=1){var i=H.getTag(n,r),a=H.getULong(n,r+4),o=H.getULong(n,r+8),l=H.getULong(n,r+12);t.push({tag:i,checksum:a,offset:o,length:l,compression:!1}),r+=16}return t}function Ls(n,e){for(var t=[],r=44,s=0;s<e;s+=1){var i=H.getTag(n,r),a=H.getULong(n,r+4),o=H.getULong(n,r+8),l=H.getULong(n,r+12),c=void 0;o<l?c="WOFF":c=!1,t.push({tag:i,offset:a,compression:c,compressedLength:o,length:l}),r+=20}return t}function E0(n,e){if(e.compression==="WOFF"){var t=new Uint8Array(n.buffer,e.offset+2,e.compressedLength-2),r=new Uint8Array(e.length);if(bn(t,r),r.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var s=new DataView(r.buffer,0);return{data:s,offset:0}}else return{data:n,offset:e.offset}}function q4(n,e){e=e??{};var t,r,s=new v0({empty:!0}),i=new DataView(n,0),a,o=[],l=H.getTag(i,0);if(l==="\0\0\0"||l==="true"||l==="typ1")s.outlinesFormat="truetype",a=H.getUShort(i,4),o=G6(i,a);else if(l==="OTTO")s.outlinesFormat="cff",a=H.getUShort(i,4),o=G6(i,a);else if(l==="wOFF"){var c=H.getTag(i,4);if(c==="\0\0\0")s.outlinesFormat="truetype";else if(c==="OTTO")s.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+l);a=H.getUShort(i,12),o=Ls(i,a)}else throw new Error("Unsupported OpenType signature "+l);for(var u,f,p,d,v,y,m,g,P,S,w,O,I=0;I<a;I+=1){var M=o[I],T=void 0;switch(M.tag){case"cmap":T=E0(i,M),s.tables.cmap=Ct.parse(T.data,T.offset),s.encoding=new At(s.tables.cmap);break;case"cvt ":T=E0(i,M),O=new H.Parser(T.data,T.offset),s.tables.cvt=O.parseShortList(M.length/2);break;case"fvar":f=M;break;case"fpgm":T=E0(i,M),O=new H.Parser(T.data,T.offset),s.tables.fpgm=O.parseByteList(M.length);break;case"head":T=E0(i,M),s.tables.head=zt.parse(T.data,T.offset),s.unitsPerEm=s.tables.head.unitsPerEm,t=s.tables.head.indexToLocFormat;break;case"hhea":T=E0(i,M),s.tables.hhea=Ht.parse(T.data,T.offset),s.ascender=s.tables.hhea.ascender,s.descender=s.tables.hhea.descender,s.numberOfHMetrics=s.tables.hhea.numberOfHMetrics;break;case"hmtx":m=M;break;case"ltag":T=E0(i,M),r=Wt.parse(T.data,T.offset);break;case"maxp":T=E0(i,M),s.tables.maxp=Xt.parse(T.data,T.offset),s.numGlyphs=s.tables.maxp.numGlyphs;break;case"name":S=M;break;case"OS/2":T=E0(i,M),s.tables.os2=N4.parse(T.data,T.offset);break;case"post":T=E0(i,M),s.tables.post=$t.parse(T.data,T.offset),s.glyphNames=new O4(s.tables.post);break;case"prep":T=E0(i,M),O=new H.Parser(T.data,T.offset),s.tables.prep=O.parseByteList(M.length);break;case"glyf":p=M;break;case"loca":P=M;break;case"CFF ":u=M;break;case"kern":g=M;break;case"GDEF":d=M;break;case"GPOS":v=M;break;case"GSUB":y=M;break;case"meta":w=M;break}}var C=E0(i,S);if(s.tables.name=Kt.parse(C.data,C.offset,r),s.names=s.tables.name,p&&P){var _=t===0,R=E0(i,P),W=Ps.parse(R.data,R.offset,s.numGlyphs,_),r0=E0(i,p);s.glyphs=p6.parse(r0.data,r0.offset,W,s,e)}else if(u){var Z=E0(i,u);Gt.parse(Z.data,Z.offset,s,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var n0=E0(i,m);if(Vt.parse(s,n0.data,n0.offset,s.numberOfHMetrics,s.numGlyphs,s.glyphs,e),zn(s,e),g){var l0=E0(i,g);s.kerningPairs=Es.parse(l0.data,l0.offset)}else s.kerningPairs={};if(d){var a0=E0(i,d);s.tables.gdef=ys.parse(a0.data,a0.offset)}if(v){var s0=E0(i,v);s.tables.gpos=bs.parse(s0.data,s0.offset),s.position.init()}if(y){var i0=E0(i,y);s.tables.gsub=e6.parse(i0.data,i0.offset)}if(f){var o0=E0(i,f);s.tables.fvar=cs.parse(o0.data,o0.offset,s.names)}if(w){var k=E0(i,w);s.tables.meta=t6.parse(k.data,k.offset),s.metas=s.tables.meta}return s}function Fs(n,e,t){t=t??{};var r=typeof window>"u",s=r&&!t.isUrl?As:ks;return new Promise(function(i,a){s(n,function(o,l){if(o){if(e)return e(o);a(o)}var c;try{c=q4(l,t)}catch(u){if(e)return e(u,null);a(u)}if(e)return e(null,c);i(c)})})}function Os(n,e){var t={readFileSync:function(){throw new Error("fs not available in browser")},readFile:function(s,i,a){var o=typeof i=="function"?i:a;o&&o(new Error("fs not available"))},existsSync:function(){return!1},writeFileSync:function(){}},r=t.readFileSync(n);return q4(l6(r),e)}var Ds=Object.freeze({__proto__:null,Font:v0,Glyph:Z0,Path:C0,BoundingBox:S1,_parse:H,parse:q4,load:Fs,loadSync:Os});const G2="DxfWorkerMsg";class Q0{constructor(e,t=!1){this.worker=e,t?e.onmessage=this._ProcessRequest.bind(this):e&&(e.addEventListener("message",this._ProcessResponse.bind(this),!1),e.addEventListener("error",this._OnError.bind(this),!1),this.reqSeq=1,this.requests=new Map,this.progressCbk=null)}async Load(e,t,r,s){return this.worker?this._SendRequest(Q0.WorkerMsg.LOAD,{url:e,fonts:t,options:this._CloneOptions(r)},s):this._Load(e,t,r,s)}async Destroy(e=!1){this.worker&&(e||await this._SendRequest(Q0.WorkerMsg.DESTROY),this.worker.terminate())}async _ProcessRequest(e){const t=e.data;if(t.signature!==G2){console.log("Message with bad signature",t);return}const r={seq:t.seq,type:t.type,signature:G2},s=[];try{r.data=await this._ProcessRequestMessage(t.type,t.data,s,t.seq)}catch(i){console.error(i),r.error=String(i)}this.worker.postMessage(r,s),t.type===Q0.WorkerMsg.DESTROY&&(this.worker.onmessage=null,this.worker.close(),this.worker=null)}async _ProcessRequestMessage(e,t,r,s){switch(e){case Q0.WorkerMsg.LOAD:{const{scene:i,dxf:a}=await this._Load(t.url,t.fonts,t.options,(o,l,c)=>this._SendProgress(s,o,l,c));return r.push(i.vertices),r.push(i.indices),r.push(i.transforms),{scene:i,dxf:a}}case Q0.WorkerMsg.DESTROY:return null;default:throw"Unknown message type: "+e}}async _ProcessResponse(e){const t=e.data;if(t.signature!==G2){console.log("Message with bad signature",t);return}const r=t.seq,s=this.requests.get(r);if(!s){console.error("Unmatched message sequence: ",r);return}const i=t.data;if(t.type===Q0.WorkerMsg.PROGRESS){s.progressCbk&&s.progressCbk(i.phase,i.size,i.totalSize);return}this.requests.delete(r),t.hasOwnProperty("error")?s.SetError(t.error):s.SetResponse(i)}async _OnError(e){console.error("DxfWorker worker error",e);const t=Array.from(this.requests.values);this.requests.clear(),t.forEach(r=>r.SetError(e))}async _SendRequest(e,t=null,r=null){const s=this.reqSeq++,i=new Q0.Request(s,r);return this.requests.set(s,i),this.worker.postMessage({seq:s,type:e,data:t,signature:G2}),await i.GetResponse()}_SendProgress(e,t,r,s){this.worker.postMessage({seq:e,type:Q0.WorkerMsg.PROGRESS,data:{phase:t,size:r,totalSize:s},signature:G2})}async _Load(e,t,r,s){let i;t?i=this._CreateFontFetchers(t,s):i=[];const a=await new T5(e,r.fileEncoding).Fetch(s);s&&s("prepare",0,null);const o=new k2(r);return await o.Build(a,i),{scene:o.scene,dxf:r.retainParsedDxf===!0?a:void 0}}_CreateFontFetchers(e,t){function r(i,a){return async function(){try{t&&t("font",0,null);const o=await fetch(i);if(!o.ok)throw console.warn(`[DxfWorker] Font load failed (${o.status}): ${i}`),new Error(`Failed to load font: ${i} (${o.status})`);const l=await o.arrayBuffer();return t&&t("prepare",0,null),Ds.parse(l)}catch(o){throw console.error(`[DxfWorker] Error loading font ${i}:`,o),o}}}const s=[];if(e&&e.length>0)for(let i=0;i<e.length;i++)s.push(r(e[i]));else console.warn("[DxfWorker] No fonts provided - text rendering may be limited");return s}_CloneOptions(e){if(Array.isArray(e))return e.map(t=>this._CloneOptions(t));if(typeof e=="object"&&e!==null){const t={};for(const r in e)t[r]=this._CloneOptions(e[r]);return t}else return e}}Q0.WorkerMsg={LOAD:"LOAD",PROGRESS:"PROGRESS",DESTROY:"DESTROY"},Q0.Request=class{constructor(n,e){this.seq=n,this.progressCbk=e,this.promise=new Promise((t,r)=>{this._Resolve=t,this._Reject=r})}async GetResponse(){return await this.promise}SetResponse(n){this._Resolve(n)}SetError(n){this._Reject(n)}};class z6{constructor(e,t,r,s){this.instanceType=e,this.geometryType=t??null,this.color=r,this.lineType=s??null}Compare(e){let t=t1(this.instanceType,e.instanceType);return t!==0||(t=t1(this.geometryType,e.geometryType),t!==0)||(t=t1(this.color,e.color),t!==0)?t:t1(this.lineType,e.lineType)}}function z2(n,e){e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=n,this.domElement=e,this.enabled=!0,this.target=new F.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.mouseZoomSpeedFactor=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:F.MOUSE.ROTATE,MIDDLE:F.MOUSE.DOLLY,RIGHT:F.MOUSE.PAN},this.touches={ONE:F.TOUCH.ROTATE,TWO:F.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Y6),this._domElementKeyEvents=E},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(r),t.update(),o=a.NONE},this.update=(function(){var E=new F.Vector3,Q=new F.Quaternion().setFromUnitVectors(n.up,new F.Vector3(0,1,0)),h0=Q.clone().invert(),A0=new F.Vector3,C1=new F.Quaternion,h2=2*Math.PI;return function(){var q6=t.object.position;E.copy(q6).sub(t.target),E.applyQuaternion(Q),c.setFromVector3(E),t.autoRotate&&o===a.NONE&&_(T()),t.enableDamping?(c.theta+=u.theta*t.dampingFactor,c.phi+=u.phi*t.dampingFactor):(c.theta+=u.theta,c.phi+=u.phi);var P1=t.minAzimuthAngle,A1=t.maxAzimuthAngle;return isFinite(P1)&&isFinite(A1)&&(P1<-Math.PI?P1+=h2:P1>Math.PI&&(P1-=h2),A1<-Math.PI?A1+=h2:A1>Math.PI&&(A1-=h2),P1<=A1?c.theta=Math.max(P1,Math.min(A1,c.theta)):c.theta=c.theta>(P1+A1)/2?Math.max(P1,c.theta):Math.min(A1,c.theta)),c.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=f,c.radius=Math.max(t.minDistance,Math.min(t.maxDistance,c.radius)),t.enableDamping===!0?t.target.addScaledVector(p,t.dampingFactor):t.target.add(p),E.setFromSpherical(c),E.applyQuaternion(h0),q6.copy(t.target).add(E),t.object.lookAt(t.target),t.enableDamping===!0?(u.theta*=1-t.dampingFactor,u.phi*=1-t.dampingFactor,p.multiplyScalar(1-t.dampingFactor)):(u.set(0,0,0),p.set(0,0,0)),f=1,d||A0.distanceToSquared(t.object.position)>l||8*(1-C1.dot(t.object.quaternion))>l?(t.dispatchEvent(r),A0.copy(t.object.position),C1.copy(t.object.quaternion),d=!1,!0):!1}})(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",Q6),t.domElement.removeEventListener("pointerdown",E1),t.domElement.removeEventListener("wheel",X6),t.domElement.removeEventListener("touchstart",Z6),t.domElement.removeEventListener("touchend",j6),t.domElement.removeEventListener("touchmove",J6),t.domElement.ownerDocument.removeEventListener("pointermove",H2),t.domElement.ownerDocument.removeEventListener("pointerup",t5),t._domElementKeyEvents!==null&&t._domElementKeyEvents.removeEventListener("keydown",Y6)};var t=this,r={type:"change"},s={type:"start"},i={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},o=a.NONE,l=1e-6,c=new F.Spherical,u=new F.Spherical,f=1,p=new F.Vector3,d=!1,v=new F.Vector2,y=new F.Vector2,m=new F.Vector2,g=new F.Vector2,P=new F.Vector2,S=new F.Vector2,w=new F.Vector2,O=new F.Vector2,I=new F.Vector2,M=new F.Vector2;function T(){return 2*Math.PI/60/60*t.autoRotateSpeed}function C(E){return Math.pow(.95,t.zoomSpeed*(E?t.mouseZoomSpeedFactor:1))}function _(E){u.theta-=E}function R(E){u.phi-=E}var W=(function(){var E=new F.Vector3;return function(h0,A0){E.setFromMatrixColumn(A0,0),E.multiplyScalar(-h0),p.add(E)}})(),r0=(function(){var E=new F.Vector3;return function(h0,A0){t.screenSpacePanning===!0?E.setFromMatrixColumn(A0,1):(E.setFromMatrixColumn(A0,0),E.crossVectors(t.object.up,E)),E.multiplyScalar(h0),p.add(E)}})(),Z=(function(){var E=new F.Vector3;return function(h0,A0){var C1=t.domElement;if(t.object.isPerspectiveCamera){var h2=t.object.position;E.copy(h2).sub(t.target);var ke=E.length();ke*=Math.tan(t.object.fov/2*Math.PI/180),W(2*h0*ke/C1.clientHeight,t.object.matrix),r0(2*A0*ke/C1.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(W(h0*(t.object.right-t.object.left)/t.object.zoom/C1.clientWidth/window.devicePixelRatio,t.object.matrix),r0(A0*(t.object.top-t.object.bottom)/t.object.zoom/C1.clientHeight/window.devicePixelRatio,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}})();function n0(E,Q){const h0=(Q.x-t.domElement.width/2)*(E-1)/E,A0=(Q.y-t.domElement.height/2)*(E-1)/E;Z(-h0,-A0)}function l0(E,Q){if(t.object.isPerspectiveCamera)f/=E;else if(t.object.isOrthographicCamera){const h0=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*E));n0(h0/t.object.zoom,Q),t.object.zoom=h0,t.object.updateProjectionMatrix(),d=!0}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1}function a0(E,Q){if(t.object.isPerspectiveCamera)f*=E;else if(t.object.isOrthographicCamera){const h0=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/E));n0(h0/t.object.zoom,Q),t.object.zoom=h0,t.object.updateProjectionMatrix(),d=!0}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1}function s0(E){v.set(E.clientX,E.clientY)}function i0(E){const Q=t.domElement.getBoundingClientRect();w.set(E.clientX-Q.left,E.clientY-Q.top),O.set(E.clientX,E.clientY)}function o0(E){g.set(E.clientX,E.clientY)}function k(E){y.set(E.clientX,E.clientY),m.subVectors(y,v).multiplyScalar(t.rotateSpeed);var Q=t.domElement;_(2*Math.PI*m.x/Q.clientHeight),R(2*Math.PI*m.y/Q.clientHeight),v.copy(y),t.update()}function B(E){I.set(E.clientX,E.clientY),M.subVectors(I,O),M.y>0?l0(C(!0),w):M.y<0&&a0(C(!0),w),O.copy(I),t.update()}function t0(E){P.set(E.clientX,E.clientY),S.subVectors(P,g).multiplyScalar(t.panSpeed*window.devicePixelRatio),Z(S.x,S.y),g.copy(P),t.update()}function f0(E){const Q=t.domElement.getBoundingClientRect(),h0=new F.Vector2((E.clientX-Q.left)*window.devicePixelRatio,(E.clientY-Q.top)*window.devicePixelRatio);E.deltaY<0?a0(C(),h0):E.deltaY>0&&l0(C(),h0),t.update()}function L0(E){var Q=!1;switch(E.keyCode){case t.keys.UP:Z(0,t.keyPanSpeed),Q=!0;break;case t.keys.BOTTOM:Z(0,-t.keyPanSpeed),Q=!0;break;case t.keys.LEFT:Z(t.keyPanSpeed,0),Q=!0;break;case t.keys.RIGHT:Z(-t.keyPanSpeed,0),Q=!0;break}Q&&(E.preventDefault(),t.update())}function G0(E){if(E.touches.length==1)v.set(E.touches[0].pageX,E.touches[0].pageY);else{var Q=.5*(E.touches[0].pageX+E.touches[1].pageX),h0=.5*(E.touches[0].pageY+E.touches[1].pageY);v.set(Q,h0)}}function p0(E){if(E.touches.length==1)g.set(E.touches[0].pageX,E.touches[0].pageY);else{var Q=.5*(E.touches[0].pageX+E.touches[1].pageX),h0=.5*(E.touches[0].pageY+E.touches[1].pageY);g.set(Q,h0)}}function O0(E){const Q=t.domElement.getBoundingClientRect();w.set((E.touches[0].clientX+E.touches[1].clientX)/2-Q.left,(E.touches[0].clientY+E.touches[1].clientY)/2-Q.top).multiplyScalar(window.devicePixelRatio);var h0=E.touches[0].pageX-E.touches[1].pageX,A0=E.touches[0].pageY-E.touches[1].pageY,C1=Math.sqrt(h0*h0+A0*A0);O.set(0,C1)}function K(E){t.enableZoom&&O0(E),t.enablePan&&p0(E)}function j(E){t.enableZoom&&O0(E),t.enableRotate&&G0(E)}function c0(E){if(E.touches.length==1)y.set(E.touches[0].pageX,E.touches[0].pageY);else{var Q=.5*(E.touches[0].pageX+E.touches[1].pageX),h0=.5*(E.touches[0].pageY+E.touches[1].pageY);y.set(Q,h0)}m.subVectors(y,v).multiplyScalar(t.rotateSpeed);var A0=t.domElement;_(2*Math.PI*m.x/A0.clientHeight),R(2*Math.PI*m.y/A0.clientHeight),v.copy(y)}function d0(E){if(E.touches.length==1)P.set(E.touches[0].pageX,E.touches[0].pageY);else{var Q=.5*(E.touches[0].pageX+E.touches[1].pageX),h0=.5*(E.touches[0].pageY+E.touches[1].pageY);P.set(Q,h0)}S.subVectors(P,g).multiplyScalar(t.panSpeed*window.devicePixelRatio),Z(S.x,S.y),g.copy(P)}function P0(E){var Q=E.touches[0].pageX-E.touches[1].pageX,h0=E.touches[0].pageY-E.touches[1].pageY,A0=Math.sqrt(Q*Q+h0*h0);I.set(0,A0),M.set(0,I.y/O.y),l0(M.y,w),O.copy(I)}function e1(E){t.enableZoom&&P0(E),t.enablePan&&d0(E)}function Ae(E){t.enableZoom&&P0(E),t.enableRotate&&c0(E)}function E1(E){if(t.enabled!==!1)switch(E.pointerType){case"mouse":case"pen":Bs(E);break}}function H2(E){if(t.enabled!==!1)switch(E.pointerType){case"mouse":case"pen":Us(E);break}}function t5(E){switch(E.pointerType){case"mouse":case"pen":Gs();break}}function Bs(E){E.preventDefault(),t.domElement.focus?t.domElement.focus():window.focus();var Q;switch(E.button){case 0:Q=t.mouseButtons.LEFT;break;case 1:Q=t.mouseButtons.MIDDLE;break;case 2:Q=t.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case F.MOUSE.DOLLY:if(t.enableZoom===!1)return;i0(E),o=a.DOLLY;break;case F.MOUSE.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(t.enablePan===!1)return;o0(E),o=a.PAN}else{if(t.enableRotate===!1)return;s0(E),o=a.ROTATE}break;case F.MOUSE.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(t.enableRotate===!1)return;s0(E),o=a.ROTATE}else{if(t.enablePan===!1)return;o0(E),o=a.PAN}break;default:o=a.NONE}o!==a.NONE&&(t.domElement.ownerDocument.addEventListener("pointermove",H2),t.domElement.ownerDocument.addEventListener("pointerup",t5),t.dispatchEvent(s))}function Us(E){if(t.enabled!==!1)switch(E.preventDefault(),o){case a.ROTATE:if(t.enableRotate===!1)return;k(E);break;case a.DOLLY:if(t.enableZoom===!1)return;B(E);break;case a.PAN:if(t.enablePan===!1)return;t0(E);break}}function Gs(E){t.domElement.ownerDocument.removeEventListener("pointermove",H2),t.domElement.ownerDocument.removeEventListener("pointerup",t5),t.enabled!==!1&&(t.dispatchEvent(i),o=a.NONE)}function X6(E){t.enabled===!1||t.enableZoom===!1||o!==a.NONE&&o!==a.ROTATE||(E.preventDefault(),E.stopPropagation(),t.dispatchEvent(s),f0(E),t.dispatchEvent(i))}function Y6(E){t.enabled===!1||t.enablePan===!1||L0(E)}function Z6(E){if(t.enabled!==!1){switch(E.preventDefault(),E.touches.length){case 1:switch(t.touches.ONE){case F.TOUCH.ROTATE:if(t.enableRotate===!1)return;G0(E),o=a.TOUCH_ROTATE;break;case F.TOUCH.PAN:if(t.enablePan===!1)return;p0(E),o=a.TOUCH_PAN;break;default:o=a.NONE}break;case 2:switch(t.touches.TWO){case F.TOUCH.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;K(E),o=a.TOUCH_DOLLY_PAN;break;case F.TOUCH.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;j(E),o=a.TOUCH_DOLLY_ROTATE;break;default:o=a.NONE}break;default:o=a.NONE}o!==a.NONE&&t.dispatchEvent(s)}}function J6(E){if(t.enabled!==!1)switch(E.preventDefault(),E.stopPropagation(),o){case a.TOUCH_ROTATE:if(t.enableRotate===!1)return;c0(E),t.update();break;case a.TOUCH_PAN:if(t.enablePan===!1)return;d0(E),t.update();break;case a.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;e1(E),t.update();break;case a.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;Ae(E),t.update();break;default:o=a.NONE}}function j6(E){t.enabled!==!1&&(t.dispatchEvent(i),o=a.NONE)}function Q6(E){t.enabled!==!1&&E.preventDefault()}t.domElement.addEventListener("contextmenu",Q6),t.domElement.addEventListener("pointerdown",E1),t.domElement.addEventListener("wheel",X6),t.domElement.addEventListener("touchstart",Z6),t.domElement.addEventListener("touchend",j6),t.domElement.addEventListener("touchmove",J6),this.update()}z2.prototype=Object.create(F.EventDispatcher.prototype),z2.prototype.constructor=z2;function K4(n,e){z2.call(this,n,e),this.screenSpacePanning=!1,this.mouseButtons.LEFT=F.MOUSE.PAN,this.mouseButtons.RIGHT=F.MOUSE.ROTATE,this.touches.ONE=F.TOUCH.PAN,this.touches.TWO=F.TOUCH.DOLLY_ROTATE}K4.prototype=Object.create(F.EventDispatcher.prototype),K4.prototype.constructor=K4;class Ms{transformColor(e,t=0){throw new Error("RendererColorStrategy.transformColor() must be implemented by subclass")}getBackgroundColor(){throw new Error("RendererColorStrategy.getBackgroundColor() must be implemented by subclass")}getBackgroundAlpha(){return 1}getName(){return this.constructor.name}}class Is extends Ms{transformColor(e,t=0){const r=((e&16711680)>>>16)/255,s=((e&65280)>>>8)/255,i=(e&255)/255,a=r*.2126+s*.7152+i*.0722,o=Math.floor(a*180);return o<<16|o<<8|o}getBackgroundColor(){return 16777215}getBackgroundAlpha(){return 1}getName(){return"MonochromeColorStrategy"}}const Pe=Object.freeze({INFO:"info",WARN:"warn",ERROR:"error"}),$4="__dxf_";class c2{constructor(e,t=null){this.domContainer=e,this.options=Object.create(c2.DefaultOptions),t&&Object.assign(this.options,t),t=this.options,this.clearColor=this.options.clearColor.getHex(),this.scene=new F.Scene,this.colorStrategy=new Is;try{this.renderer=new F.WebGLRenderer({alpha:t.canvasAlpha,premultipliedAlpha:t.canvasPremultipliedAlpha,antialias:t.antialias,depth:!1,preserveDrawingBuffer:t.preserveDrawingBuffer})}catch(i){console.log("Failed to create renderer: "+i),this.renderer=null;return}const r=this.renderer;r.sortObjects=!0,r.setPixelRatio(window.devicePixelRatio);const s=this.camera=new F.OrthographicCamera(-1,1,1,-1,.1,2);s.position.z=1,s.position.x=0,s.position.y=0,this.simpleColorMaterial=[],this.simplePointMaterial=[];for(let i=0;i<U0.MAX;i++)this.simpleColorMaterial[i]=this._CreateSimpleColorMaterial(i),this.simplePointMaterial[i]=this._CreateSimplePointMaterial(i);r.setClearColor(t.clearColor,t.clearAlpha),t.autoResize?(this.canvasWidth=e.clientWidth,this.canvasHeight=e.clientHeight,e.style.position="relative"):(this.canvasWidth=t.canvasWidth,this.canvasHeight=t.canvasHeight,this.resizeObserver=null),r.setSize(this.canvasWidth,this.canvasHeight),this.canvas=r.domElement,e.style.display="block",t.autoResize&&(this.canvas.style.position="absolute",this.resizeObserver=new ResizeObserver(i=>this._OnResize(i[0])),this.resizeObserver.observe(e)),e.appendChild(this.canvas),this.canvas.addEventListener("pointerdown",this._OnPointerEvent.bind(this)),this.canvas.addEventListener("pointerup",this._OnPointerEvent.bind(this)),this.Render(),this.materials=new w2((i,a)=>i.key.Compare(a.key)),this.layers=new Map,this.defaultLayer=null,this.blocks=new Map,this.worker=null,this.controls=null}HasRenderer(){return!!this.renderer}GetRenderer(){return this.renderer}GetCanvas(){return this.canvas}GetDxf(){return this.parsedDxf}SetSize(e,t){this._EnsureRenderer();const r=e/this.canvasWidth,s=t/this.canvasHeight,i=this.camera,a=(i.left+i.right)/2,o=(i.bottom+i.top)/2,l=i.right-i.left,c=i.top-i.bottom;i.left=a-r*l/2,i.right=a+r*l/2,i.bottom=o-s*c/2,i.top=o+s*c/2,i.updateProjectionMatrix(),this.canvasWidth=e,this.canvasHeight=t,this.renderer.setSize(e,t),this.controls&&this.controls.update(),this._Emit("resized",{width:e,height:t}),this._Emit("viewChanged"),this.Render()}async Load({url:e,fonts:t=null,progressCbk:r=null,workerFactory:s=null}){if(e==null)throw new Error("`url` parameter is not specified");this._EnsureRenderer(),this.Clear(),this.worker=new Q0(s?s():null);const{scene:i,dxf:a}=await this.worker.Load(e,t,this.options,r);await this.worker.Destroy(),this.worker=null,this.parsedDxf=a,this.origin=i.origin,this.bounds=i.bounds,this.hasMissingChars=i.hasMissingChars;for(const o of i.layers)this.layers.set(o.name,new W6(o.name,o.displayName,o.color));this.defaultLayer=this.layers.get("0")??new W6("0","0",0);for(const o of i.batches)if(o.key.blockName!==null&&o.key.geometryType!==q.GeometryType.BLOCK_INSTANCE&&o.key.geometryType!==q.GeometryType.POINT_INSTANCE){let l=this.blocks.get(o.key.blockName);l||(l=new _s,this.blocks.set(o.key.blockName,l)),l.PushBatch(new V6(this,i,o))}console.log(`DXF scene:
                     ${i.batches.length} batches,
                     ${this.layers.size} layers,
                     ${this.blocks.size} blocks,
                     vertices ${i.vertices.byteLength} B,
                     indices ${i.indices.byteLength} B
                     transforms ${i.transforms.byteLength} B`);for(const o of i.batches)this._LoadBatch(i,o);this._Emit("loaded"),i.bounds?this.FitView(i.bounds.minX-i.origin.x,i.bounds.maxX-i.origin.x,i.bounds.minY-i.origin.y,i.bounds.maxY-i.origin.y):this._Message("Empty document",Pe.WARN),this.hasMissingChars&&this._Message("Some characters cannot be properly displayed due to missing fonts",Pe.WARN),this._CreateControls(),this.Render()}Render(){this._EnsureRenderer(),this.renderer.render(this.scene,this.camera)}GetLayers(e=!1){const t=[];for(const r of this.layers.values())e&&r.objects.length==0||t.push({name:r.name,displayName:r.displayName,color:this._TransformColor(r.color)});return t}ShowLayer(e,t){this._EnsureRenderer();const r=this.layers.get(e);if(r){for(const s of r.objects)s.visible=t;this.Render()}}Clear(){this._EnsureRenderer(),this.worker&&(this.worker.Destroy(!0),this.worker=null),this.controls&&(this.controls.dispose(),this.controls=null),this.scene.clear();for(const e of this.layers.values())e.Dispose();this.layers.clear(),this.blocks.clear(),this.materials.each(e=>e.material.dispose()),this.materials.clear(),this.SetView({x:0,y:0},2),this._Emit("cleared"),this.Render()}Destroy(){if(this.HasRenderer()){this.resizeObserver&&this.resizeObserver.disconnect(),this.Clear(),this._Emit("destroyed");for(const e of this.simplePointMaterial)e.dispose();for(const e of this.simpleColorMaterial)e.dispose();this.simplePointMaterial=null,this.simpleColorMaterial=null,this.renderer.dispose(),this.renderer=null}}SetView(e,t){const r=this.canvasWidth/this.canvasHeight,s=t/r,i=this.camera;i.left=-t/2,i.right=t/2,i.top=s/2,i.bottom=-s/2,i.zoom=1,i.position.set(e.x,e.y,1),i.rotation.set(0,0,0),i.updateMatrix(),i.updateProjectionMatrix(),this.controls&&(this.controls.target.set(i.position.x,i.position.y,0),this.controls.update()),this._Emit("viewChanged")}FitView(e,t,r,s,i=.1){const a=this.canvasWidth/this.canvasHeight;let o=t-e;const l=s-r,c={x:e+o/2,y:r+l/2};l*a>o&&(o=l*a),o<=Number.MIN_VALUE*2&&(o=1),this.SetView(c,o*(1+i))}GetScene(){return this.scene}GetCamera(){return this.camera}GetOrigin(){return this.origin}GetBounds(){return this.bounds}Subscribe(e,t){this._EnsureRenderer(),this.canvas.addEventListener($4+e,t)}Unsubscribe(e,t){this._EnsureRenderer(),this.canvas.removeEventListener($4+e,t)}_EnsureRenderer(){if(!this.HasRenderer())throw new Error("WebGL renderer not available. Probable WebGL context loss, try refreshing the page.")}_CreateControls(){this.controls&&this.controls.dispose();const e=this.controls=new z2(this.camera,this.canvas);e.enableRotate=!1,e.mouseButtons={LEFT:F.MOUSE.PAN,MIDDLE:F.MOUSE.DOLLY},e.touches={ONE:F.TOUCH.PAN,TWO:F.TOUCH.DOLLY_PAN},e.zoomSpeed=3,e.mouseZoomSpeedFactor=.05,e.target=new F.Vector3(this.camera.position.x,this.camera.position.y,0),e.addEventListener("change",()=>{this.Render(),this._Emit("viewChanged")}),e.update()}_Emit(e,t=null){this.canvas.dispatchEvent(new CustomEvent($4+e,{detail:t}))}_Message(e,t=Pe.INFO){this._Emit("message",{message:e,level:t})}_OnPointerEvent(e){const t=e.target.getBoundingClientRect(),r={x:e.clientX-t.left,y:e.clientY-t.top};this._Emit(e.type,{domEvent:e,canvasCoord:r,position:this._CanvasToSceneCoord(r.x,r.y)})}_CanvasToSceneCoord(e,t){const r=new F.Vector3(e*2/this.canvasWidth-1,-t*2/this.canvasHeight+1,1).unproject(this.camera);return{x:r.x,y:r.y}}_OnResize(e){this.SetSize(Math.floor(e.contentRect.width),Math.floor(e.contentRect.height))}_LoadBatch(e,t){if(t.key.blockName!==null&&t.key.geometryType!==q.GeometryType.BLOCK_INSTANCE&&t.key.geometryType!==q.GeometryType.POINT_INSTANCE)return;const r=new V6(this,e,t).CreateObjects();for(const s of r){if(s.userData.dxfHandle=t.dxfHandle,s.userData.dxfType=t.dxfType,s.userData.originalMaterial=s.material,s.userData.originalScale=s.scale.clone(),t.dxfHandle&&s.geometry.getAttribute("position").itemSize===2){const a=s.geometry,o=a.getAttribute("position"),l=o.count,c=new Float32Array(l*3);for(let f=0;f<l;f++){const p=o.getX(f),d=o.getY(f);isNaN(p)||isNaN(d)?(c[f*3]=0,c[f*3+1]=0):(c[f*3]=p,c[f*3+1]=d),c[f*3+2]=0}const u=new F.BufferGeometry;u.setAttribute("position",new F.BufferAttribute(c,3)),a.index&&u.setIndex(a.index),H6(u),s.userData.raycastGeometry=u,s.raycast=function(f,p){const d=this.geometry;this.geometry=this.userData.raycastGeometry,this.isLineSegments?F.LineSegments.prototype.raycast.call(this,f,p):this.isMesh?F.Mesh.prototype.raycast.call(this,f,p):this.isPoints&&F.Points.prototype.raycast.call(this,f,p),this.geometry=d}}this.scene.add(s),(s._dxfViewerLayer??this.defaultLayer).PushObject(s)}}_GetSimpleColorMaterial(e,t=U0.NONE){const r=new z6(t,null,e,0);let s=this.materials.find({key:r});return s!==null||(s={key:r,material:this._CreateSimpleColorMaterialInstance(e,t)},this.materials.insert(s)),s.material}_CreateSimpleColorMaterial(e=U0.NONE){const t=this._GenerateShaders(e,!1);return new F.RawShaderMaterial({uniforms:{color:{value:new F.Color(16711935)}},vertexShader:t.vertex,fragmentShader:t.fragment,depthTest:!1,depthWrite:!1,glslVersion:F.GLSL3,side:F.DoubleSide})}_CreateSimpleColorMaterialInstance(e,t=U0.NONE){const s=this.simpleColorMaterial[t].clone();return s.uniforms.color={value:new F.Color(e)},s}_GetSimplePointMaterial(e,t=U0.NONE){const r=new z6(t,q.GeometryType.POINTS,e,0);let s=this.materials.find({key:r});return s!==null||(s={key:r,material:this._CreateSimplePointMaterialInstance(e,this.options.pointSize,t)},this.materials.insert(s)),s.material}_CreateSimplePointMaterial(e=U0.NONE){const t=this._GenerateShaders(e,!0);return new F.RawShaderMaterial({uniforms:{color:{value:new F.Color(16711935)},pointSize:{value:2}},vertexShader:t.vertex,fragmentShader:t.fragment,depthTest:!1,depthWrite:!1,glslVersion:F.GLSL3})}_CreateSimplePointMaterialInstance(e,t=2,r=U0.NONE){const i=this.simplePointMaterial[r].clone();return i.uniforms.color={value:new F.Color(e)},i.uniforms.size={value:t},i}_GenerateShaders(e,t){const r=e===U0.FULL?`
            /* First row. */
            in vec3 instanceTransform0;
            /* Second row. */
            in vec3 instanceTransform1;
            `:"",s=e===U0.FULL?`
            pos.xy = mat2(instanceTransform0[0], instanceTransform1[0],
                          instanceTransform0[1], instanceTransform1[1]) * pos.xy +
                     vec2(instanceTransform0[2], instanceTransform1[2]);
            `:"",i=e===U0.POINT?`
            in vec2 instanceTransform;
            `:"",a=e===U0.POINT?`
            pos.xy += instanceTransform;
            `:"";return{vertex:`

            precision highp float;
            precision highp int;
            in vec2 position;
            ${r}
            ${i}
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            ${t?"uniform float pointSize;":""}

            void main() {
                vec4 pos = vec4(position, 0.0, 1.0);
                ${s}
                ${a}
                gl_Position = projectionMatrix * modelViewMatrix * pos;
                ${t?"gl_PointSize = pointSize;":""}
            }
            `,fragment:`

            precision highp float;
            precision highp int;
            uniform vec3 color;
            out vec4 fragColor;

            void main() {
                fragColor = vec4(color, 1.0);
            }
            `}}_TransformColor(e){const t=Rs(this.clearColor);return this.colorStrategy.transformColor(e,t)}}c2.MessageLevel=Pe,c2.DefaultOptions={canvasWidth:400,canvasHeight:300,autoResize:!1,clearColor:new F.Color("#000"),clearAlpha:1,canvasAlpha:!1,canvasPremultipliedAlpha:!0,antialias:!0,colorCorrection:!1,blackWhiteInversion:!0,pointSize:2,sceneOptions:k2.DefaultOptions,retainParsedDxf:!1,preserveDrawingBuffer:!1,fileEncoding:"utf-8"},c2.SetupWorker=function(){new Q0(self,!0)};const U0=Object.freeze({NONE:0,FULL:1,POINT:2,MAX:3});function H6(n){const e=n.getAttribute("position");if(!e||e.count===0)return;const t=e.array,r=e.itemSize;let s=!1,i=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,u=-1/0;for(let p=0;p<t.length;p+=r){let d=t[p];isFinite(d)||(d=0,t[p]=0,s=!0);let v=r>1?t[p+1]:0;isFinite(v)||(v=0,t[p+1]=0,s=!0);let y=r>2?t[p+2]:0;isFinite(y)||(y=0,t[p+2]=0,s=!0),d<i&&(i=d),d>l&&(l=d),v<a&&(a=v),v>c&&(c=v),y<o&&(o=y),y>u&&(u=y)}s&&(e.needsUpdate=!0),i===1/0&&(i=a=o=0,l=c=u=0),n.boundingBox||(n.boundingBox=new F.Box3),n.boundingBox.min.set(i,a,o),n.boundingBox.max.set(l,c,u),n.boundingSphere||(n.boundingSphere=new F.Sphere),n.boundingBox.getCenter(n.boundingSphere.center);const f=new F.Vector3;n.boundingBox.getSize(f),n.boundingSphere.radius=f.length()*.5}class V6{constructor(e,t,r){if(this.viewer=e,this.key=r.key,r.hasOwnProperty("verticesOffset")){const s=new Float32Array(t.vertices,r.verticesOffset*Float32Array.BYTES_PER_ELEMENT,r.verticesSize);(this.key.geometryType!==q.GeometryType.POINT_INSTANCE||t.pointShapeHasDot)&&(this.vertices=new F.BufferAttribute(s,2)),this.key.geometryType===q.GeometryType.POINT_INSTANCE&&(this.transforms=new F.InstancedBufferAttribute(s,2))}if(r.hasOwnProperty("chunks")){this.chunks=[];for(const s of r.chunks){const i=new Float32Array(t.vertices,s.verticesOffset*Float32Array.BYTES_PER_ELEMENT,s.verticesSize),a=new Uint16Array(t.indices,s.indicesOffset*Uint16Array.BYTES_PER_ELEMENT,s.indicesSize);this.chunks.push({vertices:new F.BufferAttribute(i,2),indices:new F.BufferAttribute(a,1)})}}if(r.hasOwnProperty("transformsOffset")){const s=new Float32Array(t.transforms,r.transformsOffset*Float32Array.BYTES_PER_ELEMENT,r.transformsSize),i=new F.InstancedInterleavedBuffer(s,6);this.transforms0=new F.InterleavedBufferAttribute(i,3,0),this.transforms1=new F.InterleavedBufferAttribute(i,3,3)}this.layer=this.key.layerName!==null?this.viewer.layers.get(this.key.layerName):null}GetInstanceType(){switch(this.key.geometryType){case q.GeometryType.BLOCK_INSTANCE:return U0.FULL;case q.GeometryType.POINT_INSTANCE:return U0.POINT;default:return U0.NONE}}*CreateObjects(e=null){if(this.key.geometryType===q.GeometryType.BLOCK_INSTANCE||this.key.geometryType===q.GeometryType.POINT_INSTANCE){if(e!==null)throw new Error("Unexpected instance batch specified for instance batch");yield*this._CreateBlockInstanceObjects();return}yield*this._CreateObjects(e)}*_CreateObjects(e){const t=e?e._GetInstanceColor(this):this.key.color,r=(e==null?void 0:e.layer)??this.layer,i=(this.key.geometryType===q.GeometryType.POINTS||this.key.geometryType===q.GeometryType.POINT_INSTANCE?this.viewer._GetSimplePointMaterial:this.viewer._GetSimpleColorMaterial).call(this.viewer,this.viewer._TransformColor(t),(e==null?void 0:e.GetInstanceType())??U0.NONE);let a;switch(this.key.geometryType){case q.GeometryType.POINTS:case q.GeometryType.POINT_INSTANCE:a=F.Points;break;case q.GeometryType.LINES:case q.GeometryType.INDEXED_LINES:a=F.LineSegments;break;case q.GeometryType.TRIANGLES:case q.GeometryType.INDEXED_TRIANGLES:a=F.Mesh;break;default:throw new Error("Unexpected geometry type:"+this.key.geometryType)}function o(l,c){const u=e?new F.InstancedBufferGeometry:new F.BufferGeometry;u.setAttribute("position",l),e==null||e._SetInstanceTransformAttribute(u),c&&u.setIndex(c),H6(u);const f=new a(u,i);return f.frustumCulled=!1,f.matrixAutoUpdate=!1,f._dxfViewerLayer=r,f}if(this.chunks)for(const l of this.chunks)yield o(l.vertices,l.indices);else yield o(this.vertices)}_SetInstanceTransformAttribute(e){if(!e.isInstancedBufferGeometry)throw new Error("InstancedBufferGeometry expected");this.key.geometryType===q.GeometryType.POINT_INSTANCE?e.setAttribute("instanceTransform",this.transforms):(e.setAttribute("instanceTransform0",this.transforms0),e.setAttribute("instanceTransform1",this.transforms1))}*_CreateBlockInstanceObjects(){const e=this.viewer.blocks.get(this.key.blockName);if(e){for(const t of e.batches)yield*t.CreateObjects(this);this.vertices&&(yield*this._CreateObjects())}}_GetInstanceColor(e){const t=e.key.color;return t===Y0.BY_BLOCK?this.key.color:t===Y0.BY_LAYER?e.layer?e.layer.color:this.layer?this.layer.color:0:t}}class W6{constructor(e,t,r){this.name=e,this.displayName=t,this.color=r,this.objects=[]}PushObject(e){this.objects.push(e)}Dispose(){for(const e of this.objects)e.geometry.dispose();this.objects=null}}class _s{constructor(){this.batches=[]}PushBatch(e){this.batches.push(e)}}function e5(n){return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Rs(n){const e=e5(((n&16711680)>>>16)/255),t=e5(((n&65280)>>>8)/255),r=e5((n&255)/255);return e*.2126+t*.7152+r*.0722}const Ns=Object.freeze(Object.defineProperty({__proto__:null,DxfFetcher:T5,DxfViewer:c2},Symbol.toStringTag,{value:"Module"}));D.DxfViewer=S3,D.EntityInteraction=l5,D.PolygonSelectionTool=c5,D.getNDC=W2,D.getSafeObjectBounds=Le,D.getSafeObjectsBounds=i5,D.unprojectToPlane=a5,Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})}));
//# sourceMappingURL=react-dxf-viewer.umd.js.map
