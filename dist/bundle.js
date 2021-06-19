/*! For license information please see bundle.js.LICENSE.txt */
(() => {
    var t = {
            9742: (t, e) => {
                "use strict";
                (e.byteLength = function (t) {
                    var e = c(t),
                        r = e[0],
                        n = e[1];
                    return (3 * (r + n)) / 4 - n;
                }),
                    (e.toByteArray = function (t) {
                        var e,
                            r,
                            i = c(t),
                            s = i[0],
                            a = i[1],
                            l = new o(
                                (function (t, e, r) {
                                    return (3 * (e + r)) / 4 - r;
                                })(0, s, a),
                            ),
                            u = 0,
                            p = a > 0 ? s - 4 : s;
                        for (r = 0; r < p; r += 4)
                            (e =
                                (n[t.charCodeAt(r)] << 18) |
                                (n[t.charCodeAt(r + 1)] << 12) |
                                (n[t.charCodeAt(r + 2)] << 6) |
                                n[t.charCodeAt(r + 3)]),
                                (l[u++] = (e >> 16) & 255),
                                (l[u++] = (e >> 8) & 255),
                                (l[u++] = 255 & e);
                        return (
                            2 === a &&
                                ((e =
                                    (n[t.charCodeAt(r)] << 2) |
                                    (n[t.charCodeAt(r + 1)] >> 4)),
                                (l[u++] = 255 & e)),
                            1 === a &&
                                ((e =
                                    (n[t.charCodeAt(r)] << 10) |
                                    (n[t.charCodeAt(r + 1)] << 4) |
                                    (n[t.charCodeAt(r + 2)] >> 2)),
                                (l[u++] = (e >> 8) & 255),
                                (l[u++] = 255 & e)),
                            l
                        );
                    }),
                    (e.fromByteArray = function (t) {
                        for (
                            var e,
                                n = t.length,
                                o = n % 3,
                                i = [],
                                s = 16383,
                                a = 0,
                                c = n - o;
                            a < c;
                            a += s
                        )
                            i.push(l(t, a, a + s > c ? c : a + s));
                        return (
                            1 === o
                                ? ((e = t[n - 1]),
                                  i.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
                                : 2 === o &&
                                  ((e = (t[n - 2] << 8) + t[n - 1]),
                                  i.push(
                                      r[e >> 10] +
                                          r[(e >> 4) & 63] +
                                          r[(e << 2) & 63] +
                                          "=",
                                  )),
                            i.join("")
                        );
                    });
                for (
                    var r = [],
                        n = [],
                        o =
                            "undefined" != typeof Uint8Array
                                ? Uint8Array
                                : Array,
                        i =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        s = 0,
                        a = i.length;
                    s < a;
                    ++s
                )
                    (r[s] = i[s]), (n[i.charCodeAt(s)] = s);
                function c(t) {
                    var e = t.length;
                    if (e % 4 > 0)
                        throw new Error(
                            "Invalid string. Length must be a multiple of 4",
                        );
                    var r = t.indexOf("=");
                    return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
                }
                function l(t, e, n) {
                    for (var o, i, s = [], a = e; a < n; a += 3)
                        (o =
                            ((t[a] << 16) & 16711680) +
                            ((t[a + 1] << 8) & 65280) +
                            (255 & t[a + 2])),
                            s.push(
                                r[((i = o) >> 18) & 63] +
                                    r[(i >> 12) & 63] +
                                    r[(i >> 6) & 63] +
                                    r[63 & i],
                            );
                    return s.join("");
                }
                (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
            },
            8764: (t, e, r) => {
                "use strict";
                const n = r(9742),
                    o = r(645),
                    i =
                        "function" == typeof Symbol &&
                        "function" == typeof Symbol.for
                            ? Symbol.for("nodejs.util.inspect.custom")
                            : null;
                (e.Buffer = c),
                    (e.SlowBuffer = function (t) {
                        return +t != t && (t = 0), c.alloc(+t);
                    }),
                    (e.INSPECT_MAX_BYTES = 50);
                const s = 2147483647;
                function a(t) {
                    if (t > s)
                        throw new RangeError(
                            'The value "' +
                                t +
                                '" is invalid for option "size"',
                        );
                    const e = new Uint8Array(t);
                    return Object.setPrototypeOf(e, c.prototype), e;
                }
                function c(t, e, r) {
                    if ("number" == typeof t) {
                        if ("string" == typeof e)
                            throw new TypeError(
                                'The "string" argument must be of type string. Received type number',
                            );
                        return p(t);
                    }
                    return l(t, e, r);
                }
                function l(t, e, r) {
                    if ("string" == typeof t)
                        return (function (t, e) {
                            if (
                                (("string" == typeof e && "" !== e) ||
                                    (e = "utf8"),
                                !c.isEncoding(e))
                            )
                                throw new TypeError("Unknown encoding: " + e);
                            const r = 0 | g(t, e);
                            let n = a(r);
                            const o = n.write(t, e);
                            return o !== r && (n = n.slice(0, o)), n;
                        })(t, e);
                    if (ArrayBuffer.isView(t))
                        return (function (t) {
                            if (X(t, Uint8Array)) {
                                const e = new Uint8Array(t);
                                return f(e.buffer, e.byteOffset, e.byteLength);
                            }
                            return h(t);
                        })(t);
                    if (null == t)
                        throw new TypeError(
                            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                                typeof t,
                        );
                    if (X(t, ArrayBuffer) || (t && X(t.buffer, ArrayBuffer)))
                        return f(t, e, r);
                    if (
                        "undefined" != typeof SharedArrayBuffer &&
                        (X(t, SharedArrayBuffer) ||
                            (t && X(t.buffer, SharedArrayBuffer)))
                    )
                        return f(t, e, r);
                    if ("number" == typeof t)
                        throw new TypeError(
                            'The "value" argument must not be of type number. Received type number',
                        );
                    const n = t.valueOf && t.valueOf();
                    if (null != n && n !== t) return c.from(n, e, r);
                    const o = (function (t) {
                        if (c.isBuffer(t)) {
                            const e = 0 | d(t.length),
                                r = a(e);
                            return 0 === r.length || t.copy(r, 0, 0, e), r;
                        }
                        return void 0 !== t.length
                            ? "number" != typeof t.length || W(t.length)
                                ? a(0)
                                : h(t)
                            : "Buffer" === t.type && Array.isArray(t.data)
                            ? h(t.data)
                            : void 0;
                    })(t);
                    if (o) return o;
                    if (
                        "undefined" != typeof Symbol &&
                        null != Symbol.toPrimitive &&
                        "function" == typeof t[Symbol.toPrimitive]
                    )
                        return c.from(t[Symbol.toPrimitive]("string"), e, r);
                    throw new TypeError(
                        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                            typeof t,
                    );
                }
                function u(t) {
                    if ("number" != typeof t)
                        throw new TypeError(
                            '"size" argument must be of type number',
                        );
                    if (t < 0)
                        throw new RangeError(
                            'The value "' +
                                t +
                                '" is invalid for option "size"',
                        );
                }
                function p(t) {
                    return u(t), a(t < 0 ? 0 : 0 | d(t));
                }
                function h(t) {
                    const e = t.length < 0 ? 0 : 0 | d(t.length),
                        r = a(e);
                    for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                    return r;
                }
                function f(t, e, r) {
                    if (e < 0 || t.byteLength < e)
                        throw new RangeError(
                            '"offset" is outside of buffer bounds',
                        );
                    if (t.byteLength < e + (r || 0))
                        throw new RangeError(
                            '"length" is outside of buffer bounds',
                        );
                    let n;
                    return (
                        (n =
                            void 0 === e && void 0 === r
                                ? new Uint8Array(t)
                                : void 0 === r
                                ? new Uint8Array(t, e)
                                : new Uint8Array(t, e, r)),
                        Object.setPrototypeOf(n, c.prototype),
                        n
                    );
                }
                function d(t) {
                    if (t >= s)
                        throw new RangeError(
                            "Attempt to allocate Buffer larger than maximum size: 0x" +
                                s.toString(16) +
                                " bytes",
                        );
                    return 0 | t;
                }
                function g(t, e) {
                    if (c.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || X(t, ArrayBuffer))
                        return t.byteLength;
                    if ("string" != typeof t)
                        throw new TypeError(
                            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                                typeof t,
                        );
                    const r = t.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    let o = !1;
                    for (;;)
                        switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return J(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return Y(t).length;
                            default:
                                if (o) return n ? -1 : J(t).length;
                                (e = ("" + e).toLowerCase()), (o = !0);
                        }
                }
                function m(t, e, r) {
                    let n = !1;
                    if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                        return "";
                    if (
                        ((void 0 === r || r > this.length) && (r = this.length),
                        r <= 0)
                    )
                        return "";
                    if ((r >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8"); ; )
                        switch (t) {
                            case "hex":
                                return D(this, e, r);
                            case "utf8":
                            case "utf-8":
                                return T(this, e, r);
                            case "ascii":
                                return k(this, e, r);
                            case "latin1":
                            case "binary":
                                return L(this, e, r);
                            case "base64":
                                return S(this, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return N(this, e, r);
                            default:
                                if (n)
                                    throw new TypeError(
                                        "Unknown encoding: " + t,
                                    );
                                (t = (t + "").toLowerCase()), (n = !0);
                        }
                }
                function b(t, e, r) {
                    const n = t[e];
                    (t[e] = t[r]), (t[r] = n);
                }
                function y(t, e, r, n, o) {
                    if (0 === t.length) return -1;
                    if (
                        ("string" == typeof r
                            ? ((n = r), (r = 0))
                            : r > 2147483647
                            ? (r = 2147483647)
                            : r < -2147483648 && (r = -2147483648),
                        W((r = +r)) && (r = o ? 0 : t.length - 1),
                        r < 0 && (r = t.length + r),
                        r >= t.length)
                    ) {
                        if (o) return -1;
                        r = t.length - 1;
                    } else if (r < 0) {
                        if (!o) return -1;
                        r = 0;
                    }
                    if (
                        ("string" == typeof e && (e = c.from(e, n)),
                        c.isBuffer(e))
                    )
                        return 0 === e.length ? -1 : v(t, e, r, n, o);
                    if ("number" == typeof e)
                        return (
                            (e &= 255),
                            "function" == typeof Uint8Array.prototype.indexOf
                                ? o
                                    ? Uint8Array.prototype.indexOf.call(t, e, r)
                                    : Uint8Array.prototype.lastIndexOf.call(
                                          t,
                                          e,
                                          r,
                                      )
                                : v(t, [e], r, n, o)
                        );
                    throw new TypeError("val must be string, number or Buffer");
                }
                function v(t, e, r, n, o) {
                    let i,
                        s = 1,
                        a = t.length,
                        c = e.length;
                    if (
                        void 0 !== n &&
                        ("ucs2" === (n = String(n).toLowerCase()) ||
                            "ucs-2" === n ||
                            "utf16le" === n ||
                            "utf-16le" === n)
                    ) {
                        if (t.length < 2 || e.length < 2) return -1;
                        (s = 2), (a /= 2), (c /= 2), (r /= 2);
                    }
                    function l(t, e) {
                        return 1 === s ? t[e] : t.readUInt16BE(e * s);
                    }
                    if (o) {
                        let n = -1;
                        for (i = r; i < a; i++)
                            if (l(t, i) === l(e, -1 === n ? 0 : i - n)) {
                                if ((-1 === n && (n = i), i - n + 1 === c))
                                    return n * s;
                            } else -1 !== n && (i -= i - n), (n = -1);
                    } else
                        for (r + c > a && (r = a - c), i = r; i >= 0; i--) {
                            let r = !0;
                            for (let n = 0; n < c; n++)
                                if (l(t, i + n) !== l(e, n)) {
                                    r = !1;
                                    break;
                                }
                            if (r) return i;
                        }
                    return -1;
                }
                function w(t, e, r, n) {
                    r = Number(r) || 0;
                    const o = t.length - r;
                    n ? (n = Number(n)) > o && (n = o) : (n = o);
                    const i = e.length;
                    let s;
                    for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) {
                        const n = parseInt(e.substr(2 * s, 2), 16);
                        if (W(n)) return s;
                        t[r + s] = n;
                    }
                    return s;
                }
                function _(t, e, r, n) {
                    return Z(J(e, t.length - r), t, r, n);
                }
                function q(t, e, r, n) {
                    return Z(
                        (function (t) {
                            const e = [];
                            for (let r = 0; r < t.length; ++r)
                                e.push(255 & t.charCodeAt(r));
                            return e;
                        })(e),
                        t,
                        r,
                        n,
                    );
                }
                function x(t, e, r, n) {
                    return Z(Y(e), t, r, n);
                }
                function E(t, e, r, n) {
                    return Z(
                        (function (t, e) {
                            let r, n, o;
                            const i = [];
                            for (
                                let s = 0;
                                s < t.length && !((e -= 2) < 0);
                                ++s
                            )
                                (r = t.charCodeAt(s)),
                                    (n = r >> 8),
                                    (o = r % 256),
                                    i.push(o),
                                    i.push(n);
                            return i;
                        })(e, t.length - r),
                        t,
                        r,
                        n,
                    );
                }
                function S(t, e, r) {
                    return 0 === e && r === t.length
                        ? n.fromByteArray(t)
                        : n.fromByteArray(t.slice(e, r));
                }
                function T(t, e, r) {
                    r = Math.min(t.length, r);
                    const n = [];
                    let o = e;
                    for (; o < r; ) {
                        const e = t[o];
                        let i = null,
                            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                        if (o + s <= r) {
                            let r, n, a, c;
                            switch (s) {
                                case 1:
                                    e < 128 && (i = e);
                                    break;
                                case 2:
                                    (r = t[o + 1]),
                                        128 == (192 & r) &&
                                            ((c = ((31 & e) << 6) | (63 & r)),
                                            c > 127 && (i = c));
                                    break;
                                case 3:
                                    (r = t[o + 1]),
                                        (n = t[o + 2]),
                                        128 == (192 & r) &&
                                            128 == (192 & n) &&
                                            ((c =
                                                ((15 & e) << 12) |
                                                ((63 & r) << 6) |
                                                (63 & n)),
                                            c > 2047 &&
                                                (c < 55296 || c > 57343) &&
                                                (i = c));
                                    break;
                                case 4:
                                    (r = t[o + 1]),
                                        (n = t[o + 2]),
                                        (a = t[o + 3]),
                                        128 == (192 & r) &&
                                            128 == (192 & n) &&
                                            128 == (192 & a) &&
                                            ((c =
                                                ((15 & e) << 18) |
                                                ((63 & r) << 12) |
                                                ((63 & n) << 6) |
                                                (63 & a)),
                                            c > 65535 &&
                                                c < 1114112 &&
                                                (i = c));
                            }
                        }
                        null === i
                            ? ((i = 65533), (s = 1))
                            : i > 65535 &&
                              ((i -= 65536),
                              n.push(((i >>> 10) & 1023) | 55296),
                              (i = 56320 | (1023 & i))),
                            n.push(i),
                            (o += s);
                    }
                    return (function (t) {
                        const e = t.length;
                        if (e <= A) return String.fromCharCode.apply(String, t);
                        let r = "",
                            n = 0;
                        for (; n < e; )
                            r += String.fromCharCode.apply(
                                String,
                                t.slice(n, (n += A)),
                            );
                        return r;
                    })(n);
                }
                (e.kMaxLength = s),
                    (c.TYPED_ARRAY_SUPPORT = (function () {
                        try {
                            const t = new Uint8Array(1),
                                e = {
                                    foo: function () {
                                        return 42;
                                    },
                                };
                            return (
                                Object.setPrototypeOf(e, Uint8Array.prototype),
                                Object.setPrototypeOf(t, e),
                                42 === t.foo()
                            );
                        } catch (t) {
                            return !1;
                        }
                    })()),
                    c.TYPED_ARRAY_SUPPORT ||
                        "undefined" == typeof console ||
                        "function" != typeof console.error ||
                        console.error(
                            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
                        ),
                    Object.defineProperty(c.prototype, "parent", {
                        enumerable: !0,
                        get: function () {
                            if (c.isBuffer(this)) return this.buffer;
                        },
                    }),
                    Object.defineProperty(c.prototype, "offset", {
                        enumerable: !0,
                        get: function () {
                            if (c.isBuffer(this)) return this.byteOffset;
                        },
                    }),
                    (c.poolSize = 8192),
                    (c.from = function (t, e, r) {
                        return l(t, e, r);
                    }),
                    Object.setPrototypeOf(c.prototype, Uint8Array.prototype),
                    Object.setPrototypeOf(c, Uint8Array),
                    (c.alloc = function (t, e, r) {
                        return (function (t, e, r) {
                            return (
                                u(t),
                                t <= 0
                                    ? a(t)
                                    : void 0 !== e
                                    ? "string" == typeof r
                                        ? a(t).fill(e, r)
                                        : a(t).fill(e)
                                    : a(t)
                            );
                        })(t, e, r);
                    }),
                    (c.allocUnsafe = function (t) {
                        return p(t);
                    }),
                    (c.allocUnsafeSlow = function (t) {
                        return p(t);
                    }),
                    (c.isBuffer = function (t) {
                        return (
                            null != t && !0 === t._isBuffer && t !== c.prototype
                        );
                    }),
                    (c.compare = function (t, e) {
                        if (
                            (X(t, Uint8Array) &&
                                (t = c.from(t, t.offset, t.byteLength)),
                            X(e, Uint8Array) &&
                                (e = c.from(e, e.offset, e.byteLength)),
                            !c.isBuffer(t) || !c.isBuffer(e))
                        )
                            throw new TypeError(
                                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
                            );
                        if (t === e) return 0;
                        let r = t.length,
                            n = e.length;
                        for (let o = 0, i = Math.min(r, n); o < i; ++o)
                            if (t[o] !== e[o]) {
                                (r = t[o]), (n = e[o]);
                                break;
                            }
                        return r < n ? -1 : n < r ? 1 : 0;
                    }),
                    (c.isEncoding = function (t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1;
                        }
                    }),
                    (c.concat = function (t, e) {
                        if (!Array.isArray(t))
                            throw new TypeError(
                                '"list" argument must be an Array of Buffers',
                            );
                        if (0 === t.length) return c.alloc(0);
                        let r;
                        if (void 0 === e)
                            for (e = 0, r = 0; r < t.length; ++r)
                                e += t[r].length;
                        const n = c.allocUnsafe(e);
                        let o = 0;
                        for (r = 0; r < t.length; ++r) {
                            let e = t[r];
                            if (X(e, Uint8Array))
                                o + e.length > n.length
                                    ? (c.isBuffer(e) || (e = c.from(e)),
                                      e.copy(n, o))
                                    : Uint8Array.prototype.set.call(n, e, o);
                            else {
                                if (!c.isBuffer(e))
                                    throw new TypeError(
                                        '"list" argument must be an Array of Buffers',
                                    );
                                e.copy(n, o);
                            }
                            o += e.length;
                        }
                        return n;
                    }),
                    (c.byteLength = g),
                    (c.prototype._isBuffer = !0),
                    (c.prototype.swap16 = function () {
                        const t = this.length;
                        if (t % 2 != 0)
                            throw new RangeError(
                                "Buffer size must be a multiple of 16-bits",
                            );
                        for (let e = 0; e < t; e += 2) b(this, e, e + 1);
                        return this;
                    }),
                    (c.prototype.swap32 = function () {
                        const t = this.length;
                        if (t % 4 != 0)
                            throw new RangeError(
                                "Buffer size must be a multiple of 32-bits",
                            );
                        for (let e = 0; e < t; e += 4)
                            b(this, e, e + 3), b(this, e + 1, e + 2);
                        return this;
                    }),
                    (c.prototype.swap64 = function () {
                        const t = this.length;
                        if (t % 8 != 0)
                            throw new RangeError(
                                "Buffer size must be a multiple of 64-bits",
                            );
                        for (let e = 0; e < t; e += 8)
                            b(this, e, e + 7),
                                b(this, e + 1, e + 6),
                                b(this, e + 2, e + 5),
                                b(this, e + 3, e + 4);
                        return this;
                    }),
                    (c.prototype.toString = function () {
                        const t = this.length;
                        return 0 === t
                            ? ""
                            : 0 === arguments.length
                            ? T(this, 0, t)
                            : m.apply(this, arguments);
                    }),
                    (c.prototype.toLocaleString = c.prototype.toString),
                    (c.prototype.equals = function (t) {
                        if (!c.isBuffer(t))
                            throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === c.compare(this, t);
                    }),
                    (c.prototype.inspect = function () {
                        let t = "";
                        const r = e.INSPECT_MAX_BYTES;
                        return (
                            (t = this.toString("hex", 0, r)
                                .replace(/(.{2})/g, "$1 ")
                                .trim()),
                            this.length > r && (t += " ... "),
                            "<Buffer " + t + ">"
                        );
                    }),
                    i && (c.prototype[i] = c.prototype.inspect),
                    (c.prototype.compare = function (t, e, r, n, o) {
                        if (
                            (X(t, Uint8Array) &&
                                (t = c.from(t, t.offset, t.byteLength)),
                            !c.isBuffer(t))
                        )
                            throw new TypeError(
                                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                                    typeof t,
                            );
                        if (
                            (void 0 === e && (e = 0),
                            void 0 === r && (r = t ? t.length : 0),
                            void 0 === n && (n = 0),
                            void 0 === o && (o = this.length),
                            e < 0 || r > t.length || n < 0 || o > this.length)
                        )
                            throw new RangeError("out of range index");
                        if (n >= o && e >= r) return 0;
                        if (n >= o) return -1;
                        if (e >= r) return 1;
                        if (this === t) return 0;
                        let i = (o >>>= 0) - (n >>>= 0),
                            s = (r >>>= 0) - (e >>>= 0);
                        const a = Math.min(i, s),
                            l = this.slice(n, o),
                            u = t.slice(e, r);
                        for (let t = 0; t < a; ++t)
                            if (l[t] !== u[t]) {
                                (i = l[t]), (s = u[t]);
                                break;
                            }
                        return i < s ? -1 : s < i ? 1 : 0;
                    }),
                    (c.prototype.includes = function (t, e, r) {
                        return -1 !== this.indexOf(t, e, r);
                    }),
                    (c.prototype.indexOf = function (t, e, r) {
                        return y(this, t, e, r, !0);
                    }),
                    (c.prototype.lastIndexOf = function (t, e, r) {
                        return y(this, t, e, r, !1);
                    }),
                    (c.prototype.write = function (t, e, r, n) {
                        if (void 0 === e)
                            (n = "utf8"), (r = this.length), (e = 0);
                        else if (void 0 === r && "string" == typeof e)
                            (n = e), (r = this.length), (e = 0);
                        else {
                            if (!isFinite(e))
                                throw new Error(
                                    "Buffer.write(string, encoding, offset[, length]) is no longer supported",
                                );
                            (e >>>= 0),
                                isFinite(r)
                                    ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                                    : ((n = r), (r = void 0));
                        }
                        const o = this.length - e;
                        if (
                            ((void 0 === r || r > o) && (r = o),
                            (t.length > 0 && (r < 0 || e < 0)) ||
                                e > this.length)
                        )
                            throw new RangeError(
                                "Attempt to write outside buffer bounds",
                            );
                        n || (n = "utf8");
                        let i = !1;
                        for (;;)
                            switch (n) {
                                case "hex":
                                    return w(this, t, e, r);
                                case "utf8":
                                case "utf-8":
                                    return _(this, t, e, r);
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return q(this, t, e, r);
                                case "base64":
                                    return x(this, t, e, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return E(this, t, e, r);
                                default:
                                    if (i)
                                        throw new TypeError(
                                            "Unknown encoding: " + n,
                                        );
                                    (n = ("" + n).toLowerCase()), (i = !0);
                            }
                    }),
                    (c.prototype.toJSON = function () {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(
                                this._arr || this,
                                0,
                            ),
                        };
                    });
                const A = 4096;
                function k(t, e, r) {
                    let n = "";
                    r = Math.min(t.length, r);
                    for (let o = e; o < r; ++o)
                        n += String.fromCharCode(127 & t[o]);
                    return n;
                }
                function L(t, e, r) {
                    let n = "";
                    r = Math.min(t.length, r);
                    for (let o = e; o < r; ++o) n += String.fromCharCode(t[o]);
                    return n;
                }
                function D(t, e, r) {
                    const n = t.length;
                    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                    let o = "";
                    for (let n = e; n < r; ++n) o += K[t[n]];
                    return o;
                }
                function N(t, e, r) {
                    const n = t.slice(e, r);
                    let o = "";
                    for (let t = 0; t < n.length - 1; t += 2)
                        o += String.fromCharCode(n[t] + 256 * n[t + 1]);
                    return o;
                }
                function C(t, e, r) {
                    if (t % 1 != 0 || t < 0)
                        throw new RangeError("offset is not uint");
                    if (t + e > r)
                        throw new RangeError(
                            "Trying to access beyond buffer length",
                        );
                }
                function B(t, e, r, n, o, i) {
                    if (!c.isBuffer(t))
                        throw new TypeError(
                            '"buffer" argument must be a Buffer instance',
                        );
                    if (e > o || e < i)
                        throw new RangeError(
                            '"value" argument is out of bounds',
                        );
                    if (r + n > t.length)
                        throw new RangeError("Index out of range");
                }
                function R(t, e, r, n, o) {
                    j(e, n, o, t, r, 7);
                    let i = Number(e & BigInt(4294967295));
                    (t[r++] = i),
                        (i >>= 8),
                        (t[r++] = i),
                        (i >>= 8),
                        (t[r++] = i),
                        (i >>= 8),
                        (t[r++] = i);
                    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
                    return (
                        (t[r++] = s),
                        (s >>= 8),
                        (t[r++] = s),
                        (s >>= 8),
                        (t[r++] = s),
                        (s >>= 8),
                        (t[r++] = s),
                        r
                    );
                }
                function O(t, e, r, n, o) {
                    j(e, n, o, t, r, 7);
                    let i = Number(e & BigInt(4294967295));
                    (t[r + 7] = i),
                        (i >>= 8),
                        (t[r + 6] = i),
                        (i >>= 8),
                        (t[r + 5] = i),
                        (i >>= 8),
                        (t[r + 4] = i);
                    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
                    return (
                        (t[r + 3] = s),
                        (s >>= 8),
                        (t[r + 2] = s),
                        (s >>= 8),
                        (t[r + 1] = s),
                        (s >>= 8),
                        (t[r] = s),
                        r + 8
                    );
                }
                function U(t, e, r, n, o, i) {
                    if (r + n > t.length)
                        throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range");
                }
                function I(t, e, r, n, i) {
                    return (
                        (e = +e),
                        (r >>>= 0),
                        i || U(t, 0, r, 4),
                        o.write(t, e, r, n, 23, 4),
                        r + 4
                    );
                }
                function V(t, e, r, n, i) {
                    return (
                        (e = +e),
                        (r >>>= 0),
                        i || U(t, 0, r, 8),
                        o.write(t, e, r, n, 52, 8),
                        r + 8
                    );
                }
                (c.prototype.slice = function (t, e) {
                    const r = this.length;
                    (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                        (e = void 0 === e ? r : ~~e) < 0
                            ? (e += r) < 0 && (e = 0)
                            : e > r && (e = r),
                        e < t && (e = t);
                    const n = this.subarray(t, e);
                    return Object.setPrototypeOf(n, c.prototype), n;
                }),
                    (c.prototype.readUintLE = c.prototype.readUIntLE =
                        function (t, e, r) {
                            (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                            let n = this[t],
                                o = 1,
                                i = 0;
                            for (; ++i < e && (o *= 256); )
                                n += this[t + i] * o;
                            return n;
                        }),
                    (c.prototype.readUintBE = c.prototype.readUIntBE =
                        function (t, e, r) {
                            (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                            let n = this[t + --e],
                                o = 1;
                            for (; e > 0 && (o *= 256); )
                                n += this[t + --e] * o;
                            return n;
                        }),
                    (c.prototype.readUint8 = c.prototype.readUInt8 =
                        function (t, e) {
                            return (
                                (t >>>= 0), e || C(t, 1, this.length), this[t]
                            );
                        }),
                    (c.prototype.readUint16LE = c.prototype.readUInt16LE =
                        function (t, e) {
                            return (
                                (t >>>= 0),
                                e || C(t, 2, this.length),
                                this[t] | (this[t + 1] << 8)
                            );
                        }),
                    (c.prototype.readUint16BE = c.prototype.readUInt16BE =
                        function (t, e) {
                            return (
                                (t >>>= 0),
                                e || C(t, 2, this.length),
                                (this[t] << 8) | this[t + 1]
                            );
                        }),
                    (c.prototype.readUint32LE = c.prototype.readUInt32LE =
                        function (t, e) {
                            return (
                                (t >>>= 0),
                                e || C(t, 4, this.length),
                                (this[t] |
                                    (this[t + 1] << 8) |
                                    (this[t + 2] << 16)) +
                                    16777216 * this[t + 3]
                            );
                        }),
                    (c.prototype.readUint32BE = c.prototype.readUInt32BE =
                        function (t, e) {
                            return (
                                (t >>>= 0),
                                e || C(t, 4, this.length),
                                16777216 * this[t] +
                                    ((this[t + 1] << 16) |
                                        (this[t + 2] << 8) |
                                        this[t + 3])
                            );
                        }),
                    (c.prototype.readBigUInt64LE = $(function (t) {
                        G((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n =
                                e +
                                256 * this[++t] +
                                65536 * this[++t] +
                                this[++t] * 2 ** 24,
                            o =
                                this[++t] +
                                256 * this[++t] +
                                65536 * this[++t] +
                                r * 2 ** 24;
                        return BigInt(n) + (BigInt(o) << BigInt(32));
                    })),
                    (c.prototype.readBigUInt64BE = $(function (t) {
                        G((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n =
                                e * 2 ** 24 +
                                65536 * this[++t] +
                                256 * this[++t] +
                                this[++t],
                            o =
                                this[++t] * 2 ** 24 +
                                65536 * this[++t] +
                                256 * this[++t] +
                                r;
                        return (BigInt(n) << BigInt(32)) + BigInt(o);
                    })),
                    (c.prototype.readIntLE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                        let n = this[t],
                            o = 1,
                            i = 0;
                        for (; ++i < e && (o *= 256); ) n += this[t + i] * o;
                        return (
                            (o *= 128), n >= o && (n -= Math.pow(2, 8 * e)), n
                        );
                    }),
                    (c.prototype.readIntBE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || C(t, e, this.length);
                        let n = e,
                            o = 1,
                            i = this[t + --n];
                        for (; n > 0 && (o *= 256); ) i += this[t + --n] * o;
                        return (
                            (o *= 128), i >= o && (i -= Math.pow(2, 8 * e)), i
                        );
                    }),
                    (c.prototype.readInt8 = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 1, this.length),
                            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                        );
                    }),
                    (c.prototype.readInt16LE = function (t, e) {
                        (t >>>= 0), e || C(t, 2, this.length);
                        const r = this[t] | (this[t + 1] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (c.prototype.readInt16BE = function (t, e) {
                        (t >>>= 0), e || C(t, 2, this.length);
                        const r = this[t + 1] | (this[t] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (c.prototype.readInt32LE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 4, this.length),
                            this[t] |
                                (this[t + 1] << 8) |
                                (this[t + 2] << 16) |
                                (this[t + 3] << 24)
                        );
                    }),
                    (c.prototype.readInt32BE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 4, this.length),
                            (this[t] << 24) |
                                (this[t + 1] << 16) |
                                (this[t + 2] << 8) |
                                this[t + 3]
                        );
                    }),
                    (c.prototype.readBigInt64LE = $(function (t) {
                        G((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n =
                            this[t + 4] +
                            256 * this[t + 5] +
                            65536 * this[t + 6] +
                            (r << 24);
                        return (
                            (BigInt(n) << BigInt(32)) +
                            BigInt(
                                e +
                                    256 * this[++t] +
                                    65536 * this[++t] +
                                    this[++t] * 2 ** 24,
                            )
                        );
                    })),
                    (c.prototype.readBigInt64BE = $(function (t) {
                        G((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n =
                            (e << 24) +
                            65536 * this[++t] +
                            256 * this[++t] +
                            this[++t];
                        return (
                            (BigInt(n) << BigInt(32)) +
                            BigInt(
                                this[++t] * 2 ** 24 +
                                    65536 * this[++t] +
                                    256 * this[++t] +
                                    r,
                            )
                        );
                    })),
                    (c.prototype.readFloatLE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 4, this.length),
                            o.read(this, t, !0, 23, 4)
                        );
                    }),
                    (c.prototype.readFloatBE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 4, this.length),
                            o.read(this, t, !1, 23, 4)
                        );
                    }),
                    (c.prototype.readDoubleLE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 8, this.length),
                            o.read(this, t, !0, 52, 8)
                        );
                    }),
                    (c.prototype.readDoubleBE = function (t, e) {
                        return (
                            (t >>>= 0),
                            e || C(t, 8, this.length),
                            o.read(this, t, !1, 52, 8)
                        );
                    }),
                    (c.prototype.writeUintLE = c.prototype.writeUIntLE =
                        function (t, e, r, n) {
                            (t = +t),
                                (e >>>= 0),
                                (r >>>= 0),
                                n ||
                                    B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                            let o = 1,
                                i = 0;
                            for (this[e] = 255 & t; ++i < r && (o *= 256); )
                                this[e + i] = (t / o) & 255;
                            return e + r;
                        }),
                    (c.prototype.writeUintBE = c.prototype.writeUIntBE =
                        function (t, e, r, n) {
                            (t = +t),
                                (e >>>= 0),
                                (r >>>= 0),
                                n ||
                                    B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                            let o = r - 1,
                                i = 1;
                            for (
                                this[e + o] = 255 & t;
                                --o >= 0 && (i *= 256);

                            )
                                this[e + o] = (t / i) & 255;
                            return e + r;
                        }),
                    (c.prototype.writeUint8 = c.prototype.writeUInt8 =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 1, 255, 0),
                                (this[e] = 255 & t),
                                e + 1
                            );
                        }),
                    (c.prototype.writeUint16LE = c.prototype.writeUInt16LE =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 2, 65535, 0),
                                (this[e] = 255 & t),
                                (this[e + 1] = t >>> 8),
                                e + 2
                            );
                        }),
                    (c.prototype.writeUint16BE = c.prototype.writeUInt16BE =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 2, 65535, 0),
                                (this[e] = t >>> 8),
                                (this[e + 1] = 255 & t),
                                e + 2
                            );
                        }),
                    (c.prototype.writeUint32LE = c.prototype.writeUInt32LE =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 4, 4294967295, 0),
                                (this[e + 3] = t >>> 24),
                                (this[e + 2] = t >>> 16),
                                (this[e + 1] = t >>> 8),
                                (this[e] = 255 & t),
                                e + 4
                            );
                        }),
                    (c.prototype.writeUint32BE = c.prototype.writeUInt32BE =
                        function (t, e, r) {
                            return (
                                (t = +t),
                                (e >>>= 0),
                                r || B(this, t, e, 4, 4294967295, 0),
                                (this[e] = t >>> 24),
                                (this[e + 1] = t >>> 16),
                                (this[e + 2] = t >>> 8),
                                (this[e + 3] = 255 & t),
                                e + 4
                            );
                        }),
                    (c.prototype.writeBigUInt64LE = $(function (t, e = 0) {
                        return R(
                            this,
                            t,
                            e,
                            BigInt(0),
                            BigInt("0xffffffffffffffff"),
                        );
                    })),
                    (c.prototype.writeBigUInt64BE = $(function (t, e = 0) {
                        return O(
                            this,
                            t,
                            e,
                            BigInt(0),
                            BigInt("0xffffffffffffffff"),
                        );
                    })),
                    (c.prototype.writeIntLE = function (t, e, r, n) {
                        if (((t = +t), (e >>>= 0), !n)) {
                            const n = Math.pow(2, 8 * r - 1);
                            B(this, t, e, r, n - 1, -n);
                        }
                        let o = 0,
                            i = 1,
                            s = 0;
                        for (this[e] = 255 & t; ++o < r && (i *= 256); )
                            t < 0 &&
                                0 === s &&
                                0 !== this[e + o - 1] &&
                                (s = 1),
                                (this[e + o] = (((t / i) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (c.prototype.writeIntBE = function (t, e, r, n) {
                        if (((t = +t), (e >>>= 0), !n)) {
                            const n = Math.pow(2, 8 * r - 1);
                            B(this, t, e, r, n - 1, -n);
                        }
                        let o = r - 1,
                            i = 1,
                            s = 0;
                        for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
                            t < 0 &&
                                0 === s &&
                                0 !== this[e + o + 1] &&
                                (s = 1),
                                (this[e + o] = (((t / i) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (c.prototype.writeInt8 = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 1, 127, -128),
                            t < 0 && (t = 255 + t + 1),
                            (this[e] = 255 & t),
                            e + 1
                        );
                    }),
                    (c.prototype.writeInt16LE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 2, 32767, -32768),
                            (this[e] = 255 & t),
                            (this[e + 1] = t >>> 8),
                            e + 2
                        );
                    }),
                    (c.prototype.writeInt16BE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 2, 32767, -32768),
                            (this[e] = t >>> 8),
                            (this[e + 1] = 255 & t),
                            e + 2
                        );
                    }),
                    (c.prototype.writeInt32LE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 4, 2147483647, -2147483648),
                            (this[e] = 255 & t),
                            (this[e + 1] = t >>> 8),
                            (this[e + 2] = t >>> 16),
                            (this[e + 3] = t >>> 24),
                            e + 4
                        );
                    }),
                    (c.prototype.writeInt32BE = function (t, e, r) {
                        return (
                            (t = +t),
                            (e >>>= 0),
                            r || B(this, t, e, 4, 2147483647, -2147483648),
                            t < 0 && (t = 4294967295 + t + 1),
                            (this[e] = t >>> 24),
                            (this[e + 1] = t >>> 16),
                            (this[e + 2] = t >>> 8),
                            (this[e + 3] = 255 & t),
                            e + 4
                        );
                    }),
                    (c.prototype.writeBigInt64LE = $(function (t, e = 0) {
                        return R(
                            this,
                            t,
                            e,
                            -BigInt("0x8000000000000000"),
                            BigInt("0x7fffffffffffffff"),
                        );
                    })),
                    (c.prototype.writeBigInt64BE = $(function (t, e = 0) {
                        return O(
                            this,
                            t,
                            e,
                            -BigInt("0x8000000000000000"),
                            BigInt("0x7fffffffffffffff"),
                        );
                    })),
                    (c.prototype.writeFloatLE = function (t, e, r) {
                        return I(this, t, e, !0, r);
                    }),
                    (c.prototype.writeFloatBE = function (t, e, r) {
                        return I(this, t, e, !1, r);
                    }),
                    (c.prototype.writeDoubleLE = function (t, e, r) {
                        return V(this, t, e, !0, r);
                    }),
                    (c.prototype.writeDoubleBE = function (t, e, r) {
                        return V(this, t, e, !1, r);
                    }),
                    (c.prototype.copy = function (t, e, r, n) {
                        if (!c.isBuffer(t))
                            throw new TypeError("argument should be a Buffer");
                        if (
                            (r || (r = 0),
                            n || 0 === n || (n = this.length),
                            e >= t.length && (e = t.length),
                            e || (e = 0),
                            n > 0 && n < r && (n = r),
                            n === r)
                        )
                            return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0)
                            throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length)
                            throw new RangeError("Index out of range");
                        if (n < 0)
                            throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length),
                            t.length - e < n - r && (n = t.length - e + r);
                        const o = n - r;
                        return (
                            this === t &&
                            "function" == typeof Uint8Array.prototype.copyWithin
                                ? this.copyWithin(e, r, n)
                                : Uint8Array.prototype.set.call(
                                      t,
                                      this.subarray(r, n),
                                      e,
                                  ),
                            o
                        );
                    }),
                    (c.prototype.fill = function (t, e, r, n) {
                        if ("string" == typeof t) {
                            if (
                                ("string" == typeof e
                                    ? ((n = e), (e = 0), (r = this.length))
                                    : "string" == typeof r &&
                                      ((n = r), (r = this.length)),
                                void 0 !== n && "string" != typeof n)
                            )
                                throw new TypeError(
                                    "encoding must be a string",
                                );
                            if ("string" == typeof n && !c.isEncoding(n))
                                throw new TypeError("Unknown encoding: " + n);
                            if (1 === t.length) {
                                const e = t.charCodeAt(0);
                                (("utf8" === n && e < 128) || "latin1" === n) &&
                                    (t = e);
                            }
                        } else
                            "number" == typeof t
                                ? (t &= 255)
                                : "boolean" == typeof t && (t = Number(t));
                        if (e < 0 || this.length < e || this.length < r)
                            throw new RangeError("Out of range index");
                        if (r <= e) return this;
                        let o;
                        if (
                            ((e >>>= 0),
                            (r = void 0 === r ? this.length : r >>> 0),
                            t || (t = 0),
                            "number" == typeof t)
                        )
                            for (o = e; o < r; ++o) this[o] = t;
                        else {
                            const i = c.isBuffer(t) ? t : c.from(t, n),
                                s = i.length;
                            if (0 === s)
                                throw new TypeError(
                                    'The value "' +
                                        t +
                                        '" is invalid for argument "value"',
                                );
                            for (o = 0; o < r - e; ++o) this[o + e] = i[o % s];
                        }
                        return this;
                    });
                const P = {};
                function H(t, e, r) {
                    P[t] = class extends r {
                        constructor() {
                            super(),
                                Object.defineProperty(this, "message", {
                                    value: e.apply(this, arguments),
                                    writable: !0,
                                    configurable: !0,
                                }),
                                (this.name = `${this.name} [${t}]`),
                                this.stack,
                                delete this.name;
                        }
                        get code() {
                            return t;
                        }
                        set code(t) {
                            Object.defineProperty(this, "code", {
                                configurable: !0,
                                enumerable: !0,
                                value: t,
                                writable: !0,
                            });
                        }
                        toString() {
                            return `${this.name} [${t}]: ${this.message}`;
                        }
                    };
                }
                function M(t) {
                    let e = "",
                        r = t.length;
                    const n = "-" === t[0] ? 1 : 0;
                    for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
                    return `${t.slice(0, r)}${e}`;
                }
                function j(t, e, r, n, o, i) {
                    if (t > r || t < e) {
                        const n = "bigint" == typeof e ? "n" : "";
                        let o;
                        throw (
                            ((o =
                                i > 3
                                    ? 0 === e || e === BigInt(0)
                                        ? `>= 0${n} and < 2${n} ** ${
                                              8 * (i + 1)
                                          }${n}`
                                        : `>= -(2${n} ** ${
                                              8 * (i + 1) - 1
                                          }${n}) and < 2 ** ${
                                              8 * (i + 1) - 1
                                          }${n}`
                                    : `>= ${e}${n} and <= ${r}${n}`),
                            new P.ERR_OUT_OF_RANGE("value", o, t))
                        );
                    }
                    !(function (t, e, r) {
                        G(e, "offset"),
                            (void 0 !== t[e] && void 0 !== t[e + r]) ||
                                F(e, t.length - (r + 1));
                    })(n, o, i);
                }
                function G(t, e) {
                    if ("number" != typeof t)
                        throw new P.ERR_INVALID_ARG_TYPE(e, "number", t);
                }
                function F(t, e, r) {
                    if (Math.floor(t) !== t)
                        throw (
                            (G(t, r),
                            new P.ERR_OUT_OF_RANGE(
                                r || "offset",
                                "an integer",
                                t,
                            ))
                        );
                    if (e < 0) throw new P.ERR_BUFFER_OUT_OF_BOUNDS();
                    throw new P.ERR_OUT_OF_RANGE(
                        r || "offset",
                        `>= ${r ? 1 : 0} and <= ${e}`,
                        t,
                    );
                }
                H(
                    "ERR_BUFFER_OUT_OF_BOUNDS",
                    function (t) {
                        return t
                            ? `${t} is outside of buffer bounds`
                            : "Attempt to access memory outside buffer bounds";
                    },
                    RangeError,
                ),
                    H(
                        "ERR_INVALID_ARG_TYPE",
                        function (t, e) {
                            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
                        },
                        TypeError,
                    ),
                    H(
                        "ERR_OUT_OF_RANGE",
                        function (t, e, r) {
                            let n = `The value of "${t}" is out of range.`,
                                o = r;
                            return (
                                Number.isInteger(r) && Math.abs(r) > 2 ** 32
                                    ? (o = M(String(r)))
                                    : "bigint" == typeof r &&
                                      ((o = String(r)),
                                      (r > BigInt(2) ** BigInt(32) ||
                                          r < -(BigInt(2) ** BigInt(32))) &&
                                          (o = M(o)),
                                      (o += "n")),
                                (n += ` It must be ${e}. Received ${o}`),
                                n
                            );
                        },
                        RangeError,
                    );
                const z = /[^+/0-9A-Za-z-_]/g;
                function J(t, e) {
                    let r;
                    e = e || 1 / 0;
                    const n = t.length;
                    let o = null;
                    const i = [];
                    for (let s = 0; s < n; ++s) {
                        if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
                            if (!o) {
                                if (r > 56319) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue;
                                }
                                if (s + 1 === n) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue;
                                }
                                o = r;
                                continue;
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
                                continue;
                            }
                            r = 65536 + (((o - 55296) << 10) | (r - 56320));
                        } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                        if (((o = null), r < 128)) {
                            if ((e -= 1) < 0) break;
                            i.push(r);
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            i.push((r >> 6) | 192, (63 & r) | 128);
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            i.push(
                                (r >> 12) | 224,
                                ((r >> 6) & 63) | 128,
                                (63 & r) | 128,
                            );
                        } else {
                            if (!(r < 1114112))
                                throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            i.push(
                                (r >> 18) | 240,
                                ((r >> 12) & 63) | 128,
                                ((r >> 6) & 63) | 128,
                                (63 & r) | 128,
                            );
                        }
                    }
                    return i;
                }
                function Y(t) {
                    return n.toByteArray(
                        (function (t) {
                            if (
                                (t = (t = t.split("=")[0])
                                    .trim()
                                    .replace(z, "")).length < 2
                            )
                                return "";
                            for (; t.length % 4 != 0; ) t += "=";
                            return t;
                        })(t),
                    );
                }
                function Z(t, e, r, n) {
                    let o;
                    for (
                        o = 0;
                        o < n && !(o + r >= e.length || o >= t.length);
                        ++o
                    )
                        e[o + r] = t[o];
                    return o;
                }
                function X(t, e) {
                    return (
                        t instanceof e ||
                        (null != t &&
                            null != t.constructor &&
                            null != t.constructor.name &&
                            t.constructor.name === e.name)
                    );
                }
                function W(t) {
                    return t != t;
                }
                const K = (function () {
                    const t = "0123456789abcdef",
                        e = new Array(256);
                    for (let r = 0; r < 16; ++r) {
                        const n = 16 * r;
                        for (let o = 0; o < 16; ++o) e[n + o] = t[r] + t[o];
                    }
                    return e;
                })();
                function $(t) {
                    return "undefined" == typeof BigInt ? Q : t;
                }
                function Q() {
                    throw new Error("BigInt not supported");
                }
            },
            3237: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}}',
                );
            },
            6138: (t, e, r) => {
                var n = r(3850),
                    o = r(3661),
                    i = r(3237);
                (i.elementNames.__proto__ = null),
                    (i.attributeNames.__proto__ = null);
                var s = {
                        __proto__: null,
                        style: !0,
                        script: !0,
                        xmp: !0,
                        iframe: !0,
                        noembed: !0,
                        noframes: !0,
                        plaintext: !0,
                        noscript: !0,
                    },
                    a = {
                        __proto__: null,
                        area: !0,
                        base: !0,
                        basefont: !0,
                        br: !0,
                        col: !0,
                        command: !0,
                        embed: !0,
                        frame: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        isindex: !0,
                        keygen: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0,
                    },
                    c = (t.exports = function (t, e) {
                        Array.isArray(t) || t.cheerio || (t = [t]),
                            (e = e || {});
                        for (var r = "", o = 0; o < t.length; o++) {
                            var i = t[o];
                            "root" === i.type
                                ? (r += c(i.children, e))
                                : n.isTag(i)
                                ? (r += u(i, e))
                                : i.type === n.Directive
                                ? (r += p(i))
                                : i.type === n.Comment
                                ? (r += d(i))
                                : i.type === n.CDATA
                                ? (r += f(i))
                                : (r += h(i, e));
                        }
                        return r;
                    }),
                    l = [
                        "mi",
                        "mo",
                        "mn",
                        "ms",
                        "mtext",
                        "annotation-xml",
                        "foreignObject",
                        "desc",
                        "title",
                    ];
                function u(t, e) {
                    "foreign" === e.xmlMode &&
                        ((t.name = i.elementNames[t.name] || t.name),
                        t.parent &&
                            l.indexOf(t.parent.name) >= 0 &&
                            (e = Object.assign({}, e, { xmlMode: !1 }))),
                        !e.xmlMode &&
                            ["svg", "math"].indexOf(t.name) >= 0 &&
                            (e = Object.assign({}, e, { xmlMode: "foreign" }));
                    var r = "<" + t.name,
                        n = (function (t, e) {
                            if (t) {
                                var r,
                                    n = "";
                                for (var s in t)
                                    (r = t[s]),
                                        n && (n += " "),
                                        "foreign" === e.xmlMode &&
                                            (s = i.attributeNames[s] || s),
                                        (n += s),
                                        ((null !== r && "" !== r) ||
                                            e.xmlMode) &&
                                            (n +=
                                                '="' +
                                                (e.decodeEntities
                                                    ? o.encodeXML(r)
                                                    : r.replace(
                                                          /\"/g,
                                                          "&quot;",
                                                      )) +
                                                '"');
                                return n;
                            }
                        })(t.attribs, e);
                    return (
                        n && (r += " " + n),
                        !e.xmlMode || (t.children && 0 !== t.children.length)
                            ? ((r += ">"),
                              t.children && (r += c(t.children, e)),
                              (a[t.name] && !e.xmlMode) ||
                                  (r += "</" + t.name + ">"))
                            : (r += "/>"),
                        r
                    );
                }
                function p(t) {
                    return "<" + t.data + ">";
                }
                function h(t, e) {
                    var r = t.data || "";
                    return (
                        !e.decodeEntities ||
                            (t.parent && t.parent.name in s) ||
                            (r = o.encodeXML(r)),
                        r
                    );
                }
                function f(t) {
                    return "<![CDATA[" + t.children[0].data + "]]>";
                }
                function d(t) {
                    return "\x3c!--" + t.data + "--\x3e";
                }
            },
            3850: (t, e) => {
                "use strict";
                var r;
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.Doctype =
                        e.CDATA =
                        e.Tag =
                        e.Style =
                        e.Script =
                        e.Comment =
                        e.Directive =
                        e.Text =
                        e.Root =
                        e.isTag =
                        e.ElementType =
                            void 0),
                    (function (t) {
                        (t.Root = "root"),
                            (t.Text = "text"),
                            (t.Directive = "directive"),
                            (t.Comment = "comment"),
                            (t.Script = "script"),
                            (t.Style = "style"),
                            (t.Tag = "tag"),
                            (t.CDATA = "cdata"),
                            (t.Doctype = "doctype");
                    })((r = e.ElementType || (e.ElementType = {}))),
                    (e.isTag = function (t) {
                        return (
                            t.type === r.Tag ||
                            t.type === r.Script ||
                            t.type === r.Style
                        );
                    }),
                    (e.Root = r.Root),
                    (e.Text = r.Text),
                    (e.Directive = r.Directive),
                    (e.Comment = r.Comment),
                    (e.Script = r.Script),
                    (e.Style = r.Style),
                    (e.Tag = r.Tag),
                    (e.CDATA = r.CDATA),
                    (e.Doctype = r.Doctype);
            },
            901: function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
                var o = n(r(3045)),
                    i = n(r(3946)),
                    s = n(r(5389)),
                    a = n(r(6312)),
                    c = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
                function l(t) {
                    var e = p(t);
                    return function (t) {
                        return String(t).replace(c, e);
                    };
                }
                (e.decodeXML = l(s.default)),
                    (e.decodeHTMLStrict = l(o.default));
                var u = function (t, e) {
                    return t < e ? 1 : -1;
                };
                function p(t) {
                    return function (e) {
                        if ("#" === e.charAt(1)) {
                            var r = e.charAt(2);
                            return "X" === r || "x" === r
                                ? a.default(parseInt(e.substr(3), 16))
                                : a.default(parseInt(e.substr(2), 10));
                        }
                        return t[e.slice(1, -1)] || e;
                    };
                }
                e.decodeHTML = (function () {
                    for (
                        var t = Object.keys(i.default).sort(u),
                            e = Object.keys(o.default).sort(u),
                            r = 0,
                            n = 0;
                        r < e.length;
                        r++
                    )
                        t[n] === e[r] ? ((e[r] += ";?"), n++) : (e[r] += ";");
                    var s = new RegExp(
                            "&(?:" +
                                e.join("|") +
                                "|#[xX][\\da-fA-F]+;?|#\\d+;?)",
                            "g",
                        ),
                        a = p(o.default);
                    function c(t) {
                        return ";" !== t.substr(-1) && (t += ";"), a(t);
                    }
                    return function (t) {
                        return String(t).replace(s, c);
                    };
                })();
            },
            6312: function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = n(r(705)),
                    i =
                        String.fromCodePoint ||
                        function (t) {
                            var e = "";
                            return (
                                t > 65535 &&
                                    ((t -= 65536),
                                    (e += String.fromCharCode(
                                        ((t >>> 10) & 1023) | 55296,
                                    )),
                                    (t = 56320 | (1023 & t))),
                                e + String.fromCharCode(t)
                            );
                        };
                e.default = function (t) {
                    return (t >= 55296 && t <= 57343) || t > 1114111
                        ? "�"
                        : (t in o.default && (t = o.default[t]), i(t));
                };
            },
            5278: function (t, e, r) {
                "use strict";
                var n =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.escapeUTF8 =
                        e.escape =
                        e.encodeNonAsciiHTML =
                        e.encodeHTML =
                        e.encodeXML =
                            void 0);
                var o = u(n(r(5389)).default),
                    i = p(o);
                e.encodeXML = m(o);
                var s,
                    a,
                    c = u(n(r(3045)).default),
                    l = p(c);
                function u(t) {
                    return Object.keys(t)
                        .sort()
                        .reduce(function (e, r) {
                            return (e[t[r]] = "&" + r + ";"), e;
                        }, {});
                }
                function p(t) {
                    for (
                        var e = [], r = [], n = 0, o = Object.keys(t);
                        n < o.length;
                        n++
                    ) {
                        var i = o[n];
                        1 === i.length ? e.push("\\" + i) : r.push(i);
                    }
                    e.sort();
                    for (var s = 0; s < e.length - 1; s++) {
                        for (
                            var a = s;
                            a < e.length - 1 &&
                            e[a].charCodeAt(1) + 1 === e[a + 1].charCodeAt(1);

                        )
                            a += 1;
                        var c = 1 + a - s;
                        c < 3 || e.splice(s, c, e[s] + "-" + e[a]);
                    }
                    return (
                        r.unshift("[" + e.join("") + "]"),
                        new RegExp(r.join("|"), "g")
                    );
                }
                (e.encodeHTML =
                    ((s = c),
                    (a = l),
                    function (t) {
                        return t
                            .replace(a, function (t) {
                                return s[t];
                            })
                            .replace(h, d);
                    })),
                    (e.encodeNonAsciiHTML = m(c));
                var h =
                        /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
                    f =
                        null != String.prototype.codePointAt
                            ? function (t) {
                                  return t.codePointAt(0);
                              }
                            : function (t) {
                                  return (
                                      1024 * (t.charCodeAt(0) - 55296) +
                                      t.charCodeAt(1) -
                                      56320 +
                                      65536
                                  );
                              };
                function d(t) {
                    return (
                        "&#x" +
                        (t.length > 1 ? f(t) : t.charCodeAt(0))
                            .toString(16)
                            .toUpperCase() +
                        ";"
                    );
                }
                var g = new RegExp(i.source + "|" + h.source, "g");
                function m(t) {
                    return function (e) {
                        return e.replace(g, function (e) {
                            return t[e] || d(e);
                        });
                    };
                }
                (e.escape = function (t) {
                    return t.replace(g, d);
                }),
                    (e.escapeUTF8 = function (t) {
                        return t.replace(i, d);
                    });
            },
            3661: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.decodeXMLStrict =
                        e.decodeHTML5Strict =
                        e.decodeHTML4Strict =
                        e.decodeHTML5 =
                        e.decodeHTML4 =
                        e.decodeHTMLStrict =
                        e.decodeHTML =
                        e.decodeXML =
                        e.encodeHTML5 =
                        e.encodeHTML4 =
                        e.escapeUTF8 =
                        e.escape =
                        e.encodeNonAsciiHTML =
                        e.encodeHTML =
                        e.encodeXML =
                        e.encode =
                        e.decodeStrict =
                        e.decode =
                            void 0);
                var n = r(901),
                    o = r(5278);
                (e.decode = function (t, e) {
                    return (!e || e <= 0 ? n.decodeXML : n.decodeHTML)(t);
                }),
                    (e.decodeStrict = function (t, e) {
                        return (
                            !e || e <= 0 ? n.decodeXML : n.decodeHTMLStrict
                        )(t);
                    }),
                    (e.encode = function (t, e) {
                        return (!e || e <= 0 ? o.encodeXML : o.encodeHTML)(t);
                    });
                var i = r(5278);
                Object.defineProperty(e, "encodeXML", {
                    enumerable: !0,
                    get: function () {
                        return i.encodeXML;
                    },
                }),
                    Object.defineProperty(e, "encodeHTML", {
                        enumerable: !0,
                        get: function () {
                            return i.encodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "encodeNonAsciiHTML", {
                        enumerable: !0,
                        get: function () {
                            return i.encodeNonAsciiHTML;
                        },
                    }),
                    Object.defineProperty(e, "escape", {
                        enumerable: !0,
                        get: function () {
                            return i.escape;
                        },
                    }),
                    Object.defineProperty(e, "escapeUTF8", {
                        enumerable: !0,
                        get: function () {
                            return i.escapeUTF8;
                        },
                    }),
                    Object.defineProperty(e, "encodeHTML4", {
                        enumerable: !0,
                        get: function () {
                            return i.encodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "encodeHTML5", {
                        enumerable: !0,
                        get: function () {
                            return i.encodeHTML;
                        },
                    });
                var s = r(901);
                Object.defineProperty(e, "decodeXML", {
                    enumerable: !0,
                    get: function () {
                        return s.decodeXML;
                    },
                }),
                    Object.defineProperty(e, "decodeHTML", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTMLStrict", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTMLStrict;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTML4", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTML5", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTML;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTML4Strict", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTMLStrict;
                        },
                    }),
                    Object.defineProperty(e, "decodeHTML5Strict", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeHTMLStrict;
                        },
                    }),
                    Object.defineProperty(e, "decodeXMLStrict", {
                        enumerable: !0,
                        get: function () {
                            return s.decodeXML;
                        },
                    });
            },
            705: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}',
                );
            },
            3045: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}',
                );
            },
            3946: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}',
                );
            },
            5389: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}',
                );
            },
            4431: (t) => {
                t.exports = {
                    Text: "text",
                    Directive: "directive",
                    Comment: "comment",
                    Script: "script",
                    Style: "style",
                    Tag: "tag",
                    CDATA: "cdata",
                    Doctype: "doctype",
                    isTag: function (t) {
                        return (
                            "tag" === t.type ||
                            "script" === t.type ||
                            "style" === t.type
                        );
                    },
                };
            },
            8753: (t, e, r) => {
                var n = r(4431),
                    o = /\s+/g,
                    i = r(7790),
                    s = r(4407);
                function a(t, e, r) {
                    "object" == typeof t
                        ? ((r = e), (e = t), (t = null))
                        : "function" == typeof e && ((r = e), (e = c)),
                        (this._callback = t),
                        (this._options = e || c),
                        (this._elementCB = r),
                        (this.dom = []),
                        (this._done = !1),
                        (this._tagStack = []),
                        (this._parser = this._parser || null);
                }
                var c = {
                    normalizeWhitespace: !1,
                    withStartIndices: !1,
                    withEndIndices: !1,
                };
                (a.prototype.onparserinit = function (t) {
                    this._parser = t;
                }),
                    (a.prototype.onreset = function () {
                        a.call(
                            this,
                            this._callback,
                            this._options,
                            this._elementCB,
                        );
                    }),
                    (a.prototype.onend = function () {
                        this._done ||
                            ((this._done = !0),
                            (this._parser = null),
                            this._handleCallback(null));
                    }),
                    (a.prototype._handleCallback = a.prototype.onerror =
                        function (t) {
                            if ("function" == typeof this._callback)
                                this._callback(t, this.dom);
                            else if (t) throw t;
                        }),
                    (a.prototype.onclosetag = function () {
                        var t = this._tagStack.pop();
                        this._options.withEndIndices &&
                            t &&
                            (t.endIndex = this._parser.endIndex),
                            this._elementCB && this._elementCB(t);
                    }),
                    (a.prototype._createDomElement = function (t) {
                        if (!this._options.withDomLvl1) return t;
                        var e;
                        for (var r in ((e =
                            "tag" === t.type
                                ? Object.create(s)
                                : Object.create(i)),
                        t))
                            t.hasOwnProperty(r) && (e[r] = t[r]);
                        return e;
                    }),
                    (a.prototype._addDomElement = function (t) {
                        var e = this._tagStack[this._tagStack.length - 1],
                            r = e ? e.children : this.dom,
                            n = r[r.length - 1];
                        (t.next = null),
                            this._options.withStartIndices &&
                                (t.startIndex = this._parser.startIndex),
                            this._options.withEndIndices &&
                                (t.endIndex = this._parser.endIndex),
                            n ? ((t.prev = n), (n.next = t)) : (t.prev = null),
                            r.push(t),
                            (t.parent = e || null);
                    }),
                    (a.prototype.onopentag = function (t, e) {
                        var r = {
                                type:
                                    "script" === t
                                        ? n.Script
                                        : "style" === t
                                        ? n.Style
                                        : n.Tag,
                                name: t,
                                attribs: e,
                                children: [],
                            },
                            o = this._createDomElement(r);
                        this._addDomElement(o), this._tagStack.push(o);
                    }),
                    (a.prototype.ontext = function (t) {
                        var e,
                            r =
                                this._options.normalizeWhitespace ||
                                this._options.ignoreWhitespace;
                        if (
                            !this._tagStack.length &&
                            this.dom.length &&
                            (e = this.dom[this.dom.length - 1]).type === n.Text
                        )
                            r
                                ? (e.data = (e.data + t).replace(o, " "))
                                : (e.data += t);
                        else if (
                            this._tagStack.length &&
                            (e = this._tagStack[this._tagStack.length - 1]) &&
                            (e = e.children[e.children.length - 1]) &&
                            e.type === n.Text
                        )
                            r
                                ? (e.data = (e.data + t).replace(o, " "))
                                : (e.data += t);
                        else {
                            r && (t = t.replace(o, " "));
                            var i = this._createDomElement({
                                data: t,
                                type: n.Text,
                            });
                            this._addDomElement(i);
                        }
                    }),
                    (a.prototype.oncomment = function (t) {
                        var e = this._tagStack[this._tagStack.length - 1];
                        if (e && e.type === n.Comment) e.data += t;
                        else {
                            var r = { data: t, type: n.Comment },
                                o = this._createDomElement(r);
                            this._addDomElement(o), this._tagStack.push(o);
                        }
                    }),
                    (a.prototype.oncdatastart = function () {
                        var t = {
                                children: [{ data: "", type: n.Text }],
                                type: n.CDATA,
                            },
                            e = this._createDomElement(t);
                        this._addDomElement(e), this._tagStack.push(e);
                    }),
                    (a.prototype.oncommentend = a.prototype.oncdataend =
                        function () {
                            this._tagStack.pop();
                        }),
                    (a.prototype.onprocessinginstruction = function (t, e) {
                        var r = this._createDomElement({
                            name: t,
                            data: e,
                            type: n.Directive,
                        });
                        this._addDomElement(r);
                    }),
                    (t.exports = a);
            },
            4407: (t, e, r) => {
                var n = r(7790),
                    o = (t.exports = Object.create(n)),
                    i = { tagName: "name" };
                Object.keys(i).forEach(function (t) {
                    var e = i[t];
                    Object.defineProperty(o, t, {
                        get: function () {
                            return this[e] || null;
                        },
                        set: function (t) {
                            return (this[e] = t), t;
                        },
                    });
                });
            },
            7790: (t) => {
                var e = (t.exports = {
                        get firstChild() {
                            var t = this.children;
                            return (t && t[0]) || null;
                        },
                        get lastChild() {
                            var t = this.children;
                            return (t && t[t.length - 1]) || null;
                        },
                        get nodeType() {
                            return n[this.type] || n.element;
                        },
                    }),
                    r = {
                        tagName: "name",
                        childNodes: "children",
                        parentNode: "parent",
                        previousSibling: "prev",
                        nextSibling: "next",
                        nodeValue: "data",
                    },
                    n = { element: 1, text: 3, cdata: 4, comment: 8 };
                Object.keys(r).forEach(function (t) {
                    var n = r[t];
                    Object.defineProperty(e, t, {
                        get: function () {
                            return this[n] || null;
                        },
                        set: function (t) {
                            return (this[n] = t), t;
                        },
                    });
                });
            },
            2417: (t, e, r) => {
                var n = t.exports;
                [r(3346), r(5010), r(6765), r(8043), r(3905), r(4975)].forEach(
                    function (t) {
                        Object.keys(t).forEach(function (e) {
                            n[e] = t[e].bind(n);
                        });
                    },
                );
            },
            4975: (t, e) => {
                e.removeSubsets = function (t) {
                    for (var e, r, n, o = t.length; --o > -1; ) {
                        for (e = r = t[o], t[o] = null, n = !0; r; ) {
                            if (t.indexOf(r) > -1) {
                                (n = !1), t.splice(o, 1);
                                break;
                            }
                            r = r.parent;
                        }
                        n && (t[o] = e);
                    }
                    return t;
                };
                var r = (e.compareDocumentPosition = function (t, e) {
                    var r,
                        n,
                        o,
                        i,
                        s,
                        a,
                        c = [],
                        l = [];
                    if (t === e) return 0;
                    for (r = t; r; ) c.unshift(r), (r = r.parent);
                    for (r = e; r; ) l.unshift(r), (r = r.parent);
                    for (a = 0; c[a] === l[a]; ) a++;
                    return 0 === a
                        ? 1
                        : ((o = (n = c[a - 1]).children),
                          (i = c[a]),
                          (s = l[a]),
                          o.indexOf(i) > o.indexOf(s)
                              ? n === e
                                  ? 20
                                  : 4
                              : n === t
                              ? 10
                              : 2);
                });
                e.uniqueSort = function (t) {
                    var e,
                        n,
                        o = t.length;
                    for (t = t.slice(); --o > -1; )
                        (e = t[o]),
                            (n = t.indexOf(e)) > -1 && n < o && t.splice(o, 1);
                    return (
                        t.sort(function (t, e) {
                            var n = r(t, e);
                            return 2 & n ? -1 : 4 & n ? 1 : 0;
                        }),
                        t
                    );
                };
            },
            3905: (t, e, r) => {
                var n = r(4431),
                    o = (e.isTag = n.isTag);
                e.testElement = function (t, e) {
                    for (var r in t)
                        if (t.hasOwnProperty(r))
                            if ("tag_name" === r) {
                                if (!o(e) || !t.tag_name(e.name)) return !1;
                            } else if ("tag_type" === r) {
                                if (!t.tag_type(e.type)) return !1;
                            } else if ("tag_contains" === r) {
                                if (o(e) || !t.tag_contains(e.data)) return !1;
                            } else if (!e.attribs || !t[r](e.attribs[r]))
                                return !1;
                    return !0;
                };
                var i = {
                    tag_name: function (t) {
                        return "function" == typeof t
                            ? function (e) {
                                  return o(e) && t(e.name);
                              }
                            : "*" === t
                            ? o
                            : function (e) {
                                  return o(e) && e.name === t;
                              };
                    },
                    tag_type: function (t) {
                        return "function" == typeof t
                            ? function (e) {
                                  return t(e.type);
                              }
                            : function (e) {
                                  return e.type === t;
                              };
                    },
                    tag_contains: function (t) {
                        return "function" == typeof t
                            ? function (e) {
                                  return !o(e) && t(e.data);
                              }
                            : function (e) {
                                  return !o(e) && e.data === t;
                              };
                    },
                };
                function s(t, e) {
                    return "function" == typeof e
                        ? function (r) {
                              return r.attribs && e(r.attribs[t]);
                          }
                        : function (r) {
                              return r.attribs && r.attribs[t] === e;
                          };
                }
                function a(t, e) {
                    return function (r) {
                        return t(r) || e(r);
                    };
                }
                (e.getElements = function (t, e, r, n) {
                    var o = Object.keys(t).map(function (e) {
                        var r = t[e];
                        return e in i ? i[e](r) : s(e, r);
                    });
                    return 0 === o.length
                        ? []
                        : this.filter(o.reduce(a), e, r, n);
                }),
                    (e.getElementById = function (t, e, r) {
                        return (
                            Array.isArray(e) || (e = [e]),
                            this.findOne(s("id", t), e, !1 !== r)
                        );
                    }),
                    (e.getElementsByTagName = function (t, e, r, n) {
                        return this.filter(i.tag_name(t), e, r, n);
                    }),
                    (e.getElementsByTagType = function (t, e, r, n) {
                        return this.filter(i.tag_type(t), e, r, n);
                    });
            },
            6765: (t, e) => {
                (e.removeElement = function (t) {
                    if (
                        (t.prev && (t.prev.next = t.next),
                        t.next && (t.next.prev = t.prev),
                        t.parent)
                    ) {
                        var e = t.parent.children;
                        e.splice(e.lastIndexOf(t), 1);
                    }
                }),
                    (e.replaceElement = function (t, e) {
                        var r = (e.prev = t.prev);
                        r && (r.next = e);
                        var n = (e.next = t.next);
                        n && (n.prev = e);
                        var o = (e.parent = t.parent);
                        if (o) {
                            var i = o.children;
                            i[i.lastIndexOf(t)] = e;
                        }
                    }),
                    (e.appendChild = function (t, e) {
                        if (((e.parent = t), 1 !== t.children.push(e))) {
                            var r = t.children[t.children.length - 2];
                            (r.next = e), (e.prev = r), (e.next = null);
                        }
                    }),
                    (e.append = function (t, e) {
                        var r = t.parent,
                            n = t.next;
                        if (
                            ((e.next = n),
                            (e.prev = t),
                            (t.next = e),
                            (e.parent = r),
                            n)
                        ) {
                            if (((n.prev = e), r)) {
                                var o = r.children;
                                o.splice(o.lastIndexOf(n), 0, e);
                            }
                        } else r && r.children.push(e);
                    }),
                    (e.prepend = function (t, e) {
                        var r = t.parent;
                        if (r) {
                            var n = r.children;
                            n.splice(n.lastIndexOf(t), 0, e);
                        }
                        t.prev && (t.prev.next = e),
                            (e.parent = r),
                            (e.prev = t.prev),
                            (e.next = t),
                            (t.prev = e);
                    });
            },
            8043: (t, e, r) => {
                var n = r(4431).isTag;
                function o(t, e, r, n) {
                    for (
                        var i, s = [], a = 0, c = e.length;
                        a < c &&
                        !(t(e[a]) && (s.push(e[a]), --n <= 0)) &&
                        ((i = e[a].children),
                        !(
                            r &&
                            i &&
                            i.length > 0 &&
                            ((i = o(t, i, r, n)),
                            (s = s.concat(i)),
                            (n -= i.length) <= 0)
                        ));
                        a++
                    );
                    return s;
                }
                t.exports = {
                    filter: function (t, e, r, n) {
                        return (
                            Array.isArray(e) || (e = [e]),
                            ("number" == typeof n && isFinite(n)) ||
                                (n = 1 / 0),
                            o(t, e, !1 !== r, n)
                        );
                    },
                    find: o,
                    findOneChild: function (t, e) {
                        for (var r = 0, n = e.length; r < n; r++)
                            if (t(e[r])) return e[r];
                        return null;
                    },
                    findOne: function t(e, r) {
                        for (
                            var o = null, i = 0, s = r.length;
                            i < s && !o;
                            i++
                        )
                            n(r[i]) &&
                                (e(r[i])
                                    ? (o = r[i])
                                    : r[i].children.length > 0 &&
                                      (o = t(e, r[i].children)));
                        return o;
                    },
                    existsOne: function t(e, r) {
                        for (var o = 0, i = r.length; o < i; o++)
                            if (
                                n(r[o]) &&
                                (e(r[o]) ||
                                    (r[o].children.length > 0 &&
                                        t(e, r[o].children)))
                            )
                                return !0;
                        return !1;
                    },
                    findAll: function (t, e) {
                        for (var r = [], o = e.slice(); o.length; ) {
                            var i = o.shift();
                            n(i) &&
                                (i.children &&
                                    i.children.length > 0 &&
                                    o.unshift.apply(o, i.children),
                                t(i) && r.push(i));
                        }
                        return r;
                    },
                };
            },
            3346: (t, e, r) => {
                var n = r(4431),
                    o = r(6138),
                    i = n.isTag;
                t.exports = {
                    getInnerHTML: function (t, e) {
                        return t.children
                            ? t.children
                                  .map(function (t) {
                                      return o(t, e);
                                  })
                                  .join("")
                            : "";
                    },
                    getOuterHTML: o,
                    getText: function t(e) {
                        return Array.isArray(e)
                            ? e.map(t).join("")
                            : i(e)
                            ? "br" === e.name
                                ? "\n"
                                : t(e.children)
                            : e.type === n.CDATA
                            ? t(e.children)
                            : e.type === n.Text
                            ? e.data
                            : "";
                    },
                };
            },
            5010: (t, e) => {
                var r = (e.getChildren = function (t) {
                        return t.children;
                    }),
                    n = (e.getParent = function (t) {
                        return t.parent;
                    });
                (e.getSiblings = function (t) {
                    var e = n(t);
                    return e ? r(e) : [t];
                }),
                    (e.getAttributeValue = function (t, e) {
                        return t.attribs && t.attribs[e];
                    }),
                    (e.hasAttrib = function (t, e) {
                        return !!t.attribs && hasOwnProperty.call(t.attribs, e);
                    }),
                    (e.getName = function (t) {
                        return t.name;
                    });
            },
            6751: (t, e, r) => {
                var n = r(3689),
                    o = r(5615);
                t.exports = function (t) {
                    if ("string" != typeof t)
                        throw new TypeError("Expected a String");
                    return t.replace(/&(#?[^;\W]+;?)/g, function (t, e) {
                        var r;
                        if ((r = /^#(\d+);?$/.exec(e)))
                            return n.ucs2.encode([parseInt(r[1], 10)]);
                        if ((r = /^#[Xx]([A-Fa-f0-9]+);?/.exec(e)))
                            return n.ucs2.encode([parseInt(r[1], 16)]);
                        var i = /;$/.test(e),
                            s = i ? e.replace(/;$/, "") : e,
                            a = o[s] || (i && o[e]);
                        return "number" == typeof a
                            ? n.ucs2.encode([a])
                            : "string" == typeof a
                            ? a
                            : "&" + e;
                    });
                };
            },
            9151: (t, e, r) => {
                var n = r(3689),
                    o = r(8245);
                t.exports = function (t, e) {
                    if ("string" != typeof t)
                        throw new TypeError("Expected a String");
                    e || (e = {});
                    var r = !0;
                    e.named && (r = !1),
                        void 0 !== e.numeric && (r = e.numeric);
                    for (
                        var i = e.special || {
                                '"': !0,
                                "'": !0,
                                "<": !0,
                                ">": !0,
                                "&": !0,
                            },
                            s = n.ucs2.decode(t),
                            a = [],
                            c = 0;
                        c < s.length;
                        c++
                    ) {
                        var l = s[c],
                            u = n.ucs2.encode([l]),
                            p = o[l];
                        p && (l >= 127 || i[u]) && !r
                            ? a.push("&" + (/;$/.test(p) ? p : p + ";"))
                            : l < 32 || l >= 127 || i[u]
                            ? a.push("&#" + l + ";")
                            : a.push(u);
                    }
                    return a.join("");
                };
            },
            5615: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute;":"Á","Aacute":"Á","aacute;":"á","aacute":"á","Abreve;":"Ă","abreve;":"ă","ac;":"∾","acd;":"∿","acE;":"∾̳","Acirc;":"Â","Acirc":"Â","acirc;":"â","acirc":"â","acute;":"´","acute":"´","Acy;":"А","acy;":"а","AElig;":"Æ","AElig":"Æ","aelig;":"æ","aelig":"æ","af;":"⁡","Afr;":"𝔄","afr;":"𝔞","Agrave;":"À","Agrave":"À","agrave;":"à","agrave":"à","alefsym;":"ℵ","aleph;":"ℵ","Alpha;":"Α","alpha;":"α","Amacr;":"Ā","amacr;":"ā","amalg;":"⨿","AMP;":"&","AMP":"&","amp;":"&","amp":"&","And;":"⩓","and;":"∧","andand;":"⩕","andd;":"⩜","andslope;":"⩘","andv;":"⩚","ang;":"∠","ange;":"⦤","angle;":"∠","angmsd;":"∡","angmsdaa;":"⦨","angmsdab;":"⦩","angmsdac;":"⦪","angmsdad;":"⦫","angmsdae;":"⦬","angmsdaf;":"⦭","angmsdag;":"⦮","angmsdah;":"⦯","angrt;":"∟","angrtvb;":"⊾","angrtvbd;":"⦝","angsph;":"∢","angst;":"Å","angzarr;":"⍼","Aogon;":"Ą","aogon;":"ą","Aopf;":"𝔸","aopf;":"𝕒","ap;":"≈","apacir;":"⩯","apE;":"⩰","ape;":"≊","apid;":"≋","apos;":"\'","ApplyFunction;":"⁡","approx;":"≈","approxeq;":"≊","Aring;":"Å","Aring":"Å","aring;":"å","aring":"å","Ascr;":"𝒜","ascr;":"𝒶","Assign;":"≔","ast;":"*","asymp;":"≈","asympeq;":"≍","Atilde;":"Ã","Atilde":"Ã","atilde;":"ã","atilde":"ã","Auml;":"Ä","Auml":"Ä","auml;":"ä","auml":"ä","awconint;":"∳","awint;":"⨑","backcong;":"≌","backepsilon;":"϶","backprime;":"‵","backsim;":"∽","backsimeq;":"⋍","Backslash;":"∖","Barv;":"⫧","barvee;":"⊽","Barwed;":"⌆","barwed;":"⌅","barwedge;":"⌅","bbrk;":"⎵","bbrktbrk;":"⎶","bcong;":"≌","Bcy;":"Б","bcy;":"б","bdquo;":"„","becaus;":"∵","Because;":"∵","because;":"∵","bemptyv;":"⦰","bepsi;":"϶","bernou;":"ℬ","Bernoullis;":"ℬ","Beta;":"Β","beta;":"β","beth;":"ℶ","between;":"≬","Bfr;":"𝔅","bfr;":"𝔟","bigcap;":"⋂","bigcirc;":"◯","bigcup;":"⋃","bigodot;":"⨀","bigoplus;":"⨁","bigotimes;":"⨂","bigsqcup;":"⨆","bigstar;":"★","bigtriangledown;":"▽","bigtriangleup;":"△","biguplus;":"⨄","bigvee;":"⋁","bigwedge;":"⋀","bkarow;":"⤍","blacklozenge;":"⧫","blacksquare;":"▪","blacktriangle;":"▴","blacktriangledown;":"▾","blacktriangleleft;":"◂","blacktriangleright;":"▸","blank;":"␣","blk12;":"▒","blk14;":"░","blk34;":"▓","block;":"█","bne;":"=⃥","bnequiv;":"≡⃥","bNot;":"⫭","bnot;":"⌐","Bopf;":"𝔹","bopf;":"𝕓","bot;":"⊥","bottom;":"⊥","bowtie;":"⋈","boxbox;":"⧉","boxDL;":"╗","boxDl;":"╖","boxdL;":"╕","boxdl;":"┐","boxDR;":"╔","boxDr;":"╓","boxdR;":"╒","boxdr;":"┌","boxH;":"═","boxh;":"─","boxHD;":"╦","boxHd;":"╤","boxhD;":"╥","boxhd;":"┬","boxHU;":"╩","boxHu;":"╧","boxhU;":"╨","boxhu;":"┴","boxminus;":"⊟","boxplus;":"⊞","boxtimes;":"⊠","boxUL;":"╝","boxUl;":"╜","boxuL;":"╛","boxul;":"┘","boxUR;":"╚","boxUr;":"╙","boxuR;":"╘","boxur;":"└","boxV;":"║","boxv;":"│","boxVH;":"╬","boxVh;":"╫","boxvH;":"╪","boxvh;":"┼","boxVL;":"╣","boxVl;":"╢","boxvL;":"╡","boxvl;":"┤","boxVR;":"╠","boxVr;":"╟","boxvR;":"╞","boxvr;":"├","bprime;":"‵","Breve;":"˘","breve;":"˘","brvbar;":"¦","brvbar":"¦","Bscr;":"ℬ","bscr;":"𝒷","bsemi;":"⁏","bsim;":"∽","bsime;":"⋍","bsol;":"\\\\","bsolb;":"⧅","bsolhsub;":"⟈","bull;":"•","bullet;":"•","bump;":"≎","bumpE;":"⪮","bumpe;":"≏","Bumpeq;":"≎","bumpeq;":"≏","Cacute;":"Ć","cacute;":"ć","Cap;":"⋒","cap;":"∩","capand;":"⩄","capbrcup;":"⩉","capcap;":"⩋","capcup;":"⩇","capdot;":"⩀","CapitalDifferentialD;":"ⅅ","caps;":"∩︀","caret;":"⁁","caron;":"ˇ","Cayleys;":"ℭ","ccaps;":"⩍","Ccaron;":"Č","ccaron;":"č","Ccedil;":"Ç","Ccedil":"Ç","ccedil;":"ç","ccedil":"ç","Ccirc;":"Ĉ","ccirc;":"ĉ","Cconint;":"∰","ccups;":"⩌","ccupssm;":"⩐","Cdot;":"Ċ","cdot;":"ċ","cedil;":"¸","cedil":"¸","Cedilla;":"¸","cemptyv;":"⦲","cent;":"¢","cent":"¢","CenterDot;":"·","centerdot;":"·","Cfr;":"ℭ","cfr;":"𝔠","CHcy;":"Ч","chcy;":"ч","check;":"✓","checkmark;":"✓","Chi;":"Χ","chi;":"χ","cir;":"○","circ;":"ˆ","circeq;":"≗","circlearrowleft;":"↺","circlearrowright;":"↻","circledast;":"⊛","circledcirc;":"⊚","circleddash;":"⊝","CircleDot;":"⊙","circledR;":"®","circledS;":"Ⓢ","CircleMinus;":"⊖","CirclePlus;":"⊕","CircleTimes;":"⊗","cirE;":"⧃","cire;":"≗","cirfnint;":"⨐","cirmid;":"⫯","cirscir;":"⧂","ClockwiseContourIntegral;":"∲","CloseCurlyDoubleQuote;":"”","CloseCurlyQuote;":"’","clubs;":"♣","clubsuit;":"♣","Colon;":"∷","colon;":":","Colone;":"⩴","colone;":"≔","coloneq;":"≔","comma;":",","commat;":"@","comp;":"∁","compfn;":"∘","complement;":"∁","complexes;":"ℂ","cong;":"≅","congdot;":"⩭","Congruent;":"≡","Conint;":"∯","conint;":"∮","ContourIntegral;":"∮","Copf;":"ℂ","copf;":"𝕔","coprod;":"∐","Coproduct;":"∐","COPY;":"©","COPY":"©","copy;":"©","copy":"©","copysr;":"℗","CounterClockwiseContourIntegral;":"∳","crarr;":"↵","Cross;":"⨯","cross;":"✗","Cscr;":"𝒞","cscr;":"𝒸","csub;":"⫏","csube;":"⫑","csup;":"⫐","csupe;":"⫒","ctdot;":"⋯","cudarrl;":"⤸","cudarrr;":"⤵","cuepr;":"⋞","cuesc;":"⋟","cularr;":"↶","cularrp;":"⤽","Cup;":"⋓","cup;":"∪","cupbrcap;":"⩈","CupCap;":"≍","cupcap;":"⩆","cupcup;":"⩊","cupdot;":"⊍","cupor;":"⩅","cups;":"∪︀","curarr;":"↷","curarrm;":"⤼","curlyeqprec;":"⋞","curlyeqsucc;":"⋟","curlyvee;":"⋎","curlywedge;":"⋏","curren;":"¤","curren":"¤","curvearrowleft;":"↶","curvearrowright;":"↷","cuvee;":"⋎","cuwed;":"⋏","cwconint;":"∲","cwint;":"∱","cylcty;":"⌭","Dagger;":"‡","dagger;":"†","daleth;":"ℸ","Darr;":"↡","dArr;":"⇓","darr;":"↓","dash;":"‐","Dashv;":"⫤","dashv;":"⊣","dbkarow;":"⤏","dblac;":"˝","Dcaron;":"Ď","dcaron;":"ď","Dcy;":"Д","dcy;":"д","DD;":"ⅅ","dd;":"ⅆ","ddagger;":"‡","ddarr;":"⇊","DDotrahd;":"⤑","ddotseq;":"⩷","deg;":"°","deg":"°","Del;":"∇","Delta;":"Δ","delta;":"δ","demptyv;":"⦱","dfisht;":"⥿","Dfr;":"𝔇","dfr;":"𝔡","dHar;":"⥥","dharl;":"⇃","dharr;":"⇂","DiacriticalAcute;":"´","DiacriticalDot;":"˙","DiacriticalDoubleAcute;":"˝","DiacriticalGrave;":"`","DiacriticalTilde;":"˜","diam;":"⋄","Diamond;":"⋄","diamond;":"⋄","diamondsuit;":"♦","diams;":"♦","die;":"¨","DifferentialD;":"ⅆ","digamma;":"ϝ","disin;":"⋲","div;":"÷","divide;":"÷","divide":"÷","divideontimes;":"⋇","divonx;":"⋇","DJcy;":"Ђ","djcy;":"ђ","dlcorn;":"⌞","dlcrop;":"⌍","dollar;":"$","Dopf;":"𝔻","dopf;":"𝕕","Dot;":"¨","dot;":"˙","DotDot;":"⃜","doteq;":"≐","doteqdot;":"≑","DotEqual;":"≐","dotminus;":"∸","dotplus;":"∔","dotsquare;":"⊡","doublebarwedge;":"⌆","DoubleContourIntegral;":"∯","DoubleDot;":"¨","DoubleDownArrow;":"⇓","DoubleLeftArrow;":"⇐","DoubleLeftRightArrow;":"⇔","DoubleLeftTee;":"⫤","DoubleLongLeftArrow;":"⟸","DoubleLongLeftRightArrow;":"⟺","DoubleLongRightArrow;":"⟹","DoubleRightArrow;":"⇒","DoubleRightTee;":"⊨","DoubleUpArrow;":"⇑","DoubleUpDownArrow;":"⇕","DoubleVerticalBar;":"∥","DownArrow;":"↓","Downarrow;":"⇓","downarrow;":"↓","DownArrowBar;":"⤓","DownArrowUpArrow;":"⇵","DownBreve;":"̑","downdownarrows;":"⇊","downharpoonleft;":"⇃","downharpoonright;":"⇂","DownLeftRightVector;":"⥐","DownLeftTeeVector;":"⥞","DownLeftVector;":"↽","DownLeftVectorBar;":"⥖","DownRightTeeVector;":"⥟","DownRightVector;":"⇁","DownRightVectorBar;":"⥗","DownTee;":"⊤","DownTeeArrow;":"↧","drbkarow;":"⤐","drcorn;":"⌟","drcrop;":"⌌","Dscr;":"𝒟","dscr;":"𝒹","DScy;":"Ѕ","dscy;":"ѕ","dsol;":"⧶","Dstrok;":"Đ","dstrok;":"đ","dtdot;":"⋱","dtri;":"▿","dtrif;":"▾","duarr;":"⇵","duhar;":"⥯","dwangle;":"⦦","DZcy;":"Џ","dzcy;":"џ","dzigrarr;":"⟿","Eacute;":"É","Eacute":"É","eacute;":"é","eacute":"é","easter;":"⩮","Ecaron;":"Ě","ecaron;":"ě","ecir;":"≖","Ecirc;":"Ê","Ecirc":"Ê","ecirc;":"ê","ecirc":"ê","ecolon;":"≕","Ecy;":"Э","ecy;":"э","eDDot;":"⩷","Edot;":"Ė","eDot;":"≑","edot;":"ė","ee;":"ⅇ","efDot;":"≒","Efr;":"𝔈","efr;":"𝔢","eg;":"⪚","Egrave;":"È","Egrave":"È","egrave;":"è","egrave":"è","egs;":"⪖","egsdot;":"⪘","el;":"⪙","Element;":"∈","elinters;":"⏧","ell;":"ℓ","els;":"⪕","elsdot;":"⪗","Emacr;":"Ē","emacr;":"ē","empty;":"∅","emptyset;":"∅","EmptySmallSquare;":"◻","emptyv;":"∅","EmptyVerySmallSquare;":"▫","emsp;":" ","emsp13;":" ","emsp14;":" ","ENG;":"Ŋ","eng;":"ŋ","ensp;":" ","Eogon;":"Ę","eogon;":"ę","Eopf;":"𝔼","eopf;":"𝕖","epar;":"⋕","eparsl;":"⧣","eplus;":"⩱","epsi;":"ε","Epsilon;":"Ε","epsilon;":"ε","epsiv;":"ϵ","eqcirc;":"≖","eqcolon;":"≕","eqsim;":"≂","eqslantgtr;":"⪖","eqslantless;":"⪕","Equal;":"⩵","equals;":"=","EqualTilde;":"≂","equest;":"≟","Equilibrium;":"⇌","equiv;":"≡","equivDD;":"⩸","eqvparsl;":"⧥","erarr;":"⥱","erDot;":"≓","Escr;":"ℰ","escr;":"ℯ","esdot;":"≐","Esim;":"⩳","esim;":"≂","Eta;":"Η","eta;":"η","ETH;":"Ð","ETH":"Ð","eth;":"ð","eth":"ð","Euml;":"Ë","Euml":"Ë","euml;":"ë","euml":"ë","euro;":"€","excl;":"!","exist;":"∃","Exists;":"∃","expectation;":"ℰ","ExponentialE;":"ⅇ","exponentiale;":"ⅇ","fallingdotseq;":"≒","Fcy;":"Ф","fcy;":"ф","female;":"♀","ffilig;":"ﬃ","fflig;":"ﬀ","ffllig;":"ﬄ","Ffr;":"𝔉","ffr;":"𝔣","filig;":"ﬁ","FilledSmallSquare;":"◼","FilledVerySmallSquare;":"▪","fjlig;":"fj","flat;":"♭","fllig;":"ﬂ","fltns;":"▱","fnof;":"ƒ","Fopf;":"𝔽","fopf;":"𝕗","ForAll;":"∀","forall;":"∀","fork;":"⋔","forkv;":"⫙","Fouriertrf;":"ℱ","fpartint;":"⨍","frac12;":"½","frac12":"½","frac13;":"⅓","frac14;":"¼","frac14":"¼","frac15;":"⅕","frac16;":"⅙","frac18;":"⅛","frac23;":"⅔","frac25;":"⅖","frac34;":"¾","frac34":"¾","frac35;":"⅗","frac38;":"⅜","frac45;":"⅘","frac56;":"⅚","frac58;":"⅝","frac78;":"⅞","frasl;":"⁄","frown;":"⌢","Fscr;":"ℱ","fscr;":"𝒻","gacute;":"ǵ","Gamma;":"Γ","gamma;":"γ","Gammad;":"Ϝ","gammad;":"ϝ","gap;":"⪆","Gbreve;":"Ğ","gbreve;":"ğ","Gcedil;":"Ģ","Gcirc;":"Ĝ","gcirc;":"ĝ","Gcy;":"Г","gcy;":"г","Gdot;":"Ġ","gdot;":"ġ","gE;":"≧","ge;":"≥","gEl;":"⪌","gel;":"⋛","geq;":"≥","geqq;":"≧","geqslant;":"⩾","ges;":"⩾","gescc;":"⪩","gesdot;":"⪀","gesdoto;":"⪂","gesdotol;":"⪄","gesl;":"⋛︀","gesles;":"⪔","Gfr;":"𝔊","gfr;":"𝔤","Gg;":"⋙","gg;":"≫","ggg;":"⋙","gimel;":"ℷ","GJcy;":"Ѓ","gjcy;":"ѓ","gl;":"≷","gla;":"⪥","glE;":"⪒","glj;":"⪤","gnap;":"⪊","gnapprox;":"⪊","gnE;":"≩","gne;":"⪈","gneq;":"⪈","gneqq;":"≩","gnsim;":"⋧","Gopf;":"𝔾","gopf;":"𝕘","grave;":"`","GreaterEqual;":"≥","GreaterEqualLess;":"⋛","GreaterFullEqual;":"≧","GreaterGreater;":"⪢","GreaterLess;":"≷","GreaterSlantEqual;":"⩾","GreaterTilde;":"≳","Gscr;":"𝒢","gscr;":"ℊ","gsim;":"≳","gsime;":"⪎","gsiml;":"⪐","GT;":">","GT":">","Gt;":"≫","gt;":">","gt":">","gtcc;":"⪧","gtcir;":"⩺","gtdot;":"⋗","gtlPar;":"⦕","gtquest;":"⩼","gtrapprox;":"⪆","gtrarr;":"⥸","gtrdot;":"⋗","gtreqless;":"⋛","gtreqqless;":"⪌","gtrless;":"≷","gtrsim;":"≳","gvertneqq;":"≩︀","gvnE;":"≩︀","Hacek;":"ˇ","hairsp;":" ","half;":"½","hamilt;":"ℋ","HARDcy;":"Ъ","hardcy;":"ъ","hArr;":"⇔","harr;":"↔","harrcir;":"⥈","harrw;":"↭","Hat;":"^","hbar;":"ℏ","Hcirc;":"Ĥ","hcirc;":"ĥ","hearts;":"♥","heartsuit;":"♥","hellip;":"…","hercon;":"⊹","Hfr;":"ℌ","hfr;":"𝔥","HilbertSpace;":"ℋ","hksearow;":"⤥","hkswarow;":"⤦","hoarr;":"⇿","homtht;":"∻","hookleftarrow;":"↩","hookrightarrow;":"↪","Hopf;":"ℍ","hopf;":"𝕙","horbar;":"―","HorizontalLine;":"─","Hscr;":"ℋ","hscr;":"𝒽","hslash;":"ℏ","Hstrok;":"Ħ","hstrok;":"ħ","HumpDownHump;":"≎","HumpEqual;":"≏","hybull;":"⁃","hyphen;":"‐","Iacute;":"Í","Iacute":"Í","iacute;":"í","iacute":"í","ic;":"⁣","Icirc;":"Î","Icirc":"Î","icirc;":"î","icirc":"î","Icy;":"И","icy;":"и","Idot;":"İ","IEcy;":"Е","iecy;":"е","iexcl;":"¡","iexcl":"¡","iff;":"⇔","Ifr;":"ℑ","ifr;":"𝔦","Igrave;":"Ì","Igrave":"Ì","igrave;":"ì","igrave":"ì","ii;":"ⅈ","iiiint;":"⨌","iiint;":"∭","iinfin;":"⧜","iiota;":"℩","IJlig;":"Ĳ","ijlig;":"ĳ","Im;":"ℑ","Imacr;":"Ī","imacr;":"ī","image;":"ℑ","ImaginaryI;":"ⅈ","imagline;":"ℐ","imagpart;":"ℑ","imath;":"ı","imof;":"⊷","imped;":"Ƶ","Implies;":"⇒","in;":"∈","incare;":"℅","infin;":"∞","infintie;":"⧝","inodot;":"ı","Int;":"∬","int;":"∫","intcal;":"⊺","integers;":"ℤ","Integral;":"∫","intercal;":"⊺","Intersection;":"⋂","intlarhk;":"⨗","intprod;":"⨼","InvisibleComma;":"⁣","InvisibleTimes;":"⁢","IOcy;":"Ё","iocy;":"ё","Iogon;":"Į","iogon;":"į","Iopf;":"𝕀","iopf;":"𝕚","Iota;":"Ι","iota;":"ι","iprod;":"⨼","iquest;":"¿","iquest":"¿","Iscr;":"ℐ","iscr;":"𝒾","isin;":"∈","isindot;":"⋵","isinE;":"⋹","isins;":"⋴","isinsv;":"⋳","isinv;":"∈","it;":"⁢","Itilde;":"Ĩ","itilde;":"ĩ","Iukcy;":"І","iukcy;":"і","Iuml;":"Ï","Iuml":"Ï","iuml;":"ï","iuml":"ï","Jcirc;":"Ĵ","jcirc;":"ĵ","Jcy;":"Й","jcy;":"й","Jfr;":"𝔍","jfr;":"𝔧","jmath;":"ȷ","Jopf;":"𝕁","jopf;":"𝕛","Jscr;":"𝒥","jscr;":"𝒿","Jsercy;":"Ј","jsercy;":"ј","Jukcy;":"Є","jukcy;":"є","Kappa;":"Κ","kappa;":"κ","kappav;":"ϰ","Kcedil;":"Ķ","kcedil;":"ķ","Kcy;":"К","kcy;":"к","Kfr;":"𝔎","kfr;":"𝔨","kgreen;":"ĸ","KHcy;":"Х","khcy;":"х","KJcy;":"Ќ","kjcy;":"ќ","Kopf;":"𝕂","kopf;":"𝕜","Kscr;":"𝒦","kscr;":"𝓀","lAarr;":"⇚","Lacute;":"Ĺ","lacute;":"ĺ","laemptyv;":"⦴","lagran;":"ℒ","Lambda;":"Λ","lambda;":"λ","Lang;":"⟪","lang;":"⟨","langd;":"⦑","langle;":"⟨","lap;":"⪅","Laplacetrf;":"ℒ","laquo;":"«","laquo":"«","Larr;":"↞","lArr;":"⇐","larr;":"←","larrb;":"⇤","larrbfs;":"⤟","larrfs;":"⤝","larrhk;":"↩","larrlp;":"↫","larrpl;":"⤹","larrsim;":"⥳","larrtl;":"↢","lat;":"⪫","lAtail;":"⤛","latail;":"⤙","late;":"⪭","lates;":"⪭︀","lBarr;":"⤎","lbarr;":"⤌","lbbrk;":"❲","lbrace;":"{","lbrack;":"[","lbrke;":"⦋","lbrksld;":"⦏","lbrkslu;":"⦍","Lcaron;":"Ľ","lcaron;":"ľ","Lcedil;":"Ļ","lcedil;":"ļ","lceil;":"⌈","lcub;":"{","Lcy;":"Л","lcy;":"л","ldca;":"⤶","ldquo;":"“","ldquor;":"„","ldrdhar;":"⥧","ldrushar;":"⥋","ldsh;":"↲","lE;":"≦","le;":"≤","LeftAngleBracket;":"⟨","LeftArrow;":"←","Leftarrow;":"⇐","leftarrow;":"←","LeftArrowBar;":"⇤","LeftArrowRightArrow;":"⇆","leftarrowtail;":"↢","LeftCeiling;":"⌈","LeftDoubleBracket;":"⟦","LeftDownTeeVector;":"⥡","LeftDownVector;":"⇃","LeftDownVectorBar;":"⥙","LeftFloor;":"⌊","leftharpoondown;":"↽","leftharpoonup;":"↼","leftleftarrows;":"⇇","LeftRightArrow;":"↔","Leftrightarrow;":"⇔","leftrightarrow;":"↔","leftrightarrows;":"⇆","leftrightharpoons;":"⇋","leftrightsquigarrow;":"↭","LeftRightVector;":"⥎","LeftTee;":"⊣","LeftTeeArrow;":"↤","LeftTeeVector;":"⥚","leftthreetimes;":"⋋","LeftTriangle;":"⊲","LeftTriangleBar;":"⧏","LeftTriangleEqual;":"⊴","LeftUpDownVector;":"⥑","LeftUpTeeVector;":"⥠","LeftUpVector;":"↿","LeftUpVectorBar;":"⥘","LeftVector;":"↼","LeftVectorBar;":"⥒","lEg;":"⪋","leg;":"⋚","leq;":"≤","leqq;":"≦","leqslant;":"⩽","les;":"⩽","lescc;":"⪨","lesdot;":"⩿","lesdoto;":"⪁","lesdotor;":"⪃","lesg;":"⋚︀","lesges;":"⪓","lessapprox;":"⪅","lessdot;":"⋖","lesseqgtr;":"⋚","lesseqqgtr;":"⪋","LessEqualGreater;":"⋚","LessFullEqual;":"≦","LessGreater;":"≶","lessgtr;":"≶","LessLess;":"⪡","lesssim;":"≲","LessSlantEqual;":"⩽","LessTilde;":"≲","lfisht;":"⥼","lfloor;":"⌊","Lfr;":"𝔏","lfr;":"𝔩","lg;":"≶","lgE;":"⪑","lHar;":"⥢","lhard;":"↽","lharu;":"↼","lharul;":"⥪","lhblk;":"▄","LJcy;":"Љ","ljcy;":"љ","Ll;":"⋘","ll;":"≪","llarr;":"⇇","llcorner;":"⌞","Lleftarrow;":"⇚","llhard;":"⥫","lltri;":"◺","Lmidot;":"Ŀ","lmidot;":"ŀ","lmoust;":"⎰","lmoustache;":"⎰","lnap;":"⪉","lnapprox;":"⪉","lnE;":"≨","lne;":"⪇","lneq;":"⪇","lneqq;":"≨","lnsim;":"⋦","loang;":"⟬","loarr;":"⇽","lobrk;":"⟦","LongLeftArrow;":"⟵","Longleftarrow;":"⟸","longleftarrow;":"⟵","LongLeftRightArrow;":"⟷","Longleftrightarrow;":"⟺","longleftrightarrow;":"⟷","longmapsto;":"⟼","LongRightArrow;":"⟶","Longrightarrow;":"⟹","longrightarrow;":"⟶","looparrowleft;":"↫","looparrowright;":"↬","lopar;":"⦅","Lopf;":"𝕃","lopf;":"𝕝","loplus;":"⨭","lotimes;":"⨴","lowast;":"∗","lowbar;":"_","LowerLeftArrow;":"↙","LowerRightArrow;":"↘","loz;":"◊","lozenge;":"◊","lozf;":"⧫","lpar;":"(","lparlt;":"⦓","lrarr;":"⇆","lrcorner;":"⌟","lrhar;":"⇋","lrhard;":"⥭","lrm;":"‎","lrtri;":"⊿","lsaquo;":"‹","Lscr;":"ℒ","lscr;":"𝓁","Lsh;":"↰","lsh;":"↰","lsim;":"≲","lsime;":"⪍","lsimg;":"⪏","lsqb;":"[","lsquo;":"‘","lsquor;":"‚","Lstrok;":"Ł","lstrok;":"ł","LT;":"<","LT":"<","Lt;":"≪","lt;":"<","lt":"<","ltcc;":"⪦","ltcir;":"⩹","ltdot;":"⋖","lthree;":"⋋","ltimes;":"⋉","ltlarr;":"⥶","ltquest;":"⩻","ltri;":"◃","ltrie;":"⊴","ltrif;":"◂","ltrPar;":"⦖","lurdshar;":"⥊","luruhar;":"⥦","lvertneqq;":"≨︀","lvnE;":"≨︀","macr;":"¯","macr":"¯","male;":"♂","malt;":"✠","maltese;":"✠","Map;":"⤅","map;":"↦","mapsto;":"↦","mapstodown;":"↧","mapstoleft;":"↤","mapstoup;":"↥","marker;":"▮","mcomma;":"⨩","Mcy;":"М","mcy;":"м","mdash;":"—","mDDot;":"∺","measuredangle;":"∡","MediumSpace;":" ","Mellintrf;":"ℳ","Mfr;":"𝔐","mfr;":"𝔪","mho;":"℧","micro;":"µ","micro":"µ","mid;":"∣","midast;":"*","midcir;":"⫰","middot;":"·","middot":"·","minus;":"−","minusb;":"⊟","minusd;":"∸","minusdu;":"⨪","MinusPlus;":"∓","mlcp;":"⫛","mldr;":"…","mnplus;":"∓","models;":"⊧","Mopf;":"𝕄","mopf;":"𝕞","mp;":"∓","Mscr;":"ℳ","mscr;":"𝓂","mstpos;":"∾","Mu;":"Μ","mu;":"μ","multimap;":"⊸","mumap;":"⊸","nabla;":"∇","Nacute;":"Ń","nacute;":"ń","nang;":"∠⃒","nap;":"≉","napE;":"⩰̸","napid;":"≋̸","napos;":"ŉ","napprox;":"≉","natur;":"♮","natural;":"♮","naturals;":"ℕ","nbsp;":" ","nbsp":" ","nbump;":"≎̸","nbumpe;":"≏̸","ncap;":"⩃","Ncaron;":"Ň","ncaron;":"ň","Ncedil;":"Ņ","ncedil;":"ņ","ncong;":"≇","ncongdot;":"⩭̸","ncup;":"⩂","Ncy;":"Н","ncy;":"н","ndash;":"–","ne;":"≠","nearhk;":"⤤","neArr;":"⇗","nearr;":"↗","nearrow;":"↗","nedot;":"≐̸","NegativeMediumSpace;":"​","NegativeThickSpace;":"​","NegativeThinSpace;":"​","NegativeVeryThinSpace;":"​","nequiv;":"≢","nesear;":"⤨","nesim;":"≂̸","NestedGreaterGreater;":"≫","NestedLessLess;":"≪","NewLine;":"\\n","nexist;":"∄","nexists;":"∄","Nfr;":"𝔑","nfr;":"𝔫","ngE;":"≧̸","nge;":"≱","ngeq;":"≱","ngeqq;":"≧̸","ngeqslant;":"⩾̸","nges;":"⩾̸","nGg;":"⋙̸","ngsim;":"≵","nGt;":"≫⃒","ngt;":"≯","ngtr;":"≯","nGtv;":"≫̸","nhArr;":"⇎","nharr;":"↮","nhpar;":"⫲","ni;":"∋","nis;":"⋼","nisd;":"⋺","niv;":"∋","NJcy;":"Њ","njcy;":"њ","nlArr;":"⇍","nlarr;":"↚","nldr;":"‥","nlE;":"≦̸","nle;":"≰","nLeftarrow;":"⇍","nleftarrow;":"↚","nLeftrightarrow;":"⇎","nleftrightarrow;":"↮","nleq;":"≰","nleqq;":"≦̸","nleqslant;":"⩽̸","nles;":"⩽̸","nless;":"≮","nLl;":"⋘̸","nlsim;":"≴","nLt;":"≪⃒","nlt;":"≮","nltri;":"⋪","nltrie;":"⋬","nLtv;":"≪̸","nmid;":"∤","NoBreak;":"⁠","NonBreakingSpace;":" ","Nopf;":"ℕ","nopf;":"𝕟","Not;":"⫬","not;":"¬","not":"¬","NotCongruent;":"≢","NotCupCap;":"≭","NotDoubleVerticalBar;":"∦","NotElement;":"∉","NotEqual;":"≠","NotEqualTilde;":"≂̸","NotExists;":"∄","NotGreater;":"≯","NotGreaterEqual;":"≱","NotGreaterFullEqual;":"≧̸","NotGreaterGreater;":"≫̸","NotGreaterLess;":"≹","NotGreaterSlantEqual;":"⩾̸","NotGreaterTilde;":"≵","NotHumpDownHump;":"≎̸","NotHumpEqual;":"≏̸","notin;":"∉","notindot;":"⋵̸","notinE;":"⋹̸","notinva;":"∉","notinvb;":"⋷","notinvc;":"⋶","NotLeftTriangle;":"⋪","NotLeftTriangleBar;":"⧏̸","NotLeftTriangleEqual;":"⋬","NotLess;":"≮","NotLessEqual;":"≰","NotLessGreater;":"≸","NotLessLess;":"≪̸","NotLessSlantEqual;":"⩽̸","NotLessTilde;":"≴","NotNestedGreaterGreater;":"⪢̸","NotNestedLessLess;":"⪡̸","notni;":"∌","notniva;":"∌","notnivb;":"⋾","notnivc;":"⋽","NotPrecedes;":"⊀","NotPrecedesEqual;":"⪯̸","NotPrecedesSlantEqual;":"⋠","NotReverseElement;":"∌","NotRightTriangle;":"⋫","NotRightTriangleBar;":"⧐̸","NotRightTriangleEqual;":"⋭","NotSquareSubset;":"⊏̸","NotSquareSubsetEqual;":"⋢","NotSquareSuperset;":"⊐̸","NotSquareSupersetEqual;":"⋣","NotSubset;":"⊂⃒","NotSubsetEqual;":"⊈","NotSucceeds;":"⊁","NotSucceedsEqual;":"⪰̸","NotSucceedsSlantEqual;":"⋡","NotSucceedsTilde;":"≿̸","NotSuperset;":"⊃⃒","NotSupersetEqual;":"⊉","NotTilde;":"≁","NotTildeEqual;":"≄","NotTildeFullEqual;":"≇","NotTildeTilde;":"≉","NotVerticalBar;":"∤","npar;":"∦","nparallel;":"∦","nparsl;":"⫽⃥","npart;":"∂̸","npolint;":"⨔","npr;":"⊀","nprcue;":"⋠","npre;":"⪯̸","nprec;":"⊀","npreceq;":"⪯̸","nrArr;":"⇏","nrarr;":"↛","nrarrc;":"⤳̸","nrarrw;":"↝̸","nRightarrow;":"⇏","nrightarrow;":"↛","nrtri;":"⋫","nrtrie;":"⋭","nsc;":"⊁","nsccue;":"⋡","nsce;":"⪰̸","Nscr;":"𝒩","nscr;":"𝓃","nshortmid;":"∤","nshortparallel;":"∦","nsim;":"≁","nsime;":"≄","nsimeq;":"≄","nsmid;":"∤","nspar;":"∦","nsqsube;":"⋢","nsqsupe;":"⋣","nsub;":"⊄","nsubE;":"⫅̸","nsube;":"⊈","nsubset;":"⊂⃒","nsubseteq;":"⊈","nsubseteqq;":"⫅̸","nsucc;":"⊁","nsucceq;":"⪰̸","nsup;":"⊅","nsupE;":"⫆̸","nsupe;":"⊉","nsupset;":"⊃⃒","nsupseteq;":"⊉","nsupseteqq;":"⫆̸","ntgl;":"≹","Ntilde;":"Ñ","Ntilde":"Ñ","ntilde;":"ñ","ntilde":"ñ","ntlg;":"≸","ntriangleleft;":"⋪","ntrianglelefteq;":"⋬","ntriangleright;":"⋫","ntrianglerighteq;":"⋭","Nu;":"Ν","nu;":"ν","num;":"#","numero;":"№","numsp;":" ","nvap;":"≍⃒","nVDash;":"⊯","nVdash;":"⊮","nvDash;":"⊭","nvdash;":"⊬","nvge;":"≥⃒","nvgt;":">⃒","nvHarr;":"⤄","nvinfin;":"⧞","nvlArr;":"⤂","nvle;":"≤⃒","nvlt;":"<⃒","nvltrie;":"⊴⃒","nvrArr;":"⤃","nvrtrie;":"⊵⃒","nvsim;":"∼⃒","nwarhk;":"⤣","nwArr;":"⇖","nwarr;":"↖","nwarrow;":"↖","nwnear;":"⤧","Oacute;":"Ó","Oacute":"Ó","oacute;":"ó","oacute":"ó","oast;":"⊛","ocir;":"⊚","Ocirc;":"Ô","Ocirc":"Ô","ocirc;":"ô","ocirc":"ô","Ocy;":"О","ocy;":"о","odash;":"⊝","Odblac;":"Ő","odblac;":"ő","odiv;":"⨸","odot;":"⊙","odsold;":"⦼","OElig;":"Œ","oelig;":"œ","ofcir;":"⦿","Ofr;":"𝔒","ofr;":"𝔬","ogon;":"˛","Ograve;":"Ò","Ograve":"Ò","ograve;":"ò","ograve":"ò","ogt;":"⧁","ohbar;":"⦵","ohm;":"Ω","oint;":"∮","olarr;":"↺","olcir;":"⦾","olcross;":"⦻","oline;":"‾","olt;":"⧀","Omacr;":"Ō","omacr;":"ō","Omega;":"Ω","omega;":"ω","Omicron;":"Ο","omicron;":"ο","omid;":"⦶","ominus;":"⊖","Oopf;":"𝕆","oopf;":"𝕠","opar;":"⦷","OpenCurlyDoubleQuote;":"“","OpenCurlyQuote;":"‘","operp;":"⦹","oplus;":"⊕","Or;":"⩔","or;":"∨","orarr;":"↻","ord;":"⩝","order;":"ℴ","orderof;":"ℴ","ordf;":"ª","ordf":"ª","ordm;":"º","ordm":"º","origof;":"⊶","oror;":"⩖","orslope;":"⩗","orv;":"⩛","oS;":"Ⓢ","Oscr;":"𝒪","oscr;":"ℴ","Oslash;":"Ø","Oslash":"Ø","oslash;":"ø","oslash":"ø","osol;":"⊘","Otilde;":"Õ","Otilde":"Õ","otilde;":"õ","otilde":"õ","Otimes;":"⨷","otimes;":"⊗","otimesas;":"⨶","Ouml;":"Ö","Ouml":"Ö","ouml;":"ö","ouml":"ö","ovbar;":"⌽","OverBar;":"‾","OverBrace;":"⏞","OverBracket;":"⎴","OverParenthesis;":"⏜","par;":"∥","para;":"¶","para":"¶","parallel;":"∥","parsim;":"⫳","parsl;":"⫽","part;":"∂","PartialD;":"∂","Pcy;":"П","pcy;":"п","percnt;":"%","period;":".","permil;":"‰","perp;":"⊥","pertenk;":"‱","Pfr;":"𝔓","pfr;":"𝔭","Phi;":"Φ","phi;":"φ","phiv;":"ϕ","phmmat;":"ℳ","phone;":"☎","Pi;":"Π","pi;":"π","pitchfork;":"⋔","piv;":"ϖ","planck;":"ℏ","planckh;":"ℎ","plankv;":"ℏ","plus;":"+","plusacir;":"⨣","plusb;":"⊞","pluscir;":"⨢","plusdo;":"∔","plusdu;":"⨥","pluse;":"⩲","PlusMinus;":"±","plusmn;":"±","plusmn":"±","plussim;":"⨦","plustwo;":"⨧","pm;":"±","Poincareplane;":"ℌ","pointint;":"⨕","Popf;":"ℙ","popf;":"𝕡","pound;":"£","pound":"£","Pr;":"⪻","pr;":"≺","prap;":"⪷","prcue;":"≼","prE;":"⪳","pre;":"⪯","prec;":"≺","precapprox;":"⪷","preccurlyeq;":"≼","Precedes;":"≺","PrecedesEqual;":"⪯","PrecedesSlantEqual;":"≼","PrecedesTilde;":"≾","preceq;":"⪯","precnapprox;":"⪹","precneqq;":"⪵","precnsim;":"⋨","precsim;":"≾","Prime;":"″","prime;":"′","primes;":"ℙ","prnap;":"⪹","prnE;":"⪵","prnsim;":"⋨","prod;":"∏","Product;":"∏","profalar;":"⌮","profline;":"⌒","profsurf;":"⌓","prop;":"∝","Proportion;":"∷","Proportional;":"∝","propto;":"∝","prsim;":"≾","prurel;":"⊰","Pscr;":"𝒫","pscr;":"𝓅","Psi;":"Ψ","psi;":"ψ","puncsp;":" ","Qfr;":"𝔔","qfr;":"𝔮","qint;":"⨌","Qopf;":"ℚ","qopf;":"𝕢","qprime;":"⁗","Qscr;":"𝒬","qscr;":"𝓆","quaternions;":"ℍ","quatint;":"⨖","quest;":"?","questeq;":"≟","QUOT;":"\\"","QUOT":"\\"","quot;":"\\"","quot":"\\"","rAarr;":"⇛","race;":"∽̱","Racute;":"Ŕ","racute;":"ŕ","radic;":"√","raemptyv;":"⦳","Rang;":"⟫","rang;":"⟩","rangd;":"⦒","range;":"⦥","rangle;":"⟩","raquo;":"»","raquo":"»","Rarr;":"↠","rArr;":"⇒","rarr;":"→","rarrap;":"⥵","rarrb;":"⇥","rarrbfs;":"⤠","rarrc;":"⤳","rarrfs;":"⤞","rarrhk;":"↪","rarrlp;":"↬","rarrpl;":"⥅","rarrsim;":"⥴","Rarrtl;":"⤖","rarrtl;":"↣","rarrw;":"↝","rAtail;":"⤜","ratail;":"⤚","ratio;":"∶","rationals;":"ℚ","RBarr;":"⤐","rBarr;":"⤏","rbarr;":"⤍","rbbrk;":"❳","rbrace;":"}","rbrack;":"]","rbrke;":"⦌","rbrksld;":"⦎","rbrkslu;":"⦐","Rcaron;":"Ř","rcaron;":"ř","Rcedil;":"Ŗ","rcedil;":"ŗ","rceil;":"⌉","rcub;":"}","Rcy;":"Р","rcy;":"р","rdca;":"⤷","rdldhar;":"⥩","rdquo;":"”","rdquor;":"”","rdsh;":"↳","Re;":"ℜ","real;":"ℜ","realine;":"ℛ","realpart;":"ℜ","reals;":"ℝ","rect;":"▭","REG;":"®","REG":"®","reg;":"®","reg":"®","ReverseElement;":"∋","ReverseEquilibrium;":"⇋","ReverseUpEquilibrium;":"⥯","rfisht;":"⥽","rfloor;":"⌋","Rfr;":"ℜ","rfr;":"𝔯","rHar;":"⥤","rhard;":"⇁","rharu;":"⇀","rharul;":"⥬","Rho;":"Ρ","rho;":"ρ","rhov;":"ϱ","RightAngleBracket;":"⟩","RightArrow;":"→","Rightarrow;":"⇒","rightarrow;":"→","RightArrowBar;":"⇥","RightArrowLeftArrow;":"⇄","rightarrowtail;":"↣","RightCeiling;":"⌉","RightDoubleBracket;":"⟧","RightDownTeeVector;":"⥝","RightDownVector;":"⇂","RightDownVectorBar;":"⥕","RightFloor;":"⌋","rightharpoondown;":"⇁","rightharpoonup;":"⇀","rightleftarrows;":"⇄","rightleftharpoons;":"⇌","rightrightarrows;":"⇉","rightsquigarrow;":"↝","RightTee;":"⊢","RightTeeArrow;":"↦","RightTeeVector;":"⥛","rightthreetimes;":"⋌","RightTriangle;":"⊳","RightTriangleBar;":"⧐","RightTriangleEqual;":"⊵","RightUpDownVector;":"⥏","RightUpTeeVector;":"⥜","RightUpVector;":"↾","RightUpVectorBar;":"⥔","RightVector;":"⇀","RightVectorBar;":"⥓","ring;":"˚","risingdotseq;":"≓","rlarr;":"⇄","rlhar;":"⇌","rlm;":"‏","rmoust;":"⎱","rmoustache;":"⎱","rnmid;":"⫮","roang;":"⟭","roarr;":"⇾","robrk;":"⟧","ropar;":"⦆","Ropf;":"ℝ","ropf;":"𝕣","roplus;":"⨮","rotimes;":"⨵","RoundImplies;":"⥰","rpar;":")","rpargt;":"⦔","rppolint;":"⨒","rrarr;":"⇉","Rrightarrow;":"⇛","rsaquo;":"›","Rscr;":"ℛ","rscr;":"𝓇","Rsh;":"↱","rsh;":"↱","rsqb;":"]","rsquo;":"’","rsquor;":"’","rthree;":"⋌","rtimes;":"⋊","rtri;":"▹","rtrie;":"⊵","rtrif;":"▸","rtriltri;":"⧎","RuleDelayed;":"⧴","ruluhar;":"⥨","rx;":"℞","Sacute;":"Ś","sacute;":"ś","sbquo;":"‚","Sc;":"⪼","sc;":"≻","scap;":"⪸","Scaron;":"Š","scaron;":"š","sccue;":"≽","scE;":"⪴","sce;":"⪰","Scedil;":"Ş","scedil;":"ş","Scirc;":"Ŝ","scirc;":"ŝ","scnap;":"⪺","scnE;":"⪶","scnsim;":"⋩","scpolint;":"⨓","scsim;":"≿","Scy;":"С","scy;":"с","sdot;":"⋅","sdotb;":"⊡","sdote;":"⩦","searhk;":"⤥","seArr;":"⇘","searr;":"↘","searrow;":"↘","sect;":"§","sect":"§","semi;":";","seswar;":"⤩","setminus;":"∖","setmn;":"∖","sext;":"✶","Sfr;":"𝔖","sfr;":"𝔰","sfrown;":"⌢","sharp;":"♯","SHCHcy;":"Щ","shchcy;":"щ","SHcy;":"Ш","shcy;":"ш","ShortDownArrow;":"↓","ShortLeftArrow;":"←","shortmid;":"∣","shortparallel;":"∥","ShortRightArrow;":"→","ShortUpArrow;":"↑","shy;":"­","shy":"­","Sigma;":"Σ","sigma;":"σ","sigmaf;":"ς","sigmav;":"ς","sim;":"∼","simdot;":"⩪","sime;":"≃","simeq;":"≃","simg;":"⪞","simgE;":"⪠","siml;":"⪝","simlE;":"⪟","simne;":"≆","simplus;":"⨤","simrarr;":"⥲","slarr;":"←","SmallCircle;":"∘","smallsetminus;":"∖","smashp;":"⨳","smeparsl;":"⧤","smid;":"∣","smile;":"⌣","smt;":"⪪","smte;":"⪬","smtes;":"⪬︀","SOFTcy;":"Ь","softcy;":"ь","sol;":"/","solb;":"⧄","solbar;":"⌿","Sopf;":"𝕊","sopf;":"𝕤","spades;":"♠","spadesuit;":"♠","spar;":"∥","sqcap;":"⊓","sqcaps;":"⊓︀","sqcup;":"⊔","sqcups;":"⊔︀","Sqrt;":"√","sqsub;":"⊏","sqsube;":"⊑","sqsubset;":"⊏","sqsubseteq;":"⊑","sqsup;":"⊐","sqsupe;":"⊒","sqsupset;":"⊐","sqsupseteq;":"⊒","squ;":"□","Square;":"□","square;":"□","SquareIntersection;":"⊓","SquareSubset;":"⊏","SquareSubsetEqual;":"⊑","SquareSuperset;":"⊐","SquareSupersetEqual;":"⊒","SquareUnion;":"⊔","squarf;":"▪","squf;":"▪","srarr;":"→","Sscr;":"𝒮","sscr;":"𝓈","ssetmn;":"∖","ssmile;":"⌣","sstarf;":"⋆","Star;":"⋆","star;":"☆","starf;":"★","straightepsilon;":"ϵ","straightphi;":"ϕ","strns;":"¯","Sub;":"⋐","sub;":"⊂","subdot;":"⪽","subE;":"⫅","sube;":"⊆","subedot;":"⫃","submult;":"⫁","subnE;":"⫋","subne;":"⊊","subplus;":"⪿","subrarr;":"⥹","Subset;":"⋐","subset;":"⊂","subseteq;":"⊆","subseteqq;":"⫅","SubsetEqual;":"⊆","subsetneq;":"⊊","subsetneqq;":"⫋","subsim;":"⫇","subsub;":"⫕","subsup;":"⫓","succ;":"≻","succapprox;":"⪸","succcurlyeq;":"≽","Succeeds;":"≻","SucceedsEqual;":"⪰","SucceedsSlantEqual;":"≽","SucceedsTilde;":"≿","succeq;":"⪰","succnapprox;":"⪺","succneqq;":"⪶","succnsim;":"⋩","succsim;":"≿","SuchThat;":"∋","Sum;":"∑","sum;":"∑","sung;":"♪","Sup;":"⋑","sup;":"⊃","sup1;":"¹","sup1":"¹","sup2;":"²","sup2":"²","sup3;":"³","sup3":"³","supdot;":"⪾","supdsub;":"⫘","supE;":"⫆","supe;":"⊇","supedot;":"⫄","Superset;":"⊃","SupersetEqual;":"⊇","suphsol;":"⟉","suphsub;":"⫗","suplarr;":"⥻","supmult;":"⫂","supnE;":"⫌","supne;":"⊋","supplus;":"⫀","Supset;":"⋑","supset;":"⊃","supseteq;":"⊇","supseteqq;":"⫆","supsetneq;":"⊋","supsetneqq;":"⫌","supsim;":"⫈","supsub;":"⫔","supsup;":"⫖","swarhk;":"⤦","swArr;":"⇙","swarr;":"↙","swarrow;":"↙","swnwar;":"⤪","szlig;":"ß","szlig":"ß","Tab;":"\\t","target;":"⌖","Tau;":"Τ","tau;":"τ","tbrk;":"⎴","Tcaron;":"Ť","tcaron;":"ť","Tcedil;":"Ţ","tcedil;":"ţ","Tcy;":"Т","tcy;":"т","tdot;":"⃛","telrec;":"⌕","Tfr;":"𝔗","tfr;":"𝔱","there4;":"∴","Therefore;":"∴","therefore;":"∴","Theta;":"Θ","theta;":"θ","thetasym;":"ϑ","thetav;":"ϑ","thickapprox;":"≈","thicksim;":"∼","ThickSpace;":"  ","thinsp;":" ","ThinSpace;":" ","thkap;":"≈","thksim;":"∼","THORN;":"Þ","THORN":"Þ","thorn;":"þ","thorn":"þ","Tilde;":"∼","tilde;":"˜","TildeEqual;":"≃","TildeFullEqual;":"≅","TildeTilde;":"≈","times;":"×","times":"×","timesb;":"⊠","timesbar;":"⨱","timesd;":"⨰","tint;":"∭","toea;":"⤨","top;":"⊤","topbot;":"⌶","topcir;":"⫱","Topf;":"𝕋","topf;":"𝕥","topfork;":"⫚","tosa;":"⤩","tprime;":"‴","TRADE;":"™","trade;":"™","triangle;":"▵","triangledown;":"▿","triangleleft;":"◃","trianglelefteq;":"⊴","triangleq;":"≜","triangleright;":"▹","trianglerighteq;":"⊵","tridot;":"◬","trie;":"≜","triminus;":"⨺","TripleDot;":"⃛","triplus;":"⨹","trisb;":"⧍","tritime;":"⨻","trpezium;":"⏢","Tscr;":"𝒯","tscr;":"𝓉","TScy;":"Ц","tscy;":"ц","TSHcy;":"Ћ","tshcy;":"ћ","Tstrok;":"Ŧ","tstrok;":"ŧ","twixt;":"≬","twoheadleftarrow;":"↞","twoheadrightarrow;":"↠","Uacute;":"Ú","Uacute":"Ú","uacute;":"ú","uacute":"ú","Uarr;":"↟","uArr;":"⇑","uarr;":"↑","Uarrocir;":"⥉","Ubrcy;":"Ў","ubrcy;":"ў","Ubreve;":"Ŭ","ubreve;":"ŭ","Ucirc;":"Û","Ucirc":"Û","ucirc;":"û","ucirc":"û","Ucy;":"У","ucy;":"у","udarr;":"⇅","Udblac;":"Ű","udblac;":"ű","udhar;":"⥮","ufisht;":"⥾","Ufr;":"𝔘","ufr;":"𝔲","Ugrave;":"Ù","Ugrave":"Ù","ugrave;":"ù","ugrave":"ù","uHar;":"⥣","uharl;":"↿","uharr;":"↾","uhblk;":"▀","ulcorn;":"⌜","ulcorner;":"⌜","ulcrop;":"⌏","ultri;":"◸","Umacr;":"Ū","umacr;":"ū","uml;":"¨","uml":"¨","UnderBar;":"_","UnderBrace;":"⏟","UnderBracket;":"⎵","UnderParenthesis;":"⏝","Union;":"⋃","UnionPlus;":"⊎","Uogon;":"Ų","uogon;":"ų","Uopf;":"𝕌","uopf;":"𝕦","UpArrow;":"↑","Uparrow;":"⇑","uparrow;":"↑","UpArrowBar;":"⤒","UpArrowDownArrow;":"⇅","UpDownArrow;":"↕","Updownarrow;":"⇕","updownarrow;":"↕","UpEquilibrium;":"⥮","upharpoonleft;":"↿","upharpoonright;":"↾","uplus;":"⊎","UpperLeftArrow;":"↖","UpperRightArrow;":"↗","Upsi;":"ϒ","upsi;":"υ","upsih;":"ϒ","Upsilon;":"Υ","upsilon;":"υ","UpTee;":"⊥","UpTeeArrow;":"↥","upuparrows;":"⇈","urcorn;":"⌝","urcorner;":"⌝","urcrop;":"⌎","Uring;":"Ů","uring;":"ů","urtri;":"◹","Uscr;":"𝒰","uscr;":"𝓊","utdot;":"⋰","Utilde;":"Ũ","utilde;":"ũ","utri;":"▵","utrif;":"▴","uuarr;":"⇈","Uuml;":"Ü","Uuml":"Ü","uuml;":"ü","uuml":"ü","uwangle;":"⦧","vangrt;":"⦜","varepsilon;":"ϵ","varkappa;":"ϰ","varnothing;":"∅","varphi;":"ϕ","varpi;":"ϖ","varpropto;":"∝","vArr;":"⇕","varr;":"↕","varrho;":"ϱ","varsigma;":"ς","varsubsetneq;":"⊊︀","varsubsetneqq;":"⫋︀","varsupsetneq;":"⊋︀","varsupsetneqq;":"⫌︀","vartheta;":"ϑ","vartriangleleft;":"⊲","vartriangleright;":"⊳","Vbar;":"⫫","vBar;":"⫨","vBarv;":"⫩","Vcy;":"В","vcy;":"в","VDash;":"⊫","Vdash;":"⊩","vDash;":"⊨","vdash;":"⊢","Vdashl;":"⫦","Vee;":"⋁","vee;":"∨","veebar;":"⊻","veeeq;":"≚","vellip;":"⋮","Verbar;":"‖","verbar;":"|","Vert;":"‖","vert;":"|","VerticalBar;":"∣","VerticalLine;":"|","VerticalSeparator;":"❘","VerticalTilde;":"≀","VeryThinSpace;":" ","Vfr;":"𝔙","vfr;":"𝔳","vltri;":"⊲","vnsub;":"⊂⃒","vnsup;":"⊃⃒","Vopf;":"𝕍","vopf;":"𝕧","vprop;":"∝","vrtri;":"⊳","Vscr;":"𝒱","vscr;":"𝓋","vsubnE;":"⫋︀","vsubne;":"⊊︀","vsupnE;":"⫌︀","vsupne;":"⊋︀","Vvdash;":"⊪","vzigzag;":"⦚","Wcirc;":"Ŵ","wcirc;":"ŵ","wedbar;":"⩟","Wedge;":"⋀","wedge;":"∧","wedgeq;":"≙","weierp;":"℘","Wfr;":"𝔚","wfr;":"𝔴","Wopf;":"𝕎","wopf;":"𝕨","wp;":"℘","wr;":"≀","wreath;":"≀","Wscr;":"𝒲","wscr;":"𝓌","xcap;":"⋂","xcirc;":"◯","xcup;":"⋃","xdtri;":"▽","Xfr;":"𝔛","xfr;":"𝔵","xhArr;":"⟺","xharr;":"⟷","Xi;":"Ξ","xi;":"ξ","xlArr;":"⟸","xlarr;":"⟵","xmap;":"⟼","xnis;":"⋻","xodot;":"⨀","Xopf;":"𝕏","xopf;":"𝕩","xoplus;":"⨁","xotime;":"⨂","xrArr;":"⟹","xrarr;":"⟶","Xscr;":"𝒳","xscr;":"𝓍","xsqcup;":"⨆","xuplus;":"⨄","xutri;":"△","xvee;":"⋁","xwedge;":"⋀","Yacute;":"Ý","Yacute":"Ý","yacute;":"ý","yacute":"ý","YAcy;":"Я","yacy;":"я","Ycirc;":"Ŷ","ycirc;":"ŷ","Ycy;":"Ы","ycy;":"ы","yen;":"¥","yen":"¥","Yfr;":"𝔜","yfr;":"𝔶","YIcy;":"Ї","yicy;":"ї","Yopf;":"𝕐","yopf;":"𝕪","Yscr;":"𝒴","yscr;":"𝓎","YUcy;":"Ю","yucy;":"ю","Yuml;":"Ÿ","yuml;":"ÿ","yuml":"ÿ","Zacute;":"Ź","zacute;":"ź","Zcaron;":"Ž","zcaron;":"ž","Zcy;":"З","zcy;":"з","Zdot;":"Ż","zdot;":"ż","zeetrf;":"ℨ","ZeroWidthSpace;":"​","Zeta;":"Ζ","zeta;":"ζ","Zfr;":"ℨ","zfr;":"𝔷","ZHcy;":"Ж","zhcy;":"ж","zigrarr;":"⇝","Zopf;":"ℤ","zopf;":"𝕫","Zscr;":"𝒵","zscr;":"𝓏","zwj;":"‍","zwnj;":"‌"}',
                );
            },
            3498: (t, e, r) => {
                r(9151), (e.decode = r(6751));
            },
            8245: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"9":"Tab;","10":"NewLine;","33":"excl;","34":"quot;","35":"num;","36":"dollar;","37":"percnt;","38":"amp;","39":"apos;","40":"lpar;","41":"rpar;","42":"midast;","43":"plus;","44":"comma;","46":"period;","47":"sol;","58":"colon;","59":"semi;","60":"lt;","61":"equals;","62":"gt;","63":"quest;","64":"commat;","91":"lsqb;","92":"bsol;","93":"rsqb;","94":"Hat;","95":"UnderBar;","96":"grave;","123":"lcub;","124":"VerticalLine;","125":"rcub;","160":"NonBreakingSpace;","161":"iexcl;","162":"cent;","163":"pound;","164":"curren;","165":"yen;","166":"brvbar;","167":"sect;","168":"uml;","169":"copy;","170":"ordf;","171":"laquo;","172":"not;","173":"shy;","174":"reg;","175":"strns;","176":"deg;","177":"pm;","178":"sup2;","179":"sup3;","180":"DiacriticalAcute;","181":"micro;","182":"para;","183":"middot;","184":"Cedilla;","185":"sup1;","186":"ordm;","187":"raquo;","188":"frac14;","189":"half;","190":"frac34;","191":"iquest;","192":"Agrave;","193":"Aacute;","194":"Acirc;","195":"Atilde;","196":"Auml;","197":"Aring;","198":"AElig;","199":"Ccedil;","200":"Egrave;","201":"Eacute;","202":"Ecirc;","203":"Euml;","204":"Igrave;","205":"Iacute;","206":"Icirc;","207":"Iuml;","208":"ETH;","209":"Ntilde;","210":"Ograve;","211":"Oacute;","212":"Ocirc;","213":"Otilde;","214":"Ouml;","215":"times;","216":"Oslash;","217":"Ugrave;","218":"Uacute;","219":"Ucirc;","220":"Uuml;","221":"Yacute;","222":"THORN;","223":"szlig;","224":"agrave;","225":"aacute;","226":"acirc;","227":"atilde;","228":"auml;","229":"aring;","230":"aelig;","231":"ccedil;","232":"egrave;","233":"eacute;","234":"ecirc;","235":"euml;","236":"igrave;","237":"iacute;","238":"icirc;","239":"iuml;","240":"eth;","241":"ntilde;","242":"ograve;","243":"oacute;","244":"ocirc;","245":"otilde;","246":"ouml;","247":"divide;","248":"oslash;","249":"ugrave;","250":"uacute;","251":"ucirc;","252":"uuml;","253":"yacute;","254":"thorn;","255":"yuml;","256":"Amacr;","257":"amacr;","258":"Abreve;","259":"abreve;","260":"Aogon;","261":"aogon;","262":"Cacute;","263":"cacute;","264":"Ccirc;","265":"ccirc;","266":"Cdot;","267":"cdot;","268":"Ccaron;","269":"ccaron;","270":"Dcaron;","271":"dcaron;","272":"Dstrok;","273":"dstrok;","274":"Emacr;","275":"emacr;","278":"Edot;","279":"edot;","280":"Eogon;","281":"eogon;","282":"Ecaron;","283":"ecaron;","284":"Gcirc;","285":"gcirc;","286":"Gbreve;","287":"gbreve;","288":"Gdot;","289":"gdot;","290":"Gcedil;","292":"Hcirc;","293":"hcirc;","294":"Hstrok;","295":"hstrok;","296":"Itilde;","297":"itilde;","298":"Imacr;","299":"imacr;","302":"Iogon;","303":"iogon;","304":"Idot;","305":"inodot;","306":"IJlig;","307":"ijlig;","308":"Jcirc;","309":"jcirc;","310":"Kcedil;","311":"kcedil;","312":"kgreen;","313":"Lacute;","314":"lacute;","315":"Lcedil;","316":"lcedil;","317":"Lcaron;","318":"lcaron;","319":"Lmidot;","320":"lmidot;","321":"Lstrok;","322":"lstrok;","323":"Nacute;","324":"nacute;","325":"Ncedil;","326":"ncedil;","327":"Ncaron;","328":"ncaron;","329":"napos;","330":"ENG;","331":"eng;","332":"Omacr;","333":"omacr;","336":"Odblac;","337":"odblac;","338":"OElig;","339":"oelig;","340":"Racute;","341":"racute;","342":"Rcedil;","343":"rcedil;","344":"Rcaron;","345":"rcaron;","346":"Sacute;","347":"sacute;","348":"Scirc;","349":"scirc;","350":"Scedil;","351":"scedil;","352":"Scaron;","353":"scaron;","354":"Tcedil;","355":"tcedil;","356":"Tcaron;","357":"tcaron;","358":"Tstrok;","359":"tstrok;","360":"Utilde;","361":"utilde;","362":"Umacr;","363":"umacr;","364":"Ubreve;","365":"ubreve;","366":"Uring;","367":"uring;","368":"Udblac;","369":"udblac;","370":"Uogon;","371":"uogon;","372":"Wcirc;","373":"wcirc;","374":"Ycirc;","375":"ycirc;","376":"Yuml;","377":"Zacute;","378":"zacute;","379":"Zdot;","380":"zdot;","381":"Zcaron;","382":"zcaron;","402":"fnof;","437":"imped;","501":"gacute;","567":"jmath;","710":"circ;","711":"Hacek;","728":"breve;","729":"dot;","730":"ring;","731":"ogon;","732":"tilde;","733":"DiacriticalDoubleAcute;","785":"DownBreve;","913":"Alpha;","914":"Beta;","915":"Gamma;","916":"Delta;","917":"Epsilon;","918":"Zeta;","919":"Eta;","920":"Theta;","921":"Iota;","922":"Kappa;","923":"Lambda;","924":"Mu;","925":"Nu;","926":"Xi;","927":"Omicron;","928":"Pi;","929":"Rho;","931":"Sigma;","932":"Tau;","933":"Upsilon;","934":"Phi;","935":"Chi;","936":"Psi;","937":"Omega;","945":"alpha;","946":"beta;","947":"gamma;","948":"delta;","949":"epsilon;","950":"zeta;","951":"eta;","952":"theta;","953":"iota;","954":"kappa;","955":"lambda;","956":"mu;","957":"nu;","958":"xi;","959":"omicron;","960":"pi;","961":"rho;","962":"varsigma;","963":"sigma;","964":"tau;","965":"upsilon;","966":"phi;","967":"chi;","968":"psi;","969":"omega;","977":"vartheta;","978":"upsih;","981":"varphi;","982":"varpi;","988":"Gammad;","989":"gammad;","1008":"varkappa;","1009":"varrho;","1013":"varepsilon;","1014":"bepsi;","1025":"IOcy;","1026":"DJcy;","1027":"GJcy;","1028":"Jukcy;","1029":"DScy;","1030":"Iukcy;","1031":"YIcy;","1032":"Jsercy;","1033":"LJcy;","1034":"NJcy;","1035":"TSHcy;","1036":"KJcy;","1038":"Ubrcy;","1039":"DZcy;","1040":"Acy;","1041":"Bcy;","1042":"Vcy;","1043":"Gcy;","1044":"Dcy;","1045":"IEcy;","1046":"ZHcy;","1047":"Zcy;","1048":"Icy;","1049":"Jcy;","1050":"Kcy;","1051":"Lcy;","1052":"Mcy;","1053":"Ncy;","1054":"Ocy;","1055":"Pcy;","1056":"Rcy;","1057":"Scy;","1058":"Tcy;","1059":"Ucy;","1060":"Fcy;","1061":"KHcy;","1062":"TScy;","1063":"CHcy;","1064":"SHcy;","1065":"SHCHcy;","1066":"HARDcy;","1067":"Ycy;","1068":"SOFTcy;","1069":"Ecy;","1070":"YUcy;","1071":"YAcy;","1072":"acy;","1073":"bcy;","1074":"vcy;","1075":"gcy;","1076":"dcy;","1077":"iecy;","1078":"zhcy;","1079":"zcy;","1080":"icy;","1081":"jcy;","1082":"kcy;","1083":"lcy;","1084":"mcy;","1085":"ncy;","1086":"ocy;","1087":"pcy;","1088":"rcy;","1089":"scy;","1090":"tcy;","1091":"ucy;","1092":"fcy;","1093":"khcy;","1094":"tscy;","1095":"chcy;","1096":"shcy;","1097":"shchcy;","1098":"hardcy;","1099":"ycy;","1100":"softcy;","1101":"ecy;","1102":"yucy;","1103":"yacy;","1105":"iocy;","1106":"djcy;","1107":"gjcy;","1108":"jukcy;","1109":"dscy;","1110":"iukcy;","1111":"yicy;","1112":"jsercy;","1113":"ljcy;","1114":"njcy;","1115":"tshcy;","1116":"kjcy;","1118":"ubrcy;","1119":"dzcy;","8194":"ensp;","8195":"emsp;","8196":"emsp13;","8197":"emsp14;","8199":"numsp;","8200":"puncsp;","8201":"ThinSpace;","8202":"VeryThinSpace;","8203":"ZeroWidthSpace;","8204":"zwnj;","8205":"zwj;","8206":"lrm;","8207":"rlm;","8208":"hyphen;","8211":"ndash;","8212":"mdash;","8213":"horbar;","8214":"Vert;","8216":"OpenCurlyQuote;","8217":"rsquor;","8218":"sbquo;","8220":"OpenCurlyDoubleQuote;","8221":"rdquor;","8222":"ldquor;","8224":"dagger;","8225":"ddagger;","8226":"bullet;","8229":"nldr;","8230":"mldr;","8240":"permil;","8241":"pertenk;","8242":"prime;","8243":"Prime;","8244":"tprime;","8245":"bprime;","8249":"lsaquo;","8250":"rsaquo;","8254":"OverBar;","8257":"caret;","8259":"hybull;","8260":"frasl;","8271":"bsemi;","8279":"qprime;","8287":"MediumSpace;","8288":"NoBreak;","8289":"ApplyFunction;","8290":"it;","8291":"InvisibleComma;","8364":"euro;","8411":"TripleDot;","8412":"DotDot;","8450":"Copf;","8453":"incare;","8458":"gscr;","8459":"Hscr;","8460":"Poincareplane;","8461":"quaternions;","8462":"planckh;","8463":"plankv;","8464":"Iscr;","8465":"imagpart;","8466":"Lscr;","8467":"ell;","8469":"Nopf;","8470":"numero;","8471":"copysr;","8472":"wp;","8473":"primes;","8474":"rationals;","8475":"Rscr;","8476":"Rfr;","8477":"Ropf;","8478":"rx;","8482":"trade;","8484":"Zopf;","8487":"mho;","8488":"Zfr;","8489":"iiota;","8492":"Bscr;","8493":"Cfr;","8495":"escr;","8496":"expectation;","8497":"Fscr;","8499":"phmmat;","8500":"oscr;","8501":"aleph;","8502":"beth;","8503":"gimel;","8504":"daleth;","8517":"DD;","8518":"DifferentialD;","8519":"exponentiale;","8520":"ImaginaryI;","8531":"frac13;","8532":"frac23;","8533":"frac15;","8534":"frac25;","8535":"frac35;","8536":"frac45;","8537":"frac16;","8538":"frac56;","8539":"frac18;","8540":"frac38;","8541":"frac58;","8542":"frac78;","8592":"slarr;","8593":"uparrow;","8594":"srarr;","8595":"ShortDownArrow;","8596":"leftrightarrow;","8597":"varr;","8598":"UpperLeftArrow;","8599":"UpperRightArrow;","8600":"searrow;","8601":"swarrow;","8602":"nleftarrow;","8603":"nrightarrow;","8605":"rightsquigarrow;","8606":"twoheadleftarrow;","8607":"Uarr;","8608":"twoheadrightarrow;","8609":"Darr;","8610":"leftarrowtail;","8611":"rightarrowtail;","8612":"mapstoleft;","8613":"UpTeeArrow;","8614":"RightTeeArrow;","8615":"mapstodown;","8617":"larrhk;","8618":"rarrhk;","8619":"looparrowleft;","8620":"rarrlp;","8621":"leftrightsquigarrow;","8622":"nleftrightarrow;","8624":"lsh;","8625":"rsh;","8626":"ldsh;","8627":"rdsh;","8629":"crarr;","8630":"curvearrowleft;","8631":"curvearrowright;","8634":"olarr;","8635":"orarr;","8636":"lharu;","8637":"lhard;","8638":"upharpoonright;","8639":"upharpoonleft;","8640":"RightVector;","8641":"rightharpoondown;","8642":"RightDownVector;","8643":"LeftDownVector;","8644":"rlarr;","8645":"UpArrowDownArrow;","8646":"lrarr;","8647":"llarr;","8648":"uuarr;","8649":"rrarr;","8650":"downdownarrows;","8651":"ReverseEquilibrium;","8652":"rlhar;","8653":"nLeftarrow;","8654":"nLeftrightarrow;","8655":"nRightarrow;","8656":"Leftarrow;","8657":"Uparrow;","8658":"Rightarrow;","8659":"Downarrow;","8660":"Leftrightarrow;","8661":"vArr;","8662":"nwArr;","8663":"neArr;","8664":"seArr;","8665":"swArr;","8666":"Lleftarrow;","8667":"Rrightarrow;","8669":"zigrarr;","8676":"LeftArrowBar;","8677":"RightArrowBar;","8693":"duarr;","8701":"loarr;","8702":"roarr;","8703":"hoarr;","8704":"forall;","8705":"complement;","8706":"PartialD;","8707":"Exists;","8708":"NotExists;","8709":"varnothing;","8711":"nabla;","8712":"isinv;","8713":"notinva;","8715":"SuchThat;","8716":"NotReverseElement;","8719":"Product;","8720":"Coproduct;","8721":"sum;","8722":"minus;","8723":"mp;","8724":"plusdo;","8726":"ssetmn;","8727":"lowast;","8728":"SmallCircle;","8730":"Sqrt;","8733":"vprop;","8734":"infin;","8735":"angrt;","8736":"angle;","8737":"measuredangle;","8738":"angsph;","8739":"VerticalBar;","8740":"nsmid;","8741":"spar;","8742":"nspar;","8743":"wedge;","8744":"vee;","8745":"cap;","8746":"cup;","8747":"Integral;","8748":"Int;","8749":"tint;","8750":"oint;","8751":"DoubleContourIntegral;","8752":"Cconint;","8753":"cwint;","8754":"cwconint;","8755":"CounterClockwiseContourIntegral;","8756":"therefore;","8757":"because;","8758":"ratio;","8759":"Proportion;","8760":"minusd;","8762":"mDDot;","8763":"homtht;","8764":"Tilde;","8765":"bsim;","8766":"mstpos;","8767":"acd;","8768":"wreath;","8769":"nsim;","8770":"esim;","8771":"TildeEqual;","8772":"nsimeq;","8773":"TildeFullEqual;","8774":"simne;","8775":"NotTildeFullEqual;","8776":"TildeTilde;","8777":"NotTildeTilde;","8778":"approxeq;","8779":"apid;","8780":"bcong;","8781":"CupCap;","8782":"HumpDownHump;","8783":"HumpEqual;","8784":"esdot;","8785":"eDot;","8786":"fallingdotseq;","8787":"risingdotseq;","8788":"coloneq;","8789":"eqcolon;","8790":"eqcirc;","8791":"cire;","8793":"wedgeq;","8794":"veeeq;","8796":"trie;","8799":"questeq;","8800":"NotEqual;","8801":"equiv;","8802":"NotCongruent;","8804":"leq;","8805":"GreaterEqual;","8806":"LessFullEqual;","8807":"GreaterFullEqual;","8808":"lneqq;","8809":"gneqq;","8810":"NestedLessLess;","8811":"NestedGreaterGreater;","8812":"twixt;","8813":"NotCupCap;","8814":"NotLess;","8815":"NotGreater;","8816":"NotLessEqual;","8817":"NotGreaterEqual;","8818":"lsim;","8819":"gtrsim;","8820":"NotLessTilde;","8821":"NotGreaterTilde;","8822":"lg;","8823":"gtrless;","8824":"ntlg;","8825":"ntgl;","8826":"Precedes;","8827":"Succeeds;","8828":"PrecedesSlantEqual;","8829":"SucceedsSlantEqual;","8830":"prsim;","8831":"succsim;","8832":"nprec;","8833":"nsucc;","8834":"subset;","8835":"supset;","8836":"nsub;","8837":"nsup;","8838":"SubsetEqual;","8839":"supseteq;","8840":"nsubseteq;","8841":"nsupseteq;","8842":"subsetneq;","8843":"supsetneq;","8845":"cupdot;","8846":"uplus;","8847":"SquareSubset;","8848":"SquareSuperset;","8849":"SquareSubsetEqual;","8850":"SquareSupersetEqual;","8851":"SquareIntersection;","8852":"SquareUnion;","8853":"oplus;","8854":"ominus;","8855":"otimes;","8856":"osol;","8857":"odot;","8858":"ocir;","8859":"oast;","8861":"odash;","8862":"plusb;","8863":"minusb;","8864":"timesb;","8865":"sdotb;","8866":"vdash;","8867":"LeftTee;","8868":"top;","8869":"UpTee;","8871":"models;","8872":"vDash;","8873":"Vdash;","8874":"Vvdash;","8875":"VDash;","8876":"nvdash;","8877":"nvDash;","8878":"nVdash;","8879":"nVDash;","8880":"prurel;","8882":"vltri;","8883":"vrtri;","8884":"trianglelefteq;","8885":"trianglerighteq;","8886":"origof;","8887":"imof;","8888":"mumap;","8889":"hercon;","8890":"intercal;","8891":"veebar;","8893":"barvee;","8894":"angrtvb;","8895":"lrtri;","8896":"xwedge;","8897":"xvee;","8898":"xcap;","8899":"xcup;","8900":"diamond;","8901":"sdot;","8902":"Star;","8903":"divonx;","8904":"bowtie;","8905":"ltimes;","8906":"rtimes;","8907":"lthree;","8908":"rthree;","8909":"bsime;","8910":"cuvee;","8911":"cuwed;","8912":"Subset;","8913":"Supset;","8914":"Cap;","8915":"Cup;","8916":"pitchfork;","8917":"epar;","8918":"ltdot;","8919":"gtrdot;","8920":"Ll;","8921":"ggg;","8922":"LessEqualGreater;","8923":"gtreqless;","8926":"curlyeqprec;","8927":"curlyeqsucc;","8928":"nprcue;","8929":"nsccue;","8930":"nsqsube;","8931":"nsqsupe;","8934":"lnsim;","8935":"gnsim;","8936":"prnsim;","8937":"succnsim;","8938":"ntriangleleft;","8939":"ntriangleright;","8940":"ntrianglelefteq;","8941":"ntrianglerighteq;","8942":"vellip;","8943":"ctdot;","8944":"utdot;","8945":"dtdot;","8946":"disin;","8947":"isinsv;","8948":"isins;","8949":"isindot;","8950":"notinvc;","8951":"notinvb;","8953":"isinE;","8954":"nisd;","8955":"xnis;","8956":"nis;","8957":"notnivc;","8958":"notnivb;","8965":"barwedge;","8966":"doublebarwedge;","8968":"LeftCeiling;","8969":"RightCeiling;","8970":"lfloor;","8971":"RightFloor;","8972":"drcrop;","8973":"dlcrop;","8974":"urcrop;","8975":"ulcrop;","8976":"bnot;","8978":"profline;","8979":"profsurf;","8981":"telrec;","8982":"target;","8988":"ulcorner;","8989":"urcorner;","8990":"llcorner;","8991":"lrcorner;","8994":"sfrown;","8995":"ssmile;","9005":"cylcty;","9006":"profalar;","9014":"topbot;","9021":"ovbar;","9023":"solbar;","9084":"angzarr;","9136":"lmoustache;","9137":"rmoustache;","9140":"tbrk;","9141":"UnderBracket;","9142":"bbrktbrk;","9180":"OverParenthesis;","9181":"UnderParenthesis;","9182":"OverBrace;","9183":"UnderBrace;","9186":"trpezium;","9191":"elinters;","9251":"blank;","9416":"oS;","9472":"HorizontalLine;","9474":"boxv;","9484":"boxdr;","9488":"boxdl;","9492":"boxur;","9496":"boxul;","9500":"boxvr;","9508":"boxvl;","9516":"boxhd;","9524":"boxhu;","9532":"boxvh;","9552":"boxH;","9553":"boxV;","9554":"boxdR;","9555":"boxDr;","9556":"boxDR;","9557":"boxdL;","9558":"boxDl;","9559":"boxDL;","9560":"boxuR;","9561":"boxUr;","9562":"boxUR;","9563":"boxuL;","9564":"boxUl;","9565":"boxUL;","9566":"boxvR;","9567":"boxVr;","9568":"boxVR;","9569":"boxvL;","9570":"boxVl;","9571":"boxVL;","9572":"boxHd;","9573":"boxhD;","9574":"boxHD;","9575":"boxHu;","9576":"boxhU;","9577":"boxHU;","9578":"boxvH;","9579":"boxVh;","9580":"boxVH;","9600":"uhblk;","9604":"lhblk;","9608":"block;","9617":"blk14;","9618":"blk12;","9619":"blk34;","9633":"square;","9642":"squf;","9643":"EmptyVerySmallSquare;","9645":"rect;","9646":"marker;","9649":"fltns;","9651":"xutri;","9652":"utrif;","9653":"utri;","9656":"rtrif;","9657":"triangleright;","9661":"xdtri;","9662":"dtrif;","9663":"triangledown;","9666":"ltrif;","9667":"triangleleft;","9674":"lozenge;","9675":"cir;","9708":"tridot;","9711":"xcirc;","9720":"ultri;","9721":"urtri;","9722":"lltri;","9723":"EmptySmallSquare;","9724":"FilledSmallSquare;","9733":"starf;","9734":"star;","9742":"phone;","9792":"female;","9794":"male;","9824":"spadesuit;","9827":"clubsuit;","9829":"heartsuit;","9830":"diams;","9834":"sung;","9837":"flat;","9838":"natural;","9839":"sharp;","10003":"checkmark;","10007":"cross;","10016":"maltese;","10038":"sext;","10072":"VerticalSeparator;","10098":"lbbrk;","10099":"rbbrk;","10184":"bsolhsub;","10185":"suphsol;","10214":"lobrk;","10215":"robrk;","10216":"LeftAngleBracket;","10217":"RightAngleBracket;","10218":"Lang;","10219":"Rang;","10220":"loang;","10221":"roang;","10229":"xlarr;","10230":"xrarr;","10231":"xharr;","10232":"xlArr;","10233":"xrArr;","10234":"xhArr;","10236":"xmap;","10239":"dzigrarr;","10498":"nvlArr;","10499":"nvrArr;","10500":"nvHarr;","10501":"Map;","10508":"lbarr;","10509":"rbarr;","10510":"lBarr;","10511":"rBarr;","10512":"RBarr;","10513":"DDotrahd;","10514":"UpArrowBar;","10515":"DownArrowBar;","10518":"Rarrtl;","10521":"latail;","10522":"ratail;","10523":"lAtail;","10524":"rAtail;","10525":"larrfs;","10526":"rarrfs;","10527":"larrbfs;","10528":"rarrbfs;","10531":"nwarhk;","10532":"nearhk;","10533":"searhk;","10534":"swarhk;","10535":"nwnear;","10536":"toea;","10537":"tosa;","10538":"swnwar;","10547":"rarrc;","10549":"cudarrr;","10550":"ldca;","10551":"rdca;","10552":"cudarrl;","10553":"larrpl;","10556":"curarrm;","10557":"cularrp;","10565":"rarrpl;","10568":"harrcir;","10569":"Uarrocir;","10570":"lurdshar;","10571":"ldrushar;","10574":"LeftRightVector;","10575":"RightUpDownVector;","10576":"DownLeftRightVector;","10577":"LeftUpDownVector;","10578":"LeftVectorBar;","10579":"RightVectorBar;","10580":"RightUpVectorBar;","10581":"RightDownVectorBar;","10582":"DownLeftVectorBar;","10583":"DownRightVectorBar;","10584":"LeftUpVectorBar;","10585":"LeftDownVectorBar;","10586":"LeftTeeVector;","10587":"RightTeeVector;","10588":"RightUpTeeVector;","10589":"RightDownTeeVector;","10590":"DownLeftTeeVector;","10591":"DownRightTeeVector;","10592":"LeftUpTeeVector;","10593":"LeftDownTeeVector;","10594":"lHar;","10595":"uHar;","10596":"rHar;","10597":"dHar;","10598":"luruhar;","10599":"ldrdhar;","10600":"ruluhar;","10601":"rdldhar;","10602":"lharul;","10603":"llhard;","10604":"rharul;","10605":"lrhard;","10606":"UpEquilibrium;","10607":"ReverseUpEquilibrium;","10608":"RoundImplies;","10609":"erarr;","10610":"simrarr;","10611":"larrsim;","10612":"rarrsim;","10613":"rarrap;","10614":"ltlarr;","10616":"gtrarr;","10617":"subrarr;","10619":"suplarr;","10620":"lfisht;","10621":"rfisht;","10622":"ufisht;","10623":"dfisht;","10629":"lopar;","10630":"ropar;","10635":"lbrke;","10636":"rbrke;","10637":"lbrkslu;","10638":"rbrksld;","10639":"lbrksld;","10640":"rbrkslu;","10641":"langd;","10642":"rangd;","10643":"lparlt;","10644":"rpargt;","10645":"gtlPar;","10646":"ltrPar;","10650":"vzigzag;","10652":"vangrt;","10653":"angrtvbd;","10660":"ange;","10661":"range;","10662":"dwangle;","10663":"uwangle;","10664":"angmsdaa;","10665":"angmsdab;","10666":"angmsdac;","10667":"angmsdad;","10668":"angmsdae;","10669":"angmsdaf;","10670":"angmsdag;","10671":"angmsdah;","10672":"bemptyv;","10673":"demptyv;","10674":"cemptyv;","10675":"raemptyv;","10676":"laemptyv;","10677":"ohbar;","10678":"omid;","10679":"opar;","10681":"operp;","10683":"olcross;","10684":"odsold;","10686":"olcir;","10687":"ofcir;","10688":"olt;","10689":"ogt;","10690":"cirscir;","10691":"cirE;","10692":"solb;","10693":"bsolb;","10697":"boxbox;","10701":"trisb;","10702":"rtriltri;","10703":"LeftTriangleBar;","10704":"RightTriangleBar;","10716":"iinfin;","10717":"infintie;","10718":"nvinfin;","10723":"eparsl;","10724":"smeparsl;","10725":"eqvparsl;","10731":"lozf;","10740":"RuleDelayed;","10742":"dsol;","10752":"xodot;","10753":"xoplus;","10754":"xotime;","10756":"xuplus;","10758":"xsqcup;","10764":"qint;","10765":"fpartint;","10768":"cirfnint;","10769":"awint;","10770":"rppolint;","10771":"scpolint;","10772":"npolint;","10773":"pointint;","10774":"quatint;","10775":"intlarhk;","10786":"pluscir;","10787":"plusacir;","10788":"simplus;","10789":"plusdu;","10790":"plussim;","10791":"plustwo;","10793":"mcomma;","10794":"minusdu;","10797":"loplus;","10798":"roplus;","10799":"Cross;","10800":"timesd;","10801":"timesbar;","10803":"smashp;","10804":"lotimes;","10805":"rotimes;","10806":"otimesas;","10807":"Otimes;","10808":"odiv;","10809":"triplus;","10810":"triminus;","10811":"tritime;","10812":"iprod;","10815":"amalg;","10816":"capdot;","10818":"ncup;","10819":"ncap;","10820":"capand;","10821":"cupor;","10822":"cupcap;","10823":"capcup;","10824":"cupbrcap;","10825":"capbrcup;","10826":"cupcup;","10827":"capcap;","10828":"ccups;","10829":"ccaps;","10832":"ccupssm;","10835":"And;","10836":"Or;","10837":"andand;","10838":"oror;","10839":"orslope;","10840":"andslope;","10842":"andv;","10843":"orv;","10844":"andd;","10845":"ord;","10847":"wedbar;","10854":"sdote;","10858":"simdot;","10861":"congdot;","10862":"easter;","10863":"apacir;","10864":"apE;","10865":"eplus;","10866":"pluse;","10867":"Esim;","10868":"Colone;","10869":"Equal;","10871":"eDDot;","10872":"equivDD;","10873":"ltcir;","10874":"gtcir;","10875":"ltquest;","10876":"gtquest;","10877":"LessSlantEqual;","10878":"GreaterSlantEqual;","10879":"lesdot;","10880":"gesdot;","10881":"lesdoto;","10882":"gesdoto;","10883":"lesdotor;","10884":"gesdotol;","10885":"lessapprox;","10886":"gtrapprox;","10887":"lneq;","10888":"gneq;","10889":"lnapprox;","10890":"gnapprox;","10891":"lesseqqgtr;","10892":"gtreqqless;","10893":"lsime;","10894":"gsime;","10895":"lsimg;","10896":"gsiml;","10897":"lgE;","10898":"glE;","10899":"lesges;","10900":"gesles;","10901":"eqslantless;","10902":"eqslantgtr;","10903":"elsdot;","10904":"egsdot;","10905":"el;","10906":"eg;","10909":"siml;","10910":"simg;","10911":"simlE;","10912":"simgE;","10913":"LessLess;","10914":"GreaterGreater;","10916":"glj;","10917":"gla;","10918":"ltcc;","10919":"gtcc;","10920":"lescc;","10921":"gescc;","10922":"smt;","10923":"lat;","10924":"smte;","10925":"late;","10926":"bumpE;","10927":"preceq;","10928":"succeq;","10931":"prE;","10932":"scE;","10933":"prnE;","10934":"succneqq;","10935":"precapprox;","10936":"succapprox;","10937":"prnap;","10938":"succnapprox;","10939":"Pr;","10940":"Sc;","10941":"subdot;","10942":"supdot;","10943":"subplus;","10944":"supplus;","10945":"submult;","10946":"supmult;","10947":"subedot;","10948":"supedot;","10949":"subseteqq;","10950":"supseteqq;","10951":"subsim;","10952":"supsim;","10955":"subsetneqq;","10956":"supsetneqq;","10959":"csub;","10960":"csup;","10961":"csube;","10962":"csupe;","10963":"subsup;","10964":"supsub;","10965":"subsub;","10966":"supsup;","10967":"suphsub;","10968":"supdsub;","10969":"forkv;","10970":"topfork;","10971":"mlcp;","10980":"DoubleLeftTee;","10982":"Vdashl;","10983":"Barv;","10984":"vBar;","10985":"vBarv;","10987":"Vbar;","10988":"Not;","10989":"bNot;","10990":"rnmid;","10991":"cirmid;","10992":"midcir;","10993":"topcir;","10994":"nhpar;","10995":"parsim;","11005":"parsl;","64256":"fflig;","64257":"filig;","64258":"fllig;","64259":"ffilig;","64260":"ffllig;"}',
                );
            },
            26: (t, e, r) => {
                var n = r(2549);
                t.exports = function (t) {
                    if ((t >= 55296 && t <= 57343) || t > 1114111) return "�";
                    t in n && (t = n[t]);
                    var e = "";
                    return (
                        t > 65535 &&
                            ((t -= 65536),
                            (e += String.fromCharCode(
                                ((t >>> 10) & 1023) | 55296,
                            )),
                            (t = 56320 | (1023 & t))),
                        e + String.fromCharCode(t)
                    );
                };
            },
            2549: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}',
                );
            },
            752: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}',
                );
            },
            5076: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}',
                );
            },
            1083: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}',
                );
            },
            7187: (t) => {
                "use strict";
                var e,
                    r = "object" == typeof Reflect ? Reflect : null,
                    n =
                        r && "function" == typeof r.apply
                            ? r.apply
                            : function (t, e, r) {
                                  return Function.prototype.apply.call(t, e, r);
                              };
                e =
                    r && "function" == typeof r.ownKeys
                        ? r.ownKeys
                        : Object.getOwnPropertySymbols
                        ? function (t) {
                              return Object.getOwnPropertyNames(t).concat(
                                  Object.getOwnPropertySymbols(t),
                              );
                          }
                        : function (t) {
                              return Object.getOwnPropertyNames(t);
                          };
                var o =
                    Number.isNaN ||
                    function (t) {
                        return t != t;
                    };
                function i() {
                    i.init.call(this);
                }
                (t.exports = i),
                    (t.exports.once = function (t, e) {
                        return new Promise(function (r, n) {
                            function o(r) {
                                t.removeListener(e, i), n(r);
                            }
                            function i() {
                                "function" == typeof t.removeListener &&
                                    t.removeListener("error", o),
                                    r([].slice.call(arguments));
                            }
                            g(t, e, i, { once: !0 }),
                                "error" !== e &&
                                    (function (t, e, r) {
                                        "function" == typeof t.on &&
                                            g(t, "error", e, { once: !0 });
                                    })(t, o);
                        });
                    }),
                    (i.EventEmitter = i),
                    (i.prototype._events = void 0),
                    (i.prototype._eventsCount = 0),
                    (i.prototype._maxListeners = void 0);
                var s = 10;
                function a(t) {
                    if ("function" != typeof t)
                        throw new TypeError(
                            'The "listener" argument must be of type Function. Received type ' +
                                typeof t,
                        );
                }
                function c(t) {
                    return void 0 === t._maxListeners
                        ? i.defaultMaxListeners
                        : t._maxListeners;
                }
                function l(t, e, r, n) {
                    var o, i, s, l;
                    if (
                        (a(r),
                        void 0 === (i = t._events)
                            ? ((i = t._events = Object.create(null)),
                              (t._eventsCount = 0))
                            : (void 0 !== i.newListener &&
                                  (t.emit(
                                      "newListener",
                                      e,
                                      r.listener ? r.listener : r,
                                  ),
                                  (i = t._events)),
                              (s = i[e])),
                        void 0 === s)
                    )
                        (s = i[e] = r), ++t._eventsCount;
                    else if (
                        ("function" == typeof s
                            ? (s = i[e] = n ? [r, s] : [s, r])
                            : n
                            ? s.unshift(r)
                            : s.push(r),
                        (o = c(t)) > 0 && s.length > o && !s.warned)
                    ) {
                        s.warned = !0;
                        var u = new Error(
                            "Possible EventEmitter memory leak detected. " +
                                s.length +
                                " " +
                                String(e) +
                                " listeners added. Use emitter.setMaxListeners() to increase limit",
                        );
                        (u.name = "MaxListenersExceededWarning"),
                            (u.emitter = t),
                            (u.type = e),
                            (u.count = s.length),
                            (l = u),
                            console && console.warn && console.warn(l);
                    }
                    return t;
                }
                function u() {
                    if (!this.fired)
                        return (
                            this.target.removeListener(this.type, this.wrapFn),
                            (this.fired = !0),
                            0 === arguments.length
                                ? this.listener.call(this.target)
                                : this.listener.apply(this.target, arguments)
                        );
                }
                function p(t, e, r) {
                    var n = {
                            fired: !1,
                            wrapFn: void 0,
                            target: t,
                            type: e,
                            listener: r,
                        },
                        o = u.bind(n);
                    return (o.listener = r), (n.wrapFn = o), o;
                }
                function h(t, e, r) {
                    var n = t._events;
                    if (void 0 === n) return [];
                    var o = n[e];
                    return void 0 === o
                        ? []
                        : "function" == typeof o
                        ? r
                            ? [o.listener || o]
                            : [o]
                        : r
                        ? (function (t) {
                              for (
                                  var e = new Array(t.length), r = 0;
                                  r < e.length;
                                  ++r
                              )
                                  e[r] = t[r].listener || t[r];
                              return e;
                          })(o)
                        : d(o, o.length);
                }
                function f(t) {
                    var e = this._events;
                    if (void 0 !== e) {
                        var r = e[t];
                        if ("function" == typeof r) return 1;
                        if (void 0 !== r) return r.length;
                    }
                    return 0;
                }
                function d(t, e) {
                    for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
                    return r;
                }
                function g(t, e, r, n) {
                    if ("function" == typeof t.on)
                        n.once ? t.once(e, r) : t.on(e, r);
                    else {
                        if ("function" != typeof t.addEventListener)
                            throw new TypeError(
                                'The "emitter" argument must be of type EventEmitter. Received type ' +
                                    typeof t,
                            );
                        t.addEventListener(e, function o(i) {
                            n.once && t.removeEventListener(e, o), r(i);
                        });
                    }
                }
                Object.defineProperty(i, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                    set: function (t) {
                        if ("number" != typeof t || t < 0 || o(t))
                            throw new RangeError(
                                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                                    t +
                                    ".",
                            );
                        s = t;
                    },
                }),
                    (i.init = function () {
                        (void 0 !== this._events &&
                            this._events !==
                                Object.getPrototypeOf(this)._events) ||
                            ((this._events = Object.create(null)),
                            (this._eventsCount = 0)),
                            (this._maxListeners = this._maxListeners || void 0);
                    }),
                    (i.prototype.setMaxListeners = function (t) {
                        if ("number" != typeof t || t < 0 || o(t))
                            throw new RangeError(
                                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                                    t +
                                    ".",
                            );
                        return (this._maxListeners = t), this;
                    }),
                    (i.prototype.getMaxListeners = function () {
                        return c(this);
                    }),
                    (i.prototype.emit = function (t) {
                        for (var e = [], r = 1; r < arguments.length; r++)
                            e.push(arguments[r]);
                        var o = "error" === t,
                            i = this._events;
                        if (void 0 !== i) o = o && void 0 === i.error;
                        else if (!o) return !1;
                        if (o) {
                            var s;
                            if (
                                (e.length > 0 && (s = e[0]), s instanceof Error)
                            )
                                throw s;
                            var a = new Error(
                                "Unhandled error." +
                                    (s ? " (" + s.message + ")" : ""),
                            );
                            throw ((a.context = s), a);
                        }
                        var c = i[t];
                        if (void 0 === c) return !1;
                        if ("function" == typeof c) n(c, this, e);
                        else {
                            var l = c.length,
                                u = d(c, l);
                            for (r = 0; r < l; ++r) n(u[r], this, e);
                        }
                        return !0;
                    }),
                    (i.prototype.addListener = function (t, e) {
                        return l(this, t, e, !1);
                    }),
                    (i.prototype.on = i.prototype.addListener),
                    (i.prototype.prependListener = function (t, e) {
                        return l(this, t, e, !0);
                    }),
                    (i.prototype.once = function (t, e) {
                        return a(e), this.on(t, p(this, t, e)), this;
                    }),
                    (i.prototype.prependOnceListener = function (t, e) {
                        return (
                            a(e), this.prependListener(t, p(this, t, e)), this
                        );
                    }),
                    (i.prototype.removeListener = function (t, e) {
                        var r, n, o, i, s;
                        if ((a(e), void 0 === (n = this._events))) return this;
                        if (void 0 === (r = n[t])) return this;
                        if (r === e || r.listener === e)
                            0 == --this._eventsCount
                                ? (this._events = Object.create(null))
                                : (delete n[t],
                                  n.removeListener &&
                                      this.emit(
                                          "removeListener",
                                          t,
                                          r.listener || e,
                                      ));
                        else if ("function" != typeof r) {
                            for (o = -1, i = r.length - 1; i >= 0; i--)
                                if (r[i] === e || r[i].listener === e) {
                                    (s = r[i].listener), (o = i);
                                    break;
                                }
                            if (o < 0) return this;
                            0 === o
                                ? r.shift()
                                : (function (t, e) {
                                      for (; e + 1 < t.length; e++)
                                          t[e] = t[e + 1];
                                      t.pop();
                                  })(r, o),
                                1 === r.length && (n[t] = r[0]),
                                void 0 !== n.removeListener &&
                                    this.emit("removeListener", t, s || e);
                        }
                        return this;
                    }),
                    (i.prototype.off = i.prototype.removeListener),
                    (i.prototype.removeAllListeners = function (t) {
                        var e, r, n;
                        if (void 0 === (r = this._events)) return this;
                        if (void 0 === r.removeListener)
                            return (
                                0 === arguments.length
                                    ? ((this._events = Object.create(null)),
                                      (this._eventsCount = 0))
                                    : void 0 !== r[t] &&
                                      (0 == --this._eventsCount
                                          ? (this._events = Object.create(null))
                                          : delete r[t]),
                                this
                            );
                        if (0 === arguments.length) {
                            var o,
                                i = Object.keys(r);
                            for (n = 0; n < i.length; ++n)
                                "removeListener" !== (o = i[n]) &&
                                    this.removeAllListeners(o);
                            return (
                                this.removeAllListeners("removeListener"),
                                (this._events = Object.create(null)),
                                (this._eventsCount = 0),
                                this
                            );
                        }
                        if ("function" == typeof (e = r[t]))
                            this.removeListener(t, e);
                        else if (void 0 !== e)
                            for (n = e.length - 1; n >= 0; n--)
                                this.removeListener(t, e[n]);
                        return this;
                    }),
                    (i.prototype.listeners = function (t) {
                        return h(this, t, !0);
                    }),
                    (i.prototype.rawListeners = function (t) {
                        return h(this, t, !1);
                    }),
                    (i.listenerCount = function (t, e) {
                        return "function" == typeof t.listenerCount
                            ? t.listenerCount(e)
                            : f.call(t, e);
                    }),
                    (i.prototype.listenerCount = f),
                    (i.prototype.eventNames = function () {
                        return this._eventsCount > 0 ? e(this._events) : [];
                    });
            },
            9144: (t, e, r) => {
                var n,
                    o =
                        void 0 !== r.g
                            ? r.g
                            : "undefined" != typeof window
                            ? window
                            : {},
                    i = r(5893);
                "undefined" != typeof document
                    ? (n = document)
                    : (n = o["__GLOBAL_DOCUMENT_CACHE@4"]) ||
                      (n = o["__GLOBAL_DOCUMENT_CACHE@4"] = i),
                    (t.exports = n);
            },
            5145: (t, e, r) => {
                var n = r(2379);
                t.exports = function (t) {
                    if (!t.VNode || !t.VText)
                        throw new Error(
                            "html-to-vdom needs to be initialized with VNode and VText",
                        );
                    return n(t.VNode, t.VText);
                };
            },
            5512: (t, e, r) => {
                var n = r(3498).decode;
                function o(t, e) {
                    return (t & e) === e;
                }
                var i,
                    s = RegExp.prototype.test.bind(
                        /^(data|aria)-[a-z_][a-z\d_.\-]*$/,
                    ),
                    a = {
                        Properties: {
                            accept: null,
                            acceptCharset: null,
                            accessKey: null,
                            action: null,
                            allowFullScreen: 9,
                            allowTransparency: 1,
                            alt: null,
                            async: 8,
                            autoComplete: null,
                            autoFocus: 8,
                            autoPlay: 8,
                            capture: 9,
                            cellPadding: null,
                            cellSpacing: null,
                            charSet: 1,
                            challenge: 1,
                            checked: 10,
                            classID: 1,
                            className: 1,
                            cols: 49,
                            colSpan: null,
                            content: null,
                            contentEditable: null,
                            contextMenu: 1,
                            controls: 10,
                            coords: null,
                            crossOrigin: null,
                            data: null,
                            dateTime: 1,
                            defer: 8,
                            dir: null,
                            disabled: 9,
                            download: 64,
                            draggable: null,
                            encType: null,
                            form: 1,
                            formAction: 1,
                            formEncType: 1,
                            formMethod: 1,
                            formNoValidate: 8,
                            formTarget: 1,
                            frameBorder: 1,
                            headers: null,
                            height: 1,
                            hidden: 9,
                            high: null,
                            href: null,
                            hrefLang: null,
                            htmlFor: null,
                            httpEquiv: null,
                            icon: null,
                            id: 2,
                            is: 1,
                            keyParams: 1,
                            keyType: 1,
                            label: null,
                            lang: null,
                            list: 1,
                            loop: 10,
                            low: null,
                            manifest: 1,
                            marginHeight: null,
                            marginWidth: null,
                            max: null,
                            maxLength: 1,
                            media: 1,
                            mediaGroup: null,
                            method: null,
                            min: null,
                            minLength: 1,
                            multiple: 10,
                            muted: 10,
                            name: null,
                            noValidate: 8,
                            open: 8,
                            optimum: null,
                            pattern: null,
                            placeholder: null,
                            poster: null,
                            preload: null,
                            radioGroup: null,
                            readOnly: 10,
                            rel: null,
                            required: 8,
                            role: 1,
                            rows: 49,
                            rowSpan: null,
                            sandbox: null,
                            scope: null,
                            scoped: 8,
                            scrolling: null,
                            seamless: 9,
                            selected: 10,
                            shape: null,
                            size: 49,
                            sizes: 1,
                            span: 48,
                            spellCheck: null,
                            src: null,
                            srcDoc: 2,
                            srcSet: 1,
                            start: 16,
                            step: null,
                            style: null,
                            tabIndex: null,
                            target: null,
                            title: null,
                            type: null,
                            useMap: null,
                            value: 2,
                            width: 1,
                            wmode: 1,
                            autoCapitalize: null,
                            autoCorrect: null,
                            itemProp: 1,
                            itemScope: 9,
                            itemType: 1,
                            itemID: 1,
                            itemRef: 1,
                            property: null,
                            unselectable: 1,
                        },
                    },
                    c = {
                        className: "class",
                        htmlFor: "for",
                        httpEquiv: "http-equiv",
                        acceptCharset: "accept-charset",
                    },
                    l = {
                        style: function (t) {
                            return t.split(";").reduce(function (t, e) {
                                var r = e.split(/:(.+)/);
                                return (
                                    r[0] &&
                                        r[1] &&
                                        (t[r[0].trim()] = r[1].trim()),
                                    t
                                );
                            }, {});
                        },
                        placeholder: n,
                        title: n,
                        alt: n,
                    },
                    u =
                        ((i = {}),
                        Object.keys(a.Properties).forEach(function (t) {
                            var e = a.Properties[t],
                                r = c[t] || t.toLowerCase(),
                                n = {
                                    attributeName: r,
                                    propertyName: t,
                                    mustUseAttribute: o(e, 1),
                                    mustUseProperty: o(e, 2),
                                    hasBooleanValue: o(e, 8),
                                    hasNumericValue: o(e, 16),
                                    hasPositiveNumericValue: o(e, 48),
                                    hasOverloadedBooleanValue: o(e, 64),
                                };
                            i[r] = n;
                        }),
                        function (t) {
                            return i[t];
                        });
                t.exports = function (t) {
                    var e = t.attribs,
                        r = { attributes: {} };
                    return (
                        Object.keys(e).forEach(function (t) {
                            var n = t.toLowerCase(),
                                o = u(n),
                                i = e[t];
                            if (!s(t) && o) {
                                var a,
                                    c = l[o.propertyName];
                                c && (i = c(i)),
                                    o.mustUseAttribute
                                        ? o.hasBooleanValue
                                            ? (r.attributes[o.attributeName] =
                                                  "")
                                            : (r.attributes[o.attributeName] =
                                                  i)
                                        : o.hasBooleanValue
                                        ? ((a =
                                              "" === i ||
                                              i.toLowerCase() ===
                                                  o.attributeName),
                                          (r[o.propertyName] = !!a))
                                        : o.hasOverloadedBooleanValue
                                        ? ((a = "" === i),
                                          (r[o.propertyName] = !!a || i))
                                        : o.hasNumericValue ||
                                          o.hasPositiveNumericValue
                                        ? (r[o.propertyName] = Number(i))
                                        : (r[o.propertyName] = i);
                            } else r.attributes[t] = i;
                        }),
                        r
                    );
                };
            },
            2379: (t, e, r) => {
                var n = r(8585),
                    o = r(1209);
                t.exports = function (t, e) {
                    var r = n(t, e);
                    return function (t, e) {
                        var n = void 0 === e && "string" == typeof t,
                            i = n ? t : e,
                            s = n ? void 0 : t.getVNodeKey,
                            a = o(i);
                        return a.length > 1
                            ? a.map(function (t) {
                                  return r.convert(t, s);
                              })
                            : r.convert(a[0], s);
                    };
                };
            },
            8585: (t, e, r) => {
                var n = r(3498).decode,
                    o = r(5512);
                t.exports = function (t, e) {
                    var r = {
                        convert: function (t, o) {
                            return "tag" === t.type ||
                                "script" === t.type ||
                                "style" === t.type
                                ? r.convertTag(t, o)
                                : "text" === t.type
                                ? new e(n(t.data))
                                : new e("");
                        },
                        convertTag: function (e, n) {
                            var i,
                                s = o(e);
                            n && (i = n(s));
                            var a = Array.prototype.map.call(
                                e.children || [],
                                function (t) {
                                    return r.convert(t, n);
                                },
                            );
                            return new t(e.name, s, a, i);
                        },
                    };
                    return r;
                };
            },
            1209: (t, e, r) => {
                var n = r(3719);
                t.exports = function (t) {
                    var e = new n.DomHandler();
                    return (
                        new n.Parser(e, {
                            lowerCaseAttributeNames: !1,
                        }).parseComplete(t),
                        e.dom
                    );
                };
            },
            5449: (t, e, r) => {
                function n(t) {
                    (this._cbs = t || {}), (this.events = []);
                }
                t.exports = n;
                var o = r(3719).EVENTS;
                Object.keys(o).forEach(function (t) {
                    if (0 === o[t])
                        (t = "on" + t),
                            (n.prototype[t] = function () {
                                this.events.push([t]),
                                    this._cbs[t] && this._cbs[t]();
                            });
                    else if (1 === o[t])
                        (t = "on" + t),
                            (n.prototype[t] = function (e) {
                                this.events.push([t, e]),
                                    this._cbs[t] && this._cbs[t](e);
                            });
                    else {
                        if (2 !== o[t])
                            throw Error("wrong number of arguments");
                        (t = "on" + t),
                            (n.prototype[t] = function (e, r) {
                                this.events.push([t, e, r]),
                                    this._cbs[t] && this._cbs[t](e, r);
                            });
                    }
                }),
                    (n.prototype.onreset = function () {
                        (this.events = []),
                            this._cbs.onreset && this._cbs.onreset();
                    }),
                    (n.prototype.restart = function () {
                        this._cbs.onreset && this._cbs.onreset();
                        for (var t = 0, e = this.events.length; t < e; t++)
                            if (this._cbs[this.events[t][0]]) {
                                var r = this.events[t].length;
                                1 === r
                                    ? this._cbs[this.events[t][0]]()
                                    : 2 === r
                                    ? this._cbs[this.events[t][0]](
                                          this.events[t][1],
                                      )
                                    : this._cbs[this.events[t][0]](
                                          this.events[t][1],
                                          this.events[t][2],
                                      );
                            }
                    });
            },
            3870: (t, e, r) => {
                var n = r(8753),
                    o = r(2417);
                function i(t, e) {
                    this.init(t, e);
                }
                function s(t, e) {
                    return o.getElementsByTagName(t, e, !0);
                }
                function a(t, e) {
                    return o.getElementsByTagName(t, e, !0, 1)[0];
                }
                function c(t, e, r) {
                    return o.getText(o.getElementsByTagName(t, e, r, 1)).trim();
                }
                function l(t, e, r, n, o) {
                    var i = c(r, n, o);
                    i && (t[e] = i);
                }
                r(5717)(i, n), (i.prototype.init = n);
                var u = function (t) {
                    return "rss" === t || "feed" === t || "rdf:RDF" === t;
                };
                (i.prototype.onend = function () {
                    var t,
                        e,
                        r = {},
                        o = a(u, this.dom);
                    o &&
                        ("feed" === o.name
                            ? ((e = o.children),
                              (r.type = "atom"),
                              l(r, "id", "id", e),
                              l(r, "title", "title", e),
                              (t = a("link", e)) &&
                                  (t = t.attribs) &&
                                  (t = t.href) &&
                                  (r.link = t),
                              l(r, "description", "subtitle", e),
                              (t = c("updated", e)) &&
                                  (r.updated = new Date(t)),
                              l(r, "author", "email", e, !0),
                              (r.items = s("entry", e).map(function (t) {
                                  var e,
                                      r = {};
                                  return (
                                      l(r, "id", "id", (t = t.children)),
                                      l(r, "title", "title", t),
                                      (e = a("link", t)) &&
                                          (e = e.attribs) &&
                                          (e = e.href) &&
                                          (r.link = e),
                                      (e =
                                          c("summary", t) || c("content", t)) &&
                                          (r.description = e),
                                      (e = c("updated", t)) &&
                                          (r.pubDate = new Date(e)),
                                      r
                                  );
                              })))
                            : ((e = a("channel", o.children).children),
                              (r.type = o.name.substr(0, 3)),
                              (r.id = ""),
                              l(r, "title", "title", e),
                              l(r, "link", "link", e),
                              l(r, "description", "description", e),
                              (t = c("lastBuildDate", e)) &&
                                  (r.updated = new Date(t)),
                              l(r, "author", "managingEditor", e, !0),
                              (r.items = s("item", o.children).map(function (
                                  t,
                              ) {
                                  var e,
                                      r = {};
                                  return (
                                      l(r, "id", "guid", (t = t.children)),
                                      l(r, "title", "title", t),
                                      l(r, "link", "link", t),
                                      l(r, "description", "description", t),
                                      (e = c("pubDate", t)) &&
                                          (r.pubDate = new Date(e)),
                                      r
                                  );
                              })))),
                        (this.dom = r),
                        n.prototype._handleCallback.call(
                            this,
                            o ? null : Error("couldn't find root of feed"),
                        );
                }),
                    (t.exports = i);
            },
            763: (t, e, r) => {
                var n = r(9889),
                    o = {
                        input: !0,
                        option: !0,
                        optgroup: !0,
                        select: !0,
                        button: !0,
                        datalist: !0,
                        textarea: !0,
                    },
                    i = {
                        tr: { tr: !0, th: !0, td: !0 },
                        th: { th: !0 },
                        td: { thead: !0, th: !0, td: !0 },
                        body: { head: !0, link: !0, script: !0 },
                        li: { li: !0 },
                        p: { p: !0 },
                        h1: { p: !0 },
                        h2: { p: !0 },
                        h3: { p: !0 },
                        h4: { p: !0 },
                        h5: { p: !0 },
                        h6: { p: !0 },
                        select: o,
                        input: o,
                        output: o,
                        button: o,
                        datalist: o,
                        textarea: o,
                        option: { option: !0 },
                        optgroup: { optgroup: !0 },
                    },
                    s = {
                        __proto__: null,
                        area: !0,
                        base: !0,
                        basefont: !0,
                        br: !0,
                        col: !0,
                        command: !0,
                        embed: !0,
                        frame: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        isindex: !0,
                        keygen: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0,
                    },
                    a = { __proto__: null, math: !0, svg: !0 },
                    c = {
                        __proto__: null,
                        mi: !0,
                        mo: !0,
                        mn: !0,
                        ms: !0,
                        mtext: !0,
                        "annotation-xml": !0,
                        foreignObject: !0,
                        desc: !0,
                        title: !0,
                    },
                    l = /\s|\//;
                function u(t, e) {
                    (this._options = e || {}),
                        (this._cbs = t || {}),
                        (this._tagname = ""),
                        (this._attribname = ""),
                        (this._attribvalue = ""),
                        (this._attribs = null),
                        (this._stack = []),
                        (this._foreignContext = []),
                        (this.startIndex = 0),
                        (this.endIndex = null),
                        (this._lowerCaseTagNames =
                            "lowerCaseTags" in this._options
                                ? !!this._options.lowerCaseTags
                                : !this._options.xmlMode),
                        (this._lowerCaseAttributeNames =
                            "lowerCaseAttributeNames" in this._options
                                ? !!this._options.lowerCaseAttributeNames
                                : !this._options.xmlMode),
                        this._options.Tokenizer &&
                            (n = this._options.Tokenizer),
                        (this._tokenizer = new n(this._options, this)),
                        this._cbs.onparserinit && this._cbs.onparserinit(this);
                }
                r(5717)(u, r(7187).EventEmitter),
                    (u.prototype._updatePosition = function (t) {
                        null === this.endIndex
                            ? this._tokenizer._sectionStart <= t
                                ? (this.startIndex = 0)
                                : (this.startIndex =
                                      this._tokenizer._sectionStart - t)
                            : (this.startIndex = this.endIndex + 1),
                            (this.endIndex =
                                this._tokenizer.getAbsoluteIndex());
                    }),
                    (u.prototype.ontext = function (t) {
                        this._updatePosition(1),
                            this.endIndex--,
                            this._cbs.ontext && this._cbs.ontext(t);
                    }),
                    (u.prototype.onopentagname = function (t) {
                        if (
                            (this._lowerCaseTagNames && (t = t.toLowerCase()),
                            (this._tagname = t),
                            !this._options.xmlMode && t in i)
                        )
                            for (
                                var e;
                                (e = this._stack[this._stack.length - 1]) in
                                i[t];
                                this.onclosetag(e)
                            );
                        (!this._options.xmlMode && t in s) ||
                            (this._stack.push(t),
                            t in a
                                ? this._foreignContext.push(!0)
                                : t in c && this._foreignContext.push(!1)),
                            this._cbs.onopentagname &&
                                this._cbs.onopentagname(t),
                            this._cbs.onopentag && (this._attribs = {});
                    }),
                    (u.prototype.onopentagend = function () {
                        this._updatePosition(1),
                            this._attribs &&
                                (this._cbs.onopentag &&
                                    this._cbs.onopentag(
                                        this._tagname,
                                        this._attribs,
                                    ),
                                (this._attribs = null)),
                            !this._options.xmlMode &&
                                this._cbs.onclosetag &&
                                this._tagname in s &&
                                this._cbs.onclosetag(this._tagname),
                            (this._tagname = "");
                    }),
                    (u.prototype.onclosetag = function (t) {
                        if (
                            (this._updatePosition(1),
                            this._lowerCaseTagNames && (t = t.toLowerCase()),
                            (t in a || t in c) && this._foreignContext.pop(),
                            !this._stack.length ||
                                (t in s && !this._options.xmlMode))
                        )
                            this._options.xmlMode ||
                                ("br" !== t && "p" !== t) ||
                                (this.onopentagname(t),
                                this._closeCurrentTag());
                        else {
                            var e = this._stack.lastIndexOf(t);
                            if (-1 !== e)
                                if (this._cbs.onclosetag)
                                    for (e = this._stack.length - e; e--; )
                                        this._cbs.onclosetag(this._stack.pop());
                                else this._stack.length = e;
                            else
                                "p" !== t ||
                                    this._options.xmlMode ||
                                    (this.onopentagname(t),
                                    this._closeCurrentTag());
                        }
                    }),
                    (u.prototype.onselfclosingtag = function () {
                        this._options.xmlMode ||
                        this._options.recognizeSelfClosing ||
                        this._foreignContext[this._foreignContext.length - 1]
                            ? this._closeCurrentTag()
                            : this.onopentagend();
                    }),
                    (u.prototype._closeCurrentTag = function () {
                        var t = this._tagname;
                        this.onopentagend(),
                            this._stack[this._stack.length - 1] === t &&
                                (this._cbs.onclosetag &&
                                    this._cbs.onclosetag(t),
                                this._stack.pop());
                    }),
                    (u.prototype.onattribname = function (t) {
                        this._lowerCaseAttributeNames && (t = t.toLowerCase()),
                            (this._attribname = t);
                    }),
                    (u.prototype.onattribdata = function (t) {
                        this._attribvalue += t;
                    }),
                    (u.prototype.onattribend = function () {
                        this._cbs.onattribute &&
                            this._cbs.onattribute(
                                this._attribname,
                                this._attribvalue,
                            ),
                            this._attribs &&
                                !Object.prototype.hasOwnProperty.call(
                                    this._attribs,
                                    this._attribname,
                                ) &&
                                (this._attribs[this._attribname] =
                                    this._attribvalue),
                            (this._attribname = ""),
                            (this._attribvalue = "");
                    }),
                    (u.prototype._getInstructionName = function (t) {
                        var e = t.search(l),
                            r = e < 0 ? t : t.substr(0, e);
                        return (
                            this._lowerCaseTagNames && (r = r.toLowerCase()), r
                        );
                    }),
                    (u.prototype.ondeclaration = function (t) {
                        if (this._cbs.onprocessinginstruction) {
                            var e = this._getInstructionName(t);
                            this._cbs.onprocessinginstruction("!" + e, "!" + t);
                        }
                    }),
                    (u.prototype.onprocessinginstruction = function (t) {
                        if (this._cbs.onprocessinginstruction) {
                            var e = this._getInstructionName(t);
                            this._cbs.onprocessinginstruction("?" + e, "?" + t);
                        }
                    }),
                    (u.prototype.oncomment = function (t) {
                        this._updatePosition(4),
                            this._cbs.oncomment && this._cbs.oncomment(t),
                            this._cbs.oncommentend && this._cbs.oncommentend();
                    }),
                    (u.prototype.oncdata = function (t) {
                        this._updatePosition(1),
                            this._options.xmlMode ||
                            this._options.recognizeCDATA
                                ? (this._cbs.oncdatastart &&
                                      this._cbs.oncdatastart(),
                                  this._cbs.ontext && this._cbs.ontext(t),
                                  this._cbs.oncdataend &&
                                      this._cbs.oncdataend())
                                : this.oncomment("[CDATA[" + t + "]]");
                    }),
                    (u.prototype.onerror = function (t) {
                        this._cbs.onerror && this._cbs.onerror(t);
                    }),
                    (u.prototype.onend = function () {
                        if (this._cbs.onclosetag)
                            for (
                                var t = this._stack.length;
                                t > 0;
                                this._cbs.onclosetag(this._stack[--t])
                            );
                        this._cbs.onend && this._cbs.onend();
                    }),
                    (u.prototype.reset = function () {
                        this._cbs.onreset && this._cbs.onreset(),
                            this._tokenizer.reset(),
                            (this._tagname = ""),
                            (this._attribname = ""),
                            (this._attribs = null),
                            (this._stack = []),
                            this._cbs.onparserinit &&
                                this._cbs.onparserinit(this);
                    }),
                    (u.prototype.parseComplete = function (t) {
                        this.reset(), this.end(t);
                    }),
                    (u.prototype.write = function (t) {
                        this._tokenizer.write(t);
                    }),
                    (u.prototype.end = function (t) {
                        this._tokenizer.end(t);
                    }),
                    (u.prototype.pause = function () {
                        this._tokenizer.pause();
                    }),
                    (u.prototype.resume = function () {
                        this._tokenizer.resume();
                    }),
                    (u.prototype.parseChunk = u.prototype.write),
                    (u.prototype.done = u.prototype.end),
                    (t.exports = u);
            },
            6321: (t, e, r) => {
                function n(t) {
                    this._cbs = t || {};
                }
                t.exports = n;
                var o = r(3719).EVENTS;
                Object.keys(o).forEach(function (t) {
                    if (0 === o[t])
                        (t = "on" + t),
                            (n.prototype[t] = function () {
                                this._cbs[t] && this._cbs[t]();
                            });
                    else if (1 === o[t])
                        (t = "on" + t),
                            (n.prototype[t] = function (e) {
                                this._cbs[t] && this._cbs[t](e);
                            });
                    else {
                        if (2 !== o[t])
                            throw Error("wrong number of arguments");
                        (t = "on" + t),
                            (n.prototype[t] = function (e, r) {
                                this._cbs[t] && this._cbs[t](e, r);
                            });
                    }
                });
            },
            9924: (t, e, r) => {
                t.exports = o;
                var n = r(3621);
                function o(t) {
                    n.call(this, new i(this), t);
                }
                function i(t) {
                    this.scope = t;
                }
                r(5717)(o, n), (o.prototype.readable = !0);
                var s = r(3719).EVENTS;
                Object.keys(s).forEach(function (t) {
                    if (0 === s[t])
                        i.prototype["on" + t] = function () {
                            this.scope.emit(t);
                        };
                    else if (1 === s[t])
                        i.prototype["on" + t] = function (e) {
                            this.scope.emit(t, e);
                        };
                    else {
                        if (2 !== s[t])
                            throw Error("wrong number of arguments!");
                        i.prototype["on" + t] = function (e, r) {
                            this.scope.emit(t, e, r);
                        };
                    }
                });
            },
            9889: (t, e, r) => {
                t.exports = mt;
                var n = r(26),
                    o = r(752),
                    i = r(5076),
                    s = r(1083),
                    a = 0,
                    c = a++,
                    l = a++,
                    u = a++,
                    p = a++,
                    h = a++,
                    f = a++,
                    d = a++,
                    g = a++,
                    m = a++,
                    b = a++,
                    y = a++,
                    v = a++,
                    w = a++,
                    _ = a++,
                    q = a++,
                    x = a++,
                    E = a++,
                    S = a++,
                    T = a++,
                    A = a++,
                    k = a++,
                    L = a++,
                    D = a++,
                    N = a++,
                    C = a++,
                    B = a++,
                    R = a++,
                    O = a++,
                    U = a++,
                    I = a++,
                    V = a++,
                    P = a++,
                    H = a++,
                    M = a++,
                    j = a++,
                    G = a++,
                    F = a++,
                    z = a++,
                    J = a++,
                    Y = a++,
                    Z = a++,
                    X = a++,
                    W = a++,
                    K = a++,
                    $ = a++,
                    Q = a++,
                    tt = a++,
                    et = a++,
                    rt = a++,
                    nt = a++,
                    ot = a++,
                    it = a++,
                    st = a++,
                    at = a++,
                    ct = a++,
                    lt = 0,
                    ut = lt++,
                    pt = lt++,
                    ht = lt++;
                function ft(t) {
                    return (
                        " " === t ||
                        "\n" === t ||
                        "\t" === t ||
                        "\f" === t ||
                        "\r" === t
                    );
                }
                function dt(t, e, r) {
                    var n = t.toLowerCase();
                    return t === n
                        ? function (t) {
                              t === n
                                  ? (this._state = e)
                                  : ((this._state = r), this._index--);
                          }
                        : function (o) {
                              o === n || o === t
                                  ? (this._state = e)
                                  : ((this._state = r), this._index--);
                          };
                }
                function gt(t, e) {
                    var r = t.toLowerCase();
                    return function (n) {
                        n === r || n === t
                            ? (this._state = e)
                            : ((this._state = u), this._index--);
                    };
                }
                function mt(t, e) {
                    (this._state = c),
                        (this._buffer = ""),
                        (this._sectionStart = 0),
                        (this._index = 0),
                        (this._bufferOffset = 0),
                        (this._baseState = c),
                        (this._special = ut),
                        (this._cbs = e),
                        (this._running = !0),
                        (this._ended = !1),
                        (this._xmlMode = !(!t || !t.xmlMode)),
                        (this._decodeEntities = !(!t || !t.decodeEntities));
                }
                (mt.prototype._stateText = function (t) {
                    "<" === t
                        ? (this._index > this._sectionStart &&
                              this._cbs.ontext(this._getSection()),
                          (this._state = l),
                          (this._sectionStart = this._index))
                        : this._decodeEntities &&
                          this._special === ut &&
                          "&" === t &&
                          (this._index > this._sectionStart &&
                              this._cbs.ontext(this._getSection()),
                          (this._baseState = c),
                          (this._state = ot),
                          (this._sectionStart = this._index));
                }),
                    (mt.prototype._stateBeforeTagName = function (t) {
                        "/" === t
                            ? (this._state = h)
                            : "<" === t
                            ? (this._cbs.ontext(this._getSection()),
                              (this._sectionStart = this._index))
                            : ">" === t || this._special !== ut || ft(t)
                            ? (this._state = c)
                            : "!" === t
                            ? ((this._state = q),
                              (this._sectionStart = this._index + 1))
                            : "?" === t
                            ? ((this._state = E),
                              (this._sectionStart = this._index + 1))
                            : ((this._state =
                                  this._xmlMode || ("s" !== t && "S" !== t)
                                      ? u
                                      : V),
                              (this._sectionStart = this._index));
                    }),
                    (mt.prototype._stateInTagName = function (t) {
                        ("/" === t || ">" === t || ft(t)) &&
                            (this._emitToken("onopentagname"),
                            (this._state = g),
                            this._index--);
                    }),
                    (mt.prototype._stateBeforeCloseingTagName = function (t) {
                        ft(t) ||
                            (">" === t
                                ? (this._state = c)
                                : this._special !== ut
                                ? "s" === t || "S" === t
                                    ? (this._state = P)
                                    : ((this._state = c), this._index--)
                                : ((this._state = f),
                                  (this._sectionStart = this._index)));
                    }),
                    (mt.prototype._stateInCloseingTagName = function (t) {
                        (">" === t || ft(t)) &&
                            (this._emitToken("onclosetag"),
                            (this._state = d),
                            this._index--);
                    }),
                    (mt.prototype._stateAfterCloseingTagName = function (t) {
                        ">" === t &&
                            ((this._state = c),
                            (this._sectionStart = this._index + 1));
                    }),
                    (mt.prototype._stateBeforeAttributeName = function (t) {
                        ">" === t
                            ? (this._cbs.onopentagend(),
                              (this._state = c),
                              (this._sectionStart = this._index + 1))
                            : "/" === t
                            ? (this._state = p)
                            : ft(t) ||
                              ((this._state = m),
                              (this._sectionStart = this._index));
                    }),
                    (mt.prototype._stateInSelfClosingTag = function (t) {
                        ">" === t
                            ? (this._cbs.onselfclosingtag(),
                              (this._state = c),
                              (this._sectionStart = this._index + 1))
                            : ft(t) || ((this._state = g), this._index--);
                    }),
                    (mt.prototype._stateInAttributeName = function (t) {
                        ("=" === t || "/" === t || ">" === t || ft(t)) &&
                            (this._cbs.onattribname(this._getSection()),
                            (this._sectionStart = -1),
                            (this._state = b),
                            this._index--);
                    }),
                    (mt.prototype._stateAfterAttributeName = function (t) {
                        "=" === t
                            ? (this._state = y)
                            : "/" === t || ">" === t
                            ? (this._cbs.onattribend(),
                              (this._state = g),
                              this._index--)
                            : ft(t) ||
                              (this._cbs.onattribend(),
                              (this._state = m),
                              (this._sectionStart = this._index));
                    }),
                    (mt.prototype._stateBeforeAttributeValue = function (t) {
                        '"' === t
                            ? ((this._state = v),
                              (this._sectionStart = this._index + 1))
                            : "'" === t
                            ? ((this._state = w),
                              (this._sectionStart = this._index + 1))
                            : ft(t) ||
                              ((this._state = _),
                              (this._sectionStart = this._index),
                              this._index--);
                    }),
                    (mt.prototype._stateInAttributeValueDoubleQuotes =
                        function (t) {
                            '"' === t
                                ? (this._emitToken("onattribdata"),
                                  this._cbs.onattribend(),
                                  (this._state = g))
                                : this._decodeEntities &&
                                  "&" === t &&
                                  (this._emitToken("onattribdata"),
                                  (this._baseState = this._state),
                                  (this._state = ot),
                                  (this._sectionStart = this._index));
                        }),
                    (mt.prototype._stateInAttributeValueSingleQuotes =
                        function (t) {
                            "'" === t
                                ? (this._emitToken("onattribdata"),
                                  this._cbs.onattribend(),
                                  (this._state = g))
                                : this._decodeEntities &&
                                  "&" === t &&
                                  (this._emitToken("onattribdata"),
                                  (this._baseState = this._state),
                                  (this._state = ot),
                                  (this._sectionStart = this._index));
                        }),
                    (mt.prototype._stateInAttributeValueNoQuotes = function (
                        t,
                    ) {
                        ft(t) || ">" === t
                            ? (this._emitToken("onattribdata"),
                              this._cbs.onattribend(),
                              (this._state = g),
                              this._index--)
                            : this._decodeEntities &&
                              "&" === t &&
                              (this._emitToken("onattribdata"),
                              (this._baseState = this._state),
                              (this._state = ot),
                              (this._sectionStart = this._index));
                    }),
                    (mt.prototype._stateBeforeDeclaration = function (t) {
                        this._state = "[" === t ? L : "-" === t ? S : x;
                    }),
                    (mt.prototype._stateInDeclaration = function (t) {
                        ">" === t &&
                            (this._cbs.ondeclaration(this._getSection()),
                            (this._state = c),
                            (this._sectionStart = this._index + 1));
                    }),
                    (mt.prototype._stateInProcessingInstruction = function (t) {
                        ">" === t &&
                            (this._cbs.onprocessinginstruction(
                                this._getSection(),
                            ),
                            (this._state = c),
                            (this._sectionStart = this._index + 1));
                    }),
                    (mt.prototype._stateBeforeComment = function (t) {
                        "-" === t
                            ? ((this._state = T),
                              (this._sectionStart = this._index + 1))
                            : (this._state = x);
                    }),
                    (mt.prototype._stateInComment = function (t) {
                        "-" === t && (this._state = A);
                    }),
                    (mt.prototype._stateAfterComment1 = function (t) {
                        this._state = "-" === t ? k : T;
                    }),
                    (mt.prototype._stateAfterComment2 = function (t) {
                        ">" === t
                            ? (this._cbs.oncomment(
                                  this._buffer.substring(
                                      this._sectionStart,
                                      this._index - 2,
                                  ),
                              ),
                              (this._state = c),
                              (this._sectionStart = this._index + 1))
                            : "-" !== t && (this._state = T);
                    }),
                    (mt.prototype._stateBeforeCdata1 = dt("C", D, x)),
                    (mt.prototype._stateBeforeCdata2 = dt("D", N, x)),
                    (mt.prototype._stateBeforeCdata3 = dt("A", C, x)),
                    (mt.prototype._stateBeforeCdata4 = dt("T", B, x)),
                    (mt.prototype._stateBeforeCdata5 = dt("A", R, x)),
                    (mt.prototype._stateBeforeCdata6 = function (t) {
                        "[" === t
                            ? ((this._state = O),
                              (this._sectionStart = this._index + 1))
                            : ((this._state = x), this._index--);
                    }),
                    (mt.prototype._stateInCdata = function (t) {
                        "]" === t && (this._state = U);
                    }),
                    (mt.prototype._stateAfterCdata1 = function (t) {
                        this._state = "]" === t ? I : O;
                    }),
                    (mt.prototype._stateAfterCdata2 = function (t) {
                        ">" === t
                            ? (this._cbs.oncdata(
                                  this._buffer.substring(
                                      this._sectionStart,
                                      this._index - 2,
                                  ),
                              ),
                              (this._state = c),
                              (this._sectionStart = this._index + 1))
                            : "]" !== t && (this._state = O);
                    }),
                    (mt.prototype._stateBeforeSpecial = function (t) {
                        "c" === t || "C" === t
                            ? (this._state = H)
                            : "t" === t || "T" === t
                            ? (this._state = W)
                            : ((this._state = u), this._index--);
                    }),
                    (mt.prototype._stateBeforeSpecialEnd = function (t) {
                        this._special !== pt || ("c" !== t && "C" !== t)
                            ? this._special !== ht || ("t" !== t && "T" !== t)
                                ? (this._state = c)
                                : (this._state = tt)
                            : (this._state = z);
                    }),
                    (mt.prototype._stateBeforeScript1 = gt("R", M)),
                    (mt.prototype._stateBeforeScript2 = gt("I", j)),
                    (mt.prototype._stateBeforeScript3 = gt("P", G)),
                    (mt.prototype._stateBeforeScript4 = gt("T", F)),
                    (mt.prototype._stateBeforeScript5 = function (t) {
                        ("/" === t || ">" === t || ft(t)) &&
                            (this._special = pt),
                            (this._state = u),
                            this._index--;
                    }),
                    (mt.prototype._stateAfterScript1 = dt("R", J, c)),
                    (mt.prototype._stateAfterScript2 = dt("I", Y, c)),
                    (mt.prototype._stateAfterScript3 = dt("P", Z, c)),
                    (mt.prototype._stateAfterScript4 = dt("T", X, c)),
                    (mt.prototype._stateAfterScript5 = function (t) {
                        ">" === t || ft(t)
                            ? ((this._special = ut),
                              (this._state = f),
                              (this._sectionStart = this._index - 6),
                              this._index--)
                            : (this._state = c);
                    }),
                    (mt.prototype._stateBeforeStyle1 = gt("Y", K)),
                    (mt.prototype._stateBeforeStyle2 = gt("L", $)),
                    (mt.prototype._stateBeforeStyle3 = gt("E", Q)),
                    (mt.prototype._stateBeforeStyle4 = function (t) {
                        ("/" === t || ">" === t || ft(t)) &&
                            (this._special = ht),
                            (this._state = u),
                            this._index--;
                    }),
                    (mt.prototype._stateAfterStyle1 = dt("Y", et, c)),
                    (mt.prototype._stateAfterStyle2 = dt("L", rt, c)),
                    (mt.prototype._stateAfterStyle3 = dt("E", nt, c)),
                    (mt.prototype._stateAfterStyle4 = function (t) {
                        ">" === t || ft(t)
                            ? ((this._special = ut),
                              (this._state = f),
                              (this._sectionStart = this._index - 5),
                              this._index--)
                            : (this._state = c);
                    }),
                    (mt.prototype._stateBeforeEntity = dt("#", it, st)),
                    (mt.prototype._stateBeforeNumericEntity = dt("X", ct, at)),
                    (mt.prototype._parseNamedEntityStrict = function () {
                        if (this._sectionStart + 1 < this._index) {
                            var t = this._buffer.substring(
                                    this._sectionStart + 1,
                                    this._index,
                                ),
                                e = this._xmlMode ? s : o;
                            e.hasOwnProperty(t) &&
                                (this._emitPartial(e[t]),
                                (this._sectionStart = this._index + 1));
                        }
                    }),
                    (mt.prototype._parseLegacyEntity = function () {
                        var t = this._sectionStart + 1,
                            e = this._index - t;
                        for (e > 6 && (e = 6); e >= 2; ) {
                            var r = this._buffer.substr(t, e);
                            if (i.hasOwnProperty(r))
                                return (
                                    this._emitPartial(i[r]),
                                    void (this._sectionStart += e + 1)
                                );
                            e--;
                        }
                    }),
                    (mt.prototype._stateInNamedEntity = function (t) {
                        ";" === t
                            ? (this._parseNamedEntityStrict(),
                              this._sectionStart + 1 < this._index &&
                                  !this._xmlMode &&
                                  this._parseLegacyEntity(),
                              (this._state = this._baseState))
                            : (t < "a" || t > "z") &&
                              (t < "A" || t > "Z") &&
                              (t < "0" || t > "9") &&
                              (this._xmlMode ||
                                  this._sectionStart + 1 === this._index ||
                                  (this._baseState !== c
                                      ? "=" !== t &&
                                        this._parseNamedEntityStrict()
                                      : this._parseLegacyEntity()),
                              (this._state = this._baseState),
                              this._index--);
                    }),
                    (mt.prototype._decodeNumericEntity = function (t, e) {
                        var r = this._sectionStart + t;
                        if (r !== this._index) {
                            var o = this._buffer.substring(r, this._index),
                                i = parseInt(o, e);
                            this._emitPartial(n(i)),
                                (this._sectionStart = this._index);
                        } else this._sectionStart--;
                        this._state = this._baseState;
                    }),
                    (mt.prototype._stateInNumericEntity = function (t) {
                        ";" === t
                            ? (this._decodeNumericEntity(2, 10),
                              this._sectionStart++)
                            : (t < "0" || t > "9") &&
                              (this._xmlMode
                                  ? (this._state = this._baseState)
                                  : this._decodeNumericEntity(2, 10),
                              this._index--);
                    }),
                    (mt.prototype._stateInHexEntity = function (t) {
                        ";" === t
                            ? (this._decodeNumericEntity(3, 16),
                              this._sectionStart++)
                            : (t < "a" || t > "f") &&
                              (t < "A" || t > "F") &&
                              (t < "0" || t > "9") &&
                              (this._xmlMode
                                  ? (this._state = this._baseState)
                                  : this._decodeNumericEntity(3, 16),
                              this._index--);
                    }),
                    (mt.prototype._cleanup = function () {
                        this._sectionStart < 0
                            ? ((this._buffer = ""),
                              (this._bufferOffset += this._index),
                              (this._index = 0))
                            : this._running &&
                              (this._state === c
                                  ? (this._sectionStart !== this._index &&
                                        this._cbs.ontext(
                                            this._buffer.substr(
                                                this._sectionStart,
                                            ),
                                        ),
                                    (this._buffer = ""),
                                    (this._bufferOffset += this._index),
                                    (this._index = 0))
                                  : this._sectionStart === this._index
                                  ? ((this._buffer = ""),
                                    (this._bufferOffset += this._index),
                                    (this._index = 0))
                                  : ((this._buffer = this._buffer.substr(
                                        this._sectionStart,
                                    )),
                                    (this._index -= this._sectionStart),
                                    (this._bufferOffset += this._sectionStart)),
                              (this._sectionStart = 0));
                    }),
                    (mt.prototype.write = function (t) {
                        this._ended &&
                            this._cbs.onerror(Error(".write() after done!")),
                            (this._buffer += t),
                            this._parse();
                    }),
                    (mt.prototype._parse = function () {
                        for (
                            ;
                            this._index < this._buffer.length && this._running;

                        ) {
                            var t = this._buffer.charAt(this._index);
                            this._state === c
                                ? this._stateText(t)
                                : this._state === l
                                ? this._stateBeforeTagName(t)
                                : this._state === u
                                ? this._stateInTagName(t)
                                : this._state === h
                                ? this._stateBeforeCloseingTagName(t)
                                : this._state === f
                                ? this._stateInCloseingTagName(t)
                                : this._state === d
                                ? this._stateAfterCloseingTagName(t)
                                : this._state === p
                                ? this._stateInSelfClosingTag(t)
                                : this._state === g
                                ? this._stateBeforeAttributeName(t)
                                : this._state === m
                                ? this._stateInAttributeName(t)
                                : this._state === b
                                ? this._stateAfterAttributeName(t)
                                : this._state === y
                                ? this._stateBeforeAttributeValue(t)
                                : this._state === v
                                ? this._stateInAttributeValueDoubleQuotes(t)
                                : this._state === w
                                ? this._stateInAttributeValueSingleQuotes(t)
                                : this._state === _
                                ? this._stateInAttributeValueNoQuotes(t)
                                : this._state === q
                                ? this._stateBeforeDeclaration(t)
                                : this._state === x
                                ? this._stateInDeclaration(t)
                                : this._state === E
                                ? this._stateInProcessingInstruction(t)
                                : this._state === S
                                ? this._stateBeforeComment(t)
                                : this._state === T
                                ? this._stateInComment(t)
                                : this._state === A
                                ? this._stateAfterComment1(t)
                                : this._state === k
                                ? this._stateAfterComment2(t)
                                : this._state === L
                                ? this._stateBeforeCdata1(t)
                                : this._state === D
                                ? this._stateBeforeCdata2(t)
                                : this._state === N
                                ? this._stateBeforeCdata3(t)
                                : this._state === C
                                ? this._stateBeforeCdata4(t)
                                : this._state === B
                                ? this._stateBeforeCdata5(t)
                                : this._state === R
                                ? this._stateBeforeCdata6(t)
                                : this._state === O
                                ? this._stateInCdata(t)
                                : this._state === U
                                ? this._stateAfterCdata1(t)
                                : this._state === I
                                ? this._stateAfterCdata2(t)
                                : this._state === V
                                ? this._stateBeforeSpecial(t)
                                : this._state === P
                                ? this._stateBeforeSpecialEnd(t)
                                : this._state === H
                                ? this._stateBeforeScript1(t)
                                : this._state === M
                                ? this._stateBeforeScript2(t)
                                : this._state === j
                                ? this._stateBeforeScript3(t)
                                : this._state === G
                                ? this._stateBeforeScript4(t)
                                : this._state === F
                                ? this._stateBeforeScript5(t)
                                : this._state === z
                                ? this._stateAfterScript1(t)
                                : this._state === J
                                ? this._stateAfterScript2(t)
                                : this._state === Y
                                ? this._stateAfterScript3(t)
                                : this._state === Z
                                ? this._stateAfterScript4(t)
                                : this._state === X
                                ? this._stateAfterScript5(t)
                                : this._state === W
                                ? this._stateBeforeStyle1(t)
                                : this._state === K
                                ? this._stateBeforeStyle2(t)
                                : this._state === $
                                ? this._stateBeforeStyle3(t)
                                : this._state === Q
                                ? this._stateBeforeStyle4(t)
                                : this._state === tt
                                ? this._stateAfterStyle1(t)
                                : this._state === et
                                ? this._stateAfterStyle2(t)
                                : this._state === rt
                                ? this._stateAfterStyle3(t)
                                : this._state === nt
                                ? this._stateAfterStyle4(t)
                                : this._state === ot
                                ? this._stateBeforeEntity(t)
                                : this._state === it
                                ? this._stateBeforeNumericEntity(t)
                                : this._state === st
                                ? this._stateInNamedEntity(t)
                                : this._state === at
                                ? this._stateInNumericEntity(t)
                                : this._state === ct
                                ? this._stateInHexEntity(t)
                                : this._cbs.onerror(
                                      Error("unknown _state"),
                                      this._state,
                                  ),
                                this._index++;
                        }
                        this._cleanup();
                    }),
                    (mt.prototype.pause = function () {
                        this._running = !1;
                    }),
                    (mt.prototype.resume = function () {
                        (this._running = !0),
                            this._index < this._buffer.length && this._parse(),
                            this._ended && this._finish();
                    }),
                    (mt.prototype.end = function (t) {
                        this._ended &&
                            this._cbs.onerror(Error(".end() after done!")),
                            t && this.write(t),
                            (this._ended = !0),
                            this._running && this._finish();
                    }),
                    (mt.prototype._finish = function () {
                        this._sectionStart < this._index &&
                            this._handleTrailingData(),
                            this._cbs.onend();
                    }),
                    (mt.prototype._handleTrailingData = function () {
                        var t = this._buffer.substr(this._sectionStart);
                        this._state === O ||
                        this._state === U ||
                        this._state === I
                            ? this._cbs.oncdata(t)
                            : this._state === T ||
                              this._state === A ||
                              this._state === k
                            ? this._cbs.oncomment(t)
                            : this._state !== st || this._xmlMode
                            ? this._state !== at || this._xmlMode
                                ? this._state !== ct || this._xmlMode
                                    ? this._state !== u &&
                                      this._state !== g &&
                                      this._state !== y &&
                                      this._state !== b &&
                                      this._state !== m &&
                                      this._state !== w &&
                                      this._state !== v &&
                                      this._state !== _ &&
                                      this._state !== f &&
                                      this._cbs.ontext(t)
                                    : (this._decodeNumericEntity(3, 16),
                                      this._sectionStart < this._index &&
                                          ((this._state = this._baseState),
                                          this._handleTrailingData()))
                                : (this._decodeNumericEntity(2, 10),
                                  this._sectionStart < this._index &&
                                      ((this._state = this._baseState),
                                      this._handleTrailingData()))
                            : (this._parseLegacyEntity(),
                              this._sectionStart < this._index &&
                                  ((this._state = this._baseState),
                                  this._handleTrailingData()));
                    }),
                    (mt.prototype.reset = function () {
                        mt.call(
                            this,
                            {
                                xmlMode: this._xmlMode,
                                decodeEntities: this._decodeEntities,
                            },
                            this._cbs,
                        );
                    }),
                    (mt.prototype.getAbsoluteIndex = function () {
                        return this._bufferOffset + this._index;
                    }),
                    (mt.prototype._getSection = function () {
                        return this._buffer.substring(
                            this._sectionStart,
                            this._index,
                        );
                    }),
                    (mt.prototype._emitToken = function (t) {
                        this._cbs[t](this._getSection()),
                            (this._sectionStart = -1);
                    }),
                    (mt.prototype._emitPartial = function (t) {
                        this._baseState !== c
                            ? this._cbs.onattribdata(t)
                            : this._cbs.ontext(t);
                    });
            },
            3621: (t, e, r) => {
                t.exports = a;
                var n = r(763),
                    o = r(247).Writable,
                    i = r(2553).s,
                    s = r(8764).Buffer;
                function a(t, e) {
                    var r = (this._parser = new n(t, e)),
                        s = (this._decoder = new i());
                    o.call(this, { decodeStrings: !1 }),
                        this.once("finish", function () {
                            r.end(s.end());
                        });
                }
                r(5717)(a, o),
                    (a.prototype._write = function (t, e, r) {
                        t instanceof s && (t = this._decoder.write(t)),
                            this._parser.write(t),
                            r();
                    });
            },
            3719: (t, e, r) => {
                var n = r(763),
                    o = r(8753);
                function i(e, r) {
                    return delete t.exports[e], (t.exports[e] = r), r;
                }
                t.exports = {
                    Parser: n,
                    Tokenizer: r(9889),
                    ElementType: r(4431),
                    DomHandler: o,
                    get FeedHandler() {
                        return i("FeedHandler", r(3870));
                    },
                    get Stream() {
                        return i("Stream", r(9924));
                    },
                    get WritableStream() {
                        return i("WritableStream", r(3621));
                    },
                    get ProxyHandler() {
                        return i("ProxyHandler", r(6321));
                    },
                    get DomUtils() {
                        return i("DomUtils", r(2417));
                    },
                    get CollectingHandler() {
                        return i("CollectingHandler", r(5449));
                    },
                    DefaultHandler: o,
                    get RssHandler() {
                        return i("RssHandler", this.FeedHandler);
                    },
                    parseDOM: function (t, e) {
                        var r = new o(e);
                        return new n(r, e).end(t), r.dom;
                    },
                    parseFeed: function (e, r) {
                        var o = new t.exports.FeedHandler(r);
                        return new n(o, r).end(e), o.dom;
                    },
                    createDomStream: function (t, e, r) {
                        var i = new o(t, e, r);
                        return new n(i, e);
                    },
                    EVENTS: {
                        attribute: 2,
                        cdatastart: 0,
                        cdataend: 0,
                        text: 1,
                        processinginstruction: 2,
                        comment: 1,
                        commentend: 0,
                        closetag: 1,
                        opentag: 2,
                        opentagname: 1,
                        error: 1,
                        end: 0,
                    },
                };
            },
            645: (t, e) => {
                (e.read = function (t, e, r, n, o) {
                    var i,
                        s,
                        a = 8 * o - n - 1,
                        c = (1 << a) - 1,
                        l = c >> 1,
                        u = -7,
                        p = r ? o - 1 : 0,
                        h = r ? -1 : 1,
                        f = t[e + p];
                    for (
                        p += h, i = f & ((1 << -u) - 1), f >>= -u, u += a;
                        u > 0;
                        i = 256 * i + t[e + p], p += h, u -= 8
                    );
                    for (
                        s = i & ((1 << -u) - 1), i >>= -u, u += n;
                        u > 0;
                        s = 256 * s + t[e + p], p += h, u -= 8
                    );
                    if (0 === i) i = 1 - l;
                    else {
                        if (i === c) return s ? NaN : (1 / 0) * (f ? -1 : 1);
                        (s += Math.pow(2, n)), (i -= l);
                    }
                    return (f ? -1 : 1) * s * Math.pow(2, i - n);
                }),
                    (e.write = function (t, e, r, n, o, i) {
                        var s,
                            a,
                            c,
                            l = 8 * i - o - 1,
                            u = (1 << l) - 1,
                            p = u >> 1,
                            h =
                                23 === o
                                    ? Math.pow(2, -24) - Math.pow(2, -77)
                                    : 0,
                            f = n ? 0 : i - 1,
                            d = n ? 1 : -1,
                            g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                        for (
                            e = Math.abs(e),
                                isNaN(e) || e === 1 / 0
                                    ? ((a = isNaN(e) ? 1 : 0), (s = u))
                                    : ((s = Math.floor(Math.log(e) / Math.LN2)),
                                      e * (c = Math.pow(2, -s)) < 1 &&
                                          (s--, (c *= 2)),
                                      (e +=
                                          s + p >= 1
                                              ? h / c
                                              : h * Math.pow(2, 1 - p)) *
                                          c >=
                                          2 && (s++, (c /= 2)),
                                      s + p >= u
                                          ? ((a = 0), (s = u))
                                          : s + p >= 1
                                          ? ((a = (e * c - 1) * Math.pow(2, o)),
                                            (s += p))
                                          : ((a =
                                                e *
                                                Math.pow(2, p - 1) *
                                                Math.pow(2, o)),
                                            (s = 0)));
                            o >= 8;
                            t[r + f] = 255 & a, f += d, a /= 256, o -= 8
                        );
                        for (
                            s = (s << o) | a, l += o;
                            l > 0;
                            t[r + f] = 255 & s, f += d, s /= 256, l -= 8
                        );
                        t[r + f - d] |= 128 * g;
                    });
            },
            5717: (t) => {
                "function" == typeof Object.create
                    ? (t.exports = function (t, e) {
                          e &&
                              ((t.super_ = e),
                              (t.prototype = Object.create(e.prototype, {
                                  constructor: {
                                      value: t,
                                      enumerable: !1,
                                      writable: !0,
                                      configurable: !0,
                                  },
                              })));
                      })
                    : (t.exports = function (t, e) {
                          if (e) {
                              t.super_ = e;
                              var r = function () {};
                              (r.prototype = e.prototype),
                                  (t.prototype = new r()),
                                  (t.prototype.constructor = t);
                          }
                      });
            },
            6240: (t) => {
                "use strict";
                t.exports = function (t) {
                    return "object" == typeof t && null !== t;
                };
            },
            3689: (t, e, r) => {
                "use strict";
                r.r(e),
                    r.d(e, {
                        ucs2decode: () => f,
                        ucs2encode: () => d,
                        decode: () => b,
                        encode: () => y,
                        toASCII: () => w,
                        toUnicode: () => v,
                        default: () => _,
                    });
                const n = 2147483647,
                    o = 36,
                    i = /^xn--/,
                    s = /[^\0-\x7E]/,
                    a = /[\x2E\u3002\uFF0E\uFF61]/g,
                    c = {
                        overflow:
                            "Overflow: input needs wider integers to process",
                        "not-basic":
                            "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input",
                    },
                    l = Math.floor,
                    u = String.fromCharCode;
                function p(t) {
                    throw new RangeError(c[t]);
                }
                function h(t, e) {
                    const r = t.split("@");
                    let n = "";
                    r.length > 1 && ((n = r[0] + "@"), (t = r[1]));
                    const o = (function (t, e) {
                        const r = [];
                        let n = t.length;
                        for (; n--; ) r[n] = e(t[n]);
                        return r;
                    })((t = t.replace(a, ".")).split("."), e).join(".");
                    return n + o;
                }
                function f(t) {
                    const e = [];
                    let r = 0;
                    const n = t.length;
                    for (; r < n; ) {
                        const o = t.charCodeAt(r++);
                        if (o >= 55296 && o <= 56319 && r < n) {
                            const n = t.charCodeAt(r++);
                            56320 == (64512 & n)
                                ? e.push(
                                      ((1023 & o) << 10) + (1023 & n) + 65536,
                                  )
                                : (e.push(o), r--);
                        } else e.push(o);
                    }
                    return e;
                }
                const d = (t) => String.fromCodePoint(...t),
                    g = function (t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
                    },
                    m = function (t, e, r) {
                        let n = 0;
                        for (
                            t = r ? l(t / 700) : t >> 1, t += l(t / e);
                            t > 455;
                            n += o
                        )
                            t = l(t / 35);
                        return l(n + (36 * t) / (t + 38));
                    },
                    b = function (t) {
                        const e = [],
                            r = t.length;
                        let i = 0,
                            s = 128,
                            a = 72,
                            c = t.lastIndexOf("-");
                        c < 0 && (c = 0);
                        for (let r = 0; r < c; ++r)
                            t.charCodeAt(r) >= 128 && p("not-basic"),
                                e.push(t.charCodeAt(r));
                        for (let h = c > 0 ? c + 1 : 0; h < r; ) {
                            let c = i;
                            for (let e = 1, s = o; ; s += o) {
                                h >= r && p("invalid-input");
                                const c =
                                    (u = t.charCodeAt(h++)) - 48 < 10
                                        ? u - 22
                                        : u - 65 < 26
                                        ? u - 65
                                        : u - 97 < 26
                                        ? u - 97
                                        : o;
                                (c >= o || c > l((n - i) / e)) && p("overflow"),
                                    (i += c * e);
                                const f = s <= a ? 1 : s >= a + 26 ? 26 : s - a;
                                if (c < f) break;
                                const d = o - f;
                                e > l(n / d) && p("overflow"), (e *= d);
                            }
                            const f = e.length + 1;
                            (a = m(i - c, f, 0 == c)),
                                l(i / f) > n - s && p("overflow"),
                                (s += l(i / f)),
                                (i %= f),
                                e.splice(i++, 0, s);
                        }
                        var u;
                        return String.fromCodePoint(...e);
                    },
                    y = function (t) {
                        const e = [];
                        let r = (t = f(t)).length,
                            i = 128,
                            s = 0,
                            a = 72;
                        for (const r of t) r < 128 && e.push(u(r));
                        let c = e.length,
                            h = c;
                        for (c && e.push("-"); h < r; ) {
                            let r = n;
                            for (const e of t) e >= i && e < r && (r = e);
                            const f = h + 1;
                            r - i > l((n - s) / f) && p("overflow"),
                                (s += (r - i) * f),
                                (i = r);
                            for (const r of t)
                                if (
                                    (r < i && ++s > n && p("overflow"), r == i)
                                ) {
                                    let t = s;
                                    for (let r = o; ; r += o) {
                                        const n =
                                            r <= a
                                                ? 1
                                                : r >= a + 26
                                                ? 26
                                                : r - a;
                                        if (t < n) break;
                                        const i = t - n,
                                            s = o - n;
                                        e.push(u(g(n + (i % s), 0))),
                                            (t = l(i / s));
                                    }
                                    e.push(u(g(t, 0))),
                                        (a = m(s, f, h == c)),
                                        (s = 0),
                                        ++h;
                                }
                            ++s, ++i;
                        }
                        return e.join("");
                    },
                    v = function (t) {
                        return h(t, function (t) {
                            return i.test(t) ? b(t.slice(4).toLowerCase()) : t;
                        });
                    },
                    w = function (t) {
                        return h(t, function (t) {
                            return s.test(t) ? "xn--" + y(t) : t;
                        });
                    },
                    _ = {
                        version: "2.1.0",
                        ucs2: { decode: f, encode: d },
                        decode: b,
                        encode: y,
                        toASCII: w,
                        toUnicode: v,
                    };
            },
            9509: (t, e, r) => {
                var n = r(8764),
                    o = n.Buffer;
                function i(t, e) {
                    for (var r in t) e[r] = t[r];
                }
                function s(t, e, r) {
                    return o(t, e, r);
                }
                o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow
                    ? (t.exports = n)
                    : (i(n, e), (e.Buffer = s)),
                    (s.prototype = Object.create(o.prototype)),
                    i(o, s),
                    (s.from = function (t, e, r) {
                        if ("number" == typeof t)
                            throw new TypeError(
                                "Argument must not be a number",
                            );
                        return o(t, e, r);
                    }),
                    (s.alloc = function (t, e, r) {
                        if ("number" != typeof t)
                            throw new TypeError("Argument must be a number");
                        var n = o(t);
                        return (
                            void 0 !== e
                                ? "string" == typeof r
                                    ? n.fill(e, r)
                                    : n.fill(e)
                                : n.fill(0),
                            n
                        );
                    }),
                    (s.allocUnsafe = function (t) {
                        if ("number" != typeof t)
                            throw new TypeError("Argument must be a number");
                        return o(t);
                    }),
                    (s.allocUnsafeSlow = function (t) {
                        if ("number" != typeof t)
                            throw new TypeError("Argument must be a number");
                        return n.SlowBuffer(t);
                    });
            },
            2553: (t, e, r) => {
                "use strict";
                var n = r(9509).Buffer,
                    o =
                        n.isEncoding ||
                        function (t) {
                            switch ((t = "" + t) && t.toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                case "raw":
                                    return !0;
                                default:
                                    return !1;
                            }
                        };
                function i(t) {
                    var e;
                    switch (
                        ((this.encoding = (function (t) {
                            var e = (function (t) {
                                if (!t) return "utf8";
                                for (var e; ; )
                                    switch (t) {
                                        case "utf8":
                                        case "utf-8":
                                            return "utf8";
                                        case "ucs2":
                                        case "ucs-2":
                                        case "utf16le":
                                        case "utf-16le":
                                            return "utf16le";
                                        case "latin1":
                                        case "binary":
                                            return "latin1";
                                        case "base64":
                                        case "ascii":
                                        case "hex":
                                            return t;
                                        default:
                                            if (e) return;
                                            (t = ("" + t).toLowerCase()),
                                                (e = !0);
                                    }
                            })(t);
                            if (
                                "string" != typeof e &&
                                (n.isEncoding === o || !o(t))
                            )
                                throw new Error("Unknown encoding: " + t);
                            return e || t;
                        })(t)),
                        this.encoding)
                    ) {
                        case "utf16le":
                            (this.text = c), (this.end = l), (e = 4);
                            break;
                        case "utf8":
                            (this.fillLast = a), (e = 4);
                            break;
                        case "base64":
                            (this.text = u), (this.end = p), (e = 3);
                            break;
                        default:
                            return (this.write = h), void (this.end = f);
                    }
                    (this.lastNeed = 0),
                        (this.lastTotal = 0),
                        (this.lastChar = n.allocUnsafe(e));
                }
                function s(t) {
                    return t <= 127
                        ? 0
                        : t >> 5 == 6
                        ? 2
                        : t >> 4 == 14
                        ? 3
                        : t >> 3 == 30
                        ? 4
                        : t >> 6 == 2
                        ? -1
                        : -2;
                }
                function a(t) {
                    var e = this.lastTotal - this.lastNeed,
                        r = (function (t, e, r) {
                            if (128 != (192 & e[0]))
                                return (t.lastNeed = 0), "�";
                            if (t.lastNeed > 1 && e.length > 1) {
                                if (128 != (192 & e[1]))
                                    return (t.lastNeed = 1), "�";
                                if (
                                    t.lastNeed > 2 &&
                                    e.length > 2 &&
                                    128 != (192 & e[2])
                                )
                                    return (t.lastNeed = 2), "�";
                            }
                        })(this, t);
                    return void 0 !== r
                        ? r
                        : this.lastNeed <= t.length
                        ? (t.copy(this.lastChar, e, 0, this.lastNeed),
                          this.lastChar.toString(
                              this.encoding,
                              0,
                              this.lastTotal,
                          ))
                        : (t.copy(this.lastChar, e, 0, t.length),
                          void (this.lastNeed -= t.length));
                }
                function c(t, e) {
                    if ((t.length - e) % 2 == 0) {
                        var r = t.toString("utf16le", e);
                        if (r) {
                            var n = r.charCodeAt(r.length - 1);
                            if (n >= 55296 && n <= 56319)
                                return (
                                    (this.lastNeed = 2),
                                    (this.lastTotal = 4),
                                    (this.lastChar[0] = t[t.length - 2]),
                                    (this.lastChar[1] = t[t.length - 1]),
                                    r.slice(0, -1)
                                );
                        }
                        return r;
                    }
                    return (
                        (this.lastNeed = 1),
                        (this.lastTotal = 2),
                        (this.lastChar[0] = t[t.length - 1]),
                        t.toString("utf16le", e, t.length - 1)
                    );
                }
                function l(t) {
                    var e = t && t.length ? this.write(t) : "";
                    if (this.lastNeed) {
                        var r = this.lastTotal - this.lastNeed;
                        return e + this.lastChar.toString("utf16le", 0, r);
                    }
                    return e;
                }
                function u(t, e) {
                    var r = (t.length - e) % 3;
                    return 0 === r
                        ? t.toString("base64", e)
                        : ((this.lastNeed = 3 - r),
                          (this.lastTotal = 3),
                          1 === r
                              ? (this.lastChar[0] = t[t.length - 1])
                              : ((this.lastChar[0] = t[t.length - 2]),
                                (this.lastChar[1] = t[t.length - 1])),
                          t.toString("base64", e, t.length - r));
                }
                function p(t) {
                    var e = t && t.length ? this.write(t) : "";
                    return this.lastNeed
                        ? e +
                              this.lastChar.toString(
                                  "base64",
                                  0,
                                  3 - this.lastNeed,
                              )
                        : e;
                }
                function h(t) {
                    return t.toString(this.encoding);
                }
                function f(t) {
                    return t && t.length ? this.write(t) : "";
                }
                (e.s = i),
                    (i.prototype.write = function (t) {
                        if (0 === t.length) return "";
                        var e, r;
                        if (this.lastNeed) {
                            if (void 0 === (e = this.fillLast(t))) return "";
                            (r = this.lastNeed), (this.lastNeed = 0);
                        } else r = 0;
                        return r < t.length
                            ? e
                                ? e + this.text(t, r)
                                : this.text(t, r)
                            : e || "";
                    }),
                    (i.prototype.end = function (t) {
                        var e = t && t.length ? this.write(t) : "";
                        return this.lastNeed ? e + "�" : e;
                    }),
                    (i.prototype.text = function (t, e) {
                        var r = (function (t, e, r) {
                            var n = e.length - 1;
                            if (n < r) return 0;
                            var o = s(e[n]);
                            return o >= 0
                                ? (o > 0 && (t.lastNeed = o - 1), o)
                                : --n < r || -2 === o
                                ? 0
                                : (o = s(e[n])) >= 0
                                ? (o > 0 && (t.lastNeed = o - 2), o)
                                : --n < r || -2 === o
                                ? 0
                                : (o = s(e[n])) >= 0
                                ? (o > 0 &&
                                      (2 === o
                                          ? (o = 0)
                                          : (t.lastNeed = o - 3)),
                                  o)
                                : 0;
                        })(this, t, e);
                        if (!this.lastNeed) return t.toString("utf8", e);
                        this.lastTotal = r;
                        var n = t.length - (r - this.lastNeed);
                        return (
                            t.copy(this.lastChar, 0, n),
                            t.toString("utf8", e, n)
                        );
                    }),
                    (i.prototype.fillLast = function (t) {
                        if (this.lastNeed <= t.length)
                            return (
                                t.copy(
                                    this.lastChar,
                                    this.lastTotal - this.lastNeed,
                                    0,
                                    this.lastNeed,
                                ),
                                this.lastChar.toString(
                                    this.encoding,
                                    0,
                                    this.lastTotal,
                                )
                            );
                        t.copy(
                            this.lastChar,
                            this.lastTotal - this.lastNeed,
                            0,
                            t.length,
                        ),
                            (this.lastNeed -= t.length);
                    });
            },
            3188: function (t, e) {
                "use strict";
                var r =
                        (this && this.__assign) ||
                        function () {
                            return (r =
                                Object.assign ||
                                function (t) {
                                    for (
                                        var e, r = 1, n = arguments.length;
                                        r < n;
                                        r++
                                    )
                                        for (var o in (e = arguments[r]))
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                o,
                                            ) && (t[o] = e[o]);
                                    return t;
                                }).apply(this, arguments);
                        },
                    n =
                        (this && this.__spreadArray) ||
                        function (t, e) {
                            for (
                                var r = 0, n = e.length, o = t.length;
                                r < n;
                                r++, o++
                            )
                                t[o] = e[r];
                            return t;
                        };
                (e.__esModule = !0), (e.Image = void 0);
                var o = (function () {
                    function t(t, e) {
                        (this.imageId =
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
                            (this.position = n([], t)),
                            (this.props = r({}, e)),
                            (this.imageName = this.constructor.name);
                    }
                    return (
                        (t.prototype.mount = function () {}),
                        (t.prototype.style = function (t) {
                            this.css = t;
                        }),
                        (t.prototype.compile = function (t) {
                            var e = (
                                '\n        <div \n            id="' +
                                this.imageId +
                                '"\n            style="position: absolute;\n                flex-flow: column;\n                top: ' +
                                this.position[0] +
                                "%; \n                left: " +
                                this.position[1] +
                                "%; \n                width: " +
                                this.position[2] +
                                "%; \n                height: " +
                                this.position[3] +
                                "%;\n                " +
                                ("" === this.debug
                                    ? ""
                                    : "background-color: " + this.debug + ";") +
                                '"\n        >\n            ' +
                                t +
                                "\n        </div>\n        <style>\n            div#" +
                                this.imageId +
                                " > " +
                                this.css +
                                "\n        </style>\n        "
                            )
                                .replace(/\s\s+/g, " ")
                                .replace(/\n/g, "")
                                .replace(/ </g, "<")
                                .replace(/< /g, "<")
                                .replace(/> /g, ">")
                                .replace(/ >/g, ">");
                            return (this.html = e), e;
                        }),
                        (t.prototype.pass = function (t) {
                            var e =
                                    "r" +
                                    ("" + (Date.now() + Math.random())).replace(
                                        ".",
                                        "",
                                    ),
                                r = {
                                    imageId: this.imageId,
                                    imageName: this.imageName,
                                    callbackId: e,
                                    callback: t,
                                };
                            return (
                                this.imageId in this.page.callbacks
                                    ? this.page.callbacks[this.imageId].push(r)
                                    : (this.page.callbacks[this.imageId] = [r]),
                                e + " data-" + e + '="' + e + '"'
                            );
                        }),
                        (t.prototype.image = function (t) {
                            var e = new Error().stack.split("\n")[2],
                                r =
                                    "" +
                                    (e.split(":").slice(-2)[0] +
                                        e
                                            .split(":")
                                            .slice(-1)[0]
                                            .replace(")", ""));
                            return r in this.children
                                ? (this.children[r].mount(),
                                  this.children[r].html)
                                : ((t.page = this.page),
                                  (this.children[r] = t),
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
                e.Image = o;
            },
            3282: function (t, e, r) {
                "use strict";
                var n,
                    o =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var r in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            r,
                                        ) && (t[r] = e[r]);
                                })(t, e);
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Class extends value " +
                                        String(e) +
                                        " is not a constructor or null",
                                );
                            function r() {
                                this.constructor = t;
                            }
                            n(t, e),
                                (t.prototype =
                                    null === e
                                        ? Object.create(e)
                                        : ((r.prototype = e.prototype),
                                          new r()));
                        }),
                    i =
                        (this && this.__assign) ||
                        function () {
                            return (i =
                                Object.assign ||
                                function (t) {
                                    for (
                                        var e, r = 1, n = arguments.length;
                                        r < n;
                                        r++
                                    )
                                        for (var o in (e = arguments[r]))
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                o,
                                            ) && (t[o] = e[o]);
                                    return t;
                                }).apply(this, arguments);
                        };
                (e.__esModule = !0), (e.Counter = e.Container = void 0);
                var s = r(3188),
                    a = (function (t) {
                        function e(e, r) {
                            return t.call(this, e, r) || this;
                        }
                        return (
                            o(e, t),
                            (e.prototype.mount = function () {
                                var t = this.image(
                                    new c([50, 0, 75, 50], {
                                        title: "Counter 2",
                                    }).debugOn("#00ff00"),
                                );
                                this.style(
                                    ".test {\n            color: white;\n        }",
                                ),
                                    this.compile(
                                        '\n            <div class="test>\n                ' +
                                            this.image(
                                                new c([0, 0, 50, 50], {
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
                    })(s.Image);
                e.Container = a;
                var c = (function (t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        return (n.state = i(i({}, r), { count: 0 })), n;
                    }
                    return (
                        o(e, t),
                        (e.prototype.mount = function () {
                            var t = this;
                            this.compile(
                                "\n            <div>\n                " +
                                    this.getState("title") +
                                    "\n            </div>\n            <div>\n                " +
                                    this.getState("count") +
                                    "\n            </div>\n            <button onClick=" +
                                    this.pass(function () {
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
                })(s.Image);
                e.Counter = c;
            },
            9985: (t, e, r) => {
                "use strict";
                (e.__esModule = !0), (e.Page = void 0);
                var n = r(7921),
                    o = r(9720),
                    i = r(4935),
                    s = r(4282),
                    a = r(4268),
                    c = r(5145)({ VNode: s, VText: a }),
                    l = (function () {
                        function t(t) {
                            (this.callbacks = {}), (this.name = t);
                        }
                        return (
                            (t.prototype.addRootImage = function (t) {
                                (this.rootImage = t),
                                    (this.rootImage.page = this),
                                    this.rootImage.mount(),
                                    (this.currentTree = this.convertHTMLWithKey(
                                        this.rootImage.html,
                                    )),
                                    (this.currentNode = i(this.currentTree[0])),
                                    document.body.appendChild(this.currentNode),
                                    this.injectCallbacks();
                            }),
                            (t.prototype.update = function () {
                                this.rootImage.mount(), this.render();
                            }),
                            (t.prototype.render = function () {
                                var t = this.convertHTMLWithKey(
                                        this.rootImage.html,
                                    ),
                                    e = n(this.currentTree[0], t[0]);
                                (this.currentNode = o(this.currentNode, e)),
                                    (this.currentTree = t),
                                    this.injectCallbacks();
                            }),
                            (t.prototype.convertHTMLWithKey = function (t) {
                                return c(
                                    {
                                        getVNodeKey: function (t) {
                                            return t.id;
                                        },
                                    },
                                    t,
                                );
                            }),
                            (t.prototype.injectCallbacks = function () {
                                Object.values(this.callbacks).forEach(function (
                                    t,
                                ) {
                                    t.forEach(function (t) {
                                        var e = document.querySelector(
                                            "[data-" + t.callbackId + "]",
                                        );
                                        if (e)
                                            for (
                                                var r = 0;
                                                r < e.attributes.length;
                                                r++
                                            ) {
                                                var n =
                                                    e.attributes[r].nodeName;
                                                e.attributes[r].nodeValue ==
                                                    t.callbackId &&
                                                    (e[n] = t.callback);
                                            }
                                        else
                                            console.log(
                                                "WARN: Unmounted component exists: " +
                                                    t.imageName +
                                                    " - " +
                                                    t.imageId,
                                            );
                                    });
                                }),
                                    (this.callbacks = {});
                            }),
                            t
                        );
                    })();
                e.Page = l;
            },
            4935: (t, e, r) => {
                var n = r(3513);
                t.exports = n;
            },
            7921: (t, e, r) => {
                var n = r(6741);
                t.exports = n;
            },
            9720: (t, e, r) => {
                var n = r(6943);
                t.exports = n;
            },
            6672: (t, e, r) => {
                var n = r(6240),
                    o = r(7265);
                function i(t, e, r, n) {
                    if (n) {
                        var i = n[e];
                        if (o(i)) i.unhook && i.unhook(t, e, r);
                        else if ("attributes" === e)
                            for (var s in i) t.removeAttribute(s);
                        else if ("style" === e)
                            for (var a in i) t.style[a] = "";
                        else t[e] = "string" == typeof i ? "" : null;
                    }
                }
                function s(t, e, r, o, i) {
                    var s = r ? r[o] : void 0;
                    if ("attributes" !== o)
                        if (s && n(s) && a(s) !== a(i)) t[o] = i;
                        else {
                            n(t[o]) || (t[o] = {});
                            var c = "style" === o ? "" : void 0;
                            for (var l in i) {
                                var u = i[l];
                                t[o][l] = void 0 === u ? c : u;
                            }
                        }
                    else
                        for (var p in i) {
                            var h = i[p];
                            void 0 === h
                                ? t.removeAttribute(p)
                                : t.setAttribute(p, h);
                        }
                }
                function a(t) {
                    return Object.getPrototypeOf
                        ? Object.getPrototypeOf(t)
                        : t.__proto__
                        ? t.__proto__
                        : t.constructor
                        ? t.constructor.prototype
                        : void 0;
                }
                t.exports = function (t, e, r) {
                    for (var a in e) {
                        var c = e[a];
                        void 0 === c
                            ? i(t, a, c, r)
                            : o(c)
                            ? (i(t, a, c, r),
                              c.hook && c.hook(t, a, r ? r[a] : void 0))
                            : n(c)
                            ? s(t, 0, r, a, c)
                            : (t[a] = c);
                    }
                };
            },
            3513: (t, e, r) => {
                var n = r(9144),
                    o = r(6672),
                    i = r(5170),
                    s = r(6221),
                    a = r(4097),
                    c = r(6078);
                t.exports = function t(e, r) {
                    var l = (r && r.document) || n,
                        u = r ? r.warn : null;
                    if (((e = c(e).a), a(e))) return e.init();
                    if (s(e)) return l.createTextNode(e.text);
                    if (!i(e))
                        return (
                            u && u("Item is not a valid virtual dom node", e),
                            null
                        );
                    var p =
                            null === e.namespace
                                ? l.createElement(e.tagName)
                                : l.createElementNS(e.namespace, e.tagName),
                        h = e.properties;
                    o(p, h);
                    for (var f = e.children, d = 0; d < f.length; d++) {
                        var g = t(f[d], r);
                        g && p.appendChild(g);
                    }
                    return p;
                };
            },
            8992: (t) => {
                var e = {};
                function r(t, o, i, s, a) {
                    if (((s = s || {}), t)) {
                        n(i, a, a) && (s[a] = t);
                        var c = o.children;
                        if (c)
                            for (
                                var l = t.childNodes, u = 0;
                                u < o.children.length;
                                u++
                            ) {
                                a += 1;
                                var p = c[u] || e,
                                    h = a + (p.count || 0);
                                n(i, a, h) && r(l[u], p, i, s, a), (a = h);
                            }
                    }
                    return s;
                }
                function n(t, e, r) {
                    if (0 === t.length) return !1;
                    for (var n, o, i = 0, s = t.length - 1; i <= s; ) {
                        if (((o = t[(n = ((s + i) / 2) >> 0)]), i === s))
                            return o >= e && o <= r;
                        if (o < e) i = n + 1;
                        else {
                            if (!(o > r)) return !0;
                            s = n - 1;
                        }
                    }
                    return !1;
                }
                function o(t, e) {
                    return t > e ? 1 : -1;
                }
                t.exports = function (t, e, n, i) {
                    return n && 0 !== n.length
                        ? (n.sort(o), r(t, e, n, i, 0))
                        : {};
                };
            },
            9120: (t, e, r) => {
                var n = r(6672),
                    o = r(4097),
                    i = r(8057),
                    s = r(6670);
                function a(t, e) {
                    "function" == typeof e.destroy && o(e) && e.destroy(t);
                }
                t.exports = function (t, e, r) {
                    var o,
                        c,
                        l = t.type,
                        u = t.vNode,
                        p = t.patch;
                    switch (l) {
                        case i.REMOVE:
                            return (function (t, e) {
                                var r = t.parentNode;
                                return r && r.removeChild(t), a(t, e), null;
                            })(e, u);
                        case i.INSERT:
                            return (function (t, e, r) {
                                var n = r.render(e, r);
                                return t && t.appendChild(n), t;
                            })(e, p, r);
                        case i.VTEXT:
                            return (function (t, e, r, n) {
                                var o;
                                if (3 === t.nodeType)
                                    t.replaceData(0, t.length, r.text), (o = t);
                                else {
                                    var i = t.parentNode;
                                    (o = n.render(r, n)),
                                        i && o !== t && i.replaceChild(o, t);
                                }
                                return o;
                            })(e, 0, p, r);
                        case i.WIDGET:
                            return (function (t, e, r, n) {
                                var o,
                                    i = s(e, r);
                                o = i ? r.update(e, t) || t : n.render(r, n);
                                var c = t.parentNode;
                                return (
                                    c && o !== t && c.replaceChild(o, t),
                                    i || a(t, e),
                                    o
                                );
                            })(e, u, p, r);
                        case i.VNODE:
                            return (function (t, e, r, n) {
                                var o = t.parentNode,
                                    i = n.render(r, n);
                                return o && i !== t && o.replaceChild(i, t), i;
                            })(e, 0, p, r);
                        case i.ORDER:
                            return (
                                (function (t, e) {
                                    for (
                                        var r,
                                            n,
                                            o,
                                            i = t.childNodes,
                                            s = {},
                                            a = 0;
                                        a < e.removes.length;
                                        a++
                                    )
                                        (r = i[(n = e.removes[a]).from]),
                                            n.key && (s[n.key] = r),
                                            t.removeChild(r);
                                    for (
                                        var c = i.length, l = 0;
                                        l < e.inserts.length;
                                        l++
                                    )
                                        (r = s[(o = e.inserts[l]).key]),
                                            t.insertBefore(
                                                r,
                                                o.to >= c++ ? null : i[o.to],
                                            );
                                })(e, p),
                                e
                            );
                        case i.PROPS:
                            return n(e, p, u.properties), e;
                        case i.THUNK:
                            return (
                                (o = e),
                                (c = r.patch(e, p, r)),
                                o &&
                                    c &&
                                    o !== c &&
                                    o.parentNode &&
                                    o.parentNode.replaceChild(c, o),
                                c
                            );
                        default:
                            return e;
                    }
                };
            },
            6943: (t, e, r) => {
                var n = r(9144),
                    o = r(7362),
                    i = r(3513),
                    s = r(8992),
                    a = r(9120);
                function c(t, e, r) {
                    var o = (function (t) {
                        var e = [];
                        for (var r in t) "a" !== r && e.push(Number(r));
                        return e;
                    })(e);
                    if (0 === o.length) return t;
                    var i = s(t, e.a, o),
                        a = t.ownerDocument;
                    r.document || a === n || (r.document = a);
                    for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        t = l(t, i[u], e[u], r);
                    }
                    return t;
                }
                function l(t, e, r, n) {
                    if (!e) return t;
                    var i;
                    if (o(r))
                        for (var s = 0; s < r.length; s++)
                            (i = a(r[s], e, n)), e === t && (t = i);
                    else (i = a(r, e, n)), e === t && (t = i);
                    return t;
                }
                t.exports = function t(e, r, n) {
                    return (
                        ((n = n || {}).patch =
                            n.patch && n.patch !== t ? n.patch : c),
                        (n.render = n.render || i),
                        n.patch(e, r, n)
                    );
                };
            },
            6670: (t, e, r) => {
                var n = r(4097);
                t.exports = function (t, e) {
                    return (
                        !(!n(t) || !n(e)) &&
                        ("name" in t && "name" in e
                            ? t.id === e.id
                            : t.init === e.init)
                    );
                };
            },
            6078: (t, e, r) => {
                var n = r(5170),
                    o = r(6221),
                    i = r(4097),
                    s = r(1057);
                function a(t, e) {
                    var r = t.vnode;
                    if (
                        (r || (r = t.vnode = t.render(e)),
                        !(n(r) || o(r) || i(r)))
                    )
                        throw new Error("thunk did not return a valid node");
                    return r;
                }
                t.exports = function (t, e) {
                    var r = t,
                        n = e;
                    return (
                        s(e) && (n = a(e, t)),
                        s(t) && (r = a(t, null)),
                        { a: r, b: n }
                    );
                };
            },
            1057: (t) => {
                t.exports = function (t) {
                    return t && "Thunk" === t.type;
                };
            },
            7265: (t) => {
                t.exports = function (t) {
                    return (
                        t &&
                        (("function" == typeof t.hook &&
                            !t.hasOwnProperty("hook")) ||
                            ("function" == typeof t.unhook &&
                                !t.hasOwnProperty("unhook")))
                    );
                };
            },
            5170: (t, e, r) => {
                var n = r(9962);
                t.exports = function (t) {
                    return t && "VirtualNode" === t.type && t.version === n;
                };
            },
            6221: (t, e, r) => {
                var n = r(9962);
                t.exports = function (t) {
                    return t && "VirtualText" === t.type && t.version === n;
                };
            },
            4097: (t) => {
                t.exports = function (t) {
                    return t && "Widget" === t.type;
                };
            },
            9962: (t) => {
                t.exports = "2";
            },
            4282: (t, e, r) => {
                var n = r(9962),
                    o = r(5170),
                    i = r(4097),
                    s = r(1057),
                    a = r(7265);
                t.exports = u;
                var c = {},
                    l = [];
                function u(t, e, r, n, u) {
                    (this.tagName = t),
                        (this.properties = e || c),
                        (this.children = r || l),
                        (this.key = null != n ? String(n) : void 0),
                        (this.namespace = "string" == typeof u ? u : null);
                    var p,
                        h = (r && r.length) || 0,
                        f = 0,
                        d = !1,
                        g = !1,
                        m = !1;
                    for (var b in e)
                        if (e.hasOwnProperty(b)) {
                            var y = e[b];
                            a(y) && y.unhook && (p || (p = {}), (p[b] = y));
                        }
                    for (var v = 0; v < h; v++) {
                        var w = r[v];
                        o(w)
                            ? ((f += w.count || 0),
                              !d && w.hasWidgets && (d = !0),
                              !g && w.hasThunks && (g = !0),
                              m || (!w.hooks && !w.descendantHooks) || (m = !0))
                            : !d && i(w)
                            ? "function" == typeof w.destroy && (d = !0)
                            : !g && s(w) && (g = !0);
                    }
                    (this.count = h + f),
                        (this.hasWidgets = d),
                        (this.hasThunks = g),
                        (this.hooks = p),
                        (this.descendantHooks = m);
                }
                (u.prototype.version = n), (u.prototype.type = "VirtualNode");
            },
            8057: (t, e, r) => {
                var n = r(9962);
                function o(t, e, r) {
                    (this.type = Number(t)), (this.vNode = e), (this.patch = r);
                }
                (o.NONE = 0),
                    (o.VTEXT = 1),
                    (o.VNODE = 2),
                    (o.WIDGET = 3),
                    (o.PROPS = 4),
                    (o.ORDER = 5),
                    (o.INSERT = 6),
                    (o.REMOVE = 7),
                    (o.THUNK = 8),
                    (t.exports = o),
                    (o.prototype.version = n),
                    (o.prototype.type = "VirtualPatch");
            },
            4268: (t, e, r) => {
                var n = r(9962);
                function o(t) {
                    this.text = String(t);
                }
                (t.exports = o),
                    (o.prototype.version = n),
                    (o.prototype.type = "VirtualText");
            },
            9973: (t, e, r) => {
                var n = r(6240),
                    o = r(7265);
                function i(t) {
                    return Object.getPrototypeOf
                        ? Object.getPrototypeOf(t)
                        : t.__proto__
                        ? t.__proto__
                        : t.constructor
                        ? t.constructor.prototype
                        : void 0;
                }
                t.exports = function t(e, r) {
                    var s;
                    for (var a in e) {
                        a in r || ((s = s || {})[a] = void 0);
                        var c = e[a],
                            l = r[a];
                        if (c !== l)
                            if (n(c) && n(l))
                                if (i(l) !== i(c)) (s = s || {})[a] = l;
                                else if (o(l)) (s = s || {})[a] = l;
                                else {
                                    var u = t(c, l);
                                    u && ((s = s || {})[a] = u);
                                }
                            else (s = s || {})[a] = l;
                    }
                    for (var p in r) p in e || ((s = s || {})[p] = r[p]);
                    return s;
                };
            },
            6741: (t, e, r) => {
                var n = r(7362),
                    o = r(8057),
                    i = r(5170),
                    s = r(6221),
                    a = r(4097),
                    c = r(1057),
                    l = r(6078),
                    u = r(9973);
                function p(t, e) {
                    var r = { a: t };
                    return h(t, e, r, 0), r;
                }
                function h(t, e, r, n) {
                    if (t !== e) {
                        var l = r[n],
                            p = !1;
                        if (c(t) || c(e)) g(t, e, r, n);
                        else if (null == e)
                            a(t) || (f(t, r, n), (l = r[n])),
                                (l = v(l, new o(o.REMOVE, t, e)));
                        else if (i(e))
                            if (i(t))
                                if (
                                    t.tagName === e.tagName &&
                                    t.namespace === e.namespace &&
                                    t.key === e.key
                                ) {
                                    var d = u(t.properties, e.properties);
                                    d && (l = v(l, new o(o.PROPS, t, d))),
                                        (l = (function (t, e, r, n, s) {
                                            for (
                                                var a = t.children,
                                                    c = (function (t, e) {
                                                        var r = y(e),
                                                            n = r.keys,
                                                            o = r.free;
                                                        if (
                                                            o.length ===
                                                            e.length
                                                        )
                                                            return {
                                                                children: e,
                                                                moves: null,
                                                            };
                                                        var i = y(t),
                                                            s = i.keys;
                                                        if (
                                                            i.free.length ===
                                                            t.length
                                                        )
                                                            return {
                                                                children: e,
                                                                moves: null,
                                                            };
                                                        for (
                                                            var a = [],
                                                                c = 0,
                                                                l = o.length,
                                                                u = 0,
                                                                p = 0;
                                                            p < t.length;
                                                            p++
                                                        ) {
                                                            var h,
                                                                f = t[p];
                                                            f.key
                                                                ? n.hasOwnProperty(
                                                                      f.key,
                                                                  )
                                                                    ? ((h =
                                                                          n[
                                                                              f
                                                                                  .key
                                                                          ]),
                                                                      a.push(
                                                                          e[h],
                                                                      ))
                                                                    : ((h =
                                                                          p -
                                                                          u++),
                                                                      a.push(
                                                                          null,
                                                                      ))
                                                                : c < l
                                                                ? ((h = o[c++]),
                                                                  a.push(e[h]))
                                                                : ((h =
                                                                      p - u++),
                                                                  a.push(null));
                                                        }
                                                        for (
                                                            var d =
                                                                    c >=
                                                                    o.length
                                                                        ? e.length
                                                                        : o[c],
                                                                g = 0;
                                                            g < e.length;
                                                            g++
                                                        ) {
                                                            var m = e[g];
                                                            m.key
                                                                ? s.hasOwnProperty(
                                                                      m.key,
                                                                  ) || a.push(m)
                                                                : g >= d &&
                                                                  a.push(m);
                                                        }
                                                        for (
                                                            var v,
                                                                w = a.slice(),
                                                                _ = 0,
                                                                q = [],
                                                                x = [],
                                                                E = 0;
                                                            E < e.length;

                                                        ) {
                                                            var S = e[E];
                                                            for (
                                                                v = w[_];
                                                                null === v &&
                                                                w.length;

                                                            )
                                                                q.push(
                                                                    b(
                                                                        w,
                                                                        _,
                                                                        null,
                                                                    ),
                                                                ),
                                                                    (v = w[_]);
                                                            v && v.key === S.key
                                                                ? (_++, E++)
                                                                : S.key
                                                                ? (v &&
                                                                  v.key &&
                                                                  n[v.key] !==
                                                                      E + 1
                                                                      ? (q.push(
                                                                            b(
                                                                                w,
                                                                                _,
                                                                                v.key,
                                                                            ),
                                                                        ),
                                                                        (v =
                                                                            w[
                                                                                _
                                                                            ]) &&
                                                                        v.key ===
                                                                            S.key
                                                                            ? _++
                                                                            : x.push(
                                                                                  {
                                                                                      key: S.key,
                                                                                      to: E,
                                                                                  },
                                                                              ))
                                                                      : x.push({
                                                                            key: S.key,
                                                                            to: E,
                                                                        }),
                                                                  E++)
                                                                : v &&
                                                                  v.key &&
                                                                  q.push(
                                                                      b(
                                                                          w,
                                                                          _,
                                                                          v.key,
                                                                      ),
                                                                  );
                                                        }
                                                        for (; _ < w.length; )
                                                            (v = w[_]),
                                                                q.push(
                                                                    b(
                                                                        w,
                                                                        _,
                                                                        v &&
                                                                            v.key,
                                                                    ),
                                                                );
                                                        return q.length !== u ||
                                                            x.length
                                                            ? {
                                                                  children: a,
                                                                  moves: {
                                                                      removes:
                                                                          q,
                                                                      inserts:
                                                                          x,
                                                                  },
                                                              }
                                                            : {
                                                                  children: a,
                                                                  moves: null,
                                                              };
                                                    })(a, e.children),
                                                    l = c.children,
                                                    u = a.length,
                                                    p = l.length,
                                                    f = u > p ? u : p,
                                                    d = 0;
                                                d < f;
                                                d++
                                            ) {
                                                var g = a[d],
                                                    m = l[d];
                                                (s += 1),
                                                    g
                                                        ? h(g, m, r, s)
                                                        : m &&
                                                          (n = v(
                                                              n,
                                                              new o(
                                                                  o.INSERT,
                                                                  null,
                                                                  m,
                                                              ),
                                                          )),
                                                    i(g) &&
                                                        g.count &&
                                                        (s += g.count);
                                            }
                                            return (
                                                c.moves &&
                                                    (n = v(
                                                        n,
                                                        new o(
                                                            o.ORDER,
                                                            t,
                                                            c.moves,
                                                        ),
                                                    )),
                                                n
                                            );
                                        })(t, e, r, l, n));
                                } else
                                    (l = v(l, new o(o.VNODE, t, e))), (p = !0);
                            else (l = v(l, new o(o.VNODE, t, e))), (p = !0);
                        else
                            s(e)
                                ? s(t)
                                    ? t.text !== e.text &&
                                      (l = v(l, new o(o.VTEXT, t, e)))
                                    : ((l = v(l, new o(o.VTEXT, t, e))),
                                      (p = !0))
                                : a(e) &&
                                  (a(t) || (p = !0),
                                  (l = v(l, new o(o.WIDGET, t, e))));
                        l && (r[n] = l), p && f(t, r, n);
                    }
                }
                function f(t, e, r) {
                    m(t, e, r), d(t, e, r);
                }
                function d(t, e, r) {
                    if (a(t))
                        "function" == typeof t.destroy &&
                            (e[r] = v(e[r], new o(o.REMOVE, t, null)));
                    else if (i(t) && (t.hasWidgets || t.hasThunks))
                        for (
                            var n = t.children, s = n.length, l = 0;
                            l < s;
                            l++
                        ) {
                            var u = n[l];
                            d(u, e, (r += 1)),
                                i(u) && u.count && (r += u.count);
                        }
                    else c(t) && g(t, null, e, r);
                }
                function g(t, e, r, n) {
                    var i = l(t, e),
                        s = p(i.a, i.b);
                    (function (t) {
                        for (var e in t) if ("a" !== e) return !0;
                        return !1;
                    })(s) && (r[n] = new o(o.THUNK, null, s));
                }
                function m(t, e, r) {
                    if (i(t)) {
                        if (
                            (t.hooks &&
                                (e[r] = v(
                                    e[r],
                                    new o(
                                        o.PROPS,
                                        t,
                                        (function (t) {
                                            var e = {};
                                            for (var r in t) e[r] = void 0;
                                            return e;
                                        })(t.hooks),
                                    ),
                                )),
                            t.descendantHooks || t.hasThunks)
                        )
                            for (
                                var n = t.children, s = n.length, a = 0;
                                a < s;
                                a++
                            ) {
                                var l = n[a];
                                m(l, e, (r += 1)),
                                    i(l) && l.count && (r += l.count);
                            }
                    } else c(t) && g(t, null, e, r);
                }
                function b(t, e, r) {
                    return t.splice(e, 1), { from: e, key: r };
                }
                function y(t) {
                    for (var e = {}, r = [], n = t.length, o = 0; o < n; o++) {
                        var i = t[o];
                        i.key ? (e[i.key] = o) : r.push(o);
                    }
                    return { keys: e, free: r };
                }
                function v(t, e) {
                    return t ? (n(t) ? t.push(e) : (t = [t, e]), t) : e;
                }
                t.exports = p;
            },
            7362: (t) => {
                var e = Array.isArray,
                    r = Object.prototype.toString;
                t.exports =
                    e ||
                    function (t) {
                        return "[object Array]" === r.call(t);
                    };
            },
            5893: () => {},
            247: () => {},
        },
        e = {};
    function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var i = (e[n] = { exports: {} });
        return t[n].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.d = (t, e) => {
        for (var n in e)
            r.o(e, n) &&
                !r.o(t, n) &&
                Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
        (r.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (r.r = (t) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (() => {
            "use strict";
            var t = r(3282);
            new (r(9985).Page)("counter").addRootImage(
                new t.Container([0, 0, 50, 50]),
            );
        })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1zZXJpYWxpemVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tc2VyaWFsaXplci9ub2RlX21vZHVsZXMvZG9tZWxlbWVudHR5cGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tc2VyaWFsaXplci9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLXNlcmlhbGl6ZXIvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tc2VyaWFsaXplci9ub2RlX21vZHVsZXMvZW50aXRpZXMvbGliL2VuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLXNlcmlhbGl6ZXIvbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tZWxlbWVudHR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbWhhbmRsZXIvbGliL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbXV0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL2xlZ2FjeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL21hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tdXRpbHMvbGliL3F1ZXJ5aW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb211dGlscy9saWIvdHJhdmVyc2FsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnQvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnQvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nbG9iYWwvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwtdG8tdmRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbC10by12ZG9tL2xpYi9jb252ZXJ0LXRhZy1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sLXRvLXZkb20vbGliL2h0bWwtdG8tdmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbC10by12ZG9tL2xpYi9odG1scGFyc2VyLXRvLXZkb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWwtdG8tdmRvbS9saWIvcGFyc2UtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL0NvbGxlY3RpbmdIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1scGFyc2VyMi9saWIvRmVlZEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Qcm94eUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9TdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Ub2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h0bWxwYXJzZXIyL2xpYi9Xcml0YWJsZVN0cmVhbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbHBhcnNlcjIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3B1bnljb2RlL3B1bnljb2RlLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmluZ19kZWNvZGVyL2xpYi9zdHJpbmdfZGVjb2Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vY2tpbmcvbW9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9wYWdlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vYXBwbHktcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdmRvbS9kb20taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vcGF0Y2gtb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zkb20vdXBkYXRlLXdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaGFuZGxlLXRodW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy10aHVuay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtdmhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtZG9tL3Zub2RlL2lzLXZub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS9pcy12dGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvaXMtd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92bm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdm5vZGUvdnBhdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92aXJ0dWFsLWRvbS92bm9kZS92dGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdnRyZWUvZGlmZi1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmlydHVhbC1kb20vdnRyZWUvZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMveC1pcy1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXhwb3J0cyIsImJ5dGVMZW5ndGgiLCJiNjQiLCJsZW5zIiwiZ2V0TGVucyIsInZhbGlkTGVuIiwicGxhY2VIb2xkZXJzTGVuIiwidG9CeXRlQXJyYXkiLCJ0bXAiLCJpIiwiYXJyIiwiQXJyIiwiX2J5dGVMZW5ndGgiLCJjdXJCeXRlIiwibGVuIiwicmV2TG9va3VwIiwiY2hhckNvZGVBdCIsImZyb21CeXRlQXJyYXkiLCJ1aW50OCIsImxlbmd0aCIsImV4dHJhQnl0ZXMiLCJwYXJ0cyIsIm1heENodW5rTGVuZ3RoIiwibGVuMiIsInB1c2giLCJlbmNvZGVDaHVuayIsImxvb2t1cCIsImpvaW4iLCJVaW50OEFycmF5IiwiQXJyYXkiLCJjb2RlIiwiRXJyb3IiLCJpbmRleE9mIiwic3RhcnQiLCJlbmQiLCJudW0iLCJvdXRwdXQiLCJiYXNlNjQiLCJpZWVlNzU0IiwiY3VzdG9tSW5zcGVjdFN5bWJvbCIsIlN5bWJvbCIsIkJ1ZmZlciIsIlNsb3dCdWZmZXIiLCJhbGxvYyIsIklOU1BFQ1RfTUFYX0JZVEVTIiwiS19NQVhfTEVOR1RIIiwiY3JlYXRlQnVmZmVyIiwiUmFuZ2VFcnJvciIsImJ1ZiIsIk9iamVjdCIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiYXJnIiwiZW5jb2RpbmdPck9mZnNldCIsIlR5cGVFcnJvciIsImFsbG9jVW5zYWZlIiwiZnJvbSIsInZhbHVlIiwic3RyaW5nIiwiZW5jb2RpbmciLCJpc0VuY29kaW5nIiwiYWN0dWFsIiwid3JpdGUiLCJzbGljZSIsImZyb21TdHJpbmciLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImFycmF5VmlldyIsImlzSW5zdGFuY2UiLCJjb3B5IiwiZnJvbUFycmF5QnVmZmVyIiwiYnVmZmVyIiwiYnl0ZU9mZnNldCIsImZyb21BcnJheUxpa2UiLCJmcm9tQXJyYXlWaWV3IiwiU2hhcmVkQXJyYXlCdWZmZXIiLCJ2YWx1ZU9mIiwiYiIsIm9iaiIsImlzQnVmZmVyIiwiY2hlY2tlZCIsInVuZGVmaW5lZCIsIm51bWJlcklzTmFOIiwidHlwZSIsImlzQXJyYXkiLCJkYXRhIiwiZnJvbU9iamVjdCIsInRvUHJpbWl0aXZlIiwiYXNzZXJ0U2l6ZSIsInNpemUiLCJhcnJheSIsInRvU3RyaW5nIiwibXVzdE1hdGNoIiwiYXJndW1lbnRzIiwibG93ZXJlZENhc2UiLCJ1dGY4VG9CeXRlcyIsImJhc2U2NFRvQnl0ZXMiLCJ0b0xvd2VyQ2FzZSIsInNsb3dUb1N0cmluZyIsInRoaXMiLCJoZXhTbGljZSIsInV0ZjhTbGljZSIsImFzY2lpU2xpY2UiLCJsYXRpbjFTbGljZSIsImJhc2U2NFNsaWNlIiwidXRmMTZsZVNsaWNlIiwic3dhcCIsIm4iLCJtIiwiYmlkaXJlY3Rpb25hbEluZGV4T2YiLCJ2YWwiLCJkaXIiLCJhcnJheUluZGV4T2YiLCJjYWxsIiwibGFzdEluZGV4T2YiLCJpbmRleFNpemUiLCJhcnJMZW5ndGgiLCJ2YWxMZW5ndGgiLCJTdHJpbmciLCJyZWFkIiwicmVhZFVJbnQxNkJFIiwiZm91bmRJbmRleCIsImZvdW5kIiwiaiIsImhleFdyaXRlIiwib2Zmc2V0IiwiTnVtYmVyIiwicmVtYWluaW5nIiwic3RyTGVuIiwicGFyc2VkIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJ1dGY4V3JpdGUiLCJibGl0QnVmZmVyIiwiYXNjaWlXcml0ZSIsInN0ciIsImJ5dGVBcnJheSIsImFzY2lpVG9CeXRlcyIsImJhc2U2NFdyaXRlIiwidWNzMldyaXRlIiwidW5pdHMiLCJjIiwiaGkiLCJsbyIsInV0ZjE2bGVUb0J5dGVzIiwiTWF0aCIsIm1pbiIsInJlcyIsImZpcnN0Qnl0ZSIsImNvZGVQb2ludCIsImJ5dGVzUGVyU2VxdWVuY2UiLCJzZWNvbmRCeXRlIiwidGhpcmRCeXRlIiwiZm91cnRoQnl0ZSIsInRlbXBDb2RlUG9pbnQiLCJjb2RlUG9pbnRzIiwiTUFYX0FSR1VNRU5UU19MRU5HVEgiLCJmcm9tQ2hhckNvZGUiLCJhcHBseSIsImRlY29kZUNvZGVQb2ludHNBcnJheSIsImtNYXhMZW5ndGgiLCJUWVBFRF9BUlJBWV9TVVBQT1JUIiwicHJvdG8iLCJmb28iLCJlIiwidHlwZWRBcnJheVN1cHBvcnQiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJwb29sU2l6ZSIsImZpbGwiLCJhbGxvY1Vuc2FmZVNsb3ciLCJfaXNCdWZmZXIiLCJjb21wYXJlIiwiYSIsIngiLCJ5IiwiY29uY2F0IiwibGlzdCIsInBvcyIsInNldCIsInN3YXAxNiIsInN3YXAzMiIsInN3YXA2NCIsInRvTG9jYWxlU3RyaW5nIiwiZXF1YWxzIiwiaW5zcGVjdCIsIm1heCIsInJlcGxhY2UiLCJ0cmltIiwidGFyZ2V0IiwidGhpc1N0YXJ0IiwidGhpc0VuZCIsInRoaXNDb3B5IiwidGFyZ2V0Q29weSIsImluY2x1ZGVzIiwiaXNGaW5pdGUiLCJ0b0pTT04iLCJfYXJyIiwicmV0Iiwib3V0IiwiaGV4U2xpY2VMb29rdXBUYWJsZSIsImJ5dGVzIiwiY2hlY2tPZmZzZXQiLCJleHQiLCJjaGVja0ludCIsIndydEJpZ1VJbnQ2NExFIiwiY2hlY2tJbnRCSSIsIkJpZ0ludCIsIndydEJpZ1VJbnQ2NEJFIiwiY2hlY2tJRUVFNzU0Iiwid3JpdGVGbG9hdCIsImxpdHRsZUVuZGlhbiIsIm5vQXNzZXJ0Iiwid3JpdGVEb3VibGUiLCJuZXdCdWYiLCJzdWJhcnJheSIsInJlYWRVaW50TEUiLCJyZWFkVUludExFIiwibXVsIiwicmVhZFVpbnRCRSIsInJlYWRVSW50QkUiLCJyZWFkVWludDgiLCJyZWFkVUludDgiLCJyZWFkVWludDE2TEUiLCJyZWFkVUludDE2TEUiLCJyZWFkVWludDE2QkUiLCJyZWFkVWludDMyTEUiLCJyZWFkVUludDMyTEUiLCJyZWFkVWludDMyQkUiLCJyZWFkVUludDMyQkUiLCJyZWFkQmlnVUludDY0TEUiLCJkZWZpbmVCaWdJbnRNZXRob2QiLCJ2YWxpZGF0ZU51bWJlciIsImZpcnN0IiwibGFzdCIsImJvdW5kc0Vycm9yIiwicmVhZEJpZ1VJbnQ2NEJFIiwicmVhZEludExFIiwicG93IiwicmVhZEludEJFIiwicmVhZEludDgiLCJyZWFkSW50MTZMRSIsInJlYWRJbnQxNkJFIiwicmVhZEludDMyTEUiLCJyZWFkSW50MzJCRSIsInJlYWRCaWdJbnQ2NExFIiwicmVhZEJpZ0ludDY0QkUiLCJyZWFkRmxvYXRMRSIsInJlYWRGbG9hdEJFIiwicmVhZERvdWJsZUxFIiwicmVhZERvdWJsZUJFIiwid3JpdGVVaW50TEUiLCJ3cml0ZVVJbnRMRSIsIndyaXRlVWludEJFIiwid3JpdGVVSW50QkUiLCJ3cml0ZVVpbnQ4Iiwid3JpdGVVSW50OCIsIndyaXRlVWludDE2TEUiLCJ3cml0ZVVJbnQxNkxFIiwid3JpdGVVaW50MTZCRSIsIndyaXRlVUludDE2QkUiLCJ3cml0ZVVpbnQzMkxFIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVWludDMyQkUiLCJ3cml0ZVVJbnQzMkJFIiwid3JpdGVCaWdVSW50NjRMRSIsIndyaXRlQmlnVUludDY0QkUiLCJ3cml0ZUludExFIiwibGltaXQiLCJzdWIiLCJ3cml0ZUludEJFIiwid3JpdGVJbnQ4Iiwid3JpdGVJbnQxNkxFIiwid3JpdGVJbnQxNkJFIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwid3JpdGVCaWdJbnQ2NExFIiwid3JpdGVCaWdJbnQ2NEJFIiwid3JpdGVGbG9hdExFIiwid3JpdGVGbG9hdEJFIiwid3JpdGVEb3VibGVMRSIsIndyaXRlRG91YmxlQkUiLCJ0YXJnZXRTdGFydCIsImNvcHlXaXRoaW4iLCJlcnJvcnMiLCJFIiwic3ltIiwiZ2V0TWVzc2FnZSIsIkJhc2UiLCJzdXBlciIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwibmFtZSIsInN0YWNrIiwibWVzc2FnZSIsImFkZE51bWVyaWNhbFNlcGFyYXRvciIsInJhbmdlIiwiRVJSX09VVF9PRl9SQU5HRSIsImNoZWNrQm91bmRzIiwiRVJSX0lOVkFMSURfQVJHX1RZUEUiLCJmbG9vciIsIkVSUl9CVUZGRVJfT1VUX09GX0JPVU5EUyIsImlucHV0IiwibXNnIiwicmVjZWl2ZWQiLCJpc0ludGVnZXIiLCJhYnMiLCJJTlZBTElEX0JBU0U2NF9SRSIsIkluZmluaXR5IiwibGVhZFN1cnJvZ2F0ZSIsInNwbGl0IiwiYmFzZTY0Y2xlYW4iLCJzcmMiLCJkc3QiLCJjb25zdHJ1Y3RvciIsImFscGhhYmV0IiwidGFibGUiLCJpMTYiLCJmbiIsIkJ1ZmZlckJpZ0ludE5vdERlZmluZWQiLCJFbGVtZW50VHlwZSIsImVudGl0aWVzIiwiZm9yZWlnbk5hbWVzIiwiZWxlbWVudE5hbWVzIiwiX19wcm90b19fIiwiYXR0cmlidXRlTmFtZXMiLCJ1bmVuY29kZWRFbGVtZW50cyIsInN0eWxlIiwic2NyaXB0IiwieG1wIiwiaWZyYW1lIiwibm9lbWJlZCIsIm5vZnJhbWVzIiwicGxhaW50ZXh0Iiwibm9zY3JpcHQiLCJzaW5nbGVUYWciLCJhcmVhIiwiYmFzZSIsImJhc2Vmb250IiwiYnIiLCJjb2wiLCJjb21tYW5kIiwiZW1iZWQiLCJmcmFtZSIsImhyIiwiaW1nIiwiaXNpbmRleCIsImtleWdlbiIsImxpbmsiLCJtZXRhIiwicGFyYW0iLCJzb3VyY2UiLCJ0cmFjayIsIndiciIsInJlbmRlciIsIm1vZHVsZSIsImRvbSIsIm9wdHMiLCJjaGVlcmlvIiwiZWxlbSIsImNoaWxkcmVuIiwiaXNUYWciLCJyZW5kZXJUYWciLCJEaXJlY3RpdmUiLCJyZW5kZXJEaXJlY3RpdmUiLCJDb21tZW50IiwicmVuZGVyQ29tbWVudCIsIkNEQVRBIiwicmVuZGVyQ2RhdGEiLCJyZW5kZXJUZXh0IiwiZm9yZWlnbk1vZGVJbnRlZ3JhdGlvblBvaW50cyIsInhtbE1vZGUiLCJwYXJlbnQiLCJhc3NpZ24iLCJ0YWciLCJhdHRyaWJzIiwiYXR0cmlidXRlcyIsImtleSIsImRlY29kZUVudGl0aWVzIiwiZW5jb2RlWE1MIiwiZm9ybWF0QXR0cnMiLCJEb2N0eXBlIiwiVGFnIiwiU3R5bGUiLCJTY3JpcHQiLCJUZXh0IiwiUm9vdCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJkZWNvZGVIVE1MIiwiZGVjb2RlSFRNTFN0cmljdCIsImRlY29kZVhNTCIsImVudGl0aWVzX2pzb25fMSIsImxlZ2FjeV9qc29uXzEiLCJ4bWxfanNvbl8xIiwiZGVjb2RlX2NvZGVwb2ludF8xIiwic3RyaWN0RW50aXR5UmUiLCJnZXRTdHJpY3REZWNvZGVyIiwibWFwIiwiZ2V0UmVwbGFjZXIiLCJkZWZhdWx0Iiwic29ydGVyIiwiY2hhckF0Iiwic2Vjb25kQ2hhciIsImxlZ2FjeSIsImtleXMiLCJzb3J0IiwicmUiLCJSZWdFeHAiLCJyZXBsYWNlciIsImRlY29kZV9qc29uXzEiLCJmcm9tQ29kZVBvaW50IiwiZXNjYXBlVVRGOCIsImVzY2FwZSIsImVuY29kZU5vbkFzY2lpSFRNTCIsImVuY29kZUhUTUwiLCJpbnZlcnNlWE1MIiwiZ2V0SW52ZXJzZU9iaiIsInhtbFJlcGxhY2VyIiwiZ2V0SW52ZXJzZVJlcGxhY2VyIiwiZ2V0QVNDSUlFbmNvZGVyIiwiaW52ZXJzZSIsImludmVyc2VIVE1MIiwiaHRtbFJlcGxhY2VyIiwicmVkdWNlIiwic2luZ2xlIiwibXVsdGlwbGUiLCJfaSIsIl9hIiwiayIsImNvdW50Iiwic3BsaWNlIiwidW5zaGlmdCIsInJlTm9uQVNDSUkiLCJzaW5nbGVDaGFyUmVwbGFjZXIiLCJnZXRDb2RlUG9pbnQiLCJjb2RlUG9pbnRBdCIsInRvVXBwZXJDYXNlIiwicmVFc2NhcGVDaGFycyIsImRlY29kZVhNTFN0cmljdCIsImRlY29kZUhUTUw1U3RyaWN0IiwiZGVjb2RlSFRNTDRTdHJpY3QiLCJkZWNvZGVIVE1MNSIsImRlY29kZUhUTUw0IiwiZW5jb2RlSFRNTDUiLCJlbmNvZGVIVE1MNCIsImVuY29kZSIsImRlY29kZVN0cmljdCIsImRlY29kZSIsImRlY29kZV8xIiwiZW5jb2RlXzEiLCJsZXZlbCIsImVuY29kZV8yIiwiZGVjb2RlXzIiLCJyZV93aGl0ZXNwYWNlIiwiTm9kZVByb3RvdHlwZSIsIkVsZW1lbnRQcm90b3R5cGUiLCJEb21IYW5kbGVyIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiZWxlbWVudENCIiwiZGVmYXVsdE9wdHMiLCJfY2FsbGJhY2siLCJfb3B0aW9ucyIsIl9lbGVtZW50Q0IiLCJfZG9uZSIsIl90YWdTdGFjayIsIl9wYXJzZXIiLCJub3JtYWxpemVXaGl0ZXNwYWNlIiwid2l0aFN0YXJ0SW5kaWNlcyIsIndpdGhFbmRJbmRpY2VzIiwib25wYXJzZXJpbml0IiwicGFyc2VyIiwib25yZXNldCIsIm9uZW5kIiwiX2hhbmRsZUNhbGxiYWNrIiwib25lcnJvciIsIm9uY2xvc2V0YWciLCJwb3AiLCJlbmRJbmRleCIsIl9jcmVhdGVEb21FbGVtZW50IiwicHJvcGVydGllcyIsIndpdGhEb21MdmwxIiwiZWxlbWVudCIsImNyZWF0ZSIsImhhc093blByb3BlcnR5IiwiX2FkZERvbUVsZW1lbnQiLCJzaWJsaW5ncyIsInByZXZpb3VzU2libGluZyIsIm5leHQiLCJzdGFydEluZGV4IiwicHJldiIsIm9ub3BlbnRhZyIsIm9udGV4dCIsImxhc3RUYWciLCJub3JtYWxpemUiLCJpZ25vcmVXaGl0ZXNwYWNlIiwib25jb21tZW50Iiwib25jZGF0YXN0YXJ0Iiwib25jb21tZW50ZW5kIiwib25jZGF0YWVuZCIsIm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uIiwiZG9tTHZsMSIsInRhZ05hbWUiLCJmb3JFYWNoIiwic2hvcnRoYW5kIiwibm9kZVR5cGVzIiwiY2hpbGROb2RlcyIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsIm5vZGVWYWx1ZSIsInRleHQiLCJjZGF0YSIsImNvbW1lbnQiLCJEb21VdGlscyIsImJpbmQiLCJyZW1vdmVTdWJzZXRzIiwibm9kZXMiLCJub2RlIiwiYW5jZXN0b3IiLCJpZHgiLCJjb21wYXJlUG9zIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJub2RlQSIsIm5vZGVCIiwiY3VycmVudCIsInNoYXJlZFBhcmVudCIsImFTaWJsaW5nIiwiYlNpYmxpbmciLCJhUGFyZW50cyIsImJQYXJlbnRzIiwiUE9TSVRJT04iLCJ1bmlxdWVTb3J0IiwicG9zaXRpb24iLCJyZWxhdGl2ZSIsInRlc3RFbGVtZW50IiwidGFnX25hbWUiLCJ0YWdfdHlwZSIsInRhZ19jb250YWlucyIsIkNoZWNrcyIsImdldEF0dHJpYkNoZWNrIiwiYXR0cmliIiwiY29tYmluZUZ1bmNzIiwiZ2V0RWxlbWVudHMiLCJyZWN1cnNlIiwiZnVuY3MiLCJmaWx0ZXIiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZmluZE9uZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeVRhZ1R5cGUiLCJyZW1vdmVFbGVtZW50IiwiY2hpbGRzIiwicmVwbGFjZUVsZW1lbnQiLCJyZXBsYWNlbWVudCIsImFwcGVuZENoaWxkIiwiY2hpbGQiLCJzaWJsaW5nIiwiYXBwZW5kIiwiY3Vyck5leHQiLCJwcmVwZW5kIiwiZmluZCIsInRlc3QiLCJlbGVtcyIsInJlc3VsdCIsImZpbmRPbmVDaGlsZCIsImwiLCJleGlzdHNPbmUiLCJmaW5kQWxsIiwicm9vdEVsZW1zIiwic2hpZnQiLCJnZXRPdXRlckhUTUwiLCJnZXRJbm5lckhUTUwiLCJnZXRUZXh0IiwiZ2V0Q2hpbGRyZW4iLCJnZXRQYXJlbnQiLCJnZXRTaWJsaW5ncyIsImdldEF0dHJpYnV0ZVZhbHVlIiwiaGFzQXR0cmliIiwiZ2V0TmFtZSIsInB1bnljb2RlIiwiXyIsIm1hdGNoIiwiZXhlYyIsInVjczIiLCJoYXNTZW1pIiwid2l0aG91dFNlbWkiLCJyZXZFbnRpdGllcyIsIm51bWVyaWMiLCJuYW1lZCIsInNwZWNpYWwiLCJjaGFycyIsImNjIiwiZGVjb2RlTWFwIiwiUmVmbGVjdE93bktleXMiLCJSIiwiUmVmbGVjdCIsIlJlZmxlY3RBcHBseSIsInJlY2VpdmVyIiwiYXJncyIsIkZ1bmN0aW9uIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5TmFtZXMiLCJOdW1iZXJJc05hTiIsImlzTmFOIiwiRXZlbnRFbWl0dGVyIiwiaW5pdCIsIm9uY2UiLCJlbWl0dGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlcnJvckxpc3RlbmVyIiwiZXJyIiwicmVtb3ZlTGlzdGVuZXIiLCJyZXNvbHZlciIsImV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lciIsImhhbmRsZXIiLCJmbGFncyIsIm9uIiwiYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIiLCJfZXZlbnRzIiwiX2V2ZW50c0NvdW50IiwiX21heExpc3RlbmVycyIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJjaGVja0xpc3RlbmVyIiwibGlzdGVuZXIiLCJfZ2V0TWF4TGlzdGVuZXJzIiwidGhhdCIsIl9hZGRMaXN0ZW5lciIsImV2ZW50cyIsImV4aXN0aW5nIiwid2FybmluZyIsIm5ld0xpc3RlbmVyIiwiZW1pdCIsIndhcm5lZCIsInciLCJ3YXJuIiwib25jZVdyYXBwZXIiLCJmaXJlZCIsIndyYXBGbiIsIl9vbmNlV3JhcCIsInN0YXRlIiwid3JhcHBlZCIsIl9saXN0ZW5lcnMiLCJ1bndyYXAiLCJldmxpc3RlbmVyIiwidW53cmFwTGlzdGVuZXJzIiwiYXJyYXlDbG9uZSIsImxpc3RlbmVyQ291bnQiLCJhZGRFdmVudExpc3RlbmVyIiwid3JhcExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFByb3RvdHlwZU9mIiwic2V0TWF4TGlzdGVuZXJzIiwiZ2V0TWF4TGlzdGVuZXJzIiwiZG9FcnJvciIsImVyIiwiY29udGV4dCIsImxpc3RlbmVycyIsImFkZExpc3RlbmVyIiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsIm9yaWdpbmFsTGlzdGVuZXIiLCJpbmRleCIsInNwbGljZU9uZSIsIm9mZiIsInJlbW92ZUFsbExpc3RlbmVycyIsInJhd0xpc3RlbmVycyIsImV2ZW50TmFtZXMiLCJkb2NjeSIsInRvcExldmVsIiwiZyIsIndpbmRvdyIsIm1pbkRvYyIsImRvY3VtZW50IiwiY29udmVydEhUTUwiLCJkZXBlbmRlbmNpZXMiLCJWTm9kZSIsIlZUZXh0IiwiY2hlY2tNYXNrIiwiYml0bWFzayIsInByb3BJbmZvQnlBdHRyaWJ1dGVOYW1lIiwiaXNDdXN0b21BdHRyaWJ1dGUiLCJIVE1MRE9NUHJvcGVydHlDb25maWciLCJQcm9wZXJ0aWVzIiwiYWNjZXB0IiwiYWNjZXB0Q2hhcnNldCIsImFjY2Vzc0tleSIsImFjdGlvbiIsImFsbG93RnVsbFNjcmVlbiIsIk1VU1RfVVNFX0FUVFJJQlVURSIsImFsbG93VHJhbnNwYXJlbmN5IiwiYWx0IiwiYXN5bmMiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJhdXRvUGxheSIsImNhcHR1cmUiLCJjZWxsUGFkZGluZyIsImNlbGxTcGFjaW5nIiwiY2hhclNldCIsImNoYWxsZW5nZSIsIk1VU1RfVVNFX1BST1BFUlRZIiwiY2xhc3NJRCIsImNsYXNzTmFtZSIsImNvbHMiLCJjb2xTcGFuIiwiY29udGVudCIsImNvbnRlbnRFZGl0YWJsZSIsImNvbnRleHRNZW51IiwiY29udHJvbHMiLCJjb29yZHMiLCJjcm9zc09yaWdpbiIsImRhdGVUaW1lIiwiZGVmZXIiLCJkaXNhYmxlZCIsImRvd25sb2FkIiwiZHJhZ2dhYmxlIiwiZW5jVHlwZSIsImZvcm0iLCJmb3JtQWN0aW9uIiwiZm9ybUVuY1R5cGUiLCJmb3JtTWV0aG9kIiwiZm9ybU5vVmFsaWRhdGUiLCJmb3JtVGFyZ2V0IiwiZnJhbWVCb3JkZXIiLCJoZWFkZXJzIiwiaGVpZ2h0IiwiaGlkZGVuIiwiaGlnaCIsImhyZWYiLCJocmVmTGFuZyIsImh0bWxGb3IiLCJodHRwRXF1aXYiLCJpY29uIiwiaXMiLCJrZXlQYXJhbXMiLCJrZXlUeXBlIiwibGFiZWwiLCJsYW5nIiwibG9vcCIsImxvdyIsIm1hbmlmZXN0IiwibWFyZ2luSGVpZ2h0IiwibWFyZ2luV2lkdGgiLCJtYXhMZW5ndGgiLCJtZWRpYSIsIm1lZGlhR3JvdXAiLCJtZXRob2QiLCJtaW5MZW5ndGgiLCJtdXRlZCIsIm5vVmFsaWRhdGUiLCJvcGVuIiwib3B0aW11bSIsInBhdHRlcm4iLCJwbGFjZWhvbGRlciIsInBvc3RlciIsInByZWxvYWQiLCJyYWRpb0dyb3VwIiwicmVhZE9ubHkiLCJyZWwiLCJyZXF1aXJlZCIsInJvbGUiLCJyb3dzIiwicm93U3BhbiIsInNhbmRib3giLCJzY29wZSIsInNjb3BlZCIsInNjcm9sbGluZyIsInNlYW1sZXNzIiwic2VsZWN0ZWQiLCJzaGFwZSIsInNpemVzIiwic3BhbiIsInNwZWxsQ2hlY2siLCJzcmNEb2MiLCJzcmNTZXQiLCJzdGVwIiwidGFiSW5kZXgiLCJ0aXRsZSIsInVzZU1hcCIsIndpZHRoIiwid21vZGUiLCJhdXRvQ2FwaXRhbGl6ZSIsImF1dG9Db3JyZWN0IiwiaXRlbVByb3AiLCJpdGVtU2NvcGUiLCJpdGVtVHlwZSIsIml0ZW1JRCIsIml0ZW1SZWYiLCJwcm9wZXJ0eSIsInVuc2VsZWN0YWJsZSIsInByb3BlcnR5VG9BdHRyaWJ1dGVNYXBwaW5nIiwicHJvcGVydHlWYWx1ZUNvbnZlcnNpb25zIiwib2JqZWN0IiwiYXR0cmlidXRlIiwiZW50cnkiLCJnZXRQcm9wZXJ0eUluZm8iLCJwcm9wTmFtZSIsInByb3BDb25maWciLCJhdHRyaWJ1dGVOYW1lIiwicHJvcGVydHlJbmZvIiwicHJvcGVydHlOYW1lIiwibXVzdFVzZUF0dHJpYnV0ZSIsIm11c3RVc2VQcm9wZXJ0eSIsImhhc0Jvb2xlYW5WYWx1ZSIsImhhc051bWVyaWNWYWx1ZSIsImhhc1Bvc2l0aXZlTnVtZXJpY1ZhbHVlIiwiaGFzT3ZlcmxvYWRlZEJvb2xlYW5WYWx1ZSIsInZkb21Qcm9wZXJ0aWVzIiwibG93ZXJDYXNlZCIsInByb3BJbmZvIiwiaXNUcnVlIiwidmFsdWVDb252ZXJ0ZXIiLCJjcmVhdGVDb252ZXJ0ZXIiLCJwYXJzZUhUTUwiLCJWVHJlZSIsImh0bWxwYXJzZXJUb1Zkb20iLCJodG1sIiwibm9PcHRpb25zIiwiaHRtbFRvQ29udmVydCIsImdldFZOb2RlS2V5IiwidGFncyIsImNvbnZlcnQiLCJjb252ZXJ0VGFnQXR0cmlidXRlcyIsImNvbnZlcnRlciIsImNvbnZlcnRUYWciLCJodG1scGFyc2VyIiwiUGFyc2VyIiwibG93ZXJDYXNlQXR0cmlidXRlTmFtZXMiLCJwYXJzZUNvbXBsZXRlIiwiQ29sbGVjdGluZ0hhbmRsZXIiLCJjYnMiLCJfY2JzIiwiRVZFTlRTIiwicmVzdGFydCIsIkZlZWRIYW5kbGVyIiwid2hhdCIsIndoZXJlIiwiZ2V0T25lRWxlbWVudCIsImZldGNoIiwiYWRkQ29uZGl0aW9uYWxseSIsInByb3AiLCJpc1ZhbGlkRmVlZCIsImZlZWQiLCJmZWVkUm9vdCIsInVwZGF0ZWQiLCJEYXRlIiwiaXRlbXMiLCJpdGVtIiwiZGVzY3JpcHRpb24iLCJwdWJEYXRlIiwiVG9rZW5pemVyIiwiZm9ybVRhZ3MiLCJvcHRpb24iLCJvcHRncm91cCIsInNlbGVjdCIsImJ1dHRvbiIsImRhdGFsaXN0IiwidGV4dGFyZWEiLCJvcGVuSW1wbGllc0Nsb3NlIiwidHIiLCJ0aCIsInRkIiwidGhlYWQiLCJib2R5IiwiaGVhZCIsImxpIiwicCIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInZvaWRFbGVtZW50cyIsImZvcmVpZ25Db250ZXh0RWxlbWVudHMiLCJtYXRoIiwic3ZnIiwiaHRtbEludGVncmF0aW9uRWxlbWVudHMiLCJtaSIsIm1vIiwibW4iLCJtcyIsIm10ZXh0IiwiZm9yZWlnbk9iamVjdCIsImRlc2MiLCJyZV9uYW1lRW5kIiwiX3RhZ25hbWUiLCJfYXR0cmlibmFtZSIsIl9hdHRyaWJ2YWx1ZSIsIl9hdHRyaWJzIiwiX3N0YWNrIiwiX2ZvcmVpZ25Db250ZXh0IiwiX2xvd2VyQ2FzZVRhZ05hbWVzIiwibG93ZXJDYXNlVGFncyIsIl9sb3dlckNhc2VBdHRyaWJ1dGVOYW1lcyIsIl90b2tlbml6ZXIiLCJfdXBkYXRlUG9zaXRpb24iLCJpbml0aWFsT2Zmc2V0IiwiX3NlY3Rpb25TdGFydCIsImdldEFic29sdXRlSW5kZXgiLCJvbm9wZW50YWduYW1lIiwiZWwiLCJvbm9wZW50YWdlbmQiLCJfY2xvc2VDdXJyZW50VGFnIiwib25zZWxmY2xvc2luZ3RhZyIsInJlY29nbml6ZVNlbGZDbG9zaW5nIiwib25hdHRyaWJuYW1lIiwib25hdHRyaWJkYXRhIiwib25hdHRyaWJlbmQiLCJvbmF0dHJpYnV0ZSIsIl9nZXRJbnN0cnVjdGlvbk5hbWUiLCJzZWFyY2giLCJvbmRlY2xhcmF0aW9uIiwib25jZGF0YSIsInJlY29nbml6ZUNEQVRBIiwicmVzZXQiLCJjaHVuayIsInBhdXNlIiwicmVzdW1lIiwicGFyc2VDaHVuayIsImRvbmUiLCJQcm94eUhhbmRsZXIiLCJTdHJlYW0iLCJDYnMiLCJyZWFkYWJsZSIsImRlY29kZUNvZGVQb2ludCIsImVudGl0eU1hcCIsImxlZ2FjeU1hcCIsInhtbE1hcCIsIlRFWFQiLCJCRUZPUkVfVEFHX05BTUUiLCJJTl9UQUdfTkFNRSIsIklOX1NFTEZfQ0xPU0lOR19UQUciLCJCRUZPUkVfQ0xPU0lOR19UQUdfTkFNRSIsIklOX0NMT1NJTkdfVEFHX05BTUUiLCJBRlRFUl9DTE9TSU5HX1RBR19OQU1FIiwiQkVGT1JFX0FUVFJJQlVURV9OQU1FIiwiSU5fQVRUUklCVVRFX05BTUUiLCJBRlRFUl9BVFRSSUJVVEVfTkFNRSIsIkJFRk9SRV9BVFRSSUJVVEVfVkFMVUUiLCJJTl9BVFRSSUJVVEVfVkFMVUVfRFEiLCJJTl9BVFRSSUJVVEVfVkFMVUVfU1EiLCJJTl9BVFRSSUJVVEVfVkFMVUVfTlEiLCJCRUZPUkVfREVDTEFSQVRJT04iLCJJTl9ERUNMQVJBVElPTiIsIklOX1BST0NFU1NJTkdfSU5TVFJVQ1RJT04iLCJCRUZPUkVfQ09NTUVOVCIsIklOX0NPTU1FTlQiLCJBRlRFUl9DT01NRU5UXzEiLCJBRlRFUl9DT01NRU5UXzIiLCJCRUZPUkVfQ0RBVEFfMSIsIkJFRk9SRV9DREFUQV8yIiwiQkVGT1JFX0NEQVRBXzMiLCJCRUZPUkVfQ0RBVEFfNCIsIkJFRk9SRV9DREFUQV81IiwiQkVGT1JFX0NEQVRBXzYiLCJJTl9DREFUQSIsIkFGVEVSX0NEQVRBXzEiLCJBRlRFUl9DREFUQV8yIiwiQkVGT1JFX1NQRUNJQUwiLCJCRUZPUkVfU1BFQ0lBTF9FTkQiLCJCRUZPUkVfU0NSSVBUXzEiLCJCRUZPUkVfU0NSSVBUXzIiLCJCRUZPUkVfU0NSSVBUXzMiLCJCRUZPUkVfU0NSSVBUXzQiLCJCRUZPUkVfU0NSSVBUXzUiLCJBRlRFUl9TQ1JJUFRfMSIsIkFGVEVSX1NDUklQVF8yIiwiQUZURVJfU0NSSVBUXzMiLCJBRlRFUl9TQ1JJUFRfNCIsIkFGVEVSX1NDUklQVF81IiwiQkVGT1JFX1NUWUxFXzEiLCJCRUZPUkVfU1RZTEVfMiIsIkJFRk9SRV9TVFlMRV8zIiwiQkVGT1JFX1NUWUxFXzQiLCJBRlRFUl9TVFlMRV8xIiwiQUZURVJfU1RZTEVfMiIsIkFGVEVSX1NUWUxFXzMiLCJBRlRFUl9TVFlMRV80IiwiQkVGT1JFX0VOVElUWSIsIkJFRk9SRV9OVU1FUklDX0VOVElUWSIsIklOX05BTUVEX0VOVElUWSIsIklOX05VTUVSSUNfRU5USVRZIiwiSU5fSEVYX0VOVElUWSIsIlNQRUNJQUxfTk9ORSIsIlNQRUNJQUxfU0NSSVBUIiwiU1BFQ0lBTF9TVFlMRSIsIndoaXRlc3BhY2UiLCJpZkVsc2VTdGF0ZSIsInVwcGVyIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJsb3dlciIsIl9zdGF0ZSIsIl9pbmRleCIsImNvbnN1bWVTcGVjaWFsTmFtZUNoYXIiLCJORVhUX1NUQVRFIiwiX2J1ZmZlciIsIl9idWZmZXJPZmZzZXQiLCJfYmFzZVN0YXRlIiwiX3NwZWNpYWwiLCJfcnVubmluZyIsIl9lbmRlZCIsIl94bWxNb2RlIiwiX2RlY29kZUVudGl0aWVzIiwiX3N0YXRlVGV4dCIsIl9nZXRTZWN0aW9uIiwiX3N0YXRlQmVmb3JlVGFnTmFtZSIsIl9zdGF0ZUluVGFnTmFtZSIsIl9lbWl0VG9rZW4iLCJfc3RhdGVCZWZvcmVDbG9zZWluZ1RhZ05hbWUiLCJfc3RhdGVJbkNsb3NlaW5nVGFnTmFtZSIsIl9zdGF0ZUFmdGVyQ2xvc2VpbmdUYWdOYW1lIiwiX3N0YXRlQmVmb3JlQXR0cmlidXRlTmFtZSIsIl9zdGF0ZUluU2VsZkNsb3NpbmdUYWciLCJfc3RhdGVJbkF0dHJpYnV0ZU5hbWUiLCJfc3RhdGVBZnRlckF0dHJpYnV0ZU5hbWUiLCJfc3RhdGVCZWZvcmVBdHRyaWJ1dGVWYWx1ZSIsIl9zdGF0ZUluQXR0cmlidXRlVmFsdWVEb3VibGVRdW90ZXMiLCJfc3RhdGVJbkF0dHJpYnV0ZVZhbHVlU2luZ2xlUXVvdGVzIiwiX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZU5vUXVvdGVzIiwiX3N0YXRlQmVmb3JlRGVjbGFyYXRpb24iLCJfc3RhdGVJbkRlY2xhcmF0aW9uIiwiX3N0YXRlSW5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24iLCJfc3RhdGVCZWZvcmVDb21tZW50IiwiX3N0YXRlSW5Db21tZW50IiwiX3N0YXRlQWZ0ZXJDb21tZW50MSIsIl9zdGF0ZUFmdGVyQ29tbWVudDIiLCJzdWJzdHJpbmciLCJfc3RhdGVCZWZvcmVDZGF0YTEiLCJfc3RhdGVCZWZvcmVDZGF0YTIiLCJfc3RhdGVCZWZvcmVDZGF0YTMiLCJfc3RhdGVCZWZvcmVDZGF0YTQiLCJfc3RhdGVCZWZvcmVDZGF0YTUiLCJfc3RhdGVCZWZvcmVDZGF0YTYiLCJfc3RhdGVJbkNkYXRhIiwiX3N0YXRlQWZ0ZXJDZGF0YTEiLCJfc3RhdGVBZnRlckNkYXRhMiIsIl9zdGF0ZUJlZm9yZVNwZWNpYWwiLCJfc3RhdGVCZWZvcmVTcGVjaWFsRW5kIiwiX3N0YXRlQmVmb3JlU2NyaXB0MSIsIl9zdGF0ZUJlZm9yZVNjcmlwdDIiLCJfc3RhdGVCZWZvcmVTY3JpcHQzIiwiX3N0YXRlQmVmb3JlU2NyaXB0NCIsIl9zdGF0ZUJlZm9yZVNjcmlwdDUiLCJfc3RhdGVBZnRlclNjcmlwdDEiLCJfc3RhdGVBZnRlclNjcmlwdDIiLCJfc3RhdGVBZnRlclNjcmlwdDMiLCJfc3RhdGVBZnRlclNjcmlwdDQiLCJfc3RhdGVBZnRlclNjcmlwdDUiLCJfc3RhdGVCZWZvcmVTdHlsZTEiLCJfc3RhdGVCZWZvcmVTdHlsZTIiLCJfc3RhdGVCZWZvcmVTdHlsZTMiLCJfc3RhdGVCZWZvcmVTdHlsZTQiLCJfc3RhdGVBZnRlclN0eWxlMSIsIl9zdGF0ZUFmdGVyU3R5bGUyIiwiX3N0YXRlQWZ0ZXJTdHlsZTMiLCJfc3RhdGVBZnRlclN0eWxlNCIsIl9zdGF0ZUJlZm9yZUVudGl0eSIsIl9zdGF0ZUJlZm9yZU51bWVyaWNFbnRpdHkiLCJfcGFyc2VOYW1lZEVudGl0eVN0cmljdCIsImVudGl0eSIsIl9lbWl0UGFydGlhbCIsIl9wYXJzZUxlZ2FjeUVudGl0eSIsIl9zdGF0ZUluTmFtZWRFbnRpdHkiLCJfZGVjb2RlTnVtZXJpY0VudGl0eSIsInNlY3Rpb25TdGFydCIsIl9zdGF0ZUluTnVtZXJpY0VudGl0eSIsIl9zdGF0ZUluSGV4RW50aXR5IiwiX2NsZWFudXAiLCJfcGFyc2UiLCJfZmluaXNoIiwiX2hhbmRsZVRyYWlsaW5nRGF0YSIsIldyaXRhYmxlU3RyZWFtIiwiU3RyaW5nRGVjb2RlciIsImRlY29kZXIiLCJfZGVjb2RlciIsImRlY29kZVN0cmluZ3MiLCJfd3JpdGUiLCJjYiIsImRlZmluZVByb3AiLCJEZWZhdWx0SGFuZGxlciIsInBhcnNlRE9NIiwicGFyc2VGZWVkIiwiY3JlYXRlRG9tU3RyZWFtIiwiZWxlbWVudENiIiwiY2RhdGFzdGFydCIsImNkYXRhZW5kIiwicHJvY2Vzc2luZ2luc3RydWN0aW9uIiwiY29tbWVudGVuZCIsImNsb3NldGFnIiwib3BlbnRhZyIsIm9wZW50YWduYW1lIiwiaXNMRSIsIm1MZW4iLCJuQnl0ZXMiLCJlTGVuIiwiZU1heCIsImVCaWFzIiwibkJpdHMiLCJkIiwicyIsIk5hTiIsInJ0IiwibG9nIiwiTE4yIiwiY3RvciIsInN1cGVyQ3RvciIsInN1cGVyXyIsIlRlbXBDdG9yIiwibWF4SW50IiwicmVnZXhQdW55Y29kZSIsInJlZ2V4Tm9uQVNDSUkiLCJyZWdleFNlcGFyYXRvcnMiLCJzdHJpbmdGcm9tQ2hhckNvZGUiLCJtYXBEb21haW4iLCJlbmNvZGVkIiwidWNzMmRlY29kZSIsImNvdW50ZXIiLCJleHRyYSIsInVjczJlbmNvZGUiLCJkaWdpdFRvQmFzaWMiLCJkaWdpdCIsImZsYWciLCJhZGFwdCIsImRlbHRhIiwibnVtUG9pbnRzIiwiZmlyc3RUaW1lIiwiYmFzZU1pbnVzVE1pbiIsImlucHV0TGVuZ3RoIiwiYmlhcyIsImJhc2ljIiwib2xkaSIsInQiLCJiYXNlTWludXNUIiwiY3VycmVudFZhbHVlIiwiYmFzaWNMZW5ndGgiLCJoYW5kbGVkQ1BDb3VudCIsImhhbmRsZWRDUENvdW50UGx1c09uZSIsInEiLCJxTWludXNUIiwidG9Vbmljb2RlIiwidG9BU0NJSSIsImNvcHlQcm9wcyIsIlNhZmVCdWZmZXIiLCJuYiIsImVuYyIsIm5lbmMiLCJyZXRyaWVkIiwiX25vcm1hbGl6ZUVuY29kaW5nIiwibm9ybWFsaXplRW5jb2RpbmciLCJ1dGYxNlRleHQiLCJ1dGYxNkVuZCIsImZpbGxMYXN0IiwidXRmOEZpbGxMYXN0IiwiYmFzZTY0VGV4dCIsImJhc2U2NEVuZCIsInNpbXBsZVdyaXRlIiwic2ltcGxlRW5kIiwibGFzdE5lZWQiLCJsYXN0VG90YWwiLCJsYXN0Q2hhciIsInV0ZjhDaGVja0J5dGUiLCJieXRlIiwiciIsInNlbGYiLCJ1dGY4Q2hlY2tFeHRyYUJ5dGVzIiwidG90YWwiLCJ1dGY4Q2hlY2tJbmNvbXBsZXRlIiwiX19hc3NpZ24iLCJfX3NwcmVhZEFycmF5IiwidG8iLCJpbCIsIkltYWdlIiwicHJvcHMiLCJpbWFnZUlkIiwibm93IiwicmFuZG9tIiwiY3NzIiwiZGVidWciLCJpbWFnZU5hbWUiLCJtb3VudCIsImNvbXBpbGUiLCJwYXJzZWRIdG1sIiwicGFzcyIsImNhbGxiYWNrSWQiLCJjYWxsYmFja1Byb3BzIiwicGFnZSIsImNhbGxiYWNrcyIsImltYWdlIiwiZXJyb3JMaW5lcyIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGUiLCJkZWJ1Z09uIiwiZGVidWdDb2xvdXIiLCJkZWJ1Z09mZiIsImV4dGVuZFN0YXRpY3MiLCJfX2V4dGVuZHMiLCJfXyIsIkNvdW50ZXIiLCJDb250YWluZXIiLCJpbWFnZV8xIiwiX3N1cGVyIiwiY291bnRlcjEiLCJfdGhpcyIsIlBhZ2UiLCJkaWZmIiwicGF0Y2giLCJjcmVhdGVFbGVtZW50IiwiYWRkUm9vdEltYWdlIiwicm9vdEltYWdlIiwiY3VycmVudFRyZWUiLCJjb252ZXJ0SFRNTFdpdGhLZXkiLCJjdXJyZW50Tm9kZSIsImluamVjdENhbGxiYWNrcyIsIm5ld1RyZWUiLCJwYXRjaGVzIiwidmFsdWVzIiwicXVlcnlTZWxlY3RvciIsIm5vZGVOYW1lIiwiaXNPYmplY3QiLCJpc0hvb2siLCJyZW1vdmVQcm9wZXJ0eSIsInByb3BWYWx1ZSIsInByZXZpb3VzIiwicHJldmlvdXNWYWx1ZSIsInVuaG9vayIsImF0dHJOYW1lIiwicmVtb3ZlQXR0cmlidXRlIiwicGF0Y2hPYmplY3QiLCJnZXRQcm90b3R5cGUiLCJhdHRyVmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJob29rIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaXNWTm9kZSIsImlzVlRleHQiLCJpc1dpZGdldCIsImhhbmRsZVRodW5rIiwidm5vZGUiLCJkb2MiLCJjcmVhdGVUZXh0Tm9kZSIsIm5hbWVzcGFjZSIsImNyZWF0ZUVsZW1lbnROUyIsImNoaWxkTm9kZSIsIm5vQ2hpbGQiLCJyb290Tm9kZSIsInRyZWUiLCJpbmRpY2VzIiwicm9vdEluZGV4IiwiaW5kZXhJblJhbmdlIiwidkNoaWxkcmVuIiwidkNoaWxkIiwibmV4dEluZGV4IiwibGVmdCIsInJpZ2h0IiwiY3VycmVudEluZGV4IiwiY3VycmVudEl0ZW0iLCJtaW5JbmRleCIsIm1heEluZGV4IiwiYXNjZW5kaW5nIiwiVlBhdGNoIiwidXBkYXRlV2lkZ2V0IiwiZGVzdHJveVdpZGdldCIsImRvbU5vZGUiLCJkZXN0cm95IiwidnBhdGNoIiwicmVuZGVyT3B0aW9ucyIsIm9sZFJvb3QiLCJuZXdSb290Iiwidk5vZGUiLCJSRU1PVkUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZU5vZGUiLCJJTlNFUlQiLCJuZXdOb2RlIiwiaW5zZXJ0Tm9kZSIsIlZURVhUIiwibGVmdFZOb2RlIiwidlRleHQiLCJub2RlVHlwZSIsInJlcGxhY2VEYXRhIiwicmVwbGFjZUNoaWxkIiwic3RyaW5nUGF0Y2giLCJXSURHRVQiLCJ3aWRnZXQiLCJ1cGRhdGluZyIsIndpZGdldFBhdGNoIiwiVk5PREUiLCJ2Tm9kZVBhdGNoIiwiT1JERVIiLCJtb3ZlcyIsInJlbW92ZSIsImluc2VydCIsImtleU1hcCIsInJlbW92ZXMiLCJpbnNlcnRzIiwiaW5zZXJ0QmVmb3JlIiwicmVvcmRlckNoaWxkcmVuIiwiUFJPUFMiLCJUSFVOSyIsImRvbUluZGV4IiwicGF0Y2hPcCIsInBhdGNoUmVjdXJzaXZlIiwicGF0Y2hJbmRpY2VzIiwib3duZXJEb2N1bWVudCIsIm5vZGVJbmRleCIsImFwcGx5UGF0Y2giLCJwYXRjaExpc3QiLCJpc1RodW5rIiwicmVuZGVyVGh1bmsiLCJ0aHVuayIsInJlbmRlcmVkVGh1bmsiLCJyZW5kZXJlZEEiLCJyZW5kZXJlZEIiLCJ2ZXJzaW9uIiwiaXNWSG9vayIsIlZpcnR1YWxOb2RlIiwibm9Qcm9wZXJ0aWVzIiwibm9DaGlsZHJlbiIsImhvb2tzIiwiZGVzY2VuZGFudHMiLCJoYXNXaWRnZXRzIiwiaGFzVGh1bmtzIiwiZGVzY2VuZGFudEhvb2tzIiwiVmlydHVhbFBhdGNoIiwiTk9ORSIsIlZpcnR1YWxUZXh0IiwiZGlmZlByb3BzIiwiYUtleSIsImFWYWx1ZSIsImJWYWx1ZSIsIm9iamVjdERpZmYiLCJiS2V5Iiwid2FsayIsImFwcGx5Q2xlYXIiLCJ0aHVua3MiLCJjbGVhclN0YXRlIiwiYXBwZW5kUGF0Y2giLCJwcm9wc1BhdGNoIiwiYUNoaWxkcmVuIiwib3JkZXJlZFNldCIsImJDaGlsZHJlbiIsImJDaGlsZEluZGV4Iiwia2V5SW5kZXgiLCJiS2V5cyIsImJGcmVlIiwiZnJlZSIsImFDaGlsZEluZGV4IiwiYUtleXMiLCJuZXdDaGlsZHJlbiIsImZyZWVJbmRleCIsImZyZWVDb3VudCIsImRlbGV0ZWRJdGVtcyIsIml0ZW1JbmRleCIsImFJdGVtIiwibGFzdEZyZWVJbmRleCIsIm5ld0l0ZW0iLCJzaW11bGF0ZUl0ZW0iLCJzaW11bGF0ZSIsInNpbXVsYXRlSW5kZXgiLCJ3YW50ZWRJdGVtIiwicmVvcmRlciIsImFMZW4iLCJiTGVuIiwibGVmdE5vZGUiLCJyaWdodE5vZGUiLCJkaWZmQ2hpbGRyZW4iLCJkZXN0cm95V2lkZ2V0cyIsInRodW5rUGF0Y2giLCJoYXNQYXRjaGVzIiwidW5kZWZpbmVkS2V5cyIsIm5hdGl2ZUlzQXJyYXkiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZGVmaW5pdGlvbiIsIm8iLCJnbG9iYWxUaGlzIiwidG9TdHJpbmdUYWciLCJtb2NrXzEiXSwibWFwcGluZ3MiOiI7dUNBRUFBLEVBQVFDLFdBdUNSLFNBQXFCQyxHQUNuQixJ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bEZ1aEIsRUFBb0JuTixFQUFLcnBDLElBQ0gsb0JBQVh3QyxRQUEwQkEsT0FBT3UwQyxhQUMxQzl6QyxPQUFPdUgsZUFBZXhLLEVBQVN3QyxPQUFPdTBDLFlBQWEsQ0FBRXR6QyxNQUFPLFdBRTdEUixPQUFPdUgsZUFBZXhLLEVBQVMsYUFBYyxDQUFFeUQsT0FBTyxLLG1CQ0h2RCxJQUFJdXpDLEVBQVMsRUFBUSxNQUVILElBREwsRUFBUSxNQUNRakwsTUFBSyxXQUFXSSxhQUFhLElBQUk2SyxFQUFPdEwsVUFBVSxDQUFDLEVBQUcsRUFBRyxHQUFJLE8iLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxuY29uc3QgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuY29uc3QgY3VzdG9tSW5zcGVjdFN5bWJvbCA9XG4gICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2xbJ2ZvciddID09PSAnZnVuY3Rpb24nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgID8gU3ltYm9sWydmb3InXSgnbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIDogbnVsbFxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbmNvbnN0IEtfTUFYX0xFTkdUSCA9IDB4N2ZmZmZmZmZcbmV4cG9ydHMua01heExlbmd0aCA9IEtfTUFYX0xFTkdUSFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBQcmludCB3YXJuaW5nIGFuZCByZWNvbW1lbmQgdXNpbmcgYGJ1ZmZlcmAgdjQueCB3aGljaCBoYXMgYW4gT2JqZWN0XG4gKiAgICAgICAgICAgICAgIGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBXZSByZXBvcnQgdGhhdCB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBpZiB0aGUgYXJlIG5vdCBzdWJjbGFzc2FibGVcbiAqIHVzaW5nIF9fcHJvdG9fXy4gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWBcbiAqIChTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOCkuIElFIDEwIGxhY2tzIHN1cHBvcnRcbiAqIGZvciBfX3Byb3RvX18gYW5kIGhhcyBhIGJ1Z2d5IHR5cGVkIGFycmF5IGltcGxlbWVudGF0aW9uLlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zb2xlLmVycm9yKFxuICAgICdUaGlzIGJyb3dzZXIgbGFja3MgdHlwZWQgYXJyYXkgKFVpbnQ4QXJyYXkpIHN1cHBvcnQgd2hpY2ggaXMgcmVxdWlyZWQgYnkgJyArXG4gICAgJ2BidWZmZXJgIHY1LnguIFVzZSBgYnVmZmVyYCB2NC54IGlmIHlvdSByZXF1aXJlIG9sZCBicm93c2VyIHN1cHBvcnQuJ1xuICApXG59XG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgLy8gQ2FuIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkP1xuICB0cnkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgY29uc3QgcHJvdG8gPSB7IGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfSB9XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3RvLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYXJyLCBwcm90bylcbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MlxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdwYXJlbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyXG4gIH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAnb2Zmc2V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ5dGVPZmZzZXRcbiAgfVxufSlcblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA+IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgbGVuZ3RoICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgY29uc3QgYnVmID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuICByZXR1cm4gYnVmXG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBzdHJpbmcuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUoYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuZnVuY3Rpb24gZnJvbSAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5Vmlldyh2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAgICdvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB2YWx1ZSlcbiAgICApXG4gIH1cblxuICBpZiAoaXNJbnN0YW5jZSh2YWx1ZSwgQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIEFycmF5QnVmZmVyKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgKGlzSW5zdGFuY2UodmFsdWUsIFNoYXJlZEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBTaGFyZWRBcnJheUJ1ZmZlcikpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICApXG4gIH1cblxuICBjb25zdCB2YWx1ZU9mID0gdmFsdWUudmFsdWVPZiAmJiB2YWx1ZS52YWx1ZU9mKClcbiAgaWYgKHZhbHVlT2YgIT0gbnVsbCAmJiB2YWx1ZU9mICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZU9mLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBjb25zdCBiID0gZnJvbU9iamVjdCh2YWx1ZSlcbiAgaWYgKGIpIHJldHVybiBiXG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1ByaW1pdGl2ZSAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgdmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdKCdzdHJpbmcnKSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICApXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20odmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gTm90ZTogQ2hhbmdlIHByb3RvdHlwZSAqYWZ0ZXIqIEJ1ZmZlci5mcm9tIGlzIGRlZmluZWQgdG8gd29ya2Fyb3VuZCBDaHJvbWUgYnVnOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC8xNDhcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIucHJvdG90eXBlLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIsIFVpbnQ4QXJyYXkpXG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBzaXplICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlIChzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIGxldCBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuXG4gIGNvbnN0IGFjdHVhbCA9IGJ1Zi53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgYnVmID0gYnVmLnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAoYXJyYXkpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIGNvbnN0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidWZbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5VmlldyAoYXJyYXlWaWV3KSB7XG4gIGlmIChpc0luc3RhbmNlKGFycmF5VmlldywgVWludDhBcnJheSkpIHtcbiAgICBjb25zdCBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlWaWV3KVxuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIoY29weS5idWZmZXIsIGNvcHkuYnl0ZU9mZnNldCwgY29weS5ieXRlTGVuZ3RoKVxuICB9XG4gIHJldHVybiBmcm9tQXJyYXlMaWtlKGFycmF5Vmlldylcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyIChhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIm9mZnNldFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wibGVuZ3RoXCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGxldCBidWZcbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0IChvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgY29uc3QgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICBjb25zdCBidWYgPSBjcmVhdGVCdWZmZXIobGVuKVxuXG4gICAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBidWZcbiAgICB9XG5cbiAgICBvYmouY29weShidWYsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gYnVmXG4gIH1cblxuICBpZiAob2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBudW1iZXJJc05hTihvYmoubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcigwKVxuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmopXG4gIH1cblxuICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIEFycmF5LmlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqLmRhdGEpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IEtfTUFYX0xFTkdUSGAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsgS19NQVhfTEVOR1RILnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyID09PSB0cnVlICYmXG4gICAgYiAhPT0gQnVmZmVyLnByb3RvdHlwZSAvLyBzbyBCdWZmZXIuaXNCdWZmZXIoQnVmZmVyLnByb3RvdHlwZSkgd2lsbCBiZSBmYWxzZVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYSwgVWludDhBcnJheSkpIGEgPSBCdWZmZXIuZnJvbShhLCBhLm9mZnNldCwgYS5ieXRlTGVuZ3RoKVxuICBpZiAoaXNJbnN0YW5jZShiLCBVaW50OEFycmF5KSkgYiA9IEJ1ZmZlci5mcm9tKGIsIGIub2Zmc2V0LCBiLmJ5dGVMZW5ndGgpXG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcImJ1ZjFcIiwgXCJidWYyXCIgYXJndW1lbnRzIG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXknXG4gICAgKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgbGV0IHggPSBhLmxlbmd0aFxuICBsZXQgeSA9IGIubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICBsZXQgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIGxldCBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgbGV0IGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoaXNJbnN0YW5jZShidWYsIFVpbnQ4QXJyYXkpKSB7XG4gICAgICBpZiAocG9zICsgYnVmLmxlbmd0aCA+IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gQnVmZmVyLmZyb20oYnVmKVxuICAgICAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICBidWYsXG4gICAgICAgICAgcG9zXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgfVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IGlzSW5zdGFuY2Uoc3RyaW5nLCBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIG9yIEFycmF5QnVmZmVyLiAnICtcbiAgICAgICdSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2Ygc3RyaW5nXG4gICAgKVxuICB9XG5cbiAgY29uc3QgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBjb25zdCBtdXN0TWF0Y2ggPSAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdID09PSB0cnVlKVxuICBpZiAoIW11c3RNYXRjaCAmJiBsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHtcbiAgICAgICAgICByZXR1cm4gbXVzdE1hdGNoID8gLTEgOiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICB9XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcmNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIChhbmQgdGhlIGBpcy1idWZmZXJgIG5wbSBwYWNrYWdlKVxuLy8gdG8gZGV0ZWN0IGEgQnVmZmVyIGluc3RhbmNlLiBJdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgYGluc3RhbmNlb2YgQnVmZmVyYFxuLy8gcmVsaWFibHkgaW4gYSBicm93c2VyaWZ5IGNvbnRleHQgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBkaWZmZXJlbnRcbi8vIGNvcGllcyBvZiB0aGUgJ2J1ZmZlcicgcGFja2FnZSBpbiB1c2UuIFRoaXMgbWV0aG9kIHdvcmtzIGV2ZW4gZm9yIEJ1ZmZlclxuLy8gaW5zdGFuY2VzIHRoYXQgd2VyZSBjcmVhdGVkIGZyb20gYW5vdGhlciBjb3B5IG9mIHRoZSBgYnVmZmVyYCBwYWNrYWdlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTU0XG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICBjb25zdCBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IEJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmdcblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICBsZXQgc3RyID0gJydcbiAgY29uc3QgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLnJlcGxhY2UoLyguezJ9KS9nLCAnJDEgJykudHJpbSgpXG4gIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cbmlmIChjdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGVbY3VzdG9tSW5zcGVjdFN5bWJvbF0gPSBCdWZmZXIucHJvdG90eXBlLmluc3BlY3Rcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKGlzSW5zdGFuY2UodGFyZ2V0LCBVaW50OEFycmF5KSkge1xuICAgIHRhcmdldCA9IEJ1ZmZlci5mcm9tKHRhcmdldCwgdGFyZ2V0Lm9mZnNldCwgdGFyZ2V0LmJ5dGVMZW5ndGgpXG4gIH1cbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidGFyZ2V0XCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheS4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB0YXJnZXQpXG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgbGV0IHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIGxldCB5ID0gZW5kIC0gc3RhcnRcbiAgY29uc3QgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICBjb25zdCB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICBjb25zdCB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAobnVtYmVySXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbdmFsXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgbGV0IGluZGV4U2l6ZSA9IDFcbiAgbGV0IGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgbGV0IHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgbGV0IGlcbiAgaWYgKGRpcikge1xuICAgIGxldCBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgY29uc3QgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGxldCBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAobnVtYmVySXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCA+Pj4gMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICBjb25zdCByZXMgPSBbXVxuXG4gIGxldCBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICBjb25zdCBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICBsZXQgY29kZVBvaW50ID0gbnVsbFxuICAgIGxldCBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpXG4gICAgICA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpXG4gICAgICAgICAgPyAzXG4gICAgICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRilcbiAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgbGV0IHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxuY29uc3QgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIGNvbnN0IGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgbGV0IHJlcyA9ICcnXG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBsZXQgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIGxldCBvdXQgPSAnJ1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSBoZXhTbGljZUxvb2t1cFRhYmxlW2J1ZltpXV1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIGxldCByZXMgPSAnJ1xuICAvLyBJZiBieXRlcy5sZW5ndGggaXMgb2RkLCB0aGUgbGFzdCA4IGJpdHMgbXVzdCBiZSBpZ25vcmVkIChzYW1lIGFzIG5vZGUuanMpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyAoYnl0ZXNbaSArIDFdICogMjU2KSlcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIGNvbnN0IG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5ld0J1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXRdXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnRCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgbGV0IG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50OCA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyTEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdVSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnVUludDY0TEUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCBsbyA9IGZpcnN0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjRcblxuICBjb25zdCBoaSA9IHRoaXNbKytvZmZzZXRdICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICBsYXN0ICogMiAqKiAyNFxuXG4gIHJldHVybiBCaWdJbnQobG8pICsgKEJpZ0ludChoaSkgPDwgQmlnSW50KDMyKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ1VJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdVSW50NjRCRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IGhpID0gZmlyc3QgKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XVxuXG4gIGNvbnN0IGxvID0gdGhpc1srK29mZnNldF0gKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICBsYXN0XG5cbiAgcmV0dXJuIChCaWdJbnQoaGkpIDw8IEJpZ0ludCgzMikpICsgQmlnSW50KGxvKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0XVxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aFxuICBsZXQgbXVsID0gMVxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdJbnQ2NExFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXQgKyA0XSArXG4gICAgdGhpc1tvZmZzZXQgKyA1XSAqIDIgKiogOCArXG4gICAgdGhpc1tvZmZzZXQgKyA2XSAqIDIgKiogMTYgK1xuICAgIChsYXN0IDw8IDI0KSAvLyBPdmVyZmxvd1xuXG4gIHJldHVybiAoQmlnSW50KHZhbCkgPDwgQmlnSW50KDMyKSkgK1xuICAgIEJpZ0ludChmaXJzdCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDI0KVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnSW50NjRCRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IHZhbCA9IChmaXJzdCA8PCAyNCkgKyAvLyBPdmVyZmxvd1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdXG5cbiAgcmV0dXJuIChCaWdJbnQodmFsKSA8PCBCaWdJbnQoMzIpKSArXG4gICAgQmlnSW50KHRoaXNbKytvZmZzZXRdICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgbGFzdClcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoIC0gMVxuICBsZXQgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQ4ID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gd3J0QmlnVUludDY0TEUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbWluLCBtYXgpIHtcbiAgY2hlY2tJbnRCSSh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCA3KVxuXG4gIGxldCBsbyA9IE51bWJlcih2YWx1ZSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxldCBoaSA9IE51bWJlcih2YWx1ZSA+PiBCaWdJbnQoMzIpICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgcmV0dXJuIG9mZnNldFxufVxuXG5mdW5jdGlvbiB3cnRCaWdVSW50NjRCRSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBtaW4sIG1heCkge1xuICBjaGVja0ludEJJKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIDcpXG5cbiAgbGV0IGxvID0gTnVtYmVyKHZhbHVlICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0ICsgN10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDZdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA1XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNF0gPSBsb1xuICBsZXQgaGkgPSBOdW1iZXIodmFsdWUgPj4gQmlnSW50KDMyKSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCArIDNdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQgKyAyXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0ICsgMV0gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldF0gPSBoaVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnVUludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdVSW50NjRMRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NExFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIEJpZ0ludCgwKSwgQmlnSW50KCcweGZmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdVSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ1VJbnQ2NEJFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0QkUodGhpcywgdmFsdWUsIG9mZnNldCwgQmlnSW50KDApLCBCaWdJbnQoJzB4ZmZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICBsZXQgaSA9IDBcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICBsZXQgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIGxldCBtdWwgPSAxXG4gIGxldCBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ0ludDY0TEUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRMRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAtQmlnSW50KCcweDgwMDAwMDAwMDAwMDAwMDAnKSwgQmlnSW50KCcweDdmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnSW50NjRCRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NEJFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIC1CaWdJbnQoJzB4ODAwMDAwMDAwMDAwMDAwMCcpLCBCaWdJbnQoJzB4N2ZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc2hvdWxkIGJlIGEgQnVmZmVyJylcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFVzZSBidWlsdC1pbiB3aGVuIGF2YWlsYWJsZSwgbWlzc2luZyBmcm9tIElFMTFcbiAgICB0aGlzLmNvcHlXaXRoaW4odGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpXG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgJiYgY29kZSA8IDEyOCkgfHxcbiAgICAgICAgICBlbmNvZGluZyA9PT0gJ2xhdGluMScpIHtcbiAgICAgICAgLy8gRmFzdCBwYXRoOiBJZiBgdmFsYCBmaXRzIGludG8gYSBzaW5nbGUgYnl0ZSwgdXNlIHRoYXQgbnVtZXJpYyB2YWx1ZS5cbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgIHZhbCA9IE51bWJlcih2YWwpXG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgbGV0IGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICAgIGNvbnN0IGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyB2YWwgK1xuICAgICAgICAnXCIgaXMgaW52YWxpZCBmb3IgYXJndW1lbnQgXCJ2YWx1ZVwiJylcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gQ1VTVE9NIEVSUk9SU1xuLy8gPT09PT09PT09PT09PVxuXG4vLyBTaW1wbGlmaWVkIHZlcnNpb25zIGZyb20gTm9kZSwgY2hhbmdlZCBmb3IgQnVmZmVyLW9ubHkgdXNhZ2VcbmNvbnN0IGVycm9ycyA9IHt9XG5mdW5jdGlvbiBFIChzeW0sIGdldE1lc3NhZ2UsIEJhc2UpIHtcbiAgZXJyb3JzW3N5bV0gPSBjbGFzcyBOb2RlRXJyb3IgZXh0ZW5kcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZScsIHtcbiAgICAgICAgdmFsdWU6IGdldE1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSlcblxuICAgICAgLy8gQWRkIHRoZSBlcnJvciBjb2RlIHRvIHRoZSBuYW1lIHRvIGluY2x1ZGUgaXQgaW4gdGhlIHN0YWNrIHRyYWNlLlxuICAgICAgdGhpcy5uYW1lID0gYCR7dGhpcy5uYW1lfSBbJHtzeW19XWBcbiAgICAgIC8vIEFjY2VzcyB0aGUgc3RhY2sgdG8gZ2VuZXJhdGUgdGhlIGVycm9yIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZSBlcnJvciBjb2RlXG4gICAgICAvLyBmcm9tIHRoZSBuYW1lLlxuICAgICAgdGhpcy5zdGFjayAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgLy8gUmVzZXQgdGhlIG5hbWUgdG8gdGhlIGFjdHVhbCBuYW1lLlxuICAgICAgZGVsZXRlIHRoaXMubmFtZVxuICAgIH1cblxuICAgIGdldCBjb2RlICgpIHtcbiAgICAgIHJldHVybiBzeW1cbiAgICB9XG5cbiAgICBzZXQgY29kZSAodmFsdWUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29kZScsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9TdHJpbmcgKCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gWyR7c3ltfV06ICR7dGhpcy5tZXNzYWdlfWBcbiAgICB9XG4gIH1cbn1cblxuRSgnRVJSX0JVRkZFUl9PVVRfT0ZfQk9VTkRTJyxcbiAgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9IGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kc2BcbiAgICB9XG5cbiAgICByZXR1cm4gJ0F0dGVtcHQgdG8gYWNjZXNzIG1lbW9yeSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnXG4gIH0sIFJhbmdlRXJyb3IpXG5FKCdFUlJfSU5WQUxJRF9BUkdfVFlQRScsXG4gIGZ1bmN0aW9uIChuYW1lLCBhY3R1YWwpIHtcbiAgICByZXR1cm4gYFRoZSBcIiR7bmFtZX1cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGFjdHVhbH1gXG4gIH0sIFR5cGVFcnJvcilcbkUoJ0VSUl9PVVRfT0ZfUkFOR0UnLFxuICBmdW5jdGlvbiAoc3RyLCByYW5nZSwgaW5wdXQpIHtcbiAgICBsZXQgbXNnID0gYFRoZSB2YWx1ZSBvZiBcIiR7c3RyfVwiIGlzIG91dCBvZiByYW5nZS5gXG4gICAgbGV0IHJlY2VpdmVkID0gaW5wdXRcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihpbnB1dCkgJiYgTWF0aC5hYnMoaW5wdXQpID4gMiAqKiAzMikge1xuICAgICAgcmVjZWl2ZWQgPSBhZGROdW1lcmljYWxTZXBhcmF0b3IoU3RyaW5nKGlucHV0KSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIHJlY2VpdmVkID0gU3RyaW5nKGlucHV0KVxuICAgICAgaWYgKGlucHV0ID4gQmlnSW50KDIpICoqIEJpZ0ludCgzMikgfHwgaW5wdXQgPCAtKEJpZ0ludCgyKSAqKiBCaWdJbnQoMzIpKSkge1xuICAgICAgICByZWNlaXZlZCA9IGFkZE51bWVyaWNhbFNlcGFyYXRvcihyZWNlaXZlZClcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVkICs9ICduJ1xuICAgIH1cbiAgICBtc2cgKz0gYCBJdCBtdXN0IGJlICR7cmFuZ2V9LiBSZWNlaXZlZCAke3JlY2VpdmVkfWBcbiAgICByZXR1cm4gbXNnXG4gIH0sIFJhbmdlRXJyb3IpXG5cbmZ1bmN0aW9uIGFkZE51bWVyaWNhbFNlcGFyYXRvciAodmFsKSB7XG4gIGxldCByZXMgPSAnJ1xuICBsZXQgaSA9IHZhbC5sZW5ndGhcbiAgY29uc3Qgc3RhcnQgPSB2YWxbMF0gPT09ICctJyA/IDEgOiAwXG4gIGZvciAoOyBpID49IHN0YXJ0ICsgNDsgaSAtPSAzKSB7XG4gICAgcmVzID0gYF8ke3ZhbC5zbGljZShpIC0gMywgaSl9JHtyZXN9YFxuICB9XG4gIHJldHVybiBgJHt2YWwuc2xpY2UoMCwgaSl9JHtyZXN9YFxufVxuXG4vLyBDSEVDSyBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBjaGVja0JvdW5kcyAoYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgaWYgKGJ1ZltvZmZzZXRdID09PSB1bmRlZmluZWQgfHwgYnVmW29mZnNldCArIGJ5dGVMZW5ndGhdID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIGJ1Zi5sZW5ndGggLSAoYnl0ZUxlbmd0aCArIDEpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50QkkgKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB7XG4gICAgY29uc3QgbiA9IHR5cGVvZiBtaW4gPT09ICdiaWdpbnQnID8gJ24nIDogJydcbiAgICBsZXQgcmFuZ2VcbiAgICBpZiAoYnl0ZUxlbmd0aCA+IDMpIHtcbiAgICAgIGlmIChtaW4gPT09IDAgfHwgbWluID09PSBCaWdJbnQoMCkpIHtcbiAgICAgICAgcmFuZ2UgPSBgPj0gMCR7bn0gYW5kIDwgMiR7bn0gKiogJHsoYnl0ZUxlbmd0aCArIDEpICogOH0ke259YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZ2UgPSBgPj0gLSgyJHtufSAqKiAkeyhieXRlTGVuZ3RoICsgMSkgKiA4IC0gMX0ke259KSBhbmQgPCAyICoqIGAgK1xuICAgICAgICAgICAgICAgIGAkeyhieXRlTGVuZ3RoICsgMSkgKiA4IC0gMX0ke259YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZSA9IGA+PSAke21pbn0ke259IGFuZCA8PSAke21heH0ke259YFxuICAgIH1cbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UoJ3ZhbHVlJywgcmFuZ2UsIHZhbHVlKVxuICB9XG4gIGNoZWNrQm91bmRzKGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU51bWJlciAodmFsdWUsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9JTlZBTElEX0FSR19UWVBFKG5hbWUsICdudW1iZXInLCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZHNFcnJvciAodmFsdWUsIGxlbmd0aCwgdHlwZSkge1xuICBpZiAoTWF0aC5mbG9vcih2YWx1ZSkgIT09IHZhbHVlKSB7XG4gICAgdmFsaWRhdGVOdW1iZXIodmFsdWUsIHR5cGUpXG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKHR5cGUgfHwgJ29mZnNldCcsICdhbiBpbnRlZ2VyJywgdmFsdWUpXG4gIH1cblxuICBpZiAobGVuZ3RoIDwgMCkge1xuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX0JVRkZFUl9PVVRfT0ZfQk9VTkRTKClcbiAgfVxuXG4gIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSh0eXBlIHx8ICdvZmZzZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYD49ICR7dHlwZSA/IDEgOiAwfSBhbmQgPD0gJHtsZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlKVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmNvbnN0IElOVkFMSURfQkFTRTY0X1JFID0gL1teKy8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgdGFrZXMgZXF1YWwgc2lnbnMgYXMgZW5kIG9mIHRoZSBCYXNlNjQgZW5jb2RpbmdcbiAgc3RyID0gc3RyLnNwbGl0KCc9JylbMF1cbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICBsZXQgY29kZVBvaW50XG4gIGNvbnN0IGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgbGV0IGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIGNvbnN0IGJ5dGVzID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgY29uc3QgYnl0ZUFycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICBsZXQgYywgaGksIGxvXG4gIGNvbnN0IGJ5dGVBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgbGV0IGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbi8vIEFycmF5QnVmZmVyIG9yIFVpbnQ4QXJyYXkgb2JqZWN0cyBmcm9tIG90aGVyIGNvbnRleHRzIChpLmUuIGlmcmFtZXMpIGRvIG5vdCBwYXNzXG4vLyB0aGUgYGluc3RhbmNlb2ZgIGNoZWNrIGJ1dCB0aGV5IHNob3VsZCBiZSB0cmVhdGVkIGFzIG9mIHRoYXQgdHlwZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE2NlxuZnVuY3Rpb24gaXNJbnN0YW5jZSAob2JqLCB0eXBlKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiB0eXBlIHx8XG4gICAgKG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9IG51bGwgJiZcbiAgICAgIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSB0eXBlLm5hbWUpXG59XG5mdW5jdGlvbiBudW1iZXJJc05hTiAob2JqKSB7XG4gIC8vIEZvciBJRTExIHN1cHBvcnRcbiAgcmV0dXJuIG9iaiAhPT0gb2JqIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbi8vIENyZWF0ZSBsb29rdXAgdGFibGUgZm9yIGB0b1N0cmluZygnaGV4JylgXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8yMTlcbmNvbnN0IGhleFNsaWNlTG9va3VwVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5YWJjZGVmJ1xuICBjb25zdCB0YWJsZSA9IG5ldyBBcnJheSgyNTYpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgIGNvbnN0IGkxNiA9IGkgKiAxNlxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgdGFibGVbaTE2ICsgal0gPSBhbHBoYWJldFtpXSArIGFscGhhYmV0W2pdXG4gICAgfVxuICB9XG4gIHJldHVybiB0YWJsZVxufSkoKVxuXG4vLyBSZXR1cm4gbm90IGZ1bmN0aW9uIHdpdGggRXJyb3IgaWYgQmlnSW50IG5vdCBzdXBwb3J0ZWRcbmZ1bmN0aW9uIGRlZmluZUJpZ0ludE1ldGhvZCAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gQnVmZmVyQmlnSW50Tm90RGVmaW5lZCA6IGZuXG59XG5cbmZ1bmN0aW9uIEJ1ZmZlckJpZ0ludE5vdERlZmluZWQgKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0JpZ0ludCBub3Qgc3VwcG9ydGVkJylcbn1cbiIsIi8qXG4gIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiovXG52YXIgRWxlbWVudFR5cGUgPSByZXF1aXJlKCdkb21lbGVtZW50dHlwZScpO1xudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnZW50aXRpZXMnKTtcblxuLyogbWl4ZWQtY2FzZSBTVkcgYW5kIE1hdGhNTCB0YWdzICYgYXR0cmlidXRlc1xuICAgcmVjb2duaXplZCBieSB0aGUgSFRNTCBwYXJzZXIsIHNlZVxuICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvcGFyc2luZy5odG1sI3BhcnNpbmctbWFpbi1pbmZvcmVpZ25cbiovXG52YXIgZm9yZWlnbk5hbWVzID0gcmVxdWlyZSgnLi9mb3JlaWduTmFtZXMuanNvbicpO1xuZm9yZWlnbk5hbWVzLmVsZW1lbnROYW1lcy5fX3Byb3RvX18gPSBudWxsOyAvKiB1c2UgYXMgYSBzaW1wbGUgZGljdGlvbmFyeSAqL1xuZm9yZWlnbk5hbWVzLmF0dHJpYnV0ZU5hbWVzLl9fcHJvdG9fXyA9IG51bGw7XG5cbnZhciB1bmVuY29kZWRFbGVtZW50cyA9IHtcbiAgX19wcm90b19fOiBudWxsLFxuICBzdHlsZTogdHJ1ZSxcbiAgc2NyaXB0OiB0cnVlLFxuICB4bXA6IHRydWUsXG4gIGlmcmFtZTogdHJ1ZSxcbiAgbm9lbWJlZDogdHJ1ZSxcbiAgbm9mcmFtZXM6IHRydWUsXG4gIHBsYWludGV4dDogdHJ1ZSxcbiAgbm9zY3JpcHQ6IHRydWVcbn07XG5cbi8qXG4gIEZvcm1hdCBhdHRyaWJ1dGVzXG4qL1xuZnVuY3Rpb24gZm9ybWF0QXR0cnMoYXR0cmlidXRlcywgb3B0cykge1xuICBpZiAoIWF0dHJpYnV0ZXMpIHJldHVybjtcblxuICB2YXIgb3V0cHV0ID0gJyc7XG4gIHZhciB2YWx1ZTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGF0dHJpYnV0ZXNcbiAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICBpZiAob3V0cHV0KSB7XG4gICAgICBvdXRwdXQgKz0gJyAnO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnhtbE1vZGUgPT09ICdmb3JlaWduJykge1xuICAgICAgLyogZml4IHVwIG1peGVkLWNhc2UgYXR0cmlidXRlIG5hbWVzICovXG4gICAgICBrZXkgPSBmb3JlaWduTmFtZXMuYXR0cmlidXRlTmFtZXNba2V5XSB8fCBrZXk7XG4gICAgfVxuICAgIG91dHB1dCArPSBrZXk7XG4gICAgaWYgKCh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycpIHx8IG9wdHMueG1sTW9kZSkge1xuICAgICAgb3V0cHV0ICs9XG4gICAgICAgICc9XCInICtcbiAgICAgICAgKG9wdHMuZGVjb2RlRW50aXRpZXNcbiAgICAgICAgICA/IGVudGl0aWVzLmVuY29kZVhNTCh2YWx1ZSlcbiAgICAgICAgICA6IHZhbHVlLnJlcGxhY2UoL1xcXCIvZywgJyZxdW90OycpKSArXG4gICAgICAgICdcIic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLypcbiAgU2VsZi1lbmNsb3NpbmcgdGFncyAoc3RvbGVuIGZyb20gbm9kZS1odG1scGFyc2VyKVxuKi9cbnZhciBzaW5nbGVUYWcgPSB7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgYXJlYTogdHJ1ZSxcbiAgYmFzZTogdHJ1ZSxcbiAgYmFzZWZvbnQ6IHRydWUsXG4gIGJyOiB0cnVlLFxuICBjb2w6IHRydWUsXG4gIGNvbW1hbmQ6IHRydWUsXG4gIGVtYmVkOiB0cnVlLFxuICBmcmFtZTogdHJ1ZSxcbiAgaHI6IHRydWUsXG4gIGltZzogdHJ1ZSxcbiAgaW5wdXQ6IHRydWUsXG4gIGlzaW5kZXg6IHRydWUsXG4gIGtleWdlbjogdHJ1ZSxcbiAgbGluazogdHJ1ZSxcbiAgbWV0YTogdHJ1ZSxcbiAgcGFyYW06IHRydWUsXG4gIHNvdXJjZTogdHJ1ZSxcbiAgdHJhY2s6IHRydWUsXG4gIHdicjogdHJ1ZVxufTtcblxudmFyIHJlbmRlciA9IChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbSwgb3B0cykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZG9tKSAmJiAhZG9tLmNoZWVyaW8pIGRvbSA9IFtkb21dO1xuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICB2YXIgb3V0cHV0ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb20ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxlbSA9IGRvbVtpXTtcblxuICAgIGlmIChlbGVtLnR5cGUgPT09ICdyb290Jykgb3V0cHV0ICs9IHJlbmRlcihlbGVtLmNoaWxkcmVuLCBvcHRzKTtcbiAgICBlbHNlIGlmIChFbGVtZW50VHlwZS5pc1RhZyhlbGVtKSkgb3V0cHV0ICs9IHJlbmRlclRhZyhlbGVtLCBvcHRzKTtcbiAgICBlbHNlIGlmIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLkRpcmVjdGl2ZSlcbiAgICAgIG91dHB1dCArPSByZW5kZXJEaXJlY3RpdmUoZWxlbSk7XG4gICAgZWxzZSBpZiAoZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5Db21tZW50KSBvdXRwdXQgKz0gcmVuZGVyQ29tbWVudChlbGVtKTtcbiAgICBlbHNlIGlmIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLkNEQVRBKSBvdXRwdXQgKz0gcmVuZGVyQ2RhdGEoZWxlbSk7XG4gICAgZWxzZSBvdXRwdXQgKz0gcmVuZGVyVGV4dChlbGVtLCBvcHRzKTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59KTtcblxudmFyIGZvcmVpZ25Nb2RlSW50ZWdyYXRpb25Qb2ludHMgPSBbXG4gICdtaScsXG4gICdtbycsXG4gICdtbicsXG4gICdtcycsXG4gICdtdGV4dCcsXG4gICdhbm5vdGF0aW9uLXhtbCcsXG4gICdmb3JlaWduT2JqZWN0JyxcbiAgJ2Rlc2MnLFxuICAndGl0bGUnXG5dO1xuXG5mdW5jdGlvbiByZW5kZXJUYWcoZWxlbSwgb3B0cykge1xuICAvLyBIYW5kbGUgU1ZHIC8gTWF0aE1MIGluIEhUTUxcbiAgaWYgKG9wdHMueG1sTW9kZSA9PT0gJ2ZvcmVpZ24nKSB7XG4gICAgLyogZml4IHVwIG1peGVkLWNhc2UgZWxlbWVudCBuYW1lcyAqL1xuICAgIGVsZW0ubmFtZSA9IGZvcmVpZ25OYW1lcy5lbGVtZW50TmFtZXNbZWxlbS5uYW1lXSB8fCBlbGVtLm5hbWU7XG4gICAgLyogZXhpdCBmb3JlaWduIG1vZGUgYXQgaW50ZWdyYXRpb24gcG9pbnRzICovXG4gICAgaWYgKFxuICAgICAgZWxlbS5wYXJlbnQgJiZcbiAgICAgIGZvcmVpZ25Nb2RlSW50ZWdyYXRpb25Qb2ludHMuaW5kZXhPZihlbGVtLnBhcmVudC5uYW1lKSA+PSAwXG4gICAgKVxuICAgICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMsIHsgeG1sTW9kZTogZmFsc2UgfSk7XG4gIH1cbiAgaWYgKCFvcHRzLnhtbE1vZGUgJiYgWydzdmcnLCAnbWF0aCddLmluZGV4T2YoZWxlbS5uYW1lKSA+PSAwKSB7XG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMsIHsgeG1sTW9kZTogJ2ZvcmVpZ24nIH0pO1xuICB9XG5cbiAgdmFyIHRhZyA9ICc8JyArIGVsZW0ubmFtZTtcbiAgdmFyIGF0dHJpYnMgPSBmb3JtYXRBdHRycyhlbGVtLmF0dHJpYnMsIG9wdHMpO1xuXG4gIGlmIChhdHRyaWJzKSB7XG4gICAgdGFnICs9ICcgJyArIGF0dHJpYnM7XG4gIH1cblxuICBpZiAob3B0cy54bWxNb2RlICYmICghZWxlbS5jaGlsZHJlbiB8fCBlbGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkpIHtcbiAgICB0YWcgKz0gJy8+JztcbiAgfSBlbHNlIHtcbiAgICB0YWcgKz0gJz4nO1xuICAgIGlmIChlbGVtLmNoaWxkcmVuKSB7XG4gICAgICB0YWcgKz0gcmVuZGVyKGVsZW0uY2hpbGRyZW4sIG9wdHMpO1xuICAgIH1cblxuICAgIGlmICghc2luZ2xlVGFnW2VsZW0ubmFtZV0gfHwgb3B0cy54bWxNb2RlKSB7XG4gICAgICB0YWcgKz0gJzwvJyArIGVsZW0ubmFtZSArICc+JztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFnO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEaXJlY3RpdmUoZWxlbSkge1xuICByZXR1cm4gJzwnICsgZWxlbS5kYXRhICsgJz4nO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUZXh0KGVsZW0sIG9wdHMpIHtcbiAgdmFyIGRhdGEgPSBlbGVtLmRhdGEgfHwgJyc7XG5cbiAgLy8gaWYgZW50aXRpZXMgd2VyZW4ndCBkZWNvZGVkLCBubyBuZWVkIHRvIGVuY29kZSB0aGVtIGJhY2tcbiAgaWYgKFxuICAgIG9wdHMuZGVjb2RlRW50aXRpZXMgJiZcbiAgICAhKGVsZW0ucGFyZW50ICYmIGVsZW0ucGFyZW50Lm5hbWUgaW4gdW5lbmNvZGVkRWxlbWVudHMpXG4gICkge1xuICAgIGRhdGEgPSBlbnRpdGllcy5lbmNvZGVYTUwoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ2RhdGEoZWxlbSkge1xuICByZXR1cm4gJzwhW0NEQVRBWycgKyBlbGVtLmNoaWxkcmVuWzBdLmRhdGEgKyAnXV0+Jztcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29tbWVudChlbGVtKSB7XG4gIHJldHVybiAnPCEtLScgKyBlbGVtLmRhdGEgKyAnLS0+Jztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Eb2N0eXBlID0gZXhwb3J0cy5DREFUQSA9IGV4cG9ydHMuVGFnID0gZXhwb3J0cy5TdHlsZSA9IGV4cG9ydHMuU2NyaXB0ID0gZXhwb3J0cy5Db21tZW50ID0gZXhwb3J0cy5EaXJlY3RpdmUgPSBleHBvcnRzLlRleHQgPSBleHBvcnRzLlJvb3QgPSBleHBvcnRzLmlzVGFnID0gZXhwb3J0cy5FbGVtZW50VHlwZSA9IHZvaWQgMDtcbi8qKiBUeXBlcyBvZiBlbGVtZW50cyBmb3VuZCBpbiBodG1scGFyc2VyMidzIERPTSAqL1xudmFyIEVsZW1lbnRUeXBlO1xuKGZ1bmN0aW9uIChFbGVtZW50VHlwZSkge1xuICAgIC8qKiBUeXBlIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIGEgZG9jdW1lbnQgKi9cbiAgICBFbGVtZW50VHlwZVtcIlJvb3RcIl0gPSBcInJvb3RcIjtcbiAgICAvKiogVHlwZSBmb3IgVGV4dCAqL1xuICAgIEVsZW1lbnRUeXBlW1wiVGV4dFwiXSA9IFwidGV4dFwiO1xuICAgIC8qKiBUeXBlIGZvciA8PyAuLi4gPz4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkRpcmVjdGl2ZVwiXSA9IFwiZGlyZWN0aXZlXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhLS0gLi4uIC0tPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiQ29tbWVudFwiXSA9IFwiY29tbWVudFwiO1xuICAgIC8qKiBUeXBlIGZvciA8c2NyaXB0PiB0YWdzICovXG4gICAgRWxlbWVudFR5cGVbXCJTY3JpcHRcIl0gPSBcInNjcmlwdFwiO1xuICAgIC8qKiBUeXBlIGZvciA8c3R5bGU+IHRhZ3MgKi9cbiAgICBFbGVtZW50VHlwZVtcIlN0eWxlXCJdID0gXCJzdHlsZVwiO1xuICAgIC8qKiBUeXBlIGZvciBBbnkgdGFnICovXG4gICAgRWxlbWVudFR5cGVbXCJUYWdcIl0gPSBcInRhZ1wiO1xuICAgIC8qKiBUeXBlIGZvciA8IVtDREFUQVsgLi4uIF1dPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiQ0RBVEFcIl0gPSBcImNkYXRhXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhZG9jdHlwZSAuLi4+ICovXG4gICAgRWxlbWVudFR5cGVbXCJEb2N0eXBlXCJdID0gXCJkb2N0eXBlXCI7XG59KShFbGVtZW50VHlwZSA9IGV4cG9ydHMuRWxlbWVudFR5cGUgfHwgKGV4cG9ydHMuRWxlbWVudFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYSB0YWcgb3Igbm90LlxuICpcbiAqIEBwYXJhbSBlbGVtIEVsZW1lbnQgdG8gdGVzdFxuICovXG5mdW5jdGlvbiBpc1RhZyhlbGVtKSB7XG4gICAgcmV0dXJuIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlRhZyB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlNjcmlwdCB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlN0eWxlKTtcbn1cbmV4cG9ydHMuaXNUYWcgPSBpc1RhZztcbi8vIEV4cG9ydHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4vKiogVHlwZSBmb3IgdGhlIHJvb3QgZWxlbWVudCBvZiBhIGRvY3VtZW50ICovXG5leHBvcnRzLlJvb3QgPSBFbGVtZW50VHlwZS5Sb290O1xuLyoqIFR5cGUgZm9yIFRleHQgKi9cbmV4cG9ydHMuVGV4dCA9IEVsZW1lbnRUeXBlLlRleHQ7XG4vKiogVHlwZSBmb3IgPD8gLi4uID8+ICovXG5leHBvcnRzLkRpcmVjdGl2ZSA9IEVsZW1lbnRUeXBlLkRpcmVjdGl2ZTtcbi8qKiBUeXBlIGZvciA8IS0tIC4uLiAtLT4gKi9cbmV4cG9ydHMuQ29tbWVudCA9IEVsZW1lbnRUeXBlLkNvbW1lbnQ7XG4vKiogVHlwZSBmb3IgPHNjcmlwdD4gdGFncyAqL1xuZXhwb3J0cy5TY3JpcHQgPSBFbGVtZW50VHlwZS5TY3JpcHQ7XG4vKiogVHlwZSBmb3IgPHN0eWxlPiB0YWdzICovXG5leHBvcnRzLlN0eWxlID0gRWxlbWVudFR5cGUuU3R5bGU7XG4vKiogVHlwZSBmb3IgQW55IHRhZyAqL1xuZXhwb3J0cy5UYWcgPSBFbGVtZW50VHlwZS5UYWc7XG4vKiogVHlwZSBmb3IgPCFbQ0RBVEFbIC4uLiBdXT4gKi9cbmV4cG9ydHMuQ0RBVEEgPSBFbGVtZW50VHlwZS5DREFUQTtcbi8qKiBUeXBlIGZvciA8IWRvY3R5cGUgLi4uPiAqL1xuZXhwb3J0cy5Eb2N0eXBlID0gRWxlbWVudFR5cGUuRG9jdHlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWNvZGVIVE1MID0gZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVYTUwgPSB2b2lkIDA7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgbGVnYWN5X2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2xlZ2FjeS5qc29uXCIpKTtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMveG1sLmpzb25cIikpO1xudmFyIGRlY29kZV9jb2RlcG9pbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kZWNvZGVfY29kZXBvaW50XCIpKTtcbnZhciBzdHJpY3RFbnRpdHlSZSA9IC8mKD86W2EtekEtWjAtOV0rfCNbeFhdW1xcZGEtZkEtRl0rfCNcXGQrKTsvZztcbmV4cG9ydHMuZGVjb2RlWE1MID0gZ2V0U3RyaWN0RGVjb2Rlcih4bWxfanNvbl8xLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZ2V0U3RyaWN0RGVjb2RlcihlbnRpdGllc19qc29uXzEuZGVmYXVsdCk7XG5mdW5jdGlvbiBnZXRTdHJpY3REZWNvZGVyKG1hcCkge1xuICAgIHZhciByZXBsYWNlID0gZ2V0UmVwbGFjZXIobWFwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShzdHJpY3RFbnRpdHlSZSwgcmVwbGFjZSk7IH07XG59XG52YXIgc29ydGVyID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIChhIDwgYiA/IDEgOiAtMSk7IH07XG5leHBvcnRzLmRlY29kZUhUTUwgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWdhY3kgPSBPYmplY3Qua2V5cyhsZWdhY3lfanNvbl8xLmRlZmF1bHQpLnNvcnQoc29ydGVyKTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KS5zb3J0KHNvcnRlcik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGVnYWN5W2pdID09PSBrZXlzW2ldKSB7XG4gICAgICAgICAgICBrZXlzW2ldICs9IFwiOz9cIjtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGtleXNbaV0gKz0gXCI7XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIiYoPzpcIiArIGtleXMuam9pbihcInxcIikgKyBcInwjW3hYXVtcXFxcZGEtZkEtRl0rOz98I1xcXFxkKzs/KVwiLCBcImdcIik7XG4gICAgdmFyIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihlbnRpdGllc19qc29uXzEuZGVmYXVsdCk7XG4gICAgZnVuY3Rpb24gcmVwbGFjZXIoc3RyKSB7XG4gICAgICAgIGlmIChzdHIuc3Vic3RyKC0xKSAhPT0gXCI7XCIpXG4gICAgICAgICAgICBzdHIgKz0gXCI7XCI7XG4gICAgICAgIHJldHVybiByZXBsYWNlKHN0cik7XG4gICAgfVxuICAgIC8vIFRPRE8gY29uc2lkZXIgY3JlYXRpbmcgYSBtZXJnZWQgbWFwXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UocmUsIHJlcGxhY2VyKTsgfTtcbn0pKCk7XG5mdW5jdGlvbiBnZXRSZXBsYWNlcihtYXApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShzdHIpIHtcbiAgICAgICAgaWYgKHN0ci5jaGFyQXQoMSkgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICB2YXIgc2Vjb25kQ2hhciA9IHN0ci5jaGFyQXQoMik7XG4gICAgICAgICAgICBpZiAoc2Vjb25kQ2hhciA9PT0gXCJYXCIgfHwgc2Vjb25kQ2hhciA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlX2NvZGVwb2ludF8xLmRlZmF1bHQocGFyc2VJbnQoc3RyLnN1YnN0cigzKSwgMTYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVfY29kZXBvaW50XzEuZGVmYXVsdChwYXJzZUludChzdHIuc3Vic3RyKDIpLCAxMCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLW51bGxpc2gtY29hbGVzY2luZ1xuICAgICAgICByZXR1cm4gbWFwW3N0ci5zbGljZSgxLCAtMSldIHx8IHN0cjtcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGVjb2RlX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2RlY29kZS5qc29uXCIpKTtcbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9oZS9ibG9iL21hc3Rlci9zcmMvaGUuanMjTDk0LUwxMTlcbnZhciBmcm9tQ29kZVBvaW50ID0gXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LWNvbmRpdGlvblxuU3RyaW5nLmZyb21Db2RlUG9pbnQgfHxcbiAgICBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhmZmZmKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+PiAxMCkgJiAweDNmZikgfCAweGQ4MDApO1xuICAgICAgICAgICAgY29kZVBvaW50ID0gMHhkYzAwIHwgKGNvZGVQb2ludCAmIDB4M2ZmKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnQoY29kZVBvaW50KSB7XG4gICAgaWYgKChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRmZmYpIHx8IGNvZGVQb2ludCA+IDB4MTBmZmZmKSB7XG4gICAgICAgIHJldHVybiBcIlxcdUZGRkRcIjtcbiAgICB9XG4gICAgaWYgKGNvZGVQb2ludCBpbiBkZWNvZGVfanNvbl8xLmRlZmF1bHQpIHtcbiAgICAgICAgY29kZVBvaW50ID0gZGVjb2RlX2pzb25fMS5kZWZhdWx0W2NvZGVQb2ludF07XG4gICAgfVxuICAgIHJldHVybiBmcm9tQ29kZVBvaW50KGNvZGVQb2ludCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWNvZGVDb2RlUG9pbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXNjYXBlVVRGOCA9IGV4cG9ydHMuZXNjYXBlID0gZXhwb3J0cy5lbmNvZGVOb25Bc2NpaUhUTUwgPSBleHBvcnRzLmVuY29kZUhUTUwgPSBleHBvcnRzLmVuY29kZVhNTCA9IHZvaWQgMDtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMveG1sLmpzb25cIikpO1xudmFyIGludmVyc2VYTUwgPSBnZXRJbnZlcnNlT2JqKHhtbF9qc29uXzEuZGVmYXVsdCk7XG52YXIgeG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZVhNTCk7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTFxuICogZG9jdW1lbnRzIHVzaW5nIFhNTCBlbnRpdGllcy5cbiAqXG4gKiBJZiBhIGNoYXJhY3RlciBoYXMgbm8gZXF1aXZhbGVudCBlbnRpdHksIGFcbiAqIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApIHdpbGwgYmUgdXNlZC5cbiAqL1xuZXhwb3J0cy5lbmNvZGVYTUwgPSBnZXRBU0NJSUVuY29kZXIoaW52ZXJzZVhNTCk7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgaW52ZXJzZUhUTUwgPSBnZXRJbnZlcnNlT2JqKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbnZhciBodG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZUhUTUwpO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBlbnRpdGllcyBhbmQgbm9uLUFTQ0lJIGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICpcbiAqIFRoaXMgaW5jbHVkZXMgY2hhcmFjdGVycyB0aGF0IGFyZSB2YWxpZCBBU0NJSSBjaGFyYWN0ZXJzIGluIEhUTUwgZG9jdW1lbnRzLlxuICogRm9yIGV4YW1wbGUgYCNgIHdpbGwgYmUgZW5jb2RlZCBhcyBgJm51bTtgLiBUbyBnZXQgYSBtb3JlIGNvbXBhY3Qgb3V0cHV0LFxuICogY29uc2lkZXIgdXNpbmcgdGhlIGBlbmNvZGVOb25Bc2NpaUhUTUxgIGZ1bmN0aW9uLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYVxuICogbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnRzLmVuY29kZUhUTUwgPSBnZXRJbnZlcnNlKGludmVyc2VIVE1MLCBodG1sUmVwbGFjZXIpO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycywgYXMgd2VsbCBhcyBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBIVE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgSFRNTCBlbnRpdGllcy5cbiAqXG4gKiBJZiBhIGNoYXJhY3RlciBoYXMgbm8gZXF1aXZhbGVudCBlbnRpdHksIGFcbiAqIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApIHdpbGwgYmUgdXNlZC5cbiAqL1xuZXhwb3J0cy5lbmNvZGVOb25Bc2NpaUhUTUwgPSBnZXRBU0NJSUVuY29kZXIoaW52ZXJzZUhUTUwpO1xuZnVuY3Rpb24gZ2V0SW52ZXJzZU9iaihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAuc29ydCgpXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGludmVyc2UsIG5hbWUpIHtcbiAgICAgICAgaW52ZXJzZVtvYmpbbmFtZV1dID0gXCImXCIgKyBuYW1lICsgXCI7XCI7XG4gICAgICAgIHJldHVybiBpbnZlcnNlO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlKSB7XG4gICAgdmFyIHNpbmdsZSA9IFtdO1xuICAgIHZhciBtdWx0aXBsZSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhpbnZlcnNlKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGsgPSBfYVtfaV07XG4gICAgICAgIGlmIChrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gQWRkIHZhbHVlIHRvIHNpbmdsZSBhcnJheVxuICAgICAgICAgICAgc2luZ2xlLnB1c2goXCJcXFxcXCIgKyBrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZCB2YWx1ZSB0byBtdWx0aXBsZSBhcnJheVxuICAgICAgICAgICAgbXVsdGlwbGUucHVzaChrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgcmFuZ2VzIHRvIHNpbmdsZSBjaGFyYWN0ZXJzLlxuICAgIHNpbmdsZS5zb3J0KCk7XG4gICAgZm9yICh2YXIgc3RhcnQgPSAwOyBzdGFydCA8IHNpbmdsZS5sZW5ndGggLSAxOyBzdGFydCsrKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIGVuZCBvZiBhIHJ1biBvZiBjaGFyYWN0ZXJzXG4gICAgICAgIHZhciBlbmQgPSBzdGFydDtcbiAgICAgICAgd2hpbGUgKGVuZCA8IHNpbmdsZS5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICBzaW5nbGVbZW5kXS5jaGFyQ29kZUF0KDEpICsgMSA9PT0gc2luZ2xlW2VuZCArIDFdLmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgICAgIGVuZCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb3VudCA9IDEgKyBlbmQgLSBzdGFydDtcbiAgICAgICAgLy8gV2Ugd2FudCB0byByZXBsYWNlIGF0IGxlYXN0IHRocmVlIGNoYXJhY3RlcnNcbiAgICAgICAgaWYgKGNvdW50IDwgMylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzaW5nbGUuc3BsaWNlKHN0YXJ0LCBjb3VudCwgc2luZ2xlW3N0YXJ0XSArIFwiLVwiICsgc2luZ2xlW2VuZF0pO1xuICAgIH1cbiAgICBtdWx0aXBsZS51bnNoaWZ0KFwiW1wiICsgc2luZ2xlLmpvaW4oXCJcIikgKyBcIl1cIik7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAobXVsdGlwbGUuam9pbihcInxcIiksIFwiZ1wiKTtcbn1cbi8vIC9bXlxcMC1cXHg3Rl0vZ3VcbnZhciByZU5vbkFTQ0lJID0gLyg/OltcXHg4MC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKS9nO1xudmFyIGdldENvZGVQb2ludCA9IFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS1jb25kaXRpb25cblN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQgIT0gbnVsbFxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyLmNvZGVQb2ludEF0KDApOyB9XG4gICAgOiAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIChjLmNoYXJDb2RlQXQoMCkgLSAweGQ4MDApICogMHg0MDAgK1xuICAgICAgICAgICAgICAgIGMuY2hhckNvZGVBdCgxKSAtXG4gICAgICAgICAgICAgICAgMHhkYzAwICtcbiAgICAgICAgICAgICAgICAweDEwMDAwO1xuICAgICAgICB9O1xuZnVuY3Rpb24gc2luZ2xlQ2hhclJlcGxhY2VyKGMpIHtcbiAgICByZXR1cm4gXCImI3hcIiArIChjLmxlbmd0aCA+IDEgPyBnZXRDb2RlUG9pbnQoYykgOiBjLmNoYXJDb2RlQXQoMCkpXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2UoaW52ZXJzZSwgcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gaW52ZXJzZVtuYW1lXTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlTm9uQVNDSUksIHNpbmdsZUNoYXJSZXBsYWNlcik7XG4gICAgfTtcbn1cbnZhciByZUVzY2FwZUNoYXJzID0gbmV3IFJlZ0V4cCh4bWxSZXBsYWNlci5zb3VyY2UgKyBcInxcIiArIHJlTm9uQVNDSUkuc291cmNlLCBcImdcIik7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTFxuICogZG9jdW1lbnRzIHVzaW5nIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApLlxuICpcbiAqIEhhdmUgYSBsb29rIGF0IGBlc2NhcGVVVEY4YCBpZiB5b3Ugd2FudCBhIG1vcmUgY29uY2lzZSBvdXRwdXQgYXQgdGhlIGV4cGVuc2VcbiAqIG9mIHJlZHVjZWQgdHJhbnNwb3J0YWJpbGl0eS5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZXNjYXBlLlxuICovXG5mdW5jdGlvbiBlc2NhcGUoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UocmVFc2NhcGVDaGFycywgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbn1cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBYTUwgZG9jdW1lbnRzIHVzaW5nIG51bWVyaWMgaGV4YWRlY2ltYWxcbiAqIHJlZmVyZW5jZSAoZWcuIGAmI3hmYztgKS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIG91dHB1dCB3aWxsIGJlIGNoYXJhY3Rlci1zZXQgZGVwZW5kZW50LlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBlc2NhcGUuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVVURjgoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UoeG1sUmVwbGFjZXIsIHNpbmdsZUNoYXJSZXBsYWNlcik7XG59XG5leHBvcnRzLmVzY2FwZVVURjggPSBlc2NhcGVVVEY4O1xuZnVuY3Rpb24gZ2V0QVNDSUlFbmNvZGVyKG9iaikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5yZXBsYWNlKHJlRXNjYXBlQ2hhcnMsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBvYmpbY10gfHwgc2luZ2xlQ2hhclJlcGxhY2VyKGMpOyB9KTtcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlY29kZVhNTFN0cmljdCA9IGV4cG9ydHMuZGVjb2RlSFRNTDVTdHJpY3QgPSBleHBvcnRzLmRlY29kZUhUTUw0U3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVIVE1MNSA9IGV4cG9ydHMuZGVjb2RlSFRNTDQgPSBleHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBleHBvcnRzLmRlY29kZUhUTUwgPSBleHBvcnRzLmRlY29kZVhNTCA9IGV4cG9ydHMuZW5jb2RlSFRNTDUgPSBleHBvcnRzLmVuY29kZUhUTUw0ID0gZXhwb3J0cy5lc2NhcGVVVEY4ID0gZXhwb3J0cy5lc2NhcGUgPSBleHBvcnRzLmVuY29kZU5vbkFzY2lpSFRNTCA9IGV4cG9ydHMuZW5jb2RlSFRNTCA9IGV4cG9ydHMuZW5jb2RlWE1MID0gZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLmRlY29kZVN0cmljdCA9IGV4cG9ydHMuZGVjb2RlID0gdm9pZCAwO1xudmFyIGRlY29kZV8xID0gcmVxdWlyZShcIi4vZGVjb2RlXCIpO1xudmFyIGVuY29kZV8xID0gcmVxdWlyZShcIi4vZW5jb2RlXCIpO1xuLyoqXG4gKiBEZWNvZGVzIGEgc3RyaW5nIHdpdGggZW50aXRpZXMuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGRlY29kZS5cbiAqIEBwYXJhbSBsZXZlbCBPcHRpb25hbCBsZXZlbCB0byBkZWNvZGUgYXQuIDAgPSBYTUwsIDEgPSBIVE1MLiBEZWZhdWx0IGlzIDAuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGRlY29kZVhNTGAgb3IgYGRlY29kZUhUTUxgIGRpcmVjdGx5LlxuICovXG5mdW5jdGlvbiBkZWNvZGUoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZGVjb2RlXzEuZGVjb2RlWE1MIDogZGVjb2RlXzEuZGVjb2RlSFRNTCkoZGF0YSk7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbi8qKlxuICogRGVjb2RlcyBhIHN0cmluZyB3aXRoIGVudGl0aWVzLiBEb2VzIG5vdCBhbGxvdyBtaXNzaW5nIHRyYWlsaW5nIHNlbWljb2xvbnMgZm9yIGVudGl0aWVzLlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBkZWNvZGUuXG4gKiBAcGFyYW0gbGV2ZWwgT3B0aW9uYWwgbGV2ZWwgdG8gZGVjb2RlIGF0LiAwID0gWE1MLCAxID0gSFRNTC4gRGVmYXVsdCBpcyAwLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBkZWNvZGVIVE1MU3RyaWN0YCBvciBgZGVjb2RlWE1MYCBkaXJlY3RseS5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlU3RyaWN0KGRhdGEsIGxldmVsKSB7XG4gICAgcmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZV8xLmRlY29kZVhNTCA6IGRlY29kZV8xLmRlY29kZUhUTUxTdHJpY3QpKGRhdGEpO1xufVxuZXhwb3J0cy5kZWNvZGVTdHJpY3QgPSBkZWNvZGVTdHJpY3Q7XG4vKipcbiAqIEVuY29kZXMgYSBzdHJpbmcgd2l0aCBlbnRpdGllcy5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZW5jb2RlLlxuICogQHBhcmFtIGxldmVsIE9wdGlvbmFsIGxldmVsIHRvIGVuY29kZSBhdC4gMCA9IFhNTCwgMSA9IEhUTUwuIERlZmF1bHQgaXMgMC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgZW5jb2RlSFRNTGAsIGBlbmNvZGVYTUxgIG9yIGBlbmNvZGVOb25Bc2NpaUhUTUxgIGRpcmVjdGx5LlxuICovXG5mdW5jdGlvbiBlbmNvZGUoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZW5jb2RlXzEuZW5jb2RlWE1MIDogZW5jb2RlXzEuZW5jb2RlSFRNTCkoZGF0YSk7XG59XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbnZhciBlbmNvZGVfMiA9IHJlcXVpcmUoXCIuL2VuY29kZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZVhNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlWE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlSFRNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZU5vbkFzY2lpSFRNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlTm9uQXNjaWlIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXNjYXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lc2NhcGU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlc2NhcGVVVEY4XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lc2NhcGVVVEY4OyB9IH0pO1xuLy8gTGVnYWN5IGFsaWFzZXMgKGRlcHJlY2F0ZWQpXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbmNvZGVIVE1MNFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZUhUTUw1XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVIVE1MOyB9IH0pO1xudmFyIGRlY29kZV8yID0gcmVxdWlyZShcIi4vZGVjb2RlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlWE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVYTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTFN0cmljdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTFN0cmljdDsgfSB9KTtcbi8vIExlZ2FjeSBhbGlhc2VzIChkZXByZWNhdGVkKVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTDRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MNVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUw0U3RyaWN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MU3RyaWN0OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTDVTdHJpY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUxTdHJpY3Q7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVYTUxTdHJpY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZVhNTDsgfSB9KTtcbiIsIi8vVHlwZXMgb2YgZWxlbWVudHMgZm91bmQgaW4gdGhlIERPTVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFRleHQ6IFwidGV4dFwiLCAvL1RleHRcblx0RGlyZWN0aXZlOiBcImRpcmVjdGl2ZVwiLCAvLzw/IC4uLiA/PlxuXHRDb21tZW50OiBcImNvbW1lbnRcIiwgLy88IS0tIC4uLiAtLT5cblx0U2NyaXB0OiBcInNjcmlwdFwiLCAvLzxzY3JpcHQ+IHRhZ3Ncblx0U3R5bGU6IFwic3R5bGVcIiwgLy88c3R5bGU+IHRhZ3Ncblx0VGFnOiBcInRhZ1wiLCAvL0FueSB0YWdcblx0Q0RBVEE6IFwiY2RhdGFcIiwgLy88IVtDREFUQVsgLi4uIF1dPlxuXHREb2N0eXBlOiBcImRvY3R5cGVcIixcblxuXHRpc1RhZzogZnVuY3Rpb24oZWxlbSl7XG5cdFx0cmV0dXJuIGVsZW0udHlwZSA9PT0gXCJ0YWdcIiB8fCBlbGVtLnR5cGUgPT09IFwic2NyaXB0XCIgfHwgZWxlbS50eXBlID09PSBcInN0eWxlXCI7XG5cdH1cbn07XG4iLCJ2YXIgRWxlbWVudFR5cGUgPSByZXF1aXJlKFwiZG9tZWxlbWVudHR5cGVcIik7XG5cbnZhciByZV93aGl0ZXNwYWNlID0gL1xccysvZztcbnZhciBOb2RlUHJvdG90eXBlID0gcmVxdWlyZShcIi4vbGliL25vZGVcIik7XG52YXIgRWxlbWVudFByb3RvdHlwZSA9IHJlcXVpcmUoXCIuL2xpYi9lbGVtZW50XCIpO1xuXG5mdW5jdGlvbiBEb21IYW5kbGVyKGNhbGxiYWNrLCBvcHRpb25zLCBlbGVtZW50Q0Ipe1xuXHRpZih0eXBlb2YgY2FsbGJhY2sgPT09IFwib2JqZWN0XCIpe1xuXHRcdGVsZW1lbnRDQiA9IG9wdGlvbnM7XG5cdFx0b3B0aW9ucyA9IGNhbGxiYWNrO1xuXHRcdGNhbGxiYWNrID0gbnVsbDtcblx0fSBlbHNlIGlmKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpe1xuXHRcdGVsZW1lbnRDQiA9IG9wdGlvbnM7XG5cdFx0b3B0aW9ucyA9IGRlZmF1bHRPcHRzO1xuXHR9XG5cdHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG5cdHRoaXMuX29wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRPcHRzO1xuXHR0aGlzLl9lbGVtZW50Q0IgPSBlbGVtZW50Q0I7XG5cdHRoaXMuZG9tID0gW107XG5cdHRoaXMuX2RvbmUgPSBmYWxzZTtcblx0dGhpcy5fdGFnU3RhY2sgPSBbXTtcblx0dGhpcy5fcGFyc2VyID0gdGhpcy5fcGFyc2VyIHx8IG51bGw7XG59XG5cbi8vZGVmYXVsdCBvcHRpb25zXG52YXIgZGVmYXVsdE9wdHMgPSB7XG5cdG5vcm1hbGl6ZVdoaXRlc3BhY2U6IGZhbHNlLCAvL1JlcGxhY2UgYWxsIHdoaXRlc3BhY2Ugd2l0aCBzaW5nbGUgc3BhY2VzXG5cdHdpdGhTdGFydEluZGljZXM6IGZhbHNlLCAvL0FkZCBzdGFydEluZGV4IHByb3BlcnRpZXMgdG8gbm9kZXNcblx0d2l0aEVuZEluZGljZXM6IGZhbHNlLCAvL0FkZCBlbmRJbmRleCBwcm9wZXJ0aWVzIHRvIG5vZGVzXG59O1xuXG5Eb21IYW5kbGVyLnByb3RvdHlwZS5vbnBhcnNlcmluaXQgPSBmdW5jdGlvbihwYXJzZXIpe1xuXHR0aGlzLl9wYXJzZXIgPSBwYXJzZXI7XG59O1xuXG4vL1Jlc2V0cyB0aGUgaGFuZGxlciBiYWNrIHRvIHN0YXJ0aW5nIHN0YXRlXG5Eb21IYW5kbGVyLnByb3RvdHlwZS5vbnJlc2V0ID0gZnVuY3Rpb24oKXtcblx0RG9tSGFuZGxlci5jYWxsKHRoaXMsIHRoaXMuX2NhbGxiYWNrLCB0aGlzLl9vcHRpb25zLCB0aGlzLl9lbGVtZW50Q0IpO1xufTtcblxuLy9TaWduYWxzIHRoZSBoYW5kbGVyIHRoYXQgcGFyc2luZyBpcyBkb25lXG5Eb21IYW5kbGVyLnByb3RvdHlwZS5vbmVuZCA9IGZ1bmN0aW9uKCl7XG5cdGlmKHRoaXMuX2RvbmUpIHJldHVybjtcblx0dGhpcy5fZG9uZSA9IHRydWU7XG5cdHRoaXMuX3BhcnNlciA9IG51bGw7XG5cdHRoaXMuX2hhbmRsZUNhbGxiYWNrKG51bGwpO1xufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUuX2hhbmRsZUNhbGxiYWNrID1cbkRvbUhhbmRsZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbihlcnJvcil7XG5cdGlmKHR5cGVvZiB0aGlzLl9jYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKXtcblx0XHR0aGlzLl9jYWxsYmFjayhlcnJvciwgdGhpcy5kb20pO1xuXHR9IGVsc2Uge1xuXHRcdGlmKGVycm9yKSB0aHJvdyBlcnJvcjtcblx0fVxufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUub25jbG9zZXRhZyA9IGZ1bmN0aW9uKCl7XG5cdC8vaWYodGhpcy5fdGFnU3RhY2sucG9wKCkubmFtZSAhPT0gbmFtZSkgdGhpcy5faGFuZGxlQ2FsbGJhY2soRXJyb3IoXCJUYWduYW1lIGRpZG4ndCBtYXRjaCFcIikpO1xuXHRcblx0dmFyIGVsZW0gPSB0aGlzLl90YWdTdGFjay5wb3AoKTtcblxuXHRpZih0aGlzLl9vcHRpb25zLndpdGhFbmRJbmRpY2VzICYmIGVsZW0pe1xuXHRcdGVsZW0uZW5kSW5kZXggPSB0aGlzLl9wYXJzZXIuZW5kSW5kZXg7XG5cdH1cblxuXHRpZih0aGlzLl9lbGVtZW50Q0IpIHRoaXMuX2VsZW1lbnRDQihlbGVtKTtcbn07XG5cbkRvbUhhbmRsZXIucHJvdG90eXBlLl9jcmVhdGVEb21FbGVtZW50ID0gZnVuY3Rpb24ocHJvcGVydGllcyl7XG5cdGlmICghdGhpcy5fb3B0aW9ucy53aXRoRG9tTHZsMSkgcmV0dXJuIHByb3BlcnRpZXM7XG5cblx0dmFyIGVsZW1lbnQ7XG5cdGlmIChwcm9wZXJ0aWVzLnR5cGUgPT09IFwidGFnXCIpIHtcblx0XHRlbGVtZW50ID0gT2JqZWN0LmNyZWF0ZShFbGVtZW50UHJvdG90eXBlKTtcblx0fSBlbHNlIHtcblx0XHRlbGVtZW50ID0gT2JqZWN0LmNyZWF0ZShOb2RlUHJvdG90eXBlKTtcblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiBwcm9wZXJ0aWVzKSB7XG5cdFx0aWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0ZWxlbWVudFtrZXldID0gcHJvcGVydGllc1trZXldO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtZW50O1xufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUuX2FkZERvbUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KXtcblx0dmFyIHBhcmVudCA9IHRoaXMuX3RhZ1N0YWNrW3RoaXMuX3RhZ1N0YWNrLmxlbmd0aCAtIDFdO1xuXHR2YXIgc2libGluZ3MgPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4gOiB0aGlzLmRvbTtcblx0dmFyIHByZXZpb3VzU2libGluZyA9IHNpYmxpbmdzW3NpYmxpbmdzLmxlbmd0aCAtIDFdO1xuXG5cdGVsZW1lbnQubmV4dCA9IG51bGw7XG5cblx0aWYodGhpcy5fb3B0aW9ucy53aXRoU3RhcnRJbmRpY2VzKXtcblx0XHRlbGVtZW50LnN0YXJ0SW5kZXggPSB0aGlzLl9wYXJzZXIuc3RhcnRJbmRleDtcblx0fVxuXHRpZih0aGlzLl9vcHRpb25zLndpdGhFbmRJbmRpY2VzKXtcblx0XHRlbGVtZW50LmVuZEluZGV4ID0gdGhpcy5fcGFyc2VyLmVuZEluZGV4O1xuXHR9XG5cblx0aWYocHJldmlvdXNTaWJsaW5nKXtcblx0XHRlbGVtZW50LnByZXYgPSBwcmV2aW91c1NpYmxpbmc7XG5cdFx0cHJldmlvdXNTaWJsaW5nLm5leHQgPSBlbGVtZW50O1xuXHR9IGVsc2Uge1xuXHRcdGVsZW1lbnQucHJldiA9IG51bGw7XG5cdH1cblxuXHRzaWJsaW5ncy5wdXNoKGVsZW1lbnQpO1xuXHRlbGVtZW50LnBhcmVudCA9IHBhcmVudCB8fCBudWxsO1xufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUub25vcGVudGFnID0gZnVuY3Rpb24obmFtZSwgYXR0cmlicyl7XG5cdHZhciBwcm9wZXJ0aWVzID0ge1xuXHRcdHR5cGU6IG5hbWUgPT09IFwic2NyaXB0XCIgPyBFbGVtZW50VHlwZS5TY3JpcHQgOiBuYW1lID09PSBcInN0eWxlXCIgPyBFbGVtZW50VHlwZS5TdHlsZSA6IEVsZW1lbnRUeXBlLlRhZyxcblx0XHRuYW1lOiBuYW1lLFxuXHRcdGF0dHJpYnM6IGF0dHJpYnMsXG5cdFx0Y2hpbGRyZW46IFtdXG5cdH07XG5cblx0dmFyIGVsZW1lbnQgPSB0aGlzLl9jcmVhdGVEb21FbGVtZW50KHByb3BlcnRpZXMpO1xuXG5cdHRoaXMuX2FkZERvbUVsZW1lbnQoZWxlbWVudCk7XG5cblx0dGhpcy5fdGFnU3RhY2sucHVzaChlbGVtZW50KTtcbn07XG5cbkRvbUhhbmRsZXIucHJvdG90eXBlLm9udGV4dCA9IGZ1bmN0aW9uKGRhdGEpe1xuXHQvL3RoZSBpZ25vcmVXaGl0ZXNwYWNlIGlzIG9mZmljaWFsbHkgZHJvcHBlZCwgYnV0IGZvciBub3csXG5cdC8vaXQncyBhbiBhbGlhcyBmb3Igbm9ybWFsaXplV2hpdGVzcGFjZVxuXHR2YXIgbm9ybWFsaXplID0gdGhpcy5fb3B0aW9ucy5ub3JtYWxpemVXaGl0ZXNwYWNlIHx8IHRoaXMuX29wdGlvbnMuaWdub3JlV2hpdGVzcGFjZTtcblxuXHR2YXIgbGFzdFRhZztcblxuXHRpZighdGhpcy5fdGFnU3RhY2subGVuZ3RoICYmIHRoaXMuZG9tLmxlbmd0aCAmJiAobGFzdFRhZyA9IHRoaXMuZG9tW3RoaXMuZG9tLmxlbmd0aC0xXSkudHlwZSA9PT0gRWxlbWVudFR5cGUuVGV4dCl7XG5cdFx0aWYobm9ybWFsaXplKXtcblx0XHRcdGxhc3RUYWcuZGF0YSA9IChsYXN0VGFnLmRhdGEgKyBkYXRhKS5yZXBsYWNlKHJlX3doaXRlc3BhY2UsIFwiIFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFzdFRhZy5kYXRhICs9IGRhdGE7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGlmKFxuXHRcdFx0dGhpcy5fdGFnU3RhY2subGVuZ3RoICYmXG5cdFx0XHQobGFzdFRhZyA9IHRoaXMuX3RhZ1N0YWNrW3RoaXMuX3RhZ1N0YWNrLmxlbmd0aCAtIDFdKSAmJlxuXHRcdFx0KGxhc3RUYWcgPSBsYXN0VGFnLmNoaWxkcmVuW2xhc3RUYWcuY2hpbGRyZW4ubGVuZ3RoIC0gMV0pICYmXG5cdFx0XHRsYXN0VGFnLnR5cGUgPT09IEVsZW1lbnRUeXBlLlRleHRcblx0XHQpe1xuXHRcdFx0aWYobm9ybWFsaXplKXtcblx0XHRcdFx0bGFzdFRhZy5kYXRhID0gKGxhc3RUYWcuZGF0YSArIGRhdGEpLnJlcGxhY2UocmVfd2hpdGVzcGFjZSwgXCIgXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGFzdFRhZy5kYXRhICs9IGRhdGE7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKG5vcm1hbGl6ZSl7XG5cdFx0XHRcdGRhdGEgPSBkYXRhLnJlcGxhY2UocmVfd2hpdGVzcGFjZSwgXCIgXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHRoaXMuX2NyZWF0ZURvbUVsZW1lbnQoe1xuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHR0eXBlOiBFbGVtZW50VHlwZS5UZXh0XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5fYWRkRG9tRWxlbWVudChlbGVtZW50KTtcblx0XHR9XG5cdH1cbn07XG5cbkRvbUhhbmRsZXIucHJvdG90eXBlLm9uY29tbWVudCA9IGZ1bmN0aW9uKGRhdGEpe1xuXHR2YXIgbGFzdFRhZyA9IHRoaXMuX3RhZ1N0YWNrW3RoaXMuX3RhZ1N0YWNrLmxlbmd0aCAtIDFdO1xuXG5cdGlmKGxhc3RUYWcgJiYgbGFzdFRhZy50eXBlID09PSBFbGVtZW50VHlwZS5Db21tZW50KXtcblx0XHRsYXN0VGFnLmRhdGEgKz0gZGF0YTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgcHJvcGVydGllcyA9IHtcblx0XHRkYXRhOiBkYXRhLFxuXHRcdHR5cGU6IEVsZW1lbnRUeXBlLkNvbW1lbnRcblx0fTtcblxuXHR2YXIgZWxlbWVudCA9IHRoaXMuX2NyZWF0ZURvbUVsZW1lbnQocHJvcGVydGllcyk7XG5cblx0dGhpcy5fYWRkRG9tRWxlbWVudChlbGVtZW50KTtcblx0dGhpcy5fdGFnU3RhY2sucHVzaChlbGVtZW50KTtcbn07XG5cbkRvbUhhbmRsZXIucHJvdG90eXBlLm9uY2RhdGFzdGFydCA9IGZ1bmN0aW9uKCl7XG5cdHZhciBwcm9wZXJ0aWVzID0ge1xuXHRcdGNoaWxkcmVuOiBbe1xuXHRcdFx0ZGF0YTogXCJcIixcblx0XHRcdHR5cGU6IEVsZW1lbnRUeXBlLlRleHRcblx0XHR9XSxcblx0XHR0eXBlOiBFbGVtZW50VHlwZS5DREFUQVxuXHR9O1xuXG5cdHZhciBlbGVtZW50ID0gdGhpcy5fY3JlYXRlRG9tRWxlbWVudChwcm9wZXJ0aWVzKTtcblxuXHR0aGlzLl9hZGREb21FbGVtZW50KGVsZW1lbnQpO1xuXHR0aGlzLl90YWdTdGFjay5wdXNoKGVsZW1lbnQpO1xufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUub25jb21tZW50ZW5kID0gRG9tSGFuZGxlci5wcm90b3R5cGUub25jZGF0YWVuZCA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMuX3RhZ1N0YWNrLnBvcCgpO1xufTtcblxuRG9tSGFuZGxlci5wcm90b3R5cGUub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbihuYW1lLCBkYXRhKXtcblx0dmFyIGVsZW1lbnQgPSB0aGlzLl9jcmVhdGVEb21FbGVtZW50KHtcblx0XHRuYW1lOiBuYW1lLFxuXHRcdGRhdGE6IGRhdGEsXG5cdFx0dHlwZTogRWxlbWVudFR5cGUuRGlyZWN0aXZlXG5cdH0pO1xuXG5cdHRoaXMuX2FkZERvbUVsZW1lbnQoZWxlbWVudCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERvbUhhbmRsZXI7XG4iLCIvLyBET00tTGV2ZWwtMS1jb21wbGlhbnQgc3RydWN0dXJlXG52YXIgTm9kZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4vbm9kZScpO1xudmFyIEVsZW1lbnRQcm90b3R5cGUgPSBtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUoTm9kZVByb3RvdHlwZSk7XG5cbnZhciBkb21MdmwxID0ge1xuXHR0YWdOYW1lOiBcIm5hbWVcIlxufTtcblxuT2JqZWN0LmtleXMoZG9tTHZsMSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0dmFyIHNob3J0aGFuZCA9IGRvbUx2bDFba2V5XTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnRQcm90b3R5cGUsIGtleSwge1xuXHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1tzaG9ydGhhbmRdIHx8IG51bGw7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0dGhpc1tzaG9ydGhhbmRdID0gdmFsO1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCIvLyBUaGlzIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgdGhlIHByb3RvdHlwZSBmb3IgTm9kZXMgd2hlbiBjcmVhdGluZyBhXG4vLyBET00tTGV2ZWwtMS1jb21wbGlhbnQgc3RydWN0dXJlLlxudmFyIE5vZGVQcm90b3R5cGUgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0IGZpcnN0Q2hpbGQoKSB7XG5cdFx0dmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcblx0XHRyZXR1cm4gY2hpbGRyZW4gJiYgY2hpbGRyZW5bMF0gfHwgbnVsbDtcblx0fSxcblx0Z2V0IGxhc3RDaGlsZCgpIHtcblx0XHR2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuXHRcdHJldHVybiBjaGlsZHJlbiAmJiBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXSB8fCBudWxsO1xuXHR9LFxuXHRnZXQgbm9kZVR5cGUoKSB7XG5cdFx0cmV0dXJuIG5vZGVUeXBlc1t0aGlzLnR5cGVdIHx8IG5vZGVUeXBlcy5lbGVtZW50O1xuXHR9XG59O1xuXG52YXIgZG9tTHZsMSA9IHtcblx0dGFnTmFtZTogXCJuYW1lXCIsXG5cdGNoaWxkTm9kZXM6IFwiY2hpbGRyZW5cIixcblx0cGFyZW50Tm9kZTogXCJwYXJlbnRcIixcblx0cHJldmlvdXNTaWJsaW5nOiBcInByZXZcIixcblx0bmV4dFNpYmxpbmc6IFwibmV4dFwiLFxuXHRub2RlVmFsdWU6IFwiZGF0YVwiXG59O1xuXG52YXIgbm9kZVR5cGVzID0ge1xuXHRlbGVtZW50OiAxLFxuXHR0ZXh0OiAzLFxuXHRjZGF0YTogNCxcblx0Y29tbWVudDogOFxufTtcblxuT2JqZWN0LmtleXMoZG9tTHZsMSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0dmFyIHNob3J0aGFuZCA9IGRvbUx2bDFba2V5XTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KE5vZGVQcm90b3R5cGUsIGtleSwge1xuXHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1tzaG9ydGhhbmRdIHx8IG51bGw7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0dGhpc1tzaG9ydGhhbmRdID0gdmFsO1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCJ2YXIgRG9tVXRpbHMgPSBtb2R1bGUuZXhwb3J0cztcblxuW1xuXHRyZXF1aXJlKFwiLi9saWIvc3RyaW5naWZ5XCIpLFxuXHRyZXF1aXJlKFwiLi9saWIvdHJhdmVyc2FsXCIpLFxuXHRyZXF1aXJlKFwiLi9saWIvbWFuaXB1bGF0aW9uXCIpLFxuXHRyZXF1aXJlKFwiLi9saWIvcXVlcnlpbmdcIiksXG5cdHJlcXVpcmUoXCIuL2xpYi9sZWdhY3lcIiksXG5cdHJlcXVpcmUoXCIuL2xpYi9oZWxwZXJzXCIpXG5dLmZvckVhY2goZnVuY3Rpb24oZXh0KXtcblx0T2JqZWN0LmtleXMoZXh0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG5cdFx0RG9tVXRpbHNba2V5XSA9IGV4dFtrZXldLmJpbmQoRG9tVXRpbHMpO1xuXHR9KTtcbn0pO1xuIiwiLy8gcmVtb3ZlU3Vic2V0c1xuLy8gR2l2ZW4gYW4gYXJyYXkgb2Ygbm9kZXMsIHJlbW92ZSBhbnkgbWVtYmVyIHRoYXQgaXMgY29udGFpbmVkIGJ5IGFub3RoZXIuXG5leHBvcnRzLnJlbW92ZVN1YnNldHMgPSBmdW5jdGlvbihub2Rlcykge1xuXHR2YXIgaWR4ID0gbm9kZXMubGVuZ3RoLCBub2RlLCBhbmNlc3RvciwgcmVwbGFjZTtcblxuXHQvLyBDaGVjayBpZiBlYWNoIG5vZGUgKG9yIG9uZSBvZiBpdHMgYW5jZXN0b3JzKSBpcyBhbHJlYWR5IGNvbnRhaW5lZCBpbiB0aGVcblx0Ly8gYXJyYXkuXG5cdHdoaWxlICgtLWlkeCA+IC0xKSB7XG5cdFx0bm9kZSA9IGFuY2VzdG9yID0gbm9kZXNbaWR4XTtcblxuXHRcdC8vIFRlbXBvcmFyaWx5IHJlbW92ZSB0aGUgbm9kZSB1bmRlciBjb25zaWRlcmF0aW9uXG5cdFx0bm9kZXNbaWR4XSA9IG51bGw7XG5cdFx0cmVwbGFjZSA9IHRydWU7XG5cblx0XHR3aGlsZSAoYW5jZXN0b3IpIHtcblx0XHRcdGlmIChub2Rlcy5pbmRleE9mKGFuY2VzdG9yKSA+IC0xKSB7XG5cdFx0XHRcdHJlcGxhY2UgPSBmYWxzZTtcblx0XHRcdFx0bm9kZXMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0YW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIG5vZGUgaGFzIGJlZW4gZm91bmQgdG8gYmUgdW5pcXVlLCByZS1pbnNlcnQgaXQuXG5cdFx0aWYgKHJlcGxhY2UpIHtcblx0XHRcdG5vZGVzW2lkeF0gPSBub2RlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBub2Rlcztcbn07XG5cbi8vIFNvdXJjZTogaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2RvbS1ub2RlLWNvbXBhcmVkb2N1bWVudHBvc2l0aW9uXG52YXIgUE9TSVRJT04gPSB7XG5cdERJU0NPTk5FQ1RFRDogMSxcblx0UFJFQ0VESU5HOiAyLFxuXHRGT0xMT1dJTkc6IDQsXG5cdENPTlRBSU5TOiA4LFxuXHRDT05UQUlORURfQlk6IDE2XG59O1xuXG4vLyBDb21wYXJlIHRoZSBwb3NpdGlvbiBvZiBvbmUgbm9kZSBhZ2FpbnN0IGFub3RoZXIgbm9kZSBpbiBhbnkgb3RoZXIgZG9jdW1lbnQuXG4vLyBUaGUgcmV0dXJuIHZhbHVlIGlzIGEgYml0bWFzayB3aXRoIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuLy9cbi8vIGRvY3VtZW50IG9yZGVyOlxuLy8gPiBUaGVyZSBpcyBhbiBvcmRlcmluZywgZG9jdW1lbnQgb3JkZXIsIGRlZmluZWQgb24gYWxsIHRoZSBub2RlcyBpbiB0aGVcbi8vID4gZG9jdW1lbnQgY29ycmVzcG9uZGluZyB0byB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIGZpcnN0IGNoYXJhY3RlciBvZiB0aGVcbi8vID4gWE1MIHJlcHJlc2VudGF0aW9uIG9mIGVhY2ggbm9kZSBvY2N1cnMgaW4gdGhlIFhNTCByZXByZXNlbnRhdGlvbiBvZiB0aGVcbi8vID4gZG9jdW1lbnQgYWZ0ZXIgZXhwYW5zaW9uIG9mIGdlbmVyYWwgZW50aXRpZXMuIFRodXMsIHRoZSBkb2N1bWVudCBlbGVtZW50XG4vLyA+IG5vZGUgd2lsbCBiZSB0aGUgZmlyc3Qgbm9kZS4gRWxlbWVudCBub2RlcyBvY2N1ciBiZWZvcmUgdGhlaXIgY2hpbGRyZW4uXG4vLyA+IFRodXMsIGRvY3VtZW50IG9yZGVyIG9yZGVycyBlbGVtZW50IG5vZGVzIGluIG9yZGVyIG9mIHRoZSBvY2N1cnJlbmNlIG9mXG4vLyA+IHRoZWlyIHN0YXJ0LXRhZyBpbiB0aGUgWE1MIChhZnRlciBleHBhbnNpb24gb2YgZW50aXRpZXMpLiBUaGUgYXR0cmlidXRlXG4vLyA+IG5vZGVzIG9mIGFuIGVsZW1lbnQgb2NjdXIgYWZ0ZXIgdGhlIGVsZW1lbnQgYW5kIGJlZm9yZSBpdHMgY2hpbGRyZW4uIFRoZVxuLy8gPiByZWxhdGl2ZSBvcmRlciBvZiBhdHRyaWJ1dGUgbm9kZXMgaXMgaW1wbGVtZW50YXRpb24tZGVwZW5kZW50Li9cbi8vIFNvdXJjZTpcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUNvcmUvZ2xvc3NhcnkuaHRtbCNkdC1kb2N1bWVudC1vcmRlclxuLy9cbi8vIEBhcmd1bWVudCB7Tm9kZX0gbm9kYUEgVGhlIGZpcnN0IG5vZGUgdG8gdXNlIGluIHRoZSBjb21wYXJpc29uXG4vLyBAYXJndW1lbnQge05vZGV9IG5vZGVCIFRoZSBzZWNvbmQgbm9kZSB0byB1c2UgaW4gdGhlIGNvbXBhcmlzb25cbi8vXG4vLyBAcmV0dXJuIHtOdW1iZXJ9IEEgYml0bWFzayBkZXNjcmliaW5nIHRoZSBpbnB1dCBub2RlcycgcmVsYXRpdmUgcG9zaXRpb24uXG4vLyAgICAgICAgIFNlZSBodHRwOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLW5vZGUtY29tcGFyZWRvY3VtZW50cG9zaXRpb24gZm9yXG4vLyAgICAgICAgIGEgZGVzY3JpcHRpb24gb2YgdGhlc2UgdmFsdWVzLlxudmFyIGNvbXBhcmVQb3MgPSBleHBvcnRzLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uID0gZnVuY3Rpb24obm9kZUEsIG5vZGVCKSB7XG5cdHZhciBhUGFyZW50cyA9IFtdO1xuXHR2YXIgYlBhcmVudHMgPSBbXTtcblx0dmFyIGN1cnJlbnQsIHNoYXJlZFBhcmVudCwgc2libGluZ3MsIGFTaWJsaW5nLCBiU2libGluZywgaWR4O1xuXG5cdGlmIChub2RlQSA9PT0gbm9kZUIpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGN1cnJlbnQgPSBub2RlQTtcblx0d2hpbGUgKGN1cnJlbnQpIHtcblx0XHRhUGFyZW50cy51bnNoaWZ0KGN1cnJlbnQpO1xuXHRcdGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcblx0fVxuXHRjdXJyZW50ID0gbm9kZUI7XG5cdHdoaWxlIChjdXJyZW50KSB7XG5cdFx0YlBhcmVudHMudW5zaGlmdChjdXJyZW50KTtcblx0XHRjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG5cdH1cblxuXHRpZHggPSAwO1xuXHR3aGlsZSAoYVBhcmVudHNbaWR4XSA9PT0gYlBhcmVudHNbaWR4XSkge1xuXHRcdGlkeCsrO1xuXHR9XG5cblx0aWYgKGlkeCA9PT0gMCkge1xuXHRcdHJldHVybiBQT1NJVElPTi5ESVNDT05ORUNURUQ7XG5cdH1cblxuXHRzaGFyZWRQYXJlbnQgPSBhUGFyZW50c1tpZHggLSAxXTtcblx0c2libGluZ3MgPSBzaGFyZWRQYXJlbnQuY2hpbGRyZW47XG5cdGFTaWJsaW5nID0gYVBhcmVudHNbaWR4XTtcblx0YlNpYmxpbmcgPSBiUGFyZW50c1tpZHhdO1xuXG5cdGlmIChzaWJsaW5ncy5pbmRleE9mKGFTaWJsaW5nKSA+IHNpYmxpbmdzLmluZGV4T2YoYlNpYmxpbmcpKSB7XG5cdFx0aWYgKHNoYXJlZFBhcmVudCA9PT0gbm9kZUIpIHtcblx0XHRcdHJldHVybiBQT1NJVElPTi5GT0xMT1dJTkcgfCBQT1NJVElPTi5DT05UQUlORURfQlk7XG5cdFx0fVxuXHRcdHJldHVybiBQT1NJVElPTi5GT0xMT1dJTkc7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKHNoYXJlZFBhcmVudCA9PT0gbm9kZUEpIHtcblx0XHRcdHJldHVybiBQT1NJVElPTi5QUkVDRURJTkcgfCBQT1NJVElPTi5DT05UQUlOUztcblx0XHR9XG5cdFx0cmV0dXJuIFBPU0lUSU9OLlBSRUNFRElORztcblx0fVxufTtcblxuLy8gU29ydCBhbiBhcnJheSBvZiBub2RlcyBiYXNlZCBvbiB0aGVpciByZWxhdGl2ZSBwb3NpdGlvbiBpbiB0aGUgZG9jdW1lbnQgYW5kXG4vLyByZW1vdmUgYW55IGR1cGxpY2F0ZSBub2Rlcy4gSWYgdGhlIGFycmF5IGNvbnRhaW5zIG5vZGVzIHRoYXQgZG8gbm90IGJlbG9uZ1xuLy8gdG8gdGhlIHNhbWUgZG9jdW1lbnQsIHNvcnQgb3JkZXIgaXMgdW5zcGVjaWZpZWQuXG4vL1xuLy8gQGFyZ3VtZW50IHtBcnJheX0gbm9kZXMgQXJyYXkgb2YgRE9NIG5vZGVzXG4vL1xuLy8gQHJldHVybnMge0FycmF5fSBjb2xsZWN0aW9uIG9mIHVuaXF1ZSBub2Rlcywgc29ydGVkIGluIGRvY3VtZW50IG9yZGVyXG5leHBvcnRzLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbihub2Rlcykge1xuXHR2YXIgaWR4ID0gbm9kZXMubGVuZ3RoLCBub2RlLCBwb3NpdGlvbjtcblxuXHRub2RlcyA9IG5vZGVzLnNsaWNlKCk7XG5cblx0d2hpbGUgKC0taWR4ID4gLTEpIHtcblx0XHRub2RlID0gbm9kZXNbaWR4XTtcblx0XHRwb3NpdGlvbiA9IG5vZGVzLmluZGV4T2Yobm9kZSk7XG5cdFx0aWYgKHBvc2l0aW9uID4gLTEgJiYgcG9zaXRpb24gPCBpZHgpIHtcblx0XHRcdG5vZGVzLnNwbGljZShpZHgsIDEpO1xuXHRcdH1cblx0fVxuXHRub2Rlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHR2YXIgcmVsYXRpdmUgPSBjb21wYXJlUG9zKGEsIGIpO1xuXHRcdGlmIChyZWxhdGl2ZSAmIFBPU0lUSU9OLlBSRUNFRElORykge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH0gZWxzZSBpZiAocmVsYXRpdmUgJiBQT1NJVElPTi5GT0xMT1dJTkcpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblx0XHRyZXR1cm4gMDtcblx0fSk7XG5cblx0cmV0dXJuIG5vZGVzO1xufTtcbiIsInZhciBFbGVtZW50VHlwZSA9IHJlcXVpcmUoXCJkb21lbGVtZW50dHlwZVwiKTtcbnZhciBpc1RhZyA9IGV4cG9ydHMuaXNUYWcgPSBFbGVtZW50VHlwZS5pc1RhZztcblxuZXhwb3J0cy50ZXN0RWxlbWVudCA9IGZ1bmN0aW9uKG9wdGlvbnMsIGVsZW1lbnQpe1xuXHRmb3IodmFyIGtleSBpbiBvcHRpb25zKXtcblx0XHRpZighb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKTtcblx0XHRlbHNlIGlmKGtleSA9PT0gXCJ0YWdfbmFtZVwiKXtcblx0XHRcdGlmKCFpc1RhZyhlbGVtZW50KSB8fCAhb3B0aW9ucy50YWdfbmFtZShlbGVtZW50Lm5hbWUpKXtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZihrZXkgPT09IFwidGFnX3R5cGVcIil7XG5cdFx0XHRpZighb3B0aW9ucy50YWdfdHlwZShlbGVtZW50LnR5cGUpKSByZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIGlmKGtleSA9PT0gXCJ0YWdfY29udGFpbnNcIil7XG5cdFx0XHRpZihpc1RhZyhlbGVtZW50KSB8fCAhb3B0aW9ucy50YWdfY29udGFpbnMoZWxlbWVudC5kYXRhKSl7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYoIWVsZW1lbnQuYXR0cmlicyB8fCAhb3B0aW9uc1trZXldKGVsZW1lbnQuYXR0cmlic1trZXldKSl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxudmFyIENoZWNrcyA9IHtcblx0dGFnX25hbWU6IGZ1bmN0aW9uKG5hbWUpe1xuXHRcdGlmKHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpe1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGVsZW0peyByZXR1cm4gaXNUYWcoZWxlbSkgJiYgbmFtZShlbGVtLm5hbWUpOyB9O1xuXHRcdH0gZWxzZSBpZihuYW1lID09PSBcIipcIil7XG5cdFx0XHRyZXR1cm4gaXNUYWc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbihlbGVtKXsgcmV0dXJuIGlzVGFnKGVsZW0pICYmIGVsZW0ubmFtZSA9PT0gbmFtZTsgfTtcblx0XHR9XG5cdH0sXG5cdHRhZ190eXBlOiBmdW5jdGlvbih0eXBlKXtcblx0XHRpZih0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiKXtcblx0XHRcdHJldHVybiBmdW5jdGlvbihlbGVtKXsgcmV0dXJuIHR5cGUoZWxlbS50eXBlKTsgfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKGVsZW0peyByZXR1cm4gZWxlbS50eXBlID09PSB0eXBlOyB9O1xuXHRcdH1cblx0fSxcblx0dGFnX2NvbnRhaW5zOiBmdW5jdGlvbihkYXRhKXtcblx0XHRpZih0eXBlb2YgZGF0YSA9PT0gXCJmdW5jdGlvblwiKXtcblx0XHRcdHJldHVybiBmdW5jdGlvbihlbGVtKXsgcmV0dXJuICFpc1RhZyhlbGVtKSAmJiBkYXRhKGVsZW0uZGF0YSk7IH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbihlbGVtKXsgcmV0dXJuICFpc1RhZyhlbGVtKSAmJiBlbGVtLmRhdGEgPT09IGRhdGE7IH07XG5cdFx0fVxuXHR9XG59O1xuXG5mdW5jdGlvbiBnZXRBdHRyaWJDaGVjayhhdHRyaWIsIHZhbHVlKXtcblx0aWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xuXHRcdHJldHVybiBmdW5jdGlvbihlbGVtKXsgcmV0dXJuIGVsZW0uYXR0cmlicyAmJiB2YWx1ZShlbGVtLmF0dHJpYnNbYXR0cmliXSk7IH07XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGVsZW0peyByZXR1cm4gZWxlbS5hdHRyaWJzICYmIGVsZW0uYXR0cmlic1thdHRyaWJdID09PSB2YWx1ZTsgfTtcblx0fVxufVxuXG5mdW5jdGlvbiBjb21iaW5lRnVuY3MoYSwgYil7XG5cdHJldHVybiBmdW5jdGlvbihlbGVtKXtcblx0XHRyZXR1cm4gYShlbGVtKSB8fCBiKGVsZW0pO1xuXHR9O1xufVxuXG5leHBvcnRzLmdldEVsZW1lbnRzID0gZnVuY3Rpb24ob3B0aW9ucywgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpe1xuXHR2YXIgZnVuY3MgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoZnVuY3Rpb24oa2V5KXtcblx0XHR2YXIgdmFsdWUgPSBvcHRpb25zW2tleV07XG5cdFx0cmV0dXJuIGtleSBpbiBDaGVja3MgPyBDaGVja3Nba2V5XSh2YWx1ZSkgOiBnZXRBdHRyaWJDaGVjayhrZXksIHZhbHVlKTtcblx0fSk7XG5cblx0cmV0dXJuIGZ1bmNzLmxlbmd0aCA9PT0gMCA/IFtdIDogdGhpcy5maWx0ZXIoXG5cdFx0ZnVuY3MucmVkdWNlKGNvbWJpbmVGdW5jcyksXG5cdFx0ZWxlbWVudCwgcmVjdXJzZSwgbGltaXRcblx0KTtcbn07XG5cbmV4cG9ydHMuZ2V0RWxlbWVudEJ5SWQgPSBmdW5jdGlvbihpZCwgZWxlbWVudCwgcmVjdXJzZSl7XG5cdGlmKCFBcnJheS5pc0FycmF5KGVsZW1lbnQpKSBlbGVtZW50ID0gW2VsZW1lbnRdO1xuXHRyZXR1cm4gdGhpcy5maW5kT25lKGdldEF0dHJpYkNoZWNrKFwiaWRcIiwgaWQpLCBlbGVtZW50LCByZWN1cnNlICE9PSBmYWxzZSk7XG59O1xuXG5leHBvcnRzLmdldEVsZW1lbnRzQnlUYWdOYW1lID0gZnVuY3Rpb24obmFtZSwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpe1xuXHRyZXR1cm4gdGhpcy5maWx0ZXIoQ2hlY2tzLnRhZ19uYW1lKG5hbWUpLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCk7XG59O1xuXG5leHBvcnRzLmdldEVsZW1lbnRzQnlUYWdUeXBlID0gZnVuY3Rpb24odHlwZSwgZWxlbWVudCwgcmVjdXJzZSwgbGltaXQpe1xuXHRyZXR1cm4gdGhpcy5maWx0ZXIoQ2hlY2tzLnRhZ190eXBlKHR5cGUpLCBlbGVtZW50LCByZWN1cnNlLCBsaW1pdCk7XG59O1xuIiwiZXhwb3J0cy5yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24oZWxlbSl7XG5cdGlmKGVsZW0ucHJldikgZWxlbS5wcmV2Lm5leHQgPSBlbGVtLm5leHQ7XG5cdGlmKGVsZW0ubmV4dCkgZWxlbS5uZXh0LnByZXYgPSBlbGVtLnByZXY7XG5cblx0aWYoZWxlbS5wYXJlbnQpe1xuXHRcdHZhciBjaGlsZHMgPSBlbGVtLnBhcmVudC5jaGlsZHJlbjtcblx0XHRjaGlsZHMuc3BsaWNlKGNoaWxkcy5sYXN0SW5kZXhPZihlbGVtKSwgMSk7XG5cdH1cbn07XG5cbmV4cG9ydHMucmVwbGFjZUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtLCByZXBsYWNlbWVudCl7XG5cdHZhciBwcmV2ID0gcmVwbGFjZW1lbnQucHJldiA9IGVsZW0ucHJldjtcblx0aWYocHJldil7XG5cdFx0cHJldi5uZXh0ID0gcmVwbGFjZW1lbnQ7XG5cdH1cblxuXHR2YXIgbmV4dCA9IHJlcGxhY2VtZW50Lm5leHQgPSBlbGVtLm5leHQ7XG5cdGlmKG5leHQpe1xuXHRcdG5leHQucHJldiA9IHJlcGxhY2VtZW50O1xuXHR9XG5cblx0dmFyIHBhcmVudCA9IHJlcGxhY2VtZW50LnBhcmVudCA9IGVsZW0ucGFyZW50O1xuXHRpZihwYXJlbnQpe1xuXHRcdHZhciBjaGlsZHMgPSBwYXJlbnQuY2hpbGRyZW47XG5cdFx0Y2hpbGRzW2NoaWxkcy5sYXN0SW5kZXhPZihlbGVtKV0gPSByZXBsYWNlbWVudDtcblx0fVxufTtcblxuZXhwb3J0cy5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uKGVsZW0sIGNoaWxkKXtcblx0Y2hpbGQucGFyZW50ID0gZWxlbTtcblxuXHRpZihlbGVtLmNoaWxkcmVuLnB1c2goY2hpbGQpICE9PSAxKXtcblx0XHR2YXIgc2libGluZyA9IGVsZW0uY2hpbGRyZW5bZWxlbS5jaGlsZHJlbi5sZW5ndGggLSAyXTtcblx0XHRzaWJsaW5nLm5leHQgPSBjaGlsZDtcblx0XHRjaGlsZC5wcmV2ID0gc2libGluZztcblx0XHRjaGlsZC5uZXh0ID0gbnVsbDtcblx0fVxufTtcblxuZXhwb3J0cy5hcHBlbmQgPSBmdW5jdGlvbihlbGVtLCBuZXh0KXtcblx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50LFxuXHRcdGN1cnJOZXh0ID0gZWxlbS5uZXh0O1xuXG5cdG5leHQubmV4dCA9IGN1cnJOZXh0O1xuXHRuZXh0LnByZXYgPSBlbGVtO1xuXHRlbGVtLm5leHQgPSBuZXh0O1xuXHRuZXh0LnBhcmVudCA9IHBhcmVudDtcblxuXHRpZihjdXJyTmV4dCl7XG5cdFx0Y3Vyck5leHQucHJldiA9IG5leHQ7XG5cdFx0aWYocGFyZW50KXtcblx0XHRcdHZhciBjaGlsZHMgPSBwYXJlbnQuY2hpbGRyZW47XG5cdFx0XHRjaGlsZHMuc3BsaWNlKGNoaWxkcy5sYXN0SW5kZXhPZihjdXJyTmV4dCksIDAsIG5leHQpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHBhcmVudCl7XG5cdFx0cGFyZW50LmNoaWxkcmVuLnB1c2gobmV4dCk7XG5cdH1cbn07XG5cbmV4cG9ydHMucHJlcGVuZCA9IGZ1bmN0aW9uKGVsZW0sIHByZXYpe1xuXHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnQ7XG5cdGlmKHBhcmVudCl7XG5cdFx0dmFyIGNoaWxkcyA9IHBhcmVudC5jaGlsZHJlbjtcblx0XHRjaGlsZHMuc3BsaWNlKGNoaWxkcy5sYXN0SW5kZXhPZihlbGVtKSwgMCwgcHJldik7XG5cdH1cblxuXHRpZihlbGVtLnByZXYpe1xuXHRcdGVsZW0ucHJldi5uZXh0ID0gcHJldjtcblx0fVxuXHRcblx0cHJldi5wYXJlbnQgPSBwYXJlbnQ7XG5cdHByZXYucHJldiA9IGVsZW0ucHJldjtcblx0cHJldi5uZXh0ID0gZWxlbTtcblx0ZWxlbS5wcmV2ID0gcHJldjtcbn07XG5cblxuIiwidmFyIGlzVGFnID0gcmVxdWlyZShcImRvbWVsZW1lbnR0eXBlXCIpLmlzVGFnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZmlsdGVyOiBmaWx0ZXIsXG5cdGZpbmQ6IGZpbmQsXG5cdGZpbmRPbmVDaGlsZDogZmluZE9uZUNoaWxkLFxuXHRmaW5kT25lOiBmaW5kT25lLFxuXHRleGlzdHNPbmU6IGV4aXN0c09uZSxcblx0ZmluZEFsbDogZmluZEFsbFxufTtcblxuZnVuY3Rpb24gZmlsdGVyKHRlc3QsIGVsZW1lbnQsIHJlY3Vyc2UsIGxpbWl0KXtcblx0aWYoIUFycmF5LmlzQXJyYXkoZWxlbWVudCkpIGVsZW1lbnQgPSBbZWxlbWVudF07XG5cblx0aWYodHlwZW9mIGxpbWl0ICE9PSBcIm51bWJlclwiIHx8ICFpc0Zpbml0ZShsaW1pdCkpe1xuXHRcdGxpbWl0ID0gSW5maW5pdHk7XG5cdH1cblx0cmV0dXJuIGZpbmQodGVzdCwgZWxlbWVudCwgcmVjdXJzZSAhPT0gZmFsc2UsIGxpbWl0KTtcbn1cblxuZnVuY3Rpb24gZmluZCh0ZXN0LCBlbGVtcywgcmVjdXJzZSwgbGltaXQpe1xuXHR2YXIgcmVzdWx0ID0gW10sIGNoaWxkcztcblxuXHRmb3IodmFyIGkgPSAwLCBqID0gZWxlbXMubGVuZ3RoOyBpIDwgajsgaSsrKXtcblx0XHRpZih0ZXN0KGVsZW1zW2ldKSl7XG5cdFx0XHRyZXN1bHQucHVzaChlbGVtc1tpXSk7XG5cdFx0XHRpZigtLWxpbWl0IDw9IDApIGJyZWFrO1xuXHRcdH1cblxuXHRcdGNoaWxkcyA9IGVsZW1zW2ldLmNoaWxkcmVuO1xuXHRcdGlmKHJlY3Vyc2UgJiYgY2hpbGRzICYmIGNoaWxkcy5sZW5ndGggPiAwKXtcblx0XHRcdGNoaWxkcyA9IGZpbmQodGVzdCwgY2hpbGRzLCByZWN1cnNlLCBsaW1pdCk7XG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KGNoaWxkcyk7XG5cdFx0XHRsaW1pdCAtPSBjaGlsZHMubGVuZ3RoO1xuXHRcdFx0aWYobGltaXQgPD0gMCkgYnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmluZE9uZUNoaWxkKHRlc3QsIGVsZW1zKXtcblx0Zm9yKHZhciBpID0gMCwgbCA9IGVsZW1zLmxlbmd0aDsgaSA8IGw7IGkrKyl7XG5cdFx0aWYodGVzdChlbGVtc1tpXSkpIHJldHVybiBlbGVtc1tpXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBmaW5kT25lKHRlc3QsIGVsZW1zKXtcblx0dmFyIGVsZW0gPSBudWxsO1xuXG5cdGZvcih2YXIgaSA9IDAsIGwgPSBlbGVtcy5sZW5ndGg7IGkgPCBsICYmICFlbGVtOyBpKyspe1xuXHRcdGlmKCFpc1RhZyhlbGVtc1tpXSkpe1xuXHRcdFx0Y29udGludWU7XG5cdFx0fSBlbHNlIGlmKHRlc3QoZWxlbXNbaV0pKXtcblx0XHRcdGVsZW0gPSBlbGVtc1tpXTtcblx0XHR9IGVsc2UgaWYoZWxlbXNbaV0uY2hpbGRyZW4ubGVuZ3RoID4gMCl7XG5cdFx0XHRlbGVtID0gZmluZE9uZSh0ZXN0LCBlbGVtc1tpXS5jaGlsZHJlbik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGV4aXN0c09uZSh0ZXN0LCBlbGVtcyl7XG5cdGZvcih2YXIgaSA9IDAsIGwgPSBlbGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspe1xuXHRcdGlmKFxuXHRcdFx0aXNUYWcoZWxlbXNbaV0pICYmIChcblx0XHRcdFx0dGVzdChlbGVtc1tpXSkgfHwgKFxuXHRcdFx0XHRcdGVsZW1zW2ldLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHRleGlzdHNPbmUodGVzdCwgZWxlbXNbaV0uY2hpbGRyZW4pXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpe1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmaW5kQWxsKHRlc3QsIHJvb3RFbGVtcyl7XG5cdHZhciByZXN1bHQgPSBbXTtcblx0dmFyIHN0YWNrID0gcm9vdEVsZW1zLnNsaWNlKCk7XG5cdHdoaWxlKHN0YWNrLmxlbmd0aCl7XG5cdFx0dmFyIGVsZW0gPSBzdGFjay5zaGlmdCgpO1xuXHRcdGlmKCFpc1RhZyhlbGVtKSkgY29udGludWU7XG5cdFx0aWYgKGVsZW0uY2hpbGRyZW4gJiYgZWxlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRzdGFjay51bnNoaWZ0LmFwcGx5KHN0YWNrLCBlbGVtLmNoaWxkcmVuKTtcblx0XHR9XG5cdFx0aWYodGVzdChlbGVtKSkgcmVzdWx0LnB1c2goZWxlbSk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbiIsInZhciBFbGVtZW50VHlwZSA9IHJlcXVpcmUoXCJkb21lbGVtZW50dHlwZVwiKSxcbiAgICBnZXRPdXRlckhUTUwgPSByZXF1aXJlKFwiZG9tLXNlcmlhbGl6ZXJcIiksXG4gICAgaXNUYWcgPSBFbGVtZW50VHlwZS5pc1RhZztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldElubmVySFRNTDogZ2V0SW5uZXJIVE1MLFxuXHRnZXRPdXRlckhUTUw6IGdldE91dGVySFRNTCxcblx0Z2V0VGV4dDogZ2V0VGV4dFxufTtcblxuZnVuY3Rpb24gZ2V0SW5uZXJIVE1MKGVsZW0sIG9wdHMpe1xuXHRyZXR1cm4gZWxlbS5jaGlsZHJlbiA/IGVsZW0uY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGVsZW0pe1xuXHRcdHJldHVybiBnZXRPdXRlckhUTUwoZWxlbSwgb3B0cyk7XG5cdH0pLmpvaW4oXCJcIikgOiBcIlwiO1xufVxuXG5mdW5jdGlvbiBnZXRUZXh0KGVsZW0pe1xuXHRpZihBcnJheS5pc0FycmF5KGVsZW0pKSByZXR1cm4gZWxlbS5tYXAoZ2V0VGV4dCkuam9pbihcIlwiKTtcblx0aWYoaXNUYWcoZWxlbSkpIHJldHVybiBlbGVtLm5hbWUgPT09IFwiYnJcIiA/IFwiXFxuXCIgOiBnZXRUZXh0KGVsZW0uY2hpbGRyZW4pO1xuXHRpZihlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLkNEQVRBKSByZXR1cm4gZ2V0VGV4dChlbGVtLmNoaWxkcmVuKTtcblx0aWYoZWxlbS50eXBlID09PSBFbGVtZW50VHlwZS5UZXh0KSByZXR1cm4gZWxlbS5kYXRhO1xuXHRyZXR1cm4gXCJcIjtcbn1cbiIsInZhciBnZXRDaGlsZHJlbiA9IGV4cG9ydHMuZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbihlbGVtKXtcblx0cmV0dXJuIGVsZW0uY2hpbGRyZW47XG59O1xuXG52YXIgZ2V0UGFyZW50ID0gZXhwb3J0cy5nZXRQYXJlbnQgPSBmdW5jdGlvbihlbGVtKXtcblx0cmV0dXJuIGVsZW0ucGFyZW50O1xufTtcblxuZXhwb3J0cy5nZXRTaWJsaW5ncyA9IGZ1bmN0aW9uKGVsZW0pe1xuXHR2YXIgcGFyZW50ID0gZ2V0UGFyZW50KGVsZW0pO1xuXHRyZXR1cm4gcGFyZW50ID8gZ2V0Q2hpbGRyZW4ocGFyZW50KSA6IFtlbGVtXTtcbn07XG5cbmV4cG9ydHMuZ2V0QXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbihlbGVtLCBuYW1lKXtcblx0cmV0dXJuIGVsZW0uYXR0cmlicyAmJiBlbGVtLmF0dHJpYnNbbmFtZV07XG59O1xuXG5leHBvcnRzLmhhc0F0dHJpYiA9IGZ1bmN0aW9uKGVsZW0sIG5hbWUpe1xuXHRyZXR1cm4gISFlbGVtLmF0dHJpYnMgJiYgaGFzT3duUHJvcGVydHkuY2FsbChlbGVtLmF0dHJpYnMsIG5hbWUpO1xufTtcblxuZXhwb3J0cy5nZXROYW1lID0gZnVuY3Rpb24oZWxlbSl7XG5cdHJldHVybiBlbGVtLm5hbWU7XG59O1xuIiwidmFyIHB1bnljb2RlID0gcmVxdWlyZSgncHVueWNvZGUnKTtcbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJy4vZW50aXRpZXMuanNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZTtcblxuZnVuY3Rpb24gZGVjb2RlIChzdHIpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBTdHJpbmcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYoIz9bXjtcXFddKzs/KS9nLCBmdW5jdGlvbiAoXywgbWF0Y2gpIHtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGlmIChtID0gL14jKFxcZCspOz8kLy5leGVjKG1hdGNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHB1bnljb2RlLnVjczIuZW5jb2RlKFsgcGFyc2VJbnQobVsxXSwgMTApIF0pO1xuICAgICAgICB9IGVsc2UgaWYgKG0gPSAvXiNbWHhdKFtBLUZhLWYwLTldKyk7Py8uZXhlYyhtYXRjaCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwdW55Y29kZS51Y3MyLmVuY29kZShbIHBhcnNlSW50KG1bMV0sIDE2KSBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5hbWVkIGVudGl0eVxuICAgICAgICAgICAgdmFyIGhhc1NlbWkgPSAvOyQvLnRlc3QobWF0Y2gpO1xuICAgICAgICAgICAgdmFyIHdpdGhvdXRTZW1pID0gaGFzU2VtaSA/IG1hdGNoLnJlcGxhY2UoLzskLywgJycpIDogbWF0Y2g7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZW50aXRpZXNbd2l0aG91dFNlbWldIHx8IChoYXNTZW1pICYmIGVudGl0aWVzW21hdGNoXSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBwdW55Y29kZS51Y3MyLmVuY29kZShbIHRhcmdldCBdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyYnICsgbWF0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBwdW55Y29kZSA9IHJlcXVpcmUoJ3B1bnljb2RlJyk7XG52YXIgcmV2RW50aXRpZXMgPSByZXF1aXJlKCcuL3JldmVyc2VkLmpzb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbmNvZGU7XG5cbmZ1bmN0aW9uIGVuY29kZSAoc3RyLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgU3RyaW5nJyk7XG4gICAgfVxuICAgIGlmICghb3B0cykgb3B0cyA9IHt9O1xuXG4gICAgdmFyIG51bWVyaWMgPSB0cnVlO1xuICAgIGlmIChvcHRzLm5hbWVkKSBudW1lcmljID0gZmFsc2U7XG4gICAgaWYgKG9wdHMubnVtZXJpYyAhPT0gdW5kZWZpbmVkKSBudW1lcmljID0gb3B0cy5udW1lcmljO1xuXG4gICAgdmFyIHNwZWNpYWwgPSBvcHRzLnNwZWNpYWwgfHwge1xuICAgICAgICAnXCInOiB0cnVlLCBcIidcIjogdHJ1ZSxcbiAgICAgICAgJzwnOiB0cnVlLCAnPic6IHRydWUsXG4gICAgICAgICcmJzogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgY29kZVBvaW50cyA9IHB1bnljb2RlLnVjczIuZGVjb2RlKHN0cik7XG4gICAgdmFyIGNoYXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2RlUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjYyA9IGNvZGVQb2ludHNbaV07XG4gICAgICAgIHZhciBjID0gcHVueWNvZGUudWNzMi5lbmNvZGUoWyBjYyBdKTtcbiAgICAgICAgdmFyIGUgPSByZXZFbnRpdGllc1tjY107XG4gICAgICAgIGlmIChlICYmIChjYyA+PSAxMjcgfHwgc3BlY2lhbFtjXSkgJiYgIW51bWVyaWMpIHtcbiAgICAgICAgICAgIGNoYXJzLnB1c2goJyYnICsgKC87JC8udGVzdChlKSA/IGUgOiBlICsgJzsnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2MgPCAzMiB8fCBjYyA+PSAxMjcgfHwgc3BlY2lhbFtjXSkge1xuICAgICAgICAgICAgY2hhcnMucHVzaCgnJiMnICsgY2MgKyAnOycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hhcnMucHVzaChjKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG59XG4iLCJleHBvcnRzLmVuY29kZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG5leHBvcnRzLmRlY29kZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG4iLCJ2YXIgZGVjb2RlTWFwID0gcmVxdWlyZShcIi4uL21hcHMvZGVjb2RlLmpzb25cIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlQ29kZVBvaW50O1xuXG4vLyBtb2RpZmllZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2hlL2Jsb2IvbWFzdGVyL3NyYy9oZS5qcyNMOTQtTDExOVxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50KGNvZGVQb2ludCkge1xuICAgIGlmICgoY29kZVBvaW50ID49IDB4ZDgwMCAmJiBjb2RlUG9pbnQgPD0gMHhkZmZmKSB8fCBjb2RlUG9pbnQgPiAweDEwZmZmZikge1xuICAgICAgICByZXR1cm4gXCJcXHVGRkZEXCI7XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCBpbiBkZWNvZGVNYXApIHtcbiAgICAgICAgY29kZVBvaW50ID0gZGVjb2RlTWFwW2NvZGVQb2ludF07XG4gICAgfVxuXG4gICAgdmFyIG91dHB1dCA9IFwiXCI7XG5cbiAgICBpZiAoY29kZVBvaW50ID4gMHhmZmZmKSB7XG4gICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+Pj4gMTApICYgMHgzZmYpIHwgMHhkODAwKTtcbiAgICAgICAgY29kZVBvaW50ID0gMHhkYzAwIHwgKGNvZGVQb2ludCAmIDB4M2ZmKTtcbiAgICB9XG5cbiAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgIHJldHVybiBvdXRwdXQ7XG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwidmFyIHRvcExldmVsID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge31cbnZhciBtaW5Eb2MgPSByZXF1aXJlKCdtaW4tZG9jdW1lbnQnKTtcblxudmFyIGRvY2N5O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY2N5ID0gZG9jdW1lbnQ7XG59IGVsc2Uge1xuICAgIGRvY2N5ID0gdG9wTGV2ZWxbJ19fR0xPQkFMX0RPQ1VNRU5UX0NBQ0hFQDQnXTtcblxuICAgIGlmICghZG9jY3kpIHtcbiAgICAgICAgZG9jY3kgPSB0b3BMZXZlbFsnX19HTE9CQUxfRE9DVU1FTlRfQ0FDSEVANCddID0gbWluRG9jO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb2NjeTtcbiIsInZhciBjb252ZXJ0SFRNTCA9IHJlcXVpcmUoJy4vbGliL2h0bWwtdG8tdmRvbScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbml0aWFsaXplQ29udmVydGVyIChkZXBlbmRlbmNpZXMpIHtcbiAgICBpZiAoIWRlcGVuZGVuY2llcy5WTm9kZSB8fCAhZGVwZW5kZW5jaWVzLlZUZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaHRtbC10by12ZG9tIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkIHdpdGggVk5vZGUgYW5kIFZUZXh0Jyk7XG4gICAgfVxuICAgIHJldHVybiBjb252ZXJ0SFRNTChkZXBlbmRlbmNpZXMuVk5vZGUsIGRlcGVuZGVuY2llcy5WVGV4dCk7XG59O1xuIiwiLypcbiAgICBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYzI2NTUwNGZlMmZkZWFkZjBlNTM1ODg3OWEzYzE0MTYyOGIzN2EyMy9zcmMvcmVuZGVyZXJzL2RvbS9zaGFyZWQvSFRNTERPTVByb3BlcnR5Q29uZmlnLmpzXG4gKi9cbnZhciBkZWNvZGUgPSByZXF1aXJlKCdlbnQnKS5kZWNvZGU7XG5cbnZhciBNVVNUX1VTRV9BVFRSSUJVVEUgPSAweDE7XG52YXIgTVVTVF9VU0VfUFJPUEVSVFkgPSAweDI7XG52YXIgSEFTX0JPT0xFQU5fVkFMVUUgPSAweDg7XG52YXIgSEFTX05VTUVSSUNfVkFMVUUgPSAweDEwO1xudmFyIEhBU19QT1NJVElWRV9OVU1FUklDX1ZBTFVFID0gMHgyMCB8IDB4MTA7XG52YXIgSEFTX09WRVJMT0FERURfQk9PTEVBTl9WQUxVRSA9IDB4NDA7XG5cbmZ1bmN0aW9uIGNoZWNrTWFzayh2YWx1ZSwgYml0bWFzaykge1xuICByZXR1cm4gKHZhbHVlICYgYml0bWFzaykgPT09IGJpdG1hc2s7XG59XG5cbnZhciBpc0N1c3RvbUF0dHJpYnV0ZSA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdC5iaW5kKFxuICAgIC9eKGRhdGF8YXJpYSktW2Etel9dW2EtelxcZF8uXFwtXSokL1xuKTtcblxudmFyIEhUTUxET01Qcm9wZXJ0eUNvbmZpZyA9IHtcbiAgXG4gIFByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBTdGFuZGFyZCBQcm9wZXJ0aWVzXG4gICAgICovXG4gICAgYWNjZXB0OiBudWxsLFxuICAgIGFjY2VwdENoYXJzZXQ6IG51bGwsXG4gICAgYWNjZXNzS2V5OiBudWxsLFxuICAgIGFjdGlvbjogbnVsbCxcbiAgICBhbGxvd0Z1bGxTY3JlZW46IE1VU1RfVVNFX0FUVFJJQlVURSB8IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGFsbG93VHJhbnNwYXJlbmN5OiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgYWx0OiBudWxsLFxuICAgIGFzeW5jOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBhdXRvQ29tcGxldGU6IG51bGwsXG4gICAgYXV0b0ZvY3VzOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBhdXRvUGxheTogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgY2FwdHVyZTogTVVTVF9VU0VfQVRUUklCVVRFIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgY2VsbFBhZGRpbmc6IG51bGwsXG4gICAgY2VsbFNwYWNpbmc6IG51bGwsXG4gICAgY2hhclNldDogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGNoYWxsZW5nZTogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGNoZWNrZWQ6IE1VU1RfVVNFX1BST1BFUlRZIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgY2xhc3NJRDogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIC8vIFRvIHNldCBjbGFzc05hbWUgb24gU1ZHIGVsZW1lbnRzLCBpdCdzIG5lY2Vzc2FyeSB0byB1c2UgLnNldEF0dHJpYnV0ZTtcbiAgICAvLyB0aGlzIHdvcmtzIG9uIEhUTUwgZWxlbWVudHMgdG9vIGluIGFsbCBicm93c2VycyBleGNlcHQgSUU4LlxuICAgIGNsYXNzTmFtZTogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGNvbHM6IE1VU1RfVVNFX0FUVFJJQlVURSB8IEhBU19QT1NJVElWRV9OVU1FUklDX1ZBTFVFLFxuICAgIGNvbFNwYW46IG51bGwsXG4gICAgY29udGVudDogbnVsbCxcbiAgICBjb250ZW50RWRpdGFibGU6IG51bGwsXG4gICAgY29udGV4dE1lbnU6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBjb250cm9sczogTVVTVF9VU0VfUFJPUEVSVFkgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBjb29yZHM6IG51bGwsXG4gICAgY3Jvc3NPcmlnaW46IG51bGwsXG4gICAgZGF0YTogbnVsbCwgLy8gRm9yIGA8b2JqZWN0IC8+YCBhY3RzIGFzIGBzcmNgLlxuICAgIGRhdGVUaW1lOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgZGVmZXI6IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGRpcjogbnVsbCxcbiAgICBkaXNhYmxlZDogTVVTVF9VU0VfQVRUUklCVVRFIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgZG93bmxvYWQ6IEhBU19PVkVSTE9BREVEX0JPT0xFQU5fVkFMVUUsXG4gICAgZHJhZ2dhYmxlOiBudWxsLFxuICAgIGVuY1R5cGU6IG51bGwsXG4gICAgZm9ybTogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGZvcm1BY3Rpb246IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBmb3JtRW5jVHlwZTogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGZvcm1NZXRob2Q6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBmb3JtTm9WYWxpZGF0ZTogSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgZm9ybVRhcmdldDogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGZyYW1lQm9yZGVyOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgaGVhZGVyczogbnVsbCxcbiAgICBoZWlnaHQ6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBoaWRkZW46IE1VU1RfVVNFX0FUVFJJQlVURSB8IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGhpZ2g6IG51bGwsXG4gICAgaHJlZjogbnVsbCxcbiAgICBocmVmTGFuZzogbnVsbCxcbiAgICBodG1sRm9yOiBudWxsLFxuICAgIGh0dHBFcXVpdjogbnVsbCxcbiAgICBpY29uOiBudWxsLFxuICAgIGlkOiBNVVNUX1VTRV9QUk9QRVJUWSxcbiAgICBpczogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGtleVBhcmFtczogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGtleVR5cGU6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBsYW5nOiBudWxsLFxuICAgIGxpc3Q6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBsb29wOiBNVVNUX1VTRV9QUk9QRVJUWSB8IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIGxvdzogbnVsbCxcbiAgICBtYW5pZmVzdDogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIG1hcmdpbkhlaWdodDogbnVsbCxcbiAgICBtYXJnaW5XaWR0aDogbnVsbCxcbiAgICBtYXg6IG51bGwsXG4gICAgbWF4TGVuZ3RoOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgbWVkaWE6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBtZWRpYUdyb3VwOiBudWxsLFxuICAgIG1ldGhvZDogbnVsbCxcbiAgICBtaW46IG51bGwsXG4gICAgbWluTGVuZ3RoOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgbXVsdGlwbGU6IE1VU1RfVVNFX1BST1BFUlRZIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgbXV0ZWQ6IE1VU1RfVVNFX1BST1BFUlRZIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgbmFtZTogbnVsbCxcbiAgICBub1ZhbGlkYXRlOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBvcGVuOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBvcHRpbXVtOiBudWxsLFxuICAgIHBhdHRlcm46IG51bGwsXG4gICAgcGxhY2Vob2xkZXI6IG51bGwsXG4gICAgcG9zdGVyOiBudWxsLFxuICAgIHByZWxvYWQ6IG51bGwsXG4gICAgcmFkaW9Hcm91cDogbnVsbCxcbiAgICByZWFkT25seTogTVVTVF9VU0VfUFJPUEVSVFkgfCBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICByZWw6IG51bGwsXG4gICAgcmVxdWlyZWQ6IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIHJvbGU6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICByb3dzOiBNVVNUX1VTRV9BVFRSSUJVVEUgfCBIQVNfUE9TSVRJVkVfTlVNRVJJQ19WQUxVRSxcbiAgICByb3dTcGFuOiBudWxsLFxuICAgIHNhbmRib3g6IG51bGwsXG4gICAgc2NvcGU6IG51bGwsXG4gICAgc2NvcGVkOiBIQVNfQk9PTEVBTl9WQUxVRSxcbiAgICBzY3JvbGxpbmc6IG51bGwsXG4gICAgc2VhbWxlc3M6IE1VU1RfVVNFX0FUVFJJQlVURSB8IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIHNlbGVjdGVkOiBNVVNUX1VTRV9QUk9QRVJUWSB8IEhBU19CT09MRUFOX1ZBTFVFLFxuICAgIHNoYXBlOiBudWxsLFxuICAgIHNpemU6IE1VU1RfVVNFX0FUVFJJQlVURSB8IEhBU19QT1NJVElWRV9OVU1FUklDX1ZBTFVFLFxuICAgIHNpemVzOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgc3BhbjogSEFTX1BPU0lUSVZFX05VTUVSSUNfVkFMVUUsXG4gICAgc3BlbGxDaGVjazogbnVsbCxcbiAgICBzcmM6IG51bGwsXG4gICAgc3JjRG9jOiBNVVNUX1VTRV9QUk9QRVJUWSxcbiAgICBzcmNTZXQ6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICBzdGFydDogSEFTX05VTUVSSUNfVkFMVUUsXG4gICAgc3RlcDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICB0YWJJbmRleDogbnVsbCxcbiAgICB0YXJnZXQ6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB1c2VNYXA6IG51bGwsXG4gICAgdmFsdWU6IE1VU1RfVVNFX1BST1BFUlRZLFxuICAgIHdpZHRoOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgd21vZGU6IE1VU1RfVVNFX0FUVFJJQlVURSxcblxuICAgIC8qKlxuICAgICAqIE5vbi1zdGFuZGFyZCBQcm9wZXJ0aWVzXG4gICAgICovXG4gICAgLy8gYXV0b0NhcGl0YWxpemUgYW5kIGF1dG9Db3JyZWN0IGFyZSBzdXBwb3J0ZWQgaW4gTW9iaWxlIFNhZmFyaSBmb3JcbiAgICAvLyBrZXlib2FyZCBoaW50cy5cbiAgICBhdXRvQ2FwaXRhbGl6ZTogbnVsbCxcbiAgICBhdXRvQ29ycmVjdDogbnVsbCxcbiAgICAvLyBpdGVtUHJvcCwgaXRlbVNjb3BlLCBpdGVtVHlwZSBhcmUgZm9yXG4gICAgLy8gTWljcm9kYXRhIHN1cHBvcnQuIFNlZSBodHRwOi8vc2NoZW1hLm9yZy9kb2NzL2dzLmh0bWxcbiAgICBpdGVtUHJvcDogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIGl0ZW1TY29wZTogTVVTVF9VU0VfQVRUUklCVVRFIHwgSEFTX0JPT0xFQU5fVkFMVUUsXG4gICAgaXRlbVR5cGU6IE1VU1RfVVNFX0FUVFJJQlVURSxcbiAgICAvLyBpdGVtSUQgYW5kIGl0ZW1SZWYgYXJlIGZvciBNaWNyb2RhdGEgc3VwcG9ydCBhcyB3ZWxsIGJ1dFxuICAgIC8vIG9ubHkgc3BlY2lmaWVkIGluIHRoZSB0aGUgV0hBVFdHIHNwZWMgZG9jdW1lbnQuIFNlZVxuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL21pY3JvZGF0YS5odG1sI21pY3JvZGF0YS1kb20tYXBpXG4gICAgaXRlbUlEOiBNVVNUX1VTRV9BVFRSSUJVVEUsXG4gICAgaXRlbVJlZjogTVVTVF9VU0VfQVRUUklCVVRFLFxuICAgIC8vIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBmb3IgT3BlbkdyYXBoIGluIG1ldGEgdGFncy5cbiAgICBwcm9wZXJ0eTogbnVsbCxcbiAgICAvLyBJRS1vbmx5IGF0dHJpYnV0ZSB0aGF0IGNvbnRyb2xzIGZvY3VzIGJlaGF2aW9yXG4gICAgdW5zZWxlY3RhYmxlOiBNVVNUX1VTRV9BVFRSSUJVVEVcbiAgfVxufTtcblxudmFyIHBhcnNlU3R5bGVzID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IGlucHV0LnNwbGl0KCc7Jyk7XG4gICAgdmFyIHN0eWxlcyA9IGF0dHJpYnV0ZXMucmVkdWNlKGZ1bmN0aW9uKG9iamVjdCwgYXR0cmlidXRlKXtcbiAgICAgICAgdmFyIGVudHJ5ID0gYXR0cmlidXRlLnNwbGl0KC86KC4rKS8pO1xuICAgICAgICBpZiAoZW50cnlbMF0gJiYgZW50cnlbMV0pIHtcbiAgICAgICAgICAgIG9iamVjdFtlbnRyeVswXS50cmltKCldID0gZW50cnlbMV0udHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSx7fSk7XG4gICAgcmV0dXJuIHN0eWxlcztcbn07XG5cbnZhciBwcm9wZXJ0eVRvQXR0cmlidXRlTWFwcGluZyA9IHtcbiAgICAnY2xhc3NOYW1lJzogJ2NsYXNzJyxcbiAgICAnaHRtbEZvcic6ICdmb3InLFxuICAgICdodHRwRXF1aXYnOiAnaHR0cC1lcXVpdicsXG4gICAgJ2FjY2VwdENoYXJzZXQnOiAnYWNjZXB0LWNoYXJzZXQnXG59O1xuXG52YXIgcHJvcGVydHlWYWx1ZUNvbnZlcnNpb25zID0ge1xuICAgICdzdHlsZSc6IHBhcnNlU3R5bGVzLFxuICAgICdwbGFjZWhvbGRlcic6IGRlY29kZSxcbiAgICAndGl0bGUnOiBkZWNvZGUsXG4gICAgJ2FsdCc6IGRlY29kZVxufTtcblxudmFyIGdldFByb3BlcnR5SW5mbyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb3BJbmZvQnlBdHRyaWJ1dGVOYW1lID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhIVE1MRE9NUHJvcGVydHlDb25maWcuUHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgdmFyIHByb3BDb25maWcgPSBIVE1MRE9NUHJvcGVydHlDb25maWcuUHJvcGVydGllc1twcm9wTmFtZV07XG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlUb0F0dHJpYnV0ZU1hcHBpbmdbcHJvcE5hbWVdIHx8IHByb3BOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgdmFyIHByb3BlcnR5SW5mbyA9IHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BOYW1lLFxuXG4gICAgICAgICAgICBtdXN0VXNlQXR0cmlidXRlOiBjaGVja01hc2socHJvcENvbmZpZywgTVVTVF9VU0VfQVRUUklCVVRFKSxcbiAgICAgICAgICAgIG11c3RVc2VQcm9wZXJ0eTogY2hlY2tNYXNrKHByb3BDb25maWcsIE1VU1RfVVNFX1BST1BFUlRZKSxcbiAgICAgICAgICAgIGhhc0Jvb2xlYW5WYWx1ZTogY2hlY2tNYXNrKHByb3BDb25maWcsIEhBU19CT09MRUFOX1ZBTFVFKSxcbiAgICAgICAgICAgIGhhc051bWVyaWNWYWx1ZTogY2hlY2tNYXNrKHByb3BDb25maWcsIEhBU19OVU1FUklDX1ZBTFVFKSxcbiAgICAgICAgICAgIGhhc1Bvc2l0aXZlTnVtZXJpY1ZhbHVlOlxuICAgICAgICAgICAgY2hlY2tNYXNrKHByb3BDb25maWcsIEhBU19QT1NJVElWRV9OVU1FUklDX1ZBTFVFKSxcbiAgICAgICAgICAgIGhhc092ZXJsb2FkZWRCb29sZWFuVmFsdWU6XG4gICAgICAgICAgICBjaGVja01hc2socHJvcENvbmZpZywgSEFTX09WRVJMT0FERURfQk9PTEVBTl9WQUxVRSksXG4gICAgICAgIH07XG5cbiAgICAgICAgcHJvcEluZm9CeUF0dHJpYnV0ZU5hbWVbYXR0cmlidXRlTmFtZV0gPSBwcm9wZXJ0eUluZm87XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHByb3BJbmZvQnlBdHRyaWJ1dGVOYW1lW2F0dHJpYnV0ZU5hbWVdO1xuICAgIH07XG59KSgpO1xuXG5cbnZhciBjb252ZXJ0VGFnQXR0cmlidXRlcyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHRhZy5hdHRyaWJzO1xuXG4gICAgdmFyIHZkb21Qcm9wZXJ0aWVzID0ge1xuICAgICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIHZhciBsb3dlckNhc2VkID0gYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgcHJvcEluZm8gPSBnZXRQcm9wZXJ0eUluZm8obG93ZXJDYXNlZCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXTtcbiAgICAgICAgaWYgKGlzQ3VzdG9tQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpIHx8ICFwcm9wSW5mbykge1xuICAgICAgICAgICAgdmRvbVByb3BlcnRpZXMuYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2YXIgdmFsdWVDb252ZXJ0ZXIgPSBwcm9wZXJ0eVZhbHVlQ29udmVyc2lvbnNbcHJvcEluZm8ucHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlQ29udmVydGVyKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlQ29udmVydGVyKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wSW5mby5tdXN0VXNlQXR0cmlidXRlKSB7XG4gICAgICAgICAgICBpZiAocHJvcEluZm8uaGFzQm9vbGVhblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQm9vbGVhbiBhdHRyaWJ1dGVzIGNvbWUgaW4gYXMgYW4gZW1wdHkgc3RyaW5nIG9yIHRoZSBcbiAgICAgICAgICAgICAgICB2ZG9tUHJvcGVydGllcy5hdHRyaWJ1dGVzW3Byb3BJbmZvLmF0dHJpYnV0ZU5hbWVdID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ZG9tUHJvcGVydGllcy5hdHRyaWJ1dGVzW3Byb3BJbmZvLmF0dHJpYnV0ZU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQW55dGhpbmcgd2UgZG9uJ3Qgc2V0IGFzIGFuIGF0dHJpYnV0ZSBpcyB0cmVhdGVkIGFzIGEgcHJvcGVydHlcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaXNUcnVlO1xuICAgICAgICAgICAgaWYgKHByb3BJbmZvLmhhc0Jvb2xlYW5WYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlzVHJ1ZSA9ICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gcHJvcEluZm8uYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgdmRvbVByb3BlcnRpZXNbcHJvcEluZm8ucHJvcGVydHlOYW1lXSA9IGlzVHJ1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3BJbmZvLmhhc092ZXJsb2FkZWRCb29sZWFuVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpc1RydWUgPSAodmFsdWUgPT09ICcnKTtcbiAgICAgICAgICAgICAgICB2ZG9tUHJvcGVydGllc1twcm9wSW5mby5wcm9wZXJ0eU5hbWVdID0gaXNUcnVlID8gdHJ1ZSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcEluZm8uaGFzTnVtZXJpY1ZhbHVlIHx8IHByb3BJbmZvLmhhc1Bvc2l0aXZlTnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmRvbVByb3BlcnRpZXNbcHJvcEluZm8ucHJvcGVydHlOYW1lXSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ZG9tUHJvcGVydGllc1twcm9wSW5mby5wcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZkb21Qcm9wZXJ0aWVzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0VGFnQXR0cmlidXRlcztcbiIsInZhciBjcmVhdGVDb252ZXJ0ZXIgPSByZXF1aXJlKCcuL2h0bWxwYXJzZXItdG8tdmRvbScpO1xudmFyIHBhcnNlSFRNTCA9IHJlcXVpcmUoJy4vcGFyc2UtaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaXRpYWxpemVIdG1sVG9WZG9tIChWVHJlZSwgVlRleHQpIHtcbiAgICB2YXIgaHRtbHBhcnNlclRvVmRvbSA9IGNyZWF0ZUNvbnZlcnRlcihWVHJlZSwgVlRleHQpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjb252ZXJ0SFRNTChvcHRpb25zLCBodG1sKSB7XG4gICAgICAgIHZhciBub09wdGlvbnMgPSB0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnO1xuICAgICAgICB2YXIgaGFzT3B0aW9ucyA9ICFub09wdGlvbnM7XG5cbiAgICAgICAgLy8gd2FzIGh0bWwgc3VwcGxpZWQgYXMgdGhlIG9ubHkgYXJndW1lbnQ/XG4gICAgICAgIHZhciBodG1sVG9Db252ZXJ0ID0gbm9PcHRpb25zID8gb3B0aW9ucyA6IGh0bWw7XG4gICAgICAgIHZhciBnZXRWTm9kZUtleSA9IGhhc09wdGlvbnMgPyBvcHRpb25zLmdldFZOb2RlS2V5IDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHZhciB0YWdzID0gcGFyc2VIVE1MKGh0bWxUb0NvbnZlcnQpO1xuXG4gICAgICAgIHZhciBjb252ZXJ0ZWRIVE1MO1xuICAgICAgICBpZiAodGFncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb252ZXJ0ZWRIVE1MID0gdGFncy5tYXAoZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBodG1scGFyc2VyVG9WZG9tLmNvbnZlcnQodGFnLCBnZXRWTm9kZUtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZEhUTUwgPSBodG1scGFyc2VyVG9WZG9tLmNvbnZlcnQodGFnc1swXSwgZ2V0Vk5vZGVLZXkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29udmVydGVkSFRNTDtcbiAgICB9O1xufTtcbiIsInZhciBkZWNvZGUgPSByZXF1aXJlKCdlbnQnKS5kZWNvZGU7XG52YXIgY29udmVydFRhZ0F0dHJpYnV0ZXMgPSByZXF1aXJlKCcuL2NvbnZlcnQtdGFnLWF0dHJpYnV0ZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVDb252ZXJ0ZXIgKFZOb2RlLCBWVGV4dCkge1xuICAgIHZhciBjb252ZXJ0ZXIgPSB7XG4gICAgICAgIGNvbnZlcnQ6IGZ1bmN0aW9uIChub2RlLCBnZXRWTm9kZUtleSkge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RhZycgfHwgbm9kZS50eXBlID09PSAnc2NyaXB0JyB8fCBub2RlLnR5cGUgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udmVydGVyLmNvbnZlcnRUYWcobm9kZSwgZ2V0Vk5vZGVLZXkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVlRleHQoZGVjb2RlKG5vZGUuZGF0YSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0aW5nIGFuIHVuc3VwcG9ydGVkIG5vZGUsIHJldHVybiBhbiBlbXB0eSB0ZXh0IG5vZGUgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZUZXh0KCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29udmVydFRhZzogZnVuY3Rpb24gKHRhZywgZ2V0Vk5vZGVLZXkpIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzID0gY29udmVydFRhZ0F0dHJpYnV0ZXModGFnKTtcbiAgICAgICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgICAgIGlmIChnZXRWTm9kZUtleSkge1xuICAgICAgICAgICAgICAgIGtleSA9IGdldFZOb2RlS2V5KGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwodGFnLmNoaWxkcmVuIHx8IFtdLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRlci5jb252ZXJ0KG5vZGUsIGdldFZOb2RlS2V5KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZOb2RlKHRhZy5uYW1lLCBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwga2V5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGNvbnZlcnRlcjtcbn07XG4iLCJ2YXIgaHRtbHBhcnNlciA9IHJlcXVpcmUoJ2h0bWxwYXJzZXIyJyk7XG5cbnZhciBwYXJzZUhUTUwgPSBmdW5jdGlvbiBwYXJzZUhUTUwgKGh0bWwpIHtcbiAgICB2YXIgaGFuZGxlciA9IG5ldyBodG1scGFyc2VyLkRvbUhhbmRsZXIoKTtcblxuICAgIHZhciBwYXJzZXIgPSBuZXcgaHRtbHBhcnNlci5QYXJzZXIoaGFuZGxlciwge1xuICAgICAgICBsb3dlckNhc2VBdHRyaWJ1dGVOYW1lczogZmFsc2VcbiAgICB9KTtcbiAgICBwYXJzZXIucGFyc2VDb21wbGV0ZShodG1sKTtcbiAgICByZXR1cm4gaGFuZGxlci5kb207XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlSFRNTDtcbiIsIm1vZHVsZS5leHBvcnRzID0gQ29sbGVjdGluZ0hhbmRsZXI7XG5cbmZ1bmN0aW9uIENvbGxlY3RpbmdIYW5kbGVyKGNicykge1xuICAgIHRoaXMuX2NicyA9IGNicyB8fCB7fTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xufVxuXG52YXIgRVZFTlRTID0gcmVxdWlyZShcIi4vXCIpLkVWRU5UUztcbk9iamVjdC5rZXlzKEVWRU5UUykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKEVWRU5UU1tuYW1lXSA9PT0gMCkge1xuICAgICAgICBuYW1lID0gXCJvblwiICsgbmFtZTtcbiAgICAgICAgQ29sbGVjdGluZ0hhbmRsZXIucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKFtuYW1lXSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzW25hbWVdKSB0aGlzLl9jYnNbbmFtZV0oKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKEVWRU5UU1tuYW1lXSA9PT0gMSkge1xuICAgICAgICBuYW1lID0gXCJvblwiICsgbmFtZTtcbiAgICAgICAgQ29sbGVjdGluZ0hhbmRsZXIucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaChbbmFtZSwgYV0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nic1tuYW1lXSkgdGhpcy5fY2JzW25hbWVdKGEpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoRVZFTlRTW25hbWVdID09PSAyKSB7XG4gICAgICAgIG5hbWUgPSBcIm9uXCIgKyBuYW1lO1xuICAgICAgICBDb2xsZWN0aW5nSGFuZGxlci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKFtuYW1lLCBhLCBiXSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzW25hbWVdKSB0aGlzLl9jYnNbbmFtZV0oYSwgYik7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJ3cm9uZyBudW1iZXIgb2YgYXJndW1lbnRzXCIpO1xuICAgIH1cbn0pO1xuXG5Db2xsZWN0aW5nSGFuZGxlci5wcm90b3R5cGUub25yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgaWYgKHRoaXMuX2Nicy5vbnJlc2V0KSB0aGlzLl9jYnMub25yZXNldCgpO1xufTtcblxuQ29sbGVjdGluZ0hhbmRsZXIucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2JzLm9ucmVzZXQpIHRoaXMuX2Nicy5vbnJlc2V0KCk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5ldmVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nic1t0aGlzLmV2ZW50c1tpXVswXV0pIHtcbiAgICAgICAgICAgIHZhciBudW0gPSB0aGlzLmV2ZW50c1tpXS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChudW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnNbdGhpcy5ldmVudHNbaV1bMF1dKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nic1t0aGlzLmV2ZW50c1tpXVswXV0odGhpcy5ldmVudHNbaV1bMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYnNbdGhpcy5ldmVudHNbaV1bMF1dKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c1tpXVsxXSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHNbaV1bMl1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsInZhciBEb21IYW5kbGVyID0gcmVxdWlyZShcImRvbWhhbmRsZXJcIik7XG52YXIgRG9tVXRpbHMgPSByZXF1aXJlKFwiZG9tdXRpbHNcIik7XG5cbi8vVE9ETzogbWFrZSB0aGlzIGEgc3RyZWFtYWJsZSBoYW5kbGVyXG5mdW5jdGlvbiBGZWVkSGFuZGxlcihjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIHRoaXMuaW5pdChjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5cbnJlcXVpcmUoXCJpbmhlcml0c1wiKShGZWVkSGFuZGxlciwgRG9tSGFuZGxlcik7XG5cbkZlZWRIYW5kbGVyLnByb3RvdHlwZS5pbml0ID0gRG9tSGFuZGxlcjtcblxuZnVuY3Rpb24gZ2V0RWxlbWVudHMod2hhdCwgd2hlcmUpIHtcbiAgICByZXR1cm4gRG9tVXRpbHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUod2hhdCwgd2hlcmUsIHRydWUpO1xufVxuZnVuY3Rpb24gZ2V0T25lRWxlbWVudCh3aGF0LCB3aGVyZSkge1xuICAgIHJldHVybiBEb21VdGlscy5nZXRFbGVtZW50c0J5VGFnTmFtZSh3aGF0LCB3aGVyZSwgdHJ1ZSwgMSlbMF07XG59XG5mdW5jdGlvbiBmZXRjaCh3aGF0LCB3aGVyZSwgcmVjdXJzZSkge1xuICAgIHJldHVybiBEb21VdGlscy5nZXRUZXh0KFxuICAgICAgICBEb21VdGlscy5nZXRFbGVtZW50c0J5VGFnTmFtZSh3aGF0LCB3aGVyZSwgcmVjdXJzZSwgMSlcbiAgICApLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gYWRkQ29uZGl0aW9uYWxseShvYmosIHByb3AsIHdoYXQsIHdoZXJlLCByZWN1cnNlKSB7XG4gICAgdmFyIHRtcCA9IGZldGNoKHdoYXQsIHdoZXJlLCByZWN1cnNlKTtcbiAgICBpZiAodG1wKSBvYmpbcHJvcF0gPSB0bXA7XG59XG5cbnZhciBpc1ZhbGlkRmVlZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBcInJzc1wiIHx8IHZhbHVlID09PSBcImZlZWRcIiB8fCB2YWx1ZSA9PT0gXCJyZGY6UkRGXCI7XG59O1xuXG5GZWVkSGFuZGxlci5wcm90b3R5cGUub25lbmQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmVlZCA9IHt9LFxuICAgICAgICBmZWVkUm9vdCA9IGdldE9uZUVsZW1lbnQoaXNWYWxpZEZlZWQsIHRoaXMuZG9tKSxcbiAgICAgICAgdG1wLFxuICAgICAgICBjaGlsZHM7XG5cbiAgICBpZiAoZmVlZFJvb3QpIHtcbiAgICAgICAgaWYgKGZlZWRSb290Lm5hbWUgPT09IFwiZmVlZFwiKSB7XG4gICAgICAgICAgICBjaGlsZHMgPSBmZWVkUm9vdC5jaGlsZHJlbjtcblxuICAgICAgICAgICAgZmVlZC50eXBlID0gXCJhdG9tXCI7XG4gICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwiaWRcIiwgXCJpZFwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcInRpdGxlXCIsIFwidGl0bGVcIiwgY2hpbGRzKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAodG1wID0gZ2V0T25lRWxlbWVudChcImxpbmtcIiwgY2hpbGRzKSkgJiZcbiAgICAgICAgICAgICAgICAodG1wID0gdG1wLmF0dHJpYnMpICYmXG4gICAgICAgICAgICAgICAgKHRtcCA9IHRtcC5ocmVmKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGZlZWQubGluayA9IHRtcDtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJkZXNjcmlwdGlvblwiLCBcInN1YnRpdGxlXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICBpZiAoKHRtcCA9IGZldGNoKFwidXBkYXRlZFwiLCBjaGlsZHMpKSkgZmVlZC51cGRhdGVkID0gbmV3IERhdGUodG1wKTtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJhdXRob3JcIiwgXCJlbWFpbFwiLCBjaGlsZHMsIHRydWUpO1xuXG4gICAgICAgICAgICBmZWVkLml0ZW1zID0gZ2V0RWxlbWVudHMoXCJlbnRyeVwiLCBjaGlsZHMpLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0ge30sXG4gICAgICAgICAgICAgICAgICAgIHRtcDtcblxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJpZFwiLCBcImlkXCIsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwidGl0bGVcIiwgXCJ0aXRsZVwiLCBpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICh0bXAgPSBnZXRPbmVFbGVtZW50KFwibGlua1wiLCBpdGVtKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHRtcCA9IHRtcC5hdHRyaWJzKSAmJlxuICAgICAgICAgICAgICAgICAgICAodG1wID0gdG1wLmhyZWYpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5saW5rID0gdG1wO1xuICAgICAgICAgICAgICAgIGlmICgodG1wID0gZmV0Y2goXCJzdW1tYXJ5XCIsIGl0ZW0pIHx8IGZldGNoKFwiY29udGVudFwiLCBpdGVtKSkpXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmRlc2NyaXB0aW9uID0gdG1wO1xuICAgICAgICAgICAgICAgIGlmICgodG1wID0gZmV0Y2goXCJ1cGRhdGVkXCIsIGl0ZW0pKSlcbiAgICAgICAgICAgICAgICAgICAgZW50cnkucHViRGF0ZSA9IG5ldyBEYXRlKHRtcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZHMgPSBnZXRPbmVFbGVtZW50KFwiY2hhbm5lbFwiLCBmZWVkUm9vdC5jaGlsZHJlbikuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIGZlZWQudHlwZSA9IGZlZWRSb290Lm5hbWUuc3Vic3RyKDAsIDMpO1xuICAgICAgICAgICAgZmVlZC5pZCA9IFwiXCI7XG4gICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwidGl0bGVcIiwgXCJ0aXRsZVwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShmZWVkLCBcImxpbmtcIiwgXCJsaW5rXCIsIGNoaWxkcyk7XG4gICAgICAgICAgICBhZGRDb25kaXRpb25hbGx5KGZlZWQsIFwiZGVzY3JpcHRpb25cIiwgXCJkZXNjcmlwdGlvblwiLCBjaGlsZHMpO1xuICAgICAgICAgICAgaWYgKCh0bXAgPSBmZXRjaChcImxhc3RCdWlsZERhdGVcIiwgY2hpbGRzKSkpXG4gICAgICAgICAgICAgICAgZmVlZC51cGRhdGVkID0gbmV3IERhdGUodG1wKTtcbiAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZmVlZCwgXCJhdXRob3JcIiwgXCJtYW5hZ2luZ0VkaXRvclwiLCBjaGlsZHMsIHRydWUpO1xuXG4gICAgICAgICAgICBmZWVkLml0ZW1zID0gZ2V0RWxlbWVudHMoXCJpdGVtXCIsIGZlZWRSb290LmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0ge30sXG4gICAgICAgICAgICAgICAgICAgIHRtcDtcblxuICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJpZFwiLCBcImd1aWRcIiwgaXRlbSk7XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJ0aXRsZVwiLCBcInRpdGxlXCIsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIGFkZENvbmRpdGlvbmFsbHkoZW50cnksIFwibGlua1wiLCBcImxpbmtcIiwgaXRlbSk7XG4gICAgICAgICAgICAgICAgYWRkQ29uZGl0aW9uYWxseShlbnRyeSwgXCJkZXNjcmlwdGlvblwiLCBcImRlc2NyaXB0aW9uXCIsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmICgodG1wID0gZmV0Y2goXCJwdWJEYXRlXCIsIGl0ZW0pKSlcbiAgICAgICAgICAgICAgICAgICAgZW50cnkucHViRGF0ZSA9IG5ldyBEYXRlKHRtcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kb20gPSBmZWVkO1xuICAgIERvbUhhbmRsZXIucHJvdG90eXBlLl9oYW5kbGVDYWxsYmFjay5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICBmZWVkUm9vdCA/IG51bGwgOiBFcnJvcihcImNvdWxkbid0IGZpbmQgcm9vdCBvZiBmZWVkXCIpXG4gICAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmVlZEhhbmRsZXI7XG4iLCJ2YXIgVG9rZW5pemVyID0gcmVxdWlyZShcIi4vVG9rZW5pemVyLmpzXCIpO1xuXG4vKlxuXHRPcHRpb25zOlxuXG5cdHhtbE1vZGU6IERpc2FibGVzIHRoZSBzcGVjaWFsIGJlaGF2aW9yIGZvciBzY3JpcHQvc3R5bGUgdGFncyAoZmFsc2UgYnkgZGVmYXVsdClcblx0bG93ZXJDYXNlQXR0cmlidXRlTmFtZXM6IGNhbGwgLnRvTG93ZXJDYXNlIGZvciBlYWNoIGF0dHJpYnV0ZSBuYW1lICh0cnVlIGlmIHhtbE1vZGUgaXMgYGZhbHNlYClcblx0bG93ZXJDYXNlVGFnczogY2FsbCAudG9Mb3dlckNhc2UgZm9yIGVhY2ggdGFnIG5hbWUgKHRydWUgaWYgeG1sTW9kZSBpcyBgZmFsc2VgKVxuKi9cblxuLypcblx0Q2FsbGJhY2tzOlxuXG5cdG9uY2RhdGFlbmQsXG5cdG9uY2RhdGFzdGFydCxcblx0b25jbG9zZXRhZyxcblx0b25jb21tZW50LFxuXHRvbmNvbW1lbnRlbmQsXG5cdG9uZXJyb3IsXG5cdG9ub3BlbnRhZyxcblx0b25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24sXG5cdG9ucmVzZXQsXG5cdG9udGV4dFxuKi9cblxudmFyIGZvcm1UYWdzID0ge1xuICAgIGlucHV0OiB0cnVlLFxuICAgIG9wdGlvbjogdHJ1ZSxcbiAgICBvcHRncm91cDogdHJ1ZSxcbiAgICBzZWxlY3Q6IHRydWUsXG4gICAgYnV0dG9uOiB0cnVlLFxuICAgIGRhdGFsaXN0OiB0cnVlLFxuICAgIHRleHRhcmVhOiB0cnVlXG59O1xuXG52YXIgb3BlbkltcGxpZXNDbG9zZSA9IHtcbiAgICB0cjogeyB0cjogdHJ1ZSwgdGg6IHRydWUsIHRkOiB0cnVlIH0sXG4gICAgdGg6IHsgdGg6IHRydWUgfSxcbiAgICB0ZDogeyB0aGVhZDogdHJ1ZSwgdGg6IHRydWUsIHRkOiB0cnVlIH0sXG4gICAgYm9keTogeyBoZWFkOiB0cnVlLCBsaW5rOiB0cnVlLCBzY3JpcHQ6IHRydWUgfSxcbiAgICBsaTogeyBsaTogdHJ1ZSB9LFxuICAgIHA6IHsgcDogdHJ1ZSB9LFxuICAgIGgxOiB7IHA6IHRydWUgfSxcbiAgICBoMjogeyBwOiB0cnVlIH0sXG4gICAgaDM6IHsgcDogdHJ1ZSB9LFxuICAgIGg0OiB7IHA6IHRydWUgfSxcbiAgICBoNTogeyBwOiB0cnVlIH0sXG4gICAgaDY6IHsgcDogdHJ1ZSB9LFxuICAgIHNlbGVjdDogZm9ybVRhZ3MsXG4gICAgaW5wdXQ6IGZvcm1UYWdzLFxuICAgIG91dHB1dDogZm9ybVRhZ3MsXG4gICAgYnV0dG9uOiBmb3JtVGFncyxcbiAgICBkYXRhbGlzdDogZm9ybVRhZ3MsXG4gICAgdGV4dGFyZWE6IGZvcm1UYWdzLFxuICAgIG9wdGlvbjogeyBvcHRpb246IHRydWUgfSxcbiAgICBvcHRncm91cDogeyBvcHRncm91cDogdHJ1ZSB9XG59O1xuXG52YXIgdm9pZEVsZW1lbnRzID0ge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBhcmVhOiB0cnVlLFxuICAgIGJhc2U6IHRydWUsXG4gICAgYmFzZWZvbnQ6IHRydWUsXG4gICAgYnI6IHRydWUsXG4gICAgY29sOiB0cnVlLFxuICAgIGNvbW1hbmQ6IHRydWUsXG4gICAgZW1iZWQ6IHRydWUsXG4gICAgZnJhbWU6IHRydWUsXG4gICAgaHI6IHRydWUsXG4gICAgaW1nOiB0cnVlLFxuICAgIGlucHV0OiB0cnVlLFxuICAgIGlzaW5kZXg6IHRydWUsXG4gICAga2V5Z2VuOiB0cnVlLFxuICAgIGxpbms6IHRydWUsXG4gICAgbWV0YTogdHJ1ZSxcbiAgICBwYXJhbTogdHJ1ZSxcbiAgICBzb3VyY2U6IHRydWUsXG4gICAgdHJhY2s6IHRydWUsXG4gICAgd2JyOiB0cnVlXG59O1xuXG52YXIgZm9yZWlnbkNvbnRleHRFbGVtZW50cyA9IHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgbWF0aDogdHJ1ZSxcbiAgICBzdmc6IHRydWVcbn07XG52YXIgaHRtbEludGVncmF0aW9uRWxlbWVudHMgPSB7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIG1pOiB0cnVlLFxuICAgIG1vOiB0cnVlLFxuICAgIG1uOiB0cnVlLFxuICAgIG1zOiB0cnVlLFxuICAgIG10ZXh0OiB0cnVlLFxuICAgIFwiYW5ub3RhdGlvbi14bWxcIjogdHJ1ZSxcbiAgICBmb3JlaWduT2JqZWN0OiB0cnVlLFxuICAgIGRlc2M6IHRydWUsXG4gICAgdGl0bGU6IHRydWVcbn07XG5cbnZhciByZV9uYW1lRW5kID0gL1xcc3xcXC8vO1xuXG5mdW5jdGlvbiBQYXJzZXIoY2JzLCBvcHRpb25zKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5fY2JzID0gY2JzIHx8IHt9O1xuXG4gICAgdGhpcy5fdGFnbmFtZSA9IFwiXCI7XG4gICAgdGhpcy5fYXR0cmlibmFtZSA9IFwiXCI7XG4gICAgdGhpcy5fYXR0cmlidmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuX2F0dHJpYnMgPSBudWxsO1xuICAgIHRoaXMuX3N0YWNrID0gW107XG4gICAgdGhpcy5fZm9yZWlnbkNvbnRleHQgPSBbXTtcblxuICAgIHRoaXMuc3RhcnRJbmRleCA9IDA7XG4gICAgdGhpcy5lbmRJbmRleCA9IG51bGw7XG5cbiAgICB0aGlzLl9sb3dlckNhc2VUYWdOYW1lcyA9XG4gICAgICAgIFwibG93ZXJDYXNlVGFnc1wiIGluIHRoaXMuX29wdGlvbnNcbiAgICAgICAgICAgID8gISF0aGlzLl9vcHRpb25zLmxvd2VyQ2FzZVRhZ3NcbiAgICAgICAgICAgIDogIXRoaXMuX29wdGlvbnMueG1sTW9kZTtcbiAgICB0aGlzLl9sb3dlckNhc2VBdHRyaWJ1dGVOYW1lcyA9XG4gICAgICAgIFwibG93ZXJDYXNlQXR0cmlidXRlTmFtZXNcIiBpbiB0aGlzLl9vcHRpb25zXG4gICAgICAgICAgICA/ICEhdGhpcy5fb3B0aW9ucy5sb3dlckNhc2VBdHRyaWJ1dGVOYW1lc1xuICAgICAgICAgICAgOiAhdGhpcy5fb3B0aW9ucy54bWxNb2RlO1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuVG9rZW5pemVyKSB7XG4gICAgICAgIFRva2VuaXplciA9IHRoaXMuX29wdGlvbnMuVG9rZW5pemVyO1xuICAgIH1cbiAgICB0aGlzLl90b2tlbml6ZXIgPSBuZXcgVG9rZW5pemVyKHRoaXMuX29wdGlvbnMsIHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuX2Nicy5vbnBhcnNlcmluaXQpIHRoaXMuX2Nicy5vbnBhcnNlcmluaXQodGhpcyk7XG59XG5cbnJlcXVpcmUoXCJpbmhlcml0c1wiKShQYXJzZXIsIHJlcXVpcmUoXCJldmVudHNcIikuRXZlbnRFbWl0dGVyKTtcblxuUGFyc2VyLnByb3RvdHlwZS5fdXBkYXRlUG9zaXRpb24gPSBmdW5jdGlvbihpbml0aWFsT2Zmc2V0KSB7XG4gICAgaWYgKHRoaXMuZW5kSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Rva2VuaXplci5fc2VjdGlvblN0YXJ0IDw9IGluaXRpYWxPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0SW5kZXggPSB0aGlzLl90b2tlbml6ZXIuX3NlY3Rpb25TdGFydCAtIGluaXRpYWxPZmZzZXQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgdGhpcy5zdGFydEluZGV4ID0gdGhpcy5lbmRJbmRleCArIDE7XG4gICAgdGhpcy5lbmRJbmRleCA9IHRoaXMuX3Rva2VuaXplci5nZXRBYnNvbHV0ZUluZGV4KCk7XG59O1xuXG4vL1Rva2VuaXplciBldmVudCBoYW5kbGVyc1xuUGFyc2VyLnByb3RvdHlwZS5vbnRleHQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oMSk7XG4gICAgdGhpcy5lbmRJbmRleC0tO1xuXG4gICAgaWYgKHRoaXMuX2Nicy5vbnRleHQpIHRoaXMuX2Nicy5vbnRleHQoZGF0YSk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9ub3BlbnRhZ25hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKHRoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdGFnbmFtZSA9IG5hbWU7XG5cbiAgICBpZiAoIXRoaXMuX29wdGlvbnMueG1sTW9kZSAmJiBuYW1lIGluIG9wZW5JbXBsaWVzQ2xvc2UpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIHZhciBlbDtcbiAgICAgICAgICAgIChlbCA9IHRoaXMuX3N0YWNrW3RoaXMuX3N0YWNrLmxlbmd0aCAtIDFdKSBpblxuICAgICAgICAgICAgb3BlbkltcGxpZXNDbG9zZVtuYW1lXTtcbiAgICAgICAgICAgIHRoaXMub25jbG9zZXRhZyhlbClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy54bWxNb2RlIHx8ICEobmFtZSBpbiB2b2lkRWxlbWVudHMpKSB7XG4gICAgICAgIHRoaXMuX3N0YWNrLnB1c2gobmFtZSk7XG4gICAgICAgIGlmIChuYW1lIGluIGZvcmVpZ25Db250ZXh0RWxlbWVudHMpIHRoaXMuX2ZvcmVpZ25Db250ZXh0LnB1c2godHJ1ZSk7XG4gICAgICAgIGVsc2UgaWYgKG5hbWUgaW4gaHRtbEludGVncmF0aW9uRWxlbWVudHMpXG4gICAgICAgICAgICB0aGlzLl9mb3JlaWduQ29udGV4dC5wdXNoKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY2JzLm9ub3BlbnRhZ25hbWUpIHRoaXMuX2Nicy5vbm9wZW50YWduYW1lKG5hbWUpO1xuICAgIGlmICh0aGlzLl9jYnMub25vcGVudGFnKSB0aGlzLl9hdHRyaWJzID0ge307XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9ub3BlbnRhZ2VuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDEpO1xuXG4gICAgaWYgKHRoaXMuX2F0dHJpYnMpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbm9wZW50YWcpXG4gICAgICAgICAgICB0aGlzLl9jYnMub25vcGVudGFnKHRoaXMuX3RhZ25hbWUsIHRoaXMuX2F0dHJpYnMpO1xuICAgICAgICB0aGlzLl9hdHRyaWJzID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgICF0aGlzLl9vcHRpb25zLnhtbE1vZGUgJiZcbiAgICAgICAgdGhpcy5fY2JzLm9uY2xvc2V0YWcgJiZcbiAgICAgICAgdGhpcy5fdGFnbmFtZSBpbiB2b2lkRWxlbWVudHNcbiAgICApIHtcbiAgICAgICAgdGhpcy5fY2JzLm9uY2xvc2V0YWcodGhpcy5fdGFnbmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fdGFnbmFtZSA9IFwiXCI7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uY2xvc2V0YWcgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oMSk7XG5cbiAgICBpZiAodGhpcy5fbG93ZXJDYXNlVGFnTmFtZXMpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKG5hbWUgaW4gZm9yZWlnbkNvbnRleHRFbGVtZW50cyB8fCBuYW1lIGluIGh0bWxJbnRlZ3JhdGlvbkVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuX2ZvcmVpZ25Db250ZXh0LnBvcCgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgdGhpcy5fc3RhY2subGVuZ3RoICYmXG4gICAgICAgICghKG5hbWUgaW4gdm9pZEVsZW1lbnRzKSB8fCB0aGlzLl9vcHRpb25zLnhtbE1vZGUpXG4gICAgKSB7XG4gICAgICAgIHZhciBwb3MgPSB0aGlzLl9zdGFjay5sYXN0SW5kZXhPZihuYW1lKTtcbiAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYnMub25jbG9zZXRhZykge1xuICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuX3N0YWNrLmxlbmd0aCAtIHBvcztcbiAgICAgICAgICAgICAgICB3aGlsZSAocG9zLS0pIHRoaXMuX2Nicy5vbmNsb3NldGFnKHRoaXMuX3N0YWNrLnBvcCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLl9zdGFjay5sZW5ndGggPSBwb3M7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJwXCIgJiYgIXRoaXMuX29wdGlvbnMueG1sTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5vbm9wZW50YWduYW1lKG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VDdXJyZW50VGFnKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9vcHRpb25zLnhtbE1vZGUgJiYgKG5hbWUgPT09IFwiYnJcIiB8fCBuYW1lID09PSBcInBcIikpIHtcbiAgICAgICAgdGhpcy5vbm9wZW50YWduYW1lKG5hbWUpO1xuICAgICAgICB0aGlzLl9jbG9zZUN1cnJlbnRUYWcoKTtcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uc2VsZmNsb3Npbmd0YWcgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICAgIHRoaXMuX29wdGlvbnMueG1sTW9kZSB8fFxuICAgICAgICB0aGlzLl9vcHRpb25zLnJlY29nbml6ZVNlbGZDbG9zaW5nIHx8XG4gICAgICAgIHRoaXMuX2ZvcmVpZ25Db250ZXh0W3RoaXMuX2ZvcmVpZ25Db250ZXh0Lmxlbmd0aCAtIDFdXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2Nsb3NlQ3VycmVudFRhZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25vcGVudGFnZW5kKCk7XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5fY2xvc2VDdXJyZW50VGFnID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5hbWUgPSB0aGlzLl90YWduYW1lO1xuXG4gICAgdGhpcy5vbm9wZW50YWdlbmQoKTtcblxuICAgIC8vc2VsZi1jbG9zaW5nIHRhZ3Mgd2lsbCBiZSBvbiB0aGUgdG9wIG9mIHRoZSBzdGFja1xuICAgIC8vKGNoZWFwZXIgY2hlY2sgdGhhbiBpbiBvbmNsb3NldGFnKVxuICAgIGlmICh0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGggLSAxXSA9PT0gbmFtZSkge1xuICAgICAgICBpZiAodGhpcy5fY2JzLm9uY2xvc2V0YWcpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmNsb3NldGFnKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YWNrLnBvcCgpO1xuICAgICAgICBcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uYXR0cmlibmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZiAodGhpcy5fbG93ZXJDYXNlQXR0cmlidXRlTmFtZXMpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgdGhpcy5fYXR0cmlibmFtZSA9IG5hbWU7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uYXR0cmliZGF0YSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fYXR0cmlidmFsdWUgKz0gdmFsdWU7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uYXR0cmliZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2Nicy5vbmF0dHJpYnV0ZSlcbiAgICAgICAgdGhpcy5fY2JzLm9uYXR0cmlidXRlKHRoaXMuX2F0dHJpYm5hbWUsIHRoaXMuX2F0dHJpYnZhbHVlKTtcbiAgICBpZiAoXG4gICAgICAgIHRoaXMuX2F0dHJpYnMgJiZcbiAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLl9hdHRyaWJzLCB0aGlzLl9hdHRyaWJuYW1lKVxuICAgICkge1xuICAgICAgICB0aGlzLl9hdHRyaWJzW3RoaXMuX2F0dHJpYm5hbWVdID0gdGhpcy5fYXR0cmlidmFsdWU7XG4gICAgfVxuICAgIHRoaXMuX2F0dHJpYm5hbWUgPSBcIlwiO1xuICAgIHRoaXMuX2F0dHJpYnZhbHVlID0gXCJcIjtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuX2dldEluc3RydWN0aW9uTmFtZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGlkeCA9IHZhbHVlLnNlYXJjaChyZV9uYW1lRW5kKSxcbiAgICAgICAgbmFtZSA9IGlkeCA8IDAgPyB2YWx1ZSA6IHZhbHVlLnN1YnN0cigwLCBpZHgpO1xuXG4gICAgaWYgKHRoaXMuX2xvd2VyQ2FzZVRhZ05hbWVzKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWU7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uZGVjbGFyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLl9nZXRJbnN0cnVjdGlvbk5hbWUodmFsdWUpO1xuICAgICAgICB0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24oXCIhXCIgKyBuYW1lLCBcIiFcIiArIHZhbHVlKTtcbiAgICB9XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5fY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5fZ2V0SW5zdHJ1Y3Rpb25OYW1lKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fY2JzLm9ucHJvY2Vzc2luZ2luc3RydWN0aW9uKFwiP1wiICsgbmFtZSwgXCI/XCIgKyB2YWx1ZSk7XG4gICAgfVxufTtcblxuUGFyc2VyLnByb3RvdHlwZS5vbmNvbW1lbnQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDQpO1xuXG4gICAgaWYgKHRoaXMuX2Nicy5vbmNvbW1lbnQpIHRoaXMuX2Nicy5vbmNvbW1lbnQodmFsdWUpO1xuICAgIGlmICh0aGlzLl9jYnMub25jb21tZW50ZW5kKSB0aGlzLl9jYnMub25jb21tZW50ZW5kKCk7XG59O1xuXG5QYXJzZXIucHJvdG90eXBlLm9uY2RhdGEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVBvc2l0aW9uKDEpO1xuXG4gICAgaWYgKHRoaXMuX29wdGlvbnMueG1sTW9kZSB8fCB0aGlzLl9vcHRpb25zLnJlY29nbml6ZUNEQVRBKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub25jZGF0YXN0YXJ0KSB0aGlzLl9jYnMub25jZGF0YXN0YXJ0KCk7XG4gICAgICAgIGlmICh0aGlzLl9jYnMub250ZXh0KSB0aGlzLl9jYnMub250ZXh0KHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuX2Nicy5vbmNkYXRhZW5kKSB0aGlzLl9jYnMub25jZGF0YWVuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25jb21tZW50KFwiW0NEQVRBW1wiICsgdmFsdWUgKyBcIl1dXCIpO1xuICAgIH1cbn07XG5cblBhcnNlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgIGlmICh0aGlzLl9jYnMub25lcnJvcikgdGhpcy5fY2JzLm9uZXJyb3IoZXJyKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUub25lbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2JzLm9uY2xvc2V0YWcpIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5fc3RhY2subGVuZ3RoO1xuICAgICAgICAgICAgaSA+IDA7XG4gICAgICAgICAgICB0aGlzLl9jYnMub25jbG9zZXRhZyh0aGlzLl9zdGFja1stLWldKVxuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2JzLm9uZW5kKSB0aGlzLl9jYnMub25lbmQoKTtcbn07XG5cbi8vUmVzZXRzIHRoZSBwYXJzZXIgdG8gYSBibGFuayBzdGF0ZSwgcmVhZHkgdG8gcGFyc2UgYSBuZXcgSFRNTCBkb2N1bWVudFxuUGFyc2VyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jYnMub25yZXNldCkgdGhpcy5fY2JzLm9ucmVzZXQoKTtcbiAgICB0aGlzLl90b2tlbml6ZXIucmVzZXQoKTtcblxuICAgIHRoaXMuX3RhZ25hbWUgPSBcIlwiO1xuICAgIHRoaXMuX2F0dHJpYm5hbWUgPSBcIlwiO1xuICAgIHRoaXMuX2F0dHJpYnMgPSBudWxsO1xuICAgIHRoaXMuX3N0YWNrID0gW107XG5cbiAgICBpZiAodGhpcy5fY2JzLm9ucGFyc2VyaW5pdCkgdGhpcy5fY2JzLm9ucGFyc2VyaW5pdCh0aGlzKTtcbn07XG5cbi8vUGFyc2VzIGEgY29tcGxldGUgSFRNTCBkb2N1bWVudCBhbmQgcHVzaGVzIGl0IHRvIHRoZSBoYW5kbGVyXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlQ29tcGxldGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuZW5kKGRhdGEpO1xufTtcblxuUGFyc2VyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGNodW5rKSB7XG4gICAgdGhpcy5fdG9rZW5pemVyLndyaXRlKGNodW5rKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oY2h1bmspIHtcbiAgICB0aGlzLl90b2tlbml6ZXIuZW5kKGNodW5rKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl90b2tlbml6ZXIucGF1c2UoKTtcbn07XG5cblBhcnNlci5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdG9rZW5pemVyLnJlc3VtZSgpO1xufTtcblxuLy9hbGlhcyBmb3IgYmFja3dhcmRzIGNvbXBhdFxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZUNodW5rID0gUGFyc2VyLnByb3RvdHlwZS53cml0ZTtcblBhcnNlci5wcm90b3R5cGUuZG9uZSA9IFBhcnNlci5wcm90b3R5cGUuZW5kO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gUHJveHlIYW5kbGVyO1xuXG5mdW5jdGlvbiBQcm94eUhhbmRsZXIoY2JzKSB7XG4gICAgdGhpcy5fY2JzID0gY2JzIHx8IHt9O1xufVxuXG52YXIgRVZFTlRTID0gcmVxdWlyZShcIi4vXCIpLkVWRU5UUztcbk9iamVjdC5rZXlzKEVWRU5UUykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKEVWRU5UU1tuYW1lXSA9PT0gMCkge1xuICAgICAgICBuYW1lID0gXCJvblwiICsgbmFtZTtcbiAgICAgICAgUHJveHlIYW5kbGVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nic1tuYW1lXSkgdGhpcy5fY2JzW25hbWVdKCk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChFVkVOVFNbbmFtZV0gPT09IDEpIHtcbiAgICAgICAgbmFtZSA9IFwib25cIiArIG5hbWU7XG4gICAgICAgIFByb3h5SGFuZGxlci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzW25hbWVdKSB0aGlzLl9jYnNbbmFtZV0oYSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChFVkVOVFNbbmFtZV0gPT09IDIpIHtcbiAgICAgICAgbmFtZSA9IFwib25cIiArIG5hbWU7XG4gICAgICAgIFByb3h5SGFuZGxlci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2JzW25hbWVdKSB0aGlzLl9jYnNbbmFtZV0oYSwgYik7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJ3cm9uZyBudW1iZXIgb2YgYXJndW1lbnRzXCIpO1xuICAgIH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTdHJlYW07XG5cbnZhciBQYXJzZXIgPSByZXF1aXJlKFwiLi9Xcml0YWJsZVN0cmVhbS5qc1wiKTtcblxuZnVuY3Rpb24gU3RyZWFtKG9wdGlvbnMpIHtcbiAgICBQYXJzZXIuY2FsbCh0aGlzLCBuZXcgQ2JzKHRoaXMpLCBvcHRpb25zKTtcbn1cblxucmVxdWlyZShcImluaGVyaXRzXCIpKFN0cmVhbSwgUGFyc2VyKTtcblxuU3RyZWFtLnByb3RvdHlwZS5yZWFkYWJsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIENicyhzY29wZSkge1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbn1cblxudmFyIEVWRU5UUyA9IHJlcXVpcmUoXCIuLi9cIikuRVZFTlRTO1xuXG5PYmplY3Qua2V5cyhFVkVOVFMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIGlmIChFVkVOVFNbbmFtZV0gPT09IDApIHtcbiAgICAgICAgQ2JzLnByb3RvdHlwZVtcIm9uXCIgKyBuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5lbWl0KG5hbWUpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoRVZFTlRTW25hbWVdID09PSAxKSB7XG4gICAgICAgIENicy5wcm90b3R5cGVbXCJvblwiICsgbmFtZV0gPSBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmVtaXQobmFtZSwgYSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChFVkVOVFNbbmFtZV0gPT09IDIpIHtcbiAgICAgICAgQ2JzLnByb3RvdHlwZVtcIm9uXCIgKyBuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuZW1pdChuYW1lLCBhLCBiKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihcIndyb25nIG51bWJlciBvZiBhcmd1bWVudHMhXCIpO1xuICAgIH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBUb2tlbml6ZXI7XG5cbnZhciBkZWNvZGVDb2RlUG9pbnQgPSByZXF1aXJlKFwiZW50aXRpZXMvbGliL2RlY29kZV9jb2RlcG9pbnQuanNcIik7XG52YXIgZW50aXR5TWFwID0gcmVxdWlyZShcImVudGl0aWVzL21hcHMvZW50aXRpZXMuanNvblwiKTtcbnZhciBsZWdhY3lNYXAgPSByZXF1aXJlKFwiZW50aXRpZXMvbWFwcy9sZWdhY3kuanNvblwiKTtcbnZhciB4bWxNYXAgPSByZXF1aXJlKFwiZW50aXRpZXMvbWFwcy94bWwuanNvblwiKTtcblxudmFyIGkgPSAwO1xuXG52YXIgVEVYVCA9IGkrKztcbnZhciBCRUZPUkVfVEFHX05BTUUgPSBpKys7IC8vYWZ0ZXIgPFxudmFyIElOX1RBR19OQU1FID0gaSsrO1xudmFyIElOX1NFTEZfQ0xPU0lOR19UQUcgPSBpKys7XG52YXIgQkVGT1JFX0NMT1NJTkdfVEFHX05BTUUgPSBpKys7XG52YXIgSU5fQ0xPU0lOR19UQUdfTkFNRSA9IGkrKztcbnZhciBBRlRFUl9DTE9TSU5HX1RBR19OQU1FID0gaSsrO1xuXG4vL2F0dHJpYnV0ZXNcbnZhciBCRUZPUkVfQVRUUklCVVRFX05BTUUgPSBpKys7XG52YXIgSU5fQVRUUklCVVRFX05BTUUgPSBpKys7XG52YXIgQUZURVJfQVRUUklCVVRFX05BTUUgPSBpKys7XG52YXIgQkVGT1JFX0FUVFJJQlVURV9WQUxVRSA9IGkrKztcbnZhciBJTl9BVFRSSUJVVEVfVkFMVUVfRFEgPSBpKys7IC8vIFwiXG52YXIgSU5fQVRUUklCVVRFX1ZBTFVFX1NRID0gaSsrOyAvLyAnXG52YXIgSU5fQVRUUklCVVRFX1ZBTFVFX05RID0gaSsrO1xuXG4vL2RlY2xhcmF0aW9uc1xudmFyIEJFRk9SRV9ERUNMQVJBVElPTiA9IGkrKzsgLy8gIVxudmFyIElOX0RFQ0xBUkFUSU9OID0gaSsrO1xuXG4vL3Byb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25zXG52YXIgSU5fUFJPQ0VTU0lOR19JTlNUUlVDVElPTiA9IGkrKzsgLy8gP1xuXG4vL2NvbW1lbnRzXG52YXIgQkVGT1JFX0NPTU1FTlQgPSBpKys7XG52YXIgSU5fQ09NTUVOVCA9IGkrKztcbnZhciBBRlRFUl9DT01NRU5UXzEgPSBpKys7XG52YXIgQUZURVJfQ09NTUVOVF8yID0gaSsrO1xuXG4vL2NkYXRhXG52YXIgQkVGT1JFX0NEQVRBXzEgPSBpKys7IC8vIFtcbnZhciBCRUZPUkVfQ0RBVEFfMiA9IGkrKzsgLy8gQ1xudmFyIEJFRk9SRV9DREFUQV8zID0gaSsrOyAvLyBEXG52YXIgQkVGT1JFX0NEQVRBXzQgPSBpKys7IC8vIEFcbnZhciBCRUZPUkVfQ0RBVEFfNSA9IGkrKzsgLy8gVFxudmFyIEJFRk9SRV9DREFUQV82ID0gaSsrOyAvLyBBXG52YXIgSU5fQ0RBVEEgPSBpKys7IC8vIFtcbnZhciBBRlRFUl9DREFUQV8xID0gaSsrOyAvLyBdXG52YXIgQUZURVJfQ0RBVEFfMiA9IGkrKzsgLy8gXVxuXG4vL3NwZWNpYWwgdGFnc1xudmFyIEJFRk9SRV9TUEVDSUFMID0gaSsrOyAvL1NcbnZhciBCRUZPUkVfU1BFQ0lBTF9FTkQgPSBpKys7IC8vU1xuXG52YXIgQkVGT1JFX1NDUklQVF8xID0gaSsrOyAvL0NcbnZhciBCRUZPUkVfU0NSSVBUXzIgPSBpKys7IC8vUlxudmFyIEJFRk9SRV9TQ1JJUFRfMyA9IGkrKzsgLy9JXG52YXIgQkVGT1JFX1NDUklQVF80ID0gaSsrOyAvL1BcbnZhciBCRUZPUkVfU0NSSVBUXzUgPSBpKys7IC8vVFxudmFyIEFGVEVSX1NDUklQVF8xID0gaSsrOyAvL0NcbnZhciBBRlRFUl9TQ1JJUFRfMiA9IGkrKzsgLy9SXG52YXIgQUZURVJfU0NSSVBUXzMgPSBpKys7IC8vSVxudmFyIEFGVEVSX1NDUklQVF80ID0gaSsrOyAvL1BcbnZhciBBRlRFUl9TQ1JJUFRfNSA9IGkrKzsgLy9UXG5cbnZhciBCRUZPUkVfU1RZTEVfMSA9IGkrKzsgLy9UXG52YXIgQkVGT1JFX1NUWUxFXzIgPSBpKys7IC8vWVxudmFyIEJFRk9SRV9TVFlMRV8zID0gaSsrOyAvL0xcbnZhciBCRUZPUkVfU1RZTEVfNCA9IGkrKzsgLy9FXG52YXIgQUZURVJfU1RZTEVfMSA9IGkrKzsgLy9UXG52YXIgQUZURVJfU1RZTEVfMiA9IGkrKzsgLy9ZXG52YXIgQUZURVJfU1RZTEVfMyA9IGkrKzsgLy9MXG52YXIgQUZURVJfU1RZTEVfNCA9IGkrKzsgLy9FXG5cbnZhciBCRUZPUkVfRU5USVRZID0gaSsrOyAvLyZcbnZhciBCRUZPUkVfTlVNRVJJQ19FTlRJVFkgPSBpKys7IC8vI1xudmFyIElOX05BTUVEX0VOVElUWSA9IGkrKztcbnZhciBJTl9OVU1FUklDX0VOVElUWSA9IGkrKztcbnZhciBJTl9IRVhfRU5USVRZID0gaSsrOyAvL1hcblxudmFyIGogPSAwO1xuXG52YXIgU1BFQ0lBTF9OT05FID0gaisrO1xudmFyIFNQRUNJQUxfU0NSSVBUID0gaisrO1xudmFyIFNQRUNJQUxfU1RZTEUgPSBqKys7XG5cbmZ1bmN0aW9uIHdoaXRlc3BhY2UoYykge1xuICAgIHJldHVybiBjID09PSBcIiBcIiB8fCBjID09PSBcIlxcblwiIHx8IGMgPT09IFwiXFx0XCIgfHwgYyA9PT0gXCJcXGZcIiB8fCBjID09PSBcIlxcclwiO1xufVxuXG5mdW5jdGlvbiBpZkVsc2VTdGF0ZSh1cHBlciwgU1VDQ0VTUywgRkFJTFVSRSkge1xuICAgIHZhciBsb3dlciA9IHVwcGVyLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodXBwZXIgPT09IGxvd2VyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICBpZiAoYyA9PT0gbG93ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IFNVQ0NFU1M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gRkFJTFVSRTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICBpZiAoYyA9PT0gbG93ZXIgfHwgYyA9PT0gdXBwZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IFNVQ0NFU1M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gRkFJTFVSRTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcih1cHBlciwgTkVYVF9TVEFURSkge1xuICAgIHZhciBsb3dlciA9IHVwcGVyLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgICAgICBpZiAoYyA9PT0gbG93ZXIgfHwgYyA9PT0gdXBwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gTkVYVF9TVEFURTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gSU5fVEFHX05BTUU7XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBUb2tlbml6ZXIob3B0aW9ucywgY2JzKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBURVhUO1xuICAgIHRoaXMuX2J1ZmZlciA9IFwiXCI7XG4gICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gMDtcbiAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgdGhpcy5fYnVmZmVyT2Zmc2V0ID0gMDsgLy9jaGFycyByZW1vdmVkIGZyb20gX2J1ZmZlclxuICAgIHRoaXMuX2Jhc2VTdGF0ZSA9IFRFWFQ7XG4gICAgdGhpcy5fc3BlY2lhbCA9IFNQRUNJQUxfTk9ORTtcbiAgICB0aGlzLl9jYnMgPSBjYnM7XG4gICAgdGhpcy5fcnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5fZW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLl94bWxNb2RlID0gISEob3B0aW9ucyAmJiBvcHRpb25zLnhtbE1vZGUpO1xuICAgIHRoaXMuX2RlY29kZUVudGl0aWVzID0gISEob3B0aW9ucyAmJiBvcHRpb25zLmRlY29kZUVudGl0aWVzKTtcbn1cblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVUZXh0ID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIjxcIikge1xuICAgICAgICBpZiAodGhpcy5faW5kZXggPiB0aGlzLl9zZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQodGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZSA9IEJFRk9SRV9UQUdfTkFNRTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5fZGVjb2RlRW50aXRpZXMgJiZcbiAgICAgICAgdGhpcy5fc3BlY2lhbCA9PT0gU1BFQ0lBTF9OT05FICYmXG4gICAgICAgIGMgPT09IFwiJlwiXG4gICAgKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbmRleCA+IHRoaXMuX3NlY3Rpb25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0ZSA9IFRFWFQ7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0VOVElUWTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVUYWdOYW1lID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIi9cIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEJFRk9SRV9DTE9TSU5HX1RBR19OQU1FO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gXCI8XCIpIHtcbiAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB9IGVsc2UgaWYgKGMgPT09IFwiPlwiIHx8IHRoaXMuX3NwZWNpYWwgIT09IFNQRUNJQUxfTk9ORSB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gVEVYVDtcbiAgICB9IGVsc2UgaWYgKGMgPT09IFwiIVwiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0RFQ0xBUkFUSU9OO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgfSBlbHNlIGlmIChjID09PSBcIj9cIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX1BST0NFU1NJTkdfSU5TVFJVQ1RJT047XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9XG4gICAgICAgICAgICAhdGhpcy5feG1sTW9kZSAmJiAoYyA9PT0gXCJzXCIgfHwgYyA9PT0gXCJTXCIpXG4gICAgICAgICAgICAgICAgPyBCRUZPUkVfU1BFQ0lBTFxuICAgICAgICAgICAgICAgIDogSU5fVEFHX05BTUU7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5UYWdOYW1lID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9ub3BlbnRhZ25hbWVcIik7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0FUVFJJQlVURV9OQU1FO1xuICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2xvc2VpbmdUYWdOYW1lID0gZnVuY3Rpb24oYykge1xuICAgIGlmICh3aGl0ZXNwYWNlKGMpKTtcbiAgICBlbHNlIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zcGVjaWFsICE9PSBTUEVDSUFMX05PTkUpIHtcbiAgICAgICAgaWYgKGMgPT09IFwic1wiIHx8IGMgPT09IFwiU1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IEJFRk9SRV9TUEVDSUFMX0VORDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gVEVYVDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0NMT1NJTkdfVEFHX05BTUU7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5DbG9zZWluZ1RhZ05hbWUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25jbG9zZXRhZ1wiKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBBRlRFUl9DTE9TSU5HX1RBR19OQU1FO1xuICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDbG9zZWluZ1RhZ05hbWUgPSBmdW5jdGlvbihjKSB7XG4gICAgLy9za2lwIGV2ZXJ5dGhpbmcgdW50aWwgXCI+XCJcbiAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBURVhUO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVBdHRyaWJ1dGVOYW1lID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLl9jYnMub25vcGVudGFnZW5kKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gVEVYVDtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gXCIvXCIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9TRUxGX0NMT1NJTkdfVEFHO1xuICAgIH0gZWxzZSBpZiAoIXdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9BVFRSSUJVVEVfTkFNRTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJblNlbGZDbG9zaW5nVGFnID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLl9jYnMub25zZWxmY2xvc2luZ3RhZygpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9IGVsc2UgaWYgKCF3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0FUVFJJQlVURV9OQU1FO1xuICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5BdHRyaWJ1dGVOYW1lID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIj1cIiB8fCBjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYm5hbWUodGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gLTE7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQUZURVJfQVRUUklCVVRFX05BTUU7XG4gICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlckF0dHJpYnV0ZU5hbWUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPVwiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0FUVFJJQlVURV9WQUxVRTtcbiAgICB9IGVsc2UgaWYgKGMgPT09IFwiL1wiIHx8IGMgPT09IFwiPlwiKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEJFRk9SRV9BVFRSSUJVVEVfTkFNRTtcbiAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICB9IGVsc2UgaWYgKCF3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0FUVFJJQlVURV9OQU1FO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleDtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSAnXCInKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fQVRUUklCVVRFX1ZBTFVFX0RRO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgfSBlbHNlIGlmIChjID09PSBcIidcIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0FUVFJJQlVURV9WQUxVRV9TUTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgIH0gZWxzZSBpZiAoIXdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9BVFRSSUJVVEVfVkFMVUVfTlE7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgICAgICB0aGlzLl9pbmRleC0tOyAvL3JlY29uc3VtZSB0b2tlblxuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZURvdWJsZVF1b3RlcyA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gJ1wiJykge1xuICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEJFRk9SRV9BVFRSSUJVVEVfTkFNRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2RlY29kZUVudGl0aWVzICYmIGMgPT09IFwiJlwiKSB7XG4gICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0VOVElUWTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlU2luZ2xlUXVvdGVzID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgIHRoaXMuX2Nicy5vbmF0dHJpYmVuZCgpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEJFRk9SRV9BVFRSSUJVVEVfTkFNRTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2RlY29kZUVudGl0aWVzICYmIGMgPT09IFwiJlwiKSB7XG4gICAgICAgIHRoaXMuX2VtaXRUb2tlbihcIm9uYXR0cmliZGF0YVwiKTtcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRlID0gdGhpcy5fc3RhdGU7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX0VOVElUWTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXg7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlTm9RdW90ZXMgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKHdoaXRlc3BhY2UoYykgfHwgYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgdGhpcy5fZW1pdFRva2VuKFwib25hdHRyaWJkYXRhXCIpO1xuICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJlbmQoKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfQVRUUklCVVRFX05BTUU7XG4gICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgfSBlbHNlIGlmICh0aGlzLl9kZWNvZGVFbnRpdGllcyAmJiBjID09PSBcIiZcIikge1xuICAgICAgICB0aGlzLl9lbWl0VG9rZW4oXCJvbmF0dHJpYmRhdGFcIik7XG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0ZSA9IHRoaXMuX3N0YXRlO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IEJFRk9SRV9FTlRJVFk7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlRGVjbGFyYXRpb24gPSBmdW5jdGlvbihjKSB7XG4gICAgdGhpcy5fc3RhdGUgPVxuICAgICAgICBjID09PSBcIltcIlxuICAgICAgICAgICAgPyBCRUZPUkVfQ0RBVEFfMVxuICAgICAgICAgICAgOiBjID09PSBcIi1cIlxuICAgICAgICAgICAgICAgID8gQkVGT1JFX0NPTU1FTlRcbiAgICAgICAgICAgICAgICA6IElOX0RFQ0xBUkFUSU9OO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkRlY2xhcmF0aW9uID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLl9jYnMub25kZWNsYXJhdGlvbih0aGlzLl9nZXRTZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluUHJvY2Vzc2luZ0luc3RydWN0aW9uID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIj5cIikge1xuICAgICAgICB0aGlzLl9jYnMub25wcm9jZXNzaW5naW5zdHJ1Y3Rpb24odGhpcy5fZ2V0U2VjdGlvbigpKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBURVhUO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDb21tZW50ID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIi1cIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0NPTU1FTlQ7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0RFQ0xBUkFUSU9OO1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5Db21tZW50ID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIi1cIikgdGhpcy5fc3RhdGUgPSBBRlRFUl9DT01NRU5UXzE7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQ29tbWVudDEgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiLVwiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQUZURVJfQ09NTUVOVF8yO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fQ09NTUVOVDtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQ29tbWVudDIgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgIC8vcmVtb3ZlIDIgdHJhaWxpbmcgY2hhcnNcbiAgICAgICAgdGhpcy5fY2JzLm9uY29tbWVudChcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCAtIDIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gVEVYVDtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgIH0gZWxzZSBpZiAoYyAhPT0gXCItXCIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9DT01NRU5UO1xuICAgIH1cbiAgICAvLyBlbHNlOiBzdGF5IGluIEFGVEVSX0NPTU1FTlRfMiAoYC0tLT5gKVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDZGF0YTEgPSBpZkVsc2VTdGF0ZShcbiAgICBcIkNcIixcbiAgICBCRUZPUkVfQ0RBVEFfMixcbiAgICBJTl9ERUNMQVJBVElPTlxuKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2RhdGEyID0gaWZFbHNlU3RhdGUoXG4gICAgXCJEXCIsXG4gICAgQkVGT1JFX0NEQVRBXzMsXG4gICAgSU5fREVDTEFSQVRJT05cbik7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUNkYXRhMyA9IGlmRWxzZVN0YXRlKFxuICAgIFwiQVwiLFxuICAgIEJFRk9SRV9DREFUQV80LFxuICAgIElOX0RFQ0xBUkFUSU9OXG4pO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVDZGF0YTQgPSBpZkVsc2VTdGF0ZShcbiAgICBcIlRcIixcbiAgICBCRUZPUkVfQ0RBVEFfNSxcbiAgICBJTl9ERUNMQVJBVElPTlxuKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2RhdGE1ID0gaWZFbHNlU3RhdGUoXG4gICAgXCJBXCIsXG4gICAgQkVGT1JFX0NEQVRBXzYsXG4gICAgSU5fREVDTEFSQVRJT05cbik7XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlQ2RhdGE2ID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIltcIikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX0NEQVRBO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9ERUNMQVJBVElPTjtcbiAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUluQ2RhdGEgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiXVwiKSB0aGlzLl9zdGF0ZSA9IEFGVEVSX0NEQVRBXzE7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyQ2RhdGExID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIl1cIikgdGhpcy5fc3RhdGUgPSBBRlRFUl9DREFUQV8yO1xuICAgIGVsc2UgdGhpcy5fc3RhdGUgPSBJTl9DREFUQTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJDZGF0YTIgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPlwiKSB7XG4gICAgICAgIC8vcmVtb3ZlIDIgdHJhaWxpbmcgY2hhcnNcbiAgICAgICAgdGhpcy5fY2JzLm9uY2RhdGEoXG4gICAgICAgICAgICB0aGlzLl9idWZmZXIuc3Vic3RyaW5nKHRoaXMuX3NlY3Rpb25TdGFydCwgdGhpcy5faW5kZXggLSAyKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4ICsgMTtcbiAgICB9IGVsc2UgaWYgKGMgIT09IFwiXVwiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fQ0RBVEE7XG4gICAgfVxuICAgIC8vZWxzZTogc3RheSBpbiBBRlRFUl9DREFUQV8yIChgXV1dPmApXG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNwZWNpYWwgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiY1wiIHx8IGMgPT09IFwiQ1wiKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQkVGT1JFX1NDUklQVF8xO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gXCJ0XCIgfHwgYyA9PT0gXCJUXCIpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBCRUZPUkVfU1RZTEVfMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IElOX1RBR19OQU1FO1xuICAgICAgICB0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTcGVjaWFsRW5kID0gZnVuY3Rpb24oYykge1xuICAgIGlmICh0aGlzLl9zcGVjaWFsID09PSBTUEVDSUFMX1NDUklQVCAmJiAoYyA9PT0gXCJjXCIgfHwgYyA9PT0gXCJDXCIpKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gQUZURVJfU0NSSVBUXzE7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zcGVjaWFsID09PSBTUEVDSUFMX1NUWUxFICYmIChjID09PSBcInRcIiB8fCBjID09PSBcIlRcIikpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBBRlRFUl9TVFlMRV8xO1xuICAgIH0gZWxzZSB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNjcmlwdDEgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFxuICAgIFwiUlwiLFxuICAgIEJFRk9SRV9TQ1JJUFRfMlxuKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQmVmb3JlU2NyaXB0MiA9IGNvbnN1bWVTcGVjaWFsTmFtZUNoYXIoXG4gICAgXCJJXCIsXG4gICAgQkVGT1JFX1NDUklQVF8zXG4pO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTY3JpcHQzID0gY29uc3VtZVNwZWNpYWxOYW1lQ2hhcihcbiAgICBcIlBcIixcbiAgICBCRUZPUkVfU0NSSVBUXzRcbik7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVNjcmlwdDQgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFxuICAgIFwiVFwiLFxuICAgIEJFRk9SRV9TQ1JJUFRfNVxuKTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTY3JpcHQ1ID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIi9cIiB8fCBjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgIHRoaXMuX3NwZWNpYWwgPSBTUEVDSUFMX1NDUklQVDtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGUgPSBJTl9UQUdfTkFNRTtcbiAgICB0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyU2NyaXB0MSA9IGlmRWxzZVN0YXRlKFwiUlwiLCBBRlRFUl9TQ1JJUFRfMiwgVEVYVCk7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyU2NyaXB0MiA9IGlmRWxzZVN0YXRlKFwiSVwiLCBBRlRFUl9TQ1JJUFRfMywgVEVYVCk7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyU2NyaXB0MyA9IGlmRWxzZVN0YXRlKFwiUFwiLCBBRlRFUl9TQ1JJUFRfNCwgVEVYVCk7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyU2NyaXB0NCA9IGlmRWxzZVN0YXRlKFwiVFwiLCBBRlRFUl9TQ1JJUFRfNSwgVEVYVCk7XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTY3JpcHQ1ID0gZnVuY3Rpb24oYykge1xuICAgIGlmIChjID09PSBcIj5cIiB8fCB3aGl0ZXNwYWNlKGMpKSB7XG4gICAgICAgIHRoaXMuX3NwZWNpYWwgPSBTUEVDSUFMX05PTkU7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gSU5fQ0xPU0lOR19UQUdfTkFNRTtcbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggLSA2O1xuICAgICAgICB0aGlzLl9pbmRleC0tOyAvL3JlY29uc3VtZSB0aGUgdG9rZW5cbiAgICB9IGVsc2UgdGhpcy5fc3RhdGUgPSBURVhUO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTdHlsZTEgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFxuICAgIFwiWVwiLFxuICAgIEJFRk9SRV9TVFlMRV8yXG4pO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTdHlsZTIgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFxuICAgIFwiTFwiLFxuICAgIEJFRk9SRV9TVFlMRV8zXG4pO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVCZWZvcmVTdHlsZTMgPSBjb25zdW1lU3BlY2lhbE5hbWVDaGFyKFxuICAgIFwiRVwiLFxuICAgIEJFRk9SRV9TVFlMRV80XG4pO1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZVN0eWxlNCA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCIvXCIgfHwgYyA9PT0gXCI+XCIgfHwgd2hpdGVzcGFjZShjKSkge1xuICAgICAgICB0aGlzLl9zcGVjaWFsID0gU1BFQ0lBTF9TVFlMRTtcbiAgICB9XG4gICAgdGhpcy5fc3RhdGUgPSBJTl9UQUdfTkFNRTtcbiAgICB0aGlzLl9pbmRleC0tOyAvL2NvbnN1bWUgdGhlIHRva2VuIGFnYWluXG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUFmdGVyU3R5bGUxID0gaWZFbHNlU3RhdGUoXCJZXCIsIEFGVEVSX1NUWUxFXzIsIFRFWFQpO1xuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVBZnRlclN0eWxlMiA9IGlmRWxzZVN0YXRlKFwiTFwiLCBBRlRFUl9TVFlMRV8zLCBURVhUKTtcblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTdHlsZTMgPSBpZkVsc2VTdGF0ZShcIkVcIiwgQUZURVJfU1RZTEVfNCwgVEVYVCk7XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlQWZ0ZXJTdHlsZTQgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiPlwiIHx8IHdoaXRlc3BhY2UoYykpIHtcbiAgICAgICAgdGhpcy5fc3BlY2lhbCA9IFNQRUNJQUxfTk9ORTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBJTl9DTE9TSU5HX1RBR19OQU1FO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgPSB0aGlzLl9pbmRleCAtIDU7XG4gICAgICAgIHRoaXMuX2luZGV4LS07IC8vcmVjb25zdW1lIHRoZSB0b2tlblxuICAgIH0gZWxzZSB0aGlzLl9zdGF0ZSA9IFRFWFQ7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZUVudGl0eSA9IGlmRWxzZVN0YXRlKFxuICAgIFwiI1wiLFxuICAgIEJFRk9SRV9OVU1FUklDX0VOVElUWSxcbiAgICBJTl9OQU1FRF9FTlRJVFlcbik7XG5Ub2tlbml6ZXIucHJvdG90eXBlLl9zdGF0ZUJlZm9yZU51bWVyaWNFbnRpdHkgPSBpZkVsc2VTdGF0ZShcbiAgICBcIlhcIixcbiAgICBJTl9IRVhfRU5USVRZLFxuICAgIElOX05VTUVSSUNfRU5USVRZXG4pO1xuXG4vL2ZvciBlbnRpdGllcyB0ZXJtaW5hdGVkIHdpdGggYSBzZW1pY29sb25cblRva2VuaXplci5wcm90b3R5cGUuX3BhcnNlTmFtZWRFbnRpdHlTdHJpY3QgPSBmdW5jdGlvbigpIHtcbiAgICAvL29mZnNldCA9IDFcbiAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0ICsgMSA8IHRoaXMuX2luZGV4KSB7XG4gICAgICAgIHZhciBlbnRpdHkgPSB0aGlzLl9idWZmZXIuc3Vic3RyaW5nKFxuICAgICAgICAgICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCArIDEsXG4gICAgICAgICAgICAgICAgdGhpcy5faW5kZXhcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAgPSB0aGlzLl94bWxNb2RlID8geG1sTWFwIDogZW50aXR5TWFwO1xuXG4gICAgICAgIGlmIChtYXAuaGFzT3duUHJvcGVydHkoZW50aXR5KSkge1xuICAgICAgICAgICAgdGhpcy5fZW1pdFBhcnRpYWwobWFwW2VudGl0eV0pO1xuICAgICAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gdGhpcy5faW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy9wYXJzZXMgbGVnYWN5IGVudGl0aWVzICh3aXRob3V0IHRyYWlsaW5nIHNlbWljb2xvbilcblRva2VuaXplci5wcm90b3R5cGUuX3BhcnNlTGVnYWN5RW50aXR5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5fc2VjdGlvblN0YXJ0ICsgMSxcbiAgICAgICAgbGltaXQgPSB0aGlzLl9pbmRleCAtIHN0YXJ0O1xuXG4gICAgaWYgKGxpbWl0ID4gNikgbGltaXQgPSA2OyAvL3RoZSBtYXggbGVuZ3RoIG9mIGxlZ2FjeSBlbnRpdGllcyBpcyA2XG5cbiAgICB3aGlsZSAobGltaXQgPj0gMikge1xuICAgICAgICAvL3RoZSBtaW4gbGVuZ3RoIG9mIGxlZ2FjeSBlbnRpdGllcyBpcyAyXG4gICAgICAgIHZhciBlbnRpdHkgPSB0aGlzLl9idWZmZXIuc3Vic3RyKHN0YXJ0LCBsaW1pdCk7XG5cbiAgICAgICAgaWYgKGxlZ2FjeU1hcC5oYXNPd25Qcm9wZXJ0eShlbnRpdHkpKSB7XG4gICAgICAgICAgICB0aGlzLl9lbWl0UGFydGlhbChsZWdhY3lNYXBbZW50aXR5XSk7XG4gICAgICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQgKz0gbGltaXQgKyAxO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGltaXQtLTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3N0YXRlSW5OYW1lZEVudGl0eSA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCI7XCIpIHtcbiAgICAgICAgdGhpcy5fcGFyc2VOYW1lZEVudGl0eVN0cmljdCgpO1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0ICsgMSA8IHRoaXMuX2luZGV4ICYmICF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJzZUxlZ2FjeUVudGl0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChjIDwgXCJhXCIgfHwgYyA+IFwielwiKSAmJlxuICAgICAgICAoYyA8IFwiQVwiIHx8IGMgPiBcIlpcIikgJiZcbiAgICAgICAgKGMgPCBcIjBcIiB8fCBjID4gXCI5XCIpXG4gICAgKSB7XG4gICAgICAgIGlmICh0aGlzLl94bWxNb2RlKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2VjdGlvblN0YXJ0ICsgMSA9PT0gdGhpcy5faW5kZXgpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLl9iYXNlU3RhdGUgIT09IFRFWFQpIHtcbiAgICAgICAgICAgIGlmIChjICE9PSBcIj1cIikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlTmFtZWRFbnRpdHlTdHJpY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlTGVnYWN5RW50aXR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgdGhpcy5faW5kZXgtLTtcbiAgICB9XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9kZWNvZGVOdW1lcmljRW50aXR5ID0gZnVuY3Rpb24ob2Zmc2V0LCBiYXNlKSB7XG4gICAgdmFyIHNlY3Rpb25TdGFydCA9IHRoaXMuX3NlY3Rpb25TdGFydCArIG9mZnNldDtcblxuICAgIGlmIChzZWN0aW9uU3RhcnQgIT09IHRoaXMuX2luZGV4KSB7XG4gICAgICAgIC8vcGFyc2UgZW50aXR5XG4gICAgICAgIHZhciBlbnRpdHkgPSB0aGlzLl9idWZmZXIuc3Vic3RyaW5nKHNlY3Rpb25TdGFydCwgdGhpcy5faW5kZXgpO1xuICAgICAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoZW50aXR5LCBiYXNlKTtcblxuICAgICAgICB0aGlzLl9lbWl0UGFydGlhbChkZWNvZGVDb2RlUG9pbnQocGFyc2VkKSk7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCA9IHRoaXMuX2luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydC0tO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbk51bWVyaWNFbnRpdHkgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKGMgPT09IFwiO1wiKSB7XG4gICAgICAgIHRoaXMuX2RlY29kZU51bWVyaWNFbnRpdHkoMiwgMTApO1xuICAgICAgICB0aGlzLl9zZWN0aW9uU3RhcnQrKztcbiAgICB9IGVsc2UgaWYgKGMgPCBcIjBcIiB8fCBjID4gXCI5XCIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl94bWxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDIsIDEwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5fc3RhdGVJbkhleEVudGl0eSA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyA9PT0gXCI7XCIpIHtcbiAgICAgICAgdGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgzLCAxNik7XG4gICAgICAgIHRoaXMuX3NlY3Rpb25TdGFydCsrO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIChjIDwgXCJhXCIgfHwgYyA+IFwiZlwiKSAmJlxuICAgICAgICAoYyA8IFwiQVwiIHx8IGMgPiBcIkZcIikgJiZcbiAgICAgICAgKGMgPCBcIjBcIiB8fCBjID4gXCI5XCIpXG4gICAgKSB7XG4gICAgICAgIGlmICghdGhpcy5feG1sTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVjb2RlTnVtZXJpY0VudGl0eSgzLCAxNik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgIH1cbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX2NsZWFudXAgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgMCkge1xuICAgICAgICB0aGlzLl9idWZmZXIgPSBcIlwiO1xuICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgKz0gdGhpcy5faW5kZXg7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3J1bm5pbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBURVhUKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0ICE9PSB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nicy5vbnRleHQodGhpcy5fYnVmZmVyLnN1YnN0cih0aGlzLl9zZWN0aW9uU3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgKz0gdGhpcy5faW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2VjdGlvblN0YXJ0ID09PSB0aGlzLl9pbmRleCkge1xuICAgICAgICAgICAgLy90aGUgc2VjdGlvbiBqdXN0IHN0YXJ0ZWRcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlciA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgKz0gdGhpcy5faW5kZXg7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3JlbW92ZSBldmVyeXRoaW5nIHVubmVjZXNzYXJ5XG4gICAgICAgICAgICB0aGlzLl9idWZmZXIgPSB0aGlzLl9idWZmZXIuc3Vic3RyKHRoaXMuX3NlY3Rpb25TdGFydCk7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCAtPSB0aGlzLl9zZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB0aGlzLl9idWZmZXJPZmZzZXQgKz0gdGhpcy5fc2VjdGlvblN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gMDtcbiAgICB9XG59O1xuXG4vL1RPRE8gbWFrZSBldmVudHMgY29uZGl0aW9uYWxcblRva2VuaXplci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbihjaHVuaykge1xuICAgIGlmICh0aGlzLl9lbmRlZCkgdGhpcy5fY2JzLm9uZXJyb3IoRXJyb3IoXCIud3JpdGUoKSBhZnRlciBkb25lIVwiKSk7XG5cbiAgICB0aGlzLl9idWZmZXIgKz0gY2h1bms7XG4gICAgdGhpcy5fcGFyc2UoKTtcbn07XG5cblRva2VuaXplci5wcm90b3R5cGUuX3BhcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgd2hpbGUgKHRoaXMuX2luZGV4IDwgdGhpcy5fYnVmZmVyLmxlbmd0aCAmJiB0aGlzLl9ydW5uaW5nKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5fYnVmZmVyLmNoYXJBdCh0aGlzLl9pbmRleCk7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gVEVYVCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVUZXh0KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfVEFHX05BTUUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlVGFnTmFtZShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fVEFHX05BTUUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5UYWdOYW1lKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQ0xPU0lOR19UQUdfTkFNRSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVDbG9zZWluZ1RhZ05hbWUoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IElOX0NMT1NJTkdfVEFHX05BTUUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5DbG9zZWluZ1RhZ05hbWUoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX0NMT1NJTkdfVEFHX05BTUUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJDbG9zZWluZ1RhZ05hbWUoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IElOX1NFTEZfQ0xPU0lOR19UQUcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5TZWxmQ2xvc2luZ1RhZyhjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0FUVFJJQlVURV9OQU1FKSB7XG5cbiAgICAgICAgLypcblx0XHQqXHRhdHRyaWJ1dGVzXG5cdFx0Ki9cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQXR0cmlidXRlTmFtZShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fQVRUUklCVVRFX05BTUUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5BdHRyaWJ1dGVOYW1lKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9BVFRSSUJVVEVfTkFNRSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckF0dHJpYnV0ZU5hbWUoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9BVFRSSUJVVEVfVkFMVUUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQXR0cmlidXRlVmFsdWUoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IElOX0FUVFJJQlVURV9WQUxVRV9EUSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkF0dHJpYnV0ZVZhbHVlRG91YmxlUXVvdGVzKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9BVFRSSUJVVEVfVkFMVUVfU1EpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5BdHRyaWJ1dGVWYWx1ZVNpbmdsZVF1b3RlcyhjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fQVRUUklCVVRFX1ZBTFVFX05RKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUluQXR0cmlidXRlVmFsdWVOb1F1b3RlcyhjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0RFQ0xBUkFUSU9OKSB7XG5cbiAgICAgICAgLypcblx0XHQqXHRkZWNsYXJhdGlvbnNcblx0XHQqL1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVEZWNsYXJhdGlvbihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fREVDTEFSQVRJT04pIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5EZWNsYXJhdGlvbihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fUFJPQ0VTU0lOR19JTlNUUlVDVElPTikge1xuXG4gICAgICAgIC8qXG5cdFx0Klx0cHJvY2Vzc2luZyBpbnN0cnVjdGlvbnNcblx0XHQqL1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJblByb2Nlc3NpbmdJbnN0cnVjdGlvbihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0NPTU1FTlQpIHtcblxuICAgICAgICAvKlxuXHRcdCpcdGNvbW1lbnRzXG5cdFx0Ki9cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQ29tbWVudChjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fQ09NTUVOVCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkNvbW1lbnQoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX0NPTU1FTlRfMSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNvbW1lbnQxKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9DT01NRU5UXzIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJDb21tZW50MihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0NEQVRBXzEpIHtcblxuICAgICAgICAvKlxuXHRcdCpcdGNkYXRhXG5cdFx0Ki9cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQ2RhdGExKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQ0RBVEFfMikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVDZGF0YTIoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9DREFUQV8zKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUNkYXRhMyhjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX0NEQVRBXzQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlQ2RhdGE0KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfQ0RBVEFfNSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVDZGF0YTUoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9DREFUQV82KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZUNkYXRhNihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fQ0RBVEEpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlSW5DZGF0YShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQUZURVJfQ0RBVEFfMSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNkYXRhMShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQUZURVJfQ0RBVEFfMikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlckNkYXRhMihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NQRUNJQUwpIHtcblxuICAgICAgICAvKlxuXHRcdCogc3BlY2lhbCB0YWdzXG5cdFx0Ki9cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU3BlY2lhbChjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NQRUNJQUxfRU5EKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVNwZWNpYWxFbmQoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TQ1JJUFRfMSkge1xuXG4gICAgICAgIC8qXG5cdFx0KiBzY3JpcHRcblx0XHQqL1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTY3JpcHQxKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfU0NSSVBUXzIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU2NyaXB0MihjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NDUklQVF8zKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVNjcmlwdDMoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TQ1JJUFRfNCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTY3JpcHQ0KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfU0NSSVBUXzUpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU2NyaXB0NShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQUZURVJfU0NSSVBUXzEpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJTY3JpcHQxKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TQ1JJUFRfMikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlclNjcmlwdDIoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEFGVEVSX1NDUklQVF8zKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyU2NyaXB0MyhjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQUZURVJfU0NSSVBUXzQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQWZ0ZXJTY3JpcHQ0KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TQ1JJUFRfNSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVBZnRlclNjcmlwdDUoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TVFlMRV8xKSB7XG5cbiAgICAgICAgLypcblx0XHQqIHN0eWxlXG5cdFx0Ki9cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU3R5bGUxKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfU1RZTEVfMikge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVCZWZvcmVTdHlsZTIoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IEJFRk9SRV9TVFlMRV8zKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUJlZm9yZVN0eWxlMyhjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gQkVGT1JFX1NUWUxFXzQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlU3R5bGU0KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TVFlMRV8xKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyU3R5bGUxKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TVFlMRV8yKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyU3R5bGUyKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TVFlMRV8zKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyU3R5bGUzKGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBBRlRFUl9TVFlMRV80KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUFmdGVyU3R5bGU0KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfRU5USVRZKSB7XG5cbiAgICAgICAgLypcblx0XHQqIGVudGl0aWVzXG5cdFx0Ki9cbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlRW50aXR5KGMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBCRUZPUkVfTlVNRVJJQ19FTlRJVFkpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlQmVmb3JlTnVtZXJpY0VudGl0eShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fTkFNRURfRU5USVRZKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUluTmFtZWRFbnRpdHkoYyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IElOX05VTUVSSUNfRU5USVRZKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZUluTnVtZXJpY0VudGl0eShjKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fSEVYX0VOVElUWSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGVJbkhleEVudGl0eShjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2Nicy5vbmVycm9yKEVycm9yKFwidW5rbm93biBfc3RhdGVcIiksIHRoaXMuX3N0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYW51cCgpO1xufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcbn07XG5Ub2tlbml6ZXIucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX2luZGV4IDwgdGhpcy5fYnVmZmVyLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9wYXJzZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICAgICAgdGhpcy5fZmluaXNoKCk7XG4gICAgfVxufTtcblxuVG9rZW5pemVyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihjaHVuaykge1xuICAgIGlmICh0aGlzLl9lbmRlZCkgdGhpcy5fY2JzLm9uZXJyb3IoRXJyb3IoXCIuZW5kKCkgYWZ0ZXIgZG9uZSFcIikpO1xuICAgIGlmIChjaHVuaykgdGhpcy53cml0ZShjaHVuayk7XG5cbiAgICB0aGlzLl9lbmRlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5fcnVubmluZykgdGhpcy5fZmluaXNoKCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAvL2lmIHRoZXJlIGlzIHJlbWFpbmluZyBkYXRhLCBlbWl0IGl0IGluIGEgcmVhc29uYWJsZSB3YXlcbiAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlVHJhaWxpbmdEYXRhKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2JzLm9uZW5kKCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9oYW5kbGVUcmFpbGluZ0RhdGEgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuX2J1ZmZlci5zdWJzdHIodGhpcy5fc2VjdGlvblN0YXJ0KTtcblxuICAgIGlmIChcbiAgICAgICAgdGhpcy5fc3RhdGUgPT09IElOX0NEQVRBIHx8XG4gICAgICAgIHRoaXMuX3N0YXRlID09PSBBRlRFUl9DREFUQV8xIHx8XG4gICAgICAgIHRoaXMuX3N0YXRlID09PSBBRlRFUl9DREFUQV8yXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2Nicy5vbmNkYXRhKGRhdGEpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuX3N0YXRlID09PSBJTl9DT01NRU5UIHx8XG4gICAgICAgIHRoaXMuX3N0YXRlID09PSBBRlRFUl9DT01NRU5UXzEgfHxcbiAgICAgICAgdGhpcy5fc3RhdGUgPT09IEFGVEVSX0NPTU1FTlRfMlxuICAgICkge1xuICAgICAgICB0aGlzLl9jYnMub25jb21tZW50KGRhdGEpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhdGUgPT09IElOX05BTUVEX0VOVElUWSAmJiAhdGhpcy5feG1sTW9kZSkge1xuICAgICAgICB0aGlzLl9wYXJzZUxlZ2FjeUVudGl0eSgpO1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvblN0YXJ0IDwgdGhpcy5faW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fYmFzZVN0YXRlO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlVHJhaWxpbmdEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXRlID09PSBJTl9OVU1FUklDX0VOVElUWSAmJiAhdGhpcy5feG1sTW9kZSkge1xuICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDIsIDEwKTtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCA8IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRyYWlsaW5nRGF0YSgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zdGF0ZSA9PT0gSU5fSEVYX0VOVElUWSAmJiAhdGhpcy5feG1sTW9kZSkge1xuICAgICAgICB0aGlzLl9kZWNvZGVOdW1lcmljRW50aXR5KDMsIDE2KTtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25TdGFydCA8IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRoaXMuX2Jhc2VTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRyYWlsaW5nRGF0YSgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5fc3RhdGUgIT09IElOX1RBR19OQU1FICYmXG4gICAgICAgIHRoaXMuX3N0YXRlICE9PSBCRUZPUkVfQVRUUklCVVRFX05BTUUgJiZcbiAgICAgICAgdGhpcy5fc3RhdGUgIT09IEJFRk9SRV9BVFRSSUJVVEVfVkFMVUUgJiZcbiAgICAgICAgdGhpcy5fc3RhdGUgIT09IEFGVEVSX0FUVFJJQlVURV9OQU1FICYmXG4gICAgICAgIHRoaXMuX3N0YXRlICE9PSBJTl9BVFRSSUJVVEVfTkFNRSAmJlxuICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gSU5fQVRUUklCVVRFX1ZBTFVFX1NRICYmXG4gICAgICAgIHRoaXMuX3N0YXRlICE9PSBJTl9BVFRSSUJVVEVfVkFMVUVfRFEgJiZcbiAgICAgICAgdGhpcy5fc3RhdGUgIT09IElOX0FUVFJJQlVURV9WQUxVRV9OUSAmJlxuICAgICAgICB0aGlzLl9zdGF0ZSAhPT0gSU5fQ0xPU0lOR19UQUdfTkFNRVxuICAgICkge1xuICAgICAgICB0aGlzLl9jYnMub250ZXh0KGRhdGEpO1xuICAgIH1cbiAgICAvL2Vsc2UsIGlnbm9yZSByZW1haW5pbmcgZGF0YVxuICAgIC8vVE9ETyBhZGQgYSB3YXkgdG8gcmVtb3ZlIGN1cnJlbnQgdGFnXG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgVG9rZW5pemVyLmNhbGwoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHsgeG1sTW9kZTogdGhpcy5feG1sTW9kZSwgZGVjb2RlRW50aXRpZXM6IHRoaXMuX2RlY29kZUVudGl0aWVzIH0sXG4gICAgICAgIHRoaXMuX2Nic1xuICAgICk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLmdldEFic29sdXRlSW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVmZmVyT2Zmc2V0ICsgdGhpcy5faW5kZXg7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9nZXRTZWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlci5zdWJzdHJpbmcodGhpcy5fc2VjdGlvblN0YXJ0LCB0aGlzLl9pbmRleCk7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9lbWl0VG9rZW4gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdGhpcy5fY2JzW25hbWVdKHRoaXMuX2dldFNlY3Rpb24oKSk7XG4gICAgdGhpcy5fc2VjdGlvblN0YXJ0ID0gLTE7XG59O1xuXG5Ub2tlbml6ZXIucHJvdG90eXBlLl9lbWl0UGFydGlhbCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX2Jhc2VTdGF0ZSAhPT0gVEVYVCkge1xuICAgICAgICB0aGlzLl9jYnMub25hdHRyaWJkYXRhKHZhbHVlKTsgLy9UT0RPIGltcGxlbWVudCB0aGUgbmV3IGV2ZW50XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY2JzLm9udGV4dCh2YWx1ZSk7XG4gICAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gU3RyZWFtO1xuXG52YXIgUGFyc2VyID0gcmVxdWlyZShcIi4vUGFyc2VyLmpzXCIpO1xudmFyIFdyaXRhYmxlU3RyZWFtID0gcmVxdWlyZShcInJlYWRhYmxlLXN0cmVhbVwiKS5Xcml0YWJsZTtcbnZhciBTdHJpbmdEZWNvZGVyID0gcmVxdWlyZShcInN0cmluZ19kZWNvZGVyXCIpLlN0cmluZ0RlY29kZXI7XG52YXIgQnVmZmVyID0gcmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXI7XG5cbmZ1bmN0aW9uIFN0cmVhbShjYnMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFyc2VyID0gKHRoaXMuX3BhcnNlciA9IG5ldyBQYXJzZXIoY2JzLCBvcHRpb25zKSk7XG4gICAgdmFyIGRlY29kZXIgPSAodGhpcy5fZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKCkpO1xuXG4gICAgV3JpdGFibGVTdHJlYW0uY2FsbCh0aGlzLCB7IGRlY29kZVN0cmluZ3M6IGZhbHNlIH0pO1xuXG4gICAgdGhpcy5vbmNlKFwiZmluaXNoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBwYXJzZXIuZW5kKGRlY29kZXIuZW5kKCkpO1xuICAgIH0pO1xufVxuXG5yZXF1aXJlKFwiaW5oZXJpdHNcIikoU3RyZWFtLCBXcml0YWJsZVN0cmVhbSk7XG5cblN0cmVhbS5wcm90b3R5cGUuX3dyaXRlID0gZnVuY3Rpb24oY2h1bmssIGVuY29kaW5nLCBjYikge1xuICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIEJ1ZmZlcikgY2h1bmsgPSB0aGlzLl9kZWNvZGVyLndyaXRlKGNodW5rKTtcbiAgICB0aGlzLl9wYXJzZXIud3JpdGUoY2h1bmspO1xuICAgIGNiKCk7XG59O1xuIiwidmFyIFBhcnNlciA9IHJlcXVpcmUoXCIuL1BhcnNlci5qc1wiKTtcbnZhciBEb21IYW5kbGVyID0gcmVxdWlyZShcImRvbWhhbmRsZXJcIik7XG5cbmZ1bmN0aW9uIGRlZmluZVByb3AobmFtZSwgdmFsdWUpIHtcbiAgICBkZWxldGUgbW9kdWxlLmV4cG9ydHNbbmFtZV07XG4gICAgbW9kdWxlLmV4cG9ydHNbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhcnNlcjogUGFyc2VyLFxuICAgIFRva2VuaXplcjogcmVxdWlyZShcIi4vVG9rZW5pemVyLmpzXCIpLFxuICAgIEVsZW1lbnRUeXBlOiByZXF1aXJlKFwiZG9tZWxlbWVudHR5cGVcIiksXG4gICAgRG9tSGFuZGxlcjogRG9tSGFuZGxlcixcbiAgICBnZXQgRmVlZEhhbmRsZXIoKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVQcm9wKFwiRmVlZEhhbmRsZXJcIiwgcmVxdWlyZShcIi4vRmVlZEhhbmRsZXIuanNcIikpO1xuICAgIH0sXG4gICAgZ2V0IFN0cmVhbSgpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZVByb3AoXCJTdHJlYW1cIiwgcmVxdWlyZShcIi4vU3RyZWFtLmpzXCIpKTtcbiAgICB9LFxuICAgIGdldCBXcml0YWJsZVN0cmVhbSgpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZVByb3AoXCJXcml0YWJsZVN0cmVhbVwiLCByZXF1aXJlKFwiLi9Xcml0YWJsZVN0cmVhbS5qc1wiKSk7XG4gICAgfSxcbiAgICBnZXQgUHJveHlIYW5kbGVyKCkge1xuICAgICAgICByZXR1cm4gZGVmaW5lUHJvcChcIlByb3h5SGFuZGxlclwiLCByZXF1aXJlKFwiLi9Qcm94eUhhbmRsZXIuanNcIikpO1xuICAgIH0sXG4gICAgZ2V0IERvbVV0aWxzKCkge1xuICAgICAgICByZXR1cm4gZGVmaW5lUHJvcChcIkRvbVV0aWxzXCIsIHJlcXVpcmUoXCJkb211dGlsc1wiKSk7XG4gICAgfSxcbiAgICBnZXQgQ29sbGVjdGluZ0hhbmRsZXIoKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmVQcm9wKFxuICAgICAgICAgICAgXCJDb2xsZWN0aW5nSGFuZGxlclwiLFxuICAgICAgICAgICAgcmVxdWlyZShcIi4vQ29sbGVjdGluZ0hhbmRsZXIuanNcIilcbiAgICAgICAgKTtcbiAgICB9LFxuICAgIC8vIEZvciBsZWdhY3kgc3VwcG9ydFxuICAgIERlZmF1bHRIYW5kbGVyOiBEb21IYW5kbGVyLFxuICAgIGdldCBSc3NIYW5kbGVyKCkge1xuICAgICAgICByZXR1cm4gZGVmaW5lUHJvcChcIlJzc0hhbmRsZXJcIiwgdGhpcy5GZWVkSGFuZGxlcik7XG4gICAgfSxcbiAgICAvL2hlbHBlciBtZXRob2RzXG4gICAgcGFyc2VET006IGZ1bmN0aW9uKGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBuZXcgRG9tSGFuZGxlcihvcHRpb25zKTtcbiAgICAgICAgbmV3IFBhcnNlcihoYW5kbGVyLCBvcHRpb25zKS5lbmQoZGF0YSk7XG4gICAgICAgIHJldHVybiBoYW5kbGVyLmRvbTtcbiAgICB9LFxuICAgIHBhcnNlRmVlZDogZnVuY3Rpb24oZmVlZCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgaGFuZGxlciA9IG5ldyBtb2R1bGUuZXhwb3J0cy5GZWVkSGFuZGxlcihvcHRpb25zKTtcbiAgICAgICAgbmV3IFBhcnNlcihoYW5kbGVyLCBvcHRpb25zKS5lbmQoZmVlZCk7XG4gICAgICAgIHJldHVybiBoYW5kbGVyLmRvbTtcbiAgICB9LFxuICAgIGNyZWF0ZURvbVN0cmVhbTogZnVuY3Rpb24oY2IsIG9wdGlvbnMsIGVsZW1lbnRDYikge1xuICAgICAgICB2YXIgaGFuZGxlciA9IG5ldyBEb21IYW5kbGVyKGNiLCBvcHRpb25zLCBlbGVtZW50Q2IpO1xuICAgICAgICByZXR1cm4gbmV3IFBhcnNlcihoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIC8vIExpc3Qgb2YgYWxsIGV2ZW50cyB0aGF0IHRoZSBwYXJzZXIgZW1pdHNcbiAgICBFVkVOVFM6IHtcbiAgICAgICAgLyogRm9ybWF0OiBldmVudG5hbWU6IG51bWJlciBvZiBhcmd1bWVudHMgKi9cbiAgICAgICAgYXR0cmlidXRlOiAyLFxuICAgICAgICBjZGF0YXN0YXJ0OiAwLFxuICAgICAgICBjZGF0YWVuZDogMCxcbiAgICAgICAgdGV4dDogMSxcbiAgICAgICAgcHJvY2Vzc2luZ2luc3RydWN0aW9uOiAyLFxuICAgICAgICBjb21tZW50OiAxLFxuICAgICAgICBjb21tZW50ZW5kOiAwLFxuICAgICAgICBjbG9zZXRhZzogMSxcbiAgICAgICAgb3BlbnRhZzogMixcbiAgICAgICAgb3BlbnRhZ25hbWU6IDEsXG4gICAgICAgIGVycm9yOiAxLFxuICAgICAgICBlbmQ6IDBcbiAgICB9XG59O1xuIiwiLyohIGllZWU3NTQuIEJTRC0zLUNsYXVzZSBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc09iamVjdCh4KSB7XG5cdHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKiBIaWdoZXN0IHBvc2l0aXZlIHNpZ25lZCAzMi1iaXQgZmxvYXQgdmFsdWUgKi9cbmNvbnN0IG1heEludCA9IDIxNDc0ODM2NDc7IC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcblxuLyoqIEJvb3RzdHJpbmcgcGFyYW1ldGVycyAqL1xuY29uc3QgYmFzZSA9IDM2O1xuY29uc3QgdE1pbiA9IDE7XG5jb25zdCB0TWF4ID0gMjY7XG5jb25zdCBza2V3ID0gMzg7XG5jb25zdCBkYW1wID0gNzAwO1xuY29uc3QgaW5pdGlhbEJpYXMgPSA3MjtcbmNvbnN0IGluaXRpYWxOID0gMTI4OyAvLyAweDgwXG5jb25zdCBkZWxpbWl0ZXIgPSAnLSc7IC8vICdcXHgyRCdcblxuLyoqIFJlZ3VsYXIgZXhwcmVzc2lvbnMgKi9cbmNvbnN0IHJlZ2V4UHVueWNvZGUgPSAvXnhuLS0vO1xuY29uc3QgcmVnZXhOb25BU0NJSSA9IC9bXlxcMC1cXHg3RV0vOyAvLyBub24tQVNDSUkgY2hhcnNcbmNvbnN0IHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2c7IC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblxuLyoqIEVycm9yIG1lc3NhZ2VzICovXG5jb25zdCBlcnJvcnMgPSB7XG5cdCdvdmVyZmxvdyc6ICdPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2VzcycsXG5cdCdub3QtYmFzaWMnOiAnSWxsZWdhbCBpbnB1dCA+PSAweDgwIChub3QgYSBiYXNpYyBjb2RlIHBvaW50KScsXG5cdCdpbnZhbGlkLWlucHV0JzogJ0ludmFsaWQgaW5wdXQnXG59O1xuXG4vKiogQ29udmVuaWVuY2Ugc2hvcnRjdXRzICovXG5jb25zdCBiYXNlTWludXNUTWluID0gYmFzZSAtIHRNaW47XG5jb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG5jb25zdCBzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4gKiBBIGdlbmVyaWMgZXJyb3IgdXRpbGl0eSBmdW5jdGlvbi5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZXJyb3IgdHlwZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhyb3dzIGEgYFJhbmdlRXJyb3JgIHdpdGggdGhlIGFwcGxpY2FibGUgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gZXJyb3IodHlwZSkge1xuXHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xufVxuXG4vKipcbiAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcbiAqIGl0ZW0uXG4gKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hcChhcnJheSwgZm4pIHtcblx0Y29uc3QgcmVzdWx0ID0gW107XG5cdGxldCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdHJlc3VsdFtsZW5ndGhdID0gZm4oYXJyYXlbbGVuZ3RoXSk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBIHNpbXBsZSBgQXJyYXkjbWFwYC1saWtlIHdyYXBwZXIgdG8gd29yayB3aXRoIGRvbWFpbiBuYW1lIHN0cmluZ3Mgb3IgZW1haWxcbiAqIGFkZHJlc3Nlcy5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgZm9yIGV2ZXJ5XG4gKiBjaGFyYWN0ZXIuXG4gKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuICogZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hcERvbWFpbihzdHJpbmcsIGZuKSB7XG5cdGNvbnN0IHBhcnRzID0gc3RyaW5nLnNwbGl0KCdAJyk7XG5cdGxldCByZXN1bHQgPSAnJztcblx0aWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0Ly8gdGhlIGxvY2FsIHBhcnQgKGkuZS4gZXZlcnl0aGluZyB1cCB0byBgQGApIGludGFjdC5cblx0XHRyZXN1bHQgPSBwYXJ0c1swXSArICdAJztcblx0XHRzdHJpbmcgPSBwYXJ0c1sxXTtcblx0fVxuXHQvLyBBdm9pZCBgc3BsaXQocmVnZXgpYCBmb3IgSUU4IGNvbXBhdGliaWxpdHkuIFNlZSAjMTcuXG5cdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdGNvbnN0IGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRjb25zdCBlbmNvZGVkID0gbWFwKGxhYmVscywgZm4pLmpvaW4oJy4nKTtcblx0cmV0dXJuIHJlc3VsdCArIGVuY29kZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBudW1lcmljIGNvZGUgcG9pbnRzIG9mIGVhY2ggVW5pY29kZVxuICogY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcuIFdoaWxlIEphdmFTY3JpcHQgdXNlcyBVQ1MtMiBpbnRlcm5hbGx5LFxuICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcbiAqIFVDUy0yIGV4cG9zZXMgYXMgc2VwYXJhdGUgY2hhcmFjdGVycykgaW50byBhIHNpbmdsZSBjb2RlIHBvaW50LFxuICogbWF0Y2hpbmcgVVRGLTE2LlxuICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG4gKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG4gKiBAbmFtZSBkZWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIFVuaWNvZGUgaW5wdXQgc3RyaW5nIChVQ1MtMikuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBuZXcgYXJyYXkgb2YgY29kZSBwb2ludHMuXG4gKi9cbmZ1bmN0aW9uIHVjczJkZWNvZGUoc3RyaW5nKSB7XG5cdGNvbnN0IG91dHB1dCA9IFtdO1xuXHRsZXQgY291bnRlciA9IDA7XG5cdGNvbnN0IGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdC8vIEl0J3MgYSBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXIuXG5cdFx0XHRjb25zdCBleHRyYSA9IHN0cmluZy5jaGFyQ29kZUF0KGNvdW50ZXIrKyk7XG5cdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gTG93IHN1cnJvZ2F0ZS5cblx0XHRcdFx0b3V0cHV0LnB1c2goKCh2YWx1ZSAmIDB4M0ZGKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNGRikgKyAweDEwMDAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEl0J3MgYW4gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlXG5cdFx0XHRcdC8vIG5leHQgY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyLlxuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cbiAqIEBzZWUgYHB1bnljb2RlLnVjczIuZGVjb2RlYFxuICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcbiAqIEBuYW1lIGVuY29kZVxuICogQHBhcmFtIHtBcnJheX0gY29kZVBvaW50cyBUaGUgYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBuZXcgVW5pY29kZSBzdHJpbmcgKFVDUy0yKS5cbiAqL1xuY29uc3QgdWNzMmVuY29kZSA9IGFycmF5ID0+IFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmFycmF5KTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIGJhc2ljIGNvZGUgcG9pbnQgaW50byBhIGRpZ2l0L2ludGVnZXIuXG4gKiBAc2VlIGBkaWdpdFRvQmFzaWMoKWBcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gY29kZVBvaW50IFRoZSBiYXNpYyBudW1lcmljIGNvZGUgcG9pbnQgdmFsdWUuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQgKGZvciB1c2UgaW5cbiAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcbiAqIHRoZSBjb2RlIHBvaW50IGRvZXMgbm90IHJlcHJlc2VudCBhIHZhbHVlLlxuICovXG5jb25zdCBiYXNpY1RvRGlnaXQgPSBmdW5jdGlvbihjb2RlUG9pbnQpIHtcblx0aWYgKGNvZGVQb2ludCAtIDB4MzAgPCAweDBBKSB7XG5cdFx0cmV0dXJuIGNvZGVQb2ludCAtIDB4MTY7XG5cdH1cblx0aWYgKGNvZGVQb2ludCAtIDB4NDEgPCAweDFBKSB7XG5cdFx0cmV0dXJuIGNvZGVQb2ludCAtIDB4NDE7XG5cdH1cblx0aWYgKGNvZGVQb2ludCAtIDB4NjEgPCAweDFBKSB7XG5cdFx0cmV0dXJuIGNvZGVQb2ludCAtIDB4NjE7XG5cdH1cblx0cmV0dXJuIGJhc2U7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgZGlnaXQvaW50ZWdlciBpbnRvIGEgYmFzaWMgY29kZSBwb2ludC5cbiAqIEBzZWUgYGJhc2ljVG9EaWdpdCgpYFxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBkaWdpdCBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYmFzaWMgY29kZSBwb2ludCB3aG9zZSB2YWx1ZSAod2hlbiB1c2VkIGZvclxuICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2VcbiAqIGAwYCB0byBgYmFzZSAtIDFgLiBJZiBgZmxhZ2AgaXMgbm9uLXplcm8sIHRoZSB1cHBlcmNhc2UgZm9ybSBpc1xuICogdXNlZDsgZWxzZSwgdGhlIGxvd2VyY2FzZSBmb3JtIGlzIHVzZWQuIFRoZSBiZWhhdmlvciBpcyB1bmRlZmluZWRcbiAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG4gKi9cbmNvbnN0IGRpZ2l0VG9CYXNpYyA9IGZ1bmN0aW9uKGRpZ2l0LCBmbGFnKSB7XG5cdC8vICAwLi4yNSBtYXAgdG8gQVNDSUkgYS4ueiBvciBBLi5aXG5cdC8vIDI2Li4zNSBtYXAgdG8gQVNDSUkgMC4uOVxuXHRyZXR1cm4gZGlnaXQgKyAyMiArIDc1ICogKGRpZ2l0IDwgMjYpIC0gKChmbGFnICE9IDApIDw8IDUpO1xufTtcblxuLyoqXG4gKiBCaWFzIGFkYXB0YXRpb24gZnVuY3Rpb24gYXMgcGVyIHNlY3Rpb24gMy40IG9mIFJGQyAzNDkyLlxuICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM0OTIjc2VjdGlvbi0zLjRcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGFkYXB0ID0gZnVuY3Rpb24oZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdGxldCBrID0gMDtcblx0ZGVsdGEgPSBmaXJzdFRpbWUgPyBmbG9vcihkZWx0YSAvIGRhbXApIDogZGVsdGEgPj4gMTtcblx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRmb3IgKC8qIG5vIGluaXRpYWxpemF0aW9uICovOyBkZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuXHRcdGRlbHRhID0gZmxvb3IoZGVsdGEgLyBiYXNlTWludXNUTWluKTtcblx0fVxuXHRyZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzIHRvIGEgc3RyaW5nIG9mIFVuaWNvZGVcbiAqIHN5bWJvbHMuXG4gKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqL1xuY29uc3QgZGVjb2RlID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0Ly8gRG9uJ3QgdXNlIFVDUy0yLlxuXHRjb25zdCBvdXRwdXQgPSBbXTtcblx0Y29uc3QgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cdGxldCBpID0gMDtcblx0bGV0IG4gPSBpbml0aWFsTjtcblx0bGV0IGJpYXMgPSBpbml0aWFsQmlhcztcblxuXHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzOiBsZXQgYGJhc2ljYCBiZSB0aGUgbnVtYmVyIG9mIGlucHV0IGNvZGVcblx0Ly8gcG9pbnRzIGJlZm9yZSB0aGUgbGFzdCBkZWxpbWl0ZXIsIG9yIGAwYCBpZiB0aGVyZSBpcyBub25lLCB0aGVuIGNvcHlcblx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0bGV0IGJhc2ljID0gaW5wdXQubGFzdEluZGV4T2YoZGVsaW1pdGVyKTtcblx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdGJhc2ljID0gMDtcblx0fVxuXG5cdGZvciAobGV0IGogPSAwOyBqIDwgYmFzaWM7ICsraikge1xuXHRcdC8vIGlmIGl0J3Mgbm90IGEgYmFzaWMgY29kZSBwb2ludFxuXHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdGVycm9yKCdub3QtYmFzaWMnKTtcblx0XHR9XG5cdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdH1cblxuXHQvLyBNYWluIGRlY29kaW5nIGxvb3A6IHN0YXJ0IGp1c3QgYWZ0ZXIgdGhlIGxhc3QgZGVsaW1pdGVyIGlmIGFueSBiYXNpYyBjb2RlXG5cdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0Zm9yIChsZXQgaW5kZXggPSBiYXNpYyA+IDAgPyBiYXNpYyArIDEgOiAwOyBpbmRleCA8IGlucHV0TGVuZ3RoOyAvKiBubyBmaW5hbCBleHByZXNzaW9uICovKSB7XG5cblx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0Ly8gRGVjb2RlIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIgaW50byBgZGVsdGFgLFxuXHRcdC8vIHdoaWNoIGdldHMgYWRkZWQgdG8gYGlgLiBUaGUgb3ZlcmZsb3cgY2hlY2tpbmcgaXMgZWFzaWVyXG5cdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHQvLyB2YWx1ZSBhdCB0aGUgZW5kIHRvIG9idGFpbiBgZGVsdGFgLlxuXHRcdGxldCBvbGRpID0gaTtcblx0XHRmb3IgKGxldCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdGlmIChpbmRleCA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRlcnJvcignaW52YWxpZC1pbnB1dCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkaWdpdCA9IGJhc2ljVG9EaWdpdChpbnB1dC5jaGFyQ29kZUF0KGluZGV4KyspKTtcblxuXHRcdFx0aWYgKGRpZ2l0ID49IGJhc2UgfHwgZGlnaXQgPiBmbG9vcigobWF4SW50IC0gaSkgLyB3KSkge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblxuXHRcdFx0aSArPSBkaWdpdCAqIHc7XG5cdFx0XHRjb25zdCB0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0aWYgKGRpZ2l0IDwgdCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgYmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0aWYgKHcgPiBmbG9vcihtYXhJbnQgLyBiYXNlTWludXNUKSkge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblxuXHRcdFx0dyAqPSBiYXNlTWludXNUO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3V0ID0gb3V0cHV0Lmxlbmd0aCArIDE7XG5cdFx0YmlhcyA9IGFkYXB0KGkgLSBvbGRpLCBvdXQsIG9sZGkgPT0gMCk7XG5cblx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdC8vIGluY3JlbWVudGluZyBgbmAgZWFjaCB0aW1lLCBzbyB3ZSdsbCBmaXggdGhhdCBub3c6XG5cdFx0aWYgKGZsb29yKGkgLyBvdXQpID4gbWF4SW50IC0gbikge1xuXHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0fVxuXG5cdFx0biArPSBmbG9vcihpIC8gb3V0KTtcblx0XHRpICU9IG91dDtcblxuXHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXQuXG5cdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdH1cblxuXHRyZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4ub3V0cHV0KTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcbiAqIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG4gKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cbiAqL1xuY29uc3QgZW5jb2RlID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0Y29uc3Qgb3V0cHV0ID0gW107XG5cblx0Ly8gQ29udmVydCB0aGUgaW5wdXQgaW4gVUNTLTIgdG8gYW4gYXJyYXkgb2YgVW5pY29kZSBjb2RlIHBvaW50cy5cblx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHQvLyBDYWNoZSB0aGUgbGVuZ3RoLlxuXHRsZXQgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cblx0Ly8gSW5pdGlhbGl6ZSB0aGUgc3RhdGUuXG5cdGxldCBuID0gaW5pdGlhbE47XG5cdGxldCBkZWx0YSA9IDA7XG5cdGxldCBiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50cy5cblx0Zm9yIChjb25zdCBjdXJyZW50VmFsdWUgb2YgaW5wdXQpIHtcblx0XHRpZiAoY3VycmVudFZhbHVlIDwgMHg4MCkge1xuXHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdH1cblx0fVxuXG5cdGxldCBiYXNpY0xlbmd0aCA9IG91dHB1dC5sZW5ndGg7XG5cdGxldCBoYW5kbGVkQ1BDb3VudCA9IGJhc2ljTGVuZ3RoO1xuXG5cdC8vIGBoYW5kbGVkQ1BDb3VudGAgaXMgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyB0aGF0IGhhdmUgYmVlbiBoYW5kbGVkO1xuXHQvLyBgYmFzaWNMZW5ndGhgIGlzIHRoZSBudW1iZXIgb2YgYmFzaWMgY29kZSBwb2ludHMuXG5cblx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgd2l0aCBhIGRlbGltaXRlciB1bmxlc3MgaXQncyBlbXB0eS5cblx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0b3V0cHV0LnB1c2goZGVsaW1pdGVyKTtcblx0fVxuXG5cdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0d2hpbGUgKGhhbmRsZWRDUENvdW50IDwgaW5wdXRMZW5ndGgpIHtcblxuXHRcdC8vIEFsbCBub24tYmFzaWMgY29kZSBwb2ludHMgPCBuIGhhdmUgYmVlbiBoYW5kbGVkIGFscmVhZHkuIEZpbmQgdGhlIG5leHRcblx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdGxldCBtID0gbWF4SW50O1xuXHRcdGZvciAoY29uc3QgY3VycmVudFZhbHVlIG9mIGlucHV0KSB7XG5cdFx0XHRpZiAoY3VycmVudFZhbHVlID49IG4gJiYgY3VycmVudFZhbHVlIDwgbSkge1xuXHRcdFx0XHRtID0gY3VycmVudFZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEluY3JlYXNlIGBkZWx0YWAgZW5vdWdoIHRvIGFkdmFuY2UgdGhlIGRlY29kZXIncyA8bixpPiBzdGF0ZSB0byA8bSwwPixcblx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvdy5cblx0XHRjb25zdCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUgPSBoYW5kbGVkQ1BDb3VudCArIDE7XG5cdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdH1cblxuXHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0biA9IG07XG5cblx0XHRmb3IgKGNvbnN0IGN1cnJlbnRWYWx1ZSBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdH1cblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT0gbikge1xuXHRcdFx0XHQvLyBSZXByZXNlbnQgZGVsdGEgYXMgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlci5cblx0XHRcdFx0bGV0IHEgPSBkZWx0YTtcblx0XHRcdFx0Zm9yIChsZXQgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0Y29uc3QgdCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cdFx0XHRcdFx0aWYgKHEgPCB0KSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3QgcU1pbnVzVCA9IHEgLSB0O1xuXHRcdFx0XHRcdGNvbnN0IGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRvdXRwdXQucHVzaChcblx0XHRcdFx0XHRcdHN0cmluZ0Zyb21DaGFyQ29kZShkaWdpdFRvQmFzaWModCArIHFNaW51c1QgJSBiYXNlTWludXNULCAwKSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHEgPSBmbG9vcihxTWludXNUIC8gYmFzZU1pbnVzVCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdGJpYXMgPSBhZGFwdChkZWx0YSwgaGFuZGxlZENQQ291bnRQbHVzT25lLCBoYW5kbGVkQ1BDb3VudCA9PSBiYXNpY0xlbmd0aCk7XG5cdFx0XHRcdGRlbHRhID0gMDtcblx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQrK2RlbHRhO1xuXHRcdCsrbjtcblxuXHR9XG5cdHJldHVybiBvdXRwdXQuam9pbignJyk7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3NcbiAqIHRvIFVuaWNvZGUuIE9ubHkgdGhlIFB1bnljb2RlZCBwYXJ0cyBvZiB0aGUgaW5wdXQgd2lsbCBiZSBjb252ZXJ0ZWQsIGkuZS5cbiAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuICogY29udmVydGVkIHRvIFVuaWNvZGUuXG4gKiBAbWVtYmVyT2YgcHVueWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cbiAqIGNvbnZlcnQgdG8gVW5pY29kZS5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBVbmljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBQdW55Y29kZVxuICogc3RyaW5nLlxuICovXG5jb25zdCB0b1VuaWNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdD8gZGVjb2RlKHN0cmluZy5zbGljZSg0KS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0OiBzdHJpbmc7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVuaWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3MgdG9cbiAqIFB1bnljb2RlLiBPbmx5IHRoZSBub24tQVNDSUkgcGFydHMgb2YgdGhlIGRvbWFpbiBuYW1lIHdpbGwgYmUgY29udmVydGVkLFxuICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG4gKiBBU0NJSS5cbiAqIEBtZW1iZXJPZiBwdW55Y29kZVxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcbiAqIFVuaWNvZGUgc3RyaW5nLlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFB1bnljb2RlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBkb21haW4gbmFtZSBvclxuICogZW1haWwgYWRkcmVzcy5cbiAqL1xuY29uc3QgdG9BU0NJSSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0PyAneG4tLScgKyBlbmNvZGUoc3RyaW5nKVxuXHRcdFx0OiBzdHJpbmc7XG5cdH0pO1xufTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cbmNvbnN0IHB1bnljb2RlID0ge1xuXHQvKipcblx0ICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHR5cGUgU3RyaW5nXG5cdCAqL1xuXHQndmVyc2lvbic6ICcyLjEuMCcsXG5cdC8qKlxuXHQgKiBBbiBvYmplY3Qgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGZyb20gSmF2YVNjcmlwdCdzIGludGVybmFsIGNoYXJhY3RlclxuXHQgKiByZXByZXNlbnRhdGlvbiAoVUNTLTIpIHRvIFVuaWNvZGUgY29kZSBwb2ludHMsIGFuZCBiYWNrLlxuXHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEB0eXBlIE9iamVjdFxuXHQgKi9cblx0J3VjczInOiB7XG5cdFx0J2RlY29kZSc6IHVjczJkZWNvZGUsXG5cdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0fSxcblx0J2RlY29kZSc6IGRlY29kZSxcblx0J2VuY29kZSc6IGVuY29kZSxcblx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHQndG9Vbmljb2RlJzogdG9Vbmljb2RlXG59O1xuXG5leHBvcnQgeyB1Y3MyZGVjb2RlLCB1Y3MyZW5jb2RlLCBkZWNvZGUsIGVuY29kZSwgdG9BU0NJSSwgdG9Vbmljb2RlIH07XG5leHBvcnQgZGVmYXVsdCBwdW55Y29kZTtcbiIsIi8qISBzYWZlLWJ1ZmZlci4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby1kZXByZWNhdGVkLWFwaSAqL1xudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpXG52YXIgQnVmZmVyID0gYnVmZmVyLkJ1ZmZlclxuXG4vLyBhbHRlcm5hdGl2ZSB0byB1c2luZyBPYmplY3Qua2V5cyBmb3Igb2xkIGJyb3dzZXJzXG5mdW5jdGlvbiBjb3B5UHJvcHMgKHNyYywgZHN0KSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBkc3Rba2V5XSA9IHNyY1trZXldXG4gIH1cbn1cbmlmIChCdWZmZXIuZnJvbSAmJiBCdWZmZXIuYWxsb2MgJiYgQnVmZmVyLmFsbG9jVW5zYWZlICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBidWZmZXJcbn0gZWxzZSB7XG4gIC8vIENvcHkgcHJvcGVydGllcyBmcm9tIHJlcXVpcmUoJ2J1ZmZlcicpXG4gIGNvcHlQcm9wcyhidWZmZXIsIGV4cG9ydHMpXG4gIGV4cG9ydHMuQnVmZmVyID0gU2FmZUJ1ZmZlclxufVxuXG5mdW5jdGlvbiBTYWZlQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQnVmZmVyLnByb3RvdHlwZSlcblxuLy8gQ29weSBzdGF0aWMgbWV0aG9kcyBmcm9tIEJ1ZmZlclxuY29weVByb3BzKEJ1ZmZlciwgU2FmZUJ1ZmZlcilcblxuU2FmZUJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICB2YXIgYnVmID0gQnVmZmVyKHNpemUpXG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgYnVmLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJ1Zi5maWxsKDApXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoc2l6ZSlcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlci5TbG93QnVmZmVyKHNpemUpXG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIGlzRW5jb2RpbmcgPSBCdWZmZXIuaXNFbmNvZGluZyB8fCBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgZW5jb2RpbmcgPSAnJyArIGVuY29kaW5nO1xuICBzd2l0Y2ggKGVuY29kaW5nICYmIGVuY29kaW5nLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOmNhc2UgJ3V0ZjgnOmNhc2UgJ3V0Zi04JzpjYXNlICdhc2NpaSc6Y2FzZSAnYmluYXJ5JzpjYXNlICdiYXNlNjQnOmNhc2UgJ3VjczInOmNhc2UgJ3Vjcy0yJzpjYXNlICd1dGYxNmxlJzpjYXNlICd1dGYtMTZsZSc6Y2FzZSAncmF3JzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9ub3JtYWxpemVFbmNvZGluZyhlbmMpIHtcbiAgaWYgKCFlbmMpIHJldHVybiAndXRmOCc7XG4gIHZhciByZXRyaWVkO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jKSB7XG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuICd1dGY4JztcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiAndXRmMTZsZSc7XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuICdsYXRpbjEnO1xuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBlbmM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAocmV0cmllZCkgcmV0dXJuOyAvLyB1bmRlZmluZWRcbiAgICAgICAgZW5jID0gKCcnICsgZW5jKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXRyaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIERvIG5vdCBjYWNoZSBgQnVmZmVyLmlzRW5jb2RpbmdgIHdoZW4gY2hlY2tpbmcgZW5jb2RpbmcgbmFtZXMgYXMgc29tZVxuLy8gbW9kdWxlcyBtb25rZXktcGF0Y2ggaXQgdG8gc3VwcG9ydCBhZGRpdGlvbmFsIGVuY29kaW5nc1xuZnVuY3Rpb24gbm9ybWFsaXplRW5jb2RpbmcoZW5jKSB7XG4gIHZhciBuZW5jID0gX25vcm1hbGl6ZUVuY29kaW5nKGVuYyk7XG4gIGlmICh0eXBlb2YgbmVuYyAhPT0gJ3N0cmluZycgJiYgKEJ1ZmZlci5pc0VuY29kaW5nID09PSBpc0VuY29kaW5nIHx8ICFpc0VuY29kaW5nKGVuYykpKSB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmMpO1xuICByZXR1cm4gbmVuYyB8fCBlbmM7XG59XG5cbi8vIFN0cmluZ0RlY29kZXIgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBlZmZpY2llbnRseSBzcGxpdHRpbmcgYSBzZXJpZXMgb2Zcbi8vIGJ1ZmZlcnMgaW50byBhIHNlcmllcyBvZiBKUyBzdHJpbmdzIHdpdGhvdXQgYnJlYWtpbmcgYXBhcnQgbXVsdGktYnl0ZVxuLy8gY2hhcmFjdGVycy5cbmV4cG9ydHMuU3RyaW5nRGVjb2RlciA9IFN0cmluZ0RlY29kZXI7XG5mdW5jdGlvbiBTdHJpbmdEZWNvZGVyKGVuY29kaW5nKSB7XG4gIHRoaXMuZW5jb2RpbmcgPSBub3JtYWxpemVFbmNvZGluZyhlbmNvZGluZyk7XG4gIHZhciBuYjtcbiAgc3dpdGNoICh0aGlzLmVuY29kaW5nKSB7XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICB0aGlzLnRleHQgPSB1dGYxNlRleHQ7XG4gICAgICB0aGlzLmVuZCA9IHV0ZjE2RW5kO1xuICAgICAgbmIgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndXRmOCc6XG4gICAgICB0aGlzLmZpbGxMYXN0ID0gdXRmOEZpbGxMYXN0O1xuICAgICAgbmIgPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHRoaXMudGV4dCA9IGJhc2U2NFRleHQ7XG4gICAgICB0aGlzLmVuZCA9IGJhc2U2NEVuZDtcbiAgICAgIG5iID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzLndyaXRlID0gc2ltcGxlV3JpdGU7XG4gICAgICB0aGlzLmVuZCA9IHNpbXBsZUVuZDtcbiAgICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmxhc3ROZWVkID0gMDtcbiAgdGhpcy5sYXN0VG90YWwgPSAwO1xuICB0aGlzLmxhc3RDaGFyID0gQnVmZmVyLmFsbG9jVW5zYWZlKG5iKTtcbn1cblxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYnVmKSB7XG4gIGlmIChidWYubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG4gIHZhciByO1xuICB2YXIgaTtcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHtcbiAgICByID0gdGhpcy5maWxsTGFzdChidWYpO1xuICAgIGlmIChyID09PSB1bmRlZmluZWQpIHJldHVybiAnJztcbiAgICBpID0gdGhpcy5sYXN0TmVlZDtcbiAgICB0aGlzLmxhc3ROZWVkID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpID0gMDtcbiAgfVxuICBpZiAoaSA8IGJ1Zi5sZW5ndGgpIHJldHVybiByID8gciArIHRoaXMudGV4dChidWYsIGkpIDogdGhpcy50ZXh0KGJ1ZiwgaSk7XG4gIHJldHVybiByIHx8ICcnO1xufTtcblxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUuZW5kID0gdXRmOEVuZDtcblxuLy8gUmV0dXJucyBvbmx5IGNvbXBsZXRlIGNoYXJhY3RlcnMgaW4gYSBCdWZmZXJcblN0cmluZ0RlY29kZXIucHJvdG90eXBlLnRleHQgPSB1dGY4VGV4dDtcblxuLy8gQXR0ZW1wdHMgdG8gY29tcGxldGUgYSBwYXJ0aWFsIG5vbi1VVEYtOCBjaGFyYWN0ZXIgdXNpbmcgYnl0ZXMgZnJvbSBhIEJ1ZmZlclxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUuZmlsbExhc3QgPSBmdW5jdGlvbiAoYnVmKSB7XG4gIGlmICh0aGlzLmxhc3ROZWVkIDw9IGJ1Zi5sZW5ndGgpIHtcbiAgICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQsIDAsIHRoaXMubGFzdE5lZWQpO1xuICAgIHJldHVybiB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsIDAsIHRoaXMubGFzdFRvdGFsKTtcbiAgfVxuICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQsIDAsIGJ1Zi5sZW5ndGgpO1xuICB0aGlzLmxhc3ROZWVkIC09IGJ1Zi5sZW5ndGg7XG59O1xuXG4vLyBDaGVja3MgdGhlIHR5cGUgb2YgYSBVVEYtOCBieXRlLCB3aGV0aGVyIGl0J3MgQVNDSUksIGEgbGVhZGluZyBieXRlLCBvciBhXG4vLyBjb250aW51YXRpb24gYnl0ZS4gSWYgYW4gaW52YWxpZCBieXRlIGlzIGRldGVjdGVkLCAtMiBpcyByZXR1cm5lZC5cbmZ1bmN0aW9uIHV0ZjhDaGVja0J5dGUoYnl0ZSkge1xuICBpZiAoYnl0ZSA8PSAweDdGKSByZXR1cm4gMDtlbHNlIGlmIChieXRlID4+IDUgPT09IDB4MDYpIHJldHVybiAyO2Vsc2UgaWYgKGJ5dGUgPj4gNCA9PT0gMHgwRSkgcmV0dXJuIDM7ZWxzZSBpZiAoYnl0ZSA+PiAzID09PSAweDFFKSByZXR1cm4gNDtcbiAgcmV0dXJuIGJ5dGUgPj4gNiA9PT0gMHgwMiA/IC0xIDogLTI7XG59XG5cbi8vIENoZWNrcyBhdCBtb3N0IDMgYnl0ZXMgYXQgdGhlIGVuZCBvZiBhIEJ1ZmZlciBpbiBvcmRlciB0byBkZXRlY3QgYW5cbi8vIGluY29tcGxldGUgbXVsdGktYnl0ZSBVVEYtOCBjaGFyYWN0ZXIuIFRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgKDIsIDMsIG9yIDQpXG4vLyBuZWVkZWQgdG8gY29tcGxldGUgdGhlIFVURi04IGNoYXJhY3RlciAoaWYgYXBwbGljYWJsZSkgYXJlIHJldHVybmVkLlxuZnVuY3Rpb24gdXRmOENoZWNrSW5jb21wbGV0ZShzZWxmLCBidWYsIGkpIHtcbiAgdmFyIGogPSBidWYubGVuZ3RoIC0gMTtcbiAgaWYgKGogPCBpKSByZXR1cm4gMDtcbiAgdmFyIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHNlbGYubGFzdE5lZWQgPSBuYiAtIDE7XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIGlmICgtLWogPCBpIHx8IG5iID09PSAtMikgcmV0dXJuIDA7XG4gIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHNlbGYubGFzdE5lZWQgPSBuYiAtIDI7XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIGlmICgtLWogPCBpIHx8IG5iID09PSAtMikgcmV0dXJuIDA7XG4gIG5iID0gdXRmOENoZWNrQnl0ZShidWZbal0pO1xuICBpZiAobmIgPj0gMCkge1xuICAgIGlmIChuYiA+IDApIHtcbiAgICAgIGlmIChuYiA9PT0gMikgbmIgPSAwO2Vsc2Ugc2VsZi5sYXN0TmVlZCA9IG5iIC0gMztcbiAgICB9XG4gICAgcmV0dXJuIG5iO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG4vLyBWYWxpZGF0ZXMgYXMgbWFueSBjb250aW51YXRpb24gYnl0ZXMgZm9yIGEgbXVsdGktYnl0ZSBVVEYtOCBjaGFyYWN0ZXIgYXNcbi8vIG5lZWRlZCBvciBhcmUgYXZhaWxhYmxlLiBJZiB3ZSBzZWUgYSBub24tY29udGludWF0aW9uIGJ5dGUgd2hlcmUgd2UgZXhwZWN0XG4vLyBvbmUsIHdlIFwicmVwbGFjZVwiIHRoZSB2YWxpZGF0ZWQgY29udGludWF0aW9uIGJ5dGVzIHdlJ3ZlIHNlZW4gc28gZmFyIHdpdGhcbi8vIGEgc2luZ2xlIFVURi04IHJlcGxhY2VtZW50IGNoYXJhY3RlciAoJ1xcdWZmZmQnKSwgdG8gbWF0Y2ggdjgncyBVVEYtOCBkZWNvZGluZ1xuLy8gYmVoYXZpb3IuIFRoZSBjb250aW51YXRpb24gYnl0ZSBjaGVjayBpcyBpbmNsdWRlZCB0aHJlZSB0aW1lcyBpbiB0aGUgY2FzZVxuLy8gd2hlcmUgYWxsIG9mIHRoZSBjb250aW51YXRpb24gYnl0ZXMgZm9yIGEgY2hhcmFjdGVyIGV4aXN0IGluIHRoZSBzYW1lIGJ1ZmZlci5cbi8vIEl0IGlzIGFsc28gZG9uZSB0aGlzIHdheSBhcyBhIHNsaWdodCBwZXJmb3JtYW5jZSBpbmNyZWFzZSBpbnN0ZWFkIG9mIHVzaW5nIGFcbi8vIGxvb3AuXG5mdW5jdGlvbiB1dGY4Q2hlY2tFeHRyYUJ5dGVzKHNlbGYsIGJ1ZiwgcCkge1xuICBpZiAoKGJ1ZlswXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgc2VsZi5sYXN0TmVlZCA9IDA7XG4gICAgcmV0dXJuICdcXHVmZmZkJztcbiAgfVxuICBpZiAoc2VsZi5sYXN0TmVlZCA+IDEgJiYgYnVmLmxlbmd0aCA+IDEpIHtcbiAgICBpZiAoKGJ1ZlsxXSAmIDB4QzApICE9PSAweDgwKSB7XG4gICAgICBzZWxmLmxhc3ROZWVkID0gMTtcbiAgICAgIHJldHVybiAnXFx1ZmZmZCc7XG4gICAgfVxuICAgIGlmIChzZWxmLmxhc3ROZWVkID4gMiAmJiBidWYubGVuZ3RoID4gMikge1xuICAgICAgaWYgKChidWZbMl0gJiAweEMwKSAhPT0gMHg4MCkge1xuICAgICAgICBzZWxmLmxhc3ROZWVkID0gMjtcbiAgICAgICAgcmV0dXJuICdcXHVmZmZkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQXR0ZW1wdHMgdG8gY29tcGxldGUgYSBtdWx0aS1ieXRlIFVURi04IGNoYXJhY3RlciB1c2luZyBieXRlcyBmcm9tIGEgQnVmZmVyLlxuZnVuY3Rpb24gdXRmOEZpbGxMYXN0KGJ1Zikge1xuICB2YXIgcCA9IHRoaXMubGFzdFRvdGFsIC0gdGhpcy5sYXN0TmVlZDtcbiAgdmFyIHIgPSB1dGY4Q2hlY2tFeHRyYUJ5dGVzKHRoaXMsIGJ1ZiwgcCk7XG4gIGlmIChyICE9PSB1bmRlZmluZWQpIHJldHVybiByO1xuICBpZiAodGhpcy5sYXN0TmVlZCA8PSBidWYubGVuZ3RoKSB7XG4gICAgYnVmLmNvcHkodGhpcy5sYXN0Q2hhciwgcCwgMCwgdGhpcy5sYXN0TmVlZCk7XG4gICAgcmV0dXJuIHRoaXMubGFzdENoYXIudG9TdHJpbmcodGhpcy5lbmNvZGluZywgMCwgdGhpcy5sYXN0VG90YWwpO1xuICB9XG4gIGJ1Zi5jb3B5KHRoaXMubGFzdENoYXIsIHAsIDAsIGJ1Zi5sZW5ndGgpO1xuICB0aGlzLmxhc3ROZWVkIC09IGJ1Zi5sZW5ndGg7XG59XG5cbi8vIFJldHVybnMgYWxsIGNvbXBsZXRlIFVURi04IGNoYXJhY3RlcnMgaW4gYSBCdWZmZXIuIElmIHRoZSBCdWZmZXIgZW5kZWQgb24gYVxuLy8gcGFydGlhbCBjaGFyYWN0ZXIsIHRoZSBjaGFyYWN0ZXIncyBieXRlcyBhcmUgYnVmZmVyZWQgdW50aWwgdGhlIHJlcXVpcmVkXG4vLyBudW1iZXIgb2YgYnl0ZXMgYXJlIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIHV0ZjhUZXh0KGJ1ZiwgaSkge1xuICB2YXIgdG90YWwgPSB1dGY4Q2hlY2tJbmNvbXBsZXRlKHRoaXMsIGJ1ZiwgaSk7XG4gIGlmICghdGhpcy5sYXN0TmVlZCkgcmV0dXJuIGJ1Zi50b1N0cmluZygndXRmOCcsIGkpO1xuICB0aGlzLmxhc3RUb3RhbCA9IHRvdGFsO1xuICB2YXIgZW5kID0gYnVmLmxlbmd0aCAtICh0b3RhbCAtIHRoaXMubGFzdE5lZWQpO1xuICBidWYuY29weSh0aGlzLmxhc3RDaGFyLCAwLCBlbmQpO1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGY4JywgaSwgZW5kKTtcbn1cblxuLy8gRm9yIFVURi04LCBhIHJlcGxhY2VtZW50IGNoYXJhY3RlciBpcyBhZGRlZCB3aGVuIGVuZGluZyBvbiBhIHBhcnRpYWxcbi8vIGNoYXJhY3Rlci5cbmZ1bmN0aW9uIHV0ZjhFbmQoYnVmKSB7XG4gIHZhciByID0gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbiAgaWYgKHRoaXMubGFzdE5lZWQpIHJldHVybiByICsgJ1xcdWZmZmQnO1xuICByZXR1cm4gcjtcbn1cblxuLy8gVVRGLTE2TEUgdHlwaWNhbGx5IG5lZWRzIHR3byBieXRlcyBwZXIgY2hhcmFjdGVyLCBidXQgZXZlbiBpZiB3ZSBoYXZlIGFuIGV2ZW5cbi8vIG51bWJlciBvZiBieXRlcyBhdmFpbGFibGUsIHdlIG5lZWQgdG8gY2hlY2sgaWYgd2UgZW5kIG9uIGEgbGVhZGluZy9oaWdoXG4vLyBzdXJyb2dhdGUuIEluIHRoYXQgY2FzZSwgd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgbmV4dCB0d28gYnl0ZXMgaW4gb3JkZXIgdG9cbi8vIGRlY29kZSB0aGUgbGFzdCBjaGFyYWN0ZXIgcHJvcGVybHkuXG5mdW5jdGlvbiB1dGYxNlRleHQoYnVmLCBpKSB7XG4gIGlmICgoYnVmLmxlbmd0aCAtIGkpICUgMiA9PT0gMCkge1xuICAgIHZhciByID0gYnVmLnRvU3RyaW5nKCd1dGYxNmxlJywgaSk7XG4gICAgaWYgKHIpIHtcbiAgICAgIHZhciBjID0gci5jaGFyQ29kZUF0KHIubGVuZ3RoIC0gMSk7XG4gICAgICBpZiAoYyA+PSAweEQ4MDAgJiYgYyA8PSAweERCRkYpIHtcbiAgICAgICAgdGhpcy5sYXN0TmVlZCA9IDI7XG4gICAgICAgIHRoaXMubGFzdFRvdGFsID0gNDtcbiAgICAgICAgdGhpcy5sYXN0Q2hhclswXSA9IGJ1ZltidWYubGVuZ3RoIC0gMl07XG4gICAgICAgIHRoaXMubGFzdENoYXJbMV0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICAgICAgICByZXR1cm4gci5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG4gIHRoaXMubGFzdE5lZWQgPSAxO1xuICB0aGlzLmxhc3RUb3RhbCA9IDI7XG4gIHRoaXMubGFzdENoYXJbMF0gPSBidWZbYnVmLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gYnVmLnRvU3RyaW5nKCd1dGYxNmxlJywgaSwgYnVmLmxlbmd0aCAtIDEpO1xufVxuXG4vLyBGb3IgVVRGLTE2TEUgd2UgZG8gbm90IGV4cGxpY2l0bHkgYXBwZW5kIHNwZWNpYWwgcmVwbGFjZW1lbnQgY2hhcmFjdGVycyBpZiB3ZVxuLy8gZW5kIG9uIGEgcGFydGlhbCBjaGFyYWN0ZXIsIHdlIHNpbXBseSBsZXQgdjggaGFuZGxlIHRoYXQuXG5mdW5jdGlvbiB1dGYxNkVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkge1xuICAgIHZhciBlbmQgPSB0aGlzLmxhc3RUb3RhbCAtIHRoaXMubGFzdE5lZWQ7XG4gICAgcmV0dXJuIHIgKyB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKCd1dGYxNmxlJywgMCwgZW5kKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gYmFzZTY0VGV4dChidWYsIGkpIHtcbiAgdmFyIG4gPSAoYnVmLmxlbmd0aCAtIGkpICUgMztcbiAgaWYgKG4gPT09IDApIHJldHVybiBidWYudG9TdHJpbmcoJ2Jhc2U2NCcsIGkpO1xuICB0aGlzLmxhc3ROZWVkID0gMyAtIG47XG4gIHRoaXMubGFzdFRvdGFsID0gMztcbiAgaWYgKG4gPT09IDEpIHtcbiAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmxhc3RDaGFyWzBdID0gYnVmW2J1Zi5sZW5ndGggLSAyXTtcbiAgICB0aGlzLmxhc3RDaGFyWzFdID0gYnVmW2J1Zi5sZW5ndGggLSAxXTtcbiAgfVxuICByZXR1cm4gYnVmLnRvU3RyaW5nKCdiYXNlNjQnLCBpLCBidWYubGVuZ3RoIC0gbik7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NEVuZChidWYpIHtcbiAgdmFyIHIgPSBidWYgJiYgYnVmLmxlbmd0aCA/IHRoaXMud3JpdGUoYnVmKSA6ICcnO1xuICBpZiAodGhpcy5sYXN0TmVlZCkgcmV0dXJuIHIgKyB0aGlzLmxhc3RDaGFyLnRvU3RyaW5nKCdiYXNlNjQnLCAwLCAzIC0gdGhpcy5sYXN0TmVlZCk7XG4gIHJldHVybiByO1xufVxuXG4vLyBQYXNzIGJ5dGVzIG9uIHRocm91Z2ggZm9yIHNpbmdsZS1ieXRlIGVuY29kaW5ncyAoZS5nLiBhc2NpaSwgbGF0aW4xLCBoZXgpXG5mdW5jdGlvbiBzaW1wbGVXcml0ZShidWYpIHtcbiAgcmV0dXJuIGJ1Zi50b1N0cmluZyh0aGlzLmVuY29kaW5nKTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlRW5kKGJ1Zikge1xuICByZXR1cm4gYnVmICYmIGJ1Zi5sZW5ndGggPyB0aGlzLndyaXRlKGJ1ZikgOiAnJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcbiAgICByZXR1cm4gdG87XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuSW1hZ2UgPSB2b2lkIDA7XG52YXIgSW1hZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW1hZ2UocG9zaXRpb24sIHByb3BzKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VJZCA9IFwiaVwiICsgKFwiXCIgKyAoRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCkpKS5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcbiAgICAgICAgdGhpcy5odG1sID0gXCJcIjtcbiAgICAgICAgdGhpcy5jc3MgPSBcIlwiO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IFwiXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBfX3NwcmVhZEFycmF5KFtdLCBwb3NpdGlvbik7XG4gICAgICAgIHRoaXMucHJvcHMgPSBfX2Fzc2lnbih7fSwgcHJvcHMpO1xuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG4gICAgSW1hZ2UucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfTtcbiAgICBJbWFnZS5wcm90b3R5cGUuc3R5bGUgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgICAgIHRoaXMuY3NzID0gY3NzO1xuICAgIH07XG4gICAgSW1hZ2UucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAvLyB0aGlzLnNjYWxlKCk7XG4gICAgICAgIHZhciB3cmFwcGVkSHRtbCA9IFwiXFxuICAgICAgICA8ZGl2IFxcbiAgICAgICAgICAgIGlkPVxcXCJcIiArIHRoaXMuaW1hZ2VJZCArIFwiXFxcIlxcbiAgICAgICAgICAgIHN0eWxlPVxcXCJwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICAgICAgICAgICAgICB0b3A6IFwiICsgdGhpcy5wb3NpdGlvblswXSArIFwiJTsgXFxuICAgICAgICAgICAgICAgIGxlZnQ6IFwiICsgdGhpcy5wb3NpdGlvblsxXSArIFwiJTsgXFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIiArIHRoaXMucG9zaXRpb25bMl0gKyBcIiU7IFxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiICsgdGhpcy5wb3NpdGlvblszXSArIFwiJTtcXG4gICAgICAgICAgICAgICAgXCIgKyAodGhpcy5kZWJ1ZyA9PT0gXCJcIlxuICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICA6IFwiYmFja2dyb3VuZC1jb2xvcjogXCIgKyB0aGlzLmRlYnVnICsgXCI7XCIpICsgXCJcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgICAgXCIgKyBodG1sICsgXCJcXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHN0eWxlPlxcbiAgICAgICAgICAgIGRpdiNcIiArIHRoaXMuaW1hZ2VJZCArIFwiID4gXCIgKyB0aGlzLmNzcyArIFwiXFxuICAgICAgICA8L3N0eWxlPlxcbiAgICAgICAgXCI7XG4gICAgICAgIHZhciBwYXJzZWRIdG1sID0gd3JhcHBlZEh0bWxcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHNcXHMrL2csIFwiIFwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyA8L2csIFwiPFwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLzwgL2csIFwiPFwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLz4gL2csIFwiPlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyA+L2csIFwiPlwiKTtcbiAgICAgICAgdGhpcy5odG1sID0gcGFyc2VkSHRtbDtcbiAgICAgICAgcmV0dXJuIHBhcnNlZEh0bWw7XG4gICAgfTtcbiAgICBJbWFnZS5wcm90b3R5cGUucGFzcyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgY2FsbGJhY2tJZCA9IFwiclwiICsgKFwiXCIgKyAoRGF0ZS5ub3coKSArIE1hdGgucmFuZG9tKCkpKS5yZXBsYWNlKFwiLlwiLCBcIlwiKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrUHJvcHMgPSB7XG4gICAgICAgICAgICBpbWFnZUlkOiB0aGlzLmltYWdlSWQsXG4gICAgICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2tJZDogY2FsbGJhY2tJZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbWFnZUlkIGluIHRoaXMucGFnZS5jYWxsYmFja3NcbiAgICAgICAgICAgID8gdGhpcy5wYWdlLmNhbGxiYWNrc1t0aGlzLmltYWdlSWRdLnB1c2goY2FsbGJhY2tQcm9wcylcbiAgICAgICAgICAgIDogKHRoaXMucGFnZS5jYWxsYmFja3NbdGhpcy5pbWFnZUlkXSA9IFtjYWxsYmFja1Byb3BzXSk7XG4gICAgICAgIHJldHVybiBjYWxsYmFja0lkICsgXCIgZGF0YS1cIiArIGNhbGxiYWNrSWQgKyBcIj1cXFwiXCIgKyBjYWxsYmFja0lkICsgXCJcXFwiXCI7XG4gICAgfTtcbiAgICBJbWFnZS5wcm90b3R5cGUuaW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgICAgIHZhciBlcnJvckxpbmVzID0gZXJyb3Iuc3BsaXQoXCJcXG5cIilbMl07XG4gICAgICAgIHZhciBsaW5lTnVtYmVyID0gZXJyb3JMaW5lcy5zcGxpdChcIjpcIikuc2xpY2UoLTIpWzBdO1xuICAgICAgICB2YXIgY29sTnVtYmVyID0gZXJyb3JMaW5lcy5zcGxpdChcIjpcIikuc2xpY2UoLTEpWzBdLnJlcGxhY2UoXCIpXCIsIFwiXCIpO1xuICAgICAgICB2YXIga2V5ID0gXCJcIiArIChsaW5lTnVtYmVyICsgY29sTnVtYmVyKTtcbiAgICAgICAgaWYgKGtleSBpbiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2tleV0ubW91bnQoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV0uaHRtbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGltYWdlLnBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2tleV0gPSBpbWFnZTtcbiAgICAgICAgICAgIGltYWdlLm1vdW50KCk7XG4gICAgICAgICAgICByZXR1cm4gaW1hZ2UuaHRtbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gc2NhbGUoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMucGFnZS5kb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG4gICAgLy8gfVxuICAgIEltYWdlLnByb3RvdHlwZS5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICB9O1xuICAgIEltYWdlLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XG4gICAgfTtcbiAgICBJbWFnZS5wcm90b3R5cGUuZGVidWdPbiA9IGZ1bmN0aW9uIChkZWJ1Z0NvbG91cikge1xuICAgICAgICBpZiAoZGVidWdDb2xvdXIgPT09IHZvaWQgMCkgeyBkZWJ1Z0NvbG91ciA9IFwiI2ZmMDAwMFwiOyB9XG4gICAgICAgIHRoaXMuZGVidWcgPSBkZWJ1Z0NvbG91cjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBJbWFnZS5wcm90b3R5cGUuZGVidWdPZmYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVidWcgPSBcIlwiO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBJbWFnZTtcbn0oKSk7XG5leHBvcnRzLkltYWdlID0gSW1hZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQ291bnRlciA9IGV4cG9ydHMuQ29udGFpbmVyID0gdm9pZCAwO1xudmFyIGltYWdlXzEgPSByZXF1aXJlKFwiLi4vaW1hZ2UvaW1hZ2VcIik7XG52YXIgQ29udGFpbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb250YWluZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyKHBvc2l0aW9uLCBwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcG9zaXRpb24sIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb250YWluZXIucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY291bnRlcjEgPSB0aGlzLmltYWdlKG5ldyBDb3VudGVyKFs1MCwgMCwgNzUsIDUwXSwgeyB0aXRsZTogXCJDb3VudGVyIDJcIiB9KS5kZWJ1Z09uKFwiIzAwZmYwMFwiKSk7XG4gICAgICAgIHRoaXMuc3R5bGUoXCIudGVzdCB7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgfVwiKTtcbiAgICAgICAgdGhpcy5jb21waWxlKFwiXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGVzdD5cXG4gICAgICAgICAgICAgICAgXCIgKyB0aGlzLmltYWdlKG5ldyBDb3VudGVyKFswLCAwLCA1MCwgNTBdLCB7XG4gICAgICAgICAgICB0aXRsZTogXCJDb3VudGVyIDFcIixcbiAgICAgICAgfSkuZGVidWdPbigpKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiICsgY291bnRlcjEgKyBcIlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRhaW5lcjtcbn0oaW1hZ2VfMS5JbWFnZSkpO1xuZXhwb3J0cy5Db250YWluZXIgPSBDb250YWluZXI7XG52YXIgQ291bnRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ291bnRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb3VudGVyKHBvc2l0aW9uLCBwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwb3NpdGlvbiwgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzKSwgeyBjb3VudDogMCB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb3VudGVyLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFUZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoXCJjb3VudFwiLCBfdGhpcy5nZXRTdGF0ZShcImNvdW50XCIpICsgMSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29tcGlsZShcIlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIFwiICsgdGhpcy5nZXRTdGF0ZShcInRpdGxlXCIpICsgXCJcXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICBcIiArIHRoaXMuZ2V0U3RhdGUoXCJjb3VudFwiKSArIFwiXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPVwiICsgdGhpcy5wYXNzKGFUZXN0KSArIFwiPkEgbmljZSBuZXcgYnV0dG9uPC9idXR0b24+XFxuICAgICAgICAgICAgPHN0eWxlPlxcbiAgICAgICAgICAgICAgICAqIHtmb250LXNpemU6IDI1cHg7fVxcbiAgICAgICAgICAgIDwvc3R5bGU+XFxuICAgICAgICBcIik7XG4gICAgfTtcbiAgICByZXR1cm4gQ291bnRlcjtcbn0oaW1hZ2VfMS5JbWFnZSkpO1xuZXhwb3J0cy5Db3VudGVyID0gQ291bnRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuUGFnZSA9IHZvaWQgMDtcbi8vIEB0cy1pZ25vcmVcbnZhciBkaWZmID0gcmVxdWlyZShcInZpcnR1YWwtZG9tL2RpZmZcIik7XG52YXIgcGF0Y2ggPSByZXF1aXJlKFwidmlydHVhbC1kb20vcGF0Y2hcIik7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoXCJ2aXJ0dWFsLWRvbS9jcmVhdGUtZWxlbWVudFwiKTtcbnZhciBWTm9kZSA9IHJlcXVpcmUoXCJ2aXJ0dWFsLWRvbS92bm9kZS92bm9kZVwiKTtcbnZhciBWVGV4dCA9IHJlcXVpcmUoXCJ2aXJ0dWFsLWRvbS92bm9kZS92dGV4dFwiKTtcbnZhciBjb252ZXJ0SFRNTCA9IHJlcXVpcmUoXCJodG1sLXRvLXZkb21cIikoe1xuICAgIFZOb2RlOiBWTm9kZSxcbiAgICBWVGV4dDogVlRleHQsXG59KTtcbnZhciBQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBhZ2UobmFtZSkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBQYWdlLnByb3RvdHlwZS5hZGRSb290SW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgdGhpcy5yb290SW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgdGhpcy5yb290SW1hZ2UucGFnZSA9IHRoaXM7XG4gICAgICAgIHRoaXMucm9vdEltYWdlLm1vdW50KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFRyZWUgPSB0aGlzLmNvbnZlcnRIVE1MV2l0aEtleSh0aGlzLnJvb3RJbWFnZS5odG1sKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IGNyZWF0ZUVsZW1lbnQodGhpcy5jdXJyZW50VHJlZVswXSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jdXJyZW50Tm9kZSk7XG4gICAgICAgIHRoaXMuaW5qZWN0Q2FsbGJhY2tzKCk7XG4gICAgfTtcbiAgICBQYWdlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucm9vdEltYWdlLm1vdW50KCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcbiAgICBQYWdlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdUcmVlID0gdGhpcy5jb252ZXJ0SFRNTFdpdGhLZXkodGhpcy5yb290SW1hZ2UuaHRtbCk7XG4gICAgICAgIHZhciBwYXRjaGVzID0gZGlmZih0aGlzLmN1cnJlbnRUcmVlWzBdLCBuZXdUcmVlWzBdKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Tm9kZSA9IHBhdGNoKHRoaXMuY3VycmVudE5vZGUsIHBhdGNoZXMpO1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmVlID0gbmV3VHJlZTtcbiAgICAgICAgdGhpcy5pbmplY3RDYWxsYmFja3MoKTtcbiAgICB9O1xuICAgIFBhZ2UucHJvdG90eXBlLmNvbnZlcnRIVE1MV2l0aEtleSA9IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0SFRNTCh7XG4gICAgICAgICAgICBnZXRWTm9kZUtleTogZnVuY3Rpb24gKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlcy5pZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIGh0bWwpO1xuICAgIH07XG4gICAgLy8gYWRkcyBjYWxsYmFja3MgKGUuZyBldmVudCBsaXN0ZW5lcnMpIHRvIHRoZSBET00gb25jZSBpdCBoYXMgYmVlbiByZWNvbmNpbGVkIGFuZCByZW5kZXJlZC5cbiAgICAvLyBnb2VzIHRocm91Z2ggdGhlIGNhbGxiYWNrcyBvYmplY3QsIGZpbmRzIHRoZSBlbGVtZW50IGJ5IHRoZSBjYWxsYmFja0lkLCBjaGVja3MgaWYgdGhlXG4gICAgLy8gdmFsdWUgb2YgdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGVzIG1hdGNoZXMgdGhlIGNhbGxiYWNrIGlkXG4gICAgUGFnZS5wcm90b3R5cGUuaW5qZWN0Q2FsbGJhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuY2FsbGJhY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFja1Byb3BzKSB7XG4gICAgICAgICAgICBjYWxsYmFja1Byb3BzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtXCIgKyBjYWxsYmFjay5jYWxsYmFja0lkICsgXCJdXCIpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSA9IDA7IGF0dHJpYnV0ZSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGF0dHJpYnV0ZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IGVsZW1lbnQuYXR0cmlidXRlc1thdHRyaWJ1dGVdLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlID0gZWxlbWVudC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlID09IGNhbGxiYWNrLmNhbGxiYWNrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50W2F0dHJpYnV0ZU5hbWVdID0gY2FsbGJhY2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV0FSTjogVW5tb3VudGVkIGNvbXBvbmVudCBleGlzdHM6IFwiICsgY2FsbGJhY2suaW1hZ2VOYW1lICsgXCIgLSBcIiArIGNhbGxiYWNrLmltYWdlSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgICB9O1xuICAgIHJldHVybiBQYWdlO1xufSgpKTtcbmV4cG9ydHMuUGFnZSA9IFBhZ2U7XG4iLCJ2YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoXCIuL3Zkb20vY3JlYXRlLWVsZW1lbnQuanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVFbGVtZW50XG4iLCJ2YXIgZGlmZiA9IHJlcXVpcmUoXCIuL3Z0cmVlL2RpZmYuanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG4iLCJ2YXIgcGF0Y2ggPSByZXF1aXJlKFwiLi92ZG9tL3BhdGNoLmpzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoXCJpcy1vYmplY3RcIilcbnZhciBpc0hvb2sgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdmhvb2suanNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseVByb3BlcnRpZXNcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKG5vZGUsIHByb3BzLCBwcmV2aW91cykge1xuICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUsIHByZXZpb3VzKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0hvb2socHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgcmVtb3ZlUHJvcGVydHkobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSwgcHJldmlvdXMpXG4gICAgICAgICAgICBpZiAocHJvcFZhbHVlLmhvb2spIHtcbiAgICAgICAgICAgICAgICBwcm9wVmFsdWUuaG9vayhub2RlLFxuICAgICAgICAgICAgICAgICAgICBwcm9wTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMgPyBwcmV2aW91c1twcm9wTmFtZV0gOiB1bmRlZmluZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoT2JqZWN0KG5vZGUsIHByb3BzLCBwcmV2aW91cywgcHJvcE5hbWUsIHByb3BWYWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVbcHJvcE5hbWVdID0gcHJvcFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KG5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUsIHByZXZpb3VzKSB7XG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKCFpc0hvb2socHJldmlvdXNWYWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhdHRyTmFtZSBpbiBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW2ldID0gXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByZXZpb3VzVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlW3Byb3BOYW1lXSA9IFwiXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZVtwcm9wTmFtZV0gPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNWYWx1ZS51bmhvb2spIHtcbiAgICAgICAgICAgIHByZXZpb3VzVmFsdWUudW5ob29rKG5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhdGNoT2JqZWN0KG5vZGUsIHByb3BzLCBwcmV2aW91cywgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXMgPyBwcmV2aW91c1twcm9wTmFtZV0gOiB1bmRlZmluZWRcblxuICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgaWYgKHByb3BOYW1lID09PSBcImF0dHJpYnV0ZXNcIikge1xuICAgICAgICBmb3IgKHZhciBhdHRyTmFtZSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBhdHRyVmFsdWUgPSBwcm9wVmFsdWVbYXR0ck5hbWVdXG5cbiAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0clZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYocHJldmlvdXNWYWx1ZSAmJiBpc09iamVjdChwcmV2aW91c1ZhbHVlKSAmJlxuICAgICAgICBnZXRQcm90b3R5cGUocHJldmlvdXNWYWx1ZSkgIT09IGdldFByb3RvdHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIG5vZGVbcHJvcE5hbWVdID0gcHJvcFZhbHVlXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNPYmplY3Qobm9kZVtwcm9wTmFtZV0pKSB7XG4gICAgICAgIG5vZGVbcHJvcE5hbWVdID0ge31cbiAgICB9XG5cbiAgICB2YXIgcmVwbGFjZXIgPSBwcm9wTmFtZSA9PT0gXCJzdHlsZVwiID8gXCJcIiA6IHVuZGVmaW5lZFxuXG4gICAgZm9yICh2YXIgayBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvcFZhbHVlW2tdXG4gICAgICAgIG5vZGVbcHJvcE5hbWVdW2tdID0gKHZhbHVlID09PSB1bmRlZmluZWQpID8gcmVwbGFjZXIgOiB2YWx1ZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvdG90eXBlKHZhbHVlKSB7XG4gICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKVxuICAgIH0gZWxzZSBpZiAodmFsdWUuX19wcm90b19fKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5fX3Byb3RvX19cbiAgICB9IGVsc2UgaWYgKHZhbHVlLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgICB9XG59XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG5cbnZhciBhcHBseVByb3BlcnRpZXMgPSByZXF1aXJlKFwiLi9hcHBseS1wcm9wZXJ0aWVzXCIpXG5cbnZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZub2RlLmpzXCIpXG52YXIgaXNWVGV4dCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12dGV4dC5qc1wiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldC5qc1wiKVxudmFyIGhhbmRsZVRodW5rID0gcmVxdWlyZShcIi4uL3Zub2RlL2hhbmRsZS10aHVuay5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUVsZW1lbnRcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh2bm9kZSwgb3B0cykge1xuICAgIHZhciBkb2MgPSBvcHRzID8gb3B0cy5kb2N1bWVudCB8fCBkb2N1bWVudCA6IGRvY3VtZW50XG4gICAgdmFyIHdhcm4gPSBvcHRzID8gb3B0cy53YXJuIDogbnVsbFxuXG4gICAgdm5vZGUgPSBoYW5kbGVUaHVuayh2bm9kZSkuYVxuXG4gICAgaWYgKGlzV2lkZ2V0KHZub2RlKSkge1xuICAgICAgICByZXR1cm4gdm5vZGUuaW5pdCgpXG4gICAgfSBlbHNlIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICByZXR1cm4gZG9jLmNyZWF0ZVRleHROb2RlKHZub2RlLnRleHQpXG4gICAgfSBlbHNlIGlmICghaXNWTm9kZSh2bm9kZSkpIHtcbiAgICAgICAgaWYgKHdhcm4pIHtcbiAgICAgICAgICAgIHdhcm4oXCJJdGVtIGlzIG5vdCBhIHZhbGlkIHZpcnR1YWwgZG9tIG5vZGVcIiwgdm5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9ICh2bm9kZS5uYW1lc3BhY2UgPT09IG51bGwpID9cbiAgICAgICAgZG9jLmNyZWF0ZUVsZW1lbnQodm5vZGUudGFnTmFtZSkgOlxuICAgICAgICBkb2MuY3JlYXRlRWxlbWVudE5TKHZub2RlLm5hbWVzcGFjZSwgdm5vZGUudGFnTmFtZSlcblxuICAgIHZhciBwcm9wcyA9IHZub2RlLnByb3BlcnRpZXNcbiAgICBhcHBseVByb3BlcnRpZXMobm9kZSwgcHJvcHMpXG5cbiAgICB2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGROb2RlID0gY3JlYXRlRWxlbWVudChjaGlsZHJlbltpXSwgb3B0cylcbiAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVxufVxuIiwiLy8gTWFwcyBhIHZpcnR1YWwgRE9NIHRyZWUgb250byBhIHJlYWwgRE9NIHRyZWUgaW4gYW4gZWZmaWNpZW50IG1hbm5lci5cbi8vIFdlIGRvbid0IHdhbnQgdG8gcmVhZCBhbGwgb2YgdGhlIERPTSBub2RlcyBpbiB0aGUgdHJlZSBzbyB3ZSB1c2Vcbi8vIHRoZSBpbi1vcmRlciB0cmVlIGluZGV4aW5nIHRvIGVsaW1pbmF0ZSByZWN1cnNpb24gZG93biBjZXJ0YWluIGJyYW5jaGVzLlxuLy8gV2Ugb25seSByZWN1cnNlIGludG8gYSBET00gbm9kZSBpZiB3ZSBrbm93IHRoYXQgaXQgY29udGFpbnMgYSBjaGlsZCBvZlxuLy8gaW50ZXJlc3QuXG5cbnZhciBub0NoaWxkID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBkb21JbmRleFxuXG5mdW5jdGlvbiBkb21JbmRleChyb290Tm9kZSwgdHJlZSwgaW5kaWNlcywgbm9kZXMpIHtcbiAgICBpZiAoIWluZGljZXMgfHwgaW5kaWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5kaWNlcy5zb3J0KGFzY2VuZGluZylcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2Uocm9vdE5vZGUsIHRyZWUsIGluZGljZXMsIG5vZGVzLCAwKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVjdXJzZShyb290Tm9kZSwgdHJlZSwgaW5kaWNlcywgbm9kZXMsIHJvb3RJbmRleCkge1xuICAgIG5vZGVzID0gbm9kZXMgfHwge31cblxuXG4gICAgaWYgKHJvb3ROb2RlKSB7XG4gICAgICAgIGlmIChpbmRleEluUmFuZ2UoaW5kaWNlcywgcm9vdEluZGV4LCByb290SW5kZXgpKSB7XG4gICAgICAgICAgICBub2Rlc1tyb290SW5kZXhdID0gcm9vdE5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2Q2hpbGRyZW4gPSB0cmVlLmNoaWxkcmVuXG5cbiAgICAgICAgaWYgKHZDaGlsZHJlbikge1xuXG4gICAgICAgICAgICB2YXIgY2hpbGROb2RlcyA9IHJvb3ROb2RlLmNoaWxkTm9kZXNcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcm9vdEluZGV4ICs9IDFcblxuICAgICAgICAgICAgICAgIHZhciB2Q2hpbGQgPSB2Q2hpbGRyZW5baV0gfHwgbm9DaGlsZFxuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5kZXggPSByb290SW5kZXggKyAodkNoaWxkLmNvdW50IHx8IDApXG5cbiAgICAgICAgICAgICAgICAvLyBza2lwIHJlY3Vyc2lvbiBkb3duIHRoZSB0cmVlIGlmIHRoZXJlIGFyZSBubyBub2RlcyBkb3duIGhlcmVcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhJblJhbmdlKGluZGljZXMsIHJvb3RJbmRleCwgbmV4dEluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICByZWN1cnNlKGNoaWxkTm9kZXNbaV0sIHZDaGlsZCwgaW5kaWNlcywgbm9kZXMsIHJvb3RJbmRleClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByb290SW5kZXggPSBuZXh0SW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2Rlc1xufVxuXG4vLyBCaW5hcnkgc2VhcmNoIGZvciBhbiBpbmRleCBpbiB0aGUgaW50ZXJ2YWwgW2xlZnQsIHJpZ2h0XVxuZnVuY3Rpb24gaW5kZXhJblJhbmdlKGluZGljZXMsIGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKGluZGljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHZhciBtaW5JbmRleCA9IDBcbiAgICB2YXIgbWF4SW5kZXggPSBpbmRpY2VzLmxlbmd0aCAtIDFcbiAgICB2YXIgY3VycmVudEluZGV4XG4gICAgdmFyIGN1cnJlbnRJdGVtXG5cbiAgICB3aGlsZSAobWluSW5kZXggPD0gbWF4SW5kZXgpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKChtYXhJbmRleCArIG1pbkluZGV4KSAvIDIpID4+IDBcbiAgICAgICAgY3VycmVudEl0ZW0gPSBpbmRpY2VzW2N1cnJlbnRJbmRleF1cblxuICAgICAgICBpZiAobWluSW5kZXggPT09IG1heEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW0gPj0gbGVmdCAmJiBjdXJyZW50SXRlbSA8PSByaWdodFxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJdGVtIDwgbGVmdCkge1xuICAgICAgICAgICAgbWluSW5kZXggPSBjdXJyZW50SW5kZXggKyAxXG4gICAgICAgIH0gZWxzZSAgaWYgKGN1cnJlbnRJdGVtID4gcmlnaHQpIHtcbiAgICAgICAgICAgIG1heEluZGV4ID0gY3VycmVudEluZGV4IC0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYXNjZW5kaW5nKGEsIGIpIHtcbiAgICByZXR1cm4gYSA+IGIgPyAxIDogLTFcbn1cbiIsInZhciBhcHBseVByb3BlcnRpZXMgPSByZXF1aXJlKFwiLi9hcHBseS1wcm9wZXJ0aWVzXCIpXG5cbnZhciBpc1dpZGdldCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy13aWRnZXQuanNcIilcbnZhciBWUGF0Y2ggPSByZXF1aXJlKFwiLi4vdm5vZGUvdnBhdGNoLmpzXCIpXG5cbnZhciB1cGRhdGVXaWRnZXQgPSByZXF1aXJlKFwiLi91cGRhdGUtd2lkZ2V0XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHlQYXRjaFxuXG5mdW5jdGlvbiBhcHBseVBhdGNoKHZwYXRjaCwgZG9tTm9kZSwgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciB0eXBlID0gdnBhdGNoLnR5cGVcbiAgICB2YXIgdk5vZGUgPSB2cGF0Y2gudk5vZGVcbiAgICB2YXIgcGF0Y2ggPSB2cGF0Y2gucGF0Y2hcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFZQYXRjaC5SRU1PVkU6XG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlTm9kZShkb21Ob2RlLCB2Tm9kZSlcbiAgICAgICAgY2FzZSBWUGF0Y2guSU5TRVJUOlxuICAgICAgICAgICAgcmV0dXJuIGluc2VydE5vZGUoZG9tTm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpXG4gICAgICAgIGNhc2UgVlBhdGNoLlZURVhUOlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ1BhdGNoKGRvbU5vZGUsIHZOb2RlLCBwYXRjaCwgcmVuZGVyT3B0aW9ucylcbiAgICAgICAgY2FzZSBWUGF0Y2guV0lER0VUOlxuICAgICAgICAgICAgcmV0dXJuIHdpZGdldFBhdGNoKGRvbU5vZGUsIHZOb2RlLCBwYXRjaCwgcmVuZGVyT3B0aW9ucylcbiAgICAgICAgY2FzZSBWUGF0Y2guVk5PREU6XG4gICAgICAgICAgICByZXR1cm4gdk5vZGVQYXRjaChkb21Ob2RlLCB2Tm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpXG4gICAgICAgIGNhc2UgVlBhdGNoLk9SREVSOlxuICAgICAgICAgICAgcmVvcmRlckNoaWxkcmVuKGRvbU5vZGUsIHBhdGNoKVxuICAgICAgICAgICAgcmV0dXJuIGRvbU5vZGVcbiAgICAgICAgY2FzZSBWUGF0Y2guUFJPUFM6XG4gICAgICAgICAgICBhcHBseVByb3BlcnRpZXMoZG9tTm9kZSwgcGF0Y2gsIHZOb2RlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICByZXR1cm4gZG9tTm9kZVxuICAgICAgICBjYXNlIFZQYXRjaC5USFVOSzpcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlUm9vdChkb21Ob2RlLFxuICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbnMucGF0Y2goZG9tTm9kZSwgcGF0Y2gsIHJlbmRlck9wdGlvbnMpKVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGRvbU5vZGVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUoZG9tTm9kZSwgdk5vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGRvbU5vZGUucGFyZW50Tm9kZVxuXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21Ob2RlKVxuICAgIH1cblxuICAgIGRlc3Ryb3lXaWRnZXQoZG9tTm9kZSwgdk5vZGUpO1xuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShwYXJlbnROb2RlLCB2Tm9kZSwgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciBuZXdOb2RlID0gcmVuZGVyT3B0aW9ucy5yZW5kZXIodk5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld05vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudE5vZGVcbn1cblxuZnVuY3Rpb24gc3RyaW5nUGF0Y2goZG9tTm9kZSwgbGVmdFZOb2RlLCB2VGV4dCwgcmVuZGVyT3B0aW9ucykge1xuICAgIHZhciBuZXdOb2RlXG5cbiAgICBpZiAoZG9tTm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICBkb21Ob2RlLnJlcGxhY2VEYXRhKDAsIGRvbU5vZGUubGVuZ3RoLCB2VGV4dC50ZXh0KVxuICAgICAgICBuZXdOb2RlID0gZG9tTm9kZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwYXJlbnROb2RlID0gZG9tTm9kZS5wYXJlbnROb2RlXG4gICAgICAgIG5ld05vZGUgPSByZW5kZXJPcHRpb25zLnJlbmRlcih2VGV4dCwgcmVuZGVyT3B0aW9ucylcblxuICAgICAgICBpZiAocGFyZW50Tm9kZSAmJiBuZXdOb2RlICE9PSBkb21Ob2RlKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBkb21Ob2RlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld05vZGVcbn1cblxuZnVuY3Rpb24gd2lkZ2V0UGF0Y2goZG9tTm9kZSwgbGVmdFZOb2RlLCB3aWRnZXQsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgdXBkYXRpbmcgPSB1cGRhdGVXaWRnZXQobGVmdFZOb2RlLCB3aWRnZXQpXG4gICAgdmFyIG5ld05vZGVcblxuICAgIGlmICh1cGRhdGluZykge1xuICAgICAgICBuZXdOb2RlID0gd2lkZ2V0LnVwZGF0ZShsZWZ0Vk5vZGUsIGRvbU5vZGUpIHx8IGRvbU5vZGVcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdOb2RlID0gcmVuZGVyT3B0aW9ucy5yZW5kZXIod2lkZ2V0LCByZW5kZXJPcHRpb25zKVxuICAgIH1cblxuICAgIHZhciBwYXJlbnROb2RlID0gZG9tTm9kZS5wYXJlbnROb2RlXG5cbiAgICBpZiAocGFyZW50Tm9kZSAmJiBuZXdOb2RlICE9PSBkb21Ob2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIGRvbU5vZGUpXG4gICAgfVxuXG4gICAgaWYgKCF1cGRhdGluZykge1xuICAgICAgICBkZXN0cm95V2lkZ2V0KGRvbU5vZGUsIGxlZnRWTm9kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Tm9kZVxufVxuXG5mdW5jdGlvbiB2Tm9kZVBhdGNoKGRvbU5vZGUsIGxlZnRWTm9kZSwgdk5vZGUsIHJlbmRlck9wdGlvbnMpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGRvbU5vZGUucGFyZW50Tm9kZVxuICAgIHZhciBuZXdOb2RlID0gcmVuZGVyT3B0aW9ucy5yZW5kZXIodk5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICBpZiAocGFyZW50Tm9kZSAmJiBuZXdOb2RlICE9PSBkb21Ob2RlKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIGRvbU5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld05vZGVcbn1cblxuZnVuY3Rpb24gZGVzdHJveVdpZGdldChkb21Ob2RlLCB3KSB7XG4gICAgaWYgKHR5cGVvZiB3LmRlc3Ryb3kgPT09IFwiZnVuY3Rpb25cIiAmJiBpc1dpZGdldCh3KSkge1xuICAgICAgICB3LmRlc3Ryb3koZG9tTm9kZSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXJDaGlsZHJlbihkb21Ob2RlLCBtb3Zlcykge1xuICAgIHZhciBjaGlsZE5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzXG4gICAgdmFyIGtleU1hcCA9IHt9XG4gICAgdmFyIG5vZGVcbiAgICB2YXIgcmVtb3ZlXG4gICAgdmFyIGluc2VydFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb3Zlcy5yZW1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlbW92ZSA9IG1vdmVzLnJlbW92ZXNbaV1cbiAgICAgICAgbm9kZSA9IGNoaWxkTm9kZXNbcmVtb3ZlLmZyb21dXG4gICAgICAgIGlmIChyZW1vdmUua2V5KSB7XG4gICAgICAgICAgICBrZXlNYXBbcmVtb3ZlLmtleV0gPSBub2RlXG4gICAgICAgIH1cbiAgICAgICAgZG9tTm9kZS5yZW1vdmVDaGlsZChub2RlKVxuICAgIH1cblxuICAgIHZhciBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aFxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbW92ZXMuaW5zZXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBpbnNlcnQgPSBtb3Zlcy5pbnNlcnRzW2pdXG4gICAgICAgIG5vZGUgPSBrZXlNYXBbaW5zZXJ0LmtleV1cbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgd2VpcmRlc3QgYnVnIGkndmUgZXZlciBzZWVuIGluIHdlYmtpdFxuICAgICAgICBkb21Ob2RlLmluc2VydEJlZm9yZShub2RlLCBpbnNlcnQudG8gPj0gbGVuZ3RoKysgPyBudWxsIDogY2hpbGROb2Rlc1tpbnNlcnQudG9dKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVJvb3Qob2xkUm9vdCwgbmV3Um9vdCkge1xuICAgIGlmIChvbGRSb290ICYmIG5ld1Jvb3QgJiYgb2xkUm9vdCAhPT0gbmV3Um9vdCAmJiBvbGRSb290LnBhcmVudE5vZGUpIHtcbiAgICAgICAgb2xkUm9vdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdSb290LCBvbGRSb290KVxuICAgIH1cblxuICAgIHJldHVybiBuZXdSb290O1xufVxuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKFwieC1pcy1hcnJheVwiKVxuXG52YXIgcmVuZGVyID0gcmVxdWlyZShcIi4vY3JlYXRlLWVsZW1lbnRcIilcbnZhciBkb21JbmRleCA9IHJlcXVpcmUoXCIuL2RvbS1pbmRleFwiKVxudmFyIHBhdGNoT3AgPSByZXF1aXJlKFwiLi9wYXRjaC1vcFwiKVxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaFxuXG5mdW5jdGlvbiBwYXRjaChyb290Tm9kZSwgcGF0Y2hlcywgcmVuZGVyT3B0aW9ucykge1xuICAgIHJlbmRlck9wdGlvbnMgPSByZW5kZXJPcHRpb25zIHx8IHt9XG4gICAgcmVuZGVyT3B0aW9ucy5wYXRjaCA9IHJlbmRlck9wdGlvbnMucGF0Y2ggJiYgcmVuZGVyT3B0aW9ucy5wYXRjaCAhPT0gcGF0Y2hcbiAgICAgICAgPyByZW5kZXJPcHRpb25zLnBhdGNoXG4gICAgICAgIDogcGF0Y2hSZWN1cnNpdmVcbiAgICByZW5kZXJPcHRpb25zLnJlbmRlciA9IHJlbmRlck9wdGlvbnMucmVuZGVyIHx8IHJlbmRlclxuXG4gICAgcmV0dXJuIHJlbmRlck9wdGlvbnMucGF0Y2gocm9vdE5vZGUsIHBhdGNoZXMsIHJlbmRlck9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIHBhdGNoUmVjdXJzaXZlKHJvb3ROb2RlLCBwYXRjaGVzLCByZW5kZXJPcHRpb25zKSB7XG4gICAgdmFyIGluZGljZXMgPSBwYXRjaEluZGljZXMocGF0Y2hlcylcblxuICAgIGlmIChpbmRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGVcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBkb21JbmRleChyb290Tm9kZSwgcGF0Y2hlcy5hLCBpbmRpY2VzKVxuICAgIHZhciBvd25lckRvY3VtZW50ID0gcm9vdE5vZGUub3duZXJEb2N1bWVudFxuXG4gICAgaWYgKCFyZW5kZXJPcHRpb25zLmRvY3VtZW50ICYmIG93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIHJlbmRlck9wdGlvbnMuZG9jdW1lbnQgPSBvd25lckRvY3VtZW50XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlSW5kZXggPSBpbmRpY2VzW2ldXG4gICAgICAgIHJvb3ROb2RlID0gYXBwbHlQYXRjaChyb290Tm9kZSxcbiAgICAgICAgICAgIGluZGV4W25vZGVJbmRleF0sXG4gICAgICAgICAgICBwYXRjaGVzW25vZGVJbmRleF0sXG4gICAgICAgICAgICByZW5kZXJPcHRpb25zKVxuICAgIH1cblxuICAgIHJldHVybiByb290Tm9kZVxufVxuXG5mdW5jdGlvbiBhcHBseVBhdGNoKHJvb3ROb2RlLCBkb21Ob2RlLCBwYXRjaExpc3QsIHJlbmRlck9wdGlvbnMpIHtcbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlXG4gICAgfVxuXG4gICAgdmFyIG5ld05vZGVcblxuICAgIGlmIChpc0FycmF5KHBhdGNoTGlzdCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRjaExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld05vZGUgPSBwYXRjaE9wKHBhdGNoTGlzdFtpXSwgZG9tTm9kZSwgcmVuZGVyT3B0aW9ucylcblxuICAgICAgICAgICAgaWYgKGRvbU5vZGUgPT09IHJvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgcm9vdE5vZGUgPSBuZXdOb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdOb2RlID0gcGF0Y2hPcChwYXRjaExpc3QsIGRvbU5vZGUsIHJlbmRlck9wdGlvbnMpXG5cbiAgICAgICAgaWYgKGRvbU5vZGUgPT09IHJvb3ROb2RlKSB7XG4gICAgICAgICAgICByb290Tm9kZSA9IG5ld05vZGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByb290Tm9kZVxufVxuXG5mdW5jdGlvbiBwYXRjaEluZGljZXMocGF0Y2hlcykge1xuICAgIHZhciBpbmRpY2VzID0gW11cblxuICAgIGZvciAodmFyIGtleSBpbiBwYXRjaGVzKSB7XG4gICAgICAgIGlmIChrZXkgIT09IFwiYVwiKSB7XG4gICAgICAgICAgICBpbmRpY2VzLnB1c2goTnVtYmVyKGtleSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuIiwidmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldC5qc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZVdpZGdldFxuXG5mdW5jdGlvbiB1cGRhdGVXaWRnZXQoYSwgYikge1xuICAgIGlmIChpc1dpZGdldChhKSAmJiBpc1dpZGdldChiKSkge1xuICAgICAgICBpZiAoXCJuYW1lXCIgaW4gYSAmJiBcIm5hbWVcIiBpbiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA9PT0gYi5pZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGEuaW5pdCA9PT0gYi5pbml0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cbiIsInZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4vaXMtdm5vZGVcIilcbnZhciBpc1ZUZXh0ID0gcmVxdWlyZShcIi4vaXMtdnRleHRcIilcbnZhciBpc1dpZGdldCA9IHJlcXVpcmUoXCIuL2lzLXdpZGdldFwiKVxudmFyIGlzVGh1bmsgPSByZXF1aXJlKFwiLi9pcy10aHVua1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhbmRsZVRodW5rXG5cbmZ1bmN0aW9uIGhhbmRsZVRodW5rKGEsIGIpIHtcbiAgICB2YXIgcmVuZGVyZWRBID0gYVxuICAgIHZhciByZW5kZXJlZEIgPSBiXG5cbiAgICBpZiAoaXNUaHVuayhiKSkge1xuICAgICAgICByZW5kZXJlZEIgPSByZW5kZXJUaHVuayhiLCBhKVxuICAgIH1cblxuICAgIGlmIChpc1RodW5rKGEpKSB7XG4gICAgICAgIHJlbmRlcmVkQSA9IHJlbmRlclRodW5rKGEsIG51bGwpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYTogcmVuZGVyZWRBLFxuICAgICAgICBiOiByZW5kZXJlZEJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRodW5rKHRodW5rLCBwcmV2aW91cykge1xuICAgIHZhciByZW5kZXJlZFRodW5rID0gdGh1bmsudm5vZGVcblxuICAgIGlmICghcmVuZGVyZWRUaHVuaykge1xuICAgICAgICByZW5kZXJlZFRodW5rID0gdGh1bmsudm5vZGUgPSB0aHVuay5yZW5kZXIocHJldmlvdXMpXG4gICAgfVxuXG4gICAgaWYgKCEoaXNWTm9kZShyZW5kZXJlZFRodW5rKSB8fFxuICAgICAgICAgICAgaXNWVGV4dChyZW5kZXJlZFRodW5rKSB8fFxuICAgICAgICAgICAgaXNXaWRnZXQocmVuZGVyZWRUaHVuaykpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInRodW5rIGRpZCBub3QgcmV0dXJuIGEgdmFsaWQgbm9kZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyZWRUaHVua1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc1RodW5rXHJcblxyXG5mdW5jdGlvbiBpc1RodW5rKHQpIHtcclxuICAgIHJldHVybiB0ICYmIHQudHlwZSA9PT0gXCJUaHVua1wiXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc0hvb2tcblxuZnVuY3Rpb24gaXNIb29rKGhvb2spIHtcbiAgICByZXR1cm4gaG9vayAmJlxuICAgICAgKHR5cGVvZiBob29rLmhvb2sgPT09IFwiZnVuY3Rpb25cIiAmJiAhaG9vay5oYXNPd25Qcm9wZXJ0eShcImhvb2tcIikgfHxcbiAgICAgICB0eXBlb2YgaG9vay51bmhvb2sgPT09IFwiZnVuY3Rpb25cIiAmJiAhaG9vay5oYXNPd25Qcm9wZXJ0eShcInVuaG9va1wiKSlcbn1cbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVmlydHVhbE5vZGVcblxuZnVuY3Rpb24gaXNWaXJ0dWFsTm9kZSh4KSB7XG4gICAgcmV0dXJuIHggJiYgeC50eXBlID09PSBcIlZpcnR1YWxOb2RlXCIgJiYgeC52ZXJzaW9uID09PSB2ZXJzaW9uXG59XG4iLCJ2YXIgdmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIilcblxubW9kdWxlLmV4cG9ydHMgPSBpc1ZpcnR1YWxUZXh0XG5cbmZ1bmN0aW9uIGlzVmlydHVhbFRleHQoeCkge1xuICAgIHJldHVybiB4ICYmIHgudHlwZSA9PT0gXCJWaXJ0dWFsVGV4dFwiICYmIHgudmVyc2lvbiA9PT0gdmVyc2lvblxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc1dpZGdldFxuXG5mdW5jdGlvbiBpc1dpZGdldCh3KSB7XG4gICAgcmV0dXJuIHcgJiYgdy50eXBlID09PSBcIldpZGdldFwiXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiMlwiXG4iLCJ2YXIgdmVyc2lvbiA9IHJlcXVpcmUoXCIuL3ZlcnNpb25cIilcbnZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4vaXMtdm5vZGVcIilcbnZhciBpc1dpZGdldCA9IHJlcXVpcmUoXCIuL2lzLXdpZGdldFwiKVxudmFyIGlzVGh1bmsgPSByZXF1aXJlKFwiLi9pcy10aHVua1wiKVxudmFyIGlzVkhvb2sgPSByZXF1aXJlKFwiLi9pcy12aG9va1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxOb2RlXG5cbnZhciBub1Byb3BlcnRpZXMgPSB7fVxudmFyIG5vQ2hpbGRyZW4gPSBbXVxuXG5mdW5jdGlvbiBWaXJ0dWFsTm9kZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbiwga2V5LCBuYW1lc3BhY2UpIHtcbiAgICB0aGlzLnRhZ05hbWUgPSB0YWdOYW1lXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCBub1Byb3BlcnRpZXNcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW4gfHwgbm9DaGlsZHJlblxuICAgIHRoaXMua2V5ID0ga2V5ICE9IG51bGwgPyBTdHJpbmcoa2V5KSA6IHVuZGVmaW5lZFxuICAgIHRoaXMubmFtZXNwYWNlID0gKHR5cGVvZiBuYW1lc3BhY2UgPT09IFwic3RyaW5nXCIpID8gbmFtZXNwYWNlIDogbnVsbFxuXG4gICAgdmFyIGNvdW50ID0gKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkgfHwgMFxuICAgIHZhciBkZXNjZW5kYW50cyA9IDBcbiAgICB2YXIgaGFzV2lkZ2V0cyA9IGZhbHNlXG4gICAgdmFyIGhhc1RodW5rcyA9IGZhbHNlXG4gICAgdmFyIGRlc2NlbmRhbnRIb29rcyA9IGZhbHNlXG4gICAgdmFyIGhvb2tzXG5cbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1twcm9wTmFtZV1cbiAgICAgICAgICAgIGlmIChpc1ZIb29rKHByb3BlcnR5KSAmJiBwcm9wZXJ0eS51bmhvb2spIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhvb2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvb2tzID0ge31cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBob29rc1twcm9wTmFtZV0gPSBwcm9wZXJ0eVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgICAgIGlmIChpc1ZOb2RlKGNoaWxkKSkge1xuICAgICAgICAgICAgZGVzY2VuZGFudHMgKz0gY2hpbGQuY291bnQgfHwgMFxuXG4gICAgICAgICAgICBpZiAoIWhhc1dpZGdldHMgJiYgY2hpbGQuaGFzV2lkZ2V0cykge1xuICAgICAgICAgICAgICAgIGhhc1dpZGdldHMgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzVGh1bmtzICYmIGNoaWxkLmhhc1RodW5rcykge1xuICAgICAgICAgICAgICAgIGhhc1RodW5rcyA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFkZXNjZW5kYW50SG9va3MgJiYgKGNoaWxkLmhvb2tzIHx8IGNoaWxkLmRlc2NlbmRhbnRIb29rcykpIHtcbiAgICAgICAgICAgICAgICBkZXNjZW5kYW50SG9va3MgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc1dpZGdldHMgJiYgaXNXaWRnZXQoY2hpbGQpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLmRlc3Ryb3kgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGhhc1dpZGdldHMgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc1RodW5rcyAmJiBpc1RodW5rKGNoaWxkKSkge1xuICAgICAgICAgICAgaGFzVGh1bmtzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY291bnQgPSBjb3VudCArIGRlc2NlbmRhbnRzXG4gICAgdGhpcy5oYXNXaWRnZXRzID0gaGFzV2lkZ2V0c1xuICAgIHRoaXMuaGFzVGh1bmtzID0gaGFzVGh1bmtzXG4gICAgdGhpcy5ob29rcyA9IGhvb2tzXG4gICAgdGhpcy5kZXNjZW5kYW50SG9va3MgPSBkZXNjZW5kYW50SG9va3Ncbn1cblxuVmlydHVhbE5vZGUucHJvdG90eXBlLnZlcnNpb24gPSB2ZXJzaW9uXG5WaXJ0dWFsTm9kZS5wcm90b3R5cGUudHlwZSA9IFwiVmlydHVhbE5vZGVcIlxuIiwidmFyIHZlcnNpb24gPSByZXF1aXJlKFwiLi92ZXJzaW9uXCIpXG5cblZpcnR1YWxQYXRjaC5OT05FID0gMFxuVmlydHVhbFBhdGNoLlZURVhUID0gMVxuVmlydHVhbFBhdGNoLlZOT0RFID0gMlxuVmlydHVhbFBhdGNoLldJREdFVCA9IDNcblZpcnR1YWxQYXRjaC5QUk9QUyA9IDRcblZpcnR1YWxQYXRjaC5PUkRFUiA9IDVcblZpcnR1YWxQYXRjaC5JTlNFUlQgPSA2XG5WaXJ0dWFsUGF0Y2guUkVNT1ZFID0gN1xuVmlydHVhbFBhdGNoLlRIVU5LID0gOFxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxQYXRjaFxuXG5mdW5jdGlvbiBWaXJ0dWFsUGF0Y2godHlwZSwgdk5vZGUsIHBhdGNoKSB7XG4gICAgdGhpcy50eXBlID0gTnVtYmVyKHR5cGUpXG4gICAgdGhpcy52Tm9kZSA9IHZOb2RlXG4gICAgdGhpcy5wYXRjaCA9IHBhdGNoXG59XG5cblZpcnR1YWxQYXRjaC5wcm90b3R5cGUudmVyc2lvbiA9IHZlcnNpb25cblZpcnR1YWxQYXRjaC5wcm90b3R5cGUudHlwZSA9IFwiVmlydHVhbFBhdGNoXCJcbiIsInZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vdmVyc2lvblwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxUZXh0XG5cbmZ1bmN0aW9uIFZpcnR1YWxUZXh0KHRleHQpIHtcbiAgICB0aGlzLnRleHQgPSBTdHJpbmcodGV4dClcbn1cblxuVmlydHVhbFRleHQucHJvdG90eXBlLnZlcnNpb24gPSB2ZXJzaW9uXG5WaXJ0dWFsVGV4dC5wcm90b3R5cGUudHlwZSA9IFwiVmlydHVhbFRleHRcIlxuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZShcImlzLW9iamVjdFwiKVxudmFyIGlzSG9vayA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12aG9va1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZQcm9wc1xuXG5mdW5jdGlvbiBkaWZmUHJvcHMoYSwgYikge1xuICAgIHZhciBkaWZmXG5cbiAgICBmb3IgKHZhciBhS2V5IGluIGEpIHtcbiAgICAgICAgaWYgKCEoYUtleSBpbiBiKSkge1xuICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgIGRpZmZbYUtleV0gPSB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhVmFsdWUgPSBhW2FLZXldXG4gICAgICAgIHZhciBiVmFsdWUgPSBiW2FLZXldXG5cbiAgICAgICAgaWYgKGFWYWx1ZSA9PT0gYlZhbHVlKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGFWYWx1ZSkgJiYgaXNPYmplY3QoYlZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGdldFByb3RvdHlwZShiVmFsdWUpICE9PSBnZXRQcm90b3R5cGUoYVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICAgICAgZGlmZlthS2V5XSA9IGJWYWx1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0hvb2soYlZhbHVlKSkge1xuICAgICAgICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgICAgICBkaWZmW2FLZXldID0gYlZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvYmplY3REaWZmID0gZGlmZlByb3BzKGFWYWx1ZSwgYlZhbHVlKVxuICAgICAgICAgICAgICAgIGlmIChvYmplY3REaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPSBkaWZmIHx8IHt9XG4gICAgICAgICAgICAgICAgICAgIGRpZmZbYUtleV0gPSBvYmplY3REaWZmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlmZiA9IGRpZmYgfHwge31cbiAgICAgICAgICAgIGRpZmZbYUtleV0gPSBiVmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGJLZXkgaW4gYikge1xuICAgICAgICBpZiAoIShiS2V5IGluIGEpKSB7XG4gICAgICAgICAgICBkaWZmID0gZGlmZiB8fCB7fVxuICAgICAgICAgICAgZGlmZltiS2V5XSA9IGJbYktleV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkaWZmXG59XG5cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSlcbiAgfSBlbHNlIGlmICh2YWx1ZS5fX3Byb3RvX18pIHtcbiAgICByZXR1cm4gdmFsdWUuX19wcm90b19fXG4gIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlXG4gIH1cbn1cbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZShcIngtaXMtYXJyYXlcIilcblxudmFyIFZQYXRjaCA9IHJlcXVpcmUoXCIuLi92bm9kZS92cGF0Y2hcIilcbnZhciBpc1ZOb2RlID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXZub2RlXCIpXG52YXIgaXNWVGV4dCA9IHJlcXVpcmUoXCIuLi92bm9kZS9pcy12dGV4dFwiKVxudmFyIGlzV2lkZ2V0ID0gcmVxdWlyZShcIi4uL3Zub2RlL2lzLXdpZGdldFwiKVxudmFyIGlzVGh1bmsgPSByZXF1aXJlKFwiLi4vdm5vZGUvaXMtdGh1bmtcIilcbnZhciBoYW5kbGVUaHVuayA9IHJlcXVpcmUoXCIuLi92bm9kZS9oYW5kbGUtdGh1bmtcIilcblxudmFyIGRpZmZQcm9wcyA9IHJlcXVpcmUoXCIuL2RpZmYtcHJvcHNcIilcblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmXG5cbmZ1bmN0aW9uIGRpZmYoYSwgYikge1xuICAgIHZhciBwYXRjaCA9IHsgYTogYSB9XG4gICAgd2FsayhhLCBiLCBwYXRjaCwgMClcbiAgICByZXR1cm4gcGF0Y2hcbn1cblxuZnVuY3Rpb24gd2FsayhhLCBiLCBwYXRjaCwgaW5kZXgpIHtcbiAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgYXBwbHkgPSBwYXRjaFtpbmRleF1cbiAgICB2YXIgYXBwbHlDbGVhciA9IGZhbHNlXG5cbiAgICBpZiAoaXNUaHVuayhhKSB8fCBpc1RodW5rKGIpKSB7XG4gICAgICAgIHRodW5rcyhhLCBiLCBwYXRjaCwgaW5kZXgpXG4gICAgfSBlbHNlIGlmIChiID09IG51bGwpIHtcblxuICAgICAgICAvLyBJZiBhIGlzIGEgd2lkZ2V0IHdlIHdpbGwgYWRkIGEgcmVtb3ZlIHBhdGNoIGZvciBpdFxuICAgICAgICAvLyBPdGhlcndpc2UgYW55IGNoaWxkIHdpZGdldHMvaG9va3MgbXVzdCBiZSBkZXN0cm95ZWQuXG4gICAgICAgIC8vIFRoaXMgcHJldmVudHMgYWRkaW5nIHR3byByZW1vdmUgcGF0Y2hlcyBmb3IgYSB3aWRnZXQuXG4gICAgICAgIGlmICghaXNXaWRnZXQoYSkpIHtcbiAgICAgICAgICAgIGNsZWFyU3RhdGUoYSwgcGF0Y2gsIGluZGV4KVxuICAgICAgICAgICAgYXBwbHkgPSBwYXRjaFtpbmRleF1cbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLlJFTU9WRSwgYSwgYikpXG4gICAgfSBlbHNlIGlmIChpc1ZOb2RlKGIpKSB7XG4gICAgICAgIGlmIChpc1ZOb2RlKGEpKSB7XG4gICAgICAgICAgICBpZiAoYS50YWdOYW1lID09PSBiLnRhZ05hbWUgJiZcbiAgICAgICAgICAgICAgICBhLm5hbWVzcGFjZSA9PT0gYi5uYW1lc3BhY2UgJiZcbiAgICAgICAgICAgICAgICBhLmtleSA9PT0gYi5rZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHNQYXRjaCA9IGRpZmZQcm9wcyhhLnByb3BlcnRpZXMsIGIucHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNQYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZQYXRjaChWUGF0Y2guUFJPUFMsIGEsIHByb3BzUGF0Y2gpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBseSA9IGRpZmZDaGlsZHJlbihhLCBiLCBwYXRjaCwgYXBwbHksIGluZGV4KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WTk9ERSwgYSwgYikpXG4gICAgICAgICAgICAgICAgYXBwbHlDbGVhciA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goVlBhdGNoLlZOT0RFLCBhLCBiKSlcbiAgICAgICAgICAgIGFwcGx5Q2xlYXIgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVlRleHQoYikpIHtcbiAgICAgICAgaWYgKCFpc1ZUZXh0KGEpKSB7XG4gICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WVEVYVCwgYSwgYikpXG4gICAgICAgICAgICBhcHBseUNsZWFyID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGEudGV4dCAhPT0gYi50ZXh0KSB7XG4gICAgICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5WVEVYVCwgYSwgYikpXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzV2lkZ2V0KGIpKSB7XG4gICAgICAgIGlmICghaXNXaWRnZXQoYSkpIHtcbiAgICAgICAgICAgIGFwcGx5Q2xlYXIgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBhcHBseSA9IGFwcGVuZFBhdGNoKGFwcGx5LCBuZXcgVlBhdGNoKFZQYXRjaC5XSURHRVQsIGEsIGIpKVxuICAgIH1cblxuICAgIGlmIChhcHBseSkge1xuICAgICAgICBwYXRjaFtpbmRleF0gPSBhcHBseVxuICAgIH1cblxuICAgIGlmIChhcHBseUNsZWFyKSB7XG4gICAgICAgIGNsZWFyU3RhdGUoYSwgcGF0Y2gsIGluZGV4KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlmZkNoaWxkcmVuKGEsIGIsIHBhdGNoLCBhcHBseSwgaW5kZXgpIHtcbiAgICB2YXIgYUNoaWxkcmVuID0gYS5jaGlsZHJlblxuICAgIHZhciBvcmRlcmVkU2V0ID0gcmVvcmRlcihhQ2hpbGRyZW4sIGIuY2hpbGRyZW4pXG4gICAgdmFyIGJDaGlsZHJlbiA9IG9yZGVyZWRTZXQuY2hpbGRyZW5cblxuICAgIHZhciBhTGVuID0gYUNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciBiTGVuID0gYkNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciBsZW4gPSBhTGVuID4gYkxlbiA/IGFMZW4gOiBiTGVuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBsZWZ0Tm9kZSA9IGFDaGlsZHJlbltpXVxuICAgICAgICB2YXIgcmlnaHROb2RlID0gYkNoaWxkcmVuW2ldXG4gICAgICAgIGluZGV4ICs9IDFcblxuICAgICAgICBpZiAoIWxlZnROb2RlKSB7XG4gICAgICAgICAgICBpZiAocmlnaHROb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXNzIG5vZGVzIGluIGIgbmVlZCB0byBiZSBhZGRlZFxuICAgICAgICAgICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWUGF0Y2goVlBhdGNoLklOU0VSVCwgbnVsbCwgcmlnaHROb2RlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhbGsobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgcGF0Y2gsIGluZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzVk5vZGUobGVmdE5vZGUpICYmIGxlZnROb2RlLmNvdW50KSB7XG4gICAgICAgICAgICBpbmRleCArPSBsZWZ0Tm9kZS5jb3VudFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yZGVyZWRTZXQubW92ZXMpIHtcbiAgICAgICAgLy8gUmVvcmRlciBub2RlcyBsYXN0XG4gICAgICAgIGFwcGx5ID0gYXBwZW5kUGF0Y2goYXBwbHksIG5ldyBWUGF0Y2goXG4gICAgICAgICAgICBWUGF0Y2guT1JERVIsXG4gICAgICAgICAgICBhLFxuICAgICAgICAgICAgb3JkZXJlZFNldC5tb3Zlc1xuICAgICAgICApKVxuICAgIH1cblxuICAgIHJldHVybiBhcHBseVxufVxuXG5mdW5jdGlvbiBjbGVhclN0YXRlKHZOb2RlLCBwYXRjaCwgaW5kZXgpIHtcbiAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSBzaW5nbGUgd2Fsaywgbm90IHR3b1xuICAgIHVuaG9vayh2Tm9kZSwgcGF0Y2gsIGluZGV4KVxuICAgIGRlc3Ryb3lXaWRnZXRzKHZOb2RlLCBwYXRjaCwgaW5kZXgpXG59XG5cbi8vIFBhdGNoIHJlY29yZHMgZm9yIGFsbCBkZXN0cm95ZWQgd2lkZ2V0cyBtdXN0IGJlIGFkZGVkIGJlY2F1c2Ugd2UgbmVlZFxuLy8gYSBET00gbm9kZSByZWZlcmVuY2UgZm9yIHRoZSBkZXN0cm95IGZ1bmN0aW9uXG5mdW5jdGlvbiBkZXN0cm95V2lkZ2V0cyh2Tm9kZSwgcGF0Y2gsIGluZGV4KSB7XG4gICAgaWYgKGlzV2lkZ2V0KHZOb2RlKSkge1xuICAgICAgICBpZiAodHlwZW9mIHZOb2RlLmRlc3Ryb3kgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcGF0Y2hbaW5kZXhdID0gYXBwZW5kUGF0Y2goXG4gICAgICAgICAgICAgICAgcGF0Y2hbaW5kZXhdLFxuICAgICAgICAgICAgICAgIG5ldyBWUGF0Y2goVlBhdGNoLlJFTU9WRSwgdk5vZGUsIG51bGwpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVk5vZGUodk5vZGUpICYmICh2Tm9kZS5oYXNXaWRnZXRzIHx8IHZOb2RlLmhhc1RodW5rcykpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW5cbiAgICAgICAgdmFyIGxlbiA9IGNoaWxkcmVuLmxlbmd0aFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgaW5kZXggKz0gMVxuXG4gICAgICAgICAgICBkZXN0cm95V2lkZ2V0cyhjaGlsZCwgcGF0Y2gsIGluZGV4KVxuXG4gICAgICAgICAgICBpZiAoaXNWTm9kZShjaGlsZCkgJiYgY2hpbGQuY291bnQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSBjaGlsZC5jb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RodW5rKHZOb2RlKSkge1xuICAgICAgICB0aHVua3Modk5vZGUsIG51bGwsIHBhdGNoLCBpbmRleClcbiAgICB9XG59XG5cbi8vIENyZWF0ZSBhIHN1Yi1wYXRjaCBmb3IgdGh1bmtzXG5mdW5jdGlvbiB0aHVua3MoYSwgYiwgcGF0Y2gsIGluZGV4KSB7XG4gICAgdmFyIG5vZGVzID0gaGFuZGxlVGh1bmsoYSwgYilcbiAgICB2YXIgdGh1bmtQYXRjaCA9IGRpZmYobm9kZXMuYSwgbm9kZXMuYilcbiAgICBpZiAoaGFzUGF0Y2hlcyh0aHVua1BhdGNoKSkge1xuICAgICAgICBwYXRjaFtpbmRleF0gPSBuZXcgVlBhdGNoKFZQYXRjaC5USFVOSywgbnVsbCwgdGh1bmtQYXRjaClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhc1BhdGNoZXMocGF0Y2gpIHtcbiAgICBmb3IgKHZhciBpbmRleCBpbiBwYXRjaCkge1xuICAgICAgICBpZiAoaW5kZXggIT09IFwiYVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIEV4ZWN1dGUgaG9va3Mgd2hlbiB0d28gbm9kZXMgYXJlIGlkZW50aWNhbFxuZnVuY3Rpb24gdW5ob29rKHZOb2RlLCBwYXRjaCwgaW5kZXgpIHtcbiAgICBpZiAoaXNWTm9kZSh2Tm9kZSkpIHtcbiAgICAgICAgaWYgKHZOb2RlLmhvb2tzKSB7XG4gICAgICAgICAgICBwYXRjaFtpbmRleF0gPSBhcHBlbmRQYXRjaChcbiAgICAgICAgICAgICAgICBwYXRjaFtpbmRleF0sXG4gICAgICAgICAgICAgICAgbmV3IFZQYXRjaChcbiAgICAgICAgICAgICAgICAgICAgVlBhdGNoLlBST1BTLFxuICAgICAgICAgICAgICAgICAgICB2Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkS2V5cyh2Tm9kZS5ob29rcylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodk5vZGUuZGVzY2VuZGFudEhvb2tzIHx8IHZOb2RlLmhhc1RodW5rcykge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW5cbiAgICAgICAgICAgIHZhciBsZW4gPSBjaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuICAgICAgICAgICAgICAgIGluZGV4ICs9IDFcblxuICAgICAgICAgICAgICAgIHVuaG9vayhjaGlsZCwgcGF0Y2gsIGluZGV4KVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzVk5vZGUoY2hpbGQpICYmIGNoaWxkLmNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IGNoaWxkLmNvdW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1RodW5rKHZOb2RlKSkge1xuICAgICAgICB0aHVua3Modk5vZGUsIG51bGwsIHBhdGNoLCBpbmRleClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVuZGVmaW5lZEtleXMob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBMaXN0IGRpZmYsIG5haXZlIGxlZnQgdG8gcmlnaHQgcmVvcmRlcmluZ1xuZnVuY3Rpb24gcmVvcmRlcihhQ2hpbGRyZW4sIGJDaGlsZHJlbikge1xuICAgIC8vIE8oTSkgdGltZSwgTyhNKSBtZW1vcnlcbiAgICB2YXIgYkNoaWxkSW5kZXggPSBrZXlJbmRleChiQ2hpbGRyZW4pXG4gICAgdmFyIGJLZXlzID0gYkNoaWxkSW5kZXgua2V5c1xuICAgIHZhciBiRnJlZSA9IGJDaGlsZEluZGV4LmZyZWVcblxuICAgIGlmIChiRnJlZS5sZW5ndGggPT09IGJDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBiQ2hpbGRyZW4sXG4gICAgICAgICAgICBtb3ZlczogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTyhOKSB0aW1lLCBPKE4pIG1lbW9yeVxuICAgIHZhciBhQ2hpbGRJbmRleCA9IGtleUluZGV4KGFDaGlsZHJlbilcbiAgICB2YXIgYUtleXMgPSBhQ2hpbGRJbmRleC5rZXlzXG4gICAgdmFyIGFGcmVlID0gYUNoaWxkSW5kZXguZnJlZVxuXG4gICAgaWYgKGFGcmVlLmxlbmd0aCA9PT0gYUNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGJDaGlsZHJlbixcbiAgICAgICAgICAgIG1vdmVzOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPKE1BWChOLCBNKSkgbWVtb3J5XG4gICAgdmFyIG5ld0NoaWxkcmVuID0gW11cblxuICAgIHZhciBmcmVlSW5kZXggPSAwXG4gICAgdmFyIGZyZWVDb3VudCA9IGJGcmVlLmxlbmd0aFxuICAgIHZhciBkZWxldGVkSXRlbXMgPSAwXG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggYSBhbmQgbWF0Y2ggYSBub2RlIGluIGJcbiAgICAvLyBPKE4pIHRpbWUsXG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgYUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhSXRlbSA9IGFDaGlsZHJlbltpXVxuICAgICAgICB2YXIgaXRlbUluZGV4XG5cbiAgICAgICAgaWYgKGFJdGVtLmtleSkge1xuICAgICAgICAgICAgaWYgKGJLZXlzLmhhc093blByb3BlcnR5KGFJdGVtLmtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyBNYXRjaCB1cCB0aGUgb2xkIGtleXNcbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBiS2V5c1thSXRlbS5rZXldXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChiQ2hpbGRyZW5baXRlbUluZGV4XSlcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgb2xkIGtleWVkIGl0ZW1zXG4gICAgICAgICAgICAgICAgaXRlbUluZGV4ID0gaSAtIGRlbGV0ZWRJdGVtcysrXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTWF0Y2ggdGhlIGl0ZW0gaW4gYSB3aXRoIHRoZSBuZXh0IGZyZWUgaXRlbSBpbiBiXG4gICAgICAgICAgICBpZiAoZnJlZUluZGV4IDwgZnJlZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgaXRlbUluZGV4ID0gYkZyZWVbZnJlZUluZGV4KytdXG4gICAgICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChiQ2hpbGRyZW5baXRlbUluZGV4XSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgYXJlIG5vIGZyZWUgaXRlbXMgaW4gYiB0byBtYXRjaCB3aXRoXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZyZWUgaXRlbXMgaW4gYSwgc28gdGhlIGV4dHJhIGZyZWUgbm9kZXNcbiAgICAgICAgICAgICAgICAvLyBhcmUgZGVsZXRlZC5cbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBpIC0gZGVsZXRlZEl0ZW1zKytcbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGFzdEZyZWVJbmRleCA9IGZyZWVJbmRleCA+PSBiRnJlZS5sZW5ndGggP1xuICAgICAgICBiQ2hpbGRyZW4ubGVuZ3RoIDpcbiAgICAgICAgYkZyZWVbZnJlZUluZGV4XVxuXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGIgYW5kIGFwcGVuZCBhbnkgbmV3IGtleXNcbiAgICAvLyBPKE0pIHRpbWVcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJDaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbmV3SXRlbSA9IGJDaGlsZHJlbltqXVxuXG4gICAgICAgIGlmIChuZXdJdGVtLmtleSkge1xuICAgICAgICAgICAgaWYgKCFhS2V5cy5oYXNPd25Qcm9wZXJ0eShuZXdJdGVtLmtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgYW55IG5ldyBrZXllZCBpdGVtc1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBhZGRpbmcgbmV3IGl0ZW1zIHRvIHRoZSBlbmQgYW5kIHRoZW4gc29ydGluZyB0aGVtXG4gICAgICAgICAgICAgICAgLy8gaW4gcGxhY2UuIEluIGZ1dHVyZSB3ZSBzaG91bGQgaW5zZXJ0IG5ldyBpdGVtcyBpbiBwbGFjZS5cbiAgICAgICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5ld0l0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaiA+PSBsYXN0RnJlZUluZGV4KSB7XG4gICAgICAgICAgICAvLyBBZGQgYW55IGxlZnRvdmVyIG5vbi1rZXllZCBpdGVtc1xuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXdJdGVtKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNpbXVsYXRlID0gbmV3Q2hpbGRyZW4uc2xpY2UoKVxuICAgIHZhciBzaW11bGF0ZUluZGV4ID0gMFxuICAgIHZhciByZW1vdmVzID0gW11cbiAgICB2YXIgaW5zZXJ0cyA9IFtdXG4gICAgdmFyIHNpbXVsYXRlSXRlbVxuXG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCBiQ2hpbGRyZW4ubGVuZ3RoOykge1xuICAgICAgICB2YXIgd2FudGVkSXRlbSA9IGJDaGlsZHJlbltrXVxuICAgICAgICBzaW11bGF0ZUl0ZW0gPSBzaW11bGF0ZVtzaW11bGF0ZUluZGV4XVxuXG4gICAgICAgIC8vIHJlbW92ZSBpdGVtc1xuICAgICAgICB3aGlsZSAoc2ltdWxhdGVJdGVtID09PSBudWxsICYmIHNpbXVsYXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVtb3Zlcy5wdXNoKHJlbW92ZShzaW11bGF0ZSwgc2ltdWxhdGVJbmRleCwgbnVsbCkpXG4gICAgICAgICAgICBzaW11bGF0ZUl0ZW0gPSBzaW11bGF0ZVtzaW11bGF0ZUluZGV4XVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaW11bGF0ZUl0ZW0gfHwgc2ltdWxhdGVJdGVtLmtleSAhPT0gd2FudGVkSXRlbS5rZXkpIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIG5lZWQgYSBrZXkgaW4gdGhpcyBwb3NpdGlvbi4uLlxuICAgICAgICAgICAgaWYgKHdhbnRlZEl0ZW0ua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpbXVsYXRlSXRlbSAmJiBzaW11bGF0ZUl0ZW0ua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGFuIGluc2VydCBkb2Vzbid0IHB1dCB0aGlzIGtleSBpbiBwbGFjZSwgaXQgbmVlZHMgdG8gbW92ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYktleXNbc2ltdWxhdGVJdGVtLmtleV0gIT09IGsgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVzLnB1c2gocmVtb3ZlKHNpbXVsYXRlLCBzaW11bGF0ZUluZGV4LCBzaW11bGF0ZUl0ZW0ua2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbXVsYXRlSXRlbSA9IHNpbXVsYXRlW3NpbXVsYXRlSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmVtb3ZlIGRpZG4ndCBwdXQgdGhlIHdhbnRlZCBpdGVtIGluIHBsYWNlLCB3ZSBuZWVkIHRvIGluc2VydCBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaW11bGF0ZUl0ZW0gfHwgc2ltdWxhdGVJdGVtLmtleSAhPT0gd2FudGVkSXRlbS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRzLnB1c2goe2tleTogd2FudGVkSXRlbS5rZXksIHRvOiBrfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0ZW1zIGFyZSBtYXRjaGluZywgc28gc2tpcCBhaGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdGVJbmRleCsrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRzLnB1c2goe2tleTogd2FudGVkSXRlbS5rZXksIHRvOiBrfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0cy5wdXNoKHtrZXk6IHdhbnRlZEl0ZW0ua2V5LCB0bzoga30pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYSBrZXkgaW4gc2ltdWxhdGUgaGFzIG5vIG1hdGNoaW5nIHdhbnRlZCBrZXksIHJlbW92ZSBpdFxuICAgICAgICAgICAgZWxzZSBpZiAoc2ltdWxhdGVJdGVtICYmIHNpbXVsYXRlSXRlbS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVzLnB1c2gocmVtb3ZlKHNpbXVsYXRlLCBzaW11bGF0ZUluZGV4LCBzaW11bGF0ZUl0ZW0ua2V5KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNpbXVsYXRlSW5kZXgrK1xuICAgICAgICAgICAgaysrXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIHRoZSByZW1haW5pbmcgbm9kZXMgZnJvbSBzaW11bGF0ZVxuICAgIHdoaWxlKHNpbXVsYXRlSW5kZXggPCBzaW11bGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgc2ltdWxhdGVJdGVtID0gc2ltdWxhdGVbc2ltdWxhdGVJbmRleF1cbiAgICAgICAgcmVtb3Zlcy5wdXNoKHJlbW92ZShzaW11bGF0ZSwgc2ltdWxhdGVJbmRleCwgc2ltdWxhdGVJdGVtICYmIHNpbXVsYXRlSXRlbS5rZXkpKVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBvbmx5IG1vdmVzIHdlIGhhdmUgYXJlIGRlbGV0ZXMgdGhlbiB3ZSBjYW4ganVzdFxuICAgIC8vIGxldCB0aGUgZGVsZXRlIHBhdGNoIHJlbW92ZSB0aGVzZSBpdGVtcy5cbiAgICBpZiAocmVtb3Zlcy5sZW5ndGggPT09IGRlbGV0ZWRJdGVtcyAmJiAhaW5zZXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBuZXdDaGlsZHJlbixcbiAgICAgICAgICAgIG1vdmVzOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGlsZHJlbjogbmV3Q2hpbGRyZW4sXG4gICAgICAgIG1vdmVzOiB7XG4gICAgICAgICAgICByZW1vdmVzOiByZW1vdmVzLFxuICAgICAgICAgICAgaW5zZXJ0czogaW5zZXJ0c1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUoYXJyLCBpbmRleCwga2V5KSB7XG4gICAgYXJyLnNwbGljZShpbmRleCwgMSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZyb206IGluZGV4LFxuICAgICAgICBrZXk6IGtleVxuICAgIH1cbn1cblxuZnVuY3Rpb24ga2V5SW5kZXgoY2hpbGRyZW4pIHtcbiAgICB2YXIga2V5cyA9IHt9XG4gICAgdmFyIGZyZWUgPSBbXVxuICAgIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cblxuICAgICAgICBpZiAoY2hpbGQua2V5KSB7XG4gICAgICAgICAgICBrZXlzW2NoaWxkLmtleV0gPSBpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcmVlLnB1c2goaSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGtleXM6IGtleXMsICAgICAvLyBBIGhhc2ggb2Yga2V5IG5hbWUgdG8gaW5kZXhcbiAgICAgICAgZnJlZTogZnJlZSAgICAgIC8vIEFuIGFycmF5IG9mIHVua2V5ZWQgaXRlbSBpbmRpY2VzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRQYXRjaChhcHBseSwgcGF0Y2gpIHtcbiAgICBpZiAoYXBwbHkpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkoYXBwbHkpKSB7XG4gICAgICAgICAgICBhcHBseS5wdXNoKHBhdGNoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwbHkgPSBbYXBwbHksIHBhdGNoXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwcGx5XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGNoXG4gICAgfVxufVxuIiwidmFyIG5hdGl2ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlSXNBcnJheSB8fCBpc0FycmF5XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIG1vY2tfMSA9IHJlcXVpcmUoXCIuL21vY2tpbmcvbW9ja1wiKTtcbnZhciBwYWdlXzEgPSByZXF1aXJlKFwiLi9wYWdlL3BhZ2VcIik7XG52YXIgY291bnRlclBhZ2UgPSBuZXcgcGFnZV8xLlBhZ2UoXCJjb3VudGVyXCIpLmFkZFJvb3RJbWFnZShuZXcgbW9ja18xLkNvbnRhaW5lcihbMCwgMCwgNTAsIDUwXSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
