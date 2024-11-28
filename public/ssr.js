import { createI18n, useI18n } from "vue-i18n";
import { mergeProps, useSSRContext, createSSRApp, h as h$1 } from "vue";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import { ssrRenderAttrs } from "vue/server-renderer";
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t4) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var r2 = arguments[e2];
      for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (t4[n2] = r2[n2]);
    }
    return t4;
  }, t.apply(this, arguments);
}
var e = String.prototype.replace, r = /%20/g, n = "RFC3986", o = { default: n, formatters: { RFC1738: function(t4) {
  return e.call(t4, r, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: n }, i = Object.prototype.hasOwnProperty, u = Array.isArray, a = function() {
  for (var t4 = [], e2 = 0; e2 < 256; ++e2) t4.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t4;
}(), s = function(t4, e2) {
  for (var r2 = e2 && e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t4.length; ++n2) void 0 !== t4[n2] && (r2[n2] = t4[n2]);
  return r2;
}, f = { arrayToObject: s, assign: function(t4, e2) {
  return Object.keys(e2).reduce(function(t5, r2) {
    return t5[r2] = e2[r2], t5;
  }, t4);
}, combine: function(t4, e2) {
  return [].concat(t4, e2);
}, compact: function(t4) {
  for (var e2 = [{ obj: { o: t4 }, prop: "o" }], r2 = [], n2 = 0; n2 < e2.length; ++n2) for (var o2 = e2[n2], i2 = o2.obj[o2.prop], a2 = Object.keys(i2), s2 = 0; s2 < a2.length; ++s2) {
    var f2 = a2[s2], c2 = i2[f2];
    "object" == typeof c2 && null !== c2 && -1 === r2.indexOf(c2) && (e2.push({ obj: i2, prop: f2 }), r2.push(c2));
  }
  return function(t5) {
    for (; t5.length > 1; ) {
      var e3 = t5.pop(), r3 = e3.obj[e3.prop];
      if (u(r3)) {
        for (var n3 = [], o3 = 0; o3 < r3.length; ++o3) void 0 !== r3[o3] && n3.push(r3[o3]);
        e3.obj[e3.prop] = n3;
      }
    }
  }(e2), t4;
}, decode: function(t4, e2, r2) {
  var n2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === r2) return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t5) {
    return n2;
  }
}, encode: function(t4, e2, r2, n2, i2) {
  if (0 === t4.length) return t4;
  var u2 = t4;
  if ("symbol" == typeof t4 ? u2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (u2 = String(t4)), "iso-8859-1" === r2) return escape(u2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
    return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
  });
  for (var s2 = "", f2 = 0; f2 < u2.length; ++f2) {
    var c2 = u2.charCodeAt(f2);
    45 === c2 || 46 === c2 || 95 === c2 || 126 === c2 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || i2 === o.RFC1738 && (40 === c2 || 41 === c2) ? s2 += u2.charAt(f2) : c2 < 128 ? s2 += a[c2] : c2 < 2048 ? s2 += a[192 | c2 >> 6] + a[128 | 63 & c2] : c2 < 55296 || c2 >= 57344 ? s2 += a[224 | c2 >> 12] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2] : (c2 = 65536 + ((1023 & c2) << 10 | 1023 & u2.charCodeAt(f2 += 1)), s2 += a[240 | c2 >> 18] + a[128 | c2 >> 12 & 63] + a[128 | c2 >> 6 & 63] + a[128 | 63 & c2]);
  }
  return s2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, e2) {
  if (u(t4)) {
    for (var r2 = [], n2 = 0; n2 < t4.length; n2 += 1) r2.push(e2(t4[n2]));
    return r2;
  }
  return e2(t4);
}, merge: function t2(e2, r2, n2) {
  if (!r2) return e2;
  if ("object" != typeof r2) {
    if (u(e2)) e2.push(r2);
    else {
      if (!e2 || "object" != typeof e2) return [e2, r2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, r2)) && (e2[r2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2) return [e2].concat(r2);
  var o2 = e2;
  return u(e2) && !u(r2) && (o2 = s(e2, n2)), u(e2) && u(r2) ? (r2.forEach(function(r3, o3) {
    if (i.call(e2, o3)) {
      var u2 = e2[o3];
      u2 && "object" == typeof u2 && r3 && "object" == typeof r3 ? e2[o3] = t2(u2, r3, n2) : e2.push(r3);
    } else e2[o3] = r3;
  }), e2) : Object.keys(r2).reduce(function(e3, o3) {
    var u2 = r2[o3];
    return e3[o3] = i.call(e3, o3) ? t2(e3[o3], u2, n2) : u2, e3;
  }, o2);
} }, c = Object.prototype.hasOwnProperty, l = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, e2) {
  return t4 + "[" + e2 + "]";
}, repeat: function(t4) {
  return t4;
} }, p = Array.isArray, h = String.prototype.split, y = Array.prototype.push, d = function(t4, e2) {
  y.apply(t4, p(e2) ? e2 : [e2]);
}, b = Date.prototype.toISOString, g = o.default, m = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: f.encode, encodeValuesOnly: false, format: g, formatter: o.formatters[g], indices: false, serializeDate: function(t4) {
  return b.call(t4);
}, skipNulls: false, strictNullHandling: false }, v = function t3(e2, r2, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, v2) {
  var j2, w2 = e2;
  if ("function" == typeof a2 ? w2 = a2(r2, w2) : w2 instanceof Date ? w2 = l2(w2) : "comma" === n2 && p(w2) && (w2 = f.maybeMap(w2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === w2) {
    if (o2) return u2 && !g2 ? u2(r2, m.encoder, v2, "key", y2) : r2;
    w2 = "";
  }
  if ("string" == typeof (j2 = w2) || "number" == typeof j2 || "boolean" == typeof j2 || "symbol" == typeof j2 || "bigint" == typeof j2 || f.isBuffer(w2)) {
    if (u2) {
      var $2 = g2 ? r2 : u2(r2, m.encoder, v2, "key", y2);
      if ("comma" === n2 && g2) {
        for (var O2 = h.call(String(w2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2) E2 += (0 === S2 ? "" : ",") + b2(u2(O2[S2], m.encoder, v2, "value", y2));
        return [b2($2) + "=" + E2];
      }
      return [b2($2) + "=" + b2(u2(w2, m.encoder, v2, "value", y2))];
    }
    return [b2(r2) + "=" + b2(String(w2))];
  }
  var R2, x2 = [];
  if (void 0 === w2) return x2;
  if ("comma" === n2 && p(w2)) R2 = [{ value: w2.length > 0 ? w2.join(",") || null : void 0 }];
  else if (p(a2)) R2 = a2;
  else {
    var N2 = Object.keys(w2);
    R2 = s2 ? N2.sort(s2) : N2;
  }
  for (var T2 = 0; T2 < R2.length; ++T2) {
    var k2 = R2[T2], C = "object" == typeof k2 && void 0 !== k2.value ? k2.value : w2[k2];
    if (!i2 || null !== C) {
      var _ = p(w2) ? "function" == typeof n2 ? n2(r2, k2) : r2 : r2 + (c2 ? "." + k2 : "[" + k2 + "]");
      d(x2, t3(C, _, n2, o2, i2, u2, a2, s2, c2, l2, y2, b2, g2, v2));
    }
  }
  return x2;
}, j = Object.prototype.hasOwnProperty, w = Array.isArray, $ = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: f.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, E = function(t4, e2) {
  return t4 && "string" == typeof t4 && e2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, S = function(t4, e2, r2, n2) {
  if (t4) {
    var o2 = r2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = r2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, s2 = [];
    if (a2) {
      if (!r2.plainObjects && j.call(Object.prototype, a2) && !r2.allowPrototypes) return;
      s2.push(a2);
    }
    for (var f2 = 0; r2.depth > 0 && null !== (u2 = i2.exec(o2)) && f2 < r2.depth; ) {
      if (f2 += 1, !r2.plainObjects && j.call(Object.prototype, u2[1].slice(1, -1)) && !r2.allowPrototypes) return;
      s2.push(u2[1]);
    }
    return u2 && s2.push("[" + o2.slice(u2.index) + "]"), function(t5, e3, r3, n3) {
      for (var o3 = n3 ? e3 : E(e3, r3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t5[i3];
        if ("[]" === a3 && r3.parseArrays) u3 = [].concat(o3);
        else {
          u3 = r3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var s3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, f3 = parseInt(s3, 10);
          r3.parseArrays || "" !== s3 ? !isNaN(f3) && a3 !== s3 && String(f3) === s3 && f3 >= 0 && r3.parseArrays && f3 <= r3.arrayLimit ? (u3 = [])[f3] = o3 : "__proto__" !== s3 && (u3[s3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(s2, e2, r2, n2);
  }
}, R = function(t4, e2) {
  var r2 = /* @__PURE__ */ function(t5) {
    return $;
  }();
  if ("" === t4 || null == t4) return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t4 ? function(t5, e3) {
    var r3, n3 = {}, o3 = (e3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit), i3 = -1, u3 = e3.charset;
    if (e3.charsetSentinel) for (r3 = 0; r3 < o3.length; ++r3) 0 === o3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[r3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[r3] && (u3 = "iso-8859-1"), i3 = r3, r3 = o3.length);
    for (r3 = 0; r3 < o3.length; ++r3) if (r3 !== i3) {
      var a3, s3, c2 = o3[r3], l2 = c2.indexOf("]="), p2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
      -1 === p2 ? (a3 = e3.decoder(c2, $.decoder, u3, "key"), s3 = e3.strictNullHandling ? null : "") : (a3 = e3.decoder(c2.slice(0, p2), $.decoder, u3, "key"), s3 = f.maybeMap(E(c2.slice(p2 + 1), e3), function(t6) {
        return e3.decoder(t6, $.decoder, u3, "value");
      })), s3 && e3.interpretNumericEntities && "iso-8859-1" === u3 && (s3 = O(s3)), c2.indexOf("[]=") > -1 && (s3 = w(s3) ? [s3] : s3), n3[a3] = j.call(n3, a3) ? f.combine(n3[a3], s3) : s3;
    }
    return n3;
  }(t4, r2) : t4, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], s2 = S(a2, n2[a2], r2, "string" == typeof t4);
    o2 = f.merge(o2, s2, r2);
  }
  return f.compact(o2);
};
class x {
  constructor(t4, e2, r2) {
    var n2, o2;
    this.name = t4, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (o2 = e2.wheres) ? o2 : {}, this.config = r2;
  }
  get template() {
    const t4 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t4 ? "/" : t4;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t4, e2;
    return null != (t4 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t5) => ({ name: t5.replace(/{|\??}/g, ""), required: !/\?}$/.test(t5) }))) ? t4 : [];
  }
  matchesUrl(t4) {
    if (!this.definition.methods.includes("GET")) return false;
    const e2 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (t5, e3, r3, n3) => {
      var o3;
      const i2 = `(?<${r3}>${(null == (o3 = this.wheres[r3]) ? void 0 : o3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i2})?` : `${e3}${i2}`;
    }).replace(/^\w+:\/\//, ""), [r2, n2] = t4.replace(/^\w+:\/\//, "").split("?"), o2 = new RegExp(`^${e2}/?$`).exec(decodeURI(r2));
    if (o2) {
      for (const t5 in o2.groups) o2.groups[t5] = "string" == typeof o2.groups[t5] ? decodeURIComponent(o2.groups[t5]) : o2.groups[t5];
      return { params: o2.groups, query: R(n2) };
    }
    return false;
  }
  compile(t4) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, r2, n2) => {
      var o2, i2;
      if (!n2 && [null, void 0].includes(t4[r2])) throw new Error(`Ziggy error: '${r2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[r2] && !new RegExp(`^${n2 ? `(${this.wheres[r2]})?` : this.wheres[r2]}$`).test(null != (i2 = t4[r2]) ? i2 : "")) throw new Error(`Ziggy error: '${r2}' parameter '${t4[r2]}' does not match required format '${this.wheres[r2]}' for route '${this.name}'.`);
      return encodeURI(null != (o2 = t4[r2]) ? o2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class N extends String {
  constructor(e2, r2, n2 = true, o2) {
    if (super(), this.t = null != o2 ? o2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2]) throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new x(e2, this.t.routes[e2], this.t), this.u = this.l(r2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t4) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t4)).filter((t4) => "_query" !== t4).reduce((e3, r2) => t({}, e3, { [r2]: this.u[r2] }), {});
    return this.i.compile(this.u) + function(t4, e3) {
      var r2, n2 = t4, i2 = function(t5) {
        if (!t5) return m;
        if (null != t5.encoder && "function" != typeof t5.encoder) throw new TypeError("Encoder has to be a function.");
        var e4 = t5.charset || m.charset;
        if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r3 = o.default;
        if (void 0 !== t5.format) {
          if (!c.call(o.formatters, t5.format)) throw new TypeError("Unknown format option provided.");
          r3 = t5.format;
        }
        var n3 = o.formatters[r3], i3 = m.filter;
        return ("function" == typeof t5.filter || p(t5.filter)) && (i3 = t5.filter), { addQueryPrefix: "boolean" == typeof t5.addQueryPrefix ? t5.addQueryPrefix : m.addQueryPrefix, allowDots: void 0 === t5.allowDots ? m.allowDots : !!t5.allowDots, charset: e4, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : m.charsetSentinel, delimiter: void 0 === t5.delimiter ? m.delimiter : t5.delimiter, encode: "boolean" == typeof t5.encode ? t5.encode : m.encode, encoder: "function" == typeof t5.encoder ? t5.encoder : m.encoder, encodeValuesOnly: "boolean" == typeof t5.encodeValuesOnly ? t5.encodeValuesOnly : m.encodeValuesOnly, filter: i3, format: r3, formatter: n3, serializeDate: "function" == typeof t5.serializeDate ? t5.serializeDate : m.serializeDate, skipNulls: "boolean" == typeof t5.skipNulls ? t5.skipNulls : m.skipNulls, sort: "function" == typeof t5.sort ? t5.sort : null, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : m.strictNullHandling };
      }(e3);
      "function" == typeof i2.filter ? n2 = (0, i2.filter)("", n2) : p(i2.filter) && (r2 = i2.filter);
      var u2 = [];
      if ("object" != typeof n2 || null === n2) return "";
      var a2 = l[e3 && e3.arrayFormat in l ? e3.arrayFormat : e3 && "indices" in e3 ? e3.indices ? "indices" : "repeat" : "indices"];
      r2 || (r2 = Object.keys(n2)), i2.sort && r2.sort(i2.sort);
      for (var s2 = 0; s2 < r2.length; ++s2) {
        var f2 = r2[s2];
        i2.skipNulls && null === n2[f2] || d(u2, v(n2[f2], f2, a2, i2.strictNullHandling, i2.skipNulls, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset));
      }
      var h2 = u2.join(i2.delimiter), y2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (y2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? y2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t4, e3) => "boolean" == typeof t4 ? Number(t4) : e3(t4) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.m();
    let r2 = {};
    const [n2, o2] = Object.entries(this.t.routes).find(([t4, n3]) => r2 = new x(t4, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, r2, { route: o2 });
  }
  m() {
    const { host: t4, pathname: e2, search: r2 } = this.h();
    return (this.t.absolute ? t4 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r2;
  }
  current(e2, r2) {
    const { name: n2, params: o2, query: i2, route: u2 } = this.p();
    if (!e2) return n2;
    const a2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(r2) || !a2) return a2;
    const s2 = new x(n2, u2, this.t);
    r2 = this.l(r2, s2);
    const f2 = t({}, o2, i2);
    if (Object.values(r2).every((t4) => !t4) && !Object.values(f2).some((t4) => void 0 !== t4)) return true;
    const c2 = (t4, e3) => Object.entries(t4).every(([t5, r3]) => Array.isArray(r3) && Array.isArray(e3[t5]) ? r3.every((r4) => e3[t5].includes(r4)) : "object" == typeof r3 && "object" == typeof e3[t5] && null !== r3 && null !== e3[t5] ? c2(r3, e3[t5]) : e3[t5] == r3);
    return c2(r2, f2);
  }
  h() {
    var t4, e2, r2, n2, o2, i2;
    const { host: u2 = "", pathname: a2 = "", search: s2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t4 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t4 : u2, pathname: null != (r2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? r2 : a2, search: null != (o2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? o2 : s2 };
  }
  get params() {
    const { params: e2, query: r2 } = this.p();
    return t({}, e2, r2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t4) {
    return Object.keys(this.t.routes).includes(t4);
  }
  l(e2 = {}, r2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = r2.parameterSegments.filter(({ name: t4 }) => !this.t.defaults[t4]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, r3, o2) => t({}, e3, n2[o2] ? { [n2[o2].name]: r3 } : "object" == typeof r3 ? r3 : { [r3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(r2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.v(r2), this.j(e2, r2));
  }
  v(e2) {
    return e2.parameterSegments.filter(({ name: t4 }) => this.t.defaults[t4]).reduce((e3, { name: r2 }, n2) => t({}, e3, { [r2]: this.t.defaults[r2] }), {});
  }
  j(e2, { bindings: r2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [o2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t4 }) => t4 === o2)) return t({}, e3, { [o2]: i2 });
      if (!i2.hasOwnProperty(r2[o2])) {
        if (!i2.hasOwnProperty("id")) throw new Error(`Ziggy error: object passed as '${o2}' parameter is missing route model binding key '${r2[o2]}'.`);
        r2[o2] = "id";
      }
      return t({}, e3, { [o2]: i2[r2[o2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function T(t4, e2, r2, n2) {
  const o2 = new N(t4, e2, r2, n2);
  return t4 ? o2.toString() : o2;
}
const k = { install(t4, e2) {
  const r2 = (t5, r3, n2, o2 = e2) => T(t5, r3, n2, o2);
  parseInt(t4.version) > 2 ? (t4.config.globalProperties.route = r2, t4.provide("route", r2)) : t4.mixin({ methods: { route: r2 } });
} };
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const Home = "Home";
const Items = "Items";
const Dashboard = "Dashboard";
const Settings = "Settings";
const People = "People";
const Checkin = "Checkin";
const Checkout = "Checkout";
const Checkins = "Checkins";
const Checkouts = "Checkouts";
const Category = "Category";
const add = "add";
const added = "added";
const update = "update";
const created = "created";
const updated = "updated";
const deleted = "deleted";
const restored = "restored";
const Next = "Next";
const Previous = "Previous";
const Customers = "Customers";
const Stock = "Stock";
const Profile = "Profile";
const Import = "Import";
const Categories = "Categories";
const List = "List";
const Add = "Add";
const Code = "Code";
const Name = "Name";
const Quantity = "Quantity";
const Unit = "Unit";
const Actions = "Actions";
const Search = "Search";
const Reset = "Reset";
const Filter = "Filter";
const Trashed = "Trashed";
const Symbology = "Symbology";
const Photo = "Photo";
const Reference = "Reference";
const Supplier = "Supplier";
const Attachment = "Attachment";
const Note = "Note";
const Customer = "Customer";
const Company = "Company";
const Email = "Email";
const Phone = "Phone";
const Tel = "Tel";
const Suppliers = "Suppliers";
const Users = "Users";
const Roles = "Roles";
const Admin = "Admin";
const Staff = "Staff";
const Role = "Role";
const All = "All";
const admin = "admin";
const staff = "staff";
const Password = "Password";
const Permissions = "Permissions";
const Language = "Language";
const Select = "Select";
const Preview = "Preview";
const Reports = "Reports";
const Cancel = "Cancel";
const For = "For";
const Item = "Item";
const Confirm = "Confirm";
const Enable = "Enable";
const Logo = "Logo";
const Save = "Save";
const Description = "Description";
const By = "By";
const Remove = "Remove";
const Close = "Close";
const Properties = "Properties";
const Disable = "Disable";
const Delete = "Delete";
const Download = "Download";
const attachment = "attachment";
const Attachments = "Attachments";
const en = {
  Home,
  Items,
  Dashboard,
  Settings,
  People,
  Checkin,
  Checkout,
  Checkins,
  Checkouts,
  Category,
  "Add New Category": "Add New Category",
  "Edit Category": "Edit Category",
  add,
  added,
  update,
  created,
  updated,
  deleted,
  restored,
  "permanently deleted": "permanently deleted",
  Next,
  Previous,
  "View notifications": "View notifications",
  "Manage Items": "Manage Items",
  "Manage Checkins": "Manage Checkins",
  "Manage Checkouts": "Manage Checkouts",
  "Manage Customers": "Manage Customers",
  "Manage Suppliers": "Manage Suppliers",
  "Manage Categories": "Manage Categories",
  "Manage Users": "Manage Users",
  "Welcome to": "Welcome to",
  "management portal": "management portal",
  "Last 30 days checkins and checkouts with total items & customers followed by quick links.": "Last 30 days checkins and checkouts with total items & customers followed by quick links.",
  "Last 30 days": "Last 30 days",
  "Total Checkins": "Total Checkins",
  "Total Checkouts": "Total Checkouts",
  Customers,
  "Items are the products to track": "Items are the products to track",
  "Manage your items categories": "Manage your items categories",
  "Manage your incoming inventory/stock": "Manage your incoming inventory/stock",
  "Manage your outgoing inventory/stock": "Manage your outgoing inventory/stock",
  "List Items": "List Items",
  "Add New Item": "Add New Item",
  "Import Items": "Import Items",
  Stock,
  "List Checkins": "List Checkins",
  "Add New Checkin": "Add New Checkin",
  "List Checkouts": "List Checkouts",
  "Add New Checkout": "Add New Checkout",
  "List Customers": "List Customers",
  "Add New Customer": "Add New Customer",
  "Import Customer": "Import Customer",
  "List Suppliers": "List Suppliers",
  "Add New Supplier": "Add New Supplier",
  "Import Supplier": "Import Supplier",
  "List Users": "List Users",
  "Add New User": "Add New User",
  "Manage User Roles": "Manage User Roles",
  "System Settings": "System Settings",
  "Import Category": "Import Category",
  "List User Roles": "List User Roles",
  "Add New User Role": "Add New User Role",
  "Manage Account": "Manage Account",
  Profile,
  "Log Out": "Log Out",
  "Import Customers": "Import Customers",
  "Import Suppliers": "Import Suppliers",
  "Import Categories": "Import Categories",
  Import,
  Categories,
  List,
  Add,
  Code,
  Name,
  Quantity,
  Unit,
  "Alert Quantity": "Alert Quantity",
  Actions,
  Search,
  Reset,
  Filter,
  Trashed,
  "Not Trashed": "Not Trashed",
  "With Trashed": "With Trashed",
  "Only Trashed": "Only Trashed",
  "Edit Item": "Edit Item",
  Symbology,
  Photo,
  "Excel File": "Excel File",
  "Select file": "Select file",
  "or drag and drop": "or drag and drop",
  "Excel file should have name, code, symbology, category_code, quantity, unit, alert_quantity and photo columns.": "Excel file should have name, code, symbology, category_code, quantity, unit, alert_quantity and photo columns.",
  "The name, code, symbology and category_code are required.": "The name, code, symbology and category_code are required.",
  "Symbology can be one of CODE128, CODE39, EAN8, EAN13 or UPC.": "Symbology can be one of CODE128, CODE39, EAN8, EAN13 or UPC.",
  "Please upload the excel file to import records.": "Please upload the excel file to import records.",
  "Export Items": "Export Items",
  "Date": "Date",
  Reference,
  Supplier,
  "Start Date": "Start Date",
  "End Date": "End Date",
  Attachment,
  "Please scan barcode or search to add item": "Please scan barcode or search to add item",
  Note,
  Customer,
  Company,
  Email,
  Phone,
  Tel,
  "Custom Field 1": "Custom Field 1",
  "Custom Field 2": "Custom Field 2",
  "Items from Excel": "Items from Excel",
  "Excel file should have name, company, phone, email, cf1 and cf2 columns.": "Excel file should have name, company, phone, email, cf1 and cf2 columns.",
  "The name and phone or email are required.": "The name and phone or email are required.",
  "Export Customers": "Export Customers",
  Suppliers,
  Users,
  Roles,
  "View All": "View All",
  "Edit All": "Edit All",
  Admin,
  Staff,
  Role,
  All,
  admin,
  staff,
  Password,
  "Confirm Password": "Confirm Password",
  Permissions,
  "Can view all records": "Can view all records",
  "Can edit all records": "Can edit all records",
  "Site Name": "Site Name",
  Language,
  "Date & Number Locale": "Date & Number Locale",
  "Rows per page": "Rows per page",
  "Label for customer field 1": "Label for customer field 1",
  "Label for customer field 2": "Label for customer field 2",
  "Label for supplier field 1": "Label for supplier field 1",
  "Label for supplier field 2": "Label for supplier field 2",
  "Enable over selling": "Enable over selling",
  "Please fill the form below to update settings.": "Please fill the form below to update settings.",
  Select,
  "Number": "Number",
  "Date Time": "Date Time",
  Preview,
  "Number and Date Format": "Number and Date Format",
  "Excel file should have name and code columns both required.": "Excel file should have name and code columns both required.",
  "Export Categories": "Export Categories",
  "List Roles": "List Roles",
  "Add New Role": "Add New Role",
  "Edit Role": "Edit Role",
  Reports,
  "Activity Logs": "Activity Logs",
  "Application Alerts": "Application Alerts",
  "Items reached alert quantity": "Items reached alert quantity",
  "Items need to be reorder": "Items need to be reorder",
  "Please confirm that you would like to delete the record?": "Please confirm that you would like to delete the record?",
  Cancel,
  "Yes, delete": "Yes, delete",
  "Yes, restore": "Yes, restore",
  "Move to Trash": "Move to Trash",
  "Delete Permanently": "Delete Permanently",
  "Delete bulk records": "Delete bulk records",
  "This action will delete the data permanently.": "This action will delete the data permanently.",
  "Please confirm that you would like to delete the records?": "Please confirm that you would like to delete the records?",
  "Checkin Details": "Checkin Details",
  "Checkout Details": "Checkout Details",
  "Created at": "Created at",
  For,
  Item,
  Confirm,
  "Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.": "Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.",
  "Log Out Other Browser Sessions": "Log Out Other Browser Sessions",
  "You have not enabled two factor authentication.": "You have not enabled two factor authentication.",
  "When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.": "When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application.",
  "Two Factor Authentication": "Two Factor Authentication",
  "Add additional security to your account using two factor authentication.": "Add additional security to your account using two factor authentication.",
  Enable,
  "Update Password": "Update Password",
  "Ensure your account is using a long, random password to stay secure.": "Ensure your account is using a long, random password to stay secure.",
  Logo,
  "Select Logo": "Select Logo",
  Save,
  "Saved.": "Saved.",
  Description,
  "Activity Log": "Activity Log",
  "There is no data to display.": "There is no data to display.",
  By,
  "Edit Checkin": "Edit Checkin",
  Remove,
  Close,
  "Alert on": "Alert on",
  "Low Stock": "Low Stock",
  "Subject Id": "Subject Id",
  "Subject Type": "Subject Type",
  Properties,
  "Profile Information": "Profile Information",
  "Update your account's profile information and email address.": "Update your account's profile information and email address.",
  "Select A New Photo": "Select A New Photo",
  "Remove Photo": "Remove Photo",
  "Show Recovery Codes": "Show Recovery Codes",
  "You have enabled two factor authentication.": "You have enabled two factor authentication.",
  "Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.": "Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.",
  "Regenerate Recovery Codes": "Regenerate Recovery Codes",
  Disable,
  "Finish enabling two factor authentication.": "Finish enabling two factor authentication.",
  "To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code.": "To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code.",
  "Setup Key": "Setup Key",
  "If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.": "If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.",
  "Last active": "Last active",
  "This device": "This device",
  "Browser Sessions": "Browser Sessions",
  "Manage and log out your active sessions on other browsers and devices.": "Manage and log out your active sessions on other browsers and devices.",
  "Email Verification": "Email Verification",
  "Two-factor Confirmation": "Two-factor Confirmation",
  "Secure Area": "Secure Area",
  "Forgot Password": "Forgot Password",
  "Edit Profile": "Edit Profile",
  "Resend Verification Email": "Resend Verification Email",
  "A new verification link has been sent to the email address you provided in your profile settings.": "A new verification link has been sent to the email address you provided in your profile settings.",
  "Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.": "Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.",
  "Please confirm access to your account by entering the authentication code provided by your authenticator application.": "Please confirm access to your account by entering the authentication code provided by your authenticator application.",
  "Please confirm access to your account by entering one of your emergency recovery codes.": "Please confirm access to your account by entering one of your emergency recovery codes.",
  "Use an authentication code": "Use an authentication code",
  "Use a recovery code": "Use a recovery code",
  "Reset Password": "Reset Password",
  "Log in": "Log in",
  "Remember me": "Remember me",
  "Forgot your password?": "Forgot your password?",
  "Email Password Reset Link": "Email Password Reset Link",
  "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.": "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.",
  "This is a secure area of the application. Please confirm your password before continuing.": "This is a secure area of the application. Please confirm your password before continuing.",
  "Scan Barcode OR Search...": "Scan Barcode OR Search...",
  "This is computer generated document, no signature required.": "This is computer generated document, no signature required.",
  Delete,
  "files selected": "files selected",
  "file selected": "file selected",
  Download,
  "Edit Checkout": "Edit Checkout",
  attachment,
  Attachments,
  "Attachment deleted!": "Attachment deleted!",
  "Please type to search": "Please type to search",
  "Searching for results": "Searching for results",
  "Unable to delete attachment!": "Unable to delete attachment!",
  "View {x}": "View {x}",
  "Create {x}": "Create {x}",
  "Update {x}": "Update {x}",
  "Delete {x}": "Delete {x}",
  "Restore {x}": "Restore {x}",
  "Import {x}": "Import {x}",
  "{record} has been {action}.": "{record} has been {action}.",
  "{record} has permanently deleted.": "{record} has permanently deleted.",
  "{count} {records} record(s) has imported or updated.": "{count} {records} record(s) has imported or updated.",
  "List Categories": "List Categories",
  "Please review the result below": "Please review the result below",
  "Please fill the form below to {x} item.": "Please fill the form below to {x} item.",
  "Showing from {from} to {to} of total {total} records": "Showing from {from} to {to} of total {total} records",
  "The task has completed, {count} deleted and {failed} failed.": "The task has completed, {count} deleted and {failed} failed.",
  "{name} do not have {quantity} in stock, available quantity {available}.": "{name} do not have {quantity} in stock, available quantity {available}."
};
const instruction = "App dropdown uses the below available array.";
const available = [
  {
    value: "cn",
    label: "Chinese",
    flag: "CN"
  },
  {
    value: "en",
    label: "English",
    flag: "US"
  },
  {
    value: "es",
    label: "Spanish",
    flag: "ES"
  },
  {
    value: "pt",
    label: "Portuguese",
    flag: "PT"
  },
  {
    value: "tr",
    label: "Turkish",
    flag: "TR"
  }
];
const languages = {
  instruction,
  available
};
const messages = { en };
const LANGUAGES = languages.available;
languages.available.map((l2) => l2.value).filter((l2) => l2 != "en");
const i18n = createI18n({
  messages,
  legacy: false,
  missingWarn: true,
  mode: "composition",
  fallbackWarn: false,
  fallbackLocale: "en",
  warnHtmlMessage: false,
  locale: window.Locale || "en",
  missing: (locale, key) => {
    console.log(key, locale);
  }
});
const mixin = {
  computed: {
    $isAdmin() {
      return this.$page.props.auth.user && this.$page.props.auth.user.roles.find((r2) => r2.name == "admin");
    },
    $company() {
      return this.$page.props.company;
    },
    $settings() {
      return this.$page.props.settings;
    }
  },
  methods: {
    $capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    $number(amount, locale, options) {
      if (!amount) {
        amount = 0;
      }
      let formatted = parseFloat(amount);
      if (!locale || locale.length != 2 && locale.length != 5) {
        locale = this.$page.props.settings.default_locale;
      }
      if (!options) {
        options = {
          minimumFractionDigits: this.$page.props.settings.fraction,
          maximumFractionDigits: this.$page.props.settings.fraction
        };
      }
      return new Intl.NumberFormat(locale, options).format(formatted);
    },
    $currency(amount, locale, options) {
      if (!amount) {
        amount = 0;
      }
      let formatted = parseFloat(amount);
      if (!locale || locale.length != 2 && locale.length != 5) {
        locale = this.$page.props.settings.default_locale;
      }
      if ((options == null ? void 0 : options.currency) && options.currency.length != 3) {
        options.currency = this.$page.props.settings.currency_code;
      }
      if (!options) {
        options = {
          style: "currency",
          //   signDisplay: 'always',
          currencyDisplay: "symbol",
          // currencySign: 'accounting',
          currency: this.$page.props.settings.currency_code,
          minimumFractionDigits: this.$page.props.settings.fraction
        };
      }
      return new Intl.NumberFormat(locale, options).format(formatted);
    },
    $parseNumber(amount, locale) {
      if (!locale || locale.length != 2 && locale.length != 5) {
        locale = this.$page.props.settings.default_locale;
      }
      var thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(new RegExp("\\p{Number}", "gu"), "");
      var decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(new RegExp("\\p{Number}", "gu"), "");
      return parseFloat(amount.replace(new RegExp("\\" + thousandSeparator, "g"), "").replace(new RegExp("\\" + decimalSeparator), "."));
    },
    $date(date, locale, style) {
      let formatted = new Date(Date.parse(date));
      if (!locale || locale.length != 2 && locale.length != 5) {
        locale = this.$page.props.settings.default_locale;
      }
      try {
        return formatted.toLocaleString(locale, { dateStyle: style ? style : "medium" });
      } catch (err) {
        return formatted.toLocaleString("en-US", { dateStyle: style ? style : "medium" });
      }
    },
    $formatJSDate(date) {
      var d2 = new Date(date), month = "" + (d2.getMonth() + 1), day = "" + d2.getDate(), year = d2.getFullYear();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return [year, month, day].join("-");
    },
    $dateDay(date, locale) {
      let formatted = new Date(Date.parse(date));
      if (!locale || locale.length != 2 && locale.length != 5) {
        locale = this.$page.props.settings.default_locale;
      }
      try {
        return formatted.toLocaleString(locale, { day: "numeric", weekday: "short" });
      } catch (err) {
        return formatted.toLocaleString("en-US", { day: "numeric", weekday: "short" });
      }
    },
    $month(month, locale, style = "short") {
      let formatted = new Date(Date.parse(month));
      if (!locale || locale.length != 2 && locale.length != 5) {
        locale = this.$page.props.settings.default_locale;
      }
      try {
        return formatted.toLocaleString(locale, { month: style, year: "2-digit" });
      } catch (err) {
        return formatted.toLocaleString("en-US", { month: style, year: "2-digit" });
      }
    },
    $monthName(month, locale, style = "long") {
      let formatted = new Date(Date.parse(month));
      if (!locale || locale.length != 2 && locale.length != 5) {
        locale = this.$page.props.settings.default_locale;
      }
      try {
        return formatted.toLocaleString(locale, { month: style });
      } catch (err) {
        return formatted.toLocaleString("en-US", { month: style });
      }
    },
    $time(date, locale, style) {
      let formatted = new Date(Date.parse(date));
      if (!locale || locale.length != 2 && locale.length != 5) {
        locale = this.$page.props.settings.default_locale;
      }
      try {
        return formatted.toLocaleString(locale, { timeStyle: "short", hour12: this.$page.props.settings.hour12 == 1 });
      } catch (err) {
        return formatted.toLocaleString("en-US", { timeStyle: "short", hour12: this.$page.props.settings.hour12 == 1 });
      }
    },
    $datetime(datetime, locale, style) {
      if (!datetime) {
        return "";
      }
      let formatted = new Date(Date.parse(datetime));
      if (!locale || locale.length != 2 && locale.length != 5) {
        locale = this.$page.props.settings.default_locale;
      }
      try {
        return formatted.toLocaleString(locale, {
          timeStyle: "short",
          dateStyle: style ? style : "medium",
          hour12: this.$page.props.settings.hour12 == 1
        });
      } catch (err) {
        return formatted.toLocaleString("en-US", {
          timeStyle: "short",
          dateStyle: style ? style : "medium",
          hour12: this.$page.props.settings.hour12 == 1
        });
      }
    },
    $can(permissions) {
      if (this.$page.props.auth.user && this.$page.props.auth.user.roles.find((r2) => r2.name == "admin")) {
        return true;
      }
      let allow = false;
      if (!Array.isArray(permissions)) {
        permissions = [permissions];
      }
      if (permissions && permissions.length > 0) {
        if (permissions.includes("all")) {
          allow = true;
        } else {
          permissions.map((p2) => {
            if (this.$page.props.auth.user && this.$page.props.auth.user.all_permissions && this.$page.props.auth.user.all_permissions.includes(p2)) {
              allow = true;
            }
          });
        }
      }
      return allow;
    }
  }
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  props: ["name", "size"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.name == "link") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"></path></svg>`);
  } else if ($props.name == "home") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`);
  } else if ($props.name == "cog") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, _attrs))}><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>`);
  } else if ($props.name == "plus") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path></svg>`);
  } else if ($props.name == "cart") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>`);
  } else if ($props.name == "bag") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"></path></svg>`);
  } else if ($props.name == "user") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>`);
  } else if ($props.name == "add-user") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      class: "h-5 w-5",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, _attrs))}><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>`);
  } else if ($props.name == "users") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>`);
  } else if ($props.name == "group") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      class: "h-4 w-4",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, _attrs))}><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>`);
  } else if ($props.name == "view") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`);
  } else if ($props.name == "edit") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>`);
  } else if ($props.name == "trash") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"></path></svg>`);
  } else if ($props.name == "rate") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, _attrs))}><path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clip-rule="evenodd"></path></svg>`);
  } else if ($props.name == "cross") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>`);
  } else if ($props.name == "search") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>`);
  } else if ($props.name == "printer") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, _attrs))}><path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path></svg>`);
  } else if ($props.name == "menu") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>`);
  } else if ($props.name == "adj") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      class: "h-4 w-4",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, _attrs))}><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>`);
  } else if ($props.name == "email") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>`);
  } else if ($props.name == "info") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"></path></svg>`);
  } else if ($props.name == "folder") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>`);
  } else if ($props.name == "save") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      class: "h-4 w-4",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2"
    }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>`);
  } else if ($props.name == "col") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      class: "h-4 w-4",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2"
    }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`);
  } else if ($props.name == "open-folder") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"></path><path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"></path></svg>`);
  } else if ($props.name == "chevron-down") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: $props.size || "h-4 w-4",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, _attrs))}><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg>`);
  } else if ($props.name == "down") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-6 h-6"
    }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"></path></svg>`);
  } else if ($props.name == "up") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      stroke: "currentColor",
      class: "w-6 h-6"
    }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>`);
  } else if ($props.name == "chart-bar") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>`);
  } else if ($props.name == "chart-pie") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>`);
  } else if ($props.name == "bell") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      class: "h-5 w-5",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      "stroke-width": "2"
    }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>`);
  } else if ($props.name == "in") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"></path></svg>`);
  } else if ($props.name == "out") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"></path></svg>`);
  } else if ($props.name == "plane") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>`);
  } else if ($props.name == "upload") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"></path></svg>`);
  } else if ($props.name == "clip") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"></path></svg>`);
  } else if ($props.name == "doc") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path></svg>`);
  } else if ($props.name == "doc-text") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"></path></svg>`);
  } else if ($props.name == "tick") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon></svg>`);
  } else if ($props.name == "vdots") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      class: "h-5 w-5",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }, _attrs))}><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>`);
  } else if ($props.name == "xlsx") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: ["fill-current", $props.size || "h-4 w-4"],
      viewBox: "0 0 548.29 548.291",
      xmlns: "http://www.w3.org/2000/svg"
    }, _attrs))}><g><g><path d="M472.929,131.399c-0.031-2.518-0.823-5-2.55-6.961L364.655,3.677c-0.021-0.031-0.052-0.042-0.083-0.073
			c-0.631-0.707-1.355-1.287-2.132-1.795c-0.231-0.152-0.462-0.286-0.704-0.421c-0.683-0.365-1.386-0.666-2.121-0.887
			c-0.198-0.06-0.377-0.139-0.577-0.194C358.23,0.121,357.41,0,356.571,0H96.757C84.904,0,75.255,9.651,75.255,21.502V526.79
			c0,11.858,9.649,21.501,21.502,21.501h354.776c11.862,0,21.502-9.643,21.502-21.501V132.6
			C473.035,132.199,472.973,131.795,472.929,131.399z M165.545,508.217l-9.352-18.703c-3.83-7.209-6.278-12.574-9.192-18.547h-0.307
			c-2.145,5.973-4.749,11.338-7.966,18.547l-8.585,18.703h-26.662l29.888-52.273l-28.812-51.029h26.822l9.042,18.861
			c3.063,6.276,5.364,11.327,7.821,17.155h0.3c2.457-6.594,4.446-11.188,7.047-17.155l8.741-18.861h26.662l-29.118,50.414
			l30.657,52.889H165.545z M269.591,508.217h-64.526V404.915h23.452v83.67h41.074V508.217z M308.66,509.739
			c-11.795,0-23.439-3.064-29.263-6.282l4.743-19.308c6.287,3.212,15.947,6.43,25.899,6.43c10.735,0,16.399-4.436,16.399-11.192
			c0-6.425-4.903-10.109-17.316-14.551c-17.161-5.973-28.354-15.475-28.354-30.498c0-17.623,14.709-31.108,39.087-31.108
			c11.639,0,20.232,2.446,26.353,5.212l-5.207,18.852c-4.142-1.99-11.496-4.908-21.613-4.908c-10.115,0-15.013,4.594-15.013,9.969
			c0,6.587,5.822,9.5,19.155,14.551c18.237,6.752,26.814,16.246,26.814,30.805C350.346,495.03,337.012,509.739,308.66,509.739z
			 M420.53,508.217l-9.354-18.703c-3.833-7.209-6.279-12.574-9.198-18.547h-0.294c-2.142,5.973-4.755,11.338-7.975,18.547
			l-8.583,18.703h-26.665l29.885-52.273l-28.814-51.029h26.823l9.051,18.861c3.061,6.276,5.354,11.327,7.806,17.155h0.31
			c2.446-6.594,4.44-11.188,7.05-17.155l8.736-18.861h26.666l-29.117,50.414l30.65,52.889H420.53z M96.757,365.085V21.507H345.82
			v110.015c0,5.935,4.809,10.75,10.751,10.75h94.962l0.01,222.813H96.757z"></path><path d="M310.933,138.004h-83.765h-94.516v40.316v5.375v34.94v5.375v34.939v5.375v40.319h89.141h5.375h83.765h5.376h89.14v-45.694
			v-34.939v-40.315v-5.375v-40.316H310.933z M310.933,218.636h-83.765v-34.94h83.765V218.636z M138.028,143.38h83.765v34.94h-83.765
			V143.38z M138.028,183.696h83.765v34.94h-83.765V183.696z M138.028,224.011h83.765v34.939h-83.765V224.011z M138.028,299.269
			v-34.943h83.765v34.943H138.028z M227.168,299.269v-34.943h83.765v34.943H227.168z M400.078,299.269h-83.77v-34.943h83.764v34.943
			H400.078z M400.078,218.636h-83.77v-34.94h83.764v34.94H400.078z M316.309,178.32v-34.94h83.764v34.94H316.309z"></path></g></g></svg>`);
  } else {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      class: [$props.size || "h-4 w-4", "fill-current"],
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg>`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Icons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Icons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const appName = "SSM";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/API/Index.vue": () => import("./assets/Index-D6szx5vT.js"), "./Pages/API/Partials/ApiTokenManager.vue": () => import("./assets/ApiTokenManager-BGLViF8E.js"), "./Pages/Activity/List.vue": () => import("./assets/List-zHkmY4ee.js"), "./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-CXFdJr-8.js"), "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-hsFFVyzN.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-BpMU_JHq.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-BTtn19od.js"), "./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-CKKLzENz.js"), "./Pages/Auth/TwoFactorChallenge.vue": () => import("./assets/TwoFactorChallenge-bDZgVtgg.js"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-DFoen32T.js"), "./Pages/Category/Form.vue": () => import("./assets/Form-Cs_Xu7ow.js"), "./Pages/Category/Import.vue": () => import("./assets/Import-DY2Vs3vg.js"), "./Pages/Category/List.vue": () => import("./assets/List-DbMiSTJx.js"), "./Pages/Checkin/Details.vue": () => import("./assets/Details-DAuQCCMv.js"), "./Pages/Checkin/Form.vue": () => import("./assets/Form-itqzo1jK.js"), "./Pages/Checkin/List.vue": () => import("./assets/List-BR78XWxf.js"), "./Pages/Checkout/Details.vue": () => import("./assets/Details-D-k2JSVu.js"), "./Pages/Checkout/Form.vue": () => import("./assets/Form-C40drfQe.js"), "./Pages/Checkout/List.vue": () => import("./assets/List-D8WLEz1P.js"), "./Pages/Customer/Form.vue": () => import("./assets/Form-iEHol9Pk.js"), "./Pages/Customer/Import.vue": () => import("./assets/Import-BXH2oRtQ.js"), "./Pages/Customer/List.vue": () => import("./assets/List-DP_68PgK.js"), "./Pages/Dashboard.vue": () => import("./assets/Dashboard-eAnRL5eJ.js"), "./Pages/Item/Form.vue": () => import("./assets/Form-Ddeh4fXy.js"), "./Pages/Item/Import.vue": () => import("./assets/Import-8cPrnURR.js"), "./Pages/Item/List.vue": () => import("./assets/List-BeqDLAKs.js"), "./Pages/PrivacyPolicy.vue": () => import("./assets/PrivacyPolicy-DP_GF5Ac.js"), "./Pages/Profile/Partials/DeleteUserForm.vue": () => import("./assets/DeleteUserForm-DGWWqGcr.js"), "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue": () => import("./assets/LogoutOtherBrowserSessionsForm-CM3lL7WC.js"), "./Pages/Profile/Partials/TwoFactorAuthenticationForm.vue": () => import("./assets/TwoFactorAuthenticationForm-D2Q8w6vn.js"), "./Pages/Profile/Partials/UpdatePasswordForm.vue": () => import("./assets/UpdatePasswordForm-CZfBezwc.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": () => import("./assets/UpdateProfileInformationForm-DC5vFNpW.js"), "./Pages/Profile/Show.vue": () => import("./assets/Show-B9z8hv5q.js"), "./Pages/Role/Form.vue": () => import("./assets/Form-CXfTszLy.js"), "./Pages/Role/List.vue": () => import("./assets/List-DUJYnG-Y.js"), "./Pages/Setting/Index.vue": () => import("./assets/Index-DIIbY-hf.js"), "./Pages/Supplier/Form.vue": () => import("./assets/Form-BQ9Uz5MT.js"), "./Pages/Supplier/Import.vue": () => import("./assets/Import-DoGMzw0W.js"), "./Pages/Supplier/List.vue": () => import("./assets/List-C43d8Gzb.js"), "./Pages/TermsOfService.vue": () => import("./assets/TermsOfService-JahuiBN_.js"), "./Pages/User/Form.vue": () => import("./assets/Form-DTexAcO7.js"), "./Pages/User/List.vue": () => import("./assets/List-Bg_K-vgy.js"), "./Pages/Welcome.vue": () => import("./assets/Welcome-CRtmFfs3.js") })),
    setup({ app, props, plugin }) {
      return createSSRApp({
        setup() {
          const { t: t4 } = useI18n();
          return { t: t4 };
        },
        render: () => h$1(app, props)
      }).use(plugin).use(k, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      }).component("Head", Head).component("Link", Link).component("Icons", Icons).use(i18n).mixin(mixin);
    }
  })
);
export {
  LANGUAGES as L,
  T,
  _export_sfc as _
};
