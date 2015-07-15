/*! default_boilerplate 2015-07-15 */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length, c = ea.type(a);
        return "function" === c || ea.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function d(a, b, c) {
        if (ea.isFunction(b)) return ea.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return ea.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (ma.test(b)) return ea.filter(b, a, c);
            b = ea.filter(b, a);
        }
        return ea.grep(a, function(a) {
            return ea.inArray(a, b) >= 0 !== c;
        });
    }
    function e(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a;
    }
    function f(a) {
        var b = ua[a] = {};
        return ea.each(a.match(ta) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function g() {
        oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), 
        a.detachEvent("onload", h));
    }
    function h() {
        (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), 
        ea.ready());
    }
    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(za, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c;
                } catch (e) {}
                ea.data(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    function j(a) {
        var b;
        for (b in a) if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function k(a, b, c, d) {
        if (ea.acceptData(a)) {
            var e, f, g = ea.expando, h = a.nodeType, i = h ? ea.cache : a, j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), 
            i[j] || (i[j] = h ? {} : {
                toJSON: ea.noop
            }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), 
            f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), 
            "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, 
            e;
        }
    }
    function l(a, b, c) {
        if (ea.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? ea.cache : a, h = f ? a[ea.expando] : ea.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [ b ] : (b = ea.camelCase(b), 
                    b = b in d ? [ b ] : b.split(" ")), e = b.length;
                    for (;e--; ) delete d[b[e]];
                    if (c ? !j(d) : !ea.isEmptyObject(d)) return;
                }
                (c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([ a ], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
            }
        }
    }
    function m() {
        return !0;
    }
    function n() {
        return !1;
    }
    function o() {
        try {
            return oa.activeElement;
        } catch (a) {}
    }
    function p(a) {
        var b = Ka.split("|"), c = a.createDocumentFragment();
        if (c.createElement) for (;b.length; ) c.createElement(b.pop());
        return c;
    }
    function q(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
        return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([ a ], f) : f;
    }
    function r(a) {
        Ea.test(a.type) && (a.defaultChecked = a.checked);
    }
    function s(a, b) {
        return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function t(a) {
        return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a;
    }
    function u(a) {
        var b = Va.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"));
    }
    function w(a, b) {
        if (1 === b.nodeType && ea.hasData(a)) {
            var c, d, e, f = ea._data(a), g = ea._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = ea.extend({}, g.data));
        }
    }
    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
                e = ea._data(b);
                for (d in e.events) ea.removeEvent(b, d, e.handle);
                b.removeAttribute(ea.expando);
            }
            "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
            ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    function y(b, c) {
        var d, e = ea(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
        return e.detach(), f;
    }
    function z(a) {
        var b = oa, c = _a[a];
        return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), 
        c = y(a, b), $a.detach()), _a[a] = c), c;
    }
    function A(a, b) {
        return {
            get: function() {
                var c = a();
                return null != c ? c ? void delete this.get : (this.get = b).apply(this, arguments) : void 0;
            }
        };
    }
    function B(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--; ) if (b = mb[e] + c, 
        b in a) return b;
        return d;
    }
    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), 
        (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function D(a, b, c) {
        var d = ib.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), 
        d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), 
        "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
        return g;
    }
    function F(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = ab(a), g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
            d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function G(a, b, c, d, e) {
        return new G.prototype.init(a, b, c, d, e);
    }
    function H() {
        return setTimeout(function() {
            nb = void 0;
        }), nb = ea.now();
    }
    function I(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function J(a, b, c) {
        for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function K(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ca(a), p = ea._data(a, "fxshow");
        c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, 
        i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, ea.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ n.overflow, n.overflowX, n.overflowY ], 
        j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, 
        "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), 
        c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], pb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0;
            }
            m[d] = p && p[d] || ea.style(a, d);
        } else j = void 0;
        if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), 
            o ? ea(a).show() : l.done(function() {
                ea(a).hide();
            }), l.done(function() {
                var b;
                ea._removeData(a, "fxshow");
                for (b in m) ea.style(a, b, m[b]);
            });
            for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function L(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function M(a, b, c) {
        var d, e, f = 0, g = sb.length, h = ea.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: ea.extend({}, b),
            opts: ea.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: nb || H(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (L(k, j.opts.specialEasing); g > f; f++) if (d = sb[f].call(j, a, k, j.opts)) return d;
        return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        ea.fx.timer(ea.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function N(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(ta) || [];
            if (ea.isFunction(c)) for (;d = f[e++]; ) "+" === d.charAt(0) ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function O(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, ea.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === Rb;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function P(a, b) {
        var c, d, e = ea.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && ea.extend(!0, a, c), a;
    }
    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                d || (d = g);
            }
            f = f || d;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function R(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function S(a, b, c, d) {
        var e;
        if (ea.isArray(b)) ea.each(b, function(b, e) {
            c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== ea.type(b)) d(a, b); else for (e in b) S(a + "[" + e + "]", b[e], c, d);
    }
    function T() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    function V(a) {
        return ea.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    var W = [], X = W.slice, Y = W.concat, Z = W.push, $ = W.indexOf, _ = {}, aa = _.toString, ba = _.hasOwnProperty, ca = {}, da = "1.11.2", ea = function(a, b) {
        return new ea.fn.init(a, b);
    }, fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ga = /^-ms-/, ha = /-([\da-z])/gi, ia = function(a, b) {
        return b.toUpperCase();
    };
    ea.fn = ea.prototype = {
        jquery: da,
        constructor: ea,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this);
        },
        pushStack: function(a) {
            var b = ea.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return ea.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(ea.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: Z,
        sort: W.sort,
        splice: W.splice
    }, ea.extend = ea.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], 
        c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, 
        f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g;
    }, ea.extend({
        expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === ea.type(a);
        },
        isArray: Array.isArray || function(a) {
            return "array" === ea.type(a);
        },
        isWindow: function(a) {
            return null != a && a == a.window;
        },
        isNumeric: function(a) {
            return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
            try {
                if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (c) {
                return !1;
            }
            if (ca.ownLast) for (b in a) return ba.call(a, b);
            for (b in a) ;
            return void 0 === b || ba.call(a, b);
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a;
        },
        globalEval: function(b) {
            b && ea.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function(a) {
            return a.replace(ga, "ms-").replace(ha, ia);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(fa, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [ a ] : a) : Z.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if ($) return $.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; ) a[e++] = b[d++];
            if (c !== c) for (;void 0 !== b[d]; ) a[e++] = b[d++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && i.push(e); else for (f in a) e = b(a[f], f, d), 
            null != e && i.push(e);
            return Y.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), 
            d = function() {
                return a.apply(b || this, c.concat(X.call(arguments)));
            }, d.guid = a.guid = a.guid || ea.guid++, d) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: ca
    }), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        _["[object " + b + "]"] = b.toLowerCase();
    });
    var ja = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, 
            "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), 
                        n = "[id='" + n + "'] ", i = j.length; i--; ) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",");
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        l || b.removeAttribute("id");
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }
            var b = [];
            return a;
        }
        function d(a) {
            return a[N] = !0, a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ P, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [ h ] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i);
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b;
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e;
            } ]; e > h; h++) if (c = w.relative[a[h].type]) k = [ n(o(k), c) ]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++) ;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a));
                }
                k.push(c);
            }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; ) if (m(k, g, h)) {
                            i.push(k);
                            break;
                        }
                        j && (P = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (;o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r);
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                }
                return j && (P = u, C = s), p;
            };
            return e ? d(g) : g;
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date(), O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0;
        }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"), fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]", ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)", ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga), na = new RegExp("^" + ea + "$"), oa = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fa),
            PSEUDO: new RegExp("^" + ga),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ba + ")$", "i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/, sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g, va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, xa = function() {
            F();
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType;
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, 
            c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), 
            I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length;
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length;
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0;
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), 
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), 
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1);
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [ a ], j = [ b ];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode; ) i.unshift(c);
                for (c = b; c = c.parentNode; ) j.unshift(c);
                for (;i[e] === j[e]; ) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, d) : G;
        }, b.matches = function(a, c) {
            return b(a, null, null, c);
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return b(c, G, null, [ a ]).length > 0;
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return D = null, a;
        }, x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d++]; ) c += x(b);
            return c;
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [ a, a, "", c ], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; ) d = aa(a, e[g]), a[d] = !(b[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, e);
                    }) : f;
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0;
                    };
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                    };
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !w.pseudos.empty(a);
                },
                header: function(a) {
                    return qa.test(a.nodeName);
                },
                input: function(a) {
                    return pa.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: j(function() {
                    return [ 0 ];
                }),
                last: j(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: j(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a;
            }
            return f;
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length);
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]); ) if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                    break;
                }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c;
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, 
        F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), e(function(a) {
            return null == a.getAttribute("disabled");
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), b;
    }(a);
    ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, 
    ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
    var ka = ea.expr.match.needsContext, la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ma = /^.[^:#\[\.,]*$/;
    ea.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [ d ] : [] : ea.find.matches(a, ea.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, ea.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(ea(a).filter(function() {
                for (b = 0; e > b; b++) if (ea.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) ea.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0));
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length;
        }
    });
    var na, oa = a.document, pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, qa = ea.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : pa.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), 
                la.test(c[1]) && ea.isPlainObject(b)) for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            if (d = oa.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return na.find(a);
                this.length = 1, this[0] = d;
            }
            return this.context = oa, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), ea.makeArray(a, this));
    };
    qa.prototype = ea.fn, na = ea(oa);
    var ra = /^(?:parents|prev(?:Until|All))/, sa = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ea.extend({
        dir: function(a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c)); ) 1 === e.nodeType && d.push(e), 
            e = e[b];
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), ea.fn.extend({
        has: function(a) {
            var b, c = ea(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (ea.contains(this, c[b])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? ea.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), ea.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return ea.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return ea.dir(a, "parentNode", c);
        },
        next: function(a) {
            return e(a, "nextSibling");
        },
        prev: function(a) {
            return e(a, "previousSibling");
        },
        nextAll: function(a) {
            return ea.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return ea.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return ea.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return ea.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return ea.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return ea.sibling(a.firstChild);
        },
        contents: function(a) {
            return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes);
        }
    }, function(a, b) {
        ea.fn[a] = function(c, d) {
            var e = ea.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), 
            this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), 
            this.pushStack(e);
        };
    });
    var ta = /\S+/g, ua = {};
    ea.Callbacks = function(a) {
        a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++) if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break;
            }
            b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable());
        }, l = {
            add: function() {
                if (i) {
                    var d = i.length;
                    !function f(b) {
                        ea.each(b, function(b, c) {
                            var d = ea.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), b ? e = i.length : c && (h = d, k(c));
                }
                return this;
            },
            remove: function() {
                return i && ea.each(arguments, function(a, c) {
                    for (var d; (d = ea.inArray(c, i, d)) > -1; ) i.splice(d, 1), b && (e >= d && e--, 
                    g >= d && g--);
                }), this;
            },
            has: function(a) {
                return a ? ea.inArray(a, i) > -1 : !(!i || !i.length);
            },
            empty: function() {
                return i = [], e = 0, this;
            },
            disable: function() {
                return i = j = c = void 0, this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                return j = void 0, c || l.disable(), this;
            },
            locked: function() {
                return !j;
            },
            fireWith: function(a, c) {
                return !i || d && !j || (c = c || [], c = [ a, c.slice ? c.slice() : c ], b ? j.push(c) : k(c)), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return l;
    }, ea.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", ea.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ea.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ea.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return ea.Deferred(function(c) {
                        ea.each(b, function(b, f) {
                            var g = ea.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? ea.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, ea.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = X.call(arguments), g = f.length, h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0, i = 1 === h ? a : ea.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    });
    var va;
    ea.fn.ready = function(a) {
        return ea.ready.promise().done(a), this;
    }, ea.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? ea.readyWait++ : ea.ready(!0);
        },
        ready: function(a) {
            if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                if (!oa.body) return setTimeout(ea.ready);
                ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ ea ]), 
                ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")));
            }
        }
    }), ea.ready.promise = function(b) {
        if (!va) if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready); else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), 
        a.addEventListener("load", h, !1); else {
            oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
            var c = !1;
            try {
                c = null == a.frameElement && oa.documentElement;
            } catch (d) {}
            c && c.doScroll && !function e() {
                if (!ea.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }
                    g(), ea.ready();
                }
            }();
        }
        return va.promise(b);
    };
    var wa, xa = "undefined";
    for (wa in ea(ca)) break;
    ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function() {
        var a, b, c, d;
        c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), 
        d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
    }), function() {
        var a = oa.createElement("div");
        if (null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete a.test;
            } catch (b) {
                ca.deleteExpando = !1;
            }
        }
        a = null;
    }(), ea.acceptData = function(a) {
        var b = ea.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
    };
    var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, za = /([A-Z])/g;
    ea.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a);
        },
        data: function(a, b, c) {
            return k(a, b, c);
        },
        removeData: function(a, b) {
            return l(a, b);
        },
        _data: function(a, b, c) {
            return k(a, b, c, !0);
        },
        _removeData: function(a, b) {
            return l(a, b, !0);
        }
    }), ea.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), 
                    i(f, d, e[d])));
                    ea._data(f, "parsedAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                ea.data(this, a);
            }) : arguments.length > 1 ? this.each(function() {
                ea.data(this, a, b);
            }) : f ? i(f, a, ea.data(f, a)) : void 0;
        },
        removeData: function(a) {
            return this.each(function() {
                ea.removeData(this, a);
            });
        }
    }), ea.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = ea.queue(a, b), d = c.length, e = c.shift(), f = ea._queueHooks(a, b), g = function() {
                ea.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ea._data(a, c) || ea._data(a, c, {
                empty: ea.Callbacks("once memory").add(function() {
                    ea._removeData(a, b + "queue"), ea._removeData(a, c);
                })
            });
        }
    }), ea.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = ea.queue(this, a, b);
                ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                ea.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = ea.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = ea._data(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ba = [ "Top", "Right", "Bottom", "Left" ], Ca = function(a, b) {
        return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a);
    }, Da = ea.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === ea.type(c)) {
            e = !0;
            for (h in c) ea.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(ea(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, Ea = /^(?:checkbox|radio)$/i;
    !function() {
        var a = oa.createElement("input"), b = oa.createElement("div"), c = oa.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, 
        ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, 
        a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, 
        b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, 
        c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, 
        b.attachEvent && (b.attachEvent("onclick", function() {
            ca.noCloneEvent = !1;
        }), b.cloneNode(!0).click()), null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete b.test;
            } catch (d) {
                ca.deleteExpando = !1;
            }
        }
    }(), function() {
        var b, c, d = oa.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null;
    }();
    var Fa = /^(?:input|select|textarea)$/i, Ga = /^key/, Ha = /^(?:mouse|pointer|contextmenu)|click/, Ia = /^(?:focusinfocus|focusoutblur)$/, Ja = /^([^.]*)(?:\.(.+)|)$/;
    ea.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
            if (q) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), 
                (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
                    return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments);
                }, k.elem = a), b = (b || "").match(ta) || [ "" ], h = b.length; h--; ) f = Ja.exec(b[h]) || [], 
                n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, 
                n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && ea.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), 
                j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), 
                ea.event.global[n] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ta) || [ "" ], j = b.length; j--; ) if (h = Ja.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    i = f = m.length; f--; ) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), 
                    g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), 
                    delete k[n]);
                } else for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
                ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [ d || oa ], n = ba.call(b, "type") ? b.type : b, o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), 
            n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : ea.makeArray(c, [ b ]), 
            j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !ea.isWindow(d)) {
                    for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), 
                    k = h;
                    k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a);
                }
                for (l = 0; (h = m[l++]) && !b.isPropagationStopped(); ) b.type = l > 1 ? i : j.bindType || n, 
                f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), 
                f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                    k = d[g], k && (d[g] = null), ea.event.triggered = n;
                    try {
                        d[n]();
                    } catch (p) {}
                    ea.event.triggered = void 0, k && (d[g] = k);
                }
                return b.result;
            }
        },
        dispatch: function(a) {
            a = ea.event.fix(a);
            var b, c, d, e, f, g = [], h = X.call(arguments), i = (ea._data(this, "events") || {})[a.type] || [], j = ea.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = ea.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = e.elem, 
                f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, 
                a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), 
                void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [ i ]).length), 
                e[c] && e.push(d);
                e.length && g.push({
                    elem: i,
                    handlers: e
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        fix: function(a) {
            if (a[ea.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, 
                e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), 
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), 
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), 
                a;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== o() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === o() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return ea.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = ea.extend(new ea.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, ea.removeEvent = oa.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c));
    }, ea.Event = function(a, b) {
        return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, 
        b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void (this[ea.expando] = !0)) : new ea.Event(a, b);
    }, ea.Event.prototype = {
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, ea.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        ea.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), ca.submitBubbles || (ea.event.special.submit = {
        setup: function() {
            return ea.nodeName(this, "form") ? !1 : void ea.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target, c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0;
                }), ea._data(c, "submitBubbles", !0));
            });
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function() {
            return ea.nodeName(this, "form") ? !1 : void ea.event.remove(this, "._submit");
        }
    }), ca.changeBubbles || (ea.event.special.change = {
        setup: function() {
            return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), ea.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0);
            })), !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0);
                }), ea._data(b, "changeBubbles", !0));
            });
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return ea.event.remove(this, "._change"), !Fa.test(this.nodeName);
        }
    }), ca.focusinBubbles || ea.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            ea.event.simulate(b, a.target, ea.event.fix(a), !0);
        };
        ea.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = ea._data(d, b);
                e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = ea._data(d, b) - 1;
                e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b));
            }
        };
    }), ea.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n; else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return ea().off(a), g.apply(this, arguments);
            }, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function() {
                ea.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), 
            this.each(function() {
                ea.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                ea.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? ea.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", La = / jQuery\d+="(?:null|\d+)"/g, Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"), Na = /^\s+/, Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Pa = /<([\w:]+)/, Qa = /<tbody/i, Ra = /<|&#?\w+;/, Sa = /<(?:script|style|link)/i, Ta = /checked\s*(?:[^=]|=\s*.checked.)/i, Ua = /^$|\/(?:java|ecma)script/i, Va = /^true\/(.*)/, Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Xa = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: ca.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, Ya = p(oa), Za = Ya.appendChild(oa.createElement("div"));
    Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, 
    Xa.th = Xa.td, ea.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
            if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, 
            Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a))) for (d = q(f), 
            h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
            if (b) if (c) for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]); else w(a, f);
            return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, 
            f;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++) if (f = a[o], 
            f || 0 === f) if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [ f ] : f); else if (Ra.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || [ "", "" ])[1].toLowerCase(), 
                k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], 
                e = k[0]; e--; ) h = h.lastChild;
                if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), 
                !ca.tbody) for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, 
                e = f && f.childNodes.length; e--; ) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild; ) h.removeChild(h.firstChild);
                h = m.lastChild;
            } else n.push(b.createTextNode(f));
            for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++]; ) if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), 
            h = q(m.appendChild(f), "script"), g && v(h), c)) for (e = 0; f = h[e++]; ) Ua.test(f.type || "") && c.push(f);
            return h = null, m;
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++) if ((b || ea.acceptData(c)) && (e = c[h], 
            f = e && i[e])) {
                if (f.events) for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, 
                W.push(e));
            }
        }
    }), ea.fn.extend({
        text: function(a) {
            return Da(this, function(a) {
                return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), 
            c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild; ) a.removeChild(a.firstChild);
                a.options && ea.nodeName(a, "select") && (a.options.length = 0);
            }
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return ea.clone(this, a, b);
            });
        },
        html: function(a) {
            return Da(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                    a = a.replace(Oa, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = Y.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = ea.isFunction(m);
            if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
            });
            if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 
            1 === h.childNodes.length && (h = c), c)) {
                for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), 
                e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
                if (e) for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], 
                Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                h = c = null;
            }
            return this;
        }
    }), ea.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ea.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), 
            ea(f[d])[b](c), Z.apply(e, c.get());
            return this.pushStack(e);
        };
    });
    var $a, _a = {};
    !function() {
        var a;
        ca.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), 
            d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
            b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), 
            c.removeChild(d), a) : void 0;
        };
    }();
    var ab, bb, cb = /^margin/, db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"), eb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (ab = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    }, bb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), 
        db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
    }) : oa.documentElement.currentStyle && (ab = function(a) {
        return a.currentStyle;
    }, bb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), 
        db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), 
        h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), 
        void 0 === g ? g : g + "" || "auto";
    }), !function() {
        function b() {
            var b, c, d, e;
            c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), 
            d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, 
            g = "4px" === (a.getComputedStyle(b, null) || {
                width: "4px"
            }).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
            e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), 
            b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
            h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", 
            h = 0 === e[0].offsetHeight), c.removeChild(d));
        }
        var c, d, e, f, g, h, i;
        c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        e = c.getElementsByTagName("a")[0], (d = e && e.style) && (d.cssText = "float:left;opacity:.5", 
        ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", 
        c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, 
        ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, 
        ea.extend(ca, {
            reliableHiddenOffsets: function() {
                return null == h && b(), h;
            },
            boxSizingReliable: function() {
                return null == g && b(), g;
            },
            pixelPosition: function() {
                return null == f && b(), f;
            },
            reliableMarginRight: function() {
                return null == i && b(), i;
            }
        }));
    }(), ea.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var fb = /alpha\([^)]*\)/i, gb = /opacity\s*=\s*([^)]*)/, hb = /^(none|table(?!-c[ea]).+)/, ib = new RegExp("^(" + Aa + ")(.*)$", "i"), jb = new RegExp("^([+-])=(" + Aa + ")", "i"), kb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, lb = {
        letterSpacing: "0",
        fontWeight: "400"
    }, mb = [ "Webkit", "O", "Moz", "ms" ];
    ea.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ca.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ea.camelCase(b), i = a.style;
                if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], 
                void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), 
                ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c;
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = ea.camelCase(b);
            return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], 
            g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), 
            "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f;
        }
    }), ea.each([ "height", "width" ], function(a, b) {
        ea.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() {
                    return F(a, b, d);
                }) : F(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && ab(a);
                return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), ca.opacity || (ea.cssHooks.opacity = {
        get: function(a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
            "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e);
        }
    }), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) {
        return b ? ea.swap(a, {
            display: "inline-block"
        }, bb, [ a, "marginRight" ]) : void 0;
    }), ea.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ea.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, cb.test(a) || (ea.cssHooks[a + b].set = D);
    }), ea.fn.extend({
        css: function(a, b) {
            return Da(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (ea.isArray(b)) {
                    for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return C(this, !0);
        },
        hide: function() {
            return C(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ca(this) ? ea(this).show() : ea(this).hide();
            });
        }
    }), ea.Tween = G, G.prototype = {
        constructor: G,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = G.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : G.propHooks._default.set(this), this;
        }
    }, G.prototype.init.prototype = G.prototype, G.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, ea.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, ea.fx = G.prototype.init, ea.fx.step = {};
    var nb, ob, pb = /^(?:toggle|show|hide)$/, qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"), rb = /queueHooks$/, sb = [ K ], tb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = qb.exec(b), f = e && e[3] || (ea.cssNumber[a] ? "" : "px"), g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    ea.Animation = ea.extend(M, {
        tweener: function(a, b) {
            ea.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? sb.unshift(a) : sb.push(a);
        }
    }), ea.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? ea.extend({}, a) : {
            complete: c || !c && b || ea.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ea.isFunction(b) && b
        };
        return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue);
        }, d;
    }, ea.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Ca).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = ea.isEmptyObject(a), f = ea.speed(b, c, d), g = function() {
                var b = M(this, ea.extend({}, a), f);
                (e || ea._data(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = ea.timers, g = ea._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && ea.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ea._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = ea.timers, g = d ? d.length : 0;
                for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), ea.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = ea.fn[b];
        ea.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e);
        };
    }), ea.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        ea.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), ea.timers = [], ea.fx.tick = function() {
        var a, b = ea.timers, c = 0;
        for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || ea.fx.stop(), nb = void 0;
    }, ea.fx.timer = function(a) {
        ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop();
    }, ea.fx.interval = 13, ea.fx.start = function() {
        ob || (ob = setInterval(ea.fx.tick, ea.fx.interval));
    }, ea.fx.stop = function() {
        clearInterval(ob), ob = null;
    }, ea.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ea.fn.delay = function(a, b) {
        return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a, b, c, d, e;
        b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), 
        a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, 
        ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), 
        ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, 
        c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), 
        ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), 
        ca.radioValue = "t" === a.value;
    }();
    var ub = /\r/g;
    ea.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = ea.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0;
        }
    }), ea.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = ea.find.attr(a, "value");
                    return null != b ? b : ea.trim(ea.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
                        if (b = ea(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--; ) if (d = e[g], 
                    ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
                        d.selected = c = !0;
                    } catch (h) {
                        d.scrollHeight;
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e;
                }
            }
        }
    }), ea.each([ "radio", "checkbox" ], function() {
        ea.valHooks[this] = {
            set: function(a, b) {
                return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0;
            }
        }, ca.checkOn || (ea.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var vb, wb, xb = ea.expr.attrHandle, yb = /^(?:checked|selected)$/i, zb = ca.getSetAttribute, Ab = ca.input;
    ea.fn.extend({
        attr: function(a, b) {
            return Da(this, ea.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                ea.removeAttr(this, a);
            });
        }
    }), ea.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void ea.removeAttr(a, b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(ta);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), 
            a.removeAttribute(zb ? c : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), wb = {
        set: function(a, b, c) {
            return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, 
            c;
        }
    }, ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = xb[b] || ea.find.attr;
        xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            xb[b] = f), e;
        } : function(a, b, c) {
            return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null;
        };
    }), Ab && zb || (ea.attrHooks.value = {
        set: function(a, b, c) {
            return ea.nodeName(a, "input") ? void (a.defaultValue = b) : vb && vb.set(a, b, c);
        }
    }), zb || (vb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", 
            "value" === c || b === a.getAttribute(c) ? b : void 0;
        }
    }, xb.id = xb.name = xb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
    }, ea.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0;
        },
        set: vb.set
    }, ea.attrHooks.contenteditable = {
        set: function(a, b, c) {
            vb.set(a, "" === b ? !1 : b, c);
        }
    }, ea.each([ "width", "height" ], function(a, b) {
        ea.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
            }
        };
    })), ca.style || (ea.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0;
        },
        set: function(a, b) {
            return a.style.cssText = b + "";
        }
    });
    var Bb = /^(?:input|select|textarea|button|object)$/i, Cb = /^(?:a|area)$/i;
    ea.fn.extend({
        prop: function(a, b) {
            return Da(this, ea.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return a = ea.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a];
                } catch (b) {}
            });
        }
    }), ea.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, 
            e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = ea.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    }), ca.hrefNormalized || ea.each([ "href", "src" ], function(a, b) {
        ea.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4);
            }
        };
    }), ca.optSelected || (ea.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    }), ea.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        ea.propFix[this.toLowerCase()] = this;
    }), ca.enctype || (ea.propFix.enctype = "encoding");
    var Db = /[\t\r\n\f]/g;
    ea.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function(b) {
                ea(this).addClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(ta) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = ea.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function(b) {
                ea(this).removeClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(ta) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? ea.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function(c) {
                ea(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ea.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), ea.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var Eb = ea.now(), Fb = /\?/, Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ea.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null, e = ea.trim(b + "");
        return e && !ea.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
        })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b);
    }, ea.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), 
            c.async = "false", c.loadXML(b));
        } catch (e) {
            c = void 0;
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), 
        c;
    };
    var Hb, Ib, Jb = /#.*$/, Kb = /([?&])_=[^&]*/, Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nb = /^(?:GET|HEAD)$/, Ob = /^\/\//, Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qb = {}, Rb = {}, Sb = "*/".concat("*");
    try {
        Ib = location.href;
    } catch (Tb) {
        Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href;
    }
    Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ib,
            type: "GET",
            isLocal: Mb.test(Hb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ea.parseJSON,
                "text xml": ea.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a);
        },
        ajaxPrefilter: N(Qb),
        ajaxTransport: N(Rb),
        ajax: function(a, b) {
            function c(a, b, c, d) {
                var e, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, 
                e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), 
                e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), 
                u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, 
                k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [ k, w, v ]) : o.rejectWith(m, [ v, w, r ]), 
                v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [ v, l, e ? k : r ]), 
                p.fireWith(m, [ v, w ]), i && (n.trigger("ajaxComplete", [ v, l ]), --ea.active || ea.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event, o = ea.Deferred(), p = ea.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!k) for (k = {}; b = Lb.exec(g); ) k[b[1].toLowerCase()] = b[2];
                        b = k[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return j && j.abort(b), c(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), 
            l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [ "" ], 
            null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), 
            l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), 
            O(Qb, l, b, v), 2 === t) return v;
            i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), 
            l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, 
            delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), 
            l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), 
            ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), 
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            }) v[e](l[e]);
            if (j = O(Rb, l, b, v)) {
                v.readyState = 1, i && n.trigger("ajaxSend", [ v, l ]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout");
                }, l.timeout));
                try {
                    t = 1, j.send(r, c);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w);
                }
            } else c(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return ea.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return ea.get(a, void 0, b, "script");
        }
    }), ea.each([ "get", "post" ], function(a, b) {
        ea[b] = function(a, c, d, e) {
            return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), ea._evalUrl = function(a) {
        return ea.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, ea.fn.extend({
        wrapAll: function(a) {
            if (ea.isFunction(a)) return this.each(function(b) {
                ea(this).wrapAll(a.call(this, b));
            });
            if (this[0]) {
                var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return this.each(ea.isFunction(a) ? function(b) {
                ea(this).wrapInner(a.call(this, b));
            } : function() {
                var b = ea(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = ea.isFunction(a);
            return this.each(function(c) {
                ea(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes);
            }).end();
        }
    }), ea.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"));
    }, ea.expr.filters.visible = function(a) {
        return !ea.expr.filters.hidden(a);
    };
    var Ub = /%20/g, Vb = /\[\]$/, Wb = /\r?\n/g, Xb = /^(?:submit|button|image|reset|file)$/i, Yb = /^(?:input|select|textarea|keygen)/i;
    ea.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) S(c, a[c], b, e);
        return d.join("&").replace(Ub, "+");
    }, ea.fn.extend({
        serialize: function() {
            return ea.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ea.prop(this, "elements");
                return a ? ea.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a));
            }).map(function(a, b) {
                var c = ea(this).val();
                return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Wb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Wb, "\r\n")
                };
            }).get();
        }
    }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U();
    } : T;
    var Zb = 0, $b = {}, _b = ea.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in $b) $b[a](void 0, !0);
    }), ca.cors = !!_b && "withCredentials" in _b, _b = ca.ajax = !!_b, _b && ea.ajaxTransport(function(a) {
        if (!a.crossDomain || ca.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Zb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, 
                        e) 4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText;
                            } catch (k) {
                                i = "";
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                        }
                        j && d(h, i, j, f.getAllResponseHeaders());
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b();
                },
                abort: function() {
                    b && b(void 0, !0);
                }
            };
        }
    }), ea.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return ea.globalEval(a), a;
            }
        }
    }), ea.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), ea.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = oa.head || ea("head")[0] || oa.documentElement;
            return {
                send: function(d, e) {
                    b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), 
                    b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, 
                        b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
                    }, c.insertBefore(b, c.firstChild);
                },
                abort: function() {
                    b && b.onload(void 0, !0);
                }
            };
        }
    });
    var ac = [], bc = /(=)\?(?=&|$)|\?\?/;
    ea.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ac.pop() || ea.expando + "_" + Eb++;
            return this[a] = !0, a;
        }
    }), ea.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || ea.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), ea.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || oa;
        var d = la.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = ea.buildFragment([ a ], b, e), e && e.length && ea(e).remove(), 
        ea.merge([], d.childNodes));
    };
    var cc = ea.fn.load;
    ea.fn.load = function(a, b, c) {
        if ("string" != typeof a && cc) return cc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, e || [ a.responseText, b, a ]);
        }), this;
    }, ea.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        ea.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), ea.expr.filters.animated = function(a) {
        return ea.grep(ea.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var dc = a.document.documentElement;
    ea.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = ea.css(a, "position"), l = ea(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), 
            i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [ f, i ]) > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, ea.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                ea.offset.setOffset(this, a, b);
            });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), 
            c = V(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), 
                c.left += ea.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ea.css(d, "marginTop", !0),
                    left: b.left - c.left - ea.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position"); ) a = a.offsetParent;
                return a || dc;
            });
        }
    }), ea.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        ea.fn[a] = function(d) {
            return Da(this, function(a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e);
            }, a, d, arguments.length, null);
        };
    }), ea.each([ "top", "left" ], function(a, b) {
        ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
            return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0;
        });
    }), ea.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        ea.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            ea.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Da(this, function(b, c, d) {
                    var e;
                    return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), ea.fn.size = function() {
        return this.length;
    }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ea;
    });
    var ec = a.jQuery, fc = a.$;
    return ea.noConflict = function(b) {
        return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea;
    }, typeof b === xa && (a.jQuery = a.$ = ea), ea;
}), function() {
    function a(a) {
        function b(b, c, d, e, f, g) {
            for (;f >= 0 && g > f; f += a) {
                var h = e ? e[f] : f;
                d = c(d, b[h], h, b);
            }
            return d;
        }
        return function(c, d, e, f) {
            d = t(d, f, 4);
            var g = !A(c) && s.keys(c), h = (g || c).length, i = a > 0 ? 0 : h - 1;
            return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h);
        };
    }
    function b(a) {
        return function(b, c, d) {
            c = u(c, d);
            for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a) if (c(b[f], f, b)) return f;
            return -1;
        };
    }
    function c(a, b, c) {
        return function(d, e, f) {
            var g = 0, h = z(d);
            if ("number" == typeof f) a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1; else if (c && f && h) return f = c(d, e), 
            d[f] === e ? f : -1;
            if (e !== e) return f = b(k.call(d, g, h), s.isNaN), f >= 0 ? f + g : -1;
            for (f = a > 0 ? g : h - 1; f >= 0 && h > f; f += a) if (d[f] === e) return f;
            return -1;
        };
    }
    function d(a, b) {
        var c = F.length, d = a.constructor, e = s.isFunction(d) && d.prototype || h, f = "constructor";
        for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--; ) f = F[c], f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f);
    }
    var e = this, f = e._, g = Array.prototype, h = Object.prototype, i = Function.prototype, j = g.push, k = g.slice, l = h.toString, m = h.hasOwnProperty, n = Array.isArray, o = Object.keys, p = i.bind, q = Object.create, r = function() {}, s = function(a) {
        return a instanceof s ? a : this instanceof s ? void (this._wrapped = a) : new s(a);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), 
    exports._ = s) : e._ = s, s.VERSION = "1.8.3";
    var t = function(a, b, c) {
        if (void 0 === b) return a;
        switch (null == c ? 3 : c) {
          case 1:
            return function(c) {
                return a.call(b, c);
            };

          case 2:
            return function(c, d) {
                return a.call(b, c, d);
            };

          case 3:
            return function(c, d, e) {
                return a.call(b, c, d, e);
            };

          case 4:
            return function(c, d, e, f) {
                return a.call(b, c, d, e, f);
            };
        }
        return function() {
            return a.apply(b, arguments);
        };
    }, u = function(a, b, c) {
        return null == a ? s.identity : s.isFunction(a) ? t(a, b, c) : s.isObject(a) ? s.matcher(a) : s.property(a);
    };
    s.iteratee = function(a, b) {
        return u(a, b, 1 / 0);
    };
    var v = function(a, b) {
        return function(c) {
            var d = arguments.length;
            if (2 > d || null == c) return c;
            for (var e = 1; d > e; e++) for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
                var j = g[i];
                b && void 0 !== c[j] || (c[j] = f[j]);
            }
            return c;
        };
    }, w = function(a) {
        if (!s.isObject(a)) return {};
        if (q) return q(a);
        r.prototype = a;
        var b = new r();
        return r.prototype = null, b;
    }, x = function(a) {
        return function(b) {
            return null == b ? void 0 : b[a];
        };
    }, y = Math.pow(2, 53) - 1, z = x("length"), A = function(a) {
        var b = z(a);
        return "number" == typeof b && b >= 0 && y >= b;
    };
    s.each = s.forEach = function(a, b, c) {
        b = t(b, c);
        var d, e;
        if (A(a)) for (d = 0, e = a.length; e > d; d++) b(a[d], d, a); else {
            var f = s.keys(a);
            for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a);
        }
        return a;
    }, s.map = s.collect = function(a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = Array(e), g = 0; e > g; g++) {
            var h = d ? d[g] : g;
            f[g] = b(a[h], h, a);
        }
        return f;
    }, s.reduce = s.foldl = s.inject = a(1), s.reduceRight = s.foldr = a(-1), s.find = s.detect = function(a, b, c) {
        var d;
        return d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0;
    }, s.filter = s.select = function(a, b, c) {
        var d = [];
        return b = u(b, c), s.each(a, function(a, c, e) {
            b(a, c, e) && d.push(a);
        }), d;
    }, s.reject = function(a, b, c) {
        return s.filter(a, s.negate(u(b)), c);
    }, s.every = s.all = function(a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
            var g = d ? d[f] : f;
            if (!b(a[g], g, a)) return !1;
        }
        return !0;
    }, s.some = s.any = function(a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
            var g = d ? d[f] : f;
            if (b(a[g], g, a)) return !0;
        }
        return !1;
    }, s.contains = s.includes = s.include = function(a, b, c, d) {
        return A(a) || (a = s.values(a)), ("number" != typeof c || d) && (c = 0), s.indexOf(a, b, c) >= 0;
    }, s.invoke = function(a, b) {
        var c = k.call(arguments, 2), d = s.isFunction(b);
        return s.map(a, function(a) {
            var e = d ? b : a[b];
            return null == e ? e : e.apply(a, c);
        });
    }, s.pluck = function(a, b) {
        return s.map(a, s.property(b));
    }, s.where = function(a, b) {
        return s.filter(a, s.matcher(b));
    }, s.findWhere = function(a, b) {
        return s.find(a, s.matcher(b));
    }, s.max = function(a, b, c) {
        var d, e, f = -(1 / 0), g = -(1 / 0);
        if (null == b && null != a) {
            a = A(a) ? a : s.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d);
        } else b = u(b, c), s.each(a, function(a, c, d) {
            e = b(a, c, d), (e > g || e === -(1 / 0) && f === -(1 / 0)) && (f = a, g = e);
        });
        return f;
    }, s.min = function(a, b, c) {
        var d, e, f = 1 / 0, g = 1 / 0;
        if (null == b && null != a) {
            a = A(a) ? a : s.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d);
        } else b = u(b, c), s.each(a, function(a, c, d) {
            e = b(a, c, d), (g > e || e === 1 / 0 && f === 1 / 0) && (f = a, g = e);
        });
        return f;
    }, s.shuffle = function(a) {
        for (var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = s.random(0, f), 
        b !== f && (e[f] = e[b]), e[b] = c[f];
        return e;
    }, s.sample = function(a, b, c) {
        return null == b || c ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)]) : s.shuffle(a).slice(0, Math.max(0, b));
    }, s.sortBy = function(a, b, c) {
        return b = u(b, c), s.pluck(s.map(a, function(a, c, d) {
            return {
                value: a,
                index: c,
                criteria: b(a, c, d)
            };
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1;
            }
            return a.index - b.index;
        }), "value");
    };
    var B = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = u(c, d), s.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g);
            }), e;
        };
    };
    s.groupBy = B(function(a, b, c) {
        s.has(a, c) ? a[c].push(b) : a[c] = [ b ];
    }), s.indexBy = B(function(a, b, c) {
        a[c] = b;
    }), s.countBy = B(function(a, b, c) {
        s.has(a, c) ? a[c]++ : a[c] = 1;
    }), s.toArray = function(a) {
        return a ? s.isArray(a) ? k.call(a) : A(a) ? s.map(a, s.identity) : s.values(a) : [];
    }, s.size = function(a) {
        return null == a ? 0 : A(a) ? a.length : s.keys(a).length;
    }, s.partition = function(a, b, c) {
        b = u(b, c);
        var d = [], e = [];
        return s.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a);
        }), [ d, e ];
    }, s.first = s.head = s.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : s.initial(a, a.length - b);
    }, s.initial = function(a, b, c) {
        return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)));
    }, s.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : s.rest(a, Math.max(0, a.length - b));
    }, s.rest = s.tail = s.drop = function(a, b, c) {
        return k.call(a, null == b || c ? 1 : b);
    }, s.compact = function(a) {
        return s.filter(a, s.identity);
    };
    var C = function(a, b, c, d) {
        for (var e = [], f = 0, g = d || 0, h = z(a); h > g; g++) {
            var i = a[g];
            if (A(i) && (s.isArray(i) || s.isArguments(i))) {
                b || (i = C(i, b, c));
                var j = 0, k = i.length;
                for (e.length += k; k > j; ) e[f++] = i[j++];
            } else c || (e[f++] = i);
        }
        return e;
    };
    s.flatten = function(a, b) {
        return C(a, b, !1);
    }, s.without = function(a) {
        return s.difference(a, k.call(arguments, 1));
    }, s.uniq = s.unique = function(a, b, c, d) {
        s.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = u(c, d));
        for (var e = [], f = [], g = 0, h = z(a); h > g; g++) {
            var i = a[g], j = c ? c(i, g, a) : i;
            b ? (g && f === j || e.push(i), f = j) : c ? s.contains(f, j) || (f.push(j), e.push(i)) : s.contains(e, i) || e.push(i);
        }
        return e;
    }, s.union = function() {
        return s.uniq(C(arguments, !0, !0));
    }, s.intersection = function(a) {
        for (var b = [], c = arguments.length, d = 0, e = z(a); e > d; d++) {
            var f = a[d];
            if (!s.contains(b, f)) {
                for (var g = 1; c > g && s.contains(arguments[g], f); g++) ;
                g === c && b.push(f);
            }
        }
        return b;
    }, s.difference = function(a) {
        var b = C(arguments, !0, !0, 1);
        return s.filter(a, function(a) {
            return !s.contains(b, a);
        });
    }, s.zip = function() {
        return s.unzip(arguments);
    }, s.unzip = function(a) {
        for (var b = a && s.max(a, z).length || 0, c = Array(b), d = 0; b > d; d++) c[d] = s.pluck(a, d);
        return c;
    }, s.object = function(a, b) {
        for (var c = {}, d = 0, e = z(a); e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c;
    }, s.findIndex = b(1), s.findLastIndex = b(-1), s.sortedIndex = function(a, b, c, d) {
        c = u(c, d, 1);
        for (var e = c(b), f = 0, g = z(a); g > f; ) {
            var h = Math.floor((f + g) / 2);
            c(a[h]) < e ? f = h + 1 : g = h;
        }
        return f;
    }, s.indexOf = c(1, s.findIndex, s.sortedIndex), s.lastIndexOf = c(-1, s.findLastIndex), 
    s.range = function(a, b, c) {
        null == b && (b = a || 0, a = 0), c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, 
        a += c) e[f] = a;
        return e;
    };
    var D = function(a, b, c, d, e) {
        if (!(d instanceof b)) return a.apply(c, e);
        var f = w(a.prototype), g = a.apply(f, e);
        return s.isObject(g) ? g : f;
    };
    s.bind = function(a, b) {
        if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
        if (!s.isFunction(a)) throw new TypeError("Bind must be called on a function");
        var c = k.call(arguments, 2), d = function() {
            return D(a, d, b, this, c.concat(k.call(arguments)));
        };
        return d;
    }, s.partial = function(a) {
        var b = k.call(arguments, 1), c = function() {
            for (var d = 0, e = b.length, f = Array(e), g = 0; e > g; g++) f[g] = b[g] === s ? arguments[d++] : b[g];
            for (;d < arguments.length; ) f.push(arguments[d++]);
            return D(a, c, this, this, f);
        };
        return c;
    }, s.bindAll = function(a) {
        var b, c, d = arguments.length;
        if (1 >= d) throw new Error("bindAll must be passed function names");
        for (b = 1; d > b; b++) c = arguments[b], a[c] = s.bind(a[c], a);
        return a;
    }, s.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache, f = "" + (b ? b.apply(this, arguments) : d);
            return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f];
        };
        return c.cache = {}, c;
    }, s.delay = function(a, b) {
        var c = k.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c);
        }, b);
    }, s.defer = s.partial(s.delay, s, 1), s.throttle = function(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : s.now(), g = null, f = a.apply(d, e), g || (d = e = null);
        };
        return function() {
            var j = s.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k || k > b ? (g && (clearTimeout(g), g = null), 
            h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), 
            f;
        };
    }, s.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = s.now() - g;
            b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), 
            d || (f = e = null)));
        };
        return function() {
            f = this, e = arguments, g = s.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h;
        };
    }, s.wrap = function(a, b) {
        return s.partial(b, a);
    }, s.negate = function(a) {
        return function() {
            return !a.apply(this, arguments);
        };
    }, s.compose = function() {
        var a = arguments, b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--; ) d = a[c].call(this, d);
            return d;
        };
    }, s.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0;
        };
    }, s.before = function(a, b) {
        var c;
        return function() {
            return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c;
        };
    }, s.once = s.partial(s.before, 2);
    var E = !{
        toString: null
    }.propertyIsEnumerable("toString"), F = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
    s.keys = function(a) {
        if (!s.isObject(a)) return [];
        if (o) return o(a);
        var b = [];
        for (var c in a) s.has(a, c) && b.push(c);
        return E && d(a, b), b;
    }, s.allKeys = function(a) {
        if (!s.isObject(a)) return [];
        var b = [];
        for (var c in a) b.push(c);
        return E && d(a, b), b;
    }, s.values = function(a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d;
    }, s.mapObject = function(a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; f > h; h++) d = e[h], g[d] = b(a[d], d, a);
        return g;
    }, s.pairs = function(a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [ b[e], a[b[e]] ];
        return d;
    }, s.invert = function(a) {
        for (var b = {}, c = s.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b;
    }, s.functions = s.methods = function(a) {
        var b = [];
        for (var c in a) s.isFunction(a[c]) && b.push(c);
        return b.sort();
    }, s.extend = v(s.allKeys), s.extendOwn = s.assign = v(s.keys), s.findKey = function(a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = 0, g = e.length; g > f; f++) if (d = e[f], b(a[d], d, a)) return d;
    }, s.pick = function(a, b, c) {
        var d, e, f = {}, g = a;
        if (null == g) return f;
        s.isFunction(b) ? (e = s.allKeys(g), d = t(b, c)) : (e = C(arguments, !1, !1, 1), 
        d = function(a, b, c) {
            return b in c;
        }, g = Object(g));
        for (var h = 0, i = e.length; i > h; h++) {
            var j = e[h], k = g[j];
            d(k, j, g) && (f[j] = k);
        }
        return f;
    }, s.omit = function(a, b, c) {
        if (s.isFunction(b)) b = s.negate(b); else {
            var d = s.map(C(arguments, !1, !1, 1), String);
            b = function(a, b) {
                return !s.contains(d, b);
            };
        }
        return s.pick(a, b, c);
    }, s.defaults = v(s.allKeys, !0), s.create = function(a, b) {
        var c = w(a);
        return b && s.extendOwn(c, b), c;
    }, s.clone = function(a) {
        return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({}, a) : a;
    }, s.tap = function(a, b) {
        return b(a), a;
    }, s.isMatch = function(a, b) {
        var c = s.keys(b), d = c.length;
        if (null == a) return !d;
        for (var e = Object(a), f = 0; d > f; f++) {
            var g = c[f];
            if (b[g] !== e[g] || !(g in e)) return !1;
        }
        return !0;
    };
    var G = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
        var e = l.call(a);
        if (e !== l.call(b)) return !1;
        switch (e) {
          case "[object RegExp]":
          case "[object String]":
            return "" + a == "" + b;

          case "[object Number]":
            return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a === +b;
        }
        var f = "[object Array]" === e;
        if (!f) {
            if ("object" != typeof a || "object" != typeof b) return !1;
            var g = a.constructor, h = b.constructor;
            if (g !== h && !(s.isFunction(g) && g instanceof g && s.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1;
        }
        c = c || [], d = d || [];
        for (var i = c.length; i--; ) if (c[i] === a) return d[i] === b;
        if (c.push(a), d.push(b), f) {
            if (i = a.length, i !== b.length) return !1;
            for (;i--; ) if (!G(a[i], b[i], c, d)) return !1;
        } else {
            var j, k = s.keys(a);
            if (i = k.length, s.keys(b).length !== i) return !1;
            for (;i--; ) if (j = k[i], !s.has(b, j) || !G(a[j], b[j], c, d)) return !1;
        }
        return c.pop(), d.pop(), !0;
    };
    s.isEqual = function(a, b) {
        return G(a, b);
    }, s.isEmpty = function(a) {
        return null == a ? !0 : A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a)) ? 0 === a.length : 0 === s.keys(a).length;
    }, s.isElement = function(a) {
        return !(!a || 1 !== a.nodeType);
    }, s.isArray = n || function(a) {
        return "[object Array]" === l.call(a);
    }, s.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a;
    }, s.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(a) {
        s["is" + a] = function(b) {
            return l.call(b) === "[object " + a + "]";
        };
    }), s.isArguments(arguments) || (s.isArguments = function(a) {
        return s.has(a, "callee");
    }), "function" != typeof /./ && "object" != typeof Int8Array && (s.isFunction = function(a) {
        return "function" == typeof a || !1;
    }), s.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a));
    }, s.isNaN = function(a) {
        return s.isNumber(a) && a !== +a;
    }, s.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" === l.call(a);
    }, s.isNull = function(a) {
        return null === a;
    }, s.isUndefined = function(a) {
        return void 0 === a;
    }, s.has = function(a, b) {
        return null != a && m.call(a, b);
    }, s.noConflict = function() {
        return e._ = f, this;
    }, s.identity = function(a) {
        return a;
    }, s.constant = function(a) {
        return function() {
            return a;
        };
    }, s.noop = function() {}, s.property = x, s.propertyOf = function(a) {
        return null == a ? function() {} : function(b) {
            return a[b];
        };
    }, s.matcher = s.matches = function(a) {
        return a = s.extendOwn({}, a), function(b) {
            return s.isMatch(b, a);
        };
    }, s.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = t(b, c, 1);
        for (var e = 0; a > e; e++) d[e] = b(e);
        return d;
    }, s.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1));
    }, s.now = Date.now || function() {
        return new Date().getTime();
    };
    var H = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, I = s.invert(H), J = function(a) {
        var b = function(b) {
            return a[b];
        }, c = "(?:" + s.keys(a).join("|") + ")", d = RegExp(c), e = RegExp(c, "g");
        return function(a) {
            return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a;
        };
    };
    s.escape = J(H), s.unescape = J(I), s.result = function(a, b, c) {
        var d = null == a ? void 0 : a[b];
        return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d;
    };
    var K = 0;
    s.uniqueId = function(a) {
        var b = ++K + "";
        return a ? a + b : b;
    }, s.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/, M = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, N = /\\|'|\r|\n|\u2028|\u2029/g, O = function(a) {
        return "\\" + M[a];
    };
    s.template = function(a, b, c) {
        !b && c && (b = c), b = s.defaults({}, b, s.templateSettings);
        var d = RegExp([ (b.escape || L).source, (b.interpolate || L).source, (b.evaluate || L).source ].join("|") + "|$", "g"), e = 0, f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            return f += a.slice(e, h).replace(N, O), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), 
            b;
        }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f);
        } catch (h) {
            throw h.source = f, h;
        }
        var i = function(a) {
            return g.call(this, a, s);
        }, j = b.variable || "obj";
        return i.source = "function(" + j + "){\n" + f + "}", i;
    }, s.chain = function(a) {
        var b = s(a);
        return b._chain = !0, b;
    };
    var P = function(a, b) {
        return a._chain ? s(b).chain() : b;
    };
    s.mixin = function(a) {
        s.each(s.functions(a), function(b) {
            var c = s[b] = a[b];
            s.prototype[b] = function() {
                var a = [ this._wrapped ];
                return j.apply(a, arguments), P(this, c.apply(s, a));
            };
        });
    }, s.mixin(s), s.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(a) {
        var b = g[a];
        s.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], 
            P(this, c);
        };
    }), s.each([ "concat", "join", "slice" ], function(a) {
        var b = g[a];
        s.prototype[a] = function() {
            return P(this, b.apply(this._wrapped, arguments));
        };
    }), s.prototype.value = function() {
        return this._wrapped;
    }, s.prototype.valueOf = s.prototype.toJSON = s.prototype.value, s.prototype.toString = function() {
        return "" + this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return s;
    });
}.call(this), function(a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.Handlebars = b();
}(this, function() {
    var a = function() {
        "use strict";
        function a(a) {
            return i[a];
        }
        function b(a) {
            for (var b = 1; b < arguments.length; b++) for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
            return a;
        }
        function c(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }
        function d(b) {
            if ("string" != typeof b) {
                if (b && b.toHTML) return b.toHTML();
                if (null == b) return "";
                if (!b) return b + "";
                b = "" + b;
            }
            return k.test(b) ? b.replace(j, a) : b;
        }
        function e(a) {
            return a || 0 === a ? n(a) && 0 === a.length ? !0 : !1 : !0;
        }
        function f(a, b) {
            return a.path = b, a;
        }
        function g(a, b) {
            return (a ? a + "." : "") + b;
        }
        var h = {}, i = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, j = /[&<>"'`]/g, k = /[&<>"'`]/;
        h.extend = b;
        var l = Object.prototype.toString;
        h.toString = l;
        var m = function(a) {
            return "function" == typeof a;
        };
        m(/x/) && (m = function(a) {
            return "function" == typeof a && "[object Function]" === l.call(a);
        });
        var m;
        h.isFunction = m;
        var n = Array.isArray || function(a) {
            return a && "object" == typeof a ? "[object Array]" === l.call(a) : !1;
        };
        return h.isArray = n, h.indexOf = c, h.escapeExpression = d, h.isEmpty = e, h.blockParams = f, 
        h.appendContextPath = g, h;
    }(), b = function() {
        "use strict";
        function a(a, b) {
            var d, e, f = b && b.loc;
            f && (d = f.start.line, e = f.start.column, a += " - " + d + ":" + e);
            for (var g = Error.prototype.constructor.call(this, a), h = 0; h < c.length; h++) this[c[h]] = g[c[h]];
            f && (this.lineNumber = d, this.column = e);
        }
        var b, c = [ "description", "fileName", "lineNumber", "message", "name", "number", "stack" ];
        return a.prototype = new Error(), b = a;
    }(), c = function(a, b) {
        "use strict";
        function c(a, b) {
            this.helpers = a || {}, this.partials = b || {}, d(this);
        }
        function d(a) {
            a.registerHelper("helperMissing", function() {
                if (1 === arguments.length) return void 0;
                throw new g("Missing helper: '" + arguments[arguments.length - 1].name + "'");
            }), a.registerHelper("blockHelperMissing", function(b, c) {
                var d = c.inverse, e = c.fn;
                if (b === !0) return e(this);
                if (b === !1 || null == b) return d(this);
                if (k(b)) return b.length > 0 ? (c.ids && (c.ids = [ c.name ]), a.helpers.each(b, c)) : d(this);
                if (c.data && c.ids) {
                    var g = q(c.data);
                    g.contextPath = f.appendContextPath(c.data.contextPath, c.name), c = {
                        data: g
                    };
                }
                return e(b, c);
            }), a.registerHelper("each", function(a, b) {
                function c(b, c, g) {
                    d && (d.key = b, d.index = c, d.first = 0 === c, d.last = !!g, e && (d.contextPath = e + b)), 
                    m += h(a[b], {
                        data: d,
                        blockParams: f.blockParams([ a[b], b ], [ e + b, null ])
                    });
                }
                if (!b) throw new g("Must pass iterator to #each");
                var d, e, h = b.fn, i = b.inverse, j = 0, m = "";
                if (b.data && b.ids && (e = f.appendContextPath(b.data.contextPath, b.ids[0]) + "."), 
                l(a) && (a = a.call(this)), b.data && (d = q(b.data)), a && "object" == typeof a) if (k(a)) for (var n = a.length; n > j; j++) c(j, j, j === a.length - 1); else {
                    var o;
                    for (var p in a) a.hasOwnProperty(p) && (o && c(o, j - 1), o = p, j++);
                    o && c(o, j - 1, !0);
                }
                return 0 === j && (m = i(this)), m;
            }), a.registerHelper("if", function(a, b) {
                return l(a) && (a = a.call(this)), !b.hash.includeZero && !a || f.isEmpty(a) ? b.inverse(this) : b.fn(this);
            }), a.registerHelper("unless", function(b, c) {
                return a.helpers["if"].call(this, b, {
                    fn: c.inverse,
                    inverse: c.fn,
                    hash: c.hash
                });
            }), a.registerHelper("with", function(a, b) {
                l(a) && (a = a.call(this));
                var c = b.fn;
                if (f.isEmpty(a)) return b.inverse(this);
                if (b.data && b.ids) {
                    var d = q(b.data);
                    d.contextPath = f.appendContextPath(b.data.contextPath, b.ids[0]), b = {
                        data: d
                    };
                }
                return c(a, b);
            }), a.registerHelper("log", function(b, c) {
                var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                a.log(d, b);
            }), a.registerHelper("lookup", function(a, b) {
                return a && a[b];
            });
        }
        var e = {}, f = a, g = b, h = "3.0.1";
        e.VERSION = h;
        var i = 6;
        e.COMPILER_REVISION = i;
        var j = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1"
        };
        e.REVISION_CHANGES = j;
        var k = f.isArray, l = f.isFunction, m = f.toString, n = "[object Object]";
        e.HandlebarsEnvironment = c, c.prototype = {
            constructor: c,
            logger: o,
            log: p,
            registerHelper: function(a, b) {
                if (m.call(a) === n) {
                    if (b) throw new g("Arg not supported with multiple helpers");
                    f.extend(this.helpers, a);
                } else this.helpers[a] = b;
            },
            unregisterHelper: function(a) {
                delete this.helpers[a];
            },
            registerPartial: function(a, b) {
                if (m.call(a) === n) f.extend(this.partials, a); else {
                    if ("undefined" == typeof b) throw new g("Attempting to register a partial as undefined");
                    this.partials[a] = b;
                }
            },
            unregisterPartial: function(a) {
                delete this.partials[a];
            }
        };
        var o = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 1,
            log: function(a, b) {
                if ("undefined" != typeof console && o.level <= a) {
                    var c = o.methodMap[a];
                    (console[c] || console.log).call(console, b);
                }
            }
        };
        e.logger = o;
        var p = o.log;
        e.log = p;
        var q = function(a) {
            var b = f.extend({}, a);
            return b._parent = a, b;
        };
        return e.createFrame = q, e;
    }(a, b), d = function() {
        "use strict";
        function a(a) {
            this.string = a;
        }
        var b;
        return a.prototype.toString = a.prototype.toHTML = function() {
            return "" + this.string;
        }, b = a;
    }(), e = function(a, b, c) {
        "use strict";
        function d(a) {
            var b = a && a[0] || 1, c = n;
            if (b !== c) {
                if (c > b) {
                    var d = o[c], e = o[b];
                    throw new m("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").");
                }
                throw new m("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").");
            }
        }
        function e(a, b) {
            if (!b) throw new m("No environment passed to template");
            if (!a || !a.main) throw new m("Unknown template object: " + typeof a);
            b.VM.checkRevision(a.compiler);
            var c = function(c, d, e) {
                e.hash && (d = l.extend({}, d, e.hash)), c = b.VM.resolvePartial.call(this, c, d, e);
                var f = b.VM.invokePartial.call(this, c, d, e);
                if (null == f && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), 
                f = e.partials[e.name](d, e)), null != f) {
                    if (e.indent) {
                        for (var g = f.split("\n"), h = 0, i = g.length; i > h && (g[h] || h + 1 !== i); h++) g[h] = e.indent + g[h];
                        f = g.join("\n");
                    }
                    return f;
                }
                throw new m("The partial " + e.name + " could not be compiled when running in runtime-only mode");
            }, d = {
                strict: function(a, b) {
                    if (!(b in a)) throw new m('"' + b + '" not defined in ' + a);
                    return a[b];
                },
                lookup: function(a, b) {
                    for (var c = a.length, d = 0; c > d; d++) if (a[d] && null != a[d][b]) return a[d][b];
                },
                lambda: function(a, b) {
                    return "function" == typeof a ? a.call(b) : a;
                },
                escapeExpression: l.escapeExpression,
                invokePartial: c,
                fn: function(b) {
                    return a[b];
                },
                programs: [],
                program: function(a, b, c, d, e) {
                    var g = this.programs[a], h = this.fn(a);
                    return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), 
                    g;
                },
                data: function(a, b) {
                    for (;a && b--; ) a = a._parent;
                    return a;
                },
                merge: function(a, b) {
                    var c = a || b;
                    return a && b && a !== b && (c = l.extend({}, b, a)), c;
                },
                noop: b.VM.noop,
                compilerInfo: a.compiler
            }, e = function(b, c) {
                c = c || {};
                var f = c.data;
                e._setup(c), !c.partial && a.useData && (f = j(b, f));
                var g, h = a.useBlockParams ? [] : void 0;
                return a.useDepths && (g = c.depths ? [ b ].concat(c.depths) : [ b ]), a.main.call(d, b, d.helpers, d.partials, f, h, g);
            };
            return e.isTop = !0, e._setup = function(c) {
                c.partial ? (d.helpers = c.helpers, d.partials = c.partials) : (d.helpers = d.merge(c.helpers, b.helpers), 
                a.usePartial && (d.partials = d.merge(c.partials, b.partials)));
            }, e._child = function(b, c, e, g) {
                if (a.useBlockParams && !e) throw new m("must pass block params");
                if (a.useDepths && !g) throw new m("must pass parent depths");
                return f(d, b, a[b], c, 0, e, g);
            }, e;
        }
        function f(a, b, c, d, e, f, g) {
            var h = function(b, e) {
                return e = e || {}, c.call(a, b, a.helpers, a.partials, e.data || d, f && [ e.blockParams ].concat(f), g && [ b ].concat(g));
            };
            return h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h;
        }
        function g(a, b, c) {
            return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = c.partials[c.name], 
            a;
        }
        function h(a, b, c) {
            if (c.partial = !0, void 0 === a) throw new m("The partial " + c.name + " could not be found");
            return a instanceof Function ? a(b, c) : void 0;
        }
        function i() {
            return "";
        }
        function j(a, b) {
            return b && "root" in b || (b = b ? p(b) : {}, b.root = a), b;
        }
        var k = {}, l = a, m = b, n = c.COMPILER_REVISION, o = c.REVISION_CHANGES, p = c.createFrame;
        return k.checkRevision = d, k.template = e, k.program = f, k.resolvePartial = g, 
        k.invokePartial = h, k.noop = i, k;
    }(a, b, c), f = function(a, b, c, d, e) {
        "use strict";
        var f, g = a, h = b, i = c, j = d, k = e, l = function() {
            var a = new g.HandlebarsEnvironment();
            return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.escapeExpression = j.escapeExpression, 
            a.VM = k, a.template = function(b) {
                return k.template(b, a);
            }, a;
        }, m = l();
        m.create = l;
        var n = "undefined" != typeof global ? global : window, o = n.Handlebars;
        return m.noConflict = function() {
            n.Handlebars === m && (n.Handlebars = o);
        }, m["default"] = m, f = m;
    }(c, d, b, a, e), g = function() {
        "use strict";
        var a, b = {
            Program: function(a, b, c, d) {
                this.loc = d, this.type = "Program", this.body = a, this.blockParams = b, this.strip = c;
            },
            MustacheStatement: function(a, b, c, d, e, f) {
                this.loc = f, this.type = "MustacheStatement", this.path = a, this.params = b || [], 
                this.hash = c, this.escaped = d, this.strip = e;
            },
            BlockStatement: function(a, b, c, d, e, f, g, h, i) {
                this.loc = i, this.type = "BlockStatement", this.path = a, this.params = b || [], 
                this.hash = c, this.program = d, this.inverse = e, this.openStrip = f, this.inverseStrip = g, 
                this.closeStrip = h;
            },
            PartialStatement: function(a, b, c, d, e) {
                this.loc = e, this.type = "PartialStatement", this.name = a, this.params = b || [], 
                this.hash = c, this.indent = "", this.strip = d;
            },
            ContentStatement: function(a, b) {
                this.loc = b, this.type = "ContentStatement", this.original = this.value = a;
            },
            CommentStatement: function(a, b, c) {
                this.loc = c, this.type = "CommentStatement", this.value = a, this.strip = b;
            },
            SubExpression: function(a, b, c, d) {
                this.loc = d, this.type = "SubExpression", this.path = a, this.params = b || [], 
                this.hash = c;
            },
            PathExpression: function(a, b, c, d, e) {
                this.loc = e, this.type = "PathExpression", this.data = a, this.original = d, this.parts = c, 
                this.depth = b;
            },
            StringLiteral: function(a, b) {
                this.loc = b, this.type = "StringLiteral", this.original = this.value = a;
            },
            NumberLiteral: function(a, b) {
                this.loc = b, this.type = "NumberLiteral", this.original = this.value = Number(a);
            },
            BooleanLiteral: function(a, b) {
                this.loc = b, this.type = "BooleanLiteral", this.original = this.value = "true" === a;
            },
            Hash: function(a, b) {
                this.loc = b, this.type = "Hash", this.pairs = a;
            },
            HashPair: function(a, b, c) {
                this.loc = c, this.type = "HashPair", this.key = a, this.value = b;
            },
            helpers: {
                helperExpression: function(a) {
                    return !("SubExpression" !== a.type && !a.params.length && !a.hash);
                },
                scopedId: function(a) {
                    return /^\.|this\b/.test(a.original);
                },
                simpleId: function(a) {
                    return 1 === a.parts.length && !b.helpers.scopedId(a) && !a.depth;
                }
            }
        };
        return a = b;
    }(), h = function() {
        "use strict";
        var a, b = function() {
            function a() {
                this.yy = {};
            }
            var b = {
                trace: function() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    program: 4,
                    EOF: 5,
                    program_repetition0: 6,
                    statement: 7,
                    mustache: 8,
                    block: 9,
                    rawBlock: 10,
                    partial: 11,
                    content: 12,
                    COMMENT: 13,
                    CONTENT: 14,
                    openRawBlock: 15,
                    END_RAW_BLOCK: 16,
                    OPEN_RAW_BLOCK: 17,
                    helperName: 18,
                    openRawBlock_repetition0: 19,
                    openRawBlock_option0: 20,
                    CLOSE_RAW_BLOCK: 21,
                    openBlock: 22,
                    block_option0: 23,
                    closeBlock: 24,
                    openInverse: 25,
                    block_option1: 26,
                    OPEN_BLOCK: 27,
                    openBlock_repetition0: 28,
                    openBlock_option0: 29,
                    openBlock_option1: 30,
                    CLOSE: 31,
                    OPEN_INVERSE: 32,
                    openInverse_repetition0: 33,
                    openInverse_option0: 34,
                    openInverse_option1: 35,
                    openInverseChain: 36,
                    OPEN_INVERSE_CHAIN: 37,
                    openInverseChain_repetition0: 38,
                    openInverseChain_option0: 39,
                    openInverseChain_option1: 40,
                    inverseAndProgram: 41,
                    INVERSE: 42,
                    inverseChain: 43,
                    inverseChain_option0: 44,
                    OPEN_ENDBLOCK: 45,
                    OPEN: 46,
                    mustache_repetition0: 47,
                    mustache_option0: 48,
                    OPEN_UNESCAPED: 49,
                    mustache_repetition1: 50,
                    mustache_option1: 51,
                    CLOSE_UNESCAPED: 52,
                    OPEN_PARTIAL: 53,
                    partialName: 54,
                    partial_repetition0: 55,
                    partial_option0: 56,
                    param: 57,
                    sexpr: 58,
                    OPEN_SEXPR: 59,
                    sexpr_repetition0: 60,
                    sexpr_option0: 61,
                    CLOSE_SEXPR: 62,
                    hash: 63,
                    hash_repetition_plus0: 64,
                    hashSegment: 65,
                    ID: 66,
                    EQUALS: 67,
                    blockParams: 68,
                    OPEN_BLOCK_PARAMS: 69,
                    blockParams_repetition_plus0: 70,
                    CLOSE_BLOCK_PARAMS: 71,
                    path: 72,
                    dataName: 73,
                    STRING: 74,
                    NUMBER: 75,
                    BOOLEAN: 76,
                    DATA: 77,
                    pathSegments: 78,
                    SEP: 79,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    13: "COMMENT",
                    14: "CONTENT",
                    16: "END_RAW_BLOCK",
                    17: "OPEN_RAW_BLOCK",
                    21: "CLOSE_RAW_BLOCK",
                    27: "OPEN_BLOCK",
                    31: "CLOSE",
                    32: "OPEN_INVERSE",
                    37: "OPEN_INVERSE_CHAIN",
                    42: "INVERSE",
                    45: "OPEN_ENDBLOCK",
                    46: "OPEN",
                    49: "OPEN_UNESCAPED",
                    52: "CLOSE_UNESCAPED",
                    53: "OPEN_PARTIAL",
                    59: "OPEN_SEXPR",
                    62: "CLOSE_SEXPR",
                    66: "ID",
                    67: "EQUALS",
                    69: "OPEN_BLOCK_PARAMS",
                    71: "CLOSE_BLOCK_PARAMS",
                    74: "STRING",
                    75: "NUMBER",
                    76: "BOOLEAN",
                    77: "DATA",
                    79: "SEP"
                },
                productions_: [ 0, [ 3, 2 ], [ 4, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 7, 1 ], [ 12, 1 ], [ 10, 3 ], [ 15, 5 ], [ 9, 4 ], [ 9, 4 ], [ 22, 6 ], [ 25, 6 ], [ 36, 6 ], [ 41, 2 ], [ 43, 3 ], [ 43, 1 ], [ 24, 3 ], [ 8, 5 ], [ 8, 5 ], [ 11, 5 ], [ 57, 1 ], [ 57, 1 ], [ 58, 5 ], [ 63, 1 ], [ 65, 3 ], [ 68, 3 ], [ 18, 1 ], [ 18, 1 ], [ 18, 1 ], [ 18, 1 ], [ 18, 1 ], [ 54, 1 ], [ 54, 1 ], [ 73, 2 ], [ 72, 1 ], [ 78, 3 ], [ 78, 1 ], [ 6, 0 ], [ 6, 2 ], [ 19, 0 ], [ 19, 2 ], [ 20, 0 ], [ 20, 1 ], [ 23, 0 ], [ 23, 1 ], [ 26, 0 ], [ 26, 1 ], [ 28, 0 ], [ 28, 2 ], [ 29, 0 ], [ 29, 1 ], [ 30, 0 ], [ 30, 1 ], [ 33, 0 ], [ 33, 2 ], [ 34, 0 ], [ 34, 1 ], [ 35, 0 ], [ 35, 1 ], [ 38, 0 ], [ 38, 2 ], [ 39, 0 ], [ 39, 1 ], [ 40, 0 ], [ 40, 1 ], [ 44, 0 ], [ 44, 1 ], [ 47, 0 ], [ 47, 2 ], [ 48, 0 ], [ 48, 1 ], [ 50, 0 ], [ 50, 2 ], [ 51, 0 ], [ 51, 1 ], [ 55, 0 ], [ 55, 2 ], [ 56, 0 ], [ 56, 1 ], [ 60, 0 ], [ 60, 2 ], [ 61, 0 ], [ 61, 1 ], [ 64, 1 ], [ 64, 2 ], [ 70, 1 ], [ 70, 2 ] ],
                performAction: function(a, b, c, d, e, f, g) {
                    var h = f.length - 1;
                    switch (e) {
                      case 1:
                        return f[h - 1];

                      case 2:
                        this.$ = new d.Program(f[h], null, {}, d.locInfo(this._$));
                        break;

                      case 3:
                        this.$ = f[h];
                        break;

                      case 4:
                        this.$ = f[h];
                        break;

                      case 5:
                        this.$ = f[h];
                        break;

                      case 6:
                        this.$ = f[h];
                        break;

                      case 7:
                        this.$ = f[h];
                        break;

                      case 8:
                        this.$ = new d.CommentStatement(d.stripComment(f[h]), d.stripFlags(f[h], f[h]), d.locInfo(this._$));
                        break;

                      case 9:
                        this.$ = new d.ContentStatement(f[h], d.locInfo(this._$));
                        break;

                      case 10:
                        this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                        break;

                      case 11:
                        this.$ = {
                            path: f[h - 3],
                            params: f[h - 2],
                            hash: f[h - 1]
                        };
                        break;

                      case 12:
                        this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);
                        break;

                      case 13:
                        this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);
                        break;

                      case 14:
                        this.$ = {
                            path: f[h - 4],
                            params: f[h - 3],
                            hash: f[h - 2],
                            blockParams: f[h - 1],
                            strip: d.stripFlags(f[h - 5], f[h])
                        };
                        break;

                      case 15:
                        this.$ = {
                            path: f[h - 4],
                            params: f[h - 3],
                            hash: f[h - 2],
                            blockParams: f[h - 1],
                            strip: d.stripFlags(f[h - 5], f[h])
                        };
                        break;

                      case 16:
                        this.$ = {
                            path: f[h - 4],
                            params: f[h - 3],
                            hash: f[h - 2],
                            blockParams: f[h - 1],
                            strip: d.stripFlags(f[h - 5], f[h])
                        };
                        break;

                      case 17:
                        this.$ = {
                            strip: d.stripFlags(f[h - 1], f[h - 1]),
                            program: f[h]
                        };
                        break;

                      case 18:
                        var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$), j = new d.Program([ i ], null, {}, d.locInfo(this._$));
                        j.chained = !0, this.$ = {
                            strip: f[h - 2].strip,
                            program: j,
                            chain: !0
                        };
                        break;

                      case 19:
                        this.$ = f[h];
                        break;

                      case 20:
                        this.$ = {
                            path: f[h - 1],
                            strip: d.stripFlags(f[h - 2], f[h])
                        };
                        break;

                      case 21:
                        this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                        break;

                      case 22:
                        this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                        break;

                      case 23:
                        this.$ = new d.PartialStatement(f[h - 3], f[h - 2], f[h - 1], d.stripFlags(f[h - 4], f[h]), d.locInfo(this._$));
                        break;

                      case 24:
                        this.$ = f[h];
                        break;

                      case 25:
                        this.$ = f[h];
                        break;

                      case 26:
                        this.$ = new d.SubExpression(f[h - 3], f[h - 2], f[h - 1], d.locInfo(this._$));
                        break;

                      case 27:
                        this.$ = new d.Hash(f[h], d.locInfo(this._$));
                        break;

                      case 28:
                        this.$ = new d.HashPair(f[h - 2], f[h], d.locInfo(this._$));
                        break;

                      case 29:
                        this.$ = f[h - 1];
                        break;

                      case 30:
                        this.$ = f[h];
                        break;

                      case 31:
                        this.$ = f[h];
                        break;

                      case 32:
                        this.$ = new d.StringLiteral(f[h], d.locInfo(this._$));
                        break;

                      case 33:
                        this.$ = new d.NumberLiteral(f[h], d.locInfo(this._$));
                        break;

                      case 34:
                        this.$ = new d.BooleanLiteral(f[h], d.locInfo(this._$));
                        break;

                      case 35:
                        this.$ = f[h];
                        break;

                      case 36:
                        this.$ = f[h];
                        break;

                      case 37:
                        this.$ = d.preparePath(!0, f[h], this._$);
                        break;

                      case 38:
                        this.$ = d.preparePath(!1, f[h], this._$);
                        break;

                      case 39:
                        f[h - 2].push({
                            part: f[h],
                            separator: f[h - 1]
                        }), this.$ = f[h - 2];
                        break;

                      case 40:
                        this.$ = [ {
                            part: f[h]
                        } ];
                        break;

                      case 41:
                        this.$ = [];
                        break;

                      case 42:
                        f[h - 1].push(f[h]);
                        break;

                      case 43:
                        this.$ = [];
                        break;

                      case 44:
                        f[h - 1].push(f[h]);
                        break;

                      case 51:
                        this.$ = [];
                        break;

                      case 52:
                        f[h - 1].push(f[h]);
                        break;

                      case 57:
                        this.$ = [];
                        break;

                      case 58:
                        f[h - 1].push(f[h]);
                        break;

                      case 63:
                        this.$ = [];
                        break;

                      case 64:
                        f[h - 1].push(f[h]);
                        break;

                      case 71:
                        this.$ = [];
                        break;

                      case 72:
                        f[h - 1].push(f[h]);
                        break;

                      case 75:
                        this.$ = [];
                        break;

                      case 76:
                        f[h - 1].push(f[h]);
                        break;

                      case 79:
                        this.$ = [];
                        break;

                      case 80:
                        f[h - 1].push(f[h]);
                        break;

                      case 83:
                        this.$ = [];
                        break;

                      case 84:
                        f[h - 1].push(f[h]);
                        break;

                      case 87:
                        this.$ = [ f[h] ];
                        break;

                      case 88:
                        f[h - 1].push(f[h]);
                        break;

                      case 89:
                        this.$ = [ f[h] ];
                        break;

                      case 90:
                        f[h - 1].push(f[h]);
                    }
                },
                table: [ {
                    3: 1,
                    4: 2,
                    5: [ 2, 41 ],
                    6: 3,
                    13: [ 2, 41 ],
                    14: [ 2, 41 ],
                    17: [ 2, 41 ],
                    27: [ 2, 41 ],
                    32: [ 2, 41 ],
                    46: [ 2, 41 ],
                    49: [ 2, 41 ],
                    53: [ 2, 41 ]
                }, {
                    1: [ 3 ]
                }, {
                    5: [ 1, 4 ]
                }, {
                    5: [ 2, 2 ],
                    7: 5,
                    8: 6,
                    9: 7,
                    10: 8,
                    11: 9,
                    12: 10,
                    13: [ 1, 11 ],
                    14: [ 1, 18 ],
                    15: 16,
                    17: [ 1, 21 ],
                    22: 14,
                    25: 15,
                    27: [ 1, 19 ],
                    32: [ 1, 20 ],
                    37: [ 2, 2 ],
                    42: [ 2, 2 ],
                    45: [ 2, 2 ],
                    46: [ 1, 12 ],
                    49: [ 1, 13 ],
                    53: [ 1, 17 ]
                }, {
                    1: [ 2, 1 ]
                }, {
                    5: [ 2, 42 ],
                    13: [ 2, 42 ],
                    14: [ 2, 42 ],
                    17: [ 2, 42 ],
                    27: [ 2, 42 ],
                    32: [ 2, 42 ],
                    37: [ 2, 42 ],
                    42: [ 2, 42 ],
                    45: [ 2, 42 ],
                    46: [ 2, 42 ],
                    49: [ 2, 42 ],
                    53: [ 2, 42 ]
                }, {
                    5: [ 2, 3 ],
                    13: [ 2, 3 ],
                    14: [ 2, 3 ],
                    17: [ 2, 3 ],
                    27: [ 2, 3 ],
                    32: [ 2, 3 ],
                    37: [ 2, 3 ],
                    42: [ 2, 3 ],
                    45: [ 2, 3 ],
                    46: [ 2, 3 ],
                    49: [ 2, 3 ],
                    53: [ 2, 3 ]
                }, {
                    5: [ 2, 4 ],
                    13: [ 2, 4 ],
                    14: [ 2, 4 ],
                    17: [ 2, 4 ],
                    27: [ 2, 4 ],
                    32: [ 2, 4 ],
                    37: [ 2, 4 ],
                    42: [ 2, 4 ],
                    45: [ 2, 4 ],
                    46: [ 2, 4 ],
                    49: [ 2, 4 ],
                    53: [ 2, 4 ]
                }, {
                    5: [ 2, 5 ],
                    13: [ 2, 5 ],
                    14: [ 2, 5 ],
                    17: [ 2, 5 ],
                    27: [ 2, 5 ],
                    32: [ 2, 5 ],
                    37: [ 2, 5 ],
                    42: [ 2, 5 ],
                    45: [ 2, 5 ],
                    46: [ 2, 5 ],
                    49: [ 2, 5 ],
                    53: [ 2, 5 ]
                }, {
                    5: [ 2, 6 ],
                    13: [ 2, 6 ],
                    14: [ 2, 6 ],
                    17: [ 2, 6 ],
                    27: [ 2, 6 ],
                    32: [ 2, 6 ],
                    37: [ 2, 6 ],
                    42: [ 2, 6 ],
                    45: [ 2, 6 ],
                    46: [ 2, 6 ],
                    49: [ 2, 6 ],
                    53: [ 2, 6 ]
                }, {
                    5: [ 2, 7 ],
                    13: [ 2, 7 ],
                    14: [ 2, 7 ],
                    17: [ 2, 7 ],
                    27: [ 2, 7 ],
                    32: [ 2, 7 ],
                    37: [ 2, 7 ],
                    42: [ 2, 7 ],
                    45: [ 2, 7 ],
                    46: [ 2, 7 ],
                    49: [ 2, 7 ],
                    53: [ 2, 7 ]
                }, {
                    5: [ 2, 8 ],
                    13: [ 2, 8 ],
                    14: [ 2, 8 ],
                    17: [ 2, 8 ],
                    27: [ 2, 8 ],
                    32: [ 2, 8 ],
                    37: [ 2, 8 ],
                    42: [ 2, 8 ],
                    45: [ 2, 8 ],
                    46: [ 2, 8 ],
                    49: [ 2, 8 ],
                    53: [ 2, 8 ]
                }, {
                    18: 22,
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    18: 31,
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    4: 32,
                    6: 3,
                    13: [ 2, 41 ],
                    14: [ 2, 41 ],
                    17: [ 2, 41 ],
                    27: [ 2, 41 ],
                    32: [ 2, 41 ],
                    37: [ 2, 41 ],
                    42: [ 2, 41 ],
                    45: [ 2, 41 ],
                    46: [ 2, 41 ],
                    49: [ 2, 41 ],
                    53: [ 2, 41 ]
                }, {
                    4: 33,
                    6: 3,
                    13: [ 2, 41 ],
                    14: [ 2, 41 ],
                    17: [ 2, 41 ],
                    27: [ 2, 41 ],
                    32: [ 2, 41 ],
                    42: [ 2, 41 ],
                    45: [ 2, 41 ],
                    46: [ 2, 41 ],
                    49: [ 2, 41 ],
                    53: [ 2, 41 ]
                }, {
                    12: 34,
                    14: [ 1, 18 ]
                }, {
                    18: 36,
                    54: 35,
                    58: 37,
                    59: [ 1, 38 ],
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    5: [ 2, 9 ],
                    13: [ 2, 9 ],
                    14: [ 2, 9 ],
                    16: [ 2, 9 ],
                    17: [ 2, 9 ],
                    27: [ 2, 9 ],
                    32: [ 2, 9 ],
                    37: [ 2, 9 ],
                    42: [ 2, 9 ],
                    45: [ 2, 9 ],
                    46: [ 2, 9 ],
                    49: [ 2, 9 ],
                    53: [ 2, 9 ]
                }, {
                    18: 39,
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    18: 40,
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    18: 41,
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    31: [ 2, 71 ],
                    47: 42,
                    59: [ 2, 71 ],
                    66: [ 2, 71 ],
                    74: [ 2, 71 ],
                    75: [ 2, 71 ],
                    76: [ 2, 71 ],
                    77: [ 2, 71 ]
                }, {
                    21: [ 2, 30 ],
                    31: [ 2, 30 ],
                    52: [ 2, 30 ],
                    59: [ 2, 30 ],
                    62: [ 2, 30 ],
                    66: [ 2, 30 ],
                    69: [ 2, 30 ],
                    74: [ 2, 30 ],
                    75: [ 2, 30 ],
                    76: [ 2, 30 ],
                    77: [ 2, 30 ]
                }, {
                    21: [ 2, 31 ],
                    31: [ 2, 31 ],
                    52: [ 2, 31 ],
                    59: [ 2, 31 ],
                    62: [ 2, 31 ],
                    66: [ 2, 31 ],
                    69: [ 2, 31 ],
                    74: [ 2, 31 ],
                    75: [ 2, 31 ],
                    76: [ 2, 31 ],
                    77: [ 2, 31 ]
                }, {
                    21: [ 2, 32 ],
                    31: [ 2, 32 ],
                    52: [ 2, 32 ],
                    59: [ 2, 32 ],
                    62: [ 2, 32 ],
                    66: [ 2, 32 ],
                    69: [ 2, 32 ],
                    74: [ 2, 32 ],
                    75: [ 2, 32 ],
                    76: [ 2, 32 ],
                    77: [ 2, 32 ]
                }, {
                    21: [ 2, 33 ],
                    31: [ 2, 33 ],
                    52: [ 2, 33 ],
                    59: [ 2, 33 ],
                    62: [ 2, 33 ],
                    66: [ 2, 33 ],
                    69: [ 2, 33 ],
                    74: [ 2, 33 ],
                    75: [ 2, 33 ],
                    76: [ 2, 33 ],
                    77: [ 2, 33 ]
                }, {
                    21: [ 2, 34 ],
                    31: [ 2, 34 ],
                    52: [ 2, 34 ],
                    59: [ 2, 34 ],
                    62: [ 2, 34 ],
                    66: [ 2, 34 ],
                    69: [ 2, 34 ],
                    74: [ 2, 34 ],
                    75: [ 2, 34 ],
                    76: [ 2, 34 ],
                    77: [ 2, 34 ]
                }, {
                    21: [ 2, 38 ],
                    31: [ 2, 38 ],
                    52: [ 2, 38 ],
                    59: [ 2, 38 ],
                    62: [ 2, 38 ],
                    66: [ 2, 38 ],
                    69: [ 2, 38 ],
                    74: [ 2, 38 ],
                    75: [ 2, 38 ],
                    76: [ 2, 38 ],
                    77: [ 2, 38 ],
                    79: [ 1, 43 ]
                }, {
                    66: [ 1, 30 ],
                    78: 44
                }, {
                    21: [ 2, 40 ],
                    31: [ 2, 40 ],
                    52: [ 2, 40 ],
                    59: [ 2, 40 ],
                    62: [ 2, 40 ],
                    66: [ 2, 40 ],
                    69: [ 2, 40 ],
                    74: [ 2, 40 ],
                    75: [ 2, 40 ],
                    76: [ 2, 40 ],
                    77: [ 2, 40 ],
                    79: [ 2, 40 ]
                }, {
                    50: 45,
                    52: [ 2, 75 ],
                    59: [ 2, 75 ],
                    66: [ 2, 75 ],
                    74: [ 2, 75 ],
                    75: [ 2, 75 ],
                    76: [ 2, 75 ],
                    77: [ 2, 75 ]
                }, {
                    23: 46,
                    36: 48,
                    37: [ 1, 50 ],
                    41: 49,
                    42: [ 1, 51 ],
                    43: 47,
                    45: [ 2, 47 ]
                }, {
                    26: 52,
                    41: 53,
                    42: [ 1, 51 ],
                    45: [ 2, 49 ]
                }, {
                    16: [ 1, 54 ]
                }, {
                    31: [ 2, 79 ],
                    55: 55,
                    59: [ 2, 79 ],
                    66: [ 2, 79 ],
                    74: [ 2, 79 ],
                    75: [ 2, 79 ],
                    76: [ 2, 79 ],
                    77: [ 2, 79 ]
                }, {
                    31: [ 2, 35 ],
                    59: [ 2, 35 ],
                    66: [ 2, 35 ],
                    74: [ 2, 35 ],
                    75: [ 2, 35 ],
                    76: [ 2, 35 ],
                    77: [ 2, 35 ]
                }, {
                    31: [ 2, 36 ],
                    59: [ 2, 36 ],
                    66: [ 2, 36 ],
                    74: [ 2, 36 ],
                    75: [ 2, 36 ],
                    76: [ 2, 36 ],
                    77: [ 2, 36 ]
                }, {
                    18: 56,
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    28: 57,
                    31: [ 2, 51 ],
                    59: [ 2, 51 ],
                    66: [ 2, 51 ],
                    69: [ 2, 51 ],
                    74: [ 2, 51 ],
                    75: [ 2, 51 ],
                    76: [ 2, 51 ],
                    77: [ 2, 51 ]
                }, {
                    31: [ 2, 57 ],
                    33: 58,
                    59: [ 2, 57 ],
                    66: [ 2, 57 ],
                    69: [ 2, 57 ],
                    74: [ 2, 57 ],
                    75: [ 2, 57 ],
                    76: [ 2, 57 ],
                    77: [ 2, 57 ]
                }, {
                    19: 59,
                    21: [ 2, 43 ],
                    59: [ 2, 43 ],
                    66: [ 2, 43 ],
                    74: [ 2, 43 ],
                    75: [ 2, 43 ],
                    76: [ 2, 43 ],
                    77: [ 2, 43 ]
                }, {
                    18: 63,
                    31: [ 2, 73 ],
                    48: 60,
                    57: 61,
                    58: 64,
                    59: [ 1, 38 ],
                    63: 62,
                    64: 65,
                    65: 66,
                    66: [ 1, 67 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    66: [ 1, 68 ]
                }, {
                    21: [ 2, 37 ],
                    31: [ 2, 37 ],
                    52: [ 2, 37 ],
                    59: [ 2, 37 ],
                    62: [ 2, 37 ],
                    66: [ 2, 37 ],
                    69: [ 2, 37 ],
                    74: [ 2, 37 ],
                    75: [ 2, 37 ],
                    76: [ 2, 37 ],
                    77: [ 2, 37 ],
                    79: [ 1, 43 ]
                }, {
                    18: 63,
                    51: 69,
                    52: [ 2, 77 ],
                    57: 70,
                    58: 64,
                    59: [ 1, 38 ],
                    63: 71,
                    64: 65,
                    65: 66,
                    66: [ 1, 67 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    24: 72,
                    45: [ 1, 73 ]
                }, {
                    45: [ 2, 48 ]
                }, {
                    4: 74,
                    6: 3,
                    13: [ 2, 41 ],
                    14: [ 2, 41 ],
                    17: [ 2, 41 ],
                    27: [ 2, 41 ],
                    32: [ 2, 41 ],
                    37: [ 2, 41 ],
                    42: [ 2, 41 ],
                    45: [ 2, 41 ],
                    46: [ 2, 41 ],
                    49: [ 2, 41 ],
                    53: [ 2, 41 ]
                }, {
                    45: [ 2, 19 ]
                }, {
                    18: 75,
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    4: 76,
                    6: 3,
                    13: [ 2, 41 ],
                    14: [ 2, 41 ],
                    17: [ 2, 41 ],
                    27: [ 2, 41 ],
                    32: [ 2, 41 ],
                    45: [ 2, 41 ],
                    46: [ 2, 41 ],
                    49: [ 2, 41 ],
                    53: [ 2, 41 ]
                }, {
                    24: 77,
                    45: [ 1, 73 ]
                }, {
                    45: [ 2, 50 ]
                }, {
                    5: [ 2, 10 ],
                    13: [ 2, 10 ],
                    14: [ 2, 10 ],
                    17: [ 2, 10 ],
                    27: [ 2, 10 ],
                    32: [ 2, 10 ],
                    37: [ 2, 10 ],
                    42: [ 2, 10 ],
                    45: [ 2, 10 ],
                    46: [ 2, 10 ],
                    49: [ 2, 10 ],
                    53: [ 2, 10 ]
                }, {
                    18: 63,
                    31: [ 2, 81 ],
                    56: 78,
                    57: 79,
                    58: 64,
                    59: [ 1, 38 ],
                    63: 80,
                    64: 65,
                    65: 66,
                    66: [ 1, 67 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    59: [ 2, 83 ],
                    60: 81,
                    62: [ 2, 83 ],
                    66: [ 2, 83 ],
                    74: [ 2, 83 ],
                    75: [ 2, 83 ],
                    76: [ 2, 83 ],
                    77: [ 2, 83 ]
                }, {
                    18: 63,
                    29: 82,
                    31: [ 2, 53 ],
                    57: 83,
                    58: 64,
                    59: [ 1, 38 ],
                    63: 84,
                    64: 65,
                    65: 66,
                    66: [ 1, 67 ],
                    69: [ 2, 53 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    18: 63,
                    31: [ 2, 59 ],
                    34: 85,
                    57: 86,
                    58: 64,
                    59: [ 1, 38 ],
                    63: 87,
                    64: 65,
                    65: 66,
                    66: [ 1, 67 ],
                    69: [ 2, 59 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    18: 63,
                    20: 88,
                    21: [ 2, 45 ],
                    57: 89,
                    58: 64,
                    59: [ 1, 38 ],
                    63: 90,
                    64: 65,
                    65: 66,
                    66: [ 1, 67 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    31: [ 1, 91 ]
                }, {
                    31: [ 2, 72 ],
                    59: [ 2, 72 ],
                    66: [ 2, 72 ],
                    74: [ 2, 72 ],
                    75: [ 2, 72 ],
                    76: [ 2, 72 ],
                    77: [ 2, 72 ]
                }, {
                    31: [ 2, 74 ]
                }, {
                    21: [ 2, 24 ],
                    31: [ 2, 24 ],
                    52: [ 2, 24 ],
                    59: [ 2, 24 ],
                    62: [ 2, 24 ],
                    66: [ 2, 24 ],
                    69: [ 2, 24 ],
                    74: [ 2, 24 ],
                    75: [ 2, 24 ],
                    76: [ 2, 24 ],
                    77: [ 2, 24 ]
                }, {
                    21: [ 2, 25 ],
                    31: [ 2, 25 ],
                    52: [ 2, 25 ],
                    59: [ 2, 25 ],
                    62: [ 2, 25 ],
                    66: [ 2, 25 ],
                    69: [ 2, 25 ],
                    74: [ 2, 25 ],
                    75: [ 2, 25 ],
                    76: [ 2, 25 ],
                    77: [ 2, 25 ]
                }, {
                    21: [ 2, 27 ],
                    31: [ 2, 27 ],
                    52: [ 2, 27 ],
                    62: [ 2, 27 ],
                    65: 92,
                    66: [ 1, 93 ],
                    69: [ 2, 27 ]
                }, {
                    21: [ 2, 87 ],
                    31: [ 2, 87 ],
                    52: [ 2, 87 ],
                    62: [ 2, 87 ],
                    66: [ 2, 87 ],
                    69: [ 2, 87 ]
                }, {
                    21: [ 2, 40 ],
                    31: [ 2, 40 ],
                    52: [ 2, 40 ],
                    59: [ 2, 40 ],
                    62: [ 2, 40 ],
                    66: [ 2, 40 ],
                    67: [ 1, 94 ],
                    69: [ 2, 40 ],
                    74: [ 2, 40 ],
                    75: [ 2, 40 ],
                    76: [ 2, 40 ],
                    77: [ 2, 40 ],
                    79: [ 2, 40 ]
                }, {
                    21: [ 2, 39 ],
                    31: [ 2, 39 ],
                    52: [ 2, 39 ],
                    59: [ 2, 39 ],
                    62: [ 2, 39 ],
                    66: [ 2, 39 ],
                    69: [ 2, 39 ],
                    74: [ 2, 39 ],
                    75: [ 2, 39 ],
                    76: [ 2, 39 ],
                    77: [ 2, 39 ],
                    79: [ 2, 39 ]
                }, {
                    52: [ 1, 95 ]
                }, {
                    52: [ 2, 76 ],
                    59: [ 2, 76 ],
                    66: [ 2, 76 ],
                    74: [ 2, 76 ],
                    75: [ 2, 76 ],
                    76: [ 2, 76 ],
                    77: [ 2, 76 ]
                }, {
                    52: [ 2, 78 ]
                }, {
                    5: [ 2, 12 ],
                    13: [ 2, 12 ],
                    14: [ 2, 12 ],
                    17: [ 2, 12 ],
                    27: [ 2, 12 ],
                    32: [ 2, 12 ],
                    37: [ 2, 12 ],
                    42: [ 2, 12 ],
                    45: [ 2, 12 ],
                    46: [ 2, 12 ],
                    49: [ 2, 12 ],
                    53: [ 2, 12 ]
                }, {
                    18: 96,
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    36: 48,
                    37: [ 1, 50 ],
                    41: 49,
                    42: [ 1, 51 ],
                    43: 98,
                    44: 97,
                    45: [ 2, 69 ]
                }, {
                    31: [ 2, 63 ],
                    38: 99,
                    59: [ 2, 63 ],
                    66: [ 2, 63 ],
                    69: [ 2, 63 ],
                    74: [ 2, 63 ],
                    75: [ 2, 63 ],
                    76: [ 2, 63 ],
                    77: [ 2, 63 ]
                }, {
                    45: [ 2, 17 ]
                }, {
                    5: [ 2, 13 ],
                    13: [ 2, 13 ],
                    14: [ 2, 13 ],
                    17: [ 2, 13 ],
                    27: [ 2, 13 ],
                    32: [ 2, 13 ],
                    37: [ 2, 13 ],
                    42: [ 2, 13 ],
                    45: [ 2, 13 ],
                    46: [ 2, 13 ],
                    49: [ 2, 13 ],
                    53: [ 2, 13 ]
                }, {
                    31: [ 1, 100 ]
                }, {
                    31: [ 2, 80 ],
                    59: [ 2, 80 ],
                    66: [ 2, 80 ],
                    74: [ 2, 80 ],
                    75: [ 2, 80 ],
                    76: [ 2, 80 ],
                    77: [ 2, 80 ]
                }, {
                    31: [ 2, 82 ]
                }, {
                    18: 63,
                    57: 102,
                    58: 64,
                    59: [ 1, 38 ],
                    61: 101,
                    62: [ 2, 85 ],
                    63: 103,
                    64: 65,
                    65: 66,
                    66: [ 1, 67 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    30: 104,
                    31: [ 2, 55 ],
                    68: 105,
                    69: [ 1, 106 ]
                }, {
                    31: [ 2, 52 ],
                    59: [ 2, 52 ],
                    66: [ 2, 52 ],
                    69: [ 2, 52 ],
                    74: [ 2, 52 ],
                    75: [ 2, 52 ],
                    76: [ 2, 52 ],
                    77: [ 2, 52 ]
                }, {
                    31: [ 2, 54 ],
                    69: [ 2, 54 ]
                }, {
                    31: [ 2, 61 ],
                    35: 107,
                    68: 108,
                    69: [ 1, 106 ]
                }, {
                    31: [ 2, 58 ],
                    59: [ 2, 58 ],
                    66: [ 2, 58 ],
                    69: [ 2, 58 ],
                    74: [ 2, 58 ],
                    75: [ 2, 58 ],
                    76: [ 2, 58 ],
                    77: [ 2, 58 ]
                }, {
                    31: [ 2, 60 ],
                    69: [ 2, 60 ]
                }, {
                    21: [ 1, 109 ]
                }, {
                    21: [ 2, 44 ],
                    59: [ 2, 44 ],
                    66: [ 2, 44 ],
                    74: [ 2, 44 ],
                    75: [ 2, 44 ],
                    76: [ 2, 44 ],
                    77: [ 2, 44 ]
                }, {
                    21: [ 2, 46 ]
                }, {
                    5: [ 2, 21 ],
                    13: [ 2, 21 ],
                    14: [ 2, 21 ],
                    17: [ 2, 21 ],
                    27: [ 2, 21 ],
                    32: [ 2, 21 ],
                    37: [ 2, 21 ],
                    42: [ 2, 21 ],
                    45: [ 2, 21 ],
                    46: [ 2, 21 ],
                    49: [ 2, 21 ],
                    53: [ 2, 21 ]
                }, {
                    21: [ 2, 88 ],
                    31: [ 2, 88 ],
                    52: [ 2, 88 ],
                    62: [ 2, 88 ],
                    66: [ 2, 88 ],
                    69: [ 2, 88 ]
                }, {
                    67: [ 1, 94 ]
                }, {
                    18: 63,
                    57: 110,
                    58: 64,
                    59: [ 1, 38 ],
                    66: [ 1, 30 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    5: [ 2, 22 ],
                    13: [ 2, 22 ],
                    14: [ 2, 22 ],
                    17: [ 2, 22 ],
                    27: [ 2, 22 ],
                    32: [ 2, 22 ],
                    37: [ 2, 22 ],
                    42: [ 2, 22 ],
                    45: [ 2, 22 ],
                    46: [ 2, 22 ],
                    49: [ 2, 22 ],
                    53: [ 2, 22 ]
                }, {
                    31: [ 1, 111 ]
                }, {
                    45: [ 2, 18 ]
                }, {
                    45: [ 2, 70 ]
                }, {
                    18: 63,
                    31: [ 2, 65 ],
                    39: 112,
                    57: 113,
                    58: 64,
                    59: [ 1, 38 ],
                    63: 114,
                    64: 65,
                    65: 66,
                    66: [ 1, 67 ],
                    69: [ 2, 65 ],
                    72: 23,
                    73: 24,
                    74: [ 1, 25 ],
                    75: [ 1, 26 ],
                    76: [ 1, 27 ],
                    77: [ 1, 29 ],
                    78: 28
                }, {
                    5: [ 2, 23 ],
                    13: [ 2, 23 ],
                    14: [ 2, 23 ],
                    17: [ 2, 23 ],
                    27: [ 2, 23 ],
                    32: [ 2, 23 ],
                    37: [ 2, 23 ],
                    42: [ 2, 23 ],
                    45: [ 2, 23 ],
                    46: [ 2, 23 ],
                    49: [ 2, 23 ],
                    53: [ 2, 23 ]
                }, {
                    62: [ 1, 115 ]
                }, {
                    59: [ 2, 84 ],
                    62: [ 2, 84 ],
                    66: [ 2, 84 ],
                    74: [ 2, 84 ],
                    75: [ 2, 84 ],
                    76: [ 2, 84 ],
                    77: [ 2, 84 ]
                }, {
                    62: [ 2, 86 ]
                }, {
                    31: [ 1, 116 ]
                }, {
                    31: [ 2, 56 ]
                }, {
                    66: [ 1, 118 ],
                    70: 117
                }, {
                    31: [ 1, 119 ]
                }, {
                    31: [ 2, 62 ]
                }, {
                    14: [ 2, 11 ]
                }, {
                    21: [ 2, 28 ],
                    31: [ 2, 28 ],
                    52: [ 2, 28 ],
                    62: [ 2, 28 ],
                    66: [ 2, 28 ],
                    69: [ 2, 28 ]
                }, {
                    5: [ 2, 20 ],
                    13: [ 2, 20 ],
                    14: [ 2, 20 ],
                    17: [ 2, 20 ],
                    27: [ 2, 20 ],
                    32: [ 2, 20 ],
                    37: [ 2, 20 ],
                    42: [ 2, 20 ],
                    45: [ 2, 20 ],
                    46: [ 2, 20 ],
                    49: [ 2, 20 ],
                    53: [ 2, 20 ]
                }, {
                    31: [ 2, 67 ],
                    40: 120,
                    68: 121,
                    69: [ 1, 106 ]
                }, {
                    31: [ 2, 64 ],
                    59: [ 2, 64 ],
                    66: [ 2, 64 ],
                    69: [ 2, 64 ],
                    74: [ 2, 64 ],
                    75: [ 2, 64 ],
                    76: [ 2, 64 ],
                    77: [ 2, 64 ]
                }, {
                    31: [ 2, 66 ],
                    69: [ 2, 66 ]
                }, {
                    21: [ 2, 26 ],
                    31: [ 2, 26 ],
                    52: [ 2, 26 ],
                    59: [ 2, 26 ],
                    62: [ 2, 26 ],
                    66: [ 2, 26 ],
                    69: [ 2, 26 ],
                    74: [ 2, 26 ],
                    75: [ 2, 26 ],
                    76: [ 2, 26 ],
                    77: [ 2, 26 ]
                }, {
                    13: [ 2, 14 ],
                    14: [ 2, 14 ],
                    17: [ 2, 14 ],
                    27: [ 2, 14 ],
                    32: [ 2, 14 ],
                    37: [ 2, 14 ],
                    42: [ 2, 14 ],
                    45: [ 2, 14 ],
                    46: [ 2, 14 ],
                    49: [ 2, 14 ],
                    53: [ 2, 14 ]
                }, {
                    66: [ 1, 123 ],
                    71: [ 1, 122 ]
                }, {
                    66: [ 2, 89 ],
                    71: [ 2, 89 ]
                }, {
                    13: [ 2, 15 ],
                    14: [ 2, 15 ],
                    17: [ 2, 15 ],
                    27: [ 2, 15 ],
                    32: [ 2, 15 ],
                    42: [ 2, 15 ],
                    45: [ 2, 15 ],
                    46: [ 2, 15 ],
                    49: [ 2, 15 ],
                    53: [ 2, 15 ]
                }, {
                    31: [ 1, 124 ]
                }, {
                    31: [ 2, 68 ]
                }, {
                    31: [ 2, 29 ]
                }, {
                    66: [ 2, 90 ],
                    71: [ 2, 90 ]
                }, {
                    13: [ 2, 16 ],
                    14: [ 2, 16 ],
                    17: [ 2, 16 ],
                    27: [ 2, 16 ],
                    32: [ 2, 16 ],
                    37: [ 2, 16 ],
                    42: [ 2, 16 ],
                    45: [ 2, 16 ],
                    46: [ 2, 16 ],
                    49: [ 2, 16 ],
                    53: [ 2, 16 ]
                } ],
                defaultActions: {
                    4: [ 2, 1 ],
                    47: [ 2, 48 ],
                    49: [ 2, 19 ],
                    53: [ 2, 50 ],
                    62: [ 2, 74 ],
                    71: [ 2, 78 ],
                    76: [ 2, 17 ],
                    80: [ 2, 82 ],
                    90: [ 2, 46 ],
                    97: [ 2, 18 ],
                    98: [ 2, 70 ],
                    103: [ 2, 86 ],
                    105: [ 2, 56 ],
                    108: [ 2, 62 ],
                    109: [ 2, 11 ],
                    121: [ 2, 68 ],
                    122: [ 2, 29 ]
                },
                parseError: function(a, b) {
                    throw new Error(a);
                },
                parse: function(a) {
                    function b() {
                        var a;
                        return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), 
                        a;
                    }
                    var c = this, d = [ 0 ], e = [ null ], f = [], g = this.table, h = "", i = 0, j = 0, k = 0;
                    this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, 
                    "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                    var l = this.lexer.yylloc;
                    f.push(l);
                    var m = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var n, o, p, q, r, s, t, u, v, w = {}; ;) {
                        if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()), 
                        q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                            var x = "";
                            if (!k) {
                                v = [];
                                for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), 
                                this.parseError(x, {
                                    text: this.lexer.match,
                                    token: this.terminals_[n] || n,
                                    line: this.lexer.yylineno,
                                    loc: l,
                                    expected: v
                                });
                            }
                        }
                        if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                        switch (q[0]) {
                          case 1:
                            d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, 
                            o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, 
                            l = this.lexer.yylloc, k > 0 && k--);
                            break;

                          case 2:
                            if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                                first_line: f[f.length - (t || 1)].first_line,
                                last_line: f[f.length - 1].last_line,
                                first_column: f[f.length - (t || 1)].first_column,
                                last_column: f[f.length - 1].last_column
                            }, m && (w._$.range = [ f[f.length - (t || 1)].range[0], f[f.length - 1].range[1] ]), 
                            r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                            t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), 
                            d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], 
                            d.push(u);
                            break;

                          case 3:
                            return !0;
                        }
                    }
                    return !0;
                }
            }, c = function() {
                var a = {
                    EOF: 1,
                    parseError: function(a, b) {
                        if (!this.yy.parser) throw new Error(a);
                        this.yy.parser.parseError(a, b);
                    },
                    setInput: function(a) {
                        return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, 
                        this.yytext = this.matched = this.match = "", this.conditionStack = [ "INITIAL" ], 
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        }, this.options.ranges && (this.yylloc.range = [ 0, 0 ]), this.offset = 0, this;
                    },
                    input: function() {
                        var a = this._input[0];
                        this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                        var b = a.match(/(?:\r\n?|\n).*/g);
                        return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, 
                        this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), 
                        a;
                    },
                    unput: function(a) {
                        var b = a.length, c = a.split(/(?:\r\n?|\n)/g);
                        this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), 
                        this.offset -= b;
                        var d = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), 
                        c.length - 1 && (this.yylineno -= c.length - 1);
                        var e = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                        }, this.options.ranges && (this.yylloc.range = [ e[0], e[0] + this.yyleng - b ]), 
                        this;
                    },
                    more: function() {
                        return this._more = !0, this;
                    },
                    less: function(a) {
                        this.unput(this.match.slice(a));
                    },
                    pastInput: function() {
                        var a = this.matched.substr(0, this.matched.length - this.match.length);
                        return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "");
                    },
                    upcomingInput: function() {
                        var a = this.match;
                        return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "");
                    },
                    showPosition: function() {
                        var a = this.pastInput(), b = new Array(a.length + 1).join("-");
                        return a + this.upcomingInput() + "\n" + b + "^";
                    },
                    next: function() {
                        if (this.done) return this.EOF;
                        this._input || (this.done = !0);
                        var a, b, c, d, e;
                        this._more || (this.yytext = "", this.match = "");
                        for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), 
                        !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++) ;
                        return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), 
                        this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                        }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, 
                        this.options.ranges && (this.yylloc.range = [ this.offset, this.offset += this.yyleng ]), 
                        this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], 
                        a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), 
                        this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        });
                    },
                    lex: function() {
                        var a = this.next();
                        return "undefined" != typeof a ? a : this.lex();
                    },
                    begin: function(a) {
                        this.conditionStack.push(a);
                    },
                    popState: function() {
                        return this.conditionStack.pop();
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2];
                    },
                    pushState: function(a) {
                        this.begin(a);
                    }
                };
                return a.options = {}, a.performAction = function(a, b, c, d) {
                    function e(a, c) {
                        return b.yytext = b.yytext.substr(a, b.yyleng - c);
                    }
                    switch (c) {
                      case 0:
                        if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), 
                        this.begin("emu")) : this.begin("mu"), b.yytext) return 14;
                        break;

                      case 1:
                        return 14;

                      case 2:
                        return this.popState(), 14;

                      case 3:
                        return b.yytext = b.yytext.substr(5, b.yyleng - 9), this.popState(), 16;

                      case 4:
                        return 14;

                      case 5:
                        return this.popState(), 13;

                      case 6:
                        return 59;

                      case 7:
                        return 62;

                      case 8:
                        return 17;

                      case 9:
                        return this.popState(), this.begin("raw"), 21;

                      case 10:
                        return 53;

                      case 11:
                        return 27;

                      case 12:
                        return 45;

                      case 13:
                        return this.popState(), 42;

                      case 14:
                        return this.popState(), 42;

                      case 15:
                        return 32;

                      case 16:
                        return 37;

                      case 17:
                        return 49;

                      case 18:
                        return 46;

                      case 19:
                        this.unput(b.yytext), this.popState(), this.begin("com");
                        break;

                      case 20:
                        return this.popState(), 13;

                      case 21:
                        return 46;

                      case 22:
                        return 67;

                      case 23:
                        return 66;

                      case 24:
                        return 66;

                      case 25:
                        return 79;

                      case 26:
                        break;

                      case 27:
                        return this.popState(), 52;

                      case 28:
                        return this.popState(), 31;

                      case 29:
                        return b.yytext = e(1, 2).replace(/\\"/g, '"'), 74;

                      case 30:
                        return b.yytext = e(1, 2).replace(/\\'/g, "'"), 74;

                      case 31:
                        return 77;

                      case 32:
                        return 76;

                      case 33:
                        return 76;

                      case 34:
                        return 75;

                      case 35:
                        return 69;

                      case 36:
                        return 71;

                      case 37:
                        return 66;

                      case 38:
                        return b.yytext = e(1, 2), 66;

                      case 39:
                        return "INVALID";

                      case 40:
                        return 5;
                    }
                }, a.rules = [ /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/ ], 
                a.conditions = {
                    mu: {
                        rules: [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 ],
                        inclusive: !1
                    },
                    emu: {
                        rules: [ 2 ],
                        inclusive: !1
                    },
                    com: {
                        rules: [ 5 ],
                        inclusive: !1
                    },
                    raw: {
                        rules: [ 3, 4 ],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [ 0, 1, 40 ],
                        inclusive: !0
                    }
                }, a;
            }();
            return b.lexer = c, a.prototype = b, b.Parser = a, new a();
        }();
        return a = b;
    }(), i = function(a, b) {
        "use strict";
        function c() {
            this.parents = [];
        }
        var d, e = a, f = b;
        return c.prototype = {
            constructor: c,
            mutating: !1,
            acceptKey: function(a, b) {
                var c = this.accept(a[b]);
                if (this.mutating) {
                    if (c && (!c.type || !f[c.type])) throw new e('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);
                    a[b] = c;
                }
            },
            acceptRequired: function(a, b) {
                if (this.acceptKey(a, b), !a[b]) throw new e(a.type + " requires " + b);
            },
            acceptArray: function(a) {
                for (var b = 0, c = a.length; c > b; b++) this.acceptKey(a, b), a[b] || (a.splice(b, 1), 
                b--, c--);
            },
            accept: function(a) {
                if (a) {
                    this.current && this.parents.unshift(this.current), this.current = a;
                    var b = this[a.type](a);
                    return this.current = this.parents.shift(), !this.mutating || b ? b : b !== !1 ? a : void 0;
                }
            },
            Program: function(a) {
                this.acceptArray(a.body);
            },
            MustacheStatement: function(a) {
                this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash");
            },
            BlockStatement: function(a) {
                this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash"), 
                this.acceptKey(a, "program"), this.acceptKey(a, "inverse");
            },
            PartialStatement: function(a) {
                this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash");
            },
            ContentStatement: function() {},
            CommentStatement: function() {},
            SubExpression: function(a) {
                this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash");
            },
            PartialExpression: function(a) {
                this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash");
            },
            PathExpression: function() {},
            StringLiteral: function() {},
            NumberLiteral: function() {},
            BooleanLiteral: function() {},
            Hash: function(a) {
                this.acceptArray(a.pairs);
            },
            HashPair: function(a) {
                this.acceptRequired(a, "value");
            }
        }, d = c;
    }(b, g), j = function(a) {
        "use strict";
        function b() {}
        function c(a, b, c) {
            void 0 === b && (b = a.length);
            var d = a[b - 1], e = a[b - 2];
            return d ? "ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c;
        }
        function d(a, b, c) {
            void 0 === b && (b = -1);
            var d = a[b + 1], e = a[b + 2];
            return d ? "ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c;
        }
        function e(a, b, c) {
            var d = a[null == b ? 0 : b + 1];
            if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
                var e = d.value;
                d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.value !== e;
            }
        }
        function f(a, b, c) {
            var d = a[null == b ? a.length - 1 : b - 1];
            if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
                var e = d.value;
                return d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.value !== e, 
                d.leftStripped;
            }
        }
        var g, h = a;
        return b.prototype = new h(), b.prototype.Program = function(a) {
            var b = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var g = a.body, h = 0, i = g.length; i > h; h++) {
                var j = g[h], k = this.accept(j);
                if (k) {
                    var l = c(g, h, b), m = d(g, h, b), n = k.openStandalone && l, o = k.closeStandalone && m, p = k.inlineStandalone && l && m;
                    k.close && e(g, h, !0), k.open && f(g, h, !0), p && (e(g, h), f(g, h) && "PartialStatement" === j.type && (j.indent = /([ \t]+$)/.exec(g[h - 1].original)[1])), 
                    n && (e((j.program || j.inverse).body), f(g, h)), o && (e(g, h), f((j.inverse || j.program).body));
                }
            }
            return a;
        }, b.prototype.BlockStatement = function(a) {
            this.accept(a.program), this.accept(a.inverse);
            var b = a.program || a.inverse, g = a.program && a.inverse, h = g, i = g;
            if (g && g.chained) for (h = g.body[0].program; i.chained; ) i = i.body[i.body.length - 1].program;
            var j = {
                open: a.openStrip.open,
                close: a.closeStrip.close,
                openStandalone: d(b.body),
                closeStandalone: c((h || b).body)
            };
            if (a.openStrip.close && e(b.body, null, !0), g) {
                var k = a.inverseStrip;
                k.open && f(b.body, null, !0), k.close && e(h.body, null, !0), a.closeStrip.open && f(i.body, null, !0), 
                c(b.body) && d(h.body) && (f(b.body), e(h.body));
            } else a.closeStrip.open && f(b.body, null, !0);
            return j;
        }, b.prototype.MustacheStatement = function(a) {
            return a.strip;
        }, b.prototype.PartialStatement = b.prototype.CommentStatement = function(a) {
            var b = a.strip || {};
            return {
                inlineStandalone: !0,
                open: b.open,
                close: b.close
            };
        }, g = b;
    }(i), k = function(a) {
        "use strict";
        function b(a, b) {
            this.source = a, this.start = {
                line: b.first_line,
                column: b.first_column
            }, this.end = {
                line: b.last_line,
                column: b.last_column
            };
        }
        function c(a, b) {
            return {
                open: "~" === a.charAt(2),
                close: "~" === b.charAt(b.length - 3)
            };
        }
        function d(a) {
            return a.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
        }
        function e(a, b, c) {
            c = this.locInfo(c);
            for (var d = a ? "@" : "", e = [], f = 0, g = "", h = 0, i = b.length; i > h; h++) {
                var k = b[h].part;
                if (d += (b[h].separator || "") + k, ".." === k || "." === k || "this" === k) {
                    if (e.length > 0) throw new j("Invalid path: " + d, {
                        loc: c
                    });
                    ".." === k && (f++, g += "../");
                } else e.push(k);
            }
            return new this.PathExpression(a, f, e, d, c);
        }
        function f(a, b, c, d, e, f) {
            var g = d.charAt(3) || d.charAt(2), h = "{" !== g && "&" !== g;
            return new this.MustacheStatement(a, b, c, h, e, this.locInfo(f));
        }
        function g(a, b, c, d) {
            if (a.path.original !== c) {
                var e = {
                    loc: a.path.loc
                };
                throw new j(a.path.original + " doesn't match " + c, e);
            }
            d = this.locInfo(d);
            var f = new this.Program([ b ], null, {}, d);
            return new this.BlockStatement(a.path, a.params, a.hash, f, void 0, {}, {}, {}, d);
        }
        function h(a, b, c, d, e, f) {
            if (d && d.path && a.path.original !== d.path.original) {
                var g = {
                    loc: a.path.loc
                };
                throw new j(a.path.original + " doesn't match " + d.path.original, g);
            }
            b.blockParams = a.blockParams;
            var h, i;
            return c && (c.chain && (c.program.body[0].closeStrip = d.strip), i = c.strip, h = c.program), 
            e && (e = h, h = b, b = e), new this.BlockStatement(a.path, a.params, a.hash, b, h, a.strip, i, d && d.strip, this.locInfo(f));
        }
        var i = {}, j = a;
        return i.SourceLocation = b, i.stripFlags = c, i.stripComment = d, i.preparePath = e, 
        i.prepareMustache = f, i.prepareRawBlock = g, i.prepareBlock = h, i;
    }(b), l = function(a, b, c, d, e) {
        "use strict";
        function f(a, b) {
            if ("Program" === a.type) return a;
            h.yy = m, m.locInfo = function(a) {
                return new m.SourceLocation(b && b.srcName, a);
            };
            var c = new j();
            return c.accept(h.parse(a));
        }
        var g = {}, h = a, i = b, j = c, k = d, l = e.extend;
        g.parser = h;
        var m = {};
        return l(m, k, i), g.parse = f, g;
    }(h, g, j, k, a), m = function(a, b, c) {
        "use strict";
        function d() {}
        function e(a, b, c) {
            if (null == a || "string" != typeof a && "Program" !== a.type) throw new j("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
            b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
            var d = c.parse(a, b), e = new c.Compiler().compile(d, b);
            return new c.JavaScriptCompiler().compile(e, b);
        }
        function f(a, b, c) {
            function d() {
                var d = c.parse(a, b), e = new c.Compiler().compile(d, b), f = new c.JavaScriptCompiler().compile(e, b, void 0, !0);
                return c.template(f);
            }
            if (null == a || "string" != typeof a && "Program" !== a.type) throw new j("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
            b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
            var e, f = function(a, b) {
                return e || (e = d()), e.call(this, a, b);
            };
            return f._setup = function(a) {
                return e || (e = d()), e._setup(a);
            }, f._child = function(a, b, c, f) {
                return e || (e = d()), e._child(a, b, c, f);
            }, f;
        }
        function g(a, b) {
            if (a === b) return !0;
            if (k(a) && k(b) && a.length === b.length) {
                for (var c = 0; c < a.length; c++) if (!g(a[c], b[c])) return !1;
                return !0;
            }
        }
        function h(a) {
            if (!a.path.parts) {
                var b = a.path;
                a.path = new m.PathExpression(!1, 0, [ b.original + "" ], b.original + "", b.loc);
            }
        }
        var i = {}, j = a, k = b.isArray, l = b.indexOf, m = c, n = [].slice;
        return i.Compiler = d, d.prototype = {
            compiler: d,
            equals: function(a) {
                var b = this.opcodes.length;
                if (a.opcodes.length !== b) return !1;
                for (var c = 0; b > c; c++) {
                    var d = this.opcodes[c], e = a.opcodes[c];
                    if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1;
                }
                for (b = this.children.length, c = 0; b > c; c++) if (!this.children[c].equals(a.children[c])) return !1;
                return !0;
            },
            guid: 0,
            compile: function(a, b) {
                this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b, this.stringParams = b.stringParams, 
                this.trackIds = b.trackIds, b.blockParams = b.blockParams || [];
                var c = b.knownHelpers;
                if (b.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0,
                    lookup: !0
                }, c) for (var d in c) b.knownHelpers[d] = c[d];
                return this.accept(a);
            },
            compileProgram: function(a) {
                var b = new this.compiler().compile(a, this.options), c = this.guid++;
                return this.usePartial = this.usePartial || b.usePartial, this.children[c] = b, 
                this.useDepths = this.useDepths || b.useDepths, c;
            },
            accept: function(a) {
                this.sourceNode.unshift(a);
                var b = this[a.type](a);
                return this.sourceNode.shift(), b;
            },
            Program: function(a) {
                this.options.blockParams.unshift(a.blockParams);
                for (var b = a.body, c = 0, d = b.length; d > c; c++) this.accept(b[c]);
                return this.options.blockParams.shift(), this.isSimple = 1 === d, this.blockParams = a.blockParams ? a.blockParams.length : 0, 
                this;
            },
            BlockStatement: function(a) {
                h(a);
                var b = a.program, c = a.inverse;
                b = b && this.compileProgram(b), c = c && this.compileProgram(c);
                var d = this.classifySexpr(a);
                "helper" === d ? this.helperSexpr(a, b, c) : "simple" === d ? (this.simpleSexpr(a), 
                this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), 
                this.opcode("blockValue", a.path.original)) : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), 
                this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), 
                this.opcode("append");
            },
            PartialStatement: function(a) {
                this.usePartial = !0;
                var b = a.params;
                if (b.length > 1) throw new j("Unsupported number of partial arguments: " + b.length, a);
                b.length || b.push({
                    type: "PathExpression",
                    parts: [],
                    depth: 0
                });
                var c = a.name.original, d = "SubExpression" === a.name.type;
                d && this.accept(a.name), this.setupFullMustacheParams(a, void 0, void 0, !0);
                var e = a.indent || "";
                this.options.preventIndent && e && (this.opcode("appendContent", e), e = ""), this.opcode("invokePartial", d, c, e), 
                this.opcode("append");
            },
            MustacheStatement: function(a) {
                this.SubExpression(a), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
            },
            ContentStatement: function(a) {
                a.value && this.opcode("appendContent", a.value);
            },
            CommentStatement: function() {},
            SubExpression: function(a) {
                h(a);
                var b = this.classifySexpr(a);
                "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a);
            },
            ambiguousSexpr: function(a, b, c) {
                var d = a.path, e = d.parts[0], f = null != b || null != c;
                this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), 
                this.accept(d), this.opcode("invokeAmbiguous", e, f);
            },
            simpleSexpr: function(a) {
                this.accept(a.path), this.opcode("resolvePossibleLambda");
            },
            helperSexpr: function(a, b, c) {
                var d = this.setupFullMustacheParams(a, b, c), e = a.path, f = e.parts[0];
                if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f); else {
                    if (this.options.knownHelpersOnly) throw new j("You specified knownHelpersOnly, but used the unknown helper " + f, a);
                    e.falsy = !0, this.accept(e), this.opcode("invokeHelper", d.length, e.original, m.helpers.simpleId(e));
                }
            },
            PathExpression: function(a) {
                this.addDepth(a.depth), this.opcode("getContext", a.depth);
                var b = a.parts[0], c = m.helpers.scopedId(a), d = !a.depth && !c && this.blockParamIndex(b);
                d ? this.opcode("lookupBlockParam", d, a.parts) : b ? a.data ? (this.options.data = !0, 
                this.opcode("lookupData", a.depth, a.parts)) : this.opcode("lookupOnContext", a.parts, a.falsy, c) : this.opcode("pushContext");
            },
            StringLiteral: function(a) {
                this.opcode("pushString", a.value);
            },
            NumberLiteral: function(a) {
                this.opcode("pushLiteral", a.value);
            },
            BooleanLiteral: function(a) {
                this.opcode("pushLiteral", a.value);
            },
            Hash: function(a) {
                var b, c, d = a.pairs;
                for (this.opcode("pushHash"), b = 0, c = d.length; c > b; b++) this.pushParam(d[b].value);
                for (;b--; ) this.opcode("assignToHash", d[b].key);
                this.opcode("popHash");
            },
            opcode: function(a) {
                this.opcodes.push({
                    opcode: a,
                    args: n.call(arguments, 1),
                    loc: this.sourceNode[0].loc
                });
            },
            addDepth: function(a) {
                a && (this.useDepths = !0);
            },
            classifySexpr: function(a) {
                var b = m.helpers.simpleId(a.path), c = b && !!this.blockParamIndex(a.path.parts[0]), d = !c && m.helpers.helperExpression(a), e = !c && (d || b), f = this.options;
                if (e && !d) {
                    var g = a.path.parts[0];
                    f.knownHelpers[g] ? d = !0 : f.knownHelpersOnly && (e = !1);
                }
                return d ? "helper" : e ? "ambiguous" : "simple";
            },
            pushParams: function(a) {
                for (var b = 0, c = a.length; c > b; b++) this.pushParam(a[b]);
            },
            pushParam: function(a) {
                var b = null != a.value ? a.value : a.original || "";
                if (this.stringParams) b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), 
                a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", b, a.type), 
                "SubExpression" === a.type && this.accept(a); else {
                    if (this.trackIds) {
                        var c;
                        if (!a.parts || m.helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), 
                        c) {
                            var d = a.parts.slice(1).join(".");
                            this.opcode("pushId", "BlockParam", c, d);
                        } else b = a.original || b, b.replace && (b = b.replace(/^\.\//g, "").replace(/^\.$/g, "")), 
                        this.opcode("pushId", a.type, b);
                    }
                    this.accept(a);
                }
            },
            setupFullMustacheParams: function(a, b, c, d) {
                var e = a.params;
                return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), 
                a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e;
            },
            blockParamIndex: function(a) {
                for (var b = 0, c = this.options.blockParams.length; c > b; b++) {
                    var d = this.options.blockParams[b], e = d && l(d, a);
                    if (d && e >= 0) return [ b, e ];
                }
            }
        }, i.precompile = e, i.compile = f, i;
    }(b, a, g), n = function(a) {
        "use strict";
        function b(a, b, c) {
            if (e(a)) {
                for (var d = [], f = 0, g = a.length; g > f; f++) d.push(b.wrap(a[f], c));
                return d;
            }
            return "boolean" == typeof a || "number" == typeof a ? a + "" : a;
        }
        function c(a) {
            this.srcFile = a, this.source = [];
        }
        var d, e = a.isArray;
        try {
            var f = require("source-map"), g = f.SourceNode;
        } catch (h) {
            g = function(a, b, c, d) {
                this.src = "", d && this.add(d);
            }, g.prototype = {
                add: function(a) {
                    e(a) && (a = a.join("")), this.src += a;
                },
                prepend: function(a) {
                    e(a) && (a = a.join("")), this.src = a + this.src;
                },
                toStringWithSourceMap: function() {
                    return {
                        code: this.toString()
                    };
                },
                toString: function() {
                    return this.src;
                }
            };
        }
        return c.prototype = {
            prepend: function(a, b) {
                this.source.unshift(this.wrap(a, b));
            },
            push: function(a, b) {
                this.source.push(this.wrap(a, b));
            },
            merge: function() {
                var a = this.empty();
                return this.each(function(b) {
                    a.add([ "  ", b, "\n" ]);
                }), a;
            },
            each: function(a) {
                for (var b = 0, c = this.source.length; c > b; b++) a(this.source[b]);
            },
            empty: function(a) {
                return a = a || this.currentLocation || {
                    start: {}
                }, new g(a.start.line, a.start.column, this.srcFile);
            },
            wrap: function(a, c) {
                return a instanceof g ? a : (c = c || this.currentLocation || {
                    start: {}
                }, a = b(a, this, c), new g(c.start.line, c.start.column, this.srcFile, a));
            },
            functionCall: function(a, b, c) {
                return c = this.generateList(c), this.wrap([ a, b ? "." + b + "(" : "(", c, ")" ]);
            },
            quotedString: function(a) {
                return '"' + (a + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
            },
            objectLiteral: function(a) {
                var c = [];
                for (var d in a) if (a.hasOwnProperty(d)) {
                    var e = b(a[d], this);
                    "undefined" !== e && c.push([ this.quotedString(d), ":", e ]);
                }
                var f = this.generateList(c);
                return f.prepend("{"), f.add("}"), f;
            },
            generateList: function(a, c) {
                for (var d = this.empty(c), e = 0, f = a.length; f > e; e++) e && d.add(","), d.add(b(a[e], this, c));
                return d;
            },
            generateArray: function(a, b) {
                var c = this.generateList(a, b);
                return c.prepend("["), c.add("]"), c;
            }
        }, d = c;
    }(a), o = function(a, b, c, d) {
        "use strict";
        function e(a) {
            this.value = a;
        }
        function f() {}
        function g(a, b, c, d) {
            var e = b.popStack(), f = 0, g = c.length;
            for (a && g--; g > f; f++) e = b.nameLookup(e, c[f], d);
            return a ? [ b.aliasable("this.strict"), "(", e, ", ", b.quotedString(c[f]), ")" ] : e;
        }
        var h, i = a.COMPILER_REVISION, j = a.REVISION_CHANGES, k = b, l = c.isArray, m = d;
        f.prototype = {
            nameLookup: function(a, b) {
                return f.isValidJavaScriptVariableName(b) ? [ a, ".", b ] : [ a, "['", b, "']" ];
            },
            depthedLookup: function(a) {
                return [ this.aliasable("this.lookup"), '(depths, "', a, '")' ];
            },
            compilerInfo: function() {
                var a = i, b = j[a];
                return [ a, b ];
            },
            appendToBuffer: function(a, b, c) {
                return l(a) || (a = [ a ]), a = this.source.wrap(a, b), this.environment.isSimple ? [ "return ", a, ";" ] : c ? [ "buffer += ", a, ";" ] : (a.appendToBuffer = !0, 
                a);
            },
            initializeBuffer: function() {
                return this.quotedString("");
            },
            compile: function(a, b, c, d) {
                this.environment = a, this.options = b, this.stringParams = this.options.stringParams, 
                this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, 
                this.isChild = !!c, this.context = c || {
                    programs: [],
                    environments: []
                }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, 
                this.registers = {
                    list: []
                }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], 
                this.compileChildren(a, b), this.useDepths = this.useDepths || a.useDepths || this.options.compat, 
                this.useBlockParams = this.useBlockParams || a.useBlockParams;
                var e, f, g, h, i = a.opcodes;
                for (g = 0, h = i.length; h > g; g++) e = i[g], this.source.currentLocation = e.loc, 
                f = f || e.loc, this[e.opcode].apply(this, e.args);
                if (this.source.currentLocation = f, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new k("Compile completed with content left on stack");
                var j = this.createFunctionContext(d);
                if (this.isChild) return j;
                var l = {
                    compiler: this.compilerInfo(),
                    main: j
                }, m = this.context.programs;
                for (g = 0, h = m.length; h > g; g++) m[g] && (l[g] = m[g]);
                return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), 
                this.useDepths && (l.useDepths = !0), this.useBlockParams && (l.useBlockParams = !0), 
                this.options.compat && (l.compat = !0), d ? l.compilerOptions = this.options : (l.compiler = JSON.stringify(l.compiler), 
                this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                }, l = this.objectLiteral(l), b.srcName ? (l = l.toStringWithSourceMap({
                    file: b.destName
                }), l.map = l.map && l.map.toString()) : l = l.toString()), l;
            },
            preamble: function() {
                this.lastContext = 0, this.source = new m(this.options.srcName);
            },
            createFunctionContext: function(a) {
                var b = "", c = this.stackVars.concat(this.registers.list);
                c.length > 0 && (b += ", " + c.join(", "));
                var d = 0;
                for (var e in this.aliases) {
                    var f = this.aliases[e];
                    this.aliases.hasOwnProperty(e) && f.children && f.referenceCount > 1 && (b += ", alias" + ++d + "=" + e, 
                    f.children[0] = "alias" + d);
                }
                var g = [ "depth0", "helpers", "partials", "data" ];
                (this.useBlockParams || this.useDepths) && g.push("blockParams"), this.useDepths && g.push("depths");
                var h = this.mergeSource(b);
                return a ? (g.push(h), Function.apply(this, g)) : this.source.wrap([ "function(", g.join(","), ") {\n  ", h, "}" ]);
            },
            mergeSource: function(a) {
                var b, c, d, e, f = this.environment.isSimple, g = !this.forceBuffer;
                return this.source.each(function(a) {
                    a.appendToBuffer ? (d ? a.prepend("  + ") : d = a, e = a) : (d && (c ? d.prepend("buffer += ") : b = !0, 
                    e.add(";"), d = e = void 0), c = !0, f || (g = !1));
                }), g ? d ? (d.prepend("return "), e.add(";")) : c || this.source.push('return "";') : (a += ", buffer = " + (b ? "" : this.initializeBuffer()), 
                d ? (d.prepend("return buffer + "), e.add(";")) : this.source.push("return buffer;")), 
                a && this.source.prepend("var " + a.substring(2) + (b ? "" : ";\n")), this.source.merge();
            },
            blockValue: function(a) {
                var b = this.aliasable("helpers.blockHelperMissing"), c = [ this.contextName(0) ];
                this.setupHelperArgs(a, 0, c);
                var d = this.popStack();
                c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c));
            },
            ambiguousBlockValue: function() {
                var a = this.aliasable("helpers.blockHelperMissing"), b = [ this.contextName(0) ];
                this.setupHelperArgs("", 0, b, !0), this.flushInline();
                var c = this.topStack();
                b.splice(1, 0, c), this.pushSource([ "if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}" ]);
            },
            appendContent: function(a) {
                this.pendingContent ? a = this.pendingContent + a : this.pendingLocation = this.source.currentLocation, 
                this.pendingContent = a;
            },
            append: function() {
                if (this.isInline()) this.replaceStack(function(a) {
                    return [ " != null ? ", a, ' : ""' ];
                }), this.pushSource(this.appendToBuffer(this.popStack())); else {
                    var a = this.popStack();
                    this.pushSource([ "if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }" ]), 
                    this.environment.isSimple && this.pushSource([ "else { ", this.appendToBuffer("''", void 0, !0), " }" ]);
                }
            },
            appendEscaped: function() {
                this.pushSource(this.appendToBuffer([ this.aliasable("this.escapeExpression"), "(", this.popStack(), ")" ]));
            },
            getContext: function(a) {
                this.lastContext = a;
            },
            pushContext: function() {
                this.pushStackLiteral(this.contextName(this.lastContext));
            },
            lookupOnContext: function(a, b, c) {
                var d = 0;
                c || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[d++])), 
                this.resolvePath("context", a, d, b);
            },
            lookupBlockParam: function(a, b) {
                this.useBlockParams = !0, this.push([ "blockParams[", a[0], "][", a[1], "]" ]), 
                this.resolvePath("context", b, 1);
            },
            lookupData: function(a, b) {
                a ? this.pushStackLiteral("this.data(data, " + a + ")") : this.pushStackLiteral("data"), 
                this.resolvePath("data", b, 0, !0);
            },
            resolvePath: function(a, b, c, d) {
                if (this.options.strict || this.options.assumeObjects) return void this.push(g(this.options.strict, this, b, a));
                for (var e = b.length; e > c; c++) this.replaceStack(function(e) {
                    var f = this.nameLookup(e, b[c], a);
                    return d ? [ " && ", f ] : [ " != null ? ", f, " : ", e ];
                });
            },
            resolvePossibleLambda: function() {
                this.push([ this.aliasable("this.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")" ]);
            },
            pushStringParam: function(a, b) {
                this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a));
            },
            emptyHash: function(a) {
                this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), 
                this.pushStackLiteral(a ? "undefined" : "{}");
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash), this.hash = {
                    values: [],
                    types: [],
                    contexts: [],
                    ids: []
                };
            },
            popHash: function() {
                var a = this.hash;
                this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a.ids)), 
                this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))), 
                this.push(this.objectLiteral(a.values));
            },
            pushString: function(a) {
                this.pushStackLiteral(this.quotedString(a));
            },
            pushLiteral: function(a) {
                this.pushStackLiteral(a);
            },
            pushProgram: function(a) {
                null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null);
            },
            invokeHelper: function(a, b, c) {
                var d = this.popStack(), e = this.setupHelper(a, b), f = c ? [ e.name, " || " ] : "", g = [ "(" ].concat(f, d);
                this.options.strict || g.push(" || ", this.aliasable("helpers.helperMissing")), 
                g.push(")"), this.push(this.source.functionCall(g, "call", e.callParams));
            },
            invokeKnownHelper: function(a, b) {
                var c = this.setupHelper(a, b);
                this.push(this.source.functionCall(c.name, "call", c.callParams));
            },
            invokeAmbiguous: function(a, b) {
                this.useRegister("helper");
                var c = this.popStack();
                this.emptyHash();
                var d = this.setupHelper(0, a, b), e = this.lastHelper = this.nameLookup("helpers", a, "helper"), f = [ "(", "(helper = ", e, " || ", c, ")" ];
                this.options.strict || (f[0] = "(helper = ", f.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), 
                this.push([ "(", f, d.paramsInit ? [ "),(", d.paramsInit ] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))" ]);
            },
            invokePartial: function(a, b, c) {
                var d = [], e = this.setupParams(b, 1, d, !1);
                a && (b = this.popStack(), delete e.name), c && (e.indent = JSON.stringify(c)), 
                e.helpers = "helpers", e.partials = "partials", a ? d.unshift(b) : d.unshift(this.nameLookup("partials", b, "partial")), 
                this.options.compat && (e.depths = "depths"), e = this.objectLiteral(e), d.push(e), 
                this.push(this.source.functionCall("this.invokePartial", "", d));
            },
            assignToHash: function(a) {
                var b, c, d, e = this.popStack();
                this.trackIds && (d = this.popStack()), this.stringParams && (c = this.popStack(), 
                b = this.popStack());
                var f = this.hash;
                b && (f.contexts[a] = b), c && (f.types[a] = c), d && (f.ids[a] = d), f.values[a] = e;
            },
            pushId: function(a, b, c) {
                "BlockParam" === a ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : "")) : "PathExpression" === a ? this.pushString(b) : "SubExpression" === a ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
            },
            compiler: f,
            compileChildren: function(a, b) {
                for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                    c = e[f], d = new this.compiler();
                    var h = this.matchExistingProgram(c);
                    null == h ? (this.context.programs.push(""), h = this.context.programs.length, c.index = h, 
                    c.name = "program" + h, this.context.programs[h] = d.compile(c, b, this.context, !this.precompile), 
                    this.context.environments[h] = c, this.useDepths = this.useDepths || d.useDepths, 
                    this.useBlockParams = this.useBlockParams || d.useBlockParams) : (c.index = h, c.name = "program" + h, 
                    this.useDepths = this.useDepths || c.useDepths, this.useBlockParams = this.useBlockParams || c.useBlockParams);
                }
            },
            matchExistingProgram: function(a) {
                for (var b = 0, c = this.context.environments.length; c > b; b++) {
                    var d = this.context.environments[b];
                    if (d && d.equals(a)) return b;
                }
            },
            programExpression: function(a) {
                var b = this.environment.children[a], c = [ b.index, "data", b.blockParams ];
                return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), 
                "this.program(" + c.join(", ") + ")";
            },
            useRegister: function(a) {
                this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a));
            },
            push: function(a) {
                return a instanceof e || (a = this.source.wrap(a)), this.inlineStack.push(a), a;
            },
            pushStackLiteral: function(a) {
                this.push(new e(a));
            },
            pushSource: function(a) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), 
                this.pendingContent = void 0), a && this.source.push(a);
            },
            replaceStack: function(a) {
                var b, c, d, f = [ "(" ];
                if (!this.isInline()) throw new k("replaceStack on non-inline");
                var g = this.popStack(!0);
                if (g instanceof e) b = [ g.value ], f = [ "(", b ], d = !0; else {
                    c = !0;
                    var h = this.incrStack();
                    f = [ "((", this.push(h), " = ", g, ")" ], b = this.topStack();
                }
                var i = a.call(this, b);
                d || this.popStack(), c && this.stackSlot--, this.push(f.concat(i, ")"));
            },
            incrStack: function() {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), 
                this.topStackName();
            },
            topStackName: function() {
                return "stack" + this.stackSlot;
            },
            flushInline: function() {
                var a = this.inlineStack;
                this.inlineStack = [];
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    if (d instanceof e) this.compileStack.push(d); else {
                        var f = this.incrStack();
                        this.pushSource([ f, " = ", d, ";" ]), this.compileStack.push(f);
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length;
            },
            popStack: function(a) {
                var b = this.isInline(), c = (b ? this.inlineStack : this.compileStack).pop();
                if (!a && c instanceof e) return c.value;
                if (!b) {
                    if (!this.stackSlot) throw new k("Invalid stack pop");
                    this.stackSlot--;
                }
                return c;
            },
            topStack: function() {
                var a = this.isInline() ? this.inlineStack : this.compileStack, b = a[a.length - 1];
                return b instanceof e ? b.value : b;
            },
            contextName: function(a) {
                return this.useDepths && a ? "depths[" + a + "]" : "depth" + a;
            },
            quotedString: function(a) {
                return this.source.quotedString(a);
            },
            objectLiteral: function(a) {
                return this.source.objectLiteral(a);
            },
            aliasable: function(a) {
                var b = this.aliases[a];
                return b ? (b.referenceCount++, b) : (b = this.aliases[a] = this.source.wrap(a), 
                b.aliasable = !0, b.referenceCount = 1, b);
            },
            setupHelper: function(a, b, c) {
                var d = [], e = this.setupHelperArgs(b, a, d, c), f = this.nameLookup("helpers", b, "helper");
                return {
                    params: d,
                    paramsInit: e,
                    name: f,
                    callParams: [ this.contextName(0) ].concat(d)
                };
            },
            setupParams: function(a, b, c) {
                var d, e = {}, f = [], g = [], h = [];
                e.name = this.quotedString(a), e.hash = this.popStack(), this.trackIds && (e.hashIds = this.popStack()), 
                this.stringParams && (e.hashTypes = this.popStack(), e.hashContexts = this.popStack());
                var i = this.popStack(), j = this.popStack();
                (j || i) && (e.fn = j || "this.noop", e.inverse = i || "this.noop");
                for (var k = b; k--; ) d = this.popStack(), c[k] = d, this.trackIds && (h[k] = this.popStack()), 
                this.stringParams && (g[k] = this.popStack(), f[k] = this.popStack());
                return this.trackIds && (e.ids = this.source.generateArray(h)), this.stringParams && (e.types = this.source.generateArray(g), 
                e.contexts = this.source.generateArray(f)), this.options.data && (e.data = "data"), 
                this.useBlockParams && (e.blockParams = "blockParams"), e;
            },
            setupHelperArgs: function(a, b, c, d) {
                var e = this.setupParams(a, b, c, !0);
                return e = this.objectLiteral(e), d ? (this.useRegister("options"), c.push("options"), 
                [ "options=", e ]) : (c.push(e), "");
            }
        };
        for (var n = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), o = f.RESERVED_WORDS = {}, p = 0, q = n.length; q > p; p++) o[n[p]] = !0;
        return f.isValidJavaScriptVariableName = function(a) {
            return !f.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a);
        }, h = f;
    }(c, b, a, n), p = function(a, b, c, d, e) {
        "use strict";
        var f, g = a, h = b, i = c.parser, j = c.parse, k = d.Compiler, l = d.compile, m = d.precompile, n = e, o = g.create, p = function() {
            var a = o();
            return a.compile = function(b, c) {
                return l(b, c, a);
            }, a.precompile = function(b, c) {
                return m(b, c, a);
            }, a.AST = h, a.Compiler = k, a.JavaScriptCompiler = n, a.Parser = i, a.parse = j, 
            a;
        };
        g = p(), g.create = p;
        var q = "undefined" != typeof global ? global : window, r = q.Handlebars;
        return g.noConflict = function() {
            q.Handlebars === g && (q.Handlebars = r);
        }, g["default"] = g, f = g;
    }(f, g, l, m, o);
    return p;
}), function(a, b) {
    if ("function" == typeof define && define.amd) define([ "underscore", "jquery", "exports" ], function(c, d, e) {
        a.Backbone = b(a, e, c, d);
    }); else if ("undefined" != typeof exports) {
        var c = require("underscore");
        b(a, exports, c);
    } else a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$);
}(this, function(a, b, c, d) {
    var e = a.Backbone, f = [], g = (f.push, f.slice);
    f.splice;
    b.VERSION = "1.1.2", b.$ = d, b.noConflict = function() {
        return a.Backbone = e, this;
    }, b.emulateHTTP = !1, b.emulateJSON = !1;
    var h = b.Events = {
        on: function(a, b, c) {
            if (!j(this, "on", a, [ b, c ]) || !b) return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({
                callback: b,
                context: c,
                ctx: c || this
            }), this;
        },
        once: function(a, b, d) {
            if (!j(this, "once", a, [ b, d ]) || !b) return this;
            var e = this, f = c.once(function() {
                e.off(a, f), b.apply(this, arguments);
            });
            return f._callback = b, this.on(a, f, d);
        },
        off: function(a, b, d) {
            var e, f, g, h, i, k, l, m;
            if (!this._events || !j(this, "off", a, [ b, d ])) return this;
            if (!a && !b && !d) return this._events = void 0, this;
            for (h = a ? [ a ] : c.keys(this._events), i = 0, k = h.length; k > i; i++) if (a = h[i], 
            g = this._events[a]) {
                if (this._events[a] = e = [], b || d) for (l = 0, m = g.length; m > l; l++) f = g[l], 
                (b && b !== f.callback && b !== f.callback._callback || d && d !== f.context) && e.push(f);
                e.length || delete this._events[a];
            }
            return this;
        },
        trigger: function(a) {
            if (!this._events) return this;
            var b = g.call(arguments, 1);
            if (!j(this, "trigger", a, b)) return this;
            var c = this._events[a], d = this._events.all;
            return c && k(c, b), d && k(d, arguments), this;
        },
        stopListening: function(a, b, d) {
            var e = this._listeningTo;
            if (!e) return this;
            var f = !b && !d;
            d || "object" != typeof b || (d = this), a && ((e = {})[a._listenId] = a);
            for (var g in e) a = e[g], a.off(b, d, this), (f || c.isEmpty(a._events)) && delete this._listeningTo[g];
            return this;
        }
    }, i = /\s+/, j = function(a, b, c, d) {
        if (!c) return !0;
        if ("object" == typeof c) {
            for (var e in c) a[b].apply(a, [ e, c[e] ].concat(d));
            return !1;
        }
        if (i.test(c)) {
            for (var f = c.split(i), g = 0, h = f.length; h > g; g++) a[b].apply(a, [ f[g] ].concat(d));
            return !1;
        }
        return !0;
    }, k = function(a, b) {
        var c, d = -1, e = a.length, f = b[0], g = b[1], h = b[2];
        switch (b.length) {
          case 0:
            for (;++d < e; ) (c = a[d]).callback.call(c.ctx);
            return;

          case 1:
            for (;++d < e; ) (c = a[d]).callback.call(c.ctx, f);
            return;

          case 2:
            for (;++d < e; ) (c = a[d]).callback.call(c.ctx, f, g);
            return;

          case 3:
            for (;++d < e; ) (c = a[d]).callback.call(c.ctx, f, g, h);
            return;

          default:
            for (;++d < e; ) (c = a[d]).callback.apply(c.ctx, b);
            return;
        }
    }, l = {
        listenTo: "on",
        listenToOnce: "once"
    };
    c.each(l, function(a, b) {
        h[b] = function(b, d, e) {
            var f = this._listeningTo || (this._listeningTo = {}), g = b._listenId || (b._listenId = c.uniqueId("l"));
            return f[g] = b, e || "object" != typeof d || (e = this), b[a](d, e, this), this;
        };
    }), h.bind = h.on, h.unbind = h.off, c.extend(b, h);
    var m = b.Model = function(a, b) {
        var d = a || {};
        b || (b = {}), this.cid = c.uniqueId("c"), this.attributes = {}, b.collection && (this.collection = b.collection), 
        b.parse && (d = this.parse(d, b) || {}), d = c.defaults({}, d, c.result(this, "defaults")), 
        this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments);
    };
    c.extend(m.prototype, h, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(a) {
            return c.clone(this.attributes);
        },
        sync: function() {
            return b.sync.apply(this, arguments);
        },
        get: function(a) {
            return this.attributes[a];
        },
        escape: function(a) {
            return c.escape(this.get(a));
        },
        has: function(a) {
            return null != this.get(a);
        },
        set: function(a, b, d) {
            var e, f, g, h, i, j, k, l;
            if (null == a) return this;
            if ("object" == typeof a ? (f = a, d = b) : (f = {})[a] = b, d || (d = {}), !this._validate(f, d)) return !1;
            g = d.unset, i = d.silent, h = [], j = this._changing, this._changing = !0, j || (this._previousAttributes = c.clone(this.attributes), 
            this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in f && (this.id = f[this.idAttribute]);
            for (e in f) b = f[e], c.isEqual(l[e], b) || h.push(e), c.isEqual(k[e], b) ? delete this.changed[e] : this.changed[e] = b, 
            g ? delete l[e] : l[e] = b;
            if (!i) {
                h.length && (this._pending = d);
                for (var m = 0, n = h.length; n > m; m++) this.trigger("change:" + h[m], this, l[h[m]], d);
            }
            if (j) return this;
            if (!i) for (;this._pending; ) d = this._pending, this._pending = !1, this.trigger("change", this, d);
            return this._pending = !1, this._changing = !1, this;
        },
        unset: function(a, b) {
            return this.set(a, void 0, c.extend({}, b, {
                unset: !0
            }));
        },
        clear: function(a) {
            var b = {};
            for (var d in this.attributes) b[d] = void 0;
            return this.set(b, c.extend({}, a, {
                unset: !0
            }));
        },
        hasChanged: function(a) {
            return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a);
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? c.clone(this.changed) : !1;
            var b, d = !1, e = this._changing ? this._previousAttributes : this.attributes;
            for (var f in a) c.isEqual(e[f], b = a[f]) || ((d || (d = {}))[f] = b);
            return d;
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null;
        },
        previousAttributes: function() {
            return c.clone(this._previousAttributes);
        },
        fetch: function(a) {
            a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
            var b = this, d = a.success;
            return a.success = function(c) {
                return b.set(b.parse(c, a), a) ? (d && d(b, c, a), void b.trigger("sync", b, c, a)) : !1;
            }, L(this, a), this.sync("read", this, a);
        },
        save: function(a, b, d) {
            var e, f, g, h = this.attributes;
            if (null == a || "object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d = c.extend({
                validate: !0
            }, d), e && !d.wait) {
                if (!this.set(e, d)) return !1;
            } else if (!this._validate(e, d)) return !1;
            e && d.wait && (this.attributes = c.extend({}, h, e)), void 0 === d.parse && (d.parse = !0);
            var i = this, j = d.success;
            return d.success = function(a) {
                i.attributes = h;
                var b = i.parse(a, d);
                return d.wait && (b = c.extend(e || {}, b)), c.isObject(b) && !i.set(b, d) ? !1 : (j && j(i, a, d), 
                void i.trigger("sync", i, a, d));
            }, L(this, d), f = this.isNew() ? "create" : d.patch ? "patch" : "update", "patch" === f && (d.attrs = e), 
            g = this.sync(f, this, d), e && d.wait && (this.attributes = h), g;
        },
        destroy: function(a) {
            a = a ? c.clone(a) : {};
            var b = this, d = a.success, e = function() {
                b.trigger("destroy", b, b.collection, a);
            };
            if (a.success = function(c) {
                (a.wait || b.isNew()) && e(), d && d(b, c, a), b.isNew() || b.trigger("sync", b, c, a);
            }, this.isNew()) return a.success(), !1;
            L(this, a);
            var f = this.sync("delete", this, a);
            return a.wait || e(), f;
        },
        url: function() {
            var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || K();
            return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id);
        },
        parse: function(a, b) {
            return a;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return !this.has(this.idAttribute);
        },
        isValid: function(a) {
            return this._validate({}, c.extend(a || {}, {
                validate: !0
            }));
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate) return !0;
            a = c.extend({}, this.attributes, a);
            var d = this.validationError = this.validate(a, b) || null;
            return d ? (this.trigger("invalid", this, d, c.extend(b, {
                validationError: d
            })), !1) : !0;
        }
    });
    var n = [ "keys", "values", "pairs", "invert", "pick", "omit" ];
    c.each(n, function(a) {
        m.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.attributes), c[a].apply(c, b);
        };
    });
    var o = b.Collection = function(a, b) {
        b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), 
        this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({
            silent: !0
        }, b));
    }, p = {
        add: !0,
        remove: !0,
        merge: !0
    }, q = {
        add: !0,
        remove: !1
    };
    c.extend(o.prototype, h, {
        model: m,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a);
            });
        },
        sync: function() {
            return b.sync.apply(this, arguments);
        },
        add: function(a, b) {
            return this.set(a, c.extend({
                merge: !1
            }, b, q));
        },
        remove: function(a, b) {
            var d = !c.isArray(a);
            a = d ? [ a ] : c.clone(a), b || (b = {});
            var e, f, g, h;
            for (e = 0, f = a.length; f > e; e++) h = a[e] = this.get(a[e]), h && (delete this._byId[h.id], 
            delete this._byId[h.cid], g = this.indexOf(h), this.models.splice(g, 1), this.length--, 
            b.silent || (b.index = g, h.trigger("remove", h, this, b)), this._removeReference(h, b));
            return d ? a[0] : a;
        },
        set: function(a, b) {
            b = c.defaults({}, b, p), b.parse && (a = this.parse(a, b));
            var d = !c.isArray(a);
            a = d ? a ? [ a ] : [] : c.clone(a);
            var e, f, g, h, i, j, k, l = b.at, n = this.model, o = this.comparator && null == l && b.sort !== !1, q = c.isString(this.comparator) ? this.comparator : null, r = [], s = [], t = {}, u = b.add, v = b.merge, w = b.remove, x = !o && u && w ? [] : !1;
            for (e = 0, f = a.length; f > e; e++) {
                if (i = a[e] || {}, g = i instanceof m ? h = i : i[n.prototype.idAttribute || "id"], 
                j = this.get(g)) w && (t[j.cid] = !0), v && (i = i === h ? h.attributes : i, b.parse && (i = j.parse(i, b)), 
                j.set(i, b), o && !k && j.hasChanged(q) && (k = !0)), a[e] = j; else if (u) {
                    if (h = a[e] = this._prepareModel(i, b), !h) continue;
                    r.push(h), this._addReference(h, b);
                }
                h = j || h, !x || !h.isNew() && t[h.id] || x.push(h), t[h.id] = !0;
            }
            if (w) {
                for (e = 0, f = this.length; f > e; ++e) t[(h = this.models[e]).cid] || s.push(h);
                s.length && this.remove(s, b);
            }
            if (r.length || x && x.length) if (o && (k = !0), this.length += r.length, null != l) for (e = 0, 
            f = r.length; f > e; e++) this.models.splice(l + e, 0, r[e]); else {
                x && (this.models.length = 0);
                var y = x || r;
                for (e = 0, f = y.length; f > e; e++) this.models.push(y[e]);
            }
            if (k && this.sort({
                silent: !0
            }), !b.silent) {
                for (e = 0, f = r.length; f > e; e++) (h = r[e]).trigger("add", h, this, b);
                (k || x && x.length) && this.trigger("sort", this, b);
            }
            return d ? a[0] : a;
        },
        reset: function(a, b) {
            b || (b = {});
            for (var d = 0, e = this.models.length; e > d; d++) this._removeReference(this.models[d], b);
            return b.previousModels = this.models, this._reset(), a = this.add(a, c.extend({
                silent: !0
            }, b)), b.silent || this.trigger("reset", this, b), a;
        },
        push: function(a, b) {
            return this.add(a, c.extend({
                at: this.length
            }, b));
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a), b;
        },
        unshift: function(a, b) {
            return this.add(a, c.extend({
                at: 0
            }, b));
        },
        shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a), b;
        },
        slice: function() {
            return g.apply(this.models, arguments);
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[a] || this._byId[a.id] || this._byId[a.cid];
        },
        at: function(a) {
            return this.models[a];
        },
        where: function(a, b) {
            return c.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                for (var c in a) if (a[c] !== b.get(c)) return !1;
                return !0;
            });
        },
        findWhere: function(a) {
            return this.where(a, !0);
        },
        sort: function(a) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return a || (a = {}), c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(c.bind(this.comparator, this)), 
            a.silent || this.trigger("sort", this, a), this;
        },
        pluck: function(a) {
            return c.invoke(this.models, "get", a);
        },
        fetch: function(a) {
            a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
            var b = a.success, d = this;
            return a.success = function(c) {
                var e = a.reset ? "reset" : "set";
                d[e](c, a), b && b(d, c, a), d.trigger("sync", d, c, a);
            }, L(this, a), this.sync("read", this, a);
        },
        create: function(a, b) {
            if (b = b ? c.clone(b) : {}, !(a = this._prepareModel(a, b))) return !1;
            b.wait || this.add(a, b);
            var d = this, e = b.success;
            return b.success = function(a, c) {
                b.wait && d.add(a, b), e && e(a, c, b);
            }, a.save(null, b), a;
        },
        parse: function(a, b) {
            return a;
        },
        clone: function() {
            return new this.constructor(this.models);
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {};
        },
        _prepareModel: function(a, b) {
            if (a instanceof m) return a;
            b = b ? c.clone(b) : {}, b.collection = this;
            var d = new this.model(a, b);
            return d.validationError ? (this.trigger("invalid", this, d.validationError, b), 
            !1) : d;
        },
        _addReference: function(a, b) {
            this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a), a.collection || (a.collection = this), 
            a.on("all", this._onModelEvent, this);
        },
        _removeReference: function(a, b) {
            this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(a, b, c, d) {
            ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), 
            b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], 
            null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments));
        }
    });
    var r = [ "forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample" ];
    c.each(r, function(a) {
        o.prototype[a] = function() {
            var b = g.call(arguments);
            return b.unshift(this.models), c[a].apply(c, b);
        };
    });
    var s = [ "groupBy", "countBy", "sortBy", "indexBy" ];
    c.each(s, function(a) {
        o.prototype[a] = function(b, d) {
            var e = c.isFunction(b) ? b : function(a) {
                return a.get(b);
            };
            return c[a](this.models, e, d);
        };
    });
    var t = b.View = function(a) {
        this.cid = c.uniqueId("view"), a || (a = {}), c.extend(this, c.pick(a, v)), this._ensureElement(), 
        this.initialize.apply(this, arguments), this.delegateEvents();
    }, u = /^(\S+)\s*(.*)$/, v = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    c.extend(t.prototype, h, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this;
        },
        setElement: function(a, c) {
            return this.$el && this.undelegateEvents(), this.$el = a instanceof b.$ ? a : b.$(a), 
            this.el = this.$el[0], c !== !1 && this.delegateEvents(), this;
        },
        delegateEvents: function(a) {
            if (!a && !(a = c.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var b in a) {
                var d = a[b];
                if (c.isFunction(d) || (d = this[a[b]]), d) {
                    var e = b.match(u), f = e[1], g = e[2];
                    d = c.bind(d, this), f += ".delegateEvents" + this.cid, "" === g ? this.$el.on(f, d) : this.$el.on(f, g, d);
                }
            }
            return this;
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this;
        },
        _ensureElement: function() {
            if (this.el) this.setElement(c.result(this, "el"), !1); else {
                var a = c.extend({}, c.result(this, "attributes"));
                this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className"));
                var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
                this.setElement(d, !1);
            }
        }
    }), b.sync = function(a, d, e) {
        var f = x[a];
        c.defaults(e || (e = {}), {
            emulateHTTP: b.emulateHTTP,
            emulateJSON: b.emulateJSON
        });
        var g = {
            type: f,
            dataType: "json"
        };
        if (e.url || (g.url = c.result(d, "url") || K()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", 
        g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", 
        g.data = g.data ? {
            model: g.data
        } : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
            g.type = "POST", e.emulateJSON && (g.data._method = f);
            var h = e.beforeSend;
            e.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", f), h ? h.apply(this, arguments) : void 0;
            };
        }
        "GET" === g.type || e.emulateJSON || (g.processData = !1), "PATCH" === g.type && w && (g.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP");
        });
        var i = e.xhr = b.ajax(c.extend(g, e));
        return d.trigger("request", d, i, e), i;
    };
    var w = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent), x = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    b.ajax = function() {
        return b.$.ajax.apply(b.$, arguments);
    };
    var y = b.Router = function(a) {
        a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, z = /\((.*?)\)/g, A = /(\(\?)?:\w+/g, B = /\*\w+/g, C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    c.extend(y.prototype, h, {
        initialize: function() {},
        route: function(a, d, e) {
            c.isRegExp(a) || (a = this._routeToRegExp(a)), c.isFunction(d) && (e = d, d = ""), 
            e || (e = this[d]);
            var f = this;
            return b.history.route(a, function(c) {
                var g = f._extractParameters(a, c);
                f.execute(e, g), f.trigger.apply(f, [ "route:" + d ].concat(g)), f.trigger("route", d, g), 
                b.history.trigger("route", f, d, g);
            }), this;
        },
        execute: function(a, b) {
            a && a.apply(this, b);
        },
        navigate: function(a, c) {
            return b.history.navigate(a, c), this;
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = c.result(this, "routes");
                for (var a, b = c.keys(this.routes); null != (a = b.pop()); ) this.route(a, this.routes[a]);
            }
        },
        _routeToRegExp: function(a) {
            return a = a.replace(C, "\\$&").replace(z, "(?:$1)?").replace(A, function(a, b) {
                return b ? a : "([^/?]+)";
            }).replace(B, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$");
        },
        _extractParameters: function(a, b) {
            var d = a.exec(b).slice(1);
            return c.map(d, function(a, b) {
                return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null;
            });
        }
    });
    var D = b.History = function() {
        this.handlers = [], c.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, E = /^[#\/]|\s+$/g, F = /^\/+|\/+$/g, G = /msie [\w.]+/, H = /\/$/, I = /#.*$/;
    D.started = !1, c.extend(D.prototype, h, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root;
        },
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : "";
        },
        getFragment: function(a, b) {
            if (null == a) if (this._hasPushState || !this._wantsHashChange || b) {
                a = decodeURI(this.location.pathname + this.location.search);
                var c = this.root.replace(H, "");
                a.indexOf(c) || (a = a.slice(c.length));
            } else a = this.getHash();
            return a.replace(E, "");
        },
        start: function(a) {
            if (D.started) throw new Error("Backbone.history has already been started");
            D.started = !0, this.options = c.extend({
                root: "/"
            }, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, 
            this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var d = this.getFragment(), e = document.documentMode, f = G.exec(navigator.userAgent.toLowerCase()) && (!e || 7 >= e);
            if (this.root = ("/" + this.root + "/").replace(F, "/"), f && this._wantsHashChange) {
                var g = b.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = g.hide().appendTo("body")[0].contentWindow, this.navigate(d);
            }
            this._hasPushState ? b.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !f ? b.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            this.fragment = d;
            var h = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), 
                this.location.replace(this.root + "#" + this.fragment), !0;
                this._hasPushState && this.atRoot() && h.hash && (this.fragment = this.getHash().replace(E, ""), 
                this.history.replaceState({}, document.title, this.root + this.fragment));
            }
            return this.options.silent ? void 0 : this.loadUrl();
        },
        stop: function() {
            b.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), 
            D.started = !1;
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            });
        },
        checkUrl: function(a) {
            var b = this.getFragment();
            return b === this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))), 
            b === this.fragment ? !1 : (this.iframe && this.navigate(b), void this.loadUrl());
        },
        loadUrl: function(a) {
            return a = this.fragment = this.getFragment(a), c.any(this.handlers, function(b) {
                return b.route.test(a) ? (b.callback(a), !0) : void 0;
            });
        },
        navigate: function(a, b) {
            if (!D.started) return !1;
            b && b !== !0 || (b = {
                trigger: !!b
            });
            var c = this.root + (a = this.getFragment(a || ""));
            if (a = a.replace(I, ""), this.fragment !== a) {
                if (this.fragment = a, "" === a && "/" !== c && (c = c.slice(0, -1)), this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c); else {
                    if (!this._wantsHashChange) return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), 
                    this._updateHash(this.iframe.location, a, b.replace));
                }
                return b.trigger ? this.loadUrl(a) : void 0;
            }
        },
        _updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b);
            } else a.hash = "#" + b;
        }
    }), b.history = new D();
    var J = function(a, b) {
        var d, e = this;
        d = a && c.has(a, "constructor") ? a.constructor : function() {
            return e.apply(this, arguments);
        }, c.extend(d, e, b);
        var f = function() {
            this.constructor = d;
        };
        return f.prototype = e.prototype, d.prototype = new f(), a && c.extend(d.prototype, a), 
        d.__super__ = e.prototype, d;
    };
    m.extend = o.extend = y.extend = t.extend = D.extend = J;
    var K = function() {
        throw new Error('A "url" property or function must be specified');
    }, L = function(a, b) {
        var c = b.error;
        b.error = function(d) {
            c && c(a, d, b), a.trigger("error", a, d, b);
        };
    };
    return b;
}), function(a, b) {
    if ("function" == typeof define && define.amd) define([ "backbone", "underscore" ], function(c, d) {
        return a.Marionette = a.Mn = b(a, c, d);
    }); else if ("undefined" != typeof exports) {
        var c = require("backbone"), d = require("underscore");
        module.exports = b(a, c, d);
    } else a.Marionette = a.Mn = b(a, a.Backbone, a._);
}(this, function(a, b, c) {
    "use strict";
    !function(a, b) {
        var c = a.ChildViewContainer;
        return a.ChildViewContainer = function(a, b) {
            var c = function(a) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), 
                b.each(a, this.add, this);
            };
            b.extend(c.prototype, {
                add: function(a, b) {
                    var c = a.cid;
                    return this._views[c] = a, a.model && (this._indexByModel[a.model.cid] = c), b && (this._indexByCustom[b] = c), 
                    this._updateLength(), this;
                },
                findByModel: function(a) {
                    return this.findByModelCid(a.cid);
                },
                findByModelCid: function(a) {
                    var b = this._indexByModel[a];
                    return this.findByCid(b);
                },
                findByCustom: function(a) {
                    var b = this._indexByCustom[a];
                    return this.findByCid(b);
                },
                findByIndex: function(a) {
                    return b.values(this._views)[a];
                },
                findByCid: function(a) {
                    return this._views[a];
                },
                remove: function(a) {
                    var c = a.cid;
                    return a.model && delete this._indexByModel[a.model.cid], b.any(this._indexByCustom, function(a, b) {
                        return a === c ? (delete this._indexByCustom[b], !0) : void 0;
                    }, this), delete this._views[c], this._updateLength(), this;
                },
                call: function(a) {
                    this.apply(a, b.tail(arguments));
                },
                apply: function(a, c) {
                    b.each(this._views, function(d) {
                        b.isFunction(d[a]) && d[a].apply(d, c || []);
                    });
                },
                _updateLength: function() {
                    this.length = b.size(this._views);
                }
            });
            var d = [ "forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce" ];
            return b.each(d, function(a) {
                c.prototype[a] = function() {
                    var c = b.values(this._views), d = [ c ].concat(b.toArray(arguments));
                    return b[a].apply(b, d);
                };
            }), c;
        }(a, b), a.ChildViewContainer.VERSION = "0.1.6", a.ChildViewContainer.noConflict = function() {
            return a.ChildViewContainer = c, this;
        }, a.ChildViewContainer;
    }(b, c), function(a, b) {
        var c = a.Wreqr, d = a.Wreqr = {};
        return a.Wreqr.VERSION = "1.3.1", a.Wreqr.noConflict = function() {
            return a.Wreqr = c, this;
        }, d.Handlers = function(a, b) {
            var c = function(a) {
                this.options = a, this._wreqrHandlers = {}, b.isFunction(this.initialize) && this.initialize(a);
            };
            return c.extend = a.Model.extend, b.extend(c.prototype, a.Events, {
                setHandlers: function(a) {
                    b.each(a, function(a, c) {
                        var d = null;
                        b.isObject(a) && !b.isFunction(a) && (d = a.context, a = a.callback), this.setHandler(c, a, d);
                    }, this);
                },
                setHandler: function(a, b, c) {
                    var d = {
                        callback: b,
                        context: c
                    };
                    this._wreqrHandlers[a] = d, this.trigger("handler:add", a, b, c);
                },
                hasHandler: function(a) {
                    return !!this._wreqrHandlers[a];
                },
                getHandler: function(a) {
                    var b = this._wreqrHandlers[a];
                    if (b) return function() {
                        var a = Array.prototype.slice.apply(arguments);
                        return b.callback.apply(b.context, a);
                    };
                },
                removeHandler: function(a) {
                    delete this._wreqrHandlers[a];
                },
                removeAllHandlers: function() {
                    this._wreqrHandlers = {};
                }
            }), c;
        }(a, b), d.CommandStorage = function() {
            var c = function(a) {
                this.options = a, this._commands = {}, b.isFunction(this.initialize) && this.initialize(a);
            };
            return b.extend(c.prototype, a.Events, {
                getCommands: function(a) {
                    var b = this._commands[a];
                    return b || (b = {
                        command: a,
                        instances: []
                    }, this._commands[a] = b), b;
                },
                addCommand: function(a, b) {
                    var c = this.getCommands(a);
                    c.instances.push(b);
                },
                clearCommands: function(a) {
                    var b = this.getCommands(a);
                    b.instances = [];
                }
            }), c;
        }(), d.Commands = function(a) {
            return a.Handlers.extend({
                storageType: a.CommandStorage,
                constructor: function(b) {
                    this.options = b || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                    var c = Array.prototype.slice.call(arguments);
                    a.Handlers.prototype.constructor.apply(this, c);
                },
                execute: function(a, b) {
                    a = arguments[0], b = Array.prototype.slice.call(arguments, 1), this.hasHandler(a) ? this.getHandler(a).apply(this, b) : this.storage.addCommand(a, b);
                },
                _executeCommands: function(a, c, d) {
                    var e = this.storage.getCommands(a);
                    b.each(e.instances, function(a) {
                        c.apply(d, a);
                    }), this.storage.clearCommands(a);
                },
                _initializeStorage: function(a) {
                    var c, d = a.storageType || this.storageType;
                    c = b.isFunction(d) ? new d() : d, this.storage = c;
                }
            });
        }(d), d.RequestResponse = function(a) {
            return a.Handlers.extend({
                request: function() {
                    var a = arguments[0], b = Array.prototype.slice.call(arguments, 1);
                    return this.hasHandler(a) ? this.getHandler(a).apply(this, b) : void 0;
                }
            });
        }(d), d.EventAggregator = function(a, b) {
            var c = function() {};
            return c.extend = a.Model.extend, b.extend(c.prototype, a.Events), c;
        }(a, b), d.Channel = function(c) {
            var d = function(b) {
                this.vent = new a.Wreqr.EventAggregator(), this.reqres = new a.Wreqr.RequestResponse(), 
                this.commands = new a.Wreqr.Commands(), this.channelName = b;
            };
            return b.extend(d.prototype, {
                reset: function() {
                    return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), 
                    this.commands.removeAllHandlers(), this;
                },
                connectEvents: function(a, b) {
                    return this._connect("vent", a, b), this;
                },
                connectCommands: function(a, b) {
                    return this._connect("commands", a, b), this;
                },
                connectRequests: function(a, b) {
                    return this._connect("reqres", a, b), this;
                },
                _connect: function(a, c, d) {
                    if (c) {
                        d = d || this;
                        var e = "vent" === a ? "on" : "setHandler";
                        b.each(c, function(c, f) {
                            this[a][e](f, b.bind(c, d));
                        }, this);
                    }
                }
            }), d;
        }(d), d.radio = function(a) {
            var c = function() {
                this._channels = {}, this.vent = {}, this.commands = {}, this.reqres = {}, this._proxyMethods();
            };
            b.extend(c.prototype, {
                channel: function(a) {
                    if (!a) throw new Error("Channel must receive a name");
                    return this._getChannel(a);
                },
                _getChannel: function(b) {
                    var c = this._channels[b];
                    return c || (c = new a.Channel(b), this._channels[b] = c), c;
                },
                _proxyMethods: function() {
                    b.each([ "vent", "commands", "reqres" ], function(a) {
                        b.each(d[a], function(b) {
                            this[a][b] = e(this, a, b);
                        }, this);
                    }, this);
                }
            });
            var d = {
                vent: [ "on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce" ],
                commands: [ "execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ],
                reqres: [ "request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ]
            }, e = function(a, b, c) {
                return function(d) {
                    var e = a._getChannel(d)[b], f = Array.prototype.slice.call(arguments, 1);
                    return e[c].apply(e, f);
                };
            };
            return new c();
        }(d), a.Wreqr;
    }(b, c);
    var d = a.Marionette, e = a.Mn, f = b.Marionette = {};
    f.VERSION = "2.4.1", f.noConflict = function() {
        return a.Marionette = d, a.Mn = e, this;
    }, b.Marionette = f, f.Deferred = b.$.Deferred, f.extend = b.Model.extend, f.isNodeAttached = function(a) {
        return b.$.contains(document.documentElement, a);
    }, f.mergeOptions = function(a, b) {
        a && c.extend(this, c.pick(a, b));
    }, f.getOption = function(a, b) {
        return a && b ? a.options && void 0 !== a.options[b] ? a.options[b] : a[b] : void 0;
    }, f.proxyGetOption = function(a) {
        return f.getOption(this, a);
    }, f._getValue = function(a, b, d) {
        return c.isFunction(a) && (a = d ? a.apply(b, d) : a.call(b)), a;
    }, f.normalizeMethods = function(a) {
        return c.reduce(a, function(a, b, d) {
            return c.isFunction(b) || (b = this[b]), b && (a[d] = b), a;
        }, {}, this);
    }, f.normalizeUIString = function(a, b) {
        return a.replace(/@ui\.[a-zA-Z_$0-9]*/g, function(a) {
            return b[a.slice(4)];
        });
    }, f.normalizeUIKeys = function(a, b) {
        return c.reduce(a, function(a, c, d) {
            var e = f.normalizeUIString(d, b);
            return a[e] = c, a;
        }, {});
    }, f.normalizeUIValues = function(a, b, d) {
        return c.each(a, function(e, g) {
            c.isString(e) ? a[g] = f.normalizeUIString(e, b) : c.isObject(e) && c.isArray(d) && (c.extend(e, f.normalizeUIValues(c.pick(e, d), b)), 
            c.each(d, function(a) {
                var d = e[a];
                c.isString(d) && (e[a] = f.normalizeUIString(d, b));
            }));
        }), a;
    }, f.actAsCollection = function(a, b) {
        var d = [ "forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck" ];
        c.each(d, function(d) {
            a[d] = function() {
                var a = c.values(c.result(this, b)), e = [ a ].concat(c.toArray(arguments));
                return c[d].apply(c, e);
            };
        });
    };
    var g = f.deprecate = function(a, b) {
        c.isObject(a) && (a = a.prev + " is going to be removed in the future. Please use " + a.next + " instead." + (a.url ? " See: " + a.url : "")), 
        void 0 !== b && b || g._cache[a] || (g._warn("Deprecation warning: " + a), g._cache[a] = !0);
    };
    g._warn = "undefined" != typeof console && (console.warn || console.log) || function() {}, 
    g._cache = {}, f._triggerMethod = function() {
        function a(a, b, c) {
            return c.toUpperCase();
        }
        var b = /(^|:)(\w)/gi;
        return function(d, e, f) {
            var g = arguments.length < 3;
            g && (f = e, e = f[0]);
            var h, i = "on" + e.replace(b, a), j = d[i];
            return c.isFunction(j) && (h = j.apply(d, g ? c.rest(f) : f)), c.isFunction(d.trigger) && (g + f.length > 1 ? d.trigger.apply(d, g ? f : [ e ].concat(c.drop(f, 0))) : d.trigger(e)), 
            h;
        };
    }(), f.triggerMethod = function(a) {
        return f._triggerMethod(this, arguments);
    }, f.triggerMethodOn = function(a) {
        var b = c.isFunction(a.triggerMethod) ? a.triggerMethod : f.triggerMethod;
        return b.apply(a, c.rest(arguments));
    }, f.MonitorDOMRefresh = function(a) {
        function b() {
            a._isShown = !0, e();
        }
        function d() {
            a._isRendered = !0, e();
        }
        function e() {
            a._isShown && a._isRendered && f.isNodeAttached(a.el) && c.isFunction(a.triggerMethod) && a.triggerMethod("dom:refresh");
        }
        a.on({
            show: b,
            render: d
        });
    }, function(a) {
        function b(b, d, e, f) {
            var g = f.split(/\s+/);
            c.each(g, function(c) {
                var f = b[c];
                if (!f) throw new a.Error('Method "' + c + '" was configured as an event handler, but does not exist.');
                b.listenTo(d, e, f);
            });
        }
        function d(a, b, c, d) {
            a.listenTo(b, c, d);
        }
        function e(a, b, d, e) {
            var f = e.split(/\s+/);
            c.each(f, function(c) {
                var e = a[c];
                a.stopListening(b, d, e);
            });
        }
        function f(a, b, c, d) {
            a.stopListening(b, c, d);
        }
        function g(b, d, e, f, g) {
            if (d && e) {
                if (!c.isObject(e)) throw new a.Error({
                    message: "Bindings must be an object or function.",
                    url: "marionette.functions.html#marionettebindentityevents"
                });
                e = a._getValue(e, b), c.each(e, function(a, e) {
                    c.isFunction(a) ? f(b, d, e, a) : g(b, d, e, a);
                });
            }
        }
        a.bindEntityEvents = function(a, c, e) {
            g(a, c, e, d, b);
        }, a.unbindEntityEvents = function(a, b, c) {
            g(a, b, c, f, e);
        }, a.proxyBindEntityEvents = function(b, c) {
            return a.bindEntityEvents(this, b, c);
        }, a.proxyUnbindEntityEvents = function(b, c) {
            return a.unbindEntityEvents(this, b, c);
        };
    }(f);
    var h = [ "description", "fileName", "lineNumber", "name", "message", "number" ];
    return f.Error = f.extend.call(Error, {
        urlRoot: "http://marionettejs.com/docs/v" + f.VERSION + "/",
        constructor: function(a, b) {
            c.isObject(a) ? (b = a, a = b.message) : b || (b = {});
            var d = Error.call(this, a);
            c.extend(this, c.pick(d, h), c.pick(b, h)), this.captureStackTrace(), b.url && (this.url = this.urlRoot + b.url);
        },
        captureStackTrace: function() {
            Error.captureStackTrace && Error.captureStackTrace(this, f.Error);
        },
        toString: function() {
            return this.name + ": " + this.message + (this.url ? " See: " + this.url : "");
        }
    }), f.Error.extend = f.extend, f.Callbacks = function() {
        this._deferred = f.Deferred(), this._callbacks = [];
    }, c.extend(f.Callbacks.prototype, {
        add: function(a, b) {
            var d = c.result(this._deferred, "promise");
            this._callbacks.push({
                cb: a,
                ctx: b
            }), d.then(function(c) {
                b && (c.context = b), a.call(c.context, c.options);
            });
        },
        run: function(a, b) {
            this._deferred.resolve({
                options: a,
                context: b
            });
        },
        reset: function() {
            var a = this._callbacks;
            this._deferred = f.Deferred(), this._callbacks = [], c.each(a, function(a) {
                this.add(a.cb, a.ctx);
            }, this);
        }
    }), f.Controller = function(a) {
        this.options = a || {}, c.isFunction(this.initialize) && this.initialize(this.options);
    }, f.Controller.extend = f.extend, c.extend(f.Controller.prototype, b.Events, {
        destroy: function() {
            return f._triggerMethod(this, "before:destroy", arguments), f._triggerMethod(this, "destroy", arguments), 
            this.stopListening(), this.off(), this;
        },
        triggerMethod: f.triggerMethod,
        mergeOptions: f.mergeOptions,
        getOption: f.proxyGetOption
    }), f.Object = function(a) {
        this.options = c.extend({}, c.result(this, "options"), a), this.initialize.apply(this, arguments);
    }, f.Object.extend = f.extend, c.extend(f.Object.prototype, b.Events, {
        initialize: function() {},
        destroy: function() {
            return this.triggerMethod("before:destroy"), this.triggerMethod("destroy"), this.stopListening(), 
            this;
        },
        triggerMethod: f.triggerMethod,
        mergeOptions: f.mergeOptions,
        getOption: f.proxyGetOption,
        bindEntityEvents: f.proxyBindEntityEvents,
        unbindEntityEvents: f.proxyUnbindEntityEvents
    }), f.Region = f.Object.extend({
        constructor: function(a) {
            if (this.options = a || {}, this.el = this.getOption("el"), this.el = this.el instanceof b.$ ? this.el[0] : this.el, 
            !this.el) throw new f.Error({
                name: "NoElError",
                message: 'An "el" must be specified for a region.'
            });
            this.$el = this.getEl(this.el), f.Object.call(this, a);
        },
        show: function(a, b) {
            if (this._ensureElement()) {
                this._ensureViewIsIntact(a);
                var c = b || {}, d = a !== this.currentView, e = !!c.preventDestroy, g = !!c.forceShow, h = !!this.currentView, i = d && !e, j = d || g;
                if (h && this.triggerMethod("before:swapOut", this.currentView, this, b), this.currentView && delete this.currentView._parent, 
                i ? this.empty() : h && j && this.currentView.off("destroy", this.empty, this), 
                j) {
                    a.once("destroy", this.empty, this), a.render(), a._parent = this, h && this.triggerMethod("before:swap", a, this, b), 
                    this.triggerMethod("before:show", a, this, b), f.triggerMethodOn(a, "before:show", a, this, b), 
                    h && this.triggerMethod("swapOut", this.currentView, this, b);
                    var k = f.isNodeAttached(this.el), l = [], m = c.triggerBeforeAttach || this.triggerBeforeAttach, n = c.triggerAttach || this.triggerAttach;
                    return k && m && (l = this._displayedViews(a), this._triggerAttach(l, "before:")), 
                    this.attachHtml(a), this.currentView = a, k && n && (l = this._displayedViews(a), 
                    this._triggerAttach(l)), h && this.triggerMethod("swap", a, this, b), this.triggerMethod("show", a, this, b), 
                    f.triggerMethodOn(a, "show", a, this, b), this;
                }
                return this;
            }
        },
        triggerBeforeAttach: !0,
        triggerAttach: !0,
        _triggerAttach: function(a, b) {
            var d = (b || "") + "attach";
            c.each(a, function(a) {
                f.triggerMethodOn(a, d, a, this);
            }, this);
        },
        _displayedViews: function(a) {
            return c.union([ a ], c.result(a, "_getNestedViews") || []);
        },
        _ensureElement: function() {
            if (c.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0]), 
            !this.$el || 0 === this.$el.length) {
                if (this.getOption("allowMissingEl")) return !1;
                throw new f.Error('An "el" ' + this.$el.selector + " must exist in DOM");
            }
            return !0;
        },
        _ensureViewIsIntact: function(a) {
            if (!a) throw new f.Error({
                name: "ViewNotValid",
                message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
            });
            if (a.isDestroyed) throw new f.Error({
                name: "ViewDestroyedError",
                message: 'View (cid: "' + a.cid + '") has already been destroyed and cannot be used.'
            });
        },
        getEl: function(a) {
            return b.$(a, f._getValue(this.options.parentEl, this));
        },
        attachHtml: function(a) {
            this.$el.contents().detach(), this.el.appendChild(a.el);
        },
        empty: function(a) {
            var b = this.currentView, c = f._getValue(a, "preventDestroy", this);
            return b ? (b.off("destroy", this.empty, this), this.triggerMethod("before:empty", b), 
            c || this._destroyView(), this.triggerMethod("empty", b), delete this.currentView, 
            c && this.$el.contents().detach(), this) : void 0;
        },
        _destroyView: function() {
            var a = this.currentView;
            a.destroy && !a.isDestroyed ? a.destroy() : a.remove && (a.remove(), a.isDestroyed = !0);
        },
        attachView: function(a) {
            return this.currentView = a, this;
        },
        hasView: function() {
            return !!this.currentView;
        },
        reset: function() {
            return this.empty(), this.$el && (this.el = this.$el.selector), delete this.$el, 
            this;
        }
    }, {
        buildRegion: function(a, b) {
            if (c.isString(a)) return this._buildRegionFromSelector(a, b);
            if (a.selector || a.el || a.regionClass) return this._buildRegionFromObject(a, b);
            if (c.isFunction(a)) return this._buildRegionFromRegionClass(a);
            throw new f.Error({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            });
        },
        _buildRegionFromSelector: function(a, b) {
            return new b({
                el: a
            });
        },
        _buildRegionFromObject: function(a, b) {
            var d = a.regionClass || b, e = c.omit(a, "selector", "regionClass");
            return a.selector && !e.el && (e.el = a.selector), new d(e);
        },
        _buildRegionFromRegionClass: function(a) {
            return new a();
        }
    }), f.RegionManager = f.Controller.extend({
        constructor: function(a) {
            this._regions = {}, this.length = 0, f.Controller.call(this, a), this.addRegions(this.getOption("regions"));
        },
        addRegions: function(a, b) {
            return a = f._getValue(a, this, arguments), c.reduce(a, function(a, d, e) {
                return c.isString(d) && (d = {
                    selector: d
                }), d.selector && (d = c.defaults({}, d, b)), a[e] = this.addRegion(e, d), a;
            }, {}, this);
        },
        addRegion: function(a, b) {
            var c;
            return c = b instanceof f.Region ? b : f.Region.buildRegion(b, f.Region), this.triggerMethod("before:add:region", a, c), 
            c._parent = this, this._store(a, c), this.triggerMethod("add:region", a, c), c;
        },
        get: function(a) {
            return this._regions[a];
        },
        getRegions: function() {
            return c.clone(this._regions);
        },
        removeRegion: function(a) {
            var b = this._regions[a];
            return this._remove(a, b), b;
        },
        removeRegions: function() {
            var a = this.getRegions();
            return c.each(this._regions, function(a, b) {
                this._remove(b, a);
            }, this), a;
        },
        emptyRegions: function() {
            var a = this.getRegions();
            return c.invoke(a, "empty"), a;
        },
        destroy: function() {
            return this.removeRegions(), f.Controller.prototype.destroy.apply(this, arguments);
        },
        _store: function(a, b) {
            this._regions[a] || this.length++, this._regions[a] = b;
        },
        _remove: function(a, b) {
            this.triggerMethod("before:remove:region", a, b), b.empty(), b.stopListening(), 
            delete b._parent, delete this._regions[a], this.length--, this.triggerMethod("remove:region", a, b);
        }
    }), f.actAsCollection(f.RegionManager.prototype, "_regions"), f.TemplateCache = function(a) {
        this.templateId = a;
    }, c.extend(f.TemplateCache, {
        templateCaches: {},
        get: function(a, b) {
            var c = this.templateCaches[a];
            return c || (c = new f.TemplateCache(a), this.templateCaches[a] = c), c.load(b);
        },
        clear: function() {
            var a, b = c.toArray(arguments), d = b.length;
            if (d > 0) for (a = 0; d > a; a++) delete this.templateCaches[b[a]]; else this.templateCaches = {};
        }
    }), c.extend(f.TemplateCache.prototype, {
        load: function(a) {
            if (this.compiledTemplate) return this.compiledTemplate;
            var b = this.loadTemplate(this.templateId, a);
            return this.compiledTemplate = this.compileTemplate(b, a), this.compiledTemplate;
        },
        loadTemplate: function(a, c) {
            var d = b.$(a).html();
            if (!d || 0 === d.length) throw new f.Error({
                name: "NoTemplateError",
                message: 'Could not find template: "' + a + '"'
            });
            return d;
        },
        compileTemplate: function(a, b) {
            return c.template(a, b);
        }
    }), f.Renderer = {
        render: function(a, b) {
            if (!a) throw new f.Error({
                name: "TemplateNotFoundError",
                message: "Cannot render the template since its false, null or undefined."
            });
            var d = c.isFunction(a) ? a : f.TemplateCache.get(a);
            return d(b);
        }
    }, f.View = b.View.extend({
        isDestroyed: !1,
        constructor: function(a) {
            c.bindAll(this, "render"), a = f._getValue(a, this), this.options = c.extend({}, c.result(this, "options"), a), 
            this._behaviors = f.Behaviors(this), b.View.call(this, this.options), f.MonitorDOMRefresh(this);
        },
        getTemplate: function() {
            return this.getOption("template");
        },
        serializeModel: function(a) {
            return a.toJSON.apply(a, c.rest(arguments));
        },
        mixinTemplateHelpers: function(a) {
            a = a || {};
            var b = this.getOption("templateHelpers");
            return b = f._getValue(b, this), c.extend(a, b);
        },
        normalizeUIKeys: function(a) {
            var b = c.result(this, "_uiBindings");
            return f.normalizeUIKeys(a, b || c.result(this, "ui"));
        },
        normalizeUIValues: function(a, b) {
            var d = c.result(this, "ui"), e = c.result(this, "_uiBindings");
            return f.normalizeUIValues(a, e || d, b);
        },
        configureTriggers: function() {
            if (this.triggers) {
                var a = this.normalizeUIKeys(c.result(this, "triggers"));
                return c.reduce(a, function(a, b, c) {
                    return a[c] = this._buildViewTrigger(b), a;
                }, {}, this);
            }
        },
        delegateEvents: function(a) {
            return this._delegateDOMEvents(a), this.bindEntityEvents(this.model, this.getOption("modelEvents")), 
            this.bindEntityEvents(this.collection, this.getOption("collectionEvents")), c.each(this._behaviors, function(a) {
                a.bindEntityEvents(this.model, a.getOption("modelEvents")), a.bindEntityEvents(this.collection, a.getOption("collectionEvents"));
            }, this), this;
        },
        _delegateDOMEvents: function(a) {
            var d = f._getValue(a || this.events, this);
            d = this.normalizeUIKeys(d), c.isUndefined(a) && (this.events = d);
            var e = {}, g = c.result(this, "behaviorEvents") || {}, h = this.configureTriggers(), i = c.result(this, "behaviorTriggers") || {};
            c.extend(e, g, d, h, i), b.View.prototype.delegateEvents.call(this, e);
        },
        undelegateEvents: function() {
            return b.View.prototype.undelegateEvents.apply(this, arguments), this.unbindEntityEvents(this.model, this.getOption("modelEvents")), 
            this.unbindEntityEvents(this.collection, this.getOption("collectionEvents")), c.each(this._behaviors, function(a) {
                a.unbindEntityEvents(this.model, a.getOption("modelEvents")), a.unbindEntityEvents(this.collection, a.getOption("collectionEvents"));
            }, this), this;
        },
        _ensureViewIsIntact: function() {
            if (this.isDestroyed) throw new f.Error({
                name: "ViewDestroyedError",
                message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
            });
        },
        destroy: function() {
            if (this.isDestroyed) return this;
            var a = c.toArray(arguments);
            return this.triggerMethod.apply(this, [ "before:destroy" ].concat(a)), this.isDestroyed = !0, 
            this.triggerMethod.apply(this, [ "destroy" ].concat(a)), this.unbindUIElements(), 
            this.isRendered = !1, this.remove(), c.invoke(this._behaviors, "destroy", a), this;
        },
        bindUIElements: function() {
            this._bindUIElements(), c.invoke(this._behaviors, this._bindUIElements);
        },
        _bindUIElements: function() {
            if (this.ui) {
                this._uiBindings || (this._uiBindings = this.ui);
                var a = c.result(this, "_uiBindings");
                this.ui = {}, c.each(a, function(a, b) {
                    this.ui[b] = this.$(a);
                }, this);
            }
        },
        unbindUIElements: function() {
            this._unbindUIElements(), c.invoke(this._behaviors, this._unbindUIElements);
        },
        _unbindUIElements: function() {
            this.ui && this._uiBindings && (c.each(this.ui, function(a, b) {
                delete this.ui[b];
            }, this), this.ui = this._uiBindings, delete this._uiBindings);
        },
        _buildViewTrigger: function(a) {
            var b = c.isObject(a), d = c.defaults({}, b ? a : {}, {
                preventDefault: !0,
                stopPropagation: !0
            }), e = b ? d.event : a;
            return function(a) {
                a && (a.preventDefault && d.preventDefault && a.preventDefault(), a.stopPropagation && d.stopPropagation && a.stopPropagation());
                var b = {
                    view: this,
                    model: this.model,
                    collection: this.collection
                };
                this.triggerMethod(e, b);
            };
        },
        setElement: function() {
            var a = b.View.prototype.setElement.apply(this, arguments);
            return c.invoke(this._behaviors, "proxyViewProperties", this), a;
        },
        triggerMethod: function() {
            var a = f._triggerMethod(this, arguments);
            return this._triggerEventOnBehaviors(arguments), this._triggerEventOnParentLayout(arguments[0], c.rest(arguments)), 
            a;
        },
        _triggerEventOnBehaviors: function(a) {
            for (var b = f._triggerMethod, c = this._behaviors, d = 0, e = c && c.length; e > d; d++) b(c[d], a);
        },
        _triggerEventOnParentLayout: function(a, b) {
            var d = this._parentLayoutView();
            if (d) {
                var e = f.getOption(d, "childViewEventPrefix"), g = e + ":" + a;
                f._triggerMethod(d, [ g, this ].concat(b));
                var h = f.getOption(d, "childEvents"), i = d.normalizeMethods(h);
                i && c.isFunction(i[a]) && i[a].apply(d, [ this ].concat(b));
            }
        },
        _getImmediateChildren: function() {
            return [];
        },
        _getNestedViews: function() {
            var a = this._getImmediateChildren();
            return a.length ? c.reduce(a, function(a, b) {
                return b._getNestedViews ? a.concat(b._getNestedViews()) : a;
            }, a) : a;
        },
        _getAncestors: function() {
            for (var a = [], b = this._parent; b; ) a.push(b), b = b._parent;
            return a;
        },
        _parentLayoutView: function() {
            var a = this._getAncestors();
            return c.find(a, function(a) {
                return a instanceof f.LayoutView;
            });
        },
        normalizeMethods: f.normalizeMethods,
        mergeOptions: f.mergeOptions,
        getOption: f.proxyGetOption,
        bindEntityEvents: f.proxyBindEntityEvents,
        unbindEntityEvents: f.proxyUnbindEntityEvents
    }), f.ItemView = f.View.extend({
        constructor: function() {
            f.View.apply(this, arguments);
        },
        serializeData: function() {
            if (!this.model && !this.collection) return {};
            var a = [ this.model || this.collection ];
            return arguments.length && a.push.apply(a, arguments), this.model ? this.serializeModel.apply(this, a) : {
                items: this.serializeCollection.apply(this, a)
            };
        },
        serializeCollection: function(a) {
            return a.toJSON.apply(a, c.rest(arguments));
        },
        render: function() {
            return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderTemplate(), 
            this.isRendered = !0, this.bindUIElements(), this.triggerMethod("render", this), 
            this;
        },
        _renderTemplate: function() {
            var a = this.getTemplate();
            if (a !== !1) {
                if (!a) throw new f.Error({
                    name: "UndefinedTemplateError",
                    message: "Cannot render the template since it is null or undefined."
                });
                var b = this.mixinTemplateHelpers(this.serializeData()), c = f.Renderer.render(a, b, this);
                return this.attachElContent(c), this;
            }
        },
        attachElContent: function(a) {
            return this.$el.html(a), this;
        }
    }), f.CollectionView = f.View.extend({
        childViewEventPrefix: "childview",
        sort: !0,
        constructor: function(a) {
            this.once("render", this._initialEvents), this._initChildViewStorage(), f.View.apply(this, arguments), 
            this.on("show", this._onShowCalled), this.initRenderBuffer();
        },
        initRenderBuffer: function() {
            this._bufferedChildren = [];
        },
        startBuffering: function() {
            this.initRenderBuffer(), this.isBuffering = !0;
        },
        endBuffering: function() {
            this.isBuffering = !1, this._triggerBeforeShowBufferedChildren(), this.attachBuffer(this), 
            this._triggerShowBufferedChildren(), this.initRenderBuffer();
        },
        _triggerBeforeShowBufferedChildren: function() {
            this._isShown && c.each(this._bufferedChildren, c.partial(this._triggerMethodOnChild, "before:show"));
        },
        _triggerShowBufferedChildren: function() {
            this._isShown && (c.each(this._bufferedChildren, c.partial(this._triggerMethodOnChild, "show")), 
            this._bufferedChildren = []);
        },
        _triggerMethodOnChild: function(a, b) {
            f.triggerMethodOn(b, a);
        },
        _initialEvents: function() {
            this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), 
            this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this.render), 
            this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews));
        },
        _onCollectionAdd: function(a, b, d) {
            var e;
            if (e = void 0 !== d.at ? d.at : c.indexOf(this._filteredSortedModels(), a), this._shouldAddChild(a, e)) {
                this.destroyEmptyView();
                var f = this.getChildView(a);
                this.addChild(a, f, e);
            }
        },
        _onCollectionRemove: function(a) {
            var b = this.children.findByModel(a);
            this.removeChildView(b), this.checkEmpty();
        },
        _onShowCalled: function() {
            this.children.each(c.partial(this._triggerMethodOnChild, "show"));
        },
        render: function() {
            return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderChildren(), 
            this.isRendered = !0, this.triggerMethod("render", this), this;
        },
        reorder: function() {
            var a = this.children, b = this._filteredSortedModels(), d = c.find(b, function(b) {
                return !a.findByModel(b);
            });
            if (d) this.render(); else {
                var e = c.map(b, function(b) {
                    return a.findByModel(b).el;
                });
                this.triggerMethod("before:reorder"), this._appendReorderedChildren(e), this.triggerMethod("reorder");
            }
        },
        resortView: function() {
            f.getOption(this, "reorderOnSort") ? this.reorder() : this.render();
        },
        _sortViews: function() {
            var a = this._filteredSortedModels(), b = c.find(a, function(a, b) {
                var c = this.children.findByModel(a);
                return !c || c._index !== b;
            }, this);
            b && this.resortView();
        },
        _emptyViewIndex: -1,
        _appendReorderedChildren: function(a) {
            this.$el.append(a);
        },
        _renderChildren: function() {
            this.destroyEmptyView(), this.destroyChildren(), this.isEmpty(this.collection) ? this.showEmptyView() : (this.triggerMethod("before:render:collection", this), 
            this.startBuffering(), this.showCollection(), this.endBuffering(), this.triggerMethod("render:collection", this), 
            this.children.isEmpty() && this.showEmptyView());
        },
        showCollection: function() {
            var a, b = this._filteredSortedModels();
            c.each(b, function(b, c) {
                a = this.getChildView(b), this.addChild(b, a, c);
            }, this);
        },
        _filteredSortedModels: function() {
            var a, b = this.getViewComparator();
            return a = b ? c.isString(b) || 1 === b.length ? this.collection.sortBy(b, this) : c.clone(this.collection.models).sort(c.bind(b, this)) : this.collection.models, 
            this.getOption("filter") && (a = c.filter(a, function(a, b) {
                return this._shouldAddChild(a, b);
            }, this)), a;
        },
        showEmptyView: function() {
            var a = this.getEmptyView();
            if (a && !this._showingEmptyView) {
                this.triggerMethod("before:render:empty"), this._showingEmptyView = !0;
                var c = new b.Model();
                this.addEmptyView(c, a), this.triggerMethod("render:empty");
            }
        },
        destroyEmptyView: function() {
            this._showingEmptyView && (this.triggerMethod("before:remove:empty"), this.destroyChildren(), 
            delete this._showingEmptyView, this.triggerMethod("remove:empty"));
        },
        getEmptyView: function() {
            return this.getOption("emptyView");
        },
        addEmptyView: function(a, b) {
            var d = this.getOption("emptyViewOptions") || this.getOption("childViewOptions");
            c.isFunction(d) && (d = d.call(this, a, this._emptyViewIndex));
            var e = this.buildChildView(a, b, d);
            e._parent = this, this.proxyChildEvents(e), this._isShown && f.triggerMethodOn(e, "before:show"), 
            this.children.add(e), this.renderChildView(e, this._emptyViewIndex), this._isShown && f.triggerMethodOn(e, "show");
        },
        getChildView: function(a) {
            var b = this.getOption("childView");
            if (!b) throw new f.Error({
                name: "NoChildViewError",
                message: 'A "childView" must be specified'
            });
            return b;
        },
        addChild: function(a, b, c) {
            var d = this.getOption("childViewOptions");
            d = f._getValue(d, this, [ a, c ]);
            var e = this.buildChildView(a, b, d);
            return this._updateIndices(e, !0, c), this._addChildView(e, c), e._parent = this, 
            e;
        },
        _updateIndices: function(a, b, c) {
            this.getOption("sort") && (b && (a._index = c), this.children.each(function(c) {
                c._index >= a._index && (c._index += b ? 1 : -1);
            }));
        },
        _addChildView: function(a, b) {
            this.proxyChildEvents(a), this.triggerMethod("before:add:child", a), this._isShown && !this.isBuffering && f.triggerMethodOn(a, "before:show"), 
            this.children.add(a), this.renderChildView(a, b), this._isShown && !this.isBuffering && f.triggerMethodOn(a, "show"), 
            this.triggerMethod("add:child", a);
        },
        renderChildView: function(a, b) {
            return a.render(), this.attachHtml(this, a, b), a;
        },
        buildChildView: function(a, b, d) {
            var e = c.extend({
                model: a
            }, d);
            return new b(e);
        },
        removeChildView: function(a) {
            return a && (this.triggerMethod("before:remove:child", a), a.destroy ? a.destroy() : a.remove && a.remove(), 
            delete a._parent, this.stopListening(a), this.children.remove(a), this.triggerMethod("remove:child", a), 
            this._updateIndices(a, !1)), a;
        },
        isEmpty: function() {
            return !this.collection || 0 === this.collection.length;
        },
        checkEmpty: function() {
            this.isEmpty(this.collection) && this.showEmptyView();
        },
        attachBuffer: function(a) {
            a.$el.append(this._createBuffer(a));
        },
        _createBuffer: function(a) {
            var b = document.createDocumentFragment();
            return c.each(a._bufferedChildren, function(a) {
                b.appendChild(a.el);
            }), b;
        },
        attachHtml: function(a, b, c) {
            a.isBuffering ? a._bufferedChildren.splice(c, 0, b) : a._insertBefore(b, c) || a._insertAfter(b);
        },
        _insertBefore: function(a, b) {
            var c, d = this.getOption("sort") && b < this.children.length - 1;
            return d && (c = this.children.find(function(a) {
                return a._index === b + 1;
            })), c ? (c.$el.before(a.el), !0) : !1;
        },
        _insertAfter: function(a) {
            this.$el.append(a.el);
        },
        _initChildViewStorage: function() {
            this.children = new b.ChildViewContainer();
        },
        destroy: function() {
            return this.isDestroyed ? this : (this.triggerMethod("before:destroy:collection"), 
            this.destroyChildren(), this.triggerMethod("destroy:collection"), f.View.prototype.destroy.apply(this, arguments));
        },
        destroyChildren: function() {
            var a = this.children.map(c.identity);
            return this.children.each(this.removeChildView, this), this.checkEmpty(), a;
        },
        _shouldAddChild: function(a, b) {
            var d = this.getOption("filter");
            return !c.isFunction(d) || d.call(this, a, b, this.collection);
        },
        proxyChildEvents: function(a) {
            var b = this.getOption("childViewEventPrefix");
            this.listenTo(a, "all", function() {
                var d = c.toArray(arguments), e = d[0], f = this.normalizeMethods(c.result(this, "childEvents"));
                d[0] = b + ":" + e, d.splice(1, 0, a), "undefined" != typeof f && c.isFunction(f[e]) && f[e].apply(this, d.slice(1)), 
                this.triggerMethod.apply(this, d);
            });
        },
        _getImmediateChildren: function() {
            return c.values(this.children._views);
        },
        getViewComparator: function() {
            return this.getOption("viewComparator");
        }
    }), f.CompositeView = f.CollectionView.extend({
        constructor: function() {
            f.CollectionView.apply(this, arguments);
        },
        _initialEvents: function() {
            this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), 
            this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this._renderChildren), 
            this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews));
        },
        getChildView: function(a) {
            var b = this.getOption("childView") || this.constructor;
            return b;
        },
        serializeData: function() {
            var a = {};
            return this.model && (a = c.partial(this.serializeModel, this.model).apply(this, arguments)), 
            a;
        },
        render: function() {
            return this._ensureViewIsIntact(), this._isRendering = !0, this.resetChildViewContainer(), 
            this.triggerMethod("before:render", this), this._renderTemplate(), this._renderChildren(), 
            this._isRendering = !1, this.isRendered = !0, this.triggerMethod("render", this), 
            this;
        },
        _renderChildren: function() {
            (this.isRendered || this._isRendering) && f.CollectionView.prototype._renderChildren.call(this);
        },
        _renderTemplate: function() {
            var a = {};
            a = this.serializeData(), a = this.mixinTemplateHelpers(a), this.triggerMethod("before:render:template");
            var b = this.getTemplate(), c = f.Renderer.render(b, a, this);
            this.attachElContent(c), this.bindUIElements(), this.triggerMethod("render:template");
        },
        attachElContent: function(a) {
            return this.$el.html(a), this;
        },
        attachBuffer: function(a) {
            var b = this.getChildViewContainer(a);
            b.append(this._createBuffer(a));
        },
        _insertAfter: function(a) {
            var b = this.getChildViewContainer(this, a);
            b.append(a.el);
        },
        _appendReorderedChildren: function(a) {
            var b = this.getChildViewContainer(this);
            b.append(a);
        },
        getChildViewContainer: function(a, b) {
            if ("$childViewContainer" in a) return a.$childViewContainer;
            var c, d = f.getOption(a, "childViewContainer");
            if (d) {
                var e = f._getValue(d, a);
                if (c = "@" === e.charAt(0) && a.ui ? a.ui[e.substr(4)] : a.$(e), c.length <= 0) throw new f.Error({
                    name: "ChildViewContainerMissingError",
                    message: 'The specified "childViewContainer" was not found: ' + a.childViewContainer
                });
            } else c = a.$el;
            return a.$childViewContainer = c, c;
        },
        resetChildViewContainer: function() {
            this.$childViewContainer && delete this.$childViewContainer;
        }
    }), f.LayoutView = f.ItemView.extend({
        regionClass: f.Region,
        options: {
            destroyImmediate: !1
        },
        childViewEventPrefix: "childview",
        constructor: function(a) {
            a = a || {}, this._firstRender = !0, this._initializeRegions(a), f.ItemView.call(this, a);
        },
        render: function() {
            return this._ensureViewIsIntact(), this._firstRender ? this._firstRender = !1 : this._reInitializeRegions(), 
            f.ItemView.prototype.render.apply(this, arguments);
        },
        destroy: function() {
            return this.isDestroyed ? this : (this.getOption("destroyImmediate") === !0 && this.$el.remove(), 
            this.regionManager.destroy(), f.ItemView.prototype.destroy.apply(this, arguments));
        },
        showChildView: function(a, b) {
            return this.getRegion(a).show(b);
        },
        getChildView: function(a) {
            return this.getRegion(a).currentView;
        },
        addRegion: function(a, b) {
            var c = {};
            return c[a] = b, this._buildRegions(c)[a];
        },
        addRegions: function(a) {
            return this.regions = c.extend({}, this.regions, a), this._buildRegions(a);
        },
        removeRegion: function(a) {
            return delete this.regions[a], this.regionManager.removeRegion(a);
        },
        getRegion: function(a) {
            return this.regionManager.get(a);
        },
        getRegions: function() {
            return this.regionManager.getRegions();
        },
        _buildRegions: function(a) {
            var b = {
                regionClass: this.getOption("regionClass"),
                parentEl: c.partial(c.result, this, "el")
            };
            return this.regionManager.addRegions(a, b);
        },
        _initializeRegions: function(a) {
            var b;
            this._initRegionManager(), b = f._getValue(this.regions, this, [ a ]) || {};
            var d = this.getOption.call(a, "regions");
            d = f._getValue(d, this, [ a ]), c.extend(b, d), b = this.normalizeUIValues(b, [ "selector", "el" ]), 
            this.addRegions(b);
        },
        _reInitializeRegions: function() {
            this.regionManager.invoke("reset");
        },
        getRegionManager: function() {
            return new f.RegionManager();
        },
        _initRegionManager: function() {
            this.regionManager = this.getRegionManager(), this.regionManager._parent = this, 
            this.listenTo(this.regionManager, "before:add:region", function(a) {
                this.triggerMethod("before:add:region", a);
            }), this.listenTo(this.regionManager, "add:region", function(a, b) {
                this[a] = b, this.triggerMethod("add:region", a, b);
            }), this.listenTo(this.regionManager, "before:remove:region", function(a) {
                this.triggerMethod("before:remove:region", a);
            }), this.listenTo(this.regionManager, "remove:region", function(a, b) {
                delete this[a], this.triggerMethod("remove:region", a, b);
            });
        },
        _getImmediateChildren: function() {
            return c.chain(this.regionManager.getRegions()).pluck("currentView").compact().value();
        }
    }), f.Behavior = f.Object.extend({
        constructor: function(a, b) {
            this.view = b, this.defaults = c.result(this, "defaults") || {}, this.options = c.extend({}, this.defaults, a), 
            this.ui = c.extend({}, c.result(b, "ui"), c.result(this, "ui")), f.Object.apply(this, arguments);
        },
        $: function() {
            return this.view.$.apply(this.view, arguments);
        },
        destroy: function() {
            return this.stopListening(), this;
        },
        proxyViewProperties: function(a) {
            this.$el = a.$el, this.el = a.el;
        }
    }), f.Behaviors = function(a, b) {
        function c(a, d) {
            return b.isObject(a.behaviors) ? (d = c.parseBehaviors(a, d || b.result(a, "behaviors")), 
            c.wrap(a, d, b.keys(g)), d) : {};
        }
        function d(a, b) {
            this._view = a, this._behaviors = b, this._triggers = {};
        }
        function e(a) {
            return a._uiBindings || a.ui;
        }
        var f = /^(\S+)\s*(.*)$/, g = {
            behaviorTriggers: function(a, b) {
                var c = new d(this, b);
                return c.buildBehaviorTriggers();
            },
            behaviorEvents: function(c, d) {
                var g = {};
                return b.each(d, function(c, d) {
                    var h = {}, i = b.clone(b.result(c, "events")) || {};
                    i = a.normalizeUIKeys(i, e(c));
                    var j = 0;
                    b.each(i, function(a, e) {
                        var g = e.match(f), i = g[1] + "." + [ this.cid, d, j++, " " ].join(""), k = g[2], l = i + k, m = b.isFunction(a) ? a : c[a];
                        h[l] = b.bind(m, c);
                    }, this), g = b.extend(g, h);
                }, this), g;
            }
        };
        return b.extend(c, {
            behaviorsLookup: function() {
                throw new a.Error({
                    message: "You must define where your behaviors are stored.",
                    url: "marionette.behaviors.html#behaviorslookup"
                });
            },
            getBehaviorClass: function(b, d) {
                return b.behaviorClass ? b.behaviorClass : a._getValue(c.behaviorsLookup, this, [ b, d ])[d];
            },
            parseBehaviors: function(a, d) {
                return b.chain(d).map(function(d, e) {
                    var f = c.getBehaviorClass(d, e), g = new f(d, a), h = c.parseBehaviors(a, b.result(g, "behaviors"));
                    return [ g ].concat(h);
                }).flatten().value();
            },
            wrap: function(a, c, d) {
                b.each(d, function(d) {
                    a[d] = b.partial(g[d], a[d], c);
                });
            }
        }), b.extend(d.prototype, {
            buildBehaviorTriggers: function() {
                return b.each(this._behaviors, this._buildTriggerHandlersForBehavior, this), this._triggers;
            },
            _buildTriggerHandlersForBehavior: function(c, d) {
                var f = b.clone(b.result(c, "triggers")) || {};
                f = a.normalizeUIKeys(f, e(c)), b.each(f, b.bind(this._setHandlerForBehavior, this, c, d));
            },
            _setHandlerForBehavior: function(a, b, c, d) {
                var e = d.replace(/^\S+/, function(a) {
                    return a + ".behaviortriggers" + b;
                });
                this._triggers[e] = this._view._buildViewTrigger(c);
            }
        }), c;
    }(f, c), f.AppRouter = b.Router.extend({
        constructor: function(a) {
            this.options = a || {}, b.Router.apply(this, arguments);
            var c = this.getOption("appRoutes"), d = this._getController();
            this.processAppRoutes(d, c), this.on("route", this._processOnRoute, this);
        },
        appRoute: function(a, b) {
            var c = this._getController();
            this._addAppRoute(c, a, b);
        },
        _processOnRoute: function(a, b) {
            if (c.isFunction(this.onRoute)) {
                var d = c.invert(this.getOption("appRoutes"))[a];
                this.onRoute(a, d, b);
            }
        },
        processAppRoutes: function(a, b) {
            if (b) {
                var d = c.keys(b).reverse();
                c.each(d, function(c) {
                    this._addAppRoute(a, c, b[c]);
                }, this);
            }
        },
        _getController: function() {
            return this.getOption("controller");
        },
        _addAppRoute: function(a, b, d) {
            var e = a[d];
            if (!e) throw new f.Error('Method "' + d + '" was not found on the controller');
            this.route(b, d, c.bind(e, a));
        },
        mergeOptions: f.mergeOptions,
        getOption: f.proxyGetOption,
        triggerMethod: f.triggerMethod,
        bindEntityEvents: f.proxyBindEntityEvents,
        unbindEntityEvents: f.proxyUnbindEntityEvents
    }), f.Application = f.Object.extend({
        constructor: function(a) {
            this._initializeRegions(a), this._initCallbacks = new f.Callbacks(), this.submodules = {}, 
            c.extend(this, a), this._initChannel(), f.Object.call(this, a);
        },
        execute: function() {
            this.commands.execute.apply(this.commands, arguments);
        },
        request: function() {
            return this.reqres.request.apply(this.reqres, arguments);
        },
        addInitializer: function(a) {
            this._initCallbacks.add(a);
        },
        start: function(a) {
            this.triggerMethod("before:start", a), this._initCallbacks.run(a, this), this.triggerMethod("start", a);
        },
        addRegions: function(a) {
            return this._regionManager.addRegions(a);
        },
        emptyRegions: function() {
            return this._regionManager.emptyRegions();
        },
        removeRegion: function(a) {
            return this._regionManager.removeRegion(a);
        },
        getRegion: function(a) {
            return this._regionManager.get(a);
        },
        getRegions: function() {
            return this._regionManager.getRegions();
        },
        module: function(a, b) {
            var d = f.Module.getClass(b), e = c.toArray(arguments);
            return e.unshift(this), d.create.apply(d, e);
        },
        getRegionManager: function() {
            return new f.RegionManager();
        },
        _initializeRegions: function(a) {
            var b = c.isFunction(this.regions) ? this.regions(a) : this.regions || {};
            this._initRegionManager();
            var d = f.getOption(a, "regions");
            return c.isFunction(d) && (d = d.call(this, a)), c.extend(b, d), this.addRegions(b), 
            this;
        },
        _initRegionManager: function() {
            this._regionManager = this.getRegionManager(), this._regionManager._parent = this, 
            this.listenTo(this._regionManager, "before:add:region", function() {
                f._triggerMethod(this, "before:add:region", arguments);
            }), this.listenTo(this._regionManager, "add:region", function(a, b) {
                this[a] = b, f._triggerMethod(this, "add:region", arguments);
            }), this.listenTo(this._regionManager, "before:remove:region", function() {
                f._triggerMethod(this, "before:remove:region", arguments);
            }), this.listenTo(this._regionManager, "remove:region", function(a) {
                delete this[a], f._triggerMethod(this, "remove:region", arguments);
            });
        },
        _initChannel: function() {
            this.channelName = c.result(this, "channelName") || "global", this.channel = c.result(this, "channel") || b.Wreqr.radio.channel(this.channelName), 
            this.vent = c.result(this, "vent") || this.channel.vent, this.commands = c.result(this, "commands") || this.channel.commands, 
            this.reqres = c.result(this, "reqres") || this.channel.reqres;
        }
    }), f.Module = function(a, b, d) {
        this.moduleName = a, this.options = c.extend({}, this.options, d), this.initialize = d.initialize || this.initialize, 
        this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = b, c.isFunction(this.initialize) && this.initialize(a, b, this.options);
    }, f.Module.extend = f.extend, c.extend(f.Module.prototype, b.Events, {
        startWithParent: !0,
        initialize: function() {},
        addInitializer: function(a) {
            this._initializerCallbacks.add(a);
        },
        addFinalizer: function(a) {
            this._finalizerCallbacks.add(a);
        },
        start: function(a) {
            this._isInitialized || (c.each(this.submodules, function(b) {
                b.startWithParent && b.start(a);
            }), this.triggerMethod("before:start", a), this._initializerCallbacks.run(a, this), 
            this._isInitialized = !0, this.triggerMethod("start", a));
        },
        stop: function() {
            this._isInitialized && (this._isInitialized = !1, this.triggerMethod("before:stop"), 
            c.invoke(this.submodules, "stop"), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), 
            this._finalizerCallbacks.reset(), this.triggerMethod("stop"));
        },
        addDefinition: function(a, b) {
            this._runModuleDefinition(a, b);
        },
        _runModuleDefinition: function(a, d) {
            if (a) {
                var e = c.flatten([ this, this.app, b, f, b.$, c, d ]);
                a.apply(this, e);
            }
        },
        _setupInitializersAndFinalizers: function() {
            this._initializerCallbacks = new f.Callbacks(), this._finalizerCallbacks = new f.Callbacks();
        },
        triggerMethod: f.triggerMethod
    }), c.extend(f.Module, {
        create: function(a, b, d) {
            var e = a, f = c.drop(arguments, 3);
            b = b.split(".");
            var g = b.length, h = [];
            return h[g - 1] = d, c.each(b, function(b, c) {
                var g = e;
                e = this._getModule(g, b, a, d), this._addModuleDefinition(g, e, h[c], f);
            }, this), e;
        },
        _getModule: function(a, b, d, e, f) {
            var g = c.extend({}, e), h = this.getClass(e), i = a[b];
            return i || (i = new h(b, d, g), a[b] = i, a.submodules[b] = i), i;
        },
        getClass: function(a) {
            var b = f.Module;
            return a ? a.prototype instanceof b ? a : a.moduleClass || b : b;
        },
        _addModuleDefinition: function(a, b, c, d) {
            var e = this._getDefine(c), f = this._getStartWithParent(c, b);
            e && b.addDefinition(e, d), this._addStartWithParent(a, b, f);
        },
        _getStartWithParent: function(a, b) {
            var d;
            return c.isFunction(a) && a.prototype instanceof f.Module ? (d = b.constructor.prototype.startWithParent, 
            c.isUndefined(d) ? !0 : d) : c.isObject(a) ? (d = a.startWithParent, c.isUndefined(d) ? !0 : d) : !0;
        },
        _getDefine: function(a) {
            return !c.isFunction(a) || a.prototype instanceof f.Module ? c.isObject(a) ? a.define : null : a;
        },
        _addStartWithParent: function(a, b, c) {
            b.startWithParent = b.startWithParent && c, b.startWithParent && !b.startWithParentIsConfigured && (b.startWithParentIsConfigured = !0, 
            a.addInitializer(function(a) {
                b.startWithParent && b.start(a);
            }));
        }
    }), f;
}), function(a, b) {
    "use strict";
    if ("object" == typeof exports) return b(exports, require("underscore"), require("backbone"));
    if ("function" == typeof define && define.amd) return define([ "underscore", "backbone", "exports" ], function(a, c, d) {
        return b(d, a, c);
    });
    var c = a.fauxServer;
    b(a.fauxServer = {}, _, Backbone), a.fauxServer.noConflict = function() {
        var b = a.fauxServer;
        return a.fauxServer = c, (b.noConflict = function() {
            return b;
        }).call();
    };
}(this, function(a, b, c) {
    "use strict";
    var d = function() {}, e = function(a) {
        for (var c = [], d = a.length - 1; d >= 0; d--) b.isUndefined(a[d]) || (c[d] = a[d]);
        return c;
    }, f = function() {
        var a = /[\-{}\[\]+?.,\\\^$|#\s]/g, b = /\((.*?)\)/g, c = /(\(\?)?:[A-Za-z_](?:\w)+/g, d = /\*\w+/g, e = function(a, b) {
            return b ? a : "([^/]+)";
        };
        return function(f) {
            return f = f.replace(a, "\\$&").replace(b, "(?:$1)?").replace(c, e).replace(d, "(.*?)"), 
            new RegExp("^" + f + "$");
        };
    }(), g = c.sync, h = !0, i = null, j = 0, k = {
        create: "POST",
        read: "GET",
        update: "PUT",
        "delete": "DELETE",
        patch: "PATCH"
    }, l = [], m = function(a, c) {
        var d, e, f;
        for (d = l.length - 1; d >= 0; --d) if (e = l[d], e.urlExp.test(a)) {
            if (e.httpMethod === c) return e = b.clone(e), e.handlerParams = e.urlExp.exec(a).slice(1), 
            e;
            "*" === e.httpMethod && (f = e);
        }
        return f ? (e = b.clone(f), e.handlerParams = e.urlExp.exec(a).slice(1), e) : null;
    }, n = function(a, c, g, h) {
        var i = e(b.toArray(arguments));
        switch (i.length) {
          case 3:
            b.isFunction(i[2]) ? (h = i[2], "*" === i[1] || b.contains(k, i[1]) ? (c = i[0], 
            g = i[1], a = null) : g = "*") : h = d;
            break;

          case 2:
            b.isFunction(i[1]) ? (c = i[0], h = i[1], g = "*", a = null) : (h = d, "*" === i[1] || b.contains(k, i[1]) ? (c = i[0], 
            g = i[1], a = null) : g = "*");
            break;

          case 1:
            c = i[0], g = "*", h = d, a = null;
            break;

          case 0:
            throw new Error("addRoute: Missing mandatory 'urlExp' argument");
        }
        return g = g.toUpperCase(), c = b.isRegExp(c) ? c : f(c), {
            name: a || b.uniqueId(g + "_" + c + "_"),
            urlExp: c,
            httpMethod: g,
            handler: h
        };
    }, o = function(a, b, c) {
        return c.data ? c.data : "PATCH" === a ? c.attrs || b.toJSON() : "POST" === a || "PUT" === a ? b.toJSON() : void 0;
    }, p = function(a) {
        var e = a.success || d, f = a.error || d;
        if (c.$ && b.isFunction(c.$.Deferred)) try {
            var g = c.$.Deferred();
            return g.then(e, f), g;
        } catch (h) {}
        return {
            promise: d,
            resolve: function(a) {
                e(a);
            },
            reject: function(a) {
                f(a);
            }
        };
    };
    return c.sync = function(a, d, e) {
        if (!h) return g.call(d, a, d, e);
        b.defaults(e || (e = {}), {
            emulateHTTP: c.emulateHTTP,
            emulateJSON: c.emulateJSON
        });
        var f = {
            data: null,
            url: null,
            httpMethod: k[a],
            route: null
        }, l = null, n = null, q = null;
        if (e.emulateHTTP && "GET" !== f.httpMethod && (f.httpMethodOverride = f.httpMethod, 
        f.httpMethod = "POST"), !(f.url = e.url || b.result(d, "url"))) throw new Error("sync: Undefined 'url' property or function of Model / Collection");
        return (f.route = m(f.url, f.httpMethod) || i) ? (f.data = o(f.httpMethod, d, e), 
        n = p(e, f), l = function() {
            var a = f.route.handler.apply(null, [ f ].concat(f.route.handlerParams));
            n[b.isString(a) ? "reject" : "resolve"](a);
        }, q = n.promise(), d.trigger("request", d, q, e), b.delay(l, b.isFunction(j) ? j(f) : j), 
        q) : g.call(d, a, d, e);
    }, b.extend(a, {
        addRoute: function() {
            var a, c;
            return a = n.apply(null, arguments), b.any(l, function(b, d) {
                return b.name === a.name ? (c = d, !0) : void 0;
            }) || (c = l.length), l[c] = a, this;
        },
        addRoutes: function(a) {
            var c = b.isArray(a);
            return b.each(a, function(a, b) {
                this.addRoute(c ? a.name : b, a.urlExp, a.httpMethod, a.handler);
            }, this), this;
        },
        removeRoute: function(a) {
            return l = b.reject(l, function(b) {
                return b.name === a;
            }), this;
        },
        removeRoutes: function() {
            return l = [], this;
        },
        getRoute: function(a) {
            var c = b.find(l, function(b) {
                return b.name === a;
            });
            return c ? b.clone(c) : null;
        },
        getRouteAt: function(a) {
            return l[a] ? b.clone(l[a]) : null;
        },
        getMatchingRoute: m,
        setDefaultHandler: function(a) {
            return i = a ? {
                name: "",
                urlExp: "",
                handler: a,
                handlerParams: []
            } : null, this;
        },
        setLatency: function(a, b) {
            return j = b ? function() {
                return a + Math.random() * (b - a);
            } : a || 0, this;
        },
        setTransportFactory: function(a) {
            return p = a, this;
        },
        enable: function(a) {
            return h = b.isUndefined(a) || a, this;
        },
        getVersion: function() {
            return "0.10.5";
        }
    }), b.each(b.values(k), function(c) {
        var d = "DELETE" === c ? "del" : c.toLowerCase();
        a[d] = function() {
            var f = e(b.toArray(arguments));
            if (!f.length) throw new Error(d + ": Missing mandatory 'urlExp' argument");
            return b.isFunction(f[f.length - 1]) ? f.splice(f.length - 1, 0, c) : f.push(c), 
            a.addRoute.apply(this, f);
        };
    }), a;
}), function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j;
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c ? c : a);
            }, k, k.exports, a, b, c, d);
        }
        return c[g].exports;
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e;
}({
    1: [ function(a, b, c) {
        window.Backbone = window.Backbone || {}, window.Backbone.DeepModel = a(".");
    }, {
        ".": 20
    } ],
    2: [ function(a, b, c) {
        function d(a) {
            return a && "object" == typeof a || !1;
        }
        function e(a, b) {
            return l(a, b, r);
        }
        function f(a, b, c, j, l) {
            if (!i(a)) return a;
            var m = h(b.length) && (o(b) || q(b));
            return (m ? k : e)(b, function(b, e, h) {
                if (d(b)) return j || (j = []), l || (l = []), g(a, h, e, f, c, j, l);
                var i = a[e], k = c ? c(i, b, e, a, h) : void 0, n = "undefined" == typeof k;
                n && (k = b), !m && "undefined" == typeof k || !n && (k === k ? k === i : i !== i) || (a[e] = k);
            }), a;
        }
        function g(a, b, c, d, e, f, g) {
            for (var i = f.length, k = b[c]; i--; ) if (f[i] == k) return void (a[c] = g[i]);
            var l = a[c], m = e ? e(l, k, c, a, b) : void 0, r = "undefined" == typeof m;
            r && (m = k, h(k.length) && (o(k) || q(k)) ? m = o(l) ? l : l ? j(l) : [] : p(k) || n(k) ? m = n(l) ? s(l) : p(l) ? l : {} : r = !1), 
            f.push(k), g.push(m), r ? a[c] = d(m, k, e, f, g) : (m === m ? m !== l : l === l) && (a[c] = m);
        }
        function h(a) {
            return "number" == typeof a && a > -1 && a % 1 == 0 && t >= a;
        }
        function i(a) {
            var b = typeof a;
            return "function" == b || a && "object" == b || !1;
        }
        var j = a("lodash._arraycopy"), k = a("lodash._arrayeach"), l = a("lodash._basefor"), m = a("lodash._createassigner"), n = a("lodash.isarguments"), o = a("lodash.isarray"), p = a("lodash.isplainobject"), q = a("lodash.istypedarray"), r = a("lodash.keys"), s = a("lodash.toplainobject"), t = Math.pow(2, 53) - 1, u = m(f);
        b.exports = u;
    }, {
        "lodash._arraycopy": 3,
        "lodash._arrayeach": 4,
        "lodash._basefor": 5,
        "lodash._createassigner": 6,
        "lodash.isarguments": 9,
        "lodash.isarray": 10,
        "lodash.isplainobject": 11,
        "lodash.istypedarray": 14,
        "lodash.keys": 15,
        "lodash.toplainobject": 17
    } ],
    3: [ function(a, b, c) {
        function d(a, b) {
            var c = -1, d = a.length;
            for (b || (b = Array(d)); ++c < d; ) b[c] = a[c];
            return b;
        }
        b.exports = d;
    }, {} ],
    4: [ function(a, b, c) {
        function d(a, b) {
            for (var c = -1, d = a.length; ++c < d && b(a[c], c, a) !== !1; ) ;
            return a;
        }
        b.exports = d;
    }, {} ],
    5: [ function(a, b, c) {
        function d(a, b, c) {
            for (var d = -1, f = e(a), g = c(a), h = g.length; ++d < h; ) {
                var i = g[d];
                if (b(f[i], i, f) === !1) break;
            }
            return a;
        }
        function e(a) {
            return f(a) ? a : Object(a);
        }
        function f(a) {
            var b = typeof a;
            return "function" == b || a && "object" == b || !1;
        }
        b.exports = d;
    }, {} ],
    6: [ function(a, b, c) {
        function d(a) {
            return function() {
                var b = arguments, c = b.length, d = b[0];
                if (2 > c || null == d) return d;
                var g = b[c - 2], h = b[c - 1], i = b[3];
                c > 3 && "function" == typeof g ? (g = e(g, h, 5), c -= 2) : (g = c > 2 && "function" == typeof h ? h : null, 
                c -= g ? 1 : 0), i && f(b[1], b[2], i) && (g = 3 == c ? null : g, c = 2);
                for (var j = 0; ++j < c; ) {
                    var k = b[j];
                    k && a(d, k, g);
                }
                return d;
            };
        }
        var e = a("lodash._bindcallback"), f = a("lodash._isiterateecall");
        b.exports = d;
    }, {
        "lodash._bindcallback": 7,
        "lodash._isiterateecall": 8
    } ],
    7: [ function(a, b, c) {
        function d(a, b, c) {
            if ("function" != typeof a) return e;
            if ("undefined" == typeof b) return a;
            switch (c) {
              case 1:
                return function(c) {
                    return a.call(b, c);
                };

              case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e);
                };

              case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f);
                };

              case 5:
                return function(c, d, e, f, g) {
                    return a.call(b, c, d, e, f, g);
                };
            }
            return function() {
                return a.apply(b, arguments);
            };
        }
        function e(a) {
            return a;
        }
        b.exports = d;
    }, {} ],
    8: [ function(a, b, c) {
        function d(a, b) {
            return a = +a, b = null == b ? h : b, a > -1 && a % 1 == 0 && b > a;
        }
        function e(a, b, c) {
            if (!g(c)) return !1;
            var e = typeof b;
            if ("number" == e) var h = c.length, i = f(h) && d(b, h); else i = "string" == e && b in c;
            if (i) {
                var j = c[b];
                return a === a ? a === j : j !== j;
            }
            return !1;
        }
        function f(a) {
            return "number" == typeof a && a > -1 && a % 1 == 0 && h >= a;
        }
        function g(a) {
            var b = typeof a;
            return "function" == b || a && "object" == b || !1;
        }
        var h = Math.pow(2, 53) - 1;
        b.exports = e;
    }, {} ],
    9: [ function(a, b, c) {
        function d(a) {
            return a && "object" == typeof a || !1;
        }
        function e(a) {
            return "number" == typeof a && a > -1 && a % 1 == 0 && j >= a;
        }
        function f(a) {
            var b = d(a) ? a.length : void 0;
            return e(b) && i.call(a) == g || !1;
        }
        var g = "[object Arguments]", h = Object.prototype, i = h.toString, j = Math.pow(2, 53) - 1;
        b.exports = f;
    }, {} ],
    10: [ function(a, b, c) {
        function d(a) {
            return "string" == typeof a ? a : null == a ? "" : a + "";
        }
        function e(a) {
            return a && "object" == typeof a || !1;
        }
        function f(a) {
            return "number" == typeof a && a > -1 && a % 1 == 0 && s >= a;
        }
        function g(a) {
            return null == a ? !1 : p.call(a) == j ? q.test(o.call(a)) : e(a) && k.test(a) || !1;
        }
        function h(a) {
            return a = d(a), a && m.test(a) ? a.replace(l, "\\$&") : a;
        }
        var i = "[object Array]", j = "[object Function]", k = /^\[object .+?Constructor\]$/, l = /[.*+?^${}()|[\]\/\\]/g, m = RegExp(l.source), n = Object.prototype, o = Function.prototype.toString, p = n.toString, q = RegExp("^" + h(p).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), r = g(r = Array.isArray) && r, s = Math.pow(2, 53) - 1, t = r || function(a) {
            return e(a) && f(a.length) && p.call(a) == i || !1;
        };
        b.exports = t;
    }, {} ],
    11: [ function(a, b, c) {
        function d(a) {
            return a && "object" == typeof a || !1;
        }
        function e(a, b) {
            return g(a, b, i);
        }
        function f(a) {
            var b;
            if (!d(a) || m.call(a) != j || !l.call(a, "constructor") && (b = a.constructor, 
            "function" == typeof b && !(b instanceof b))) return !1;
            var c;
            return e(a, function(a, b) {
                c = b;
            }), "undefined" == typeof c || l.call(a, c);
        }
        var g = a("lodash._basefor"), h = a("lodash.isnative"), i = a("lodash.keysin"), j = "[object Object]", k = Object.prototype, l = k.hasOwnProperty, m = k.toString, n = h(n = Object.getPrototypeOf) && n, o = n ? function(a) {
            if (!a || m.call(a) != j) return !1;
            var b = a.valueOf, c = h(b) && (c = n(b)) && n(c);
            return c ? a == c || n(a) == c : f(a);
        } : f;
        b.exports = o;
    }, {
        "lodash._basefor": 5,
        "lodash.isnative": 12,
        "lodash.keysin": 13
    } ],
    12: [ function(a, b, c) {
        function d(a) {
            return "string" == typeof a ? a : null == a ? "" : a + "";
        }
        function e(a) {
            return a && "object" == typeof a || !1;
        }
        function f(a) {
            return null == a ? !1 : n.call(a) == h ? o.test(m.call(a)) : e(a) && i.test(a) || !1;
        }
        function g(a) {
            return a = d(a), a && k.test(a) ? a.replace(j, "\\$&") : a;
        }
        var h = "[object Function]", i = /^\[object .+?Constructor\]$/, j = /[.*+?^${}()|[\]\/\\]/g, k = RegExp(j.source), l = Object.prototype, m = Function.prototype.toString, n = l.toString, o = RegExp("^" + g(n).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        b.exports = f;
    }, {} ],
    13: [ function(a, b, c) {
        function d(a, b) {
            return a = +a, b = null == b ? m : b, a > -1 && a % 1 == 0 && b > a;
        }
        function e(a) {
            return "number" == typeof a && a > -1 && a % 1 == 0 && m >= a;
        }
        function f(a) {
            var b = typeof a;
            return "function" == b || a && "object" == b || !1;
        }
        function g(a) {
            if (null == a) return [];
            f(a) || (a = Object(a));
            var b = a.length;
            b = b && e(b) && (i(a) || n.nonEnumArgs && h(a)) && b || 0;
            for (var c = a.constructor, g = -1, j = "function" == typeof c && c.prototype === a, l = Array(b), m = b > 0; ++g < b; ) l[g] = g + "";
            for (var o in a) m && d(o, b) || "constructor" == o && (j || !k.call(a, o)) || l.push(o);
            return l;
        }
        var h = a("lodash.isarguments"), i = a("lodash.isarray"), j = Object.prototype, k = j.hasOwnProperty, l = j.propertyIsEnumerable, m = Math.pow(2, 53) - 1, n = {};
        !function(a) {
            try {
                n.nonEnumArgs = !l.call(arguments, 1);
            } catch (b) {
                n.nonEnumArgs = !0;
            }
        }(0, 0), b.exports = g;
    }, {
        "lodash.isarguments": 9,
        "lodash.isarray": 10
    } ],
    14: [ function(a, b, c) {
        function d(a) {
            return a && "object" == typeof a || !1;
        }
        function e(a) {
            return "number" == typeof a && a > -1 && a % 1 == 0 && G >= a;
        }
        function f(a) {
            return d(a) && e(a.length) && D[F.call(a)] || !1;
        }
        var g = "[object Arguments]", h = "[object Array]", i = "[object Boolean]", j = "[object Date]", k = "[object Error]", l = "[object Function]", m = "[object Map]", n = "[object Number]", o = "[object Object]", p = "[object RegExp]", q = "[object Set]", r = "[object String]", s = "[object WeakMap]", t = "[object ArrayBuffer]", u = "[object Float32Array]", v = "[object Float64Array]", w = "[object Int8Array]", x = "[object Int16Array]", y = "[object Int32Array]", z = "[object Uint8Array]", A = "[object Uint8ClampedArray]", B = "[object Uint16Array]", C = "[object Uint32Array]", D = {};
        D[u] = D[v] = D[w] = D[x] = D[y] = D[z] = D[A] = D[B] = D[C] = !0, D[g] = D[h] = D[t] = D[i] = D[j] = D[k] = D[l] = D[m] = D[n] = D[o] = D[p] = D[q] = D[r] = D[s] = !1;
        var E = Object.prototype, F = E.toString, G = Math.pow(2, 53) - 1;
        b.exports = f;
    }, {} ],
    15: [ function(a, b, c) {
        function d(a, b) {
            return a = +a, b = null == b ? p : b, a > -1 && a % 1 == 0 && b > a;
        }
        function e(a) {
            return "number" == typeof a && a > -1 && a % 1 == 0 && p >= a;
        }
        function f(a) {
            for (var b = h(a), c = b.length, f = c && a.length, g = f && e(f) && (j(a) || q.nonEnumArgs && i(a)), k = -1, l = []; ++k < c; ) {
                var n = b[k];
                (g && d(n, f) || m.call(a, n)) && l.push(n);
            }
            return l;
        }
        function g(a) {
            var b = typeof a;
            return "function" == b || a && "object" == b || !1;
        }
        function h(a) {
            if (null == a) return [];
            g(a) || (a = Object(a));
            var b = a.length;
            b = b && e(b) && (j(a) || q.nonEnumArgs && i(a)) && b || 0;
            for (var c = a.constructor, f = -1, h = "function" == typeof c && c.prototype === a, k = Array(b), l = b > 0; ++f < b; ) k[f] = f + "";
            for (var n in a) l && d(n, b) || "constructor" == n && (h || !m.call(a, n)) || k.push(n);
            return k;
        }
        var i = a("lodash.isarguments"), j = a("lodash.isarray"), k = a("lodash.isnative"), l = Object.prototype, m = l.hasOwnProperty, n = l.propertyIsEnumerable, o = k(o = Object.keys) && o, p = Math.pow(2, 53) - 1, q = {};
        !function(a) {
            try {
                q.nonEnumArgs = !n.call(arguments, 1);
            } catch (b) {
                q.nonEnumArgs = !0;
            }
        }(0, 0);
        var r = o ? function(a) {
            if (a) var b = a.constructor, c = a.length;
            return "function" == typeof b && b.prototype === a || "function" != typeof a && c && e(c) ? f(a) : g(a) ? o(a) : [];
        } : f;
        b.exports = r;
    }, {
        "lodash.isarguments": 9,
        "lodash.isarray": 10,
        "lodash.isnative": 16
    } ],
    16: [ function(a, b, c) {
        arguments[4][12][0].apply(c, arguments);
    }, {
        dup: 12
    } ],
    17: [ function(a, b, c) {
        function d(a) {
            return e(a, f(a));
        }
        var e = a("lodash._basecopy"), f = a("lodash.keysin");
        b.exports = d;
    }, {
        "lodash._basecopy": 18,
        "lodash.keysin": 19
    } ],
    18: [ function(a, b, c) {
        function d(a, b, c) {
            c || (c = b, b = {});
            for (var d = -1, e = c.length; ++d < e; ) {
                var f = c[d];
                b[f] = a[f];
            }
            return b;
        }
        b.exports = d;
    }, {} ],
    19: [ function(a, b, c) {
        arguments[4][13][0].apply(c, arguments);
    }, {
        dup: 13,
        "lodash.isarguments": 9,
        "lodash.isarray": 10
    } ],
    20: [ function(a, b, c) {
        function d(a) {
            var b = {}, c = l.keyPathSeparator;
            for (var e in a) {
                var f = a[e];
                if (!f || f.constructor !== Object && f.constructor !== Array || h.isEmpty(f)) b[e] = f; else {
                    var g = d(f);
                    for (var i in g) {
                        var j = g[i];
                        b[e + c + i] = j;
                    }
                }
            }
            return b;
        }
        function e(a, b, c) {
            for (var d = l.keyPathSeparator, e = b ? b.split(d) : [], f = a, g = 0, i = e.length; i > g; g++) {
                if (c && !h.has(f, e[g])) return !1;
                if (f = f[e[g]], null == f && i - 1 > g && (f = {}), "undefined" == typeof f) return c ? !0 : f;
            }
            return c ? !0 : f;
        }
        function f(a, b, c, d) {
            d = d || {};
            for (var e = l.keyPathSeparator, f = b ? b.split(e) : [], g = a, i = 0, j = f.length; j > i && void 0 !== g; i++) {
                var k = f[i];
                if (i === j - 1) d.unset ? delete g[k] : g[k] = c; else {
                    if ("undefined" == typeof g[k] || !h.isObject(g[k])) {
                        var m = f[i + 1];
                        g[k] = /^\d+$/.test(m) ? [] : {};
                    }
                    g = g[k];
                }
            }
        }
        function g(a, b) {
            f(a, b, null, {
                unset: !0
            });
        }
        try {
            var h = a("underscore");
        } catch (i) {
            var h = window._;
        }
        try {
            var j = a("backbone");
        } catch (i) {
            var j = window.Backbone;
        }
        var k = a("lodash.merge"), l = j.Model.extend({
            constructor: function(a, b) {
                var c, d = a || {};
                this.cid = h.uniqueId("c"), this.attributes = {}, b && b.collection && (this.collection = b.collection), 
                b && b.parse && (d = this.parse(d, b) || {}), (c = h.result(this, "defaults")) && (d = k(c, d)), 
                this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments);
            },
            toJSON: function(a) {
                return k({}, this.attributes);
            },
            get: function(a) {
                return e(this.attributes, a);
            },
            set: function(a, b, c) {
                var i, j, m, n, o, p, q, r;
                if (null == a) return this;
                if ("object" == typeof a ? (j = a, c = b || {}) : (j = {})[a] = b, c || (c = {}), 
                !this._validate(j, c)) return !1;
                m = c.unset, o = c.silent, n = [], p = this._changing, this._changing = !0, p || (this._previousAttributes = k({}, this.attributes), 
                this.changed = {}), r = this.attributes, q = this._previousAttributes, this.idAttribute in j && (this.id = j[this.idAttribute]), 
                j = d(j);
                for (i in j) b = j[i], h.isEqual(e(r, i), b) || n.push(i), h.isEqual(e(q, i), b) ? g(this.changed, i) : f(this.changed, i, b), 
                m ? g(r, i) : f(r, i, b);
                if (!o) {
                    n.length && (this._pending = !0);
                    for (var s = l.keyPathSeparator, t = {}, u = 0, v = n.length; v > u; u++) {
                        var a = n[u];
                        t.hasOwnProperty(a) && t[a] || (t[a] = !0, this.trigger("change:" + a, this, e(r, a), c));
                        for (var w = a.split(s), x = w.length - 1; x > 0; x--) {
                            var y = w.slice(0, x).join(s), z = y + s + "*";
                            t.hasOwnProperty(z) && t[z] || (t[z] = !0, this.trigger("change:" + z, this, e(r, y), c)), 
                            t.hasOwnProperty(y) && t[y] || (t[y] = !0, this.trigger("change:" + y, this, e(r, y), c));
                        }
                    }
                }
                if (p) return this;
                if (!o) for (;this._pending; ) this._pending = !1, this.trigger("change", this, c);
                return this._pending = !1, this._changing = !1, this;
            },
            clear: function(a) {
                var b = {}, c = d(this.attributes);
                for (var e in c) b[e] = void 0;
                return this.set(b, h.extend({}, a, {
                    unset: !0
                }));
            },
            hasChanged: function(a) {
                return null == a ? !h.isEmpty(this.changed) : void 0 !== e(this.changed, a);
            },
            changedAttributes: function(a) {
                if (!a) return this.hasChanged() ? d(this.changed) : !1;
                var b = this._changing ? this._previousAttributes : this.attributes;
                a = d(a), b = d(b);
                var c, e = !1;
                for (var f in a) h.isEqual(b[f], c = a[f]) || ((e || (e = {}))[f] = c);
                return e;
            },
            previous: function(a) {
                return null != a && this._previousAttributes ? e(this._previousAttributes, a) : null;
            },
            previousAttributes: function() {
                return k({}, this._previousAttributes);
            }
        });
        l.keyPathSeparator = ".", b.exports = l;
    }, {
        backbone: void 0,
        "lodash.merge": 2,
        underscore: void 0
    } ]
}, {}, [ 1 ]), function(a, b) {
    if ("function" == typeof define && define.amd) define([ "backbone", "underscore" ], function(a, c) {
        return b(a, c);
    }); else if ("undefined" != typeof exports) {
        var c = require("backbone"), d = require("underscore");
        module.exports = b(c, d);
    } else b(a.Backbone, a._);
}(this, function(a, b) {
    "use strict";
    var c = a.Wreqr, d = a.Wreqr = {};
    return a.Wreqr.VERSION = "1.3.2", a.Wreqr.noConflict = function() {
        return a.Wreqr = c, this;
    }, d.Handlers = function(a, b) {
        var c = function(a) {
            this.options = a, this._wreqrHandlers = {}, b.isFunction(this.initialize) && this.initialize(a);
        };
        return c.extend = a.Model.extend, b.extend(c.prototype, a.Events, {
            setHandlers: function(a) {
                b.each(a, function(a, c) {
                    var d = null;
                    b.isObject(a) && !b.isFunction(a) && (d = a.context, a = a.callback), this.setHandler(c, a, d);
                }, this);
            },
            setHandler: function(a, b, c) {
                var d = {
                    callback: b,
                    context: c
                };
                this._wreqrHandlers[a] = d, this.trigger("handler:add", a, b, c);
            },
            hasHandler: function(a) {
                return !!this._wreqrHandlers[a];
            },
            getHandler: function(a) {
                var b = this._wreqrHandlers[a];
                if (b) return function() {
                    return b.callback.apply(b.context, arguments);
                };
            },
            removeHandler: function(a) {
                delete this._wreqrHandlers[a];
            },
            removeAllHandlers: function() {
                this._wreqrHandlers = {};
            }
        }), c;
    }(a, b), d.CommandStorage = function() {
        var c = function(a) {
            this.options = a, this._commands = {}, b.isFunction(this.initialize) && this.initialize(a);
        };
        return b.extend(c.prototype, a.Events, {
            getCommands: function(a) {
                var b = this._commands[a];
                return b || (b = {
                    command: a,
                    instances: []
                }, this._commands[a] = b), b;
            },
            addCommand: function(a, b) {
                var c = this.getCommands(a);
                c.instances.push(b);
            },
            clearCommands: function(a) {
                var b = this.getCommands(a);
                b.instances = [];
            }
        }), c;
    }(), d.Commands = function(a, b) {
        return a.Handlers.extend({
            storageType: a.CommandStorage,
            constructor: function(b) {
                this.options = b || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this), 
                a.Handlers.prototype.constructor.apply(this, arguments);
            },
            execute: function(a) {
                a = arguments[0];
                var c = b.rest(arguments);
                this.hasHandler(a) ? this.getHandler(a).apply(this, c) : this.storage.addCommand(a, c);
            },
            _executeCommands: function(a, c, d) {
                var e = this.storage.getCommands(a);
                b.each(e.instances, function(a) {
                    c.apply(d, a);
                }), this.storage.clearCommands(a);
            },
            _initializeStorage: function(a) {
                var c, d = a.storageType || this.storageType;
                c = b.isFunction(d) ? new d() : d, this.storage = c;
            }
        });
    }(d, b), d.RequestResponse = function(a, b) {
        return a.Handlers.extend({
            request: function(a) {
                return this.hasHandler(a) ? this.getHandler(a).apply(this, b.rest(arguments)) : void 0;
            }
        });
    }(d, b), d.EventAggregator = function(a, b) {
        var c = function() {};
        return c.extend = a.Model.extend, b.extend(c.prototype, a.Events), c;
    }(a, b), d.Channel = function(c) {
        var d = function(b) {
            this.vent = new a.Wreqr.EventAggregator(), this.reqres = new a.Wreqr.RequestResponse(), 
            this.commands = new a.Wreqr.Commands(), this.channelName = b;
        };
        return b.extend(d.prototype, {
            reset: function() {
                return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), 
                this.commands.removeAllHandlers(), this;
            },
            connectEvents: function(a, b) {
                return this._connect("vent", a, b), this;
            },
            connectCommands: function(a, b) {
                return this._connect("commands", a, b), this;
            },
            connectRequests: function(a, b) {
                return this._connect("reqres", a, b), this;
            },
            _connect: function(a, c, d) {
                if (c) {
                    d = d || this;
                    var e = "vent" === a ? "on" : "setHandler";
                    b.each(c, function(c, f) {
                        this[a][e](f, b.bind(c, d));
                    }, this);
                }
            }
        }), d;
    }(d), d.radio = function(a, b) {
        var c = function() {
            this._channels = {}, this.vent = {}, this.commands = {}, this.reqres = {}, this._proxyMethods();
        };
        b.extend(c.prototype, {
            channel: function(a) {
                if (!a) throw new Error("Channel must receive a name");
                return this._getChannel(a);
            },
            _getChannel: function(b) {
                var c = this._channels[b];
                return c || (c = new a.Channel(b), this._channels[b] = c), c;
            },
            _proxyMethods: function() {
                b.each([ "vent", "commands", "reqres" ], function(a) {
                    b.each(d[a], function(b) {
                        this[a][b] = e(this, a, b);
                    }, this);
                }, this);
            }
        });
        var d = {
            vent: [ "on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce" ],
            commands: [ "execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ],
            reqres: [ "request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ]
        }, e = function(a, c, d) {
            return function(e) {
                var f = a._getChannel(e)[c];
                return f[d].apply(f, b.rest(arguments));
            };
        };
        return new c();
    }(d, b), a.Wreqr;
}), window.google = window.google || {}, google.maps = google.maps || {}, function() {
    function a(a) {
        document.write('<script src="' + a + '"></script>');
    }
    var b = google.maps.modules = {};
    google.maps.__gjsload__ = function(a, c) {
        b[a] = c;
    }, google.maps.Load = function(a) {
        delete google.maps.Load, a([ .009999999776482582, [ [ [ "https://mts0.googleapis.com/vt?lyrs=m@298000000&src=api&hl=en-US&", "https://mts1.googleapis.com/vt?lyrs=m@298000000&src=api&hl=en-US&" ], null, null, null, null, "m@298000000", [ "https://mts0.google.com/vt?lyrs=m@298000000&src=api&hl=en-US&", "https://mts1.google.com/vt?lyrs=m@298000000&src=api&hl=en-US&" ] ], [ [ "https://khms0.googleapis.com/kh?v=169&hl=en-US&", "https://khms1.googleapis.com/kh?v=169&hl=en-US&" ], null, null, null, 1, "169", [ "https://khms0.google.com/kh?v=169&hl=en-US&", "https://khms1.google.com/kh?v=169&hl=en-US&" ] ], [ [ "https://mts0.googleapis.com/vt?lyrs=h@298000000&src=api&hl=en-US&", "https://mts1.googleapis.com/vt?lyrs=h@298000000&src=api&hl=en-US&" ], null, null, null, null, "h@298000000", [ "https://mts0.google.com/vt?lyrs=h@298000000&src=api&hl=en-US&", "https://mts1.google.com/vt?lyrs=h@298000000&src=api&hl=en-US&" ] ], [ [ "https://mts0.googleapis.com/vt?lyrs=t@132,r@298000000&src=api&hl=en-US&", "https://mts1.googleapis.com/vt?lyrs=t@132,r@298000000&src=api&hl=en-US&" ], null, null, null, null, "t@132,r@298000000", [ "https://mts0.google.com/vt?lyrs=t@132,r@298000000&src=api&hl=en-US&", "https://mts1.google.com/vt?lyrs=t@132,r@298000000&src=api&hl=en-US&" ] ], null, null, [ [ "https://cbks0.googleapis.com/cbk?", "https://cbks1.googleapis.com/cbk?" ] ], [ [ "https://khms0.googleapis.com/kh?v=85&hl=en-US&", "https://khms1.googleapis.com/kh?v=85&hl=en-US&" ], null, null, null, null, "85", [ "https://khms0.google.com/kh?v=85&hl=en-US&", "https://khms1.google.com/kh?v=85&hl=en-US&" ] ], [ [ "https://mts0.googleapis.com/mapslt?hl=en-US&", "https://mts1.googleapis.com/mapslt?hl=en-US&" ] ], [ [ "https://mts0.googleapis.com/mapslt/ft?hl=en-US&", "https://mts1.googleapis.com/mapslt/ft?hl=en-US&" ] ], [ [ "https://mts0.googleapis.com/vt?hl=en-US&", "https://mts1.googleapis.com/vt?hl=en-US&" ] ], [ [ "https://mts0.googleapis.com/mapslt/loom?hl=en-US&", "https://mts1.googleapis.com/mapslt/loom?hl=en-US&" ] ], [ [ "https://mts0.googleapis.com/mapslt?hl=en-US&", "https://mts1.googleapis.com/mapslt?hl=en-US&" ] ], [ [ "https://mts0.googleapis.com/mapslt/ft?hl=en-US&", "https://mts1.googleapis.com/mapslt/ft?hl=en-US&" ] ], [ [ "https://mts0.googleapis.com/mapslt/loom?hl=en-US&", "https://mts1.googleapis.com/mapslt/loom?hl=en-US&" ] ] ], [ "en-US", "US", null, 0, null, null, "https://maps.gstatic.com/mapfiles/", "https://csi.gstatic.com", "https://maps.googleapis.com", "https://maps.googleapis.com", null, "https://maps.google.com", "https://gg.google.com", "https://maps.gstatic.com/maps-api-v3/api/images/", "https://www.google.com/maps", 0 ], [ "https://maps.gstatic.com/maps-api-v3/api/js/20/9", "3.20.9" ], [ 868151121 ], 1, null, null, null, null, null, "", null, null, 1, "https://khms.googleapis.com/mz?v=169&", null, "https://earthbuilder.googleapis.com", "https://earthbuilder.googleapis.com", null, "https://mts.googleapis.com/vt/icon", [ [ "https://mts0.googleapis.com/vt", "https://mts1.googleapis.com/vt" ], [ "https://mts0.googleapis.com/vt", "https://mts1.googleapis.com/vt" ], null, null, null, null, null, null, null, null, null, null, [ "https://mts0.google.com/vt", "https://mts1.google.com/vt" ], "/maps/vt", 298e6, 132 ], 2, 500, [ null, "https://g0.gstatic.com/landmark/tour", "https://g0.gstatic.com/landmark/config", "", "https://www.google.com/maps/preview/log204", "", "https://static.panoramio.com.storage.googleapis.com/photos/", [ "https://geo0.ggpht.com/cbk", "https://geo1.ggpht.com/cbk", "https://geo2.ggpht.com/cbk", "https://geo3.ggpht.com/cbk" ] ], [ "https://www.google.com/maps/api/js/master?pb=!1m2!1u20!2s9!2sen-US!3sUS!4s20/9", "https://www.google.com/maps/api/js/widget?pb=!1m2!1u20!2s9!2sen-US" ], null, 0, 0, "/maps/api/js/ApplicationService.GetEntityDetails", 0 ], c);
    };
    var c = new Date().getTime();
    a("https://maps.gstatic.com/maps-api-v3/api/js/20/9/main.js");
}();