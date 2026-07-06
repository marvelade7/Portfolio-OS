(function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        a(l);
    new MutationObserver((l) => {
        for (const d of l)
            if (d.type === "childList")
                for (const c of d.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && a(c);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(l) {
        const d = {};
        return (
            l.integrity && (d.integrity = l.integrity),
            l.referrerPolicy && (d.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials"
                ? (d.credentials = "include")
                : l.crossOrigin === "anonymous"
                  ? (d.credentials = "omit")
                  : (d.credentials = "same-origin"),
            d
        );
    }
    function a(l) {
        if (l.ep) return;
        l.ep = !0;
        const d = s(l);
        fetch(l.href, d);
    }
})();
function mu(n) {
    return n &&
        n.__esModule &&
        Object.prototype.hasOwnProperty.call(n, "default")
        ? n.default
        : n;
}
var kl = { exports: {} },
    mi = {},
    Cl = { exports: {} },
    he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qf;
function $y() {
    if (Qf) return he;
    Qf = 1;
    var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        d = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        m = Symbol.for("react.suspense"),
        g = Symbol.for("react.memo"),
        x = Symbol.for("react.lazy"),
        v = Symbol.iterator;
    function w(D) {
        return D === null || typeof D != "object"
            ? null
            : ((D = (v && D[v]) || D["@@iterator"]),
              typeof D == "function" ? D : null);
    }
    var j = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        z = Object.assign,
        T = {};
    function b(D, U, ue) {
        ((this.props = D),
            (this.context = U),
            (this.refs = T),
            (this.updater = ue || j));
    }
    ((b.prototype.isReactComponent = {}),
        (b.prototype.setState = function (D, U) {
            if (typeof D != "object" && typeof D != "function" && D != null)
                throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
                );
            this.updater.enqueueSetState(this, D, U, "setState");
        }),
        (b.prototype.forceUpdate = function (D) {
            this.updater.enqueueForceUpdate(this, D, "forceUpdate");
        }));
    function N() {}
    N.prototype = b.prototype;
    function C(D, U, ue) {
        ((this.props = D),
            (this.context = U),
            (this.refs = T),
            (this.updater = ue || j));
    }
    var M = (C.prototype = new N());
    ((M.constructor = C), z(M, b.prototype), (M.isPureReactComponent = !0));
    var V = Array.isArray,
        O = Object.prototype.hasOwnProperty,
        L = { current: null },
        E = { key: !0, ref: !0, __self: !0, __source: !0 };
    function R(D, U, ue) {
        var ce,
            pe = {},
            me = null,
            be = null;
        if (U != null)
            for (ce in (U.ref !== void 0 && (be = U.ref),
            U.key !== void 0 && (me = "" + U.key),
            U))
                O.call(U, ce) && !E.hasOwnProperty(ce) && (pe[ce] = U[ce]);
        var we = arguments.length - 2;
        if (we === 1) pe.children = ue;
        else if (1 < we) {
            for (var Ee = Array(we), ct = 0; ct < we; ct++)
                Ee[ct] = arguments[ct + 2];
            pe.children = Ee;
        }
        if (D && D.defaultProps)
            for (ce in ((we = D.defaultProps), we))
                pe[ce] === void 0 && (pe[ce] = we[ce]);
        return {
            $$typeof: n,
            type: D,
            key: me,
            ref: be,
            props: pe,
            _owner: L.current,
        };
    }
    function G(D, U) {
        return {
            $$typeof: n,
            type: D.type,
            key: U,
            ref: D.ref,
            props: D.props,
            _owner: D._owner,
        };
    }
    function te(D) {
        return typeof D == "object" && D !== null && D.$$typeof === n;
    }
    function se(D) {
        var U = { "=": "=0", ":": "=2" };
        return (
            "$" +
            D.replace(/[=:]/g, function (ue) {
                return U[ue];
            })
        );
    }
    var xe = /\/+/g;
    function le(D, U) {
        return typeof D == "object" && D !== null && D.key != null
            ? se("" + D.key)
            : U.toString(36);
    }
    function ye(D, U, ue, ce, pe) {
        var me = typeof D;
        (me === "undefined" || me === "boolean") && (D = null);
        var be = !1;
        if (D === null) be = !0;
        else
            switch (me) {
                case "string":
                case "number":
                    be = !0;
                    break;
                case "object":
                    switch (D.$$typeof) {
                        case n:
                        case r:
                            be = !0;
                    }
            }
        if (be)
            return (
                (be = D),
                (pe = pe(be)),
                (D = ce === "" ? "." + le(be, 0) : ce),
                V(pe)
                    ? ((ue = ""),
                      D != null && (ue = D.replace(xe, "$&/") + "/"),
                      ye(pe, U, ue, "", function (ct) {
                          return ct;
                      }))
                    : pe != null &&
                      (te(pe) &&
                          (pe = G(
                              pe,
                              ue +
                                  (!pe.key || (be && be.key === pe.key)
                                      ? ""
                                      : ("" + pe.key).replace(xe, "$&/") +
                                        "/") +
                                  D,
                          )),
                      U.push(pe)),
                1
            );
        if (((be = 0), (ce = ce === "" ? "." : ce + ":"), V(D)))
            for (var we = 0; we < D.length; we++) {
                me = D[we];
                var Ee = ce + le(me, we);
                be += ye(me, U, ue, Ee, pe);
            }
        else if (((Ee = w(D)), typeof Ee == "function"))
            for (D = Ee.call(D), we = 0; !(me = D.next()).done; )
                ((me = me.value),
                    (Ee = ce + le(me, we++)),
                    (be += ye(me, U, ue, Ee, pe)));
        else if (me === "object")
            throw (
                (U = String(D)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (U === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(D).join(", ") +
                              "}"
                            : U) +
                        "). If you meant to render a collection of children, use an array instead.",
                )
            );
        return be;
    }
    function ke(D, U, ue) {
        if (D == null) return D;
        var ce = [],
            pe = 0;
        return (
            ye(D, ce, "", "", function (me) {
                return U.call(ue, me, pe++);
            }),
            ce
        );
    }
    function fe(D) {
        if (D._status === -1) {
            var U = D._result;
            ((U = U()),
                U.then(
                    function (ue) {
                        (D._status === 0 || D._status === -1) &&
                            ((D._status = 1), (D._result = ue));
                    },
                    function (ue) {
                        (D._status === 0 || D._status === -1) &&
                            ((D._status = 2), (D._result = ue));
                    },
                ),
                D._status === -1 && ((D._status = 0), (D._result = U)));
        }
        if (D._status === 1) return D._result.default;
        throw D._result;
    }
    var K = { current: null },
        B = { transition: null },
        Z = {
            ReactCurrentDispatcher: K,
            ReactCurrentBatchConfig: B,
            ReactCurrentOwner: L,
        };
    function X() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    return (
        (he.Children = {
            map: ke,
            forEach: function (D, U, ue) {
                ke(
                    D,
                    function () {
                        U.apply(this, arguments);
                    },
                    ue,
                );
            },
            count: function (D) {
                var U = 0;
                return (
                    ke(D, function () {
                        U++;
                    }),
                    U
                );
            },
            toArray: function (D) {
                return (
                    ke(D, function (U) {
                        return U;
                    }) || []
                );
            },
            only: function (D) {
                if (!te(D))
                    throw Error(
                        "React.Children.only expected to receive a single React element child.",
                    );
                return D;
            },
        }),
        (he.Component = b),
        (he.Fragment = s),
        (he.Profiler = l),
        (he.PureComponent = C),
        (he.StrictMode = a),
        (he.Suspense = m),
        (he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
        (he.act = X),
        (he.cloneElement = function (D, U, ue) {
            if (D == null)
                throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                        D +
                        ".",
                );
            var ce = z({}, D.props),
                pe = D.key,
                me = D.ref,
                be = D._owner;
            if (U != null) {
                if (
                    (U.ref !== void 0 && ((me = U.ref), (be = L.current)),
                    U.key !== void 0 && (pe = "" + U.key),
                    D.type && D.type.defaultProps)
                )
                    var we = D.type.defaultProps;
                for (Ee in U)
                    O.call(U, Ee) &&
                        !E.hasOwnProperty(Ee) &&
                        (ce[Ee] =
                            U[Ee] === void 0 && we !== void 0 ? we[Ee] : U[Ee]);
            }
            var Ee = arguments.length - 2;
            if (Ee === 1) ce.children = ue;
            else if (1 < Ee) {
                we = Array(Ee);
                for (var ct = 0; ct < Ee; ct++) we[ct] = arguments[ct + 2];
                ce.children = we;
            }
            return {
                $$typeof: n,
                type: D.type,
                key: pe,
                ref: me,
                props: ce,
                _owner: be,
            };
        }),
        (he.createContext = function (D) {
            return (
                (D = {
                    $$typeof: c,
                    _currentValue: D,
                    _currentValue2: D,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (D.Provider = { $$typeof: d, _context: D }),
                (D.Consumer = D)
            );
        }),
        (he.createElement = R),
        (he.createFactory = function (D) {
            var U = R.bind(null, D);
            return ((U.type = D), U);
        }),
        (he.createRef = function () {
            return { current: null };
        }),
        (he.forwardRef = function (D) {
            return { $$typeof: h, render: D };
        }),
        (he.isValidElement = te),
        (he.lazy = function (D) {
            return {
                $$typeof: x,
                _payload: { _status: -1, _result: D },
                _init: fe,
            };
        }),
        (he.memo = function (D, U) {
            return { $$typeof: g, type: D, compare: U === void 0 ? null : U };
        }),
        (he.startTransition = function (D) {
            var U = B.transition;
            B.transition = {};
            try {
                D();
            } finally {
                B.transition = U;
            }
        }),
        (he.unstable_act = X),
        (he.useCallback = function (D, U) {
            return K.current.useCallback(D, U);
        }),
        (he.useContext = function (D) {
            return K.current.useContext(D);
        }),
        (he.useDebugValue = function () {}),
        (he.useDeferredValue = function (D) {
            return K.current.useDeferredValue(D);
        }),
        (he.useEffect = function (D, U) {
            return K.current.useEffect(D, U);
        }),
        (he.useId = function () {
            return K.current.useId();
        }),
        (he.useImperativeHandle = function (D, U, ue) {
            return K.current.useImperativeHandle(D, U, ue);
        }),
        (he.useInsertionEffect = function (D, U) {
            return K.current.useInsertionEffect(D, U);
        }),
        (he.useLayoutEffect = function (D, U) {
            return K.current.useLayoutEffect(D, U);
        }),
        (he.useMemo = function (D, U) {
            return K.current.useMemo(D, U);
        }),
        (he.useReducer = function (D, U, ue) {
            return K.current.useReducer(D, U, ue);
        }),
        (he.useRef = function (D) {
            return K.current.useRef(D);
        }),
        (he.useState = function (D) {
            return K.current.useState(D);
        }),
        (he.useSyncExternalStore = function (D, U, ue) {
            return K.current.useSyncExternalStore(D, U, ue);
        }),
        (he.useTransition = function () {
            return K.current.useTransition();
        }),
        (he.version = "18.3.1"),
        he
    );
}
var Zf;
function zi() {
    return (Zf || ((Zf = 1), (Cl.exports = $y())), Cl.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf;
function Hy() {
    if (Jf) return mi;
    Jf = 1;
    var n = zi(),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        l =
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
        d = { key: !0, ref: !0, __self: !0, __source: !0 };
    function c(h, m, g) {
        var x,
            v = {},
            w = null,
            j = null;
        (g !== void 0 && (w = "" + g),
            m.key !== void 0 && (w = "" + m.key),
            m.ref !== void 0 && (j = m.ref));
        for (x in m) a.call(m, x) && !d.hasOwnProperty(x) && (v[x] = m[x]);
        if (h && h.defaultProps)
            for (x in ((m = h.defaultProps), m))
                v[x] === void 0 && (v[x] = m[x]);
        return {
            $$typeof: r,
            type: h,
            key: w,
            ref: j,
            props: v,
            _owner: l.current,
        };
    }
    return ((mi.Fragment = s), (mi.jsx = c), (mi.jsxs = c), mi);
}
var eh;
function Ky() {
    return (eh || ((eh = 1), (kl.exports = Hy())), kl.exports);
}
var p = Ky(),
    I = zi();
const wi = mu(I);
var Xs = {},
    jl = { exports: {} },
    lt = {},
    Pl = { exports: {} },
    Tl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var th;
function Gy() {
    return (
        th ||
            ((th = 1),
            (function (n) {
                function r(B, Z) {
                    var X = B.length;
                    B.push(Z);
                    e: for (; 0 < X; ) {
                        var D = (X - 1) >>> 1,
                            U = B[D];
                        if (0 < l(U, Z)) ((B[D] = Z), (B[X] = U), (X = D));
                        else break e;
                    }
                }
                function s(B) {
                    return B.length === 0 ? null : B[0];
                }
                function a(B) {
                    if (B.length === 0) return null;
                    var Z = B[0],
                        X = B.pop();
                    if (X !== Z) {
                        B[0] = X;
                        e: for (
                            var D = 0, U = B.length, ue = U >>> 1;
                            D < ue;
                        ) {
                            var ce = 2 * (D + 1) - 1,
                                pe = B[ce],
                                me = ce + 1,
                                be = B[me];
                            if (0 > l(pe, X))
                                me < U && 0 > l(be, pe)
                                    ? ((B[D] = be), (B[me] = X), (D = me))
                                    : ((B[D] = pe), (B[ce] = X), (D = ce));
                            else if (me < U && 0 > l(be, X))
                                ((B[D] = be), (B[me] = X), (D = me));
                            else break e;
                        }
                    }
                    return Z;
                }
                function l(B, Z) {
                    var X = B.sortIndex - Z.sortIndex;
                    return X !== 0 ? X : B.id - Z.id;
                }
                if (
                    typeof performance == "object" &&
                    typeof performance.now == "function"
                ) {
                    var d = performance;
                    n.unstable_now = function () {
                        return d.now();
                    };
                } else {
                    var c = Date,
                        h = c.now();
                    n.unstable_now = function () {
                        return c.now() - h;
                    };
                }
                var m = [],
                    g = [],
                    x = 1,
                    v = null,
                    w = 3,
                    j = !1,
                    z = !1,
                    T = !1,
                    b = typeof setTimeout == "function" ? setTimeout : null,
                    N = typeof clearTimeout == "function" ? clearTimeout : null,
                    C = typeof setImmediate < "u" ? setImmediate : null;
                typeof navigator < "u" &&
                    navigator.scheduling !== void 0 &&
                    navigator.scheduling.isInputPending !== void 0 &&
                    navigator.scheduling.isInputPending.bind(
                        navigator.scheduling,
                    );
                function M(B) {
                    for (var Z = s(g); Z !== null; ) {
                        if (Z.callback === null) a(g);
                        else if (Z.startTime <= B)
                            (a(g), (Z.sortIndex = Z.expirationTime), r(m, Z));
                        else break;
                        Z = s(g);
                    }
                }
                function V(B) {
                    if (((T = !1), M(B), !z))
                        if (s(m) !== null) ((z = !0), fe(O));
                        else {
                            var Z = s(g);
                            Z !== null && K(V, Z.startTime - B);
                        }
                }
                function O(B, Z) {
                    ((z = !1), T && ((T = !1), N(R), (R = -1)), (j = !0));
                    var X = w;
                    try {
                        for (
                            M(Z), v = s(m);
                            v !== null &&
                            (!(v.expirationTime > Z) || (B && !se()));
                        ) {
                            var D = v.callback;
                            if (typeof D == "function") {
                                ((v.callback = null), (w = v.priorityLevel));
                                var U = D(v.expirationTime <= Z);
                                ((Z = n.unstable_now()),
                                    typeof U == "function"
                                        ? (v.callback = U)
                                        : v === s(m) && a(m),
                                    M(Z));
                            } else a(m);
                            v = s(m);
                        }
                        if (v !== null) var ue = !0;
                        else {
                            var ce = s(g);
                            (ce !== null && K(V, ce.startTime - Z), (ue = !1));
                        }
                        return ue;
                    } finally {
                        ((v = null), (w = X), (j = !1));
                    }
                }
                var L = !1,
                    E = null,
                    R = -1,
                    G = 5,
                    te = -1;
                function se() {
                    return !(n.unstable_now() - te < G);
                }
                function xe() {
                    if (E !== null) {
                        var B = n.unstable_now();
                        te = B;
                        var Z = !0;
                        try {
                            Z = E(!0, B);
                        } finally {
                            Z ? le() : ((L = !1), (E = null));
                        }
                    } else L = !1;
                }
                var le;
                if (typeof C == "function")
                    le = function () {
                        C(xe);
                    };
                else if (typeof MessageChannel < "u") {
                    var ye = new MessageChannel(),
                        ke = ye.port2;
                    ((ye.port1.onmessage = xe),
                        (le = function () {
                            ke.postMessage(null);
                        }));
                } else
                    le = function () {
                        b(xe, 0);
                    };
                function fe(B) {
                    ((E = B), L || ((L = !0), le()));
                }
                function K(B, Z) {
                    R = b(function () {
                        B(n.unstable_now());
                    }, Z);
                }
                ((n.unstable_IdlePriority = 5),
                    (n.unstable_ImmediatePriority = 1),
                    (n.unstable_LowPriority = 4),
                    (n.unstable_NormalPriority = 3),
                    (n.unstable_Profiling = null),
                    (n.unstable_UserBlockingPriority = 2),
                    (n.unstable_cancelCallback = function (B) {
                        B.callback = null;
                    }),
                    (n.unstable_continueExecution = function () {
                        z || j || ((z = !0), fe(O));
                    }),
                    (n.unstable_forceFrameRate = function (B) {
                        0 > B || 125 < B
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                              )
                            : (G = 0 < B ? Math.floor(1e3 / B) : 5);
                    }),
                    (n.unstable_getCurrentPriorityLevel = function () {
                        return w;
                    }),
                    (n.unstable_getFirstCallbackNode = function () {
                        return s(m);
                    }),
                    (n.unstable_next = function (B) {
                        switch (w) {
                            case 1:
                            case 2:
                            case 3:
                                var Z = 3;
                                break;
                            default:
                                Z = w;
                        }
                        var X = w;
                        w = Z;
                        try {
                            return B();
                        } finally {
                            w = X;
                        }
                    }),
                    (n.unstable_pauseExecution = function () {}),
                    (n.unstable_requestPaint = function () {}),
                    (n.unstable_runWithPriority = function (B, Z) {
                        switch (B) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                B = 3;
                        }
                        var X = w;
                        w = B;
                        try {
                            return Z();
                        } finally {
                            w = X;
                        }
                    }),
                    (n.unstable_scheduleCallback = function (B, Z, X) {
                        var D = n.unstable_now();
                        switch (
                            (typeof X == "object" && X !== null
                                ? ((X = X.delay),
                                  (X =
                                      typeof X == "number" && 0 < X
                                          ? D + X
                                          : D))
                                : (X = D),
                            B)
                        ) {
                            case 1:
                                var U = -1;
                                break;
                            case 2:
                                U = 250;
                                break;
                            case 5:
                                U = 1073741823;
                                break;
                            case 4:
                                U = 1e4;
                                break;
                            default:
                                U = 5e3;
                        }
                        return (
                            (U = X + U),
                            (B = {
                                id: x++,
                                callback: Z,
                                priorityLevel: B,
                                startTime: X,
                                expirationTime: U,
                                sortIndex: -1,
                            }),
                            X > D
                                ? ((B.sortIndex = X),
                                  r(g, B),
                                  s(m) === null &&
                                      B === s(g) &&
                                      (T ? (N(R), (R = -1)) : (T = !0),
                                      K(V, X - D)))
                                : ((B.sortIndex = U),
                                  r(m, B),
                                  z || j || ((z = !0), fe(O))),
                            B
                        );
                    }),
                    (n.unstable_shouldYield = se),
                    (n.unstable_wrapCallback = function (B) {
                        var Z = w;
                        return function () {
                            var X = w;
                            w = Z;
                            try {
                                return B.apply(this, arguments);
                            } finally {
                                w = X;
                            }
                        };
                    }));
            })(Tl)),
        Tl
    );
}
var nh;
function Yy() {
    return (nh || ((nh = 1), (Pl.exports = Gy())), Pl.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rh;
function Xy() {
    if (rh) return lt;
    rh = 1;
    var n = zi(),
        r = Yy();
    function s(e) {
        for (
            var t =
                    "https://reactjs.org/docs/error-decoder.html?invariant=" +
                    e,
                i = 1;
            i < arguments.length;
            i++
        )
            t += "&args[]=" + encodeURIComponent(arguments[i]);
        return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    var a = new Set(),
        l = {};
    function d(e, t) {
        (c(e, t), c(e + "Capture", t));
    }
    function c(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
    }
    var h = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
        ),
        m = Object.prototype.hasOwnProperty,
        g =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        x = {},
        v = {};
    function w(e) {
        return m.call(v, e)
            ? !0
            : m.call(x, e)
              ? !1
              : g.test(e)
                ? (v[e] = !0)
                : ((x[e] = !0), !1);
    }
    function j(e, t, i, o) {
        if (i !== null && i.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return o
                    ? !1
                    : i !== null
                      ? !i.acceptsBooleans
                      : ((e = e.toLowerCase().slice(0, 5)),
                        e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function z(e, t, i, o) {
        if (t === null || typeof t > "u" || j(e, t, i, o)) return !0;
        if (o) return !1;
        if (i !== null)
            switch (i.type) {
                case 3:
                    return !t;
                case 4:
                    return t === !1;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t;
            }
        return !1;
    }
    function T(e, t, i, o, u, f, y) {
        ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
            (this.attributeName = o),
            (this.attributeNamespace = u),
            (this.mustUseProperty = i),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = f),
            (this.removeEmptyString = y));
    }
    var b = {};
    ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
            b[e] = new T(e, 0, !1, e, null, !1, !1);
        }),
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
            var t = e[0];
            b[t] = new T(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
                b[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
        ),
        [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
        ].forEach(function (e) {
            b[e] = new T(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
                b[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            b[e] = new T(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
            b[e] = new T(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
            b[e] = new T(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
            b[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
        }));
    var N = /[\-:]([a-z])/g;
    function C(e) {
        return e[1].toUpperCase();
    }
    ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
            var t = e.replace(N, C);
            b[t] = new T(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
                var t = e.replace(N, C);
                b[t] = new T(
                    t,
                    1,
                    !1,
                    e,
                    "http://www.w3.org/1999/xlink",
                    !1,
                    !1,
                );
            }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(N, C);
            b[t] = new T(
                t,
                1,
                !1,
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                !1,
            );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            b[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (b.xlinkHref = new T(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
            b[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
        }));
    function M(e, t, i, o) {
        var u = b.hasOwnProperty(t) ? b[t] : null;
        (u !== null
            ? u.type !== 0
            : o ||
              !(2 < t.length) ||
              (t[0] !== "o" && t[0] !== "O") ||
              (t[1] !== "n" && t[1] !== "N")) &&
            (z(t, i, u, o) && (i = null),
            o || u === null
                ? w(t) &&
                  (i === null
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, "" + i))
                : u.mustUseProperty
                  ? (e[u.propertyName] =
                        i === null ? (u.type === 3 ? !1 : "") : i)
                  : ((t = u.attributeName),
                    (o = u.attributeNamespace),
                    i === null
                        ? e.removeAttribute(t)
                        : ((u = u.type),
                          (i = u === 3 || (u === 4 && i === !0) ? "" : "" + i),
                          o
                              ? e.setAttributeNS(o, t, i)
                              : e.setAttribute(t, i))));
    }
    var V = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        O = Symbol.for("react.element"),
        L = Symbol.for("react.portal"),
        E = Symbol.for("react.fragment"),
        R = Symbol.for("react.strict_mode"),
        G = Symbol.for("react.profiler"),
        te = Symbol.for("react.provider"),
        se = Symbol.for("react.context"),
        xe = Symbol.for("react.forward_ref"),
        le = Symbol.for("react.suspense"),
        ye = Symbol.for("react.suspense_list"),
        ke = Symbol.for("react.memo"),
        fe = Symbol.for("react.lazy"),
        K = Symbol.for("react.offscreen"),
        B = Symbol.iterator;
    function Z(e) {
        return e === null || typeof e != "object"
            ? null
            : ((e = (B && e[B]) || e["@@iterator"]),
              typeof e == "function" ? e : null);
    }
    var X = Object.assign,
        D;
    function U(e) {
        if (D === void 0)
            try {
                throw Error();
            } catch (i) {
                var t = i.stack.trim().match(/\n( *(at )?)/);
                D = (t && t[1]) || "";
            }
        return (
            `
` +
            D +
            e
        );
    }
    var ue = !1;
    function ce(e, t) {
        if (!e || ue) return "";
        ue = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (
                    ((t = function () {
                        throw Error();
                    }),
                    Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                ) {
                    try {
                        Reflect.construct(t, []);
                    } catch (F) {
                        var o = F;
                    }
                    Reflect.construct(e, [], t);
                } else {
                    try {
                        t.call();
                    } catch (F) {
                        o = F;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                } catch (F) {
                    o = F;
                }
                e();
            }
        } catch (F) {
            if (F && o && typeof F.stack == "string") {
                for (
                    var u = F.stack.split(`
`),
                        f = o.stack.split(`
`),
                        y = u.length - 1,
                        S = f.length - 1;
                    1 <= y && 0 <= S && u[y] !== f[S];
                )
                    S--;
                for (; 1 <= y && 0 <= S; y--, S--)
                    if (u[y] !== f[S]) {
                        if (y !== 1 || S !== 1)
                            do
                                if ((y--, S--, 0 > S || u[y] !== f[S])) {
                                    var k =
                                        `
` + u[y].replace(" at new ", " at ");
                                    return (
                                        e.displayName &&
                                            k.includes("<anonymous>") &&
                                            (k = k.replace(
                                                "<anonymous>",
                                                e.displayName,
                                            )),
                                        k
                                    );
                                }
                            while (1 <= y && 0 <= S);
                        break;
                    }
            }
        } finally {
            ((ue = !1), (Error.prepareStackTrace = i));
        }
        return (e = e ? e.displayName || e.name : "") ? U(e) : "";
    }
    function pe(e) {
        switch (e.tag) {
            case 5:
                return U(e.type);
            case 16:
                return U("Lazy");
            case 13:
                return U("Suspense");
            case 19:
                return U("SuspenseList");
            case 0:
            case 2:
            case 15:
                return ((e = ce(e.type, !1)), e);
            case 11:
                return ((e = ce(e.type.render, !1)), e);
            case 1:
                return ((e = ce(e.type, !0)), e);
            default:
                return "";
        }
    }
    function me(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case E:
                return "Fragment";
            case L:
                return "Portal";
            case G:
                return "Profiler";
            case R:
                return "StrictMode";
            case le:
                return "Suspense";
            case ye:
                return "SuspenseList";
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case se:
                    return (e.displayName || "Context") + ".Consumer";
                case te:
                    return (e._context.displayName || "Context") + ".Provider";
                case xe:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = t.displayName || t.name || ""),
                            (e =
                                e !== ""
                                    ? "ForwardRef(" + e + ")"
                                    : "ForwardRef")),
                        e
                    );
                case ke:
                    return (
                        (t = e.displayName || null),
                        t !== null ? t : me(e.type) || "Memo"
                    );
                case fe:
                    ((t = e._payload), (e = e._init));
                    try {
                        return me(e(t));
                    } catch {}
            }
        return null;
    }
    function be(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return (
                    (e = t.render),
                    (e = e.displayName || e.name || ""),
                    t.displayName ||
                        (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
                );
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return me(t);
            case 8:
                return t === R ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function")
                    return t.displayName || t.name || null;
                if (typeof t == "string") return t;
        }
        return null;
    }
    function we(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function Ee(e) {
        var t = e.type;
        return (
            (e = e.nodeName) &&
            e.toLowerCase() === "input" &&
            (t === "checkbox" || t === "radio")
        );
    }
    function ct(e) {
        var t = Ee(e) ? "checked" : "value",
            i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            o = "" + e[t];
        if (
            !e.hasOwnProperty(t) &&
            typeof i < "u" &&
            typeof i.get == "function" &&
            typeof i.set == "function"
        ) {
            var u = i.get,
                f = i.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return u.call(this);
                    },
                    set: function (y) {
                        ((o = "" + y), f.call(this, y));
                    },
                }),
                Object.defineProperty(e, t, { enumerable: i.enumerable }),
                {
                    getValue: function () {
                        return o;
                    },
                    setValue: function (y) {
                        o = "" + y;
                    },
                    stopTracking: function () {
                        ((e._valueTracker = null), delete e[t]);
                    },
                }
            );
        }
    }
    function Oi(e) {
        e._valueTracker || (e._valueTracker = ct(e));
    }
    function nc(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var i = t.getValue(),
            o = "";
        return (
            e && (o = Ee(e) ? (e.checked ? "true" : "false") : e.value),
            (e = o),
            e !== i ? (t.setValue(e), !0) : !1
        );
    }
    function Ii(e) {
        if (
            ((e = e || (typeof document < "u" ? document : void 0)),
            typeof e > "u")
        )
            return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    function Mo(e, t) {
        var i = t.checked;
        return X({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: i ?? e._wrapperState.initialChecked,
        });
    }
    function rc(e, t) {
        var i = t.defaultValue == null ? "" : t.defaultValue,
            o = t.checked != null ? t.checked : t.defaultChecked;
        ((i = we(t.value != null ? t.value : i)),
            (e._wrapperState = {
                initialChecked: o,
                initialValue: i,
                controlled:
                    t.type === "checkbox" || t.type === "radio"
                        ? t.checked != null
                        : t.value != null,
            }));
    }
    function ic(e, t) {
        ((t = t.checked), t != null && M(e, "checked", t, !1));
    }
    function Do(e, t) {
        ic(e, t);
        var i = we(t.value),
            o = t.type;
        if (i != null)
            o === "number"
                ? ((i === 0 && e.value === "") || e.value != i) &&
                  (e.value = "" + i)
                : e.value !== "" + i && (e.value = "" + i);
        else if (o === "submit" || o === "reset") {
            e.removeAttribute("value");
            return;
        }
        (t.hasOwnProperty("value")
            ? Ro(e, t.type, i)
            : t.hasOwnProperty("defaultValue") &&
              Ro(e, t.type, we(t.defaultValue)),
            t.checked == null &&
                t.defaultChecked != null &&
                (e.defaultChecked = !!t.defaultChecked));
    }
    function sc(e, t, i) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type;
            if (
                !(
                    (o !== "submit" && o !== "reset") ||
                    (t.value !== void 0 && t.value !== null)
                )
            )
                return;
            ((t = "" + e._wrapperState.initialValue),
                i || t === e.value || (e.value = t),
                (e.defaultValue = t));
        }
        ((i = e.name),
            i !== "" && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            i !== "" && (e.name = i));
    }
    function Ro(e, t, i) {
        (t !== "number" || Ii(e.ownerDocument) !== e) &&
            (i == null
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
    }
    var Mr = Array.isArray;
    function Hn(e, t, i, o) {
        if (((e = e.options), t)) {
            t = {};
            for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
            for (i = 0; i < e.length; i++)
                ((u = t.hasOwnProperty("$" + e[i].value)),
                    e[i].selected !== u && (e[i].selected = u),
                    u && o && (e[i].defaultSelected = !0));
        } else {
            for (i = "" + we(i), t = null, u = 0; u < e.length; u++) {
                if (e[u].value === i) {
                    ((e[u].selected = !0), o && (e[u].defaultSelected = !0));
                    return;
                }
                t !== null || e[u].disabled || (t = e[u]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Ao(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return X({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
        });
    }
    function oc(e, t) {
        var i = t.value;
        if (i == null) {
            if (((i = t.children), (t = t.defaultValue), i != null)) {
                if (t != null) throw Error(s(92));
                if (Mr(i)) {
                    if (1 < i.length) throw Error(s(93));
                    i = i[0];
                }
                t = i;
            }
            (t == null && (t = ""), (i = t));
        }
        e._wrapperState = { initialValue: we(i) };
    }
    function ac(e, t) {
        var i = we(t.value),
            o = we(t.defaultValue);
        (i != null &&
            ((i = "" + i),
            i !== e.value && (e.value = i),
            t.defaultValue == null &&
                e.defaultValue !== i &&
                (e.defaultValue = i)),
            o != null && (e.defaultValue = "" + o));
    }
    function lc(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
            t !== "" &&
            t !== null &&
            (e.value = t);
    }
    function uc(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function zo(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
            ? uc(t)
            : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
              ? "http://www.w3.org/1999/xhtml"
              : e;
    }
    var Bi,
        cc = (function (e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (t, i, o, u) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(t, i, o, u);
                      });
                  }
                : e;
        })(function (e, t) {
            if (
                e.namespaceURI !== "http://www.w3.org/2000/svg" ||
                "innerHTML" in e
            )
                e.innerHTML = t;
            else {
                for (
                    Bi = Bi || document.createElement("div"),
                        Bi.innerHTML =
                            "<svg>" + t.valueOf().toString() + "</svg>",
                        t = Bi.firstChild;
                    e.firstChild;
                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        });
    function Dr(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Rr = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
        },
        Yg = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Rr).forEach(function (e) {
        Yg.forEach(function (t) {
            ((t = t + e.charAt(0).toUpperCase() + e.substring(1)),
                (Rr[t] = Rr[e]));
        });
    });
    function dc(e, t, i) {
        return t == null || typeof t == "boolean" || t === ""
            ? ""
            : i ||
                typeof t != "number" ||
                t === 0 ||
                (Rr.hasOwnProperty(e) && Rr[e])
              ? ("" + t).trim()
              : t + "px";
    }
    function fc(e, t) {
        e = e.style;
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var o = i.indexOf("--") === 0,
                    u = dc(i, t[i], o);
                (i === "float" && (i = "cssFloat"),
                    o ? e.setProperty(i, u) : (e[i] = u));
            }
    }
    var Xg = X(
        { menuitem: !0 },
        {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
        },
    );
    function _o(e, t) {
        if (t) {
            if (
                Xg[e] &&
                (t.children != null || t.dangerouslySetInnerHTML != null)
            )
                throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (
                    typeof t.dangerouslySetInnerHTML != "object" ||
                    !("__html" in t.dangerouslySetInnerHTML)
                )
                    throw Error(s(61));
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(s(62));
        }
    }
    function Lo(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var Vo = null;
    function Fo(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var Oo = null,
        Kn = null,
        Gn = null;
    function hc(e) {
        if ((e = ei(e))) {
            if (typeof Oo != "function") throw Error(s(280));
            var t = e.stateNode;
            t && ((t = cs(t)), Oo(e.stateNode, e.type, t));
        }
    }
    function pc(e) {
        Kn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Kn = e);
    }
    function mc() {
        if (Kn) {
            var e = Kn,
                t = Gn;
            if (((Gn = Kn = null), hc(e), t))
                for (e = 0; e < t.length; e++) hc(t[e]);
        }
    }
    function gc(e, t) {
        return e(t);
    }
    function yc() {}
    var Io = !1;
    function vc(e, t, i) {
        if (Io) return e(t, i);
        Io = !0;
        try {
            return gc(e, t, i);
        } finally {
            ((Io = !1), (Kn !== null || Gn !== null) && (yc(), mc()));
        }
    }
    function Ar(e, t) {
        var i = e.stateNode;
        if (i === null) return null;
        var o = cs(i);
        if (o === null) return null;
        i = o[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                ((o = !o.disabled) ||
                    ((e = e.type),
                    (o = !(
                        e === "button" ||
                        e === "input" ||
                        e === "select" ||
                        e === "textarea"
                    ))),
                    (e = !o));
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (i && typeof i != "function") throw Error(s(231, t, typeof i));
        return i;
    }
    var Bo = !1;
    if (h)
        try {
            var zr = {};
            (Object.defineProperty(zr, "passive", {
                get: function () {
                    Bo = !0;
                },
            }),
                window.addEventListener("test", zr, zr),
                window.removeEventListener("test", zr, zr));
        } catch {
            Bo = !1;
        }
    function qg(e, t, i, o, u, f, y, S, k) {
        var F = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(i, F);
        } catch ($) {
            this.onError($);
        }
    }
    var _r = !1,
        Ui = null,
        Wi = !1,
        Uo = null,
        Qg = {
            onError: function (e) {
                ((_r = !0), (Ui = e));
            },
        };
    function Zg(e, t, i, o, u, f, y, S, k) {
        ((_r = !1), (Ui = null), qg.apply(Qg, arguments));
    }
    function Jg(e, t, i, o, u, f, y, S, k) {
        if ((Zg.apply(this, arguments), _r)) {
            if (_r) {
                var F = Ui;
                ((_r = !1), (Ui = null));
            } else throw Error(s(198));
            Wi || ((Wi = !0), (Uo = F));
        }
    }
    function Pn(e) {
        var t = e,
            i = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do
                ((t = e),
                    (t.flags & 4098) !== 0 && (i = t.return),
                    (e = t.return));
            while (e);
        }
        return t.tag === 3 ? i : null;
    }
    function xc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (
                (t === null &&
                    ((e = e.alternate), e !== null && (t = e.memoizedState)),
                t !== null)
            )
                return t.dehydrated;
        }
        return null;
    }
    function wc(e) {
        if (Pn(e) !== e) throw Error(s(188));
    }
    function e0(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = Pn(e)), t === null)) throw Error(s(188));
            return t !== e ? null : e;
        }
        for (var i = e, o = t; ; ) {
            var u = i.return;
            if (u === null) break;
            var f = u.alternate;
            if (f === null) {
                if (((o = u.return), o !== null)) {
                    i = o;
                    continue;
                }
                break;
            }
            if (u.child === f.child) {
                for (f = u.child; f; ) {
                    if (f === i) return (wc(u), e);
                    if (f === o) return (wc(u), t);
                    f = f.sibling;
                }
                throw Error(s(188));
            }
            if (i.return !== o.return) ((i = u), (o = f));
            else {
                for (var y = !1, S = u.child; S; ) {
                    if (S === i) {
                        ((y = !0), (i = u), (o = f));
                        break;
                    }
                    if (S === o) {
                        ((y = !0), (o = u), (i = f));
                        break;
                    }
                    S = S.sibling;
                }
                if (!y) {
                    for (S = f.child; S; ) {
                        if (S === i) {
                            ((y = !0), (i = f), (o = u));
                            break;
                        }
                        if (S === o) {
                            ((y = !0), (o = f), (i = u));
                            break;
                        }
                        S = S.sibling;
                    }
                    if (!y) throw Error(s(189));
                }
            }
            if (i.alternate !== o) throw Error(s(190));
        }
        if (i.tag !== 3) throw Error(s(188));
        return i.stateNode.current === i ? e : t;
    }
    function Sc(e) {
        return ((e = e0(e)), e !== null ? bc(e) : null);
    }
    function bc(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
            var t = bc(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var kc = r.unstable_scheduleCallback,
        Cc = r.unstable_cancelCallback,
        t0 = r.unstable_shouldYield,
        n0 = r.unstable_requestPaint,
        _e = r.unstable_now,
        r0 = r.unstable_getCurrentPriorityLevel,
        Wo = r.unstable_ImmediatePriority,
        jc = r.unstable_UserBlockingPriority,
        $i = r.unstable_NormalPriority,
        i0 = r.unstable_LowPriority,
        Pc = r.unstable_IdlePriority,
        Hi = null,
        zt = null;
    function s0(e) {
        if (zt && typeof zt.onCommitFiberRoot == "function")
            try {
                zt.onCommitFiberRoot(
                    Hi,
                    e,
                    void 0,
                    (e.current.flags & 128) === 128,
                );
            } catch {}
    }
    var Pt = Math.clz32 ? Math.clz32 : l0,
        o0 = Math.log,
        a0 = Math.LN2;
    function l0(e) {
        return ((e >>>= 0), e === 0 ? 32 : (31 - ((o0(e) / a0) | 0)) | 0);
    }
    var Ki = 64,
        Gi = 4194304;
    function Lr(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e;
        }
    }
    function Yi(e, t) {
        var i = e.pendingLanes;
        if (i === 0) return 0;
        var o = 0,
            u = e.suspendedLanes,
            f = e.pingedLanes,
            y = i & 268435455;
        if (y !== 0) {
            var S = y & ~u;
            S !== 0 ? (o = Lr(S)) : ((f &= y), f !== 0 && (o = Lr(f)));
        } else ((y = i & ~u), y !== 0 ? (o = Lr(y)) : f !== 0 && (o = Lr(f)));
        if (o === 0) return 0;
        if (
            t !== 0 &&
            t !== o &&
            (t & u) === 0 &&
            ((u = o & -o),
            (f = t & -t),
            u >= f || (u === 16 && (f & 4194240) !== 0))
        )
            return t;
        if (((o & 4) !== 0 && (o |= i & 16), (t = e.entangledLanes), t !== 0))
            for (e = e.entanglements, t &= o; 0 < t; )
                ((i = 31 - Pt(t)), (u = 1 << i), (o |= e[i]), (t &= ~u));
        return o;
    }
    function u0(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function c0(e, t) {
        for (
            var i = e.suspendedLanes,
                o = e.pingedLanes,
                u = e.expirationTimes,
                f = e.pendingLanes;
            0 < f;
        ) {
            var y = 31 - Pt(f),
                S = 1 << y,
                k = u[y];
            (k === -1
                ? ((S & i) === 0 || (S & o) !== 0) && (u[y] = u0(S, t))
                : k <= t && (e.expiredLanes |= S),
                (f &= ~S));
        }
    }
    function $o(e) {
        return (
            (e = e.pendingLanes & -1073741825),
            e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        );
    }
    function Tc() {
        var e = Ki;
        return ((Ki <<= 1), (Ki & 4194240) === 0 && (Ki = 64), e);
    }
    function Ho(e) {
        for (var t = [], i = 0; 31 > i; i++) t.push(e);
        return t;
    }
    function Vr(e, t, i) {
        ((e.pendingLanes |= t),
            t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            (e = e.eventTimes),
            (t = 31 - Pt(t)),
            (e[t] = i));
    }
    function d0(e, t) {
        var i = e.pendingLanes & ~t;
        ((e.pendingLanes = t),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= t),
            (e.mutableReadLanes &= t),
            (e.entangledLanes &= t),
            (t = e.entanglements));
        var o = e.eventTimes;
        for (e = e.expirationTimes; 0 < i; ) {
            var u = 31 - Pt(i),
                f = 1 << u;
            ((t[u] = 0), (o[u] = -1), (e[u] = -1), (i &= ~f));
        }
    }
    function Ko(e, t) {
        var i = (e.entangledLanes |= t);
        for (e = e.entanglements; i; ) {
            var o = 31 - Pt(i),
                u = 1 << o;
            ((u & t) | (e[o] & t) && (e[o] |= t), (i &= ~u));
        }
    }
    var Se = 0;
    function Ec(e) {
        return (
            (e &= -e),
            1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
        );
    }
    var Nc,
        Go,
        Mc,
        Dc,
        Rc,
        Yo = !1,
        Xi = [],
        en = null,
        tn = null,
        nn = null,
        Fr = new Map(),
        Or = new Map(),
        rn = [],
        f0 =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " ",
            );
    function Ac(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                en = null;
                break;
            case "dragenter":
            case "dragleave":
                tn = null;
                break;
            case "mouseover":
            case "mouseout":
                nn = null;
                break;
            case "pointerover":
            case "pointerout":
                Fr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Or.delete(t.pointerId);
        }
    }
    function Ir(e, t, i, o, u, f) {
        return e === null || e.nativeEvent !== f
            ? ((e = {
                  blockedOn: t,
                  domEventName: i,
                  eventSystemFlags: o,
                  nativeEvent: f,
                  targetContainers: [u],
              }),
              t !== null && ((t = ei(t)), t !== null && Go(t)),
              e)
            : ((e.eventSystemFlags |= o),
              (t = e.targetContainers),
              u !== null && t.indexOf(u) === -1 && t.push(u),
              e);
    }
    function h0(e, t, i, o, u) {
        switch (t) {
            case "focusin":
                return ((en = Ir(en, e, t, i, o, u)), !0);
            case "dragenter":
                return ((tn = Ir(tn, e, t, i, o, u)), !0);
            case "mouseover":
                return ((nn = Ir(nn, e, t, i, o, u)), !0);
            case "pointerover":
                var f = u.pointerId;
                return (Fr.set(f, Ir(Fr.get(f) || null, e, t, i, o, u)), !0);
            case "gotpointercapture":
                return (
                    (f = u.pointerId),
                    Or.set(f, Ir(Or.get(f) || null, e, t, i, o, u)),
                    !0
                );
        }
        return !1;
    }
    function zc(e) {
        var t = Tn(e.target);
        if (t !== null) {
            var i = Pn(t);
            if (i !== null) {
                if (((t = i.tag), t === 13)) {
                    if (((t = xc(i)), t !== null)) {
                        ((e.blockedOn = t),
                            Rc(e.priority, function () {
                                Mc(i);
                            }));
                        return;
                    }
                } else if (
                    t === 3 &&
                    i.stateNode.current.memoizedState.isDehydrated
                ) {
                    e.blockedOn =
                        i.tag === 3 ? i.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function qi(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var i = qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var o = new i.constructor(i.type, i);
                ((Vo = o), i.target.dispatchEvent(o), (Vo = null));
            } else
                return (
                    (t = ei(i)),
                    t !== null && Go(t),
                    (e.blockedOn = i),
                    !1
                );
            t.shift();
        }
        return !0;
    }
    function _c(e, t, i) {
        qi(e) && i.delete(t);
    }
    function p0() {
        ((Yo = !1),
            en !== null && qi(en) && (en = null),
            tn !== null && qi(tn) && (tn = null),
            nn !== null && qi(nn) && (nn = null),
            Fr.forEach(_c),
            Or.forEach(_c));
    }
    function Br(e, t) {
        e.blockedOn === t &&
            ((e.blockedOn = null),
            Yo ||
                ((Yo = !0),
                r.unstable_scheduleCallback(r.unstable_NormalPriority, p0)));
    }
    function Ur(e) {
        function t(u) {
            return Br(u, e);
        }
        if (0 < Xi.length) {
            Br(Xi[0], e);
            for (var i = 1; i < Xi.length; i++) {
                var o = Xi[i];
                o.blockedOn === e && (o.blockedOn = null);
            }
        }
        for (
            en !== null && Br(en, e),
                tn !== null && Br(tn, e),
                nn !== null && Br(nn, e),
                Fr.forEach(t),
                Or.forEach(t),
                i = 0;
            i < rn.length;
            i++
        )
            ((o = rn[i]), o.blockedOn === e && (o.blockedOn = null));
        for (; 0 < rn.length && ((i = rn[0]), i.blockedOn === null); )
            (zc(i), i.blockedOn === null && rn.shift());
    }
    var Yn = V.ReactCurrentBatchConfig,
        Qi = !0;
    function m0(e, t, i, o) {
        var u = Se,
            f = Yn.transition;
        Yn.transition = null;
        try {
            ((Se = 1), Xo(e, t, i, o));
        } finally {
            ((Se = u), (Yn.transition = f));
        }
    }
    function g0(e, t, i, o) {
        var u = Se,
            f = Yn.transition;
        Yn.transition = null;
        try {
            ((Se = 4), Xo(e, t, i, o));
        } finally {
            ((Se = u), (Yn.transition = f));
        }
    }
    function Xo(e, t, i, o) {
        if (Qi) {
            var u = qo(e, t, i, o);
            if (u === null) (ha(e, t, o, Zi, i), Ac(e, o));
            else if (h0(u, e, t, i, o)) o.stopPropagation();
            else if ((Ac(e, o), t & 4 && -1 < f0.indexOf(e))) {
                for (; u !== null; ) {
                    var f = ei(u);
                    if (
                        (f !== null && Nc(f),
                        (f = qo(e, t, i, o)),
                        f === null && ha(e, t, o, Zi, i),
                        f === u)
                    )
                        break;
                    u = f;
                }
                u !== null && o.stopPropagation();
            } else ha(e, t, o, null, i);
        }
    }
    var Zi = null;
    function qo(e, t, i, o) {
        if (((Zi = null), (e = Fo(o)), (e = Tn(e)), e !== null))
            if (((t = Pn(e)), t === null)) e = null;
            else if (((i = t.tag), i === 13)) {
                if (((e = xc(t)), e !== null)) return e;
                e = null;
            } else if (i === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        return ((Zi = e), null);
    }
    function Lc(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (r0()) {
                    case Wo:
                        return 1;
                    case jc:
                        return 4;
                    case $i:
                    case i0:
                        return 16;
                    case Pc:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var sn = null,
        Qo = null,
        Ji = null;
    function Vc() {
        if (Ji) return Ji;
        var e,
            t = Qo,
            i = t.length,
            o,
            u = "value" in sn ? sn.value : sn.textContent,
            f = u.length;
        for (e = 0; e < i && t[e] === u[e]; e++);
        var y = i - e;
        for (o = 1; o <= y && t[i - o] === u[f - o]; o++);
        return (Ji = u.slice(e, 1 < o ? 1 - o : void 0));
    }
    function es(e) {
        var t = e.keyCode;
        return (
            "charCode" in e
                ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
                : (e = t),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function ts() {
        return !0;
    }
    function Fc() {
        return !1;
    }
    function dt(e) {
        function t(i, o, u, f, y) {
            ((this._reactName = i),
                (this._targetInst = u),
                (this.type = o),
                (this.nativeEvent = f),
                (this.target = y),
                (this.currentTarget = null));
            for (var S in e)
                e.hasOwnProperty(S) &&
                    ((i = e[S]), (this[S] = i ? i(f) : f[S]));
            return (
                (this.isDefaultPrevented = (
                    f.defaultPrevented != null
                        ? f.defaultPrevented
                        : f.returnValue === !1
                )
                    ? ts
                    : Fc),
                (this.isPropagationStopped = Fc),
                this
            );
        }
        return (
            X(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var i = this.nativeEvent;
                    i &&
                        (i.preventDefault
                            ? i.preventDefault()
                            : typeof i.returnValue != "unknown" &&
                              (i.returnValue = !1),
                        (this.isDefaultPrevented = ts));
                },
                stopPropagation: function () {
                    var i = this.nativeEvent;
                    i &&
                        (i.stopPropagation
                            ? i.stopPropagation()
                            : typeof i.cancelBubble != "unknown" &&
                              (i.cancelBubble = !0),
                        (this.isPropagationStopped = ts));
                },
                persist: function () {},
                isPersistent: ts,
            }),
            t
        );
    }
    var Xn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Zo = dt(Xn),
        Wr = X({}, Xn, { view: 0, detail: 0 }),
        y0 = dt(Wr),
        Jo,
        ea,
        $r,
        ns = X({}, Wr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: na,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget;
            },
            movementX: function (e) {
                return "movementX" in e
                    ? e.movementX
                    : (e !== $r &&
                          ($r && e.type === "mousemove"
                              ? ((Jo = e.screenX - $r.screenX),
                                (ea = e.screenY - $r.screenY))
                              : (ea = Jo = 0),
                          ($r = e)),
                      Jo);
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : ea;
            },
        }),
        Oc = dt(ns),
        v0 = X({}, ns, { dataTransfer: 0 }),
        x0 = dt(v0),
        w0 = X({}, Wr, { relatedTarget: 0 }),
        ta = dt(w0),
        S0 = X({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        b0 = dt(S0),
        k0 = X({}, Xn, {
            clipboardData: function (e) {
                return "clipboardData" in e
                    ? e.clipboardData
                    : window.clipboardData;
            },
        }),
        C0 = dt(k0),
        j0 = X({}, Xn, { data: 0 }),
        Ic = dt(j0),
        P0 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
        },
        T0 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
        },
        E0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
        };
    function N0(e) {
        var t = this.nativeEvent;
        return t.getModifierState
            ? t.getModifierState(e)
            : (e = E0[e])
              ? !!t[e]
              : !1;
    }
    function na() {
        return N0;
    }
    var M0 = X({}, Wr, {
            key: function (e) {
                if (e.key) {
                    var t = P0[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress"
                    ? ((e = es(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                    : e.type === "keydown" || e.type === "keyup"
                      ? T0[e.keyCode] || "Unidentified"
                      : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: na,
            charCode: function (e) {
                return e.type === "keypress" ? es(e) : 0;
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
            },
            which: function (e) {
                return e.type === "keypress"
                    ? es(e)
                    : e.type === "keydown" || e.type === "keyup"
                      ? e.keyCode
                      : 0;
            },
        }),
        D0 = dt(M0),
        R0 = X({}, ns, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        Bc = dt(R0),
        A0 = X({}, Wr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: na,
        }),
        z0 = dt(A0),
        _0 = X({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        L0 = dt(_0),
        V0 = X({}, ns, {
            deltaX: function (e) {
                return "deltaX" in e
                    ? e.deltaX
                    : "wheelDeltaX" in e
                      ? -e.wheelDeltaX
                      : 0;
            },
            deltaY: function (e) {
                return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                      ? -e.wheelDeltaY
                      : "wheelDelta" in e
                        ? -e.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        F0 = dt(V0),
        O0 = [9, 13, 27, 32],
        ra = h && "CompositionEvent" in window,
        Hr = null;
    h && "documentMode" in document && (Hr = document.documentMode);
    var I0 = h && "TextEvent" in window && !Hr,
        Uc = h && (!ra || (Hr && 8 < Hr && 11 >= Hr)),
        Wc = " ",
        $c = !1;
    function Hc(e, t) {
        switch (e) {
            case "keyup":
                return O0.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function Kc(e) {
        return (
            (e = e.detail),
            typeof e == "object" && "data" in e ? e.data : null
        );
    }
    var qn = !1;
    function B0(e, t) {
        switch (e) {
            case "compositionend":
                return Kc(t);
            case "keypress":
                return t.which !== 32 ? null : (($c = !0), Wc);
            case "textInput":
                return ((e = t.data), e === Wc && $c ? null : e);
            default:
                return null;
        }
    }
    function U0(e, t) {
        if (qn)
            return e === "compositionend" || (!ra && Hc(e, t))
                ? ((e = Vc()), (Ji = Qo = sn = null), (qn = !1), e)
                : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                ) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return Uc && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var W0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    };
    function Gc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!W0[e.type] : t === "textarea";
    }
    function Yc(e, t, i, o) {
        (pc(o),
            (t = as(t, "onChange")),
            0 < t.length &&
                ((i = new Zo("onChange", "change", null, i, o)),
                e.push({ event: i, listeners: t })));
    }
    var Kr = null,
        Gr = null;
    function $0(e) {
        fd(e, 0);
    }
    function rs(e) {
        var t = tr(e);
        if (nc(t)) return e;
    }
    function H0(e, t) {
        if (e === "change") return t;
    }
    var Xc = !1;
    if (h) {
        var ia;
        if (h) {
            var sa = "oninput" in document;
            if (!sa) {
                var qc = document.createElement("div");
                (qc.setAttribute("oninput", "return;"),
                    (sa = typeof qc.oninput == "function"));
            }
            ia = sa;
        } else ia = !1;
        Xc = ia && (!document.documentMode || 9 < document.documentMode);
    }
    function Qc() {
        Kr && (Kr.detachEvent("onpropertychange", Zc), (Gr = Kr = null));
    }
    function Zc(e) {
        if (e.propertyName === "value" && rs(Gr)) {
            var t = [];
            (Yc(t, Gr, e, Fo(e)), vc($0, t));
        }
    }
    function K0(e, t, i) {
        e === "focusin"
            ? (Qc(), (Kr = t), (Gr = i), Kr.attachEvent("onpropertychange", Zc))
            : e === "focusout" && Qc();
    }
    function G0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return rs(Gr);
    }
    function Y0(e, t) {
        if (e === "click") return rs(t);
    }
    function X0(e, t) {
        if (e === "input" || e === "change") return rs(t);
    }
    function q0(e, t) {
        return (
            (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
        );
    }
    var Tt = typeof Object.is == "function" ? Object.is : q0;
    function Yr(e, t) {
        if (Tt(e, t)) return !0;
        if (
            typeof e != "object" ||
            e === null ||
            typeof t != "object" ||
            t === null
        )
            return !1;
        var i = Object.keys(e),
            o = Object.keys(t);
        if (i.length !== o.length) return !1;
        for (o = 0; o < i.length; o++) {
            var u = i[o];
            if (!m.call(t, u) || !Tt(e[u], t[u])) return !1;
        }
        return !0;
    }
    function Jc(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function ed(e, t) {
        var i = Jc(e);
        e = 0;
        for (var o; i; ) {
            if (i.nodeType === 3) {
                if (((o = e + i.textContent.length), e <= t && o >= t))
                    return { node: i, offset: t - e };
                e = o;
            }
            e: {
                for (; i; ) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e;
                    }
                    i = i.parentNode;
                }
                i = void 0;
            }
            i = Jc(i);
        }
    }
    function td(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? td(e, t.parentNode)
                    : "contains" in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1
            : !1;
    }
    function nd() {
        for (var e = window, t = Ii(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var i = typeof t.contentWindow.location.href == "string";
            } catch {
                i = !1;
            }
            if (i) e = t.contentWindow;
            else break;
            t = Ii(e.document);
        }
        return t;
    }
    function oa(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === "input" &&
                (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
                t === "textarea" ||
                e.contentEditable === "true")
        );
    }
    function Q0(e) {
        var t = nd(),
            i = e.focusedElem,
            o = e.selectionRange;
        if (
            t !== i &&
            i &&
            i.ownerDocument &&
            td(i.ownerDocument.documentElement, i)
        ) {
            if (o !== null && oa(i)) {
                if (
                    ((t = o.start),
                    (e = o.end),
                    e === void 0 && (e = t),
                    "selectionStart" in i)
                )
                    ((i.selectionStart = t),
                        (i.selectionEnd = Math.min(e, i.value.length)));
                else if (
                    ((e =
                        ((t = i.ownerDocument || document) && t.defaultView) ||
                        window),
                    e.getSelection)
                ) {
                    e = e.getSelection();
                    var u = i.textContent.length,
                        f = Math.min(o.start, u);
                    ((o = o.end === void 0 ? f : Math.min(o.end, u)),
                        !e.extend && f > o && ((u = o), (o = f), (f = u)),
                        (u = ed(i, f)));
                    var y = ed(i, o);
                    u &&
                        y &&
                        (e.rangeCount !== 1 ||
                            e.anchorNode !== u.node ||
                            e.anchorOffset !== u.offset ||
                            e.focusNode !== y.node ||
                            e.focusOffset !== y.offset) &&
                        ((t = t.createRange()),
                        t.setStart(u.node, u.offset),
                        e.removeAllRanges(),
                        f > o
                            ? (e.addRange(t), e.extend(y.node, y.offset))
                            : (t.setEnd(y.node, y.offset), e.addRange(t)));
                }
            }
            for (t = [], e = i; (e = e.parentNode); )
                e.nodeType === 1 &&
                    t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop,
                    });
            for (
                typeof i.focus == "function" && i.focus(), i = 0;
                i < t.length;
                i++
            )
                ((e = t[i]),
                    (e.element.scrollLeft = e.left),
                    (e.element.scrollTop = e.top));
        }
    }
    var Z0 = h && "documentMode" in document && 11 >= document.documentMode,
        Qn = null,
        aa = null,
        Xr = null,
        la = !1;
    function rd(e, t, i) {
        var o =
            i.window === i
                ? i.document
                : i.nodeType === 9
                  ? i
                  : i.ownerDocument;
        la ||
            Qn == null ||
            Qn !== Ii(o) ||
            ((o = Qn),
            "selectionStart" in o && oa(o)
                ? (o = { start: o.selectionStart, end: o.selectionEnd })
                : ((o = (
                      (o.ownerDocument && o.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (o = {
                      anchorNode: o.anchorNode,
                      anchorOffset: o.anchorOffset,
                      focusNode: o.focusNode,
                      focusOffset: o.focusOffset,
                  })),
            (Xr && Yr(Xr, o)) ||
                ((Xr = o),
                (o = as(aa, "onSelect")),
                0 < o.length &&
                    ((t = new Zo("onSelect", "select", null, t, i)),
                    e.push({ event: t, listeners: o }),
                    (t.target = Qn))));
    }
    function is(e, t) {
        var i = {};
        return (
            (i[e.toLowerCase()] = t.toLowerCase()),
            (i["Webkit" + e] = "webkit" + t),
            (i["Moz" + e] = "moz" + t),
            i
        );
    }
    var Zn = {
            animationend: is("Animation", "AnimationEnd"),
            animationiteration: is("Animation", "AnimationIteration"),
            animationstart: is("Animation", "AnimationStart"),
            transitionend: is("Transition", "TransitionEnd"),
        },
        ua = {},
        id = {};
    h &&
        ((id = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete Zn.animationend.animation,
            delete Zn.animationiteration.animation,
            delete Zn.animationstart.animation),
        "TransitionEvent" in window || delete Zn.transitionend.transition);
    function ss(e) {
        if (ua[e]) return ua[e];
        if (!Zn[e]) return e;
        var t = Zn[e],
            i;
        for (i in t) if (t.hasOwnProperty(i) && i in id) return (ua[e] = t[i]);
        return e;
    }
    var sd = ss("animationend"),
        od = ss("animationiteration"),
        ad = ss("animationstart"),
        ld = ss("transitionend"),
        ud = new Map(),
        cd =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " ",
            );
    function on(e, t) {
        (ud.set(e, t), d(t, [e]));
    }
    for (var ca = 0; ca < cd.length; ca++) {
        var da = cd[ca],
            J0 = da.toLowerCase(),
            ey = da[0].toUpperCase() + da.slice(1);
        on(J0, "on" + ey);
    }
    (on(sd, "onAnimationEnd"),
        on(od, "onAnimationIteration"),
        on(ad, "onAnimationStart"),
        on("dblclick", "onDoubleClick"),
        on("focusin", "onFocus"),
        on("focusout", "onBlur"),
        on(ld, "onTransitionEnd"),
        c("onMouseEnter", ["mouseout", "mouseover"]),
        c("onMouseLeave", ["mouseout", "mouseover"]),
        c("onPointerEnter", ["pointerout", "pointerover"]),
        c("onPointerLeave", ["pointerout", "pointerover"]),
        d(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " ",
            ),
        ),
        d(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " ",
            ),
        ),
        d("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
        ]),
        d(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
                " ",
            ),
        ),
        d(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
                " ",
            ),
        ),
        d(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
                " ",
            ),
        ));
    var qr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " ",
            ),
        ty = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(qr),
        );
    function dd(e, t, i) {
        var o = e.type || "unknown-event";
        ((e.currentTarget = i), Jg(o, t, void 0, e), (e.currentTarget = null));
    }
    function fd(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var o = e[i],
                u = o.event;
            o = o.listeners;
            e: {
                var f = void 0;
                if (t)
                    for (var y = o.length - 1; 0 <= y; y--) {
                        var S = o[y],
                            k = S.instance,
                            F = S.currentTarget;
                        if (
                            ((S = S.listener),
                            k !== f && u.isPropagationStopped())
                        )
                            break e;
                        (dd(u, S, F), (f = k));
                    }
                else
                    for (y = 0; y < o.length; y++) {
                        if (
                            ((S = o[y]),
                            (k = S.instance),
                            (F = S.currentTarget),
                            (S = S.listener),
                            k !== f && u.isPropagationStopped())
                        )
                            break e;
                        (dd(u, S, F), (f = k));
                    }
            }
        }
        if (Wi) throw ((e = Uo), (Wi = !1), (Uo = null), e);
    }
    function je(e, t) {
        var i = t[xa];
        i === void 0 && (i = t[xa] = new Set());
        var o = e + "__bubble";
        i.has(o) || (hd(t, e, 2, !1), i.add(o));
    }
    function fa(e, t, i) {
        var o = 0;
        (t && (o |= 4), hd(i, e, o, t));
    }
    var os = "_reactListening" + Math.random().toString(36).slice(2);
    function Qr(e) {
        if (!e[os]) {
            ((e[os] = !0),
                a.forEach(function (i) {
                    i !== "selectionchange" &&
                        (ty.has(i) || fa(i, !1, e), fa(i, !0, e));
                }));
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[os] || ((t[os] = !0), fa("selectionchange", !1, t));
        }
    }
    function hd(e, t, i, o) {
        switch (Lc(t)) {
            case 1:
                var u = m0;
                break;
            case 4:
                u = g0;
                break;
            default:
                u = Xo;
        }
        ((i = u.bind(null, t, i, e)),
            (u = void 0),
            !Bo ||
                (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
                (u = !0),
            o
                ? u !== void 0
                    ? e.addEventListener(t, i, { capture: !0, passive: u })
                    : e.addEventListener(t, i, !0)
                : u !== void 0
                  ? e.addEventListener(t, i, { passive: u })
                  : e.addEventListener(t, i, !1));
    }
    function ha(e, t, i, o, u) {
        var f = o;
        if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
            e: for (;;) {
                if (o === null) return;
                var y = o.tag;
                if (y === 3 || y === 4) {
                    var S = o.stateNode.containerInfo;
                    if (S === u || (S.nodeType === 8 && S.parentNode === u))
                        break;
                    if (y === 4)
                        for (y = o.return; y !== null; ) {
                            var k = y.tag;
                            if (
                                (k === 3 || k === 4) &&
                                ((k = y.stateNode.containerInfo),
                                k === u ||
                                    (k.nodeType === 8 && k.parentNode === u))
                            )
                                return;
                            y = y.return;
                        }
                    for (; S !== null; ) {
                        if (((y = Tn(S)), y === null)) return;
                        if (((k = y.tag), k === 5 || k === 6)) {
                            o = f = y;
                            continue e;
                        }
                        S = S.parentNode;
                    }
                }
                o = o.return;
            }
        vc(function () {
            var F = f,
                $ = Fo(i),
                H = [];
            e: {
                var W = ud.get(e);
                if (W !== void 0) {
                    var q = Zo,
                        J = e;
                    switch (e) {
                        case "keypress":
                            if (es(i) === 0) break e;
                        case "keydown":
                        case "keyup":
                            q = D0;
                            break;
                        case "focusin":
                            ((J = "focus"), (q = ta));
                            break;
                        case "focusout":
                            ((J = "blur"), (q = ta));
                            break;
                        case "beforeblur":
                        case "afterblur":
                            q = ta;
                            break;
                        case "click":
                            if (i.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            q = Oc;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            q = x0;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            q = z0;
                            break;
                        case sd:
                        case od:
                        case ad:
                            q = b0;
                            break;
                        case ld:
                            q = L0;
                            break;
                        case "scroll":
                            q = y0;
                            break;
                        case "wheel":
                            q = F0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            q = C0;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            q = Bc;
                    }
                    var ee = (t & 4) !== 0,
                        Le = !ee && e === "scroll",
                        A = ee ? (W !== null ? W + "Capture" : null) : W;
                    ee = [];
                    for (var P = F, _; P !== null; ) {
                        _ = P;
                        var Y = _.stateNode;
                        if (
                            (_.tag === 5 &&
                                Y !== null &&
                                ((_ = Y),
                                A !== null &&
                                    ((Y = Ar(P, A)),
                                    Y != null && ee.push(Zr(P, Y, _)))),
                            Le)
                        )
                            break;
                        P = P.return;
                    }
                    0 < ee.length &&
                        ((W = new q(W, J, null, i, $)),
                        H.push({ event: W, listeners: ee }));
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (
                        ((W = e === "mouseover" || e === "pointerover"),
                        (q = e === "mouseout" || e === "pointerout"),
                        W &&
                            i !== Vo &&
                            (J = i.relatedTarget || i.fromElement) &&
                            (Tn(J) || J[Wt]))
                    )
                        break e;
                    if (
                        (q || W) &&
                        ((W =
                            $.window === $
                                ? $
                                : (W = $.ownerDocument)
                                  ? W.defaultView || W.parentWindow
                                  : window),
                        q
                            ? ((J = i.relatedTarget || i.toElement),
                              (q = F),
                              (J = J ? Tn(J) : null),
                              J !== null &&
                                  ((Le = Pn(J)),
                                  J !== Le || (J.tag !== 5 && J.tag !== 6)) &&
                                  (J = null))
                            : ((q = null), (J = F)),
                        q !== J)
                    ) {
                        if (
                            ((ee = Oc),
                            (Y = "onMouseLeave"),
                            (A = "onMouseEnter"),
                            (P = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                                ((ee = Bc),
                                (Y = "onPointerLeave"),
                                (A = "onPointerEnter"),
                                (P = "pointer")),
                            (Le = q == null ? W : tr(q)),
                            (_ = J == null ? W : tr(J)),
                            (W = new ee(Y, P + "leave", q, i, $)),
                            (W.target = Le),
                            (W.relatedTarget = _),
                            (Y = null),
                            Tn($) === F &&
                                ((ee = new ee(A, P + "enter", J, i, $)),
                                (ee.target = _),
                                (ee.relatedTarget = Le),
                                (Y = ee)),
                            (Le = Y),
                            q && J)
                        )
                            t: {
                                for (ee = q, A = J, P = 0, _ = ee; _; _ = Jn(_))
                                    P++;
                                for (_ = 0, Y = A; Y; Y = Jn(Y)) _++;
                                for (; 0 < P - _; ) ((ee = Jn(ee)), P--);
                                for (; 0 < _ - P; ) ((A = Jn(A)), _--);
                                for (; P--; ) {
                                    if (
                                        ee === A ||
                                        (A !== null && ee === A.alternate)
                                    )
                                        break t;
                                    ((ee = Jn(ee)), (A = Jn(A)));
                                }
                                ee = null;
                            }
                        else ee = null;
                        (q !== null && pd(H, W, q, ee, !1),
                            J !== null && Le !== null && pd(H, Le, J, ee, !0));
                    }
                }
                e: {
                    if (
                        ((W = F ? tr(F) : window),
                        (q = W.nodeName && W.nodeName.toLowerCase()),
                        q === "select" || (q === "input" && W.type === "file"))
                    )
                        var ne = H0;
                    else if (Gc(W))
                        if (Xc) ne = X0;
                        else {
                            ne = G0;
                            var re = K0;
                        }
                    else
                        (q = W.nodeName) &&
                            q.toLowerCase() === "input" &&
                            (W.type === "checkbox" || W.type === "radio") &&
                            (ne = Y0);
                    if (ne && (ne = ne(e, F))) {
                        Yc(H, ne, i, $);
                        break e;
                    }
                    (re && re(e, W, F),
                        e === "focusout" &&
                            (re = W._wrapperState) &&
                            re.controlled &&
                            W.type === "number" &&
                            Ro(W, "number", W.value));
                }
                switch (((re = F ? tr(F) : window), e)) {
                    case "focusin":
                        (Gc(re) || re.contentEditable === "true") &&
                            ((Qn = re), (aa = F), (Xr = null));
                        break;
                    case "focusout":
                        Xr = aa = Qn = null;
                        break;
                    case "mousedown":
                        la = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ((la = !1), rd(H, i, $));
                        break;
                    case "selectionchange":
                        if (Z0) break;
                    case "keydown":
                    case "keyup":
                        rd(H, i, $);
                }
                var ie;
                if (ra)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var ae = "onCompositionStart";
                                break e;
                            case "compositionend":
                                ae = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                ae = "onCompositionUpdate";
                                break e;
                        }
                        ae = void 0;
                    }
                else
                    qn
                        ? Hc(e, i) && (ae = "onCompositionEnd")
                        : e === "keydown" &&
                          i.keyCode === 229 &&
                          (ae = "onCompositionStart");
                (ae &&
                    (Uc &&
                        i.locale !== "ko" &&
                        (qn || ae !== "onCompositionStart"
                            ? ae === "onCompositionEnd" && qn && (ie = Vc())
                            : ((sn = $),
                              (Qo = "value" in sn ? sn.value : sn.textContent),
                              (qn = !0))),
                    (re = as(F, ae)),
                    0 < re.length &&
                        ((ae = new Ic(ae, e, null, i, $)),
                        H.push({ event: ae, listeners: re }),
                        ie
                            ? (ae.data = ie)
                            : ((ie = Kc(i)), ie !== null && (ae.data = ie)))),
                    (ie = I0 ? B0(e, i) : U0(e, i)) &&
                        ((F = as(F, "onBeforeInput")),
                        0 < F.length &&
                            (($ = new Ic(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                i,
                                $,
                            )),
                            H.push({ event: $, listeners: F }),
                            ($.data = ie))));
            }
            fd(H, t);
        });
    }
    function Zr(e, t, i) {
        return { instance: e, listener: t, currentTarget: i };
    }
    function as(e, t) {
        for (var i = t + "Capture", o = []; e !== null; ) {
            var u = e,
                f = u.stateNode;
            (u.tag === 5 &&
                f !== null &&
                ((u = f),
                (f = Ar(e, i)),
                f != null && o.unshift(Zr(e, f, u)),
                (f = Ar(e, t)),
                f != null && o.push(Zr(e, f, u))),
                (e = e.return));
        }
        return o;
    }
    function Jn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function pd(e, t, i, o, u) {
        for (var f = t._reactName, y = []; i !== null && i !== o; ) {
            var S = i,
                k = S.alternate,
                F = S.stateNode;
            if (k !== null && k === o) break;
            (S.tag === 5 &&
                F !== null &&
                ((S = F),
                u
                    ? ((k = Ar(i, f)), k != null && y.unshift(Zr(i, k, S)))
                    : u || ((k = Ar(i, f)), k != null && y.push(Zr(i, k, S)))),
                (i = i.return));
        }
        y.length !== 0 && e.push({ event: t, listeners: y });
    }
    var ny = /\r\n?/g,
        ry = /\u0000|\uFFFD/g;
    function md(e) {
        return (typeof e == "string" ? e : "" + e)
            .replace(
                ny,
                `
`,
            )
            .replace(ry, "");
    }
    function ls(e, t, i) {
        if (((t = md(t)), md(e) !== t && i)) throw Error(s(425));
    }
    function us() {}
    var pa = null,
        ma = null;
    function ga(e, t) {
        return (
            e === "textarea" ||
            e === "noscript" ||
            typeof t.children == "string" ||
            typeof t.children == "number" ||
            (typeof t.dangerouslySetInnerHTML == "object" &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var ya = typeof setTimeout == "function" ? setTimeout : void 0,
        iy = typeof clearTimeout == "function" ? clearTimeout : void 0,
        gd = typeof Promise == "function" ? Promise : void 0,
        sy =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof gd < "u"
                  ? function (e) {
                        return gd.resolve(null).then(e).catch(oy);
                    }
                  : ya;
    function oy(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function va(e, t) {
        var i = t,
            o = 0;
        do {
            var u = i.nextSibling;
            if ((e.removeChild(i), u && u.nodeType === 8))
                if (((i = u.data), i === "/$")) {
                    if (o === 0) {
                        (e.removeChild(u), Ur(t));
                        return;
                    }
                    o--;
                } else (i !== "$" && i !== "$?" && i !== "$!") || o++;
            i = u;
        } while (i);
        Ur(t);
    }
    function an(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (((t = e.data), t === "$" || t === "$!" || t === "$?"))
                    break;
                if (t === "/$") return null;
            }
        }
        return e;
    }
    function yd(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?") {
                    if (t === 0) return e;
                    t--;
                } else i === "/$" && t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var er = Math.random().toString(36).slice(2),
        _t = "__reactFiber$" + er,
        Jr = "__reactProps$" + er,
        Wt = "__reactContainer$" + er,
        xa = "__reactEvents$" + er,
        ay = "__reactListeners$" + er,
        ly = "__reactHandles$" + er;
    function Tn(e) {
        var t = e[_t];
        if (t) return t;
        for (var i = e.parentNode; i; ) {
            if ((t = i[Wt] || i[_t])) {
                if (
                    ((i = t.alternate),
                    t.child !== null || (i !== null && i.child !== null))
                )
                    for (e = yd(e); e !== null; ) {
                        if ((i = e[_t])) return i;
                        e = yd(e);
                    }
                return t;
            }
            ((e = i), (i = e.parentNode));
        }
        return null;
    }
    function ei(e) {
        return (
            (e = e[_t] || e[Wt]),
            !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
                ? null
                : e
        );
    }
    function tr(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33));
    }
    function cs(e) {
        return e[Jr] || null;
    }
    var wa = [],
        nr = -1;
    function ln(e) {
        return { current: e };
    }
    function Pe(e) {
        0 > nr || ((e.current = wa[nr]), (wa[nr] = null), nr--);
    }
    function Ce(e, t) {
        (nr++, (wa[nr] = e.current), (e.current = t));
    }
    var un = {},
        Xe = ln(un),
        rt = ln(!1),
        En = un;
    function rr(e, t) {
        var i = e.type.contextTypes;
        if (!i) return un;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
            return o.__reactInternalMemoizedMaskedChildContext;
        var u = {},
            f;
        for (f in i) u[f] = t[f];
        return (
            o &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = t),
                (e.__reactInternalMemoizedMaskedChildContext = u)),
            u
        );
    }
    function it(e) {
        return ((e = e.childContextTypes), e != null);
    }
    function ds() {
        (Pe(rt), Pe(Xe));
    }
    function vd(e, t, i) {
        if (Xe.current !== un) throw Error(s(168));
        (Ce(Xe, t), Ce(rt, i));
    }
    function xd(e, t, i) {
        var o = e.stateNode;
        if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
            return i;
        o = o.getChildContext();
        for (var u in o)
            if (!(u in t)) throw Error(s(108, be(e) || "Unknown", u));
        return X({}, i, o);
    }
    function fs(e) {
        return (
            (e =
                ((e = e.stateNode) &&
                    e.__reactInternalMemoizedMergedChildContext) ||
                un),
            (En = Xe.current),
            Ce(Xe, e),
            Ce(rt, rt.current),
            !0
        );
    }
    function wd(e, t, i) {
        var o = e.stateNode;
        if (!o) throw Error(s(169));
        (i
            ? ((e = xd(e, t, En)),
              (o.__reactInternalMemoizedMergedChildContext = e),
              Pe(rt),
              Pe(Xe),
              Ce(Xe, e))
            : Pe(rt),
            Ce(rt, i));
    }
    var $t = null,
        hs = !1,
        Sa = !1;
    function Sd(e) {
        $t === null ? ($t = [e]) : $t.push(e);
    }
    function uy(e) {
        ((hs = !0), Sd(e));
    }
    function cn() {
        if (!Sa && $t !== null) {
            Sa = !0;
            var e = 0,
                t = Se;
            try {
                var i = $t;
                for (Se = 1; e < i.length; e++) {
                    var o = i[e];
                    do o = o(!0);
                    while (o !== null);
                }
                (($t = null), (hs = !1));
            } catch (u) {
                throw ($t !== null && ($t = $t.slice(e + 1)), kc(Wo, cn), u);
            } finally {
                ((Se = t), (Sa = !1));
            }
        }
        return null;
    }
    var ir = [],
        sr = 0,
        ps = null,
        ms = 0,
        vt = [],
        xt = 0,
        Nn = null,
        Ht = 1,
        Kt = "";
    function Mn(e, t) {
        ((ir[sr++] = ms), (ir[sr++] = ps), (ps = e), (ms = t));
    }
    function bd(e, t, i) {
        ((vt[xt++] = Ht), (vt[xt++] = Kt), (vt[xt++] = Nn), (Nn = e));
        var o = Ht;
        e = Kt;
        var u = 32 - Pt(o) - 1;
        ((o &= ~(1 << u)), (i += 1));
        var f = 32 - Pt(t) + u;
        if (30 < f) {
            var y = u - (u % 5);
            ((f = (o & ((1 << y) - 1)).toString(32)),
                (o >>= y),
                (u -= y),
                (Ht = (1 << (32 - Pt(t) + u)) | (i << u) | o),
                (Kt = f + e));
        } else ((Ht = (1 << f) | (i << u) | o), (Kt = e));
    }
    function ba(e) {
        e.return !== null && (Mn(e, 1), bd(e, 1, 0));
    }
    function ka(e) {
        for (; e === ps; )
            ((ps = ir[--sr]),
                (ir[sr] = null),
                (ms = ir[--sr]),
                (ir[sr] = null));
        for (; e === Nn; )
            ((Nn = vt[--xt]),
                (vt[xt] = null),
                (Kt = vt[--xt]),
                (vt[xt] = null),
                (Ht = vt[--xt]),
                (vt[xt] = null));
    }
    var ft = null,
        ht = null,
        Ne = !1,
        Et = null;
    function kd(e, t) {
        var i = kt(5, null, null, 0);
        ((i.elementType = "DELETED"),
            (i.stateNode = t),
            (i.return = e),
            (t = e.deletions),
            t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i));
    }
    function Cd(e, t) {
        switch (e.tag) {
            case 5:
                var i = e.type;
                return (
                    (t =
                        t.nodeType !== 1 ||
                        i.toLowerCase() !== t.nodeName.toLowerCase()
                            ? null
                            : t),
                    t !== null
                        ? ((e.stateNode = t),
                          (ft = e),
                          (ht = an(t.firstChild)),
                          !0)
                        : !1
                );
            case 6:
                return (
                    (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                    t !== null
                        ? ((e.stateNode = t), (ft = e), (ht = null), !0)
                        : !1
                );
            case 13:
                return (
                    (t = t.nodeType !== 8 ? null : t),
                    t !== null
                        ? ((i = Nn !== null ? { id: Ht, overflow: Kt } : null),
                          (e.memoizedState = {
                              dehydrated: t,
                              treeContext: i,
                              retryLane: 1073741824,
                          }),
                          (i = kt(18, null, null, 0)),
                          (i.stateNode = t),
                          (i.return = e),
                          (e.child = i),
                          (ft = e),
                          (ht = null),
                          !0)
                        : !1
                );
            default:
                return !1;
        }
    }
    function Ca(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ja(e) {
        if (Ne) {
            var t = ht;
            if (t) {
                var i = t;
                if (!Cd(e, t)) {
                    if (Ca(e)) throw Error(s(418));
                    t = an(i.nextSibling);
                    var o = ft;
                    t && Cd(e, t)
                        ? kd(o, i)
                        : ((e.flags = (e.flags & -4097) | 2),
                          (Ne = !1),
                          (ft = e));
                }
            } else {
                if (Ca(e)) throw Error(s(418));
                ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (ft = e));
            }
        }
    }
    function jd(e) {
        for (
            e = e.return;
            e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
        )
            e = e.return;
        ft = e;
    }
    function gs(e) {
        if (e !== ft) return !1;
        if (!Ne) return (jd(e), (Ne = !0), !1);
        var t;
        if (
            ((t = e.tag !== 3) &&
                !(t = e.tag !== 5) &&
                ((t = e.type),
                (t =
                    t !== "head" &&
                    t !== "body" &&
                    !ga(e.type, e.memoizedProps))),
            t && (t = ht))
        ) {
            if (Ca(e)) throw (Pd(), Error(s(418)));
            for (; t; ) (kd(e, t), (t = an(t.nextSibling)));
        }
        if ((jd(e), e.tag === 13)) {
            if (
                ((e = e.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
            )
                throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var i = e.data;
                        if (i === "/$") {
                            if (t === 0) {
                                ht = an(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
                    }
                    e = e.nextSibling;
                }
                ht = null;
            }
        } else ht = ft ? an(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Pd() {
        for (var e = ht; e; ) e = an(e.nextSibling);
    }
    function or() {
        ((ht = ft = null), (Ne = !1));
    }
    function Pa(e) {
        Et === null ? (Et = [e]) : Et.push(e);
    }
    var cy = V.ReactCurrentBatchConfig;
    function ti(e, t, i) {
        if (
            ((e = i.ref),
            e !== null && typeof e != "function" && typeof e != "object")
        ) {
            if (i._owner) {
                if (((i = i._owner), i)) {
                    if (i.tag !== 1) throw Error(s(309));
                    var o = i.stateNode;
                }
                if (!o) throw Error(s(147, e));
                var u = o,
                    f = "" + e;
                return t !== null &&
                    t.ref !== null &&
                    typeof t.ref == "function" &&
                    t.ref._stringRef === f
                    ? t.ref
                    : ((t = function (y) {
                          var S = u.refs;
                          y === null ? delete S[f] : (S[f] = y);
                      }),
                      (t._stringRef = f),
                      t);
            }
            if (typeof e != "string") throw Error(s(284));
            if (!i._owner) throw Error(s(290, e));
        }
        return e;
    }
    function ys(e, t) {
        throw (
            (e = Object.prototype.toString.call(t)),
            Error(
                s(
                    31,
                    e === "[object Object]"
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : e,
                ),
            )
        );
    }
    function Td(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Ed(e) {
        function t(A, P) {
            if (e) {
                var _ = A.deletions;
                _ === null ? ((A.deletions = [P]), (A.flags |= 16)) : _.push(P);
            }
        }
        function i(A, P) {
            if (!e) return null;
            for (; P !== null; ) (t(A, P), (P = P.sibling));
            return null;
        }
        function o(A, P) {
            for (A = new Map(); P !== null; )
                (P.key !== null ? A.set(P.key, P) : A.set(P.index, P),
                    (P = P.sibling));
            return A;
        }
        function u(A, P) {
            return ((A = vn(A, P)), (A.index = 0), (A.sibling = null), A);
        }
        function f(A, P, _) {
            return (
                (A.index = _),
                e
                    ? ((_ = A.alternate),
                      _ !== null
                          ? ((_ = _.index), _ < P ? ((A.flags |= 2), P) : _)
                          : ((A.flags |= 2), P))
                    : ((A.flags |= 1048576), P)
            );
        }
        function y(A) {
            return (e && A.alternate === null && (A.flags |= 2), A);
        }
        function S(A, P, _, Y) {
            return P === null || P.tag !== 6
                ? ((P = yl(_, A.mode, Y)), (P.return = A), P)
                : ((P = u(P, _)), (P.return = A), P);
        }
        function k(A, P, _, Y) {
            var ne = _.type;
            return ne === E
                ? $(A, P, _.props.children, Y, _.key)
                : P !== null &&
                    (P.elementType === ne ||
                        (typeof ne == "object" &&
                            ne !== null &&
                            ne.$$typeof === fe &&
                            Td(ne) === P.type))
                  ? ((Y = u(P, _.props)),
                    (Y.ref = ti(A, P, _)),
                    (Y.return = A),
                    Y)
                  : ((Y = Bs(_.type, _.key, _.props, null, A.mode, Y)),
                    (Y.ref = ti(A, P, _)),
                    (Y.return = A),
                    Y);
        }
        function F(A, P, _, Y) {
            return P === null ||
                P.tag !== 4 ||
                P.stateNode.containerInfo !== _.containerInfo ||
                P.stateNode.implementation !== _.implementation
                ? ((P = vl(_, A.mode, Y)), (P.return = A), P)
                : ((P = u(P, _.children || [])), (P.return = A), P);
        }
        function $(A, P, _, Y, ne) {
            return P === null || P.tag !== 7
                ? ((P = Fn(_, A.mode, Y, ne)), (P.return = A), P)
                : ((P = u(P, _)), (P.return = A), P);
        }
        function H(A, P, _) {
            if ((typeof P == "string" && P !== "") || typeof P == "number")
                return ((P = yl("" + P, A.mode, _)), (P.return = A), P);
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                    case O:
                        return (
                            (_ = Bs(P.type, P.key, P.props, null, A.mode, _)),
                            (_.ref = ti(A, null, P)),
                            (_.return = A),
                            _
                        );
                    case L:
                        return ((P = vl(P, A.mode, _)), (P.return = A), P);
                    case fe:
                        var Y = P._init;
                        return H(A, Y(P._payload), _);
                }
                if (Mr(P) || Z(P))
                    return ((P = Fn(P, A.mode, _, null)), (P.return = A), P);
                ys(A, P);
            }
            return null;
        }
        function W(A, P, _, Y) {
            var ne = P !== null ? P.key : null;
            if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
                return ne !== null ? null : S(A, P, "" + _, Y);
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                    case O:
                        return _.key === ne ? k(A, P, _, Y) : null;
                    case L:
                        return _.key === ne ? F(A, P, _, Y) : null;
                    case fe:
                        return ((ne = _._init), W(A, P, ne(_._payload), Y));
                }
                if (Mr(_) || Z(_))
                    return ne !== null ? null : $(A, P, _, Y, null);
                ys(A, _);
            }
            return null;
        }
        function q(A, P, _, Y, ne) {
            if ((typeof Y == "string" && Y !== "") || typeof Y == "number")
                return ((A = A.get(_) || null), S(P, A, "" + Y, ne));
            if (typeof Y == "object" && Y !== null) {
                switch (Y.$$typeof) {
                    case O:
                        return (
                            (A = A.get(Y.key === null ? _ : Y.key) || null),
                            k(P, A, Y, ne)
                        );
                    case L:
                        return (
                            (A = A.get(Y.key === null ? _ : Y.key) || null),
                            F(P, A, Y, ne)
                        );
                    case fe:
                        var re = Y._init;
                        return q(A, P, _, re(Y._payload), ne);
                }
                if (Mr(Y) || Z(Y))
                    return ((A = A.get(_) || null), $(P, A, Y, ne, null));
                ys(P, Y);
            }
            return null;
        }
        function J(A, P, _, Y) {
            for (
                var ne = null, re = null, ie = P, ae = (P = 0), He = null;
                ie !== null && ae < _.length;
                ae++
            ) {
                ie.index > ae ? ((He = ie), (ie = null)) : (He = ie.sibling);
                var ve = W(A, ie, _[ae], Y);
                if (ve === null) {
                    ie === null && (ie = He);
                    break;
                }
                (e && ie && ve.alternate === null && t(A, ie),
                    (P = f(ve, P, ae)),
                    re === null ? (ne = ve) : (re.sibling = ve),
                    (re = ve),
                    (ie = He));
            }
            if (ae === _.length) return (i(A, ie), Ne && Mn(A, ae), ne);
            if (ie === null) {
                for (; ae < _.length; ae++)
                    ((ie = H(A, _[ae], Y)),
                        ie !== null &&
                            ((P = f(ie, P, ae)),
                            re === null ? (ne = ie) : (re.sibling = ie),
                            (re = ie)));
                return (Ne && Mn(A, ae), ne);
            }
            for (ie = o(A, ie); ae < _.length; ae++)
                ((He = q(ie, A, ae, _[ae], Y)),
                    He !== null &&
                        (e &&
                            He.alternate !== null &&
                            ie.delete(He.key === null ? ae : He.key),
                        (P = f(He, P, ae)),
                        re === null ? (ne = He) : (re.sibling = He),
                        (re = He)));
            return (
                e &&
                    ie.forEach(function (xn) {
                        return t(A, xn);
                    }),
                Ne && Mn(A, ae),
                ne
            );
        }
        function ee(A, P, _, Y) {
            var ne = Z(_);
            if (typeof ne != "function") throw Error(s(150));
            if (((_ = ne.call(_)), _ == null)) throw Error(s(151));
            for (
                var re = (ne = null),
                    ie = P,
                    ae = (P = 0),
                    He = null,
                    ve = _.next();
                ie !== null && !ve.done;
                ae++, ve = _.next()
            ) {
                ie.index > ae ? ((He = ie), (ie = null)) : (He = ie.sibling);
                var xn = W(A, ie, ve.value, Y);
                if (xn === null) {
                    ie === null && (ie = He);
                    break;
                }
                (e && ie && xn.alternate === null && t(A, ie),
                    (P = f(xn, P, ae)),
                    re === null ? (ne = xn) : (re.sibling = xn),
                    (re = xn),
                    (ie = He));
            }
            if (ve.done) return (i(A, ie), Ne && Mn(A, ae), ne);
            if (ie === null) {
                for (; !ve.done; ae++, ve = _.next())
                    ((ve = H(A, ve.value, Y)),
                        ve !== null &&
                            ((P = f(ve, P, ae)),
                            re === null ? (ne = ve) : (re.sibling = ve),
                            (re = ve)));
                return (Ne && Mn(A, ae), ne);
            }
            for (ie = o(A, ie); !ve.done; ae++, ve = _.next())
                ((ve = q(ie, A, ae, ve.value, Y)),
                    ve !== null &&
                        (e &&
                            ve.alternate !== null &&
                            ie.delete(ve.key === null ? ae : ve.key),
                        (P = f(ve, P, ae)),
                        re === null ? (ne = ve) : (re.sibling = ve),
                        (re = ve)));
            return (
                e &&
                    ie.forEach(function (Wy) {
                        return t(A, Wy);
                    }),
                Ne && Mn(A, ae),
                ne
            );
        }
        function Le(A, P, _, Y) {
            if (
                (typeof _ == "object" &&
                    _ !== null &&
                    _.type === E &&
                    _.key === null &&
                    (_ = _.props.children),
                typeof _ == "object" && _ !== null)
            ) {
                switch (_.$$typeof) {
                    case O:
                        e: {
                            for (var ne = _.key, re = P; re !== null; ) {
                                if (re.key === ne) {
                                    if (((ne = _.type), ne === E)) {
                                        if (re.tag === 7) {
                                            (i(A, re.sibling),
                                                (P = u(re, _.props.children)),
                                                (P.return = A),
                                                (A = P));
                                            break e;
                                        }
                                    } else if (
                                        re.elementType === ne ||
                                        (typeof ne == "object" &&
                                            ne !== null &&
                                            ne.$$typeof === fe &&
                                            Td(ne) === re.type)
                                    ) {
                                        (i(A, re.sibling),
                                            (P = u(re, _.props)),
                                            (P.ref = ti(A, re, _)),
                                            (P.return = A),
                                            (A = P));
                                        break e;
                                    }
                                    i(A, re);
                                    break;
                                } else t(A, re);
                                re = re.sibling;
                            }
                            _.type === E
                                ? ((P = Fn(_.props.children, A.mode, Y, _.key)),
                                  (P.return = A),
                                  (A = P))
                                : ((Y = Bs(
                                      _.type,
                                      _.key,
                                      _.props,
                                      null,
                                      A.mode,
                                      Y,
                                  )),
                                  (Y.ref = ti(A, P, _)),
                                  (Y.return = A),
                                  (A = Y));
                        }
                        return y(A);
                    case L:
                        e: {
                            for (re = _.key; P !== null; ) {
                                if (P.key === re)
                                    if (
                                        P.tag === 4 &&
                                        P.stateNode.containerInfo ===
                                            _.containerInfo &&
                                        P.stateNode.implementation ===
                                            _.implementation
                                    ) {
                                        (i(A, P.sibling),
                                            (P = u(P, _.children || [])),
                                            (P.return = A),
                                            (A = P));
                                        break e;
                                    } else {
                                        i(A, P);
                                        break;
                                    }
                                else t(A, P);
                                P = P.sibling;
                            }
                            ((P = vl(_, A.mode, Y)), (P.return = A), (A = P));
                        }
                        return y(A);
                    case fe:
                        return ((re = _._init), Le(A, P, re(_._payload), Y));
                }
                if (Mr(_)) return J(A, P, _, Y);
                if (Z(_)) return ee(A, P, _, Y);
                ys(A, _);
            }
            return (typeof _ == "string" && _ !== "") || typeof _ == "number"
                ? ((_ = "" + _),
                  P !== null && P.tag === 6
                      ? (i(A, P.sibling),
                        (P = u(P, _)),
                        (P.return = A),
                        (A = P))
                      : (i(A, P),
                        (P = yl(_, A.mode, Y)),
                        (P.return = A),
                        (A = P)),
                  y(A))
                : i(A, P);
        }
        return Le;
    }
    var ar = Ed(!0),
        Nd = Ed(!1),
        vs = ln(null),
        xs = null,
        lr = null,
        Ta = null;
    function Ea() {
        Ta = lr = xs = null;
    }
    function Na(e) {
        var t = vs.current;
        (Pe(vs), (e._currentValue = t));
    }
    function Ma(e, t, i) {
        for (; e !== null; ) {
            var o = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
                    : o !== null &&
                      (o.childLanes & t) !== t &&
                      (o.childLanes |= t),
                e === i)
            )
                break;
            e = e.return;
        }
    }
    function ur(e, t) {
        ((xs = e),
            (Ta = lr = null),
            (e = e.dependencies),
            e !== null &&
                e.firstContext !== null &&
                ((e.lanes & t) !== 0 && (st = !0), (e.firstContext = null)));
    }
    function wt(e) {
        var t = e._currentValue;
        if (Ta !== e)
            if (
                ((e = { context: e, memoizedValue: t, next: null }),
                lr === null)
            ) {
                if (xs === null) throw Error(s(308));
                ((lr = e), (xs.dependencies = { lanes: 0, firstContext: e }));
            } else lr = lr.next = e;
        return t;
    }
    var Dn = null;
    function Da(e) {
        Dn === null ? (Dn = [e]) : Dn.push(e);
    }
    function Md(e, t, i, o) {
        var u = t.interleaved;
        return (
            u === null
                ? ((i.next = i), Da(t))
                : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i),
            Gt(e, o)
        );
    }
    function Gt(e, t) {
        e.lanes |= t;
        var i = e.alternate;
        for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
            ((e.childLanes |= t),
                (i = e.alternate),
                i !== null && (i.childLanes |= t),
                (i = e),
                (e = e.return));
        return i.tag === 3 ? i.stateNode : null;
    }
    var dn = !1;
    function Ra(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
        };
    }
    function Dd(e, t) {
        ((e = e.updateQueue),
            t.updateQueue === e &&
                (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects,
                }));
    }
    function Yt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
        };
    }
    function fn(e, t, i) {
        var o = e.updateQueue;
        if (o === null) return null;
        if (((o = o.shared), (ge & 2) !== 0)) {
            var u = o.pending;
            return (
                u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
                (o.pending = t),
                Gt(e, i)
            );
        }
        return (
            (u = o.interleaved),
            u === null
                ? ((t.next = t), Da(o))
                : ((t.next = u.next), (u.next = t)),
            (o.interleaved = t),
            Gt(e, i)
        );
    }
    function ws(e, t, i) {
        if (
            ((t = t.updateQueue),
            t !== null && ((t = t.shared), (i & 4194240) !== 0))
        ) {
            var o = t.lanes;
            ((o &= e.pendingLanes), (i |= o), (t.lanes = i), Ko(e, i));
        }
    }
    function Rd(e, t) {
        var i = e.updateQueue,
            o = e.alternate;
        if (o !== null && ((o = o.updateQueue), i === o)) {
            var u = null,
                f = null;
            if (((i = i.firstBaseUpdate), i !== null)) {
                do {
                    var y = {
                        eventTime: i.eventTime,
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null,
                    };
                    (f === null ? (u = f = y) : (f = f.next = y), (i = i.next));
                } while (i !== null);
                f === null ? (u = f = t) : (f = f.next = t);
            } else u = f = t;
            ((i = {
                baseState: o.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: f,
                shared: o.shared,
                effects: o.effects,
            }),
                (e.updateQueue = i));
            return;
        }
        ((e = i.lastBaseUpdate),
            e === null ? (i.firstBaseUpdate = t) : (e.next = t),
            (i.lastBaseUpdate = t));
    }
    function Ss(e, t, i, o) {
        var u = e.updateQueue;
        dn = !1;
        var f = u.firstBaseUpdate,
            y = u.lastBaseUpdate,
            S = u.shared.pending;
        if (S !== null) {
            u.shared.pending = null;
            var k = S,
                F = k.next;
            ((k.next = null), y === null ? (f = F) : (y.next = F), (y = k));
            var $ = e.alternate;
            $ !== null &&
                (($ = $.updateQueue),
                (S = $.lastBaseUpdate),
                S !== y &&
                    (S === null ? ($.firstBaseUpdate = F) : (S.next = F),
                    ($.lastBaseUpdate = k)));
        }
        if (f !== null) {
            var H = u.baseState;
            ((y = 0), ($ = F = k = null), (S = f));
            do {
                var W = S.lane,
                    q = S.eventTime;
                if ((o & W) === W) {
                    $ !== null &&
                        ($ = $.next =
                            {
                                eventTime: q,
                                lane: 0,
                                tag: S.tag,
                                payload: S.payload,
                                callback: S.callback,
                                next: null,
                            });
                    e: {
                        var J = e,
                            ee = S;
                        switch (((W = t), (q = i), ee.tag)) {
                            case 1:
                                if (
                                    ((J = ee.payload), typeof J == "function")
                                ) {
                                    H = J.call(q, H, W);
                                    break e;
                                }
                                H = J;
                                break e;
                            case 3:
                                J.flags = (J.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((J = ee.payload),
                                    (W =
                                        typeof J == "function"
                                            ? J.call(q, H, W)
                                            : J),
                                    W == null)
                                )
                                    break e;
                                H = X({}, H, W);
                                break e;
                            case 2:
                                dn = !0;
                        }
                    }
                    S.callback !== null &&
                        S.lane !== 0 &&
                        ((e.flags |= 64),
                        (W = u.effects),
                        W === null ? (u.effects = [S]) : W.push(S));
                } else
                    ((q = {
                        eventTime: q,
                        lane: W,
                        tag: S.tag,
                        payload: S.payload,
                        callback: S.callback,
                        next: null,
                    }),
                        $ === null ? ((F = $ = q), (k = H)) : ($ = $.next = q),
                        (y |= W));
                if (((S = S.next), S === null)) {
                    if (((S = u.shared.pending), S === null)) break;
                    ((W = S),
                        (S = W.next),
                        (W.next = null),
                        (u.lastBaseUpdate = W),
                        (u.shared.pending = null));
                }
            } while (!0);
            if (
                ($ === null && (k = H),
                (u.baseState = k),
                (u.firstBaseUpdate = F),
                (u.lastBaseUpdate = $),
                (t = u.shared.interleaved),
                t !== null)
            ) {
                u = t;
                do ((y |= u.lane), (u = u.next));
                while (u !== t);
            } else f === null && (u.shared.lanes = 0);
            ((zn |= y), (e.lanes = y), (e.memoizedState = H));
        }
    }
    function Ad(e, t, i) {
        if (((e = t.effects), (t.effects = null), e !== null))
            for (t = 0; t < e.length; t++) {
                var o = e[t],
                    u = o.callback;
                if (u !== null) {
                    if (((o.callback = null), (o = i), typeof u != "function"))
                        throw Error(s(191, u));
                    u.call(o);
                }
            }
    }
    var ni = {},
        Lt = ln(ni),
        ri = ln(ni),
        ii = ln(ni);
    function Rn(e) {
        if (e === ni) throw Error(s(174));
        return e;
    }
    function Aa(e, t) {
        switch ((Ce(ii, t), Ce(ri, e), Ce(Lt, ni), (e = t.nodeType), e)) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : zo(null, "");
                break;
            default:
                ((e = e === 8 ? t.parentNode : t),
                    (t = e.namespaceURI || null),
                    (e = e.tagName),
                    (t = zo(t, e)));
        }
        (Pe(Lt), Ce(Lt, t));
    }
    function cr() {
        (Pe(Lt), Pe(ri), Pe(ii));
    }
    function zd(e) {
        Rn(ii.current);
        var t = Rn(Lt.current),
            i = zo(t, e.type);
        t !== i && (Ce(ri, e), Ce(Lt, i));
    }
    function za(e) {
        ri.current === e && (Pe(Lt), Pe(ri));
    }
    var Me = ln(0);
    function bs(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (
                    i !== null &&
                    ((i = i.dehydrated),
                    i === null || i.data === "$?" || i.data === "$!")
                )
                    return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
                ((t.child.return = t), (t = t.child));
                continue;
            }
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
        }
        return null;
    }
    var _a = [];
    function La() {
        for (var e = 0; e < _a.length; e++)
            _a[e]._workInProgressVersionPrimary = null;
        _a.length = 0;
    }
    var ks = V.ReactCurrentDispatcher,
        Va = V.ReactCurrentBatchConfig,
        An = 0,
        De = null,
        Be = null,
        We = null,
        Cs = !1,
        si = !1,
        oi = 0,
        dy = 0;
    function qe() {
        throw Error(s(321));
    }
    function Fa(e, t) {
        if (t === null) return !1;
        for (var i = 0; i < t.length && i < e.length; i++)
            if (!Tt(e[i], t[i])) return !1;
        return !0;
    }
    function Oa(e, t, i, o, u, f) {
        if (
            ((An = f),
            (De = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ks.current = e === null || e.memoizedState === null ? my : gy),
            (e = i(o, u)),
            si)
        ) {
            f = 0;
            do {
                if (((si = !1), (oi = 0), 25 <= f)) throw Error(s(301));
                ((f += 1),
                    (We = Be = null),
                    (t.updateQueue = null),
                    (ks.current = yy),
                    (e = i(o, u)));
            } while (si);
        }
        if (
            ((ks.current = Ts),
            (t = Be !== null && Be.next !== null),
            (An = 0),
            (We = Be = De = null),
            (Cs = !1),
            t)
        )
            throw Error(s(300));
        return e;
    }
    function Ia() {
        var e = oi !== 0;
        return ((oi = 0), e);
    }
    function Vt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return (
            We === null ? (De.memoizedState = We = e) : (We = We.next = e),
            We
        );
    }
    function St() {
        if (Be === null) {
            var e = De.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Be.next;
        var t = We === null ? De.memoizedState : We.next;
        if (t !== null) ((We = t), (Be = e));
        else {
            if (e === null) throw Error(s(310));
            ((Be = e),
                (e = {
                    memoizedState: Be.memoizedState,
                    baseState: Be.baseState,
                    baseQueue: Be.baseQueue,
                    queue: Be.queue,
                    next: null,
                }),
                We === null ? (De.memoizedState = We = e) : (We = We.next = e));
        }
        return We;
    }
    function ai(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Ba(e) {
        var t = St(),
            i = t.queue;
        if (i === null) throw Error(s(311));
        i.lastRenderedReducer = e;
        var o = Be,
            u = o.baseQueue,
            f = i.pending;
        if (f !== null) {
            if (u !== null) {
                var y = u.next;
                ((u.next = f.next), (f.next = y));
            }
            ((o.baseQueue = u = f), (i.pending = null));
        }
        if (u !== null) {
            ((f = u.next), (o = o.baseState));
            var S = (y = null),
                k = null,
                F = f;
            do {
                var $ = F.lane;
                if ((An & $) === $)
                    (k !== null &&
                        (k = k.next =
                            {
                                lane: 0,
                                action: F.action,
                                hasEagerState: F.hasEagerState,
                                eagerState: F.eagerState,
                                next: null,
                            }),
                        (o = F.hasEagerState ? F.eagerState : e(o, F.action)));
                else {
                    var H = {
                        lane: $,
                        action: F.action,
                        hasEagerState: F.hasEagerState,
                        eagerState: F.eagerState,
                        next: null,
                    };
                    (k === null ? ((S = k = H), (y = o)) : (k = k.next = H),
                        (De.lanes |= $),
                        (zn |= $));
                }
                F = F.next;
            } while (F !== null && F !== f);
            (k === null ? (y = o) : (k.next = S),
                Tt(o, t.memoizedState) || (st = !0),
                (t.memoizedState = o),
                (t.baseState = y),
                (t.baseQueue = k),
                (i.lastRenderedState = o));
        }
        if (((e = i.interleaved), e !== null)) {
            u = e;
            do ((f = u.lane), (De.lanes |= f), (zn |= f), (u = u.next));
            while (u !== e);
        } else u === null && (i.lanes = 0);
        return [t.memoizedState, i.dispatch];
    }
    function Ua(e) {
        var t = St(),
            i = t.queue;
        if (i === null) throw Error(s(311));
        i.lastRenderedReducer = e;
        var o = i.dispatch,
            u = i.pending,
            f = t.memoizedState;
        if (u !== null) {
            i.pending = null;
            var y = (u = u.next);
            do ((f = e(f, y.action)), (y = y.next));
            while (y !== u);
            (Tt(f, t.memoizedState) || (st = !0),
                (t.memoizedState = f),
                t.baseQueue === null && (t.baseState = f),
                (i.lastRenderedState = f));
        }
        return [f, o];
    }
    function _d() {}
    function Ld(e, t) {
        var i = De,
            o = St(),
            u = t(),
            f = !Tt(o.memoizedState, u);
        if (
            (f && ((o.memoizedState = u), (st = !0)),
            (o = o.queue),
            Wa(Od.bind(null, i, o, e), [e]),
            o.getSnapshot !== t ||
                f ||
                (We !== null && We.memoizedState.tag & 1))
        ) {
            if (
                ((i.flags |= 2048),
                li(9, Fd.bind(null, i, o, u, t), void 0, null),
                $e === null)
            )
                throw Error(s(349));
            (An & 30) !== 0 || Vd(i, t, u);
        }
        return u;
    }
    function Vd(e, t, i) {
        ((e.flags |= 16384),
            (e = { getSnapshot: t, value: i }),
            (t = De.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (De.updateQueue = t),
                  (t.stores = [e]))
                : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e)));
    }
    function Fd(e, t, i, o) {
        ((t.value = i), (t.getSnapshot = o), Id(t) && Bd(e));
    }
    function Od(e, t, i) {
        return i(function () {
            Id(t) && Bd(e);
        });
    }
    function Id(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !Tt(e, i);
        } catch {
            return !0;
        }
    }
    function Bd(e) {
        var t = Gt(e, 1);
        t !== null && Rt(t, e, 1, -1);
    }
    function Ud(e) {
        var t = Vt();
        return (
            typeof e == "function" && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ai,
                lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = py.bind(null, De, e)),
            [t.memoizedState, e]
        );
    }
    function li(e, t, i, o) {
        return (
            (e = { tag: e, create: t, destroy: i, deps: o, next: null }),
            (t = De.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (De.updateQueue = t),
                  (t.lastEffect = e.next = e))
                : ((i = t.lastEffect),
                  i === null
                      ? (t.lastEffect = e.next = e)
                      : ((o = i.next),
                        (i.next = e),
                        (e.next = o),
                        (t.lastEffect = e))),
            e
        );
    }
    function Wd() {
        return St().memoizedState;
    }
    function js(e, t, i, o) {
        var u = Vt();
        ((De.flags |= e),
            (u.memoizedState = li(1 | t, i, void 0, o === void 0 ? null : o)));
    }
    function Ps(e, t, i, o) {
        var u = St();
        o = o === void 0 ? null : o;
        var f = void 0;
        if (Be !== null) {
            var y = Be.memoizedState;
            if (((f = y.destroy), o !== null && Fa(o, y.deps))) {
                u.memoizedState = li(t, i, f, o);
                return;
            }
        }
        ((De.flags |= e), (u.memoizedState = li(1 | t, i, f, o)));
    }
    function $d(e, t) {
        return js(8390656, 8, e, t);
    }
    function Wa(e, t) {
        return Ps(2048, 8, e, t);
    }
    function Hd(e, t) {
        return Ps(4, 2, e, t);
    }
    function Kd(e, t) {
        return Ps(4, 4, e, t);
    }
    function Gd(e, t) {
        if (typeof t == "function")
            return (
                (e = e()),
                t(e),
                function () {
                    t(null);
                }
            );
        if (t != null)
            return (
                (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
            );
    }
    function Yd(e, t, i) {
        return (
            (i = i != null ? i.concat([e]) : null),
            Ps(4, 4, Gd.bind(null, t, e), i)
        );
    }
    function $a() {}
    function Xd(e, t) {
        var i = St();
        t = t === void 0 ? null : t;
        var o = i.memoizedState;
        return o !== null && t !== null && Fa(t, o[1])
            ? o[0]
            : ((i.memoizedState = [e, t]), e);
    }
    function qd(e, t) {
        var i = St();
        t = t === void 0 ? null : t;
        var o = i.memoizedState;
        return o !== null && t !== null && Fa(t, o[1])
            ? o[0]
            : ((e = e()), (i.memoizedState = [e, t]), e);
    }
    function Qd(e, t, i) {
        return (An & 21) === 0
            ? (e.baseState && ((e.baseState = !1), (st = !0)),
              (e.memoizedState = i))
            : (Tt(i, t) ||
                  ((i = Tc()), (De.lanes |= i), (zn |= i), (e.baseState = !0)),
              t);
    }
    function fy(e, t) {
        var i = Se;
        ((Se = i !== 0 && 4 > i ? i : 4), e(!0));
        var o = Va.transition;
        Va.transition = {};
        try {
            (e(!1), t());
        } finally {
            ((Se = i), (Va.transition = o));
        }
    }
    function Zd() {
        return St().memoizedState;
    }
    function hy(e, t, i) {
        var o = gn(e);
        if (
            ((i = {
                lane: o,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            Jd(e))
        )
            ef(t, i);
        else if (((i = Md(e, t, i, o)), i !== null)) {
            var u = nt();
            (Rt(i, e, o, u), tf(i, t, o));
        }
    }
    function py(e, t, i) {
        var o = gn(e),
            u = {
                lane: o,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            };
        if (Jd(e)) ef(t, u);
        else {
            var f = e.alternate;
            if (
                e.lanes === 0 &&
                (f === null || f.lanes === 0) &&
                ((f = t.lastRenderedReducer), f !== null)
            )
                try {
                    var y = t.lastRenderedState,
                        S = f(y, i);
                    if (
                        ((u.hasEagerState = !0), (u.eagerState = S), Tt(S, y))
                    ) {
                        var k = t.interleaved;
                        (k === null
                            ? ((u.next = u), Da(t))
                            : ((u.next = k.next), (k.next = u)),
                            (t.interleaved = u));
                        return;
                    }
                } catch {
                } finally {
                }
            ((i = Md(e, t, u, o)),
                i !== null && ((u = nt()), Rt(i, e, o, u), tf(i, t, o)));
        }
    }
    function Jd(e) {
        var t = e.alternate;
        return e === De || (t !== null && t === De);
    }
    function ef(e, t) {
        si = Cs = !0;
        var i = e.pending;
        (i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (e.pending = t));
    }
    function tf(e, t, i) {
        if ((i & 4194240) !== 0) {
            var o = t.lanes;
            ((o &= e.pendingLanes), (i |= o), (t.lanes = i), Ko(e, i));
        }
    }
    var Ts = {
            readContext: wt,
            useCallback: qe,
            useContext: qe,
            useEffect: qe,
            useImperativeHandle: qe,
            useInsertionEffect: qe,
            useLayoutEffect: qe,
            useMemo: qe,
            useReducer: qe,
            useRef: qe,
            useState: qe,
            useDebugValue: qe,
            useDeferredValue: qe,
            useTransition: qe,
            useMutableSource: qe,
            useSyncExternalStore: qe,
            useId: qe,
            unstable_isNewReconciler: !1,
        },
        my = {
            readContext: wt,
            useCallback: function (e, t) {
                return ((Vt().memoizedState = [e, t === void 0 ? null : t]), e);
            },
            useContext: wt,
            useEffect: $d,
            useImperativeHandle: function (e, t, i) {
                return (
                    (i = i != null ? i.concat([e]) : null),
                    js(4194308, 4, Gd.bind(null, t, e), i)
                );
            },
            useLayoutEffect: function (e, t) {
                return js(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                return js(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var i = Vt();
                return (
                    (t = t === void 0 ? null : t),
                    (e = e()),
                    (i.memoizedState = [e, t]),
                    e
                );
            },
            useReducer: function (e, t, i) {
                var o = Vt();
                return (
                    (t = i !== void 0 ? i(t) : t),
                    (o.memoizedState = o.baseState = t),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }),
                    (o.queue = e),
                    (e = e.dispatch = hy.bind(null, De, e)),
                    [o.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = Vt();
                return ((e = { current: e }), (t.memoizedState = e));
            },
            useState: Ud,
            useDebugValue: $a,
            useDeferredValue: function (e) {
                return (Vt().memoizedState = e);
            },
            useTransition: function () {
                var e = Ud(!1),
                    t = e[0];
                return (
                    (e = fy.bind(null, e[1])),
                    (Vt().memoizedState = e),
                    [t, e]
                );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, i) {
                var o = De,
                    u = Vt();
                if (Ne) {
                    if (i === void 0) throw Error(s(407));
                    i = i();
                } else {
                    if (((i = t()), $e === null)) throw Error(s(349));
                    (An & 30) !== 0 || Vd(o, t, i);
                }
                u.memoizedState = i;
                var f = { value: i, getSnapshot: t };
                return (
                    (u.queue = f),
                    $d(Od.bind(null, o, f, e), [e]),
                    (o.flags |= 2048),
                    li(9, Fd.bind(null, o, f, i, t), void 0, null),
                    i
                );
            },
            useId: function () {
                var e = Vt(),
                    t = $e.identifierPrefix;
                if (Ne) {
                    var i = Kt,
                        o = Ht;
                    ((i = (o & ~(1 << (32 - Pt(o) - 1))).toString(32) + i),
                        (t = ":" + t + "R" + i),
                        (i = oi++),
                        0 < i && (t += "H" + i.toString(32)),
                        (t += ":"));
                } else ((i = dy++), (t = ":" + t + "r" + i.toString(32) + ":"));
                return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
        },
        gy = {
            readContext: wt,
            useCallback: Xd,
            useContext: wt,
            useEffect: Wa,
            useImperativeHandle: Yd,
            useInsertionEffect: Hd,
            useLayoutEffect: Kd,
            useMemo: qd,
            useReducer: Ba,
            useRef: Wd,
            useState: function () {
                return Ba(ai);
            },
            useDebugValue: $a,
            useDeferredValue: function (e) {
                var t = St();
                return Qd(t, Be.memoizedState, e);
            },
            useTransition: function () {
                var e = Ba(ai)[0],
                    t = St().memoizedState;
                return [e, t];
            },
            useMutableSource: _d,
            useSyncExternalStore: Ld,
            useId: Zd,
            unstable_isNewReconciler: !1,
        },
        yy = {
            readContext: wt,
            useCallback: Xd,
            useContext: wt,
            useEffect: Wa,
            useImperativeHandle: Yd,
            useInsertionEffect: Hd,
            useLayoutEffect: Kd,
            useMemo: qd,
            useReducer: Ua,
            useRef: Wd,
            useState: function () {
                return Ua(ai);
            },
            useDebugValue: $a,
            useDeferredValue: function (e) {
                var t = St();
                return Be === null
                    ? (t.memoizedState = e)
                    : Qd(t, Be.memoizedState, e);
            },
            useTransition: function () {
                var e = Ua(ai)[0],
                    t = St().memoizedState;
                return [e, t];
            },
            useMutableSource: _d,
            useSyncExternalStore: Ld,
            useId: Zd,
            unstable_isNewReconciler: !1,
        };
    function Nt(e, t) {
        if (e && e.defaultProps) {
            ((t = X({}, t)), (e = e.defaultProps));
            for (var i in e) t[i] === void 0 && (t[i] = e[i]);
            return t;
        }
        return t;
    }
    function Ha(e, t, i, o) {
        ((t = e.memoizedState),
            (i = i(o, t)),
            (i = i == null ? t : X({}, t, i)),
            (e.memoizedState = i),
            e.lanes === 0 && (e.updateQueue.baseState = i));
    }
    var Es = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? Pn(e) === e : !1;
        },
        enqueueSetState: function (e, t, i) {
            e = e._reactInternals;
            var o = nt(),
                u = gn(e),
                f = Yt(o, u);
            ((f.payload = t),
                i != null && (f.callback = i),
                (t = fn(e, f, u)),
                t !== null && (Rt(t, e, u, o), ws(t, e, u)));
        },
        enqueueReplaceState: function (e, t, i) {
            e = e._reactInternals;
            var o = nt(),
                u = gn(e),
                f = Yt(o, u);
            ((f.tag = 1),
                (f.payload = t),
                i != null && (f.callback = i),
                (t = fn(e, f, u)),
                t !== null && (Rt(t, e, u, o), ws(t, e, u)));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var i = nt(),
                o = gn(e),
                u = Yt(i, o);
            ((u.tag = 2),
                t != null && (u.callback = t),
                (t = fn(e, u, o)),
                t !== null && (Rt(t, e, o, i), ws(t, e, o)));
        },
    };
    function nf(e, t, i, o, u, f, y) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(o, f, y)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !Yr(i, o) || !Yr(u, f)
                  : !0
        );
    }
    function rf(e, t, i) {
        var o = !1,
            u = un,
            f = t.contextType;
        return (
            typeof f == "object" && f !== null
                ? (f = wt(f))
                : ((u = it(t) ? En : Xe.current),
                  (o = t.contextTypes),
                  (f = (o = o != null) ? rr(e, u) : un)),
            (t = new t(i, f)),
            (e.memoizedState =
                t.state !== null && t.state !== void 0 ? t.state : null),
            (t.updater = Es),
            (e.stateNode = t),
            (t._reactInternals = e),
            o &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = u),
                (e.__reactInternalMemoizedMaskedChildContext = f)),
            t
        );
    }
    function sf(e, t, i, o) {
        ((e = t.state),
            typeof t.componentWillReceiveProps == "function" &&
                t.componentWillReceiveProps(i, o),
            typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                t.UNSAFE_componentWillReceiveProps(i, o),
            t.state !== e && Es.enqueueReplaceState(t, t.state, null));
    }
    function Ka(e, t, i, o) {
        var u = e.stateNode;
        ((u.props = i), (u.state = e.memoizedState), (u.refs = {}), Ra(e));
        var f = t.contextType;
        (typeof f == "object" && f !== null
            ? (u.context = wt(f))
            : ((f = it(t) ? En : Xe.current), (u.context = rr(e, f))),
            (u.state = e.memoizedState),
            (f = t.getDerivedStateFromProps),
            typeof f == "function" &&
                (Ha(e, t, f, i), (u.state = e.memoizedState)),
            typeof t.getDerivedStateFromProps == "function" ||
                typeof u.getSnapshotBeforeUpdate == "function" ||
                (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                ((t = u.state),
                typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount(),
                t !== u.state && Es.enqueueReplaceState(u, u.state, null),
                Ss(e, i, u, o),
                (u.state = e.memoizedState)),
            typeof u.componentDidMount == "function" && (e.flags |= 4194308));
    }
    function dr(e, t) {
        try {
            var i = "",
                o = t;
            do ((i += pe(o)), (o = o.return));
            while (o);
            var u = i;
        } catch (f) {
            u =
                `
Error generating stack: ` +
                f.message +
                `
` +
                f.stack;
        }
        return { value: e, source: t, stack: u, digest: null };
    }
    function Ga(e, t, i) {
        return { value: e, source: null, stack: i ?? null, digest: t ?? null };
    }
    function Ya(e, t) {
        try {
            console.error(t.value);
        } catch (i) {
            setTimeout(function () {
                throw i;
            });
        }
    }
    var vy = typeof WeakMap == "function" ? WeakMap : Map;
    function of(e, t, i) {
        ((i = Yt(-1, i)), (i.tag = 3), (i.payload = { element: null }));
        var o = t.value;
        return (
            (i.callback = function () {
                (_s || ((_s = !0), (ul = o)), Ya(e, t));
            }),
            i
        );
    }
    function af(e, t, i) {
        ((i = Yt(-1, i)), (i.tag = 3));
        var o = e.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var u = t.value;
            ((i.payload = function () {
                return o(u);
            }),
                (i.callback = function () {
                    Ya(e, t);
                }));
        }
        var f = e.stateNode;
        return (
            f !== null &&
                typeof f.componentDidCatch == "function" &&
                (i.callback = function () {
                    (Ya(e, t),
                        typeof o != "function" &&
                            (pn === null
                                ? (pn = new Set([this]))
                                : pn.add(this)));
                    var y = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: y !== null ? y : "",
                    });
                }),
            i
        );
    }
    function lf(e, t, i) {
        var o = e.pingCache;
        if (o === null) {
            o = e.pingCache = new vy();
            var u = new Set();
            o.set(t, u);
        } else ((u = o.get(t)), u === void 0 && ((u = new Set()), o.set(t, u)));
        u.has(i) || (u.add(i), (e = Ry.bind(null, e, t, i)), t.then(e, e));
    }
    function uf(e) {
        do {
            var t;
            if (
                ((t = e.tag === 13) &&
                    ((t = e.memoizedState),
                    (t = t !== null ? t.dehydrated !== null : !0)),
                t)
            )
                return e;
            e = e.return;
        } while (e !== null);
        return null;
    }
    function cf(e, t, i, o, u) {
        return (e.mode & 1) === 0
            ? (e === t
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (i.flags |= 131072),
                    (i.flags &= -52805),
                    i.tag === 1 &&
                        (i.alternate === null
                            ? (i.tag = 17)
                            : ((t = Yt(-1, 1)), (t.tag = 2), fn(i, t, 1))),
                    (i.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = u), e);
    }
    var xy = V.ReactCurrentOwner,
        st = !1;
    function tt(e, t, i, o) {
        t.child = e === null ? Nd(t, null, i, o) : ar(t, e.child, i, o);
    }
    function df(e, t, i, o, u) {
        i = i.render;
        var f = t.ref;
        return (
            ur(t, u),
            (o = Oa(e, t, i, o, f, u)),
            (i = Ia()),
            e !== null && !st
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~u),
                  Xt(e, t, u))
                : (Ne && i && ba(t), (t.flags |= 1), tt(e, t, o, u), t.child)
        );
    }
    function ff(e, t, i, o, u) {
        if (e === null) {
            var f = i.type;
            return typeof f == "function" &&
                !gl(f) &&
                f.defaultProps === void 0 &&
                i.compare === null &&
                i.defaultProps === void 0
                ? ((t.tag = 15), (t.type = f), hf(e, t, f, o, u))
                : ((e = Bs(i.type, null, o, t, t.mode, u)),
                  (e.ref = t.ref),
                  (e.return = t),
                  (t.child = e));
        }
        if (((f = e.child), (e.lanes & u) === 0)) {
            var y = f.memoizedProps;
            if (
                ((i = i.compare),
                (i = i !== null ? i : Yr),
                i(y, o) && e.ref === t.ref)
            )
                return Xt(e, t, u);
        }
        return (
            (t.flags |= 1),
            (e = vn(f, o)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e)
        );
    }
    function hf(e, t, i, o, u) {
        if (e !== null) {
            var f = e.memoizedProps;
            if (Yr(f, o) && e.ref === t.ref)
                if (((st = !1), (t.pendingProps = o = f), (e.lanes & u) !== 0))
                    (e.flags & 131072) !== 0 && (st = !0);
                else return ((t.lanes = e.lanes), Xt(e, t, u));
        }
        return Xa(e, t, i, o, u);
    }
    function pf(e, t, i) {
        var o = t.pendingProps,
            u = o.children,
            f = e !== null ? e.memoizedState : null;
        if (o.mode === "hidden")
            if ((t.mode & 1) === 0)
                ((t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    Ce(hr, pt),
                    (pt |= i));
            else {
                if ((i & 1073741824) === 0)
                    return (
                        (e = f !== null ? f.baseLanes | i : i),
                        (t.lanes = t.childLanes = 1073741824),
                        (t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null,
                        }),
                        (t.updateQueue = null),
                        Ce(hr, pt),
                        (pt |= e),
                        null
                    );
                ((t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    (o = f !== null ? f.baseLanes : i),
                    Ce(hr, pt),
                    (pt |= o));
            }
        else
            (f !== null
                ? ((o = f.baseLanes | i), (t.memoizedState = null))
                : (o = i),
                Ce(hr, pt),
                (pt |= o));
        return (tt(e, t, u, i), t.child);
    }
    function mf(e, t) {
        var i = t.ref;
        ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Xa(e, t, i, o, u) {
        var f = it(i) ? En : Xe.current;
        return (
            (f = rr(t, f)),
            ur(t, u),
            (i = Oa(e, t, i, o, f, u)),
            (o = Ia()),
            e !== null && !st
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~u),
                  Xt(e, t, u))
                : (Ne && o && ba(t), (t.flags |= 1), tt(e, t, i, u), t.child)
        );
    }
    function gf(e, t, i, o, u) {
        if (it(i)) {
            var f = !0;
            fs(t);
        } else f = !1;
        if ((ur(t, u), t.stateNode === null))
            (Ms(e, t), rf(t, i, o), Ka(t, i, o, u), (o = !0));
        else if (e === null) {
            var y = t.stateNode,
                S = t.memoizedProps;
            y.props = S;
            var k = y.context,
                F = i.contextType;
            typeof F == "object" && F !== null
                ? (F = wt(F))
                : ((F = it(i) ? En : Xe.current), (F = rr(t, F)));
            var $ = i.getDerivedStateFromProps,
                H =
                    typeof $ == "function" ||
                    typeof y.getSnapshotBeforeUpdate == "function";
            (H ||
                (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof y.componentWillReceiveProps != "function") ||
                ((S !== o || k !== F) && sf(t, y, o, F)),
                (dn = !1));
            var W = t.memoizedState;
            ((y.state = W),
                Ss(t, o, y, u),
                (k = t.memoizedState),
                S !== o || W !== k || rt.current || dn
                    ? (typeof $ == "function" &&
                          (Ha(t, i, $, o), (k = t.memoizedState)),
                      (S = dn || nf(t, i, S, o, W, k, F))
                          ? (H ||
                                (typeof y.UNSAFE_componentWillMount !=
                                    "function" &&
                                    typeof y.componentWillMount !=
                                        "function") ||
                                (typeof y.componentWillMount == "function" &&
                                    y.componentWillMount(),
                                typeof y.UNSAFE_componentWillMount ==
                                    "function" &&
                                    y.UNSAFE_componentWillMount()),
                            typeof y.componentDidMount == "function" &&
                                (t.flags |= 4194308))
                          : (typeof y.componentDidMount == "function" &&
                                (t.flags |= 4194308),
                            (t.memoizedProps = o),
                            (t.memoizedState = k)),
                      (y.props = o),
                      (y.state = k),
                      (y.context = F),
                      (o = S))
                    : (typeof y.componentDidMount == "function" &&
                          (t.flags |= 4194308),
                      (o = !1)));
        } else {
            ((y = t.stateNode),
                Dd(e, t),
                (S = t.memoizedProps),
                (F = t.type === t.elementType ? S : Nt(t.type, S)),
                (y.props = F),
                (H = t.pendingProps),
                (W = y.context),
                (k = i.contextType),
                typeof k == "object" && k !== null
                    ? (k = wt(k))
                    : ((k = it(i) ? En : Xe.current), (k = rr(t, k))));
            var q = i.getDerivedStateFromProps;
            (($ =
                typeof q == "function" ||
                typeof y.getSnapshotBeforeUpdate == "function") ||
                (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof y.componentWillReceiveProps != "function") ||
                ((S !== H || W !== k) && sf(t, y, o, k)),
                (dn = !1),
                (W = t.memoizedState),
                (y.state = W),
                Ss(t, o, y, u));
            var J = t.memoizedState;
            S !== H || W !== J || rt.current || dn
                ? (typeof q == "function" &&
                      (Ha(t, i, q, o), (J = t.memoizedState)),
                  (F = dn || nf(t, i, F, o, W, J, k) || !1)
                      ? ($ ||
                            (typeof y.UNSAFE_componentWillUpdate !=
                                "function" &&
                                typeof y.componentWillUpdate != "function") ||
                            (typeof y.componentWillUpdate == "function" &&
                                y.componentWillUpdate(o, J, k),
                            typeof y.UNSAFE_componentWillUpdate == "function" &&
                                y.UNSAFE_componentWillUpdate(o, J, k)),
                        typeof y.componentDidUpdate == "function" &&
                            (t.flags |= 4),
                        typeof y.getSnapshotBeforeUpdate == "function" &&
                            (t.flags |= 1024))
                      : (typeof y.componentDidUpdate != "function" ||
                            (S === e.memoizedProps && W === e.memoizedState) ||
                            (t.flags |= 4),
                        typeof y.getSnapshotBeforeUpdate != "function" ||
                            (S === e.memoizedProps && W === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = o),
                        (t.memoizedState = J)),
                  (y.props = o),
                  (y.state = J),
                  (y.context = k),
                  (o = F))
                : (typeof y.componentDidUpdate != "function" ||
                      (S === e.memoizedProps && W === e.memoizedState) ||
                      (t.flags |= 4),
                  typeof y.getSnapshotBeforeUpdate != "function" ||
                      (S === e.memoizedProps && W === e.memoizedState) ||
                      (t.flags |= 1024),
                  (o = !1));
        }
        return qa(e, t, i, o, f, u);
    }
    function qa(e, t, i, o, u, f) {
        mf(e, t);
        var y = (t.flags & 128) !== 0;
        if (!o && !y) return (u && wd(t, i, !1), Xt(e, t, f));
        ((o = t.stateNode), (xy.current = t));
        var S =
            y && typeof i.getDerivedStateFromError != "function"
                ? null
                : o.render();
        return (
            (t.flags |= 1),
            e !== null && y
                ? ((t.child = ar(t, e.child, null, f)),
                  (t.child = ar(t, null, S, f)))
                : tt(e, t, S, f),
            (t.memoizedState = o.state),
            u && wd(t, i, !0),
            t.child
        );
    }
    function yf(e) {
        var t = e.stateNode;
        (t.pendingContext
            ? vd(e, t.pendingContext, t.pendingContext !== t.context)
            : t.context && vd(e, t.context, !1),
            Aa(e, t.containerInfo));
    }
    function vf(e, t, i, o, u) {
        return (or(), Pa(u), (t.flags |= 256), tt(e, t, i, o), t.child);
    }
    var Qa = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Za(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
    }
    function xf(e, t, i) {
        var o = t.pendingProps,
            u = Me.current,
            f = !1,
            y = (t.flags & 128) !== 0,
            S;
        if (
            ((S = y) ||
                (S =
                    e !== null && e.memoizedState === null
                        ? !1
                        : (u & 2) !== 0),
            S
                ? ((f = !0), (t.flags &= -129))
                : (e === null || e.memoizedState !== null) && (u |= 1),
            Ce(Me, u & 1),
            e === null)
        )
            return (
                ja(t),
                (e = t.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? ((t.mode & 1) === 0
                          ? (t.lanes = 1)
                          : e.data === "$!"
                            ? (t.lanes = 8)
                            : (t.lanes = 1073741824),
                      null)
                    : ((y = o.children),
                      (e = o.fallback),
                      f
                          ? ((o = t.mode),
                            (f = t.child),
                            (y = { mode: "hidden", children: y }),
                            (o & 1) === 0 && f !== null
                                ? ((f.childLanes = 0), (f.pendingProps = y))
                                : (f = Us(y, o, 0, null)),
                            (e = Fn(e, o, i, null)),
                            (f.return = t),
                            (e.return = t),
                            (f.sibling = e),
                            (t.child = f),
                            (t.child.memoizedState = Za(i)),
                            (t.memoizedState = Qa),
                            e)
                          : Ja(t, y))
            );
        if (
            ((u = e.memoizedState),
            u !== null && ((S = u.dehydrated), S !== null))
        )
            return wy(e, t, y, o, S, u, i);
        if (f) {
            ((f = o.fallback), (y = t.mode), (u = e.child), (S = u.sibling));
            var k = { mode: "hidden", children: o.children };
            return (
                (y & 1) === 0 && t.child !== u
                    ? ((o = t.child),
                      (o.childLanes = 0),
                      (o.pendingProps = k),
                      (t.deletions = null))
                    : ((o = vn(u, k)),
                      (o.subtreeFlags = u.subtreeFlags & 14680064)),
                S !== null
                    ? (f = vn(S, f))
                    : ((f = Fn(f, y, i, null)), (f.flags |= 2)),
                (f.return = t),
                (o.return = t),
                (o.sibling = f),
                (t.child = o),
                (o = f),
                (f = t.child),
                (y = e.child.memoizedState),
                (y =
                    y === null
                        ? Za(i)
                        : {
                              baseLanes: y.baseLanes | i,
                              cachePool: null,
                              transitions: y.transitions,
                          }),
                (f.memoizedState = y),
                (f.childLanes = e.childLanes & ~i),
                (t.memoizedState = Qa),
                o
            );
        }
        return (
            (f = e.child),
            (e = f.sibling),
            (o = vn(f, { mode: "visible", children: o.children })),
            (t.mode & 1) === 0 && (o.lanes = i),
            (o.return = t),
            (o.sibling = null),
            e !== null &&
                ((i = t.deletions),
                i === null
                    ? ((t.deletions = [e]), (t.flags |= 16))
                    : i.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
        );
    }
    function Ja(e, t) {
        return (
            (t = Us({ mode: "visible", children: t }, e.mode, 0, null)),
            (t.return = e),
            (e.child = t)
        );
    }
    function Ns(e, t, i, o) {
        return (
            o !== null && Pa(o),
            ar(t, e.child, null, i),
            (e = Ja(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
        );
    }
    function wy(e, t, i, o, u, f, y) {
        if (i)
            return t.flags & 256
                ? ((t.flags &= -257), (o = Ga(Error(s(422)))), Ns(e, t, y, o))
                : t.memoizedState !== null
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((f = o.fallback),
                    (u = t.mode),
                    (o = Us(
                        { mode: "visible", children: o.children },
                        u,
                        0,
                        null,
                    )),
                    (f = Fn(f, u, y, null)),
                    (f.flags |= 2),
                    (o.return = t),
                    (f.return = t),
                    (o.sibling = f),
                    (t.child = o),
                    (t.mode & 1) !== 0 && ar(t, e.child, null, y),
                    (t.child.memoizedState = Za(y)),
                    (t.memoizedState = Qa),
                    f);
        if ((t.mode & 1) === 0) return Ns(e, t, y, null);
        if (u.data === "$!") {
            if (((o = u.nextSibling && u.nextSibling.dataset), o))
                var S = o.dgst;
            return (
                (o = S),
                (f = Error(s(419))),
                (o = Ga(f, o, void 0)),
                Ns(e, t, y, o)
            );
        }
        if (((S = (y & e.childLanes) !== 0), st || S)) {
            if (((o = $e), o !== null)) {
                switch (y & -y) {
                    case 4:
                        u = 2;
                        break;
                    case 16:
                        u = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        u = 32;
                        break;
                    case 536870912:
                        u = 268435456;
                        break;
                    default:
                        u = 0;
                }
                ((u = (u & (o.suspendedLanes | y)) !== 0 ? 0 : u),
                    u !== 0 &&
                        u !== f.retryLane &&
                        ((f.retryLane = u), Gt(e, u), Rt(o, e, u, -1)));
            }
            return (ml(), (o = Ga(Error(s(421)))), Ns(e, t, y, o));
        }
        return u.data === "$?"
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = Ay.bind(null, e)),
              (u._reactRetry = t),
              null)
            : ((e = f.treeContext),
              (ht = an(u.nextSibling)),
              (ft = t),
              (Ne = !0),
              (Et = null),
              e !== null &&
                  ((vt[xt++] = Ht),
                  (vt[xt++] = Kt),
                  (vt[xt++] = Nn),
                  (Ht = e.id),
                  (Kt = e.overflow),
                  (Nn = t)),
              (t = Ja(t, o.children)),
              (t.flags |= 4096),
              t);
    }
    function wf(e, t, i) {
        e.lanes |= t;
        var o = e.alternate;
        (o !== null && (o.lanes |= t), Ma(e.return, t, i));
    }
    function el(e, t, i, o, u) {
        var f = e.memoizedState;
        f === null
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: o,
                  tail: i,
                  tailMode: u,
              })
            : ((f.isBackwards = t),
              (f.rendering = null),
              (f.renderingStartTime = 0),
              (f.last = o),
              (f.tail = i),
              (f.tailMode = u));
    }
    function Sf(e, t, i) {
        var o = t.pendingProps,
            u = o.revealOrder,
            f = o.tail;
        if ((tt(e, t, o.children, i), (o = Me.current), (o & 2) !== 0))
            ((o = (o & 1) | 2), (t.flags |= 128));
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && wf(e, i, t);
                    else if (e.tag === 19) wf(e, i, t);
                    else if (e.child !== null) {
                        ((e.child.return = e), (e = e.child));
                        continue;
                    }
                    if (e === t) break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t) break e;
                        e = e.return;
                    }
                    ((e.sibling.return = e.return), (e = e.sibling));
                }
            o &= 1;
        }
        if ((Ce(Me, o), (t.mode & 1) === 0)) t.memoizedState = null;
        else
            switch (u) {
                case "forwards":
                    for (i = t.child, u = null; i !== null; )
                        ((e = i.alternate),
                            e !== null && bs(e) === null && (u = i),
                            (i = i.sibling));
                    ((i = u),
                        i === null
                            ? ((u = t.child), (t.child = null))
                            : ((u = i.sibling), (i.sibling = null)),
                        el(t, !1, u, i, f));
                    break;
                case "backwards":
                    for (i = null, u = t.child, t.child = null; u !== null; ) {
                        if (((e = u.alternate), e !== null && bs(e) === null)) {
                            t.child = u;
                            break;
                        }
                        ((e = u.sibling), (u.sibling = i), (i = u), (u = e));
                    }
                    el(t, !0, i, null, f);
                    break;
                case "together":
                    el(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
        return t.child;
    }
    function Ms(e, t) {
        (t.mode & 1) === 0 &&
            e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Xt(e, t, i) {
        if (
            (e !== null && (t.dependencies = e.dependencies),
            (zn |= t.lanes),
            (i & t.childLanes) === 0)
        )
            return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (
                e = t.child,
                    i = vn(e, e.pendingProps),
                    t.child = i,
                    i.return = t;
                e.sibling !== null;
            )
                ((e = e.sibling),
                    (i = i.sibling = vn(e, e.pendingProps)),
                    (i.return = t));
            i.sibling = null;
        }
        return t.child;
    }
    function Sy(e, t, i) {
        switch (t.tag) {
            case 3:
                (yf(t), or());
                break;
            case 5:
                zd(t);
                break;
            case 1:
                it(t.type) && fs(t);
                break;
            case 4:
                Aa(t, t.stateNode.containerInfo);
                break;
            case 10:
                var o = t.type._context,
                    u = t.memoizedProps.value;
                (Ce(vs, o._currentValue), (o._currentValue = u));
                break;
            case 13:
                if (((o = t.memoizedState), o !== null))
                    return o.dehydrated !== null
                        ? (Ce(Me, Me.current & 1), (t.flags |= 128), null)
                        : (i & t.child.childLanes) !== 0
                          ? xf(e, t, i)
                          : (Ce(Me, Me.current & 1),
                            (e = Xt(e, t, i)),
                            e !== null ? e.sibling : null);
                Ce(Me, Me.current & 1);
                break;
            case 19:
                if (((o = (i & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
                    if (o) return Sf(e, t, i);
                    t.flags |= 128;
                }
                if (
                    ((u = t.memoizedState),
                    u !== null &&
                        ((u.rendering = null),
                        (u.tail = null),
                        (u.lastEffect = null)),
                    Ce(Me, Me.current),
                    o)
                )
                    break;
                return null;
            case 22:
            case 23:
                return ((t.lanes = 0), pf(e, t, i));
        }
        return Xt(e, t, i);
    }
    var bf, tl, kf, Cf;
    ((bf = function (e, t) {
        for (var i = t.child; i !== null; ) {
            if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
            else if (i.tag !== 4 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
            }
            if (i === t) break;
            for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) return;
                i = i.return;
            }
            ((i.sibling.return = i.return), (i = i.sibling));
        }
    }),
        (tl = function () {}),
        (kf = function (e, t, i, o) {
            var u = e.memoizedProps;
            if (u !== o) {
                ((e = t.stateNode), Rn(Lt.current));
                var f = null;
                switch (i) {
                    case "input":
                        ((u = Mo(e, u)), (o = Mo(e, o)), (f = []));
                        break;
                    case "select":
                        ((u = X({}, u, { value: void 0 })),
                            (o = X({}, o, { value: void 0 })),
                            (f = []));
                        break;
                    case "textarea":
                        ((u = Ao(e, u)), (o = Ao(e, o)), (f = []));
                        break;
                    default:
                        typeof u.onClick != "function" &&
                            typeof o.onClick == "function" &&
                            (e.onclick = us);
                }
                _o(i, o);
                var y;
                i = null;
                for (F in u)
                    if (
                        !o.hasOwnProperty(F) &&
                        u.hasOwnProperty(F) &&
                        u[F] != null
                    )
                        if (F === "style") {
                            var S = u[F];
                            for (y in S)
                                S.hasOwnProperty(y) &&
                                    (i || (i = {}), (i[y] = ""));
                        } else
                            F !== "dangerouslySetInnerHTML" &&
                                F !== "children" &&
                                F !== "suppressContentEditableWarning" &&
                                F !== "suppressHydrationWarning" &&
                                F !== "autoFocus" &&
                                (l.hasOwnProperty(F)
                                    ? f || (f = [])
                                    : (f = f || []).push(F, null));
                for (F in o) {
                    var k = o[F];
                    if (
                        ((S = u != null ? u[F] : void 0),
                        o.hasOwnProperty(F) &&
                            k !== S &&
                            (k != null || S != null))
                    )
                        if (F === "style")
                            if (S) {
                                for (y in S)
                                    !S.hasOwnProperty(y) ||
                                        (k && k.hasOwnProperty(y)) ||
                                        (i || (i = {}), (i[y] = ""));
                                for (y in k)
                                    k.hasOwnProperty(y) &&
                                        S[y] !== k[y] &&
                                        (i || (i = {}), (i[y] = k[y]));
                            } else
                                (i || (f || (f = []), f.push(F, i)), (i = k));
                        else
                            F === "dangerouslySetInnerHTML"
                                ? ((k = k ? k.__html : void 0),
                                  (S = S ? S.__html : void 0),
                                  k != null &&
                                      S !== k &&
                                      (f = f || []).push(F, k))
                                : F === "children"
                                  ? (typeof k != "string" &&
                                        typeof k != "number") ||
                                    (f = f || []).push(F, "" + k)
                                  : F !== "suppressContentEditableWarning" &&
                                    F !== "suppressHydrationWarning" &&
                                    (l.hasOwnProperty(F)
                                        ? (k != null &&
                                              F === "onScroll" &&
                                              je("scroll", e),
                                          f || S === k || (f = []))
                                        : (f = f || []).push(F, k));
                }
                i && (f = f || []).push("style", i);
                var F = f;
                (t.updateQueue = F) && (t.flags |= 4);
            }
        }),
        (Cf = function (e, t, i, o) {
            i !== o && (t.flags |= 4);
        }));
    function ui(e, t) {
        if (!Ne)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var i = null; t !== null; )
                        (t.alternate !== null && (i = t), (t = t.sibling));
                    i === null ? (e.tail = null) : (i.sibling = null);
                    break;
                case "collapsed":
                    i = e.tail;
                    for (var o = null; i !== null; )
                        (i.alternate !== null && (o = i), (i = i.sibling));
                    o === null
                        ? t || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (o.sibling = null);
            }
    }
    function Qe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            i = 0,
            o = 0;
        if (t)
            for (var u = e.child; u !== null; )
                ((i |= u.lanes | u.childLanes),
                    (o |= u.subtreeFlags & 14680064),
                    (o |= u.flags & 14680064),
                    (u.return = e),
                    (u = u.sibling));
        else
            for (u = e.child; u !== null; )
                ((i |= u.lanes | u.childLanes),
                    (o |= u.subtreeFlags),
                    (o |= u.flags),
                    (u.return = e),
                    (u = u.sibling));
        return ((e.subtreeFlags |= o), (e.childLanes = i), t);
    }
    function by(e, t, i) {
        var o = t.pendingProps;
        switch ((ka(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return (Qe(t), null);
            case 1:
                return (it(t.type) && ds(), Qe(t), null);
            case 3:
                return (
                    (o = t.stateNode),
                    cr(),
                    Pe(rt),
                    Pe(Xe),
                    La(),
                    o.pendingContext &&
                        ((o.context = o.pendingContext),
                        (o.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (gs(t)
                            ? (t.flags |= 4)
                            : e === null ||
                              (e.memoizedState.isDehydrated &&
                                  (t.flags & 256) === 0) ||
                              ((t.flags |= 1024),
                              Et !== null && (fl(Et), (Et = null)))),
                    tl(e, t),
                    Qe(t),
                    null
                );
            case 5:
                za(t);
                var u = Rn(ii.current);
                if (((i = t.type), e !== null && t.stateNode != null))
                    (kf(e, t, i, o, u),
                        e.ref !== t.ref &&
                            ((t.flags |= 512), (t.flags |= 2097152)));
                else {
                    if (!o) {
                        if (t.stateNode === null) throw Error(s(166));
                        return (Qe(t), null);
                    }
                    if (((e = Rn(Lt.current)), gs(t))) {
                        ((o = t.stateNode), (i = t.type));
                        var f = t.memoizedProps;
                        switch (
                            ((o[_t] = t),
                            (o[Jr] = f),
                            (e = (t.mode & 1) !== 0),
                            i)
                        ) {
                            case "dialog":
                                (je("cancel", o), je("close", o));
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                je("load", o);
                                break;
                            case "video":
                            case "audio":
                                for (u = 0; u < qr.length; u++) je(qr[u], o);
                                break;
                            case "source":
                                je("error", o);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                (je("error", o), je("load", o));
                                break;
                            case "details":
                                je("toggle", o);
                                break;
                            case "input":
                                (rc(o, f), je("invalid", o));
                                break;
                            case "select":
                                ((o._wrapperState = {
                                    wasMultiple: !!f.multiple,
                                }),
                                    je("invalid", o));
                                break;
                            case "textarea":
                                (oc(o, f), je("invalid", o));
                        }
                        (_o(i, f), (u = null));
                        for (var y in f)
                            if (f.hasOwnProperty(y)) {
                                var S = f[y];
                                y === "children"
                                    ? typeof S == "string"
                                        ? o.textContent !== S &&
                                          (f.suppressHydrationWarning !== !0 &&
                                              ls(o.textContent, S, e),
                                          (u = ["children", S]))
                                        : typeof S == "number" &&
                                          o.textContent !== "" + S &&
                                          (f.suppressHydrationWarning !== !0 &&
                                              ls(o.textContent, S, e),
                                          (u = ["children", "" + S]))
                                    : l.hasOwnProperty(y) &&
                                      S != null &&
                                      y === "onScroll" &&
                                      je("scroll", o);
                            }
                        switch (i) {
                            case "input":
                                (Oi(o), sc(o, f, !0));
                                break;
                            case "textarea":
                                (Oi(o), lc(o));
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof f.onClick == "function" &&
                                    (o.onclick = us);
                        }
                        ((o = u),
                            (t.updateQueue = o),
                            o !== null && (t.flags |= 4));
                    } else {
                        ((y = u.nodeType === 9 ? u : u.ownerDocument),
                            e === "http://www.w3.org/1999/xhtml" && (e = uc(i)),
                            e === "http://www.w3.org/1999/xhtml"
                                ? i === "script"
                                    ? ((e = y.createElement("div")),
                                      (e.innerHTML = "<script><\/script>"),
                                      (e = e.removeChild(e.firstChild)))
                                    : typeof o.is == "string"
                                      ? (e = y.createElement(i, { is: o.is }))
                                      : ((e = y.createElement(i)),
                                        i === "select" &&
                                            ((y = e),
                                            o.multiple
                                                ? (y.multiple = !0)
                                                : o.size && (y.size = o.size)))
                                : (e = y.createElementNS(e, i)),
                            (e[_t] = t),
                            (e[Jr] = o),
                            bf(e, t, !1, !1),
                            (t.stateNode = e));
                        e: {
                            switch (((y = Lo(i, o)), i)) {
                                case "dialog":
                                    (je("cancel", e), je("close", e), (u = o));
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    (je("load", e), (u = o));
                                    break;
                                case "video":
                                case "audio":
                                    for (u = 0; u < qr.length; u++)
                                        je(qr[u], e);
                                    u = o;
                                    break;
                                case "source":
                                    (je("error", e), (u = o));
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    (je("error", e), je("load", e), (u = o));
                                    break;
                                case "details":
                                    (je("toggle", e), (u = o));
                                    break;
                                case "input":
                                    (rc(e, o),
                                        (u = Mo(e, o)),
                                        je("invalid", e));
                                    break;
                                case "option":
                                    u = o;
                                    break;
                                case "select":
                                    ((e._wrapperState = {
                                        wasMultiple: !!o.multiple,
                                    }),
                                        (u = X({}, o, { value: void 0 })),
                                        je("invalid", e));
                                    break;
                                case "textarea":
                                    (oc(e, o),
                                        (u = Ao(e, o)),
                                        je("invalid", e));
                                    break;
                                default:
                                    u = o;
                            }
                            (_o(i, u), (S = u));
                            for (f in S)
                                if (S.hasOwnProperty(f)) {
                                    var k = S[f];
                                    f === "style"
                                        ? fc(e, k)
                                        : f === "dangerouslySetInnerHTML"
                                          ? ((k = k ? k.__html : void 0),
                                            k != null && cc(e, k))
                                          : f === "children"
                                            ? typeof k == "string"
                                                ? (i !== "textarea" ||
                                                      k !== "") &&
                                                  Dr(e, k)
                                                : typeof k == "number" &&
                                                  Dr(e, "" + k)
                                            : f !==
                                                  "suppressContentEditableWarning" &&
                                              f !==
                                                  "suppressHydrationWarning" &&
                                              f !== "autoFocus" &&
                                              (l.hasOwnProperty(f)
                                                  ? k != null &&
                                                    f === "onScroll" &&
                                                    je("scroll", e)
                                                  : k != null && M(e, f, k, y));
                                }
                            switch (i) {
                                case "input":
                                    (Oi(e), sc(e, o, !1));
                                    break;
                                case "textarea":
                                    (Oi(e), lc(e));
                                    break;
                                case "option":
                                    o.value != null &&
                                        e.setAttribute(
                                            "value",
                                            "" + we(o.value),
                                        );
                                    break;
                                case "select":
                                    ((e.multiple = !!o.multiple),
                                        (f = o.value),
                                        f != null
                                            ? Hn(e, !!o.multiple, f, !1)
                                            : o.defaultValue != null &&
                                              Hn(
                                                  e,
                                                  !!o.multiple,
                                                  o.defaultValue,
                                                  !0,
                                              ));
                                    break;
                                default:
                                    typeof u.onClick == "function" &&
                                        (e.onclick = us);
                            }
                            switch (i) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    o = !!o.autoFocus;
                                    break e;
                                case "img":
                                    o = !0;
                                    break e;
                                default:
                                    o = !1;
                            }
                        }
                        o && (t.flags |= 4);
                    }
                    t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
                }
                return (Qe(t), null);
            case 6:
                if (e && t.stateNode != null) Cf(e, t, e.memoizedProps, o);
                else {
                    if (typeof o != "string" && t.stateNode === null)
                        throw Error(s(166));
                    if (((i = Rn(ii.current)), Rn(Lt.current), gs(t))) {
                        if (
                            ((o = t.stateNode),
                            (i = t.memoizedProps),
                            (o[_t] = t),
                            (f = o.nodeValue !== i) && ((e = ft), e !== null))
                        )
                            switch (e.tag) {
                                case 3:
                                    ls(o.nodeValue, i, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !==
                                        !0 &&
                                        ls(o.nodeValue, i, (e.mode & 1) !== 0);
                            }
                        f && (t.flags |= 4);
                    } else
                        ((o = (
                            i.nodeType === 9 ? i : i.ownerDocument
                        ).createTextNode(o)),
                            (o[_t] = t),
                            (t.stateNode = o));
                }
                return (Qe(t), null);
            case 13:
                if (
                    (Pe(Me),
                    (o = t.memoizedState),
                    e === null ||
                        (e.memoizedState !== null &&
                            e.memoizedState.dehydrated !== null))
                ) {
                    if (
                        Ne &&
                        ht !== null &&
                        (t.mode & 1) !== 0 &&
                        (t.flags & 128) === 0
                    )
                        (Pd(), or(), (t.flags |= 98560), (f = !1));
                    else if (
                        ((f = gs(t)), o !== null && o.dehydrated !== null)
                    ) {
                        if (e === null) {
                            if (!f) throw Error(s(318));
                            if (
                                ((f = t.memoizedState),
                                (f = f !== null ? f.dehydrated : null),
                                !f)
                            )
                                throw Error(s(317));
                            f[_t] = t;
                        } else
                            (or(),
                                (t.flags & 128) === 0 &&
                                    (t.memoizedState = null),
                                (t.flags |= 4));
                        (Qe(t), (f = !1));
                    } else (Et !== null && (fl(Et), (Et = null)), (f = !0));
                    if (!f) return t.flags & 65536 ? t : null;
                }
                return (t.flags & 128) !== 0
                    ? ((t.lanes = i), t)
                    : ((o = o !== null),
                      o !== (e !== null && e.memoizedState !== null) &&
                          o &&
                          ((t.child.flags |= 8192),
                          (t.mode & 1) !== 0 &&
                              (e === null || (Me.current & 1) !== 0
                                  ? Ue === 0 && (Ue = 3)
                                  : ml())),
                      t.updateQueue !== null && (t.flags |= 4),
                      Qe(t),
                      null);
            case 4:
                return (
                    cr(),
                    tl(e, t),
                    e === null && Qr(t.stateNode.containerInfo),
                    Qe(t),
                    null
                );
            case 10:
                return (Na(t.type._context), Qe(t), null);
            case 17:
                return (it(t.type) && ds(), Qe(t), null);
            case 19:
                if ((Pe(Me), (f = t.memoizedState), f === null))
                    return (Qe(t), null);
                if (
                    ((o = (t.flags & 128) !== 0), (y = f.rendering), y === null)
                )
                    if (o) ui(f, !1);
                    else {
                        if (Ue !== 0 || (e !== null && (e.flags & 128) !== 0))
                            for (e = t.child; e !== null; ) {
                                if (((y = bs(e)), y !== null)) {
                                    for (
                                        t.flags |= 128,
                                            ui(f, !1),
                                            o = y.updateQueue,
                                            o !== null &&
                                                ((t.updateQueue = o),
                                                (t.flags |= 4)),
                                            t.subtreeFlags = 0,
                                            o = i,
                                            i = t.child;
                                        i !== null;
                                    )
                                        ((f = i),
                                            (e = o),
                                            (f.flags &= 14680066),
                                            (y = f.alternate),
                                            y === null
                                                ? ((f.childLanes = 0),
                                                  (f.lanes = e),
                                                  (f.child = null),
                                                  (f.subtreeFlags = 0),
                                                  (f.memoizedProps = null),
                                                  (f.memoizedState = null),
                                                  (f.updateQueue = null),
                                                  (f.dependencies = null),
                                                  (f.stateNode = null))
                                                : ((f.childLanes =
                                                      y.childLanes),
                                                  (f.lanes = y.lanes),
                                                  (f.child = y.child),
                                                  (f.subtreeFlags = 0),
                                                  (f.deletions = null),
                                                  (f.memoizedProps =
                                                      y.memoizedProps),
                                                  (f.memoizedState =
                                                      y.memoizedState),
                                                  (f.updateQueue =
                                                      y.updateQueue),
                                                  (f.type = y.type),
                                                  (e = y.dependencies),
                                                  (f.dependencies =
                                                      e === null
                                                          ? null
                                                          : {
                                                                lanes: e.lanes,
                                                                firstContext:
                                                                    e.firstContext,
                                                            })),
                                            (i = i.sibling));
                                    return (
                                        Ce(Me, (Me.current & 1) | 2),
                                        t.child
                                    );
                                }
                                e = e.sibling;
                            }
                        f.tail !== null &&
                            _e() > pr &&
                            ((t.flags |= 128),
                            (o = !0),
                            ui(f, !1),
                            (t.lanes = 4194304));
                    }
                else {
                    if (!o)
                        if (((e = bs(y)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (o = !0),
                                (i = e.updateQueue),
                                i !== null &&
                                    ((t.updateQueue = i), (t.flags |= 4)),
                                ui(f, !0),
                                f.tail === null &&
                                    f.tailMode === "hidden" &&
                                    !y.alternate &&
                                    !Ne)
                            )
                                return (Qe(t), null);
                        } else
                            2 * _e() - f.renderingStartTime > pr &&
                                i !== 1073741824 &&
                                ((t.flags |= 128),
                                (o = !0),
                                ui(f, !1),
                                (t.lanes = 4194304));
                    f.isBackwards
                        ? ((y.sibling = t.child), (t.child = y))
                        : ((i = f.last),
                          i !== null ? (i.sibling = y) : (t.child = y),
                          (f.last = y));
                }
                return f.tail !== null
                    ? ((t = f.tail),
                      (f.rendering = t),
                      (f.tail = t.sibling),
                      (f.renderingStartTime = _e()),
                      (t.sibling = null),
                      (i = Me.current),
                      Ce(Me, o ? (i & 1) | 2 : i & 1),
                      t)
                    : (Qe(t), null);
            case 22:
            case 23:
                return (
                    pl(),
                    (o = t.memoizedState !== null),
                    e !== null &&
                        (e.memoizedState !== null) !== o &&
                        (t.flags |= 8192),
                    o && (t.mode & 1) !== 0
                        ? (pt & 1073741824) !== 0 &&
                          (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : Qe(t),
                    null
                );
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(s(156, t.tag));
    }
    function ky(e, t) {
        switch ((ka(t), t.tag)) {
            case 1:
                return (
                    it(t.type) && ds(),
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 3:
                return (
                    cr(),
                    Pe(rt),
                    Pe(Xe),
                    La(),
                    (e = t.flags),
                    (e & 65536) !== 0 && (e & 128) === 0
                        ? ((t.flags = (e & -65537) | 128), t)
                        : null
                );
            case 5:
                return (za(t), null);
            case 13:
                if (
                    (Pe(Me),
                    (e = t.memoizedState),
                    e !== null && e.dehydrated !== null)
                ) {
                    if (t.alternate === null) throw Error(s(340));
                    or();
                }
                return (
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 19:
                return (Pe(Me), null);
            case 4:
                return (cr(), null);
            case 10:
                return (Na(t.type._context), null);
            case 22:
            case 23:
                return (pl(), null);
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Ds = !1,
        Ze = !1,
        Cy = typeof WeakSet == "function" ? WeakSet : Set,
        Q = null;
    function fr(e, t) {
        var i = e.ref;
        if (i !== null)
            if (typeof i == "function")
                try {
                    i(null);
                } catch (o) {
                    Ae(e, t, o);
                }
            else i.current = null;
    }
    function nl(e, t, i) {
        try {
            i();
        } catch (o) {
            Ae(e, t, o);
        }
    }
    var jf = !1;
    function jy(e, t) {
        if (((pa = Qi), (e = nd()), oa(e))) {
            if ("selectionStart" in e)
                var i = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    i = ((i = e.ownerDocument) && i.defaultView) || window;
                    var o = i.getSelection && i.getSelection();
                    if (o && o.rangeCount !== 0) {
                        i = o.anchorNode;
                        var u = o.anchorOffset,
                            f = o.focusNode;
                        o = o.focusOffset;
                        try {
                            (i.nodeType, f.nodeType);
                        } catch {
                            i = null;
                            break e;
                        }
                        var y = 0,
                            S = -1,
                            k = -1,
                            F = 0,
                            $ = 0,
                            H = e,
                            W = null;
                        t: for (;;) {
                            for (
                                var q;
                                H !== i ||
                                    (u !== 0 && H.nodeType !== 3) ||
                                    (S = y + u),
                                    H !== f ||
                                        (o !== 0 && H.nodeType !== 3) ||
                                        (k = y + o),
                                    H.nodeType === 3 &&
                                        (y += H.nodeValue.length),
                                    (q = H.firstChild) !== null;
                            )
                                ((W = H), (H = q));
                            for (;;) {
                                if (H === e) break t;
                                if (
                                    (W === i && ++F === u && (S = y),
                                    W === f && ++$ === o && (k = y),
                                    (q = H.nextSibling) !== null)
                                )
                                    break;
                                ((H = W), (W = H.parentNode));
                            }
                            H = q;
                        }
                        i = S === -1 || k === -1 ? null : { start: S, end: k };
                    } else i = null;
                }
            i = i || { start: 0, end: 0 };
        } else i = null;
        for (
            ma = { focusedElem: e, selectionRange: i }, Qi = !1, Q = t;
            Q !== null;
        )
            if (
                ((t = Q),
                (e = t.child),
                (t.subtreeFlags & 1028) !== 0 && e !== null)
            )
                ((e.return = t), (Q = e));
            else
                for (; Q !== null; ) {
                    t = Q;
                    try {
                        var J = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (J !== null) {
                                        var ee = J.memoizedProps,
                                            Le = J.memoizedState,
                                            A = t.stateNode,
                                            P = A.getSnapshotBeforeUpdate(
                                                t.elementType === t.type
                                                    ? ee
                                                    : Nt(t.type, ee),
                                                Le,
                                            );
                                        A.__reactInternalSnapshotBeforeUpdate =
                                            P;
                                    }
                                    break;
                                case 3:
                                    var _ = t.stateNode.containerInfo;
                                    _.nodeType === 1
                                        ? (_.textContent = "")
                                        : _.nodeType === 9 &&
                                          _.documentElement &&
                                          _.removeChild(_.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(s(163));
                            }
                    } catch (Y) {
                        Ae(t, t.return, Y);
                    }
                    if (((e = t.sibling), e !== null)) {
                        ((e.return = t.return), (Q = e));
                        break;
                    }
                    Q = t.return;
                }
        return ((J = jf), (jf = !1), J);
    }
    function ci(e, t, i) {
        var o = t.updateQueue;
        if (((o = o !== null ? o.lastEffect : null), o !== null)) {
            var u = (o = o.next);
            do {
                if ((u.tag & e) === e) {
                    var f = u.destroy;
                    ((u.destroy = void 0), f !== void 0 && nl(t, i, f));
                }
                u = u.next;
            } while (u !== o);
        }
    }
    function Rs(e, t) {
        if (
            ((t = t.updateQueue),
            (t = t !== null ? t.lastEffect : null),
            t !== null)
        ) {
            var i = (t = t.next);
            do {
                if ((i.tag & e) === e) {
                    var o = i.create;
                    i.destroy = o();
                }
                i = i.next;
            } while (i !== t);
        }
    }
    function rl(e) {
        var t = e.ref;
        if (t !== null) {
            var i = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = i;
                    break;
                default:
                    e = i;
            }
            typeof t == "function" ? t(e) : (t.current = e);
        }
    }
    function Pf(e) {
        var t = e.alternate;
        (t !== null && ((e.alternate = null), Pf(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 &&
                ((t = e.stateNode),
                t !== null &&
                    (delete t[_t],
                    delete t[Jr],
                    delete t[xa],
                    delete t[ay],
                    delete t[ly])),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
    }
    function Tf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Ef(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || Tf(e.return)) return null;
                e = e.return;
            }
            for (
                e.sibling.return = e.return, e = e.sibling;
                e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
            ) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                ((e.child.return = e), (e = e.child));
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function il(e, t, i) {
        var o = e.tag;
        if (o === 5 || o === 6)
            ((e = e.stateNode),
                t
                    ? i.nodeType === 8
                        ? i.parentNode.insertBefore(e, t)
                        : i.insertBefore(e, t)
                    : (i.nodeType === 8
                          ? ((t = i.parentNode), t.insertBefore(e, i))
                          : ((t = i), t.appendChild(e)),
                      (i = i._reactRootContainer),
                      i != null || t.onclick !== null || (t.onclick = us)));
        else if (o !== 4 && ((e = e.child), e !== null))
            for (il(e, t, i), e = e.sibling; e !== null; )
                (il(e, t, i), (e = e.sibling));
    }
    function sl(e, t, i) {
        var o = e.tag;
        if (o === 5 || o === 6)
            ((e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e));
        else if (o !== 4 && ((e = e.child), e !== null))
            for (sl(e, t, i), e = e.sibling; e !== null; )
                (sl(e, t, i), (e = e.sibling));
    }
    var Ke = null,
        Mt = !1;
    function hn(e, t, i) {
        for (i = i.child; i !== null; ) (Nf(e, t, i), (i = i.sibling));
    }
    function Nf(e, t, i) {
        if (zt && typeof zt.onCommitFiberUnmount == "function")
            try {
                zt.onCommitFiberUnmount(Hi, i);
            } catch {}
        switch (i.tag) {
            case 5:
                Ze || fr(i, t);
            case 6:
                var o = Ke,
                    u = Mt;
                ((Ke = null),
                    hn(e, t, i),
                    (Ke = o),
                    (Mt = u),
                    Ke !== null &&
                        (Mt
                            ? ((e = Ke),
                              (i = i.stateNode),
                              e.nodeType === 8
                                  ? e.parentNode.removeChild(i)
                                  : e.removeChild(i))
                            : Ke.removeChild(i.stateNode)));
                break;
            case 18:
                Ke !== null &&
                    (Mt
                        ? ((e = Ke),
                          (i = i.stateNode),
                          e.nodeType === 8
                              ? va(e.parentNode, i)
                              : e.nodeType === 1 && va(e, i),
                          Ur(e))
                        : va(Ke, i.stateNode));
                break;
            case 4:
                ((o = Ke),
                    (u = Mt),
                    (Ke = i.stateNode.containerInfo),
                    (Mt = !0),
                    hn(e, t, i),
                    (Ke = o),
                    (Mt = u));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (
                    !Ze &&
                    ((o = i.updateQueue),
                    o !== null && ((o = o.lastEffect), o !== null))
                ) {
                    u = o = o.next;
                    do {
                        var f = u,
                            y = f.destroy;
                        ((f = f.tag),
                            y !== void 0 &&
                                ((f & 2) !== 0 || (f & 4) !== 0) &&
                                nl(i, t, y),
                            (u = u.next));
                    } while (u !== o);
                }
                hn(e, t, i);
                break;
            case 1:
                if (
                    !Ze &&
                    (fr(i, t),
                    (o = i.stateNode),
                    typeof o.componentWillUnmount == "function")
                )
                    try {
                        ((o.props = i.memoizedProps),
                            (o.state = i.memoizedState),
                            o.componentWillUnmount());
                    } catch (S) {
                        Ae(i, t, S);
                    }
                hn(e, t, i);
                break;
            case 21:
                hn(e, t, i);
                break;
            case 22:
                i.mode & 1
                    ? ((Ze = (o = Ze) || i.memoizedState !== null),
                      hn(e, t, i),
                      (Ze = o))
                    : hn(e, t, i);
                break;
            default:
                hn(e, t, i);
        }
    }
    function Mf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var i = e.stateNode;
            (i === null && (i = e.stateNode = new Cy()),
                t.forEach(function (o) {
                    var u = zy.bind(null, e, o);
                    i.has(o) || (i.add(o), o.then(u, u));
                }));
        }
    }
    function Dt(e, t) {
        var i = t.deletions;
        if (i !== null)
            for (var o = 0; o < i.length; o++) {
                var u = i[o];
                try {
                    var f = e,
                        y = t,
                        S = y;
                    e: for (; S !== null; ) {
                        switch (S.tag) {
                            case 5:
                                ((Ke = S.stateNode), (Mt = !1));
                                break e;
                            case 3:
                                ((Ke = S.stateNode.containerInfo), (Mt = !0));
                                break e;
                            case 4:
                                ((Ke = S.stateNode.containerInfo), (Mt = !0));
                                break e;
                        }
                        S = S.return;
                    }
                    if (Ke === null) throw Error(s(160));
                    (Nf(f, y, u), (Ke = null), (Mt = !1));
                    var k = u.alternate;
                    (k !== null && (k.return = null), (u.return = null));
                } catch (F) {
                    Ae(u, t, F);
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; ) (Df(t, e), (t = t.sibling));
    }
    function Df(e, t) {
        var i = e.alternate,
            o = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if ((Dt(t, e), Ft(e), o & 4)) {
                    try {
                        (ci(3, e, e.return), Rs(3, e));
                    } catch (ee) {
                        Ae(e, e.return, ee);
                    }
                    try {
                        ci(5, e, e.return);
                    } catch (ee) {
                        Ae(e, e.return, ee);
                    }
                }
                break;
            case 1:
                (Dt(t, e), Ft(e), o & 512 && i !== null && fr(i, i.return));
                break;
            case 5:
                if (
                    (Dt(t, e),
                    Ft(e),
                    o & 512 && i !== null && fr(i, i.return),
                    e.flags & 32)
                ) {
                    var u = e.stateNode;
                    try {
                        Dr(u, "");
                    } catch (ee) {
                        Ae(e, e.return, ee);
                    }
                }
                if (o & 4 && ((u = e.stateNode), u != null)) {
                    var f = e.memoizedProps,
                        y = i !== null ? i.memoizedProps : f,
                        S = e.type,
                        k = e.updateQueue;
                    if (((e.updateQueue = null), k !== null))
                        try {
                            (S === "input" &&
                                f.type === "radio" &&
                                f.name != null &&
                                ic(u, f),
                                Lo(S, y));
                            var F = Lo(S, f);
                            for (y = 0; y < k.length; y += 2) {
                                var $ = k[y],
                                    H = k[y + 1];
                                $ === "style"
                                    ? fc(u, H)
                                    : $ === "dangerouslySetInnerHTML"
                                      ? cc(u, H)
                                      : $ === "children"
                                        ? Dr(u, H)
                                        : M(u, $, H, F);
                            }
                            switch (S) {
                                case "input":
                                    Do(u, f);
                                    break;
                                case "textarea":
                                    ac(u, f);
                                    break;
                                case "select":
                                    var W = u._wrapperState.wasMultiple;
                                    u._wrapperState.wasMultiple = !!f.multiple;
                                    var q = f.value;
                                    q != null
                                        ? Hn(u, !!f.multiple, q, !1)
                                        : W !== !!f.multiple &&
                                          (f.defaultValue != null
                                              ? Hn(
                                                    u,
                                                    !!f.multiple,
                                                    f.defaultValue,
                                                    !0,
                                                )
                                              : Hn(
                                                    u,
                                                    !!f.multiple,
                                                    f.multiple ? [] : "",
                                                    !1,
                                                ));
                            }
                            u[Jr] = f;
                        } catch (ee) {
                            Ae(e, e.return, ee);
                        }
                }
                break;
            case 6:
                if ((Dt(t, e), Ft(e), o & 4)) {
                    if (e.stateNode === null) throw Error(s(162));
                    ((u = e.stateNode), (f = e.memoizedProps));
                    try {
                        u.nodeValue = f;
                    } catch (ee) {
                        Ae(e, e.return, ee);
                    }
                }
                break;
            case 3:
                if (
                    (Dt(t, e),
                    Ft(e),
                    o & 4 && i !== null && i.memoizedState.isDehydrated)
                )
                    try {
                        Ur(t.containerInfo);
                    } catch (ee) {
                        Ae(e, e.return, ee);
                    }
                break;
            case 4:
                (Dt(t, e), Ft(e));
                break;
            case 13:
                (Dt(t, e),
                    Ft(e),
                    (u = e.child),
                    u.flags & 8192 &&
                        ((f = u.memoizedState !== null),
                        (u.stateNode.isHidden = f),
                        !f ||
                            (u.alternate !== null &&
                                u.alternate.memoizedState !== null) ||
                            (ll = _e())),
                    o & 4 && Mf(e));
                break;
            case 22:
                if (
                    (($ = i !== null && i.memoizedState !== null),
                    e.mode & 1
                        ? ((Ze = (F = Ze) || $), Dt(t, e), (Ze = F))
                        : Dt(t, e),
                    Ft(e),
                    o & 8192)
                ) {
                    if (
                        ((F = e.memoizedState !== null),
                        (e.stateNode.isHidden = F) && !$ && (e.mode & 1) !== 0)
                    )
                        for (Q = e, $ = e.child; $ !== null; ) {
                            for (H = Q = $; Q !== null; ) {
                                switch (((W = Q), (q = W.child), W.tag)) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ci(4, W, W.return);
                                        break;
                                    case 1:
                                        fr(W, W.return);
                                        var J = W.stateNode;
                                        if (
                                            typeof J.componentWillUnmount ==
                                            "function"
                                        ) {
                                            ((o = W), (i = W.return));
                                            try {
                                                ((t = o),
                                                    (J.props = t.memoizedProps),
                                                    (J.state = t.memoizedState),
                                                    J.componentWillUnmount());
                                            } catch (ee) {
                                                Ae(o, i, ee);
                                            }
                                        }
                                        break;
                                    case 5:
                                        fr(W, W.return);
                                        break;
                                    case 22:
                                        if (W.memoizedState !== null) {
                                            zf(H);
                                            continue;
                                        }
                                }
                                q !== null ? ((q.return = W), (Q = q)) : zf(H);
                            }
                            $ = $.sibling;
                        }
                    e: for ($ = null, H = e; ; ) {
                        if (H.tag === 5) {
                            if ($ === null) {
                                $ = H;
                                try {
                                    ((u = H.stateNode),
                                        F
                                            ? ((f = u.style),
                                              typeof f.setProperty == "function"
                                                  ? f.setProperty(
                                                        "display",
                                                        "none",
                                                        "important",
                                                    )
                                                  : (f.display = "none"))
                                            : ((S = H.stateNode),
                                              (k = H.memoizedProps.style),
                                              (y =
                                                  k != null &&
                                                  k.hasOwnProperty("display")
                                                      ? k.display
                                                      : null),
                                              (S.style.display = dc(
                                                  "display",
                                                  y,
                                              ))));
                                } catch (ee) {
                                    Ae(e, e.return, ee);
                                }
                            }
                        } else if (H.tag === 6) {
                            if ($ === null)
                                try {
                                    H.stateNode.nodeValue = F
                                        ? ""
                                        : H.memoizedProps;
                                } catch (ee) {
                                    Ae(e, e.return, ee);
                                }
                        } else if (
                            ((H.tag !== 22 && H.tag !== 23) ||
                                H.memoizedState === null ||
                                H === e) &&
                            H.child !== null
                        ) {
                            ((H.child.return = H), (H = H.child));
                            continue;
                        }
                        if (H === e) break e;
                        for (; H.sibling === null; ) {
                            if (H.return === null || H.return === e) break e;
                            ($ === H && ($ = null), (H = H.return));
                        }
                        ($ === H && ($ = null),
                            (H.sibling.return = H.return),
                            (H = H.sibling));
                    }
                }
                break;
            case 19:
                (Dt(t, e), Ft(e), o & 4 && Mf(e));
                break;
            case 21:
                break;
            default:
                (Dt(t, e), Ft(e));
        }
    }
    function Ft(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var i = e.return; i !== null; ) {
                        if (Tf(i)) {
                            var o = i;
                            break e;
                        }
                        i = i.return;
                    }
                    throw Error(s(160));
                }
                switch (o.tag) {
                    case 5:
                        var u = o.stateNode;
                        o.flags & 32 && (Dr(u, ""), (o.flags &= -33));
                        var f = Ef(e);
                        sl(e, f, u);
                        break;
                    case 3:
                    case 4:
                        var y = o.stateNode.containerInfo,
                            S = Ef(e);
                        il(e, S, y);
                        break;
                    default:
                        throw Error(s(161));
                }
            } catch (k) {
                Ae(e, e.return, k);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Py(e, t, i) {
        ((Q = e), Rf(e));
    }
    function Rf(e, t, i) {
        for (var o = (e.mode & 1) !== 0; Q !== null; ) {
            var u = Q,
                f = u.child;
            if (u.tag === 22 && o) {
                var y = u.memoizedState !== null || Ds;
                if (!y) {
                    var S = u.alternate,
                        k = (S !== null && S.memoizedState !== null) || Ze;
                    S = Ds;
                    var F = Ze;
                    if (((Ds = y), (Ze = k) && !F))
                        for (Q = u; Q !== null; )
                            ((y = Q),
                                (k = y.child),
                                y.tag === 22 && y.memoizedState !== null
                                    ? _f(u)
                                    : k !== null
                                      ? ((k.return = y), (Q = k))
                                      : _f(u));
                    for (; f !== null; ) ((Q = f), Rf(f), (f = f.sibling));
                    ((Q = u), (Ds = S), (Ze = F));
                }
                Af(e);
            } else
                (u.subtreeFlags & 8772) !== 0 && f !== null
                    ? ((f.return = u), (Q = f))
                    : Af(e);
        }
    }
    function Af(e) {
        for (; Q !== null; ) {
            var t = Q;
            if ((t.flags & 8772) !== 0) {
                var i = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ze || Rs(5, t);
                                break;
                            case 1:
                                var o = t.stateNode;
                                if (t.flags & 4 && !Ze)
                                    if (i === null) o.componentDidMount();
                                    else {
                                        var u =
                                            t.elementType === t.type
                                                ? i.memoizedProps
                                                : Nt(t.type, i.memoizedProps);
                                        o.componentDidUpdate(
                                            u,
                                            i.memoizedState,
                                            o.__reactInternalSnapshotBeforeUpdate,
                                        );
                                    }
                                var f = t.updateQueue;
                                f !== null && Ad(t, f, o);
                                break;
                            case 3:
                                var y = t.updateQueue;
                                if (y !== null) {
                                    if (((i = null), t.child !== null))
                                        switch (t.child.tag) {
                                            case 5:
                                                i = t.child.stateNode;
                                                break;
                                            case 1:
                                                i = t.child.stateNode;
                                        }
                                    Ad(t, y, i);
                                }
                                break;
                            case 5:
                                var S = t.stateNode;
                                if (i === null && t.flags & 4) {
                                    i = S;
                                    var k = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            k.autoFocus && i.focus();
                                            break;
                                        case "img":
                                            k.src && (i.src = k.src);
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (t.memoizedState === null) {
                                    var F = t.alternate;
                                    if (F !== null) {
                                        var $ = F.memoizedState;
                                        if ($ !== null) {
                                            var H = $.dehydrated;
                                            H !== null && Ur(H);
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(s(163));
                        }
                    Ze || (t.flags & 512 && rl(t));
                } catch (W) {
                    Ae(t, t.return, W);
                }
            }
            if (t === e) {
                Q = null;
                break;
            }
            if (((i = t.sibling), i !== null)) {
                ((i.return = t.return), (Q = i));
                break;
            }
            Q = t.return;
        }
    }
    function zf(e) {
        for (; Q !== null; ) {
            var t = Q;
            if (t === e) {
                Q = null;
                break;
            }
            var i = t.sibling;
            if (i !== null) {
                ((i.return = t.return), (Q = i));
                break;
            }
            Q = t.return;
        }
    }
    function _f(e) {
        for (; Q !== null; ) {
            var t = Q;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var i = t.return;
                        try {
                            Rs(4, t);
                        } catch (k) {
                            Ae(t, i, k);
                        }
                        break;
                    case 1:
                        var o = t.stateNode;
                        if (typeof o.componentDidMount == "function") {
                            var u = t.return;
                            try {
                                o.componentDidMount();
                            } catch (k) {
                                Ae(t, u, k);
                            }
                        }
                        var f = t.return;
                        try {
                            rl(t);
                        } catch (k) {
                            Ae(t, f, k);
                        }
                        break;
                    case 5:
                        var y = t.return;
                        try {
                            rl(t);
                        } catch (k) {
                            Ae(t, y, k);
                        }
                }
            } catch (k) {
                Ae(t, t.return, k);
            }
            if (t === e) {
                Q = null;
                break;
            }
            var S = t.sibling;
            if (S !== null) {
                ((S.return = t.return), (Q = S));
                break;
            }
            Q = t.return;
        }
    }
    var Ty = Math.ceil,
        As = V.ReactCurrentDispatcher,
        ol = V.ReactCurrentOwner,
        bt = V.ReactCurrentBatchConfig,
        ge = 0,
        $e = null,
        Oe = null,
        Ge = 0,
        pt = 0,
        hr = ln(0),
        Ue = 0,
        di = null,
        zn = 0,
        zs = 0,
        al = 0,
        fi = null,
        ot = null,
        ll = 0,
        pr = 1 / 0,
        qt = null,
        _s = !1,
        ul = null,
        pn = null,
        Ls = !1,
        mn = null,
        Vs = 0,
        hi = 0,
        cl = null,
        Fs = -1,
        Os = 0;
    function nt() {
        return (ge & 6) !== 0 ? _e() : Fs !== -1 ? Fs : (Fs = _e());
    }
    function gn(e) {
        return (e.mode & 1) === 0
            ? 1
            : (ge & 2) !== 0 && Ge !== 0
              ? Ge & -Ge
              : cy.transition !== null
                ? (Os === 0 && (Os = Tc()), Os)
                : ((e = Se),
                  e !== 0 ||
                      ((e = window.event),
                      (e = e === void 0 ? 16 : Lc(e.type))),
                  e);
    }
    function Rt(e, t, i, o) {
        if (50 < hi) throw ((hi = 0), (cl = null), Error(s(185)));
        (Vr(e, i, o),
            ((ge & 2) === 0 || e !== $e) &&
                (e === $e &&
                    ((ge & 2) === 0 && (zs |= i), Ue === 4 && yn(e, Ge)),
                at(e, o),
                i === 1 &&
                    ge === 0 &&
                    (t.mode & 1) === 0 &&
                    ((pr = _e() + 500), hs && cn())));
    }
    function at(e, t) {
        var i = e.callbackNode;
        c0(e, t);
        var o = Yi(e, e === $e ? Ge : 0);
        if (o === 0)
            (i !== null && Cc(i),
                (e.callbackNode = null),
                (e.callbackPriority = 0));
        else if (((t = o & -o), e.callbackPriority !== t)) {
            if ((i != null && Cc(i), t === 1))
                (e.tag === 0 ? uy(Vf.bind(null, e)) : Sd(Vf.bind(null, e)),
                    sy(function () {
                        (ge & 6) === 0 && cn();
                    }),
                    (i = null));
            else {
                switch (Ec(o)) {
                    case 1:
                        i = Wo;
                        break;
                    case 4:
                        i = jc;
                        break;
                    case 16:
                        i = $i;
                        break;
                    case 536870912:
                        i = Pc;
                        break;
                    default:
                        i = $i;
                }
                i = Hf(i, Lf.bind(null, e));
            }
            ((e.callbackPriority = t), (e.callbackNode = i));
        }
    }
    function Lf(e, t) {
        if (((Fs = -1), (Os = 0), (ge & 6) !== 0)) throw Error(s(327));
        var i = e.callbackNode;
        if (mr() && e.callbackNode !== i) return null;
        var o = Yi(e, e === $e ? Ge : 0);
        if (o === 0) return null;
        if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Is(e, o);
        else {
            t = o;
            var u = ge;
            ge |= 2;
            var f = Of();
            ($e !== e || Ge !== t) &&
                ((qt = null), (pr = _e() + 500), Ln(e, t));
            do
                try {
                    My();
                    break;
                } catch (S) {
                    Ff(e, S);
                }
            while (!0);
            (Ea(),
                (As.current = f),
                (ge = u),
                Oe !== null ? (t = 0) : (($e = null), (Ge = 0), (t = Ue)));
        }
        if (t !== 0) {
            if (
                (t === 2 && ((u = $o(e)), u !== 0 && ((o = u), (t = dl(e, u)))),
                t === 1)
            )
                throw ((i = di), Ln(e, 0), yn(e, o), at(e, _e()), i);
            if (t === 6) yn(e, o);
            else {
                if (
                    ((u = e.current.alternate),
                    (o & 30) === 0 &&
                        !Ey(u) &&
                        ((t = Is(e, o)),
                        t === 2 &&
                            ((f = $o(e)), f !== 0 && ((o = f), (t = dl(e, f)))),
                        t === 1))
                )
                    throw ((i = di), Ln(e, 0), yn(e, o), at(e, _e()), i);
                switch (((e.finishedWork = u), (e.finishedLanes = o), t)) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        Vn(e, ot, qt);
                        break;
                    case 3:
                        if (
                            (yn(e, o),
                            (o & 130023424) === o &&
                                ((t = ll + 500 - _e()), 10 < t))
                        ) {
                            if (Yi(e, 0) !== 0) break;
                            if (((u = e.suspendedLanes), (u & o) !== o)) {
                                (nt(), (e.pingedLanes |= e.suspendedLanes & u));
                                break;
                            }
                            e.timeoutHandle = ya(Vn.bind(null, e, ot, qt), t);
                            break;
                        }
                        Vn(e, ot, qt);
                        break;
                    case 4:
                        if ((yn(e, o), (o & 4194240) === o)) break;
                        for (t = e.eventTimes, u = -1; 0 < o; ) {
                            var y = 31 - Pt(o);
                            ((f = 1 << y),
                                (y = t[y]),
                                y > u && (u = y),
                                (o &= ~f));
                        }
                        if (
                            ((o = u),
                            (o = _e() - o),
                            (o =
                                (120 > o
                                    ? 120
                                    : 480 > o
                                      ? 480
                                      : 1080 > o
                                        ? 1080
                                        : 1920 > o
                                          ? 1920
                                          : 3e3 > o
                                            ? 3e3
                                            : 4320 > o
                                              ? 4320
                                              : 1960 * Ty(o / 1960)) - o),
                            10 < o)
                        ) {
                            e.timeoutHandle = ya(Vn.bind(null, e, ot, qt), o);
                            break;
                        }
                        Vn(e, ot, qt);
                        break;
                    case 5:
                        Vn(e, ot, qt);
                        break;
                    default:
                        throw Error(s(329));
                }
            }
        }
        return (at(e, _e()), e.callbackNode === i ? Lf.bind(null, e) : null);
    }
    function dl(e, t) {
        var i = fi;
        return (
            e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
            (e = Is(e, t)),
            e !== 2 && ((t = ot), (ot = i), t !== null && fl(t)),
            e
        );
    }
    function fl(e) {
        ot === null ? (ot = e) : ot.push.apply(ot, e);
    }
    function Ey(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var i = t.updateQueue;
                if (i !== null && ((i = i.stores), i !== null))
                    for (var o = 0; o < i.length; o++) {
                        var u = i[o],
                            f = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!Tt(f(), u)) return !1;
                        } catch {
                            return !1;
                        }
                    }
            }
            if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
                ((i.return = t), (t = i));
            else {
                if (t === e) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                ((t.sibling.return = t.return), (t = t.sibling));
            }
        }
        return !0;
    }
    function yn(e, t) {
        for (
            t &= ~al,
                t &= ~zs,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes;
            0 < t;
        ) {
            var i = 31 - Pt(t),
                o = 1 << i;
            ((e[i] = -1), (t &= ~o));
        }
    }
    function Vf(e) {
        if ((ge & 6) !== 0) throw Error(s(327));
        mr();
        var t = Yi(e, 0);
        if ((t & 1) === 0) return (at(e, _e()), null);
        var i = Is(e, t);
        if (e.tag !== 0 && i === 2) {
            var o = $o(e);
            o !== 0 && ((t = o), (i = dl(e, o)));
        }
        if (i === 1) throw ((i = di), Ln(e, 0), yn(e, t), at(e, _e()), i);
        if (i === 6) throw Error(s(345));
        return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Vn(e, ot, qt),
            at(e, _e()),
            null
        );
    }
    function hl(e, t) {
        var i = ge;
        ge |= 1;
        try {
            return e(t);
        } finally {
            ((ge = i), ge === 0 && ((pr = _e() + 500), hs && cn()));
        }
    }
    function _n(e) {
        mn !== null && mn.tag === 0 && (ge & 6) === 0 && mr();
        var t = ge;
        ge |= 1;
        var i = bt.transition,
            o = Se;
        try {
            if (((bt.transition = null), (Se = 1), e)) return e();
        } finally {
            ((Se = o), (bt.transition = i), (ge = t), (ge & 6) === 0 && cn());
        }
    }
    function pl() {
        ((pt = hr.current), Pe(hr));
    }
    function Ln(e, t) {
        ((e.finishedWork = null), (e.finishedLanes = 0));
        var i = e.timeoutHandle;
        if ((i !== -1 && ((e.timeoutHandle = -1), iy(i)), Oe !== null))
            for (i = Oe.return; i !== null; ) {
                var o = i;
                switch ((ka(o), o.tag)) {
                    case 1:
                        ((o = o.type.childContextTypes), o != null && ds());
                        break;
                    case 3:
                        (cr(), Pe(rt), Pe(Xe), La());
                        break;
                    case 5:
                        za(o);
                        break;
                    case 4:
                        cr();
                        break;
                    case 13:
                        Pe(Me);
                        break;
                    case 19:
                        Pe(Me);
                        break;
                    case 10:
                        Na(o.type._context);
                        break;
                    case 22:
                    case 23:
                        pl();
                }
                i = i.return;
            }
        if (
            (($e = e),
            (Oe = e = vn(e.current, null)),
            (Ge = pt = t),
            (Ue = 0),
            (di = null),
            (al = zs = zn = 0),
            (ot = fi = null),
            Dn !== null)
        ) {
            for (t = 0; t < Dn.length; t++)
                if (((i = Dn[t]), (o = i.interleaved), o !== null)) {
                    i.interleaved = null;
                    var u = o.next,
                        f = i.pending;
                    if (f !== null) {
                        var y = f.next;
                        ((f.next = u), (o.next = y));
                    }
                    i.pending = o;
                }
            Dn = null;
        }
        return e;
    }
    function Ff(e, t) {
        do {
            var i = Oe;
            try {
                if ((Ea(), (ks.current = Ts), Cs)) {
                    for (var o = De.memoizedState; o !== null; ) {
                        var u = o.queue;
                        (u !== null && (u.pending = null), (o = o.next));
                    }
                    Cs = !1;
                }
                if (
                    ((An = 0),
                    (We = Be = De = null),
                    (si = !1),
                    (oi = 0),
                    (ol.current = null),
                    i === null || i.return === null)
                ) {
                    ((Ue = 1), (di = t), (Oe = null));
                    break;
                }
                e: {
                    var f = e,
                        y = i.return,
                        S = i,
                        k = t;
                    if (
                        ((t = Ge),
                        (S.flags |= 32768),
                        k !== null &&
                            typeof k == "object" &&
                            typeof k.then == "function")
                    ) {
                        var F = k,
                            $ = S,
                            H = $.tag;
                        if (
                            ($.mode & 1) === 0 &&
                            (H === 0 || H === 11 || H === 15)
                        ) {
                            var W = $.alternate;
                            W
                                ? (($.updateQueue = W.updateQueue),
                                  ($.memoizedState = W.memoizedState),
                                  ($.lanes = W.lanes))
                                : (($.updateQueue = null),
                                  ($.memoizedState = null));
                        }
                        var q = uf(y);
                        if (q !== null) {
                            ((q.flags &= -257),
                                cf(q, y, S, f, t),
                                q.mode & 1 && lf(f, F, t),
                                (t = q),
                                (k = F));
                            var J = t.updateQueue;
                            if (J === null) {
                                var ee = new Set();
                                (ee.add(k), (t.updateQueue = ee));
                            } else J.add(k);
                            break e;
                        } else {
                            if ((t & 1) === 0) {
                                (lf(f, F, t), ml());
                                break e;
                            }
                            k = Error(s(426));
                        }
                    } else if (Ne && S.mode & 1) {
                        var Le = uf(y);
                        if (Le !== null) {
                            ((Le.flags & 65536) === 0 && (Le.flags |= 256),
                                cf(Le, y, S, f, t),
                                Pa(dr(k, S)));
                            break e;
                        }
                    }
                    ((f = k = dr(k, S)),
                        Ue !== 4 && (Ue = 2),
                        fi === null ? (fi = [f]) : fi.push(f),
                        (f = y));
                    do {
                        switch (f.tag) {
                            case 3:
                                ((f.flags |= 65536), (t &= -t), (f.lanes |= t));
                                var A = of(f, k, t);
                                Rd(f, A);
                                break e;
                            case 1:
                                S = k;
                                var P = f.type,
                                    _ = f.stateNode;
                                if (
                                    (f.flags & 128) === 0 &&
                                    (typeof P.getDerivedStateFromError ==
                                        "function" ||
                                        (_ !== null &&
                                            typeof _.componentDidCatch ==
                                                "function" &&
                                            (pn === null || !pn.has(_))))
                                ) {
                                    ((f.flags |= 65536),
                                        (t &= -t),
                                        (f.lanes |= t));
                                    var Y = af(f, S, t);
                                    Rd(f, Y);
                                    break e;
                                }
                        }
                        f = f.return;
                    } while (f !== null);
                }
                Bf(i);
            } catch (ne) {
                ((t = ne), Oe === i && i !== null && (Oe = i = i.return));
                continue;
            }
            break;
        } while (!0);
    }
    function Of() {
        var e = As.current;
        return ((As.current = Ts), e === null ? Ts : e);
    }
    function ml() {
        ((Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4),
            $e === null ||
                ((zn & 268435455) === 0 && (zs & 268435455) === 0) ||
                yn($e, Ge));
    }
    function Is(e, t) {
        var i = ge;
        ge |= 2;
        var o = Of();
        ($e !== e || Ge !== t) && ((qt = null), Ln(e, t));
        do
            try {
                Ny();
                break;
            } catch (u) {
                Ff(e, u);
            }
        while (!0);
        if ((Ea(), (ge = i), (As.current = o), Oe !== null))
            throw Error(s(261));
        return (($e = null), (Ge = 0), Ue);
    }
    function Ny() {
        for (; Oe !== null; ) If(Oe);
    }
    function My() {
        for (; Oe !== null && !t0(); ) If(Oe);
    }
    function If(e) {
        var t = $f(e.alternate, e, pt);
        ((e.memoizedProps = e.pendingProps),
            t === null ? Bf(e) : (Oe = t),
            (ol.current = null));
    }
    function Bf(e) {
        var t = e;
        do {
            var i = t.alternate;
            if (((e = t.return), (t.flags & 32768) === 0)) {
                if (((i = by(i, t, pt)), i !== null)) {
                    Oe = i;
                    return;
                }
            } else {
                if (((i = ky(i, t)), i !== null)) {
                    ((i.flags &= 32767), (Oe = i));
                    return;
                }
                if (e !== null)
                    ((e.flags |= 32768),
                        (e.subtreeFlags = 0),
                        (e.deletions = null));
                else {
                    ((Ue = 6), (Oe = null));
                    return;
                }
            }
            if (((t = t.sibling), t !== null)) {
                Oe = t;
                return;
            }
            Oe = t = e;
        } while (t !== null);
        Ue === 0 && (Ue = 5);
    }
    function Vn(e, t, i) {
        var o = Se,
            u = bt.transition;
        try {
            ((bt.transition = null), (Se = 1), Dy(e, t, i, o));
        } finally {
            ((bt.transition = u), (Se = o));
        }
        return null;
    }
    function Dy(e, t, i, o) {
        do mr();
        while (mn !== null);
        if ((ge & 6) !== 0) throw Error(s(327));
        i = e.finishedWork;
        var u = e.finishedLanes;
        if (i === null) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
            throw Error(s(177));
        ((e.callbackNode = null), (e.callbackPriority = 0));
        var f = i.lanes | i.childLanes;
        if (
            (d0(e, f),
            e === $e && ((Oe = $e = null), (Ge = 0)),
            ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
                Ls ||
                ((Ls = !0),
                Hf($i, function () {
                    return (mr(), null);
                })),
            (f = (i.flags & 15990) !== 0),
            (i.subtreeFlags & 15990) !== 0 || f)
        ) {
            ((f = bt.transition), (bt.transition = null));
            var y = Se;
            Se = 1;
            var S = ge;
            ((ge |= 4),
                (ol.current = null),
                jy(e, i),
                Df(i, e),
                Q0(ma),
                (Qi = !!pa),
                (ma = pa = null),
                (e.current = i),
                Py(i),
                n0(),
                (ge = S),
                (Se = y),
                (bt.transition = f));
        } else e.current = i;
        if (
            (Ls && ((Ls = !1), (mn = e), (Vs = u)),
            (f = e.pendingLanes),
            f === 0 && (pn = null),
            s0(i.stateNode),
            at(e, _e()),
            t !== null)
        )
            for (o = e.onRecoverableError, i = 0; i < t.length; i++)
                ((u = t[i]),
                    o(u.value, { componentStack: u.stack, digest: u.digest }));
        if (_s) throw ((_s = !1), (e = ul), (ul = null), e);
        return (
            (Vs & 1) !== 0 && e.tag !== 0 && mr(),
            (f = e.pendingLanes),
            (f & 1) !== 0 ? (e === cl ? hi++ : ((hi = 0), (cl = e))) : (hi = 0),
            cn(),
            null
        );
    }
    function mr() {
        if (mn !== null) {
            var e = Ec(Vs),
                t = bt.transition,
                i = Se;
            try {
                if (
                    ((bt.transition = null),
                    (Se = 16 > e ? 16 : e),
                    mn === null)
                )
                    var o = !1;
                else {
                    if (((e = mn), (mn = null), (Vs = 0), (ge & 6) !== 0))
                        throw Error(s(331));
                    var u = ge;
                    for (ge |= 4, Q = e.current; Q !== null; ) {
                        var f = Q,
                            y = f.child;
                        if ((Q.flags & 16) !== 0) {
                            var S = f.deletions;
                            if (S !== null) {
                                for (var k = 0; k < S.length; k++) {
                                    var F = S[k];
                                    for (Q = F; Q !== null; ) {
                                        var $ = Q;
                                        switch ($.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ci(8, $, f);
                                        }
                                        var H = $.child;
                                        if (H !== null)
                                            ((H.return = $), (Q = H));
                                        else
                                            for (; Q !== null; ) {
                                                $ = Q;
                                                var W = $.sibling,
                                                    q = $.return;
                                                if ((Pf($), $ === F)) {
                                                    Q = null;
                                                    break;
                                                }
                                                if (W !== null) {
                                                    ((W.return = q), (Q = W));
                                                    break;
                                                }
                                                Q = q;
                                            }
                                    }
                                }
                                var J = f.alternate;
                                if (J !== null) {
                                    var ee = J.child;
                                    if (ee !== null) {
                                        J.child = null;
                                        do {
                                            var Le = ee.sibling;
                                            ((ee.sibling = null), (ee = Le));
                                        } while (ee !== null);
                                    }
                                }
                                Q = f;
                            }
                        }
                        if ((f.subtreeFlags & 2064) !== 0 && y !== null)
                            ((y.return = f), (Q = y));
                        else
                            e: for (; Q !== null; ) {
                                if (((f = Q), (f.flags & 2048) !== 0))
                                    switch (f.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ci(9, f, f.return);
                                    }
                                var A = f.sibling;
                                if (A !== null) {
                                    ((A.return = f.return), (Q = A));
                                    break e;
                                }
                                Q = f.return;
                            }
                    }
                    var P = e.current;
                    for (Q = P; Q !== null; ) {
                        y = Q;
                        var _ = y.child;
                        if ((y.subtreeFlags & 2064) !== 0 && _ !== null)
                            ((_.return = y), (Q = _));
                        else
                            e: for (y = P; Q !== null; ) {
                                if (((S = Q), (S.flags & 2048) !== 0))
                                    try {
                                        switch (S.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Rs(9, S);
                                        }
                                    } catch (ne) {
                                        Ae(S, S.return, ne);
                                    }
                                if (S === y) {
                                    Q = null;
                                    break e;
                                }
                                var Y = S.sibling;
                                if (Y !== null) {
                                    ((Y.return = S.return), (Q = Y));
                                    break e;
                                }
                                Q = S.return;
                            }
                    }
                    if (
                        ((ge = u),
                        cn(),
                        zt && typeof zt.onPostCommitFiberRoot == "function")
                    )
                        try {
                            zt.onPostCommitFiberRoot(Hi, e);
                        } catch {}
                    o = !0;
                }
                return o;
            } finally {
                ((Se = i), (bt.transition = t));
            }
        }
        return !1;
    }
    function Uf(e, t, i) {
        ((t = dr(i, t)),
            (t = of(e, t, 1)),
            (e = fn(e, t, 1)),
            (t = nt()),
            e !== null && (Vr(e, 1, t), at(e, t)));
    }
    function Ae(e, t, i) {
        if (e.tag === 3) Uf(e, e, i);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Uf(t, e, i);
                    break;
                } else if (t.tag === 1) {
                    var o = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == "function" ||
                        (typeof o.componentDidCatch == "function" &&
                            (pn === null || !pn.has(o)))
                    ) {
                        ((e = dr(i, e)),
                            (e = af(t, e, 1)),
                            (t = fn(t, e, 1)),
                            (e = nt()),
                            t !== null && (Vr(t, 1, e), at(t, e)));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Ry(e, t, i) {
        var o = e.pingCache;
        (o !== null && o.delete(t),
            (t = nt()),
            (e.pingedLanes |= e.suspendedLanes & i),
            $e === e &&
                (Ge & i) === i &&
                (Ue === 4 ||
                (Ue === 3 && (Ge & 130023424) === Ge && 500 > _e() - ll)
                    ? Ln(e, 0)
                    : (al |= i)),
            at(e, t));
    }
    function Wf(e, t) {
        t === 0 &&
            ((e.mode & 1) === 0
                ? (t = 1)
                : ((t = Gi),
                  (Gi <<= 1),
                  (Gi & 130023424) === 0 && (Gi = 4194304)));
        var i = nt();
        ((e = Gt(e, t)), e !== null && (Vr(e, t, i), at(e, i)));
    }
    function Ay(e) {
        var t = e.memoizedState,
            i = 0;
        (t !== null && (i = t.retryLane), Wf(e, i));
    }
    function zy(e, t) {
        var i = 0;
        switch (e.tag) {
            case 13:
                var o = e.stateNode,
                    u = e.memoizedState;
                u !== null && (i = u.retryLane);
                break;
            case 19:
                o = e.stateNode;
                break;
            default:
                throw Error(s(314));
        }
        (o !== null && o.delete(t), Wf(e, i));
    }
    var $f;
    $f = function (e, t, i) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || rt.current) st = !0;
            else {
                if ((e.lanes & i) === 0 && (t.flags & 128) === 0)
                    return ((st = !1), Sy(e, t, i));
                st = (e.flags & 131072) !== 0;
            }
        else ((st = !1), Ne && (t.flags & 1048576) !== 0 && bd(t, ms, t.index));
        switch (((t.lanes = 0), t.tag)) {
            case 2:
                var o = t.type;
                (Ms(e, t), (e = t.pendingProps));
                var u = rr(t, Xe.current);
                (ur(t, i), (u = Oa(null, t, o, e, u, i)));
                var f = Ia();
                return (
                    (t.flags |= 1),
                    typeof u == "object" &&
                    u !== null &&
                    typeof u.render == "function" &&
                    u.$$typeof === void 0
                        ? ((t.tag = 1),
                          (t.memoizedState = null),
                          (t.updateQueue = null),
                          it(o) ? ((f = !0), fs(t)) : (f = !1),
                          (t.memoizedState =
                              u.state !== null && u.state !== void 0
                                  ? u.state
                                  : null),
                          Ra(t),
                          (u.updater = Es),
                          (t.stateNode = u),
                          (u._reactInternals = t),
                          Ka(t, o, e, i),
                          (t = qa(null, t, o, !0, f, i)))
                        : ((t.tag = 0),
                          Ne && f && ba(t),
                          tt(null, t, u, i),
                          (t = t.child)),
                    t
                );
            case 16:
                o = t.elementType;
                e: {
                    switch (
                        (Ms(e, t),
                        (e = t.pendingProps),
                        (u = o._init),
                        (o = u(o._payload)),
                        (t.type = o),
                        (u = t.tag = Ly(o)),
                        (e = Nt(o, e)),
                        u)
                    ) {
                        case 0:
                            t = Xa(null, t, o, e, i);
                            break e;
                        case 1:
                            t = gf(null, t, o, e, i);
                            break e;
                        case 11:
                            t = df(null, t, o, e, i);
                            break e;
                        case 14:
                            t = ff(null, t, o, Nt(o.type, e), i);
                            break e;
                    }
                    throw Error(s(306, o, ""));
                }
                return t;
            case 0:
                return (
                    (o = t.type),
                    (u = t.pendingProps),
                    (u = t.elementType === o ? u : Nt(o, u)),
                    Xa(e, t, o, u, i)
                );
            case 1:
                return (
                    (o = t.type),
                    (u = t.pendingProps),
                    (u = t.elementType === o ? u : Nt(o, u)),
                    gf(e, t, o, u, i)
                );
            case 3:
                e: {
                    if ((yf(t), e === null)) throw Error(s(387));
                    ((o = t.pendingProps),
                        (f = t.memoizedState),
                        (u = f.element),
                        Dd(e, t),
                        Ss(t, o, null, i));
                    var y = t.memoizedState;
                    if (((o = y.element), f.isDehydrated))
                        if (
                            ((f = {
                                element: o,
                                isDehydrated: !1,
                                cache: y.cache,
                                pendingSuspenseBoundaries:
                                    y.pendingSuspenseBoundaries,
                                transitions: y.transitions,
                            }),
                            (t.updateQueue.baseState = f),
                            (t.memoizedState = f),
                            t.flags & 256)
                        ) {
                            ((u = dr(Error(s(423)), t)),
                                (t = vf(e, t, o, i, u)));
                            break e;
                        } else if (o !== u) {
                            ((u = dr(Error(s(424)), t)),
                                (t = vf(e, t, o, i, u)));
                            break e;
                        } else
                            for (
                                ht = an(t.stateNode.containerInfo.firstChild),
                                    ft = t,
                                    Ne = !0,
                                    Et = null,
                                    i = Nd(t, null, o, i),
                                    t.child = i;
                                i;
                            )
                                ((i.flags = (i.flags & -3) | 4096),
                                    (i = i.sibling));
                    else {
                        if ((or(), o === u)) {
                            t = Xt(e, t, i);
                            break e;
                        }
                        tt(e, t, o, i);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return (
                    zd(t),
                    e === null && ja(t),
                    (o = t.type),
                    (u = t.pendingProps),
                    (f = e !== null ? e.memoizedProps : null),
                    (y = u.children),
                    ga(o, u)
                        ? (y = null)
                        : f !== null && ga(o, f) && (t.flags |= 32),
                    mf(e, t),
                    tt(e, t, y, i),
                    t.child
                );
            case 6:
                return (e === null && ja(t), null);
            case 13:
                return xf(e, t, i);
            case 4:
                return (
                    Aa(t, t.stateNode.containerInfo),
                    (o = t.pendingProps),
                    e === null ? (t.child = ar(t, null, o, i)) : tt(e, t, o, i),
                    t.child
                );
            case 11:
                return (
                    (o = t.type),
                    (u = t.pendingProps),
                    (u = t.elementType === o ? u : Nt(o, u)),
                    df(e, t, o, u, i)
                );
            case 7:
                return (tt(e, t, t.pendingProps, i), t.child);
            case 8:
                return (tt(e, t, t.pendingProps.children, i), t.child);
            case 12:
                return (tt(e, t, t.pendingProps.children, i), t.child);
            case 10:
                e: {
                    if (
                        ((o = t.type._context),
                        (u = t.pendingProps),
                        (f = t.memoizedProps),
                        (y = u.value),
                        Ce(vs, o._currentValue),
                        (o._currentValue = y),
                        f !== null)
                    )
                        if (Tt(f.value, y)) {
                            if (f.children === u.children && !rt.current) {
                                t = Xt(e, t, i);
                                break e;
                            }
                        } else
                            for (
                                f = t.child, f !== null && (f.return = t);
                                f !== null;
                            ) {
                                var S = f.dependencies;
                                if (S !== null) {
                                    y = f.child;
                                    for (var k = S.firstContext; k !== null; ) {
                                        if (k.context === o) {
                                            if (f.tag === 1) {
                                                ((k = Yt(-1, i & -i)),
                                                    (k.tag = 2));
                                                var F = f.updateQueue;
                                                if (F !== null) {
                                                    F = F.shared;
                                                    var $ = F.pending;
                                                    ($ === null
                                                        ? (k.next = k)
                                                        : ((k.next = $.next),
                                                          ($.next = k)),
                                                        (F.pending = k));
                                                }
                                            }
                                            ((f.lanes |= i),
                                                (k = f.alternate),
                                                k !== null && (k.lanes |= i),
                                                Ma(f.return, i, t),
                                                (S.lanes |= i));
                                            break;
                                        }
                                        k = k.next;
                                    }
                                } else if (f.tag === 10)
                                    y = f.type === t.type ? null : f.child;
                                else if (f.tag === 18) {
                                    if (((y = f.return), y === null))
                                        throw Error(s(341));
                                    ((y.lanes |= i),
                                        (S = y.alternate),
                                        S !== null && (S.lanes |= i),
                                        Ma(y, i, t),
                                        (y = f.sibling));
                                } else y = f.child;
                                if (y !== null) y.return = f;
                                else
                                    for (y = f; y !== null; ) {
                                        if (y === t) {
                                            y = null;
                                            break;
                                        }
                                        if (((f = y.sibling), f !== null)) {
                                            ((f.return = y.return), (y = f));
                                            break;
                                        }
                                        y = y.return;
                                    }
                                f = y;
                            }
                    (tt(e, t, u.children, i), (t = t.child));
                }
                return t;
            case 9:
                return (
                    (u = t.type),
                    (o = t.pendingProps.children),
                    ur(t, i),
                    (u = wt(u)),
                    (o = o(u)),
                    (t.flags |= 1),
                    tt(e, t, o, i),
                    t.child
                );
            case 14:
                return (
                    (o = t.type),
                    (u = Nt(o, t.pendingProps)),
                    (u = Nt(o.type, u)),
                    ff(e, t, o, u, i)
                );
            case 15:
                return hf(e, t, t.type, t.pendingProps, i);
            case 17:
                return (
                    (o = t.type),
                    (u = t.pendingProps),
                    (u = t.elementType === o ? u : Nt(o, u)),
                    Ms(e, t),
                    (t.tag = 1),
                    it(o) ? ((e = !0), fs(t)) : (e = !1),
                    ur(t, i),
                    rf(t, o, u),
                    Ka(t, o, u, i),
                    qa(null, t, o, !0, e, i)
                );
            case 19:
                return Sf(e, t, i);
            case 22:
                return pf(e, t, i);
        }
        throw Error(s(156, t.tag));
    };
    function Hf(e, t) {
        return kc(e, t);
    }
    function _y(e, t, i, o) {
        ((this.tag = e),
            (this.key = i),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = o),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
    }
    function kt(e, t, i, o) {
        return new _y(e, t, i, o);
    }
    function gl(e) {
        return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Ly(e) {
        if (typeof e == "function") return gl(e) ? 1 : 0;
        if (e != null) {
            if (((e = e.$$typeof), e === xe)) return 11;
            if (e === ke) return 14;
        }
        return 2;
    }
    function vn(e, t) {
        var i = e.alternate;
        return (
            i === null
                ? ((i = kt(e.tag, t, e.key, e.mode)),
                  (i.elementType = e.elementType),
                  (i.type = e.type),
                  (i.stateNode = e.stateNode),
                  (i.alternate = e),
                  (e.alternate = i))
                : ((i.pendingProps = t),
                  (i.type = e.type),
                  (i.flags = 0),
                  (i.subtreeFlags = 0),
                  (i.deletions = null)),
            (i.flags = e.flags & 14680064),
            (i.childLanes = e.childLanes),
            (i.lanes = e.lanes),
            (i.child = e.child),
            (i.memoizedProps = e.memoizedProps),
            (i.memoizedState = e.memoizedState),
            (i.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (i.dependencies =
                t === null
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext }),
            (i.sibling = e.sibling),
            (i.index = e.index),
            (i.ref = e.ref),
            i
        );
    }
    function Bs(e, t, i, o, u, f) {
        var y = 2;
        if (((o = e), typeof e == "function")) gl(e) && (y = 1);
        else if (typeof e == "string") y = 5;
        else
            e: switch (e) {
                case E:
                    return Fn(i.children, u, f, t);
                case R:
                    ((y = 8), (u |= 8));
                    break;
                case G:
                    return (
                        (e = kt(12, i, t, u | 2)),
                        (e.elementType = G),
                        (e.lanes = f),
                        e
                    );
                case le:
                    return (
                        (e = kt(13, i, t, u)),
                        (e.elementType = le),
                        (e.lanes = f),
                        e
                    );
                case ye:
                    return (
                        (e = kt(19, i, t, u)),
                        (e.elementType = ye),
                        (e.lanes = f),
                        e
                    );
                case K:
                    return Us(i, u, f, t);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case te:
                                y = 10;
                                break e;
                            case se:
                                y = 9;
                                break e;
                            case xe:
                                y = 11;
                                break e;
                            case ke:
                                y = 14;
                                break e;
                            case fe:
                                ((y = 16), (o = null));
                                break e;
                        }
                    throw Error(s(130, e == null ? e : typeof e, ""));
            }
        return (
            (t = kt(y, i, t, u)),
            (t.elementType = e),
            (t.type = o),
            (t.lanes = f),
            t
        );
    }
    function Fn(e, t, i, o) {
        return ((e = kt(7, e, o, t)), (e.lanes = i), e);
    }
    function Us(e, t, i, o) {
        return (
            (e = kt(22, e, o, t)),
            (e.elementType = K),
            (e.lanes = i),
            (e.stateNode = { isHidden: !1 }),
            e
        );
    }
    function yl(e, t, i) {
        return ((e = kt(6, e, null, t)), (e.lanes = i), e);
    }
    function vl(e, t, i) {
        return (
            (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = i),
            (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            t
        );
    }
    function Vy(e, t, i, o, u) {
        ((this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                    null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ho(0)),
            (this.expirationTimes = Ho(-1)),
            (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Ho(0)),
            (this.identifierPrefix = o),
            (this.onRecoverableError = u),
            (this.mutableSourceEagerHydrationData = null));
    }
    function xl(e, t, i, o, u, f, y, S, k) {
        return (
            (e = new Vy(e, t, i, S, k)),
            t === 1 ? ((t = 1), f === !0 && (t |= 8)) : (t = 0),
            (f = kt(3, null, null, t)),
            (e.current = f),
            (f.stateNode = e),
            (f.memoizedState = {
                element: o,
                isDehydrated: i,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            Ra(f),
            e
        );
    }
    function Fy(e, t, i) {
        var o =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null;
        return {
            $$typeof: L,
            key: o == null ? null : "" + o,
            children: e,
            containerInfo: t,
            implementation: i,
        };
    }
    function Kf(e) {
        if (!e) return un;
        e = e._reactInternals;
        e: {
            if (Pn(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (it(t.type)) {
                            t =
                                t.stateNode
                                    .__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            } while (t !== null);
            throw Error(s(171));
        }
        if (e.tag === 1) {
            var i = e.type;
            if (it(i)) return xd(e, i, t);
        }
        return t;
    }
    function Gf(e, t, i, o, u, f, y, S, k) {
        return (
            (e = xl(i, o, !0, e, u, f, y, S, k)),
            (e.context = Kf(null)),
            (i = e.current),
            (o = nt()),
            (u = gn(i)),
            (f = Yt(o, u)),
            (f.callback = t ?? null),
            fn(i, f, u),
            (e.current.lanes = u),
            Vr(e, u, o),
            at(e, o),
            e
        );
    }
    function Ws(e, t, i, o) {
        var u = t.current,
            f = nt(),
            y = gn(u);
        return (
            (i = Kf(i)),
            t.context === null ? (t.context = i) : (t.pendingContext = i),
            (t = Yt(f, y)),
            (t.payload = { element: e }),
            (o = o === void 0 ? null : o),
            o !== null && (t.callback = o),
            (e = fn(u, t, y)),
            e !== null && (Rt(e, u, y, f), ws(e, u, y)),
            y
        );
    }
    function $s(e) {
        if (((e = e.current), !e.child)) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Yf(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t;
        }
    }
    function wl(e, t) {
        (Yf(e, t), (e = e.alternate) && Yf(e, t));
    }
    function Oy() {
        return null;
    }
    var Xf =
        typeof reportError == "function"
            ? reportError
            : function (e) {
                  console.error(e);
              };
    function Sl(e) {
        this._internalRoot = e;
    }
    ((Hs.prototype.render = Sl.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(s(409));
            Ws(e, t, null, null);
        }),
        (Hs.prototype.unmount = Sl.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    (_n(function () {
                        Ws(null, e, null, null);
                    }),
                        (t[Wt] = null));
                }
            }));
    function Hs(e) {
        this._internalRoot = e;
    }
    Hs.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Dc();
            e = { blockedOn: null, target: e, priority: t };
            for (
                var i = 0;
                i < rn.length && t !== 0 && t < rn[i].priority;
                i++
            );
            (rn.splice(i, 0, e), i === 0 && zc(e));
        }
    };
    function bl(e) {
        return !(
            !e ||
            (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        );
    }
    function Ks(e) {
        return !(
            !e ||
            (e.nodeType !== 1 &&
                e.nodeType !== 9 &&
                e.nodeType !== 11 &&
                (e.nodeType !== 8 ||
                    e.nodeValue !== " react-mount-point-unstable "))
        );
    }
    function qf() {}
    function Iy(e, t, i, o, u) {
        if (u) {
            if (typeof o == "function") {
                var f = o;
                o = function () {
                    var F = $s(y);
                    f.call(F);
                };
            }
            var y = Gf(t, o, e, 0, null, !1, !1, "", qf);
            return (
                (e._reactRootContainer = y),
                (e[Wt] = y.current),
                Qr(e.nodeType === 8 ? e.parentNode : e),
                _n(),
                y
            );
        }
        for (; (u = e.lastChild); ) e.removeChild(u);
        if (typeof o == "function") {
            var S = o;
            o = function () {
                var F = $s(k);
                S.call(F);
            };
        }
        var k = xl(e, 0, !1, null, null, !1, !1, "", qf);
        return (
            (e._reactRootContainer = k),
            (e[Wt] = k.current),
            Qr(e.nodeType === 8 ? e.parentNode : e),
            _n(function () {
                Ws(t, k, i, o);
            }),
            k
        );
    }
    function Gs(e, t, i, o, u) {
        var f = i._reactRootContainer;
        if (f) {
            var y = f;
            if (typeof u == "function") {
                var S = u;
                u = function () {
                    var k = $s(y);
                    S.call(k);
                };
            }
            Ws(t, y, e, u);
        } else y = Iy(i, t, e, u, o);
        return $s(y);
    }
    ((Nc = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var i = Lr(t.pendingLanes);
                    i !== 0 &&
                        (Ko(t, i | 1),
                        at(t, _e()),
                        (ge & 6) === 0 && ((pr = _e() + 500), cn()));
                }
                break;
            case 13:
                (_n(function () {
                    var o = Gt(e, 1);
                    if (o !== null) {
                        var u = nt();
                        Rt(o, e, 1, u);
                    }
                }),
                    wl(e, 1));
        }
    }),
        (Go = function (e) {
            if (e.tag === 13) {
                var t = Gt(e, 134217728);
                if (t !== null) {
                    var i = nt();
                    Rt(t, e, 134217728, i);
                }
                wl(e, 134217728);
            }
        }),
        (Mc = function (e) {
            if (e.tag === 13) {
                var t = gn(e),
                    i = Gt(e, t);
                if (i !== null) {
                    var o = nt();
                    Rt(i, e, t, o);
                }
                wl(e, t);
            }
        }),
        (Dc = function () {
            return Se;
        }),
        (Rc = function (e, t) {
            var i = Se;
            try {
                return ((Se = e), t());
            } finally {
                Se = i;
            }
        }),
        (Oo = function (e, t, i) {
            switch (t) {
                case "input":
                    if (
                        (Do(e, i),
                        (t = i.name),
                        i.type === "radio" && t != null)
                    ) {
                        for (i = e; i.parentNode; ) i = i.parentNode;
                        for (
                            i = i.querySelectorAll(
                                "input[name=" +
                                    JSON.stringify("" + t) +
                                    '][type="radio"]',
                            ),
                                t = 0;
                            t < i.length;
                            t++
                        ) {
                            var o = i[t];
                            if (o !== e && o.form === e.form) {
                                var u = cs(o);
                                if (!u) throw Error(s(90));
                                (nc(o), Do(o, u));
                            }
                        }
                    }
                    break;
                case "textarea":
                    ac(e, i);
                    break;
                case "select":
                    ((t = i.value), t != null && Hn(e, !!i.multiple, t, !1));
            }
        }),
        (gc = hl),
        (yc = _n));
    var By = { usingClientEntryPoint: !1, Events: [ei, tr, cs, pc, mc, hl] },
        pi = {
            findFiberByHostInstance: Tn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
        },
        Uy = {
            bundleType: pi.bundleType,
            version: pi.version,
            rendererPackageName: pi.rendererPackageName,
            rendererConfig: pi.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: V.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return ((e = Sc(e)), e === null ? null : e.stateNode);
            },
            findFiberByHostInstance: pi.findFiberByHostInstance || Oy,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ys = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ys.isDisabled && Ys.supportsFiber)
            try {
                ((Hi = Ys.inject(Uy)), (zt = Ys));
            } catch {}
    }
    return (
        (lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = By),
        (lt.createPortal = function (e, t) {
            var i =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
            if (!bl(t)) throw Error(s(200));
            return Fy(e, t, null, i);
        }),
        (lt.createRoot = function (e, t) {
            if (!bl(e)) throw Error(s(299));
            var i = !1,
                o = "",
                u = Xf;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (i = !0),
                    t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
                    t.onRecoverableError !== void 0 &&
                        (u = t.onRecoverableError)),
                (t = xl(e, 1, !1, null, null, i, !1, o, u)),
                (e[Wt] = t.current),
                Qr(e.nodeType === 8 ? e.parentNode : e),
                new Sl(t)
            );
        }),
        (lt.findDOMNode = function (e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == "function"
                    ? Error(s(188))
                    : ((e = Object.keys(e).join(",")), Error(s(268, e)));
            return ((e = Sc(t)), (e = e === null ? null : e.stateNode), e);
        }),
        (lt.flushSync = function (e) {
            return _n(e);
        }),
        (lt.hydrate = function (e, t, i) {
            if (!Ks(t)) throw Error(s(200));
            return Gs(null, e, t, !0, i);
        }),
        (lt.hydrateRoot = function (e, t, i) {
            if (!bl(e)) throw Error(s(405));
            var o = (i != null && i.hydratedSources) || null,
                u = !1,
                f = "",
                y = Xf;
            if (
                (i != null &&
                    (i.unstable_strictMode === !0 && (u = !0),
                    i.identifierPrefix !== void 0 && (f = i.identifierPrefix),
                    i.onRecoverableError !== void 0 &&
                        (y = i.onRecoverableError)),
                (t = Gf(t, null, e, 1, i ?? null, u, !1, f, y)),
                (e[Wt] = t.current),
                Qr(e),
                o)
            )
                for (e = 0; e < o.length; e++)
                    ((i = o[e]),
                        (u = i._getVersion),
                        (u = u(i._source)),
                        t.mutableSourceEagerHydrationData == null
                            ? (t.mutableSourceEagerHydrationData = [i, u])
                            : t.mutableSourceEagerHydrationData.push(i, u));
            return new Hs(t);
        }),
        (lt.render = function (e, t, i) {
            if (!Ks(t)) throw Error(s(200));
            return Gs(null, e, t, !1, i);
        }),
        (lt.unmountComponentAtNode = function (e) {
            if (!Ks(e)) throw Error(s(40));
            return e._reactRootContainer
                ? (_n(function () {
                      Gs(null, null, e, !1, function () {
                          ((e._reactRootContainer = null), (e[Wt] = null));
                      });
                  }),
                  !0)
                : !1;
        }),
        (lt.unstable_batchedUpdates = hl),
        (lt.unstable_renderSubtreeIntoContainer = function (e, t, i, o) {
            if (!Ks(i)) throw Error(s(200));
            if (e == null || e._reactInternals === void 0) throw Error(s(38));
            return Gs(e, t, i, !1, o);
        }),
        (lt.version = "18.3.1-next-f1338f8080-20240426"),
        lt
    );
}
var ih;
function So() {
    if (ih) return jl.exports;
    ih = 1;
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (r) {
                console.error(r);
            }
    }
    return (n(), (jl.exports = Xy()), jl.exports);
}
var sh;
function qy() {
    if (sh) return Xs;
    sh = 1;
    var n = So();
    return (
        (Xs.createRoot = n.createRoot),
        (Xs.hydrateRoot = n.hydrateRoot),
        Xs
    );
}
var Qy = qy();
const Zy = mu(Qy);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jy = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Zp = (...n) =>
        n
            .filter((r, s, a) => !!r && r.trim() !== "" && a.indexOf(r) === s)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ev = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tv = I.forwardRef(
    (
        {
            color: n = "currentColor",
            size: r = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: a,
            className: l = "",
            children: d,
            iconNode: c,
            ...h
        },
        m,
    ) =>
        I.createElement(
            "svg",
            {
                ref: m,
                ...ev,
                width: r,
                height: r,
                stroke: n,
                strokeWidth: a ? (Number(s) * 24) / Number(r) : s,
                className: Zp("lucide", l),
                ...h,
            },
            [
                ...c.map(([g, x]) => I.createElement(g, x)),
                ...(Array.isArray(d) ? d : [d]),
            ],
        ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const de = (n, r) => {
    const s = I.forwardRef(({ className: a, ...l }, d) =>
        I.createElement(tv, {
            ref: d,
            iconNode: r,
            className: Zp(`lucide-${Jy(n)}`, a),
            ...l,
        }),
    );
    return ((s.displayName = `${n}`), s);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nv = de("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jp = de("BadgeCheck", [
    [
        "path",
        {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336",
        },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rv = de("BatteryFull", [
    [
        "rect",
        {
            width: "16",
            height: "10",
            x: "2",
            y: "7",
            rx: "2",
            ry: "2",
            key: "1w10f2",
        },
    ],
    ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
    ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "13", key: "c6fn6x" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const em = de("Briefcase", [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
    [
        "rect",
        { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
    ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iv = de("ChevronDown", [
    ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sv = de("ChevronRight", [
    ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ql = de("CircleUserRound", [
    ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
    ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ov = de("Database", [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tm = de("Earth", [
    ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
    [
        "path",
        {
            d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
            key: "1tzkfa",
        },
    ],
    [
        "path",
        {
            d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
            key: "14pb5j",
        },
    ],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fo = de("ExternalLink", [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
        },
    ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const av = de("FilePlus2", [
    [
        "path",
        { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M3 15h6", key: "4e2qda" }],
    ["path", { d: "M6 12v6", key: "1u72j0" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nm = de("Folder", [
    [
        "path",
        {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360",
        },
    ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gu = de("GitBranch", [
    ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zl = de("Github", [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef",
        },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lv = de("GraduationCap", [
    [
        "path",
        {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0",
        },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uv = de("Grid2x2", [
    ["path", { d: "M12 3v18", key: "108xh3" }],
    ["path", { d: "M3 12h18", key: "1i2n21" }],
    [
        "rect",
        { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" },
    ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rm = de("House", [
    [
        "path",
        { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
        "path",
        {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt",
        },
    ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cv = de("Layers", [
    [
        "path",
        {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo",
        },
    ],
    [
        "path",
        {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc",
        },
    ],
    [
        "path",
        {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6",
        },
    ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const im = de("LayoutGrid", [
    [
        "rect",
        { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" },
    ],
    [
        "rect",
        { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" },
    ],
    [
        "rect",
        { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" },
    ],
    [
        "rect",
        { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" },
    ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dv = de("Linkedin", [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f",
        },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ho = de("Mail", [
    [
        "rect",
        { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fv = de("MapPin", [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z",
        },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hv = de("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yu = de("MonitorCog", [
    ["path", { d: "M12 17v4", key: "1riwvh" }],
    ["path", { d: "m15.2 4.9-.9-.4", key: "12wd2u" }],
    ["path", { d: "m15.2 7.1-.9.4", key: "1r2vl7" }],
    ["path", { d: "m16.9 3.2-.4-.9", key: "3zbo91" }],
    ["path", { d: "m16.9 8.8-.4.9", key: "1qr2dn" }],
    ["path", { d: "m19.5 2.3-.4.9", key: "1rjrkq" }],
    ["path", { d: "m19.5 9.7-.4-.9", key: "heryx5" }],
    ["path", { d: "m21.7 4.5-.9.4", key: "17fqt1" }],
    ["path", { d: "m21.7 7.5-.9-.4", key: "14zyni" }],
    [
        "path",
        {
            d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
            key: "1tnzv8",
        },
    ],
    ["path", { d: "M8 21h8", key: "1ev6f3" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vu = de("Palette", [
    [
        "circle",
        { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
    ],
    [
        "circle",
        {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f",
        },
    ],
    [
        "circle",
        { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
    ],
    [
        "circle",
        { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
    ],
    [
        "path",
        {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8",
        },
    ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xu = de("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pv = de("Power", [
    ["path", { d: "M12 2v10", key: "mnfbl" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mv = de("Route", [
    ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
    [
        "path",
        {
            d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
            key: "1d8sl",
        },
    ],
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gv = de("Save", [
    [
        "path",
        {
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476",
        },
    ],
    ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
    ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yv = de("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vv = de("Send", [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3",
        },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sm = de("ServerCog", [
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
    [
        "path",
        {
            d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
            key: "tn8das",
        },
    ],
    [
        "path",
        {
            d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
            key: "1g2pve",
        },
    ],
    ["path", { d: "M6 6h.01", key: "1utrut" }],
    ["path", { d: "M6 18h.01", key: "uhywen" }],
    ["path", { d: "m15.7 13.4-.9-.3", key: "1jwmzr" }],
    ["path", { d: "m9.2 10.9-.9-.3", key: "qapnim" }],
    ["path", { d: "m10.6 15.7.3-.9", key: "quwk0k" }],
    ["path", { d: "m13.6 15.7-.4-1", key: "cb9xp7" }],
    ["path", { d: "m10.8 9.3-.4-1", key: "1uaiz5" }],
    ["path", { d: "m8.3 13.6 1-.4", key: "s6srou" }],
    ["path", { d: "m14.7 10.8 1-.4", key: "4d31cq" }],
    ["path", { d: "m13.4 8.3-.3.9", key: "1bm987" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const om = de("Settings", [
    [
        "path",
        {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f",
        },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xv = de("ShieldCheck", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
        },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bo = de("Terminal", [
    ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
    ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wv = de("Twitter", [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6",
        },
    ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const am = de("UserRound", [
    ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
    ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sv = de("Volume2", [
    [
        "path",
        {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw",
        },
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bv = de("Wifi", [
    ["path", { d: "M12 20h.01", key: "zekei9" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lm = de("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    Si = {
        profile: {
            username: "marvelade",
            name: "Marvel Ade",
            title: "Full-stack Developer",
            location: "Lagos, Nigeria",
            email: "hello@marvelade.dev",
            avatarInitials: "MA",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
            bio: "I build polished web experiences with React, Node, accessible UI systems, and practical product thinking.",
            summary:
                "A developer portfolio wrapped in an Ubuntu 22.04 desktop, built for scanning projects, opening apps, and sending messages from one focused workspace.",
            socials: [
                {
                    label: "GitHub",
                    value: "github.com/marvelade",
                    href: "https://github.com/marvelade",
                },
                {
                    label: "LinkedIn",
                    value: "linkedin.com/in/marvelade",
                    href: "https://linkedin.com",
                },
                {
                    label: "Email",
                    value: "hello@marvelade.dev",
                    href: "mailto:hello@marvelade.dev",
                },
            ],
            stats: [
                { label: "Experience", value: "4+ yrs" },
                { label: "Projects", value: "18" },
                { label: "Focus", value: "Web apps" },
            ],
        },
        skills: [
            {
                group: "Frontend",
                items: [
                    "React",
                    "Tailwind CSS",
                    "Design systems",
                    "Accessibility",
                ],
            },
            {
                group: "Backend",
                items: ["Node.js", "Express", "MongoDB", "REST APIs"],
            },
            { group: "Tools", items: ["Git", "Linux", "Docker", "Vite"] },
        ],
        projects: [
            {
                title: "Aptly CRM",
                slug: "aptly-crm",
                type: "SaaS Dashboard",
                category: "Full Stack",
                status: "Completed",
                createdDate: "2026-03-08",
                thumbnail: "",
                description:
                    "A quiet operations dashboard with lead scoring, pipeline views, and fast keyboard-led search.",
                stack: ["React", "Express", "MongoDB", "Tailwind"],
                techStack: ["React", "Express", "MongoDB", "Tailwind"],
                impact: "Cut weekly reporting time by 62%.",
                repo: "https://github.com/marvelade",
                github: "https://github.com/marvelade",
                demo: "https://example.com",
            },
            {
                title: "Kernel Notes",
                slug: "kernel-notes",
                type: "Developer Tool",
                category: "React + Tailwind",
                status: "In Progress",
                createdDate: "2026-02-12",
                thumbnail: "",
                description:
                    "A Markdown knowledge base with local-first editing, command palette actions, and encrypted sync.",
                stack: ["React", "IndexedDB", "Node.js"],
                techStack: ["React", "IndexedDB", "Node.js"],
                impact: "Designed for sub-100ms document switching.",
                repo: "https://github.com/marvelade",
                github: "https://github.com/marvelade",
                demo: "https://example.com",
            },
            {
                title: "Orange Deploy",
                slug: "orange-deploy",
                type: "Automation",
                category: "APIs",
                status: "Completed",
                createdDate: "2025-11-22",
                thumbnail: "",
                description:
                    "A deployment monitor for small teams with release windows, rollback notes, and service checks.",
                stack: ["Express", "MongoDB", "Webhooks"],
                techStack: ["Express", "MongoDB", "Webhooks"],
                impact: "Tracks releases across 12 services.",
                repo: "https://github.com/marvelade",
                github: "https://github.com/marvelade",
                demo: "https://example.com",
            },
            {
                title: "Markup Studio",
                slug: "markup-studio",
                type: "Static Site",
                category: "HTML",
                status: "Archived",
                createdDate: "2024-09-14",
                thumbnail: "",
                description:
                    "A clean HTML-only portfolio starter with semantic structure, project sections, and contact anchors.",
                stack: ["HTML"],
                techStack: ["HTML"],
                impact: "Built as a lightweight semantic layout reference.",
                repo: "https://github.com/marvelade",
                github: "https://github.com/marvelade",
                demo: "https://example.com",
            },
            {
                title: "Yaru Landing",
                slug: "yaru-landing",
                type: "Landing Page",
                category: "HTML + CSS",
                status: "Completed",
                createdDate: "2025-01-18",
                thumbnail: "",
                description:
                    "A responsive landing page with careful spacing, accessible sections, and CSS-only visual polish.",
                stack: ["HTML", "CSS"],
                techStack: ["HTML", "CSS"],
                impact: "Ships without JavaScript and keeps layout shift near zero.",
                repo: "https://github.com/marvelade",
                github: "https://github.com/marvelade",
                demo: "https://example.com",
            },
            {
                title: "Task Arcade",
                slug: "task-arcade",
                type: "Interactive UI",
                category: "HTML CSS JS",
                status: "Completed",
                createdDate: "2025-05-04",
                thumbnail: "",
                description:
                    "A browser task board with drag interactions, local storage, filtering, and compact status views.",
                stack: ["HTML", "CSS", "JavaScript"],
                techStack: ["HTML", "CSS", "JavaScript"],
                impact: "Prototype for lightweight offline productivity flows.",
                repo: "https://github.com/marvelade",
                github: "https://github.com/marvelade",
                demo: "https://example.com",
            },
            {
                title: "Edge Storefront",
                slug: "edge-storefront",
                type: "Frontend",
                category: "Frontend",
                status: "In Progress",
                createdDate: "2026-01-05",
                thumbnail: "",
                description:
                    "A product browsing interface with fast filters, saved views, and checkout-ready component states.",
                stack: ["React", "Tailwind CSS", "Vite"],
                techStack: ["React", "Tailwind CSS", "Vite"],
                impact: "Designed for quick scanning across large catalogs.",
                repo: "https://github.com/marvelade",
                github: "https://github.com/marvelade",
                demo: "https://example.com",
            },
            {
                title: "Ledger Core",
                slug: "ledger-core",
                type: "Backend Service",
                category: "Backend",
                status: "Completed",
                createdDate: "2025-08-19",
                thumbnail: "",
                description:
                    "A transaction API with validation, pagination, audit logs, and predictable error responses.",
                stack: ["Node.js", "Express", "MongoDB"],
                techStack: ["Node.js", "Express", "MongoDB"],
                impact: "Handles account history queries with indexed reads.",
                repo: "https://github.com/marvelade",
                github: "https://github.com/marvelade",
                demo: "https://example.com",
            },
        ],
    },
    Pr = "/api";
async function Tr(n) {
    const r = await n.json().catch(() => ({}));
    if (!n.ok) throw new Error(r.message || `Request failed with ${n.status}`);
    return r;
}
async function kv() {
    try {
        const n = await Tr(await fetch(`${Pr}/portfolio`));
        return {
            profile: n.profile || Si.profile,
            skills: n.skills || Si.skills,
            projects: n.projects || Si.projects,
            source: n.source || "api",
        };
    } catch {
        return { ...Si, source: "local" };
    }
}
async function um(n) {
    try {
        return await Tr(
            await fetch(`${Pr}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(n),
            }),
        );
    } catch {
        return {
            ok: !0,
            queued: !0,
            message: "Message queued locally while the API is offline.",
        };
    }
}
async function Cv(n) {
    return Tr(
        await fetch(`${Pr}/projects`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(n),
        }),
    );
}
async function jv() {
    return Tr(await fetch(`${Pr}/projects`));
}
async function Pv() {
    return Tr(await fetch(`${Pr}/about`));
}
async function Tv() {
    return Tr(await fetch(`${Pr}/skills`));
}
const Ev = "file:///home/marvelade/about",
    Nv = { Frontend: im, Backend: sm, Tools: Jp },
    Mv = {
        react: cv,
        "tailwind css": vu,
        accessibility: xv,
        "node.js": sm,
        express: mv,
        mongodb: ov,
        git: gu,
        linux: bo,
    };
function Dv(n) {
    return (
        Mv[String(n.icon || n.name || "").toLowerCase()] || Nv[n.category] || Jp
    );
}
function El(n) {
    var r;
    return Array.isArray(n)
        ? n.length && Array.isArray((r = n[0]) == null ? void 0 : r.items)
            ? n.flatMap((s) =>
                  s.items.map((a) => ({
                      name: a,
                      icon: a,
                      level: "Advanced",
                      category: s.group,
                  })),
              )
            : n
        : [];
}
function Rv({ portfolio: n }) {
    const [r, s] = I.useState({
            profile: n.profile,
            experience: n.profile.experience || [],
            education: n.profile.education || [],
            avatar: n.profile.avatar || n.profile.avatarUrl || "",
        }),
        [a, l] = I.useState(El(n.skills || []));
    I.useEffect(() => {
        let m = !0;
        return (
            Promise.all([Pv(), Tv()])
                .then(([g, x]) => {
                    m &&
                        (s({
                            profile: g.profile || n.profile,
                            experience:
                                g.experience || n.profile.experience || [],
                            education: g.education || n.profile.education || [],
                            avatar:
                                g.avatar ||
                                n.profile.avatar ||
                                n.profile.avatarUrl ||
                                "",
                        }),
                        l(El(x.skills || n.skills || [])));
                })
                .catch(() => {
                    m &&
                        (s({
                            profile: n.profile,
                            experience: n.profile.experience || [],
                            education: n.profile.education || [],
                            avatar:
                                n.profile.avatar || n.profile.avatarUrl || "",
                        }),
                        l(El(n.skills || [])));
                }),
            () => {
                m = !1;
            }
        );
    }, [n]);
    const d = I.useMemo(() => r.profile.stats || [], [r.profile.stats]),
        c = r.profile,
        h = r.avatar || c.avatar || c.avatarUrl || "";
    return p.jsxs("div", {
        className: "h-full overflow-auto bg-[#efe9e6] text-[#241a22]",
        children: [
            p.jsx("div", {
                className:
                    "sticky top-0 z-10 border-b border-black/10 bg-[#f7f3f0]/95 px-5 py-3 backdrop-blur-xl",
                children: p.jsxs("div", {
                    className:
                        "flex items-center gap-3 rounded-md border border-black/10 bg-white px-3 py-2 shadow-sm",
                    children: [
                        p.jsxs("div", {
                            className: "flex items-center gap-1.5 pr-1",
                            children: [
                                p.jsx("span", {
                                    className:
                                        "h-3 w-3 rounded-full bg-[#ff5f57]",
                                }),
                                p.jsx("span", {
                                    className:
                                        "h-3 w-3 rounded-full bg-[#febc2e]",
                                }),
                                p.jsx("span", {
                                    className:
                                        "h-3 w-3 rounded-full bg-[#28c840]",
                                }),
                            ],
                        }),
                        p.jsxs("div", {
                            className:
                                "flex min-w-0 flex-1 items-center gap-2 rounded-md border border-black/10 bg-[#f4f1ee] px-3 py-2 text-sm text-[#6e5a67]",
                            children: [
                                p.jsxs("span", {
                                    className:
                                        "flex items-center gap-2 text-[#8b7382]",
                                    children: [
                                        p.jsx(Ql, { size: 15 }),
                                        "Browser",
                                    ],
                                }),
                                p.jsx("span", {
                                    className:
                                        "truncate font-medium text-[#3b2d36]",
                                    children: Ev,
                                }),
                            ],
                        }),
                        p.jsx("a", {
                            href: `mailto:${c.email}`,
                            className:
                                "hidden rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-medium text-[#3b2d36] transition hover:border-[#E95420] hover:text-[#C33F13] md:inline-flex",
                            children: "Contact",
                        }),
                    ],
                }),
            }),
            p.jsxs("div", {
                className: "space-y-10 px-5 py-6",
                children: [
                    p.jsxs("section", {
                        className:
                            "grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center",
                        children: [
                            p.jsxs("div", {
                                className: "space-y-5",
                                children: [
                                    p.jsx("div", {
                                        className:
                                            "inline-flex items-center gap-2 rounded-full border border-[#d9ccc6] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7382]",
                                        children: "About Me",
                                    }),
                                    p.jsxs("div", {
                                        className:
                                            "flex flex-wrap items-end gap-4",
                                        children: [
                                            h
                                                ? p.jsx("img", {
                                                      src: h,
                                                      alt: c.name,
                                                      className:
                                                          "h-24 w-24 shrink-0 rounded-3xl object-cover shadow-[0_12px_32px_rgba(51,13,38,0.25)]",
                                                  })
                                                : p.jsx("div", {
                                                      className:
                                                          "grid h-24 w-24 shrink-0 place-items-center rounded-3xl bg-[#330d26] text-3xl font-semibold text-white shadow-[0_12px_32px_rgba(51,13,38,0.25)]",
                                                      children:
                                                          c.avatarInitials,
                                                  }),
                                            p.jsxs("div", {
                                                className: "min-w-0",
                                                children: [
                                                    p.jsx("h1", {
                                                        className:
                                                            "text-4xl font-semibold tracking-tight md:text-5xl",
                                                        children: c.name,
                                                    }),
                                                    p.jsx("p", {
                                                        className:
                                                            "mt-1 text-xl font-medium text-[#6b4f60]",
                                                        children: c.title,
                                                    }),
                                                    p.jsxs("p", {
                                                        className:
                                                            "mt-2 flex items-center gap-2 text-sm text-[#7d6a75]",
                                                        children: [
                                                            p.jsx(fv, {
                                                                size: 15,
                                                            }),
                                                            c.location,
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    p.jsx("p", {
                                        className:
                                            "max-w-2xl text-base leading-8 text-[#3a2c35]",
                                        children: c.bio,
                                    }),
                                    p.jsx("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: d.map((m) =>
                                            p.jsxs(
                                                "div",
                                                {
                                                    className:
                                                        "rounded-2xl border border-[#dccfc9] bg-white px-4 py-3 shadow-sm",
                                                    children: [
                                                        p.jsx("div", {
                                                            className:
                                                                "text-lg font-semibold text-[#330d26]",
                                                            children: m.value,
                                                        }),
                                                        p.jsx("div", {
                                                            className:
                                                                "text-xs uppercase tracking-[0.18em] text-[#8d7383]",
                                                            children: m.label,
                                                        }),
                                                    ],
                                                },
                                                m.label,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            p.jsx("div", {
                                className:
                                    "rounded-[1.5rem] border border-[#d8ccc6] bg-white p-5 shadow-[0_18px_50px_rgba(51,13,38,0.08)]",
                                children: p.jsxs("div", {
                                    className:
                                        "rounded-[1.1rem] bg-gradient-to-br from-[#330d26] via-[#4a183a] to-[#23111d] p-5 text-white",
                                    children: [
                                        p.jsxs("div", {
                                            className:
                                                "flex items-center justify-between gap-4",
                                            children: [
                                                p.jsxs("div", {
                                                    children: [
                                                        p.jsx("p", {
                                                            className:
                                                                "text-xs uppercase tracking-[0.24em] text-white/65",
                                                            children: "Profile",
                                                        }),
                                                        p.jsx("h2", {
                                                            className:
                                                                "mt-2 text-2xl font-semibold",
                                                            children:
                                                                "Full Stack Developer",
                                                        }),
                                                    ],
                                                }),
                                                h
                                                    ? p.jsx("img", {
                                                          src: h,
                                                          alt: c.name,
                                                          className:
                                                              "h-14 w-14 rounded-2xl object-cover",
                                                      })
                                                    : p.jsx("div", {
                                                          className:
                                                              "grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/10 text-2xl font-semibold",
                                                          children:
                                                              c.avatarInitials,
                                                      }),
                                            ],
                                        }),
                                        p.jsx("p", {
                                            className:
                                                "mt-5 max-w-md text-sm leading-6 text-white/80",
                                            children: c.summary,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    p.jsxs("section", {
                        className: "grid gap-6 lg:grid-cols-[1fr_1fr]",
                        children: [
                            p.jsxs("div", {
                                className:
                                    "rounded-[1.4rem] border border-[#d8ccc6] bg-white p-5 shadow-sm",
                                children: [
                                    p.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            p.jsx("div", {
                                                className:
                                                    "grid h-9 w-9 place-items-center rounded-xl bg-[#330d26] text-white",
                                                children: p.jsx(im, {
                                                    size: 16,
                                                }),
                                            }),
                                            p.jsx("h2", {
                                                className:
                                                    "text-lg font-semibold",
                                                children: "Skills",
                                            }),
                                        ],
                                    }),
                                    p.jsx("div", {
                                        className:
                                            "mt-5 grid gap-3 sm:grid-cols-2",
                                        children: a.map((m) => {
                                            const g = Dv(m);
                                            return p.jsxs(
                                                "div",
                                                {
                                                    className:
                                                        "flex items-center gap-3 rounded-2xl border border-[#e4d8d2] bg-[#faf7f5] px-4 py-3",
                                                    children: [
                                                        p.jsx("span", {
                                                            className:
                                                                "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#330d26] text-white",
                                                            children: p.jsx(g, {
                                                                size: 16,
                                                            }),
                                                        }),
                                                        p.jsxs("div", {
                                                            children: [
                                                                p.jsx("div", {
                                                                    className:
                                                                        "text-sm font-semibold text-[#2f2230]",
                                                                    children:
                                                                        m.name,
                                                                }),
                                                                p.jsxs("div", {
                                                                    className:
                                                                        "text-xs text-[#846c7c]",
                                                                    children: [
                                                                        m.category,
                                                                        " • ",
                                                                        m.level,
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                `${m.category}-${m.name}`,
                                            );
                                        }),
                                    }),
                                ],
                            }),
                            p.jsxs("div", {
                                className: "space-y-6",
                                children: [
                                    p.jsxs("section", {
                                        className:
                                            "rounded-[1.4rem] border border-[#d8ccc6] bg-white p-5 shadow-sm",
                                        children: [
                                            p.jsx("h2", {
                                                className:
                                                    "text-lg font-semibold",
                                                children: "Experience",
                                            }),
                                            p.jsx("div", {
                                                className: "mt-5 space-y-4",
                                                children: r.experience.map(
                                                    (m, g) =>
                                                        p.jsxs(
                                                            "article",
                                                            {
                                                                className:
                                                                    "relative pl-6",
                                                                children: [
                                                                    p.jsx(
                                                                        "span",
                                                                        {
                                                                            className:
                                                                                "absolute left-0 top-2 h-3 w-3 rounded-full bg-[#E95420] shadow-[0_0_0_6px_rgba(233,84,32,0.14)]",
                                                                        },
                                                                    ),
                                                                    p.jsxs(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "flex flex-wrap items-center gap-x-3 gap-y-1",
                                                                            children:
                                                                                [
                                                                                    p.jsx(
                                                                                        "h3",
                                                                                        {
                                                                                            className:
                                                                                                "text-base font-semibold text-[#2c1f29]",
                                                                                            children:
                                                                                                m.role,
                                                                                        },
                                                                                    ),
                                                                                    p.jsx(
                                                                                        "span",
                                                                                        {
                                                                                            className:
                                                                                                "text-sm text-[#7b6570]",
                                                                                            children:
                                                                                                m.company,
                                                                                        },
                                                                                    ),
                                                                                    p.jsx(
                                                                                        "span",
                                                                                        {
                                                                                            className:
                                                                                                "rounded-full bg-[#f3ebe7] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b7280]",
                                                                                            children:
                                                                                                m.period,
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                    p.jsx("p", {
                                                                        className:
                                                                            "mt-2 text-sm leading-6 text-[#4a3944]",
                                                                        children:
                                                                            m.summary,
                                                                    }),
                                                                ],
                                                            },
                                                            `${m.role}-${g}`,
                                                        ),
                                                ),
                                            }),
                                        ],
                                    }),
                                    p.jsxs("section", {
                                        className:
                                            "rounded-[1.4rem] border border-[#d8ccc6] bg-white p-5 shadow-sm",
                                        children: [
                                            p.jsxs("div", {
                                                className:
                                                    "flex items-center gap-2",
                                                children: [
                                                    p.jsx("div", {
                                                        className:
                                                            "grid h-9 w-9 place-items-center rounded-xl bg-[#330d26] text-white",
                                                        children: p.jsx(lv, {
                                                            size: 16,
                                                        }),
                                                    }),
                                                    p.jsx("h2", {
                                                        className:
                                                            "text-lg font-semibold",
                                                        children: "Education",
                                                    }),
                                                ],
                                            }),
                                            p.jsx("div", {
                                                className: "mt-5 space-y-4",
                                                children: r.education.map(
                                                    (m, g) =>
                                                        p.jsxs(
                                                            "article",
                                                            {
                                                                className:
                                                                    "rounded-2xl border border-[#e4d8d2] bg-[#faf7f5] p-4",
                                                                children: [
                                                                    p.jsxs(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "flex flex-wrap items-center gap-x-3 gap-y-1",
                                                                            children:
                                                                                [
                                                                                    p.jsx(
                                                                                        "h3",
                                                                                        {
                                                                                            className:
                                                                                                "text-sm font-semibold text-[#2c1f29]",
                                                                                            children:
                                                                                                m.school,
                                                                                        },
                                                                                    ),
                                                                                    p.jsx(
                                                                                        "span",
                                                                                        {
                                                                                            className:
                                                                                                "text-sm text-[#7b6570]",
                                                                                            children:
                                                                                                m.credential,
                                                                                        },
                                                                                    ),
                                                                                    p.jsx(
                                                                                        "span",
                                                                                        {
                                                                                            className:
                                                                                                "rounded-full bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b7280]",
                                                                                            children:
                                                                                                m.period,
                                                                                        },
                                                                                    ),
                                                                                ],
                                                                        },
                                                                    ),
                                                                    p.jsx("p", {
                                                                        className:
                                                                            "mt-2 text-sm leading-6 text-[#4a3944]",
                                                                        children:
                                                                            m.summary,
                                                                    }),
                                                                ],
                                                            },
                                                            `${m.school}-${g}`,
                                                        ),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    p.jsxs("section", {
                        className:
                            "rounded-[1.4rem] border border-[#d8ccc6] bg-white p-5 shadow-sm",
                        children: [
                            p.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    p.jsx("div", {
                                        className:
                                            "grid h-9 w-9 place-items-center rounded-xl bg-[#330d26] text-white",
                                        children: p.jsx(fo, { size: 16 }),
                                    }),
                                    p.jsx("h2", {
                                        className: "text-lg font-semibold",
                                        children: "Links",
                                    }),
                                ],
                            }),
                            p.jsx("div", {
                                className: "mt-4 grid gap-3 md:grid-cols-3",
                                children: c.socials.map((m) =>
                                    p.jsxs(
                                        "a",
                                        {
                                            href: m.href,
                                            target: m.href.startsWith("http")
                                                ? "_blank"
                                                : void 0,
                                            rel: "noreferrer",
                                            className:
                                                "flex items-center justify-between rounded-2xl border border-[#e4d8d2] bg-[#faf7f5] px-4 py-3 text-sm transition hover:border-[#E95420] hover:text-[#C33F13]",
                                            children: [
                                                p.jsx("span", {
                                                    children: m.value,
                                                }),
                                                p.jsx(fo, { size: 15 }),
                                            ],
                                        },
                                        m.label,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
const wu = [
        "HTML",
        "HTML + CSS",
        "HTML CSS JS",
        "React + Tailwind",
        "APIs",
        "Full Stack",
        "Frontend",
        "Backend",
    ],
    cm = ["Completed", "In Progress", "Archived"],
    br = {
        HTML: "#E95420",
        "HTML + CSS": "#1C71D8",
        "HTML CSS JS": "#F6D32D",
        "React + Tailwind": "#62A0EA",
        APIs: "#9141AC",
        "Full Stack": "#2EC27E",
        Frontend: "#FF7800",
        Backend: "#26A269",
    },
    Nl = {
        title: "",
        description: "",
        category: "Full Stack",
        status: "In Progress",
        stack: [],
        repo: "",
        demo: "",
        thumbnail: "",
    };
function Av({ initialCategory: n, onClose: r, onSave: s }) {
    const [a, l] = I.useState(() => ({ ...Nl, category: n || Nl.category })),
        [d, c] = I.useState(""),
        [h, m] = I.useState(!1),
        [g, x] = I.useState("");
    I.useEffect(() => {
        n && l((b) => ({ ...b, category: n }));
    }, [n]);
    function v(b, N) {
        l((C) => ({ ...C, [b]: N }));
    }
    function w(b = d) {
        const N = b.trim();
        N &&
            (l((C) =>
                C.stack.some((M) => M.toLowerCase() === N.toLowerCase())
                    ? C
                    : { ...C, stack: [...C.stack, N] },
            ),
            c(""));
    }
    function j(b) {
        l((N) => ({ ...N, stack: N.stack.filter((C) => C !== b) }));
    }
    function z(b) {
        (b.key !== "Enter" && b.key !== ",") || (b.preventDefault(), w());
    }
    async function T(b) {
        (b.preventDefault(), x(""), m(!0));
        const N = d.trim(),
            C = N && !a.stack.includes(N) ? [...a.stack, N] : a.stack;
        try {
            (await s({
                ...a,
                title: a.title.trim(),
                description: a.description.trim(),
                repo: a.repo.trim(),
                demo: a.demo.trim(),
                thumbnail: a.thumbnail.trim(),
                stack: C,
            }),
                l(Nl),
                c(""));
        } catch (M) {
            x(M.message || "Project could not be saved.");
        } finally {
            m(!1);
        }
    }
    return p.jsx("div", {
        "data-no-desktop-menu": "true",
        className:
            "absolute inset-0 z-[90] grid place-items-center bg-black/45 px-5 backdrop-blur-sm",
        onClick: () => {
            h || r();
        },
        children: p.jsxs("form", {
            onSubmit: T,
            className:
                "max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-lg border border-black/60 bg-[#2C2C2C] text-white shadow-window",
            onClick: (b) => b.stopPropagation(),
            children: [
                p.jsxs("div", {
                    className:
                        "flex h-11 items-center justify-between border-b border-black/45 bg-[#242424] px-3",
                    children: [
                        p.jsxs("div", {
                            className:
                                "flex items-center gap-2 text-sm font-semibold",
                            children: [
                                p.jsx(xu, {
                                    size: 16,
                                    className: "text-[#E95420]",
                                }),
                                "Add Project",
                            ],
                        }),
                        p.jsx("button", {
                            type: "button",
                            onClick: r,
                            disabled: h,
                            className:
                                "grid h-6 w-6 place-items-center rounded-full bg-[#E95420] text-white transition hover:bg-[#ff6b34] disabled:opacity-60",
                            "aria-label": "Close",
                            title: "Close",
                            children: p.jsx(lm, { size: 14 }),
                        }),
                    ],
                }),
                p.jsxs("div", {
                    className:
                        "max-h-[calc(88vh-44px)] space-y-4 overflow-auto p-5",
                    children: [
                        p.jsxs("label", {
                            className: "block text-sm font-semibold",
                            children: [
                                "Title",
                                p.jsx("input", {
                                    value: a.title,
                                    onChange: (b) => v("title", b.target.value),
                                    required: !0,
                                    autoFocus: !0,
                                    className:
                                        "mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25",
                                }),
                            ],
                        }),
                        p.jsxs("label", {
                            className: "block text-sm font-semibold",
                            children: [
                                "Description",
                                p.jsx("textarea", {
                                    value: a.description,
                                    onChange: (b) =>
                                        v("description", b.target.value),
                                    required: !0,
                                    rows: 4,
                                    className:
                                        "mt-2 w-full resize-none rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25",
                                }),
                            ],
                        }),
                        p.jsxs("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                                p.jsxs("label", {
                                    className: "block text-sm font-semibold",
                                    children: [
                                        "Category",
                                        p.jsx("select", {
                                            value: a.category,
                                            onChange: (b) =>
                                                v("category", b.target.value),
                                            className:
                                                "mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25",
                                            children: wu.map((b) =>
                                                p.jsx(
                                                    "option",
                                                    { value: b, children: b },
                                                    b,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                p.jsxs("label", {
                                    className: "block text-sm font-semibold",
                                    children: [
                                        "Status",
                                        p.jsx("select", {
                                            value: a.status,
                                            onChange: (b) =>
                                                v("status", b.target.value),
                                            className:
                                                "mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25",
                                            children: cm.map((b) =>
                                                p.jsx(
                                                    "option",
                                                    { value: b, children: b },
                                                    b,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        p.jsxs("label", {
                            className: "block text-sm font-semibold",
                            children: [
                                "Tech Stack",
                                p.jsx("div", {
                                    className:
                                        "mt-2 rounded-md border border-[#4a4a4a] bg-[#1f1f1f] p-2 transition focus-within:border-[#E95420] focus-within:ring-2 focus-within:ring-[#E95420]/25",
                                    children: p.jsxs("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            a.stack.map((b) =>
                                                p.jsx(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        onClick: () => j(b),
                                                        className:
                                                            "rounded-full bg-[#E95420] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#ff6b34]",
                                                        title: `Remove ${b}`,
                                                        children: b,
                                                    },
                                                    b,
                                                ),
                                            ),
                                            p.jsx("input", {
                                                value: d,
                                                onChange: (b) =>
                                                    c(b.target.value),
                                                onKeyDown: z,
                                                onBlur: () => w(),
                                                placeholder:
                                                    "Type a tag, press Enter",
                                                className:
                                                    "h-7 min-w-44 flex-1 bg-transparent px-1 text-sm text-white outline-none placeholder:text-white/35",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        p.jsxs("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                                p.jsxs("label", {
                                    className: "block text-sm font-semibold",
                                    children: [
                                        "GitHub URL",
                                        p.jsx("input", {
                                            value: a.repo,
                                            onChange: (b) =>
                                                v("repo", b.target.value),
                                            className:
                                                "mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25",
                                        }),
                                    ],
                                }),
                                p.jsxs("label", {
                                    className: "block text-sm font-semibold",
                                    children: [
                                        "Live Demo URL",
                                        p.jsx("input", {
                                            value: a.demo,
                                            onChange: (b) =>
                                                v("demo", b.target.value),
                                            className:
                                                "mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        p.jsxs("label", {
                            className: "block text-sm font-semibold",
                            children: [
                                "Thumbnail URL",
                                p.jsx("input", {
                                    value: a.thumbnail,
                                    onChange: (b) =>
                                        v("thumbnail", b.target.value),
                                    className:
                                        "mt-2 h-10 w-full rounded-md border border-[#4a4a4a] bg-[#1f1f1f] px-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/25",
                                }),
                            ],
                        }),
                        g &&
                            p.jsx("div", {
                                className:
                                    "rounded-md border border-red-500/45 bg-red-500/10 px-3 py-2 text-sm text-red-100",
                                children: g,
                            }),
                        p.jsx("div", {
                            className: "flex justify-end",
                            children: p.jsxs("button", {
                                type: "submit",
                                disabled: h,
                                className:
                                    "inline-flex h-10 items-center gap-2 rounded-md bg-[#E95420] px-4 text-sm font-semibold text-white transition hover:bg-[#d84a19] disabled:cursor-wait disabled:bg-[#9f4a2d]",
                                children: [
                                    p.jsx(gv, { size: 16 }),
                                    h ? "Saving" : "Save",
                                ],
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
const oh = { name: "", email: "", message: "" };
function zv({ portfolio: n }) {
    const [r, s] = I.useState(oh),
        [a, l] = I.useState("idle"),
        [d, c] = I.useState("");
    function h(g, x) {
        s((v) => ({ ...v, [g]: x }));
    }
    async function m(g) {
        (g.preventDefault(), l("sending"), c(""));
        const x = await um({
            ...r,
            subject: "Ubuntu portfolio inquiry",
            source: "ubuntu-desktop",
        });
        if (x.ok) {
            (l("sent"), c(x.message || "Message sent."), s(oh));
            return;
        }
        (l("error"), c(x.message || "Message could not be sent."));
    }
    return p.jsxs("div", {
        className:
            "grid h-full bg-[#f6f2ef] text-[#211821] md:grid-cols-[0.85fr_1.15fr]",
        children: [
            p.jsxs("aside", {
                className:
                    "border-b border-[#d8ccc4] bg-[#300A24] p-6 text-white md:border-b-0 md:border-r",
                children: [
                    p.jsx("div", {
                        className:
                            "grid h-14 w-14 place-items-center rounded-full bg-[#E95420]",
                        children: p.jsx(ho, { size: 25 }),
                    }),
                    p.jsx("h1", {
                        className: "mt-5 text-2xl font-semibold",
                        children: "Contact",
                    }),
                    p.jsxs("p", {
                        className: "mt-3 text-sm leading-6 text-white/78",
                        children: [
                            "Reach ",
                            n.profile.name,
                            " for product builds, portfolio work, and full-stack web projects.",
                        ],
                    }),
                    p.jsx("a", {
                        href: `mailto:${n.profile.email}`,
                        className:
                            "mt-6 inline-flex h-10 items-center rounded-md bg-white px-4 text-sm font-semibold text-[#300A24] transition hover:bg-[#f0e8e2]",
                        children: n.profile.email,
                    }),
                ],
            }),
            p.jsxs("form", {
                onSubmit: m,
                className: "space-y-4 p-6",
                children: [
                    p.jsxs("label", {
                        className: "block text-sm font-semibold",
                        children: [
                            "Name",
                            p.jsx("input", {
                                value: r.name,
                                onChange: (g) => h("name", g.target.value),
                                required: !0,
                                className:
                                    "mt-2 h-11 w-full rounded-md border border-[#cfc2bb] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20",
                            }),
                        ],
                    }),
                    p.jsxs("label", {
                        className: "block text-sm font-semibold",
                        children: [
                            "Email",
                            p.jsx("input", {
                                type: "email",
                                value: r.email,
                                onChange: (g) => h("email", g.target.value),
                                required: !0,
                                className:
                                    "mt-2 h-11 w-full rounded-md border border-[#cfc2bb] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20",
                            }),
                        ],
                    }),
                    p.jsxs("label", {
                        className: "block text-sm font-semibold",
                        children: [
                            "Message",
                            p.jsx("textarea", {
                                value: r.message,
                                onChange: (g) => h("message", g.target.value),
                                required: !0,
                                rows: 6,
                                className:
                                    "mt-2 w-full resize-none rounded-md border border-[#cfc2bb] bg-white px-3 py-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20",
                            }),
                        ],
                    }),
                    p.jsxs("button", {
                        type: "submit",
                        disabled: a === "sending",
                        className:
                            "inline-flex h-11 items-center gap-2 rounded-md bg-[#E95420] px-4 text-sm font-semibold text-white transition hover:bg-[#d84a19] disabled:cursor-wait disabled:bg-[#b96a4f]",
                        children: [
                            p.jsx(vv, { size: 16 }),
                            a === "sending" ? "Sending" : "Send",
                        ],
                    }),
                    d &&
                        p.jsx("p", {
                            className: `text-sm ${a === "error" ? "text-red-700" : "text-[#0b7551]"}`,
                            children: d,
                        }),
                ],
            }),
        ],
    });
}
function _v({ label: n, isRunning: r, children: s, onClick: a }) {
    const [l, d] = I.useState(!1);
    return p.jsxs("button", {
        type: "button",
        className:
            "relative flex flex-col items-center gap-[3px] cursor-pointer outline-none transition-all duration-200",
        onMouseEnter: () => d(!0),
        onMouseLeave: () => d(!1),
        onClick: a,
        "aria-label": n,
        title: n,
        children: [
            p.jsx("div", {
                className: `absolute bottom-[62px] left-1/2 -translate-x-1/2 rounded-md bg-[rgba(20,20,20,0.92)] px-2 py-1 text-[10px] whitespace-nowrap text-white pointer-events-none transition-all duration-150 ${l ? "opacity-100" : "opacity-0"}`,
                children: n,
            }),
            p.jsx("div", {
                className: `flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-150 ${l ? "-translate-y-[10px] scale-[1.18]" : "translate-y-0 scale-100"} active:-translate-y-1 active:scale-105`,
                style: {
                    transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
                },
                children: s,
            }),
            p.jsx("div", {
                className: `h-1 w-1 rounded-full bg-white/70 transition-opacity duration-200 ${r ? "opacity-100" : "opacity-0"}`,
            }),
        ],
    });
}
const ah = {
    default: { body: "#1a6fae", tab: "#2196c4" },
    web: { body: "#e8821a", tab: "#f0a030" },
    fullstack: { body: "#3a7d44", tab: "#4e9e5a" },
    backend: { body: "#7b3fa0", tab: "#9b55c0" },
    frontend: { body: "#c0392b", tab: "#e74c3c" },
    api: { body: "#16819a", tab: "#1da7c8" },
};
function dm({ colorKey: n = "default", className: r = "" }) {
    const s = I.useId(),
        a = ah[n] || ah.default;
    return p.jsxs("svg", {
        width: "56",
        height: "48",
        viewBox: "0 0 52 44",
        fill: "none",
        className: r,
        "aria-hidden": "true",
        children: [
            p.jsx("rect", {
                x: "1",
                y: "10",
                width: "50",
                height: "32",
                rx: "4",
                fill: a.body,
            }),
            p.jsx("rect", {
                x: "1",
                y: "10",
                width: "50",
                height: "32",
                rx: "4",
                fill: `url(#${s})`,
            }),
            p.jsx("path", {
                d: "M1 14 Q1 10 5 10 H20 L24 6 H47 Q51 6 51 10 V14 Z",
                fill: a.tab,
            }),
            p.jsx("rect", {
                x: "1",
                y: "14",
                width: "50",
                height: "28",
                fill: a.tab,
                opacity: "0.2",
            }),
            p.jsx("defs", {
                children: p.jsxs("linearGradient", {
                    id: s,
                    x1: "26",
                    y1: "10",
                    x2: "26",
                    y2: "42",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        p.jsx("stop", {
                            offset: "0",
                            stopColor: "#fff",
                            stopOpacity: "0.15",
                        }),
                        p.jsx("stop", {
                            offset: "1",
                            stopColor: "#000",
                            stopOpacity: "0.1",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function Lv({
    apps: n,
    openWindows: r,
    onAddProject: s,
    onOpenApp: a,
    onLauncher: l,
}) {
    return p.jsxs("aside", {
        "data-no-desktop-menu": "true",
        className:
            "fixed bottom-3 left-1/2 z-[105] flex min-w-[520px] -translate-x-1/2 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#24131f]/72 px-5 py-2.5 shadow-ubuntu backdrop-blur-2xl transition-all duration-200",
        children: [
            p.jsx("div", {
                className: "flex items-center gap-5",
                children: n.map((d) => {
                    const c = r.find((g) => g.id === d.id),
                        h = c && !c.minimized,
                        m =
                            {
                                files: p.jsx(dm, {
                                    colorKey: "default",
                                    className:
                                        "drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]",
                                }),
                                terminal: p.jsx(bo, {
                                    size: 24,
                                    strokeWidth: 2,
                                }),
                                about: p.jsx(tm, {
                                    size: 24,
                                    strokeWidth: 1.9,
                                }),
                                contact: p.jsx(om, {
                                    size: 24,
                                    strokeWidth: 1.9,
                                }),
                            }[d.id] ||
                            p.jsx(em, { size: 24, strokeWidth: 1.9 });
                    return p.jsx(
                        _v,
                        {
                            label: d.dockTitle || d.title,
                            isRunning: h,
                            onClick: () => a(d.id),
                            children: m,
                        },
                        d.id,
                    );
                }),
            }),
            p.jsx("button", {
                onClick: s,
                className:
                    "grid h-12 w-12 place-items-center rounded-2xl bg-[#2EC27E] text-white shadow-sm transition-all duration-200 hover:scale-110 hover:bg-[#33d18a] focus:scale-110 focus:bg-[#33d18a] focus:outline-none",
                title: "Add Project",
                "aria-label": "Add Project",
                children: p.jsx(xu, { size: 26, strokeWidth: 2.3 }),
            }),
            p.jsx("button", {
                onClick: l,
                className:
                    "grid h-12 w-12 place-items-center rounded-2xl bg-ubuntu-orange text-white shadow-sm transition-all duration-200 hover:scale-110 hover:bg-[#ff6b34] focus:scale-110 focus:bg-[#ff6b34] focus:outline-none",
                title: "Show Applications",
                "aria-label": "Show Applications",
                children: p.jsx(uv, { size: 24, strokeWidth: 2 }),
            }),
        ],
    });
}
const lh = {
    Completed: "bg-[#e7f4ef] text-[#0b7551]",
    "In Progress": "bg-[#fff4d6] text-[#8a5a00]",
    Archived: "bg-[#ece7ee] text-[#5d4c62]",
};
function Vv({ onOpenProjectDialog: n, portfolio: r }) {
    const [s, a] = I.useState(null),
        [l, d] = I.useState(null),
        c = I.useMemo(() => r.projects.map((v) => Wv(v)), [r.projects]),
        h = I.useMemo(
            () =>
                wu.map((v) => ({
                    category: v,
                    color: br[v],
                    count: c.filter((w) => w.category === v).length,
                })),
            [c],
        ),
        m = s ? c.filter((v) => v.category === s) : c;
    function g(v) {
        (a(v), d(null));
    }
    function x() {
        (a(null), d(null));
    }
    return p.jsxs("div", {
        className:
            "relative grid h-full bg-[#f6f2ef] text-[#211821] md:grid-cols-[230px_1fr]",
        children: [
            p.jsxs("aside", {
                className:
                    "min-h-0 border-b border-[#d8ccc4] bg-[#eee7e1] p-3 md:border-b-0 md:border-r",
                children: [
                    p.jsxs("button", {
                        onClick: x,
                        className: `flex h-9 w-full items-center gap-2 rounded-md px-3 text-left text-sm font-semibold transition ${s === null ? "bg-[#E95420] text-white" : "bg-[#d9cbc4] text-[#352832] hover:bg-[#dfd5cf]"}`,
                        children: [
                            p.jsx(rm, { size: 16 }),
                            "All Projects",
                            p.jsx("span", {
                                className:
                                    "ml-auto rounded-full bg-black/12 px-2 py-0.5 text-[11px]",
                                children: c.length,
                            }),
                        ],
                    }),
                    p.jsx("div", {
                        className: "mt-3 space-y-1",
                        children: h.map((v) =>
                            p.jsxs(
                                "button",
                                {
                                    onClick: () => g(v.category),
                                    className: `flex h-9 w-full items-center gap-2 rounded-md px-3 text-left text-sm transition ${s === v.category ? "bg-[#E95420] text-white" : "text-[#4d3b46] hover:bg-[#dfd5cf]"}`,
                                    children: [
                                        p.jsx("span", {
                                            className:
                                                "h-3 w-3 shrink-0 rounded-sm",
                                            style: { backgroundColor: v.color },
                                        }),
                                        p.jsx("span", {
                                            className: "truncate",
                                            children: v.category,
                                        }),
                                        p.jsx("span", {
                                            className:
                                                "ml-auto rounded-full bg-black/10 px-2 py-0.5 text-[11px]",
                                            children: v.count,
                                        }),
                                    ],
                                },
                                v.category,
                            ),
                        ),
                    }),
                ],
            }),
            p.jsxs("section", {
                className: "flex min-h-0 flex-col overflow-hidden",
                children: [
                    p.jsx(Fv, {
                        selectedCategory: s,
                        onAddProject: () =>
                            n == null ? void 0 : n(s || void 0),
                    }),
                    p.jsx("div", {
                        className: "min-h-0 flex-1 overflow-auto p-5",
                        children:
                            s === null
                                ? p.jsx(Ov, { folders: h, onOpenCategory: g })
                                : p.jsx(Iv, {
                                      category: s,
                                      projects: m,
                                      onOpenProject: d,
                                  }),
                    }),
                ],
            }),
            l && p.jsx(Uv, { project: l, onClose: () => d(null) }),
        ],
    });
}
function Fv({ selectedCategory: n, onAddProject: r }) {
    return p.jsxs("div", {
        className:
            "flex min-h-11 items-center justify-between gap-3 border-b border-[#d8ccc4] bg-white px-4 py-2 text-sm",
        children: [
            p.jsxs("div", {
                className: "flex min-w-0 items-center gap-2",
                children: [
                    p.jsx(rm, { size: 15 }),
                    p.jsx(qs, { label: "~" }),
                    p.jsx(qs, { label: "Portfolio" }),
                    p.jsx(qs, { label: "Projects", active: !n }),
                    n && p.jsx(qs, { label: n, active: !0 }),
                ],
            }),
            p.jsxs("button", {
                onClick: r,
                className:
                    "inline-flex h-9 shrink-0 items-center gap-2 rounded-md bg-[#E95420] px-3 text-sm font-semibold text-white transition hover:bg-[#d84a19] focus:bg-[#d84a19] focus:outline-none",
                children: [p.jsx(xu, { size: 16 }), "Add Project"],
            }),
        ],
    });
}
function qs({ active: n, label: r }) {
    return p.jsxs(p.Fragment, {
        children: [
            p.jsx(sv, { size: 15, className: "shrink-0 text-[#8a7883]" }),
            p.jsx("span", {
                className: `truncate ${n ? "font-semibold text-[#300A24]" : ""}`,
                children: r,
            }),
        ],
    });
}
function Ov({ folders: n, onOpenCategory: r }) {
    return p.jsx("div", {
        className:
            "grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        children: n.map((s) =>
            p.jsxs(
                "button",
                {
                    onDoubleClick: () => r(s.category),
                    onKeyDown: (a) => {
                        a.key === "Enter" && r(s.category);
                    },
                    className:
                        "group flex min-h-32 flex-col items-center rounded-md p-3 text-center transition hover:bg-[#e9ded8] focus:bg-[#e9ded8] focus:outline-none",
                    title: s.category,
                    children: [
                        p.jsx(fm, { color: s.color, count: s.count }),
                        p.jsx("span", {
                            className:
                                "mt-3 w-full break-words text-sm font-semibold text-[#332630]",
                            children: s.category,
                        }),
                    ],
                },
                s.category,
            ),
        ),
    });
}
function Iv({ category: n, projects: r, onOpenProject: s }) {
    return r.length
        ? p.jsx("div", {
              className:
                  "grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
              children: r.map((a) =>
                  p.jsxs(
                      "button",
                      {
                          onDoubleClick: () => s(a),
                          onKeyDown: (l) => {
                              l.key === "Enter" && s(a);
                          },
                          className:
                              "group flex min-h-36 flex-col items-center rounded-md p-3 text-center transition hover:bg-[#e9ded8] focus:bg-[#e9ded8] focus:outline-none",
                          title: a.title,
                          children: [
                              p.jsx(Bv, { project: a }),
                              p.jsx("span", {
                                  className:
                                      "mt-3 w-full break-words text-sm font-semibold text-[#332630]",
                                  children: a.title,
                              }),
                              p.jsx("span", {
                                  className:
                                      "mt-1 rounded-full bg-white px-2 py-0.5 text-[11px] text-[#765f70] ring-1 ring-[#d8ccc4]",
                                  children: a.status,
                              }),
                          ],
                      },
                      a.slug,
                  ),
              ),
          })
        : p.jsx("div", {
              className:
                  "grid h-full place-items-center text-center text-sm text-[#765f70]",
              children: p.jsxs("div", {
                  children: [
                      p.jsx(fm, { color: br[n], count: 0 }),
                      p.jsx("div", {
                          className: "mt-3 font-semibold text-[#300A24]",
                          children: n,
                      }),
                  ],
              }),
          });
}
function fm({ color: n, count: r }) {
    return p.jsxs("span", {
        className: "relative block h-16 w-20 drop-shadow-md",
        children: [
            p.jsx("span", {
                className:
                    "absolute left-1 top-1 h-5 w-9 rounded-t-md opacity-90",
                style: { backgroundColor: n },
            }),
            p.jsx("span", {
                className:
                    "absolute bottom-0 left-0 h-12 w-20 rounded-md rounded-tl-sm",
                style: { backgroundColor: n },
            }),
            p.jsx("span", {
                className:
                    "absolute inset-x-2 bottom-2 h-7 rounded bg-white/16",
            }),
            p.jsx("span", {
                className:
                    "absolute -right-2 -top-1 grid h-6 min-w-6 place-items-center rounded-full bg-[#300A24] px-1 text-[11px] font-semibold text-white ring-2 ring-[#f6f2ef]",
                children: r,
            }),
        ],
    });
}
function Bv({ project: n }) {
    const r = br[n.category] || br["Full Stack"];
    return n.thumbnail
        ? p.jsx("span", {
              className:
                  "grid h-16 w-20 place-items-center overflow-hidden rounded-md bg-white shadow-md ring-1 ring-[#d8ccc4]",
              children: p.jsx("img", {
                  src: n.thumbnail,
                  alt: "",
                  className: "h-full w-full object-cover",
                  onError: (s) => {
                      s.currentTarget.style.display = "none";
                  },
              }),
          })
        : p.jsx("span", {
              className:
                  "grid h-16 w-20 place-items-center rounded-md text-white shadow-md",
              style: { background: `linear-gradient(135deg, ${r}, #300A24)` },
              children: p.jsx(nm, { size: 34, fill: "rgba(255,255,255,0.18)" }),
          });
}
function Uv({ onClose: n, project: r }) {
    const s = br[r.category] || br["Full Stack"];
    return p.jsx("div", {
        className:
            "absolute inset-0 z-20 grid place-items-center bg-black/18 p-5 backdrop-blur-[2px]",
        children: p.jsxs("article", {
            className:
                "flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-black/30 bg-[#f6f2ef] shadow-window",
            children: [
                p.jsxs("div", {
                    className:
                        "flex h-10 shrink-0 items-center justify-between border-b border-black/20 bg-[#302b30] px-3 text-white",
                    children: [
                        p.jsxs("div", {
                            className: "flex min-w-0 items-center gap-2",
                            children: [
                                p.jsx("span", {
                                    className:
                                        "h-3.5 w-3.5 rounded-full bg-[#ff5f57]",
                                }),
                                p.jsx("span", {
                                    className:
                                        "h-3.5 w-3.5 rounded-full bg-[#febc2e]",
                                }),
                                p.jsx("span", {
                                    className:
                                        "h-3.5 w-3.5 rounded-full bg-[#28c840]",
                                }),
                                p.jsx("span", {
                                    className:
                                        "ml-2 truncate text-sm font-semibold",
                                    children: r.title,
                                }),
                            ],
                        }),
                        p.jsx("button", {
                            onClick: n,
                            className:
                                "grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:bg-white/20 focus:outline-none",
                            "aria-label": "Close project detail",
                            title: "Close",
                            children: p.jsx(lm, { size: 14 }),
                        }),
                    ],
                }),
                p.jsxs("div", {
                    className:
                        "grid min-h-0 overflow-auto md:grid-cols-[260px_1fr]",
                    children: [
                        p.jsxs("div", {
                            className: "bg-[#eee7e1] p-5",
                            children: [
                                r.thumbnail
                                    ? p.jsx("img", {
                                          src: r.thumbnail,
                                          alt: "",
                                          className:
                                              "aspect-[4/3] w-full rounded-md object-cover shadow-md",
                                      })
                                    : p.jsx("div", {
                                          className:
                                              "grid aspect-[4/3] w-full place-items-center rounded-md text-white shadow-md",
                                          style: {
                                              background: `linear-gradient(135deg, ${s}, #300A24)`,
                                          },
                                          children: p.jsx(nm, {
                                              size: 64,
                                              fill: "rgba(255,255,255,0.18)",
                                          }),
                                      }),
                                p.jsxs("div", {
                                    className: "mt-4 text-sm text-[#665260]",
                                    children: ["Created ", Kv(r.createdDate)],
                                }),
                            ],
                        }),
                        p.jsxs("div", {
                            className: "p-5",
                            children: [
                                p.jsxs("div", {
                                    className:
                                        "flex flex-wrap items-center gap-2",
                                    children: [
                                        p.jsx("span", {
                                            className:
                                                "rounded-full px-3 py-1 text-xs font-semibold text-white",
                                            style: { backgroundColor: s },
                                            children: r.category,
                                        }),
                                        p.jsx("span", {
                                            className: `rounded-full px-3 py-1 text-xs font-semibold ${lh[r.status] || lh["In Progress"]}`,
                                            children: r.status,
                                        }),
                                    ],
                                }),
                                p.jsx("h1", {
                                    className:
                                        "mt-4 text-2xl font-semibold text-[#300A24]",
                                    children: r.title,
                                }),
                                p.jsx("p", {
                                    className:
                                        "mt-3 text-sm leading-6 text-[#4d3b46]",
                                    children: r.description,
                                }),
                                p.jsx("div", {
                                    className: "mt-5 flex flex-wrap gap-2",
                                    children: r.stack.map((a) =>
                                        p.jsx(
                                            "span",
                                            {
                                                className:
                                                    "rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4d3b46] ring-1 ring-[#d8ccc4]",
                                                children: a,
                                            },
                                            a,
                                        ),
                                    ),
                                }),
                                p.jsxs("div", {
                                    className: "mt-6 flex flex-wrap gap-2",
                                    children: [
                                        p.jsxs("a", {
                                            href: r.repo,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className:
                                                "inline-flex h-10 items-center gap-2 rounded-md border border-[#d7cbc3] bg-white px-3 text-sm font-semibold transition hover:border-[#E95420] hover:text-[#C33F13]",
                                            children: [
                                                p.jsx(gu, { size: 16 }),
                                                "GitHub",
                                            ],
                                        }),
                                        p.jsxs("a", {
                                            href: r.demo,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className:
                                                "inline-flex h-10 items-center gap-2 rounded-md bg-[#E95420] px-3 text-sm font-semibold text-white transition hover:bg-[#d84a19]",
                                            children: [
                                                p.jsx(fo, { size: 16 }),
                                                "Live Demo",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function Wv(n) {
    var s;
    const r = wu.includes(n.category) ? n.category : $v(n);
    return {
        ...n,
        category: r,
        status: Hv(n.status),
        createdDate: n.createdDate || "2026-05-14",
        thumbnail: n.thumbnail || "",
        stack: (s = n.stack) != null && s.length ? n.stack : ["React"],
        repo: n.repo || "https://github.com/marvelade",
        demo: n.demo || "https://example.com",
    };
}
function $v(n) {
    const r = (n.stack || []).join(" ").toLowerCase(),
        s = `${n.type || ""} ${n.title || ""}`.toLowerCase();
    return r.includes("express") || r.includes("mongo")
        ? "Full Stack"
        : r.includes("api") || s.includes("automation")
          ? "APIs"
          : r.includes("react") && r.includes("tailwind")
            ? "React + Tailwind"
            : r.includes("javascript")
              ? "HTML CSS JS"
              : r.includes("css")
                ? "HTML + CSS"
                : r.includes("html")
                  ? "HTML"
                  : s.includes("backend")
                    ? "Backend"
                    : "Frontend";
}
function Hv(n) {
    return cm.includes(n)
        ? n
        : ["Live", "Shipped", "Done"].includes(n)
          ? "Completed"
          : ["Archived", "Retired"].includes(n)
            ? "Archived"
            : "In Progress";
}
function Kv(n) {
    return new Intl.DateTimeFormat(void 0, {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(n));
}
function Gv({ apps: n, open: r, onOpenApp: s, onClose: a }) {
    const [l, d] = I.useState(""),
        c = I.useMemo(() => {
            const h = l.trim().toLowerCase();
            return h ? n.filter((m) => m.title.toLowerCase().includes(h)) : n;
        }, [n, l]);
    return r
        ? p.jsx("div", {
              "data-no-desktop-menu": "true",
              className:
                  "absolute inset-0 z-[35] bg-[#300A24]/72 pl-20 pt-10 backdrop-blur-2xl",
              onClick: a,
              children: p.jsxs("div", {
                  className: "mx-auto mt-10 w-full max-w-4xl px-6",
                  onClick: (h) => h.stopPropagation(),
                  children: [
                      p.jsxs("div", {
                          className:
                              "mx-auto flex h-12 max-w-xl items-center gap-3 rounded-full border border-white/18 bg-black/28 px-5 shadow-ubuntu",
                          children: [
                              p.jsx(yv, {
                                  size: 18,
                                  className: "text-white/65",
                              }),
                              p.jsx("input", {
                                  value: l,
                                  onChange: (h) => d(h.target.value),
                                  className:
                                      "h-full min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/45",
                                  placeholder: "Search",
                                  "aria-label": "Search applications",
                                  autoFocus: !0,
                              }),
                          ],
                      }),
                      p.jsx("div", {
                          className:
                              "mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4",
                          children: c.map((h) => {
                              const m = h.icon;
                              return p.jsxs(
                                  "button",
                                  {
                                      onClick: () => s(h.id),
                                      className:
                                          "flex h-32 flex-col items-center justify-center gap-3 rounded-lg bg-white/8 text-white transition hover:bg-white/16 focus:bg-white/16 focus:outline-none",
                                      children: [
                                          p.jsx("span", {
                                              className:
                                                  "grid h-14 w-14 place-items-center rounded-2xl bg-[#E95420] shadow-lg",
                                              children: p.jsx(m, { size: 30 }),
                                          }),
                                          p.jsx("span", {
                                              className:
                                                  "max-w-full px-2 text-center text-sm font-medium",
                                              children: h.title,
                                          }),
                                      ],
                                  },
                                  h.id,
                              );
                          }),
                      }),
                  ],
              }),
          })
        : null;
}
function Yv({ portfolio: n }) {
    const r = n.projects.map((s) => ({
        ...s,
        techStack: s.techStack || s.stack || [],
        github: s.github || s.repo || "",
        createdAt: s.createdAt || s.createdDate,
    }));
    return p.jsxs("div", {
        className: "h-full overflow-auto bg-[#f6f2ef] p-5 text-[#211821]",
        children: [
            p.jsxs("div", {
                className: "mb-5 flex items-center justify-between gap-4",
                children: [
                    p.jsxs("div", {
                        children: [
                            p.jsx("h1", {
                                className: "text-2xl font-semibold",
                                children: "Projects",
                            }),
                            p.jsx("p", {
                                className: "mt-1 text-sm text-[#6d5868]",
                                children:
                                    "Selected work with product context and stack notes.",
                            }),
                        ],
                    }),
                    p.jsxs("div", {
                        className:
                            "rounded-full bg-[#300A24] px-3 py-1 text-xs font-semibold text-white",
                        children: [r.length, " items"],
                    }),
                ],
            }),
            p.jsx("div", {
                className: "grid gap-4 lg:grid-cols-2",
                children: r.map((s) =>
                    p.jsxs(
                        "article",
                        {
                            className:
                                "rounded-md border border-[#d8ccc4] bg-white p-4 shadow-sm",
                            children: [
                                p.jsxs("div", {
                                    className:
                                        "flex items-start justify-between gap-3",
                                    children: [
                                        p.jsxs("div", {
                                            className: "min-w-0",
                                            children: [
                                                p.jsx("h2", {
                                                    className:
                                                        "text-lg font-semibold text-[#300A24]",
                                                    children: s.title,
                                                }),
                                                p.jsx("p", {
                                                    className:
                                                        "mt-1 text-sm text-[#765f70]",
                                                    children: s.type,
                                                }),
                                            ],
                                        }),
                                        p.jsx("span", {
                                            className:
                                                "shrink-0 rounded-full bg-[#e7f4ef] px-3 py-1 text-xs font-semibold text-[#0b7551]",
                                            children: s.status,
                                        }),
                                    ],
                                }),
                                p.jsx("p", {
                                    className:
                                        "mt-4 text-sm leading-6 text-[#433640]",
                                    children: s.description,
                                }),
                                p.jsx("p", {
                                    className:
                                        "mt-3 text-sm font-medium text-[#C33F13]",
                                    children: s.impact,
                                }),
                                p.jsx("div", {
                                    className: "mt-4 flex flex-wrap gap-2",
                                    children: s.techStack.map((a) =>
                                        p.jsx(
                                            "span",
                                            {
                                                className:
                                                    "rounded-full bg-[#efe8e4] px-3 py-1 text-xs text-[#4d3b46]",
                                                children: a,
                                            },
                                            a,
                                        ),
                                    ),
                                }),
                                p.jsxs("div", {
                                    className: "mt-5 flex gap-2",
                                    children: [
                                        p.jsxs("a", {
                                            href: s.github,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className:
                                                "inline-flex h-9 items-center gap-2 rounded-md border border-[#d7cbc3] px-3 text-sm font-medium transition hover:border-[#E95420] hover:text-[#C33F13]",
                                            children: [
                                                p.jsx(gu, { size: 15 }),
                                                "Repo",
                                            ],
                                        }),
                                        p.jsxs("a", {
                                            href: s.demo,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className:
                                                "inline-flex h-9 items-center gap-2 rounded-md bg-[#E95420] px-3 text-sm font-medium text-white transition hover:bg-[#d84a19]",
                                            children: [
                                                p.jsx(fo, { size: 15 }),
                                                "Demo",
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        },
                        s.slug || s.id || s.title,
                    ),
                ),
            }),
        ],
    });
}
const uh = "ubuntu-profile-avatar-url",
    Xv = "#330d26",
    qv = [
        { id: "profile", label: "Profile", icon: am },
        { id: "contact", label: "Contact", icon: ho },
        { id: "social", label: "Social Links", icon: Zl },
        { id: "theme", label: "Theme", icon: vu },
    ];
function Qv({ portfolio: n, wallpaperColor: r, onWallpaperColorChange: s }) {
    const [a, l] = I.useState("profile"),
        [d, c] = I.useState(""),
        [h, m] = I.useState(""),
        [g, x] = I.useState({
            name: n.profile.name,
            email: n.profile.email,
            subject: "Ubuntu portfolio inquiry",
            message: "",
        }),
        [v, w] = I.useState({ status: "idle", feedback: "" });
    I.useEffect(() => {
        const C =
            window.localStorage.getItem(uh) ||
            n.profile.avatar ||
            n.profile.avatarUrl ||
            "";
        c(C);
    }, [n.profile.avatar, n.profile.avatarUrl]);
    const j = I.useMemo(() => {
        const C = n.profile.socials || [],
            M = C.find((L) => L.label === "GitHub"),
            V = C.find((L) => L.label === "LinkedIn"),
            O = C.find((L) => L.label === "Twitter");
        return [
            {
                label: "GitHub",
                value: (M == null ? void 0 : M.value) || "github.com/marvelade",
                href:
                    (M == null ? void 0 : M.href) ||
                    "https://github.com/marvelade",
                icon: Zl,
            },
            {
                label: "LinkedIn",
                value:
                    (V == null ? void 0 : V.value) ||
                    "linkedin.com/in/marvelade",
                href: (V == null ? void 0 : V.href) || "https://linkedin.com",
                icon: dv,
            },
            {
                label: "Twitter",
                value: (O == null ? void 0 : O.value) || "x.com/marvelade",
                href:
                    (O == null ? void 0 : O.href) || "https://x.com/marvelade",
                icon: wv,
            },
        ];
    }, [n.profile.socials]);
    function z() {
        (window.localStorage.setItem(uh, d.trim()),
            m("Avatar URL saved locally."),
            window.setTimeout(() => m(""), 2500));
    }
    async function T(C) {
        (C.preventDefault(), w({ status: "sending", feedback: "" }));
        try {
            const M = await um({ ...g, source: "ubuntu-settings" });
            if (M.ok) {
                (w({ status: "sent", feedback: M.message || "Message saved." }),
                    x({
                        name: n.profile.name,
                        email: n.profile.email,
                        subject: "Ubuntu portfolio inquiry",
                        message: "",
                    }));
                return;
            }
            w({
                status: "error",
                feedback: M.message || "Message could not be sent.",
            });
        } catch (M) {
            w({
                status: "error",
                feedback: M.message || "Message could not be sent.",
            });
        }
    }
    function b(C, M) {
        x((V) => ({ ...V, [C]: M }));
    }
    const N = r || Xv;
    return p.jsx("div", {
        className: "h-full overflow-hidden bg-[#ece7e3] text-[#241922]",
        children: p.jsxs("div", {
            className: "flex h-full",
            children: [
                p.jsxs("aside", {
                    className:
                        "w-60 shrink-0 border-r border-black/10 bg-[#f7f3f0] p-4",
                    children: [
                        p.jsxs("div", {
                            className:
                                "flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-sm",
                            children: [
                                p.jsx("div", {
                                    className:
                                        "grid h-11 w-11 place-items-center rounded-xl bg-[#330d26] text-white",
                                    children: p.jsx(yu, { size: 20 }),
                                }),
                                p.jsxs("div", {
                                    children: [
                                        p.jsx("h1", {
                                            className:
                                                "text-lg font-semibold leading-tight",
                                            children: "Settings",
                                        }),
                                        p.jsx("p", {
                                            className:
                                                "text-xs uppercase tracking-[0.22em] text-[#8b7481]",
                                            children: "Ubuntu panel",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        p.jsx("nav", {
                            className: "mt-4 space-y-1",
                            children: qv.map((C) => {
                                const M = C.icon,
                                    V = a === C.id;
                                return p.jsxs(
                                    "button",
                                    {
                                        type: "button",
                                        onClick: () => l(C.id),
                                        className: `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${V ? "bg-[#330d26] text-white shadow-sm" : "text-[#4a3945] hover:bg-white hover:text-[#330d26]"}`,
                                        children: [
                                            p.jsx(M, {
                                                size: 16,
                                                className: V
                                                    ? "text-white"
                                                    : "text-[#7e6874]",
                                            }),
                                            p.jsx("span", {
                                                children: C.label,
                                            }),
                                        ],
                                    },
                                    C.id,
                                );
                            }),
                        }),
                    ],
                }),
                p.jsxs("main", {
                    className: "min-w-0 flex-1 overflow-auto p-5",
                    children: [
                        a === "profile" &&
                            p.jsxs("section", {
                                className:
                                    "grid gap-5 lg:grid-cols-[0.95fr_1.05fr]",
                                children: [
                                    p.jsxs("div", {
                                        className:
                                            "rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm",
                                        children: [
                                            p.jsxs("div", {
                                                className:
                                                    "flex items-center gap-3",
                                                children: [
                                                    p.jsx("div", {
                                                        className:
                                                            "grid h-12 w-12 place-items-center rounded-2xl bg-[#330d26] text-white",
                                                        children: p.jsx(am, {
                                                            size: 20,
                                                        }),
                                                    }),
                                                    p.jsxs("div", {
                                                        children: [
                                                            p.jsx("h2", {
                                                                className:
                                                                    "text-xl font-semibold",
                                                                children:
                                                                    "Profile",
                                                            }),
                                                            p.jsx("p", {
                                                                className:
                                                                    "text-sm text-[#7a6772]",
                                                                children:
                                                                    "Name, role, and avatar URL",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            p.jsxs("div", {
                                                className:
                                                    "mt-5 flex items-start gap-4 rounded-3xl border border-[#e4d8d2] bg-[#faf7f5] p-4",
                                                children: [
                                                    d
                                                        ? p.jsx("img", {
                                                              src: d,
                                                              alt: n.profile
                                                                  .name,
                                                              className:
                                                                  "h-20 w-20 rounded-2xl object-cover",
                                                              onError: () =>
                                                                  c(""),
                                                          })
                                                        : p.jsx("div", {
                                                              className:
                                                                  "grid h-20 w-20 place-items-center rounded-2xl bg-[#330d26] text-2xl font-semibold text-white",
                                                              children:
                                                                  n.profile
                                                                      .avatarInitials,
                                                          }),
                                                    p.jsxs("div", {
                                                        className:
                                                            "min-w-0 flex-1",
                                                        children: [
                                                            p.jsx("p", {
                                                                className:
                                                                    "text-lg font-semibold text-[#2f2230]",
                                                                children:
                                                                    n.profile
                                                                        .name,
                                                            }),
                                                            p.jsx("p", {
                                                                className:
                                                                    "text-sm text-[#6f5a66]",
                                                                children:
                                                                    n.profile
                                                                        .title,
                                                            }),
                                                            p.jsx("p", {
                                                                className:
                                                                    "mt-1 text-sm text-[#84717c]",
                                                                children:
                                                                    n.profile
                                                                        .location,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            p.jsxs("label", {
                                                className:
                                                    "mt-5 block text-sm font-semibold text-[#2f2230]",
                                                children: [
                                                    "Avatar URL",
                                                    p.jsx("input", {
                                                        value: d,
                                                        onChange: (C) =>
                                                            c(C.target.value),
                                                        placeholder:
                                                            "https://...",
                                                        className:
                                                            "mt-2 h-11 w-full rounded-xl border border-[#d9ccc6] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20",
                                                    }),
                                                ],
                                            }),
                                            p.jsxs("div", {
                                                className:
                                                    "mt-4 flex flex-wrap items-center gap-3",
                                                children: [
                                                    p.jsx("button", {
                                                        type: "button",
                                                        onClick: z,
                                                        className:
                                                            "inline-flex h-10 items-center rounded-xl bg-[#E95420] px-4 text-sm font-semibold text-white transition hover:bg-[#d84a19]",
                                                        children:
                                                            "Save Avatar URL",
                                                    }),
                                                    h &&
                                                        p.jsx("p", {
                                                            className:
                                                                "text-sm text-[#0b7551]",
                                                            children: h,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    p.jsxs("div", {
                                        className:
                                            "rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm",
                                        children: [
                                            p.jsx("h3", {
                                                className:
                                                    "text-lg font-semibold",
                                                children: "About",
                                            }),
                                            p.jsx("p", {
                                                className:
                                                    "mt-4 max-w-2xl text-sm leading-7 text-[#433440]",
                                                children: n.profile.bio,
                                            }),
                                            p.jsx("p", {
                                                className:
                                                    "mt-3 max-w-2xl text-sm leading-7 text-[#66545f]",
                                                children: n.profile.summary,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        a === "contact" &&
                            p.jsxs("section", {
                                className:
                                    "grid gap-5 lg:grid-cols-[0.9fr_1.1fr]",
                                children: [
                                    p.jsxs("aside", {
                                        className:
                                            "rounded-[1.5rem] border border-[#d7cbc6] bg-[#330d26] p-5 text-white shadow-sm",
                                        children: [
                                            p.jsx("div", {
                                                className:
                                                    "grid h-12 w-12 place-items-center rounded-2xl bg-white/10",
                                                children: p.jsx(ho, {
                                                    size: 21,
                                                }),
                                            }),
                                            p.jsx("h2", {
                                                className:
                                                    "mt-4 text-2xl font-semibold",
                                                children: "Contact",
                                            }),
                                            p.jsx("p", {
                                                className:
                                                    "mt-3 text-sm leading-6 text-white/78",
                                                children:
                                                    "Send a message from the desktop and store it in the API database.",
                                            }),
                                            p.jsx("a", {
                                                href: `mailto:${n.profile.email}`,
                                                className:
                                                    "mt-5 inline-flex h-10 items-center rounded-xl bg-white px-4 text-sm font-semibold text-[#330d26] transition hover:bg-[#f0e8e2]",
                                                children: n.profile.email,
                                            }),
                                        ],
                                    }),
                                    p.jsxs("form", {
                                        onSubmit: T,
                                        className:
                                            "rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm",
                                        children: [
                                            p.jsxs("div", {
                                                className:
                                                    "grid gap-4 md:grid-cols-2",
                                                children: [
                                                    p.jsxs("label", {
                                                        className:
                                                            "block text-sm font-semibold text-[#2f2230]",
                                                        children: [
                                                            "Name",
                                                            p.jsx("input", {
                                                                value: g.name,
                                                                onChange: (C) =>
                                                                    b(
                                                                        "name",
                                                                        C.target
                                                                            .value,
                                                                    ),
                                                                required: !0,
                                                                className:
                                                                    "mt-2 h-11 w-full rounded-xl border border-[#d9ccc6] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20",
                                                            }),
                                                        ],
                                                    }),
                                                    p.jsxs("label", {
                                                        className:
                                                            "block text-sm font-semibold text-[#2f2230]",
                                                        children: [
                                                            "Email",
                                                            p.jsx("input", {
                                                                type: "email",
                                                                value: g.email,
                                                                onChange: (C) =>
                                                                    b(
                                                                        "email",
                                                                        C.target
                                                                            .value,
                                                                    ),
                                                                required: !0,
                                                                className:
                                                                    "mt-2 h-11 w-full rounded-xl border border-[#d9ccc6] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            p.jsxs("label", {
                                                className:
                                                    "mt-4 block text-sm font-semibold text-[#2f2230]",
                                                children: [
                                                    "Subject",
                                                    p.jsx("input", {
                                                        value: g.subject,
                                                        onChange: (C) =>
                                                            b(
                                                                "subject",
                                                                C.target.value,
                                                            ),
                                                        className:
                                                            "mt-2 h-11 w-full rounded-xl border border-[#d9ccc6] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20",
                                                    }),
                                                ],
                                            }),
                                            p.jsxs("label", {
                                                className:
                                                    "mt-4 block text-sm font-semibold text-[#2f2230]",
                                                children: [
                                                    "Message",
                                                    p.jsx("textarea", {
                                                        value: g.message,
                                                        onChange: (C) =>
                                                            b(
                                                                "message",
                                                                C.target.value,
                                                            ),
                                                        required: !0,
                                                        rows: 7,
                                                        className:
                                                            "mt-2 w-full resize-none rounded-xl border border-[#d9ccc6] bg-white px-3 py-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20",
                                                    }),
                                                ],
                                            }),
                                            p.jsxs("div", {
                                                className:
                                                    "mt-4 flex flex-wrap items-center gap-3",
                                                children: [
                                                    p.jsxs("button", {
                                                        type: "submit",
                                                        disabled:
                                                            v.status ===
                                                            "sending",
                                                        className:
                                                            "inline-flex h-11 items-center gap-2 rounded-xl bg-[#E95420] px-4 text-sm font-semibold text-white transition hover:bg-[#d84a19] disabled:cursor-wait disabled:bg-[#b96a4f]",
                                                        children: [
                                                            p.jsx(ho, {
                                                                size: 16,
                                                            }),
                                                            v.status ===
                                                            "sending"
                                                                ? "Sending"
                                                                : "Send Message",
                                                        ],
                                                    }),
                                                    v.feedback &&
                                                        p.jsx("p", {
                                                            className: `text-sm ${v.status === "error" ? "text-red-700" : "text-[#0b7551]"}`,
                                                            children:
                                                                v.feedback,
                                                        }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        a === "social" &&
                            p.jsxs("section", {
                                className:
                                    "rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm",
                                children: [
                                    p.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            p.jsx("div", {
                                                className:
                                                    "grid h-12 w-12 place-items-center rounded-2xl bg-[#330d26] text-white",
                                                children: p.jsx(Zl, {
                                                    size: 20,
                                                }),
                                            }),
                                            p.jsxs("div", {
                                                children: [
                                                    p.jsx("h2", {
                                                        className:
                                                            "text-xl font-semibold",
                                                        children:
                                                            "Social Links",
                                                    }),
                                                    p.jsx("p", {
                                                        className:
                                                            "text-sm text-[#7a6772]",
                                                        children:
                                                            "Clickable rows with external links",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    p.jsx("div", {
                                        className:
                                            "mt-5 grid gap-3 md:grid-cols-3",
                                        children: j.map((C) => {
                                            const M = C.icon;
                                            return p.jsx(
                                                "a",
                                                {
                                                    href: C.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className:
                                                        "flex items-center justify-between rounded-2xl border border-[#e4d8d2] bg-[#faf7f5] px-4 py-4 transition hover:border-[#E95420] hover:text-[#C33F13]",
                                                    children: p.jsxs("span", {
                                                        className:
                                                            "flex items-center gap-3",
                                                        children: [
                                                            p.jsx("span", {
                                                                className:
                                                                    "grid h-10 w-10 place-items-center rounded-xl bg-[#330d26] text-white",
                                                                children: p.jsx(
                                                                    M,
                                                                    {
                                                                        size: 16,
                                                                    },
                                                                ),
                                                            }),
                                                            p.jsxs("span", {
                                                                children: [
                                                                    p.jsx(
                                                                        "span",
                                                                        {
                                                                            className:
                                                                                "block text-sm font-semibold text-[#2f2230]",
                                                                            children:
                                                                                C.label,
                                                                        },
                                                                    ),
                                                                    p.jsx(
                                                                        "span",
                                                                        {
                                                                            className:
                                                                                "block text-xs text-[#84717c]",
                                                                            children:
                                                                                C.value,
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                C.label,
                                            );
                                        }),
                                    }),
                                ],
                            }),
                        a === "theme" &&
                            p.jsxs("section", {
                                className:
                                    "grid gap-5 lg:grid-cols-[0.95fr_1.05fr]",
                                children: [
                                    p.jsxs("div", {
                                        className:
                                            "rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm",
                                        children: [
                                            p.jsxs("div", {
                                                className:
                                                    "flex items-center gap-3",
                                                children: [
                                                    p.jsx("div", {
                                                        className:
                                                            "grid h-12 w-12 place-items-center rounded-2xl bg-[#330d26] text-white",
                                                        children: p.jsx(vu, {
                                                            size: 20,
                                                        }),
                                                    }),
                                                    p.jsxs("div", {
                                                        children: [
                                                            p.jsx("h2", {
                                                                className:
                                                                    "text-xl font-semibold",
                                                                children:
                                                                    "Theme",
                                                            }),
                                                            p.jsx("p", {
                                                                className:
                                                                    "text-sm text-[#7a6772]",
                                                                children:
                                                                    "Wallpaper color updates live",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            p.jsxs("label", {
                                                className:
                                                    "mt-5 block text-sm font-semibold text-[#2f2230]",
                                                children: [
                                                    "Wallpaper color",
                                                    p.jsxs("div", {
                                                        className:
                                                            "mt-2 flex items-center gap-3 rounded-2xl border border-[#d9ccc6] bg-[#faf7f5] p-3",
                                                        children: [
                                                            p.jsx("input", {
                                                                type: "color",
                                                                value: N,
                                                                onChange: (C) =>
                                                                    s(
                                                                        C.target
                                                                            .value,
                                                                    ),
                                                                className:
                                                                    "h-12 w-14 rounded-lg border border-black/10 bg-transparent p-1",
                                                            }),
                                                            p.jsxs("div", {
                                                                className:
                                                                    "min-w-0 flex-1",
                                                                children: [
                                                                    p.jsx("p", {
                                                                        className:
                                                                            "text-sm font-semibold text-[#2f2230]",
                                                                        children:
                                                                            "Desktop background",
                                                                    }),
                                                                    p.jsx("p", {
                                                                        className:
                                                                            "text-xs text-[#84717c]",
                                                                        children:
                                                                            "Saved in localStorage and applied immediately.",
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            p.jsx("div", {
                                                className:
                                                    "mt-4 flex flex-wrap gap-2",
                                                children: [
                                                    "#330d26",
                                                    "#2c001e",
                                                    "#4a1d3a",
                                                    "#5b2d47",
                                                    "#1f1c2c",
                                                ].map((C) =>
                                                    p.jsx(
                                                        "button",
                                                        {
                                                            type: "button",
                                                            onClick: () => s(C),
                                                            className:
                                                                "h-11 w-11 rounded-xl border border-black/10 shadow-sm",
                                                            style: {
                                                                backgroundColor:
                                                                    C,
                                                            },
                                                            "aria-label": `Set wallpaper color to ${C}`,
                                                        },
                                                        C,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                    p.jsxs("div", {
                                        className:
                                            "rounded-[1.5rem] border border-[#d7cbc6] p-5 shadow-sm",
                                        style: {
                                            background: `linear-gradient(135deg, ${N}, ${N}cc 60%, #1a1018)`,
                                            color: "white",
                                        },
                                        children: [
                                            p.jsx("h3", {
                                                className:
                                                    "text-lg font-semibold",
                                                children: "Preview",
                                            }),
                                            p.jsx("p", {
                                                className:
                                                    "mt-3 text-sm leading-7 text-white/82",
                                                children:
                                                    "The desktop wallpaper uses the selected color instantly and keeps the setting after refresh.",
                                            }),
                                            p.jsx("div", {
                                                className:
                                                    "mt-5 rounded-[1.25rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm",
                                                children: p.jsxs("div", {
                                                    className:
                                                        "flex items-center justify-between text-sm",
                                                    children: [
                                                        p.jsx("span", {
                                                            children:
                                                                "Wallpaper",
                                                        }),
                                                        p.jsx("span", {
                                                            className:
                                                                "font-mono",
                                                            children:
                                                                N.toUpperCase(),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        }),
    });
}
const Ml = "Welcome to Ubuntu 22.04 LTS...",
    ch = "marvelade@ubuntu-portfolio:~$";
function dh(n, r, s) {
    var a;
    return (
        ((a = n.socials.find((l) => l.label === r)) == null
            ? void 0
            : a.value) || s
    );
}
function Zv({ portfolio: n }) {
    const [r, s] = I.useState([]),
        [a, l] = I.useState(""),
        [d, c] = I.useState(0),
        [h, m] = I.useState(!1),
        [g, x] = I.useState([]),
        [v, w] = I.useState(null),
        [j, z] = I.useState(!1),
        T = I.useRef(null),
        b = I.useRef(!1),
        N = I.useMemo(
            () => ({
                whoami: [
                    `${n.profile.name} - ${n.profile.title}`,
                    n.profile.bio,
                ],
                skills: n.skills.map(
                    (L) => `${L.group}: ${L.items.join(", ")}`,
                ),
                contact: [
                    `Email: ${n.profile.email}`,
                    `GitHub: ${dh(n.profile, "GitHub", "github.com/marvelade")}`,
                    `LinkedIn: ${dh(n.profile, "LinkedIn", "linkedin.com/in/marvelade")}`,
                ],
                ls: ["about/", "projects/", "skills/", "contact/"],
                help: [
                    "whoami      show name and one-line bio",
                    "skills      list tech stack",
                    "projects    fetch projects from /api/projects",
                    "contact     show email, GitHub, and LinkedIn",
                    "ls          list terminal directories",
                    "clear       clear terminal",
                    "help        show available commands",
                ],
            }),
            [n],
        );
    (I.useEffect(() => {
        const L = window.setInterval(() => {
            c((E) =>
                E >= Ml.length ? (window.clearInterval(L), m(!0), E) : E + 1,
            );
        }, 35);
        return () => window.clearInterval(L);
    }, []),
        I.useEffect(() => {
            h &&
                !b.current &&
                ((b.current = !0),
                s([
                    { type: "boot", text: Ml },
                    {
                        type: "boot",
                        text: 'Type "help" to list available commands.',
                    },
                ]));
        }, [h]));
    function C(L, E = "output") {
        s((R) => [...R, ...L.map((G) => ({ type: E, text: G }))]);
    }
    async function M(L) {
        const E = L.trim(),
            R = E.toLowerCase();
        if (!R) return;
        if ((x((te) => [...te, E]), w(null), R === "clear")) {
            s([]);
            return;
        }
        if ((C([`${ch} ${E}`], "command"), R === "projects")) {
            (z(!0), C(["Fetching projects from /api/projects..."]));
            try {
                const te = await jv(),
                    se = Array.isArray(te.projects) ? te.projects : [],
                    xe = se.length
                        ? se.map((le) => {
                              const ye = le.category || le.type || "Project",
                                  ke = le.status || "Unknown",
                                  fe =
                                      Array.isArray(le.stack) && le.stack.length
                                          ? le.stack.join(", ")
                                          : "No stack listed";
                              return `${le.title} — ${ye} • ${ke} • ${fe}`;
                          })
                        : ["No projects found."];
                C(xe);
            } catch {
                C(["Unable to load projects right now."]);
            } finally {
                z(!1);
            }
            return;
        }
        const G = N[R];
        if (G) {
            C(G);
            return;
        }
        C([`${E}: command not found`]);
    }
    function V(L) {
        (L.preventDefault(), M(a), l(""));
    }
    function O(L) {
        if (L.key === "ArrowUp") {
            (L.preventDefault(),
                w((E) => {
                    if (!g.length) return null;
                    const R = E === null ? g.length - 1 : Math.max(0, E - 1);
                    return (l(g[R] || ""), R);
                }));
            return;
        }
        L.key === "ArrowDown" &&
            (L.preventDefault(),
            w((E) => {
                if (!g.length || E === null) return (l(""), null);
                const R = E + 1;
                return R >= g.length ? (l(""), null) : (l(g[R]), R);
            }));
    }
    return p.jsx("div", {
        className:
            "h-full bg-[#330d26] p-4 font-mono text-[13px] leading-6 text-[#d5f6d4] transition-all duration-200",
        onClick: () => {
            var L;
            return (L = T.current) == null ? void 0 : L.focus();
        },
        children: p.jsx("div", {
            className:
                "min-h-full rounded-md border border-white/10 bg-[#330d26] p-4 shadow-inner transition-all duration-200",
            children: h
                ? p.jsxs(p.Fragment, {
                      children: [
                          r.map((L, E) =>
                              p.jsx(
                                  "div",
                                  {
                                      className:
                                          L.type === "command"
                                              ? "whitespace-pre-wrap text-[#8ff0a4]"
                                              : "whitespace-pre-wrap text-white/85",
                                      children: L.text,
                                  },
                                  `${L.type}-${L.text}-${E}`,
                              ),
                          ),
                          p.jsxs("form", {
                              onSubmit: V,
                              className: "mt-2 flex items-start gap-2",
                              children: [
                                  p.jsx("span", {
                                      className:
                                          "whitespace-nowrap text-[#8ff0a4]",
                                      children: ch,
                                  }),
                                  p.jsx("input", {
                                      ref: T,
                                      value: a,
                                      onChange: (L) => {
                                          (l(L.target.value), w(null));
                                      },
                                      onKeyDown: O,
                                      className:
                                          "h-6 min-w-0 flex-1 bg-transparent text-white outline-none caret-[#8ff0a4] transition-all duration-200",
                                      "aria-label": "Terminal command",
                                      autoFocus: !0,
                                      autoComplete: "off",
                                      autoCapitalize: "off",
                                      spellCheck: "false",
                                      disabled: j,
                                  }),
                              ],
                          }),
                      ],
                  })
                : p.jsxs("div", {
                      className: "whitespace-pre-wrap text-white/85",
                      children: [
                          Ml.slice(0, d),
                          p.jsx("span", {
                              className:
                                  "ml-1 inline-block w-[0.65ch] translate-y-[-1px] border-b-2 border-[#8ff0a4] align-middle motion-safe:animate-pulse",
                              "aria-hidden": "true",
                          }),
                      ],
                  }),
        }),
    });
}
function hm() {
    const [n, r] = I.useState(() => new Date());
    return (
        I.useEffect(() => {
            const s = window.setInterval(() => r(new Date()), 1e3);
            return () => window.clearInterval(s);
        }, []),
        I.useMemo(() => {
            const s = new Intl.DateTimeFormat(void 0, {
                    hour: "2-digit",
                    minute: "2-digit",
                }).format(n),
                a = new Intl.DateTimeFormat(void 0, {
                    second: "2-digit",
                }).format(n),
                l = new Intl.DateTimeFormat(void 0, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                }).format(n),
                d = new Intl.DateTimeFormat(void 0, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                }).format(n);
            return { now: n, time: s, seconds: a, date: l, compact: d };
        }, [n])
    );
}
const fh = (n) => {
        let r;
        const s = new Set(),
            a = (g, x) => {
                const v = typeof g == "function" ? g(r) : g;
                if (!Object.is(v, r)) {
                    const w = r;
                    ((r =
                        (x ?? (typeof v != "object" || v === null))
                            ? v
                            : Object.assign({}, r, v)),
                        s.forEach((j) => j(r, w)));
                }
            },
            l = () => r,
            h = {
                setState: a,
                getState: l,
                getInitialState: () => m,
                subscribe: (g) => (s.add(g), () => s.delete(g)),
            },
            m = (r = n(a, l, h));
        return h;
    },
    Jv = (n) => (n ? fh(n) : fh),
    ex = (n) => n;
function tx(n, r = ex) {
    const s = wi.useSyncExternalStore(
        n.subscribe,
        wi.useCallback(() => r(n.getState()), [n, r]),
        wi.useCallback(() => r(n.getInitialState()), [n, r]),
    );
    return (wi.useDebugValue(s), s);
}
const hh = (n) => {
        const r = Jv(n),
            s = (a) => tx(r, a);
        return (Object.assign(s, r), s);
    },
    nx = (n) => (n ? hh(n) : hh),
    rx = 70,
    mt = { left: 24, top: 48, right: 24, bottom: 104 };
function ph(n, r, s) {
    return Math.min(Math.max(n, r), s);
}
function Dl(n, r = 0) {
    const s = n.width || 760,
        a = n.height || 520,
        l = typeof window < "u" ? window.innerWidth : 1440,
        d = typeof window < "u" ? window.innerHeight : 900,
        c = Math.max(320, l - mt.left - mt.right),
        h = Math.max(280, d - mt.top - mt.bottom),
        m = Math.max(mt.left, l - s - mt.right),
        g = Math.max(mt.top, d - a - mt.bottom),
        x = (r % 5) * 28,
        v = mt.left + Math.round((c - s) / 2) + x,
        w = mt.top + Math.round((h - a) / 2) + x;
    return {
        position: { x: ph(v, mt.left, m), y: ph(w, mt.top, g) },
        size: { width: s, height: a },
    };
}
function mh() {
    return {
        position: { x: mt.left, y: 28 },
        size: { width: "calc(100vw - 84px)", height: "calc(100vh - 28px)" },
    };
}
const ut = nx((n, r) => ({
    windows: [],
    nextZIndex: rx,
    openWindow(s) {
        const a = r().nextZIndex + 1;
        n((l) => {
            if (l.windows.find((c) => c.id === s.id)) {
                const c = Dl(s, l.windows.length);
                return {
                    nextZIndex: a,
                    windows: l.windows.map((h) =>
                        h.id === s.id
                            ? {
                                  ...h,
                                  minimized: !1,
                                  zIndex: a,
                                  position: c.position,
                                  size: c.size,
                              }
                            : h,
                    ),
                };
            }
            return {
                nextZIndex: a,
                windows: [
                    ...l.windows,
                    {
                        id: s.id,
                        title: s.title,
                        minimized: !1,
                        maximized: !1,
                        zIndex: a,
                        previousGeometry: null,
                        ...Dl(s, l.windows.length),
                    },
                ],
            };
        });
    },
    closeWindow(s) {
        n((a) => ({ windows: a.windows.filter((l) => l.id !== s) }));
    },
    minimizeWindow(s) {
        n((a) => ({
            windows: a.windows.map((l) =>
                l.id === s ? { ...l, minimized: !0 } : l,
            ),
        }));
    },
    restoreWindow(s) {
        const a = r().nextZIndex + 1;
        n((l) => ({
            nextZIndex: a,
            windows: l.windows.map((d) =>
                d.id === s
                    ? {
                          ...d,
                          minimized: !1,
                          zIndex: a,
                          ...Dl(
                              { width: d.size.width, height: d.size.height },
                              l.windows.length,
                          ),
                      }
                    : d,
            ),
        }));
    },
    bringToFront(s) {
        const a = r().windows.find((d) => d.id === s);
        if (!a || a.zIndex === r().nextZIndex) return;
        const l = r().nextZIndex + 1;
        n((d) => ({
            nextZIndex: l,
            windows: d.windows.map((c) =>
                c.id === s ? { ...c, zIndex: l } : c,
            ),
        }));
    },
    toggleMaximize(s) {
        n((a) => ({
            windows: a.windows.map((l) => {
                if (l.id !== s) return l;
                if (l.maximized) {
                    const d = l.previousGeometry || {
                        position: l.position,
                        size: l.size,
                    };
                    return {
                        ...l,
                        maximized: !1,
                        position: d.position,
                        size: d.size,
                        previousGeometry: null,
                    };
                }
                return {
                    ...l,
                    maximized: !0,
                    previousGeometry: { position: l.position, size: l.size },
                    position: mh().position,
                    size: mh().size,
                };
            }),
        }));
    },
    updateGeometry(s, a) {
        n((l) => ({
            windows: l.windows.map((d) =>
                d.id === s
                    ? {
                          ...d,
                          position: a.position || d.position,
                          size: a.size || d.size,
                      }
                    : d,
            ),
        }));
    },
}));
function ix(n) {
    return n.windows.filter((r) => !r.minimized);
}
function pm(n) {
    return ix(n).reduce((s, a) => (!s || a.zIndex > s.zIndex ? a : s), null);
}
function sx({
    activeAppName: n,
    appsById: r,
    onActivities: s,
    onOpenContact: a,
}) {
    const { compact: l } = hm(),
        [d, c] = I.useState(!1),
        h = ut((x) => x.windows),
        m = ut((x) => x.restoreWindow),
        g = I.useMemo(() => h.filter((x) => x.minimized), [h]);
    return p.jsxs("header", {
        "data-no-desktop-menu": "true",
        className:
            "fixed left-0 right-0 top-0 z-[110] flex h-7 items-center justify-between bg-black/88 px-3 text-[13px] text-white shadow-sm backdrop-blur transition-all duration-200",
        children: [
            p.jsxs("div", {
                className: "flex min-w-0 items-center gap-2",
                children: [
                    p.jsx("button", {
                        onClick: s,
                        className:
                            "h-6 rounded-sm px-2 font-medium transition-all duration-200 hover:bg-white/12 focus:bg-white/12 focus:outline-none",
                        children: "Activities",
                    }),
                    p.jsx("span", {
                        className:
                            "hidden max-w-[220px] truncate rounded-sm px-2 font-medium text-white/88 sm:block",
                        children: n || "Desktop",
                    }),
                    g.length > 0 &&
                        p.jsx("div", {
                            className:
                                "ml-1 flex items-center gap-1 border-l border-white/15 pl-2",
                            children: g.map((x) => {
                                const v = r[x.id];
                                if (!v) return null;
                                const w = v.icon;
                                return p.jsx(
                                    "button",
                                    {
                                        type: "button",
                                        onClick: () => m(x.id),
                                        className:
                                            "grid h-5 w-7 place-items-center rounded-sm bg-white/10 text-white/82 transition-all duration-200 hover:bg-white/18 focus:bg-white/18 focus:outline-none",
                                        "aria-label": `Restore ${x.title}`,
                                        title: `Restore ${x.title}`,
                                        children: p.jsx(w, { size: 13 }),
                                    },
                                    x.id,
                                );
                            }),
                        }),
                ],
            }),
            p.jsx("div", {
                className:
                    "pointer-events-none absolute left-1/2 -translate-x-1/2 font-medium",
                children: l,
            }),
            p.jsxs("div", {
                className: "relative",
                children: [
                    p.jsxs("button", {
                        type: "button",
                        onClick: () => c((x) => !x),
                        className:
                            "flex h-6 items-center gap-3 rounded-sm px-2 text-white/90 transition-all duration-200 hover:bg-white/12 focus:bg-white/12 focus:outline-none",
                        "aria-expanded": d,
                        "aria-label": "System menu",
                        title: "System menu",
                        children: [
                            p.jsx(bv, { size: 15 }),
                            p.jsx(Sv, { size: 15 }),
                            p.jsx(rv, { size: 16 }),
                            p.jsx(Ql, { size: 15 }),
                            p.jsx(iv, { size: 13 }),
                        ],
                    }),
                    d &&
                        p.jsxs("div", {
                            className:
                                "absolute right-0 top-8 w-64 overflow-hidden rounded-lg border border-white/10 bg-[#242024]/95 py-2 text-sm text-white shadow-ubuntu backdrop-blur-2xl transition-all duration-200",
                            children: [
                                p.jsxs("div", {
                                    className:
                                        "border-b border-white/10 px-4 pb-3 pt-2",
                                    children: [
                                        p.jsx("div", {
                                            className: "font-semibold",
                                            children: "marvelade",
                                        }),
                                        p.jsx("div", {
                                            className: "text-xs text-white/58",
                                            children:
                                                "Ubuntu Portfolio Session",
                                        }),
                                    ],
                                }),
                                p.jsxs("button", {
                                    type: "button",
                                    onClick: () => {
                                        (c(!1), a == null || a());
                                    },
                                    className:
                                        "flex h-10 w-full items-center justify-between px-4 text-left transition-all duration-200 hover:bg-white/10",
                                    children: [
                                        p.jsx("span", {
                                            children: "Settings / Contact",
                                        }),
                                        p.jsx(Ql, {
                                            size: 16,
                                            className: "text-white/65",
                                        }),
                                    ],
                                }),
                                p.jsxs("button", {
                                    type: "button",
                                    className:
                                        "flex h-10 w-full items-center justify-between px-4 text-left transition-all duration-200 hover:bg-white/10",
                                    children: [
                                        p.jsx("span", {
                                            children: "Power Off / Log Out",
                                        }),
                                        p.jsx(pv, {
                                            size: 16,
                                            className: "text-white/65",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
const Su = I.createContext({});
function bu(n) {
    const r = I.useRef(null);
    return (r.current === null && (r.current = n()), r.current);
}
const ko = I.createContext(null),
    ku = I.createContext({
        transformPagePoint: (n) => n,
        isStatic: !1,
        reducedMotion: "never",
    });
class ox extends I.Component {
    getSnapshotBeforeUpdate(r) {
        const s = this.props.childRef.current;
        if (s && r.isPresent && !this.props.isPresent) {
            const a = this.props.sizeRef.current;
            ((a.height = s.offsetHeight || 0),
                (a.width = s.offsetWidth || 0),
                (a.top = s.offsetTop),
                (a.left = s.offsetLeft));
        }
        return null;
    }
    componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}
function ax({ children: n, isPresent: r }) {
    const s = I.useId(),
        a = I.useRef(null),
        l = I.useRef({ width: 0, height: 0, top: 0, left: 0 }),
        { nonce: d } = I.useContext(ku);
    return (
        I.useInsertionEffect(() => {
            const { width: c, height: h, top: m, left: g } = l.current;
            if (r || !a.current || !c || !h) return;
            a.current.dataset.motionPopId = s;
            const x = document.createElement("style");
            return (
                d && (x.nonce = d),
                document.head.appendChild(x),
                x.sheet &&
                    x.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${h}px !important;
            top: ${m}px !important;
            left: ${g}px !important;
          }
        `),
                () => {
                    document.head.removeChild(x);
                }
            );
        }, [r]),
        p.jsx(ox, {
            isPresent: r,
            childRef: a,
            sizeRef: l,
            children: I.cloneElement(n, { ref: a }),
        })
    );
}
const lx = ({
    children: n,
    initial: r,
    isPresent: s,
    onExitComplete: a,
    custom: l,
    presenceAffectsLayout: d,
    mode: c,
}) => {
    const h = bu(ux),
        m = I.useId(),
        g = I.useCallback(
            (v) => {
                h.set(v, !0);
                for (const w of h.values()) if (!w) return;
                a && a();
            },
            [h, a],
        ),
        x = I.useMemo(
            () => ({
                id: m,
                initial: r,
                isPresent: s,
                custom: l,
                onExitComplete: g,
                register: (v) => (h.set(v, !1), () => h.delete(v)),
            }),
            d ? [Math.random(), g] : [s, g],
        );
    return (
        I.useMemo(() => {
            h.forEach((v, w) => h.set(w, !1));
        }, [s]),
        I.useEffect(() => {
            !s && !h.size && a && a();
        }, [s]),
        c === "popLayout" && (n = p.jsx(ax, { isPresent: s, children: n })),
        p.jsx(ko.Provider, { value: x, children: n })
    );
};
function ux() {
    return new Map();
}
function mm(n = !0) {
    const r = I.useContext(ko);
    if (r === null) return [!0, null];
    const { isPresent: s, onExitComplete: a, register: l } = r,
        d = I.useId();
    I.useEffect(() => {
        n && l(d);
    }, [n]);
    const c = I.useCallback(() => n && a && a(d), [d, a, n]);
    return !s && a ? [!1, c] : [!0];
}
const Qs = (n) => n.key || "";
function gh(n) {
    const r = [];
    return (
        I.Children.forEach(n, (s) => {
            I.isValidElement(s) && r.push(s);
        }),
        r
    );
}
const Cu = typeof window < "u",
    gm = Cu ? I.useLayoutEffect : I.useEffect,
    cx = ({
        children: n,
        custom: r,
        initial: s = !0,
        onExitComplete: a,
        presenceAffectsLayout: l = !0,
        mode: d = "sync",
        propagate: c = !1,
    }) => {
        const [h, m] = mm(c),
            g = I.useMemo(() => gh(n), [n]),
            x = c && !h ? [] : g.map(Qs),
            v = I.useRef(!0),
            w = I.useRef(g),
            j = bu(() => new Map()),
            [z, T] = I.useState(g),
            [b, N] = I.useState(g);
        gm(() => {
            ((v.current = !1), (w.current = g));
            for (let V = 0; V < b.length; V++) {
                const O = Qs(b[V]);
                x.includes(O) ? j.delete(O) : j.get(O) !== !0 && j.set(O, !1);
            }
        }, [b, x.length, x.join("-")]);
        const C = [];
        if (g !== z) {
            let V = [...g];
            for (let O = 0; O < b.length; O++) {
                const L = b[O],
                    E = Qs(L);
                x.includes(E) || (V.splice(O, 0, L), C.push(L));
            }
            (d === "wait" && C.length && (V = C), N(gh(V)), T(g));
            return;
        }
        const { forceRender: M } = I.useContext(Su);
        return p.jsx(p.Fragment, {
            children: b.map((V) => {
                const O = Qs(V),
                    L = c && !h ? !1 : g === b || x.includes(O),
                    E = () => {
                        if (j.has(O)) j.set(O, !0);
                        else return;
                        let R = !0;
                        (j.forEach((G) => {
                            G || (R = !1);
                        }),
                            R &&
                                (M == null || M(),
                                N(w.current),
                                c && (m == null || m()),
                                a && a()));
                    };
                return p.jsx(
                    lx,
                    {
                        isPresent: L,
                        initial: !v.current || s ? void 0 : !1,
                        custom: L ? void 0 : r,
                        presenceAffectsLayout: l,
                        mode: d,
                        onExitComplete: L ? void 0 : E,
                        children: V,
                    },
                    O,
                );
            }),
        });
    },
    gt = (n) => n;
let ym = gt;
function ju(n) {
    let r;
    return () => (r === void 0 && (r = n()), r);
}
const kr = (n, r, s) => {
        const a = r - n;
        return a === 0 ? 1 : (s - n) / a;
    },
    Qt = (n) => n * 1e3,
    Zt = (n) => n / 1e3,
    dx = { useManualTiming: !1 };
function fx(n) {
    let r = new Set(),
        s = new Set(),
        a = !1,
        l = !1;
    const d = new WeakSet();
    let c = { delta: 0, timestamp: 0, isProcessing: !1 };
    function h(g) {
        (d.has(g) && (m.schedule(g), n()), g(c));
    }
    const m = {
        schedule: (g, x = !1, v = !1) => {
            const j = v && a ? r : s;
            return (x && d.add(g), j.has(g) || j.add(g), g);
        },
        cancel: (g) => {
            (s.delete(g), d.delete(g));
        },
        process: (g) => {
            if (((c = g), a)) {
                l = !0;
                return;
            }
            ((a = !0),
                ([r, s] = [s, r]),
                r.forEach(h),
                r.clear(),
                (a = !1),
                l && ((l = !1), m.process(g)));
        },
    };
    return m;
}
const Zs = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
    ],
    hx = 40;
function vm(n, r) {
    let s = !1,
        a = !0;
    const l = { delta: 0, timestamp: 0, isProcessing: !1 },
        d = () => (s = !0),
        c = Zs.reduce((N, C) => ((N[C] = fx(d)), N), {}),
        {
            read: h,
            resolveKeyframes: m,
            update: g,
            preRender: x,
            render: v,
            postRender: w,
        } = c,
        j = () => {
            const N = performance.now();
            ((s = !1),
                (l.delta = a
                    ? 1e3 / 60
                    : Math.max(Math.min(N - l.timestamp, hx), 1)),
                (l.timestamp = N),
                (l.isProcessing = !0),
                h.process(l),
                m.process(l),
                g.process(l),
                x.process(l),
                v.process(l),
                w.process(l),
                (l.isProcessing = !1),
                s && r && ((a = !1), n(j)));
        },
        z = () => {
            ((s = !0), (a = !0), l.isProcessing || n(j));
        };
    return {
        schedule: Zs.reduce((N, C) => {
            const M = c[C];
            return (
                (N[C] = (V, O = !1, L = !1) => (s || z(), M.schedule(V, O, L))),
                N
            );
        }, {}),
        cancel: (N) => {
            for (let C = 0; C < Zs.length; C++) c[Zs[C]].cancel(N);
        },
        state: l,
        steps: c,
    };
}
const {
        schedule: Te,
        cancel: kn,
        state: Ye,
        steps: Rl,
    } = vm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : gt, !0),
    xm = I.createContext({ strict: !1 }),
    yh = {
        animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
    },
    Cr = {};
for (const n in yh) Cr[n] = { isEnabled: (r) => yh[n].some((s) => !!r[s]) };
function px(n) {
    for (const r in n) Cr[r] = { ...Cr[r], ...n[r] };
}
const mx = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
]);
function po(n) {
    return (
        n.startsWith("while") ||
        (n.startsWith("drag") && n !== "draggable") ||
        n.startsWith("layout") ||
        n.startsWith("onTap") ||
        n.startsWith("onPan") ||
        n.startsWith("onLayout") ||
        mx.has(n)
    );
}
let wm = (n) => !po(n);
function gx(n) {
    n && (wm = (r) => (r.startsWith("on") ? !po(r) : n(r)));
}
try {
    gx(require("@emotion/is-prop-valid").default);
} catch {}
function yx(n, r, s) {
    const a = {};
    for (const l in n)
        (l === "values" && typeof n.values == "object") ||
            ((wm(l) ||
                (s === !0 && po(l)) ||
                (!r && !po(l)) ||
                (n.draggable && l.startsWith("onDrag"))) &&
                (a[l] = n[l]));
    return a;
}
function vx(n) {
    if (typeof Proxy > "u") return n;
    const r = new Map(),
        s = (...a) => n(...a);
    return new Proxy(s, {
        get: (a, l) =>
            l === "create" ? n : (r.has(l) || r.set(l, n(l)), r.get(l)),
    });
}
const Co = I.createContext({});
function Ni(n) {
    return typeof n == "string" || Array.isArray(n);
}
function jo(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function";
}
const Pu = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
    ],
    Tu = ["initial", ...Pu];
function Po(n) {
    return jo(n.animate) || Tu.some((r) => Ni(n[r]));
}
function Sm(n) {
    return !!(Po(n) || n.variants);
}
function xx(n, r) {
    if (Po(n)) {
        const { initial: s, animate: a } = n;
        return {
            initial: s === !1 || Ni(s) ? s : void 0,
            animate: Ni(a) ? a : void 0,
        };
    }
    return n.inherit !== !1 ? r : {};
}
function wx(n) {
    const { initial: r, animate: s } = xx(n, I.useContext(Co));
    return I.useMemo(() => ({ initial: r, animate: s }), [vh(r), vh(s)]);
}
function vh(n) {
    return Array.isArray(n) ? n.join(" ") : n;
}
const Sx = Symbol.for("motionComponentSymbol");
function yr(n) {
    return (
        n &&
        typeof n == "object" &&
        Object.prototype.hasOwnProperty.call(n, "current")
    );
}
function bx(n, r, s) {
    return I.useCallback(
        (a) => {
            (a && n.onMount && n.onMount(a),
                r && (a ? r.mount(a) : r.unmount()),
                s &&
                    (typeof s == "function" ? s(a) : yr(s) && (s.current = a)));
        },
        [r],
    );
}
const Eu = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    kx = "framerAppearId",
    bm = "data-" + Eu(kx),
    { schedule: Nu } = vm(queueMicrotask, !1),
    km = I.createContext({});
function Cx(n, r, s, a, l) {
    var d, c;
    const { visualElement: h } = I.useContext(Co),
        m = I.useContext(xm),
        g = I.useContext(ko),
        x = I.useContext(ku).reducedMotion,
        v = I.useRef(null);
    ((a = a || m.renderer),
        !v.current &&
            a &&
            (v.current = a(n, {
                visualState: r,
                parent: h,
                props: s,
                presenceContext: g,
                blockInitialAnimation: g ? g.initial === !1 : !1,
                reducedMotionConfig: x,
            })));
    const w = v.current,
        j = I.useContext(km);
    w &&
        !w.projection &&
        l &&
        (w.type === "html" || w.type === "svg") &&
        jx(v.current, s, l, j);
    const z = I.useRef(!1);
    I.useInsertionEffect(() => {
        w && z.current && w.update(s, g);
    });
    const T = s[bm],
        b = I.useRef(
            !!T &&
                !(
                    !(
                        (d = window.MotionHandoffIsComplete) === null ||
                        d === void 0
                    ) && d.call(window, T)
                ) &&
                ((c = window.MotionHasOptimisedAnimation) === null ||
                c === void 0
                    ? void 0
                    : c.call(window, T)),
        );
    return (
        gm(() => {
            w &&
                ((z.current = !0),
                (window.MotionIsMounted = !0),
                w.updateFeatures(),
                Nu.render(w.render),
                b.current &&
                    w.animationState &&
                    w.animationState.animateChanges());
        }),
        I.useEffect(() => {
            w &&
                (!b.current &&
                    w.animationState &&
                    w.animationState.animateChanges(),
                b.current &&
                    (queueMicrotask(() => {
                        var N;
                        (N = window.MotionHandoffMarkAsComplete) === null ||
                            N === void 0 ||
                            N.call(window, T);
                    }),
                    (b.current = !1)));
        }),
        w
    );
}
function jx(n, r, s, a) {
    const {
        layoutId: l,
        layout: d,
        drag: c,
        dragConstraints: h,
        layoutScroll: m,
        layoutRoot: g,
    } = r;
    ((n.projection = new s(
        n.latestValues,
        r["data-framer-portal-id"] ? void 0 : Cm(n.parent),
    )),
        n.projection.setOptions({
            layoutId: l,
            layout: d,
            alwaysMeasureLayout: !!c || (h && yr(h)),
            visualElement: n,
            animationType: typeof d == "string" ? d : "both",
            initialPromotionConfig: a,
            layoutScroll: m,
            layoutRoot: g,
        }));
}
function Cm(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : Cm(n.parent);
}
function Px({
    preloadedFeatures: n,
    createVisualElement: r,
    useRender: s,
    useVisualState: a,
    Component: l,
}) {
    var d, c;
    n && px(n);
    function h(g, x) {
        let v;
        const w = { ...I.useContext(ku), ...g, layoutId: Tx(g) },
            { isStatic: j } = w,
            z = wx(g),
            T = a(g, j);
        if (!j && Cu) {
            Ex();
            const b = Nx(w);
            ((v = b.MeasureLayout),
                (z.visualElement = Cx(l, T, w, r, b.ProjectionNode)));
        }
        return p.jsxs(Co.Provider, {
            value: z,
            children: [
                v && z.visualElement
                    ? p.jsx(v, { visualElement: z.visualElement, ...w })
                    : null,
                s(l, g, bx(T, z.visualElement, x), T, j, z.visualElement),
            ],
        });
    }
    h.displayName = `motion.${typeof l == "string" ? l : `create(${(c = (d = l.displayName) !== null && d !== void 0 ? d : l.name) !== null && c !== void 0 ? c : ""})`}`;
    const m = I.forwardRef(h);
    return ((m[Sx] = l), m);
}
function Tx({ layoutId: n }) {
    const r = I.useContext(Su).id;
    return r && n !== void 0 ? r + "-" + n : n;
}
function Ex(n, r) {
    I.useContext(xm).strict;
}
function Nx(n) {
    const { drag: r, layout: s } = Cr;
    if (!r && !s) return {};
    const a = { ...r, ...s };
    return {
        MeasureLayout:
            (r != null && r.isEnabled(n)) || (s != null && s.isEnabled(n))
                ? a.MeasureLayout
                : void 0,
        ProjectionNode: a.ProjectionNode,
    };
}
const Mx = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];
function Mu(n) {
    return typeof n != "string" || n.includes("-")
        ? !1
        : !!(Mx.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function xh(n) {
    const r = [{}, {}];
    return (
        n == null ||
            n.values.forEach((s, a) => {
                ((r[0][a] = s.get()), (r[1][a] = s.getVelocity()));
            }),
        r
    );
}
function Du(n, r, s, a) {
    if (typeof r == "function") {
        const [l, d] = xh(a);
        r = r(s !== void 0 ? s : n.custom, l, d);
    }
    if (
        (typeof r == "string" && (r = n.variants && n.variants[r]),
        typeof r == "function")
    ) {
        const [l, d] = xh(a);
        r = r(s !== void 0 ? s : n.custom, l, d);
    }
    return r;
}
const Jl = (n) => Array.isArray(n),
    Dx = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
    Rx = (n) => (Jl(n) ? n[n.length - 1] || 0 : n),
    et = (n) => !!(n && n.getVelocity);
function lo(n) {
    const r = et(n) ? n.get() : n;
    return Dx(r) ? r.toValue() : r;
}
function Ax(
    { scrapeMotionValuesFromProps: n, createRenderState: r, onUpdate: s },
    a,
    l,
    d,
) {
    const c = { latestValues: zx(a, l, d, n), renderState: r() };
    return (
        s &&
            ((c.onMount = (h) => s({ props: a, current: h, ...c })),
            (c.onUpdate = (h) => s(h))),
        c
    );
}
const jm = (n) => (r, s) => {
    const a = I.useContext(Co),
        l = I.useContext(ko),
        d = () => Ax(n, r, a, l);
    return s ? d() : bu(d);
};
function zx(n, r, s, a) {
    const l = {},
        d = a(n, {});
    for (const w in d) l[w] = lo(d[w]);
    let { initial: c, animate: h } = n;
    const m = Po(n),
        g = Sm(n);
    r &&
        g &&
        !m &&
        n.inherit !== !1 &&
        (c === void 0 && (c = r.initial), h === void 0 && (h = r.animate));
    let x = s ? s.initial === !1 : !1;
    x = x || c === !1;
    const v = x ? h : c;
    if (v && typeof v != "boolean" && !jo(v)) {
        const w = Array.isArray(v) ? v : [v];
        for (let j = 0; j < w.length; j++) {
            const z = Du(n, w[j]);
            if (z) {
                const { transitionEnd: T, transition: b, ...N } = z;
                for (const C in N) {
                    let M = N[C];
                    if (Array.isArray(M)) {
                        const V = x ? M.length - 1 : 0;
                        M = M[V];
                    }
                    M !== null && (l[C] = M);
                }
                for (const C in T) l[C] = T[C];
            }
        }
    }
    return l;
}
const Er = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
    ],
    $n = new Set(Er),
    Pm = (n) => (r) => typeof r == "string" && r.startsWith(n),
    Tm = Pm("--"),
    _x = Pm("var(--"),
    Ru = (n) => (_x(n) ? Lx.test(n.split("/*")[0].trim()) : !1),
    Lx =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Em = (n, r) => (r && typeof n == "number" ? r.transform(n) : n),
    Jt = (n, r, s) => (s > r ? r : s < n ? n : s),
    Nr = {
        test: (n) => typeof n == "number",
        parse: parseFloat,
        transform: (n) => n,
    },
    Mi = { ...Nr, transform: (n) => Jt(0, 1, n) },
    Js = { ...Nr, default: 1 },
    _i = (n) => ({
        test: (r) =>
            typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
        parse: parseFloat,
        transform: (r) => `${r}${n}`,
    }),
    bn = _i("deg"),
    Bt = _i("%"),
    oe = _i("px"),
    Vx = _i("vh"),
    Fx = _i("vw"),
    wh = {
        ...Bt,
        parse: (n) => Bt.parse(n) / 100,
        transform: (n) => Bt.transform(n * 100),
    },
    Ox = {
        borderWidth: oe,
        borderTopWidth: oe,
        borderRightWidth: oe,
        borderBottomWidth: oe,
        borderLeftWidth: oe,
        borderRadius: oe,
        radius: oe,
        borderTopLeftRadius: oe,
        borderTopRightRadius: oe,
        borderBottomRightRadius: oe,
        borderBottomLeftRadius: oe,
        width: oe,
        maxWidth: oe,
        height: oe,
        maxHeight: oe,
        top: oe,
        right: oe,
        bottom: oe,
        left: oe,
        padding: oe,
        paddingTop: oe,
        paddingRight: oe,
        paddingBottom: oe,
        paddingLeft: oe,
        margin: oe,
        marginTop: oe,
        marginRight: oe,
        marginBottom: oe,
        marginLeft: oe,
        backgroundPositionX: oe,
        backgroundPositionY: oe,
    },
    Ix = {
        rotate: bn,
        rotateX: bn,
        rotateY: bn,
        rotateZ: bn,
        scale: Js,
        scaleX: Js,
        scaleY: Js,
        scaleZ: Js,
        skew: bn,
        skewX: bn,
        skewY: bn,
        distance: oe,
        translateX: oe,
        translateY: oe,
        translateZ: oe,
        x: oe,
        y: oe,
        z: oe,
        perspective: oe,
        transformPerspective: oe,
        opacity: Mi,
        originX: wh,
        originY: wh,
        originZ: oe,
    },
    Sh = { ...Nr, transform: Math.round },
    Au = {
        ...Ox,
        ...Ix,
        zIndex: Sh,
        size: oe,
        fillOpacity: Mi,
        strokeOpacity: Mi,
        numOctaves: Sh,
    },
    Bx = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
    },
    Ux = Er.length;
function Wx(n, r, s) {
    let a = "",
        l = !0;
    for (let d = 0; d < Ux; d++) {
        const c = Er[d],
            h = n[c];
        if (h === void 0) continue;
        let m = !0;
        if (
            (typeof h == "number"
                ? (m = h === (c.startsWith("scale") ? 1 : 0))
                : (m = parseFloat(h) === 0),
            !m || s)
        ) {
            const g = Em(h, Au[c]);
            if (!m) {
                l = !1;
                const x = Bx[c] || c;
                a += `${x}(${g}) `;
            }
            s && (r[c] = g);
        }
    }
    return ((a = a.trim()), s ? (a = s(r, l ? "" : a)) : l && (a = "none"), a);
}
function zu(n, r, s) {
    const { style: a, vars: l, transformOrigin: d } = n;
    let c = !1,
        h = !1;
    for (const m in r) {
        const g = r[m];
        if ($n.has(m)) {
            c = !0;
            continue;
        } else if (Tm(m)) {
            l[m] = g;
            continue;
        } else {
            const x = Em(g, Au[m]);
            m.startsWith("origin") ? ((h = !0), (d[m] = x)) : (a[m] = x);
        }
    }
    if (
        (r.transform ||
            (c || s
                ? (a.transform = Wx(r, n.transform, s))
                : a.transform && (a.transform = "none")),
        h)
    ) {
        const { originX: m = "50%", originY: g = "50%", originZ: x = 0 } = d;
        a.transformOrigin = `${m} ${g} ${x}`;
    }
}
const $x = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    Hx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Kx(n, r, s = 1, a = 0, l = !0) {
    n.pathLength = 1;
    const d = l ? $x : Hx;
    n[d.offset] = oe.transform(-a);
    const c = oe.transform(r),
        h = oe.transform(s);
    n[d.array] = `${c} ${h}`;
}
function bh(n, r, s) {
    return typeof n == "string" ? n : oe.transform(r + s * n);
}
function Gx(n, r, s) {
    const a = bh(r, n.x, n.width),
        l = bh(s, n.y, n.height);
    return `${a} ${l}`;
}
function _u(
    n,
    {
        attrX: r,
        attrY: s,
        attrScale: a,
        originX: l,
        originY: d,
        pathLength: c,
        pathSpacing: h = 1,
        pathOffset: m = 0,
        ...g
    },
    x,
    v,
) {
    if ((zu(n, g, v), x)) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return;
    }
    ((n.attrs = n.style), (n.style = {}));
    const { attrs: w, style: j, dimensions: z } = n;
    (w.transform && (z && (j.transform = w.transform), delete w.transform),
        z &&
            (l !== void 0 || d !== void 0 || j.transform) &&
            (j.transformOrigin = Gx(
                z,
                l !== void 0 ? l : 0.5,
                d !== void 0 ? d : 0.5,
            )),
        r !== void 0 && (w.x = r),
        s !== void 0 && (w.y = s),
        a !== void 0 && (w.scale = a),
        c !== void 0 && Kx(w, c, h, m, !1));
}
const Lu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
    Nm = () => ({ ...Lu(), attrs: {} }),
    Vu = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function Mm(n, { style: r, vars: s }, a, l) {
    Object.assign(n.style, r, l && l.getProjectionStyles(a));
    for (const d in s) n.style.setProperty(d, s[d]);
}
const Dm = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);
function Rm(n, r, s, a) {
    Mm(n, r, void 0, a);
    for (const l in r.attrs) n.setAttribute(Dm.has(l) ? l : Eu(l), r.attrs[l]);
}
const mo = {};
function Yx(n) {
    Object.assign(mo, n);
}
function Am(n, { layout: r, layoutId: s }) {
    return (
        $n.has(n) ||
        n.startsWith("origin") ||
        ((r || s !== void 0) && (!!mo[n] || n === "opacity"))
    );
}
function Fu(n, r, s) {
    var a;
    const { style: l } = n,
        d = {};
    for (const c in l)
        (et(l[c]) ||
            (r.style && et(r.style[c])) ||
            Am(c, n) ||
            ((a = s == null ? void 0 : s.getValue(c)) === null || a === void 0
                ? void 0
                : a.liveStyle) !== void 0) &&
            (d[c] = l[c]);
    return d;
}
function zm(n, r, s) {
    const a = Fu(n, r, s);
    for (const l in n)
        if (et(n[l]) || et(r[l])) {
            const d =
                Er.indexOf(l) !== -1
                    ? "attr" + l.charAt(0).toUpperCase() + l.substring(1)
                    : l;
            a[d] = n[l];
        }
    return a;
}
function Xx(n, r) {
    try {
        r.dimensions =
            typeof n.getBBox == "function"
                ? n.getBBox()
                : n.getBoundingClientRect();
    } catch {
        r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
    }
}
const kh = ["x", "y", "width", "height", "cx", "cy", "r"],
    qx = {
        useVisualState: jm({
            scrapeMotionValuesFromProps: zm,
            createRenderState: Nm,
            onUpdate: ({
                props: n,
                prevProps: r,
                current: s,
                renderState: a,
                latestValues: l,
            }) => {
                if (!s) return;
                let d = !!n.drag;
                if (!d) {
                    for (const h in l)
                        if ($n.has(h)) {
                            d = !0;
                            break;
                        }
                }
                if (!d) return;
                let c = !r;
                if (r)
                    for (let h = 0; h < kh.length; h++) {
                        const m = kh[h];
                        n[m] !== r[m] && (c = !0);
                    }
                c &&
                    Te.read(() => {
                        (Xx(s, a),
                            Te.render(() => {
                                (_u(a, l, Vu(s.tagName), n.transformTemplate),
                                    Rm(s, a));
                            }));
                    });
            },
        }),
    },
    Qx = {
        useVisualState: jm({
            scrapeMotionValuesFromProps: Fu,
            createRenderState: Lu,
        }),
    };
function _m(n, r, s) {
    for (const a in r) !et(r[a]) && !Am(a, s) && (n[a] = r[a]);
}
function Zx({ transformTemplate: n }, r) {
    return I.useMemo(() => {
        const s = Lu();
        return (zu(s, r, n), Object.assign({}, s.vars, s.style));
    }, [r]);
}
function Jx(n, r) {
    const s = n.style || {},
        a = {};
    return (_m(a, s, n), Object.assign(a, Zx(n, r)), a);
}
function e1(n, r) {
    const s = {},
        a = Jx(n, r);
    return (
        n.drag &&
            n.dragListener !== !1 &&
            ((s.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
                n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
        n.tabIndex === void 0 &&
            (n.onTap || n.onTapStart || n.whileTap) &&
            (s.tabIndex = 0),
        (s.style = a),
        s
    );
}
function t1(n, r, s, a) {
    const l = I.useMemo(() => {
        const d = Nm();
        return (
            _u(d, r, Vu(a), n.transformTemplate),
            { ...d.attrs, style: { ...d.style } }
        );
    }, [r]);
    if (n.style) {
        const d = {};
        (_m(d, n.style, n), (l.style = { ...d, ...l.style }));
    }
    return l;
}
function n1(n = !1) {
    return (s, a, l, { latestValues: d }, c) => {
        const m = (Mu(s) ? t1 : e1)(a, d, c, s),
            g = yx(a, typeof s == "string", n),
            x = s !== I.Fragment ? { ...g, ...m, ref: l } : {},
            { children: v } = a,
            w = I.useMemo(() => (et(v) ? v.get() : v), [v]);
        return I.createElement(s, { ...x, children: w });
    };
}
function r1(n, r) {
    return function (
        a,
        { forwardMotionProps: l } = { forwardMotionProps: !1 },
    ) {
        const c = {
            ...(Mu(a) ? qx : Qx),
            preloadedFeatures: n,
            useRender: n1(l),
            createVisualElement: r,
            Component: a,
        };
        return Px(c);
    };
}
function Lm(n, r) {
    if (!Array.isArray(r)) return !1;
    const s = r.length;
    if (s !== n.length) return !1;
    for (let a = 0; a < s; a++) if (r[a] !== n[a]) return !1;
    return !0;
}
function To(n, r, s) {
    const a = n.getProps();
    return Du(a, r, s !== void 0 ? s : a.custom, n);
}
const i1 = ju(() => window.ScrollTimeline !== void 0);
class s1 {
    constructor(r) {
        ((this.stop = () => this.runAll("stop")),
            (this.animations = r.filter(Boolean)));
    }
    get finished() {
        return Promise.all(
            this.animations.map((r) => ("finished" in r ? r.finished : r)),
        );
    }
    getAll(r) {
        return this.animations[0][r];
    }
    setAll(r, s) {
        for (let a = 0; a < this.animations.length; a++)
            this.animations[a][r] = s;
    }
    attachTimeline(r, s) {
        const a = this.animations.map((l) => {
            if (i1() && l.attachTimeline) return l.attachTimeline(r);
            if (typeof s == "function") return s(l);
        });
        return () => {
            a.forEach((l, d) => {
                (l && l(), this.animations[d].stop());
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(r) {
        this.setAll("time", r);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(r) {
        this.setAll("speed", r);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let r = 0;
        for (let s = 0; s < this.animations.length; s++)
            r = Math.max(r, this.animations[s].duration);
        return r;
    }
    runAll(r) {
        this.animations.forEach((s) => s[r]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
class o1 extends s1 {
    then(r, s) {
        return Promise.all(this.animations).then(r).catch(s);
    }
}
function Ou(n, r) {
    return n ? n[r] || n.default || n : void 0;
}
const eu = 2e4;
function Vm(n) {
    let r = 0;
    const s = 50;
    let a = n.next(r);
    for (; !a.done && r < eu; ) ((r += s), (a = n.next(r)));
    return r >= eu ? 1 / 0 : r;
}
function Iu(n) {
    return typeof n == "function";
}
function Ch(n, r) {
    ((n.timeline = r), (n.onfinish = null));
}
const Bu = (n) => Array.isArray(n) && typeof n[0] == "number",
    a1 = { linearEasing: void 0 };
function l1(n, r) {
    const s = ju(n);
    return () => {
        var a;
        return (a = a1[r]) !== null && a !== void 0 ? a : s();
    };
}
const go = l1(() => {
        try {
            document
                .createElement("div")
                .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch {
            return !1;
        }
        return !0;
    }, "linearEasing"),
    Fm = (n, r, s = 10) => {
        let a = "";
        const l = Math.max(Math.round(r / s), 2);
        for (let d = 0; d < l; d++) a += n(kr(0, l - 1, d)) + ", ";
        return `linear(${a.substring(0, a.length - 2)})`;
    };
function Om(n) {
    return !!(
        (typeof n == "function" && go()) ||
        !n ||
        (typeof n == "string" && (n in tu || go())) ||
        Bu(n) ||
        (Array.isArray(n) && n.every(Om))
    );
}
const bi = ([n, r, s, a]) => `cubic-bezier(${n}, ${r}, ${s}, ${a})`,
    tu = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: bi([0, 0.65, 0.55, 1]),
        circOut: bi([0.55, 0, 1, 0.45]),
        backIn: bi([0.31, 0.01, 0.66, -0.59]),
        backOut: bi([0.33, 1.53, 0.69, 0.99]),
    };
function Im(n, r) {
    if (n)
        return typeof n == "function" && go()
            ? Fm(n, r)
            : Bu(n)
              ? bi(n)
              : Array.isArray(n)
                ? n.map((s) => Im(s, r) || tu.easeOut)
                : tu[n];
}
const At = { x: !1, y: !1 };
function Bm() {
    return At.x || At.y;
}
function u1(n, r, s) {
    var a;
    if (n instanceof Element) return [n];
    if (typeof n == "string") {
        let l = document;
        const d =
            (a = void 0) !== null && a !== void 0 ? a : l.querySelectorAll(n);
        return d ? Array.from(d) : [];
    }
    return Array.from(n);
}
function Um(n, r) {
    const s = u1(n),
        a = new AbortController(),
        l = { passive: !0, ...r, signal: a.signal };
    return [s, l, () => a.abort()];
}
function jh(n) {
    return (r) => {
        r.pointerType === "touch" || Bm() || n(r);
    };
}
function c1(n, r, s = {}) {
    const [a, l, d] = Um(n, s),
        c = jh((h) => {
            const { target: m } = h,
                g = r(h);
            if (typeof g != "function" || !m) return;
            const x = jh((v) => {
                (g(v), m.removeEventListener("pointerleave", x));
            });
            m.addEventListener("pointerleave", x, l);
        });
    return (
        a.forEach((h) => {
            h.addEventListener("pointerenter", c, l);
        }),
        d
    );
}
const Wm = (n, r) => (r ? (n === r ? !0 : Wm(n, r.parentElement)) : !1),
    Uu = (n) =>
        n.pointerType === "mouse"
            ? typeof n.button != "number" || n.button <= 0
            : n.isPrimary !== !1,
    d1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function f1(n) {
    return d1.has(n.tagName) || n.tabIndex !== -1;
}
const ki = new WeakSet();
function Ph(n) {
    return (r) => {
        r.key === "Enter" && n(r);
    };
}
function Al(n, r) {
    n.dispatchEvent(
        new PointerEvent("pointer" + r, { isPrimary: !0, bubbles: !0 }),
    );
}
const h1 = (n, r) => {
    const s = n.currentTarget;
    if (!s) return;
    const a = Ph(() => {
        if (ki.has(s)) return;
        Al(s, "down");
        const l = Ph(() => {
                Al(s, "up");
            }),
            d = () => Al(s, "cancel");
        (s.addEventListener("keyup", l, r), s.addEventListener("blur", d, r));
    });
    (s.addEventListener("keydown", a, r),
        s.addEventListener(
            "blur",
            () => s.removeEventListener("keydown", a),
            r,
        ));
};
function Th(n) {
    return Uu(n) && !Bm();
}
function p1(n, r, s = {}) {
    const [a, l, d] = Um(n, s),
        c = (h) => {
            const m = h.currentTarget;
            if (!Th(h) || ki.has(m)) return;
            ki.add(m);
            const g = r(h),
                x = (j, z) => {
                    (window.removeEventListener("pointerup", v),
                        window.removeEventListener("pointercancel", w),
                        !(!Th(j) || !ki.has(m)) &&
                            (ki.delete(m),
                            typeof g == "function" && g(j, { success: z })));
                },
                v = (j) => {
                    x(j, s.useGlobalTarget || Wm(m, j.target));
                },
                w = (j) => {
                    x(j, !1);
                };
            (window.addEventListener("pointerup", v, l),
                window.addEventListener("pointercancel", w, l));
        };
    return (
        a.forEach((h) => {
            (!f1(h) && h.getAttribute("tabindex") === null && (h.tabIndex = 0),
                (s.useGlobalTarget ? window : h).addEventListener(
                    "pointerdown",
                    c,
                    l,
                ),
                h.addEventListener("focus", (g) => h1(g, l), l));
        }),
        d
    );
}
function m1(n) {
    return n === "x" || n === "y"
        ? At[n]
            ? null
            : ((At[n] = !0),
              () => {
                  At[n] = !1;
              })
        : At.x || At.y
          ? null
          : ((At.x = At.y = !0),
            () => {
                At.x = At.y = !1;
            });
}
const $m = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Er,
]);
let uo;
function g1() {
    uo = void 0;
}
const Ut = {
    now: () => (
        uo === void 0 &&
            Ut.set(
                Ye.isProcessing || dx.useManualTiming
                    ? Ye.timestamp
                    : performance.now(),
            ),
        uo
    ),
    set: (n) => {
        ((uo = n), queueMicrotask(g1));
    },
};
function Wu(n, r) {
    n.indexOf(r) === -1 && n.push(r);
}
function $u(n, r) {
    const s = n.indexOf(r);
    s > -1 && n.splice(s, 1);
}
class Hu {
    constructor() {
        this.subscriptions = [];
    }
    add(r) {
        return (Wu(this.subscriptions, r), () => $u(this.subscriptions, r));
    }
    notify(r, s, a) {
        const l = this.subscriptions.length;
        if (l)
            if (l === 1) this.subscriptions[0](r, s, a);
            else
                for (let d = 0; d < l; d++) {
                    const c = this.subscriptions[d];
                    c && c(r, s, a);
                }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
function Hm(n, r) {
    return r ? n * (1e3 / r) : 0;
}
const Eh = 30,
    y1 = (n) => !isNaN(parseFloat(n));
class v1 {
    constructor(r, s = {}) {
        ((this.version = "11.18.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (a, l = !0) => {
                const d = Ut.now();
                (this.updatedAt !== d && this.setPrevFrameValue(),
                    (this.prev = this.current),
                    this.setCurrent(a),
                    this.current !== this.prev &&
                        this.events.change &&
                        this.events.change.notify(this.current),
                    l &&
                        this.events.renderRequest &&
                        this.events.renderRequest.notify(this.current));
            }),
            (this.hasAnimated = !1),
            this.setCurrent(r),
            (this.owner = s.owner));
    }
    setCurrent(r) {
        ((this.current = r),
            (this.updatedAt = Ut.now()),
            this.canTrackVelocity === null &&
                r !== void 0 &&
                (this.canTrackVelocity = y1(this.current)));
    }
    setPrevFrameValue(r = this.current) {
        ((this.prevFrameValue = r), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(r) {
        return this.on("change", r);
    }
    on(r, s) {
        this.events[r] || (this.events[r] = new Hu());
        const a = this.events[r].add(s);
        return r === "change"
            ? () => {
                  (a(),
                      Te.read(() => {
                          this.events.change.getSize() || this.stop();
                      }));
              }
            : a;
    }
    clearListeners() {
        for (const r in this.events) this.events[r].clear();
    }
    attach(r, s) {
        ((this.passiveEffect = r), (this.stopPassiveEffect = s));
    }
    set(r, s = !0) {
        !s || !this.passiveEffect
            ? this.updateAndNotify(r, s)
            : this.passiveEffect(r, this.updateAndNotify);
    }
    setWithVelocity(r, s, a) {
        (this.set(s),
            (this.prev = void 0),
            (this.prevFrameValue = r),
            (this.prevUpdatedAt = this.updatedAt - a));
    }
    jump(r, s = !0) {
        (this.updateAndNotify(r),
            (this.prev = r),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            s && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
    }
    get() {
        return this.current;
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        const r = Ut.now();
        if (
            !this.canTrackVelocity ||
            this.prevFrameValue === void 0 ||
            r - this.updatedAt > Eh
        )
            return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, Eh);
        return Hm(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            s,
        );
    }
    start(r) {
        return (
            this.stop(),
            new Promise((s) => {
                ((this.hasAnimated = !0),
                    (this.animation = r(s)),
                    this.events.animationStart &&
                        this.events.animationStart.notify());
            }).then(() => {
                (this.events.animationComplete &&
                    this.events.animationComplete.notify(),
                    this.clearAnimation());
            })
        );
    }
    stop() {
        (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
                this.events.animationCancel.notify()),
            this.clearAnimation());
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        (this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
    }
}
function Di(n, r) {
    return new v1(n, r);
}
function x1(n, r, s) {
    n.hasValue(r) ? n.getValue(r).set(s) : n.addValue(r, Di(s));
}
function w1(n, r) {
    const s = To(n, r);
    let { transitionEnd: a = {}, transition: l = {}, ...d } = s || {};
    d = { ...d, ...a };
    for (const c in d) {
        const h = Rx(d[c]);
        x1(n, c, h);
    }
}
function S1(n) {
    return !!(et(n) && n.add);
}
function nu(n, r) {
    const s = n.getValue("willChange");
    if (S1(s)) return s.add(r);
}
function Km(n) {
    return n.props[bm];
}
const Gm = (n, r, s) =>
        (((1 - 3 * s + 3 * r) * n + (3 * s - 6 * r)) * n + 3 * r) * n,
    b1 = 1e-7,
    k1 = 12;
function C1(n, r, s, a, l) {
    let d,
        c,
        h = 0;
    do
        ((c = r + (s - r) / 2),
            (d = Gm(c, a, l) - n),
            d > 0 ? (s = c) : (r = c));
    while (Math.abs(d) > b1 && ++h < k1);
    return c;
}
function Li(n, r, s, a) {
    if (n === r && s === a) return gt;
    const l = (d) => C1(d, 0, 1, n, s);
    return (d) => (d === 0 || d === 1 ? d : Gm(l(d), r, a));
}
const Ym = (n) => (r) => (r <= 0.5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2),
    Xm = (n) => (r) => 1 - n(1 - r),
    qm = Li(0.33, 1.53, 0.69, 0.99),
    Ku = Xm(qm),
    Qm = Ym(Ku),
    Zm = (n) =>
        (n *= 2) < 1 ? 0.5 * Ku(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
    Gu = (n) => 1 - Math.sin(Math.acos(n)),
    Jm = Xm(Gu),
    eg = Ym(Gu),
    tg = (n) => /^0[^.\s]+$/u.test(n);
function j1(n) {
    return typeof n == "number"
        ? n === 0
        : n !== null
          ? n === "none" || n === "0" || tg(n)
          : !0;
}
const ji = (n) => Math.round(n * 1e5) / 1e5,
    Yu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function P1(n) {
    return n == null;
}
const T1 =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Xu = (n, r) => (s) =>
        !!(
            (typeof s == "string" && T1.test(s) && s.startsWith(n)) ||
            (r && !P1(s) && Object.prototype.hasOwnProperty.call(s, r))
        ),
    ng = (n, r, s) => (a) => {
        if (typeof a != "string") return a;
        const [l, d, c, h] = a.match(Yu);
        return {
            [n]: parseFloat(l),
            [r]: parseFloat(d),
            [s]: parseFloat(c),
            alpha: h !== void 0 ? parseFloat(h) : 1,
        };
    },
    E1 = (n) => Jt(0, 255, n),
    zl = { ...Nr, transform: (n) => Math.round(E1(n)) },
    Un = {
        test: Xu("rgb", "red"),
        parse: ng("red", "green", "blue"),
        transform: ({ red: n, green: r, blue: s, alpha: a = 1 }) =>
            "rgba(" +
            zl.transform(n) +
            ", " +
            zl.transform(r) +
            ", " +
            zl.transform(s) +
            ", " +
            ji(Mi.transform(a)) +
            ")",
    };
function N1(n) {
    let r = "",
        s = "",
        a = "",
        l = "";
    return (
        n.length > 5
            ? ((r = n.substring(1, 3)),
              (s = n.substring(3, 5)),
              (a = n.substring(5, 7)),
              (l = n.substring(7, 9)))
            : ((r = n.substring(1, 2)),
              (s = n.substring(2, 3)),
              (a = n.substring(3, 4)),
              (l = n.substring(4, 5)),
              (r += r),
              (s += s),
              (a += a),
              (l += l)),
        {
            red: parseInt(r, 16),
            green: parseInt(s, 16),
            blue: parseInt(a, 16),
            alpha: l ? parseInt(l, 16) / 255 : 1,
        }
    );
}
const ru = { test: Xu("#"), parse: N1, transform: Un.transform },
    vr = {
        test: Xu("hsl", "hue"),
        parse: ng("hue", "saturation", "lightness"),
        transform: ({ hue: n, saturation: r, lightness: s, alpha: a = 1 }) =>
            "hsla(" +
            Math.round(n) +
            ", " +
            Bt.transform(ji(r)) +
            ", " +
            Bt.transform(ji(s)) +
            ", " +
            ji(Mi.transform(a)) +
            ")",
    },
    Je = {
        test: (n) => Un.test(n) || ru.test(n) || vr.test(n),
        parse: (n) =>
            Un.test(n) ? Un.parse(n) : vr.test(n) ? vr.parse(n) : ru.parse(n),
        transform: (n) =>
            typeof n == "string"
                ? n
                : n.hasOwnProperty("red")
                  ? Un.transform(n)
                  : vr.transform(n),
    },
    M1 =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function D1(n) {
    var r, s;
    return (
        isNaN(n) &&
        typeof n == "string" &&
        (((r = n.match(Yu)) === null || r === void 0 ? void 0 : r.length) ||
            0) +
            (((s = n.match(M1)) === null || s === void 0 ? void 0 : s.length) ||
                0) >
            0
    );
}
const rg = "number",
    ig = "color",
    R1 = "var",
    A1 = "var(",
    Nh = "${}",
    z1 =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ri(n) {
    const r = n.toString(),
        s = [],
        a = { color: [], number: [], var: [] },
        l = [];
    let d = 0;
    const h = r
        .replace(
            z1,
            (m) => (
                Je.test(m)
                    ? (a.color.push(d), l.push(ig), s.push(Je.parse(m)))
                    : m.startsWith(A1)
                      ? (a.var.push(d), l.push(R1), s.push(m))
                      : (a.number.push(d), l.push(rg), s.push(parseFloat(m))),
                ++d,
                Nh
            ),
        )
        .split(Nh);
    return { values: s, split: h, indexes: a, types: l };
}
function sg(n) {
    return Ri(n).values;
}
function og(n) {
    const { split: r, types: s } = Ri(n),
        a = r.length;
    return (l) => {
        let d = "";
        for (let c = 0; c < a; c++)
            if (((d += r[c]), l[c] !== void 0)) {
                const h = s[c];
                h === rg
                    ? (d += ji(l[c]))
                    : h === ig
                      ? (d += Je.transform(l[c]))
                      : (d += l[c]);
            }
        return d;
    };
}
const _1 = (n) => (typeof n == "number" ? 0 : n);
function L1(n) {
    const r = sg(n);
    return og(n)(r.map(_1));
}
const Cn = {
        test: D1,
        parse: sg,
        createTransformer: og,
        getAnimatableNone: L1,
    },
    V1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function F1(n) {
    const [r, s] = n.slice(0, -1).split("(");
    if (r === "drop-shadow") return n;
    const [a] = s.match(Yu) || [];
    if (!a) return n;
    const l = s.replace(a, "");
    let d = V1.has(r) ? 1 : 0;
    return (a !== s && (d *= 100), r + "(" + d + l + ")");
}
const O1 = /\b([a-z-]*)\(.*?\)/gu,
    iu = {
        ...Cn,
        getAnimatableNone: (n) => {
            const r = n.match(O1);
            return r ? r.map(F1).join(" ") : n;
        },
    },
    I1 = {
        ...Au,
        color: Je,
        backgroundColor: Je,
        outlineColor: Je,
        fill: Je,
        stroke: Je,
        borderColor: Je,
        borderTopColor: Je,
        borderRightColor: Je,
        borderBottomColor: Je,
        borderLeftColor: Je,
        filter: iu,
        WebkitFilter: iu,
    },
    qu = (n) => I1[n];
function ag(n, r) {
    let s = qu(n);
    return (
        s !== iu && (s = Cn),
        s.getAnimatableNone ? s.getAnimatableNone(r) : void 0
    );
}
const B1 = new Set(["auto", "none", "0"]);
function U1(n, r, s) {
    let a = 0,
        l;
    for (; a < n.length && !l; ) {
        const d = n[a];
        (typeof d == "string" &&
            !B1.has(d) &&
            Ri(d).values.length &&
            (l = n[a]),
            a++);
    }
    if (l && s) for (const d of r) n[d] = ag(s, l);
}
const Mh = (n) => n === Nr || n === oe,
    Dh = (n, r) => parseFloat(n.split(", ")[r]),
    Rh =
        (n, r) =>
        (s, { transform: a }) => {
            if (a === "none" || !a) return 0;
            const l = a.match(/^matrix3d\((.+)\)$/u);
            if (l) return Dh(l[1], r);
            {
                const d = a.match(/^matrix\((.+)\)$/u);
                return d ? Dh(d[1], n) : 0;
            }
        },
    W1 = new Set(["x", "y", "z"]),
    $1 = Er.filter((n) => !W1.has(n));
function H1(n) {
    const r = [];
    return (
        $1.forEach((s) => {
            const a = n.getValue(s);
            a !== void 0 &&
                (r.push([s, a.get()]), a.set(s.startsWith("scale") ? 1 : 0));
        }),
        r
    );
}
const jr = {
    width: ({ x: n }, { paddingLeft: r = "0", paddingRight: s = "0" }) =>
        n.max - n.min - parseFloat(r) - parseFloat(s),
    height: ({ y: n }, { paddingTop: r = "0", paddingBottom: s = "0" }) =>
        n.max - n.min - parseFloat(r) - parseFloat(s),
    top: (n, { top: r }) => parseFloat(r),
    left: (n, { left: r }) => parseFloat(r),
    bottom: ({ y: n }, { top: r }) => parseFloat(r) + (n.max - n.min),
    right: ({ x: n }, { left: r }) => parseFloat(r) + (n.max - n.min),
    x: Rh(4, 13),
    y: Rh(5, 14),
};
jr.translateX = jr.x;
jr.translateY = jr.y;
const Wn = new Set();
let su = !1,
    ou = !1;
function lg() {
    if (ou) {
        const n = Array.from(Wn).filter((a) => a.needsMeasurement),
            r = new Set(n.map((a) => a.element)),
            s = new Map();
        (r.forEach((a) => {
            const l = H1(a);
            l.length && (s.set(a, l), a.render());
        }),
            n.forEach((a) => a.measureInitialState()),
            r.forEach((a) => {
                a.render();
                const l = s.get(a);
                l &&
                    l.forEach(([d, c]) => {
                        var h;
                        (h = a.getValue(d)) === null ||
                            h === void 0 ||
                            h.set(c);
                    });
            }),
            n.forEach((a) => a.measureEndState()),
            n.forEach((a) => {
                a.suspendedScrollY !== void 0 &&
                    window.scrollTo(0, a.suspendedScrollY);
            }));
    }
    ((ou = !1), (su = !1), Wn.forEach((n) => n.complete()), Wn.clear());
}
function ug() {
    Wn.forEach((n) => {
        (n.readKeyframes(), n.needsMeasurement && (ou = !0));
    });
}
function K1() {
    (ug(), lg());
}
class Qu {
    constructor(r, s, a, l, d, c = !1) {
        ((this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...r]),
            (this.onComplete = s),
            (this.name = a),
            (this.motionValue = l),
            (this.element = d),
            (this.isAsync = c));
    }
    scheduleResolve() {
        ((this.isScheduled = !0),
            this.isAsync
                ? (Wn.add(this),
                  su || ((su = !0), Te.read(ug), Te.resolveKeyframes(lg)))
                : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: r,
            name: s,
            element: a,
            motionValue: l,
        } = this;
        for (let d = 0; d < r.length; d++)
            if (r[d] === null)
                if (d === 0) {
                    const c = l == null ? void 0 : l.get(),
                        h = r[r.length - 1];
                    if (c !== void 0) r[0] = c;
                    else if (a && s) {
                        const m = a.readValue(s, h);
                        m != null && (r[0] = m);
                    }
                    (r[0] === void 0 && (r[0] = h),
                        l && c === void 0 && l.set(r[0]));
                } else r[d] = r[d - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        ((this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            Wn.delete(this));
    }
    cancel() {
        this.isComplete || ((this.isScheduled = !1), Wn.delete(this));
    }
    resume() {
        this.isComplete || this.scheduleResolve();
    }
}
const cg = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
    G1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Y1(n) {
    const r = G1.exec(n);
    if (!r) return [,];
    const [, s, a, l] = r;
    return [`--${s ?? a}`, l];
}
function dg(n, r, s = 1) {
    const [a, l] = Y1(n);
    if (!a) return;
    const d = window.getComputedStyle(r).getPropertyValue(a);
    if (d) {
        const c = d.trim();
        return cg(c) ? parseFloat(c) : c;
    }
    return Ru(l) ? dg(l, r, s + 1) : l;
}
const fg = (n) => (r) => r.test(n),
    X1 = { test: (n) => n === "auto", parse: (n) => n },
    hg = [Nr, oe, Bt, bn, Fx, Vx, X1],
    Ah = (n) => hg.find(fg(n));
class pg extends Qu {
    constructor(r, s, a, l, d) {
        super(r, s, a, l, d, !0);
    }
    readKeyframes() {
        const { unresolvedKeyframes: r, element: s, name: a } = this;
        if (!s || !s.current) return;
        super.readKeyframes();
        for (let m = 0; m < r.length; m++) {
            let g = r[m];
            if (typeof g == "string" && ((g = g.trim()), Ru(g))) {
                const x = dg(g, s.current);
                (x !== void 0 && (r[m] = x),
                    m === r.length - 1 && (this.finalKeyframe = g));
            }
        }
        if ((this.resolveNoneKeyframes(), !$m.has(a) || r.length !== 2)) return;
        const [l, d] = r,
            c = Ah(l),
            h = Ah(d);
        if (c !== h)
            if (Mh(c) && Mh(h))
                for (let m = 0; m < r.length; m++) {
                    const g = r[m];
                    typeof g == "string" && (r[m] = parseFloat(g));
                }
            else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: r, name: s } = this,
            a = [];
        for (let l = 0; l < r.length; l++) j1(r[l]) && a.push(l);
        a.length && U1(r, a, s);
    }
    measureInitialState() {
        const { element: r, unresolvedKeyframes: s, name: a } = this;
        if (!r || !r.current) return;
        (a === "height" && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = jr[a](
                r.measureViewportBox(),
                window.getComputedStyle(r.current),
            )),
            (s[0] = this.measuredOrigin));
        const l = s[s.length - 1];
        l !== void 0 && r.getValue(a, l).jump(l, !1);
    }
    measureEndState() {
        var r;
        const { element: s, name: a, unresolvedKeyframes: l } = this;
        if (!s || !s.current) return;
        const d = s.getValue(a);
        d && d.jump(this.measuredOrigin, !1);
        const c = l.length - 1,
            h = l[c];
        ((l[c] = jr[a](
            s.measureViewportBox(),
            window.getComputedStyle(s.current),
        )),
            h !== null &&
                this.finalKeyframe === void 0 &&
                (this.finalKeyframe = h),
            !((r = this.removedTransforms) === null || r === void 0) &&
                r.length &&
                this.removedTransforms.forEach(([m, g]) => {
                    s.getValue(m).set(g);
                }),
            this.resolveNoneKeyframes());
    }
}
const zh = (n, r) =>
    r === "zIndex"
        ? !1
        : !!(
              typeof n == "number" ||
              Array.isArray(n) ||
              (typeof n == "string" &&
                  (Cn.test(n) || n === "0") &&
                  !n.startsWith("url("))
          );
function q1(n) {
    const r = n[0];
    if (n.length === 1) return !0;
    for (let s = 0; s < n.length; s++) if (n[s] !== r) return !0;
}
function Q1(n, r, s, a) {
    const l = n[0];
    if (l === null) return !1;
    if (r === "display" || r === "visibility") return !0;
    const d = n[n.length - 1],
        c = zh(l, r),
        h = zh(d, r);
    return !c || !h ? !1 : q1(n) || ((s === "spring" || Iu(s)) && a);
}
const Z1 = (n) => n !== null;
function Eo(n, { repeat: r, repeatType: s = "loop" }, a) {
    const l = n.filter(Z1),
        d = r && s !== "loop" && r % 2 === 1 ? 0 : l.length - 1;
    return !d || a === void 0 ? l[d] : a;
}
const J1 = 40;
class mg {
    constructor({
        autoplay: r = !0,
        delay: s = 0,
        type: a = "keyframes",
        repeat: l = 0,
        repeatDelay: d = 0,
        repeatType: c = "loop",
        ...h
    }) {
        ((this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = Ut.now()),
            (this.options = {
                autoplay: r,
                delay: s,
                type: a,
                repeat: l,
                repeatDelay: d,
                repeatType: c,
                ...h,
            }),
            this.updateFinishedPromise());
    }
    calcStartTime() {
        return this.resolvedAt
            ? this.resolvedAt - this.createdAt > J1
                ? this.resolvedAt
                : this.createdAt
            : this.createdAt;
    }
    get resolved() {
        return (
            !this._resolved && !this.hasAttemptedResolve && K1(),
            this._resolved
        );
    }
    onKeyframesResolved(r, s) {
        ((this.resolvedAt = Ut.now()), (this.hasAttemptedResolve = !0));
        const {
            name: a,
            type: l,
            velocity: d,
            delay: c,
            onComplete: h,
            onUpdate: m,
            isGenerator: g,
        } = this.options;
        if (!g && !Q1(r, a, l, d))
            if (c) this.options.duration = 0;
            else {
                (m && m(Eo(r, this.options, s)),
                    h && h(),
                    this.resolveFinishedPromise());
                return;
            }
        const x = this.initPlayback(r, s);
        x !== !1 &&
            ((this._resolved = { keyframes: r, finalKeyframe: s, ...x }),
            this.onPostResolved());
    }
    onPostResolved() {}
    then(r, s) {
        return this.currentFinishedPromise.then(r, s);
    }
    flatten() {
        ((this.options.type = "keyframes"), (this.options.ease = "linear"));
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((r) => {
            this.resolveFinishedPromise = r;
        });
    }
}
const Re = (n, r, s) => n + (r - n) * s;
function _l(n, r, s) {
    return (
        s < 0 && (s += 1),
        s > 1 && (s -= 1),
        s < 1 / 6
            ? n + (r - n) * 6 * s
            : s < 1 / 2
              ? r
              : s < 2 / 3
                ? n + (r - n) * (2 / 3 - s) * 6
                : n
    );
}
function ew({ hue: n, saturation: r, lightness: s, alpha: a }) {
    ((n /= 360), (r /= 100), (s /= 100));
    let l = 0,
        d = 0,
        c = 0;
    if (!r) l = d = c = s;
    else {
        const h = s < 0.5 ? s * (1 + r) : s + r - s * r,
            m = 2 * s - h;
        ((l = _l(m, h, n + 1 / 3)),
            (d = _l(m, h, n)),
            (c = _l(m, h, n - 1 / 3)));
    }
    return {
        red: Math.round(l * 255),
        green: Math.round(d * 255),
        blue: Math.round(c * 255),
        alpha: a,
    };
}
function yo(n, r) {
    return (s) => (s > 0 ? r : n);
}
const Ll = (n, r, s) => {
        const a = n * n,
            l = s * (r * r - a) + a;
        return l < 0 ? 0 : Math.sqrt(l);
    },
    tw = [ru, Un, vr],
    nw = (n) => tw.find((r) => r.test(n));
function _h(n) {
    const r = nw(n);
    if (!r) return !1;
    let s = r.parse(n);
    return (r === vr && (s = ew(s)), s);
}
const Lh = (n, r) => {
        const s = _h(n),
            a = _h(r);
        if (!s || !a) return yo(n, r);
        const l = { ...s };
        return (d) => (
            (l.red = Ll(s.red, a.red, d)),
            (l.green = Ll(s.green, a.green, d)),
            (l.blue = Ll(s.blue, a.blue, d)),
            (l.alpha = Re(s.alpha, a.alpha, d)),
            Un.transform(l)
        );
    },
    rw = (n, r) => (s) => r(n(s)),
    Vi = (...n) => n.reduce(rw),
    au = new Set(["none", "hidden"]);
function iw(n, r) {
    return au.has(n) ? (s) => (s <= 0 ? n : r) : (s) => (s >= 1 ? r : n);
}
function sw(n, r) {
    return (s) => Re(n, r, s);
}
function Zu(n) {
    return typeof n == "number"
        ? sw
        : typeof n == "string"
          ? Ru(n)
              ? yo
              : Je.test(n)
                ? Lh
                : lw
          : Array.isArray(n)
            ? gg
            : typeof n == "object"
              ? Je.test(n)
                  ? Lh
                  : ow
              : yo;
}
function gg(n, r) {
    const s = [...n],
        a = s.length,
        l = n.map((d, c) => Zu(d)(d, r[c]));
    return (d) => {
        for (let c = 0; c < a; c++) s[c] = l[c](d);
        return s;
    };
}
function ow(n, r) {
    const s = { ...n, ...r },
        a = {};
    for (const l in s)
        n[l] !== void 0 && r[l] !== void 0 && (a[l] = Zu(n[l])(n[l], r[l]));
    return (l) => {
        for (const d in a) s[d] = a[d](l);
        return s;
    };
}
function aw(n, r) {
    var s;
    const a = [],
        l = { color: 0, var: 0, number: 0 };
    for (let d = 0; d < r.values.length; d++) {
        const c = r.types[d],
            h = n.indexes[c][l[c]],
            m = (s = n.values[h]) !== null && s !== void 0 ? s : 0;
        ((a[d] = m), l[c]++);
    }
    return a;
}
const lw = (n, r) => {
    const s = Cn.createTransformer(r),
        a = Ri(n),
        l = Ri(r);
    return a.indexes.var.length === l.indexes.var.length &&
        a.indexes.color.length === l.indexes.color.length &&
        a.indexes.number.length >= l.indexes.number.length
        ? (au.has(n) && !l.values.length) || (au.has(r) && !a.values.length)
            ? iw(n, r)
            : Vi(gg(aw(a, l), l.values), s)
        : yo(n, r);
};
function yg(n, r, s) {
    return typeof n == "number" && typeof r == "number" && typeof s == "number"
        ? Re(n, r, s)
        : Zu(n)(n, r);
}
const uw = 5;
function vg(n, r, s) {
    const a = Math.max(r - uw, 0);
    return Hm(s - n(a), r - a);
}
const ze = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
    },
    Vl = 0.001;
function cw({
    duration: n = ze.duration,
    bounce: r = ze.bounce,
    velocity: s = ze.velocity,
    mass: a = ze.mass,
}) {
    let l,
        d,
        c = 1 - r;
    ((c = Jt(ze.minDamping, ze.maxDamping, c)),
        (n = Jt(ze.minDuration, ze.maxDuration, Zt(n))),
        c < 1
            ? ((l = (g) => {
                  const x = g * c,
                      v = x * n,
                      w = x - s,
                      j = lu(g, c),
                      z = Math.exp(-v);
                  return Vl - (w / j) * z;
              }),
              (d = (g) => {
                  const v = g * c * n,
                      w = v * s + s,
                      j = Math.pow(c, 2) * Math.pow(g, 2) * n,
                      z = Math.exp(-v),
                      T = lu(Math.pow(g, 2), c);
                  return ((-l(g) + Vl > 0 ? -1 : 1) * ((w - j) * z)) / T;
              }))
            : ((l = (g) => {
                  const x = Math.exp(-g * n),
                      v = (g - s) * n + 1;
                  return -Vl + x * v;
              }),
              (d = (g) => {
                  const x = Math.exp(-g * n),
                      v = (s - g) * (n * n);
                  return x * v;
              })));
    const h = 5 / n,
        m = fw(l, d, h);
    if (((n = Qt(n)), isNaN(m)))
        return { stiffness: ze.stiffness, damping: ze.damping, duration: n };
    {
        const g = Math.pow(m, 2) * a;
        return { stiffness: g, damping: c * 2 * Math.sqrt(a * g), duration: n };
    }
}
const dw = 12;
function fw(n, r, s) {
    let a = s;
    for (let l = 1; l < dw; l++) a = a - n(a) / r(a);
    return a;
}
function lu(n, r) {
    return n * Math.sqrt(1 - r * r);
}
const hw = ["duration", "bounce"],
    pw = ["stiffness", "damping", "mass"];
function Vh(n, r) {
    return r.some((s) => n[s] !== void 0);
}
function mw(n) {
    let r = {
        velocity: ze.velocity,
        stiffness: ze.stiffness,
        damping: ze.damping,
        mass: ze.mass,
        isResolvedFromDuration: !1,
        ...n,
    };
    if (!Vh(n, pw) && Vh(n, hw))
        if (n.visualDuration) {
            const s = n.visualDuration,
                a = (2 * Math.PI) / (s * 1.2),
                l = a * a,
                d = 2 * Jt(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(l);
            r = { ...r, mass: ze.mass, stiffness: l, damping: d };
        } else {
            const s = cw(n);
            ((r = { ...r, ...s, mass: ze.mass }),
                (r.isResolvedFromDuration = !0));
        }
    return r;
}
function xg(n = ze.visualDuration, r = ze.bounce) {
    const s =
        typeof n != "object"
            ? { visualDuration: n, keyframes: [0, 1], bounce: r }
            : n;
    let { restSpeed: a, restDelta: l } = s;
    const d = s.keyframes[0],
        c = s.keyframes[s.keyframes.length - 1],
        h = { done: !1, value: d },
        {
            stiffness: m,
            damping: g,
            mass: x,
            duration: v,
            velocity: w,
            isResolvedFromDuration: j,
        } = mw({ ...s, velocity: -Zt(s.velocity || 0) }),
        z = w || 0,
        T = g / (2 * Math.sqrt(m * x)),
        b = c - d,
        N = Zt(Math.sqrt(m / x)),
        C = Math.abs(b) < 5;
    (a || (a = C ? ze.restSpeed.granular : ze.restSpeed.default),
        l || (l = C ? ze.restDelta.granular : ze.restDelta.default));
    let M;
    if (T < 1) {
        const O = lu(N, T);
        M = (L) => {
            const E = Math.exp(-T * N * L);
            return (
                c -
                E *
                    (((z + T * N * b) / O) * Math.sin(O * L) +
                        b * Math.cos(O * L))
            );
        };
    } else if (T === 1) M = (O) => c - Math.exp(-N * O) * (b + (z + N * b) * O);
    else {
        const O = N * Math.sqrt(T * T - 1);
        M = (L) => {
            const E = Math.exp(-T * N * L),
                R = Math.min(O * L, 300);
            return (
                c -
                (E * ((z + T * N * b) * Math.sinh(R) + O * b * Math.cosh(R))) /
                    O
            );
        };
    }
    const V = {
        calculatedDuration: (j && v) || null,
        next: (O) => {
            const L = M(O);
            if (j) h.done = O >= v;
            else {
                let E = 0;
                T < 1 && (E = O === 0 ? Qt(z) : vg(M, O, L));
                const R = Math.abs(E) <= a,
                    G = Math.abs(c - L) <= l;
                h.done = R && G;
            }
            return ((h.value = h.done ? c : L), h);
        },
        toString: () => {
            const O = Math.min(Vm(V), eu),
                L = Fm((E) => V.next(O * E).value, O, 30);
            return O + "ms " + L;
        },
    };
    return V;
}
function Fh({
    keyframes: n,
    velocity: r = 0,
    power: s = 0.8,
    timeConstant: a = 325,
    bounceDamping: l = 10,
    bounceStiffness: d = 500,
    modifyTarget: c,
    min: h,
    max: m,
    restDelta: g = 0.5,
    restSpeed: x,
}) {
    const v = n[0],
        w = { done: !1, value: v },
        j = (R) => (h !== void 0 && R < h) || (m !== void 0 && R > m),
        z = (R) =>
            h === void 0
                ? m
                : m === void 0 || Math.abs(h - R) < Math.abs(m - R)
                  ? h
                  : m;
    let T = s * r;
    const b = v + T,
        N = c === void 0 ? b : c(b);
    N !== b && (T = N - v);
    const C = (R) => -T * Math.exp(-R / a),
        M = (R) => N + C(R),
        V = (R) => {
            const G = C(R),
                te = M(R);
            ((w.done = Math.abs(G) <= g), (w.value = w.done ? N : te));
        };
    let O, L;
    const E = (R) => {
        j(w.value) &&
            ((O = R),
            (L = xg({
                keyframes: [w.value, z(w.value)],
                velocity: vg(M, R, w.value),
                damping: l,
                stiffness: d,
                restDelta: g,
                restSpeed: x,
            })));
    };
    return (
        E(0),
        {
            calculatedDuration: null,
            next: (R) => {
                let G = !1;
                return (
                    !L && O === void 0 && ((G = !0), V(R), E(R)),
                    O !== void 0 && R >= O ? L.next(R - O) : (!G && V(R), w)
                );
            },
        }
    );
}
const gw = Li(0.42, 0, 1, 1),
    yw = Li(0, 0, 0.58, 1),
    wg = Li(0.42, 0, 0.58, 1),
    vw = (n) => Array.isArray(n) && typeof n[0] != "number",
    xw = {
        linear: gt,
        easeIn: gw,
        easeInOut: wg,
        easeOut: yw,
        circIn: Gu,
        circInOut: eg,
        circOut: Jm,
        backIn: Ku,
        backInOut: Qm,
        backOut: qm,
        anticipate: Zm,
    },
    Oh = (n) => {
        if (Bu(n)) {
            ym(n.length === 4);
            const [r, s, a, l] = n;
            return Li(r, s, a, l);
        } else if (typeof n == "string") return xw[n];
        return n;
    };
function ww(n, r, s) {
    const a = [],
        l = s || yg,
        d = n.length - 1;
    for (let c = 0; c < d; c++) {
        let h = l(n[c], n[c + 1]);
        if (r) {
            const m = Array.isArray(r) ? r[c] || gt : r;
            h = Vi(m, h);
        }
        a.push(h);
    }
    return a;
}
function Sw(n, r, { clamp: s = !0, ease: a, mixer: l } = {}) {
    const d = n.length;
    if ((ym(d === r.length), d === 1)) return () => r[0];
    if (d === 2 && r[0] === r[1]) return () => r[1];
    const c = n[0] === n[1];
    n[0] > n[d - 1] && ((n = [...n].reverse()), (r = [...r].reverse()));
    const h = ww(r, a, l),
        m = h.length,
        g = (x) => {
            if (c && x < n[0]) return r[0];
            let v = 0;
            if (m > 1) for (; v < n.length - 2 && !(x < n[v + 1]); v++);
            const w = kr(n[v], n[v + 1], x);
            return h[v](w);
        };
    return s ? (x) => g(Jt(n[0], n[d - 1], x)) : g;
}
function bw(n, r) {
    const s = n[n.length - 1];
    for (let a = 1; a <= r; a++) {
        const l = kr(0, r, a);
        n.push(Re(s, 1, l));
    }
}
function kw(n) {
    const r = [0];
    return (bw(r, n.length - 1), r);
}
function Cw(n, r) {
    return n.map((s) => s * r);
}
function jw(n, r) {
    return n.map(() => r || wg).splice(0, n.length - 1);
}
function vo({
    duration: n = 300,
    keyframes: r,
    times: s,
    ease: a = "easeInOut",
}) {
    const l = vw(a) ? a.map(Oh) : Oh(a),
        d = { done: !1, value: r[0] },
        c = Cw(s && s.length === r.length ? s : kw(r), n),
        h = Sw(c, r, { ease: Array.isArray(l) ? l : jw(r, l) });
    return {
        calculatedDuration: n,
        next: (m) => ((d.value = h(m)), (d.done = m >= n), d),
    };
}
const Pw = (n) => {
        const r = ({ timestamp: s }) => n(s);
        return {
            start: () => Te.update(r, !0),
            stop: () => kn(r),
            now: () => (Ye.isProcessing ? Ye.timestamp : Ut.now()),
        };
    },
    Tw = { decay: Fh, inertia: Fh, tween: vo, keyframes: vo, spring: xg },
    Ew = (n) => n / 100;
class Ju extends mg {
    constructor(r) {
        (super(r),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
                if (
                    (this.resolver.cancel(),
                    (this.isStopped = !0),
                    this.state === "idle")
                )
                    return;
                this.teardown();
                const { onStop: m } = this.options;
                m && m();
            }));
        const {
                name: s,
                motionValue: a,
                element: l,
                keyframes: d,
            } = this.options,
            c = (l == null ? void 0 : l.KeyframeResolver) || Qu,
            h = (m, g) => this.onKeyframesResolved(m, g);
        ((this.resolver = new c(d, h, s, a, l)),
            this.resolver.scheduleResolve());
    }
    flatten() {
        (super.flatten(),
            this._resolved &&
                Object.assign(
                    this._resolved,
                    this.initPlayback(this._resolved.keyframes),
                ));
    }
    initPlayback(r) {
        const {
                type: s = "keyframes",
                repeat: a = 0,
                repeatDelay: l = 0,
                repeatType: d,
                velocity: c = 0,
            } = this.options,
            h = Iu(s) ? s : Tw[s] || vo;
        let m, g;
        h !== vo &&
            typeof r[0] != "number" &&
            ((m = Vi(Ew, yg(r[0], r[1]))), (r = [0, 100]));
        const x = h({ ...this.options, keyframes: r });
        (d === "mirror" &&
            (g = h({
                ...this.options,
                keyframes: [...r].reverse(),
                velocity: -c,
            })),
            x.calculatedDuration === null && (x.calculatedDuration = Vm(x)));
        const { calculatedDuration: v } = x,
            w = v + l,
            j = w * (a + 1) - l;
        return {
            generator: x,
            mirroredGenerator: g,
            mapPercentToKeyframes: m,
            calculatedDuration: v,
            resolvedDuration: w,
            totalDuration: j,
        };
    }
    onPostResolved() {
        const { autoplay: r = !0 } = this.options;
        (this.play(),
            this.pendingPlayState === "paused" || !r
                ? this.pause()
                : (this.state = this.pendingPlayState));
    }
    tick(r, s = !1) {
        const { resolved: a } = this;
        if (!a) {
            const { keyframes: R } = this.options;
            return { done: !0, value: R[R.length - 1] };
        }
        const {
            finalKeyframe: l,
            generator: d,
            mirroredGenerator: c,
            mapPercentToKeyframes: h,
            keyframes: m,
            calculatedDuration: g,
            totalDuration: x,
            resolvedDuration: v,
        } = a;
        if (this.startTime === null) return d.next(0);
        const {
            delay: w,
            repeat: j,
            repeatType: z,
            repeatDelay: T,
            onUpdate: b,
        } = this.options;
        (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, r))
            : this.speed < 0 &&
              (this.startTime = Math.min(r - x / this.speed, this.startTime)),
            s
                ? (this.currentTime = r)
                : this.holdTime !== null
                  ? (this.currentTime = this.holdTime)
                  : (this.currentTime =
                        Math.round(r - this.startTime) * this.speed));
        const N = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
            C = this.speed >= 0 ? N < 0 : N > x;
        ((this.currentTime = Math.max(N, 0)),
            this.state === "finished" &&
                this.holdTime === null &&
                (this.currentTime = x));
        let M = this.currentTime,
            V = d;
        if (j) {
            const R = Math.min(this.currentTime, x) / v;
            let G = Math.floor(R),
                te = R % 1;
            (!te && R >= 1 && (te = 1),
                te === 1 && G--,
                (G = Math.min(G, j + 1)),
                !!(G % 2) &&
                    (z === "reverse"
                        ? ((te = 1 - te), T && (te -= T / v))
                        : z === "mirror" && (V = c)),
                (M = Jt(0, 1, te) * v));
        }
        const O = C ? { done: !1, value: m[0] } : V.next(M);
        h && (O.value = h(O.value));
        let { done: L } = O;
        !C &&
            g !== null &&
            (L =
                this.speed >= 0
                    ? this.currentTime >= x
                    : this.currentTime <= 0);
        const E =
            this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && L));
        return (
            E && l !== void 0 && (O.value = Eo(m, this.options, l)),
            b && b(O.value),
            E && this.finish(),
            O
        );
    }
    get duration() {
        const { resolved: r } = this;
        return r ? Zt(r.calculatedDuration) : 0;
    }
    get time() {
        return Zt(this.currentTime);
    }
    set time(r) {
        ((r = Qt(r)),
            (this.currentTime = r),
            this.holdTime !== null || this.speed === 0
                ? (this.holdTime = r)
                : this.driver &&
                  (this.startTime = this.driver.now() - r / this.speed));
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(r) {
        const s = this.playbackSpeed !== r;
        ((this.playbackSpeed = r), s && (this.time = Zt(this.currentTime)));
    }
    play() {
        if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
        ) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped) return;
        const { driver: r = Pw, onPlay: s, startTime: a } = this.options;
        (this.driver || (this.driver = r((d) => this.tick(d))), s && s());
        const l = this.driver.now();
        (this.holdTime !== null
            ? (this.startTime = l - this.holdTime)
            : this.startTime
              ? this.state === "finished" && (this.startTime = l)
              : (this.startTime = a ?? this.calcStartTime()),
            this.state === "finished" && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
    }
    pause() {
        var r;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        ((this.state = "paused"),
            (this.holdTime =
                (r = this.currentTime) !== null && r !== void 0 ? r : 0));
    }
    complete() {
        (this.state !== "running" && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null));
    }
    finish() {
        (this.teardown(), (this.state = "finished"));
        const { onComplete: r } = this.options;
        r && r();
    }
    cancel() {
        (this.cancelTime !== null && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise());
    }
    teardown() {
        ((this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel());
    }
    stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(r) {
        return ((this.startTime = 0), this.tick(r, !0));
    }
}
const Nw = new Set(["opacity", "clipPath", "filter", "transform"]);
function Mw(
    n,
    r,
    s,
    {
        delay: a = 0,
        duration: l = 300,
        repeat: d = 0,
        repeatType: c = "loop",
        ease: h = "easeInOut",
        times: m,
    } = {},
) {
    const g = { [r]: s };
    m && (g.offset = m);
    const x = Im(h, l);
    return (
        Array.isArray(x) && (g.easing = x),
        n.animate(g, {
            delay: a,
            duration: l,
            easing: Array.isArray(x) ? "linear" : x,
            fill: "both",
            iterations: d + 1,
            direction: c === "reverse" ? "alternate" : "normal",
        })
    );
}
const Dw = ju(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    xo = 10,
    Rw = 2e4;
function Aw(n) {
    return Iu(n.type) || n.type === "spring" || !Om(n.ease);
}
function zw(n, r) {
    const s = new Ju({
        ...r,
        keyframes: n,
        repeat: 0,
        delay: 0,
        isGenerator: !0,
    });
    let a = { done: !1, value: n[0] };
    const l = [];
    let d = 0;
    for (; !a.done && d < Rw; ) ((a = s.sample(d)), l.push(a.value), (d += xo));
    return { times: void 0, keyframes: l, duration: d - xo, ease: "linear" };
}
const Sg = { anticipate: Zm, backInOut: Qm, circInOut: eg };
function _w(n) {
    return n in Sg;
}
class Ih extends mg {
    constructor(r) {
        super(r);
        const {
            name: s,
            motionValue: a,
            element: l,
            keyframes: d,
        } = this.options;
        ((this.resolver = new pg(
            d,
            (c, h) => this.onKeyframesResolved(c, h),
            s,
            a,
            l,
        )),
            this.resolver.scheduleResolve());
    }
    initPlayback(r, s) {
        let {
            duration: a = 300,
            times: l,
            ease: d,
            type: c,
            motionValue: h,
            name: m,
            startTime: g,
        } = this.options;
        if (!h.owner || !h.owner.current) return !1;
        if (
            (typeof d == "string" && go() && _w(d) && (d = Sg[d]),
            Aw(this.options))
        ) {
            const {
                    onComplete: v,
                    onUpdate: w,
                    motionValue: j,
                    element: z,
                    ...T
                } = this.options,
                b = zw(r, T);
            ((r = b.keyframes),
                r.length === 1 && (r[1] = r[0]),
                (a = b.duration),
                (l = b.times),
                (d = b.ease),
                (c = "keyframes"));
        }
        const x = Mw(h.owner.current, m, r, {
            ...this.options,
            duration: a,
            times: l,
            ease: d,
        });
        return (
            (x.startTime = g ?? this.calcStartTime()),
            this.pendingTimeline
                ? (Ch(x, this.pendingTimeline), (this.pendingTimeline = void 0))
                : (x.onfinish = () => {
                      const { onComplete: v } = this.options;
                      (h.set(Eo(r, this.options, s)),
                          v && v(),
                          this.cancel(),
                          this.resolveFinishedPromise());
                  }),
            {
                animation: x,
                duration: a,
                times: l,
                type: c,
                ease: d,
                keyframes: r,
            }
        );
    }
    get duration() {
        const { resolved: r } = this;
        if (!r) return 0;
        const { duration: s } = r;
        return Zt(s);
    }
    get time() {
        const { resolved: r } = this;
        if (!r) return 0;
        const { animation: s } = r;
        return Zt(s.currentTime || 0);
    }
    set time(r) {
        const { resolved: s } = this;
        if (!s) return;
        const { animation: a } = s;
        a.currentTime = Qt(r);
    }
    get speed() {
        const { resolved: r } = this;
        if (!r) return 1;
        const { animation: s } = r;
        return s.playbackRate;
    }
    set speed(r) {
        const { resolved: s } = this;
        if (!s) return;
        const { animation: a } = s;
        a.playbackRate = r;
    }
    get state() {
        const { resolved: r } = this;
        if (!r) return "idle";
        const { animation: s } = r;
        return s.playState;
    }
    get startTime() {
        const { resolved: r } = this;
        if (!r) return null;
        const { animation: s } = r;
        return s.startTime;
    }
    attachTimeline(r) {
        if (!this._resolved) this.pendingTimeline = r;
        else {
            const { resolved: s } = this;
            if (!s) return gt;
            const { animation: a } = s;
            Ch(a, r);
        }
        return gt;
    }
    play() {
        if (this.isStopped) return;
        const { resolved: r } = this;
        if (!r) return;
        const { animation: s } = r;
        (s.playState === "finished" && this.updateFinishedPromise(), s.play());
    }
    pause() {
        const { resolved: r } = this;
        if (!r) return;
        const { animation: s } = r;
        s.pause();
    }
    stop() {
        if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
        )
            return;
        (this.resolveFinishedPromise(), this.updateFinishedPromise());
        const { resolved: r } = this;
        if (!r) return;
        const {
            animation: s,
            keyframes: a,
            duration: l,
            type: d,
            ease: c,
            times: h,
        } = r;
        if (s.playState === "idle" || s.playState === "finished") return;
        if (this.time) {
            const {
                    motionValue: g,
                    onUpdate: x,
                    onComplete: v,
                    element: w,
                    ...j
                } = this.options,
                z = new Ju({
                    ...j,
                    keyframes: a,
                    duration: l,
                    type: d,
                    ease: c,
                    times: h,
                    isGenerator: !0,
                }),
                T = Qt(this.time);
            g.setWithVelocity(z.sample(T - xo).value, z.sample(T).value, xo);
        }
        const { onStop: m } = this.options;
        (m && m(), this.cancel());
    }
    complete() {
        const { resolved: r } = this;
        r && r.animation.finish();
    }
    cancel() {
        const { resolved: r } = this;
        r && r.animation.cancel();
    }
    static supports(r) {
        const {
            motionValue: s,
            name: a,
            repeatDelay: l,
            repeatType: d,
            damping: c,
            type: h,
        } = r;
        if (!s || !s.owner || !(s.owner.current instanceof HTMLElement))
            return !1;
        const { onUpdate: m, transformTemplate: g } = s.owner.getProps();
        return (
            Dw() &&
            a &&
            Nw.has(a) &&
            !m &&
            !g &&
            !l &&
            d !== "mirror" &&
            c !== 0 &&
            h !== "inertia"
        );
    }
}
const Lw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    Vw = (n) => ({
        type: "spring",
        stiffness: 550,
        damping: n === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
    }),
    Fw = { type: "keyframes", duration: 0.8 },
    Ow = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    Iw = (n, { keyframes: r }) =>
        r.length > 2
            ? Fw
            : $n.has(n)
              ? n.startsWith("scale")
                  ? Vw(r[1])
                  : Lw
              : Ow;
function Bw({
    when: n,
    delay: r,
    delayChildren: s,
    staggerChildren: a,
    staggerDirection: l,
    repeat: d,
    repeatType: c,
    repeatDelay: h,
    from: m,
    elapsed: g,
    ...x
}) {
    return !!Object.keys(x).length;
}
const ec =
    (n, r, s, a = {}, l, d) =>
    (c) => {
        const h = Ou(a, n) || {},
            m = h.delay || a.delay || 0;
        let { elapsed: g = 0 } = a;
        g = g - Qt(m);
        let x = {
            keyframes: Array.isArray(s) ? s : [null, s],
            ease: "easeOut",
            velocity: r.getVelocity(),
            ...h,
            delay: -g,
            onUpdate: (w) => {
                (r.set(w), h.onUpdate && h.onUpdate(w));
            },
            onComplete: () => {
                (c(), h.onComplete && h.onComplete());
            },
            name: n,
            motionValue: r,
            element: d ? void 0 : l,
        };
        (Bw(h) || (x = { ...x, ...Iw(n, x) }),
            x.duration && (x.duration = Qt(x.duration)),
            x.repeatDelay && (x.repeatDelay = Qt(x.repeatDelay)),
            x.from !== void 0 && (x.keyframes[0] = x.from));
        let v = !1;
        if (
            ((x.type === !1 || (x.duration === 0 && !x.repeatDelay)) &&
                ((x.duration = 0), x.delay === 0 && (v = !0)),
            v && !d && r.get() !== void 0)
        ) {
            const w = Eo(x.keyframes, h);
            if (w !== void 0)
                return (
                    Te.update(() => {
                        (x.onUpdate(w), x.onComplete());
                    }),
                    new o1([])
                );
        }
        return !d && Ih.supports(x) ? new Ih(x) : new Ju(x);
    };
function Uw({ protectedKeys: n, needsAnimating: r }, s) {
    const a = n.hasOwnProperty(s) && r[s] !== !0;
    return ((r[s] = !1), a);
}
function bg(n, r, { delay: s = 0, transitionOverride: a, type: l } = {}) {
    var d;
    let {
        transition: c = n.getDefaultTransition(),
        transitionEnd: h,
        ...m
    } = r;
    a && (c = a);
    const g = [],
        x = l && n.animationState && n.animationState.getState()[l];
    for (const v in m) {
        const w = n.getValue(
                v,
                (d = n.latestValues[v]) !== null && d !== void 0 ? d : null,
            ),
            j = m[v];
        if (j === void 0 || (x && Uw(x, v))) continue;
        const z = { delay: s, ...Ou(c || {}, v) };
        let T = !1;
        if (window.MotionHandoffAnimation) {
            const N = Km(n);
            if (N) {
                const C = window.MotionHandoffAnimation(N, v, Te);
                C !== null && ((z.startTime = C), (T = !0));
            }
        }
        (nu(n, v),
            w.start(
                ec(
                    v,
                    w,
                    j,
                    n.shouldReduceMotion && $m.has(v) ? { type: !1 } : z,
                    n,
                    T,
                ),
            ));
        const b = w.animation;
        b && g.push(b);
    }
    return (
        h &&
            Promise.all(g).then(() => {
                Te.update(() => {
                    h && w1(n, h);
                });
            }),
        g
    );
}
function uu(n, r, s = {}) {
    var a;
    const l = To(
        n,
        r,
        s.type === "exit"
            ? (a = n.presenceContext) === null || a === void 0
                ? void 0
                : a.custom
            : void 0,
    );
    let { transition: d = n.getDefaultTransition() || {} } = l || {};
    s.transitionOverride && (d = s.transitionOverride);
    const c = l ? () => Promise.all(bg(n, l, s)) : () => Promise.resolve(),
        h =
            n.variantChildren && n.variantChildren.size
                ? (g = 0) => {
                      const {
                          delayChildren: x = 0,
                          staggerChildren: v,
                          staggerDirection: w,
                      } = d;
                      return Ww(n, r, x + g, v, w, s);
                  }
                : () => Promise.resolve(),
        { when: m } = d;
    if (m) {
        const [g, x] = m === "beforeChildren" ? [c, h] : [h, c];
        return g().then(() => x());
    } else return Promise.all([c(), h(s.delay)]);
}
function Ww(n, r, s = 0, a = 0, l = 1, d) {
    const c = [],
        h = (n.variantChildren.size - 1) * a,
        m = l === 1 ? (g = 0) => g * a : (g = 0) => h - g * a;
    return (
        Array.from(n.variantChildren)
            .sort($w)
            .forEach((g, x) => {
                (g.notify("AnimationStart", r),
                    c.push(
                        uu(g, r, { ...d, delay: s + m(x) }).then(() =>
                            g.notify("AnimationComplete", r),
                        ),
                    ));
            }),
        Promise.all(c)
    );
}
function $w(n, r) {
    return n.sortNodePosition(r);
}
function Hw(n, r, s = {}) {
    n.notify("AnimationStart", r);
    let a;
    if (Array.isArray(r)) {
        const l = r.map((d) => uu(n, d, s));
        a = Promise.all(l);
    } else if (typeof r == "string") a = uu(n, r, s);
    else {
        const l = typeof r == "function" ? To(n, r, s.custom) : r;
        a = Promise.all(bg(n, l, s));
    }
    return a.then(() => {
        n.notify("AnimationComplete", r);
    });
}
const Kw = Tu.length;
function kg(n) {
    if (!n) return;
    if (!n.isControllingVariants) {
        const s = n.parent ? kg(n.parent) || {} : {};
        return (n.props.initial !== void 0 && (s.initial = n.props.initial), s);
    }
    const r = {};
    for (let s = 0; s < Kw; s++) {
        const a = Tu[s],
            l = n.props[a];
        (Ni(l) || l === !1) && (r[a] = l);
    }
    return r;
}
const Gw = [...Pu].reverse(),
    Yw = Pu.length;
function Xw(n) {
    return (r) =>
        Promise.all(r.map(({ animation: s, options: a }) => Hw(n, s, a)));
}
function qw(n) {
    let r = Xw(n),
        s = Bh(),
        a = !0;
    const l = (m) => (g, x) => {
        var v;
        const w = To(
            n,
            x,
            m === "exit"
                ? (v = n.presenceContext) === null || v === void 0
                    ? void 0
                    : v.custom
                : void 0,
        );
        if (w) {
            const { transition: j, transitionEnd: z, ...T } = w;
            g = { ...g, ...T, ...z };
        }
        return g;
    };
    function d(m) {
        r = m(n);
    }
    function c(m) {
        const { props: g } = n,
            x = kg(n.parent) || {},
            v = [],
            w = new Set();
        let j = {},
            z = 1 / 0;
        for (let b = 0; b < Yw; b++) {
            const N = Gw[b],
                C = s[N],
                M = g[N] !== void 0 ? g[N] : x[N],
                V = Ni(M),
                O = N === m ? C.isActive : null;
            O === !1 && (z = b);
            let L = M === x[N] && M !== g[N] && V;
            if (
                (L && a && n.manuallyAnimateOnMount && (L = !1),
                (C.protectedKeys = { ...j }),
                (!C.isActive && O === null) ||
                    (!M && !C.prevProp) ||
                    jo(M) ||
                    typeof M == "boolean")
            )
                continue;
            const E = Qw(C.prevProp, M);
            let R = E || (N === m && C.isActive && !L && V) || (b > z && V),
                G = !1;
            const te = Array.isArray(M) ? M : [M];
            let se = te.reduce(l(N), {});
            O === !1 && (se = {});
            const { prevResolvedValues: xe = {} } = C,
                le = { ...xe, ...se },
                ye = (K) => {
                    ((R = !0),
                        w.has(K) && ((G = !0), w.delete(K)),
                        (C.needsAnimating[K] = !0));
                    const B = n.getValue(K);
                    B && (B.liveStyle = !1);
                };
            for (const K in le) {
                const B = se[K],
                    Z = xe[K];
                if (j.hasOwnProperty(K)) continue;
                let X = !1;
                (Jl(B) && Jl(Z) ? (X = !Lm(B, Z)) : (X = B !== Z),
                    X
                        ? B != null
                            ? ye(K)
                            : w.add(K)
                        : B !== void 0 && w.has(K)
                          ? ye(K)
                          : (C.protectedKeys[K] = !0));
            }
            ((C.prevProp = M),
                (C.prevResolvedValues = se),
                C.isActive && (j = { ...j, ...se }),
                a && n.blockInitialAnimation && (R = !1),
                R &&
                    (!(L && E) || G) &&
                    v.push(
                        ...te.map((K) => ({
                            animation: K,
                            options: { type: N },
                        })),
                    ));
        }
        if (w.size) {
            const b = {};
            (w.forEach((N) => {
                const C = n.getBaseTarget(N),
                    M = n.getValue(N);
                (M && (M.liveStyle = !0), (b[N] = C ?? null));
            }),
                v.push({ animation: b }));
        }
        let T = !!v.length;
        return (
            a &&
                (g.initial === !1 || g.initial === g.animate) &&
                !n.manuallyAnimateOnMount &&
                (T = !1),
            (a = !1),
            T ? r(v) : Promise.resolve()
        );
    }
    function h(m, g) {
        var x;
        if (s[m].isActive === g) return Promise.resolve();
        ((x = n.variantChildren) === null ||
            x === void 0 ||
            x.forEach((w) => {
                var j;
                return (j = w.animationState) === null || j === void 0
                    ? void 0
                    : j.setActive(m, g);
            }),
            (s[m].isActive = g));
        const v = c(m);
        for (const w in s) s[w].protectedKeys = {};
        return v;
    }
    return {
        animateChanges: c,
        setActive: h,
        setAnimateFunction: d,
        getState: () => s,
        reset: () => {
            ((s = Bh()), (a = !0));
        },
    };
}
function Qw(n, r) {
    return typeof r == "string" ? r !== n : Array.isArray(r) ? !Lm(r, n) : !1;
}
function On(n = !1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function Bh() {
    return {
        animate: On(!0),
        whileInView: On(),
        whileHover: On(),
        whileTap: On(),
        whileDrag: On(),
        whileFocus: On(),
        exit: On(),
    };
}
class jn {
    constructor(r) {
        ((this.isMounted = !1), (this.node = r));
    }
    update() {}
}
class Zw extends jn {
    constructor(r) {
        (super(r), r.animationState || (r.animationState = qw(r)));
    }
    updateAnimationControlsSubscription() {
        const { animate: r } = this.node.getProps();
        jo(r) && (this.unmountControls = r.subscribe(this.node));
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate: r } = this.node.getProps(),
            { animate: s } = this.node.prevProps || {};
        r !== s && this.updateAnimationControlsSubscription();
    }
    unmount() {
        var r;
        (this.node.animationState.reset(),
            (r = this.unmountControls) === null ||
                r === void 0 ||
                r.call(this));
    }
}
let Jw = 0;
class e2 extends jn {
    constructor() {
        (super(...arguments), (this.id = Jw++));
    }
    update() {
        if (!this.node.presenceContext) return;
        const { isPresent: r, onExitComplete: s } = this.node.presenceContext,
            { isPresent: a } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || r === a) return;
        const l = this.node.animationState.setActive("exit", !r);
        s && !r && l.then(() => s(this.id));
    }
    mount() {
        const { register: r } = this.node.presenceContext || {};
        r && (this.unmount = r(this.id));
    }
    unmount() {}
}
const t2 = { animation: { Feature: Zw }, exit: { Feature: e2 } };
function Ai(n, r, s, a = { passive: !0 }) {
    return (n.addEventListener(r, s, a), () => n.removeEventListener(r, s));
}
function Fi(n) {
    return { point: { x: n.pageX, y: n.pageY } };
}
const n2 = (n) => (r) => Uu(r) && n(r, Fi(r));
function Pi(n, r, s, a) {
    return Ai(n, r, n2(s), a);
}
const Uh = (n, r) => Math.abs(n - r);
function r2(n, r) {
    const s = Uh(n.x, r.x),
        a = Uh(n.y, r.y);
    return Math.sqrt(s ** 2 + a ** 2);
}
class Cg {
    constructor(
        r,
        s,
        {
            transformPagePoint: a,
            contextWindow: l,
            dragSnapToOrigin: d = !1,
        } = {},
    ) {
        if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const v = Ol(this.lastMoveEventInfo, this.history),
                    w = this.startEvent !== null,
                    j = r2(v.offset, { x: 0, y: 0 }) >= 3;
                if (!w && !j) return;
                const { point: z } = v,
                    { timestamp: T } = Ye;
                this.history.push({ ...z, timestamp: T });
                const { onStart: b, onMove: N } = this.handlers;
                (w ||
                    (b && b(this.lastMoveEvent, v),
                    (this.startEvent = this.lastMoveEvent)),
                    N && N(this.lastMoveEvent, v));
            }),
            (this.handlePointerMove = (v, w) => {
                ((this.lastMoveEvent = v),
                    (this.lastMoveEventInfo = Fl(w, this.transformPagePoint)),
                    Te.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (v, w) => {
                this.end();
                const {
                    onEnd: j,
                    onSessionEnd: z,
                    resumeAnimation: T,
                } = this.handlers;
                if (
                    (this.dragSnapToOrigin && T && T(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                )
                    return;
                const b = Ol(
                    v.type === "pointercancel"
                        ? this.lastMoveEventInfo
                        : Fl(w, this.transformPagePoint),
                    this.history,
                );
                (this.startEvent && j && j(v, b), z && z(v, b));
            }),
            !Uu(r))
        )
            return;
        ((this.dragSnapToOrigin = d),
            (this.handlers = s),
            (this.transformPagePoint = a),
            (this.contextWindow = l || window));
        const c = Fi(r),
            h = Fl(c, this.transformPagePoint),
            { point: m } = h,
            { timestamp: g } = Ye;
        this.history = [{ ...m, timestamp: g }];
        const { onSessionStart: x } = s;
        (x && x(r, Ol(h, this.history)),
            (this.removeListeners = Vi(
                Pi(this.contextWindow, "pointermove", this.handlePointerMove),
                Pi(this.contextWindow, "pointerup", this.handlePointerUp),
                Pi(this.contextWindow, "pointercancel", this.handlePointerUp),
            )));
    }
    updateHandlers(r) {
        this.handlers = r;
    }
    end() {
        (this.removeListeners && this.removeListeners(), kn(this.updatePoint));
    }
}
function Fl(n, r) {
    return r ? { point: r(n.point) } : n;
}
function Wh(n, r) {
    return { x: n.x - r.x, y: n.y - r.y };
}
function Ol({ point: n }, r) {
    return {
        point: n,
        delta: Wh(n, jg(r)),
        offset: Wh(n, i2(r)),
        velocity: s2(r, 0.1),
    };
}
function i2(n) {
    return n[0];
}
function jg(n) {
    return n[n.length - 1];
}
function s2(n, r) {
    if (n.length < 2) return { x: 0, y: 0 };
    let s = n.length - 1,
        a = null;
    const l = jg(n);
    for (; s >= 0 && ((a = n[s]), !(l.timestamp - a.timestamp > Qt(r))); ) s--;
    if (!a) return { x: 0, y: 0 };
    const d = Zt(l.timestamp - a.timestamp);
    if (d === 0) return { x: 0, y: 0 };
    const c = { x: (l.x - a.x) / d, y: (l.y - a.y) / d };
    return (c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c);
}
const Pg = 1e-4,
    o2 = 1 - Pg,
    a2 = 1 + Pg,
    Tg = 0.01,
    l2 = 0 - Tg,
    u2 = 0 + Tg;
function yt(n) {
    return n.max - n.min;
}
function c2(n, r, s) {
    return Math.abs(n - r) <= s;
}
function $h(n, r, s, a = 0.5) {
    ((n.origin = a),
        (n.originPoint = Re(r.min, r.max, n.origin)),
        (n.scale = yt(s) / yt(r)),
        (n.translate = Re(s.min, s.max, n.origin) - n.originPoint),
        ((n.scale >= o2 && n.scale <= a2) || isNaN(n.scale)) && (n.scale = 1),
        ((n.translate >= l2 && n.translate <= u2) || isNaN(n.translate)) &&
            (n.translate = 0));
}
function Ti(n, r, s, a) {
    ($h(n.x, r.x, s.x, a ? a.originX : void 0),
        $h(n.y, r.y, s.y, a ? a.originY : void 0));
}
function Hh(n, r, s) {
    ((n.min = s.min + r.min), (n.max = n.min + yt(r)));
}
function d2(n, r, s) {
    (Hh(n.x, r.x, s.x), Hh(n.y, r.y, s.y));
}
function Kh(n, r, s) {
    ((n.min = r.min - s.min), (n.max = n.min + yt(r)));
}
function Ei(n, r, s) {
    (Kh(n.x, r.x, s.x), Kh(n.y, r.y, s.y));
}
function f2(n, { min: r, max: s }, a) {
    return (
        r !== void 0 && n < r
            ? (n = a ? Re(r, n, a.min) : Math.max(n, r))
            : s !== void 0 &&
              n > s &&
              (n = a ? Re(s, n, a.max) : Math.min(n, s)),
        n
    );
}
function Gh(n, r, s) {
    return {
        min: r !== void 0 ? n.min + r : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0,
    };
}
function h2(n, { top: r, left: s, bottom: a, right: l }) {
    return { x: Gh(n.x, s, l), y: Gh(n.y, r, a) };
}
function Yh(n, r) {
    let s = r.min - n.min,
        a = r.max - n.max;
    return (
        r.max - r.min < n.max - n.min && ([s, a] = [a, s]),
        { min: s, max: a }
    );
}
function p2(n, r) {
    return { x: Yh(n.x, r.x), y: Yh(n.y, r.y) };
}
function m2(n, r) {
    let s = 0.5;
    const a = yt(n),
        l = yt(r);
    return (
        l > a
            ? (s = kr(r.min, r.max - a, n.min))
            : a > l && (s = kr(n.min, n.max - l, r.min)),
        Jt(0, 1, s)
    );
}
function g2(n, r) {
    const s = {};
    return (
        r.min !== void 0 && (s.min = r.min - n.min),
        r.max !== void 0 && (s.max = r.max - n.min),
        s
    );
}
const cu = 0.35;
function y2(n = cu) {
    return (
        n === !1 ? (n = 0) : n === !0 && (n = cu),
        { x: Xh(n, "left", "right"), y: Xh(n, "top", "bottom") }
    );
}
function Xh(n, r, s) {
    return { min: qh(n, r), max: qh(n, s) };
}
function qh(n, r) {
    return typeof n == "number" ? n : n[r] || 0;
}
const Qh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    xr = () => ({ x: Qh(), y: Qh() }),
    Zh = () => ({ min: 0, max: 0 }),
    Fe = () => ({ x: Zh(), y: Zh() });
function jt(n) {
    return [n("x"), n("y")];
}
function Eg({ top: n, left: r, right: s, bottom: a }) {
    return { x: { min: r, max: s }, y: { min: n, max: a } };
}
function v2({ x: n, y: r }) {
    return { top: r.min, right: n.max, bottom: r.max, left: n.min };
}
function x2(n, r) {
    if (!r) return n;
    const s = r({ x: n.left, y: n.top }),
        a = r({ x: n.right, y: n.bottom });
    return { top: s.y, left: s.x, bottom: a.y, right: a.x };
}
function Il(n) {
    return n === void 0 || n === 1;
}
function du({ scale: n, scaleX: r, scaleY: s }) {
    return !Il(n) || !Il(r) || !Il(s);
}
function In(n) {
    return (
        du(n) ||
        Ng(n) ||
        n.z ||
        n.rotate ||
        n.rotateX ||
        n.rotateY ||
        n.skewX ||
        n.skewY
    );
}
function Ng(n) {
    return Jh(n.x) || Jh(n.y);
}
function Jh(n) {
    return n && n !== "0%";
}
function wo(n, r, s) {
    const a = n - s,
        l = r * a;
    return s + l;
}
function ep(n, r, s, a, l) {
    return (l !== void 0 && (n = wo(n, l, a)), wo(n, s, a) + r);
}
function fu(n, r = 0, s = 1, a, l) {
    ((n.min = ep(n.min, r, s, a, l)), (n.max = ep(n.max, r, s, a, l)));
}
function Mg(n, { x: r, y: s }) {
    (fu(n.x, r.translate, r.scale, r.originPoint),
        fu(n.y, s.translate, s.scale, s.originPoint));
}
const tp = 0.999999999999,
    np = 1.0000000000001;
function w2(n, r, s, a = !1) {
    const l = s.length;
    if (!l) return;
    r.x = r.y = 1;
    let d, c;
    for (let h = 0; h < l; h++) {
        ((d = s[h]), (c = d.projectionDelta));
        const { visualElement: m } = d.options;
        (m && m.props.style && m.props.style.display === "contents") ||
            (a &&
                d.options.layoutScroll &&
                d.scroll &&
                d !== d.root &&
                Sr(n, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
            c && ((r.x *= c.x.scale), (r.y *= c.y.scale), Mg(n, c)),
            a && In(d.latestValues) && Sr(n, d.latestValues));
    }
    (r.x < np && r.x > tp && (r.x = 1), r.y < np && r.y > tp && (r.y = 1));
}
function wr(n, r) {
    ((n.min = n.min + r), (n.max = n.max + r));
}
function rp(n, r, s, a, l = 0.5) {
    const d = Re(n.min, n.max, l);
    fu(n, r, s, d, a);
}
function Sr(n, r) {
    (rp(n.x, r.x, r.scaleX, r.scale, r.originX),
        rp(n.y, r.y, r.scaleY, r.scale, r.originY));
}
function Dg(n, r) {
    return Eg(x2(n.getBoundingClientRect(), r));
}
function S2(n, r, s) {
    const a = Dg(n, s),
        { scroll: l } = r;
    return (l && (wr(a.x, l.offset.x), wr(a.y, l.offset.y)), a);
}
const Rg = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
    b2 = new WeakMap();
class k2 {
    constructor(r) {
        ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Fe()),
            (this.visualElement = r));
    }
    start(r, { snapToCursor: s = !1 } = {}) {
        const { presenceContext: a } = this.visualElement;
        if (a && a.isPresent === !1) return;
        const l = (x) => {
                const { dragSnapToOrigin: v } = this.getProps();
                (v ? this.pauseAnimation() : this.stopAnimation(),
                    s && this.snapToCursor(Fi(x).point));
            },
            d = (x, v) => {
                const {
                    drag: w,
                    dragPropagation: j,
                    onDragStart: z,
                } = this.getProps();
                if (
                    w &&
                    !j &&
                    (this.openDragLock && this.openDragLock(),
                    (this.openDragLock = m1(w)),
                    !this.openDragLock)
                )
                    return;
                ((this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                        ((this.visualElement.projection.isAnimationBlocked =
                            !0),
                        (this.visualElement.projection.target = void 0)),
                    jt((b) => {
                        let N = this.getAxisMotionValue(b).get() || 0;
                        if (Bt.test(N)) {
                            const { projection: C } = this.visualElement;
                            if (C && C.layout) {
                                const M = C.layout.layoutBox[b];
                                M && (N = yt(M) * (parseFloat(N) / 100));
                            }
                        }
                        this.originPoint[b] = N;
                    }),
                    z && Te.postRender(() => z(x, v)),
                    nu(this.visualElement, "transform"));
                const { animationState: T } = this.visualElement;
                T && T.setActive("whileDrag", !0);
            },
            c = (x, v) => {
                const {
                    dragPropagation: w,
                    dragDirectionLock: j,
                    onDirectionLock: z,
                    onDrag: T,
                } = this.getProps();
                if (!w && !this.openDragLock) return;
                const { offset: b } = v;
                if (j && this.currentDirection === null) {
                    ((this.currentDirection = C2(b)),
                        this.currentDirection !== null &&
                            z &&
                            z(this.currentDirection));
                    return;
                }
                (this.updateAxis("x", v.point, b),
                    this.updateAxis("y", v.point, b),
                    this.visualElement.render(),
                    T && T(x, v));
            },
            h = (x, v) => this.stop(x, v),
            m = () =>
                jt((x) => {
                    var v;
                    return (
                        this.getAnimationState(x) === "paused" &&
                        ((v = this.getAxisMotionValue(x).animation) === null ||
                        v === void 0
                            ? void 0
                            : v.play())
                    );
                }),
            { dragSnapToOrigin: g } = this.getProps();
        this.panSession = new Cg(
            r,
            {
                onSessionStart: l,
                onStart: d,
                onMove: c,
                onSessionEnd: h,
                resumeAnimation: m,
            },
            {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: g,
                contextWindow: Rg(this.visualElement),
            },
        );
    }
    stop(r, s) {
        const a = this.isDragging;
        if ((this.cancel(), !a)) return;
        const { velocity: l } = s;
        this.startAnimation(l);
        const { onDragEnd: d } = this.getProps();
        d && Te.postRender(() => d(r, s));
    }
    cancel() {
        this.isDragging = !1;
        const { projection: r, animationState: s } = this.visualElement;
        (r && (r.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0));
        const { dragPropagation: a } = this.getProps();
        (!a &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            s && s.setActive("whileDrag", !1));
    }
    updateAxis(r, s, a) {
        const { drag: l } = this.getProps();
        if (!a || !eo(r, l, this.currentDirection)) return;
        const d = this.getAxisMotionValue(r);
        let c = this.originPoint[r] + a[r];
        (this.constraints &&
            this.constraints[r] &&
            (c = f2(c, this.constraints[r], this.elastic[r])),
            d.set(c));
    }
    resolveConstraints() {
        var r;
        const { dragConstraints: s, dragElastic: a } = this.getProps(),
            l =
                this.visualElement.projection &&
                !this.visualElement.projection.layout
                    ? this.visualElement.projection.measure(!1)
                    : (r = this.visualElement.projection) === null ||
                        r === void 0
                      ? void 0
                      : r.layout,
            d = this.constraints;
        (s && yr(s)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : s && l
              ? (this.constraints = h2(l.layoutBox, s))
              : (this.constraints = !1),
            (this.elastic = y2(a)),
            d !== this.constraints &&
                l &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                jt((c) => {
                    this.constraints !== !1 &&
                        this.getAxisMotionValue(c) &&
                        (this.constraints[c] = g2(
                            l.layoutBox[c],
                            this.constraints[c],
                        ));
                }));
    }
    resolveRefConstraints() {
        const { dragConstraints: r, onMeasureDragConstraints: s } =
            this.getProps();
        if (!r || !yr(r)) return !1;
        const a = r.current,
            { projection: l } = this.visualElement;
        if (!l || !l.layout) return !1;
        const d = S2(a, l.root, this.visualElement.getTransformPagePoint());
        let c = p2(l.layout.layoutBox, d);
        if (s) {
            const h = s(v2(c));
            ((this.hasMutatedConstraints = !!h), h && (c = Eg(h)));
        }
        return c;
    }
    startAnimation(r) {
        const {
                drag: s,
                dragMomentum: a,
                dragElastic: l,
                dragTransition: d,
                dragSnapToOrigin: c,
                onDragTransitionEnd: h,
            } = this.getProps(),
            m = this.constraints || {},
            g = jt((x) => {
                if (!eo(x, s, this.currentDirection)) return;
                let v = (m && m[x]) || {};
                c && (v = { min: 0, max: 0 });
                const w = l ? 200 : 1e6,
                    j = l ? 40 : 1e7,
                    z = {
                        type: "inertia",
                        velocity: a ? r[x] : 0,
                        bounceStiffness: w,
                        bounceDamping: j,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...d,
                        ...v,
                    };
                return this.startAxisValueAnimation(x, z);
            });
        return Promise.all(g).then(h);
    }
    startAxisValueAnimation(r, s) {
        const a = this.getAxisMotionValue(r);
        return (
            nu(this.visualElement, r),
            a.start(ec(r, a, 0, s, this.visualElement, !1))
        );
    }
    stopAnimation() {
        jt((r) => this.getAxisMotionValue(r).stop());
    }
    pauseAnimation() {
        jt((r) => {
            var s;
            return (s = this.getAxisMotionValue(r).animation) === null ||
                s === void 0
                ? void 0
                : s.pause();
        });
    }
    getAnimationState(r) {
        var s;
        return (s = this.getAxisMotionValue(r).animation) === null ||
            s === void 0
            ? void 0
            : s.state;
    }
    getAxisMotionValue(r) {
        const s = `_drag${r.toUpperCase()}`,
            a = this.visualElement.getProps(),
            l = a[s];
        return (
            l ||
            this.visualElement.getValue(
                r,
                (a.initial ? a.initial[r] : void 0) || 0,
            )
        );
    }
    snapToCursor(r) {
        jt((s) => {
            const { drag: a } = this.getProps();
            if (!eo(s, a, this.currentDirection)) return;
            const { projection: l } = this.visualElement,
                d = this.getAxisMotionValue(s);
            if (l && l.layout) {
                const { min: c, max: h } = l.layout.layoutBox[s];
                d.set(r[s] - Re(c, h, 0.5));
            }
        });
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: r, dragConstraints: s } = this.getProps(),
            { projection: a } = this.visualElement;
        if (!yr(s) || !a || !this.constraints) return;
        this.stopAnimation();
        const l = { x: 0, y: 0 };
        jt((c) => {
            const h = this.getAxisMotionValue(c);
            if (h && this.constraints !== !1) {
                const m = h.get();
                l[c] = m2({ min: m, max: m }, this.constraints[c]);
            }
        });
        const { transformTemplate: d } = this.visualElement.getProps();
        ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
            a.root && a.root.updateScroll(),
            a.updateLayout(),
            this.resolveConstraints(),
            jt((c) => {
                if (!eo(c, r, null)) return;
                const h = this.getAxisMotionValue(c),
                    { min: m, max: g } = this.constraints[c];
                h.set(Re(m, g, l[c]));
            }));
    }
    addListeners() {
        if (!this.visualElement.current) return;
        b2.set(this.visualElement, this);
        const r = this.visualElement.current,
            s = Pi(r, "pointerdown", (m) => {
                const { drag: g, dragListener: x = !0 } = this.getProps();
                g && x && this.start(m);
            }),
            a = () => {
                const { dragConstraints: m } = this.getProps();
                yr(m) &&
                    m.current &&
                    (this.constraints = this.resolveRefConstraints());
            },
            { projection: l } = this.visualElement,
            d = l.addEventListener("measure", a);
        (l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()),
            Te.read(a));
        const c = Ai(window, "resize", () =>
                this.scalePositionWithinConstraints(),
            ),
            h = l.addEventListener(
                "didUpdate",
                ({ delta: m, hasLayoutChanged: g }) => {
                    this.isDragging &&
                        g &&
                        (jt((x) => {
                            const v = this.getAxisMotionValue(x);
                            v &&
                                ((this.originPoint[x] += m[x].translate),
                                v.set(v.get() + m[x].translate));
                        }),
                        this.visualElement.render());
                },
            );
        return () => {
            (c(), s(), d(), h && h());
        };
    }
    getProps() {
        const r = this.visualElement.getProps(),
            {
                drag: s = !1,
                dragDirectionLock: a = !1,
                dragPropagation: l = !1,
                dragConstraints: d = !1,
                dragElastic: c = cu,
                dragMomentum: h = !0,
            } = r;
        return {
            ...r,
            drag: s,
            dragDirectionLock: a,
            dragPropagation: l,
            dragConstraints: d,
            dragElastic: c,
            dragMomentum: h,
        };
    }
}
function eo(n, r, s) {
    return (r === !0 || r === n) && (s === null || s === n);
}
function C2(n, r = 10) {
    let s = null;
    return (Math.abs(n.y) > r ? (s = "y") : Math.abs(n.x) > r && (s = "x"), s);
}
class j2 extends jn {
    constructor(r) {
        (super(r),
            (this.removeGroupControls = gt),
            (this.removeListeners = gt),
            (this.controls = new k2(r)));
    }
    mount() {
        const { dragControls: r } = this.node.getProps();
        (r && (this.removeGroupControls = r.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || gt));
    }
    unmount() {
        (this.removeGroupControls(), this.removeListeners());
    }
}
const ip = (n) => (r, s) => {
    n && Te.postRender(() => n(r, s));
};
class P2 extends jn {
    constructor() {
        (super(...arguments), (this.removePointerDownListener = gt));
    }
    onPointerDown(r) {
        this.session = new Cg(r, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Rg(this.node),
        });
    }
    createPanHandlers() {
        const {
            onPanSessionStart: r,
            onPanStart: s,
            onPan: a,
            onPanEnd: l,
        } = this.node.getProps();
        return {
            onSessionStart: ip(r),
            onStart: ip(s),
            onMove: a,
            onEnd: (d, c) => {
                (delete this.session, l && Te.postRender(() => l(d, c)));
            },
        };
    }
    mount() {
        this.removePointerDownListener = Pi(
            this.node.current,
            "pointerdown",
            (r) => this.onPointerDown(r),
        );
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        (this.removePointerDownListener(), this.session && this.session.end());
    }
}
const co = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function sp(n, r) {
    return r.max === r.min ? 0 : (n / (r.max - r.min)) * 100;
}
const gi = {
        correct: (n, r) => {
            if (!r.target) return n;
            if (typeof n == "string")
                if (oe.test(n)) n = parseFloat(n);
                else return n;
            const s = sp(n, r.target.x),
                a = sp(n, r.target.y);
            return `${s}% ${a}%`;
        },
    },
    T2 = {
        correct: (n, { treeScale: r, projectionDelta: s }) => {
            const a = n,
                l = Cn.parse(n);
            if (l.length > 5) return a;
            const d = Cn.createTransformer(n),
                c = typeof l[0] != "number" ? 1 : 0,
                h = s.x.scale * r.x,
                m = s.y.scale * r.y;
            ((l[0 + c] /= h), (l[1 + c] /= m));
            const g = Re(h, m, 0.5);
            return (
                typeof l[2 + c] == "number" && (l[2 + c] /= g),
                typeof l[3 + c] == "number" && (l[3 + c] /= g),
                d(l)
            );
        },
    };
class E2 extends I.Component {
    componentDidMount() {
        const {
                visualElement: r,
                layoutGroup: s,
                switchLayoutGroup: a,
                layoutId: l,
            } = this.props,
            { projection: d } = r;
        (Yx(N2),
            d &&
                (s.group && s.group.add(d),
                a && a.register && l && a.register(d),
                d.root.didUpdate(),
                d.addEventListener("animationComplete", () => {
                    this.safeToRemove();
                }),
                d.setOptions({
                    ...d.options,
                    onExitComplete: () => this.safeToRemove(),
                })),
            (co.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(r) {
        const {
                layoutDependency: s,
                visualElement: a,
                drag: l,
                isPresent: d,
            } = this.props,
            c = a.projection;
        return (
            c &&
                ((c.isPresent = d),
                l || r.layoutDependency !== s || s === void 0
                    ? c.willUpdate()
                    : this.safeToRemove(),
                r.isPresent !== d &&
                    (d
                        ? c.promote()
                        : c.relegate() ||
                          Te.postRender(() => {
                              const h = c.getStack();
                              (!h || !h.members.length) && this.safeToRemove();
                          }))),
            null
        );
    }
    componentDidUpdate() {
        const { projection: r } = this.props.visualElement;
        r &&
            (r.root.didUpdate(),
            Nu.postRender(() => {
                !r.currentAnimation && r.isLead() && this.safeToRemove();
            }));
    }
    componentWillUnmount() {
        const {
                visualElement: r,
                layoutGroup: s,
                switchLayoutGroup: a,
            } = this.props,
            { projection: l } = r;
        l &&
            (l.scheduleCheckAfterUnmount(),
            s && s.group && s.group.remove(l),
            a && a.deregister && a.deregister(l));
    }
    safeToRemove() {
        const { safeToRemove: r } = this.props;
        r && r();
    }
    render() {
        return null;
    }
}
function Ag(n) {
    const [r, s] = mm(),
        a = I.useContext(Su);
    return p.jsx(E2, {
        ...n,
        layoutGroup: a,
        switchLayoutGroup: I.useContext(km),
        isPresent: r,
        safeToRemove: s,
    });
}
const N2 = {
    borderRadius: {
        ...gi,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: gi,
    borderTopRightRadius: gi,
    borderBottomLeftRadius: gi,
    borderBottomRightRadius: gi,
    boxShadow: T2,
};
function M2(n, r, s) {
    const a = et(n) ? n : Di(n);
    return (a.start(ec("", a, r, s)), a.animation);
}
function D2(n) {
    return n instanceof SVGElement && n.tagName !== "svg";
}
const R2 = (n, r) => n.depth - r.depth;
class A2 {
    constructor() {
        ((this.children = []), (this.isDirty = !1));
    }
    add(r) {
        (Wu(this.children, r), (this.isDirty = !0));
    }
    remove(r) {
        ($u(this.children, r), (this.isDirty = !0));
    }
    forEach(r) {
        (this.isDirty && this.children.sort(R2),
            (this.isDirty = !1),
            this.children.forEach(r));
    }
}
function z2(n, r) {
    const s = Ut.now(),
        a = ({ timestamp: l }) => {
            const d = l - s;
            d >= r && (kn(a), n(d - r));
        };
    return (Te.read(a, !0), () => kn(a));
}
const zg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    _2 = zg.length,
    op = (n) => (typeof n == "string" ? parseFloat(n) : n),
    ap = (n) => typeof n == "number" || oe.test(n);
function L2(n, r, s, a, l, d) {
    l
        ? ((n.opacity = Re(0, s.opacity !== void 0 ? s.opacity : 1, V2(a))),
          (n.opacityExit = Re(r.opacity !== void 0 ? r.opacity : 1, 0, F2(a))))
        : d &&
          (n.opacity = Re(
              r.opacity !== void 0 ? r.opacity : 1,
              s.opacity !== void 0 ? s.opacity : 1,
              a,
          ));
    for (let c = 0; c < _2; c++) {
        const h = `border${zg[c]}Radius`;
        let m = lp(r, h),
            g = lp(s, h);
        if (m === void 0 && g === void 0) continue;
        (m || (m = 0),
            g || (g = 0),
            m === 0 || g === 0 || ap(m) === ap(g)
                ? ((n[h] = Math.max(Re(op(m), op(g), a), 0)),
                  (Bt.test(g) || Bt.test(m)) && (n[h] += "%"))
                : (n[h] = g));
    }
    (r.rotate || s.rotate) && (n.rotate = Re(r.rotate || 0, s.rotate || 0, a));
}
function lp(n, r) {
    return n[r] !== void 0 ? n[r] : n.borderRadius;
}
const V2 = _g(0, 0.5, Jm),
    F2 = _g(0.5, 0.95, gt);
function _g(n, r, s) {
    return (a) => (a < n ? 0 : a > r ? 1 : s(kr(n, r, a)));
}
function up(n, r) {
    ((n.min = r.min), (n.max = r.max));
}
function Ct(n, r) {
    (up(n.x, r.x), up(n.y, r.y));
}
function cp(n, r) {
    ((n.translate = r.translate),
        (n.scale = r.scale),
        (n.originPoint = r.originPoint),
        (n.origin = r.origin));
}
function dp(n, r, s, a, l) {
    return (
        (n -= r),
        (n = wo(n, 1 / s, a)),
        l !== void 0 && (n = wo(n, 1 / l, a)),
        n
    );
}
function O2(n, r = 0, s = 1, a = 0.5, l, d = n, c = n) {
    if (
        (Bt.test(r) &&
            ((r = parseFloat(r)), (r = Re(c.min, c.max, r / 100) - c.min)),
        typeof r != "number")
    )
        return;
    let h = Re(d.min, d.max, a);
    (n === d && (h -= r),
        (n.min = dp(n.min, r, s, h, l)),
        (n.max = dp(n.max, r, s, h, l)));
}
function fp(n, r, [s, a, l], d, c) {
    O2(n, r[s], r[a], r[l], r.scale, d, c);
}
const I2 = ["x", "scaleX", "originX"],
    B2 = ["y", "scaleY", "originY"];
function hp(n, r, s, a) {
    (fp(n.x, r, I2, s ? s.x : void 0, a ? a.x : void 0),
        fp(n.y, r, B2, s ? s.y : void 0, a ? a.y : void 0));
}
function pp(n) {
    return n.translate === 0 && n.scale === 1;
}
function Lg(n) {
    return pp(n.x) && pp(n.y);
}
function mp(n, r) {
    return n.min === r.min && n.max === r.max;
}
function U2(n, r) {
    return mp(n.x, r.x) && mp(n.y, r.y);
}
function gp(n, r) {
    return (
        Math.round(n.min) === Math.round(r.min) &&
        Math.round(n.max) === Math.round(r.max)
    );
}
function Vg(n, r) {
    return gp(n.x, r.x) && gp(n.y, r.y);
}
function yp(n) {
    return yt(n.x) / yt(n.y);
}
function vp(n, r) {
    return (
        n.translate === r.translate &&
        n.scale === r.scale &&
        n.originPoint === r.originPoint
    );
}
class W2 {
    constructor() {
        this.members = [];
    }
    add(r) {
        (Wu(this.members, r), r.scheduleRender());
    }
    remove(r) {
        if (
            ($u(this.members, r),
            r === this.prevLead && (this.prevLead = void 0),
            r === this.lead)
        ) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s);
        }
    }
    relegate(r) {
        const s = this.members.findIndex((l) => r === l);
        if (s === 0) return !1;
        let a;
        for (let l = s; l >= 0; l--) {
            const d = this.members[l];
            if (d.isPresent !== !1) {
                a = d;
                break;
            }
        }
        return a ? (this.promote(a), !0) : !1;
    }
    promote(r, s) {
        const a = this.lead;
        if (r !== a && ((this.prevLead = a), (this.lead = r), r.show(), a)) {
            (a.instance && a.scheduleRender(),
                r.scheduleRender(),
                (r.resumeFrom = a),
                s && (r.resumeFrom.preserveOpacity = !0),
                a.snapshot &&
                    ((r.snapshot = a.snapshot),
                    (r.snapshot.latestValues =
                        a.animationValues || a.latestValues)),
                r.root && r.root.isUpdating && (r.isLayoutDirty = !0));
            const { crossfade: l } = r.options;
            l === !1 && a.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((r) => {
            const { options: s, resumingFrom: a } = r;
            (s.onExitComplete && s.onExitComplete(),
                a && a.options.onExitComplete && a.options.onExitComplete());
        });
    }
    scheduleRender() {
        this.members.forEach((r) => {
            r.instance && r.scheduleRender(!1);
        });
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
}
function $2(n, r, s) {
    let a = "";
    const l = n.x.translate / r.x,
        d = n.y.translate / r.y,
        c = (s == null ? void 0 : s.z) || 0;
    if (
        ((l || d || c) && (a = `translate3d(${l}px, ${d}px, ${c}px) `),
        (r.x !== 1 || r.y !== 1) && (a += `scale(${1 / r.x}, ${1 / r.y}) `),
        s)
    ) {
        const {
            transformPerspective: g,
            rotate: x,
            rotateX: v,
            rotateY: w,
            skewX: j,
            skewY: z,
        } = s;
        (g && (a = `perspective(${g}px) ${a}`),
            x && (a += `rotate(${x}deg) `),
            v && (a += `rotateX(${v}deg) `),
            w && (a += `rotateY(${w}deg) `),
            j && (a += `skewX(${j}deg) `),
            z && (a += `skewY(${z}deg) `));
    }
    const h = n.x.scale * r.x,
        m = n.y.scale * r.y;
    return ((h !== 1 || m !== 1) && (a += `scale(${h}, ${m})`), a || "none");
}
const Bn = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0,
    },
    Ci = typeof window < "u" && window.MotionDebug !== void 0,
    Bl = ["", "X", "Y", "Z"],
    H2 = { visibility: "hidden" },
    xp = 1e3;
let K2 = 0;
function Ul(n, r, s, a) {
    const { latestValues: l } = r;
    l[n] && ((s[n] = l[n]), r.setStaticValue(n, 0), a && (a[n] = 0));
}
function Fg(n) {
    if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
    const { visualElement: r } = n.options;
    if (!r) return;
    const s = Km(r);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const { layout: l, layoutId: d } = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", Te, !(l || d));
    }
    const { parent: a } = n;
    a && !a.hasCheckedOptimisedAppear && Fg(a);
}
function Og({
    attachResizeListener: n,
    defaultParent: r,
    measureScroll: s,
    checkIsScrollRoot: a,
    resetTransform: l,
}) {
    return class {
        constructor(c = {}, h = r == null ? void 0 : r()) {
            ((this.id = K2++),
                (this.animationId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.hasCheckedOptimisedAppear = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.scheduleUpdate = () => this.update()),
                (this.projectionUpdateScheduled = !1),
                (this.checkUpdateFailed = () => {
                    this.isUpdating &&
                        ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                    ((this.projectionUpdateScheduled = !1),
                        Ci &&
                            (Bn.totalNodes =
                                Bn.resolvedTargetDeltas =
                                Bn.recalculatedProjection =
                                    0),
                        this.nodes.forEach(X2),
                        this.nodes.forEach(eS),
                        this.nodes.forEach(tS),
                        this.nodes.forEach(q2),
                        Ci && window.MotionDebug.record(Bn));
                }),
                (this.resolvedRelativeTargetAt = 0),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = c),
                (this.root = h ? h.root || h : this),
                (this.path = h ? [...h.path, h] : []),
                (this.parent = h),
                (this.depth = h ? h.depth + 1 : 0));
            for (let m = 0; m < this.path.length; m++)
                this.path[m].shouldResetTransform = !0;
            this.root === this && (this.nodes = new A2());
        }
        addEventListener(c, h) {
            return (
                this.eventHandlers.has(c) ||
                    this.eventHandlers.set(c, new Hu()),
                this.eventHandlers.get(c).add(h)
            );
        }
        notifyListeners(c, ...h) {
            const m = this.eventHandlers.get(c);
            m && m.notify(...h);
        }
        hasListeners(c) {
            return this.eventHandlers.has(c);
        }
        mount(c, h = this.root.hasTreeAnimated) {
            if (this.instance) return;
            ((this.isSVG = D2(c)), (this.instance = c));
            const { layoutId: m, layout: g, visualElement: x } = this.options;
            if (
                (x && !x.current && x.mount(c),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                h && (g || m) && (this.isLayoutDirty = !0),
                n)
            ) {
                let v;
                const w = () => (this.root.updateBlockedByResize = !1);
                n(c, () => {
                    ((this.root.updateBlockedByResize = !0),
                        v && v(),
                        (v = z2(w, 250)),
                        co.hasAnimatedSinceResize &&
                            ((co.hasAnimatedSinceResize = !1),
                            this.nodes.forEach(Sp)));
                });
            }
            (m && this.root.registerSharedNode(m, this),
                this.options.animate !== !1 &&
                    x &&
                    (m || g) &&
                    this.addEventListener(
                        "didUpdate",
                        ({
                            delta: v,
                            hasLayoutChanged: w,
                            hasRelativeTargetChanged: j,
                            layout: z,
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                ((this.target = void 0),
                                    (this.relativeTarget = void 0));
                                return;
                            }
                            const T =
                                    this.options.transition ||
                                    x.getDefaultTransition() ||
                                    oS,
                                {
                                    onLayoutAnimationStart: b,
                                    onLayoutAnimationComplete: N,
                                } = x.getProps(),
                                C =
                                    !this.targetLayout ||
                                    !Vg(this.targetLayout, z) ||
                                    j,
                                M = !w && j;
                            if (
                                this.options.layoutRoot ||
                                (this.resumeFrom && this.resumeFrom.instance) ||
                                M ||
                                (w && (C || !this.currentAnimation))
                            ) {
                                (this.resumeFrom &&
                                    ((this.resumingFrom = this.resumeFrom),
                                    (this.resumingFrom.resumingFrom = void 0)),
                                    this.setAnimationOrigin(v, M));
                                const V = {
                                    ...Ou(T, "layout"),
                                    onPlay: b,
                                    onComplete: N,
                                };
                                ((x.shouldReduceMotion ||
                                    this.options.layoutRoot) &&
                                    ((V.delay = 0), (V.type = !1)),
                                    this.startAnimation(V));
                            } else
                                (w || Sp(this),
                                    this.isLead() &&
                                        this.options.onExitComplete &&
                                        this.options.onExitComplete());
                            this.targetLayout = z;
                        },
                    ));
        }
        unmount() {
            (this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this));
            const c = this.getStack();
            (c && c.remove(this),
                this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                kn(this.updateProjection));
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (
                this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                !1
            );
        }
        startUpdate() {
            this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                this.nodes && this.nodes.forEach(nS),
                this.animationId++);
        }
        getTransformTemplate() {
            const { visualElement: c } = this.options;
            return c && c.getProps().transformTemplate;
        }
        willUpdate(c = !0) {
            if (
                ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            if (
                (window.MotionCancelOptimisedAnimation &&
                    !this.hasCheckedOptimisedAppear &&
                    Fg(this),
                !this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
            )
                return;
            this.isLayoutDirty = !0;
            for (let x = 0; x < this.path.length; x++) {
                const v = this.path[x];
                ((v.shouldResetTransform = !0),
                    v.updateScroll("snapshot"),
                    v.options.layoutRoot && v.willUpdate(!1));
            }
            const { layoutId: h, layout: m } = this.options;
            if (h === void 0 && !m) return;
            const g = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = g
                ? g(this.latestValues, "")
                : void 0),
                this.updateSnapshot(),
                c && this.notifyListeners("willUpdate"));
        }
        update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                (this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(wp));
                return;
            }
            (this.isUpdating || this.nodes.forEach(Z2),
                (this.isUpdating = !1),
                this.nodes.forEach(J2),
                this.nodes.forEach(G2),
                this.nodes.forEach(Y2),
                this.clearAllSnapshots());
            const h = Ut.now();
            ((Ye.delta = Jt(0, 1e3 / 60, h - Ye.timestamp)),
                (Ye.timestamp = h),
                (Ye.isProcessing = !0),
                Rl.update.process(Ye),
                Rl.preRender.process(Ye),
                Rl.render.process(Ye),
                (Ye.isProcessing = !1));
        }
        didUpdate() {
            this.updateScheduled ||
                ((this.updateScheduled = !0), Nu.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
            (this.nodes.forEach(Q2), this.sharedNodes.forEach(rS));
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
                ((this.projectionUpdateScheduled = !0),
                Te.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
            Te.postRender(() => {
                this.isLayoutDirty
                    ? this.root.didUpdate()
                    : this.root.checkUpdateFailed();
            });
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure());
        }
        updateLayout() {
            if (
                !this.instance ||
                (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) &&
                    !this.isLayoutDirty)
            )
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let m = 0; m < this.path.length; m++)
                    this.path[m].updateScroll();
            const c = this.layout;
            ((this.layout = this.measure(!1)),
                (this.layoutCorrected = Fe()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners("measure", this.layout.layoutBox));
            const { visualElement: h } = this.options;
            h &&
                h.notify(
                    "LayoutMeasure",
                    this.layout.layoutBox,
                    c ? c.layoutBox : void 0,
                );
        }
        updateScroll(c = "measure") {
            let h = !!(this.options.layoutScroll && this.instance);
            if (
                (this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === c &&
                    (h = !1),
                h)
            ) {
                const m = a(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: m,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : m,
                };
            }
        }
        resetTransform() {
            if (!l) return;
            const c =
                    this.isLayoutDirty ||
                    this.shouldResetTransform ||
                    this.options.alwaysMeasureLayout,
                h = this.projectionDelta && !Lg(this.projectionDelta),
                m = this.getTransformTemplate(),
                g = m ? m(this.latestValues, "") : void 0,
                x = g !== this.prevTransformTemplateValue;
            c &&
                (h || In(this.latestValues) || x) &&
                (l(this.instance, g),
                (this.shouldResetTransform = !1),
                this.scheduleRender());
        }
        measure(c = !0) {
            const h = this.measurePageBox();
            let m = this.removeElementScroll(h);
            return (
                c && (m = this.removeTransform(m)),
                aS(m),
                {
                    animationId: this.root.animationId,
                    measuredBox: h,
                    layoutBox: m,
                    latestValues: {},
                    source: this.id,
                }
            );
        }
        measurePageBox() {
            var c;
            const { visualElement: h } = this.options;
            if (!h) return Fe();
            const m = h.measureViewportBox();
            if (
                !(
                    ((c = this.scroll) === null || c === void 0
                        ? void 0
                        : c.wasRoot) || this.path.some(lS)
                )
            ) {
                const { scroll: x } = this.root;
                x && (wr(m.x, x.offset.x), wr(m.y, x.offset.y));
            }
            return m;
        }
        removeElementScroll(c) {
            var h;
            const m = Fe();
            if (
                (Ct(m, c),
                !((h = this.scroll) === null || h === void 0) && h.wasRoot)
            )
                return m;
            for (let g = 0; g < this.path.length; g++) {
                const x = this.path[g],
                    { scroll: v, options: w } = x;
                x !== this.root &&
                    v &&
                    w.layoutScroll &&
                    (v.wasRoot && Ct(m, c),
                    wr(m.x, v.offset.x),
                    wr(m.y, v.offset.y));
            }
            return m;
        }
        applyTransform(c, h = !1) {
            const m = Fe();
            Ct(m, c);
            for (let g = 0; g < this.path.length; g++) {
                const x = this.path[g];
                (!h &&
                    x.options.layoutScroll &&
                    x.scroll &&
                    x !== x.root &&
                    Sr(m, { x: -x.scroll.offset.x, y: -x.scroll.offset.y }),
                    In(x.latestValues) && Sr(m, x.latestValues));
            }
            return (In(this.latestValues) && Sr(m, this.latestValues), m);
        }
        removeTransform(c) {
            const h = Fe();
            Ct(h, c);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                if (!g.instance || !In(g.latestValues)) continue;
                du(g.latestValues) && g.updateSnapshot();
                const x = Fe(),
                    v = g.measurePageBox();
                (Ct(x, v),
                    hp(
                        h,
                        g.latestValues,
                        g.snapshot ? g.snapshot.layoutBox : void 0,
                        x,
                    ));
            }
            return (In(this.latestValues) && hp(h, this.latestValues), h);
        }
        setTargetDelta(c) {
            ((this.targetDelta = c),
                this.root.scheduleUpdateProjection(),
                (this.isProjectionDirty = !0));
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0,
            };
        }
        clearMeasurements() {
            ((this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1));
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent &&
                this.relativeParent.resolvedRelativeTargetAt !== Ye.timestamp &&
                this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(c = !1) {
            var h;
            const m = this.getLead();
            (this.isProjectionDirty ||
                (this.isProjectionDirty = m.isProjectionDirty),
                this.isTransformDirty ||
                    (this.isTransformDirty = m.isTransformDirty),
                this.isSharedProjectionDirty ||
                    (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
            const g = !!this.resumingFrom || this !== m;
            if (
                !(
                    c ||
                    (g && this.isSharedProjectionDirty) ||
                    this.isProjectionDirty ||
                    (!((h = this.parent) === null || h === void 0) &&
                        h.isProjectionDirty) ||
                    this.attemptToResolveRelativeTarget ||
                    this.root.updateBlockedByResize
                )
            )
                return;
            const { layout: v, layoutId: w } = this.options;
            if (!(!this.layout || !(v || w))) {
                if (
                    ((this.resolvedRelativeTargetAt = Ye.timestamp),
                    !this.targetDelta && !this.relativeTarget)
                ) {
                    const j = this.getClosestProjectingParent();
                    j && j.layout && this.animationProgress !== 1
                        ? ((this.relativeParent = j),
                          this.forceRelativeParentToResolveTarget(),
                          (this.relativeTarget = Fe()),
                          (this.relativeTargetOrigin = Fe()),
                          Ei(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              j.layout.layoutBox,
                          ),
                          Ct(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0);
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (
                        (this.target ||
                            ((this.target = Fe()),
                            (this.targetWithTransforms = Fe())),
                        this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.relativeParent &&
                        this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(),
                              d2(
                                  this.target,
                                  this.relativeTarget,
                                  this.relativeParent.target,
                              ))
                            : this.targetDelta
                              ? (this.resumingFrom
                                    ? (this.target = this.applyTransform(
                                          this.layout.layoutBox,
                                      ))
                                    : Ct(this.target, this.layout.layoutBox),
                                Mg(this.target, this.targetDelta))
                              : Ct(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget)
                    ) {
                        this.attemptToResolveRelativeTarget = !1;
                        const j = this.getClosestProjectingParent();
                        j &&
                        !!j.resumingFrom == !!this.resumingFrom &&
                        !j.options.layoutScroll &&
                        j.target &&
                        this.animationProgress !== 1
                            ? ((this.relativeParent = j),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = Fe()),
                              (this.relativeTargetOrigin = Fe()),
                              Ei(
                                  this.relativeTargetOrigin,
                                  this.target,
                                  j.target,
                              ),
                              Ct(
                                  this.relativeTarget,
                                  this.relativeTargetOrigin,
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                  void 0);
                    }
                    Ci && Bn.resolvedTargetDeltas++;
                }
            }
        }
        getClosestProjectingParent() {
            if (
                !(
                    !this.parent ||
                    du(this.parent.latestValues) ||
                    Ng(this.parent.latestValues)
                )
            )
                return this.parent.isProjecting()
                    ? this.parent
                    : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return !!(
                (this.relativeTarget ||
                    this.targetDelta ||
                    this.options.layoutRoot) &&
                this.layout
            );
        }
        calcProjection() {
            var c;
            const h = this.getLead(),
                m = !!this.resumingFrom || this !== h;
            let g = !0;
            if (
                ((this.isProjectionDirty ||
                    (!((c = this.parent) === null || c === void 0) &&
                        c.isProjectionDirty)) &&
                    (g = !1),
                m &&
                    (this.isSharedProjectionDirty || this.isTransformDirty) &&
                    (g = !1),
                this.resolvedRelativeTargetAt === Ye.timestamp && (g = !1),
                g)
            )
                return;
            const { layout: x, layoutId: v } = this.options;
            if (
                ((this.isTreeAnimating = !!(
                    (this.parent && this.parent.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                    (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(x || v))
            )
                return;
            Ct(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x,
                j = this.treeScale.y;
            (w2(this.layoutCorrected, this.treeScale, this.path, m),
                h.layout &&
                    !h.target &&
                    (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
                    ((h.target = h.layout.layoutBox),
                    (h.targetWithTransforms = Fe())));
            const { target: z } = h;
            if (!z) {
                this.prevProjectionDelta &&
                    (this.createProjectionDeltas(), this.scheduleRender());
                return;
            }
            (!this.projectionDelta || !this.prevProjectionDelta
                ? this.createProjectionDeltas()
                : (cp(this.prevProjectionDelta.x, this.projectionDelta.x),
                  cp(this.prevProjectionDelta.y, this.projectionDelta.y)),
                Ti(
                    this.projectionDelta,
                    this.layoutCorrected,
                    z,
                    this.latestValues,
                ),
                (this.treeScale.x !== w ||
                    this.treeScale.y !== j ||
                    !vp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                    !vp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
                    ((this.hasProjected = !0),
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", z)),
                Ci && Bn.recalculatedProjection++);
        }
        hide() {
            this.isVisible = !1;
        }
        show() {
            this.isVisible = !0;
        }
        scheduleRender(c = !0) {
            var h;
            if (
                ((h = this.options.visualElement) === null ||
                    h === void 0 ||
                    h.scheduleRender(),
                c)
            ) {
                const m = this.getStack();
                m && m.scheduleRender();
            }
            this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
            ((this.prevProjectionDelta = xr()),
                (this.projectionDelta = xr()),
                (this.projectionDeltaWithTransform = xr()));
        }
        setAnimationOrigin(c, h = !1) {
            const m = this.snapshot,
                g = m ? m.latestValues : {},
                x = { ...this.latestValues },
                v = xr();
            ((!this.relativeParent ||
                !this.relativeParent.options.layoutRoot) &&
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !h));
            const w = Fe(),
                j = m ? m.source : void 0,
                z = this.layout ? this.layout.source : void 0,
                T = j !== z,
                b = this.getStack(),
                N = !b || b.members.length <= 1,
                C = !!(
                    T &&
                    !N &&
                    this.options.crossfade === !0 &&
                    !this.path.some(sS)
                );
            this.animationProgress = 0;
            let M;
            ((this.mixTargetDelta = (V) => {
                const O = V / 1e3;
                (bp(v.x, c.x, O),
                    bp(v.y, c.y, O),
                    this.setTargetDelta(v),
                    this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.layout &&
                        this.relativeParent &&
                        this.relativeParent.layout &&
                        (Ei(
                            w,
                            this.layout.layoutBox,
                            this.relativeParent.layout.layoutBox,
                        ),
                        iS(
                            this.relativeTarget,
                            this.relativeTargetOrigin,
                            w,
                            O,
                        ),
                        M &&
                            U2(this.relativeTarget, M) &&
                            (this.isProjectionDirty = !1),
                        M || (M = Fe()),
                        Ct(M, this.relativeTarget)),
                    T &&
                        ((this.animationValues = x),
                        L2(x, g, this.latestValues, O, C, N)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = O));
            }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
        }
        startAnimation(c) {
            (this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom &&
                    this.resumingFrom.currentAnimation &&
                    this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation &&
                    (kn(this.pendingAnimation),
                    (this.pendingAnimation = void 0)),
                (this.pendingAnimation = Te.update(() => {
                    ((co.hasAnimatedSinceResize = !0),
                        (this.currentAnimation = M2(0, xp, {
                            ...c,
                            onUpdate: (h) => {
                                (this.mixTargetDelta(h),
                                    c.onUpdate && c.onUpdate(h));
                            },
                            onComplete: () => {
                                (c.onComplete && c.onComplete(),
                                    this.completeAnimation());
                            },
                        })),
                        this.resumingFrom &&
                            (this.resumingFrom.currentAnimation =
                                this.currentAnimation),
                        (this.pendingAnimation = void 0));
                })));
        }
        completeAnimation() {
            this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0));
            const c = this.getStack();
            (c && c.exitAnimationComplete(),
                (this.resumingFrom =
                    this.currentAnimation =
                    this.animationValues =
                        void 0),
                this.notifyListeners("animationComplete"));
        }
        finishAnimation() {
            (this.currentAnimation &&
                (this.mixTargetDelta && this.mixTargetDelta(xp),
                this.currentAnimation.stop()),
                this.completeAnimation());
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {
                targetWithTransforms: h,
                target: m,
                layout: g,
                latestValues: x,
            } = c;
            if (!(!h || !m || !g)) {
                if (
                    this !== c &&
                    this.layout &&
                    g &&
                    Ig(
                        this.options.animationType,
                        this.layout.layoutBox,
                        g.layoutBox,
                    )
                ) {
                    m = this.target || Fe();
                    const v = yt(this.layout.layoutBox.x);
                    ((m.x.min = c.target.x.min), (m.x.max = m.x.min + v));
                    const w = yt(this.layout.layoutBox.y);
                    ((m.y.min = c.target.y.min), (m.y.max = m.y.min + w));
                }
                (Ct(h, m),
                    Sr(h, x),
                    Ti(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        h,
                        x,
                    ));
            }
        }
        registerSharedNode(c, h) {
            (this.sharedNodes.has(c) || this.sharedNodes.set(c, new W2()),
                this.sharedNodes.get(c).add(h));
            const g = h.options.initialPromotionConfig;
            h.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity:
                    g && g.shouldPreserveFollowOpacity
                        ? g.shouldPreserveFollowOpacity(h)
                        : void 0,
            });
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0;
        }
        getLead() {
            var c;
            const { layoutId: h } = this.options;
            return h
                ? ((c = this.getStack()) === null || c === void 0
                      ? void 0
                      : c.lead) || this
                : this;
        }
        getPrevLead() {
            var c;
            const { layoutId: h } = this.options;
            return h
                ? (c = this.getStack()) === null || c === void 0
                    ? void 0
                    : c.prevLead
                : void 0;
        }
        getStack() {
            const { layoutId: c } = this.options;
            if (c) return this.root.sharedNodes.get(c);
        }
        promote({
            needsReset: c,
            transition: h,
            preserveFollowOpacity: m,
        } = {}) {
            const g = this.getStack();
            (g && g.promote(this, m),
                c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                h && this.setOptions({ transition: h }));
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1;
        }
        resetSkewAndRotation() {
            const { visualElement: c } = this.options;
            if (!c) return;
            let h = !1;
            const { latestValues: m } = c;
            if (
                ((m.z ||
                    m.rotate ||
                    m.rotateX ||
                    m.rotateY ||
                    m.rotateZ ||
                    m.skewX ||
                    m.skewY) &&
                    (h = !0),
                !h)
            )
                return;
            const g = {};
            m.z && Ul("z", c, g, this.animationValues);
            for (let x = 0; x < Bl.length; x++)
                (Ul(`rotate${Bl[x]}`, c, g, this.animationValues),
                    Ul(`skew${Bl[x]}`, c, g, this.animationValues));
            c.render();
            for (const x in g)
                (c.setStaticValue(x, g[x]),
                    this.animationValues && (this.animationValues[x] = g[x]));
            c.scheduleRender();
        }
        getProjectionStyles(c) {
            var h, m;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return H2;
            const g = { visibility: "" },
                x = this.getTransformTemplate();
            if (this.needsReset)
                return (
                    (this.needsReset = !1),
                    (g.opacity = ""),
                    (g.pointerEvents =
                        lo(c == null ? void 0 : c.pointerEvents) || ""),
                    (g.transform = x ? x(this.latestValues, "") : "none"),
                    g
                );
            const v = this.getLead();
            if (!this.projectionDelta || !this.layout || !v.target) {
                const T = {};
                return (
                    this.options.layoutId &&
                        ((T.opacity =
                            this.latestValues.opacity !== void 0
                                ? this.latestValues.opacity
                                : 1),
                        (T.pointerEvents =
                            lo(c == null ? void 0 : c.pointerEvents) || "")),
                    this.hasProjected &&
                        !In(this.latestValues) &&
                        ((T.transform = x ? x({}, "") : "none"),
                        (this.hasProjected = !1)),
                    T
                );
            }
            const w = v.animationValues || v.latestValues;
            (this.applyTransformsToTarget(),
                (g.transform = $2(
                    this.projectionDeltaWithTransform,
                    this.treeScale,
                    w,
                )),
                x && (g.transform = x(w, g.transform)));
            const { x: j, y: z } = this.projectionDelta;
            ((g.transformOrigin = `${j.origin * 100}% ${z.origin * 100}% 0`),
                v.animationValues
                    ? (g.opacity =
                          v === this
                              ? (m =
                                    (h = w.opacity) !== null && h !== void 0
                                        ? h
                                        : this.latestValues.opacity) !== null &&
                                m !== void 0
                                  ? m
                                  : 1
                              : this.preserveOpacity
                                ? this.latestValues.opacity
                                : w.opacityExit)
                    : (g.opacity =
                          v === this
                              ? w.opacity !== void 0
                                  ? w.opacity
                                  : ""
                              : w.opacityExit !== void 0
                                ? w.opacityExit
                                : 0));
            for (const T in mo) {
                if (w[T] === void 0) continue;
                const { correct: b, applyTo: N } = mo[T],
                    C = g.transform === "none" ? w[T] : b(w[T], v);
                if (N) {
                    const M = N.length;
                    for (let V = 0; V < M; V++) g[N[V]] = C;
                } else g[T] = C;
            }
            return (
                this.options.layoutId &&
                    (g.pointerEvents =
                        v === this
                            ? lo(c == null ? void 0 : c.pointerEvents) || ""
                            : "none"),
                g
            );
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
            (this.root.nodes.forEach((c) => {
                var h;
                return (h = c.currentAnimation) === null || h === void 0
                    ? void 0
                    : h.stop();
            }),
                this.root.nodes.forEach(wp),
                this.root.sharedNodes.clear());
        }
    };
}
function G2(n) {
    n.updateLayout();
}
function Y2(n) {
    var r;
    const s =
        ((r = n.resumeFrom) === null || r === void 0 ? void 0 : r.snapshot) ||
        n.snapshot;
    if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
        const { layoutBox: a, measuredBox: l } = n.layout,
            { animationType: d } = n.options,
            c = s.source !== n.layout.source;
        d === "size"
            ? jt((v) => {
                  const w = c ? s.measuredBox[v] : s.layoutBox[v],
                      j = yt(w);
                  ((w.min = a[v].min), (w.max = w.min + j));
              })
            : Ig(d, s.layoutBox, a) &&
              jt((v) => {
                  const w = c ? s.measuredBox[v] : s.layoutBox[v],
                      j = yt(a[v]);
                  ((w.max = w.min + j),
                      n.relativeTarget &&
                          !n.currentAnimation &&
                          ((n.isProjectionDirty = !0),
                          (n.relativeTarget[v].max =
                              n.relativeTarget[v].min + j)));
              });
        const h = xr();
        Ti(h, a, s.layoutBox);
        const m = xr();
        c
            ? Ti(m, n.applyTransform(l, !0), s.measuredBox)
            : Ti(m, a, s.layoutBox);
        const g = !Lg(h);
        let x = !1;
        if (!n.resumeFrom) {
            const v = n.getClosestProjectingParent();
            if (v && !v.resumeFrom) {
                const { snapshot: w, layout: j } = v;
                if (w && j) {
                    const z = Fe();
                    Ei(z, s.layoutBox, w.layoutBox);
                    const T = Fe();
                    (Ei(T, a, j.layoutBox),
                        Vg(z, T) || (x = !0),
                        v.options.layoutRoot &&
                            ((n.relativeTarget = T),
                            (n.relativeTargetOrigin = z),
                            (n.relativeParent = v)));
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: a,
            snapshot: s,
            delta: m,
            layoutDelta: h,
            hasLayoutChanged: g,
            hasRelativeTargetChanged: x,
        });
    } else if (n.isLead()) {
        const { onExitComplete: a } = n.options;
        a && a();
    }
    n.options.transition = void 0;
}
function X2(n) {
    (Ci && Bn.totalNodes++,
        n.parent &&
            (n.isProjecting() ||
                (n.isProjectionDirty = n.parent.isProjectionDirty),
            n.isSharedProjectionDirty ||
                (n.isSharedProjectionDirty = !!(
                    n.isProjectionDirty ||
                    n.parent.isProjectionDirty ||
                    n.parent.isSharedProjectionDirty
                )),
            n.isTransformDirty ||
                (n.isTransformDirty = n.parent.isTransformDirty)));
}
function q2(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function Q2(n) {
    n.clearSnapshot();
}
function wp(n) {
    n.clearMeasurements();
}
function Z2(n) {
    n.isLayoutDirty = !1;
}
function J2(n) {
    const { visualElement: r } = n.options;
    (r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"),
        n.resetTransform());
}
function Sp(n) {
    (n.finishAnimation(),
        (n.targetDelta = n.relativeTarget = n.target = void 0),
        (n.isProjectionDirty = !0));
}
function eS(n) {
    n.resolveTargetDelta();
}
function tS(n) {
    n.calcProjection();
}
function nS(n) {
    n.resetSkewAndRotation();
}
function rS(n) {
    n.removeLeadSnapshot();
}
function bp(n, r, s) {
    ((n.translate = Re(r.translate, 0, s)),
        (n.scale = Re(r.scale, 1, s)),
        (n.origin = r.origin),
        (n.originPoint = r.originPoint));
}
function kp(n, r, s, a) {
    ((n.min = Re(r.min, s.min, a)), (n.max = Re(r.max, s.max, a)));
}
function iS(n, r, s, a) {
    (kp(n.x, r.x, s.x, a), kp(n.y, r.y, s.y, a));
}
function sS(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const oS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Cp = (n) =>
        typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(n),
    jp = Cp("applewebkit/") && !Cp("chrome/") ? Math.round : gt;
function Pp(n) {
    ((n.min = jp(n.min)), (n.max = jp(n.max)));
}
function aS(n) {
    (Pp(n.x), Pp(n.y));
}
function Ig(n, r, s) {
    return (
        n === "position" || (n === "preserve-aspect" && !c2(yp(r), yp(s), 0.2))
    );
}
function lS(n) {
    var r;
    return (
        n !== n.root &&
        ((r = n.scroll) === null || r === void 0 ? void 0 : r.wasRoot)
    );
}
const uS = Og({
        attachResizeListener: (n, r) => Ai(n, "resize", r),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => !0,
    }),
    Wl = { current: void 0 },
    Bg = Og({
        measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
        defaultParent: () => {
            if (!Wl.current) {
                const n = new uS({});
                (n.mount(window),
                    n.setOptions({ layoutScroll: !0 }),
                    (Wl.current = n));
            }
            return Wl.current;
        },
        resetTransform: (n, r) => {
            n.style.transform = r !== void 0 ? r : "none";
        },
        checkIsScrollRoot: (n) =>
            window.getComputedStyle(n).position === "fixed",
    }),
    cS = {
        pan: { Feature: P2 },
        drag: { Feature: j2, ProjectionNode: Bg, MeasureLayout: Ag },
    };
function Tp(n, r, s) {
    const { props: a } = n;
    n.animationState &&
        a.whileHover &&
        n.animationState.setActive("whileHover", s === "Start");
    const l = "onHover" + s,
        d = a[l];
    d && Te.postRender(() => d(r, Fi(r)));
}
class dS extends jn {
    mount() {
        const { current: r } = this.node;
        r &&
            (this.unmount = c1(
                r,
                (s) => (
                    Tp(this.node, s, "Start"),
                    (a) => Tp(this.node, a, "End")
                ),
            ));
    }
    unmount() {}
}
class fS extends jn {
    constructor() {
        (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
        let r = !1;
        try {
            r = this.node.current.matches(":focus-visible");
        } catch {
            r = !0;
        }
        !r ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
    }
    onBlur() {
        !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
    }
    mount() {
        this.unmount = Vi(
            Ai(this.node.current, "focus", () => this.onFocus()),
            Ai(this.node.current, "blur", () => this.onBlur()),
        );
    }
    unmount() {}
}
function Ep(n, r, s) {
    const { props: a } = n;
    n.animationState &&
        a.whileTap &&
        n.animationState.setActive("whileTap", s === "Start");
    const l = "onTap" + (s === "End" ? "" : s),
        d = a[l];
    d && Te.postRender(() => d(r, Fi(r)));
}
class hS extends jn {
    mount() {
        const { current: r } = this.node;
        r &&
            (this.unmount = p1(
                r,
                (s) => (
                    Ep(this.node, s, "Start"),
                    (a, { success: l }) =>
                        Ep(this.node, a, l ? "End" : "Cancel")
                ),
                { useGlobalTarget: this.node.props.globalTapTarget },
            ));
    }
    unmount() {}
}
const hu = new WeakMap(),
    $l = new WeakMap(),
    pS = (n) => {
        const r = hu.get(n.target);
        r && r(n);
    },
    mS = (n) => {
        n.forEach(pS);
    };
function gS({ root: n, ...r }) {
    const s = n || document;
    $l.has(s) || $l.set(s, {});
    const a = $l.get(s),
        l = JSON.stringify(r);
    return (
        a[l] || (a[l] = new IntersectionObserver(mS, { root: n, ...r })),
        a[l]
    );
}
function yS(n, r, s) {
    const a = gS(r);
    return (
        hu.set(n, s),
        a.observe(n),
        () => {
            (hu.delete(n), a.unobserve(n));
        }
    );
}
const vS = { some: 0, all: 1 };
class xS extends jn {
    constructor() {
        (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
        this.unmount();
        const { viewport: r = {} } = this.node.getProps(),
            { root: s, margin: a, amount: l = "some", once: d } = r,
            c = {
                root: s ? s.current : void 0,
                rootMargin: a,
                threshold: typeof l == "number" ? l : vS[l],
            },
            h = (m) => {
                const { isIntersecting: g } = m;
                if (
                    this.isInView === g ||
                    ((this.isInView = g), d && !g && this.hasEnteredView)
                )
                    return;
                (g && (this.hasEnteredView = !0),
                    this.node.animationState &&
                        this.node.animationState.setActive("whileInView", g));
                const { onViewportEnter: x, onViewportLeave: v } =
                        this.node.getProps(),
                    w = g ? x : v;
                w && w(m);
            };
        return yS(this.node.current, c, h);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: r, prevProps: s } = this.node;
        ["amount", "margin", "root"].some(wS(r, s)) && this.startObserver();
    }
    unmount() {}
}
function wS({ viewport: n = {} }, { viewport: r = {} } = {}) {
    return (s) => n[s] !== r[s];
}
const SS = {
        inView: { Feature: xS },
        tap: { Feature: hS },
        focus: { Feature: fS },
        hover: { Feature: dS },
    },
    bS = { layout: { ProjectionNode: Bg, MeasureLayout: Ag } },
    pu = { current: null },
    Ug = { current: !1 };
function kS() {
    if (((Ug.current = !0), !!Cu))
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)"),
                r = () => (pu.current = n.matches);
            (n.addListener(r), r());
        } else pu.current = !1;
}
const CS = [...hg, Je, Cn],
    jS = (n) => CS.find(fg(n)),
    Np = new WeakMap();
function PS(n, r, s) {
    for (const a in r) {
        const l = r[a],
            d = s[a];
        if (et(l)) n.addValue(a, l);
        else if (et(d)) n.addValue(a, Di(l, { owner: n }));
        else if (d !== l)
            if (n.hasValue(a)) {
                const c = n.getValue(a);
                c.liveStyle === !0 ? c.jump(l) : c.hasAnimated || c.set(l);
            } else {
                const c = n.getStaticValue(a);
                n.addValue(a, Di(c !== void 0 ? c : l, { owner: n }));
            }
    }
    for (const a in s) r[a] === void 0 && n.removeValue(a);
    return r;
}
const Mp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
class TS {
    scrapeMotionValuesFromProps(r, s, a) {
        return {};
    }
    constructor(
        {
            parent: r,
            props: s,
            presenceContext: a,
            reducedMotionConfig: l,
            blockInitialAnimation: d,
            visualState: c,
        },
        h = {},
    ) {
        ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = Qu),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
                this.notify("Update", this.latestValues)),
            (this.render = () => {
                this.current &&
                    (this.triggerBuild(),
                    this.renderInstance(
                        this.current,
                        this.renderState,
                        this.props.style,
                        this.projection,
                    ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
                const j = Ut.now();
                this.renderScheduledAt < j &&
                    ((this.renderScheduledAt = j),
                    Te.render(this.render, !1, !0));
            }));
        const { latestValues: m, renderState: g, onUpdate: x } = c;
        ((this.onUpdate = x),
            (this.latestValues = m),
            (this.baseTarget = { ...m }),
            (this.initialValues = s.initial ? { ...m } : {}),
            (this.renderState = g),
            (this.parent = r),
            (this.props = s),
            (this.presenceContext = a),
            (this.depth = r ? r.depth + 1 : 0),
            (this.reducedMotionConfig = l),
            (this.options = h),
            (this.blockInitialAnimation = !!d),
            (this.isControllingVariants = Po(s)),
            (this.isVariantNode = Sm(s)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(r && r.current)));
        const { willChange: v, ...w } = this.scrapeMotionValuesFromProps(
            s,
            {},
            this,
        );
        for (const j in w) {
            const z = w[j];
            m[j] !== void 0 && et(z) && z.set(m[j], !1);
        }
    }
    mount(r) {
        ((this.current = r),
            Np.set(r, this),
            this.projection &&
                !this.projection.instance &&
                this.projection.mount(r),
            this.parent &&
                this.isVariantNode &&
                !this.isControllingVariants &&
                (this.removeFromVariantTree =
                    this.parent.addVariantChild(this)),
            this.values.forEach((s, a) => this.bindToMotionValue(a, s)),
            Ug.current || kS(),
            (this.shouldReduceMotion =
                this.reducedMotionConfig === "never"
                    ? !1
                    : this.reducedMotionConfig === "always"
                      ? !0
                      : pu.current),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext));
    }
    unmount() {
        (Np.delete(this.current),
            this.projection && this.projection.unmount(),
            kn(this.notifyUpdate),
            kn(this.render),
            this.valueSubscriptions.forEach((r) => r()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this));
        for (const r in this.events) this.events[r].clear();
        for (const r in this.features) {
            const s = this.features[r];
            s && (s.unmount(), (s.isMounted = !1));
        }
        this.current = null;
    }
    bindToMotionValue(r, s) {
        this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)();
        const a = $n.has(r),
            l = s.on("change", (h) => {
                ((this.latestValues[r] = h),
                    this.props.onUpdate && Te.preRender(this.notifyUpdate),
                    a &&
                        this.projection &&
                        (this.projection.isTransformDirty = !0));
            }),
            d = s.on("renderRequest", this.scheduleRender);
        let c;
        (window.MotionCheckAppearSync &&
            (c = window.MotionCheckAppearSync(this, r, s)),
            this.valueSubscriptions.set(r, () => {
                (l(), d(), c && c(), s.owner && s.stop());
            }));
    }
    sortNodePosition(r) {
        return !this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== r.type
            ? 0
            : this.sortInstanceNodePosition(this.current, r.current);
    }
    updateFeatures() {
        let r = "animation";
        for (r in Cr) {
            const s = Cr[r];
            if (!s) continue;
            const { isEnabled: a, Feature: l } = s;
            if (
                (!this.features[r] &&
                    l &&
                    a(this.props) &&
                    (this.features[r] = new l(this)),
                this.features[r])
            ) {
                const d = this.features[r];
                d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : Fe();
    }
    getStaticValue(r) {
        return this.latestValues[r];
    }
    setStaticValue(r, s) {
        this.latestValues[r] = s;
    }
    update(r, s) {
        ((r.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = r),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = s));
        for (let a = 0; a < Mp.length; a++) {
            const l = Mp[a];
            this.propEventSubscriptions[l] &&
                (this.propEventSubscriptions[l](),
                delete this.propEventSubscriptions[l]);
            const d = "on" + l,
                c = r[d];
            c && (this.propEventSubscriptions[l] = this.on(l, c));
        }
        ((this.prevMotionValues = PS(
            this,
            this.scrapeMotionValuesFromProps(r, this.prevProps, this),
            this.prevMotionValues,
        )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this));
    }
    getProps() {
        return this.props;
    }
    getVariant(r) {
        return this.props.variants ? this.props.variants[r] : void 0;
    }
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
    }
    addVariantChild(r) {
        const s = this.getClosestVariantNode();
        if (s)
            return (
                s.variantChildren && s.variantChildren.add(r),
                () => s.variantChildren.delete(r)
            );
    }
    addValue(r, s) {
        const a = this.values.get(r);
        s !== a &&
            (a && this.removeValue(r),
            this.bindToMotionValue(r, s),
            this.values.set(r, s),
            (this.latestValues[r] = s.get()));
    }
    removeValue(r) {
        this.values.delete(r);
        const s = this.valueSubscriptions.get(r);
        (s && (s(), this.valueSubscriptions.delete(r)),
            delete this.latestValues[r],
            this.removeValueFromRenderState(r, this.renderState));
    }
    hasValue(r) {
        return this.values.has(r);
    }
    getValue(r, s) {
        if (this.props.values && this.props.values[r])
            return this.props.values[r];
        let a = this.values.get(r);
        return (
            a === void 0 &&
                s !== void 0 &&
                ((a = Di(s === null ? void 0 : s, { owner: this })),
                this.addValue(r, a)),
            a
        );
    }
    readValue(r, s) {
        var a;
        let l =
            this.latestValues[r] !== void 0 || !this.current
                ? this.latestValues[r]
                : (a = this.getBaseTargetFromProps(this.props, r)) !== null &&
                    a !== void 0
                  ? a
                  : this.readValueFromInstance(this.current, r, this.options);
        return (
            l != null &&
                (typeof l == "string" && (cg(l) || tg(l))
                    ? (l = parseFloat(l))
                    : !jS(l) && Cn.test(s) && (l = ag(r, s)),
                this.setBaseTarget(r, et(l) ? l.get() : l)),
            et(l) ? l.get() : l
        );
    }
    setBaseTarget(r, s) {
        this.baseTarget[r] = s;
    }
    getBaseTarget(r) {
        var s;
        const { initial: a } = this.props;
        let l;
        if (typeof a == "string" || typeof a == "object") {
            const c = Du(
                this.props,
                a,
                (s = this.presenceContext) === null || s === void 0
                    ? void 0
                    : s.custom,
            );
            c && (l = c[r]);
        }
        if (a && l !== void 0) return l;
        const d = this.getBaseTargetFromProps(this.props, r);
        return d !== void 0 && !et(d)
            ? d
            : this.initialValues[r] !== void 0 && l === void 0
              ? void 0
              : this.baseTarget[r];
    }
    on(r, s) {
        return (
            this.events[r] || (this.events[r] = new Hu()),
            this.events[r].add(s)
        );
    }
    notify(r, ...s) {
        this.events[r] && this.events[r].notify(...s);
    }
}
class Wg extends TS {
    constructor() {
        (super(...arguments), (this.KeyframeResolver = pg));
    }
    sortInstanceNodePosition(r, s) {
        return r.compareDocumentPosition(s) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(r, s) {
        return r.style ? r.style[s] : void 0;
    }
    removeValueFromRenderState(r, { vars: s, style: a }) {
        (delete s[r], delete a[r]);
    }
    handleChildMotionValue() {
        this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
        const { children: r } = this.props;
        et(r) &&
            (this.childSubscription = r.on("change", (s) => {
                this.current && (this.current.textContent = `${s}`);
            }));
    }
}
function ES(n) {
    return window.getComputedStyle(n);
}
class NS extends Wg {
    constructor() {
        (super(...arguments), (this.type = "html"), (this.renderInstance = Mm));
    }
    readValueFromInstance(r, s) {
        if ($n.has(s)) {
            const a = qu(s);
            return (a && a.default) || 0;
        } else {
            const a = ES(r),
                l = (Tm(s) ? a.getPropertyValue(s) : a[s]) || 0;
            return typeof l == "string" ? l.trim() : l;
        }
    }
    measureInstanceViewportBox(r, { transformPagePoint: s }) {
        return Dg(r, s);
    }
    build(r, s, a) {
        zu(r, s, a.transformTemplate);
    }
    scrapeMotionValuesFromProps(r, s, a) {
        return Fu(r, s, a);
    }
}
class MS extends Wg {
    constructor() {
        (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = Fe));
    }
    getBaseTargetFromProps(r, s) {
        return r[s];
    }
    readValueFromInstance(r, s) {
        if ($n.has(s)) {
            const a = qu(s);
            return (a && a.default) || 0;
        }
        return ((s = Dm.has(s) ? s : Eu(s)), r.getAttribute(s));
    }
    scrapeMotionValuesFromProps(r, s, a) {
        return zm(r, s, a);
    }
    build(r, s, a) {
        _u(r, s, this.isSVGTag, a.transformTemplate);
    }
    renderInstance(r, s, a, l) {
        Rm(r, s, a, l);
    }
    mount(r) {
        ((this.isSVGTag = Vu(r.tagName)), super.mount(r));
    }
}
const DS = (n, r) =>
        Mu(n) ? new MS(r) : new NS(r, { allowProjection: n !== I.Fragment }),
    RS = r1({ ...t2, ...SS, ...cS, ...bS }, DS),
    AS = vx(RS);
var yi = { exports: {} },
    Hl = {},
    Kl = { exports: {} },
    Gl,
    Dp;
function zS() {
    if (Dp) return Gl;
    Dp = 1;
    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return ((Gl = n), Gl);
}
var Yl, Rp;
function _S() {
    if (Rp) return Yl;
    Rp = 1;
    var n = zS();
    function r() {}
    function s() {}
    return (
        (s.resetWarningCache = r),
        (Yl = function () {
            function a(c, h, m, g, x, v) {
                if (v !== n) {
                    var w = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                    );
                    throw ((w.name = "Invariant Violation"), w);
                }
            }
            a.isRequired = a;
            function l() {
                return a;
            }
            var d = {
                array: a,
                bigint: a,
                bool: a,
                func: a,
                number: a,
                object: a,
                string: a,
                symbol: a,
                any: a,
                arrayOf: l,
                element: a,
                elementType: a,
                instanceOf: l,
                node: a,
                objectOf: l,
                oneOf: l,
                oneOfType: l,
                shape: l,
                exact: l,
                checkPropTypes: s,
                resetWarningCache: r,
            };
            return ((d.PropTypes = d), d);
        }),
        Yl
    );
}
var Ap;
function $g() {
    return (Ap || ((Ap = 1), (Kl.exports = _S()())), Kl.exports);
}
var to = { exports: {} },
    zp;
function LS() {
    if (zp) return to.exports;
    zp = 1;
    function n(s) {
        var a,
            l,
            d = "";
        if (typeof s == "string" || typeof s == "number") d += s;
        else if (typeof s == "object")
            if (Array.isArray(s)) {
                var c = s.length;
                for (a = 0; a < c; a++)
                    s[a] && (l = n(s[a])) && (d && (d += " "), (d += l));
            } else for (l in s) s[l] && (d && (d += " "), (d += l));
        return d;
    }
    function r() {
        for (var s, a, l = 0, d = "", c = arguments.length; l < c; l++)
            (s = arguments[l]) && (a = n(s)) && (d && (d += " "), (d += a));
        return d;
    }
    return ((to.exports = r), (to.exports.clsx = r), to.exports);
}
var Ve = {},
    wn = {},
    _p;
function No() {
    if (_p) return wn;
    ((_p = 1),
        Object.defineProperty(wn, "__esModule", { value: !0 }),
        (wn.dontSetMe = l),
        (wn.findInArray = n),
        (wn.int = a),
        (wn.isFunction = r),
        (wn.isNum = s));
    function n(d, c) {
        for (let h = 0, m = d.length; h < m; h++)
            if (c.apply(c, [d[h], h, d])) return d[h];
    }
    function r(d) {
        return (
            typeof d == "function" ||
            Object.prototype.toString.call(d) === "[object Function]"
        );
    }
    function s(d) {
        return typeof d == "number" && !isNaN(d);
    }
    function a(d) {
        return parseInt(d, 10);
    }
    function l(d, c, h) {
        if (d[c])
            return new Error(
                `Invalid prop ${c} passed to ${h} - do not set this, set it on the child.`,
            );
    }
    return wn;
}
var Sn = {},
    Lp;
function VS() {
    if (Lp) return Sn;
    ((Lp = 1),
        Object.defineProperty(Sn, "__esModule", { value: !0 }),
        (Sn.browserPrefixToKey = s),
        (Sn.browserPrefixToStyle = a),
        (Sn.default = void 0),
        (Sn.getPrefix = r));
    const n = ["Moz", "Webkit", "O", "ms"];
    function r() {
        var h, m;
        let d =
            arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : "transform";
        if (typeof window > "u") return "";
        const c =
            (m = (h = window.document) == null ? void 0 : h.documentElement) ==
            null
                ? void 0
                : m.style;
        if (!c || d in c) return "";
        for (let g = 0; g < n.length; g++) if (s(d, n[g]) in c) return n[g];
        return "";
    }
    function s(d, c) {
        return c ? `${c}${l(d)}` : d;
    }
    function a(d, c) {
        return c ? `-${c.toLowerCase()}-${d}` : d;
    }
    function l(d) {
        let c = "",
            h = !0;
        for (let m = 0; m < d.length; m++)
            h
                ? ((c += d[m].toUpperCase()), (h = !1))
                : d[m] === "-"
                  ? (h = !0)
                  : (c += d[m]);
        return c;
    }
    return ((Sn.default = r()), Sn);
}
var Vp;
function tc() {
    if (Vp) return Ve;
    ((Vp = 1),
        Object.defineProperty(Ve, "__esModule", { value: !0 }),
        (Ve.addClassName = O),
        (Ve.addEvent = c),
        (Ve.addUserSelectStyles = C),
        (Ve.createCSSTransform = j),
        (Ve.createSVGTransform = z),
        (Ve.getTouch = b),
        (Ve.getTouchIdentifier = N),
        (Ve.getTranslation = T),
        (Ve.innerHeight = x),
        (Ve.innerWidth = v),
        (Ve.matchesSelector = l),
        (Ve.matchesSelectorAndParentsTo = d),
        (Ve.offsetXYFromParent = w),
        (Ve.outerHeight = m),
        (Ve.outerWidth = g),
        (Ve.removeClassName = L),
        (Ve.removeEvent = h),
        (Ve.scheduleRemoveUserSelectStyles = M));
    var n = No(),
        r = s(VS());
    function s(E, R) {
        if (typeof WeakMap == "function")
            var G = new WeakMap(),
                te = new WeakMap();
        return (s = function (se, xe) {
            if (!xe && se && se.__esModule) return se;
            var le,
                ye,
                ke = { __proto__: null, default: se };
            if (
                se === null ||
                (typeof se != "object" && typeof se != "function")
            )
                return ke;
            if ((le = xe ? te : G)) {
                if (le.has(se)) return le.get(se);
                le.set(se, ke);
            }
            for (const fe in se)
                fe !== "default" &&
                    {}.hasOwnProperty.call(se, fe) &&
                    ((ye =
                        (le = Object.defineProperty) &&
                        Object.getOwnPropertyDescriptor(se, fe)) &&
                    (ye.get || ye.set)
                        ? le(ke, fe, ye)
                        : (ke[fe] = se[fe]));
            return ke;
        })(E, R);
    }
    let a = "";
    function l(E, R) {
        return (
            a ||
                (a = (0, n.findInArray)(
                    [
                        "matches",
                        "webkitMatchesSelector",
                        "mozMatchesSelector",
                        "msMatchesSelector",
                        "oMatchesSelector",
                    ],
                    function (G) {
                        return (0, n.isFunction)(E[G]);
                    },
                )),
            (0, n.isFunction)(E[a]) ? E[a](R) : !1
        );
    }
    function d(E, R, G) {
        let te = E;
        do {
            if (l(te, R)) return !0;
            if (te === G) return !1;
            te = te.parentNode;
        } while (te);
        return !1;
    }
    function c(E, R, G, te) {
        if (!E) return;
        const se = { capture: !0, ...te };
        E.addEventListener
            ? E.addEventListener(R, G, se)
            : E.attachEvent
              ? E.attachEvent("on" + R, G)
              : (E["on" + R] = G);
    }
    function h(E, R, G, te) {
        if (!E) return;
        const se = { capture: !0, ...te };
        E.removeEventListener
            ? E.removeEventListener(R, G, se)
            : E.detachEvent
              ? E.detachEvent("on" + R, G)
              : (E["on" + R] = null);
    }
    function m(E) {
        let R = E.clientHeight;
        const G = E.ownerDocument.defaultView.getComputedStyle(E);
        return (
            (R += (0, n.int)(G.borderTopWidth)),
            (R += (0, n.int)(G.borderBottomWidth)),
            R
        );
    }
    function g(E) {
        let R = E.clientWidth;
        const G = E.ownerDocument.defaultView.getComputedStyle(E);
        return (
            (R += (0, n.int)(G.borderLeftWidth)),
            (R += (0, n.int)(G.borderRightWidth)),
            R
        );
    }
    function x(E) {
        let R = E.clientHeight;
        const G = E.ownerDocument.defaultView.getComputedStyle(E);
        return (
            (R -= (0, n.int)(G.paddingTop)),
            (R -= (0, n.int)(G.paddingBottom)),
            R
        );
    }
    function v(E) {
        let R = E.clientWidth;
        const G = E.ownerDocument.defaultView.getComputedStyle(E);
        return (
            (R -= (0, n.int)(G.paddingLeft)),
            (R -= (0, n.int)(G.paddingRight)),
            R
        );
    }
    function w(E, R, G) {
        const se =
                R === R.ownerDocument.body
                    ? { left: 0, top: 0 }
                    : R.getBoundingClientRect(),
            xe = (E.clientX + R.scrollLeft - se.left) / G,
            le = (E.clientY + R.scrollTop - se.top) / G;
        return { x: xe, y: le };
    }
    function j(E, R) {
        const G = T(E, R, "px");
        return { [(0, r.browserPrefixToKey)("transform", r.default)]: G };
    }
    function z(E, R) {
        return T(E, R, "");
    }
    function T(E, R, G) {
        let { x: te, y: se } = E,
            xe = `translate(${te}${G},${se}${G})`;
        if (R) {
            const le = `${typeof R.x == "string" ? R.x : R.x + G}`,
                ye = `${typeof R.y == "string" ? R.y : R.y + G}`;
            xe = `translate(${le}, ${ye})` + xe;
        }
        return xe;
    }
    function b(E, R) {
        return (
            (E.targetTouches &&
                (0, n.findInArray)(
                    E.targetTouches,
                    (G) => R === G.identifier,
                )) ||
            (E.changedTouches &&
                (0, n.findInArray)(E.changedTouches, (G) => R === G.identifier))
        );
    }
    function N(E) {
        if (E.targetTouches && E.targetTouches[0])
            return E.targetTouches[0].identifier;
        if (E.changedTouches && E.changedTouches[0])
            return E.changedTouches[0].identifier;
    }
    function C(E) {
        if (!E) return;
        let R = E.getElementById("react-draggable-style-el");
        (R ||
            ((R = E.createElement("style")),
            (R.type = "text/css"),
            (R.id = "react-draggable-style-el"),
            (R.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`),
            (R.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`),
            E.getElementsByTagName("head")[0].appendChild(R)),
            E.body && O(E.body, "react-draggable-transparent-selection"));
    }
    function M(E) {
        window.requestAnimationFrame
            ? window.requestAnimationFrame(() => {
                  V(E);
              })
            : V(E);
    }
    function V(E) {
        if (E)
            try {
                if (
                    (E.body &&
                        L(E.body, "react-draggable-transparent-selection"),
                    E.selection)
                )
                    E.selection.empty();
                else {
                    const R = (E.defaultView || window).getSelection();
                    R && R.type !== "Caret" && R.removeAllRanges();
                }
            } catch {}
    }
    function O(E, R) {
        E.classList
            ? E.classList.add(R)
            : E.className.match(new RegExp(`(?:^|\\s)${R}(?!\\S)`)) ||
              (E.className += ` ${R}`);
    }
    function L(E, R) {
        E.classList
            ? E.classList.remove(R)
            : (E.className = E.className.replace(
                  new RegExp(`(?:^|\\s)${R}(?!\\S)`, "g"),
                  "",
              ));
    }
    return Ve;
}
var Ot = {},
    Fp;
function Hg() {
    if (Fp) return Ot;
    ((Fp = 1),
        Object.defineProperty(Ot, "__esModule", { value: !0 }),
        (Ot.canDragX = l),
        (Ot.canDragY = d),
        (Ot.createCoreData = h),
        (Ot.createDraggableData = m),
        (Ot.getBoundPosition = s),
        (Ot.getControlPosition = c),
        (Ot.snapToGrid = a));
    var n = No(),
        r = tc();
    function s(v, w, j) {
        if (!v.props.bounds) return [w, j];
        let { bounds: z } = v.props;
        z = typeof z == "string" ? z : g(z);
        const T = x(v);
        if (typeof z == "string") {
            const { ownerDocument: b } = T,
                N = b.defaultView;
            let C;
            if (
                (z === "parent"
                    ? (C = T.parentNode)
                    : (C = T.getRootNode().querySelector(z)),
                !(C instanceof N.HTMLElement))
            )
                throw new Error(
                    'Bounds selector "' + z + '" could not find an element.',
                );
            const M = C,
                V = N.getComputedStyle(T),
                O = N.getComputedStyle(M);
            z = {
                left:
                    -T.offsetLeft +
                    (0, n.int)(O.paddingLeft) +
                    (0, n.int)(V.marginLeft),
                top:
                    -T.offsetTop +
                    (0, n.int)(O.paddingTop) +
                    (0, n.int)(V.marginTop),
                right:
                    (0, r.innerWidth)(M) -
                    (0, r.outerWidth)(T) -
                    T.offsetLeft +
                    (0, n.int)(O.paddingRight) -
                    (0, n.int)(V.marginRight),
                bottom:
                    (0, r.innerHeight)(M) -
                    (0, r.outerHeight)(T) -
                    T.offsetTop +
                    (0, n.int)(O.paddingBottom) -
                    (0, n.int)(V.marginBottom),
            };
        }
        return (
            (0, n.isNum)(z.right) && (w = Math.min(w, z.right)),
            (0, n.isNum)(z.bottom) && (j = Math.min(j, z.bottom)),
            (0, n.isNum)(z.left) && (w = Math.max(w, z.left)),
            (0, n.isNum)(z.top) && (j = Math.max(j, z.top)),
            [w, j]
        );
    }
    function a(v, w, j) {
        const z = Math.round(w / v[0]) * v[0],
            T = Math.round(j / v[1]) * v[1];
        return [z, T];
    }
    function l(v) {
        return v.props.axis === "both" || v.props.axis === "x";
    }
    function d(v) {
        return v.props.axis === "both" || v.props.axis === "y";
    }
    function c(v, w, j) {
        const z = typeof w == "number" ? (0, r.getTouch)(v, w) : null;
        if (typeof w == "number" && !z) return null;
        const T = x(j),
            b = j.props.offsetParent || T.offsetParent || T.ownerDocument.body;
        return (0, r.offsetXYFromParent)(z || v, b, j.props.scale);
    }
    function h(v, w, j) {
        const z = !(0, n.isNum)(v.lastX),
            T = x(v);
        return z
            ? { node: T, deltaX: 0, deltaY: 0, lastX: w, lastY: j, x: w, y: j }
            : {
                  node: T,
                  deltaX: w - v.lastX,
                  deltaY: j - v.lastY,
                  lastX: v.lastX,
                  lastY: v.lastY,
                  x: w,
                  y: j,
              };
    }
    function m(v, w) {
        const j = v.props.scale;
        return {
            node: w.node,
            x: v.state.x + w.deltaX / j,
            y: v.state.y + w.deltaY / j,
            deltaX: w.deltaX / j,
            deltaY: w.deltaY / j,
            lastX: v.state.x,
            lastY: v.state.y,
        };
    }
    function g(v) {
        return { left: v.left, top: v.top, right: v.right, bottom: v.bottom };
    }
    function x(v) {
        const w = v.findDOMNode();
        if (!w) throw new Error("<DraggableCore>: Unmounted during event!");
        return w;
    }
    return Ot;
}
var vi = {},
    no = {},
    Op;
function Kg() {
    if (Op) return no;
    ((Op = 1),
        Object.defineProperty(no, "__esModule", { value: !0 }),
        (no.default = n));
    function n() {}
    return no;
}
var Ip;
function FS() {
    if (Ip) return vi;
    ((Ip = 1),
        Object.defineProperty(vi, "__esModule", { value: !0 }),
        (vi.default = void 0));
    var n = m(zi()),
        r = h($g()),
        s = h(So()),
        a = tc(),
        l = Hg(),
        d = No(),
        c = h(Kg());
    function h(T) {
        return T && T.__esModule ? T : { default: T };
    }
    function m(T, b) {
        if (typeof WeakMap == "function")
            var N = new WeakMap(),
                C = new WeakMap();
        return (m = function (M, V) {
            if (!V && M && M.__esModule) return M;
            var O,
                L,
                E = { __proto__: null, default: M };
            if (M === null || (typeof M != "object" && typeof M != "function"))
                return E;
            if ((O = V ? C : N)) {
                if (O.has(M)) return O.get(M);
                O.set(M, E);
            }
            for (const R in M)
                R !== "default" &&
                    {}.hasOwnProperty.call(M, R) &&
                    ((L =
                        (O = Object.defineProperty) &&
                        Object.getOwnPropertyDescriptor(M, R)) &&
                    (L.get || L.set)
                        ? O(E, R, L)
                        : (E[R] = M[R]));
            return E;
        })(T, b);
    }
    function g(T, b, N) {
        return (
            (b = x(b)) in T
                ? Object.defineProperty(T, b, {
                      value: N,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (T[b] = N),
            T
        );
    }
    function x(T) {
        var b = v(T, "string");
        return typeof b == "symbol" ? b : b + "";
    }
    function v(T, b) {
        if (typeof T != "object" || !T) return T;
        var N = T[Symbol.toPrimitive];
        if (N !== void 0) {
            var C = N.call(T, b);
            if (typeof C != "object") return C;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (b === "string" ? String : Number)(T);
    }
    const w = {
        touch: { start: "touchstart", move: "touchmove", stop: "touchend" },
        mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" },
    };
    let j = w.mouse,
        z = class extends n.Component {
            constructor() {
                (super(...arguments),
                    g(this, "dragging", !1),
                    g(this, "lastX", NaN),
                    g(this, "lastY", NaN),
                    g(this, "touchIdentifier", null),
                    g(this, "mounted", !1),
                    g(this, "handleDragStart", (b) => {
                        if (
                            (this.props.onMouseDown(b),
                            !this.props.allowAnyClick &&
                                typeof b.button == "number" &&
                                b.button !== 0)
                        )
                            return !1;
                        const N = this.findDOMNode();
                        if (!N || !N.ownerDocument || !N.ownerDocument.body)
                            throw new Error(
                                "<DraggableCore> not mounted on DragStart!",
                            );
                        const { ownerDocument: C } = N;
                        if (
                            this.props.disabled ||
                            !(b.target instanceof C.defaultView.Node) ||
                            (this.props.handle &&
                                !(0, a.matchesSelectorAndParentsTo)(
                                    b.target,
                                    this.props.handle,
                                    N,
                                )) ||
                            (this.props.cancel &&
                                (0, a.matchesSelectorAndParentsTo)(
                                    b.target,
                                    this.props.cancel,
                                    N,
                                ))
                        )
                            return;
                        b.type === "touchstart" &&
                            !this.props.allowMobileScroll &&
                            b.preventDefault();
                        const M = (0, a.getTouchIdentifier)(b);
                        this.touchIdentifier = M;
                        const V = (0, l.getControlPosition)(b, M, this);
                        if (V == null) return;
                        const { x: O, y: L } = V,
                            E = (0, l.createCoreData)(this, O, L);
                        ((0, c.default)(
                            "DraggableCore: handleDragStart: %j",
                            E,
                        ),
                            (0, c.default)("calling", this.props.onStart),
                            !(
                                this.props.onStart(b, E) === !1 ||
                                this.mounted === !1
                            ) &&
                                (this.props.enableUserSelectHack &&
                                    (0, a.addUserSelectStyles)(C),
                                (this.dragging = !0),
                                (this.lastX = O),
                                (this.lastY = L),
                                (0, a.addEvent)(C, j.move, this.handleDrag),
                                (0, a.addEvent)(
                                    C,
                                    j.stop,
                                    this.handleDragStop,
                                )));
                    }),
                    g(this, "handleDrag", (b) => {
                        const N = (0, l.getControlPosition)(
                            b,
                            this.touchIdentifier,
                            this,
                        );
                        if (N == null) return;
                        let { x: C, y: M } = N;
                        if (Array.isArray(this.props.grid)) {
                            let L = C - this.lastX,
                                E = M - this.lastY;
                            if (
                                (([L, E] = (0, l.snapToGrid)(
                                    this.props.grid,
                                    L,
                                    E,
                                )),
                                !L && !E)
                            )
                                return;
                            ((C = this.lastX + L), (M = this.lastY + E));
                        }
                        const V = (0, l.createCoreData)(this, C, M);
                        if (
                            ((0, c.default)("DraggableCore: handleDrag: %j", V),
                            this.props.onDrag(b, V) === !1 ||
                                this.mounted === !1)
                        ) {
                            try {
                                this.handleDragStop(new MouseEvent("mouseup"));
                            } catch {
                                const E = document.createEvent("MouseEvents");
                                (E.initMouseEvent(
                                    "mouseup",
                                    !0,
                                    !0,
                                    window,
                                    0,
                                    0,
                                    0,
                                    0,
                                    0,
                                    !1,
                                    !1,
                                    !1,
                                    !1,
                                    0,
                                    null,
                                ),
                                    this.handleDragStop(E));
                            }
                            return;
                        }
                        ((this.lastX = C), (this.lastY = M));
                    }),
                    g(this, "handleDragStop", (b) => {
                        if (!this.dragging) return;
                        const N = (0, l.getControlPosition)(
                            b,
                            this.touchIdentifier,
                            this,
                        );
                        if (N == null) return;
                        let { x: C, y: M } = N;
                        if (Array.isArray(this.props.grid)) {
                            let E = C - this.lastX || 0,
                                R = M - this.lastY || 0;
                            (([E, R] = (0, l.snapToGrid)(
                                this.props.grid,
                                E,
                                R,
                            )),
                                (C = this.lastX + E),
                                (M = this.lastY + R));
                        }
                        const V = (0, l.createCoreData)(this, C, M);
                        if (
                            this.props.onStop(b, V) === !1 ||
                            this.mounted === !1
                        )
                            return !1;
                        const L = this.findDOMNode();
                        (L &&
                            this.props.enableUserSelectHack &&
                            (0, a.scheduleRemoveUserSelectStyles)(
                                L.ownerDocument,
                            ),
                            (0, c.default)(
                                "DraggableCore: handleDragStop: %j",
                                V,
                            ),
                            (this.dragging = !1),
                            (this.lastX = NaN),
                            (this.lastY = NaN),
                            L &&
                                ((0, c.default)(
                                    "DraggableCore: Removing handlers",
                                ),
                                (0, a.removeEvent)(
                                    L.ownerDocument,
                                    j.move,
                                    this.handleDrag,
                                ),
                                (0, a.removeEvent)(
                                    L.ownerDocument,
                                    j.stop,
                                    this.handleDragStop,
                                )));
                    }),
                    g(
                        this,
                        "onMouseDown",
                        (b) => ((j = w.mouse), this.handleDragStart(b)),
                    ),
                    g(
                        this,
                        "onMouseUp",
                        (b) => ((j = w.mouse), this.handleDragStop(b)),
                    ),
                    g(
                        this,
                        "onTouchStart",
                        (b) => ((j = w.touch), this.handleDragStart(b)),
                    ),
                    g(
                        this,
                        "onTouchEnd",
                        (b) => ((j = w.touch), this.handleDragStop(b)),
                    ));
            }
            componentDidMount() {
                this.mounted = !0;
                const b = this.findDOMNode();
                b &&
                    (0, a.addEvent)(b, w.touch.start, this.onTouchStart, {
                        passive: !1,
                    });
            }
            componentWillUnmount() {
                this.mounted = !1;
                const b = this.findDOMNode();
                if (b) {
                    const { ownerDocument: N } = b;
                    ((0, a.removeEvent)(N, w.mouse.move, this.handleDrag),
                        (0, a.removeEvent)(N, w.touch.move, this.handleDrag),
                        (0, a.removeEvent)(
                            N,
                            w.mouse.stop,
                            this.handleDragStop,
                        ),
                        (0, a.removeEvent)(
                            N,
                            w.touch.stop,
                            this.handleDragStop,
                        ),
                        (0, a.removeEvent)(
                            b,
                            w.touch.start,
                            this.onTouchStart,
                            { passive: !1 },
                        ),
                        this.props.enableUserSelectHack &&
                            (0, a.scheduleRemoveUserSelectStyles)(N));
                }
            }
            findDOMNode() {
                var b, N, C;
                return (b = this.props) != null && b.nodeRef
                    ? (C = (N = this.props) == null ? void 0 : N.nodeRef) ==
                      null
                        ? void 0
                        : C.current
                    : s.default.findDOMNode(this);
            }
            render() {
                return n.cloneElement(n.Children.only(this.props.children), {
                    onMouseDown: this.onMouseDown,
                    onMouseUp: this.onMouseUp,
                    onTouchEnd: this.onTouchEnd,
                });
            }
        };
    return (
        (vi.default = z),
        g(z, "displayName", "DraggableCore"),
        g(z, "propTypes", {
            allowAnyClick: r.default.bool,
            allowMobileScroll: r.default.bool,
            children: r.default.node.isRequired,
            disabled: r.default.bool,
            enableUserSelectHack: r.default.bool,
            offsetParent: function (T, b) {
                if (T[b] && T[b].nodeType !== 1)
                    throw new Error(
                        "Draggable's offsetParent must be a DOM Node.",
                    );
            },
            grid: r.default.arrayOf(r.default.number),
            handle: r.default.string,
            cancel: r.default.string,
            nodeRef: r.default.object,
            onStart: r.default.func,
            onDrag: r.default.func,
            onStop: r.default.func,
            onMouseDown: r.default.func,
            scale: r.default.number,
            className: d.dontSetMe,
            style: d.dontSetMe,
            transform: d.dontSetMe,
        }),
        g(z, "defaultProps", {
            allowAnyClick: !1,
            allowMobileScroll: !1,
            disabled: !1,
            enableUserSelectHack: !0,
            onStart: function () {},
            onDrag: function () {},
            onStop: function () {},
            onMouseDown: function () {},
            scale: 1,
        }),
        vi
    );
}
var Bp;
function OS() {
    return (
        Bp ||
            ((Bp = 1),
            (function (n) {
                (Object.defineProperty(n, "__esModule", { value: !0 }),
                    Object.defineProperty(n, "DraggableCore", {
                        enumerable: !0,
                        get: function () {
                            return m.default;
                        },
                    }),
                    (n.default = void 0));
                var r = v(zi()),
                    s = x($g()),
                    a = x(So()),
                    l = LS(),
                    d = tc(),
                    c = Hg(),
                    h = No(),
                    m = x(FS()),
                    g = x(Kg());
                function x(N) {
                    return N && N.__esModule ? N : { default: N };
                }
                function v(N, C) {
                    if (typeof WeakMap == "function")
                        var M = new WeakMap(),
                            V = new WeakMap();
                    return (v = function (O, L) {
                        if (!L && O && O.__esModule) return O;
                        var E,
                            R,
                            G = { __proto__: null, default: O };
                        if (
                            O === null ||
                            (typeof O != "object" && typeof O != "function")
                        )
                            return G;
                        if ((E = L ? V : M)) {
                            if (E.has(O)) return E.get(O);
                            E.set(O, G);
                        }
                        for (const te in O)
                            te !== "default" &&
                                {}.hasOwnProperty.call(O, te) &&
                                ((R =
                                    (E = Object.defineProperty) &&
                                    Object.getOwnPropertyDescriptor(O, te)) &&
                                (R.get || R.set)
                                    ? E(G, te, R)
                                    : (G[te] = O[te]));
                        return G;
                    })(N, C);
                }
                function w() {
                    return (
                        (w = Object.assign
                            ? Object.assign.bind()
                            : function (N) {
                                  for (var C = 1; C < arguments.length; C++) {
                                      var M = arguments[C];
                                      for (var V in M)
                                          ({}).hasOwnProperty.call(M, V) &&
                                              (N[V] = M[V]);
                                  }
                                  return N;
                              }),
                        w.apply(null, arguments)
                    );
                }
                function j(N, C, M) {
                    return (
                        (C = z(C)) in N
                            ? Object.defineProperty(N, C, {
                                  value: M,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (N[C] = M),
                        N
                    );
                }
                function z(N) {
                    var C = T(N, "string");
                    return typeof C == "symbol" ? C : C + "";
                }
                function T(N, C) {
                    if (typeof N != "object" || !N) return N;
                    var M = N[Symbol.toPrimitive];
                    if (M !== void 0) {
                        var V = M.call(N, C);
                        if (typeof V != "object") return V;
                        throw new TypeError(
                            "@@toPrimitive must return a primitive value.",
                        );
                    }
                    return (C === "string" ? String : Number)(N);
                }
                class b extends r.Component {
                    static getDerivedStateFromProps(C, M) {
                        let { position: V } = C,
                            { prevPropsPosition: O } = M;
                        return V && (!O || V.x !== O.x || V.y !== O.y)
                            ? ((0, g.default)(
                                  "Draggable: getDerivedStateFromProps %j",
                                  { position: V, prevPropsPosition: O },
                              ),
                              { x: V.x, y: V.y, prevPropsPosition: { ...V } })
                            : null;
                    }
                    constructor(C) {
                        (super(C),
                            j(this, "onDragStart", (M, V) => {
                                if (
                                    ((0, g.default)(
                                        "Draggable: onDragStart: %j",
                                        V,
                                    ),
                                    this.props.onStart(
                                        M,
                                        (0, c.createDraggableData)(this, V),
                                    ) === !1)
                                )
                                    return !1;
                                this.setState({ dragging: !0, dragged: !0 });
                            }),
                            j(this, "onDrag", (M, V) => {
                                if (!this.state.dragging) return !1;
                                (0, g.default)("Draggable: onDrag: %j", V);
                                const O = (0, c.createDraggableData)(this, V),
                                    L = {
                                        x: O.x,
                                        y: O.y,
                                        slackX: 0,
                                        slackY: 0,
                                    };
                                if (this.props.bounds) {
                                    const { x: R, y: G } = L;
                                    ((L.x += this.state.slackX),
                                        (L.y += this.state.slackY));
                                    const [te, se] = (0, c.getBoundPosition)(
                                        this,
                                        L.x,
                                        L.y,
                                    );
                                    ((L.x = te),
                                        (L.y = se),
                                        (L.slackX =
                                            this.state.slackX + (R - L.x)),
                                        (L.slackY =
                                            this.state.slackY + (G - L.y)),
                                        (O.x = L.x),
                                        (O.y = L.y),
                                        (O.deltaX = L.x - this.state.x),
                                        (O.deltaY = L.y - this.state.y));
                                }
                                if (this.props.onDrag(M, O) === !1) return !1;
                                this.setState(L);
                            }),
                            j(this, "onDragStop", (M, V) => {
                                if (
                                    !this.state.dragging ||
                                    this.props.onStop(
                                        M,
                                        (0, c.createDraggableData)(this, V),
                                    ) === !1
                                )
                                    return !1;
                                (0, g.default)("Draggable: onDragStop: %j", V);
                                const L = {
                                    dragging: !1,
                                    slackX: 0,
                                    slackY: 0,
                                };
                                if (!!this.props.position) {
                                    const { x: R, y: G } = this.props.position;
                                    ((L.x = R), (L.y = G));
                                }
                                this.setState(L);
                            }),
                            (this.state = {
                                dragging: !1,
                                dragged: !1,
                                x: C.position
                                    ? C.position.x
                                    : C.defaultPosition.x,
                                y: C.position
                                    ? C.position.y
                                    : C.defaultPosition.y,
                                prevPropsPosition: { ...C.position },
                                slackX: 0,
                                slackY: 0,
                                isElementSVG: !1,
                            }),
                            C.position &&
                                !(C.onDrag || C.onStop) &&
                                console.warn(
                                    "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.",
                                ));
                    }
                    componentDidMount() {
                        typeof window.SVGElement < "u" &&
                            this.findDOMNode() instanceof window.SVGElement &&
                            this.setState({ isElementSVG: !0 });
                    }
                    componentWillUnmount() {
                        this.state.dragging && this.setState({ dragging: !1 });
                    }
                    findDOMNode() {
                        var C, M;
                        return (
                            ((M =
                                (C = this.props) == null
                                    ? void 0
                                    : C.nodeRef) == null
                                ? void 0
                                : M.current) ?? a.default.findDOMNode(this)
                        );
                    }
                    render() {
                        const {
                            axis: C,
                            bounds: M,
                            children: V,
                            defaultPosition: O,
                            defaultClassName: L,
                            defaultClassNameDragging: E,
                            defaultClassNameDragged: R,
                            position: G,
                            positionOffset: te,
                            scale: se,
                            ...xe
                        } = this.props;
                        let le = {},
                            ye = null;
                        const fe = !!!G || this.state.dragging,
                            K = G || O,
                            B = {
                                x:
                                    (0, c.canDragX)(this) && fe
                                        ? this.state.x
                                        : K.x,
                                y:
                                    (0, c.canDragY)(this) && fe
                                        ? this.state.y
                                        : K.y,
                            };
                        this.state.isElementSVG
                            ? (ye = (0, d.createSVGTransform)(B, te))
                            : (le = (0, d.createCSSTransform)(B, te));
                        const Z = (0, l.clsx)(V.props.className || "", L, {
                            [E]: this.state.dragging,
                            [R]: this.state.dragged,
                        });
                        return r.createElement(
                            m.default,
                            w({}, xe, {
                                onStart: this.onDragStart,
                                onDrag: this.onDrag,
                                onStop: this.onDragStop,
                            }),
                            r.cloneElement(r.Children.only(V), {
                                className: Z,
                                style: { ...V.props.style, ...le },
                                transform: ye,
                            }),
                        );
                    }
                }
                ((n.default = b),
                    j(b, "displayName", "Draggable"),
                    j(b, "propTypes", {
                        ...m.default.propTypes,
                        axis: s.default.oneOf(["both", "x", "y", "none"]),
                        bounds: s.default.oneOfType([
                            s.default.shape({
                                left: s.default.number,
                                right: s.default.number,
                                top: s.default.number,
                                bottom: s.default.number,
                            }),
                            s.default.string,
                            s.default.oneOf([!1]),
                        ]),
                        defaultClassName: s.default.string,
                        defaultClassNameDragging: s.default.string,
                        defaultClassNameDragged: s.default.string,
                        defaultPosition: s.default.shape({
                            x: s.default.number,
                            y: s.default.number,
                        }),
                        positionOffset: s.default.shape({
                            x: s.default.oneOfType([
                                s.default.number,
                                s.default.string,
                            ]),
                            y: s.default.oneOfType([
                                s.default.number,
                                s.default.string,
                            ]),
                        }),
                        position: s.default.shape({
                            x: s.default.number,
                            y: s.default.number,
                        }),
                        className: h.dontSetMe,
                        style: h.dontSetMe,
                        transform: h.dontSetMe,
                    }),
                    j(b, "defaultProps", {
                        ...m.default.defaultProps,
                        axis: "both",
                        bounds: !1,
                        defaultClassName: "react-draggable",
                        defaultClassNameDragging: "react-draggable-dragging",
                        defaultClassNameDragged: "react-draggable-dragged",
                        defaultPosition: { x: 0, y: 0 },
                        scale: 1,
                    }));
            })(Hl)),
        Hl
    );
}
var Up;
function IS() {
    if (Up) return yi.exports;
    Up = 1;
    const { default: n, DraggableCore: r } = OS();
    return (
        (yi.exports = n),
        (yi.exports.default = n),
        (yi.exports.DraggableCore = r),
        yi.exports
    );
}
var BS = IS();
const US = mu(BS);
var WS = So(),
    Ie = function () {
        return (
            (Ie =
                Object.assign ||
                function (n) {
                    for (var r, s = 1, a = arguments.length; s < a; s++) {
                        r = arguments[s];
                        for (var l in r)
                            Object.prototype.hasOwnProperty.call(r, l) &&
                                (n[l] = r[l]);
                    }
                    return n;
                }),
            Ie.apply(this, arguments)
        );
    },
    Wp = {
        width: "100%",
        height: "10px",
        top: "0px",
        left: "0px",
        cursor: "row-resize",
    },
    $p = {
        width: "10px",
        height: "100%",
        top: "0px",
        left: "0px",
        cursor: "col-resize",
    },
    ro = { width: "20px", height: "20px", position: "absolute", zIndex: 1 },
    $S = {
        top: Ie(Ie({}, Wp), { top: "-5px" }),
        right: Ie(Ie({}, $p), { left: void 0, right: "-5px" }),
        bottom: Ie(Ie({}, Wp), { top: void 0, bottom: "-5px" }),
        left: Ie(Ie({}, $p), { left: "-5px" }),
        topRight: Ie(Ie({}, ro), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize",
        }),
        bottomRight: Ie(Ie({}, ro), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize",
        }),
        bottomLeft: Ie(Ie({}, ro), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize",
        }),
        topLeft: Ie(Ie({}, ro), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize",
        }),
    },
    HS = I.memo(function (n) {
        var r = n.onResizeStart,
            s = n.direction,
            a = n.children,
            l = n.replaceStyles,
            d = n.className,
            c = I.useCallback(
                function (g) {
                    r(g, s);
                },
                [r, s],
            ),
            h = I.useCallback(
                function (g) {
                    r(g, s);
                },
                [r, s],
            ),
            m = I.useMemo(
                function () {
                    return Ie(
                        Ie({ position: "absolute", userSelect: "none" }, $S[s]),
                        l ?? {},
                    );
                },
                [l, s],
            );
        return p.jsx("div", {
            className: d || void 0,
            style: m,
            onMouseDown: c,
            onTouchStart: h,
            children: a,
        });
    }),
    KS = (function () {
        var n = function (r, s) {
            return (
                (n =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (a, l) {
                            a.__proto__ = l;
                        }) ||
                    function (a, l) {
                        for (var d in l)
                            Object.prototype.hasOwnProperty.call(l, d) &&
                                (a[d] = l[d]);
                    }),
                n(r, s)
            );
        };
        return function (r, s) {
            if (typeof s != "function" && s !== null)
                throw new TypeError(
                    "Class extends value " +
                        String(s) +
                        " is not a constructor or null",
                );
            n(r, s);
            function a() {
                this.constructor = r;
            }
            r.prototype =
                s === null
                    ? Object.create(s)
                    : ((a.prototype = s.prototype), new a());
        };
    })(),
    It = function () {
        return (
            (It =
                Object.assign ||
                function (n) {
                    for (var r, s = 1, a = arguments.length; s < a; s++) {
                        r = arguments[s];
                        for (var l in r)
                            Object.prototype.hasOwnProperty.call(r, l) &&
                                (n[l] = r[l]);
                    }
                    return n;
                }),
            It.apply(this, arguments)
        );
    },
    GS = { width: "auto", height: "auto" },
    io = function (n, r, s) {
        return Math.max(Math.min(n, s), r);
    },
    Hp = function (n, r, s) {
        var a = Math.round(n / r);
        return a * r + s * (a - 1);
    },
    gr = function (n, r) {
        return new RegExp(n, "i").test(r);
    },
    so = function (n) {
        return !!(n.touches && n.touches.length);
    },
    YS = function (n) {
        return !!(
            (n.clientX || n.clientX === 0) &&
            (n.clientY || n.clientY === 0)
        );
    },
    Kp = function (n, r, s) {
        s === void 0 && (s = 0);
        var a = r.reduce(function (d, c, h) {
                return Math.abs(c - n) < Math.abs(r[d] - n) ? h : d;
            }, 0),
            l = Math.abs(r[a] - n);
        return s === 0 || l < s ? r[a] : n;
    },
    Xl = function (n) {
        return (
            (n = n.toString()),
            n === "auto" ||
            n.endsWith("px") ||
            n.endsWith("%") ||
            n.endsWith("vh") ||
            n.endsWith("vw") ||
            n.endsWith("vmax") ||
            n.endsWith("vmin")
                ? n
                : "".concat(n, "px")
        );
    },
    oo = function (n, r, s, a) {
        if (n && typeof n == "string") {
            if (n.endsWith("px")) return Number(n.replace("px", ""));
            if (n.endsWith("%")) {
                var l = Number(n.replace("%", "")) / 100;
                return r * l;
            }
            if (n.endsWith("vw")) {
                var l = Number(n.replace("vw", "")) / 100;
                return s * l;
            }
            if (n.endsWith("vh")) {
                var l = Number(n.replace("vh", "")) / 100;
                return a * l;
            }
        }
        return n;
    },
    XS = function (n, r, s, a, l, d, c) {
        return (
            (a = oo(a, n.width, r, s)),
            (l = oo(l, n.height, r, s)),
            (d = oo(d, n.width, r, s)),
            (c = oo(c, n.height, r, s)),
            {
                maxWidth: typeof a > "u" ? void 0 : Number(a),
                maxHeight: typeof l > "u" ? void 0 : Number(l),
                minWidth: typeof d > "u" ? void 0 : Number(d),
                minHeight: typeof c > "u" ? void 0 : Number(c),
            }
        );
    },
    qS = function (n) {
        return Array.isArray(n) ? n : [n, n];
    },
    QS = [
        "as",
        "ref",
        "style",
        "className",
        "grid",
        "gridGap",
        "snap",
        "bounds",
        "boundsByDirection",
        "size",
        "defaultSize",
        "minWidth",
        "minHeight",
        "maxWidth",
        "maxHeight",
        "lockAspectRatio",
        "lockAspectRatioExtraWidth",
        "lockAspectRatioExtraHeight",
        "enable",
        "handleStyles",
        "handleClasses",
        "handleWrapperStyle",
        "handleWrapperClass",
        "children",
        "onResizeStart",
        "onResize",
        "onResizeStop",
        "handleComponent",
        "scale",
        "resizeRatio",
        "snapGap",
    ],
    Gp = "__resizable_base__",
    ZS = (function (n) {
        KS(r, n);
        function r(s) {
            var a,
                l,
                d,
                c,
                h = n.call(this, s) || this;
            return (
                (h.ratio = 1),
                (h.resizable = null),
                (h.parentLeft = 0),
                (h.parentTop = 0),
                (h.resizableLeft = 0),
                (h.resizableRight = 0),
                (h.resizableTop = 0),
                (h.resizableBottom = 0),
                (h.targetLeft = 0),
                (h.targetTop = 0),
                (h.delta = { width: 0, height: 0 }),
                (h.appendBase = function () {
                    if (!h.resizable || !h.window) return null;
                    var m = h.parentNode;
                    if (!m) return null;
                    var g = h.window.document.createElement("div");
                    return (
                        (g.style.width = "100%"),
                        (g.style.height = "100%"),
                        (g.style.position = "absolute"),
                        (g.style.transform = "scale(0, 0)"),
                        (g.style.left = "0"),
                        (g.style.flex = "0 0 100%"),
                        g.classList ? g.classList.add(Gp) : (g.className += Gp),
                        m.appendChild(g),
                        g
                    );
                }),
                (h.removeBase = function (m) {
                    var g = h.parentNode;
                    g && g.removeChild(m);
                }),
                (h.state = {
                    isResizing: !1,
                    width:
                        (l =
                            (a = h.propsSize) === null || a === void 0
                                ? void 0
                                : a.width) !== null && l !== void 0
                            ? l
                            : "auto",
                    height:
                        (c =
                            (d = h.propsSize) === null || d === void 0
                                ? void 0
                                : d.height) !== null && c !== void 0
                            ? c
                            : "auto",
                    direction: "right",
                    original: { x: 0, y: 0, width: 0, height: 0 },
                    backgroundStyle: {
                        height: "100%",
                        width: "100%",
                        backgroundColor: "rgba(0,0,0,0)",
                        cursor: "auto",
                        opacity: 0,
                        position: "fixed",
                        zIndex: 9999,
                        top: "0",
                        left: "0",
                        bottom: "0",
                        right: "0",
                    },
                    flexBasis: void 0,
                }),
                (h.onResizeStart = h.onResizeStart.bind(h)),
                (h.onMouseMove = h.onMouseMove.bind(h)),
                (h.onMouseUp = h.onMouseUp.bind(h)),
                h
            );
        }
        return (
            Object.defineProperty(r.prototype, "parentNode", {
                get: function () {
                    return this.resizable ? this.resizable.parentNode : null;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(r.prototype, "window", {
                get: function () {
                    return !this.resizable || !this.resizable.ownerDocument
                        ? null
                        : this.resizable.ownerDocument.defaultView;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(r.prototype, "propsSize", {
                get: function () {
                    return this.props.size || this.props.defaultSize || GS;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(r.prototype, "size", {
                get: function () {
                    var s = 0,
                        a = 0;
                    if (this.resizable && this.window) {
                        var l = this.resizable.offsetWidth,
                            d = this.resizable.offsetHeight,
                            c = this.resizable.style.position;
                        (c !== "relative" &&
                            (this.resizable.style.position = "relative"),
                            (s =
                                this.resizable.style.width !== "auto"
                                    ? this.resizable.offsetWidth
                                    : l),
                            (a =
                                this.resizable.style.height !== "auto"
                                    ? this.resizable.offsetHeight
                                    : d),
                            (this.resizable.style.position = c));
                    }
                    return { width: s, height: a };
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(r.prototype, "sizeStyle", {
                get: function () {
                    var s = this,
                        a = this.props.size,
                        l = function (h) {
                            var m;
                            if (
                                typeof s.state[h] > "u" ||
                                s.state[h] === "auto"
                            )
                                return "auto";
                            if (
                                s.propsSize &&
                                s.propsSize[h] &&
                                !(
                                    (m = s.propsSize[h]) === null ||
                                    m === void 0
                                ) &&
                                m.toString().endsWith("%")
                            ) {
                                if (s.state[h].toString().endsWith("%"))
                                    return s.state[h].toString();
                                var g = s.getParentSize(),
                                    x = Number(
                                        s.state[h].toString().replace("px", ""),
                                    ),
                                    v = (x / g[h]) * 100;
                                return "".concat(v, "%");
                            }
                            return Xl(s.state[h]);
                        },
                        d =
                            a && typeof a.width < "u" && !this.state.isResizing
                                ? Xl(a.width)
                                : l("width"),
                        c =
                            a && typeof a.height < "u" && !this.state.isResizing
                                ? Xl(a.height)
                                : l("height");
                    return { width: d, height: c };
                },
                enumerable: !1,
                configurable: !0,
            }),
            (r.prototype.getParentSize = function () {
                if (!this.parentNode)
                    return this.window
                        ? {
                              width: this.window.innerWidth,
                              height: this.window.innerHeight,
                          }
                        : { width: 0, height: 0 };
                var s = this.appendBase();
                if (!s) return { width: 0, height: 0 };
                var a = !1,
                    l = this.parentNode.style.flexWrap;
                (l !== "wrap" &&
                    ((a = !0), (this.parentNode.style.flexWrap = "wrap")),
                    (s.style.position = "relative"),
                    (s.style.minWidth = "100%"),
                    (s.style.minHeight = "100%"));
                var d = { width: s.offsetWidth, height: s.offsetHeight };
                return (
                    a && (this.parentNode.style.flexWrap = l),
                    this.removeBase(s),
                    d
                );
            }),
            (r.prototype.bindEvents = function () {
                this.window &&
                    (this.window.addEventListener("mouseup", this.onMouseUp),
                    this.window.addEventListener("mousemove", this.onMouseMove),
                    this.window.addEventListener("mouseleave", this.onMouseUp),
                    this.window.addEventListener(
                        "touchmove",
                        this.onMouseMove,
                        { capture: !0, passive: !1 },
                    ),
                    this.window.addEventListener("touchend", this.onMouseUp));
            }),
            (r.prototype.unbindEvents = function () {
                this.window &&
                    (this.window.removeEventListener("mouseup", this.onMouseUp),
                    this.window.removeEventListener(
                        "mousemove",
                        this.onMouseMove,
                    ),
                    this.window.removeEventListener(
                        "mouseleave",
                        this.onMouseUp,
                    ),
                    this.window.removeEventListener(
                        "touchmove",
                        this.onMouseMove,
                        !0,
                    ),
                    this.window.removeEventListener(
                        "touchend",
                        this.onMouseUp,
                    ));
            }),
            (r.prototype.componentDidMount = function () {
                if (!(!this.resizable || !this.window)) {
                    var s = this.window.getComputedStyle(this.resizable);
                    this.setState({
                        width: this.state.width || this.size.width,
                        height: this.state.height || this.size.height,
                        flexBasis:
                            s.flexBasis !== "auto" ? s.flexBasis : void 0,
                    });
                }
            }),
            (r.prototype.componentWillUnmount = function () {
                this.window && this.unbindEvents();
            }),
            (r.prototype.createSizeForCssProperty = function (s, a) {
                var l = this.propsSize && this.propsSize[a];
                return this.state[a] === "auto" &&
                    this.state.original[a] === s &&
                    (typeof l > "u" || l === "auto")
                    ? "auto"
                    : s;
            }),
            (r.prototype.calculateNewMaxFromBoundary = function (s, a) {
                var l = this.props.boundsByDirection,
                    d = this.state.direction,
                    c = l && gr("left", d),
                    h = l && gr("top", d),
                    m,
                    g;
                if (this.props.bounds === "parent") {
                    var x = this.parentNode;
                    x &&
                        ((m = c
                            ? this.resizableRight - this.parentLeft
                            : x.offsetWidth +
                              (this.parentLeft - this.resizableLeft)),
                        (g = h
                            ? this.resizableBottom - this.parentTop
                            : x.offsetHeight +
                              (this.parentTop - this.resizableTop)));
                } else
                    this.props.bounds === "window"
                        ? this.window &&
                          ((m = c
                              ? this.resizableRight
                              : this.window.innerWidth - this.resizableLeft),
                          (g = h
                              ? this.resizableBottom
                              : this.window.innerHeight - this.resizableTop))
                        : this.props.bounds &&
                          ((m = c
                              ? this.resizableRight - this.targetLeft
                              : this.props.bounds.offsetWidth +
                                (this.targetLeft - this.resizableLeft)),
                          (g = h
                              ? this.resizableBottom - this.targetTop
                              : this.props.bounds.offsetHeight +
                                (this.targetTop - this.resizableTop)));
                return (
                    m && Number.isFinite(m) && (s = s && s < m ? s : m),
                    g && Number.isFinite(g) && (a = a && a < g ? a : g),
                    { maxWidth: s, maxHeight: a }
                );
            }),
            (r.prototype.calculateNewSizeFromDirection = function (s, a) {
                var l = this.props.scale || 1,
                    d = qS(this.props.resizeRatio || 1),
                    c = d[0],
                    h = d[1],
                    m = this.state,
                    g = m.direction,
                    x = m.original,
                    v = this.props,
                    w = v.lockAspectRatio,
                    j = v.lockAspectRatioExtraHeight,
                    z = v.lockAspectRatioExtraWidth,
                    T = x.width,
                    b = x.height,
                    N = j || 0,
                    C = z || 0;
                return (
                    gr("right", g) &&
                        ((T = x.width + ((s - x.x) * c) / l),
                        w && (b = (T - C) / this.ratio + N)),
                    gr("left", g) &&
                        ((T = x.width - ((s - x.x) * c) / l),
                        w && (b = (T - C) / this.ratio + N)),
                    gr("bottom", g) &&
                        ((b = x.height + ((a - x.y) * h) / l),
                        w && (T = (b - N) * this.ratio + C)),
                    gr("top", g) &&
                        ((b = x.height - ((a - x.y) * h) / l),
                        w && (T = (b - N) * this.ratio + C)),
                    { newWidth: T, newHeight: b }
                );
            }),
            (r.prototype.calculateNewSizeFromAspectRatio = function (
                s,
                a,
                l,
                d,
            ) {
                var c = this.props,
                    h = c.lockAspectRatio,
                    m = c.lockAspectRatioExtraHeight,
                    g = c.lockAspectRatioExtraWidth,
                    x = typeof d.width > "u" ? 10 : d.width,
                    v = typeof l.width > "u" || l.width < 0 ? s : l.width,
                    w = typeof d.height > "u" ? 10 : d.height,
                    j = typeof l.height > "u" || l.height < 0 ? a : l.height,
                    z = m || 0,
                    T = g || 0;
                if (h) {
                    var b = (w - z) * this.ratio + T,
                        N = (j - z) * this.ratio + T,
                        C = (x - T) / this.ratio + z,
                        M = (v - T) / this.ratio + z,
                        V = Math.max(x, b),
                        O = Math.min(v, N),
                        L = Math.max(w, C),
                        E = Math.min(j, M);
                    ((s = io(s, V, O)), (a = io(a, L, E)));
                } else ((s = io(s, x, v)), (a = io(a, w, j)));
                return { newWidth: s, newHeight: a };
            }),
            (r.prototype.setBoundingClientRect = function () {
                var s = 1 / (this.props.scale || 1);
                if (this.props.bounds === "parent") {
                    var a = this.parentNode;
                    if (a) {
                        var l = a.getBoundingClientRect();
                        ((this.parentLeft = l.left * s),
                            (this.parentTop = l.top * s));
                    }
                }
                if (this.props.bounds && typeof this.props.bounds != "string") {
                    var d = this.props.bounds.getBoundingClientRect();
                    ((this.targetLeft = d.left * s),
                        (this.targetTop = d.top * s));
                }
                if (this.resizable) {
                    var c = this.resizable.getBoundingClientRect(),
                        h = c.left,
                        m = c.top,
                        g = c.right,
                        x = c.bottom;
                    ((this.resizableLeft = h * s),
                        (this.resizableRight = g * s),
                        (this.resizableTop = m * s),
                        (this.resizableBottom = x * s));
                }
            }),
            (r.prototype.onResizeStart = function (s, a) {
                if (!(!this.resizable || !this.window)) {
                    var l = 0,
                        d = 0;
                    if (
                        (s.nativeEvent && YS(s.nativeEvent)
                            ? ((l = s.nativeEvent.clientX),
                              (d = s.nativeEvent.clientY))
                            : s.nativeEvent &&
                              so(s.nativeEvent) &&
                              ((l = s.nativeEvent.touches[0].clientX),
                              (d = s.nativeEvent.touches[0].clientY)),
                        this.props.onResizeStart && this.resizable)
                    ) {
                        var c = this.props.onResizeStart(s, a, this.resizable);
                        if (c === !1) return;
                    }
                    (this.props.size &&
                        (typeof this.props.size.height < "u" &&
                            this.props.size.height !== this.state.height &&
                            this.setState({ height: this.props.size.height }),
                        typeof this.props.size.width < "u" &&
                            this.props.size.width !== this.state.width &&
                            this.setState({ width: this.props.size.width })),
                        (this.ratio =
                            typeof this.props.lockAspectRatio == "number"
                                ? this.props.lockAspectRatio
                                : this.size.width / this.size.height));
                    var h,
                        m = this.window.getComputedStyle(this.resizable);
                    if (m.flexBasis !== "auto") {
                        var g = this.parentNode;
                        if (g) {
                            var x =
                                this.window.getComputedStyle(g).flexDirection;
                            ((this.flexDir = x.startsWith("row")
                                ? "row"
                                : "column"),
                                (h = m.flexBasis));
                        }
                    }
                    (this.setBoundingClientRect(), this.bindEvents());
                    var v = {
                        original: {
                            x: l,
                            y: d,
                            width: this.size.width,
                            height: this.size.height,
                        },
                        isResizing: !0,
                        backgroundStyle: It(
                            It({}, this.state.backgroundStyle),
                            {
                                cursor:
                                    this.window.getComputedStyle(s.target)
                                        .cursor || "auto",
                            },
                        ),
                        direction: a,
                        flexBasis: h,
                    };
                    this.setState(v);
                }
            }),
            (r.prototype.onMouseMove = function (s) {
                var a = this;
                if (
                    !(!this.state.isResizing || !this.resizable || !this.window)
                ) {
                    if (this.window.TouchEvent && so(s))
                        try {
                            (s.preventDefault(), s.stopPropagation());
                        } catch {}
                    var l = this.props,
                        d = l.maxWidth,
                        c = l.maxHeight,
                        h = l.minWidth,
                        m = l.minHeight,
                        g = so(s) ? s.touches[0].clientX : s.clientX,
                        x = so(s) ? s.touches[0].clientY : s.clientY,
                        v = this.state,
                        w = v.direction,
                        j = v.original,
                        z = v.width,
                        T = v.height,
                        b = this.getParentSize(),
                        N = XS(
                            b,
                            this.window.innerWidth,
                            this.window.innerHeight,
                            d,
                            c,
                            h,
                            m,
                        );
                    ((d = N.maxWidth),
                        (c = N.maxHeight),
                        (h = N.minWidth),
                        (m = N.minHeight));
                    var C = this.calculateNewSizeFromDirection(g, x),
                        M = C.newHeight,
                        V = C.newWidth,
                        O = this.calculateNewMaxFromBoundary(d, c);
                    (this.props.snap &&
                        this.props.snap.x &&
                        (V = Kp(V, this.props.snap.x, this.props.snapGap)),
                        this.props.snap &&
                            this.props.snap.y &&
                            (M = Kp(M, this.props.snap.y, this.props.snapGap)));
                    var L = this.calculateNewSizeFromAspectRatio(
                        V,
                        M,
                        { width: O.maxWidth, height: O.maxHeight },
                        { width: h, height: m },
                    );
                    if (
                        ((V = L.newWidth), (M = L.newHeight), this.props.grid)
                    ) {
                        var E = Hp(
                                V,
                                this.props.grid[0],
                                this.props.gridGap ? this.props.gridGap[0] : 0,
                            ),
                            R = Hp(
                                M,
                                this.props.grid[1],
                                this.props.gridGap ? this.props.gridGap[1] : 0,
                            ),
                            G = this.props.snapGap || 0,
                            te = G === 0 || Math.abs(E - V) <= G ? E : V,
                            se = G === 0 || Math.abs(R - M) <= G ? R : M;
                        ((V = te), (M = se));
                    }
                    var xe = { width: V - j.width, height: M - j.height };
                    if (((this.delta = xe), z && typeof z == "string")) {
                        if (z.endsWith("%")) {
                            var le = (V / b.width) * 100;
                            V = "".concat(le, "%");
                        } else if (z.endsWith("vw")) {
                            var ye = (V / this.window.innerWidth) * 100;
                            V = "".concat(ye, "vw");
                        } else if (z.endsWith("vh")) {
                            var ke = (V / this.window.innerHeight) * 100;
                            V = "".concat(ke, "vh");
                        }
                    }
                    if (T && typeof T == "string") {
                        if (T.endsWith("%")) {
                            var le = (M / b.height) * 100;
                            M = "".concat(le, "%");
                        } else if (T.endsWith("vw")) {
                            var ye = (M / this.window.innerWidth) * 100;
                            M = "".concat(ye, "vw");
                        } else if (T.endsWith("vh")) {
                            var ke = (M / this.window.innerHeight) * 100;
                            M = "".concat(ke, "vh");
                        }
                    }
                    var fe = {
                        width: this.createSizeForCssProperty(V, "width"),
                        height: this.createSizeForCssProperty(M, "height"),
                    };
                    this.flexDir === "row"
                        ? (fe.flexBasis = fe.width)
                        : this.flexDir === "column" &&
                          (fe.flexBasis = fe.height);
                    var K = this.state.width !== fe.width,
                        B = this.state.height !== fe.height,
                        Z = this.state.flexBasis !== fe.flexBasis,
                        X = K || B || Z;
                    (X &&
                        WS.flushSync(function () {
                            a.setState(fe);
                        }),
                        this.props.onResize &&
                            X &&
                            this.props.onResize(s, w, this.resizable, xe));
                }
            }),
            (r.prototype.onMouseUp = function (s) {
                var a,
                    l,
                    d = this.state,
                    c = d.isResizing,
                    h = d.direction;
                (d.original,
                    !(!c || !this.resizable) &&
                        (this.props.onResizeStop &&
                            this.props.onResizeStop(
                                s,
                                h,
                                this.resizable,
                                this.delta,
                            ),
                        this.props.size &&
                            this.setState({
                                width:
                                    (a = this.props.size.width) !== null &&
                                    a !== void 0
                                        ? a
                                        : "auto",
                                height:
                                    (l = this.props.size.height) !== null &&
                                    l !== void 0
                                        ? l
                                        : "auto",
                            }),
                        this.unbindEvents(),
                        this.setState({
                            isResizing: !1,
                            backgroundStyle: It(
                                It({}, this.state.backgroundStyle),
                                { cursor: "auto" },
                            ),
                        })));
            }),
            (r.prototype.updateSize = function (s) {
                var a, l;
                this.setState({
                    width: (a = s.width) !== null && a !== void 0 ? a : "auto",
                    height:
                        (l = s.height) !== null && l !== void 0 ? l : "auto",
                });
            }),
            (r.prototype.renderResizer = function () {
                var s = this,
                    a = this.props,
                    l = a.enable,
                    d = a.handleStyles,
                    c = a.handleClasses,
                    h = a.handleWrapperStyle,
                    m = a.handleWrapperClass,
                    g = a.handleComponent;
                if (!l) return null;
                var x = Object.keys(l).map(function (v) {
                    return l[v] !== !1
                        ? p.jsx(
                              HS,
                              {
                                  direction: v,
                                  onResizeStart: s.onResizeStart,
                                  replaceStyles: d && d[v],
                                  className: c && c[v],
                                  children: g && g[v] ? g[v] : null,
                              },
                              v,
                          )
                        : null;
                });
                return p.jsx("div", { className: m, style: h, children: x });
            }),
            (r.prototype.render = function () {
                var s = this,
                    a = Object.keys(this.props).reduce(function (c, h) {
                        return (QS.indexOf(h) !== -1 || (c[h] = s.props[h]), c);
                    }, {}),
                    l = It(
                        It(
                            It(
                                {
                                    position: "relative",
                                    userSelect: this.state.isResizing
                                        ? "none"
                                        : "auto",
                                },
                                this.props.style,
                            ),
                            this.sizeStyle,
                        ),
                        {
                            maxWidth: this.props.maxWidth,
                            maxHeight: this.props.maxHeight,
                            minWidth: this.props.minWidth,
                            minHeight: this.props.minHeight,
                            boxSizing: "border-box",
                            flexShrink: 0,
                        },
                    );
                this.state.flexBasis && (l.flexBasis = this.state.flexBasis);
                var d = this.props.as || "div";
                return p.jsxs(
                    d,
                    It({ style: l, className: this.props.className }, a, {
                        ref: function (c) {
                            c && (s.resizable = c);
                        },
                        children: [
                            this.state.isResizing &&
                                p.jsx("div", {
                                    style: this.state.backgroundStyle,
                                }),
                            this.props.children,
                            this.renderResizer(),
                        ],
                    }),
                );
            }),
            (r.defaultProps = {
                as: "div",
                onResizeStart: function () {},
                onResize: function () {},
                onResizeStop: function () {},
                enable: {
                    top: !0,
                    right: !0,
                    bottom: !0,
                    left: !0,
                    topRight: !0,
                    bottomRight: !0,
                    bottomLeft: !0,
                    topLeft: !0,
                },
                style: {},
                grid: [1, 1],
                gridGap: [0, 0],
                lockAspectRatio: !1,
                lockAspectRatioExtraWidth: 0,
                lockAspectRatioExtraHeight: 0,
                scale: 1,
                resizeRatio: 1,
                snapGap: 0,
            }),
            r
        );
    })(I.PureComponent);
const Yp = {
        x: 24,
        y: 36,
        width: "calc(100vw - 48px)",
        height: "calc(100vh - 132px)",
    },
    ao = { left: 24, top: 36, right: 24, bottom: 96 };
function JS({ app: n, children: r, windowState: s, active: a }) {
    const l = I.useRef(null),
        d = ut((M) => M.closeWindow),
        c = ut((M) => M.minimizeWindow),
        h = ut((M) => M.toggleMaximize),
        m = ut((M) => M.bringToFront),
        g = ut((M) => M.updateGeometry),
        x = n.icon,
        v = s.maximized,
        w = v ? Yp : s.position,
        j = v ? Yp : s.size,
        z = typeof j.width == "number" ? j.width : s.size.width,
        T = typeof j.height == "number" ? j.height : s.size.height;
    function b() {
        m(s.id);
    }
    function N(M, V) {
        g(s.id, { position: { x: V.x, y: V.y } });
    }
    function C(M, V, O, L, E) {
        g(s.id, {
            position: E,
            size: { width: O.offsetWidth, height: O.offsetHeight },
        });
    }
    return p.jsx(US, {
        nodeRef: l,
        cancel: "button, input, textarea, select, a, [data-no-drag='true']",
        disabled: v,
        position: w,
        bounds: {
            left: ao.left,
            top: ao.top,
            right: window.innerWidth - ao.right - z,
            bottom: window.innerHeight - ao.bottom - T,
        },
        onStart: b,
        onStop: N,
        children: p.jsx("div", {
            ref: l,
            "data-no-desktop-menu": "true",
            className: "absolute",
            style: { zIndex: s.zIndex, width: j.width, height: j.height },
            children: p.jsx(AS.section, {
                className: `flex h-full w-full min-h-[280px] min-w-[320px] flex-col overflow-hidden border border-black/35 bg-[#2C2C2C] text-white shadow-window transition-all duration-200 ${v ? "rounded-none" : "rounded-lg"} ${a ? "ring-1 ring-white/20" : ""}`,
                style: {},
                "aria-label": s.title,
                initial: { opacity: 0, scale: 0.92 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.92 },
                transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
                onPointerDown: b,
                children: p.jsxs(ZS, {
                    size: j,
                    minWidth: 320,
                    minHeight: 280,
                    maxWidth: v ? void 0 : window.innerWidth - 84,
                    maxHeight: v ? void 0 : window.innerHeight - 152,
                    enable: {
                        top: !v,
                        right: !v,
                        bottom: !v,
                        left: !v,
                        topRight: !v,
                        bottomRight: !v,
                        bottomLeft: !v,
                        topLeft: !v,
                    },
                    onResizeStart: b,
                    onResizeStop: C,
                    className: "flex h-full flex-col",
                    children: [
                        p.jsx("div", {
                            className:
                                "window-titlebar flex h-10 shrink-0 cursor-move items-center justify-between border-b border-black/35 bg-[#242424] px-3 transition-all duration-200",
                            children: p.jsxs("div", {
                                className: "flex min-w-0 items-center gap-2",
                                children: [
                                    p.jsxs("div", {
                                        className:
                                            "flex shrink-0 items-center gap-2 pr-2",
                                        children: [
                                            p.jsx(ql, {
                                                color: "red",
                                                label: "Close",
                                                onClick: () => d(s.id),
                                            }),
                                            p.jsx(ql, {
                                                color: "yellow",
                                                label: "Minimize",
                                                onClick: () => c(s.id),
                                                children: p.jsx(hv, {
                                                    size: 9,
                                                    strokeWidth: 3,
                                                }),
                                            }),
                                            p.jsx(ql, {
                                                color: "green",
                                                label: v
                                                    ? "Restore"
                                                    : "Maximize",
                                                onClick: () => h(s.id),
                                            }),
                                        ],
                                    }),
                                    p.jsx(x, {
                                        size: 16,
                                        className: "shrink-0 text-white/75",
                                    }),
                                    p.jsx("h2", {
                                        className:
                                            "truncate text-sm font-semibold",
                                        children: s.title,
                                    }),
                                ],
                            }),
                        }),
                        p.jsx("div", {
                            className: `min-h-0 flex-1 overflow-auto ${n.id === "terminal" ? "terminal-scroll-surface bg-[#330d26] text-[#f7f1ed]" : "bg-[#f6f2ef] text-[#211821]"}`,
                            children: r,
                        }),
                    ],
                }),
            }),
        }),
    });
}
function ql({ children: n, color: r, label: s, onClick: a }) {
    const l = {
        red: "bg-[#ff5f57] hover:bg-[#ff6b63]",
        yellow: "bg-[#febc2e] hover:bg-[#ffd159]",
        green: "bg-[#28c840] hover:bg-[#35d957]",
    }[r];
    return p.jsx("button", {
        type: "button",
        "data-no-drag": "true",
        onClick: (d) => {
            (d.stopPropagation(), a());
        },
        className: `grid h-3.5 w-3.5 place-items-center rounded-full text-black/55 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18)] transition ${l}`,
        "aria-label": s,
        title: s,
        children: n,
    });
}
function eb({
    appsById: n,
    onOpenProjectDialog: r,
    portfolio: s,
    wallpaperColor: a,
    onWallpaperColorChange: l,
}) {
    const d = ut((m) => m.windows),
        c = ut(pm),
        h = I.useMemo(() => d.filter((m) => !m.minimized), [d]);
    return p.jsx(cx, {
        children: h.map((m) => {
            const g = n[m.id];
            if (!g) return null;
            const x = g.component;
            return p.jsx(
                JS,
                {
                    app: g,
                    windowState: m,
                    active: (c == null ? void 0 : c.id) === m.id,
                    children: p.jsx(x, {
                        portfolio: s,
                        onOpenProjectDialog: r,
                        wallpaperColor: a,
                        onWallpaperColorChange: l,
                    }),
                },
                m.id,
            );
        }),
    });
}
function tb({
    label: n,
    colorKey: r = "default",
    onOpen: s,
    onContextMenu: a,
}) {
    const [l, d] = I.useState(!1),
        c = I.useRef(null);
    function h() {
        (d(!0),
            !c.current &&
                (c.current = window.setTimeout(() => {
                    c.current = null;
                }, 250)));
    }
    function m() {
        (c.current && (window.clearTimeout(c.current), (c.current = null)),
            s == null || s());
    }
    function g() {
        d(!1);
    }
    function x(v) {
        if (a) {
            a(v);
            return;
        }
        v.preventDefault();
    }
    return p.jsxs("button", {
        type: "button",
        "data-no-desktop-menu": "true",
        onClick: h,
        onDoubleClick: m,
        onContextMenu: x,
        onBlur: g,
        className: `flex w-28 flex-col items-center gap-2 rounded-md p-2 text-center text-sm text-white outline-none transition-all duration-200 ${l ? "bg-[rgba(72,132,220,0.35)] ring-1 ring-[rgba(72,132,220,0.6)]" : "hover:bg-white/8"}`,
        "aria-label": n,
        title: n,
        children: [
            p.jsx(dm, {
                colorKey: r,
                className: "drop-shadow-[0_6px_12px_rgba(0,0,0,0.28)]",
            }),
            p.jsx("span", {
                className: `max-w-[72px] break-words text-[11px] leading-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ${l ? "rounded bg-[rgba(72,132,220,0.72)] px-1" : ""}`,
                children: n,
            }),
        ],
    });
}
const Gg = "/assets/ubuntu-wallpaper--l6zTbmJ.png",
    Xp = "ubuntu-wallpaper-color",
    qp = "#330d26",
    Qp = [
        {
            id: "about",
            title: "About Me",
            dockTitle: "Browser (About Me)",
            icon: tm,
            width: 760,
            height: 560,
            position: { x: 118, y: 74 },
            component: Rv,
        },
        {
            id: "projects",
            title: "Projects",
            icon: em,
            width: 860,
            height: 590,
            position: { x: 178, y: 94 },
            component: Yv,
        },
        {
            id: "terminal",
            title: "Terminal",
            dockTitle: "Terminal",
            icon: bo,
            width: 760,
            height: 480,
            position: { x: 250, y: 122 },
            component: Zv,
        },
        {
            id: "files",
            title: "Files",
            dockTitle: "Files",
            icon: Folder,
            width: 780,
            height: 520,
            position: { x: 220, y: 86 },
            component: Vv,
        },
        {
            id: "contact",
            title: "Contact",
            dockTitle: "Settings (Contact)",
            icon: om,
            width: 760,
            height: 530,
            position: { x: 300, y: 112 },
            component: zv,
        },
        {
            id: "settings",
            title: "Appearance",
            icon: yu,
            width: 650,
            height: 430,
            position: { x: 360, y: 120 },
            component: Qv,
        },
    ],
    nb = ["files", "terminal", "about", "contact"],
    rb = [
        { id: "files", label: "myProjects", colorKey: "default" },
        { id: "projects", label: "WEB DEVELOPMENT...", colorKey: "web" },
        { id: "about", label: "Home", colorKey: "fullstack" },
    ];
function ib(n) {
    const r = n.replace("#", "").trim();
    return r.length !== 6
        ? { r: 51, g: 13, b: 38 }
        : {
              r: Number.parseInt(r.slice(0, 2), 16),
              g: Number.parseInt(r.slice(2, 4), 16),
              b: Number.parseInt(r.slice(4, 6), 16),
          };
}
function xi(n, r) {
    const { r: s, g: a, b: l } = ib(n);
    return `rgba(${s}, ${a}, ${l}, ${r})`;
}
function sb(n) {
    return [
        { backgroundColor: xi(n, 0.22) },
        {
            background: `radial-gradient(circle at 80% 78%, ${xi(n, 0.45)}, ${xi(n, 0.18)} 44%, rgba(18, 9, 16, 0.24) 100%)`,
        },
        {
            background: `linear-gradient(135deg, ${xi(n, 0.52)}, ${xi(n, 0.22)} 45%, rgba(233, 84, 32, 0.22))`,
        },
    ];
}
function ob() {
    var fe;
    const [n, r] = I.useState(Si),
        [s, a] = I.useState(!1),
        [l, d] = I.useState(null),
        [c, h] = I.useState(!1),
        [m, g] = I.useState(null),
        [x, v] = I.useState(null),
        [w, j] = I.useState(0),
        [z, T] = I.useState(() =>
            typeof window > "u" ? qp : window.localStorage.getItem(Xp) || qp,
        ),
        b = I.useRef(null),
        N = I.useRef(!1),
        C = ut((K) => K.windows),
        M = ut(pm),
        V = ut((K) => K.openWindow),
        O = ut((K) => K.updateGeometry),
        L = I.useMemo(() => Object.fromEntries(Qp.map((K) => [K.id, K])), []),
        E = I.useMemo(() => nb.map((K) => L[K]), [L]);
    (I.useEffect(() => {
        let K = !0;
        return (
            kv().then((B) => {
                K && r(B);
            }),
            () => {
                K = !1;
            }
        );
    }, []),
        I.useEffect(() => {
            ut.getState().windows.length || V(L.about);
        }, [L, V]),
        I.useEffect(() => {
            N.current ||
                !C.length ||
                (C.forEach((K) => {
                    const B = L[K.id];
                    if (!B) return;
                    const Z = B.width || K.size.width || 760,
                        X = B.height || K.size.height || 520,
                        D = window.innerWidth,
                        U = window.innerHeight,
                        ue = 84,
                        ce = 48,
                        pe = 24,
                        me = 104,
                        be = Math.max(320, D - ue - pe),
                        we = Math.max(280, U - ce - me);
                    O(K.id, {
                        position: {
                            x: ue + Math.round((be - Z) / 2),
                            y: ce + Math.round((we - X) / 2),
                        },
                        size: K.size,
                    });
                }),
                (N.current = !0));
        }, [L, O, C]),
        I.useEffect(() => {
            function K(B) {
                B.key === "Escape" && (d(null), se());
            }
            return (
                window.addEventListener("keydown", K),
                () => window.removeEventListener("keydown", K)
            );
        }, []),
        I.useEffect(
            () => () => {
                b.current && window.clearTimeout(b.current);
            },
            [],
        ),
        I.useEffect(() => {
            window.localStorage.setItem(Xp, z);
        }, [z]));
    function R(K) {
        const B = L[K];
        B && (a(!1), V(B));
    }
    async function G(K) {
        const Z = (
            await Cv({
                ...K,
                type: K.category,
                createdDate: new Date().toISOString().slice(0, 10),
            })
        ).project;
        if (!Z) throw new Error("Project could not be saved.");
        (r((X) => ({
            ...X,
            projects: [Z, ...X.projects.filter((D) => D.slug !== Z.slug)],
        })),
            se(),
            R("files"),
            xe("Project saved successfully"));
    }
    function te(K) {
        (d(null), g(typeof K == "string" ? K : null), h(!0));
    }
    function se() {
        (h(!1), g(null));
    }
    function xe(K) {
        (b.current && window.clearTimeout(b.current),
            v({ id: Date.now(), message: K }),
            (b.current = window.setTimeout(() => {
                v(null);
            }, 3e3)));
    }
    function le() {
        (d(null), j((K) => (K + 1) % wallpaperOverlays.length));
    }
    function ye(K) {
        if (K.target.closest('[data-no-desktop-menu="true"]')) return;
        (K.preventDefault(),
            d({
                x: Math.min(K.clientX, window.innerWidth - 210 - 8),
                y: Math.min(K.clientY, window.innerHeight - 132 - 8),
            }));
    }
    const ke = M ? ((fe = L[M.id]) == null ? void 0 : fe.title) : "Desktop";
    return p.jsxs("section", {
        className:
            "relative h-screen w-screen overflow-hidden transition-all duration-200",
        onClick: () => d(null),
        onContextMenu: ye,
        children: [
            p.jsx("img", {
                src: Gg,
                alt: "",
                "aria-hidden": "true",
                className: "absolute inset-0 h-full w-full object-cover",
            }),
            p.jsx("div", {
                className: "absolute inset-0 transition-colors duration-500",
                style: sb(z)[w],
            }),
            p.jsx(sx, {
                activeAppName: ke,
                appsById: L,
                onActivities: () => a((K) => !K),
                onOpenContact: () => R("contact"),
            }),
            p.jsx(Lv, {
                apps: E,
                openWindows: C,
                onAddProject: te,
                onOpenApp: R,
                onLauncher: () => a((K) => !K),
            }),
            p.jsx(Gv, {
                apps: Qp,
                open: s,
                onOpenApp: R,
                onClose: () => a(!1),
            }),
            p.jsx("div", {
                className: "absolute right-5 top-14 z-20 grid gap-5",
                children: rb.map(
                    (K) => (
                        L[K.id],
                        p.jsx(
                            tb,
                            {
                                label: K.label,
                                colorKey: K.colorKey,
                                onOpen: () => R(K.id),
                                onContextMenu: (B) => {
                                    (B.preventDefault(), B.stopPropagation());
                                },
                            },
                            K.id,
                        )
                    ),
                ),
            }),
            l &&
                p.jsx(lb, {
                    x: l.x,
                    y: l.y,
                    onChangeWallpaper: le,
                    onNewProject: te,
                    onOpenTerminal: () => {
                        (d(null), R("terminal"));
                    },
                }),
            p.jsx(eb, {
                appsById: L,
                portfolio: n,
                onOpenProjectDialog: te,
                wallpaperColor: z,
                onWallpaperColorChange: T,
            }),
            c && p.jsx(Av, { initialCategory: m, onSave: G, onClose: se }),
            x && p.jsx(ab, { message: x.message }, x.id),
        ],
    });
}
function ab({ message: n }) {
    return p.jsxs("div", {
        "data-no-desktop-menu": "true",
        className:
            "absolute bottom-6 right-6 z-[95] flex min-h-12 min-w-72 items-center rounded-lg border border-white/10 bg-[#2C2C2C]/96 px-4 py-3 text-sm font-semibold text-white shadow-ubuntu backdrop-blur-xl transition-all duration-200",
        children: [
            p.jsx("span", {
                className: "mr-3 h-2.5 w-2.5 rounded-full bg-[#E95420]",
            }),
            n,
        ],
    });
}
function lb({
    x: n,
    y: r,
    onChangeWallpaper: s,
    onNewProject: a,
    onOpenTerminal: l,
}) {
    const d = [
        { label: "New Project", icon: av, action: a },
        { label: "Open Terminal", icon: bo, action: l },
        { label: "Change Wallpaper", icon: yu, action: s },
    ];
    return p.jsx("div", {
        "data-no-desktop-menu": "true",
        className:
            "absolute z-[85] w-[210px] overflow-hidden rounded-lg border border-white/10 bg-[#242024]/96 py-1 text-sm text-white shadow-ubuntu backdrop-blur-2xl transition-all duration-200",
        style: { left: n, top: r },
        onClick: (c) => c.stopPropagation(),
        children: d.map((c) => {
            const h = c.icon;
            return p.jsxs(
                "button",
                {
                    type: "button",
                    onClick: c.action,
                    className:
                        "flex h-10 w-full items-center gap-3 px-3 text-left transition-all duration-200 hover:bg-ubuntu-orange focus:bg-ubuntu-orange focus:outline-none",
                    children: [
                        p.jsx(h, { size: 16, className: "text-white/75" }),
                        p.jsx("span", { children: c.label }),
                    ],
                },
                c.label,
            );
        }),
    });
}
function ub({ unlocking: n, onUnlock: r }) {
    const { time: s, seconds: a, date: l } = hm(),
        [d, c] = I.useState(""),
        h = I.useRef(null);
    I.useEffect(() => {
        function g(x) {
            var v;
            if (!n) {
                if (x.key === "Enter") {
                    r();
                    return;
                }
                x.key.length === 1 && ((v = h.current) == null || v.focus());
            }
        }
        return (
            window.addEventListener("keydown", g),
            () => window.removeEventListener("keydown", g)
        );
    }, [r, n]);
    function m(g) {
        (g.preventDefault(), r(d));
    }
    return p.jsxs("section", {
        className: `fixed inset-0 z-50 transition-all duration-200 ${n ? "pointer-events-none scale-[1.02] opacity-0 blur-xl" : "scale-100 opacity-100 blur-0"}`,
        children: [
            p.jsx("img", {
                src: Gg,
                alt: "",
                "aria-hidden": "true",
                className:
                    "absolute inset-0 h-full w-full scale-105 object-cover blur-sm",
            }),
            p.jsx("div", {
                className:
                    "absolute inset-0 bg-ubuntu-aubergine/60 backdrop-blur-md",
            }),
            p.jsx("div", { className: "absolute inset-0 bg-black/10" }),
            p.jsx("div", {
                className:
                    "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",
                children: p.jsxs("div", {
                    className:
                        "flex flex-col items-center transition-all duration-200",
                    children: [
                        p.jsx("div", {
                            className:
                                "mb-6 grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-ubuntu-cream to-[#c9b8c2] text-4xl font-semibold text-ubuntu-aubergine shadow-ubuntu transition-all duration-200",
                            children: "MA",
                        }),
                        p.jsx("div", {
                            className: "text-xl font-medium",
                            children: "marvelade",
                        }),
                        p.jsxs("div", {
                            className: "mt-6 flex items-end gap-2",
                            children: [
                                p.jsx("div", {
                                    className:
                                        "text-7xl font-light leading-none sm:text-8xl",
                                    children: s,
                                }),
                                p.jsx("div", {
                                    className: "mb-2 text-2xl text-white/75",
                                    children: a,
                                }),
                            ],
                        }),
                        p.jsx("div", {
                            className: "mt-3 text-lg text-white/85",
                            children: l,
                        }),
                        p.jsxs("form", {
                            onSubmit: m,
                            className:
                                "mt-10 flex h-12 w-full max-w-sm items-center overflow-hidden rounded-md border border-white/20 bg-black/25 shadow-ubuntu backdrop-blur-xl transition-all duration-200",
                            children: [
                                p.jsx("input", {
                                    ref: h,
                                    type: "password",
                                    value: d,
                                    onChange: (g) => c(g.target.value),
                                    className:
                                        "h-full min-w-0 flex-1 bg-transparent px-4 text-base text-white outline-none placeholder:text-white/45",
                                    placeholder: "Password",
                                    "aria-label": "Password",
                                    autoComplete: "current-password",
                                }),
                                p.jsx("button", {
                                    type: "submit",
                                    className:
                                        "grid h-12 w-12 place-items-center border-l border-white/15 bg-white/10 text-white transition-all duration-200 hover:bg-ubuntu-orange focus:bg-ubuntu-orange focus:outline-none",
                                    "aria-label": "Unlock",
                                    title: "Unlock",
                                    children: p.jsx(nv, {
                                        size: 20,
                                        strokeWidth: 2.3,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            p.jsx("div", {
                className:
                    "absolute bottom-7 left-0 right-0 z-10 text-center text-sm text-white/60",
                children: "Press any key",
            }),
        ],
    });
}
function cb() {
    const [n, r] = I.useState(!0),
        [s, a] = I.useState(!1);
    function l() {
        s || (a(!0), window.setTimeout(() => r(!1), 850));
    }
    return p.jsxs("main", {
        className:
            "h-screen w-screen overflow-hidden bg-ubuntu-aubergine font-ubuntu text-white",
        children: [
            (!n || s) && p.jsx(ob, {}),
            n && p.jsx(ub, { unlocking: s, onUnlock: l }),
        ],
    });
}
Zy.createRoot(document.getElementById("root")).render(
    p.jsx(wi.StrictMode, { children: p.jsx(cb, {}) }),
);
