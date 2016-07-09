/*! Video.js v4.5.1 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
(function() {
	var b =
	void 0, f = !0, h = null, l = !1;
	function m() {
		return function() {
		}
	}

	function p(a) {
		return function() {
			return this[a]
		}
	}

	function q(a) {
		return function() {
			return a
		}
	}

	var t;
	document.createElement("video");
	document.createElement("audio");
	document.createElement("track");
	function u(a, c, d) {
		if ("string" === typeof a) {
			0 === a.indexOf("#") && ( a = a.slice(1));
			if (u.va[a])
				return u.va[a];
			a = u.u(a)
		}
		if (!a || !a.nodeName) { }
			//throw new TypeError("The element or ID supplied is not valid. (videojs)");
						
		return a.player || new u.Player(a, c, d)
	}

	var videojs = u;
	window.Wd = window.Xd = u;
	u.Rb = "4.5";
	u.Fc = "https:" == document.location.protocol ? "https://" : "http://";
	u.options = {
		techOrder : ["html5", "flash"],
		html5 : {},
		flash : {},
		width : 300,
		height : 150,
		defaultVolume : 0,
		children : {
			mediaLoader : {},
			posterImage : {},
			textTrackDisplay : {},
			loadingSpinner : {},
			bigPlayButton : {},
			controlBar : {}
		},
		notSupportedMessage : 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
	};
	"GENERATED_CDN_VSN" !== u.Rb && (videojs.options.flash.swf = u.Fc + "vjs.zencdn.net/" + u.Rb + "/video-js.swf");
	u.va = {};
	"function" === typeof define && define.amd ? define([], function() {
		return videojs
	}) : "object" === typeof exports && "object" === typeof module && (module.exports = videojs);
	u.ka = u.CoreObject = m();
	u.ka.extend = function(a) {
		var c, d;
		a = a || {};
		c = a.init || a.j || this.prototype.init || this.prototype.j || m();
		d = function() {
			c.apply(this, arguments)
		};
		d.prototype = u.l.create(this.prototype);
		d.prototype.constructor = d;
		d.extend = u.ka.extend;
		d.create = u.ka.create;
		for (var e in a)a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
		return d
	};
	u.ka.create = function() {
		var a = u.l.create(this.prototype);
		this.apply(a, arguments);
		return a
	};
	u.d = function(a, c, d) {
		var e = u.getData(a);
		e.z || (e.z = {});
		e.z[c] || (e.z[c] = []);
		d.s || (d.s = u.s++);
		e.z[c].push(d);
		e.V || (e.disabled = l, e.V = function(c) {
			if (!e.disabled) {
				c = u.ic(c);
				var d = e.z[c.type];
				if (d)
					for (var d = d.slice(0), k = 0, r = d.length; k < r && !c.pc(); k++)
						d[k].call(a, c)
			}
		});
		1 == e.z[c].length && (document.addEventListener ? a.addEventListener(c, e.V, l) : document.attachEvent && a.attachEvent("on" + c, e.V))
	};
	u.o = function(a, c, d) {
		if (u.mc(a)) {
			var e = u.getData(a);
			if (e.z)
				if (c) {
					var g = e.z[c];
					if (g) {
						if (d) {
							if (d.s)
								for ( e = 0; e < g.length; e++)
									g[e].s === d.s && g.splice(e--, 1)
						} else
							e.z[c] = [];
						u.ec(a, c)
					}
				} else
					for (g in e.z) c = g, e.z[c] = [], u.ec(a, c)
		}
	};
	u.ec = function(a, c) {
		var d = u.getData(a);
		0 === d.z[c].length && (
		delete d.z[c], document.removeEventListener ? a.removeEventListener(c, d.V, l) : document.detachEvent && a.detachEvent("on" + c, d.V));
		u.zb(d.z) && (
		delete d.z,
		delete d.V,
		delete d.disabled);
		u.zb(d) && u.uc(a)
	};
	u.ic = function(a) {
		function c() {
			return f
		}

		function d() {
			return l
		}

		if (!a || !a.Ab) {
			var e = a || window.event;
			a = {};
			for (var g in e)"layerX" !== g && ("layerY" !== g && "keyboardEvent.keyLocation" !== g) && ("returnValue" == g && e.preventDefault || (a[g] = e[g]));
			a.target || (a.target = a.srcElement || document);
			a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
			a.preventDefault = function() {
				e.preventDefault && e.preventDefault();
				a.returnValue = l;
				a.fd = c;
				a.defaultPrevented = f
			};
			a.fd = d;
			a.defaultPrevented = l;
			a.stopPropagation = function() {
				e.stopPropagation && e.stopPropagation();
				a.cancelBubble = f;
				a.Ab = c
			};
			a.Ab = d;
			a.stopImmediatePropagation = function() {
				e.stopImmediatePropagation && e.stopImmediatePropagation();
				a.pc = c;
				a.stopPropagation()
			};
			a.pc = d;
			if (a.clientX != h) {
				g = document.documentElement;
				var j = document.body;
				a.pageX = a.clientX + (g && g.scrollLeft || j && j.scrollLeft || 0) - (g && g.clientLeft || j && j.clientLeft || 0);
				a.pageY = a.clientY + (g && g.scrollTop || j && j.scrollTop || 0) - (g && g.clientTop || j && j.clientTop || 0)
			}
			a.which = a.charCode || a.keyCode;
			a.button != h && (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 : 0)
		}
		return a
	};
	u.k = function(a, c) {
		var d = u.mc(a) ? u.getData(a) : {}, e = a.parentNode || a.ownerDocument;
		"string" === typeof c && ( c = {
			type : c,
			target : a
		});
		c = u.ic(c);
		d.V && d.V.call(a, c);
		if (e && !c.Ab() && c.bubbles !== l)
			u.k(e, c);
		else if (!e && !c.defaultPrevented && ( d = u.getData(c.target), c.target[c.type])) {
			d.disabled = f;
			if ("function" === typeof c.target[c.type])
				c.target[c.type]();
			d.disabled = l
		}
		return !c.defaultPrevented
	};
	u.U = function(a, c, d) {
		function e() {
			u.o(a, c, e);
			d.apply(this, arguments)
		}
		e.s = d.s = d.s || u.s++;
		u.d(a, c, e)
	};
	var v = Object.prototype.hasOwnProperty;
	u.e = function(a, c) {
		var d, e;
		d = document.createElement(a || "div");
		for (e in c)v.call(c, e) && (-1 !== e.indexOf("aria-") || "role" == e ? d.setAttribute(e, c[e]) : d[e] = c[e]);
		return d
	};
	u.Z = function(a) {
		return a.charAt(0).toUpperCase() + a.slice(1)
	};
	u.l = {};
	u.l.create = Object.create ||
	function(a) {
		function c() {
		}
		c.prototype = a;
		return new c
	};
	u.l.ra = function(a, c, d) {
		for (var e in a)v.call(a, e) && c.call(d || this, e, a[e])
	};
	u.l.B = function(a, c) {
		if (!c)
			return a;
		for (var d in c)v.call(c, d) && (a[d] = c[d]);
		return a
	};
	u.l.Wc = function(a, c) {
		var d, e, g;
		a = u.l.copy(a);
		for (d in c)v.call(c, d) && ( e = a[d], g = c[d], a[d] = u.l.Na(e) && u.l.Na(g) ? u.l.Wc(e, g) : c[d]);
		return a
	};
	u.l.copy = function(a) {
		return u.l.B({}, a)
	};
	u.l.Na = function(a) {
		return !!a && "object" === typeof a && "[object Object]" === a.toString() && a.constructor === Object
	};
	u.bind = function(a, c, d) {
		function e() {
			return c.apply(a, arguments)
		}
		c.s || (c.s = u.s++);
		e.s = d ? d + "_" + c.s : c.s;
		return e
	};
	u.pa = {};
	u.s = 1;
	u.expando = "vdata" + (new Date).getTime();
	u.getData = function(a) {
		var c = a[u.expando];
		c || ( c = a[u.expando] = u.s++, u.pa[c] = {});
		return u.pa[c]
	};
	u.mc = function(a) {
		a = a[u.expando];
		return !(!a || u.zb(u.pa[a]))
	};
	u.uc = function(a) {
		var c = a[u.expando];
		if (c) {
			delete u.pa[c];
			try {
				delete a[u.expando]
			} catch(d) {
				a.removeAttribute ? a.removeAttribute(u.expando) : a[u.expando] = h
			}
		}
	};
	u.zb = function(a) {
		for (var c in a)
		if (a[c] !== h)
			return l;
		return f
	};
	u.n = function(a, c) {
		-1 == (" " + a.className + " ").indexOf(" " + c + " ") && (a.className = "" === a.className ? c : a.className + " " + c)
	};
	u.t = function(a, c) {
		var d, e;
		if (-1 != a.className.indexOf(c)) {
			d = a.className.split(" ");
			for ( e = d.length - 1; 0 <= e; e--)
				d[e] === c && d.splice(e, 1);
			a.className = d.join(" ")
		}
	};
	u.F = u.e("video");
	u.J = navigator.userAgent;
	u.Kc = /iPhone/i.test(u.J);
	u.Jc = /iPad/i.test(u.J);
	u.Lc = /iPod/i.test(u.J);
	u.Ic = u.Kc || u.Jc || u.Lc;
	var aa = u, w;
	var x = u.J.match(/OS (\d+)_/i);
	w = x && x[1] ? x[1] : b;
	aa.Kd = w;
	u.Hc = /Android/i.test(u.J);
	var ba = u, y;
	var z = u.J.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i), A, B;
	z ? ( A = z[1] && parseFloat(z[1]), B = z[2] && parseFloat(z[2]), y = A && B ? parseFloat(z[1] + "." + z[2]) : A ? A : h) : y = h;
	ba.Qb = y;
	u.Mc = u.Hc && /webkit/i.test(u.J) && 2.3 > u.Qb;
	u.Ub = /Firefox/i.test(u.J);
	u.Ld = /Chrome/i.test(u.J);
	u.$b = !!("ontouchstart" in window || window.Gc && document instanceof window.Gc);
	u.wb = function(a) {
		var c, d, e, g;
		c = {};
		if (a && a.attributes && 0 < a.attributes.length) {
			d = a.attributes;
			for (var j = d.length - 1; 0 <= j; j--) {
				e = d[j].name;
				g = d[j].value;
				if ("boolean" === typeof a[e] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ","))
					g = g !== h ? f : l;
				c[e] = g
			}
		}
		return c
	};
	u.Pd = function(a, c) {
		var d = "";
		document.defaultView && document.defaultView.getComputedStyle ? d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c) : a.currentStyle && ( d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
		return d
	};
	u.yb = function(a, c) {
		c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
	};
	u.Nb = {};
	u.u = function(a) {
		0 === a.indexOf("#") && ( a = a.slice(1));
		return document.getElementById(a)
	};
	u.ta = function(a, c) {
		c = c || a;
		var d = Math.floor(a % 60), e = Math.floor(a / 60 % 60), g = Math.floor(a / 3600), j = Math.floor(c / 60 % 60), k = Math.floor(c / 3600);
		if (isNaN(a) || Infinity === a)
			g = e = d = "-";
		g = 0 < g || 0 < k ? g + ":" : "";
		return g + (((g || 10 <= j) && 10 > e ? "0" + e : e) + ":") + (10 > d ? "0" + d : d)
	};
	u.Sc = function() {
		document.body.focus();
		document.onselectstart = q(l)
	};
	u.Ed = function() {
		document.onselectstart = q(f)
	};
	u.trim = function(a) {
		return (a + "").replace(/^\s+|\s+$/g, "")
	};
	u.round = function(a, c) {
		c || ( c = 0);
		return Math.round(a * Math.pow(10, c)) / Math.pow(10, c)
	};
	u.sb = function(a, c) {
		return {
			length : 1,
			start : function() {
				return a
			},
			end : function() {
				return c
			}
		}
	};
	u.get = function(a, c, d) {
		var e, g;
		"undefined" === typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
			try {
				return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
			} catch(a) {
			}
			try {
				return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
			} catch(c) {
			}
			try {
				return new window.ActiveXObject("Msxml2.XMLHTTP")
			} catch(d) {
			}
			//throw Error("This browser does not support XMLHttpRequest.");
		});
		g = new XMLHttpRequest;
		try {
			g.open("GET", a)
		} catch(j) {
			d(j)
		}
		e = 0 === a.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === a.indexOf("http");
		g.onreadystatechange = function() {
			4 === g.readyState && (200 === g.status || e && 0 === g.status ? c(g.responseText) : d && d())
		};
		try {
			g.send()
		} catch(k) {
			d && d(k)
		}
	};
	u.wd = function(a) {
		try {
			var c = window.localStorage || l;
			c && (c.volume = a)
		} catch(d) {
			22 == d.code || 1014 == d.code ? u.log("LocalStorage Full (VideoJS)", d) : 18 == d.code ? u.log("LocalStorage not allowed (VideoJS)", d) : u.log("LocalStorage Error (VideoJS)", d)
		}
	};
	u.kc = function(a) {
		a.match(/^https?:\/\//) || ( a = u.e("div", {
			innerHTML : '<a href="' + a + '">x</a>'
		}).firstChild.href);
		return a
	};
	u.log = function() {
		//u.log.history = u.log.history || [];
		//u.log.history.push(arguments);
		window.console && window.console.log(Array.prototype.slice.call(arguments))
	};
	u.cd = function(a) {
		var c, d;
		a.getBoundingClientRect && a.parentNode && ( c = a.getBoundingClientRect());
		if (!c)
			return {
				left : 0,
				top : 0
			};
		a = document.documentElement;
		d = document.body;
		return {
			left : u.round(c.left + (window.pageXOffset || d.scrollLeft) - (a.clientLeft || d.clientLeft || 0)),
			top : u.round(c.top + (window.pageYOffset || d.scrollTop) - (a.clientTop || d.clientTop || 0))
		}
	};
	u.ja = {};
	u.ja.Eb = function(a, c) {
		var d, e, g;
		a = u.l.copy(a);
		for (d in c)c.hasOwnProperty(d) && ( e = a[d], g = c[d], a[d] = u.l.Na(e) && u.l.Na(g) ? u.ja.Eb(e, g) : c[d]);
		return a
	};
	u.b = u.ka.extend({
		j : function(a, c, d) {
			this.c = a;
			this.h = u.l.copy(this.h);
			c = this.options(c);
			this.R = c.id || (c.el && c.el.id ? c.el.id : a.id() + "_component_" + u.s++);
			this.ld = c.name || h;
			this.a = c.el || this.e();
			this.K = [];
			this.Ja = {};
			this.Ka = {};
			this.nc();
			this.I(d);
			if (c.vc !== l) {
				var e, g;
				e = u.bind(this.C(), this.C().reportUserActivity);
				this.d("touchstart", function() {
					e();
					clearInterval(g);
					g = setInterval(e, 250)
				});
				a = function() {
					e();
					clearInterval(g)
				};
				this.d("touchmove", e);
				this.d("touchend", a);
				this.d("touchcancel", a)
			}
		}
	});
	t = u.b.prototype;
	t.dispose = function() {
		this.k({
			type : "dispose",
			bubbles : l
		});
		if (this.K)
			for (var a = this.K.length - 1; 0 <= a; a--)
				this.K[a].dispose && this.K[a].dispose();
		this.Ka = this.Ja = this.K = h;
		this.o();
		this.a.parentNode && this.a.parentNode.removeChild(this.a);
		u.uc(this.a);
		this.a = h
	};
	t.c = f;
	t.C = p("c");
	t.options = function(a) {
		return a === b ? this.h : this.h = u.ja.Eb(this.h, a)
	};
	t.e = function(a, c) {
		return u.e(a, c)
	};
	t.u = p("a");
	t.La = function() {
		return this.G || this.a
	};
	t.id = p("R");
	t.name = p("ld");
	t.children = p("K");
	t.ed = function(a) {
		return this.Ja[a]
	};
	t.fa = function(a) {
		return this.Ka[a]
	};
	t.Y = function(a, c) {
		var d, e;
		"string" === typeof a ? ( e = a, c = c || {}, d = c.componentClass || u.Z(e), c.name = e, d = new window.videojs[d](this.c || this, c)) : d = a;
		this.K.push(d);
		"function" === typeof d.id && (this.Ja[d.id()] = d);
		( e = e || d.name && d.name()) && (this.Ka[e] = d);
		"function" === typeof d.el && d.el() && this.La().appendChild(d.el());
		return d
	};
	t.removeChild = function(a) {
		"string" === typeof a && ( a = this.fa(a));
		if (a && this.K) {
			for (var c = l, d = this.K.length - 1; 0 <= d; d--)
				if (this.K[d] === a) {
					c = f;
					this.K.splice(d, 1);
					break
				}
			c && (this.Ja[a.id] = h, this.Ka[a.name] = h, ( c = a.u()) && c.parentNode === this.La() && this.La().removeChild(a.u()))
		}
	};
	t.nc = function() {
		var a = this.h;
		if (a && a.children) {
			var c = this;
			u.l.ra(a.children, function(a, e) {
				e !== l && !e.loadEvent && (c[a] = c.Y(a, e))
			})
		}
	};
	t.Q = q("");
	t.d = function(a, c) {
		u.d(this.a, a, u.bind(this, c));
		return this
	};
	t.o = function(a, c) {
		u.o(this.a, a, c);
		return this
	};
	t.U = function(a, c) {
		u.U(this.a, a, u.bind(this, c));
		return this
	};
	t.k = function(a, c) {
		u.k(this.a, a, c);
		return this
	};
	t.I = function(a) {
		a && (this.aa ? a.call(this) : (this.Ua === b && (this.Ua = []), this.Ua.push(a)));
		return this
	};
	t.za = function() {
		this.aa = f;
		var a = this.Ua;
		if (a && 0 < a.length) {
			for (var c = 0, d = a.length; c < d; c++)
				a[c].call(this);
			this.Ua = [];
			this.k("ready")
		}
	};
	t.n = function(a) {
		u.n(this.a, a);
		return this
	};
	t.t = function(a) {
		u.t(this.a, a);
		return this
	};
	t.show = function() {
		this.a.style.display = "block";
		return this
	};
	t.D = function() {
		this.a.style.display = "none";
		return this
	};
	function C(a) {
		a.t("vjs-lock-showing")
	}
	t.disable = function() {
		this.D();
		this.show = m()
	};
	t.width = function(a, c) {
		return E(this, "width", a, c)
	};
	t.height = function(a, c) {
		return E(this, "height", a, c)
	};
	t.Yc = function(a, c) {
		return this.width(a, f).height(c)
	};
	function E(a, c, d, e) {
		if (d !== b)
			return a.a.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d : "auto" === d ? "" : d + "px", e || a.k("resize"), a;
		if (!a.a)
			return 0;
		d = a.a.style[c];
		e = d.indexOf("px");
		return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.a["offset" + u.Z(c)], 10)
	}


	u.q = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c);
			var d = l;
			this.d("touchstart", function(a) {
				a.preventDefault();
				d = f
			});
			this.d("touchmove", function() {
				d = l
			});
			var e = this;
			this.d("touchend", function(a) {
				d && e.p(a);
				a.preventDefault()
			});
			this.d("click", this.p);
			this.d("focus", this.Qa);
			this.d("blur", this.Pa)
		}
	});
	t = u.q.prototype;
	t.e = function(a, c) {
		c = u.l.B({
			className : this.Q(),
			innerHTML : '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.oa || "Need Text") + "</span></div>",
			role : "button",
			"aria-live" : "polite",
			tabIndex : 0
		}, c);
		return u.b.prototype.e.call(this, a, c)
	};
	t.Q = function() {
		return "vjs-control " + u.b.prototype.Q.call(this)
	};
	t.p = m();
	t.Qa = function() {
		u.d(document, "keyup", u.bind(this, this.ba))
	};
	t.ba = function(a) {
		if (32 == a.which || 13 == a.which)
			a.preventDefault(), this.p()
	};
	t.Pa = function() {
		u.o(document, "keyup", u.bind(this, this.ba))
	};
	u.O = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c);
			this.Rc = this.fa(this.h.barName);
			this.handle = this.fa(this.h.handleName);
			a.d(this.sc, u.bind(this, this.update));
			this.d("mousedown", this.Ra);
			this.d("touchstart", this.Ra);
			this.d("focus", this.Qa);
			this.d("blur", this.Pa);
			this.d("click", this.p);
			this.c.d("controlsvisible", u.bind(this, this.update));
			a.I(u.bind(this, this.update));
			this.P = {}
		}
	});
	t = u.O.prototype;
	t.e = function(a, c) {
		c = c || {};
		c.className += " vjs-slider";
		c = u.l.B({
			role : "slider",
			"aria-valuenow" : 0,
			"aria-valuemin" : 0,
			"aria-valuemax" : 100,
			tabIndex : 0
		}, c);
		return u.b.prototype.e.call(this, a, c)
	};
	t.Ra = function(a) {
		a.preventDefault();
		u.Sc();
		this.P.move = u.bind(this, this.Gb);
		this.P.end = u.bind(this, this.Hb);
		u.d(document, "mousemove", this.P.move);
		u.d(document, "mouseup", this.P.end);
		u.d(document, "touchmove", this.P.move);
		u.d(document, "touchend", this.P.end);
		this.Gb(a)
	};
	t.Hb = function() {
		u.Ed();
		u.o(document, "mousemove", this.P.move, l);
		u.o(document, "mouseup", this.P.end, l);
		u.o(document, "touchmove", this.P.move, l);
		u.o(document, "touchend", this.P.end, l);
		this.update()
	};
	t.update = function() {
		if (this.a) {
			var a, c = this.xb(), d = this.handle, e = this.Rc;
			isNaN(c) && ( c = 0);
			a = c;
			if (d) {
				a = this.a.offsetWidth;
				var g = d.u().offsetWidth;
				a = g ? g / a : 0;
				c *= 1 - a;
				a = c + a / 2;
				d.u().style.left = u.round(100 * c, 2) + "%"
			}
			e.u().style.width = u.round(100 * a, 2) + "%"
		}
	};
	function F(a, c) {
		var d, e, g, j;
		d = a.a;
		e = u.cd(d);
		j = g = d.offsetWidth;
		d = a.handle;
		if (a.h.Gd)
			return j = e.top, e = c.changedTouches ? c.changedTouches[0].pageY : c.pageY, d && ( d = d.u().offsetHeight, j += d / 2, g -= d), Math.max(0, Math.min(1, (j - e + g) / g));
		g = e.left;
		e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
		d && ( d = d.u().offsetWidth, g += d / 2, j -= d);
		return Math.max(0, Math.min(1, (e - g) / j))
	}
	t.Qa = function() {
		u.d(document, "keyup", u.bind(this, this.ba))
	};
	t.ba = function(a) {
		37 == a.which ? (a.preventDefault(), this.yc()) : 39 == a.which && (a.preventDefault(), this.zc())
	};
	t.Pa = function() {
		u.o(document, "keyup", u.bind(this, this.ba))
	};
	t.p = function(a) {
		a.stopImmediatePropagation();
		a.preventDefault()
	};
	u.W = u.b.extend();
	u.W.prototype.defaultValue = 0;
	u.W.prototype.e = function(a, c) {
		c = c || {};
		c.className += " vjs-slider-handle";
		c = u.l.B({
			innerHTML : '<span class="vjs-control-text">' + this.defaultValue + "</span>"
		}, c);
		return u.b.prototype.e.call(this, "div", c)
	};
	u.la = u.b.extend();
	function ca(a, c) {
		a.Y(c);
		c.d("click", u.bind(a, function() {
			C(this)
		}))
	}
	u.la.prototype.e = function() {
		var a = this.options().Uc || "ul";
		this.G = u.e(a, {
			className : "vjs-menu-content"
		});
		a = u.b.prototype.e.call(this, "div", {
			append : this.G,
			className : "vjs-menu"
		});
		a.appendChild(this.G);
		u.d(a, "click", function(a) {
			a.preventDefault();
			a.stopImmediatePropagation()
		});
		return a
	};
	u.N = u.q.extend({
		j : function(a, c) {
			u.q.call(this, a, c);
			this.selected(c.selected)
		}
	});
	u.N.prototype.e = function(a, c) {
		return u.q.prototype.e.call(this, "li", u.l.B({
			className : "vjs-menu-item",
			innerHTML : this.h.label
		}, c))
	};
	u.N.prototype.p = function() {
		this.selected(f)
	};
	u.N.prototype.selected = function(a) {
		a ? (this.n("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.t("vjs-selected"), this.a.setAttribute("aria-selected", l))
	};
	u.S = u.q.extend({
		j : function(a, c) {
			u.q.call(this, a, c);
			this.ua = this.Ma();
			this.Y(this.ua);
			this.L && 0 === this.L.length && this.D();
			this.d("keyup", this.ba);
			this.a.setAttribute("aria-haspopup", f);
			this.a.setAttribute("role", "button")
		}
	});
	t = u.S.prototype;
	t.na = l;
	t.Ma = function() {
		var a = new u.la(this.c);
		this.options().title && a.u().appendChild(u.e("li", {
			className : "vjs-menu-title",
			innerHTML : u.Z(this.A),
			Cd : -1
		}));
		if (this.L = this.createItems())
			for (var c = 0; c < this.L.length; c++)
				ca(a, this.L[c]);
		return a
	};
	t.qa = m();
	t.Q = function() {
		return this.className + " vjs-menu-button " + u.q.prototype.Q.call(this)
	};
	t.Qa = m();
	t.Pa = m();
	t.p = function() {
		this.U("mouseout", u.bind(this, function() {
			C(this.ua);
			this.a.blur()
		}));
		this.na ? G(this) : H(this)
	};
	t.ba = function(a) {
		a.preventDefault();
		32 == a.which || 13 == a.which ? this.na ? G(this) : H(this) : 27 == a.which && this.na && G(this)
	};
	function H(a) {
		a.na = f;
		a.ua.n("vjs-lock-showing");
		a.a.setAttribute("aria-pressed", f);
		a.L && 0 < a.L.length && a.L[0].u().focus()
	}

	function G(a) {
		a.na = l;
		C(a.ua);
		a.a.setAttribute("aria-pressed", l)
	}


	u.Player = u.b.extend({
		j : function(a, c, d) {
			this.M = a;
			a.id = a.id || "vjs_video_" + u.s++;
			c = u.l.B(da(a), c);
			this.v = {};
			this.tc = c.poster;
			this.rb = c.controls;
			a.controls = l;
			c.vc = l;
			u.b.call(this, this, c, d);
			this.controls() ? this.n("vjs-controls-enabled") : this.n("vjs-controls-disabled");
			this.U("play", function(a) {
				u.k(this.a, {
					type : "firstplay",
					target : this.a
				}) || (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation())
			});
			this.d("ended", this.md);
			this.d("play", this.Jb);
			this.d("firstplay", this.nd);
			this.d("pause", this.Ib);
			this.d("progress", this.pd);
			this.d("durationchange", this.qc);
			this.d("error", this.Fb);
			this.d("fullscreenchange", this.od);
			u.va[this.R] = this;
			c.plugins && u.l.ra(c.plugins, function(a, c) {
				this[a](c)
			}, this);
			var e, g, j, k;
			e = u.bind(this, this.reportUserActivity);
			this.d("mousedown", function() {
				e();
				clearInterval(g);
				g = setInterval(e, 250)
			});
			this.d("mousemove", e);
			this.d("mouseup", function() {
				e();
				clearInterval(g)
			});
			this.d("keydown", e);
			this.d("keyup", e);
			j = setInterval(u.bind(this, function() {
				this.ia && (this.ia = l, this.userActive(f), clearTimeout(k), k = setTimeout(u.bind(this, function() {
					this.ia || this.userActive(l)
				}), 2E3))
			}), 250);
			this.d("dispose", function() {
				clearInterval(j);
				clearTimeout(k)
			})
		}
	});
	t = u.Player.prototype;
	t.h = u.options;
	t.dispose = function() {
		this.k("dispose");
		this.o("dispose");
		u.va[this.R] = h;
		this.M && this.M.player && (this.M.player = h);
		this.a && this.a.player && (this.a.player = h);
		clearInterval(this.Ta);
		this.wa();
		this.i && this.i.dispose();
		u.b.prototype.dispose.call(this)
	};
	function da(a) {
		var c = {
			sources : [],
			tracks : []
		};
		u.l.B(c, u.wb(a));
		if (a.hasChildNodes()) {
			var d, e, g, j;
			a = a.childNodes;
			g = 0;
			for ( j = a.length; g < j; g++)
				d = a[g], e = d.nodeName.toLowerCase(), "source" === e ? c.sources.push(u.wb(d)) : "track" === e && c.tracks.push(u.wb(d))
		}
		return c
	}


	t.e = function() {
		var a = this.a = u.b.prototype.e.call(this, "div"), c = this.M;
		c.removeAttribute("width");
		c.removeAttribute("height");
		if (c.hasChildNodes()) {
			var d, e, g, j, k;
			d = c.childNodes;
			e = d.length;
			for ( k = []; e--; )
				g = d[e], j = g.nodeName.toLowerCase(), "track" === j && k.push(g);
			for ( d = 0; d < k.length; d++)
				c.removeChild(k[d])
		}
		a.id = c.id;
		a.className = c.className;
		c.id += "_html5_api";
		c.className = "vjs-tech";
		c.player = a.player = this;
		this.n("vjs-paused");
		this.width(this.h.width, f);
		this.height(this.h.height, f);
		c.parentNode && c.parentNode.insertBefore(a, c);
		u.yb(c, a);
		return a
	};
	function I(a, c, d) {
		a.i && (a.aa = l, a.i.dispose(), a.Cb && (a.Cb = l, clearInterval(a.Ta)), a.Db && J(a), a.i = l);
		"Html5" !== c && a.M && (u.g.gc(a.M), a.M = h);
		a.xa = c;
		a.aa = l;
		var e = u.l.B({
			source : d,
			parentEl : a.a
		}, a.h[c.toLowerCase()]);
		d && (d.src == a.v.src && 0 < a.v.currentTime && (e.startTime = a.v.currentTime), a.v.src = d.src);
		a.i = new window.videojs[c](a, e);
		a.i.I(function() {
			this.c.za();
			if (!this.m.progressEvents) {
				var a = this.c;
				a.Cb = f;
				a.Ta = setInterval(u.bind(a, function() {
					this.v.mb < this.buffered().end(0) ? this.k("progress") : 1 == this.bufferedPercent() && (clearInterval(this.Ta), this.k("progress"))
				}), 500);
				a.i.U("progress", function() {
					this.m.progressEvents = f;
					var a = this.c;
					a.Cb = l;
					clearInterval(a.Ta)
				})
			}
			this.m.timeupdateEvents || ( a = this.c, a.Db = f, a.d("play", a.Cc), a.d("pause", a.wa), a.i.U("timeupdate", function() {
				this.m.timeupdateEvents = f;
				J(this.c)
			}))
		})
	}

	function J(a) {
		a.Db = l;
		a.wa();
		a.o("play", a.Cc);
		a.o("pause", a.wa)
	}
	t.Cc = function() {
		this.fc && this.wa();
		this.fc = setInterval(u.bind(this, function() {
			this.k("timeupdate")
		}), 250)
	};
	t.wa = function() {
		clearInterval(this.fc)
	};
	t.Jb = function() {
		u.t(this.a, "vjs-paused");
		u.n(this.a, "vjs-playing")
	};
	t.nd = function() {
		this.h.starttime && this.currentTime(this.h.starttime);
		this.n("vjs-has-started")
	};
	t.Ib = function() {
		u.t(this.a, "vjs-playing");
		u.n(this.a, "vjs-paused")
	};
	t.pd = function() {
		1 == this.bufferedPercent() && this.k("loadedalldata")
	};
	t.md = function() {
		this.h.loop && (this.currentTime(0), this.play())
	};
	t.qc = function() {
		var a = K(this, "duration");
		a && this.duration(a)
	};
	t.od = function() {
		this.isFullScreen() ? this.n("vjs-fullscreen") : this.t("vjs-fullscreen")
	};
	t.Fb = function(a) {
		u.log("Video Error", a)
	};
	function L(a, c, d) {
		if (a.i && !a.i.aa)
			a.i.I(function() {
				this[c](d)
			});
		else
			try {
				a.i[c](d)
			} catch(e) {
				//throw u.log(e), e;
			}
	}

	function K(a, c) {
		if (a.i && a.i.aa)
			try {
				return a.i[c]()
			} catch(d) {
				//throw a.i[c] === b ? u.log("Video.js: " + c + " method not defined for " + a.xa + " playback technology.", d) : "TypeError" == d.name ? (u.log("Video.js: " + c + " unavailable on " + a.xa + " playback technology element.", d), a.i.aa = l) : u.log(d), d;
			}
	}
	t.play = function() {
		L(this, "play");
		return this
	};
	t.pause = function() {
		L(this, "pause");
		return this
	};
	t.paused = function() {
		return K(this, "paused") === l ? l : f
	};
	t.currentTime = function(a) {
		return a !== b ? (L(this, "setCurrentTime", a), this.Db && this.k("timeupdate"), this) : this.v.currentTime = K(this, "currentTime") || 0
	};
	t.duration = function(a) {
		if (a !== b)
			return this.v.duration = parseFloat(a), this;
		this.v.duration === b && this.qc();
		return this.v.duration || 0
	};
	t.buffered = function() {
		var a = K(this, "buffered"), c = a.length - 1, d = this.v.mb = this.v.mb || 0;
		a && (0 <= c && a.end(c) !== d) && ( d = a.end(c), this.v.mb = d);
		return u.sb(0, d)
	};
	t.bufferedPercent = function() {
		return this.duration() ? this.buffered().end(0) / this.duration() : 0
	};
	t.volume = function(a) {
		if (a !== b)
			return a = Math.max(0, Math.min(1, parseFloat(a))), this.v.volume = a, L(this, "setVolume", a), u.wd(a), this;
		a = parseFloat(K(this, "volume"));
		return isNaN(a) ? 1 : a
	};
	t.muted = function(a) {
		return a !== b ? (L(this, "setMuted", a), this) : K(this, "muted") || l
	};
	t.Wa = function() {
		return K(this, "supportsFullScreen") || l
	};
	t.oc = l;
	t.isFullScreen = function(a) {
		return a !== b ? (this.oc = a, this) : this.oc
	};
	t.requestFullScreen = function() {
		var a = u.Nb.requestFullScreen;
		this.isFullScreen(f);
		a ? (u.d(document, a.ub, u.bind(this, function(c) {
			this.isFullScreen(document[a.isFullScreen]);
			this.isFullScreen() === l && u.o(document, a.ub, arguments.callee);
			this.k("fullscreenchange")
		})), this.a[a.wc]()) : this.i.Wa() ? L(this, "enterFullScreen") : (this.gd = f, this.Zc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.jc)), document.documentElement.style.overflow = "hidden", u.n(document.body, "vjs-full-window"), this.k("enterFullWindow"), this.k("fullscreenchange"));
		return this
	};
	t.cancelFullScreen = function() {
		var a = u.Nb.requestFullScreen;
		this.isFullScreen(l);
		if (a)
			document[a.ob]();
		else
			this.i.Wa() ? L(this, "exitFullScreen") : (M(this), this.k("fullscreenchange"));
		return this
	};
	t.jc = function(a) {
		27 === a.keyCode && (this.isFullScreen() === f ? this.cancelFullScreen() : M(this))
	};
	function M(a) {
		a.gd = l;
		u.o(document, "keydown", a.jc);
		document.documentElement.style.overflow = a.Zc;
		u.t(document.body, "vjs-full-window");
		a.k("exitFullWindow")
	}


	t.src = function(a) {
		if (a === b)
			return K(this, "src");
		if ( a instanceof Array) {
			var c;
			a: {
				c = a;
				for (var d = 0, e = this.h.techOrder; d < e.length; d++) {
					var g = u.Z(e[d]), j = window.videojs[g];
					if (j.isSupported())
						for (var k = 0, r = c; k < r.length; k++) {
							var n = r[k];
							if (j.canPlaySource(n)) {
								c = {
									source : n,
									i : g
								};
								break a
							}
						}
				}
				c = l
			}
			c ? ( a = c.source, c = c.i, c == this.xa ? this.src(a) : I(this, c, a)) : (this.a.appendChild(u.e("p", {
				innerHTML : this.options().notSupportedMessage
			})), this.za())
		} else
			a instanceof Object ? window.videojs[this.xa].canPlaySource(a) ? this.src(a.src) : this.src([a]) : (this.v.src = a, this.aa ? (L(this, "src", a), "auto" == this.h.preload && this.load(), this.h.autoplay && this.play()) : this.I(function() {
				this.src(a)
			}));
		return this
	};
	t.load = function() {
		L(this, "load");
		return this
	};
	t.currentSrc = function() {
		return K(this, "currentSrc") || this.v.src || ""
	};
	t.Sa = function(a) {
		return a !== b ? (L(this, "setPreload", a), this.h.preload = a, this) : K(this, "preload")
	};
	t.autoplay = function(a) {
		return a !== b ? (L(this, "setAutoplay", a), this.h.autoplay = a, this) : K(this, "autoplay")
	};
	t.loop = function(a) {
		return a !== b ? (L(this, "setLoop", a), this.h.loop = a, this) : K(this, "loop")
	};
	t.poster = function(a) {
		if (a === b)
			return this.tc;
		this.tc = a;
		L(this, "setPoster", a);
		this.k("posterchange")
	};
	t.controls = function(a) {
		return a !== b ? ( a = !!a, this.rb !== a && ((this.rb = a) ? (this.t("vjs-controls-disabled"), this.n("vjs-controls-enabled"), this.k("controlsenabled")) : (this.t("vjs-controls-enabled"), this.n("vjs-controls-disabled"), this.k("controlsdisabled"))), this) : this.rb
	};
	u.Player.prototype.Pb
	t = u.Player.prototype;
	t.usingNativeControls = function(a) {
		return a !== b ? ( a = !!a, this.Pb !== a && ((this.Pb = a) ? (this.n("vjs-using-native-controls"), this.k("usingnativecontrols")) : (this.t("vjs-using-native-controls"), this.k("usingcustomcontrols"))), this) : this.Pb
	};
	t.error = function() {
		return K(this, "error")
	};
	t.ended = function() {
		return K(this, "ended")
	};
	t.seeking = function() {
		return K(this, "seeking")
	};
	t.ia = f;
	t.reportUserActivity = function() {
		this.ia = f
	};
	t.Ob = f;
	t.userActive = function(a) {
		return a !== b ? ( a = !!a, a !== this.Ob && ((this.Ob = a) ? (this.ia = f, this.t("vjs-user-inactive"), this.n("vjs-user-active"), this.k("useractive")) : (this.ia = l, this.i && this.i.U("mousemove", function(a) {
			a.stopPropagation();
			a.preventDefault()
		}), this.t("vjs-user-active"), this.n("vjs-user-inactive"), this.k("userinactive"))), this) : this.Ob
	};
	var N, O, P;
	P = document.createElement("div");
	O = {};
	P.Md !== b ? (O.wc = "requestFullscreen", O.ob = "exitFullscreen", O.ub = "fullscreenchange", O.isFullScreen = "fullScreen") : (document.mozCancelFullScreen ? ( N = "moz", O.isFullScreen = N + "FullScreen") : ( N = "webkit", O.isFullScreen = N + "IsFullScreen"), P[N + "RequestFullScreen"] && (O.wc = N + "RequestFullScreen", O.ob = N + "CancelFullScreen"), O.ub = N + "fullscreenchange");
	document[O.ob] && (u.Nb.requestFullScreen = O);
	u.Da = u.b.extend();
	u.Da.prototype.h = {
		Rd : "play",
		children : {
			playToggle : {},
			currentTimeDisplay : {},
			timeDivider : {},
			durationDisplay : {},
			remainingTimeDisplay : {},
			progressControl : {},
			fullscreenToggle : {},
			volumeControl : {},
			muteToggle : {}
		}
	};
	u.Da.prototype.e = function() {
		return u.e("div", {
			className : "vjs-control-bar"
		})
	};
	u.Xb = u.q.extend({
		j : function(a, c) {
			u.q.call(this, a, c);
			a.d("play", u.bind(this, this.Jb));
			a.d("pause", u.bind(this, this.Ib))
		}
	});
	t = u.Xb.prototype;
	t.oa = "Play";
	t.Q = function() {
		return "vjs-play-control " + u.q.prototype.Q.call(this)
	};
	t.p = function() {
		this.c.paused() ? this.c.play() : this.c.pause()
	};
	t.Jb = function() {
		u.t(this.a, "vjs-paused");
		u.n(this.a, "vjs-playing");
		this.a.children[0].children[0].innerHTML = "Pause"
	};
	t.Ib = function() {
		u.t(this.a, "vjs-playing");
		u.n(this.a, "vjs-paused");
		this.a.children[0].children[0].innerHTML = "Play"
	};
	u.$a = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c);
			a.d("timeupdate", u.bind(this, this.da))
		}
	});
	u.$a.prototype.e = function() {
		var a = u.b.prototype.e.call(this, "div", {
			className : "vjs-current-time vjs-time-controls vjs-control"
		});
		this.G = u.e("div", {
			className : "vjs-current-time-display",
			innerHTML : '<span class="vjs-control-text">Current Time </span>0:00',
			"aria-live" : "off"
		});
		a.appendChild(this.G);
		return a
	};
	u.$a.prototype.da = function() {
		var a = this.c.Va ? this.c.v.currentTime : this.c.currentTime();
		this.G.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.ta(a, this.c.duration())
	};
	u.ab = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c);
			a.d("timeupdate", u.bind(this, this.da))
		}
	});
	u.ab.prototype.e = function() {
		var a = u.b.prototype.e.call(this, "div", {
			className : "vjs-duration vjs-time-controls vjs-control"
		});
		this.G = u.e("div", {
			className : "vjs-duration-display",
			innerHTML : '<span class="vjs-control-text">Duration Time </span>0:00',
			"aria-live" : "off"
		});
		a.appendChild(this.G);
		return a
	};
	u.ab.prototype.da = function() {
		var a = this.c.duration();
		a && (this.G.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.ta(a))
	};
	u.bc = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c)
		}
	});
	u.bc.prototype.e = function() {
		return u.b.prototype.e.call(this, "div", {
			className : "vjs-time-divider",
			innerHTML : "<div><span>/</span></div>"
		})
	};
	u.gb = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c);
			a.d("timeupdate", u.bind(this, this.da))
		}
	});
	u.gb.prototype.e = function() {
		var a = u.b.prototype.e.call(this, "div", {
			className : "vjs-remaining-time vjs-time-controls vjs-control"
		});
		this.G = u.e("div", {
			className : "vjs-remaining-time-display",
			innerHTML : '<span class="vjs-control-text">Remaining Time </span>-0:00',
			"aria-live" : "off"
		});
		a.appendChild(this.G);
		return a
	};
	u.gb.prototype.da = function() {
		this.c.duration() && (this.G.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.ta(this.c.duration() - this.c.currentTime()))
	};
	u.Ea = u.q.extend({
		j : function(a, c) {
			u.q.call(this, a, c)
		}
	});
	u.Ea.prototype.oa = "Fullscreen";
	u.Ea.prototype.Q = function() {
		return "vjs-fullscreen-control " + u.q.prototype.Q.call(this)
	};
	u.Ea.prototype.p = function() {
		this.c.isFullScreen() ? (this.c.cancelFullScreen(), this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.c.requestFullScreen(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
	};
	u.fb = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c)
		}
	});
	u.fb.prototype.h = {
		children : {
			seekBar : {}
		}
	};
	u.fb.prototype.e = function() {
		return u.b.prototype.e.call(this, "div", {
			className : "vjs-progress-control vjs-control"
		})
	};
	u.Yb = u.O.extend({
		j : function(a, c) {
			u.O.call(this, a, c);
			a.d("timeupdate", u.bind(this, this.Aa));
			a.I(u.bind(this, this.Aa))
		}
	});
	t = u.Yb.prototype;
	t.h = {
		children : {
			loadProgressBar : {},
			playProgressBar : {},
			seekHandle : {}
		},
		barName : "playProgressBar",
		handleName : "seekHandle"
	};
	t.sc = "timeupdate";
	t.e = function() {
		return u.O.prototype.e.call(this, "div", {
			className : "vjs-progress-holder",
			"aria-label" : "video progress bar"
		})
	};
	t.Aa = function() {
		var a = this.c.Va ? this.c.v.currentTime : this.c.currentTime();
		this.a.setAttribute("aria-valuenow", u.round(100 * this.xb(), 2));
		this.a.setAttribute("aria-valuetext", u.ta(a, this.c.duration()))
	};
	t.xb = function() {
		return this.c.currentTime() / this.c.duration()
	};
	t.Ra = function(a) {
		u.O.prototype.Ra.call(this, a);
		this.c.Va = f;
		this.Hd = !this.c.paused();
		this.c.pause()
	};
	t.Gb = function(a) {
		a = F(this, a) * this.c.duration();
		a == this.c.duration() && (a -= 0.1);
		this.c.currentTime(a)
	};
	t.Hb = function(a) {
		u.O.prototype.Hb.call(this, a);
		this.c.Va = l;
		this.Hd && this.c.play()
	};
	t.zc = function() {
		this.c.currentTime(this.c.currentTime() + 5)
	};
	t.yc = function() {
		this.c.currentTime(this.c.currentTime() - 5)
	};
	u.cb = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c);
			a.d("progress", u.bind(this, this.update))
		}
	});
	u.cb.prototype.e = function() {
		return u.b.prototype.e.call(this, "div", {
			className : "vjs-load-progress",
			innerHTML : '<span class="vjs-control-text">Loaded: 0%</span>'
		})
	};
	u.cb.prototype.update = function() {
		this.a.style && (this.a.style.width = u.round(100 * this.c.bufferedPercent(), 2) + "%")
	};
	u.Wb = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c)
		}
	});
	u.Wb.prototype.e = function() {
		return u.b.prototype.e.call(this, "div", {
			className : "vjs-play-progress",
			innerHTML : '<span class="vjs-control-text">Progress: 0%</span>'
		})
	};
	u.Ga = u.W.extend({
		j : function(a, c) {
			u.W.call(this, a, c);
			a.d("timeupdate", u.bind(this, this.da))
		}
	});
	u.Ga.prototype.defaultValue = "00:00";
	u.Ga.prototype.e = function() {
		return u.W.prototype.e.call(this, "div", {
			className : "vjs-seek-handle",
			"aria-live" : "off"
		})
	};
	u.Ga.prototype.da = function() {
		var a = this.c.Va ? this.c.v.currentTime : this.c.currentTime();
		this.a.innerHTML = '<span class="vjs-control-text">' + u.ta(a, this.c.duration()) + "</span>"
	};
	u.ib = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c);
			a.i && (a.i.m && a.i.m.volumeControl === l) && this.n("vjs-hidden");
			a.d("loadstart", u.bind(this, function() {
				a.i.m && a.i.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
			}))
		}
	});
	u.ib.prototype.h = {
		children : {
			volumeBar : {}
		}
	};
	u.ib.prototype.e = function() {
		return u.b.prototype.e.call(this, "div", {
			className : "vjs-volume-control vjs-control"
		})
	};
	u.hb = u.O.extend({
		j : function(a, c) {
			u.O.call(this, a, c);
			a.d("volumechange", u.bind(this, this.Aa));
			a.I(u.bind(this, this.Aa));
			setTimeout(u.bind(this, this.update), 0)
		}
	});
	t = u.hb.prototype;
	t.Aa = function() {
		this.a.setAttribute("aria-valuenow", u.round(100 * this.c.volume(), 2));
		this.a.setAttribute("aria-valuetext", u.round(100 * this.c.volume(), 2) + "%")
	};
	t.h = {
		children : {
			volumeLevel : {},
			volumeHandle : {}
		},
		barName : "volumeLevel",
		handleName : "volumeHandle"
	};
	t.sc = "volumechange";
	t.e = function() {
		return u.O.prototype.e.call(this, "div", {
			className : "vjs-volume-bar",
			"aria-label" : "volume level"
		})
	};
	t.Gb = function(a) {
		this.c.muted() && this.c.muted(l);
		this.c.volume(F(this, a))
	};
	t.xb = function() {
		return this.c.muted() ? 0 : this.c.volume()
	};
	t.zc = function() {
		this.c.volume(this.c.volume() + 0.1)
	};
	t.yc = function() {
		this.c.volume(this.c.volume() - 0.1)
	};
	u.cc = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c)
		}
	});
	u.cc.prototype.e = function() {
		return u.b.prototype.e.call(this, "div", {
			className : "vjs-volume-level",
			innerHTML : '<span class="vjs-control-text"></span>'
		})
	};
	u.jb = u.W.extend();
	u.jb.prototype.defaultValue = "00:00";
	u.jb.prototype.e = function() {
		return u.W.prototype.e.call(this, "div", {
			className : "vjs-volume-handle"
		})
	};
	u.ea = u.q.extend({
		j : function(a, c) {
			u.q.call(this, a, c);
			a.d("volumechange", u.bind(this, this.update));
			a.i && (a.i.m && a.i.m.volumeControl === l) && this.n("vjs-hidden");
			a.d("loadstart", u.bind(this, function() {
				a.i.m && a.i.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
			}))
		}
	});
	u.ea.prototype.e = function() {
		return u.q.prototype.e.call(this, "div", {
			className : "vjs-mute-control vjs-control",
			innerHTML : '<div><span class="vjs-control-text">Mute</span></div>'
		})
	};
	u.ea.prototype.p = function() {
		this.c.muted(this.c.muted() ? l : f)
	};
	u.ea.prototype.update = function() {
		var a = this.c.volume(), c = 3;
		0 === a || this.c.muted() ? c = 0 : 0.33 > a ? c = 1 : 0.67 > a && ( c = 2);
		this.c.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute");
		for ( a = 0; 4 > a; a++)
			u.t(this.a, "vjs-vol-" + a);
		u.n(this.a, "vjs-vol-" + c)
	};
	u.ma = u.S.extend({
		j : function(a, c) {
			u.S.call(this, a, c);
			a.d("volumechange", u.bind(this, this.update));
			a.i && (a.i.m && a.i.m.Dc === l) && this.n("vjs-hidden");
			a.d("loadstart", u.bind(this, function() {
				a.i.m && a.i.m.Dc === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
			}));
			this.n("vjs-menu-button")
		}
	});
	u.ma.prototype.Ma = function() {
		var a = new u.la(this.c, {
			Uc : "div"
		}), c = new u.hb(this.c, u.l.B({
			Gd : f
		}, this.h.Yd));
		a.Y(c);
		return a
	};
	u.ma.prototype.p = function() {
		u.ea.prototype.p.call(this);
		u.S.prototype.p.call(this)
	};
	u.ma.prototype.e = function() {
		return u.q.prototype.e.call(this, "div", {
			className : "vjs-volume-menu-button vjs-menu-button vjs-control",
			innerHTML : '<div><span class="vjs-control-text">Mute</span></div>'
		})
	};
	u.ma.prototype.update = u.ea.prototype.update;
	u.Fa = u.q.extend({
		j : function(a, c) {
			u.q.call(this, a, c);
			a.poster() && this.src(a.poster());
			(!a.poster() || !a.controls()) && this.D();
			a.d("posterchange", u.bind(this, function() {
				this.src(a.poster())
			}));
			a.d("play", u.bind(this, this.D))
		}
	});
	var Q = "backgroundSize" in u.F.style;
	u.Fa.prototype.e = function() {
		var a = u.e("div", {
			className : "vjs-poster",
			tabIndex : -1
		});
		Q || a.appendChild(u.e("img"));
		return a
	};
	u.Fa.prototype.src = function(a) {
		var c = this.u();
		a !== b && ( Q ? c.style.backgroundImage = 'url("' + a + '")' : c.firstChild.src = a)
	};
	u.Fa.prototype.p = function() {
		this.C().controls() && this.c.play()
	};
	u.Vb = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c);
			a.d("canplay", u.bind(this, this.D));
			a.d("canplaythrough", u.bind(this, this.D));
			a.d("playing", u.bind(this, this.D));
			a.d("seeking", u.bind(this, this.show));
			a.d("seeked", u.bind(this, this.D));
			a.d("error", u.bind(this, this.show));
			a.d("ended", u.bind(this, this.D));
			a.d("waiting", u.bind(this, this.show))
		}
	});
	u.Vb.prototype.e = function() {
		return u.b.prototype.e.call(this, "div", {
			className : "vjs-loading-spinner"
		})
	};
	u.Ya = u.q.extend();
	u.Ya.prototype.e = function() {
		return u.q.prototype.e.call(this, "div", {
			className : "vjs-big-play-button",
			innerHTML : '<span aria-hidden="true"></span>',
			"aria-label" : "play video"
		})
	};
	u.Ya.prototype.p = function() {
		this.c.play()
	};
	u.r = u.b.extend({
		j : function(a, c, d) {
			c = c || {};
			c.vc = l;
			u.b.call(this, a, c, d);
			var e, g;
			g = this;
			e = this.C();
			a = function() {
				if (e.controls() && !e.usingNativeControls()) {
					var a;
					g.d("mousedown", g.p);
					g.d("touchstart", function(c) {
						c.preventDefault();
						a = this.c.userActive()
					});
					g.d("touchmove", function() {
						a && this.C().reportUserActivity()
					});
					var c, d, n, s;
					c = 0;
					g.d("touchstart", function() {
						c = (new Date).getTime();
						n = f
					});
					s = function() {
						n = l
					};
					g.d("touchmove", s);
					g.d("touchleave", s);
					g.d("touchcancel", s);
					g.d("touchend", function() {
						n === f && ( d = (new Date).getTime() - c, 250 > d && this.k("tap"))
					});
					g.d("tap", g.qd)
				}
			};
			c = u.bind(g, g.td);
			this.I(a);
			e.d("controlsenabled", a);
			e.d("controlsdisabled", c)
		}
	});
	t = u.r.prototype;
	t.td = function() {
		this.o("tap");
		this.o("touchstart");
		this.o("touchmove");
		this.o("touchleave");
		this.o("touchcancel");
		this.o("touchend");
		this.o("click");
		this.o("mousedown")
	};
	t.p = function(a) {
		0 === a.button && this.C().controls() && (this.C().paused() ? this.C().play() : this.C().pause())
	};
	t.qd = function() {
		this.C().userActive(!this.C().userActive())
	};
	t.Lb = m();
	t.m = {
		volumeControl : f,
		fullscreenResize : l,
		progressEvents : l,
		timeupdateEvents : l
	};
	u.media = {};
	u.media.Xa = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
	function ea() {
		var a = u.media.Xa[i];
		return function() {
			//throw Error('The "' + a + "\" method is not available on the playback technology's API");
		}
	}

	for (var i = u.media.Xa.length - 1; 0 <= i; i--)
		u.r.prototype[u.media.Xa[i]] = ea();
	u.g = u.r.extend({
		j : function(a, c, d) {
			this.m.volumeControl = u.g.Tc();
			this.m.movingMediaElementInDOM = !u.Ic;
			this.m.fullscreenResize = f;
			u.r.call(this, a, c, d);
			for ( d = u.g.bb.length - 1; 0 <= d; d--)
				u.d(this.a, u.g.bb[d], u.bind(this.c, this.ad));
			( c = c.source) && this.a.currentSrc === c.src && 0 < this.a.networkState ? a.k("loadstart") : c && (this.a.src = c.src);
			if (u.$b && a.options().nativeControlsForTouch !== l) {
				var e, g, j, k;
				e = this;
				g = this.C();
				c = g.controls();
				e.a.controls = !!c;
				j = function() {
					e.a.controls = f
				};
				k = function() {
					e.a.controls = l
				};
				g.d("controlsenabled", j);
				g.d("controlsdisabled", k);
				c = function() {
					g.o("controlsenabled", j);
					g.o("controlsdisabled", k)
				};
				e.d("dispose", c);
				g.d("usingcustomcontrols", c);
				g.usingNativeControls(f)
			}
			a.I(function() {
				this.M && (this.h.autoplay && this.paused()) && (
				delete this.M.poster, this.play())
			});
			this.za()
		}
	});
	t = u.g.prototype;
	t.dispose = function() {
		u.r.prototype.dispose.call(this)
	};
	t.e = function() {
		var a = this.c, c = a.M, d;
		if (!c || this.m.movingMediaElementInDOM === l)
			c ? ( d = c.cloneNode(l), u.g.gc(c), c = d, a.M = h) : c = u.e("video", {
				id : a.id() + "_html5_api",
				className : "vjs-tech"
			}), c.player = a, u.yb(c, a.u());
		d = ["autoplay", "preload", "loop", "muted"];
		for (var e = d.length - 1; 0 <= e; e--) {
			var g = d[e];
			a.h[g] !== h && (c[g] = a.h[g])
		}
		return c
	};
	t.ad = function(a) {
		this.k(a);
		a.stopPropagation()
	};
	t.play = function() {
		this.a.play()
	};
	t.pause = function() {
		this.a.pause()
	};
	t.paused = function() {
		return this.a.paused
	};
	t.currentTime = function() {
		return this.a.currentTime
	};
	t.vd = function(a) {
		try {
			this.a.currentTime = a
		} catch(c) {
			//u.log(c, "Video is not ready. (Video.js)")
		}
	};
	t.duration = function() {
		return this.a.duration || 0
	};
	t.buffered = function() {
		return this.a.buffered
	};
	t.volume = function() {
		return this.a.volume
	};
	t.Ad = function(a) {
		this.a.volume = a
	};
	t.muted = function() {
		return this.a.muted
	};
	t.yd = function(a) {
		this.a.muted = a
	};
	t.width = function() {
		return this.a.offsetWidth
	};
	t.height = function() {
		return this.a.offsetHeight
	};
	t.Wa = function() {
		return "function" == typeof this.a.webkitEnterFullScreen && (/Android/.test(u.J) || !/Chrome|Mac OS X 10.5/.test(u.J)) ? f : l
	};
	t.hc = function() {
		var a = this.a;
		a.paused && a.networkState <= a.Jd ? (this.a.play(), setTimeout(function() {
			a.pause();
			a.webkitEnterFullScreen()
		}, 0)) : a.webkitEnterFullScreen()
	};
	t.bd = function() {
		this.a.webkitExitFullScreen()
	};
	t.src = function(a) {
		this.a.src = a
	};
	t.load = function() {
		this.a.load()
	};
	t.currentSrc = function() {
		return this.a.currentSrc
	};
	t.poster = function() {
		return this.a.poster
	};
	t.Lb = function(a) {
		this.a.poster = a
	};
	t.Sa = function() {
		return this.a.Sa
	};
	t.zd = function(a) {
		this.a.Sa = a
	};
	t.autoplay = function() {
		return this.a.autoplay
	};
	t.ud = function(a) {
		this.a.autoplay = a
	};
	t.controls = function() {
		return this.a.controls
	};
	t.loop = function() {
		return this.a.loop
	};
	t.xd = function(a) {
		this.a.loop = a
	};
	t.error = function() {
		return this.a.error
	};
	t.seeking = function() {
		return this.a.seeking
	};
	t.ended = function() {
		return this.a.ended
	};
	u.g.isSupported = function() {
		try {
			u.F.volume = 0.5
		} catch(a) {
			return l
		}
		return !!u.F.canPlayType
	};
	u.g.nb = function(a) {
		try {
			return !!u.F.canPlayType(a.type)
		} catch(c) {
			return ""
		}
	};
	u.g.Tc = function() {
		var a = u.F.volume;
		u.F.volume = a / 2 + 0.1;
		return a !== u.F.volume
	};
	var R, fa = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, ga = /^video\/mp4/i;
	u.g.rc = function() {
		4 <= u.Qb && (R || ( R = u.F.constructor.prototype.canPlayType), u.F.constructor.prototype.canPlayType = function(a) {
			return a && fa.test(a) ? "maybe" : R.call(this, a)
		});
		u.Mc && (R || ( R = u.F.constructor.prototype.canPlayType), u.F.constructor.prototype.canPlayType = function(a) {
			return a && ga.test(a) ? "maybe" : R.call(this, a)
		})
	};
	u.g.Fd = function() {
		var a = u.F.constructor.prototype.canPlayType;
		u.F.constructor.prototype.canPlayType = R;
		R = h;
		return a
	};
	u.g.rc();
	u.g.bb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
	u.g.gc = function(a) {
		if (a) {
			a.player = h;
			for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes(); )
				a.removeChild(a.firstChild);
			a.removeAttribute("src");
			if ("function" === typeof a.load)
				try {
					a.load()
				} catch(c) {
				}
		}
	};
	u.f = u.r.extend({
		j : function(a, c, d) {
			u.r.call(this, a, c, d);
			var e = c.source;
			d = c.parentEl;
			var g = this.a = u.e("div", {
				id : a.id() + "_temp_flash"
			}), j = a.id() + "_flash_api";
			a = a.h;
			var k = u.l.B({
				readyFunction : "videojs.Flash.onReady",
				eventProxyFunction : "videojs.Flash.onEvent",
				errorEventProxyFunction : "videojs.Flash.onError",
				autoplay : a.autoplay,
				preload : a.Sa,
				loop : a.loop,
				muted : a.muted
			}, c.flashVars), r = u.l.B({
				wmode : "opaque",
				bgcolor : "#000000"
			}, c.params), n = u.l.B({
				id : j,
				name : j,
				"class" : "vjs-tech"
			}, c.attributes), s;
			e && (e.type && u.f.jd(e.type) ? ( a = u.f.Ac(e.src), k.rtmpConnection = encodeURIComponent(a.qb), k.rtmpStream = encodeURIComponent(a.Mb)) : k.src = encodeURIComponent(u.kc(e.src)));
			this.setCurrentTime = function(a) {
				s = a;
				this.a.vjs_setProperty("currentTime", a)
			};
			this.currentTime = function() {
				return this.seeking() ? s : this.a.vjs_getProperty("currentTime")
			};
			u.yb(g, d);
			c.startTime && this.I(function() {
				this.load();
				this.play();
				this.currentTime(c.startTime)
			});
			u.Ub && this.I(function() {
				u.d(this.u(), "mousemove", u.bind(this, function() {
					this.C().k({
						type : "mousemove",
						bubbles : l
					})
				}))
			});
			if (c.iFrameMode === f && !u.Ub) {
				var D = u.e("iframe", {
					id : j + "_iframe",
					name : j + "_iframe",
					className : "vjs-tech",
					scrolling : "no",
					marginWidth : 0,
					marginHeight : 0,
					frameBorder : 0
				});
				k.readyFunction = "ready";
				k.eventProxyFunction = "events";
				k.errorEventProxyFunction = "errors";
				u.d(D, "load", u.bind(this, function() {
					var a, d = D.contentWindow;
					a = D.contentDocument ? D.contentDocument : D.contentWindow.document;
					a.write(u.f.lc(c.swf, k, r, n));
					d.player = this.c;
					d.ready = u.bind(this.c, function(c) {
						var d = this.i;
						d.a = a.getElementById(c);
						u.f.pb(d)
					});
					d.events = u.bind(this.c, function(a, c) {
						this && "flash" === this.xa && this.k(c)
					});
					d.errors = u.bind(this.c, function(a, c) {
						//u.log("Flash Error", c)
					})
				}));
				g.parentNode.replaceChild(D, g)
			} else
				u.f.$c(c.swf, g, k, r, n)
		}
	});
	t = u.f.prototype;
	t.dispose = function() {
		u.r.prototype.dispose.call(this)
	};
	t.play = function() {
		this.a.vjs_play()
	};
	t.pause = function() {
		this.a.vjs_pause()
	};
	t.src = function(a) {
		if (a === b)
			return this.currentSrc();
		u.f.hd(a) ? ( a = u.f.Ac(a), this.Td(a.qb), this.Ud(a.Mb)) : ( a = u.kc(a), this.a.vjs_src(a));
		if (this.c.autoplay()) {
			var c = this;
			setTimeout(function() {
				c.play()
			}, 0)
		}
	};
	t.currentSrc = function() {
		var a = this.a.vjs_getProperty("currentSrc");
		if (a == h) {
			var c = this.rtmpConnection(), d = this.rtmpStream();
			c && d && ( a = u.f.Bd(c, d))
		}
		return a
	};
	t.load = function() {
		this.a.vjs_load()
	};
	t.poster = function() {
		this.a.vjs_getProperty("poster")
	};
	t.Lb = m();
	t.buffered = function() {
		return u.sb(0, this.a.vjs_getProperty("buffered"))
	};
	t.Wa = q(l);
	t.hc = q(l);
	var S = u.f.prototype, T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "), U = "error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" ");
	function ha() {
		var a = T[V], c = a.charAt(0).toUpperCase() + a.slice(1);
		S["set" + c] = function(c) {
			return this.a.vjs_setProperty(a, c)
		}
	}

	function W(a) {
		S[a] = function() {
			return this.a.vjs_getProperty(a)
		}
	}

	var V;
	for ( V = 0; V < T.length; V++)
		W(T[V]), ha();
	for ( V = 0; V < U.length; V++)
		W(U[V]);
	u.f.isSupported = function() {
		return 10 <= u.f.version()[0]
	};
	u.f.nb = function(a) {
		if (!a.type)
			return "";
		a = a.type.replace(/;.*/, "").toLowerCase();
		if ( a in u.f.dd || a in u.f.Bc)
			return "maybe"
	};
	u.f.dd = {
		"video/flv" : "FLV",
		"video/x-flv" : "FLV",
		"video/mp4" : "MP4",
		"video/m4v" : "MP4"
	};
	u.f.Bc = {
		"rtmp/mp4" : "MP4",
		"rtmp/flv" : "FLV"
	};
	u.f.onReady = function(a) {
		a = u.u(a);
		var c = a.player || a.parentNode.player, d = c.i;
		a.player = c;
		d.a = a;
		u.f.pb(d)
	};
	u.f.pb = function(a) {
		a.u().vjs_getProperty ? a.za() : setTimeout(function() {
			u.f.pb(a)
		}, 50)
	};
	u.f.onEvent = function(a, c) {
		u.u(a).player.k(c)
	};
	u.f.onError = function(a, c) {
		u.u(a).player.k("error");
		u.log("Flash Error", c, a)
	};
	u.f.version = function() {
		var a = "0,0,0";
		try {
			a = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]
		} catch(c) {
			try {
				navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && ( a = (navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1])
			} catch(d) {
			}
		}
		return a.split(",")
	};
	u.f.$c = function(a, c, d, e, g) {
		a = u.f.lc(a, d, e, g);
		a = u.e("div",{innerHTML:a}).childNodes[0];
		d = c.parentNode;
		c.parentNode.replaceChild(a, c);
		var j = d.childNodes[0];
		setTimeout(function() {
			j.style.display = "block"
		}, 1E3)
	};
	u.f.lc = function(a, c, d, e) {
		var g = "", j = "", k = "";
		c && u.l.ra(c, function(a, c) {
			g += a + "=" + c + "&amp;"
		});
		d = u.l.B({
			movie : a,
			flashvars : g,
			allowScriptAccess : "always",
			allowNetworking : "all"
		}, d);
		u.l.ra(d, function(a, c) {
			j += '<param name="' + a + '" value="' + c + '" />'
		});
		e = u.l.B({
			data : a,
			width : "100%",
			height : "100%"
		}, e);
		u.l.ra(e, function(a, c) {
			k += a + '="' + c + '" '
		});
		return '<object type="application/x-shockwave-flash"' + k + ">" + j + "</object>"
	};
	u.f.Bd = function(a, c) {
		return a + "&" + c
	};
	u.f.Ac = function(a) {
		var c = {
			qb : "",
			Mb : ""
		};
		if (!a)
			return c;
		var d = a.indexOf("&"), e;
		-1 !== d ? e = d + 1 : ( d = e = a.lastIndexOf("/") + 1, 0 === d && ( d = e = a.length));
		c.qb = a.substring(0, d);
		c.Mb = a.substring(e, a.length);
		return c
	};
	u.f.jd = function(a) {
		return a in u.f.Bc
	};
	u.f.Oc = /^rtmp[set]?:\/\//i;
	u.f.hd = function(a) {
		return u.f.Oc.test(a)
	};
	u.Nc = u.b.extend({
		j : function(a, c, d) {
			u.b.call(this, a, c, d);
			if (!a.h.sources || 0 === a.h.sources.length) {
				c = 0;
				for ( d = a.h.techOrder; c < d.length; c++) {
					var e = u.Z(d[c]), g = window.videojs[e];
					if (g && g.isSupported()) {
						I(a, e);
						break
					}
				}
			} else
				a.src(a.h.sources)
		}
	});
	u.Player.prototype.textTracks = function() {
		return this.ya = this.ya || []
	};
	function X(a, c, d) {
		for (var e = a.ya, g = 0, j = e.length, k, r; g < j; g++)
			k = e[g], k.id() === c ? (k.show(), r = k) : d && (k.H() == d && 0 < k.mode()) && k.disable();
		( c = r ? r.H() : d ? d : l) && a.k(c + "trackchange")
	}


	u.w = u.b.extend({
		j : function(a, c) {
			u.b.call(this, a, c);
			this.R = c.id || "vjs_" + c.kind + "_" + c.language + "_" + u.s++;
			this.xc = c.src;
			this.Xc = c["default"] || c.dflt;
			this.Dd = c.title;
			this.Qd = c.srclang;
			this.kd = c.label;
			this.$ = [];
			this.kb = [];
			this.ga = this.ha = 0;
			this.c.d("fullscreenchange", u.bind(this, this.Qc))
		}
	});
	t = u.w.prototype;
	t.H = p("A");
	t.src = p("xc");
	t.tb = p("Xc");
	t.title = p("Dd");
	t.label = p("kd");
	t.Vc = p("$");
	t.Pc = p("kb");
	t.readyState = p("ha");
	t.mode = p("ga");
	t.Qc = function() {
		this.a.style.fontSize = this.c.isFullScreen() ? 140 * (screen.width / this.c.width()) + "%" : ""
	};
	t.e = function() {
		return u.b.prototype.e.call(this, "div", {
			className : "vjs-" + this.A + " vjs-text-track"
		})
	};
	t.show = function() {
		Y(this);
		this.ga = 2;
		u.b.prototype.show.call(this)
	};
	t.D = function() {
		Y(this);
		this.ga = 1;
		u.b.prototype.D.call(this)
	};
	t.disable = function() {
		2 == this.ga && this.D();
		this.c.o("timeupdate", u.bind(this, this.update, this.R));
		this.c.o("ended", u.bind(this, this.reset, this.R));
		this.reset();
		this.c.fa("textTrackDisplay").removeChild(this);
		this.ga = 0
	};
	function Y(a) {
		0 === a.ha && a.load();
		0 === a.ga && (a.c.d("timeupdate", u.bind(a, a.update, a.R)), a.c.d("ended", u.bind(a, a.reset, a.R)), ("captions" === a.A || "subtitles" === a.A) && a.c.fa("textTrackDisplay").Y(a))
	}


	t.load = function() {
		0 === this.ha && (this.ha = 1, u.get(this.xc, u.bind(this, this.rd), u.bind(this, this.Fb)))
	};
	t.Fb = function(a) {
		this.error = a;
		this.ha = 3;
		this.k("error")
	};
	t.rd = function(a) {
		var c, d;
		a = a.split("\n");
		for (var e = "", g = 1, j = a.length; g < j; g++)
			if ( e = u.trim(a[g])) {
				-1 == e.indexOf("--\x3e") ? ( c = e, e = u.trim(a[++g])) : c = this.$.length;
				c = {
					id : c,
					index : this.$.length
				};
				d = e.split(" --\x3e ");
				c.startTime = ia(d[0]);
				c.sa = ia(d[1]);
				for ( d = []; a[++g] && ( e = u.trim(a[g])); )
					d.push(e);
				c.text = d.join("<br/>");
				this.$.push(c)
			}
		this.ha = 2;
		this.k("loaded")
	};
	function ia(a) {
		var c = a.split(":");
		a = 0;
		var d, e, g;
		3 == c.length ? ( d = c[0], e = c[1], c = c[2]) : ( d = 0, e = c[0], c = c[1]);
		c = c.split(/\s+/);
		c = c.splice(0,1)[0];
		c = c.split(/\.|,/);
		g = parseFloat(c[1]);
		c = c[0];
		a += 3600 * parseFloat(d);
		a += 60 * parseFloat(e);
		a += parseFloat(c);
		g && (a += g / 1E3);
		return a
	}


	t.update = function() {
		if (0 < this.$.length) {
			var a = this.c.currentTime();
			if (this.Kb === b || a < this.Kb || this.Oa <= a) {
				var c = this.$, d = this.c.duration(), e = 0, g = l, j = [], k, r, n, s;
				a >= this.Oa || this.Oa === b ? s = this.vb !== b ? this.vb : 0 : ( g = f, s = this.Bb !== b ? this.Bb : c.length - 1);
				for (; ; ) {
					n = c[s];
					if (n.sa <= a)
						e = Math.max(e, n.sa), n.Ia && (n.Ia = l);
					else if (a < n.startTime) {
						if ( d = Math.min(d, n.startTime), n.Ia && (n.Ia = l), !g)
							break
					} else
						g ? (j.splice(0, 0, n), r === b && ( r = s), k = s) : (j.push(n), k === b && ( k = s), r = s), d = Math.min(d, n.sa), e = Math.max(e, n.startTime), n.Ia = f;
					if (g)
						if (0 === s)
							break;
						else
							s--;
					else if (s === c.length - 1)
						break;
					else
						s++
				}
				this.kb = j;
				this.Oa = d;
				this.Kb = e;
				this.vb = k;
				this.Bb = r;
				a = this.kb;
				c = "";
				d = 0;
				for ( e = a.length; d < e; d++)
					c += '<span class="vjs-tt-cue">' + a[d].text + "</span>";
				this.a.innerHTML = c;
				this.k("cuechange")
			}
		}
	};
	t.reset = function() {
		this.Oa = 0;
		this.Kb = this.c.duration();
		this.Bb = this.vb = 0
	};
	u.Sb = u.w.extend();
	u.Sb.prototype.A = "captions";
	u.Zb = u.w.extend();
	u.Zb.prototype.A = "subtitles";
	u.Tb = u.w.extend();
	u.Tb.prototype.A = "chapters";
	u.ac = u.b.extend({
		j : function(a, c, d) {
			u.b.call(this, a, c, d);
			if (a.h.tracks && 0 < a.h.tracks.length) {
				c = this.c;
				a = a.h.tracks;
				var e;
				for ( d = 0; d < a.length; d++) {
					e = a[d];
					var g = c, j = e.kind, k = e.label, r = e.language, n = e;
					e = g.ya = g.ya || [];
					n = n || {};
					n.kind = j;
					n.label = k;
					n.language = r;
					j = u.Z(j || "subtitles");
					g = new window.videojs[j+"Track"](g, n);
					e.push(g)
				}
			}
		}
	});
	u.ac.prototype.e = function() {
		return u.b.prototype.e.call(this, "div", {
			className : "vjs-text-track-display"
		})
	};
	u.X = u.N.extend({
		j : function(a, c) {
			var d = this.ca = c.track;
			c.label = d.label();
			c.selected = d.tb();
			u.N.call(this, a, c);
			this.c.d(d.H() + "trackchange", u.bind(this, this.update))
		}
	});
	u.X.prototype.p = function() {
		u.N.prototype.p.call(this);
		X(this.c, this.ca.R, this.ca.H())
	};
	u.X.prototype.update = function() {
		this.selected(2 == this.ca.mode())
	};
	u.eb = u.X.extend({
		j : function(a, c) {
			c.track = {
				H : function() {
					return c.kind
				},
				C : a,
				label : function() {
					return c.kind + " off"
				},
				tb : q(l),
				mode : q(l)
			};
			u.X.call(this, a, c);
			this.selected(f)
		}
	});
	u.eb.prototype.p = function() {
		u.X.prototype.p.call(this);
		X(this.c, this.ca.R, this.ca.H())
	};
	u.eb.prototype.update = function() {
		for (var a = this.c.textTracks(), c = 0, d = a.length, e, g = f; c < d; c++)
			e = a[c], e.H() == this.ca.H() && 2 == e.mode() && ( g = l);
		this.selected(g)
	};
	u.T = u.S.extend({
		j : function(a, c) {
			u.S.call(this, a, c);
			1 >= this.L.length && this.D()
		}
	});
	u.T.prototype.qa = function() {
		var a = [], c;
		a.push(new u.eb(this.c, {
			kind : this.A
		}));
		for (var d = 0; d < this.c.textTracks().length; d++)
			c = this.c.textTracks()[d], c.H() === this.A && a.push(new u.X(this.c, {
				track : c
			}));
		return a
	};
	u.Ba = u.T.extend({
		j : function(a, c, d) {
			u.T.call(this, a, c, d);
			this.a.setAttribute("aria-label", "Captions Menu")
		}
	});
	u.Ba.prototype.A = "captions";
	u.Ba.prototype.oa = "Captions";
	u.Ba.prototype.className = "vjs-captions-button";
	u.Ha = u.T.extend({
		j : function(a, c, d) {
			u.T.call(this, a, c, d);
			this.a.setAttribute("aria-label", "Subtitles Menu")
		}
	});
	u.Ha.prototype.A = "subtitles";
	u.Ha.prototype.oa = "Subtitles";
	u.Ha.prototype.className = "vjs-subtitles-button";
	u.Ca = u.T.extend({
		j : function(a, c, d) {
			u.T.call(this, a, c, d);
			this.a.setAttribute("aria-label", "Chapters Menu")
		}
	});
	t = u.Ca.prototype;
	t.A = "chapters";
	t.oa = "Chapters";
	t.className = "vjs-chapters-button";
	t.qa = function() {
		for (var a = [], c, d = 0; d < this.c.textTracks().length; d++)
			c = this.c.textTracks()[d], c.H() === this.A && a.push(new u.X(this.c, {
				track : c
			}));
		return a
	};
	t.Ma = function() {
		for (var a = this.c.textTracks(), c = 0, d = a.length, e, g, j = this.L = []; c < d; c++)
			if ( e = a[c], e.H() == this.A && e.tb()) {
				if (2 > e.readyState()) {
					this.Nd = e;
					e.d("loaded", u.bind(this, this.Ma));
					return
				}
				g = e;
				break
			}
		a = this.ua = new u.la(this.c);
		a.a.appendChild(u.e("li", {
			className : "vjs-menu-title",
			innerHTML : u.Z(this.A),
			Cd : -1
		}));
		if (g) {
			e = g.$;
			for (var k, c = 0, d = e.length; c < d; c++)
				k = e[c], k = new u.Za(this.c, {
					track : g,
					cue : k
				}), j.push(k), a.Y(k)
		}
		0 < this.L.length && this.show();
		return a
	};
	u.Za = u.N.extend({
		j : function(a, c) {
			var d = this.ca = c.track, e = this.cue = c.cue, g = a.currentTime();
			c.label = e.text;
			c.selected = e.startTime <= g && g < e.sa;
			u.N.call(this, a, c);
			d.d("cuechange", u.bind(this, this.update))
		}
	});
	u.Za.prototype.p = function() {
		u.N.prototype.p.call(this);
		this.c.currentTime(this.cue.startTime);
		this.update(this.cue.startTime)
	};
	u.Za.prototype.update = function() {
		var a = this.cue, c = this.c.currentTime();
		this.selected(a.startTime <= c && c < a.sa)
	};
	u.l.B(u.Da.prototype.h.children, {
		subtitlesButton : {},
		captionsButton : {},
		chaptersButton : {}
	});
	if ("undefined" !== typeof window.JSON && "function" === window.JSON.parse)
		u.JSON = window.JSON;
	else {
		u.JSON = {};
		var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		u.JSON.parse = function(a, c) {
			function d(a, e) {
				var k, r, n = a[e];
				if (n && "object" === typeof n)
					for (k in n)Object.prototype.hasOwnProperty.call(n, k) && ( r = d(n, k), r !== b ? n[k] = r :
					delete n[k]);
				return c.call(a, e, n)
			}

			var e;
			a = String(a);
			Z.lastIndex = 0;
			Z.test(a) && ( a = a.replace(Z, function(a) {
				return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
			}));
			if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
				return e = eval("(" + a + ")"), "function" === typeof c ? d({
					"" : e
				}, "") : e;
			//throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
		}
	}
	u.dc = function() {
		var a, c, d = document.getElementsByTagName("video");
		if (d && 0 < d.length)
			for (var e = 0, g = d.length; e < g; e++)
				if (( c = d[e]) && c.getAttribute)
					c.player === b && ( a = c.getAttribute("data-setup"), a !== h && ( a = u.JSON.parse(a || "{}"), videojs(c, a)));
				else {
					u.lb();
					break
				}
		else
			u.Ec || u.lb()
	};
	u.lb = function() {
		setTimeout(u.dc, 1)
	};
	"complete" === document.readyState ? u.Ec = f : u.U(window, "load", function() {
		u.Ec = f
	});
	u.lb();
	u.sd = function(a, c) {
		u.Player.prototype[a] = c
	};
	var ja = this;
	ja.Id = f;
	function $(a, c) {
		var d = a.split("."), e = ja;
		!(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
		for (var g; d.length && ( g = d.shift()); )
			!d.length && c !== b ? e[g] = c : e = e[g] ? e[g] : e[g] = {}
	};
	$("videojs", u);
	$("_V_", u);
	$("videojs.options", u.options);
	$("videojs.players", u.va);
	$("videojs.TOUCH_ENABLED", u.$b);
	$("videojs.cache", u.pa);
	$("videojs.Component", u.b);
	u.b.prototype.player = u.b.prototype.C;
	u.b.prototype.options = u.b.prototype.options;
	u.b.prototype.init = u.b.prototype.j;
	u.b.prototype.dispose = u.b.prototype.dispose;
	u.b.prototype.createEl = u.b.prototype.e;
	u.b.prototype.contentEl = u.b.prototype.La;
	u.b.prototype.el = u.b.prototype.u;
	u.b.prototype.addChild = u.b.prototype.Y;
	u.b.prototype.getChild = u.b.prototype.fa;
	u.b.prototype.getChildById = u.b.prototype.ed;
	u.b.prototype.children = u.b.prototype.children;
	u.b.prototype.initChildren = u.b.prototype.nc;
	u.b.prototype.removeChild = u.b.prototype.removeChild;
	u.b.prototype.on = u.b.prototype.d;
	u.b.prototype.off = u.b.prototype.o;
	u.b.prototype.one = u.b.prototype.U;
	u.b.prototype.trigger = u.b.prototype.k;
	u.b.prototype.triggerReady = u.b.prototype.za;
	u.b.prototype.show = u.b.prototype.show;
	u.b.prototype.hide = u.b.prototype.D;
	u.b.prototype.width = u.b.prototype.width;
	u.b.prototype.height = u.b.prototype.height;
	u.b.prototype.dimensions = u.b.prototype.Yc;
	u.b.prototype.ready = u.b.prototype.I;
	u.b.prototype.addClass = u.b.prototype.n;
	u.b.prototype.removeClass = u.b.prototype.t;
	u.b.prototype.buildCSSClass = u.b.prototype.Q;
	u.Player.prototype.ended = u.Player.prototype.ended;
	$("videojs.MediaLoader", u.Nc);
	$("videojs.TextTrackDisplay", u.ac);
	$("videojs.ControlBar", u.Da);
	$("videojs.Button", u.q);
	$("videojs.PlayToggle", u.Xb);
	$("videojs.FullscreenToggle", u.Ea);
	$("videojs.BigPlayButton", u.Ya);
	$("videojs.LoadingSpinner", u.Vb);
	$("videojs.CurrentTimeDisplay", u.$a);
	$("videojs.DurationDisplay", u.ab);
	$("videojs.TimeDivider", u.bc);
	$("videojs.RemainingTimeDisplay", u.gb);
	$("videojs.Slider", u.O);
	$("videojs.ProgressControl", u.fb);
	$("videojs.SeekBar", u.Yb);
	$("videojs.LoadProgressBar", u.cb);
	$("videojs.PlayProgressBar", u.Wb);
	$("videojs.SeekHandle", u.Ga);
	$("videojs.VolumeControl", u.ib);
	$("videojs.VolumeBar", u.hb);
	$("videojs.VolumeLevel", u.cc);
	$("videojs.VolumeMenuButton", u.ma);
	$("videojs.VolumeHandle", u.jb);
	$("videojs.MuteToggle", u.ea);
	$("videojs.PosterImage", u.Fa);
	$("videojs.Menu", u.la);
	$("videojs.MenuItem", u.N);
	$("videojs.MenuButton", u.S);
	u.S.prototype.createItems = u.S.prototype.qa;
	u.T.prototype.createItems = u.T.prototype.qa;
	u.Ca.prototype.createItems = u.Ca.prototype.qa;
	$("videojs.SubtitlesButton", u.Ha);
	$("videojs.CaptionsButton", u.Ba);
	$("videojs.ChaptersButton", u.Ca);
	$("videojs.MediaTechController", u.r);
	u.r.prototype.features = u.r.prototype.m;
	u.r.prototype.m.volumeControl = u.r.prototype.m.Dc;
	u.r.prototype.m.fullscreenResize = u.r.prototype.m.Od;
	u.r.prototype.m.progressEvents = u.r.prototype.m.Sd;
	u.r.prototype.m.timeupdateEvents = u.r.prototype.m.Vd;
	u.r.prototype.setPoster = u.r.prototype.Lb;
	$("videojs.Html5", u.g);
	u.g.Events = u.g.bb;
	u.g.isSupported = u.g.isSupported;
	u.g.canPlaySource = u.g.nb;
	u.g.patchCanPlayType = u.g.rc;
	u.g.unpatchCanPlayType = u.g.Fd;
	u.g.prototype.setCurrentTime = u.g.prototype.vd;
	u.g.prototype.setVolume = u.g.prototype.Ad;
	u.g.prototype.setMuted = u.g.prototype.yd;
	u.g.prototype.setPreload = u.g.prototype.zd;
	u.g.prototype.setAutoplay = u.g.prototype.ud;
	u.g.prototype.setLoop = u.g.prototype.xd;
	u.g.prototype.enterFullScreen = u.g.prototype.hc;
	u.g.prototype.exitFullScreen = u.g.prototype.bd;
	$("videojs.Flash", u.f);
	u.f.isSupported = u.f.isSupported;
	u.f.canPlaySource = u.f.nb;
	u.f.onReady = u.f.onReady;
	$("videojs.TextTrack", u.w);
	u.w.prototype.label = u.w.prototype.label;
	u.w.prototype.kind = u.w.prototype.H;
	u.w.prototype.mode = u.w.prototype.mode;
	u.w.prototype.cues = u.w.prototype.Vc;
	u.w.prototype.activeCues = u.w.prototype.Pc;
	$("videojs.CaptionsTrack", u.Sb);
	$("videojs.SubtitlesTrack", u.Zb);
	$("videojs.ChaptersTrack", u.Tb);
	$("videojs.autoSetup", u.dc);
	$("videojs.plugin", u.sd);
	$("videojs.createTimeRange", u.sb);
	$("videojs.util", u.ja);
	u.ja.mergeOptions = u.ja.Eb;
})(); ! function(t, a, e, n, m) {
	m = a.location, t.src = "//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-2&utmn=1&utmhn=" + n(m.hostname) + "&utmsr=" + a.screen.availWidth + "x" + a.screen.availHeight + "&utmul=" + (e.language || e.userLanguage || "").toLowerCase() + "&utmr=" + n(m.href) + "&utmp=" + n(m.hostname + m.pathname) + "&utmcc=__utma%3D1." + Math.floor(1e10 * Math.random()) + ".1.1.1.1%3B" + "&utme=8(vjsv)9(v4.5.1)"
}(new Image, window, navigator, encodeURIComponent); 