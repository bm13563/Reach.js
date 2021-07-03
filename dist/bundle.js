(() => {
    "use strict";
    var t,
        e,
        n = {
            361: (t, e, n) => {
                n.r(e),
                    n.d(e, {
                        array: () => i,
                        attachTo: () => T,
                        attributesModule: () => j,
                        classModule: () => S,
                        datasetModule: () => M,
                        eventListenersModule: () => I,
                        h: () => m,
                        htmlDomApi: () => o,
                        init: () => f,
                        jsx: () => X,
                        primitive: () => a,
                        propsModule: () => R,
                        styleModule: () => $,
                        thunk: () => b,
                        toVNode: () => _,
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
                        m = void 0 !== e ? e : o;
                    for (n = 0; n < p.length; ++n)
                        for (h[p[n]] = [], f = 0; f < t.length; ++f) {
                            const e = t[f][p[n]];
                            void 0 !== e && h[p[n]].push(e);
                        }
                    function v(t) {
                        const e = t.id ? "#" + t.id : "",
                            n = t.getAttribute("class"),
                            o = n ? "." + n.split(" ").join(".") : "";
                        return r(
                            m.tagName(t).toLowerCase() + e + o,
                            {},
                            [],
                            void 0,
                            t,
                        );
                    }
                    function y(t, e) {
                        return function () {
                            if (0 == --e) {
                                const e = m.parentNode(t);
                                m.removeChild(e, t);
                            }
                        };
                    }
                    function g(t, e) {
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
                            p = t.sel;
                        if ("!" === p)
                            l(t.text) && (t.text = ""),
                                (t.elm = m.createComment(t.text));
                        else if (void 0 !== p) {
                            const n = p.indexOf("#"),
                                l = p.indexOf(".", n),
                                f = n > 0 ? n : p.length,
                                v = l > 0 ? l : p.length,
                                y =
                                    -1 !== n || -1 !== l
                                        ? p.slice(0, Math.min(f, v))
                                        : p,
                                b = (t.elm =
                                    s(d) && s((r = d.ns))
                                        ? m.createElementNS(r, y, d)
                                        : m.createElement(y, d));
                            for (
                                f < v &&
                                    b.setAttribute("id", p.slice(f + 1, v)),
                                    l > 0 &&
                                        b.setAttribute(
                                            "class",
                                            p.slice(v + 1).replace(/\./g, " "),
                                        ),
                                    r = 0;
                                r < h.create.length;
                                ++r
                            )
                                h.create[r](c, t);
                            if (i(u))
                                for (r = 0; r < u.length; ++r) {
                                    const t = u[r];
                                    null != t && m.appendChild(b, g(t, e));
                                }
                            else
                                a(t.text) &&
                                    m.appendChild(b, m.createTextNode(t.text));
                            const x = t.data.hook;
                            s(x) &&
                                (null === (o = x.create) ||
                                    void 0 === o ||
                                    o.call(x, c, t),
                                x.insert && e.push(t));
                        } else t.elm = m.createTextNode(t.text);
                        return t.elm;
                    }
                    function b(t, e, n, o, r, i) {
                        for (; o <= r; ++o) {
                            const r = n[o];
                            null != r && m.insertBefore(t, g(r, i), e);
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
                                        (a = y(l.elm, o));
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
                                } else m.removeChild(t, l.elm);
                        }
                    }
                    function w(t, e, n) {
                        var o, r, i, a, c;
                        const p =
                            null === (o = e.data) || void 0 === o
                                ? void 0
                                : o.hook;
                        null === (r = null == p ? void 0 : p.prepatch) ||
                            void 0 === r ||
                            r.call(p, t, e);
                        const f = (e.elm = t.elm),
                            v = t.children,
                            y = e.children;
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
                                ? s(v) && s(y)
                                    ? v !== y &&
                                      (function (t, e, n, o) {
                                          let r,
                                              i,
                                              a,
                                              s,
                                              c = 0,
                                              p = 0,
                                              f = e.length - 1,
                                              h = e[0],
                                              v = e[f],
                                              y = n.length - 1,
                                              x = n[0],
                                              k = n[y];
                                          for (; c <= f && p <= y; )
                                              null == h
                                                  ? (h = e[++c])
                                                  : null == v
                                                  ? (v = e[--f])
                                                  : null == x
                                                  ? (x = n[++p])
                                                  : null == k
                                                  ? (k = n[--y])
                                                  : d(h, x)
                                                  ? (w(h, x, o),
                                                    (h = e[++c]),
                                                    (x = n[++p]))
                                                  : d(v, k)
                                                  ? (w(v, k, o),
                                                    (v = e[--f]),
                                                    (k = n[--y]))
                                                  : d(h, k)
                                                  ? (w(h, k, o),
                                                    m.insertBefore(
                                                        t,
                                                        h.elm,
                                                        m.nextSibling(v.elm),
                                                    ),
                                                    (h = e[++c]),
                                                    (k = n[--y]))
                                                  : d(v, x)
                                                  ? (w(v, x, o),
                                                    m.insertBefore(
                                                        t,
                                                        v.elm,
                                                        h.elm,
                                                    ),
                                                    (v = e[--f]),
                                                    (x = n[++p]))
                                                  : (void 0 === r &&
                                                        (r = u(e, c, f)),
                                                    (i = r[x.key]),
                                                    l(i)
                                                        ? m.insertBefore(
                                                              t,
                                                              g(x, o),
                                                              h.elm,
                                                          )
                                                        : ((a = e[i]),
                                                          a.sel !== x.sel
                                                              ? m.insertBefore(
                                                                    t,
                                                                    g(x, o),
                                                                    h.elm,
                                                                )
                                                              : (w(a, x, o),
                                                                (e[i] = void 0),
                                                                m.insertBefore(
                                                                    t,
                                                                    a.elm,
                                                                    h.elm,
                                                                ))),
                                                    (x = n[++p]));
                                          (c <= f || p <= y) &&
                                              (c > f
                                                  ? ((s =
                                                        null == n[y + 1]
                                                            ? null
                                                            : n[y + 1].elm),
                                                    b(t, s, n, p, y, o))
                                                  : C(t, e, c, f));
                                      })(f, v, y, n)
                                    : s(y)
                                    ? (s(t.text) && m.setTextContent(f, ""),
                                      b(f, null, y, 0, y.length - 1, n))
                                    : s(v)
                                    ? C(f, v, 0, v.length - 1)
                                    : s(t.text) && m.setTextContent(f, "")
                                : t.text !== e.text &&
                                  (s(v) && C(f, v, 0, v.length - 1),
                                  m.setTextContent(f, e.text)),
                                null ===
                                    (c = null == p ? void 0 : p.postpatch) ||
                                    void 0 === c ||
                                    c.call(p, t, e);
                        }
                    }
                    return function (t, e) {
                        let n, o, r;
                        const i = [];
                        for (n = 0; n < h.pre.length; ++n) h.pre[n]();
                        for (
                            (function (t) {
                                return void 0 !== t.sel;
                            })(t) || (t = v(t)),
                                d(t, e)
                                    ? w(t, e, i)
                                    : ((o = t.elm),
                                      (r = m.parentNode(o)),
                                      g(e, i),
                                      null !== r &&
                                          (m.insertBefore(
                                              r,
                                              e.elm,
                                              m.nextSibling(o),
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
                function m(t, e, n) {
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
                            h(c, o, t),
                        r(t, c, o, l, void 0)
                    );
                }
                function v(t, e) {
                    (t.data.fn = e.data.fn),
                        (t.data.args = e.data.args),
                        (e.data = t.data),
                        (e.children = t.children),
                        (e.text = t.text),
                        (e.elm = t.elm);
                }
                function y(t) {
                    const e = t.data;
                    v(e.fn(...e.args), t);
                }
                function g(t, e) {
                    let n;
                    const o = t.data,
                        r = e.data,
                        i = o.args,
                        a = r.args;
                    if (o.fn === r.fn && i.length === a.length) {
                        for (n = 0; n < a.length; ++n)
                            if (i[n] !== a[n]) return void v(r.fn(...a), e);
                        v(t, e);
                    } else v(r.fn(...a), e);
                }
                const b = function (t, e, n, o) {
                    return (
                        void 0 === o && ((o = n), (n = e), (e = void 0)),
                        m(t, {
                            key: e,
                            hook: { init: y, prepatch: g },
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
                function _(t, e) {
                    const n = void 0 !== e ? e : o;
                    let i;
                    if (n.isElement(t)) {
                        const o = t.id ? "#" + t.id : "",
                            i = t.getAttribute("class"),
                            a = i ? "." + i.split(" ").join(".") : "",
                            l = n.tagName(t).toLowerCase() + o + a,
                            s = {},
                            c = [];
                        let d, u, p;
                        const f = t.attributes,
                            h = t.childNodes;
                        for (u = 0, p = f.length; u < p; u++)
                            (d = f[u].nodeName),
                                "id" !== d &&
                                    "class" !== d &&
                                    (s[d] = f[u].nodeValue);
                        for (u = 0, p = h.length; u < p; u++)
                            c.push(_(h[u], e));
                        return r(l, { attrs: s }, c, void 0, t);
                    }
                    return n.isText(t)
                        ? ((i = n.getTextContent(t)),
                          r(void 0, void 0, void 0, i, t))
                        : n.isComment(t)
                        ? ((i = n.getTextContent(t)), r("!", {}, [], i, t))
                        : r("", {}, [], void 0, t);
                }
                function N(t, e) {
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
                const j = { create: N, update: N };
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
                const S = { create: A, update: A },
                    O = /[A-Z]/g;
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
                                          o.replace(O, "-$&").toLowerCase(),
                                  ));
                    for (o in i)
                        r[o] !== i[o] &&
                            (a
                                ? (a[o] = i[o])
                                : n.setAttribute(
                                      "data-" +
                                          o.replace(O, "-$&").toLowerCase(),
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
                const I = { create: D, update: D, destroy: D };
                function B(t, e) {
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
                const R = { create: B, update: B },
                    V =
                        ("undefined" != typeof window &&
                            window.requestAnimationFrame.bind(window)) ||
                        setTimeout;
                let q = !1;
                function F(t, e, n) {
                    var o;
                    (o = function () {
                        t[e] = n;
                    }),
                        V(function () {
                            V(o);
                        });
                }
                function U(t, e) {
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
                const $ = {
                    pre: function () {
                        q = !1;
                    },
                    create: U,
                    update: U,
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
                function W(t, e) {
                    for (const n of t)
                        null != n &&
                            !1 !== n &&
                            "" !== n &&
                            (Array.isArray(n)
                                ? W(n, e)
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
                function X(t, e, ...n) {
                    const o = W(n, []);
                    return "function" == typeof t
                        ? t(e, o)
                        : 1 === o.length && !o[0].sel && o[0].text
                        ? m(t, e, o[0].text)
                        : m(t, e, o);
                }
                X || (X = {});
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
                                (this.props = o({}, t)),
                                (this.name = this.constructor.name);
                        }
                        return (
                            (t.prototype.mount = function () {}),
                            (t.prototype.style = function (t) {
                                this.css = t
                                    .map(function (t) {
                                        return "" + t;
                                    })
                                    .join(" ");
                            }),
                            (t.prototype.compile = function (t) {
                                return (
                                    (this.html =
                                        "\n            <style>" +
                                        (this.css ? this.css : "{}") +
                                        "</style>\n            " +
                                        t.replace(
                                            ">",
                                            "data-reachid=" + this.id + ">",
                                        ) +
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
                            t
                        );
                    })();
                e.Component = i;
            },
            781: function (t, e, n) {
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
                        return t.call(this, e) || this;
                    }
                    return (
                        r(e, t),
                        (e.prototype.mount = function () {
                            this.style([
                                ".my-card { position:absolute; left:40%; top:-20px; }",
                            ]),
                                this.compile(
                                    '\n            <div class="col-md-3">\n                <div class="card border-' +
                                        this.props.alertType +
                                        ' mx-sm-1 p-3">\n                    <div class="card border-' +
                                        this.props.alertType +
                                        " shadow text-" +
                                        this.props.alertType +
                                        ' p-3 my-card" >\n                        <span class="fa fa-' +
                                        this.props.icon +
                                        '" aria-hidden="true"></span>\n                    </div>\n                    <div class="text-' +
                                        this.props.alertType +
                                        ' text-center mt-3">\n                        <h4>' +
                                        this.props.header +
                                        '</h4>\n                    </div>\n                    <div class="text-' +
                                        this.props.alertType +
                                        ' text-center mt-2">\n                        <h5>' +
                                        this.props.text +
                                        "</h5>\n                    </div>\n                </div>\n            </div>\n        ",
                                );
                        }),
                        e
                    );
                })(n(999).Component);
                e.Card = i;
            },
            64: function (t, e, n) {
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
                (e.__esModule = !0), (e.Container = void 0);
                var i = n(999),
                    a = n(781),
                    l = (function (t) {
                        function e() {
                            return t.call(this) || this;
                        }
                        return (
                            r(e, t),
                            (e.prototype.mount = function () {
                                var t = new a.Card({
                                        header: "Compact",
                                        text: "Reach.js is less than 1000 minified lines",
                                        alertType: "info",
                                        icon: "lightbulb",
                                    }),
                                    e = new a.Card({
                                        header: "Unopinionated",
                                        text: "Reach.js gives the developer complete control",
                                        alertType: "success",
                                        icon: "dove",
                                    });
                                this.style([".jumbotron { padding: 100px; }"]),
                                    this.compile(
                                        '\n            <div class="jumbotron">\n                <div class="row w-100">\n                    ' +
                                            this.child(t) +
                                            "\n                    " +
                                            this.child(e) +
                                            "\n                </div>\n            </div>\n        ",
                                    );
                            }),
                            e
                        );
                    })(i.Component);
                e.Container = l;
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
                                    this.injectCallbacks(this.currentNode),
                                    (this.currentTree = o.toVNode(
                                        this.currentNode,
                                    )),
                                    document.body.appendChild(this.currentNode),
                                    this
                                );
                            }),
                            (t.prototype.update = function () {
                                this.rootComponent.mount(), this.render();
                            }),
                            (t.prototype.render = function () {
                                var t = this.textToNode(
                                    this.rootComponent.html,
                                );
                                this.injectCallbacks(t);
                                var e = o.toVNode(t);
                                r(this.currentTree, e), (this.currentTree = e);
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
        },
        o = {};
    function r(t) {
        var e = o[t];
        if (void 0 !== e) return e.exports;
        var i = (o[t] = { exports: {} });
        return n[t].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.d = (t, e) => {
        for (var n in e)
            r.o(e, n) &&
                !r.o(t, n) &&
                Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
        (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (r.r = (t) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (t = r(64)),
        (e = new (r(220).Page)("counter").addRootImage(
            new t.Container(),
        )).importCSS(
            "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        ),
        e.importCSS(
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
        );
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL2h0bWxkb21hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL3Zub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9pcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvdGh1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL2hlbHBlcnMvYXR0YWNodG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL3Rvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NuYWJiZG9tL2J1aWxkL21vZHVsZXMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvbW9kdWxlcy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc25hYmJkb20vYnVpbGQvbW9kdWxlcy9kYXRhc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL2V2ZW50bGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL3Byb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9tb2R1bGVzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zbmFiYmRvbS9idWlsZC9qc3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9ja2luZy9jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2NraW5nL2NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Il0sIm5hbWVzIjpbImNvbnRhaW5lcl8xIiwiY291bnRlclBhZ2UiLCJodG1sRG9tQXBpIiwiY3JlYXRlRWxlbWVudCIsInRhZ05hbWUiLCJvcHRpb25zIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJuYW1lc3BhY2VVUkkiLCJxdWFsaWZpZWROYW1lIiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0IiwiY3JlYXRlQ29tbWVudCIsImluc2VydEJlZm9yZSIsInBhcmVudE5vZGUiLCJuZXdOb2RlIiwicmVmZXJlbmNlTm9kZSIsInJlbW92ZUNoaWxkIiwibm9kZSIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJuZXh0U2libGluZyIsImVsbSIsInNldFRleHRDb250ZW50IiwidGV4dENvbnRlbnQiLCJnZXRUZXh0Q29udGVudCIsImlzRWxlbWVudCIsIm5vZGVUeXBlIiwiaXNUZXh0IiwiaXNDb21tZW50Iiwidm5vZGUiLCJzZWwiLCJkYXRhIiwiY2hpbGRyZW4iLCJrZXkiLCJ1bmRlZmluZWQiLCJhcnJheSIsIkFycmF5IiwiaXNBcnJheSIsInByaW1pdGl2ZSIsInMiLCJpc1VuZGVmIiwiaXNEZWYiLCJlbXB0eU5vZGUiLCJzYW1lVm5vZGUiLCJ2bm9kZTEiLCJ2bm9kZTIiLCJfYSIsIl9iIiwiaXNTYW1lS2V5IiwiaXNTYW1lSXMiLCJpcyIsImNyZWF0ZUtleVRvT2xkSWR4IiwiYmVnaW5JZHgiLCJlbmRJZHgiLCJtYXAiLCJpIiwiaG9va3MiLCJpbml0IiwibW9kdWxlcyIsImRvbUFwaSIsImoiLCJjYnMiLCJjcmVhdGUiLCJ1cGRhdGUiLCJyZW1vdmUiLCJkZXN0cm95IiwicHJlIiwicG9zdCIsImFwaSIsImxlbmd0aCIsImhvb2siLCJwdXNoIiwiZW1wdHlOb2RlQXQiLCJpZCIsImNsYXNzZXMiLCJnZXRBdHRyaWJ1dGUiLCJjIiwic3BsaXQiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJjcmVhdGVSbUNiIiwiY2hpbGRFbG0iLCJsaXN0ZW5lcnMiLCJwYXJlbnQiLCJjcmVhdGVFbG0iLCJpbnNlcnRlZFZub2RlUXVldWUiLCJoYXNoSWR4IiwiaW5kZXhPZiIsImRvdElkeCIsImhhc2giLCJkb3QiLCJ0YWciLCJzbGljZSIsIk1hdGgiLCJtaW4iLCJucyIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJjaCIsImNhbGwiLCJpbnNlcnQiLCJhZGRWbm9kZXMiLCJwYXJlbnRFbG0iLCJiZWZvcmUiLCJ2bm9kZXMiLCJzdGFydElkeCIsImludm9rZURlc3Ryb3lIb29rIiwicmVtb3ZlVm5vZGVzIiwicm0iLCJyZW1vdmVIb29rIiwicGF0Y2hWbm9kZSIsIm9sZFZub2RlIiwiX2MiLCJfZCIsIl9lIiwicHJlcGF0Y2giLCJvbGRDaCIsIm5ld0NoIiwib2xkS2V5VG9JZHgiLCJpZHhJbk9sZCIsImVsbVRvTW92ZSIsIm9sZFN0YXJ0SWR4IiwibmV3U3RhcnRJZHgiLCJvbGRFbmRJZHgiLCJvbGRTdGFydFZub2RlIiwib2xkRW5kVm5vZGUiLCJuZXdFbmRJZHgiLCJuZXdTdGFydFZub2RlIiwibmV3RW5kVm5vZGUiLCJ1cGRhdGVDaGlsZHJlbiIsInBvc3RwYXRjaCIsImlzVm5vZGUiLCJhZGROUyIsImNoaWxkRGF0YSIsImgiLCJiIiwiY29weVRvVGh1bmsiLCJ0aHVuayIsImZuIiwiYXJncyIsImN1ciIsIm9sZCIsIm9sZEFyZ3MiLCJuZXdWbm9kZSIsImF0dGFjaERhdGEiLCJwbGFjZWhvbGRlciIsInJlYWwiLCJfIiwidGFyZ2V0IiwiYXR0YWNoVG8iLCJ0b1ZOb2RlIiwiY24iLCJhdHRycyIsIm5hbWUiLCJuIiwiZWxtQXR0cnMiLCJhdHRyaWJ1dGVzIiwiZWxtQ2hpbGRyZW4iLCJjaGlsZE5vZGVzIiwibm9kZU5hbWUiLCJub2RlVmFsdWUiLCJ1cGRhdGVBdHRycyIsIm9sZEF0dHJzIiwicmVtb3ZlQXR0cmlidXRlIiwiY2hhckNvZGVBdCIsInNldEF0dHJpYnV0ZU5TIiwiYXR0cmlidXRlc01vZHVsZSIsInVwZGF0ZUNsYXNzIiwib2xkQ2xhc3MiLCJjbGFzcyIsImtsYXNzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc0xpc3QiLCJjbGFzc01vZHVsZSIsIkNBUFNfUkVHRVgiLCJ1cGRhdGVEYXRhc2V0Iiwib2xkRGF0YXNldCIsImRhdGFzZXQiLCJkIiwiZGF0YXNldE1vZHVsZSIsImludm9rZUhhbmRsZXIiLCJoYW5kbGVyIiwiZXZlbnQiLCJoYW5kbGVFdmVudCIsInR5cGUiLCJvbiIsInVwZGF0ZUV2ZW50TGlzdGVuZXJzIiwib2xkT24iLCJvbGRMaXN0ZW5lciIsImxpc3RlbmVyIiwib2xkRWxtIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVyc01vZHVsZSIsInVwZGF0ZVByb3BzIiwib2xkUHJvcHMiLCJwcm9wcyIsInByb3BzTW9kdWxlIiwicmFmIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInNldFRpbWVvdXQiLCJyZWZsb3dGb3JjZWQiLCJzZXROZXh0RnJhbWUiLCJvYmoiLCJwcm9wIiwidmFsIiwidXBkYXRlU3R5bGUiLCJvbGRTdHlsZSIsInN0eWxlIiwib2xkSGFzRGVsIiwicmVtb3ZlUHJvcGVydHkiLCJkZWxheWVkIiwibmFtZTIiLCJzZXRQcm9wZXJ0eSIsInN0eWxlTW9kdWxlIiwib2Zmc2V0TGVmdCIsImFtb3VudCIsImFwcGxpZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZXYiLCJmbGF0dGVuQW5kRmlsdGVyIiwiZmxhdHRlbmVkIiwiU3RyaW5nIiwianN4IiwiZmxhdENoaWxkcmVuIiwiX19hc3NpZ24iLCJ0aGlzIiwiYXNzaWduIiwidCIsImFyZ3VtZW50cyIsInAiLCJhcHBseSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiQ29tcG9uZW50IiwidXRpbGl0aWVzXzEiLCJnZW5lcmF0ZUlkIiwiaHRtbCIsImNzcyIsInN0YXRlIiwiY29uc3RydWN0b3IiLCJtb3VudCIsImF0dHJpYnV0ZSIsImNvbXBpbGUiLCJyZWdpc3RlciIsImNhbGxiYWNrIiwiY2FsbGJhY2tJZCIsImNhbGxiYWNrUHJvcHMiLCJwYWdlIiwiY2FsbGJhY2tzIiwiY2hpbGRDb21wb25lbnQiLCJlcnJvckxpbmVzIiwiRXJyb3IiLCJzdGFjayIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJ2YWx1ZSIsImV4dGVuZFN0YXRpY3MiLCJfX2V4dGVuZHMiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIlR5cGVFcnJvciIsIl9fIiwiQ2FyZCIsIl9zdXBlciIsImFsZXJ0VHlwZSIsImljb24iLCJoZWFkZXIiLCJDb250YWluZXIiLCJjb21wb25lbnRfMSIsImNhcmRfMSIsImNvbXBhY3QiLCJ1bm9waW5pb25hdGVkIiwiUGFnZSIsInNuYWJiZG9tXzEiLCJwYXRjaCIsImFkZFJvb3RJbWFnZSIsInJvb3RDb21wb25lbnQiLCJjdXJyZW50Tm9kZSIsInRleHRUb05vZGUiLCJpbmplY3RDYWxsYmFja3MiLCJjdXJyZW50VHJlZSIsImJvZHkiLCJyZW5kZXIiLCJ0cmVlIiwiZG9tIiwid3JhcHBlZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImZpcnN0Q2hpbGQiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhdHRyaWJ1dGVOYW1lIiwiY29uc29sZSIsImxvZyIsImltcG9ydENTUyIsImNkbiIsImxpbmsiLCJoZWFkIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkZWZpbml0aW9uIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyJdLCJtYXBwaW5ncyI6InVCQUVJQSxFQUVBQyxFLDRSQ3lDRyxNQUFNQyxFQUFhLENBQ3RCQyxjQTlDSixTQUF1QkMsRUFBU0MsR0FDNUIsT0FBT0MsU0FBU0gsY0FBY0MsRUFBU0MsSUE4Q3ZDRSxnQkE1Q0osU0FBeUJDLEVBQWNDLEVBQWVKLEdBQ2xELE9BQU9DLFNBQVNDLGdCQUFnQkMsRUFBY0MsRUFBZUosSUE0QzdESyxlQTFDSixTQUF3QkMsR0FDcEIsT0FBT0wsU0FBU0ksZUFBZUMsSUEwQy9CQyxjQXhDSixTQUF1QkQsR0FDbkIsT0FBT0wsU0FBU00sY0FBY0QsSUF3QzlCRSxhQXRDSixTQUFzQkMsRUFBWUMsRUFBU0MsR0FDdkNGLEVBQVdELGFBQWFFLEVBQVNDLElBc0NqQ0MsWUFwQ0osU0FBcUJDLEVBQU1DLEdBQ3ZCRCxFQUFLRCxZQUFZRSxJQW9DakJDLFlBbENKLFNBQXFCRixFQUFNQyxHQUN2QkQsRUFBS0UsWUFBWUQsSUFrQ2pCTCxXQWhDSixTQUFvQkksR0FDaEIsT0FBT0EsRUFBS0osWUFnQ1pPLFlBOUJKLFNBQXFCSCxHQUNqQixPQUFPQSxFQUFLRyxhQThCWmpCLFFBNUJKLFNBQWlCa0IsR0FDYixPQUFPQSxFQUFJbEIsU0E0QlhtQixlQTFCSixTQUF3QkwsRUFBTVAsR0FDMUJPLEVBQUtNLFlBQWNiLEdBMEJuQmMsZUF4QkosU0FBd0JQLEdBQ3BCLE9BQU9BLEVBQUtNLGFBd0JaRSxVQXRCSixTQUFtQlIsR0FDZixPQUF5QixJQUFsQkEsRUFBS1MsVUFzQlpDLE9BcEJKLFNBQWdCVixHQUNaLE9BQXlCLElBQWxCQSxFQUFLUyxVQW9CWkUsVUFsQkosU0FBbUJYLEdBQ2YsT0FBeUIsSUFBbEJBLEVBQUtTLFdDM0NULFNBQVNHLEVBQU1DLEVBQUtDLEVBQU1DLEVBQVV0QixFQUFNVyxHQUU3QyxNQUFPLENBQUVTLE1BQUtDLE9BQU1DLFdBQVV0QixPQUFNVyxNQUFLWSxTQURwQkMsSUFBVEgsT0FBcUJHLEVBQVlILEVBQUtFLEtDRC9DLE1BQU1FLEVBQVFDLE1BQU1DLFFBQ3BCLFNBQVNDLEVBQVVDLEdBQ3RCLE1BQW9CLGlCQUFOQSxHQUErQixpQkFBTkEsRUNDM0MsU0FBU0MsRUFBUUQsR0FDYixZQUFhTCxJQUFOSyxFQUVYLFNBQVNFLEVBQU1GLEdBQ1gsWUFBYUwsSUFBTkssRUFFWCxNQUFNRyxFQUFZYixFQUFNLEdBQUksR0FBSSxRQUFJSyxPQUFXQSxHQUMvQyxTQUFTUyxFQUFVQyxFQUFRQyxHQUN2QixJQUFJQyxFQUFJQyxFQUNSLE1BQU1DLEVBQVlKLEVBQU9YLE1BQVFZLEVBQU9aLElBQ2xDZ0IsR0FBbUMsUUFBdEJILEVBQUtGLEVBQU9iLFlBQXlCLElBQVBlLE9BQWdCLEVBQVNBLEVBQUdJLE9BQWdDLFFBQXRCSCxFQUFLRixFQUFPZCxZQUF5QixJQUFQZ0IsT0FBZ0IsRUFBU0EsRUFBR0csSUFFakosT0FEa0JOLEVBQU9kLE1BQVFlLEVBQU9mLEtBQ3BCa0IsR0FBYUMsRUFLckMsU0FBU0UsRUFBa0JuQixFQUFVb0IsRUFBVUMsR0FDM0MsSUFBSVAsRUFDSixNQUFNUSxFQUFNLEdBQ1osSUFBSyxJQUFJQyxFQUFJSCxFQUFVRyxHQUFLRixJQUFVRSxFQUFHLENBQ3JDLE1BQU10QixFQUE2QixRQUF0QmEsRUFBS2QsRUFBU3VCLFVBQXVCLElBQVBULE9BQWdCLEVBQVNBLEVBQUdiLFNBQzNEQyxJQUFSRCxJQUNBcUIsRUFBSXJCLEdBQU9zQixHQUduQixPQUFPRCxFQUVYLE1BQU1FLEVBQVEsQ0FDVixTQUNBLFNBQ0EsU0FDQSxVQUNBLE1BQ0EsUUFFRyxTQUFTQyxFQUFLQyxFQUFTQyxHQUMxQixJQUFJSixFQUNBSyxFQUNKLE1BQU1DLEVBQU0sQ0FDUkMsT0FBUSxHQUNSQyxPQUFRLEdBQ1JDLE9BQVEsR0FDUkMsUUFBUyxHQUNUQyxJQUFLLEdBQ0xDLEtBQU0sSUFFSkMsT0FBaUJsQyxJQUFYeUIsRUFBdUJBLEVBQVMxRCxFQUM1QyxJQUFLc0QsRUFBSSxFQUFHQSxFQUFJQyxFQUFNYSxTQUFVZCxFQUU1QixJQURBTSxFQUFJTCxFQUFNRCxJQUFNLEdBQ1hLLEVBQUksRUFBR0EsRUFBSUYsRUFBUVcsU0FBVVQsRUFBRyxDQUNqQyxNQUFNVSxFQUFPWixFQUFRRSxHQUFHSixFQUFNRCxTQUNqQnJCLElBQVRvQyxHQUNBVCxFQUFJTCxFQUFNRCxJQUFJZ0IsS0FBS0QsR0FJL0IsU0FBU0UsRUFBWW5ELEdBQ2pCLE1BQU1vRCxFQUFLcEQsRUFBSW9ELEdBQUssSUFBTXBELEVBQUlvRCxHQUFLLEdBRzdCQyxFQUFVckQsRUFBSXNELGFBQWEsU0FDM0JDLEVBQUlGLEVBQVUsSUFBTUEsRUFBUUcsTUFBTSxLQUFLQyxLQUFLLEtBQU8sR0FDekQsT0FBT2pELEVBQU11QyxFQUFJakUsUUFBUWtCLEdBQUswRCxjQUFnQk4sRUFBS0csRUFBRyxHQUFJLFFBQUkxQyxFQUFXYixHQUU3RSxTQUFTMkQsRUFBV0MsRUFBVUMsR0FDMUIsT0FBTyxXQUNILEdBQW9CLEtBQWRBLEVBQWlCLENBQ25CLE1BQU1DLEVBQVNmLEVBQUl2RCxXQUFXb0UsR0FDOUJiLEVBQUlwRCxZQUFZbUUsRUFBUUYsS0FJcEMsU0FBU0csRUFBVXZELEVBQU93RCxHQUN0QixJQUFJdkMsRUFBSUMsRUFDUixJQUFJUSxFQUNBeEIsRUFBT0YsRUFBTUUsS0FDakIsUUFBYUcsSUFBVEgsRUFBb0IsQ0FDcEIsTUFBTTBCLEVBQTRCLFFBQXBCWCxFQUFLZixFQUFLdUMsWUFBeUIsSUFBUHhCLE9BQWdCLEVBQVNBLEVBQUdXLEtBQ2xFaEIsRUFBTWdCLEtBQ05BLEVBQUs1QixHQUNMRSxFQUFPRixFQUFNRSxNQUdyQixNQUFNQyxFQUFXSCxFQUFNRyxTQUNqQkYsRUFBTUQsRUFBTUMsSUFDbEIsR0FBWSxNQUFSQSxFQUNJVSxFQUFRWCxFQUFNbkIsUUFDZG1CLEVBQU1uQixLQUFPLElBRWpCbUIsRUFBTVIsSUFBTStDLEVBQUl6RCxjQUFja0IsRUFBTW5CLFdBRW5DLFFBQVl3QixJQUFSSixFQUFtQixDQUV4QixNQUFNd0QsRUFBVXhELEVBQUl5RCxRQUFRLEtBQ3RCQyxFQUFTMUQsRUFBSXlELFFBQVEsSUFBS0QsR0FDMUJHLEVBQU9ILEVBQVUsRUFBSUEsRUFBVXhELEVBQUl1QyxPQUNuQ3FCLEVBQU1GLEVBQVMsRUFBSUEsRUFBUzFELEVBQUl1QyxPQUNoQ3NCLEdBQW1CLElBQWJMLElBQThCLElBQVpFLEVBQ3hCMUQsRUFBSThELE1BQU0sRUFBR0MsS0FBS0MsSUFBSUwsRUFBTUMsSUFDNUI1RCxFQUNBVCxFQUFPUSxFQUFNUixJQUNmb0IsRUFBTVYsSUFBU1UsRUFBT2MsRUFBSXhCLEVBQUtnRSxJQUN6QjNCLEVBQUk5RCxnQkFBZ0JpRCxFQUFHb0MsRUFBSzVELEdBQzVCcUMsRUFBSWxFLGNBQWN5RixFQUFLNUQsR0FLakMsSUFKSTBELEVBQU9DLEdBQ1ByRSxFQUFJMkUsYUFBYSxLQUFNbEUsRUFBSThELE1BQU1ILEVBQU8sRUFBR0MsSUFDM0NGLEVBQVMsR0FDVG5FLEVBQUkyRSxhQUFhLFFBQVNsRSxFQUFJOEQsTUFBTUYsRUFBTSxHQUFHTyxRQUFRLE1BQU8sTUFDM0QxQyxFQUFJLEVBQUdBLEVBQUlNLEVBQUlDLE9BQU9PLFNBQVVkLEVBQ2pDTSxFQUFJQyxPQUFPUCxHQUFHYixFQUFXYixHQUM3QixHQUFJLEVBQVNHLEdBQ1QsSUFBS3VCLEVBQUksRUFBR0EsRUFBSXZCLEVBQVNxQyxTQUFVZCxFQUFHLENBQ2xDLE1BQU0yQyxFQUFLbEUsRUFBU3VCLEdBQ1YsTUFBTjJDLEdBQ0E5QixFQUFJakQsWUFBWUUsRUFBSytELEVBQVVjLEVBQUliLFNBSXRDLEVBQWF4RCxFQUFNbkIsT0FDeEIwRCxFQUFJakQsWUFBWUUsRUFBSytDLEVBQUkzRCxlQUFlb0IsRUFBTW5CLE9BRWxELE1BQU00RCxFQUFPekMsRUFBTUUsS0FBS3VDLEtBQ3BCN0IsRUFBTTZCLEtBQ2lCLFFBQXRCdkIsRUFBS3VCLEVBQUtSLGNBQTJCLElBQVBmLEdBQXlCQSxFQUFHb0QsS0FBSzdCLEVBQU01QixFQUFXYixHQUM3RXlDLEVBQUs4QixRQUNMZixFQUFtQmQsS0FBSzFDLFNBS2hDQSxFQUFNUixJQUFNK0MsRUFBSTNELGVBQWVvQixFQUFNbkIsTUFFekMsT0FBT21CLEVBQU1SLElBRWpCLFNBQVNnRixFQUFVQyxFQUFXQyxFQUFRQyxFQUFRQyxFQUFVcEQsRUFBUWdDLEdBQzVELEtBQU9vQixHQUFZcEQsSUFBVW9ELEVBQVUsQ0FDbkMsTUFBTVAsRUFBS00sRUFBT0MsR0FDUixNQUFOUCxHQUNBOUIsRUFBSXhELGFBQWEwRixFQUFXbEIsRUFBVWMsRUFBSWIsR0FBcUJrQixJQUkzRSxTQUFTRyxFQUFrQjdFLEdBQ3ZCLElBQUlpQixFQUFJQyxFQUNSLE1BQU1oQixFQUFPRixFQUFNRSxLQUNuQixRQUFhRyxJQUFUSCxFQUFvQixDQUNvRyxRQUF2SGdCLEVBQXNFLFFBQWhFRCxFQUFLZixhQUFtQyxFQUFTQSxFQUFLdUMsWUFBeUIsSUFBUHhCLE9BQWdCLEVBQVNBLEVBQUdtQixlQUE0QixJQUFQbEIsR0FBeUJBLEVBQUdvRCxLQUFLckQsRUFBSWpCLEdBQ3JLLElBQUssSUFBSTBCLEVBQUksRUFBR0EsRUFBSU0sRUFBSUksUUFBUUksU0FBVWQsRUFDdENNLEVBQUlJLFFBQVFWLEdBQUcxQixHQUNuQixRQUF1QkssSUFBbkJMLEVBQU1HLFNBQ04sSUFBSyxJQUFJNEIsRUFBSSxFQUFHQSxFQUFJL0IsRUFBTUcsU0FBU3FDLFNBQVVULEVBQUcsQ0FDNUMsTUFBTTFDLEVBQVFXLEVBQU1HLFNBQVM0QixHQUNoQixNQUFUMUMsR0FBa0MsaUJBQVZBLEdBQ3hCd0YsRUFBa0J4RixLQU10QyxTQUFTeUYsRUFBYUwsRUFBV0UsRUFBUUMsRUFBVXBELEdBRS9DLElBREEsSUFBSVAsRUFBSUMsRUFDRDBELEdBQVlwRCxJQUFVb0QsRUFBVSxDQUNuQyxJQUFJdkIsRUFDQTBCLEVBQ0osTUFBTVYsRUFBS00sRUFBT0MsR0FDbEIsR0FBVSxNQUFOUCxFQUNBLEdBQUl6RCxFQUFNeUQsRUFBR3BFLEtBQU0sQ0FDZjRFLEVBQWtCUixHQUNsQmhCLEVBQVlyQixFQUFJRyxPQUFPSyxPQUFTLEVBQ2hDdUMsRUFBSzVCLEVBQVdrQixFQUFHN0UsSUFBSzZELEdBQ3hCLElBQUssSUFBSTNCLEVBQUksRUFBR0EsRUFBSU0sRUFBSUcsT0FBT0ssU0FBVWQsRUFDckNNLEVBQUlHLE9BQU9ULEdBQUcyQyxFQUFJVSxHQUN0QixNQUFNQyxFQUE0SCxRQUE5RzlELEVBQWdFLFFBQTFERCxFQUFLb0QsYUFBK0IsRUFBU0EsRUFBR25FLFlBQXlCLElBQVBlLE9BQWdCLEVBQVNBLEVBQUd3QixZQUF5QixJQUFQdkIsT0FBZ0IsRUFBU0EsRUFBR2lCLE9BQ2xLdkIsRUFBTW9FLEdBQ05BLEVBQVdYLEVBQUlVLEdBR2ZBLFNBS0p4QyxFQUFJcEQsWUFBWXNGLEVBQVdKLEVBQUc3RSxNQXdGOUMsU0FBU3lGLEVBQVdDLEVBQVVsRixFQUFPd0QsR0FDakMsSUFBSXZDLEVBQUlDLEVBQUlpRSxFQUFJQyxFQUFJQyxFQUNwQixNQUFNNUMsRUFBNkIsUUFBckJ4QixFQUFLakIsRUFBTUUsWUFBeUIsSUFBUGUsT0FBZ0IsRUFBU0EsRUFBR3dCLEtBQ0YsUUFBcEV2QixFQUFLdUIsYUFBbUMsRUFBU0EsRUFBSzZDLGdCQUE2QixJQUFQcEUsR0FBeUJBLEVBQUdvRCxLQUFLN0IsRUFBTXlDLEVBQVVsRixHQUM5SCxNQUFNUixFQUFPUSxFQUFNUixJQUFNMEYsRUFBUzFGLElBQzVCK0YsRUFBUUwsRUFBUy9FLFNBQ2pCa0UsRUFBS3JFLEVBQU1HLFNBQ2pCLEdBQUkrRSxJQUFhbEYsRUFBakIsQ0FFQSxRQUFtQkssSUFBZkwsRUFBTUUsS0FBb0IsQ0FDMUIsSUFBSyxJQUFJd0IsRUFBSSxFQUFHQSxFQUFJTSxFQUFJRSxPQUFPTSxTQUFVZCxFQUNyQ00sRUFBSUUsT0FBT1IsR0FBR3dELEVBQVVsRixHQUNxRCxRQUFoRm9GLEVBQWdDLFFBQTFCRCxFQUFLbkYsRUFBTUUsS0FBS3VDLFlBQXlCLElBQVAwQyxPQUFnQixFQUFTQSxFQUFHakQsY0FBMkIsSUFBUGtELEdBQXlCQSxFQUFHZCxLQUFLYSxFQUFJRCxFQUFVbEYsR0FFeElXLEVBQVFYLEVBQU1uQixNQUNWK0IsRUFBTTJFLElBQVUzRSxFQUFNeUQsR0FDbEJrQixJQUFVbEIsR0FuRzFCLFNBQXdCSSxFQUFXYyxFQUFPQyxFQUFPaEMsR0FDN0MsSUFRSWlDLEVBQ0FDLEVBQ0FDLEVBQ0FqQixFQVhBa0IsRUFBYyxFQUNkQyxFQUFjLEVBQ2RDLEVBQVlQLEVBQU0vQyxPQUFTLEVBQzNCdUQsRUFBZ0JSLEVBQU0sR0FDdEJTLEVBQWNULEVBQU1PLEdBQ3BCRyxFQUFZVCxFQUFNaEQsT0FBUyxFQUMzQjBELEVBQWdCVixFQUFNLEdBQ3RCVyxFQUFjWCxFQUFNUyxHQUt4QixLQUFPTCxHQUFlRSxHQUFhRCxHQUFlSSxHQUN6QixNQUFqQkYsRUFDQUEsRUFBZ0JSLElBQVFLLEdBRUosTUFBZkksRUFDTEEsRUFBY1QsSUFBUU8sR0FFQSxNQUFqQkksRUFDTEEsRUFBZ0JWLElBQVFLLEdBRUosTUFBZk0sRUFDTEEsRUFBY1gsSUFBUVMsR0FFakJuRixFQUFVaUYsRUFBZUcsSUFDOUJqQixFQUFXYyxFQUFlRyxFQUFlMUMsR0FDekN1QyxFQUFnQlIsSUFBUUssR0FDeEJNLEVBQWdCVixJQUFRSyxJQUVuQi9FLEVBQVVrRixFQUFhRyxJQUM1QmxCLEVBQVdlLEVBQWFHLEVBQWEzQyxHQUNyQ3dDLEVBQWNULElBQVFPLEdBQ3RCSyxFQUFjWCxJQUFRUyxJQUVqQm5GLEVBQVVpRixFQUFlSSxJQUU5QmxCLEVBQVdjLEVBQWVJLEVBQWEzQyxHQUN2Q2pCLEVBQUl4RCxhQUFhMEYsRUFBV3NCLEVBQWN2RyxJQUFLK0MsRUFBSWhELFlBQVl5RyxFQUFZeEcsTUFDM0V1RyxFQUFnQlIsSUFBUUssR0FDeEJPLEVBQWNYLElBQVFTLElBRWpCbkYsRUFBVWtGLEVBQWFFLElBRTVCakIsRUFBV2UsRUFBYUUsRUFBZTFDLEdBQ3ZDakIsRUFBSXhELGFBQWEwRixFQUFXdUIsRUFBWXhHLElBQUt1RyxFQUFjdkcsS0FDM0R3RyxFQUFjVCxJQUFRTyxHQUN0QkksRUFBZ0JWLElBQVFLLFVBR0p4RixJQUFoQm9GLElBQ0FBLEVBQWNuRSxFQUFrQmlFLEVBQU9LLEVBQWFFLElBRXhESixFQUFXRCxFQUFZUyxFQUFjOUYsS0FDakNPLEVBQVErRSxHQUVSbkQsRUFBSXhELGFBQWEwRixFQUFXbEIsRUFBVTJDLEVBQWUxQyxHQUFxQnVDLEVBQWN2RyxNQUd4Rm1HLEVBQVlKLEVBQU1HLEdBQ2RDLEVBQVUxRixNQUFRaUcsRUFBY2pHLElBQ2hDc0MsRUFBSXhELGFBQWEwRixFQUFXbEIsRUFBVTJDLEVBQWUxQyxHQUFxQnVDLEVBQWN2RyxNQUd4RnlGLEVBQVdVLEVBQVdPLEVBQWUxQyxHQUNyQytCLEVBQU1HLFFBQVlyRixFQUNsQmtDLEVBQUl4RCxhQUFhMEYsRUFBV2tCLEVBQVVuRyxJQUFLdUcsRUFBY3ZHLE9BR2pFMEcsRUFBZ0JWLElBQVFLLEtBRzVCRCxHQUFlRSxHQUFhRCxHQUFlSSxLQUN2Q0wsRUFBY0UsR0FDZHBCLEVBQWlDLE1BQXhCYyxFQUFNUyxFQUFZLEdBQWEsS0FBT1QsRUFBTVMsRUFBWSxHQUFHekcsSUFDcEVnRixFQUFVQyxFQUFXQyxFQUFRYyxFQUFPSyxFQUFhSSxFQUFXekMsSUFHNURzQixFQUFhTCxFQUFXYyxFQUFPSyxFQUFhRSxJQXFCeENNLENBQWU1RyxFQUFLK0YsRUFBT2xCLEVBQUliLEdBRTlCNUMsRUFBTXlELElBQ1B6RCxFQUFNc0UsRUFBU3JHLE9BQ2YwRCxFQUFJOUMsZUFBZUQsRUFBSyxJQUM1QmdGLEVBQVVoRixFQUFLLEtBQU02RSxFQUFJLEVBQUdBLEVBQUc3QixPQUFTLEVBQUdnQixJQUV0QzVDLEVBQU0yRSxHQUNYVCxFQUFhdEYsRUFBSytGLEVBQU8sRUFBR0EsRUFBTS9DLE9BQVMsR0FFdEM1QixFQUFNc0UsRUFBU3JHLE9BQ3BCMEQsRUFBSTlDLGVBQWVELEVBQUssSUFHdkIwRixFQUFTckcsT0FBU21CLEVBQU1uQixPQUN6QitCLEVBQU0yRSxJQUNOVCxFQUFhdEYsRUFBSytGLEVBQU8sRUFBR0EsRUFBTS9DLE9BQVMsR0FFL0NELEVBQUk5QyxlQUFlRCxFQUFLUSxFQUFNbkIsT0FFb0MsUUFBckV3RyxFQUFLNUMsYUFBbUMsRUFBU0EsRUFBSzRELGlCQUE4QixJQUFQaEIsR0FBeUJBLEVBQUdmLEtBQUs3QixFQUFNeUMsRUFBVWxGLElBRW5JLE9BQU8sU0FBZWtGLEVBQVVsRixHQUM1QixJQUFJMEIsRUFBR2xDLEVBQUs4RCxFQUNaLE1BQU1FLEVBQXFCLEdBQzNCLElBQUs5QixFQUFJLEVBQUdBLEVBQUlNLEVBQUlLLElBQUlHLFNBQVVkLEVBQzlCTSxFQUFJSyxJQUFJWCxLQWdCWixJQTVUUixTQUFpQjFCLEdBQ2IsWUFBcUJLLElBQWRMLEVBQU1DLElBNFNKcUcsQ0FBUXBCLEtBQ1RBLEVBQVd2QyxFQUFZdUMsSUFFdkJwRSxFQUFVb0UsRUFBVWxGLEdBQ3BCaUYsRUFBV0MsRUFBVWxGLEVBQU93RCxJQUc1QmhFLEVBQU0wRixFQUFTMUYsSUFDZjhELEVBQVNmLEVBQUl2RCxXQUFXUSxHQUN4QitELEVBQVV2RCxFQUFPd0QsR0FDRixPQUFYRixJQUNBZixFQUFJeEQsYUFBYXVFLEVBQVF0RCxFQUFNUixJQUFLK0MsRUFBSWhELFlBQVlDLElBQ3BEc0YsRUFBYXhCLEVBQVEsQ0FBQzRCLEdBQVcsRUFBRyxLQUd2Q3hELEVBQUksRUFBR0EsRUFBSThCLEVBQW1CaEIsU0FBVWQsRUFDekM4QixFQUFtQjlCLEdBQUd4QixLQUFLdUMsS0FBSzhCLE9BQU9mLEVBQW1COUIsSUFFOUQsSUFBS0EsRUFBSSxFQUFHQSxFQUFJTSxFQUFJTSxLQUFLRSxTQUFVZCxFQUMvQk0sRUFBSU0sS0FBS1osS0FDYixPQUFPMUIsR0NoVmYsU0FBU3VHLEVBQU1yRyxFQUFNQyxFQUFVRixHQUUzQixHQURBQyxFQUFLZ0UsR0FBSyw2QkFDRSxrQkFBUmpFLFFBQXdDSSxJQUFiRixFQUMzQixJQUFLLElBQUl1QixFQUFJLEVBQUdBLEVBQUl2QixFQUFTcUMsU0FBVWQsRUFBRyxDQUN0QyxNQUFNOEUsRUFBWXJHLEVBQVN1QixHQUFHeEIsVUFDWkcsSUFBZG1HLEdBQ0FELEVBQU1DLEVBQVdyRyxFQUFTdUIsR0FBR3ZCLFNBQVVBLEVBQVN1QixHQUFHekIsTUFLNUQsU0FBU3dHLEVBQUV4RyxFQUFLeUcsRUFBRzNELEdBQ3RCLElBQ0k1QyxFQUNBdEIsRUFDQTZDLEVBSEF4QixFQUFPLEdBZ0NYLFFBNUJVRyxJQUFOMEMsR0FDVSxPQUFOMkQsSUFDQXhHLEVBQU93RyxHQUVQLEVBQVMzRCxHQUNUNUMsRUFBVzRDLEVBRU4sRUFBYUEsR0FDbEJsRSxFQUFPa0UsRUFFRkEsR0FBS0EsRUFBRTlDLE1BQ1pFLEVBQVcsQ0FBQzRDLEtBR1gyRCxVQUNELEVBQVNBLEdBQ1R2RyxFQUFXdUcsRUFFTixFQUFhQSxHQUNsQjdILEVBQU82SCxFQUVGQSxHQUFLQSxFQUFFekcsSUFDWkUsRUFBVyxDQUFDdUcsR0FHWnhHLEVBQU93RyxRQUdFckcsSUFBYkYsRUFDQSxJQUFLdUIsRUFBSSxFQUFHQSxFQUFJdkIsRUFBU3FDLFNBQVVkLEVBQzNCLEVBQWF2QixFQUFTdUIsTUFDdEJ2QixFQUFTdUIsR0FBSzFCLE9BQU1LLE9BQVdBLE9BQVdBLEVBQVdGLEVBQVN1QixRQUFJckIsSUFTOUUsTUFOZSxNQUFYSixFQUFJLElBQ08sTUFBWEEsRUFBSSxJQUNPLE1BQVhBLEVBQUksSUFDWSxJQUFmQSxFQUFJdUMsUUFBMkIsTUFBWHZDLEVBQUksSUFBeUIsTUFBWEEsRUFBSSxJQUMzQ3NHLEVBQU1yRyxFQUFNQyxFQUFVRixHQUVuQkQsRUFBTUMsRUFBS0MsRUFBTUMsRUFBVXRCLE9BQU13QixHQ3pENUMsU0FBU3NHLEVBQVkzRyxFQUFPNEcsR0FDeEI1RyxFQUFNRSxLQUFLMkcsR0FBS0QsRUFBTTFHLEtBQUsyRyxHQUMzQjdHLEVBQU1FLEtBQUs0RyxLQUFPRixFQUFNMUcsS0FBSzRHLEtBQzdCRixFQUFNMUcsS0FBT0YsRUFBTUUsS0FDbkIwRyxFQUFNekcsU0FBV0gsRUFBTUcsU0FDdkJ5RyxFQUFNL0gsS0FBT21CLEVBQU1uQixLQUNuQitILEVBQU1wSCxJQUFNUSxFQUFNUixJQUV0QixTQUFTLEVBQUtvSCxHQUNWLE1BQU1HLEVBQU1ILEVBQU0xRyxLQUVsQnlHLEVBRGNJLEVBQUlGLE1BQU1FLEVBQUlELE1BQ1RGLEdBRXZCLFNBQVN0QixFQUFTSixFQUFVMEIsR0FDeEIsSUFBSWxGLEVBQ0osTUFBTXNGLEVBQU05QixFQUFTaEYsS0FDZjZHLEVBQU1ILEVBQU0xRyxLQUNaK0csRUFBVUQsRUFBSUYsS0FDZEEsRUFBT0MsRUFBSUQsS0FDakIsR0FBSUUsRUFBSUgsS0FBT0UsRUFBSUYsSUFBTUksRUFBUXpFLFNBQVdzRSxFQUFLdEUsT0FBakQsQ0FJQSxJQUFLZCxFQUFJLEVBQUdBLEVBQUlvRixFQUFLdEUsU0FBVWQsRUFDM0IsR0FBSXVGLEVBQVF2RixLQUFPb0YsRUFBS3BGLEdBRXBCLFlBREFpRixFQUFZSSxFQUFJRixNQUFNQyxHQUFPRixHQUlyQ0QsRUFBWXpCLEVBQVUwQixRQVRsQkQsRUFBWUksRUFBSUYsTUFBTUMsR0FBT0YsR0FXOUIsTUFBTUEsRUFBUSxTQUFlM0csRUFBS0csRUFBS3lHLEVBQUlDLEdBTTlDLFlBTGF6RyxJQUFUeUcsSUFDQUEsRUFBT0QsRUFDUEEsRUFBS3pHLEVBQ0xBLE9BQU1DLEdBRUhvRyxFQUFFeEcsRUFBSyxDQUNWRyxJQUFLQSxFQUNMcUMsS0FBTSxDQUFFYixLQUFJLGNBQ1ppRixHQUFJQSxFQUNKQyxLQUFNQSxLQzFDZCxTQUFTekUsRUFBSXJDLEVBQU9rSCxHQUNoQixNQUFNQyxFQUFhbkgsRUFBTUUsS0FBS2lILFdBRTlCRCxFQUFTaEgsS0FBS2lILFdBQVdDLFlBQWNELEVBQVdDLFlBQ2xERixFQUFTaEgsS0FBS2lILFdBQVdFLEtBQU9GLEVBQVdFLEtBRTNDckgsRUFBTVIsSUFBTVEsRUFBTUUsS0FBS2lILFdBQVdFLEtBRXRDLFNBQVMvRSxFQUFLZ0YsRUFBR3RILEdBRWJBLEVBQU1SLElBQU1RLEVBQU1FLEtBQUtpSCxXQUFXQyxZQUV0QyxTQUFTaEYsRUFBUXBDLFFBRUtLLElBQWRMLEVBQU1SLEtBQ05RLEVBQU1SLElBQUlSLFdBQVdHLFlBQVlhLEVBQU1SLEtBRzNDUSxFQUFNUixJQUFNUSxFQUFNRSxLQUFLaUgsV0FBV0UsS0FFdEMsU0FBU3BGLEVBQU9xRixFQUFHdEgsR0FDZixNQUFNcUgsRUFBT3JILEVBQU1SLElBQ2IySCxFQUFhbkgsRUFBTUUsS0FBS2lILFdBQ3hCQyxFQUFjNUksU0FBU0gsY0FBYyxRQUczQzJCLEVBQU1SLElBQU00SCxFQUNaRCxFQUFXSSxPQUFPakksWUFBWStILEdBQzlCRixFQUFXRSxLQUFPQSxFQUNsQkYsRUFBV0MsWUFBY0EsRUFFdEIsU0FBU0ksRUFBU0QsRUFBUXZILFFBQ1ZLLElBQWZMLEVBQU1FLE9BQ05GLEVBQU1FLEtBQU8sU0FDT0csSUFBcEJMLEVBQU1FLEtBQUt1QyxPQUNYekMsRUFBTUUsS0FBS3VDLEtBQU8sSUFDdEIsTUFBTXZDLEVBQU9GLEVBQU1FLEtBQ2J1QyxFQUFPekMsRUFBTUUsS0FBS3VDLEtBTXhCLE9BTEF2QyxFQUFLaUgsV0FBYSxDQUFFSSxPQUFRQSxFQUFRSCxpQkFBYS9HLEVBQVdnSCxVQUFNaEgsR0FDbEVvQyxFQUFLUixPQUFTQSxFQUNkUSxFQUFLNkMsU0FBV2pELEVBQ2hCSSxFQUFLNEQsVUFBWS9ELEVBQ2pCRyxFQUFLTCxRQUFVQSxFQUNScEMsRUN6Q0osU0FBU3lILEVBQVFySSxFQUFNMEMsR0FDMUIsTUFBTVMsT0FBaUJsQyxJQUFYeUIsRUFBdUJBLEVBQVMxRCxFQUM1QyxJQUFJUyxFQUNKLEdBQUkwRCxFQUFJM0MsVUFBVVIsR0FBTyxDQUNyQixNQUFNd0QsRUFBS3hELEVBQUt3RCxHQUFLLElBQU14RCxFQUFLd0QsR0FBSyxHQUMvQjhFLEVBQUt0SSxFQUFLMEQsYUFBYSxTQUN2QkMsRUFBSTJFLEVBQUssSUFBTUEsRUFBRzFFLE1BQU0sS0FBS0MsS0FBSyxLQUFPLEdBQ3pDaEQsRUFBTXNDLEVBQUlqRSxRQUFRYyxHQUFNOEQsY0FBZ0JOLEVBQUtHLEVBQzdDNEUsRUFBUSxHQUNSeEgsRUFBVyxHQUNqQixJQUFJeUgsRUFDQWxHLEVBQUdtRyxFQUNQLE1BQU1DLEVBQVcxSSxFQUFLMkksV0FDaEJDLEVBQWM1SSxFQUFLNkksV0FDekIsSUFBS3ZHLEVBQUksRUFBR21HLEVBQUlDLEVBQVN0RixPQUFRZCxFQUFJbUcsRUFBR25HLElBQ3BDa0csRUFBT0UsRUFBU3BHLEdBQUd3RyxTQUNOLE9BQVROLEdBQTBCLFVBQVRBLElBQ2pCRCxFQUFNQyxHQUFRRSxFQUFTcEcsR0FBR3lHLFdBR2xDLElBQUt6RyxFQUFJLEVBQUdtRyxFQUFJRyxFQUFZeEYsT0FBUWQsRUFBSW1HLEVBQUduRyxJQUN2Q3ZCLEVBQVN1QyxLQUFLK0UsRUFBUU8sRUFBWXRHLEdBQUlJLElBRTFDLE9BQU85QixFQUFNQyxFQUFLLENBQUUwSCxTQUFTeEgsT0FBVUUsRUFBV2pCLEdBRWpELE9BQUltRCxFQUFJekMsT0FBT1YsSUFDaEJQLEVBQU8wRCxFQUFJNUMsZUFBZVAsR0FDbkJZLE9BQU1LLE9BQVdBLE9BQVdBLEVBQVd4QixFQUFNTyxJQUUvQ21ELEVBQUl4QyxVQUFVWCxJQUNuQlAsRUFBTzBELEVBQUk1QyxlQUFlUCxHQUNuQlksRUFBTSxJQUFLLEdBQUksR0FBSW5CLEVBQU1PLElBR3pCWSxFQUFNLEdBQUksR0FBSSxRQUFJSyxFQUFXakIsR0NoQzVDLFNBQVNnSixFQUFZbEQsRUFBVWxGLEdBQzNCLElBQUlJLEVBQ0osTUFBTVosRUFBTVEsRUFBTVIsSUFDbEIsSUFBSTZJLEVBQVduRCxFQUFTaEYsS0FBS3lILE1BQ3pCQSxFQUFRM0gsRUFBTUUsS0FBS3lILE1BQ3ZCLElBQUtVLEdBQWFWLElBRWRVLElBQWFWLEVBQWpCLENBS0EsSUFBS3ZILEtBSExpSSxFQUFXQSxHQUFZLEdBQ3ZCVixFQUFRQSxHQUFTLEdBRUxBLEVBQU8sQ0FDZixNQUFNWixFQUFNWSxFQUFNdkgsR0FDTmlJLEVBQVNqSSxLQUNUMkcsS0FDSSxJQUFSQSxFQUNBdkgsRUFBSTJFLGFBQWEvRCxFQUFLLEtBRVQsSUFBUjJHLEVBQ0x2SCxFQUFJOEksZ0JBQWdCbEksR0FyQnRCLE1Bd0JNQSxFQUFJbUksV0FBVyxHQUNmL0ksRUFBSTJFLGFBQWEvRCxFQUFLMkcsR0ExQnhCLEtBNEJPM0csRUFBSW1JLFdBQVcsR0FFcEIvSSxFQUFJZ0osZUEvQlYsdUNBK0JnQ3BJLEVBQUsyRyxHQTlCakMsS0FnQ08zRyxFQUFJbUksV0FBVyxHQUVwQi9JLEVBQUlnSixlQXBDUiwrQkFvQ2dDcEksRUFBSzJHLEdBR2pDdkgsRUFBSTJFLGFBQWEvRCxFQUFLMkcsSUFRdEMsSUFBSzNHLEtBQU9pSSxFQUNGakksS0FBT3VILEdBQ1RuSSxFQUFJOEksZ0JBQWdCbEksSUFJekIsTUFBTXFJLEVBQW1CLENBQzVCeEcsT0FBUW1HLEVBQ1JsRyxPQUFRa0csR0N2RFosU0FBU00sRUFBWXhELEVBQVVsRixHQUMzQixJQUFJK0csRUFDQWEsRUFDSixNQUFNcEksRUFBTVEsRUFBTVIsSUFDbEIsSUFBSW1KLEVBQVd6RCxFQUFTaEYsS0FBSzBJLE1BQ3pCQyxFQUFRN0ksRUFBTUUsS0FBSzBJLE1BQ3ZCLElBQUtELEdBQWFFLElBRWRGLElBQWFFLEVBQWpCLENBSUEsSUFBS2pCLEtBRkxlLEVBQVdBLEdBQVksR0FDdkJFLEVBQVFBLEdBQVMsR0FDSkYsRUFDTEEsRUFBU2YsS0FBVWtCLE9BQU9DLFVBQVVDLGVBQWUxRSxLQUFLdUUsRUFBT2pCLElBRS9EcEksRUFBSXlKLFVBQVU5RyxPQUFPeUYsR0FHN0IsSUFBS0EsS0FBUWlCLEVBQ1Q5QixFQUFNOEIsRUFBTWpCLEdBQ1JiLElBQVE0QixFQUFTZixJQUNqQnBJLEVBQUl5SixVQUFVbEMsRUFBTSxNQUFRLFVBQVVhLElBSTNDLE1BQU1zQixFQUFjLENBQUVqSCxPQUFReUcsRUFBYXhHLE9BQVF3RyxHQ3pCcERTLEVBQWEsU0FDbkIsU0FBU0MsRUFBY2xFLEVBQVVsRixHQUM3QixNQUFNUixFQUFNUSxFQUFNUixJQUNsQixJQUVJWSxFQUZBaUosRUFBYW5FLEVBQVNoRixLQUFLb0osUUFDM0JBLEVBQVV0SixFQUFNRSxLQUFLb0osUUFFekIsSUFBS0QsSUFBZUMsRUFDaEIsT0FDSixHQUFJRCxJQUFlQyxFQUNmLE9BQ0pELEVBQWFBLEdBQWMsR0FDM0JDLEVBQVVBLEdBQVcsR0FDckIsTUFBTUMsRUFBSS9KLEVBQUk4SixRQUNkLElBQUtsSixLQUFPaUosRUFDSEMsRUFBUWxKLEtBQ0xtSixFQUNJbkosS0FBT21KLFVBQ0FBLEVBQUVuSixHQUliWixFQUFJOEksZ0JBQWdCLFFBQVVsSSxFQUFJZ0UsUUFBUStFLEVBQVksT0FBT2pHLGdCQUl6RSxJQUFLOUMsS0FBT2tKLEVBQ0pELEVBQVdqSixLQUFTa0osRUFBUWxKLEtBQ3hCbUosRUFDQUEsRUFBRW5KLEdBQU9rSixFQUFRbEosR0FHakJaLEVBQUkyRSxhQUFhLFFBQVUvRCxFQUFJZ0UsUUFBUStFLEVBQVksT0FBT2pHLGNBQWVvRyxFQUFRbEosS0FLMUYsTUFBTW9KLEVBQWdCLENBQ3pCdkgsT0FBUW1ILEVBQ1JsSCxPQUFRa0gsR0N0Q1osU0FBU0ssRUFBY0MsRUFBUzFKLEVBQU8ySixHQUNuQyxHQUF1QixtQkFBWkQsRUFFUEEsRUFBUXBGLEtBQUt0RSxFQUFPMkosRUFBTzNKLFFBRTFCLEdBQXVCLGlCQUFaMEosRUFFWixJQUFLLElBQUloSSxFQUFJLEVBQUdBLEVBQUlnSSxFQUFRbEgsT0FBUWQsSUFDaEMrSCxFQUFjQyxFQUFRaEksR0FBSTFCLEVBQU8ySixHQUk3QyxTQUFTQyxFQUFZRCxFQUFPM0osR0FDeEIsTUFBTTRILEVBQU8rQixFQUFNRSxLQUNiQyxFQUFLOUosRUFBTUUsS0FBSzRKLEdBRWxCQSxHQUFNQSxFQUFHbEMsSUFDVDZCLEVBQWNLLEVBQUdsQyxHQUFPNUgsRUFBTzJKLEdBUXZDLFNBQVNJLEVBQXFCN0UsRUFBVWxGLEdBQ3BDLE1BQU1nSyxFQUFROUUsRUFBU2hGLEtBQUs0SixHQUN0QkcsRUFBYy9FLEVBQVNnRixTQUN2QkMsRUFBU2pGLEVBQVMxRixJQUNsQnNLLEVBQUs5SixHQUFTQSxFQUFNRSxLQUFLNEosR0FDekJ0SyxFQUFPUSxHQUFTQSxFQUFNUixJQUM1QixJQUFJb0ksRUFFSixHQUFJb0MsSUFBVUYsRUFBZCxDQUlBLEdBQUlFLEdBQVNDLEVBRVQsR0FBS0gsRUFPRCxJQUFLbEMsS0FBUW9DLEVBRUpGLEVBQUdsQyxJQUNKdUMsRUFBT0Msb0JBQW9CeEMsRUFBTXFDLEdBQWEsUUFUdEQsSUFBS3JDLEtBQVFvQyxFQUVURyxFQUFPQyxvQkFBb0J4QyxFQUFNcUMsR0FBYSxHQWExRCxHQUFJSCxFQUFJLENBRUosTUFBTUksRUFBWWxLLEVBQU1rSyxTQUNwQmhGLEVBQVNnRixVQXJDVixTQUFTUixFQUFRQyxHQUNwQkMsRUFBWUQsRUFBT0QsRUFBUTFKLFFBd0MzQixHQUZBa0ssRUFBU2xLLE1BQVFBLEVBRVpnSyxFQU9ELElBQUtwQyxLQUFRa0MsRUFFSkUsRUFBTXBDLElBQ1BwSSxFQUFJNkssaUJBQWlCekMsRUFBTXNDLEdBQVUsUUFUN0MsSUFBS3RDLEtBQVFrQyxFQUVUdEssRUFBSTZLLGlCQUFpQnpDLEVBQU1zQyxHQUFVLEtBYTlDLE1BQU1JLEVBQXVCLENBQ2hDckksT0FBUThILEVBQ1I3SCxPQUFRNkgsRUFDUjNILFFBQVMySCxHQ2pGYixTQUFTUSxFQUFZckYsRUFBVWxGLEdBQzNCLElBQUlJLEVBQ0EyRyxFQUNBQyxFQUNKLE1BQU14SCxFQUFNUSxFQUFNUixJQUNsQixJQUFJZ0wsRUFBV3RGLEVBQVNoRixLQUFLdUssTUFDekJBLEVBQVF6SyxFQUFNRSxLQUFLdUssTUFDdkIsSUFBS0QsR0FBYUMsSUFFZEQsSUFBYUMsRUFJakIsSUFBS3JLLEtBRkxvSyxFQUFXQSxHQUFZLEdBQ3ZCQyxFQUFRQSxHQUFTLEdBQ0xBLEVBQ1IxRCxFQUFNMEQsRUFBTXJLLEdBQ1o0RyxFQUFNd0QsRUFBU3BLLEdBQ1g0RyxJQUFRRCxHQUFnQixVQUFSM0csR0FBbUJaLEVBQUlZLEtBQVMyRyxJQUNoRHZILEVBQUlZLEdBQU8yRyxHQUloQixNQUFNMkQsRUFBYyxDQUFFekksT0FBUXNJLEVBQWFySSxPQUFRcUksR0NwQnBESSxFQUF5QixvQkFBWEMsUUFDaEJBLE9BQU9DLHNCQUFzQkMsS0FBS0YsU0FDbENHLFdBTUosSUFBSUMsR0FBZSxFQUNuQixTQUFTQyxFQUFhQyxFQUFLQyxFQUFNQyxHQU5mLElBQVV2RSxJQU9kLFdBQ05xRSxFQUFJQyxHQUFRQyxHQVBoQlQsR0FBSSxXQUNBQSxFQUFJOUQsTUFTWixTQUFTd0UsRUFBWW5HLEVBQVVsRixHQUMzQixJQUFJK0csRUFDQWEsRUFDSixNQUFNcEksRUFBTVEsRUFBTVIsSUFDbEIsSUFBSThMLEVBQVdwRyxFQUFTaEYsS0FBS3FMLE1BQ3pCQSxFQUFRdkwsRUFBTUUsS0FBS3FMLE1BQ3ZCLElBQUtELElBQWFDLEVBQ2QsT0FDSixHQUFJRCxJQUFhQyxFQUNiLE9BQ0pELEVBQVdBLEdBQVksR0FDdkJDLEVBQVFBLEdBQVMsR0FDakIsTUFBTUMsRUFBWSxZQUFhRixFQUMvQixJQUFLMUQsS0FBUTBELEVBQ0pDLEVBQU0zRCxLQUNTLE1BQVpBLEVBQUssSUFBMEIsTUFBWkEsRUFBSyxHQUN4QnBJLEVBQUkrTCxNQUFNRSxlQUFlN0QsR0FHekJwSSxFQUFJK0wsTUFBTTNELEdBQVEsSUFJOUIsSUFBS0EsS0FBUTJELEVBRVQsR0FEQXhFLEVBQU13RSxFQUFNM0QsR0FDQyxZQUFUQSxHQUFzQjJELEVBQU1HLFFBQzVCLElBQUssTUFBTUMsS0FBU0osRUFBTUcsUUFDdEIzRSxFQUFNd0UsRUFBTUcsUUFBUUMsR0FDZkgsR0FBYXpFLElBQVF1RSxFQUFTSSxRQUFRQyxJQUN2Q1YsRUFBYXpMLEVBQUkrTCxNQUFPSSxFQUFPNUUsT0FJekIsV0FBVGEsR0FBcUJiLElBQVF1RSxFQUFTMUQsS0FDM0IsTUFBWkEsRUFBSyxJQUEwQixNQUFaQSxFQUFLLEdBQ3hCcEksRUFBSStMLE1BQU1LLFlBQVloRSxFQUFNYixHQUc1QnZILEVBQUkrTCxNQUFNM0QsR0FBUWIsR0FxRDNCLE1BQU04RSxFQUFjLENBQ3ZCeEosSUFKSixXQUNJMkksR0FBZSxHQUlmL0ksT0FBUW9KLEVBQ1JuSixPQUFRbUosRUFDUmpKLFFBcERKLFNBQTJCcEMsR0FDdkIsSUFBSXVMLEVBQ0EzRCxFQUNKLE1BQU1wSSxFQUFNUSxFQUFNUixJQUNaa0IsRUFBSVYsRUFBTUUsS0FBS3FMLE1BQ3JCLEdBQUs3SyxJQUFPNkssRUFBUTdLLEVBQUUwQixTQUV0QixJQUFLd0YsS0FBUTJELEVBQ1QvTCxFQUFJK0wsTUFBTTNELEdBQVEyRCxFQUFNM0QsSUE2QzVCekYsT0ExQ0osU0FBMEJuQyxFQUFPK0UsR0FDN0IsTUFBTXJFLEVBQUlWLEVBQU1FLEtBQUtxTCxNQUNyQixJQUFLN0ssSUFBTUEsRUFBRXlCLE9BRVQsWUFEQTRDLElBUUosSUFBSTZDLEVBTENvRCxJQUVEaEwsRUFBTVIsSUFBSXNNLFdBQ1ZkLEdBQWUsR0FHbkIsTUFBTXhMLEVBQU1RLEVBQU1SLElBQ2xCLElBQUlrQyxFQUFJLEVBQ1IsTUFBTTZKLEVBQVE3SyxFQUFFeUIsT0FDaEIsSUFBSTRKLEVBQVMsRUFDYixNQUFNQyxFQUFVLEdBQ2hCLElBQUtwRSxLQUFRMkQsRUFDVFMsRUFBUXRKLEtBQUtrRixHQUNicEksRUFBSStMLE1BQU0zRCxHQUFRMkQsRUFBTTNELEdBRTVCLE1BQ002QyxFQURZd0IsaUJBQWlCek0sR0FDWCx1QkFBdUJ3RCxNQUFNLE1BQ3JELEtBQU90QixFQUFJK0ksRUFBTWpJLFNBQVVkLEdBQ1ksSUFBL0JzSyxFQUFRdEksUUFBUStHLEVBQU0vSSxLQUN0QnFLLElBRVJ2TSxFQUFJNkssaUJBQWlCLGlCQUFpQixTQUFVNkIsR0FDeENBLEVBQUczRSxTQUFXL0gsS0FDWnVNLEVBQ1MsSUFBWEEsR0FDQWhILFNDakdaLFNBQVNvSCxFQUFpQmhNLEVBQVVpTSxHQUNoQyxJQUFLLE1BQU0vTSxLQUFTYyxFQUVaZCxVQUVVLElBQVZBLEdBQ1UsS0FBVkEsSUFDSWtCLE1BQU1DLFFBQVFuQixHQUNkOE0sRUFBaUI5TSxFQUFPK00sR0FFRixpQkFBVi9NLEdBQ0ssaUJBQVZBLEdBQ1Usa0JBQVZBLEVBQ1ArTSxFQUFVMUosS0FBSzFDLE9BQU1LLE9BQVdBLE9BQVdBLEVBQVdnTSxPQUFPaE4sUUFBUWdCLElBR3JFK0wsRUFBVTFKLEtBQUtyRCxJQUkzQixPQUFPK00sRUFNSixTQUFTRSxFQUFJeEksRUFBSzVELEtBQVNDLEdBQzlCLE1BQU1vTSxFQUFlSixFQUFpQmhNLEVBQVUsSUFDaEQsTUFBbUIsbUJBQVIyRCxFQUVBQSxFQUFJNUQsRUFBTXFNLEdBR1csSUFBeEJBLEVBQWEvSixTQUNaK0osRUFBYSxHQUFHdE0sS0FDakJzTSxFQUFhLEdBQUcxTixLQUVUNEgsRUFBRTNDLEVBQUs1RCxFQUFNcU0sRUFBYSxHQUFHMU4sTUFHN0I0SCxFQUFFM0MsRUFBSzVELEVBQU1xTSxHQUs3QkQsSUFBUUEsRUFBTSxLLG9CQy9DakIsSUFBSUUsRUFBWUMsTUFBUUEsS0FBS0QsVUFBYSxXQVN0QyxPQVJBQSxFQUFXMUQsT0FBTzRELFFBQVUsU0FBU0MsR0FDakMsSUFBSyxJQUFJak0sRUFBR2dCLEVBQUksRUFBR21HLEVBQUkrRSxVQUFVcEssT0FBUWQsRUFBSW1HLEVBQUduRyxJQUU1QyxJQUFLLElBQUltTCxLQURUbk0sRUFBSWtNLFVBQVVsTCxHQUNPb0gsT0FBT0MsVUFBVUMsZUFBZTFFLEtBQUs1RCxFQUFHbU0sS0FDekRGLEVBQUVFLEdBQUtuTSxFQUFFbU0sSUFFakIsT0FBT0YsSUFFS0csTUFBTUwsS0FBTUcsWUFFaENHLEVBQVFDLFlBQWEsRUFDckJELEVBQVFFLGVBQVksRUFDcEIsSUFBSUMsRUFBYyxFQUFRLEdBQ3RCRCxFQUEyQixXQUMzQixTQUFTQSxFQUFVeEMsR0FDZmdDLEtBQUs3SixHQUFLc0ssRUFBWUMsYUFDdEJWLEtBQUtXLEtBQU8sR0FDWlgsS0FBS1ksSUFBTSxHQUNYWixLQUFLYSxNQUFRLEdBQ2JiLEtBQUt0TSxTQUFXLEdBQ2hCc00sS0FBS2hDLE1BQVErQixFQUFTLEdBQUkvQixHQUMxQmdDLEtBQUs3RSxLQUFPNkUsS0FBS2MsWUFBWTNGLEtBaURqQyxPQS9DQXFGLEVBQVVsRSxVQUFVeUUsTUFBUSxhQUc1QlAsRUFBVWxFLFVBQVV3QyxNQUFRLFNBQVU4QixHQUNsQ1osS0FBS1ksSUFBTUEsRUFBSTVMLEtBQUksU0FBVWdNLEdBQWEsTUFBTyxHQUFLQSxLQUFjeEssS0FBSyxNQUU3RWdLLEVBQVVsRSxVQUFVMkUsUUFBVSxTQUFVTixHQUVwQyxPQURBWCxLQUFLVyxLQUFPLHlCQUEyQlgsS0FBS1ksSUFBTVosS0FBS1ksSUFBTSxNQUFRLHlCQUEyQkQsRUFBS2hKLFFBQVEsSUFBSyxnQkFBa0JxSSxLQUFLN0osR0FBSyxLQUFPLGFBQzlJNkosS0FBS1csTUFFaEJILEVBQVVsRSxVQUFVNEUsU0FBVyxTQUFVQyxHQUNyQyxJQUFJQyxFQUFhWCxFQUFZQyxhQUN6QlcsRUFBZ0IsQ0FDaEJsTCxHQUFJNkosS0FBSzdKLEdBQ1RnRixLQUFNNkUsS0FBSzdFLEtBQ1hpRyxXQUFZQSxFQUNaRCxTQUFVQSxHQUtkLE9BSEFuQixLQUFLN0osTUFBTTZKLEtBQUtzQixLQUFLQyxVQUNmdkIsS0FBS3NCLEtBQUtDLFVBQVV2QixLQUFLN0osSUFBSUYsS0FBS29MLEdBQ2pDckIsS0FBS3NCLEtBQUtDLFVBQVV2QixLQUFLN0osSUFBTSxDQUFDa0wsR0FDaENELEVBQWEsU0FBV0EsRUFBYSxLQUFRQSxFQUFhLEtBRXJFWixFQUFVbEUsVUFBVTFKLE1BQVEsU0FBVTRPLEdBQ2xDLElBQ0lDLEdBRFEsSUFBSUMsT0FBUUMsTUFDRHBMLE1BQU0sTUFBTSxHQUcvQjVDLEVBQU0sSUFGTzhOLEVBQVdsTCxNQUFNLEtBQUtlLE9BQU8sR0FBRyxHQUNqQ21LLEVBQVdsTCxNQUFNLEtBQUtlLE9BQU8sR0FBRyxHQUFHSyxRQUFRLElBQUssS0FFaEUsT0FBSWhFLEtBQU9xTSxLQUFLdE0sVUFDWnNNLEtBQUt0TSxTQUFTQyxHQUFLb04sUUFDWmYsS0FBS3RNLFNBQVNDLEdBQUtnTixPQUcxQmEsRUFBZUYsS0FBT3RCLEtBQUtzQixLQUMzQnRCLEtBQUt0TSxTQUFTQyxHQUFPNk4sRUFDckJBLEVBQWVULFFBQ1JTLEVBQWViLE9BRzlCSCxFQUFVbEUsVUFBVXNGLFNBQVcsU0FBVWpPLEdBQ3JDLE9BQU9xTSxLQUFLYSxNQUFNbE4sSUFFdEI2TSxFQUFVbEUsVUFBVXVGLFNBQVcsU0FBVWxPLEVBQUttTyxHQUMxQzlCLEtBQUthLE1BQU1sTixHQUFPbU8sRUFDbEI5QixLQUFLc0IsS0FBSzdMLFVBRVArSyxFQXpEbUIsR0EyRDlCRixFQUFRRSxVQUFZQSxHLG9CQ3pFcEIsSUFDUXVCLEVBREpDLEVBQWFoQyxNQUFRQSxLQUFLZ0MsWUFDdEJELEVBQWdCLFNBQVVqRixFQUFHN0MsR0FJN0IsT0FIQThILEVBQWdCMUYsT0FBTzRGLGdCQUNsQixDQUFFQyxVQUFXLGNBQWdCcE8sT0FBUyxTQUFVZ0osRUFBRzdDLEdBQUs2QyxFQUFFb0YsVUFBWWpJLElBQ3ZFLFNBQVU2QyxFQUFHN0MsR0FBSyxJQUFLLElBQUltRyxLQUFLbkcsRUFBT29DLE9BQU9DLFVBQVVDLGVBQWUxRSxLQUFLb0MsRUFBR21HLEtBQUl0RCxFQUFFc0QsR0FBS25HLEVBQUVtRyxNQUMzRXRELEVBQUc3QyxJQUVyQixTQUFVNkMsRUFBRzdDLEdBQ2hCLEdBQWlCLG1CQUFOQSxHQUEwQixPQUFOQSxFQUMzQixNQUFNLElBQUlrSSxVQUFVLHVCQUF5QnZDLE9BQU8zRixHQUFLLGlDQUU3RCxTQUFTbUksSUFBT3BDLEtBQUtjLFlBQWNoRSxFQURuQ2lGLEVBQWNqRixFQUFHN0MsR0FFakI2QyxFQUFFUixVQUFrQixPQUFOckMsRUFBYW9DLE9BQU83RyxPQUFPeUUsSUFBTW1JLEVBQUc5RixVQUFZckMsRUFBRXFDLFVBQVcsSUFBSThGLEtBR3ZGOUIsRUFBUUMsWUFBYSxFQUNyQkQsRUFBUStCLFVBQU8sRUFDZixJQUNJQSxFQUFzQixTQUFVQyxHQUVoQyxTQUFTRCxFQUFLckUsR0FDVixPQUFPc0UsRUFBT3pLLEtBQUttSSxLQUFNaEMsSUFBVWdDLEtBTXZDLE9BUkFnQyxFQUFVSyxFQUFNQyxHQUloQkQsRUFBSy9GLFVBQVV5RSxNQUFRLFdBQ25CZixLQUFLbEIsTUFBTSxDQUFDLHlEQUNaa0IsS0FBS2lCLFFBQVEsaUZBQXNGakIsS0FBS2hDLE1BQU11RSxVQUFZLCtEQUFtRXZDLEtBQUtoQyxNQUFNdUUsVUFBWSxnQkFBa0J2QyxLQUFLaEMsTUFBTXVFLFVBQVksK0RBQW1FdkMsS0FBS2hDLE1BQU13RSxLQUFPLGtHQUF3R3hDLEtBQUtoQyxNQUFNdUUsVUFBWSxvREFBdUR2QyxLQUFLaEMsTUFBTXlFLE9BQVMsMkVBQThFekMsS0FBS2hDLE1BQU11RSxVQUFZLG9EQUF1RHZDLEtBQUtoQyxNQUFNNUwsS0FBTyw0RkFFdnNCaVEsRUFUYyxDQURQLEVBQVEsS0FXWjdCLFdBQ2RGLEVBQVErQixLQUFPQSxHLG1CQzdCZixJQUNRTixFQURKQyxFQUFhaEMsTUFBUUEsS0FBS2dDLFlBQ3RCRCxFQUFnQixTQUFVakYsRUFBRzdDLEdBSTdCLE9BSEE4SCxFQUFnQjFGLE9BQU80RixnQkFDbEIsQ0FBRUMsVUFBVyxjQUFnQnBPLE9BQVMsU0FBVWdKLEVBQUc3QyxHQUFLNkMsRUFBRW9GLFVBQVlqSSxJQUN2RSxTQUFVNkMsRUFBRzdDLEdBQUssSUFBSyxJQUFJbUcsS0FBS25HLEVBQU9vQyxPQUFPQyxVQUFVQyxlQUFlMUUsS0FBS29DLEVBQUdtRyxLQUFJdEQsRUFBRXNELEdBQUtuRyxFQUFFbUcsTUFDM0V0RCxFQUFHN0MsSUFFckIsU0FBVTZDLEVBQUc3QyxHQUNoQixHQUFpQixtQkFBTkEsR0FBMEIsT0FBTkEsRUFDM0IsTUFBTSxJQUFJa0ksVUFBVSx1QkFBeUJ2QyxPQUFPM0YsR0FBSyxpQ0FFN0QsU0FBU21JLElBQU9wQyxLQUFLYyxZQUFjaEUsRUFEbkNpRixFQUFjakYsRUFBRzdDLEdBRWpCNkMsRUFBRVIsVUFBa0IsT0FBTnJDLEVBQWFvQyxPQUFPN0csT0FBT3lFLElBQU1tSSxFQUFHOUYsVUFBWXJDLEVBQUVxQyxVQUFXLElBQUk4RixLQUd2RjlCLEVBQVFDLFlBQWEsRUFDckJELEVBQVFvQyxlQUFZLEVBQ3BCLElBQUlDLEVBQWMsRUFBUSxLQUN0QkMsRUFBUyxFQUFRLEtBQ2pCRixFQUEyQixTQUFVSixHQUVyQyxTQUFTSSxJQUNMLE9BQU9KLEVBQU96SyxLQUFLbUksT0FBU0EsS0FrQmhDLE9BcEJBZ0MsRUFBVVUsRUFBV0osR0FJckJJLEVBQVVwRyxVQUFVeUUsTUFBUSxXQUN4QixJQUFJOEIsRUFBVSxJQUFJRCxFQUFPUCxLQUFLLENBQzFCSSxPQUFRLFVBQ1JyUSxLQUFNLDRDQUNObVEsVUFBVyxPQUNYQyxLQUFNLGNBRU5NLEVBQWdCLElBQUlGLEVBQU9QLEtBQUssQ0FDaENJLE9BQVEsZ0JBQ1JyUSxLQUFNLGdEQUNObVEsVUFBVyxVQUNYQyxLQUFNLFNBRVZ4QyxLQUFLbEIsTUFBTSxDQUFDLG1DQUNaa0IsS0FBS2lCLFFBQVEsdUdBQTZHakIsS0FBS3BOLE1BQU1pUSxHQUFXLHlCQUEyQjdDLEtBQUtwTixNQUFNa1EsR0FBaUIsMkRBRXBNSixFQXJCbUIsQ0FzQjVCQyxFQUFZbkMsV0FDZEYsRUFBUW9DLFVBQVlBLEcsY0MxQ3BCcEMsRUFBUUMsWUFBYSxFQUNyQkQsRUFBUXlDLFVBQU8sRUFDZixJQUFJQyxFQUFhLEVBQVEsS0FDckJDLEVBQVFELEVBQVc3TixLQUFLLElBQ3hCNE4sRUFBc0IsV0FDdEIsU0FBU0EsRUFBSzVILEdBQ1Y2RSxLQUFLdUIsVUFBWSxHQUNqQnZCLEtBQUs3RSxLQUFPQSxFQTJEaEIsT0F6REE0SCxFQUFLekcsVUFBVTRHLGFBQWUsU0FBVUMsR0FRcEMsT0FQQW5ELEtBQUttRCxjQUFnQkEsRUFDckJuRCxLQUFLbUQsY0FBYzdCLEtBQU90QixLQUMxQkEsS0FBS21ELGNBQWNwQyxRQUNuQmYsS0FBS29ELFlBQWNwRCxLQUFLcUQsV0FBV3JELEtBQUttRCxjQUFjeEMsTUFDdERYLEtBQUtzRCxnQkFBZ0J0RCxLQUFLb0QsYUFDMUJwRCxLQUFLdUQsWUFBY1AsRUFBV2hJLFFBQVFnRixLQUFLb0QsYUFDM0NyUixTQUFTeVIsS0FBSzNRLFlBQVltTixLQUFLb0QsYUFDeEJwRCxNQUVYK0MsRUFBS3pHLFVBQVU3RyxPQUFTLFdBQ3BCdUssS0FBS21ELGNBQWNwQyxRQUNuQmYsS0FBS3lELFVBRVRWLEVBQUt6RyxVQUFVbUgsT0FBUyxXQUNwQixJQUFJOVEsRUFBT3FOLEtBQUtxRCxXQUFXckQsS0FBS21ELGNBQWN4QyxNQUM5Q1gsS0FBS3NELGdCQUFnQjNRLEdBQ3JCLElBQUkrUSxFQUFPVixFQUFXaEksUUFBUXJJLEdBQzlCc1EsRUFBTWpELEtBQUt1RCxZQUFhRyxHQUN4QjFELEtBQUt1RCxZQUFjRyxHQUV2QlgsRUFBS3pHLFVBQVUrRyxXQUFhLFNBQVVNLEdBQ2xDLElBQUlDLEVBQVUsUUFBVUQsRUFBTSxTQUM5QixPQUFPLElBQUlFLFdBQVlDLGdCQUFnQkYsRUFBUyxhQUFhSixLQUN4RE8sWUFLVGhCLEVBQUt6RyxVQUFVZ0gsZ0JBQWtCLFNBQVUzUSxHQUN2QzBKLE9BQU8ySCxPQUFPaEUsS0FBS3VCLFdBQVcwQyxTQUFRLFNBQVU1QyxHQUM1Q0EsRUFBYzRDLFNBQVEsU0FBVTlDLEdBQzVCLElBQUkrQyxFQUFVdlIsRUFBS3dSLGNBQWMsU0FBV2hELEVBQVNDLFdBQWEsS0FDbEUsR0FBSThDLEVBQVMsUUFDRkEsRUFBUXJILFFBQVFzRSxFQUFTQyxZQUNoQyxJQUFLLElBQUlKLEVBQVksRUFBR0EsRUFBWWtELEVBQVE1SSxXQUFXdkYsT0FBUWlMLElBQWEsQ0FDeEUsSUFBSW9ELEVBQWdCRixFQUFRNUksV0FBVzBGLEdBQVd2RixTQUM3QnlJLEVBQVE1SSxXQUFXMEYsR0FBV3RGLFdBQzdCeUYsRUFBU0MsYUFDM0I4QyxFQUFRckksZ0JBQWdCdUksR0FDeEJGLEVBQVFFLEdBQWlCakQsRUFBU0EsZ0JBSzFDa0QsUUFBUUMsSUFBSSxxQ0FBdUNuRCxFQUFTaEcsS0FBTyxNQUFRZ0csRUFBU2hMLFVBSWhHNkosS0FBS3VCLFVBQVksSUFFckJ3QixFQUFLekcsVUFBVWlJLFVBQVksU0FBVUMsR0FDakMsSUFBSUMsRUFBTzFTLFNBQVNILGNBQWMsUUFDbEM2UyxFQUFLL00sYUFBYSxNQUFPLGNBQ3pCK00sRUFBSy9NLGFBQWEsT0FBUThNLEdBQzFCelMsU0FBUzJTLEtBQUs3UixZQUFZNFIsSUFFdkIxQixFQTlEYyxHQWdFekJ6QyxFQUFReUMsS0FBT0EsRyxVQ3BFZnpDLEVBQVFDLFlBQWEsRUFDckJELEVBQVFJLGdCQUFhLEVBSXJCSixFQUFRSSxXQUhTLFdBQ2IsT0FBT25KLEtBQUtvTixNQUFzQixJQUFoQnBOLEtBQUtxTixVQUFxQkMsU0FBUyxPQ0hyREMsRUFBMkIsR0FHL0IsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQnBSLElBQWpCcVIsRUFDSCxPQUFPQSxFQUFhM0UsUUFHckIsSUFBSTRFLEVBQVNKLEVBQXlCRSxHQUFZLENBR2pEMUUsUUFBUyxJQU9WLE9BSEE2RSxFQUFvQkgsR0FBVW5OLEtBQUtxTixFQUFPNUUsUUFBUzRFLEVBQVFBLEVBQU81RSxRQUFTeUUsR0FHcEVHLEVBQU81RSxRQ3BCZnlFLEVBQW9CakksRUFBSSxDQUFDd0QsRUFBUzhFLEtBQ2pDLElBQUksSUFBSXpSLEtBQU95UixFQUNYTCxFQUFvQk0sRUFBRUQsRUFBWXpSLEtBQVNvUixFQUFvQk0sRUFBRS9FLEVBQVMzTSxJQUM1RTBJLE9BQU9pSixlQUFlaEYsRUFBUzNNLEVBQUssQ0FBRTRSLFlBQVksRUFBTUMsSUFBS0osRUFBV3pSLE1DSjNFb1IsRUFBb0JNLEVBQUksQ0FBQzVHLEVBQUtDLElBQVVyQyxPQUFPQyxVQUFVQyxlQUFlMUUsS0FBSzRHLEVBQUtDLEdDQ2xGcUcsRUFBb0JVLEVBQUtuRixJQUNILG9CQUFYb0YsUUFBMEJBLE9BQU9DLGFBQzFDdEosT0FBT2lKLGVBQWVoRixFQUFTb0YsT0FBT0MsWUFBYSxDQUFFN0QsTUFBTyxXQUU3RHpGLE9BQU9pSixlQUFlaEYsRUFBUyxhQUFjLENBQUV3QixPQUFPLEt4QkhuRHJRLEVBQWMsRUFBUSxLQUV0QkMsRUFBYyxJQURMLEVBQVEsS0FDUXFSLE1BQUssV0FBV0csYUFBYSxJQUFJelIsRUFBWWlSLFlBQzlENkIsVUFBVSwyRUFDdEI3UyxFQUFZNlMsVUFBVSwrRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi9tb2NraW5nL2NvbnRhaW5lclwiKTtcbnZhciBwYWdlXzEgPSByZXF1aXJlKFwiLi9wYWdlXCIpO1xudmFyIGNvdW50ZXJQYWdlID0gbmV3IHBhZ2VfMS5QYWdlKFwiY291bnRlclwiKS5hZGRSb290SW1hZ2UobmV3IGNvbnRhaW5lcl8xLkNvbnRhaW5lcigpKTtcbmNvdW50ZXJQYWdlLmltcG9ydENTUyhcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMC4yL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xuY291bnRlclBhZ2UuaW1wb3J0Q1NTKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMy9jc3MvYWxsLm1pbi5jc3NcIik7XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHF1YWxpZmllZE5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dCk7XG59XG5mdW5jdGlvbiBpbnNlcnRCZWZvcmUocGFyZW50Tm9kZSwgbmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZENoaWxkKG5vZGUsIGNoaWxkKSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5mdW5jdGlvbiBwYXJlbnROb2RlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5wYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gbmV4dFNpYmxpbmcobm9kZSkge1xuICAgIHJldHVybiBub2RlLm5leHRTaWJsaW5nO1xufVxuZnVuY3Rpb24gdGFnTmFtZShlbG0pIHtcbiAgICByZXR1cm4gZWxtLnRhZ05hbWU7XG59XG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudChub2RlLCB0ZXh0KSB7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG59XG5mdW5jdGlvbiBnZXRUZXh0Q29udGVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudGV4dENvbnRlbnQ7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSAxO1xufVxuZnVuY3Rpb24gaXNUZXh0KG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMztcbn1cbmZ1bmN0aW9uIGlzQ29tbWVudChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IDg7XG59XG5leHBvcnQgY29uc3QgaHRtbERvbUFwaSA9IHtcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIGNyZWF0ZUVsZW1lbnROUyxcbiAgICBjcmVhdGVUZXh0Tm9kZSxcbiAgICBjcmVhdGVDb21tZW50LFxuICAgIGluc2VydEJlZm9yZSxcbiAgICByZW1vdmVDaGlsZCxcbiAgICBhcHBlbmRDaGlsZCxcbiAgICBwYXJlbnROb2RlLFxuICAgIG5leHRTaWJsaW5nLFxuICAgIHRhZ05hbWUsXG4gICAgc2V0VGV4dENvbnRlbnQsXG4gICAgZ2V0VGV4dENvbnRlbnQsXG4gICAgaXNFbGVtZW50LFxuICAgIGlzVGV4dCxcbiAgICBpc0NvbW1lbnQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGRvbWFwaS5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gdm5vZGUoc2VsLCBkYXRhLCBjaGlsZHJlbiwgdGV4dCwgZWxtKSB7XG4gICAgY29uc3Qga2V5ID0gZGF0YSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZGF0YS5rZXk7XG4gICAgcmV0dXJuIHsgc2VsLCBkYXRhLCBjaGlsZHJlbiwgdGV4dCwgZWxtLCBrZXkgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZub2RlLmpzLm1hcCIsImV4cG9ydCBjb25zdCBhcnJheSA9IEFycmF5LmlzQXJyYXk7XG5leHBvcnQgZnVuY3Rpb24gcHJpbWl0aXZlKHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHMgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHMgPT09IFwibnVtYmVyXCI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy5qcy5tYXAiLCJpbXBvcnQgeyB2bm9kZSB9IGZyb20gXCIuL3Zub2RlXCI7XG5pbXBvcnQgKiBhcyBpcyBmcm9tIFwiLi9pc1wiO1xuaW1wb3J0IHsgaHRtbERvbUFwaSB9IGZyb20gXCIuL2h0bWxkb21hcGlcIjtcbmZ1bmN0aW9uIGlzVW5kZWYocykge1xuICAgIHJldHVybiBzID09PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc0RlZihzKSB7XG4gICAgcmV0dXJuIHMgIT09IHVuZGVmaW5lZDtcbn1cbmNvbnN0IGVtcHR5Tm9kZSA9IHZub2RlKFwiXCIsIHt9LCBbXSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuZnVuY3Rpb24gc2FtZVZub2RlKHZub2RlMSwgdm5vZGUyKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBpc1NhbWVLZXkgPSB2bm9kZTEua2V5ID09PSB2bm9kZTIua2V5O1xuICAgIGNvbnN0IGlzU2FtZUlzID0gKChfYSA9IHZub2RlMS5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXMpID09PSAoKF9iID0gdm5vZGUyLmRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pcyk7XG4gICAgY29uc3QgaXNTYW1lU2VsID0gdm5vZGUxLnNlbCA9PT0gdm5vZGUyLnNlbDtcbiAgICByZXR1cm4gaXNTYW1lU2VsICYmIGlzU2FtZUtleSAmJiBpc1NhbWVJcztcbn1cbmZ1bmN0aW9uIGlzVm5vZGUodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUuc2VsICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBjcmVhdGVLZXlUb09sZElkeChjaGlsZHJlbiwgYmVnaW5JZHgsIGVuZElkeCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBtYXAgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gYmVnaW5JZHg7IGkgPD0gZW5kSWR4OyArK2kpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gKF9hID0gY2hpbGRyZW5baV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5rZXk7XG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWFwW2tleV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59XG5jb25zdCBob29rcyA9IFtcbiAgICBcImNyZWF0ZVwiLFxuICAgIFwidXBkYXRlXCIsXG4gICAgXCJyZW1vdmVcIixcbiAgICBcImRlc3Ryb3lcIixcbiAgICBcInByZVwiLFxuICAgIFwicG9zdFwiLFxuXTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0KG1vZHVsZXMsIGRvbUFwaSkge1xuICAgIGxldCBpO1xuICAgIGxldCBqO1xuICAgIGNvbnN0IGNicyA9IHtcbiAgICAgICAgY3JlYXRlOiBbXSxcbiAgICAgICAgdXBkYXRlOiBbXSxcbiAgICAgICAgcmVtb3ZlOiBbXSxcbiAgICAgICAgZGVzdHJveTogW10sXG4gICAgICAgIHByZTogW10sXG4gICAgICAgIHBvc3Q6IFtdLFxuICAgIH07XG4gICAgY29uc3QgYXBpID0gZG9tQXBpICE9PSB1bmRlZmluZWQgPyBkb21BcGkgOiBodG1sRG9tQXBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjYnNbaG9va3NbaV1dID0gW107XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBjb25zdCBob29rID0gbW9kdWxlc1tqXVtob29rc1tpXV07XG4gICAgICAgICAgICBpZiAoaG9vayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2JzW2hvb2tzW2ldXS5wdXNoKGhvb2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGVtcHR5Tm9kZUF0KGVsbSkge1xuICAgICAgICBjb25zdCBpZCA9IGVsbS5pZCA/IFwiI1wiICsgZWxtLmlkIDogXCJcIjtcbiAgICAgICAgLy8gZWxtLmNsYXNzTmFtZSBkb2Vzbid0IHJldHVybiBhIHN0cmluZyB3aGVuIGVsbSBpcyBhbiBTVkcgZWxlbWVudCBpbnNpZGUgYSBzaGFkb3dSb290LlxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTQ1NDM0MC9kZXRlY3RpbmctY2xhc3NuYW1lLW9mLXN2Z2FuaW1hdGVkc3RyaW5nXG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBlbG0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICAgIGNvbnN0IGMgPSBjbGFzc2VzID8gXCIuXCIgKyBjbGFzc2VzLnNwbGl0KFwiIFwiKS5qb2luKFwiLlwiKSA6IFwiXCI7XG4gICAgICAgIHJldHVybiB2bm9kZShhcGkudGFnTmFtZShlbG0pLnRvTG93ZXJDYXNlKCkgKyBpZCArIGMsIHt9LCBbXSwgdW5kZWZpbmVkLCBlbG0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVSbUNiKGNoaWxkRWxtLCBsaXN0ZW5lcnMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHJtQ2IoKSB7XG4gICAgICAgICAgICBpZiAoLS1saXN0ZW5lcnMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBhcGkucGFyZW50Tm9kZShjaGlsZEVsbSk7XG4gICAgICAgICAgICAgICAgYXBpLnJlbW92ZUNoaWxkKHBhcmVudCwgY2hpbGRFbG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFbG0odm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBpbml0ID0gKF9hID0gZGF0YS5ob29rKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5pdDtcbiAgICAgICAgICAgIGlmIChpc0RlZihpbml0KSkge1xuICAgICAgICAgICAgICAgIGluaXQodm5vZGUpO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IHNlbCA9IHZub2RlLnNlbDtcbiAgICAgICAgaWYgKHNlbCA9PT0gXCIhXCIpIHtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmKHZub2RlLnRleHQpKSB7XG4gICAgICAgICAgICAgICAgdm5vZGUudGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2bm9kZS5lbG0gPSBhcGkuY3JlYXRlQ29tbWVudCh2bm9kZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gUGFyc2Ugc2VsZWN0b3JcbiAgICAgICAgICAgIGNvbnN0IGhhc2hJZHggPSBzZWwuaW5kZXhPZihcIiNcIik7XG4gICAgICAgICAgICBjb25zdCBkb3RJZHggPSBzZWwuaW5kZXhPZihcIi5cIiwgaGFzaElkeCk7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gaGFzaElkeCA+IDAgPyBoYXNoSWR4IDogc2VsLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGRvdCA9IGRvdElkeCA+IDAgPyBkb3RJZHggOiBzZWwubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgdGFnID0gaGFzaElkeCAhPT0gLTEgfHwgZG90SWR4ICE9PSAtMVxuICAgICAgICAgICAgICAgID8gc2VsLnNsaWNlKDAsIE1hdGgubWluKGhhc2gsIGRvdCkpXG4gICAgICAgICAgICAgICAgOiBzZWw7XG4gICAgICAgICAgICBjb25zdCBlbG0gPSAodm5vZGUuZWxtID1cbiAgICAgICAgICAgICAgICBpc0RlZihkYXRhKSAmJiBpc0RlZigoaSA9IGRhdGEubnMpKVxuICAgICAgICAgICAgICAgICAgICA/IGFwaS5jcmVhdGVFbGVtZW50TlMoaSwgdGFnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICA6IGFwaS5jcmVhdGVFbGVtZW50KHRhZywgZGF0YSkpO1xuICAgICAgICAgICAgaWYgKGhhc2ggPCBkb3QpXG4gICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShcImlkXCIsIHNlbC5zbGljZShoYXNoICsgMSwgZG90KSk7XG4gICAgICAgICAgICBpZiAoZG90SWR4ID4gMClcbiAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgc2VsLnNsaWNlKGRvdCArIDEpLnJlcGxhY2UoL1xcLi9nLCBcIiBcIikpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgY2JzLmNyZWF0ZVtpXShlbXB0eU5vZGUsIHZub2RlKTtcbiAgICAgICAgICAgIGlmIChpcy5hcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2ggPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5hcHBlbmRDaGlsZChlbG0sIGNyZWF0ZUVsbShjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpcy5wcmltaXRpdmUodm5vZGUudGV4dCkpIHtcbiAgICAgICAgICAgICAgICBhcGkuYXBwZW5kQ2hpbGQoZWxtLCBhcGkuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaG9vayA9IHZub2RlLmRhdGEuaG9vaztcbiAgICAgICAgICAgIGlmIChpc0RlZihob29rKSkge1xuICAgICAgICAgICAgICAgIChfYiA9IGhvb2suY3JlYXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChob29rLCBlbXB0eU5vZGUsIHZub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoaG9vay5pbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWRWbm9kZVF1ZXVlLnB1c2godm5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZub2RlLmVsbSA9IGFwaS5jcmVhdGVUZXh0Tm9kZSh2bm9kZS50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdm5vZGUuZWxtO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRWbm9kZXMocGFyZW50RWxtLCBiZWZvcmUsIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoID0gdm5vZGVzW3N0YXJ0SWR4XTtcbiAgICAgICAgICAgIGlmIChjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGNyZWF0ZUVsbShjaCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSwgYmVmb3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpbnZva2VEZXN0cm95SG9vayh2bm9kZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBkYXRhID0gdm5vZGUuZGF0YTtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgKF9iID0gKF9hID0gZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmhvb2spID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZXN0cm95KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdm5vZGUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBjYnMuZGVzdHJveVtpXSh2bm9kZSk7XG4gICAgICAgICAgICBpZiAodm5vZGUuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB2bm9kZS5jaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZva2VEZXN0cm95SG9vayhjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlVm5vZGVzKHBhcmVudEVsbSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lcnM7XG4gICAgICAgICAgICBsZXQgcm07XG4gICAgICAgICAgICBjb25zdCBjaCA9IHZub2Rlc1tzdGFydElkeF07XG4gICAgICAgICAgICBpZiAoY2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0RlZihjaC5zZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGludm9rZURlc3Ryb3lIb29rKGNoKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gY2JzLnJlbW92ZS5sZW5ndGggKyAxO1xuICAgICAgICAgICAgICAgICAgICBybSA9IGNyZWF0ZVJtQ2IoY2guZWxtLCBsaXN0ZW5lcnMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNicy5yZW1vdmUubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICBjYnMucmVtb3ZlW2ldKGNoLCBybSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUhvb2sgPSAoX2IgPSAoX2EgPSBjaCA9PT0gbnVsbCB8fCBjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2guZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvb2spID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZW1vdmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0RlZihyZW1vdmVIb29rKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSG9vayhjaCwgcm0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGFwaS5yZW1vdmVDaGlsZChwYXJlbnRFbG0sIGNoLmVsbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkcmVuKHBhcmVudEVsbSwgb2xkQ2gsIG5ld0NoLCBpbnNlcnRlZFZub2RlUXVldWUpIHtcbiAgICAgICAgbGV0IG9sZFN0YXJ0SWR4ID0gMDtcbiAgICAgICAgbGV0IG5ld1N0YXJ0SWR4ID0gMDtcbiAgICAgICAgbGV0IG9sZEVuZElkeCA9IG9sZENoLmxlbmd0aCAtIDE7XG4gICAgICAgIGxldCBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gICAgICAgIGxldCBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgICAgIGxldCBuZXdFbmRJZHggPSBuZXdDaC5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICAgICAgICBsZXQgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgICAgICBsZXQgb2xkS2V5VG9JZHg7XG4gICAgICAgIGxldCBpZHhJbk9sZDtcbiAgICAgICAgbGV0IGVsbVRvTW92ZTtcbiAgICAgICAgbGV0IGJlZm9yZTtcbiAgICAgICAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgICAgICAgIGlmIChvbGRTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07IC8vIFZub2RlIG1pZ2h0IGhhdmUgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvbGRFbmRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuZXdFbmRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gVm5vZGUgbW92ZWQgcmlnaHRcbiAgICAgICAgICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRTdGFydFZub2RlLmVsbSwgYXBpLm5leHRTaWJsaW5nKG9sZEVuZFZub2RlLmVsbSkpO1xuICAgICAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBWbm9kZSBtb3ZlZCBsZWZ0XG4gICAgICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkRW5kVm5vZGUuZWxtLCBvbGRTdGFydFZub2RlLmVsbSk7XG4gICAgICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG9sZEtleVRvSWR4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkS2V5VG9JZHggPSBjcmVhdGVLZXlUb09sZElkeChvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlkeEluT2xkID0gb2xkS2V5VG9JZHhbbmV3U3RhcnRWbm9kZS5rZXldO1xuICAgICAgICAgICAgICAgIGlmIChpc1VuZGVmKGlkeEluT2xkKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOZXcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgY3JlYXRlRWxtKG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSksIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbVRvTW92ZSA9IG9sZENoW2lkeEluT2xkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsbVRvTW92ZS5zZWwgIT09IG5ld1N0YXJ0Vm5vZGUuc2VsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgY3JlYXRlRWxtKG5ld1N0YXJ0Vm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSksIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoVm5vZGUoZWxtVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIGVsbVRvTW92ZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCB8fCBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgICAgICAgIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xuICAgICAgICAgICAgICAgIGJlZm9yZSA9IG5ld0NoW25ld0VuZElkeCArIDFdID09IG51bGwgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uZWxtO1xuICAgICAgICAgICAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIGJlZm9yZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50RWxtLCBvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hWbm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICBjb25zdCBob29rID0gKF9hID0gdm5vZGUuZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvb2s7XG4gICAgICAgIChfYiA9IGhvb2sgPT09IG51bGwgfHwgaG9vayA9PT0gdm9pZCAwID8gdm9pZCAwIDogaG9vay5wcmVwYXRjaCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoaG9vaywgb2xkVm5vZGUsIHZub2RlKTtcbiAgICAgICAgY29uc3QgZWxtID0gKHZub2RlLmVsbSA9IG9sZFZub2RlLmVsbSk7XG4gICAgICAgIGNvbnN0IG9sZENoID0gb2xkVm5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGNoID0gdm5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmIChvbGRWbm9kZSA9PT0gdm5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh2bm9kZS5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2JzLnVwZGF0ZS5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgICAgICBjYnMudXBkYXRlW2ldKG9sZFZub2RlLCB2bm9kZSk7XG4gICAgICAgICAgICAoX2QgPSAoX2MgPSB2bm9kZS5kYXRhLmhvb2spID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy51cGRhdGUpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5jYWxsKF9jLCBvbGRWbm9kZSwgdm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1VuZGVmKHZub2RlLnRleHQpKSB7XG4gICAgICAgICAgICBpZiAoaXNEZWYob2xkQ2gpICYmIGlzRGVmKGNoKSkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRDaCAhPT0gY2gpXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNEZWYoY2gpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKVxuICAgICAgICAgICAgICAgICAgICBhcGkuc2V0VGV4dENvbnRlbnQoZWxtLCBcIlwiKTtcbiAgICAgICAgICAgICAgICBhZGRWbm9kZXMoZWxtLCBudWxsLCBjaCwgMCwgY2gubGVuZ3RoIC0gMSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRGVmKG9sZENoKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKSB7XG4gICAgICAgICAgICAgICAgYXBpLnNldFRleHRDb250ZW50KGVsbSwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkVm5vZGUudGV4dCAhPT0gdm5vZGUudGV4dCkge1xuICAgICAgICAgICAgaWYgKGlzRGVmKG9sZENoKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZVZub2RlcyhlbG0sIG9sZENoLCAwLCBvbGRDaC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwaS5zZXRUZXh0Q29udGVudChlbG0sIHZub2RlLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIChfZSA9IGhvb2sgPT09IG51bGwgfHwgaG9vayA9PT0gdm9pZCAwID8gdm9pZCAwIDogaG9vay5wb3N0cGF0Y2gpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jYWxsKGhvb2ssIG9sZFZub2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBwYXRjaChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICAgICAgbGV0IGksIGVsbSwgcGFyZW50O1xuICAgICAgICBjb25zdCBpbnNlcnRlZFZub2RlUXVldWUgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNicy5wcmUubGVuZ3RoOyArK2kpXG4gICAgICAgICAgICBjYnMucHJlW2ldKCk7XG4gICAgICAgIGlmICghaXNWbm9kZShvbGRWbm9kZSkpIHtcbiAgICAgICAgICAgIG9sZFZub2RlID0gZW1wdHlOb2RlQXQob2xkVm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzYW1lVm5vZGUob2xkVm5vZGUsIHZub2RlKSkge1xuICAgICAgICAgICAgcGF0Y2hWbm9kZShvbGRWbm9kZSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbG0gPSBvbGRWbm9kZS5lbG07XG4gICAgICAgICAgICBwYXJlbnQgPSBhcGkucGFyZW50Tm9kZShlbG0pO1xuICAgICAgICAgICAgY3JlYXRlRWxtKHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFwaS5pbnNlcnRCZWZvcmUocGFyZW50LCB2bm9kZS5lbG0sIGFwaS5uZXh0U2libGluZyhlbG0pKTtcbiAgICAgICAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50LCBbb2xkVm5vZGVdLCAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpbnNlcnRlZFZub2RlUXVldWVbaV0uZGF0YS5ob29rLmluc2VydChpbnNlcnRlZFZub2RlUXVldWVbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucG9zdC5sZW5ndGg7ICsraSlcbiAgICAgICAgICAgIGNicy5wb3N0W2ldKCk7XG4gICAgICAgIHJldHVybiB2bm9kZTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5pdC5qcy5tYXAiLCJpbXBvcnQgeyB2bm9kZSB9IGZyb20gXCIuL3Zub2RlXCI7XG5pbXBvcnQgKiBhcyBpcyBmcm9tIFwiLi9pc1wiO1xuZnVuY3Rpb24gYWRkTlMoZGF0YSwgY2hpbGRyZW4sIHNlbCkge1xuICAgIGRhdGEubnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgaWYgKHNlbCAhPT0gXCJmb3JlaWduT2JqZWN0XCIgJiYgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZERhdGEgPSBjaGlsZHJlbltpXS5kYXRhO1xuICAgICAgICAgICAgaWYgKGNoaWxkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYWRkTlMoY2hpbGREYXRhLCBjaGlsZHJlbltpXS5jaGlsZHJlbiwgY2hpbGRyZW5baV0uc2VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoKHNlbCwgYiwgYykge1xuICAgIGxldCBkYXRhID0ge307XG4gICAgbGV0IGNoaWxkcmVuO1xuICAgIGxldCB0ZXh0O1xuICAgIGxldCBpO1xuICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRhdGEgPSBiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpcy5hcnJheShjKSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzLnByaW1pdGl2ZShjKSkge1xuICAgICAgICAgICAgdGV4dCA9IGM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyAmJiBjLnNlbCkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBbY107XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYiAhPT0gdW5kZWZpbmVkICYmIGIgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzLmFycmF5KGIpKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXMucHJpbWl0aXZlKGIpKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiICYmIGIuc2VsKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IFtiXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSBiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGlzLnByaW1pdGl2ZShjaGlsZHJlbltpXSkpXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5baV0gPSB2bm9kZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjaGlsZHJlbltpXSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2VsWzBdID09PSBcInNcIiAmJlxuICAgICAgICBzZWxbMV0gPT09IFwidlwiICYmXG4gICAgICAgIHNlbFsyXSA9PT0gXCJnXCIgJiZcbiAgICAgICAgKHNlbC5sZW5ndGggPT09IDMgfHwgc2VsWzNdID09PSBcIi5cIiB8fCBzZWxbM10gPT09IFwiI1wiKSkge1xuICAgICAgICBhZGROUyhkYXRhLCBjaGlsZHJlbiwgc2VsKTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlKHNlbCwgZGF0YSwgY2hpbGRyZW4sIHRleHQsIHVuZGVmaW5lZCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwiLi9oXCI7XG5mdW5jdGlvbiBjb3B5VG9UaHVuayh2bm9kZSwgdGh1bmspIHtcbiAgICB2bm9kZS5kYXRhLmZuID0gdGh1bmsuZGF0YS5mbjtcbiAgICB2bm9kZS5kYXRhLmFyZ3MgPSB0aHVuay5kYXRhLmFyZ3M7XG4gICAgdGh1bmsuZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgdGh1bmsuY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlbjtcbiAgICB0aHVuay50ZXh0ID0gdm5vZGUudGV4dDtcbiAgICB0aHVuay5lbG0gPSB2bm9kZS5lbG07XG59XG5mdW5jdGlvbiBpbml0KHRodW5rKSB7XG4gICAgY29uc3QgY3VyID0gdGh1bmsuZGF0YTtcbiAgICBjb25zdCB2bm9kZSA9IGN1ci5mbiguLi5jdXIuYXJncyk7XG4gICAgY29weVRvVGh1bmsodm5vZGUsIHRodW5rKTtcbn1cbmZ1bmN0aW9uIHByZXBhdGNoKG9sZFZub2RlLCB0aHVuaykge1xuICAgIGxldCBpO1xuICAgIGNvbnN0IG9sZCA9IG9sZFZub2RlLmRhdGE7XG4gICAgY29uc3QgY3VyID0gdGh1bmsuZGF0YTtcbiAgICBjb25zdCBvbGRBcmdzID0gb2xkLmFyZ3M7XG4gICAgY29uc3QgYXJncyA9IGN1ci5hcmdzO1xuICAgIGlmIChvbGQuZm4gIT09IGN1ci5mbiB8fCBvbGRBcmdzLmxlbmd0aCAhPT0gYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY29weVRvVGh1bmsoY3VyLmZuKC4uLmFyZ3MpLCB0aHVuayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKG9sZEFyZ3NbaV0gIT09IGFyZ3NbaV0pIHtcbiAgICAgICAgICAgIGNvcHlUb1RodW5rKGN1ci5mbiguLi5hcmdzKSwgdGh1bmspO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvcHlUb1RodW5rKG9sZFZub2RlLCB0aHVuayk7XG59XG5leHBvcnQgY29uc3QgdGh1bmsgPSBmdW5jdGlvbiB0aHVuayhzZWwsIGtleSwgZm4sIGFyZ3MpIHtcbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFyZ3MgPSBmbjtcbiAgICAgICAgZm4gPSBrZXk7XG4gICAgICAgIGtleSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGgoc2VsLCB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBob29rOiB7IGluaXQsIHByZXBhdGNoIH0sXG4gICAgICAgIGZuOiBmbixcbiAgICAgICAgYXJnczogYXJncyxcbiAgICB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aHVuay5qcy5tYXAiLCJmdW5jdGlvbiBwcmUodm5vZGUsIG5ld1Zub2RlKSB7XG4gICAgY29uc3QgYXR0YWNoRGF0YSA9IHZub2RlLmRhdGEuYXR0YWNoRGF0YTtcbiAgICAvLyBDb3B5IGNyZWF0ZWQgcGxhY2Vob2xkZXIgYW5kIHJlYWwgZWxlbWVudCBmcm9tIG9sZCB2bm9kZVxuICAgIG5ld1Zub2RlLmRhdGEuYXR0YWNoRGF0YS5wbGFjZWhvbGRlciA9IGF0dGFjaERhdGEucGxhY2Vob2xkZXI7XG4gICAgbmV3Vm5vZGUuZGF0YS5hdHRhY2hEYXRhLnJlYWwgPSBhdHRhY2hEYXRhLnJlYWw7XG4gICAgLy8gTW91bnQgcmVhbCBlbGVtZW50IGluIHZub2RlIHNvIHRoZSBwYXRjaCBwcm9jZXNzIG9wZXJhdGVzIG9uIGl0XG4gICAgdm5vZGUuZWxtID0gdm5vZGUuZGF0YS5hdHRhY2hEYXRhLnJlYWw7XG59XG5mdW5jdGlvbiBwb3N0KF8sIHZub2RlKSB7XG4gICAgLy8gTW91bnQgZHVtbXkgcGxhY2Vob2xkZXIgaW4gdm5vZGUgc28gcG90ZW50aWFsIHJlb3JkZXJzIHVzZSBpdFxuICAgIHZub2RlLmVsbSA9IHZub2RlLmRhdGEuYXR0YWNoRGF0YS5wbGFjZWhvbGRlcjtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3kodm5vZGUpIHtcbiAgICAvLyBSZW1vdmUgcGxhY2Vob2xkZXJcbiAgICBpZiAodm5vZGUuZWxtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdm5vZGUuZWxtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodm5vZGUuZWxtKTtcbiAgICB9XG4gICAgLy8gUmVtb3ZlIHJlYWwgZWxlbWVudCBmcm9tIHdoZXJlIGl0IHdhcyBpbnNlcnRlZFxuICAgIHZub2RlLmVsbSA9IHZub2RlLmRhdGEuYXR0YWNoRGF0YS5yZWFsO1xufVxuZnVuY3Rpb24gY3JlYXRlKF8sIHZub2RlKSB7XG4gICAgY29uc3QgcmVhbCA9IHZub2RlLmVsbTtcbiAgICBjb25zdCBhdHRhY2hEYXRhID0gdm5vZGUuZGF0YS5hdHRhY2hEYXRhO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgLy8gUmVwbGFjZSBhY3R1YWwgZWxlbWVudCB3aXRoIGR1bW15IHBsYWNlaG9sZGVyXG4gICAgLy8gU25hYmJkb20gd2lsbCB0aGVuIGluc2VydCBwbGFjZWhvbGRlciBpbnN0ZWFkXG4gICAgdm5vZGUuZWxtID0gcGxhY2Vob2xkZXI7XG4gICAgYXR0YWNoRGF0YS50YXJnZXQuYXBwZW5kQ2hpbGQocmVhbCk7XG4gICAgYXR0YWNoRGF0YS5yZWFsID0gcmVhbDtcbiAgICBhdHRhY2hEYXRhLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoVG8odGFyZ2V0LCB2bm9kZSkge1xuICAgIGlmICh2bm9kZS5kYXRhID09PSB1bmRlZmluZWQpXG4gICAgICAgIHZub2RlLmRhdGEgPSB7fTtcbiAgICBpZiAodm5vZGUuZGF0YS5ob29rID09PSB1bmRlZmluZWQpXG4gICAgICAgIHZub2RlLmRhdGEuaG9vayA9IHt9O1xuICAgIGNvbnN0IGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIGNvbnN0IGhvb2sgPSB2bm9kZS5kYXRhLmhvb2s7XG4gICAgZGF0YS5hdHRhY2hEYXRhID0geyB0YXJnZXQ6IHRhcmdldCwgcGxhY2Vob2xkZXI6IHVuZGVmaW5lZCwgcmVhbDogdW5kZWZpbmVkIH07XG4gICAgaG9vay5jcmVhdGUgPSBjcmVhdGU7XG4gICAgaG9vay5wcmVwYXRjaCA9IHByZTtcbiAgICBob29rLnBvc3RwYXRjaCA9IHBvc3Q7XG4gICAgaG9vay5kZXN0cm95ID0gZGVzdHJveTtcbiAgICByZXR1cm4gdm5vZGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdHRhY2h0by5qcy5tYXAiLCJpbXBvcnQgeyB2bm9kZSB9IGZyb20gXCIuL3Zub2RlXCI7XG5pbXBvcnQgeyBodG1sRG9tQXBpIH0gZnJvbSBcIi4vaHRtbGRvbWFwaVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHRvVk5vZGUobm9kZSwgZG9tQXBpKSB7XG4gICAgY29uc3QgYXBpID0gZG9tQXBpICE9PSB1bmRlZmluZWQgPyBkb21BcGkgOiBodG1sRG9tQXBpO1xuICAgIGxldCB0ZXh0O1xuICAgIGlmIChhcGkuaXNFbGVtZW50KG5vZGUpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gbm9kZS5pZCA/IFwiI1wiICsgbm9kZS5pZCA6IFwiXCI7XG4gICAgICAgIGNvbnN0IGNuID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICAgICAgY29uc3QgYyA9IGNuID8gXCIuXCIgKyBjbi5zcGxpdChcIiBcIikuam9pbihcIi5cIikgOiBcIlwiO1xuICAgICAgICBjb25zdCBzZWwgPSBhcGkudGFnTmFtZShub2RlKS50b0xvd2VyQ2FzZSgpICsgaWQgKyBjO1xuICAgICAgICBjb25zdCBhdHRycyA9IHt9O1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuICAgICAgICBsZXQgbmFtZTtcbiAgICAgICAgbGV0IGksIG47XG4gICAgICAgIGNvbnN0IGVsbUF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBlbG1DaGlsZHJlbiA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChpID0gMCwgbiA9IGVsbUF0dHJzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgbmFtZSA9IGVsbUF0dHJzW2ldLm5vZGVOYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUgIT09IFwiaWRcIiAmJiBuYW1lICE9PSBcImNsYXNzXCIpIHtcbiAgICAgICAgICAgICAgICBhdHRyc1tuYW1lXSA9IGVsbUF0dHJzW2ldLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwLCBuID0gZWxtQ2hpbGRyZW4ubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKHRvVk5vZGUoZWxtQ2hpbGRyZW5baV0sIGRvbUFwaSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2bm9kZShzZWwsIHsgYXR0cnMgfSwgY2hpbGRyZW4sIHVuZGVmaW5lZCwgbm9kZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFwaS5pc1RleHQobm9kZSkpIHtcbiAgICAgICAgdGV4dCA9IGFwaS5nZXRUZXh0Q29udGVudChub2RlKTtcbiAgICAgICAgcmV0dXJuIHZub2RlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRleHQsIG5vZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChhcGkuaXNDb21tZW50KG5vZGUpKSB7XG4gICAgICAgIHRleHQgPSBhcGkuZ2V0VGV4dENvbnRlbnQobm9kZSk7XG4gICAgICAgIHJldHVybiB2bm9kZShcIiFcIiwge30sIFtdLCB0ZXh0LCBub2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB2bm9kZShcIlwiLCB7fSwgW10sIHVuZGVmaW5lZCwgbm9kZSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG92bm9kZS5qcy5tYXAiLCJjb25zdCB4bGlua05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XG5jb25zdCB4bWxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XG5jb25zdCBjb2xvbkNoYXIgPSA1ODtcbmNvbnN0IHhDaGFyID0gMTIwO1xuZnVuY3Rpb24gdXBkYXRlQXR0cnMob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgbGV0IGtleTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IG9sZEF0dHJzID0gb2xkVm5vZGUuZGF0YS5hdHRycztcbiAgICBsZXQgYXR0cnMgPSB2bm9kZS5kYXRhLmF0dHJzO1xuICAgIGlmICghb2xkQXR0cnMgJiYgIWF0dHJzKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZEF0dHJzID09PSBhdHRycylcbiAgICAgICAgcmV0dXJuO1xuICAgIG9sZEF0dHJzID0gb2xkQXR0cnMgfHwge307XG4gICAgYXR0cnMgPSBhdHRycyB8fCB7fTtcbiAgICAvLyB1cGRhdGUgbW9kaWZpZWQgYXR0cmlidXRlcywgYWRkIG5ldyBhdHRyaWJ1dGVzXG4gICAgZm9yIChrZXkgaW4gYXR0cnMpIHtcbiAgICAgICAgY29uc3QgY3VyID0gYXR0cnNba2V5XTtcbiAgICAgICAgY29uc3Qgb2xkID0gb2xkQXR0cnNba2V5XTtcbiAgICAgICAgaWYgKG9sZCAhPT0gY3VyKSB7XG4gICAgICAgICAgICBpZiAoY3VyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShrZXksIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3VyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuY2hhckNvZGVBdCgwKSAhPT0geENoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShrZXksIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleS5jaGFyQ29kZUF0KDMpID09PSBjb2xvbkNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1lIHhtbCBuYW1lc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZU5TKHhtbE5TLCBrZXksIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleS5jaGFyQ29kZUF0KDUpID09PSBjb2xvbkNoYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1lIHhsaW5rIG5hbWVzcGFjZVxuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlTlMoeGxpbmtOUywga2V5LCBjdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShrZXksIGN1cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZW1vdmVkIGF0dHJpYnV0ZXNcbiAgICAvLyB1c2UgYGluYCBvcGVyYXRvciBzaW5jZSB0aGUgcHJldmlvdXMgYGZvcmAgaXRlcmF0aW9uIHVzZXMgaXQgKC5pLmUuIGFkZCBldmVuIGF0dHJpYnV0ZXMgd2l0aCB1bmRlZmluZWQgdmFsdWUpXG4gICAgLy8gdGhlIG90aGVyIG9wdGlvbiBpcyB0byByZW1vdmUgYWxsIGF0dHJpYnV0ZXMgd2l0aCB2YWx1ZSA9PSB1bmRlZmluZWRcbiAgICBmb3IgKGtleSBpbiBvbGRBdHRycykge1xuICAgICAgICBpZiAoIShrZXkgaW4gYXR0cnMpKSB7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgYXR0cmlidXRlc01vZHVsZSA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZUF0dHJzLFxuICAgIHVwZGF0ZTogdXBkYXRlQXR0cnMsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXR0cmlidXRlcy5qcy5tYXAiLCJmdW5jdGlvbiB1cGRhdGVDbGFzcyhvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBsZXQgY3VyO1xuICAgIGxldCBuYW1lO1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBsZXQgb2xkQ2xhc3MgPSBvbGRWbm9kZS5kYXRhLmNsYXNzO1xuICAgIGxldCBrbGFzcyA9IHZub2RlLmRhdGEuY2xhc3M7XG4gICAgaWYgKCFvbGRDbGFzcyAmJiAha2xhc3MpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAob2xkQ2xhc3MgPT09IGtsYXNzKVxuICAgICAgICByZXR1cm47XG4gICAgb2xkQ2xhc3MgPSBvbGRDbGFzcyB8fCB7fTtcbiAgICBrbGFzcyA9IGtsYXNzIHx8IHt9O1xuICAgIGZvciAobmFtZSBpbiBvbGRDbGFzcykge1xuICAgICAgICBpZiAob2xkQ2xhc3NbbmFtZV0gJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChrbGFzcywgbmFtZSkpIHtcbiAgICAgICAgICAgIC8vIHdhcyBgdHJ1ZWAgYW5kIG5vdyBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobmFtZSBpbiBrbGFzcykge1xuICAgICAgICBjdXIgPSBrbGFzc1tuYW1lXTtcbiAgICAgICAgaWYgKGN1ciAhPT0gb2xkQ2xhc3NbbmFtZV0pIHtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3RbY3VyID8gXCJhZGRcIiA6IFwicmVtb3ZlXCJdKG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGNsYXNzTW9kdWxlID0geyBjcmVhdGU6IHVwZGF0ZUNsYXNzLCB1cGRhdGU6IHVwZGF0ZUNsYXNzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGFzcy5qcy5tYXAiLCJjb25zdCBDQVBTX1JFR0VYID0gL1tBLVpdL2c7XG5mdW5jdGlvbiB1cGRhdGVEYXRhc2V0KG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGNvbnN0IGVsbSA9IHZub2RlLmVsbTtcbiAgICBsZXQgb2xkRGF0YXNldCA9IG9sZFZub2RlLmRhdGEuZGF0YXNldDtcbiAgICBsZXQgZGF0YXNldCA9IHZub2RlLmRhdGEuZGF0YXNldDtcbiAgICBsZXQga2V5O1xuICAgIGlmICghb2xkRGF0YXNldCAmJiAhZGF0YXNldClcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChvbGREYXRhc2V0ID09PSBkYXRhc2V0KVxuICAgICAgICByZXR1cm47XG4gICAgb2xkRGF0YXNldCA9IG9sZERhdGFzZXQgfHwge307XG4gICAgZGF0YXNldCA9IGRhdGFzZXQgfHwge307XG4gICAgY29uc3QgZCA9IGVsbS5kYXRhc2V0O1xuICAgIGZvciAoa2V5IGluIG9sZERhdGFzZXQpIHtcbiAgICAgICAgaWYgKCFkYXRhc2V0W2tleV0pIHtcbiAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiBkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtXCIgKyBrZXkucmVwbGFjZShDQVBTX1JFR0VYLCBcIi0kJlwiKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGtleSBpbiBkYXRhc2V0KSB7XG4gICAgICAgIGlmIChvbGREYXRhc2V0W2tleV0gIT09IGRhdGFzZXRba2V5XSkge1xuICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgICBkW2tleV0gPSBkYXRhc2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIGtleS5yZXBsYWNlKENBUFNfUkVHRVgsIFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksIGRhdGFzZXRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY29uc3QgZGF0YXNldE1vZHVsZSA9IHtcbiAgICBjcmVhdGU6IHVwZGF0ZURhdGFzZXQsXG4gICAgdXBkYXRlOiB1cGRhdGVEYXRhc2V0LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGFzZXQuanMubWFwIiwiZnVuY3Rpb24gaW52b2tlSGFuZGxlcihoYW5kbGVyLCB2bm9kZSwgZXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAvLyBjYWxsIGZ1bmN0aW9uIGhhbmRsZXJcbiAgICAgICAgaGFuZGxlci5jYWxsKHZub2RlLCBldmVudCwgdm5vZGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAvLyBjYWxsIG11bHRpcGxlIGhhbmRsZXJzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGFuZGxlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW52b2tlSGFuZGxlcihoYW5kbGVyW2ldLCB2bm9kZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaGFuZGxlRXZlbnQoZXZlbnQsIHZub2RlKSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50LnR5cGU7XG4gICAgY29uc3Qgb24gPSB2bm9kZS5kYXRhLm9uO1xuICAgIC8vIGNhbGwgZXZlbnQgaGFuZGxlcihzKSBpZiBleGlzdHNcbiAgICBpZiAob24gJiYgb25bbmFtZV0pIHtcbiAgICAgICAgaW52b2tlSGFuZGxlcihvbltuYW1lXSwgdm5vZGUsIGV2ZW50KTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lcigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgICAgICBoYW5kbGVFdmVudChldmVudCwgaGFuZGxlci52bm9kZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUV2ZW50TGlzdGVuZXJzKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIGNvbnN0IG9sZE9uID0gb2xkVm5vZGUuZGF0YS5vbjtcbiAgICBjb25zdCBvbGRMaXN0ZW5lciA9IG9sZFZub2RlLmxpc3RlbmVyO1xuICAgIGNvbnN0IG9sZEVsbSA9IG9sZFZub2RlLmVsbTtcbiAgICBjb25zdCBvbiA9IHZub2RlICYmIHZub2RlLmRhdGEub247XG4gICAgY29uc3QgZWxtID0gKHZub2RlICYmIHZub2RlLmVsbSk7XG4gICAgbGV0IG5hbWU7XG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciByZXVzZWQgaW1tdXRhYmxlIGhhbmRsZXJzXG4gICAgaWYgKG9sZE9uID09PSBvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHJlbW92ZSBleGlzdGluZyBsaXN0ZW5lcnMgd2hpY2ggbm8gbG9uZ2VyIHVzZWRcbiAgICBpZiAob2xkT24gJiYgb2xkTGlzdGVuZXIpIHtcbiAgICAgICAgLy8gaWYgZWxlbWVudCBjaGFuZ2VkIG9yIGRlbGV0ZWQgd2UgcmVtb3ZlIGFsbCBleGlzdGluZyBsaXN0ZW5lcnMgdW5jb25kaXRpb25hbGx5XG4gICAgICAgIGlmICghb24pIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lciBpZiBlbGVtZW50IHdhcyBjaGFuZ2VkIG9yIGV4aXN0aW5nIGxpc3RlbmVycyByZW1vdmVkXG4gICAgICAgICAgICAgICAgb2xkRWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgb2xkTGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lciBpZiBleGlzdGluZyBsaXN0ZW5lciByZW1vdmVkXG4gICAgICAgICAgICAgICAgaWYgKCFvbltuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBvbGRFbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBvbGRMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgbmV3IGxpc3RlbmVycyB3aGljaCBoYXMgbm90IGFscmVhZHkgYXR0YWNoZWRcbiAgICBpZiAob24pIHtcbiAgICAgICAgLy8gcmV1c2UgZXhpc3RpbmcgbGlzdGVuZXIgb3IgY3JlYXRlIG5ld1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9ICh2bm9kZS5saXN0ZW5lciA9XG4gICAgICAgICAgICBvbGRWbm9kZS5saXN0ZW5lciB8fCBjcmVhdGVMaXN0ZW5lcigpKTtcbiAgICAgICAgLy8gdXBkYXRlIHZub2RlIGZvciBsaXN0ZW5lclxuICAgICAgICBsaXN0ZW5lci52bm9kZSA9IHZub2RlO1xuICAgICAgICAvLyBpZiBlbGVtZW50IGNoYW5nZWQgb3IgYWRkZWQgd2UgYWRkIGFsbCBuZWVkZWQgbGlzdGVuZXJzIHVuY29uZGl0aW9uYWxseVxuICAgICAgICBpZiAoIW9sZE9uKSB7XG4gICAgICAgICAgICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgbGlzdGVuZXIgaWYgZWxlbWVudCB3YXMgY2hhbmdlZCBvciBuZXcgbGlzdGVuZXJzIGFkZGVkXG4gICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvbikge1xuICAgICAgICAgICAgICAgIC8vIGFkZCBsaXN0ZW5lciBpZiBuZXcgbGlzdGVuZXIgYWRkZWRcbiAgICAgICAgICAgICAgICBpZiAoIW9sZE9uW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGV2ZW50TGlzdGVuZXJzTW9kdWxlID0ge1xuICAgIGNyZWF0ZTogdXBkYXRlRXZlbnRMaXN0ZW5lcnMsXG4gICAgdXBkYXRlOiB1cGRhdGVFdmVudExpc3RlbmVycyxcbiAgICBkZXN0cm95OiB1cGRhdGVFdmVudExpc3RlbmVycyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudGxpc3RlbmVycy5qcy5tYXAiLCJmdW5jdGlvbiB1cGRhdGVQcm9wcyhvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBsZXQga2V5O1xuICAgIGxldCBjdXI7XG4gICAgbGV0IG9sZDtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IG9sZFByb3BzID0gb2xkVm5vZGUuZGF0YS5wcm9wcztcbiAgICBsZXQgcHJvcHMgPSB2bm9kZS5kYXRhLnByb3BzO1xuICAgIGlmICghb2xkUHJvcHMgJiYgIXByb3BzKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZFByb3BzID09PSBwcm9wcylcbiAgICAgICAgcmV0dXJuO1xuICAgIG9sZFByb3BzID0gb2xkUHJvcHMgfHwge307XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICBmb3IgKGtleSBpbiBwcm9wcykge1xuICAgICAgICBjdXIgPSBwcm9wc1trZXldO1xuICAgICAgICBvbGQgPSBvbGRQcm9wc1trZXldO1xuICAgICAgICBpZiAob2xkICE9PSBjdXIgJiYgKGtleSAhPT0gXCJ2YWx1ZVwiIHx8IGVsbVtrZXldICE9PSBjdXIpKSB7XG4gICAgICAgICAgICBlbG1ba2V5XSA9IGN1cjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBwcm9wc01vZHVsZSA9IHsgY3JlYXRlOiB1cGRhdGVQcm9wcywgdXBkYXRlOiB1cGRhdGVQcm9wcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvcHMuanMubWFwIiwiLy8gQmluZGlnIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGxpa2UgdGhpcyBmaXhlcyBhIGJ1ZyBpbiBJRS9FZGdlLiBTZWUgIzM2MCBhbmQgIzQwOS5cbmNvbnN0IHJhZiA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdykpIHx8XG4gICAgc2V0VGltZW91dDtcbmNvbnN0IG5leHRGcmFtZSA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJhZihmbik7XG4gICAgfSk7XG59O1xubGV0IHJlZmxvd0ZvcmNlZCA9IGZhbHNlO1xuZnVuY3Rpb24gc2V0TmV4dEZyYW1lKG9iaiwgcHJvcCwgdmFsKSB7XG4gICAgbmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2JqW3Byb3BdID0gdmFsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdXBkYXRlU3R5bGUob2xkVm5vZGUsIHZub2RlKSB7XG4gICAgbGV0IGN1cjtcbiAgICBsZXQgbmFtZTtcbiAgICBjb25zdCBlbG0gPSB2bm9kZS5lbG07XG4gICAgbGV0IG9sZFN0eWxlID0gb2xkVm5vZGUuZGF0YS5zdHlsZTtcbiAgICBsZXQgc3R5bGUgPSB2bm9kZS5kYXRhLnN0eWxlO1xuICAgIGlmICghb2xkU3R5bGUgJiYgIXN0eWxlKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKG9sZFN0eWxlID09PSBzdHlsZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9sZFN0eWxlID0gb2xkU3R5bGUgfHwge307XG4gICAgc3R5bGUgPSBzdHlsZSB8fCB7fTtcbiAgICBjb25zdCBvbGRIYXNEZWwgPSBcImRlbGF5ZWRcIiBpbiBvbGRTdHlsZTtcbiAgICBmb3IgKG5hbWUgaW4gb2xkU3R5bGUpIHtcbiAgICAgICAgaWYgKCFzdHlsZVtuYW1lXSkge1xuICAgICAgICAgICAgaWYgKG5hbWVbMF0gPT09IFwiLVwiICYmIG5hbWVbMV0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtLnN0eWxlW25hbWVdID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKG5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgY3VyID0gc3R5bGVbbmFtZV07XG4gICAgICAgIGlmIChuYW1lID09PSBcImRlbGF5ZWRcIiAmJiBzdHlsZS5kZWxheWVkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUyIGluIHN0eWxlLmRlbGF5ZWQpIHtcbiAgICAgICAgICAgICAgICBjdXIgPSBzdHlsZS5kZWxheWVkW25hbWUyXTtcbiAgICAgICAgICAgICAgICBpZiAoIW9sZEhhc0RlbCB8fCBjdXIgIT09IG9sZFN0eWxlLmRlbGF5ZWRbbmFtZTJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE5leHRGcmFtZShlbG0uc3R5bGUsIG5hbWUyLCBjdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lICE9PSBcInJlbW92ZVwiICYmIGN1ciAhPT0gb2xkU3R5bGVbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmIChuYW1lWzBdID09PSBcIi1cIiAmJiBuYW1lWzFdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIGVsbS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBjdXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtLnN0eWxlW25hbWVdID0gY3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlEZXN0cm95U3R5bGUodm5vZGUpIHtcbiAgICBsZXQgc3R5bGU7XG4gICAgbGV0IG5hbWU7XG4gICAgY29uc3QgZWxtID0gdm5vZGUuZWxtO1xuICAgIGNvbnN0IHMgPSB2bm9kZS5kYXRhLnN0eWxlO1xuICAgIGlmICghcyB8fCAhKHN0eWxlID0gcy5kZXN0cm95KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGZvciAobmFtZSBpbiBzdHlsZSkge1xuICAgICAgICBlbG0uc3R5bGVbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVJlbW92ZVN0eWxlKHZub2RlLCBybSkge1xuICAgIGNvbnN0IHMgPSB2bm9kZS5kYXRhLnN0eWxlO1xuICAgIGlmICghcyB8fCAhcy5yZW1vdmUpIHtcbiAgICAgICAgcm0oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlZmxvd0ZvcmNlZCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICB2bm9kZS5lbG0ub2Zmc2V0TGVmdDtcbiAgICAgICAgcmVmbG93Rm9yY2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IG5hbWU7XG4gICAgY29uc3QgZWxtID0gdm5vZGUuZWxtO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBzdHlsZSA9IHMucmVtb3ZlO1xuICAgIGxldCBhbW91bnQgPSAwO1xuICAgIGNvbnN0IGFwcGxpZWQgPSBbXTtcbiAgICBmb3IgKG5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgYXBwbGllZC5wdXNoKG5hbWUpO1xuICAgICAgICBlbG0uc3R5bGVbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICB9XG4gICAgY29uc3QgY29tcFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbG0pO1xuICAgIGNvbnN0IHByb3BzID0gY29tcFN0eWxlW1widHJhbnNpdGlvbi1wcm9wZXJ0eVwiXS5zcGxpdChcIiwgXCIpO1xuICAgIGZvciAoOyBpIDwgcHJvcHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGFwcGxpZWQuaW5kZXhPZihwcm9wc1tpXSkgIT09IC0xKVxuICAgICAgICAgICAgYW1vdW50Kys7XG4gICAgfVxuICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgaWYgKGV2LnRhcmdldCA9PT0gZWxtKVxuICAgICAgICAgICAgLS1hbW91bnQ7XG4gICAgICAgIGlmIChhbW91bnQgPT09IDApXG4gICAgICAgICAgICBybSgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZm9yY2VSZWZsb3coKSB7XG4gICAgcmVmbG93Rm9yY2VkID0gZmFsc2U7XG59XG5leHBvcnQgY29uc3Qgc3R5bGVNb2R1bGUgPSB7XG4gICAgcHJlOiBmb3JjZVJlZmxvdyxcbiAgICBjcmVhdGU6IHVwZGF0ZVN0eWxlLFxuICAgIHVwZGF0ZTogdXBkYXRlU3R5bGUsXG4gICAgZGVzdHJveTogYXBwbHlEZXN0cm95U3R5bGUsXG4gICAgcmVtb3ZlOiBhcHBseVJlbW92ZVN0eWxlLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmpzLm1hcCIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2UsIGltcG9ydC9leHBvcnQgKi9cbmltcG9ydCB7IHZub2RlIH0gZnJvbSBcIi4vdm5vZGVcIjtcbmltcG9ydCB7IGggfSBmcm9tIFwiLi9oXCI7XG5mdW5jdGlvbiBmbGF0dGVuQW5kRmlsdGVyKGNoaWxkcmVuLCBmbGF0dGVuZWQpIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIC8vIGZpbHRlciBvdXQgZmFsc2V5IGNoaWxkcmVuLCBleGNlcHQgMCBzaW5jZSB6ZXJvIGNhbiBiZSBhIHZhbGlkIHZhbHVlIGUuZyBpbnNpZGUgYSBjaGFydFxuICAgICAgICBpZiAoY2hpbGQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgY2hpbGQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGNoaWxkICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgY2hpbGQgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGZsYXR0ZW5BbmRGaWx0ZXIoY2hpbGQsIGZsYXR0ZW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgY2hpbGQgPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgY2hpbGQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgZmxhdHRlbmVkLnB1c2godm5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKGNoaWxkKSwgdW5kZWZpbmVkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbGF0dGVuZWQucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZsYXR0ZW5lZDtcbn1cbi8qKlxuICoganN4L3RzeCBjb21wYXRpYmxlIGZhY3RvcnkgZnVuY3Rpb25cbiAqIHNlZTogaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svanN4Lmh0bWwjZmFjdG9yeS1mdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzeCh0YWcsIGRhdGEsIC4uLmNoaWxkcmVuKSB7XG4gICAgY29uc3QgZmxhdENoaWxkcmVuID0gZmxhdHRlbkFuZEZpbHRlcihjaGlsZHJlbiwgW10pO1xuICAgIGlmICh0eXBlb2YgdGFnID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgLy8gdGFnIGlzIGEgZnVuY3Rpb24gY29tcG9uZW50XG4gICAgICAgIHJldHVybiB0YWcoZGF0YSwgZmxhdENoaWxkcmVuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChmbGF0Q2hpbGRyZW4ubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICAhZmxhdENoaWxkcmVuWzBdLnNlbCAmJlxuICAgICAgICAgICAgZmxhdENoaWxkcmVuWzBdLnRleHQpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgY2hpbGQgaXMgYSBzaW1wbGUgdGV4dCBub2RlLCBwYXNzIGFzIHRleHQgZm9yIGEgc2ltcGxlciB2dHJlZVxuICAgICAgICAgICAgcmV0dXJuIGgodGFnLCBkYXRhLCBmbGF0Q2hpbGRyZW5bMF0udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaCh0YWcsIGRhdGEsIGZsYXRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59XG4oZnVuY3Rpb24gKGpzeCkge1xufSkoanN4IHx8IChqc3ggPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anN4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNvbXBvbmVudCA9IHZvaWQgMDtcbnZhciB1dGlsaXRpZXNfMSA9IHJlcXVpcmUoXCIuL3V0aWxpdGllc1wiKTtcbnZhciBDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzKSB7XG4gICAgICAgIHRoaXMuaWQgPSB1dGlsaXRpZXNfMS5nZW5lcmF0ZUlkKCk7XG4gICAgICAgIHRoaXMuaHRtbCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY3NzID0gXCJcIjtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBfX2Fzc2lnbih7fSwgcHJvcHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxuICAgIENvbXBvbmVudC5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc3R5bGUgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgICAgIHRoaXMuY3NzID0gY3NzLm1hcChmdW5jdGlvbiAoYXR0cmlidXRlKSB7IHJldHVybiBcIlwiICsgYXR0cmlidXRlOyB9KS5qb2luKFwiIFwiKTtcbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuY29tcGlsZSA9IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgIHRoaXMuaHRtbCA9IFwiXFxuICAgICAgICAgICAgPHN0eWxlPlwiICsgKHRoaXMuY3NzID8gdGhpcy5jc3MgOiBcInt9XCIpICsgXCI8L3N0eWxlPlxcbiAgICAgICAgICAgIFwiICsgaHRtbC5yZXBsYWNlKFwiPlwiLCBcImRhdGEtcmVhY2hpZD1cIiArIHRoaXMuaWQgKyBcIj5cIikgKyBcIlxcbiAgICAgICAgXCI7XG4gICAgICAgIHJldHVybiB0aGlzLmh0bWw7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFja0lkID0gdXRpbGl0aWVzXzEuZ2VuZXJhdGVJZCgpO1xuICAgICAgICB2YXIgY2FsbGJhY2tQcm9wcyA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2tJZDogY2FsbGJhY2tJZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pZCBpbiB0aGlzLnBhZ2UuY2FsbGJhY2tzXG4gICAgICAgICAgICA/IHRoaXMucGFnZS5jYWxsYmFja3NbdGhpcy5pZF0ucHVzaChjYWxsYmFja1Byb3BzKVxuICAgICAgICAgICAgOiAodGhpcy5wYWdlLmNhbGxiYWNrc1t0aGlzLmlkXSA9IFtjYWxsYmFja1Byb3BzXSk7XG4gICAgICAgIHJldHVybiBjYWxsYmFja0lkICsgXCIgZGF0YS1cIiArIGNhbGxiYWNrSWQgKyBcIj1cXFwiXCIgKyBjYWxsYmFja0lkICsgXCJcXFwiXCI7XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmNoaWxkID0gZnVuY3Rpb24gKGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgICAgICB2YXIgZXJyb3JMaW5lcyA9IGVycm9yLnNwbGl0KFwiXFxuXCIpWzJdO1xuICAgICAgICB2YXIgbGluZU51bWJlciA9IGVycm9yTGluZXMuc3BsaXQoXCI6XCIpLnNsaWNlKC0yKVswXTtcbiAgICAgICAgdmFyIGNvbE51bWJlciA9IGVycm9yTGluZXMuc3BsaXQoXCI6XCIpLnNsaWNlKC0xKVswXS5yZXBsYWNlKFwiKVwiLCBcIlwiKTtcbiAgICAgICAgdmFyIGtleSA9IFwiXCIgKyAobGluZU51bWJlciArIGNvbE51bWJlcik7XG4gICAgICAgIGlmIChrZXkgaW4gdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldLm1vdW50KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldLmh0bWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5wYWdlID0gdGhpcy5wYWdlO1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldID0gY2hpbGRDb21wb25lbnQ7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5tb3VudCgpO1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50Lmh0bWw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuZ2V0U3RhdGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgfTtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMucGFnZS51cGRhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5DYXJkID0gdm9pZCAwO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudFwiKTtcbnZhciBDYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDYXJkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDYXJkLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdHlsZShbXCIubXktY2FyZCB7IHBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjQwJTsgdG9wOi0yMHB4OyB9XCJdKTtcbiAgICAgICAgdGhpcy5jb21waWxlKFwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTNcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGJvcmRlci1cIiArIHRoaXMucHJvcHMuYWxlcnRUeXBlICsgXCIgbXgtc20tMSBwLTNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZCBib3JkZXItXCIgKyB0aGlzLnByb3BzLmFsZXJ0VHlwZSArIFwiIHNoYWRvdyB0ZXh0LVwiICsgdGhpcy5wcm9wcy5hbGVydFR5cGUgKyBcIiBwLTMgbXktY2FyZFxcXCIgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1cIiArIHRoaXMucHJvcHMuaWNvbiArIFwiXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LVwiICsgdGhpcy5wcm9wcy5hbGVydFR5cGUgKyBcIiB0ZXh0LWNlbnRlciBtdC0zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XCIgKyB0aGlzLnByb3BzLmhlYWRlciArIFwiPC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1cIiArIHRoaXMucHJvcHMuYWxlcnRUeXBlICsgXCIgdGV4dC1jZW50ZXIgbXQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlwiICsgdGhpcy5wcm9wcy50ZXh0ICsgXCI8L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIENhcmQ7XG59KGNvbXBvbmVudF8xLkNvbXBvbmVudCkpO1xuZXhwb3J0cy5DYXJkID0gQ2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNvbnRhaW5lciA9IHZvaWQgMDtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRcIik7XG52YXIgY2FyZF8xID0gcmVxdWlyZShcIi4vY2FyZFwiKTtcbnZhciBDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRhaW5lciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb250YWluZXIucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29tcGFjdCA9IG5ldyBjYXJkXzEuQ2FyZCh7XG4gICAgICAgICAgICBoZWFkZXI6IFwiQ29tcGFjdFwiLFxuICAgICAgICAgICAgdGV4dDogXCJSZWFjaC5qcyBpcyBsZXNzIHRoYW4gMTAwMCBtaW5pZmllZCBsaW5lc1wiLFxuICAgICAgICAgICAgYWxlcnRUeXBlOiBcImluZm9cIixcbiAgICAgICAgICAgIGljb246IFwibGlnaHRidWxiXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdW5vcGluaW9uYXRlZCA9IG5ldyBjYXJkXzEuQ2FyZCh7XG4gICAgICAgICAgICBoZWFkZXI6IFwiVW5vcGluaW9uYXRlZFwiLFxuICAgICAgICAgICAgdGV4dDogXCJSZWFjaC5qcyBnaXZlcyB0aGUgZGV2ZWxvcGVyIGNvbXBsZXRlIGNvbnRyb2xcIixcbiAgICAgICAgICAgIGFsZXJ0VHlwZTogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICBpY29uOiBcImRvdmVcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGUoW1wiLmp1bWJvdHJvbiB7IHBhZGRpbmc6IDEwMHB4OyB9XCJdKTtcbiAgICAgICAgdGhpcy5jb21waWxlKFwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwianVtYm90cm9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHctMTAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiICsgdGhpcy5jaGlsZChjb21wYWN0KSArIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArIHRoaXMuY2hpbGQodW5vcGluaW9uYXRlZCkgKyBcIlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBDb250YWluZXI7XG59KGNvbXBvbmVudF8xLkNvbXBvbmVudCkpO1xuZXhwb3J0cy5Db250YWluZXIgPSBDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlBhZ2UgPSB2b2lkIDA7XG52YXIgc25hYmJkb21fMSA9IHJlcXVpcmUoXCJzbmFiYmRvbVwiKTtcbnZhciBwYXRjaCA9IHNuYWJiZG9tXzEuaW5pdChbXSk7XG52YXIgUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYWdlKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgUGFnZS5wcm90b3R5cGUuYWRkUm9vdEltYWdlID0gZnVuY3Rpb24gKHJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5yb290Q29tcG9uZW50ID0gcm9vdENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5yb290Q29tcG9uZW50LnBhZ2UgPSB0aGlzO1xuICAgICAgICB0aGlzLnJvb3RDb21wb25lbnQubW91bnQoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHRoaXMudGV4dFRvTm9kZSh0aGlzLnJvb3RDb21wb25lbnQuaHRtbCk7XG4gICAgICAgIHRoaXMuaW5qZWN0Q2FsbGJhY2tzKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmVlID0gc25hYmJkb21fMS50b1ZOb2RlKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFBhZ2UucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yb290Q29tcG9uZW50Lm1vdW50KCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcbiAgICBQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy50ZXh0VG9Ob2RlKHRoaXMucm9vdENvbXBvbmVudC5odG1sKTtcbiAgICAgICAgdGhpcy5pbmplY3RDYWxsYmFja3Mobm9kZSk7XG4gICAgICAgIHZhciB0cmVlID0gc25hYmJkb21fMS50b1ZOb2RlKG5vZGUpO1xuICAgICAgICBwYXRjaCh0aGlzLmN1cnJlbnRUcmVlLCB0cmVlKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VHJlZSA9IHRyZWU7XG4gICAgfTtcbiAgICBQYWdlLnByb3RvdHlwZS50ZXh0VG9Ob2RlID0gZnVuY3Rpb24gKGRvbSkge1xuICAgICAgICB2YXIgd3JhcHBlZCA9IFwiPGRpdj5cIiArIGRvbSArIFwiPC9kaXY+XCI7XG4gICAgICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHdyYXBwZWQsIFwidGV4dC9odG1sXCIpLmJvZHlcbiAgICAgICAgICAgIC5maXJzdENoaWxkO1xuICAgIH07XG4gICAgLy8gYWRkcyBjYWxsYmFja3MgKGUuZyBldmVudCBsaXN0ZW5lcnMpIHRvIHRoZSBET00gb25jZSBpdCBoYXMgYmVlbiByZWNvbmNpbGVkIGFuZCByZW5kZXJlZC5cbiAgICAvLyBnb2VzIHRocm91Z2ggdGhlIGNhbGxiYWNrcyBvYmplY3QsIGZpbmRzIHRoZSBlbGVtZW50IGJ5IHRoZSBjYWxsYmFja0lkLCBjaGVja3MgaWYgdGhlXG4gICAgLy8gdmFsdWUgb2YgdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGVzIG1hdGNoZXMgdGhlIGNhbGxiYWNrIGlkXG4gICAgUGFnZS5wcm90b3R5cGUuaW5qZWN0Q2FsbGJhY2tzID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNhbGxiYWNrcykuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2tQcm9wcykge1xuICAgICAgICAgICAgY2FsbGJhY2tQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtXCIgKyBjYWxsYmFjay5jYWxsYmFja0lkICsgXCJdXCIpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXRbY2FsbGJhY2suY2FsbGJhY2tJZF07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSA9IDA7IGF0dHJpYnV0ZSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGF0dHJpYnV0ZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IGVsZW1lbnQuYXR0cmlidXRlc1thdHRyaWJ1dGVdLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gZWxlbWVudC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlID09IGNhbGxiYWNrLmNhbGxiYWNrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50W2F0dHJpYnV0ZU5hbWVdID0gY2FsbGJhY2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FSTjogVW5tb3VudGVkIGNvbXBvbmVudCBleGlzdHM6IFwiICsgY2FsbGJhY2submFtZSArIFwiIC0gXCIgKyBjYWxsYmFjay5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICAgIH07XG4gICAgUGFnZS5wcm90b3R5cGUuaW1wb3J0Q1NTID0gZnVuY3Rpb24gKGNkbikge1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBjZG4pO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH07XG4gICAgcmV0dXJuIFBhZ2U7XG59KCkpO1xuZXhwb3J0cy5QYWdlID0gUGFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IHZvaWQgMDtcbnZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCkudG9TdHJpbmcoMzYpO1xufTtcbmV4cG9ydHMuZ2VuZXJhdGVJZCA9IGdlbmVyYXRlSWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=
