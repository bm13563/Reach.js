(() => {
    "use strict";
    var t,
        e = {
            361: (t, e, n) => {
                n.r(e),
                    n.d(e, {
                        array: () => i,
                        attachTo: () => N,
                        attributesModule: () => A,
                        classModule: () => _,
                        datasetModule: () => M,
                        eventListenersModule: () => B,
                        h: () => v,
                        htmlDomApi: () => o,
                        init: () => h,
                        jsx: () => W,
                        primitive: () => a,
                        propsModule: () => V,
                        styleModule: () => z,
                        thunk: () => b,
                        toVNode: () => O,
                        vnode: () => r,
                    });
                const o = {
                    createElement: function (t, e) {
                        return document.createElement(t, e);
                    },
                    createElementNS: function (t, e, n) {
                        return document.createElementNS(t, e, n);
                    },
                    createTextNode: function (t) {
                        return document.createTextNode(t);
                    },
                    createComment: function (t) {
                        return document.createComment(t);
                    },
                    insertBefore: function (t, e, n) {
                        t.insertBefore(e, n);
                    },
                    removeChild: function (t, e) {
                        t.removeChild(e);
                    },
                    appendChild: function (t, e) {
                        t.appendChild(e);
                    },
                    parentNode: function (t) {
                        return t.parentNode;
                    },
                    nextSibling: function (t) {
                        return t.nextSibling;
                    },
                    tagName: function (t) {
                        return t.tagName;
                    },
                    setTextContent: function (t, e) {
                        t.textContent = e;
                    },
                    getTextContent: function (t) {
                        return t.textContent;
                    },
                    isElement: function (t) {
                        return 1 === t.nodeType;
                    },
                    isText: function (t) {
                        return 3 === t.nodeType;
                    },
                    isComment: function (t) {
                        return 8 === t.nodeType;
                    },
                };
                function r(t, e, n, o, r) {
                    return {
                        sel: t,
                        data: e,
                        children: n,
                        text: o,
                        elm: r,
                        key: void 0 === e ? void 0 : e.key,
                    };
                }
                const i = Array.isArray;
                function a(t) {
                    return "string" == typeof t || "number" == typeof t;
                }
                function l(t) {
                    return void 0 === t;
                }
                function s(t) {
                    return void 0 !== t;
                }
                const c = r("", {}, [], void 0, void 0);
                function d(t, e) {
                    var n, o;
                    const r = t.key === e.key,
                        i =
                            (null === (n = t.data) || void 0 === n
                                ? void 0
                                : n.is) ===
                            (null === (o = e.data) || void 0 === o
                                ? void 0
                                : o.is);
                    return t.sel === e.sel && r && i;
                }
                function u(t, e, n) {
                    var o;
                    const r = {};
                    for (let i = e; i <= n; ++i) {
                        const e =
                            null === (o = t[i]) || void 0 === o
                                ? void 0
                                : o.key;
                        void 0 !== e && (r[e] = i);
                    }
                    return r;
                }
                const f = [
                    "create",
                    "update",
                    "remove",
                    "destroy",
                    "pre",
                    "post",
                ];
                function h(t, e) {
                    let n, h;
                    const p = {
                            create: [],
                            update: [],
                            remove: [],
                            destroy: [],
                            pre: [],
                            post: [],
                        },
                        v = void 0 !== e ? e : o;
                    for (n = 0; n < f.length; ++n)
                        for (p[f[n]] = [], h = 0; h < t.length; ++h) {
                            const e = t[h][f[n]];
                            void 0 !== e && p[f[n]].push(e);
                        }
                    function m(t) {
                        const e = t.id ? "#" + t.id : "",
                            n = t.getAttribute("class"),
                            o = n ? "." + n.split(" ").join(".") : "";
                        return r(
                            v.tagName(t).toLowerCase() + e + o,
                            {},
                            [],
                            void 0,
                            t,
                        );
                    }
                    function g(t, e) {
                        return function () {
                            if (0 == --e) {
                                const e = v.parentNode(t);
                                v.removeChild(e, t);
                            }
                        };
                    }
                    function y(t, e) {
                        var n, o;
                        let r,
                            d = t.data;
                        if (void 0 !== d) {
                            const e =
                                null === (n = d.hook) || void 0 === n
                                    ? void 0
                                    : n.init;
                            s(e) && (e(t), (d = t.data));
                        }
                        const u = t.children,
                            f = t.sel;
                        if ("!" === f)
                            l(t.text) && (t.text = ""),
                                (t.elm = v.createComment(t.text));
                        else if (void 0 !== f) {
                            const n = f.indexOf("#"),
                                l = f.indexOf(".", n),
                                h = n > 0 ? n : f.length,
                                m = l > 0 ? l : f.length,
                                g =
                                    -1 !== n || -1 !== l
                                        ? f.slice(0, Math.min(h, m))
                                        : f,
                                b = (t.elm =
                                    s(d) && s((r = d.ns))
                                        ? v.createElementNS(r, g, d)
                                        : v.createElement(g, d));
                            for (
                                h < m &&
                                    b.setAttribute("id", f.slice(h + 1, m)),
                                    l > 0 &&
                                        b.setAttribute(
                                            "class",
                                            f.slice(m + 1).replace(/\./g, " "),
                                        ),
                                    r = 0;
                                r < p.create.length;
                                ++r
                            )
                                p.create[r](c, t);
                            if (i(u))
                                for (r = 0; r < u.length; ++r) {
                                    const t = u[r];
                                    null != t && v.appendChild(b, y(t, e));
                                }
                            else
                                a(t.text) &&
                                    v.appendChild(b, v.createTextNode(t.text));
                            const C = t.data.hook;
                            s(C) &&
                                (null === (o = C.create) ||
                                    void 0 === o ||
                                    o.call(C, c, t),
                                C.insert && e.push(t));
                        } else t.elm = v.createTextNode(t.text);
                        return t.elm;
                    }
                    function b(t, e, n, o, r, i) {
                        for (; o <= r; ++o) {
                            const r = n[o];
                            null != r && v.insertBefore(t, y(r, i), e);
                        }
                    }
                    function C(t) {
                        var e, n;
                        const o = t.data;
                        if (void 0 !== o) {
                            null ===
                                (n =
                                    null ===
                                        (e = null == o ? void 0 : o.hook) ||
                                    void 0 === e
                                        ? void 0
                                        : e.destroy) ||
                                void 0 === n ||
                                n.call(e, t);
                            for (let e = 0; e < p.destroy.length; ++e)
                                p.destroy[e](t);
                            if (void 0 !== t.children)
                                for (let e = 0; e < t.children.length; ++e) {
                                    const n = t.children[e];
                                    null != n && "string" != typeof n && C(n);
                                }
                        }
                    }
                    function x(t, e, n, o) {
                        for (var r, i; n <= o; ++n) {
                            let o, a;
                            const l = e[n];
                            if (null != l)
                                if (s(l.sel)) {
                                    C(l),
                                        (o = p.remove.length + 1),
                                        (a = g(l.elm, o));
                                    for (let t = 0; t < p.remove.length; ++t)
                                        p.remove[t](l, a);
                                    const t =
                                        null ===
                                            (i =
                                                null ===
                                                    (r =
                                                        null == l
                                                            ? void 0
                                                            : l.data) ||
                                                void 0 === r
                                                    ? void 0
                                                    : r.hook) || void 0 === i
                                            ? void 0
                                            : i.remove;
                                    s(t) ? t(l, a) : a();
                                } else v.removeChild(t, l.elm);
                        }
                    }
                    function w(t, e, n) {
                        var o, r, i, a, c;
                        const f =
                            null === (o = e.data) || void 0 === o
                                ? void 0
                                : o.hook;
                        null === (r = null == f ? void 0 : f.prepatch) ||
                            void 0 === r ||
                            r.call(f, t, e);
                        const h = (e.elm = t.elm),
                            m = t.children,
                            g = e.children;
                        if (t !== e) {
                            if (void 0 !== e.data) {
                                for (let n = 0; n < p.update.length; ++n)
                                    p.update[n](t, e);
                                null ===
                                    (a =
                                        null === (i = e.data.hook) ||
                                        void 0 === i
                                            ? void 0
                                            : i.update) ||
                                    void 0 === a ||
                                    a.call(i, t, e);
                            }
                            l(e.text)
                                ? s(m) && s(g)
                                    ? m !== g &&
                                      (function (t, e, n, o) {
                                          let r,
                                              i,
                                              a,
                                              s,
                                              c = 0,
                                              f = 0,
                                              h = e.length - 1,
                                              p = e[0],
                                              m = e[h],
                                              g = n.length - 1,
                                              C = n[0],
                                              k = n[g];
                                          for (; c <= h && f <= g; )
                                              null == p
                                                  ? (p = e[++c])
                                                  : null == m
                                                  ? (m = e[--h])
                                                  : null == C
                                                  ? (C = n[++f])
                                                  : null == k
                                                  ? (k = n[--g])
                                                  : d(p, C)
                                                  ? (w(p, C, o),
                                                    (p = e[++c]),
                                                    (C = n[++f]))
                                                  : d(m, k)
                                                  ? (w(m, k, o),
                                                    (m = e[--h]),
                                                    (k = n[--g]))
                                                  : d(p, k)
                                                  ? (w(p, k, o),
                                                    v.insertBefore(
                                                        t,
                                                        p.elm,
                                                        v.nextSibling(m.elm),
                                                    ),
                                                    (p = e[++c]),
                                                    (k = n[--g]))
                                                  : d(m, C)
                                                  ? (w(m, C, o),
                                                    v.insertBefore(
                                                        t,
                                                        m.elm,
                                                        p.elm,
                                                    ),
                                                    (m = e[--h]),
                                                    (C = n[++f]))
                                                  : (void 0 === r &&
                                                        (r = u(e, c, h)),
                                                    (i = r[C.key]),
                                                    l(i)
                                                        ? v.insertBefore(
                                                              t,
                                                              y(C, o),
                                                              p.elm,
                                                          )
                                                        : ((a = e[i]),
                                                          a.sel !== C.sel
                                                              ? v.insertBefore(
                                                                    t,
                                                                    y(C, o),
                                                                    p.elm,
                                                                )
                                                              : (w(a, C, o),
                                                                (e[i] = void 0),
                                                                v.insertBefore(
                                                                    t,
                                                                    a.elm,
                                                                    p.elm,
                                                                ))),
                                                    (C = n[++f]));
                                          (c <= h || f <= g) &&
                                              (c > h
                                                  ? ((s =
                                                        null == n[g + 1]
                                                            ? null
                                                            : n[g + 1].elm),
                                                    b(t, s, n, f, g, o))
                                                  : x(t, e, c, h));
                                      })(h, m, g, n)
                                    : s(g)
                                    ? (s(t.text) && v.setTextContent(h, ""),
                                      b(h, null, g, 0, g.length - 1, n))
                                    : s(m)
                                    ? x(h, m, 0, m.length - 1)
                                    : s(t.text) && v.setTextContent(h, "")
                                : t.text !== e.text &&
                                  (s(m) && x(h, m, 0, m.length - 1),
                                  v.setTextContent(h, e.text)),
                                null ===
                                    (c = null == f ? void 0 : f.postpatch) ||
                                    void 0 === c ||
                                    c.call(f, t, e);
                        }
                    }
                    return function (t, e) {
                        let n, o, r;
                        const i = [];
                        for (n = 0; n < p.pre.length; ++n) p.pre[n]();
                        for (
                            (function (t) {
                                return void 0 !== t.sel;
                            })(t) || (t = m(t)),
                                d(t, e)
                                    ? w(t, e, i)
                                    : ((o = t.elm),
                                      (r = v.parentNode(o)),
                                      y(e, i),
                                      null !== r &&
                                          (v.insertBefore(
                                              r,
                                              e.elm,
                                              v.nextSibling(o),
                                          ),
                                          x(r, [t], 0, 0))),
                                n = 0;
                            n < i.length;
                            ++n
                        )
                            i[n].data.hook.insert(i[n]);
                        for (n = 0; n < p.post.length; ++n) p.post[n]();
                        return e;
                    };
                }
                function p(t, e, n) {
                    if (
                        ((t.ns = "http://www.w3.org/2000/svg"),
                        "foreignObject" !== n && void 0 !== e)
                    )
                        for (let t = 0; t < e.length; ++t) {
                            const n = e[t].data;
                            void 0 !== n && p(n, e[t].children, e[t].sel);
                        }
                }
                function v(t, e, n) {
                    let o,
                        l,
                        s,
                        c = {};
                    if (
                        (void 0 !== n
                            ? (null !== e && (c = e),
                              i(n)
                                  ? (o = n)
                                  : a(n)
                                  ? (l = n)
                                  : n && n.sel && (o = [n]))
                            : null != e &&
                              (i(e)
                                  ? (o = e)
                                  : a(e)
                                  ? (l = e)
                                  : e && e.sel
                                  ? (o = [e])
                                  : (c = e)),
                        void 0 !== o)
                    )
                        for (s = 0; s < o.length; ++s)
                            a(o[s]) &&
                                (o[s] = r(
                                    void 0,
                                    void 0,
                                    void 0,
                                    o[s],
                                    void 0,
                                ));
                    return (
                        "s" !== t[0] ||
                            "v" !== t[1] ||
                            "g" !== t[2] ||
                            (3 !== t.length && "." !== t[3] && "#" !== t[3]) ||
                            p(c, o, t),
                        r(t, c, o, l, void 0)
                    );
                }
                function m(t, e) {
                    (t.data.fn = e.data.fn),
                        (t.data.args = e.data.args),
                        (e.data = t.data),
                        (e.children = t.children),
                        (e.text = t.text),
                        (e.elm = t.elm);
                }
                function g(t) {
                    const e = t.data;
                    m(e.fn(...e.args), t);
                }
                function y(t, e) {
                    let n;
                    const o = t.data,
                        r = e.data,
                        i = o.args,
                        a = r.args;
                    if (o.fn === r.fn && i.length === a.length) {
                        for (n = 0; n < a.length; ++n)
                            if (i[n] !== a[n]) return void m(r.fn(...a), e);
                        m(t, e);
                    } else m(r.fn(...a), e);
                }
                const b = function (t, e, n, o) {
                    return (
                        void 0 === o && ((o = n), (n = e), (e = void 0)),
                        v(t, {
                            key: e,
                            hook: { init: g, prepatch: y },
                            fn: n,
                            args: o,
                        })
                    );
                };
                function C(t, e) {
                    const n = t.data.attachData;
                    (e.data.attachData.placeholder = n.placeholder),
                        (e.data.attachData.real = n.real),
                        (t.elm = t.data.attachData.real);
                }
                function x(t, e) {
                    e.elm = e.data.attachData.placeholder;
                }
                function w(t) {
                    void 0 !== t.elm && t.elm.parentNode.removeChild(t.elm),
                        (t.elm = t.data.attachData.real);
                }
                function k(t, e) {
                    const n = e.elm,
                        o = e.data.attachData,
                        r = document.createElement("span");
                    (e.elm = r),
                        o.target.appendChild(n),
                        (o.real = n),
                        (o.placeholder = r);
                }
                function N(t, e) {
                    void 0 === e.data && (e.data = {}),
                        void 0 === e.data.hook && (e.data.hook = {});
                    const n = e.data,
                        o = e.data.hook;
                    return (
                        (n.attachData = {
                            target: t,
                            placeholder: void 0,
                            real: void 0,
                        }),
                        (o.create = k),
                        (o.prepatch = C),
                        (o.postpatch = x),
                        (o.destroy = w),
                        e
                    );
                }
                function O(t, e) {
                    const n = void 0 !== e ? e : o;
                    let i;
                    if (n.isElement(t)) {
                        const o = t.id ? "#" + t.id : "",
                            i = t.getAttribute("class"),
                            a = i ? "." + i.split(" ").join(".") : "",
                            l = n.tagName(t).toLowerCase() + o + a,
                            s = {},
                            c = [];
                        let d, u, f;
                        const h = t.attributes,
                            p = t.childNodes;
                        for (u = 0, f = h.length; u < f; u++)
                            (d = h[u].nodeName),
                                "id" !== d &&
                                    "class" !== d &&
                                    (s[d] = h[u].nodeValue);
                        for (u = 0, f = p.length; u < f; u++)
                            c.push(O(p[u], e));
                        return r(l, { attrs: s }, c, void 0, t);
                    }
                    return n.isText(t)
                        ? ((i = n.getTextContent(t)),
                          r(void 0, void 0, void 0, i, t))
                        : n.isComment(t)
                        ? ((i = n.getTextContent(t)), r("!", {}, [], i, t))
                        : r("", {}, [], void 0, t);
                }
                function T(t, e) {
                    let n;
                    const o = e.elm;
                    let r = t.data.attrs,
                        i = e.data.attrs;
                    if ((r || i) && r !== i) {
                        for (n in ((r = r || {}), (i = i || {}), i)) {
                            const t = i[n];
                            r[n] !== t &&
                                (!0 === t
                                    ? o.setAttribute(n, "")
                                    : !1 === t
                                    ? o.removeAttribute(n)
                                    : 120 !== n.charCodeAt(0)
                                    ? o.setAttribute(n, t)
                                    : 58 === n.charCodeAt(3)
                                    ? o.setAttributeNS(
                                          "http://www.w3.org/XML/1998/namespace",
                                          n,
                                          t,
                                      )
                                    : 58 === n.charCodeAt(5)
                                    ? o.setAttributeNS(
                                          "http://www.w3.org/1999/xlink",
                                          n,
                                          t,
                                      )
                                    : o.setAttribute(n, t));
                        }
                        for (n in r) n in i || o.removeAttribute(n);
                    }
                }
                const A = { create: T, update: T };
                function S(t, e) {
                    let n, o;
                    const r = e.elm;
                    let i = t.data.class,
                        a = e.data.class;
                    if ((i || a) && i !== a) {
                        for (o in ((i = i || {}), (a = a || {}), i))
                            i[o] &&
                                !Object.prototype.hasOwnProperty.call(a, o) &&
                                r.classList.remove(o);
                        for (o in a)
                            (n = a[o]),
                                n !== i[o] &&
                                    r.classList[n ? "add" : "remove"](o);
                    }
                }
                const _ = { create: S, update: S },
                    j = /[A-Z]/g;
                function E(t, e) {
                    const n = e.elm;
                    let o,
                        r = t.data.dataset,
                        i = e.data.dataset;
                    if (!r && !i) return;
                    if (r === i) return;
                    (r = r || {}), (i = i || {});
                    const a = n.dataset;
                    for (o in r)
                        i[o] ||
                            (a
                                ? o in a && delete a[o]
                                : n.removeAttribute(
                                      "data-" +
                                          o.replace(j, "-$&").toLowerCase(),
                                  ));
                    for (o in i)
                        r[o] !== i[o] &&
                            (a
                                ? (a[o] = i[o])
                                : n.setAttribute(
                                      "data-" +
                                          o.replace(j, "-$&").toLowerCase(),
                                      i[o],
                                  ));
                }
                const M = { create: E, update: E };
                function P(t, e, n) {
                    if ("function" == typeof t) t.call(e, n, e);
                    else if ("object" == typeof t)
                        for (let o = 0; o < t.length; o++) P(t[o], e, n);
                }
                function L(t, e) {
                    const n = t.type,
                        o = e.data.on;
                    o && o[n] && P(o[n], e, t);
                }
                function D(t, e) {
                    const n = t.data.on,
                        o = t.listener,
                        r = t.elm,
                        i = e && e.data.on,
                        a = e && e.elm;
                    let l;
                    if (n !== i) {
                        if (n && o)
                            if (i)
                                for (l in n)
                                    i[l] || r.removeEventListener(l, o, !1);
                            else for (l in n) r.removeEventListener(l, o, !1);
                        if (i) {
                            const o = (e.listener =
                                t.listener ||
                                function t(e) {
                                    L(e, t.vnode);
                                });
                            if (((o.vnode = e), n))
                                for (l in i)
                                    n[l] || a.addEventListener(l, o, !1);
                            else for (l in i) a.addEventListener(l, o, !1);
                        }
                    }
                }
                const B = { create: D, update: D, destroy: D };
                function I(t, e) {
                    let n, o, r;
                    const i = e.elm;
                    let a = t.data.props,
                        l = e.data.props;
                    if ((a || l) && a !== l)
                        for (n in ((a = a || {}), (l = l || {}), l))
                            (o = l[n]),
                                (r = a[n]),
                                r === o ||
                                    ("value" === n && i[n] === o) ||
                                    (i[n] = o);
                }
                const V = { create: I, update: I },
                    R =
                        ("undefined" != typeof window &&
                            window.requestAnimationFrame.bind(window)) ||
                        setTimeout;
                let q = !1;
                function F(t, e, n) {
                    var o;
                    (o = function () {
                        t[e] = n;
                    }),
                        R(function () {
                            R(o);
                        });
                }
                function $(t, e) {
                    let n, o;
                    const r = e.elm;
                    let i = t.data.style,
                        a = e.data.style;
                    if (!i && !a) return;
                    if (i === a) return;
                    (i = i || {}), (a = a || {});
                    const l = "delayed" in i;
                    for (o in i)
                        a[o] ||
                            ("-" === o[0] && "-" === o[1]
                                ? r.style.removeProperty(o)
                                : (r.style[o] = ""));
                    for (o in a)
                        if (((n = a[o]), "delayed" === o && a.delayed))
                            for (const t in a.delayed)
                                (n = a.delayed[t]),
                                    (l && n === i.delayed[t]) ||
                                        F(r.style, t, n);
                        else
                            "remove" !== o &&
                                n !== i[o] &&
                                ("-" === o[0] && "-" === o[1]
                                    ? r.style.setProperty(o, n)
                                    : (r.style[o] = n));
                }
                const z = {
                    pre: function () {
                        q = !1;
                    },
                    create: $,
                    update: $,
                    destroy: function (t) {
                        let e, n;
                        const o = t.elm,
                            r = t.data.style;
                        if (r && (e = r.destroy))
                            for (n in e) o.style[n] = e[n];
                    },
                    remove: function (t, e) {
                        const n = t.data.style;
                        if (!n || !n.remove) return void e();
                        let o;
                        q || (t.elm.offsetLeft, (q = !0));
                        const r = t.elm;
                        let i = 0;
                        const a = n.remove;
                        let l = 0;
                        const s = [];
                        for (o in a) s.push(o), (r.style[o] = a[o]);
                        const c =
                            getComputedStyle(r)["transition-property"].split(
                                ", ",
                            );
                        for (; i < c.length; ++i) -1 !== s.indexOf(c[i]) && l++;
                        r.addEventListener("transitionend", function (t) {
                            t.target === r && --l, 0 === l && e();
                        });
                    },
                };
                function U(t, e) {
                    for (const n of t)
                        null != n &&
                            !1 !== n &&
                            "" !== n &&
                            (Array.isArray(n)
                                ? U(n, e)
                                : "string" == typeof n ||
                                  "number" == typeof n ||
                                  "boolean" == typeof n
                                ? e.push(
                                      r(
                                          void 0,
                                          void 0,
                                          void 0,
                                          String(n),
                                          void 0,
                                      ),
                                  )
                                : e.push(n));
                    return e;
                }
                function W(t, e, ...n) {
                    const o = U(n, []);
                    return "function" == typeof t
                        ? t(e, o)
                        : 1 === o.length && !o[0].sel && o[0].text
                        ? v(t, e, o[0].text)
                        : v(t, e, o);
                }
                W || (W = {});
            },
            999: function (t, e) {
                var n =
                    (this && this.__assign) ||
                    function () {
                        return (n =
                            Object.assign ||
                            function (t) {
                                for (
                                    var e, n = 1, o = arguments.length;
                                    n < o;
                                    n++
                                )
                                    for (var r in (e = arguments[n]))
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            r,
                                        ) && (t[r] = e[r]);
                                return t;
                            }).apply(this, arguments);
                    };
                (e.__esModule = !0), (e.Component = void 0);
                var o = (function () {
                    function t(t) {
                        (this.id =
                            "i" +
                            ("" + (Date.now() + Math.random())).replace(
                                ".",
                                "",
                            )),
                            (this.html = ""),
                            (this.css = ""),
                            (this.state = {}),
                            (this.children = {}),
                            (this.debug = ""),
                            (this.props = n({}, t)),
                            (this.name = this.constructor.name);
                    }
                    return (
                        (t.prototype.mount = function () {}),
                        (t.prototype.style = function (t) {
                            this.css = t;
                        }),
                        (t.prototype.compile = function (t) {
                            return (
                                (this.html = (
                                    '\n        <div \n            id="' +
                                    this.id +
                                    '"\n        >\n            ' +
                                    t +
                                    "\n        </div>\n        <style>\n            div#" +
                                    this.id +
                                    " " +
                                    (this.css ? this.css : "{}") +
                                    "\n        </style>\n        "
                                )
                                    .replace(/\s\s+/g, " ")
                                    .replace(/\n/g, "")
                                    .replace(/ </g, "<")
                                    .replace(/< /g, "<")
                                    .replace(/> /g, ">")
                                    .replace(/ >/g, ">")),
                                this.html
                            );
                        }),
                        (t.prototype.register = function (t) {
                            var e =
                                    "r" +
                                    ("" + (Date.now() + Math.random())).replace(
                                        ".",
                                        "",
                                    ),
                                n = {
                                    id: this.id,
                                    name: this.name,
                                    callbackId: e,
                                    callback: t,
                                };
                            return (
                                this.id in this.page.callbacks
                                    ? this.page.callbacks[this.id].push(n)
                                    : (this.page.callbacks[this.id] = [n]),
                                e + " data-" + e + '="' + e + '"'
                            );
                        }),
                        (t.prototype.child = function (t) {
                            var e = new Error().stack.split("\n")[2],
                                n =
                                    "" +
                                    (e.split(":").slice(-2)[0] +
                                        e
                                            .split(":")
                                            .slice(-1)[0]
                                            .replace(")", ""));
                            return n in this.children
                                ? (this.children[n].mount(),
                                  this.children[n].html)
                                : ((t.page = this.page),
                                  (this.children[n] = t),
                                  t.mount(),
                                  t.html);
                        }),
                        (t.prototype.getState = function (t) {
                            return this.state[t];
                        }),
                        (t.prototype.setState = function (t, e) {
                            (this.state[t] = e), this.page.update();
                        }),
                        (t.prototype.debugOn = function (t) {
                            return (
                                void 0 === t && (t = "#ff0000"),
                                (this.debug = t),
                                this
                            );
                        }),
                        (t.prototype.debugOff = function () {
                            return (this.debug = ""), this;
                        }),
                        t
                    );
                })();
                e.Component = o;
            },
            282: function (t, e, n) {
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            n,
                                        ) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " +
                                        String(e) +
                                        " is not a constructor or null",
                                );
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e),
                                (t.prototype =
                                    null === e
                                        ? Object.create(e)
                                        : ((n.prototype = e.prototype),
                                          new n()));
                        }),
                    i =
                        (this && this.__assign) ||
                        function () {
                            return (i =
                                Object.assign ||
                                function (t) {
                                    for (
                                        var e, n = 1, o = arguments.length;
                                        n < o;
                                        n++
                                    )
                                        for (var r in (e = arguments[n]))
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                r,
                                            ) && (t[r] = e[r]);
                                    return t;
                                }).apply(this, arguments);
                        };
                (e.__esModule = !0), (e.Counter = e.Container = void 0);
                var a = n(999),
                    l = (function (t) {
                        function e(e) {
                            return t.call(this, e) || this;
                        }
                        return (
                            r(e, t),
                            (e.prototype.mount = function () {
                                var t = this.child(
                                    new s({ title: "Counter 2" }).debugOn(
                                        "#00ff00",
                                    ),
                                );
                                this.style(
                                    ".test {\n            color: white;\n        }",
                                ),
                                    this.compile(
                                        '\n            <div class="test">\n                ' +
                                            this.child(
                                                new s({
                                                    title: "Counter 1",
                                                }).debugOn(),
                                            ) +
                                            "\n                " +
                                            t +
                                            "\n            </div>\n        ",
                                    );
                            }),
                            e
                        );
                    })(a.Component);
                e.Container = l;
                var s = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.state = i(i({}, e), { count: 0 })), n;
                    }
                    return (
                        r(e, t),
                        (e.prototype.mount = function () {
                            var t = this;
                            this.compile(
                                "\n            <div>\n                " +
                                    this.getState("title") +
                                    "\n            </div>\n            <div>\n                " +
                                    this.getState("count") +
                                    "\n            </div>\n            <button onClick=" +
                                    this.register(function () {
                                        t.setState(
                                            "count",
                                            t.getState("count") + 1,
                                        );
                                    }) +
                                    ">A nice new button</button>\n            <style>\n                * {font-size: 25px;}\n            </style>\n        ",
                            );
                        }),
                        e
                    );
                })(a.Component);
                e.Counter = s;
            },
            220: (t, e, n) => {
                (e.__esModule = !0), (e.Page = void 0);
                var o = n(361),
                    r = o.init([]),
                    i = (function () {
                        function t(t) {
                            (this.callbacks = {}), (this.name = t);
                        }
                        return (
                            (t.prototype.addRootImage = function (t) {
                                return (
                                    (this.rootComponent = t),
                                    (this.rootComponent.page = this),
                                    this.rootComponent.mount(),
                                    (this.currentNode = this.textToNode(
                                        this.rootComponent.html,
                                    )),
                                    (this.currentTree = o.toVNode(
                                        this.currentNode,
                                    )),
                                    document.body.appendChild(this.currentNode),
                                    this.injectCallbacks(),
                                    this
                                );
                            }),
                            (t.prototype.update = function () {
                                this.rootComponent.mount(), this.render();
                            }),
                            (t.prototype.render = function () {
                                var t = this.textToNode(
                                        this.rootComponent.html,
                                    ),
                                    e = o.toVNode(t);
                                r(this.currentTree, e), (this.currentTree = e);
                            }),
                            (t.prototype.textToNode = function (t) {
                                return new DOMParser().parseFromString(
                                    t,
                                    "text/html",
                                ).body.firstChild;
                            }),
                            (t.prototype.injectCallbacks = function () {
                                Object.values(this.callbacks).forEach(function (
                                    t,
                                ) {
                                    t.forEach(function (t) {
                                        var e = document.querySelector(
                                            "[data-" + t.callbackId + "]",
                                        );
                                        if ((console.log(e), e))
                                            for (
                                                var n = 0;
                                                n < e.attributes.length;
                                                n++
                                            ) {
                                                var o =
                                                    e.attributes[n].nodeName;
                                                e.attributes[n].nodeValue ==
                                                    t.callbackId &&
                                                    (e[o] = t.callback);
                                            }
                                        else
                                            console.log(
                                                "WARN: Unmounted component exists: " +
                                                    t.name +
                                                    " - " +
                                                    t.id,
                                            );
                                    });
                                }),
                                    (this.callbacks = {});
                            }),
                            t
                        );
                    })();
                e.Page = i;
            },
        },
        n = {};
    function o(t) {
        var r = n[t];
        if (void 0 !== r) return r.exports;
        var i = (n[t] = { exports: {} });
        return e[t].call(i.exports, i, i.exports, o), i.exports;
    }
    (o.d = (t, e) => {
        for (var n in e)
            o.o(e, n) &&
                !o.o(t, n) &&
                Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
        (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (o.r = (t) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (t = o(282)),
        new (o(220).Page)("counter").addRootImage(new t.Container());
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL2h0bWxkb21hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL3Zub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9pcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvdGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL2hlbHBlcnMvYXR0YWNodG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL3Rvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL21vZHVsZXMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvbW9kdWxlcy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvbW9kdWxlcy9kYXRhc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL2V2ZW50bGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL3Byb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9qc3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9ja2luZy9tb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Il0sIm5hbWVzIjpbIm1vY2tfMSIsImh0bWxEb21BcGkiLCJjcmVhdGVFbGVtZW50IiwidGFnTmFtZSIsIm9wdGlvbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsIm5hbWVzcGFjZVVSSSIsInF1YWxpZmllZE5hbWUiLCJjcmVhdGVUZXh0Tm9kZSIsInRleHQiLCJjcmVhdGVDb21tZW50IiwiaW5zZXJ0QmVmb3JlIiwicGFyZW50Tm9kZSIsIm5ld05vZGUiLCJyZWZlcmVuY2VOb2RlIiwicmVtb3ZlQ2hpbGQiLCJub2RlIiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsIm5leHRTaWJsaW5nIiwiZWxtIiwic2V0VGV4dENvbnRlbnQiLCJ0ZXh0Q29udGVudCIsImdldFRleHRDb250ZW50IiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJpc1RleHQiLCJpc0NvbW1lbnQiLCJ2bm9kZSIsInNlbCIsImRhdGEiLCJjaGlsZHJlbiIsImtleSIsInVuZGVmaW5lZCIsImFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwicHJpbWl0aXZlIiwicyIsImlzVW5kZWYiLCJpc0RlZiIsImVtcHR5Tm9kZSIsInNhbWVWbm9kZSIsInZub2RlMSIsInZub2RlMiIsIl9hIiwiX2IiLCJpc1NhbWVLZXkiLCJpc1NhbWVJcyIsImlzIiwiY3JlYXRlS2V5VG9PbGRJZHgiLCJiZWdpbklkeCIsImVuZElkeCIsIm1hcCIsImkiLCJob29rcyIsImluaXQiLCJtb2R1bGVzIiwiZG9tQXBpIiwiaiIsImNicyIsImNyZWF0ZSIsInVwZGF0ZSIsInJlbW92ZSIsImRlc3Ryb3kiLCJwcmUiLCJwb3N0IiwiYXBpIiwibGVuZ3RoIiwiaG9vayIsInB1c2giLCJlbXB0eU5vZGVBdCIsImlkIiwiY2xhc3NlcyIsImdldEF0dHJpYnV0ZSIsImMiLCJzcGxpdCIsImpvaW4iLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZVJtQ2IiLCJjaGlsZEVsbSIsImxpc3RlbmVycyIsInBhcmVudCIsImNyZWF0ZUVsbSIsImluc2VydGVkVm5vZGVRdWV1ZSIsImhhc2hJZHgiLCJpbmRleE9mIiwiZG90SWR4IiwiaGFzaCIsImRvdCIsInRhZyIsInNsaWNlIiwiTWF0aCIsIm1pbiIsIm5zIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImNoIiwiY2FsbCIsImluc2VydCIsImFkZFZub2RlcyIsInBhcmVudEVsbSIsImJlZm9yZSIsInZub2RlcyIsInN0YXJ0SWR4IiwiaW52b2tlRGVzdHJveUhvb2siLCJyZW1vdmVWbm9kZXMiLCJybSIsInJlbW92ZUhvb2siLCJwYXRjaFZub2RlIiwib2xkVm5vZGUiLCJfYyIsIl9kIiwiX2UiLCJwcmVwYXRjaCIsIm9sZENoIiwibmV3Q2giLCJvbGRLZXlUb0lkeCIsImlkeEluT2xkIiwiZWxtVG9Nb3ZlIiwib2xkU3RhcnRJZHgiLCJuZXdTdGFydElkeCIsIm9sZEVuZElkeCIsIm9sZFN0YXJ0Vm5vZGUiLCJvbGRFbmRWbm9kZSIsIm5ld0VuZElkeCIsIm5ld1N0YXJ0Vm5vZGUiLCJuZXdFbmRWbm9kZSIsInVwZGF0ZUNoaWxkcmVuIiwicG9zdHBhdGNoIiwiaXNWbm9kZSIsImFkZE5TIiwiY2hpbGREYXRhIiwiaCIsImIiLCJjb3B5VG9UaHVuayIsInRodW5rIiwiZm4iLCJhcmdzIiwiY3VyIiwib2xkIiwib2xkQXJncyIsIm5ld1Zub2RlIiwiYXR0YWNoRGF0YSIsInBsYWNlaG9sZGVyIiwicmVhbCIsIl8iLCJ0YXJnZXQiLCJhdHRhY2hUbyIsInRvVk5vZGUiLCJjbiIsImF0dHJzIiwibmFtZSIsIm4iLCJlbG1BdHRycyIsImF0dHJpYnV0ZXMiLCJlbG1DaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJub2RlTmFtZSIsIm5vZGVWYWx1ZSIsInVwZGF0ZUF0dHJzIiwib2xkQXR0cnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjaGFyQ29kZUF0Iiwic2V0QXR0cmlidXRlTlMiLCJhdHRyaWJ1dGVzTW9kdWxlIiwidXBkYXRlQ2xhc3MiLCJvbGRDbGFzcyIsImNsYXNzIiwia2xhc3MiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzTGlzdCIsImNsYXNzTW9kdWxlIiwiQ0FQU19SRUdFWCIsInVwZGF0ZURhdGFzZXQiLCJvbGREYXRhc2V0IiwiZGF0YXNldCIsImQiLCJkYXRhc2V0TW9kdWxlIiwiaW52b2tlSGFuZGxlciIsImhhbmRsZXIiLCJldmVudCIsImhhbmRsZUV2ZW50IiwidHlwZSIsIm9uIiwidXBkYXRlRXZlbnRMaXN0ZW5lcnMiLCJvbGRPbiIsIm9sZExpc3RlbmVyIiwibGlzdGVuZXIiLCJvbGRFbG0iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50TGlzdGVuZXJzTW9kdWxlIiwidXBkYXRlUHJvcHMiLCJvbGRQcm9wcyIsInByb3BzIiwicHJvcHNNb2R1bGUiLCJyYWYiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwic2V0VGltZW91dCIsInJlZmxvd0ZvcmNlZCIsInNldE5leHRGcmFtZSIsIm9iaiIsInByb3AiLCJ2YWwiLCJ1cGRhdGVTdHlsZSIsIm9sZFN0eWxlIiwic3R5bGUiLCJvbGRIYXNEZWwiLCJyZW1vdmVQcm9wZXJ0eSIsImRlbGF5ZWQiLCJuYW1lMiIsInNldFByb3BlcnR5Iiwic3R5bGVNb2R1bGUiLCJvZmZzZXRMZWZ0IiwiYW1vdW50IiwiYXBwbGllZCIsImdldENvbXB1dGVkU3R5bGUiLCJldiIsImZsYXR0ZW5BbmRGaWx0ZXIiLCJmbGF0dGVuZWQiLCJTdHJpbmciLCJqc3giLCJmbGF0Q2hpbGRyZW4iLCJfX2Fzc2lnbiIsInRoaXMiLCJhc3NpZ24iLCJ0IiwiYXJndW1lbnRzIiwicCIsImFwcGx5IiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJDb21wb25lbnQiLCJEYXRlIiwibm93IiwicmFuZG9tIiwiaHRtbCIsImNzcyIsInN0YXRlIiwiZGVidWciLCJjb25zdHJ1Y3RvciIsIm1vdW50IiwiY29tcGlsZSIsInJlZ2lzdGVyIiwiY2FsbGJhY2siLCJjYWxsYmFja0lkIiwiY2FsbGJhY2tQcm9wcyIsInBhZ2UiLCJjYWxsYmFja3MiLCJjaGlsZENvbXBvbmVudCIsImVycm9yTGluZXMiLCJFcnJvciIsInN0YWNrIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsInZhbHVlIiwiZGVidWdPbiIsImRlYnVnQ29sb3VyIiwiZGVidWdPZmYiLCJleHRlbmRTdGF0aWNzIiwiX19leHRlbmRzIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJUeXBlRXJyb3IiLCJfXyIsIkNvdW50ZXIiLCJDb250YWluZXIiLCJjb21wb25lbnRfMSIsIl9zdXBlciIsImNvdW50ZXIxIiwidGl0bGUiLCJfdGhpcyIsImNvdW50IiwiUGFnZSIsInNuYWJiZG9tXzEiLCJwYXRjaCIsImFkZFJvb3RJbWFnZSIsInJvb3RDb21wb25lbnQiLCJjdXJyZW50Tm9kZSIsInRleHRUb05vZGUiLCJjdXJyZW50VHJlZSIsImJvZHkiLCJpbmplY3RDYWxsYmFja3MiLCJyZW5kZXIiLCJ0cmVlIiwiZG9tIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiZmlyc3RDaGlsZCIsInZhbHVlcyIsImZvckVhY2giLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJhdHRyaWJ1dGUiLCJhdHRyaWJ1dGVOYW1lIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImRlZmluaXRpb24iLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIl0sIm1hcHBpbmdzIjoidUJBRUlBLEUsNFJDMkNHLE1BQU1DLEVBQWEsQ0FDdEJDLGNBOUNKLFNBQXVCQyxFQUFTQyxHQUM1QixPQUFPQyxTQUFTSCxjQUFjQyxFQUFTQyxJQThDdkNFLGdCQTVDSixTQUF5QkMsRUFBY0MsRUFBZUosR0FDbEQsT0FBT0MsU0FBU0MsZ0JBQWdCQyxFQUFjQyxFQUFlSixJQTRDN0RLLGVBMUNKLFNBQXdCQyxHQUNwQixPQUFPTCxTQUFTSSxlQUFlQyxJQTBDL0JDLGNBeENKLFNBQXVCRCxHQUNuQixPQUFPTCxTQUFTTSxjQUFjRCxJQXdDOUJFLGFBdENKLFNBQXNCQyxFQUFZQyxFQUFTQyxHQUN2Q0YsRUFBV0QsYUFBYUUsRUFBU0MsSUFzQ2pDQyxZQXBDSixTQUFxQkMsRUFBTUMsR0FDdkJELEVBQUtELFlBQVlFLElBb0NqQkMsWUFsQ0osU0FBcUJGLEVBQU1DLEdBQ3ZCRCxFQUFLRSxZQUFZRCxJQWtDakJMLFdBaENKLFNBQW9CSSxHQUNoQixPQUFPQSxFQUFLSixZQWdDWk8sWUE5QkosU0FBcUJILEdBQ2pCLE9BQU9BLEVBQUtHLGFBOEJaakIsUUE1QkosU0FBaUJrQixHQUNiLE9BQU9BLEVBQUlsQixTQTRCWG1CLGVBMUJKLFNBQXdCTCxFQUFNUCxHQUMxQk8sRUFBS00sWUFBY2IsR0EwQm5CYyxlQXhCSixTQUF3QlAsR0FDcEIsT0FBT0EsRUFBS00sYUF3QlpFLFVBdEJKLFNBQW1CUixHQUNmLE9BQXlCLElBQWxCQSxFQUFLUyxVQXNCWkMsT0FwQkosU0FBZ0JWLEdBQ1osT0FBeUIsSUFBbEJBLEVBQUtTLFVBb0JaRSxVQWxCSixTQUFtQlgsR0FDZixPQUF5QixJQUFsQkEsRUFBS1MsV0MzQ1QsU0FBU0csRUFBTUMsRUFBS0Ms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QUNqQyxJQUFJLElBQUlwUixLQUFPb1IsRUFDWEwsRUFBb0JNLEVBQUVELEVBQVlwUixLQUFTK1EsRUFBb0JNLEVBQUUxRSxFQUFTM00sSUFDNUUwSSxPQUFPNEksZUFBZTNFLEVBQVMzTSxFQUFLLENBQUV1UixZQUFZLEVBQU1DLElBQUtKLEVBQVdwUixNQ0ozRStRLEVBQW9CTSxFQUFJLENBQUN2RyxFQUFLQyxJQUFVckMsT0FBT0MsVUFBVUMsZUFBZTFFLEtBQUs0RyxFQUFLQyxHQ0NsRmdHLEVBQW9CVSxFQUFLOUUsSUFDSCxvQkFBWCtFLFFBQTBCQSxPQUFPQyxhQUMxQ2pKLE9BQU80SSxlQUFlM0UsRUFBUytFLE9BQU9DLFlBQWEsQ0FBRXZELE1BQU8sV0FFN0QxRixPQUFPNEksZUFBZTNFLEVBQVMsYUFBYyxDQUFFeUIsT0FBTyxLdEJIbkRyUSxFQUFTLEVBQVEsS0FFSCxJQURMLEVBQVEsS0FDUXVSLE1BQUssV0FBV0csYUFBYSxJQUFJMVIsRUFBT2dSLFkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1vY2tfMSA9IHJlcXVpcmUoXCIuL21vY2tpbmcvbW9ja1wiKTtcbnZhciBwYWdlXzEgPSByZXF1aXJlKFwiLi9wYWdlXCIpO1xudmFyIGNvdW50ZXJQYWdlID0gbmV3IHBhZ2VfMS5QYWdlKFwiY291bnRlclwiKS5hZGRSb290SW1hZ2UobmV3IG1vY2tfMS5Db250YWluZXIoKSk7XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dCk7XG59XG5mdW5jdGlvbiBpbnNlcnRCZWZvcmUocGFyZW50Tm9kZSwgbmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKG5vZGUsIGNoaWxkKSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5mdW5jdGlvbiBwYXJlbnROb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5wYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gbmV4dFNpYmxpbmcobm9kZSkge1xuICAgIHJldHVybiBub2RlLm5leHRTaWJsaW5nO1xufVxuZnVuY3Rpb24gdGFnTmFtZShlbG0pIHtcbiAgICByZXR1cm4gZWxtLnRhZ05hbWU7XG59XG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudChub2RlLCB0ZXh0KSB7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5mdW5jdGlvbiBnZXRUZXh0Q29udGVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQ7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAxO1xufVxuZnVuY3Rpb24gaXNUZXh0KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMztcbn1cbmZ1bmN0aW9uIGlzQ29tbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDg7XG59XG5leHBvcnQgY29uc3QgaHRtbERvbUFwaSA9IHtcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIGNyZWF0ZUVsZW1lbnROUyxcbiAgICBjcmVhdGVUZXh0Tm9kZSxcbiAgICBjcmVhdGVDb21tZW50LFxuICAgIGluc2VydEJlZm9yZSxcbiAgICByZW1vdmVDaGlsZCxcbiAgICBhcHBlbmRDaGlsZCxcbiAgICBwYXJlbnROb2RlLFxuICAgIG5leHRTaWJsaW5nLFxuICAgIHRhZ05hbWUsXG4gICAgc2V0VGV4dENvbnRlbnQsXG4gICAgZ2V0VGV4dENvbnRlbnQsXG4gICAgaXNFbGVtZW50LFxuICAgIGlzVGV4dCxcbiAgICBpc0NvbW1lbnQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGRvbWFwaS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gdm5vZGUoc2VsLCBkYXRhLCBjaGlsZHJlbiwgdGV4dCwgZWxtKSB7XG4gICAgY29uc3Qga2V5ID0gZGF0YSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZGF0YS5rZXk7XG4gICAgcmV0dXJuIHsgc2VsLCBkYXRhLCBjaGlsZHJlbiwgdGV4dCwgZWxtLCBrZXkgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZub2RlLmpzLm1hcCIsImV4cG9ydCBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXk7XG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlKHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHMgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHMgPT09IFwibnVtYmVyXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy5qcy5tYXAiLCJpbXBvcnQgeyB2bm9kZSB9IGZyb20gXCIuL3Zub2RlXCI7XG5pbXBvcnQgKiBhcyBpcyBmcm9tIFwiLi9pc1wiO1xuaW1wb3J0IHsgaHRtbERvbUFwaSB9IGZyb20gXCIuL2h0bWxkb21hcGlcIjtcbmZ1bmN0aW9uIGlzVW5kZWYocykge1xuICAgIHJldHVybiBzID09PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc0RlZihzKSB7XG4gICAgcmV0dXJuIHMgIT09IHVuZGVmaW5lZDtcbn1cbmNvbnN0IGVtcHR5Tm9kZSA9IHZub2RlKFwiXCIsIHt9LCBbXSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuZnVuY3Rpb24gc2FtZVZub2RlKHZub2RlMSwgdm5vZGUyKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBpc1NhbWVLZXkgPSB2bm9kZTEua2V5ID09PSB2bm9kZTIua2V5O1xuICAgIGNvbnN0IGlzU2FtZUlzID0gKChfYSA9IHZub2RlMS5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXMpID09PSAoKF9iID0gdm5vZGUyLmRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pcyk7XG4gICAgY29uc3QgaXNTYW1lU2VsID0gdm5vZGUxLnNlbCA9PT0gdm5vZGUyLnNlbDtcbiAgICByZXR1cm4gaXNTYW1lU2VsICYmIGlzU2FtZUtleSAmJiBpc1NhbWVJcztcbn1cbmZ1bmN0aW9uIGlzVm5vZGUodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUuc2VsICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBjcmVhdGVLZXlUb09sZElkeChjaGlsZHJlbiwgYmVnaW5JZHgsIGVuZElkeCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBtYXAgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gYmVnaW5JZHg7IGkgPD0gZW5kSWR4OyArK2kpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gKF9hID0gY2hpbGRyZW5baV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5rZXk7XG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWFwW2tleV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59XG5jb25zdCBob29rcyA9IFtcbiAgICBcImNyZWF0ZVwiLFxuICAgIFwidXBkYXRlXCIsXG4gICAgXCJyZW1vdmVcIixcbiAgICBcImRlc3Ryb3lcIixcbiAgICBcInByZVwiLFxuICAgIFwicG9zdFwiLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0KG1vZHVsZXMsIGRvbUFwaSkge1xuICAgIGxldCBpO1xuICAgIGxldCBqO1xuICAgIGNvbnN0IGNicyA9IHtcbiAgICAgICAgY3JlYXRlOiBbXSxcbiAgICAgICAgdXBkYXRlOiBbXSxcbiAgICAgICAgcmVtb3ZlOiBbXSxcbiAgICAgICAgZGVzdHJveTogW10sXG4gICAgICAgIHByZTogW10sXG4gICAgICAgIHBvc3Q6IFtdLFxuICAgIH07XG4gICAgY29uc3QgYXBpID0gZG9tQXBpICE9PSB1bmRlZmluZWQgPyBkb21BcGkgOiBodG1sRG9tQXBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjYnNbaG9va3NbaV1dID0gW107XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBjb25zdCBob29rID0gbW9kdWxlc1tqXVtob29rc1tpXV07XG4gICAgICAgICAgICBpZiAoaG9vayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2JzW2hvb2tzW2ldXS5wdXNoKGhvb2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVtcHR5Tm9kZUF0KGVsbSkge1xuICAgICAgICBjb25zdCBpZCA9IGVsbS5pZCA/IFwiI1wiICsgZWxtLmlkIDogXCJcIjtcbiAgICAgICAgLy8gZWxtLmNsYXNzTmFtZSBkb2Vzbid0IHJldHVybiBhIHN0cmluZyB3aGVuIGVsbSBpcyBhbiBTVkcgZWxlbWVudCBpbnNpZGUgYSBzaGFkb3dSb290LlxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTQ1NDM0MC9kZXRlY3RpbmctY2xhc3NuYW1lLW9mLXN2Z2FuaW1hdGVkc3RyaW5nXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBlbG0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICAgIGNvbnN0IGMgPSBjbGFzc2VzID8gXCIuXCIgKyBjbGFzc2VzLnNwbGl0KFwiIFwiKS5qb2luKFwiLlwiKSA6IFwiXCI7XG4gICAgICAgIHJldHVybiB2bm9kZShhcGkudGFnTmFtZShlbG0pLnRvTG93ZXJDYXNlKCkgKyBpZCArIGMsIHt9LCBbXSwgdW5kZWZpbmVkLCBlbG0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSbUNiKGNoaWxkRWxtLCBsaXN0ZW5lcnMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJtQ2IoKSB7XG4gICAgICAgICAgICBpZiAoLS1saXN0ZW5lcnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBhcGkucGFyZW50Tm9kZShjaGlsZEVsbSk7XG4gICAgICAgICAgICAgICAgYXBpLnJlbW92ZUNoaWxkKHBhcmVudCwgY2hpbGRFbG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFbG0odm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBpbml0ID0gKF9hID0gZGF0YS5ob29rKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5pdDtcbiAgICAgICAgICAgIGlmIChpc0RlZihpbml0KSkge1xuICAgICAgICAgICAgICAgIGluaXQodm5vZGUpO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IHNlbCA9IHZub2RlLnNlbDtcbiAgICAgICAgaWYgKHNlbCA9PT0gXCIhXCIpIHtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmKHZub2RlLnRleHQpKSB7XG4gICAgICAgICAgICAgICAgdm5vZGUudGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bm9kZS5lbG0gPSBhcGkuY3JlYXRlQ29tbWVudCh2bm9kZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gUGFyc2Ugc2VsZWN0b3JcbiAgICAgICAgICAgIGNvbnN0IGhhc2hJZHggPSBzZWwuaW5kZXhPZihcIiNcIik7XG4gICAgICAgICAgICBjb25zdCBkb3RJZHggPSBzZWwuaW5kZXhPZihcIi5cIiwgaGFzaElkeCk7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gaGFzaElkeCA+IDAgPyBoYXNoSWR4IDogc2VsLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvdElkeCA+IDAgPyBkb3RJZHggOiBzZWwubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgdGFnID0gaGFzaElkeCAhPT0gLTEgfHwgZG90SWR4ICE9PSAtMVxuICAgICAgICAgICAgICAgID8gc2VsLnNsaWNlKDAsIE1hdGgubWluKGhhc2gsIGRvdCkpXG4gICAgICAgICAgICAgICAgOiBzZWw7XG4gICAgICAgICAgICBjb25zdCBlbG0gPSAodm5vZGUuZWxtID1cbiAgICAgICAgICAgICAgICBpc0RlZihkYXRhKSAmJiBpc0RlZigoaSA9IGRhdGEubnMpKVxuICAgICAgICAgICAgICAgICAgICA/IGFwaS5jcmVhdGVFbGVtZW50TlMoaSwgdGFnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICA6IGFwaS5jcmVhdGVFbGVtZW50KHRhZywgZGF0YSkpO1xuICAgICAgICAgICAgaWYgKGhhc2ggPCBkb3QpXG4gICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShcImlkXCIsIHNlbC5zbGljZShoYXNoICsgMSwgZG90KSk7XG4gICAgICAgICAgICBpZiAoZG90SWR4ID4gMClcbiAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc2VsLnNsaWNlKGRvdCArIDEpLnJlcGxhY2UoL1xcLi9nLCBcIiBcIikpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgY2JzLmNyZWF0ZVtpXShlbXB0eU5vZGUsIHZub2RlKTtcbiAgICAgICAgICAgIGlmIChpcy5hcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ggPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5hcHBlbmRDaGlsZChlbG0sIGNyZWF0ZUVsbShjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpcy5wcmltaXRpdmUodm5vZGUudGV4dCkpIHtcbiAgICAgICAgICAgICAgICBhcGkuYXBwZW5kQ2hpbGQoZWxtLCBhcGkuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaG9vayA9IHZub2RlLmRhdGEuaG9vaztcbiAgICAgICAgICAgIGlmIChpc0RlZihob29rKSkge1xuICAgICAgICAgICAgICAgIChfYiA9IGhvb2suY3JlYXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChob29rLCBlbXB0eU5vZGUsIHZub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoaG9vay5pbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2godm5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZub2RlLmVsbSA9IGFwaS5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdm5vZGUuZWxtO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRWbm9kZXMocGFyZW50RWxtLCBiZWZvcmUsIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcbiAgICAgICAgICAgIGlmIChjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGNyZWF0ZUVsbShjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgYmVmb3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpbnZva2VEZXN0cm95SG9vayh2bm9kZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgKF9iID0gKF9hID0gZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmhvb2spID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZXN0cm95KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdm5vZGUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBjYnMuZGVzdHJveVtpXSh2bm9kZSk7XG4gICAgICAgICAgICBpZiAodm5vZGUuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlVm5vZGVzKHBhcmVudEVsbSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lcnM7XG4gICAgICAgICAgICBsZXQgcm07XG4gICAgICAgICAgICBjb25zdCBjaCA9IHZub2Rlc1tzdGFydElkeF07XG4gICAgICAgICAgICBpZiAoY2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0RlZihjaC5zZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKGNoKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gY2JzLnJlbW92ZS5sZW5ndGggKyAxO1xuICAgICAgICAgICAgICAgICAgICBybSA9IGNyZWF0ZVJtQ2IoY2guZWxtLCBsaXN0ZW5lcnMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNicy5yZW1vdmUubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYnMucmVtb3ZlW2ldKGNoLCBybSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUhvb2sgPSAoX2IgPSAoX2EgPSBjaCA9PT0gbnVsbCB8fCBjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2guZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvb2spID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0RlZihyZW1vdmVIb29rKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSG9vayhjaCwgcm0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGFwaS5yZW1vdmVDaGlsZChwYXJlbnRFbG0sIGNoLmVsbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuKHBhcmVudEVsbSwgb2xkQ2gsIG5ld0NoLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgICAgbGV0IG9sZFN0YXJ0SWR4ID0gMDtcbiAgICAgICAgbGV0IG5ld1N0YXJ0SWR4ID0gMDtcbiAgICAgICAgbGV0IG9sZEVuZElkeCA9IG9sZENoLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gICAgICAgIGxldCBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgICAgIGxldCBuZXdFbmRJZHggPSBuZXdDaC5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICAgICAgICBsZXQgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgICAgICBsZXQgb2xkS2V5VG9JZHg7XG4gICAgICAgIGxldCBpZHhJbk9sZDtcbiAgICAgICAgbGV0IGVsbVRvTW92ZTtcbiAgICAgICAgbGV0IGJlZm9yZTtcbiAgICAgICAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgICAgICAgIGlmIChvbGRTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07IC8vIFZub2RlIG1pZ2h0IGhhdmUgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvbGRFbmRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdFbmRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gVm5vZGUgbW92ZWQgcmlnaHRcbiAgICAgICAgICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgYXBpLm5leHRTaWJsaW5nKG9sZEVuZFZub2RlLmVsbSkpO1xuICAgICAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBWbm9kZSBtb3ZlZCBsZWZ0XG4gICAgICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkRW5kVm5vZGUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZEtleVRvSWR4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkS2V5VG9JZHggPSBjcmVhdGVLZXlUb09sZElkeChvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlkeEluT2xkID0gb2xkS2V5VG9JZHhbbmV3U3RhcnRWbm9kZS5rZXldO1xuICAgICAgICAgICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOZXcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgY3JlYXRlRWxtKG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSksIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbVRvTW92ZSA9IG9sZENoW2lkeEluT2xkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsbVRvTW92ZS5zZWwgIT09IG5ld1N0YXJ0Vm5vZGUuc2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgY3JlYXRlRWxtKG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSksIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoVm5vZGUoZWxtVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGVsbVRvTW92ZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCB8fCBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgICAgICAgIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xuICAgICAgICAgICAgICAgIGJlZm9yZSA9IG5ld0NoW25ld0VuZElkeCArIDFdID09IG51bGwgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uZWxtO1xuICAgICAgICAgICAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIGJlZm9yZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50RWxtLCBvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hWbm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICBjb25zdCBob29rID0gKF9hID0gdm5vZGUuZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvb2s7XG4gICAgICAgIChfYiA9IGhvb2sgPT09IG51bGwgfHwgaG9vayA9PT0gdm9pZCAwID8gdm9pZCAwIDogaG9vay5wcmVwYXRjaCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoaG9vaywgb2xkVm5vZGUsIHZub2RlKTtcbiAgICAgICAgY29uc3QgZWxtID0gKHZub2RlLmVsbSA9IG9sZFZub2RlLmVsbSk7XG4gICAgICAgIGNvbnN0IG9sZENoID0gb2xkVm5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGNoID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmIChvbGRWbm9kZSA9PT0gdm5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh2bm9kZS5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLnVwZGF0ZS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBjYnMudXBkYXRlW2ldKG9sZFZub2RlLCB2bm9kZSk7XG4gICAgICAgICAgICAoX2QgPSAoX2MgPSB2bm9kZS5kYXRhLmhvb2spID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy51cGRhdGUpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jYWxsKF9jLCBvbGRWbm9kZSwgdm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1VuZGVmKHZub2RlLnRleHQpKSB7XG4gICAgICAgICAgICBpZiAoaXNEZWYob2xkQ2gpICYmIGlzRGVmKGNoKSkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRDaCAhPT0gY2gpXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNEZWYoY2gpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKVxuICAgICAgICAgICAgICAgICAgICBhcGkuc2V0VGV4dENvbnRlbnQoZWxtLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBhZGRWbm9kZXMoZWxtLCBudWxsLCBjaCwgMCwgY2gubGVuZ3RoIC0gMSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRGVmKG9sZENoKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKSB7XG4gICAgICAgICAgICAgICAgYXBpLnNldFRleHRDb250ZW50KGVsbSwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgICAgICAgaWYgKGlzRGVmKG9sZENoKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwaS5zZXRUZXh0Q29udGVudChlbG0sIHZub2RlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIChfZSA9IGhvb2sgPT09IG51bGwgfHwgaG9vayA9PT0gdm9pZCAwID8gdm9pZCAwIDogaG9vay5wb3N0cGF0Y2gpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jYWxsKGhvb2ssIG9sZFZub2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBwYXRjaChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICAgICAgbGV0IGksIGVsbSwgcGFyZW50O1xuICAgICAgICBjb25zdCBpbnNlcnRlZFZub2RlUXVldWUgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5wcmUubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBjYnMucHJlW2ldKCk7XG4gICAgICAgIGlmICghaXNWbm9kZShvbGRWbm9kZSkpIHtcbiAgICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlOb2RlQXQob2xkVm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzYW1lVm5vZGUob2xkVm5vZGUsIHZub2RlKSkge1xuICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbG0gPSBvbGRWbm9kZS5lbG07XG4gICAgICAgICAgICBwYXJlbnQgPSBhcGkucGFyZW50Tm9kZShlbG0pO1xuICAgICAgICAgICAgY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50LCB2bm9kZS5lbG0sIGFwaS5uZXh0U2libGluZyhlbG0pKTtcbiAgICAgICAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50LCBbb2xkVm5vZGVdLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpbnNlcnRlZFZub2RlUXVldWVbaV0uZGF0YS5ob29rLmluc2VydChpbnNlcnRlZFZub2RlUXVldWVbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucG9zdC5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNicy5wb3N0W2ldKCk7XG4gICAgICAgIHJldHVybiB2bm9kZTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pdC5qcy5tYXAiLCJpbXBvcnQgeyB2bm9kZSB9IGZyb20gXCIuL3Zub2RlXCI7XG5pbXBvcnQgKiBhcyBpcyBmcm9tIFwiLi9pc1wiO1xuZnVuY3Rpb24gYWRkTlMoZGF0YSwgY2hpbGRyZW4sIHNlbCkge1xuICAgIGRhdGEubnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgaWYgKHNlbCAhPT0gXCJmb3JlaWduT2JqZWN0XCIgJiYgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZERhdGEgPSBjaGlsZHJlbltpXS5kYXRhO1xuICAgICAgICAgICAgaWYgKGNoaWxkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYWRkTlMoY2hpbGREYXRhLCBjaGlsZHJlbltpXS5jaGlsZHJlbiwgY2hpbGRyZW5baV0uc2VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoKHNlbCwgYiwgYykge1xuICAgIGxldCBkYXRhID0ge307XG4gICAgbGV0IGNoaWxkcmVuO1xuICAgIGxldCB0ZXh0O1xuICAgIGxldCBpO1xuICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRhdGEgPSBiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpcy5hcnJheShjKSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzLnByaW1pdGl2ZShjKSkge1xuICAgICAgICAgICAgdGV4dCA9IGM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyAmJiBjLnNlbCkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBbY107XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYiAhPT0gdW5kZWZpbmVkICYmIGIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzLmFycmF5KGIpKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXMucHJpbWl0aXZlKGIpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiICYmIGIuc2VsKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IFtiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSBiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGlzLnByaW1pdGl2ZShjaGlsZHJlbltpXSkpXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baV0gPSB2bm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjaGlsZHJlbltpXSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2VsWzBdID09PSBcInNcIiAmJlxuICAgICAgICBzZWxbMV0gPT09IFwidlwiICYmXG4gICAgICAgIHNlbFsyXSA9PT0gXCJnXCIgJiZcbiAgICAgICAgKHNlbC5sZW5ndGggPT09IDMgfHwgc2VsWzNdID09PSBcIi5cIiB8fCBzZWxbM10gPT09IFwiI1wiKSkge1xuICAgICAgICBhZGROUyhkYXRhLCBjaGlsZHJlbiwgc2VsKTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlKHNlbCwgZGF0YSwgY2hpbGRyZW4sIHRleHQsIHVuZGVmaW5lZCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwiLi9oXCI7XG5mdW5jdGlvbiBjb3B5VG9UaHVuayh2bm9kZSwgdGh1bmspIHtcbiAgICB2bm9kZS5kYXRhLmZuID0gdGh1bmsuZGF0YS5mbjtcbiAgICB2bm9kZS5kYXRhLmFyZ3MgPSB0aHVuay5kYXRhLmFyZ3M7XG4gICAgdGh1bmsuZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdGh1bmsuY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICB0aHVuay50ZXh0ID0gdm5vZGUudGV4dDtcbiAgICB0aHVuay5lbG0gPSB2bm9kZS5lbG07XG59XG5mdW5jdGlvbiBpbml0KHRodW5rKSB7XG4gICAgY29uc3QgY3VyID0gdGh1bmsuZGF0YTtcbiAgICBjb25zdCB2bm9kZSA9IGN1ci5mbiguLi5jdXIuYXJncyk7XG4gICAgY29weVRvVGh1bmsodm5vZGUsIHRodW5rKTtcbn1cbmZ1bmN0aW9uIHByZXBhdGNoKG9sZFZub2RlLCB0aHVuaykge1xuICAgIGxldCBpO1xuICAgIGNvbnN0IG9sZCA9IG9sZFZub2RlLmRhdGE7XG4gICAgY29uc3QgY3VyID0gdGh1bmsuZGF0YTtcbiAgICBjb25zdCBvbGRBcmdzID0gb2xkLmFyZ3M7XG4gICAgY29uc3QgYXJncyA9IGN1ci5hcmdzO1xuICAgIGlmIChvbGQuZm4gIT09IGN1ci5mbiB8fCBvbGRBcmdzLmxlbmd0aCAhPT0gYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY29weVRvVGh1bmsoY3VyLmZuKC4uLmFyZ3MpLCB0aHVuayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKG9sZEFyZ3NbaV0gIT09IGFyZ3NbaV0pIHtcbiAgICAgICAgICAgIGNvcHlUb1RodW5rKGN1ci5mbiguLi5hcmdzKSwgdGh1bmspO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvcHlUb1RodW5rKG9sZFZub2RlLCB0aHVuayk7XG59XG5leHBvcnQgY29uc3QgdGh1bmsgPSBmdW5jdGlvbiB0aHVuayhzZWwsIGtleSwgZm4sIGFyZ3MpIHtcbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFyZ3MgPSBmbjtcbiAgICAgICAgZm4gPSBrZXk7XG4gICAgICAgIGtleSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGgoc2VsLCB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBob29rOiB7IGluaXQsIHByZXBhdGNoIH0sXG4gICAgICAgIGZuOiBmbixcbiAgICAgICAgYXJnczogYXJncyxcbiAgICB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHVuay5qcy5tYXAiLCJmdW5jdGlvbiBwcmUodm5vZGUsIG5ld1Zub2RlKSB7XG4gICAgY29uc3QgYXR0YWNoRGF0YSA9IHZub2RlLmRhdGEuYXR0YWNoRGF0YTtcbiAgICAvLyBDb3B5IGNyZWF0ZWQgcGxhY2Vob2xkZXIgYW5kIHJlYWwgZWxlbWVudCBmcm9tIG9sZCB2bm9kZVxuICAgIG5ld1Zub2RlLmRhdGEuYXR0YWNoRGF0YS5wbGFjZWhvbGRlciA9IGF0dGFjaERhdGEucGxhY2Vob2xkZXI7XG4gICAgbmV3Vm5vZGUuZGF0YS5hdHRhY2hEYXRhLnJlYWwgPSBhdHRhY2hEYXRhLnJlYWw7XG4gICAgLy8gTW91bnQgcmVhbCBlbGVtZW50IGluIHZub2RlIHNvIHRoZSBwYXRjaCBwcm9jZXNzIG9wZXJhdGVzIG9uIGl0XG4gICAgdm5vZGUuZWxtID0gdm5vZGUuZGF0YS5hdHRhY2hEYXRhLnJlYWw7XG59XG5mdW5jdGlvbiBwb3N0KF8sIHZub2RlKSB7XG4gICAgLy8gTW91bnQgZHVtbXkgcGxhY2Vob2xkZXIgaW4gdm5vZGUgc28gcG90ZW50aWFsIHJlb3JkZXJzIHVzZSBpdFxuICAgIHZub2RlLmVsbSA9IHZub2RlLmRhdGEuYXR0YWNoRGF0YS5wbGFjZWhvbGRlcjtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3kodm5vZGUpIHtcbiAgICAvLyBSZW1vdmUgcGxhY2Vob2xkZXJcbiAgICBpZiAodm5vZGUuZWxtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdm5vZGUuZWxtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodm5vZGUuZWxtKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHJlYWwgZWxlbWVudCBmcm9tIHdoZXJlIGl0IHdhcyBpbnNlcnRlZFxuICAgIHZub2RlLmVsbSA9IHZub2RlLmRhdGEuYXR0YWNoRGF0YS5yZWFsO1xufVxuZnVuY3Rpb24gY3JlYXRlKF8sIHZub2RlKSB7XG4gICAgY29uc3QgcmVhbCA9IHZub2RlLmVsbTtcbiAgICBjb25zdCBhdHRhY2hEYXRhID0gdm5vZGUuZGF0YS5hdHRhY2hEYXRhO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgLy8gUmVwbGFjZSBhY3R1YWwgZWxlbWVudCB3aXRoIGR1bW15IHBsYWNlaG9sZGVyXG4gICAgLy8gU25hYmJkb20gd2lsbCB0aGVuIGluc2VydCBwbGFjZWhvbGRlciBpbnN0ZWFkXG4gICAgdm5vZGUuZWxtID0gcGxhY2Vob2xkZXI7XG4gICAgYXR0YWNoRGF0YS50YXJnZXQuYXBwZW5kQ2hpbGQocmVhbCk7XG4gICAgYXR0YWNoRGF0YS5yZWFsID0gcmVhbDtcbiAgICBhdHRhY2hEYXRhLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoVG8odGFyZ2V0LCB2bm9kZSkge1xuICAgIGlmICh2bm9kZS5kYXRhID09PSB1bmRlZmluZWQpXG4gICAgICAgIHZub2RlLmRhdGEgPSB7fTtcbiAgICBpZiAodm5vZGUuZGF0YS5ob29rID09PSB1bmRlZmluZWQpXG4gICAgICAgIHZub2RlLmRhdGEuaG9vayA9IHt9O1xuICAgIGNvbnN0IGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIGNvbnN0IGhvb2sgPSB2bm9kZS5kYXRhLmhvb2s7XG4gICAgZGF0YS5hdHRhY2hEYXRhID0geyB0YXJnZXQ6IHRhcmdldCwgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCwgcmVhbDogdW5kZWZpbmVkIH07XG4gICAgaG9vay5jcmVhdGUgPSBjcmVhdGU7XG4gICAgaG9vay5wcmVwYXRjaCA9IHByZTtcbiAgICBob29rLnBvc3RwYXRjaCA9IHBvc3Q7XG4gICAgaG9vay5kZXN0cm95ID0gZGVzdHJveTtcbiAgICByZXR1cm4gdm5vZGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdHRhY2h0by5qcy5tYXAiLCJpbXBvcnQgeyB2bm9kZSB9IGZyb20gXCIuL3Zub2RlXCI7XG5pbXBvcnQgeyBodG1sRG9tQXBpIH0gZnJvbSBcIi4vaHRtbGRvbWFwaVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHRvVk5vZGUobm9kZSwgZG9tQXBpKSB7XG4gICAgY29uc3QgYXBpID0gZG9tQXBpICE9PSB1bmRlZmluZWQgPyBkb21BcGkgOiBodG1sRG9tQXBpO1xuICAgIGxldCB0ZXh0O1xuICAgIGlmIChhcGkuaXNFbGVtZW50KG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gbm9kZS5pZCA/IFwiI1wiICsgbm9kZS5pZCA6IFwiXCI7XG4gICAgICAgIGNvbnN0IGNuID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICAgICAgY29uc3QgYyA9IGNuID8gXCIuXCIgKyBjbi5zcGxpdChcIiBcIikuam9pbihcIi5cIikgOiBcIlwiO1xuICAgICAgICBjb25zdCBzZWwgPSBhcGkudGFnTmFtZShub2RlKS50b0xvd2VyQ2FzZSgpICsgaWQgKyBjO1xuICAgICAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgICAgICBsZXQgbmFtZTtcbiAgICAgICAgbGV0IGksIG47XG4gICAgICAgIGNvbnN0IGVsbUF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBlbG1DaGlsZHJlbiA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChpID0gMCwgbiA9IGVsbUF0dHJzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgbmFtZSA9IGVsbUF0dHJzW2ldLm5vZGVOYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUgIT09IFwiaWRcIiAmJiBuYW1lICE9PSBcImNsYXNzXCIpIHtcbiAgICAgICAgICAgICAgICBhdHRyc1tuYW1lXSA9IGVsbUF0dHJzW2ldLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwLCBuID0gZWxtQ2hpbGRyZW4ubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKHRvVk5vZGUoZWxtQ2hpbGRyZW5baV0sIGRvbUFwaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2bm9kZShzZWwsIHsgYXR0cnMgfSwgY2hpbGRyZW4sIHVuZGVmaW5lZCwgbm9kZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFwaS5pc1RleHQobm9kZSkpIHtcbiAgICAgICAgdGV4dCA9IGFwaS5nZXRUZXh0Q29udGVudChub2RlKTtcbiAgICAgICAgcmV0dXJuIHZub2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRleHQsIG5vZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcGkuaXNDb21tZW50KG5vZGUpKSB7XG4gICAgICAgIHRleHQgPSBhcGkuZ2V0VGV4dENvbnRlbnQobm9kZSk7XG4gICAgICAgIHJldHVybiB2bm9kZShcIiFcIiwge30sIFtdLCB0ZXh0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB2bm9kZShcIlwiLCB7fSwgW10sIHVuZGVmaW5lZCwgbm9kZSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG92bm9kZS5qcy5tYXAiLCJjb25zdCB4bGlua05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XG5jb25zdCB4bWxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XG5jb25zdCBjb2xvbkNoYXIgPSA1ODtcbmNvbnN0IHhDaGFyID0gMTIwO1xuZnVuY3Rpb24gdXBkYXRlQXR0cnMob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgbGV0IGtleTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IG9sZEF0dHJzID0gb2xkVm5vZGUuZGF0YS5hdHRycztcbiAgICBsZXQgYXR0cnMgPSB2bm9kZS5kYXRhLmF0dHJzO1xuICAgIGlmICghb2xkQXR0cnMgJiYgIWF0dHJzKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZEF0dHJzID09PSBhdHRycylcbiAgICAgICAgcmV0dXJuO1xuICAgIG9sZEF0dHJzID0gb2xkQXR0cnMgfHwge307XG4gICAgYXR0cnMgPSBhdHRycyB8fCB7fTtcbiAgICAvLyB1cGRhdGUgbW9kaWZpZWQgYXR0cmlidXRlcywgYWRkIG5ldyBhdHRyaWJ1dGVzXG4gICAgZm9yIChrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgY29uc3QgY3VyID0gYXR0cnNba2V5XTtcbiAgICAgICAgY29uc3Qgb2xkID0gb2xkQXR0cnNba2V5XTtcbiAgICAgICAgaWYgKG9sZCAhPT0gY3VyKSB7XG4gICAgICAgICAgICBpZiAoY3VyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShrZXksIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3VyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuY2hhckNvZGVBdCgwKSAhPT0geENoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShrZXksIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleS5jaGFyQ29kZUF0KDMpID09PSBjb2xvbkNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1lIHhtbCBuYW1lc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZU5TKHhtbE5TLCBrZXksIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleS5jaGFyQ29kZUF0KDUpID09PSBjb2xvbkNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1lIHhsaW5rIG5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlTlMoeGxpbmtOUywga2V5LCBjdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShrZXksIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZW1vdmVkIGF0dHJpYnV0ZXNcbiAgICAvLyB1c2UgYGluYCBvcGVyYXRvciBzaW5jZSB0aGUgcHJldmlvdXMgYGZvcmAgaXRlcmF0aW9uIHVzZXMgaXQgKC5pLmUuIGFkZCBldmVuIGF0dHJpYnV0ZXMgd2l0aCB1bmRlZmluZWQgdmFsdWUpXG4gICAgLy8gdGhlIG90aGVyIG9wdGlvbiBpcyB0byByZW1vdmUgYWxsIGF0dHJpYnV0ZXMgd2l0aCB2YWx1ZSA9PSB1bmRlZmluZWRcbiAgICBmb3IgKGtleSBpbiBvbGRBdHRycykge1xuICAgICAgICBpZiAoIShrZXkgaW4gYXR0cnMpKSB7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgYXR0cmlidXRlc01vZHVsZSA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZUF0dHJzLFxuICAgIHVwZGF0ZTogdXBkYXRlQXR0cnMsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXR0cmlidXRlcy5qcy5tYXAiLCJmdW5jdGlvbiB1cGRhdGVDbGFzcyhvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBsZXQgY3VyO1xuICAgIGxldCBuYW1lO1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBsZXQgb2xkQ2xhc3MgPSBvbGRWbm9kZS5kYXRhLmNsYXNzO1xuICAgIGxldCBrbGFzcyA9IHZub2RlLmRhdGEuY2xhc3M7XG4gICAgaWYgKCFvbGRDbGFzcyAmJiAha2xhc3MpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAob2xkQ2xhc3MgPT09IGtsYXNzKVxuICAgICAgICByZXR1cm47XG4gICAgb2xkQ2xhc3MgPSBvbGRDbGFzcyB8fCB7fTtcbiAgICBrbGFzcyA9IGtsYXNzIHx8IHt9O1xuICAgIGZvciAobmFtZSBpbiBvbGRDbGFzcykge1xuICAgICAgICBpZiAob2xkQ2xhc3NbbmFtZV0gJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChrbGFzcywgbmFtZSkpIHtcbiAgICAgICAgICAgIC8vIHdhcyBgdHJ1ZWAgYW5kIG5vdyBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobmFtZSBpbiBrbGFzcykge1xuICAgICAgICBjdXIgPSBrbGFzc1tuYW1lXTtcbiAgICAgICAgaWYgKGN1ciAhPT0gb2xkQ2xhc3NbbmFtZV0pIHtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3RbY3VyID8gXCJhZGRcIiA6IFwicmVtb3ZlXCJdKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGNsYXNzTW9kdWxlID0geyBjcmVhdGU6IHVwZGF0ZUNsYXNzLCB1cGRhdGU6IHVwZGF0ZUNsYXNzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGFzcy5qcy5tYXAiLCJjb25zdCBDQVBTX1JFR0VYID0gL1tBLVpdL2c7XG5mdW5jdGlvbiB1cGRhdGVEYXRhc2V0KG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBsZXQgb2xkRGF0YXNldCA9IG9sZFZub2RlLmRhdGEuZGF0YXNldDtcbiAgICBsZXQgZGF0YXNldCA9IHZub2RlLmRhdGEuZGF0YXNldDtcbiAgICBsZXQga2V5O1xuICAgIGlmICghb2xkRGF0YXNldCAmJiAhZGF0YXNldClcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChvbGREYXRhc2V0ID09PSBkYXRhc2V0KVxuICAgICAgICByZXR1cm47XG4gICAgb2xkRGF0YXNldCA9IG9sZERhdGFzZXQgfHwge307XG4gICAgZGF0YXNldCA9IGRhdGFzZXQgfHwge307XG4gICAgY29uc3QgZCA9IGVsbS5kYXRhc2V0O1xuICAgIGZvciAoa2V5IGluIG9sZERhdGFzZXQpIHtcbiAgICAgICAgaWYgKCFkYXRhc2V0W2tleV0pIHtcbiAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiBkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtXCIgKyBrZXkucmVwbGFjZShDQVBTX1JFR0VYLCBcIi0kJlwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGtleSBpbiBkYXRhc2V0KSB7XG4gICAgICAgIGlmIChvbGREYXRhc2V0W2tleV0gIT09IGRhdGFzZXRba2V5XSkge1xuICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgICBkW2tleV0gPSBkYXRhc2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIGtleS5yZXBsYWNlKENBUFNfUkVHRVgsIFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksIGRhdGFzZXRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgZGF0YXNldE1vZHVsZSA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZURhdGFzZXQsXG4gICAgdXBkYXRlOiB1cGRhdGVEYXRhc2V0LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGFzZXQuanMubWFwIiwiZnVuY3Rpb24gaW52b2tlSGFuZGxlcihoYW5kbGVyLCB2bm9kZSwgZXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAvLyBjYWxsIGZ1bmN0aW9uIGhhbmRsZXJcbiAgICAgICAgaGFuZGxlci5jYWxsKHZub2RlLCBldmVudCwgdm5vZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAvLyBjYWxsIG11bHRpcGxlIGhhbmRsZXJzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW52b2tlSGFuZGxlcihoYW5kbGVyW2ldLCB2bm9kZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlRXZlbnQoZXZlbnQsIHZub2RlKSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnR5cGU7XG4gICAgY29uc3Qgb24gPSB2bm9kZS5kYXRhLm9uO1xuICAgIC8vIGNhbGwgZXZlbnQgaGFuZGxlcihzKSBpZiBleGlzdHNcbiAgICBpZiAob24gJiYgb25bbmFtZV0pIHtcbiAgICAgICAgaW52b2tlSGFuZGxlcihvbltuYW1lXSwgdm5vZGUsIGV2ZW50KTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgICBoYW5kbGVFdmVudChldmVudCwgaGFuZGxlci52bm9kZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGNvbnN0IG9sZE9uID0gb2xkVm5vZGUuZGF0YS5vbjtcbiAgICBjb25zdCBvbGRMaXN0ZW5lciA9IG9sZFZub2RlLmxpc3RlbmVyO1xuICAgIGNvbnN0IG9sZEVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICBjb25zdCBvbiA9IHZub2RlICYmIHZub2RlLmRhdGEub247XG4gICAgY29uc3QgZWxtID0gKHZub2RlICYmIHZub2RlLmVsbSk7XG4gICAgbGV0IG5hbWU7XG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciByZXVzZWQgaW1tdXRhYmxlIGhhbmRsZXJzXG4gICAgaWYgKG9sZE9uID09PSBvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHJlbW92ZSBleGlzdGluZyBsaXN0ZW5lcnMgd2hpY2ggbm8gbG9uZ2VyIHVzZWRcbiAgICBpZiAob2xkT24gJiYgb2xkTGlzdGVuZXIpIHtcbiAgICAgICAgLy8gaWYgZWxlbWVudCBjaGFuZ2VkIG9yIGRlbGV0ZWQgd2UgcmVtb3ZlIGFsbCBleGlzdGluZyBsaXN0ZW5lcnMgdW5jb25kaXRpb25hbGx5XG4gICAgICAgIGlmICghb24pIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lciBpZiBlbGVtZW50IHdhcyBjaGFuZ2VkIG9yIGV4aXN0aW5nIGxpc3RlbmVycyByZW1vdmVkXG4gICAgICAgICAgICAgICAgb2xkRWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgb2xkTGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lciBpZiBleGlzdGluZyBsaXN0ZW5lciByZW1vdmVkXG4gICAgICAgICAgICAgICAgaWYgKCFvbltuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBvbGRFbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBvbGRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgbmV3IGxpc3RlbmVycyB3aGljaCBoYXMgbm90IGFscmVhZHkgYXR0YWNoZWRcbiAgICBpZiAob24pIHtcbiAgICAgICAgLy8gcmV1c2UgZXhpc3RpbmcgbGlzdGVuZXIgb3IgY3JlYXRlIG5ld1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICh2bm9kZS5saXN0ZW5lciA9XG4gICAgICAgICAgICBvbGRWbm9kZS5saXN0ZW5lciB8fCBjcmVhdGVMaXN0ZW5lcigpKTtcbiAgICAgICAgLy8gdXBkYXRlIHZub2RlIGZvciBsaXN0ZW5lclxuICAgICAgICBsaXN0ZW5lci52bm9kZSA9IHZub2RlO1xuICAgICAgICAvLyBpZiBlbGVtZW50IGNoYW5nZWQgb3IgYWRkZWQgd2UgYWRkIGFsbCBuZWVkZWQgbGlzdGVuZXJzIHVuY29uZGl0aW9uYWxseVxuICAgICAgICBpZiAoIW9sZE9uKSB7XG4gICAgICAgICAgICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgbGlzdGVuZXIgaWYgZWxlbWVudCB3YXMgY2hhbmdlZCBvciBuZXcgbGlzdGVuZXJzIGFkZGVkXG4gICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbikge1xuICAgICAgICAgICAgICAgIC8vIGFkZCBsaXN0ZW5lciBpZiBuZXcgbGlzdGVuZXIgYWRkZWRcbiAgICAgICAgICAgICAgICBpZiAoIW9sZE9uW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGV2ZW50TGlzdGVuZXJzTW9kdWxlID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlRXZlbnRMaXN0ZW5lcnMsXG4gICAgdXBkYXRlOiB1cGRhdGVFdmVudExpc3RlbmVycyxcbiAgICBkZXN0cm95OiB1cGRhdGVFdmVudExpc3RlbmVycyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudGxpc3RlbmVycy5qcy5tYXAiLCJmdW5jdGlvbiB1cGRhdGVQcm9wcyhvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBsZXQga2V5O1xuICAgIGxldCBjdXI7XG4gICAgbGV0IG9sZDtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IG9sZFByb3BzID0gb2xkVm5vZGUuZGF0YS5wcm9wcztcbiAgICBsZXQgcHJvcHMgPSB2bm9kZS5kYXRhLnByb3BzO1xuICAgIGlmICghb2xkUHJvcHMgJiYgIXByb3BzKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZFByb3BzID09PSBwcm9wcylcbiAgICAgICAgcmV0dXJuO1xuICAgIG9sZFByb3BzID0gb2xkUHJvcHMgfHwge307XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBmb3IgKGtleSBpbiBwcm9wcykge1xuICAgICAgICBjdXIgPSBwcm9wc1trZXldO1xuICAgICAgICBvbGQgPSBvbGRQcm9wc1trZXldO1xuICAgICAgICBpZiAob2xkICE9PSBjdXIgJiYgKGtleSAhPT0gXCJ2YWx1ZVwiIHx8IGVsbVtrZXldICE9PSBjdXIpKSB7XG4gICAgICAgICAgICBlbG1ba2V5XSA9IGN1cjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBwcm9wc01vZHVsZSA9IHsgY3JlYXRlOiB1cGRhdGVQcm9wcywgdXBkYXRlOiB1cGRhdGVQcm9wcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcHMuanMubWFwIiwiLy8gQmluZGlnIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGxpa2UgdGhpcyBmaXhlcyBhIGJ1ZyBpbiBJRS9FZGdlLiBTZWUgIzM2MCBhbmQgIzQwOS5cbmNvbnN0IHJhZiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykpIHx8XG4gICAgc2V0VGltZW91dDtcbmNvbnN0IG5leHRGcmFtZSA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJhZihmbik7XG4gICAgfSk7XG59O1xubGV0IHJlZmxvd0ZvcmNlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2V0TmV4dEZyYW1lKG9iaiwgcHJvcCwgdmFsKSB7XG4gICAgbmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2JqW3Byb3BdID0gdmFsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdXBkYXRlU3R5bGUob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgbGV0IGN1cjtcbiAgICBsZXQgbmFtZTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IG9sZFN0eWxlID0gb2xkVm5vZGUuZGF0YS5zdHlsZTtcbiAgICBsZXQgc3R5bGUgPSB2bm9kZS5kYXRhLnN0eWxlO1xuICAgIGlmICghb2xkU3R5bGUgJiYgIXN0eWxlKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZFN0eWxlID09PSBzdHlsZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9sZFN0eWxlID0gb2xkU3R5bGUgfHwge307XG4gICAgc3R5bGUgPSBzdHlsZSB8fCB7fTtcbiAgICBjb25zdCBvbGRIYXNEZWwgPSBcImRlbGF5ZWRcIiBpbiBvbGRTdHlsZTtcbiAgICBmb3IgKG5hbWUgaW4gb2xkU3R5bGUpIHtcbiAgICAgICAgaWYgKCFzdHlsZVtuYW1lXSkge1xuICAgICAgICAgICAgaWYgKG5hbWVbMF0gPT09IFwiLVwiICYmIG5hbWVbMV0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtLnN0eWxlW25hbWVdID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKG5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgY3VyID0gc3R5bGVbbmFtZV07XG4gICAgICAgIGlmIChuYW1lID09PSBcImRlbGF5ZWRcIiAmJiBzdHlsZS5kZWxheWVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUyIGluIHN0eWxlLmRlbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICBjdXIgPSBzdHlsZS5kZWxheWVkW25hbWUyXTtcbiAgICAgICAgICAgICAgICBpZiAoIW9sZEhhc0RlbCB8fCBjdXIgIT09IG9sZFN0eWxlLmRlbGF5ZWRbbmFtZTJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE5leHRGcmFtZShlbG0uc3R5bGUsIG5hbWUyLCBjdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lICE9PSBcInJlbW92ZVwiICYmIGN1ciAhPT0gb2xkU3R5bGVbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmIChuYW1lWzBdID09PSBcIi1cIiAmJiBuYW1lWzFdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIGVsbS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBjdXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtLnN0eWxlW25hbWVdID0gY3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlEZXN0cm95U3R5bGUodm5vZGUpIHtcbiAgICBsZXQgc3R5bGU7XG4gICAgbGV0IG5hbWU7XG4gICAgY29uc3QgZWxtID0gdm5vZGUuZWxtO1xuICAgIGNvbnN0IHMgPSB2bm9kZS5kYXRhLnN0eWxlO1xuICAgIGlmICghcyB8fCAhKHN0eWxlID0gcy5kZXN0cm95KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGZvciAobmFtZSBpbiBzdHlsZSkge1xuICAgICAgICBlbG0uc3R5bGVbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVJlbW92ZVN0eWxlKHZub2RlLCBybSkge1xuICAgIGNvbnN0IHMgPSB2bm9kZS5kYXRhLnN0eWxlO1xuICAgIGlmICghcyB8fCAhcy5yZW1vdmUpIHtcbiAgICAgICAgcm0oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlZmxvd0ZvcmNlZCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICB2bm9kZS5lbG0ub2Zmc2V0TGVmdDtcbiAgICAgICAgcmVmbG93Rm9yY2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IG5hbWU7XG4gICAgY29uc3QgZWxtID0gdm5vZGUuZWxtO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBzdHlsZSA9IHMucmVtb3ZlO1xuICAgIGxldCBhbW91bnQgPSAwO1xuICAgIGNvbnN0IGFwcGxpZWQgPSBbXTtcbiAgICBmb3IgKG5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgYXBwbGllZC5wdXNoKG5hbWUpO1xuICAgICAgICBlbG0uc3R5bGVbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICB9XG4gICAgY29uc3QgY29tcFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbG0pO1xuICAgIGNvbnN0IHByb3BzID0gY29tcFN0eWxlW1widHJhbnNpdGlvbi1wcm9wZXJ0eVwiXS5zcGxpdChcIiwgXCIpO1xuICAgIGZvciAoOyBpIDwgcHJvcHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGFwcGxpZWQuaW5kZXhPZihwcm9wc1tpXSkgIT09IC0xKVxuICAgICAgICAgICAgYW1vdW50Kys7XG4gICAgfVxuICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgaWYgKGV2LnRhcmdldCA9PT0gZWxtKVxuICAgICAgICAgICAgLS1hbW91bnQ7XG4gICAgICAgIGlmIChhbW91bnQgPT09IDApXG4gICAgICAgICAgICBybSgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZm9yY2VSZWZsb3coKSB7XG4gICAgcmVmbG93Rm9yY2VkID0gZmFsc2U7XG59XG5leHBvcnQgY29uc3Qgc3R5bGVNb2R1bGUgPSB7XG4gICAgcHJlOiBmb3JjZVJlZmxvdyxcbiAgICBjcmVhdGU6IHVwZGF0ZVN0eWxlLFxuICAgIHVwZGF0ZTogdXBkYXRlU3R5bGUsXG4gICAgZGVzdHJveTogYXBwbHlEZXN0cm95U3R5bGUsXG4gICAgcmVtb3ZlOiBhcHBseVJlbW92ZVN0eWxlLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmpzLm1hcCIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2UsIGltcG9ydC9leHBvcnQgKi9cbmltcG9ydCB7IHZub2RlIH0gZnJvbSBcIi4vdm5vZGVcIjtcbmltcG9ydCB7IGggfSBmcm9tIFwiLi9oXCI7XG5mdW5jdGlvbiBmbGF0dGVuQW5kRmlsdGVyKGNoaWxkcmVuLCBmbGF0dGVuZWQpIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIC8vIGZpbHRlciBvdXQgZmFsc2V5IGNoaWxkcmVuLCBleGNlcHQgMCBzaW5jZSB6ZXJvIGNhbiBiZSBhIHZhbGlkIHZhbHVlIGUuZyBpbnNpZGUgYSBjaGFydFxuICAgICAgICBpZiAoY2hpbGQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgY2hpbGQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGNoaWxkICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgY2hpbGQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGZsYXR0ZW5BbmRGaWx0ZXIoY2hpbGQsIGZsYXR0ZW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgY2hpbGQgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgY2hpbGQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgZmxhdHRlbmVkLnB1c2godm5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKGNoaWxkKSwgdW5kZWZpbmVkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbGF0dGVuZWQucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbi8qKlxuICoganN4L3RzeCBjb21wYXRpYmxlIGZhY3RvcnkgZnVuY3Rpb25cbiAqIHNlZTogaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svanN4Lmh0bWwjZmFjdG9yeS1mdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzeCh0YWcsIGRhdGEsIC4uLmNoaWxkcmVuKSB7XG4gICAgY29uc3QgZmxhdENoaWxkcmVuID0gZmxhdHRlbkFuZEZpbHRlcihjaGlsZHJlbiwgW10pO1xuICAgIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgLy8gdGFnIGlzIGEgZnVuY3Rpb24gY29tcG9uZW50XG4gICAgICAgIHJldHVybiB0YWcoZGF0YSwgZmxhdENoaWxkcmVuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChmbGF0Q2hpbGRyZW4ubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICAhZmxhdENoaWxkcmVuWzBdLnNlbCAmJlxuICAgICAgICAgICAgZmxhdENoaWxkcmVuWzBdLnRleHQpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgY2hpbGQgaXMgYSBzaW1wbGUgdGV4dCBub2RlLCBwYXNzIGFzIHRleHQgZm9yIGEgc2ltcGxlciB2dHJlZVxuICAgICAgICAgICAgcmV0dXJuIGgodGFnLCBkYXRhLCBmbGF0Q2hpbGRyZW5bMF0udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaCh0YWcsIGRhdGEsIGZsYXRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59XG4oZnVuY3Rpb24gKGpzeCkge1xufSkoanN4IHx8IChqc3ggPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anN4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNvbXBvbmVudCA9IHZvaWQgMDtcbnZhciBDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzKSB7XG4gICAgICAgIHRoaXMuaWQgPSBcImlcIiArIChcIlwiICsgKERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpKSkucmVwbGFjZShcIi5cIiwgXCJcIik7XG4gICAgICAgIHRoaXMuaHRtbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY3NzID0gXCJcIjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gICAgICAgIHRoaXMuZGVidWcgPSBcIlwiO1xuICAgICAgICB0aGlzLnByb3BzID0gX19hc3NpZ24oe30sIHByb3BzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbiAgICBDb21wb25lbnQucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnN0eWxlID0gZnVuY3Rpb24gKGNzcykge1xuICAgICAgICB0aGlzLmNzcyA9IGNzcztcbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgIHRoaXMuaHRtbCA9IChcIlxcbiAgICAgICAgPGRpdiBcXG4gICAgICAgICAgICBpZD1cXFwiXCIgKyB0aGlzLmlkICsgXCJcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgICAgXCIgKyBodG1sICsgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHN0eWxlPlxcbiAgICAgICAgICAgIGRpdiNcIiArIHRoaXMuaWQgKyBcIiBcIiArICh0aGlzLmNzcyA/IHRoaXMuY3NzIDogXCJ7fVwiKSArIFwiXFxuICAgICAgICA8L3N0eWxlPlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzXFxzKy9nLCBcIiBcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gPC9nLCBcIjxcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC88IC9nLCBcIjxcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC8+IC9nLCBcIj5cIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gPi9nLCBcIj5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWw7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFja0lkID0gXCJyXCIgKyAoXCJcIiArIChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSkpLnJlcGxhY2UoXCIuXCIsIFwiXCIpO1xuICAgICAgICB2YXIgY2FsbGJhY2tQcm9wcyA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2tJZDogY2FsbGJhY2tJZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pZCBpbiB0aGlzLnBhZ2UuY2FsbGJhY2tzXG4gICAgICAgICAgICA/IHRoaXMucGFnZS5jYWxsYmFja3NbdGhpcy5pZF0ucHVzaChjYWxsYmFja1Byb3BzKVxuICAgICAgICAgICAgOiAodGhpcy5wYWdlLmNhbGxiYWNrc1t0aGlzLmlkXSA9IFtjYWxsYmFja1Byb3BzXSk7XG4gICAgICAgIHJldHVybiBjYWxsYmFja0lkICsgXCIgZGF0YS1cIiArIGNhbGxiYWNrSWQgKyBcIj1cXFwiXCIgKyBjYWxsYmFja0lkICsgXCJcXFwiXCI7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmNoaWxkID0gZnVuY3Rpb24gKGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgICAgICB2YXIgZXJyb3JMaW5lcyA9IGVycm9yLnNwbGl0KFwiXFxuXCIpWzJdO1xuICAgICAgICB2YXIgbGluZU51bWJlciA9IGVycm9yTGluZXMuc3BsaXQoXCI6XCIpLnNsaWNlKC0yKVswXTtcbiAgICAgICAgdmFyIGNvbE51bWJlciA9IGVycm9yTGluZXMuc3BsaXQoXCI6XCIpLnNsaWNlKC0xKVswXS5yZXBsYWNlKFwiKVwiLCBcIlwiKTtcbiAgICAgICAgdmFyIGtleSA9IFwiXCIgKyAobGluZU51bWJlciArIGNvbE51bWJlcik7XG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldLm1vdW50KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldLmh0bWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5wYWdlID0gdGhpcy5wYWdlO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldID0gY2hpbGRDb21wb25lbnQ7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5tb3VudCgpO1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50Lmh0bWw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMucGFnZS51cGRhdGUoKTtcbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuZGVidWdPbiA9IGZ1bmN0aW9uIChkZWJ1Z0NvbG91cikge1xuICAgICAgICBpZiAoZGVidWdDb2xvdXIgPT09IHZvaWQgMCkgeyBkZWJ1Z0NvbG91ciA9IFwiI2ZmMDAwMFwiOyB9XG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1Z0NvbG91cjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmRlYnVnT2ZmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlYnVnID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNvdW50ZXIgPSBleHBvcnRzLkNvbnRhaW5lciA9IHZvaWQgMDtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRcIik7XG52YXIgQ29udGFpbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb250YWluZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvdW50ZXIxID0gdGhpcy5jaGlsZChuZXcgQ291bnRlcih7IHRpdGxlOiBcIkNvdW50ZXIgMlwiIH0pLmRlYnVnT24oXCIjMDBmZjAwXCIpKTtcbiAgICAgICAgdGhpcy5zdHlsZShcIi50ZXN0IHtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB9XCIpO1xuICAgICAgICB0aGlzLmNvbXBpbGUoXCJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXN0XFxcIj5cXG4gICAgICAgICAgICAgICAgXCIgKyB0aGlzLmNoaWxkKG5ldyBDb3VudGVyKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvdW50ZXIgMVwiLFxuICAgICAgICB9KS5kZWJ1Z09uKCkpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBjb3VudGVyMSArIFwiXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIik7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGFpbmVyO1xufShjb21wb25lbnRfMS5Db21wb25lbnQpKTtcbmV4cG9ydHMuQ29udGFpbmVyID0gQ29udGFpbmVyO1xudmFyIENvdW50ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvdW50ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ291bnRlcihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IGNvdW50OiAwIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvdW50ZXIucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYVRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShcImNvdW50XCIsIF90aGlzLmdldFN0YXRlKFwiY291bnRcIikgKyAxKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb21waWxlKFwiXFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgXCIgKyB0aGlzLmdldFN0YXRlKFwidGl0bGVcIikgKyBcIlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIFwiICsgdGhpcy5nZXRTdGF0ZShcImNvdW50XCIpICsgXCJcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9XCIgKyB0aGlzLnJlZ2lzdGVyKGFUZXN0KSArIFwiPkEgbmljZSBuZXcgYnV0dG9uPC9idXR0b24+XFxuICAgICAgICAgICAgPHN0eWxlPlxcbiAgICAgICAgICAgICAgICAqIHtmb250LXNpemU6IDI1cHg7fVxcbiAgICAgICAgICAgIDwvc3R5bGU+XFxuICAgICAgICBcIik7XG4gICAgfTtcbiAgICByZXR1cm4gQ291bnRlcjtcbn0oY29tcG9uZW50XzEuQ29tcG9uZW50KSk7XG5leHBvcnRzLkNvdW50ZXIgPSBDb3VudGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5QYWdlID0gdm9pZCAwO1xudmFyIHNuYWJiZG9tXzEgPSByZXF1aXJlKFwic25hYmJkb21cIik7XG52YXIgcGF0Y2ggPSBzbmFiYmRvbV8xLmluaXQoW10pO1xudmFyIFBhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGFnZShuYW1lKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIFBhZ2UucHJvdG90eXBlLmFkZFJvb3RJbWFnZSA9IGZ1bmN0aW9uIChyb290Q29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMucm9vdENvbXBvbmVudCA9IHJvb3RDb21wb25lbnQ7XG4gICAgICAgIHRoaXMucm9vdENvbXBvbmVudC5wYWdlID0gdGhpcztcbiAgICAgICAgdGhpcy5yb290Q29tcG9uZW50Lm1vdW50KCk7XG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSB0aGlzLnRleHRUb05vZGUodGhpcy5yb290Q29tcG9uZW50Lmh0bWwpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmVlID0gc25hYmJkb21fMS50b1ZOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICB0aGlzLmluamVjdENhbGxiYWNrcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFBhZ2UucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yb290Q29tcG9uZW50Lm1vdW50KCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcbiAgICBQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy50ZXh0VG9Ob2RlKHRoaXMucm9vdENvbXBvbmVudC5odG1sKTtcbiAgICAgICAgdmFyIHRyZWUgPSBzbmFiYmRvbV8xLnRvVk5vZGUobm9kZSk7XG4gICAgICAgIHBhdGNoKHRoaXMuY3VycmVudFRyZWUsIHRyZWUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmVlID0gdHJlZTtcbiAgICB9O1xuICAgIFBhZ2UucHJvdG90eXBlLnRleHRUb05vZGUgPSBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGRvbSwgXCJ0ZXh0L2h0bWxcIikuYm9keS5maXJzdENoaWxkO1xuICAgIH07XG4gICAgLy8gYWRkcyBjYWxsYmFja3MgKGUuZyBldmVudCBsaXN0ZW5lcnMpIHRvIHRoZSBET00gb25jZSBpdCBoYXMgYmVlbiByZWNvbmNpbGVkIGFuZCByZW5kZXJlZC5cbiAgICAvLyBnb2VzIHRocm91Z2ggdGhlIGNhbGxiYWNrcyBvYmplY3QsIGZpbmRzIHRoZSBlbGVtZW50IGJ5IHRoZSBjYWxsYmFja0lkLCBjaGVja3MgaWYgdGhlXG4gICAgLy8gdmFsdWUgb2YgdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGVzIG1hdGNoZXMgdGhlIGNhbGxiYWNrIGlkXG4gICAgUGFnZS5wcm90b3R5cGUuaW5qZWN0Q2FsbGJhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuY2FsbGJhY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFja1Byb3BzKSB7XG4gICAgICAgICAgICBjYWxsYmFja1Byb3BzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtXCIgKyBjYWxsYmFjay5jYWxsYmFja0lkICsgXCJdXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSA9IDA7IGF0dHJpYnV0ZSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGF0dHJpYnV0ZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IGVsZW1lbnQuYXR0cmlidXRlc1thdHRyaWJ1dGVdLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gZWxlbWVudC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlID09IGNhbGxiYWNrLmNhbGxiYWNrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50W2F0dHJpYnV0ZU5hbWVdID0gY2FsbGJhY2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FSTjogVW5tb3VudGVkIGNvbXBvbmVudCBleGlzdHM6IFwiICsgY2FsbGJhY2submFtZSArIFwiIC0gXCIgKyBjYWxsYmFjay5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICAgIH07XG4gICAgcmV0dXJuIFBhZ2U7XG59KCkpO1xuZXhwb3J0cy5QYWdlID0gUGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
