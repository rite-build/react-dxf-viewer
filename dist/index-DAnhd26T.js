var o3 = Object.defineProperty;
var l3 = (r, e, t) => e in r ? o3(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var K2 = (r, e, t) => l3(r, typeof e != "symbol" ? e + "" : e, t);
import * as I from "three";
import { Vector2 as D, Matrix3 as A0, Box2 as h3 } from "three";
function u3(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function B1(r) {
  this._pointer = 0, this._data = r, this._eof = !1;
}
B1.prototype.next = function() {
  var r;
  if (!this.hasNext())
    throw this._eof ? new Error("Cannot call 'next' after EOF group has been read") : new Error("Unexpected end of input: EOF group not read before end of file. Ended on code " + this._data[this._pointer]);
  if (r = {
    code: parseInt(this._data[this._pointer])
  }, isNaN(r.code))
    throw new Error("Cannot parse group code: " + this._data[this._pointer]);
  return this._pointer++, r.value = B5(r.code, this._data[this._pointer]), this._pointer++, r.code === 0 && r.value === "EOF" && (this._eof = !0), this.lastReadGroup = r, r;
};
B1.prototype.peek = function() {
  if (!this.hasNext())
    throw this._eof ? new Error("Cannot call 'next' after EOF group has been read") : new Error("Unexpected end of input: EOF group not read before end of file. Ended on code " + this._data[this._pointer]);
  var r = {
    code: parseInt(this._data[this._pointer])
  };
  if (isNaN(r.code))
    throw new Error("Cannot parse group code: " + this._data[this._pointer]);
  return r.value = B5(r.code, this._data[this._pointer + 1]), r;
};
B1.prototype.rewind = function(r) {
  r = r || 1, this._pointer = this._pointer - r * 2;
};
B1.prototype.hasNext = function() {
  return !(this._eof || this._pointer > this._data.length - 2);
};
B1.prototype.isEOF = function() {
  return this._eof;
};
function B5(r, e) {
  return r <= 9 ? e : r >= 10 && r <= 59 ? parseFloat(e.trim()) : r >= 60 && r <= 99 ? parseInt(e.trim()) : r >= 100 && r <= 109 ? e : r >= 110 && r <= 149 ? parseFloat(e.trim()) : r >= 160 && r <= 179 ? parseInt(e.trim()) : r >= 210 && r <= 239 ? parseFloat(e.trim()) : r >= 270 && r <= 289 ? parseInt(e.trim()) : r >= 290 && r <= 299 ? c3(e.trim()) : r >= 300 && r <= 369 ? e : r >= 370 && r <= 389 ? parseInt(e.trim()) : r >= 390 && r <= 399 ? e : r >= 400 && r <= 409 ? parseInt(e.trim()) : r >= 410 && r <= 419 ? e : r >= 420 && r <= 429 ? parseInt(e.trim()) : r >= 430 && r <= 439 ? e : r >= 440 && r <= 459 ? parseInt(e.trim()) : r >= 460 && r <= 469 ? parseFloat(e.trim()) : r >= 470 && r <= 481 || r === 999 || r >= 1e3 && r <= 1009 ? e : r >= 1010 && r <= 1059 ? parseFloat(e.trim()) : r >= 1060 && r <= 1071 ? parseInt(e.trim()) : (console.log("WARNING: Group code does not have a defined type: %j", { code: r, value: e }), e);
}
function c3(r) {
  if (r === "0") return !1;
  if (r === "1") return !0;
  throw TypeError("String '" + r + "' cannot be cast to Boolean type");
}
const U5 = [
  0,
  16711680,
  16776960,
  65280,
  65535,
  255,
  16711935,
  16777215,
  8421504,
  12632256,
  16711680,
  16744319,
  13369344,
  13395558,
  10027008,
  10046540,
  8323072,
  8339263,
  4980736,
  4990502,
  16727808,
  16752511,
  13382400,
  13401958,
  10036736,
  10051404,
  8331008,
  8343359,
  4985600,
  4992806,
  16744192,
  16760703,
  13395456,
  13408614,
  10046464,
  10056268,
  8339200,
  8347455,
  4990464,
  4995366,
  16760576,
  16768895,
  13408512,
  13415014,
  10056192,
  10061132,
  8347392,
  8351551,
  4995328,
  4997670,
  16776960,
  16777087,
  13421568,
  13421670,
  10000384,
  10000460,
  8355584,
  8355647,
  5000192,
  5000230,
  12582656,
  14679935,
  10079232,
  11717734,
  7510016,
  8755276,
  6258432,
  7307071,
  3755008,
  4344870,
  8388352,
  12582783,
  6736896,
  10079334,
  5019648,
  7510092,
  4161280,
  6258495,
  2509824,
  3755046,
  4194048,
  10485631,
  3394560,
  8375398,
  2529280,
  6264908,
  2064128,
  5209919,
  1264640,
  3099686,
  65280,
  8388479,
  52224,
  6736998,
  38912,
  5019724,
  32512,
  4161343,
  19456,
  2509862,
  65343,
  8388511,
  52275,
  6737023,
  38950,
  5019743,
  32543,
  4161359,
  19475,
  2509871,
  65407,
  8388543,
  52326,
  6737049,
  38988,
  5019762,
  32575,
  4161375,
  19494,
  2509881,
  65471,
  8388575,
  52377,
  6737074,
  39026,
  5019781,
  32607,
  4161391,
  19513,
  2509890,
  65535,
  8388607,
  52428,
  6737100,
  39064,
  5019800,
  32639,
  4161407,
  19532,
  2509900,
  49151,
  8380415,
  39372,
  6730444,
  29336,
  5014936,
  24447,
  4157311,
  14668,
  2507340,
  32767,
  8372223,
  26316,
  6724044,
  19608,
  5010072,
  16255,
  4153215,
  9804,
  2505036,
  16383,
  8364031,
  13260,
  6717388,
  9880,
  5005208,
  8063,
  4149119,
  4940,
  2502476,
  255,
  8355839,
  204,
  6710988,
  152,
  5000344,
  127,
  4145023,
  76,
  2500172,
  4129023,
  10452991,
  3342540,
  8349388,
  2490520,
  6245528,
  2031743,
  5193599,
  1245260,
  3089996,
  8323327,
  12550143,
  6684876,
  10053324,
  4980888,
  7490712,
  4128895,
  6242175,
  2490444,
  3745356,
  12517631,
  14647295,
  10027212,
  11691724,
  7471256,
  8735896,
  6226047,
  7290751,
  3735628,
  4335180,
  16711935,
  16744447,
  13369548,
  13395660,
  9961624,
  9981080,
  8323199,
  8339327,
  4980812,
  4990540,
  16711871,
  16744415,
  13369497,
  13395634,
  9961586,
  9981061,
  8323167,
  8339311,
  4980793,
  4990530,
  16711807,
  16744383,
  13369446,
  13395609,
  9961548,
  9981042,
  8323135,
  8339295,
  4980774,
  4990521,
  16711743,
  16744351,
  13369395,
  13395583,
  9961510,
  9981023,
  8323103,
  8339279,
  4980755,
  4990511,
  3355443,
  5987163,
  8684676,
  11382189,
  14079702,
  16777215
];
var I2 = { exports: {} }, f3 = I2.exports, we;
function p3() {
  return we || (we = 1, (function(r) {
    (function(e, t) {
      r.exports ? r.exports = t() : e.log = t();
    })(f3, function() {
      var e = function() {
      }, t = "undefined", n = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent), s = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
      ], a = {}, i = null;
      function o(y, m) {
        var g = y[m];
        if (typeof g.bind == "function")
          return g.bind(y);
        try {
          return Function.prototype.bind.call(g, y);
        } catch {
          return function() {
            return Function.prototype.apply.apply(g, [y, arguments]);
          };
        }
      }
      function l() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
      }
      function u(y) {
        return y === "debug" && (y = "log"), typeof console === t ? !1 : y === "trace" && n ? l : console[y] !== void 0 ? o(console, y) : console.log !== void 0 ? o(console, "log") : e;
      }
      function c() {
        for (var y = this.getLevel(), m = 0; m < s.length; m++) {
          var g = s[m];
          this[g] = m < y ? e : this.methodFactory(g, y, this.name);
        }
        if (this.log = this.debug, typeof console === t && y < this.levels.SILENT)
          return "No console available for logging";
      }
      function p(y) {
        return function() {
          typeof console !== t && (c.call(this), this[y].apply(this, arguments));
        };
      }
      function f(y, m, g) {
        return u(y) || p.apply(this, arguments);
      }
      function d(y, m) {
        var g = this, C, S, E, w = "loglevel";
        typeof y == "string" ? w += ":" + y : typeof y == "symbol" && (w = void 0);
        function L(M) {
          var H = (s[M] || "silent").toUpperCase();
          if (!(typeof window === t || !w)) {
            try {
              window.localStorage[w] = H;
              return;
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(w) + "=" + H + ";";
            } catch {
            }
          }
        }
        function F() {
          var M;
          if (!(typeof window === t || !w)) {
            try {
              M = window.localStorage[w];
            } catch {
            }
            if (typeof M === t)
              try {
                var H = window.document.cookie, e0 = encodeURIComponent(w), Z = H.indexOf(e0 + "=");
                Z !== -1 && (M = /^([^;]+)/.exec(
                  H.slice(Z + e0.length + 1)
                )[1]);
              } catch {
              }
            return g.levels[M] === void 0 && (M = void 0), M;
          }
        }
        function A() {
          if (!(typeof window === t || !w)) {
            try {
              window.localStorage.removeItem(w);
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(w) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch {
            }
          }
        }
        function k(M) {
          var H = M;
          if (typeof H == "string" && g.levels[H.toUpperCase()] !== void 0 && (H = g.levels[H.toUpperCase()]), typeof H == "number" && H >= 0 && H <= g.levels.SILENT)
            return H;
          throw new TypeError("log.setLevel() called with invalid level: " + M);
        }
        g.name = y, g.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5
        }, g.methodFactory = m || f, g.getLevel = function() {
          return E ?? S ?? C;
        }, g.setLevel = function(M, H) {
          return E = k(M), H !== !1 && L(E), c.call(g);
        }, g.setDefaultLevel = function(M) {
          S = k(M), F() || g.setLevel(M, !1);
        }, g.resetLevel = function() {
          E = null, A(), c.call(g);
        }, g.enableAll = function(M) {
          g.setLevel(g.levels.TRACE, M);
        }, g.disableAll = function(M) {
          g.setLevel(g.levels.SILENT, M);
        }, g.rebuild = function() {
          if (i !== g && (C = k(i.getLevel())), c.call(g), i === g)
            for (var M in a)
              a[M].rebuild();
        }, C = k(
          i ? i.getLevel() : "WARN"
        );
        var O = F();
        O != null && (E = k(O)), c.call(g);
      }
      i = new d(), i.getLogger = function(m) {
        if (typeof m != "symbol" && typeof m != "string" || m === "")
          throw new TypeError("You must supply a name when creating a logger.");
        var g = a[m];
        return g || (g = a[m] = new d(
          m,
          i.methodFactory
        )), g;
      };
      var v = typeof window !== t ? window.log : void 0;
      return i.noConflict = function() {
        return typeof window !== t && window.log === i && (window.log = v), i;
      }, i.getLoggers = function() {
        return a;
      }, i.default = i, i;
    });
  })(I2)), I2.exports;
}
var d3 = p3();
const V = /* @__PURE__ */ u3(d3);
class v3 {
  constructor() {
    this.appName = null, this.appNameWarningShown = !1, this.lastString = null, this.sectionStack = [this._CreateSection()], this.failure = !1;
  }
  /**
   * Feed next token.
   * @return {boolean} True if new parser instance should be created for this token.
   */
  Feed(e) {
    if (!this.appName)
      return e.code == 1001 ? (this.appName = e.value, !1) : (this.appNameWarningShown || (this.appNameWarningShown = !0, V.warn("XDATA section does not start with application name")), !1);
    if (e.code == 1001)
      return !0;
    if (this.failure)
      return !1;
    if (e.code == 1e3)
      return this.lastString && V.warn("XDATA section unused string: " + this.lastString), this.lastString = e.value, !1;
    const t = this._currentSection;
    if (e.code == 1002) {
      if (e.value == "{") {
        if (!this.lastString)
          return V.warn("Unnamed XDATA section encountered"), this.failure = !0, !1;
        const n = this._CreateSection();
        return t[this.lastString] = n, this.lastString = null, this.sectionStack.push(n), !1;
      }
      return e.value == "}" ? this.sectionStack.length < 2 ? (V.warn("Unmatched XDATA section closing"), this.failure = !0, !1) : (this.sectionStack.length = this.sectionStack.length - 1, !1) : (V.warn("Bad XDATA section control string encountered: " + e.value), this.failure = !0, !1);
    }
    return this.lastString !== null && (t.values.push(this._CreateValue(1e3, this.lastString)), this.lastString = null), t.values.push(this._CreateValue(e.code, e.value)), !1;
  }
  /** Finalize XDATA section parsing. */
  Finish(e) {
    if (!this.failure && this.appName) {
      let t;
      e.hasOwnProperty("xdata") ? t = e.xdata : (t = {}, e.xdata = t), t[this.appName] = this.sectionStack[0];
    }
  }
  get _currentSection() {
    return this.sectionStack[this.sectionStack.length - 1];
  }
  _CreateSection() {
    return {
      values: []
    };
  }
  _CreateValue(e, t) {
    return { code: e, value: t };
  }
}
function y3(r) {
  return U5[r];
}
function B(r) {
  var e = {};
  r.rewind();
  var t = r.next(), n = t.code;
  if (e.x = t.value, n += 10, t = r.next(), t.code !== n)
    throw new Error("Expected code for point value to be " + n + " but got " + t.code + ".");
  return e.y = t.value, n += 10, t = r.next(), t.code !== n ? (r.rewind(), e) : (e.z = t.value, e);
}
function G5(r) {
  r.rewind();
  let e = r.next();
  if (e.code !== 101)
    throw new Error("Bad call for skipEmbeddedObject()");
  do
    e = r.next();
  while (e.code !== 0);
  r.rewind();
}
function p0(r, e, t) {
  let n = null;
  for (; e.code >= 1e3; )
    n == null && (n = new v3()), n.Feed(e) ? (n.Finish(r), n = null) : e = t.next();
  if (n)
    return n.Finish(r), t.rewind(), !0;
  switch (e.code) {
    case 0:
      r.type = e.value;
      break;
    case 5:
      r.handle = e.value;
      break;
    case 6:
      r.lineType = e.value;
      break;
    case 8:
      r.layer = e.value;
      break;
    case 48:
      r.lineTypeScale = e.value;
      break;
    case 60:
      r.hidden = !!e.value;
      break;
    case 62:
      r.colorIndex = e.value, r.color = y3(Math.abs(e.value));
      break;
    case 67:
      r.inPaperSpace = e.value !== 0;
      break;
    case 100:
      break;
    case 330:
      r.ownerHandle = e.value;
      break;
    case 347:
      r.materialObjectHandle = e.value;
      break;
    case 370:
      r.lineweight = e.value;
      break;
    case 420:
      r.color = e.value;
      break;
    default:
      return !1;
  }
  return !0;
}
function N4() {
}
N4.ForEntityName = "3DFACE";
N4.prototype.parseEntity = function(r, e) {
  var t = { type: e.value, vertices: [] };
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 70:
        t.shape = (e.value & 1) === 1, t.hasContinuousLinetypePattern = (e.value & 128) === 128;
        break;
      case 10:
        t.vertices = g3(r, e), e = r.lastReadGroup;
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function g3(r, e) {
  var t = [], n, s = !1, a = !1, i = 4;
  for (n = 0; n <= i; n++) {
    for (var o = {}; e !== "EOF" && !(e.code === 0 || a); ) {
      switch (e.code) {
        case 10:
        // X0
        case 11:
        // X1
        case 12:
        // X2
        case 13:
          if (s) {
            a = !0;
            continue;
          }
          o.x = e.value, s = !0;
          break;
        case 20:
        // Y
        case 21:
        case 22:
        case 23:
          o.y = e.value;
          break;
        case 30:
        // Z
        case 31:
        case 32:
        case 33:
          o.z = e.value;
          break;
        default:
          return t;
      }
      e = r.next();
    }
    t.push(o), s = !1, a = !1;
  }
  return r.rewind(), t;
}
function B4() {
}
B4.ForEntityName = "ARC";
B4.prototype.parseEntity = function(r, e) {
  var t;
  for (t = { type: e.value }, e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        t.center = B(r);
        break;
      case 40:
        t.radius = e.value;
        break;
      case 50:
        t.startAngle = Math.PI / 180 * e.value;
        break;
      case 51:
        t.endAngle = Math.PI / 180 * e.value;
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function U4() {
}
U4.ForEntityName = "ATTDEF";
U4.prototype.parseEntity = function(r, e) {
  var t = {
    type: e.value,
    scale: 1,
    textStyle: "STANDARD"
  };
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 1:
        t.text = e.value;
        break;
      case 2:
        t.tag = e.value;
        break;
      case 3:
        t.prompt = e.value;
        break;
      case 7:
        t.textStyle = e.value;
        break;
      case 10:
        t.startPoint = B(r);
        break;
      case 11:
        t.endPoint = B(r);
        break;
      case 39:
        t.thickness = e.value;
        break;
      case 40:
        t.textHeight = e.value;
        break;
      case 41:
        t.scale = e.value;
        break;
      case 50:
        t.rotation = e.value;
        break;
      case 51:
        t.obliqueAngle = e.value;
        break;
      case 70:
        t.hidden = !!(e.value & 1), t.constant = !!(e.value & 2), t.verificationRequired = !!(e.value & 4), t.preset = !!(e.value & 8);
        break;
      case 71:
        t.backwards = !!(e.value & 2), t.mirrored = !!(e.value & 4);
        break;
      case 72:
        t.horizontalJustification = e.value;
        break;
      case 73:
        t.fieldLength = e.value;
        break;
      case 74:
        t.verticalJustification = e.value;
        break;
      case 100:
        break;
      case 101:
        G5(r);
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function X2() {
}
X2.ForEntityName = "ATTRIB";
X2.prototype.parseEntity = function(r, e) {
  var t = {
    type: e.value,
    scale: 1,
    textStyle: "STANDARD"
  }, n = !1;
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    if (e.code === 100) {
      const s = typeof e.value == "string" ? e.value.toUpperCase() : "";
      s === "ACDBXRECORD" ? n = !0 : s === "ACDBATTRIBUTE" && (n = !1);
    }
    if (!n)
      switch (e.code) {
        case 1:
          t.text = e.value;
          break;
        case 2:
          t.tag = e.value;
          break;
        case 3:
          t.prompt = e.value;
          break;
        case 7:
          t.textStyle = e.value;
          break;
        case 10:
          t.startPoint = B(r);
          break;
        case 11:
          t.endPoint = B(r);
          break;
        case 39:
          t.thickness = e.value;
          break;
        case 40:
          t.textHeight = e.value;
          break;
        case 41:
          t.scale = e.value;
          break;
        case 44:
          t.lineSpacingFactor = e.value;
          break;
        case 45:
          t.fillBoxScale = e.value;
          break;
        case 46:
          t.annotationHeight = e.value;
          break;
        case 50:
          t.rotation = e.value;
          break;
        case 51:
          t.obliqueAngle = e.value;
          break;
        case 63:
          t.backgroundFillColor = e.value;
          break;
        case 70:
          t.hidden = !!(e.value & 1), t.constant = !!(e.value & 2), t.verificationRequired = !!(e.value & 4), t.preset = !!(e.value & 8);
          break;
        case 71:
          t.attachmentPoint = e.value;
          break;
        case 72:
          t.horizontalJustification = e.value;
          break;
        case 73:
          t.lineSpacing = e.value;
          break;
        case 74:
          t.verticalJustification = e.value;
          break;
        case 90:
          t.backgroundFillSetting = e.value;
          break;
        case 100:
          break;
        case 210:
          t.extrusionDirection = B(r);
          break;
        case 280:
          t.lockPositionFlag = e.value;
          break;
        case 340:
          t.hardPointerId = e.value;
          break;
        default:
          p0(t, e, r);
          break;
      }
    e = r.next();
  }
  return t;
};
function G4() {
}
G4.ForEntityName = "CIRCLE";
G4.prototype.parseEntity = function(r, e) {
  var t, n;
  for (t = { type: e.value }, e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        t.center = B(r);
        break;
      case 40:
        t.radius = e.value;
        break;
      case 50:
        t.startAngle = Math.PI / 180 * e.value;
        break;
      case 51:
        n = Math.PI / 180 * e.value, n < t.startAngle ? t.angleLength = n + 2 * Math.PI - t.startAngle : t.angleLength = n - t.startAngle, t.endAngle = n;
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function H4() {
}
H4.ForEntityName = "DIMENSION";
H4.prototype.parseEntity = function(r, e) {
  var t;
  for (t = { type: e.value }, e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 2:
        t.block = e.value;
        break;
      case 3:
        t.styleName = e.value;
        break;
      case 10:
        t.anchorPoint = B(r);
        break;
      case 11:
        t.middleOfText = B(r);
        break;
      case 12:
        t.insertionPoint = B(r);
        break;
      case 13:
        t.linearOrAngularPoint1 = B(r);
        break;
      case 14:
        t.linearOrAngularPoint2 = B(r);
        break;
      case 15:
        t.diameterOrRadiusPoint = B(r);
        break;
      case 16:
        t.arcPoint = B(r);
        break;
      case 70:
        t.dimensionType = e.value;
        break;
      case 71:
        t.attachmentPoint = e.value;
        break;
      case 42:
        t.actualMeasurement = e.value;
        break;
      case 1:
        t.text = e.value;
        break;
      case 50:
        t.angle = e.value;
        break;
      case 53:
        t.textRotation = e.value;
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function z4() {
}
z4.ForEntityName = "ELLIPSE";
z4.prototype.parseEntity = function(r, e) {
  var t;
  for (t = { type: e.value }, e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        t.center = B(r);
        break;
      case 11:
        t.majorAxisEndPoint = B(r);
        break;
      case 40:
        t.axisRatio = e.value;
        break;
      case 41:
        t.startAngle = e.value;
        break;
      case 42:
        t.endAngle = e.value;
        break;
      case 2:
        t.name = e.value;
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function V4() {
}
V4.ForEntityName = "INSERT";
V4.prototype.parseEntity = function(r, e) {
  var t;
  t = { type: e.value };
  var n = !1;
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 2:
        t.name = e.value;
        break;
      case 41:
        t.xScale = e.value;
        break;
      case 42:
        t.yScale = e.value;
        break;
      case 43:
        t.zScale = e.value;
        break;
      case 10:
        t.position = B(r);
        break;
      case 50:
        t.rotation = e.value;
        break;
      case 66:
        n = e.value === 1;
        break;
      case 70:
        t.columnCount = e.value;
        break;
      case 71:
        t.rowCount = e.value;
        break;
      case 44:
        t.columnSpacing = e.value;
        break;
      case 45:
        t.rowSpacing = e.value;
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  if (n && e.code === 0) {
    t.attribs = [];
    for (var s = new X2(); e !== "EOF" && e.code === 0; )
      if (e.value === "ATTRIB") {
        var a = s.parseEntity(r, e);
        a.ownerHandle = t.handle, t.attribs.push(a), e = r.lastReadGroup;
      } else if (e.value === "SEQEND") {
        for (e = r.next(); e !== "EOF" && e.code !== 0; )
          e = r.next();
        break;
      } else
        break;
  }
  return t;
};
function W4() {
}
W4.ForEntityName = "LEADER";
W4.prototype.parseEntity = function(r, e) {
  var t = {
    type: e.value,
    vertices: [],
    arrowheadEnabled: !0,
    pathType: 0,
    // straight segments
    creationFlag: 3,
    // no annotation
    hasHookline: !1
  };
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 3:
        t.dimStyleName = e.value;
        break;
      case 71:
        t.arrowheadEnabled = e.value === 1;
        break;
      case 72:
        t.pathType = e.value;
        break;
      case 73:
        t.creationFlag = e.value;
        break;
      case 74:
        t.hooklineDirection = e.value;
        break;
      case 75:
        t.hasHookline = e.value === 1;
        break;
      case 40:
        t.textHeight = e.value;
        break;
      case 41:
        t.textWidth = e.value;
        break;
      case 76:
        t.vertexCount = e.value;
        break;
      case 10:
        t.vertices.push(B(r));
        break;
      case 77:
        t.colorOverride = e.value;
        break;
      case 340:
        t.annotationHandle = e.value;
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      case 211:
        t.horizontalDirection = B(r);
        break;
      case 212:
        t.blockOffset = B(r);
        break;
      case 213:
        t.annotationOffset = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function X4() {
}
X4.ForEntityName = "MULTILEADER";
X4.prototype.parseEntity = function(r, e) {
  var t = {
    type: e.value,
    leaders: [],
    context: null,
    contentType: 2
    // default: MTEXT
  };
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 170:
        t.leaderType = e.value;
        break;
      case 171:
        t.leaderLineWeight = e.value;
        break;
      case 172:
        t.contentType = e.value;
        break;
      case 173:
        t.textLeftAttachment = e.value;
        break;
      case 174:
        t.textRightAttachment = e.value;
        break;
      case 175:
        t.textTopAttachment = e.value;
        break;
      case 176:
        t.textBottomAttachment = e.value;
        break;
      case 178:
        t.textAngleType = e.value;
        break;
      case 90:
        t.propertyOverrideFlags = e.value;
        break;
      case 91:
        t.leaderLineColor = e.value;
        break;
      case 92:
        t.leaderLineColor2 = e.value;
        break;
      case 290:
        t.enableLanding = e.value;
        break;
      case 291:
        t.enableDogleg = e.value;
        break;
      case 41:
        t.doglegLength = e.value;
        break;
      case 42:
        t.arrowheadSize = e.value;
        break;
      case 43:
        t.blockScale = e.value;
        break;
      case 340:
        t.mleaderStyleHandle = e.value;
        break;
      case 341:
        t.arrowheadBlockHandle = e.value;
        break;
      case 343:
        t.textStyleHandle = e.value;
        break;
      case 10:
        t.contentBasePoint = B(r);
        break;
      case 300:
        if (e.value === "CONTEXT_DATA{") {
          t.context = m3(r), e = r.lastReadGroup;
          continue;
        }
        break;
      case 270:
        t.version = e.value;
        break;
      case 271:
        t.textTopAttachmentType = e.value;
        break;
      case 272:
        t.textBottomAttachmentType = e.value;
        break;
      case 273:
        break;
      case 295:
        t.textDirectionNegative = e.value;
        break;
      case 95:
        t.flags = e.value;
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function m3(r) {
  for (var e = {
    leaders: [],
    textLabel: null,
    contentBasePosition: null,
    textHeight: null,
    textDirection: null,
    textPosition: null,
    textRotation: 0,
    textWidth: 0,
    textStyleHandle: null
  }, t = r.next(); t !== "EOF" && t.code !== 0; ) {
    if (t.code === 302 && t.value === "LEADER{") {
      e.leaders.push(x3(r)), t = r.lastReadGroup;
      continue;
    }
    if (t.code === 301 && t.value === "}")
      return r.next(), e;
    switch (t.code) {
      case 40:
        e.scale = t.value;
        break;
      case 10:
        e.contentBasePosition = B(r);
        break;
      case 41:
        e.textHeight = t.value;
        break;
      case 140:
        e.textHeightOverride = t.value;
        break;
      case 145:
        e.textLineSpacing = t.value;
        break;
      case 174:
        e.textLeftAttachment = t.value;
        break;
      case 175:
        e.textRightAttachment = t.value;
        break;
      case 176:
        e.textAngleType = t.value;
        break;
      case 177:
        e.textAlignment = t.value;
        break;
      case 290:
        e.hasTextContent = t.value;
        break;
      case 304:
        e.textLabel = t.value;
        break;
      case 11:
        e.textNormal = B(r);
        break;
      case 340:
        e.textStyleHandle = t.value;
        break;
      case 12:
        e.textPosition = B(r);
        break;
      case 13:
        e.textDirection = B(r);
        break;
      case 42:
        e.textRotation = t.value;
        break;
      case 43:
        e.textWidth = t.value;
        break;
      case 44:
        e.textDefinedWidth = t.value;
        break;
      case 45:
        e.textDefinedHeight = t.value;
        break;
      case 170:
        e.textAttachmentDirection = t.value;
        break;
      case 171:
        e.textFlowDirection = t.value;
        break;
      case 172:
        e.columnType = t.value;
        break;
      case 90:
        e.textColor = t.value;
        break;
      case 91:
        e.textColorTrue = t.value;
        break;
      case 92:
        break;
      case 141:
        e.landingGap = t.value;
        break;
      case 142:
        break;
      case 143:
        break;
      case 110:
        e.blockBasePosition = B(r);
        break;
      case 111:
        e.blockXDir = B(r);
        break;
      case 112:
        e.blockYDir = B(r);
        break;
    }
    t = r.next();
  }
  return e;
}
function x3(r) {
  for (var e = {
    lines: [],
    hasSetLastLeaderLinePoint: !1,
    hasSetDoglegVector: !1,
    lastLeaderLinePoint: null,
    doglegVector: null,
    doglegLength: 0
  }, t = r.next(); t !== "EOF" && t.code !== 0; ) {
    if (t.code === 304 && t.value === "LEADER_LINE{") {
      e.lines.push(b3(r)), t = r.lastReadGroup;
      continue;
    }
    if (t.code === 303 && t.value === "}")
      return r.next(), e;
    switch (t.code) {
      case 290:
        e.hasSetLastLeaderLinePoint = t.value;
        break;
      case 291:
        e.hasSetDoglegVector = t.value;
        break;
      case 10:
        e.lastLeaderLinePoint = B(r);
        break;
      case 11:
        e.doglegVector = B(r);
        break;
      case 40:
        e.doglegLength = t.value;
        break;
      case 90:
        e.branchIndex = t.value;
        break;
      case 271:
        e.lineIndex = t.value;
        break;
    }
    t = r.next();
  }
  return e;
}
function b3(r) {
  for (var e = {
    vertices: []
  }, t = r.next(); t !== "EOF" && t.code !== 0; ) {
    if (t.code === 305 && t.value === "}")
      return r.next(), e;
    switch (t.code) {
      case 10:
        e.vertices.push(B(r));
        break;
      case 91:
        e.lineIndex = t.value;
        break;
      case 92:
        e.color = t.value;
        break;
    }
    t = r.next();
  }
  return e;
}
function Y4() {
}
Y4.ForEntityName = "LINE";
Y4.prototype.parseEntity = function(r, e) {
  var t = { type: e.value, vertices: [] };
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        t.vertices.unshift(B(r));
        break;
      case 11:
        t.vertices.push(B(r));
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      case 100:
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function J4() {
}
J4.ForEntityName = "LWPOLYLINE";
J4.prototype.parseEntity = function(r, e) {
  var t = { type: e.value, vertices: [] }, n = 0;
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 38:
        t.elevation = e.value;
        break;
      case 39:
        t.depth = e.value;
        break;
      case 70:
        t.shape = (e.value & 1) === 1, t.hasContinuousLinetypePattern = (e.value & 128) === 128;
        break;
      case 90:
        n = e.value;
        break;
      case 10:
        t.vertices = S3(n, r);
        break;
      case 43:
        e.value !== 0 && (t.width = e.value);
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function S3(r, e) {
  if (!r || r <= 0) throw Error("n must be greater than 0 vertices");
  var t = [], n, s = !1, a = !1, i = e.lastReadGroup;
  for (n = 0; n < r; n++) {
    for (var o = {}; i !== "EOF" && !(i.code === 0 || a); ) {
      switch (i.code) {
        case 10:
          if (s) {
            a = !0;
            continue;
          }
          o.x = i.value, s = !0;
          break;
        case 20:
          o.y = i.value;
          break;
        case 30:
          o.z = i.value;
          break;
        case 40:
          o.startWidth = i.value;
          break;
        case 41:
          o.endWidth = i.value;
          break;
        case 42:
          i.value != 0 && (o.bulge = i.value);
          break;
        case 91:
          o.id = i.value;
          break;
        default:
          return s && t.push(o), e.rewind(), t;
      }
      i = e.next();
    }
    t.push(o), s = !1, a = !1;
  }
  return e.rewind(), t;
}
function Z4() {
}
Z4.ForEntityName = "MTEXT";
Z4.prototype.parseEntity = function(r, e) {
  var t = { type: e.value };
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 3:
      case 1:
        t.text ? t.text += e.value : t.text = e.value;
        break;
      case 10:
        t.position = B(r);
        break;
      case 11:
        t.direction = B(r);
        break;
      case 40:
        t.height = e.value;
        break;
      case 41:
        t.width = e.value;
        break;
      case 44:
        t.lineSpacing = e.value;
        break;
      case 50:
        t.rotation = e.value;
        break;
      case 7:
        t.styleName = e.value;
        break;
      case 71:
        t.attachmentPoint = e.value;
        break;
      case 72:
        t.drawingDirection = e.value;
        break;
      case 101:
        G5(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function q4() {
}
q4.ForEntityName = "POINT";
q4.prototype.parseEntity = function(r, e) {
  var t;
  for (t = { type: e.value }, e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        t.position = B(r);
        break;
      case 39:
        t.thickness = e.value;
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      case 100:
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function Q4() {
}
Q4.ForEntityName = "VERTEX";
Q4.prototype.parseEntity = function(r, e) {
  var t = { type: e.value };
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        t.x = e.value;
        break;
      case 20:
        t.y = e.value;
        break;
      case 30:
        t.z = e.value;
        break;
      case 40:
        break;
      case 41:
        break;
      case 42:
        e.value != 0 && (t.bulge = e.value);
        break;
      case 70:
        t.curveFittingVertex = (e.value & 1) !== 0, t.curveFitTangent = (e.value & 2) !== 0, t.splineVertex = (e.value & 8) !== 0, t.splineControlPoint = (e.value & 16) !== 0, t.threeDPolylineVertex = (e.value & 32) !== 0, t.threeDPolylineMesh = (e.value & 64) !== 0, t.polyfaceMeshVertex = (e.value & 128) !== 0;
        break;
      case 50:
        break;
      case 71:
        t.faces = [e.value];
        break;
      case 72:
        t.faces[1] = e.value;
        break;
      case 73:
        t.faces[2] = e.value;
        break;
      case 74:
        t.faces[3] = e.value;
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function K4() {
}
K4.ForEntityName = "POLYLINE";
K4.prototype.parseEntity = function(r, e) {
  var t = { type: e.value, vertices: [] };
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        break;
      case 20:
        break;
      case 30:
        break;
      case 39:
        t.thickness = e.value;
        break;
      case 40:
        break;
      case 41:
        break;
      case 70:
        t.shape = (e.value & 1) !== 0, t.includesCurveFitVertices = (e.value & 2) !== 0, t.includesSplineFitVertices = (e.value & 4) !== 0, t.is3dPolyline = (e.value & 8) !== 0, t.is3dPolygonMesh = (e.value & 16) !== 0, t.is3dPolygonMeshClosed = (e.value & 32) !== 0, t.isPolyfaceMesh = (e.value & 64) !== 0, t.hasContinuousLinetypePattern = (e.value & 128) !== 0;
        break;
      case 71:
        break;
      case 72:
        break;
      case 73:
        break;
      case 74:
        break;
      case 75:
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t.vertices = T3(r, e), t;
};
function T3(r, e) {
  for (var t = new Q4(), n = []; !r.isEOF(); )
    if (e.code === 0) {
      if (e.value === "VERTEX")
        n.push(t.parseEntity(r, e)), e = r.lastReadGroup;
      else if (e.value === "SEQEND") {
        E3(r, e);
        break;
      }
    }
  return n;
}
function E3(r, e) {
  var t = { type: e.value };
  for (e = r.next(); e != "EOF" && e.code != 0; )
    p0(t, e, r), e = r.next();
  return t;
}
function j4() {
}
j4.ForEntityName = "SOLID";
j4.prototype.parseEntity = function(r, e) {
  var t;
  for (t = { type: e.value }, t.points = [], e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        t.points[0] = B(r);
        break;
      case 11:
        t.points[1] = B(r);
        break;
      case 12:
        t.points[2] = B(r);
        break;
      case 13:
        t.points[3] = B(r);
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function $4() {
}
$4.ForEntityName = "SPLINE";
$4.prototype.parseEntity = function(r, e) {
  var t;
  for (t = { type: e.value }, e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        t.controlPoints || (t.controlPoints = []), t.controlPoints.push(B(r));
        break;
      case 11:
        t.fitPoints || (t.fitPoints = []), t.fitPoints.push(B(r));
        break;
      case 12:
        t.startTangent = B(r);
        break;
      case 13:
        t.endTangent = B(r);
        break;
      case 40:
        t.knotValues || (t.knotValues = []), t.knotValues.push(e.value);
        break;
      case 70:
        (e.value & 1) != 0 && (t.closed = !0), (e.value & 2) != 0 && (t.periodic = !0), (e.value & 4) != 0 && (t.rational = !0), (e.value & 8) != 0 && (t.planar = !0), (e.value & 16) != 0 && (t.planar = !0, t.linear = !0);
        break;
      case 71:
        t.degreeOfSplineCurve = e.value;
        break;
      case 72:
        t.numberOfKnots = e.value;
        break;
      case 73:
        t.numberOfControlPoints = e.value;
        break;
      case 74:
        t.numberOfFitPoints = e.value;
        break;
      case 210:
        t.extrusionDirection = B(r);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function ee() {
}
ee.ForEntityName = "TEXT";
ee.prototype.parseEntity = function(r, e) {
  var t;
  for (t = { type: e.value }, e = r.next(); e !== "EOF" && e.code !== 0; ) {
    switch (e.code) {
      case 10:
        t.startPoint = B(r);
        break;
      case 11:
        t.endPoint = B(r);
        break;
      case 40:
        t.textHeight = e.value;
        break;
      case 41:
        t.xScale = e.value;
        break;
      case 50:
        t.rotation = e.value;
        break;
      case 7:
        t.styleName = e.value;
        break;
      case 1:
        t.text = e.value;
        break;
      // NOTE: 72 and 73 are meaningless without 11 (second alignment point)
      case 72:
        t.halign = e.value;
        break;
      case 73:
        t.valign = e.value;
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function te() {
}
te.ForEntityName = "HATCH";
te.prototype.parseEntity = function(r, e) {
  var t;
  t = { type: e.value };
  let n = 0, s = 0, a = 0;
  for (e = r.next(); e !== "EOF" && e.code !== 0; ) {
    for (; n > 0; ) {
      const i = A3(e, r);
      i ? (t.boundaryLoops.push(i), n--, e = r.next()) : n = 0;
    }
    for (; s > 0; ) {
      const i = C3(e, r);
      i ? (t.definitionLines.push(i), s--, e = r.next()) : s = 0;
    }
    for (; a > 0; ) {
      const i = k3(e, r);
      i ? (t.seedPoints.push(i), a--, e = r.next()) : a = 0;
    }
    if (e.code === 0) break;
    switch (e.code) {
      case 2:
        t.patternName = e.value;
        break;
      case 70:
        t.isSolid = e.value != 0;
        break;
      case 91:
        n = e.value, n > 0 && (t.boundaryLoops = []);
        break;
      // Hatch style:
      // 0 = Hatch “odd parity” area (Normal style)
      // 1 = Hatch outermost area only (Outer style)
      // 2 = Hatch through entire area (Ignore style)
      case 75:
        t.hatchStyle = e.value;
        break;
      //Hatch pattern type:
      // 0 = User-defined; 1 = Predefined; 2 = Custom
      case 76:
        t.patternType = e.value;
        break;
      case 52:
        t.patternAngle = e.value * Math.PI / 180;
        break;
      case 41:
        t.patternScale = e.value;
        break;
      case 78:
        s = e.value, s > 0 && (t.definitionLines = []);
        break;
      case 98:
        a = e.value, a > 0 && (t.seedPoints = []);
        break;
      default:
        p0(t, e, r);
        break;
    }
    e = r.next();
  }
  return t;
};
function A3(r, e) {
  let t = null;
  const n = () => {
    const l = { vertices: [], isClosed: !1 };
    let u = 0;
    for (; ; ) {
      if (u > 0) {
        for (let c = 0; c < u && r.code == 10; c++) {
          const p = B(e);
          r = e.next(), r.code == 42 && (p.bulge = r.value, r = e.next()), l.vertices.push(p);
        }
        return l;
      }
      switch (r.code) {
        case 72:
          r.value;
          break;
        case 73:
          l.isClosed = r.value;
          break;
        case 93:
          u = r.value;
          break;
        default:
          return l;
      }
      r = e.next();
    }
  }, s = () => {
    if (r.code != 72)
      return null;
    const l = { type: r.value };
    r = e.next();
    const u = l.type == 4;
    for (; ; ) {
      switch (r.code) {
        case 10:
          u ? (l.controlPoints || (l.controlPoints = []), l.controlPoints.push(B(e))) : l.start = B(e);
          break;
        case 11:
          u ? (l.fitPoints || (l.fitPoints = []), l.fitPoints.push(B(e))) : l.end = B(e);
          break;
        case 40:
          u ? (l.knotValues || (l.knotValues = []), l.knotValues.push(r.value)) : l.radius = r.value;
          break;
        case 50:
          l.startAngle = r.value * Math.PI / 180;
          break;
        case 51:
          l.endAngle = r.value * Math.PI / 180;
          break;
        case 73:
          u ? l.rational = r.value : l.isCcw = r.value;
          break;
        case 74:
          l.periodic = r.value;
          break;
        case 94:
          l.degreeOfSplineCurve = r.value;
          break;
        //XXX ignore some groups for now, mostly spline
        case 95:
        case 96:
        case 40:
        case 42:
        case 97:
          break;
        default:
          return l;
      }
      r = e.next();
    }
  };
  let a = !1, i = 0, o = 0;
  for (; ; ) {
    if (!t) {
      if (r.code != 92)
        return null;
      t = {
        type: r.value,
        isExternal: (r.value & 1) != 0,
        isOutermost: (r.value & 16) != 0
      }, r = e.next();
    }
    for (t.type & 2 && !a && (t.polyline = n(), a = !0); i; ) {
      const l = s();
      l ? (t.edges.push(l), i--) : i = 0;
    }
    for (; o; )
      r.code == 330 ? (t.sourceRefs.push(r.value), o--, r = e.next()) : o = 0;
    switch (r.code) {
      case 93:
        i = r.value, i > 0 && (t.edges = []);
        break;
      case 97:
        o = r.value, o > 0 && (t.sourceRefs = []);
        break;
      default:
        return e.rewind(), t;
    }
    r = e.next();
  }
}
function C3(r, e) {
  if (r.code != 53)
    return null;
  const t = {
    angle: r.value * Math.PI / 180,
    base: { x: 0, y: 0 },
    offset: { x: 0, y: 0 }
  };
  r = e.next();
  let n = 0;
  for (; ; ) {
    switch (r.code) {
      case 43:
        t.base.x = r.value;
        break;
      case 44:
        t.base.y = r.value;
        break;
      case 45:
        t.offset.x = r.value;
        break;
      case 46:
        t.offset.y = r.value;
        break;
      case 49:
        n > 0 && (t.dashes.push(r.value), n--);
        break;
      case 79:
        n = r.value, r.value && (t.dashes = []);
        break;
      default:
        return e.rewind(), t;
    }
    r = e.next();
  }
}
function k3(r, e) {
  return r.code != 10 ? null : B(e);
}
const x4 = /* @__PURE__ */ new Map([
  [140, "DIMTXT"],
  [142, "DIMTSZ"],
  [144, "DIMLFAC"],
  [147, "DIMGAP"],
  [173, "DIMSAH"],
  [175, "DIMSOXD"],
  [176, "DIMCLRD"],
  [177, "DIMCLRE"],
  [178, "DIMCLRT"],
  [271, "DIMDEC"],
  [278, "DIMDSEP"],
  [281, "DIMSD1"],
  [282, "DIMSD2"],
  [3, "DIMPOST"],
  [40, "DIMSCALE"],
  [41, "DIMASZ"],
  [42, "DIMEXO"],
  [44, "DIMEXE"],
  [45, "DIMRND"],
  [46, "DIMDLE"],
  [5, "DIMBLK"],
  [6, "DIMBLK1"],
  [7, "DIMBLK2"],
  [75, "DIMSE1"],
  [76, "DIMSE2"],
  [78, "DIMZIN"]
]);
V.setLevel("error");
function P3(r) {
  r.registerEntityHandler(N4), r.registerEntityHandler(B4), r.registerEntityHandler(U4), r.registerEntityHandler(X2), r.registerEntityHandler(G4), r.registerEntityHandler(H4), r.registerEntityHandler(z4), r.registerEntityHandler(V4), r.registerEntityHandler(W4), r.registerEntityHandler(X4), r.registerEntityHandler(Y4), r.registerEntityHandler(J4), r.registerEntityHandler(Z4), r.registerEntityHandler(q4), r.registerEntityHandler(K4), r.registerEntityHandler(j4), r.registerEntityHandler($4), r.registerEntityHandler(ee), r.registerEntityHandler(te);
}
function U1() {
  this._entityHandlers = {}, P3(this);
}
U1.prototype.parse = function(r, e) {
  throw new Error("read() not implemented. Use readSync()");
};
U1.prototype.registerEntityHandler = function(r) {
  var e = new r();
  this._entityHandlers[r.ForEntityName] = e;
};
U1.prototype.parseSync = function(r) {
  return typeof r == "string" ? this._parse(r) : (console.error("Cannot read DXF source of type `" + typeof r), null);
};
U1.prototype.parseStream = function(r, e) {
  var t = "", n = this;
  r.on("data", s), r.on("end", a), r.on("error", i);
  function s(o) {
    t += o;
  }
  function a() {
    try {
      var o = n._parse(t);
    } catch (l) {
      return e(l);
    }
    e(null, o);
  }
  function i(o) {
    e(o);
  }
};
U1.prototype._parse = function(r) {
  var e, t, n = {}, s = 0, a = r.split(/\r\n|\r|\n/g);
  if (e = new B1(a), !e.hasNext())
    throw Error("Empty file");
  var i = this, o = function() {
    for (t = e.next(); !e.isEOF(); )
      if (t.code === 0 && t.value === "SECTION") {
        if (t = e.next(), t.code !== 2) {
          console.error("Unexpected code %s after 0:SECTION", H5(t)), t = e.next();
          continue;
        }
        t.value === "HEADER" ? (V.debug("> HEADER"), n.header = u(), V.debug("<")) : t.value === "BLOCKS" ? (V.debug("> BLOCKS"), n.blocks = c(), V.debug("<")) : t.value === "ENTITIES" ? (V.debug("> ENTITIES"), n.entities = w(!1), V.debug("<")) : t.value === "TABLES" ? (V.debug("> TABLES"), n.tables = f(), V.debug("<")) : t.value === "EOF" ? V.debug("EOF") : V.warn("Skipping section '%s'", t.value);
      } else
        t = e.next();
  }, l = function(A, k) {
    return t.code === A && t.value === k;
  }, u = function() {
    var A = null, k = null, O = {};
    for (t = e.next(); ; ) {
      if (l(0, "ENDSEC")) {
        A != null && (O[A] = k);
        break;
      } else t.code === 9 ? (A != null && (O[A] = k), A = t.value) : t.code === 10 ? k = { x: t.value } : t.code === 20 ? k.y = t.value : t.code === 30 ? k.z = t.value : k = t.value;
      t = e.next();
    }
    return t = e.next(), O;
  }, c = function() {
    var A = {}, k;
    for (t = e.next(); t.value !== "EOF" && !l(0, "ENDSEC"); )
      l(0, "BLOCK") ? (V.debug("block {"), k = p(), V.debug("}"), F(k), k.name ? A[k.name] = k : V.error('block with handle "' + k.handle + '" is missing a name.')) : (a1(t), t = e.next());
    return A;
  }, p = function() {
    var A = {};
    for (t = e.next(); t.value !== "EOF"; ) {
      switch (t.code) {
        case 1:
          A.xrefPath = t.value, t = e.next();
          break;
        case 2:
          A.name = t.value, t = e.next();
          break;
        case 3:
          A.name2 = t.value, t = e.next();
          break;
        case 5:
          A.handle = t.value, t = e.next();
          break;
        case 8:
          A.layer = t.value, t = e.next();
          break;
        case 10:
          A.position = L(), t = e.next();
          break;
        case 67:
          A.inPaperSpace = !!(t.value && t.value == 1), t = e.next();
          break;
        case 70:
          t.value != 0 && (A.type = t.value), t = e.next();
          break;
        case 100:
          t = e.next();
          break;
        case 330:
          A.ownerHandle = t.value, t = e.next();
          break;
        case 0:
          if (t.value == "ENDBLK")
            break;
          A.entities = w(!0);
          break;
        default:
          a1(t), t = e.next();
      }
      if (l(0, "ENDBLK")) {
        t = e.next();
        break;
      }
    }
    return A;
  }, f = function() {
    var A = {};
    for (t = e.next(); t.value !== "EOF" && !l(0, "ENDSEC"); )
      if (l(0, "TABLE")) {
        t = e.next();
        var k = E[t.value];
        k ? (V.debug(t.value + " Table {"), A[E[t.value].tableName] = v(), V.debug("}")) : V.debug("Unhandled Table " + t.value);
      } else
        t = e.next();
    return t = e.next(), A;
  };
  const d = "ENDTAB";
  var v = function() {
    var A = E[t.value], k = {}, O = 0, M;
    for (t = e.next(); !l(0, d); )
      switch (t.code) {
        case 5:
          k.handle = t.value, t = e.next();
          break;
        case 330:
          k.ownerHandle = t.value, t = e.next();
          break;
        case 100:
          t.value === "AcDbSymbolTable" || a1(t), t = e.next();
          break;
        case 70:
          O = t.value, t = e.next();
          break;
        case 0:
          t.value === A.dxfSymbolName ? k[A.tableRecordsProperty] = A.parseTableRecords() : (a1(t), t = e.next());
          break;
        default:
          a1(t), t = e.next();
      }
    var H = k[A.tableRecordsProperty];
    return H ? (H.constructor === Array ? M = H.length : typeof H == "object" && (M = Object.keys(H).length), O !== M && V.warn(`Parsed ${M} ${A.dxfSymbolName}'s but expected ${O}`)) : k[A.tableRecordsProperty] = [], t = e.next(), k;
  }, y = function() {
    var A = [], k = {};
    for (V.debug("ViewPort {"), t = e.next(); !l(0, d); )
      switch (t.code) {
        case 2:
          k.name = t.value, t = e.next();
          break;
        case 10:
          k.lowerLeftCorner = L(), t = e.next();
          break;
        case 11:
          k.upperRightCorner = L(), t = e.next();
          break;
        case 12:
          k.center = L(), t = e.next();
          break;
        case 13:
          k.snapBasePoint = L(), t = e.next();
          break;
        case 14:
          k.snapSpacing = L(), t = e.next();
          break;
        case 15:
          k.gridSpacing = L(), t = e.next();
          break;
        case 16:
          k.viewDirectionFromTarget = L(), t = e.next();
          break;
        case 17:
          k.viewTarget = L(), t = e.next();
          break;
        case 42:
          k.lensLength = t.value, t = e.next();
          break;
        case 43:
          k.frontClippingPlane = t.value, t = e.next();
          break;
        case 44:
          k.backClippingPlane = t.value, t = e.next();
          break;
        case 45:
          k.viewHeight = t.value, t = e.next();
          break;
        case 50:
          k.snapRotationAngle = t.value, t = e.next();
          break;
        case 51:
          k.viewTwistAngle = t.value, t = e.next();
          break;
        case 79:
          k.orthographicType = t.value, t = e.next();
          break;
        case 110:
          k.ucsOrigin = L(), t = e.next();
          break;
        case 111:
          k.ucsXAxis = L(), t = e.next();
          break;
        case 112:
          k.ucsYAxis = L(), t = e.next();
          break;
        case 110:
          k.ucsOrigin = L(), t = e.next();
          break;
        case 281:
          k.renderMode = t.value, t = e.next();
          break;
        case 281:
          k.defaultLightingType = t.value, t = e.next();
          break;
        case 292:
          k.defaultLightingOn = t.value, t = e.next();
          break;
        case 330:
          k.ownerHandle = t.value, t = e.next();
          break;
        case 63:
        // These are all ambient color. Perhaps should be a gradient when multiple are set.
        case 421:
        case 431:
          k.ambientColor = t.value, t = e.next();
          break;
        case 0:
          t.value === "VPORT" && (V.debug("}"), A.push(k), V.debug("ViewPort {"), k = {}, t = e.next());
          break;
        default:
          a1(t), t = e.next();
          break;
      }
    return V.debug("}"), A.push(k), A;
  }, m = function() {
    var A = {}, k, O = {}, M;
    for (V.debug("LType {"), t = e.next(); !l(0, "ENDTAB"); )
      switch (t.code) {
        case 2:
          O.name = t.value, k = t.value, t = e.next();
          break;
        case 3:
          O.description = t.value, t = e.next();
          break;
        case 73:
          M = t.value, M > 0 && (O.pattern = []), t = e.next();
          break;
        case 40:
          O.patternLength = t.value, t = e.next();
          break;
        case 49:
          O.pattern.push(t.value), t = e.next();
          break;
        case 0:
          V.debug("}"), M > 0 && M !== O.pattern.length && V.warn("lengths do not match on LTYPE pattern"), A[k] = O, O = {}, V.debug("LType {"), t = e.next();
          break;
        default:
          t = e.next();
      }
    return V.debug("}"), A[k] = O, A;
  }, g = function() {
    var A = {}, k, O = {};
    for (V.debug("Layer {"), t = e.next(); !l(0, "ENDTAB"); )
      switch (t.code) {
        case 2:
          O.name = t.value, k = t.value, t = e.next();
          break;
        case 62:
          O.visible = t.value >= 0, O.colorIndex = Math.abs(t.value), O.color = w3(O.colorIndex), t = e.next();
          break;
        case 70:
          O.frozen = (t.value & 1) !== 0 || (t.value & 2) !== 0, t = e.next();
          break;
        case 420:
          O.color = t.value, t = e.next();
          break;
        case 0:
          t.value === "LAYER" && (V.debug("}"), A[k] = O, V.debug("Layer {"), O = {}, k = void 0, t = e.next());
          break;
        default:
          a1(t), t = e.next();
          break;
      }
    return V.debug("}"), A[k] = O, A;
  }, C = function() {
    var A = {}, k, O = {};
    for (V.debug("DimStyle {"), t = e.next(); !l(0, "ENDTAB"); )
      if (x4.has(t.code))
        O[x4.get(t.code)] = t.value, t = e.next();
      else
        switch (t.code) {
          case 2:
            O.name = t.value, k = t.value, t = e.next();
            break;
          case 0:
            t.value === "DIMSTYLE" && (V.debug("}"), A[k] = O, V.debug("DimStyle {"), O = {}, k = void 0, t = e.next());
            break;
          default:
            a1(t), t = e.next();
            break;
        }
    return V.debug("}"), A[k] = O, A;
  }, S = function() {
    var A = {}, k = {}, O;
    for (V.debug("Style {"), t = e.next(); !l(0, d); )
      switch (t.code) {
        case 100:
          k.subClassMarker = t.value, t = e.next();
          break;
        case 2:
          k.styleName = t.value, O = t.value, t = e.next();
          break;
        case 70:
          k.standardFlag = t.value, t = e.next();
          break;
        case 40:
          k.fixedTextHeight = t.value, t = e.next();
          break;
        case 41:
          k.widthFactor = t.value, t = e.next();
          break;
        case 50:
          k.obliqueAngle = t.value, t = e.next();
          break;
        case 71:
          k.textGenerationFlag = t.value, t = e.next();
          break;
        case 42:
          k.lastHeight = t.value, t = e.next();
          break;
        case 3:
          k.font = t.value, t = e.next();
          break;
        case 4:
          k.bigFont = t.value, t = e.next();
          break;
        case 1071:
          k.extendedFont = t.value, t = e.next();
          break;
        case 0:
          t.value === "STYLE" && (V.debug("}"), A[O] = k, V.debug("Style {"), k = {}, O = void 0, t = e.next());
          break;
        default:
          a1(t), t = e.next();
          break;
      }
    return V.debug("}"), A[O] = k, A;
  }, E = {
    VPORT: {
      tableRecordsProperty: "viewPorts",
      tableName: "viewPort",
      dxfSymbolName: "VPORT",
      parseTableRecords: y
    },
    LTYPE: {
      tableRecordsProperty: "lineTypes",
      tableName: "lineType",
      dxfSymbolName: "LTYPE",
      parseTableRecords: m
    },
    LAYER: {
      tableRecordsProperty: "layers",
      tableName: "layer",
      dxfSymbolName: "LAYER",
      parseTableRecords: g
    },
    DIMSTYLE: {
      tableRecordsProperty: "dimStyles",
      tableName: "dimstyle",
      dxfSymbolName: "DIMSTYLE",
      parseTableRecords: C
    },
    STYLE: {
      tableRecordsProperty: "styles",
      tableName: "style",
      dxfSymbolName: "STYLE",
      parseTableRecords: S
    }
  }, w = function(A) {
    var k = [], O = A ? "ENDBLK" : "ENDSEC";
    for (A || (t = e.next()); ; )
      if (t.code === 0) {
        if (t.value === O)
          break;
        var M, H = i._entityHandlers[t.value];
        if (H != null)
          V.debug(t.value + " {"), M = H.parseEntity(e, t), t = e.lastReadGroup, V.debug("}");
        else {
          V.warn("Unhandled entity " + t.value), t = e.next();
          continue;
        }
        F(M), k.push(M);
      } else
        t = e.next();
    return O == "ENDSEC" && (t = e.next()), k;
  }, L = function() {
    var A = {}, k = t.code;
    if (A.x = t.value, k += 10, t = e.next(), t.code != k)
      throw new Error("Expected code for point value to be " + k + " but got " + t.code + ".");
    return A.y = t.value, k += 10, t = e.next(), t.code != k ? (e.rewind(), A) : (A.z = t.value, A);
  }, F = function(A) {
    if (!A)
      throw new TypeError("entity cannot be undefined or null");
    A.handle || (A.handle = s++);
  };
  return o(), n;
};
function a1(r) {
  V.debug("unhandled group " + H5(r));
}
function H5(r) {
  return r.code + ":" + r.value;
}
function w3(r) {
  return U5[r];
}
class F3 {
  constructor(e, t = "utf-8") {
    this.url = e, this.encoding = t;
  }
  /** @param progressCbk {Function} (phase, receivedSize, totalSize) */
  async Fetch(e = null) {
    const t = await fetch(this.url), n = +t.headers.get("Content-Length"), s = t.body.getReader();
    let a = 0, i = "", o = new TextDecoder(this.encoding);
    for (; ; ) {
      const { done: u, value: c } = await s.read();
      if (u) {
        i += o.decode(new ArrayBuffer(0), { stream: !1 });
        break;
      }
      i += o.decode(c, { stream: !0 }), a += c.length, e !== null && e("fetch", a, n);
    }
    return e !== null && e("parse", 0, null), new U1().parseSync(i);
  }
}
class J {
  /**
   * Components order matters for lookup by prefix.
   * @param layerName {?String} Layer name, null if not bound to a layer (e.g. block definition
   *  without layer specified).
   * @param blockName {?String} Block name if applicable. If specified and geometryType is not
   *  BLOCK_INSTANCE, the batch is part of block definition. Otherwise it is block instance.
   * @param geometryType {?number} One of BatchingKey.GeometryType.
   * @param color {number} Color ARGB value.
   * @param lineType {?number} Line type ID, null for non-lines. Zero is default type (solid
   *  line).
   * @param dxfHandle {?string} Original entity handle.
   * @param dxfType {?string} Original entity type.
   */
  constructor(e, t, n, s, a, i = null, o = null) {
    this.layerName = e ?? null, this.blockName = t ?? null, this.geometryType = n ?? null, this.color = s, this.lineType = a ?? null, this.dxfHandle = i, this.dxfType = o;
  }
  /** Comparator function. Fields lexical order corresponds to the constructor arguments order.
   * Null values are always first.
   */
  Compare(e) {
    let t = U0(this.layerName, e.layerName);
    return t !== 0 || (t = U0(this.blockName, e.blockName), t !== 0) || (t = U0(this.geometryType, e.geometryType), t !== 0) || (t = U0(this.color, e.color), t !== 0) || (t = U0(this.lineType, e.lineType), t !== 0) || (t = U0(this.dxfHandle, e.dxfHandle), t !== 0) ? t : U0(this.dxfType, e.dxfType);
  }
  IsIndexed() {
    return this.geometryType === J.GeometryType.INDEXED_LINES || this.geometryType === J.GeometryType.INDEXED_TRIANGLES;
  }
  IsInstanced() {
    return this.geometryType === J.GeometryType.BLOCK_INSTANCE || this.geometryType === J.GeometryType.POINT_INSTANCE;
  }
}
J.GeometryType = Object.freeze({
  POINTS: 0,
  LINES: 1,
  INDEXED_LINES: 2,
  TRIANGLES: 3,
  INDEXED_TRIANGLES: 4,
  BLOCK_INSTANCE: 5,
  /** Shaped point instances. */
  POINT_INSTANCE: 6
});
function U0(r, e) {
  return r === null ? e === null ? 0 : -1 : e === null ? 1 : r < e ? -1 : r > e ? 1 : 0;
}
class B2 {
  /**
   * @param type Array type, see NativeType.
   * @param initialCapacity Initial capacity, number of elements.
   */
  constructor(e, t = 16) {
    this.type = e, this.capacity = t, this.size = 0, this.buffer = new (j2(e))(t);
  }
  GetSize() {
    return this.size;
  }
  /**
   * Append new value to the buffer end.
   * @return Appended value position in the buffer.
   */
  Push(e) {
    this._CheckGrow();
    const t = this.size;
    return this.buffer[t] = e, this.size++, t;
  }
  Get(e) {
    if (e >= this.size)
      throw new Error(`Index out of range: ${e}/${this.size}`);
    return this.buffer[e];
  }
  /** Copy content to the specified buffer.
   * @param dstBuffer Destination buffer, should be typed array of the same type.
   * @param dstOffset {number} Offset in elements in the destination buffer.
   * @param srcOffset {number} Offset in elements in this buffer.
   * @param size {number} Number of elements to copy, -1 (default) to copy till this buffer end.
   */
  CopyTo(e, t, n = 0, s = -1) {
    s === -1 && (s = this.size - n);
    const a = new (j2(this.type))(this.buffer.buffer, n, s);
    e.set(a, t);
  }
  _CheckGrow() {
    if (this.size < this.capacity)
      return;
    this.capacity *= 2;
    const e = new (j2(this.type))(this.capacity);
    e.set(this.buffer), this.buffer = e;
  }
}
const w0 = {
  INT8: 0,
  UINT8: 1,
  UINT8_CLAMPED: 2,
  INT16: 3,
  UINT16: 4,
  INT32: 5,
  UINT32: 6,
  FLOAT32: 9,
  FLOAT64: 10
};
function j2(r) {
  switch (r) {
    case w0.INT8:
      return Int8Array;
    case w0.UINT8:
      return Uint8Array;
    case w0.UINT8_CLAMPED:
      return Uint8ClampedArray;
    case w0.INT16:
      return Int16Array;
    case w0.UINT16:
      return Uint16Array;
    case w0.INT32:
      return Int32Array;
    case w0.UINT32:
      return Uint32Array;
    case w0.FLOAT32:
      return Float32Array;
    case w0.FLOAT64:
      return Float64Array;
    default:
      throw new Error("Unrecognized native type: " + r);
  }
}
const x0 = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
function L3() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (x0[r & 255] + x0[r >> 8 & 255] + x0[r >> 16 & 255] + x0[r >> 24 & 255] + "-" + x0[e & 255] + x0[e >> 8 & 255] + "-" + x0[e >> 16 & 15 | 64] + x0[e >> 24 & 255] + "-" + x0[t & 63 | 128] + x0[t >> 8 & 255] + "-" + x0[t >> 16 & 255] + x0[t >> 24 & 255] + x0[n & 255] + x0[n >> 8 & 255] + x0[n >> 16 & 255] + x0[n >> 24 & 255]).toLowerCase();
}
function q0(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function D3(r, e) {
  return (r % e + e) % e;
}
function $2(r, e, t) {
  return (1 - t) * r + t * e;
}
const O3 = "", G0 = "srgb", z5 = "srgb-linear", V5 = "linear", b4 = "srgb", x2 = 2e3, Fe = 2001;
class l2 {
  constructor(e, t, n, s, a, i, o, l, u) {
    l2.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, a, i, o, l, u);
  }
  set(e, t, n, s, a, i, o, l, u) {
    const c = this.elements;
    return c[0] = e, c[1] = s, c[2] = o, c[3] = t, c[4] = a, c[5] = l, c[6] = n, c[7] = i, c[8] = u, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, a = this.elements, i = n[0], o = n[3], l = n[6], u = n[1], c = n[4], p = n[7], f = n[2], d = n[5], v = n[8], y = s[0], m = s[3], g = s[6], C = s[1], S = s[4], E = s[7], w = s[2], L = s[5], F = s[8];
    return a[0] = i * y + o * C + l * w, a[3] = i * m + o * S + l * L, a[6] = i * g + o * E + l * F, a[1] = u * y + c * C + p * w, a[4] = u * m + c * S + p * L, a[7] = u * g + c * E + p * F, a[2] = f * y + d * C + v * w, a[5] = f * m + d * S + v * L, a[8] = f * g + d * E + v * F, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], a = e[3], i = e[4], o = e[5], l = e[6], u = e[7], c = e[8];
    return t * i * c - t * o * u - n * a * c + n * o * l + s * a * u - s * i * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], a = e[3], i = e[4], o = e[5], l = e[6], u = e[7], c = e[8], p = c * i - o * u, f = o * l - c * a, d = u * a - i * l, v = t * p + n * f + s * d;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / v;
    return e[0] = p * y, e[1] = (s * u - c * n) * y, e[2] = (o * n - s * i) * y, e[3] = f * y, e[4] = (c * t - s * l) * y, e[5] = (s * a - o * t) * y, e[6] = d * y, e[7] = (n * l - u * t) * y, e[8] = (i * t - n * a) * y, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, s, a, i, o) {
    const l = Math.cos(a), u = Math.sin(a);
    return this.set(
      n * l,
      n * u,
      -n * (l * i + u * o) + i + e,
      -s * u,
      s * l,
      -s * (-u * i + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(e4.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(e4.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(e4.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 9; s++)
      if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const e4 = /* @__PURE__ */ new l2(), R0 = {
  enabled: !0,
  workingColorSpace: z5,
  /**
   * Implementations of supported color spaces.
   *
   * Required:
   *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
   *	- whitePoint: reference white [ x y ]
   *	- transfer: transfer function (pre-defined)
   *	- toXYZ: Matrix3 RGB to XYZ transform
   *	- fromXYZ: Matrix3 XYZ to RGB transform
   *	- luminanceCoefficients: RGB luminance coefficients
   *
   * Optional:
   *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
   *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
   *
   * Reference:
   * - https://www.russellcottrell.com/photo/matrixCalculator.htm
   */
  spaces: {},
  convert: function(r, e, t) {
    return this.enabled === !1 || e === t || !e || !t || (this.spaces[e].transfer === b4 && (r.r = D1(r.r), r.g = D1(r.g), r.b = D1(r.b)), this.spaces[e].primaries !== this.spaces[t].primaries && (r.applyMatrix3(this.spaces[e].toXYZ), r.applyMatrix3(this.spaces[t].fromXYZ)), this.spaces[t].transfer === b4 && (r.r = O1(r.r), r.g = O1(r.g), r.b = O1(r.b))), r;
  },
  fromWorkingColorSpace: function(r, e) {
    return this.convert(r, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(r, e) {
    return this.convert(r, e, this.workingColorSpace);
  },
  getPrimaries: function(r) {
    return this.spaces[r].primaries;
  },
  getTransfer: function(r) {
    return r === O3 ? V5 : this.spaces[r].transfer;
  },
  getLuminanceCoefficients: function(r, e = this.workingColorSpace) {
    return r.fromArray(this.spaces[e].luminanceCoefficients);
  },
  define: function(r) {
    Object.assign(this.spaces, r);
  },
  // Internal APIs
  _getMatrix: function(r, e, t) {
    return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ);
  },
  _getDrawingBufferColorSpace: function(r) {
    return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function(r = this.workingColorSpace) {
    return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
  }
};
function D1(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function O1(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const Le = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], De = [0.2126, 0.7152, 0.0722], Oe = [0.3127, 0.329], Ie = /* @__PURE__ */ new l2().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Re = /* @__PURE__ */ new l2().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
R0.define({
  [z5]: {
    primaries: Le,
    whitePoint: Oe,
    transfer: V5,
    toXYZ: Ie,
    fromXYZ: Re,
    luminanceCoefficients: De,
    workingColorSpaceConfig: { unpackColorSpace: G0 },
    outputColorSpaceConfig: { drawingBufferColorSpace: G0 }
  },
  [G0]: {
    primaries: Le,
    whitePoint: Oe,
    transfer: b4,
    toXYZ: Ie,
    fromXYZ: Re,
    luminanceCoefficients: De,
    outputColorSpaceConfig: { drawingBufferColorSpace: G0 }
  }
});
const W5 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, c1 = { h: 0, s: 0, l: 0 }, b2 = { h: 0, s: 0, l: 0 };
function t4(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class re {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = G0) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, R0.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, s = R0.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, R0.toWorkingColorSpace(this, s), this;
  }
  setHSL(e, t, n, s = R0.workingColorSpace) {
    if (e = D3(e, 1), t = q0(t, 0, 1), n = q0(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const a = n <= 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - a;
      this.r = t4(i, a, e + 1 / 3), this.g = t4(i, a, e), this.b = t4(i, a, e - 1 / 3);
    }
    return R0.toWorkingColorSpace(this, s), this;
  }
  setStyle(e, t = G0) {
    function n(a) {
      a !== void 0 && parseFloat(a) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let a;
      const i = s[1], o = s[2];
      switch (i) {
        case "rgb":
        case "rgba":
          if (a = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(a[4]), this.setRGB(
              Math.min(255, parseInt(a[1], 10)) / 255,
              Math.min(255, parseInt(a[2], 10)) / 255,
              Math.min(255, parseInt(a[3], 10)) / 255,
              t
            );
          if (a = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(a[4]), this.setRGB(
              Math.min(100, parseInt(a[1], 10)) / 100,
              Math.min(100, parseInt(a[2], 10)) / 100,
              Math.min(100, parseInt(a[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (a = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(a[4]), this.setHSL(
              parseFloat(a[1]) / 360,
              parseFloat(a[2]) / 100,
              parseFloat(a[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const a = s[1], i = a.length;
      if (i === 3)
        return this.setRGB(
          parseInt(a.charAt(0), 16) / 15,
          parseInt(a.charAt(1), 16) / 15,
          parseInt(a.charAt(2), 16) / 15,
          t
        );
      if (i === 6)
        return this.setHex(parseInt(a, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = G0) {
    const n = W5[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = D1(e.r), this.g = D1(e.g), this.b = D1(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = O1(e.r), this.g = O1(e.g), this.b = O1(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = G0) {
    return R0.fromWorkingColorSpace(b0.copy(this), e), Math.round(q0(b0.r * 255, 0, 255)) * 65536 + Math.round(q0(b0.g * 255, 0, 255)) * 256 + Math.round(q0(b0.b * 255, 0, 255));
  }
  getHexString(e = G0) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = R0.workingColorSpace) {
    R0.fromWorkingColorSpace(b0.copy(this), t);
    const n = b0.r, s = b0.g, a = b0.b, i = Math.max(n, s, a), o = Math.min(n, s, a);
    let l, u;
    const c = (o + i) / 2;
    if (o === i)
      l = 0, u = 0;
    else {
      const p = i - o;
      switch (u = c <= 0.5 ? p / (i + o) : p / (2 - i - o), i) {
        case n:
          l = (s - a) / p + (s < a ? 6 : 0);
          break;
        case s:
          l = (a - n) / p + 2;
          break;
        case a:
          l = (n - s) / p + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = u, e.l = c, e;
  }
  getRGB(e, t = R0.workingColorSpace) {
    return R0.fromWorkingColorSpace(b0.copy(this), t), e.r = b0.r, e.g = b0.g, e.b = b0.b, e;
  }
  getStyle(e = G0) {
    R0.fromWorkingColorSpace(b0.copy(this), e);
    const t = b0.r, n = b0.g, s = b0.b;
    return e !== G0 ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(c1), this.setHSL(c1.h + e, c1.s + t, c1.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(c1), e.getHSL(b2);
    const n = $2(c1.h, b2.h, t), s = $2(c1.s, b2.s, t), a = $2(c1.l, b2.l, t);
    return this.setHSL(n, s, a), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, s = this.b, a = e.elements;
    return this.r = a[0] * t + a[3] * n + a[6] * s, this.g = a[1] * t + a[4] * n + a[7] * s, this.b = a[2] * t + a[5] * n + a[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const b0 = /* @__PURE__ */ new re();
re.NAMES = W5;
class i0 {
  constructor(e = 0, t = 0) {
    i0.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6], this.y = s[1] * t + s[4] * n + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(q0(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), s = Math.sin(t), a = this.x - e.x, i = this.y - e.y;
    return this.x = a * n - i * s + e.x, this.y = a * s + i * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class I3 {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = s;
  }
  static slerpFlat(e, t, n, s, a, i, o) {
    let l = n[s + 0], u = n[s + 1], c = n[s + 2], p = n[s + 3];
    const f = a[i + 0], d = a[i + 1], v = a[i + 2], y = a[i + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = u, e[t + 2] = c, e[t + 3] = p;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = d, e[t + 2] = v, e[t + 3] = y;
      return;
    }
    if (p !== y || l !== f || u !== d || c !== v) {
      let m = 1 - o;
      const g = l * f + u * d + c * v + p * y, C = g >= 0 ? 1 : -1, S = 1 - g * g;
      if (S > Number.EPSILON) {
        const w = Math.sqrt(S), L = Math.atan2(w, g * C);
        m = Math.sin(m * L) / w, o = Math.sin(o * L) / w;
      }
      const E = o * C;
      if (l = l * m + f * E, u = u * m + d * E, c = c * m + v * E, p = p * m + y * E, m === 1 - o) {
        const w = 1 / Math.sqrt(l * l + u * u + c * c + p * p);
        l *= w, u *= w, c *= w, p *= w;
      }
    }
    e[t] = l, e[t + 1] = u, e[t + 2] = c, e[t + 3] = p;
  }
  static multiplyQuaternionsFlat(e, t, n, s, a, i) {
    const o = n[s], l = n[s + 1], u = n[s + 2], c = n[s + 3], p = a[i], f = a[i + 1], d = a[i + 2], v = a[i + 3];
    return e[t] = o * v + c * p + l * d - u * f, e[t + 1] = l * v + c * f + u * p - o * d, e[t + 2] = u * v + c * d + o * f - l * p, e[t + 3] = c * v - o * p - l * f - u * d, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, s) {
    return this._x = e, this._y = t, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, s = e._y, a = e._z, i = e._order, o = Math.cos, l = Math.sin, u = o(n / 2), c = o(s / 2), p = o(a / 2), f = l(n / 2), d = l(s / 2), v = l(a / 2);
    switch (i) {
      case "XYZ":
        this._x = f * c * p + u * d * v, this._y = u * d * p - f * c * v, this._z = u * c * v + f * d * p, this._w = u * c * p - f * d * v;
        break;
      case "YXZ":
        this._x = f * c * p + u * d * v, this._y = u * d * p - f * c * v, this._z = u * c * v - f * d * p, this._w = u * c * p + f * d * v;
        break;
      case "ZXY":
        this._x = f * c * p - u * d * v, this._y = u * d * p + f * c * v, this._z = u * c * v + f * d * p, this._w = u * c * p - f * d * v;
        break;
      case "ZYX":
        this._x = f * c * p - u * d * v, this._y = u * d * p + f * c * v, this._z = u * c * v - f * d * p, this._w = u * c * p + f * d * v;
        break;
      case "YZX":
        this._x = f * c * p + u * d * v, this._y = u * d * p + f * c * v, this._z = u * c * v - f * d * p, this._w = u * c * p - f * d * v;
        break;
      case "XZY":
        this._x = f * c * p - u * d * v, this._y = u * d * p - f * c * v, this._z = u * c * v + f * d * p, this._w = u * c * p + f * d * v;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + i);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, s = Math.sin(n);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], s = t[4], a = t[8], i = t[1], o = t[5], l = t[9], u = t[2], c = t[6], p = t[10], f = n + o + p;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (c - l) * d, this._y = (a - u) * d, this._z = (i - s) * d;
    } else if (n > o && n > p) {
      const d = 2 * Math.sqrt(1 + n - o - p);
      this._w = (c - l) / d, this._x = 0.25 * d, this._y = (s + i) / d, this._z = (a + u) / d;
    } else if (o > p) {
      const d = 2 * Math.sqrt(1 + o - n - p);
      this._w = (a - u) / d, this._x = (s + i) / d, this._y = 0.25 * d, this._z = (l + c) / d;
    } else {
      const d = 2 * Math.sqrt(1 + p - n - o);
      this._w = (i - s) / d, this._x = (a + u) / d, this._y = (l + c) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(q0(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const s = Math.min(1, t / n);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, s = e._y, a = e._z, i = e._w, o = t._x, l = t._y, u = t._z, c = t._w;
    return this._x = n * c + i * o + s * u - a * l, this._y = s * c + i * l + a * o - n * u, this._z = a * c + i * u + n * l - s * o, this._w = i * c - n * o - s * l - a * u, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, s = this._y, a = this._z, i = this._w;
    let o = i * e._w + n * e._x + s * e._y + a * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = i, this._x = n, this._y = s, this._z = a, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return this._w = d * i + t * this._w, this._x = d * n + t * this._x, this._y = d * s + t * this._y, this._z = d * a + t * this._z, this.normalize(), this;
    }
    const u = Math.sqrt(l), c = Math.atan2(u, o), p = Math.sin((1 - t) * c) / u, f = Math.sin(t * c) / u;
    return this._w = i * p + this._w * f, this._x = n * p + this._x * f, this._y = s * p + this._y * f, this._z = a * p + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), a = Math.sqrt(n);
    return this.set(
      s * Math.sin(e),
      s * Math.cos(e),
      a * Math.sin(t),
      a * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class K {
  constructor(e = 0, t = 0, n = 0) {
    K.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Me.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Me.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, s = this.z, a = e.elements;
    return this.x = a[0] * t + a[3] * n + a[6] * s, this.y = a[1] * t + a[4] * n + a[7] * s, this.z = a[2] * t + a[5] * n + a[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, s = this.z, a = e.elements, i = 1 / (a[3] * t + a[7] * n + a[11] * s + a[15]);
    return this.x = (a[0] * t + a[4] * n + a[8] * s + a[12]) * i, this.y = (a[1] * t + a[5] * n + a[9] * s + a[13]) * i, this.z = (a[2] * t + a[6] * n + a[10] * s + a[14]) * i, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, s = this.z, a = e.x, i = e.y, o = e.z, l = e.w, u = 2 * (i * s - o * n), c = 2 * (o * t - a * s), p = 2 * (a * n - i * t);
    return this.x = t + l * u + i * p - o * c, this.y = n + l * c + o * u - a * p, this.z = s + l * p + a * c - i * u, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, s = this.z, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * s, this.y = a[1] * t + a[5] * n + a[9] * s, this.z = a[2] * t + a[6] * n + a[10] * s, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, s = e.y, a = e.z, i = t.x, o = t.y, l = t.z;
    return this.x = s * l - a * o, this.y = a * i - n * l, this.z = n * o - s * i, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return r4.copy(this).projectOnVector(e), this.sub(r4);
  }
  reflect(e) {
    return this.sub(r4.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(q0(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(n), this.y = Math.cos(t) * e, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = s, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const r4 = /* @__PURE__ */ new K(), Me = /* @__PURE__ */ new I3();
class q1 {
  constructor(e, t, n, s, a, i, o, l, u, c, p, f, d, v, y, m) {
    q1.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, s, a, i, o, l, u, c, p, f, d, v, y, m);
  }
  set(e, t, n, s, a, i, o, l, u, c, p, f, d, v, y, m) {
    const g = this.elements;
    return g[0] = e, g[4] = t, g[8] = n, g[12] = s, g[1] = a, g[5] = i, g[9] = o, g[13] = l, g[2] = u, g[6] = c, g[10] = p, g[14] = f, g[3] = d, g[7] = v, g[11] = y, g[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new q1().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, s = 1 / w1.setFromMatrixColumn(e, 0).length(), a = 1 / w1.setFromMatrixColumn(e, 1).length(), i = 1 / w1.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * s, t[1] = n[1] * s, t[2] = n[2] * s, t[3] = 0, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = 0, t[8] = n[8] * i, t[9] = n[9] * i, t[10] = n[10] * i, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, s = e.y, a = e.z, i = Math.cos(n), o = Math.sin(n), l = Math.cos(s), u = Math.sin(s), c = Math.cos(a), p = Math.sin(a);
    if (e.order === "XYZ") {
      const f = i * c, d = i * p, v = o * c, y = o * p;
      t[0] = l * c, t[4] = -l * p, t[8] = u, t[1] = d + v * u, t[5] = f - y * u, t[9] = -o * l, t[2] = y - f * u, t[6] = v + d * u, t[10] = i * l;
    } else if (e.order === "YXZ") {
      const f = l * c, d = l * p, v = u * c, y = u * p;
      t[0] = f + y * o, t[4] = v * o - d, t[8] = i * u, t[1] = i * p, t[5] = i * c, t[9] = -o, t[2] = d * o - v, t[6] = y + f * o, t[10] = i * l;
    } else if (e.order === "ZXY") {
      const f = l * c, d = l * p, v = u * c, y = u * p;
      t[0] = f - y * o, t[4] = -i * p, t[8] = v + d * o, t[1] = d + v * o, t[5] = i * c, t[9] = y - f * o, t[2] = -i * u, t[6] = o, t[10] = i * l;
    } else if (e.order === "ZYX") {
      const f = i * c, d = i * p, v = o * c, y = o * p;
      t[0] = l * c, t[4] = v * u - d, t[8] = f * u + y, t[1] = l * p, t[5] = y * u + f, t[9] = d * u - v, t[2] = -u, t[6] = o * l, t[10] = i * l;
    } else if (e.order === "YZX") {
      const f = i * l, d = i * u, v = o * l, y = o * u;
      t[0] = l * c, t[4] = y - f * p, t[8] = v * p + d, t[1] = p, t[5] = i * c, t[9] = -o * c, t[2] = -u * c, t[6] = d * p + v, t[10] = f - y * p;
    } else if (e.order === "XZY") {
      const f = i * l, d = i * u, v = o * l, y = o * u;
      t[0] = l * c, t[4] = -p, t[8] = u * c, t[1] = f * p + y, t[5] = i * c, t[9] = d * p - v, t[2] = v * p - d, t[6] = o * c, t[10] = y * p + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(R3, e, M3);
  }
  lookAt(e, t, n) {
    const s = this.elements;
    return k0.subVectors(e, t), k0.lengthSq() === 0 && (k0.z = 1), k0.normalize(), f1.crossVectors(n, k0), f1.lengthSq() === 0 && (Math.abs(n.z) === 1 ? k0.x += 1e-4 : k0.z += 1e-4, k0.normalize(), f1.crossVectors(n, k0)), f1.normalize(), S2.crossVectors(k0, f1), s[0] = f1.x, s[4] = S2.x, s[8] = k0.x, s[1] = f1.y, s[5] = S2.y, s[9] = k0.y, s[2] = f1.z, s[6] = S2.z, s[10] = k0.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, s = t.elements, a = this.elements, i = n[0], o = n[4], l = n[8], u = n[12], c = n[1], p = n[5], f = n[9], d = n[13], v = n[2], y = n[6], m = n[10], g = n[14], C = n[3], S = n[7], E = n[11], w = n[15], L = s[0], F = s[4], A = s[8], k = s[12], O = s[1], M = s[5], H = s[9], e0 = s[13], Z = s[2], Q = s[6], j = s[10], t0 = s[14], s0 = s[3], r0 = s[7], a0 = s[11], W = s[15];
    return a[0] = i * L + o * O + l * Z + u * s0, a[4] = i * F + o * M + l * Q + u * r0, a[8] = i * A + o * H + l * j + u * a0, a[12] = i * k + o * e0 + l * t0 + u * W, a[1] = c * L + p * O + f * Z + d * s0, a[5] = c * F + p * M + f * Q + d * r0, a[9] = c * A + p * H + f * j + d * a0, a[13] = c * k + p * e0 + f * t0 + d * W, a[2] = v * L + y * O + m * Z + g * s0, a[6] = v * F + y * M + m * Q + g * r0, a[10] = v * A + y * H + m * j + g * a0, a[14] = v * k + y * e0 + m * t0 + g * W, a[3] = C * L + S * O + E * Z + w * s0, a[7] = C * F + S * M + E * Q + w * r0, a[11] = C * A + S * H + E * j + w * a0, a[15] = C * k + S * e0 + E * t0 + w * W, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], s = e[8], a = e[12], i = e[1], o = e[5], l = e[9], u = e[13], c = e[2], p = e[6], f = e[10], d = e[14], v = e[3], y = e[7], m = e[11], g = e[15];
    return v * (+a * l * p - s * u * p - a * o * f + n * u * f + s * o * d - n * l * d) + y * (+t * l * d - t * u * f + a * i * f - s * i * d + s * u * c - a * l * c) + m * (+t * u * p - t * o * d - a * i * p + n * i * d + a * o * c - n * u * c) + g * (-s * o * c - t * l * p + t * o * f + s * i * p - n * i * f + n * l * c);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], s = e[2], a = e[3], i = e[4], o = e[5], l = e[6], u = e[7], c = e[8], p = e[9], f = e[10], d = e[11], v = e[12], y = e[13], m = e[14], g = e[15], C = p * m * u - y * f * u + y * l * d - o * m * d - p * l * g + o * f * g, S = v * f * u - c * m * u - v * l * d + i * m * d + c * l * g - i * f * g, E = c * y * u - v * p * u + v * o * d - i * y * d - c * o * g + i * p * g, w = v * p * l - c * y * l - v * o * f + i * y * f + c * o * m - i * p * m, L = t * C + n * S + s * E + a * w;
    if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const F = 1 / L;
    return e[0] = C * F, e[1] = (y * f * a - p * m * a - y * s * d + n * m * d + p * s * g - n * f * g) * F, e[2] = (o * m * a - y * l * a + y * s * u - n * m * u - o * s * g + n * l * g) * F, e[3] = (p * l * a - o * f * a - p * s * u + n * f * u + o * s * d - n * l * d) * F, e[4] = S * F, e[5] = (c * m * a - v * f * a + v * s * d - t * m * d - c * s * g + t * f * g) * F, e[6] = (v * l * a - i * m * a - v * s * u + t * m * u + i * s * g - t * l * g) * F, e[7] = (i * f * a - c * l * a + c * s * u - t * f * u - i * s * d + t * l * d) * F, e[8] = E * F, e[9] = (v * p * a - c * y * a - v * n * d + t * y * d + c * n * g - t * p * g) * F, e[10] = (i * y * a - v * o * a + v * n * u - t * y * u - i * n * g + t * o * g) * F, e[11] = (c * o * a - i * p * a - c * n * u + t * p * u + i * n * d - t * o * d) * F, e[12] = w * F, e[13] = (c * y * s - v * p * s + v * n * f - t * y * f - c * n * m + t * p * m) * F, e[14] = (v * o * s - i * y * s - v * n * l + t * y * l + i * n * m - t * o * m) * F, e[15] = (i * p * s - c * o * s + c * n * l - t * p * l - i * n * f + t * o * f) * F, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, s = e.y, a = e.z;
    return t[0] *= n, t[4] *= s, t[8] *= a, t[1] *= n, t[5] *= s, t[9] *= a, t[2] *= n, t[6] *= s, t[10] *= a, t[3] *= n, t[7] *= s, t[11] *= a, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), s = Math.sin(t), a = 1 - n, i = e.x, o = e.y, l = e.z, u = a * i, c = a * o;
    return this.set(
      u * i + n,
      u * o - s * l,
      u * l + s * o,
      0,
      u * o + s * l,
      c * o + n,
      c * l - s * i,
      0,
      u * l - s * o,
      c * l + s * i,
      a * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, s, a, i) {
    return this.set(
      1,
      n,
      a,
      0,
      e,
      1,
      i,
      0,
      t,
      s,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const s = this.elements, a = t._x, i = t._y, o = t._z, l = t._w, u = a + a, c = i + i, p = o + o, f = a * u, d = a * c, v = a * p, y = i * c, m = i * p, g = o * p, C = l * u, S = l * c, E = l * p, w = n.x, L = n.y, F = n.z;
    return s[0] = (1 - (y + g)) * w, s[1] = (d + E) * w, s[2] = (v - S) * w, s[3] = 0, s[4] = (d - E) * L, s[5] = (1 - (f + g)) * L, s[6] = (m + C) * L, s[7] = 0, s[8] = (v + S) * F, s[9] = (m - C) * F, s[10] = (1 - (f + y)) * F, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, n) {
    const s = this.elements;
    let a = w1.set(s[0], s[1], s[2]).length();
    const i = w1.set(s[4], s[5], s[6]).length(), o = w1.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (a = -a), e.x = s[12], e.y = s[13], e.z = s[14], B0.copy(this);
    const u = 1 / a, c = 1 / i, p = 1 / o;
    return B0.elements[0] *= u, B0.elements[1] *= u, B0.elements[2] *= u, B0.elements[4] *= c, B0.elements[5] *= c, B0.elements[6] *= c, B0.elements[8] *= p, B0.elements[9] *= p, B0.elements[10] *= p, t.setFromRotationMatrix(B0), n.x = a, n.y = i, n.z = o, this;
  }
  makePerspective(e, t, n, s, a, i, o = x2) {
    const l = this.elements, u = 2 * a / (t - e), c = 2 * a / (n - s), p = (t + e) / (t - e), f = (n + s) / (n - s);
    let d, v;
    if (o === x2)
      d = -(i + a) / (i - a), v = -2 * i * a / (i - a);
    else if (o === Fe)
      d = -i / (i - a), v = -i * a / (i - a);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = u, l[4] = 0, l[8] = p, l[12] = 0, l[1] = 0, l[5] = c, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = d, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, s, a, i, o = x2) {
    const l = this.elements, u = 1 / (t - e), c = 1 / (n - s), p = 1 / (i - a), f = (t + e) * u, d = (n + s) * c;
    let v, y;
    if (o === x2)
      v = (i + a) * p, y = -2 * p;
    else if (o === Fe)
      v = a * p, y = -1 * p;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * u, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * c, l[9] = 0, l[13] = -d, l[2] = 0, l[6] = 0, l[10] = y, l[14] = -v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let s = 0; s < 16; s++)
      if (t[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const w1 = /* @__PURE__ */ new K(), B0 = /* @__PURE__ */ new q1(), R3 = /* @__PURE__ */ new K(0, 0, 0), M3 = /* @__PURE__ */ new K(1, 1, 1), f1 = /* @__PURE__ */ new K(), S2 = /* @__PURE__ */ new K(), k0 = /* @__PURE__ */ new K();
class j0 {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  // Get sequence of points using getPoint( t )
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  // Get total curve arc length
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, s = this.getPoint(0), a = 0;
    t.push(0);
    for (let i = 1; i <= e; i++)
      n = this.getPoint(i / e), a += n.distanceTo(s), t.push(a), s = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let s = 0;
    const a = n.length;
    let i;
    t ? i = t : i = e * n[a - 1];
    let o = 0, l = a - 1, u;
    for (; o <= l; )
      if (s = Math.floor(o + (l - o) / 2), u = n[s] - i, u < 0)
        o = s + 1;
      else if (u > 0)
        l = s - 1;
      else {
        l = s;
        break;
      }
    if (s = l, n[s] === i)
      return s / (a - 1);
    const c = n[s], f = n[s + 1] - c, d = (i - c) / f;
    return (s + d) / (a - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let s = e - 1e-4, a = e + 1e-4;
    s < 0 && (s = 0), a > 1 && (a = 1);
    const i = this.getPoint(s), o = this.getPoint(a), l = t || (i.isVector2 ? new i0() : new K());
    return l.copy(o).sub(i).normalize(), l;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new K(), s = [], a = [], i = [], o = new K(), l = new q1();
    for (let d = 0; d <= e; d++) {
      const v = d / e;
      s[d] = this.getTangentAt(v, new K());
    }
    a[0] = new K(), i[0] = new K();
    let u = Number.MAX_VALUE;
    const c = Math.abs(s[0].x), p = Math.abs(s[0].y), f = Math.abs(s[0].z);
    c <= u && (u = c, n.set(1, 0, 0)), p <= u && (u = p, n.set(0, 1, 0)), f <= u && n.set(0, 0, 1), o.crossVectors(s[0], n).normalize(), a[0].crossVectors(s[0], o), i[0].crossVectors(s[0], a[0]);
    for (let d = 1; d <= e; d++) {
      if (a[d] = a[d - 1].clone(), i[d] = i[d - 1].clone(), o.crossVectors(s[d - 1], s[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const v = Math.acos(q0(s[d - 1].dot(s[d]), -1, 1));
        a[d].applyMatrix4(l.makeRotationAxis(o, v));
      }
      i[d].crossVectors(s[d], a[d]);
    }
    if (t === !0) {
      let d = Math.acos(q0(a[0].dot(a[e]), -1, 1));
      d /= e, s[0].dot(o.crossVectors(a[0], a[e])) > 0 && (d = -d);
      for (let v = 1; v <= e; v++)
        a[v].applyMatrix4(l.makeRotationAxis(s[v], d * v)), i[v].crossVectors(s[v], a[v]);
    }
    return {
      tangents: s,
      normals: a,
      binormals: i
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class ne extends j0 {
  constructor(e = 0, t = 0, n = 1, s = 1, a = 0, i = Math.PI * 2, o = !1, l = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = s, this.aStartAngle = a, this.aEndAngle = i, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(e, t = new i0()) {
    const n = t, s = Math.PI * 2;
    let a = this.aEndAngle - this.aStartAngle;
    const i = Math.abs(a) < Number.EPSILON;
    for (; a < 0; ) a += s;
    for (; a > s; ) a -= s;
    a < Number.EPSILON && (i ? a = 0 : a = s), this.aClockwise === !0 && !i && (a === s ? a = -s : a = a - s);
    const o = this.aStartAngle + e * a;
    let l = this.aX + this.xRadius * Math.cos(o), u = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const c = Math.cos(this.aRotation), p = Math.sin(this.aRotation), f = l - this.aX, d = u - this.aY;
      l = f * c - d * p + this.aX, u = f * p + d * c + this.aY;
    }
    return n.set(l, u);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class _3 extends ne {
  constructor(e, t, n, s, a, i) {
    super(e, t, n, n, s, a, i), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function se() {
  let r = 0, e = 0, t = 0, n = 0;
  function s(a, i, o, l) {
    r = a, e = o, t = -3 * a + 3 * i - 2 * o - l, n = 2 * a - 2 * i + o + l;
  }
  return {
    initCatmullRom: function(a, i, o, l, u) {
      s(i, o, u * (o - a), u * (l - i));
    },
    initNonuniformCatmullRom: function(a, i, o, l, u, c, p) {
      let f = (i - a) / u - (o - a) / (u + c) + (o - i) / c, d = (o - i) / c - (l - i) / (c + p) + (l - o) / p;
      f *= c, d *= c, s(i, o, f, d);
    },
    calc: function(a) {
      const i = a * a, o = i * a;
      return r + e * a + t * i + n * o;
    }
  };
}
const T2 = /* @__PURE__ */ new K(), n4 = /* @__PURE__ */ new se(), s4 = /* @__PURE__ */ new se(), a4 = /* @__PURE__ */ new se();
class N3 extends j0 {
  constructor(e = [], t = !1, n = "centripetal", s = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = s;
  }
  getPoint(e, t = new K()) {
    const n = t, s = this.points, a = s.length, i = (a - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(i), l = i - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / a) + 1) * a : l === 0 && o === a - 1 && (o = a - 2, l = 1);
    let u, c;
    this.closed || o > 0 ? u = s[(o - 1) % a] : (T2.subVectors(s[0], s[1]).add(s[0]), u = T2);
    const p = s[o % a], f = s[(o + 1) % a];
    if (this.closed || o + 2 < a ? c = s[(o + 2) % a] : (T2.subVectors(s[a - 1], s[a - 2]).add(s[a - 1]), c = T2), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let v = Math.pow(u.distanceToSquared(p), d), y = Math.pow(p.distanceToSquared(f), d), m = Math.pow(f.distanceToSquared(c), d);
      y < 1e-4 && (y = 1), v < 1e-4 && (v = y), m < 1e-4 && (m = y), n4.initNonuniformCatmullRom(u.x, p.x, f.x, c.x, v, y, m), s4.initNonuniformCatmullRom(u.y, p.y, f.y, c.y, v, y, m), a4.initNonuniformCatmullRom(u.z, p.z, f.z, c.z, v, y, m);
    } else this.curveType === "catmullrom" && (n4.initCatmullRom(u.x, p.x, f.x, c.x, this.tension), s4.initCatmullRom(u.y, p.y, f.y, c.y, this.tension), a4.initCatmullRom(u.z, p.z, f.z, c.z, this.tension));
    return n.set(
      n4.calc(l),
      s4.calc(l),
      a4.calc(l)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const s = e.points[t];
      this.points.push(s.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const s = this.points[t];
      e.points.push(s.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const s = e.points[t];
      this.points.push(new K().fromArray(s));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function _e(r, e, t, n, s) {
  const a = (n - e) * 0.5, i = (s - t) * 0.5, o = r * r, l = r * o;
  return (2 * t - 2 * n + a + i) * l + (-3 * t + 3 * n - 2 * a - i) * o + a * r + t;
}
function B3(r, e) {
  const t = 1 - r;
  return t * t * e;
}
function U3(r, e) {
  return 2 * (1 - r) * r * e;
}
function G3(r, e) {
  return r * r * e;
}
function Y1(r, e, t, n) {
  return B3(r, e) + U3(r, t) + G3(r, n);
}
function H3(r, e) {
  const t = 1 - r;
  return t * t * t * e;
}
function z3(r, e) {
  const t = 1 - r;
  return 3 * t * t * r * e;
}
function V3(r, e) {
  return 3 * (1 - r) * r * r * e;
}
function W3(r, e) {
  return r * r * r * e;
}
function J1(r, e, t, n, s) {
  return H3(r, e) + z3(r, t) + V3(r, n) + W3(r, s);
}
class X5 extends j0 {
  constructor(e = new i0(), t = new i0(), n = new i0(), s = new i0()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = s;
  }
  getPoint(e, t = new i0()) {
    const n = t, s = this.v0, a = this.v1, i = this.v2, o = this.v3;
    return n.set(
      J1(e, s.x, a.x, i.x, o.x),
      J1(e, s.y, a.y, i.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class X3 extends j0 {
  constructor(e = new K(), t = new K(), n = new K(), s = new K()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = s;
  }
  getPoint(e, t = new K()) {
    const n = t, s = this.v0, a = this.v1, i = this.v2, o = this.v3;
    return n.set(
      J1(e, s.x, a.x, i.x, o.x),
      J1(e, s.y, a.y, i.y, o.y),
      J1(e, s.z, a.z, i.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Y5 extends j0 {
  constructor(e = new i0(), t = new i0()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new i0()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new i0()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Y3 extends j0 {
  constructor(e = new K(), t = new K()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new K()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new K()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class J5 extends j0 {
  constructor(e = new i0(), t = new i0(), n = new i0()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new i0()) {
    const n = t, s = this.v0, a = this.v1, i = this.v2;
    return n.set(
      Y1(e, s.x, a.x, i.x),
      Y1(e, s.y, a.y, i.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class J3 extends j0 {
  constructor(e = new K(), t = new K(), n = new K()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new K()) {
    const n = t, s = this.v0, a = this.v1, i = this.v2;
    return n.set(
      Y1(e, s.x, a.x, i.x),
      Y1(e, s.y, a.y, i.y),
      Y1(e, s.z, a.z, i.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Z5 extends j0 {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new i0()) {
    const n = t, s = this.points, a = (s.length - 1) * e, i = Math.floor(a), o = a - i, l = s[i === 0 ? i : i - 1], u = s[i], c = s[i > s.length - 2 ? s.length - 1 : i + 1], p = s[i > s.length - 3 ? s.length - 1 : i + 2];
    return n.set(
      _e(o, l.x, u.x, c.x, p.x),
      _e(o, l.y, u.y, c.y, p.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const s = e.points[t];
      this.points.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const s = this.points[t];
      e.points.push(s.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const s = e.points[t];
      this.points.push(new i0().fromArray(s));
    }
    return this;
  }
}
const Ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArcCurve: _3,
  CatmullRomCurve3: N3,
  CubicBezierCurve: X5,
  CubicBezierCurve3: X3,
  EllipseCurve: ne,
  LineCurve: Y5,
  LineCurve3: Y3,
  QuadraticBezierCurve: J5,
  QuadraticBezierCurve3: J3,
  SplineCurve: Z5
}, Symbol.toStringTag, { value: "Module" }));
class Z3 extends j0 {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new Ne[n](t, e));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(e, t) {
    const n = e * this.getLength(), s = this.getCurveLengths();
    let a = 0;
    for (; a < s.length; ) {
      if (s[a] >= n) {
        const i = s[a] - n, o = this.curves[a], l = o.getLength(), u = l === 0 ? 0 : 1 - i / l;
        return o.getPointAt(u, t);
      }
      a++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, s = this.curves.length; n < s; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let s = 0, a = this.curves; s < a.length; s++) {
      const i = a[s], o = i.isEllipseCurve ? e * 2 : i.isLineCurve || i.isLineCurve3 ? 1 : i.isSplineCurve ? e * i.points.length : e, l = i.getPoints(o);
      for (let u = 0; u < l.length; u++) {
        const c = l[u];
        n && n.equals(c) || (t.push(c), n = c);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const s = e.curves[t];
      this.curves.push(s.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const s = this.curves[t];
      e.curves.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const s = e.curves[t];
      this.curves.push(new Ne[s.type]().fromJSON(s));
    }
    return this;
  }
}
let S4 = class extends Z3 {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new i0(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new Y5(this.currentPoint.clone(), new i0(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, s) {
    const a = new J5(
      this.currentPoint.clone(),
      new i0(e, t),
      new i0(n, s)
    );
    return this.curves.push(a), this.currentPoint.set(n, s), this;
  }
  bezierCurveTo(e, t, n, s, a, i) {
    const o = new X5(
      this.currentPoint.clone(),
      new i0(e, t),
      new i0(n, s),
      new i0(a, i)
    );
    return this.curves.push(o), this.currentPoint.set(a, i), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new Z5(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, s, a, i) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(
      e + o,
      t + l,
      n,
      s,
      a,
      i
    ), this;
  }
  absarc(e, t, n, s, a, i) {
    return this.absellipse(e, t, n, n, s, a, i), this;
  }
  ellipse(e, t, n, s, a, i, o, l) {
    const u = this.currentPoint.x, c = this.currentPoint.y;
    return this.absellipse(e + u, t + c, n, s, a, i, o, l), this;
  }
  absellipse(e, t, n, s, a, i, o, l) {
    const u = new ne(e, t, n, s, a, i, o, l);
    if (this.curves.length > 0) {
      const p = u.getPoint(0);
      p.equals(this.currentPoint) || this.lineTo(p.x, p.y);
    }
    this.curves.push(u);
    const c = u.getPoint(1);
    return this.currentPoint.copy(c), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
};
class i4 extends S4 {
  constructor(e) {
    super(e), this.uuid = L3(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, s = this.holes.length; n < s; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const s = e.holes[t];
      this.holes.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const s = this.holes[t];
      e.holes.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const s = e.holes[t];
      this.holes.push(new S4().fromJSON(s));
    }
    return this;
  }
}
const q3 = {
  triangulate: function(r, e, t = 2) {
    const n = e && e.length, s = n ? e[0] * t : r.length;
    let a = q5(r, 0, s, t, !0);
    const i = [];
    if (!a || a.next === a.prev) return i;
    let o, l, u, c, p, f, d;
    if (n && (a = et(r, e, a, t)), r.length > 80 * t) {
      o = u = r[0], l = c = r[1];
      for (let v = t; v < s; v += t)
        p = r[v], f = r[v + 1], p < o && (o = p), f < l && (l = f), p > u && (u = p), f > c && (c = f);
      d = Math.max(u - o, c - l), d = d !== 0 ? 32767 / d : 0;
    }
    return Q1(a, i, t, o, l, d, 0), i;
  }
};
function q5(r, e, t, n, s) {
  let a, i;
  if (s === ct(r, e, t, n) > 0)
    for (a = e; a < t; a += n) i = Be(a, r[a], r[a + 1], i);
  else
    for (a = t - n; a >= e; a -= n) i = Be(a, r[a], r[a + 1], i);
  return i && Y2(i, i.next) && (j1(i), i = i.next), i;
}
function A1(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (Y2(t, t.next) || o0(t.prev, t, t.next) === 0)) {
      if (j1(t), t = e = t.prev, t === t.next) break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function Q1(r, e, t, n, s, a, i) {
  if (!r) return;
  !i && a && at(r, n, s, a);
  let o = r, l, u;
  for (; r.prev !== r.next; ) {
    if (l = r.prev, u = r.next, a ? K3(r, n, s, a) : Q3(r)) {
      e.push(l.i / t | 0), e.push(r.i / t | 0), e.push(u.i / t | 0), j1(r), r = u.next, o = u.next;
      continue;
    }
    if (r = u, r === o) {
      i ? i === 1 ? (r = j3(A1(r), e, t), Q1(r, e, t, n, s, a, 2)) : i === 2 && $3(r, e, t, n, s, a) : Q1(A1(r), e, t, n, s, a, 1);
      break;
    }
  }
}
function Q3(r) {
  const e = r.prev, t = r, n = r.next;
  if (o0(e, t, n) >= 0) return !1;
  const s = e.x, a = t.x, i = n.x, o = e.y, l = t.y, u = n.y, c = s < a ? s < i ? s : i : a < i ? a : i, p = o < l ? o < u ? o : u : l < u ? l : u, f = s > a ? s > i ? s : i : a > i ? a : i, d = o > l ? o > u ? o : u : l > u ? l : u;
  let v = n.next;
  for (; v !== e; ) {
    if (v.x >= c && v.x <= f && v.y >= p && v.y <= d && L1(s, o, a, l, i, u, v.x, v.y) && o0(v.prev, v, v.next) >= 0) return !1;
    v = v.next;
  }
  return !0;
}
function K3(r, e, t, n) {
  const s = r.prev, a = r, i = r.next;
  if (o0(s, a, i) >= 0) return !1;
  const o = s.x, l = a.x, u = i.x, c = s.y, p = a.y, f = i.y, d = o < l ? o < u ? o : u : l < u ? l : u, v = c < p ? c < f ? c : f : p < f ? p : f, y = o > l ? o > u ? o : u : l > u ? l : u, m = c > p ? c > f ? c : f : p > f ? p : f, g = T4(d, v, e, t, n), C = T4(y, m, e, t, n);
  let S = r.prevZ, E = r.nextZ;
  for (; S && S.z >= g && E && E.z <= C; ) {
    if (S.x >= d && S.x <= y && S.y >= v && S.y <= m && S !== s && S !== i && L1(o, c, l, p, u, f, S.x, S.y) && o0(S.prev, S, S.next) >= 0 || (S = S.prevZ, E.x >= d && E.x <= y && E.y >= v && E.y <= m && E !== s && E !== i && L1(o, c, l, p, u, f, E.x, E.y) && o0(E.prev, E, E.next) >= 0)) return !1;
    E = E.nextZ;
  }
  for (; S && S.z >= g; ) {
    if (S.x >= d && S.x <= y && S.y >= v && S.y <= m && S !== s && S !== i && L1(o, c, l, p, u, f, S.x, S.y) && o0(S.prev, S, S.next) >= 0) return !1;
    S = S.prevZ;
  }
  for (; E && E.z <= C; ) {
    if (E.x >= d && E.x <= y && E.y >= v && E.y <= m && E !== s && E !== i && L1(o, c, l, p, u, f, E.x, E.y) && o0(E.prev, E, E.next) >= 0) return !1;
    E = E.nextZ;
  }
  return !0;
}
function j3(r, e, t) {
  let n = r;
  do {
    const s = n.prev, a = n.next.next;
    !Y2(s, a) && Q5(s, n, n.next, a) && K1(s, a) && K1(a, s) && (e.push(s.i / t | 0), e.push(n.i / t | 0), e.push(a.i / t | 0), j1(n), j1(n.next), n = r = a), n = n.next;
  } while (n !== r);
  return A1(n);
}
function $3(r, e, t, n, s, a) {
  let i = r;
  do {
    let o = i.next.next;
    for (; o !== i.prev; ) {
      if (i.i !== o.i && lt(i, o)) {
        let l = K5(i, o);
        i = A1(i, i.next), l = A1(l, l.next), Q1(i, e, t, n, s, a, 0), Q1(l, e, t, n, s, a, 0);
        return;
      }
      o = o.next;
    }
    i = i.next;
  } while (i !== r);
}
function et(r, e, t, n) {
  const s = [];
  let a, i, o, l, u;
  for (a = 0, i = e.length; a < i; a++)
    o = e[a] * n, l = a < i - 1 ? e[a + 1] * n : r.length, u = q5(r, o, l, n, !1), u === u.next && (u.steiner = !0), s.push(ot(u));
  for (s.sort(tt), a = 0; a < s.length; a++)
    t = rt(s[a], t);
  return t;
}
function tt(r, e) {
  return r.x - e.x;
}
function rt(r, e) {
  const t = nt(r, e);
  if (!t)
    return e;
  const n = K5(t, r);
  return A1(n, n.next), A1(t, t.next);
}
function nt(r, e) {
  let t = e, n = -1 / 0, s;
  const a = r.x, i = r.y;
  do {
    if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
      const f = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (f <= a && f > n && (n = f, s = t.x < t.next.x ? t : t.next, f === a))
        return s;
    }
    t = t.next;
  } while (t !== e);
  if (!s) return null;
  const o = s, l = s.x, u = s.y;
  let c = 1 / 0, p;
  t = s;
  do
    a >= t.x && t.x >= l && a !== t.x && L1(i < u ? a : n, i, l, u, i < u ? n : a, i, t.x, t.y) && (p = Math.abs(i - t.y) / (a - t.x), K1(t, r) && (p < c || p === c && (t.x > s.x || t.x === s.x && st(s, t))) && (s = t, c = p)), t = t.next;
  while (t !== o);
  return s;
}
function st(r, e) {
  return o0(r.prev, r, e.prev) < 0 && o0(e.next, r, r.next) < 0;
}
function at(r, e, t, n) {
  let s = r;
  do
    s.z === 0 && (s.z = T4(s.x, s.y, e, t, n)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== r);
  s.prevZ.nextZ = null, s.prevZ = null, it(s);
}
function it(r) {
  let e, t, n, s, a, i, o, l, u = 1;
  do {
    for (t = r, r = null, a = null, i = 0; t; ) {
      for (i++, n = t, o = 0, e = 0; e < u && (o++, n = n.nextZ, !!n); e++)
        ;
      for (l = u; o > 0 || l > 0 && n; )
        o !== 0 && (l === 0 || !n || t.z <= n.z) ? (s = t, t = t.nextZ, o--) : (s = n, n = n.nextZ, l--), a ? a.nextZ = s : r = s, s.prevZ = a, a = s;
      t = n;
    }
    a.nextZ = null, u *= 2;
  } while (i > 1);
  return r;
}
function T4(r, e, t, n, s) {
  return r = (r - t) * s | 0, e = (e - n) * s | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function ot(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function L1(r, e, t, n, s, a, i, o) {
  return (s - i) * (e - o) >= (r - i) * (a - o) && (r - i) * (n - o) >= (t - i) * (e - o) && (t - i) * (a - o) >= (s - i) * (n - o);
}
function lt(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !ht(r, e) && // dones't intersect other edges
  (K1(r, e) && K1(e, r) && ut(r, e) && // locally visible
  (o0(r.prev, r, e.prev) || o0(r, e.prev, e)) || // does not create opposite-facing sectors
  Y2(r, e) && o0(r.prev, r, r.next) > 0 && o0(e.prev, e, e.next) > 0);
}
function o0(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function Y2(r, e) {
  return r.x === e.x && r.y === e.y;
}
function Q5(r, e, t, n) {
  const s = A2(o0(r, e, t)), a = A2(o0(r, e, n)), i = A2(o0(t, n, r)), o = A2(o0(t, n, e));
  return !!(s !== a && i !== o || s === 0 && E2(r, t, e) || a === 0 && E2(r, n, e) || i === 0 && E2(t, r, n) || o === 0 && E2(t, e, n));
}
function E2(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function A2(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function ht(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && Q5(t, t.next, r, e)) return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function K1(r, e) {
  return o0(r.prev, r, r.next) < 0 ? o0(r, e, r.next) >= 0 && o0(r, r.prev, e) >= 0 : o0(r, e, r.prev) < 0 || o0(r, r.next, e) < 0;
}
function ut(r, e) {
  let t = r, n = !1;
  const s = (r.x + e.x) / 2, a = (r.y + e.y) / 2;
  do
    t.y > a != t.next.y > a && t.next.y !== t.y && s < (t.next.x - t.x) * (a - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function K5(r, e) {
  const t = new E4(r.i, r.x, r.y), n = new E4(e.i, e.x, e.y), s = r.next, a = e.prev;
  return r.next = e, e.prev = r, t.next = s, s.prev = t, n.next = t, t.prev = n, a.next = n, n.prev = a, n;
}
function Be(r, e, t, n) {
  const s = new E4(r, e, t);
  return n ? (s.next = n.next, s.prev = n, n.next.prev = s, n.next = s) : (s.prev = s, s.next = s), s;
}
function j1(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function E4(r, e, t) {
  this.i = r, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function ct(r, e, t, n) {
  let s = 0;
  for (let a = e, i = t - n; a < t; a += n)
    s += (r[i] - r[a]) * (r[a + 1] + r[i + 1]), i = a;
  return s;
}
class I1 {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let s = t - 1, a = 0; a < t; s = a++)
      n += e[s].x * e[a].y - e[a].x * e[s].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return I1.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], s = [], a = [];
    Ue(e), Ge(n, e);
    let i = e.length;
    t.forEach(Ue);
    for (let l = 0; l < t.length; l++)
      s.push(i), i += t[l].length, Ge(n, t[l]);
    const o = q3.triangulate(n, s);
    for (let l = 0; l < o.length; l += 3)
      a.push(o.slice(l, l + 3));
    return a;
  }
}
function Ue(r) {
  const e = r.length;
  e > 2 && r[e - 1].equals(r[0]) && r.pop();
}
function Ge(r, e) {
  for (let t = 0; t < e.length; t++)
    r.push(e[t].x), r.push(e[t].y);
}
class ft {
  constructor() {
    this.type = "ShapePath", this.color = new re(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new S4(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, s) {
    return this.currentPath.quadraticCurveTo(e, t, n, s), this;
  }
  bezierCurveTo(e, t, n, s, a, i) {
    return this.currentPath.bezierCurveTo(e, t, n, s, a, i), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(g) {
      const C = [];
      for (let S = 0, E = g.length; S < E; S++) {
        const w = g[S], L = new i4();
        L.curves = w.curves, C.push(L);
      }
      return C;
    }
    function n(g, C) {
      const S = C.length;
      let E = !1;
      for (let w = S - 1, L = 0; L < S; w = L++) {
        let F = C[w], A = C[L], k = A.x - F.x, O = A.y - F.y;
        if (Math.abs(O) > Number.EPSILON) {
          if (O < 0 && (F = C[L], k = -k, A = C[w], O = -O), g.y < F.y || g.y > A.y) continue;
          if (g.y === F.y) {
            if (g.x === F.x) return !0;
          } else {
            const M = O * (g.x - F.x) - k * (g.y - F.y);
            if (M === 0) return !0;
            if (M < 0) continue;
            E = !E;
          }
        } else {
          if (g.y !== F.y) continue;
          if (A.x <= g.x && g.x <= F.x || F.x <= g.x && g.x <= A.x) return !0;
        }
      }
      return E;
    }
    const s = I1.isClockWise, a = this.subPaths;
    if (a.length === 0) return [];
    let i, o, l;
    const u = [];
    if (a.length === 1)
      return o = a[0], l = new i4(), l.curves = o.curves, u.push(l), u;
    let c = !s(a[0].getPoints());
    c = e ? !c : c;
    const p = [], f = [];
    let d = [], v = 0, y;
    f[v] = void 0, d[v] = [];
    for (let g = 0, C = a.length; g < C; g++)
      o = a[g], y = o.getPoints(), i = s(y), i = e ? !i : i, i ? (!c && f[v] && v++, f[v] = { s: new i4(), p: y }, f[v].s.curves = o.curves, c && v++, d[v] = []) : d[v].push({ h: o, p: y[0] });
    if (!f[0]) return t(a);
    if (f.length > 1) {
      let g = !1, C = 0;
      for (let S = 0, E = f.length; S < E; S++)
        p[S] = [];
      for (let S = 0, E = f.length; S < E; S++) {
        const w = d[S];
        for (let L = 0; L < w.length; L++) {
          const F = w[L];
          let A = !0;
          for (let k = 0; k < f.length; k++)
            n(F.p, f[k].p) && (S !== k && C++, A ? (A = !1, p[k].push(F)) : g = !0);
          A && p[S].push(F);
        }
      }
      C > 0 && g === !1 && (d = p);
    }
    let m;
    for (let g = 0, C = f.length; g < C; g++) {
      l = f[g].s, u.push(l), m = d[g];
      for (let S = 0, E = m.length; S < E; S++)
        l.holes.push(m[S].h);
    }
    return u;
  }
}
const y0 = Object.freeze({
  TEXT: 0,
  ESCAPE: 1,
  /* Skip currently unsupported format codes till ';' */
  SKIP_FORMAT: 2,
  /* For \pxq* paragraph formatting. Not found documentation yet, so temporal naming for now. */
  PARAGRAPH1: 3,
  PARAGRAPH2: 4,
  PARAGRAPH3: 5
}), v1 = Object.freeze({
  TEXT: 0,
  SCOPE: 1,
  PARAGRAPH: 2,
  NON_BREAKING_SPACE: 3,
  /** "alignment" property is either "r", "c", "l", "j", "d" for right, center, left, justify
   * (seems to be the same as left), distribute (justify) alignment.
   */
  PARAGRAPH_ALIGNMENT: 4
  /* Many others are not yet implemented. */
}), pt = /* @__PURE__ */ new Set([
  "L",
  "l",
  "O",
  "o",
  "K",
  "k",
  "P",
  "X",
  "~"
]), dt = /* @__PURE__ */ new Set([
  "f",
  "F",
  "p",
  "Q",
  "H",
  "W",
  "S",
  "A",
  "C",
  "T"
]), vt = /* @__PURE__ */ new Set([
  "\\",
  "{",
  "}"
]);
class i1 {
  constructor() {
    this.entities = [];
  }
  Parse(e) {
    const t = e.length;
    let n = 0, s = y0.TEXT, a = [], i = this.entities, o = 0;
    const l = this;
    function u() {
      s !== y0.TEXT || n === o || (i.push({
        type: v1.TEXT,
        content: e.slice(n, o)
      }), n = o);
    }
    function c(d) {
      i.push({ type: d });
    }
    function p() {
      const d = {
        type: v1.SCOPE,
        content: []
      };
      i.push(d), i = d.content, a.push(d);
    }
    function f() {
      a.length !== 0 && (a.pop(), a.length === 0 ? i = l.entities : i = a[a.length - 1].content);
    }
    for (; o < t; o++) {
      const d = e.charAt(o);
      switch (s) {
        case y0.TEXT:
          if (d === "{") {
            u(), p(), n = o + 1;
            continue;
          }
          if (d === "}") {
            u(), f(), n = o + 1;
            continue;
          }
          if (d === "\\") {
            u(), s = y0.ESCAPE;
            continue;
          }
          continue;
        case y0.ESCAPE:
          if (pt.has(d)) {
            switch (d) {
              case "P":
                c(v1.PARAGRAPH);
                break;
              case "~":
                c(v1.NON_BREAKING_SPACE);
                break;
            }
            s = y0.TEXT, n = o + 1;
            continue;
          }
          if (dt.has(d)) {
            switch (d) {
              case "p":
                s = y0.PARAGRAPH1;
                continue;
            }
            s = y0.SKIP_FORMAT;
            continue;
          }
          vt.has(d) ? n = o : n = o - 1, s = y0.TEXT;
          continue;
        case y0.PARAGRAPH1:
          s = d === "x" ? y0.PARAGRAPH2 : y0.SKIP_FORMAT;
          continue;
        case y0.PARAGRAPH2:
          s = d === "q" ? y0.PARAGRAPH3 : y0.SKIP_FORMAT;
          continue;
        case y0.PARAGRAPH3:
          i.push({ type: v1.PARAGRAPH_ALIGNMENT, alignment: d }), s = y0.SKIP_FORMAT;
          continue;
        case y0.SKIP_FORMAT:
          d === ";" && (n = o + 1, s = y0.TEXT);
          continue;
        default:
          throw new Error("Unhandled state");
      }
    }
    u();
  }
  /** @typedef MTextFormatEntity
   * @property type One of EntityType
   *
   * @return {MTextFormatEntity[]} List of format chunks. Each chunk is either a text chunk with
   * TEXT type or some format entity. Entity with type SCOPE represents format scope which has
   * nested list of entities in "content" property.
   */
  GetContent() {
    return this.entities;
  }
  /** Return only text chunks in a flattened sequence of strings. */
  *GetText() {
    function* e(t) {
      for (const n of t)
        n.type === v1.TEXT ? yield n.content : n.type === v1.SCOPE && (yield* e(n.content));
    }
    yield* e(this.GetContent());
  }
}
i1.EntityType = v1;
const yt = /(?:%%([dpcouK%]))|(?:%%(\d{1,3}))|(?:\\U\+([0-9a-f]{4}))/gi;
function M0(r) {
  return r.replaceAll(yt, (e, t, n, s) => {
    if (t !== void 0)
      switch (t.toLowerCase()) {
        case "d":
          return "°";
        // degree symbol °
        case "p":
          return "±";
        // plus/minus ±
        case "c":
          return "∅";
        // diameter symbol ∅
        case "o":
          return "";
        case "u":
          return "";
        case "k":
          return "";
        case "%":
          return "%";
      }
    else if (n !== void 0) {
      const a = parseInt(n, 10);
      return !isNaN(a) && a > 0 && a <= 65535 ? String.fromCharCode(a) : "";
    } else if (s !== void 0) {
      const a = parseInt(s, 16);
      return isNaN(a) ? e : String.fromCharCode(a);
    }
    return e;
  });
}
class h2 {
  /**
   * @param fontFetchers {?Function[]} List of font fetchers. Fetcher should return promise with
   *  loaded font object (opentype.js). They are invoked only when necessary. Each glyph is being
   *  searched sequentially in each provided font.
   * @param options {?{}} See TextRenderer.DefaultOptions.
   */
  constructor(e, t = null) {
    this.fontFetchers = e, this.fonts = [], this.options = Object.create(h2.DefaultOptions), t && Object.assign(this.options, t), this.shapes = /* @__PURE__ */ new Map(), this.stubShapeLoaded = !1, this.stubShape = null;
  }
  /** Fetch necessary fonts to render the provided text. Should be called for each string which
   * will be rendered later.
   * @param text {string}
   * @return {Boolean} True if all characters can be rendered, false if none of the provided fonts
   *  contains glyphs for some of the specified text characters.
   */
  async FetchFonts(e) {
    if (!e || e.length === 0)
      return !0;
    if (!this.stubShapeLoaded) {
      this.stubShapeLoaded = !0;
      for (const s of Array.from(this.options.fallbackChar))
        if (await this.FetchFonts(s)) {
          this.stubShape = this._CreateCharShape(s);
          break;
        }
    }
    let t = !1;
    const n = [];
    for (const s of e) {
      if (s.codePointAt(0) < 32)
        continue;
      let a = !1;
      for (const i of this.fonts)
        if (i.HasChar(s)) {
          a = !0;
          break;
        }
      if (!a) {
        if (!this.fontFetchers || this.fontFetchers.length === 0) {
          n.includes(s) || (n.push(s), console.warn(`[TextRenderer] No font fetchers available for character: ${s} (U+${s.codePointAt(0).toString(16).toUpperCase()})`)), t = !0;
          continue;
        }
        for (; this.fontFetchers.length > 0; )
          try {
            const i = this.fontFetchers.shift(), o = await this._FetchFont(i);
            if (this.fonts.push(o), o.HasChar(s)) {
              a = !0;
              break;
            }
          } catch (i) {
            console.warn(`[TextRenderer] Failed to fetch font for character '${s}':`, i);
          }
        if (!a) {
          if (!n.includes(s)) {
            n.push(s);
            const i = s.codePointAt(0);
            console.warn(`[TextRenderer] Missing glyph for character: ${s} (U+${i.toString(16).toUpperCase()})`);
          }
          t = !0;
        }
      }
    }
    return t && n.length > 0 && console.warn(`[TextRenderer] Missing ${n.length} character(s):`, n.map((s) => `'${s}' (U+${s.codePointAt(0).toString(16).toUpperCase()})`).join(", ")), !t;
  }
  get canRender() {
    return this.fonts !== null && this.fonts.length > 0;
  }
  /** Get width in model space units for a single line of text.
   * @param text {string}
   * @param fontSize {number}
   */
  GetLineWidth(e, t) {
    const n = new R2(t);
    for (const s of e) {
      const a = this._GetCharShape(s);
      a && n.PushChar(s, a);
    }
    return n.GetCurrentPosition();
  }
  /**
   * @param {string} text
   * @param {{x,y}} startPos
   * @param {?{x,y}} endPos TEXT group second alignment point.
   * @param {?number} rotation Rotation attribute, deg.
   * @param {?number} widthFactor Relative X scale factor (group 41)
   * @param {?number} hAlign Horizontal text justification type code (group 72)
   * @param {?number} vAlign Vertical text justification type code (group 73).
   * @param {number} color
   * @param {?string} layer
   * @param {number} fontSize Font size.
   * @return {Generator<Entity>} Rendering entities. Currently just indexed triangles for each
   *  glyph.
   */
  *Render({
    text: e,
    startPos: t,
    endPos: n,
    rotation: s = 0,
    widthFactor: a = 1,
    hAlign: i = 0,
    vAlign: o = 0,
    color: l,
    layer: u = null,
    fontSize: c
  }) {
    const p = new R2(c);
    for (const f of e) {
      const d = this._GetCharShape(f);
      d && p.PushChar(f, d);
    }
    yield* p.Render(t, n, s, a, i, o, l, u);
  }
  /**
   * Render a text string as a SINGLE merged Entity instead of one Entity per glyph.
   * This significantly reduces CPU overhead for text-heavy drawings.
   * 
   * @param {string} text
   * @param {{x,y}} startPos
   * @param {?{x,y}} endPos TEXT group second alignment point.
   * @param {?number} rotation Rotation attribute, deg.
   * @param {?number} widthFactor Relative X scale factor (group 41)
   * @param {?number} hAlign Horizontal text justification type code (group 72)
   * @param {?number} vAlign Vertical text justification type code (group 73).
   * @param {number} color
   * @param {?string} layer
   * @param {number} fontSize Font size.
   * @return {?Entity} Single Entity containing merged geometry, or null if text is empty/invisible.
   */
  RenderMerged({
    text: e,
    startPos: t,
    endPos: n,
    rotation: s = 0,
    widthFactor: a = 1,
    hAlign: i = 0,
    vAlign: o = 0,
    color: l,
    layer: u = null,
    fontSize: c
  }) {
    if (!e || e.trim() === "") return null;
    const p = new R2(c);
    for (const f of e) {
      const d = this._GetCharShape(f);
      d && p.PushChar(f, d);
    }
    return p.RenderMerged(t, n, s, a, i, o, l, u);
  }
  /**
   * @param {MTextFormatEntity[]} formattedText Parsed formatted text.
   * @param {{x, y}} position Insertion position.
   * @param {?number} fontSize If not specified, then it still may be defined by inline
   *  formatting codes, otherwise 1 is used as fall-back value.
   * @param {?Number} width Text block width, no wrapping if undefined.
   * @param {?Number} rotation Text block rotation in degrees.
   * @param {?{x, y}} direction Text block orientation defined as direction vector. Takes a
   * precedence over rotation if both provided.
   * @param {number} attachment Attachment point, one of MTextAttachment values.
   * @param {?number} lineSpacing Line spacing ratio relative to default one (5/3 of font size).
   * @param {number} color
   * @param {?string} layer
   * @return {Generator<Entity>} Rendering entities. Currently just indexed triangles for each
   *  glyph.
   */
  *RenderMText({
    formattedText: e,
    position: t,
    fontSize: n,
    width: s = null,
    rotation: a = 0,
    direction: i = null,
    attachment: o,
    lineSpacing: l = 1,
    color: u,
    layer: c = null
  }) {
    n || (n = 1);
    const p = new f0(n, this._GetCharShape.bind(this));
    p.FeedText(e), yield* p.Render(
      t,
      s,
      a,
      i,
      o,
      l,
      u,
      c
    );
  }
  /** @return {CharShape} Shape for the specified character.
   * Each shape is indexed triangles mesh for font size 1. They should be further transformed as
   * needed.
   */
  _GetCharShape(e) {
    let t = this.shapes.get(e);
    return t || (t = this._CreateCharShape(e), this.shapes.set(e, t), t);
  }
  _CreateCharShape(e) {
    for (const t of this.fonts) {
      const n = t.GetCharPath(e);
      if (n)
        return new gt(t, n, this.options);
    }
    return this.stubShape;
  }
  async _FetchFont(e) {
    try {
      const t = await e();
      if (!t)
        throw new Error("Font fetcher returned null/undefined");
      return new mt(t);
    } catch (t) {
      throw console.error("[TextRenderer] Error fetching font:", t), t;
    }
  }
}
h2.DefaultOptions = {
  /** Number of segments for each curve in a glyph. Currently Three.js does not have more
   * adequate angle-based or length-based tessellation option.
   */
  curveSubdivision: 2,
  /** Character to use when the specified fonts does not contain necessary glyph. Several ones can
   * be specified, the first one available is used.
   */
  fallbackChar: "�?"
};
class gt {
  /**
   * @param font {Font}
   * @param glyph {CharPath}
   * @param options {{}} Renderer options.
   */
  constructor(e, t, n) {
    if (this.font = e, this.advance = t.advance, this.bounds = t.bounds, t.path) {
      const s = t.path.toShapes(!1);
      this.vertices = [], this.indices = [];
      for (const a of s) {
        let c = function(p) {
          for (const f of p)
            l.vertices.push(f);
        };
        const i = a.extractPoints(n.curveSubdivision);
        if (!I1.isClockWise(i.shape)) {
          i.shape = i.shape.reverse();
          for (const p of i.holes)
            I1.isClockWise(p) && (i.holes[h] = p.reverse());
        }
        const o = I1.triangulateShape(i.shape, i.holes), l = this, u = this.vertices.length;
        c(i.shape);
        for (const p of i.holes)
          c(p);
        for (const p of o)
          for (const f of p)
            this.indices.push(u + f);
      }
    } else
      this.vertices = null;
  }
  /** Get vertices array transformed to the specified position and with the specified size.
   * @param position {{x,y}}
   * @param size {number}
   * @return {Vector2[]}
   */
  GetVertices(e, t) {
    return this.vertices.map((n) => n.clone().multiplyScalar(t).add(e));
  }
}
let mt = class {
  constructor(e) {
    this.data = e, this.charMap = /* @__PURE__ */ new Map();
    for (const t of Object.values(e.glyphs.glyphs))
      t.unicode !== void 0 && this.charMap.set(String.fromCodePoint(t.unicode), t);
    this.scale = 100 / ((this.data.unitsPerEm || 2048) * 72);
  }
  /**
   * @param char {string} Character code point as string.
   * @return {Boolean} True if the font has glyphs for the specified character.
   */
  HasChar(e) {
    return this.charMap.has(e);
  }
  /**
   * @param char {string} Character code point as string.
   * @return {?CharPath} Path is scaled to size 1. Null if no glyphs for the specified characters.
   */
  GetCharPath(e) {
    const t = this.charMap.get(e);
    if (!t)
      return null;
    const n = this.scale, s = new ft();
    for (const a of t.path.commands)
      switch (a.type) {
        case "M":
          s.moveTo(a.x * n, a.y * n);
          break;
        case "L":
          s.lineTo(a.x * n, a.y * n);
          break;
        case "Q":
          s.quadraticCurveTo(
            a.x1 * n,
            a.y1 * n,
            a.x * n,
            a.y * n
          );
          break;
        case "C":
          s.bezierCurveTo(
            a.x1 * n,
            a.y1 * n,
            a.x2 * n,
            a.y2 * n,
            a.x * n,
            a.y * n
          );
          break;
      }
    return {
      advance: t.advanceWidth * n,
      path: s,
      bounds: {
        xMin: t.xMin * n,
        xMax: t.xMax * n,
        yMin: t.yMin * n,
        yMax: t.yMax * n
      }
    };
  }
  /**
   * @param c1 {string}
   * @param c2 {string}
   * @return {number}
   */
  GetKerning(e, t) {
    const n = this.data.charToGlyphIndex(e);
    if (n === 0)
      return 0;
    const s = this.data.charToGlyphIndex(e);
    return s === 0 ? 0 : this.data.getKerningValue(n, s) * this.scale;
  }
};
const h0 = Object.freeze({
  LEFT: 0,
  CENTER: 1,
  RIGHT: 2,
  ALIGNED: 3,
  MIDDLE: 4,
  FIT: 5
}), C0 = Object.freeze({
  BASELINE: 0,
  BOTTOM: 1,
  MIDDLE: 2,
  TOP: 3
}), S0 = Object.freeze({
  TOP_LEFT: 1,
  TOP_CENTER: 2,
  TOP_RIGHT: 3,
  MIDDLE_LEFT: 4,
  MIDDLE_CENTER: 5,
  MIDDLE_RIGHT: 6,
  BOTTOM_LEFT: 7,
  BOTTOM_CENTER: 8,
  BOTTOM_RIGHT: 9
});
class f0 {
  /**
   * @param fontSize
   * @param {Function<CharShape, String>} charShapeProvider
   */
  constructor(e, t) {
    this.fontSize = e, this.charShapeProvider = t, this.curParagraph = new f0.Paragraph(this), this.paragraphs = [this.curParagraph], this.spaceShape = t(" ");
  }
  /** Add some formatted text to the box.
   * @param {MTextFormatEntity[]} formattedText Parsed formatted text.
   */
  FeedText(e) {
    function* t(s) {
      for (const a of s)
        a.type === i1.EntityType.SCOPE ? yield* t(a.content) : yield a;
    }
    let n = null;
    for (const s of t(e))
      switch (s.type) {
        case i1.EntityType.TEXT:
          for (const i of s.content)
            i === " " ? this.curParagraph.FeedSpace() : this.curParagraph.FeedChar(i);
          break;
        case i1.EntityType.PARAGRAPH:
          this.curParagraph = new f0.Paragraph(this), this.curParagraph.SetAlignment(n), this.paragraphs.push(this.curParagraph);
          break;
        case i1.EntityType.NON_BREAKING_SPACE:
          this.curParagraph.FeedChar(" ");
          break;
        case i1.EntityType.PARAGRAPH_ALIGNMENT:
          let a = null;
          switch (s.alignment) {
            case "l":
              a = f0.Paragraph.Alignment.LEFT;
              break;
            case "c":
              a = f0.Paragraph.Alignment.CENTER;
              break;
            case "r":
              a = f0.Paragraph.Alignment.RIGHT;
              break;
            case "d":
              a = f0.Paragraph.Alignment.JUSTIFY;
              break;
            case "j":
              a = null;
              break;
          }
          this.curParagraph.SetAlignment(a), n = a;
          break;
      }
  }
  *Render(e, t, n, s, a, i, o, l) {
    for (const y of this.paragraphs)
      y.BuildLines(t);
    if (t === null || t === 0) {
      t = 0;
      for (const y of this.paragraphs) {
        const m = y.GetMaxLineWidth();
        m > t && (t = m);
      }
    }
    let u = f0.Paragraph.Alignment.LEFT;
    switch (a) {
      case S0.TOP_CENTER:
      case S0.MIDDLE_CENTER:
      case S0.BOTTOM_CENTER:
        u = f0.Paragraph.Alignment.CENTER;
        break;
      case S0.TOP_RIGHT:
      case S0.MIDDLE_RIGHT:
      case S0.BOTTOM_RIGHT:
        u = f0.Paragraph.Alignment.RIGHT;
        break;
    }
    for (const y of this.paragraphs)
      y.ApplyAlignment(t, u);
    s !== null && (n = Math.atan2(s.y, s.x) * 180 / Math.PI);
    const c = i * 5 * this.fontSize / 3;
    let p = 0;
    for (const y of this.paragraphs)
      y.lines === null ? p++ : p += y.lines.length;
    p *= c;
    let f = new D();
    switch (a) {
      case S0.TOP_LEFT:
        break;
      case S0.TOP_CENTER:
        f.x = t / 2;
        break;
      case S0.TOP_RIGHT:
        f.x = t;
        break;
      case S0.MIDDLE_LEFT:
        f.y = -p / 2;
        break;
      case S0.MIDDLE_CENTER:
        f.x = t / 2, f.y = -p / 2;
        break;
      case S0.MIDDLE_RIGHT:
        f.x = t, f.y = -p / 2;
        break;
      case S0.BOTTOM_LEFT:
        f.y = -p;
        break;
      case S0.BOTTOM_CENTER:
        f.x = t / 2, f.y = -p;
        break;
      case S0.BOTTOM_RIGHT:
        f.x = t, f.y = -p;
        break;
      default:
        throw new Error("Unhandled alignment");
    }
    const d = new A0().translate(-f.x, -f.y).rotate(-n * Math.PI / 180).translate(e.x, e.y);
    let v = -this.fontSize;
    for (const y of this.paragraphs) {
      if (y.lines === null) {
        v -= c;
        continue;
      }
      for (const m of y.lines) {
        for (let g = m.startChunkIdx; g < m.startChunkIdx + m.numChunks; g++) {
          const C = y.chunks[g];
          let S = C.position;
          (g === 0 || g !== m.startChunkIdx) && (S += C.GetSpacingWidth());
          const E = new D(S, v);
          E.applyMatrix3(d), C.block && (yield* C.block.Render(
            E,
            null,
            n,
            null,
            h0.LEFT,
            C0.BASELINE,
            o,
            l
          ));
        }
        v -= c;
      }
    }
  }
}
f0.Paragraph = class {
  constructor(r) {
    this.textBox = r, this.chunks = [], this.curChunk = null, this.alignment = null, this.lines = null;
  }
  /** Feed character for current chunk. Spaces should be fed by FeedSpace() method. If space
   * character is fed into this method, it is interpreted as non-breaking space.
   */
  FeedChar(r) {
    const e = this.textBox.charShapeProvider(r);
    e !== null && (this.curChunk === null && this._AddChunk(), this.curChunk.PushChar(r, e));
  }
  FeedSpace() {
    (this.curChunk === null || this.curChunk.lastChar !== null) && this._AddChunk(), this.curChunk.PushSpace();
  }
  SetAlignment(r) {
    this.alignment = r;
  }
  /** Group chunks into lines.
   *
   * @param {?number} boxWidth Box width. Do not wrap lines if null (one line is created).
   */
  BuildLines(r) {
    if (this.curChunk === null)
      return;
    this.lines = [];
    let e = 0, t = 0, n = 0;
    const s = () => {
      this.lines.push(new f0.Paragraph.Line(
        this,
        e,
        t - e,
        n
      )), e = t, n = 0;
    };
    for (; t < this.chunks.length; t++) {
      const a = this.chunks[t], i = a.GetWidth(e === 0 || t !== e);
      r !== null && r !== 0 && n !== 0 && n + i > r && s(), a.position = n, n += i;
    }
    e !== t && n !== 0 && s();
  }
  GetMaxLineWidth() {
    if (this.lines === null)
      return 0;
    let r = 0;
    for (const e of this.lines)
      e.width > r && (r = e.width);
    return r;
  }
  ApplyAlignment(r, e) {
    if (this.lines)
      for (const t of this.lines)
        t.ApplyAlignment(r, e);
  }
  _AddChunk() {
    this.curChunk = new f0.Paragraph.Chunk(this, this.textBox.fontSize, this.curChunk), this.chunks.push(this.curChunk);
  }
};
f0.Paragraph.Alignment = Object.freeze({
  LEFT: 0,
  CENTER: 1,
  RIGHT: 2,
  JUSTIFY: 3
});
f0.Paragraph.Chunk = class {
  /**
   * @param {TextBox.Paragraph} paragraph
   * @param {number} fontSize
   * @param {?TextBox.Paragraph.Chunk} prevChunk
   */
  constructor(r, e, t) {
    this.paragraph = r, this.fontSize = e, this.prevChunk = t, this.lastChar = null, this.lastShape = null, this.leadingSpaces = 0, this.spaceStartKerning = null, this.spaceEndKerning = null, this.block = null, this.position = null;
  }
  PushSpace() {
    if (this.block)
      throw new Error("Illegal operation");
    this.leadingSpaces++;
  }
  /**
   * @param char {string}
   * @param shape {CharShape}
   */
  PushChar(r, e) {
    this.spaceStartKerning === null && (this.leadingSpaces === 0 ? (this.spaceStartKerning = 0, this.spaceEndKerning = 0) : (this.prevChunk && this.prevChunk.lastShape && this.prevChunk.fontSize === this.fontSize && this.prevChunk.lastShape.font === this.paragraph.textBox.spaceShape.font ? this.spaceStartKerning = this.prevChunk.lastShape.font.GetKerning(this.prevChunk.lastChar, " ") : this.spaceStartKerning = 0, e.font === this.paragraph.textBox.spaceShape.font ? this.spaceEndKerning = e.font.GetKerning(" ", r) : this.spaceEndKerning = 0)), this.block === null && (this.block = new R2(this.fontSize)), this.block.PushChar(r, e), this.lastChar = r, this.lastShape = e;
  }
  GetSpacingWidth() {
    return (this.leadingSpaces * this.paragraph.textBox.spaceShape.advance + this.spaceStartKerning + this.spaceEndKerning) * this.fontSize;
  }
  GetWidth(r) {
    if (this.block === null)
      return 0;
    let e = this.block.GetCurrentPosition();
    return r && (e += this.GetSpacingWidth()), e;
  }
};
f0.Paragraph.Line = class {
  constructor(r, e, t, n) {
    this.paragraph = r, this.startChunkIdx = e, this.numChunks = t, this.width = n;
  }
  ApplyAlignment(r, e) {
    switch (this.paragraph.alignment ?? e) {
      case f0.Paragraph.Alignment.LEFT:
        break;
      case f0.Paragraph.Alignment.CENTER: {
        const n = (r - this.width) / 2;
        this.ForEachChunk((s) => s.position += n);
        break;
      }
      case f0.Paragraph.Alignment.RIGHT: {
        const n = r - this.width;
        this.ForEachChunk((s) => s.position += n);
        break;
      }
      case f0.Paragraph.Alignment.JUSTIFY: {
        const n = r - this.width;
        if (n <= 0 || this.numChunks === 1)
          break;
        const s = n / (this.numChunks - 1);
        let a = 0;
        this.ForEachChunk((i) => {
          i.position += a, a += s;
        });
        break;
      }
      default:
        throw new Error("Unhandled alignment: " + this.paragraph.alignment);
    }
  }
  ForEachChunk(r) {
    for (let e = 0; e < this.numChunks; e++)
      r(this.paragraph.chunks[this.startChunkIdx + e]);
  }
};
class R2 {
  constructor(e) {
    this.fontSize = e, this.glyphs = [], this.bounds = null, this.curX = 0, this.prevChar = null, this.prevFont = null;
  }
  /**
   * @param char {string}
   * @param shape {CharShape}
   */
  PushChar(e, t) {
    let n;
    this.prevChar !== null && this.prevFont === t.font ? n = this.prevFont.GetKerning(this.prevChar, e) : n = 0;
    const s = this.curX + n * this.fontSize;
    let a;
    if (t.vertices && t.vertices.length > 0) {
      a = t.GetVertices({ x: s, y: 0 }, this.fontSize);
      const i = s + t.bounds.xMin * this.fontSize, o = s + t.bounds.xMax * this.fontSize, l = t.bounds.yMin * this.fontSize, u = t.bounds.yMax * this.fontSize;
      this.bounds === null ? this.bounds = { xMin: i, xMax: o, yMin: l, yMax: u } : (i < this.bounds.xMin && (this.bounds.xMin = i), l < this.bounds.yMin && (this.bounds.yMin = l), o > this.bounds.xMax && (this.bounds.xMax = o), u > this.bounds.yMax && (this.bounds.yMax = u));
    } else
      a = null;
    this.curX = s + t.advance * this.fontSize, this.glyphs.push({ shape: t, vertices: a }), this.prevChar = e, this.prevFont = t.font;
  }
  GetCurrentPosition() {
    return this.curX;
  }
  /**
   * @param startPos {{x,y}} TEXT group first alignment point.
   * @param endPos {?{x,y}} TEXT group second alignment point.
   * @param rotation {?number} Rotation attribute, deg.
   * @param widthFactor {?number} Relative X scale factor (group 41).
   * @param hAlign {?number} Horizontal text justification type code (group 72).
   * @param vAlign {?number} Vertical text justification type code (group 73).
   * @param color {number}
   * @param layer {?string}
   * @return {Generator<Entity>} Rendering entities. Currently just indexed triangles for each
   *  glyph.
   */
  *Render(e, t, n, s, a, i, o, l) {
    if (this.bounds === null)
      return;
    t = t ?? e, n ? n *= -Math.PI / 180 : n = 0, s = s ?? 1, a = a ?? h0.LEFT, i = i ?? C0.BASELINE;
    let u = new D(), c = new D(s, 1), p = a === h0.LEFT && i === C0.BASELINE || a === h0.FIT || a === h0.ALIGNED ? new D(e.x, e.y) : new D(t.x, t.y);
    const f = () => {
      const y = t.x - e.x;
      return y < Number.MIN_VALUE * 2 ? s : y / (this.bounds.xMax - this.bounds.xMin);
    }, d = () => -Math.atan2(t.y - e.y, t.x - e.x);
    switch (a) {
      case h0.LEFT:
        u.x = this.bounds.xMin;
        break;
      case h0.CENTER:
        u.x = (this.bounds.xMax - this.bounds.xMin) / 2;
        break;
      case h0.RIGHT:
        u.x = this.bounds.xMax;
        break;
      case h0.MIDDLE:
        u.x = (this.bounds.xMax - this.bounds.xMin) / 2, u.y = (this.bounds.yMax - this.bounds.yMin) / 2;
        break;
      case h0.ALIGNED: {
        const y = f();
        c.x = y, c.y = y, n = d();
        break;
      }
      case h0.FIT:
        c.x = f(), n = d();
        break;
      default:
        console.warn("Unrecognized hAlign value: " + a);
    }
    switch (i) {
      case C0.BASELINE:
        break;
      case C0.BOTTOM:
        u.y = this.bounds.yMin;
        break;
      case C0.MIDDLE:
        u.y = (this.bounds.yMax - this.bounds.yMin) / 2;
        break;
      case C0.TOP:
        u.y = this.bounds.yMax;
        break;
      default:
        console.warn("Unrecognized vAlign value: " + i);
    }
    const v = new A0().translate(-u.x, -u.y).scale(c.x, c.y).rotate(n).translate(p.x, p.y);
    for (const y of this.glyphs)
      if (y.vertices) {
        for (const m of y.vertices)
          m.applyMatrix3(v);
        yield new N({
          type: N.Type.TRIANGLES,
          vertices: y.vertices,
          indices: y.shape.indices,
          layer: l,
          color: o
        });
      }
  }
  /**
   * Render all glyphs as a single merged Entity.
   * @param startPos {{x,y}} TEXT group first alignment point.
   * @param endPos {?{x,y}} TEXT group second alignment point.
   * @param rotation {?number} Rotation attribute, deg.
   * @param widthFactor {?number} Relative X scale factor (group 41).
   * @param hAlign {?number} Horizontal text justification type code (group 72).
   * @param vAlign {?number} Vertical text justification type code (group 73).
   * @param color {number}
   * @param layer {?string}
   * @return {?Entity} Single merged Entity, or null if no geometry.
   */
  RenderMerged(e, t, n, s, a, i, o, l) {
    if (this.bounds === null)
      return null;
    t = t ?? e, n ? n *= -Math.PI / 180 : n = 0, s = s ?? 1, a = a ?? h0.LEFT, i = i ?? C0.BASELINE;
    let u = new D(), c = new D(s, 1), p = a === h0.LEFT && i === C0.BASELINE || a === h0.FIT || a === h0.ALIGNED ? new D(e.x, e.y) : new D(t.x, t.y);
    const f = () => {
      const C = t.x - e.x;
      return C < Number.MIN_VALUE * 2 ? s : C / (this.bounds.xMax - this.bounds.xMin);
    }, d = () => -Math.atan2(t.y - e.y, t.x - e.x);
    switch (a) {
      case h0.LEFT:
        u.x = this.bounds.xMin;
        break;
      case h0.CENTER:
        u.x = (this.bounds.xMax - this.bounds.xMin) / 2;
        break;
      case h0.RIGHT:
        u.x = this.bounds.xMax;
        break;
      case h0.MIDDLE:
        u.x = (this.bounds.xMax - this.bounds.xMin) / 2, u.y = (this.bounds.yMax - this.bounds.yMin) / 2;
        break;
      case h0.ALIGNED: {
        const C = f();
        c.x = C, c.y = C, n = d();
        break;
      }
      case h0.FIT:
        c.x = f(), n = d();
        break;
      default:
        console.warn("Unrecognized hAlign value: " + a);
    }
    switch (i) {
      case C0.BASELINE:
        break;
      case C0.BOTTOM:
        u.y = this.bounds.yMin;
        break;
      case C0.MIDDLE:
        u.y = (this.bounds.yMax - this.bounds.yMin) / 2;
        break;
      case C0.TOP:
        u.y = this.bounds.yMax;
        break;
      default:
        console.warn("Unrecognized vAlign value: " + i);
    }
    const v = new A0().translate(-u.x, -u.y).scale(c.x, c.y).rotate(n).translate(p.x, p.y), y = [], m = [];
    let g = 0;
    for (const C of this.glyphs)
      if (C.vertices && C.vertices.length > 0) {
        for (const S of C.vertices)
          S.applyMatrix3(v), y.push(S);
        for (const S of C.shape.indices)
          m.push(g + S);
        g += C.vertices.length;
      }
    return y.length === 0 ? null : new N({
      type: N.Type.TRIANGLES,
      vertices: y,
      indices: m,
      layer: l,
      color: o
    });
  }
}
function W0() {
}
W0.prototype.clear = function() {
  this._root = null, this.size = 0;
};
W0.prototype.find = function(r) {
  for (var e = this._root; e !== null; ) {
    var t = this._comparator(r, e.data);
    if (t === 0)
      return e.data;
    e = e.get_child(t > 0);
  }
  return null;
};
W0.prototype.findIter = function(r) {
  for (var e = this._root, t = this.iterator(); e !== null; ) {
    var n = this._comparator(r, e.data);
    if (n === 0)
      return t._cursor = e, t;
    t._ancestors.push(e), e = e.get_child(n > 0);
  }
  return null;
};
W0.prototype.lowerBound = function(r) {
  for (var e = this._root, t = this.iterator(), n = this._comparator; e !== null; ) {
    var s = n(r, e.data);
    if (s === 0)
      return t._cursor = e, t;
    t._ancestors.push(e), e = e.get_child(s > 0);
  }
  for (var a = t._ancestors.length - 1; a >= 0; --a)
    if (e = t._ancestors[a], n(r, e.data) < 0)
      return t._cursor = e, t._ancestors.length = a, t;
  return t._ancestors.length = 0, t;
};
W0.prototype.upperBound = function(r) {
  for (var e = this.lowerBound(r), t = this._comparator; e.data() !== null && t(e.data(), r) === 0; )
    e.next();
  return e;
};
W0.prototype.min = function() {
  var r = this._root;
  if (r === null)
    return null;
  for (; r.left !== null; )
    r = r.left;
  return r.data;
};
W0.prototype.max = function() {
  var r = this._root;
  if (r === null)
    return null;
  for (; r.right !== null; )
    r = r.right;
  return r.data;
};
W0.prototype.iterator = function() {
  return new G1(this);
};
W0.prototype.each = function(r) {
  for (var e = this.iterator(), t; (t = e.next()) !== null; )
    r(t);
};
W0.prototype.reach = function(r) {
  for (var e = this.iterator(), t; (t = e.prev()) !== null; )
    r(t);
};
function G1(r) {
  this._tree = r, this._ancestors = [], this._cursor = null;
}
G1.prototype.data = function() {
  return this._cursor !== null ? this._cursor.data : null;
};
G1.prototype.next = function() {
  if (this._cursor === null) {
    var r = this._tree._root;
    r !== null && this._minNode(r);
  } else if (this._cursor.right === null) {
    var e;
    do
      if (e = this._cursor, this._ancestors.length)
        this._cursor = this._ancestors.pop();
      else {
        this._cursor = null;
        break;
      }
    while (this._cursor.right === e);
  } else
    this._ancestors.push(this._cursor), this._minNode(this._cursor.right);
  return this._cursor !== null ? this._cursor.data : null;
};
G1.prototype.prev = function() {
  if (this._cursor === null) {
    var r = this._tree._root;
    r !== null && this._maxNode(r);
  } else if (this._cursor.left === null) {
    var e;
    do
      if (e = this._cursor, this._ancestors.length)
        this._cursor = this._ancestors.pop();
      else {
        this._cursor = null;
        break;
      }
    while (this._cursor.left === e);
  } else
    this._ancestors.push(this._cursor), this._maxNode(this._cursor.left);
  return this._cursor !== null ? this._cursor.data : null;
};
G1.prototype._minNode = function(r) {
  for (; r.left !== null; )
    this._ancestors.push(r), r = r.left;
  this._cursor = r;
};
G1.prototype._maxNode = function(r) {
  for (; r.right !== null; )
    this._ancestors.push(r), r = r.right;
  this._cursor = r;
};
function R1(r) {
  this.data = r, this.left = null, this.right = null, this.red = !0;
}
R1.prototype.get_child = function(r) {
  return r ? this.right : this.left;
};
R1.prototype.set_child = function(r, e) {
  r ? this.right = e : this.left = e;
};
function u2(r) {
  this._root = null, this._comparator = r, this.size = 0;
}
u2.prototype = new W0();
u2.prototype.insert = function(r) {
  var e = !1;
  if (this._root === null)
    this._root = new R1(r), e = !0, this.size++;
  else {
    var t = new R1(void 0), n = 0, s = 0, a = null, i = t, o = null, l = this._root;
    for (i.right = this._root; ; ) {
      if (l === null ? (l = new R1(r), o.set_child(n, l), e = !0, this.size++) : _0(l.left) && _0(l.right) && (l.red = !0, l.left.red = !1, l.right.red = !1), _0(l) && _0(o)) {
        var u = i.right === a;
        l === o.get_child(s) ? i.set_child(u, $1(a, !s)) : i.set_child(u, j5(a, !s));
      }
      var c = this._comparator(l.data, r);
      if (c === 0)
        break;
      s = n, n = c < 0, a !== null && (i = a), a = o, o = l, l = l.get_child(n);
    }
    this._root = t.right;
  }
  return this._root.red = !1, e;
};
u2.prototype.remove = function(r) {
  if (this._root === null)
    return !1;
  var e = new R1(void 0), t = e;
  t.right = this._root;
  for (var n = null, s = null, a = null, i = 1; t.get_child(i) !== null; ) {
    var o = i;
    s = n, n = t, t = t.get_child(i);
    var l = this._comparator(r, t.data);
    if (i = l > 0, l === 0 && (a = t), !_0(t) && !_0(t.get_child(i))) {
      if (_0(t.get_child(!i))) {
        var u = $1(t, i);
        n.set_child(o, u), n = u;
      } else if (!_0(t.get_child(!i))) {
        var c = n.get_child(!o);
        if (c !== null)
          if (!_0(c.get_child(!o)) && !_0(c.get_child(o)))
            n.red = !1, c.red = !0, t.red = !0;
          else {
            var p = s.right === n;
            _0(c.get_child(o)) ? s.set_child(p, j5(n, o)) : _0(c.get_child(!o)) && s.set_child(p, $1(n, o));
            var f = s.get_child(p);
            f.red = !0, t.red = !0, f.left.red = !1, f.right.red = !1;
          }
      }
    }
  }
  return a !== null && (a.data = t.data, n.set_child(n.right === t, t.get_child(t.left === null)), this.size--), this._root = e.right, this._root !== null && (this._root.red = !1), a !== null;
};
function _0(r) {
  return r !== null && r.red;
}
function $1(r, e) {
  var t = r.get_child(!e);
  return r.set_child(!e, t.get_child(e)), t.set_child(e, r), r.red = !0, t.red = !1, t;
}
function j5(r, e) {
  return r.set_child(!e, $1(r.get_child(!e), !e)), $1(r, e);
}
class $5 {
  constructor() {
    this.lines = [], this.triangles = [], this.texts = [];
  }
  AddLine(e, t, n = null) {
    this.lines.push({ start: e, end: t, color: n });
  }
  /** Add one or more triangles. */
  AddTriangles(e, t, n = null) {
    this.triangles.push({ vertices: e, indices: t, color: n });
  }
  AddText(e, t, n, s, a) {
    this.texts.push({ text: e, size: t, angle: n, color: s, position: a });
  }
}
const He = {
  vertices: [
    new D(0, 0),
    new D(1, -0.25),
    new D(1, 0.25)
  ],
  indices: [0, 1, 2]
};
class xt {
  /**
   * @typedef LinearDimensionParams
   * @property {Vector2} p1 First definition point.
   * @property {Vector2} p2 Second definition point.
   * @property {Vector2} anchor Anchor point defines dimension line location.
   * @property {?number} angle Rotation angle for rotated dimension, deg.
   * @property {boolean} isAligned Dimension line is parallel to base line for aligned dimension.
   * @property {?string} text Dimension text pattern.
   * @property {?Vector2} textAnchor Text location (middle point) override.
   * @property {?number} textRotation Rotation angle of the dimension text away from its default
   *  orientation (the direction of the dimension line)
   */
  /**
   * @param {LinearDimensionParams} params
   * @param {Function<any(string)>} styleResolver Provides value for a requested style parameter.
   * @param {Function<number(string, number)>} textWidthCalculator Get text width in model space
   *  units for a given text and font size (height).
   */
  constructor(e, t, n) {
    this.params = e, this.styleResolver = t, this.textWidthCalculator = n, this.isValid = !0, this._CalculateGeometry();
  }
  IsValid() {
    return this.isValid;
  }
  GetTexts() {
    return [this._GetText()];
  }
  /**
   * @return {DimensionLayout}
   */
  GenerateLayout() {
    const e = new $5(), t = this.d1.distanceTo(this.d2), n = this.styleResolver("DIMCLRD");
    let s = this.styleResolver("DIMSCALE") ?? 1;
    s == 0 && (s = 1);
    const a = this._GetText(), i = (this.styleResolver("DIMTXT") ?? 1) * s;
    this.textWidthCalculator(a, i);
    const o = this.styleResolver("DIMCLRT"), l = (this.styleResolver("DIMASZ") ?? 1) * s, u = (this.styleResolver("DIMTSZ") ?? 0) * s;
    let c = this.params.textAnchor, p = !1;
    const f = this.d1.clone(), d = (this.styleResolver("DIMDLE") ?? 0) * s;
    d != 0 && f.add(this.vDim.clone().multiplyScalar(-d));
    const v = this.d2.clone();
    d != 0 && v.add(this.vDim.clone().multiplyScalar(d)), e.AddLine(f, v, n), t < l * 2 && (p = !0), c || (c = this.vDim.clone().multiplyScalar(this.d1.distanceTo(this.d2) / 2).add(this.d1).add(this.vDimNorm.clone().multiplyScalar(i * 0.75)));
    const y = this.vDimNorm.angle() * 180 / Math.PI - 90 + (this.params.textRotation ?? 0);
    e.AddText(a, i, y, o, c);
    const m = this.styleResolver("DIMCLRE"), g = (this.styleResolver("DIMEXO") ?? 0) * s, C = (this.styleResolver("DIMEXE") ?? 0) * s, S = (E, w) => {
      const L = w.clone().sub(E);
      if (L.length() == 0)
        return;
      L.normalize();
      const A = E.clone();
      g != 0 && A.add(L.clone().multiplyScalar(g));
      const k = w.clone();
      C != 0 && k.add(L.clone().multiplyScalar(C)), e.AddLine(A, k, m);
    };
    (this.styleResolver("DIMSE1") ?? 0) || S(this.params.p1, this.d1), (this.styleResolver("DIMSE2") ?? 0) || S(this.params.p2, this.d2);
    for (let E = 0; E < 2; E++) {
      const w = E == 0 ? this.d1 : this.d2;
      let L = E == 1;
      p && (L = !L);
      let F = new A0().identity();
      u > 0 ? F.scale(u, u) : (F.scale(l, l), L && F.scale(-1, 1));
      const A = -this.vDim.angle();
      F.rotate(A), F.translate(w.x, w.y), u > 0 ? this._CreateTick(e, F, n) : this._CreateArrowShape(e, F, n);
    }
    return e;
  }
  _CreateArrowShape(e, t, n) {
    const s = [];
    for (const a of He.vertices)
      s.push(a.clone().applyMatrix3(t));
    e.AddTriangles(s, He.indices, n);
  }
  _CreateTick(e, t, n) {
    e.AddLine(
      new D(0.5, 0.5).applyMatrix3(t),
      new D(-0.5, -0.5).applyMatrix3(t),
      n
    );
  }
  /** Calculate and set basic geometric parameters (some points and vectors which define the
   * dimension layout).
   */
  _CalculateGeometry() {
    if (this.vBase = this.params.p2.clone().sub(this.params.p1).normalize(), this.params.isAligned)
      this.vDim = this.vBase;
    else {
      const e = (this.params.angle ?? 0) * Math.PI / 180;
      this.vDim = new D(Math.cos(e), Math.sin(e));
    }
    this.d1 = this.vDim.clone().multiplyScalar(
      /* Projected signed length. */
      this.params.p1.clone().sub(this.params.anchor).dot(this.vDim)
    ).add(this.params.anchor), this.d2 = this.vDim.clone().multiplyScalar(
      /* Projected signed length. */
      this.params.p2.clone().sub(this.params.anchor).dot(this.vDim)
    ).add(this.params.anchor), this.d1.distanceTo(this.d2) == 0 && (this.isValid = !1), this.vDim.copy(this.d2).sub(this.d1).normalize(), this.vDim.y < -this.vDim.x ? this.vDimNorm = new D(this.vDim.y, -this.vDim.x) : this.vDimNorm = new D(-this.vDim.y, this.vDim.x);
  }
  _GetText() {
    if (this.params.text == " ")
      return "";
    if ((this.params.text ?? "") != "" && this.params.text.indexOf("<>") == -1)
      return M0(this.params.text);
    let e = this.d2.distanceTo(this.d1);
    e *= this.styleResolver("DIMLFAC") ?? 1;
    const t = this.styleResolver("DIMRND") ?? 0;
    if (t > 0) {
      const u = Math.round(e / t);
      e = t * u;
    }
    const n = this.styleResolver("DIMZIN") ?? 0, s = (n & 4) != 0, a = (n & 8) != 0;
    let i = e.toFixed(this.styleResolver("DIMDEC") ?? 2);
    a && (i = i.replace(/.0+$/, "")), s && (i = i.replace(/^0+/, "")), i.startsWith(".") ? i = "0" + i : i == "" && (i = "0"), i.endsWith(".") && (i = i.substring(0, i.length - 1));
    let o = this.styleResolver("DIMDSEP") ?? ".";
    isNaN(o) || (o = String.fromCharCode(o)), o != "." && (i = i.replace(".", o));
    const l = this.styleResolver("DIMPOST") ?? "";
    return l != "" && (l.indexOf("<>") != -1 ? i = l.replaceAll("<>", i) : i += l), (this.params.text ?? "") != "" && (i = this.params.text.replaceAll("<>", i)), M0(i);
  }
}
const ze = {
  vertices: [
    new D(0, 0),
    new D(1, -0.25),
    new D(1, 0.25)
  ],
  indices: [0, 1, 2]
};
class bt {
  /**
   * @param {AngularDimensionParams} params
   * @param {Function<any(string)>} styleResolver Provides value for a requested style parameter.
   * @param {Function<number(string, number)>} textWidthCalculator Get text width in model space
   *  units for a given text and font size (height).
   */
  constructor(e, t, n) {
    this.params = e, this.styleResolver = t, this.textWidthCalculator = n, this.isValid = !0, this._CalculateGeometry();
  }
  IsValid() {
    return this.isValid;
  }
  GetTexts() {
    return [this._GetText()];
  }
  /**
   * @return {DimensionLayout}
   */
  GenerateLayout() {
    const e = new $5();
    let t = this.styleResolver("DIMSCALE") ?? 1;
    t == 0 && (t = 1);
    const n = this.styleResolver("DIMCLRD"), s = this.styleResolver("DIMCLRT"), a = this.styleResolver("DIMCLRE"), i = (this.styleResolver("DIMTXT") ?? 1) * t, o = (this.styleResolver("DIMASZ") ?? 1) * t, l = (this.styleResolver("DIMTSZ") ?? 0) * t, u = this._GenerateArcVertices();
    for (let m = 0; m < u.length - 1; m++)
      e.AddLine(u[m], u[m + 1], n);
    const c = this._CreateExtensionLines(t, a);
    for (const m of c)
      e.AddLine(m.start, m.end, m.color);
    const f = this.radius * Math.abs(this.arcAngle) < o * 2;
    for (let m = 0; m < 2; m++) {
      const g = m === 0, C = g ? this.arcStart : this.arcEnd, S = g ? this.startAngle : this.endAngle;
      let E;
      g ? E = this.arcAngle > 0 ? S - Math.PI / 2 : S + Math.PI / 2 : E = this.arcAngle > 0 ? S + Math.PI / 2 : S - Math.PI / 2, f && (E += Math.PI);
      let w = new A0().identity();
      l > 0 ? w.scale(l, l) : w.scale(o, o), w.rotate(-E), w.translate(C.x, C.y), l > 0 ? this._CreateTick(e, w, n) : this._CreateArrowShape(e, w, n);
    }
    const d = this._GetText();
    let v = this.params.textAnchor;
    if (!v) {
      const m = this.startAngle + this.arcAngle / 2;
      v = new D(
        this.params.center.x + this.radius * Math.cos(m),
        this.params.center.y + this.radius * Math.sin(m)
      );
      const g = new D(
        Math.cos(m),
        Math.sin(m)
      );
      v.add(g.multiplyScalar(i * 0.75));
    }
    let y = (this.startAngle + this.arcAngle / 2) * 180 / Math.PI;
    return (y > 90 || y < -90) && (y += 180), y += this.params.textRotation ?? 0, e.AddText(d, i, y, s, v), e;
  }
  _CalculateGeometry() {
    const { center: e, point1: t, point2: n, arcPoint: s } = this.params;
    if (this.radius = e.distanceTo(s), this.radius === 0) {
      this.isValid = !1;
      return;
    }
    this.angle1 = Math.atan2(t.y - e.y, t.x - e.x), this.angle2 = Math.atan2(n.y - e.y, n.x - e.x);
    const a = Math.atan2(s.y - e.y, s.x - e.x);
    let i = this.angle2 - this.angle1;
    for (; i > Math.PI; ) i -= 2 * Math.PI;
    for (; i < -Math.PI; ) i += 2 * Math.PI;
    const o = this._isAngleBetween(a, this.angle1, this.angle1 + i);
    if (i > 0 ? o ? (this.startAngle = this.angle1, this.arcAngle = i) : (this.startAngle = this.angle1, this.arcAngle = i - 2 * Math.PI) : o ? (this.startAngle = this.angle1, this.arcAngle = i + 2 * Math.PI) : (this.startAngle = this.angle1, this.arcAngle = i), Math.abs(this.arcAngle) < 1e-10) {
      this.isValid = !1;
      return;
    }
    this.arcStart = new D(
      e.x + this.radius * Math.cos(this.startAngle),
      e.y + this.radius * Math.sin(this.startAngle)
    ), this.arcEnd = new D(
      e.x + this.radius * Math.cos(this.startAngle + this.arcAngle),
      e.y + this.radius * Math.sin(this.startAngle + this.arcAngle)
    );
  }
  _isAngleBetween(e, t, n) {
    const s = (l) => {
      for (; l < 0; ) l += 2 * Math.PI;
      for (; l >= 2 * Math.PI; ) l -= 2 * Math.PI;
      return l;
    }, a = s(e);
    let i = s(t), o = s(n);
    return i <= o ? a >= i && a <= o : a >= i || a <= o;
  }
  _GenerateArcVertices() {
    const e = [], t = this.params.arcTessellationAngle || 10 * Math.PI / 180, n = Math.max(1, Math.floor(Math.abs(this.arcAngle) / t)), s = this.arcAngle / n;
    for (let a = 0; a <= n; a++) {
      const i = this.startAngle + a * s;
      e.push(new D(
        this.params.center.x + this.radius * Math.cos(i),
        this.params.center.y + this.radius * Math.sin(i)
      ));
    }
    return e;
  }
  _CreateExtensionLines(e, t) {
    const n = [], s = (this.styleResolver("DIMEXO") ?? 0) * e, a = (this.styleResolver("DIMEXE") ?? 0) * e, i = (u, c, p) => {
      if (this.styleResolver(p) ?? 0)
        return null;
      const f = c.clone().sub(u);
      if (f.length() === 0)
        return null;
      f.normalize();
      const v = u.clone();
      s !== 0 && v.add(f.clone().multiplyScalar(s));
      const y = c.clone();
      return a !== 0 && y.add(f.clone().multiplyScalar(a)), { start: v, end: y, color: t };
    }, o = i(this.params.point1, this.arcStart, "DIMSE1");
    o && n.push(o);
    const l = i(this.params.point2, this.arcEnd, "DIMSE2");
    return l && n.push(l), n;
  }
  _CreateArrowShape(e, t, n) {
    const s = [];
    for (const a of ze.vertices)
      s.push(a.clone().applyMatrix3(t));
    e.AddTriangles(s, ze.indices, n);
  }
  _CreateTick(e, t, n) {
    e.AddLine(
      new D(0.5, 0.5).applyMatrix3(t),
      new D(-0.5, -0.5).applyMatrix3(t),
      n
    );
  }
  _GetText() {
    if (this.params.text === " ")
      return "";
    if ((this.params.text ?? "") !== "" && this.params.text.indexOf("<>") === -1)
      return M0(this.params.text);
    let e = Math.abs(this.arcAngle) * 180 / Math.PI;
    e *= this.styleResolver("DIMLFAC") ?? 1;
    const t = this.styleResolver("DIMRND") ?? 0;
    if (t > 0) {
      const u = Math.round(e / t);
      e = t * u;
    }
    const n = this.styleResolver("DIMZIN") ?? 0, s = (n & 4) !== 0, a = (n & 8) !== 0;
    let i = e.toFixed(this.styleResolver("DIMDEC") ?? 2);
    a && (i = i.replace(/\.?0+$/, "")), s && (i = i.replace(/^0+/, "")), i.startsWith(".") ? i = "0" + i : i === "" && (i = "0"), i.endsWith(".") && (i = i.substring(0, i.length - 1));
    let o = this.styleResolver("DIMDSEP") ?? ".";
    isNaN(o) || (o = String.fromCharCode(o)), o !== "." && (i = i.replace(".", o)), i += "°";
    const l = this.styleResolver("DIMPOST") ?? "";
    return l !== "" && (l.indexOf("<>") !== -1 ? i = l.replaceAll("<>", i) : i += l), (this.params.text ?? "") !== "" && (i = this.params.text.replaceAll("<>", i)), M0(i);
  }
}
function St(r, e, t, n, s = !1) {
  const a = e.x - r.x, i = e.y - r.y, o = n.x - t.x, l = n.y - t.y, u = a * l - i * o;
  if (Math.abs(u) < 1e-10)
    return null;
  const c = t.x - r.x, p = t.y - r.y, f = (c * l - p * o) / u, d = (c * i - p * a) / u;
  return !s && (f < 0 || f > 1 || d < 0 || d > 1) ? null : [f, d, u];
}
const A4 = Object.freeze({
  ODD_PARITY: 0,
  OUTERMOST: 1,
  THROUGH_ENTIRE_AREA: 2
}), C2 = 1e-4;
function Ve(r, e) {
  return !r.intersection || !e.intersection ? !1 : r.intersection[2] > 0 && e.intersection[2] > 0 || r.intersection[2] < 0 && e.intersection[2] < 0;
}
class Tt {
  constructor(e, t, n) {
    this.style = t, this.line = n, this.lineDir = n[1].clone().sub(n[0]).normalize(), this.loops = [];
    for (let s = 0; s < e.length; s++) {
      const a = e[s], i = [];
      for (let o = 0; o < a.length; o++)
        i.push({
          idx: o,
          start: a[o],
          end: a[o == a.length - 1 ? 0 : o + 1],
          loopIdx: s
        });
      this.loops.push(i);
    }
  }
  /**
   * @return {number[2][]} List of resulting line segments in parametric form. Parameter value 0
   *  corresponds to the provided line start point, 1 - to end point.
   */
  Calculate() {
    return this._ProcessEdges(), this._CreateNodes(), this.nodes.sort((e, t) => e.intersection[0] - t.intersection[0]), this.style == A4.THROUGH_ENTIRE_AREA ? this._GenerateThroughAllSegments() : this._GenerateOddParitySegments();
  }
  _ProcessEdges() {
    for (const e of this.loops)
      for (const t of e) {
        const n = t.end.clone().sub(t.start), s = n.length();
        if (t.isZero = s <= Number.EPSILON, t.isZero)
          continue;
        n.divideScalar(s);
        const a = n.cross(this.lineDir);
        t.isParallel = Math.abs(a) <= 1e-6, !t.isParallel && (t.intersection = St(
          this.line[0],
          this.line[1],
          t.start,
          t.end,
          !0
        ));
      }
  }
  /** Create intersection nodes. Each node with `toggle` property set causes line state change, so
   * unnecessary changes should be filtered out inside this method. Node also can suppress or
   * un-suppress line if currently enabled, this is done by setting `suppress` and
   * `unsuppress` properties on the edge.
   */
  _CreateNodes() {
    this.nodes = [];
    for (const e of this.loops)
      for (let t of e) {
        if (t.isZero || t.isParallel || t.isProcessed || !t.intersection || t.intersection[1] < -C2 || t.intersection[1] > 1 + C2)
          continue;
        const n = t.intersection[1] <= C2;
        if (n || t.intersection[1] >= 1 - C2) {
          let [s, a] = this._GetConnectedEdge(t, n);
          if (!s || !s.intersection)
            continue;
          if (t.isProcessed = !0, s.isProcessed = !0, a)
            Ve(t, s) && (t.toggle = !0, this.nodes.push(t));
          else {
            if (t.intersection[0] > s.intersection[0]) {
              const i = s;
              s = t, t = i;
            }
            t.suppress = !0, s.unsuppress = !0, this.nodes.push(t), Ve(t, s) && (s.toggle = !0), this.nodes.push(s);
          }
        } else
          t.isProcessed = !0, t.toggle = !0, this.nodes.push(t);
      }
  }
  /**
   * @param {Edge} edge
   * @param {boolean} isStartVtx True for connected through start vertex, false for end vertex.
   * @return {[?Edge, boolean]} Connected valid edge if found, null if not found (e.g. is the same
   *  edge for some reason). Second value is true if directly connected, false if though colinear
   *  edges.
   */
  _GetConnectedEdge(e, t) {
    const n = this.loops[e.loopIdx];
    let s = e.idx, a = !0;
    do {
      t ? s == 0 ? s = n.length - 1 : s-- : s == n.length - 1 ? s = 0 : s++;
      const i = n[s];
      if (i.isZero || i.isParallel)
        a = !1;
      else
        return [i, a];
    } while (s != e.idx);
    return [null, !1];
  }
  _GenerateOddParitySegments() {
    const e = [];
    let t = !1, n = 0, s = null;
    for (const a of this.nodes)
      a.suppress && n++, a.unsuppress && n--, a.toggle && (t = !t), n == 0 && t && (a.unsuppress || a.toggle) ? s = a : (n || !t) && s && (a.intersection[0] - s.intersection[0] > Number.EPSILON && e.push([s.intersection[0], a.intersection[0]]), s = null);
    return e;
  }
  _GenerateThroughAllSegments() {
    const e = [];
    let t = 0, n = null;
    const s = new Array(this.loops.length).fill(0);
    function a() {
      for (const i of s)
        if (i != 0)
          return !1;
      return !0;
    }
    for (const i of this.nodes) {
      i.suppress && t++, i.unsuppress && t--;
      const o = a();
      i.toggle && (i.intersection[2] > 0 ? s[i.loopIdx]++ : s[i.loopIdx]--), t == 0 && !a() && (i.unsuppress || o) ? n = i : (t || a()) && n && (i.intersection[0] - n.intersection[0] > Number.EPSILON && e.push([n.intersection[0], i.intersection[0]]), n = null);
    }
    return e;
  }
}
class Et {
  /**
   * Arrays of `Path` to use as boundary, and each `Path` is array of `Point`.
   *
   * @param {Vector2[][]} boundaryLoops
   * @param {HatchStyle} style
   */
  constructor(e, t) {
    K2(this, "boundaryLoops");
    K2(this, "style");
    this.boundaryLoops = e, this.style = t;
  }
  /**
   * Clip `line` using strategy defined by `this.style`
   *
   * @param {[Vector2, Vector2]} line Line segment defined by start and end points. Assuming start
   *  and end points lie out of the boundary loops specified in the constructor.
   * @returns {[Vector2, Vector2][]} clipped line segments
   */
  ClipLine(e) {
    return new Tt(this.boundaryLoops, this.style, e).Calculate();
  }
  /**
   * @param {Vector2} seedPoint Pattern seed point coordinates in OCS.
   * @param {?number} angle Pattern rotation angle in radians.
   * @param {?number} scale Pattern scale.
   * @return {Matrix3} Transformation from OCS to pattern space.
   */
  GetPatternTransform({ seedPoint: e, angle: t, scale: n }) {
    const s = new A0().makeTranslation(-e.x, -e.y);
    return t && s.rotate(t), (n ?? 1) != 1 && s.scale(1 / n, 1 / n), s;
  }
  /**
   * @param {Matrix3} patTransform Transformation from OCS to pattern space previously obtained by
   *      GetPatternTransform() method.
   * @param {?Vector2} basePoint Line base point coordinate in pattern space.
   * @param {?number} angle Line direction angle in radians, CCW from +X direction.
   * @return {Matrix3} Transformation from OCS to pattern line space. Line is started at origin
   *  and directed into position X axis direction.
   */
  GetLineTransform({ patTransform: e, basePoint: t, angle: n }) {
    const s = e.clone();
    return t && s.translate(-t.x, -t.y), n && s.rotate(n), s;
  }
  /**
   * @param {Matrix3} transform Transformation from OCS to target coordinates space.
   * @return {Box2} Pattern AABB in target coordinate space.
   */
  GetBoundingBox(e) {
    const t = new h3();
    for (const n of this.boundaryLoops)
      for (const s of n)
        t.expandByPoint(s.clone().applyMatrix3(e));
    return t;
  }
}
class x {
  /**
   * @param {PatternLineDef[]} lines
   * @param {boolean} offsetInLineSpace Line offset is defined in line space when true, in pattern
   *  space when false. Pattern space offset is the observed behavior of AutoDesk viewer for
   *  patterns defined in hatch entity itself.
   */
  constructor(e, t = null, n = !0) {
    this.lines = e, this.name = t, this.offsetInLineSpace = n;
  }
  /** Detect QCAD default pattern embedded in HATCH entity. It does not correspond to real pattern
   * referenced by name.
   */
  get isQcadDefault() {
    if (this.lines.length != 1)
      return !1;
    const e = this.lines[0];
    return !(e.dashes || Math.abs(e.angle - Math.PI / 4) > 1e-13);
  }
  static ParsePatFile(e) {
    const t = e.split(/\r?\n/);
    if (t.length < 2)
      throw new Error("Invalid .pat file content");
    let n = null;
    const s = [];
    for (let a of t) {
      if (a = a.trim(), a == "" || a.startsWith(";"))
        continue;
      if (n === null) {
        const u = a.match(/\*([^,]+)(?:,.*)?/);
        if (!u)
          throw new Error("Bad header for .pat file content");
        n = u[1];
        continue;
      }
      const i = a.indexOf(";");
      i != -1 && (a = a.substring(0, i).trim());
      let o = a.split(/\s*,\s*/);
      o[o.length - 1] == "" && (o.length = o.length - 1), o = o.map((u) => {
        const c = parseFloat(u);
        if (isNaN(c))
          throw new Error("Failed to parse number in .pat file: " + u);
        return c;
      });
      const l = {
        angle: o[0] * Math.PI / 180,
        base: new D(o[1], o[2]),
        offset: new D(o[3], o[4])
      };
      o.length > 5 && (l.dashes = o.slice(5)), s.push(l);
    }
    return new x(s, n);
  }
}
const e6 = /* @__PURE__ */ new Map(), t6 = /* @__PURE__ */ new Map();
function b(r, e = !0) {
  if (!r.name)
    throw new Error("Anonymous pattern cannot be registered");
  const t = r.name.toUpperCase(), n = e ? e6 : t6;
  if (n.has(t)) {
    console.warn(`Pattern with name ${t} is already registered`);
    return;
  }
  n.set(t, r);
}
function We(r, e = !0) {
  return (e ? e6 : t6).get(r.toUpperCase());
}
b(x.ParsePatFile(`
*ACAD_ISO02W100,ACAD_ISO02W100
0, 0,0, 0,5, 12,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO03W100,ACAD_ISO03W100
0, 0,0, 0,5, 12,-18
`));
b(x.ParsePatFile(`
*ACAD_ISO04W100,ACAD_ISO04W100
0, 0,0, 0,5, 24,-3,.5,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO05W100,ACAD_ISO05W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO06W100,ACAD_ISO06W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -34,.5,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO07W100,ACAD_ISO07W100
0, 0,0, 0,5, .5,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO08W100,ACAD_ISO08W100
0, 0,0, 0,5, 24,-3,6,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO09W100,ACAD_ISO09W100
0, 0,0, 0,5, 24,-3,6,-3,6,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO10W100,ACAD_ISO10W100
0, 0,0, 0,5, 12,-3,.5,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO11W100,ACAD_ISO11W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO12W100,ACAD_ISO12W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO13W100,ACAD_ISO13W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-6.5
0, 0,0, 0,5, -33.5,.5,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO14W100,ACAD_ISO14W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -22,.5,-3
`));
b(x.ParsePatFile(`
*ACAD_ISO15W100,ACAD_ISO15W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-10
0, 0,0, 0,5, -33.5,.5,-3,.5,-3
`));
b(x.ParsePatFile(`
*ANGLE,ANGLE
0, 0,0, 0,6.985, 5.08,-1.905
90, 0,0, 0,6.985, 5.08,-1.905
`));
b(x.ParsePatFile(`
*ANSI31,ANSI31
45, 0,0, 0,3.175
`));
b(x.ParsePatFile(`
*ANSI32,ANSI32
45, 0,0, 0,9.525
45, 4.49013,0, 0,9.525
`));
b(x.ParsePatFile(`
*ANSI33,ANSI33
45, 0,0, 0,6.35
45, 4.49013,0, 0,6.35, 3.175,-1.5875
`));
b(x.ParsePatFile(`
*ANSI34,ANSI34
45, 0,0, 0,19.05
45, 4.49013,0, 0,19.05
45, 8.98026,0, 0,19.05
45, 13.4704,0, 0,19.05
`));
b(x.ParsePatFile(`
*ANSI35,ANSI35
45, 0,0, 0,6.35
45, 4.49013,0, 0,6.35, 7.9375,-1.5875,0,-1.5875
`));
b(x.ParsePatFile(`
*ANSI36,ANSI36
45, 0,0, 5.55625,3.175, 7.9375,-1.5875,0,-1.5875
`));
b(x.ParsePatFile(`
*ANSI37,ANSI37
45, 0,0, 0,3.175
135, 0,0, 0,3.175
`));
b(x.ParsePatFile(`
*ANSI38,ANSI38
45, 0,0, 0,3.175
135, 0,0, 6.35,3.175, 7.9375,-4.7625
`));
b(x.ParsePatFile(`
*AR-B816,AR-B816
0, 0,0, 0,203.2
90, 0,0, 203.2,203.2, 203.2,-203.2
`));
b(x.ParsePatFile(`
*AR-B816C,AR-B816C
0, 0,0, 203.2,203.2, 396.875,-9.525
0, -203.2,9.525, 203.2,203.2, 396.875,-9.525
90, 0,0, 203.2,203.2, -212.725,193.675
90, -9.525,0, 203.2,203.2, -212.725,193.675
`));
b(x.ParsePatFile(`
*AR-B88,AR-B88
0, 0,0, 0,203.2
90, 0,0, 203.2,101.6, 203.2,-203.2
`));
b(x.ParsePatFile(`
*AR-BRELM,AR-BRELM
0, 0,0, 0,135.484, 193.675,-9.525
0, 0,57.15, 0,135.484, 193.675,-9.525
0, 50.8,67.7418, 0,135.484, 92.075,-9.525
0, 50.8,124.892, 0,135.484, 92.075,-9.525
90, 0,0, 0,203.2, 57.15,-78.3336
90, -9.525,0, 0,203.2, 57.15,-78.3336
90, 50.8,67.7418, 0,101.6, 57.15,-78.3336
90, 41.275,67.7418, 0,101.6, 57.15,-78.3336
`));
b(x.ParsePatFile(`
*AR-BRSTD,AR-BRSTD
0, 0,0, 0,67.7418
90, 0,0, 67.7418,101.6, 67.7418,-67.7418
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*AR-HBONE,AR-HBONE
45, 0,0, 101.6,101.6, 304.8,-101.6
135, 71.842,71.842, 101.6,-101.6, 304.8,-101.6
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*AR-RROOF,AR-RROOF
0, 0,0, 55.88,25.4, 381,-50.8,127,-25.4
0, 33.782,12.7, -25.4,33.782, 76.2,-8.382,152.4,-19.05
0, 12.7,21.59, 132.08,17.018, 203.2,-35.56,101.6,-25.4
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*AR-SAND,AR-SAND
37.5, 0,0, 28.5242,39.8018, 0,-38.608,0,-43.18,0,-41.275
7.5, 0,0, 53.9242,65.2018, 0,-20.828,0,-34.798,0,-13.335
-32.5, -31.242,0, 66.6344,42.6212, 0,-12.7,0,-45.72,0,-59.69
-42.5, -31.242,0, 41.2344,68.0212, 0,-6.35,0,-29.972,0,-34.29
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*BOX,BOX
90, 0,0, 0,25.4
90, 6.35,0, 0,25.4
0, 0,0, 0,25.4, -6.35,6.35
0, 0,6.35, 0,25.4, -6.35,6.35
0, 0,12.7, 0,25.4, 6.35,-6.35
0, 0,19.05, 0,25.4, 6.35,-6.35
90, 12.7,0, 0,25.4, 6.35,-6.35
90, 19.05,0, 0,25.4, 6.35,-6.35
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*BRASS,BRASS
0, 0,0, 0,6.35
0, 0,3.175, 0,6.35, 3.175,-1.5875
`));
b(x.ParsePatFile(`
*BRICK,BRICK
0, 0,0, 0,6.35
90, 0,0, 0,12.7, 6.35,-6.35
90, 6.35,0, 0,12.7, -6.35,6.35
`));
b(x.ParsePatFile(`
*BRSTONE,BRSTONE
0, 0,0, 0,8.382
90, 22.86,0, 8.382,12.7, 8.382,-8.382
90, 20.32,0, 8.382,12.7, 8.382,-8.382
0, 22.86,1.397, 12.7,8.382, -22.86,2.54
0, 22.86,2.794, 12.7,8.382, -22.86,2.54
0, 22.86,4.191, 12.7,8.382, -22.86,2.54
0, 22.86,5.588, 12.7,8.382, -22.86,2.54
0, 22.86,6.985, 12.7,8.382, -22.86,2.54
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*CLAY,CLAY
0, 0,0, 0,4.7625
0, 0,.79375, 0,4.7625
0, 0,1.5875, 0,4.7625
0, 0,3.175, 0,4.7625, 4.7625,-3.175
`));
b(x.ParsePatFile(`
*CORK,CORK
0, 0,0, 0,3.175
135, 1.5875,-1.5875, 0,8.98026, 4.49013,-4.49013
135, 2.38125,-1.5875, 0,8.98026, 4.49013,-4.49013
135, 3.175,-1.5875, 0,8.98026, 4.49013,-4.49013
`));
b(x.ParsePatFile(`
*CROSS,CROSS
0, 0,0, 6.35,6.35, 3.175,-9.525
90, 1.5875,-1.5875, 6.35,6.35, 3.175,-9.525
`));
b(x.ParsePatFile(`
*DASH,DASH
0, 0,0, 3.175,3.175, 3.175,-3.175
`));
b(x.ParsePatFile(`
*DOLMIT,DOLMIT
0, 0,0, 0,6.35
45, 0,0, 0,17.9605, 8.98026,-17.9605
`));
b(x.ParsePatFile(`
*DOTS,DOTS
0, 0,0, .79375,1.5875, 0,-1.5875
`));
b(x.ParsePatFile(`
*EARTH,EARTH
0, 0,0, 6.35,6.35, 6.35,-6.35
0, 0,2.38125, 6.35,6.35, 6.35,-6.35
0, 0,4.7625, 6.35,6.35, 6.35,-6.35
90, .79375,5.55625, 6.35,6.35, 6.35,-6.35
90, 3.175,5.55625, 6.35,6.35, 6.35,-6.35
90, 5.55625,5.55625, 6.35,6.35, 6.35,-6.35
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*FLEX,FLEX
0, 0,0, 0,6.35, 6.35,-6.35
45, 6.35,0, 4.49013,4.49013, 1.5875,-5.80526,1.5875,-8.98026
`));
b(x.ParsePatFile(`
*GRASS,GRASS
90, 0,0, 17.9605,17.9605, 4.7625,-31.1585
45, 0,0, 0,25.4, 4.7625,-20.6375
135, 0,0, 0,25.4, 4.7625,-20.6375
`));
b(x.ParsePatFile(`
*GRATE,GRATE
0, 0,0, 0,.79375
90, 0,0, 0,3.175
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*HEX,HEX
0, 0,0, 0,5.49926, 3.175,-6.35
120, 0,0, 0,5.49926, 3.175,-6.35
60, 3.175,0, 0,5.49926, 3.175,-6.35
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*HONEY,HONEY
0, 0,0, 4.7625,2.74963, 3.175,-6.35
120, 0,0, 4.7625,2.74963, 3.175,-6.35
60, 0,0, 4.7625,2.74963, -6.35,3.175
`));
b(x.ParsePatFile(`
*HOUND,HOUND
0, 0,0, 6.35,1.5875, 25.4,-12.7
90, 0,0, -6.35,1.5875, 25.4,-12.7
`));
b(x.ParsePatFile(`
*INSUL,INSUL
0, 0,0, 0,9.525
0, 0,3.175, 0,9.525, 3.175,-3.175
0, 0,6.35, 0,9.525, 3.175,-3.175
`));
b(x.ParsePatFile(`
*JIS_LC_20,JIS_LC_20
45, 0,0, 0,20
45, .4,0, 0,20
`));
b(x.ParsePatFile(`
*JIS_LC_20A,JIS_LC_20A
45, 0,0, 0,20
45, 1,0, 0,20
`));
b(x.ParsePatFile(`
*JIS_LC_8,JIS_LC_8
45, 0,0, 0,7.8
45, .4,0, 0,7.8
`));
b(x.ParsePatFile(`
*JIS_LC_8A,JIS_LC_8A
45, 0,0, 0,7.8
45, 1,0, 0,7.8
`));
b(x.ParsePatFile(`
*JIS_RC_10,JIS_RC_10
45, 0,0, 0,10
45, .725,0, 0,10
45, 1.45,0, 0,10
`));
b(x.ParsePatFile(`
*JIS_RC_15,JIS_RC_15
45, 0,0, 0,15
45, .725,0, 0,15
45, 1.45,0, 0,15
`));
b(x.ParsePatFile(`
*JIS_RC_18,JIS_RC_18
45, 0,0, 0,18
45, 1,0, 0,18
45, 2,0, 0,18
`));
b(x.ParsePatFile(`
*JIS_RC_30,JIS_RC_30
45, 0,0, 0,30
45, 1,0, 0,30
45, 2,0, 0,30
`));
b(x.ParsePatFile(`
*JIS_STN_1E,JIS_STN_1E
45, 0,0, 0,1
45, .705,0, 0,1, 1,-.5
`));
b(x.ParsePatFile(`
*JIS_STN_2.5,JIS_STN_2.5
45, 0,0, 0,2.5
45, 1.765,0, 0,2.5, 1.2,-.5
`));
b(x.ParsePatFile(`
*JIS_WOOD,JIS_WOOD
45, 0,0, 0,.70710678
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*LATTICE-02
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,9.736666582,9.736666582,0,25.4,19.473333164,-5.926666836
270,15.663333418,25.4,25.4,25.4,25.4;,0 Removed 0 IT RENDERS A POINT
180,9.736666582,15.663333418,0,25.4,19.473333164,-5.926666836
270,9.736666582,25.4,25.4,25.4,25.4;,0 Removed 0 IT RENDERS A POINT
`));
b(x.ParsePatFile(`
*LATTICE-03
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
180,9.736666582,9.736666582,0,25.4,19.473333164,-5.926666836
180,9.736666582,15.663333418,0,25.4,19.473333164,-5.926666836
270,15.663333418,9.736666582,25.4,25.4,19.473333164,-5.926666836
270,9.736666582,9.736666582,25.4,25.4,19.473333164,-5.926666836
`));
b(x.ParsePatFile(`
*LATTICE-04
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in mm as metric QCAD3 pattern
296.565051,3.894666582,11.684,34.077676066,11.35922544,28.776704194,-28.019422498
296.565051,8.636000254,14.054666582,34.077676066,11.35922544,28.776704194,-28.019422498
206.565051,11.684,21.505333418,34.077676066,11.35922544,28.776704194,-28.019422498
206.565051,14.054666582,16.763999746,34.077676066,11.35922544,28.776704194,-28.019422498
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*LINE,LINE
0, 0,0, 0,3.175
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*MUDST,MUDST
0, 0,0, 12.7,6.35, 6.35,-6.35,0,-6.35,0,-6.35
`));
b(x.ParsePatFile(`
*NET,NET
0, 0,0, 0,3.175
90, 0,0, 0,3.175
`));
b(x.ParsePatFile(`
*NET3,NET3
0, 0,0, 0,3.175
60, 0,0, 0,3.175
120, 0,0, 0,3.175
`));
b(x.ParsePatFile(`
*PLAST,PLAST
0, 0,0, 0,6.35
0, 0,.79375, 0,6.35
0, 0,1.5875, 0,6.35
`));
b(x.ParsePatFile(`
*PLASTI,PLASTI
0, 0,0, 0,6.35
0, 0,.79375, 0,6.35
0, 0,1.5875, 0,6.35
0, 0,3.96875, 0,6.35
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*SACNCR,SACNCR
45, 0,0, 0,2.38125
45, 1.6838,0, 0,2.38125, 0,-2.38125
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*SQUARE,SQUARE
0, 0,0, 0,3.175, 3.175,-3.175
90, 0,0, 0,3.175, 3.175,-3.175
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*STARS,STARS
0, 0,0, 0,5.49926, 3.175,-3.175
60, 0,0, 0,5.49926, 3.175,-3.175
120, 1.5875,2.74963, 0,5.49926, 3.175,-3.175
`));
b(x.ParsePatFile(`
*STEEL,STEEL
45, 0,0, 0,3.175
45, 0,1.5875, 0,3.175
`));
b(x.ParsePatFile(`
*SWAMP,SWAMP
0, 0,0, 12.7,21.997, 3.175,-22.225
90, 1.5875,0, 21.997,12.7, 1.5875,-42.4066
90, 1.98438,0, 21.997,12.7, 1.27,-42.7241
90, 1.19062,0, 21.997,12.7, 1.27,-42.7241
60, 2.38125,0, 12.7,21.997, 1.016,-24.384
120, .79375,0, 12.7,21.997, 1.016,-24.384
`));
b(x.ParsePatFile(`
*TRANS,TRANS
0, 0,0, 0,6.35
0, 0,3.175, 0,6.35, 3.175,-3.175
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*TRIANG,TRIANG
60, 0,0, 4.7625,8.24889, 4.7625,-4.7625
120, 0,0, 4.76250001,8.24889, 4.7625,-4.7625
0, -2.38125,4.12445, 4.7625,8.24889, 4.7625,-4.7625
`));
b(x.ParsePatFile(`
*WEATHERBOARD,WEATHERBOARD
; By John Hyslop,    Manually Entered QCAD3 pattern
; Developed in mm as metric QCAD3 pattern
; Metric Hatch Scale 1 Makes 152mm horizontally placed boards
; with a 13mm offset line to simulate a rounded edge
0,0,0,0,152
0,0,13,0,152
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
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
`));
b(x.ParsePatFile(`
*ZIGZAG,ZIGZAG
0, 0,0, 3.175,3.175, 3.175,-3.175
90, 3.175,0, 3.175,3.175, 3.175,-3.175
`));
b(x.ParsePatFile(`
*ACAD_ISO02W100,ACAD_ISO02W100
0, 0,0, 0,5, 12,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO03W100,ACAD_ISO03W100
0, 0,0, 0,5, 12,-18
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO04W100,ACAD_ISO04W100
0, 0,0, 0,5, 24,-3,.5,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO05W100,ACAD_ISO05W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO06W100,ACAD_ISO06W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -34,.5,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO07W100,ACAD_ISO07W100
0, 0,0, 0,5, .5,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO08W100,ACAD_ISO08W100
0, 0,0, 0,5, 24,-3,6,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO09W100,ACAD_ISO09W100
0, 0,0, 0,5, 24,-3,6,-3,6,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO10W100,ACAD_ISO10W100
0, 0,0, 0,5, 12,-3,.5,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO11W100,ACAD_ISO11W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO12W100,ACAD_ISO12W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO13W100,ACAD_ISO13W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-6.5
0, 0,0, 0,5, -33.5,.5,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO14W100,ACAD_ISO14W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -22,.5,-3
`), !1);
b(x.ParsePatFile(`
*ACAD_ISO15W100,ACAD_ISO15W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-10
0, 0,0, 0,5, -33.5,.5,-3,.5,-3
`), !1);
b(x.ParsePatFile(`
*ANGLE,ANGLE
0, 0,0, 0,.275, .2,-.075
90, 0,0, 0,.275, .2,-.075
`), !1);
b(x.ParsePatFile(`
*ANSI31,ANSI31
45, 0,0, 0,.125
`), !1);
b(x.ParsePatFile(`
*ANSI32,ANSI32
45, 0,0, 0,.375
45, .1767767,0, 0,.375
`), !1);
b(x.ParsePatFile(`
*ANSI33,ANSI33
45, 0,0, 0,.25
45, .1767767,0, 0,.25, .125,-.0625
`), !1);
b(x.ParsePatFile(`
*ANSI34,ANSI34
45, 0,0, 0,.75
45, .1767767,0, 0,.75
45, .35355339,0, 0,.75
45, .53033009,0, 0,.75
`), !1);
b(x.ParsePatFile(`
*ANSI35,ANSI35
45, 0,0, 0,.25
45, .1767767,0, 0,.25, .3125,-.0625,0,-.0625
`), !1);
b(x.ParsePatFile(`
*ANSI36,ANSI36
45, 0,0, .21875,.125, .3125,-.0625,0,-.0625
`), !1);
b(x.ParsePatFile(`
*ANSI37,ANSI37
45, 0,0, 0,.125
135, 0,0, 0,.125
`), !1);
b(x.ParsePatFile(`
*ANSI38,ANSI38
45, 0,0, 0,.125
135, 0,0, .25,.125, .3125,-.1875
`), !1);
b(x.ParsePatFile(`
*AR-B816C,AR-B816C
0, 0,0, 8,8, 15.625,-.375
0, -8,.375, 8,8, 15.625,-.375
90, 0,0, 8,8, -8.375,7.625
90, -.375,0, 8,8, -8.375,7.625
`), !1);
b(x.ParsePatFile(`
*AR-B816,AR-B816
0, 0,0, 0,8
90, 0,0, 8,8, 8,-8
`), !1);
b(x.ParsePatFile(`
*AR-B88,AR-B88
0, 0,0, 0,8
90, 0,0, 8,4, 8,-8
`), !1);
b(x.ParsePatFile(`
*AR-BRELM,AR-BRELM
0, 0,0, 0,5.334, 7.625,-.375
0, 0,2.25, 0,5.334, 7.625,-.375
0, 2,2.667, 0,5.334, 3.625,-.375
0, 2,4.917, 0,5.334, 3.625,-.375
90, 0,0, 0,8, 2.25,-3.084
90, -.375,0, 0,8, 2.25,-3.084
90, 2,2.667, 0,4, 2.25,-3.084
90, 1.625,2.667, 0,4, 2.25,-3.084
`), !1);
b(x.ParsePatFile(`
*AR-BRSTD,AR-BRSTD
0, 0,0, 0,2.667
90, 0,0, 2.667,4, 2.667,-2.667
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*AR-HBONE,AR-HBONE
45, 0,0, 4,4, 12,-4
135, 2.82842713,2.82842713, 4,-4, 12,-4
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*AR-RROOF,AR-RROOF
0, 0,0, 2.2,1, 15,-2,5,-1
0, 1.33,.5, -1,1.33, 3,-.33,6,-.75
0, .5,.85, 5.2,.67, 8,-1.4,4,-1
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*AR-SAND,AR-SAND
37.5, 0,0, 1.123,1.567, 0,-1.52,0,-1.7,0,-1.625
7.5, 0,0, 2.123,2.567, 0,-.82,0,-1.37,0,-.525
-32.5, -1.23,0, 2.6234,1.678, 0,-.5,0,-1.8,0,-2.35
-42.5, -1.23,0, 1.6234,2.678, 0,-.25,0,-1.18,0,-1.35
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*BOX,BOX
90, 0,0, 0,1
90, .25,0, 0,1
0, 0,0, 0,1, -.25,.25
0, 0,.25, 0,1, -.25,.25
0, 0,.5, 0,1, .25,-.25
0, 0,.75, 0,1, .25,-.25
90, .5,0, 0,1, .25,-.25
90, .75,0, 0,1, .25,-.25
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*BRASS,BRASS
0, 0,0, 0,.25
0, 0,.125, 0,.25, .125,-.0625
`), !1);
b(x.ParsePatFile(`
*BRICK,BRICK
0, 0,0, 0,.25
90, 0,0, 0,.5, .25,-.25
90, .25,0, 0,.5, -.25,.25
`), !1);
b(x.ParsePatFile(`
*BRSTONE,BRSTONE
0, 0,0, 0,.33
90, .9,0, .33,.5, .33,-.33
90, .8,0, .33,.5, .33,-.33
0, .9,.055, .5,.33, -.9,.1
0, .9,.11, .5,.33, -.9,.1
0, .9,.165, .5,.33, -.9,.1
0, .9,.22, .5,.33, -.9,.1
0, .9,.275, .5,.33, -.9,.1
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*CLAY,CLAY
0, 0,0, 0,.1875
0, 0,.03125, 0,.1875
0, 0,.0625, 0,.1875
0, 0,.125, 0,.1875, .1875,-.125
`), !1);
b(x.ParsePatFile(`
*CORK,CORK
0, 0,0, 0,.125
135, .0625,-.0625, 0,.35355339, .1767767,-.1767767
135, .09375,-.0625, 0,.35355339, .1767767,-.1767767
135, .125,-.0625, 0,.35355339, .1767767,-.1767767
`), !1);
b(x.ParsePatFile(`
*CROSS,CROSS
0, 0,0, .25,.25, .125,-.375
90, .0625,-.0625, .25,.25, .125,-.375
`), !1);
b(x.ParsePatFile(`
*DASH,DASH
0, 0,0, .125,.125, .125,-.125
`), !1);
b(x.ParsePatFile(`
*DOLMIT,DOLMIT
0, 0,0, 0,.25
45, 0,0, 0,.70710678, .35355339,-.70710768
`), !1);
b(x.ParsePatFile(`
*DOTS,DOTS
0, 0,0, .03125,.0625, 0,-.0625
`), !1);
b(x.ParsePatFile(`
*EARTH,EARTH
0, 0,0, .25,.25, .25,-.25
0, 0,.09375, .25,.25, .25,-.25
0, 0,.1875, .25,.25, .25,-.25
90, .03125,.21875, .25,.25, .25,-.25
90, .125,.21875, .25,.25, .25,-.25
90, .21875,.21875, .25,.25, .25,-.25
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*FLEX,FLEX
0, 0,0, 0,.25, .25,-.25
45, .25,0, .1767767,.1767767, .0625,-.22855339,.0625,-.35355339
`), !1);
b(x.ParsePatFile(`
*GRASS,GRASS
90, 0,0, .70710678,.70710678, .1875,-1.22671356
45, 0,0, 0,1, .1875,-.8125
135, 0,0, 0,1, .1875,-.8125
`), !1);
b(x.ParsePatFile(`
*GRATE,GRATE
0, 0,0, 0,.03125
90, 0,0, 0,.125
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*HEX,HEX
0, 0,0, 0,.21650635, .125,-.25
120, 0,0, 0,.21650635, .125,-.25
60, .125,0, 0,.21650635, .125,-.25
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*HONEY,HONEY
0, 0,0, .1875,.10825317, .125,-.25
120, 0,0, .1875,.10825317, .125,-.25
60, 0,0, .1875,.10825317, -.25,.125
`), !1);
b(x.ParsePatFile(`
*HOUND,HOUND
0, 0,0, .25,.0625, 1,-.5
90, 0,0, -.25,.0625, 1,-.5
`), !1);
b(x.ParsePatFile(`
*INSUL,INSUL
0, 0,0, 0,.375
0, 0,.125, 0,.375, .125,-.125
0, 0,.25, 0,.375, .125,-.125
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*LATTICE-02,LATTICE-02 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.38333333,0.38333333,0,1,0.76666666,-0.23333334
270,0.61666667,1,1,1,1;,0 Removed 0 IT RENDERS A POINT
180,0.38333333,0.61666667,0,1,0.76666666,-0.23333334
270,0.38333333,1,1,1,1,;0 Removed 0 IT RENDERS A POINT
`), !1);
b(x.ParsePatFile(`
*LATTICE-03,LATTICE-03 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.38333333,0.38333333,0,1,0.76666666,-0.23333334
180,0.38333333,0.61666667,0,1,0.76666666,-0.23333334
270,0.61666667,0.38333333,1,1,0.76666666,-0.23333334
270,0.38333333,0.38333333,1,1,0.76666666,-0.23333334
`), !1);
b(x.ParsePatFile(`
*LATTICE-04,LATTICE-04 verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
296.565051,0.15333333,0.46,1.34164079,0.4472136,1.13294111,-1.10312687
296.565051,0.34000001,0.55333333,1.34164079,0.4472136,1.13294111,-1.10312687
206.565051,0.46,0.84666667,1.34164079,0.4472136,1.13294111,-1.10312687
206.565051,0.55333333,0.65999999,1.34164079,0.4472136,1.13294111,-1.10312687
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*LINE,LINE
0, 0,0, 0,.125
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*MUDST,MUDST
0, 0,0, .5,.25, .25,-.25,0,-.25,0,-.25
`), !1);
b(x.ParsePatFile(`
*NET3,NET3
0, 0,0, 0,.125
60, 0,0, 0,.125
120, 0,0, 0,.125
`), !1);
b(x.ParsePatFile(`
*NET,NET
0, 0,0, 0,.125
90, 0,0, 0,.125
`), !1);
b(x.ParsePatFile(`
*PLASTI,PLASTI
0, 0,0, 0,.25
0, 0,.03125, 0,.25
0, 0,.0625, 0,.25
0, 0,.15625, 0,.25
`), !1);
b(x.ParsePatFile(`
*PLAST,PLAST
0, 0,0, 0,.25
0, 0,.03125, 0,.25
0, 0,.0625, 0,.25
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*SACNCR,SACNCR
45, 0,0, 0,.09375
45, .06629126,0, 0,.09375, 0,-.09375
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*SQUARE,SQUARE
0, 0,0, 0,.125, .125,-.125
90, 0,0, 0,.125, .125,-.125
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*STARS,STARS
0, 0,0, 0,.21650635, .125,-.125
60, 0,0, 0,.21650635, .125,-.125
120, .0625,.10825318, 0,.21650635, .125,-.125
`), !1);
b(x.ParsePatFile(`
*STEEL,STEEL
45, 0,0, 0,.125
45, 0,.0625, 0,.125
`), !1);
b(x.ParsePatFile(`
*SWAMP,SWAMP
0, 0,0, .5,.8660254, .125,-.875
90, .0625,0, .8660254,.5, .0625,-1.66955081
90, .078125,0, .8660254,.5, .05,-1.68205081
90, .046875,0, .8660254,.5, .05,-1.68205081
60, .09375,0, .5,.8660254, .04,-.96
120, .03125,0, .5,.8660254, .04,-.96
`), !1);
b(x.ParsePatFile(`
*TRANS,TRANS
0, 0,0, 0,.25
0, 0,.125, 0,.25, .125,-.125
`), !1);
b(x.ParsePatFile(`
*TRIANG,TRIANG
60, 0,0, .1875,.32475953, .1875,-.1875
120, 0,0, .1875,.32475953, .1875,-.1875
0, -.09375,.16237976, .1875,.32475953, .1875,-.1875
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*WEATHERBOARD,WEATHERBOARD
; By John Hyslop,    Manually Entered QCAD3 pattern
; Developed in inch as imperial QCAD3 pattern
; Imperial Hatch Scale 1 Makes 6inch horizontally placed boards
; with a 0.5in offset line to simulate a rounded edge
0,0,0,0,6
0,0,0.5,0,6
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
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
`), !1);
b(x.ParsePatFile(`
*ZIGZAG,ZIGZAG
0, 0,0, .125,.125, .125,-.125
90, .125,0, .125,.125, .125,-.125
`), !1);
function At(r, e, t = 2) {
  const n = e && e.length, s = n ? e[0] * t : r.length;
  let a = r6(r, 0, s, t, !0);
  const i = [];
  if (!a || a.next === a.prev) return i;
  let o, l, u;
  if (n && (a = Ft(r, e, a, t)), r.length > 80 * t) {
    o = r[0], l = r[1];
    let c = o, p = l;
    for (let f = t; f < s; f += t) {
      const d = r[f], v = r[f + 1];
      d < o && (o = d), v < l && (l = v), d > c && (c = d), v > p && (p = v);
    }
    u = Math.max(c - o, p - l), u = u !== 0 ? 32767 / u : 0;
  }
  return e2(a, i, t, o, l, u, 0), i;
}
function r6(r, e, t, n, s) {
  let a;
  if (s === Gt(r, e, t, n) > 0)
    for (let i = e; i < t; i += n) a = Xe(i / n | 0, r[i], r[i + 1], a);
  else
    for (let i = t - n; i >= e; i -= n) a = Xe(i / n | 0, r[i], r[i + 1], a);
  return a && _1(a, a.next) && (r2(a), a = a.next), a;
}
function C1(r, e) {
  if (!r) return r;
  e || (e = r);
  let t = r, n;
  do
    if (n = !1, !t.steiner && (_1(t, t.next) || l0(t.prev, t, t.next) === 0)) {
      if (r2(t), t = e = t.prev, t === t.next) break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function e2(r, e, t, n, s, a, i) {
  if (!r) return;
  !i && a && Rt(r, n, s, a);
  let o = r;
  for (; r.prev !== r.next; ) {
    const l = r.prev, u = r.next;
    if (a ? kt(r, n, s, a) : Ct(r)) {
      e.push(l.i, r.i, u.i), r2(r), r = u.next, o = u.next;
      continue;
    }
    if (r = u, r === o) {
      i ? i === 1 ? (r = Pt(C1(r), e), e2(r, e, t, n, s, a, 2)) : i === 2 && wt(r, e, t, n, s, a) : e2(C1(r), e, t, n, s, a, 1);
      break;
    }
  }
}
function Ct(r) {
  const e = r.prev, t = r, n = r.next;
  if (l0(e, t, n) >= 0) return !1;
  const s = e.x, a = t.x, i = n.x, o = e.y, l = t.y, u = n.y, c = Math.min(s, a, i), p = Math.min(o, l, u), f = Math.max(s, a, i), d = Math.max(o, l, u);
  let v = n.next;
  for (; v !== e; ) {
    if (v.x >= c && v.x <= f && v.y >= p && v.y <= d && X1(s, o, a, l, i, u, v.x, v.y) && l0(v.prev, v, v.next) >= 0) return !1;
    v = v.next;
  }
  return !0;
}
function kt(r, e, t, n) {
  const s = r.prev, a = r, i = r.next;
  if (l0(s, a, i) >= 0) return !1;
  const o = s.x, l = a.x, u = i.x, c = s.y, p = a.y, f = i.y, d = Math.min(o, l, u), v = Math.min(c, p, f), y = Math.max(o, l, u), m = Math.max(c, p, f), g = C4(d, v, e, t, n), C = C4(y, m, e, t, n);
  let S = r.prevZ, E = r.nextZ;
  for (; S && S.z >= g && E && E.z <= C; ) {
    if (S.x >= d && S.x <= y && S.y >= v && S.y <= m && S !== s && S !== i && X1(o, c, l, p, u, f, S.x, S.y) && l0(S.prev, S, S.next) >= 0 || (S = S.prevZ, E.x >= d && E.x <= y && E.y >= v && E.y <= m && E !== s && E !== i && X1(o, c, l, p, u, f, E.x, E.y) && l0(E.prev, E, E.next) >= 0)) return !1;
    E = E.nextZ;
  }
  for (; S && S.z >= g; ) {
    if (S.x >= d && S.x <= y && S.y >= v && S.y <= m && S !== s && S !== i && X1(o, c, l, p, u, f, S.x, S.y) && l0(S.prev, S, S.next) >= 0) return !1;
    S = S.prevZ;
  }
  for (; E && E.z <= C; ) {
    if (E.x >= d && E.x <= y && E.y >= v && E.y <= m && E !== s && E !== i && X1(o, c, l, p, u, f, E.x, E.y) && l0(E.prev, E, E.next) >= 0) return !1;
    E = E.nextZ;
  }
  return !0;
}
function Pt(r, e) {
  let t = r;
  do {
    const n = t.prev, s = t.next.next;
    !_1(n, s) && s6(n, t, t.next, s) && t2(n, s) && t2(s, n) && (e.push(n.i, t.i, s.i), r2(t), r2(t.next), t = r = s), t = t.next;
  } while (t !== r);
  return C1(t);
}
function wt(r, e, t, n, s, a) {
  let i = r;
  do {
    let o = i.next.next;
    for (; o !== i.prev; ) {
      if (i.i !== o.i && Nt(i, o)) {
        let l = a6(i, o);
        i = C1(i, i.next), l = C1(l, l.next), e2(i, e, t, n, s, a, 0), e2(l, e, t, n, s, a, 0);
        return;
      }
      o = o.next;
    }
    i = i.next;
  } while (i !== r);
}
function Ft(r, e, t, n) {
  const s = [];
  for (let a = 0, i = e.length; a < i; a++) {
    const o = e[a] * n, l = a < i - 1 ? e[a + 1] * n : r.length, u = r6(r, o, l, n, !1);
    u === u.next && (u.steiner = !0), s.push(_t(u));
  }
  s.sort(Lt);
  for (let a = 0; a < s.length; a++)
    t = Dt(s[a], t);
  return t;
}
function Lt(r, e) {
  let t = r.x - e.x;
  if (t === 0 && (t = r.y - e.y, t === 0)) {
    const n = (r.next.y - r.y) / (r.next.x - r.x), s = (e.next.y - e.y) / (e.next.x - e.x);
    t = n - s;
  }
  return t;
}
function Dt(r, e) {
  const t = Ot(r, e);
  if (!t)
    return e;
  const n = a6(t, r);
  return C1(n, n.next), C1(t, t.next);
}
function Ot(r, e) {
  let t = e;
  const n = r.x, s = r.y;
  let a = -1 / 0, i;
  if (_1(r, t)) return t;
  do {
    if (_1(r, t.next)) return t.next;
    if (s <= t.y && s >= t.next.y && t.next.y !== t.y) {
      const p = t.x + (s - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (p <= n && p > a && (a = p, i = t.x < t.next.x ? t : t.next, p === n))
        return i;
    }
    t = t.next;
  } while (t !== e);
  if (!i) return null;
  const o = i, l = i.x, u = i.y;
  let c = 1 / 0;
  t = i;
  do {
    if (n >= t.x && t.x >= l && n !== t.x && n6(s < u ? n : a, s, l, u, s < u ? a : n, s, t.x, t.y)) {
      const p = Math.abs(s - t.y) / (n - t.x);
      t2(t, r) && (p < c || p === c && (t.x > i.x || t.x === i.x && It(i, t))) && (i = t, c = p);
    }
    t = t.next;
  } while (t !== o);
  return i;
}
function It(r, e) {
  return l0(r.prev, r, e.prev) < 0 && l0(e.next, r, r.next) < 0;
}
function Rt(r, e, t, n) {
  let s = r;
  do
    s.z === 0 && (s.z = C4(s.x, s.y, e, t, n)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== r);
  s.prevZ.nextZ = null, s.prevZ = null, Mt(s);
}
function Mt(r) {
  let e, t = 1;
  do {
    let n = r, s;
    r = null;
    let a = null;
    for (e = 0; n; ) {
      e++;
      let i = n, o = 0;
      for (let u = 0; u < t && (o++, i = i.nextZ, !!i); u++)
        ;
      let l = t;
      for (; o > 0 || l > 0 && i; )
        o !== 0 && (l === 0 || !i || n.z <= i.z) ? (s = n, n = n.nextZ, o--) : (s = i, i = i.nextZ, l--), a ? a.nextZ = s : r = s, s.prevZ = a, a = s;
      n = i;
    }
    a.nextZ = null, t *= 2;
  } while (e > 1);
  return r;
}
function C4(r, e, t, n, s) {
  return r = (r - t) * s | 0, e = (e - n) * s | 0, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r | e << 1;
}
function _t(r) {
  let e = r, t = r;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r);
  return t;
}
function n6(r, e, t, n, s, a, i, o) {
  return (s - i) * (e - o) >= (r - i) * (a - o) && (r - i) * (n - o) >= (t - i) * (e - o) && (t - i) * (a - o) >= (s - i) * (n - o);
}
function X1(r, e, t, n, s, a, i, o) {
  return !(r === i && e === o) && n6(r, e, t, n, s, a, i, o);
}
function Nt(r, e) {
  return r.next.i !== e.i && r.prev.i !== e.i && !Bt(r, e) && // doesn't intersect other edges
  (t2(r, e) && t2(e, r) && Ut(r, e) && // locally visible
  (l0(r.prev, r, e.prev) || l0(r, e.prev, e)) || // does not create opposite-facing sectors
  _1(r, e) && l0(r.prev, r, r.next) > 0 && l0(e.prev, e, e.next) > 0);
}
function l0(r, e, t) {
  return (e.y - r.y) * (t.x - e.x) - (e.x - r.x) * (t.y - e.y);
}
function _1(r, e) {
  return r.x === e.x && r.y === e.y;
}
function s6(r, e, t, n) {
  const s = P2(l0(r, e, t)), a = P2(l0(r, e, n)), i = P2(l0(t, n, r)), o = P2(l0(t, n, e));
  return !!(s !== a && i !== o || s === 0 && k2(r, t, e) || a === 0 && k2(r, n, e) || i === 0 && k2(t, r, n) || o === 0 && k2(t, e, n));
}
function k2(r, e, t) {
  return e.x <= Math.max(r.x, t.x) && e.x >= Math.min(r.x, t.x) && e.y <= Math.max(r.y, t.y) && e.y >= Math.min(r.y, t.y);
}
function P2(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}
function Bt(r, e) {
  let t = r;
  do {
    if (t.i !== r.i && t.next.i !== r.i && t.i !== e.i && t.next.i !== e.i && s6(t, t.next, r, e)) return !0;
    t = t.next;
  } while (t !== r);
  return !1;
}
function t2(r, e) {
  return l0(r.prev, r, r.next) < 0 ? l0(r, e, r.next) >= 0 && l0(r, r.prev, e) >= 0 : l0(r, e, r.prev) < 0 || l0(r, r.next, e) < 0;
}
function Ut(r, e) {
  let t = r, n = !1;
  const s = (r.x + e.x) / 2, a = (r.y + e.y) / 2;
  do
    t.y > a != t.next.y > a && t.next.y !== t.y && s < (t.next.x - t.x) * (a - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r);
  return n;
}
function a6(r, e) {
  const t = k4(r.i, r.x, r.y), n = k4(e.i, e.x, e.y), s = r.next, a = e.prev;
  return r.next = e, e.prev = r, t.next = s, s.prev = t, n.next = t, t.prev = n, a.next = n, n.prev = a, n;
}
function Xe(r, e, t, n) {
  const s = k4(r, e, t);
  return n ? (s.next = n.next, s.prev = n, n.next.prev = s, n.next = s) : (s.prev = s, s.next = s), s;
}
function r2(r) {
  r.next.prev = r.prev, r.prev.next = r.next, r.prevZ && (r.prevZ.nextZ = r.nextZ), r.nextZ && (r.nextZ.prevZ = r.prevZ);
}
function k4(r, e, t) {
  return {
    i: r,
    // vertex index in coordinates array
    x: e,
    y: t,
    // vertex coordinates
    prev: null,
    // previous and next vertex nodes in a polygon ring
    next: null,
    z: 0,
    // z-order curve value
    prevZ: null,
    // previous and next nodes in z-order
    nextZ: null,
    steiner: !1
    // indicates whether this is a steiner point
  };
}
function Gt(r, e, t, n) {
  let s = 0;
  for (let a = e, i = t - n; a < t; a += n)
    s += (r[i] - r[a]) * (r[a + 1] + r[i + 1]), i = a;
  return s;
}
const S1 = 65536, Ht = 15 * Math.PI / 180, Ye = "__point_shape", zt = 1024, Je = 4, Vt = 2e4, Wt = 2e4, Ze = {
  /* https://knowledge.autodesk.com/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2016/ENU/AutoCAD-Core/files/GUID-A17A69D7-25EF-4F57-B4EB-D53A56AB909C-htm.html */
  DIMTXT: function() {
    return 2.5;
  },
  DIMASZ: 2.5,
  //XXX 0.18 for imperial
  DIMCLRD: 0,
  DIMCLRE: 0,
  DIMCLRT: 0,
  DIMDEC: 2,
  //XXX 4 for imperial,
  DIMDLE: 0,
  DIMDSEP: 46,
  //XXX "," for imperial,
  DIMEXE: 1.25,
  //XXX 0.18 for imperial
  DIMEXO: 0.625,
  // XXX 0.0625 for imperial
  DIMFXL: 1,
  DIMFXLON: !1,
  DIMGAP: 0.625,
  //XXX for imperial
  DIMLFAC: 1,
  DIMRND: 0,
  DIMSAH: 0,
  DIMSCALE: 1,
  DIMSD1: 0,
  DIMSD2: 0,
  DIMSE1: 0,
  DIMSE2: 0,
  DIMSOXD: !1,
  DIMTSZ: 0,
  DIMZIN: 8
  //XXX 0 for imperial,
};
class c2 {
  constructor(e) {
    this.options = Object.create(c2.DefaultOptions), e && Object.assign(this.options, e.sceneOptions), this.origin = null, this.batches = new u2((t, n) => t.key.Compare(n.key)), this.layers = /* @__PURE__ */ new Map(), this.blocks = /* @__PURE__ */ new Map(), this.dimStyles = /* @__PURE__ */ new Map(), this.vars = /* @__PURE__ */ new Map(), this.fontStyles = /* @__PURE__ */ new Map(), this.inserts = /* @__PURE__ */ new Map(), this.bounds = null, this.pointShapeBlock = null, this.numBlocksFlattened = 0, this.numEntitiesFiltered = 0;
  }
  /** Build the scene from the provided parsed DXF.
   * @param dxf {{}} Parsed DXF file.
   * @param fontFetchers {?Function[]} List of font fetchers. Fetcher should return promise with
   *  loaded font object (opentype.js). They are invoked only when necessary. Each glyph is being
   *  searched sequentially in each provided font.
   */
  async Build(e, t) {
    const n = e.header || {};
    for (const [s, a] of Object.entries(n))
      s.startsWith("$") && this.vars.set(s.slice(1), a);
    if (this.angBase = this.vars.get("ANGBASE") ?? 0, this.angDir = this.vars.get("ANGDIR") ?? 0, this.pdMode = this.vars.get("PDMODE") ?? 0, this.pdSize = this.vars.get("PDSIZE") ?? 0, this.attMode = this.vars.get("ATTMODE") ?? 1, this.isMetric = (this.vars.get("MEASUREMENT") ?? 1) == 1, e.tables && e.tables.layer)
      for (const [, s] of Object.entries(e.tables.layer.layers))
        s.displayName = M0(s.name), this.layers.set(s.name, s);
    if (e.tables && e.tables.dimstyle)
      for (const [, s] of Object.entries(e.tables.dimstyle.dimStyles))
        this.dimStyles.set(s.name, s);
    if (e.tables && e.tables.style)
      for (const [, s] of Object.entries(e.tables.style.styles))
        this.fontStyles.set(s.styleName, s);
    if (e.blocks)
      for (const [, s] of Object.entries(e.blocks))
        this.blocks.set(s.name, new qe(s));
    this.textRenderer = new h2(t, this.options.textOptions), this.hasMissingChars = !1, await this._FetchFonts(e);
    for (const s of e.entities)
      if (this._FilterEntity(s)) {
        if (s.type === "INSERT") {
          this.inserts.set(s.handle, s);
          const a = this.blocks.get(s.name);
          a == null || a.RegisterInsert(s);
        } else if (s.type == "DIMENSION" && (s.block ?? null) !== null) {
          const a = this.blocks.get(s.block);
          a == null || a.RegisterInsert(s);
        }
      }
    for (const s of this.blocks.values()) {
      if (s.data.hasOwnProperty("entities")) {
        const a = s.DefinitionContext();
        for (const i of s.data.entities)
          this._FilterEntity(i) && (i.type === "ATTDEF" ? this._DecomposeAttdef(i, s) : this._ProcessDxfEntity(i, a));
      }
      s.SetFlatten() && this.numBlocksFlattened++;
    }
    console.log(`${this.numBlocksFlattened} blocks flattened`);
    for (const s of e.entities) {
      if (!this._FilterEntity(s)) {
        this.numEntitiesFiltered++;
        continue;
      }
      this._ProcessDxfEntity(s);
    }
    console.log(`${this.numEntitiesFiltered} entities filtered`), this.scene = this._BuildScene(), delete this.batches, delete this.layers, delete this.blocks, delete this.textRenderer;
  }
  /** @return False to suppress the specified entity, true to permit rendering. */
  _FilterEntity(e) {
    if (e.type === "ATTRIB" && this.attMode === 0 || e.hidden && !(this.attMode === 2 && e.type === "ATTRIB"))
      return !1;
    const t = this._GetEntityLayer(e);
    if (t != "0") {
      const n = this.layers.get(t);
      if (n != null && n.frozen)
        return !1;
    }
    return !this.options.suppressPaperSpace || !e.inPaperSpace;
  }
  async _FetchFonts(e) {
    function t(s) {
      return s.type === "TEXT" || s.type === "MTEXT" || s.type === "DIMENSION" || s.type === "ATTDEF" || s.type === "ATTRIB";
    }
    const n = async (s) => {
      if (!this._FilterEntity(s))
        return !0;
      let a;
      if (s.type === "TEXT" || s.type === "ATTRIB" || s.type === "ATTDEF")
        a = await this.textRenderer.FetchFonts(M0(s.text || ""));
      else if (s.type === "MTEXT") {
        const i = new i1();
        i.Parse(s.text), a = !0;
        for (const o of i.GetText())
          if (!await this.textRenderer.FetchFonts(M0(o))) {
            a = !1;
            break;
          }
      } else if (s.type === "DIMENSION") {
        a = !0;
        const i = this._CreateDimension(s);
        if (i) {
          for (const o of i.GetTexts())
            if (!await this.textRenderer.FetchFonts(o)) {
              a = !1;
              break;
            }
        }
      } else
        throw new Error("Bad entity type");
      return a || (this.hasMissingChars = !0), a;
    };
    for (const s of e.entities)
      if (t(s)) {
        if (!await n(s))
          return;
      } else if (s.type === "INSERT" && s.attribs) {
        for (const a of s.attribs)
          if (!await n(a))
            return;
      }
    for (const s of this.blocks.values())
      if (s.data.hasOwnProperty("entities")) {
        for (const a of s.data.entities)
          if (t(a)) {
            if (!await n(a))
              return;
          } else if (a.type === "INSERT" && a.attribs) {
            for (const i of a.attribs)
              if (!await n(i))
                return;
          }
      }
  }
  _ProcessDxfEntity(e, t = null) {
    let n;
    switch (e.type) {
      case "LINE":
        n = this._DecomposeLine(e, t);
        break;
      case "POLYLINE":
      case "LWPOLYLINE":
        n = this._DecomposePolyline(e, t);
        break;
      case "ARC":
        n = this._DecomposeArc(e, t);
        break;
      case "CIRCLE":
        n = this._DecomposeCircle(e, t);
        break;
      case "ELLIPSE":
        n = this._DecomposeEllipse(e, t);
        break;
      case "POINT":
        n = this._DecomposePoint(e, t);
        break;
      case "SPLINE":
        n = this._DecomposeSpline(e, t);
        break;
      case "INSERT":
        this._ProcessInsert(e, t);
        return;
      case "TEXT":
        n = this._DecomposeText(e, t);
        break;
      case "MTEXT":
        n = this._DecomposeMText(e, t);
        break;
      case "3DFACE":
        n = this._Decompose3DFace(e, t);
        break;
      case "SOLID":
        n = this._DecomposeSolid(e, t);
        break;
      case "DIMENSION":
        n = this._DecomposeDimension(e, t);
        break;
      case "ATTRIB":
        if (e.ownerHandle && this.inserts && this.inserts.has(e.ownerHandle))
          return;
        n = this._DecomposeAttribute(e, t);
        break;
      case "HATCH":
        n = this._DecomposeHatch(e, t);
        break;
      case "LEADER":
        n = this._DecomposeLeader(e, t);
        break;
      case "MULTILEADER":
        n = this._DecomposeMultiLeader(e, t);
        break;
      default:
        console.log("Unhandled entity type: " + e.type);
        return;
    }
    for (const s of n)
      s.dxfType = e.type, s.dxfHandle = e.handle, this._ProcessEntity(s, t);
  }
  /**
   * @param entity {Entity}
   * @param blockCtx {?BlockContext}
   */
  _ProcessEntity(e, t = null) {
    switch (e.type) {
      case N.Type.POINTS:
        this._ProcessPoints(e, t);
        break;
      case N.Type.LINE_SEGMENTS:
        this._ProcessLineSegments(e, t);
        break;
      case N.Type.POLYLINE:
        this._ProcessPolyline(e, t);
        break;
      case N.Type.TRIANGLES:
        this._ProcessTriangles(e, t);
        break;
      default:
        throw new Error("Unhandled entity type: " + e.type);
    }
  }
  /**
   * @param entity
   * @param vertex
   * @param blockCtx {?BlockContext}
   * @return {number}
   */
  _GetLineType(e, t = null, n = null) {
    return 0;
  }
  /** Check if start/end with are not specified. */
  _IsPlainLine(e) {
    return !0;
  }
  *_DecomposeLine(e, t) {
    if (e.vertices.length !== 2)
      return;
    const n = this._GetEntityLayer(e, t), s = this._GetEntityColor(e, t);
    yield new N({
      type: N.Type.LINE_SEGMENTS,
      vertices: e.vertices,
      layer: n,
      color: s,
      lineType: this._GetLineType(e, e.vertices[0])
    });
  }
  /** Generate vertices for bulged line segment.
   *
   * @param vertices Generated vertices pushed here.
   * @param startVtx Starting vertex. Assuming it is already present in the vertices array.
   * @param endVtx Ending vertex.
   * @param bulge Bulge value (see DXF specification).
   */
  _GenerateBulgeVertices(e, t, n, s) {
    const a = 4 * Math.atan(s), i = Math.abs(a);
    if (i < this.options.arcTessellationAngle) {
      e.push(new D(n.x, n.y));
      return;
    }
    const o = a / 2, l = Math.sin(o), u = Math.cos(o), c = { x: n.x - t.x, y: n.y - t.y }, p = c.x * c.x + c.y * c.y;
    if (p < Number.MIN_VALUE * 2)
      return;
    const f = Math.sqrt(p);
    let d = f / 2 / l;
    c.x /= f, c.y /= f;
    const v = {
      x: (c.x * l - c.y * u) * d + t.x,
      y: (c.x * u + c.y * l) * d + t.y
    };
    let y = Math.floor(i / this.options.arcTessellationAngle);
    if (y < this.options.minArcTessellationSubdivisions && (y = this.options.minArcTessellationSubdivisions), y > 1) {
      const m = Math.atan2(t.y - v.y, t.x - v.x), g = a / y;
      a < 0 && (d = -d);
      for (let C = 1; C < y; C++) {
        const S = m + C * g, E = new D(
          v.x + d * Math.cos(S),
          v.y + d * Math.sin(S)
        );
        e.push(E);
      }
    }
    e.push(new D(n.x, n.y));
  }
  /** Generate vertices for arc segment.
   *
   * @param vertices Generated vertices pushed here.
   * @param {{x, y}} center  Center vector.
   * @param {number} radius
   * @param {?number} startAngle Start angle in radians. Zero if not specified. Arc is drawn in
   *  CCW direction from start angle towards end angle.
   * @param {?number} endAngle Optional end angle in radians. Full circle is drawn if not
   *  specified.
   * @param {?number} tessellationAngle Arc tessellation angle in radians, default value is taken
   *  from scene options.
   * @param {?number} yRadius Specify to get ellipse arc. `radius` parameter used as X radius.
   * @param {?Matrix3} transform Optional transform matrix for the arc. Applied as last operation.
   * @param {?number} rotation Optional rotation angle for generated arc. Mostly for ellipses.
   * @param {?boolean} cwAngleDir Angles counted in clockwise direction from X positive direction.
   * @return {Vector2[]} List of generated vertices.
   */
  _GenerateArcVertices({
    vertices: e,
    center: t,
    radius: n,
    startAngle: s = null,
    endAngle: a = null,
    tessellationAngle: i = null,
    yRadius: o = null,
    transform: l = null,
    rotation: u = null,
    ccwAngleDir: c = !0
  }) {
    if (!t || !n)
      return;
    i || (i = this.options.arcTessellationAngle), o === null && (o = n), s == null ? s = 0 : s += this.angBase;
    let p = !1;
    if (a == null ? (a = s + 2 * Math.PI, p = !0) : a += this.angBase, !c) {
      const m = s;
      s = -a, a = -m;
    }
    for (; a <= s; )
      a += Math.PI * 2;
    const f = a - s;
    let d = Math.floor(f / i);
    d === 0 && (d = 1);
    const v = f / d;
    let y = null;
    u && (y = new A0().makeRotation(u));
    for (let m = 0; m <= d && !(m === d && p); m++) {
      let g;
      c ? g = s + m * v : g = s + (d - m) * v;
      const C = new D(n * Math.cos(g), o * Math.sin(g));
      y && C.applyMatrix3(y), C.add(t), l && C.applyMatrix3(l), e.push(C);
    }
  }
  *_DecomposeArc(e, t) {
    const n = this._GetEntityColor(e, t), s = this._GetEntityLayer(e, t), a = this._GetLineType(e, null, t), i = [];
    this._GenerateArcVertices({
      vertices: i,
      center: e.center,
      radius: e.radius,
      startAngle: e.startAngle,
      endAngle: e.endAngle,
      transform: this._GetEntityExtrusionTransform(e)
    }), yield new N({
      type: N.Type.POLYLINE,
      vertices: i,
      layer: s,
      color: n,
      lineType: a,
      shape: e.endAngle === void 0
    });
  }
  *_DecomposeCircle(e, t) {
    const n = this._GetEntityColor(e, t), s = this._GetEntityLayer(e, t), a = this._GetLineType(e, null, t), i = [];
    this._GenerateArcVertices({
      vertices: i,
      center: e.center,
      radius: e.radius,
      transform: this._GetEntityExtrusionTransform(e)
    }), yield new N({
      type: N.Type.POLYLINE,
      vertices: i,
      layer: s,
      color: n,
      lineType: a,
      shape: !0
    });
  }
  *_DecomposeEllipse(e, t) {
    const n = this._GetEntityColor(e, t), s = this._GetEntityLayer(e, t), a = this._GetLineType(e, null, t), i = [], o = Math.sqrt(e.majorAxisEndPoint.x * e.majorAxisEndPoint.x + e.majorAxisEndPoint.y * e.majorAxisEndPoint.y), l = o * e.axisRatio, u = Math.atan2(e.majorAxisEndPoint.y, e.majorAxisEndPoint.x), c = e.startAngle ?? 0;
    let p = e.endAngle ?? c + 2 * Math.PI;
    for (; p <= c; )
      p += Math.PI * 2;
    const f = (e.endAngle ?? null) === null || Math.abs(p - c - 2 * Math.PI) < 1e-6;
    this._GenerateArcVertices({
      vertices: i,
      center: e.center,
      radius: o,
      startAngle: e.startAngle,
      endAngle: f ? null : e.endAngle,
      yRadius: l,
      rotation: u,
      /* Assuming mirror transform if present, for ellipse it just
       * reverses angle direction.
       */
      ccwAngleDir: !this._GetEntityExtrusionTransform(e)
    }), yield new N({
      type: N.Type.POLYLINE,
      vertices: i,
      layer: s,
      color: n,
      lineType: a,
      shape: f
    });
  }
  *_DecomposePoint(e, t) {
    if (this.pdMode === T0.NONE || this.pdMode !== T0.DOT && this.pdSize <= 0)
      return;
    const n = this._GetEntityColor(e, t), s = this._GetEntityLayer(e, t), a = this.pdMode & T0.MARK_MASK;
    if ((this.pdMode & T0.SHAPE_MASK) !== 0) {
      const l = new J(
        s,
        Ye,
        J.GeometryType.POINT_INSTANCE,
        n,
        0
      );
      this._GetBatch(l).PushVertex(this._TransformVertex(e.position)), this._CreatePointShapeBlock();
      return;
    }
    if (a === T0.DOT) {
      yield new N({
        type: N.Type.POINTS,
        vertices: [e.position],
        layer: s,
        color: n,
        lineType: null
      });
      return;
    }
    const o = [];
    this._CreatePointMarker(o, a, e.position), yield new N({
      type: N.Type.LINE_SEGMENTS,
      vertices: o,
      layer: s,
      color: n,
      lineType: null
    });
  }
  /**
   * Store ATTDEF entity in block definition for later attribute matching.
   * @param entity {ATTDEF} Attribute definition entity.
   * @param block {Block} Block to store the ATTDEF in.
   */
  _DecomposeAttdef(e, t) {
    e.tag && t.attdefs.set(e.tag, e);
  }
  /**
   * Process ATTRIB entities attached to an INSERT entity.
   * Matches ATTRIB entities to ATTDEF definitions, applies transforms, and renders text.
   * @param insertEntity {INSERT} The INSERT entity.
   * @param block {Block} The block definition containing ATTDEF entities.
   * @param attribs {ATTRIB[]} Array of ATTRIB entities attached to the INSERT.
   * @param transform {Matrix3} Transform matrix for the INSERT.
   * @param layer {string} Layer name for the attributes.
   * @param color {number} Color for the attributes.
   */
  _ProcessInsertAttributes(e, t, n, s, a, i) {
    if (this.textRenderer.canRender)
      for (const o of n) {
        const l = o.tag ? t.attdefs.get(o.tag) : null;
        if (!!o.hidden && this.attMode !== 2)
          continue;
        const c = o.text ?? (l == null ? void 0 : l.text) ?? "";
        if (!c || c.length === 0)
          continue;
        const p = o.textHeight ?? (l == null ? void 0 : l.textHeight) ?? 1, f = o.scale ?? (l == null ? void 0 : l.scale) ?? 1, d = p, v = o.rotation ?? (l == null ? void 0 : l.rotation) ?? 0, y = o.horizontalJustification ?? (l == null ? void 0 : l.horizontalJustification) ?? 0, m = o.verticalJustification ?? (l == null ? void 0 : l.verticalJustification) ?? 0;
        o.textStyle ?? (l == null || l.textStyle);
        let g = o.startPoint, C = o.endPoint, S = !1;
        if (!g && (l != null && l.startPoint) && (g = l.startPoint, C = l.endPoint, S = !0), !g)
          continue;
        const E = S ? new D(g.x, g.y).applyMatrix3(s) : new D(g.x, g.y), w = C ? S ? new D(C.x, C.y).applyMatrix3(s) : new D(C.x, C.y) : E, L = this._GetEntityLayer(o, null) ?? a, F = this._GetEntityColor(o, null) ?? i, A = this.textRenderer.RenderMerged({
          text: M0(c),
          fontSize: d,
          widthFactor: f,
          startPos: E,
          endPos: w,
          rotation: v,
          hAlign: y,
          vAlign: m,
          color: F,
          layer: L
        });
        A ? (A.vertices && A.vertices.length > 0 && A.vertices[0], A.dxfType = "ATTRIB", A.dxfHandle = o.handle, this._ProcessEntity(A, null)) : console.warn(`[ATTRIB] RenderMerged returned null for text="${c}"`);
      }
  }
  *_DecomposeAttribute(e, t) {
    if (!this.textRenderer.canRender)
      return;
    const n = this.inserts.get(e.ownerHandle), s = this._GetEntityLayer(n ?? e, t), a = this._GetEntityColor(n ?? e, t);
    yield* this.textRenderer.Render({
      text: M0(e.text),
      fontSize: e.textHeight * e.scale,
      startPos: e.startPoint,
      endPos: e.endPoint,
      rotation: e.rotation,
      hAlign: e.horizontalJustification,
      vAlign: e.verticalJustification,
      color: a,
      layer: s
    });
  }
  /** Create line segments for point marker.
   * @param vertices
   * @param markType
   * @param position {?{x,y}} point center position, default is zero.
   */
  _CreatePointMarker(e, t, n = null) {
    const s = this;
    function a(i, o) {
      e.push({
        x: ((n == null ? void 0 : n.x) ?? 0) + i * s.pdSize * 0.5,
        y: ((n == null ? void 0 : n.y) ?? 0) + o * s.pdSize * 0.5
      });
    }
    switch (t) {
      case T0.PLUS:
        a(0, 1.5), a(0, -1.5), a(-1.5, 0), a(1.5, 0);
        break;
      case T0.CROSS:
        a(-1, 1), a(1, -1), a(1, 1), a(-1, -1);
        break;
      case T0.TICK:
        a(0, 1), a(0, 0);
        break;
      default:
        console.warn("Unsupported point display type: " + t);
    }
  }
  /** Create point shape block if not yet done. */
  _CreatePointShapeBlock() {
    if (this.pointShapeBlock)
      return;
    this.pointShapeBlock = new qe({
      name: Ye,
      position: { x: 0, y: 0 }
    }), this.pointShapeBlock.offset = new D(0, 0);
    const e = this.pointShapeBlock.DefinitionContext(), t = this.pdMode & T0.MARK_MASK;
    if (t !== T0.DOT && t !== T0.NONE) {
      const n = [];
      this._CreatePointMarker(n, t);
      const s = new N({
        type: N.Type.LINE_SEGMENTS,
        vertices: n,
        color: P0.BY_BLOCK
      });
      this._ProcessEntity(s, e);
    }
    if (this.pdMode & T0.SQUARE) {
      const n = this.pdSize * 0.5, s = [
        { x: -n, y: n },
        { x: n, y: n },
        { x: n, y: -n },
        { x: -n, y: -n }
      ], a = new N({
        type: N.Type.POLYLINE,
        vertices: s,
        color: P0.BY_BLOCK,
        shape: !0
      });
      this._ProcessEntity(a, e);
    }
    if (this.pdMode & T0.CIRCLE) {
      const n = [];
      this._GenerateArcVertices({
        vertices: n,
        center: { x: 0, y: 0 },
        radius: this.pdSize * 0.5,
        tessellationAngle: Ht
      });
      const s = new N({
        type: N.Type.POLYLINE,
        vertices: n,
        color: P0.BY_BLOCK,
        shape: !0
      });
      this._ProcessEntity(s, e);
    }
  }
  *_Decompose3DFace(e, t) {
    yield* this._DecomposeFace(e, e.vertices, t, this.options.wireframeMesh);
  }
  *_DecomposeSolid(e, t) {
    yield* this._DecomposeFace(
      e,
      e.points,
      t,
      !1,
      this._GetEntityExtrusionTransform(e)
    );
  }
  *_DecomposeFace(e, t, n, s, a = null) {
    const i = this._GetEntityLayer(e, n), o = this._GetEntityColor(e, n);
    function l(y, m, g) {
      const C = new D().subVectors(m, y), S = new D().subVectors(g, y);
      return Math.abs(C.cross(S)) > Number.EPSILON;
    }
    const u = new D(t[0].x, t[0].y), c = new D(t[1].x, t[1].y), p = new D(t[2].x, t[2].y);
    let f = null, d = l(u, c, p), v = !1;
    if (t.length > 3 && (f = new D(t[3].x, t[3].y), v = l(c, f, p), a && f.applyMatrix3(a)), a && (u.applyMatrix3(a), c.applyMatrix3(a), p.applyMatrix3(a)), !(!d && !v))
      if (s) {
        const y = [];
        d && !v ? y.push(u, c, p) : !d && v ? y.push(c, f, p) : y.push(u, c, f, p), yield new N({
          type: N.Type.POLYLINE,
          vertices: y,
          layer: i,
          color: o,
          shape: !0
        });
      } else {
        const y = [], m = [];
        d && (y.push(u, c, p), m.push(0, 1, 2)), v && (d ? m.push(1, 2, 3) : (y.push(c, p), m.push(0, 1, 2)), y.push(f)), yield new N({
          type: N.Type.TRIANGLES,
          vertices: y,
          indices: m,
          layer: i,
          color: o
        });
      }
  }
  *_DecomposeText(e, t) {
    if (!this.textRenderer.canRender)
      return;
    const n = this._GetEntityLayer(e, t), s = this._GetEntityColor(e, t), a = this._GetEntityTextStyle(e), i = (a == null ? void 0 : a.fixedTextHeight) === 0 ? null : a == null ? void 0 : a.fixedTextHeight;
    yield* this.textRenderer.Render({
      text: M0(e.text),
      fontSize: e.textHeight ?? i ?? 1,
      startPos: e.startPoint,
      endPos: e.endPoint,
      rotation: e.rotation,
      hAlign: e.halign,
      vAlign: e.valign,
      widthFactor: e.xScale,
      color: s,
      layer: n
    });
  }
  *_DecomposeMText(e, t) {
    if (!this.textRenderer.canRender)
      return;
    const n = this._GetEntityLayer(e, t), s = this._GetEntityColor(e, t), a = this._GetEntityTextStyle(e), i = (a == null ? void 0 : a.fixedTextHeight) === 0 ? null : a == null ? void 0 : a.fixedTextHeight, o = new i1();
    o.Parse(M0(e.text)), yield* this.textRenderer.RenderMText({
      formattedText: o.GetContent(),
      // May still be overwritten by inline formatting codes
      fontSize: e.height ?? i,
      position: e.position,
      rotation: e.rotation,
      direction: e.direction,
      attachment: e.attachmentPoint,
      lineSpacing: e.lineSpacing,
      width: e.width,
      color: s,
      layer: n
    });
  }
  /**
   * @return {?(LinearDimension|AngularDimension)} Dimension handler instance, null if not possible
   * to create from the provided entity.
   */
  _CreateDimension(e) {
    const t = (e.dimensionType || 0) & 15;
    let n = null;
    e.hasOwnProperty("styleName") && (n = this.dimStyles.get(e.styleName));
    const s = (o) => this._GetDimStyleValue(o, e, n), a = (o, l) => this.textRenderer.GetLineWidth(o, l);
    let i = null;
    if (t === 0 || t === 1) {
      if (!e.linearOrAngularPoint1 || !e.linearOrAngularPoint2 || !e.anchorPoint)
        return null;
      i = new xt({
        p1: new D().copy(e.linearOrAngularPoint1),
        p2: new D().copy(e.linearOrAngularPoint2),
        anchor: new D().copy(e.anchorPoint),
        isAligned: t === 1,
        angle: e.angle,
        text: e.text,
        textAnchor: e.middleOfText ? new D().copy(e.middleOfText) : null,
        textRotation: e.textRotation
      }, s, a);
    } else if (t === 2 || t === 5) {
      if (!e.anchorPoint || !e.linearOrAngularPoint1 || !e.linearOrAngularPoint2 || !e.arcPoint)
        return null;
      i = new bt({
        center: new D().copy(e.anchorPoint),
        point1: new D().copy(e.linearOrAngularPoint1),
        point2: new D().copy(e.linearOrAngularPoint2),
        arcPoint: new D().copy(e.arcPoint),
        text: e.text,
        textAnchor: e.middleOfText ? new D().copy(e.middleOfText) : null,
        textRotation: e.textRotation,
        arcTessellationAngle: this.options.arcTessellationAngle
      }, s, a);
    }
    return i ? i.IsValid() ? i : (console.warn("Invalid dimension geometry detected for " + e.handle), null) : (console.warn("Unsupported dimension type detected for " + e.handle), null);
  }
  *_DecomposeDimension(e, t) {
    if ((e.block ?? null) !== null && this.blocks.has(e.block)) {
      const l = {
        name: e.block,
        position: { x: 0, y: 0 },
        layer: e.layer,
        color: e.color,
        colorIndex: e.colorIndex
      };
      this._ProcessInsert(l, t);
      return;
    }
    const n = this._CreateDimension(e);
    if (!n)
      return;
    const s = this._GetEntityLayer(e, t), a = this._GetEntityColor(e, t), i = this._GetEntityExtrusionTransform(e), o = n.GenerateLayout();
    for (const l of o.lines) {
      const u = [];
      i && (l.start.applyMatrix3(i), l.end.applyMatrix3(i)), u.push(l.start, l.end), yield new N({
        type: N.Type.LINE_SEGMENTS,
        vertices: u,
        layer: s,
        color: l.color ?? a
      });
    }
    for (const l of o.triangles) {
      if (i)
        for (const u of l.vertices)
          u.applyMatrix3(i);
      yield new N({
        type: N.Type.TRIANGLES,
        vertices: l.vertices,
        indices: l.indices,
        layer: s,
        color: l.color ?? a
      });
    }
    if (this.textRenderer.canRender)
      for (const l of o.texts)
        i && l.position.applyMatrix3(i), yield* this.textRenderer.Render({
          text: l.text,
          fontSize: l.size,
          startPos: l.position,
          rotation: l.angle,
          hAlign: h0.CENTER,
          vAlign: C0.MIDDLE,
          color: l.color ?? a,
          layer: s
        });
  }
  /**
   * @param {Vector2[]} loop Loop vertices. Transformed in-place if transform specified.
   * @param {Matrix3 | null} transform
   * @param {number[] | null} result Resulting coordinates appended to this array.
   * @return {number[]} Each pair of numbers form vertex coordinate. This format is required for
   *  `earcut` library.
   */
  _TransformBoundaryLoop(e, t, n) {
    n || (n = []);
    for (const s of e)
      t && s.applyMatrix3(t), n.push(s.x), n.push(s.y);
    return n;
  }
  *_DecomposeHatch(e, t) {
    const n = this._GetHatchBoundaryLoops(e);
    if (n.length == 0) {
      console.warn("HATCH entity with empty boundary loops array (perhaps some loop types are not implemented yet)");
      return;
    }
    const s = e.hatchStyle ?? 0, a = this._GetEntityLayer(e, t), i = this._GetEntityColor(e, t), o = this._GetEntityExtrusionTransform(e);
    let l = null;
    if (n.sort((f, d) => f.isExternal != d.isExternal ? f.isExternal ? -1 : 1 : f.isOutermost != d.isOutermost ? f.isOutermost ? -1 : 1 : 0), s == A4.THROUGH_ENTIRE_AREA)
      l = [n[0].vertices];
    else if (s == A4.OUTERMOST) {
      l = [];
      for (const f of n)
        (f.isExternal || f.isOutermost) && l.push(f.vertices);
      l.length == 0 && (l = null);
    }
    if (l || (l = n.map((f) => f.vertices)), e.isSolid) {
      const f = this._TransformBoundaryLoop(l[0], o), d = [];
      for (let m = 1; m < l.length; m++)
        d.push(f.length / 2), this._TransformBoundaryLoop(l[m], o, f);
      const v = At(f, d), y = [];
      for (const m of l)
        y.push(...m);
      yield new N({
        type: N.Type.TRIANGLES,
        vertices: y,
        indices: v,
        layer: a,
        color: i
      });
      return;
    }
    const u = new Et(l, s);
    let c = null;
    if (e.definitionLines && (c = new x(e.definitionLines, e.patternName, !1)), (c == null || c.isQcadDefault) && e.patternName) {
      const f = We(e.patternName, this.isMetric);
      f ? c = f : console.log(`Hatch pattern with name ${e.patternName} not found (metric: ${this.isMetric})`);
    }
    if (c == null && (c = We("ANSI31")), !c)
      return;
    const p = e.seedPoints ? e.seedPoints : [{ x: 0, y: 0 }];
    for (const f of p) {
      const d = c.offsetInLineSpace ? u.GetPatternTransform({
        seedPoint: f,
        angle: e.patternAngle,
        scale: e.patternScale
      }) : new A0();
      for (const v of c.lines) {
        let y, m;
        if (c.offsetInLineSpace)
          y = v.offset.x, m = v.offset.y;
        else {
          const A = Math.sin(-(v.angle ?? 0)), k = Math.cos(-(v.angle ?? 0));
          y = v.offset.x * k - v.offset.y * A, m = v.offset.x * A + v.offset.y * k;
        }
        m < 0 && (m = -m, y = -y);
        const g = u.GetLineTransform({
          patTransform: d,
          basePoint: v.base,
          angle: v.angle ?? 0
        }), C = u.GetBoundingBox(g), S = (C.max.x - C.min.x) * 0.05;
        let E, w;
        if (m == 0 ? (E = 0, w = 0) : (E = Math.ceil(C.min.y / m), w = Math.floor(C.max.y / m)), w - E > Vt) {
          console.warn("Too many lines produced by hatching pattern");
          continue;
        }
        let L;
        if (v.dashes && v.dashes.length > 1) {
          L = 0;
          for (const A of v.dashes)
            A < 0 ? L -= A : L += A;
        } else
          L = null;
        const F = g.clone().invert();
        for (let A = E; A <= w; A++) {
          let s0 = function(W) {
            return (W - M) / e0;
          }, r0 = function(W) {
            const $ = j.clone().multiplyScalar(W[0]).add(Z), m0 = j.clone().multiplyScalar(W[1]).add(Z);
            return o && ($.applyMatrix3(o), m0.applyMatrix3(o)), W[1] - W[0] <= Number.EPSILON ? new N({
              type: N.Type.POINTS,
              vertices: [$],
              layer: a,
              color: i
            }) : new N({
              type: N.Type.LINE_SEGMENTS,
              vertices: [$, m0],
              layer: a,
              color: i
            });
          };
          const k = A * m, O = A * y, M = C.min.x - S, H = C.max.x + S, e0 = H - M, Z = new D(M, k).applyMatrix3(F), Q = new D(H, k).applyMatrix3(F), j = Q.clone().sub(Z), t0 = u.ClipLine([Z, Q]);
          function* a0(W, $) {
            for (const m0 of t0) {
              if (m0[0] >= $)
                return;
              if (m0[1] <= W)
                continue;
              const $0 = Math.max(W, m0[0]), N0 = Math.min($, m0[1]);
              yield [$0, N0], W = N0;
            }
          }
          if (L !== null) {
            let W = Math.floor((M - O) / L), $ = Math.floor((H - O) / L);
            if ($ - W >= Wt) {
              console.warn("Too many segments produced by hatching pattern line");
              continue;
            }
            for (let m0 = W; m0 <= $; m0++) {
              let $0 = s0(O + m0 * L);
              for (let N0 of v.dashes) {
                const e1 = N0 < 0;
                e1 && (N0 = -N0);
                const u1 = N0 / e0;
                if (!e1)
                  for (const t1 of a0(
                    $0,
                    $0 + u1
                  ))
                    yield r0(t1);
                $0 += u1;
              }
            }
          } else
            for (const W of t0)
              yield r0(W);
        }
      }
    }
  }
  *_DecomposeLeader(e, t) {
    if (!e.vertices || e.vertices.length < 2)
      return;
    const n = this._GetEntityLayer(e, t), s = this._GetEntityColor(e, t);
    e.pathType === 0 ? yield* this._DecomposeLeaderStraightPath(e, t, n, s) : e.pathType === 1 && (yield* this._DecomposeLeaderSplinePath(e, t, n, s)), e.arrowheadEnabled && e.vertices.length >= 2 && (yield* this._DecomposeLeaderArrowhead(e, t, n, s)), e.hasHookline && e.vertices.length >= 2 && (yield* this._DecomposeLeaderHookline(e, t, n, s));
  }
  *_DecomposeLeaderStraightPath(e, t, n, s) {
    const a = this._GetEntityExtrusionTransform(e), i = e.vertices;
    for (let o = 0; o < i.length - 1; o++) {
      let l = new D(i[o].x, i[o].y), u = new D(i[o + 1].x, i[o + 1].y);
      a && (l.applyMatrix3(a), u.applyMatrix3(a)), yield new N({
        type: N.Type.LINE_SEGMENTS,
        vertices: [l, u],
        indices: null,
        layer: n,
        color: s
      });
    }
  }
  _TessellateLeaderSpline(e) {
    const t = this.options.splineSubdivision || 4, n = [];
    for (let s = 0; s < e.length - 1; s++) {
      const a = e[s], i = e[s + 1];
      for (let o = 0; o <= t; o++) {
        const l = o / t;
        n.push({
          x: a.x + (i.x - a.x) * l,
          y: a.y + (i.y - a.y) * l,
          z: (a.z || 0) + ((i.z || 0) - (a.z || 0)) * l
        });
      }
    }
    return n;
  }
  *_DecomposeLeaderSplinePath(e, t, n, s) {
    const a = this._GetEntityExtrusionTransform(e), o = this._TessellateLeaderSpline(e.vertices).map((l) => {
      const u = new D(l.x, l.y);
      return a && u.applyMatrix3(a), u;
    });
    yield new N({
      type: N.Type.POLYLINE,
      vertices: o,
      shape: !1,
      // Not closed
      layer: n,
      color: s
    });
  }
  *_DecomposeLeaderArrowhead(e, t, n, s) {
    let a = null;
    e.dimStyleName && (a = this.dimStyles.get(e.dimStyleName));
    const o = ((g) => this._GetDimStyleValue(g, e, a))("DIMASZ") || 0.18, l = e.vertices[0], u = e.vertices[1];
    let c = {
      x: u.x - l.x,
      y: u.y - l.y,
      z: (u.z || 0) - (l.z || 0)
    };
    const p = Math.sqrt(c.x * c.x + c.y * c.y + c.z * c.z);
    if (p < Number.MIN_VALUE)
      return;
    c.x /= p, c.y /= p, c.z /= p;
    const f = {
      vertices: [
        new D(0, 0),
        new D(1, -0.25),
        new D(1, 0.25)
      ],
      indices: [0, 1, 2]
    }, d = Math.atan2(c.y, c.x), v = new A0().scale(o, o).rotate(d).translate(l.x, l.y);
    let y = f.vertices.map((g) => g.clone().applyMatrix3(v));
    const m = this._GetEntityExtrusionTransform(e);
    m && (y = y.map((g) => g.applyMatrix3(m))), yield new N({
      type: N.Type.TRIANGLES,
      vertices: y,
      indices: f.indices,
      layer: n,
      color: s
    });
  }
  *_DecomposeLeaderHookline(e, t, n, s) {
    let a = null;
    e.dimStyleName && (a = this.dimStyles.get(e.dimStyleName));
    const o = ((y) => this._GetDimStyleValue(y, e, a))("DIMGAP") || 0.09, l = e.vertices[e.vertices.length - 1], u = e.horizontalDirection || { x: 1, y: 0, z: 0 }, c = e.hooklineDirection === 0 ? -1 : 1, p = {
      x: l.x + u.x * o * c,
      y: l.y + u.y * o * c,
      z: (l.z || 0) + (u.z || 0) * o * c
    }, f = this._GetEntityExtrusionTransform(e);
    let d = new D(l.x, l.y), v = new D(p.x, p.y);
    f && (d.applyMatrix3(f), v.applyMatrix3(f)), yield new N({
      type: N.Type.LINE_SEGMENTS,
      vertices: [d, v],
      indices: null,
      layer: n,
      color: s
    });
  }
  *_DecomposeMultiLeader(e, t) {
    const n = this._GetEntityLayer(e, t), s = this._GetEntityColor(e, t), a = e.context;
    if (a) {
      for (const i of a.leaders) {
        for (const o of i.lines) {
          if (!o.vertices || o.vertices.length === 0)
            continue;
          const l = [...o.vertices];
          i.lastLeaderLinePoint && l.push(i.lastLeaderLinePoint);
          for (let u = 0; u < l.length - 1; u++) {
            const c = new D(l[u].x, l[u].y), p = new D(l[u + 1].x, l[u + 1].y);
            yield new N({
              type: N.Type.LINE_SEGMENTS,
              vertices: [c, p],
              indices: null,
              layer: n,
              color: s
            });
          }
          if (l.length >= 2) {
            const u = e.arrowheadSize || 4, c = l[0], p = l[1], f = p.x - c.x, d = p.y - c.y;
            if (Math.sqrt(f * f + d * d) > Number.EPSILON) {
              const y = Math.atan2(d, f), m = new A0().scale(u, u).rotate(-y).translate(c.x, c.y), g = [
                new D(0, 0),
                new D(1, -0.25),
                new D(1, 0.25)
              ].map((C) => C.clone().applyMatrix3(m));
              yield new N({
                type: N.Type.TRIANGLES,
                vertices: g,
                indices: [0, 1, 2],
                layer: n,
                color: s
              });
            }
          }
        }
        if (e.enableDogleg && i.hasSetDoglegVector && i.lastLeaderLinePoint && i.doglegVector) {
          const o = i.doglegLength || e.doglegLength || 8, l = new D(
            i.lastLeaderLinePoint.x,
            i.lastLeaderLinePoint.y
          ), u = new D(
            i.lastLeaderLinePoint.x + i.doglegVector.x * o,
            i.lastLeaderLinePoint.y + i.doglegVector.y * o
          );
          yield new N({
            type: N.Type.LINE_SEGMENTS,
            vertices: [l, u],
            indices: null,
            layer: n,
            color: s
          });
        }
      }
      if (e.contentType === 2 && a.textLabel && this.textRenderer.canRender) {
        const i = a.textLabel, o = a.textHeight || a.textHeightOverride || 4, l = a.textPosition || a.contentBasePosition, u = a.textDirection, c = a.textWidth || a.textDefinedWidth || 0;
        if (l) {
          let p = a.textRotation || 0;
          u && (u.x !== 0 || u.y !== 0) && (p = Math.atan2(u.y, u.x));
          const f = new i1();
          f.Parse(M0(i)), yield* this.textRenderer.RenderMText({
            formattedText: f.GetContent(),
            fontSize: o,
            position: l,
            rotation: p,
            direction: u,
            attachment: a.textLeftAttachment || a.textAttachmentDirection || 1,
            lineSpacing: a.textLineSpacing,
            width: c,
            color: s,
            layer: n
          });
        }
      }
    }
  }
  /**
   * @typedef {Object} HatchBoundaryLoop
   * @property {Vector2[]} vertices List of points in OCS coordinates.
   * @property {Boolean} isExternal
   * @property {Boolean} isOutermost
   */
  /** @return {HatchBoundaryLoop[]} Each loop is a list of points in OCS coordinates. */
  _GetHatchBoundaryLoops(e) {
    if (!e.boundaryLoops)
      return [];
    const t = [], n = (s, a) => {
      const i = a.length;
      if (i != 0) {
        if (s.length == 0)
          s.push(a[0]);
        else {
          const o = s[s.length - 1];
          (o.x != a[0].x || o.y != a[0].y) && s.push(a[0]);
        }
        for (let o = 1; o < i; o++)
          s.push(a[o]);
      }
    };
    for (const s of e.boundaryLoops) {
      const a = [];
      if (s.type & 2)
        for (let i = 0; i < s.polyline.vertices.length; i++) {
          const o = s.polyline.vertices[i];
          if ((o.bulge ?? 0) == 0)
            a.push(new D(o.x, o.y));
          else {
            (s.polyline.vertices[i == 0 ? s.polyline.vertices.length - 1 : i - 1].bulge ?? 0) == 0 && a.push(new D(o.x, o.y));
            const u = s.polyline.vertices[i == s.polyline.vertices.length - 1 ? 0 : i + 1];
            this._GenerateBulgeVertices(a, o, u, o.bulge);
          }
        }
      else if (s.edges && s.edges.length > 0)
        for (const i of s.edges)
          switch (i.type) {
            case 1:
              n(a, [
                new D(i.start.x, i.start.y),
                new D(i.end.x, i.end.y)
              ]);
              break;
            case 2: {
              const c = [];
              this._GenerateArcVertices({
                vertices: c,
                center: i.start,
                radius: i.radius,
                startAngle: i.startAngle,
                endAngle: i.endAngle,
                ccwAngleDir: i.isCcw
              }), n(a, c);
              break;
            }
            case 3: {
              const c = i.start, p = i.end, f = Math.sqrt(p.x * p.x + p.y * p.y), d = i.radius, v = f * d, y = Math.atan2(p.y, p.x), m = [];
              if (this._GenerateArcVertices({
                vertices: m,
                center: c,
                radius: f,
                startAngle: i.startAngle,
                endAngle: i.endAngle,
                yRadius: v,
                ccwAngleDir: i.isCcw
              }), y !== 0) {
                const g = Math.cos(y), C = Math.sin(y);
                for (const S of m) {
                  const E = S.x - c.x, w = S.y - c.y;
                  S.x = E * g - w * C + c.x, S.y = E * C + w * g + c.y;
                }
              }
              n(a, m);
              break;
            }
            case 4:
              const o = i.controlPoints.map((c) => [c.x, c.y]), l = o.length * Je, u = 1 / l;
              for (let c = 0; c <= l; c++) {
                const p = this._InterpolateSpline(
                  c * u,
                  i.degreeOfSplineCurve,
                  o,
                  i.knotValues
                );
                a.push(new D(p[0], p[1]));
              }
              break;
            default:
              console.warn("Unhandled hatch boundary loop edge type: " + i.type);
          }
      if (a.length > 2) {
        const i = a[0], o = a[a.length - 1];
        o.x == i.x && o.y == i.y && (a.length = a.length - 1);
      }
      a.length > 2 && t.push({
        vertices: a,
        isExternal: s.isExternal,
        isOutermost: s.isOutermost
      });
    }
    return t;
  }
  _GetDimStyleValue(e, t, n) {
    var a, i, o;
    const s = (o = (i = (a = t == null ? void 0 : t.xdata) == null ? void 0 : a.ACAD) == null ? void 0 : i.DSTYLE) == null ? void 0 : o.values;
    if (s) {
      let l = !0, u = !1;
      for (const c of s) {
        if (l) {
          if (c.code != 1070)
            break;
          x4.get(c.value) == e && (u = !0);
        } else if (u)
          return c.value;
        l = !l;
      }
    }
    if (n && n.hasOwnProperty(e))
      return n[e];
    if (this.vars.has(e))
      return this.vars.get(e);
    if (Ze.hasOwnProperty(e)) {
      const l = Ze[e];
      return l instanceof Function ? l.call(this) : l;
    }
    return null;
  }
  /**
   * Updates batches directly.
   * @param entity
   * @param blockCtx {?BlockContext} Nested block insert when non-null.
   */
  _ProcessInsert(e, t = null) {
    if (t) {
      if (t.name === e.name) {
        console.warn("Recursive block reference: " + t.name);
        return;
      }
      const c = this.blocks.get(e.name);
      if (!c) {
        console.warn("Unresolved nested block reference: " + e.name);
        return;
      }
      const p = t.NestedBlockContext(c, e);
      if (c.data.entities)
        for (const f of c.data.entities)
          this._ProcessDxfEntity(f, p);
      return;
    }
    const n = this.blocks.get(e.name);
    if (!n) {
      console.warn("Unresolved block reference in INSERT: " + e.name);
      return;
    }
    const s = n.HasGeometry(), a = e.attribs || [];
    if (!s && a.length === 0)
      return;
    const i = this._GetEntityLayer(e, null), o = this._GetEntityColor(e, null), l = this._GetLineType(e, null, null), u = n.InstantiationContext().GetInsertionTransform(e);
    if (s && n.bounds) {
      const c = n.bounds;
      this._UpdateBounds(new D(c.minX, c.minY).applyMatrix3(u)), this._UpdateBounds(new D(c.maxX, c.maxY).applyMatrix3(u)), this._UpdateBounds(new D(c.minX, c.maxY).applyMatrix3(u)), this._UpdateBounds(new D(c.maxX, c.minY).applyMatrix3(u));
    }
    if (u.translate(-this.origin.x, -this.origin.y), s)
      if (n.flatten)
        for (const c of n.batches)
          this._FlattenBatch(c, i, o, l, u);
      else {
        const c = new J(
          i,
          e.name,
          J.GeometryType.BLOCK_INSTANCE,
          o,
          l,
          e.handle,
          e.type
        );
        this._GetBatch(c).PushInstanceTransform(u);
      }
    a.length > 0 && this._ProcessInsertAttributes(e, n, a, u, i, o);
  }
  /** Flatten block definition batch. It is merged into suitable instant rendering batch. */
  _FlattenBatch(e, t, n, s, a) {
    t ?? (t = e.key.layerName);
    const i = t ? this.layers.get(t) : null;
    let o, l = 0;
    e.key.color === P0.BY_BLOCK ? o = n : e.key.color === P0.BY_LAYER ? o = (i == null ? void 0 : i.color) ?? 0 : o = e.key.color;
    const u = new J(t, null, e.key.geometryType, o, l);
    this._GetBatch(u).Merge(e, a);
  }
  /**
   * Generate entities for shaped polyline (e.g. line resulting in mesh). All segments are shaped
   * (have start/end width). Segments may be bulge.
   * @param vertices
   * @param layer
   * @param color
   * @param lineType
   * @param shape {Boolean} True if closed polyline.
   * @return {Generator<Entity>}
   */
  *_GenerateShapedPolyline(e, t, n, s, a) {
    yield new N({
      type: N.Type.POLYLINE,
      vertices: e,
      layer: t,
      color: n,
      lineType: s,
      shape: a
    });
  }
  /** Mirror entity vertices if necessary in case of extrusionDirection with negative Z specified.
   *
   * @param entity Entity to check.
   * @param vertices {?{x,y}[]} Vertices array to use instead of entity vertices attribute.
   * @return {{x,y}[]} Vertices array with mirrored X if necessary. All attributes preserved.
   */
  _MirrorEntityVertices(e, t = null) {
    if (!e.extrusionDirection || e.extrusionDirection.z >= 0)
      return t ?? e.vertices;
    (!t || t === e.vertices) && (t = e.vertices.slice());
    const n = t.length;
    for (let s = 0; s < n; s++) {
      const a = t[s], i = { x: -a.x };
      for (const o in a)
        a.hasOwnProperty(o) && o !== "x" && (i[o] = a[o]);
      t[s] = i;
    }
    return t;
  }
  *_DecomposePolyline(e, t = null) {
    if (e.isPolyfaceMesh) {
      yield* this._DecomposePolyfaceMesh(e, t);
      return;
    }
    let n, s;
    if (e.includesCurveFitVertices || e.includesSplineFitVertices ? (n = e.vertices.filter((d) => d.splineVertex || d.curveFittingVertex), s = n.length) : (n = e.vertices, s = e.vertices.length), s < 2)
      return;
    n = this._MirrorEntityVertices(e, n);
    const a = this._GetEntityColor(e, t), i = this._GetEntityLayer(e, t), o = this;
    let l = 0, u = this._IsPlainLine(n[0]), c = this._GetLineType(e, n[0], t), p = null;
    function* f(d) {
      if (d === l)
        return;
      let v = !1, y = p;
      d === s && l === 0 ? (v = !0, y === null && (y = n)) : d === s - 1 && l === 0 ? y === null && (y = n) : d === s ? y === null && (y = n.slice(l, d), y.push(n[0])) : y === null && (y = n.slice(l, d + 1)), u ? yield new N({
        type: N.Type.POLYLINE,
        vertices: y,
        layer: i,
        color: a,
        lineType: c,
        shape: v
      }) : yield* o._GenerateShapedPolyline(y, i, a, c, v), l = d, d !== s && (u = o._IsPlainLine(n[d]), c = o._GetLineType(e, n[d])), p = null;
    }
    for (let d = 1; d <= s; d++) {
      const v = n[d - 1];
      let y;
      if (d === s) {
        if (!e.shape) {
          yield* f(d - 1);
          break;
        }
        y = n[0];
      } else
        y = n[d];
      if (v.bulge && u ? (p === null && (p = n.slice(l, d)), this._GenerateBulgeVertices(p, v, y, v.bulge)) : p !== null && p.push(y), d === s) {
        yield* f(d);
        break;
      }
      const m = this._IsPlainLine(y), g = this._GetLineType(e, y);
      (m !== u || /* Line type is accounted for plain lines only. */
      u && g !== c) && (yield* f(d));
    }
  }
  *_DecomposePolyfaceMesh(e, t = null) {
    const n = this._GetEntityLayer(e, t), s = this._GetEntityColor(e, t), a = [], i = [];
    for (const u of e.vertices)
      if (u.faces) {
        const c = {
          indices: [],
          hiddenEdges: []
        };
        for (let p of u.faces) {
          if (p == 0)
            break;
          if (p > a.length) {
            if (65536 - p > a.length)
              continue;
            p = p - 65536;
          }
          c.indices.push(p < 0 ? -p - 1 : p - 1), c.hiddenEdges.push(p < 0);
        }
        (c.indices.length == 3 || c.indices.length == 4) && i.push(c);
      } else
        a.push(new D(u.x, u.y));
    const o = [], l = (u, c) => {
      if (o.length > 0) {
        const p = o[o.length - 1];
        if (p.indices[p.indices.length - 1] == u) {
          p.indices.push(c);
          return;
        }
        p.indices[0] == p.indices[p.indices.length - 1] && (p.isClosed = !0);
      }
      o.push({
        indices: [u, c],
        isClosed: !1
      });
    };
    for (const u of i)
      if (this.options.wireframeMesh)
        for (let c = 0; c < u.indices.length; c++) {
          if (u.hiddenEdges[c])
            continue;
          const p = c < u.indices.length - 1 ? c + 1 : 0;
          l(u.indices[c], u.indices[p]);
        }
      else {
        let c;
        u.indices.length == 3 ? c = u.indices : c = [
          u.indices[0],
          u.indices[1],
          u.indices[2],
          u.indices[0],
          u.indices[2],
          u.indices[3]
        ], yield new N({
          type: N.Type.TRIANGLES,
          vertices: a,
          indices: c,
          layer: n,
          color: s
        });
      }
    if (this.options.wireframeMesh)
      for (const u of o)
        if (u.length == 2)
          yield new N({
            type: N.Type.LINE_SEGMENTS,
            vertices: [a[u.indices[0]], a[u.indices[1]]],
            layer: n,
            color: s
          });
        else {
          const c = [];
          for (const p of u.indices)
            c.push(a[p]);
          yield new N({
            type: N.Type.POLYLINE,
            vertices: c,
            layer: n,
            color: s,
            shape: u.isClosed
          });
        }
  }
  *_DecomposeSpline(e, t = null) {
    const n = this._GetEntityColor(e, t), s = this._GetEntityLayer(e, t), a = this._GetLineType(e, null, t);
    if (!e.controlPoints)
      return;
    const i = e.controlPoints.map((c) => [c.x, c.y]), o = [], l = i.length * Je, u = 1 / l;
    for (let c = 0; c <= l; c++) {
      const p = this._InterpolateSpline(
        c * u,
        e.degreeOfSplineCurve,
        i,
        e.knotValues
      );
      o.push({ x: p[0], y: p[1] });
    }
    yield new N({ type: N.Type.POLYLINE, vertices: o, layer: s, color: n, lineType: a });
  }
  /** Get a point on a B-spline.
   * https://github.com/thibauts/b-spline
   * @param t {number} Point position on spline, [0..1].
   * @param degree {number} B-spline degree.
   * @param points {number[][]} Control points. Each point should have the same dimension which
   *  defines dimension of the result.
   * @param knots {?number[]} Knot vector. Should have size `points.length + degree + 1`. Default
   *  is uniform spline.
   * @param weights {?number} Optional weights vector.
   * @return {number[]} Resulting point on the specified position.
   */
  _InterpolateSpline(e, t, n, s = null, a = null) {
    let i, o, l, u;
    const c = n.length, p = n[0].length;
    if (t < 1)
      throw new Error("Degree must be at least 1 (linear)");
    if (t > c - 1)
      throw new Error("Degree must be less than or equal to point count - 1");
    if (!a)
      for (a = [], i = 0; i < c; i++)
        a[i] = 1;
    if (s) {
      if (s.length !== c + t + 1)
        throw new Error("Bad knot vector length");
    } else
      for (s = [], i = 0; i < c + t + 1; i++)
        s[i] = i;
    const f = [
      t,
      s.length - 1 - t
    ], d = s[f[0]], v = s[f[1]];
    for (e = e * (v - d) + d, e < d ? e = d : e > v && (e = v), l = f[0]; l < f[1] && !(e >= s[l] && e <= s[l + 1]); l++)
      ;
    const y = [];
    for (i = 0; i < c; i++) {
      for (y[i] = [], o = 0; o < p; o++)
        y[i][o] = n[i][o] * a[i];
      y[i][p] = a[i];
    }
    let m;
    for (u = 1; u <= t + 1; u++)
      for (i = l; i > l - t - 1 + u; i--)
        for (m = (e - s[i]) / (s[i + t + 1 - u] - s[i]), o = 0; o < p + 1; o++)
          y[i][o] = (1 - m) * y[i - 1][o] + m * y[i][o];
    const g = [];
    for (i = 0; i < p; i++)
      g[i] = y[l][i] / y[l][p];
    return g;
  }
  /**
   * @param entity {Entity}
   * @param blockCtx {?BlockContext}
   */
  _ProcessPoints(e, t = null) {
    const n = new J(
      e.layer,
      t == null ? void 0 : t.name,
      J.GeometryType.POINTS,
      e.color,
      0,
      e.dxfHandle,
      e.dxfType
    ), s = this._GetBatch(n);
    for (const a of e.vertices)
      s.PushVertex(this._TransformVertex(a, t));
  }
  /**
   * @param entity {Entity}
   * @param blockCtx {?BlockContext}
   */
  _ProcessLineSegments(e, t = null) {
    if (e.vertices.length % 2 !== 0)
      throw Error("Even number of vertices expected");
    const n = e.dxfType === "LINE" || e.dxfType === "LWPOLYLINE" || e.dxfType === "POLYLINE" || e.dxfType === "ARC" || e.dxfType === "CIRCLE" || e.dxfType === "ELLIPSE" || e.dxfType === "SPLINE" || e.dxfType === "TEXT" || e.dxfType === "MTEXT" || e.dxfType === "ATTRIB", s = new J(
      e.layer,
      t == null ? void 0 : t.name,
      J.GeometryType.LINES,
      e.color,
      e.lineType,
      n ? e.dxfHandle : null,
      n ? e.dxfType : null
    ), a = this._GetBatch(s);
    for (const i of e.vertices)
      a.PushVertex(this._TransformVertex(i, t));
  }
  /**
   * @param entity {Entity}
   * @param blockCtx {?BlockContext}
   */
  _ProcessPolyline(e, t = null) {
    if (e.vertices.length < 2)
      return;
    const n = e.vertices.length, s = e.dxfType === "LINE" || e.dxfType === "LWPOLYLINE" || e.dxfType === "POLYLINE" || e.dxfType === "ARC" || e.dxfType === "CIRCLE" || e.dxfType === "ELLIPSE" || e.dxfType === "SPLINE" || e.dxfType === "TEXT" || e.dxfType === "MTEXT" || e.dxfType === "ATTRIB";
    if (n <= 3) {
      const o = new J(
        e.layer,
        t == null ? void 0 : t.name,
        J.GeometryType.LINES,
        e.color,
        e.lineType,
        s ? e.dxfHandle : null,
        s ? e.dxfType : null
      ), l = this._GetBatch(o);
      let u = null;
      for (const c of e.vertices)
        u !== null && (l.PushVertex(this._TransformVertex(u, t)), l.PushVertex(this._TransformVertex(c, t))), u = c;
      e.shape && n > 2 && (l.PushVertex(this._TransformVertex(e.vertices[n - 1], t)), l.PushVertex(this._TransformVertex(e.vertices[0], t)));
      return;
    }
    const a = new J(
      e.layer,
      t == null ? void 0 : t.name,
      J.GeometryType.INDEXED_LINES,
      e.color,
      e.lineType,
      s ? e.dxfHandle : null,
      s ? e.dxfType : null
    ), i = this._GetBatch(a);
    for (const o of e._IterateLineChunks()) {
      const l = i.PushChunk(o.verticesCount);
      for (const u of o.vertices)
        l.PushVertex(this._TransformVertex(u, t));
      for (const u of o.indices)
        l.PushIndex(u);
      l.Finish();
    }
  }
  /**
   * @param entity {Entity}
   * @param blockCtx {?BlockContext}
   */
  _ProcessTriangles(e, t = null) {
    if (e.vertices.length < 3)
      return;
    if (e.indices.length % 3 !== 0) {
      console.error("Unexpected size of indices array: " + e.indices.length);
      return;
    }
    const n = e.dxfType === "TEXT" || e.dxfType === "MTEXT" || e.dxfType === "ATTRIB" || e.dxfType === "HATCH" || e.dxfType === "SOLID" || e.dxfType === "3DFACE", s = new J(
      e.layer,
      t == null ? void 0 : t.name,
      J.GeometryType.INDEXED_TRIANGLES,
      e.color,
      0,
      n ? e.dxfHandle : null,
      n ? e.dxfType : null
    ), i = this._GetBatch(s).PushChunk(e.vertices.length);
    for (const o of e.vertices)
      i.PushVertex(this._TransformVertex(o, t));
    for (const o of e.indices)
      i.PushIndex(o);
    i.Finish();
  }
  /** Resolve entity color.
   *
   * @param entity
   * @param blockCtx {?BlockContext}
   * @return {number} RGB color value. For block entity it also may be one of ColorCode values
   *  which are resolved on block instantiation.
   */
  _GetEntityColor(e, t = null) {
    let n = P0.BY_LAYER;
    if (e.colorIndex === 0)
      n = P0.BY_BLOCK;
    else if (e.colorIndex === 256) {
      if (e.hasOwnProperty("layer")) {
        const s = this.layers.get(e.layer);
        if (s)
          return s.color;
      }
      n = P0.BY_LAYER;
    } else e.hasOwnProperty("color") && e.color != null && (n = e.color);
    if (t)
      return n;
    if (n === P0.BY_BLOCK && (n = P0.BY_LAYER), n === P0.BY_LAYER) {
      const s = e.hasOwnProperty("layer") ? e.layer : "0", a = this.layers.get(s);
      if (a && a.color != null)
        return a.color;
    } else
      return n;
    return 0;
  }
  /** @return {?string} Layer name, null for block entity. */
  _GetEntityLayer(e, t = null) {
    return e.hasOwnProperty("layer") && e.layer != null ? e.layer : t ? null : "0";
  }
  /** @returns {TextStyle | null}  */
  _GetEntityTextStyle(e) {
    return e.hasOwnProperty("styleName") ? this.fontStyles.get(e.styleName) ?? null : null;
  }
  /** Check extrusionDirection property of the entity and return corresponding transform matrix.
   *
   * @return {?Matrix3} Null if not transform required.
   */
  _GetEntityExtrusionTransform(e) {
    return !e.hasOwnProperty("extrusionDirection") || e.extrusionDirection.z > 0 ? null : new A0().scale(-1, 1);
  }
  /** @return {RenderBatch} */
  _GetBatch(e) {
    let t = this.batches.find({ key: e });
    if (t !== null)
      return t;
    if (t = new Xt(e), this.batches.insert(t), e.blockName !== null && !e.IsInstanced()) {
      const n = this.blocks.get(e.blockName);
      n && n.batches.push(t);
    }
    return t;
  }
  /**
   * Apply all necessary final transforms to a vertex before just before storing it in a rendering
   * batch.
   * @param v {{x: number, y: number}}
   * @param blockCtx {BlockContext}
   * @return {{x: number, y: number}}
   */
  _TransformVertex(e, t = null) {
    return t ? t.TransformVertex(e) : (this._UpdateBounds(e), { x: e.x - this.origin.x, y: e.y - this.origin.y });
  }
  /** @param v {{x,y}} Vertex to extend bounding box with and set origin. */
  _UpdateBounds(e) {
    this.bounds === null ? this.bounds = { minX: e.x, maxX: e.x, minY: e.y, maxY: e.y } : (e.x < this.bounds.minX ? this.bounds.minX = e.x : e.x > this.bounds.maxX && (this.bounds.maxX = e.x), e.y < this.bounds.minY ? this.bounds.minY = e.y : e.y > this.bounds.maxY && (this.bounds.maxY = e.y)), this.origin === null && (this.origin = { x: e.x, y: e.y });
  }
  _BuildScene() {
    let e = 0, t = 0, n = 0;
    this.batches.each((i) => {
      e += i.GetVerticesBufferSize(), t += i.GetIndicesBufferSize(), n += i.GetTransformsSize();
    });
    const s = {
      vertices: new ArrayBuffer(e),
      indices: new ArrayBuffer(t),
      transforms: new ArrayBuffer(n),
      batches: [],
      layers: [],
      origin: this.origin,
      bounds: this.bounds,
      hasMissingChars: this.hasMissingChars
    }, a = {
      vertices: new Float32Array(s.vertices),
      verticesOffset: 0,
      indices: new Uint16Array(s.indices),
      indicesOffset: 0,
      transforms: new Float32Array(s.transforms),
      transformsOffset: 0
    };
    this.batches.each((i) => {
      s.batches.push(i.Serialize(a));
    });
    for (const i of this.layers.values())
      i.frozen || s.layers.push({
        name: i.name,
        displayName: i.displayName,
        color: i.color
      });
    return s.pointShapeHasDot = (this.pdMode & T0.MARK_MASK) === T0.DOT, s;
  }
}
class Xt {
  constructor(e) {
    this.key = e, e.IsIndexed() ? this.chunks = [] : e.geometryType === J.GeometryType.BLOCK_INSTANCE ? this.transforms = new B2(w0.FLOAT32) : this.vertices = new B2(w0.FLOAT32);
  }
  PushVertex(e) {
    const t = this.vertices.Push(e.x);
    return this.vertices.Push(e.y), t;
  }
  /**
   * @param matrix {Matrix3} 3x3 Transform matrix. Assuming 2D affine transform so only top 3x2
   *  sub-matrix is taken.
   */
  PushInstanceTransform(e) {
    for (let t = 0; t < 2; t++)
      for (let n = 0; n < 3; n++)
        this.transforms.Push(e.elements[n * 3 + t]);
  }
  /** This method actually reserves space for the specified number of indexed vertices in some
   * chunk. The returned object should be used to push exactly the same amount vertices and any
   * number of their referring indices.
   * @param verticesCount Number of vertices in the chunk.
   * @return {IndexedChunkWriter}
   */
  PushChunk(e) {
    if (e > S1)
      throw new Error("Vertices count exceeds chunk limit: " + e);
    let t = null, n = 0;
    for (const s of this.chunks) {
      const a = S1 - s.vertices.GetSize() / 2;
      a < e || (t === null || a < n) && (t = s, n = a);
    }
    return t === null && (t = this._NewChunk(e)), new Jt(t, e);
  }
  /** Merge other batch into this one. They should have the same geometry type. Instanced batches
   * are disallowed.
   *
   * @param batch {RenderBatch}
   * @param transform {?Matrix3} Optional transform to apply for merged vertices.
   */
  Merge(e, t = null) {
    if (this.key.geometryType !== e.key.geometryType)
      throw new Error(`Rendering batch merging geometry type mismatch: ${this.key.geometryType} !== ${e.key.geometryType}`);
    if (this.key.IsInstanced())
      throw new Error("Attempted to merge instanced batch");
    if (this.key.IsIndexed())
      for (const n of e.chunks) {
        const s = n.vertices.size, a = this.PushChunk(s / 2);
        for (let o = 0; o < s; o += 2) {
          const l = new D(n.vertices.Get(o), n.vertices.Get(o + 1));
          t && l.applyMatrix3(t), a.PushVertex(l);
        }
        const i = n.indices.size;
        for (let o = 0; o < i; o++)
          a.PushIndex(n.indices.Get(o));
        a.Finish();
      }
    else {
      const n = e.vertices.size;
      for (let s = 0; s < n; s += 2) {
        const a = new D(e.vertices.Get(s), e.vertices.Get(s + 1));
        t && a.applyMatrix3(t), this.PushVertex(a);
      }
    }
  }
  /** @return Vertices buffer required size in bytes. */
  GetVerticesBufferSize() {
    if (this.key.IsIndexed()) {
      let e = 0;
      for (const t of this.chunks)
        e += t.vertices.GetSize();
      return e * Float32Array.BYTES_PER_ELEMENT;
    } else return this.key.geometryType === J.GeometryType.BLOCK_INSTANCE ? 0 : this.vertices.GetSize() * Float32Array.BYTES_PER_ELEMENT;
  }
  /** @return Indices buffer required size in bytes. */
  GetIndicesBufferSize() {
    if (this.key.IsIndexed()) {
      let e = 0;
      for (const t of this.chunks)
        e += t.indices.GetSize();
      return e * Uint16Array.BYTES_PER_ELEMENT;
    } else
      return 0;
  }
  /** @return Instances transforms buffer required size in bytes. */
  GetTransformsSize() {
    return this.key.geometryType === J.GeometryType.BLOCK_INSTANCE ? this.transforms.GetSize() * Float32Array.BYTES_PER_ELEMENT : 0;
  }
  Serialize(e) {
    if (this.key.IsIndexed()) {
      const t = {
        key: this.key,
        dxfHandle: this.key.dxfHandle,
        dxfType: this.key.dxfType,
        chunks: []
      };
      for (const n of this.chunks)
        t.chunks.push(n.Serialize(e));
      return t;
    } else if (this.key.geometryType === J.GeometryType.BLOCK_INSTANCE) {
      const t = this.transforms.GetSize(), n = {
        key: this.key,
        dxfHandle: this.key.dxfHandle,
        dxfType: this.key.dxfType,
        transformsOffset: e.transformsOffset,
        transformsSize: t
      };
      return this.transforms.CopyTo(e.transforms, e.transformsOffset), e.transformsOffset += t, n;
    } else {
      const t = this.vertices.GetSize(), n = {
        key: this.key,
        dxfHandle: this.key.dxfHandle,
        dxfType: this.key.dxfType,
        verticesOffset: e.verticesOffset,
        verticesSize: t
      };
      return this.vertices.CopyTo(e.vertices, e.verticesOffset), e.verticesOffset += t, n;
    }
  }
  _NewChunk(e) {
    const t = new Yt(e);
    return this.chunks.push(t), t;
  }
}
let qe = class {
  /** @param data {{}} Raw DXF entity. */
  constructor(e) {
    this.data = e, this.useCount = 0, this.nestedUseCount = 0, this.verticesCount = 0, this.offset = null, this.batches = [], this.flatten = !1, this.bounds = null, this.attdefs = /* @__PURE__ */ new Map();
  }
  /** Set block flattening flag based on usage statistics.
   * @return {Boolean} New flatten flag state.
   */
  SetFlatten() {
    return this.HasGeometry() ? (this.flatten = this.useCount === 1 || this.useCount * this.verticesCount <= zt, this.flatten) : !1;
  }
  /** @return {Boolean} True if has something to draw. */
  HasGeometry() {
    return this.offset !== null;
  }
  /** @param {{}} entity May be either INSERT or DIMENSION. */
  RegisterInsert(e) {
    this.useCount++;
  }
  RegisterNestedUse(e) {
    this.nestedUseCount++;
  }
  /** @return {BlockContext} Context for block definition. */
  DefinitionContext() {
    return new L0(this, L0.Type.DEFINITION);
  }
  InstantiationContext() {
    return new L0(this, L0.Type.INSTANTIATION);
  }
  UpdateBounds(e) {
    this.bounds === null ? this.bounds = { minX: e.x, maxX: e.x, minY: e.y, maxY: e.y } : (e.x < this.bounds.minX ? this.bounds.minX = e.x : e.x > this.bounds.maxX && (this.bounds.maxX = e.x), e.y < this.bounds.minY ? this.bounds.minY = e.y : e.y > this.bounds.maxY && (this.bounds.maxY = e.y));
  }
};
class L0 {
  constructor(e, t) {
    this.block = e, this.type = t, this.origin = this.block.data.position, this.transform = new A0();
  }
  /** @return {string} Block name */
  get name() {
    return this.block.data.name;
  }
  /**
   * @param v {{x,y}}
   * @return {{x,y}}
   */
  TransformVertex(e) {
    const t = new D(e.x, e.y).applyMatrix3(this.transform);
    if (this.type !== L0.Type.DEFINITION && this.type !== L0.Type.NESTED_DEFINITION)
      throw new Error("Unexpected transform type");
    if (this.block.verticesCount++, this.block.offset === null) {
      this.block.offset = t;
      const n = new D();
      return this.block.UpdateBounds(n), n;
    }
    return t.sub(this.block.offset), this.block.UpdateBounds(t), t;
  }
  /**
   * Get transform for block instance.
   * @param entity Raw DXF INSERT entity.
   * @return {Matrix3} Transform matrix for block instance to apply to the block definition.
   */
  GetInsertionTransform(e) {
    const t = new A0().translate(-this.origin.x, -this.origin.y), n = e.yScale || 1, s = e.xScale || 1, a = -(e.rotation || 0) * Math.PI / 180;
    let i = e.position.x;
    const o = e.position.y;
    if (t.scale(s, n), t.rotate(a), t.translate(i, o), e.extrusionDirection && e.extrusionDirection.z < 0 && t.scale(-1, 1), this.type !== L0.Type.INSTANTIATION)
      return t;
    if (this.block.offset) {
      const l = new A0().translate(this.block.offset.x, this.block.offset.y);
      return t.multiply(l);
    }
    return t;
  }
  /**
   * Create context for nested block.
   * @param block {Block} Nested block.
   * @param entity Raw DXF INSERT entity.
   * @return {BlockContext} Context to use for nested block entities.
   */
  NestedBlockContext(e, t) {
    e.RegisterNestedUse(this.block);
    const s = new L0(e, L0.Type.NESTED_DEFINITION).GetInsertionTransform(t), a = new L0(this.block, L0.Type.NESTED_DEFINITION);
    return a.transform = new A0().multiplyMatrices(this.transform, s), a;
  }
}
L0.Type = Object.freeze({
  DEFINITION: 0,
  NESTED_DEFINITION: 1,
  INSTANTIATION: 2
});
class Yt {
  constructor(e) {
    e < 16 && (e = 16), this.indices = new B2(w0.UINT16, e * 2), this.vertices = new B2(w0.FLOAT32, e * 2);
  }
  Serialize(e) {
    const t = {};
    {
      const n = this.vertices.GetSize();
      t.verticesOffset = e.verticesOffset, t.verticesSize = n, this.vertices.CopyTo(e.vertices, e.verticesOffset), e.verticesOffset += n;
    }
    {
      const n = this.indices.GetSize();
      t.indicesOffset = e.indicesOffset, t.indicesSize = n, this.indices.CopyTo(e.indices, e.indicesOffset), e.indicesOffset += n;
    }
    return t;
  }
}
class Jt {
  constructor(e, t) {
    this.chunk = e, this.verticesCount = t, this.verticesOffset = this.chunk.vertices.GetSize() / 2, this.numVerticesPushed = 0;
  }
  PushVertex(e) {
    if (this.numVerticesPushed === this.verticesCount)
      throw new Error();
    this.chunk.vertices.Push(e.x), this.chunk.vertices.Push(e.y), this.numVerticesPushed++;
  }
  PushIndex(e) {
    if (e < 0 || e >= this.verticesCount)
      throw new Error(`Index out of range: ${e}/${this.verticesCount}`);
    this.chunk.indices.Push(e + this.verticesOffset);
  }
  Finish() {
    if (this.numVerticesPushed !== this.verticesCount)
      throw new Error(`Not all vertices pushed: ${this.numVerticesPushed}/${this.verticesCount}`);
  }
}
class N {
  /** @param type {number} See Entity.Type
   * @param vertices {{x, y}[]}
   * @param indices {?number[]} Indices for indexed geometry.
   * @param layer {?string}
   * @param color {number}
   * @param lineType {?number}
   * @param shape {Boolean} true if closed shape.
   */
  constructor({ type: e, vertices: t, indices: n = null, layer: s = null, color: a, lineType: i = 0, shape: o = !1 }) {
    this.type = e, this.vertices = t, this.indices = n, this.layer = s, this.color = a, this.lineType = i, this.shape = o;
  }
  *_IterateVertices(e, t) {
    for (let n = e; n < e + t; n++)
      yield this.vertices[n];
  }
  /** Split line into chunks with at most INDEXED_CHUNK_SIZE vertices in each one. Each chunk is
   * an object with the following properties:
   *  * "verticesCount" - length of "vertices"
   *  * "vertices" - iterator for included vertices.
   *  * "indices" - iterator for indices.
   *  Closed shapes are handled properly.
   */
  *_IterateLineChunks() {
    const e = this.vertices.length;
    if (e < 2)
      return;
    const t = this;
    for (let n = 0; n <= e; n += S1) {
      let s = e - n, a;
      if (s > S1 ? (s = S1, a = !1) : a = !0, a && this.shape && n > 0 && s === S1 && (a = !1), n === e && !this.shape)
        break;
      let i, o, l;
      s < 2 ? (s === 1 && this.shape ? i = (function* () {
        yield this.vertices[n], yield this.vertices[0];
      })() : s === 1 ? i = (function* () {
        yield this.vertices[n - 1], yield this.vertices[n];
      })() : i = (function* () {
        yield this.vertices[e - 1], yield this.vertices[0];
      })(), o = o4(2, !1), l = 2) : a && this.shape && n > 0 && s < S1 ? (i = (function* () {
        yield* t._IterateVertices(n, s), yield this.vertices[0];
      })(), o = o4(s + 1, !1), l = s + 1) : (i = this._IterateVertices(n, s), o = o4(
        s,
        a && n === 0 && this.shape
      ), l = s), yield {
        verticesCount: l,
        vertices: i,
        indices: o
      };
    }
  }
}
N.Type = Object.freeze({
  POINTS: 0,
  /** Each vertices pair defines a segment. */
  LINE_SEGMENTS: 1,
  POLYLINE: 2,
  TRIANGLES: 3
});
function* o4(r, e) {
  for (let t = 0; t < r - 1; t++)
    yield t, yield t + 1;
  e && r > 2 && (yield r - 1, yield 0);
}
const T0 = Object.freeze({
  DOT: 0,
  NONE: 1,
  PLUS: 2,
  CROSS: 3,
  TICK: 4,
  MARK_MASK: 15,
  CIRCLE: 32,
  SQUARE: 64,
  SHAPE_MASK: 240
}), P0 = Object.freeze({
  BY_LAYER: -1,
  BY_BLOCK: -2
});
c2.DefaultOptions = {
  /** Target angle for each segment of tessellated arc. */
  arcTessellationAngle: 10 / 180 * Math.PI,
  /** Divide arc to at least the specified number of segments. */
  minArcTessellationSubdivisions: 8,
  /** Render meshes (3DFACE group, POLYLINE polyface mesh) as wireframe instead of solid. */
  wireframeMesh: !1,
  /** Suppress paper-space entities when true (only model-space is rendered). */
  suppressPaperSpace: !1,
  /** Text rendering options. */
  textOptions: h2.DefaultOptions
};
/*! https://mths.be/codepointat v0.2.0 by @mathias */
String.prototype.codePointAt || (function() {
  var r = (function() {
    try {
      var t = {}, n = Object.defineProperty, s = n(t, t, t) && n;
    } catch {
    }
    return s;
  })(), e = function(t) {
    if (this == null)
      throw TypeError();
    var n = String(this), s = n.length, a = t ? Number(t) : 0;
    if (a != a && (a = 0), !(a < 0 || a >= s)) {
      var i = n.charCodeAt(a), o;
      return (
        // check if it’s the start of a surrogate pair
        i >= 55296 && i <= 56319 && // high surrogate
        s > a + 1 && (o = n.charCodeAt(a + 1), o >= 56320 && o <= 57343) ? (i - 55296) * 1024 + o - 56320 + 65536 : i
      );
    }
  };
  r ? r(String.prototype, "codePointAt", {
    value: e,
    configurable: !0,
    writable: !0
  }) : String.prototype.codePointAt = e;
})();
var ae = 0, i6 = -3;
function n2() {
  this.table = new Uint16Array(16), this.trans = new Uint16Array(288);
}
function Zt(r, e) {
  this.source = r, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = e, this.destLen = 0, this.ltree = new n2(), this.dtree = new n2();
}
var o6 = new n2(), l6 = new n2(), ie = new Uint8Array(30), oe = new Uint16Array(30), h6 = new Uint8Array(30), u6 = new Uint16Array(30), qt = new Uint8Array([
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
]), Qe = new n2(), J0 = new Uint8Array(320);
function c6(r, e, t, n) {
  var s, a;
  for (s = 0; s < t; ++s)
    r[s] = 0;
  for (s = 0; s < 30 - t; ++s)
    r[s + t] = s / t | 0;
  for (a = n, s = 0; s < 30; ++s)
    e[s] = a, a += 1 << r[s];
}
function Qt(r, e) {
  var t;
  for (t = 0; t < 7; ++t)
    r.table[t] = 0;
  for (r.table[7] = 24, r.table[8] = 152, r.table[9] = 112, t = 0; t < 24; ++t)
    r.trans[t] = 256 + t;
  for (t = 0; t < 144; ++t)
    r.trans[24 + t] = t;
  for (t = 0; t < 8; ++t)
    r.trans[168 + t] = 280 + t;
  for (t = 0; t < 112; ++t)
    r.trans[176 + t] = 144 + t;
  for (t = 0; t < 5; ++t)
    e.table[t] = 0;
  for (e.table[5] = 32, t = 0; t < 32; ++t)
    e.trans[t] = t;
}
var Ke = new Uint16Array(16);
function l4(r, e, t, n) {
  var s, a;
  for (s = 0; s < 16; ++s)
    r.table[s] = 0;
  for (s = 0; s < n; ++s)
    r.table[e[t + s]]++;
  for (r.table[0] = 0, a = 0, s = 0; s < 16; ++s)
    Ke[s] = a, a += r.table[s];
  for (s = 0; s < n; ++s)
    e[t + s] && (r.trans[Ke[e[t + s]]++] = s);
}
function Kt(r) {
  r.bitcount-- || (r.tag = r.source[r.sourceIndex++], r.bitcount = 7);
  var e = r.tag & 1;
  return r.tag >>>= 1, e;
}
function Z0(r, e, t) {
  if (!e)
    return t;
  for (; r.bitcount < 24; )
    r.tag |= r.source[r.sourceIndex++] << r.bitcount, r.bitcount += 8;
  var n = r.tag & 65535 >>> 16 - e;
  return r.tag >>>= e, r.bitcount -= e, n + t;
}
function P4(r, e) {
  for (; r.bitcount < 24; )
    r.tag |= r.source[r.sourceIndex++] << r.bitcount, r.bitcount += 8;
  var t = 0, n = 0, s = 0, a = r.tag;
  do
    n = 2 * n + (a & 1), a >>>= 1, ++s, t += e.table[s], n -= e.table[s];
  while (n >= 0);
  return r.tag = a, r.bitcount -= s, e.trans[t + n];
}
function jt(r, e, t) {
  var n, s, a, i, o, l;
  for (n = Z0(r, 5, 257), s = Z0(r, 5, 1), a = Z0(r, 4, 4), i = 0; i < 19; ++i)
    J0[i] = 0;
  for (i = 0; i < a; ++i) {
    var u = Z0(r, 3, 0);
    J0[qt[i]] = u;
  }
  for (l4(Qe, J0, 0, 19), o = 0; o < n + s; ) {
    var c = P4(r, Qe);
    switch (c) {
      case 16:
        var p = J0[o - 1];
        for (l = Z0(r, 2, 3); l; --l)
          J0[o++] = p;
        break;
      case 17:
        for (l = Z0(r, 3, 3); l; --l)
          J0[o++] = 0;
        break;
      case 18:
        for (l = Z0(r, 7, 11); l; --l)
          J0[o++] = 0;
        break;
      default:
        J0[o++] = c;
        break;
    }
  }
  l4(e, J0, 0, n), l4(t, J0, n, s);
}
function je(r, e, t) {
  for (; ; ) {
    var n = P4(r, e);
    if (n === 256)
      return ae;
    if (n < 256)
      r.dest[r.destLen++] = n;
    else {
      var s, a, i, o;
      for (n -= 257, s = Z0(r, ie[n], oe[n]), a = P4(r, t), i = r.destLen - Z0(r, h6[a], u6[a]), o = i; o < i + s; ++o)
        r.dest[r.destLen++] = r.dest[o];
    }
  }
}
function $t(r) {
  for (var e, t, n; r.bitcount > 8; )
    r.sourceIndex--, r.bitcount -= 8;
  if (e = r.source[r.sourceIndex + 1], e = 256 * e + r.source[r.sourceIndex], t = r.source[r.sourceIndex + 3], t = 256 * t + r.source[r.sourceIndex + 2], e !== (~t & 65535))
    return i6;
  for (r.sourceIndex += 4, n = e; n; --n)
    r.dest[r.destLen++] = r.source[r.sourceIndex++];
  return r.bitcount = 0, ae;
}
function e8(r, e) {
  var t = new Zt(r, e), n, s, a;
  do {
    switch (n = Kt(t), s = Z0(t, 2, 0), s) {
      case 0:
        a = $t(t);
        break;
      case 1:
        a = je(t, o6, l6);
        break;
      case 2:
        jt(t, t.ltree, t.dtree), a = je(t, t.ltree, t.dtree);
        break;
      default:
        a = i6;
    }
    if (a !== ae)
      throw new Error("Data error");
  } while (!n);
  return t.destLen < t.dest.length ? typeof t.dest.slice == "function" ? t.dest.slice(0, t.destLen) : t.dest.subarray(0, t.destLen) : t.dest;
}
Qt(o6, l6);
c6(ie, oe, 4, 3);
c6(h6, u6, 2, 1);
ie[28] = 0;
oe[28] = 258;
var t8 = e8;
function F1(r, e, t, n, s) {
  return Math.pow(1 - s, 3) * r + 3 * Math.pow(1 - s, 2) * s * e + 3 * (1 - s) * Math.pow(s, 2) * t + Math.pow(s, 3) * n;
}
function h1() {
  this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN;
}
h1.prototype.isEmpty = function() {
  return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
};
h1.prototype.addPoint = function(r, e) {
  typeof r == "number" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = r, this.x2 = r), r < this.x1 && (this.x1 = r), r > this.x2 && (this.x2 = r)), typeof e == "number" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e));
};
h1.prototype.addX = function(r) {
  this.addPoint(r, null);
};
h1.prototype.addY = function(r) {
  this.addPoint(null, r);
};
h1.prototype.addBezier = function(r, e, t, n, s, a, i, o) {
  var l = [r, e], u = [t, n], c = [s, a], p = [i, o];
  this.addPoint(r, e), this.addPoint(i, o);
  for (var f = 0; f <= 1; f++) {
    var d = 6 * l[f] - 12 * u[f] + 6 * c[f], v = -3 * l[f] + 9 * u[f] - 9 * c[f] + 3 * p[f], y = 3 * u[f] - 3 * l[f];
    if (v === 0) {
      if (d === 0)
        continue;
      var m = -y / d;
      0 < m && m < 1 && (f === 0 && this.addX(F1(l[f], u[f], c[f], p[f], m)), f === 1 && this.addY(F1(l[f], u[f], c[f], p[f], m)));
      continue;
    }
    var g = Math.pow(d, 2) - 4 * y * v;
    if (!(g < 0)) {
      var C = (-d + Math.sqrt(g)) / (2 * v);
      0 < C && C < 1 && (f === 0 && this.addX(F1(l[f], u[f], c[f], p[f], C)), f === 1 && this.addY(F1(l[f], u[f], c[f], p[f], C)));
      var S = (-d - Math.sqrt(g)) / (2 * v);
      0 < S && S < 1 && (f === 0 && this.addX(F1(l[f], u[f], c[f], p[f], S)), f === 1 && this.addY(F1(l[f], u[f], c[f], p[f], S)));
    }
  }
};
h1.prototype.addQuad = function(r, e, t, n, s, a) {
  var i = r + 0.6666666666666666 * (t - r), o = e + 2 / 3 * (n - e), l = i + 1 / 3 * (s - r), u = o + 1 / 3 * (a - e);
  this.addBezier(r, e, i, o, l, u, s, a);
};
function v0() {
  this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1;
}
v0.prototype.moveTo = function(r, e) {
  this.commands.push({
    type: "M",
    x: r,
    y: e
  });
};
v0.prototype.lineTo = function(r, e) {
  this.commands.push({
    type: "L",
    x: r,
    y: e
  });
};
v0.prototype.curveTo = v0.prototype.bezierCurveTo = function(r, e, t, n, s, a) {
  this.commands.push({
    type: "C",
    x1: r,
    y1: e,
    x2: t,
    y2: n,
    x: s,
    y: a
  });
};
v0.prototype.quadTo = v0.prototype.quadraticCurveTo = function(r, e, t, n) {
  this.commands.push({
    type: "Q",
    x1: r,
    y1: e,
    x: t,
    y: n
  });
};
v0.prototype.close = v0.prototype.closePath = function() {
  this.commands.push({
    type: "Z"
  });
};
v0.prototype.extend = function(r) {
  if (r.commands)
    r = r.commands;
  else if (r instanceof h1) {
    var e = r;
    this.moveTo(e.x1, e.y1), this.lineTo(e.x2, e.y1), this.lineTo(e.x2, e.y2), this.lineTo(e.x1, e.y2), this.close();
    return;
  }
  Array.prototype.push.apply(this.commands, r);
};
v0.prototype.getBoundingBox = function() {
  for (var r = new h1(), e = 0, t = 0, n = 0, s = 0, a = 0; a < this.commands.length; a++) {
    var i = this.commands[a];
    switch (i.type) {
      case "M":
        r.addPoint(i.x, i.y), e = n = i.x, t = s = i.y;
        break;
      case "L":
        r.addPoint(i.x, i.y), n = i.x, s = i.y;
        break;
      case "Q":
        r.addQuad(n, s, i.x1, i.y1, i.x, i.y), n = i.x, s = i.y;
        break;
      case "C":
        r.addBezier(n, s, i.x1, i.y1, i.x2, i.y2, i.x, i.y), n = i.x, s = i.y;
        break;
      case "Z":
        n = e, s = t;
        break;
      default:
        throw new Error("Unexpected path command " + i.type);
    }
  }
  return r.isEmpty() && r.addPoint(0, 0), r;
};
v0.prototype.draw = function(r) {
  r.beginPath();
  for (var e = 0; e < this.commands.length; e += 1) {
    var t = this.commands[e];
    t.type === "M" ? r.moveTo(t.x, t.y) : t.type === "L" ? r.lineTo(t.x, t.y) : t.type === "C" ? r.bezierCurveTo(t.x1, t.y1, t.x2, t.y2, t.x, t.y) : t.type === "Q" ? r.quadraticCurveTo(t.x1, t.y1, t.x, t.y) : t.type === "Z" && r.closePath();
  }
  this.fill && (r.fillStyle = this.fill, r.fill()), this.stroke && (r.strokeStyle = this.stroke, r.lineWidth = this.strokeWidth, r.stroke());
};
v0.prototype.toPathData = function(r) {
  r = r !== void 0 ? r : 2;
  function e(i) {
    return Math.round(i) === i ? "" + Math.round(i) : i.toFixed(r);
  }
  function t() {
    for (var i = arguments, o = "", l = 0; l < arguments.length; l += 1) {
      var u = i[l];
      u >= 0 && l > 0 && (o += " "), o += e(u);
    }
    return o;
  }
  for (var n = "", s = 0; s < this.commands.length; s += 1) {
    var a = this.commands[s];
    a.type === "M" ? n += "M" + t(a.x, a.y) : a.type === "L" ? n += "L" + t(a.x, a.y) : a.type === "C" ? n += "C" + t(a.x1, a.y1, a.x2, a.y2, a.x, a.y) : a.type === "Q" ? n += "Q" + t(a.x1, a.y1, a.x, a.y) : a.type === "Z" && (n += "Z");
  }
  return n;
};
v0.prototype.toSVG = function(r) {
  var e = '<path d="';
  return e += this.toPathData(r), e += '"', this.fill && this.fill !== "black" && (this.fill === null ? e += ' fill="none"' : e += ' fill="' + this.fill + '"'), this.stroke && (e += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), e += "/>", e;
};
v0.prototype.toDOMElement = function(r) {
  var e = this.toPathData(r), t = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return t.setAttribute("d", e), t;
};
function f6(r) {
  throw new Error(r);
}
function $e(r, e) {
  r || f6(e);
}
var z = { fail: f6, argument: $e, assert: $e }, e5 = 32768, t5 = 2147483648, N1 = {}, R = {}, Y = {};
function X0(r) {
  return function() {
    return r;
  };
}
R.BYTE = function(r) {
  return z.argument(r >= 0 && r <= 255, "Byte value should be between 0 and 255."), [r];
};
Y.BYTE = X0(1);
R.CHAR = function(r) {
  return [r.charCodeAt(0)];
};
Y.CHAR = X0(1);
R.CHARARRAY = function(r) {
  typeof r > "u" && (r = "", console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));
  for (var e = [], t = 0; t < r.length; t += 1)
    e[t] = r.charCodeAt(t);
  return e;
};
Y.CHARARRAY = function(r) {
  return typeof r > "u" ? 0 : r.length;
};
R.USHORT = function(r) {
  return [r >> 8 & 255, r & 255];
};
Y.USHORT = X0(2);
R.SHORT = function(r) {
  return r >= e5 && (r = -(2 * e5 - r)), [r >> 8 & 255, r & 255];
};
Y.SHORT = X0(2);
R.UINT24 = function(r) {
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
};
Y.UINT24 = X0(3);
R.ULONG = function(r) {
  return [r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255];
};
Y.ULONG = X0(4);
R.LONG = function(r) {
  return r >= t5 && (r = -(2 * t5 - r)), [r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255];
};
Y.LONG = X0(4);
R.FIXED = R.ULONG;
Y.FIXED = Y.ULONG;
R.FWORD = R.SHORT;
Y.FWORD = Y.SHORT;
R.UFWORD = R.USHORT;
Y.UFWORD = Y.USHORT;
R.LONGDATETIME = function(r) {
  return [0, 0, 0, 0, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255];
};
Y.LONGDATETIME = X0(8);
R.TAG = function(r) {
  return z.argument(r.length === 4, "Tag should be exactly 4 ASCII characters."), [
    r.charCodeAt(0),
    r.charCodeAt(1),
    r.charCodeAt(2),
    r.charCodeAt(3)
  ];
};
Y.TAG = X0(4);
R.Card8 = R.BYTE;
Y.Card8 = Y.BYTE;
R.Card16 = R.USHORT;
Y.Card16 = Y.USHORT;
R.OffSize = R.BYTE;
Y.OffSize = Y.BYTE;
R.SID = R.USHORT;
Y.SID = Y.USHORT;
R.NUMBER = function(r) {
  return r >= -107 && r <= 107 ? [r + 139] : r >= 108 && r <= 1131 ? (r = r - 108, [(r >> 8) + 247, r & 255]) : r >= -1131 && r <= -108 ? (r = -r - 108, [(r >> 8) + 251, r & 255]) : r >= -32768 && r <= 32767 ? R.NUMBER16(r) : R.NUMBER32(r);
};
Y.NUMBER = function(r) {
  return R.NUMBER(r).length;
};
R.NUMBER16 = function(r) {
  return [28, r >> 8 & 255, r & 255];
};
Y.NUMBER16 = X0(3);
R.NUMBER32 = function(r) {
  return [29, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255];
};
Y.NUMBER32 = X0(5);
R.REAL = function(r) {
  var e = r.toString(), t = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);
  if (t) {
    var n = parseFloat("1e" + ((t[2] ? +t[2] : 0) + t[1].length));
    e = (Math.round(r * n) / n).toString();
  }
  for (var s = "", a = 0, i = e.length; a < i; a += 1) {
    var o = e[a];
    o === "e" ? s += e[++a] === "-" ? "c" : "b" : o === "." ? s += "a" : o === "-" ? s += "e" : s += o;
  }
  s += s.length & 1 ? "f" : "ff";
  for (var l = [30], u = 0, c = s.length; u < c; u += 2)
    l.push(parseInt(s.substr(u, 2), 16));
  return l;
};
Y.REAL = function(r) {
  return R.REAL(r).length;
};
R.NAME = R.CHARARRAY;
Y.NAME = Y.CHARARRAY;
R.STRING = R.CHARARRAY;
Y.STRING = Y.CHARARRAY;
N1.UTF8 = function(r, e, t) {
  for (var n = [], s = t, a = 0; a < s; a++, e += 1)
    n[a] = r.getUint8(e);
  return String.fromCharCode.apply(null, n);
};
N1.UTF16 = function(r, e, t) {
  for (var n = [], s = t / 2, a = 0; a < s; a++, e += 2)
    n[a] = r.getUint16(e);
  return String.fromCharCode.apply(null, n);
};
R.UTF16 = function(r) {
  for (var e = [], t = 0; t < r.length; t += 1) {
    var n = r.charCodeAt(t);
    e[e.length] = n >> 8 & 255, e[e.length] = n & 255;
  }
  return e;
};
Y.UTF16 = function(r) {
  return r.length * 2;
};
var w4 = {
  "x-mac-croatian": (
    // Python: 'mac_croatian'
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
  ),
  "x-mac-cyrillic": (
    // Python: 'mac_cyrillic'
    "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю"
  ),
  "x-mac-gaelic": (
    // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/GAELIC.TXT
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ"
  ),
  "x-mac-greek": (
    // Python: 'mac_greek'
    "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­"
  ),
  "x-mac-icelandic": (
    // Python: 'mac_iceland'
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  ),
  "x-mac-inuit": (
    // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/INUIT.TXT
    "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł"
  ),
  "x-mac-ce": (
    // Python: 'mac_latin2'
    "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
  ),
  macintosh: (
    // Python: 'mac_roman'
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  ),
  "x-mac-romanian": (
    // Python: 'mac_romanian'
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  ),
  "x-mac-turkish": (
    // Python: 'mac_turkish'
    "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"
  )
};
N1.MACSTRING = function(r, e, t, n) {
  var s = w4[n];
  if (s !== void 0) {
    for (var a = "", i = 0; i < t; i++) {
      var o = r.getUint8(e + i);
      o <= 127 ? a += String.fromCharCode(o) : a += s[o & 127];
    }
    return a;
  }
};
var w2 = typeof WeakMap == "function" && /* @__PURE__ */ new WeakMap(), F2, r8 = function(r) {
  if (!F2) {
    F2 = {};
    for (var e in w4)
      F2[e] = new String(e);
  }
  var t = F2[r];
  if (t !== void 0) {
    if (w2) {
      var n = w2.get(t);
      if (n !== void 0)
        return n;
    }
    var s = w4[r];
    if (s !== void 0) {
      for (var a = {}, i = 0; i < s.length; i++)
        a[s.charCodeAt(i)] = i + 128;
      return w2 && w2.set(t, a), a;
    }
  }
};
R.MACSTRING = function(r, e) {
  var t = r8(e);
  if (t !== void 0) {
    for (var n = [], s = 0; s < r.length; s++) {
      var a = r.charCodeAt(s);
      if (a >= 128 && (a = t[a], a === void 0))
        return;
      n[s] = a;
    }
    return n;
  }
};
Y.MACSTRING = function(r, e) {
  var t = R.MACSTRING(r, e);
  return t !== void 0 ? t.length : 0;
};
function F4(r) {
  return r >= -128 && r <= 127;
}
function n8(r, e, t) {
  for (var n = 0, s = r.length; e < s && n < 64 && r[e] === 0; )
    ++e, ++n;
  return t.push(128 | n - 1), e;
}
function s8(r, e, t) {
  for (var n = 0, s = r.length, a = e; a < s && n < 64; ) {
    var i = r[a];
    if (!F4(i) || i === 0 && a + 1 < s && r[a + 1] === 0)
      break;
    ++a, ++n;
  }
  t.push(n - 1);
  for (var o = e; o < a; ++o)
    t.push(r[o] + 256 & 255);
  return a;
}
function a8(r, e, t) {
  for (var n = 0, s = r.length, a = e; a < s && n < 64; ) {
    var i = r[a];
    if (i === 0 || F4(i) && a + 1 < s && F4(r[a + 1]))
      break;
    ++a, ++n;
  }
  t.push(64 | n - 1);
  for (var o = e; o < a; ++o) {
    var l = r[o];
    t.push(l + 65536 >> 8 & 255, l + 256 & 255);
  }
  return a;
}
R.VARDELTAS = function(r) {
  for (var e = 0, t = []; e < r.length; ) {
    var n = r[e];
    n === 0 ? e = n8(r, e, t) : n >= -128 && n <= 127 ? e = s8(r, e, t) : e = a8(r, e, t);
  }
  return t;
};
R.INDEX = function(r) {
  for (var e = 1, t = [e], n = [], s = 0; s < r.length; s += 1) {
    var a = R.OBJECT(r[s]);
    Array.prototype.push.apply(n, a), e += a.length, t.push(e);
  }
  if (n.length === 0)
    return [0, 0];
  for (var i = [], o = 1 + Math.floor(Math.log(e) / Math.log(2)) / 8 | 0, l = [void 0, R.BYTE, R.USHORT, R.UINT24, R.ULONG][o], u = 0; u < t.length; u += 1) {
    var c = l(t[u]);
    Array.prototype.push.apply(i, c);
  }
  return Array.prototype.concat(
    R.Card16(r.length),
    R.OffSize(o),
    i,
    n
  );
};
Y.INDEX = function(r) {
  return R.INDEX(r).length;
};
R.DICT = function(r) {
  for (var e = [], t = Object.keys(r), n = t.length, s = 0; s < n; s += 1) {
    var a = parseInt(t[s], 0), i = r[a];
    e = e.concat(R.OPERAND(i.value, i.type)), e = e.concat(R.OPERATOR(a));
  }
  return e;
};
Y.DICT = function(r) {
  return R.DICT(r).length;
};
R.OPERATOR = function(r) {
  return r < 1200 ? [r] : [12, r - 1200];
};
R.OPERAND = function(r, e) {
  var t = [];
  if (Array.isArray(e))
    for (var n = 0; n < e.length; n += 1)
      z.argument(r.length === e.length, "Not enough arguments given for type" + e), t = t.concat(R.OPERAND(r[n], e[n]));
  else if (e === "SID")
    t = t.concat(R.NUMBER(r));
  else if (e === "offset")
    t = t.concat(R.NUMBER32(r));
  else if (e === "number")
    t = t.concat(R.NUMBER(r));
  else if (e === "real")
    t = t.concat(R.REAL(r));
  else
    throw new Error("Unknown operand type " + e);
  return t;
};
R.OP = R.BYTE;
Y.OP = Y.BYTE;
var L2 = typeof WeakMap == "function" && /* @__PURE__ */ new WeakMap();
R.CHARSTRING = function(r) {
  if (L2) {
    var e = L2.get(r);
    if (e !== void 0)
      return e;
  }
  for (var t = [], n = r.length, s = 0; s < n; s += 1) {
    var a = r[s];
    t = t.concat(R[a.type](a.value));
  }
  return L2 && L2.set(r, t), t;
};
Y.CHARSTRING = function(r) {
  return R.CHARSTRING(r).length;
};
R.OBJECT = function(r) {
  var e = R[r.type];
  return z.argument(e !== void 0, "No encoding function for type " + r.type), e(r.value);
};
Y.OBJECT = function(r) {
  var e = Y[r.type];
  return z.argument(e !== void 0, "No sizeOf function for type " + r.type), e(r.value);
};
R.TABLE = function(r) {
  for (var e = [], t = r.fields.length, n = [], s = [], a = 0; a < t; a += 1) {
    var i = r.fields[a], o = R[i.type];
    z.argument(o !== void 0, "No encoding function for field type " + i.type + " (" + i.name + ")");
    var l = r[i.name];
    l === void 0 && (l = i.value);
    var u = o(l);
    i.type === "TABLE" ? (s.push(e.length), e = e.concat([0, 0]), n.push(u)) : e = e.concat(u);
  }
  for (var c = 0; c < n.length; c += 1) {
    var p = s[c], f = e.length;
    z.argument(f < 65536, "Table " + r.tableName + " too big."), e[p] = f >> 8, e[p + 1] = f & 255, e = e.concat(n[c]);
  }
  return e;
};
Y.TABLE = function(r) {
  for (var e = 0, t = r.fields.length, n = 0; n < t; n += 1) {
    var s = r.fields[n], a = Y[s.type];
    z.argument(a !== void 0, "No sizeOf function for field type " + s.type + " (" + s.name + ")");
    var i = r[s.name];
    i === void 0 && (i = s.value), e += a(i), s.type === "TABLE" && (e += 2);
  }
  return e;
};
R.RECORD = R.TABLE;
Y.RECORD = Y.TABLE;
R.LITERAL = function(r) {
  return r;
};
Y.LITERAL = function(r) {
  return r.length;
};
function g0(r, e, t) {
  if (e.length && (e[0].name !== "coverageFormat" || e[0].value === 1))
    for (var n = 0; n < e.length; n += 1) {
      var s = e[n];
      this[s.name] = s.value;
    }
  if (this.tableName = r, this.fields = e, t)
    for (var a = Object.keys(t), i = 0; i < a.length; i += 1) {
      var o = a[i], l = t[o];
      this[o] !== void 0 && (this[o] = l);
    }
}
g0.prototype.encode = function() {
  return R.TABLE(this);
};
g0.prototype.sizeOf = function() {
  return Y.TABLE(this);
};
function s2(r, e, t) {
  t === void 0 && (t = e.length);
  var n = new Array(e.length + 1);
  n[0] = { name: r + "Count", type: "USHORT", value: t };
  for (var s = 0; s < e.length; s++)
    n[s + 1] = { name: r + s, type: "USHORT", value: e[s] };
  return n;
}
function L4(r, e, t) {
  var n = e.length, s = new Array(n + 1);
  s[0] = { name: r + "Count", type: "USHORT", value: n };
  for (var a = 0; a < n; a++)
    s[a + 1] = { name: r + a, type: "TABLE", value: t(e[a], a) };
  return s;
}
function a2(r, e, t) {
  var n = e.length, s = [];
  s[0] = { name: r + "Count", type: "USHORT", value: n };
  for (var a = 0; a < n; a++)
    s = s.concat(t(e[a], a));
  return s;
}
function U2(r) {
  r.format === 1 ? g0.call(
    this,
    "coverageTable",
    [{ name: "coverageFormat", type: "USHORT", value: 1 }].concat(s2("glyph", r.glyphs))
  ) : r.format === 2 ? g0.call(
    this,
    "coverageTable",
    [{ name: "coverageFormat", type: "USHORT", value: 2 }].concat(a2("rangeRecord", r.ranges, function(e) {
      return [
        { name: "startGlyphID", type: "USHORT", value: e.start },
        { name: "endGlyphID", type: "USHORT", value: e.end },
        { name: "startCoverageIndex", type: "USHORT", value: e.index }
      ];
    }))
  ) : z.assert(!1, "Coverage format must be 1 or 2.");
}
U2.prototype = Object.create(g0.prototype);
U2.prototype.constructor = U2;
function G2(r) {
  g0.call(
    this,
    "scriptListTable",
    a2("scriptRecord", r, function(e, t) {
      var n = e.script, s = n.defaultLangSys;
      return z.assert(!!s, "Unable to write GSUB: script " + e.tag + " has no default language system."), [
        { name: "scriptTag" + t, type: "TAG", value: e.tag },
        { name: "script" + t, type: "TABLE", value: new g0("scriptTable", [
          { name: "defaultLangSys", type: "TABLE", value: new g0("defaultLangSys", [
            { name: "lookupOrder", type: "USHORT", value: 0 },
            { name: "reqFeatureIndex", type: "USHORT", value: s.reqFeatureIndex }
          ].concat(s2("featureIndex", s.featureIndexes))) }
        ].concat(a2("langSys", n.langSysRecords, function(a, i) {
          var o = a.langSys;
          return [
            { name: "langSysTag" + i, type: "TAG", value: a.tag },
            { name: "langSys" + i, type: "TABLE", value: new g0("langSys", [
              { name: "lookupOrder", type: "USHORT", value: 0 },
              { name: "reqFeatureIndex", type: "USHORT", value: o.reqFeatureIndex }
            ].concat(s2("featureIndex", o.featureIndexes))) }
          ];
        }))) }
      ];
    })
  );
}
G2.prototype = Object.create(g0.prototype);
G2.prototype.constructor = G2;
function H2(r) {
  g0.call(
    this,
    "featureListTable",
    a2("featureRecord", r, function(e, t) {
      var n = e.feature;
      return [
        { name: "featureTag" + t, type: "TAG", value: e.tag },
        { name: "feature" + t, type: "TABLE", value: new g0("featureTable", [
          { name: "featureParams", type: "USHORT", value: n.featureParams }
        ].concat(s2("lookupListIndex", n.lookupListIndexes))) }
      ];
    })
  );
}
H2.prototype = Object.create(g0.prototype);
H2.prototype.constructor = H2;
function z2(r, e) {
  g0.call(this, "lookupListTable", L4("lookup", r, function(t) {
    var n = e[t.lookupType];
    return z.assert(!!n, "Unable to write GSUB lookup type " + t.lookupType + " tables."), new g0("lookupTable", [
      { name: "lookupType", type: "USHORT", value: t.lookupType },
      { name: "lookupFlag", type: "USHORT", value: t.lookupFlag }
    ].concat(L4("subtable", t.subtables, n)));
  }));
}
z2.prototype = Object.create(g0.prototype);
z2.prototype.constructor = z2;
var _ = {
  Table: g0,
  Record: g0,
  Coverage: U2,
  ScriptList: G2,
  FeatureList: H2,
  LookupList: z2,
  ushortList: s2,
  tableList: L4,
  recordList: a2
};
function r5(r, e) {
  return r.getUint8(e);
}
function V2(r, e) {
  return r.getUint16(e, !1);
}
function i8(r, e) {
  return r.getInt16(e, !1);
}
function le(r, e) {
  return r.getUint32(e, !1);
}
function p6(r, e) {
  var t = r.getInt16(e, !1), n = r.getUint16(e + 2, !1);
  return t + n / 65535;
}
function o8(r, e) {
  for (var t = "", n = e; n < e + 4; n += 1)
    t += String.fromCharCode(r.getInt8(n));
  return t;
}
function l8(r, e, t) {
  for (var n = 0, s = 0; s < t; s += 1)
    n <<= 8, n += r.getUint8(e + s);
  return n;
}
function h8(r, e, t) {
  for (var n = [], s = e; s < t; s += 1)
    n.push(r.getUint8(s));
  return n;
}
function u8(r) {
  for (var e = "", t = 0; t < r.length; t += 1)
    e += String.fromCharCode(r[t]);
  return e;
}
var c8 = {
  byte: 1,
  uShort: 2,
  short: 2,
  uLong: 4,
  fixed: 4,
  longDateTime: 8,
  tag: 4
};
function P(r, e) {
  this.data = r, this.offset = e, this.relativeOffset = 0;
}
P.prototype.parseByte = function() {
  var r = this.data.getUint8(this.offset + this.relativeOffset);
  return this.relativeOffset += 1, r;
};
P.prototype.parseChar = function() {
  var r = this.data.getInt8(this.offset + this.relativeOffset);
  return this.relativeOffset += 1, r;
};
P.prototype.parseCard8 = P.prototype.parseByte;
P.prototype.parseUShort = function() {
  var r = this.data.getUint16(this.offset + this.relativeOffset);
  return this.relativeOffset += 2, r;
};
P.prototype.parseCard16 = P.prototype.parseUShort;
P.prototype.parseSID = P.prototype.parseUShort;
P.prototype.parseOffset16 = P.prototype.parseUShort;
P.prototype.parseShort = function() {
  var r = this.data.getInt16(this.offset + this.relativeOffset);
  return this.relativeOffset += 2, r;
};
P.prototype.parseF2Dot14 = function() {
  var r = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
  return this.relativeOffset += 2, r;
};
P.prototype.parseULong = function() {
  var r = le(this.data, this.offset + this.relativeOffset);
  return this.relativeOffset += 4, r;
};
P.prototype.parseOffset32 = P.prototype.parseULong;
P.prototype.parseFixed = function() {
  var r = p6(this.data, this.offset + this.relativeOffset);
  return this.relativeOffset += 4, r;
};
P.prototype.parseString = function(r) {
  var e = this.data, t = this.offset + this.relativeOffset, n = "";
  this.relativeOffset += r;
  for (var s = 0; s < r; s++)
    n += String.fromCharCode(e.getUint8(t + s));
  return n;
};
P.prototype.parseTag = function() {
  return this.parseString(4);
};
P.prototype.parseLongDateTime = function() {
  var r = le(this.data, this.offset + this.relativeOffset + 4);
  return r -= 2082844800, this.relativeOffset += 8, r;
};
P.prototype.parseVersion = function(r) {
  var e = V2(this.data, this.offset + this.relativeOffset), t = V2(this.data, this.offset + this.relativeOffset + 2);
  return this.relativeOffset += 4, r === void 0 && (r = 4096), e + t / r / 10;
};
P.prototype.skip = function(r, e) {
  e === void 0 && (e = 1), this.relativeOffset += c8[r] * e;
};
P.prototype.parseULongList = function(r) {
  r === void 0 && (r = this.parseULong());
  for (var e = new Array(r), t = this.data, n = this.offset + this.relativeOffset, s = 0; s < r; s++)
    e[s] = t.getUint32(n), n += 4;
  return this.relativeOffset += r * 4, e;
};
P.prototype.parseOffset16List = P.prototype.parseUShortList = function(r) {
  r === void 0 && (r = this.parseUShort());
  for (var e = new Array(r), t = this.data, n = this.offset + this.relativeOffset, s = 0; s < r; s++)
    e[s] = t.getUint16(n), n += 2;
  return this.relativeOffset += r * 2, e;
};
P.prototype.parseShortList = function(r) {
  for (var e = new Array(r), t = this.data, n = this.offset + this.relativeOffset, s = 0; s < r; s++)
    e[s] = t.getInt16(n), n += 2;
  return this.relativeOffset += r * 2, e;
};
P.prototype.parseByteList = function(r) {
  for (var e = new Array(r), t = this.data, n = this.offset + this.relativeOffset, s = 0; s < r; s++)
    e[s] = t.getUint8(n++);
  return this.relativeOffset += r, e;
};
P.prototype.parseList = function(r, e) {
  e || (e = r, r = this.parseUShort());
  for (var t = new Array(r), n = 0; n < r; n++)
    t[n] = e.call(this);
  return t;
};
P.prototype.parseList32 = function(r, e) {
  e || (e = r, r = this.parseULong());
  for (var t = new Array(r), n = 0; n < r; n++)
    t[n] = e.call(this);
  return t;
};
P.prototype.parseRecordList = function(r, e) {
  e || (e = r, r = this.parseUShort());
  for (var t = new Array(r), n = Object.keys(e), s = 0; s < r; s++) {
    for (var a = {}, i = 0; i < n.length; i++) {
      var o = n[i], l = e[o];
      a[o] = l.call(this);
    }
    t[s] = a;
  }
  return t;
};
P.prototype.parseRecordList32 = function(r, e) {
  e || (e = r, r = this.parseULong());
  for (var t = new Array(r), n = Object.keys(e), s = 0; s < r; s++) {
    for (var a = {}, i = 0; i < n.length; i++) {
      var o = n[i], l = e[o];
      a[o] = l.call(this);
    }
    t[s] = a;
  }
  return t;
};
P.prototype.parseStruct = function(r) {
  if (typeof r == "function")
    return r.call(this);
  for (var e = Object.keys(r), t = {}, n = 0; n < e.length; n++) {
    var s = e[n], a = r[s];
    t[s] = a.call(this);
  }
  return t;
};
P.prototype.parseValueRecord = function(r) {
  if (r === void 0 && (r = this.parseUShort()), r !== 0) {
    var e = {};
    return r & 1 && (e.xPlacement = this.parseShort()), r & 2 && (e.yPlacement = this.parseShort()), r & 4 && (e.xAdvance = this.parseShort()), r & 8 && (e.yAdvance = this.parseShort()), r & 16 && (e.xPlaDevice = void 0, this.parseShort()), r & 32 && (e.yPlaDevice = void 0, this.parseShort()), r & 64 && (e.xAdvDevice = void 0, this.parseShort()), r & 128 && (e.yAdvDevice = void 0, this.parseShort()), e;
  }
};
P.prototype.parseValueRecordList = function() {
  for (var r = this.parseUShort(), e = this.parseUShort(), t = new Array(e), n = 0; n < e; n++)
    t[n] = this.parseValueRecord(r);
  return t;
};
P.prototype.parsePointer = function(r) {
  var e = this.parseOffset16();
  if (e > 0)
    return new P(this.data, this.offset + e).parseStruct(r);
};
P.prototype.parsePointer32 = function(r) {
  var e = this.parseOffset32();
  if (e > 0)
    return new P(this.data, this.offset + e).parseStruct(r);
};
P.prototype.parseListOfLists = function(r) {
  for (var e = this.parseOffset16List(), t = e.length, n = this.relativeOffset, s = new Array(t), a = 0; a < t; a++) {
    var i = e[a];
    if (i === 0) {
      s[a] = void 0;
      continue;
    }
    if (this.relativeOffset = i, r) {
      for (var o = this.parseOffset16List(), l = new Array(o.length), u = 0; u < o.length; u++)
        this.relativeOffset = i + o[u], l[u] = r.call(this);
      s[a] = l;
    } else
      s[a] = this.parseUShortList();
  }
  return this.relativeOffset = n, s;
};
P.prototype.parseCoverage = function() {
  var r = this.offset + this.relativeOffset, e = this.parseUShort(), t = this.parseUShort();
  if (e === 1)
    return {
      format: 1,
      glyphs: this.parseUShortList(t)
    };
  if (e === 2) {
    for (var n = new Array(t), s = 0; s < t; s++)
      n[s] = {
        start: this.parseUShort(),
        end: this.parseUShort(),
        index: this.parseUShort()
      };
    return {
      format: 2,
      ranges: n
    };
  }
  throw new Error("0x" + r.toString(16) + ": Coverage format must be 1 or 2.");
};
P.prototype.parseClassDef = function() {
  var r = this.offset + this.relativeOffset, e = this.parseUShort();
  if (e === 1)
    return {
      format: 1,
      startGlyph: this.parseUShort(),
      classes: this.parseUShortList()
    };
  if (e === 2)
    return {
      format: 2,
      ranges: this.parseRecordList({
        start: P.uShort,
        end: P.uShort,
        classId: P.uShort
      })
    };
  throw new Error("0x" + r.toString(16) + ": ClassDef format must be 1 or 2.");
};
P.list = function(r, e) {
  return function() {
    return this.parseList(r, e);
  };
};
P.list32 = function(r, e) {
  return function() {
    return this.parseList32(r, e);
  };
};
P.recordList = function(r, e) {
  return function() {
    return this.parseRecordList(r, e);
  };
};
P.recordList32 = function(r, e) {
  return function() {
    return this.parseRecordList32(r, e);
  };
};
P.pointer = function(r) {
  return function() {
    return this.parsePointer(r);
  };
};
P.pointer32 = function(r) {
  return function() {
    return this.parsePointer32(r);
  };
};
P.tag = P.prototype.parseTag;
P.byte = P.prototype.parseByte;
P.uShort = P.offset16 = P.prototype.parseUShort;
P.uShortList = P.prototype.parseUShortList;
P.uLong = P.offset32 = P.prototype.parseULong;
P.uLongList = P.prototype.parseULongList;
P.struct = P.prototype.parseStruct;
P.coverage = P.prototype.parseCoverage;
P.classDef = P.prototype.parseClassDef;
var n5 = {
  reserved: P.uShort,
  reqFeatureIndex: P.uShort,
  featureIndexes: P.uShortList
};
P.prototype.parseScriptList = function() {
  return this.parsePointer(P.recordList({
    tag: P.tag,
    script: P.pointer({
      defaultLangSys: P.pointer(n5),
      langSysRecords: P.recordList({
        tag: P.tag,
        langSys: P.pointer(n5)
      })
    })
  })) || [];
};
P.prototype.parseFeatureList = function() {
  return this.parsePointer(P.recordList({
    tag: P.tag,
    feature: P.pointer({
      featureParams: P.offset16,
      lookupListIndexes: P.uShortList
    })
  })) || [];
};
P.prototype.parseLookupList = function(r) {
  return this.parsePointer(P.list(P.pointer(function() {
    var e = this.parseUShort();
    z.argument(1 <= e && e <= 9, "GPOS/GSUB lookup type " + e + " unknown.");
    var t = this.parseUShort(), n = t & 16;
    return {
      lookupType: e,
      lookupFlag: t,
      subtables: this.parseList(P.pointer(r[e])),
      markFilteringSet: n ? this.parseUShort() : void 0
    };
  }))) || [];
};
P.prototype.parseFeatureVariationsList = function() {
  return this.parsePointer32(function() {
    var r = this.parseUShort(), e = this.parseUShort();
    z.argument(r === 1 && e < 1, "GPOS/GSUB feature variations table unknown.");
    var t = this.parseRecordList32({
      conditionSetOffset: P.offset32,
      featureTableSubstitutionOffset: P.offset32
    });
    return t;
  }) || [];
};
var G = {
  getByte: r5,
  getCard8: r5,
  getUShort: V2,
  getCard16: V2,
  getShort: i8,
  getULong: le,
  getFixed: p6,
  getTag: o8,
  getOffset: l8,
  getBytes: h8,
  bytesToString: u8,
  Parser: P
};
function f8(r, e) {
  e.parseUShort(), r.length = e.parseULong(), r.language = e.parseULong();
  var t;
  r.groupCount = t = e.parseULong(), r.glyphIndexMap = {};
  for (var n = 0; n < t; n += 1)
    for (var s = e.parseULong(), a = e.parseULong(), i = e.parseULong(), o = s; o <= a; o += 1)
      r.glyphIndexMap[o] = i, i++;
}
function p8(r, e, t, n, s) {
  r.length = e.parseUShort(), r.language = e.parseUShort();
  var a;
  r.segCount = a = e.parseUShort() >> 1, e.skip("uShort", 3), r.glyphIndexMap = {};
  for (var i = new G.Parser(t, n + s + 14), o = new G.Parser(t, n + s + 16 + a * 2), l = new G.Parser(t, n + s + 16 + a * 4), u = new G.Parser(t, n + s + 16 + a * 6), c = n + s + 16 + a * 8, p = 0; p < a - 1; p += 1)
    for (var f = void 0, d = i.parseUShort(), v = o.parseUShort(), y = l.parseShort(), m = u.parseUShort(), g = v; g <= d; g += 1)
      m !== 0 ? (c = u.offset + u.relativeOffset - 2, c += m, c += (g - v) * 2, f = G.getUShort(t, c), f !== 0 && (f = f + y & 65535)) : f = g + y & 65535, r.glyphIndexMap[g] = f;
}
function d8(r, e) {
  var t = {};
  t.version = G.getUShort(r, e), z.argument(t.version === 0, "cmap table version should be 0."), t.numTables = G.getUShort(r, e + 2);
  for (var n = -1, s = t.numTables - 1; s >= 0; s -= 1) {
    var a = G.getUShort(r, e + 4 + s * 8), i = G.getUShort(r, e + 4 + s * 8 + 2);
    if (a === 3 && (i === 0 || i === 1 || i === 10) || a === 0 && (i === 0 || i === 1 || i === 2 || i === 3 || i === 4)) {
      n = G.getULong(r, e + 4 + s * 8 + 4);
      break;
    }
  }
  if (n === -1)
    throw new Error("No valid cmap sub-tables found.");
  var o = new G.Parser(r, e + n);
  if (t.format = o.parseUShort(), t.format === 12)
    f8(t, o);
  else if (t.format === 4)
    p8(t, o, r, e, n);
  else
    throw new Error("Only format 4 and 12 cmap tables are supported (found format " + t.format + ").");
  return t;
}
function v8(r, e, t) {
  r.segments.push({
    end: e,
    start: e,
    delta: -(e - t),
    offset: 0,
    glyphIndex: t
  });
}
function y8(r) {
  r.segments.push({
    end: 65535,
    start: 65535,
    delta: 1,
    offset: 0
  });
}
function g8(r) {
  var e = !0, t;
  for (t = r.length - 1; t > 0; t -= 1) {
    var n = r.get(t);
    if (n.unicode > 65535) {
      console.log("Adding CMAP format 12 (needed!)"), e = !1;
      break;
    }
  }
  var s = [
    { name: "version", type: "USHORT", value: 0 },
    { name: "numTables", type: "USHORT", value: e ? 1 : 2 },
    // CMAP 4 header
    { name: "platformID", type: "USHORT", value: 3 },
    { name: "encodingID", type: "USHORT", value: 1 },
    { name: "offset", type: "ULONG", value: e ? 12 : 20 }
  ];
  e || (s = s.concat([
    // CMAP 12 header
    { name: "cmap12PlatformID", type: "USHORT", value: 3 },
    // We encode only for PlatformID = 3 (Windows) because it is supported everywhere
    { name: "cmap12EncodingID", type: "USHORT", value: 10 },
    { name: "cmap12Offset", type: "ULONG", value: 0 }
  ])), s = s.concat([
    // CMAP 4 Subtable
    { name: "format", type: "USHORT", value: 4 },
    { name: "cmap4Length", type: "USHORT", value: 0 },
    { name: "language", type: "USHORT", value: 0 },
    { name: "segCountX2", type: "USHORT", value: 0 },
    { name: "searchRange", type: "USHORT", value: 0 },
    { name: "entrySelector", type: "USHORT", value: 0 },
    { name: "rangeShift", type: "USHORT", value: 0 }
  ]);
  var a = new _.Table("cmap", s);
  for (a.segments = [], t = 0; t < r.length; t += 1) {
    for (var i = r.get(t), o = 0; o < i.unicodes.length; o += 1)
      v8(a, i.unicodes[o], t);
    a.segments = a.segments.sort(function(C, S) {
      return C.start - S.start;
    });
  }
  y8(a);
  var l = a.segments.length, u = 0, c = [], p = [], f = [], d = [], v = [], y = [];
  for (t = 0; t < l; t += 1) {
    var m = a.segments[t];
    m.end <= 65535 && m.start <= 65535 ? (c = c.concat({ name: "end_" + t, type: "USHORT", value: m.end }), p = p.concat({ name: "start_" + t, type: "USHORT", value: m.start }), f = f.concat({ name: "idDelta_" + t, type: "SHORT", value: m.delta }), d = d.concat({ name: "idRangeOffset_" + t, type: "USHORT", value: m.offset }), m.glyphId !== void 0 && (v = v.concat({ name: "glyph_" + t, type: "USHORT", value: m.glyphId }))) : u += 1, !e && m.glyphIndex !== void 0 && (y = y.concat({ name: "cmap12Start_" + t, type: "ULONG", value: m.start }), y = y.concat({ name: "cmap12End_" + t, type: "ULONG", value: m.end }), y = y.concat({ name: "cmap12Glyph_" + t, type: "ULONG", value: m.glyphIndex }));
  }
  if (a.segCountX2 = (l - u) * 2, a.searchRange = Math.pow(2, Math.floor(Math.log(l - u) / Math.log(2))) * 2, a.entrySelector = Math.log(a.searchRange / 2) / Math.log(2), a.rangeShift = a.segCountX2 - a.searchRange, a.fields = a.fields.concat(c), a.fields.push({ name: "reservedPad", type: "USHORT", value: 0 }), a.fields = a.fields.concat(p), a.fields = a.fields.concat(f), a.fields = a.fields.concat(d), a.fields = a.fields.concat(v), a.cmap4Length = 14 + // Subtable header
  c.length * 2 + 2 + // reservedPad
  p.length * 2 + f.length * 2 + d.length * 2 + v.length * 2, !e) {
    var g = 16 + // Subtable header
    y.length * 4;
    a.cmap12Offset = 20 + a.cmap4Length, a.fields = a.fields.concat([
      { name: "cmap12Format", type: "USHORT", value: 12 },
      { name: "cmap12Reserved", type: "USHORT", value: 0 },
      { name: "cmap12Length", type: "ULONG", value: g },
      { name: "cmap12Language", type: "ULONG", value: 0 },
      { name: "cmap12nGroups", type: "ULONG", value: y.length / 3 }
    ]), a.fields = a.fields.concat(y);
  }
  return a;
}
var d6 = { parse: d8, make: g8 }, M2 = [
  ".notdef",
  "space",
  "exclam",
  "quotedbl",
  "numbersign",
  "dollar",
  "percent",
  "ampersand",
  "quoteright",
  "parenleft",
  "parenright",
  "asterisk",
  "plus",
  "comma",
  "hyphen",
  "period",
  "slash",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "colon",
  "semicolon",
  "less",
  "equal",
  "greater",
  "question",
  "at",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "bracketleft",
  "backslash",
  "bracketright",
  "asciicircum",
  "underscore",
  "quoteleft",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "braceleft",
  "bar",
  "braceright",
  "asciitilde",
  "exclamdown",
  "cent",
  "sterling",
  "fraction",
  "yen",
  "florin",
  "section",
  "currency",
  "quotesingle",
  "quotedblleft",
  "guillemotleft",
  "guilsinglleft",
  "guilsinglright",
  "fi",
  "fl",
  "endash",
  "dagger",
  "daggerdbl",
  "periodcentered",
  "paragraph",
  "bullet",
  "quotesinglbase",
  "quotedblbase",
  "quotedblright",
  "guillemotright",
  "ellipsis",
  "perthousand",
  "questiondown",
  "grave",
  "acute",
  "circumflex",
  "tilde",
  "macron",
  "breve",
  "dotaccent",
  "dieresis",
  "ring",
  "cedilla",
  "hungarumlaut",
  "ogonek",
  "caron",
  "emdash",
  "AE",
  "ordfeminine",
  "Lslash",
  "Oslash",
  "OE",
  "ordmasculine",
  "ae",
  "dotlessi",
  "lslash",
  "oslash",
  "oe",
  "germandbls",
  "onesuperior",
  "logicalnot",
  "mu",
  "trademark",
  "Eth",
  "onehalf",
  "plusminus",
  "Thorn",
  "onequarter",
  "divide",
  "brokenbar",
  "degree",
  "thorn",
  "threequarters",
  "twosuperior",
  "registered",
  "minus",
  "eth",
  "multiply",
  "threesuperior",
  "copyright",
  "Aacute",
  "Acircumflex",
  "Adieresis",
  "Agrave",
  "Aring",
  "Atilde",
  "Ccedilla",
  "Eacute",
  "Ecircumflex",
  "Edieresis",
  "Egrave",
  "Iacute",
  "Icircumflex",
  "Idieresis",
  "Igrave",
  "Ntilde",
  "Oacute",
  "Ocircumflex",
  "Odieresis",
  "Ograve",
  "Otilde",
  "Scaron",
  "Uacute",
  "Ucircumflex",
  "Udieresis",
  "Ugrave",
  "Yacute",
  "Ydieresis",
  "Zcaron",
  "aacute",
  "acircumflex",
  "adieresis",
  "agrave",
  "aring",
  "atilde",
  "ccedilla",
  "eacute",
  "ecircumflex",
  "edieresis",
  "egrave",
  "iacute",
  "icircumflex",
  "idieresis",
  "igrave",
  "ntilde",
  "oacute",
  "ocircumflex",
  "odieresis",
  "ograve",
  "otilde",
  "scaron",
  "uacute",
  "ucircumflex",
  "udieresis",
  "ugrave",
  "yacute",
  "ydieresis",
  "zcaron",
  "exclamsmall",
  "Hungarumlautsmall",
  "dollaroldstyle",
  "dollarsuperior",
  "ampersandsmall",
  "Acutesmall",
  "parenleftsuperior",
  "parenrightsuperior",
  "266 ff",
  "onedotenleader",
  "zerooldstyle",
  "oneoldstyle",
  "twooldstyle",
  "threeoldstyle",
  "fouroldstyle",
  "fiveoldstyle",
  "sixoldstyle",
  "sevenoldstyle",
  "eightoldstyle",
  "nineoldstyle",
  "commasuperior",
  "threequartersemdash",
  "periodsuperior",
  "questionsmall",
  "asuperior",
  "bsuperior",
  "centsuperior",
  "dsuperior",
  "esuperior",
  "isuperior",
  "lsuperior",
  "msuperior",
  "nsuperior",
  "osuperior",
  "rsuperior",
  "ssuperior",
  "tsuperior",
  "ff",
  "ffi",
  "ffl",
  "parenleftinferior",
  "parenrightinferior",
  "Circumflexsmall",
  "hyphensuperior",
  "Gravesmall",
  "Asmall",
  "Bsmall",
  "Csmall",
  "Dsmall",
  "Esmall",
  "Fsmall",
  "Gsmall",
  "Hsmall",
  "Ismall",
  "Jsmall",
  "Ksmall",
  "Lsmall",
  "Msmall",
  "Nsmall",
  "Osmall",
  "Psmall",
  "Qsmall",
  "Rsmall",
  "Ssmall",
  "Tsmall",
  "Usmall",
  "Vsmall",
  "Wsmall",
  "Xsmall",
  "Ysmall",
  "Zsmall",
  "colonmonetary",
  "onefitted",
  "rupiah",
  "Tildesmall",
  "exclamdownsmall",
  "centoldstyle",
  "Lslashsmall",
  "Scaronsmall",
  "Zcaronsmall",
  "Dieresissmall",
  "Brevesmall",
  "Caronsmall",
  "Dotaccentsmall",
  "Macronsmall",
  "figuredash",
  "hypheninferior",
  "Ogoneksmall",
  "Ringsmall",
  "Cedillasmall",
  "questiondownsmall",
  "oneeighth",
  "threeeighths",
  "fiveeighths",
  "seveneighths",
  "onethird",
  "twothirds",
  "zerosuperior",
  "foursuperior",
  "fivesuperior",
  "sixsuperior",
  "sevensuperior",
  "eightsuperior",
  "ninesuperior",
  "zeroinferior",
  "oneinferior",
  "twoinferior",
  "threeinferior",
  "fourinferior",
  "fiveinferior",
  "sixinferior",
  "seveninferior",
  "eightinferior",
  "nineinferior",
  "centinferior",
  "dollarinferior",
  "periodinferior",
  "commainferior",
  "Agravesmall",
  "Aacutesmall",
  "Acircumflexsmall",
  "Atildesmall",
  "Adieresissmall",
  "Aringsmall",
  "AEsmall",
  "Ccedillasmall",
  "Egravesmall",
  "Eacutesmall",
  "Ecircumflexsmall",
  "Edieresissmall",
  "Igravesmall",
  "Iacutesmall",
  "Icircumflexsmall",
  "Idieresissmall",
  "Ethsmall",
  "Ntildesmall",
  "Ogravesmall",
  "Oacutesmall",
  "Ocircumflexsmall",
  "Otildesmall",
  "Odieresissmall",
  "OEsmall",
  "Oslashsmall",
  "Ugravesmall",
  "Uacutesmall",
  "Ucircumflexsmall",
  "Udieresissmall",
  "Yacutesmall",
  "Thornsmall",
  "Ydieresissmall",
  "001.000",
  "001.001",
  "001.002",
  "001.003",
  "Black",
  "Bold",
  "Book",
  "Light",
  "Medium",
  "Regular",
  "Roman",
  "Semibold"
], m8 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "space",
  "exclam",
  "quotedbl",
  "numbersign",
  "dollar",
  "percent",
  "ampersand",
  "quoteright",
  "parenleft",
  "parenright",
  "asterisk",
  "plus",
  "comma",
  "hyphen",
  "period",
  "slash",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "colon",
  "semicolon",
  "less",
  "equal",
  "greater",
  "question",
  "at",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "bracketleft",
  "backslash",
  "bracketright",
  "asciicircum",
  "underscore",
  "quoteleft",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "braceleft",
  "bar",
  "braceright",
  "asciitilde",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "exclamdown",
  "cent",
  "sterling",
  "fraction",
  "yen",
  "florin",
  "section",
  "currency",
  "quotesingle",
  "quotedblleft",
  "guillemotleft",
  "guilsinglleft",
  "guilsinglright",
  "fi",
  "fl",
  "",
  "endash",
  "dagger",
  "daggerdbl",
  "periodcentered",
  "",
  "paragraph",
  "bullet",
  "quotesinglbase",
  "quotedblbase",
  "quotedblright",
  "guillemotright",
  "ellipsis",
  "perthousand",
  "",
  "questiondown",
  "",
  "grave",
  "acute",
  "circumflex",
  "tilde",
  "macron",
  "breve",
  "dotaccent",
  "dieresis",
  "",
  "ring",
  "cedilla",
  "",
  "hungarumlaut",
  "ogonek",
  "caron",
  "emdash",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "AE",
  "",
  "ordfeminine",
  "",
  "",
  "",
  "",
  "Lslash",
  "Oslash",
  "OE",
  "ordmasculine",
  "",
  "",
  "",
  "",
  "",
  "ae",
  "",
  "",
  "",
  "dotlessi",
  "",
  "",
  "lslash",
  "oslash",
  "oe",
  "germandbls"
], x8 = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "space",
  "exclamsmall",
  "Hungarumlautsmall",
  "",
  "dollaroldstyle",
  "dollarsuperior",
  "ampersandsmall",
  "Acutesmall",
  "parenleftsuperior",
  "parenrightsuperior",
  "twodotenleader",
  "onedotenleader",
  "comma",
  "hyphen",
  "period",
  "fraction",
  "zerooldstyle",
  "oneoldstyle",
  "twooldstyle",
  "threeoldstyle",
  "fouroldstyle",
  "fiveoldstyle",
  "sixoldstyle",
  "sevenoldstyle",
  "eightoldstyle",
  "nineoldstyle",
  "colon",
  "semicolon",
  "commasuperior",
  "threequartersemdash",
  "periodsuperior",
  "questionsmall",
  "",
  "asuperior",
  "bsuperior",
  "centsuperior",
  "dsuperior",
  "esuperior",
  "",
  "",
  "isuperior",
  "",
  "",
  "lsuperior",
  "msuperior",
  "nsuperior",
  "osuperior",
  "",
  "",
  "rsuperior",
  "ssuperior",
  "tsuperior",
  "",
  "ff",
  "fi",
  "fl",
  "ffi",
  "ffl",
  "parenleftinferior",
  "",
  "parenrightinferior",
  "Circumflexsmall",
  "hyphensuperior",
  "Gravesmall",
  "Asmall",
  "Bsmall",
  "Csmall",
  "Dsmall",
  "Esmall",
  "Fsmall",
  "Gsmall",
  "Hsmall",
  "Ismall",
  "Jsmall",
  "Ksmall",
  "Lsmall",
  "Msmall",
  "Nsmall",
  "Osmall",
  "Psmall",
  "Qsmall",
  "Rsmall",
  "Ssmall",
  "Tsmall",
  "Usmall",
  "Vsmall",
  "Wsmall",
  "Xsmall",
  "Ysmall",
  "Zsmall",
  "colonmonetary",
  "onefitted",
  "rupiah",
  "Tildesmall",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "exclamdownsmall",
  "centoldstyle",
  "Lslashsmall",
  "",
  "",
  "Scaronsmall",
  "Zcaronsmall",
  "Dieresissmall",
  "Brevesmall",
  "Caronsmall",
  "",
  "Dotaccentsmall",
  "",
  "",
  "Macronsmall",
  "",
  "",
  "figuredash",
  "hypheninferior",
  "",
  "",
  "Ogoneksmall",
  "Ringsmall",
  "Cedillasmall",
  "",
  "",
  "",
  "onequarter",
  "onehalf",
  "threequarters",
  "questiondownsmall",
  "oneeighth",
  "threeeighths",
  "fiveeighths",
  "seveneighths",
  "onethird",
  "twothirds",
  "",
  "",
  "zerosuperior",
  "onesuperior",
  "twosuperior",
  "threesuperior",
  "foursuperior",
  "fivesuperior",
  "sixsuperior",
  "sevensuperior",
  "eightsuperior",
  "ninesuperior",
  "zeroinferior",
  "oneinferior",
  "twoinferior",
  "threeinferior",
  "fourinferior",
  "fiveinferior",
  "sixinferior",
  "seveninferior",
  "eightinferior",
  "nineinferior",
  "centinferior",
  "dollarinferior",
  "periodinferior",
  "commainferior",
  "Agravesmall",
  "Aacutesmall",
  "Acircumflexsmall",
  "Atildesmall",
  "Adieresissmall",
  "Aringsmall",
  "AEsmall",
  "Ccedillasmall",
  "Egravesmall",
  "Eacutesmall",
  "Ecircumflexsmall",
  "Edieresissmall",
  "Igravesmall",
  "Iacutesmall",
  "Icircumflexsmall",
  "Idieresissmall",
  "Ethsmall",
  "Ntildesmall",
  "Ogravesmall",
  "Oacutesmall",
  "Ocircumflexsmall",
  "Otildesmall",
  "Odieresissmall",
  "OEsmall",
  "Oslashsmall",
  "Ugravesmall",
  "Uacutesmall",
  "Ucircumflexsmall",
  "Udieresissmall",
  "Yacutesmall",
  "Thornsmall",
  "Ydieresissmall"
], T1 = [
  ".notdef",
  ".null",
  "nonmarkingreturn",
  "space",
  "exclam",
  "quotedbl",
  "numbersign",
  "dollar",
  "percent",
  "ampersand",
  "quotesingle",
  "parenleft",
  "parenright",
  "asterisk",
  "plus",
  "comma",
  "hyphen",
  "period",
  "slash",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "colon",
  "semicolon",
  "less",
  "equal",
  "greater",
  "question",
  "at",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "bracketleft",
  "backslash",
  "bracketright",
  "asciicircum",
  "underscore",
  "grave",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "braceleft",
  "bar",
  "braceright",
  "asciitilde",
  "Adieresis",
  "Aring",
  "Ccedilla",
  "Eacute",
  "Ntilde",
  "Odieresis",
  "Udieresis",
  "aacute",
  "agrave",
  "acircumflex",
  "adieresis",
  "atilde",
  "aring",
  "ccedilla",
  "eacute",
  "egrave",
  "ecircumflex",
  "edieresis",
  "iacute",
  "igrave",
  "icircumflex",
  "idieresis",
  "ntilde",
  "oacute",
  "ograve",
  "ocircumflex",
  "odieresis",
  "otilde",
  "uacute",
  "ugrave",
  "ucircumflex",
  "udieresis",
  "dagger",
  "degree",
  "cent",
  "sterling",
  "section",
  "bullet",
  "paragraph",
  "germandbls",
  "registered",
  "copyright",
  "trademark",
  "acute",
  "dieresis",
  "notequal",
  "AE",
  "Oslash",
  "infinity",
  "plusminus",
  "lessequal",
  "greaterequal",
  "yen",
  "mu",
  "partialdiff",
  "summation",
  "product",
  "pi",
  "integral",
  "ordfeminine",
  "ordmasculine",
  "Omega",
  "ae",
  "oslash",
  "questiondown",
  "exclamdown",
  "logicalnot",
  "radical",
  "florin",
  "approxequal",
  "Delta",
  "guillemotleft",
  "guillemotright",
  "ellipsis",
  "nonbreakingspace",
  "Agrave",
  "Atilde",
  "Otilde",
  "OE",
  "oe",
  "endash",
  "emdash",
  "quotedblleft",
  "quotedblright",
  "quoteleft",
  "quoteright",
  "divide",
  "lozenge",
  "ydieresis",
  "Ydieresis",
  "fraction",
  "currency",
  "guilsinglleft",
  "guilsinglright",
  "fi",
  "fl",
  "daggerdbl",
  "periodcentered",
  "quotesinglbase",
  "quotedblbase",
  "perthousand",
  "Acircumflex",
  "Ecircumflex",
  "Aacute",
  "Edieresis",
  "Egrave",
  "Iacute",
  "Icircumflex",
  "Idieresis",
  "Igrave",
  "Oacute",
  "Ocircumflex",
  "apple",
  "Ograve",
  "Uacute",
  "Ucircumflex",
  "Ugrave",
  "dotlessi",
  "circumflex",
  "tilde",
  "macron",
  "breve",
  "dotaccent",
  "ring",
  "cedilla",
  "hungarumlaut",
  "ogonek",
  "caron",
  "Lslash",
  "lslash",
  "Scaron",
  "scaron",
  "Zcaron",
  "zcaron",
  "brokenbar",
  "Eth",
  "eth",
  "Yacute",
  "yacute",
  "Thorn",
  "thorn",
  "minus",
  "multiply",
  "onesuperior",
  "twosuperior",
  "threesuperior",
  "onehalf",
  "onequarter",
  "threequarters",
  "franc",
  "Gbreve",
  "gbreve",
  "Idotaccent",
  "Scedilla",
  "scedilla",
  "Cacute",
  "cacute",
  "Ccaron",
  "ccaron",
  "dcroat"
];
function v6(r) {
  this.font = r;
}
v6.prototype.charToGlyphIndex = function(r) {
  var e = r.codePointAt(0), t = this.font.glyphs;
  if (t) {
    for (var n = 0; n < t.length; n += 1)
      for (var s = t.get(n), a = 0; a < s.unicodes.length; a += 1)
        if (s.unicodes[a] === e)
          return n;
  }
  return null;
};
function y6(r) {
  this.cmap = r;
}
y6.prototype.charToGlyphIndex = function(r) {
  return this.cmap.glyphIndexMap[r.codePointAt(0)] || 0;
};
function W2(r, e) {
  this.encoding = r, this.charset = e;
}
W2.prototype.charToGlyphIndex = function(r) {
  var e = r.codePointAt(0), t = this.encoding[e];
  return this.charset.indexOf(t);
};
function he(r) {
  switch (r.version) {
    case 1:
      this.names = T1.slice();
      break;
    case 2:
      this.names = new Array(r.numberOfGlyphs);
      for (var e = 0; e < r.numberOfGlyphs; e++)
        r.glyphNameIndex[e] < T1.length ? this.names[e] = T1[r.glyphNameIndex[e]] : this.names[e] = r.names[r.glyphNameIndex[e] - T1.length];
      break;
    case 2.5:
      this.names = new Array(r.numberOfGlyphs);
      for (var t = 0; t < r.numberOfGlyphs; t++)
        this.names[t] = T1[t + r.glyphNameIndex[t]];
      break;
    case 3:
      this.names = [];
      break;
    default:
      this.names = [];
      break;
  }
}
he.prototype.nameToGlyphIndex = function(r) {
  return this.names.indexOf(r);
};
he.prototype.glyphIndexToName = function(r) {
  return this.names[r];
};
function b8(r) {
  for (var e, t = r.tables.cmap.glyphIndexMap, n = Object.keys(t), s = 0; s < n.length; s += 1) {
    var a = n[s], i = t[a];
    e = r.glyphs.get(i), e.addUnicode(parseInt(a));
  }
  for (var o = 0; o < r.glyphs.length; o += 1)
    e = r.glyphs.get(o), r.cffEncoding ? r.isCIDFont ? e.name = "gid" + o : e.name = r.cffEncoding.charset[o] : r.glyphNames.names && (e.name = r.glyphNames.glyphIndexToName(o));
}
function S8(r) {
  r._IndexToUnicodeMap = {};
  for (var e = r.tables.cmap.glyphIndexMap, t = Object.keys(e), n = 0; n < t.length; n += 1) {
    var s = t[n], a = e[s];
    r._IndexToUnicodeMap[a] === void 0 ? r._IndexToUnicodeMap[a] = {
      unicodes: [parseInt(s)]
    } : r._IndexToUnicodeMap[a].unicodes.push(parseInt(s));
  }
}
function T8(r, e) {
  e.lowMemory ? S8(r) : b8(r);
}
function E8(r, e, t, n, s) {
  r.beginPath(), r.moveTo(e, t), r.lineTo(n, s), r.stroke();
}
var b1 = { line: E8 };
function A8(r, e) {
  var t = e || new v0();
  return {
    configurable: !0,
    get: function() {
      return typeof t == "function" && (t = t()), t;
    },
    set: function(n) {
      t = n;
    }
  };
}
function D0(r) {
  this.bindConstructorValues(r);
}
D0.prototype.bindConstructorValues = function(r) {
  this.index = r.index || 0, this.name = r.name || null, this.unicode = r.unicode || void 0, this.unicodes = r.unicodes || r.unicode !== void 0 ? [r.unicode] : [], "xMin" in r && (this.xMin = r.xMin), "yMin" in r && (this.yMin = r.yMin), "xMax" in r && (this.xMax = r.xMax), "yMax" in r && (this.yMax = r.yMax), "advanceWidth" in r && (this.advanceWidth = r.advanceWidth), Object.defineProperty(this, "path", A8(this, r.path));
};
D0.prototype.addUnicode = function(r) {
  this.unicodes.length === 0 && (this.unicode = r), this.unicodes.push(r);
};
D0.prototype.getBoundingBox = function() {
  return this.path.getBoundingBox();
};
D0.prototype.getPath = function(r, e, t, n, s) {
  r = r !== void 0 ? r : 0, e = e !== void 0 ? e : 0, t = t !== void 0 ? t : 72;
  var a, i;
  n || (n = {});
  var o = n.xScale, l = n.yScale;
  if (n.hinting && s && s.hinting && (i = this.path && s.hinting.exec(this, t)), i)
    a = s.hinting.getCommands(i), r = Math.round(r), e = Math.round(e), o = l = 1;
  else {
    a = this.path.commands;
    var u = 1 / (this.path.unitsPerEm || 1e3) * t;
    o === void 0 && (o = u), l === void 0 && (l = u);
  }
  for (var c = new v0(), p = 0; p < a.length; p += 1) {
    var f = a[p];
    f.type === "M" ? c.moveTo(r + f.x * o, e + -f.y * l) : f.type === "L" ? c.lineTo(r + f.x * o, e + -f.y * l) : f.type === "Q" ? c.quadraticCurveTo(
      r + f.x1 * o,
      e + -f.y1 * l,
      r + f.x * o,
      e + -f.y * l
    ) : f.type === "C" ? c.curveTo(
      r + f.x1 * o,
      e + -f.y1 * l,
      r + f.x2 * o,
      e + -f.y2 * l,
      r + f.x * o,
      e + -f.y * l
    ) : f.type === "Z" && c.closePath();
  }
  return c;
};
D0.prototype.getContours = function() {
  if (this.points === void 0)
    return [];
  for (var r = [], e = [], t = 0; t < this.points.length; t += 1) {
    var n = this.points[t];
    e.push(n), n.lastPointOfContour && (r.push(e), e = []);
  }
  return z.argument(e.length === 0, "There are still points left in the current contour."), r;
};
D0.prototype.getMetrics = function() {
  for (var r = this.path.commands, e = [], t = [], n = 0; n < r.length; n += 1) {
    var s = r[n];
    s.type !== "Z" && (e.push(s.x), t.push(s.y)), (s.type === "Q" || s.type === "C") && (e.push(s.x1), t.push(s.y1)), s.type === "C" && (e.push(s.x2), t.push(s.y2));
  }
  var a = {
    xMin: Math.min.apply(null, e),
    yMin: Math.min.apply(null, t),
    xMax: Math.max.apply(null, e),
    yMax: Math.max.apply(null, t),
    leftSideBearing: this.leftSideBearing
  };
  return isFinite(a.xMin) || (a.xMin = 0), isFinite(a.xMax) || (a.xMax = this.advanceWidth), isFinite(a.yMin) || (a.yMin = 0), isFinite(a.yMax) || (a.yMax = 0), a.rightSideBearing = this.advanceWidth - a.leftSideBearing - (a.xMax - a.xMin), a;
};
D0.prototype.draw = function(r, e, t, n, s) {
  this.getPath(e, t, n, s).draw(r);
};
D0.prototype.drawPoints = function(r, e, t, n) {
  function s(p, f, d, v) {
    r.beginPath();
    for (var y = 0; y < p.length; y += 1)
      r.moveTo(f + p[y].x * v, d + p[y].y * v), r.arc(f + p[y].x * v, d + p[y].y * v, 2, 0, Math.PI * 2, !1);
    r.closePath(), r.fill();
  }
  e = e !== void 0 ? e : 0, t = t !== void 0 ? t : 0, n = n !== void 0 ? n : 24;
  for (var a = 1 / this.path.unitsPerEm * n, i = [], o = [], l = this.path, u = 0; u < l.commands.length; u += 1) {
    var c = l.commands[u];
    c.x !== void 0 && i.push({ x: c.x, y: -c.y }), c.x1 !== void 0 && o.push({ x: c.x1, y: -c.y1 }), c.x2 !== void 0 && o.push({ x: c.x2, y: -c.y2 });
  }
  r.fillStyle = "blue", s(i, e, t, a), r.fillStyle = "red", s(o, e, t, a);
};
D0.prototype.drawMetrics = function(r, e, t, n) {
  var s;
  e = e !== void 0 ? e : 0, t = t !== void 0 ? t : 0, n = n !== void 0 ? n : 24, s = 1 / this.path.unitsPerEm * n, r.lineWidth = 1, r.strokeStyle = "black", b1.line(r, e, -1e4, e, 1e4), b1.line(r, -1e4, t, 1e4, t);
  var a = this.xMin || 0, i = this.yMin || 0, o = this.xMax || 0, l = this.yMax || 0, u = this.advanceWidth || 0;
  r.strokeStyle = "blue", b1.line(r, e + a * s, -1e4, e + a * s, 1e4), b1.line(r, e + o * s, -1e4, e + o * s, 1e4), b1.line(r, -1e4, t + -i * s, 1e4, t + -i * s), b1.line(r, -1e4, t + -l * s, 1e4, t + -l * s), r.strokeStyle = "green", b1.line(r, e + u * s, -1e4, e + u * s, 1e4);
};
function D2(r, e, t) {
  Object.defineProperty(r, e, {
    get: function() {
      return r.path, r[t];
    },
    set: function(n) {
      r[t] = n;
    },
    enumerable: !0,
    configurable: !0
  });
}
function ue(r, e) {
  if (this.font = r, this.glyphs = {}, Array.isArray(e))
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      n.path.unitsPerEm = r.unitsPerEm, this.glyphs[t] = n;
    }
  this.length = e && e.length || 0;
}
ue.prototype.get = function(r) {
  if (this.glyphs[r] === void 0) {
    this.font._push(r), typeof this.glyphs[r] == "function" && (this.glyphs[r] = this.glyphs[r]());
    var e = this.glyphs[r], t = this.font._IndexToUnicodeMap[r];
    if (t)
      for (var n = 0; n < t.unicodes.length; n++)
        e.addUnicode(t.unicodes[n]);
    this.font.cffEncoding ? this.font.isCIDFont ? e.name = "gid" + r : e.name = this.font.cffEncoding.charset[r] : this.font.glyphNames.names && (e.name = this.font.glyphNames.glyphIndexToName(r)), this.glyphs[r].advanceWidth = this.font._hmtxTableData[r].advanceWidth, this.glyphs[r].leftSideBearing = this.font._hmtxTableData[r].leftSideBearing;
  } else
    typeof this.glyphs[r] == "function" && (this.glyphs[r] = this.glyphs[r]());
  return this.glyphs[r];
};
ue.prototype.push = function(r, e) {
  this.glyphs[r] = e, this.length++;
};
function C8(r, e) {
  return new D0({ index: e, font: r });
}
function k8(r, e, t, n, s, a) {
  return function() {
    var i = new D0({ index: e, font: r });
    return i.path = function() {
      t(i, n, s);
      var o = a(r.glyphs, i);
      return o.unitsPerEm = r.unitsPerEm, o;
    }, D2(i, "xMin", "_xMin"), D2(i, "xMax", "_xMax"), D2(i, "yMin", "_yMin"), D2(i, "yMax", "_yMax"), i;
  };
}
function P8(r, e, t, n) {
  return function() {
    var s = new D0({ index: e, font: r });
    return s.path = function() {
      var a = t(r, s, n);
      return a.unitsPerEm = r.unitsPerEm, a;
    }, s;
  };
}
var K0 = { GlyphSet: ue, glyphLoader: C8, ttfGlyphLoader: k8, cffGlyphLoader: P8 };
function g6(r, e) {
  if (r === e)
    return !0;
  if (Array.isArray(r) && Array.isArray(e)) {
    if (r.length !== e.length)
      return !1;
    for (var t = 0; t < r.length; t += 1)
      if (!g6(r[t], e[t]))
        return !1;
    return !0;
  } else
    return !1;
}
function D4(r) {
  var e;
  return r.length < 1240 ? e = 107 : r.length < 33900 ? e = 1131 : e = 32768, e;
}
function y1(r, e, t) {
  var n = [], s = [], a = G.getCard16(r, e), i, o;
  if (a !== 0) {
    var l = G.getByte(r, e + 2);
    i = e + (a + 1) * l + 2;
    for (var u = e + 3, c = 0; c < a + 1; c += 1)
      n.push(G.getOffset(r, u, l)), u += l;
    o = i + n[a];
  } else
    o = e + 2;
  for (var p = 0; p < n.length - 1; p += 1) {
    var f = G.getBytes(r, i + n[p], i + n[p + 1]);
    t && (f = t(f)), s.push(f);
  }
  return { objects: s, startOffset: e, endOffset: o };
}
function w8(r, e) {
  var t = [], n = G.getCard16(r, e), s, a;
  if (n !== 0) {
    var i = G.getByte(r, e + 2);
    s = e + (n + 1) * i + 2;
    for (var o = e + 3, l = 0; l < n + 1; l += 1)
      t.push(G.getOffset(r, o, i)), o += i;
    a = s + t[n];
  } else
    a = e + 2;
  return { offsets: t, startOffset: e, endOffset: a };
}
function F8(r, e, t, n, s) {
  var a = G.getCard16(t, n), i = 0;
  if (a !== 0) {
    var o = G.getByte(t, n + 2);
    i = n + (a + 1) * o + 2;
  }
  var l = G.getBytes(t, i + e[r], i + e[r + 1]);
  return l;
}
function L8(r) {
  for (var e = "", t = 15, n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"]; ; ) {
    var s = r.parseByte(), a = s >> 4, i = s & 15;
    if (a === t || (e += n[a], i === t))
      break;
    e += n[i];
  }
  return parseFloat(e);
}
function D8(r, e) {
  var t, n, s, a;
  if (e === 28)
    return t = r.parseByte(), n = r.parseByte(), t << 8 | n;
  if (e === 29)
    return t = r.parseByte(), n = r.parseByte(), s = r.parseByte(), a = r.parseByte(), t << 24 | n << 16 | s << 8 | a;
  if (e === 30)
    return L8(r);
  if (e >= 32 && e <= 246)
    return e - 139;
  if (e >= 247 && e <= 250)
    return t = r.parseByte(), (e - 247) * 256 + t + 108;
  if (e >= 251 && e <= 254)
    return t = r.parseByte(), -(e - 251) * 256 - t - 108;
  throw new Error("Invalid b0 " + e);
}
function O8(r) {
  for (var e = {}, t = 0; t < r.length; t += 1) {
    var n = r[t][0], s = r[t][1], a = void 0;
    if (s.length === 1 ? a = s[0] : a = s, e.hasOwnProperty(n) && !isNaN(e[n]))
      throw new Error("Object " + e + " already has key " + n);
    e[n] = a;
  }
  return e;
}
function m6(r, e, t) {
  e = e !== void 0 ? e : 0;
  var n = new G.Parser(r, e), s = [], a = [];
  for (t = t !== void 0 ? t : r.length; n.relativeOffset < t; ) {
    var i = n.parseByte();
    i <= 21 ? (i === 12 && (i = 1200 + n.parseByte()), s.push([i, a]), a = []) : a.push(D8(n, i));
  }
  return O8(s);
}
function Z1(r, e) {
  return e <= 390 ? e = M2[e] : e = r[e - 391], e;
}
function x6(r, e, t) {
  for (var n = {}, s, a = 0; a < e.length; a += 1) {
    var i = e[a];
    if (Array.isArray(i.type)) {
      var o = [];
      o.length = i.type.length;
      for (var l = 0; l < i.type.length; l++)
        s = r[i.op] !== void 0 ? r[i.op][l] : void 0, s === void 0 && (s = i.value !== void 0 && i.value[l] !== void 0 ? i.value[l] : null), i.type[l] === "SID" && (s = Z1(t, s)), o[l] = s;
      n[i.name] = o;
    } else
      s = r[i.op], s === void 0 && (s = i.value !== void 0 ? i.value : null), i.type === "SID" && (s = Z1(t, s)), n[i.name] = s;
  }
  return n;
}
function I8(r, e) {
  var t = {};
  return t.formatMajor = G.getCard8(r, e), t.formatMinor = G.getCard8(r, e + 1), t.size = G.getCard8(r, e + 2), t.offsetSize = G.getCard8(r, e + 3), t.startOffset = e, t.endOffset = e + 4, t;
}
var b6 = [
  { name: "version", op: 0, type: "SID" },
  { name: "notice", op: 1, type: "SID" },
  { name: "copyright", op: 1200, type: "SID" },
  { name: "fullName", op: 2, type: "SID" },
  { name: "familyName", op: 3, type: "SID" },
  { name: "weight", op: 4, type: "SID" },
  { name: "isFixedPitch", op: 1201, type: "number", value: 0 },
  { name: "italicAngle", op: 1202, type: "number", value: 0 },
  { name: "underlinePosition", op: 1203, type: "number", value: -100 },
  { name: "underlineThickness", op: 1204, type: "number", value: 50 },
  { name: "paintType", op: 1205, type: "number", value: 0 },
  { name: "charstringType", op: 1206, type: "number", value: 2 },
  {
    name: "fontMatrix",
    op: 1207,
    type: ["real", "real", "real", "real", "real", "real"],
    value: [1e-3, 0, 0, 1e-3, 0, 0]
  },
  { name: "uniqueId", op: 13, type: "number" },
  { name: "fontBBox", op: 5, type: ["number", "number", "number", "number"], value: [0, 0, 0, 0] },
  { name: "strokeWidth", op: 1208, type: "number", value: 0 },
  { name: "xuid", op: 14, type: [], value: null },
  { name: "charset", op: 15, type: "offset", value: 0 },
  { name: "encoding", op: 16, type: "offset", value: 0 },
  { name: "charStrings", op: 17, type: "offset", value: 0 },
  { name: "private", op: 18, type: ["number", "offset"], value: [0, 0] },
  { name: "ros", op: 1230, type: ["SID", "SID", "number"] },
  { name: "cidFontVersion", op: 1231, type: "number", value: 0 },
  { name: "cidFontRevision", op: 1232, type: "number", value: 0 },
  { name: "cidFontType", op: 1233, type: "number", value: 0 },
  { name: "cidCount", op: 1234, type: "number", value: 8720 },
  { name: "uidBase", op: 1235, type: "number" },
  { name: "fdArray", op: 1236, type: "offset" },
  { name: "fdSelect", op: 1237, type: "offset" },
  { name: "fontName", op: 1238, type: "SID" }
], S6 = [
  { name: "subrs", op: 19, type: "offset", value: 0 },
  { name: "defaultWidthX", op: 20, type: "number", value: 0 },
  { name: "nominalWidthX", op: 21, type: "number", value: 0 }
];
function R8(r, e) {
  var t = m6(r, 0, r.byteLength);
  return x6(t, b6, e);
}
function T6(r, e, t, n) {
  var s = m6(r, e, t);
  return x6(s, S6, n);
}
function s5(r, e, t, n) {
  for (var s = [], a = 0; a < t.length; a += 1) {
    var i = new DataView(new Uint8Array(t[a]).buffer), o = R8(i, n);
    o._subrs = [], o._subrsBias = 0, o._defaultWidthX = 0, o._nominalWidthX = 0;
    var l = o.private[0], u = o.private[1];
    if (l !== 0 && u !== 0) {
      var c = T6(r, u + e, l, n);
      if (o._defaultWidthX = c.defaultWidthX, o._nominalWidthX = c.nominalWidthX, c.subrs !== 0) {
        var p = u + c.subrs, f = y1(r, p + e);
        o._subrs = f.objects, o._subrsBias = D4(o._subrs);
      }
      o._privateDict = c;
    }
    s.push(o);
  }
  return s;
}
function M8(r, e, t, n) {
  var s, a, i = new G.Parser(r, e);
  t -= 1;
  var o = [".notdef"], l = i.parseCard8();
  if (l === 0)
    for (var u = 0; u < t; u += 1)
      s = i.parseSID(), o.push(Z1(n, s));
  else if (l === 1)
    for (; o.length <= t; ) {
      s = i.parseSID(), a = i.parseCard8();
      for (var c = 0; c <= a; c += 1)
        o.push(Z1(n, s)), s += 1;
    }
  else if (l === 2)
    for (; o.length <= t; ) {
      s = i.parseSID(), a = i.parseCard16();
      for (var p = 0; p <= a; p += 1)
        o.push(Z1(n, s)), s += 1;
    }
  else
    throw new Error("Unknown charset format " + l);
  return o;
}
function _8(r, e, t) {
  var n, s = {}, a = new G.Parser(r, e), i = a.parseCard8();
  if (i === 0)
    for (var o = a.parseCard8(), l = 0; l < o; l += 1)
      n = a.parseCard8(), s[n] = l;
  else if (i === 1) {
    var u = a.parseCard8();
    n = 1;
    for (var c = 0; c < u; c += 1)
      for (var p = a.parseCard8(), f = a.parseCard8(), d = p; d <= p + f; d += 1)
        s[d] = n, n += 1;
  } else
    throw new Error("Unknown encoding format " + i);
  return new W2(s, t);
}
function a5(r, e, t) {
  var n, s, a, i, o = new v0(), l = [], u = 0, c = !1, p = !1, f = 0, d = 0, v, y, m, g;
  if (r.isCIDFont) {
    var C = r.tables.cff.topDict._fdSelect[e.index], S = r.tables.cff.topDict._fdArray[C];
    v = S._subrs, y = S._subrsBias, m = S._defaultWidthX, g = S._nominalWidthX;
  } else
    v = r.tables.cff.topDict._subrs, y = r.tables.cff.topDict._subrsBias, m = r.tables.cff.topDict._defaultWidthX, g = r.tables.cff.topDict._nominalWidthX;
  var E = m;
  function w(A, k) {
    p && o.closePath(), o.moveTo(A, k), p = !0;
  }
  function L() {
    var A;
    A = l.length % 2 !== 0, A && !c && (E = l.shift() + g), u += l.length >> 1, l.length = 0, c = !0;
  }
  function F(A) {
    for (var k, O, M, H, e0, Z, Q, j, t0, s0, r0, a0, W = 0; W < A.length; ) {
      var $ = A[W];
      switch (W += 1, $) {
        case 1:
          L();
          break;
        case 3:
          L();
          break;
        case 4:
          l.length > 1 && !c && (E = l.shift() + g, c = !0), d += l.pop(), w(f, d);
          break;
        case 5:
          for (; l.length > 0; )
            f += l.shift(), d += l.shift(), o.lineTo(f, d);
          break;
        case 6:
          for (; l.length > 0 && (f += l.shift(), o.lineTo(f, d), l.length !== 0); )
            d += l.shift(), o.lineTo(f, d);
          break;
        case 7:
          for (; l.length > 0 && (d += l.shift(), o.lineTo(f, d), l.length !== 0); )
            f += l.shift(), o.lineTo(f, d);
          break;
        case 8:
          for (; l.length > 0; )
            n = f + l.shift(), s = d + l.shift(), a = n + l.shift(), i = s + l.shift(), f = a + l.shift(), d = i + l.shift(), o.curveTo(n, s, a, i, f, d);
          break;
        case 10:
          e0 = l.pop() + y, Z = v[e0], Z && F(Z);
          break;
        case 11:
          return;
        case 12:
          switch ($ = A[W], W += 1, $) {
            case 35:
              n = f + l.shift(), s = d + l.shift(), a = n + l.shift(), i = s + l.shift(), Q = a + l.shift(), j = i + l.shift(), t0 = Q + l.shift(), s0 = j + l.shift(), r0 = t0 + l.shift(), a0 = s0 + l.shift(), f = r0 + l.shift(), d = a0 + l.shift(), l.shift(), o.curveTo(n, s, a, i, Q, j), o.curveTo(t0, s0, r0, a0, f, d);
              break;
            case 34:
              n = f + l.shift(), s = d, a = n + l.shift(), i = s + l.shift(), Q = a + l.shift(), j = i, t0 = Q + l.shift(), s0 = i, r0 = t0 + l.shift(), a0 = d, f = r0 + l.shift(), o.curveTo(n, s, a, i, Q, j), o.curveTo(t0, s0, r0, a0, f, d);
              break;
            case 36:
              n = f + l.shift(), s = d + l.shift(), a = n + l.shift(), i = s + l.shift(), Q = a + l.shift(), j = i, t0 = Q + l.shift(), s0 = i, r0 = t0 + l.shift(), a0 = s0 + l.shift(), f = r0 + l.shift(), o.curveTo(n, s, a, i, Q, j), o.curveTo(t0, s0, r0, a0, f, d);
              break;
            case 37:
              n = f + l.shift(), s = d + l.shift(), a = n + l.shift(), i = s + l.shift(), Q = a + l.shift(), j = i + l.shift(), t0 = Q + l.shift(), s0 = j + l.shift(), r0 = t0 + l.shift(), a0 = s0 + l.shift(), Math.abs(r0 - f) > Math.abs(a0 - d) ? f = r0 + l.shift() : d = a0 + l.shift(), o.curveTo(n, s, a, i, Q, j), o.curveTo(t0, s0, r0, a0, f, d);
              break;
            default:
              console.log("Glyph " + e.index + ": unknown operator 1200" + $), l.length = 0;
          }
          break;
        case 14:
          l.length > 0 && !c && (E = l.shift() + g, c = !0), p && (o.closePath(), p = !1);
          break;
        case 18:
          L();
          break;
        case 19:
        // hintmask
        case 20:
          L(), W += u + 7 >> 3;
          break;
        case 21:
          l.length > 2 && !c && (E = l.shift() + g, c = !0), d += l.pop(), f += l.pop(), w(f, d);
          break;
        case 22:
          l.length > 1 && !c && (E = l.shift() + g, c = !0), f += l.pop(), w(f, d);
          break;
        case 23:
          L();
          break;
        case 24:
          for (; l.length > 2; )
            n = f + l.shift(), s = d + l.shift(), a = n + l.shift(), i = s + l.shift(), f = a + l.shift(), d = i + l.shift(), o.curveTo(n, s, a, i, f, d);
          f += l.shift(), d += l.shift(), o.lineTo(f, d);
          break;
        case 25:
          for (; l.length > 6; )
            f += l.shift(), d += l.shift(), o.lineTo(f, d);
          n = f + l.shift(), s = d + l.shift(), a = n + l.shift(), i = s + l.shift(), f = a + l.shift(), d = i + l.shift(), o.curveTo(n, s, a, i, f, d);
          break;
        case 26:
          for (l.length % 2 && (f += l.shift()); l.length > 0; )
            n = f, s = d + l.shift(), a = n + l.shift(), i = s + l.shift(), f = a, d = i + l.shift(), o.curveTo(n, s, a, i, f, d);
          break;
        case 27:
          for (l.length % 2 && (d += l.shift()); l.length > 0; )
            n = f + l.shift(), s = d, a = n + l.shift(), i = s + l.shift(), f = a + l.shift(), d = i, o.curveTo(n, s, a, i, f, d);
          break;
        case 28:
          k = A[W], O = A[W + 1], l.push((k << 24 | O << 16) >> 16), W += 2;
          break;
        case 29:
          e0 = l.pop() + r.gsubrsBias, Z = r.gsubrs[e0], Z && F(Z);
          break;
        case 30:
          for (; l.length > 0 && (n = f, s = d + l.shift(), a = n + l.shift(), i = s + l.shift(), f = a + l.shift(), d = i + (l.length === 1 ? l.shift() : 0), o.curveTo(n, s, a, i, f, d), l.length !== 0); )
            n = f + l.shift(), s = d, a = n + l.shift(), i = s + l.shift(), d = i + l.shift(), f = a + (l.length === 1 ? l.shift() : 0), o.curveTo(n, s, a, i, f, d);
          break;
        case 31:
          for (; l.length > 0 && (n = f + l.shift(), s = d, a = n + l.shift(), i = s + l.shift(), d = i + l.shift(), f = a + (l.length === 1 ? l.shift() : 0), o.curveTo(n, s, a, i, f, d), l.length !== 0); )
            n = f, s = d + l.shift(), a = n + l.shift(), i = s + l.shift(), f = a + l.shift(), d = i + (l.length === 1 ? l.shift() : 0), o.curveTo(n, s, a, i, f, d);
          break;
        default:
          $ < 32 ? console.log("Glyph " + e.index + ": unknown operator " + $) : $ < 247 ? l.push($ - 139) : $ < 251 ? (k = A[W], W += 1, l.push(($ - 247) * 256 + k + 108)) : $ < 255 ? (k = A[W], W += 1, l.push(-($ - 251) * 256 - k - 108)) : (k = A[W], O = A[W + 1], M = A[W + 2], H = A[W + 3], W += 4, l.push((k << 24 | O << 16 | M << 8 | H) / 65536));
      }
    }
  }
  return F(t), e.advanceWidth = E, o;
}
function N8(r, e, t, n) {
  var s = [], a, i = new G.Parser(r, e), o = i.parseCard8();
  if (o === 0)
    for (var l = 0; l < t; l++) {
      if (a = i.parseCard8(), a >= n)
        throw new Error("CFF table CID Font FDSelect has bad FD index value " + a + " (FD count " + n + ")");
      s.push(a);
    }
  else if (o === 3) {
    var u = i.parseCard16(), c = i.parseCard16();
    if (c !== 0)
      throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + c);
    for (var p, f = 0; f < u; f++) {
      if (a = i.parseCard8(), p = i.parseCard16(), a >= n)
        throw new Error("CFF table CID Font FDSelect has bad FD index value " + a + " (FD count " + n + ")");
      if (p > t)
        throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + p);
      for (; c < p; c++)
        s.push(a);
      c = p;
    }
    if (p !== t)
      throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + p);
  } else
    throw new Error("CFF Table CID Font FDSelect table has unsupported format " + o);
  return s;
}
function B8(r, e, t, n) {
  t.tables.cff = {};
  var s = I8(r, e), a = y1(r, s.endOffset, G.bytesToString), i = y1(r, a.endOffset), o = y1(r, i.endOffset, G.bytesToString), l = y1(r, o.endOffset);
  t.gsubrs = l.objects, t.gsubrsBias = D4(t.gsubrs);
  var u = s5(r, e, i.objects, o.objects);
  if (u.length !== 1)
    throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + u.length);
  var c = u[0];
  if (t.tables.cff.topDict = c, c._privateDict && (t.defaultWidthX = c._privateDict.defaultWidthX, t.nominalWidthX = c._privateDict.nominalWidthX), c.ros[0] !== void 0 && c.ros[1] !== void 0 && (t.isCIDFont = !0), t.isCIDFont) {
    var p = c.fdArray, f = c.fdSelect;
    if (p === 0 || f === 0)
      throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
    p += e;
    var d = y1(r, p), v = s5(r, e, d.objects, o.objects);
    c._fdArray = v, f += e, c._fdSelect = N8(r, f, t.numGlyphs, v.length);
  }
  var y = e + c.private[1], m = T6(r, y, c.private[0], o.objects);
  if (t.defaultWidthX = m.defaultWidthX, t.nominalWidthX = m.nominalWidthX, m.subrs !== 0) {
    var g = y + m.subrs, C = y1(r, g);
    t.subrs = C.objects, t.subrsBias = D4(t.subrs);
  } else
    t.subrs = [], t.subrsBias = 0;
  var S;
  n.lowMemory ? (S = w8(r, e + c.charStrings), t.nGlyphs = S.offsets.length) : (S = y1(r, e + c.charStrings), t.nGlyphs = S.objects.length);
  var E = M8(r, e + c.charset, t.nGlyphs, o.objects);
  if (c.encoding === 0 ? t.cffEncoding = new W2(m8, E) : c.encoding === 1 ? t.cffEncoding = new W2(x8, E) : t.cffEncoding = _8(r, e + c.encoding, E), t.encoding = t.encoding || t.cffEncoding, t.glyphs = new K0.GlyphSet(t), n.lowMemory)
    t._push = function(F) {
      var A = F8(F, S.offsets, r, e + c.charStrings);
      t.glyphs.push(F, K0.cffGlyphLoader(t, F, a5, A));
    };
  else
    for (var w = 0; w < t.nGlyphs; w += 1) {
      var L = S.objects[w];
      t.glyphs.push(w, K0.cffGlyphLoader(t, w, a5, L));
    }
}
function E6(r, e) {
  var t, n = M2.indexOf(r);
  return n >= 0 && (t = n), n = e.indexOf(r), n >= 0 ? t = n + M2.length : (t = M2.length + e.length, e.push(r)), t;
}
function U8() {
  return new _.Record("Header", [
    { name: "major", type: "Card8", value: 1 },
    { name: "minor", type: "Card8", value: 0 },
    { name: "hdrSize", type: "Card8", value: 4 },
    { name: "major", type: "Card8", value: 1 }
  ]);
}
function G8(r) {
  var e = new _.Record("Name INDEX", [
    { name: "names", type: "INDEX", value: [] }
  ]);
  e.names = [];
  for (var t = 0; t < r.length; t += 1)
    e.names.push({ name: "name_" + t, type: "NAME", value: r[t] });
  return e;
}
function A6(r, e, t) {
  for (var n = {}, s = 0; s < r.length; s += 1) {
    var a = r[s], i = e[a.name];
    i !== void 0 && !g6(i, a.value) && (a.type === "SID" && (i = E6(i, t)), n[a.op] = { name: a.name, type: a.type, value: i });
  }
  return n;
}
function i5(r, e) {
  var t = new _.Record("Top DICT", [
    { name: "dict", type: "DICT", value: {} }
  ]);
  return t.dict = A6(b6, r, e), t;
}
function o5(r) {
  var e = new _.Record("Top DICT INDEX", [
    { name: "topDicts", type: "INDEX", value: [] }
  ]);
  return e.topDicts = [{ name: "topDict_0", type: "TABLE", value: r }], e;
}
function H8(r) {
  var e = new _.Record("String INDEX", [
    { name: "strings", type: "INDEX", value: [] }
  ]);
  e.strings = [];
  for (var t = 0; t < r.length; t += 1)
    e.strings.push({ name: "string_" + t, type: "STRING", value: r[t] });
  return e;
}
function z8() {
  return new _.Record("Global Subr INDEX", [
    { name: "subrs", type: "INDEX", value: [] }
  ]);
}
function V8(r, e) {
  for (var t = new _.Record("Charsets", [
    { name: "format", type: "Card8", value: 0 }
  ]), n = 0; n < r.length; n += 1) {
    var s = r[n], a = E6(s, e);
    t.fields.push({ name: "glyph_" + n, type: "SID", value: a });
  }
  return t;
}
function W8(r) {
  var e = [], t = r.path;
  e.push({ name: "width", type: "NUMBER", value: r.advanceWidth });
  for (var n = 0, s = 0, a = 0; a < t.commands.length; a += 1) {
    var i = void 0, o = void 0, l = t.commands[a];
    if (l.type === "Q") {
      var u = 0.3333333333333333, c = 2 / 3;
      l = {
        type: "C",
        x: l.x,
        y: l.y,
        x1: Math.round(u * n + c * l.x1),
        y1: Math.round(u * s + c * l.y1),
        x2: Math.round(u * l.x + c * l.x1),
        y2: Math.round(u * l.y + c * l.y1)
      };
    }
    if (l.type === "M")
      i = Math.round(l.x - n), o = Math.round(l.y - s), e.push({ name: "dx", type: "NUMBER", value: i }), e.push({ name: "dy", type: "NUMBER", value: o }), e.push({ name: "rmoveto", type: "OP", value: 21 }), n = Math.round(l.x), s = Math.round(l.y);
    else if (l.type === "L")
      i = Math.round(l.x - n), o = Math.round(l.y - s), e.push({ name: "dx", type: "NUMBER", value: i }), e.push({ name: "dy", type: "NUMBER", value: o }), e.push({ name: "rlineto", type: "OP", value: 5 }), n = Math.round(l.x), s = Math.round(l.y);
    else if (l.type === "C") {
      var p = Math.round(l.x1 - n), f = Math.round(l.y1 - s), d = Math.round(l.x2 - l.x1), v = Math.round(l.y2 - l.y1);
      i = Math.round(l.x - l.x2), o = Math.round(l.y - l.y2), e.push({ name: "dx1", type: "NUMBER", value: p }), e.push({ name: "dy1", type: "NUMBER", value: f }), e.push({ name: "dx2", type: "NUMBER", value: d }), e.push({ name: "dy2", type: "NUMBER", value: v }), e.push({ name: "dx", type: "NUMBER", value: i }), e.push({ name: "dy", type: "NUMBER", value: o }), e.push({ name: "rrcurveto", type: "OP", value: 8 }), n = Math.round(l.x), s = Math.round(l.y);
    }
  }
  return e.push({ name: "endchar", type: "OP", value: 14 }), e;
}
function X8(r) {
  for (var e = new _.Record("CharStrings INDEX", [
    { name: "charStrings", type: "INDEX", value: [] }
  ]), t = 0; t < r.length; t += 1) {
    var n = r.get(t), s = W8(n);
    e.charStrings.push({ name: n.name, type: "CHARSTRING", value: s });
  }
  return e;
}
function Y8(r, e) {
  var t = new _.Record("Private DICT", [
    { name: "dict", type: "DICT", value: {} }
  ]);
  return t.dict = A6(S6, r, e), t;
}
function J8(r, e) {
  for (var t = new _.Table("CFF ", [
    { name: "header", type: "RECORD" },
    { name: "nameIndex", type: "RECORD" },
    { name: "topDictIndex", type: "RECORD" },
    { name: "stringIndex", type: "RECORD" },
    { name: "globalSubrIndex", type: "RECORD" },
    { name: "charsets", type: "RECORD" },
    { name: "charStringsIndex", type: "RECORD" },
    { name: "privateDict", type: "RECORD" }
  ]), n = 1 / e.unitsPerEm, s = {
    version: e.version,
    fullName: e.fullName,
    familyName: e.familyName,
    weight: e.weightName,
    fontBBox: e.fontBBox || [0, 0, 0, 0],
    fontMatrix: [n, 0, 0, n, 0, 0],
    charset: 999,
    encoding: 0,
    charStrings: 999,
    private: [0, 999]
  }, a = {}, i = [], o, l = 1; l < r.length; l += 1)
    o = r.get(l), i.push(o.name);
  var u = [];
  t.header = U8(), t.nameIndex = G8([e.postScriptName]);
  var c = i5(s, u);
  t.topDictIndex = o5(c), t.globalSubrIndex = z8(), t.charsets = V8(i, u), t.charStringsIndex = X8(r), t.privateDict = Y8(a, u), t.stringIndex = H8(u);
  var p = t.header.sizeOf() + t.nameIndex.sizeOf() + t.topDictIndex.sizeOf() + t.stringIndex.sizeOf() + t.globalSubrIndex.sizeOf();
  return s.charset = p, s.encoding = 0, s.charStrings = s.charset + t.charsets.sizeOf(), s.private[1] = s.charStrings + t.charStringsIndex.sizeOf(), c = i5(s, u), t.topDictIndex = o5(c), t;
}
var C6 = { parse: B8, make: J8 };
function Z8(r, e) {
  var t = {}, n = new G.Parser(r, e);
  return t.version = n.parseVersion(), t.fontRevision = Math.round(n.parseFixed() * 1e3) / 1e3, t.checkSumAdjustment = n.parseULong(), t.magicNumber = n.parseULong(), z.argument(t.magicNumber === 1594834165, "Font header has wrong magic number."), t.flags = n.parseUShort(), t.unitsPerEm = n.parseUShort(), t.created = n.parseLongDateTime(), t.modified = n.parseLongDateTime(), t.xMin = n.parseShort(), t.yMin = n.parseShort(), t.xMax = n.parseShort(), t.yMax = n.parseShort(), t.macStyle = n.parseUShort(), t.lowestRecPPEM = n.parseUShort(), t.fontDirectionHint = n.parseShort(), t.indexToLocFormat = n.parseShort(), t.glyphDataFormat = n.parseShort(), t;
}
function q8(r) {
  var e = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3) + 2082844800, t = e;
  return r.createdTimestamp && (t = r.createdTimestamp + 2082844800), new _.Table("head", [
    { name: "version", type: "FIXED", value: 65536 },
    { name: "fontRevision", type: "FIXED", value: 65536 },
    { name: "checkSumAdjustment", type: "ULONG", value: 0 },
    { name: "magicNumber", type: "ULONG", value: 1594834165 },
    { name: "flags", type: "USHORT", value: 0 },
    { name: "unitsPerEm", type: "USHORT", value: 1e3 },
    { name: "created", type: "LONGDATETIME", value: t },
    { name: "modified", type: "LONGDATETIME", value: e },
    { name: "xMin", type: "SHORT", value: 0 },
    { name: "yMin", type: "SHORT", value: 0 },
    { name: "xMax", type: "SHORT", value: 0 },
    { name: "yMax", type: "SHORT", value: 0 },
    { name: "macStyle", type: "USHORT", value: 0 },
    { name: "lowestRecPPEM", type: "USHORT", value: 0 },
    { name: "fontDirectionHint", type: "SHORT", value: 2 },
    { name: "indexToLocFormat", type: "SHORT", value: 0 },
    { name: "glyphDataFormat", type: "SHORT", value: 0 }
  ], r);
}
var k6 = { parse: Z8, make: q8 };
function Q8(r, e) {
  var t = {}, n = new G.Parser(r, e);
  return t.version = n.parseVersion(), t.ascender = n.parseShort(), t.descender = n.parseShort(), t.lineGap = n.parseShort(), t.advanceWidthMax = n.parseUShort(), t.minLeftSideBearing = n.parseShort(), t.minRightSideBearing = n.parseShort(), t.xMaxExtent = n.parseShort(), t.caretSlopeRise = n.parseShort(), t.caretSlopeRun = n.parseShort(), t.caretOffset = n.parseShort(), n.relativeOffset += 8, t.metricDataFormat = n.parseShort(), t.numberOfHMetrics = n.parseUShort(), t;
}
function K8(r) {
  return new _.Table("hhea", [
    { name: "version", type: "FIXED", value: 65536 },
    { name: "ascender", type: "FWORD", value: 0 },
    { name: "descender", type: "FWORD", value: 0 },
    { name: "lineGap", type: "FWORD", value: 0 },
    { name: "advanceWidthMax", type: "UFWORD", value: 0 },
    { name: "minLeftSideBearing", type: "FWORD", value: 0 },
    { name: "minRightSideBearing", type: "FWORD", value: 0 },
    { name: "xMaxExtent", type: "FWORD", value: 0 },
    { name: "caretSlopeRise", type: "SHORT", value: 1 },
    { name: "caretSlopeRun", type: "SHORT", value: 0 },
    { name: "caretOffset", type: "SHORT", value: 0 },
    { name: "reserved1", type: "SHORT", value: 0 },
    { name: "reserved2", type: "SHORT", value: 0 },
    { name: "reserved3", type: "SHORT", value: 0 },
    { name: "reserved4", type: "SHORT", value: 0 },
    { name: "metricDataFormat", type: "SHORT", value: 0 },
    { name: "numberOfHMetrics", type: "USHORT", value: 0 }
  ], r);
}
var P6 = { parse: Q8, make: K8 };
function j8(r, e, t, n, s) {
  for (var a, i, o = new G.Parser(r, e), l = 0; l < n; l += 1) {
    l < t && (a = o.parseUShort(), i = o.parseShort());
    var u = s.get(l);
    u.advanceWidth = a, u.leftSideBearing = i;
  }
}
function $8(r, e, t, n, s) {
  r._hmtxTableData = {};
  for (var a, i, o = new G.Parser(e, t), l = 0; l < s; l += 1)
    l < n && (a = o.parseUShort(), i = o.parseShort()), r._hmtxTableData[l] = {
      advanceWidth: a,
      leftSideBearing: i
    };
}
function e7(r, e, t, n, s, a, i) {
  i.lowMemory ? $8(r, e, t, n, s) : j8(e, t, n, s, a);
}
function t7(r) {
  for (var e = new _.Table("hmtx", []), t = 0; t < r.length; t += 1) {
    var n = r.get(t), s = n.advanceWidth || 0, a = n.leftSideBearing || 0;
    e.fields.push({ name: "advanceWidth_" + t, type: "USHORT", value: s }), e.fields.push({ name: "leftSideBearing_" + t, type: "SHORT", value: a });
  }
  return e;
}
var w6 = { parse: e7, make: t7 };
function r7(r) {
  for (var e = new _.Table("ltag", [
    { name: "version", type: "ULONG", value: 1 },
    { name: "flags", type: "ULONG", value: 0 },
    { name: "numTags", type: "ULONG", value: r.length }
  ]), t = "", n = 12 + r.length * 4, s = 0; s < r.length; ++s) {
    var a = t.indexOf(r[s]);
    a < 0 && (a = t.length, t += r[s]), e.fields.push({ name: "offset " + s, type: "USHORT", value: n + a }), e.fields.push({ name: "length " + s, type: "USHORT", value: r[s].length });
  }
  return e.fields.push({ name: "stringPool", type: "CHARARRAY", value: t }), e;
}
function n7(r, e) {
  var t = new G.Parser(r, e), n = t.parseULong();
  z.argument(n === 1, "Unsupported ltag table version."), t.skip("uLong", 1);
  for (var s = t.parseULong(), a = [], i = 0; i < s; i++) {
    for (var o = "", l = e + t.parseUShort(), u = t.parseUShort(), c = l; c < l + u; ++c)
      o += String.fromCharCode(r.getInt8(c));
    a.push(o);
  }
  return a;
}
var F6 = { make: r7, parse: n7 };
function s7(r, e) {
  var t = {}, n = new G.Parser(r, e);
  return t.version = n.parseVersion(), t.numGlyphs = n.parseUShort(), t.version === 1 && (t.maxPoints = n.parseUShort(), t.maxContours = n.parseUShort(), t.maxCompositePoints = n.parseUShort(), t.maxCompositeContours = n.parseUShort(), t.maxZones = n.parseUShort(), t.maxTwilightPoints = n.parseUShort(), t.maxStorage = n.parseUShort(), t.maxFunctionDefs = n.parseUShort(), t.maxInstructionDefs = n.parseUShort(), t.maxStackElements = n.parseUShort(), t.maxSizeOfInstructions = n.parseUShort(), t.maxComponentElements = n.parseUShort(), t.maxComponentDepth = n.parseUShort()), t;
}
function a7(r) {
  return new _.Table("maxp", [
    { name: "version", type: "FIXED", value: 20480 },
    { name: "numGlyphs", type: "USHORT", value: r }
  ]);
}
var L6 = { parse: s7, make: a7 }, D6 = [
  "copyright",
  // 0
  "fontFamily",
  // 1
  "fontSubfamily",
  // 2
  "uniqueID",
  // 3
  "fullName",
  // 4
  "version",
  // 5
  "postScriptName",
  // 6
  "trademark",
  // 7
  "manufacturer",
  // 8
  "designer",
  // 9
  "description",
  // 10
  "manufacturerURL",
  // 11
  "designerURL",
  // 12
  "license",
  // 13
  "licenseURL",
  // 14
  "reserved",
  // 15
  "preferredFamily",
  // 16
  "preferredSubfamily",
  // 17
  "compatibleFullName",
  // 18
  "sampleText",
  // 19
  "postScriptFindFontName",
  // 20
  "wwsFamily",
  // 21
  "wwsSubfamily"
  // 22
], O6 = {
  0: "en",
  1: "fr",
  2: "de",
  3: "it",
  4: "nl",
  5: "sv",
  6: "es",
  7: "da",
  8: "pt",
  9: "no",
  10: "he",
  11: "ja",
  12: "ar",
  13: "fi",
  14: "el",
  15: "is",
  16: "mt",
  17: "tr",
  18: "hr",
  19: "zh-Hant",
  20: "ur",
  21: "hi",
  22: "th",
  23: "ko",
  24: "lt",
  25: "pl",
  26: "hu",
  27: "es",
  28: "lv",
  29: "se",
  30: "fo",
  31: "fa",
  32: "ru",
  33: "zh",
  34: "nl-BE",
  35: "ga",
  36: "sq",
  37: "ro",
  38: "cz",
  39: "sk",
  40: "si",
  41: "yi",
  42: "sr",
  43: "mk",
  44: "bg",
  45: "uk",
  46: "be",
  47: "uz",
  48: "kk",
  49: "az-Cyrl",
  50: "az-Arab",
  51: "hy",
  52: "ka",
  53: "mo",
  54: "ky",
  55: "tg",
  56: "tk",
  57: "mn-CN",
  58: "mn",
  59: "ps",
  60: "ks",
  61: "ku",
  62: "sd",
  63: "bo",
  64: "ne",
  65: "sa",
  66: "mr",
  67: "bn",
  68: "as",
  69: "gu",
  70: "pa",
  71: "or",
  72: "ml",
  73: "kn",
  74: "ta",
  75: "te",
  76: "si",
  77: "my",
  78: "km",
  79: "lo",
  80: "vi",
  81: "id",
  82: "tl",
  83: "ms",
  84: "ms-Arab",
  85: "am",
  86: "ti",
  87: "om",
  88: "so",
  89: "sw",
  90: "rw",
  91: "rn",
  92: "ny",
  93: "mg",
  94: "eo",
  128: "cy",
  129: "eu",
  130: "ca",
  131: "la",
  132: "qu",
  133: "gn",
  134: "ay",
  135: "tt",
  136: "ug",
  137: "dz",
  138: "jv",
  139: "su",
  140: "gl",
  141: "af",
  142: "br",
  143: "iu",
  144: "gd",
  145: "gv",
  146: "ga",
  147: "to",
  148: "el-polyton",
  149: "kl",
  150: "az",
  151: "nn"
}, i7 = {
  0: 0,
  // langEnglish → smRoman
  1: 0,
  // langFrench → smRoman
  2: 0,
  // langGerman → smRoman
  3: 0,
  // langItalian → smRoman
  4: 0,
  // langDutch → smRoman
  5: 0,
  // langSwedish → smRoman
  6: 0,
  // langSpanish → smRoman
  7: 0,
  // langDanish → smRoman
  8: 0,
  // langPortuguese → smRoman
  9: 0,
  // langNorwegian → smRoman
  10: 5,
  // langHebrew → smHebrew
  11: 1,
  // langJapanese → smJapanese
  12: 4,
  // langArabic → smArabic
  13: 0,
  // langFinnish → smRoman
  14: 6,
  // langGreek → smGreek
  15: 0,
  // langIcelandic → smRoman (modified)
  16: 0,
  // langMaltese → smRoman
  17: 0,
  // langTurkish → smRoman (modified)
  18: 0,
  // langCroatian → smRoman (modified)
  19: 2,
  // langTradChinese → smTradChinese
  20: 4,
  // langUrdu → smArabic
  21: 9,
  // langHindi → smDevanagari
  22: 21,
  // langThai → smThai
  23: 3,
  // langKorean → smKorean
  24: 29,
  // langLithuanian → smCentralEuroRoman
  25: 29,
  // langPolish → smCentralEuroRoman
  26: 29,
  // langHungarian → smCentralEuroRoman
  27: 29,
  // langEstonian → smCentralEuroRoman
  28: 29,
  // langLatvian → smCentralEuroRoman
  29: 0,
  // langSami → smRoman
  30: 0,
  // langFaroese → smRoman (modified)
  31: 4,
  // langFarsi → smArabic (modified)
  32: 7,
  // langRussian → smCyrillic
  33: 25,
  // langSimpChinese → smSimpChinese
  34: 0,
  // langFlemish → smRoman
  35: 0,
  // langIrishGaelic → smRoman (modified)
  36: 0,
  // langAlbanian → smRoman
  37: 0,
  // langRomanian → smRoman (modified)
  38: 29,
  // langCzech → smCentralEuroRoman
  39: 29,
  // langSlovak → smCentralEuroRoman
  40: 0,
  // langSlovenian → smRoman (modified)
  41: 5,
  // langYiddish → smHebrew
  42: 7,
  // langSerbian → smCyrillic
  43: 7,
  // langMacedonian → smCyrillic
  44: 7,
  // langBulgarian → smCyrillic
  45: 7,
  // langUkrainian → smCyrillic (modified)
  46: 7,
  // langByelorussian → smCyrillic
  47: 7,
  // langUzbek → smCyrillic
  48: 7,
  // langKazakh → smCyrillic
  49: 7,
  // langAzerbaijani → smCyrillic
  50: 4,
  // langAzerbaijanAr → smArabic
  51: 24,
  // langArmenian → smArmenian
  52: 23,
  // langGeorgian → smGeorgian
  53: 7,
  // langMoldavian → smCyrillic
  54: 7,
  // langKirghiz → smCyrillic
  55: 7,
  // langTajiki → smCyrillic
  56: 7,
  // langTurkmen → smCyrillic
  57: 27,
  // langMongolian → smMongolian
  58: 7,
  // langMongolianCyr → smCyrillic
  59: 4,
  // langPashto → smArabic
  60: 4,
  // langKurdish → smArabic
  61: 4,
  // langKashmiri → smArabic
  62: 4,
  // langSindhi → smArabic
  63: 26,
  // langTibetan → smTibetan
  64: 9,
  // langNepali → smDevanagari
  65: 9,
  // langSanskrit → smDevanagari
  66: 9,
  // langMarathi → smDevanagari
  67: 13,
  // langBengali → smBengali
  68: 13,
  // langAssamese → smBengali
  69: 11,
  // langGujarati → smGujarati
  70: 10,
  // langPunjabi → smGurmukhi
  71: 12,
  // langOriya → smOriya
  72: 17,
  // langMalayalam → smMalayalam
  73: 16,
  // langKannada → smKannada
  74: 14,
  // langTamil → smTamil
  75: 15,
  // langTelugu → smTelugu
  76: 18,
  // langSinhalese → smSinhalese
  77: 19,
  // langBurmese → smBurmese
  78: 20,
  // langKhmer → smKhmer
  79: 22,
  // langLao → smLao
  80: 30,
  // langVietnamese → smVietnamese
  81: 0,
  // langIndonesian → smRoman
  82: 0,
  // langTagalog → smRoman
  83: 0,
  // langMalayRoman → smRoman
  84: 4,
  // langMalayArabic → smArabic
  85: 28,
  // langAmharic → smEthiopic
  86: 28,
  // langTigrinya → smEthiopic
  87: 28,
  // langOromo → smEthiopic
  88: 0,
  // langSomali → smRoman
  89: 0,
  // langSwahili → smRoman
  90: 0,
  // langKinyarwanda → smRoman
  91: 0,
  // langRundi → smRoman
  92: 0,
  // langNyanja → smRoman
  93: 0,
  // langMalagasy → smRoman
  94: 0,
  // langEsperanto → smRoman
  128: 0,
  // langWelsh → smRoman (modified)
  129: 0,
  // langBasque → smRoman
  130: 0,
  // langCatalan → smRoman
  131: 0,
  // langLatin → smRoman
  132: 0,
  // langQuechua → smRoman
  133: 0,
  // langGuarani → smRoman
  134: 0,
  // langAymara → smRoman
  135: 7,
  // langTatar → smCyrillic
  136: 4,
  // langUighur → smArabic
  137: 26,
  // langDzongkha → smTibetan
  138: 0,
  // langJavaneseRom → smRoman
  139: 0,
  // langSundaneseRom → smRoman
  140: 0,
  // langGalician → smRoman
  141: 0,
  // langAfrikaans → smRoman
  142: 0,
  // langBreton → smRoman (modified)
  143: 28,
  // langInuktitut → smEthiopic (modified)
  144: 0,
  // langScottishGaelic → smRoman (modified)
  145: 0,
  // langManxGaelic → smRoman (modified)
  146: 0,
  // langIrishGaelicScript → smRoman (modified)
  147: 0,
  // langTongan → smRoman
  148: 6,
  // langGreekAncient → smRoman
  149: 0,
  // langGreenlandic → smRoman
  150: 0,
  // langAzerbaijanRoman → smRoman
  151: 0
  // langNynorsk → smRoman
}, I6 = {
  1078: "af",
  1052: "sq",
  1156: "gsw",
  1118: "am",
  5121: "ar-DZ",
  15361: "ar-BH",
  3073: "ar",
  2049: "ar-IQ",
  11265: "ar-JO",
  13313: "ar-KW",
  12289: "ar-LB",
  4097: "ar-LY",
  6145: "ary",
  8193: "ar-OM",
  16385: "ar-QA",
  1025: "ar-SA",
  10241: "ar-SY",
  7169: "aeb",
  14337: "ar-AE",
  9217: "ar-YE",
  1067: "hy",
  1101: "as",
  2092: "az-Cyrl",
  1068: "az",
  1133: "ba",
  1069: "eu",
  1059: "be",
  2117: "bn",
  1093: "bn-IN",
  8218: "bs-Cyrl",
  5146: "bs",
  1150: "br",
  1026: "bg",
  1027: "ca",
  3076: "zh-HK",
  5124: "zh-MO",
  2052: "zh",
  4100: "zh-SG",
  1028: "zh-TW",
  1155: "co",
  1050: "hr",
  4122: "hr-BA",
  1029: "cs",
  1030: "da",
  1164: "prs",
  1125: "dv",
  2067: "nl-BE",
  1043: "nl",
  3081: "en-AU",
  10249: "en-BZ",
  4105: "en-CA",
  9225: "en-029",
  16393: "en-IN",
  6153: "en-IE",
  8201: "en-JM",
  17417: "en-MY",
  5129: "en-NZ",
  13321: "en-PH",
  18441: "en-SG",
  7177: "en-ZA",
  11273: "en-TT",
  2057: "en-GB",
  1033: "en",
  12297: "en-ZW",
  1061: "et",
  1080: "fo",
  1124: "fil",
  1035: "fi",
  2060: "fr-BE",
  3084: "fr-CA",
  1036: "fr",
  5132: "fr-LU",
  6156: "fr-MC",
  4108: "fr-CH",
  1122: "fy",
  1110: "gl",
  1079: "ka",
  3079: "de-AT",
  1031: "de",
  5127: "de-LI",
  4103: "de-LU",
  2055: "de-CH",
  1032: "el",
  1135: "kl",
  1095: "gu",
  1128: "ha",
  1037: "he",
  1081: "hi",
  1038: "hu",
  1039: "is",
  1136: "ig",
  1057: "id",
  1117: "iu",
  2141: "iu-Latn",
  2108: "ga",
  1076: "xh",
  1077: "zu",
  1040: "it",
  2064: "it-CH",
  1041: "ja",
  1099: "kn",
  1087: "kk",
  1107: "km",
  1158: "quc",
  1159: "rw",
  1089: "sw",
  1111: "kok",
  1042: "ko",
  1088: "ky",
  1108: "lo",
  1062: "lv",
  1063: "lt",
  2094: "dsb",
  1134: "lb",
  1071: "mk",
  2110: "ms-BN",
  1086: "ms",
  1100: "ml",
  1082: "mt",
  1153: "mi",
  1146: "arn",
  1102: "mr",
  1148: "moh",
  1104: "mn",
  2128: "mn-CN",
  1121: "ne",
  1044: "nb",
  2068: "nn",
  1154: "oc",
  1096: "or",
  1123: "ps",
  1045: "pl",
  1046: "pt",
  2070: "pt-PT",
  1094: "pa",
  1131: "qu-BO",
  2155: "qu-EC",
  3179: "qu",
  1048: "ro",
  1047: "rm",
  1049: "ru",
  9275: "smn",
  4155: "smj-NO",
  5179: "smj",
  3131: "se-FI",
  1083: "se",
  2107: "se-SE",
  8251: "sms",
  6203: "sma-NO",
  7227: "sms",
  1103: "sa",
  7194: "sr-Cyrl-BA",
  3098: "sr",
  6170: "sr-Latn-BA",
  2074: "sr-Latn",
  1132: "nso",
  1074: "tn",
  1115: "si",
  1051: "sk",
  1060: "sl",
  11274: "es-AR",
  16394: "es-BO",
  13322: "es-CL",
  9226: "es-CO",
  5130: "es-CR",
  7178: "es-DO",
  12298: "es-EC",
  17418: "es-SV",
  4106: "es-GT",
  18442: "es-HN",
  2058: "es-MX",
  19466: "es-NI",
  6154: "es-PA",
  15370: "es-PY",
  10250: "es-PE",
  20490: "es-PR",
  // Microsoft has defined two different language codes for
  // “Spanish with modern sorting” and “Spanish with traditional
  // sorting”. This makes sense for collation APIs, and it would be
  // possible to express this in BCP 47 language tags via Unicode
  // extensions (eg., es-u-co-trad is Spanish with traditional
  // sorting). However, for storing names in fonts, the distinction
  // does not make sense, so we give “es” in both cases.
  3082: "es",
  1034: "es",
  21514: "es-US",
  14346: "es-UY",
  8202: "es-VE",
  2077: "sv-FI",
  1053: "sv",
  1114: "syr",
  1064: "tg",
  2143: "tzm",
  1097: "ta",
  1092: "tt",
  1098: "te",
  1054: "th",
  1105: "bo",
  1055: "tr",
  1090: "tk",
  1152: "ug",
  1058: "uk",
  1070: "hsb",
  1056: "ur",
  2115: "uz-Cyrl",
  1091: "uz",
  1066: "vi",
  1106: "cy",
  1160: "wo",
  1157: "sah",
  1144: "ii",
  1130: "yo"
};
function o7(r, e, t) {
  switch (r) {
    case 0:
      if (e === 65535)
        return "und";
      if (t)
        return t[e];
      break;
    case 1:
      return O6[e];
    case 3:
      return I6[e];
  }
}
var O4 = "utf-16", l7 = {
  0: "macintosh",
  // smRoman
  1: "x-mac-japanese",
  // smJapanese
  2: "x-mac-chinesetrad",
  // smTradChinese
  3: "x-mac-korean",
  // smKorean
  6: "x-mac-greek",
  // smGreek
  7: "x-mac-cyrillic",
  // smCyrillic
  9: "x-mac-devanagai",
  // smDevanagari
  10: "x-mac-gurmukhi",
  // smGurmukhi
  11: "x-mac-gujarati",
  // smGujarati
  12: "x-mac-oriya",
  // smOriya
  13: "x-mac-bengali",
  // smBengali
  14: "x-mac-tamil",
  // smTamil
  15: "x-mac-telugu",
  // smTelugu
  16: "x-mac-kannada",
  // smKannada
  17: "x-mac-malayalam",
  // smMalayalam
  18: "x-mac-sinhalese",
  // smSinhalese
  19: "x-mac-burmese",
  // smBurmese
  20: "x-mac-khmer",
  // smKhmer
  21: "x-mac-thai",
  // smThai
  22: "x-mac-lao",
  // smLao
  23: "x-mac-georgian",
  // smGeorgian
  24: "x-mac-armenian",
  // smArmenian
  25: "x-mac-chinesesimp",
  // smSimpChinese
  26: "x-mac-tibetan",
  // smTibetan
  27: "x-mac-mongolian",
  // smMongolian
  28: "x-mac-ethiopic",
  // smEthiopic
  29: "x-mac-ce",
  // smCentralEuroRoman
  30: "x-mac-vietnamese",
  // smVietnamese
  31: "x-mac-extarabic"
  // smExtArabic
}, h7 = {
  15: "x-mac-icelandic",
  // langIcelandic
  17: "x-mac-turkish",
  // langTurkish
  18: "x-mac-croatian",
  // langCroatian
  24: "x-mac-ce",
  // langLithuanian
  25: "x-mac-ce",
  // langPolish
  26: "x-mac-ce",
  // langHungarian
  27: "x-mac-ce",
  // langEstonian
  28: "x-mac-ce",
  // langLatvian
  30: "x-mac-icelandic",
  // langFaroese
  37: "x-mac-romanian",
  // langRomanian
  38: "x-mac-ce",
  // langCzech
  39: "x-mac-ce",
  // langSlovak
  40: "x-mac-ce",
  // langSlovenian
  143: "x-mac-inuit",
  // langInuktitut
  146: "x-mac-gaelic"
  // langIrishGaelicScript
};
function R6(r, e, t) {
  switch (r) {
    case 0:
      return O4;
    case 1:
      return h7[t] || l7[e];
    case 3:
      if (e === 1 || e === 10)
        return O4;
      break;
  }
}
function u7(r, e, t) {
  for (var n = {}, s = new G.Parser(r, e), a = s.parseUShort(), i = s.parseUShort(), o = s.offset + s.parseUShort(), l = 0; l < i; l++) {
    var u = s.parseUShort(), c = s.parseUShort(), p = s.parseUShort(), f = s.parseUShort(), d = D6[f] || f, v = s.parseUShort(), y = s.parseUShort(), m = o7(u, p, t), g = R6(u, c, p);
    if (g !== void 0 && m !== void 0) {
      var C = void 0;
      if (g === O4 ? C = N1.UTF16(r, o + y, v) : C = N1.MACSTRING(r, o + y, v, g), C) {
        var S = n[d];
        S === void 0 && (S = n[d] = {}), S[m] = C;
      }
    }
  }
  return a === 1 && s.parseUShort(), n;
}
function h4(r) {
  var e = {};
  for (var t in r)
    e[r[t]] = parseInt(t);
  return e;
}
function l5(r, e, t, n, s, a) {
  return new _.Record("NameRecord", [
    { name: "platformID", type: "USHORT", value: r },
    { name: "encodingID", type: "USHORT", value: e },
    { name: "languageID", type: "USHORT", value: t },
    { name: "nameID", type: "USHORT", value: n },
    { name: "length", type: "USHORT", value: s },
    { name: "offset", type: "USHORT", value: a }
  ]);
}
function c7(r, e) {
  var t = r.length, n = e.length - t + 1;
  e:
    for (var s = 0; s < n; s++)
      for (; s < n; s++) {
        for (var a = 0; a < t; a++)
          if (e[s + a] !== r[a])
            continue e;
        return s;
      }
  return -1;
}
function h5(r, e) {
  var t = c7(r, e);
  if (t < 0) {
    t = e.length;
    for (var n = 0, s = r.length; n < s; ++n)
      e.push(r[n]);
  }
  return t;
}
function f7(r, e) {
  var t, n = [], s = {}, a = h4(D6);
  for (var i in r) {
    var o = a[i];
    if (o === void 0 && (o = i), t = parseInt(o), isNaN(t))
      throw new Error('Name table entry "' + i + '" does not exist, see nameTableNames for complete list.');
    s[t] = r[i], n.push(t);
  }
  for (var l = h4(O6), u = h4(I6), c = [], p = [], f = 0; f < n.length; f++) {
    t = n[f];
    var d = s[t];
    for (var v in d) {
      var y = d[v], m = 1, g = l[v], C = i7[g], S = R6(m, C, g), E = R.MACSTRING(y, S);
      E === void 0 && (m = 0, g = e.indexOf(v), g < 0 && (g = e.length, e.push(v)), C = 4, E = R.UTF16(y));
      var w = h5(E, p);
      c.push(l5(
        m,
        C,
        g,
        t,
        E.length,
        w
      ));
      var L = u[v];
      if (L !== void 0) {
        var F = R.UTF16(y), A = h5(F, p);
        c.push(l5(
          3,
          1,
          L,
          t,
          F.length,
          A
        ));
      }
    }
  }
  c.sort(function(M, H) {
    return M.platformID - H.platformID || M.encodingID - H.encodingID || M.languageID - H.languageID || M.nameID - H.nameID;
  });
  for (var k = new _.Table("name", [
    { name: "format", type: "USHORT", value: 0 },
    { name: "count", type: "USHORT", value: c.length },
    { name: "stringOffset", type: "USHORT", value: 6 + c.length * 12 }
  ]), O = 0; O < c.length; O++)
    k.fields.push({ name: "record_" + O, type: "RECORD", value: c[O] });
  return k.fields.push({ name: "strings", type: "LITERAL", value: p }), k;
}
var M6 = { parse: u7, make: f7 }, I4 = [
  { begin: 0, end: 127 },
  // Basic Latin
  { begin: 128, end: 255 },
  // Latin-1 Supplement
  { begin: 256, end: 383 },
  // Latin Extended-A
  { begin: 384, end: 591 },
  // Latin Extended-B
  { begin: 592, end: 687 },
  // IPA Extensions
  { begin: 688, end: 767 },
  // Spacing Modifier Letters
  { begin: 768, end: 879 },
  // Combining Diacritical Marks
  { begin: 880, end: 1023 },
  // Greek and Coptic
  { begin: 11392, end: 11519 },
  // Coptic
  { begin: 1024, end: 1279 },
  // Cyrillic
  { begin: 1328, end: 1423 },
  // Armenian
  { begin: 1424, end: 1535 },
  // Hebrew
  { begin: 42240, end: 42559 },
  // Vai
  { begin: 1536, end: 1791 },
  // Arabic
  { begin: 1984, end: 2047 },
  // NKo
  { begin: 2304, end: 2431 },
  // Devanagari
  { begin: 2432, end: 2559 },
  // Bengali
  { begin: 2560, end: 2687 },
  // Gurmukhi
  { begin: 2688, end: 2815 },
  // Gujarati
  { begin: 2816, end: 2943 },
  // Oriya
  { begin: 2944, end: 3071 },
  // Tamil
  { begin: 3072, end: 3199 },
  // Telugu
  { begin: 3200, end: 3327 },
  // Kannada
  { begin: 3328, end: 3455 },
  // Malayalam
  { begin: 3584, end: 3711 },
  // Thai
  { begin: 3712, end: 3839 },
  // Lao
  { begin: 4256, end: 4351 },
  // Georgian
  { begin: 6912, end: 7039 },
  // Balinese
  { begin: 4352, end: 4607 },
  // Hangul Jamo
  { begin: 7680, end: 7935 },
  // Latin Extended Additional
  { begin: 7936, end: 8191 },
  // Greek Extended
  { begin: 8192, end: 8303 },
  // General Punctuation
  { begin: 8304, end: 8351 },
  // Superscripts And Subscripts
  { begin: 8352, end: 8399 },
  // Currency Symbol
  { begin: 8400, end: 8447 },
  // Combining Diacritical Marks For Symbols
  { begin: 8448, end: 8527 },
  // Letterlike Symbols
  { begin: 8528, end: 8591 },
  // Number Forms
  { begin: 8592, end: 8703 },
  // Arrows
  { begin: 8704, end: 8959 },
  // Mathematical Operators
  { begin: 8960, end: 9215 },
  // Miscellaneous Technical
  { begin: 9216, end: 9279 },
  // Control Pictures
  { begin: 9280, end: 9311 },
  // Optical Character Recognition
  { begin: 9312, end: 9471 },
  // Enclosed Alphanumerics
  { begin: 9472, end: 9599 },
  // Box Drawing
  { begin: 9600, end: 9631 },
  // Block Elements
  { begin: 9632, end: 9727 },
  // Geometric Shapes
  { begin: 9728, end: 9983 },
  // Miscellaneous Symbols
  { begin: 9984, end: 10175 },
  // Dingbats
  { begin: 12288, end: 12351 },
  // CJK Symbols And Punctuation
  { begin: 12352, end: 12447 },
  // Hiragana
  { begin: 12448, end: 12543 },
  // Katakana
  { begin: 12544, end: 12591 },
  // Bopomofo
  { begin: 12592, end: 12687 },
  // Hangul Compatibility Jamo
  { begin: 43072, end: 43135 },
  // Phags-pa
  { begin: 12800, end: 13055 },
  // Enclosed CJK Letters And Months
  { begin: 13056, end: 13311 },
  // CJK Compatibility
  { begin: 44032, end: 55215 },
  // Hangul Syllables
  { begin: 55296, end: 57343 },
  // Non-Plane 0 *
  { begin: 67840, end: 67871 },
  // Phoenicia
  { begin: 19968, end: 40959 },
  // CJK Unified Ideographs
  { begin: 57344, end: 63743 },
  // Private Use Area (plane 0)
  { begin: 12736, end: 12783 },
  // CJK Strokes
  { begin: 64256, end: 64335 },
  // Alphabetic Presentation Forms
  { begin: 64336, end: 65023 },
  // Arabic Presentation Forms-A
  { begin: 65056, end: 65071 },
  // Combining Half Marks
  { begin: 65040, end: 65055 },
  // Vertical Forms
  { begin: 65104, end: 65135 },
  // Small Form Variants
  { begin: 65136, end: 65279 },
  // Arabic Presentation Forms-B
  { begin: 65280, end: 65519 },
  // Halfwidth And Fullwidth Forms
  { begin: 65520, end: 65535 },
  // Specials
  { begin: 3840, end: 4095 },
  // Tibetan
  { begin: 1792, end: 1871 },
  // Syriac
  { begin: 1920, end: 1983 },
  // Thaana
  { begin: 3456, end: 3583 },
  // Sinhala
  { begin: 4096, end: 4255 },
  // Myanmar
  { begin: 4608, end: 4991 },
  // Ethiopic
  { begin: 5024, end: 5119 },
  // Cherokee
  { begin: 5120, end: 5759 },
  // Unified Canadian Aboriginal Syllabics
  { begin: 5760, end: 5791 },
  // Ogham
  { begin: 5792, end: 5887 },
  // Runic
  { begin: 6016, end: 6143 },
  // Khmer
  { begin: 6144, end: 6319 },
  // Mongolian
  { begin: 10240, end: 10495 },
  // Braille Patterns
  { begin: 40960, end: 42127 },
  // Yi Syllables
  { begin: 5888, end: 5919 },
  // Tagalog
  { begin: 66304, end: 66351 },
  // Old Italic
  { begin: 66352, end: 66383 },
  // Gothic
  { begin: 66560, end: 66639 },
  // Deseret
  { begin: 118784, end: 119039 },
  // Byzantine Musical Symbols
  { begin: 119808, end: 120831 },
  // Mathematical Alphanumeric Symbols
  { begin: 1044480, end: 1048573 },
  // Private Use (plane 15)
  { begin: 65024, end: 65039 },
  // Variation Selectors
  { begin: 917504, end: 917631 },
  // Tags
  { begin: 6400, end: 6479 },
  // Limbu
  { begin: 6480, end: 6527 },
  // Tai Le
  { begin: 6528, end: 6623 },
  // New Tai Lue
  { begin: 6656, end: 6687 },
  // Buginese
  { begin: 11264, end: 11359 },
  // Glagolitic
  { begin: 11568, end: 11647 },
  // Tifinagh
  { begin: 19904, end: 19967 },
  // Yijing Hexagram Symbols
  { begin: 43008, end: 43055 },
  // Syloti Nagri
  { begin: 65536, end: 65663 },
  // Linear B Syllabary
  { begin: 65856, end: 65935 },
  // Ancient Greek Numbers
  { begin: 66432, end: 66463 },
  // Ugaritic
  { begin: 66464, end: 66527 },
  // Old Persian
  { begin: 66640, end: 66687 },
  // Shavian
  { begin: 66688, end: 66735 },
  // Osmanya
  { begin: 67584, end: 67647 },
  // Cypriot Syllabary
  { begin: 68096, end: 68191 },
  // Kharoshthi
  { begin: 119552, end: 119647 },
  // Tai Xuan Jing Symbols
  { begin: 73728, end: 74751 },
  // Cuneiform
  { begin: 119648, end: 119679 },
  // Counting Rod Numerals
  { begin: 7040, end: 7103 },
  // Sundanese
  { begin: 7168, end: 7247 },
  // Lepcha
  { begin: 7248, end: 7295 },
  // Ol Chiki
  { begin: 43136, end: 43231 },
  // Saurashtra
  { begin: 43264, end: 43311 },
  // Kayah Li
  { begin: 43312, end: 43359 },
  // Rejang
  { begin: 43520, end: 43615 },
  // Cham
  { begin: 65936, end: 65999 },
  // Ancient Symbols
  { begin: 66e3, end: 66047 },
  // Phaistos Disc
  { begin: 66208, end: 66271 },
  // Carian
  { begin: 127024, end: 127135 }
  // Domino Tiles
];
function p7(r) {
  for (var e = 0; e < I4.length; e += 1) {
    var t = I4[e];
    if (r >= t.begin && r < t.end)
      return e;
  }
  return -1;
}
function d7(r, e) {
  var t = {}, n = new G.Parser(r, e);
  t.version = n.parseUShort(), t.xAvgCharWidth = n.parseShort(), t.usWeightClass = n.parseUShort(), t.usWidthClass = n.parseUShort(), t.fsType = n.parseUShort(), t.ySubscriptXSize = n.parseShort(), t.ySubscriptYSize = n.parseShort(), t.ySubscriptXOffset = n.parseShort(), t.ySubscriptYOffset = n.parseShort(), t.ySuperscriptXSize = n.parseShort(), t.ySuperscriptYSize = n.parseShort(), t.ySuperscriptXOffset = n.parseShort(), t.ySuperscriptYOffset = n.parseShort(), t.yStrikeoutSize = n.parseShort(), t.yStrikeoutPosition = n.parseShort(), t.sFamilyClass = n.parseShort(), t.panose = [];
  for (var s = 0; s < 10; s++)
    t.panose[s] = n.parseByte();
  return t.ulUnicodeRange1 = n.parseULong(), t.ulUnicodeRange2 = n.parseULong(), t.ulUnicodeRange3 = n.parseULong(), t.ulUnicodeRange4 = n.parseULong(), t.achVendID = String.fromCharCode(n.parseByte(), n.parseByte(), n.parseByte(), n.parseByte()), t.fsSelection = n.parseUShort(), t.usFirstCharIndex = n.parseUShort(), t.usLastCharIndex = n.parseUShort(), t.sTypoAscender = n.parseShort(), t.sTypoDescender = n.parseShort(), t.sTypoLineGap = n.parseShort(), t.usWinAscent = n.parseUShort(), t.usWinDescent = n.parseUShort(), t.version >= 1 && (t.ulCodePageRange1 = n.parseULong(), t.ulCodePageRange2 = n.parseULong()), t.version >= 2 && (t.sxHeight = n.parseShort(), t.sCapHeight = n.parseShort(), t.usDefaultChar = n.parseUShort(), t.usBreakChar = n.parseUShort(), t.usMaxContent = n.parseUShort()), t;
}
function v7(r) {
  return new _.Table("OS/2", [
    { name: "version", type: "USHORT", value: 3 },
    { name: "xAvgCharWidth", type: "SHORT", value: 0 },
    { name: "usWeightClass", type: "USHORT", value: 0 },
    { name: "usWidthClass", type: "USHORT", value: 0 },
    { name: "fsType", type: "USHORT", value: 0 },
    { name: "ySubscriptXSize", type: "SHORT", value: 650 },
    { name: "ySubscriptYSize", type: "SHORT", value: 699 },
    { name: "ySubscriptXOffset", type: "SHORT", value: 0 },
    { name: "ySubscriptYOffset", type: "SHORT", value: 140 },
    { name: "ySuperscriptXSize", type: "SHORT", value: 650 },
    { name: "ySuperscriptYSize", type: "SHORT", value: 699 },
    { name: "ySuperscriptXOffset", type: "SHORT", value: 0 },
    { name: "ySuperscriptYOffset", type: "SHORT", value: 479 },
    { name: "yStrikeoutSize", type: "SHORT", value: 49 },
    { name: "yStrikeoutPosition", type: "SHORT", value: 258 },
    { name: "sFamilyClass", type: "SHORT", value: 0 },
    { name: "bFamilyType", type: "BYTE", value: 0 },
    { name: "bSerifStyle", type: "BYTE", value: 0 },
    { name: "bWeight", type: "BYTE", value: 0 },
    { name: "bProportion", type: "BYTE", value: 0 },
    { name: "bContrast", type: "BYTE", value: 0 },
    { name: "bStrokeVariation", type: "BYTE", value: 0 },
    { name: "bArmStyle", type: "BYTE", value: 0 },
    { name: "bLetterform", type: "BYTE", value: 0 },
    { name: "bMidline", type: "BYTE", value: 0 },
    { name: "bXHeight", type: "BYTE", value: 0 },
    { name: "ulUnicodeRange1", type: "ULONG", value: 0 },
    { name: "ulUnicodeRange2", type: "ULONG", value: 0 },
    { name: "ulUnicodeRange3", type: "ULONG", value: 0 },
    { name: "ulUnicodeRange4", type: "ULONG", value: 0 },
    { name: "achVendID", type: "CHARARRAY", value: "XXXX" },
    { name: "fsSelection", type: "USHORT", value: 0 },
    { name: "usFirstCharIndex", type: "USHORT", value: 0 },
    { name: "usLastCharIndex", type: "USHORT", value: 0 },
    { name: "sTypoAscender", type: "SHORT", value: 0 },
    { name: "sTypoDescender", type: "SHORT", value: 0 },
    { name: "sTypoLineGap", type: "SHORT", value: 0 },
    { name: "usWinAscent", type: "USHORT", value: 0 },
    { name: "usWinDescent", type: "USHORT", value: 0 },
    { name: "ulCodePageRange1", type: "ULONG", value: 0 },
    { name: "ulCodePageRange2", type: "ULONG", value: 0 },
    { name: "sxHeight", type: "SHORT", value: 0 },
    { name: "sCapHeight", type: "SHORT", value: 0 },
    { name: "usDefaultChar", type: "USHORT", value: 0 },
    { name: "usBreakChar", type: "USHORT", value: 0 },
    { name: "usMaxContext", type: "USHORT", value: 0 }
  ], r);
}
var R4 = { parse: d7, make: v7, unicodeRanges: I4, getUnicodeRange: p7 };
function y7(r, e) {
  var t = {}, n = new G.Parser(r, e);
  switch (t.version = n.parseVersion(), t.italicAngle = n.parseFixed(), t.underlinePosition = n.parseShort(), t.underlineThickness = n.parseShort(), t.isFixedPitch = n.parseULong(), t.minMemType42 = n.parseULong(), t.maxMemType42 = n.parseULong(), t.minMemType1 = n.parseULong(), t.maxMemType1 = n.parseULong(), t.version) {
    case 1:
      t.names = T1.slice();
      break;
    case 2:
      t.numberOfGlyphs = n.parseUShort(), t.glyphNameIndex = new Array(t.numberOfGlyphs);
      for (var s = 0; s < t.numberOfGlyphs; s++)
        t.glyphNameIndex[s] = n.parseUShort();
      t.names = [];
      for (var a = 0; a < t.numberOfGlyphs; a++)
        if (t.glyphNameIndex[a] >= T1.length) {
          var i = n.parseChar();
          t.names.push(n.parseString(i));
        }
      break;
    case 2.5:
      t.numberOfGlyphs = n.parseUShort(), t.offset = new Array(t.numberOfGlyphs);
      for (var o = 0; o < t.numberOfGlyphs; o++)
        t.offset[o] = n.parseChar();
      break;
  }
  return t;
}
function g7() {
  return new _.Table("post", [
    { name: "version", type: "FIXED", value: 196608 },
    { name: "italicAngle", type: "FIXED", value: 0 },
    { name: "underlinePosition", type: "FWORD", value: 0 },
    { name: "underlineThickness", type: "FWORD", value: 0 },
    { name: "isFixedPitch", type: "ULONG", value: 0 },
    { name: "minMemType42", type: "ULONG", value: 0 },
    { name: "maxMemType42", type: "ULONG", value: 0 },
    { name: "minMemType1", type: "ULONG", value: 0 },
    { name: "maxMemType1", type: "ULONG", value: 0 }
  ]);
}
var _6 = { parse: y7, make: g7 }, H0 = new Array(9);
H0[1] = function() {
  var e = this.offset + this.relativeOffset, t = this.parseUShort();
  if (t === 1)
    return {
      substFormat: 1,
      coverage: this.parsePointer(P.coverage),
      deltaGlyphId: this.parseUShort()
    };
  if (t === 2)
    return {
      substFormat: 2,
      coverage: this.parsePointer(P.coverage),
      substitute: this.parseOffset16List()
    };
  z.assert(!1, "0x" + e.toString(16) + ": lookup type 1 format must be 1 or 2.");
};
H0[2] = function() {
  var e = this.parseUShort();
  return z.argument(e === 1, "GSUB Multiple Substitution Subtable identifier-format must be 1"), {
    substFormat: e,
    coverage: this.parsePointer(P.coverage),
    sequences: this.parseListOfLists()
  };
};
H0[3] = function() {
  var e = this.parseUShort();
  return z.argument(e === 1, "GSUB Alternate Substitution Subtable identifier-format must be 1"), {
    substFormat: e,
    coverage: this.parsePointer(P.coverage),
    alternateSets: this.parseListOfLists()
  };
};
H0[4] = function() {
  var e = this.parseUShort();
  return z.argument(e === 1, "GSUB ligature table identifier-format must be 1"), {
    substFormat: e,
    coverage: this.parsePointer(P.coverage),
    ligatureSets: this.parseListOfLists(function() {
      return {
        ligGlyph: this.parseUShort(),
        components: this.parseUShortList(this.parseUShort() - 1)
      };
    })
  };
};
var M1 = {
  sequenceIndex: P.uShort,
  lookupListIndex: P.uShort
};
H0[5] = function() {
  var e = this.offset + this.relativeOffset, t = this.parseUShort();
  if (t === 1)
    return {
      substFormat: t,
      coverage: this.parsePointer(P.coverage),
      ruleSets: this.parseListOfLists(function() {
        var a = this.parseUShort(), i = this.parseUShort();
        return {
          input: this.parseUShortList(a - 1),
          lookupRecords: this.parseRecordList(i, M1)
        };
      })
    };
  if (t === 2)
    return {
      substFormat: t,
      coverage: this.parsePointer(P.coverage),
      classDef: this.parsePointer(P.classDef),
      classSets: this.parseListOfLists(function() {
        var a = this.parseUShort(), i = this.parseUShort();
        return {
          classes: this.parseUShortList(a - 1),
          lookupRecords: this.parseRecordList(i, M1)
        };
      })
    };
  if (t === 3) {
    var n = this.parseUShort(), s = this.parseUShort();
    return {
      substFormat: t,
      coverages: this.parseList(n, P.pointer(P.coverage)),
      lookupRecords: this.parseRecordList(s, M1)
    };
  }
  z.assert(!1, "0x" + e.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
};
H0[6] = function() {
  var e = this.offset + this.relativeOffset, t = this.parseUShort();
  if (t === 1)
    return {
      substFormat: 1,
      coverage: this.parsePointer(P.coverage),
      chainRuleSets: this.parseListOfLists(function() {
        return {
          backtrack: this.parseUShortList(),
          input: this.parseUShortList(this.parseShort() - 1),
          lookahead: this.parseUShortList(),
          lookupRecords: this.parseRecordList(M1)
        };
      })
    };
  if (t === 2)
    return {
      substFormat: 2,
      coverage: this.parsePointer(P.coverage),
      backtrackClassDef: this.parsePointer(P.classDef),
      inputClassDef: this.parsePointer(P.classDef),
      lookaheadClassDef: this.parsePointer(P.classDef),
      chainClassSet: this.parseListOfLists(function() {
        return {
          backtrack: this.parseUShortList(),
          input: this.parseUShortList(this.parseShort() - 1),
          lookahead: this.parseUShortList(),
          lookupRecords: this.parseRecordList(M1)
        };
      })
    };
  if (t === 3)
    return {
      substFormat: 3,
      backtrackCoverage: this.parseList(P.pointer(P.coverage)),
      inputCoverage: this.parseList(P.pointer(P.coverage)),
      lookaheadCoverage: this.parseList(P.pointer(P.coverage)),
      lookupRecords: this.parseRecordList(M1)
    };
  z.assert(!1, "0x" + e.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
};
H0[7] = function() {
  var e = this.parseUShort();
  z.argument(e === 1, "GSUB Extension Substitution subtable identifier-format must be 1");
  var t = this.parseUShort(), n = new P(this.data, this.offset + this.parseULong());
  return {
    substFormat: 1,
    lookupType: t,
    extension: H0[t].call(n)
  };
};
H0[8] = function() {
  var e = this.parseUShort();
  return z.argument(e === 1, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), {
    substFormat: e,
    coverage: this.parsePointer(P.coverage),
    backtrackCoverage: this.parseList(P.pointer(P.coverage)),
    lookaheadCoverage: this.parseList(P.pointer(P.coverage)),
    substitutes: this.parseUShortList()
  };
};
function m7(r, e) {
  e = e || 0;
  var t = new P(r, e), n = t.parseVersion(1);
  return z.argument(n === 1 || n === 1.1, "Unsupported GSUB table version."), n === 1 ? {
    version: n,
    scripts: t.parseScriptList(),
    features: t.parseFeatureList(),
    lookups: t.parseLookupList(H0)
  } : {
    version: n,
    scripts: t.parseScriptList(),
    features: t.parseFeatureList(),
    lookups: t.parseLookupList(H0),
    variations: t.parseFeatureVariationsList()
  };
}
var H1 = new Array(9);
H1[1] = function(e) {
  return e.substFormat === 1 ? new _.Table("substitutionTable", [
    { name: "substFormat", type: "USHORT", value: 1 },
    { name: "coverage", type: "TABLE", value: new _.Coverage(e.coverage) },
    { name: "deltaGlyphID", type: "USHORT", value: e.deltaGlyphId }
  ]) : new _.Table("substitutionTable", [
    { name: "substFormat", type: "USHORT", value: 2 },
    { name: "coverage", type: "TABLE", value: new _.Coverage(e.coverage) }
  ].concat(_.ushortList("substitute", e.substitute)));
};
H1[2] = function(e) {
  return z.assert(e.substFormat === 1, "Lookup type 2 substFormat must be 1."), new _.Table("substitutionTable", [
    { name: "substFormat", type: "USHORT", value: 1 },
    { name: "coverage", type: "TABLE", value: new _.Coverage(e.coverage) }
  ].concat(_.tableList("seqSet", e.sequences, function(t) {
    return new _.Table("sequenceSetTable", _.ushortList("sequence", t));
  })));
};
H1[3] = function(e) {
  return z.assert(e.substFormat === 1, "Lookup type 3 substFormat must be 1."), new _.Table("substitutionTable", [
    { name: "substFormat", type: "USHORT", value: 1 },
    { name: "coverage", type: "TABLE", value: new _.Coverage(e.coverage) }
  ].concat(_.tableList("altSet", e.alternateSets, function(t) {
    return new _.Table("alternateSetTable", _.ushortList("alternate", t));
  })));
};
H1[4] = function(e) {
  return z.assert(e.substFormat === 1, "Lookup type 4 substFormat must be 1."), new _.Table("substitutionTable", [
    { name: "substFormat", type: "USHORT", value: 1 },
    { name: "coverage", type: "TABLE", value: new _.Coverage(e.coverage) }
  ].concat(_.tableList("ligSet", e.ligatureSets, function(t) {
    return new _.Table("ligatureSetTable", _.tableList("ligature", t, function(n) {
      return new _.Table(
        "ligatureTable",
        [{ name: "ligGlyph", type: "USHORT", value: n.ligGlyph }].concat(_.ushortList("component", n.components, n.components.length + 1))
      );
    }));
  })));
};
H1[6] = function(e) {
  if (e.substFormat === 1) {
    var t = new _.Table("chainContextTable", [
      { name: "substFormat", type: "USHORT", value: e.substFormat },
      { name: "coverage", type: "TABLE", value: new _.Coverage(e.coverage) }
    ].concat(_.tableList("chainRuleSet", e.chainRuleSets, function(a) {
      return new _.Table("chainRuleSetTable", _.tableList("chainRule", a, function(i) {
        var o = _.ushortList("backtrackGlyph", i.backtrack, i.backtrack.length).concat(_.ushortList("inputGlyph", i.input, i.input.length + 1)).concat(_.ushortList("lookaheadGlyph", i.lookahead, i.lookahead.length)).concat(_.ushortList("substitution", [], i.lookupRecords.length));
        return i.lookupRecords.forEach(function(l, u) {
          o = o.concat({ name: "sequenceIndex" + u, type: "USHORT", value: l.sequenceIndex }).concat({ name: "lookupListIndex" + u, type: "USHORT", value: l.lookupListIndex });
        }), new _.Table("chainRuleTable", o);
      }));
    })));
    return t;
  } else if (e.substFormat === 2)
    z.assert(!1, "lookup type 6 format 2 is not yet supported.");
  else if (e.substFormat === 3) {
    var n = [
      { name: "substFormat", type: "USHORT", value: e.substFormat }
    ];
    n.push({ name: "backtrackGlyphCount", type: "USHORT", value: e.backtrackCoverage.length }), e.backtrackCoverage.forEach(function(a, i) {
      n.push({ name: "backtrackCoverage" + i, type: "TABLE", value: new _.Coverage(a) });
    }), n.push({ name: "inputGlyphCount", type: "USHORT", value: e.inputCoverage.length }), e.inputCoverage.forEach(function(a, i) {
      n.push({ name: "inputCoverage" + i, type: "TABLE", value: new _.Coverage(a) });
    }), n.push({ name: "lookaheadGlyphCount", type: "USHORT", value: e.lookaheadCoverage.length }), e.lookaheadCoverage.forEach(function(a, i) {
      n.push({ name: "lookaheadCoverage" + i, type: "TABLE", value: new _.Coverage(a) });
    }), n.push({ name: "substitutionCount", type: "USHORT", value: e.lookupRecords.length }), e.lookupRecords.forEach(function(a, i) {
      n = n.concat({ name: "sequenceIndex" + i, type: "USHORT", value: a.sequenceIndex }).concat({ name: "lookupListIndex" + i, type: "USHORT", value: a.lookupListIndex });
    });
    var s = new _.Table("chainContextTable", n);
    return s;
  }
  z.assert(!1, "lookup type 6 format must be 1, 2 or 3.");
};
function x7(r) {
  return new _.Table("GSUB", [
    { name: "version", type: "ULONG", value: 65536 },
    { name: "scripts", type: "TABLE", value: new _.ScriptList(r.scripts) },
    { name: "features", type: "TABLE", value: new _.FeatureList(r.features) },
    { name: "lookups", type: "TABLE", value: new _.LookupList(r.lookups, H1) }
  ]);
}
var N6 = { parse: m7, make: x7 };
function b7(r, e) {
  var t = new G.Parser(r, e), n = t.parseULong();
  z.argument(n === 1, "Unsupported META table version."), t.parseULong(), t.parseULong();
  for (var s = t.parseULong(), a = {}, i = 0; i < s; i++) {
    var o = t.parseTag(), l = t.parseULong(), u = t.parseULong(), c = N1.UTF8(r, e + l, u);
    a[o] = c;
  }
  return a;
}
function S7(r) {
  var e = Object.keys(r).length, t = "", n = 16 + e * 12, s = new _.Table("meta", [
    { name: "version", type: "ULONG", value: 1 },
    { name: "flags", type: "ULONG", value: 0 },
    { name: "offset", type: "ULONG", value: n },
    { name: "numTags", type: "ULONG", value: e }
  ]);
  for (var a in r) {
    var i = t.length;
    t += r[a], s.fields.push({ name: "tag " + a, type: "TAG", value: a }), s.fields.push({ name: "offset " + a, type: "ULONG", value: n + i }), s.fields.push({ name: "length " + a, type: "ULONG", value: r[a].length });
  }
  return s.fields.push({ name: "stringPool", type: "CHARARRAY", value: t }), s;
}
var B6 = { parse: b7, make: S7 };
function u5(r) {
  return Math.log(r) / Math.log(2) | 0;
}
function ce(r) {
  for (; r.length % 4 !== 0; )
    r.push(0);
  for (var e = 0, t = 0; t < r.length; t += 4)
    e += (r[t] << 24) + (r[t + 1] << 16) + (r[t + 2] << 8) + r[t + 3];
  return e %= Math.pow(2, 32), e;
}
function c5(r, e, t, n) {
  return new _.Record("Table Record", [
    { name: "tag", type: "TAG", value: r !== void 0 ? r : "" },
    { name: "checkSum", type: "ULONG", value: e !== void 0 ? e : 0 },
    { name: "offset", type: "ULONG", value: t !== void 0 ? t : 0 },
    { name: "length", type: "ULONG", value: n !== void 0 ? n : 0 }
  ]);
}
function U6(r) {
  var e = new _.Table("sfnt", [
    { name: "version", type: "TAG", value: "OTTO" },
    { name: "numTables", type: "USHORT", value: 0 },
    { name: "searchRange", type: "USHORT", value: 0 },
    { name: "entrySelector", type: "USHORT", value: 0 },
    { name: "rangeShift", type: "USHORT", value: 0 }
  ]);
  e.tables = r, e.numTables = r.length;
  var t = Math.pow(2, u5(e.numTables));
  e.searchRange = 16 * t, e.entrySelector = u5(t), e.rangeShift = e.numTables * 16 - e.searchRange;
  for (var n = [], s = [], a = e.sizeOf() + c5().sizeOf() * e.numTables; a % 4 !== 0; )
    a += 1, s.push({ name: "padding", type: "BYTE", value: 0 });
  for (var i = 0; i < r.length; i += 1) {
    var o = r[i];
    z.argument(o.tableName.length === 4, "Table name" + o.tableName + " is invalid.");
    var l = o.sizeOf(), u = c5(o.tableName, ce(o.encode()), a, l);
    for (n.push({ name: u.tag + " Table Record", type: "RECORD", value: u }), s.push({ name: o.tableName + " table", type: "RECORD", value: o }), a += l, z.argument(!isNaN(a), "Something went wrong calculating the offset."); a % 4 !== 0; )
      a += 1, s.push({ name: "padding", type: "BYTE", value: 0 });
  }
  return n.sort(function(c, p) {
    return c.value.tag > p.value.tag ? 1 : -1;
  }), e.fields = e.fields.concat(n), e.fields = e.fields.concat(s), e;
}
function f5(r, e, t) {
  for (var n = 0; n < e.length; n += 1) {
    var s = r.charToGlyphIndex(e[n]);
    if (s > 0) {
      var a = r.glyphs.get(s);
      return a.getMetrics();
    }
  }
  return t;
}
function T7(r) {
  for (var e = 0, t = 0; t < r.length; t += 1)
    e += r[t];
  return e / r.length;
}
function E7(r) {
  for (var e = [], t = [], n = [], s = [], a = [], i = [], o = [], l, u = 0, c = 0, p = 0, f = 0, d = 0, v = 0; v < r.glyphs.length; v += 1) {
    var y = r.glyphs.get(v), m = y.unicode | 0;
    if (isNaN(y.advanceWidth))
      throw new Error("Glyph " + y.name + " (" + v + "): advanceWidth is not a number.");
    (l > m || l === void 0) && m > 0 && (l = m), u < m && (u = m);
    var g = R4.getUnicodeRange(m);
    if (g < 32)
      c |= 1 << g;
    else if (g < 64)
      p |= 1 << g - 32;
    else if (g < 96)
      f |= 1 << g - 64;
    else if (g < 123)
      d |= 1 << g - 96;
    else
      throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
    if (y.name !== ".notdef") {
      var C = y.getMetrics();
      e.push(C.xMin), t.push(C.yMin), n.push(C.xMax), s.push(C.yMax), i.push(C.leftSideBearing), o.push(C.rightSideBearing), a.push(y.advanceWidth);
    }
  }
  var S = {
    xMin: Math.min.apply(null, e),
    yMin: Math.min.apply(null, t),
    xMax: Math.max.apply(null, n),
    yMax: Math.max.apply(null, s),
    advanceWidthMax: Math.max.apply(null, a),
    advanceWidthAvg: T7(a),
    minLeftSideBearing: Math.min.apply(null, i),
    maxLeftSideBearing: Math.max.apply(null, i),
    minRightSideBearing: Math.min.apply(null, o)
  };
  S.ascender = r.ascender, S.descender = r.descender;
  var E = k6.make({
    flags: 3,
    // 00000011 (baseline for font at y=0; left sidebearing point at x=0)
    unitsPerEm: r.unitsPerEm,
    xMin: S.xMin,
    yMin: S.yMin,
    xMax: S.xMax,
    yMax: S.yMax,
    lowestRecPPEM: 3,
    createdTimestamp: r.createdTimestamp
  }), w = P6.make({
    ascender: S.ascender,
    descender: S.descender,
    advanceWidthMax: S.advanceWidthMax,
    minLeftSideBearing: S.minLeftSideBearing,
    minRightSideBearing: S.minRightSideBearing,
    xMaxExtent: S.maxLeftSideBearing + (S.xMax - S.xMin),
    numberOfHMetrics: r.glyphs.length
  }), L = L6.make(r.glyphs.length), F = R4.make(Object.assign({
    xAvgCharWidth: Math.round(S.advanceWidthAvg),
    usFirstCharIndex: l,
    usLastCharIndex: u,
    ulUnicodeRange1: c,
    ulUnicodeRange2: p,
    ulUnicodeRange3: f,
    ulUnicodeRange4: d,
    // See http://typophile.com/node/13081 for more info on vertical metrics.
    // We get metrics for typical characters (such as "x" for xHeight).
    // We provide some fallback characters if characters are unavailable: their
    // ordering was chosen experimentally.
    sTypoAscender: S.ascender,
    sTypoDescender: S.descender,
    sTypoLineGap: 0,
    usWinAscent: S.yMax,
    usWinDescent: Math.abs(S.yMin),
    ulCodePageRange1: 1,
    // FIXME: hard-code Latin 1 support for now
    sxHeight: f5(r, "xyvw", { yMax: Math.round(S.ascender / 2) }).yMax,
    sCapHeight: f5(r, "HIKLEFJMNTZBDPRAGOQSUVWXY", S).yMax,
    usDefaultChar: r.hasChar(" ") ? 32 : 0,
    // Use space as the default character, if available.
    usBreakChar: r.hasChar(" ") ? 32 : 0
    // Use space as the break character, if available.
  }, r.tables.os2)), A = w6.make(r.glyphs), k = d6.make(r.glyphs), O = r.getEnglishName("fontFamily"), M = r.getEnglishName("fontSubfamily"), H = O + " " + M, e0 = r.getEnglishName("postScriptName");
  e0 || (e0 = O.replace(/\s/g, "") + "-" + M);
  var Z = {};
  for (var Q in r.names)
    Z[Q] = r.names[Q];
  Z.uniqueID || (Z.uniqueID = { en: r.getEnglishName("manufacturer") + ":" + H }), Z.postScriptName || (Z.postScriptName = { en: e0 }), Z.preferredFamily || (Z.preferredFamily = r.names.fontFamily), Z.preferredSubfamily || (Z.preferredSubfamily = r.names.fontSubfamily);
  var j = [], t0 = M6.make(Z, j), s0 = j.length > 0 ? F6.make(j) : void 0, r0 = _6.make(), a0 = C6.make(r.glyphs, {
    version: r.getEnglishName("version"),
    fullName: H,
    familyName: O,
    weightName: M,
    postScriptName: e0,
    unitsPerEm: r.unitsPerEm,
    fontBBox: [0, S.yMin, S.ascender, S.advanceWidthMax]
  }), W = r.metas && Object.keys(r.metas).length > 0 ? B6.make(r.metas) : void 0, $ = [E, w, L, F, t0, k, r0, a0, A];
  s0 && $.push(s0), r.tables.gsub && $.push(N6.make(r.tables.gsub)), W && $.push(W);
  for (var m0 = U6($), $0 = m0.encode(), N0 = ce($0), e1 = m0.fields, u1 = !1, t1 = 0; t1 < e1.length; t1 += 1)
    if (e1[t1].name === "head table") {
      e1[t1].value.checkSumAdjustment = 2981146554 - N0, u1 = !0;
      break;
    }
  if (!u1)
    throw new Error("Could not find head table with checkSum to adjust.");
  return m0;
}
var A7 = { make: U6, fontToTable: E7, computeCheckSum: ce };
function u4(r, e) {
  for (var t = 0, n = r.length - 1; t <= n; ) {
    var s = t + n >>> 1, a = r[s].tag;
    if (a === e)
      return s;
    a < e ? t = s + 1 : n = s - 1;
  }
  return -t - 1;
}
function p5(r, e) {
  for (var t = 0, n = r.length - 1; t <= n; ) {
    var s = t + n >>> 1, a = r[s];
    if (a === e)
      return s;
    a < e ? t = s + 1 : n = s - 1;
  }
  return -t - 1;
}
function d5(r, e) {
  for (var t, n = 0, s = r.length - 1; n <= s; ) {
    var a = n + s >>> 1;
    t = r[a];
    var i = t.start;
    if (i === e)
      return t;
    i < e ? n = a + 1 : s = a - 1;
  }
  if (n > 0)
    return t = r[n - 1], e > t.end ? 0 : t;
}
function f2(r, e) {
  this.font = r, this.tableName = e;
}
f2.prototype = {
  /**
   * Binary search an object by "tag" property
   * @instance
   * @function searchTag
   * @memberof opentype.Layout
   * @param  {Array} arr
   * @param  {string} tag
   * @return {number}
   */
  searchTag: u4,
  /**
   * Binary search in a list of numbers
   * @instance
   * @function binSearch
   * @memberof opentype.Layout
   * @param  {Array} arr
   * @param  {number} value
   * @return {number}
   */
  binSearch: p5,
  /**
   * Get or create the Layout table (GSUB, GPOS etc).
   * @param  {boolean} create - Whether to create a new one.
   * @return {Object} The GSUB or GPOS table.
   */
  getTable: function(r) {
    var e = this.font.tables[this.tableName];
    return !e && r && (e = this.font.tables[this.tableName] = this.createDefaultTable()), e;
  },
  /**
   * Returns all scripts in the substitution table.
   * @instance
   * @return {Array}
   */
  getScriptNames: function() {
    var r = this.getTable();
    return r ? r.scripts.map(function(e) {
      return e.tag;
    }) : [];
  },
  /**
   * Returns the best bet for a script name.
   * Returns 'DFLT' if it exists.
   * If not, returns 'latn' if it exists.
   * If neither exist, returns undefined.
   */
  getDefaultScriptName: function() {
    var r = this.getTable();
    if (r) {
      for (var e = !1, t = 0; t < r.scripts.length; t++) {
        var n = r.scripts[t].tag;
        if (n === "DFLT")
          return n;
        n === "latn" && (e = !0);
      }
      if (e)
        return "latn";
    }
  },
  /**
   * Returns all LangSysRecords in the given script.
   * @instance
   * @param {string} [script='DFLT']
   * @param {boolean} create - forces the creation of this script table if it doesn't exist.
   * @return {Object} An object with tag and script properties.
   */
  getScriptTable: function(r, e) {
    var t = this.getTable(e);
    if (t) {
      r = r || "DFLT";
      var n = t.scripts, s = u4(t.scripts, r);
      if (s >= 0)
        return n[s].script;
      if (e) {
        var a = {
          tag: r,
          script: {
            defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] },
            langSysRecords: []
          }
        };
        return n.splice(-1 - s, 0, a), a.script;
      }
    }
  },
  /**
   * Returns a language system table
   * @instance
   * @param {string} [script='DFLT']
   * @param {string} [language='dlft']
   * @param {boolean} create - forces the creation of this langSysTable if it doesn't exist.
   * @return {Object}
   */
  getLangSysTable: function(r, e, t) {
    var n = this.getScriptTable(r, t);
    if (n) {
      if (!e || e === "dflt" || e === "DFLT")
        return n.defaultLangSys;
      var s = u4(n.langSysRecords, e);
      if (s >= 0)
        return n.langSysRecords[s].langSys;
      if (t) {
        var a = {
          tag: e,
          langSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] }
        };
        return n.langSysRecords.splice(-1 - s, 0, a), a.langSys;
      }
    }
  },
  /**
   * Get a specific feature table.
   * @instance
   * @param {string} [script='DFLT']
   * @param {string} [language='dlft']
   * @param {string} feature - One of the codes listed at https://www.microsoft.com/typography/OTSPEC/featurelist.htm
   * @param {boolean} create - forces the creation of the feature table if it doesn't exist.
   * @return {Object}
   */
  getFeatureTable: function(r, e, t, n) {
    var s = this.getLangSysTable(r, e, n);
    if (s) {
      for (var a, i = s.featureIndexes, o = this.font.tables[this.tableName].features, l = 0; l < i.length; l++)
        if (a = o[i[l]], a.tag === t)
          return a.feature;
      if (n) {
        var u = o.length;
        return z.assert(u === 0 || t >= o[u - 1].tag, "Features must be added in alphabetical order."), a = {
          tag: t,
          feature: { params: 0, lookupListIndexes: [] }
        }, o.push(a), i.push(u), a.feature;
      }
    }
  },
  /**
   * Get the lookup tables of a given type for a script/language/feature.
   * @instance
   * @param {string} [script='DFLT']
   * @param {string} [language='dlft']
   * @param {string} feature - 4-letter feature code
   * @param {number} lookupType - 1 to 9
   * @param {boolean} create - forces the creation of the lookup table if it doesn't exist, with no subtables.
   * @return {Object[]}
   */
  getLookupTables: function(r, e, t, n, s) {
    var a = this.getFeatureTable(r, e, t, s), i = [];
    if (a) {
      for (var o, l = a.lookupListIndexes, u = this.font.tables[this.tableName].lookups, c = 0; c < l.length; c++)
        o = u[l[c]], o.lookupType === n && i.push(o);
      if (i.length === 0 && s) {
        o = {
          lookupType: n,
          lookupFlag: 0,
          subtables: [],
          markFilteringSet: void 0
        };
        var p = u.length;
        return u.push(o), l.push(p), [o];
      }
    }
    return i;
  },
  /**
   * Find a glyph in a class definition table
   * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#class-definition-table
   * @param {object} classDefTable - an OpenType Layout class definition table
   * @param {number} glyphIndex - the index of the glyph to find
   * @returns {number} -1 if not found
   */
  getGlyphClass: function(r, e) {
    switch (r.format) {
      case 1:
        return r.startGlyph <= e && e < r.startGlyph + r.classes.length ? r.classes[e - r.startGlyph] : 0;
      case 2:
        var t = d5(r.ranges, e);
        return t ? t.classId : 0;
    }
  },
  /**
   * Find a glyph in a coverage table
   * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table
   * @param {object} coverageTable - an OpenType Layout coverage table
   * @param {number} glyphIndex - the index of the glyph to find
   * @returns {number} -1 if not found
   */
  getCoverageIndex: function(r, e) {
    switch (r.format) {
      case 1:
        var t = p5(r.glyphs, e);
        return t >= 0 ? t : -1;
      case 2:
        var n = d5(r.ranges, e);
        return n ? n.index + e - n.start : -1;
    }
  },
  /**
   * Returns the list of glyph indexes of a coverage table.
   * Format 1: the list is stored raw
   * Format 2: compact list as range records.
   * @instance
   * @param  {Object} coverageTable
   * @return {Array}
   */
  expandCoverage: function(r) {
    if (r.format === 1)
      return r.glyphs;
    for (var e = [], t = r.ranges, n = 0; n < t.length; n++)
      for (var s = t[n], a = s.start, i = s.end, o = a; o <= i; o++)
        e.push(o);
    return e;
  }
};
function p2(r) {
  f2.call(this, r, "gpos");
}
p2.prototype = f2.prototype;
p2.prototype.init = function() {
  var r = this.getDefaultScriptName();
  this.defaultKerningTables = this.getKerningTables(r);
};
p2.prototype.getKerningValue = function(r, e, t) {
  for (var n = 0; n < r.length; n++)
    for (var s = r[n].subtables, a = 0; a < s.length; a++) {
      var i = s[a], o = this.getCoverageIndex(i.coverage, e);
      if (!(o < 0))
        switch (i.posFormat) {
          case 1:
            for (var l = i.pairSets[o], u = 0; u < l.length; u++) {
              var c = l[u];
              if (c.secondGlyph === t)
                return c.value1 && c.value1.xAdvance || 0;
            }
            break;
          // left glyph found, not right glyph - try next subtable
          case 2:
            var p = this.getGlyphClass(i.classDef1, e), f = this.getGlyphClass(i.classDef2, t), d = i.classRecords[p][f];
            return d.value1 && d.value1.xAdvance || 0;
        }
    }
  return 0;
};
p2.prototype.getKerningTables = function(r, e) {
  if (this.font.tables.gpos)
    return this.getLookupTables(r, e, "kern", 2);
};
function O0(r) {
  f2.call(this, r, "gsub");
}
function C7(r, e) {
  var t = r.length;
  if (t !== e.length)
    return !1;
  for (var n = 0; n < t; n++)
    if (r[n] !== e[n])
      return !1;
  return !0;
}
function fe(r, e, t) {
  for (var n = r.subtables, s = 0; s < n.length; s++) {
    var a = n[s];
    if (a.substFormat === e)
      return a;
  }
  if (t)
    return n.push(t), t;
}
O0.prototype = f2.prototype;
O0.prototype.createDefaultTable = function() {
  return {
    version: 1,
    scripts: [{
      tag: "DFLT",
      script: {
        defaultLangSys: { reserved: 0, reqFeatureIndex: 65535, featureIndexes: [] },
        langSysRecords: []
      }
    }],
    features: [],
    lookups: []
  };
};
O0.prototype.getSingle = function(r, e, t) {
  for (var n = [], s = this.getLookupTables(e, t, r, 1), a = 0; a < s.length; a++)
    for (var i = s[a].subtables, o = 0; o < i.length; o++) {
      var l = i[o], u = this.expandCoverage(l.coverage), c = void 0;
      if (l.substFormat === 1) {
        var p = l.deltaGlyphId;
        for (c = 0; c < u.length; c++) {
          var f = u[c];
          n.push({ sub: f, by: f + p });
        }
      } else {
        var d = l.substitute;
        for (c = 0; c < u.length; c++)
          n.push({ sub: u[c], by: d[c] });
      }
    }
  return n;
};
O0.prototype.getMultiple = function(r, e, t) {
  for (var n = [], s = this.getLookupTables(e, t, r, 2), a = 0; a < s.length; a++)
    for (var i = s[a].subtables, o = 0; o < i.length; o++) {
      var l = i[o], u = this.expandCoverage(l.coverage), c = void 0;
      for (c = 0; c < u.length; c++) {
        var p = u[c], f = l.sequences[c];
        n.push({ sub: p, by: f });
      }
    }
  return n;
};
O0.prototype.getAlternates = function(r, e, t) {
  for (var n = [], s = this.getLookupTables(e, t, r, 3), a = 0; a < s.length; a++)
    for (var i = s[a].subtables, o = 0; o < i.length; o++)
      for (var l = i[o], u = this.expandCoverage(l.coverage), c = l.alternateSets, p = 0; p < u.length; p++)
        n.push({ sub: u[p], by: c[p] });
  return n;
};
O0.prototype.getLigatures = function(r, e, t) {
  for (var n = [], s = this.getLookupTables(e, t, r, 4), a = 0; a < s.length; a++)
    for (var i = s[a].subtables, o = 0; o < i.length; o++)
      for (var l = i[o], u = this.expandCoverage(l.coverage), c = l.ligatureSets, p = 0; p < u.length; p++)
        for (var f = u[p], d = c[p], v = 0; v < d.length; v++) {
          var y = d[v];
          n.push({
            sub: [f].concat(y.components),
            by: y.ligGlyph
          });
        }
  return n;
};
O0.prototype.addSingle = function(r, e, t, n) {
  var s = this.getLookupTables(t, n, r, 1, !0)[0], a = fe(s, 2, {
    // lookup type 1 subtable, format 2, coverage format 1
    substFormat: 2,
    coverage: { format: 1, glyphs: [] },
    substitute: []
  });
  z.assert(a.coverage.format === 1, "Single: unable to modify coverage table format " + a.coverage.format);
  var i = e.sub, o = this.binSearch(a.coverage.glyphs, i);
  o < 0 && (o = -1 - o, a.coverage.glyphs.splice(o, 0, i), a.substitute.splice(o, 0, 0)), a.substitute[o] = e.by;
};
O0.prototype.addMultiple = function(r, e, t, n) {
  z.assert(e.by instanceof Array && e.by.length > 1, 'Multiple: "by" must be an array of two or more ids');
  var s = this.getLookupTables(t, n, r, 2, !0)[0], a = fe(s, 1, {
    // lookup type 2 subtable, format 1, coverage format 1
    substFormat: 1,
    coverage: { format: 1, glyphs: [] },
    sequences: []
  });
  z.assert(a.coverage.format === 1, "Multiple: unable to modify coverage table format " + a.coverage.format);
  var i = e.sub, o = this.binSearch(a.coverage.glyphs, i);
  o < 0 && (o = -1 - o, a.coverage.glyphs.splice(o, 0, i), a.sequences.splice(o, 0, 0)), a.sequences[o] = e.by;
};
O0.prototype.addAlternate = function(r, e, t, n) {
  var s = this.getLookupTables(t, n, r, 3, !0)[0], a = fe(s, 1, {
    // lookup type 3 subtable, format 1, coverage format 1
    substFormat: 1,
    coverage: { format: 1, glyphs: [] },
    alternateSets: []
  });
  z.assert(a.coverage.format === 1, "Alternate: unable to modify coverage table format " + a.coverage.format);
  var i = e.sub, o = this.binSearch(a.coverage.glyphs, i);
  o < 0 && (o = -1 - o, a.coverage.glyphs.splice(o, 0, i), a.alternateSets.splice(o, 0, 0)), a.alternateSets[o] = e.by;
};
O0.prototype.addLigature = function(r, e, t, n) {
  var s = this.getLookupTables(t, n, r, 4, !0)[0], a = s.subtables[0];
  a || (a = {
    // lookup type 4 subtable, format 1, coverage format 1
    substFormat: 1,
    coverage: { format: 1, glyphs: [] },
    ligatureSets: []
  }, s.subtables[0] = a), z.assert(a.coverage.format === 1, "Ligature: unable to modify coverage table format " + a.coverage.format);
  var i = e.sub[0], o = e.sub.slice(1), l = {
    ligGlyph: e.by,
    components: o
  }, u = this.binSearch(a.coverage.glyphs, i);
  if (u >= 0) {
    for (var c = a.ligatureSets[u], p = 0; p < c.length; p++)
      if (C7(c[p].components, o))
        return;
    c.push(l);
  } else
    u = -1 - u, a.coverage.glyphs.splice(u, 0, i), a.ligatureSets.splice(u, 0, [l]);
};
O0.prototype.getFeature = function(r, e, t) {
  if (/ss\d\d/.test(r))
    return this.getSingle(r, e, t);
  switch (r) {
    case "aalt":
    case "salt":
      return this.getSingle(r, e, t).concat(this.getAlternates(r, e, t));
    case "dlig":
    case "liga":
    case "rlig":
      return this.getLigatures(r, e, t);
    case "ccmp":
      return this.getMultiple(r, e, t).concat(this.getLigatures(r, e, t));
    case "stch":
      return this.getMultiple(r, e, t);
  }
};
O0.prototype.add = function(r, e, t, n) {
  if (/ss\d\d/.test(r))
    return this.addSingle(r, e, t, n);
  switch (r) {
    case "aalt":
    case "salt":
      return typeof e.by == "number" ? this.addSingle(r, e, t, n) : this.addAlternate(r, e, t, n);
    case "dlig":
    case "liga":
    case "rlig":
      return this.addLigature(r, e, t, n);
    case "ccmp":
      return e.by instanceof Array ? this.addMultiple(r, e, t, n) : this.addLigature(r, e, t, n);
  }
};
function k7() {
  return typeof window < "u";
}
function G6(r) {
  for (var e = new ArrayBuffer(r.length), t = new Uint8Array(e), n = 0; n < r.length; ++n)
    t[n] = r[n];
  return e;
}
function P7(r) {
  for (var e = new Buffer(r.byteLength), t = new Uint8Array(r), n = 0; n < e.length; ++n)
    e[n] = t[n];
  return e;
}
function V1(r, e) {
  if (!r)
    throw e;
}
function v5(r, e, t, n, s) {
  var a;
  return (e & n) > 0 ? (a = r.parseByte(), (e & s) === 0 && (a = -a), a = t + a) : (e & s) > 0 ? a = t : a = t + r.parseShort(), a;
}
function H6(r, e, t) {
  var n = new G.Parser(e, t);
  r.numberOfContours = n.parseShort(), r._xMin = n.parseShort(), r._yMin = n.parseShort(), r._xMax = n.parseShort(), r._yMax = n.parseShort();
  var s, a;
  if (r.numberOfContours > 0) {
    for (var i = r.endPointIndices = [], o = 0; o < r.numberOfContours; o += 1)
      i.push(n.parseUShort());
    r.instructionLength = n.parseUShort(), r.instructions = [];
    for (var l = 0; l < r.instructionLength; l += 1)
      r.instructions.push(n.parseByte());
    var u = i[i.length - 1] + 1;
    s = [];
    for (var c = 0; c < u; c += 1)
      if (a = n.parseByte(), s.push(a), (a & 8) > 0)
        for (var p = n.parseByte(), f = 0; f < p; f += 1)
          s.push(a), c += 1;
    if (z.argument(s.length === u, "Bad flags."), i.length > 0) {
      var d = [], v;
      if (u > 0) {
        for (var y = 0; y < u; y += 1)
          a = s[y], v = {}, v.onCurve = !!(a & 1), v.lastPointOfContour = i.indexOf(y) >= 0, d.push(v);
        for (var m = 0, g = 0; g < u; g += 1)
          a = s[g], v = d[g], v.x = v5(n, a, m, 2, 16), m = v.x;
        for (var C = 0, S = 0; S < u; S += 1)
          a = s[S], v = d[S], v.y = v5(n, a, C, 4, 32), C = v.y;
      }
      r.points = d;
    } else
      r.points = [];
  } else if (r.numberOfContours === 0)
    r.points = [];
  else {
    r.isComposite = !0, r.points = [], r.components = [];
    for (var E = !0; E; ) {
      s = n.parseUShort();
      var w = {
        glyphIndex: n.parseUShort(),
        xScale: 1,
        scale01: 0,
        scale10: 0,
        yScale: 1,
        dx: 0,
        dy: 0
      };
      (s & 1) > 0 ? (s & 2) > 0 ? (w.dx = n.parseShort(), w.dy = n.parseShort()) : w.matchedPoints = [n.parseUShort(), n.parseUShort()] : (s & 2) > 0 ? (w.dx = n.parseChar(), w.dy = n.parseChar()) : w.matchedPoints = [n.parseByte(), n.parseByte()], (s & 8) > 0 ? w.xScale = w.yScale = n.parseF2Dot14() : (s & 64) > 0 ? (w.xScale = n.parseF2Dot14(), w.yScale = n.parseF2Dot14()) : (s & 128) > 0 && (w.xScale = n.parseF2Dot14(), w.scale01 = n.parseF2Dot14(), w.scale10 = n.parseF2Dot14(), w.yScale = n.parseF2Dot14()), r.components.push(w), E = !!(s & 32);
    }
    if (s & 256) {
      r.instructionLength = n.parseUShort(), r.instructions = [];
      for (var L = 0; L < r.instructionLength; L += 1)
        r.instructions.push(n.parseByte());
    }
  }
}
function c4(r, e) {
  for (var t = [], n = 0; n < r.length; n += 1) {
    var s = r[n], a = {
      x: e.xScale * s.x + e.scale01 * s.y + e.dx,
      y: e.scale10 * s.x + e.yScale * s.y + e.dy,
      onCurve: s.onCurve,
      lastPointOfContour: s.lastPointOfContour
    };
    t.push(a);
  }
  return t;
}
function w7(r) {
  for (var e = [], t = [], n = 0; n < r.length; n += 1) {
    var s = r[n];
    t.push(s), s.lastPointOfContour && (e.push(t), t = []);
  }
  return z.argument(t.length === 0, "There are still points left in the current contour."), e;
}
function z6(r) {
  var e = new v0();
  if (!r)
    return e;
  for (var t = w7(r), n = 0; n < t.length; ++n) {
    var s = t[n], a = null, i = s[s.length - 1], o = s[0];
    if (i.onCurve)
      e.moveTo(i.x, i.y);
    else if (o.onCurve)
      e.moveTo(o.x, o.y);
    else {
      var l = { x: (i.x + o.x) * 0.5, y: (i.y + o.y) * 0.5 };
      e.moveTo(l.x, l.y);
    }
    for (var u = 0; u < s.length; ++u)
      if (a = i, i = o, o = s[(u + 1) % s.length], i.onCurve)
        e.lineTo(i.x, i.y);
      else {
        var c = o;
        a.onCurve || ((i.x + a.x) * 0.5, (i.y + a.y) * 0.5), o.onCurve || (c = { x: (i.x + o.x) * 0.5, y: (i.y + o.y) * 0.5 }), e.quadraticCurveTo(i.x, i.y, c.x, c.y);
      }
    e.closePath();
  }
  return e;
}
function V6(r, e) {
  if (e.isComposite)
    for (var t = 0; t < e.components.length; t += 1) {
      var n = e.components[t], s = r.get(n.glyphIndex);
      if (s.getPath(), s.points) {
        var a = void 0;
        if (n.matchedPoints === void 0)
          a = c4(s.points, n);
        else {
          if (n.matchedPoints[0] > e.points.length - 1 || n.matchedPoints[1] > s.points.length - 1)
            throw Error("Matched points out of range in " + e.name);
          var i = e.points[n.matchedPoints[0]], o = s.points[n.matchedPoints[1]], l = {
            xScale: n.xScale,
            scale01: n.scale01,
            scale10: n.scale10,
            yScale: n.yScale,
            dx: 0,
            dy: 0
          };
          o = c4([o], l)[0], l.dx = i.x - o.x, l.dy = i.y - o.y, a = c4(s.points, l);
        }
        e.points = e.points.concat(a);
      }
    }
  return z6(e.points);
}
function F7(r, e, t, n) {
  for (var s = new K0.GlyphSet(n), a = 0; a < t.length - 1; a += 1) {
    var i = t[a], o = t[a + 1];
    i !== o ? s.push(a, K0.ttfGlyphLoader(n, a, H6, r, e + i, V6)) : s.push(a, K0.glyphLoader(n, a));
  }
  return s;
}
function L7(r, e, t, n) {
  var s = new K0.GlyphSet(n);
  return n._push = function(a) {
    var i = t[a], o = t[a + 1];
    i !== o ? s.push(a, K0.ttfGlyphLoader(n, a, H6, r, e + i, V6)) : s.push(a, K0.glyphLoader(n, a));
  }, s;
}
function D7(r, e, t, n, s) {
  return s.lowMemory ? L7(r, e, t, n) : F7(r, e, t, n);
}
var W6 = { getPath: z6, parse: D7 }, X6, k1, Y6, M4;
function J6(r) {
  this.font = r, this.getCommands = function(e) {
    return W6.getPath(e).commands;
  }, this._fpgmState = this._prepState = void 0, this._errorState = 0;
}
function O7(r) {
  return r;
}
function Z6(r) {
  return Math.sign(r) * Math.round(Math.abs(r));
}
function I7(r) {
  return Math.sign(r) * Math.round(Math.abs(r * 2)) / 2;
}
function R7(r) {
  return Math.sign(r) * (Math.round(Math.abs(r) + 0.5) - 0.5);
}
function M7(r) {
  return Math.sign(r) * Math.ceil(Math.abs(r));
}
function _7(r) {
  return Math.sign(r) * Math.floor(Math.abs(r));
}
var q6 = function(r) {
  var e = this.srPeriod, t = this.srPhase, n = this.srThreshold, s = 1;
  return r < 0 && (r = -r, s = -1), r += n - t, r = Math.trunc(r / e) * e, r += t, r < 0 ? t * s : r * s;
}, Q0 = {
  x: 1,
  y: 0,
  axis: "x",
  // Gets the projected distance between two points.
  // o1/o2 ... if true, respective original position is used.
  distance: function(r, e, t, n) {
    return (t ? r.xo : r.x) - (n ? e.xo : e.x);
  },
  // Moves point p so the moved position has the same relative
  // position to the moved positions of rp1 and rp2 than the
  // original positions had.
  //
  // See APPENDIX on INTERPOLATE at the bottom of this file.
  interpolate: function(r, e, t, n) {
    var s, a, i, o, l, u, c;
    if (!n || n === this) {
      if (s = r.xo - e.xo, a = r.xo - t.xo, l = e.x - e.xo, u = t.x - t.xo, i = Math.abs(s), o = Math.abs(a), c = i + o, c === 0) {
        r.x = r.xo + (l + u) / 2;
        return;
      }
      r.x = r.xo + (l * o + u * i) / c;
      return;
    }
    if (s = n.distance(r, e, !0, !0), a = n.distance(r, t, !0, !0), l = n.distance(e, e, !1, !0), u = n.distance(t, t, !1, !0), i = Math.abs(s), o = Math.abs(a), c = i + o, c === 0) {
      Q0.setRelative(r, r, (l + u) / 2, n, !0);
      return;
    }
    Q0.setRelative(r, r, (l * o + u * i) / c, n, !0);
  },
  // Slope of line normal to this
  normalSlope: Number.NEGATIVE_INFINITY,
  // Sets the point 'p' relative to point 'rp'
  // by the distance 'd'.
  //
  // See APPENDIX on SETRELATIVE at the bottom of this file.
  //
  // p   ... point to set
  // rp  ... reference point
  // d   ... distance on projection vector
  // pv  ... projection vector (undefined = this)
  // org ... if true, uses the original position of rp as reference.
  setRelative: function(r, e, t, n, s) {
    if (!n || n === this) {
      r.x = (s ? e.xo : e.x) + t;
      return;
    }
    var a = s ? e.xo : e.x, i = s ? e.yo : e.y, o = a + t * n.x, l = i + t * n.y;
    r.x = o + (r.y - l) / n.normalSlope;
  },
  // Slope of vector line.
  slope: 0,
  // Touches the point p.
  touch: function(r) {
    r.xTouched = !0;
  },
  // Tests if a point p is touched.
  touched: function(r) {
    return r.xTouched;
  },
  // Untouches the point p.
  untouch: function(r) {
    r.xTouched = !1;
  }
}, o1 = {
  x: 0,
  y: 1,
  axis: "y",
  // Gets the projected distance between two points.
  // o1/o2 ... if true, respective original position is used.
  distance: function(r, e, t, n) {
    return (t ? r.yo : r.y) - (n ? e.yo : e.y);
  },
  // Moves point p so the moved position has the same relative
  // position to the moved positions of rp1 and rp2 than the
  // original positions had.
  //
  // See APPENDIX on INTERPOLATE at the bottom of this file.
  interpolate: function(r, e, t, n) {
    var s, a, i, o, l, u, c;
    if (!n || n === this) {
      if (s = r.yo - e.yo, a = r.yo - t.yo, l = e.y - e.yo, u = t.y - t.yo, i = Math.abs(s), o = Math.abs(a), c = i + o, c === 0) {
        r.y = r.yo + (l + u) / 2;
        return;
      }
      r.y = r.yo + (l * o + u * i) / c;
      return;
    }
    if (s = n.distance(r, e, !0, !0), a = n.distance(r, t, !0, !0), l = n.distance(e, e, !1, !0), u = n.distance(t, t, !1, !0), i = Math.abs(s), o = Math.abs(a), c = i + o, c === 0) {
      o1.setRelative(r, r, (l + u) / 2, n, !0);
      return;
    }
    o1.setRelative(r, r, (l * o + u * i) / c, n, !0);
  },
  // Slope of line normal to this.
  normalSlope: 0,
  // Sets the point 'p' relative to point 'rp'
  // by the distance 'd'
  //
  // See APPENDIX on SETRELATIVE at the bottom of this file.
  //
  // p   ... point to set
  // rp  ... reference point
  // d   ... distance on projection vector
  // pv  ... projection vector (undefined = this)
  // org ... if true, uses the original position of rp as reference.
  setRelative: function(r, e, t, n, s) {
    if (!n || n === this) {
      r.y = (s ? e.yo : e.y) + t;
      return;
    }
    var a = s ? e.xo : e.x, i = s ? e.yo : e.y, o = a + t * n.x, l = i + t * n.y;
    r.y = l + n.normalSlope * (r.x - o);
  },
  // Slope of vector line.
  slope: Number.POSITIVE_INFINITY,
  // Touches the point p.
  touch: function(r) {
    r.yTouched = !0;
  },
  // Tests if a point p is touched.
  touched: function(r) {
    return r.yTouched;
  },
  // Untouches the point p.
  untouch: function(r) {
    r.yTouched = !1;
  }
};
Object.freeze(Q0);
Object.freeze(o1);
function d2(r, e) {
  this.x = r, this.y = e, this.axis = void 0, this.slope = e / r, this.normalSlope = -r / e, Object.freeze(this);
}
d2.prototype.distance = function(r, e, t, n) {
  return this.x * Q0.distance(r, e, t, n) + this.y * o1.distance(r, e, t, n);
};
d2.prototype.interpolate = function(r, e, t, n) {
  var s, a, i, o, l, u, c;
  if (i = n.distance(r, e, !0, !0), o = n.distance(r, t, !0, !0), s = n.distance(e, e, !1, !0), a = n.distance(t, t, !1, !0), l = Math.abs(i), u = Math.abs(o), c = l + u, c === 0) {
    this.setRelative(r, r, (s + a) / 2, n, !0);
    return;
  }
  this.setRelative(r, r, (s * u + a * l) / c, n, !0);
};
d2.prototype.setRelative = function(r, e, t, n, s) {
  n = n || this;
  var a = s ? e.xo : e.x, i = s ? e.yo : e.y, o = a + t * n.x, l = i + t * n.y, u = n.normalSlope, c = this.slope, p = r.x, f = r.y;
  r.x = (c * p - u * o + l - f) / (c - u), r.y = c * (r.x - p) + f;
};
d2.prototype.touch = function(r) {
  r.xTouched = !0, r.yTouched = !0;
};
function v2(r, e) {
  var t = Math.sqrt(r * r + e * e);
  return r /= t, e /= t, r === 1 && e === 0 ? Q0 : r === 0 && e === 1 ? o1 : new d2(r, e);
}
function l1(r, e, t, n) {
  this.x = this.xo = Math.round(r * 64) / 64, this.y = this.yo = Math.round(e * 64) / 64, this.lastPointOfContour = t, this.onCurve = n, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = !1, this.yTouched = !1, Object.preventExtensions(this);
}
l1.prototype.nextTouched = function(r) {
  for (var e = this.nextPointOnContour; !r.touched(e) && e !== this; )
    e = e.nextPointOnContour;
  return e;
};
l1.prototype.prevTouched = function(r) {
  for (var e = this.prevPointOnContour; !r.touched(e) && e !== this; )
    e = e.prevPointOnContour;
  return e;
};
var i2 = Object.freeze(new l1(0, 0)), N7 = {
  cvCutIn: 17 / 16,
  // control value cut in
  deltaBase: 9,
  deltaShift: 0.125,
  loop: 1,
  // loops some instructions
  minDis: 1,
  // minimum distance
  autoFlip: !0
};
function g1(r, e) {
  switch (this.env = r, this.stack = [], this.prog = e, r) {
    case "glyf":
      this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;
    /* fall through */
    case "prep":
      this.fv = this.pv = this.dpv = Q0, this.round = Z6;
  }
}
J6.prototype.exec = function(r, e) {
  if (typeof e != "number")
    throw new Error("Point size is not a number!");
  if (!(this._errorState > 2)) {
    var t = this.font, n = this._prepState;
    if (!n || n.ppem !== e) {
      var s = this._fpgmState;
      if (!s) {
        g1.prototype = N7, s = this._fpgmState = new g1("fpgm", t.tables.fpgm), s.funcs = [], s.font = t, exports.DEBUG && (console.log("---EXEC FPGM---"), s.step = -1);
        try {
          k1(s);
        } catch (u) {
          console.log("Hinting error in FPGM:" + u), this._errorState = 3;
          return;
        }
      }
      g1.prototype = s, n = this._prepState = new g1("prep", t.tables.prep), n.ppem = e;
      var a = t.tables.cvt;
      if (a)
        for (var i = n.cvt = new Array(a.length), o = e / t.unitsPerEm, l = 0; l < a.length; l++)
          i[l] = a[l] * o;
      else
        n.cvt = [];
      exports.DEBUG && (console.log("---EXEC PREP---"), n.step = -1);
      try {
        k1(n);
      } catch (u) {
        this._errorState < 2 && console.log("Hinting error in PREP:" + u), this._errorState = 2;
      }
    }
    if (!(this._errorState > 1))
      try {
        return Y6(r, n);
      } catch (u) {
        this._errorState < 1 && (console.log("Hinting error:" + u), console.log("Note: further hinting errors are silenced")), this._errorState = 1;
        return;
      }
  }
};
Y6 = function(r, e) {
  var t = e.ppem / e.font.unitsPerEm, n = t, s = r.components, a, i, o;
  if (g1.prototype = e, !s)
    o = new g1("glyf", r.instructions), exports.DEBUG && (console.log("---EXEC GLYPH---"), o.step = -1), M4(r, o, t, n), i = o.gZone;
  else {
    var l = e.font;
    i = [], a = [];
    for (var u = 0; u < s.length; u++) {
      var c = s[u], p = l.glyphs.get(c.glyphIndex);
      o = new g1("glyf", p.instructions), exports.DEBUG && (console.log("---EXEC COMP " + u + "---"), o.step = -1), M4(p, o, t, n);
      for (var f = Math.round(c.dx * t), d = Math.round(c.dy * n), v = o.gZone, y = o.contours, m = 0; m < v.length; m++) {
        var g = v[m];
        g.xTouched = g.yTouched = !1, g.xo = g.x = g.x + f, g.yo = g.y = g.y + d;
      }
      var C = i.length;
      i.push.apply(i, v);
      for (var S = 0; S < y.length; S++)
        a.push(y[S] + C);
    }
    r.instructions && !o.inhibitGridFit && (o = new g1("glyf", r.instructions), o.gZone = o.z0 = o.z1 = o.z2 = i, o.contours = a, i.push(
      new l1(0, 0),
      new l1(Math.round(r.advanceWidth * t), 0)
    ), exports.DEBUG && (console.log("---EXEC COMPOSITE---"), o.step = -1), k1(o), i.length -= 2);
  }
  return i;
};
M4 = function(r, e, t, n) {
  for (var s = r.points || [], a = s.length, i = e.gZone = e.z0 = e.z1 = e.z2 = [], o = e.contours = [], l, u = 0; u < a; u++)
    l = s[u], i[u] = new l1(
      l.x * t,
      l.y * n,
      l.lastPointOfContour,
      l.onCurve
    );
  for (var c, p, f = 0; f < a; f++)
    l = i[f], c || (c = l, o.push(f)), l.lastPointOfContour ? (l.nextPointOnContour = c, c.prevPointOnContour = l, c = void 0) : (p = i[f + 1], l.nextPointOnContour = p, p.prevPointOnContour = l);
  if (!e.inhibitGridFit) {
    if (exports.DEBUG) {
      console.log("PROCESSING GLYPH", e.stack);
      for (var d = 0; d < a; d++)
        console.log(d, i[d].x, i[d].y);
    }
    if (i.push(
      new l1(0, 0),
      new l1(Math.round(r.advanceWidth * t), 0)
    ), k1(e), i.length -= 2, exports.DEBUG) {
      console.log("FINISHED GLYPH", e.stack);
      for (var v = 0; v < a; v++)
        console.log(v, i[v].x, i[v].y);
    }
  }
};
k1 = function(r) {
  var e = r.prog;
  if (e) {
    var t = e.length, n;
    for (r.ip = 0; r.ip < t; r.ip++) {
      if (exports.DEBUG && r.step++, n = X6[e[r.ip]], !n)
        throw new Error(
          "unknown instruction: 0x" + Number(e[r.ip]).toString(16)
        );
      n(r);
    }
  }
};
function J2(r) {
  for (var e = r.tZone = new Array(r.gZone.length), t = 0; t < e.length; t++)
    e[t] = new l1(0, 0);
}
function Q6(r, e) {
  var t = r.prog, n = r.ip, s = 1, a;
  do
    if (a = t[++n], a === 88)
      s++;
    else if (a === 89)
      s--;
    else if (a === 64)
      n += t[n + 1] + 1;
    else if (a === 65)
      n += 2 * t[n + 1] + 1;
    else if (a >= 176 && a <= 183)
      n += a - 176 + 1;
    else if (a >= 184 && a <= 191)
      n += (a - 184 + 1) * 2;
    else if (e && s === 1 && a === 27)
      break;
  while (s > 0);
  r.ip = n;
}
function y5(r, e) {
  exports.DEBUG && console.log(e.step, "SVTCA[" + r.axis + "]"), e.fv = e.pv = e.dpv = r;
}
function g5(r, e) {
  exports.DEBUG && console.log(e.step, "SPVTCA[" + r.axis + "]"), e.pv = e.dpv = r;
}
function m5(r, e) {
  exports.DEBUG && console.log(e.step, "SFVTCA[" + r.axis + "]"), e.fv = r;
}
function x5(r, e) {
  var t = e.stack, n = t.pop(), s = t.pop(), a = e.z2[n], i = e.z1[s];
  exports.DEBUG && console.log("SPVTL[" + r + "]", n, s);
  var o, l;
  r ? (o = a.y - i.y, l = i.x - a.x) : (o = i.x - a.x, l = i.y - a.y), e.pv = e.dpv = v2(o, l);
}
function b5(r, e) {
  var t = e.stack, n = t.pop(), s = t.pop(), a = e.z2[n], i = e.z1[s];
  exports.DEBUG && console.log("SFVTL[" + r + "]", n, s);
  var o, l;
  r ? (o = a.y - i.y, l = i.x - a.x) : (o = i.x - a.x, l = i.y - a.y), e.fv = v2(o, l);
}
function B7(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "SPVFS[]", t, n), r.pv = r.dpv = v2(n, t);
}
function U7(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "SPVFS[]", t, n), r.fv = v2(n, t);
}
function G7(r) {
  var e = r.stack, t = r.pv;
  exports.DEBUG && console.log(r.step, "GPV[]"), e.push(t.x * 16384), e.push(t.y * 16384);
}
function H7(r) {
  var e = r.stack, t = r.fv;
  exports.DEBUG && console.log(r.step, "GFV[]"), e.push(t.x * 16384), e.push(t.y * 16384);
}
function z7(r) {
  r.fv = r.pv, exports.DEBUG && console.log(r.step, "SFVTPV[]");
}
function V7(r) {
  var e = r.stack, t = e.pop(), n = e.pop(), s = e.pop(), a = e.pop(), i = e.pop(), o = r.z0, l = r.z1, u = o[t], c = o[n], p = l[s], f = l[a], d = r.z2[i];
  exports.DEBUG && console.log("ISECT[], ", t, n, s, a, i);
  var v = u.x, y = u.y, m = c.x, g = c.y, C = p.x, S = p.y, E = f.x, w = f.y, L = (v - m) * (S - w) - (y - g) * (C - E), F = v * g - y * m, A = C * w - S * E;
  d.x = (F * (C - E) - A * (v - m)) / L, d.y = (F * (S - w) - A * (y - g)) / L;
}
function W7(r) {
  r.rp0 = r.stack.pop(), exports.DEBUG && console.log(r.step, "SRP0[]", r.rp0);
}
function X7(r) {
  r.rp1 = r.stack.pop(), exports.DEBUG && console.log(r.step, "SRP1[]", r.rp1);
}
function Y7(r) {
  r.rp2 = r.stack.pop(), exports.DEBUG && console.log(r.step, "SRP2[]", r.rp2);
}
function J7(r) {
  var e = r.stack.pop();
  switch (exports.DEBUG && console.log(r.step, "SZP0[]", e), r.zp0 = e, e) {
    case 0:
      r.tZone || J2(r), r.z0 = r.tZone;
      break;
    case 1:
      r.z0 = r.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function Z7(r) {
  var e = r.stack.pop();
  switch (exports.DEBUG && console.log(r.step, "SZP1[]", e), r.zp1 = e, e) {
    case 0:
      r.tZone || J2(r), r.z1 = r.tZone;
      break;
    case 1:
      r.z1 = r.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function q7(r) {
  var e = r.stack.pop();
  switch (exports.DEBUG && console.log(r.step, "SZP2[]", e), r.zp2 = e, e) {
    case 0:
      r.tZone || J2(r), r.z2 = r.tZone;
      break;
    case 1:
      r.z2 = r.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function Q7(r) {
  var e = r.stack.pop();
  switch (exports.DEBUG && console.log(r.step, "SZPS[]", e), r.zp0 = r.zp1 = r.zp2 = e, e) {
    case 0:
      r.tZone || J2(r), r.z0 = r.z1 = r.z2 = r.tZone;
      break;
    case 1:
      r.z0 = r.z1 = r.z2 = r.gZone;
      break;
    default:
      throw new Error("Invalid zone pointer");
  }
}
function K7(r) {
  r.loop = r.stack.pop(), exports.DEBUG && console.log(r.step, "SLOOP[]", r.loop);
}
function j7(r) {
  exports.DEBUG && console.log(r.step, "RTG[]"), r.round = Z6;
}
function $7(r) {
  exports.DEBUG && console.log(r.step, "RTHG[]"), r.round = R7;
}
function e9(r) {
  var e = r.stack.pop();
  exports.DEBUG && console.log(r.step, "SMD[]", e), r.minDis = e / 64;
}
function t9(r) {
  exports.DEBUG && console.log(r.step, "ELSE[]"), Q6(r, !1);
}
function r9(r) {
  var e = r.stack.pop();
  exports.DEBUG && console.log(r.step, "JMPR[]", e), r.ip += e - 1;
}
function n9(r) {
  var e = r.stack.pop();
  exports.DEBUG && console.log(r.step, "SCVTCI[]", e), r.cvCutIn = e / 64;
}
function s9(r) {
  var e = r.stack;
  exports.DEBUG && console.log(r.step, "DUP[]"), e.push(e[e.length - 1]);
}
function f4(r) {
  exports.DEBUG && console.log(r.step, "POP[]"), r.stack.pop();
}
function a9(r) {
  exports.DEBUG && console.log(r.step, "CLEAR[]"), r.stack.length = 0;
}
function i9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "SWAP[]"), e.push(t), e.push(n);
}
function o9(r) {
  var e = r.stack;
  exports.DEBUG && console.log(r.step, "DEPTH[]"), e.push(e.length);
}
function l9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "LOOPCALL[]", t, n);
  var s = r.ip, a = r.prog;
  r.prog = r.funcs[t];
  for (var i = 0; i < n; i++)
    k1(r), exports.DEBUG && console.log(
      ++r.step,
      i + 1 < n ? "next loopcall" : "done loopcall",
      i
    );
  r.ip = s, r.prog = a;
}
function h9(r) {
  var e = r.stack.pop();
  exports.DEBUG && console.log(r.step, "CALL[]", e);
  var t = r.ip, n = r.prog;
  r.prog = r.funcs[e], k1(r), r.ip = t, r.prog = n, exports.DEBUG && console.log(++r.step, "returning from", e);
}
function u9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "CINDEX[]", t), e.push(e[e.length - t]);
}
function c9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "MINDEX[]", t), e.push(e.splice(e.length - t, 1)[0]);
}
function f9(r) {
  if (r.env !== "fpgm")
    throw new Error("FDEF not allowed here");
  var e = r.stack, t = r.prog, n = r.ip, s = e.pop(), a = n;
  for (exports.DEBUG && console.log(r.step, "FDEF[]", s); t[++n] !== 45; )
    ;
  r.ip = n, r.funcs[s] = t.slice(a + 1, n);
}
function S5(r, e) {
  var t = e.stack.pop(), n = e.z0[t], s = e.fv, a = e.pv;
  exports.DEBUG && console.log(e.step, "MDAP[" + r + "]", t);
  var i = a.distance(n, i2);
  r && (i = e.round(i)), s.setRelative(n, i2, i, a), s.touch(n), e.rp0 = e.rp1 = t;
}
function T5(r, e) {
  var t = e.z2, n = t.length - 2, s, a, i;
  exports.DEBUG && console.log(e.step, "IUP[" + r.axis + "]");
  for (var o = 0; o < n; o++)
    s = t[o], !r.touched(s) && (a = s.prevTouched(r), a !== s && (i = s.nextTouched(r), a === i && r.setRelative(s, s, r.distance(a, a, !1, !0), r, !0), r.interpolate(s, a, i, r)));
}
function E5(r, e) {
  for (var t = e.stack, n = r ? e.rp1 : e.rp2, s = (r ? e.z0 : e.z1)[n], a = e.fv, i = e.pv, o = e.loop, l = e.z2; o--; ) {
    var u = t.pop(), c = l[u], p = i.distance(s, s, !1, !0);
    a.setRelative(c, c, p, i), a.touch(c), exports.DEBUG && console.log(
      e.step,
      (e.loop > 1 ? "loop " + (e.loop - o) + ": " : "") + "SHP[" + (r ? "rp1" : "rp2") + "]",
      u
    );
  }
  e.loop = 1;
}
function A5(r, e) {
  var t = e.stack, n = r ? e.rp1 : e.rp2, s = (r ? e.z0 : e.z1)[n], a = e.fv, i = e.pv, o = t.pop(), l = e.z2[e.contours[o]], u = l;
  exports.DEBUG && console.log(e.step, "SHC[" + r + "]", o);
  var c = i.distance(s, s, !1, !0);
  do
    u !== s && a.setRelative(u, u, c, i), u = u.nextPointOnContour;
  while (u !== l);
}
function C5(r, e) {
  var t = e.stack, n = r ? e.rp1 : e.rp2, s = (r ? e.z0 : e.z1)[n], a = e.fv, i = e.pv, o = t.pop();
  exports.DEBUG && console.log(e.step, "SHZ[" + r + "]", o);
  var l;
  switch (o) {
    case 0:
      l = e.tZone;
      break;
    case 1:
      l = e.gZone;
      break;
    default:
      throw new Error("Invalid zone");
  }
  for (var u, c = i.distance(s, s, !1, !0), p = l.length - 2, f = 0; f < p; f++)
    u = l[f], a.setRelative(u, u, c, i);
}
function p9(r) {
  for (var e = r.stack, t = r.loop, n = r.fv, s = e.pop() / 64, a = r.z2; t--; ) {
    var i = e.pop(), o = a[i];
    exports.DEBUG && console.log(
      r.step,
      (r.loop > 1 ? "loop " + (r.loop - t) + ": " : "") + "SHPIX[]",
      i,
      s
    ), n.setRelative(o, o, s), n.touch(o);
  }
  r.loop = 1;
}
function d9(r) {
  for (var e = r.stack, t = r.rp1, n = r.rp2, s = r.loop, a = r.z0[t], i = r.z1[n], o = r.fv, l = r.dpv, u = r.z2; s--; ) {
    var c = e.pop(), p = u[c];
    exports.DEBUG && console.log(
      r.step,
      (r.loop > 1 ? "loop " + (r.loop - s) + ": " : "") + "IP[]",
      c,
      t,
      "<->",
      n
    ), o.interpolate(p, a, i, l), o.touch(p);
  }
  r.loop = 1;
}
function k5(r, e) {
  var t = e.stack, n = t.pop() / 64, s = t.pop(), a = e.z1[s], i = e.z0[e.rp0], o = e.fv, l = e.pv;
  o.setRelative(a, i, n, l), o.touch(a), exports.DEBUG && console.log(e.step, "MSIRP[" + r + "]", n, s), e.rp1 = e.rp0, e.rp2 = s, r && (e.rp0 = s);
}
function v9(r) {
  for (var e = r.stack, t = r.rp0, n = r.z0[t], s = r.loop, a = r.fv, i = r.pv, o = r.z1; s--; ) {
    var l = e.pop(), u = o[l];
    exports.DEBUG && console.log(
      r.step,
      (r.loop > 1 ? "loop " + (r.loop - s) + ": " : "") + "ALIGNRP[]",
      l
    ), a.setRelative(u, n, 0, i), a.touch(u);
  }
  r.loop = 1;
}
function y9(r) {
  exports.DEBUG && console.log(r.step, "RTDG[]"), r.round = I7;
}
function P5(r, e) {
  var t = e.stack, n = t.pop(), s = t.pop(), a = e.z0[s], i = e.fv, o = e.pv, l = e.cvt[n];
  exports.DEBUG && console.log(
    e.step,
    "MIAP[" + r + "]",
    n,
    "(",
    l,
    ")",
    s
  );
  var u = o.distance(a, i2);
  r && (Math.abs(u - l) < e.cvCutIn && (u = l), u = e.round(u)), i.setRelative(a, i2, u, o), e.zp0 === 0 && (a.xo = a.x, a.yo = a.y), i.touch(a), e.rp0 = e.rp1 = s;
}
function g9(r) {
  var e = r.prog, t = r.ip, n = r.stack, s = e[++t];
  exports.DEBUG && console.log(r.step, "NPUSHB[]", s);
  for (var a = 0; a < s; a++)
    n.push(e[++t]);
  r.ip = t;
}
function m9(r) {
  var e = r.ip, t = r.prog, n = r.stack, s = t[++e];
  exports.DEBUG && console.log(r.step, "NPUSHW[]", s);
  for (var a = 0; a < s; a++) {
    var i = t[++e] << 8 | t[++e];
    i & 32768 && (i = -((i ^ 65535) + 1)), n.push(i);
  }
  r.ip = e;
}
function x9(r) {
  var e = r.stack, t = r.store;
  t || (t = r.store = []);
  var n = e.pop(), s = e.pop();
  exports.DEBUG && console.log(r.step, "WS", n, s), t[s] = n;
}
function b9(r) {
  var e = r.stack, t = r.store, n = e.pop();
  exports.DEBUG && console.log(r.step, "RS", n);
  var s = t && t[n] || 0;
  e.push(s);
}
function S9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "WCVTP", t, n), r.cvt[n] = t / 64;
}
function T9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "RCVT", t), e.push(r.cvt[t] * 64);
}
function w5(r, e) {
  var t = e.stack, n = t.pop(), s = e.z2[n];
  exports.DEBUG && console.log(e.step, "GC[" + r + "]", n), t.push(e.dpv.distance(s, i2, r, !1) * 64);
}
function F5(r, e) {
  var t = e.stack, n = t.pop(), s = t.pop(), a = e.z1[n], i = e.z0[s], o = e.dpv.distance(i, a, r, r);
  exports.DEBUG && console.log(e.step, "MD[" + r + "]", n, s, "->", o), e.stack.push(Math.round(o * 64));
}
function E9(r) {
  exports.DEBUG && console.log(r.step, "MPPEM[]"), r.stack.push(r.ppem);
}
function A9(r) {
  exports.DEBUG && console.log(r.step, "FLIPON[]"), r.autoFlip = !0;
}
function C9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "LT[]", t, n), e.push(n < t ? 1 : 0);
}
function k9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "LTEQ[]", t, n), e.push(n <= t ? 1 : 0);
}
function P9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "GT[]", t, n), e.push(n > t ? 1 : 0);
}
function w9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "GTEQ[]", t, n), e.push(n >= t ? 1 : 0);
}
function F9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "EQ[]", t, n), e.push(t === n ? 1 : 0);
}
function L9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "NEQ[]", t, n), e.push(t !== n ? 1 : 0);
}
function D9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "ODD[]", t), e.push(Math.trunc(t) % 2 ? 1 : 0);
}
function O9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "EVEN[]", t), e.push(Math.trunc(t) % 2 ? 0 : 1);
}
function I9(r) {
  var e = r.stack.pop();
  exports.DEBUG && console.log(r.step, "IF[]", e), e || (Q6(r, !0), exports.DEBUG && console.log(r.step, "EIF[]"));
}
function R9(r) {
  exports.DEBUG && console.log(r.step, "EIF[]");
}
function M9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "AND[]", t, n), e.push(t && n ? 1 : 0);
}
function _9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "OR[]", t, n), e.push(t || n ? 1 : 0);
}
function N9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "NOT[]", t), e.push(t ? 0 : 1);
}
function p4(r, e) {
  var t = e.stack, n = t.pop(), s = e.fv, a = e.pv, i = e.ppem, o = e.deltaBase + (r - 1) * 16, l = e.deltaShift, u = e.z0;
  exports.DEBUG && console.log(e.step, "DELTAP[" + r + "]", n, t);
  for (var c = 0; c < n; c++) {
    var p = t.pop(), f = t.pop(), d = o + ((f & 240) >> 4);
    if (d === i) {
      var v = (f & 15) - 8;
      v >= 0 && v++, exports.DEBUG && console.log(e.step, "DELTAPFIX", p, "by", v * l);
      var y = u[p];
      s.setRelative(y, y, v * l, a);
    }
  }
}
function B9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "SDB[]", t), r.deltaBase = t;
}
function U9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "SDS[]", t), r.deltaShift = Math.pow(0.5, t);
}
function G9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "ADD[]", t, n), e.push(n + t);
}
function H9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "SUB[]", t, n), e.push(n - t);
}
function z9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "DIV[]", t, n), e.push(n * 64 / t);
}
function V9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "MUL[]", t, n), e.push(n * t / 64);
}
function W9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "ABS[]", t), e.push(Math.abs(t));
}
function X9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "NEG[]", t), e.push(-t);
}
function Y9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "FLOOR[]", t), e.push(Math.floor(t / 64) * 64);
}
function J9(r) {
  var e = r.stack, t = e.pop();
  exports.DEBUG && console.log(r.step, "CEILING[]", t), e.push(Math.ceil(t / 64) * 64);
}
function O2(r, e) {
  var t = e.stack, n = t.pop();
  exports.DEBUG && console.log(e.step, "ROUND[]"), t.push(e.round(n / 64) * 64);
}
function Z9(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "WCVTF[]", t, n), r.cvt[n] = t * r.ppem / r.font.unitsPerEm;
}
function d4(r, e) {
  var t = e.stack, n = t.pop(), s = e.ppem, a = e.deltaBase + (r - 1) * 16, i = e.deltaShift;
  exports.DEBUG && console.log(e.step, "DELTAC[" + r + "]", n, t);
  for (var o = 0; o < n; o++) {
    var l = t.pop(), u = t.pop(), c = a + ((u & 240) >> 4);
    if (c === s) {
      var p = (u & 15) - 8;
      p >= 0 && p++;
      var f = p * i;
      exports.DEBUG && console.log(e.step, "DELTACFIX", l, "by", f), e.cvt[l] += f;
    }
  }
}
function q9(r) {
  var e = r.stack.pop();
  exports.DEBUG && console.log(r.step, "SROUND[]", e), r.round = q6;
  var t;
  switch (e & 192) {
    case 0:
      t = 0.5;
      break;
    case 64:
      t = 1;
      break;
    case 128:
      t = 2;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  switch (r.srPeriod = t, e & 48) {
    case 0:
      r.srPhase = 0;
      break;
    case 16:
      r.srPhase = 0.25 * t;
      break;
    case 32:
      r.srPhase = 0.5 * t;
      break;
    case 48:
      r.srPhase = 0.75 * t;
      break;
    default:
      throw new Error("invalid SROUND value");
  }
  e &= 15, e === 0 ? r.srThreshold = 0 : r.srThreshold = (e / 8 - 0.5) * t;
}
function Q9(r) {
  var e = r.stack.pop();
  exports.DEBUG && console.log(r.step, "S45ROUND[]", e), r.round = q6;
  var t;
  switch (e & 192) {
    case 0:
      t = Math.sqrt(2) / 2;
      break;
    case 64:
      t = Math.sqrt(2);
      break;
    case 128:
      t = 2 * Math.sqrt(2);
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  switch (r.srPeriod = t, e & 48) {
    case 0:
      r.srPhase = 0;
      break;
    case 16:
      r.srPhase = 0.25 * t;
      break;
    case 32:
      r.srPhase = 0.5 * t;
      break;
    case 48:
      r.srPhase = 0.75 * t;
      break;
    default:
      throw new Error("invalid S45ROUND value");
  }
  e &= 15, e === 0 ? r.srThreshold = 0 : r.srThreshold = (e / 8 - 0.5) * t;
}
function K9(r) {
  exports.DEBUG && console.log(r.step, "ROFF[]"), r.round = O7;
}
function j9(r) {
  exports.DEBUG && console.log(r.step, "RUTG[]"), r.round = M7;
}
function $9(r) {
  exports.DEBUG && console.log(r.step, "RDTG[]"), r.round = _7;
}
function er(r) {
  var e = r.stack.pop();
  exports.DEBUG && console.log(r.step, "SCANCTRL[]", e);
}
function L5(r, e) {
  var t = e.stack, n = t.pop(), s = t.pop(), a = e.z2[n], i = e.z1[s];
  exports.DEBUG && console.log(e.step, "SDPVTL[" + r + "]", n, s);
  var o, l;
  r ? (o = a.y - i.y, l = i.x - a.x) : (o = i.x - a.x, l = i.y - a.y), e.dpv = v2(o, l);
}
function tr(r) {
  var e = r.stack, t = e.pop(), n = 0;
  exports.DEBUG && console.log(r.step, "GETINFO[]", t), t & 1 && (n = 35), t & 32 && (n |= 4096), e.push(n);
}
function rr(r) {
  var e = r.stack, t = e.pop(), n = e.pop(), s = e.pop();
  exports.DEBUG && console.log(r.step, "ROLL[]"), e.push(n), e.push(t), e.push(s);
}
function nr(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "MAX[]", t, n), e.push(Math.max(n, t));
}
function sr(r) {
  var e = r.stack, t = e.pop(), n = e.pop();
  exports.DEBUG && console.log(r.step, "MIN[]", t, n), e.push(Math.min(n, t));
}
function ar(r) {
  var e = r.stack.pop();
  exports.DEBUG && console.log(r.step, "SCANTYPE[]", e);
}
function ir(r) {
  var e = r.stack.pop(), t = r.stack.pop();
  switch (exports.DEBUG && console.log(r.step, "INSTCTRL[]", e, t), e) {
    case 1:
      r.inhibitGridFit = !!t;
      return;
    case 2:
      r.ignoreCvt = !!t;
      return;
    default:
      throw new Error("invalid INSTCTRL[] selector");
  }
}
function p1(r, e) {
  var t = e.stack, n = e.prog, s = e.ip;
  exports.DEBUG && console.log(e.step, "PUSHB[" + r + "]");
  for (var a = 0; a < r; a++)
    t.push(n[++s]);
  e.ip = s;
}
function d1(r, e) {
  var t = e.ip, n = e.prog, s = e.stack;
  exports.DEBUG && console.log(e.ip, "PUSHW[" + r + "]");
  for (var a = 0; a < r; a++) {
    var i = n[++t] << 8 | n[++t];
    i & 32768 && (i = -((i ^ 65535) + 1)), s.push(i);
  }
  e.ip = t;
}
function U(r, e, t, n, s, a) {
  var i = a.stack, o = r && i.pop(), l = i.pop(), u = a.rp0, c = a.z0[u], p = a.z1[l], f = a.minDis, d = a.fv, v = a.dpv, y, m, g, C;
  m = y = v.distance(p, c, !0, !0), g = m >= 0 ? 1 : -1, m = Math.abs(m), r && (C = a.cvt[o], n && Math.abs(m - C) < a.cvCutIn && (m = C)), t && m < f && (m = f), n && (m = a.round(m)), d.setRelative(p, c, g * m, v), d.touch(p), exports.DEBUG && console.log(
    a.step,
    (r ? "MIRP[" : "MDRP[") + (e ? "M" : "m") + (t ? ">" : "_") + (n ? "R" : "_") + (s === 0 ? "Gr" : s === 1 ? "Bl" : s === 2 ? "Wh" : "") + "]",
    r ? o + "(" + a.cvt[o] + "," + C + ")" : "",
    l,
    "(d =",
    y,
    "->",
    g * m,
    ")"
  ), a.rp1 = a.rp0, a.rp2 = l, e && (a.rp0 = l);
}
X6 = [
  /* 0x00 */
  y5.bind(void 0, o1),
  /* 0x01 */
  y5.bind(void 0, Q0),
  /* 0x02 */
  g5.bind(void 0, o1),
  /* 0x03 */
  g5.bind(void 0, Q0),
  /* 0x04 */
  m5.bind(void 0, o1),
  /* 0x05 */
  m5.bind(void 0, Q0),
  /* 0x06 */
  x5.bind(void 0, 0),
  /* 0x07 */
  x5.bind(void 0, 1),
  /* 0x08 */
  b5.bind(void 0, 0),
  /* 0x09 */
  b5.bind(void 0, 1),
  /* 0x0A */
  B7,
  /* 0x0B */
  U7,
  /* 0x0C */
  G7,
  /* 0x0D */
  H7,
  /* 0x0E */
  z7,
  /* 0x0F */
  V7,
  /* 0x10 */
  W7,
  /* 0x11 */
  X7,
  /* 0x12 */
  Y7,
  /* 0x13 */
  J7,
  /* 0x14 */
  Z7,
  /* 0x15 */
  q7,
  /* 0x16 */
  Q7,
  /* 0x17 */
  K7,
  /* 0x18 */
  j7,
  /* 0x19 */
  $7,
  /* 0x1A */
  e9,
  /* 0x1B */
  t9,
  /* 0x1C */
  r9,
  /* 0x1D */
  n9,
  /* 0x1E */
  void 0,
  // TODO SSWCI
  /* 0x1F */
  void 0,
  // TODO SSW
  /* 0x20 */
  s9,
  /* 0x21 */
  f4,
  /* 0x22 */
  a9,
  /* 0x23 */
  i9,
  /* 0x24 */
  o9,
  /* 0x25 */
  u9,
  /* 0x26 */
  c9,
  /* 0x27 */
  void 0,
  // TODO ALIGNPTS
  /* 0x28 */
  void 0,
  /* 0x29 */
  void 0,
  // TODO UTP
  /* 0x2A */
  l9,
  /* 0x2B */
  h9,
  /* 0x2C */
  f9,
  /* 0x2D */
  void 0,
  // ENDF (eaten by FDEF)
  /* 0x2E */
  S5.bind(void 0, 0),
  /* 0x2F */
  S5.bind(void 0, 1),
  /* 0x30 */
  T5.bind(void 0, o1),
  /* 0x31 */
  T5.bind(void 0, Q0),
  /* 0x32 */
  E5.bind(void 0, 0),
  /* 0x33 */
  E5.bind(void 0, 1),
  /* 0x34 */
  A5.bind(void 0, 0),
  /* 0x35 */
  A5.bind(void 0, 1),
  /* 0x36 */
  C5.bind(void 0, 0),
  /* 0x37 */
  C5.bind(void 0, 1),
  /* 0x38 */
  p9,
  /* 0x39 */
  d9,
  /* 0x3A */
  k5.bind(void 0, 0),
  /* 0x3B */
  k5.bind(void 0, 1),
  /* 0x3C */
  v9,
  /* 0x3D */
  y9,
  /* 0x3E */
  P5.bind(void 0, 0),
  /* 0x3F */
  P5.bind(void 0, 1),
  /* 0x40 */
  g9,
  /* 0x41 */
  m9,
  /* 0x42 */
  x9,
  /* 0x43 */
  b9,
  /* 0x44 */
  S9,
  /* 0x45 */
  T9,
  /* 0x46 */
  w5.bind(void 0, 0),
  /* 0x47 */
  w5.bind(void 0, 1),
  /* 0x48 */
  void 0,
  // TODO SCFS
  /* 0x49 */
  F5.bind(void 0, 0),
  /* 0x4A */
  F5.bind(void 0, 1),
  /* 0x4B */
  E9,
  /* 0x4C */
  void 0,
  // TODO MPS
  /* 0x4D */
  A9,
  /* 0x4E */
  void 0,
  // TODO FLIPOFF
  /* 0x4F */
  void 0,
  // TODO DEBUG
  /* 0x50 */
  C9,
  /* 0x51 */
  k9,
  /* 0x52 */
  P9,
  /* 0x53 */
  w9,
  /* 0x54 */
  F9,
  /* 0x55 */
  L9,
  /* 0x56 */
  D9,
  /* 0x57 */
  O9,
  /* 0x58 */
  I9,
  /* 0x59 */
  R9,
  /* 0x5A */
  M9,
  /* 0x5B */
  _9,
  /* 0x5C */
  N9,
  /* 0x5D */
  p4.bind(void 0, 1),
  /* 0x5E */
  B9,
  /* 0x5F */
  U9,
  /* 0x60 */
  G9,
  /* 0x61 */
  H9,
  /* 0x62 */
  z9,
  /* 0x63 */
  V9,
  /* 0x64 */
  W9,
  /* 0x65 */
  X9,
  /* 0x66 */
  Y9,
  /* 0x67 */
  J9,
  /* 0x68 */
  O2.bind(void 0, 0),
  /* 0x69 */
  O2.bind(void 0, 1),
  /* 0x6A */
  O2.bind(void 0, 2),
  /* 0x6B */
  O2.bind(void 0, 3),
  /* 0x6C */
  void 0,
  // TODO NROUND[ab]
  /* 0x6D */
  void 0,
  // TODO NROUND[ab]
  /* 0x6E */
  void 0,
  // TODO NROUND[ab]
  /* 0x6F */
  void 0,
  // TODO NROUND[ab]
  /* 0x70 */
  Z9,
  /* 0x71 */
  p4.bind(void 0, 2),
  /* 0x72 */
  p4.bind(void 0, 3),
  /* 0x73 */
  d4.bind(void 0, 1),
  /* 0x74 */
  d4.bind(void 0, 2),
  /* 0x75 */
  d4.bind(void 0, 3),
  /* 0x76 */
  q9,
  /* 0x77 */
  Q9,
  /* 0x78 */
  void 0,
  // TODO JROT[]
  /* 0x79 */
  void 0,
  // TODO JROF[]
  /* 0x7A */
  K9,
  /* 0x7B */
  void 0,
  /* 0x7C */
  j9,
  /* 0x7D */
  $9,
  /* 0x7E */
  f4,
  // actually SANGW, supposed to do only a pop though
  /* 0x7F */
  f4,
  // actually AA, supposed to do only a pop though
  /* 0x80 */
  void 0,
  // TODO FLIPPT
  /* 0x81 */
  void 0,
  // TODO FLIPRGON
  /* 0x82 */
  void 0,
  // TODO FLIPRGOFF
  /* 0x83 */
  void 0,
  /* 0x84 */
  void 0,
  /* 0x85 */
  er,
  /* 0x86 */
  L5.bind(void 0, 0),
  /* 0x87 */
  L5.bind(void 0, 1),
  /* 0x88 */
  tr,
  /* 0x89 */
  void 0,
  // TODO IDEF
  /* 0x8A */
  rr,
  /* 0x8B */
  nr,
  /* 0x8C */
  sr,
  /* 0x8D */
  ar,
  /* 0x8E */
  ir,
  /* 0x8F */
  void 0,
  /* 0x90 */
  void 0,
  /* 0x91 */
  void 0,
  /* 0x92 */
  void 0,
  /* 0x93 */
  void 0,
  /* 0x94 */
  void 0,
  /* 0x95 */
  void 0,
  /* 0x96 */
  void 0,
  /* 0x97 */
  void 0,
  /* 0x98 */
  void 0,
  /* 0x99 */
  void 0,
  /* 0x9A */
  void 0,
  /* 0x9B */
  void 0,
  /* 0x9C */
  void 0,
  /* 0x9D */
  void 0,
  /* 0x9E */
  void 0,
  /* 0x9F */
  void 0,
  /* 0xA0 */
  void 0,
  /* 0xA1 */
  void 0,
  /* 0xA2 */
  void 0,
  /* 0xA3 */
  void 0,
  /* 0xA4 */
  void 0,
  /* 0xA5 */
  void 0,
  /* 0xA6 */
  void 0,
  /* 0xA7 */
  void 0,
  /* 0xA8 */
  void 0,
  /* 0xA9 */
  void 0,
  /* 0xAA */
  void 0,
  /* 0xAB */
  void 0,
  /* 0xAC */
  void 0,
  /* 0xAD */
  void 0,
  /* 0xAE */
  void 0,
  /* 0xAF */
  void 0,
  /* 0xB0 */
  p1.bind(void 0, 1),
  /* 0xB1 */
  p1.bind(void 0, 2),
  /* 0xB2 */
  p1.bind(void 0, 3),
  /* 0xB3 */
  p1.bind(void 0, 4),
  /* 0xB4 */
  p1.bind(void 0, 5),
  /* 0xB5 */
  p1.bind(void 0, 6),
  /* 0xB6 */
  p1.bind(void 0, 7),
  /* 0xB7 */
  p1.bind(void 0, 8),
  /* 0xB8 */
  d1.bind(void 0, 1),
  /* 0xB9 */
  d1.bind(void 0, 2),
  /* 0xBA */
  d1.bind(void 0, 3),
  /* 0xBB */
  d1.bind(void 0, 4),
  /* 0xBC */
  d1.bind(void 0, 5),
  /* 0xBD */
  d1.bind(void 0, 6),
  /* 0xBE */
  d1.bind(void 0, 7),
  /* 0xBF */
  d1.bind(void 0, 8),
  /* 0xC0 */
  U.bind(void 0, 0, 0, 0, 0, 0),
  /* 0xC1 */
  U.bind(void 0, 0, 0, 0, 0, 1),
  /* 0xC2 */
  U.bind(void 0, 0, 0, 0, 0, 2),
  /* 0xC3 */
  U.bind(void 0, 0, 0, 0, 0, 3),
  /* 0xC4 */
  U.bind(void 0, 0, 0, 0, 1, 0),
  /* 0xC5 */
  U.bind(void 0, 0, 0, 0, 1, 1),
  /* 0xC6 */
  U.bind(void 0, 0, 0, 0, 1, 2),
  /* 0xC7 */
  U.bind(void 0, 0, 0, 0, 1, 3),
  /* 0xC8 */
  U.bind(void 0, 0, 0, 1, 0, 0),
  /* 0xC9 */
  U.bind(void 0, 0, 0, 1, 0, 1),
  /* 0xCA */
  U.bind(void 0, 0, 0, 1, 0, 2),
  /* 0xCB */
  U.bind(void 0, 0, 0, 1, 0, 3),
  /* 0xCC */
  U.bind(void 0, 0, 0, 1, 1, 0),
  /* 0xCD */
  U.bind(void 0, 0, 0, 1, 1, 1),
  /* 0xCE */
  U.bind(void 0, 0, 0, 1, 1, 2),
  /* 0xCF */
  U.bind(void 0, 0, 0, 1, 1, 3),
  /* 0xD0 */
  U.bind(void 0, 0, 1, 0, 0, 0),
  /* 0xD1 */
  U.bind(void 0, 0, 1, 0, 0, 1),
  /* 0xD2 */
  U.bind(void 0, 0, 1, 0, 0, 2),
  /* 0xD3 */
  U.bind(void 0, 0, 1, 0, 0, 3),
  /* 0xD4 */
  U.bind(void 0, 0, 1, 0, 1, 0),
  /* 0xD5 */
  U.bind(void 0, 0, 1, 0, 1, 1),
  /* 0xD6 */
  U.bind(void 0, 0, 1, 0, 1, 2),
  /* 0xD7 */
  U.bind(void 0, 0, 1, 0, 1, 3),
  /* 0xD8 */
  U.bind(void 0, 0, 1, 1, 0, 0),
  /* 0xD9 */
  U.bind(void 0, 0, 1, 1, 0, 1),
  /* 0xDA */
  U.bind(void 0, 0, 1, 1, 0, 2),
  /* 0xDB */
  U.bind(void 0, 0, 1, 1, 0, 3),
  /* 0xDC */
  U.bind(void 0, 0, 1, 1, 1, 0),
  /* 0xDD */
  U.bind(void 0, 0, 1, 1, 1, 1),
  /* 0xDE */
  U.bind(void 0, 0, 1, 1, 1, 2),
  /* 0xDF */
  U.bind(void 0, 0, 1, 1, 1, 3),
  /* 0xE0 */
  U.bind(void 0, 1, 0, 0, 0, 0),
  /* 0xE1 */
  U.bind(void 0, 1, 0, 0, 0, 1),
  /* 0xE2 */
  U.bind(void 0, 1, 0, 0, 0, 2),
  /* 0xE3 */
  U.bind(void 0, 1, 0, 0, 0, 3),
  /* 0xE4 */
  U.bind(void 0, 1, 0, 0, 1, 0),
  /* 0xE5 */
  U.bind(void 0, 1, 0, 0, 1, 1),
  /* 0xE6 */
  U.bind(void 0, 1, 0, 0, 1, 2),
  /* 0xE7 */
  U.bind(void 0, 1, 0, 0, 1, 3),
  /* 0xE8 */
  U.bind(void 0, 1, 0, 1, 0, 0),
  /* 0xE9 */
  U.bind(void 0, 1, 0, 1, 0, 1),
  /* 0xEA */
  U.bind(void 0, 1, 0, 1, 0, 2),
  /* 0xEB */
  U.bind(void 0, 1, 0, 1, 0, 3),
  /* 0xEC */
  U.bind(void 0, 1, 0, 1, 1, 0),
  /* 0xED */
  U.bind(void 0, 1, 0, 1, 1, 1),
  /* 0xEE */
  U.bind(void 0, 1, 0, 1, 1, 2),
  /* 0xEF */
  U.bind(void 0, 1, 0, 1, 1, 3),
  /* 0xF0 */
  U.bind(void 0, 1, 1, 0, 0, 0),
  /* 0xF1 */
  U.bind(void 0, 1, 1, 0, 0, 1),
  /* 0xF2 */
  U.bind(void 0, 1, 1, 0, 0, 2),
  /* 0xF3 */
  U.bind(void 0, 1, 1, 0, 0, 3),
  /* 0xF4 */
  U.bind(void 0, 1, 1, 0, 1, 0),
  /* 0xF5 */
  U.bind(void 0, 1, 1, 0, 1, 1),
  /* 0xF6 */
  U.bind(void 0, 1, 1, 0, 1, 2),
  /* 0xF7 */
  U.bind(void 0, 1, 1, 0, 1, 3),
  /* 0xF8 */
  U.bind(void 0, 1, 1, 1, 0, 0),
  /* 0xF9 */
  U.bind(void 0, 1, 1, 1, 0, 1),
  /* 0xFA */
  U.bind(void 0, 1, 1, 1, 0, 2),
  /* 0xFB */
  U.bind(void 0, 1, 1, 1, 0, 3),
  /* 0xFC */
  U.bind(void 0, 1, 1, 1, 1, 0),
  /* 0xFD */
  U.bind(void 0, 1, 1, 1, 1, 1),
  /* 0xFE */
  U.bind(void 0, 1, 1, 1, 1, 2),
  /* 0xFF */
  U.bind(void 0, 1, 1, 1, 1, 3)
];
function z1(r) {
  this.char = r, this.state = {}, this.activeState = null;
}
function pe(r, e, t) {
  this.contextName = t, this.startIndex = r, this.endOffset = e;
}
function or(r, e, t) {
  this.contextName = r, this.openRange = null, this.ranges = [], this.checkStart = e, this.checkEnd = t;
}
function z0(r, e) {
  this.context = r, this.index = e, this.length = r.length, this.current = r[e], this.backtrack = r.slice(0, e), this.lookahead = r.slice(e + 1);
}
function Z2(r) {
  this.eventId = r, this.subscribers = [];
}
function lr(r) {
  var e = this, t = [
    "start",
    "end",
    "next",
    "newToken",
    "contextStart",
    "contextEnd",
    "insertToken",
    "removeToken",
    "removeRange",
    "replaceToken",
    "replaceRange",
    "composeRUD",
    "updateContextsRanges"
  ];
  t.forEach(function(s) {
    Object.defineProperty(e.events, s, {
      value: new Z2(s)
    });
  }), r && t.forEach(function(s) {
    var a = r[s];
    typeof a == "function" && e.events[s].subscribe(a);
  });
  var n = [
    "insertToken",
    "removeToken",
    "removeRange",
    "replaceToken",
    "replaceRange",
    "composeRUD"
  ];
  n.forEach(function(s) {
    e.events[s].subscribe(
      e.updateContextsRanges
    );
  });
}
function u0(r) {
  this.tokens = [], this.registeredContexts = {}, this.contextCheckers = [], this.events = {}, this.registeredModifiers = [], lr.call(this, r);
}
z1.prototype.setState = function(r, e) {
  return this.state[r] = e, this.activeState = { key: r, value: this.state[r] }, this.activeState;
};
z1.prototype.getState = function(r) {
  return this.state[r] || null;
};
u0.prototype.inboundIndex = function(r) {
  return r >= 0 && r < this.tokens.length;
};
u0.prototype.composeRUD = function(r) {
  var e = this, t = !0, n = r.map(function(a) {
    return e[a[0]].apply(e, a.slice(1).concat(t));
  }), s = function(a) {
    return typeof a == "object" && a.hasOwnProperty("FAIL");
  };
  if (n.every(s))
    return {
      FAIL: "composeRUD: one or more operations hasn't completed successfully",
      report: n.filter(s)
    };
  this.dispatch("composeRUD", [n.filter(function(a) {
    return !s(a);
  })]);
};
u0.prototype.replaceRange = function(r, e, t, n) {
  e = e !== null ? e : this.tokens.length;
  var s = t.every(function(i) {
    return i instanceof z1;
  });
  if (!isNaN(r) && this.inboundIndex(r) && s) {
    var a = this.tokens.splice.apply(
      this.tokens,
      [r, e].concat(t)
    );
    return n || this.dispatch("replaceToken", [r, e, t]), [a, t];
  } else
    return { FAIL: "replaceRange: invalid tokens or startIndex." };
};
u0.prototype.replaceToken = function(r, e, t) {
  if (!isNaN(r) && this.inboundIndex(r) && e instanceof z1) {
    var n = this.tokens.splice(r, 1, e);
    return t || this.dispatch("replaceToken", [r, e]), [n[0], e];
  } else
    return { FAIL: "replaceToken: invalid token or index." };
};
u0.prototype.removeRange = function(r, e, t) {
  e = isNaN(e) ? this.tokens.length : e;
  var n = this.tokens.splice(r, e);
  return t || this.dispatch("removeRange", [n, r, e]), n;
};
u0.prototype.removeToken = function(r, e) {
  if (!isNaN(r) && this.inboundIndex(r)) {
    var t = this.tokens.splice(r, 1);
    return e || this.dispatch("removeToken", [t, r]), t;
  } else
    return { FAIL: "removeToken: invalid token index." };
};
u0.prototype.insertToken = function(r, e, t) {
  var n = r.every(
    function(s) {
      return s instanceof z1;
    }
  );
  return n ? (this.tokens.splice.apply(
    this.tokens,
    [e, 0].concat(r)
  ), t || this.dispatch("insertToken", [r, e]), r) : { FAIL: "insertToken: invalid token(s)." };
};
u0.prototype.registerModifier = function(r, e, t) {
  this.events.newToken.subscribe(function(n, s) {
    var a = [n, s], i = e === null || e.apply(this, a) === !0, o = [n, s];
    if (i) {
      var l = t.apply(this, o);
      n.setState(r, l);
    }
  }), this.registeredModifiers.push(r);
};
Z2.prototype.subscribe = function(r) {
  return typeof r == "function" ? this.subscribers.push(r) - 1 : { FAIL: "invalid '" + this.eventId + "' event handler" };
};
Z2.prototype.unsubscribe = function(r) {
  this.subscribers.splice(r, 1);
};
z0.prototype.setCurrentIndex = function(r) {
  this.index = r, this.current = this.context[r], this.backtrack = this.context.slice(0, r), this.lookahead = this.context.slice(r + 1);
};
z0.prototype.get = function(r) {
  switch (!0) {
    case r === 0:
      return this.current;
    case (r < 0 && Math.abs(r) <= this.backtrack.length):
      return this.backtrack.slice(r)[0];
    case (r > 0 && r <= this.lookahead.length):
      return this.lookahead[r - 1];
    default:
      return null;
  }
};
u0.prototype.rangeToText = function(r) {
  if (r instanceof pe)
    return this.getRangeTokens(r).map(function(e) {
      return e.char;
    }).join("");
};
u0.prototype.getText = function() {
  return this.tokens.map(function(r) {
    return r.char;
  }).join("");
};
u0.prototype.getContext = function(r) {
  var e = this.registeredContexts[r];
  return e || null;
};
u0.prototype.on = function(r, e) {
  var t = this.events[r];
  return t ? t.subscribe(e) : null;
};
u0.prototype.dispatch = function(r, e) {
  var t = this, n = this.events[r];
  n instanceof Z2 && n.subscribers.forEach(function(s) {
    s.apply(t, e || []);
  });
};
u0.prototype.registerContextChecker = function(r, e, t) {
  if (this.getContext(r))
    return {
      FAIL: "context name '" + r + "' is already registered."
    };
  if (typeof e != "function")
    return {
      FAIL: "missing context start check."
    };
  if (typeof t != "function")
    return {
      FAIL: "missing context end check."
    };
  var n = new or(
    r,
    e,
    t
  );
  return this.registeredContexts[r] = n, this.contextCheckers.push(n), n;
};
u0.prototype.getRangeTokens = function(r) {
  var e = r.startIndex + r.endOffset;
  return [].concat(
    this.tokens.slice(r.startIndex, e)
  );
};
u0.prototype.getContextRanges = function(r) {
  var e = this.getContext(r);
  return e ? e.ranges : { FAIL: "context checker '" + r + "' is not registered." };
};
u0.prototype.resetContextsRanges = function() {
  var r = this.registeredContexts;
  for (var e in r)
    if (r.hasOwnProperty(e)) {
      var t = r[e];
      t.ranges = [];
    }
};
u0.prototype.updateContextsRanges = function() {
  this.resetContextsRanges();
  for (var r = this.tokens.map(function(n) {
    return n.char;
  }), e = 0; e < r.length; e++) {
    var t = new z0(r, e);
    this.runContextCheck(t);
  }
  this.dispatch("updateContextsRanges", [this.registeredContexts]);
};
u0.prototype.setEndOffset = function(r, e) {
  var t = this.getContext(e).openRange.startIndex, n = new pe(t, r, e), s = this.getContext(e).ranges;
  return n.rangeId = e + "." + s.length, s.push(n), this.getContext(e).openRange = null, n;
};
u0.prototype.runContextCheck = function(r) {
  var e = this, t = r.index;
  this.contextCheckers.forEach(function(n) {
    var s = n.contextName, a = e.getContext(s).openRange;
    if (!a && n.checkStart(r) && (a = new pe(t, null, s), e.getContext(s).openRange = a, e.dispatch("contextStart", [s, t])), a && n.checkEnd(r)) {
      var i = t - a.startIndex + 1, o = e.setEndOffset(i, s);
      e.dispatch("contextEnd", [s, o]);
    }
  });
};
u0.prototype.tokenize = function(r) {
  this.tokens = [], this.resetContextsRanges();
  var e = Array.from(r);
  this.dispatch("start");
  for (var t = 0; t < e.length; t++) {
    var n = e[t], s = new z0(e, t);
    this.dispatch("next", [s]), this.runContextCheck(s);
    var a = new z1(n);
    this.tokens.push(a), this.dispatch("newToken", [a, s]);
  }
  return this.dispatch("end", [this.tokens]), this.tokens;
};
function m1(r) {
  return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(r);
}
function K6(r) {
  return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(r);
}
function x1(r) {
  return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(r);
}
function _2(r) {
  return /[A-z]/.test(r);
}
function hr(r) {
  return /\s/.test(r);
}
function I0(r) {
  this.font = r, this.features = {};
}
function E1(r) {
  this.id = r.id, this.tag = r.tag, this.substitution = r.substitution;
}
function y2(r, e) {
  if (!r)
    return -1;
  switch (e.format) {
    case 1:
      return e.glyphs.indexOf(r);
    case 2:
      for (var t = e.ranges, n = 0; n < t.length; n++) {
        var s = t[n];
        if (r >= s.start && r <= s.end) {
          var a = r - s.start;
          return s.index + a;
        }
      }
      break;
    default:
      return -1;
  }
  return -1;
}
function ur(r, e) {
  var t = y2(r, e.coverage);
  return t === -1 ? null : r + e.deltaGlyphId;
}
function cr(r, e) {
  var t = y2(r, e.coverage);
  return t === -1 ? null : e.substitute[t];
}
function v4(r, e) {
  for (var t = [], n = 0; n < r.length; n++) {
    var s = r[n], a = e.current;
    a = Array.isArray(a) ? a[0] : a;
    var i = y2(a, s);
    i !== -1 && t.push(i);
  }
  return t.length !== r.length ? -1 : t;
}
function fr(r, e) {
  var t = e.inputCoverage.length + e.lookaheadCoverage.length + e.backtrackCoverage.length;
  if (r.context.length < t)
    return [];
  var n = v4(
    e.inputCoverage,
    r
  );
  if (n === -1)
    return [];
  var s = e.inputCoverage.length - 1;
  if (r.lookahead.length < e.lookaheadCoverage.length)
    return [];
  for (var a = r.lookahead.slice(s); a.length && x1(a[0].char); )
    a.shift();
  var i = new z0(a, 0), o = v4(
    e.lookaheadCoverage,
    i
  ), l = [].concat(r.backtrack);
  for (l.reverse(); l.length && x1(l[0].char); )
    l.shift();
  if (l.length < e.backtrackCoverage.length)
    return [];
  var u = new z0(l, 0), c = v4(
    e.backtrackCoverage,
    u
  ), p = n.length === e.inputCoverage.length && o.length === e.lookaheadCoverage.length && c.length === e.backtrackCoverage.length, f = [];
  if (p)
    for (var d = 0; d < e.lookupRecords.length; d++)
      for (var v = e.lookupRecords[d], y = v.lookupListIndex, m = this.getLookupByIndex(y), g = 0; g < m.subtables.length; g++) {
        var C = m.subtables[g], S = this.getLookupMethod(m, C), E = this.getSubstitutionType(m, C);
        if (E === "12")
          for (var w = 0; w < n.length; w++) {
            var L = r.get(w), F = S(L);
            F && f.push(F);
          }
      }
  return f;
}
function pr(r, e) {
  var t = r.current, n = y2(t, e.coverage);
  if (n === -1)
    return null;
  for (var s, a = e.ligatureSets[n], i = 0; i < a.length; i++) {
    s = a[i];
    for (var o = 0; o < s.components.length; o++) {
      var l = r.lookahead[o], u = s.components[o];
      if (l !== u)
        break;
      if (o === s.components.length - 1)
        return s;
    }
  }
  return null;
}
function dr(r, e) {
  var t = y2(r, e.coverage);
  return t === -1 ? null : e.sequences[t];
}
I0.prototype.getDefaultScriptFeaturesIndexes = function() {
  for (var r = this.font.tables.gsub.scripts, e = 0; e < r.length; e++) {
    var t = r[e];
    if (t.tag === "DFLT")
      return t.script.defaultLangSys.featureIndexes;
  }
  return [];
};
I0.prototype.getScriptFeaturesIndexes = function(r) {
  var e = this.font.tables;
  if (!e.gsub)
    return [];
  if (!r)
    return this.getDefaultScriptFeaturesIndexes();
  for (var t = this.font.tables.gsub.scripts, n = 0; n < t.length; n++) {
    var s = t[n];
    if (s.tag === r && s.script.defaultLangSys)
      return s.script.defaultLangSys.featureIndexes;
    var a = s.langSysRecords;
    if (a)
      for (var i = 0; i < a.length; i++) {
        var o = a[i];
        if (o.tag === r) {
          var l = o.langSys;
          return l.featureIndexes;
        }
      }
  }
  return this.getDefaultScriptFeaturesIndexes();
};
I0.prototype.mapTagsToFeatures = function(r, e) {
  for (var t = {}, n = 0; n < r.length; n++) {
    var s = r[n].tag, a = r[n].feature;
    t[s] = a;
  }
  this.features[e].tags = t;
};
I0.prototype.getScriptFeatures = function(r) {
  var e = this.features[r];
  if (this.features.hasOwnProperty(r))
    return e;
  var t = this.getScriptFeaturesIndexes(r);
  if (!t)
    return null;
  var n = this.font.tables.gsub;
  return e = t.map(function(s) {
    return n.features[s];
  }), this.features[r] = e, this.mapTagsToFeatures(e, r), e;
};
I0.prototype.getSubstitutionType = function(r, e) {
  var t = r.lookupType.toString(), n = e.substFormat.toString();
  return t + n;
};
I0.prototype.getLookupMethod = function(r, e) {
  var t = this, n = this.getSubstitutionType(r, e);
  switch (n) {
    case "11":
      return function(s) {
        return ur.apply(
          t,
          [s, e]
        );
      };
    case "12":
      return function(s) {
        return cr.apply(
          t,
          [s, e]
        );
      };
    case "63":
      return function(s) {
        return fr.apply(
          t,
          [s, e]
        );
      };
    case "41":
      return function(s) {
        return pr.apply(
          t,
          [s, e]
        );
      };
    case "21":
      return function(s) {
        return dr.apply(
          t,
          [s, e]
        );
      };
    default:
      throw new Error(
        "lookupType: " + r.lookupType + " - substFormat: " + e.substFormat + " is not yet supported"
      );
  }
};
I0.prototype.lookupFeature = function(r) {
  var e = r.contextParams, t = e.index, n = this.getFeature({
    tag: r.tag,
    script: r.script
  });
  if (!n)
    return new Error(
      "font '" + this.font.names.fullName.en + "' doesn't support feature '" + r.tag + "' for script '" + r.script + "'."
    );
  for (var s = this.getFeatureLookups(n), a = [].concat(e.context), i = 0; i < s.length; i++)
    for (var o = s[i], l = this.getLookupSubtables(o), u = 0; u < l.length; u++) {
      var c = l[u], p = this.getSubstitutionType(o, c), f = this.getLookupMethod(o, c), d = void 0;
      switch (p) {
        case "11":
          d = f(e.current), d && a.splice(t, 1, new E1({
            id: 11,
            tag: r.tag,
            substitution: d
          }));
          break;
        case "12":
          d = f(e.current), d && a.splice(t, 1, new E1({
            id: 12,
            tag: r.tag,
            substitution: d
          }));
          break;
        case "63":
          d = f(e), Array.isArray(d) && d.length && a.splice(t, 1, new E1({
            id: 63,
            tag: r.tag,
            substitution: d
          }));
          break;
        case "41":
          d = f(e), d && a.splice(t, 1, new E1({
            id: 41,
            tag: r.tag,
            substitution: d
          }));
          break;
        case "21":
          d = f(e.current), d && a.splice(t, 1, new E1({
            id: 21,
            tag: r.tag,
            substitution: d
          }));
          break;
      }
      e = new z0(a, t), !(Array.isArray(d) && !d.length) && (d = null);
    }
  return a.length ? a : null;
};
I0.prototype.supports = function(r) {
  if (!r.script)
    return !1;
  this.getScriptFeatures(r.script);
  var e = this.features.hasOwnProperty(r.script);
  if (!r.tag)
    return e;
  var t = this.features[r.script].some(function(n) {
    return n.tag === r.tag;
  });
  return e && t;
};
I0.prototype.getLookupSubtables = function(r) {
  return r.subtables || null;
};
I0.prototype.getLookupByIndex = function(r) {
  var e = this.font.tables.gsub.lookups;
  return e[r] || null;
};
I0.prototype.getFeatureLookups = function(r) {
  return r.lookupListIndexes.map(this.getLookupByIndex.bind(this));
};
I0.prototype.getFeature = function(e) {
  if (!this.font)
    return { FAIL: "No font was found" };
  this.features.hasOwnProperty(e.script) || this.getScriptFeatures(e.script);
  var t = this.features[e.script];
  return t ? t.tags[e.tag] ? this.features[e.script].tags[e.tag] : null : { FAIL: "No feature for script " + e.script };
};
function vr(r) {
  var e = r.current, t = r.get(-1);
  return (
    // ? arabic first char
    t === null && m1(e) || // ? arabic char preceded with a non arabic char
    !m1(t) && m1(e)
  );
}
function yr(r) {
  var e = r.get(1);
  return (
    // ? last arabic char
    e === null || // ? next char is not arabic
    !m1(e)
  );
}
var gr = {
  startCheck: vr,
  endCheck: yr
};
function mr(r) {
  var e = r.current, t = r.get(-1);
  return (
    // ? an arabic char preceded with a non arabic char
    (m1(e) || x1(e)) && !m1(t)
  );
}
function xr(r) {
  var e = r.get(1);
  switch (!0) {
    case e === null:
      return !0;
    case (!m1(e) && !x1(e)):
      var t = hr(e);
      if (!t)
        return !0;
      if (t) {
        var n = !1;
        if (n = r.lookahead.some(
          function(s) {
            return m1(s) || x1(s);
          }
        ), !n)
          return !0;
      }
      break;
    default:
      return !1;
  }
}
var br = {
  startCheck: mr,
  endCheck: xr
};
function Sr(r, e, t) {
  e[t].setState(r.tag, r.substitution);
}
function Tr(r, e, t) {
  e[t].setState(r.tag, r.substitution);
}
function Er(r, e, t) {
  r.substitution.forEach(function(n, s) {
    var a = e[t + s];
    a.setState(r.tag, n);
  });
}
function Ar(r, e, t) {
  var n = e[t];
  n.setState(r.tag, r.substitution.ligGlyph);
  for (var s = r.substitution.components.length, a = 0; a < s; a++)
    n = e[t + a + 1], n.setState("deleted", !0);
}
var D5 = {
  11: Sr,
  12: Tr,
  63: Er,
  41: Ar
};
function de(r, e, t) {
  r instanceof E1 && D5[r.id] && D5[r.id](r, e, t);
}
function Cr(r) {
  for (var e = [].concat(r.backtrack), t = e.length - 1; t >= 0; t--) {
    var n = e[t], s = K6(n), a = x1(n);
    if (!s && !a)
      return !0;
    if (s)
      return !1;
  }
  return !1;
}
function kr(r) {
  if (K6(r.current))
    return !1;
  for (var e = 0; e < r.lookahead.length; e++) {
    var t = r.lookahead[e], n = x1(t);
    if (!n)
      return !0;
  }
  return !1;
}
function Pr(r) {
  var e = this, t = "arab", n = this.featuresTags[t], s = this.tokenizer.getRangeTokens(r);
  if (s.length !== 1) {
    var a = new z0(
      s.map(
        function(o) {
          return o.getState("glyphIndex");
        }
      ),
      0
    ), i = new z0(
      s.map(
        function(o) {
          return o.char;
        }
      ),
      0
    );
    s.forEach(function(o, l) {
      if (!x1(o.char)) {
        a.setCurrentIndex(l), i.setCurrentIndex(l);
        var u = 0;
        Cr(i) && (u |= 1), kr(i) && (u |= 2);
        var c;
        switch (u) {
          case 1:
            c = "fina";
            break;
          case 2:
            c = "init";
            break;
          case 3:
            c = "medi";
            break;
        }
        if (n.indexOf(c) !== -1) {
          var p = e.query.lookupFeature({
            tag: c,
            script: t,
            contextParams: a
          });
          if (p instanceof Error)
            return console.info(p.message);
          p.forEach(function(f, d) {
            f instanceof E1 && (de(f, s, d), a.context[d] = f.substitution);
          });
        }
      }
    });
  }
}
function O5(r, e) {
  var t = r.map(function(n) {
    return n.activeState.value;
  });
  return new z0(t, 0);
}
function wr(r) {
  var e = this, t = "arab", n = this.tokenizer.getRangeTokens(r), s = O5(n);
  s.context.forEach(function(a, i) {
    s.setCurrentIndex(i);
    var o = e.query.lookupFeature({
      tag: "rlig",
      script: t,
      contextParams: s
    });
    o.length && (o.forEach(
      function(l) {
        return de(l, n, i);
      }
    ), s = O5(n));
  });
}
function Fr(r) {
  var e = r.current, t = r.get(-1);
  return (
    // ? latin first char
    t === null && _2(e) || // ? latin char preceded with a non latin char
    !_2(t) && _2(e)
  );
}
function Lr(r) {
  var e = r.get(1);
  return (
    // ? last latin char
    e === null || // ? next char is not latin
    !_2(e)
  );
}
var Dr = {
  startCheck: Fr,
  endCheck: Lr
};
function I5(r, e) {
  var t = r.map(function(n) {
    return n.activeState.value;
  });
  return new z0(t, 0);
}
function Or(r) {
  var e = this, t = "latn", n = this.tokenizer.getRangeTokens(r), s = I5(n);
  s.context.forEach(function(a, i) {
    s.setCurrentIndex(i);
    var o = e.query.lookupFeature({
      tag: "liga",
      script: t,
      contextParams: s
    });
    o.length && (o.forEach(
      function(l) {
        return de(l, n, i);
      }
    ), s = I5(n));
  });
}
function Y0(r) {
  this.baseDir = r || "ltr", this.tokenizer = new u0(), this.featuresTags = {};
}
Y0.prototype.setText = function(r) {
  this.text = r;
};
Y0.prototype.contextChecks = {
  latinWordCheck: Dr,
  arabicWordCheck: gr,
  arabicSentenceCheck: br
};
function y4(r) {
  var e = this.contextChecks[r + "Check"];
  return this.tokenizer.registerContextChecker(
    r,
    e.startCheck,
    e.endCheck
  );
}
function Ir() {
  return y4.call(this, "latinWord"), y4.call(this, "arabicWord"), y4.call(this, "arabicSentence"), this.tokenizer.tokenize(this.text);
}
function Rr() {
  var r = this, e = this.tokenizer.getContextRanges("arabicSentence");
  e.forEach(function(t) {
    var n = r.tokenizer.getRangeTokens(t);
    r.tokenizer.replaceRange(
      t.startIndex,
      t.endOffset,
      n.reverse()
    );
  });
}
Y0.prototype.registerFeatures = function(r, e) {
  var t = this, n = e.filter(
    function(s) {
      return t.query.supports({ script: r, tag: s });
    }
  );
  this.featuresTags.hasOwnProperty(r) ? this.featuresTags[r] = this.featuresTags[r].concat(n) : this.featuresTags[r] = n;
};
Y0.prototype.applyFeatures = function(r, e) {
  if (!r)
    throw new Error(
      "No valid font was provided to apply features"
    );
  this.query || (this.query = new I0(r));
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    this.query.supports({ script: n.script }) && this.registerFeatures(n.script, n.tags);
  }
};
Y0.prototype.registerModifier = function(r, e, t) {
  this.tokenizer.registerModifier(r, e, t);
};
function ve() {
  if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1)
    throw new Error(
      "glyphIndex modifier is required to apply arabic presentation features."
    );
}
function Mr() {
  var r = this, e = "arab";
  if (this.featuresTags.hasOwnProperty(e)) {
    ve.call(this);
    var t = this.tokenizer.getContextRanges("arabicWord");
    t.forEach(function(n) {
      Pr.call(r, n);
    });
  }
}
function _r() {
  var r = this, e = "arab";
  if (this.featuresTags.hasOwnProperty(e)) {
    var t = this.featuresTags[e];
    if (t.indexOf("rlig") !== -1) {
      ve.call(this);
      var n = this.tokenizer.getContextRanges("arabicWord");
      n.forEach(function(s) {
        wr.call(r, s);
      });
    }
  }
}
function Nr() {
  var r = this, e = "latn";
  if (this.featuresTags.hasOwnProperty(e)) {
    var t = this.featuresTags[e];
    if (t.indexOf("liga") !== -1) {
      ve.call(this);
      var n = this.tokenizer.getContextRanges("latinWord");
      n.forEach(function(s) {
        Or.call(r, s);
      });
    }
  }
}
Y0.prototype.checkContextReady = function(r) {
  return !!this.tokenizer.getContext(r);
};
Y0.prototype.applyFeaturesToContexts = function() {
  this.checkContextReady("arabicWord") && (Mr.call(this), _r.call(this)), this.checkContextReady("latinWord") && Nr.call(this), this.checkContextReady("arabicSentence") && Rr.call(this);
};
Y0.prototype.processText = function(r) {
  (!this.text || this.text !== r) && (this.setText(r), Ir.call(this), this.applyFeaturesToContexts());
};
Y0.prototype.getBidiText = function(r) {
  return this.processText(r), this.tokenizer.getText();
};
Y0.prototype.getTextGlyphs = function(r) {
  this.processText(r);
  for (var e = [], t = 0; t < this.tokenizer.tokens.length; t++) {
    var n = this.tokenizer.tokens[t];
    if (!n.state.deleted) {
      var s = n.activeState.value;
      e.push(Array.isArray(s) ? s[0] : s);
    }
  }
  return e;
};
function n0(r) {
  r = r || {}, r.tables = r.tables || {}, r.empty || (V1(r.familyName, "When creating a new Font object, familyName is required."), V1(r.styleName, "When creating a new Font object, styleName is required."), V1(r.unitsPerEm, "When creating a new Font object, unitsPerEm is required."), V1(r.ascender, "When creating a new Font object, ascender is required."), V1(r.descender <= 0, "When creating a new Font object, negative descender value is required."), this.names = {
    fontFamily: { en: r.familyName || " " },
    fontSubfamily: { en: r.styleName || " " },
    fullName: { en: r.fullName || r.familyName + " " + r.styleName },
    // postScriptName may not contain any whitespace
    postScriptName: { en: r.postScriptName || (r.familyName + r.styleName).replace(/\s/g, "") },
    designer: { en: r.designer || " " },
    designerURL: { en: r.designerURL || " " },
    manufacturer: { en: r.manufacturer || " " },
    manufacturerURL: { en: r.manufacturerURL || " " },
    license: { en: r.license || " " },
    licenseURL: { en: r.licenseURL || " " },
    version: { en: r.version || "Version 0.1" },
    description: { en: r.description || " " },
    copyright: { en: r.copyright || " " },
    trademark: { en: r.trademark || " " }
  }, this.unitsPerEm = r.unitsPerEm || 1e3, this.ascender = r.ascender, this.descender = r.descender, this.createdTimestamp = r.createdTimestamp, this.tables = Object.assign(r.tables, {
    os2: Object.assign({
      usWeightClass: r.weightClass || this.usWeightClasses.MEDIUM,
      usWidthClass: r.widthClass || this.usWidthClasses.MEDIUM,
      fsSelection: r.fsSelection || this.fsSelectionValues.REGULAR
    }, r.tables.os2)
  })), this.supported = !0, this.glyphs = new K0.GlyphSet(this, r.glyphs || []), this.encoding = new v6(this), this.position = new p2(this), this.substitution = new O0(this), this.tables = this.tables || {}, this._push = null, this._hmtxTableData = {}, Object.defineProperty(this, "hinting", {
    get: function() {
      if (this._hinting)
        return this._hinting;
      if (this.outlinesFormat === "truetype")
        return this._hinting = new J6(this);
    }
  });
}
n0.prototype.hasChar = function(r) {
  return this.encoding.charToGlyphIndex(r) !== null;
};
n0.prototype.charToGlyphIndex = function(r) {
  return this.encoding.charToGlyphIndex(r);
};
n0.prototype.charToGlyph = function(r) {
  var e = this.charToGlyphIndex(r), t = this.glyphs.get(e);
  return t || (t = this.glyphs.get(0)), t;
};
n0.prototype.updateFeatures = function(r) {
  return this.defaultRenderOptions.features.map(function(e) {
    return e.script === "latn" ? {
      script: "latn",
      tags: e.tags.filter(function(t) {
        return r[t];
      })
    } : e;
  });
};
n0.prototype.stringToGlyphs = function(r, e) {
  var t = this, n = new Y0(), s = function(p) {
    return t.charToGlyphIndex(p.char);
  };
  n.registerModifier("glyphIndex", null, s);
  var a = e ? this.updateFeatures(e.features) : this.defaultRenderOptions.features;
  n.applyFeatures(this, a);
  for (var i = n.getTextGlyphs(r), o = i.length, l = new Array(o), u = this.glyphs.get(0), c = 0; c < o; c += 1)
    l[c] = this.glyphs.get(i[c]) || u;
  return l;
};
n0.prototype.nameToGlyphIndex = function(r) {
  return this.glyphNames.nameToGlyphIndex(r);
};
n0.prototype.nameToGlyph = function(r) {
  var e = this.nameToGlyphIndex(r), t = this.glyphs.get(e);
  return t || (t = this.glyphs.get(0)), t;
};
n0.prototype.glyphIndexToName = function(r) {
  return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(r) : "";
};
n0.prototype.getKerningValue = function(r, e) {
  r = r.index || r, e = e.index || e;
  var t = this.position.defaultKerningTables;
  return t ? this.position.getKerningValue(t, r, e) : this.kerningPairs[r + "," + e] || 0;
};
n0.prototype.defaultRenderOptions = {
  kerning: !0,
  features: [
    /**
     * these 4 features are required to render Arabic text properly
     * and shouldn't be turned off when rendering arabic text.
     */
    { script: "arab", tags: ["init", "medi", "fina", "rlig"] },
    { script: "latn", tags: ["liga", "rlig"] }
  ]
};
n0.prototype.forEachGlyph = function(r, e, t, n, s, a) {
  e = e !== void 0 ? e : 0, t = t !== void 0 ? t : 0, n = n !== void 0 ? n : 72, s = Object.assign({}, this.defaultRenderOptions, s);
  var i = 1 / this.unitsPerEm * n, o = this.stringToGlyphs(r, s), l;
  if (s.kerning) {
    var u = s.script || this.position.getDefaultScriptName();
    l = this.position.getKerningTables(u, s.language);
  }
  for (var c = 0; c < o.length; c += 1) {
    var p = o[c];
    if (a.call(this, p, e, t, n, s), p.advanceWidth && (e += p.advanceWidth * i), s.kerning && c < o.length - 1) {
      var f = l ? this.position.getKerningValue(l, p.index, o[c + 1].index) : this.getKerningValue(p, o[c + 1]);
      e += f * i;
    }
    s.letterSpacing ? e += s.letterSpacing * n : s.tracking && (e += s.tracking / 1e3 * n);
  }
  return e;
};
n0.prototype.getPath = function(r, e, t, n, s) {
  var a = new v0();
  return this.forEachGlyph(r, e, t, n, s, function(i, o, l, u) {
    var c = i.getPath(o, l, u, s, this);
    a.extend(c);
  }), a;
};
n0.prototype.getPaths = function(r, e, t, n, s) {
  var a = [];
  return this.forEachGlyph(r, e, t, n, s, function(i, o, l, u) {
    var c = i.getPath(o, l, u, s, this);
    a.push(c);
  }), a;
};
n0.prototype.getAdvanceWidth = function(r, e, t) {
  return this.forEachGlyph(r, 0, 0, e, t, function() {
  });
};
n0.prototype.draw = function(r, e, t, n, s, a) {
  this.getPath(e, t, n, s, a).draw(r);
};
n0.prototype.drawPoints = function(r, e, t, n, s, a) {
  this.forEachGlyph(e, t, n, s, a, function(i, o, l, u) {
    i.drawPoints(r, o, l, u);
  });
};
n0.prototype.drawMetrics = function(r, e, t, n, s, a) {
  this.forEachGlyph(e, t, n, s, a, function(i, o, l, u) {
    i.drawMetrics(r, o, l, u);
  });
};
n0.prototype.getEnglishName = function(r) {
  var e = this.names[r];
  if (e)
    return e.en;
};
n0.prototype.validate = function() {
  var r = this;
  function e(n, s) {
  }
  function t(n) {
    var s = r.getEnglishName(n);
    s && s.trim().length > 0;
  }
  t("fontFamily"), t("weightName"), t("manufacturer"), t("copyright"), t("version"), this.unitsPerEm > 0;
};
n0.prototype.toTables = function() {
  return A7.fontToTable(this);
};
n0.prototype.toBuffer = function() {
  return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer();
};
n0.prototype.toArrayBuffer = function() {
  for (var r = this.toTables(), e = r.encode(), t = new ArrayBuffer(e.length), n = new Uint8Array(t), s = 0; s < e.length; s++)
    n[s] = e[s];
  return t;
};
n0.prototype.download = function(r) {
  var e = this.getEnglishName("fontFamily"), t = this.getEnglishName("fontSubfamily");
  r = r || e.replace(/\s/g, "") + "-" + t + ".otf";
  var n = this.toArrayBuffer();
  if (k7())
    if (window.URL = window.URL || window.webkitURL, window.URL) {
      var s = new DataView(n), a = new Blob([s], { type: "font/opentype" }), i = document.createElement("a");
      i.href = window.URL.createObjectURL(a), i.download = r;
      var o = document.createEvent("MouseEvents");
      o.initEvent("click", !0, !1), i.dispatchEvent(o);
    } else
      console.warn("Font file could not be downloaded. Try using a different browser.");
  else {
    var l = {
      readFileSync: function() {
        throw new Error("fs not available in browser");
      },
      readFile: function(c, p, f) {
        var d = typeof p == "function" ? p : f;
        d && d(new Error("fs not available"));
      },
      existsSync: function() {
        return !1;
      },
      writeFileSync: function() {
      }
    }, u = P7(n);
    l.writeFileSync(r, u);
  }
};
n0.prototype.fsSelectionValues = {
  ITALIC: 1,
  //1
  UNDERSCORE: 2,
  //2
  NEGATIVE: 4,
  //4
  OUTLINED: 8,
  //8
  STRIKEOUT: 16,
  //16
  BOLD: 32,
  //32
  REGULAR: 64,
  //64
  USER_TYPO_METRICS: 128,
  //128
  WWS: 256,
  //256
  OBLIQUE: 512
  //512
};
n0.prototype.usWidthClasses = {
  ULTRA_CONDENSED: 1,
  EXTRA_CONDENSED: 2,
  CONDENSED: 3,
  SEMI_CONDENSED: 4,
  MEDIUM: 5,
  SEMI_EXPANDED: 6,
  EXPANDED: 7,
  EXTRA_EXPANDED: 8,
  ULTRA_EXPANDED: 9
};
n0.prototype.usWeightClasses = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900
};
function j6(r, e) {
  var t = JSON.stringify(r), n = 256;
  for (var s in e) {
    var a = parseInt(s);
    if (!(!a || a < 256)) {
      if (JSON.stringify(e[s]) === t)
        return a;
      n <= a && (n = a + 1);
    }
  }
  return e[n] = r, n;
}
function Br(r, e, t) {
  var n = j6(e.name, t);
  return [
    { name: "tag_" + r, type: "TAG", value: e.tag },
    { name: "minValue_" + r, type: "FIXED", value: e.minValue << 16 },
    { name: "defaultValue_" + r, type: "FIXED", value: e.defaultValue << 16 },
    { name: "maxValue_" + r, type: "FIXED", value: e.maxValue << 16 },
    { name: "flags_" + r, type: "USHORT", value: 0 },
    { name: "nameID_" + r, type: "USHORT", value: n }
  ];
}
function Ur(r, e, t) {
  var n = {}, s = new G.Parser(r, e);
  return n.tag = s.parseTag(), n.minValue = s.parseFixed(), n.defaultValue = s.parseFixed(), n.maxValue = s.parseFixed(), s.skip("uShort", 1), n.name = t[s.parseUShort()] || {}, n;
}
function Gr(r, e, t, n) {
  for (var s = j6(e.name, n), a = [
    { name: "nameID_" + r, type: "USHORT", value: s },
    { name: "flags_" + r, type: "USHORT", value: 0 }
  ], i = 0; i < t.length; ++i) {
    var o = t[i].tag;
    a.push({
      name: "axis_" + r + " " + o,
      type: "FIXED",
      value: e.coordinates[o] << 16
    });
  }
  return a;
}
function Hr(r, e, t, n) {
  var s = {}, a = new G.Parser(r, e);
  s.name = n[a.parseUShort()] || {}, a.skip("uShort", 1), s.coordinates = {};
  for (var i = 0; i < t.length; ++i)
    s.coordinates[t[i].tag] = a.parseFixed();
  return s;
}
function zr(r, e) {
  var t = new _.Table("fvar", [
    { name: "version", type: "ULONG", value: 65536 },
    { name: "offsetToData", type: "USHORT", value: 0 },
    { name: "countSizePairs", type: "USHORT", value: 2 },
    { name: "axisCount", type: "USHORT", value: r.axes.length },
    { name: "axisSize", type: "USHORT", value: 20 },
    { name: "instanceCount", type: "USHORT", value: r.instances.length },
    { name: "instanceSize", type: "USHORT", value: 4 + r.axes.length * 4 }
  ]);
  t.offsetToData = t.sizeOf();
  for (var n = 0; n < r.axes.length; n++)
    t.fields = t.fields.concat(Br(n, r.axes[n], e));
  for (var s = 0; s < r.instances.length; s++)
    t.fields = t.fields.concat(Gr(s, r.instances[s], r.axes, e));
  return t;
}
function Vr(r, e, t) {
  var n = new G.Parser(r, e), s = n.parseULong();
  z.argument(s === 65536, "Unsupported fvar table version.");
  var a = n.parseOffset16();
  n.skip("uShort", 1);
  for (var i = n.parseUShort(), o = n.parseUShort(), l = n.parseUShort(), u = n.parseUShort(), c = [], p = 0; p < i; p++)
    c.push(Ur(r, e + a + p * o, t));
  for (var f = [], d = e + a + i * o, v = 0; v < l; v++)
    f.push(Hr(r, d + v * u, c, t));
  return { axes: c, instances: f };
}
var Wr = { make: zr, parse: Vr }, Xr = function() {
  return {
    coverage: this.parsePointer(P.coverage),
    attachPoints: this.parseList(P.pointer(P.uShortList))
  };
}, Yr = function() {
  var r = this.parseUShort();
  if (z.argument(
    r === 1 || r === 2 || r === 3,
    "Unsupported CaretValue table version."
  ), r === 1)
    return { coordinate: this.parseShort() };
  if (r === 2)
    return { pointindex: this.parseShort() };
  if (r === 3)
    return { coordinate: this.parseShort() };
}, Jr = function() {
  return this.parseList(P.pointer(Yr));
}, Zr = function() {
  return {
    coverage: this.parsePointer(P.coverage),
    ligGlyphs: this.parseList(P.pointer(Jr))
  };
}, qr = function() {
  return this.parseUShort(), this.parseList(P.pointer(P.coverage));
};
function Qr(r, e) {
  e = e || 0;
  var t = new P(r, e), n = t.parseVersion(1);
  z.argument(
    n === 1 || n === 1.2 || n === 1.3,
    "Unsupported GDEF table version."
  );
  var s = {
    version: n,
    classDef: t.parsePointer(P.classDef),
    attachList: t.parsePointer(Xr),
    ligCaretList: t.parsePointer(Zr),
    markAttachClassDef: t.parsePointer(P.classDef)
  };
  return n >= 1.2 && (s.markGlyphSets = t.parsePointer(qr)), s;
}
var Kr = { parse: Qr }, V0 = new Array(10);
V0[1] = function() {
  var e = this.offset + this.relativeOffset, t = this.parseUShort();
  if (t === 1)
    return {
      posFormat: 1,
      coverage: this.parsePointer(P.coverage),
      value: this.parseValueRecord()
    };
  if (t === 2)
    return {
      posFormat: 2,
      coverage: this.parsePointer(P.coverage),
      values: this.parseValueRecordList()
    };
  z.assert(!1, "0x" + e.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
};
V0[2] = function() {
  var e = this.offset + this.relativeOffset, t = this.parseUShort();
  z.assert(t === 1 || t === 2, "0x" + e.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
  var n = this.parsePointer(P.coverage), s = this.parseUShort(), a = this.parseUShort();
  if (t === 1)
    return {
      posFormat: t,
      coverage: n,
      valueFormat1: s,
      valueFormat2: a,
      pairSets: this.parseList(P.pointer(P.list(function() {
        return {
          // pairValueRecord
          secondGlyph: this.parseUShort(),
          value1: this.parseValueRecord(s),
          value2: this.parseValueRecord(a)
        };
      })))
    };
  if (t === 2) {
    var i = this.parsePointer(P.classDef), o = this.parsePointer(P.classDef), l = this.parseUShort(), u = this.parseUShort();
    return {
      // Class Pair Adjustment
      posFormat: t,
      coverage: n,
      valueFormat1: s,
      valueFormat2: a,
      classDef1: i,
      classDef2: o,
      class1Count: l,
      class2Count: u,
      classRecords: this.parseList(l, P.list(u, function() {
        return {
          value1: this.parseValueRecord(s),
          value2: this.parseValueRecord(a)
        };
      }))
    };
  }
};
V0[3] = function() {
  return { error: "GPOS Lookup 3 not supported" };
};
V0[4] = function() {
  return { error: "GPOS Lookup 4 not supported" };
};
V0[5] = function() {
  return { error: "GPOS Lookup 5 not supported" };
};
V0[6] = function() {
  return { error: "GPOS Lookup 6 not supported" };
};
V0[7] = function() {
  return { error: "GPOS Lookup 7 not supported" };
};
V0[8] = function() {
  return { error: "GPOS Lookup 8 not supported" };
};
V0[9] = function() {
  return { error: "GPOS Lookup 9 not supported" };
};
function jr(r, e) {
  e = e || 0;
  var t = new P(r, e), n = t.parseVersion(1);
  return z.argument(n === 1 || n === 1.1, "Unsupported GPOS table version " + n), n === 1 ? {
    version: n,
    scripts: t.parseScriptList(),
    features: t.parseFeatureList(),
    lookups: t.parseLookupList(V0)
  } : {
    version: n,
    scripts: t.parseScriptList(),
    features: t.parseFeatureList(),
    lookups: t.parseLookupList(V0),
    variations: t.parseFeatureVariationsList()
  };
}
var $r = new Array(10);
function en(r) {
  return new _.Table("GPOS", [
    { name: "version", type: "ULONG", value: 65536 },
    { name: "scripts", type: "TABLE", value: new _.ScriptList(r.scripts) },
    { name: "features", type: "TABLE", value: new _.FeatureList(r.features) },
    { name: "lookups", type: "TABLE", value: new _.LookupList(r.lookups, $r) }
  ]);
}
var tn = { parse: jr, make: en };
function rn(r) {
  var e = {};
  r.skip("uShort");
  var t = r.parseUShort();
  z.argument(t === 0, "Unsupported kern sub-table version."), r.skip("uShort", 2);
  var n = r.parseUShort();
  r.skip("uShort", 3);
  for (var s = 0; s < n; s += 1) {
    var a = r.parseUShort(), i = r.parseUShort(), o = r.parseShort();
    e[a + "," + i] = o;
  }
  return e;
}
function nn(r) {
  var e = {};
  r.skip("uShort");
  var t = r.parseULong();
  t > 1 && console.warn("Only the first kern subtable is supported."), r.skip("uLong");
  var n = r.parseUShort(), s = n & 255;
  if (r.skip("uShort"), s === 0) {
    var a = r.parseUShort();
    r.skip("uShort", 3);
    for (var i = 0; i < a; i += 1) {
      var o = r.parseUShort(), l = r.parseUShort(), u = r.parseShort();
      e[o + "," + l] = u;
    }
  }
  return e;
}
function sn(r, e) {
  var t = new G.Parser(r, e), n = t.parseUShort();
  if (n === 0)
    return rn(t);
  if (n === 1)
    return nn(t);
  throw new Error("Unsupported kern table version (" + n + ").");
}
var an = { parse: sn };
function on(r, e, t, n) {
  for (var s = new G.Parser(r, e), a = n ? s.parseUShort : s.parseULong, i = [], o = 0; o < t + 1; o += 1) {
    var l = a.call(s);
    n && (l *= 2), i.push(l);
  }
  return i;
}
var ln = { parse: on };
function hn(r, e) {
  var t = {
    readFileSync: function() {
      throw new Error("fs not available in browser");
    },
    readFile: function(n, s, a) {
      var i = typeof s == "function" ? s : a;
      i && i(new Error("fs not available"));
    },
    existsSync: function() {
      return !1;
    },
    writeFileSync: function() {
    }
  };
  t.readFile(r, function(n, s) {
    if (n)
      return e(n.message);
    e(null, G6(s));
  });
}
function un(r, e) {
  var t = new XMLHttpRequest();
  t.open("get", r, !0), t.responseType = "arraybuffer", t.onload = function() {
    return t.response ? e(null, t.response) : e("Font could not be loaded: " + t.statusText);
  }, t.onerror = function() {
    e("Font could not be loaded");
  }, t.send();
}
function R5(r, e) {
  for (var t = [], n = 12, s = 0; s < e; s += 1) {
    var a = G.getTag(r, n), i = G.getULong(r, n + 4), o = G.getULong(r, n + 8), l = G.getULong(r, n + 12);
    t.push({ tag: a, checksum: i, offset: o, length: l, compression: !1 }), n += 16;
  }
  return t;
}
function cn(r, e) {
  for (var t = [], n = 44, s = 0; s < e; s += 1) {
    var a = G.getTag(r, n), i = G.getULong(r, n + 4), o = G.getULong(r, n + 8), l = G.getULong(r, n + 12), u = void 0;
    o < l ? u = "WOFF" : u = !1, t.push({
      tag: a,
      offset: i,
      compression: u,
      compressedLength: o,
      length: l
    }), n += 20;
  }
  return t;
}
function c0(r, e) {
  if (e.compression === "WOFF") {
    var t = new Uint8Array(r.buffer, e.offset + 2, e.compressedLength - 2), n = new Uint8Array(e.length);
    if (t8(t, n), n.byteLength !== e.length)
      throw new Error("Decompression error: " + e.tag + " decompressed length doesn't match recorded length");
    var s = new DataView(n.buffer, 0);
    return { data: s, offset: 0 };
  } else
    return { data: r, offset: e.offset };
}
function ye(r, e) {
  e = e ?? {};
  var t, n, s = new n0({ empty: !0 }), a = new DataView(r, 0), i, o = [], l = G.getTag(a, 0);
  if (l === "\0\0\0" || l === "true" || l === "typ1")
    s.outlinesFormat = "truetype", i = G.getUShort(a, 4), o = R5(a, i);
  else if (l === "OTTO")
    s.outlinesFormat = "cff", i = G.getUShort(a, 4), o = R5(a, i);
  else if (l === "wOFF") {
    var u = G.getTag(a, 4);
    if (u === "\0\0\0")
      s.outlinesFormat = "truetype";
    else if (u === "OTTO")
      s.outlinesFormat = "cff";
    else
      throw new Error("Unsupported OpenType flavor " + l);
    i = G.getUShort(a, 12), o = cn(a, i);
  } else
    throw new Error("Unsupported OpenType signature " + l);
  for (var c, p, f, d, v, y, m, g, C, S, E, w, L = 0; L < i; L += 1) {
    var F = o[L], A = void 0;
    switch (F.tag) {
      case "cmap":
        A = c0(a, F), s.tables.cmap = d6.parse(A.data, A.offset), s.encoding = new y6(s.tables.cmap);
        break;
      case "cvt ":
        A = c0(a, F), w = new G.Parser(A.data, A.offset), s.tables.cvt = w.parseShortList(F.length / 2);
        break;
      case "fvar":
        p = F;
        break;
      case "fpgm":
        A = c0(a, F), w = new G.Parser(A.data, A.offset), s.tables.fpgm = w.parseByteList(F.length);
        break;
      case "head":
        A = c0(a, F), s.tables.head = k6.parse(A.data, A.offset), s.unitsPerEm = s.tables.head.unitsPerEm, t = s.tables.head.indexToLocFormat;
        break;
      case "hhea":
        A = c0(a, F), s.tables.hhea = P6.parse(A.data, A.offset), s.ascender = s.tables.hhea.ascender, s.descender = s.tables.hhea.descender, s.numberOfHMetrics = s.tables.hhea.numberOfHMetrics;
        break;
      case "hmtx":
        m = F;
        break;
      case "ltag":
        A = c0(a, F), n = F6.parse(A.data, A.offset);
        break;
      case "maxp":
        A = c0(a, F), s.tables.maxp = L6.parse(A.data, A.offset), s.numGlyphs = s.tables.maxp.numGlyphs;
        break;
      case "name":
        S = F;
        break;
      case "OS/2":
        A = c0(a, F), s.tables.os2 = R4.parse(A.data, A.offset);
        break;
      case "post":
        A = c0(a, F), s.tables.post = _6.parse(A.data, A.offset), s.glyphNames = new he(s.tables.post);
        break;
      case "prep":
        A = c0(a, F), w = new G.Parser(A.data, A.offset), s.tables.prep = w.parseByteList(F.length);
        break;
      case "glyf":
        f = F;
        break;
      case "loca":
        C = F;
        break;
      case "CFF ":
        c = F;
        break;
      case "kern":
        g = F;
        break;
      case "GDEF":
        d = F;
        break;
      case "GPOS":
        v = F;
        break;
      case "GSUB":
        y = F;
        break;
      case "meta":
        E = F;
        break;
    }
  }
  var k = c0(a, S);
  if (s.tables.name = M6.parse(k.data, k.offset, n), s.names = s.tables.name, f && C) {
    var O = t === 0, M = c0(a, C), H = ln.parse(M.data, M.offset, s.numGlyphs, O), e0 = c0(a, f);
    s.glyphs = W6.parse(e0.data, e0.offset, H, s, e);
  } else if (c) {
    var Z = c0(a, c);
    C6.parse(Z.data, Z.offset, s, e);
  } else
    throw new Error("Font doesn't contain TrueType or CFF outlines.");
  var Q = c0(a, m);
  if (w6.parse(s, Q.data, Q.offset, s.numberOfHMetrics, s.numGlyphs, s.glyphs, e), T8(s, e), g) {
    var j = c0(a, g);
    s.kerningPairs = an.parse(j.data, j.offset);
  } else
    s.kerningPairs = {};
  if (d) {
    var t0 = c0(a, d);
    s.tables.gdef = Kr.parse(t0.data, t0.offset);
  }
  if (v) {
    var s0 = c0(a, v);
    s.tables.gpos = tn.parse(s0.data, s0.offset), s.position.init();
  }
  if (y) {
    var r0 = c0(a, y);
    s.tables.gsub = N6.parse(r0.data, r0.offset);
  }
  if (p) {
    var a0 = c0(a, p);
    s.tables.fvar = Wr.parse(a0.data, a0.offset, s.names);
  }
  if (E) {
    var W = c0(a, E);
    s.tables.meta = B6.parse(W.data, W.offset), s.metas = s.tables.meta;
  }
  return s;
}
function fn(r, e, t) {
  t = t ?? {};
  var n = typeof window > "u", s = n && !t.isUrl ? hn : un;
  return new Promise(function(a, i) {
    s(r, function(o, l) {
      if (o) {
        if (e)
          return e(o);
        i(o);
      }
      var u;
      try {
        u = ye(l, t);
      } catch (c) {
        if (e)
          return e(c, null);
        i(c);
      }
      if (e)
        return e(null, u);
      a(u);
    });
  });
}
function pn(r, e) {
  var t = {
    readFileSync: function() {
      throw new Error("fs not available in browser");
    },
    readFile: function(s, a, i) {
      var o = typeof a == "function" ? a : i;
      o && o(new Error("fs not available"));
    },
    existsSync: function() {
      return !1;
    },
    writeFileSync: function() {
    }
  }, n = t.readFileSync(r);
  return ye(G6(n), e);
}
var dn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Font: n0,
  Glyph: D0,
  Path: v0,
  BoundingBox: h1,
  _parse: G,
  parse: ye,
  load: fn,
  loadSync: pn
});
const W1 = "DxfWorkerMsg";
class F0 {
  /** @param worker Web worker instance with DxfViewer.SetupWorker() function called. Can be null
   *  for synchronous operations.
   *  @param isWorker True for worker-side wrapper.
   */
  constructor(e, t = !1) {
    this.worker = e, t ? e.onmessage = this._ProcessRequest.bind(this) : e && (e.addEventListener("message", this._ProcessResponse.bind(this), !1), e.addEventListener("error", this._OnError.bind(this), !1), this.reqSeq = 1, this.requests = /* @__PURE__ */ new Map(), this.progressCbk = null);
  }
  /**
   * @param url DXF file URL.
   * @param {?string[]} fonts Fonts URLs.
   * @param options Viewer options. See DxfViewer.DefaultOptions.
   * @param {?Function} progressCbk (phase, processedSize, totalSize)
   */
  async Load(e, t, n, s) {
    return this.worker ? this._SendRequest(
      F0.WorkerMsg.LOAD,
      { url: e, fonts: t, options: this._CloneOptions(n) },
      s
    ) : this._Load(e, t, n, s);
  }
  async Destroy(e = !1) {
    this.worker && (e || await this._SendRequest(F0.WorkerMsg.DESTROY), this.worker.terminate());
  }
  async _ProcessRequest(e) {
    const t = e.data;
    if (t.signature !== W1) {
      console.log("Message with bad signature", t);
      return;
    }
    const n = { seq: t.seq, type: t.type, signature: W1 }, s = [];
    try {
      n.data = await this._ProcessRequestMessage(t.type, t.data, s, t.seq);
    } catch (a) {
      console.error(a), n.error = String(a);
    }
    this.worker.postMessage(n, s), t.type === F0.WorkerMsg.DESTROY && (this.worker.onmessage = null, this.worker.close(), this.worker = null);
  }
  async _ProcessRequestMessage(e, t, n, s) {
    switch (e) {
      case F0.WorkerMsg.LOAD: {
        const { scene: a, dxf: i } = await this._Load(
          t.url,
          t.fonts,
          t.options,
          (o, l, u) => this._SendProgress(s, o, l, u)
        );
        return n.push(a.vertices), n.push(a.indices), n.push(a.transforms), { scene: a, dxf: i };
      }
      case F0.WorkerMsg.DESTROY:
        return null;
      default:
        throw "Unknown message type: " + e;
    }
  }
  async _ProcessResponse(e) {
    const t = e.data;
    if (t.signature !== W1) {
      console.log("Message with bad signature", t);
      return;
    }
    const n = t.seq, s = this.requests.get(n);
    if (!s) {
      console.error("Unmatched message sequence: ", n);
      return;
    }
    const a = t.data;
    if (t.type === F0.WorkerMsg.PROGRESS) {
      s.progressCbk && s.progressCbk(a.phase, a.size, a.totalSize);
      return;
    }
    this.requests.delete(n), t.hasOwnProperty("error") ? s.SetError(t.error) : s.SetResponse(a);
  }
  async _OnError(e) {
    console.error("DxfWorker worker error", e);
    const t = Array.from(this.requests.values);
    this.requests.clear(), t.forEach((n) => n.SetError(e));
  }
  async _SendRequest(e, t = null, n = null) {
    const s = this.reqSeq++, a = new F0.Request(s, n);
    return this.requests.set(s, a), this.worker.postMessage({ seq: s, type: e, data: t, signature: W1 }), await a.GetResponse();
  }
  _SendProgress(e, t, n, s) {
    this.worker.postMessage({
      seq: e,
      type: F0.WorkerMsg.PROGRESS,
      data: { phase: t, size: n, totalSize: s },
      signature: W1
    });
  }
  /** @return {Object} DxfScene serialized scene. */
  async _Load(e, t, n, s) {
    let a;
    t ? a = this._CreateFontFetchers(t, s) : a = [];
    const i = await new F3(e, n.fileEncoding).Fetch(s);
    s && s("prepare", 0, null);
    const o = new c2(n);
    return await o.Build(i, a), { scene: o.scene, dxf: n.retainParsedDxf === !0 ? i : void 0 };
  }
  _CreateFontFetchers(e, t) {
    function n(a, i) {
      return async function() {
        try {
          t && t("font", 0, null);
          const o = await fetch(a);
          if (!o.ok)
            throw console.warn(`[DxfWorker] Font load failed (${o.status}): ${a}`), new Error(`Failed to load font: ${a} (${o.status})`);
          const l = await o.arrayBuffer();
          return t && t("prepare", 0, null), dn.parse(l);
        } catch (o) {
          throw console.error(`[DxfWorker] Error loading font ${a}:`, o), o;
        }
      };
    }
    const s = [];
    if (e && e.length > 0)
      for (let a = 0; a < e.length; a++)
        s.push(n(e[a]));
    else
      console.warn("[DxfWorker] No fonts provided - text rendering may be limited");
    return s;
  }
  _CloneOptions(e) {
    if (Array.isArray(e))
      return e.map((t) => this._CloneOptions(t));
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n in e)
        t[n] = this._CloneOptions(e[n]);
      return t;
    } else
      return e;
  }
}
F0.WorkerMsg = {
  LOAD: "LOAD",
  PROGRESS: "PROGRESS",
  DESTROY: "DESTROY"
};
F0.Request = class {
  constructor(r, e) {
    this.seq = r, this.progressCbk = e, this.promise = new Promise((t, n) => {
      this._Resolve = t, this._Reject = n;
    });
  }
  async GetResponse() {
    return await this.promise;
  }
  SetResponse(r) {
    this._Resolve(r);
  }
  SetError(r) {
    this._Reject(r);
  }
};
class M5 {
  /**
   * @param instanceType {Number} One of InstanceType values.
   * @param geometryType {?number} One of BatchingKey.GeometryType.
   * @param color {number} Color ARGB value.
   * @param lineType {?number} Line type ID, null for non-lines. Zero is default type (solid
   *  line).
   */
  constructor(e, t, n, s) {
    this.instanceType = e, this.geometryType = t ?? null, this.color = n, this.lineType = s ?? null;
  }
  /** Comparator function. Fields lexical order corresponds to the constructor arguments order.
   * Null values are always first.
   */
  Compare(e) {
    let t = U0(this.instanceType, e.instanceType);
    return t !== 0 || (t = U0(this.geometryType, e.geometryType), t !== 0) || (t = U0(this.color, e.color), t !== 0) ? t : U0(this.lineType, e.lineType);
  }
}
function o2(r, e) {
  e === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = r, this.domElement = e, this.enabled = !0, this.target = new I.Vector3(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.mouseZoomSpeedFactor = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }, this.mouseButtons = { LEFT: I.MOUSE.ROTATE, MIDDLE: I.MOUSE.DOLLY, RIGHT: I.MOUSE.PAN }, this.touches = { ONE: I.TOUCH.ROTATE, TWO: I.TOUCH.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
    return u.phi;
  }, this.getAzimuthalAngle = function() {
    return u.theta;
  }, this.listenToKeyEvents = function(T) {
    T.addEventListener("keydown", Te), this._domElementKeyEvents = T;
  }, this.saveState = function() {
    t.target0.copy(t.target), t.position0.copy(t.object.position), t.zoom0 = t.object.zoom;
  }, this.reset = function() {
    t.target.copy(t.target0), t.object.position.copy(t.position0), t.object.zoom = t.zoom0, t.object.updateProjectionMatrix(), t.dispatchEvent(n), t.update(), o = i.NONE;
  }, this.update = (function() {
    var T = new I.Vector3(), X = new I.Quaternion().setFromUnitVectors(r.up, new I.Vector3(0, 1, 0)), q = X.clone().invert(), d0 = new I.Vector3(), r1 = new I.Quaternion(), P1 = 2 * Math.PI;
    return function() {
      var Pe = t.object.position;
      T.copy(Pe).sub(t.target), T.applyQuaternion(X), u.setFromVector3(T), t.autoRotate && o === i.NONE && O(A()), t.enableDamping ? (u.theta += c.theta * t.dampingFactor, u.phi += c.phi * t.dampingFactor) : (u.theta += c.theta, u.phi += c.phi);
      var n1 = t.minAzimuthAngle, s1 = t.maxAzimuthAngle;
      return isFinite(n1) && isFinite(s1) && (n1 < -Math.PI ? n1 += P1 : n1 > Math.PI && (n1 -= P1), s1 < -Math.PI ? s1 += P1 : s1 > Math.PI && (s1 -= P1), n1 <= s1 ? u.theta = Math.max(n1, Math.min(s1, u.theta)) : u.theta = u.theta > (n1 + s1) / 2 ? Math.max(n1, u.theta) : Math.min(s1, u.theta)), u.phi = Math.max(t.minPolarAngle, Math.min(t.maxPolarAngle, u.phi)), u.makeSafe(), u.radius *= p, u.radius = Math.max(t.minDistance, Math.min(t.maxDistance, u.radius)), t.enableDamping === !0 ? t.target.addScaledVector(f, t.dampingFactor) : t.target.add(f), T.setFromSpherical(u), T.applyQuaternion(q), Pe.copy(t.target).add(T), t.object.lookAt(t.target), t.enableDamping === !0 ? (c.theta *= 1 - t.dampingFactor, c.phi *= 1 - t.dampingFactor, f.multiplyScalar(1 - t.dampingFactor)) : (c.set(0, 0, 0), f.set(0, 0, 0)), p = 1, d || d0.distanceToSquared(t.object.position) > l || 8 * (1 - r1.dot(t.object.quaternion)) > l ? (t.dispatchEvent(n), d0.copy(t.object.position), r1.copy(t.object.quaternion), d = !1, !0) : !1;
    };
  })(), this.dispose = function() {
    t.domElement.removeEventListener("contextmenu", ke), t.domElement.removeEventListener("pointerdown", be), t.domElement.removeEventListener("wheel", Se), t.domElement.removeEventListener("touchstart", Ee), t.domElement.removeEventListener("touchend", Ce), t.domElement.removeEventListener("touchmove", Ae), t.domElement.ownerDocument.removeEventListener("pointermove", q2), t.domElement.ownerDocument.removeEventListener("pointerup", Q2), t._domElementKeyEvents !== null && t._domElementKeyEvents.removeEventListener("keydown", Te);
  };
  var t = this, n = { type: "change" }, s = { type: "start" }, a = { type: "end" }, i = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
  }, o = i.NONE, l = 1e-6, u = new I.Spherical(), c = new I.Spherical(), p = 1, f = new I.Vector3(), d = !1, v = new I.Vector2(), y = new I.Vector2(), m = new I.Vector2(), g = new I.Vector2(), C = new I.Vector2(), S = new I.Vector2(), E = new I.Vector2(), w = new I.Vector2(), L = new I.Vector2(), F = new I.Vector2();
  function A() {
    return 2 * Math.PI / 60 / 60 * t.autoRotateSpeed;
  }
  function k(T) {
    return Math.pow(0.95, t.zoomSpeed * (T ? t.mouseZoomSpeedFactor : 1));
  }
  function O(T) {
    c.theta -= T;
  }
  function M(T) {
    c.phi -= T;
  }
  var H = (function() {
    var T = new I.Vector3();
    return function(q, d0) {
      T.setFromMatrixColumn(d0, 0), T.multiplyScalar(-q), f.add(T);
    };
  })(), e0 = (function() {
    var T = new I.Vector3();
    return function(q, d0) {
      t.screenSpacePanning === !0 ? T.setFromMatrixColumn(d0, 1) : (T.setFromMatrixColumn(d0, 0), T.crossVectors(t.object.up, T)), T.multiplyScalar(q), f.add(T);
    };
  })(), Z = (function() {
    var T = new I.Vector3();
    return function(q, d0) {
      var r1 = t.domElement;
      if (t.object.isPerspectiveCamera) {
        var P1 = t.object.position;
        T.copy(P1).sub(t.target);
        var m2 = T.length();
        m2 *= Math.tan(t.object.fov / 2 * Math.PI / 180), H(2 * q * m2 / r1.clientHeight, t.object.matrix), e0(2 * d0 * m2 / r1.clientHeight, t.object.matrix);
      } else t.object.isOrthographicCamera ? (H(q * (t.object.right - t.object.left) / t.object.zoom / r1.clientWidth / window.devicePixelRatio, t.object.matrix), e0(d0 * (t.object.top - t.object.bottom) / t.object.zoom / r1.clientHeight / window.devicePixelRatio, t.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), t.enablePan = !1);
    };
  })();
  function Q(T, X) {
    const q = (X.x - t.domElement.width / 2) * (T - 1) / T, d0 = (X.y - t.domElement.height / 2) * (T - 1) / T;
    Z(-q, -d0);
  }
  function j(T, X) {
    if (t.object.isPerspectiveCamera)
      p /= T;
    else if (t.object.isOrthographicCamera) {
      const q = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom * T));
      Q(q / t.object.zoom, X), t.object.zoom = q, t.object.updateProjectionMatrix(), d = !0;
    } else
      console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1;
  }
  function t0(T, X) {
    if (t.object.isPerspectiveCamera)
      p *= T;
    else if (t.object.isOrthographicCamera) {
      const q = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom / T));
      Q(q / t.object.zoom, X), t.object.zoom = q, t.object.updateProjectionMatrix(), d = !0;
    } else
      console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1;
  }
  function s0(T) {
    v.set(T.clientX, T.clientY);
  }
  function r0(T) {
    const X = t.domElement.getBoundingClientRect();
    E.set(T.clientX - X.left, T.clientY - X.top), w.set(T.clientX, T.clientY);
  }
  function a0(T) {
    g.set(T.clientX, T.clientY);
  }
  function W(T) {
    y.set(T.clientX, T.clientY), m.subVectors(y, v).multiplyScalar(t.rotateSpeed);
    var X = t.domElement;
    O(2 * Math.PI * m.x / X.clientHeight), M(2 * Math.PI * m.y / X.clientHeight), v.copy(y), t.update();
  }
  function $(T) {
    L.set(T.clientX, T.clientY), F.subVectors(L, w), F.y > 0 ? j(k(!0), E) : F.y < 0 && t0(k(!0), E), w.copy(L), t.update();
  }
  function m0(T) {
    C.set(T.clientX, T.clientY), S.subVectors(C, g).multiplyScalar(t.panSpeed * window.devicePixelRatio), Z(S.x, S.y), g.copy(C), t.update();
  }
  function $0(T) {
    const X = t.domElement.getBoundingClientRect(), q = new I.Vector2(
      (T.clientX - X.left) * window.devicePixelRatio,
      (T.clientY - X.top) * window.devicePixelRatio
    );
    T.deltaY < 0 ? t0(k(), q) : T.deltaY > 0 && j(k(), q), t.update();
  }
  function N0(T) {
    var X = !1;
    switch (T.keyCode) {
      case t.keys.UP:
        Z(0, t.keyPanSpeed), X = !0;
        break;
      case t.keys.BOTTOM:
        Z(0, -t.keyPanSpeed), X = !0;
        break;
      case t.keys.LEFT:
        Z(t.keyPanSpeed, 0), X = !0;
        break;
      case t.keys.RIGHT:
        Z(-t.keyPanSpeed, 0), X = !0;
        break;
    }
    X && (T.preventDefault(), t.update());
  }
  function e1(T) {
    if (T.touches.length == 1)
      v.set(T.touches[0].pageX, T.touches[0].pageY);
    else {
      var X = 0.5 * (T.touches[0].pageX + T.touches[1].pageX), q = 0.5 * (T.touches[0].pageY + T.touches[1].pageY);
      v.set(X, q);
    }
  }
  function u1(T) {
    if (T.touches.length == 1)
      g.set(T.touches[0].pageX, T.touches[0].pageY);
    else {
      var X = 0.5 * (T.touches[0].pageX + T.touches[1].pageX), q = 0.5 * (T.touches[0].pageY + T.touches[1].pageY);
      g.set(X, q);
    }
  }
  function t1(T) {
    const X = t.domElement.getBoundingClientRect();
    E.set(
      (T.touches[0].clientX + T.touches[1].clientX) / 2 - X.left,
      (T.touches[0].clientY + T.touches[1].clientY) / 2 - X.top
    ).multiplyScalar(window.devicePixelRatio);
    var q = T.touches[0].pageX - T.touches[1].pageX, d0 = T.touches[0].pageY - T.touches[1].pageY, r1 = Math.sqrt(q * q + d0 * d0);
    w.set(0, r1);
  }
  function e3(T) {
    t.enableZoom && t1(T), t.enablePan && u1(T);
  }
  function t3(T) {
    t.enableZoom && t1(T), t.enableRotate && e1(T);
  }
  function ge(T) {
    if (T.touches.length == 1)
      y.set(T.touches[0].pageX, T.touches[0].pageY);
    else {
      var X = 0.5 * (T.touches[0].pageX + T.touches[1].pageX), q = 0.5 * (T.touches[0].pageY + T.touches[1].pageY);
      y.set(X, q);
    }
    m.subVectors(y, v).multiplyScalar(t.rotateSpeed);
    var d0 = t.domElement;
    O(2 * Math.PI * m.x / d0.clientHeight), M(2 * Math.PI * m.y / d0.clientHeight), v.copy(y);
  }
  function me(T) {
    if (T.touches.length == 1)
      C.set(T.touches[0].pageX, T.touches[0].pageY);
    else {
      var X = 0.5 * (T.touches[0].pageX + T.touches[1].pageX), q = 0.5 * (T.touches[0].pageY + T.touches[1].pageY);
      C.set(X, q);
    }
    S.subVectors(C, g).multiplyScalar(t.panSpeed * window.devicePixelRatio), Z(S.x, S.y), g.copy(C);
  }
  function xe(T) {
    var X = T.touches[0].pageX - T.touches[1].pageX, q = T.touches[0].pageY - T.touches[1].pageY, d0 = Math.sqrt(X * X + q * q);
    L.set(0, d0), F.set(0, L.y / w.y), j(F.y, E), w.copy(L);
  }
  function r3(T) {
    t.enableZoom && xe(T), t.enablePan && me(T);
  }
  function n3(T) {
    t.enableZoom && xe(T), t.enableRotate && ge(T);
  }
  function be(T) {
    if (t.enabled !== !1)
      switch (T.pointerType) {
        case "mouse":
        case "pen":
          s3(T);
          break;
      }
  }
  function q2(T) {
    if (t.enabled !== !1)
      switch (T.pointerType) {
        case "mouse":
        case "pen":
          a3(T);
          break;
      }
  }
  function Q2(T) {
    switch (T.pointerType) {
      case "mouse":
      case "pen":
        i3();
        break;
    }
  }
  function s3(T) {
    T.preventDefault(), t.domElement.focus ? t.domElement.focus() : window.focus();
    var X;
    switch (T.button) {
      case 0:
        X = t.mouseButtons.LEFT;
        break;
      case 1:
        X = t.mouseButtons.MIDDLE;
        break;
      case 2:
        X = t.mouseButtons.RIGHT;
        break;
      default:
        X = -1;
    }
    switch (X) {
      case I.MOUSE.DOLLY:
        if (t.enableZoom === !1) return;
        r0(T), o = i.DOLLY;
        break;
      case I.MOUSE.ROTATE:
        if (T.ctrlKey || T.metaKey || T.shiftKey) {
          if (t.enablePan === !1) return;
          a0(T), o = i.PAN;
        } else {
          if (t.enableRotate === !1) return;
          s0(T), o = i.ROTATE;
        }
        break;
      case I.MOUSE.PAN:
        if (T.ctrlKey || T.metaKey || T.shiftKey) {
          if (t.enableRotate === !1) return;
          s0(T), o = i.ROTATE;
        } else {
          if (t.enablePan === !1) return;
          a0(T), o = i.PAN;
        }
        break;
      default:
        o = i.NONE;
    }
    o !== i.NONE && (t.domElement.ownerDocument.addEventListener("pointermove", q2), t.domElement.ownerDocument.addEventListener("pointerup", Q2), t.dispatchEvent(s));
  }
  function a3(T) {
    if (t.enabled !== !1)
      switch (T.preventDefault(), o) {
        case i.ROTATE:
          if (t.enableRotate === !1) return;
          W(T);
          break;
        case i.DOLLY:
          if (t.enableZoom === !1) return;
          $(T);
          break;
        case i.PAN:
          if (t.enablePan === !1) return;
          m0(T);
          break;
      }
  }
  function i3(T) {
    t.domElement.ownerDocument.removeEventListener("pointermove", q2), t.domElement.ownerDocument.removeEventListener("pointerup", Q2), t.enabled !== !1 && (t.dispatchEvent(a), o = i.NONE);
  }
  function Se(T) {
    t.enabled === !1 || t.enableZoom === !1 || o !== i.NONE && o !== i.ROTATE || (T.preventDefault(), T.stopPropagation(), t.dispatchEvent(s), $0(T), t.dispatchEvent(a));
  }
  function Te(T) {
    t.enabled === !1 || t.enablePan === !1 || N0(T);
  }
  function Ee(T) {
    if (t.enabled !== !1) {
      switch (T.preventDefault(), T.touches.length) {
        case 1:
          switch (t.touches.ONE) {
            case I.TOUCH.ROTATE:
              if (t.enableRotate === !1) return;
              e1(T), o = i.TOUCH_ROTATE;
              break;
            case I.TOUCH.PAN:
              if (t.enablePan === !1) return;
              u1(T), o = i.TOUCH_PAN;
              break;
            default:
              o = i.NONE;
          }
          break;
        case 2:
          switch (t.touches.TWO) {
            case I.TOUCH.DOLLY_PAN:
              if (t.enableZoom === !1 && t.enablePan === !1) return;
              e3(T), o = i.TOUCH_DOLLY_PAN;
              break;
            case I.TOUCH.DOLLY_ROTATE:
              if (t.enableZoom === !1 && t.enableRotate === !1) return;
              t3(T), o = i.TOUCH_DOLLY_ROTATE;
              break;
            default:
              o = i.NONE;
          }
          break;
        default:
          o = i.NONE;
      }
      o !== i.NONE && t.dispatchEvent(s);
    }
  }
  function Ae(T) {
    if (t.enabled !== !1)
      switch (T.preventDefault(), T.stopPropagation(), o) {
        case i.TOUCH_ROTATE:
          if (t.enableRotate === !1) return;
          ge(T), t.update();
          break;
        case i.TOUCH_PAN:
          if (t.enablePan === !1) return;
          me(T), t.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (t.enableZoom === !1 && t.enablePan === !1) return;
          r3(T), t.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (t.enableZoom === !1 && t.enableRotate === !1) return;
          n3(T), t.update();
          break;
        default:
          o = i.NONE;
      }
  }
  function Ce(T) {
    t.enabled !== !1 && (t.dispatchEvent(a), o = i.NONE);
  }
  function ke(T) {
    t.enabled !== !1 && T.preventDefault();
  }
  t.domElement.addEventListener("contextmenu", ke), t.domElement.addEventListener("pointerdown", be), t.domElement.addEventListener("wheel", Se), t.domElement.addEventListener("touchstart", Ee), t.domElement.addEventListener("touchend", Ce), t.domElement.addEventListener("touchmove", Ae), this.update();
}
o2.prototype = Object.create(I.EventDispatcher.prototype);
o2.prototype.constructor = o2;
function _4(r, e) {
  o2.call(this, r, e), this.screenSpacePanning = !1, this.mouseButtons.LEFT = I.MOUSE.PAN, this.mouseButtons.RIGHT = I.MOUSE.ROTATE, this.touches.ONE = I.TOUCH.PAN, this.touches.TWO = I.TOUCH.DOLLY_ROTATE;
}
_4.prototype = Object.create(I.EventDispatcher.prototype);
_4.prototype.constructor = _4;
class vn {
  /**
   * Transform a raw DXF entity color into a renderable color.
   * Called once per unique color during material creation.
   * 
   * @param {number} color RGB color value (24-bit integer, e.g. 0xff0000 for red)
   * @param {number} backgroundLuminance Background luminance [0-1] for contrast calculations (optional)
   * @return {number} Transformed RGB color value to use for rendering
   */
  transformColor(e, t = 0) {
    throw new Error("RendererColorStrategy.transformColor() must be implemented by subclass");
  }
  /**
   * Get the recommended background color for this strategy.
   * 
   * @return {number} RGB color value for background (e.g. 0xffffff for white)
   */
  getBackgroundColor() {
    throw new Error("RendererColorStrategy.getBackgroundColor() must be implemented by subclass");
  }
  /**
   * Get the background alpha value for this strategy.
   * 
   * @return {number} Alpha value [0-1]
   */
  getBackgroundAlpha() {
    return 1;
  }
  /**
   * Optional: Get a descriptive name for this strategy (for debugging/logging).
   * 
   * @return {string} Strategy name
   */
  getName() {
    return this.constructor.name;
  }
}
class yn extends vn {
  /**
   * Convert RGB color to monochrome grayscale.
   * 
   * Algorithm:
   * 1. Extract R, G, B components and normalize to [0-1]
   * 2. Calculate perceptual luminance using ITU-R BT.709 weights
   * 3. Scale to darker gray range (0-180) for contrast on white background
   * 4. Return uniform RGB grayscale value
   * 
   * @param {number} color RGB value (e.g. 0xff0000)
   * @param {number} backgroundLuminance Not used (monochrome ignores background)
   * @return {number} Grayscale RGB value
   */
  transformColor(e, t = 0) {
    const n = ((e & 16711680) >>> 16) / 255, s = ((e & 65280) >>> 8) / 255, a = (e & 255) / 255, i = n * 0.2126 + s * 0.7152 + a * 0.0722, o = Math.floor(i * 180);
    return o << 16 | o << 8 | o;
  }
  /**
   * Get the recommended background color for monochrome mode.
   * 
   * @return {number} Pure white (0xffffff)
   */
  getBackgroundColor() {
    return 16777215;
  }
  /**
   * Get the background alpha value.
   * 
   * @return {number} Fully opaque (1.0)
   */
  getBackgroundAlpha() {
    return 1;
  }
  /**
   * Get the strategy name for debugging/logging.
   * 
   * @return {string} "MonochromeColorStrategy"
   */
  getName() {
    return "MonochromeColorStrategy";
  }
}
const N2 = Object.freeze({
  INFO: "info",
  WARN: "warn",
  ERROR: "error"
}), g4 = "__dxf_";
class g2 {
  /**
   * @param domContainer Container element to create the canvas in. Usually empty div. Should not
   *  have padding if auto-resize feature is used.
   * @param options Some options can be overridden if specified. See DxfViewer.DefaultOptions.
   */
  constructor(e, t = null) {
    this.domContainer = e, this.options = Object.create(g2.DefaultOptions), t && Object.assign(this.options, t), t = this.options, this.clearColor = this.options.clearColor.getHex(), this.scene = new I.Scene(), this.colorStrategy = new yn();
    try {
      this.renderer = new I.WebGLRenderer({
        alpha: t.canvasAlpha,
        premultipliedAlpha: t.canvasPremultipliedAlpha,
        antialias: t.antialias,
        depth: !1,
        preserveDrawingBuffer: t.preserveDrawingBuffer
      });
    } catch (a) {
      console.log("Failed to create renderer: " + a), this.renderer = null;
      return;
    }
    const n = this.renderer;
    n.sortObjects = !0, n.setPixelRatio(window.devicePixelRatio);
    const s = this.camera = new I.OrthographicCamera(-1, 1, 1, -1, 0.1, 2);
    s.position.z = 1, s.position.x = 0, s.position.y = 0, this.simpleColorMaterial = [], this.simplePointMaterial = [];
    for (let a = 0; a < E0.MAX; a++)
      this.simpleColorMaterial[a] = this._CreateSimpleColorMaterial(a), this.simplePointMaterial[a] = this._CreateSimplePointMaterial(a);
    n.setClearColor(t.clearColor, t.clearAlpha), t.autoResize ? (this.canvasWidth = e.clientWidth, this.canvasHeight = e.clientHeight, e.style.position = "relative") : (this.canvasWidth = t.canvasWidth, this.canvasHeight = t.canvasHeight, this.resizeObserver = null), n.setSize(this.canvasWidth, this.canvasHeight), this.canvas = n.domElement, e.style.display = "block", t.autoResize && (this.canvas.style.position = "absolute", this.resizeObserver = new ResizeObserver((a) => this._OnResize(a[0])), this.resizeObserver.observe(e)), e.appendChild(this.canvas), this.canvas.addEventListener("pointerdown", this._OnPointerEvent.bind(this)), this.canvas.addEventListener("pointerup", this._OnPointerEvent.bind(this)), this.Render(), this.materials = new u2((a, i) => a.key.Compare(i.key)), this.layers = /* @__PURE__ */ new Map(), this.defaultLayer = null, this.blocks = /* @__PURE__ */ new Map(), this.worker = null, this.controls = null;
  }
  /**
   * @returns {boolean} True if renderer exists. May be false in case when WebGL context is lost
   * (e.g. after wake up from sleep). In such case page should be reloaded.
   */
  HasRenderer() {
    return !!this.renderer;
  }
  /**
   * @returns {three.WebGLRenderer | null} Returns the created Three.js renderer.
   */
  GetRenderer() {
    return this.renderer;
  }
  GetCanvas() {
    return this.canvas;
  }
  GetDxf() {
    return this.parsedDxf;
  }
  SetSize(e, t) {
    this._EnsureRenderer();
    const n = e / this.canvasWidth, s = t / this.canvasHeight, a = this.camera, i = (a.left + a.right) / 2, o = (a.bottom + a.top) / 2, l = a.right - a.left, u = a.top - a.bottom;
    a.left = i - n * l / 2, a.right = i + n * l / 2, a.bottom = o - s * u / 2, a.top = o + s * u / 2, a.updateProjectionMatrix(), this.canvasWidth = e, this.canvasHeight = t, this.renderer.setSize(e, t), this.controls && this.controls.update(), this._Emit("resized", { width: e, height: t }), this._Emit("viewChanged"), this.Render();
  }
  /** Load DXF into the viewer. Old content is discarded, state is reset.
   * @param {string} url DXF file URL.
   * @param {?string[]} fonts List of font URLs. Files should have typeface.js format. Fonts are
   *  used in the specified order, each one is checked until necessary glyph is found. Text is not
   *  rendered if fonts are not specified.
   * @param {?Function} progressCbk (phase, processedSize, totalSize)
   *  Possible phase values:
   *  * "font"
   *  * "fetch"
   *  * "parse"
   *  * "prepare"
   * @param {?Function} workerFactory Factory for worker creation. The worker script should
   *  invoke DxfViewer.SetupWorker() function.
   */
  async Load({ url: e, fonts: t = null, progressCbk: n = null, workerFactory: s = null }) {
    if (e == null)
      throw new Error("`url` parameter is not specified");
    this._EnsureRenderer(), this.Clear(), this.worker = new F0(s ? s() : null);
    const { scene: a, dxf: i } = await this.worker.Load(e, t, this.options, n);
    await this.worker.Destroy(), this.worker = null, this.parsedDxf = i, this.origin = a.origin, this.bounds = a.bounds, this.hasMissingChars = a.hasMissingChars;
    for (const o of a.layers)
      this.layers.set(o.name, new N5(o.name, o.displayName, o.color));
    this.defaultLayer = this.layers.get("0") ?? new N5("0", "0", 0);
    for (const o of a.batches)
      if (o.key.blockName !== null && o.key.geometryType !== J.GeometryType.BLOCK_INSTANCE && o.key.geometryType !== J.GeometryType.POINT_INSTANCE) {
        let l = this.blocks.get(o.key.blockName);
        l || (l = new gn(), this.blocks.set(o.key.blockName, l)), l.PushBatch(new _5(this, a, o));
      }
    console.log(`DXF scene:
                     ${a.batches.length} batches,
                     ${this.layers.size} layers,
                     ${this.blocks.size} blocks,
                     vertices ${a.vertices.byteLength} B,
                     indices ${a.indices.byteLength} B
                     transforms ${a.transforms.byteLength} B`);
    for (const o of a.batches)
      this._LoadBatch(a, o);
    this._Emit("loaded"), a.bounds ? this.FitView(
      a.bounds.minX - a.origin.x,
      a.bounds.maxX - a.origin.x,
      a.bounds.minY - a.origin.y,
      a.bounds.maxY - a.origin.y
    ) : this._Message("Empty document", N2.WARN), this.hasMissingChars && this._Message(
      "Some characters cannot be properly displayed due to missing fonts",
      N2.WARN
    ), this._CreateControls(), this.Render();
  }
  Render() {
    this._EnsureRenderer(), this.renderer.render(this.scene, this.camera);
  }
  /** @return {Iterable<{name:String, color:number}>} List of layer names. */
  GetLayers(e = !1) {
    const t = [];
    for (const n of this.layers.values())
      e && n.objects.length == 0 || t.push({
        name: n.name,
        displayName: n.displayName,
        color: this._TransformColor(n.color)
      });
    return t;
  }
  ShowLayer(e, t) {
    this._EnsureRenderer();
    const n = this.layers.get(e);
    if (n) {
      for (const s of n.objects)
        s.visible = t;
      this.Render();
    }
  }
  /** Reset the viewer state. */
  Clear() {
    this._EnsureRenderer(), this.worker && (this.worker.Destroy(!0), this.worker = null), this.controls && (this.controls.dispose(), this.controls = null), this.scene.clear();
    for (const e of this.layers.values())
      e.Dispose();
    this.layers.clear(), this.blocks.clear(), this.materials.each((e) => e.material.dispose()), this.materials.clear(), this.SetView({ x: 0, y: 0 }, 2), this._Emit("cleared"), this.Render();
  }
  /** Free all resources. The viewer object should not be used after this method was called. */
  Destroy() {
    if (this.HasRenderer()) {
      this.resizeObserver && this.resizeObserver.disconnect(), this.Clear(), this._Emit("destroyed");
      for (const e of this.simplePointMaterial)
        e.dispose();
      for (const e of this.simpleColorMaterial)
        e.dispose();
      this.simplePointMaterial = null, this.simpleColorMaterial = null, this.renderer.dispose(), this.renderer = null;
    }
  }
  SetView(e, t) {
    const n = this.canvasWidth / this.canvasHeight, s = t / n, a = this.camera;
    a.left = -t / 2, a.right = t / 2, a.top = s / 2, a.bottom = -s / 2, a.zoom = 1, a.position.set(e.x, e.y, 1), a.rotation.set(0, 0, 0), a.updateMatrix(), a.updateProjectionMatrix(), this.controls && (this.controls.target.set(a.position.x, a.position.y, 0), this.controls.update()), this._Emit("viewChanged");
  }
  /** Set view to fit the specified bounds. */
  FitView(e, t, n, s, a = 0.1) {
    const i = this.canvasWidth / this.canvasHeight;
    let o = t - e;
    const l = s - n, u = { x: e + o / 2, y: n + l / 2 };
    l * i > o && (o = l * i), o <= Number.MIN_VALUE * 2 && (o = 1), this.SetView(u, o * (1 + a));
  }
  /** @return {Scene} three.js scene for the viewer. Can be used to add custom entities on the
   *      scene. Remember to apply scene origin available via GetOrigin() method.
   */
  GetScene() {
    return this.scene;
  }
  /** @return {OrthographicCamera} three.js camera for the viewer. */
  GetCamera() {
    return this.camera;
  }
  /** @return {Vector2} Scene origin in global drawing coordinates. */
  GetOrigin() {
    return this.origin;
  }
  /**
   * @return {?{maxX: number, maxY: number, minX: number, minY: number}} Scene bounds in model
   *      space coordinates. Null if empty scene.
   */
  GetBounds() {
    return this.bounds;
  }
  /** Subscribe to the specified event. The following events are defined:
   *  * "loaded" - new scene loaded.
   *  * "cleared" - current scene cleared.
   *  * "destroyed" - viewer instance destroyed.
   *  * "resized" - viewport size changed. Details: {width, height}
   *  * "pointerdown" - Details: {domEvent, position:{x,y}}, position is in scene coordinates.
   *  * "pointerup"
   *  * "viewChanged"
   *  * "message" - Some message from the viewer. {message: string, level: string}.
   *
   * @param eventName {string}
   * @param eventHandler {function} Accepts event object.
   */
  Subscribe(e, t) {
    this._EnsureRenderer(), this.canvas.addEventListener(g4 + e, t);
  }
  /** Unsubscribe from previously subscribed event. The arguments should match previous
   * Subscribe() call.
   *
   * @param eventName {string}
   * @param eventHandler {function}
   */
  Unsubscribe(e, t) {
    this._EnsureRenderer(), this.canvas.removeEventListener(g4 + e, t);
  }
  // /////////////////////////////////////////////////////////////////////////////////////////////
  _EnsureRenderer() {
    if (!this.HasRenderer())
      throw new Error("WebGL renderer not available. Probable WebGL context loss, try refreshing the page.");
  }
  _CreateControls() {
    this.controls && this.controls.dispose();
    const e = this.controls = new o2(this.camera, this.canvas);
    e.enableRotate = !1, e.mouseButtons = {
      LEFT: I.MOUSE.PAN,
      MIDDLE: I.MOUSE.DOLLY
    }, e.touches = {
      ONE: I.TOUCH.PAN,
      TWO: I.TOUCH.DOLLY_PAN
    }, e.zoomSpeed = 3, e.mouseZoomSpeedFactor = 0.05, e.target = new I.Vector3(this.camera.position.x, this.camera.position.y, 0), e.addEventListener("change", () => {
      this.Render(), this._Emit("viewChanged");
    }), e.update();
  }
  _Emit(e, t = null) {
    this.canvas.dispatchEvent(new CustomEvent(g4 + e, { detail: t }));
  }
  _Message(e, t = N2.INFO) {
    this._Emit("message", { message: e, level: t });
  }
  _OnPointerEvent(e) {
    const t = e.target.getBoundingClientRect(), n = { x: e.clientX - t.left, y: e.clientY - t.top };
    this._Emit(e.type, {
      domEvent: e,
      canvasCoord: n,
      position: this._CanvasToSceneCoord(n.x, n.y)
    });
  }
  /** @return {{x,y}} Scene coordinate corresponding to the specified canvas pixel coordinates. */
  _CanvasToSceneCoord(e, t) {
    const n = new I.Vector3(
      e * 2 / this.canvasWidth - 1,
      -t * 2 / this.canvasHeight + 1,
      1
    ).unproject(this.camera);
    return { x: n.x, y: n.y };
  }
  _OnResize(e) {
    this.SetSize(Math.floor(e.contentRect.width), Math.floor(e.contentRect.height));
  }
  _LoadBatch(e, t) {
    if (t.key.blockName !== null && t.key.geometryType !== J.GeometryType.BLOCK_INSTANCE && t.key.geometryType !== J.GeometryType.POINT_INSTANCE)
      return;
    const n = new _5(this, e, t).CreateObjects();
    for (const s of n) {
      if (s.userData.dxfHandle = t.dxfHandle, s.userData.dxfType = t.dxfType, s.userData.originalMaterial = s.material, s.userData.originalScale = s.scale.clone(), t.dxfHandle && s.geometry.getAttribute("position").itemSize === 2) {
        const i = s.geometry, o = i.getAttribute("position"), l = o.count, u = new Float32Array(l * 3);
        for (let p = 0; p < l; p++) {
          const f = o.getX(p), d = o.getY(p);
          isNaN(f) || isNaN(d) ? (u[p * 3] = 0, u[p * 3 + 1] = 0) : (u[p * 3] = f, u[p * 3 + 1] = d), u[p * 3 + 2] = 0;
        }
        const c = new I.BufferGeometry();
        c.setAttribute("position", new I.BufferAttribute(u, 3)), i.index && c.setIndex(i.index), $6(c), s.userData.raycastGeometry = c, s.raycast = function(p, f) {
          const d = this.geometry;
          this.geometry = this.userData.raycastGeometry, this.isLineSegments ? I.LineSegments.prototype.raycast.call(this, p, f) : this.isMesh ? I.Mesh.prototype.raycast.call(this, p, f) : this.isPoints && I.Points.prototype.raycast.call(this, p, f), this.geometry = d;
        };
      }
      this.scene.add(s), (s._dxfViewerLayer ?? this.defaultLayer).PushObject(s);
    }
  }
  _GetSimpleColorMaterial(e, t = E0.NONE) {
    const n = new M5(t, null, e, 0);
    let s = this.materials.find({ key: n });
    return s !== null || (s = {
      key: n,
      material: this._CreateSimpleColorMaterialInstance(e, t)
    }, this.materials.insert(s)), s.material;
  }
  _CreateSimpleColorMaterial(e = E0.NONE) {
    const t = this._GenerateShaders(e, !1);
    return new I.RawShaderMaterial({
      uniforms: {
        color: {
          value: new I.Color(16711935)
        }
      },
      vertexShader: t.vertex,
      fragmentShader: t.fragment,
      depthTest: !1,
      depthWrite: !1,
      glslVersion: I.GLSL3,
      side: I.DoubleSide
    });
  }
  /** @param color {number} Color RGB numeric value.
   * @param instanceType {number}
   */
  _CreateSimpleColorMaterialInstance(e, t = E0.NONE) {
    const s = this.simpleColorMaterial[t].clone();
    return s.uniforms.color = { value: new I.Color(e) }, s;
  }
  _GetSimplePointMaterial(e, t = E0.NONE) {
    const n = new M5(t, J.GeometryType.POINTS, e, 0);
    let s = this.materials.find({ key: n });
    return s !== null || (s = {
      key: n,
      material: this._CreateSimplePointMaterialInstance(
        e,
        this.options.pointSize,
        t
      )
    }, this.materials.insert(s)), s.material;
  }
  _CreateSimplePointMaterial(e = E0.NONE) {
    const t = this._GenerateShaders(e, !0);
    return new I.RawShaderMaterial({
      uniforms: {
        color: {
          value: new I.Color(16711935)
        },
        pointSize: {
          value: 2
        }
      },
      vertexShader: t.vertex,
      fragmentShader: t.fragment,
      depthTest: !1,
      depthWrite: !1,
      glslVersion: I.GLSL3
    });
  }
  /** @param color {number} Color RGB numeric value.
   * @param size {number} Rasterized point size in pixels.
   * @param instanceType {number}
   */
  _CreateSimplePointMaterialInstance(e, t = 2, n = E0.NONE) {
    const a = this.simplePointMaterial[n].clone();
    return a.uniforms.color = { value: new I.Color(e) }, a.uniforms.size = { value: t }, a;
  }
  _GenerateShaders(e, t) {
    const n = e === E0.FULL ? `
            /* First row. */
            in vec3 instanceTransform0;
            /* Second row. */
            in vec3 instanceTransform1;
            ` : "", s = e === E0.FULL ? `
            pos.xy = mat2(instanceTransform0[0], instanceTransform1[0],
                          instanceTransform0[1], instanceTransform1[1]) * pos.xy +
                     vec2(instanceTransform0[2], instanceTransform1[2]);
            ` : "", a = e === E0.POINT ? `
            in vec2 instanceTransform;
            ` : "", i = e === E0.POINT ? `
            pos.xy += instanceTransform;
            ` : "";
    return {
      vertex: `

            precision highp float;
            precision highp int;
            in vec2 position;
            ${n}
            ${a}
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            ${t ? "uniform float pointSize;" : ""}

            void main() {
                vec4 pos = vec4(position, 0.0, 1.0);
                ${s}
                ${i}
                gl_Position = projectionMatrix * modelViewMatrix * pos;
                ${t ? "gl_PointSize = pointSize;" : ""}
            }
            `,
      fragment: `

            precision highp float;
            precision highp int;
            uniform vec3 color;
            out vec4 fragColor;

            void main() {
                fragColor = vec4(color, 1.0);
            }
            `
    };
  }
  /** Transform entity color using the active color strategy.
   * 
   * Delegates to the configured RendererColorStrategy for color transformation.
   * This is called once per unique color at material creation time.
   * 
   * @param color {number} RGB value.
   * @return {number} Transformed RGB value to use for rendering.
   */
  _TransformColor(e) {
    const t = mn(this.clearColor);
    return this.colorStrategy.transformColor(e, t);
  }
}
g2.MessageLevel = N2;
g2.DefaultOptions = {
  canvasWidth: 400,
  canvasHeight: 300,
  /** Automatically resize canvas when the container is resized. This options utilizes
   *  ResizeObserver API which is still not fully standardized. The specified canvas size is
   *  ignored if the option is enabled.
   */
  autoResize: !1,
  /** Frame buffer clear color. */
  clearColor: new I.Color("#000"),
  /** Frame buffer clear color alpha value. */
  clearAlpha: 1,
  /** Use alpha channel in a framebuffer. */
  canvasAlpha: !1,
  /** Assume premultiplied alpha in a framebuffer. */
  canvasPremultipliedAlpha: !0,
  /** Use antialiasing. May degrade performance on poor hardware. */
  antialias: !0,
  /** Correct entities colors to ensure that they are always visible with the current background
   * color.
   */
  colorCorrection: !1,
  /** Simpler version of colorCorrection - just invert pure white or black entities if they are
   * invisible on current background color.
   */
  blackWhiteInversion: !0,
  /** Size in pixels for rasterized points (dot mark). */
  pointSize: 2,
  /** Scene generation options. */
  sceneOptions: c2.DefaultOptions,
  /** Retain the simple object representing the parsed DXF - will consume a lot of additional
   * memory.
   */
  retainParsedDxf: !1,
  /** Whether to preserve the buffers until manually cleared or overwritten. */
  preserveDrawingBuffer: !1,
  /** Encoding to use for decoding DXF file text content. DXF files newer than DXF R2004 (AC1018)
   * use UTF-8 encoding. Older files use some code page which is specified in $DWGCODEPAGE header
   * variable. Currently parser is implemented in such a way that encoding must be specified
   * before the content is parsed so there is no chance to use this variable dynamically. This may
   * be a subject for future changes. The specified value should be suitable for passing as
   * `TextDecoder` constructor `label` parameter.
   */
  fileEncoding: "utf-8"
};
g2.SetupWorker = function() {
  new F0(self, !0);
};
const E0 = Object.freeze({
  /** Not instanced. */
  NONE: 0,
  /** Full affine transform per instance. */
  FULL: 1,
  /** Point instances, 2D-translation vector per instance. */
  POINT: 2,
  /** Number of types. */
  MAX: 3
});
function $6(r) {
  const e = r.getAttribute("position");
  if (!e || e.count === 0) return;
  const t = e.array, n = e.itemSize;
  let s = !1, a = 1 / 0, i = 1 / 0, o = 1 / 0, l = -1 / 0, u = -1 / 0, c = -1 / 0;
  for (let f = 0; f < t.length; f += n) {
    let d = t[f];
    isFinite(d) || (d = 0, t[f] = 0, s = !0);
    let v = n > 1 ? t[f + 1] : 0;
    isFinite(v) || (v = 0, t[f + 1] = 0, s = !0);
    let y = n > 2 ? t[f + 2] : 0;
    isFinite(y) || (y = 0, t[f + 2] = 0, s = !0), d < a && (a = d), d > l && (l = d), v < i && (i = v), v > u && (u = v), y < o && (o = y), y > c && (c = y);
  }
  s && (e.needsUpdate = !0), a === 1 / 0 && (a = i = o = 0, l = u = c = 0), r.boundingBox || (r.boundingBox = new I.Box3()), r.boundingBox.min.set(a, i, o), r.boundingBox.max.set(l, u, c), r.boundingSphere || (r.boundingSphere = new I.Sphere()), r.boundingBox.getCenter(r.boundingSphere.center);
  const p = new I.Vector3();
  r.boundingBox.getSize(p), r.boundingSphere.radius = p.length() * 0.5;
}
class _5 {
  /**
   * @param {DxfViewer} viewer
   * @param scene Serialized scene.
   * @param batch Serialized scene batch.
   */
  constructor(e, t, n) {
    if (this.viewer = e, this.key = n.key, n.hasOwnProperty("verticesOffset")) {
      const s = new Float32Array(
        t.vertices,
        n.verticesOffset * Float32Array.BYTES_PER_ELEMENT,
        n.verticesSize
      );
      (this.key.geometryType !== J.GeometryType.POINT_INSTANCE || t.pointShapeHasDot) && (this.vertices = new I.BufferAttribute(s, 2)), this.key.geometryType === J.GeometryType.POINT_INSTANCE && (this.transforms = new I.InstancedBufferAttribute(s, 2));
    }
    if (n.hasOwnProperty("chunks")) {
      this.chunks = [];
      for (const s of n.chunks) {
        const a = new Float32Array(
          t.vertices,
          s.verticesOffset * Float32Array.BYTES_PER_ELEMENT,
          s.verticesSize
        ), i = new Uint16Array(
          t.indices,
          s.indicesOffset * Uint16Array.BYTES_PER_ELEMENT,
          s.indicesSize
        );
        this.chunks.push({
          vertices: new I.BufferAttribute(a, 2),
          indices: new I.BufferAttribute(i, 1)
        });
      }
    }
    if (n.hasOwnProperty("transformsOffset")) {
      const s = new Float32Array(
        t.transforms,
        n.transformsOffset * Float32Array.BYTES_PER_ELEMENT,
        n.transformsSize
      ), a = new I.InstancedInterleavedBuffer(s, 6);
      this.transforms0 = new I.InterleavedBufferAttribute(a, 3, 0), this.transforms1 = new I.InterleavedBufferAttribute(a, 3, 3);
    }
    this.layer = this.key.layerName !== null ? this.viewer.layers.get(this.key.layerName) : null;
  }
  GetInstanceType() {
    switch (this.key.geometryType) {
      case J.GeometryType.BLOCK_INSTANCE:
        return E0.FULL;
      case J.GeometryType.POINT_INSTANCE:
        return E0.POINT;
      default:
        return E0.NONE;
    }
  }
  /** Create scene objects corresponding to batch data.
   * @param {?Batch} instanceBatch Batch with instance transform. Null for non-instanced object.
   */
  *CreateObjects(e = null) {
    if (this.key.geometryType === J.GeometryType.BLOCK_INSTANCE || this.key.geometryType === J.GeometryType.POINT_INSTANCE) {
      if (e !== null)
        throw new Error("Unexpected instance batch specified for instance batch");
      yield* this._CreateBlockInstanceObjects();
      return;
    }
    yield* this._CreateObjects(e);
  }
  *_CreateObjects(e) {
    const t = e ? e._GetInstanceColor(this) : this.key.color, n = (e == null ? void 0 : e.layer) ?? this.layer, a = (this.key.geometryType === J.GeometryType.POINTS || this.key.geometryType === J.GeometryType.POINT_INSTANCE ? this.viewer._GetSimplePointMaterial : this.viewer._GetSimpleColorMaterial).call(
      this.viewer,
      this.viewer._TransformColor(t),
      (e == null ? void 0 : e.GetInstanceType()) ?? E0.NONE
    );
    let i;
    switch (this.key.geometryType) {
      case J.GeometryType.POINTS:
      /* This method also called for creating dots for shaped point instances. */
      case J.GeometryType.POINT_INSTANCE:
        i = I.Points;
        break;
      case J.GeometryType.LINES:
      case J.GeometryType.INDEXED_LINES:
        i = I.LineSegments;
        break;
      case J.GeometryType.TRIANGLES:
      case J.GeometryType.INDEXED_TRIANGLES:
        i = I.Mesh;
        break;
      default:
        throw new Error("Unexpected geometry type:" + this.key.geometryType);
    }
    function o(l, u) {
      const c = e ? new I.InstancedBufferGeometry() : new I.BufferGeometry();
      c.setAttribute("position", l), e == null || e._SetInstanceTransformAttribute(c), u && c.setIndex(u), $6(c);
      const p = new i(c, a);
      return p.frustumCulled = !1, p.matrixAutoUpdate = !1, p._dxfViewerLayer = n, p;
    }
    if (this.chunks)
      for (const l of this.chunks)
        yield o(l.vertices, l.indices);
    else
      yield o(this.vertices);
  }
  /**
   * @param {InstancedBufferGeometry} geometry
   */
  _SetInstanceTransformAttribute(e) {
    if (!e.isInstancedBufferGeometry)
      throw new Error("InstancedBufferGeometry expected");
    this.key.geometryType === J.GeometryType.POINT_INSTANCE ? e.setAttribute("instanceTransform", this.transforms) : (e.setAttribute("instanceTransform0", this.transforms0), e.setAttribute("instanceTransform1", this.transforms1));
  }
  *_CreateBlockInstanceObjects() {
    const e = this.viewer.blocks.get(this.key.blockName);
    if (e) {
      for (const t of e.batches)
        yield* t.CreateObjects(this);
      this.vertices && (yield* this._CreateObjects());
    }
  }
  /**
   * @param {Batch} blockBatch Block definition batch.
   * @return {number} RGB color value for a block instance.
   */
  _GetInstanceColor(e) {
    const t = e.key.color;
    return t === P0.BY_BLOCK ? this.key.color : t === P0.BY_LAYER ? e.layer ? e.layer.color : this.layer ? this.layer.color : 0 : t;
  }
}
class N5 {
  constructor(e, t, n) {
    this.name = e, this.displayName = t, this.color = n, this.objects = [];
  }
  PushObject(e) {
    this.objects.push(e);
  }
  Dispose() {
    for (const e of this.objects)
      e.geometry.dispose();
    this.objects = null;
  }
}
class gn {
  constructor() {
    this.batches = [];
  }
  /** @param batch {Batch} */
  PushBatch(e) {
    this.batches.push(e);
  }
}
function m4(r) {
  return r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
}
function mn(r) {
  const e = m4(((r & 16711680) >>> 16) / 255), t = m4(((r & 65280) >>> 8) / 255), n = m4((r & 255) / 255);
  return e * 0.2126 + t * 0.7152 + n * 0.0722;
}
export {
  F3 as DxfFetcher,
  g2 as DxfViewer
};
//# sourceMappingURL=index-DAnhd26T.js.map
