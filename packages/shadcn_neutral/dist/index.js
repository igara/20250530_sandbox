import { jsx as N, jsxs as ve } from "react/jsx-runtime";
import * as g from "react";
import D, { forwardRef as jr, createElement as Pn, useLayoutEffect as Vr, useState as qt, createContext as Ua, useContext as Xa, useCallback as le, useRef as zt, useEffect as Za, useMemo as fn } from "react";
import * as qr from "react-dom";
import Qa from "react-dom";
function or(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Gr(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = or(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : or(e[o], null);
        }
      };
  };
}
function Xe(...e) {
  return g.useCallback(Gr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Yn(e) {
  const t = /* @__PURE__ */ Ja(e), n = g.forwardRef((r, o) => {
    const { children: a, ...i } = r, s = g.Children.toArray(a), c = s.find(ts);
    if (c) {
      const l = c.props.children, u = s.map((d) => d === c ? g.Children.count(l) > 1 ? g.Children.only(null) : g.isValidElement(l) ? l.props.children : null : d);
      return /* @__PURE__ */ N(t, { ...i, ref: o, children: g.isValidElement(l) ? g.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ N(t, { ...i, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ka = /* @__PURE__ */ Yn("Slot");
// @__NO_SIDE_EFFECTS__
function Ja(e) {
  const t = g.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (g.isValidElement(o)) {
      const i = rs(o), s = ns(a, o.props);
      return o.type !== g.Fragment && (s.ref = r ? Gr(r, i) : i), g.cloneElement(o, s);
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var es = Symbol("radix.slottable");
function ts(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === es;
}
function ns(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
      const c = a(...s);
      return o(...s), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function rs(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ur(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ur(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Xr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ur(e)) && (r && (r += " "), r += t);
  return r;
}
const ar = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, sr = Xr, os = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return sr(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, i = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null) return null;
    const f = ar(u) || ar(d);
    return o[l][f];
  }), s = n && Object.entries(n).reduce((l, u) => {
    let [d, f] = u;
    return f === void 0 || (l[d] = f), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: f, ...h } = u;
    return Object.entries(h).every((v) => {
      let [m, y] = v;
      return Array.isArray(y) ? y.includes({
        ...a,
        ...s
      }[m]) : {
        ...a,
        ...s
      }[m] === y;
    }) ? [
      ...l,
      d,
      f
    ] : l;
  }, []);
  return sr(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, $n = "-", as = (e) => {
  const t = is(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split($n);
      return s[0] === "" && s.length !== 1 && s.shift(), Zr(s, t) || ss(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const c = n[i] || [];
      return s && r[i] ? [...c, ...r[i]] : c;
    }
  };
}, Zr = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Zr(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join($n);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}, ir = /^\[(.+)\]$/, ss = (e) => {
  if (ir.test(e)) {
    const t = ir.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, is = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    En(n[o], r, o, t);
  return r;
}, En = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : cr(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (cs(o)) {
        En(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, i]) => {
      En(i, cr(t, a), n, r);
    });
  });
}, cr = (e, t) => {
  let n = e;
  return t.split($n).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, cs = (e) => e.isThemeGetter, ls = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, i) => {
    n.set(a, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = r.get(a)) !== void 0)
        return o(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : o(a, i);
    }
  };
}, Nn = "!", An = ":", us = An.length, ds = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let i = 0, s = 0, c = 0, l;
    for (let v = 0; v < o.length; v++) {
      let m = o[v];
      if (i === 0 && s === 0) {
        if (m === An) {
          a.push(o.slice(c, v)), c = v + us;
          continue;
        }
        if (m === "/") {
          l = v;
          continue;
        }
      }
      m === "[" ? i++ : m === "]" ? i-- : m === "(" ? s++ : m === ")" && s--;
    }
    const u = a.length === 0 ? o : o.substring(c), d = fs(u), f = d !== u, h = l && l > c ? l - c : void 0;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + An, a = r;
    r = (i) => i.startsWith(o) ? a(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, fs = (e) => e.endsWith(Nn) ? e.substring(0, e.length - 1) : e.startsWith(Nn) ? e.substring(1) : e, ms = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let a = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...a.sort(), i), a = []) : a.push(i);
    }), o.push(...a.sort()), o;
  };
}, hs = (e) => ({
  cache: ls(e.cacheSize),
  parseClassName: ds(e),
  sortModifiers: ms(e),
  ...as(e)
}), gs = /\s+/, ps = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, i = [], s = e.trim().split(gs);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const u = s[l], {
      isExternal: d,
      modifiers: f,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: m
    } = n(u);
    if (d) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let y = !!m, b = r(y ? v.substring(0, m) : v);
    if (!b) {
      if (!y) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (b = r(v), !b) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      y = !1;
    }
    const x = a(f).join(":"), w = h ? x + Nn : x, k = w + b;
    if (i.includes(k))
      continue;
    i.push(k);
    const p = o(b, y);
    for (let S = 0; S < p.length; ++S) {
      const M = p[S];
      i.push(w + M);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function vs() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Qr(t)) && (r && (r += " "), r += n);
  return r;
}
const Qr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Qr(e[r])) && (n && (n += " "), n += t);
  return n;
};
function ys(e, ...t) {
  let n, r, o, a = i;
  function i(c) {
    const l = t.reduce((u, d) => d(u), e());
    return n = hs(l), r = n.cache.get, o = n.cache.set, a = s, s(c);
  }
  function s(c) {
    const l = r(c);
    if (l)
      return l;
    const u = ps(c, n);
    return o(c, u), u;
  }
  return function() {
    return a(vs.apply(null, arguments));
  };
}
const te = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Kr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Jr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, bs = /^\d+\/\d+$/, ws = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, xs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ks = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ms = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Os = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, nt = (e) => bs.test(e), F = (e) => !!e && !Number.isNaN(Number(e)), ze = (e) => !!e && Number.isInteger(Number(e)), mn = (e) => e.endsWith("%") && F(e.slice(0, -1)), Te = (e) => ws.test(e), Cs = () => !0, Ss = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  xs.test(e) && !ks.test(e)
), eo = () => !1, Ds = (e) => Ms.test(e), Ps = (e) => Os.test(e), Es = (e) => !P(e) && !E(e), Ns = (e) => ht(e, ro, eo), P = (e) => Kr.test(e), Ke = (e) => ht(e, oo, Ss), hn = (e) => ht(e, _s, F), lr = (e) => ht(e, to, eo), As = (e) => ht(e, no, Ps), Rt = (e) => ht(e, ao, Ds), E = (e) => Jr.test(e), xt = (e) => gt(e, oo), Ws = (e) => gt(e, Fs), ur = (e) => gt(e, to), Ts = (e) => gt(e, ro), Rs = (e) => gt(e, no), _t = (e) => gt(e, ao, !0), ht = (e, t, n) => {
  const r = Kr.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, gt = (e, t, n = !1) => {
  const r = Jr.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, to = (e) => e === "position" || e === "percentage", no = (e) => e === "image" || e === "url", ro = (e) => e === "length" || e === "size" || e === "bg-size", oo = (e) => e === "length", _s = (e) => e === "number", Fs = (e) => e === "family-name", ao = (e) => e === "shadow", Is = () => {
  const e = te("color"), t = te("font"), n = te("text"), r = te("font-weight"), o = te("tracking"), a = te("leading"), i = te("breakpoint"), s = te("container"), c = te("spacing"), l = te("radius"), u = te("shadow"), d = te("inset-shadow"), f = te("text-shadow"), h = te("drop-shadow"), v = te("blur"), m = te("perspective"), y = te("aspect"), b = te("ease"), x = te("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], p = () => [...k(), E, P], S = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], O = () => [E, P, c], T = () => [nt, "full", "auto", ...O()], _ = () => [ze, "none", "subgrid", E, P], $ = () => ["auto", {
    span: ["full", ze, E, P]
  }, ze, E, P], I = () => [ze, "auto", E, P], H = () => ["auto", "min", "max", "fr", E, P], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], j = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], R = () => ["auto", ...O()], L = () => [nt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], C = () => [e, E, P], z = () => [...k(), ur, lr, {
    position: [E, P]
  }], Z = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ue = () => ["auto", "cover", "contain", Ts, Ns, {
    size: [E, P]
  }], de = () => [mn, xt, Ke], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    E,
    P
  ], ee = () => ["", F, xt, Ke], Ee = () => ["solid", "dashed", "dotted", "double"], Ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [F, mn, ur, lr], Ye = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    E,
    P
  ], ce = () => ["none", F, E, P], Ae = () => ["none", F, E, P], $e = () => [F, E, P], We = () => [nt, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Te],
      breakpoint: [Te],
      color: [Cs],
      container: [Te],
      "drop-shadow": [Te],
      ease: ["in", "out", "in-out"],
      font: [Es],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Te],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Te],
      shadow: [Te],
      spacing: ["px", F],
      text: [Te],
      "text-shadow": [Te],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", nt, P, E, y]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [F, P, E, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: p()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ze, "auto", E, P]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [nt, "full", "auto", s, ...O()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [F, nt, "auto", "initial", "none", P]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", F, E, P]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", F, E, P]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ze, "first", "last", "none", E, P]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": _()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: $()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": _()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: $()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": H()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": H()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: O()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": O()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": O()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...W(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...j(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...j()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...W()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...j(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...j(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": W()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...j(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...j()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: O()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: O()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: O()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: O()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: O()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: O()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: O()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: O()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: O()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: R()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: R()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: R()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: R()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: R()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: R()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: R()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: R()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: R()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": O()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": O()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: L()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...L()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...L()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, xt, Ke]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, E, hn]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", mn, P]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ws, P, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, E, P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [F, "none", E, hn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...O()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E, P]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", E, P]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: C()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: C()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [F, "from-font", "auto", E, Ke]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: C()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [F, "auto", E, P]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: O()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E, P]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", E, P]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: z()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Z()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ue()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ze, E, P],
          radial: ["", E, P],
          conic: [ze, E, P]
        }, Rs, As]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: C()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: de()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: de()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: de()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: C()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Q()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Q()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Q()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Q()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Q()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Q()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Q()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Q()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Q()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Q()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Q()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Q()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Q()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Q()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Q()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ee()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ee()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ee()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ee()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ee()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ee()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ee()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ee()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ee()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ee()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": ee()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Ee(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ee(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: C()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": C()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": C()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": C()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": C()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": C()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": C()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": C()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": C()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: C()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ee(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [F, E, P]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", F, xt, Ke]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: C()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          u,
          _t,
          Rt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: C()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, _t, Rt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": C()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ee()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: C()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [F, Ke]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": C()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ee()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": C()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, _t, Rt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [F, E, P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Ne(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ne()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [F]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [E, P]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [F]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": C()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: z()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Z()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ue()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", E, P]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          E,
          P
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ye()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [F, E, P]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [F, E, P]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          _t,
          Rt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", F, E, P]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [F, E, P]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", F, E, P]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [F, E, P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", F, E, P]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          E,
          P
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ye()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [F, E, P]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [F, E, P]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", F, E, P]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [F, E, P]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", F, E, P]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [F, E, P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [F, E, P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", F, E, P]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": O()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": O()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": O()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", E, P]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [F, "initial", E, P]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, E, P]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [F, E, P]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, E, P]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [m, E, P]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": p()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ce()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ce()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ce()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ce()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Ae()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Ae()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Ae()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Ae()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: $e()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": $e()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": $e()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [E, P, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: p()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: We()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": We()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": We()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": We()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: C()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: C()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E, P]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": O()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", E, P]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [F, xt, Ke, hn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...C()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Bs = /* @__PURE__ */ ys(Is);
function Y(...e) {
  return Bs(Xr(e));
}
const Wn = os(
  `
    inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm
    font-medium whitespace-nowrap transition-all outline-none
    focus-visible:border-ring focus-visible:ring-[3px]
    focus-visible:ring-ring/50
    disabled:pointer-events-none disabled:opacity-50
    aria-invalid:border-destructive aria-invalid:ring-destructive/20
    dark:aria-invalid:ring-destructive/40
    [&_svg]:pointer-events-none [&_svg]:shrink-0
    [&_svg:not([class*='size-'])]:size-4
  `,
  {
    variants: {
      variant: {
        default: `
            bg-primary text-primary-foreground shadow-xs
            hover:bg-primary/90
          `,
        destructive: `
            bg-destructive text-white shadow-xs
            hover:bg-destructive/90
            focus-visible:ring-destructive/20
            dark:bg-destructive/60 dark:focus-visible:ring-destructive/40
          `,
        outline: `
            border bg-background shadow-xs
            hover:bg-accent hover:text-accent-foreground
            dark:border-input dark:bg-input/30 dark:hover:bg-input/50
          `,
        secondary: `
            bg-secondary text-secondary-foreground shadow-xs
            hover:bg-secondary/80
          `,
        ghost: `
            hover:bg-accent hover:text-accent-foreground
            dark:hover:bg-accent/50
          `,
        link: `
          text-primary underline-offset-4
          hover:underline
        `
      },
      size: {
        default: `
          h-9 px-4 py-2
          has-[>svg]:px-3
        `,
        sm: `
          h-8 gap-1.5 rounded-md px-3
          has-[>svg]:px-2.5
        `,
        lg: `
          h-10 rounded-md px-6
          has-[>svg]:px-4
        `,
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Ys({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...o
}) {
  return /* @__PURE__ */ N(
    r ? Ka : "button",
    {
      "data-slot": "button",
      className: Y(Wn({
        variant: t,
        size: n,
        className: e
      })),
      ...o
    }
  );
}
function $s({
  className: e,
  type: t,
  ...n
}) {
  return /* @__PURE__ */ N(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: Y(
        `
          flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent
          px-3 py-1 text-base shadow-xs transition-[color,box-shadow]
          outline-none
          selection:bg-primary selection:text-primary-foreground
          file:inline-flex file:h-7 file:border-0 file:bg-transparent
          file:text-sm file:font-medium file:text-foreground
          placeholder:text-muted-foreground
          disabled:pointer-events-none disabled:cursor-not-allowed
          disabled:opacity-50
          md:text-sm
          dark:bg-input/30
        `,
        `
          focus-visible:border-ring focus-visible:ring-[3px]
          focus-visible:ring-ring/50
        `,
        `
          aria-invalid:border-destructive aria-invalid:ring-destructive/20
          dark:aria-invalid:ring-destructive/40
        `,
        e
      ),
      ...n
    }
  );
}
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zs = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), dr = (e) => {
  const t = zs(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, so = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Hs = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var js = {
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
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = jr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: i,
    ...s
  }, c) => Pn(
    "svg",
    {
      ref: c,
      ...js,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: so("lucide", o),
      ...!a && !Hs(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...i.map(([l, u]) => Pn(l, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = (e, t) => {
  const n = jr(
    ({ className: r, ...o }, a) => Pn(Vs, {
      ref: a,
      iconNode: t,
      className: so(
        `lucide-${Ls(dr(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = dr(e), n;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Gs = pt("chevron-down", qs);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Xs = pt("chevron-left", Us);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Qs = pt("chevron-right", Zs);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Js = pt("image", Ks);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ei = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], ti = pt("upload", ei);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ri = pt("x", ni);
function Pm({
  onImageSelect: e,
  onImagePreviewLoad: t,
  maxFileSize: n = 5 * 1024 * 1024,
  // デフォルト5MB
  acceptedTypes: r = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp"
  ],
  showPreview: o = !0,
  previewClassName: a,
  dragDropClassName: i,
  errorMessage: s,
  disabled: c,
  onChange: l,
  // onChangeを明示的に取り出す
  ...u
}) {
  const [
    d,
    f
  ] = g.useState(null), [
    h,
    v
  ] = g.useState(!1), [
    m,
    y
  ] = g.useState(null), [
    b,
    x
  ] = g.useState(null), [
    w,
    k
  ] = g.useState(!1), p = g.useRef(null), S = (W) => r.includes(W.type) ? W.size > n ? `ファイルサイズが大きすぎます。最大サイズ: ${Math.round(n / 1048576 * 100) / 100}MB` : null : `サポートされていないファイル形式です。対応形式: ${r.join(", ")}`, M = (W) => {
    if (w)
      return;
    if (k(!0), y(null), !W) {
      x(null), f(null), e == null || e(null), t == null || t(null), k(!1);
      return;
    }
    const j = S(W);
    if (j) {
      y(j), k(!1);
      return;
    }
    x(W), e == null || e(W);
    const R = new FileReader();
    R.onload = (L) => {
      var z;
      const C = (z = L.target) == null ? void 0 : z.result;
      f(C), t == null || t(C), k(!1);
    }, R.onerror = () => {
      y("画像の読み込みに失敗しました"), k(!1);
    }, R.readAsDataURL(W);
  }, O = (W) => {
    var R;
    const j = ((R = W.target.files) == null ? void 0 : R[0]) || null;
    M(j), l == null || l(W);
  }, T = (W) => {
    W.preventDefault(), c || v(!0);
  }, _ = (W) => {
    W.preventDefault(), v(!1);
  }, $ = (W) => {
    if (W.preventDefault(), v(!1), c) return;
    const R = Array.from(W.dataTransfer.files).find((L) => L.type.startsWith("image/"));
    R && M(R);
  }, I = () => {
    p.current && (p.current.value = ""), k(!1), M(null);
  }, H = (W) => {
    W.target !== p.current && !c && p.current && p.current.click();
  };
  return /* @__PURE__ */ ve("div", { className: "w-full space-y-2", children: [
    /* @__PURE__ */ ve(
      "div",
      {
        className: Y(
          `
            relative flex min-h-[120px] cursor-pointer flex-col items-center
            justify-center rounded-lg border-2 border-dashed p-6
            transition-colors duration-200
          `,
          h && !c ? "border-primary bg-primary/5" : `
              border-muted-foreground/25
              hover:border-muted-foreground/50
            `,
          c && "cursor-not-allowed opacity-50",
          m && "border-destructive bg-destructive/5",
          i
        ),
        onDragOver: T,
        onDragLeave: _,
        onDrop: $,
        onClick: H,
        children: [
          /* @__PURE__ */ N(
            $s,
            {
              ref: p,
              type: "file",
              accept: r.join(","),
              onChange: O,
              className: "absolute inset-0 h-full w-full cursor-pointer opacity-0",
              disabled: c,
              ...u
            }
          ),
          o && d ? /* @__PURE__ */ ve("div", { className: "relative", children: [
            /* @__PURE__ */ N(
              "img",
              {
                src: d,
                alt: "プレビュー",
                className: Y(
                  "max-h-32 max-w-full rounded-md object-contain",
                  a
                )
              }
            ),
            /* @__PURE__ */ N(
              "button",
              {
                type: "button",
                onClick: (W) => {
                  W.stopPropagation(), I();
                },
                className: Y(
                  `
                  absolute -top-2 -right-2 flex h-6 w-6 items-center
                  justify-center rounded-full bg-destructive transition-colors
                  hover:bg-destructive/90
                `,
                  c && "pointer-events-none opacity-50"
                ),
                disabled: c,
                children: /* @__PURE__ */ N(ri, { className: "h-3 w-3" })
              }
            )
          ] }) : (
            /* アップロードプレースホルダー */
            /* @__PURE__ */ ve("div", { className: "space-y-2 text-center", children: [
              /* @__PURE__ */ N("div", { className: "mx-auto h-12 w-12 text-muted-foreground", children: b ? /* @__PURE__ */ N(Js, { className: "h-full w-full" }) : /* @__PURE__ */ N(ti, { className: "h-full w-full" }) }),
              /* @__PURE__ */ ve("div", { className: "space-y-1", children: [
                /* @__PURE__ */ N("p", { className: "text-sm font-medium text-foreground", children: b ? b.name : "クリックして画像を選択" }),
                /* @__PURE__ */ N("p", { className: "text-xs text-muted-foreground", children: "またはファイルをドラッグ&ドロップ" }),
                /* @__PURE__ */ ve("p", { className: "text-xs text-muted-foreground", children: [
                  "最大 ",
                  Math.round(n / (1024 * 1024) * 100) / 100,
                  "MB"
                ] })
              ] })
            ] })
          )
        ]
      }
    ),
    (m || s) && /* @__PURE__ */ N("p", { className: "text-sm text-destructive", children: m || s }),
    b && !m && /* @__PURE__ */ ve("div", { className: "space-y-1 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ ve("p", { children: [
        "ファイル名: ",
        b.name
      ] }),
      /* @__PURE__ */ ve("p", { children: [
        "サイズ: ",
        Math.round(b.size / 1024 * 100) / 100,
        " KB"
      ] }),
      /* @__PURE__ */ ve("p", { children: [
        "形式: ",
        b.type
      ] })
    ] })
  ] });
}
function Ve(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function io(e, t = []) {
  let n = [];
  function r(a, i) {
    const s = g.createContext(i), c = n.length;
    n = [...n, i];
    const l = (d) => {
      var b;
      const { scope: f, children: h, ...v } = d, m = ((b = f == null ? void 0 : f[e]) == null ? void 0 : b[c]) || s, y = g.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ N(m.Provider, { value: y, children: h });
    };
    l.displayName = a + "Provider";
    function u(d, f) {
      var m;
      const h = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[c]) || s, v = g.useContext(h);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [l, u];
  }
  const o = () => {
    const a = n.map((i) => g.createContext(i));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || a;
      return g.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, oi(o, ...t)];
}
function oi(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const i = r.reduce((s, { useScope: c, scopeName: l }) => {
        const d = c(a)[`__scope${l}`];
        return { ...s, ...d };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var ai = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Se = ai.reduce((e, t) => {
  const n = /* @__PURE__ */ Yn(`Primitive.${t}`), r = g.forwardRef((o, a) => {
    const { asChild: i, ...s } = o, c = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ N(c, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function si(e, t) {
  e && qr.flushSync(() => e.dispatchEvent(t));
}
function ut(e) {
  const t = g.useRef(e);
  return g.useEffect(() => {
    t.current = e;
  }), g.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function ii(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ut(e);
  g.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ci = "DismissableLayer", Tn = "dismissableLayer.update", li = "dismissableLayer.pointerDownOutside", ui = "dismissableLayer.focusOutside", fr, co = g.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lo = g.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: i,
      onDismiss: s,
      ...c
    } = e, l = g.useContext(co), [u, d] = g.useState(null), f = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = g.useState({}), v = Xe(t, (M) => d(M)), m = Array.from(l.layers), [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), b = m.indexOf(y), x = u ? m.indexOf(u) : -1, w = l.layersWithOutsidePointerEventsDisabled.size > 0, k = x >= b, p = mi((M) => {
      const O = M.target, T = [...l.branches].some((_) => _.contains(O));
      !k || T || (o == null || o(M), i == null || i(M), M.defaultPrevented || s == null || s());
    }, f), S = hi((M) => {
      const O = M.target;
      [...l.branches].some((_) => _.contains(O)) || (a == null || a(M), i == null || i(M), M.defaultPrevented || s == null || s());
    }, f);
    return ii((M) => {
      x === l.layers.size - 1 && (r == null || r(M), !M.defaultPrevented && s && (M.preventDefault(), s()));
    }, f), g.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (fr = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), mr(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = fr);
        };
    }, [u, f, n, l]), g.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), mr());
    }, [u, l]), g.useEffect(() => {
      const M = () => h({});
      return document.addEventListener(Tn, M), () => document.removeEventListener(Tn, M);
    }, []), /* @__PURE__ */ N(
      Se.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: w ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ve(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: Ve(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: Ve(
          e.onPointerDownCapture,
          p.onPointerDownCapture
        )
      }
    );
  }
);
lo.displayName = ci;
var di = "DismissableLayerBranch", fi = g.forwardRef((e, t) => {
  const n = g.useContext(co), r = g.useRef(null), o = Xe(t, r);
  return g.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ N(Se.div, { ...e, ref: o });
});
fi.displayName = di;
function mi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ut(e), r = g.useRef(!1), o = g.useRef(() => {
  });
  return g.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          uo(
            li,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function hi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ut(e), r = g.useRef(!1);
  return g.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && uo(ui, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function mr() {
  const e = new CustomEvent(Tn);
  document.dispatchEvent(e);
}
function uo(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? si(o, a) : o.dispatchEvent(a);
}
var gn = 0;
function gi() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? hr()), document.body.insertAdjacentElement("beforeend", e[1] ?? hr()), gn++, () => {
      gn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), gn--;
    };
  }, []);
}
function hr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var pn = "focusScope.autoFocusOnMount", vn = "focusScope.autoFocusOnUnmount", gr = { bubbles: !1, cancelable: !0 }, pi = "FocusScope", fo = g.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...i
  } = e, [s, c] = g.useState(null), l = ut(o), u = ut(a), d = g.useRef(null), f = Xe(t, (m) => c(m)), h = g.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  g.useEffect(() => {
    if (r) {
      let m = function(w) {
        if (h.paused || !s) return;
        const k = w.target;
        s.contains(k) ? d.current = k : je(d.current, { select: !0 });
      }, y = function(w) {
        if (h.paused || !s) return;
        const k = w.relatedTarget;
        k !== null && (s.contains(k) || je(d.current, { select: !0 }));
      }, b = function(w) {
        if (document.activeElement === document.body)
          for (const p of w)
            p.removedNodes.length > 0 && je(s);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", y);
      const x = new MutationObserver(b);
      return s && x.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", y), x.disconnect();
      };
    }
  }, [r, s, h.paused]), g.useEffect(() => {
    if (s) {
      vr.add(h);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const b = new CustomEvent(pn, gr);
        s.addEventListener(pn, l), s.dispatchEvent(b), b.defaultPrevented || (vi(ki(mo(s)), { select: !0 }), document.activeElement === m && je(s));
      }
      return () => {
        s.removeEventListener(pn, l), setTimeout(() => {
          const b = new CustomEvent(vn, gr);
          s.addEventListener(vn, u), s.dispatchEvent(b), b.defaultPrevented || je(m ?? document.body, { select: !0 }), s.removeEventListener(vn, u), vr.remove(h);
        }, 0);
      };
    }
  }, [s, l, u, h]);
  const v = g.useCallback(
    (m) => {
      if (!n && !r || h.paused) return;
      const y = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, b = document.activeElement;
      if (y && b) {
        const x = m.currentTarget, [w, k] = yi(x);
        w && k ? !m.shiftKey && b === k ? (m.preventDefault(), n && je(w, { select: !0 })) : m.shiftKey && b === w && (m.preventDefault(), n && je(k, { select: !0 })) : b === x && m.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ N(Se.div, { tabIndex: -1, ...i, ref: f, onKeyDown: v });
});
fo.displayName = pi;
function vi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (je(r, { select: t }), document.activeElement !== n) return;
}
function yi(e) {
  const t = mo(e), n = pr(t, e), r = pr(t.reverse(), e);
  return [n, r];
}
function mo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function pr(e, t) {
  for (const n of e)
    if (!bi(n, { upTo: t })) return n;
}
function bi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function wi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function je(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && wi(e) && t && e.select();
  }
}
var vr = xi();
function xi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = yr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = yr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function yr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ki(e) {
  return e.filter((t) => t.tagName !== "A");
}
var qe = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {
}, Mi = g[" useId ".trim().toString()] || (() => {
}), Oi = 0;
function Ci(e) {
  const [t, n] = g.useState(Mi());
  return qe(() => {
    n((r) => r ?? String(Oi++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Si = ["top", "right", "bottom", "left"], Ge = Math.min, se = Math.max, Gt = Math.round, Ft = Math.floor, Oe = (e) => ({
  x: e,
  y: e
}), Di = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Pi = {
  start: "end",
  end: "start"
};
function Rn(e, t, n) {
  return se(e, Ge(t, n));
}
function Fe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ie(e) {
  return e.split("-")[0];
}
function vt(e) {
  return e.split("-")[1];
}
function Ln(e) {
  return e === "x" ? "y" : "x";
}
function zn(e) {
  return e === "y" ? "height" : "width";
}
function ke(e) {
  return ["top", "bottom"].includes(Ie(e)) ? "y" : "x";
}
function Hn(e) {
  return Ln(ke(e));
}
function Ei(e, t, n) {
  n === void 0 && (n = !1);
  const r = vt(e), o = Hn(e), a = zn(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Ut(i)), [i, Ut(i)];
}
function Ni(e) {
  const t = Ut(e);
  return [_n(e), t, _n(t)];
}
function _n(e) {
  return e.replace(/start|end/g, (t) => Pi[t]);
}
function Ai(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function Wi(e, t, n, r) {
  const o = vt(e);
  let a = Ai(Ie(e), n === "start", r);
  return o && (a = a.map((i) => i + "-" + o), t && (a = a.concat(a.map(_n)))), a;
}
function Ut(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Di[t]);
}
function Ti(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ho(e) {
  return typeof e != "number" ? Ti(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function br(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = ke(t), i = Hn(t), s = zn(i), c = Ie(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[s] / 2 - o[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (vt(t)) {
    case "start":
      h[i] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      h[i] += f * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const Ri = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = br(l, r, c), f = r, h = {}, v = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: y,
      fn: b
    } = s[m], {
      x,
      y: w,
      data: k,
      reset: p
    } = await b({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = x ?? u, d = w ?? d, h = {
      ...h,
      [y]: {
        ...h[y],
        ...k
      }
    }, p && v <= 50 && (v++, typeof p == "object" && (p.placement && (f = p.placement), p.rects && (l = p.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : p.rects), {
      x: u,
      y: d
    } = br(l, f, c)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function Ot(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: i,
    elements: s,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Fe(t, e), v = ho(h), y = s[f ? d === "floating" ? "reference" : "floating" : d], b = Xt(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null || n ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), x = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), k = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, p = Xt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: x,
    offsetParent: w,
    strategy: c
  }) : x);
  return {
    top: (b.top - p.top + v.top) / k.y,
    bottom: (p.bottom - b.bottom + v.bottom) / k.y,
    left: (b.left - p.left + v.left) / k.x,
    right: (p.right - b.right + v.right) / k.x
  };
}
const _i = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Fe(e, t) || {};
    if (l == null)
      return {};
    const d = ho(u), f = {
      x: n,
      y: r
    }, h = Hn(o), v = zn(h), m = await i.getDimensions(l), y = h === "y", b = y ? "top" : "left", x = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", k = a.reference[v] + a.reference[h] - f[h] - a.floating[v], p = f[h] - a.reference[h], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let M = S ? S[w] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(S))) && (M = s.floating[w] || a.floating[v]);
    const O = k / 2 - p / 2, T = M / 2 - m[v] / 2 - 1, _ = Ge(d[b], T), $ = Ge(d[x], T), I = _, H = M - m[v] - $, W = M / 2 - m[v] / 2 + O, j = Rn(I, W, H), R = !c.arrow && vt(o) != null && W !== j && a.reference[v] / 2 - (W < I ? _ : $) - m[v] / 2 < 0, L = R ? W < I ? W - I : W - H : 0;
    return {
      [h]: f[h] + L,
      data: {
        [h]: j,
        centerOffset: W - j - L,
        ...R && {
          alignmentOffset: L
        }
      },
      reset: R
    };
  }
}), Fi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...y
      } = Fe(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const b = Ie(o), x = ke(s), w = Ie(s) === s, k = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), p = f || (w || !m ? [Ut(s)] : Ni(s)), S = v !== "none";
      !f && S && p.push(...Wi(s, m, v, k));
      const M = [s, ...p], O = await Ot(t, y), T = [];
      let _ = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && T.push(O[b]), d) {
        const W = Ei(o, i, k);
        T.push(O[W[0]], O[W[1]]);
      }
      if (_ = [..._, {
        placement: o,
        overflows: T
      }], !T.every((W) => W <= 0)) {
        var $, I;
        const W = ((($ = a.flip) == null ? void 0 : $.index) || 0) + 1, j = M[W];
        if (j && (!(d === "alignment" ? x !== ke(j) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        _.every((C) => C.overflows[0] > 0 && ke(C.placement) === x)))
          return {
            data: {
              index: W,
              overflows: _
            },
            reset: {
              placement: j
            }
          };
        let R = (I = _.filter((L) => L.overflows[0] <= 0).sort((L, C) => L.overflows[1] - C.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!R)
          switch (h) {
            case "bestFit": {
              var H;
              const L = (H = _.filter((C) => {
                if (S) {
                  const z = ke(C.placement);
                  return z === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((z) => z > 0).reduce((z, Z) => z + Z, 0)]).sort((C, z) => C[1] - z[1])[0]) == null ? void 0 : H[0];
              L && (R = L);
              break;
            }
            case "initialPlacement":
              R = s;
              break;
          }
        if (o !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function wr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function xr(e) {
  return Si.some((t) => e[t] >= 0);
}
const Ii = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Fe(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ot(t, {
            ...o,
            elementContext: "reference"
          }), i = wr(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: xr(i)
            }
          };
        }
        case "escaped": {
          const a = await Ot(t, {
            ...o,
            altBoundary: !0
          }), i = wr(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: xr(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Bi(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Ie(n), s = vt(n), c = ke(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = a && c ? -1 : 1, d = Fe(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return s && typeof v == "number" && (h = s === "end" ? v * -1 : v), c ? {
    x: h * u,
    y: f * l
  } : {
    x: f * l,
    y: h * u
  };
}
const Yi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: i,
        middlewareData: s
      } = t, c = await Bi(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, $i = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (y) => {
            let {
              x: b,
              y: x
            } = y;
            return {
              x: b,
              y: x
            };
          }
        },
        ...c
      } = Fe(e, t), l = {
        x: n,
        y: r
      }, u = await Ot(t, c), d = ke(Ie(o)), f = Ln(d);
      let h = l[f], v = l[d];
      if (a) {
        const y = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = h + u[y], w = h - u[b];
        h = Rn(x, h, w);
      }
      if (i) {
        const y = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", x = v + u[y], w = v - u[b];
        v = Rn(x, v, w);
      }
      const m = s.fn({
        ...t,
        [f]: h,
        [d]: v
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [f]: a,
            [d]: i
          }
        }
      };
    }
  };
}, Li = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Fe(e, t), u = {
        x: n,
        y: r
      }, d = ke(o), f = Ln(d);
      let h = u[f], v = u[d];
      const m = Fe(s, t), y = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (c) {
        const w = f === "y" ? "height" : "width", k = a.reference[f] - a.floating[w] + y.mainAxis, p = a.reference[f] + a.reference[w] - y.mainAxis;
        h < k ? h = k : h > p && (h = p);
      }
      if (l) {
        var b, x;
        const w = f === "y" ? "width" : "height", k = ["top", "left"].includes(Ie(o)), p = a.reference[d] - a.floating[w] + (k && ((b = i.offset) == null ? void 0 : b[d]) || 0) + (k ? 0 : y.crossAxis), S = a.reference[d] + a.reference[w] + (k ? 0 : ((x = i.offset) == null ? void 0 : x[d]) || 0) - (k ? y.crossAxis : 0);
        v < p ? v = p : v > S && (v = S);
      }
      return {
        [f]: h,
        [d]: v
      };
    }
  };
}, zi = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: i,
        elements: s
      } = t, {
        apply: c = () => {
        },
        ...l
      } = Fe(e, t), u = await Ot(t, l), d = Ie(o), f = vt(o), h = ke(o) === "y", {
        width: v,
        height: m
      } = a.floating;
      let y, b;
      d === "top" || d === "bottom" ? (y = d, b = f === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = d, y = f === "end" ? "top" : "bottom");
      const x = m - u.top - u.bottom, w = v - u.left - u.right, k = Ge(m - u[y], x), p = Ge(v - u[b], w), S = !t.middlewareData.shift;
      let M = k, O = p;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = w), (r = t.middlewareData.shift) != null && r.enabled.y && (M = x), S && !f) {
        const _ = se(u.left, 0), $ = se(u.right, 0), I = se(u.top, 0), H = se(u.bottom, 0);
        h ? O = v - 2 * (_ !== 0 || $ !== 0 ? _ + $ : se(u.left, u.right)) : M = m - 2 * (I !== 0 || H !== 0 ? I + H : se(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: O,
        availableHeight: M
      });
      const T = await i.getDimensions(s.floating);
      return v !== T.width || m !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Qt() {
  return typeof window < "u";
}
function yt(e) {
  return go(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ie(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function De(e) {
  var t;
  return (t = (go(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function go(e) {
  return Qt() ? e instanceof Node || e instanceof ie(e).Node : !1;
}
function he(e) {
  return Qt() ? e instanceof Element || e instanceof ie(e).Element : !1;
}
function Ce(e) {
  return Qt() ? e instanceof HTMLElement || e instanceof ie(e).HTMLElement : !1;
}
function kr(e) {
  return !Qt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ie(e).ShadowRoot;
}
function Pt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ge(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Hi(e) {
  return ["table", "td", "th"].includes(yt(e));
}
function Kt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function jn(e) {
  const t = Vn(), n = he(e) ? ge(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ji(e) {
  let t = Ue(e);
  for (; Ce(t) && !dt(t); ) {
    if (jn(t))
      return t;
    if (Kt(t))
      return null;
    t = Ue(t);
  }
  return null;
}
function Vn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function dt(e) {
  return ["html", "body", "#document"].includes(yt(e));
}
function ge(e) {
  return ie(e).getComputedStyle(e);
}
function Jt(e) {
  return he(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ue(e) {
  if (yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    kr(e) && e.host || // Fallback.
    De(e)
  );
  return kr(t) ? t.host : t;
}
function po(e) {
  const t = Ue(e);
  return dt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ce(t) && Pt(t) ? t : po(t);
}
function Ct(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = po(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ie(o);
  if (a) {
    const s = Fn(i);
    return t.concat(i, i.visualViewport || [], Pt(o) ? o : [], s && n ? Ct(s) : []);
  }
  return t.concat(o, Ct(o, [], n));
}
function Fn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function vo(e) {
  const t = ge(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ce(e), a = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, s = Gt(n) !== a || Gt(r) !== i;
  return s && (n = a, r = i), {
    width: n,
    height: r,
    $: s
  };
}
function qn(e) {
  return he(e) ? e : e.contextElement;
}
function it(e) {
  const t = qn(e);
  if (!Ce(t))
    return Oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = vo(t);
  let i = (a ? Gt(n.width) : n.width) / r, s = (a ? Gt(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const Vi = /* @__PURE__ */ Oe(0);
function yo(e) {
  const t = ie(e);
  return !Vn() || !t.visualViewport ? Vi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function qi(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ie(e) ? !1 : t;
}
function et(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = qn(e);
  let i = Oe(1);
  t && (r ? he(r) && (i = it(r)) : i = it(e));
  const s = qi(a, n, r) ? yo(a) : Oe(0);
  let c = (o.left + s.x) / i.x, l = (o.top + s.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (a) {
    const f = ie(a), h = r && he(r) ? ie(r) : r;
    let v = f, m = Fn(v);
    for (; m && r && h !== v; ) {
      const y = it(m), b = m.getBoundingClientRect(), x = ge(m), w = b.left + (m.clientLeft + parseFloat(x.paddingLeft)) * y.x, k = b.top + (m.clientTop + parseFloat(x.paddingTop)) * y.y;
      c *= y.x, l *= y.y, u *= y.x, d *= y.y, c += w, l += k, v = ie(m), m = Fn(v);
    }
  }
  return Xt({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Gn(e, t) {
  const n = Jt(e).scrollLeft;
  return t ? t.left + n : et(De(e)).left + n;
}
function bo(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Gn(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Gi(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", i = De(r), s = t ? Kt(t.floating) : !1;
  if (r === i || s && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Oe(1);
  const u = Oe(0), d = Ce(r);
  if ((d || !d && !a) && ((yt(r) !== "body" || Pt(i)) && (c = Jt(r)), Ce(r))) {
    const h = et(r);
    l = it(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const f = i && !d && !a ? bo(i, c, !0) : Oe(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
  };
}
function Ui(e) {
  return Array.from(e.getClientRects());
}
function Xi(e) {
  const t = De(e), n = Jt(e), r = e.ownerDocument.body, o = se(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = se(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Gn(e);
  const s = -n.scrollTop;
  return ge(r).direction === "rtl" && (i += se(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: i,
    y: s
  };
}
function Zi(e, t) {
  const n = ie(e), r = De(e), o = n.visualViewport;
  let a = r.clientWidth, i = r.clientHeight, s = 0, c = 0;
  if (o) {
    a = o.width, i = o.height;
    const l = Vn();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: c
  };
}
function Qi(e, t) {
  const n = et(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Ce(e) ? it(e) : Oe(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: i,
    height: s,
    x: c,
    y: l
  };
}
function Mr(e, t, n) {
  let r;
  if (t === "viewport")
    r = Zi(e, n);
  else if (t === "document")
    r = Xi(De(e));
  else if (he(t))
    r = Qi(t, n);
  else {
    const o = yo(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Xt(r);
}
function wo(e, t) {
  const n = Ue(e);
  return n === t || !he(n) || dt(n) ? !1 : ge(n).position === "fixed" || wo(n, t);
}
function Ki(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ct(e, [], !1).filter((s) => he(s) && yt(s) !== "body"), o = null;
  const a = ge(e).position === "fixed";
  let i = a ? Ue(e) : e;
  for (; he(i) && !dt(i); ) {
    const s = ge(i), c = jn(i);
    !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Pt(i) && !c && wo(e, i)) ? r = r.filter((u) => u !== i) : o = s, i = Ue(i);
  }
  return t.set(e, r), r;
}
function Ji(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Kt(t) ? [] : Ki(t, this._c) : [].concat(n), r], s = i[0], c = i.reduce((l, u) => {
    const d = Mr(t, u, o);
    return l.top = se(d.top, l.top), l.right = Ge(d.right, l.right), l.bottom = Ge(d.bottom, l.bottom), l.left = se(d.left, l.left), l;
  }, Mr(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function ec(e) {
  const {
    width: t,
    height: n
  } = vo(e);
  return {
    width: t,
    height: n
  };
}
function tc(e, t, n) {
  const r = Ce(t), o = De(t), a = n === "fixed", i = et(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Oe(0);
  function l() {
    c.x = Gn(o);
  }
  if (r || !r && !a)
    if ((yt(t) !== "body" || Pt(o)) && (s = Jt(t)), r) {
      const h = et(t, !0, a, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? bo(o, s) : Oe(0), d = i.left + s.scrollLeft - c.x - u.x, f = i.top + s.scrollTop - c.y - u.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function yn(e) {
  return ge(e).position === "static";
}
function Or(e, t) {
  if (!Ce(e) || ge(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return De(e) === n && (n = n.ownerDocument.body), n;
}
function xo(e, t) {
  const n = ie(e);
  if (Kt(e))
    return n;
  if (!Ce(e)) {
    let o = Ue(e);
    for (; o && !dt(o); ) {
      if (he(o) && !yn(o))
        return o;
      o = Ue(o);
    }
    return n;
  }
  let r = Or(e, t);
  for (; r && Hi(r) && yn(r); )
    r = Or(r, t);
  return r && dt(r) && yn(r) && !jn(r) ? n : r || ji(e) || n;
}
const nc = async function(e) {
  const t = this.getOffsetParent || xo, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: tc(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function rc(e) {
  return ge(e).direction === "rtl";
}
const oc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gi,
  getDocumentElement: De,
  getClippingRect: Ji,
  getOffsetParent: xo,
  getElementRects: nc,
  getClientRects: Ui,
  getDimensions: ec,
  getScale: it,
  isElement: he,
  isRTL: rc
};
function ko(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ac(e, t) {
  let n = null, r;
  const o = De(e);
  function a() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: h
    } = l;
    if (s || t(), !f || !h)
      return;
    const v = Ft(d), m = Ft(o.clientWidth - (u + f)), y = Ft(o.clientHeight - (d + h)), b = Ft(u), w = {
      rootMargin: -v + "px " + -m + "px " + -y + "px " + -b + "px",
      threshold: se(0, Ge(1, c)) || 1
    };
    let k = !0;
    function p(S) {
      const M = S[0].intersectionRatio;
      if (M !== c) {
        if (!k)
          return i();
        M ? i(!1, M) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !ko(l, e.getBoundingClientRect()) && i(), k = !1;
    }
    try {
      n = new IntersectionObserver(p, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(p, w);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function sc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = qn(e), u = o || a ? [...l ? Ct(l) : [], ...Ct(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const d = l && s ? ac(l, n) : null;
  let f = -1, h = null;
  i && (h = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === l && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = h) == null || w.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let v, m = c ? et(e) : null;
  c && y();
  function y() {
    const b = et(e);
    m && !ko(m, b) && n(), m = b, v = requestAnimationFrame(y);
  }
  return n(), () => {
    var b;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), d == null || d(), (b = h) == null || b.disconnect(), h = null, c && cancelAnimationFrame(v);
  };
}
const ic = Yi, cc = $i, lc = Fi, uc = zi, dc = Ii, Cr = _i, fc = Li, mc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: oc,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Ri(e, t, {
    ...o,
    platform: a
  });
};
var hc = typeof document < "u", gc = function() {
}, Ht = hc ? Vr : gc;
function Zt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Zt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Zt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Mo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sr(e, t) {
  const n = Mo(e);
  return Math.round(t * n) / n;
}
function bn(e) {
  const t = g.useRef(e);
  return Ht(() => {
    t.current = e;
  }), t;
}
function pc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = g.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, h] = g.useState(r);
  Zt(f, r) || h(r);
  const [v, m] = g.useState(null), [y, b] = g.useState(null), x = g.useCallback((C) => {
    C !== S.current && (S.current = C, m(C));
  }, []), w = g.useCallback((C) => {
    C !== M.current && (M.current = C, b(C));
  }, []), k = a || v, p = i || y, S = g.useRef(null), M = g.useRef(null), O = g.useRef(u), T = c != null, _ = bn(c), $ = bn(o), I = bn(l), H = g.useCallback(() => {
    if (!S.current || !M.current)
      return;
    const C = {
      placement: t,
      strategy: n,
      middleware: f
    };
    $.current && (C.platform = $.current), mc(S.current, M.current, C).then((z) => {
      const Z = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      W.current && !Zt(O.current, Z) && (O.current = Z, qr.flushSync(() => {
        d(Z);
      }));
    });
  }, [f, t, n, $, I]);
  Ht(() => {
    l === !1 && O.current.isPositioned && (O.current.isPositioned = !1, d((C) => ({
      ...C,
      isPositioned: !1
    })));
  }, [l]);
  const W = g.useRef(!1);
  Ht(() => (W.current = !0, () => {
    W.current = !1;
  }), []), Ht(() => {
    if (k && (S.current = k), p && (M.current = p), k && p) {
      if (_.current)
        return _.current(k, p, H);
      H();
    }
  }, [k, p, H, _, T]);
  const j = g.useMemo(() => ({
    reference: S,
    floating: M,
    setReference: x,
    setFloating: w
  }), [x, w]), R = g.useMemo(() => ({
    reference: k,
    floating: p
  }), [k, p]), L = g.useMemo(() => {
    const C = {
      position: n,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return C;
    const z = Sr(R.floating, u.x), Z = Sr(R.floating, u.y);
    return s ? {
      ...C,
      transform: "translate(" + z + "px, " + Z + "px)",
      ...Mo(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: Z
    };
  }, [n, s, R.floating, u.x, u.y]);
  return g.useMemo(() => ({
    ...u,
    update: H,
    refs: j,
    elements: R,
    floatingStyles: L
  }), [u, H, j, R, L]);
}
const vc = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Cr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Cr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, yc = (e, t) => ({
  ...ic(e),
  options: [e, t]
}), bc = (e, t) => ({
  ...cc(e),
  options: [e, t]
}), wc = (e, t) => ({
  ...fc(e),
  options: [e, t]
}), xc = (e, t) => ({
  ...lc(e),
  options: [e, t]
}), kc = (e, t) => ({
  ...uc(e),
  options: [e, t]
}), Mc = (e, t) => ({
  ...dc(e),
  options: [e, t]
}), Oc = (e, t) => ({
  ...vc(e),
  options: [e, t]
});
var Cc = "Arrow", Oo = g.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ N(
    Se.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ N("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Oo.displayName = Cc;
var Sc = Oo;
function Dc(e) {
  const [t, n] = g.useState(void 0);
  return qe(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          i = l.inlineSize, s = l.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({ width: i, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Un = "Popper", [Co, So] = io(Un), [Pc, Do] = Co(Un), Po = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = g.useState(null);
  return /* @__PURE__ */ N(Pc, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Po.displayName = Un;
var Eo = "PopperAnchor", No = g.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Do(Eo, n), i = g.useRef(null), s = Xe(t, i);
    return g.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ N(Se.div, { ...o, ref: s });
  }
);
No.displayName = Eo;
var Xn = "PopperContent", [Ec, Nc] = Co(Xn), Ao = g.forwardRef(
  (e, t) => {
    var K, Ye, ce, Ae, $e, We;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: i = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...m
    } = e, y = Do(Xn, n), [b, x] = g.useState(null), w = Xe(t, (Qe) => x(Qe)), [k, p] = g.useState(null), S = Dc(k), M = (S == null ? void 0 : S.width) ?? 0, O = (S == null ? void 0 : S.height) ?? 0, T = r + (a !== "center" ? "-" + a : ""), _ = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, $ = Array.isArray(l) ? l : [l], I = $.length > 0, H = {
      padding: _,
      boundary: $.filter(Wc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: W, floatingStyles: j, placement: R, isPositioned: L, middlewareData: C } = pc({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...Qe) => sc(...Qe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        yc({ mainAxis: o + O, alignmentAxis: i }),
        c && bc({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? wc() : void 0,
          ...H
        }),
        c && xc({ ...H }),
        kc({
          ...H,
          apply: ({ elements: Qe, rects: wt, availableWidth: rn, availableHeight: on }) => {
            const { width: an, height: sn } = wt.reference, tt = Qe.floating.style;
            tt.setProperty("--radix-popper-available-width", `${rn}px`), tt.setProperty("--radix-popper-available-height", `${on}px`), tt.setProperty("--radix-popper-anchor-width", `${an}px`), tt.setProperty("--radix-popper-anchor-height", `${sn}px`);
          }
        }),
        k && Oc({ element: k, padding: s }),
        Tc({ arrowWidth: M, arrowHeight: O }),
        f && Mc({ strategy: "referenceHidden", ...H })
      ]
    }), [z, Z] = Ro(R), ue = ut(v);
    qe(() => {
      L && (ue == null || ue());
    }, [L, ue]);
    const de = (K = C.arrow) == null ? void 0 : K.x, Q = (Ye = C.arrow) == null ? void 0 : Ye.y, ee = ((ce = C.arrow) == null ? void 0 : ce.centerOffset) !== 0, [Ee, Ne] = g.useState();
    return qe(() => {
      b && Ne(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ N(
      "div",
      {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...j,
          transform: L ? j.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Ee,
          "--radix-popper-transform-origin": [
            (Ae = C.transformOrigin) == null ? void 0 : Ae.x,
            ($e = C.transformOrigin) == null ? void 0 : $e.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((We = C.hide) == null ? void 0 : We.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ N(
          Ec,
          {
            scope: n,
            placedSide: z,
            onArrowChange: p,
            arrowX: de,
            arrowY: Q,
            shouldHideArrow: ee,
            children: /* @__PURE__ */ N(
              Se.div,
              {
                "data-side": z,
                "data-align": Z,
                ...m,
                ref: w,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: L ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Ao.displayName = Xn;
var Wo = "PopperArrow", Ac = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, To = g.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Nc(Wo, r), i = Ac[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ N(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ N(
          Sc,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
To.displayName = Wo;
function Wc(e) {
  return e !== null;
}
var Tc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, b, x;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, s = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, u] = Ro(n), d = { start: "0%", center: "50%", end: "100%" }[u], f = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + s / 2, h = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + c / 2;
    let v = "", m = "";
    return l === "bottom" ? (v = i ? d : `${f}px`, m = `${-c}px`) : l === "top" ? (v = i ? d : `${f}px`, m = `${r.floating.height + c}px`) : l === "right" ? (v = `${-c}px`, m = i ? d : `${h}px`) : l === "left" && (v = `${r.floating.width + c}px`, m = i ? d : `${h}px`), { data: { x: v, y: m } };
  }
});
function Ro(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Rc = Po, _o = No, _c = Ao, Fc = To, Ic = "Portal", Fo = g.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, a] = g.useState(!1);
  qe(() => a(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Qa.createPortal(/* @__PURE__ */ N(Se.div, { ...r, ref: t }), i) : null;
});
Fo.displayName = Ic;
function Bc(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
var Zn = (e) => {
  const { present: t, children: n } = e, r = Yc(t), o = typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n), a = Xe(r.ref, $c(o));
  return typeof n == "function" || r.isPresent ? g.cloneElement(o, { ref: a }) : null;
};
Zn.displayName = "Presence";
function Yc(e) {
  const [t, n] = g.useState(), r = g.useRef(null), o = g.useRef(e), a = g.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = Bc(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return g.useEffect(() => {
    const l = It(r.current);
    a.current = s === "mounted" ? l : "none";
  }, [s]), qe(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, h = It(l);
      e ? c("MOUNT") : h === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), qe(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, d = (h) => {
        const m = It(r.current).includes(h.animationName);
        if (h.target === t && m && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, f = (h) => {
        h.target === t && (a.current = It(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: g.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function It(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function $c(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Lc = g[" useInsertionEffect ".trim().toString()] || qe;
function zc({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, i] = Hc({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, c = s ? e : o;
  {
    const u = g.useRef(e !== void 0);
    g.useEffect(() => {
      const d = u.current;
      d !== s && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = s;
    }, [s, r]);
  }
  const l = g.useCallback(
    (u) => {
      var d;
      if (s) {
        const f = jc(u) ? u(e) : u;
        f !== e && ((d = i.current) == null || d.call(i, f));
      } else
        a(u);
    },
    [s, e, a, i]
  );
  return [c, l];
}
function Hc({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = g.useState(e), o = g.useRef(n), a = g.useRef(t);
  return Lc(() => {
    a.current = t;
  }, [t]), g.useEffect(() => {
    var i;
    o.current !== n && ((i = a.current) == null || i.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function jc(e) {
  return typeof e == "function";
}
var Vc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, rt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Yt = {}, wn = 0, Io = function(e) {
  return e && (e.host || Io(e.parentNode));
}, qc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Io(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Gc = function(e, t, n, r) {
  var o = qc(t, Array.isArray(e) ? e : [e]);
  Yt[n] || (Yt[n] = /* @__PURE__ */ new WeakMap());
  var a = Yt[n], i = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || s.has(d) || (s.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else
        try {
          var h = f.getAttribute(r), v = h !== null && h !== "false", m = (rt.get(f) || 0) + 1, y = (a.get(f) || 0) + 1;
          rt.set(f, m), a.set(f, y), i.push(f), m === 1 && v && Bt.set(f, !0), y === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", f, b);
        }
    });
  };
  return u(t), s.clear(), wn++, function() {
    i.forEach(function(d) {
      var f = rt.get(d) - 1, h = a.get(d) - 1;
      rt.set(d, f), a.set(d, h), f || (Bt.has(d) || d.removeAttribute(r), Bt.delete(d)), h || d.removeAttribute(n);
    }), wn--, wn || (rt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Yt = {});
  };
}, Uc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Vc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Gc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, be = function() {
  return be = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, be.apply(this, arguments);
};
function Bo(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Xc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var jt = "right-scroll-bar-position", Vt = "width-before-scroll-bar", Zc = "with-scroll-bars-hidden", Qc = "--removed-body-scroll-bar-size";
function xn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Kc(e, t) {
  var n = qt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Jc = typeof window < "u" ? g.useLayoutEffect : g.useEffect, Dr = /* @__PURE__ */ new WeakMap();
function el(e, t) {
  var n = Kc(null, function(r) {
    return e.forEach(function(o) {
      return xn(o, r);
    });
  });
  return Jc(function() {
    var r = Dr.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), i = n.current;
      o.forEach(function(s) {
        a.has(s) || xn(s, null);
      }), a.forEach(function(s) {
        o.has(s) || xn(s, i);
      });
    }
    Dr.set(n, e);
  }, [e]), n;
}
function tl(e) {
  return e;
}
function nl(e, t) {
  t === void 0 && (t = tl);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var c = function() {
        var u = i;
        i = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          i.push(u), l();
        },
        filter: function(u) {
          return i = i.filter(u), n;
        }
      };
    }
  };
  return o;
}
function rl(e) {
  e === void 0 && (e = {});
  var t = nl(null);
  return t.options = be({ async: !0, ssr: !1 }, e), t;
}
var Yo = function(e) {
  var t = e.sideCar, n = Bo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return g.createElement(r, be({}, n));
};
Yo.isSideCarExport = !0;
function ol(e, t) {
  return e.useMedium(t), Yo;
}
var $o = rl(), kn = function() {
}, en = g.forwardRef(function(e, t) {
  var n = g.useRef(null), r = g.useState({
    onScrollCapture: kn,
    onWheelCapture: kn,
    onTouchMoveCapture: kn
  }), o = r[0], a = r[1], i = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, h = e.noRelative, v = e.noIsolation, m = e.inert, y = e.allowPinchZoom, b = e.as, x = b === void 0 ? "div" : b, w = e.gapMode, k = Bo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), p = f, S = el([n, t]), M = be(be({}, k), o);
  return g.createElement(
    g.Fragment,
    null,
    u && g.createElement(p, { sideCar: $o, removeScrollBar: l, shards: d, noRelative: h, noIsolation: v, inert: m, setCallbacks: a, allowPinchZoom: !!y, lockRef: n, gapMode: w }),
    i ? g.cloneElement(g.Children.only(s), be(be({}, M), { ref: S })) : g.createElement(x, be({}, M, { className: c, ref: S }), s)
  );
});
en.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
en.classNames = {
  fullWidth: Vt,
  zeroRight: jt
};
var al = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function sl() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = al();
  return t && e.setAttribute("nonce", t), e;
}
function il(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ll = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = sl()) && (il(t, n), cl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ul = function() {
  var e = ll();
  return function(t, n) {
    g.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Lo = function() {
  var e = ul(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, dl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Mn = function(e) {
  return parseInt(e || "", 10) || 0;
}, fl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Mn(n), Mn(r), Mn(o)];
}, ml = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return dl;
  var t = fl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, hl = Lo(), ct = "data-scroll-locked", gl = function(e, t, n, r) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Zc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(ct, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(jt, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Vt, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(jt, " .").concat(jt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Vt, " .").concat(Vt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ct, `] {
    `).concat(Qc, ": ").concat(s, `px;
  }
`);
}, Pr = function() {
  var e = parseInt(document.body.getAttribute(ct) || "0", 10);
  return isFinite(e) ? e : 0;
}, pl = function() {
  g.useEffect(function() {
    return document.body.setAttribute(ct, (Pr() + 1).toString()), function() {
      var e = Pr() - 1;
      e <= 0 ? document.body.removeAttribute(ct) : document.body.setAttribute(ct, e.toString());
    };
  }, []);
}, vl = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  pl();
  var a = g.useMemo(function() {
    return ml(o);
  }, [o]);
  return g.createElement(hl, { styles: gl(a, !t, o, n ? "" : "!important") });
}, In = !1;
if (typeof window < "u")
  try {
    var $t = Object.defineProperty({}, "passive", {
      get: function() {
        return In = !0, !0;
      }
    });
    window.addEventListener("test", $t, $t), window.removeEventListener("test", $t, $t);
  } catch {
    In = !1;
  }
var ot = In ? { passive: !1 } : !1, yl = function(e) {
  return e.tagName === "TEXTAREA";
}, zo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !yl(e) && n[t] === "visible")
  );
}, bl = function(e) {
  return zo(e, "overflowY");
}, wl = function(e) {
  return zo(e, "overflowX");
}, Er = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ho(e, r);
    if (o) {
      var a = jo(e, r), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, xl = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, kl = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ho = function(e, t) {
  return e === "v" ? bl(t) : wl(t);
}, jo = function(e, t) {
  return e === "v" ? xl(t) : kl(t);
}, Ml = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ol = function(e, t, n, r, o) {
  var a = Ml(e, window.getComputedStyle(t).direction), i = a * r, s = n.target, c = t.contains(s), l = !1, u = i > 0, d = 0, f = 0;
  do {
    if (!s)
      break;
    var h = jo(e, s), v = h[0], m = h[1], y = h[2], b = m - y - a * v;
    (v || b) && Ho(e, s) && (d += b, f += v);
    var x = s.parentNode;
    s = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(f) < 1) && (l = !0), l;
}, Lt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Nr = function(e) {
  return [e.deltaX, e.deltaY];
}, Ar = function(e) {
  return e && "current" in e ? e.current : e;
}, Cl = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Sl = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Dl = 0, at = [];
function Pl(e) {
  var t = g.useRef([]), n = g.useRef([0, 0]), r = g.useRef(), o = g.useState(Dl++)[0], a = g.useState(Lo)[0], i = g.useRef(e);
  g.useEffect(function() {
    i.current = e;
  }, [e]), g.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Xc([e.lockRef.current], (e.shards || []).map(Ar), !0).filter(Boolean);
      return m.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = g.useCallback(function(m, y) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var b = Lt(m), x = n.current, w = "deltaX" in m ? m.deltaX : x[0] - b[0], k = "deltaY" in m ? m.deltaY : x[1] - b[1], p, S = m.target, M = Math.abs(w) > Math.abs(k) ? "h" : "v";
    if ("touches" in m && M === "h" && S.type === "range")
      return !1;
    var O = Er(M, S);
    if (!O)
      return !0;
    if (O ? p = M : (p = M === "v" ? "h" : "v", O = Er(M, S)), !O)
      return !1;
    if (!r.current && "changedTouches" in m && (w || k) && (r.current = p), !p)
      return !0;
    var T = r.current || p;
    return Ol(T, y, m, T === "h" ? w : k);
  }, []), c = g.useCallback(function(m) {
    var y = m;
    if (!(!at.length || at[at.length - 1] !== a)) {
      var b = "deltaY" in y ? Nr(y) : Lt(y), x = t.current.filter(function(p) {
        return p.name === y.type && (p.target === y.target || y.target === p.shadowParent) && Cl(p.delta, b);
      })[0];
      if (x && x.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!x) {
        var w = (i.current.shards || []).map(Ar).filter(Boolean).filter(function(p) {
          return p.contains(y.target);
        }), k = w.length > 0 ? s(y, w[0]) : !i.current.noIsolation;
        k && y.cancelable && y.preventDefault();
      }
    }
  }, []), l = g.useCallback(function(m, y, b, x) {
    var w = { name: m, delta: y, target: b, should: x, shadowParent: El(b) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== w;
      });
    }, 1);
  }, []), u = g.useCallback(function(m) {
    n.current = Lt(m), r.current = void 0;
  }, []), d = g.useCallback(function(m) {
    l(m.type, Nr(m), m.target, s(m, e.lockRef.current));
  }, []), f = g.useCallback(function(m) {
    l(m.type, Lt(m), m.target, s(m, e.lockRef.current));
  }, []);
  g.useEffect(function() {
    return at.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, ot), document.addEventListener("touchmove", c, ot), document.addEventListener("touchstart", u, ot), function() {
      at = at.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", c, ot), document.removeEventListener("touchmove", c, ot), document.removeEventListener("touchstart", u, ot);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    v ? g.createElement(a, { styles: Sl(o) }) : null,
    h ? g.createElement(vl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function El(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Nl = ol($o, Pl);
var Vo = g.forwardRef(function(e, t) {
  return g.createElement(en, be({}, e, { ref: t, sideCar: Nl }));
});
Vo.classNames = en.classNames;
var tn = "Popover", [qo, Em] = io(tn, [
  So
]), Et = So(), [Al, Ze] = qo(tn), Go = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: i = !1
  } = e, s = Et(t), c = g.useRef(null), [l, u] = g.useState(!1), [d, f] = zc({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: tn
  });
  return /* @__PURE__ */ N(Rc, { ...s, children: /* @__PURE__ */ N(
    Al,
    {
      scope: t,
      contentId: Ci(),
      triggerRef: c,
      open: d,
      onOpenChange: f,
      onOpenToggle: g.useCallback(() => f((h) => !h), [f]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: g.useCallback(() => u(!0), []),
      onCustomAnchorRemove: g.useCallback(() => u(!1), []),
      modal: i,
      children: n
    }
  ) });
};
Go.displayName = tn;
var Uo = "PopoverAnchor", Xo = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ze(Uo, n), a = Et(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: s } = o;
    return g.useEffect(() => (i(), () => s()), [i, s]), /* @__PURE__ */ N(_o, { ...a, ...r, ref: t });
  }
);
Xo.displayName = Uo;
var Zo = "PopoverTrigger", Qo = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ze(Zo, n), a = Et(n), i = Xe(t, o.triggerRef), s = /* @__PURE__ */ N(
      Se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": na(o.open),
        ...r,
        ref: i,
        onClick: Ve(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? s : /* @__PURE__ */ N(_o, { asChild: !0, ...a, children: s });
  }
);
Qo.displayName = Zo;
var Qn = "PopoverPortal", [Wl, Tl] = qo(Qn, {
  forceMount: void 0
}), Ko = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Ze(Qn, t);
  return /* @__PURE__ */ N(Wl, { scope: t, forceMount: n, children: /* @__PURE__ */ N(Zn, { present: n || a.open, children: /* @__PURE__ */ N(Fo, { asChild: !0, container: o, children: r }) }) });
};
Ko.displayName = Qn;
var ft = "PopoverContent", Jo = g.forwardRef(
  (e, t) => {
    const n = Tl(ft, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Ze(ft, e.__scopePopover);
    return /* @__PURE__ */ N(Zn, { present: r || a.open, children: a.modal ? /* @__PURE__ */ N(_l, { ...o, ref: t }) : /* @__PURE__ */ N(Fl, { ...o, ref: t }) });
  }
);
Jo.displayName = ft;
var Rl = /* @__PURE__ */ Yn("PopoverContent.RemoveScroll"), _l = g.forwardRef(
  (e, t) => {
    const n = Ze(ft, e.__scopePopover), r = g.useRef(null), o = Xe(t, r), a = g.useRef(!1);
    return g.useEffect(() => {
      const i = r.current;
      if (i) return Uc(i);
    }, []), /* @__PURE__ */ N(Vo, { as: Rl, allowPinchZoom: !0, children: /* @__PURE__ */ N(
      ea,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ve(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), a.current || (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: Ve(
          e.onPointerDownOutside,
          (i) => {
            const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || c;
            a.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Ve(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Fl = g.forwardRef(
  (e, t) => {
    const n = Ze(ft, e.__scopePopover), r = g.useRef(!1), o = g.useRef(!1);
    return /* @__PURE__ */ N(
      ea,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = a.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(i)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), ea = g.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: u,
      ...d
    } = e, f = Ze(ft, n), h = Et(n);
    return gi(), /* @__PURE__ */ N(
      fo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ N(
          lo,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: u,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ N(
              _c,
              {
                "data-state": na(f.open),
                role: "dialog",
                id: f.contentId,
                ...h,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), ta = "PopoverClose", Il = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ze(ta, n);
    return /* @__PURE__ */ N(
      Se.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Ve(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Il.displayName = ta;
var Bl = "PopoverArrow", Yl = g.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ N(Fc, { ...o, ...r, ref: t });
  }
);
Yl.displayName = Bl;
function na(e) {
  return e ? "open" : "closed";
}
var $l = Go, Ll = Xo, zl = Qo, Hl = Ko, jl = Jo;
function Nm({
  ...e
}) {
  return /* @__PURE__ */ N($l, { "data-slot": "popover", ...e });
}
function Am({
  ...e
}) {
  return /* @__PURE__ */ N(zl, { "data-slot": "popover-trigger", ...e });
}
function Wm({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ N(Hl, { children: /* @__PURE__ */ N(
    jl,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: Y(
        `
            z-50 w-72 origin-(--radix-popover-content-transform-origin)
            rounded-md border bg-popover p-4 text-popover-foreground shadow-md
            outline-hidden
            data-[side=bottom]:slide-in-from-top-2
            data-[side=left]:slide-in-from-right-2
            data-[side=right]:slide-in-from-left-2
            data-[side=top]:slide-in-from-bottom-2
            data-[state=closed]:animate-out data-[state=closed]:fade-out-0
            data-[state=closed]:zoom-out-95
            data-[state=open]:animate-in data-[state=open]:fade-in-0
            data-[state=open]:zoom-in-95
          `,
        e
      ),
      ...r
    }
  ) });
}
function Tm({
  ...e
}) {
  return /* @__PURE__ */ N(Ll, { "data-slot": "popover-anchor", ...e });
}
const On = {}, kt = {};
function Mt(e, t) {
  try {
    const r = (On[e] || (On[e] = new Intl.DateTimeFormat("en-GB", {
      timeZone: e,
      hour: "numeric",
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1] || "";
    return r in kt ? kt[r] : Wr(r, r.split(":"));
  } catch {
    if (e in kt) return kt[e];
    const n = e == null ? void 0 : e.match(Vl);
    return n ? Wr(e, n.slice(1)) : NaN;
  }
}
const Vl = /([+-]\d\d):?(\d\d)?/;
function Wr(e, t) {
  const n = +t[0], r = +(t[1] || 0);
  return kt[e] = n > 0 ? n * 60 + r : n * 60 - r;
}
class Me extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Mt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), ra(this), Bn(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Me(...n, t) : new Me(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Me(+this, t);
  }
  getTimezoneOffset() {
    return -Mt(this.timeZone, this);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Bn(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Me(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Tr = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Tr.test(e)) return;
  const t = e.replace(Tr, "$1UTC");
  Me.prototype[t] && (e.startsWith("get") ? Me.prototype[e] = function() {
    return this.internal[t]();
  } : (Me.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), ql(this), +this;
  }, Me.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Bn(this), +this;
  }));
});
function Bn(e) {
  e.internal.setTime(+e), e.internal.setUTCMinutes(e.internal.getUTCMinutes() - e.getTimezoneOffset());
}
function ql(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), ra(e);
}
function ra(e) {
  const t = Mt(e.timeZone, e), n = /* @__PURE__ */ new Date(+e);
  n.setUTCHours(n.getUTCHours() - 1);
  const r = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), o = -(/* @__PURE__ */ new Date(+n)).getTimezoneOffset(), a = r - o, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const s = r - t;
  s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
  const c = Mt(e.timeZone, e), u = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - c, d = c !== t, f = u - s;
  if (d && f) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + f);
    const h = Mt(e.timeZone, e), v = c - h;
    v && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + v), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v));
  }
}
class oe extends Me {
  //#region static
  static tz(t, ...n) {
    return n.length ? new oe(...n, t) : new oe(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t == null ? void 0 : t.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${Gl(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new oe(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new oe(+new Date(t), this.timeZone);
  }
  //#endregion
}
function Gl(e, t) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: e,
    timeZoneName: "long"
  }).format(t).slice(12);
}
var A;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(A || (A = {}));
var J;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(J || (J = {}));
var me;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(me || (me = {}));
var ae;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(ae || (ae = {}));
const oa = 6048e5, Ul = 864e5, Rr = Symbol.for("constructDateFrom");
function ne(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Rr in e ? e[Rr](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function G(e, t) {
  return ne(t || e, e);
}
function aa(e, t, n) {
  const r = G(e, n == null ? void 0 : n.in);
  return isNaN(t) ? ne(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function sa(e, t, n) {
  const r = G(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return ne(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = ne(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const i = a.getDate();
  return o >= i ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let Xl = {};
function Nt() {
  return Xl;
}
function mt(e, t) {
  var s, c, l, u;
  const n = Nt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = G(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function St(e, t) {
  return mt(e, { ...t, weekStartsOn: 1 });
}
function ia(e, t) {
  const n = G(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = ne(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = St(o), i = ne(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const s = St(i);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function _r(e) {
  const t = G(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function bt(e, ...t) {
  const n = ne.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Dt(e, t) {
  const n = G(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function ca(e, t, n) {
  const [r, o] = bt(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Dt(r), i = Dt(o), s = +a - _r(a), c = +i - _r(i);
  return Math.round((s - c) / Ul);
}
function Zl(e, t) {
  const n = ia(e, t), r = ne(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), St(r);
}
function Ql(e, t, n) {
  return aa(e, t * 7, n);
}
function Kl(e, t, n) {
  return sa(e, t * 12, n);
}
function Jl(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = ne.bind(null, o));
    const a = G(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), ne(r, n || NaN);
}
function eu(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = ne.bind(null, o));
    const a = G(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), ne(r, n || NaN);
}
function tu(e, t, n) {
  const [r, o] = bt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Dt(r) == +Dt(o);
}
function la(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function nu(e) {
  return !(!la(e) && typeof e != "number" || isNaN(+G(e)));
}
function ru(e, t, n) {
  const [r, o] = bt(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return a * 12 + i;
}
function ou(e, t) {
  const n = G(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function au(e, t) {
  const [n, r] = bt(e, t.start, t.end);
  return { start: n, end: r };
}
function su(e, t) {
  const { start: n, end: r } = au(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let s = 1;
  const c = [];
  for (; +i <= a; )
    c.push(ne(n, i)), i.setMonth(i.getMonth() + s);
  return o ? c.reverse() : c;
}
function iu(e, t) {
  const n = G(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function cu(e, t) {
  const n = G(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function ua(e, t) {
  const n = G(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function da(e, t) {
  var s, c, l, u;
  const n = Nt(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = G(e, t == null ? void 0 : t.in), a = o.getDay(), i = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function lu(e, t) {
  return da(e, { ...t, weekStartsOn: 1 });
}
const uu = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, du = (e, t, n) => {
  let r;
  const o = uu[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function lt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const fu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, mu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, hu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, gu = {
  date: lt({
    formats: fu,
    defaultWidth: "full"
  }),
  time: lt({
    formats: mu,
    defaultWidth: "full"
  }),
  dateTime: lt({
    formats: hu,
    defaultWidth: "full"
  })
}, pu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, vu = (e, t, n, r) => pu[e];
function we(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const yu = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, bu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, wu = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, xu = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, ku = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Mu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Ou = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Cu = {
  ordinalNumber: Ou,
  era: we({
    values: yu,
    defaultWidth: "wide"
  }),
  quarter: we({
    values: bu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: we({
    values: wu,
    defaultWidth: "wide"
  }),
  day: we({
    values: xu,
    defaultWidth: "wide"
  }),
  dayPeriod: we({
    values: ku,
    defaultWidth: "wide",
    formattingValues: Mu,
    defaultFormattingWidth: "wide"
  })
};
function xe(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const i = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Du(s, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      Su(s, (d) => d.test(i))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const u = t.slice(i.length);
    return { value: l, rest: u };
  };
}
function Su(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Du(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function fa(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(o.length);
    return { value: i, rest: s };
  };
}
const Pu = /^(\d+)(th|st|nd|rd)?/i, Eu = /\d+/i, Nu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Au = {
  any: [/^b/i, /^(a|c)/i]
}, Wu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Tu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ru = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, _u = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Fu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Iu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Bu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Yu = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, $u = {
  ordinalNumber: fa({
    matchPattern: Pu,
    parsePattern: Eu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xe({
    matchPatterns: Nu,
    defaultMatchWidth: "wide",
    parsePatterns: Au,
    defaultParseWidth: "any"
  }),
  quarter: xe({
    matchPatterns: Wu,
    defaultMatchWidth: "wide",
    parsePatterns: Tu,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xe({
    matchPatterns: Ru,
    defaultMatchWidth: "wide",
    parsePatterns: _u,
    defaultParseWidth: "any"
  }),
  day: xe({
    matchPatterns: Fu,
    defaultMatchWidth: "wide",
    parsePatterns: Iu,
    defaultParseWidth: "any"
  }),
  dayPeriod: xe({
    matchPatterns: Bu,
    defaultMatchWidth: "any",
    parsePatterns: Yu,
    defaultParseWidth: "any"
  })
}, Kn = {
  code: "en-US",
  formatDistance: du,
  formatLong: gu,
  formatRelative: vu,
  localize: Cu,
  match: $u,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Lu(e, t) {
  const n = G(e, t == null ? void 0 : t.in);
  return ca(n, ua(n)) + 1;
}
function ma(e, t) {
  const n = G(e, t == null ? void 0 : t.in), r = +St(n) - +Zl(n);
  return Math.round(r / oa) + 1;
}
function ha(e, t) {
  var u, d, f, h;
  const n = G(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Nt(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (f = o.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = ne((t == null ? void 0 : t.in) || e, 0);
  i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = mt(i, t), c = ne((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = mt(c, t);
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
function zu(e, t) {
  var s, c, l, u;
  const n = Nt(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = ha(e, t), a = ne((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), mt(a, t);
}
function ga(e, t) {
  const n = G(e, t == null ? void 0 : t.in), r = +mt(n, t) - +zu(n, t);
  return Math.round(r / oa) + 1;
}
function q(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const He = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return q(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : q(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return q(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return q(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return q(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return q(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return q(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return q(o, t.length);
  }
}, st = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Fr = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return He.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = ha(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = a % 100;
      return q(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : q(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ia(e);
    return q(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return q(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return q(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return q(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return He.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return q(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = ga(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : q(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = ma(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : q(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : He.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Lu(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : q(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return q(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return q(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return q(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = st.noon : r === 0 ? o = st.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = st.evening : r >= 12 ? o = st.afternoon : r >= 4 ? o = st.morning : o = st.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return He.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : He.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : q(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : He.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : He.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return He.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Br(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Je(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Je(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Br(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Je(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Je(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ir(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Je(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ir(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Je(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return q(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return q(+e, t.length);
  }
};
function Ir(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + q(a, 2);
}
function Br(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + q(Math.abs(e) / 60, 2) : Je(e, t);
}
function Je(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = q(Math.trunc(r / 60), 2), a = q(r % 60, 2);
  return n + o + t + a;
}
const Yr = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, pa = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Hu = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Yr(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Yr(r, t)).replace("{{time}}", pa(o, t));
}, ju = {
  p: pa,
  P: Hu
}, Vu = /^D+$/, qu = /^Y+$/, Gu = ["D", "DD", "YY", "YYYY"];
function Uu(e) {
  return Vu.test(e);
}
function Xu(e) {
  return qu.test(e);
}
function Zu(e, t, n) {
  const r = Qu(e, t, n);
  if (console.warn(r), Gu.includes(e)) throw new RangeError(r);
}
function Qu(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ku = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ju = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ed = /^'([^]*?)'?$/, td = /''/g, nd = /[a-zA-Z]/;
function rd(e, t, n) {
  var u, d, f, h, v, m, y, b;
  const r = Nt(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Kn, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((b = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? 0, s = G(e, n == null ? void 0 : n.in);
  if (!nu(s))
    throw new RangeError("Invalid time value");
  let c = t.match(Ju).map((x) => {
    const w = x[0];
    if (w === "p" || w === "P") {
      const k = ju[w];
      return k(x, o.formatLong);
    }
    return x;
  }).join("").match(Ku).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const w = x[0];
    if (w === "'")
      return { isToken: !1, value: od(x) };
    if (Fr[w])
      return { isToken: !0, value: x };
    if (w.match(nd))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
      );
    return { isToken: !1, value: x };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(s, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: o
  };
  return c.map((x) => {
    if (!x.isToken) return x.value;
    const w = x.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Xu(w) || !(n != null && n.useAdditionalDayOfYearTokens) && Uu(w)) && Zu(w, t, String(e));
    const k = Fr[w[0]];
    return k(s, w, o.localize, l);
  }).join("");
}
function od(e) {
  const t = e.match(ed);
  return t ? t[1].replace(td, "'") : e;
}
function ad(e, t) {
  const n = G(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = ne(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function sd(e, t) {
  return G(e, t == null ? void 0 : t.in).getMonth();
}
function id(e, t) {
  return G(e, t == null ? void 0 : t.in).getFullYear();
}
function cd(e, t) {
  return +G(e) > +G(t);
}
function ld(e, t) {
  return +G(e) < +G(t);
}
function ud(e, t, n) {
  const [r, o] = bt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function dd(e, t, n) {
  const [r, o] = bt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function fd(e, t, n) {
  const r = G(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), i = ne(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const s = ad(i);
  return r.setMonth(t, Math.min(a, s)), r;
}
function md(e, t, n) {
  const r = G(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? ne(e, NaN) : (r.setFullYear(t), r);
}
const $r = 5, hd = 4;
function gd(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, $r * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? $r : hd;
}
function va(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -1 * 6) : t.addDays(n, -1 * (r - 1));
}
function pd(e, t) {
  const n = va(e, t), r = gd(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Be {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? oe.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var i;
      return (i = this.overrides) != null && i.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new oe(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : aa(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : sa(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : Ql(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Kl(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : ca(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : ru(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : su(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : pd(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : lu(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : ou(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : da(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : cu(r);
    }, this.format = (r, o, a) => {
      var s;
      const i = (s = this.overrides) != null && s.format ? this.overrides.format(r, o, this.options) : rd(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : ma(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : sd(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : id(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : ga(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : cd(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : ld(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : la(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : tu(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : ud(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : dd(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : Jl(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : eu(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : fd(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : md(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : va(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Dt(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : St(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : iu(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : mt(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : ua(r);
    }, this.options = { locale: Kn, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
}
const Pe = new Be();
class ya {
  constructor(t, n, r = Pe) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r;
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class vd {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class yd {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function Re(e, t, n = !1, r = Pe) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: i, isSameDay: s } = r;
  return o && a ? (i(a, o) < 0 && ([o, a] = [a, o]), i(t, o) >= (n ? 1 : 0) && i(a, t) >= (n ? 1 : 0)) : !n && a ? s(a, t) : !n && o ? s(o, t) : !1;
}
function ba(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Jn(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function wa(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function xa(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function ka(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Ma(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function _e(e, t, n = Pe) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: i } = n;
  return r.some((s) => {
    if (typeof s == "boolean")
      return s;
    if (n.isDate(s))
      return o(e, s);
    if (Ma(s, n))
      return s.includes(e);
    if (Jn(s))
      return Re(s, e, !1, n);
    if (ka(s))
      return Array.isArray(s.dayOfWeek) ? s.dayOfWeek.includes(e.getDay()) : s.dayOfWeek === e.getDay();
    if (ba(s)) {
      const c = a(s.before, e), l = a(s.after, e), u = c > 0, d = l < 0;
      return i(s.before, s.after) ? d && u : u || d;
    }
    return wa(s) ? a(e, s.after) > 0 : xa(s) ? a(s.before, e) > 0 : typeof s == "function" ? s(e) : !1;
  });
}
function bd(e, t, n) {
  const { disabled: r, hidden: o, modifiers: a, showOutsideDays: i, broadcastCalendar: s, today: c } = t, { isSameDay: l, isSameMonth: u, startOfMonth: d, isBefore: f, endOfMonth: h, isAfter: v } = n, m = t.startMonth && d(t.startMonth), y = t.endMonth && h(t.endMonth), b = {
    [J.focused]: [],
    [J.outside]: [],
    [J.disabled]: [],
    [J.hidden]: [],
    [J.today]: []
  }, x = {};
  for (const w of e) {
    const { date: k, displayMonth: p } = w, S = !!(p && !u(k, p)), M = !!(m && f(k, m)), O = !!(y && v(k, y)), T = !!(r && _e(k, r, n)), _ = !!(o && _e(k, o, n)) || M || O || // Broadcast calendar will show outside days as default
    !s && !i && S || s && i === !1 && S, $ = l(k, c ?? n.today());
    S && b.outside.push(w), T && b.disabled.push(w), _ && b.hidden.push(w), $ && b.today.push(w), a && Object.keys(a).forEach((I) => {
      const H = a == null ? void 0 : a[I];
      H && _e(k, H, n) && (x[I] ? x[I].push(w) : x[I] = [w]);
    });
  }
  return (w) => {
    const k = {
      [J.focused]: !1,
      [J.disabled]: !1,
      [J.hidden]: !1,
      [J.outside]: !1,
      [J.today]: !1
    }, p = {};
    for (const S in b) {
      const M = b[S];
      k[S] = M.some((O) => O === w);
    }
    for (const S in x)
      p[S] = x[S].some((M) => M === w);
    return {
      ...k,
      // custom modifiers should override all the previous ones
      ...p
    };
  };
}
function wd(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[J[a]] ? o.push(t[J[a]]) : t[me[a]] && o.push(t[me[a]]), o), [t[A.Day]]);
}
function xd(e) {
  return D.createElement("button", { ...e });
}
function kd(e) {
  return D.createElement("span", { ...e });
}
function Md(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return D.createElement(
    "svg",
    { className: r, width: t, height: t, viewBox: "0 0 24 24" },
    n === "up" && D.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
    n === "down" && D.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
    n === "left" && D.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
    n === "right" && D.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
  );
}
function Od(e) {
  const { day: t, modifiers: n, ...r } = e;
  return D.createElement("td", { ...r });
}
function Cd(e) {
  const { day: t, modifiers: n, ...r } = e, o = D.useRef(null);
  return D.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), D.createElement("button", { ref: o, ...r });
}
function Sd(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, i = [o[A.Dropdown], n].join(" "), s = t == null ? void 0 : t.find(({ value: c }) => c === a.value);
  return D.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[A.DropdownRoot] },
    D.createElement(r.Select, { className: i, ...a }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: u }) => D.createElement(r.Option, { key: c, value: c, disabled: u }, l))),
    D.createElement(
      "span",
      { className: o[A.CaptionLabel], "aria-hidden": !0 },
      s == null ? void 0 : s.label,
      D.createElement(r.Chevron, { orientation: "down", size: 18, className: o[A.Chevron] })
    )
  );
}
function Dd(e) {
  return D.createElement("div", { ...e });
}
function Pd(e) {
  return D.createElement("div", { ...e });
}
function Ed(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return D.createElement("div", { ...r }, e.children);
}
function Nd(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return D.createElement("div", { ...r });
}
function Ad(e) {
  return D.createElement("table", { ...e });
}
function Wd(e) {
  return D.createElement("div", { ...e });
}
const Oa = Ua(void 0);
function At() {
  const e = Xa(Oa);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function Td(e) {
  const { components: t } = At();
  return D.createElement(t.Dropdown, { ...e });
}
function Rd(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: i, classNames: s, labels: { labelPrevious: c, labelNext: l } } = At(), u = le((f) => {
    o && (n == null || n(f));
  }, [o, n]), d = le((f) => {
    r && (t == null || t(f));
  }, [r, t]);
  return D.createElement(
    "nav",
    { ...a },
    D.createElement(
      i.PreviousMonthButton,
      { type: "button", className: s[A.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: d },
      D.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: s[A.Chevron], orientation: "left" })
    ),
    D.createElement(
      i.NextMonthButton,
      { type: "button", className: s[A.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: u },
      D.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: s[A.Chevron] })
    )
  );
}
function _d(e) {
  const { components: t } = At();
  return D.createElement(t.Button, { ...e });
}
function Fd(e) {
  return D.createElement("option", { ...e });
}
function Id(e) {
  const { components: t } = At();
  return D.createElement(t.Button, { ...e });
}
function Bd(e) {
  const { rootRef: t, ...n } = e;
  return D.createElement("div", { ...n, ref: t });
}
function Yd(e) {
  return D.createElement("select", { ...e });
}
function $d(e) {
  const { week: t, ...n } = e;
  return D.createElement("tr", { ...n });
}
function Ld(e) {
  return D.createElement("th", { ...e });
}
function zd(e) {
  return D.createElement(
    "thead",
    { "aria-hidden": !0 },
    D.createElement("tr", { ...e })
  );
}
function Hd(e) {
  const { week: t, ...n } = e;
  return D.createElement("th", { ...n });
}
function jd(e) {
  return D.createElement("th", { ...e });
}
function Vd(e) {
  return D.createElement("tbody", { ...e });
}
function qd(e) {
  const { components: t } = At();
  return D.createElement(t.Dropdown, { ...e });
}
const Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: xd,
  CaptionLabel: kd,
  Chevron: Md,
  Day: Od,
  DayButton: Cd,
  Dropdown: Sd,
  DropdownNav: Dd,
  Footer: Pd,
  Month: Ed,
  MonthCaption: Nd,
  MonthGrid: Ad,
  Months: Wd,
  MonthsDropdown: Td,
  Nav: Rd,
  NextMonthButton: _d,
  Option: Fd,
  PreviousMonthButton: Id,
  Root: Bd,
  Select: Yd,
  Week: $d,
  WeekNumber: Hd,
  WeekNumberHeader: jd,
  Weekday: Ld,
  Weekdays: zd,
  Weeks: Vd,
  YearsDropdown: qd
}, Symbol.toStringTag, { value: "Module" }));
function Ud(e) {
  return {
    ...Gd,
    ...e
  };
}
function Xd(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function er() {
  const e = {};
  for (const t in A)
    e[A[t]] = `rdp-${A[t]}`;
  for (const t in J)
    e[J[t]] = `rdp-${J[t]}`;
  for (const t in me)
    e[me[t]] = `rdp-${me[t]}`;
  for (const t in ae)
    e[ae[t]] = `rdp-${ae[t]}`;
  return e;
}
function Ca(e, t, n) {
  return (n ?? new Be(t)).format(e, "LLLL y");
}
const Zd = Ca;
function Qd(e, t, n) {
  return (n ?? new Be(t)).format(e, "d");
}
function Kd(e, t = Pe) {
  return t.format(e, "LLLL");
}
function Jd(e, t = Pe) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function ef() {
  return "";
}
function tf(e, t, n) {
  return (n ?? new Be(t)).format(e, "cccccc");
}
function Sa(e, t = Pe) {
  return t.format(e, "yyyy");
}
const nf = Sa, rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Ca,
  formatDay: Qd,
  formatMonthCaption: Zd,
  formatMonthDropdown: Kd,
  formatWeekNumber: Jd,
  formatWeekNumberHeader: ef,
  formatWeekdayName: tf,
  formatYearCaption: nf,
  formatYearDropdown: Sa
}, Symbol.toStringTag, { value: "Module" }));
function of(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...rf,
    ...e
  };
}
function af(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: i, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: i(e),
    end: s(e)
  }).map((f) => {
    const h = r.formatMonthDropdown(f, o), v = l(f), m = t && f < a(t) || n && f > a(n) || !1;
    return { value: v, label: h, disabled: m };
  });
}
function sf(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[A.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function cf(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let i = 0; i < 7; i++) {
    const s = e.addDays(o, i);
    a.push(s);
  }
  return a;
}
function lf(e, t, n, r) {
  if (!e || !t)
    return;
  const { startOfYear: o, endOfYear: a, addYears: i, getYear: s, isBefore: c, isSameYear: l } = r, u = o(e), d = a(t), f = [];
  let h = u;
  for (; c(h, d) || l(h, d); )
    f.push(h), h = i(h, 1);
  return f.map((v) => {
    const m = n.formatYearDropdown(v, r);
    return {
      value: s(v),
      label: m,
      disabled: !1
    };
  });
}
function Da(e, t, n) {
  return (n ?? new Be(t)).format(e, "LLLL y");
}
const uf = Da;
function df(e, t, n, r) {
  let o = (r ?? new Be(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function Pa(e, t, n, r) {
  let o = (r ?? new Be(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const ff = Pa;
function mf() {
  return "";
}
function hf(e) {
  return "Choose the Month";
}
function gf(e) {
  return "Go to the Next Month";
}
function pf(e) {
  return "Go to the Previous Month";
}
function vf(e, t, n) {
  return (n ?? new Be(t)).format(e, "cccc");
}
function yf(e, t) {
  return `Week ${e}`;
}
function bf(e) {
  return "Week Number";
}
function wf(e) {
  return "Choose the Year";
}
const xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: uf,
  labelDay: ff,
  labelDayButton: Pa,
  labelGrid: Da,
  labelGridcell: df,
  labelMonthDropdown: hf,
  labelNav: mf,
  labelNext: gf,
  labelPrevious: pf,
  labelWeekNumber: yf,
  labelWeekNumberHeader: bf,
  labelWeekday: vf,
  labelYearDropdown: wf
}, Symbol.toStringTag, { value: "Module" })), Wt = (e) => e instanceof HTMLElement ? e : null, Cn = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], kf = (e) => Wt(e.querySelector("[data-animated-month]")), Sn = (e) => Wt(e.querySelector("[data-animated-caption]")), Dn = (e) => Wt(e.querySelector("[data-animated-weeks]")), Mf = (e) => Wt(e.querySelector("[data-animated-nav]")), Of = (e) => Wt(e.querySelector("[data-animated-weekdays]"));
function Cf(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const i = zt(null), s = zt(r), c = zt(!1);
  Vr(() => {
    const l = s.current;
    if (s.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const u = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), f = d ? n[ae.caption_after_enter] : n[ae.caption_before_enter], h = d ? n[ae.weeks_after_enter] : n[ae.weeks_before_enter], v = i.current, m = e.current.cloneNode(!0);
    if (m instanceof HTMLElement ? (Cn(m).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const k = kf(w);
      k && w.contains(k) && w.removeChild(k);
      const p = Sn(w);
      p && p.classList.remove(f);
      const S = Dn(w);
      S && S.classList.remove(h);
    }), i.current = m) : i.current = null, c.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const y = v instanceof HTMLElement ? Cn(v) : [], b = Cn(e.current);
    if (b && b.every((x) => x instanceof HTMLElement) && y && y.every((x) => x instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const x = Mf(e.current);
      x && (x.style.zIndex = "1"), b.forEach((w, k) => {
        const p = y[k];
        if (!p)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const S = Sn(w);
        S && S.classList.add(f);
        const M = Dn(w);
        M && M.classList.add(h);
        const O = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), x && (x.style.zIndex = ""), S && S.classList.remove(f), M && M.classList.remove(h), w.style.position = "", w.style.overflow = "", w.contains(p) && w.removeChild(p);
        };
        p.style.pointerEvents = "none", p.style.position = "absolute", p.style.overflow = "hidden", p.setAttribute("aria-hidden", "true");
        const T = Of(p);
        T && (T.style.opacity = "0");
        const _ = Sn(p);
        _ && (_.classList.add(d ? n[ae.caption_before_exit] : n[ae.caption_after_exit]), _.addEventListener("animationend", O));
        const $ = Dn(p);
        $ && $.classList.add(d ? n[ae.weeks_before_exit] : n[ae.weeks_after_exit]), w.insertBefore(p, w.firstChild);
      });
    }
  });
}
function Sf(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: i, fixedWeeks: s, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: d, endOfBroadcastWeek: f, endOfISOWeek: h, endOfMonth: v, endOfWeek: m, isAfter: y, startOfBroadcastWeek: b, startOfISOWeek: x, startOfWeek: w } = r, k = c ? b(o, r) : i ? x(o) : w(o), p = c ? f(a) : i ? h(v(a)) : m(v(a)), S = u(p, k), M = d(a, o) + 1, O = [];
  for (let $ = 0; $ <= S; $++) {
    const I = l(k, $);
    if (t && y(I, t))
      break;
    O.push(I);
  }
  const _ = (c ? 35 : 42) * M;
  if (s && O.length < _) {
    const $ = _ - O.length;
    for (let I = 0; I < $; I++) {
      const H = l(O[O.length - 1], 1);
      O.push(H);
    }
  }
  return O;
}
function Df(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, i) => [...a, ...i.days], t);
    return [...n, ...o];
  }, t);
}
function Pf(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let i = 0; i < o; i++) {
    const s = r.addMonths(e, i);
    if (t && s > t)
      break;
    a.push(s);
  }
  return a;
}
function Lr(e, t) {
  const { month: n, defaultMonth: r, today: o = t.today(), numberOfMonths: a = 1, endMonth: i, startMonth: s } = e;
  let c = n || r || o;
  const { differenceInCalendarMonths: l, addMonths: u, startOfMonth: d } = t;
  if (i && l(i, c) < 0) {
    const f = -1 * (a - 1);
    c = u(i, f);
  }
  return s && l(c, s) < 0 && (c = s), d(c);
}
function Ef(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: i, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: d, startOfISOWeek: f, startOfWeek: h } = r, v = e.reduce((m, y) => {
    const b = n.broadcastCalendar ? d(y, r) : n.ISOWeek ? f(y) : h(y), x = n.broadcastCalendar ? a(y) : n.ISOWeek ? i(s(y)) : c(s(y)), w = t.filter((M) => M >= b && M <= x), k = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < k) {
      const M = t.filter((O) => {
        const T = k - w.length;
        return O > x && O <= o(x, T);
      });
      w.push(...M);
    }
    const p = w.reduce((M, O) => {
      const T = n.ISOWeek ? l(O) : u(O), _ = M.find((I) => I.weekNumber === T), $ = new ya(O, y, r);
      return _ ? _.days.push($) : M.push(new yd(T, [$])), M;
    }, []), S = new vd(y, p);
    return m.push(S), m;
  }, []);
  return n.reverseMonths ? v.reverse() : v;
}
function Nf(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: i, endOfMonth: s, addYears: c, endOfYear: l, newDate: u, today: d } = t, { fromYear: f, toYear: h, fromMonth: v, toMonth: m } = e;
  !n && v && (n = v), !n && f && (n = t.newDate(f, 0, 1)), !r && m && (r = m), !r && h && (r = u(h, 11, 31));
  const y = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : f ? n = u(f, 0, 1) : !n && y && (n = o(c(e.today ?? d(), -100))), r ? r = s(r) : h ? r = u(h, 11, 31) : !r && y && (r = l(e.today ?? d())), [
    n && a(n),
    r && a(r)
  ];
}
function Af(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = r, l = o ? a : 1, u = i(e);
  if (!t)
    return s(u, l);
  if (!(c(t, e) < a))
    return s(u, l);
}
function Wf(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: i, addMonths: s, differenceInCalendarMonths: c } = r, l = o ? a ?? 1 : 1, u = i(e);
  if (!t)
    return s(u, -l);
  if (!(c(u, t) <= 0))
    return s(u, -l);
}
function Tf(e) {
  const t = [];
  return e.reduce((n, r) => [...n, ...r.weeks], t);
}
function nn(e, t) {
  const [n, r] = qt(e);
  return [t === void 0 ? n : t, r];
}
function Rf(e, t) {
  const [n, r] = Nf(e, t), { startOfMonth: o, endOfMonth: a } = t, i = Lr(e, t), [s, c] = nn(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  Za(() => {
    const S = Lr(e, t);
    c(S);
  }, [e.timeZone]);
  const l = Pf(s, r, e, t), u = Sf(l, e.endMonth ? a(e.endMonth) : void 0, e, t), d = Ef(l, u, e, t), f = Tf(d), h = Df(d), v = Wf(s, n, e, t), m = Af(s, r, e, t), { disableNavigation: y, onMonthChange: b } = e, x = (S) => f.some((M) => M.days.some((O) => O.isEqualTo(S))), w = (S) => {
    if (y)
      return;
    let M = o(S);
    n && M < o(n) && (M = o(n)), r && M > o(r) && (M = o(r)), c(M), b == null || b(M);
  };
  return {
    months: d,
    weeks: f,
    days: h,
    navStart: n,
    navEnd: r,
    previousMonth: v,
    nextMonth: m,
    goToMonth: w,
    goToDay: (S) => {
      x(S) || w(S.date);
    }
  };
}
var ye;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(ye || (ye = {}));
function zr(e) {
  return !e[J.disabled] && !e[J.hidden] && !e[J.outside];
}
function _f(e, t, n, r) {
  let o, a = -1;
  for (const i of e) {
    const s = t(i);
    zr(s) && (s[J.focused] && a < ye.FocusedModifier ? (o = i, a = ye.FocusedModifier) : r != null && r.isEqualTo(i) && a < ye.LastFocused ? (o = i, a = ye.LastFocused) : n(i.date) && a < ye.Selected ? (o = i, a = ye.Selected) : s[J.today] && a < ye.Today && (o = i, a = ye.Today));
  }
  return o || (o = e.find((i) => zr(t(i)))), o;
}
function Ff(e, t, n, r, o, a, i) {
  const { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: d, addYears: f, endOfBroadcastWeek: h, endOfISOWeek: v, endOfWeek: m, max: y, min: b, startOfBroadcastWeek: x, startOfISOWeek: w, startOfWeek: k } = i;
  let S = {
    day: l,
    week: d,
    month: u,
    year: f,
    startOfWeek: (M) => c ? x(M, i) : s ? w(M) : k(M),
    endOfWeek: (M) => c ? h(M) : s ? v(M) : m(M)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? S = y([r, S]) : t === "after" && o && (S = b([o, S])), S;
}
function Ea(e, t, n, r, o, a, i, s = 0) {
  if (s > 365)
    return;
  const c = Ff(e, t, n.date, r, o, a, i), l = !!(a.disabled && _e(c, a.disabled, i)), u = !!(a.hidden && _e(c, a.hidden, i)), d = c, f = new ya(c, d, i);
  return !l && !u ? f : Ea(e, t, f, r, o, a, i, s + 1);
}
function If(e, t, n, r, o) {
  const { autoFocus: a } = e, [i, s] = qt(), c = _f(t.days, n, r || (() => !1), i), [l, u] = qt(a ? c : void 0);
  return {
    isFocusTarget: (m) => !!(c != null && c.isEqualTo(m)),
    setFocused: u,
    focused: l,
    blur: () => {
      s(l), u(void 0);
    },
    moveFocus: (m, y) => {
      if (!l)
        return;
      const b = Ea(m, y, l, t.navStart, t.navEnd, e, o);
      b && (t.goToDay(b), u(b));
    }
  };
}
function Bf(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, i] = nn(n, o ? n : void 0), s = o ? n : a, { isSameDay: c } = t, l = (h) => (s == null ? void 0 : s.some((v) => c(v, h))) ?? !1, { min: u, max: d } = e;
  return {
    selected: s,
    select: (h, v, m) => {
      let y = [...s ?? []];
      if (l(h)) {
        if ((s == null ? void 0 : s.length) === u || r && (s == null ? void 0 : s.length) === 1)
          return;
        y = s == null ? void 0 : s.filter((b) => !c(b, h));
      } else
        (s == null ? void 0 : s.length) === d ? y = [h] : y = [...y, h];
      return o || i(y), o == null || o(y, h, v, m), y;
    },
    isSelected: l
  };
}
function Yf(e, t, n = 0, r = 0, o = !1, a = Pe) {
  const { from: i, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a;
  let d;
  if (!i && !s)
    d = { from: e, to: n > 0 ? void 0 : e };
  else if (i && !s)
    c(i, e) ? o ? d = { from: i, to: void 0 } : d = void 0 : u(e, i) ? d = { from: e, to: i } : d = { from: i, to: e };
  else if (i && s)
    if (c(i, e) && c(s, e))
      o ? d = { from: i, to: s } : d = void 0;
    else if (c(i, e))
      d = { from: i, to: n > 0 ? void 0 : e };
    else if (c(s, e))
      d = { from: e, to: n > 0 ? void 0 : e };
    else if (u(e, i))
      d = { from: e, to: s };
    else if (l(e, i))
      d = { from: i, to: e };
    else if (l(e, s))
      d = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (d != null && d.from && (d != null && d.to)) {
    const f = a.differenceInCalendarDays(d.to, d.from);
    r > 0 && f > r ? d = { from: e, to: void 0 } : n > 1 && f < n && (d = { from: e, to: void 0 });
  }
  return d;
}
function $f(e, t, n = Pe) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const a = n.differenceInCalendarDays(e.to, e.from), i = Math.min(a, 6);
  for (let s = 0; s <= i; s++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Hr(e, t, n = Pe) {
  return Re(e, t.from, !1, n) || Re(e, t.to, !1, n) || Re(t, e.from, !1, n) || Re(t, e.to, !1, n);
}
function Lf(e, t, n = Pe) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((s) => typeof s != "function").some((s) => typeof s == "boolean" ? s : n.isDate(s) ? Re(e, s, !1, n) : Ma(s, n) ? s.some((c) => Re(e, c, !1, n)) : Jn(s) ? s.from && s.to ? Hr(e, { from: s.from, to: s.to }, n) : !1 : ka(s) ? $f(e, s.dayOfWeek, n) : ba(s) ? n.isAfter(s.before, s.after) ? Hr(e, {
    from: n.addDays(s.after, 1),
    to: n.addDays(s.before, -1)
  }, n) : _e(e.from, s, n) || _e(e.to, s, n) : wa(s) || xa(s) ? _e(e.from, s, n) || _e(e.to, s, n) : !1))
    return !0;
  const i = r.filter((s) => typeof s == "function");
  if (i.length) {
    let s = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (i.some((u) => u(s)))
        return !0;
      s = n.addDays(s, 1);
    }
  }
  return !1;
}
function zf(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: i } = e, [s, c] = nn(o, i ? o : void 0), l = i ? o : s;
  return {
    selected: l,
    select: (f, h, v) => {
      const { min: m, max: y } = e, b = f ? Yf(f, l, m, y, a, t) : void 0;
      return r && n && (b != null && b.from) && b.to && Lf({ from: b.from, to: b.to }, n, t) && (b.from = f, b.to = void 0), i || c(b), i == null || i(b, f, h, v), b;
    },
    isSelected: (f) => l && Re(l, f, !1, t)
  };
}
function Hf(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, i] = nn(n, o ? n : void 0), s = o ? n : a, { isSameDay: c } = t;
  return {
    selected: s,
    select: (d, f, h) => {
      let v = d;
      return !r && s && s && c(d, s) && (v = void 0), o || i(v), o == null || o(v, d, f, h), v;
    },
    isSelected: (d) => s ? c(s, d) : !1
  };
}
function jf(e, t) {
  const n = Hf(e, t), r = Bf(e, t), o = zf(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function Vf(e) {
  var rr;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new oe(t.today, t.timeZone)), t.month && (t.month = new oe(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new oe(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new oe(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new oe(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new oe(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (rr = t.selected) == null ? void 0 : rr.map((B) => new oe(B, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new oe(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new oe(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: i, classNames: s } = fn(() => {
    const B = { ...Kn, ...t.locale };
    return {
      dateLib: new Be({
        locale: B,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: Ud(t.components),
      formatters: of(t.formatters),
      labels: { ...xf, ...t.labels },
      locale: B,
      classNames: { ...er(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]), { captionLayout: c, mode: l, navLayout: u, numberOfMonths: d = 1, onDayBlur: f, onDayClick: h, onDayFocus: v, onDayKeyDown: m, onDayMouseEnter: y, onDayMouseLeave: b, onNextClick: x, onPrevClick: w, showWeekNumber: k, styles: p } = t, { formatCaption: S, formatDay: M, formatMonthDropdown: O, formatWeekNumber: T, formatWeekNumberHeader: _, formatWeekdayName: $, formatYearDropdown: I } = r, H = Rf(t, a), { days: W, months: j, navStart: R, navEnd: L, previousMonth: C, nextMonth: z, goToMonth: Z } = H, ue = bd(W, t, a), { isSelected: de, select: Q, selected: ee } = jf(t, a) ?? {}, { blur: Ee, focused: Ne, isFocusTarget: K, moveFocus: Ye, setFocused: ce } = If(t, H, ue, de ?? (() => !1), a), { labelDayButton: Ae, labelGridcell: $e, labelGrid: We, labelMonthDropdown: Qe, labelNav: wt, labelPrevious: rn, labelNext: on, labelWeekday: an, labelWeekNumber: sn, labelWeekNumberHeader: tt, labelYearDropdown: Aa } = o, Wa = fn(() => cf(a, t.ISOWeek), [a, t.ISOWeek]), tr = l !== void 0 || h !== void 0, cn = le(() => {
    C && (Z(C), w == null || w(C));
  }, [C, Z, w]), ln = le(() => {
    z && (Z(z), x == null || x(z));
  }, [Z, z, x]), Ta = le((B, X) => (U) => {
    U.preventDefault(), U.stopPropagation(), ce(B), Q == null || Q(B.date, X, U), h == null || h(B.date, X, U);
  }, [Q, h, ce]), Ra = le((B, X) => (U) => {
    ce(B), v == null || v(B.date, X, U);
  }, [v, ce]), _a = le((B, X) => (U) => {
    Ee(), f == null || f(B.date, X, U);
  }, [Ee, f]), Fa = le((B, X) => (U) => {
    const Le = {
      ArrowLeft: ["day", t.dir === "rtl" ? "after" : "before"],
      ArrowRight: ["day", t.dir === "rtl" ? "before" : "after"],
      ArrowDown: ["week", "after"],
      ArrowUp: ["week", "before"],
      PageUp: [U.shiftKey ? "year" : "month", "before"],
      PageDown: [U.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (Le[U.key]) {
      U.preventDefault(), U.stopPropagation();
      const [fe, Tt] = Le[U.key];
      Ye(fe, Tt);
    }
    m == null || m(B.date, X, U);
  }, [Ye, m, t.dir]), Ia = le((B, X) => (U) => {
    y == null || y(B.date, X, U);
  }, [y]), Ba = le((B, X) => (U) => {
    b == null || b(B.date, X, U);
  }, [b]), Ya = le((B) => (X) => {
    const U = Number(X.target.value), Le = a.setMonth(a.startOfMonth(B), U);
    Z(Le);
  }, [a, Z]), $a = le((B) => (X) => {
    const U = Number(X.target.value), Le = a.setYear(a.startOfMonth(B), U);
    Z(Le);
  }, [a, Z]), { className: La, style: za } = fn(() => ({
    className: [s[A.Root], t.className].filter(Boolean).join(" "),
    style: { ...p == null ? void 0 : p[A.Root], ...t.style }
  }), [s, t.className, t.style, p]), Ha = Xd(t), nr = zt(null);
  Cf(nr, !!t.animate, {
    classNames: s,
    months: j,
    focused: Ne,
    dateLib: a
  });
  const ja = {
    dayPickerProps: t,
    selected: ee,
    select: Q,
    isSelected: de,
    months: j,
    nextMonth: z,
    previousMonth: C,
    goToMonth: Z,
    getModifiers: ue,
    components: n,
    classNames: s,
    styles: p,
    labels: o,
    formatters: r
  };
  return D.createElement(
    Oa.Provider,
    { value: ja },
    D.createElement(
      n.Root,
      { rootRef: t.animate ? nr : void 0, className: La, style: za, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], ...Ha },
      D.createElement(
        n.Months,
        { className: s[A.Months], style: p == null ? void 0 : p[A.Months] },
        !t.hideNavigation && !u && D.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: s[A.Nav], style: p == null ? void 0 : p[A.Nav], "aria-label": wt(), onPreviousClick: cn, onNextClick: ln, previousMonth: C, nextMonth: z }),
        j.map((B, X) => {
          const U = af(B.date, R, L, r, a), Le = lf(R, L, r, a);
          return D.createElement(
            n.Month,
            { "data-animated-month": t.animate ? "true" : void 0, className: s[A.Month], style: p == null ? void 0 : p[A.Month], key: X, displayIndex: X, calendarMonth: B },
            u === "around" && !t.hideNavigation && X === 0 && D.createElement(
              n.PreviousMonthButton,
              { type: "button", className: s[A.PreviousMonthButton], tabIndex: C ? void 0 : -1, "aria-disabled": C ? void 0 : !0, "aria-label": rn(C), onClick: cn, "data-animated-button": t.animate ? "true" : void 0 },
              D.createElement(n.Chevron, { disabled: C ? void 0 : !0, className: s[A.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
            ),
            D.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: s[A.MonthCaption], style: p == null ? void 0 : p[A.MonthCaption], calendarMonth: B, displayIndex: X }, c != null && c.startsWith("dropdown") ? D.createElement(
              n.DropdownNav,
              { className: s[A.Dropdowns], style: p == null ? void 0 : p[A.Dropdowns] },
              c === "dropdown" || c === "dropdown-months" ? D.createElement(n.MonthsDropdown, { className: s[A.MonthsDropdown], "aria-label": Qe(), classNames: s, components: n, disabled: !!t.disableNavigation, onChange: Ya(B.date), options: U, style: p == null ? void 0 : p[A.Dropdown], value: a.getMonth(B.date) }) : D.createElement("span", null, O(B.date, a)),
              c === "dropdown" || c === "dropdown-years" ? D.createElement(n.YearsDropdown, { className: s[A.YearsDropdown], "aria-label": Aa(a.options), classNames: s, components: n, disabled: !!t.disableNavigation, onChange: $a(B.date), options: Le, style: p == null ? void 0 : p[A.Dropdown], value: a.getYear(B.date) }) : D.createElement("span", null, I(B.date, a)),
              D.createElement("span", { role: "status", "aria-live": "polite", style: {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
                wordWrap: "normal"
              } }, S(B.date, a.options, a))
            ) : D.createElement(n.CaptionLabel, { className: s[A.CaptionLabel], role: "status", "aria-live": "polite" }, S(B.date, a.options, a))),
            u === "around" && !t.hideNavigation && X === d - 1 && D.createElement(
              n.NextMonthButton,
              { type: "button", className: s[A.NextMonthButton], tabIndex: z ? void 0 : -1, "aria-disabled": z ? void 0 : !0, "aria-label": on(z), onClick: ln, "data-animated-button": t.animate ? "true" : void 0 },
              D.createElement(n.Chevron, { disabled: z ? void 0 : !0, className: s[A.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
            ),
            X === d - 1 && u === "after" && !t.hideNavigation && D.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: s[A.Nav], style: p == null ? void 0 : p[A.Nav], "aria-label": wt(), onPreviousClick: cn, onNextClick: ln, previousMonth: C, nextMonth: z }),
            D.createElement(
              n.MonthGrid,
              { role: "grid", "aria-multiselectable": l === "multiple" || l === "range", "aria-label": We(B.date, a.options, a) || void 0, className: s[A.MonthGrid], style: p == null ? void 0 : p[A.MonthGrid] },
              !t.hideWeekdays && D.createElement(
                n.Weekdays,
                { "data-animated-weekdays": t.animate ? "true" : void 0, className: s[A.Weekdays], style: p == null ? void 0 : p[A.Weekdays] },
                k && D.createElement(n.WeekNumberHeader, { "aria-label": tt(a.options), className: s[A.WeekNumberHeader], style: p == null ? void 0 : p[A.WeekNumberHeader], scope: "col" }, _()),
                Wa.map((fe, Tt) => D.createElement(n.Weekday, { "aria-label": an(fe, a.options, a), className: s[A.Weekday], key: Tt, style: p == null ? void 0 : p[A.Weekday], scope: "col" }, $(fe, a.options, a)))
              ),
              D.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: s[A.Weeks], style: p == null ? void 0 : p[A.Weeks] }, B.weeks.map((fe, Tt) => D.createElement(
                n.Week,
                { className: s[A.Week], key: fe.weekNumber, style: p == null ? void 0 : p[A.Week], week: fe },
                k && D.createElement(n.WeekNumber, { week: fe, style: p == null ? void 0 : p[A.WeekNumber], "aria-label": sn(fe.weekNumber, {
                  locale: i
                }), className: s[A.WeekNumber], scope: "row", role: "rowheader" }, T(fe.weekNumber, a)),
                fe.days.map((re) => {
                  const { date: pe } = re, V = ue(re);
                  if (V[J.focused] = !V.hidden && !!(Ne != null && Ne.isEqualTo(re)), V[me.selected] = (de == null ? void 0 : de(pe)) || V.selected, Jn(ee)) {
                    const { from: un, to: dn } = ee;
                    V[me.range_start] = !!(un && dn && a.isSameDay(pe, un)), V[me.range_end] = !!(un && dn && a.isSameDay(pe, dn)), V[me.range_middle] = Re(ee, pe, !0, a);
                  }
                  const Va = sf(V, p, t.modifiersStyles), qa = wd(V, s, t.modifiersClassNames), Ga = !tr && !V.hidden ? $e(pe, V, a.options, a) : void 0;
                  return D.createElement(n.Day, { key: `${a.format(pe, "yyyy-MM-dd")}_${a.format(re.displayMonth, "yyyy-MM")}`, day: re, modifiers: V, className: qa.join(" "), style: Va, role: "gridcell", "aria-selected": V.selected || void 0, "aria-label": Ga, "data-day": a.format(pe, "yyyy-MM-dd"), "data-month": re.outside ? a.format(pe, "yyyy-MM") : void 0, "data-selected": V.selected || void 0, "data-disabled": V.disabled || void 0, "data-hidden": V.hidden || void 0, "data-outside": re.outside || void 0, "data-focused": V.focused || void 0, "data-today": V.today || void 0 }, !V.hidden && tr ? D.createElement(n.DayButton, { className: s[A.DayButton], style: p == null ? void 0 : p[A.DayButton], type: "button", day: re, modifiers: V, disabled: V.disabled || void 0, tabIndex: K(re) ? 0 : -1, "aria-label": Ae(pe, V, a.options, a), onClick: Ta(re, V), onBlur: _a(re, V), onFocus: Ra(re, V), onKeyDown: Fa(re, V), onMouseEnter: Ia(re, V), onMouseLeave: Ba(re, V) }, M(pe, a.options, a)) : !V.hidden && M(re.date, a.options, a));
                })
              )))
            )
          );
        })
      ),
      t.footer && D.createElement(n.Footer, { className: s[A.Footer], style: p == null ? void 0 : p[A.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const qf = {
  lessThanXSeconds: {
    one: "1秒未満",
    other: "{{count}}秒未満",
    oneWithSuffix: "約1秒",
    otherWithSuffix: "約{{count}}秒"
  },
  xSeconds: {
    one: "1秒",
    other: "{{count}}秒"
  },
  halfAMinute: "30秒",
  lessThanXMinutes: {
    one: "1分未満",
    other: "{{count}}分未満",
    oneWithSuffix: "約1分",
    otherWithSuffix: "約{{count}}分"
  },
  xMinutes: {
    one: "1分",
    other: "{{count}}分"
  },
  aboutXHours: {
    one: "約1時間",
    other: "約{{count}}時間"
  },
  xHours: {
    one: "1時間",
    other: "{{count}}時間"
  },
  xDays: {
    one: "1日",
    other: "{{count}}日"
  },
  aboutXWeeks: {
    one: "約1週間",
    other: "約{{count}}週間"
  },
  xWeeks: {
    one: "1週間",
    other: "{{count}}週間"
  },
  aboutXMonths: {
    one: "約1か月",
    other: "約{{count}}か月"
  },
  xMonths: {
    one: "1か月",
    other: "{{count}}か月"
  },
  aboutXYears: {
    one: "約1年",
    other: "約{{count}}年"
  },
  xYears: {
    one: "1年",
    other: "{{count}}年"
  },
  overXYears: {
    one: "1年以上",
    other: "{{count}}年以上"
  },
  almostXYears: {
    one: "1年近く",
    other: "{{count}}年近く"
  }
}, Gf = (e, t, n) => {
  n = n || {};
  let r;
  const o = qf[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, Uf = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, Xf = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, Zf = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Qf = {
  date: lt({
    formats: Uf,
    defaultWidth: "full"
  }),
  time: lt({
    formats: Xf,
    defaultWidth: "full"
  }),
  dateTime: lt({
    formats: Zf,
    defaultWidth: "full"
  })
}, Kf = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, Jf = (e, t, n, r) => Kf[e], em = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, tm = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, nm = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ]
}, rm = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, om = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, am = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, sm = (e, t) => {
  const n = Number(e);
  switch (String(t == null ? void 0 : t.unit)) {
    case "year":
      return `${n}年`;
    case "quarter":
      return `第${n}四半期`;
    case "month":
      return `${n}月`;
    case "week":
      return `第${n}週`;
    case "date":
      return `${n}日`;
    case "hour":
      return `${n}時`;
    case "minute":
      return `${n}分`;
    case "second":
      return `${n}秒`;
    default:
      return `${n}`;
  }
}, im = {
  ordinalNumber: sm,
  era: we({
    values: em,
    defaultWidth: "wide"
  }),
  quarter: we({
    values: tm,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: we({
    values: nm,
    defaultWidth: "wide"
  }),
  day: we({
    values: rm,
    defaultWidth: "wide"
  }),
  dayPeriod: we({
    values: om,
    defaultWidth: "wide",
    formattingValues: am,
    defaultFormattingWidth: "wide"
  })
}, cm = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, lm = /\d+/i, um = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, dm = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, fm = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, mm = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, hm = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, gm = {
  any: [
    /^1\D/,
    /^2/,
    /^3/,
    /^4/,
    /^5/,
    /^6/,
    /^7/,
    /^8/,
    /^9/,
    /^10/,
    /^11/,
    /^12/
  ]
}, pm = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, vm = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, ym = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, bm = {
  any: {
    am: /^(A|午前)/i,
    pm: /^(P|午後)/i,
    midnight: /^深夜|真夜中/i,
    noon: /^正午/i,
    morning: /^朝/i,
    afternoon: /^午後/i,
    evening: /^夜/i,
    night: /^深夜/i
  }
}, wm = {
  ordinalNumber: fa({
    matchPattern: cm,
    parsePattern: lm,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: xe({
    matchPatterns: um,
    defaultMatchWidth: "wide",
    parsePatterns: dm,
    defaultParseWidth: "any"
  }),
  quarter: xe({
    matchPatterns: fm,
    defaultMatchWidth: "wide",
    parsePatterns: mm,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xe({
    matchPatterns: hm,
    defaultMatchWidth: "wide",
    parsePatterns: gm,
    defaultParseWidth: "any"
  }),
  day: xe({
    matchPatterns: pm,
    defaultMatchWidth: "wide",
    parsePatterns: vm,
    defaultParseWidth: "any"
  }),
  dayPeriod: xe({
    matchPatterns: ym,
    defaultMatchWidth: "any",
    parsePatterns: bm,
    defaultParseWidth: "any"
  })
}, xm = {
  code: "ja",
  formatDistance: Gf,
  formatLong: Qf,
  formatRelative: Jf,
  localize: im,
  match: wm,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Rm({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  captionLayout: r = "label",
  buttonVariant: o = "ghost",
  formatters: a,
  components: i,
  ...s
}) {
  const c = er();
  return /* @__PURE__ */ N(
    Vf,
    {
      locale: xm,
      showOutsideDays: n,
      className: Y(
        `
          group/calendar bg-background p-3
          [--cell-size:--spacing(8)]
          [[data-slot=card-content]_&]:bg-transparent
          [[data-slot=popover-content]_&]:bg-transparent
        `,
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        e
      ),
      captionLayout: r,
      formatters: {
        formatMonthDropdown: (l) => l.toLocaleString("ja-JP", {
          month: "short"
        }),
        ...a
      },
      classNames: {
        root: Y("w-fit", c.root),
        months: Y(
          `
            relative flex flex-col gap-4
            md:flex-row
          `,
          c.months
        ),
        month: Y("flex w-full flex-col gap-4", c.month),
        nav: Y(
          `
            absolute inset-x-0 top-0 flex w-full items-center justify-between
            gap-1
          `,
          c.nav
        ),
        button_previous: Y(
          Wn({
            variant: o
          }),
          `
            size-(--cell-size) p-0 select-none
            aria-disabled:opacity-50
          `,
          c.button_previous
        ),
        button_next: Y(
          Wn({
            variant: o
          }),
          `
            size-(--cell-size) p-0 select-none
            aria-disabled:opacity-50
          `,
          c.button_next
        ),
        month_caption: Y(
          `
            flex h-(--cell-size) w-full items-center justify-center
            px-(--cell-size)
          `,
          c.month_caption
        ),
        dropdowns: Y(
          `
            flex h-(--cell-size) w-full items-center justify-center gap-1.5
            text-sm font-medium
          `,
          c.dropdowns
        ),
        dropdown_root: Y(
          `
            relative rounded-md border border-input shadow-xs
            has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50
          `,
          c.dropdown_root
        ),
        dropdown: Y("absolute inset-0 opacity-0", c.dropdown),
        caption_label: Y(
          "font-medium select-none",
          r === "label" ? "text-sm" : `
              flex h-8 items-center gap-1 rounded-md pr-1 pl-2 text-sm
              [&>svg]:size-3.5 [&>svg]:text-muted-foreground
            `,
          c.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: Y("flex", c.weekdays),
        weekday: Y(
          `
            flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground
            select-none
          `,
          c.weekday
        ),
        week: Y("mt-2 flex w-full", c.week),
        week_number_header: Y(
          "w-(--cell-size) select-none",
          c.week_number_header
        ),
        week_number: Y(
          "text-[0.8rem] text-muted-foreground select-none",
          c.week_number
        ),
        day: Y(
          `
            group/day relative aspect-square h-full w-full p-0 text-center
            select-none
            [&:first-child[data-selected=true]_button]:rounded-l-md
            [&:last-child[data-selected=true]_button]:rounded-r-md
          `,
          c.day
        ),
        range_start: Y(
          "rounded-l-md bg-accent",
          c.range_start
        ),
        range_middle: Y("rounded-none", c.range_middle),
        range_end: Y("rounded-r-md bg-accent", c.range_end),
        today: Y(
          `
            rounded-md bg-accent text-accent-foreground
            data-[selected=true]:rounded-none
          `,
          c.today
        ),
        outside: Y(
          `
            text-muted-foreground
            aria-selected:text-muted-foreground
          `,
          c.outside
        ),
        disabled: Y(
          "text-muted-foreground opacity-50",
          c.disabled
        ),
        hidden: Y("invisible", c.hidden),
        ...t
      },
      components: {
        Root: ({
          className: l,
          rootRef: u,
          ...d
        }) => /* @__PURE__ */ N(
          "div",
          {
            "data-slot": "calendar",
            ref: u,
            className: Y(l),
            ...d
          }
        ),
        Chevron: ({
          className: l,
          orientation: u,
          ...d
        }) => u === "left" ? /* @__PURE__ */ N(Xs, { className: Y("size-4", l), ...d }) : u === "right" ? /* @__PURE__ */ N(
          Qs,
          {
            className: Y("size-4", l),
            ...d
          }
        ) : /* @__PURE__ */ N(Gs, { className: Y("size-4", l), ...d }),
        DayButton: km,
        WeekNumber: ({
          children: l,
          ...u
        }) => /* @__PURE__ */ N("td", { ...u, children: /* @__PURE__ */ N("div", { className: `
                flex size-(--cell-size) items-center justify-center text-center
              `, children: l }) }),
        ...i
      },
      ...s
    }
  );
}
function km({
  className: e,
  day: t,
  modifiers: n,
  ...r
}) {
  const o = er(), a = g.useRef(null);
  return g.useEffect(() => {
    var i;
    n.focused && ((i = a.current) == null || i.focus());
  }, [
    n.focused
  ]), /* @__PURE__ */ N(
    Ys,
    {
      ref: a,
      variant: "ghost",
      size: "icon",
      "data-day": t.date.toLocaleDateString(),
      "data-selected-single": n.selected && !n.range_start && !n.range_end && !n.range_middle,
      "data-range-start": n.range_start,
      "data-range-end": n.range_end,
      "data-range-middle": n.range_middle,
      className: Y(
        `
          flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1
          leading-none font-normal
          group-data-[focused=true]/day:relative
          group-data-[focused=true]/day:z-10
          group-data-[focused=true]/day:border-ring
          group-data-[focused=true]/day:ring-[3px]
          group-data-[focused=true]/day:ring-ring/50
          data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md
          data-[range-end=true]:bg-primary
          data-[range-end=true]:text-primary-foreground
          data-[range-middle=true]:rounded-none
          data-[range-middle=true]:bg-accent
          data-[range-middle=true]:text-accent-foreground
          data-[range-start=true]:rounded-md
          data-[range-start=true]:rounded-l-md
          data-[range-start=true]:bg-primary
          data-[range-start=true]:text-primary-foreground
          data-[selected-single=true]:bg-primary
          data-[selected-single=true]:text-primary-foreground
          dark:hover:text-accent-foreground
          [&>span]:text-xs [&>span]:opacity-70
        `,
        o.day,
        e
      ),
      ...r
    }
  );
}
var Mm = "Label", Na = g.forwardRef((e, t) => /* @__PURE__ */ N(
  Se.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Na.displayName = Mm;
var Om = Na;
function _m({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ N(
    Om,
    {
      "data-slot": "label",
      className: Y(
        `
          flex items-center gap-2 text-sm leading-none font-medium select-none
          group-data-[disabled=true]:pointer-events-none
          group-data-[disabled=true]:opacity-50
          peer-disabled:cursor-not-allowed peer-disabled:opacity-50
        `,
        e
      ),
      ...t
    }
  );
}
export {
  Ys as Button,
  Rm as Calendar,
  km as CalendarDayButton,
  Pm as ImageFile,
  $s as Input,
  _m as Label,
  Nm as Popover,
  Tm as PopoverAnchor,
  Wm as PopoverContent,
  Am as PopoverTrigger,
  Wn as buttonVariants,
  Y as cn
};
