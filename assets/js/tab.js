/*!
 * docsify-tabs
 * v1.5.0
 * https://jhildenbiddle.github.io/docsify-tabs/
 * (c) 2018-2021 John Hildenbiddle
 * MIT license
 */
! function () {
    "use strict";
    ! function (t, o) {
        void 0 === o && (o = {});
        var a = o.insertAt;
        if (t && "undefined" != typeof document) {
            var e = document.head || document.getElementsByTagName("head")[0],
                c = document.createElement("style");
            c.type = "text/css", "top" === a && e.firstChild ? e.insertBefore(c, e.firstChild) : e.appendChild(c), c.styleSheet ? c.styleSheet.cssText = t : c.appendChild(document.createTextNode(t))
        }
    }(':root{--docsifytabs-border-color:#ededed;--docsifytabs-border-px:1px;--docsifytabs-border-radius-px: ;--docsifytabs-margin:1.5em 0;--docsifytabs-tab-background:#f8f8f8;--docsifytabs-tab-background--active:var(--docsifytabs-content-background);--docsifytabs-tab-color:#999;--docsifytabs-tab-color--active:inherit;--docsifytabs-tab-highlight-px:3px;--docsifytabs-tab-highlight-color:var(--theme-color,currentColor);--docsifytabs-tab-padding:0.6em 1em;--docsifytabs-content-background:inherit;--docsifytabs-content-padding:1.5rem}.docsify-tabs:before,.docsify-tabs__tab{z-index:1}.docsify-tabs__tab--active,.docsify-tabs__tab:focus{z-index:2}.docsify-tabs{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.docsify-tabs:before{content:"";-ms-flex-order:0;order:0;-ms-flex:1 1;flex:1 1}.docsify-tabs__tab{-ms-flex-order:-1;order:-1;position:relative;margin:0;font-size:inherit;appearance:none}.docsify-tabs__content{visibility:hidden;position:absolute;overflow:hidden;height:0;width:100%}.docsify-tabs__content :first-child{margin-top:0}.docsify-tabs__content :first-child~:last-child,.docsify-tabs__content :last-child{margin-bottom:0}.docsify-tabs__tab--active+.docsify-tabs__content{visibility:visible;position:relative;overflow:auto;height:auto}[class*=docsify-tabs--]{margin:1.5em 0;margin:var(--docsifytabs-margin)}[class*=docsify-tabs--] .docsify-tabs__tab{padding:.6em 1em;padding:var(--docsifytabs-tab-padding);background:#f8f8f8;background:var(--docsifytabs-tab-background);color:#999;color:var(--docsifytabs-tab-color)}[class*=docsify-tabs--] .docsify-tabs__tab--active{background:inherit;background:var(--docsifytabs-tab-background--active);color:inherit;color:var(--docsifytabs-tab-color--active)}[class*=docsify-tabs--] .docsify-tabs__content{padding:1.5rem;padding:var(--docsifytabs-content-padding);background:inherit;background:var(--docsifytabs-content-background)}.docsify-tabs--classic .docsify-tabs__content,.docsify-tabs--classic .docsify-tabs__tab,.docsify-tabs--classic:before{border-width:1px;border-color:#ededed;border:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}.docsify-tabs--classic:before{margin-right:1px;margin-right:var(--docsifytabs-border-px);border-top-width:0;border-left-width:0;border-right-width:0}.docsify-tabs--classic .docsify-tabs__tab:first-of-type{border-top-left-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab:last-of-type{border-top-right-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab~.docsify-tabs__tab{margin-left:-1px;margin-left:calc(0px - var(--docsifytabs-border-px))}.docsify-tabs--classic .docsify-tabs__tab--active{border-bottom-width:0;box-shadow:inset 0 3px 0 0 var(--theme-color,currentColor);box-shadow:inset 0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)}.docsify-tabs--classic .docsify-tabs__content{margin-top:-1px;margin-top:calc(0px - var(--docsifytabs-border-px));border-top:0;border-radius:0;border-radius:0 var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px)}.docsify-tabs--material .docsify-tabs__tab{margin-bottom:2px;margin-bottom:calc(var(--docsifytabs-tab-highlight-px) - var(--docsifytabs-border-px));background:transparent;border:0}.docsify-tabs--material .docsify-tabs__tab--active{box-shadow:0 3px 0 0 var(--theme-color,currentColor);box-shadow:0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color);background:transparent}.docsify-tabs--material .docsify-tabs__content{border-width:1px 0;border-color:#ededed;border-left:0 solid var(--docsifytabs-border-color);border-bottom:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color);border-right:0 solid var(--docsifytabs-border-color);border-top:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}', {
        insertAt: "top"
    });
    var t = "tabs:replace",
        o = {
            tabsContainer: "content",
            tabBlock: "docsify-tabs",
            tabButton: "docsify-tabs__tab",
            tabButtonActive: "docsify-tabs__tab--active",
            tabContent: "docsify-tabs__content"
        },
        a = {
            codeMarkup: /(```[\s\S]*?```)/gm,
            commentReplaceMarkup: new RegExp("\x3c!-- ".concat(t, " (.*) --\x3e")),
            tabBlockMarkup: /[\r\n]*(\s*)(<!-+\s+tabs:\s*?start\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+tabs:\s*?end\s+-+>)/m,
            tabCommentMarkup: /[\r\n]*(\s*)<!-+\s+tab:\s*(.*)\s+-+>[\r\n]+([\s\S]*?)[\r\n]*\s*(?=<!-+\s+tabs?:(?!replace))/m,
            tabHeadingMarkup: /[\r\n]*(\s*)#{1,6}\s*[*_]{2}\s*(.*[^\s])\s*[*_]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[*_]{2}|<!-+\s+tabs:\s*?end\s+-+>)/m
        },
        e = {
            persist: !0,
            sync: !0,
            theme: "classic",
            tabComments: !0,
            tabHeadings: !0
        };

    function c(t, o) {
        if (Element.prototype.closest) return t.closest(o);
        for (; t;) {
            if (r(t, o)) return t;
            t = t.parentNode || null
        }
        return t
    }

    function r(t, o) {
        return (Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector).call(t, o)
    }

    function s(t) {
        var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = c(t, ".".concat(o.tabButton));
        if (r) {
            var n = r.getAttribute("data-tab"),
                i = document.querySelector(".".concat(o.tabsContainer)),
                d = r.parentNode,
                b = Array.apply(null, d.querySelectorAll(".".concat(o.tabButton))),
                f = d.offsetTop;
            if (b.forEach((function (t) {
                    return t.classList.remove(o.tabButtonActive)
                })), r.classList.add(o.tabButtonActive), !a) {
                if (e.persist) {
                    var l = i ? Array.apply(null, i.querySelectorAll(".".concat(o.tabBlock))) : [],
                        u = l.indexOf(d),
                        y = JSON.parse(sessionStorage.getItem(window.location.href)) || {};
                    y[u] = n, sessionStorage.setItem(window.location.href, JSON.stringify(y))
                }
                if (e.sync) {
                    var p = i ? Array.apply(null, i.querySelectorAll(".".concat(o.tabButton, '[data-tab="').concat(n, '"]'))) : [],
                        m = JSON.parse(sessionStorage.getItem("*")) || [];
                    p.forEach((function (t) {
                        s(t, !0)
                    })), window.scrollBy(0, 0 - (f - d.offsetTop)), m.indexOf(n) > 0 && m.splice(m.indexOf(n), 1), 0 !== m.indexOf(n) && (m.unshift(n), sessionStorage.setItem("*", JSON.stringify(m)))
                }
            }
        }
    }

    function n() {
        var t = (window.location.hash.match(/(?:id=)([^&]+)/) || [])[1],
            a = t && ".".concat(o.tabBlock, " #").concat(t.indexOf("%") > -1 ? decodeURIComponent(t) : t);
        if (t && document.querySelector(a)) {
            var e, c = document.querySelector("#".concat(decodeURIComponent(t) ?? t));
            if (c.closest) e = c.closest(".".concat(o.tabContent));
            else
                for (e = c.parentNode; e !== document.body && !e.classList.contains("".concat(o.tabContent));) e = e.parentNode;
            s(e.previousElementSibling)
        }
    }
    window && (window.$docsify = window.$docsify || {}, window.$docsify.tabs = window.$docsify.tabs || {}, Object.keys(window.$docsify.tabs).forEach((function (t) {
        Object.prototype.hasOwnProperty.call(e, t) && (e[t] = window.$docsify.tabs[t])
    })), window.$docsify.tabs.version = "1.5.0", (e.tabComments || e.tabHeadings) && (window.$docsify.plugins = [].concat((function (c, r) {
        var i = !1;
        c.beforeEach((function (c) {
            return (i = a.tabBlockMarkup.test(c)) && (c = function (c, r) {
                for (var s, n, i = c.match(a.codeMarkup) || [], d = i.map((function (o, a) {
                        var e = "\x3c!-- ".concat(t, " CODEBLOCK").concat(a, " --\x3e");
                        return c = c.replace(o, (function () {
                            return e
                        })), e
                    })), b = e.theme ? "".concat(o.tabBlock, "--").concat(e.theme) : "", f = document.createElement("div"), l = 1, u = function () {
                        var i = s[0],
                            d = "",
                            u = "",
                            y = e.tabComments && a.tabCommentMarkup.test(i),
                            p = e.tabHeadings && a.tabHeadingMarkup.test(i),
                            m = s[1],
                            h = s[2],
                            g = s[4];
                        if (y || p) {
                            d = "\x3c!-- ".concat(t, ' <div class="').concat([o.tabBlock, b].join(" "), '"> --\x3e'), u = "\n".concat(m, "\x3c!-- ").concat(t, " </div> --\x3e");
                            for (var v = function () {
                                    f.innerHTML = n[2].trim() ? r.compiler.compile(n[2]).replace(/<\/?p>/g, "") : "Tab ".concat(l);
                                    var a = f.innerHTML,
                                        e = (n[3] || "").trim(),
                                        c = (f.textContent || f.firstChild.getAttribute("alt") || f.firstChild.getAttribute("src")).trim().toLowerCase();
                                    i = i.replace(n[0], (function () {
                                        return ["\n".concat(m, "\x3c!-- ").concat(t, ' <button class="').concat(o.tabButton, '" data-tab="').concat(c, '">').concat(a, "</button> --\x3e"), "\n".concat(m, "\x3c!-- ").concat(t, ' <div class="').concat(o.tabContent, '" data-tab-content="').concat(c, '"> --\x3e'), "\n\n".concat(m).concat(e), "\n\n".concat(m, "\x3c!-- ").concat(t, " </div> --\x3e")].join("")
                                    })), l++
                                }; null !== (n = (e.tabComments ? a.tabCommentMarkup.exec(i) : null) || (e.tabHeadings ? a.tabHeadingMarkup.exec(i) : null));) v()
                        }
                        i = (i = i.replace(h, (function () {
                            return d
                        }))).replace(g, (function () {
                            return u
                        })), c = c.replace(s[0], (function () {
                            return i
                        }))
                    }; null !== (s = a.tabBlockMarkup.exec(c));) u();
                return d.forEach((function (t, o) {
                    c = c.replace(t, (function () {
                        return i[o]
                    }))
                })), c
            }(c, r)), c
        })), c.afterEach((function (t, o) {
            i && (t = function (t) {
                for (var o, e = function () {
                        var a = o[0],
                            e = o[1] || "";
                        t = t.replace(a, (function () {
                            return e
                        }))
                    }; null !== (o = a.commentReplaceMarkup.exec(t));) e();
                return t
            }(t)), o(t)
        })), c.doneEach((function () {
            var t, a, c, r;
            i && (a = (t = document.querySelector(".".concat(o.tabsContainer))) ? Array.apply(null, t.querySelectorAll(".".concat(o.tabBlock))) : [], c = JSON.parse(sessionStorage.getItem(window.location.href)) || {}, r = JSON.parse(sessionStorage.getItem("*")) || [], n(), a.forEach((function (t, a) {
                var s = t.querySelector(".".concat(o.tabButtonActive));
                s || (e.sync && r.length && (s = r.map((function (a) {
                    return t.querySelector(".".concat(o.tabButton, '[data-tab="').concat(a, '"]'))
                })).filter((function (t) {
                    return t
                }))[0]), !s && e.persist && (s = t.querySelector(".".concat(o.tabButton, '[data-tab="').concat(c[a], '"]'))), (s = s || t.querySelector(".".concat(o.tabButton))) && s.classList.add(o.tabButtonActive))
            })))
        })), c.mounted((function () {
            var t = document.querySelector(".".concat(o.tabsContainer));
            t && t.addEventListener("click", (function (t) {
                s(t.target)
            })), window.addEventListener("hashchange", n, !1)
        }))
    }), window.$docsify.plugins || [])))
}();
//# sourceMappingURL=docsify-tabs.min.js.map