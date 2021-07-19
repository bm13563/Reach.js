(() => {
    "use strict";
    var t,
        e = {
            361: (t, e, n) => {
                n.r(e),
                    n.d(e, {
                        array: () => i,
                        attachTo: () => T,
                        attributesModule: () => N,
                        classModule: () => j,
                        datasetModule: () => E,
                        eventListenersModule: () => B,
                        h: () => v,
                        htmlDomApi: () => o,
                        init: () => f,
                        jsx: () => U,
                        primitive: () => a,
                        propsModule: () => R,
                        styleModule: () => $,
                        thunk: () => b,
                        toVNode: () => S,
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
                const d = r("", {}, [], void 0, void 0);
                function c(t, e) {
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
                const p = [
                    "create",
                    "update",
                    "remove",
                    "destroy",
                    "pre",
                    "post",
                ];
                function f(t, e) {
                    let n, f;
                    const h = {
                            create: [],
                            update: [],
                            remove: [],
                            destroy: [],
                            pre: [],
                            post: [],
                        },
                        v = void 0 !== e ? e : o;
                    for (n = 0; n < p.length; ++n)
                        for (h[p[n]] = [], f = 0; f < t.length; ++f) {
                            const e = t[f][p[n]];
                            void 0 !== e && h[p[n]].push(e);
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
                            c = t.data;
                        if (void 0 !== c) {
                            const e =
                                null === (n = c.hook) || void 0 === n
                                    ? void 0
                                    : n.init;
                            s(e) && (e(t), (c = t.data));
                        }
                        const u = t.children,
                            p = t.sel;
                        if ("!" === p)
                            l(t.text) && (t.text = ""),
                                (t.elm = v.createComment(t.text));
                        else if (void 0 !== p) {
                            const n = p.indexOf("#"),
                                l = p.indexOf(".", n),
                                f = n > 0 ? n : p.length,
                                m = l > 0 ? l : p.length,
                                g =
                                    -1 !== n || -1 !== l
                                        ? p.slice(0, Math.min(f, m))
                                        : p,
                                b = (t.elm =
                                    s(c) && s((r = c.ns))
                                        ? v.createElementNS(r, g, c)
                                        : v.createElement(g, c));
                            for (
                                f < m &&
                                    b.setAttribute("id", p.slice(f + 1, m)),
                                    l > 0 &&
                                        b.setAttribute(
                                            "class",
                                            p.slice(m + 1).replace(/\./g, " "),
                                        ),
                                    r = 0;
                                r < h.create.length;
                                ++r
                            )
                                h.create[r](d, t);
                            if (i(u))
                                for (r = 0; r < u.length; ++r) {
                                    const t = u[r];
                                    null != t && v.appendChild(b, y(t, e));
                                }
                            else
                                a(t.text) &&
                                    v.appendChild(b, v.createTextNode(t.text));
                            const x = t.data.hook;
                            s(x) &&
                                (null === (o = x.create) ||
                                    void 0 === o ||
                                    o.call(x, d, t),
                                x.insert && e.push(t));
                        } else t.elm = v.createTextNode(t.text);
                        return t.elm;
                    }
                    function b(t, e, n, o, r, i) {
                        for (; o <= r; ++o) {
                            const r = n[o];
                            null != r && v.insertBefore(t, y(r, i), e);
                        }
                    }
                    function x(t) {
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
                            for (let e = 0; e < h.destroy.length; ++e)
                                h.destroy[e](t);
                            if (void 0 !== t.children)
                                for (let e = 0; e < t.children.length; ++e) {
                                    const n = t.children[e];
                                    null != n && "string" != typeof n && x(n);
                                }
                        }
                    }
                    function C(t, e, n, o) {
                        for (var r, i; n <= o; ++n) {
                            let o, a;
                            const l = e[n];
                            if (null != l)
                                if (s(l.sel)) {
                                    x(l),
                                        (o = h.remove.length + 1),
                                        (a = g(l.elm, o));
                                    for (let t = 0; t < h.remove.length; ++t)
                                        h.remove[t](l, a);
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
                        var o, r, i, a, d;
                        const p =
                            null === (o = e.data) || void 0 === o
                                ? void 0
                                : o.hook;
                        null === (r = null == p ? void 0 : p.prepatch) ||
                            void 0 === r ||
                            r.call(p, t, e);
                        const f = (e.elm = t.elm),
                            m = t.children,
                            g = e.children;
                        if (t !== e) {
                            if (void 0 !== e.data) {
                                for (let n = 0; n < h.update.length; ++n)
                                    h.update[n](t, e);
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
                                              d = 0,
                                              p = 0,
                                              f = e.length - 1,
                                              h = e[0],
                                              m = e[f],
                                              g = n.length - 1,
                                              x = n[0],
                                              k = n[g];
                                          for (; d <= f && p <= g; )
                                              null == h
                                                  ? (h = e[++d])
                                                  : null == m
                                                  ? (m = e[--f])
                                                  : null == x
                                                  ? (x = n[++p])
                                                  : null == k
                                                  ? (k = n[--g])
                                                  : c(h, x)
                                                  ? (w(h, x, o),
                                                    (h = e[++d]),
                                                    (x = n[++p]))
                                                  : c(m, k)
                                                  ? (w(m, k, o),
                                                    (m = e[--f]),
                                                    (k = n[--g]))
                                                  : c(h, k)
                                                  ? (w(h, k, o),
                                                    v.insertBefore(
                                                        t,
                                                        h.elm,
                                                        v.nextSibling(m.elm),
                                                    ),
                                                    (h = e[++d]),
                                                    (k = n[--g]))
                                                  : c(m, x)
                                                  ? (w(m, x, o),
                                                    v.insertBefore(
                                                        t,
                                                        m.elm,
                                                        h.elm,
                                                    ),
                                                    (m = e[--f]),
                                                    (x = n[++p]))
                                                  : (void 0 === r &&
                                                        (r = u(e, d, f)),
                                                    (i = r[x.key]),
                                                    l(i)
                                                        ? v.insertBefore(
                                                              t,
                                                              y(x, o),
                                                              h.elm,
                                                          )
                                                        : ((a = e[i]),
                                                          a.sel !== x.sel
                                                              ? v.insertBefore(
                                                                    t,
                                                                    y(x, o),
                                                                    h.elm,
                                                                )
                                                              : (w(a, x, o),
                                                                (e[i] = void 0),
                                                                v.insertBefore(
                                                                    t,
                                                                    a.elm,
                                                                    h.elm,
                                                                ))),
                                                    (x = n[++p]));
                                          (d <= f || p <= g) &&
                                              (d > f
                                                  ? ((s =
                                                        null == n[g + 1]
                                                            ? null
                                                            : n[g + 1].elm),
                                                    b(t, s, n, p, g, o))
                                                  : C(t, e, d, f));
                                      })(f, m, g, n)
                                    : s(g)
                                    ? (s(t.text) && v.setTextContent(f, ""),
                                      b(f, null, g, 0, g.length - 1, n))
                                    : s(m)
                                    ? C(f, m, 0, m.length - 1)
                                    : s(t.text) && v.setTextContent(f, "")
                                : t.text !== e.text &&
                                  (s(m) && C(f, m, 0, m.length - 1),
                                  v.setTextContent(f, e.text)),
                                null ===
                                    (d = null == p ? void 0 : p.postpatch) ||
                                    void 0 === d ||
                                    d.call(p, t, e);
                        }
                    }
                    return function (t, e) {
                        let n, o, r;
                        const i = [];
                        for (n = 0; n < h.pre.length; ++n) h.pre[n]();
                        for (
                            (function (t) {
                                return void 0 !== t.sel;
                            })(t) || (t = m(t)),
                                c(t, e)
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
                                          C(r, [t], 0, 0))),
                                n = 0;
                            n < i.length;
                            ++n
                        )
                            i[n].data.hook.insert(i[n]);
                        for (n = 0; n < h.post.length; ++n) h.post[n]();
                        return e;
                    };
                }
                function h(t, e, n) {
                    if (
                        ((t.ns = "http://www.w3.org/2000/svg"),
                        "foreignObject" !== n && void 0 !== e)
                    )
                        for (let t = 0; t < e.length; ++t) {
                            const n = e[t].data;
                            void 0 !== n && h(n, e[t].children, e[t].sel);
                        }
                }
                function v(t, e, n) {
                    let o,
                        l,
                        s,
                        d = {};
                    if (
                        (void 0 !== n
                            ? (null !== e && (d = e),
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
                                  : (d = e)),
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
                            h(d, o, t),
                        r(t, d, o, l, void 0)
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
                function x(t, e) {
                    const n = t.data.attachData;
                    (e.data.attachData.placeholder = n.placeholder),
                        (e.data.attachData.real = n.real),
                        (t.elm = t.data.attachData.real);
                }
                function C(t, e) {
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
                function T(t, e) {
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
                        (o.prepatch = x),
                        (o.postpatch = C),
                        (o.destroy = w),
                        e
                    );
                }
                function S(t, e) {
                    const n = void 0 !== e ? e : o;
                    let i;
                    if (n.isElement(t)) {
                        const o = t.id ? "#" + t.id : "",
                            i = t.getAttribute("class"),
                            a = i ? "." + i.split(" ").join(".") : "",
                            l = n.tagName(t).toLowerCase() + o + a,
                            s = {},
                            d = [];
                        let c, u, p;
                        const f = t.attributes,
                            h = t.childNodes;
                        for (u = 0, p = f.length; u < p; u++)
                            (c = f[u].nodeName),
                                "id" !== c &&
                                    "class" !== c &&
                                    (s[c] = f[u].nodeValue);
                        for (u = 0, p = h.length; u < p; u++)
                            d.push(S(h[u], e));
                        return r(l, { attrs: s }, d, void 0, t);
                    }
                    return n.isText(t)
                        ? ((i = n.getTextContent(t)),
                          r(void 0, void 0, void 0, i, t))
                        : n.isComment(t)
                        ? ((i = n.getTextContent(t)), r("!", {}, [], i, t))
                        : r("", {}, [], void 0, t);
                }
                function _(t, e) {
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
                const N = { create: _, update: _ };
                function A(t, e) {
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
                const j = { create: A, update: A },
                    M = /[A-Z]/g;
                function O(t, e) {
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
                                          o.replace(M, "-$&").toLowerCase(),
                                  ));
                    for (o in i)
                        r[o] !== i[o] &&
                            (a
                                ? (a[o] = i[o])
                                : n.setAttribute(
                                      "data-" +
                                          o.replace(M, "-$&").toLowerCase(),
                                      i[o],
                                  ));
                }
                const E = { create: O, update: O };
                function L(t, e, n) {
                    if ("function" == typeof t) t.call(e, n, e);
                    else if ("object" == typeof t)
                        for (let o = 0; o < t.length; o++) L(t[o], e, n);
                }
                function P(t, e) {
                    const n = t.type,
                        o = e.data.on;
                    o && o[n] && L(o[n], e, t);
                }
                function I(t, e) {
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
                                    P(e, t.vnode);
                                });
                            if (((o.vnode = e), n))
                                for (l in i)
                                    n[l] || a.addEventListener(l, o, !1);
                            else for (l in i) a.addEventListener(l, o, !1);
                        }
                    }
                }
                const B = { create: I, update: I, destroy: I };
                function D(t, e) {
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
                const R = { create: D, update: D },
                    V =
                        ("undefined" != typeof window &&
                            window.requestAnimationFrame.bind(window)) ||
                        setTimeout;
                let z = !1;
                function q(t, e, n) {
                    var o;
                    (o = function () {
                        t[e] = n;
                    }),
                        V(function () {
                            V(o);
                        });
                }
                function F(t, e) {
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
                                        q(r.style, t, n);
                        else
                            "remove" !== o &&
                                n !== i[o] &&
                                ("-" === o[0] && "-" === o[1]
                                    ? r.style.setProperty(o, n)
                                    : (r.style[o] = n));
                }
                const $ = {
                    pre: function () {
                        z = !1;
                    },
                    create: F,
                    update: F,
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
                        z || (t.elm.offsetLeft, (z = !0));
                        const r = t.elm;
                        let i = 0;
                        const a = n.remove;
                        let l = 0;
                        const s = [];
                        for (o in a) s.push(o), (r.style[o] = a[o]);
                        const d =
                            getComputedStyle(r)["transition-property"].split(
                                ", ",
                            );
                        for (; i < d.length; ++i) -1 !== s.indexOf(d[i]) && l++;
                        r.addEventListener("transitionend", function (t) {
                            t.target === r && --l, 0 === l && e();
                        });
                    },
                };
                function H(t, e) {
                    for (const n of t)
                        null != n &&
                            !1 !== n &&
                            "" !== n &&
                            (Array.isArray(n)
                                ? H(n, e)
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
                function U(t, e, ...n) {
                    const o = H(n, []);
                    return "function" == typeof t
                        ? t(e, o)
                        : 1 === o.length && !o[0].sel && o[0].text
                        ? v(t, e, o[0].text)
                        : v(t, e, o);
                }
                U || (U = {});
            },
            999: function (t, e, n) {
                var o =
                    (this && this.__assign) ||
                    function () {
                        return (o =
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
                var r = n(5),
                    i = (function () {
                        function t(t) {
                            (this.id = r.generateId()),
                                (this.html = ""),
                                (this.css = ""),
                                (this.state = {}),
                                (this.children = {}),
                                (this.shouldMount = !0),
                                (this.props = o({}, t)),
                                (this.name = this.constructor.name);
                        }
                        return (
                            (t.prototype.mount = function () {}),
                            (t.prototype.mountIfNeeded = function () {
                                if (!this.shouldMount)
                                    return (
                                        console.log(
                                            this.id,
                                            this.name,
                                            "doesnt need to render!",
                                        ),
                                        this.html
                                    );
                                this.mount(), (this.shouldMount = !1);
                            }),
                            (t.prototype.style = function (t) {
                                var e = this;
                                this.css = t
                                    .map(function (t) {
                                        return t.replace(
                                            " {",
                                            '[data-reachid="' + e.id + '"] {',
                                        );
                                    })
                                    .join(" ");
                            }),
                            (t.prototype.compile = function (t) {
                                var e = this,
                                    n = t.replace(
                                        />/g,
                                        ' data-reachid="' + this.id + '">',
                                    );
                                return (
                                    Object.keys(this.children).forEach(
                                        function (t) {
                                            var o = e.children[t].id,
                                                r = e.children[t].html;
                                            n = n.replace(o, r);
                                        },
                                    ),
                                    (this.html =
                                        "\n            <style>" +
                                        (this.css ? this.css : "{}") +
                                        "</style>\n            " +
                                        n +
                                        "\n        "),
                                    this.html
                                );
                            }),
                            (t.prototype.register = function (t) {
                                var e = r.generateId(),
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
                                    ? (this.children[n].mountIfNeeded(),
                                      this.children[n].id)
                                    : ((t.page = this.page),
                                      (t.parent = this),
                                      (this.children[n] = t),
                                      t.mountIfNeeded(),
                                      t.id);
                            }),
                            (t.prototype.parentShouldMount = function () {
                                this.parent &&
                                    ((this.parent.shouldMount = !0),
                                    this.parent.parentShouldMount());
                            }),
                            (t.prototype.getState = function (t) {
                                return this.state[t];
                            }),
                            (t.prototype.setState = function (t, e) {
                                (this.state[t] = e),
                                    (this.shouldMount = !0),
                                    this.parentShouldMount(),
                                    this.page.update();
                            }),
                            t
                        );
                    })();
                e.Component = i;
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
                                (this.rootComponent = t),
                                    (this.rootComponent.page = this),
                                    this.rootComponent.mountIfNeeded();
                                var e = this.textToNode(
                                    this.rootComponent.html,
                                );
                                return (
                                    this.injectCallbacks(e),
                                    (this.currentTree = o.toVNode(e)),
                                    document.body.appendChild(e),
                                    this
                                );
                            }),
                            (t.prototype.update = function () {
                                this.rootComponent.mountIfNeeded(),
                                    this.render();
                            }),
                            (t.prototype.render = function () {
                                var t = this.textToNode(
                                    this.rootComponent.html,
                                );
                                this.injectCallbacks(t);
                                var e = o.toVNode(t);
                                console.log(e),
                                    r(this.currentTree, e),
                                    (this.currentTree = e);
                            }),
                            (t.prototype.textToNode = function (t) {
                                var e = "<div>" + t + "</div>";
                                return new DOMParser().parseFromString(
                                    e,
                                    "text/html",
                                ).body.firstChild;
                            }),
                            (t.prototype.injectCallbacks = function (t) {
                                Object.values(this.callbacks).forEach(function (
                                    e,
                                ) {
                                    e.forEach(function (e) {
                                        var n = t.querySelector(
                                            "[data-" + e.callbackId + "]",
                                        );
                                        if (n) {
                                            delete n.dataset[e.callbackId];
                                            for (
                                                var o = 0;
                                                o < n.attributes.length;
                                                o++
                                            ) {
                                                var r =
                                                    n.attributes[o].nodeName;
                                                n.attributes[o].nodeValue ==
                                                    e.callbackId &&
                                                    (n.removeAttribute(r),
                                                    (n[r] = e.callback));
                                            }
                                        } else console.log("WARN: Unmounted component exists: " + e.name + " - " + e.id);
                                    });
                                }),
                                    (this.callbacks = {});
                            }),
                            (t.prototype.importCSS = function (t) {
                                var e = document.createElement("link");
                                e.setAttribute("rel", "stylesheet"),
                                    e.setAttribute("href", t),
                                    document.head.appendChild(e);
                            }),
                            t
                        );
                    })();
                e.Page = i;
            },
            5: (t, e) => {
                (e.__esModule = !0),
                    (e.generateId = void 0),
                    (e.generateId = function () {
                        return Math.floor(1e7 * Math.random()).toString(36);
                    });
            },
            375: function (t, e, n) {
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
                        });
                (e.__esModule = !0), (e.Card = void 0);
                var i = (function (t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return (n.state = { open: !1 }), n;
                    }
                    return (
                        r(e, t),
                        (e.prototype.mount = function () {
                            var t = this;
                            this.style([
                                ".wrapper { text-align: center; border-radius: 10px; height: 100%; border: 3px solid " +
                                    this.props.backgroundColourBase +
                                    "; }",
                                ".title { font-size: 3vw; padding: 10px; margin-top: 30px; }",
                                ".body { margin: 15px 5px 15px 5px; }",
                                ".text { font-size: 1.5vw;  }",
                                ".hidden { color: red; }",
                            ]),
                                this.compile(
                                    "\n            <div onclick=" +
                                        this.register(function () {
                                            var e = !t.getState("open");
                                            t.setState("open", e);
                                        }) +
                                        ' class="wrapper">\n                <div class="title">' +
                                        this.props.headerText +
                                        '</div>\n                <div class="body">\n                    <div class="text' +
                                        (this.getState("open")
                                            ? ""
                                            : " hidden") +
                                        '">' +
                                        this.props.bodyText +
                                        "</div>\n                </div>\n            </div>\n        ",
                                );
                        }),
                        e
                    );
                })(n(999).Component);
                e.Card = i;
            },
            255: function (t, e, n) {
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
                        });
                (e.__esModule = !0), (e.Layout = void 0);
                var i = n(999),
                    a = n(375),
                    l = (function (t) {
                        function e() {
                            return t.call(this) || this;
                        }
                        return (
                            r(e, t),
                            (e.prototype.mount = function () {
                                var t = new a.Card({
                                        headerText: "Tiny!",
                                        bodyText:
                                            "Reach.js is less than 1000 lines of code unminified.",
                                        backgroundColourBase: "black",
                                    }),
                                    e = new a.Card({
                                        headerText: "Accepting",
                                        bodyText:
                                            "Reach.js doesn't place restrictions on how you develop.",
                                        backgroundColourBase: "black",
                                    }),
                                    n = new a.Card({
                                        headerText: "Simple",
                                        bodyText:
                                            "Components are written in HTML / CSS, with an intuitive API.",
                                        backgroundColourBase: "black",
                                    });
                                this.style([
                                    ".wrapper { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr); height: 100vh; gap: 50px; padding-left: 20vw; padding-right: 20vw; }",
                                    ".title { grid-column: 1 / 4; grid-row: 1; text-align: center; font-size: 6rem; padding-top: 100px; }",
                                    ".one { grid-column: 1; grid-row: 2 / 3; }",
                                    ".two { grid-column: 2; grid-row: 2 / 3; }",
                                    ".three { grid-column: 3; grid-row: 2 / 3; }",
                                ]),
                                    this.compile(
                                        '\n            <div class="wrapper">\n                <div class="title">\n                    Reach.js\n                </div>\n                <div class="one subgrid">\n                    ' +
                                            this.child(t) +
                                            '\n                </div>\n                <div class="two subgrid">\n                    ' +
                                            this.child(e) +
                                            '\n                </div>\n                <div class="three subgrid">\n                    ' +
                                            this.child(n) +
                                            "\n                </div>\n            </div>\n        ",
                                    );
                            }),
                            e
                        );
                    })(i.Component);
                e.Layout = l;
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
        (t = o(255)),
        new (o(220).Page)("counter").addRootImage(new t.Layout());
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL2h0bWxkb21hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL3Zub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9pcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvdGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL2hlbHBlcnMvYXR0YWNodG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL3Rvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL21vZHVsZXMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvbW9kdWxlcy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvbW9kdWxlcy9kYXRhc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL2V2ZW50bGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL3Byb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9qc3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJzaXRlL2NhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnNpdGUvbGF5b3V0LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Il0sIm5hbWVzIjpbImxheW91dF8xIiwiaHRtbERvbUFwaSIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwib3B0aW9ucyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwibmFtZXNwYWNlVVJJIiwicXVhbGlmaWVkTmFtZSIsImNyZWF0ZVRleHROb2RlIiwidGV4dCIsImNyZWF0ZUNvbW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJwYXJlbnROb2RlIiwibmV3Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZW1vdmVDaGlsZCIsIm5vZGUiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwibmV4dFNpYmxpbmciLCJlbG0iLCJzZXRUZXh0Q29udGVudCIsInRleHRDb250ZW50IiwiZ2V0VGV4dENvbnRlbnQiLCJpc0VsZW1lbnQiLCJub2RlVHlwZSIsImlzVGV4dCIsImlzQ29tbWVudCIsInZub2RlIiwic2VsIiwiZGF0YSIsImNoaWxkcmVuIiwia2V5IiwidW5kZWZpbmVkIiwiYXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJwcmltaXRpdmUiLCJzIiwiaXNVbmRlZiIsImlzRGVmIiwiZW1wdHlOb2RlIiwic2FtZVZub2RlIiwidm5vZGUxIiwidm5vZGUyIiwiX2EiLCJfYiIsImlzU2FtZUtleSIsImlzU2FtZUlzIiwiaXMiLCJjcmVhdGVLZXlUb09sZElkeCIsImJlZ2luSWR4IiwiZW5kSWR4IiwibWFwIiwiaSIsImhvb2tzIiwiaW5pdCIsIm1vZHVsZXMiLCJkb21BcGkiLCJqIiwiY2JzIiwiY3JlYXRlIiwidXBkYXRlIiwicmVtb3ZlIiwiZGVzdHJveSIsInByZSIsInBvc3QiLCJhcGkiLCJsZW5ndGgiLCJob29rIiwicHVzaCIsImVtcHR5Tm9kZUF0IiwiaWQiLCJjbGFzc2VzIiwiZ2V0QXR0cmlidXRlIiwiYyIsInNwbGl0Iiwiam9pbiIsInRvTG93ZXJDYXNlIiwiY3JlYXRlUm1DYiIsImNoaWxkRWxtIiwibGlzdGVuZXJzIiwicGFyZW50IiwiY3JlYXRlRWxtIiwiaW5zZXJ0ZWRWbm9kZVF1ZXVlIiwiaGFzaElkeCIsImluZGV4T2YiLCJkb3RJZHgiLCJoYXNoIiwiZG90IiwidGFnIiwic2xpY2UiLCJNYXRoIiwibWluIiwibnMiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiY2giLCJjYWxsIiwiaW5zZXJ0IiwiYWRkVm5vZGVzIiwicGFyZW50RWxtIiwiYmVmb3JlIiwidm5vZGVzIiwic3RhcnRJZHgiLCJpbnZva2VEZXN0cm95SG9vayIsInJlbW92ZVZub2RlcyIsInJtIiwicmVtb3ZlSG9vayIsInBhdGNoVm5vZGUiLCJvbGRWbm9kZSIsIl9jIiwiX2QiLCJfZSIsInByZXBhdGNoIiwib2xkQ2giLCJuZXdDaCIsIm9sZEtleVRvSWR4IiwiaWR4SW5PbGQiLCJlbG1Ub01vdmUiLCJvbGRTdGFydElkeCIsIm5ld1N0YXJ0SWR4Iiwib2xkRW5kSWR4Iiwib2xkU3RhcnRWbm9kZSIsIm9sZEVuZFZub2RlIiwibmV3RW5kSWR4IiwibmV3U3RhcnRWbm9kZSIsIm5ld0VuZFZub2RlIiwidXBkYXRlQ2hpbGRyZW4iLCJwb3N0cGF0Y2giLCJpc1Zub2RlIiwiYWRkTlMiLCJjaGlsZERhdGEiLCJoIiwiYiIsImNvcHlUb1RodW5rIiwidGh1bmsiLCJmbiIsImFyZ3MiLCJjdXIiLCJvbGQiLCJvbGRBcmdzIiwibmV3Vm5vZGUiLCJhdHRhY2hEYXRhIiwicGxhY2Vob2xkZXIiLCJyZWFsIiwiXyIsInRhcmdldCIsImF0dGFjaFRvIiwidG9WTm9kZSIsImNuIiwiYXR0cnMiLCJuYW1lIiwibiIsImVsbUF0dHJzIiwiYXR0cmlidXRlcyIsImVsbUNoaWxkcmVuIiwiY2hpbGROb2RlcyIsIm5vZGVOYW1lIiwibm9kZVZhbHVlIiwidXBkYXRlQXR0cnMiLCJvbGRBdHRycyIsInJlbW92ZUF0dHJpYnV0ZSIsImNoYXJDb2RlQXQiLCJzZXRBdHRyaWJ1dGVOUyIsImF0dHJpYnV0ZXNNb2R1bGUiLCJ1cGRhdGVDbGFzcyIsIm9sZENsYXNzIiwiY2xhc3MiLCJrbGFzcyIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2xhc3NMaXN0IiwiY2xhc3NNb2R1bGUiLCJDQVBTX1JFR0VYIiwidXBkYXRlRGF0YXNldCIsIm9sZERhdGFzZXQiLCJkYXRhc2V0IiwiZCIsImRhdGFzZXRNb2R1bGUiLCJpbnZva2VIYW5kbGVyIiwiaGFuZGxlciIsImV2ZW50IiwiaGFuZGxlRXZlbnQiLCJ0eXBlIiwib24iLCJ1cGRhdGVFdmVudExpc3RlbmVycyIsIm9sZE9uIiwib2xkTGlzdGVuZXIiLCJsaXN0ZW5lciIsIm9sZEVsbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRMaXN0ZW5lcnNNb2R1bGUiLCJ1cGRhdGVQcm9wcyIsIm9sZFByb3BzIiwicHJvcHMiLCJwcm9wc01vZHVsZSIsInJhZiIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJzZXRUaW1lb3V0IiwicmVmbG93Rm9yY2VkIiwic2V0TmV4dEZyYW1lIiwib2JqIiwicHJvcCIsInZhbCIsInVwZGF0ZVN0eWxlIiwib2xkU3R5bGUiLCJzdHlsZSIsIm9sZEhhc0RlbCIsInJlbW92ZVByb3BlcnR5IiwiZGVsYXllZCIsIm5hbWUyIiwic2V0UHJvcGVydHkiLCJzdHlsZU1vZHVsZSIsIm9mZnNldExlZnQiLCJhbW91bnQiLCJhcHBsaWVkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImV2IiwiZmxhdHRlbkFuZEZpbHRlciIsImZsYXR0ZW5lZCIsIlN0cmluZyIsImpzeCIsImZsYXRDaGlsZHJlbiIsIl9fYXNzaWduIiwidGhpcyIsImFzc2lnbiIsInQiLCJhcmd1bWVudHMiLCJwIiwiYXBwbHkiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbXBvbmVudCIsInV0aWxpdGllc18xIiwiZ2VuZXJhdGVJZCIsImh0bWwiLCJjc3MiLCJzdGF0ZSIsInNob3VsZE1vdW50IiwiY29uc3RydWN0b3IiLCJtb3VudCIsIm1vdW50SWZOZWVkZWQiLCJjb25zb2xlIiwibG9nIiwiX3RoaXMiLCJhdHRyaWJ1dGUiLCJjb21waWxlIiwiY29tcG9uZW50SHRtbCIsImtleXMiLCJmb3JFYWNoIiwiY2hpbGRLZXkiLCJjaGlsZElkIiwiY2hpbGRIdG1sIiwicmVnaXN0ZXIiLCJjYWxsYmFjayIsImNhbGxiYWNrSWQiLCJjYWxsYmFja1Byb3BzIiwicGFnZSIsImNhbGxiYWNrcyIsImNoaWxkQ29tcG9uZW50IiwiZXJyb3JMaW5lcyIsIkVycm9yIiwic3RhY2siLCJwYXJlbnRTaG91bGRNb3VudCIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJ2YWx1ZSIsIlBhZ2UiLCJzbmFiYmRvbV8xIiwicGF0Y2giLCJhZGRSb290SW1hZ2UiLCJyb290Q29tcG9uZW50IiwidGV4dFRvTm9kZSIsImluamVjdENhbGxiYWNrcyIsImN1cnJlbnRUcmVlIiwiYm9keSIsInJlbmRlciIsInRyZWUiLCJkb20iLCJ3cmFwcGVkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiZmlyc3RDaGlsZCIsInZhbHVlcyIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXR0cmlidXRlTmFtZSIsImltcG9ydENTUyIsImNkbiIsImxpbmsiLCJoZWFkIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImV4dGVuZFN0YXRpY3MiLCJfX2V4dGVuZHMiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIlR5cGVFcnJvciIsIl9fIiwiQ2FyZCIsIl9zdXBlciIsIm9wZW4iLCJiYWNrZ3JvdW5kQ29sb3VyQmFzZSIsIm5ld1N0YXRlIiwiaGVhZGVyVGV4dCIsImJvZHlUZXh0IiwiTGF5b3V0IiwiY29tcG9uZW50XzEiLCJjYXJkXzEiLCJ0aW55Q2FyZCIsInVub3BpbmlvbmF0ZWRDYXJkIiwic2ltcGxlQ2FyZCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkZWZpbml0aW9uIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyJdLCJtYXBwaW5ncyI6InVCQWNJQSxFLDRSQytCRyxNQUFNQyxFQUFhLENBQ3RCQyxjQTlDSixTQUF1QkMsRUFBU0MsR0FDNUIsT0FBT0MsU0FBU0gsY0FBY0MsRUFBU0MsSUE4Q3ZDRSxnQkE1Q0osU0FBeUJDLEVBQWNDLEVBQWVKLEdBQ2xELE9BQU9DLFNBQVNDLGdCQUFnQkMsRUFBY0MsRUFBZUosSUE0QzdESyxlQTFDSixTQUF3QkMsR0FDcEIsT0FBT0wsU0FBU0ksZUFBZUMsSUEwQy9CQyxjQXhDSixTQUF1QkQsR0FDbkIsT0FBT0wsU0FBU00sY0FBY0QsSUF3QzlCRSxhQXRDSixTQUFzQkMsRUFBWUMsRUFBU0MsR0FDdkNGLEVBQVdELGFBQWFFLEVBQVNDLElBc0NqQ0MsWUFwQ0osU0FBcUJDLEVBQU1DLEdBQ3ZCRCxFQUFLRCxZQUFZRSxJQW9DakJDLFlBbENKLFNBQXFCRixFQUFNQyxHQUN2QkQsRUFBS0UsWUFBWUQsSUFrQ2pCTCxXQWhDSixTQUFvQkksR0FDaEIsT0FBT0EsRUFBS0osWUFnQ1pPLFlBOUJKLFNBQXFCSCxHQUNqQixPQUFPQSxFQUFLRyxh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QUU3RHJHLE9BQU80SixlQUFlM0YsRUFBUyxhQUFjLENBQUVvQyxPQUFPLEt4QlNuRGhSLEVBQVcsRUFBUSxLQUVaLElBREUsRUFBUSxLQUNDaVIsTUFBSyxXQUFXRyxhQUFhLElBQUlwUixFQUFTeVQsUyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIGltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL21vY2tpbmcvY29udGFpbmVyXCI7XG4vLyBpbXBvcnQgeyBQYWdlIH0gZnJvbSBcIi4vcGFnZVwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIGNvbnN0IGNvdW50ZXJQYWdlID0gbmV3IFBhZ2UoXCJjb3VudGVyXCIpLmFkZFJvb3RJbWFnZShuZXcgQ29udGFpbmVyKCkpO1xuLy8gY291bnRlclBhZ2UuaW1wb3J0Q1NTKFxuLy8gICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIixcbi8vICk7XG4vLyBjb3VudGVyUGFnZS5pbXBvcnRDU1MoXG4vLyAgICAgXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4zL2Nzcy9hbGwubWluLmNzc1wiLFxuLy8gKTtcbi8vIGltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL21vY2tpbmcvbW9ja1wiO1xuLy8gaW1wb3J0IHsgUGFnZSB9IGZyb20gXCIuL3BhZ2VcIjtcbi8vIGNvbnN0IGNvdW50ZXJQYWdlID0gbmV3IFBhZ2UoXCJjb3VudGVyXCIpLmFkZFJvb3RJbWFnZShuZXcgQ29udGFpbmVyKCkpO1xudmFyIGxheW91dF8xID0gcmVxdWlyZShcIi4vd2Vic2l0ZS9sYXlvdXRcIik7XG52YXIgcGFnZV8xID0gcmVxdWlyZShcIi4vcGFnZVwiKTtcbnZhciBwYWdlID0gbmV3IHBhZ2VfMS5QYWdlKFwiY291bnRlclwiKS5hZGRSb290SW1hZ2UobmV3IGxheW91dF8xLkxheW91dCgpKTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKHRleHQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVDb21tZW50KHRleHQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0ZXh0KTtcbn1cbmZ1bmN0aW9uIGluc2VydEJlZm9yZShwYXJlbnROb2RlLCBuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSk7XG59XG5mdW5jdGlvbiByZW1vdmVDaGlsZChub2RlLCBjaGlsZCkge1xuICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xufVxuZnVuY3Rpb24gYXBwZW5kQ2hpbGQobm9kZSwgY2hpbGQpIHtcbiAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbn1cbmZ1bmN0aW9uIHBhcmVudE5vZGUobm9kZSkge1xuICAgIHJldHVybiBub2RlLnBhcmVudE5vZGU7XG59XG5mdW5jdGlvbiBuZXh0U2libGluZyhub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmc7XG59XG5mdW5jdGlvbiB0YWdOYW1lKGVsbSkge1xuICAgIHJldHVybiBlbG0udGFnTmFtZTtcbn1cbmZ1bmN0aW9uIHNldFRleHRDb250ZW50KG5vZGUsIHRleHQpIHtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dDtcbn1cbmZ1bmN0aW9uIGdldFRleHRDb250ZW50KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50ZXh0Q29udGVudDtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDE7XG59XG5mdW5jdGlvbiBpc1RleHQobm9kZSkge1xuICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAzO1xufVxuZnVuY3Rpb24gaXNDb21tZW50KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gODtcbn1cbmV4cG9ydCBjb25zdCBodG1sRG9tQXBpID0ge1xuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRWxlbWVudE5TLFxuICAgIGNyZWF0ZVRleHROb2RlLFxuICAgIGNyZWF0ZUNvbW1lbnQsXG4gICAgaW5zZXJ0QmVmb3JlLFxuICAgIHJlbW92ZUNoaWxkLFxuICAgIGFwcGVuZENoaWxkLFxuICAgIHBhcmVudE5vZGUsXG4gICAgbmV4dFNpYmxpbmcsXG4gICAgdGFnTmFtZSxcbiAgICBzZXRUZXh0Q29udGVudCxcbiAgICBnZXRUZXh0Q29udGVudCxcbiAgICBpc0VsZW1lbnQsXG4gICAgaXNUZXh0LFxuICAgIGlzQ29tbWVudCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sZG9tYXBpLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiB2bm9kZShzZWwsIGRhdGEsIGNoaWxkcmVuLCB0ZXh0LCBlbG0pIHtcbiAgICBjb25zdCBrZXkgPSBkYXRhID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBkYXRhLmtleTtcbiAgICAvLyBjb25zb2xlLmxvZyhzZWwsIGVsbSA/IGVsbS5kYXRhc2V0IDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4geyBzZWwsIGRhdGEsIGNoaWxkcmVuLCB0ZXh0LCBlbG0sIGtleSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dm5vZGUuanMubWFwIiwiZXhwb3J0IGNvbnN0IGFycmF5ID0gQXJyYXkuaXNBcnJheTtcbmV4cG9ydCBmdW5jdGlvbiBwcmltaXRpdmUocykge1xuICAgIHJldHVybiB0eXBlb2YgcyA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcyA9PT0gXCJudW1iZXJcIjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLmpzLm1hcCIsImltcG9ydCB7IHZub2RlIH0gZnJvbSBcIi4vdm5vZGVcIjtcbmltcG9ydCAqIGFzIGlzIGZyb20gXCIuL2lzXCI7XG5pbXBvcnQgeyBodG1sRG9tQXBpIH0gZnJvbSBcIi4vaHRtbGRvbWFwaVwiO1xuZnVuY3Rpb24gaXNVbmRlZihzKSB7XG4gICAgcmV0dXJuIHMgPT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzRGVmKHMpIHtcbiAgICByZXR1cm4gcyAhPT0gdW5kZWZpbmVkO1xufVxuY29uc3QgZW1wdHlOb2RlID0gdm5vZGUoXCJcIiwge30sIFtdLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG5mdW5jdGlvbiBzYW1lVm5vZGUodm5vZGUxLCB2bm9kZTIpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IGlzU2FtZUtleSA9IHZub2RlMS5rZXkgPT09IHZub2RlMi5rZXk7XG4gICAgY29uc3QgaXNTYW1lSXMgPSAoKF9hID0gdm5vZGUxLmRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pcykgPT09ICgoX2IgPSB2bm9kZTIuZGF0YSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlzKTtcbiAgICBjb25zdCBpc1NhbWVTZWwgPSB2bm9kZTEuc2VsID09PSB2bm9kZTIuc2VsO1xuICAgIHJldHVybiBpc1NhbWVTZWwgJiYgaXNTYW1lS2V5ICYmIGlzU2FtZUlzO1xufVxuZnVuY3Rpb24gaXNWbm9kZSh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5zZWwgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUtleVRvT2xkSWR4KGNoaWxkcmVuLCBiZWdpbklkeCwgZW5kSWR4KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IG1hcCA9IHt9O1xuICAgIGZvciAobGV0IGkgPSBiZWdpbklkeDsgaSA8PSBlbmRJZHg7ICsraSkge1xuICAgICAgICBjb25zdCBrZXkgPSAoX2EgPSBjaGlsZHJlbltpXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmtleTtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtYXBba2V5XSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hcDtcbn1cbmNvbnN0IGhvb2tzID0gW1xuICAgIFwiY3JlYXRlXCIsXG4gICAgXCJ1cGRhdGVcIixcbiAgICBcInJlbW92ZVwiLFxuICAgIFwiZGVzdHJveVwiLFxuICAgIFwicHJlXCIsXG4gICAgXCJwb3N0XCIsXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQobW9kdWxlcywgZG9tQXBpKSB7XG4gICAgbGV0IGk7XG4gICAgbGV0IGo7XG4gICAgY29uc3QgY2JzID0ge1xuICAgICAgICBjcmVhdGU6IFtdLFxuICAgICAgICB1cGRhdGU6IFtdLFxuICAgICAgICByZW1vdmU6IFtdLFxuICAgICAgICBkZXN0cm95OiBbXSxcbiAgICAgICAgcHJlOiBbXSxcbiAgICAgICAgcG9zdDogW10sXG4gICAgfTtcbiAgICBjb25zdCBhcGkgPSBkb21BcGkgIT09IHVuZGVmaW5lZCA/IGRvbUFwaSA6IGh0bWxEb21BcGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNic1tob29rc1tpXV0gPSBbXTtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG1vZHVsZXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGNvbnN0IGhvb2sgPSBtb2R1bGVzW2pdW2hvb2tzW2ldXTtcbiAgICAgICAgICAgIGlmIChob29rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjYnNbaG9va3NbaV1dLnB1c2goaG9vayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZW1wdHlOb2RlQXQoZWxtKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZWxtLmlkID8gXCIjXCIgKyBlbG0uaWQgOiBcIlwiO1xuICAgICAgICAvLyBlbG0uY2xhc3NOYW1lIGRvZXNuJ3QgcmV0dXJuIGEgc3RyaW5nIHdoZW4gZWxtIGlzIGFuIFNWRyBlbGVtZW50IGluc2lkZSBhIHNoYWRvd1Jvb3QuXG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5NDU0MzQwL2RldGVjdGluZy1jbGFzc25hbWUtb2Ytc3ZnYW5pbWF0ZWRzdHJpbmdcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVsbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICAgICAgY29uc3QgYyA9IGNsYXNzZXMgPyBcIi5cIiArIGNsYXNzZXMuc3BsaXQoXCIgXCIpLmpvaW4oXCIuXCIpIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIHZub2RlKGFwaS50YWdOYW1lKGVsbSkudG9Mb3dlckNhc2UoKSArIGlkICsgYywge30sIFtdLCB1bmRlZmluZWQsIGVsbSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJtQ2IoY2hpbGRFbG0sIGxpc3RlbmVycykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcm1DYigpIHtcbiAgICAgICAgICAgIGlmICgtLWxpc3RlbmVycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGFwaS5wYXJlbnROb2RlKGNoaWxkRWxtKTtcbiAgICAgICAgICAgICAgICBhcGkucmVtb3ZlQ2hpbGQocGFyZW50LCBjaGlsZEVsbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsbSh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGluaXQgPSAoX2EgPSBkYXRhLmhvb2spID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbml0O1xuICAgICAgICAgICAgaWYgKGlzRGVmKGluaXQpKSB7XG4gICAgICAgICAgICAgICAgaW5pdCh2bm9kZSk7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3Qgc2VsID0gdm5vZGUuc2VsO1xuICAgICAgICBpZiAoc2VsID09PSBcIiFcIikge1xuICAgICAgICAgICAgaWYgKGlzVW5kZWYodm5vZGUudGV4dCkpIHtcbiAgICAgICAgICAgICAgICB2bm9kZS50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZub2RlLmVsbSA9IGFwaS5jcmVhdGVDb21tZW50KHZub2RlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBQYXJzZSBzZWxlY3RvclxuICAgICAgICAgICAgY29uc3QgaGFzaElkeCA9IHNlbC5pbmRleE9mKFwiI1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGRvdElkeCA9IHNlbC5pbmRleE9mKFwiLlwiLCBoYXNoSWR4KTtcbiAgICAgICAgICAgIGNvbnN0IGhhc2ggPSBoYXNoSWR4ID4gMCA/IGhhc2hJZHggOiBzZWwubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgZG90ID0gZG90SWR4ID4gMCA/IGRvdElkeCA6IHNlbC5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCB0YWcgPSBoYXNoSWR4ICE9PSAtMSB8fCBkb3RJZHggIT09IC0xXG4gICAgICAgICAgICAgICAgPyBzZWwuc2xpY2UoMCwgTWF0aC5taW4oaGFzaCwgZG90KSlcbiAgICAgICAgICAgICAgICA6IHNlbDtcbiAgICAgICAgICAgIGNvbnN0IGVsbSA9ICh2bm9kZS5lbG0gPVxuICAgICAgICAgICAgICAgIGlzRGVmKGRhdGEpICYmIGlzRGVmKChpID0gZGF0YS5ucykpXG4gICAgICAgICAgICAgICAgICAgID8gYXBpLmNyZWF0ZUVsZW1lbnROUyhpLCB0YWcsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIDogYXBpLmNyZWF0ZUVsZW1lbnQodGFnLCBkYXRhKSk7XG4gICAgICAgICAgICBpZiAoaGFzaCA8IGRvdClcbiAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKFwiaWRcIiwgc2VsLnNsaWNlKGhhc2ggKyAxLCBkb3QpKTtcbiAgICAgICAgICAgIGlmIChkb3RJZHggPiAwKVxuICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzZWwuc2xpY2UoZG90ICsgMSkucmVwbGFjZSgvXFwuL2csIFwiIFwiKSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBjYnMuY3JlYXRlW2ldKGVtcHR5Tm9kZSwgdm5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzLmFycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLmFwcGVuZENoaWxkKGVsbSwgY3JlYXRlRWxtKGNoLCBpbnNlcnRlZFZub2RlUXVldWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzLnByaW1pdGl2ZSh2bm9kZS50ZXh0KSkge1xuICAgICAgICAgICAgICAgIGFwaS5hcHBlbmRDaGlsZChlbG0sIGFwaS5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBob29rID0gdm5vZGUuZGF0YS5ob29rO1xuICAgICAgICAgICAgaWYgKGlzRGVmKGhvb2spKSB7XG4gICAgICAgICAgICAgICAgKF9iID0gaG9vay5jcmVhdGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGhvb2ssIGVtcHR5Tm9kZSwgdm5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChob29rLmluc2VydCkge1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaCh2bm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdm5vZGUuZWxtID0gYXBpLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2bm9kZS5lbG07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFZub2RlcyhwYXJlbnRFbG0sIGJlZm9yZSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICAgICAgY29uc3QgY2ggPSB2bm9kZXNbc3RhcnRJZHhdO1xuICAgICAgICAgICAgaWYgKGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgY3JlYXRlRWxtKGNoLCBpbnNlcnRlZFZub2RlUXVldWUpLCBiZWZvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGludm9rZURlc3Ryb3lIb29rKHZub2RlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuaG9vaykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlc3Ryb3kpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCB2bm9kZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNicy5kZXN0cm95Lmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIGNicy5kZXN0cm95W2ldKHZub2RlKTtcbiAgICAgICAgICAgIGlmICh2bm9kZS5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgIT0gbnVsbCAmJiB0eXBlb2YgY2hpbGQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVWbm9kZXMocGFyZW50RWxtLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICAgICAgbGV0IGxpc3RlbmVycztcbiAgICAgICAgICAgIGxldCBybTtcbiAgICAgICAgICAgIGNvbnN0IGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcbiAgICAgICAgICAgIGlmIChjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGVmKGNoLnNlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52b2tlRGVzdHJveUhvb2soY2gpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBjYnMucmVtb3ZlLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJtID0gY3JlYXRlUm1DYihjaC5lbG0sIGxpc3RlbmVycyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLnJlbW92ZS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNicy5yZW1vdmVbaV0oY2gsIHJtKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSG9vayA9IChfYiA9IChfYSA9IGNoID09PSBudWxsIHx8IGNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaC5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaG9vaykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlbW92ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRGVmKHJlbW92ZUhvb2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVIb29rKGNoLCBybSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBUZXh0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgYXBpLnJlbW92ZUNoaWxkKHBhcmVudEVsbSwgY2guZWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hpbGRyZW4ocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgICBsZXQgb2xkU3RhcnRJZHggPSAwO1xuICAgICAgICBsZXQgbmV3U3RhcnRJZHggPSAwO1xuICAgICAgICBsZXQgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICAgICAgbGV0IG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFswXTtcbiAgICAgICAgbGV0IG9sZEVuZFZub2RlID0gb2xkQ2hbb2xkRW5kSWR4XTtcbiAgICAgICAgbGV0IG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBuZXdTdGFydFZub2RlID0gbmV3Q2hbMF07XG4gICAgICAgIGxldCBuZXdFbmRWbm9kZSA9IG5ld0NoW25ld0VuZElkeF07XG4gICAgICAgIGxldCBvbGRLZXlUb0lkeDtcbiAgICAgICAgbGV0IGlkeEluT2xkO1xuICAgICAgICBsZXQgZWxtVG9Nb3ZlO1xuICAgICAgICBsZXQgYmVmb3JlO1xuICAgICAgICB3aGlsZSAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4ICYmIG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgICAgICAgaWYgKG9sZFN0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTsgLy8gVm5vZGUgbWlnaHQgaGF2ZSBiZWVuIG1vdmVkIGxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG9sZEVuZFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld1N0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld0VuZFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBWbm9kZSBtb3ZlZCByaWdodFxuICAgICAgICAgICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBhcGkubmV4dFNpYmxpbmcob2xkRW5kVm5vZGUuZWxtKSk7XG4gICAgICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgICAgIC8vIFZub2RlIG1vdmVkIGxlZnRcbiAgICAgICAgICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRFbmRWbm9kZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkS2V5VG9JZHggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBvbGRLZXlUb0lkeCA9IGNyZWF0ZUtleVRvT2xkSWR4KG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWR4SW5PbGQgPSBvbGRLZXlUb0lkeFtuZXdTdGFydFZub2RlLmtleV07XG4gICAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoaWR4SW5PbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5ldyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxtVG9Nb3ZlLnNlbCAhPT0gbmV3U3RhcnRWbm9kZS5zZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hWbm9kZShlbG1Ub01vdmUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgZWxtVG9Nb3ZlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4IHx8IG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgICAgICAgaWYgKG9sZFN0YXJ0SWR4ID4gb2xkRW5kSWR4KSB7XG4gICAgICAgICAgICAgICAgYmVmb3JlID0gbmV3Q2hbbmV3RW5kSWR4ICsgMV0gPT0gbnVsbCA/IG51bGwgOiBuZXdDaFtuZXdFbmRJZHggKyAxXS5lbG07XG4gICAgICAgICAgICAgICAgYWRkVm5vZGVzKHBhcmVudEVsbSwgYmVmb3JlLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZVZub2RlcyhwYXJlbnRFbG0sIG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaFZub2RlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIGNvbnN0IGhvb2sgPSAoX2EgPSB2bm9kZS5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaG9vaztcbiAgICAgICAgKF9iID0gaG9vayA9PT0gbnVsbCB8fCBob29rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBob29rLnByZXBhdGNoKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChob29rLCBvbGRWbm9kZSwgdm5vZGUpO1xuICAgICAgICBjb25zdCBlbG0gPSAodm5vZGUuZWxtID0gb2xkVm5vZGUuZWxtKTtcbiAgICAgICAgY29uc3Qgb2xkQ2ggPSBvbGRWbm9kZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgY2ggPSB2bm9kZS5jaGlsZHJlbjtcbiAgICAgICAgaWYgKG9sZFZub2RlID09PSB2bm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHZub2RlLmRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMudXBkYXRlLmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgICAgIGNicy51cGRhdGVbaV0ob2xkVm5vZGUsIHZub2RlKTtcbiAgICAgICAgICAgIChfZCA9IChfYyA9IHZub2RlLmRhdGEuaG9vaykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnVwZGF0ZSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNhbGwoX2MsIG9sZFZub2RlLCB2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVW5kZWYodm5vZGUudGV4dCkpIHtcbiAgICAgICAgICAgIGlmIChpc0RlZihvbGRDaCkgJiYgaXNEZWYoY2gpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZENoICE9PSBjaClcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRyZW4oZWxtLCBvbGRDaCwgY2gsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0RlZihjaCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpXG4gICAgICAgICAgICAgICAgICAgIGFwaS5zZXRUZXh0Q29udGVudChlbG0sIFwiXCIpO1xuICAgICAgICAgICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIGNoLCAwLCBjaC5sZW5ndGggLSAxLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNEZWYob2xkQ2gpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKGVsbSwgb2xkQ2gsIDAsIG9sZENoLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNEZWYob2xkVm5vZGUudGV4dCkpIHtcbiAgICAgICAgICAgICAgICBhcGkuc2V0VGV4dENvbnRlbnQoZWxtLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvbGRWbm9kZS50ZXh0ICE9PSB2bm9kZS50ZXh0KSB7XG4gICAgICAgICAgICBpZiAoaXNEZWYob2xkQ2gpKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKGVsbSwgb2xkQ2gsIDAsIG9sZENoLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBpLnNldFRleHRDb250ZW50KGVsbSwgdm5vZGUudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgKF9lID0gaG9vayA9PT0gbnVsbCB8fCBob29rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBob29rLnBvc3RwYXRjaCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmNhbGwoaG9vaywgb2xkVm5vZGUsIHZub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHBhdGNoKG9sZFZub2RlLCB2bm9kZSkge1xuICAgICAgICBsZXQgaSwgZWxtLCBwYXJlbnQ7XG4gICAgICAgIGNvbnN0IGluc2VydGVkVm5vZGVRdWV1ZSA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2JzLnByZS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNicy5wcmVbaV0oKTtcbiAgICAgICAgaWYgKCFpc1Zub2RlKG9sZFZub2RlKSkge1xuICAgICAgICAgICAgb2xkVm5vZGUgPSBlbXB0eU5vZGVBdChvbGRWbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNhbWVWbm9kZShvbGRWbm9kZSwgdm5vZGUpKSB7XG4gICAgICAgICAgICBwYXRjaFZub2RlKG9sZFZub2RlLCB2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICAgICAgICAgIHBhcmVudCA9IGFwaS5wYXJlbnROb2RlKGVsbSk7XG4gICAgICAgICAgICBjcmVhdGVFbG0odm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICBpZiAocGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnQsIHZub2RlLmVsbSwgYXBpLm5leHRTaWJsaW5nKGVsbSkpO1xuICAgICAgICAgICAgICAgIHJlbW92ZVZub2RlcyhwYXJlbnQsIFtvbGRWbm9kZV0sIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbnNlcnRlZFZub2RlUXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZVtpXS5kYXRhLmhvb2suaW5zZXJ0KGluc2VydGVkVm5vZGVRdWV1ZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5wb3N0Lmxlbmd0aDsgKytpKVxuICAgICAgICAgICAgY2JzLnBvc3RbaV0oKTtcbiAgICAgICAgcmV0dXJuIHZub2RlO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbml0LmpzLm1hcCIsImltcG9ydCB7IHZub2RlIH0gZnJvbSBcIi4vdm5vZGVcIjtcbmltcG9ydCAqIGFzIGlzIGZyb20gXCIuL2lzXCI7XG5mdW5jdGlvbiBhZGROUyhkYXRhLCBjaGlsZHJlbiwgc2VsKSB7XG4gICAgZGF0YS5ucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICBpZiAoc2VsICE9PSBcImZvcmVpZ25PYmplY3RcIiAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IGNoaWxkcmVuW2ldLmRhdGE7XG4gICAgICAgICAgICBpZiAoY2hpbGREYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhZGROUyhjaGlsZERhdGEsIGNoaWxkcmVuW2ldLmNoaWxkcmVuLCBjaGlsZHJlbltpXS5zZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGgoc2VsLCBiLCBjKSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBsZXQgY2hpbGRyZW47XG4gICAgbGV0IHRleHQ7XG4gICAgbGV0IGk7XG4gICAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGF0YSA9IGI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzLmFycmF5KGMpKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXMucHJpbWl0aXZlKGMpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjICYmIGMuc2VsKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IFtjXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChiICE9PSB1bmRlZmluZWQgJiYgYiAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXMuYXJyYXkoYikpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gYjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpcy5wcmltaXRpdmUoYikpIHtcbiAgICAgICAgICAgIHRleHQgPSBiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGIgJiYgYi5zZWwpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gW2JdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IGI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoaXMucHJpbWl0aXZlKGNoaWxkcmVuW2ldKSlcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpXSA9IHZub2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGNoaWxkcmVuW2ldLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzZWxbMF0gPT09IFwic1wiICYmXG4gICAgICAgIHNlbFsxXSA9PT0gXCJ2XCIgJiZcbiAgICAgICAgc2VsWzJdID09PSBcImdcIiAmJlxuICAgICAgICAoc2VsLmxlbmd0aCA9PT0gMyB8fCBzZWxbM10gPT09IFwiLlwiIHx8IHNlbFszXSA9PT0gXCIjXCIpKSB7XG4gICAgICAgIGFkZE5TKGRhdGEsIGNoaWxkcmVuLCBzZWwpO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGUoc2VsLCBkYXRhLCBjaGlsZHJlbiwgdGV4dCwgdW5kZWZpbmVkKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWguanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCIuL2hcIjtcbmZ1bmN0aW9uIGNvcHlUb1RodW5rKHZub2RlLCB0aHVuaykge1xuICAgIHZub2RlLmRhdGEuZm4gPSB0aHVuay5kYXRhLmZuO1xuICAgIHZub2RlLmRhdGEuYXJncyA9IHRodW5rLmRhdGEuYXJncztcbiAgICB0aHVuay5kYXRhID0gdm5vZGUuZGF0YTtcbiAgICB0aHVuay5jaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuICAgIHRodW5rLnRleHQgPSB2bm9kZS50ZXh0O1xuICAgIHRodW5rLmVsbSA9IHZub2RlLmVsbTtcbn1cbmZ1bmN0aW9uIGluaXQodGh1bmspIHtcbiAgICBjb25zdCBjdXIgPSB0aHVuay5kYXRhO1xuICAgIGNvbnN0IHZub2RlID0gY3VyLmZuKC4uLmN1ci5hcmdzKTtcbiAgICBjb3B5VG9UaHVuayh2bm9kZSwgdGh1bmspO1xufVxuZnVuY3Rpb24gcHJlcGF0Y2gob2xkVm5vZGUsIHRodW5rKSB7XG4gICAgbGV0IGk7XG4gICAgY29uc3Qgb2xkID0gb2xkVm5vZGUuZGF0YTtcbiAgICBjb25zdCBjdXIgPSB0aHVuay5kYXRhO1xuICAgIGNvbnN0IG9sZEFyZ3MgPSBvbGQuYXJncztcbiAgICBjb25zdCBhcmdzID0gY3VyLmFyZ3M7XG4gICAgaWYgKG9sZC5mbiAhPT0gY3VyLmZuIHx8IG9sZEFyZ3MubGVuZ3RoICE9PSBhcmdzLmxlbmd0aCkge1xuICAgICAgICBjb3B5VG9UaHVuayhjdXIuZm4oLi4uYXJncyksIHRodW5rKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAob2xkQXJnc1tpXSAhPT0gYXJnc1tpXSkge1xuICAgICAgICAgICAgY29weVRvVGh1bmsoY3VyLmZuKC4uLmFyZ3MpLCB0aHVuayk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29weVRvVGh1bmsob2xkVm5vZGUsIHRodW5rKTtcbn1cbmV4cG9ydCBjb25zdCB0aHVuayA9IGZ1bmN0aW9uIHRodW5rKHNlbCwga2V5LCBmbiwgYXJncykge1xuICAgIGlmIChhcmdzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXJncyA9IGZuO1xuICAgICAgICBmbiA9IGtleTtcbiAgICAgICAga2V5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gaChzZWwsIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGhvb2s6IHsgaW5pdCwgcHJlcGF0Y2ggfSxcbiAgICAgICAgZm46IGZuLFxuICAgICAgICBhcmdzOiBhcmdzLFxuICAgIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRodW5rLmpzLm1hcCIsImZ1bmN0aW9uIHByZSh2bm9kZSwgbmV3Vm5vZGUpIHtcbiAgICBjb25zdCBhdHRhY2hEYXRhID0gdm5vZGUuZGF0YS5hdHRhY2hEYXRhO1xuICAgIC8vIENvcHkgY3JlYXRlZCBwbGFjZWhvbGRlciBhbmQgcmVhbCBlbGVtZW50IGZyb20gb2xkIHZub2RlXG4gICAgbmV3Vm5vZGUuZGF0YS5hdHRhY2hEYXRhLnBsYWNlaG9sZGVyID0gYXR0YWNoRGF0YS5wbGFjZWhvbGRlcjtcbiAgICBuZXdWbm9kZS5kYXRhLmF0dGFjaERhdGEucmVhbCA9IGF0dGFjaERhdGEucmVhbDtcbiAgICAvLyBNb3VudCByZWFsIGVsZW1lbnQgaW4gdm5vZGUgc28gdGhlIHBhdGNoIHByb2Nlc3Mgb3BlcmF0ZXMgb24gaXRcbiAgICB2bm9kZS5lbG0gPSB2bm9kZS5kYXRhLmF0dGFjaERhdGEucmVhbDtcbn1cbmZ1bmN0aW9uIHBvc3QoXywgdm5vZGUpIHtcbiAgICAvLyBNb3VudCBkdW1teSBwbGFjZWhvbGRlciBpbiB2bm9kZSBzbyBwb3RlbnRpYWwgcmVvcmRlcnMgdXNlIGl0XG4gICAgdm5vZGUuZWxtID0gdm5vZGUuZGF0YS5hdHRhY2hEYXRhLnBsYWNlaG9sZGVyO1xufVxuZnVuY3Rpb24gZGVzdHJveSh2bm9kZSkge1xuICAgIC8vIFJlbW92ZSBwbGFjZWhvbGRlclxuICAgIGlmICh2bm9kZS5lbG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2bm9kZS5lbG0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2bm9kZS5lbG0pO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgcmVhbCBlbGVtZW50IGZyb20gd2hlcmUgaXQgd2FzIGluc2VydGVkXG4gICAgdm5vZGUuZWxtID0gdm5vZGUuZGF0YS5hdHRhY2hEYXRhLnJlYWw7XG59XG5mdW5jdGlvbiBjcmVhdGUoXywgdm5vZGUpIHtcbiAgICBjb25zdCByZWFsID0gdm5vZGUuZWxtO1xuICAgIGNvbnN0IGF0dGFjaERhdGEgPSB2bm9kZS5kYXRhLmF0dGFjaERhdGE7XG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAvLyBSZXBsYWNlIGFjdHVhbCBlbGVtZW50IHdpdGggZHVtbXkgcGxhY2Vob2xkZXJcbiAgICAvLyBTbmFiYmRvbSB3aWxsIHRoZW4gaW5zZXJ0IHBsYWNlaG9sZGVyIGluc3RlYWRcbiAgICB2bm9kZS5lbG0gPSBwbGFjZWhvbGRlcjtcbiAgICBhdHRhY2hEYXRhLnRhcmdldC5hcHBlbmRDaGlsZChyZWFsKTtcbiAgICBhdHRhY2hEYXRhLnJlYWwgPSByZWFsO1xuICAgIGF0dGFjaERhdGEucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUbyh0YXJnZXQsIHZub2RlKSB7XG4gICAgaWYgKHZub2RlLmRhdGEgPT09IHVuZGVmaW5lZClcbiAgICAgICAgdm5vZGUuZGF0YSA9IHt9O1xuICAgIGlmICh2bm9kZS5kYXRhLmhvb2sgPT09IHVuZGVmaW5lZClcbiAgICAgICAgdm5vZGUuZGF0YS5ob29rID0ge307XG4gICAgY29uc3QgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgY29uc3QgaG9vayA9IHZub2RlLmRhdGEuaG9vaztcbiAgICBkYXRhLmF0dGFjaERhdGEgPSB7IHRhcmdldDogdGFyZ2V0LCBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLCByZWFsOiB1bmRlZmluZWQgfTtcbiAgICBob29rLmNyZWF0ZSA9IGNyZWF0ZTtcbiAgICBob29rLnByZXBhdGNoID0gcHJlO1xuICAgIGhvb2sucG9zdHBhdGNoID0gcG9zdDtcbiAgICBob29rLmRlc3Ryb3kgPSBkZXN0cm95O1xuICAgIHJldHVybiB2bm9kZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF0dGFjaHRvLmpzLm1hcCIsImltcG9ydCB7IHZub2RlIH0gZnJvbSBcIi4vdm5vZGVcIjtcbmltcG9ydCB7IGh0bWxEb21BcGkgfSBmcm9tIFwiLi9odG1sZG9tYXBpXCI7XG5leHBvcnQgZnVuY3Rpb24gdG9WTm9kZShub2RlLCBkb21BcGkpIHtcbiAgICBjb25zdCBhcGkgPSBkb21BcGkgIT09IHVuZGVmaW5lZCA/IGRvbUFwaSA6IGh0bWxEb21BcGk7XG4gICAgbGV0IHRleHQ7XG4gICAgaWYgKGFwaS5pc0VsZW1lbnQobm9kZSkpIHtcbiAgICAgICAgY29uc3QgaWQgPSBub2RlLmlkID8gXCIjXCIgKyBub2RlLmlkIDogXCJcIjtcbiAgICAgICAgY29uc3QgY24gPSBub2RlLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICAgICAgICBjb25zdCBjID0gY24gPyBcIi5cIiArIGNuLnNwbGl0KFwiIFwiKS5qb2luKFwiLlwiKSA6IFwiXCI7XG4gICAgICAgIGNvbnN0IHNlbCA9IGFwaS50YWdOYW1lKG5vZGUpLnRvTG93ZXJDYXNlKCkgKyBpZCArIGM7XG4gICAgICAgIGNvbnN0IGF0dHJzID0ge307XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG4gICAgICAgIGxldCBuYW1lO1xuICAgICAgICBsZXQgaSwgbjtcbiAgICAgICAgY29uc3QgZWxtQXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IGVsbUNoaWxkcmVuID0gbm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGkgPSAwLCBuID0gZWxtQXR0cnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBuYW1lID0gZWxtQXR0cnNbaV0ubm9kZU5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZSAhPT0gXCJpZFwiICYmIG5hbWUgIT09IFwiY2xhc3NcIikge1xuICAgICAgICAgICAgICAgIGF0dHJzW25hbWVdID0gZWxtQXR0cnNbaV0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDAsIG4gPSBlbG1DaGlsZHJlbi5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLnB1c2godG9WTm9kZShlbG1DaGlsZHJlbltpXSwgZG9tQXBpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZub2RlKHNlbCwgeyBhdHRycyB9LCBjaGlsZHJlbiwgdW5kZWZpbmVkLCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXBpLmlzVGV4dChub2RlKSkge1xuICAgICAgICB0ZXh0ID0gYXBpLmdldFRleHRDb250ZW50KG5vZGUpO1xuICAgICAgICByZXR1cm4gdm5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGV4dCwgbm9kZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFwaS5pc0NvbW1lbnQobm9kZSkpIHtcbiAgICAgICAgdGV4dCA9IGFwaS5nZXRUZXh0Q29udGVudChub2RlKTtcbiAgICAgICAgcmV0dXJuIHZub2RlKFwiIVwiLCB7fSwgW10sIHRleHQsIG5vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZub2RlKFwiXCIsIHt9LCBbXSwgdW5kZWZpbmVkLCBub2RlKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b3Zub2RlLmpzLm1hcCIsImNvbnN0IHhsaW5rTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbmNvbnN0IHhtbE5TID0gXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIjtcbmNvbnN0IGNvbG9uQ2hhciA9IDU4O1xuY29uc3QgeENoYXIgPSAxMjA7XG5mdW5jdGlvbiB1cGRhdGVBdHRycyhvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBsZXQga2V5O1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBsZXQgb2xkQXR0cnMgPSBvbGRWbm9kZS5kYXRhLmF0dHJzO1xuICAgIGxldCBhdHRycyA9IHZub2RlLmRhdGEuYXR0cnM7XG4gICAgaWYgKCFvbGRBdHRycyAmJiAhYXR0cnMpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAob2xkQXR0cnMgPT09IGF0dHJzKVxuICAgICAgICByZXR1cm47XG4gICAgb2xkQXR0cnMgPSBvbGRBdHRycyB8fCB7fTtcbiAgICBhdHRycyA9IGF0dHJzIHx8IHt9O1xuICAgIC8vIHVwZGF0ZSBtb2RpZmllZCBhdHRyaWJ1dGVzLCBhZGQgbmV3IGF0dHJpYnV0ZXNcbiAgICBmb3IgKGtleSBpbiBhdHRycykge1xuICAgICAgICBjb25zdCBjdXIgPSBhdHRyc1trZXldO1xuICAgICAgICBjb25zdCBvbGQgPSBvbGRBdHRyc1trZXldO1xuICAgICAgICBpZiAob2xkICE9PSBjdXIpIHtcbiAgICAgICAgICAgIGlmIChjdXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKGtleSwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5jaGFyQ29kZUF0KDApICE9PSB4Q2hhcikge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKGtleSwgY3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5LmNoYXJDb2RlQXQoMykgPT09IGNvbG9uQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWUgeG1sIG5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlTlMoeG1sTlMsIGtleSwgY3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5LmNoYXJDb2RlQXQoNSkgPT09IGNvbG9uQ2hhcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBBc3N1bWUgeGxpbmsgbmFtZXNwYWNlXG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBrZXksIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKGtleSwgY3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gcmVtb3ZlIHJlbW92ZWQgYXR0cmlidXRlc1xuICAgIC8vIHVzZSBgaW5gIG9wZXJhdG9yIHNpbmNlIHRoZSBwcmV2aW91cyBgZm9yYCBpdGVyYXRpb24gdXNlcyBpdCAoLmkuZS4gYWRkIGV2ZW4gYXR0cmlidXRlcyB3aXRoIHVuZGVmaW5lZCB2YWx1ZSlcbiAgICAvLyB0aGUgb3RoZXIgb3B0aW9uIGlzIHRvIHJlbW92ZSBhbGwgYXR0cmlidXRlcyB3aXRoIHZhbHVlID09IHVuZGVmaW5lZFxuICAgIGZvciAoa2V5IGluIG9sZEF0dHJzKSB7XG4gICAgICAgIGlmICghKGtleSBpbiBhdHRycykpIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzTW9kdWxlID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlQXR0cnMsXG4gICAgdXBkYXRlOiB1cGRhdGVBdHRycyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdHRyaWJ1dGVzLmpzLm1hcCIsImZ1bmN0aW9uIHVwZGF0ZUNsYXNzKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGxldCBjdXI7XG4gICAgbGV0IG5hbWU7XG4gICAgY29uc3QgZWxtID0gdm5vZGUuZWxtO1xuICAgIGxldCBvbGRDbGFzcyA9IG9sZFZub2RlLmRhdGEuY2xhc3M7XG4gICAgbGV0IGtsYXNzID0gdm5vZGUuZGF0YS5jbGFzcztcbiAgICBpZiAoIW9sZENsYXNzICYmICFrbGFzcylcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChvbGRDbGFzcyA9PT0ga2xhc3MpXG4gICAgICAgIHJldHVybjtcbiAgICBvbGRDbGFzcyA9IG9sZENsYXNzIHx8IHt9O1xuICAgIGtsYXNzID0ga2xhc3MgfHwge307XG4gICAgZm9yIChuYW1lIGluIG9sZENsYXNzKSB7XG4gICAgICAgIGlmIChvbGRDbGFzc1tuYW1lXSAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGtsYXNzLCBuYW1lKSkge1xuICAgICAgICAgICAgLy8gd2FzIGB0cnVlYCBhbmQgbm93IG5vdCBwcm92aWRlZFxuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChuYW1lIGluIGtsYXNzKSB7XG4gICAgICAgIGN1ciA9IGtsYXNzW25hbWVdO1xuICAgICAgICBpZiAoY3VyICE9PSBvbGRDbGFzc1tuYW1lXSkge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdFtjdXIgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0obmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgY2xhc3NNb2R1bGUgPSB7IGNyZWF0ZTogdXBkYXRlQ2xhc3MsIHVwZGF0ZTogdXBkYXRlQ2xhc3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsYXNzLmpzLm1hcCIsImNvbnN0IENBUFNfUkVHRVggPSAvW0EtWl0vZztcbmZ1bmN0aW9uIHVwZGF0ZURhdGFzZXQob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgY29uc3QgZWxtID0gdm5vZGUuZWxtO1xuICAgIGxldCBvbGREYXRhc2V0ID0gb2xkVm5vZGUuZGF0YS5kYXRhc2V0O1xuICAgIGxldCBkYXRhc2V0ID0gdm5vZGUuZGF0YS5kYXRhc2V0O1xuICAgIGxldCBrZXk7XG4gICAgaWYgKCFvbGREYXRhc2V0ICYmICFkYXRhc2V0KVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZERhdGFzZXQgPT09IGRhdGFzZXQpXG4gICAgICAgIHJldHVybjtcbiAgICBvbGREYXRhc2V0ID0gb2xkRGF0YXNldCB8fCB7fTtcbiAgICBkYXRhc2V0ID0gZGF0YXNldCB8fCB7fTtcbiAgICBjb25zdCBkID0gZWxtLmRhdGFzZXQ7XG4gICAgZm9yIChrZXkgaW4gb2xkRGF0YXNldCkge1xuICAgICAgICBpZiAoIWRhdGFzZXRba2V5XSkge1xuICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1cIiArIGtleS5yZXBsYWNlKENBUFNfUkVHRVgsIFwiLSQmXCIpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoa2V5IGluIGRhdGFzZXQpIHtcbiAgICAgICAgaWYgKG9sZERhdGFzZXRba2V5XSAhPT0gZGF0YXNldFtrZXldKSB7XG4gICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICAgIGRba2V5XSA9IGRhdGFzZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5LnJlcGxhY2UoQ0FQU19SRUdFWCwgXCItJCZcIikudG9Mb3dlckNhc2UoKSwgZGF0YXNldFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBkYXRhc2V0TW9kdWxlID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlRGF0YXNldCxcbiAgICB1cGRhdGU6IHVwZGF0ZURhdGFzZXQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YXNldC5qcy5tYXAiLCJmdW5jdGlvbiBpbnZva2VIYW5kbGVyKGhhbmRsZXIsIHZub2RlLCBldmVudCkge1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIC8vIGNhbGwgZnVuY3Rpb24gaGFuZGxlclxuICAgICAgICBoYW5kbGVyLmNhbGwodm5vZGUsIGV2ZW50LCB2bm9kZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIC8vIGNhbGwgbXVsdGlwbGUgaGFuZGxlcnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbnZva2VIYW5kbGVyKGhhbmRsZXJbaV0sIHZub2RlLCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBoYW5kbGVFdmVudChldmVudCwgdm5vZGUpIHtcbiAgICBjb25zdCBuYW1lID0gZXZlbnQudHlwZTtcbiAgICBjb25zdCBvbiA9IHZub2RlLmRhdGEub247XG4gICAgLy8gY2FsbCBldmVudCBoYW5kbGVyKHMpIGlmIGV4aXN0c1xuICAgIGlmIChvbiAmJiBvbltuYW1lXSkge1xuICAgICAgICBpbnZva2VIYW5kbGVyKG9uW25hbWVdLCB2bm9kZSwgZXZlbnQpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZUV2ZW50KGV2ZW50LCBoYW5kbGVyLnZub2RlKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdXBkYXRlRXZlbnRMaXN0ZW5lcnMob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgY29uc3Qgb2xkT24gPSBvbGRWbm9kZS5kYXRhLm9uO1xuICAgIGNvbnN0IG9sZExpc3RlbmVyID0gb2xkVm5vZGUubGlzdGVuZXI7XG4gICAgY29uc3Qgb2xkRWxtID0gb2xkVm5vZGUuZWxtO1xuICAgIGNvbnN0IG9uID0gdm5vZGUgJiYgdm5vZGUuZGF0YS5vbjtcbiAgICBjb25zdCBlbG0gPSAodm5vZGUgJiYgdm5vZGUuZWxtKTtcbiAgICBsZXQgbmFtZTtcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIHJldXNlZCBpbW11dGFibGUgaGFuZGxlcnNcbiAgICBpZiAob2xkT24gPT09IG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGV4aXN0aW5nIGxpc3RlbmVycyB3aGljaCBubyBsb25nZXIgdXNlZFxuICAgIGlmIChvbGRPbiAmJiBvbGRMaXN0ZW5lcikge1xuICAgICAgICAvLyBpZiBlbGVtZW50IGNoYW5nZWQgb3IgZGVsZXRlZCB3ZSByZW1vdmUgYWxsIGV4aXN0aW5nIGxpc3RlbmVycyB1bmNvbmRpdGlvbmFsbHlcbiAgICAgICAgaWYgKCFvbikge1xuICAgICAgICAgICAgZm9yIChuYW1lIGluIG9sZE9uKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyIGlmIGVsZW1lbnQgd2FzIGNoYW5nZWQgb3IgZXhpc3RpbmcgbGlzdGVuZXJzIHJlbW92ZWRcbiAgICAgICAgICAgICAgICBvbGRFbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBvbGRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChuYW1lIGluIG9sZE9uKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyIGlmIGV4aXN0aW5nIGxpc3RlbmVyIHJlbW92ZWRcbiAgICAgICAgICAgICAgICBpZiAoIW9uW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZEVsbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIG9sZExpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGFkZCBuZXcgbGlzdGVuZXJzIHdoaWNoIGhhcyBub3QgYWxyZWFkeSBhdHRhY2hlZFxuICAgIGlmIChvbikge1xuICAgICAgICAvLyByZXVzZSBleGlzdGluZyBsaXN0ZW5lciBvciBjcmVhdGUgbmV3XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKHZub2RlLmxpc3RlbmVyID1cbiAgICAgICAgICAgIG9sZFZub2RlLmxpc3RlbmVyIHx8IGNyZWF0ZUxpc3RlbmVyKCkpO1xuICAgICAgICAvLyB1cGRhdGUgdm5vZGUgZm9yIGxpc3RlbmVyXG4gICAgICAgIGxpc3RlbmVyLnZub2RlID0gdm5vZGU7XG4gICAgICAgIC8vIGlmIGVsZW1lbnQgY2hhbmdlZCBvciBhZGRlZCB3ZSBhZGQgYWxsIG5lZWRlZCBsaXN0ZW5lcnMgdW5jb25kaXRpb25hbGx5XG4gICAgICAgIGlmICghb2xkT24pIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbikge1xuICAgICAgICAgICAgICAgIC8vIGFkZCBsaXN0ZW5lciBpZiBlbGVtZW50IHdhcyBjaGFuZ2VkIG9yIG5ldyBsaXN0ZW5lcnMgYWRkZWRcbiAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGxpc3RlbmVyIGlmIG5ldyBsaXN0ZW5lciBhZGRlZFxuICAgICAgICAgICAgICAgIGlmICghb2xkT25bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgZXZlbnRMaXN0ZW5lcnNNb2R1bGUgPSB7XG4gICAgY3JlYXRlOiB1cGRhdGVFdmVudExpc3RlbmVycyxcbiAgICB1cGRhdGU6IHVwZGF0ZUV2ZW50TGlzdGVuZXJzLFxuICAgIGRlc3Ryb3k6IHVwZGF0ZUV2ZW50TGlzdGVuZXJzLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50bGlzdGVuZXJzLmpzLm1hcCIsImZ1bmN0aW9uIHVwZGF0ZVByb3BzKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IGN1cjtcbiAgICBsZXQgb2xkO1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBsZXQgb2xkUHJvcHMgPSBvbGRWbm9kZS5kYXRhLnByb3BzO1xuICAgIGxldCBwcm9wcyA9IHZub2RlLmRhdGEucHJvcHM7XG4gICAgaWYgKCFvbGRQcm9wcyAmJiAhcHJvcHMpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAob2xkUHJvcHMgPT09IHByb3BzKVxuICAgICAgICByZXR1cm47XG4gICAgb2xkUHJvcHMgPSBvbGRQcm9wcyB8fCB7fTtcbiAgICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIGZvciAoa2V5IGluIHByb3BzKSB7XG4gICAgICAgIGN1ciA9IHByb3BzW2tleV07XG4gICAgICAgIG9sZCA9IG9sZFByb3BzW2tleV07XG4gICAgICAgIGlmIChvbGQgIT09IGN1ciAmJiAoa2V5ICE9PSBcInZhbHVlXCIgfHwgZWxtW2tleV0gIT09IGN1cikpIHtcbiAgICAgICAgICAgIGVsbVtrZXldID0gY3VyO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IHByb3BzTW9kdWxlID0geyBjcmVhdGU6IHVwZGF0ZVByb3BzLCB1cGRhdGU6IHVwZGF0ZVByb3BzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9wcy5qcy5tYXAiLCIvLyBCaW5kaWcgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgbGlrZSB0aGlzIGZpeGVzIGEgYnVnIGluIElFL0VkZ2UuIFNlZSAjMzYwIGFuZCAjNDA5LlxuY29uc3QgcmFmID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KSkgfHxcbiAgICBzZXRUaW1lb3V0O1xuY29uc3QgbmV4dEZyYW1lID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmFmKGZuKTtcbiAgICB9KTtcbn07XG5sZXQgcmVmbG93Rm9yY2VkID0gZmFsc2U7XG5mdW5jdGlvbiBzZXROZXh0RnJhbWUob2JqLCBwcm9wLCB2YWwpIHtcbiAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBvYmpbcHJvcF0gPSB2YWw7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB1cGRhdGVTdHlsZShvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBsZXQgY3VyO1xuICAgIGxldCBuYW1lO1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBsZXQgb2xkU3R5bGUgPSBvbGRWbm9kZS5kYXRhLnN0eWxlO1xuICAgIGxldCBzdHlsZSA9IHZub2RlLmRhdGEuc3R5bGU7XG4gICAgaWYgKCFvbGRTdHlsZSAmJiAhc3R5bGUpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAob2xkU3R5bGUgPT09IHN0eWxlKVxuICAgICAgICByZXR1cm47XG4gICAgb2xkU3R5bGUgPSBvbGRTdHlsZSB8fCB7fTtcbiAgICBzdHlsZSA9IHN0eWxlIHx8IHt9O1xuICAgIGNvbnN0IG9sZEhhc0RlbCA9IFwiZGVsYXllZFwiIGluIG9sZFN0eWxlO1xuICAgIGZvciAobmFtZSBpbiBvbGRTdHlsZSkge1xuICAgICAgICBpZiAoIXN0eWxlW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAobmFtZVswXSA9PT0gXCItXCIgJiYgbmFtZVsxXSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICBlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0uc3R5bGVbbmFtZV0gPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobmFtZSBpbiBzdHlsZSkge1xuICAgICAgICBjdXIgPSBzdHlsZVtuYW1lXTtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZGVsYXllZFwiICYmIHN0eWxlLmRlbGF5ZWQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZTIgaW4gc3R5bGUuZGVsYXllZCkge1xuICAgICAgICAgICAgICAgIGN1ciA9IHN0eWxlLmRlbGF5ZWRbbmFtZTJdO1xuICAgICAgICAgICAgICAgIGlmICghb2xkSGFzRGVsIHx8IGN1ciAhPT0gb2xkU3R5bGUuZGVsYXllZFtuYW1lMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TmV4dEZyYW1lKGVsbS5zdHlsZSwgbmFtZTIsIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5hbWUgIT09IFwicmVtb3ZlXCIgJiYgY3VyICE9PSBvbGRTdHlsZVtuYW1lXSkge1xuICAgICAgICAgICAgaWYgKG5hbWVbMF0gPT09IFwiLVwiICYmIG5hbWVbMV0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgZWxtLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIGN1cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0uc3R5bGVbbmFtZV0gPSBjdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseURlc3Ryb3lTdHlsZSh2bm9kZSkge1xuICAgIGxldCBzdHlsZTtcbiAgICBsZXQgbmFtZTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgY29uc3QgcyA9IHZub2RlLmRhdGEuc3R5bGU7XG4gICAgaWYgKCFzIHx8ICEoc3R5bGUgPSBzLmRlc3Ryb3kpKVxuICAgICAgICByZXR1cm47XG4gICAgZm9yIChuYW1lIGluIHN0eWxlKSB7XG4gICAgICAgIGVsbS5zdHlsZVtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5UmVtb3ZlU3R5bGUodm5vZGUsIHJtKSB7XG4gICAgY29uc3QgcyA9IHZub2RlLmRhdGEuc3R5bGU7XG4gICAgaWYgKCFzIHx8ICFzLnJlbW92ZSkge1xuICAgICAgICBybSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVmbG93Rm9yY2VkKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIHZub2RlLmVsbS5vZmZzZXRMZWZ0O1xuICAgICAgICByZWZsb3dGb3JjZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQgbmFtZTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IHN0eWxlID0gcy5yZW1vdmU7XG4gICAgbGV0IGFtb3VudCA9IDA7XG4gICAgY29uc3QgYXBwbGllZCA9IFtdO1xuICAgIGZvciAobmFtZSBpbiBzdHlsZSkge1xuICAgICAgICBhcHBsaWVkLnB1c2gobmFtZSk7XG4gICAgICAgIGVsbS5zdHlsZVtuYW1lXSA9IHN0eWxlW25hbWVdO1xuICAgIH1cbiAgICBjb25zdCBjb21wU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsbSk7XG4gICAgY29uc3QgcHJvcHMgPSBjb21wU3R5bGVbXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCJdLnNwbGl0KFwiLCBcIik7XG4gICAgZm9yICg7IGkgPCBwcm9wcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoYXBwbGllZC5pbmRleE9mKHByb3BzW2ldKSAhPT0gLTEpXG4gICAgICAgICAgICBhbW91bnQrKztcbiAgICB9XG4gICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBpZiAoZXYudGFyZ2V0ID09PSBlbG0pXG4gICAgICAgICAgICAtLWFtb3VudDtcbiAgICAgICAgaWYgKGFtb3VudCA9PT0gMClcbiAgICAgICAgICAgIHJtKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmb3JjZVJlZmxvdygpIHtcbiAgICByZWZsb3dGb3JjZWQgPSBmYWxzZTtcbn1cbmV4cG9ydCBjb25zdCBzdHlsZU1vZHVsZSA9IHtcbiAgICBwcmU6IGZvcmNlUmVmbG93LFxuICAgIGNyZWF0ZTogdXBkYXRlU3R5bGUsXG4gICAgdXBkYXRlOiB1cGRhdGVTdHlsZSxcbiAgICBkZXN0cm95OiBhcHBseURlc3Ryb3lTdHlsZSxcbiAgICByZW1vdmU6IGFwcGx5UmVtb3ZlU3R5bGUsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuanMubWFwIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5hbWVzcGFjZSwgaW1wb3J0L2V4cG9ydCAqL1xuaW1wb3J0IHsgdm5vZGUgfSBmcm9tIFwiLi92bm9kZVwiO1xuaW1wb3J0IHsgaCB9IGZyb20gXCIuL2hcIjtcbmZ1bmN0aW9uIGZsYXR0ZW5BbmRGaWx0ZXIoY2hpbGRyZW4sIGZsYXR0ZW5lZCkge1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgLy8gZmlsdGVyIG91dCBmYWxzZXkgY2hpbGRyZW4sIGV4Y2VwdCAwIHNpbmNlIHplcm8gY2FuIGJlIGEgdmFsaWQgdmFsdWUgZS5nIGluc2lkZSBhIGNoYXJ0XG4gICAgICAgIGlmIChjaGlsZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBjaGlsZCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgY2hpbGQgIT09IGZhbHNlICYmXG4gICAgICAgICAgICBjaGlsZCAhPT0gXCJcIikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgZmxhdHRlbkFuZEZpbHRlcihjaGlsZCwgZmxhdHRlbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBjaGlsZCA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBjaGlsZCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICBmbGF0dGVuZWQucHVzaCh2bm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBTdHJpbmcoY2hpbGQpLCB1bmRlZmluZWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZsYXR0ZW5lZC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmxhdHRlbmVkO1xufVxuLyoqXG4gKiBqc3gvdHN4IGNvbXBhdGlibGUgZmFjdG9yeSBmdW5jdGlvblxuICogc2VlOiBodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9qc3guaHRtbCNmYWN0b3J5LWZ1bmN0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24ganN4KHRhZywgZGF0YSwgLi4uY2hpbGRyZW4pIHtcbiAgICBjb25zdCBmbGF0Q2hpbGRyZW4gPSBmbGF0dGVuQW5kRmlsdGVyKGNoaWxkcmVuLCBbXSk7XG4gICAgaWYgKHR5cGVvZiB0YWcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAvLyB0YWcgaXMgYSBmdW5jdGlvbiBjb21wb25lbnRcbiAgICAgICAgcmV0dXJuIHRhZyhkYXRhLCBmbGF0Q2hpbGRyZW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGZsYXRDaGlsZHJlbi5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICFmbGF0Q2hpbGRyZW5bMF0uc2VsICYmXG4gICAgICAgICAgICBmbGF0Q2hpbGRyZW5bMF0udGV4dCkge1xuICAgICAgICAgICAgLy8gb25seSBjaGlsZCBpcyBhIHNpbXBsZSB0ZXh0IG5vZGUsIHBhc3MgYXMgdGV4dCBmb3IgYSBzaW1wbGVyIHZ0cmVlXG4gICAgICAgICAgICByZXR1cm4gaCh0YWcsIGRhdGEsIGZsYXRDaGlsZHJlblswXS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoKHRhZywgZGF0YSwgZmxhdENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbihmdW5jdGlvbiAoanN4KSB7XG59KShqc3ggfHwgKGpzeCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc3guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQ29tcG9uZW50ID0gdm9pZCAwO1xudmFyIHV0aWxpdGllc18xID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzXCIpO1xudmFyIENvbXBvbmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMpIHtcbiAgICAgICAgdGhpcy5pZCA9IHV0aWxpdGllc18xLmdlbmVyYXRlSWQoKTtcbiAgICAgICAgdGhpcy5odG1sID0gXCJcIjtcbiAgICAgICAgdGhpcy5jc3MgPSBcIlwiO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgdGhpcy5zaG91bGRNb3VudCA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvcHMgPSBfX2Fzc2lnbih7fSwgcHJvcHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuICAgIENvbXBvbmVudC5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUubW91bnRJZk5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTW91bnQpIHtcbiAgICAgICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvdWxkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQsIHRoaXMubmFtZSwgXCJkb2VzbnQgbmVlZCB0byByZW5kZXIhXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHRtbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5zdHlsZSA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jc3MgPSBjc3NcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZS5yZXBsYWNlKFwiIHtcIiwgXCJbZGF0YS1yZWFjaGlkPVxcXCJcIiArIF90aGlzLmlkICsgXCJcXFwiXSB7XCIpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIH07XG4gICAgQ29tcG9uZW50LnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24gKGNvbXBvbmVudEh0bWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGh0bWwgPSBjb21wb25lbnRIdG1sLnJlcGxhY2UoLz4vZywgXCIgZGF0YS1yZWFjaGlkPVxcXCJcIiArIHRoaXMuaWQgKyBcIlxcXCI+XCIpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZEtleSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkSWQgPSBfdGhpcy5jaGlsZHJlbltjaGlsZEtleV0uaWQ7XG4gICAgICAgICAgICB2YXIgY2hpbGRIdG1sID0gX3RoaXMuY2hpbGRyZW5bY2hpbGRLZXldLmh0bWw7XG4gICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKGNoaWxkSWQsIGNoaWxkSHRtbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmh0bWwgPSBcIlxcbiAgICAgICAgICAgIDxzdHlsZT5cIiArICh0aGlzLmNzcyA/IHRoaXMuY3NzIDogXCJ7fVwiKSArIFwiPC9zdHlsZT5cXG4gICAgICAgICAgICBcIiArIGh0bWwgKyBcIlxcbiAgICAgICAgXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWw7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFja0lkID0gdXRpbGl0aWVzXzEuZ2VuZXJhdGVJZCgpO1xuICAgICAgICB2YXIgY2FsbGJhY2tQcm9wcyA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2tJZDogY2FsbGJhY2tJZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pZCBpbiB0aGlzLnBhZ2UuY2FsbGJhY2tzXG4gICAgICAgICAgICA/IHRoaXMucGFnZS5jYWxsYmFja3NbdGhpcy5pZF0ucHVzaChjYWxsYmFja1Byb3BzKVxuICAgICAgICAgICAgOiAodGhpcy5wYWdlLmNhbGxiYWNrc1t0aGlzLmlkXSA9IFtjYWxsYmFja1Byb3BzXSk7XG4gICAgICAgIHJldHVybiBjYWxsYmFja0lkICsgXCIgZGF0YS1cIiArIGNhbGxiYWNrSWQgKyBcIj1cXFwiXCIgKyBjYWxsYmFja0lkICsgXCJcXFwiXCI7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmNoaWxkID0gZnVuY3Rpb24gKGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgICAgICB2YXIgZXJyb3JMaW5lcyA9IGVycm9yLnNwbGl0KFwiXFxuXCIpWzJdO1xuICAgICAgICB2YXIgbGluZU51bWJlciA9IGVycm9yTGluZXMuc3BsaXQoXCI6XCIpLnNsaWNlKC0yKVswXTtcbiAgICAgICAgdmFyIGNvbE51bWJlciA9IGVycm9yTGluZXMuc3BsaXQoXCI6XCIpLnNsaWNlKC0xKVswXS5yZXBsYWNlKFwiKVwiLCBcIlwiKTtcbiAgICAgICAgdmFyIGtleSA9IFwiXCIgKyAobGluZU51bWJlciArIGNvbE51bWJlcik7XG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldLm1vdW50SWZOZWVkZWQoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV0uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5wYWdlID0gdGhpcy5wYWdlO1xuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQucGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IGNoaWxkQ29tcG9uZW50O1xuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQubW91bnRJZk5lZWRlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50LmlkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnBhcmVudFNob3VsZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnNob3VsZE1vdW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnBhcmVudFNob3VsZE1vdW50KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2hvdWxkTW91bnQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhcmVudFNob3VsZE1vdW50KCk7XG4gICAgICAgIHRoaXMucGFnZS51cGRhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlBhZ2UgPSB2b2lkIDA7XG52YXIgc25hYmJkb21fMSA9IHJlcXVpcmUoXCJzbmFiYmRvbVwiKTtcbnZhciBwYXRjaCA9IHNuYWJiZG9tXzEuaW5pdChbXSk7XG52YXIgUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYWdlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgUGFnZS5wcm90b3R5cGUuYWRkUm9vdEltYWdlID0gZnVuY3Rpb24gKHJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5yb290Q29tcG9uZW50ID0gcm9vdENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5yb290Q29tcG9uZW50LnBhZ2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnJvb3RDb21wb25lbnQubW91bnRJZk5lZWRlZCgpO1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMudGV4dFRvTm9kZSh0aGlzLnJvb3RDb21wb25lbnQuaHRtbCk7XG4gICAgICAgIHRoaXMuaW5qZWN0Q2FsbGJhY2tzKG5vZGUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmVlID0gc25hYmJkb21fMS50b1ZOb2RlKG5vZGUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFBhZ2UucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yb290Q29tcG9uZW50Lm1vdW50SWZOZWVkZWQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9O1xuICAgIFBhZ2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnRleHRUb05vZGUodGhpcy5yb290Q29tcG9uZW50Lmh0bWwpO1xuICAgICAgICB0aGlzLmluamVjdENhbGxiYWNrcyhub2RlKTtcbiAgICAgICAgdmFyIHRyZWUgPSBzbmFiYmRvbV8xLnRvVk5vZGUobm9kZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRyZWUpO1xuICAgICAgICBwYXRjaCh0aGlzLmN1cnJlbnRUcmVlLCB0cmVlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VHJlZSA9IHRyZWU7XG4gICAgfTtcbiAgICAvLyBUT0RPIHRoaXMgc2hvdWxkIGJlIGEgdXRpbGl0eSBmdW5jdGlvblxuICAgIFBhZ2UucHJvdG90eXBlLnRleHRUb05vZGUgPSBmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIHZhciB3cmFwcGVkID0gXCI8ZGl2PlwiICsgZG9tICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgcmV0dXJuIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcod3JhcHBlZCwgXCJ0ZXh0L2h0bWxcIikuYm9keVxuICAgICAgICAgICAgLmZpcnN0Q2hpbGQ7XG4gICAgfTtcbiAgICAvLyBhZGRzIGNhbGxiYWNrcyAoZS5nIGV2ZW50IGxpc3RlbmVycykgdG8gdGhlIERPTSBvbmNlIGl0IGhhcyBiZWVuIHJlY29uY2lsZWQgYW5kIHJlbmRlcmVkLlxuICAgIC8vIGdvZXMgdGhyb3VnaCB0aGUgY2FsbGJhY2tzIG9iamVjdCwgZmluZHMgdGhlIGVsZW1lbnQgYnkgdGhlIGNhbGxiYWNrSWQsIGNoZWNrcyBpZiB0aGVcbiAgICAvLyB2YWx1ZSBvZiB0aGUgZWxlbWVudCdzIGF0dHJpYnV0ZXMgbWF0Y2hlcyB0aGUgY2FsbGJhY2sgaWRcbiAgICBQYWdlLnByb3RvdHlwZS5pbmplY3RDYWxsYmFja3MgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuY2FsbGJhY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFja1Byb3BzKSB7XG4gICAgICAgICAgICBjYWxsYmFja1Byb3BzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1cIiArIGNhbGxiYWNrLmNhbGxiYWNrSWQgKyBcIl1cIik7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldFtjYWxsYmFjay5jYWxsYmFja0lkXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlID0gMDsgYXR0cmlidXRlIDwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgYXR0cmlidXRlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gZWxlbWVudC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0ubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlVmFsdWUgPSBlbGVtZW50LmF0dHJpYnV0ZXNbYXR0cmlidXRlXS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgPT0gY2FsbGJhY2suY2FsbGJhY2tJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbYXR0cmlidXRlTmFtZV0gPSBjYWxsYmFjay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXQVJOOiBVbm1vdW50ZWQgY29tcG9uZW50IGV4aXN0czogXCIgKyBjYWxsYmFjay5uYW1lICsgXCIgLSBcIiArIGNhbGxiYWNrLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gICAgfTtcbiAgICBQYWdlLnByb3RvdHlwZS5pbXBvcnRDU1MgPSBmdW5jdGlvbiAoY2RuKSB7XG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGNkbik7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfTtcbiAgICByZXR1cm4gUGFnZTtcbn0oKSk7XG5leHBvcnRzLlBhZ2UgPSBQYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZW5lcmF0ZUlkID0gdm9pZCAwO1xudmFyIGdlbmVyYXRlSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKS50b1N0cmluZygzNik7XG59O1xuZXhwb3J0cy5nZW5lcmF0ZUlkID0gZ2VuZXJhdGVJZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNhcmQgPSB2b2lkIDA7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50XCIpO1xudmFyIENhcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENhcmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDYXJkLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0gIV90aGlzLmdldFN0YXRlKFwib3BlblwiKTtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKFwib3BlblwiLCBuZXdTdGF0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3R5bGUoW1xuICAgICAgICAgICAgXCIud3JhcHBlciB7IHRleHQtYWxpZ246IGNlbnRlcjsgYm9yZGVyLXJhZGl1czogMTBweDsgaGVpZ2h0OiAxMDAlOyBib3JkZXI6IDNweCBzb2xpZCBcIiArIHRoaXMucHJvcHMuYmFja2dyb3VuZENvbG91ckJhc2UgKyBcIjsgfVwiLFxuICAgICAgICAgICAgXCIudGl0bGUgeyBmb250LXNpemU6IDN2dzsgcGFkZGluZzogMTBweDsgbWFyZ2luLXRvcDogMzBweDsgfVwiLFxuICAgICAgICAgICAgXCIuYm9keSB7IG1hcmdpbjogMTVweCA1cHggMTVweCA1cHg7IH1cIixcbiAgICAgICAgICAgIFwiLnRleHQgeyBmb250LXNpemU6IDEuNXZ3OyAgfVwiLFxuICAgICAgICAgICAgXCIuaGlkZGVuIHsgY29sb3I6IHJlZDsgfVwiLFxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5jb21waWxlKFwiXFxuICAgICAgICAgICAgPGRpdiBvbmNsaWNrPVwiICsgdGhpcy5yZWdpc3RlcihjaGFuZ2VTdGF0ZSkgKyBcIiBjbGFzcz1cXFwid3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj5cIiArIHRoaXMucHJvcHMuaGVhZGVyVGV4dCArIFwiPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dFwiICsgKHRoaXMuZ2V0U3RhdGUoXCJvcGVuXCIpID8gXCJcIiA6IFwiIGhpZGRlblwiKSArIFwiXFxcIj5cIiArIHRoaXMucHJvcHMuYm9keVRleHQgKyBcIjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBDYXJkO1xufShjb21wb25lbnRfMS5Db21wb25lbnQpKTtcbmV4cG9ydHMuQ2FyZCA9IENhcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5MYXlvdXQgPSB2b2lkIDA7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50XCIpO1xudmFyIGNhcmRfMSA9IHJlcXVpcmUoXCIuL2NhcmRcIik7XG52YXIgTGF5b3V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMYXlvdXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGF5b3V0KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB9XG4gICAgTGF5b3V0LnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpbnlDYXJkID0gbmV3IGNhcmRfMS5DYXJkKHtcbiAgICAgICAgICAgIGhlYWRlclRleHQ6IFwiVGlueSFcIixcbiAgICAgICAgICAgIGJvZHlUZXh0OiBcIlJlYWNoLmpzIGlzIGxlc3MgdGhhbiAxMDAwIGxpbmVzIG9mIGNvZGUgdW5taW5pZmllZC5cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvdXJCYXNlOiBcImJsYWNrXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdW5vcGluaW9uYXRlZENhcmQgPSBuZXcgY2FyZF8xLkNhcmQoe1xuICAgICAgICAgICAgaGVhZGVyVGV4dDogXCJBY2NlcHRpbmdcIixcbiAgICAgICAgICAgIGJvZHlUZXh0OiBcIlJlYWNoLmpzIGRvZXNuJ3QgcGxhY2UgcmVzdHJpY3Rpb25zIG9uIGhvdyB5b3UgZGV2ZWxvcC5cIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvdXJCYXNlOiBcImJsYWNrXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc2ltcGxlQ2FyZCA9IG5ldyBjYXJkXzEuQ2FyZCh7XG4gICAgICAgICAgICBoZWFkZXJUZXh0OiBcIlNpbXBsZVwiLFxuICAgICAgICAgICAgYm9keVRleHQ6IFwiQ29tcG9uZW50cyBhcmUgd3JpdHRlbiBpbiBIVE1MIC8gQ1NTLCB3aXRoIGFuIGludHVpdGl2ZSBBUEkuXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3VyQmFzZTogXCJibGFja1wiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHlsZShbXG4gICAgICAgICAgICBcIi53cmFwcGVyIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTsgaGVpZ2h0OiAxMDB2aDsgZ2FwOiA1MHB4OyBwYWRkaW5nLWxlZnQ6IDIwdnc7IHBhZGRpbmctcmlnaHQ6IDIwdnc7IH1cIixcbiAgICAgICAgICAgIFwiLnRpdGxlIHsgZ3JpZC1jb2x1bW46IDEgLyA0OyBncmlkLXJvdzogMTsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDZyZW07IHBhZGRpbmctdG9wOiAxMDBweDsgfVwiLFxuICAgICAgICAgICAgXCIub25lIHsgZ3JpZC1jb2x1bW46IDE7IGdyaWQtcm93OiAyIC8gMzsgfVwiLFxuICAgICAgICAgICAgXCIudHdvIHsgZ3JpZC1jb2x1bW46IDI7IGdyaWQtcm93OiAyIC8gMzsgfVwiLFxuICAgICAgICAgICAgXCIudGhyZWUgeyBncmlkLWNvbHVtbjogMzsgZ3JpZC1yb3c6IDIgLyAzOyB9XCIsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNvbXBpbGUoXCJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgUmVhY2guanNcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm9uZSBzdWJncmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiICsgdGhpcy5jaGlsZCh0aW55Q2FyZCkgKyBcIlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidHdvIHN1YmdyaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyB0aGlzLmNoaWxkKHVub3BpbmlvbmF0ZWRDYXJkKSArIFwiXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aHJlZSBzdWJncmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiICsgdGhpcy5jaGlsZChzaW1wbGVDYXJkKSArIFwiXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIExheW91dDtcbn0oY29tcG9uZW50XzEuQ29tcG9uZW50KSk7XG5leHBvcnRzLkxheW91dCA9IExheW91dDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
