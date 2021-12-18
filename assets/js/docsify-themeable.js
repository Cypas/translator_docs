/*!
 * docsify-themeable
 * v0.8.4
 * https://jhildenbiddle.github.io/docsify-themeable/
 * (c) 2018-2020 John Hildenbiddle
 * MIT license
 */
! function () {
    "use strict";

    function p() {
        return (p = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, r = arguments[t];
                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }).apply(this, arguments)
    }

    function v(e) {
        return function (e) {
            if (Array.isArray(e)) return r(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        var t = 1 < arguments.length && void 0 !== t ? t : {},
            o = {
                mimeType: t.mimeType || null,
                onBeforeSend: t.onBeforeSend || Function.prototype,
                onSuccess: t.onSuccess || Function.prototype,
                onError: t.onError || Function.prototype,
                onComplete: t.onComplete || Function.prototype
            },
            r = Array.isArray(e) ? e : [e],
            a = Array.apply(null, Array(r.length)).map(function (e) {
                return null
            });

        function s(e) {
            return !("<" === (0 < arguments.length && void 0 !== e ? e : "").trim().charAt(0))
        }

        function c(e, t) {
            o.onError(e, r[t], t)
        }

        function i(e, t) {
            var n = o.onSuccess(e, r[t], t);
            e = !1 === n ? "" : n || e, a[t] = e, -1 === a.indexOf(null) && o.onComplete(a)
        }
        var u = document.createElement("a");
        r.forEach(function (e, t) {
            var n, r;
            u.setAttribute("href", e), u.href = String(u.href), Boolean(document.all && !window.atob) && u.host.split(":")[0] !== location.host.split(":")[0] ? u.protocol === location.protocol ? ((n = new XDomainRequest).open("GET", e), n.timeout = 0, n.onprogress = Function.prototype, n.ontimeout = Function.prototype, n.onload = function () {
                s(n.responseText) ? i(n.responseText, t) : c(n, t)
            }, n.onerror = function (e) {
                c(n, t)
            }, setTimeout(function () {
                n.send()
            }, 0)) : (console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e, ")")), c(null, t)) : ((r = new XMLHttpRequest).open("GET", e), o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.onBeforeSend(r, e, t), r.onreadystatechange = function () {
                4 === r.readyState && (200 === r.status && s(r.responseText) ? i(r.responseText, t) : c(r, t))
            }, r.send())
        })
    }

    function t(e) {
        var a = {
                cssComments: /\/\*[\s\S]+?\*\//g,
                cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
            },
            d = {
                rootElement: e.rootElement || document,
                include: e.include || 'style,link[rel="stylesheet"]',
                exclude: e.exclude || null,
                filter: e.filter || null,
                skipDisabled: !1 !== e.skipDisabled,
                useCSSOM: e.useCSSOM || !1,
                onBeforeSend: e.onBeforeSend || Function.prototype,
                onSuccess: e.onSuccess || Function.prototype,
                onError: e.onError || Function.prototype,
                onComplete: e.onComplete || Function.prototype
            },
            t = Array.apply(null, d.rootElement.querySelectorAll(d.include)).filter(function (e) {
                return t = e, e = d.exclude, !(t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector).call(t, e);
                var t
            }),
            s = Array.apply(null, Array(t.length)).map(function (e) {
                return null
            });

        function c() {
            var e; - 1 === s.indexOf(null) && (e = s.join(""), d.onComplete(e, s, t))
        }

        function i(e, n, r, t) {
            var o = d.onSuccess(e, r, t);
            (function r(o, a, s, c) {
                var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [];
                var u = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : [];
                var l = f(o, s, u);
                l.rules.length ? m(l.absoluteUrls, {
                    onBeforeSend: function (e, t, n) {
                        d.onBeforeSend(e, a, t)
                    },
                    onSuccess: function (n, e, t) {
                        var r = d.onSuccess(n, a, e),
                            o = f(n = !1 === r ? "" : r || n, e, u);
                        return o.rules.forEach(function (e, t) {
                            n = n.replace(e, o.absoluteRules[t])
                        }), n
                    },
                    onError: function (e, t, n) {
                        i.push({
                            xhr: e,
                            url: t
                        }), u.push(l.rules[n]), r(o, a, s, c, i, u)
                    },
                    onComplete: function (e) {
                        e.forEach(function (e, t) {
                            o = o.replace(l.rules[t], e)
                        }), r(o, a, s, c, i, u)
                    }
                }) : c(o, i)
            })(e = void 0 !== o && !1 === Boolean(o) ? "" : o || e, r, t, function (e, t) {
                null === s[n] && (t.forEach(function (e) {
                    return d.onError(e.xhr, r, e.url)
                }), !d.filter || d.filter.test(e) ? s[n] = e : s[n] = "", c())
            })
        }

        function f(e, r, t) {
            var n = 2 < arguments.length && void 0 !== t ? t : [],
                o = {};
            return o.rules = (e.replace(a.cssComments, "").match(a.cssImports) || []).filter(function (e) {
                return -1 === n.indexOf(e)
            }), o.urls = o.rules.map(function (e) {
                return e.replace(a.cssImports, "$1")
            }), o.absoluteUrls = o.urls.map(function (e) {
                return u(e, r)
            }), o.absoluteRules = o.rules.map(function (e, t) {
                var n = o.urls[t],
                    t = u(o.absoluteUrls[t], r);
                return e.replace(n, t)
            }), o
        }
        t.length ? t.forEach(function (n, r) {
            var o = n.getAttribute("href"),
                e = n.getAttribute("rel"),
                t = "LINK" === n.nodeName && o && e && -1 !== e.toLowerCase().indexOf("stylesheet"),
                a = !1 !== d.skipDisabled && n.disabled,
                e = "STYLE" === n.nodeName;
            t && !a ? m(o, {
                mimeType: "text/css",
                onBeforeSend: function (e, t) {
                    d.onBeforeSend(e, n, t)
                },
                onSuccess: function (e) {
                    var t = u(o);
                    i(e, r, n, t)
                },
                onError: function (e, t) {
                    s[r] = "", d.onError(e, n, t), c()
                }
            }) : e && !a ? (a = n.textContent, d.useCSSOM && (a = Array.apply(null, n.sheet.cssRules).map(function (e) {
                return e.cssText
            }).join("")), i(a, r, n, location.href)) : (s[r] = "", c())
        }) : d.onComplete("", [])
    }

    function u(e, t) {
        var n = document.implementation.createHTMLDocument(""),
            r = n.createElement("base"),
            o = n.createElement("a");
        return n.head.appendChild(r), n.body.appendChild(o), r.href = t || document.baseURI || (document.querySelector("base") || {}).href || location.href, o.href = e, o.href
    }
    var h = e;

    function e(e, t, n) {
        e instanceof RegExp && (e = o(e, n)), t instanceof RegExp && (t = o(t, n));
        var r = a(e, t, n);
        return r && {
            start: r[0],
            end: r[1],
            pre: n.slice(0, r[0]),
            body: n.slice(r[0] + e.length, r[1]),
            post: n.slice(r[1] + t.length)
        }
    }

    function o(e, t) {
        e = t.match(e);
        return e ? e[0] : null
    }

    function a(e, t, n) {
        var r, o, a, s, c, i = n.indexOf(e),
            u = n.indexOf(t, i + 1),
            l = i;
        if (0 <= i && 0 < u) {
            for (r = [], a = n.length; 0 <= l && !c;) l == i ? (r.push(l), i = n.indexOf(e, l + 1)) : 1 == r.length ? c = [r.pop(), u] : ((o = r.pop()) < a && (a = o, s = u), u = n.indexOf(t, l + 1)), l = i < u && 0 <= i ? i : u;
            r.length && (c = [a, s])
        }
        return c
    }

    function y(o, e) {
        var a = p({}, {
            preserveStatic: !0,
            removeComments: !1
        }, 1 < arguments.length && void 0 !== e ? e : {});

        function s(e) {
            throw new Error("CSS parse error: ".concat(e))
        }

        function c(e) {
            e = e.exec(o);
            if (e) return o = o.slice(e[0].length), e
        }

        function i() {
            return c(/^{\s*/)
        }

        function u() {
            return c(/^}/)
        }

        function l() {
            c(/^\s*/)
        }

        function d() {
            for (var e, t = []; e = function () {
                    if (l(), "/" === o[0] && "*" === o[1]) {
                        for (var e = 2; o[e] && ("*" !== o[e] || "/" !== o[e + 1]);) e++;
                        if (!o[e]) return s("end of comment is missing");
                        var t = o.slice(2, e);
                        return o = o.slice(e + 2), {
                            type: "comment",
                            comment: t
                        }
                    }
                }();) t.push(e);
            return a.removeComments ? [] : t
        }

        function f() {
            for (l();
                "}" === o[0];) s("extra closing bracket");
            var e = c(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
            if (e) return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (e) {
                return e.replace(/,/g, "‌")
            }).split(/\s*(?![^(]*\)),\s*/).map(function (e) {
                return e.replace(/\u200C/g, ",")
            })
        }

        function m() {
            if (!i()) return s("missing '{'");
            for (var e, t = d(); e = function () {
                    if ("@" === o[0]) return r();
                    c(/^([;\s]*)+/);
                    var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                        t = c(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
                    if (t) {
                        if (t = t[0].trim(), !c(/^:\s*/)) return s("property missing ':'");
                        var n = c(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),
                            e = {
                                type: "declaration",
                                property: t.replace(e, ""),
                                value: n ? n[0].replace(e, "").trim() : ""
                            };
                        return c(/^[;\s]*/), e
                    }
                }();) t.push(e), t = t.concat(d());
            return u() ? t : s("missing '}'")
        }

        function t() {
            if (n = c(/^@([-\w]+)?keyframes\s*/)) {
                var e = n[1];
                if (!(n = c(/^([-\w]+)\s*/))) return s("@keyframes missing name");
                var t, n = n[1];
                if (!i()) return s("@keyframes missing '{'");
                for (var r = d(); t = function () {
                        l();
                        for (var e, t = []; e = c(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) t.push(e[1]), c(/^,\s*/);
                        if (t.length) return {
                            type: "keyframe",
                            values: t,
                            declarations: m()
                        }
                    }();) r.push(t), r = r.concat(d());
                return u() ? {
                    type: "keyframes",
                    name: n,
                    vendor: e,
                    keyframes: r
                } : s("@keyframes missing '}'")
            }
        }

        function r() {
            if (l(), "@" === o[0]) {
                var e = function () {
                    var e = c(/^@(import|charset|namespace)\s*([^;]+);/);
                    if (e) return {
                        type: e[1],
                        name: e[2].trim()
                    }
                }() || function () {
                    if (c(/^@font-face\s*/)) return {
                        type: "font-face",
                        declarations: m()
                    }
                }() || function () {
                    var e = c(/^@media([^{]+)*/);
                    if (e) return {
                        type: "media",
                        media: (e[1] || "").trim(),
                        rules: n()
                    }
                }() || t() || function () {
                    var e = c(/^@supports *([^{]+)/);
                    if (e) return {
                        type: "supports",
                        supports: e[1].trim(),
                        rules: n()
                    }
                }() || function () {
                    var e = c(/^@([-\w]+)?document *([^{]+)/);
                    if (e) return {
                        type: "document",
                        document: e[2].trim(),
                        vendor: e[1] ? e[1].trim() : null,
                        rules: n()
                    }
                }() || function () {
                    var e = c(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                    if (e) return {
                        type: "custom-media",
                        name: e[1].trim(),
                        media: e[2].trim()
                    }
                }() || function () {
                    if (c(/^@host\s*/)) return {
                        type: "host",
                        rules: n()
                    }
                }() || function () {
                    if (c(/^@page */)) return {
                        type: "page",
                        selectors: f() || [],
                        declarations: m()
                    }
                }() || function () {
                    var e = c(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);
                    if (e) return {
                        type: "page-margin-box",
                        name: "".concat(e[1], "-").concat(e[2]) + (e[3] ? "-".concat(e[3]) : ""),
                        declarations: m()
                    }
                }();
                if (!e || a.preserveStatic) return e;
                return (e.declarations ? e.declarations.some(function (e) {
                    return /var\(/.test(e.value)
                }) : (e.keyframes || e.rules || []).some(function (e) {
                    return (e.declarations || []).some(function (e) {
                        return /var\(/.test(e.value)
                    })
                })) ? e : {}
            }
        }

        function n(e) {
            if (!e && !i()) return s("missing '{'");
            for (var t, n = d(); o.length && (e || "}" !== o[0]) && (t = r() || function () {
                    if (!a.preserveStatic) {
                        var e = h("{", "}", o);
                        if (e) {
                            var t = /:(?:root|host)(?![.:#(])/.test(e.pre) && /--\S*\s*:/.test(e.body),
                                n = /var\(/.test(e.body);
                            if (!t && !n) return o = o.slice(e.end + 1), {}
                        }
                    }
                    var r = f() || [],
                        e = a.preserveStatic ? m() : m().filter(function (e) {
                            var t = r.some(function (e) {
                                    return /:(?:root|host)(?![.:#(])/.test(e)
                                }) && /^--\S/.test(e.property),
                                e = /var\(/.test(e.value);
                            return t || e
                        });
                    return r.length || s("selector missing"), {
                        type: "rule",
                        selectors: r,
                        declarations: e
                    }
                }());) t.type && n.push(t), n = n.concat(d());
            return e || u() ? n : s("missing '}'")
        }
        return {
            type: "stylesheet",
            stylesheet: {
                rules: n(!0),
                errors: []
            }
        }
    }

    function g(e, t) {
        var r = p({}, {
                parseHost: !1,
                store: {},
                onWarning: function () {}
            }, 1 < arguments.length && void 0 !== t ? t : {}),
            n = new RegExp(":".concat(r.parseHost ? "host" : "root", "$"));
        return "string" == typeof e && (e = y(e, r)), e.stylesheet.rules.forEach(function (e) {
            "rule" === e.type && e.selectors.some(function (e) {
                return n.test(e)
            }) && e.declarations.forEach(function (e, t) {
                var n = e.property,
                    e = e.value;
                n && 0 === n.indexOf("--") && (r.store[n] = e)
            })
        }), r.store
    }

    function b(e, t, n) {
        var a = 1 < arguments.length && void 0 !== t ? t : "",
            s = 2 < arguments.length ? n : void 0,
            c = {
                charset: function (e) {
                    return "@charset " + e.name + ";"
                },
                comment: function (e) {
                    return 0 === e.comment.indexOf("__CSSVARSPONYFILL") ? "/*" + e.comment + "*/" : ""
                },
                "custom-media": function (e) {
                    return "@custom-media " + e.name + " " + e.media + ";"
                },
                declaration: function (e) {
                    return e.property + ":" + e.value + ";"
                },
                document: function (e) {
                    return "@" + (e.vendor || "") + "document " + e.document + "{" + r(e.rules) + "}"
                },
                "font-face": function (e) {
                    return "@font-face{" + r(e.declarations) + "}"
                },
                host: function (e) {
                    return "@host{" + r(e.rules) + "}"
                },
                import: function (e) {
                    return "@import " + e.name + ";"
                },
                keyframe: function (e) {
                    return e.values.join(",") + "{" + r(e.declarations) + "}"
                },
                keyframes: function (e) {
                    return "@" + (e.vendor || "") + "keyframes " + e.name + "{" + r(e.keyframes) + "}"
                },
                media: function (e) {
                    return "@media " + e.media + "{" + r(e.rules) + "}"
                },
                namespace: function (e) {
                    return "@namespace " + e.name + ";"
                },
                page: function (e) {
                    return "@page " + (e.selectors.length ? e.selectors.join(", ") : "") + "{" + r(e.declarations) + "}"
                },
                "page-margin-box": function (e) {
                    return "@" + e.name + "{" + r(e.declarations) + "}"
                },
                rule: function (e) {
                    var t = e.declarations;
                    if (t.length) return e.selectors.join(",") + "{" + r(t) + "}"
                },
                supports: function (e) {
                    return "@supports " + e.supports + "{" + r(e.rules) + "}"
                }
            };

        function r(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e[n];
                s && s(r);
                var o = c[r.type](r);
                o && (t += o, o.length && r.selectors && (t += a))
            }
            return t
        }
        return r(e.stylesheet.rules)
    }
    e.range = a;
    var i = "--",
        l = "var";

    function S(e, t) {
        var c = p({}, {
            preserveStatic: !0,
            preserveVars: !1,
            variables: {},
            onWarning: function () {}
        }, 1 < arguments.length && void 0 !== t ? t : {});
        return "string" == typeof e && (e = y(e, c)),
            function e(n, r) {
                n.rules.forEach(function (t) {
                    t.rules ? e(t, r) : t.keyframes ? t.keyframes.forEach(function (e) {
                        "keyframe" === e.type && r(e.declarations, t)
                    }) : t.declarations && r(t.declarations, n)
                })
            }(e.stylesheet, function (e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = r.type,
                        a = r.property,
                        s = r.value;
                    "declaration" === o && (c.preserveVars || !a || 0 !== a.indexOf(i) ? -1 === s.indexOf(l + "(") || (s = function o(e) {
                        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        var s = 2 < arguments.length ? arguments[2] : void 0;
                        if (-1 === e.indexOf("var(")) return e;
                        var t = h("(", ")", e);

                        function n(e) {
                            var t = e.split(",")[0].replace(/[\s\n\t]/g, ""),
                                n = (e.match(/(?:\s*,\s*){1}(.*)?/) || [])[1],
                                r = Object.prototype.hasOwnProperty.call(a.variables, t) ? String(a.variables[t]) : void 0,
                                n = r || (n ? String(n) : void 0),
                                e = s || e;
                            return r || a.onWarning('variable "'.concat(t, '" is undefined')), n && "undefined" !== n && 0 < n.length ? o(n, a, e) : "var(".concat(e, ")")
                        } {
                            if (t) {
                                if ("var" !== t.pre.slice(-3)) return t.pre + "(".concat(o(t.body, a), ")") + o(t.post, a);
                                var r = 0 === t.body.trim().length;
                                return r ? (a.onWarning("var() must contain a non-whitespace string"), e) : t.pre.slice(0, -3) + n(t.body) + o(t.post, a)
                            }
                            return -1 !== e.indexOf("var(") && a.onWarning('missing closing ")" in the value "'.concat(e, '"')), e
                        }
                    }(s, c)) !== r.value && (s = function (n) {
                        return (n.match(/calc\(([^)]+)\)/g) || []).forEach(function (e) {
                            var t = "calc".concat(e.split("calc").join(""));
                            n = n.replace(e, t)
                        }), n
                    }(s), c.preserveVars ? (e.splice(n, 0, {
                        type: o,
                        property: a,
                        value: s
                    }), n++) : r.value = s) : (e.splice(n, 1), n--))
                }
            }), b(e)
    }
    var c = "undefined" != typeof window,
        w = c && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)"),
        E = {
            group: 0,
            job: 0
        },
        A = {
            rootElement: c ? document : null,
            shadowDOM: !1,
            include: "style,link[rel=stylesheet]",
            exclude: "",
            variables: {},
            onlyLegacy: !0,
            preserveStatic: !0,
            preserveVars: !1,
            silent: !1,
            updateDOM: !0,
            updateURLs: !0,
            watch: null,
            onBeforeSend: function () {},
            onError: function () {},
            onWarning: function () {},
            onSuccess: function () {},
            onComplete: function () {},
            onFinally: function () {}
        },
        C = {
            cssComments: /\/\*[\s\S]+?\*\//g,
            cssKeyframes: /@(?:-\w*-)?keyframes/,
            cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
            cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
            cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
            cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
            cssVarFunc: /var\(\s*--[\w-]/,
            cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
        },
        x = {
            dom: {},
            job: {},
            user: {}
        },
        O = !1,
        L = null,
        k = 0,
        j = null,
        M = !1;

    function T() {
        var e, n, r, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            a = "cssVars(): ",
            d = p({}, A, o);

        function f(e, t, n, r) {
            !d.silent && window.console && console.error("".concat(a).concat(e, "\n"), t), d.onError(e, t, n, r)
        }

        function m(e) {
            !d.silent && window.console && console.warn("".concat(a).concat(e)), d.onWarning(e)
        }

        function s(e) {
            d.onFinally(Boolean(e), w, q() - d.__benchmark)
        }
        if (c) {
            if (d.watch) return d.watch = A.watch,
                function (o) {
                    function r(e) {
                        var t = e.hasAttribute("disabled"),
                            e = (e.sheet || {}).disabled;
                        return t || e
                    }

                    function a(e) {
                        return "LINK" === e.tagName && -1 !== (e.getAttribute("rel") || "").indexOf("stylesheet") && !r(e)
                    }

                    function n(e) {
                        return Array.apply(null, e).some(function (e) {
                            var t, n = 1 === e.nodeType && e.hasAttribute("data-cssvars"),
                                t = "STYLE" === (t = e).tagName && !r(t) && C.cssVars.test(e.textContent);
                            return !n && (a(e) || t)
                        })
                    }
                    if (!window.MutationObserver) return;
                    L && (L.disconnect(), L = null);
                    (L = new MutationObserver(function (e) {
                        e.some(function (e) {
                            var t = !1;
                            return "attributes" === e.type ? t = a(e.target) : "childList" === e.type && (t = n(e.addedNodes) || (e = e.removedNodes, Array.apply(null, e).some(function (e) {
                                var t = 1 === e.nodeType,
                                    n = t && "out" === e.getAttribute("data-cssvars"),
                                    r = t && "src" === e.getAttribute("data-cssvars"),
                                    t = r;
                                return (r || n) && (e = e.getAttribute("data-cssvars-group"), e = o.rootElement.querySelector('[data-cssvars-group="'.concat(e, '"]')), r && (_(o.rootElement), x.dom = {}), e && e.parentNode.removeChild(e)), t
                            }))), t
                        }) && T(o)
                    })).observe(document.documentElement, {
                        attributes: !0,
                        attributeFilter: ["disabled", "href"],
                        childList: !0,
                        subtree: !0
                    })
                }(d), void T(d);
            if (!1 === d.watch && L && (L.disconnect(), L = null), !d.__benchmark) {
                if (O === d.rootElement) return void
                function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100;
                    clearTimeout(j), j = setTimeout(function () {
                        e.__benchmark = null, T(e)
                    }, t)
                }(o);
                d.__benchmark = q(), d.exclude = [L ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', d.exclude].filter(function (e) {
                    return e
                }).join(","), d.variables = function () {
                    var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        r = /^-{2}/;
                    return Object.keys(n).reduce(function (e, t) {
                        return e[r.test(t) ? t : "--".concat(t.replace(/^-+/, ""))] = n[t], e
                    }, {})
                }(d.variables), L || (Array.apply(null, d.rootElement.querySelectorAll('[data-cssvars="out"]')).forEach(function (e) {
                    var t = e.getAttribute("data-cssvars-group");
                    (t ? d.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t, '"]')) : null) || e.parentNode.removeChild(e)
                }), !k || (e = d.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])')).length < k && (k = e.length, x.dom = {}))
            }
            "loading" !== document.readyState ? w && d.onlyLegacy ? (n = !1, d.updateDOM && (r = d.rootElement.host || (d.rootElement === document ? document.documentElement : d.rootElement), Object.keys(d.variables).forEach(function (e) {
                var t = d.variables[e];
                n = n || t !== getComputedStyle(r).getPropertyValue(e), r.style.setProperty(e, t)
            })), s(n)) : !M && (d.shadowDOM || d.rootElement.shadowRoot || d.rootElement.host) ? t({
                rootElement: A.rootElement,
                include: A.include,
                exclude: d.exclude,
                skipDisabled: !1,
                onSuccess: function (e) {
                    return (e = ((e = e.replace(C.cssComments, "").replace(C.cssMediaQueries, "")).match(C.cssVarDeclRules) || []).join("")) || !1
                },
                onComplete: function (e) {
                    g(e, {
                        store: x.dom,
                        onWarning: m
                    }), M = !0, T(d)
                }
            }) : (O = d.rootElement, t({
                rootElement: d.rootElement,
                include: d.include,
                exclude: d.exclude,
                skipDisabled: !1,
                onBeforeSend: d.onBeforeSend,
                onError: function (e, t, n) {
                    var r = e.responseURL || N(n, location.href),
                        n = e.statusText ? "(".concat(e.statusText, ")") : "Unspecified Error" + (0 === e.status ? " (possibly CORS related)" : "");
                    f("CSS XHR Error: ".concat(r, " ").concat(e.status, " ").concat(n), t, e, r)
                },
                onSuccess: function (e, t, n) {
                    var r, o, a = "LINK" === t.tagName,
                        s = "STYLE" === t.tagName && e !== t.textContent,
                        t = d.onSuccess(e, t, n);
                    return e = void 0 !== t && !1 === Boolean(t) ? "" : t || e, d.updateURLs && (a || s) && (o = n, ((r = e).replace(C.cssComments, "").match(C.cssUrls) || []).forEach(function (e) {
                        var t = e.replace(C.cssUrls, "$1"),
                            n = N(t, o);
                        r = r.replace(e, e.replace(t, n))
                    }), e = r), e
                },
                onComplete: function (e, c, t) {
                    var t = 2 < arguments.length && void 0 !== t ? t : [],
                        n = p({}, x.dom, x.user);
                    if (x.job = {}, t.forEach(function (t, e) {
                            var n = c[e];
                            if (C.cssVars.test(n)) try {
                                var r = y(n, {
                                    preserveStatic: d.preserveStatic,
                                    removeComments: !0
                                });
                                g(r, {
                                    parseHost: Boolean(d.rootElement.host),
                                    store: x.dom,
                                    onWarning: m
                                }), t.__cssVars = {
                                    tree: r
                                }
                            } catch (e) {
                                f(e.message, t)
                            }
                        }), p(x.job, x.dom), d.updateDOM ? (p(x.user, d.variables), p(x.job, x.user)) : (p(x.job, x.user, d.variables), p(n, d.variables)), 0 < E.job && Boolean(Object.keys(x.job).length > Object.keys(n).length || Boolean(Object.keys(n).length && Object.keys(x.job).some(function (e) {
                            return x.job[e] !== n[e]
                        })))) _(d.rootElement), T(d);
                    else {
                        var i = [],
                            u = [],
                            l = !1;
                        if (d.updateDOM && E.job++, t.forEach(function (t, e) {
                                var n = !t.__cssVars;
                                if (t.__cssVars) try {
                                    S(t.__cssVars.tree, p({}, d, {
                                        variables: x.job,
                                        onWarning: m
                                    }));
                                    var r, o, a, s = b(t.__cssVars.tree);
                                    d.updateDOM ? (o = c[e], a = C.cssVarFunc.test(o), t.getAttribute("data-cssvars") || t.setAttribute("data-cssvars", "src"), s.length && a && (r = t.getAttribute("data-cssvars-group") || ++E.group, o = s.replace(/\s/g, ""), a = d.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(r, '"]')) || document.createElement("style"), l = l || C.cssKeyframes.test(s), d.preserveStatic && (t.sheet.disabled = !0), a.hasAttribute("data-cssvars") || a.setAttribute("data-cssvars", "out"), o === t.textContent.replace(/\s/g, "") ? (n = !0, a && a.parentNode && (t.removeAttribute("data-cssvars-group"), a.parentNode.removeChild(a))) : o !== a.textContent.replace(/\s/g, "") && ([t, a].forEach(function (e) {
                                        e.setAttribute("data-cssvars-job", E.job), e.setAttribute("data-cssvars-group", r)
                                    }), a.textContent = s, i.push(s), u.push(a), a.parentNode || t.parentNode.insertBefore(a, t.nextSibling)))) : t.textContent.replace(/\s/g, "") !== s && i.push(s)
                                } catch (e) {
                                    f(e.message, t)
                                }
                                n && t.setAttribute("data-cssvars", "skip"), t.hasAttribute("data-cssvars-job") || t.setAttribute("data-cssvars-job", E.job)
                            }), k = d.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length, d.shadowDOM)
                            for (var r, o = [d.rootElement].concat(v(d.rootElement.querySelectorAll("*"))), a = 0; r = o[a]; ++a) {
                                r.shadowRoot && r.shadowRoot.querySelector("style") && T(p({}, d, {
                                    rootElement: r.shadowRoot
                                }))
                            }
                        d.updateDOM && l && function (e) {
                            var t = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(function (e) {
                                return getComputedStyle(document.body)[e]
                            })[0];
                            if (t) {
                                for (var n = e.getElementsByTagName("*"), r = [], o = "__CSSVARSPONYFILL-KEYFRAMES__", a = 0, s = n.length; a < s; a++) {
                                    var c = n[a];
                                    "none" !== getComputedStyle(c)[t] && (c.style[t] += o, r.push(c))
                                }
                                document.body.offsetHeight;
                                for (var i = 0, u = r.length; i < u; i++) {
                                    var l = r[i].style;
                                    l[t] = l[t].replace(o, "")
                                }
                            }
                        }(d.rootElement), O = !1, d.onComplete(i.join(""), u, JSON.parse(JSON.stringify(x.job)), q() - d.__benchmark), s(u.length)
                    }
                }
            })) : document.addEventListener("DOMContentLoaded", function e(t) {
                T(o), document.removeEventListener("DOMContentLoaded", e)
            })
        }
    }

    function N(e, t) {
        var n = 1 < arguments.length && void 0 !== t ? t : location.href,
            r = document.implementation.createHTMLDocument(""),
            o = r.createElement("base"),
            t = r.createElement("a");
        return r.head.appendChild(o), r.body.appendChild(t), o.href = n, t.href = e, t.href
    }

    function q() {
        return c && (window.performance || {}).now ? window.performance.now() : (new Date).getTime()
    }

    function _(e) {
        Array.apply(null, e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]')).forEach(function (e) {
            return e.setAttribute("data-cssvars", "")
        })
    }

    function s(e, t, n) {
        var r = 2 < arguments.length && void 0 !== n ? n : null,
            o = 3 === e.childNodes[0].nodeType,
            n = e.querySelector("ul");
        if (o && n && !Array.apply(null, e.children).some(function (e) {
                return -1 < e.tabIndex
            }).length) {
            var a = document.createElement("span");
            for (null !== r && a.setAttribute("tabindex", r), e.insertBefore(a, n); e.childNodes[0] !== a;) a.appendChild(e.childNodes[0])
        }
    }
    T.reset = function () {
        for (var e in E.job = 0, E.group = 0, O = !1, L && (L.disconnect(), L = null), k = 0, j = null, M = !1, x) x[e] = {}
    };
    var n;

    function d(e, t) {
        return Number("0." + ((window.Docsify || {}).version || "0").replace(/\./g, "")) < Number("0." + e.replace(/\./g, "")) ? t : null
    }
    window && (T(n = {
        onlyLegacy: !/Edge\/1[5678]/i.test(navigator.userAgent),
        silent: !0
    }), document.body.setAttribute("data-platform", navigator.platform), window.$docsify = window.$docsify || {}, window.$docsify.plugins = [].concat([function (e, t) {
        e.init(function () {
            !1 !== ((window.$docsify || {}).themeable || {}).readyTransition && (document.body.classList.add("ready-transition"), setTimeout(function () {
                document.body.classList.add("ready-spinner")
            }, 1), e.ready(function () {
                var n = document.querySelector("main");
                n.addEventListener("transitionend", function e(t) {
                    document.body.classList.remove("ready-transition"), document.body.classList.remove("ready-spinner"), n.removeEventListener("transitionend", e)
                })
            }))
        })
    }, function (e, t) {
        e.doneEach(function () {
            var e = document.querySelector(".cover h1 > a");
            e && (e.parentNode.innerHTML = e.innerHTML)
        })
    }, function (e, t) {
        e.doneEach(function () {
            var e = Array.apply(null, document.querySelectorAll("body > nav.app-nav > ul > li")),
                t = Array.apply(null, document.querySelectorAll(".sidebar > nav > ul > li"));
            e.forEach(function (t) {
                var n = "focus-within";
                s(t, "span", 0), t.addEventListener("focusin", function (e) {
                    t.contains(document.activeElement) && t.classList.add(n)
                }), t.addEventListener("focusout", function (e) {
                    t.contains(document.activeElement) || t.classList.remove(n)
                })
            }), t.forEach(function (e) {
                s(e, "span")
            })
        })
    }, function (e, t) {
        e.doneEach(function () {
            Array.apply(null, document.querySelectorAll("pre[data-lang]")).forEach(function (e) {
                var t = e.querySelector("code"),
                    n = "language-".concat(e.getAttribute("data-lang"));
                e.classList.add(n), t.classList.add(n)
            })
        })
    }, function (e, t) {
        e.mounted(function () {
            var e = document.querySelector(".content"),
                t = setInterval(function () {
                    e.textContent.length && (document.body.classList.add("ready-fix"), clearInterval(t))
                }, 250)
        }), e.ready(function () {
            document.body.classList.add("ready-fix")
        })
    }, function (e, t) {
        e.init(function () {
            var e, t;
            !1 !== ((window.$docsify || {}).themeable || {}).responsiveTables && (t = (e = window.$docsify.markdown = window.$docsify.markdown || {}).renderer = e.renderer || {}, e.smartypants = e.smartypants || !0, t.table = t.table || function (e, t) {
                var n = '\n                    <div class="table-wrapper">\n                        <table>\n                            <thead>'.concat(e, "</thead>\n                            <tbody>").concat(t, "</tbody>\n                        </table>\n                    </div>");
                try {
                    var r = document.createElement("div"),
                        o = document.head.appendChild(document.createElement("style")).sheet,
                        a = "_" + Math.random().toString(36).substr(2, 9);
                    r.innerHTML = n;
                    var s = r.querySelector("table");
                    Array.apply(null, s.getElementsByTagName("th")).map(function (e) {
                        return e.innerHTML.replace("&nbsp;", " ")
                    }).forEach(function (e, t) {
                        e = "#".concat(a, " td:nth-child(").concat(t + 1, ')::before{content:"').concat(e, '";}');
                        o.insertRule(e, o.cssRules.length)
                    }), s.id = a, n = r.innerHTML
                } catch (e) {
                    console.log("Failed to render responsive table: " + e)
                }
                return n
            })
        })
    }], window.$docsify.plugins || [], [function (e, t) {
        e.ready(function () {
            var e, t = document.querySelector(".sidebar .search .clear-button");
            t && ((e = document.createElement("button")).className = "clear-button", e.setAttribute("aria-label", "Clear search"), e.innerHTML = '\n                <svg width="16" height="16" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n                    <circle cx="8" cy="8" r="8" fill="black"></circle>\n                    <path stroke="white" stroke-width="1.5" d="M4.5,4.5,11.5,11.5" vector-effect="non-scaling-stroke"></path>\n                    <path stroke="white" stroke-width="1.5" d="M4.5,11.5,11.5,4.5" vector-effect="non-scaling-stroke"></path>\n                </svg>\n            ', t.parentNode.replaceChild(e, t))
        })
    }, d("4.8.0", function (e, t) {
        e.ready(function () {
            var t = document.querySelector(".sidebar .search"),
                n = document.querySelector(".sidebar .search input[type=search]"),
                r = document.querySelector(".sidebar .search .clear-button");
            t && t.addEventListener("click", function (e) {
                e.target !== r && !r.contains(e.target) || (t.classList.remove("show"), n.focus())
            }), n && n.addEventListener("input", function (e) {
                n.value.length ? t.classList.add("show") : t.classList.remove("show")
            })
        })
    }), d("4.8.0", function (e, t) {
        var o = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector;
        e.doneEach(function () {
            var r = "medium-zoom-image";
            Array.apply(null, document.querySelectorAll(".".concat(r))).forEach(function (e) {
                var t = o.call(e, "a img"),
                    n = o.call(e, ".content img");
                !t && n || (n = e.cloneNode(!0), e.parentNode.replaceChild(n, e), n.classList.remove(r))
            })
        })
    })]).filter(function (e) {
        return null !== e
    }), window.$docsify.search = window.$docsify.search || {}, window.$docsify.search.hideOtherSidebarContent = !0, window.$docsify.themeable = window.$docsify.themeable || {}, window.$docsify.themeable.version = "0.8.4", window.$docsify.themeable.util = {
        cssVars: function (e) {
            T(0 < arguments.length && void 0 !== e ? e : n)
        }
    })
}();
