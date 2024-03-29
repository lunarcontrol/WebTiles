/**
 * Portions of this code are from the Google Closure Library,
 * received from the Closure Authors under the Apache 2.0 license.
 *
 * All other code is (C) FriendsOfSymfony and subject to the MIT license.
 */
(function() {
    var f = !1, i, k = this;
    function l(a, c) {
        var b = a.split(".")
          , d = k;
        !(b[0]in d) && d.execScript && d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift()); )
            !b.length && void 0 !== c ? d[e] = c : d = d[e] ? d[e] : d[e] = {}
    }
    ;var m = Array.prototype
      , n = m.forEach ? function(a, c, b) {
        m.forEach.call(a, c, b)
    }
    : function(a, c, b) {
        for (var d = a.length, e = "string" == typeof a ? a.split("") : a, g = 0; g < d; g++)
            g in e && c.call(b, e[g], g, a)
    }
    ;
    function q(a, c) {
        this.c = {};
        this.a = [];
        var b = arguments.length;
        if (1 < b) {
            if (b % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < b; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            var e;
            if (a instanceof q) {
                r(a);
                d = a.a.concat();
                r(a);
                e = [];
                for (b = 0; b < a.a.length; b++)
                    e.push(a.c[a.a[b]])
            } else {
                var b = []
                  , g = 0;
                for (d in a)
                    b[g++] = d;
                d = b;
                b = [];
                g = 0;
                for (e in a)
                    b[g++] = a[e];
                e = b
            }
            for (b = 0; b < d.length; b++)
                this.set(d[b], e[b])
        }
    }
    q.prototype.f = 0;
    q.prototype.p = 0;
    function r(a) {
        if (a.f != a.a.length) {
            for (var c = 0, b = 0; c < a.a.length; ) {
                var d = a.a[c];
                t(a.c, d) && (a.a[b++] = d);
                c++
            }
            a.a.length = b
        }
        if (a.f != a.a.length) {
            for (var e = {}, b = c = 0; c < a.a.length; )
                d = a.a[c],
                t(e, d) || (a.a[b++] = d,
                e[d] = 1),
                c++;
            a.a.length = b
        }
    }
    q.prototype.get = function(a, c) {
        return t(this.c, a) ? this.c[a] : c
    }
    ;
    q.prototype.set = function(a, c) {
        t(this.c, a) || (this.f++,
        this.a.push(a),
        this.p++);
        this.c[a] = c
    }
    ;
    function t(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    }
    ;var u, v, w, x;
    function y() {
        return k.navigator ? k.navigator.userAgent : null
    }
    x = w = v = u = f;
    var C;
    if (C = y()) {
        var D = k.navigator;
        u = 0 == C.indexOf("Opera");
        v = !u && -1 != C.indexOf("MSIE");
        w = !u && -1 != C.indexOf("WebKit");
        x = !u && !w && "Gecko" == D.product
    }
    var E = v
      , F = x
      , G = w;
    var I;
    if (u && k.opera) {
        var J = k.opera.version;
        "function" == typeof J && J()
    } else
        F ? I = /rv\:([^\);]+)(\)|;)/ : E ? I = /MSIE\s+([^\);]+)(\)|;)/ : G && (I = /WebKit\/(\S+)/),
        I && I.exec(y());
    function K(a, c) {
        this.b = a || {
            e: "",
            prefix: "",
            host: "",
            scheme: ""
        };
        this.h(c || {})
    }
    K.g = function() {
        return K.j ? K.j : K.j = new K
    }
    ;
    i = K.prototype;
    i.h = function(a) {
        this.d = new q(a)
    }
    ;
    i.o = function() {
        return this.d
    }
    ;
    i.k = function(a) {
        this.b.e = a
    }
    ;
    i.n = function() {
        return this.b.e
    }
    ;
    i.l = function(a) {
        this.b.prefix = a
    }
    ;
    function L(a, c, b, d) {
        var e, g = RegExp(/\[\]$/);
        if (b instanceof Array)
            n(b, function(b, e) {
                g.test(c) ? d(c, b) : L(a, c + "[" + ("object" === typeof b ? e : "") + "]", b, d)
            });
        else if ("object" === typeof b)
            for (e in b)
                L(a, c + "[" + e + "]", b[e], d);
        else
            d(c, b)
    }
    i.i = function(a) {
        var c = this.b.prefix + a;
        if (t(this.d.c, c))
            a = c;
        else if (!t(this.d.c, a))
            throw Error('The route "' + a + '" does not exist.');
        return this.d.get(a)
    }
    ;
    i.m = function(a, c, b) {
        var d = this.i(a), e = c || {}, g = {}, z;
        for (z in e)
            g[z] = e[z];
        var h = ""
          , s = !0
          , j = "";
        n(d.tokens, function(b) {
            if ("text" === b[0])
                h = b[1] + h,
                s = f;
            else if ("variable" === b[0]) {
                var c = b[3]in d.defaults;
                if (f === s || !c || b[3]in e && e[b[3]] != d.defaults[b[3]]) {
                    if (b[3]in e) {
                        var c = e[b[3]]
                          , p = b[3];
                        p in g && delete g[p]
                    } else if (c)
                        c = d.defaults[b[3]];
                    else {
                        if (s)
                            return;
                        throw Error('The route "' + a + '" requires the parameter "' + b[3] + '".');
                    }
                    if (!(!0 === c || f === c || "" === c) || !s)
                        p = encodeURIComponent(c).replace(/%2F/g, "/"),
                        "null" === p && null === c && (p = ""),
                        h = b[1] + p + h;
                    s = f
                } else
                    c && (b = b[3],
                    b in g && delete g[b])
            } else
                throw Error('The token type "' + b[0] + '" is not supported.');
        });
        "" === h && (h = "/");
        n(d.hosttokens, function(a) {
            var b;
            if ("text" === a[0])
                j = a[1] + j;
            else if ("variable" === a[0]) {
                if (a[3]in e) {
                    b = e[a[3]];
                    var c = a[3];
                    c in g && delete g[c]
                } else
                    a[3]in d.defaults && (b = d.defaults[a[3]]);
                j = a[1] + b + j
            }
        });
        h = this.b.e + h;
        "_scheme"in d.requirements && this.b.scheme != d.requirements._scheme ? h = d.requirements._scheme + "://" + (j || this.b.host) + h : j && this.b.host !== j ? h = this.b.scheme + "://" + j + h : !0 === b && (h = this.b.scheme + "://" + this.b.host + h);
        var c = 0, A;
        for (A in g)
            c++;
        if (0 < c) {
            var B, H = [];
            A = function(a, b) {
                b = "function" === typeof b ? b() : b;
                H.push(encodeURIComponent(a) + "=" + encodeURIComponent(null === b ? "" : b))
            }
            ;
            for (B in g)
                L(this, B, g[B], A);
            h = h + "?" + H.join("&").replace(/%20/g, "+")
        }
        return h
    }
    ;
    l("fos.Router", K);
    l("fos.Router.setData", function(a) {
        var c = K.g();
        c.k(a.base_url);
        c.h(a.routes);
        "prefix"in a && c.l(a.prefix);
        c.b.host = a.host;
        c.b.scheme = a.scheme
    });
    K.getInstance = K.g;
    K.prototype.setRoutes = K.prototype.h;
    K.prototype.getRoutes = K.prototype.o;
    K.prototype.setBaseUrl = K.prototype.k;
    K.prototype.getBaseUrl = K.prototype.n;
    K.prototype.generate = K.prototype.m;
    K.prototype.setPrefix = K.prototype.l;
    K.prototype.getRoute = K.prototype.i;
    window.Routing = K.g();
}
)();
