!function (t) { var e = {}; function n(o) { if (e[o]) return e[o].exports; var r = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports } n.m = t, n.c = e, n.d = function (t, e, o) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var o = Object.create(null); if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function (e) { return t[e] }.bind(null, r)); return o }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, "a", e), e }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 9) }([function (t, e) { t.exports = function (t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } }, function (t, e, n) { t.exports = n(7) }, function (t, e) { function n(t, e, n, o, r, i, a) { try { var c = t[i](a), s = c.value } catch (t) { return void n(t) } c.done ? e(s) : Promise.resolve(s).then(o, r) } t.exports = function (t) { return function () { var e = this, o = arguments; return new Promise((function (r, i) { var a = t.apply(e, o); function c(t) { n(a, r, i, c, s, "next", t) } function s(t) { n(a, r, i, c, s, "throw", t) } c(void 0) })) } } }, function (t, e) { t.exports = tingle }, function (t, e) { t.exports = function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } }, function (t, e) { function n(t, e) { for (var n = 0; n < e.length; n++) { var o = e[n]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o) } } t.exports = function (t, e, o) { return e && n(t.prototype, e), o && n(t, o), t } }, function (t, e, n) { !function () { function e(t, e) { document.addEventListener ? t.addEventListener("scroll", e, !1) : t.attachEvent("scroll", e) } function n(t) { this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(t)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c) } function o(t, e) { t.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + e + ";" } function r(t) { var e = t.a.offsetWidth, n = e + 100; return t.f.style.width = n + "px", t.c.scrollLeft = n, t.b.scrollLeft = t.b.scrollWidth + 100, t.g !== e && (t.g = e, !0) } function i(t, n) { function o() { var t = i; r(t) && t.a.parentNode && n(t.g) } var i = t; e(t.b, o), e(t.c, o), r(t) } function a(t, e) { var n = e || {}; this.family = t, this.style = n.style || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "normal" } var c = null, s = null, u = null, l = null; function d() { return null === l && (l = !!document.fonts), l } function h() { if (null === u) { var t = document.createElement("div"); try { t.style.font = "condensed 100px sans-serif" } catch (t) { } u = "" !== t.style.font } return u } function f(t, e) { return [t.style, t.weight, h() ? t.stretch : "", "100px", e].join(" ") } a.prototype.load = function (t, e) { var r = this, a = t || "BESbswy", u = 0, l = e || 3e3, h = (new Date).getTime(); return new Promise((function (t, e) { if (d() && !function () { if (null === s) if (d() && /Apple/.test(window.navigator.vendor)) { var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent); s = !!t && 603 > parseInt(t[1], 10) } else s = !1; return s }()) { var p = new Promise((function (t, e) { !function n() { (new Date).getTime() - h >= l ? e(Error(l + "ms timeout exceeded")) : document.fonts.load(f(r, '"' + r.family + '"'), a).then((function (e) { 1 <= e.length ? t() : setTimeout(n, 25) }), e) }() })), m = new Promise((function (t, e) { u = setTimeout((function () { e(Error(l + "ms timeout exceeded")) }), l) })); Promise.race([m, p]).then((function () { clearTimeout(u), t(r) }), e) } else !function (t) { document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", (function e() { document.removeEventListener("DOMContentLoaded", e), t() })) : document.attachEvent("onreadystatechange", (function e() { "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", e), t()) })) }((function () { function s() { var e; (e = -1 != v && -1 != g || -1 != v && -1 != y || -1 != g && -1 != y) && ((e = v != g && v != y && g != y) || (null === c && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), c = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), e = c && (v == w && g == w && y == w || v == b && g == b && y == b || v == x && g == x && y == x)), e = !e), e && (k.parentNode && k.parentNode.removeChild(k), clearTimeout(u), t(r)) } var d = new n(a), p = new n(a), m = new n(a), v = -1, g = -1, y = -1, w = -1, b = -1, x = -1, k = document.createElement("div"); k.dir = "ltr", o(d, f(r, "sans-serif")), o(p, f(r, "serif")), o(m, f(r, "monospace")), k.appendChild(d.a), k.appendChild(p.a), k.appendChild(m.a), document.body.appendChild(k), w = d.a.offsetWidth, b = p.a.offsetWidth, x = m.a.offsetWidth, function t() { if ((new Date).getTime() - h >= l) k.parentNode && k.parentNode.removeChild(k), e(Error(l + "ms timeout exceeded")); else { var n = document.hidden; !0 !== n && void 0 !== n || (v = d.a.offsetWidth, g = p.a.offsetWidth, y = m.a.offsetWidth, s()), u = setTimeout(t, 50) } }(), i(d, (function (t) { v = t, s() })), o(d, f(r, '"' + r.family + '",sans-serif')), i(p, (function (t) { g = t, s() })), o(p, f(r, '"' + r.family + '",serif')), i(m, (function (t) { y = t, s() })), o(m, f(r, '"' + r.family + '",monospace')) })) })) }, t.exports = a }() }, function (t, e, n) { var o = function (t) { "use strict"; var e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, r = o.iterator || "@@iterator", i = o.asyncIterator || "@@asyncIterator", a = o.toStringTag || "@@toStringTag"; function c(t, e, n) { return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e] } try { c({}, "") } catch (t) { c = function (t, e, n) { return t[e] = n } } function s(t, e, n, o) { var r = e && e.prototype instanceof d ? e : d, i = Object.create(r.prototype), a = new E(o || []); return i._invoke = function (t, e, n) { var o = "suspendedStart"; return function (r, i) { if ("executing" === o) throw new Error("Generator is already running"); if ("completed" === o) { if ("throw" === r) throw i; return L() } for (n.method = r, n.arg = i; ;) { var a = n.delegate; if (a) { var c = b(a, n); if (c) { if (c === l) continue; return c } } if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) { if ("suspendedStart" === o) throw o = "completed", n.arg; n.dispatchException(n.arg) } else "return" === n.method && n.abrupt("return", n.arg); o = "executing"; var s = u(t, e, n); if ("normal" === s.type) { if (o = n.done ? "completed" : "suspendedYield", s.arg === l) continue; return { value: s.arg, done: n.done } } "throw" === s.type && (o = "completed", n.method = "throw", n.arg = s.arg) } } }(t, n, a), i } function u(t, e, n) { try { return { type: "normal", arg: t.call(e, n) } } catch (t) { return { type: "throw", arg: t } } } t.wrap = s; var l = {}; function d() { } function h() { } function f() { } var p = {}; p[r] = function () { return this }; var m = Object.getPrototypeOf, v = m && m(m(M([]))); v && v !== e && n.call(v, r) && (p = v); var g = f.prototype = d.prototype = Object.create(p); function y(t) { ["next", "throw", "return"].forEach((function (e) { c(t, e, (function (t) { return this._invoke(e, t) })) })) } function w(t, e) { var o; this._invoke = function (r, i) { function a() { return new e((function (o, a) { !function o(r, i, a, c) { var s = u(t[r], t, i); if ("throw" !== s.type) { var l = s.arg, d = l.value; return d && "object" == typeof d && n.call(d, "__await") ? e.resolve(d.__await).then((function (t) { o("next", t, a, c) }), (function (t) { o("throw", t, a, c) })) : e.resolve(d).then((function (t) { l.value = t, a(l) }), (function (t) { return o("throw", t, a, c) })) } c(s.arg) }(r, i, o, a) })) } return o = o ? o.then(a, a) : a() } } function b(t, e) { var n = t.iterator[e.method]; if (void 0 === n) { if (e.delegate = null, "throw" === e.method) { if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return l; e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method") } return l } var o = u(n, t.iterator, e.arg); if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l; var r = o.arg; return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l) } function x(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e) } function k(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e } function E(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(x, this), this.reset(!0) } function M(t) { if (t) { var e = t[r]; if (e) return e.call(t); if ("function" == typeof t.next) return t; if (!isNaN(t.length)) { var o = -1, i = function e() { for (; ++o < t.length;)if (n.call(t, o)) return e.value = t[o], e.done = !1, e; return e.value = void 0, e.done = !0, e }; return i.next = i } } return { next: L } } function L() { return { value: void 0, done: !0 } } return h.prototype = g.constructor = f, f.constructor = h, h.displayName = c(f, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name)) }, t.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f, c(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t }, t.awrap = function (t) { return { __await: t } }, y(w.prototype), w.prototype[i] = function () { return this }, t.AsyncIterator = w, t.async = function (e, n, o, r, i) { void 0 === i && (i = Promise); var a = new w(s(e, n, o, r), i); return t.isGeneratorFunction(n) ? a : a.next().then((function (t) { return t.done ? t.value : a.next() })) }, y(g), c(g, a, "Generator"), g[r] = function () { return this }, g.toString = function () { return "[object Generator]" }, t.keys = function (t) { var e = []; for (var n in t) e.push(n); return e.reverse(), function n() { for (; e.length;) { var o = e.pop(); if (o in t) return n.value = o, n.done = !1, n } return n.done = !0, n } }, t.values = M, E.prototype = { constructor: E, reset: function (t) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0) }, stop: function () { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval }, dispatchException: function (t) { if (this.done) throw t; var e = this; function o(n, o) { return a.type = "throw", a.arg = t, e.next = n, o && (e.method = "next", e.arg = void 0), !!o } for (var r = this.tryEntries.length - 1; r >= 0; --r) { var i = this.tryEntries[r], a = i.completion; if ("root" === i.tryLoc) return o("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), s = n.call(i, "finallyLoc"); if (c && s) { if (this.prev < i.catchLoc) return o(i.catchLoc, !0); if (this.prev < i.finallyLoc) return o(i.finallyLoc) } else if (c) { if (this.prev < i.catchLoc) return o(i.catchLoc, !0) } else { if (!s) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return o(i.finallyLoc) } } } }, abrupt: function (t, e) { for (var o = this.tryEntries.length - 1; o >= 0; --o) { var r = this.tryEntries[o]; if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var i = r; break } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a) }, complete: function (t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l }, finish: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), l } }, catch: function (t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n.tryLoc === t) { var o = n.completion; if ("throw" === o.type) { var r = o.arg; k(n) } return r } } throw new Error("illegal catch attempt") }, delegateYield: function (t, e, n) { return this.delegate = { iterator: M(t), resultName: e, nextLoc: n }, "next" === this.method && (this.arg = void 0), l } }, t }(t.exports); try { regeneratorRuntime = o } catch (t) { Function("r", "regeneratorRuntime = r")(o) } }, function (t, e, n) { }, function (t, e, n) { "use strict"; n.r(e); var o = n(1), r = n.n(o), i = n(2), a = n.n(i), c = n(4), s = n.n(c), u = n(5), l = n.n(u), d = n(0), h = n.n(d), f = n(3), p = n(6), m = n.n(p), v = function (t) { return t >= 0 ? t <= 255 ? t : 255 : 0 }, g = function (t) { return t >= -128 ? t <= 127 ? t : 127 : -128 }, y = function (t) { return t.charCodeAt(0) > 31 && t.charCodeAt(0) < 127 ? 61 : 122 }, w = (n(8), function () { function t() { s()(this, t), h()(this, "isPatina", !1), h()(this, "originImage", void 0), h()(this, "imgElement", void 0), h()(this, "readyFlag", !1), h()(this, "generating", !1), h()(this, "imageFilename", "ZZKIA"), h()(this, "donateModal", void 0), h()(this, "defaultText", "请输入内容....."), h()(this, "payModal", void 0), h()(this, "selfieModal", void 0), h()(this, "takeoutModal", void 0), h()(this, "nav1Modal", void 0), h()(this, "nav2Modal", void 0), h()(this, "nav3Modal", void 0), h()(this, "nokiaModal", void 0), h()(this, "adCount", 0), h()(this, "takeoutAdThreshold", 4), h()(this, "promotionMode", !1), h()(this, "inWechat", !1), h()(this, "inPC", !1), h()(this, "inMobile", !1); var e = navigator.userAgent.toLowerCase(), n = !("wxwork" == e.match(/wxwork/i)) && "micromessenger" == e.match(/micromessenger/i); navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile)/i) ? this.inMobile = !0 : this.inPC = !0, this.inWechat = n, this.registerEvent(), this.fillModalContent() } var e, n, o, i, c, u, d; return l()(t, [{ key: "fetchImage", value: (d = a()(r.a.mark((function t() { return r.a.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: return t.abrupt("return", new Promise((function (t) { var e = new Image; e.crossOrigin = "Anonymous", e.onload = function (n) { t(e) }, e.src = "http://crazyl.work/images/njy.jpg" }))); case 1: case "end": return t.stop() } }), t) }))), function () { return d.apply(this, arguments) }) }, { key: "loadOriginImage", value: (u = a()(r.a.mark((function t() { return r.a.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: return t.next = 2, this.fetchImage(); case 2: this.originImage = t.sent, this.imgElement = document.getElementById("nokiaImage"); case 4: case "end": return t.stop() } }), t, this) }))), function () { return u.apply(this, arguments) }) }, { key: "increaseAdCount", value: function () { this.adCount += 1, this.showTakeoutAd() } }, { key: "showTakeoutAd", value: function () { if (this.adCount % this.takeoutAdThreshold == 0) { var t = (new Date).getHours(); (t >= 11 && t <= 1 || t >= 16 && t <= 20) && this.takeoutModal.open() } } }, { key: "showDonation", value: function () { this.donateModal.open() } }, { key: "openMiniProgram", value: function (t) { this.inMobile && !this.inWechat && window.open(t) } }, { key: "registerEvent", value: function () { var t, e, n, o = this, r = document.getElementById("text"), i = document.getElementById("nokiaImage"); r.addEventListener("keypress", (function (t) { "Enter" === t.key && (o.generateImage(r.value), o.increaseAdCount()) })), document.getElementById("generate").addEventListener("click", (function (t) { o.readyFlag && !o.generating && (o.promotionMode ? o.nokiaModal.open() : (o.generateImage(r.value), o.increaseAdCount())) })), document.getElementById("download").addEventListener("click", (function (t) { o.download() })), document.getElementById("patina").addEventListener("change", (function (t) { o.isPatina = t.target.checked })), document.querySelectorAll(".weapp").forEach((function (t) { return t.addEventListener("click", (function (t) { o.selfieModal.open() })) })), null === (t = document.getElementById("nav1")) || void 0 === t || t.addEventListener("click", (function (t) { o.nav1Modal.open() })), null === (e = document.getElementById("nav2")) || void 0 === e || e.addEventListener("click", (function (t) { o.nav2Modal.open() })), null === (n = document.getElementById("nav3")) || void 0 === n || n.addEventListener("click", (function (t) { o.takeoutModal.open(), o.navigateToTakeout() })); var a = document.querySelectorAll(".nokia-thumbnail"); a.forEach((function (t) { t.addEventListener("click", (function (t) { console.log(t); var e = t.target; a.forEach((function (t) { t.classList.remove("focused-nokia") })), e.classList.add("focused-nokia"); var n = e.getAttribute("id"); o.promotionMode = "nokia1" !== n; var r = e.getAttribute("src"); i.setAttribute("src", r) })) })) } }, { key: "navigateToTakeout", value: function () { } }, { key: "download", value: function () { var t = document.createElement("a"); t.download = "".concat(this.imageFilename, ".png"), t.style.display = "none", t.href = this.imgElement.src, document.body.appendChild(t), t.click(), document.body.removeChild(t) } }, { key: "toggleGenerating", value: function () { this.generating = !this.generating; var t = document.getElementById("generate-text"); t && (this.generating ? t.textContent = "生成中" : t.textContent = "生成") } }, { key: "patina", value: (c = a()(r.a.mark((function t(e) { return r.a.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: return t.abrupt("return", new Promise((function (t) { var n = new Image; n.onload = function (e) { var o = document.createElement("canvas"); o.width = n.width, o.height = n.height; var r = o.getContext("2d"); if (r) { r.clearRect(0, 0, n.width, n.height), r.drawImage(n, 0, 0); for (var i = r.getImageData(0, 0, n.width, n.height), a = i.data, c = 0; c < a.length / 4; ++c) { var s = a[4 * c], u = a[4 * c + 1], l = a[4 * c + 2], d = v(77 * s + 150 * u + 29 * l >> 8), h = g((-43 * s - 85 * u + 128 * l >> 8) - 1), f = g((128 * s - 107 * u - 21 * l >> 8) - 1), p = v(65536 * d + 91881 * f >> 16), m = v(65536 * d - 22553 * h - 46802 * f >> 16), y = v(65536 * d + 116130 * h >> 16); a[4 * c] = p, a[4 * c + 1] = m, a[4 * c + 2] = y } r.putImageData(i, 0, 0), t(o.toDataURL("image/png", .55)) } }, n.src = e }))); case 1: case "end": return t.stop() } }), t) }))), function (t) { return c.apply(this, arguments) }) }, { key: "getText", value: (i = a()(r.a.mark((function t(e, n) { var o, i, a, c, s, u, l, d; return r.a.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: e = e.substring(0, 900), (o = document.createElement("canvas")).width = 1600, o.height = 1600, (i = o.getContext("2d")).clearRect(0, 0, 1600, 1600), i.rotate(9.4 * Math.PI / 180), i.font = "108px CustomFont", i.fillStyle = "#81D4FA", a = "".concat(e.length), i.fillText("".concat(a, "/900"), 1150 - 60 * a.length, 100), i.fillStyle = n, c = 0, s = 250, u = "", l = 336, d = 0; case 15: if (!(d < e.length)) { t.next = 24; break } if ((c += y(e[d])) > 1200 && (i.fillText(u, l, s), c = y(e[d]), s += 130, u = ""), !(s >= 850)) { t.next = 20; break } return t.abrupt("break", 24); case 20: u += e[d]; case 21: ++d, t.next = 15; break; case 24: return i.fillText(u, l, s), t.abrupt("return", new Promise((function (t) { var e = new Image; e.onload = function (n) { t(e) }, e.src = o.toDataURL() }))); case 26: case "end": return t.stop() } }), t) }))), function (t, e) { return i.apply(this, arguments) }) }, { key: "generateImage", value: (o = a()(r.a.mark((function t(e) { var n, o, i, a, c, s, u, l, d; return r.a.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: if (n = this.originImage, o = n.width, i = n.height, a = o / i, this.imageFilename = e, this.toggleGenerating(), (c = document.createElement("canvas")).width = o, c.height = i, s = c.getContext("2d")) { t.next = 10; break } return t.abrupt("return"); case 10: return s.clearRect(0, 0, o, i), s.drawImage(this.originImage, 0, 0, o, i, 0, 0, o, i), t.next = 14, this.getText(e, "rgba(0, 0, 0, 0.75)"); case 14: if (u = t.sent, s.drawImage(u, 0, 0, u.width, u.height, .05 * o, .165 * i, u.width * a * .63, u.height * a * .63), l = c.toDataURL("image/png"), !this.isPatina) { t.next = 26; break } d = 0; case 19: if (!(d < 10)) { t.next = 26; break } return t.next = 22, this.patina(l); case 22: l = t.sent; case 23: ++d, t.next = 19; break; case 26: this.imgElement.src = l, this.toggleGenerating(); case 28: case "end": return t.stop() } }), t, this) }))), function (t) { return o.apply(this, arguments) }) }, { key: "loadFonts", value: (n = a()(r.a.mark((function t() { var e; return r.a.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: return e = new m.a("CustomFont"), t.next = 3, e.load(null, 2e4); case 3: case "end": return t.stop() } }), t) }))), function () { return n.apply(this, arguments) }) }, { key: "prepare", value: (e = a()(r.a.mark((function t() { return r.a.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: return this.loading(!0), t.next = 3, this.loadFonts(); case 3: return t.next = 5, this.loadOriginImage(); case 5: return t.next = 7, this.generateImage(this.defaultText); case 7: this.loading(!1); case 8: case "end": return t.stop() } }), t, this) }))), function () { return e.apply(this, arguments) }) }, { key: "fillModalContent", value: function () { var t = this; this.donateModal = new f.modal({ footer: !0, stickyFooter: !1, closeMethods: ["escape", "overlay", "button"], closeLabel: "已经赞赏过啦" }), this.payModal = new f.modal({ closeMethods: ["escape", "overlay", "button"], closeLabel: "谢谢侬！" }), this.takeoutModal = new f.modal({ footer: !0, stickyFooter: !1, closeMethods: ["escape", "overlay", "button"], closeLabel: "下次" }), this.selfieModal = new f.modal({ closeMethods: ["escape", "overlay", "button"], closeLabel: "关闭" }), this.nav1Modal = new f.modal({ closeMethods: ["escape", "overlay", "button"], closeLabel: "关闭" }), this.nav2Modal = new f.modal({ closeMethods: ["escape", "overlay", "button"], closeLabel: "关闭" }), this.nav3Modal = new f.modal({ closeMethods: ["escape", "overlay", "button"], closeLabel: "关闭" }), this.nokiaModal = new f.modal({ closeMethods: ["escape", "overlay", "button"], closeLabel: "关闭" }), this.selfieModal.setContent(document.querySelector(".selfieModal").innerHTML), this.nokiaModal.setContent(document.querySelector(".nokiaModal").innerHTML), this.nav1Modal.setContent(document.querySelector(".nav1Modal").innerHTML), this.nav2Modal.setContent(document.querySelector(".nav2Modal").innerHTML), this.donateModal.setContent(document.querySelector(".donateModal").innerHTML), this.takeoutModal.setContent(document.querySelector(".takeoutModal").innerHTML), this.takeoutModal.addFooterBtn("立即领取", "tingle-btn tingle-btn--primary", (function () { t.navigateToTakeout() })) } }, { key: "loading", value: function (t) { var e = document.getElementById("image-tip"), n = document.getElementById("nokiaImage"); e && n && (t ? (n.style.visibility = "hidden", e.textContent = "努力加载中...", this.readyFlag = !1) : (n.style.visibility = "visible", e.textContent = "长按保存图片(失败请点微信分享)", this.readyFlag = !0)) } }]), t }()); document.addEventListener("DOMContentLoaded", function () { var t = a()(r.a.mark((function t(e) { var n; return r.a.wrap((function (t) { for (; ;)switch (t.prev = t.next) { case 0: return n = new w, t.next = 3, n.prepare(); case 3: case "end": return t.stop() } }), t) }))); return function (e) { return t.apply(this, arguments) } }()) }]);
