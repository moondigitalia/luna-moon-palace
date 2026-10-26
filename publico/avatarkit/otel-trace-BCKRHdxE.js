//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region core/sdk-ref.ts
var ref = null;
/** @internal 仅供 AvatarSDK 在自身模块求值时回填。 */
function setSDKRef(sdk) {
	ref = sdk;
}
/** @internal */
function requireSDK() {
	if (!ref) throw new Error("[AvatarKit] AvatarSDK module has not been evaluated");
	return ref;
}
//#endregion
//#region node_modules/.pnpm/stackframe@1.3.4/node_modules/stackframe/stackframe.js
var require_stackframe = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(root, factory) {
		"use strict";
		/* istanbul ignore next */
		if (typeof define === "function" && define.amd) define("stackframe", [], factory);
		else if (typeof exports === "object") module.exports = factory();
		else root.StackFrame = factory();
	})(exports, function() {
		"use strict";
		function _isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}
		function _capitalize(str) {
			return str.charAt(0).toUpperCase() + str.substring(1);
		}
		function _getter(p) {
			return function() {
				return this[p];
			};
		}
		var booleanProps = [
			"isConstructor",
			"isEval",
			"isNative",
			"isToplevel"
		];
		var numericProps = ["columnNumber", "lineNumber"];
		var stringProps = [
			"fileName",
			"functionName",
			"source"
		];
		var props = booleanProps.concat(numericProps, stringProps, ["args"], ["evalOrigin"]);
		function StackFrame(obj) {
			if (!obj) return;
			for (var i = 0; i < props.length; i++) if (obj[props[i]] !== void 0) this["set" + _capitalize(props[i])](obj[props[i]]);
		}
		StackFrame.prototype = {
			getArgs: function() {
				return this.args;
			},
			setArgs: function(v) {
				if (Object.prototype.toString.call(v) !== "[object Array]") throw new TypeError("Args must be an Array");
				this.args = v;
			},
			getEvalOrigin: function() {
				return this.evalOrigin;
			},
			setEvalOrigin: function(v) {
				if (v instanceof StackFrame) this.evalOrigin = v;
				else if (v instanceof Object) this.evalOrigin = new StackFrame(v);
				else throw new TypeError("Eval Origin must be an Object or StackFrame");
			},
			toString: function() {
				var fileName = this.getFileName() || "";
				var lineNumber = this.getLineNumber() || "";
				var columnNumber = this.getColumnNumber() || "";
				var functionName = this.getFunctionName() || "";
				if (this.getIsEval()) {
					if (fileName) return "[eval] (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
					return "[eval]:" + lineNumber + ":" + columnNumber;
				}
				if (functionName) return functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
				return fileName + ":" + lineNumber + ":" + columnNumber;
			}
		};
		StackFrame.fromString = function StackFrame$$fromString(str) {
			var argsStartIndex = str.indexOf("(");
			var argsEndIndex = str.lastIndexOf(")");
			var functionName = str.substring(0, argsStartIndex);
			var args = str.substring(argsStartIndex + 1, argsEndIndex).split(",");
			var locationString = str.substring(argsEndIndex + 1);
			if (locationString.indexOf("@") === 0) {
				var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, "");
				var fileName = parts[1];
				var lineNumber = parts[2];
				var columnNumber = parts[3];
			}
			return new StackFrame({
				functionName,
				args: args || void 0,
				fileName,
				lineNumber: lineNumber || void 0,
				columnNumber: columnNumber || void 0
			});
		};
		for (var i = 0; i < booleanProps.length; i++) {
			StackFrame.prototype["get" + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
			StackFrame.prototype["set" + _capitalize(booleanProps[i])] = (function(p) {
				return function(v) {
					this[p] = Boolean(v);
				};
			})(booleanProps[i]);
		}
		for (var j = 0; j < numericProps.length; j++) {
			StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);
			StackFrame.prototype["set" + _capitalize(numericProps[j])] = (function(p) {
				return function(v) {
					if (!_isNumber(v)) throw new TypeError(p + " must be a Number");
					this[p] = Number(v);
				};
			})(numericProps[j]);
		}
		for (var k = 0; k < stringProps.length; k++) {
			StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]);
			StackFrame.prototype["set" + _capitalize(stringProps[k])] = (function(p) {
				return function(v) {
					this[p] = String(v);
				};
			})(stringProps[k]);
		}
		return StackFrame;
	});
}));
//#endregion
//#region node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/shared/pathe.M-eThtNZ.mjs
var import_error_stack_parser = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(root, factory) {
		"use strict";
		/* istanbul ignore next */
		if (typeof define === "function" && define.amd) define("error-stack-parser", ["stackframe"], factory);
		else if (typeof exports === "object") module.exports = factory(require_stackframe());
		else root.ErrorStackParser = factory(root.StackFrame);
	})(exports, function ErrorStackParser(StackFrame) {
		"use strict";
		var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
		var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
		var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
		return {
			/**
			* Given an Error object, extract the most information from it.
			*
			* @param {Error} error object
			* @return {Array} of StackFrames
			*/
			parse: function ErrorStackParser$$parse(error) {
				if (typeof error.stacktrace !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") return this.parseOpera(error);
				else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) return this.parseV8OrIE(error);
				else if (error.stack) return this.parseFFOrSafari(error);
				else throw new Error("Cannot parse given Error object");
			},
			extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
				if (urlLike.indexOf(":") === -1) return [urlLike];
				var parts = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(urlLike.replace(/[()]/g, ""));
				return [
					parts[1],
					parts[2] || void 0,
					parts[3] || void 0
				];
			},
			parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
				return error.stack.split("\n").filter(function(line) {
					return !!line.match(CHROME_IE_STACK_REGEXP);
				}, this).map(function(line) {
					if (line.indexOf("(eval ") > -1) line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
					var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
					var location = sanitizedLine.match(/ (\(.+\)$)/);
					sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
					var locationParts = this.extractLocation(location ? location[1] : sanitizedLine);
					return new StackFrame({
						functionName: location && sanitizedLine || void 0,
						fileName: ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0],
						lineNumber: locationParts[1],
						columnNumber: locationParts[2],
						source: line
					});
				}, this);
			},
			parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
				return error.stack.split("\n").filter(function(line) {
					return !line.match(SAFARI_NATIVE_CODE_REGEXP);
				}, this).map(function(line) {
					if (line.indexOf(" > eval") > -1) line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
					if (line.indexOf("@") === -1 && line.indexOf(":") === -1) return new StackFrame({ functionName: line });
					else {
						var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
						var matches = line.match(functionNameRegex);
						var functionName = matches && matches[1] ? matches[1] : void 0;
						var locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
						return new StackFrame({
							functionName,
							fileName: locationParts[0],
							lineNumber: locationParts[1],
							columnNumber: locationParts[2],
							source: line
						});
					}
				}, this);
			},
			parseOpera: function ErrorStackParser$$parseOpera(e) {
				if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) return this.parseOpera9(e);
				else if (!e.stack) return this.parseOpera10(e);
				else return this.parseOpera11(e);
			},
			parseOpera9: function ErrorStackParser$$parseOpera9(e) {
				var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
				var lines = e.message.split("\n");
				var result = [];
				for (var i = 2, len = lines.length; i < len; i += 2) {
					var match = lineRE.exec(lines[i]);
					if (match) result.push(new StackFrame({
						fileName: match[2],
						lineNumber: match[1],
						source: lines[i]
					}));
				}
				return result;
			},
			parseOpera10: function ErrorStackParser$$parseOpera10(e) {
				var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
				var lines = e.stacktrace.split("\n");
				var result = [];
				for (var i = 0, len = lines.length; i < len; i += 2) {
					var match = lineRE.exec(lines[i]);
					if (match) result.push(new StackFrame({
						functionName: match[3] || void 0,
						fileName: match[2],
						lineNumber: match[1],
						source: lines[i]
					}));
				}
				return result;
			},
			parseOpera11: function ErrorStackParser$$parseOpera11(error) {
				return error.stack.split("\n").filter(function(line) {
					return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
				}, this).map(function(line) {
					var tokens = line.split("@");
					var locationParts = this.extractLocation(tokens.pop());
					var functionCall = tokens.shift() || "";
					var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
					var argsRaw;
					if (functionCall.match(/\(([^)]*)\)/)) argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
					return new StackFrame({
						functionName,
						args: argsRaw === void 0 || argsRaw === "[arguments not available]" ? void 0 : argsRaw.split(","),
						fileName: locationParts[0],
						lineNumber: locationParts[1],
						columnNumber: locationParts[2],
						source: line
					});
				}, this);
			}
		};
	});
})))(), 1);
var _lazyMatch = () => {
	var __lib__ = (() => {
		var m = Object.defineProperty, V = Object.getOwnPropertyDescriptor, G = Object.getOwnPropertyNames, T = Object.prototype.hasOwnProperty, q = (r, e) => {
			for (var n in e) m(r, n, {
				get: e[n],
				enumerable: true
			});
		}, H = (r, e, n, a) => {
			if (e && typeof e == "object" || typeof e == "function") for (let t of G(e)) !T.call(r, t) && t !== n && m(r, t, {
				get: () => e[t],
				enumerable: !(a = V(e, t)) || a.enumerable
			});
			return r;
		}, J = (r) => H(m({}, "__esModule", { value: true }), r), w = {};
		q(w, { default: () => re });
		var A = (r) => Array.isArray(r), d = (r) => typeof r == "function", Q = (r) => r.length === 0, W = (r) => typeof r == "number", K = (r) => typeof r == "object" && r !== null, X = (r) => r instanceof RegExp, b = (r) => typeof r == "string", h = (r) => r === void 0, Y = (r) => {
			const e = /* @__PURE__ */ new Map();
			return (n) => {
				const a = e.get(n);
				if (a) return a;
				const t = r(n);
				return e.set(n, t), t;
			};
		}, rr = (r, e, n = {}) => {
			const a = {
				cache: {},
				input: r,
				index: 0,
				indexMax: 0,
				options: n,
				output: []
			};
			if (v(e)(a) && a.index === r.length) return a.output;
			throw new Error(`Failed to parse at index ${a.indexMax}`);
		}, i = (r, e) => A(r) ? er(r, e) : b(r) ? ar(r, e) : nr(r, e), er = (r, e) => {
			const n = {};
			for (const a of r) {
				if (a.length !== 1) throw new Error(`Invalid character: "${a}"`);
				const t = a.charCodeAt(0);
				n[t] = true;
			}
			return (a) => {
				const t = a.index, o = a.input;
				for (; a.index < o.length && o.charCodeAt(a.index) in n;) a.index += 1;
				const u = a.index;
				if (u > t) {
					if (!h(e) && !a.options.silent) {
						const s = a.input.slice(t, u), c = d(e) ? e(s, o, String(t)) : e;
						h(c) || a.output.push(c);
					}
					a.indexMax = Math.max(a.indexMax, a.index);
				}
				return true;
			};
		}, nr = (r, e) => {
			const n = r.source, a = r.flags.replace(/y|$/, "y"), t = new RegExp(n, a);
			return g((o) => {
				t.lastIndex = o.index;
				const u = t.exec(o.input);
				if (u) {
					if (!h(e) && !o.options.silent) {
						const s = d(e) ? e(...u, o.input, String(o.index)) : e;
						h(s) || o.output.push(s);
					}
					return o.index += u[0].length, o.indexMax = Math.max(o.indexMax, o.index), true;
				} else return false;
			});
		}, ar = (r, e) => (n) => {
			if (n.input.startsWith(r, n.index)) {
				if (!h(e) && !n.options.silent) {
					const t = d(e) ? e(r, n.input, String(n.index)) : e;
					h(t) || n.output.push(t);
				}
				return n.index += r.length, n.indexMax = Math.max(n.indexMax, n.index), true;
			} else return false;
		}, C = (r, e, n, a) => {
			const t = v(r);
			return g(_(M((o) => {
				let u = 0;
				for (; u < n;) {
					const s = o.index;
					if (!t(o) || (u += 1, o.index === s)) break;
				}
				return u >= e;
			})));
		}, tr = (r, e) => C(r, 0, 1), f = (r, e) => C(r, 0, Infinity), x = (r, e) => {
			const n = r.map(v);
			return g(_(M((a) => {
				for (let t = 0, o = n.length; t < o; t++) if (!n[t](a)) return false;
				return true;
			})));
		}, l = (r, e) => {
			const n = r.map(v);
			return g(_((a) => {
				for (let t = 0, o = n.length; t < o; t++) if (n[t](a)) return true;
				return false;
			}));
		}, M = (r, e = false) => {
			const n = v(r);
			return (a) => {
				const t = a.index, o = a.output.length, u = n(a);
				return (!u || e) && (a.index = t, a.output.length !== o && (a.output.length = o)), u;
			};
		}, _ = (r, e) => {
			return v(r);
		}, g = (() => {
			let r = 0;
			return (e) => {
				const n = v(e), a = r += 1;
				return (t) => {
					var o;
					if (t.options.memoization === false) return n(t);
					const u = t.index, s = (o = t.cache)[a] || (o[a] = /* @__PURE__ */ new Map()), c = s.get(u);
					if (c === false) return false;
					if (W(c)) return t.index = c, true;
					if (c) return t.index = c.index, c.output?.length && t.output.push(...c.output), true;
					{
						const Z = t.output.length;
						if (n(t)) {
							const D = t.index, U = t.output.length;
							if (U > Z) {
								const ee = t.output.slice(Z, U);
								s.set(u, {
									index: D,
									output: ee
								});
							} else s.set(u, D);
							return true;
						} else return s.set(u, false), false;
					}
				};
			};
		})(), E = (r) => {
			let e;
			return (n) => (e || (e = v(r())), e(n));
		}, v = Y((r) => {
			if (d(r)) return Q(r) ? E(r) : r;
			if (b(r) || X(r)) return i(r);
			if (A(r)) return x(r);
			if (K(r)) return l(Object.values(r));
			throw new Error("Invalid rule");
		}), P = "abcdefghijklmnopqrstuvwxyz", ir = (r) => {
			let e = "";
			for (; r > 0;) e = P[(r - 1) % 26] + e, r = Math.floor((r - 1) / 26);
			return e;
		}, O = (r) => {
			let e = 0;
			for (let n = 0, a = r.length; n < a; n++) e = e * 26 + P.indexOf(r[n]) + 1;
			return e;
		}, S = (r, e) => {
			if (e < r) return S(e, r);
			const n = [];
			for (; r <= e;) n.push(r++);
			return n;
		}, or = (r, e, n) => S(r, e).map((a) => String(a).padStart(n, "0")), R = (r, e) => S(O(r), O(e)).map(ir), p = (r) => r, z = (r) => ur((e) => rr(e, r, { memoization: false }).join("")), ur = (r) => {
			const e = {};
			return (n) => e[n] ?? (e[n] = r(n));
		}, sr = i(/^\*\*\/\*$/, ".*"), cr = i(/^\*\*\/(\*)?([ a-zA-Z0-9._-]+)$/, (r, e, n) => `.*${e ? "" : "(?:^|/)"}${n.replaceAll(".", "\\.")}`), lr = i(/^\*\*\/(\*)?([ a-zA-Z0-9._-]*)\{([ a-zA-Z0-9._-]+(?:,[ a-zA-Z0-9._-]+)*)\}$/, (r, e, n, a) => `.*${e ? "" : "(?:^|/)"}${n.replaceAll(".", "\\.")}(?:${a.replaceAll(",", "|").replaceAll(".", "\\.")})`), y = i(/\\./, p), pr = i(/[$.*+?^(){}[\]\|]/, (r) => `\\${r}`), vr = i(/./, p), fr = l([i(/^(?:!!)*!(.*)$/, (r, e) => `(?!^${L(e)}$).*?`), i(/^(!!)+/, "")]), j = l([
			i(/\/(\*\*\/)+/, "(?:/.+/|/)"),
			i(/^(\*\*\/)+/, "(?:^|.*/)"),
			i(/\/(\*\*)$/, "(?:/.*|$)"),
			i(/\*\*/, ".*")
		]), N = l([i(/\*\/(?!\*\*\/)/, "[^/]*/"), i(/\*/, "[^/]*")]), k = i("?", "[^/]"), $r = i("[", p), wr = i("]", p), Ar = i(/[!^]/, "^/"), br = i(/[a-z]-[a-z]|[0-9]-[0-9]/i, p), Er = l([
			y,
			i(/[$.*+?^(){}[\|]/, (r) => `\\${r}`),
			br,
			i(/[^\]]/, p)
		]), B = x([
			$r,
			tr(Ar),
			f(Er),
			wr
		]), Pr = i("{", "(?:"), Or = i("}", ")"), I = x([
			Pr,
			l([
				i(/(\d+)\.\.(\d+)/, (r, e, n) => or(+e, +n, Math.min(e.length, n.length)).join("|")),
				i(/([a-z]+)\.\.([a-z]+)/, (r, e, n) => R(e, n).join("|")),
				i(/([A-Z]+)\.\.([A-Z]+)/, (r, e, n) => R(e.toLowerCase(), n.toLowerCase()).join("|").toUpperCase())
			]),
			Or
		]), kr = i("{", "(?:"), Br = i("}", ")"), Ir = i(",", "|"), Fr = i(/[$.*+?^(){[\]\|]/, (r) => `\\${r}`), Lr = i(/[^}]/, p), F = x([
			kr,
			f(l([
				j,
				N,
				k,
				B,
				I,
				E(() => F),
				y,
				Fr,
				Ir,
				Lr
			])),
			Br
		]), L = z(f(l([
			sr,
			cr,
			lr,
			fr,
			j,
			N,
			k,
			B,
			I,
			F,
			y,
			pr,
			vr
		]))), Tr = i(/\\./, p), qr = i(/./, p), Yr = z(f(l([
			Tr,
			i(/\*\*\*+/, "*"),
			i(/([^/{[(!])\*\*/, (r, e) => `${e}*`),
			i(/(^|.)\*\*(?=[^*/)\]}])/, (r, e) => `${e}*`),
			qr
		]))), $ = (r, e) => {
			const n = Array.isArray(r) ? r : [r];
			if (!n.length) return false;
			const a = n.map($.compile), t = n.every((s) => /(\/(?:\*\*)?|\[\/\])$/.test(s)), o = e.replace(/[\\\/]+/g, "/").replace(/\/$/, t ? "/" : "");
			return a.some((s) => s.test(o));
		};
		$.compile = (r) => new RegExp(`^${L(Yr(r))}$`, "s");
		var re = $;
		return J(w);
	})();
	return __lib__.default || __lib__;
};
var _match;
var zeptomatch = (path, pattern) => {
	if (!_match) {
		_match = _lazyMatch();
		_lazyMatch = null;
	}
	return _match(path, pattern);
};
var _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
	if (!input) return input;
	return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
var _UNC_REGEX = /^[/\\]{2}/;
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
var _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
var _ROOT_FOLDER_RE = /^\/([A-Za-z]:)?$/;
var _EXTNAME_RE = /.(\.[^./]+|\.)$/;
var _PATH_ROOT_RE = /^[/\\]|^[a-zA-Z]:[/\\]/;
var normalize = function(path) {
	if (path.length === 0) return ".";
	path = normalizeWindowsPath(path);
	const isUNCPath = path.match(_UNC_REGEX);
	const isPathAbsolute = isAbsolute(path);
	const trailingSeparator = path[path.length - 1] === "/";
	path = normalizeString(path, !isPathAbsolute);
	if (path.length === 0) {
		if (isPathAbsolute) return "/";
		return trailingSeparator ? "./" : ".";
	}
	if (trailingSeparator) path += "/";
	if (_DRIVE_LETTER_RE.test(path)) path += "/";
	if (isUNCPath) {
		if (!isPathAbsolute) return `//./${path}`;
		return `//${path}`;
	}
	return isPathAbsolute && !isAbsolute(path) ? `/${path}` : path;
};
var join = function(...segments) {
	let path = "";
	for (const seg of segments) {
		if (!seg) continue;
		if (path.length > 0) {
			const pathTrailing = path[path.length - 1] === "/";
			const segLeading = seg[0] === "/";
			if (pathTrailing && segLeading) path += seg.slice(1);
			else path += pathTrailing || segLeading ? seg : `/${seg}`;
		} else path += seg;
	}
	return normalize(path);
};
function cwd() {
	if (typeof process !== "undefined" && typeof process.cwd === "function") return process.cwd().replace(/\\/g, "/");
	return "/";
}
var resolve = function(...arguments_) {
	arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
	let resolvedPath = "";
	let resolvedAbsolute = false;
	for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
		const path = index >= 0 ? arguments_[index] : cwd();
		if (!path || path.length === 0) continue;
		resolvedPath = `${path}/${resolvedPath}`;
		resolvedAbsolute = isAbsolute(path);
	}
	resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
	if (resolvedAbsolute && !isAbsolute(resolvedPath)) return `/${resolvedPath}`;
	return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
	let res = "";
	let lastSegmentLength = 0;
	let lastSlash = -1;
	let dots = 0;
	let char = null;
	for (let index = 0; index <= path.length; ++index) {
		if (index < path.length) char = path[index];
		else if (char === "/") break;
		else char = "/";
		if (char === "/") {
			if (lastSlash === index - 1 || dots === 1);
			else if (dots === 2) {
				if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
					if (res.length > 2) {
						const lastSlashIndex = res.lastIndexOf("/");
						if (lastSlashIndex === -1) {
							res = "";
							lastSegmentLength = 0;
						} else {
							res = res.slice(0, lastSlashIndex);
							lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
						}
						lastSlash = index;
						dots = 0;
						continue;
					} else if (res.length > 0) {
						res = "";
						lastSegmentLength = 0;
						lastSlash = index;
						dots = 0;
						continue;
					}
				}
				if (allowAboveRoot) {
					res += res.length > 0 ? "/.." : "..";
					lastSegmentLength = 2;
				}
			} else {
				if (res.length > 0) res += `/${path.slice(lastSlash + 1, index)}`;
				else res = path.slice(lastSlash + 1, index);
				lastSegmentLength = index - lastSlash - 1;
			}
			lastSlash = index;
			dots = 0;
		} else if (char === "." && dots !== -1) ++dots;
		else dots = -1;
	}
	return res;
}
var isAbsolute = function(p) {
	return _IS_ABSOLUTE_RE.test(p);
};
var toNamespacedPath = function(p) {
	return normalizeWindowsPath(p);
};
var extname = function(p) {
	if (p === "..") return "";
	const match = _EXTNAME_RE.exec(normalizeWindowsPath(p));
	return match && match[1] || "";
};
var relative = function(from, to) {
	const _from = resolve(from).replace(_ROOT_FOLDER_RE, "$1").split("/");
	const _to = resolve(to).replace(_ROOT_FOLDER_RE, "$1").split("/");
	if (_to[0][1] === ":" && _from[0][1] === ":" && _from[0] !== _to[0]) return _to.join("/");
	const _fromCopy = [..._from];
	for (const segment of _fromCopy) {
		if (_to[0] !== segment) break;
		_from.shift();
		_to.shift();
	}
	return [..._from.map(() => ".."), ..._to].join("/");
};
var dirname = function(p) {
	const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
	if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) segments[0] += "/";
	return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
var format = function(p) {
	const ext = p.ext ? p.ext.startsWith(".") ? p.ext : `.${p.ext}` : "";
	const segments = [
		p.root,
		p.dir,
		p.base ?? (p.name ?? "") + ext
	].filter(Boolean);
	return normalizeWindowsPath(p.root ? resolve(...segments) : segments.join("/"));
};
var basename = function(p, extension) {
	const segments = normalizeWindowsPath(p).split("/");
	let lastSegment = "";
	for (let i = segments.length - 1; i >= 0; i--) {
		const val = segments[i];
		if (val) {
			lastSegment = val;
			break;
		}
	}
	return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};
var parse = function(p) {
	const root = _PATH_ROOT_RE.exec(p)?.[0]?.replace(/\\/g, "/") || "";
	const base = basename(p);
	const extension = extname(base);
	return {
		root,
		dir: dirname(p),
		base,
		ext: extension,
		name: base.slice(0, base.length - extension.length)
	};
};
var matchesGlob = (path, pattern) => {
	return zeptomatch(pattern, normalize(path));
};
var _path = {
	__proto__: null,
	basename,
	dirname,
	extname,
	format,
	isAbsolute,
	join,
	matchesGlob,
	normalize,
	normalizeString,
	parse,
	relative,
	resolve,
	sep: "/",
	toNamespacedPath
};
//#endregion
//#region node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs
var delimiter = /* @__PURE__ */ (() => globalThis.process?.platform === "win32" ? ";" : ":")();
var _platforms = {
	posix: void 0,
	win32: void 0
};
var mix = (del = delimiter) => {
	return new Proxy(_path, { get(_, prop) {
		if (prop === "delimiter") return del;
		if (prop === "posix") return posix;
		if (prop === "win32") return win32;
		return _platforms[prop] || _path[prop];
	} });
};
var posix = /* @__PURE__ */ mix(":");
var win32 = /* @__PURE__ */ mix(";");
//#endregion
//#region node_modules/.pnpm/@guiiai+logg@1.2.5/node_modules/@guiiai/logg/dist/index.mjs
var LogLevel$1 = /* @__PURE__ */ ((LogLevel2) => {
	LogLevel2[LogLevel2["Error"] = 0] = "Error";
	LogLevel2[LogLevel2["Warning"] = 1] = "Warning";
	LogLevel2[LogLevel2["Log"] = 2] = "Log";
	LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
	LogLevel2[LogLevel2["Debug"] = 4] = "Debug";
	return LogLevel2;
})(LogLevel$1 || {});
var LogLevelString = /* @__PURE__ */ ((LogLevelString2) => {
	LogLevelString2["Error"] = "error";
	LogLevelString2["Warning"] = "warn";
	LogLevelString2["Log"] = "log";
	LogLevelString2["Verbose"] = "verbose";
	LogLevelString2["Debug"] = "debug";
	return LogLevelString2;
})(LogLevelString || {});
var Format = /* @__PURE__ */ ((Format2) => {
	Format2["JSON"] = "json";
	Format2["Pretty"] = "pretty";
	return Format2;
})(Format || {});
var isColorSupported = true;
function formatter(open, close, replace = open) {
	return (input) => {
		const string = `${input}`;
		const index = string.indexOf(close, open.length);
		return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
	};
}
function replaceClose(string, close, replace, index) {
	const start = string.substring(0, index) + replace;
	const end = string.substring(index + close.length);
	const nextIndex = end.indexOf(close);
	return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
}
function createColors(enabled = isColorSupported) {
	return {
		isColorSupported: enabled,
		reset: enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String,
		bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
		dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
		italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
		underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
		inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
		hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
		strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
		black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
		red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
		green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
		yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
		blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
		magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
		cyan: enabled ? formatter("\x1B[36m", "\x1B[39m") : String,
		white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
		gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
		bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
		bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
		bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
		bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
		bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
		bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
		bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
		bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
	};
}
var pc = createColors();
var logLevelStringToLogLevelMap = {
	[LogLevelString.Error]: LogLevel$1.Error,
	[LogLevelString.Warning]: LogLevel$1.Warning,
	[LogLevelString.Log]: LogLevel$1.Log,
	[LogLevelString.Verbose]: LogLevel$1.Verbose,
	[LogLevelString.Debug]: LogLevel$1.Debug
};
var logLevelToLogLevelStringMap = {
	[LogLevel$1.Error]: LogLevelString.Error,
	[LogLevel$1.Warning]: LogLevelString.Warning,
	[LogLevel$1.Log]: LogLevelString.Log,
	[LogLevel$1.Verbose]: LogLevelString.Verbose,
	[LogLevel$1.Debug]: LogLevelString.Debug
};
var availableLogLevelStrings = [
	LogLevelString.Error,
	LogLevelString.Warning,
	LogLevelString.Log,
	LogLevelString.Verbose,
	LogLevelString.Debug
];
var logLevelToColorMap = {
	[LogLevel$1.Error]: pc.red,
	[LogLevel$1.Warning]: pc.yellow,
	[LogLevel$1.Log]: pc.blue,
	[LogLevel$1.Verbose]: pc.cyan,
	[LogLevel$1.Debug]: pc.green
};
var availableLogLevels = [
	LogLevel$1.Error,
	LogLevel$1.Warning,
	LogLevel$1.Log,
	LogLevel$1.Verbose,
	LogLevel$1.Debug
];
var availableFormats = [Format.JSON, Format.Pretty];
function parseErrorStacks(errorLike) {
	if (errorLike.stack == null) return [];
	return errorLike.stack.split("\n").map((item) => item.trim()).slice(1).filter((item) => {
		if (!/^at (.*)( \(.*:(\d+):(\d+)\))|at (.*)(:(\d+):(\d+))/i.exec(item)) return false;
		return true;
	}).map((item) => {
		const match = /at (.*)( \((.*):(\d+):(\d+)\))|at (.*)(:(\d+):(\d+))/i.exec(item);
		if (!match) return { invalid: true };
		if (typeof match[1] !== "undefined" && typeof match[2] !== "undefined" && typeof match[3] !== "undefined" && typeof match[4] !== "undefined" && typeof match[5] !== "undefined") return {
			invalid: false,
			function: match[1] ?? "",
			file: match[3] ?? "",
			line: Number.parseInt(match[4] ?? "0"),
			column: Number.parseInt(match[5] ?? "0")
		};
		else if (typeof match[6] !== "undefined" && typeof match[7] !== "undefined" && typeof match[8] !== "undefined" && typeof match[9] !== "undefined") return {
			invalid: false,
			function: match[6] ?? "",
			file: match[7] ?? "",
			line: Number.parseInt(match[8] ?? "0"),
			column: Number.parseInt(match[9] ?? "0")
		};
		else return { invalid: true };
	});
}
function isErrorLike(err) {
	if (err == null) return false;
	if (err instanceof Error) return true;
	return false;
}
function newLog(logLevel, context, fields, message, timeFormatter) {
	let fieldsObj = { context: "" };
	if (typeof fields !== "undefined" && fields !== null) fieldsObj = { ...fields };
	if (typeof context !== "undefined" && context !== null) fieldsObj.context = context;
	const now = /* @__PURE__ */ new Date();
	return {
		"@timestamp": now.getTime(),
		"@localetime": timeFormatter ? timeFormatter(now) : now.toISOString(),
		"level": logLevel,
		"fields": fieldsObj,
		"message": message
	};
}
function newErrorLog(logLevel, context, fields, message, errorStack, timeFormatter) {
	const log = newLog(logLevel, context, fields, message, timeFormatter);
	if (typeof errorStack !== "undefined" && errorStack !== null) {
		log.errored = true;
		log.error = { stack: errorStack };
	}
	return log;
}
function prettyFormatValue(value) {
	let valueString = "";
	switch (typeof value) {
		case "number":
			valueString = pc.yellow(value);
			break;
		case "object":
			valueString = pc.green(JSON.stringify(value));
			break;
		case "boolean":
			valueString = pc.yellow(String(value));
			break;
		case "undefined":
			valueString = pc.gray("undefined");
			break;
		default:
			valueString = String(value);
			break;
	}
	return valueString;
}
function toPrettyString(log) {
	const messagePartials = [];
	messagePartials.push(log["@localetime"]);
	messagePartials.push(logLevelToColorMap[logLevelStringToLogLevelMap[log.level]](`[${log.level}]`));
	let contextString = "";
	if (log.fields.isNestSystemModule != null) {
		contextString = pc.magenta(`[${log.fields.nestSystemModule}]`);
		delete log.fields.isNestSystemModule;
		delete log.fields.nestSystemModule;
	}
	if (log.fields.context != null) {
		contextString = pc.magenta(`[${log.fields.context}]`);
		delete log.fields.context;
	}
	if (contextString.length > 0) messagePartials.push(contextString);
	if ("module" in log.fields && log.fields.module != null) {
		messagePartials.push(pc.magenta(`[${log.fields.module}]`));
		delete log.fields.module;
	}
	messagePartials.push(log.message);
	const fieldsEntries = Object.entries(log.fields);
	if (fieldsEntries.length > 0) messagePartials.push(" {");
	for (const [key, value] of fieldsEntries) {
		let valueString = value;
		if (isErrorLike(value)) {
			if (value.message) valueString = prettyFormatValue(value.message);
			if (!valueString) valueString = "";
			if (value.cause != null) try {
				valueString += JSON.stringify(value.cause);
			} catch {
				valueString += String(value.cause);
			}
		} else valueString = prettyFormatValue(value);
		messagePartials.push(`${pc.gray(key)}${pc.gray("=")}${valueString}`);
	}
	if (fieldsEntries.length > 0) messagePartials.push("}");
	let message = messagePartials.join(" ");
	if (log.errored != null && log.errored && log.error && log.error.stack != null && log.error.stack) message += `
${log.error.stack}`;
	return message;
}
function shouldOutputDebugLevelLogWhenLogLevelIsOneOf(logLevel) {
	return logLevel >= LogLevel$1.Debug;
}
function shouldOutputVerboseLevelLogWhenLogLevelIsOneOf(logLevel) {
	return logLevel >= LogLevel$1.Verbose;
}
function shouldOutputLogLevelLogWhenLogLevelIsOneOf(logLevel) {
	return logLevel >= LogLevel$1.Log;
}
function shouldOutputWarningLevelLogWhenLogLevelIsOneOf(logLevel) {
	return logLevel >= LogLevel$1.Warning;
}
function shouldOutputErrorLevelLogWhenLogLevelIsOneOf(logLevel) {
	return logLevel >= LogLevel$1.Error;
}
function isBrowser() {
	return typeof window !== "undefined";
}
function shouldUseHyperlink() {
	return !isBrowser() && getGlobalFormat() === Format.Pretty;
}
function withHyperlink(basePath, context) {
	return shouldUseHyperlink() ? `\x1B]8;;file://${basePath}\x1B\\${context}\x1B]8;;\x1B\\` : context;
}
var GLOBAL_CONFIG = {
	configured: false,
	logLevel: LogLevel$1.Debug,
	format: Format.JSON,
	timeFormatter: (inputDate) => inputDate.toISOString()
};
function getGlobalLogLevel() {
	return GLOBAL_CONFIG.logLevel;
}
function setGlobalLogLevel(logLevel) {
	if (availableLogLevels.includes(logLevel)) GLOBAL_CONFIG.logLevel = logLevel;
	else throw new Error(`log level ${logLevel} is not available. available log levels are: ${availableLogLevels.join(", ")}`);
	GLOBAL_CONFIG.configured = true;
}
function getGlobalFormat() {
	return GLOBAL_CONFIG.format;
}
function getGlobalTimeFormatter() {
	return GLOBAL_CONFIG.timeFormatter;
}
function createLogg(context) {
	const logObj = {
		fields: {},
		context,
		logLevel: LogLevel$1.Debug,
		format: Format.JSON,
		shouldUseGlobalConfig: false,
		errorProcessor: (err) => err,
		timeFormatter: (inputDate) => inputDate.toISOString(),
		useGlobalConfig: () => {
			logObj.shouldUseGlobalConfig = true;
			logObj.format = getGlobalFormat();
			logObj.logLevel = getGlobalLogLevel();
			return logObj.child();
		},
		child: (fields) => {
			const logger = createLogg(logObj.context);
			if (fields != null) logger.fields = {
				...logObj.fields,
				...fields
			};
			else logger.fields = logObj.fields;
			if (logger.fields != null && "context" in logger.fields) logger.context = logger.fields.context;
			else logger.context = logObj.context;
			logger.logLevel = logObj.logLevel;
			logger.format = logObj.format;
			logger.shouldUseGlobalConfig = logObj.shouldUseGlobalConfig;
			return logger;
		},
		withContext: (context2) => {
			const logger = logObj.child();
			logger.context = context2;
			return logger;
		},
		withLogLevel: (logLevel) => {
			const logger = logObj.child();
			if (availableLogLevels.includes(logLevel)) {
				logger.logLevel = logLevel;
				logger.shouldUseGlobalConfig = false;
				logger.debug(`setting log level to ${logLevelToLogLevelStringMap[logLevel]} (${logLevel})`);
			} else throw new Error(`log level ${logLevel} is not available. available log levels are: ${availableLogLevels.join(", ")}`);
			return logger;
		},
		withLogLevelString: (logLevelString) => {
			const logger = logObj.child();
			if (availableLogLevelStrings.includes(logLevelString)) {
				logger.logLevel = logLevelStringToLogLevelMap[logLevelString];
				logger.shouldUseGlobalConfig = false;
				logger.debug(`setting log level to ${logLevelString} (${logLevelStringToLogLevelMap[logLevelString]})`);
			} else throw new Error(`log level ${logLevelString} is not available. available log levels are: ${availableLogLevelStrings.join(", ")}`);
			return logger;
		},
		withFormat: (format) => {
			const logger = logObj.child();
			if (availableFormats.includes(format)) {
				logger.format = format;
				logger.shouldUseGlobalConfig = false;
				logger.debug(`setting format to ${format}`);
			} else throw new Error(`format ${format} is not available. available formats are: ${availableFormats.join(", ")}`);
			return logger;
		},
		withFields: (fields) => {
			if (typeof fields === "undefined" || fields === null) return logObj.child({});
			return logObj.child(fields);
		},
		withField(key, value) {
			if (typeof key === "undefined" || key === null) throw new Error("key is required");
			return logObj.child({ [key]: value });
		},
		withError: (err) => {
			err = logObj.errorProcessor(err);
			if (!isErrorLike(err)) return logObj.withField("error", String(err));
			let logger = logObj;
			logger = logger.withField("error", err.message);
			if (err.stack != null) logger = logger.withField("stack", err.stack);
			if (err.cause != null) try {
				logger = logger.withField("cause", JSON.stringify(err.cause));
			} catch {
				logger = logger.withField("cause", String(err.cause));
			}
			return logger;
		},
		withCallStack(errorLike) {
			const stacks = parseErrorStacks(errorLike).slice(2).filter((item) => !item.invalid);
			if (stacks.length === 0) return logObj;
			return logObj.child({
				function: stacks[0].function,
				file: `${stacks[0].file}:${stacks[0].line}:${stacks[0].column}`,
				line: stacks[0].line,
				column: stacks[0].column
			});
		},
		debug: () => {},
		verbose: () => {},
		log: () => {},
		error: () => {},
		errorWithError: () => {},
		warn: () => {},
		withTimeFormat: (_) => {
			return logObj.child();
		},
		withTimeFormatter: (fn) => {
			const logger = logObj.child();
			logger.timeFormatter = fn;
			return logger;
		},
		withErrorProcessor: (fn) => {
			const logger = logObj.child();
			logger.errorProcessor = fn;
			return logger;
		}
	};
	const getEffectiveLogLevel = () => {
		return logObj.shouldUseGlobalConfig ? getGlobalLogLevel() : logObj.logLevel;
	};
	const getEffectiveFormat = () => {
		return logObj.shouldUseGlobalConfig ? getGlobalFormat() : logObj.format;
	};
	const getEffectiveTimeFormatter = () => {
		return logObj.shouldUseGlobalConfig ? getGlobalTimeFormatter() : logObj.timeFormatter ?? ((inputDate) => inputDate.toISOString());
	};
	const mergeOptionalParams = (optionalParams) => {
		if (optionalParams != null && optionalParams.length > 0) if (Object.keys(logObj.fields).length > 0) return [logObj.fields, ...optionalParams];
		else return optionalParams;
		return logObj.fields;
	};
	const outputToConsole = (raw, consoleMethod, mergedFields) => {
		const format = getEffectiveFormat();
		if (isBrowser() && format === Format.Pretty) {
			raw.fields = Object.fromEntries(Object.entries(raw.fields).filter(([key, value]) => {
				if (key === "isNestSystemModule" || key === "nestSystemModule" || key === "context") return [key, value];
			}));
			const fieldsToOutput = mergedFields ?? logObj.fields;
			if (Array.isArray(fieldsToOutput) && fieldsToOutput.length > 0) console[consoleMethod](toPrettyString(raw), ...fieldsToOutput);
			else if (Object.keys(fieldsToOutput).length > 0) console[consoleMethod](toPrettyString(raw), fieldsToOutput);
			else console[consoleMethod](toPrettyString(raw));
			return;
		}
		const output = format === Format.Pretty ? toPrettyString(raw) : JSON.stringify(raw);
		console[consoleMethod](output);
	};
	const logLevelCheckMap = {
		[LogLevelString.Debug]: shouldOutputDebugLevelLogWhenLogLevelIsOneOf,
		[LogLevelString.Verbose]: shouldOutputVerboseLevelLogWhenLogLevelIsOneOf,
		[LogLevelString.Log]: shouldOutputLogLevelLogWhenLogLevelIsOneOf,
		[LogLevelString.Warning]: shouldOutputWarningLevelLogWhenLogLevelIsOneOf
	};
	const consoleMethodMap = {
		[LogLevelString.Debug]: "debug",
		[LogLevelString.Verbose]: "log",
		[LogLevelString.Log]: "log",
		[LogLevelString.Warning]: "warn"
	};
	const logWithLevel = (levelString, message, optionalParams) => {
		const logLevel = getEffectiveLogLevel();
		const shouldOutput = logLevelCheckMap[levelString];
		if (!shouldOutput(logLevel)) return;
		const mergedFields = mergeOptionalParams(optionalParams);
		const raw = newLog(levelString, logObj.context, mergedFields, message, getEffectiveTimeFormatter());
		outputToConsole(raw, consoleMethodMap[levelString], mergedFields);
	};
	logObj.debug = (message, ...optionalParams) => {
		logWithLevel(LogLevelString.Debug, message, optionalParams);
	};
	logObj.verbose = (message, ...optionalParams) => {
		logWithLevel(LogLevelString.Verbose, message, optionalParams);
	};
	logObj.log = (message, ...optionalParams) => {
		logWithLevel(LogLevelString.Log, message, optionalParams);
	};
	logObj.warn = (message, ...optionalParams) => {
		logWithLevel(LogLevelString.Warning, message, optionalParams);
	};
	logObj.error = (message, stack, ...optionalParams) => {
		if (!shouldOutputErrorLevelLogWhenLogLevelIsOneOf(getEffectiveLogLevel())) return;
		const mergedFields = mergeOptionalParams(optionalParams);
		const raw = newErrorLog(LogLevelString.Error, logObj.context, mergedFields, message, stack, getEffectiveTimeFormatter());
		outputToConsole(raw, "error", mergedFields);
	};
	logObj.errorWithError = (message, err, ...optionalParams) => {
		return logObj.withError(err).error(message, void 0, ...optionalParams);
	};
	return logObj;
}
function createLogger(context) {
	const currentStack = import_error_stack_parser.default.parse(/* @__PURE__ */ new Error())[1];
	const basePath = currentStack.fileName?.replace("async", "").trim() ?? "";
	const fileName = posix.join(...basePath.split(posix.sep).slice(-2));
	context = context ?? `${fileName}:${currentStack.lineNumber}`;
	return createLogg(withHyperlink(basePath, context));
}
var useLogger = (context) => createLogger(context).useGlobalConfig();
//#endregion
//#region types/index.ts
/**
* Unified public types & interfaces
*/
var DrivingServiceMode = /* @__PURE__ */ function(DrivingServiceMode) {
	/** Driven by SDK directly */
	DrivingServiceMode["direct"] = "direct";
	/** Driven by host application */
	DrivingServiceMode["backend"] = "backend";
	/**
	* Use this **only** when driving the avatar through the companion RTC SDK,
	* `@spatius/avatarkit-rtc`. If you are not using that package, stay on
	* `direct` / `backend` — do not switch to this because it looks newer.
	*
	* **Telemetry dimension only — it gates no behaviour.** Every session reports
	* `dsm`; without a value of its own, RTC traffic would be indistinguishable
	* from plain `backend` traffic on the dashboards.
	*
	* It deliberately does not unlock any API. RTC drives the avatar frame by
	* frame through `AvatarView.renderFrame` / `renderFromProtobuf`, which put the
	* view into pure-rendering mode on their own — it never calls the host-driven
	* feeding path (`yieldAudioData` / `yieldFramesData`) that `backend` exists
	* for. So the `=== backend` checks guarding those methods are left untouched:
	* loosening them for `rtc` would widen the reachable API surface without
	* enabling anything RTC actually uses.
	*
	* Note the two concepts sit at different levels and are not interchangeable:
	* pure-rendering mode is a per-frame runtime state of the render loop, while
	* this is a session-wide value declared once at `initialize`.
	*/
	DrivingServiceMode["rtc"] = "rtc";
	return DrivingServiceMode;
}({});
/**
* Strategy for handling animation-frame starvation (animation frames can't keep up
* with the audio clock).
*
* - `audioIndependent` (default): audio keeps playing, animation catches up; starvation
*   is only reported as telemetry. This is the historical default behavior.
* - `strictSync`: pause audio and wait when frames run out, resume once new frames
*   arrive, notifying via `AvatarController.onPlaybackStall`.
*/
var FrameStarvationMode = /* @__PURE__ */ function(FrameStarvationMode) {
	FrameStarvationMode["audioIndependent"] = "audioIndependent";
	FrameStarvationMode["strictSync"] = "strictSync";
	return FrameStarvationMode;
}({});
var LogLevel = /* @__PURE__ */ function(LogLevel) {
	/** Disable all logs */
	LogLevel["off"] = "off";
	/** Error logs only */
	LogLevel["error"] = "error";
	/** Warning and error logs */
	LogLevel["warning"] = "warning";
	/** All logs (info, warning, error), default value */
	LogLevel["all"] = "all";
	return LogLevel;
}({});
/** Sample rates the SDK's playback pipeline supports. @internal */
var SUPPORTED_SAMPLE_RATES = [
	8e3,
	16e3,
	22050,
	24e3,
	32e3,
	44100,
	48e3
];
/** Default Opus bitrate (bits/sec) when the SDK encodes the upstream to Opus and none is given. @internal */
var DEFAULT_OPUS_BITRATE = 48e3;
/** Default audio format when an AvatarView is created without one. @internal */
var DEFAULT_AUDIO_FORMAT = {
	channelCount: 1,
	sampleRate: 16e3
};
var RenderQuality = /* @__PURE__ */ function(RenderQuality) {
	RenderQuality["standard"] = "standard";
	RenderQuality["high"] = "high";
	RenderQuality["ultra"] = "ultra";
	return RenderQuality;
}({});
/** @internal */
var RENDER_QUALITY_PARAMS = {
	["standard"]: {
		renderScale: .55,
		splatRadius: 2
	},
	["high"]: {
		renderScale: .7,
		splatRadius: 2.5
	},
	["ultra"]: {
		renderScale: 1,
		splatRadius: 3
	}
};
/**
* 兜底真实 region：region 解析失败 / 需要具体区域时使用。
* 注意这不是"不填时的默认值"——不填时默认走 auto（见 DEFAULT_REGION_REQUEST）。
* @internal
*/
var DEFAULT_REGION = "us-west";
/**
* 不填 region 时的默认请求值：auto，触发 bootstrap 自动区域调度。
* @internal
*/
var DEFAULT_REGION_REQUEST = "auto";
var LoadProgress = /* @__PURE__ */ function(LoadProgress) {
	LoadProgress["downloading"] = "downloading";
	LoadProgress["completed"] = "completed";
	LoadProgress["failed"] = "failed";
	return LoadProgress;
}({});
var ConnectionState = /* @__PURE__ */ function(ConnectionState) {
	ConnectionState["disconnected"] = "disconnected";
	ConnectionState["connecting"] = "connecting";
	ConnectionState["connected"] = "connected";
	ConnectionState["failed"] = "failed";
	return ConnectionState;
}({});
var AnimationType = /* @__PURE__ */ function(AnimationType) {
	AnimationType["idle"] = "idle";
	AnimationType["fallback"] = "fallback";
	return AnimationType;
}({});
var TransitionType = /* @__PURE__ */ function(TransitionType) {
	TransitionType["none"] = "none";
	TransitionType["linear"] = "linear";
	TransitionType["bezier"] = "bezier";
	return TransitionType;
}({});
var ConversationState = /* @__PURE__ */ function(ConversationState) {
	/** Idle state (breathing animation) */
	ConversationState["idle"] = "idle";
	/** Playing state */
	ConversationState["playing"] = "playing";
	/** Paused state */
	ConversationState["paused"] = "paused";
	return ConversationState;
}({});
/**
* @internal
*/
var AvatarState = /* @__PURE__ */ function(AvatarState) {
	AvatarState["idle"] = "idle";
	AvatarState["active"] = "active";
	AvatarState["playing"] = "playing";
	AvatarState["paused"] = "paused";
	return AvatarState;
}({});
var ErrorCode = /* @__PURE__ */ function(ErrorCode) {
	/** Session Token invalid (WebSocket close code 4010) */
	ErrorCode["sessionTokenInvalid"] = "sessionTokenInvalid";
	/** Session Token expired (WebSocket close code 4010) */
	ErrorCode["sessionTokenExpired"] = "sessionTokenExpired";
	/** Insufficient balance (WebSocket close code 4001) */
	ErrorCode["insufficientBalance"] = "insufficientBalance";
	/** Concurrent connection limit exceeded (WebSocket close code 4003) */
	ErrorCode["concurrentLimitExceeded"] = "concurrentLimitExceeded";
	/** AvatarID not recognized */
	ErrorCode["avatarIDUnrecognized"] = "avatarIDUnrecognized";
	/** Failed to fetch avatar metadata */
	ErrorCode["failedToFetchAvatarMetadata"] = "failedToFetchAvatarMetadata";
	/** Avatar metadata format invalid / failed to parse */
	ErrorCode["invalidAvatarMetadata"] = "invalidAvatarMetadata";
	/** Failed to download avatar assets */
	ErrorCode["failedToDownloadAvatarAssets"] = "failedToDownloadAvatarAssets";
	/** Avatar asset compatibility_flags not supported by this SDK version (upgrade SDK) */
	ErrorCode["unsupportedAvatarAsset"] = "unsupportedAvatarAsset";
	/**
	* Neither WebGL2 nor WebGPU is available, so the avatar cannot be drawn at all.
	* Typically hardware acceleration is disabled in the browser, the GPU driver is
	* blocklisted, or the page runs in a restricted iframe. Deterministic — no point
	* retrying; tell the user to enable graphics acceleration.
	*/
	ErrorCode["renderNotSupported"] = "renderNotSupported";
	/** Render system failed to initialize for a reason other than missing WebGL2/WebGPU */
	ErrorCode["renderInitFailed"] = "renderInitFailed";
	/** WebSocket connection error (handshake failure, network error) */
	ErrorCode["websocketError"] = "websocketError";
	/** WebSocket closed with unexpected close code */
	ErrorCode["websocketClosedUnexpected"] = "websocketClosedUnexpected";
	/** Session timeout (WebSocket close code 4002) */
	ErrorCode["sessionTimeout"] = "sessionTimeout";
	/** Connection already in progress */
	ErrorCode["connectionInProgress"] = "connectionInProgress";
	/** Network layer not available (SDK mode required) */
	ErrorCode["networkLayerNotAvailable"] = "networkLayerNotAvailable";
	/** Failed to start playback */
	ErrorCode["playbackStartFailed"] = "playbackStartFailed";
	/** Playback initialization failed */
	ErrorCode["playbackInitFailed"] = "playbackInitFailed";
	/** No audio data to play */
	ErrorCode["noAudio"] = "noAudio";
	/**
	* Audio handed to the SDK does not match `audioFormat.inputAudioFormat`.
	* Raised for Opus input that is neither Ogg Opus nor a bare Opus packet
	* (e.g. WebM or MP4, which the SDK does not demux), is stereo, or switches
	* shape mid-conversation. The error message names the specific problem.
	*/
	ErrorCode["invalidAudioInput"] = "invalidAudioInput";
	/** Audio context not initialized */
	ErrorCode["audioContextNotInitialized"] = "audioContextNotInitialized";
	/** Animation player not initialized */
	ErrorCode["animationPlayerNotInitialized"] = "animationPlayerNotInitialized";
	/** Server-side error */
	ErrorCode["serverError"] = "serverError";
	return ErrorCode;
}({});
var AvatarError = class extends Error {
	code;
	/**
	* @param options.cause 原始原因（如 fetch 抛出的 TypeError 文本）。只进遥测，
	*   不进对外 message——对外文案保持稳定，排障信息走上报。
	*/
	constructor(message, code, options) {
		super(message, options);
		this.code = code;
		this.name = "AvatarError";
	}
};
var logSink = class LogSink {
	static instance = null;
	db = null;
	dbName = "avatarkit_logs";
	storeName = "logs";
	version = 1;
	trimThreshold = 5e3;
	trimBufferSize = 1e3;
	constructor() {}
	static getInstance() {
		if (!LogSink.instance) LogSink.instance = new LogSink();
		return LogSink.instance;
	}
	/**
	* Initialize IndexedDB
	*/
	async initialize() {
		if (this.db) return;
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName, this.version);
			request.onerror = () => {
				reject(/* @__PURE__ */ new Error("Failed to open IndexedDB"));
			};
			request.onsuccess = () => {
				this.db = request.result;
				resolve();
			};
			request.onupgradeneeded = (event) => {
				const db = event.target.result;
				if (!db.objectStoreNames.contains(this.storeName)) db.createObjectStore(this.storeName, {
					keyPath: "id",
					autoIncrement: true
				}).createIndex("ts", "ts", { unique: false });
			};
		});
	}
	/**
	* Append log entry to IndexedDB
	*/
	async append(entry) {
		if (!this.db) try {
			await this.initialize();
		} catch {
			return;
		}
		if (!this.db) return;
		try {
			const store = this.db.transaction([this.storeName], "readwrite").objectStore(this.storeName);
			await new Promise((resolve, reject) => {
				const request = store.add(entry);
				request.onsuccess = () => resolve();
				request.onerror = () => reject(/* @__PURE__ */ new Error("Failed to add log"));
			});
			this.getCount().then((count) => {
				if (count > this.trimThreshold) this.trim().catch(() => {});
			}).catch(() => {});
		} catch (error) {}
	}
	/**
	* Get total log count
	*/
	async getCount() {
		if (!this.db) return 0;
		return new Promise((resolve, reject) => {
			const request = this.db.transaction([this.storeName], "readonly").objectStore(this.storeName).count();
			request.onsuccess = () => {
				resolve(request.result);
			};
			request.onerror = () => {
				reject(/* @__PURE__ */ new Error("Failed to count logs"));
			};
		});
	}
	/**
	* Trim logs to keep only recent entries
	*/
	async trim() {
		if (!this.db) return;
		try {
			const store = this.db.transaction([this.storeName], "readwrite").objectStore(this.storeName);
			const getAllRequest = store.getAll();
			const entries = await new Promise((resolve, reject) => {
				getAllRequest.onsuccess = () => {
					resolve(getAllRequest.result);
				};
				getAllRequest.onerror = () => {
					reject(/* @__PURE__ */ new Error("Failed to get logs"));
				};
			});
			const keepCount = this.trimThreshold - this.trimBufferSize;
			if (entries.length <= keepCount) return;
			entries.sort((a, b) => a.ts - b.ts);
			const toDelete = entries.slice(0, entries.length - keepCount);
			for (const entry of toDelete) if (entry.id !== void 0) await new Promise((resolve, reject) => {
				const deleteRequest = store.delete(entry.id);
				deleteRequest.onsuccess = () => resolve();
				deleteRequest.onerror = () => reject(/* @__PURE__ */ new Error("Failed to delete log"));
			});
		} catch (error) {}
	}
}.getInstance();
//#endregion
//#region node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/url-alphabet/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
//#endregion
//#region node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.browser.js
var random = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
var customRandom = (alphabet, defaultSize, getRandom) => {
	let mask = (2 << Math.log2(alphabet.length - 1)) - 1;
	let step = -~(1.6 * mask * defaultSize / alphabet.length);
	return (size = defaultSize) => {
		let id = "";
		while (true) {
			let bytes = getRandom(step);
			let j = step | 0;
			while (j--) {
				id += alphabet[bytes[j] & mask] || "";
				if (id.length >= size) return id;
			}
		}
	};
};
var customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size | 0, random);
var nanoid$2 = (size = 21) => {
	let id = "";
	let bytes = crypto.getRandomValues(new Uint8Array(size |= 0));
	while (size--) id += urlAlphabet[bytes[size] & 63];
	return id;
};
//#endregion
//#region utils/client-id.ts
/**
* Client ID management utility
* Used to generate and persist unique device identifier
* @internal
*/
var CLIENT_ID_STORAGE_KEY = "spavatar_client_id";
/**
* Get or create client_id
* - If exists in localStorage, return existing client_id
* - If not exists, generate new client_id and store to localStorage
* @returns client_id string
* @internal
*/
function getOrCreateClientId() {
	try {
		const stored = localStorage.getItem(CLIENT_ID_STORAGE_KEY);
		if (stored) return stored;
		const clientId = nanoid$2(21);
		localStorage.setItem(CLIENT_ID_STORAGE_KEY, clientId);
		return clientId;
	} catch (error) {
		return `temp_${nanoid$2(21)}_${Date.now()}`;
	}
}
//#endregion
//#region utils/conversationId.ts
/**
* Conversation ID generation utility
* 
* Unified format: timestamp (UTC time, second-level, format: YYYYMMDDHHmmss) + underscore + 12-digit NanoID
* Example: 20251027143034_aB3dEf9hIjKl
* 
* Time part uses UTC time for easier cross-platform log troubleshooting with unified timezone conversion
* @internal
*/
/**
* Custom character set: only uppercase, lowercase letters and numbers (URL safe, no hyphens)
* Character set: A-Z, a-z, 0-9 (62 characters)
*/
var nanoid$1 = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 12);
/**
* Generate unified conversation ID
* 
* Format: timestamp (UTC time, second-level, format: YYYYMMDDHHmmss) + underscore + 12-digit NanoID
* Time part uses UTC time for easier cross-platform log troubleshooting with unified timezone conversion
* 
* @returns Conversation ID in format YYYYMMDDHHmmss_nanoid
* @example
* generateConversationId() // "20251027143034_aB3dEf9hIjKl"
* @internal
*/
var generateTraceId = () => generateConversationId();
function generateConversationId() {
	const now = /* @__PURE__ */ new Date();
	return `${`${now.getUTCFullYear()}${String(now.getUTCMonth() + 1).padStart(2, "0")}${String(now.getUTCDate()).padStart(2, "0")}${String(now.getUTCHours()).padStart(2, "0")}${String(now.getUTCMinutes()).padStart(2, "0")}${String(now.getUTCSeconds()).padStart(2, "0")}`}_${nanoid$1()}`;
}
//#endregion
//#region utils/id-manager.ts
/**
* ID Manager
* Unified management of all types of IDs in SDK
* @internal
*/
/** 与 conversation_id 同字符集：URL 安全、无连字符。 */
var nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 12);
var IdManager = class {
	ids = {
		clientId: "",
		sessionId: "",
		userId: null,
		appId: null,
		sessionToken: null,
		connectionId: null,
		conversationId: null
	};
	constructor() {
		this.ids.clientId = getOrCreateClientId();
	}
	getClientId() {
		return this.ids.clientId;
	}
	setUserId(userId) {
		this.ids.userId = userId;
	}
	getUserId() {
		return this.ids.userId;
	}
	setAppId(appId) {
		this.ids.appId = appId;
	}
	getAppId() {
		return this.ids.appId;
	}
	setSessionToken(token) {
		this.ids.sessionToken = token;
	}
	getSessionToken() {
		return this.ids.sessionToken;
	}
	/**
	* Generate new connectionId (for WebSocket connection)
	* @internal
	*/
	generateConnectionId() {
		this.ids.connectionId = generateConversationId();
		return this.ids.connectionId;
	}
	/**
	* Set connectionId (for connectionId received from server)
	* @internal
	*/
	setConnectionId(connectionId) {
		this.ids.connectionId = connectionId;
	}
	getConnectionId() {
		return this.ids.connectionId;
	}
	clearConnectionId() {
		this.ids.connectionId = null;
	}
	/**
	* Generate new conversationId (for each conversation)
	* @internal
	*/
	generateNewConversationId() {
		this.ids.conversationId = generateConversationId();
		return this.ids.conversationId;
	}
	getConversationId() {
		return this.ids.conversationId;
	}
	setConversationId(conversationId) {
		this.ids.conversationId = conversationId;
	}
	clearConversationId() {
		this.ids.conversationId = null;
	}
	/**
	* Get all IDs (for log reporting)
	* @internal
	*/
	getAllIds() {
		return { ...this.ids };
	}
	/**
	* Get public log parameters (contains all necessary IDs)
	* @internal
	*/
	getLogContext() {
		return {
			client_id: this.ids.clientId,
			session_id: this.ids.sessionId,
			user_id: this.ids.userId || "",
			app_id: this.ids.appId || ""
		};
	}
	/** 本次启动的 session id；首次调用时生成。 @internal */
	getSessionId() {
		if (!this.ids.sessionId) this.ids.sessionId = nanoid();
		return this.ids.sessionId;
	}
	/**
	* Clear all IDs (for testing or reset)
	* @internal
	*/
	clear() {
		this.ids.userId = null;
		this.ids.appId = null;
		this.ids.sessionToken = null;
		this.ids.connectionId = null;
		this.ids.conversationId = null;
	}
};
var idManager = new IdManager();
//#endregion
//#region utils/log-sanitizer.ts
var ALGORITHM_REG = new RegExp(`\\b(${[
	"flame",
	"keyframe",
	"keyframes",
	"splat",
	"splats",
	"covariance",
	"gaussian",
	"cov6",
	"packeddata",
	"sortorder",
	"sortindex",
	"avatar_core",
	"emscripten",
	"wasm",
	"blendshape",
	"expressionparam",
	"rig"
].join("|")})\\b`, "gi");
/** Chinese characters (CJK Unified Ideographs) */
var CHINESE_REG = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/;
/** Patterns to redact: capture group 1 = key, 2 = value; replace value with *** */
var SENSITIVE_PATTERNS = [
	{
		reg: /\b(token|sessiontoken|accesstoken|apikey|apisecret|secret|password|auth)=([^\s,}\]'"]+)/gi,
		replacement: "$1=***"
	},
	{
		reg: /\b(conversationid|connectionid|clientid|sessionid)=([^\s,}\]'"]+)/gi,
		replacement: "$1=***"
	},
	{
		reg: /\b(appid|app_id)=([^\s,}\]'"]+)/gi,
		replacement: "$1=***"
	},
	{
		reg: /\b(userid|user_id)=([^\s,}\]'"]+)/gi,
		replacement: "$1=***"
	},
	{
		reg: /(https?:\/\/)[^\s,}\]'"]+/gi,
		replacement: "$1***"
	},
	{
		reg: /(wss?:\/\/)[^\s,}\]'"]+/gi,
		replacement: "$1***"
	}
];
/**
* Check if message contains Chinese.
*/
function hasChinese(msg) {
	return CHINESE_REG.test(msg);
}
/**
* Check if message contains algorithm/internal terms.
*/
function hasAlgorithmTerms(msg) {
	return ALGORITHM_REG.test(msg);
}
/**
* Redact sensitive substrings in message.
*/
function redactSensitive(msg) {
	let out = msg;
	for (const { reg, replacement } of SENSITIVE_PATTERNS) out = out.replace(reg, replacement);
	return out;
}
/**
* Sanitize a log message for local persistence.
* - Do not persist if message contains Chinese or algorithm terms.
* - Otherwise persist, but redact sensitive content first.
*/
function sanitizeForLocalLog(message) {
	if (hasChinese(message) || hasAlgorithmTerms(message)) return {
		shouldPersist: false,
		sanitized: message
	};
	return {
		shouldPersist: true,
		sanitized: redactSensitive(message)
	};
}
//#endregion
//#region utils/logger.ts
/**
* Logger Utility
* Environment-aware logger wrapper with local log persistence
* - Always writes to local log file (IndexedDB) regardless of logLevel
* - Console output is controlled by logLevel
*
* Usage: Replace `console.log()` with `logger.log()`
*/
setGlobalLogLevel(LogLevel$1.Warning);
var baseLogger = useLogger("Web").useGlobalConfig();
logSink.initialize().catch(() => {});
var currentLogLevel = LogLevel.off;
/**
* Write log to local storage.
* Skips persistence if message contains Chinese, algorithm terms (e.g. Flame, splat), or sensitive content.
* Otherwise redacts sensitive substrings then persists.
*/
async function writeToLocalLog(message, level, extra = {}) {
	try {
		const { shouldPersist, sanitized } = sanitizeForLocalLog(message);
		if (!shouldPersist) return;
		const version = requireSDK().version;
		const appId = idManager.getAppId();
		const userId = idManager.getUserId();
		await logSink.append({
			level,
			ts: Date.now(),
			msg: sanitized,
			extra: {
				...extra,
				_category: "Web",
				sdk_version: version || "",
				app_id: appId || "",
				user_id: userId || "",
				platform: "Web",
				framework: "",
				framework_version: ""
			}
		});
	} catch {}
}
/**
* Format console message with [AvatarKit] prefix
*/
function formatConsoleMessage(message) {
	return `[AvatarKit] ${message}`;
}
var logger = {
	debug: (message, ...args) => {
		writeToLocalLog(message, "info", {}).catch(() => {});
		if (currentLogLevel === LogLevel.all) baseLogger.debug(formatConsoleMessage(message), ...args);
	},
	verbose: (message, ...args) => {
		writeToLocalLog(message, "info", {}).catch(() => {});
		if (currentLogLevel === LogLevel.all) baseLogger.verbose(formatConsoleMessage(message), ...args);
	},
	log: (message, ...args) => {
		writeToLocalLog(message, "info", {}).catch(() => {});
		if (currentLogLevel === LogLevel.all) baseLogger.log(formatConsoleMessage(message), ...args);
	},
	warn: (message, ...args) => {
		writeToLocalLog(message, "warn", {}).catch(() => {});
		if (currentLogLevel === LogLevel.warning || currentLogLevel === LogLevel.all) baseLogger.warn(formatConsoleMessage(message), ...args);
	},
	error: (message, ...args) => {
		const fullMessage = message + (args.length > 0 ? " " + args.map((a) => a instanceof Error ? a.message : typeof a === "string" ? a : JSON.stringify(a)).join(" ") : "");
		writeToLocalLog(fullMessage, "error", {}).catch(() => {});
		if (currentLogLevel !== LogLevel.off) baseLogger.error(formatConsoleMessage(fullMessage));
	}
};
/**
* Set SDK log level
* Note: Local log writing is always enabled regardless of logLevel
* @param level SDK's LogLevel enum value
* @internal
*/
function setLogLevel(level) {
	currentLogLevel = level;
	switch (level) {
		case LogLevel.off:
			setGlobalLogLevel(LogLevel$1.Error);
			break;
		case LogLevel.error:
			setGlobalLogLevel(LogLevel$1.Error);
			break;
		case LogLevel.warning:
			setGlobalLogLevel(LogLevel$1.Warning);
			break;
		case LogLevel.all:
			setGlobalLogLevel(LogLevel$1.Debug);
			break;
		default:
			setGlobalLogLevel(LogLevel$1.Warning);
			break;
	}
}
//#endregion
//#region utils/telemetry-rate-limit.ts
/**
* 事件限频（三端同一规则，见 knowledge/error-telemetry-gap-audit.md「限频策略」）。
*
* 只给**循环路径**上的错误事件用（每帧 / 每包 / 每 tick）：一台机器卡在某个坏状态时，
* 同一条错误一秒能刷几十次，既刷爆上报量也淹没别的事件。
*
* - key = 事件名 + `stage` / `op` / `path` / `direction` / `backend` 之一（低基数判别字段），
*   **不含** reason 自由文本——否则每条 reason 都是新 key，限频等于没有
* - 同一 key 每 session（页面生命周期）首次必发
* - 之后 60s 内只发一次；被压掉的次数累计进下一条的 `suppressed_count`
*/
var WINDOW_MS = 6e4;
var slots = /* @__PURE__ */ new Map();
var DISCRIMINATORS = [
	"stage",
	"op",
	"path",
	"direction",
	"backend",
	"code"
];
/** @internal */
function rateLimitKey(event, contents) {
	for (const k of DISCRIMINATORS) {
		const v = contents[k];
		if (v !== void 0 && v !== null && v !== "") return `${event}|${k}=${String(v)}`;
	}
	return event;
}
/**
* 判定这次能不能发。返回 `null` = 压掉；返回数字 = 放行，数字是自上次放行以来被压掉的次数。
* @internal
*/
function admitRateLimited(key, now = Date.now()) {
	const slot = slots.get(key);
	if (!slot) {
		slots.set(key, {
			lastSent: now,
			suppressed: 0
		});
		return 0;
	}
	if (now - slot.lastSent < WINDOW_MS) {
		slot.suppressed++;
		return null;
	}
	const suppressed = slot.suppressed;
	slot.lastSent = now;
	slot.suppressed = 0;
	return suppressed;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api-logs@0.218.0/node_modules/@opentelemetry/api-logs/build/esm/types/LogRecord.js
var SeverityNumber;
(function(SeverityNumber) {
	SeverityNumber[SeverityNumber["UNSPECIFIED"] = 0] = "UNSPECIFIED";
	SeverityNumber[SeverityNumber["TRACE"] = 1] = "TRACE";
	SeverityNumber[SeverityNumber["TRACE2"] = 2] = "TRACE2";
	SeverityNumber[SeverityNumber["TRACE3"] = 3] = "TRACE3";
	SeverityNumber[SeverityNumber["TRACE4"] = 4] = "TRACE4";
	SeverityNumber[SeverityNumber["DEBUG"] = 5] = "DEBUG";
	SeverityNumber[SeverityNumber["DEBUG2"] = 6] = "DEBUG2";
	SeverityNumber[SeverityNumber["DEBUG3"] = 7] = "DEBUG3";
	SeverityNumber[SeverityNumber["DEBUG4"] = 8] = "DEBUG4";
	SeverityNumber[SeverityNumber["INFO"] = 9] = "INFO";
	SeverityNumber[SeverityNumber["INFO2"] = 10] = "INFO2";
	SeverityNumber[SeverityNumber["INFO3"] = 11] = "INFO3";
	SeverityNumber[SeverityNumber["INFO4"] = 12] = "INFO4";
	SeverityNumber[SeverityNumber["WARN"] = 13] = "WARN";
	SeverityNumber[SeverityNumber["WARN2"] = 14] = "WARN2";
	SeverityNumber[SeverityNumber["WARN3"] = 15] = "WARN3";
	SeverityNumber[SeverityNumber["WARN4"] = 16] = "WARN4";
	SeverityNumber[SeverityNumber["ERROR"] = 17] = "ERROR";
	SeverityNumber[SeverityNumber["ERROR2"] = 18] = "ERROR2";
	SeverityNumber[SeverityNumber["ERROR3"] = 19] = "ERROR3";
	SeverityNumber[SeverityNumber["ERROR4"] = 20] = "ERROR4";
	SeverityNumber[SeverityNumber["FATAL"] = 21] = "FATAL";
	SeverityNumber[SeverityNumber["FATAL2"] = 22] = "FATAL2";
	SeverityNumber[SeverityNumber["FATAL3"] = 23] = "FATAL3";
	SeverityNumber[SeverityNumber["FATAL4"] = 24] = "FATAL4";
})(SeverityNumber || (SeverityNumber = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api-logs@0.218.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js
var NoopLogger = class {
	emit(_logRecord) {}
	enabled() {
		return false;
	}
};
var NOOP_LOGGER = new NoopLogger();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api-logs@0.218.0/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js
var GLOBAL_LOGS_API_KEY = Symbol.for("io.opentelemetry.js.api.logs");
var _global$1 = globalThis;
/**
* Make a function which accepts a version integer and returns the instance of an API if the version
* is compatible, or a fallback version (usually NOOP) if it is not.
*
* @param requiredVersion Backwards compatibility version which is required to return the instance
* @param instance Instance which should be returned if the required version is compatible
* @param fallback Fallback instance, usually NOOP, which will be returned if the required version is not compatible
*/
function makeGetter(requiredVersion, instance, fallback) {
	return (version) => version === requiredVersion ? instance : fallback;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api-logs@0.218.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js
var NoopLoggerProvider = class {
	getLogger(_name, _version, _options) {
		return new NoopLogger();
	}
};
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api-logs@0.218.0/node_modules/@opentelemetry/api-logs/build/esm/ProxyLogger.js
var ProxyLogger = class {
	constructor(provider, name, version, options) {
		this._provider = provider;
		this.name = name;
		this.version = version;
		this.options = options;
	}
	/**
	* Emit a log record. This method should only be used by log appenders.
	*
	* @param logRecord
	*/
	emit(logRecord) {
		this._getLogger().emit(logRecord);
	}
	enabled(options) {
		return this._getLogger().enabled(options);
	}
	/**
	* Try to get a logger from the proxy logger provider.
	* If the proxy logger provider has no delegate, return a noop logger.
	*/
	_getLogger() {
		if (this._delegate) return this._delegate;
		const logger = this._provider._getDelegateLogger(this.name, this.version, this.options);
		if (!logger) return NOOP_LOGGER;
		this._delegate = logger;
		return this._delegate;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api-logs@0.218.0/node_modules/@opentelemetry/api-logs/build/esm/ProxyLoggerProvider.js
var ProxyLoggerProvider = class {
	getLogger(name, version, options) {
		var _a;
		return (_a = this._getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyLogger(this, name, version, options);
	}
	/**
	* Get the delegate logger provider.
	* Used by tests only.
	* @internal
	*/
	_getDelegate() {
		var _a;
		return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_LOGGER_PROVIDER;
	}
	/**
	* Set the delegate logger provider
	* @internal
	*/
	_setDelegate(delegate) {
		this._delegate = delegate;
	}
	/**
	* @internal
	*/
	_getDelegateLogger(name, version, options) {
		var _a;
		return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api-logs@0.218.0/node_modules/@opentelemetry/api-logs/build/esm/index.js
var logs = class LogsAPI {
	constructor() {
		this._proxyLoggerProvider = new ProxyLoggerProvider();
	}
	static getInstance() {
		if (!this._instance) this._instance = new LogsAPI();
		return this._instance;
	}
	setGlobalLoggerProvider(provider) {
		if (_global$1[GLOBAL_LOGS_API_KEY]) return this.getLoggerProvider();
		_global$1[GLOBAL_LOGS_API_KEY] = makeGetter(1, provider, NOOP_LOGGER_PROVIDER);
		this._proxyLoggerProvider._setDelegate(provider);
		return provider;
	}
	/**
	* Returns the global logger provider.
	*
	* @returns LoggerProvider
	*/
	getLoggerProvider() {
		var _a, _b;
		return (_b = (_a = _global$1[GLOBAL_LOGS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(_global$1, 1)) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
	}
	/**
	* Returns a logger from the global logger provider.
	*
	* @returns Logger
	*/
	getLogger(name, version, options) {
		return this.getLoggerProvider().getLogger(name, version, options);
	}
	/** Remove the global logger provider */
	disable() {
		delete _global$1[GLOBAL_LOGS_API_KEY];
		this._proxyLoggerProvider = new ProxyLoggerProvider();
	}
}.getInstance();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/version.js
var VERSION$4 = "1.9.1";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/internal/semver.js
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
* Create a function to test an API version to see if it is compatible with the provided ownVersion.
*
* The returned function has the following semantics:
* - Exact match is always compatible
* - Major versions must match exactly
*    - 1.x package cannot use global 2.x package
*    - 2.x package cannot use global 1.x package
* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
* - Patch and build tag differences are not considered at this time
*
* @param ownVersion version which should be checked against
*/
function _makeCompatibilityCheck(ownVersion) {
	const acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
	const rejectedVersions = /* @__PURE__ */ new Set();
	const myVersionMatch = ownVersion.match(re);
	if (!myVersionMatch) return () => false;
	const ownVersionParsed = {
		major: +myVersionMatch[1],
		minor: +myVersionMatch[2],
		patch: +myVersionMatch[3],
		prerelease: myVersionMatch[4]
	};
	if (ownVersionParsed.prerelease != null) return function isExactmatch(globalVersion) {
		return globalVersion === ownVersion;
	};
	function _reject(v) {
		rejectedVersions.add(v);
		return false;
	}
	function _accept(v) {
		acceptedVersions.add(v);
		return true;
	}
	return function isCompatible(globalVersion) {
		if (acceptedVersions.has(globalVersion)) return true;
		if (rejectedVersions.has(globalVersion)) return false;
		const globalVersionMatch = globalVersion.match(re);
		if (!globalVersionMatch) return _reject(globalVersion);
		const globalVersionParsed = {
			major: +globalVersionMatch[1],
			minor: +globalVersionMatch[2],
			patch: +globalVersionMatch[3],
			prerelease: globalVersionMatch[4]
		};
		if (globalVersionParsed.prerelease != null) return _reject(globalVersion);
		if (ownVersionParsed.major !== globalVersionParsed.major) return _reject(globalVersion);
		if (ownVersionParsed.major === 0) {
			if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) return _accept(globalVersion);
			return _reject(globalVersion);
		}
		if (ownVersionParsed.minor <= globalVersionParsed.minor) return _accept(globalVersion);
		return _reject(globalVersion);
	};
}
/**
* Test an API version to see if it is compatible with this API.
*
* - Exact match is always compatible
* - Major versions must match exactly
*    - 1.x package cannot use global 2.x package
*    - 2.x package cannot use global 1.x package
* - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
*    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
*    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
* - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
* - Patch and build tag differences are not considered at this time
*
* @param version version of the API requesting an instance of the global API
*/
var isCompatible = _makeCompatibilityCheck(VERSION$4);
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js
var major = VERSION$4.split(".")[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for(`opentelemetry.js.api.${major}`);
var _global = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
function registerGlobal(type, instance, diag, allowOverride = false) {
	var _a;
	const api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : { version: VERSION$4 };
	if (!allowOverride && api[type]) {
		const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${type}`);
		diag.error(err.stack || err.message);
		return false;
	}
	if (api.version !== "1.9.1") {
		const err = /* @__PURE__ */ new Error(`@opentelemetry/api: Registration of version v${api.version} for ${type} does not match previously registered API v${VERSION$4}`);
		diag.error(err.stack || err.message);
		return false;
	}
	api[type] = instance;
	diag.debug(`@opentelemetry/api: Registered a global for ${type} v${VERSION$4}.`);
	return true;
}
function getGlobal(type) {
	var _a, _b;
	const globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
	if (!globalVersion || !isCompatible(globalVersion)) return;
	return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
	diag.debug(`@opentelemetry/api: Unregistering a global for ${type} v${VERSION$4}.`);
	const api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
	if (api) delete api[type];
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js
/**
* Component Logger which is meant to be used as part of any component which
* will add automatically additional namespace in front of the log message.
* It will then forward all message to global diag logger
* @example
* const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
* cLogger.debug('test');
* // @opentelemetry/instrumentation-http test
*/
var DiagComponentLogger = class {
	constructor(props) {
		this._namespace = props.namespace || "DiagComponentLogger";
	}
	debug(...args) {
		return logProxy("debug", this._namespace, args);
	}
	error(...args) {
		return logProxy("error", this._namespace, args);
	}
	info(...args) {
		return logProxy("info", this._namespace, args);
	}
	warn(...args) {
		return logProxy("warn", this._namespace, args);
	}
	verbose(...args) {
		return logProxy("verbose", this._namespace, args);
	}
};
function logProxy(funcName, namespace, args) {
	const logger = getGlobal("diag");
	if (!logger) return;
	return logger[funcName](namespace, ...args);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag/types.js
/**
* Defines the available internal logging levels for the diagnostic logger, the numeric values
* of the levels are defined to match the original values from the initial LogLevel to avoid
* compatibility/migration issues for any implementation that assume the numeric ordering.
*/
var DiagLogLevel;
(function(DiagLogLevel) {
	/** Diagnostic Logging level setting to disable all logging (except and forced logs) */
	DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
	/** Identifies an error scenario */
	DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
	/** Identifies a warning scenario */
	DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
	/** General informational log message */
	DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
	/** General debug log message */
	DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
	/**
	* Detailed trace level logging should only be used for development, should only be set
	* in a development environment.
	*/
	DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
	/** Used to set the logging level to include all logging */
	DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js
function createLogLevelDiagLogger(maxLevel, logger) {
	if (maxLevel < DiagLogLevel.NONE) maxLevel = DiagLogLevel.NONE;
	else if (maxLevel > DiagLogLevel.ALL) maxLevel = DiagLogLevel.ALL;
	logger = logger || {};
	function _filterFunc(funcName, theLevel) {
		const theFunc = logger[funcName];
		if (typeof theFunc === "function" && maxLevel >= theLevel) return theFunc.bind(logger);
		return function() {};
	}
	return {
		error: _filterFunc("error", DiagLogLevel.ERROR),
		warn: _filterFunc("warn", DiagLogLevel.WARN),
		info: _filterFunc("info", DiagLogLevel.INFO),
		debug: _filterFunc("debug", DiagLogLevel.DEBUG),
		verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
	};
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/api/diag.js
var API_NAME$4 = "diag";
/**
* Singleton object which represents the entry point to the OpenTelemetry internal
* diagnostic API
*
* @since 1.0.0
*/
var DiagAPI = class DiagAPI {
	/** Get the singleton instance of the DiagAPI API */
	static instance() {
		if (!this._instance) this._instance = new DiagAPI();
		return this._instance;
	}
	/**
	* Private internal constructor
	* @private
	*/
	constructor() {
		function _logProxy(funcName) {
			return function(...args) {
				const logger = getGlobal("diag");
				if (!logger) return;
				return logger[funcName](...args);
			};
		}
		const self = this;
		const setLogger = (logger, optionsOrLogLevel = { logLevel: DiagLogLevel.INFO }) => {
			var _a, _b, _c;
			if (logger === self) {
				const err = /* @__PURE__ */ new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
				self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
				return false;
			}
			if (typeof optionsOrLogLevel === "number") optionsOrLogLevel = { logLevel: optionsOrLogLevel };
			const oldLogger = getGlobal("diag");
			const newLogger = createLogLevelDiagLogger((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : DiagLogLevel.INFO, logger);
			if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
				const stack = (_c = (/* @__PURE__ */ new Error()).stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
				oldLogger.warn(`Current logger will be overwritten from ${stack}`);
				newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
			}
			return registerGlobal("diag", newLogger, self, true);
		};
		self.setLogger = setLogger;
		self.disable = () => {
			unregisterGlobal(API_NAME$4, self);
		};
		self.createComponentLogger = (options) => {
			return new DiagComponentLogger(options);
		};
		self.verbose = _logProxy("verbose");
		self.debug = _logProxy("debug");
		self.info = _logProxy("info");
		self.warn = _logProxy("warn");
		self.error = _logProxy("error");
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js
var BaggageImpl = class BaggageImpl {
	constructor(entries) {
		this._entries = entries ? new Map(entries) : /* @__PURE__ */ new Map();
	}
	getEntry(key) {
		const entry = this._entries.get(key);
		if (!entry) return;
		return Object.assign({}, entry);
	}
	getAllEntries() {
		return Array.from(this._entries.entries());
	}
	setEntry(key, entry) {
		const newBaggage = new BaggageImpl(this._entries);
		newBaggage._entries.set(key, entry);
		return newBaggage;
	}
	removeEntry(key) {
		const newBaggage = new BaggageImpl(this._entries);
		newBaggage._entries.delete(key);
		return newBaggage;
	}
	removeEntries(...keys) {
		const newBaggage = new BaggageImpl(this._entries);
		for (const key of keys) newBaggage._entries.delete(key);
		return newBaggage;
	}
	clear() {
		return new BaggageImpl();
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js
/**
* Symbol used to make BaggageEntryMetadata an opaque type
*/
var baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/baggage/utils.js
var diag$1 = DiagAPI.instance();
/**
* Create a new Baggage with optional entries
*
* @param entries An array of baggage entries the new baggage should contain
*/
function createBaggage(entries = {}) {
	return new BaggageImpl(new Map(Object.entries(entries)));
}
/**
* Create a serializable BaggageEntryMetadata object from a string.
*
* @param str string metadata. Format is currently not defined by the spec and has no special meaning.
*
* @since 1.0.0
*/
function baggageEntryMetadataFromString(str) {
	if (typeof str !== "string") {
		diag$1.error(`Cannot create baggage metadata from unknown type: ${typeof str}`);
		str = "";
	}
	return {
		__TYPE__: baggageEntryMetadataSymbol,
		toString() {
			return str;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/context/context.js
/**
* Get a key to uniquely identify a context value
*
* @since 1.0.0
*/
function createContextKey(description) {
	return Symbol.for(description);
}
/**
* The root context is used as the default parent context when there is no active context
*
* @since 1.0.0
*/
var ROOT_CONTEXT = new class BaseContext {
	/**
	* Construct a new context which inherits values from an optional parent context.
	*
	* @param parentContext a context from which to inherit values
	*/
	constructor(parentContext) {
		const self = this;
		self._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
		self.getValue = (key) => self._currentContext.get(key);
		self.setValue = (key, value) => {
			const context = new BaseContext(self._currentContext);
			context._currentContext.set(key, value);
			return context;
		};
		self.deleteValue = (key) => {
			const context = new BaseContext(self._currentContext);
			context._currentContext.delete(key);
			return context;
		};
	}
}();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js
/**
* NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
* constant NoopMetrics for all of its methods.
*/
var NoopMeter = class {
	constructor() {}
	/**
	* @see {@link Meter.createGauge}
	*/
	createGauge(_name, _options) {
		return NOOP_GAUGE_METRIC;
	}
	/**
	* @see {@link Meter.createHistogram}
	*/
	createHistogram(_name, _options) {
		return NOOP_HISTOGRAM_METRIC;
	}
	/**
	* @see {@link Meter.createCounter}
	*/
	createCounter(_name, _options) {
		return NOOP_COUNTER_METRIC;
	}
	/**
	* @see {@link Meter.createUpDownCounter}
	*/
	createUpDownCounter(_name, _options) {
		return NOOP_UP_DOWN_COUNTER_METRIC;
	}
	/**
	* @see {@link Meter.createObservableGauge}
	*/
	createObservableGauge(_name, _options) {
		return NOOP_OBSERVABLE_GAUGE_METRIC;
	}
	/**
	* @see {@link Meter.createObservableCounter}
	*/
	createObservableCounter(_name, _options) {
		return NOOP_OBSERVABLE_COUNTER_METRIC;
	}
	/**
	* @see {@link Meter.createObservableUpDownCounter}
	*/
	createObservableUpDownCounter(_name, _options) {
		return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
	}
	/**
	* @see {@link Meter.addBatchObservableCallback}
	*/
	addBatchObservableCallback(_callback, _observables) {}
	/**
	* @see {@link Meter.removeBatchObservableCallback}
	*/
	removeBatchObservableCallback(_callback) {}
};
var NoopMetric = class {};
var NoopCounterMetric = class extends NoopMetric {
	add(_value, _attributes) {}
};
var NoopUpDownCounterMetric = class extends NoopMetric {
	add(_value, _attributes) {}
};
var NoopGaugeMetric = class extends NoopMetric {
	record(_value, _attributes) {}
};
var NoopHistogramMetric = class extends NoopMetric {
	record(_value, _attributes) {}
};
var NoopObservableMetric = class {
	addCallback(_callback) {}
	removeCallback(_callback) {}
};
var NoopObservableCounterMetric = class extends NoopObservableMetric {};
var NoopObservableGaugeMetric = class extends NoopObservableMetric {};
var NoopObservableUpDownCounterMetric = class extends NoopObservableMetric {};
var NOOP_METER = new NoopMeter();
var NOOP_COUNTER_METRIC = new NoopCounterMetric();
var NOOP_GAUGE_METRIC = new NoopGaugeMetric();
var NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
var NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
var NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
var NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
var NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
/**
* Create a no-op Meter
*
* @since 1.3.0
*/
function createNoopMeter() {
	return NOOP_METER;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/metrics/Metric.js
/**
* The Type of value. It describes how the data is reported.
*
* @since 1.3.0
*/
var ValueType;
(function(ValueType) {
	ValueType[ValueType["INT"] = 0] = "INT";
	ValueType[ValueType["DOUBLE"] = 1] = "DOUBLE";
})(ValueType || (ValueType = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js
/**
* @since 1.0.0
*/
var defaultTextMapGetter = {
	get(carrier, key) {
		if (carrier == null) return;
		return carrier[key];
	},
	keys(carrier) {
		if (carrier == null) return [];
		return Object.keys(carrier);
	}
};
/**
* @since 1.0.0
*/
var defaultTextMapSetter = { set(carrier, key, value) {
	if (carrier == null) return;
	carrier[key] = value;
} };
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js
var NoopContextManager = class {
	active() {
		return ROOT_CONTEXT;
	}
	with(_context, fn, thisArg, ...args) {
		return fn.call(thisArg, ...args);
	}
	bind(_context, target) {
		return target;
	}
	enable() {
		return this;
	}
	disable() {
		return this;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/api/context.js
var API_NAME$3 = "context";
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
/**
* Singleton object which represents the entry point to the OpenTelemetry Context API
*
* @since 1.0.0
*/
var ContextAPI = class ContextAPI {
	/** Empty private constructor prevents end users from constructing a new instance of the API */
	constructor() {}
	/** Get the singleton instance of the Context API */
	static getInstance() {
		if (!this._instance) this._instance = new ContextAPI();
		return this._instance;
	}
	/**
	* Set the current context manager.
	*
	* @returns true if the context manager was successfully registered, else false
	*/
	setGlobalContextManager(contextManager) {
		return registerGlobal(API_NAME$3, contextManager, DiagAPI.instance());
	}
	/**
	* Get the currently active context
	*/
	active() {
		return this._getContextManager().active();
	}
	/**
	* Execute a function with an active context
	*
	* @param context context to be active during function execution
	* @param fn function to execute in a context
	* @param thisArg optional receiver to be used for calling fn
	* @param args optional arguments forwarded to fn
	*/
	with(context, fn, thisArg, ...args) {
		return this._getContextManager().with(context, fn, thisArg, ...args);
	}
	/**
	* Bind a context to a target function or event emitter
	*
	* @param context context to bind to the event emitter or function. Defaults to the currently active context
	* @param target function or event emitter to bind
	*/
	bind(context, target) {
		return this._getContextManager().bind(context, target);
	}
	_getContextManager() {
		return getGlobal(API_NAME$3) || NOOP_CONTEXT_MANAGER;
	}
	/** Disable and remove the global context manager */
	disable() {
		this._getContextManager().disable();
		unregisterGlobal(API_NAME$3, DiagAPI.instance());
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js
/**
* @since 1.0.0
*/
var TraceFlags;
(function(TraceFlags) {
	/** Represents no flag set. */
	TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
	/** Bit to represent whether trace is sampled in trace flags. */
	TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
/**
* @since 1.0.0
*/
var INVALID_SPAN_CONTEXT = {
	traceId: "00000000000000000000000000000000",
	spanId: "0000000000000000",
	traceFlags: TraceFlags.NONE
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js
/**
* The NonRecordingSpan is the default {@link Span} that is used when no Span
* implementation is available. All operations are no-op including context
* propagation.
*/
var NonRecordingSpan = class {
	constructor(spanContext = INVALID_SPAN_CONTEXT) {
		this._spanContext = spanContext;
	}
	spanContext() {
		return this._spanContext;
	}
	setAttribute(_key, _value) {
		return this;
	}
	setAttributes(_attributes) {
		return this;
	}
	addEvent(_name, _attributes) {
		return this;
	}
	addLink(_link) {
		return this;
	}
	addLinks(_links) {
		return this;
	}
	setStatus(_status) {
		return this;
	}
	updateName(_name) {
		return this;
	}
	end(_endTime) {}
	isRecording() {
		return false;
	}
	recordException(_exception, _time) {}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js
/**
* span key
*/
var SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
/**
* Return the span if one exists
*
* @param context context to get span from
*/
function getSpan(context) {
	return context.getValue(SPAN_KEY) || void 0;
}
/**
* Gets the span from the current context, if one exists.
*/
function getActiveSpan() {
	return getSpan(ContextAPI.getInstance().active());
}
/**
* Set the span on a context
*
* @param context context to use as parent
* @param span span to set active
*/
function setSpan(context, span) {
	return context.setValue(SPAN_KEY, span);
}
/**
* Remove current span stored in the context
*
* @param context context to delete span from
*/
function deleteSpan(context) {
	return context.deleteValue(SPAN_KEY);
}
/**
* Wrap span context in a NoopSpan and set as span in a new
* context
*
* @param context context to set active span on
* @param spanContext span context to be wrapped
*/
function setSpanContext(context, spanContext) {
	return setSpan(context, new NonRecordingSpan(spanContext));
}
/**
* Get the span context of the span if it exists.
*
* @param context context to get values from
*/
function getSpanContext(context) {
	var _a;
	return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js
var isHex = new Uint8Array([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	1,
	1,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	1,
	1
]);
function isValidHex(id, length) {
	if (typeof id !== "string" || id.length !== length) return false;
	let r = 0;
	for (let i = 0; i < id.length; i += 4) r += (isHex[id.charCodeAt(i)] | 0) + (isHex[id.charCodeAt(i + 1)] | 0) + (isHex[id.charCodeAt(i + 2)] | 0) + (isHex[id.charCodeAt(i + 3)] | 0);
	return r === length;
}
/**
* @since 1.0.0
*/
function isValidTraceId(traceId) {
	return isValidHex(traceId, 32) && traceId !== "00000000000000000000000000000000";
}
/**
* @since 1.0.0
*/
function isValidSpanId(spanId) {
	return isValidHex(spanId, 16) && spanId !== "0000000000000000";
}
/**
* Returns true if this {@link SpanContext} is valid.
* @return true if this {@link SpanContext} is valid.
*
* @since 1.0.0
*/
function isSpanContextValid(spanContext) {
	return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
/**
* Wrap the given {@link SpanContext} in a new non-recording {@link Span}
*
* @param spanContext span context to be wrapped
* @returns a new non-recording {@link Span} with the provided context
*/
function wrapSpanContext(spanContext) {
	return new NonRecordingSpan(spanContext);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js
var contextApi = ContextAPI.getInstance();
/**
* No-op implementations of {@link Tracer}.
*/
var NoopTracer = class {
	startSpan(name, options, context = contextApi.active()) {
		if (Boolean(options === null || options === void 0 ? void 0 : options.root)) return new NonRecordingSpan();
		const parentFromContext = context && getSpanContext(context);
		if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) return new NonRecordingSpan(parentFromContext);
		else return new NonRecordingSpan();
	}
	startActiveSpan(name, arg2, arg3, arg4) {
		let opts;
		let ctx;
		let fn;
		if (arguments.length < 2) return;
		else if (arguments.length === 2) fn = arg2;
		else if (arguments.length === 3) {
			opts = arg2;
			fn = arg3;
		} else {
			opts = arg2;
			ctx = arg3;
			fn = arg4;
		}
		const parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
		const span = this.startSpan(name, opts, parentContext);
		const contextWithSpanSet = setSpan(parentContext, span);
		return contextApi.with(contextWithSpanSet, fn, void 0, span);
	}
};
function isSpanContext(spanContext) {
	return spanContext !== null && typeof spanContext === "object" && "spanId" in spanContext && typeof spanContext["spanId"] === "string" && "traceId" in spanContext && typeof spanContext["traceId"] === "string" && "traceFlags" in spanContext && typeof spanContext["traceFlags"] === "number";
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js
var NOOP_TRACER = new NoopTracer();
/**
* Proxy tracer provided by the proxy tracer provider
*
* @since 1.0.0
*/
var ProxyTracer = class {
	constructor(provider, name, version, options) {
		this._provider = provider;
		this.name = name;
		this.version = version;
		this.options = options;
	}
	startSpan(name, options, context) {
		return this._getTracer().startSpan(name, options, context);
	}
	startActiveSpan(_name, _options, _context, _fn) {
		const tracer = this._getTracer();
		return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
	}
	/**
	* Try to get a tracer from the proxy tracer provider.
	* If the proxy tracer provider has no delegate, return a noop tracer.
	*/
	_getTracer() {
		if (this._delegate) return this._delegate;
		const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
		if (!tracer) return NOOP_TRACER;
		this._delegate = tracer;
		return this._delegate;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js
/**
* An implementation of the {@link TracerProvider} which returns an impotent
* Tracer for all calls to `getTracer`.
*
* All operations are no-op.
*/
var NoopTracerProvider = class {
	getTracer(_name, _version, _options) {
		return new NoopTracer();
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js
var NOOP_TRACER_PROVIDER = new NoopTracerProvider();
/**
* Tracer provider which provides {@link ProxyTracer}s.
*
* Before a delegate is set, tracers provided are NoOp.
*   When a delegate is set, traces are provided from the delegate.
*   When a delegate is set after tracers have already been provided,
*   all tracers already provided will use the provided delegate implementation.
*
* @deprecated This will be removed in the next major version.
* @since 1.0.0
*/
var ProxyTracerProvider = class {
	/**
	* Get a {@link ProxyTracer}
	*/
	getTracer(name, version, options) {
		var _a;
		return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyTracer(this, name, version, options);
	}
	getDelegate() {
		var _a;
		return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
	}
	/**
	* Set the delegate tracer provider
	*/
	setDelegate(delegate) {
		this._delegate = delegate;
	}
	getDelegateTracer(name, version, options) {
		var _a;
		return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js
/**
* @deprecated use the one declared in @opentelemetry/sdk-trace-base instead.
* A sampling decision that determines how a {@link Span} will be recorded
* and collected.
*
* @since 1.0.0
*/
var SamplingDecision$1;
(function(SamplingDecision) {
	/**
	* `Span.isRecording() === false`, span will not be recorded and all events
	* and attributes will be dropped.
	*/
	SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
	/**
	* `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
	* MUST NOT be set.
	*/
	SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
	/**
	* `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
	* MUST be set.
	*/
	SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision$1 || (SamplingDecision$1 = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js
/**
* @since 1.0.0
*/
var SpanKind;
(function(SpanKind) {
	/** Default value. Indicates that the span is used internally. */
	SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
	/**
	* Indicates that the span covers server-side handling of an RPC or other
	* remote request.
	*/
	SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
	/**
	* Indicates that the span covers the client-side wrapper around an RPC or
	* other remote request.
	*/
	SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
	/**
	* Indicates that the span describes producer sending a message to a
	* broker. Unlike client and server, there is no direct critical path latency
	* relationship between producer and consumer spans.
	*/
	SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
	/**
	* Indicates that the span describes consumer receiving a message from a
	* broker. Unlike client and server, there is no direct critical path latency
	* relationship between producer and consumer spans.
	*/
	SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace/status.js
/**
* An enumeration of status codes.
*
* @since 1.0.0
*/
var SpanStatusCode;
(function(SpanStatusCode) {
	/**
	* The default status.
	*/
	SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
	/**
	* The operation has been validated by an Application developer or
	* Operator to have completed successfully.
	*/
	SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
	/**
	* The operation contains an error.
	*/
	SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/context-api.js
/**
* Entrypoint for context API
* @since 1.0.0
*/
var context = ContextAPI.getInstance();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/diag-api.js
/**
* Entrypoint for Diag API.
* Defines Diagnostic handler used for internal diagnostic logging operations.
* The default provides a Noop DiagLogger implementation which may be changed via the
* diag.setLogger(logger: DiagLogger) function.
*
* @since 1.0.0
*/
var diag = DiagAPI.instance();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/metrics/NoopMeterProvider.js
/**
* An implementation of the {@link MeterProvider} which returns an impotent Meter
* for all calls to `getMeter`
*/
var NoopMeterProvider = class {
	getMeter(_name, _version, _options) {
		return NOOP_METER;
	}
};
var NOOP_METER_PROVIDER = new NoopMeterProvider();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/api/metrics.js
var API_NAME$2 = "metrics";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/metrics-api.js
/**
* Entrypoint for metrics API
*
* @since 1.3.0
*/
var metrics = class MetricsAPI {
	/** Empty private constructor prevents end users from constructing a new instance of the API */
	constructor() {}
	/** Get the singleton instance of the Metrics API */
	static getInstance() {
		if (!this._instance) this._instance = new MetricsAPI();
		return this._instance;
	}
	/**
	* Set the current global meter provider.
	* Returns true if the meter provider was successfully registered, else false.
	*/
	setGlobalMeterProvider(provider) {
		return registerGlobal(API_NAME$2, provider, DiagAPI.instance());
	}
	/**
	* Returns the global meter provider.
	*/
	getMeterProvider() {
		return getGlobal(API_NAME$2) || NOOP_METER_PROVIDER;
	}
	/**
	* Returns a meter from the global meter provider.
	*/
	getMeter(name, version, options) {
		return this.getMeterProvider().getMeter(name, version, options);
	}
	/** Remove the global meter provider */
	disable() {
		unregisterGlobal(API_NAME$2, DiagAPI.instance());
	}
}.getInstance();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js
/**
* No-op implementations of {@link TextMapPropagator}.
*/
var NoopTextMapPropagator = class {
	/** Noop inject function does nothing */
	inject(_context, _carrier) {}
	/** Noop extract function does nothing and returns the input context */
	extract(context, _carrier) {
		return context;
	}
	fields() {
		return [];
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js
/**
* Baggage key
*/
var BAGGAGE_KEY = createContextKey("OpenTelemetry Baggage Key");
/**
* Retrieve the current baggage from the given context
*
* @param {Context} Context that manage all context values
* @returns {Baggage} Extracted baggage from the context
*/
function getBaggage(context) {
	return context.getValue(BAGGAGE_KEY) || void 0;
}
/**
* Retrieve the current baggage from the active/current context
*
* @returns {Baggage} Extracted baggage from the context
*/
function getActiveBaggage() {
	return getBaggage(ContextAPI.getInstance().active());
}
/**
* Store a baggage in the given context
*
* @param {Context} Context that manage all context values
* @param {Baggage} baggage that will be set in the actual context
*/
function setBaggage(context, baggage) {
	return context.setValue(BAGGAGE_KEY, baggage);
}
/**
* Delete the baggage stored in the given context
*
* @param {Context} Context that manage all context values
*/
function deleteBaggage(context) {
	return context.deleteValue(BAGGAGE_KEY);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/api/propagation.js
var API_NAME$1 = "propagation";
var NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/propagation-api.js
/**
* Entrypoint for propagation API
*
* @since 1.0.0
*/
var propagation = class PropagationAPI {
	/** Empty private constructor prevents end users from constructing a new instance of the API */
	constructor() {
		this.createBaggage = createBaggage;
		this.getBaggage = getBaggage;
		this.getActiveBaggage = getActiveBaggage;
		this.setBaggage = setBaggage;
		this.deleteBaggage = deleteBaggage;
	}
	/** Get the singleton instance of the Propagator API */
	static getInstance() {
		if (!this._instance) this._instance = new PropagationAPI();
		return this._instance;
	}
	/**
	* Set the current propagator.
	*
	* @returns true if the propagator was successfully registered, else false
	*/
	setGlobalPropagator(propagator) {
		return registerGlobal(API_NAME$1, propagator, DiagAPI.instance());
	}
	/**
	* Inject context into a carrier to be propagated inter-process
	*
	* @param context Context carrying tracing data to inject
	* @param carrier carrier to inject context into
	* @param setter Function used to set values on the carrier
	*/
	inject(context, carrier, setter = defaultTextMapSetter) {
		return this._getGlobalPropagator().inject(context, carrier, setter);
	}
	/**
	* Extract context from a carrier
	*
	* @param context Context which the newly created context will inherit from
	* @param carrier Carrier to extract context from
	* @param getter Function used to extract keys from a carrier
	*/
	extract(context, carrier, getter = defaultTextMapGetter) {
		return this._getGlobalPropagator().extract(context, carrier, getter);
	}
	/**
	* Return a list of all fields which may be used by the propagator.
	*/
	fields() {
		return this._getGlobalPropagator().fields();
	}
	/** Remove the global propagator */
	disable() {
		unregisterGlobal(API_NAME$1, DiagAPI.instance());
	}
	_getGlobalPropagator() {
		return getGlobal(API_NAME$1) || NOOP_TEXT_MAP_PROPAGATOR;
	}
}.getInstance();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/api/trace.js
var API_NAME = "trace";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+api@1.9.1/node_modules/@opentelemetry/api/build/esm/trace-api.js
/**
* Entrypoint for trace API
*
* @since 1.0.0
*/
var trace = class TraceAPI {
	/** Empty private constructor prevents end users from constructing a new instance of the API */
	constructor() {
		this._proxyTracerProvider = new ProxyTracerProvider();
		this.wrapSpanContext = wrapSpanContext;
		this.isSpanContextValid = isSpanContextValid;
		this.deleteSpan = deleteSpan;
		this.getSpan = getSpan;
		this.getActiveSpan = getActiveSpan;
		this.getSpanContext = getSpanContext;
		this.setSpan = setSpan;
		this.setSpanContext = setSpanContext;
	}
	/** Get the singleton instance of the Trace API */
	static getInstance() {
		if (!this._instance) this._instance = new TraceAPI();
		return this._instance;
	}
	/**
	* Set the current global tracer.
	*
	* @returns true if the tracer provider was successfully registered, else false
	*/
	setGlobalTracerProvider(provider) {
		const success = registerGlobal(API_NAME, this._proxyTracerProvider, DiagAPI.instance());
		if (success) this._proxyTracerProvider.setDelegate(provider);
		return success;
	}
	/**
	* Returns the global tracer provider.
	*/
	getTracerProvider() {
		return getGlobal(API_NAME) || this._proxyTracerProvider;
	}
	/**
	* Returns a tracer from the global tracer provider.
	*/
	getTracer(name, version) {
		return this.getTracerProvider().getTracer(name, version);
	}
	/** Remove the global tracer provider */
	disable() {
		unregisterGlobal(API_NAME, DiagAPI.instance());
		this._proxyTracerProvider = new ProxyTracerProvider();
	}
}.getInstance();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/suppress-tracing.js
var SUPPRESS_TRACING_KEY = createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
function suppressTracing(context) {
	return context.setValue(SUPPRESS_TRACING_KEY, true);
}
function isTracingSuppressed(context) {
	return context.getValue(SUPPRESS_TRACING_KEY) === true;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/constants.js
var BAGGAGE_HEADER = "baggage";
var BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/utils.js
function serializeKeyPairs(keyPairs) {
	return keyPairs.reduce((hValue, current) => {
		const value = `${hValue}${hValue !== "" ? "," : ""}${current}`;
		return value.length > 8192 ? hValue : value;
	}, "");
}
function getKeyPairs(baggage) {
	return baggage.getAllEntries().map(([key, value]) => {
		let entry = `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`;
		if (value.metadata !== void 0) entry += ";" + value.metadata.toString();
		return entry;
	});
}
function parsePairKeyValue(entry) {
	if (!entry) return;
	const metadataSeparatorIndex = entry.indexOf(";");
	const keyPairPart = metadataSeparatorIndex === -1 ? entry : entry.substring(0, metadataSeparatorIndex);
	const separatorIndex = keyPairPart.indexOf("=");
	if (separatorIndex <= 0) return;
	const rawKey = keyPairPart.substring(0, separatorIndex).trim();
	const rawValue = keyPairPart.substring(separatorIndex + 1).trim();
	if (!rawKey || !rawValue) return;
	let key;
	let value;
	try {
		key = decodeURIComponent(rawKey);
		value = decodeURIComponent(rawValue);
	} catch {
		return;
	}
	let metadata;
	if (metadataSeparatorIndex !== -1 && metadataSeparatorIndex < entry.length - 1) metadata = baggageEntryMetadataFromString(entry.substring(metadataSeparatorIndex + 1));
	return {
		key,
		value,
		metadata
	};
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/baggage/propagation/W3CBaggagePropagator.js
/**
* Propagates {@link Baggage} through Context format propagation.
*
* Based on the Baggage specification:
* https://w3c.github.io/baggage/
*/
var W3CBaggagePropagator = class {
	inject(context, carrier, setter) {
		const baggage = propagation.getBaggage(context);
		if (!baggage || isTracingSuppressed(context)) return;
		const headerValue = serializeKeyPairs(getKeyPairs(baggage).filter((pair) => {
			return pair.length <= BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
		}).slice(0, 180));
		if (headerValue.length > 0) setter.set(carrier, BAGGAGE_HEADER, headerValue);
	}
	extract(context, carrier, getter) {
		const headerValue = getter.get(carrier, BAGGAGE_HEADER);
		const baggageString = Array.isArray(headerValue) ? headerValue.join(",") : headerValue;
		if (!baggageString) return context;
		const baggage = {};
		if (baggageString.length === 0) return context;
		baggageString.split(",").forEach((entry) => {
			const keyPair = parsePairKeyValue(entry);
			if (keyPair) {
				const baggageEntry = { value: keyPair.value };
				if (keyPair.metadata) baggageEntry.metadata = keyPair.metadata;
				baggage[keyPair.key] = baggageEntry;
			}
		});
		if (Object.entries(baggage).length === 0) return context;
		return propagation.setBaggage(context, propagation.createBaggage(baggage));
	}
	fields() {
		return [BAGGAGE_HEADER];
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/attributes.js
function sanitizeAttributes(attributes) {
	const out = {};
	if (typeof attributes !== "object" || attributes == null) return out;
	for (const key in attributes) {
		if (!Object.prototype.hasOwnProperty.call(attributes, key)) continue;
		if (!isAttributeKey(key)) {
			diag.warn(`Invalid attribute key: ${key}`);
			continue;
		}
		const val = attributes[key];
		if (!isAttributeValue(val)) {
			diag.warn(`Invalid attribute value set for key: ${key}`);
			continue;
		}
		if (Array.isArray(val)) out[key] = val.slice();
		else out[key] = val;
	}
	return out;
}
function isAttributeKey(key) {
	return typeof key === "string" && key !== "";
}
function isAttributeValue(val) {
	if (val == null) return true;
	if (Array.isArray(val)) return isHomogeneousAttributeValueArray(val);
	return isValidPrimitiveAttributeValueType(typeof val);
}
function isHomogeneousAttributeValueArray(arr) {
	let type;
	for (const element of arr) {
		if (element == null) continue;
		const elementType = typeof element;
		if (elementType === type) continue;
		if (!type) {
			if (isValidPrimitiveAttributeValueType(elementType)) {
				type = elementType;
				continue;
			}
			return false;
		}
		return false;
	}
	return true;
}
function isValidPrimitiveAttributeValueType(valType) {
	switch (valType) {
		case "number":
		case "boolean":
		case "string": return true;
	}
	return false;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/logging-error-handler.js
/**
* Returns a function that logs an error using the provided logger, or a
* console logger if one was not provided.
*/
function loggingErrorHandler() {
	return (ex) => {
		diag.error(stringifyException(ex));
	};
}
/**
* Converts an exception into a string representation
* @param {Exception} ex
*/
function stringifyException(ex) {
	if (typeof ex === "string") return ex;
	else return JSON.stringify(flattenException(ex));
}
/**
* Flattens an exception into key-value pairs by traversing the prototype chain
* and coercing values to strings. Duplicate properties will not be overwritten;
* the first insert wins.
*/
function flattenException(ex) {
	const result = {};
	let current = ex;
	while (current !== null) {
		Object.getOwnPropertyNames(current).forEach((propertyName) => {
			if (result[propertyName]) return;
			const value = current[propertyName];
			if (value) result[propertyName] = String(value);
		});
		current = Object.getPrototypeOf(current);
	}
	return result;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/global-error-handler.js
/** The global error handler delegate */
var delegateHandler = loggingErrorHandler();
/**
* Return the global error handler
* @param {Exception} ex
*/
function globalErrorHandler(ex) {
	try {
		delegateHandler(ex);
	} catch {}
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/version.js
var VERSION$3 = "2.7.1";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+semantic-conventions@1.41.1/node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js
/**
* The exception message.
*
* @example Division by zero
* @example Can't convert 'int' object to str implicitly
*
* @note > [!WARNING]
*
* > This attribute may contain sensitive information.
*/
var ATTR_EXCEPTION_MESSAGE = "exception.message";
/**
* A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
*
* @example "Exception in thread "main" java.lang.RuntimeException: Test exception\\n at com.example.GenerateTrace.methodB(GenerateTrace.java:13)\\n at com.example.GenerateTrace.methodA(GenerateTrace.java:9)\\n at com.example.GenerateTrace.main(GenerateTrace.java:5)\\n"
*/
var ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
/**
* The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
*
* @example java.net.ConnectException
* @example OSError
*
* @note If the recorded exception type is a wrapper that is not meaningful for
* failure classification, instrumentation **MAY** use the type of the inner
* exception instead. For example, in Go, errors created with `fmt.Errorf`
* using `%w` **MAY** be unwrapped when the wrapper type does not help
* classify the failure.
*/
var ATTR_EXCEPTION_TYPE = "exception.type";
/**
* Logical name of the service.
*
* @example shoppingcart
*
* @note **MUST** be the same for all instances of horizontally scaled services. If the value was not specified, SDKs **MUST** fallback to `unknown_service:` concatenated with the process executable name, e.g. `unknown_service:bash`. If the process executable name is not available, the value **MUST** be set to `unknown_service`.
* The process executable name is the name of the process executable, the same value as described by the [`process.executable.name`](process.md) resource attribute.
*/
var ATTR_SERVICE_NAME = "service.name";
/**
* The language of the telemetry SDK.
*/
var ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
/**
* Enum value "webjs" for attribute {@link ATTR_TELEMETRY_SDK_LANGUAGE}.
*/
var TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
/**
* The name of the telemetry SDK as defined above.
*
* @example opentelemetry
*
* @note The OpenTelemetry SDK **MUST** set the `telemetry.sdk.name` attribute to `opentelemetry`.
* If another SDK, like a fork or a vendor-provided implementation, is used, this SDK **MUST** set the
* `telemetry.sdk.name` attribute to the fully-qualified class or module name of this SDK's main entry point
* or another suitable identifier depending on the language.
* The identifier `opentelemetry` is reserved and **MUST NOT** be used in this case.
* All custom identifiers **SHOULD** be stable across different versions of an implementation.
*/
var ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
/**
* The version string of the telemetry SDK.
*
* @example 1.2.3
*/
var ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/semconv.js
/**
* The name of the runtime of this process.
*
* @example OpenJDK Runtime Environment
*
* @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
*/
var ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/browser/sdk-info.js
/** Constants describing the SDK in use */
var SDK_INFO = {
	[ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
	[ATTR_PROCESS_RUNTIME_NAME]: "browser",
	[ATTR_TELEMETRY_SDK_LANGUAGE]: TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS,
	[ATTR_TELEMETRY_SDK_VERSION]: VERSION$3
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/platform/browser/index.js
/**
* @deprecated Use performance directly.
*/
var otperformance = performance;
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/common/time.js
var NANOSECOND_DIGITS = 9;
var MILLISECONDS_TO_NANOSECONDS = Math.pow(10, 6);
var SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
/**
* Converts a number of milliseconds from epoch to HrTime([seconds, remainder in nanoseconds]).
* @param epochMillis
*/
function millisToHrTime(epochMillis) {
	const epochSeconds = epochMillis / 1e3;
	return [Math.trunc(epochSeconds), Math.round(epochMillis % 1e3 * MILLISECONDS_TO_NANOSECONDS)];
}
/**
* Returns an hrtime calculated via performance component.
* @param performanceNow
*/
function hrTime(performanceNow) {
	return addHrTimes(millisToHrTime(otperformance.timeOrigin), millisToHrTime(typeof performanceNow === "number" ? performanceNow : otperformance.now()));
}
/**
*
* Converts a TimeInput to an HrTime, defaults to _hrtime().
* @param time
*/
function timeInputToHrTime(time) {
	if (isTimeInputHrTime(time)) return time;
	else if (typeof time === "number") if (time < otperformance.timeOrigin) return hrTime(time);
	else return millisToHrTime(time);
	else if (time instanceof Date) return millisToHrTime(time.getTime());
	else throw TypeError("Invalid input type");
}
/**
* Returns a duration of two hrTime.
* @param startTime
* @param endTime
*/
function hrTimeDuration(startTime, endTime) {
	let seconds = endTime[0] - startTime[0];
	let nanos = endTime[1] - startTime[1];
	if (nanos < 0) {
		seconds -= 1;
		nanos += SECOND_TO_NANOSECONDS;
	}
	return [seconds, nanos];
}
/**
* Convert hrTime to nanoseconds.
* @param time
*/
function hrTimeToNanoseconds(time) {
	return time[0] * SECOND_TO_NANOSECONDS + time[1];
}
/**
* Convert hrTime to microseconds.
* @param time
*/
function hrTimeToMicroseconds(time) {
	return time[0] * 1e6 + time[1] / 1e3;
}
/**
* check if time is HrTime
* @param value
*/
function isTimeInputHrTime(value) {
	return Array.isArray(value) && value.length === 2 && typeof value[0] === "number" && typeof value[1] === "number";
}
/**
* check if input value is a correct types.TimeInput
* @param value
*/
function isTimeInput(value) {
	return isTimeInputHrTime(value) || typeof value === "number" || value instanceof Date;
}
/**
* Given 2 HrTime formatted times, return their sum as an HrTime.
*/
function addHrTimes(time1, time2) {
	const out = [time1[0] + time2[0], time1[1] + time2[1]];
	if (out[1] >= SECOND_TO_NANOSECONDS) {
		out[1] -= SECOND_TO_NANOSECONDS;
		out[0] += 1;
	}
	return out;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/ExportResult.js
var ExportResultCode;
(function(ExportResultCode) {
	ExportResultCode[ExportResultCode["SUCCESS"] = 0] = "SUCCESS";
	ExportResultCode[ExportResultCode["FAILED"] = 1] = "FAILED";
})(ExportResultCode || (ExportResultCode = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/propagation/composite.js
/** Combines multiple propagators into a single propagator. */
var CompositePropagator = class {
	_propagators;
	_fields;
	/**
	* Construct a composite propagator from a list of propagators.
	*
	* @param [config] Configuration object for composite propagator
	*/
	constructor(config = {}) {
		this._propagators = config.propagators ?? [];
		const fields = /* @__PURE__ */ new Set();
		for (const propagator of this._propagators) {
			const propagatorFields = typeof propagator.fields === "function" ? propagator.fields() : [];
			for (const field of propagatorFields) fields.add(field);
		}
		this._fields = Array.from(fields);
	}
	/**
	* Run each of the configured propagators with the given context and carrier.
	* Propagators are run in the order they are configured, so if multiple
	* propagators write the same carrier key, the propagator later in the list
	* will "win".
	*
	* @param context Context to inject
	* @param carrier Carrier into which context will be injected
	*/
	inject(context, carrier, setter) {
		for (const propagator of this._propagators) try {
			propagator.inject(context, carrier, setter);
		} catch (err) {
			diag.warn(`Failed to inject with ${propagator.constructor.name}. Err: ${err.message}`);
		}
	}
	/**
	* Run each of the configured propagators with the given context and carrier.
	* Propagators are run in the order they are configured, so if multiple
	* propagators write the same context key, the propagator later in the list
	* will "win".
	*
	* @param context Context to add values to
	* @param carrier Carrier from which to extract context
	*/
	extract(context, carrier, getter) {
		return this._propagators.reduce((ctx, propagator) => {
			try {
				return propagator.extract(ctx, carrier, getter);
			} catch (err) {
				diag.warn(`Failed to extract with ${propagator.constructor.name}. Err: ${err.message}`);
			}
			return ctx;
		}, context);
	}
	fields() {
		return this._fields.slice();
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/internal/validators.js
var VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
var VALID_KEY_REGEX = new RegExp(`^(?:${`[a-z]${VALID_KEY_CHAR_RANGE}{0,255}`}|${`[a-z0-9]${VALID_KEY_CHAR_RANGE}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE}{0,13}`})$`);
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
/**
* Key is opaque string up to 256 characters printable. It MUST begin with a
* lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
* underscores _, dashes -, asterisks *, and forward slashes /.
* For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
* vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
* see https://www.w3.org/TR/trace-context/#key
*/
function validateKey(key) {
	return VALID_KEY_REGEX.test(key);
}
/**
* Value is opaque string up to 256 characters printable ASCII RFC0020
* characters (i.e., the range 0x20 to 0x7E) except comma , and =.
*/
function validateValue(value) {
	return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/TraceState.js
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ",";
var LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
/**
* TraceState must be a class and not a simple object type because of the spec
* requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
*
* Here is the list of allowed mutations:
* - New key-value pair should be added into the beginning of the list
* - The value of any key can be updated. Modified keys MUST be moved to the
* beginning of the list.
*/
var TraceState = class TraceState {
	_length;
	_rawTraceState;
	_internalState;
	constructor(rawTraceState) {
		this._rawTraceState = typeof rawTraceState === "string" ? rawTraceState : "";
		this._length = this._rawTraceState.length;
	}
	set(key, value) {
		if (!validateKey(key) || !validateValue(value)) return this;
		const currState = this._getState();
		const currValue = currState.get(key);
		let newLength = this._length;
		if (typeof currValue === "string") newLength += value.length - currValue.length;
		else newLength += key.length + value.length + (currState.size > 0 ? 2 : 1);
		if (newLength > MAX_TRACE_STATE_LEN) return this;
		const newState = new Map(currState);
		newState.delete(key);
		newState.set(key, value);
		return this._fromState(newState, newLength);
	}
	unset(key) {
		const currState = this._getState();
		const currValue = currState.get(key);
		if (typeof currValue !== "string") return this;
		let newLength = this._length - (key.length + currValue.length + 1);
		if (currState.size > 1) newLength = newLength - 1;
		const newState = new Map(currState);
		newState.delete(key);
		return this._fromState(newState, newLength);
	}
	get(key) {
		return this._getState().get(key);
	}
	serialize() {
		let serialized = "";
		let index = 0;
		for (const entry of this._getState()) {
			if (index > 0) serialized = LIST_MEMBERS_SEPARATOR + serialized;
			serialized = `${entry[0]}${LIST_MEMBER_KEY_VALUE_SPLITTER}${entry[1]}` + serialized;
			index++;
		}
		return serialized;
	}
	_getState() {
		if (this._internalState) return this._internalState;
		const vendorMembers = this._rawTraceState.split(LIST_MEMBERS_SEPARATOR);
		const vendorEntries = /* @__PURE__ */ new Map();
		let currentLength = 0;
		for (const member of vendorMembers) {
			const m = member.trim();
			const idx = m.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
			if (idx === -1) continue;
			const key = m.slice(0, idx);
			const value = m.slice(idx + 1);
			if (!validateKey(key) || !validateValue(value)) continue;
			const futureLength = currentLength + m.length + (vendorEntries.size > 0 ? 1 : 0);
			if (futureLength > MAX_TRACE_STATE_LEN) continue;
			vendorEntries.set(key, value);
			currentLength = futureLength;
			if (vendorEntries.size >= MAX_TRACE_STATE_ITEMS) break;
		}
		this._length = currentLength;
		this._internalState = new Map(Array.from(vendorEntries.entries()).reverse());
		return this._internalState;
	}
	_fromState(state, length) {
		const traceState = Object.create(TraceState.prototype);
		traceState._internalState = state;
		traceState._length = length;
		return traceState;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/trace/W3CTraceContextPropagator.js
var TRACE_PARENT_HEADER = "traceparent";
var TRACE_STATE_HEADER = "tracestate";
var VERSION$2 = "00";
var TRACE_PARENT_REGEX = new RegExp(`^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$`);
/**
* Parses information from the [traceparent] span tag and converts it into {@link SpanContext}
* @param traceParent - A meta property that comes from server.
*     It should be dynamically generated server side to have the server's request trace Id,
*     a parent span Id that was set on the server's request span,
*     and the trace flags to indicate the server's sampling decision
*     (01 = sampled, 00 = not sampled).
*     for example: '{version}-{traceId}-{spanId}-{sampleDecision}'
*     For more information see {@link https://www.w3.org/TR/trace-context/}
*/
function parseTraceParent(traceParent) {
	const match = TRACE_PARENT_REGEX.exec(traceParent);
	if (!match) return null;
	if (match[1] === "00" && match[5]) return null;
	return {
		traceId: match[2],
		spanId: match[3],
		traceFlags: parseInt(match[4], 16)
	};
}
/**
* Propagates {@link SpanContext} through Trace Context format propagation.
*
* Based on the Trace Context specification:
* https://www.w3.org/TR/trace-context/
*/
var W3CTraceContextPropagator = class {
	inject(context, carrier, setter) {
		const spanContext = trace.getSpanContext(context);
		if (!spanContext || isTracingSuppressed(context) || !isSpanContextValid(spanContext)) return;
		const traceParent = `${VERSION$2}-${spanContext.traceId}-${spanContext.spanId}-0${Number(spanContext.traceFlags || TraceFlags.NONE).toString(16)}`;
		setter.set(carrier, TRACE_PARENT_HEADER, traceParent);
		if (spanContext.traceState) setter.set(carrier, TRACE_STATE_HEADER, spanContext.traceState.serialize());
	}
	extract(context, carrier, getter) {
		const traceParentHeader = getter.get(carrier, TRACE_PARENT_HEADER);
		if (!traceParentHeader) return context;
		const traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
		if (typeof traceParent !== "string") return context;
		const spanContext = parseTraceParent(traceParent);
		if (!spanContext) return context;
		spanContext.isRemote = true;
		const traceStateHeader = getter.get(carrier, TRACE_STATE_HEADER);
		if (traceStateHeader) {
			const state = Array.isArray(traceStateHeader) ? traceStateHeader.join(",") : traceStateHeader;
			spanContext.traceState = new TraceState(typeof state === "string" ? state : void 0);
		}
		return trace.setSpanContext(context, spanContext);
	}
	fields() {
		return [TRACE_PARENT_HEADER, TRACE_STATE_HEADER];
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/lodash.merge.js
/**
* based on lodash in order to support esm builds without esModuleInterop.
* lodash is using MIT License.
**/
var objectTag = "[object Object]";
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);
var getPrototypeOf = Object.getPrototypeOf;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
var nativeObjectToString = objectProto.toString;
/**
* Checks if `value` is a plain object, that is, an object created by the
* `Object` constructor or one with a `[[Prototype]]` of `null`.
*
* @static
* @memberOf _
* @since 0.8.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
* @example
*
* function Foo() {
*   this.a = 1;
* }
*
* _.isPlainObject(new Foo);
* // => false
*
* _.isPlainObject([1, 2, 3]);
* // => false
*
* _.isPlainObject({ 'x': 0, 'y': 0 });
* // => true
*
* _.isPlainObject(Object.create(null));
* // => true
*/
function isPlainObject(value) {
	if (!isObjectLike(value) || baseGetTag(value) !== objectTag) return false;
	const proto = getPrototypeOf(value);
	if (proto === null) return true;
	const Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}
/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the raw `toStringTag`.
*/
function getRawTag(value) {
	const isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
	let unmasked = false;
	try {
		value[symToStringTag] = void 0;
		unmasked = true;
	} catch {}
	const result = nativeObjectToString.call(value);
	if (unmasked) if (isOwn) value[symToStringTag] = tag;
	else delete value[symToStringTag];
	return result;
}
/**
* Converts `value` to a string using `Object.prototype.toString`.
*
* @private
* @param {*} value The value to convert.
* @returns {string} Returns the converted string.
*/
function objectToString(value) {
	return nativeObjectToString.call(value);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/merge.js
var MAX_LEVEL = 20;
/**
* Merges objects together
* @param args - objects / values to be merged
*/
function merge(...args) {
	let result = args.shift();
	const objects = /* @__PURE__ */ new WeakMap();
	while (args.length > 0) result = mergeTwoObjects(result, args.shift(), 0, objects);
	return result;
}
function takeValue(value) {
	if (isArray(value)) return value.slice();
	return value;
}
/**
* Merges two objects
* @param one - first object
* @param two - second object
* @param level - current deep level
* @param objects - objects holder that has been already referenced - to prevent
* cyclic dependency
*/
function mergeTwoObjects(one, two, level = 0, objects) {
	let result;
	if (level > MAX_LEVEL) return;
	level++;
	if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) result = takeValue(two);
	else if (isArray(one)) {
		result = one.slice();
		if (isArray(two)) for (let i = 0, j = two.length; i < j; i++) result.push(takeValue(two[i]));
		else if (isObject$2(two)) {
			const keys = Object.keys(two);
			for (let i = 0, j = keys.length; i < j; i++) {
				const key = keys[i];
				if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
				result[key] = takeValue(two[key]);
			}
		}
	} else if (isObject$2(one)) if (isObject$2(two)) {
		if (!shouldMerge(one, two)) return two;
		result = Object.assign({}, one);
		const keys = Object.keys(two);
		for (let i = 0, j = keys.length; i < j; i++) {
			const key = keys[i];
			if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
			const twoValue = two[key];
			if (isPrimitive(twoValue)) if (typeof twoValue === "undefined") delete result[key];
			else result[key] = twoValue;
			else {
				const obj1 = result[key];
				const obj2 = twoValue;
				if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) delete result[key];
				else {
					if (isObject$2(obj1) && isObject$2(obj2)) {
						const arr1 = objects.get(obj1) || [];
						const arr2 = objects.get(obj2) || [];
						arr1.push({
							obj: one,
							key
						});
						arr2.push({
							obj: two,
							key
						});
						objects.set(obj1, arr1);
						objects.set(obj2, arr2);
					}
					result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
				}
			}
		}
	} else result = two;
	return result;
}
/**
* Function to check if object has been already reference
* @param obj
* @param key
* @param objects
*/
function wasObjectReferenced(obj, key, objects) {
	const arr = objects.get(obj[key]) || [];
	for (let i = 0, j = arr.length; i < j; i++) {
		const info = arr[i];
		if (info.key === key && info.obj === obj) return true;
	}
	return false;
}
function isArray(value) {
	return Array.isArray(value);
}
function isFunction(value) {
	return typeof value === "function";
}
function isObject$2(value) {
	return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === "object";
}
function isPrimitive(value) {
	return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "undefined" || value instanceof Date || value instanceof RegExp || value === null;
}
function shouldMerge(one, two) {
	if (!isPlainObject(one) || !isPlainObject(two)) return false;
	return true;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/timeout.js
/**
* Error that is thrown on timeouts.
*/
var TimeoutError$1 = class TimeoutError$1 extends Error {
	constructor(message) {
		super(message);
		Object.setPrototypeOf(this, TimeoutError$1.prototype);
	}
};
/**
* Adds a timeout to a promise and rejects if the specified timeout has elapsed. Also rejects if the specified promise
* rejects, and resolves if the specified promise resolves.
*
* <p> NOTE: this operation will continue even after it throws a {@link TimeoutError}.
*
* @param promise promise to use with timeout.
* @param timeout the timeout in milliseconds until the returned promise is rejected.
*/
function callWithTimeout$1(promise, timeout) {
	let timeoutHandle;
	const timeoutPromise = new Promise(function timeoutFunction(_resolve, reject) {
		timeoutHandle = setTimeout(function timeoutHandler() {
			reject(new TimeoutError$1("Operation timed out."));
		}, timeout);
	});
	return Promise.race([promise, timeoutPromise]).then((result) => {
		clearTimeout(timeoutHandle);
		return result;
	}, (reason) => {
		clearTimeout(timeoutHandle);
		throw reason;
	});
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/promise.js
var Deferred = class {
	_promise;
	_resolve;
	_reject;
	constructor() {
		this._promise = new Promise((resolve, reject) => {
			this._resolve = resolve;
			this._reject = reject;
		});
	}
	get promise() {
		return this._promise;
	}
	resolve(val) {
		this._resolve(val);
	}
	reject(err) {
		this._reject(err);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/utils/callback.js
/**
* Bind the callback and only invoke the callback once regardless how many times `BindOnceFuture.call` is invoked.
*/
var BindOnceFuture = class {
	_isCalled = false;
	_deferred = new Deferred();
	_callback;
	_that;
	constructor(callback, that) {
		this._callback = callback;
		this._that = that;
	}
	get isCalled() {
		return this._isCalled;
	}
	get promise() {
		return this._deferred.promise;
	}
	call(...args) {
		if (!this._isCalled) {
			this._isCalled = true;
			try {
				Promise.resolve(this._callback.call(this._that, ...args)).then((val) => this._deferred.resolve(val), (err) => this._deferred.reject(err));
			} catch (err) {
				this._deferred.reject(err);
			}
		}
		return this._deferred.promise;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/internal/exporter.js
/**
* @internal
* Shared functionality used by Exporters while exporting data, including suppression of Traces.
*/
function _export(exporter, arg) {
	return new Promise((resolve) => {
		context.with(suppressTracing(context.active()), () => {
			exporter.export(arg, resolve);
		});
	});
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+core@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/core/build/esm/index.js
var internal = { _export };
//#endregion
//#region node_modules/.pnpm/@opentelemetry+resources@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/resources/build/esm/default-service-name.js
var serviceName;
/**
* Returns the default service name for OpenTelemetry resources.
* In Node.js environments, returns "unknown_service:<process.argv0>".
* In browser/edge environments, returns "unknown_service".
*/
function defaultServiceName() {
	if (serviceName === void 0) try {
		const argv0 = globalThis.process.argv0;
		serviceName = argv0 ? `unknown_service:${argv0}` : "unknown_service";
	} catch {
		serviceName = "unknown_service";
	}
	return serviceName;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+resources@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/resources/build/esm/utils.js
var isPromiseLike = (val) => {
	return val !== null && typeof val === "object" && typeof val.then === "function";
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+resources@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/resources/build/esm/ResourceImpl.js
var ResourceImpl = class ResourceImpl {
	_rawAttributes;
	_asyncAttributesPending = false;
	_schemaUrl;
	_memoizedAttributes;
	static FromAttributeList(attributes, options) {
		const res = new ResourceImpl({}, options);
		res._rawAttributes = guardedRawAttributes(attributes);
		res._asyncAttributesPending = attributes.filter(([_, val]) => isPromiseLike(val)).length > 0;
		return res;
	}
	constructor(resource, options) {
		const attributes = resource.attributes ?? {};
		this._rawAttributes = Object.entries(attributes).map(([k, v]) => {
			if (isPromiseLike(v)) this._asyncAttributesPending = true;
			return [k, v];
		});
		this._rawAttributes = guardedRawAttributes(this._rawAttributes);
		this._schemaUrl = validateSchemaUrl(options?.schemaUrl);
	}
	get asyncAttributesPending() {
		return this._asyncAttributesPending;
	}
	async waitForAsyncAttributes() {
		if (!this.asyncAttributesPending) return;
		for (let i = 0; i < this._rawAttributes.length; i++) {
			const [k, v] = this._rawAttributes[i];
			this._rawAttributes[i] = [k, isPromiseLike(v) ? await v : v];
		}
		this._asyncAttributesPending = false;
	}
	get attributes() {
		if (this.asyncAttributesPending) diag.error("Accessing resource attributes before async attributes settled");
		if (this._memoizedAttributes) return this._memoizedAttributes;
		const attrs = {};
		for (const [k, v] of this._rawAttributes) {
			if (isPromiseLike(v)) {
				diag.debug(`Unsettled resource attribute ${k} skipped`);
				continue;
			}
			if (v != null) attrs[k] ??= v;
		}
		if (!this._asyncAttributesPending) this._memoizedAttributes = attrs;
		return attrs;
	}
	getRawAttributes() {
		return this._rawAttributes;
	}
	get schemaUrl() {
		return this._schemaUrl;
	}
	merge(resource) {
		if (resource == null) return this;
		const mergedSchemaUrl = mergeSchemaUrl(this, resource);
		const mergedOptions = mergedSchemaUrl ? { schemaUrl: mergedSchemaUrl } : void 0;
		return ResourceImpl.FromAttributeList([...resource.getRawAttributes(), ...this.getRawAttributes()], mergedOptions);
	}
};
function resourceFromAttributes(attributes, options) {
	return ResourceImpl.FromAttributeList(Object.entries(attributes), options);
}
function defaultResource() {
	return resourceFromAttributes({
		[ATTR_SERVICE_NAME]: defaultServiceName(),
		[ATTR_TELEMETRY_SDK_LANGUAGE]: SDK_INFO[ATTR_TELEMETRY_SDK_LANGUAGE],
		[ATTR_TELEMETRY_SDK_NAME]: SDK_INFO[ATTR_TELEMETRY_SDK_NAME],
		[ATTR_TELEMETRY_SDK_VERSION]: SDK_INFO[ATTR_TELEMETRY_SDK_VERSION]
	});
}
function guardedRawAttributes(attributes) {
	return attributes.map(([k, v]) => {
		if (isPromiseLike(v)) return [k, v.catch((err) => {
			diag.debug("promise rejection for resource attribute: %s - %s", k, err);
		})];
		return [k, v];
	});
}
function validateSchemaUrl(schemaUrl) {
	if (typeof schemaUrl === "string" || schemaUrl === void 0) return schemaUrl;
	diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", schemaUrl);
}
function mergeSchemaUrl(old, updating) {
	const oldSchemaUrl = old?.schemaUrl;
	const updatingSchemaUrl = updating?.schemaUrl;
	const isOldEmpty = oldSchemaUrl === void 0 || oldSchemaUrl === "";
	const isUpdatingEmpty = updatingSchemaUrl === void 0 || updatingSchemaUrl === "";
	if (isOldEmpty) return updatingSchemaUrl;
	if (isUpdatingEmpty) return oldSchemaUrl;
	if (oldSchemaUrl === updatingSchemaUrl) return oldSchemaUrl;
	diag.warn("Schema URL merge conflict: old resource has \"%s\", updating resource has \"%s\". Resulting resource will have undefined Schema URL.", oldSchemaUrl, updatingSchemaUrl);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/utils/validation.js
/**
* Validates if a value is a valid AnyValue for Log Attributes according to OpenTelemetry spec.
* Log Attributes support a superset of standard Attributes and must support:
* - Scalar values: string, boolean, signed 64 bit integer, or double precision floating point
* - Byte arrays (Uint8Array)
* - Arrays of any values (heterogeneous arrays allowed)
* - Maps from string to any value (nested objects)
* - Empty values (null/undefined)
*
* @param val - The value to validate
* @returns true if the value is a valid AnyValue, false otherwise
*/
function isLogAttributeValue(val) {
	return isLogAttributeValueInternal(val, /* @__PURE__ */ new WeakSet());
}
function isLogAttributeValueInternal(val, visited) {
	if (val == null) return true;
	if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") return true;
	if (val instanceof Uint8Array) return true;
	if (typeof val === "object") {
		if (visited.has(val)) return false;
		visited.add(val);
		if (Array.isArray(val)) return val.every((item) => isLogAttributeValueInternal(item, visited));
		const obj = val;
		if (obj.constructor !== Object && obj.constructor !== void 0) return false;
		return Object.values(obj).every((item) => isLogAttributeValueInternal(item, visited));
	}
	return false;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/LogRecordImpl.js
var LogRecordImpl = class {
	hrTime;
	hrTimeObserved;
	spanContext;
	resource;
	instrumentationScope;
	attributes = {};
	_severityText;
	_severityNumber;
	_body;
	_eventName;
	_attributesCount = 0;
	_droppedAttributesCount = 0;
	_isReadonly = false;
	_logRecordLimits;
	set severityText(severityText) {
		if (this._isLogRecordReadonly()) return;
		this._severityText = severityText;
	}
	get severityText() {
		return this._severityText;
	}
	set severityNumber(severityNumber) {
		if (this._isLogRecordReadonly()) return;
		this._severityNumber = severityNumber;
	}
	get severityNumber() {
		return this._severityNumber;
	}
	set body(body) {
		if (this._isLogRecordReadonly()) return;
		this._body = body;
	}
	get body() {
		return this._body;
	}
	get eventName() {
		return this._eventName;
	}
	set eventName(eventName) {
		if (this._isLogRecordReadonly()) return;
		this._eventName = eventName;
	}
	get droppedAttributesCount() {
		return this._droppedAttributesCount;
	}
	constructor(_sharedState, instrumentationScope, logRecord) {
		const { timestamp, observedTimestamp, eventName, severityNumber, severityText, body, attributes = {}, exception, context } = logRecord;
		const now = Date.now();
		this.hrTime = timeInputToHrTime(timestamp ?? now);
		this.hrTimeObserved = timeInputToHrTime(observedTimestamp ?? now);
		if (context) {
			const spanContext = trace.getSpanContext(context);
			if (spanContext && isSpanContextValid(spanContext)) this.spanContext = spanContext;
		}
		this.severityNumber = severityNumber;
		this.severityText = severityText;
		this.body = body;
		this.resource = _sharedState.resource;
		this.instrumentationScope = instrumentationScope;
		this._logRecordLimits = _sharedState.logRecordLimits;
		this._eventName = eventName;
		this.setAttributes(attributes);
		if (exception != null) this._setException(exception);
	}
	setAttribute(key, value) {
		if (this._isLogRecordReadonly()) return this;
		if (key.length === 0) {
			diag.warn(`Invalid attribute key: ${key}`);
			return this;
		}
		if (!isLogAttributeValue(value)) {
			diag.warn(`Invalid attribute value set for key: ${key}`);
			return this;
		}
		const isNewKey = !Object.prototype.hasOwnProperty.call(this.attributes, key);
		if (isNewKey && this._attributesCount >= this._logRecordLimits.attributeCountLimit) {
			this._droppedAttributesCount++;
			if (this._droppedAttributesCount === 1) diag.warn("Dropping extra attributes.");
			return this;
		}
		this.attributes[key] = this._truncateToSize(value);
		if (isNewKey) this._attributesCount++;
		return this;
	}
	setAttributes(attributes) {
		for (const [k, v] of Object.entries(attributes)) this.setAttribute(k, v);
		return this;
	}
	setBody(body) {
		this.body = body;
		return this;
	}
	setEventName(eventName) {
		this.eventName = eventName;
		return this;
	}
	setSeverityNumber(severityNumber) {
		this.severityNumber = severityNumber;
		return this;
	}
	setSeverityText(severityText) {
		this.severityText = severityText;
		return this;
	}
	/**
	* @internal
	* A LogRecordProcessor may freely modify logRecord for the duration of the OnEmit call.
	* If logRecord is needed after OnEmit returns (i.e. for asynchronous processing) only reads are permitted.
	*/
	_makeReadonly() {
		this._isReadonly = true;
	}
	_truncateToSize(value) {
		const limit = this._logRecordLimits.attributeValueLengthLimit;
		if (limit <= 0) {
			diag.warn(`Attribute value limit must be positive, got ${limit}`);
			return value;
		}
		if (value == null) return value;
		if (typeof value === "string") return this._truncateToLimitUtil(value, limit);
		if (value instanceof Uint8Array) return value;
		if (Array.isArray(value)) return value.map((val) => this._truncateToSize(val));
		if (typeof value === "object") {
			const truncatedObj = {};
			for (const [k, v] of Object.entries(value)) truncatedObj[k] = this._truncateToSize(v);
			return truncatedObj;
		}
		return value;
	}
	_setException(exception) {
		let hasMinimumAttributes = false;
		if (typeof exception === "string" || typeof exception === "number") {
			if (!Object.hasOwn(this.attributes, "exception.message")) this.setAttribute(ATTR_EXCEPTION_MESSAGE, String(exception));
			hasMinimumAttributes = true;
		} else if (exception && typeof exception === "object") {
			const exceptionObj = exception;
			if (exceptionObj.code) {
				if (!Object.hasOwn(this.attributes, "exception.type")) this.setAttribute(ATTR_EXCEPTION_TYPE, exceptionObj.code.toString());
				hasMinimumAttributes = true;
			} else if (exceptionObj.name) {
				if (!Object.hasOwn(this.attributes, "exception.type")) this.setAttribute(ATTR_EXCEPTION_TYPE, exceptionObj.name);
				hasMinimumAttributes = true;
			}
			if (exceptionObj.message) {
				if (!Object.hasOwn(this.attributes, "exception.message")) this.setAttribute(ATTR_EXCEPTION_MESSAGE, exceptionObj.message);
				hasMinimumAttributes = true;
			}
			if (exceptionObj.stack) {
				if (!Object.hasOwn(this.attributes, "exception.stacktrace")) this.setAttribute(ATTR_EXCEPTION_STACKTRACE, exceptionObj.stack);
				hasMinimumAttributes = true;
			}
		}
		if (!hasMinimumAttributes) diag.warn(`Failed to record an exception ${exception}`);
	}
	_truncateToLimitUtil(value, limit) {
		if (value.length <= limit) return value;
		return value.substring(0, limit);
	}
	_isLogRecordReadonly() {
		if (this._isReadonly) diag.warn("Can not execute the operation on emitted log record");
		return this._isReadonly;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/Logger.js
var Logger = class {
	instrumentationScope;
	_sharedState;
	_loggerConfig;
	constructor(instrumentationScope, sharedState) {
		this.instrumentationScope = instrumentationScope;
		this._sharedState = sharedState;
		this._loggerConfig = this._sharedState.getLoggerConfig(this.instrumentationScope);
	}
	emit(logRecord) {
		const currentContext = logRecord.context || context.active();
		if (!this.enabled(logRecord)) return;
		/**
		* If a Logger was obtained with include_trace_context=true,
		* the LogRecords it emits MUST automatically include the Trace Context from the active Context,
		* if Context has not been explicitly set.
		*/
		const logRecordInstance = new LogRecordImpl(this._sharedState, this.instrumentationScope, {
			context: currentContext,
			...logRecord
		});
		this._sharedState.loggerMetrics.emitLog();
		/**
		* the explicitly passed Context,
		* the current Context, or an empty Context if the Logger was obtained with include_trace_context=false
		*/
		this._sharedState.activeProcessor.onEmit(logRecordInstance, currentContext);
		/**
		* A LogRecordProcessor may freely modify logRecord for the duration of the OnEmit call.
		* If logRecord is needed after OnEmit returns (i.e. for asynchronous processing) only reads are permitted.
		*/
		logRecordInstance._makeReadonly();
	}
	enabled(options) {
		const loggerConfig = this._loggerConfig;
		if (loggerConfig.disabled) return false;
		const severityNumber = options?.severityNumber;
		if (typeof severityNumber === "number" && severityNumber !== SeverityNumber.UNSPECIFIED && severityNumber < loggerConfig.minimumSeverity) return false;
		const currentContext = options?.context || context.active();
		if (loggerConfig.traceBased) {
			const spanContext = trace.getSpanContext(currentContext);
			if (spanContext && isSpanContextValid(spanContext)) {
				if (!((spanContext.traceFlags & TraceFlags.SAMPLED) === TraceFlags.SAMPLED)) return false;
			}
		}
		const enabledOpts = {
			context: currentContext,
			instrumentationScope: this.instrumentationScope,
			severityNumber: options?.severityNumber,
			eventName: options?.eventName
		};
		for (const processor of this._sharedState.processors) if (!processor.enabled || processor.enabled(enabledOpts)) return true;
		return false;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/export/NoopLogRecordProcessor.js
var NoopLogRecordProcessor = class {
	forceFlush() {
		return Promise.resolve();
	}
	onEmit(_logRecord, _context) {}
	shutdown() {
		return Promise.resolve();
	}
	enabled(_options) {
		return false;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/MultiLogRecordProcessor.js
/**
* Implementation of the {@link LogRecordProcessor} that simply forwards all
* received events to a list of {@link LogRecordProcessor}s.
*/
var MultiLogRecordProcessor = class {
	processors;
	forceFlushTimeoutMillis;
	constructor(processors, forceFlushTimeoutMillis) {
		this.processors = processors;
		this.forceFlushTimeoutMillis = forceFlushTimeoutMillis;
	}
	async forceFlush() {
		const timeout = this.forceFlushTimeoutMillis;
		await Promise.all(this.processors.map((processor) => callWithTimeout$1(processor.forceFlush(), timeout)));
	}
	onEmit(logRecord, context) {
		this.processors.forEach((processors) => processors.onEmit(logRecord, context));
	}
	async shutdown() {
		await Promise.all(this.processors.map((processor) => processor.shutdown()));
	}
	enabled(options) {
		for (const processor of this.processors) if (!processor.enabled || processor.enabled(options)) return true;
		return false;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/internal/utils.js
/**
* Converting the instrumentation scope object to a unique identifier string.
* @param scope - The instrumentation scope to convert
* @returns A unique string identifier for the scope
*/
function getInstrumentationScopeKey(scope) {
	return `${scope.name}@${scope.version || ""}:${scope.schemaUrl || ""}`;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/semconv.js
/**
* The number of logs submitted to enabled SDK Loggers.
*
* @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
*/
var METRIC_OTEL_SDK_LOG_CREATED = "otel.sdk.log.created";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/LoggerMetrics.js
/**
* Generates `otel.sdk.log.*` metrics.
* https://opentelemetry.io/docs/specs/semconv/otel/sdk-metrics/#log-metrics
*/
var LoggerMetrics = class {
	createdLogs;
	constructor(meter) {
		this.createdLogs = meter.createCounter(METRIC_OTEL_SDK_LOG_CREATED, {
			unit: "{log_record}",
			description: "The number of logs submitted to enabled SDK Loggers."
		});
	}
	emitLog() {
		this.createdLogs.add(1);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/version.js
var VERSION$1 = "0.218.0";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/internal/LoggerProviderSharedState.js
var DEFAULT_LOGGER_CONFIG = {
	disabled: false,
	minimumSeverity: SeverityNumber.UNSPECIFIED,
	traceBased: false
};
/**
* Default LoggerConfigurator that returns the default config for all loggers
*/
var DEFAULT_LOGGER_CONFIGURATOR = () => ({ ...DEFAULT_LOGGER_CONFIG });
var LoggerProviderSharedState = class {
	loggers = /* @__PURE__ */ new Map();
	activeProcessor;
	registeredLogRecordProcessors = [];
	resource;
	forceFlushTimeoutMillis;
	logRecordLimits;
	processors;
	loggerMetrics;
	_loggerConfigurator;
	_loggerConfigs = /* @__PURE__ */ new Map();
	constructor(resource, forceFlushTimeoutMillis, logRecordLimits, processors, loggerConfigurator, meterProvider) {
		this.resource = resource;
		this.forceFlushTimeoutMillis = forceFlushTimeoutMillis;
		this.logRecordLimits = logRecordLimits;
		this.processors = processors;
		if (processors.length > 0) {
			this.registeredLogRecordProcessors = processors;
			this.activeProcessor = new MultiLogRecordProcessor(this.registeredLogRecordProcessors, this.forceFlushTimeoutMillis);
		} else this.activeProcessor = new NoopLogRecordProcessor();
		this._loggerConfigurator = loggerConfigurator ?? DEFAULT_LOGGER_CONFIGURATOR;
		const meter = meterProvider ? meterProvider.getMeter("@opentelemetry/sdk-logs", VERSION$1) : createNoopMeter();
		this.loggerMetrics = new LoggerMetrics(meter);
	}
	/**
	* Get the LoggerConfig for a given instrumentation scope.
	* Uses the LoggerConfigurator function to compute the config on first access
	* and caches the result.
	*
	* @experimental This feature is in development as per the OpenTelemetry specification.
	*/
	getLoggerConfig(instrumentationScope) {
		const key = getInstrumentationScopeKey(instrumentationScope);
		let config = this._loggerConfigs.get(key);
		if (config) return config;
		config = this._loggerConfigurator(instrumentationScope);
		this._loggerConfigs.set(key, config);
		return config;
	}
};
var LoggerProvider = class {
	_shutdownOnce;
	_sharedState;
	constructor(config = {}) {
		const mergedConfig = {
			resource: config.resource ?? defaultResource(),
			forceFlushTimeoutMillis: config.forceFlushTimeoutMillis ?? 3e4,
			logRecordLimits: {
				attributeCountLimit: config.logRecordLimits?.attributeCountLimit ?? 128,
				attributeValueLengthLimit: config.logRecordLimits?.attributeValueLengthLimit ?? Infinity
			},
			loggerConfigurator: config.loggerConfigurator ?? DEFAULT_LOGGER_CONFIGURATOR,
			processors: config.processors ?? [],
			meterProvider: config.meterProvider
		};
		this._sharedState = new LoggerProviderSharedState(mergedConfig.resource, mergedConfig.forceFlushTimeoutMillis, mergedConfig.logRecordLimits, mergedConfig.processors, mergedConfig.loggerConfigurator, mergedConfig.meterProvider);
		this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
	}
	/**
	* Get a logger with the configuration of the LoggerProvider.
	*/
	getLogger(name, version, options) {
		if (this._shutdownOnce.isCalled) {
			diag.warn("A shutdown LoggerProvider cannot provide a Logger");
			return NOOP_LOGGER;
		}
		if (!name) diag.warn("Logger requested without instrumentation scope name.");
		const loggerName = name || "unknown";
		const key = `${loggerName}@${version || ""}:${options?.schemaUrl || ""}`;
		if (!this._sharedState.loggers.has(key)) this._sharedState.loggers.set(key, new Logger({
			name: loggerName,
			version,
			schemaUrl: options?.schemaUrl
		}, this._sharedState));
		return this._sharedState.loggers.get(key);
	}
	/**
	* Notifies all registered LogRecordProcessor to flush any buffered data.
	*
	* Returns a promise which is resolved when all flushes are complete.
	*/
	forceFlush() {
		if (this._shutdownOnce.isCalled) {
			diag.warn("invalid attempt to force flush after LoggerProvider shutdown");
			return this._shutdownOnce.promise;
		}
		return this._sharedState.activeProcessor.forceFlush();
	}
	/**
	* Flush all buffered data and shut down the LoggerProvider and all registered
	* LogRecordProcessor.
	*
	* Returns a promise which is resolved when all flushes are complete.
	*/
	shutdown() {
		if (this._shutdownOnce.isCalled) {
			diag.warn("shutdown may only be called once per LoggerProvider");
			return this._shutdownOnce.promise;
		}
		return this._shutdownOnce.call();
	}
	_shutdown() {
		return this._sharedState.activeProcessor.shutdown();
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/export/BatchLogRecordProcessorBase.js
/**
* Waits for all pending async resources in the log records to be resolved.
*/
async function waitForResources(logRecords) {
	const pendingResources = [];
	for (let i = 0, len = logRecords.length; i < len; i++) {
		const logRecord = logRecords[i];
		if (logRecord.resource.asyncAttributesPending && logRecord.resource.waitForAsyncAttributes) pendingResources.push(logRecord.resource.waitForAsyncAttributes());
	}
	if (pendingResources != null && pendingResources.length > 0) await Promise.all(pendingResources);
}
/**
* Represents an export operation that handles the entire export workflow.
*/
var ExportOperation = class {
	_exportCompleted;
	_exportScheduledPromise;
	_exportScheduledResolve;
	constructor(exporter, logRecords, exportTimeoutMillis) {
		this._exportScheduledPromise = new Promise((resolve) => {
			this._exportScheduledResolve = resolve;
		});
		this._exportCompleted = this._executeExport(exporter, logRecords, exportTimeoutMillis);
	}
	/** Get the promise that resolves when the export completes */
	get exportCompleted() {
		return this._exportCompleted;
	}
	/** Get the promise that resolves when exporter.export() has been called */
	get exportScheduled() {
		return this._exportScheduledPromise;
	}
	async _executeExport(exporter, logRecords, exportTimeoutMillis) {
		try {
			await waitForResources(logRecords);
			await context.with(suppressTracing(context.active()), async () => {
				return this._exportWithTimeout(exporter, logRecords, exportTimeoutMillis);
			});
		} catch (e) {
			globalErrorHandler(e);
			this._exportScheduledResolve();
		}
	}
	async _exportWithTimeout(exporter, logRecords, exportTimeoutMillis) {
		return new Promise((resolve, reject) => {
			const timer = setTimeout(() => {
				reject(/* @__PURE__ */ new Error("Timeout"));
			}, exportTimeoutMillis);
			exporter.export(logRecords, (result) => {
				clearTimeout(timer);
				if (result.code === ExportResultCode.SUCCESS) resolve();
				else reject(result.error ?? /* @__PURE__ */ new Error("BatchLogRecordProcessor: log record export failed"));
			});
			this._exportScheduledResolve();
		});
	}
};
var BatchLogRecordProcessorBase = class {
	_maxExportBatchSize;
	_maxQueueSize;
	_scheduledDelayMillis;
	_exportTimeoutMillis;
	_exporter;
	_currentExport = null;
	_finishedLogRecords = [];
	_timer;
	_shutdownOnce;
	_flushing = false;
	constructor(exporter, config) {
		this._exporter = exporter;
		this._maxExportBatchSize = config?.maxExportBatchSize ?? 512;
		this._maxQueueSize = config?.maxQueueSize ?? 2048;
		this._scheduledDelayMillis = config?.scheduledDelayMillis ?? 5e3;
		this._exportTimeoutMillis = config?.exportTimeoutMillis ?? 3e4;
		this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
		if (this._maxExportBatchSize > this._maxQueueSize) {
			diag.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize");
			this._maxExportBatchSize = this._maxQueueSize;
		}
	}
	onEmit(logRecord) {
		if (this._shutdownOnce.isCalled) return;
		this._addToBuffer(logRecord);
	}
	forceFlush() {
		if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
		return this._flushAll();
	}
	/** Add a LogRecord in the buffer. */
	_addToBuffer(logRecord) {
		if (this._finishedLogRecords.length >= this._maxQueueSize) return;
		this._finishedLogRecords.push(logRecord);
		this._maybeStartTimer();
	}
	shutdown() {
		return this._shutdownOnce.call();
	}
	async _shutdown() {
		this.onShutdown();
		await this._flushAll();
		await this._exporter.shutdown();
	}
	/**
	* Send all LogRecords to the exporter respecting the batch size limit
	* This function is used only on forceFlush or shutdown,
	* for all other cases _exportOneBatch should be used
	* */
	async _flushAll() {
		if (this._flushing) return;
		this._flushing = true;
		let toFlush = this._finishedLogRecords;
		this._finishedLogRecords = [];
		this._clearTimer();
		if (this._currentExport !== null) {
			await this._exporter.forceFlush();
			await this._currentExport.exportCompleted;
			this._currentExport = null;
		}
		while (toFlush.length > 0) {
			let batch;
			if (toFlush.length <= this._maxExportBatchSize) {
				batch = toFlush;
				toFlush = [];
			} else batch = toFlush.splice(0, this._maxExportBatchSize);
			const exportOp = new ExportOperation(this._exporter, batch, this._exportTimeoutMillis);
			this._currentExport = exportOp;
			try {
				await exportOp.exportScheduled;
				await this._exporter.forceFlush();
				await exportOp.exportCompleted;
			} catch (e) {
				globalErrorHandler(e);
			} finally {
				this._currentExport = null;
			}
		}
		this._flushing = false;
		this._maybeStartTimer();
	}
	/**
	* Extracts one batch from the buffer.
	* Returns null if buffer is empty.
	*/
	_extractBatch() {
		if (this._finishedLogRecords.length === 0) return null;
		if (this._finishedLogRecords.length <= this._maxExportBatchSize) {
			const batch = this._finishedLogRecords;
			this._finishedLogRecords = [];
			return batch;
		} else return this._finishedLogRecords.splice(0, this._maxExportBatchSize);
	}
	_exportOneBatch() {
		this._clearTimer();
		const logRecords = this._extractBatch();
		if (logRecords === null) return;
		const exportOp = new ExportOperation(this._exporter, logRecords, this._exportTimeoutMillis);
		this._currentExport = exportOp;
		exportOp.exportCompleted.then(() => {
			this._currentExport = null;
			this._maybeStartTimer();
		}).catch((error) => {
			this._currentExport = null;
			globalErrorHandler(error);
			this._maybeStartTimer();
		});
	}
	_maybeStartTimer() {
		if (this._shutdownOnce.isCalled) return;
		if (this._flushing) return;
		if (this._finishedLogRecords.length === 0) return;
		if (this._currentExport !== null) return;
		if (this._finishedLogRecords.length >= this._maxExportBatchSize) {
			this._exportOneBatch();
			return;
		}
		if (this._timer !== void 0) return;
		this._timer = setTimeout(() => {
			this._timer = void 0;
			this._exportOneBatch();
		}, this._scheduledDelayMillis);
		if (typeof this._timer !== "number") this._timer.unref();
	}
	_clearTimer() {
		if (this._timer !== void 0) {
			clearTimeout(this._timer);
			this._timer = void 0;
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-logs@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-logs/build/esm/platform/browser/export/BatchLogRecordProcessor.js
var BatchLogRecordProcessor = class extends BatchLogRecordProcessorBase {
	_visibilityChangeListener;
	_pageHideListener;
	constructor(exporter, config) {
		super(exporter, config);
		this._onInit(config);
	}
	onShutdown() {
		if (typeof document === "undefined") return;
		if (this._visibilityChangeListener) document.removeEventListener("visibilitychange", this._visibilityChangeListener);
		if (this._pageHideListener) document.removeEventListener("pagehide", this._pageHideListener);
	}
	_onInit(config) {
		if (config?.disableAutoFlushOnDocumentHide === true || typeof document === "undefined") return;
		this._visibilityChangeListener = () => {
			if (document.visibilityState === "hidden") this.forceFlush();
		};
		this._pageHideListener = () => {
			this.forceFlush();
		};
		document.addEventListener("visibilitychange", this._visibilityChangeListener);
		document.addEventListener("pagehide", this._pageHideListener);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/OTLPExporterBase.js
var OTLPExporterBase = class {
	_delegate;
	constructor(delegate) {
		this._delegate = delegate;
	}
	/**
	* Export items.
	* @param items
	* @param resultCallback
	*/
	export(items, resultCallback) {
		this._delegate.export(items, resultCallback);
	}
	forceFlush() {
		return this._delegate.forceFlush();
	}
	shutdown() {
		return this._delegate.shutdown();
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/types.js
/**
* Interface for handling error
*/
var OTLPExporterError = class extends Error {
	code;
	name = "OTLPExporterError";
	data;
	constructor(message, code, data) {
		super(message);
		this.data = data;
		this.code = code;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/shared-configuration.js
function validateTimeoutMillis(timeoutMillis) {
	if (Number.isFinite(timeoutMillis) && timeoutMillis > 0) return timeoutMillis;
	throw new Error(`Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${timeoutMillis}')`);
}
function wrapStaticHeadersInFunction(headers) {
	if (headers == null) return;
	return async () => headers;
}
/**
* @param userProvidedConfiguration  Configuration options provided by the user in code.
* @param fallbackConfiguration Fallback to use when the {@link userProvidedConfiguration} does not specify an option.
* @param defaultConfiguration The defaults as defined by the exporter specification
*/
function mergeOtlpSharedConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
	return {
		timeoutMillis: validateTimeoutMillis(userProvidedConfiguration.timeoutMillis ?? fallbackConfiguration.timeoutMillis ?? defaultConfiguration.timeoutMillis),
		concurrencyLimit: userProvidedConfiguration.concurrencyLimit ?? fallbackConfiguration.concurrencyLimit ?? defaultConfiguration.concurrencyLimit,
		compression: userProvidedConfiguration.compression ?? fallbackConfiguration.compression ?? defaultConfiguration.compression
	};
}
function getSharedConfigurationDefaults() {
	return {
		timeoutMillis: 1e4,
		concurrencyLimit: 30,
		compression: "none"
	};
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/bounded-queue-export-promise-handler.js
var BoundedQueueExportPromiseHandler = class {
	_concurrencyLimit;
	_sendingPromises = [];
	/**
	* @param concurrencyLimit maximum promises allowed in a queue at the same time.
	*/
	constructor(concurrencyLimit) {
		this._concurrencyLimit = concurrencyLimit;
	}
	pushPromise(promise) {
		if (this.hasReachedLimit()) throw new Error("Concurrency Limit reached");
		this._sendingPromises.push(promise);
		const popPromise = () => {
			const index = this._sendingPromises.indexOf(promise);
			this._sendingPromises.splice(index, 1);
		};
		promise.then(popPromise, popPromise);
	}
	hasReachedLimit() {
		return this._sendingPromises.length >= this._concurrencyLimit;
	}
	async awaitAll() {
		await Promise.all(this._sendingPromises);
	}
};
/**
* Promise queue for keeping track of export promises. Finished promises will be auto-dequeued.
* Allows for awaiting all promises in the queue.
*/
function createBoundedQueueExportPromiseHandler(options) {
	return new BoundedQueueExportPromiseHandler(options.concurrencyLimit);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/logging-response-handler.js
function isPartialSuccessResponse(response) {
	return Object.prototype.hasOwnProperty.call(response, "partialSuccess");
}
/**
* Default response handler that logs a partial success to the console.
*/
function createLoggingPartialSuccessResponseHandler() {
	return { handleResponse(response) {
		if (response == null || !isPartialSuccessResponse(response) || response.partialSuccess == null || Object.keys(response.partialSuccess).length === 0) return;
		diag.warn("Received Partial Success response:", JSON.stringify(response.partialSuccess));
	} };
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/otlp-export-delegate.js
var OTLPExportDelegate = class {
	_diagLogger;
	_transport;
	_serializer;
	_responseHandler;
	_promiseQueue;
	_timeout;
	constructor(transport, serializer, responseHandler, promiseQueue, timeout) {
		this._transport = transport;
		this._serializer = serializer;
		this._responseHandler = responseHandler;
		this._promiseQueue = promiseQueue;
		this._timeout = timeout;
		this._diagLogger = diag.createComponentLogger({ namespace: "OTLPExportDelegate" });
	}
	export(internalRepresentation, resultCallback) {
		this._diagLogger.debug("items to be sent", internalRepresentation);
		if (this._promiseQueue.hasReachedLimit()) {
			resultCallback({
				code: ExportResultCode.FAILED,
				error: /* @__PURE__ */ new Error("Concurrent export limit reached")
			});
			return;
		}
		const serializedRequest = this._serializer.serializeRequest(internalRepresentation);
		if (serializedRequest == null) {
			resultCallback({
				code: ExportResultCode.FAILED,
				error: /* @__PURE__ */ new Error("Nothing to send")
			});
			return;
		}
		this._promiseQueue.pushPromise(this._transport.send(serializedRequest, this._timeout).then((response) => {
			if (response.status === "success") {
				if (response.data != null) try {
					this._responseHandler.handleResponse(this._serializer.deserializeResponse(response.data));
				} catch (e) {
					this._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", e, response.data);
				}
				resultCallback({ code: ExportResultCode.SUCCESS });
				return;
			} else if (response.status === "failure" && response.error) {
				resultCallback({
					code: ExportResultCode.FAILED,
					error: response.error
				});
				return;
			} else if (response.status === "retryable") resultCallback({
				code: ExportResultCode.FAILED,
				error: response.error ?? new OTLPExporterError("Export failed with retryable status")
			});
			else resultCallback({
				code: ExportResultCode.FAILED,
				error: new OTLPExporterError("Export failed with unknown error")
			});
		}, (reason) => resultCallback({
			code: ExportResultCode.FAILED,
			error: reason
		})));
	}
	forceFlush() {
		return this._promiseQueue.awaitAll();
	}
	async shutdown() {
		this._diagLogger.debug("shutdown started");
		await this.forceFlush();
		this._transport.shutdown();
	}
};
/**
* Creates a generic delegate for OTLP exports which only contains parts of the OTLP export that are shared across all
* signals.
*/
function createOtlpExportDelegate(components, settings) {
	return new OTLPExportDelegate(components.transport, components.serializer, createLoggingPartialSuccessResponseHandler(), components.promiseHandler, settings.timeout);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/otlp-network-export-delegate.js
function createOtlpNetworkExportDelegate(options, serializer, transport) {
	return createOtlpExportDelegate({
		transport,
		serializer,
		promiseHandler: createBoundedQueueExportPromiseHandler(options)
	}, { timeout: options.timeoutMillis });
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/export/AggregationTemporality.js
/**
* AggregationTemporality indicates the way additive quantities are expressed.
*/
var AggregationTemporality;
(function(AggregationTemporality) {
	AggregationTemporality[AggregationTemporality["DELTA"] = 0] = "DELTA";
	AggregationTemporality[AggregationTemporality["CUMULATIVE"] = 1] = "CUMULATIVE";
})(AggregationTemporality || (AggregationTemporality = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/export/MetricData.js
/**
* Supported types of metric instruments.
*/
var InstrumentType;
(function(InstrumentType) {
	InstrumentType["COUNTER"] = "COUNTER";
	InstrumentType["GAUGE"] = "GAUGE";
	InstrumentType["HISTOGRAM"] = "HISTOGRAM";
	InstrumentType["UP_DOWN_COUNTER"] = "UP_DOWN_COUNTER";
	InstrumentType["OBSERVABLE_COUNTER"] = "OBSERVABLE_COUNTER";
	InstrumentType["OBSERVABLE_GAUGE"] = "OBSERVABLE_GAUGE";
	InstrumentType["OBSERVABLE_UP_DOWN_COUNTER"] = "OBSERVABLE_UP_DOWN_COUNTER";
})(InstrumentType || (InstrumentType = {}));
/**
* The aggregated point data type.
*/
var DataPointType;
(function(DataPointType) {
	/**
	* A histogram data point contains a histogram statistics of collected
	* values with a list of explicit bucket boundaries and statistics such
	* as min, max, count, and sum of all collected values.
	*/
	DataPointType[DataPointType["HISTOGRAM"] = 0] = "HISTOGRAM";
	/**
	* An exponential histogram data point contains a histogram statistics of
	* collected values where bucket boundaries are automatically calculated
	* using an exponential function, and statistics such as min, max, count,
	* and sum of all collected values.
	*/
	DataPointType[DataPointType["EXPONENTIAL_HISTOGRAM"] = 1] = "EXPONENTIAL_HISTOGRAM";
	/**
	* A gauge metric data point has only a single numeric value.
	*/
	DataPointType[DataPointType["GAUGE"] = 2] = "GAUGE";
	/**
	* A sum metric data point has a single numeric value and a
	* monotonicity-indicator.
	*/
	DataPointType[DataPointType["SUM"] = 3] = "SUM";
})(DataPointType || (DataPointType = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/utils.js
/**
* Converting the unordered attributes into unique identifier string.
* @param attributes user provided unordered Attributes.
*/
function hashAttributes(attributes) {
	let keys = Object.keys(attributes);
	if (keys.length === 0) return "";
	keys = keys.sort();
	return JSON.stringify(keys.map((key) => [key, attributes[key]]));
}
/**
* Converting the instrumentation scope object to a unique identifier string.
* @param instrumentationScope
*/
function instrumentationScopeId(instrumentationScope) {
	return `${instrumentationScope.name}:${instrumentationScope.version ?? ""}:${instrumentationScope.schemaUrl ?? ""}`;
}
/**
* Error that is thrown on timeouts.
*/
var TimeoutError = class TimeoutError extends Error {
	constructor(message) {
		super(message);
		Object.setPrototypeOf(this, TimeoutError.prototype);
	}
};
/**
* Adds a timeout to a promise and rejects if the specified timeout has elapsed. Also rejects if the specified promise
* rejects, and resolves if the specified promise resolves.
*
* <p> NOTE: this operation will continue even after it throws a {@link TimeoutError}.
*
* @param promise promise to use with timeout.
* @param timeout the timeout in milliseconds until the returned promise is rejected.
*/
function callWithTimeout(promise, timeout) {
	let timeoutHandle;
	const timeoutPromise = new Promise(function timeoutFunction(_resolve, reject) {
		timeoutHandle = setTimeout(function timeoutHandler() {
			reject(new TimeoutError("Operation timed out."));
		}, timeout);
	});
	return Promise.race([promise, timeoutPromise]).then((result) => {
		clearTimeout(timeoutHandle);
		return result;
	}, (reason) => {
		clearTimeout(timeoutHandle);
		throw reason;
	});
}
function setEquals(lhs, rhs) {
	if (lhs.size !== rhs.size) return false;
	for (const item of lhs) if (!rhs.has(item)) return false;
	return true;
}
/**
* Binary search the sorted array to the find upper bound for the value.
* @param arr
* @param value
* @returns
*/
function binarySearchUB(arr, value) {
	let lo = 0;
	let hi = arr.length - 1;
	let ret = arr.length;
	while (hi >= lo) {
		const mid = lo + Math.trunc((hi - lo) / 2);
		if (arr[mid] < value) lo = mid + 1;
		else {
			ret = mid;
			hi = mid - 1;
		}
	}
	return ret;
}
function equalsCaseInsensitive(lhs, rhs) {
	return lhs.toLowerCase() === rhs.toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/types.js
/** The kind of aggregator. */
var AggregatorKind;
(function(AggregatorKind) {
	AggregatorKind[AggregatorKind["DROP"] = 0] = "DROP";
	AggregatorKind[AggregatorKind["SUM"] = 1] = "SUM";
	AggregatorKind[AggregatorKind["LAST_VALUE"] = 2] = "LAST_VALUE";
	AggregatorKind[AggregatorKind["HISTOGRAM"] = 3] = "HISTOGRAM";
	AggregatorKind[AggregatorKind["EXPONENTIAL_HISTOGRAM"] = 4] = "EXPONENTIAL_HISTOGRAM";
})(AggregatorKind || (AggregatorKind = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/Drop.js
/** Basic aggregator for None which keeps no recorded value. */
var DropAggregator = class {
	kind = AggregatorKind.DROP;
	createAccumulation() {}
	merge(_previous, _delta) {}
	diff(_previous, _current) {}
	toMetricData(_descriptor, _aggregationTemporality, _accumulationByAttributes, _endTime) {}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/Histogram.js
function createNewEmptyCheckpoint(boundaries) {
	const counts = boundaries.map(() => 0);
	counts.push(0);
	return {
		buckets: {
			boundaries,
			counts
		},
		sum: 0,
		count: 0,
		hasMinMax: false,
		min: Infinity,
		max: -Infinity
	};
}
var HistogramAccumulation = class {
	startTime;
	_boundaries;
	_recordMinMax;
	_current;
	constructor(startTime, boundaries, recordMinMax = true, current = createNewEmptyCheckpoint(boundaries)) {
		this.startTime = startTime;
		this._boundaries = boundaries;
		this._recordMinMax = recordMinMax;
		this._current = current;
	}
	record(value) {
		if (Number.isNaN(value)) return;
		this._current.count += 1;
		this._current.sum += value;
		if (this._recordMinMax) {
			this._current.min = Math.min(value, this._current.min);
			this._current.max = Math.max(value, this._current.max);
			this._current.hasMinMax = true;
		}
		const idx = binarySearchUB(this._boundaries, value);
		this._current.buckets.counts[idx] += 1;
	}
	setStartTime(startTime) {
		this.startTime = startTime;
	}
	toPointValue() {
		return this._current;
	}
};
/**
* Basic aggregator which observes events and counts them in pre-defined buckets
* and provides the total sum and count of all observations.
*/
var HistogramAggregator = class {
	kind = AggregatorKind.HISTOGRAM;
	_boundaries;
	_recordMinMax;
	/**
	* @param _boundaries sorted upper bounds of recorded values.
	* @param _recordMinMax If set to true, min and max will be recorded. Otherwise, min and max will not be recorded.
	*/
	constructor(boundaries, recordMinMax) {
		this._boundaries = boundaries;
		this._recordMinMax = recordMinMax;
	}
	createAccumulation(startTime) {
		return new HistogramAccumulation(startTime, this._boundaries, this._recordMinMax);
	}
	/**
	* Return the result of the merge of two histogram accumulations. As long as one Aggregator
	* instance produces all Accumulations with constant boundaries we don't need to worry about
	* merging accumulations with different boundaries.
	*/
	merge(previous, delta) {
		const previousValue = previous.toPointValue();
		const deltaValue = delta.toPointValue();
		const previousCounts = previousValue.buckets.counts;
		const deltaCounts = deltaValue.buckets.counts;
		const mergedCounts = new Array(previousCounts.length);
		for (let idx = 0; idx < previousCounts.length; idx++) mergedCounts[idx] = previousCounts[idx] + deltaCounts[idx];
		let min = Infinity;
		let max = -Infinity;
		if (this._recordMinMax) {
			if (previousValue.hasMinMax && deltaValue.hasMinMax) {
				min = Math.min(previousValue.min, deltaValue.min);
				max = Math.max(previousValue.max, deltaValue.max);
			} else if (previousValue.hasMinMax) {
				min = previousValue.min;
				max = previousValue.max;
			} else if (deltaValue.hasMinMax) {
				min = deltaValue.min;
				max = deltaValue.max;
			}
		}
		return new HistogramAccumulation(previous.startTime, previousValue.buckets.boundaries, this._recordMinMax, {
			buckets: {
				boundaries: previousValue.buckets.boundaries,
				counts: mergedCounts
			},
			count: previousValue.count + deltaValue.count,
			sum: previousValue.sum + deltaValue.sum,
			hasMinMax: this._recordMinMax && (previousValue.hasMinMax || deltaValue.hasMinMax),
			min,
			max
		});
	}
	/**
	* Returns a new DELTA aggregation by comparing two cumulative measurements.
	*/
	diff(previous, current) {
		const previousValue = previous.toPointValue();
		const currentValue = current.toPointValue();
		const previousCounts = previousValue.buckets.counts;
		const currentCounts = currentValue.buckets.counts;
		const diffedCounts = new Array(previousCounts.length);
		for (let idx = 0; idx < previousCounts.length; idx++) diffedCounts[idx] = currentCounts[idx] - previousCounts[idx];
		return new HistogramAccumulation(current.startTime, previousValue.buckets.boundaries, this._recordMinMax, {
			buckets: {
				boundaries: previousValue.buckets.boundaries,
				counts: diffedCounts
			},
			count: currentValue.count - previousValue.count,
			sum: currentValue.sum - previousValue.sum,
			hasMinMax: false,
			min: Infinity,
			max: -Infinity
		});
	}
	toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
		return {
			descriptor,
			aggregationTemporality,
			dataPointType: DataPointType.HISTOGRAM,
			dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
				const pointValue = accumulation.toPointValue();
				return {
					attributes,
					startTime: accumulation.startTime,
					endTime,
					value: {
						min: pointValue.hasMinMax ? pointValue.min : void 0,
						max: pointValue.hasMinMax ? pointValue.max : void 0,
						sum: !(descriptor.type === InstrumentType.GAUGE || descriptor.type === InstrumentType.UP_DOWN_COUNTER || descriptor.type === InstrumentType.OBSERVABLE_GAUGE || descriptor.type === InstrumentType.OBSERVABLE_UP_DOWN_COUNTER) ? pointValue.sum : void 0,
						buckets: pointValue.buckets,
						count: pointValue.count
					}
				};
			})
		};
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/Buckets.js
var Buckets = class Buckets {
	backing;
	indexBase;
	indexStart;
	indexEnd;
	/**
	* The term index refers to the number of the exponential histogram bucket
	* used to determine its boundaries. The lower boundary of a bucket is
	* determined by base ** index and the upper boundary of a bucket is
	* determined by base ** (index + 1). index values are signed to account
	* for values less than or equal to 1.
	*
	* indexBase is the index of the 0th position in the
	* backing array, i.e., backing[0] is the count
	* in the bucket with index `indexBase`.
	*
	* indexStart is the smallest index value represented
	* in the backing array.
	*
	* indexEnd is the largest index value represented in
	* the backing array.
	*/
	constructor(backing = new BucketsBacking(), indexBase = 0, indexStart = 0, indexEnd = 0) {
		this.backing = backing;
		this.indexBase = indexBase;
		this.indexStart = indexStart;
		this.indexEnd = indexEnd;
	}
	/**
	* Offset is the bucket index of the smallest entry in the counts array
	* @returns {number}
	*/
	get offset() {
		return this.indexStart;
	}
	/**
	* Buckets is a view into the backing array.
	* @returns {number}
	*/
	get length() {
		if (this.backing.length === 0) return 0;
		if (this.indexEnd === this.indexStart && this.at(0) === 0) return 0;
		return this.indexEnd - this.indexStart + 1;
	}
	/**
	* An array of counts, where count[i] carries the count
	* of the bucket at index (offset+i).  count[i] is the count of
	* values greater than base^(offset+i) and less than or equal to
	* base^(offset+i+1).
	* @returns {number} The logical counts based on the backing array
	*/
	counts() {
		return Array.from({ length: this.length }, (_, i) => this.at(i));
	}
	/**
	* At returns the count of the bucket at a position in the logical
	* array of counts.
	* @param position
	* @returns {number}
	*/
	at(position) {
		const bias = this.indexBase - this.indexStart;
		if (position < bias) position += this.backing.length;
		position -= bias;
		return this.backing.countAt(position);
	}
	/**
	* incrementBucket increments the backing array index by `increment`
	* @param bucketIndex
	* @param increment
	*/
	incrementBucket(bucketIndex, increment) {
		this.backing.increment(bucketIndex, increment);
	}
	/**
	* decrementBucket decrements the backing array index by `decrement`
	* if decrement is greater than the current value, it's set to 0.
	* @param bucketIndex
	* @param decrement
	*/
	decrementBucket(bucketIndex, decrement) {
		this.backing.decrement(bucketIndex, decrement);
	}
	/**
	* trim removes leading and / or trailing zero buckets (which can occur
	* after diffing two histos) and rotates the backing array so that the
	* smallest non-zero index is in the 0th position of the backing array
	*/
	trim() {
		for (let i = 0; i < this.length; i++) if (this.at(i) !== 0) {
			this.indexStart += i;
			break;
		} else if (i === this.length - 1) {
			this.indexStart = this.indexEnd = this.indexBase = 0;
			return;
		}
		for (let i = this.length - 1; i >= 0; i--) if (this.at(i) !== 0) {
			this.indexEnd -= this.length - i - 1;
			break;
		}
		this._rotate();
	}
	/**
	* downscale first rotates, then collapses 2**`by`-to-1 buckets.
	* @param by
	*/
	downscale(by) {
		this._rotate();
		const size = 1 + this.indexEnd - this.indexStart;
		const each = 1 << by;
		let inpos = 0;
		let outpos = 0;
		for (let pos = this.indexStart; pos <= this.indexEnd;) {
			let mod = pos % each;
			if (mod < 0) mod += each;
			for (let i = mod; i < each && inpos < size; i++) {
				this._relocateBucket(outpos, inpos);
				inpos++;
				pos++;
			}
			outpos++;
		}
		this.indexStart >>= by;
		this.indexEnd >>= by;
		this.indexBase = this.indexStart;
	}
	/**
	* Clone returns a deep copy of Buckets
	* @returns {Buckets}
	*/
	clone() {
		return new Buckets(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
	}
	/**
	* _rotate shifts the backing array contents so that indexStart ==
	* indexBase to simplify the downscale logic.
	*/
	_rotate() {
		const bias = this.indexBase - this.indexStart;
		if (bias === 0) return;
		else if (bias > 0) {
			this.backing.reverse(0, this.backing.length);
			this.backing.reverse(0, bias);
			this.backing.reverse(bias, this.backing.length);
		} else {
			this.backing.reverse(0, this.backing.length);
			this.backing.reverse(0, this.backing.length + bias);
		}
		this.indexBase = this.indexStart;
	}
	/**
	* _relocateBucket adds the count in counts[src] to counts[dest] and
	* resets count[src] to zero.
	*/
	_relocateBucket(dest, src) {
		if (dest === src) return;
		this.incrementBucket(dest, this.backing.emptyBucket(src));
	}
};
/**
* BucketsBacking holds the raw buckets and some utility methods to
* manage them.
*/
var BucketsBacking = class BucketsBacking {
	_counts;
	constructor(counts = [0]) {
		this._counts = counts;
	}
	/**
	* length returns the physical size of the backing array, which
	* is >= buckets.length()
	*/
	get length() {
		return this._counts.length;
	}
	/**
	* countAt returns the count in a specific bucket
	*/
	countAt(pos) {
		return this._counts[pos];
	}
	/**
	* growTo grows a backing array and copies old entries
	* into their correct new positions.
	*/
	growTo(newSize, oldPositiveLimit, newPositiveLimit) {
		const tmp = new Array(newSize).fill(0);
		tmp.splice(newPositiveLimit, this._counts.length - oldPositiveLimit, ...this._counts.slice(oldPositiveLimit));
		tmp.splice(0, oldPositiveLimit, ...this._counts.slice(0, oldPositiveLimit));
		this._counts = tmp;
	}
	/**
	* reverse the items in the backing array in the range [from, limit).
	*/
	reverse(from, limit) {
		const num = Math.floor((from + limit) / 2) - from;
		for (let i = 0; i < num; i++) {
			const tmp = this._counts[from + i];
			this._counts[from + i] = this._counts[limit - i - 1];
			this._counts[limit - i - 1] = tmp;
		}
	}
	/**
	* emptyBucket empties the count from a bucket, for
	* moving into another.
	*/
	emptyBucket(src) {
		const tmp = this._counts[src];
		this._counts[src] = 0;
		return tmp;
	}
	/**
	* increments a bucket by `increment`
	*/
	increment(bucketIndex, increment) {
		this._counts[bucketIndex] += increment;
	}
	/**
	* decrements a bucket by `decrement`
	*/
	decrement(bucketIndex, decrement) {
		if (this._counts[bucketIndex] >= decrement) this._counts[bucketIndex] -= decrement;
		else this._counts[bucketIndex] = 0;
	}
	/**
	* clone returns a deep copy of BucketsBacking
	*/
	clone() {
		return new BucketsBacking([...this._counts]);
	}
};
/**
* EXPONENT_MASK is set to 1 for the hi 32-bits of an IEEE 754
* floating point exponent: 0x7ff00000.
*/
var EXPONENT_MASK = 2146435072;
/**
* SIGNIFICAND_MASK is the mask for the significand portion of the hi 32-bits
* of an IEEE 754 double-precision floating-point value: 0xfffff
*/
var SIGNIFICAND_MASK = 1048575;
/**
* EXPONENT_BIAS is the exponent bias specified for encoding
* the IEEE 754 double-precision floating point exponent: 1023
*/
var EXPONENT_BIAS = 1023;
/**
* MIN_NORMAL_EXPONENT is the minimum exponent of a normalized
* floating point: -1022.
*/
var MIN_NORMAL_EXPONENT = -1022;
/**
* MAX_NORMAL_EXPONENT is the maximum exponent of a normalized
* floating point: 1023.
*/
var MAX_NORMAL_EXPONENT = EXPONENT_BIAS;
/**
* MIN_VALUE is the smallest normal number
*/
var MIN_VALUE = Math.pow(2, -1022);
/**
* getNormalBase2 extracts the normalized base-2 fractional exponent.
* This returns k for the equation f x 2**k where f is
* in the range [1, 2).  Note that this function is not called for
* subnormal numbers.
* @param {number} value - the value to determine normalized base-2 fractional
*    exponent for
* @returns {number} the normalized base-2 exponent
*/
function getNormalBase2(value) {
	const dv = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));
	dv.setFloat64(0, value);
	return ((dv.getUint32(0) & EXPONENT_MASK) >> 20) - EXPONENT_BIAS;
}
/**
* GetSignificand returns the 52 bit (unsigned) significand as a signed value.
* @param {number} value - the floating point number to extract the significand from
* @returns {number} The 52-bit significand
*/
function getSignificand(value) {
	const dv = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));
	dv.setFloat64(0, value);
	const hiBits = dv.getUint32(0);
	const loBits = dv.getUint32(4);
	return (hiBits & SIGNIFICAND_MASK) * Math.pow(2, 32) + loBits;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/util.js
/**
* Note: other languages provide this as a built in function. This is
* a naive, but functionally correct implementation. This is used sparingly,
* when creating a new mapping in a running application.
*
* ldexp returns frac × 2**exp. With the following special cases:
*   ldexp(±0, exp) = ±0
*   ldexp(±Inf, exp) = ±Inf
*   ldexp(NaN, exp) = NaN
* @param frac
* @param exp
* @returns {number}
*/
function ldexp(frac, exp) {
	if (frac === 0 || frac === Number.POSITIVE_INFINITY || frac === Number.NEGATIVE_INFINITY || Number.isNaN(frac)) return frac;
	return frac * Math.pow(2, exp);
}
/**
* Computes the next power of two that is greater than or equal to v.
* This implementation more efficient than, but functionally equivalent
* to Math.pow(2, Math.ceil(Math.log(x)/Math.log(2))).
* @param v
* @returns {number}
*/
function nextGreaterSquare(v) {
	v--;
	v |= v >> 1;
	v |= v >> 2;
	v |= v >> 4;
	v |= v >> 8;
	v |= v >> 16;
	v++;
	return v;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/types.js
var MappingError = class extends Error {};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/ExponentMapping.js
/**
* ExponentMapping implements exponential mapping functions for
* scales <=0. For scales > 0 LogarithmMapping should be used.
*/
var ExponentMapping = class {
	_shift;
	constructor(scale) {
		this._shift = -scale;
	}
	/**
	* Maps positive floating point values to indexes corresponding to scale
	* @param value
	* @returns {number} index for provided value at the current scale
	*/
	mapToIndex(value) {
		if (value < MIN_VALUE) return this._minNormalLowerBoundaryIndex();
		return getNormalBase2(value) + this._rightShift(getSignificand(value) - 1, 52) >> this._shift;
	}
	/**
	* Returns the lower bucket boundary for the given index for scale
	*
	* @param index
	* @returns {number}
	*/
	lowerBoundary(index) {
		const minIndex = this._minNormalLowerBoundaryIndex();
		if (index < minIndex) throw new MappingError(`underflow: ${index} is < minimum lower boundary: ${minIndex}`);
		const maxIndex = this._maxNormalLowerBoundaryIndex();
		if (index > maxIndex) throw new MappingError(`overflow: ${index} is > maximum lower boundary: ${maxIndex}`);
		return ldexp(1, index << this._shift);
	}
	/**
	* The scale used by this mapping
	* @returns {number}
	*/
	get scale() {
		if (this._shift === 0) return 0;
		return -this._shift;
	}
	_minNormalLowerBoundaryIndex() {
		let index = MIN_NORMAL_EXPONENT >> this._shift;
		if (this._shift < 2) index--;
		return index;
	}
	_maxNormalLowerBoundaryIndex() {
		return MAX_NORMAL_EXPONENT >> this._shift;
	}
	_rightShift(value, shift) {
		return Math.floor(value * Math.pow(2, -shift));
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/LogarithmMapping.js
/**
* LogarithmMapping implements exponential mapping functions for scale > 0.
* For scales <= 0 the exponent mapping should be used.
*/
var LogarithmMapping = class {
	_scale;
	_scaleFactor;
	_inverseFactor;
	constructor(scale) {
		this._scale = scale;
		this._scaleFactor = ldexp(Math.LOG2E, scale);
		this._inverseFactor = ldexp(Math.LN2, -scale);
	}
	/**
	* Maps positive floating point values to indexes corresponding to scale
	* @param value
	* @returns {number} index for provided value at the current scale
	*/
	mapToIndex(value) {
		if (value <= MIN_VALUE) return this._minNormalLowerBoundaryIndex() - 1;
		if (getSignificand(value) === 0) return (getNormalBase2(value) << this._scale) - 1;
		const index = Math.floor(Math.log(value) * this._scaleFactor);
		const maxIndex = this._maxNormalLowerBoundaryIndex();
		if (index >= maxIndex) return maxIndex;
		return index;
	}
	/**
	* Returns the lower bucket boundary for the given index for scale
	*
	* @param index
	* @returns {number}
	*/
	lowerBoundary(index) {
		const maxIndex = this._maxNormalLowerBoundaryIndex();
		if (index >= maxIndex) {
			if (index === maxIndex) return 2 * Math.exp((index - (1 << this._scale)) / this._scaleFactor);
			throw new MappingError(`overflow: ${index} is > maximum lower boundary: ${maxIndex}`);
		}
		const minIndex = this._minNormalLowerBoundaryIndex();
		if (index <= minIndex) {
			if (index === minIndex) return MIN_VALUE;
			else if (index === minIndex - 1) return Math.exp((index + (1 << this._scale)) / this._scaleFactor) / 2;
			throw new MappingError(`overflow: ${index} is < minimum lower boundary: ${minIndex}`);
		}
		return Math.exp(index * this._inverseFactor);
	}
	/**
	* The scale used by this mapping
	* @returns {number}
	*/
	get scale() {
		return this._scale;
	}
	_minNormalLowerBoundaryIndex() {
		return MIN_NORMAL_EXPONENT << this._scale;
	}
	_maxNormalLowerBoundaryIndex() {
		return (MAX_NORMAL_EXPONENT + 1 << this._scale) - 1;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/exponential-histogram/mapping/getMapping.js
var MIN_SCALE = -10;
var MAX_SCALE$1 = 20;
var PREBUILT_MAPPINGS = Array.from({ length: 31 }, (_, i) => {
	if (i > 10) return new LogarithmMapping(i - 10);
	return new ExponentMapping(i - 10);
});
/**
* getMapping returns an appropriate mapping for the given scale. For scales -10
* to 0 the underlying type will be ExponentMapping. For scales 1 to 20 the
* underlying type will be LogarithmMapping.
* @param scale a number in the range [-10, 20]
* @returns {Mapping}
*/
function getMapping(scale) {
	if (scale > MAX_SCALE$1 || scale < MIN_SCALE) throw new MappingError(`expected scale >= ${MIN_SCALE} && <= ${MAX_SCALE$1}, got: ${scale}`);
	return PREBUILT_MAPPINGS[scale + 10];
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/ExponentialHistogram.js
var HighLow = class HighLow {
	static combine(h1, h2) {
		return new HighLow(Math.min(h1.low, h2.low), Math.max(h1.high, h2.high));
	}
	low;
	high;
	constructor(low, high) {
		this.low = low;
		this.high = high;
	}
};
var MAX_SCALE = 20;
var DEFAULT_MAX_SIZE = 160;
var MIN_MAX_SIZE = 2;
var ExponentialHistogramAccumulation = class ExponentialHistogramAccumulation {
	startTime;
	_maxSize;
	_recordMinMax;
	_sum;
	_count;
	_zeroCount;
	_min;
	_max;
	_positive;
	_negative;
	_mapping;
	constructor(startTime, maxSize = DEFAULT_MAX_SIZE, recordMinMax = true, sum = 0, count = 0, zeroCount = 0, min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY, positive = new Buckets(), negative = new Buckets(), mapping = getMapping(MAX_SCALE)) {
		this.startTime = startTime;
		this._maxSize = maxSize;
		this._recordMinMax = recordMinMax;
		this._sum = sum;
		this._count = count;
		this._zeroCount = zeroCount;
		this._min = min;
		this._max = max;
		this._positive = positive;
		this._negative = negative;
		this._mapping = mapping;
		if (this._maxSize < MIN_MAX_SIZE) {
			diag.warn(`Exponential Histogram Max Size set to ${this._maxSize}, \
                changing to the minimum size of: ${MIN_MAX_SIZE}`);
			this._maxSize = MIN_MAX_SIZE;
		}
	}
	/**
	* record updates a histogram with a single count
	* @param {Number} value
	*/
	record(value) {
		this.updateByIncrement(value, 1);
	}
	/**
	* Sets the start time for this accumulation
	* @param {HrTime} startTime
	*/
	setStartTime(startTime) {
		this.startTime = startTime;
	}
	/**
	* Returns the datapoint representation of this accumulation
	* @param {HrTime} startTime
	*/
	toPointValue() {
		return {
			hasMinMax: this._recordMinMax,
			min: this.min,
			max: this.max,
			sum: this.sum,
			positive: {
				offset: this.positive.offset,
				bucketCounts: this.positive.counts()
			},
			negative: {
				offset: this.negative.offset,
				bucketCounts: this.negative.counts()
			},
			count: this.count,
			scale: this.scale,
			zeroCount: this.zeroCount
		};
	}
	/**
	* @returns {Number} The sum of values recorded by this accumulation
	*/
	get sum() {
		return this._sum;
	}
	/**
	* @returns {Number} The minimum value recorded by this accumulation
	*/
	get min() {
		return this._min;
	}
	/**
	* @returns {Number} The maximum value recorded by this accumulation
	*/
	get max() {
		return this._max;
	}
	/**
	* @returns {Number} The count of values recorded by this accumulation
	*/
	get count() {
		return this._count;
	}
	/**
	* @returns {Number} The number of 0 values recorded by this accumulation
	*/
	get zeroCount() {
		return this._zeroCount;
	}
	/**
	* @returns {Number} The scale used by this accumulation
	*/
	get scale() {
		if (this._count === this._zeroCount) return 0;
		return this._mapping.scale;
	}
	/**
	* positive holds the positive values
	* @returns {Buckets}
	*/
	get positive() {
		return this._positive;
	}
	/**
	* negative holds the negative values by their absolute value
	* @returns {Buckets}
	*/
	get negative() {
		return this._negative;
	}
	/**
	* updateByIncr supports updating a histogram with a non-negative
	* increment.
	* @param value
	* @param increment
	*/
	updateByIncrement(value, increment) {
		if (Number.isNaN(value)) return;
		if (value > this._max) this._max = value;
		if (value < this._min) this._min = value;
		this._count += increment;
		if (value === 0) {
			this._zeroCount += increment;
			return;
		}
		this._sum += value * increment;
		if (value > 0) this._updateBuckets(this._positive, value, increment);
		else this._updateBuckets(this._negative, -value, increment);
	}
	/**
	* merge combines data from previous value into self
	* @param {ExponentialHistogramAccumulation} previous
	*/
	merge(previous) {
		if (this._count === 0) {
			this._min = previous.min;
			this._max = previous.max;
		} else if (previous.count !== 0) {
			if (previous.min < this.min) this._min = previous.min;
			if (previous.max > this.max) this._max = previous.max;
		}
		this.startTime = previous.startTime;
		this._sum += previous.sum;
		this._count += previous.count;
		this._zeroCount += previous.zeroCount;
		const minScale = this._minScale(previous);
		this._downscale(this.scale - minScale);
		this._mergeBuckets(this.positive, previous, previous.positive, minScale);
		this._mergeBuckets(this.negative, previous, previous.negative, minScale);
	}
	/**
	* diff subtracts other from self
	* @param {ExponentialHistogramAccumulation} other
	*/
	diff(other) {
		this._min = Infinity;
		this._max = -Infinity;
		this._sum -= other.sum;
		this._count -= other.count;
		this._zeroCount -= other.zeroCount;
		const minScale = this._minScale(other);
		this._downscale(this.scale - minScale);
		this._diffBuckets(this.positive, other, other.positive, minScale);
		this._diffBuckets(this.negative, other, other.negative, minScale);
	}
	/**
	* clone returns a deep copy of self
	* @returns {ExponentialHistogramAccumulation}
	*/
	clone() {
		return new ExponentialHistogramAccumulation(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping);
	}
	/**
	* _updateBuckets maps the incoming value to a bucket index for the current
	* scale. If the bucket index is outside of the range of the backing array,
	* it will rescale the backing array and update the mapping for the new scale.
	*/
	_updateBuckets(buckets, value, increment) {
		let index = this._mapping.mapToIndex(value);
		let rescalingNeeded = false;
		let high = 0;
		let low = 0;
		if (buckets.length === 0) {
			buckets.indexStart = index;
			buckets.indexEnd = buckets.indexStart;
			buckets.indexBase = buckets.indexStart;
		} else if (index < buckets.indexStart && buckets.indexEnd - index >= this._maxSize) {
			rescalingNeeded = true;
			low = index;
			high = buckets.indexEnd;
		} else if (index > buckets.indexEnd && index - buckets.indexStart >= this._maxSize) {
			rescalingNeeded = true;
			low = buckets.indexStart;
			high = index;
		}
		if (rescalingNeeded) {
			const change = this._changeScale(high, low);
			this._downscale(change);
			index = this._mapping.mapToIndex(value);
		}
		this._incrementIndexBy(buckets, index, increment);
	}
	/**
	* _incrementIndexBy increments the count of the bucket specified by `index`.
	* If the index is outside of the range [buckets.indexStart, buckets.indexEnd]
	* the boundaries of the backing array will be adjusted and more buckets will
	* be added if needed.
	*/
	_incrementIndexBy(buckets, index, increment) {
		if (increment === 0) return;
		if (buckets.length === 0) buckets.indexStart = buckets.indexEnd = buckets.indexBase = index;
		if (index < buckets.indexStart) {
			const span = buckets.indexEnd - index;
			if (span >= buckets.backing.length) this._grow(buckets, span + 1);
			buckets.indexStart = index;
		} else if (index > buckets.indexEnd) {
			const span = index - buckets.indexStart;
			if (span >= buckets.backing.length) this._grow(buckets, span + 1);
			buckets.indexEnd = index;
		}
		let bucketIndex = index - buckets.indexBase;
		if (bucketIndex < 0) bucketIndex += buckets.backing.length;
		buckets.incrementBucket(bucketIndex, increment);
	}
	/**
	* grow resizes the backing array by doubling in size up to maxSize.
	* This extends the array with a bunch of zeros and copies the
	* existing counts to the same position.
	*/
	_grow(buckets, needed) {
		const size = buckets.backing.length;
		const bias = buckets.indexBase - buckets.indexStart;
		const oldPositiveLimit = size - bias;
		let newSize = nextGreaterSquare(needed);
		if (newSize > this._maxSize) newSize = this._maxSize;
		const newPositiveLimit = newSize - bias;
		buckets.backing.growTo(newSize, oldPositiveLimit, newPositiveLimit);
	}
	/**
	* _changeScale computes how much downscaling is needed by shifting the
	* high and low values until they are separated by no more than size.
	*/
	_changeScale(high, low) {
		let change = 0;
		while (high - low >= this._maxSize) {
			high >>= 1;
			low >>= 1;
			change++;
		}
		return change;
	}
	/**
	* _downscale subtracts `change` from the current mapping scale.
	*/
	_downscale(change) {
		if (change === 0) return;
		if (change < 0) throw new Error(`impossible change of scale: ${this.scale}`);
		const newScale = this._mapping.scale - change;
		this._positive.downscale(change);
		this._negative.downscale(change);
		this._mapping = getMapping(newScale);
	}
	/**
	* _minScale is used by diff and merge to compute an ideal combined scale
	*/
	_minScale(other) {
		const minScale = Math.min(this.scale, other.scale);
		const highLowPos = HighLow.combine(this._highLowAtScale(this.positive, this.scale, minScale), this._highLowAtScale(other.positive, other.scale, minScale));
		const highLowNeg = HighLow.combine(this._highLowAtScale(this.negative, this.scale, minScale), this._highLowAtScale(other.negative, other.scale, minScale));
		return Math.min(minScale - this._changeScale(highLowPos.high, highLowPos.low), minScale - this._changeScale(highLowNeg.high, highLowNeg.low));
	}
	/**
	* _highLowAtScale is used by diff and merge to compute an ideal combined scale.
	*/
	_highLowAtScale(buckets, currentScale, newScale) {
		if (buckets.length === 0) return new HighLow(0, -1);
		const shift = currentScale - newScale;
		return new HighLow(buckets.indexStart >> shift, buckets.indexEnd >> shift);
	}
	/**
	* _mergeBuckets translates index values from another histogram and
	* adds the values into the corresponding buckets of this histogram.
	*/
	_mergeBuckets(ours, other, theirs, scale) {
		const theirOffset = theirs.offset;
		const theirChange = other.scale - scale;
		for (let i = 0; i < theirs.length; i++) this._incrementIndexBy(ours, theirOffset + i >> theirChange, theirs.at(i));
	}
	/**
	* _diffBuckets translates index values from another histogram and
	* subtracts the values in the corresponding buckets of this histogram.
	*/
	_diffBuckets(ours, other, theirs, scale) {
		const theirOffset = theirs.offset;
		const theirChange = other.scale - scale;
		for (let i = 0; i < theirs.length; i++) {
			let bucketIndex = (theirOffset + i >> theirChange) - ours.indexBase;
			if (bucketIndex < 0) bucketIndex += ours.backing.length;
			ours.decrementBucket(bucketIndex, theirs.at(i));
		}
		ours.trim();
	}
};
/**
* Aggregator for ExponentialHistogramAccumulations
*/
var ExponentialHistogramAggregator = class {
	kind = AggregatorKind.EXPONENTIAL_HISTOGRAM;
	_maxSize;
	_recordMinMax;
	/**
	* @param _maxSize Maximum number of buckets for each of the positive
	*    and negative ranges, exclusive of the zero-bucket.
	* @param _recordMinMax If set to true, min and max will be recorded.
	*    Otherwise, min and max will not be recorded.
	*/
	constructor(maxSize, recordMinMax) {
		this._maxSize = maxSize;
		this._recordMinMax = recordMinMax;
	}
	createAccumulation(startTime) {
		return new ExponentialHistogramAccumulation(startTime, this._maxSize, this._recordMinMax);
	}
	/**
	* Return the result of the merge of two exponential histogram accumulations.
	*/
	merge(previous, delta) {
		const result = delta.clone();
		result.merge(previous);
		return result;
	}
	/**
	* Returns a new DELTA aggregation by comparing two cumulative measurements.
	*/
	diff(previous, current) {
		const result = current.clone();
		result.diff(previous);
		return result;
	}
	toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
		return {
			descriptor,
			aggregationTemporality,
			dataPointType: DataPointType.EXPONENTIAL_HISTOGRAM,
			dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
				const pointValue = accumulation.toPointValue();
				return {
					attributes,
					startTime: accumulation.startTime,
					endTime,
					value: {
						min: pointValue.hasMinMax ? pointValue.min : void 0,
						max: pointValue.hasMinMax ? pointValue.max : void 0,
						sum: !(descriptor.type === InstrumentType.GAUGE || descriptor.type === InstrumentType.UP_DOWN_COUNTER || descriptor.type === InstrumentType.OBSERVABLE_GAUGE || descriptor.type === InstrumentType.OBSERVABLE_UP_DOWN_COUNTER) ? pointValue.sum : void 0,
						positive: {
							offset: pointValue.positive.offset,
							bucketCounts: pointValue.positive.bucketCounts
						},
						negative: {
							offset: pointValue.negative.offset,
							bucketCounts: pointValue.negative.bucketCounts
						},
						count: pointValue.count,
						scale: pointValue.scale,
						zeroCount: pointValue.zeroCount
					}
				};
			})
		};
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/LastValue.js
var LastValueAccumulation = class {
	startTime;
	_current;
	sampleTime;
	constructor(startTime, current = 0, sampleTime = [0, 0]) {
		this.startTime = startTime;
		this._current = current;
		this.sampleTime = sampleTime;
	}
	record(value) {
		this._current = value;
		this.sampleTime = millisToHrTime(Date.now());
	}
	setStartTime(startTime) {
		this.startTime = startTime;
	}
	toPointValue() {
		return this._current;
	}
};
/** Basic aggregator which calculates a LastValue from individual measurements. */
var LastValueAggregator = class {
	kind = AggregatorKind.LAST_VALUE;
	createAccumulation(startTime) {
		return new LastValueAccumulation(startTime);
	}
	/**
	* Returns the result of the merge of the given accumulations.
	*
	* Return the newly captured (delta) accumulation for LastValueAggregator.
	*/
	merge(previous, delta) {
		const latestAccumulation = hrTimeToMicroseconds(delta.sampleTime) >= hrTimeToMicroseconds(previous.sampleTime) ? delta : previous;
		return new LastValueAccumulation(previous.startTime, latestAccumulation.toPointValue(), latestAccumulation.sampleTime);
	}
	/**
	* Returns a new DELTA aggregation by comparing two cumulative measurements.
	*
	* A delta aggregation is not meaningful to LastValueAggregator, just return
	* the newly captured (delta) accumulation for LastValueAggregator.
	*/
	diff(previous, current) {
		const latestAccumulation = hrTimeToMicroseconds(current.sampleTime) >= hrTimeToMicroseconds(previous.sampleTime) ? current : previous;
		return new LastValueAccumulation(current.startTime, latestAccumulation.toPointValue(), latestAccumulation.sampleTime);
	}
	toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
		return {
			descriptor,
			aggregationTemporality,
			dataPointType: DataPointType.GAUGE,
			dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
				return {
					attributes,
					startTime: accumulation.startTime,
					endTime,
					value: accumulation.toPointValue()
				};
			})
		};
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/aggregator/Sum.js
var SumAccumulation = class {
	startTime;
	monotonic;
	_current;
	reset;
	constructor(startTime, monotonic, current = 0, reset = false) {
		this.startTime = startTime;
		this.monotonic = monotonic;
		this._current = current;
		this.reset = reset;
	}
	record(value) {
		if (this.monotonic && value < 0) return;
		this._current += value;
	}
	setStartTime(startTime) {
		this.startTime = startTime;
	}
	toPointValue() {
		return this._current;
	}
};
/** Basic aggregator which calculates a Sum from individual measurements. */
var SumAggregator = class {
	kind = AggregatorKind.SUM;
	monotonic;
	constructor(monotonic) {
		this.monotonic = monotonic;
	}
	createAccumulation(startTime) {
		return new SumAccumulation(startTime, this.monotonic);
	}
	/**
	* Returns the result of the merge of the given accumulations.
	*/
	merge(previous, delta) {
		const prevPv = previous.toPointValue();
		const deltaPv = delta.toPointValue();
		if (delta.reset) return new SumAccumulation(delta.startTime, this.monotonic, deltaPv, delta.reset);
		return new SumAccumulation(previous.startTime, this.monotonic, prevPv + deltaPv);
	}
	/**
	* Returns a new DELTA aggregation by comparing two cumulative measurements.
	*/
	diff(previous, current) {
		const prevPv = previous.toPointValue();
		const currPv = current.toPointValue();
		/**
		* If the SumAggregator is a monotonic one and the previous point value is
		* greater than the current one, a reset is deemed to be happened.
		* Return the current point value to prevent the value from been reset.
		*/
		if (this.monotonic && prevPv > currPv) return new SumAccumulation(current.startTime, this.monotonic, currPv, true);
		return new SumAccumulation(current.startTime, this.monotonic, currPv - prevPv);
	}
	toMetricData(descriptor, aggregationTemporality, accumulationByAttributes, endTime) {
		return {
			descriptor,
			aggregationTemporality,
			dataPointType: DataPointType.SUM,
			dataPoints: accumulationByAttributes.map(([attributes, accumulation]) => {
				return {
					attributes,
					startTime: accumulation.startTime,
					endTime,
					value: accumulation.toPointValue()
				};
			}),
			isMonotonic: this.monotonic
		};
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/view/Aggregation.js
/**
* The default drop aggregation.
*/
var DropAggregation = class DropAggregation {
	static DEFAULT_INSTANCE = new DropAggregator();
	createAggregator(_instrument) {
		return DropAggregation.DEFAULT_INSTANCE;
	}
};
/**
* The default sum aggregation.
*/
var SumAggregation = class SumAggregation {
	static MONOTONIC_INSTANCE = new SumAggregator(true);
	static NON_MONOTONIC_INSTANCE = new SumAggregator(false);
	createAggregator(instrument) {
		switch (instrument.type) {
			case InstrumentType.COUNTER:
			case InstrumentType.OBSERVABLE_COUNTER:
			case InstrumentType.HISTOGRAM: return SumAggregation.MONOTONIC_INSTANCE;
			default: return SumAggregation.NON_MONOTONIC_INSTANCE;
		}
	}
};
/**
* The default last value aggregation.
*/
var LastValueAggregation = class LastValueAggregation {
	static DEFAULT_INSTANCE = new LastValueAggregator();
	createAggregator(_instrument) {
		return LastValueAggregation.DEFAULT_INSTANCE;
	}
};
/**
* The default histogram aggregation.

*/
var HistogramAggregation = class HistogramAggregation {
	static DEFAULT_INSTANCE = new HistogramAggregator([
		0,
		5,
		10,
		25,
		50,
		75,
		100,
		250,
		500,
		750,
		1e3,
		2500,
		5e3,
		7500,
		1e4
	], true);
	createAggregator(_instrument) {
		return HistogramAggregation.DEFAULT_INSTANCE;
	}
};
/**
* The explicit bucket histogram aggregation.
*/
var ExplicitBucketHistogramAggregation = class {
	_boundaries;
	_recordMinMax;
	/**
	* @param boundaries the bucket boundaries of the histogram aggregation
	* @param _recordMinMax If set to true, min and max will be recorded. Otherwise, min and max will not be recorded.
	*/
	constructor(boundaries, recordMinMax = true) {
		if (boundaries == null) throw new Error("ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array");
		boundaries = boundaries.concat();
		boundaries = boundaries.sort((a, b) => a - b);
		const minusInfinityIndex = boundaries.lastIndexOf(-Infinity);
		let infinityIndex = boundaries.indexOf(Infinity);
		if (infinityIndex === -1) infinityIndex = void 0;
		this._boundaries = boundaries.slice(minusInfinityIndex + 1, infinityIndex);
		this._recordMinMax = recordMinMax;
	}
	createAggregator(_instrument) {
		return new HistogramAggregator(this._boundaries, this._recordMinMax);
	}
};
var ExponentialHistogramAggregation = class {
	_maxSize;
	_recordMinMax;
	constructor(maxSize = 160, recordMinMax = true) {
		this._maxSize = maxSize;
		this._recordMinMax = recordMinMax;
	}
	createAggregator(_instrument) {
		return new ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
	}
};
/**
* The default aggregation.
*/
var DefaultAggregation = class {
	_resolve(instrument) {
		switch (instrument.type) {
			case InstrumentType.COUNTER:
			case InstrumentType.UP_DOWN_COUNTER:
			case InstrumentType.OBSERVABLE_COUNTER:
			case InstrumentType.OBSERVABLE_UP_DOWN_COUNTER: return SUM_AGGREGATION;
			case InstrumentType.GAUGE:
			case InstrumentType.OBSERVABLE_GAUGE: return LAST_VALUE_AGGREGATION;
			case InstrumentType.HISTOGRAM:
				if (instrument.advice.explicitBucketBoundaries) return new ExplicitBucketHistogramAggregation(instrument.advice.explicitBucketBoundaries);
				return HISTOGRAM_AGGREGATION;
		}
		diag.warn(`Unable to recognize instrument type: ${instrument.type}`);
		return DROP_AGGREGATION;
	}
	createAggregator(instrument) {
		return this._resolve(instrument).createAggregator(instrument);
	}
};
var DROP_AGGREGATION = new DropAggregation();
var SUM_AGGREGATION = new SumAggregation();
var LAST_VALUE_AGGREGATION = new LastValueAggregation();
var HISTOGRAM_AGGREGATION = new HistogramAggregation();
new ExponentialHistogramAggregation();
var DEFAULT_AGGREGATION$1 = new DefaultAggregation();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/view/AggregationOption.js
var AggregationType;
(function(AggregationType) {
	AggregationType[AggregationType["DEFAULT"] = 0] = "DEFAULT";
	AggregationType[AggregationType["DROP"] = 1] = "DROP";
	AggregationType[AggregationType["SUM"] = 2] = "SUM";
	AggregationType[AggregationType["LAST_VALUE"] = 3] = "LAST_VALUE";
	AggregationType[AggregationType["EXPLICIT_BUCKET_HISTOGRAM"] = 4] = "EXPLICIT_BUCKET_HISTOGRAM";
	AggregationType[AggregationType["EXPONENTIAL_HISTOGRAM"] = 5] = "EXPONENTIAL_HISTOGRAM";
})(AggregationType || (AggregationType = {}));
function toAggregation(option) {
	switch (option.type) {
		case AggregationType.DEFAULT: return DEFAULT_AGGREGATION$1;
		case AggregationType.DROP: return DROP_AGGREGATION;
		case AggregationType.SUM: return SUM_AGGREGATION;
		case AggregationType.LAST_VALUE: return LAST_VALUE_AGGREGATION;
		case AggregationType.EXPONENTIAL_HISTOGRAM: {
			const expOption = option;
			return new ExponentialHistogramAggregation(expOption.options?.maxSize, expOption.options?.recordMinMax);
		}
		case AggregationType.EXPLICIT_BUCKET_HISTOGRAM: {
			const expOption = option;
			if (expOption.options == null) return HISTOGRAM_AGGREGATION;
			else return new ExplicitBucketHistogramAggregation(expOption.options?.boundaries, expOption.options?.recordMinMax);
		}
		default: throw new Error("Unsupported Aggregation");
	}
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/export/AggregationSelector.js
var DEFAULT_AGGREGATION_SELECTOR = (_instrumentType) => {
	return { type: AggregationType.DEFAULT };
};
var DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = (_instrumentType) => AggregationTemporality.CUMULATIVE;
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/export/MetricReader.js
/**
* A registered reader of metrics that, when linked to a {@link MetricProducer}, offers global
* control over metrics.
*/
var MetricReader = class {
	_shutdown = false;
	_metricProducers;
	_sdkMetricProducer;
	_aggregationTemporalitySelector;
	_aggregationSelector;
	_cardinalitySelector;
	constructor(options) {
		this._aggregationSelector = options?.aggregationSelector ?? DEFAULT_AGGREGATION_SELECTOR;
		this._aggregationTemporalitySelector = options?.aggregationTemporalitySelector ?? DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
		this._metricProducers = options?.metricProducers ?? [];
		this._cardinalitySelector = options?.cardinalitySelector;
	}
	setMetricProducer(metricProducer) {
		if (this._sdkMetricProducer) throw new Error("MetricReader can not be bound to a MeterProvider again.");
		this._sdkMetricProducer = metricProducer;
		this.onInitialized();
	}
	selectAggregation(instrumentType) {
		return this._aggregationSelector(instrumentType);
	}
	selectAggregationTemporality(instrumentType) {
		return this._aggregationTemporalitySelector(instrumentType);
	}
	selectCardinalityLimit(instrumentType) {
		return this._cardinalitySelector ? this._cardinalitySelector(instrumentType) : 2e3;
	}
	/**
	* Handle once the SDK has initialized this {@link MetricReader}
	* Overriding this method is optional.
	*/
	onInitialized() {}
	async collect(options) {
		if (this._sdkMetricProducer === void 0) throw new Error("MetricReader is not bound to a MetricProducer");
		if (this._shutdown) throw new Error("MetricReader is shutdown");
		const [sdkCollectionResults, ...additionalCollectionResults] = await Promise.all([this._sdkMetricProducer.collect({ timeoutMillis: options?.timeoutMillis }), ...this._metricProducers.map((producer) => producer.collect({ timeoutMillis: options?.timeoutMillis }))]);
		const errors = sdkCollectionResults.errors.concat(additionalCollectionResults.flatMap((result) => result.errors));
		return {
			resourceMetrics: {
				resource: sdkCollectionResults.resourceMetrics.resource,
				scopeMetrics: sdkCollectionResults.resourceMetrics.scopeMetrics.concat(additionalCollectionResults.flatMap((result) => result.resourceMetrics.scopeMetrics))
			},
			errors
		};
	}
	async shutdown(options) {
		if (this._shutdown) {
			diag.error("Cannot call shutdown twice.");
			return;
		}
		if (options?.timeoutMillis == null) await this.onShutdown();
		else await callWithTimeout(this.onShutdown(), options.timeoutMillis);
		this._shutdown = true;
	}
	async forceFlush(options) {
		if (this._shutdown) {
			diag.warn("Cannot forceFlush on already shutdown MetricReader.");
			return;
		}
		if (options?.timeoutMillis == null) {
			await this.onForceFlush();
			return;
		}
		await callWithTimeout(this.onForceFlush(), options.timeoutMillis);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/export/PeriodicExportingMetricReader.js
/**
* {@link MetricReader} which collects metrics based on a user-configurable time interval, and passes the metrics to
* the configured {@link PushMetricExporter}
*/
var PeriodicExportingMetricReader = class extends MetricReader {
	_interval;
	_exporter;
	_exportInterval;
	_exportTimeout;
	constructor(options) {
		const { exporter, exportIntervalMillis = 6e4, metricProducers, cardinalityLimits } = options;
		let { exportTimeoutMillis = 3e4 } = options;
		super({
			aggregationSelector: exporter.selectAggregation?.bind(exporter),
			aggregationTemporalitySelector: exporter.selectAggregationTemporality?.bind(exporter),
			metricProducers,
			cardinalitySelector: (instrumentType) => {
				const limits = {
					default: 2e3,
					...cardinalityLimits
				};
				switch (instrumentType) {
					case InstrumentType.COUNTER: return limits.counter ?? limits.default;
					case InstrumentType.GAUGE: return limits.gauge ?? limits.default;
					case InstrumentType.HISTOGRAM: return limits.histogram ?? limits.default;
					case InstrumentType.OBSERVABLE_COUNTER: return limits.observableCounter ?? limits.default;
					case InstrumentType.OBSERVABLE_UP_DOWN_COUNTER: return limits.observableUpDownCounter ?? limits.default;
					case InstrumentType.OBSERVABLE_GAUGE: return limits.observableGauge ?? limits.default;
					case InstrumentType.UP_DOWN_COUNTER: return limits.upDownCounter ?? limits.default;
					default: return limits.default;
				}
			}
		});
		if (exportIntervalMillis <= 0) throw Error("exportIntervalMillis must be greater than 0");
		if (exportTimeoutMillis <= 0) throw Error("exportTimeoutMillis must be greater than 0");
		if (exportIntervalMillis < exportTimeoutMillis) if ("exportIntervalMillis" in options && "exportTimeoutMillis" in options) throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
		else {
			diag.info(`Timeout of ${exportTimeoutMillis} exceeds the interval of ${exportIntervalMillis}. Clamping timeout to interval duration.`);
			exportTimeoutMillis = exportIntervalMillis;
		}
		this._exportInterval = exportIntervalMillis;
		this._exportTimeout = exportTimeoutMillis;
		this._exporter = exporter;
	}
	async _runOnce() {
		try {
			await callWithTimeout(this._doRun(), this._exportTimeout);
		} catch (err) {
			if (err instanceof TimeoutError) {
				diag.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
				return;
			}
			globalErrorHandler(err);
		}
	}
	async _doRun() {
		const { resourceMetrics, errors } = await this.collect({ timeoutMillis: this._exportTimeout });
		if (errors.length > 0) diag.error("PeriodicExportingMetricReader: metrics collection errors", ...errors);
		if (resourceMetrics.resource.asyncAttributesPending) try {
			await resourceMetrics.resource.waitForAsyncAttributes?.();
		} catch (e) {
			diag.debug("Error while resolving async portion of resource: ", e);
			globalErrorHandler(e);
		}
		if (resourceMetrics.scopeMetrics.length === 0) return;
		const result = await internal._export(this._exporter, resourceMetrics);
		if (result.code !== ExportResultCode.SUCCESS) throw new Error(`PeriodicExportingMetricReader: metrics export failed (error ${result.error})`);
	}
	onInitialized() {
		this._interval = setInterval(() => {
			this._runOnce();
		}, this._exportInterval);
		if (typeof this._interval !== "number") this._interval.unref();
	}
	async onForceFlush() {
		await this._runOnce();
		await this._exporter.forceFlush();
	}
	async onShutdown() {
		if (this._interval) clearInterval(this._interval);
		await this.onForceFlush();
		await this._exporter.shutdown();
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/view/ViewRegistry.js
var ViewRegistry = class {
	_registeredViews = [];
	addView(view) {
		this._registeredViews.push(view);
	}
	findViews(instrument, meter) {
		return this._registeredViews.filter((registeredView) => {
			return this._matchInstrument(registeredView.instrumentSelector, instrument) && this._matchMeter(registeredView.meterSelector, meter);
		});
	}
	_matchInstrument(selector, instrument) {
		return (selector.getType() === void 0 || instrument.type === selector.getType()) && selector.getNameFilter().match(instrument.name) && selector.getUnitFilter().match(instrument.unit);
	}
	_matchMeter(selector, meter) {
		return selector.getNameFilter().match(meter.name) && (meter.version === void 0 || selector.getVersionFilter().match(meter.version)) && (meter.schemaUrl === void 0 || selector.getSchemaUrlFilter().match(meter.schemaUrl));
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/InstrumentDescriptor.js
function createInstrumentDescriptor(name, type, options) {
	if (!isValidName(name)) diag.warn(`Invalid metric name: "${name}". The metric name should be a ASCII string with a length no greater than 255 characters.`);
	return {
		name,
		type,
		description: options?.description ?? "",
		unit: options?.unit ?? "",
		valueType: options?.valueType ?? ValueType.DOUBLE,
		advice: options?.advice ?? {}
	};
}
function createInstrumentDescriptorWithView(view, instrument) {
	return {
		name: view.name ?? instrument.name,
		description: view.description ?? instrument.description,
		type: instrument.type,
		unit: instrument.unit,
		valueType: instrument.valueType,
		advice: instrument.advice
	};
}
function isDescriptorCompatibleWith(descriptor, otherDescriptor) {
	return equalsCaseInsensitive(descriptor.name, otherDescriptor.name) && descriptor.unit === otherDescriptor.unit && descriptor.type === otherDescriptor.type && descriptor.valueType === otherDescriptor.valueType;
}
var NAME_REGEXP = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
function isValidName(name) {
	return NAME_REGEXP.test(name);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/Instruments.js
var SyncInstrument = class {
	_writableMetricStorage;
	_descriptor;
	constructor(writableMetricStorage, descriptor) {
		this._writableMetricStorage = writableMetricStorage;
		this._descriptor = descriptor;
	}
	_record(value, attributes = {}, context$2 = context.active()) {
		if (typeof value !== "number") {
			diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${value}`);
			return;
		}
		if (this._descriptor.valueType === ValueType.INT && !Number.isInteger(value)) {
			diag.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`);
			value = Math.trunc(value);
			if (!Number.isInteger(value)) return;
		}
		this._writableMetricStorage.record(value, attributes, context$2, millisToHrTime(Date.now()));
	}
};
/**
* The class implements {@link UpDownCounter} interface.
*/
var UpDownCounterInstrument = class extends SyncInstrument {
	/**
	* Increment value of counter by the input. Inputs may be negative.
	*/
	add(value, attributes, ctx) {
		this._record(value, attributes, ctx);
	}
};
/**
* The class implements {@link Counter} interface.
*/
var CounterInstrument = class extends SyncInstrument {
	/**
	* Increment value of counter by the input. Inputs may not be negative.
	*/
	add(value, attributes, ctx) {
		if (value < 0) {
			diag.warn(`negative value provided to counter ${this._descriptor.name}: ${value}`);
			return;
		}
		this._record(value, attributes, ctx);
	}
};
/**
* The class implements {@link Gauge} interface.
*/
var GaugeInstrument = class extends SyncInstrument {
	/**
	* Records a measurement.
	*/
	record(value, attributes, ctx) {
		this._record(value, attributes, ctx);
	}
};
/**
* The class implements {@link Histogram} interface.
*/
var HistogramInstrument = class extends SyncInstrument {
	/**
	* Records a measurement. Value of the measurement must not be negative.
	*/
	record(value, attributes, ctx) {
		if (value < 0) {
			diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${value}`);
			return;
		}
		this._record(value, attributes, ctx);
	}
};
var ObservableInstrument = class {
	/** @internal */
	_metricStorages;
	/** @internal */
	_descriptor;
	_observableRegistry;
	constructor(descriptor, metricStorages, observableRegistry) {
		this._descriptor = descriptor;
		this._metricStorages = metricStorages;
		this._observableRegistry = observableRegistry;
	}
	/**
	* @see {Observable.addCallback}
	*/
	addCallback(callback) {
		this._observableRegistry.addCallback(callback, this);
	}
	/**
	* @see {Observable.removeCallback}
	*/
	removeCallback(callback) {
		this._observableRegistry.removeCallback(callback, this);
	}
};
var ObservableCounterInstrument = class extends ObservableInstrument {};
var ObservableGaugeInstrument = class extends ObservableInstrument {};
var ObservableUpDownCounterInstrument = class extends ObservableInstrument {};
function isObservableInstrument(it) {
	return it instanceof ObservableInstrument;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/Meter.js
/**
* This class implements the {@link IMeter} interface.
*/
var Meter = class {
	_meterSharedState;
	constructor(meterSharedState) {
		this._meterSharedState = meterSharedState;
	}
	/**
	* Create a {@link Gauge} instrument.
	*/
	createGauge(name, options) {
		const descriptor = createInstrumentDescriptor(name, InstrumentType.GAUGE, options);
		return new GaugeInstrument(this._meterSharedState.registerMetricStorage(descriptor), descriptor);
	}
	/**
	* Create a {@link Histogram} instrument.
	*/
	createHistogram(name, options) {
		const descriptor = createInstrumentDescriptor(name, InstrumentType.HISTOGRAM, options);
		return new HistogramInstrument(this._meterSharedState.registerMetricStorage(descriptor), descriptor);
	}
	/**
	* Create a {@link Counter} instrument.
	*/
	createCounter(name, options) {
		const descriptor = createInstrumentDescriptor(name, InstrumentType.COUNTER, options);
		return new CounterInstrument(this._meterSharedState.registerMetricStorage(descriptor), descriptor);
	}
	/**
	* Create a {@link UpDownCounter} instrument.
	*/
	createUpDownCounter(name, options) {
		const descriptor = createInstrumentDescriptor(name, InstrumentType.UP_DOWN_COUNTER, options);
		return new UpDownCounterInstrument(this._meterSharedState.registerMetricStorage(descriptor), descriptor);
	}
	/**
	* Create a {@link ObservableGauge} instrument.
	*/
	createObservableGauge(name, options) {
		const descriptor = createInstrumentDescriptor(name, InstrumentType.OBSERVABLE_GAUGE, options);
		return new ObservableGaugeInstrument(descriptor, this._meterSharedState.registerAsyncMetricStorage(descriptor), this._meterSharedState.observableRegistry);
	}
	/**
	* Create a {@link ObservableCounter} instrument.
	*/
	createObservableCounter(name, options) {
		const descriptor = createInstrumentDescriptor(name, InstrumentType.OBSERVABLE_COUNTER, options);
		return new ObservableCounterInstrument(descriptor, this._meterSharedState.registerAsyncMetricStorage(descriptor), this._meterSharedState.observableRegistry);
	}
	/**
	* Create a {@link ObservableUpDownCounter} instrument.
	*/
	createObservableUpDownCounter(name, options) {
		const descriptor = createInstrumentDescriptor(name, InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, options);
		return new ObservableUpDownCounterInstrument(descriptor, this._meterSharedState.registerAsyncMetricStorage(descriptor), this._meterSharedState.observableRegistry);
	}
	/**
	* @see {@link Meter.addBatchObservableCallback}
	*/
	addBatchObservableCallback(callback, observables) {
		this._meterSharedState.observableRegistry.addBatchCallback(callback, observables);
	}
	/**
	* @see {@link Meter.removeBatchObservableCallback}
	*/
	removeBatchObservableCallback(callback, observables) {
		this._meterSharedState.observableRegistry.removeBatchCallback(callback, observables);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/MetricStorage.js
/**
* Internal interface.
*
* Represents a storage from which we can collect metrics.
*/
var MetricStorage = class {
	_instrumentDescriptor;
	constructor(instrumentDescriptor) {
		this._instrumentDescriptor = instrumentDescriptor;
	}
	getInstrumentDescriptor() {
		return this._instrumentDescriptor;
	}
	updateDescription(description) {
		this._instrumentDescriptor = createInstrumentDescriptor(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
			description,
			valueType: this._instrumentDescriptor.valueType,
			unit: this._instrumentDescriptor.unit,
			advice: this._instrumentDescriptor.advice
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/HashMap.js
var HashMap = class {
	_valueMap = /* @__PURE__ */ new Map();
	_keyMap = /* @__PURE__ */ new Map();
	_hash;
	constructor(hash) {
		this._hash = hash;
	}
	get(key, hashCode) {
		hashCode ??= this._hash(key);
		return this._valueMap.get(hashCode);
	}
	getOrDefault(key, defaultFactory) {
		const hash = this._hash(key);
		if (this._valueMap.has(hash)) return this._valueMap.get(hash);
		const val = defaultFactory();
		if (!this._keyMap.has(hash)) this._keyMap.set(hash, key);
		this._valueMap.set(hash, val);
		return val;
	}
	set(key, value, hashCode) {
		hashCode ??= this._hash(key);
		if (!this._keyMap.has(hashCode)) this._keyMap.set(hashCode, key);
		this._valueMap.set(hashCode, value);
	}
	has(key, hashCode) {
		hashCode ??= this._hash(key);
		return this._valueMap.has(hashCode);
	}
	*keys() {
		const keyIterator = this._keyMap.entries();
		let next = keyIterator.next();
		while (next.done !== true) {
			yield [next.value[1], next.value[0]];
			next = keyIterator.next();
		}
	}
	*entries() {
		const valueIterator = this._valueMap.entries();
		let next = valueIterator.next();
		while (next.done !== true) {
			yield [
				this._keyMap.get(next.value[0]),
				next.value[1],
				next.value[0]
			];
			next = valueIterator.next();
		}
	}
	get size() {
		return this._valueMap.size;
	}
};
var AttributeHashMap = class extends HashMap {
	constructor() {
		super(hashAttributes);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/DeltaMetricProcessor.js
/**
* Internal interface.
*
* Allows synchronous collection of metrics. This processor should allow
* allocation of new aggregation cells for metrics and convert cumulative
* recording to delta data points.
*/
var DeltaMetricProcessor = class {
	_activeCollectionStorage = new AttributeHashMap();
	_cumulativeMemoStorage = new AttributeHashMap();
	_cardinalityLimit;
	_overflowAttributes = { "otel.metric.overflow": true };
	_overflowHashCode;
	_aggregator;
	constructor(aggregator, aggregationCardinalityLimit) {
		this._aggregator = aggregator;
		this._cardinalityLimit = (aggregationCardinalityLimit ?? 2e3) - 1;
		this._overflowHashCode = hashAttributes(this._overflowAttributes);
	}
	record(value, attributes, _context, collectionTime) {
		let accumulation = this._activeCollectionStorage.get(attributes);
		if (!accumulation) {
			if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
				this._activeCollectionStorage.getOrDefault(this._overflowAttributes, () => this._aggregator.createAccumulation(collectionTime))?.record(value);
				return;
			}
			accumulation = this._aggregator.createAccumulation(collectionTime);
			this._activeCollectionStorage.set(attributes, accumulation);
		}
		accumulation?.record(value);
	}
	batchCumulate(measurements, collectionTime) {
		for (const [originalAttributes, value, originalHashCode] of measurements.entries()) {
			let attributes = originalAttributes;
			let hashCode = originalHashCode;
			const accumulation = this._aggregator.createAccumulation(collectionTime);
			accumulation?.record(value);
			let delta = accumulation;
			if (this._cumulativeMemoStorage.has(attributes, hashCode)) {
				const previous = this._cumulativeMemoStorage.get(attributes, hashCode);
				delta = this._aggregator.diff(previous, accumulation);
			} else if (this._cumulativeMemoStorage.size >= this._cardinalityLimit) {
				attributes = this._overflowAttributes;
				hashCode = this._overflowHashCode;
				if (this._cumulativeMemoStorage.has(attributes, hashCode)) {
					const previous = this._cumulativeMemoStorage.get(attributes, hashCode);
					delta = this._aggregator.diff(previous, accumulation);
				}
			}
			if (this._activeCollectionStorage.has(attributes, hashCode)) {
				const active = this._activeCollectionStorage.get(attributes, hashCode);
				delta = this._aggregator.merge(active, delta);
			}
			this._cumulativeMemoStorage.set(attributes, accumulation, hashCode);
			this._activeCollectionStorage.set(attributes, delta, hashCode);
		}
	}
	/**
	* Returns a collection of delta metrics. Start time is the when first
	* time event collected.
	*/
	collect() {
		const unreportedDelta = this._activeCollectionStorage;
		this._activeCollectionStorage = new AttributeHashMap();
		return unreportedDelta;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/TemporalMetricProcessor.js
/**
* Internal interface.
*
* Provides unique reporting for each collector. Allows synchronous collection
* of metrics and reports given temporality values.
*/
var TemporalMetricProcessor = class TemporalMetricProcessor {
	_aggregator;
	_unreportedAccumulations = /* @__PURE__ */ new Map();
	_reportHistory = /* @__PURE__ */ new Map();
	constructor(aggregator, collectorHandles) {
		this._aggregator = aggregator;
		collectorHandles.forEach((handle) => {
			this._unreportedAccumulations.set(handle, []);
		});
	}
	/**
	* Builds the {@link MetricData} streams to report against a specific MetricCollector.
	* @param collector The information of the MetricCollector.
	* @param collectors The registered collectors.
	* @param instrumentDescriptor The instrumentation descriptor that these metrics generated with.
	* @param currentAccumulations The current accumulation of metric data from instruments.
	* @param collectionTime The current collection timestamp.
	* @returns The {@link MetricData} points or `null`.
	*/
	buildMetrics(collector, instrumentDescriptor, currentAccumulations, collectionTime) {
		this._stashAccumulations(currentAccumulations);
		const unreportedAccumulations = this._getMergedUnreportedAccumulations(collector);
		let result = unreportedAccumulations;
		let aggregationTemporality;
		if (this._reportHistory.has(collector)) {
			const last = this._reportHistory.get(collector);
			const lastCollectionTime = last.collectionTime;
			aggregationTemporality = last.aggregationTemporality;
			if (aggregationTemporality === AggregationTemporality.CUMULATIVE) result = TemporalMetricProcessor.merge(last.accumulations, unreportedAccumulations, this._aggregator);
			else result = TemporalMetricProcessor.calibrateStartTime(last.accumulations, unreportedAccumulations, lastCollectionTime);
		} else aggregationTemporality = collector.selectAggregationTemporality(instrumentDescriptor.type);
		this._reportHistory.set(collector, {
			accumulations: result,
			collectionTime,
			aggregationTemporality
		});
		const accumulationRecords = AttributesMapToAccumulationRecords(result);
		if (accumulationRecords.length === 0) return;
		return this._aggregator.toMetricData(instrumentDescriptor, aggregationTemporality, accumulationRecords, collectionTime);
	}
	_stashAccumulations(currentAccumulation) {
		const registeredCollectors = this._unreportedAccumulations.keys();
		for (const collector of registeredCollectors) {
			let stash = this._unreportedAccumulations.get(collector);
			if (stash === void 0) {
				stash = [];
				this._unreportedAccumulations.set(collector, stash);
			}
			stash.push(currentAccumulation);
		}
	}
	_getMergedUnreportedAccumulations(collector) {
		let result = new AttributeHashMap();
		const unreportedList = this._unreportedAccumulations.get(collector);
		this._unreportedAccumulations.set(collector, []);
		if (unreportedList === void 0) return result;
		for (const it of unreportedList) result = TemporalMetricProcessor.merge(result, it, this._aggregator);
		return result;
	}
	static merge(last, current, aggregator) {
		const result = last;
		const iterator = current.entries();
		let next = iterator.next();
		while (next.done !== true) {
			const [key, record, hash] = next.value;
			if (last.has(key, hash)) {
				const lastAccumulation = last.get(key, hash);
				const accumulation = aggregator.merge(lastAccumulation, record);
				result.set(key, accumulation, hash);
			} else result.set(key, record, hash);
			next = iterator.next();
		}
		return result;
	}
	/**
	* Calibrate the reported metric streams' startTime to lastCollectionTime. Leaves
	* the new stream to be the initial observation time unchanged.
	*/
	static calibrateStartTime(last, current, lastCollectionTime) {
		for (const [key, hash] of last.keys()) current.get(key, hash)?.setStartTime(lastCollectionTime);
		return current;
	}
};
function AttributesMapToAccumulationRecords(map) {
	return Array.from(map.entries());
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/AsyncMetricStorage.js
/**
* Internal interface.
*
* Stores and aggregates {@link MetricData} for asynchronous instruments.
*/
var AsyncMetricStorage = class extends MetricStorage {
	_aggregationCardinalityLimit;
	_deltaMetricStorage;
	_temporalMetricStorage;
	_attributesProcessor;
	constructor(_instrumentDescriptor, aggregator, attributesProcessor, collectorHandles, aggregationCardinalityLimit) {
		super(_instrumentDescriptor);
		this._aggregationCardinalityLimit = aggregationCardinalityLimit;
		this._deltaMetricStorage = new DeltaMetricProcessor(aggregator, this._aggregationCardinalityLimit);
		this._temporalMetricStorage = new TemporalMetricProcessor(aggregator, collectorHandles);
		this._attributesProcessor = attributesProcessor;
	}
	record(measurements, observationTime) {
		const processed = new AttributeHashMap();
		for (const [attributes, value] of measurements.entries()) processed.set(this._attributesProcessor.process(attributes), value);
		this._deltaMetricStorage.batchCumulate(processed, observationTime);
	}
	/**
	* Collects the metrics from this storage. The ObservableCallback is invoked
	* during the collection.
	*
	* Note: This is a stateful operation and may reset any interval-related
	* state for the MetricCollector.
	*/
	collect(collector, collectionTime) {
		const accumulations = this._deltaMetricStorage.collect();
		return this._temporalMetricStorage.buildMetrics(collector, this._instrumentDescriptor, accumulations, collectionTime);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/view/RegistrationConflicts.js
function getIncompatibilityDetails(existing, otherDescriptor) {
	let incompatibility = "";
	if (existing.unit !== otherDescriptor.unit) incompatibility += `\t- Unit '${existing.unit}' does not match '${otherDescriptor.unit}'\n`;
	if (existing.type !== otherDescriptor.type) incompatibility += `\t- Type '${existing.type}' does not match '${otherDescriptor.type}'\n`;
	if (existing.valueType !== otherDescriptor.valueType) incompatibility += `\t- Value Type '${existing.valueType}' does not match '${otherDescriptor.valueType}'\n`;
	if (existing.description !== otherDescriptor.description) incompatibility += `\t- Description '${existing.description}' does not match '${otherDescriptor.description}'\n`;
	return incompatibility;
}
function getValueTypeConflictResolutionRecipe(existing, otherDescriptor) {
	return `\t- use valueType '${existing.valueType}' on instrument creation or use an instrument name other than '${otherDescriptor.name}'`;
}
function getUnitConflictResolutionRecipe(existing, otherDescriptor) {
	return `\t- use unit '${existing.unit}' on instrument creation or use an instrument name other than '${otherDescriptor.name}'`;
}
function getTypeConflictResolutionRecipe(existing, otherDescriptor) {
	const selectorString = JSON.stringify({
		name: otherDescriptor.name,
		type: otherDescriptor.type,
		unit: otherDescriptor.unit
	});
	return `\t- create a new view with a name other than '${existing.name}' and InstrumentSelector '${selectorString}'`;
}
function getDescriptionResolutionRecipe(existing, otherDescriptor) {
	const selectorString = JSON.stringify({
		name: otherDescriptor.name,
		type: otherDescriptor.type,
		unit: otherDescriptor.unit
	});
	return `\t- create a new view with a name other than '${existing.name}' and InstrumentSelector '${selectorString}'
    \t- OR - create a new view with the name ${existing.name} and description '${existing.description}' and InstrumentSelector ${selectorString}
    \t- OR - create a new view with the name ${otherDescriptor.name} and description '${existing.description}' and InstrumentSelector ${selectorString}`;
}
function getConflictResolutionRecipe(existing, otherDescriptor) {
	if (existing.valueType !== otherDescriptor.valueType) return getValueTypeConflictResolutionRecipe(existing, otherDescriptor);
	if (existing.unit !== otherDescriptor.unit) return getUnitConflictResolutionRecipe(existing, otherDescriptor);
	if (existing.type !== otherDescriptor.type) return getTypeConflictResolutionRecipe(existing, otherDescriptor);
	if (existing.description !== otherDescriptor.description) return getDescriptionResolutionRecipe(existing, otherDescriptor);
	return "";
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/MetricStorageRegistry.js
/**
* Internal class for storing {@link MetricStorage}
*/
var MetricStorageRegistry = class MetricStorageRegistry {
	_sharedRegistry = /* @__PURE__ */ new Map();
	_perCollectorRegistry = /* @__PURE__ */ new Map();
	static create() {
		return new MetricStorageRegistry();
	}
	getStorages(collector) {
		let storages = [];
		for (const metricStorages of this._sharedRegistry.values()) storages = storages.concat(metricStorages);
		const perCollectorStorages = this._perCollectorRegistry.get(collector);
		if (perCollectorStorages != null) for (const metricStorages of perCollectorStorages.values()) storages = storages.concat(metricStorages);
		return storages;
	}
	register(storage) {
		this._registerStorage(storage, this._sharedRegistry);
	}
	registerForCollector(collector, storage) {
		let storageMap = this._perCollectorRegistry.get(collector);
		if (storageMap == null) {
			storageMap = /* @__PURE__ */ new Map();
			this._perCollectorRegistry.set(collector, storageMap);
		}
		this._registerStorage(storage, storageMap);
	}
	findOrUpdateCompatibleStorage(expectedDescriptor) {
		const storages = this._sharedRegistry.get(expectedDescriptor.name);
		if (storages === void 0) return null;
		return this._findOrUpdateCompatibleStorage(expectedDescriptor, storages);
	}
	findOrUpdateCompatibleCollectorStorage(collector, expectedDescriptor) {
		const storageMap = this._perCollectorRegistry.get(collector);
		if (storageMap === void 0) return null;
		const storages = storageMap.get(expectedDescriptor.name);
		if (storages === void 0) return null;
		return this._findOrUpdateCompatibleStorage(expectedDescriptor, storages);
	}
	_registerStorage(storage, storageMap) {
		const descriptor = storage.getInstrumentDescriptor();
		const storages = storageMap.get(descriptor.name);
		if (storages === void 0) {
			storageMap.set(descriptor.name, [storage]);
			return;
		}
		storages.push(storage);
	}
	_findOrUpdateCompatibleStorage(expectedDescriptor, existingStorages) {
		let compatibleStorage = null;
		for (const existingStorage of existingStorages) {
			const existingDescriptor = existingStorage.getInstrumentDescriptor();
			if (isDescriptorCompatibleWith(existingDescriptor, expectedDescriptor)) {
				if (existingDescriptor.description !== expectedDescriptor.description) {
					if (expectedDescriptor.description.length > existingDescriptor.description.length) existingStorage.updateDescription(expectedDescriptor.description);
					diag.warn("A view or instrument with the name ", expectedDescriptor.name, " has already been registered, but has a different description and is incompatible with another registered view.\n", "Details:\n", getIncompatibilityDetails(existingDescriptor, expectedDescriptor), "The longer description will be used.\nTo resolve the conflict:", getConflictResolutionRecipe(existingDescriptor, expectedDescriptor));
				}
				compatibleStorage = existingStorage;
			} else diag.warn("A view or instrument with the name ", expectedDescriptor.name, " has already been registered and is incompatible with another registered view.\n", "Details:\n", getIncompatibilityDetails(existingDescriptor, expectedDescriptor), "To resolve the conflict:\n", getConflictResolutionRecipe(existingDescriptor, expectedDescriptor));
		}
		return compatibleStorage;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/MultiWritableMetricStorage.js
/**
* Internal interface.
*/
var MultiMetricStorage = class {
	_backingStorages;
	constructor(backingStorages) {
		this._backingStorages = backingStorages;
	}
	record(value, attributes, context, recordTime) {
		const storages = this._backingStorages;
		for (let i = 0; i < storages.length; i++) storages[i].record(value, attributes, context, recordTime);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/ObservableResult.js
/**
* The class implements {@link ObservableResult} interface.
*/
var ObservableResultImpl = class {
	/**
	* @internal
	*/
	_buffer = new AttributeHashMap();
	_instrumentName;
	_valueType;
	constructor(instrumentName, valueType) {
		this._instrumentName = instrumentName;
		this._valueType = valueType;
	}
	/**
	* Observe a measurement of the value associated with the given attributes.
	*/
	observe(value, attributes = {}) {
		if (typeof value !== "number") {
			diag.warn(`non-number value provided to metric ${this._instrumentName}: ${value}`);
			return;
		}
		if (this._valueType === ValueType.INT && !Number.isInteger(value)) {
			diag.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`);
			value = Math.trunc(value);
			if (!Number.isInteger(value)) return;
		}
		this._buffer.set(attributes, value);
	}
};
/**
* The class implements {@link BatchObservableCallback} interface.
*/
var BatchObservableResultImpl = class {
	/**
	* @internal
	*/
	_buffer = /* @__PURE__ */ new Map();
	/**
	* Observe a measurement of the value associated with the given attributes.
	*/
	observe(metric, value, attributes = {}) {
		if (!isObservableInstrument(metric)) return;
		let map = this._buffer.get(metric);
		if (map == null) {
			map = new AttributeHashMap();
			this._buffer.set(metric, map);
		}
		if (typeof value !== "number") {
			diag.warn(`non-number value provided to metric ${metric._descriptor.name}: ${value}`);
			return;
		}
		if (metric._descriptor.valueType === ValueType.INT && !Number.isInteger(value)) {
			diag.warn(`INT value type cannot accept a floating-point value for ${metric._descriptor.name}, ignoring the fractional digits.`);
			value = Math.trunc(value);
			if (!Number.isInteger(value)) return;
		}
		map.set(attributes, value);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/ObservableRegistry.js
/**
* An internal interface for managing ObservableCallbacks.
*
* Every registered callback associated with a set of instruments are be evaluated
* exactly once during collection prior to reading data for that instrument.
*/
var ObservableRegistry = class {
	_callbacks = [];
	_batchCallbacks = [];
	addCallback(callback, instrument) {
		if (this._findCallback(callback, instrument) >= 0) return;
		this._callbacks.push({
			callback,
			instrument
		});
	}
	removeCallback(callback, instrument) {
		const idx = this._findCallback(callback, instrument);
		if (idx < 0) return;
		this._callbacks.splice(idx, 1);
	}
	addBatchCallback(callback, instruments) {
		const observableInstruments = new Set(instruments.filter(isObservableInstrument));
		if (observableInstruments.size === 0) {
			diag.error("BatchObservableCallback is not associated with valid instruments", instruments);
			return;
		}
		if (this._findBatchCallback(callback, observableInstruments) >= 0) return;
		this._batchCallbacks.push({
			callback,
			instruments: observableInstruments
		});
	}
	removeBatchCallback(callback, instruments) {
		const observableInstruments = new Set(instruments.filter(isObservableInstrument));
		const idx = this._findBatchCallback(callback, observableInstruments);
		if (idx < 0) return;
		this._batchCallbacks.splice(idx, 1);
	}
	/**
	* @returns a promise of rejected reasons for invoking callbacks.
	*/
	async observe(collectionTime, timeoutMillis) {
		const callbackFutures = this._observeCallbacks(collectionTime, timeoutMillis);
		const batchCallbackFutures = this._observeBatchCallbacks(collectionTime, timeoutMillis);
		return (await Promise.allSettled([...callbackFutures, ...batchCallbackFutures])).filter((result) => result.status === "rejected").map((result) => result.reason);
	}
	_observeCallbacks(observationTime, timeoutMillis) {
		return this._callbacks.map(async ({ callback, instrument }) => {
			const observableResult = new ObservableResultImpl(instrument._descriptor.name, instrument._descriptor.valueType);
			let callPromise = Promise.resolve(callback(observableResult));
			if (timeoutMillis != null) callPromise = callWithTimeout(callPromise, timeoutMillis);
			await callPromise;
			instrument._metricStorages.forEach((metricStorage) => {
				metricStorage.record(observableResult._buffer, observationTime);
			});
		});
	}
	_observeBatchCallbacks(observationTime, timeoutMillis) {
		return this._batchCallbacks.map(async ({ callback, instruments }) => {
			const observableResult = new BatchObservableResultImpl();
			let callPromise = Promise.resolve(callback(observableResult));
			if (timeoutMillis != null) callPromise = callWithTimeout(callPromise, timeoutMillis);
			await callPromise;
			instruments.forEach((instrument) => {
				const buffer = observableResult._buffer.get(instrument);
				if (buffer == null) return;
				instrument._metricStorages.forEach((metricStorage) => {
					metricStorage.record(buffer, observationTime);
				});
			});
		});
	}
	_findCallback(callback, instrument) {
		return this._callbacks.findIndex((record) => {
			return record.callback === callback && record.instrument === instrument;
		});
	}
	_findBatchCallback(callback, instruments) {
		return this._batchCallbacks.findIndex((record) => {
			return record.callback === callback && setEquals(record.instruments, instruments);
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/SyncMetricStorage.js
/**
* Internal interface.
*
* Stores and aggregates {@link MetricData} for synchronous instruments.
*/
var SyncMetricStorage = class extends MetricStorage {
	_aggregationCardinalityLimit;
	_deltaMetricStorage;
	_temporalMetricStorage;
	_attributesProcessor;
	constructor(instrumentDescriptor, aggregator, attributesProcessor, collectorHandles, aggregationCardinalityLimit) {
		super(instrumentDescriptor);
		this._aggregationCardinalityLimit = aggregationCardinalityLimit;
		this._deltaMetricStorage = new DeltaMetricProcessor(aggregator, this._aggregationCardinalityLimit);
		this._temporalMetricStorage = new TemporalMetricProcessor(aggregator, collectorHandles);
		this._attributesProcessor = attributesProcessor;
	}
	record(value, attributes, context, recordTime) {
		attributes = this._attributesProcessor.process(attributes, context);
		this._deltaMetricStorage.record(value, attributes, context, recordTime);
	}
	/**
	* Collects the metrics from this storage.
	*
	* Note: This is a stateful operation and may reset any interval-related
	* state for the MetricCollector.
	*/
	collect(collector, collectionTime) {
		const accumulations = this._deltaMetricStorage.collect();
		return this._temporalMetricStorage.buildMetrics(collector, this._instrumentDescriptor, accumulations, collectionTime);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/view/AttributesProcessor.js
var NoopAttributesProcessor = class {
	process(incoming, _context) {
		return incoming;
	}
};
var MultiAttributesProcessor = class {
	_processors;
	constructor(processors) {
		this._processors = processors;
	}
	process(incoming, context) {
		let filteredAttributes = incoming;
		for (const processor of this._processors) filteredAttributes = processor.process(filteredAttributes, context);
		return filteredAttributes;
	}
};
/**
* @internal
*
* Create an {@link IAttributesProcessor} that acts as a simple pass-through for attributes.
*/
function createNoopAttributesProcessor() {
	return NOOP;
}
/**
* @internal
*
* Create an {@link IAttributesProcessor} that applies all processors from the provided list in order.
*
* @param processors Processors to apply in order.
*/
function createMultiAttributesProcessor(processors) {
	return new MultiAttributesProcessor(processors);
}
var NOOP = new NoopAttributesProcessor();
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/MeterSharedState.js
/**
* An internal record for shared meter provider states.
*/
var MeterSharedState = class {
	metricStorageRegistry = new MetricStorageRegistry();
	observableRegistry = new ObservableRegistry();
	meter;
	_meterProviderSharedState;
	_instrumentationScope;
	constructor(meterProviderSharedState, instrumentationScope) {
		this.meter = new Meter(this);
		this._meterProviderSharedState = meterProviderSharedState;
		this._instrumentationScope = instrumentationScope;
	}
	registerMetricStorage(descriptor) {
		const storages = this._registerMetricStorage(descriptor, SyncMetricStorage);
		if (storages.length === 1) return storages[0];
		return new MultiMetricStorage(storages);
	}
	registerAsyncMetricStorage(descriptor) {
		return this._registerMetricStorage(descriptor, AsyncMetricStorage);
	}
	/**
	* @param collector opaque handle of {@link MetricCollector} which initiated the collection.
	* @param collectionTime the HrTime at which the collection was initiated.
	* @param options options for collection.
	* @returns the list of metric data collected.
	*/
	async collect(collector, collectionTime, options) {
		/**
		* 1. Call all observable callbacks first.
		* 2. Collect metric result for the collector.
		*/
		const errors = await this.observableRegistry.observe(collectionTime, options?.timeoutMillis);
		const storages = this.metricStorageRegistry.getStorages(collector);
		if (storages.length === 0) return null;
		const metricDataList = [];
		storages.forEach((metricStorage) => {
			const metricData = metricStorage.collect(collector, collectionTime);
			if (metricData != null) metricDataList.push(metricData);
		});
		if (metricDataList.length === 0) return { errors };
		return {
			scopeMetrics: {
				scope: this._instrumentationScope,
				metrics: metricDataList
			},
			errors
		};
	}
	_registerMetricStorage(descriptor, MetricStorageType) {
		let storages = this._meterProviderSharedState.viewRegistry.findViews(descriptor, this._instrumentationScope).map((view) => {
			const viewDescriptor = createInstrumentDescriptorWithView(view, descriptor);
			const compatibleStorage = this.metricStorageRegistry.findOrUpdateCompatibleStorage(viewDescriptor);
			if (compatibleStorage != null) return compatibleStorage;
			const viewStorage = new MetricStorageType(viewDescriptor, view.aggregation.createAggregator(viewDescriptor), view.attributesProcessor, this._meterProviderSharedState.metricCollectors, view.aggregationCardinalityLimit);
			this.metricStorageRegistry.register(viewStorage);
			return viewStorage;
		});
		if (storages.length === 0) {
			const collectorStorages = this._meterProviderSharedState.selectAggregations(descriptor.type).map(([collector, aggregation]) => {
				const compatibleStorage = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(collector, descriptor);
				if (compatibleStorage != null) return compatibleStorage;
				const aggregator = aggregation.createAggregator(descriptor);
				const cardinalityLimit = collector.selectCardinalityLimit(descriptor.type);
				const storage = new MetricStorageType(descriptor, aggregator, createNoopAttributesProcessor(), [collector], cardinalityLimit);
				this.metricStorageRegistry.registerForCollector(collector, storage);
				return storage;
			});
			storages = storages.concat(collectorStorages);
		}
		return storages;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/MeterProviderSharedState.js
/**
* An internal record for shared meter provider states.
*/
var MeterProviderSharedState = class {
	viewRegistry = new ViewRegistry();
	metricCollectors = [];
	meterSharedStates = /* @__PURE__ */ new Map();
	resource;
	constructor(resource) {
		this.resource = resource;
	}
	getMeterSharedState(instrumentationScope) {
		const id = instrumentationScopeId(instrumentationScope);
		let meterSharedState = this.meterSharedStates.get(id);
		if (meterSharedState == null) {
			meterSharedState = new MeterSharedState(this, instrumentationScope);
			this.meterSharedStates.set(id, meterSharedState);
		}
		return meterSharedState;
	}
	selectAggregations(instrumentType) {
		const result = [];
		for (const collector of this.metricCollectors) result.push([collector, toAggregation(collector.selectAggregation(instrumentType))]);
		return result;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/state/MetricCollector.js
/**
* An internal opaque interface that the MetricReader receives as
* MetricProducer. It acts as the storage key to the internal metric stream
* state for each MetricReader.
*/
var MetricCollector = class {
	_sharedState;
	_metricReader;
	constructor(sharedState, metricReader) {
		this._sharedState = sharedState;
		this._metricReader = metricReader;
	}
	async collect(options) {
		const collectionTime = millisToHrTime(Date.now());
		const scopeMetrics = [];
		const errors = [];
		const meterCollectionPromises = Array.from(this._sharedState.meterSharedStates.values()).map(async (meterSharedState) => {
			const current = await meterSharedState.collect(this, collectionTime, options);
			if (current?.scopeMetrics != null) scopeMetrics.push(current.scopeMetrics);
			if (current?.errors != null) errors.push(...current.errors);
		});
		await Promise.all(meterCollectionPromises);
		return {
			resourceMetrics: {
				resource: this._sharedState.resource,
				scopeMetrics
			},
			errors
		};
	}
	/**
	* Delegates for MetricReader.forceFlush.
	*/
	async forceFlush(options) {
		await this._metricReader.forceFlush(options);
	}
	/**
	* Delegates for MetricReader.shutdown.
	*/
	async shutdown(options) {
		await this._metricReader.shutdown(options);
	}
	selectAggregationTemporality(instrumentType) {
		return this._metricReader.selectAggregationTemporality(instrumentType);
	}
	selectAggregation(instrumentType) {
		return this._metricReader.selectAggregation(instrumentType);
	}
	/**
	* Select the cardinality limit for the given {@link InstrumentType} for this
	* collector.
	*/
	selectCardinalityLimit(instrumentType) {
		return this._metricReader.selectCardinalityLimit?.(instrumentType) ?? 2e3;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/view/Predicate.js
var ESCAPE = /[\^$\\.+?()[\]{}|]/g;
/**
* Wildcard pattern predicate, supports patterns like `*`, `foo*`, `*bar`.
*/
var PatternPredicate = class PatternPredicate {
	_matchAll;
	_regexp;
	constructor(pattern) {
		if (pattern === "*") {
			this._matchAll = true;
			this._regexp = /.*/;
		} else {
			this._matchAll = false;
			this._regexp = new RegExp(PatternPredicate.escapePattern(pattern));
		}
	}
	match(str) {
		if (this._matchAll) return true;
		return this._regexp.test(str);
	}
	static escapePattern(pattern) {
		return `^${pattern.replace(ESCAPE, "\\$&").replace("*", ".*")}$`;
	}
	static hasWildcard(pattern) {
		return pattern.includes("*");
	}
};
var ExactPredicate = class {
	_matchAll;
	_pattern;
	constructor(pattern) {
		this._matchAll = pattern === void 0;
		this._pattern = pattern;
	}
	match(str) {
		if (this._matchAll) return true;
		if (str === this._pattern) return true;
		return false;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/view/InstrumentSelector.js
var InstrumentSelector = class {
	_nameFilter;
	_type;
	_unitFilter;
	constructor(criteria) {
		this._nameFilter = new PatternPredicate(criteria?.name ?? "*");
		this._type = criteria?.type;
		this._unitFilter = new ExactPredicate(criteria?.unit);
	}
	getType() {
		return this._type;
	}
	getNameFilter() {
		return this._nameFilter;
	}
	getUnitFilter() {
		return this._unitFilter;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/view/MeterSelector.js
var MeterSelector = class {
	_nameFilter;
	_versionFilter;
	_schemaUrlFilter;
	constructor(criteria) {
		this._nameFilter = new ExactPredicate(criteria?.name);
		this._versionFilter = new ExactPredicate(criteria?.version);
		this._schemaUrlFilter = new ExactPredicate(criteria?.schemaUrl);
	}
	getNameFilter() {
		return this._nameFilter;
	}
	/**
	* TODO: semver filter? no spec yet.
	*/
	getVersionFilter() {
		return this._versionFilter;
	}
	getSchemaUrlFilter() {
		return this._schemaUrlFilter;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/view/View.js
function isSelectorNotProvided(options) {
	return options.instrumentName == null && options.instrumentType == null && options.instrumentUnit == null && options.meterName == null && options.meterVersion == null && options.meterSchemaUrl == null;
}
function validateViewOptions(viewOptions) {
	if (isSelectorNotProvided(viewOptions)) throw new Error("Cannot create view with no selector arguments supplied");
	if (viewOptions.name != null && (viewOptions?.instrumentName == null || PatternPredicate.hasWildcard(viewOptions.instrumentName))) throw new Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.");
}
/**
* Can be passed to a {@link MeterProvider} to select instruments and alter their metric stream.
*/
var View = class {
	name;
	description;
	aggregation;
	attributesProcessor;
	instrumentSelector;
	meterSelector;
	aggregationCardinalityLimit;
	/**
	* Create a new {@link View} instance.
	*
	* Parameters can be categorized as two types:
	*  Instrument selection criteria: Used to describe the instrument(s) this view will be applied to.
	*  Will be treated as additive (the Instrument has to meet all the provided criteria to be selected).
	*
	*  Metric stream altering: Alter the metric stream of instruments selected by instrument selection criteria.
	*
	* @param viewOptions {@link ViewOptions} for altering the metric stream and instrument selection.
	* @param viewOptions.name
	* Alters the metric stream:
	*  This will be used as the name of the metrics stream.
	*  If not provided, the original Instrument name will be used.
	* @param viewOptions.description
	* Alters the metric stream:
	*  This will be used as the description of the metrics stream.
	*  If not provided, the original Instrument description will be used by default.
	* @param viewOptions.attributesProcessors
	* Alters the metric stream:
	*  If provided, the attributes will be modified as defined by the added processors.
	*  If not provided, all attribute keys will be used by default.
	* @param viewOptions.aggregationCardinalityLimit
	* Alters the metric stream:
	*  Sets a limit on the number of unique attribute combinations (cardinality) that can be aggregated.
	*  If not provided, the default limit of 2000 will be used.
	* @param viewOptions.aggregation
	* Alters the metric stream:
	*  Alters the {@link Aggregation} of the metric stream.
	* @param viewOptions.instrumentName
	* Instrument selection criteria:
	*  Original name of the Instrument(s) with wildcard support.
	* @param viewOptions.instrumentType
	* Instrument selection criteria:
	*  The original type of the Instrument(s).
	* @param viewOptions.instrumentUnit
	* Instrument selection criteria:
	*  The unit of the Instrument(s).
	* @param viewOptions.meterName
	* Instrument selection criteria:
	*  The name of the Meter. No wildcard support, name must match the meter exactly.
	* @param viewOptions.meterVersion
	* Instrument selection criteria:
	*  The version of the Meter. No wildcard support, version must match exactly.
	* @param viewOptions.meterSchemaUrl
	* Instrument selection criteria:
	*  The schema URL of the Meter. No wildcard support, schema URL must match exactly.
	*
	* @example
	* // Create a view that changes the Instrument 'my.instrument' to use to an
	* // ExplicitBucketHistogramAggregation with the boundaries [20, 30, 40]
	* new View({
	*   aggregation: new ExplicitBucketHistogramAggregation([20, 30, 40]),
	*   instrumentName: 'my.instrument'
	* })
	*/
	constructor(viewOptions) {
		validateViewOptions(viewOptions);
		if (viewOptions.attributesProcessors != null) this.attributesProcessor = createMultiAttributesProcessor(viewOptions.attributesProcessors);
		else this.attributesProcessor = createNoopAttributesProcessor();
		this.name = viewOptions.name;
		this.description = viewOptions.description;
		this.aggregation = toAggregation(viewOptions.aggregation ?? { type: AggregationType.DEFAULT });
		this.instrumentSelector = new InstrumentSelector({
			name: viewOptions.instrumentName,
			type: viewOptions.instrumentType,
			unit: viewOptions.instrumentUnit
		});
		this.meterSelector = new MeterSelector({
			name: viewOptions.meterName,
			version: viewOptions.meterVersion,
			schemaUrl: viewOptions.meterSchemaUrl
		});
		this.aggregationCardinalityLimit = viewOptions.aggregationCardinalityLimit;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-metrics@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-metrics/build/esm/MeterProvider.js
/**
* This class implements the {@link MeterProvider} interface.
*/
var MeterProvider = class {
	_sharedState;
	_shutdown = false;
	constructor(options) {
		this._sharedState = new MeterProviderSharedState(options?.resource ?? defaultResource());
		if (options?.views != null && options.views.length > 0) for (const viewOption of options.views) this._sharedState.viewRegistry.addView(new View(viewOption));
		if (options?.readers != null && options.readers.length > 0) for (const metricReader of options.readers) {
			const collector = new MetricCollector(this._sharedState, metricReader);
			metricReader.setMetricProducer(collector);
			this._sharedState.metricCollectors.push(collector);
		}
	}
	/**
	* Get a meter with the configuration of the MeterProvider.
	*/
	getMeter(name, version = "", options = {}) {
		if (this._shutdown) {
			diag.warn("A shutdown MeterProvider cannot provide a Meter");
			return createNoopMeter();
		}
		return this._sharedState.getMeterSharedState({
			name,
			version,
			schemaUrl: options.schemaUrl
		}).meter;
	}
	/**
	* Shut down the MeterProvider and all registered
	* MetricReaders.
	*
	* Returns a promise which is resolved when all flushes are complete.
	*/
	async shutdown(options) {
		if (this._shutdown) {
			diag.warn("shutdown may only be called once per MeterProvider");
			return;
		}
		this._shutdown = true;
		await Promise.all(this._sharedState.metricCollectors.map((collector) => {
			return collector.shutdown(options);
		}));
	}
	/**
	* Notifies all registered MetricReaders to flush any buffered data.
	*
	* Returns a promise which is resolved when all flushes are complete.
	*/
	async forceFlush(options) {
		if (this._shutdown) {
			diag.warn("invalid attempt to force flush after MeterProvider shutdown");
			return;
		}
		await Promise.all(this._sharedState.metricCollectors.map((collector) => {
			return collector.forceFlush(options);
		}));
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-transformer@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-transformer/build/esm/common/internal.js
function createResource(resource, encoder) {
	const result = {
		attributes: toAttributes$1(resource.attributes, encoder),
		droppedAttributesCount: 0
	};
	const schemaUrl = resource.schemaUrl;
	if (schemaUrl && schemaUrl !== "") result.schemaUrl = schemaUrl;
	return result;
}
function createInstrumentationScope(scope) {
	return {
		name: scope.name,
		version: scope.version
	};
}
function toAttributes$1(attributes, encoder) {
	return Object.keys(attributes).map((key) => toKeyValue(key, attributes[key], encoder));
}
function toKeyValue(key, value, encoder) {
	return {
		key,
		value: toAnyValue$1(value, encoder)
	};
}
function toAnyValue$1(value, encoder) {
	const t = typeof value;
	if (t === "string") return { stringValue: value };
	if (t === "number") {
		if (!Number.isInteger(value)) return { doubleValue: value };
		return { intValue: value };
	}
	if (t === "boolean") return { boolValue: value };
	if (value instanceof Uint8Array) return { bytesValue: encoder.encodeUint8Array(value) };
	if (Array.isArray(value)) {
		const values = new Array(value.length);
		for (let i = 0; i < value.length; i++) values[i] = toAnyValue$1(value[i], encoder);
		return { arrayValue: { values } };
	}
	if (t === "object" && value != null) {
		const keys = Object.keys(value);
		const values = new Array(keys.length);
		for (let i = 0; i < keys.length; i++) values[i] = {
			key: keys[i],
			value: toAnyValue$1(value[keys[i]], encoder)
		};
		return { kvlistValue: { values } };
	}
	return {};
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-transformer@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-transformer/build/esm/logs/internal.js
function createExportLogsServiceRequest(logRecords, encoder) {
	return { resourceLogs: logRecordsToResourceLogs(logRecords, encoder) };
}
function createResourceMap$1(logRecords) {
	const resourceMap = /* @__PURE__ */ new Map();
	for (const record of logRecords) {
		const { resource, instrumentationScope: { name, version = "", schemaUrl = "" } } = record;
		let ismMap = resourceMap.get(resource);
		if (!ismMap) {
			ismMap = /* @__PURE__ */ new Map();
			resourceMap.set(resource, ismMap);
		}
		const ismKey = `${name}@${version}:${schemaUrl}`;
		let records = ismMap.get(ismKey);
		if (!records) {
			records = [];
			ismMap.set(ismKey, records);
		}
		records.push(record);
	}
	return resourceMap;
}
function logRecordsToResourceLogs(logRecords, encoder) {
	const resourceMap = createResourceMap$1(logRecords);
	return Array.from(resourceMap, ([resource, ismMap]) => {
		const processedResource = createResource(resource, encoder);
		return {
			resource: processedResource,
			scopeLogs: Array.from(ismMap, ([, scopeLogs]) => {
				return {
					scope: createInstrumentationScope(scopeLogs[0].instrumentationScope),
					logRecords: scopeLogs.map((log) => toLogRecord(log, encoder)),
					schemaUrl: scopeLogs[0].instrumentationScope.schemaUrl
				};
			}),
			schemaUrl: processedResource.schemaUrl
		};
	});
}
function toLogRecord(log, encoder) {
	return {
		timeUnixNano: encoder.encodeHrTime(log.hrTime),
		observedTimeUnixNano: encoder.encodeHrTime(log.hrTimeObserved),
		severityNumber: toSeverityNumber(log.severityNumber),
		severityText: log.severityText,
		body: toAnyValue$1(log.body, encoder),
		eventName: log.eventName,
		attributes: toLogAttributes(log.attributes, encoder),
		droppedAttributesCount: log.droppedAttributesCount,
		flags: log.spanContext?.traceFlags,
		traceId: encoder.encodeOptionalSpanContext(log.spanContext?.traceId),
		spanId: encoder.encodeOptionalSpanContext(log.spanContext?.spanId)
	};
}
function toSeverityNumber(severityNumber) {
	return severityNumber;
}
function toLogAttributes(attributes, encoder) {
	return Object.keys(attributes).map((key) => toKeyValue(key, attributes[key], encoder));
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-transformer@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-transformer/build/esm/common/utils.js
function hrTimeToNanos(hrTime) {
	const NANOSECONDS = BigInt(1e9);
	return BigInt(Math.trunc(hrTime[0])) * NANOSECONDS + BigInt(Math.trunc(hrTime[1]));
}
function encodeAsString(hrTime) {
	return hrTimeToNanos(hrTime).toString();
}
var encodeTimestamp = typeof BigInt !== "undefined" ? encodeAsString : hrTimeToNanoseconds;
function identity(value) {
	return value;
}
/**
* Encoder for JSON format.
* Uses string timestamps, hex for span/trace IDs, and base64 for Uint8Array.
*/
var JSON_ENCODER = {
	encodeHrTime: encodeTimestamp,
	encodeSpanContext: identity,
	encodeOptionalSpanContext: identity,
	encodeUint8Array: (bytes) => {
		if (typeof Buffer !== "undefined") return Buffer.from(bytes).toString("base64");
		const chars = new Array(bytes.length);
		for (let i = 0; i < bytes.length; i++) chars[i] = String.fromCharCode(bytes[i]);
		return btoa(chars.join(""));
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-transformer@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-transformer/build/esm/logs/json/logs.js
var JsonLogsSerializer = {
	serializeRequest: (arg) => {
		const request = createExportLogsServiceRequest(arg, JSON_ENCODER);
		return new TextEncoder().encode(JSON.stringify(request));
	},
	deserializeResponse: (arg) => {
		if (arg.length === 0) return {};
		const decoder = new TextDecoder();
		try {
			return JSON.parse(decoder.decode(arg));
		} catch (err) {
			diag.warn(`Failed to parse logs export response: ${err.message}. Returning empty response`);
			return {};
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-transformer@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-transformer/build/esm/metrics/internal-types.js
/**
* AggregationTemporality defines how a metric aggregator reports aggregated
* values. It describes how those values relate to the time interval over
* which they are aggregated.
*/
var EAggregationTemporality;
(function(EAggregationTemporality) {
	EAggregationTemporality[EAggregationTemporality["AGGREGATION_TEMPORALITY_UNSPECIFIED"] = 0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED";
	/** DELTA is an AggregationTemporality for a metric aggregator which reports
	changes since last report time. Successive metrics contain aggregation of
	values from continuous and non-overlapping intervals.
	
	The values for a DELTA metric are based only on the time interval
	associated with one measurement cycle. There is no dependency on
	previous measurements like is the case for CUMULATIVE metrics.
	
	For example, consider a system measuring the number of requests that
	it receives and reports the sum of these requests every second as a
	DELTA metric:
	
	1. The system starts receiving at time=t_0.
	2. A request is received, the system measures 1 request.
	3. A request is received, the system measures 1 request.
	4. A request is received, the system measures 1 request.
	5. The 1 second collection cycle ends. A metric is exported for the
	number of requests received over the interval of time t_0 to
	t_0+1 with a value of 3.
	6. A request is received, the system measures 1 request.
	7. A request is received, the system measures 1 request.
	8. The 1 second collection cycle ends. A metric is exported for the
	number of requests received over the interval of time t_0+1 to
	t_0+2 with a value of 2. */
	EAggregationTemporality[EAggregationTemporality["AGGREGATION_TEMPORALITY_DELTA"] = 1] = "AGGREGATION_TEMPORALITY_DELTA";
	/** CUMULATIVE is an AggregationTemporality for a metric aggregator which
	reports changes since a fixed start time. This means that current values
	of a CUMULATIVE metric depend on all previous measurements since the
	start time. Because of this, the sender is required to retain this state
	in some form. If this state is lost or invalidated, the CUMULATIVE metric
	values MUST be reset and a new fixed start time following the last
	reported measurement time sent MUST be used.
	
	For example, consider a system measuring the number of requests that
	it receives and reports the sum of these requests every second as a
	CUMULATIVE metric:
	
	1. The system starts receiving at time=t_0.
	2. A request is received, the system measures 1 request.
	3. A request is received, the system measures 1 request.
	4. A request is received, the system measures 1 request.
	5. The 1 second collection cycle ends. A metric is exported for the
	number of requests received over the interval of time t_0 to
	t_0+1 with a value of 3.
	6. A request is received, the system measures 1 request.
	7. A request is received, the system measures 1 request.
	8. The 1 second collection cycle ends. A metric is exported for the
	number of requests received over the interval of time t_0 to
	t_0+2 with a value of 5.
	9. The system experiences a fault and loses state.
	10. The system recovers and resumes receiving at time=t_1.
	11. A request is received, the system measures 1 request.
	12. The 1 second collection cycle ends. A metric is exported for the
	number of requests received over the interval of time t_1 to
	t_0+1 with a value of 1.
	
	Note: Even though, when reporting changes since last report time, using
	CUMULATIVE is valid, it is not recommended. This may cause problems for
	systems that do not use start_time to determine when the aggregation
	value was reset (e.g. Prometheus). */
	EAggregationTemporality[EAggregationTemporality["AGGREGATION_TEMPORALITY_CUMULATIVE"] = 2] = "AGGREGATION_TEMPORALITY_CUMULATIVE";
})(EAggregationTemporality || (EAggregationTemporality = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-transformer@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-transformer/build/esm/metrics/internal.js
function toResourceMetrics(resourceMetrics, encoder) {
	const processedResource = createResource(resourceMetrics.resource, encoder);
	return {
		resource: processedResource,
		schemaUrl: processedResource.schemaUrl,
		scopeMetrics: toScopeMetrics(resourceMetrics.scopeMetrics, encoder)
	};
}
function toScopeMetrics(scopeMetrics, encoder) {
	return Array.from(scopeMetrics.map((metrics) => ({
		scope: createInstrumentationScope(metrics.scope),
		metrics: metrics.metrics.map((metricData) => toMetric(metricData, encoder)),
		schemaUrl: metrics.scope.schemaUrl
	})));
}
function toMetric(metricData, encoder) {
	const out = {
		name: metricData.descriptor.name,
		description: metricData.descriptor.description,
		unit: metricData.descriptor.unit
	};
	const aggregationTemporality = toAggregationTemporality(metricData.aggregationTemporality);
	switch (metricData.dataPointType) {
		case DataPointType.SUM:
			out.sum = {
				aggregationTemporality,
				isMonotonic: metricData.isMonotonic,
				dataPoints: toSingularDataPoints(metricData, encoder)
			};
			break;
		case DataPointType.GAUGE:
			out.gauge = { dataPoints: toSingularDataPoints(metricData, encoder) };
			break;
		case DataPointType.HISTOGRAM:
			out.histogram = {
				aggregationTemporality,
				dataPoints: toHistogramDataPoints(metricData, encoder)
			};
			break;
		case DataPointType.EXPONENTIAL_HISTOGRAM:
			out.exponentialHistogram = {
				aggregationTemporality,
				dataPoints: toExponentialHistogramDataPoints(metricData, encoder)
			};
			break;
	}
	return out;
}
function toSingularDataPoint(dataPoint, valueType, encoder) {
	const out = {
		attributes: toAttributes$1(dataPoint.attributes, encoder),
		startTimeUnixNano: encoder.encodeHrTime(dataPoint.startTime),
		timeUnixNano: encoder.encodeHrTime(dataPoint.endTime)
	};
	switch (valueType) {
		case ValueType.INT:
			out.asInt = dataPoint.value;
			break;
		case ValueType.DOUBLE:
			out.asDouble = dataPoint.value;
			break;
	}
	return out;
}
function toSingularDataPoints(metricData, encoder) {
	return metricData.dataPoints.map((dataPoint) => {
		return toSingularDataPoint(dataPoint, metricData.descriptor.valueType, encoder);
	});
}
function toHistogramDataPoints(metricData, encoder) {
	return metricData.dataPoints.map((dataPoint) => {
		const histogram = dataPoint.value;
		return {
			attributes: toAttributes$1(dataPoint.attributes, encoder),
			bucketCounts: histogram.buckets.counts,
			explicitBounds: histogram.buckets.boundaries,
			count: histogram.count,
			sum: histogram.sum,
			min: histogram.min,
			max: histogram.max,
			startTimeUnixNano: encoder.encodeHrTime(dataPoint.startTime),
			timeUnixNano: encoder.encodeHrTime(dataPoint.endTime)
		};
	});
}
function toExponentialHistogramDataPoints(metricData, encoder) {
	return metricData.dataPoints.map((dataPoint) => {
		const histogram = dataPoint.value;
		return {
			attributes: toAttributes$1(dataPoint.attributes, encoder),
			count: histogram.count,
			min: histogram.min,
			max: histogram.max,
			sum: histogram.sum,
			positive: {
				offset: histogram.positive.offset,
				bucketCounts: histogram.positive.bucketCounts
			},
			negative: {
				offset: histogram.negative.offset,
				bucketCounts: histogram.negative.bucketCounts
			},
			scale: histogram.scale,
			zeroCount: histogram.zeroCount,
			startTimeUnixNano: encoder.encodeHrTime(dataPoint.startTime),
			timeUnixNano: encoder.encodeHrTime(dataPoint.endTime)
		};
	});
}
function toAggregationTemporality(temporality) {
	switch (temporality) {
		case AggregationTemporality.DELTA: return EAggregationTemporality.AGGREGATION_TEMPORALITY_DELTA;
		case AggregationTemporality.CUMULATIVE: return EAggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE;
	}
}
function createExportMetricsServiceRequest(resourceMetrics, encoder) {
	return { resourceMetrics: resourceMetrics.map((metrics) => toResourceMetrics(metrics, encoder)) };
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-transformer@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-transformer/build/esm/metrics/json/metrics.js
var JsonMetricsSerializer = {
	serializeRequest: (arg) => {
		const request = createExportMetricsServiceRequest([arg], JSON_ENCODER);
		return new TextEncoder().encode(JSON.stringify(request));
	},
	deserializeResponse: (arg) => {
		if (arg.length === 0) return {};
		const decoder = new TextDecoder();
		try {
			return JSON.parse(decoder.decode(arg));
		} catch (err) {
			diag.warn(`Failed to parse metrics export response: ${err.message}. Returning empty response`);
			return {};
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-transformer@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-transformer/build/esm/trace/internal.js
var SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK = 256;
var SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK = 512;
/**
* Builds the 32-bit span flags value combining the low 8-bit W3C TraceFlags
* with the HAS_IS_REMOTE and IS_REMOTE bits according to the OTLP spec.
*/
function buildSpanFlagsFrom(traceFlags, isRemote) {
	let flags = traceFlags & 255 | SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK;
	if (isRemote) flags |= SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK;
	return flags;
}
function sdkSpanToOtlpSpan(span, encoder) {
	const ctx = span.spanContext();
	const status = span.status;
	const parentSpanId = span.parentSpanContext?.spanId ? encoder.encodeSpanContext(span.parentSpanContext?.spanId) : void 0;
	return {
		traceId: encoder.encodeSpanContext(ctx.traceId),
		spanId: encoder.encodeSpanContext(ctx.spanId),
		parentSpanId,
		traceState: ctx.traceState?.serialize(),
		name: span.name,
		kind: span.kind == null ? 0 : span.kind + 1,
		startTimeUnixNano: encoder.encodeHrTime(span.startTime),
		endTimeUnixNano: encoder.encodeHrTime(span.endTime),
		attributes: toAttributes$1(span.attributes, encoder),
		droppedAttributesCount: span.droppedAttributesCount,
		events: span.events.map((event) => toOtlpSpanEvent(event, encoder)),
		droppedEventsCount: span.droppedEventsCount,
		status: {
			code: status.code,
			message: status.message
		},
		links: span.links.map((link) => toOtlpLink(link, encoder)),
		droppedLinksCount: span.droppedLinksCount,
		flags: buildSpanFlagsFrom(ctx.traceFlags, span.parentSpanContext?.isRemote)
	};
}
function toOtlpLink(link, encoder) {
	return {
		attributes: link.attributes ? toAttributes$1(link.attributes, encoder) : [],
		spanId: encoder.encodeSpanContext(link.context.spanId),
		traceId: encoder.encodeSpanContext(link.context.traceId),
		traceState: link.context.traceState?.serialize(),
		droppedAttributesCount: link.droppedAttributesCount || 0,
		flags: buildSpanFlagsFrom(link.context.traceFlags, link.context.isRemote)
	};
}
function toOtlpSpanEvent(timedEvent, encoder) {
	return {
		attributes: timedEvent.attributes ? toAttributes$1(timedEvent.attributes, encoder) : [],
		name: timedEvent.name,
		timeUnixNano: encoder.encodeHrTime(timedEvent.time),
		droppedAttributesCount: timedEvent.droppedAttributesCount || 0
	};
}
function createExportTraceServiceRequest(spans, encoder) {
	return { resourceSpans: spanRecordsToResourceSpans(spans, encoder) };
}
function createResourceMap(readableSpans) {
	const resourceMap = /* @__PURE__ */ new Map();
	for (const record of readableSpans) {
		let ilsMap = resourceMap.get(record.resource);
		if (!ilsMap) {
			ilsMap = /* @__PURE__ */ new Map();
			resourceMap.set(record.resource, ilsMap);
		}
		const instrumentationScopeKey = `${record.instrumentationScope.name}@${record.instrumentationScope.version || ""}:${record.instrumentationScope.schemaUrl || ""}`;
		let records = ilsMap.get(instrumentationScopeKey);
		if (!records) {
			records = [];
			ilsMap.set(instrumentationScopeKey, records);
		}
		records.push(record);
	}
	return resourceMap;
}
function spanRecordsToResourceSpans(readableSpans, encoder) {
	const resourceMap = createResourceMap(readableSpans);
	const out = [];
	const entryIterator = resourceMap.entries();
	let entry = entryIterator.next();
	while (!entry.done) {
		const [resource, ilmMap] = entry.value;
		const scopeResourceSpans = [];
		const ilmIterator = ilmMap.values();
		let ilmEntry = ilmIterator.next();
		while (!ilmEntry.done) {
			const scopeSpans = ilmEntry.value;
			if (scopeSpans.length > 0) {
				const spans = scopeSpans.map((readableSpan) => sdkSpanToOtlpSpan(readableSpan, encoder));
				scopeResourceSpans.push({
					scope: createInstrumentationScope(scopeSpans[0].instrumentationScope),
					spans,
					schemaUrl: scopeSpans[0].instrumentationScope.schemaUrl
				});
			}
			ilmEntry = ilmIterator.next();
		}
		const processedResource = createResource(resource, encoder);
		out.push({
			resource: processedResource,
			scopeSpans: scopeResourceSpans,
			schemaUrl: processedResource.schemaUrl
		});
		entry = entryIterator.next();
	}
	return out;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-transformer@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-transformer/build/esm/trace/json/trace.js
var JsonTraceSerializer = {
	serializeRequest: (arg) => {
		const request = createExportTraceServiceRequest(arg, JSON_ENCODER);
		return new TextEncoder().encode(JSON.stringify(request));
	},
	deserializeResponse: (arg) => {
		if (arg.length === 0) return {};
		const decoder = new TextDecoder();
		try {
			return JSON.parse(decoder.decode(arg));
		} catch (err) {
			diag.warn(`Failed to parse trace export response: ${err.message}. Returning empty response`);
			return {};
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/retrying-transport.js
var MAX_ATTEMPTS = 5;
var INITIAL_BACKOFF = 1e3;
var MAX_BACKOFF = 5e3;
var BACKOFF_MULTIPLIER = 1.5;
var JITTER = .2;
/**
* Get a pseudo-random jitter that falls in the range of [-JITTER, +JITTER]
*/
function getJitter() {
	return Math.random() * (2 * JITTER) - JITTER;
}
var RetryingTransport = class {
	_transport;
	constructor(transport) {
		this._transport = transport;
	}
	retry(data, timeoutMillis, inMillis) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				this._transport.send(data, timeoutMillis).then(resolve, reject);
			}, inMillis);
		});
	}
	async send(data, timeoutMillis) {
		let attempts = MAX_ATTEMPTS;
		let nextBackoff = INITIAL_BACKOFF;
		const deadline = Date.now() + timeoutMillis;
		let result = await this._transport.send(data, timeoutMillis);
		while (result.status === "retryable" && attempts > 0) {
			attempts--;
			const backoff = Math.max(Math.min(nextBackoff * (1 + getJitter()), MAX_BACKOFF), 0);
			nextBackoff = nextBackoff * BACKOFF_MULTIPLIER;
			const retryInMillis = result.retryInMillis ?? backoff;
			const remainingTimeoutMillis = deadline - Date.now();
			if (retryInMillis > remainingTimeoutMillis) {
				diag.info(`Export retry time ${Math.round(retryInMillis)}ms exceeds remaining timeout ${Math.round(remainingTimeoutMillis)}ms, not retrying further.`);
				return result;
			}
			diag.verbose(`Scheduling export retry in ${Math.round(retryInMillis)}ms`);
			result = await this.retry(data, remainingTimeoutMillis, retryInMillis);
		}
		if (result.status === "success") diag.verbose(`Export succeeded after ${MAX_ATTEMPTS - attempts} retry attempts.`);
		else if (result.status === "retryable") diag.info(`Export failed after maximum retry attempts (${MAX_ATTEMPTS}).`);
		else diag.info(`Export failed with non-retryable error: ${result.error}`);
		return result;
	}
	shutdown() {
		return this._transport.shutdown();
	}
};
/**
* Creates an Exporter Transport that retries on 'retryable' response.
*/
function createRetryingTransport(options) {
	return new RetryingTransport(options.transport);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/is-export-retryable.js
function isExportHTTPErrorRetryable(statusCode) {
	return statusCode === 429 || statusCode === 502 || statusCode === 503 || statusCode === 504;
}
function parseRetryAfterToMills(retryAfter) {
	if (retryAfter == null) return;
	const seconds = Number.parseInt(retryAfter, 10);
	if (Number.isInteger(seconds)) return seconds > 0 ? seconds * 1e3 : -1;
	const delay = new Date(retryAfter).getTime() - Date.now();
	if (delay >= 0) return delay;
	return 0;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/transport/fetch-transport.js
/**
* Maximum total body size for concurrent keepalive requests.
* Browsers enforce a 64KiB cumulative limit across all pending keepalive requests.
* We use 60KB to leave headroom for headers.
* @see https://github.com/whatwg/fetch/issues/679
* @see https://blog.huli.tw/2025/01/06/en/navigator-sendbeacon-64kib-and-source-code/
*/
var MAX_KEEPALIVE_BODY_SIZE = 60 * 1024;
/**
* Maximum concurrent keepalive requests.
* Chrome enforces 9 concurrent keepalive fetch requests per renderer process.
* @see https://github.com/whatwg/fetch/issues/679
* Quote: "If the renderer process is processing more than 9 requests with keepalive set, we reject a new request"
*/
var MAX_KEEPALIVE_REQUESTS = 9;
/**
* Track cumulative pending body size across all in-flight keepalive requests.
* This is necessary because the 64KiB limit is cumulative, not per-request.
*/
var pendingBodySize = 0;
/**
* Track number of pending keepalive requests.
*/
var pendingKeepaliveCount = 0;
var FetchTransport = class {
	_parameters;
	constructor(parameters) {
		this._parameters = parameters;
	}
	async send(data, timeoutMillis) {
		const abortController = new AbortController();
		const timeout = setTimeout(() => abortController.abort(), timeoutMillis);
		let fetchApi = globalThis.fetch;
		if (typeof fetchApi.__original === "function") fetchApi = fetchApi.__original;
		const requestSize = data.byteLength;
		const wouldExceedSize = pendingBodySize + requestSize > MAX_KEEPALIVE_BODY_SIZE;
		const useKeepalive = !wouldExceedSize && !(pendingKeepaliveCount >= MAX_KEEPALIVE_REQUESTS);
		if (useKeepalive) {
			pendingBodySize += requestSize;
			pendingKeepaliveCount++;
		} else {
			const reason = wouldExceedSize ? "size limit" : "count limit";
			diag.debug(`keepalive disabled: ${(requestSize / 1024).toFixed(1)}KB payload, ${pendingKeepaliveCount} pending (${reason})`);
		}
		try {
			const url = new URL(this._parameters.url);
			const response = await fetchApi(url.href, {
				method: "POST",
				headers: await this._parameters.headers(),
				body: data,
				signal: abortController.signal,
				keepalive: useKeepalive,
				mode: globalThis.location ? globalThis.location.origin === url.origin ? "same-origin" : "cors" : "no-cors"
			});
			if (response.status >= 200 && response.status <= 299) {
				diag.debug(`export response success (status: ${response.status})`);
				return { status: "success" };
			} else if (isExportHTTPErrorRetryable(response.status)) {
				diag.warn(`export response retryable (status: ${response.status})`);
				return {
					status: "retryable",
					retryInMillis: parseRetryAfterToMills(response.headers.get("Retry-After"))
				};
			}
			diag.error(`export response failure (status: ${response.status})`);
			return {
				status: "failure",
				error: /* @__PURE__ */ new Error(`Fetch request failed with non-retryable status ${response.status}`)
			};
		} catch (error) {
			if (isFetchNetworkErrorRetryable(error)) {
				diag.warn(`export request retryable (network error: ${error})`);
				return {
					status: "retryable",
					error: new Error("Fetch request encountered a network error", { cause: error })
				};
			}
			diag.error(`export request failure (error: ${error})`);
			return {
				status: "failure",
				error: new Error("Fetch request errored", { cause: error })
			};
		} finally {
			clearTimeout(timeout);
			if (useKeepalive) {
				pendingBodySize -= requestSize;
				pendingKeepaliveCount--;
			}
		}
	}
	shutdown() {}
};
/**
* Creates an exporter transport that uses `fetch` to send the data
* @param parameters applied to each request made by transport
*/
function createFetchTransport(parameters) {
	return new FetchTransport(parameters);
}
function isFetchNetworkErrorRetryable(error) {
	return error instanceof TypeError && !error.cause;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/otlp-browser-http-export-delegate.js
function createOtlpFetchExportDelegate(options, serializer) {
	return createOtlpNetworkExportDelegate(options, serializer, createRetryingTransport({ transport: createFetchTransport(options) }));
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/util.js
/**
* Parses headers from config leaving only those that have defined values
* @param partialHeaders
*/
function validateAndNormalizeHeaders(partialHeaders) {
	const headers = {};
	Object.entries(partialHeaders ?? {}).forEach(([key, value]) => {
		if (typeof value !== "undefined") headers[key] = String(value);
		else diag.warn(`Header "${key}" has invalid value (${value}) and will be ignored`);
	});
	return headers;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/otlp-http-configuration.js
function mergeHeaders(userProvidedHeaders, fallbackHeaders, defaultHeaders) {
	return async () => {
		const requiredHeaders = { ...await defaultHeaders() };
		const headers = {};
		if (fallbackHeaders != null) Object.assign(headers, await fallbackHeaders());
		if (userProvidedHeaders != null) Object.assign(headers, validateAndNormalizeHeaders(await userProvidedHeaders()));
		return Object.assign(headers, requiredHeaders);
	};
}
function validateUserProvidedUrl(url) {
	if (url == null) return;
	try {
		const base = globalThis.location?.href;
		return new URL(url, base).href;
	} catch {
		throw new Error(`Configuration: Could not parse user-provided export URL: '${url}'`);
	}
}
/**
* @param userProvidedConfiguration  Configuration options provided by the user in code.
* @param fallbackConfiguration Fallback to use when the {@link userProvidedConfiguration} does not specify an option.
* @param defaultConfiguration The defaults as defined by the exporter specification
*/
function mergeOtlpHttpConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration) {
	return {
		...mergeOtlpSharedConfigurationWithDefaults(userProvidedConfiguration, fallbackConfiguration, defaultConfiguration),
		headers: mergeHeaders(userProvidedConfiguration.headers, fallbackConfiguration.headers, defaultConfiguration.headers),
		url: validateUserProvidedUrl(userProvidedConfiguration.url) ?? fallbackConfiguration.url ?? defaultConfiguration.url
	};
}
function getHttpConfigurationDefaults(requiredHeaders, signalResourcePath) {
	return {
		...getSharedConfigurationDefaults(),
		headers: async () => requiredHeaders,
		url: "http://localhost:4318/" + signalResourcePath
	};
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/convert-legacy-http-options.js
function convertLegacyHeaders(config) {
	if (typeof config.headers === "function") return config.headers;
	return wrapStaticHeadersInFunction(config.headers);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/convert-legacy-browser-http-options.js
/**
* @deprecated this will be removed in 2.0
*
* @param config
* @param signalResourcePath
* @param requiredHeaders
*/
function convertLegacyBrowserHttpOptions(config, signalResourcePath, requiredHeaders) {
	return mergeOtlpHttpConfigurationWithDefaults({
		url: config.url,
		timeoutMillis: config.timeoutMillis,
		headers: convertLegacyHeaders(config),
		concurrencyLimit: config.concurrencyLimit
	}, {}, getHttpConfigurationDefaults(requiredHeaders, signalResourcePath));
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+otlp-exporter-base@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/otlp-exporter-base/build/esm/configuration/create-legacy-browser-delegate.js
/**
* @deprecated
* @param config
* @param serializer
* @param signalResourcePath
* @param requiredHeaders
*/
function createLegacyOtlpBrowserExportDelegate(config, serializer, signalResourcePath, requiredHeaders) {
	return createOtlpFetchExportDelegate(convertLegacyBrowserHttpOptions(config, signalResourcePath, requiredHeaders), serializer);
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+exporter-logs-otlp-http@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-logs-otlp-http/build/esm/platform/browser/OTLPLogExporter.js
/**
* Collector Logs Exporter for Web
*/
var OTLPLogExporter = class extends OTLPExporterBase {
	constructor(config = {}) {
		super(createLegacyOtlpBrowserExportDelegate(config, JsonLogsSerializer, "v1/logs", { "Content-Type": "application/json" }));
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/esm/OTLPMetricExporterOptions.js
var AggregationTemporalityPreference;
(function(AggregationTemporalityPreference) {
	AggregationTemporalityPreference[AggregationTemporalityPreference["DELTA"] = 0] = "DELTA";
	AggregationTemporalityPreference[AggregationTemporalityPreference["CUMULATIVE"] = 1] = "CUMULATIVE";
	AggregationTemporalityPreference[AggregationTemporalityPreference["LOWMEMORY"] = 2] = "LOWMEMORY";
})(AggregationTemporalityPreference || (AggregationTemporalityPreference = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/esm/OTLPMetricExporterBase.js
var CumulativeTemporalitySelector = () => AggregationTemporality.CUMULATIVE;
var DeltaTemporalitySelector = (instrumentType) => {
	switch (instrumentType) {
		case InstrumentType.COUNTER:
		case InstrumentType.OBSERVABLE_COUNTER:
		case InstrumentType.GAUGE:
		case InstrumentType.HISTOGRAM:
		case InstrumentType.OBSERVABLE_GAUGE: return AggregationTemporality.DELTA;
		case InstrumentType.UP_DOWN_COUNTER:
		case InstrumentType.OBSERVABLE_UP_DOWN_COUNTER: return AggregationTemporality.CUMULATIVE;
	}
};
var LowMemoryTemporalitySelector = (instrumentType) => {
	switch (instrumentType) {
		case InstrumentType.COUNTER:
		case InstrumentType.HISTOGRAM: return AggregationTemporality.DELTA;
		case InstrumentType.GAUGE:
		case InstrumentType.UP_DOWN_COUNTER:
		case InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
		case InstrumentType.OBSERVABLE_COUNTER:
		case InstrumentType.OBSERVABLE_GAUGE: return AggregationTemporality.CUMULATIVE;
	}
};
function chooseTemporalitySelectorFromEnvironment() {
	"cumulative".toLowerCase();
	return CumulativeTemporalitySelector;
}
function chooseTemporalitySelector(temporalityPreference) {
	if (temporalityPreference != null) {
		if (temporalityPreference === AggregationTemporalityPreference.DELTA) return DeltaTemporalitySelector;
		else if (temporalityPreference === AggregationTemporalityPreference.LOWMEMORY) return LowMemoryTemporalitySelector;
		return CumulativeTemporalitySelector;
	}
	return chooseTemporalitySelectorFromEnvironment();
}
var DEFAULT_AGGREGATION = Object.freeze({ type: AggregationType.DEFAULT });
function chooseAggregationSelector(config) {
	return config?.aggregationPreference ?? (() => DEFAULT_AGGREGATION);
}
var OTLPMetricExporterBase = class extends OTLPExporterBase {
	_aggregationTemporalitySelector;
	_aggregationSelector;
	constructor(delegate, config) {
		super(delegate);
		this._aggregationSelector = chooseAggregationSelector(config);
		this._aggregationTemporalitySelector = chooseTemporalitySelector(config?.temporalityPreference);
	}
	selectAggregation(instrumentType) {
		return this._aggregationSelector(instrumentType);
	}
	selectAggregationTemporality(instrumentType) {
		return this._aggregationTemporalitySelector(instrumentType);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+exporter-metrics-otlp-http@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-metrics-otlp-http/build/esm/platform/browser/OTLPMetricExporter.js
/**
* Collector Metric Exporter for Web
*/
var OTLPMetricExporter = class extends OTLPMetricExporterBase {
	constructor(config) {
		super(createLegacyOtlpBrowserExportDelegate(config ?? {}, JsonMetricsSerializer, "v1/metrics", { "Content-Type": "application/json" }), config);
	}
};
//#endregion
//#region utils/otel-identity.ts
var sdkPackage = "spatius-web-sdk";
var injectedSdkVersion = null;
/**
* 声明本次上报的归属身份。
*
* 与 Android `AvatarSDK.inject` 同语义:两个字段各自独立生效,只传其一时另一个
* 保持原值。版本覆盖的是 Resource 上的 `sdk.version`(scope 上的版本号另有来源,
* 不受影响)。
*
* @param identity - `sdkPackage` 形如 `spatius-web-rtc`;`sdkVersion` 为该包
*   自身的版本。空值忽略,避免误清成空字符串后整批记录失去归属。
* @internal
*/
function setSdkIdentity(identity) {
	if (identity.sdkPackage) sdkPackage = identity.sdkPackage;
	if (identity.sdkVersion) injectedSdkVersion = identity.sdkVersion;
}
/** 当前归属包名,供各通道构建 Resource 时读取。@internal */
function getSdkPackage() {
	return sdkPackage;
}
/**
* Resource 上应上报的版本号。
*
* @param hostVersion - 主库自己的版本,未被上层 SDK 声明时用它。
* @internal
*/
function resolveSdkVersion(hostVersion) {
	return injectedSdkVersion ?? hostVersion;
}
//#endregion
//#region config/constants.ts
var OTEL_ENDPOINT_BASE = "https://t.spatialwalk.top";
var OTEL_LOGS_ENDPOINT = `${OTEL_ENDPOINT_BASE}/v1/logs`;
var OTEL_METRICS_ENDPOINT = `${OTEL_ENDPOINT_BASE}/v1/metrics`;
var OTEL_TRACES_ENDPOINT = `${OTEL_ENDPOINT_BASE}/v1/traces`;
var OTEL_STREAM_NAME = "avatarkit";
var OTEL_TRACES_STREAM_NAME = "prod_traces";
/**
* Check if URL has debug=1 parameter
*/
function hasDebugParam() {
	if (typeof window === "undefined") return false;
	return new URLSearchParams(window.location.search).get("debug") === "1";
}
/**
* Comprehensive debug mode check
* Returns true if:
* - VITE_ENV_TEST is 'true', OR
* - Running in DEV mode, OR
* - URL has debug=1 parameter
*/
function isDebugMode() {
	return hasDebugParam();
}
//#endregion
//#region utils/otel-metrics.ts
/**
* OpenTelemetry Metrics Tracker (Browser Version)
*
* 独立于 logs 通道的 OTel **Metric 信号**上报（OTLP `/v1/metrics`），目标后端 OpenObserve。
* 与 logs（otel-tracker.ts）分离：各自 provider、各自 exporter、各自失败/清理。
*
* 用途：SDK 的**数值度量**（延迟、帧率、卡顿时长/次数等）走真正的 Metric 信号，
* 由 OpenObserve/Grafana 聚合出 P95/均值/SLO。日志类事件仍走 logs 通道（otel-tracker）。
*
* 全部记录为 **Histogram**：单数值 + 低基数标签。高基数字段（conversation_id / avatar_id）
* 不得作标签（基数爆炸），明细留在对应的 log 事件里。
* @internal
*/
var OTEL_METER_NAME = "spatius-avatarkit";
/** OTel HTTP client duration 指标名。 */
var HTTP_CLIENT_DURATION_METRIC = "http.client.request.duration";
/**
* Network profile 桶（**毫秒**）。后台整个 metrics 体系用 ms，且 OpenObserve 存不进浮点数
* （浮点 duration 会被后端拒/丢），因此值与桶统一用整数毫秒，不用浮点秒。
* 桶经后台确认调整：去掉 100ms 以下分级（网络 rt 极少落在此区、无区分价值），
* 并在 1000~5000ms 高区段加密（2000/3000/4000）以便看清慢请求分布。（与 android/iOS 一致。）
*
* 5 秒之上再加 10/30/60/120 秒：这是所有 HTTP 请求共用的一条 metric（靠 operation
* 标签区分），其中 `/assets/template` 是几十 MB 的大文件下载，实测约三成样本超过
* 5 秒——原先全部挤进 +Inf，是 6 秒还是 60 秒完全看不出来。前段分档不变，API 请求
* 的分辨率不受影响。
*/
var HTTP_NETWORK_BUCKETS_MS = [
	100,
	200,
	500,
	1e3,
	2e3,
	3e3,
	4e3,
	5e3,
	1e4,
	3e4,
	6e4,
	12e4
];
/**
* 播放指标的桶。默认桶（0/5/10/25/50/…/10000）对这批指标毫无分辨率：
* 帧率只可能落在 0~25，缺帧数和卡顿次数几乎全部挤在第一个桶里，分位数因此毫无意义。
* 桶按各指标的实际值域给：
*
* - 帧率：每帧一个桶。25fps 与 21fps 的观感差别正是要看的，5 档分级会把两者归成一类。
* - 帧数：正常轮次对应播放时长桶、没上屏的帧对应卡顿时长桶，都按帧间隔换算。
* - 卡顿次数：数的是次数不是帧，自成一组。
* - 百分比：每 5% 一档，0~100。
* - 时长：分两组——整轮播放是秒级，单次卡顿是一帧起步的毫秒级。
* - 延迟：音频送入是等距（要看偏离整秒多少），动画到达是等比（两种用法差一个数量级）。
* - GPU 耗时：个位数毫秒，按帧预算设档。
*
* 本 SDK 与 @spatius/avatarkit-rtc（meter 名 spatius-avatarkit-rtc）两边的指标都在这里配：
* view 只能配在创建 MeterProvider 的这一侧，rtc 那批虽由另一个包发出，桶定义也得留在此处。
* 同名概念两边共用一组桶，好让两条链路的分布能直接叠着比。
*/
/**
* 上界给到 30 而非 25：25fps 是目标帧率，正常轮次全落在那一档，若把它当上界，
* 每一轮健康播放都会挤进 +Inf 溢出桶，与真正超发的异常轮次混在一起，
* 这条 metric 就只剩「是否达标」这一个比特的信息。25 单独成档、上面再留几格，
* 达标与超发才分得开。
*/
var RTC_FPS_BUCKETS = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	30
];
/**
* 一轮播出的帧数。档位是播放时长桶除以帧间隔（40ms），和时长视角一一对应：
* 「播了 10s」与「播了 250 帧」落在同一档。
*/
var RTC_FRAME_COUNT_BUCKETS = [
	0,
	50,
	125,
	250,
	375,
	500,
	750,
	1500
];
/**
* 没能上屏的帧数（丢失/跳过/丢弃/过渡缺帧）：与正常帧数差一个数量级，
* 共用一组桶会让它们全挤在低位。档位是卡顿时长桶除以帧间隔（40ms），
* 于是「卡了 320ms」和「丢了 8 帧」落在同一档，两个视角能直接对上。
*/
var RTC_LOST_FRAME_BUCKETS = [
	0,
	1,
	2,
	4,
	8,
	16,
	32,
	64,
	128,
	256
];
/**
* 一轮里卡顿发生的次数。数的是次数不是帧，上面那套按帧间隔换算的档位对它没有意义。
* 低位逐个分档、高位翻倍：一轮几次和一轮几十次是两种情况，都要看得出来。
* 实测慢网络下一轮 35 次，因此高位必须留到三位数。
*/
var RTC_STALL_COUNT_BUCKETS = [
	0,
	1,
	2,
	3,
	4,
	5,
	10,
	20,
	40,
	80,
	160,
	320
];
var RTC_PERCENT_BUCKETS = [
	0,
	5,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50,
	55,
	60,
	65,
	70,
	75,
	80,
	85,
	90,
	95,
	100
];
/** 一轮播放的时长，秒级量级。 */
var RTC_PLAYBACK_DURATION_BUCKETS_MS = [
	0,
	2e3,
	5e3,
	1e4,
	15e3,
	2e4,
	3e4,
	6e4
];
/**
* 卡顿时长：一帧（40ms）起步逐档翻倍到 10240ms。用播放时长那组秒级的桶，
* 绝大多数卡顿会挤进第一格。
*/
var RTC_STALL_DURATION_BUCKETS_MS = [
	0,
	40,
	80,
	160,
	320,
	640,
	1280,
	2560,
	5120,
	10240
];
/**
* 音频送入节奏：tap_N 是第 N 秒音频送入的时刻，metric 记的是相对首包（tap_0）的累计 Δ。
* 流式输入下 tap_1/2/4 天然聚在 1000/2000/4000 附近，偏离多少正是要看的——喂得比实时慢，
* 后台就攒不够音频、推理迟迟不触发。等距 200ms 让这三个中心各自落在档位边界上，
* 偏移一两档就能读出来；等比会把它们挤进同一格。
*
* 上界 6000 而非 4000：4000 是 tap_4 的理想值，拿理想值当上界，正常轮次会全部挤进
* +Inf 溢出桶，与真正喂得慢的轮次混在一起。
*/
var AUDIO_LATENCY_BUCKETS_MS = [
	0,
	200,
	400,
	600,
	800,
	1e3,
	1200,
	1400,
	1600,
	1800,
	2e3,
	2200,
	2400,
	2600,
	2800,
	3e3,
	3200,
	3400,
	3600,
	3800,
	4e3,
	4200,
	4400,
	4600,
	4800,
	5e3,
	5200,
	5400,
	5600,
	5800,
	6e3
];
/**
* 动画包到达：anim_N 是第 N 组动画包到达的时刻（同样相对 tap_0 的累计 Δ）。
* 后台攒够音频（2s/4s/4s）就推理下发，所以这个值等于「攒音频的等待 + 推理 + 网络下行」，
* 与播放进度无关：一次性灌入 10s 预制音频，三个包会连着回来，全落在低位；实时流式喂，
* 则要等音频攒够，anim_2 可以到十几秒。两种用法差一个数量级，同一个直方图要都装得下，
* 因此用等比而非等距——低位密到看清推理耗时，高位疏到兜住慢速流式。
*
* 200ms 起步：网络下行本身就要这个量级，再往下细分没有意义。
*/
var ANIM_LATENCY_BUCKETS_MS = [
	0,
	200,
	400,
	800,
	1600,
	3200,
	6400,
	12800,
	25600
];
/**
* 单帧 GPU 渲染耗时。实测中低端机器可以到 30ms 上下，因此值域按机型跨度给到 100ms，
* 每 5ms 一档——而不是只覆盖高端机那几毫秒。40ms 是一帧的总预算，越过就意味着 GPU
* 单独一项已经吃满整帧；再往上到 100ms 是给最差的机型留的观测空间。
*
* webgl 没有可移植的 GPU timer，取不到样本，那几轮整条 metric 不发（见 AvatarController），
* 所以这里的分布只含 webgpu 的真实数据，不会被一堆 0 压在第一格。
*/
var GPU_RENDER_BUCKETS_MS = [
	5,
	10,
	15,
	20,
	25,
	30,
	35,
	40,
	45,
	50,
	55,
	60,
	65,
	70,
	75,
	80,
	85,
	90,
	95,
	100
];
/** metric 名 → 桶，供下面的 views 展开。 */
var BUCKET_PROFILES = [
	["playback_avg_fps", RTC_FPS_BUCKETS],
	["playback_duration_ms", RTC_PLAYBACK_DURATION_BUCKETS_MS],
	["playback_audio_duration_ms", RTC_PLAYBACK_DURATION_BUCKETS_MS],
	["playback_animation_frame_count", RTC_FRAME_COUNT_BUCKETS],
	["playback_jank_frame_count", RTC_LOST_FRAME_BUCKETS],
	["playback_stall_count", RTC_STALL_COUNT_BUCKETS],
	["playback_stall_max_ms", RTC_STALL_DURATION_BUCKETS_MS],
	["playback_stall_total_ms", RTC_STALL_DURATION_BUCKETS_MS],
	["playback_audio_stall_count", RTC_STALL_COUNT_BUCKETS],
	["playback_audio_stall_max_ms", RTC_STALL_DURATION_BUCKETS_MS],
	["playback_audio_stall_total_ms", RTC_STALL_DURATION_BUCKETS_MS],
	["playback_gpu_render_p50_ms", GPU_RENDER_BUCKETS_MS],
	["playback_gpu_render_p90_ms", GPU_RENDER_BUCKETS_MS],
	["playback_gpu_render_p95_ms", GPU_RENDER_BUCKETS_MS],
	["playback_latency_tap_1_ms", AUDIO_LATENCY_BUCKETS_MS],
	["playback_latency_tap_2_ms", AUDIO_LATENCY_BUCKETS_MS],
	["playback_latency_tap_4_ms", AUDIO_LATENCY_BUCKETS_MS],
	["playback_latency_anim_0_ms", ANIM_LATENCY_BUCKETS_MS],
	["playback_latency_anim_1_ms", ANIM_LATENCY_BUCKETS_MS],
	["playback_latency_anim_2_ms", ANIM_LATENCY_BUCKETS_MS],
	["template_resources_load_measure", [
		1e3,
		1e4,
		2e4,
		3e4,
		6e4,
		12e4
	]],
	["rtc_playback_avg_fps", RTC_FPS_BUCKETS],
	["rtc_playback_frame_count", RTC_FRAME_COUNT_BUCKETS],
	["rtc_playback_skipped_frames", RTC_LOST_FRAME_BUCKETS],
	["rtc_playback_tail_discarded", RTC_LOST_FRAME_BUCKETS],
	["rtc_playback_stall_count", RTC_STALL_COUNT_BUCKETS],
	["rtc_playback_start_transition_missing", RTC_LOST_FRAME_BUCKETS],
	["rtc_playback_end_transition_missing", RTC_LOST_FRAME_BUCKETS],
	["rtc_playback_skip_rate_pct", RTC_PERCENT_BUCKETS],
	["rtc_playback_stall_rate_pct", RTC_PERCENT_BUCKETS],
	["rtc_playback_duration_ms", RTC_PLAYBACK_DURATION_BUCKETS_MS],
	["rtc_playback_stall_total_ms", RTC_STALL_DURATION_BUCKETS_MS],
	["rtc_playback_stall_max_ms", RTC_STALL_DURATION_BUCKETS_MS],
	["rtc_transport_packets_lost", RTC_LOST_FRAME_BUCKETS],
	["rtc_transport_packets_recovered", RTC_LOST_FRAME_BUCKETS],
	["rtc_transport_packets_dropped", RTC_LOST_FRAME_BUCKETS],
	["rtc_transport_packets_out_of_order", RTC_LOST_FRAME_BUCKETS],
	["rtc_transport_rtp_packets_lost", RTC_LOST_FRAME_BUCKETS],
	["rtc_transport_rtp_loss_rate_pct", RTC_PERCENT_BUCKETS],
	["rtc_transport_rtt_ms", [
		10,
		20,
		30,
		40,
		50,
		75,
		100,
		150,
		200,
		300,
		400,
		600,
		800,
		1e3
	]],
	["rtc_transport_jitter_ms", [
		1,
		2,
		3,
		5,
		8,
		12,
		16,
		20,
		25,
		30,
		40,
		60,
		80,
		120,
		200
	]]
];
var METRIC_EXPORT_INTERVAL_MS = 1e4;
var sdkVersion$2 = "1.0.0";
var isInitialized$2 = false;
var meterProvider = null;
var histograms = /* @__PURE__ */ new Map();
/**
* Initialize OTel MeterProvider.
* 与 initializeOtel（logs）平行：同一份 resource 语义、同一套门禁与鉴权。
* @internal
*/
function initializeOtelMetrics(version, resourceAttrs) {
	if (isInitialized$2) {
		logger.log("[OTel-Metrics] Already initialized, skipping");
		return;
	}
	sdkVersion$2 = version;
	try {
		meterProvider = new MeterProvider({
			resource: resourceFromAttributes({
				[ATTR_SERVICE_NAME]: "avatarkit",
				"sdk.version": resolveSdkVersion(sdkVersion$2),
				"sdk.platform": "web",
				"sdk.package": getSdkPackage(),
				"render_sdk_version": sdkVersion$2,
				"app_id": resourceAttrs.appId || "",
				"region": resourceAttrs.region,
				"dsm": resourceAttrs.dsm
			}),
			readers: [new PeriodicExportingMetricReader({
				exporter: observeExporter(new OTLPMetricExporter({
					url: OTEL_METRICS_ENDPOINT,
					headers: {},
					temporalityPreference: AggregationTemporality.DELTA
				}), "/v1/metrics", OTEL_METRICS_ENDPOINT),
				exportIntervalMillis: METRIC_EXPORT_INTERVAL_MS
			})],
			views: [{
				instrumentName: HTTP_CLIENT_DURATION_METRIC,
				aggregation: {
					type: AggregationType.EXPLICIT_BUCKET_HISTOGRAM,
					options: { boundaries: HTTP_NETWORK_BUCKETS_MS }
				}
			}, ...BUCKET_PROFILES.map(([instrumentName, boundaries]) => ({
				instrumentName,
				aggregation: {
					type: AggregationType.EXPLICIT_BUCKET_HISTOGRAM,
					options: { boundaries: [...boundaries] }
				}
			}))]
		});
		metrics.setGlobalMeterProvider(meterProvider);
		isInitialized$2 = true;
		logger.log(`[OTel-Metrics] Initialized - endpoint: ${OTEL_METRICS_ENDPOINT}`);
	} catch (error) {
		logger.warn("[OTel-Metrics] Failed to initialize:", error instanceof Error ? error.message : String(error));
	}
}
/**
* 懒取/建一个 Histogram。name 即 metric 名（如 `fetch_avatar_latency`）。
*/
function getHistogram(name) {
	if (!meterProvider) return null;
	let h = histograms.get(name);
	if (!h) {
		h = metrics.getMeter(OTEL_METER_NAME, sdkVersion$2).createHistogram(name);
		histograms.set(name, h);
	}
	return h;
}
/**
* 本周期内是否写入过**业务** metric。
*
* 观测遥测通道自身的那条记录（http.client.request.duration 的 /v1/* operation）有意
* 不弄脏它：那条记录本身产生于「导出」这个动作，若也算数，就成了
* 导出 → 写入 → 下周期非空 → 又导出 → 又写入 的永动机，用户什么都不做也每 10s 发一包。
*
* 只有真实业务 metric 才把它置真；metrics 导出前若为假就整轮跳过，观测记录攒着等下一趟
* 真有业务数据的车捎走。
*/
var hasBusinessMetric = false;
/** 供导出侧读取并复位。@internal */
function takeBusinessMetricFlag() {
	const v = hasBusinessMetric;
	hasBusinessMetric = false;
	return v;
}
/**
* 记录一个 metric 数据点（Histogram）。
* @param name metric 名
* @param value 数值（延迟 ms / 帧率 / 时长 / 次数 / 比率等）
* @param attributes 低基数标签（dsm / is_fallback / renderer_backend / region 等）。
*                   **不要**传高基数字段（conversation_id / avatar_id）——基数爆炸。
* @internal
*/
function recordMetric(name, value, attributes = {}) {
	if (!Number.isFinite(value)) return;
	const h = getHistogram(name);
	if (!h) return;
	try {
		if (name !== HTTP_CLIENT_DURATION_METRIC || !String(attributes.operation ?? "").startsWith("/v1/")) hasBusinessMetric = true;
		h.record(value, attributes);
	} catch (error) {
		logger.warn(`[OTel-Metrics] Failed to record ${name}:`, error instanceof Error ? error.message : String(error));
	}
}
/**
* 记录一次 HTTP client 请求的 duration（OTel 官方 `http.client.request.duration`，秒单位、
* Network profile 桶）。对齐公司级 Transaction 标准：只带低基数维度，成功判定由状态码统一裁定。
*
* @param operation  低基数 operation（URL template / 显式业务动作，如 `/bootstrap`、`/v2/avatar/{id}`）。
*                   **绝不传原始 URL / 真实 id**；不可用时传 `_OTHER`。
* @param method     HTTP 方法（GET/POST…）。
* @param durationMs 请求耗时（**整数毫秒**；调用方传入前已 Math.round，避免浮点上报失败）。
* @param statusCode HTTP 响应状态码；transport error（无响应）传 undefined。
* @param serverAddress 目标 host（低基数，如 global.spatialwalk.top）。
* @internal
*/
function recordHttpClientDuration(params) {
	const { operation, method, durationMs, statusCode, serverAddress } = params;
	const attrs = {
		"http.request.method": method,
		"operation": operation || "_OTHER"
	};
	if (serverAddress) attrs["server.address"] = serverAddress;
	if (typeof statusCode === "number") attrs["http.response.status_code"] = statusCode;
	else attrs["error.type"] = "transport_error";
	recordMetric(HTTP_CLIENT_DURATION_METRIC, durationMs, attrs);
}
/**
* Cleanup：flush 剩余 metric 并关闭 provider。
* @internal
*/
function cleanupOtelMetrics() {
	if (!isInitialized$2 || !meterProvider) return;
	try {
		meterProvider.forceFlush().catch(() => {});
		meterProvider.shutdown().catch((error) => {
			logger.warn("[OTel-Metrics] Shutdown error:", error instanceof Error ? error.message : String(error));
		});
	} catch (error) {
		logger.warn("[OTel-Metrics] Failed to cleanup:", error instanceof Error ? error.message : String(error));
	} finally {
		isInitialized$2 = false;
		meterProvider = null;
		histograms.clear();
	}
}
//#endregion
//#region utils/otel-export-observer.ts
/**
* 遥测通道自身的送达可观测性 —— 给 OTLP 导出请求做 Transaction 上报。
*
* 三条通道（logs / metrics / traces）此前把导出结果直接透传给 BatchProcessor 就丢了：
* 导出批量失败（网络、CDN 缓存、鉴权、后端 5xx）在后台侧只表现为「某个 app_id 数据变少」，
* 分不清是真没数据还是上报挂了。之前 EdgeOne 边缘缓存无 ACAO 头导致 CORS 全挂就是这类。
*
* 复用业务请求那套 `http.client.request.duration`（同 metric 名、同 Network profile 桶、
* 同成败判定），只是新增 operation 取值。后台不必为此建新看板。
*
* ## 自举局限（务必知悉）
*
* 这条上报**走的正是它要观测的通道**，所以：
* - 通道整体挂掉时，这条 metric 同样发不出去 —— 覆盖不了「全挂」场景。全挂在后台侧的
*   表现是该 app_id 数据整体消失，那本身才是信号。
* - 真正能观测到的是**部分失败**（三条通道各自独立 exporter，logs 挂了 metrics 可能还通）
*   与**间歇失败**（断续失败后恢复，失败计数随下一批发出）。
*
* ## 记录时机：暂存，等下一次导出搭车
*
* 导出结束时**不直接写 histogram**，只记进内存里的 pending 列表；等下一次导出发生时，
* 才在其**开始**把 pending 写进 histogram。
*
* 这样做是为了让 metrics 通道自己也能被观测。直接写会形成自反馈：metrics 的导出由
* `PeriodicExportingMetricReader` 周期驱动，写入产生数据点 → 下周期必须导出 → 导出
* 又写入 —— 空闲时也永不静默。改成暂存后，**写入本身不触发任何导出**，只是等下一次
* 本来就要发生的导出把它带走，环就断了。
*
* 代价是延迟一个周期：reader 先 `collect()` 快照、再 `_export()` 发送（见
* PeriodicExportingMetricReader 的 _runOnce），所以在导出时写入必然错过本轮快照，
* 数据落在下一轮。对成功率这种趋势指标，慢一个周期无妨。
*
* 副作用是最后一批 pending 会随页面关闭丢失（进程结束，没有"下一次导出"）。同样可接受：
* 丢的是最后 10s 的成功率样本，不是业务数据。
*
* @internal
*/
/**
* 已完成但尚未写进 histogram 的导出结果。上限用于兜底：正常情况下每个周期都会被
* 排空，只有在「导出彻底停止但仍有 record 进来」这类异常下才会堆积。
*/
var pending = [];
var PENDING_LIMIT = 256;
/** 暂存一次 OTLP 导出的结果，等下一次导出搭车写入（见文件头「记录时机」）。 */
function enqueueExportResult(p) {
	if (pending.length >= PENDING_LIMIT) pending.shift();
	pending.push(p);
}
/**
* 把暂存的导出结果写进 histogram。在**导出开始时**调用：此时 reader 已完成本轮
* collect 快照，写入的数据会随下一轮发出。
*/
function flushPendingExports() {
	if (pending.length === 0) return;
	const batch = pending.splice(0, pending.length);
	for (const p of batch) recordHttpClientDuration({
		operation: p.channel,
		method: "POST",
		durationMs: p.durationMs,
		statusCode: p.success ? 200 : void 0,
		serverAddress: p.serverAddress
	});
}
/** 从 OTLP endpoint URL 取 host（低基数），取不到时退回 `_OTHER`。 */
function hostOf(endpoint) {
	try {
		return new URL(endpoint).host;
	} catch {
		return "_OTHER";
	}
}
/**
* 给任意 OTLP exporter 包一层导出结果观测。原样透传参数与 callback，只在 callback
* 回来时把结果暂存 —— 不改变导出行为，也不吞异常。
*/
function observeExporter(inner, channel, endpoint) {
	const serverAddress = hostOf(endpoint);
	const wrapped = new Proxy(inner, { get(target, prop, receiver) {
		if (prop === "export") return observedExport;
		const value = Reflect.get(target, prop, receiver);
		return typeof value === "function" ? value.bind(target) : value;
	} });
	const observedExport = function(items, resultCallback) {
		try {
			flushPendingExports();
		} catch {}
		if (channel === "/v1/metrics" && !takeBusinessMetricFlag()) {
			resultCallback({ code: 0 });
			return;
		}
		const startMs = Date.now();
		inner.export(items, (result) => {
			try {
				enqueueExportResult({
					channel,
					durationMs: Math.round(Date.now() - startMs),
					success: result.code === 0,
					serverAddress
				});
			} catch {}
			resultCallback(result);
		});
	};
	return wrapped;
}
//#endregion
//#region utils/event-store.ts
/**
* Event Store - Persistent buffer for OTel telemetry events.
*
* Each emitted event is written here before being handed to the OTel
* BatchProcessor. When the wrapper exporter picks a batch up for HTTP
* upload it deletes those records — so anything still here on next
* startup is unsent and gets re-emitted (replay).
*
* Schema is intentionally minimal: no status / retry_count. A record's
* presence in the store means "not yet handed to inner.export".
* @internal
*/
var DB_NAME = "avatarkit_events";
var STORE_NAME = "events";
var DB_VERSION = 1;
var EventStore = class {
	db = null;
	initPromise = null;
	initialize() {
		if (this.db) return Promise.resolve();
		if (this.initPromise) return this.initPromise;
		this.initPromise = new Promise((resolve, reject) => {
			const req = indexedDB.open(DB_NAME, DB_VERSION);
			req.onerror = () => reject(/* @__PURE__ */ new Error("Failed to open avatarkit_events"));
			req.onsuccess = () => {
				this.db = req.result;
				resolve();
			};
			req.onupgradeneeded = (e) => {
				const db = e.target.result;
				if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME, {
					keyPath: "id",
					autoIncrement: true
				});
			};
		});
		return this.initPromise;
	}
	/**
	* Append a record, returning the auto-generated id.
	* Caller must use this id as the `_index` attribute when emitting to OTel.
	*/
	async add(record) {
		if (!this.db) await this.initialize();
		if (!this.db) throw new Error("event-store not available");
		return new Promise((resolve, reject) => {
			const req = this.db.transaction([STORE_NAME], "readwrite").objectStore(STORE_NAME).add(record);
			req.onsuccess = () => resolve(req.result);
			req.onerror = () => reject(/* @__PURE__ */ new Error("event-store add failed"));
		});
	}
	/**
	* Atomically: for each id, check whether it still exists in the store;
	* if so, delete it and include it in the returned set. Used by the
	* wrapper exporter to claim ownership of a batch — only records the
	* caller successfully "took" should be forwarded to inner.export.
	*
	* This is the multi-tab dedup mechanism: when Tab B starts and replays
	* records that Tab A also still has in memory, only one tab will win
	* the take and actually send.
	*
	* The get + delete pair runs inside a single readwrite transaction so
	* concurrent tabs see consistent state.
	*/
	async takeIfExists(ids) {
		const taken = /* @__PURE__ */ new Set();
		if (ids.length === 0) return taken;
		if (!this.db) await this.initialize();
		if (!this.db) return taken;
		return new Promise((resolve) => {
			const tx = this.db.transaction([STORE_NAME], "readwrite");
			const store = tx.objectStore(STORE_NAME);
			let pending = ids.length;
			const finish = () => {
				if (--pending === 0) resolve(taken);
			};
			for (const id of ids) {
				const req = store.get(id);
				req.onsuccess = () => {
					if (req.result !== void 0) {
						taken.add(id);
						store.delete(id);
					}
					finish();
				};
				req.onerror = () => finish();
			}
			tx.onerror = () => {
				logger.warn("[event-store] takeIfExists tx failed");
				resolve(taken);
			};
		});
	}
	/**
	* Return all stored records. Used on startup to replay anything left
	* over from a previous (possibly crashed) session.
	*/
	async getAll() {
		if (!this.db) await this.initialize();
		if (!this.db) return [];
		return new Promise((resolve) => {
			const req = this.db.transaction([STORE_NAME], "readonly").objectStore(STORE_NAME).getAll();
			req.onsuccess = () => resolve(req.result || []);
			req.onerror = () => {
				logger.warn("[event-store] getAll failed");
				resolve([]);
			};
		});
	}
};
var eventStore = new EventStore();
//#endregion
//#region utils/bootstrap.ts
/**
* Bootstrap 全球接入入口
*
* 单一出处：SDK 启动调用的全球调度接口，一次请求同时返回
* 接入 region（区域自动调度）与 time_sync（服务端时间校准）。
*
* 时钟校准（clock-sync）和 region 解析（region-resolver）各自按需调用本函数，
* 互不耦合——校准需要多次采样 + 周期重校，region 只需一次。
*
* @internal
*/
/** bootstrap 全球入口 */
var BOOTSTRAP_URL = "https://global.spatialwalk.top/bootstrap";
/** bootstrap 的低基数 operation / host（http.client.request.duration 维度）。 */
var BOOTSTRAP_OPERATION = "/bootstrap";
var BOOTSTRAP_HOST = "global.spatialwalk.top";
/**
* 发一次 bootstrap 请求。
*
* 不带 Content-Type 头：让请求保持"简单请求"，避免触发 CORS 预检
* （bootstrap 预检响应未放行 content-type 头）。body 仍是 JSON 字符串。
*
* @param opts 请求上下文
* @param signal 可选 AbortSignal（超时/取消）
* @param onResponse 响应头到达、body 解析之前的回调。时钟校准用它取 RTT 终点——
*   JSON 解析耗时必须排除在网络往返之外，否则 RTT 系统性偏大。
* @returns 解析后的响应；网络错/非 2xx/解析失败均抛出。
* @internal
*/
async function fetchBootstrap(opts, signal, onResponse) {
	const startMs = performance.now();
	let res;
	try {
		res = await fetch(BOOTSTRAP_URL, {
			method: "POST",
			body: JSON.stringify({
				app_id: opts.appId,
				sdk_version: opts.sdkVersion,
				region: opts.region ?? "auto",
				platform: opts.platform ?? "web"
			}),
			cache: "no-store",
			signal
		});
	} catch (e) {
		recordHttpClientDuration({
			operation: BOOTSTRAP_OPERATION,
			method: "POST",
			durationMs: Math.round(performance.now() - startMs),
			serverAddress: BOOTSTRAP_HOST
		});
		throw e;
	}
	recordHttpClientDuration({
		operation: BOOTSTRAP_OPERATION,
		method: "POST",
		durationMs: Math.round(performance.now() - startMs),
		statusCode: res.status,
		serverAddress: BOOTSTRAP_HOST
	});
	onResponse?.();
	if (!res.ok) throw new Error(`bootstrap HTTP ${res.status}`);
	return await res.json();
}
//#endregion
//#region utils/clock-sync.ts
/**
* Clock Sync (Browser)
*
* 时钟管理器：维护"本地基准"和"后台基准"两个绝对时间锚点，校准时一起刷新，
* 对外提供 localNow() / serverNow() 两个读数（= 基准 + 单调流逝）。
*
* - 本地时间戳字段（原有）：改用 localNow()，不再直接读 Date.now()。
* - 后台时间戳字段（新增）：serverNow()，未校准到后台时返回 null（上报留空）。
*
* 时间源：全球接入 bootstrap 接口的 time_sync（server_receive_ms / server_send_ms），
* 用 Cristian 四时间戳法估算后台基准（扣掉服务端内部处理耗时）。
*
* @internal
*/
/** 单次采样超时 */
var PROBE_TIMEOUT_MS = 5e3;
/** 采样次数（取 RTT 最小的一次，降低网络抖动误差） */
var SAMPLE_COUNT = 3;
/** 定时重校准间隔：20 分钟 */
var RECALIBRATE_INTERVAL_MS = 1200 * 1e3;
var ClockSync = class {
	localBase = Date.now();
	serverBase = null;
	monoAtCalibrate = performance.now();
	/** 首次校准是否已落定（落定前埋点应挂队列） */
	calibrated = false;
	appId = "";
	sdkVersion = "";
	platform = "web";
	timer = null;
	visibilityHandler = null;
	syncing = false;
	/** 首次校准落定后触发的回调（供上报层 flush 挂起队列） */
	readyCallbacks = [];
	/** 首次校准是否已完成（供上报闸门判断） */
	isReady() {
		return this.calibrated;
	}
	/**
	* 注册"首次校准落定"回调（成功或失败都算落定）。
	* 若已落定则立即同步触发一次。
	*/
	onReady(cb) {
		if (this.calibrated) {
			cb();
			return;
		}
		this.readyCallbacks.push(cb);
	}
	fireReady() {
		const cbs = this.readyCallbacks;
		this.readyCallbacks = [];
		for (const cb of cbs) try {
			cb();
		} catch {}
	}
	/** 本地时间戳：本地基准 + 单调流逝。一定有值。 */
	localNow() {
		return this.localAt(performance.now());
	}
	/** 后台时间戳：后台基准 + 单调流逝。未校准到后台时返回 null（上报留空）。 */
	serverNow() {
		return this.serverAt(performance.now());
	}
	/**
	* 仅供单测：直接设定基准，绕过真实网络校准。
	* @internal
	*/
	__setBaselineForTest(opts) {
		this.localBase = opts.localBase;
		this.serverBase = opts.serverBase;
		this.monoAtCalibrate = opts.monoAtCalibrate;
		this.calibrated = opts.calibrated ?? true;
	}
	/** 用"指定单调读数"算本地时间戳（供入队事件按入队时刻还原）。取整到毫秒。 */
	localAt(mono) {
		return Math.round(this.localBase + (mono - this.monoAtCalibrate));
	}
	/** 用"指定单调读数"算后台时间戳；未校准到后台时返回 null。取整到毫秒。 */
	serverAt(mono) {
		if (this.serverBase === null) return null;
		return Math.round(this.serverBase + (mono - this.monoAtCalibrate));
	}
	/**
	* 用时间戳做逻辑（端到端延迟 tap_N/anim_N 等）时用：优先后台时间戳，
	* 拿不到后台才退本地，保证与后台时刻同一时间线对齐。
	*/
	timelineNow() {
		return this.serverNow() ?? this.localNow();
	}
	/**
	* 把"采集时刻的单调读数"换算成时间线时刻（优先后台、退本地）。
	* 供标记解析用——采集时若校准未完成，先记单调读数，上报时再用最新基准换算。
	* @param mono 采集那一刻的 performance.now()
	*/
	resolveMono(mono) {
		const drift = mono - this.monoAtCalibrate;
		const base = this.serverBase ?? this.localBase;
		return Math.round(base + drift);
	}
	/**
	* 启动：立即校准一次，并注册定时 + 页面可见性重校准。
	* 幂等；fire-and-forget，不阻塞初始化。
	* @internal
	*/
	start(opts) {
		this.appId = opts.appId;
		this.sdkVersion = opts.sdkVersion;
		this.calibrate();
		if (this.timer === null) this.timer = setInterval(() => void this.calibrate(), RECALIBRATE_INTERVAL_MS);
		if (this.visibilityHandler === null && typeof document !== "undefined") {
			this.visibilityHandler = () => {
				if (document.visibilityState === "visible") this.calibrate();
			};
			document.addEventListener("visibilitychange", this.visibilityHandler);
		}
	}
	/**
	* 校准一次：多采样取最小 RTT 的样本，同时刷新本地/后台基准与单调零点。
	* - 拿到后台：serverBase 更新为估算值。
	* - 拿不到后台：serverBase 置空（后台时间戳留空），localBase 照常更新为当前墙钟。
	* 已校准过后若本次全失败：保留旧基准、跳过（不把好基准换成更差的）。
	* @internal
	*/
	async calibrate() {
		if (this.syncing) return;
		this.syncing = true;
		try {
			const samples = [];
			for (let i = 0; i < SAMPLE_COUNT; i++) {
				const s = await this.probe();
				if (s) samples.push(s);
			}
			if (samples.length > 0) {
				const best = samples.reduce((a, b) => b.rttNet < a.rttNet ? b : a);
				const firstCalibration = !this.calibrated;
				this.serverBase = best.serverBase;
				this.localBase = best.localBase;
				this.monoAtCalibrate = best.monoAtCalibrate;
				this.calibrated = true;
				if (firstCalibration) this.fireReady();
				logMetric("time_calibrated", Math.round(best.rttNet), { has_server: true });
				return;
			}
			if (this.calibrated) {
				logger.log("[ClockSync] recalibrate got no server time, keeping previous baseline");
				return;
			}
			this.localBase = Date.now();
			this.monoAtCalibrate = performance.now();
			this.serverBase = null;
			this.calibrated = true;
			this.fireReady();
			logEvent("time_calibrated", "info", { has_server: false });
		} finally {
			this.syncing = false;
		}
	}
	/** 单次采样：请求 bootstrap，返回一组 (rttNet, serverBase, monoAtCalibrate, localBase)；失败返回 null。 */
	async probe() {
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), PROBE_TIMEOUT_MS);
		try {
			let t1 = 0;
			let localAtT1 = 0;
			const t0 = performance.now();
			const ts = (await fetchBootstrap({
				appId: this.appId,
				sdkVersion: this.sdkVersion,
				region: "auto",
				platform: this.platform
			}, controller.signal, () => {
				t1 = performance.now();
				localAtT1 = Date.now();
			}))?.time_sync;
			if (!ts || typeof ts.server_receive_ms !== "number" || typeof ts.server_send_ms !== "number") return null;
			const rttNet = t1 - t0 - (ts.server_send_ms - ts.server_receive_ms);
			const serverBase = ts.server_send_ms + rttNet / 2;
			return {
				rttNet: Math.max(0, rttNet),
				serverBase,
				monoAtCalibrate: t1,
				localBase: localAtT1
			};
		} catch {
			return null;
		} finally {
			clearTimeout(timer);
		}
	}
	/** 清理定时器与监听器。 */
	cleanup() {
		if (this.timer !== null) {
			clearInterval(this.timer);
			this.timer = null;
		}
		if (this.visibilityHandler !== null && typeof document !== "undefined") {
			document.removeEventListener("visibilitychange", this.visibilityHandler);
			this.visibilityHandler = null;
		}
	}
};
var clockSync = new ClockSync();
//#endregion
//#region utils/report-marks.ts
/**
* Report Marks（上报占位标记）
*
* 有些上报字段的最终值在"采集时刻"还算不出来（典型：时间戳，采集时时钟可能还没
* 校准完成）。这时采集端存一个**标记对象**占位，真正上报那一刻再统一解析成实际值。
*
* 目前只有一种标记：`mono`（单调读数 → 时间线时刻），但结构上可扩展更多标记类型，
* 解析逻辑（resolveMarks）共用。
*
* @internal
*/
/** 标记对象的判别字段 */
var MARK_KEY = "__mark";
/**
* 造一个"单调读数时间戳"标记：采集那一刻记下 performance.now()，
* 上报时由 resolveMarks 换算成时间线时刻（优先后台时间戳、退本地）。
* @internal
*/
function monoTimestamp() {
	return {
		[MARK_KEY]: "mono",
		value: performance.now()
	};
}
/**
* 把**已经取好**的 `performance.now()` 读数包成 MonoMark。
*
* 用于时刻不在当前线程/当前时机产生的场景：Opus 编解码在 Worker 里逐包打点，那些
* 时刻随结果回传后才到主线程手上，不能用 `monoTimestamp()` 重新取（那会变成
* 「整批结果回来」的时刻，把逐包的时间分布抹平）。
*
* ⚠️ 传进来的值必须已换算到**主线程**的 `performance.now()` 轴上。Worker 有自己的
* time origin，直接回传它的 `performance.now()` 会得到负的 dur_ms（实测 -8292）；
* 各 worker 均以 `timeOrigin + now()` 发绝对时刻，由 proxy 减去主线程 timeOrigin。
*/
function monoMarkFrom(value) {
	return {
		[MARK_KEY]: "mono",
		value
	};
}
function isMark(v) {
	return typeof v === "object" && v !== null && MARK_KEY in v;
}
function resolveMark(mark) {
	switch (mark[MARK_KEY]) {
		case "mono": return clockSync.resolveMono(mark.value);
	}
}
/**
* 递归遍历 contents，把其中的标记对象解析成实际值；非标记字段原样保留。
* 上报前调用一次。支持嵌套对象与数组（如 playback_quality.latency 内的 tap/anim 标记）；
* 无标记时原对象直接返回（零拷贝），有标记时只拷贝命中的层。
* @internal
*/
function resolveMarks(contents) {
	return resolveValue(contents);
}
function resolveValue(value) {
	if (isMark(value)) return resolveMark(value);
	if (Array.isArray(value)) {
		let out = null;
		for (let i = 0; i < value.length; i++) {
			const resolved = resolveValue(value[i]);
			if (resolved !== value[i]) {
				if (!out) out = [...value];
				out[i] = resolved;
			}
		}
		return out ?? value;
	}
	if (typeof value === "object" && value !== null) {
		const obj = value;
		let out = null;
		for (const [k, v] of Object.entries(obj)) {
			const resolved = resolveValue(v);
			if (resolved !== v) {
				if (!out) out = { ...obj };
				out[k] = resolved;
			}
		}
		return out ?? value;
	}
	return value;
}
//#endregion
//#region utils/otel-tracker.ts
/**
* OpenTelemetry Logs Tracker (Browser Version)
*
* OTel logs 上报通道，目标后端 OpenObserve。独立初始化、独立失败、独立清理。
* @internal
*/
var OTEL_LOGGER_NAME = "spatius-avatarkit";
var sdkVersion$1 = "1.0.0";
var isInitialized$1 = false;
var loggerProvider = null;
var eventQueue = [];
var preCalibrationQueue = [];
function severityFromLevel(level) {
	switch (level) {
		case "debug": return {
			severityNumber: SeverityNumber.DEBUG,
			severityText: "DEBUG"
		};
		case "info": return {
			severityNumber: SeverityNumber.INFO,
			severityText: "INFO"
		};
		case "warning": return {
			severityNumber: SeverityNumber.WARN,
			severityText: "WARN"
		};
		case "error": return {
			severityNumber: SeverityNumber.ERROR,
			severityText: "ERROR"
		};
	}
}
/**
* Initialize OTel logger provider.
* @internal
*/
function initializeOtel(version, resourceAttrs) {
	if (isInitialized$1) {
		logger.log("[OTel] Already initialized, skipping");
		return;
	}
	sdkVersion$1 = version;
	try {
		loggerProvider = new LoggerProvider({
			resource: resourceFromAttributes({
				[ATTR_SERVICE_NAME]: "avatarkit",
				"sdk.version": resolveSdkVersion(sdkVersion$1),
				"sdk.platform": "web",
				"sdk.package": getSdkPackage(),
				"render_sdk_version": sdkVersion$1,
				"app_id": resourceAttrs.appId || "",
				"region": resourceAttrs.region,
				"dsm": resourceAttrs.dsm
			}),
			processors: [new BatchLogRecordProcessor(new ReliableExporter(observeExporter(new OTLPLogExporter({
				url: OTEL_LOGS_ENDPOINT,
				headers: { "stream-name": OTEL_STREAM_NAME }
			}), "/v1/logs", OTEL_LOGS_ENDPOINT)))]
		});
		logs.setGlobalLoggerProvider(loggerProvider);
		isInitialized$1 = true;
		logger.log(`[OTel] Initialized successfully - endpoint: ${OTEL_LOGS_ENDPOINT}, stream: ${OTEL_STREAM_NAME}`);
		flushEventQueue();
		clockSync.onReady(() => flushPreCalibrationQueue());
		replayPersistedEvents().catch(() => {});
	} catch (error) {
		logger.warn("[OTel] Failed to initialize:", error instanceof Error ? error.message : String(error));
	}
}
function toAnyValue(value) {
	if (value === null || value === void 0) return null;
	const t = typeof value;
	if (t === "string" || t === "number" || t === "boolean") return value;
	if (Array.isArray(value)) return value.map(toAnyValue);
	if (t === "object") {
		const out = {};
		for (const [k, v] of Object.entries(value)) out[k] = toAnyValue(v);
		return out;
	}
	return String(value);
}
function toAttributes(input) {
	const out = {};
	for (const [k, v] of Object.entries(input)) out[k] = toAnyValue(v);
	return out;
}
function emitLogRecord(event, level, contents, timestamp) {
	if (!loggerProvider) return;
	const otelLogger = logs.getLogger(OTEL_LOGGER_NAME, sdkVersion$1);
	const logContext = idManager.getLogContext();
	const { severityNumber, severityText } = severityFromLevel(level);
	const sessionToken = idManager.getSessionToken() ?? "";
	const raw = {
		"event.name": event,
		"user_id": logContext.user_id || "",
		"client_id": logContext.client_id,
		"session_id": logContext.session_id,
		"session_token_suffix": sessionToken ? sessionToken.slice(-8) : "",
		...contents
	};
	const hrTime = [Math.trunc(timestamp / 1e3), timestamp % 1e3 * 1e6];
	otelLogger.emit({
		timestamp: hrTime,
		severityNumber,
		severityText,
		body: event,
		attributes: toAttributes(raw)
	});
}
function flushEventQueue() {
	if (!loggerProvider || eventQueue.length === 0) return;
	logger.log(`[OTel] Flushing ${eventQueue.length} queued events`);
	for (const { event, level, contents, timestamp } of eventQueue) try {
		emitLogRecord(event, level, contents, timestamp);
	} catch (error) {
		logger.warn(`[OTel] Failed to flush queued event ${event}:`, error instanceof Error ? error.message : String(error));
	}
	eventQueue.length = 0;
}
/**
* Report event to OTel.
*
* Implementation: persist to event-store first, then emit to OTel with the
* store id as `_index`. The wrapper exporter deletes the persisted record
* the moment it picks the batch up for HTTP upload — so any record still
* in the store on next startup is unsent and will be replayed.
* @internal
*/
function trackEventOtel(event, level = "info", contents = {}) {
	if (!clockSync.isReady()) {
		preCalibrationQueue.push({
			event,
			level,
			contents,
			enqueueMono: performance.now()
		});
		return;
	}
	emitOtelEvent(event, level, contents, performance.now());
}
/**
* 首次校准落定后，重放挂起的早期事件（用各自入队时刻还原时间戳）。
* @internal
*/
function flushPreCalibrationQueue() {
	if (preCalibrationQueue.length === 0) return;
	const pending = preCalibrationQueue.splice(0, preCalibrationQueue.length);
	for (const e of pending) emitOtelEvent(e.event, e.level, e.contents, e.enqueueMono);
}
/**
* 实际处理一条 OTel 事件：解析标记、算双时间戳、持久化 + emit。
* @param atMono 用于换算时间戳的单调读数（即时=当前，挂起重放=入队时刻）
* @internal
*/
function emitOtelEvent(event, level, contents, atMono) {
	contents = resolveMarks(contents);
	const timestamp = clockSync.localAt(atMono);
	const serverTs = clockSync.serverAt(atMono);
	if (serverTs !== null) contents = {
		...contents,
		server_timestamp: serverTs
	};
	eventStore.add({
		event,
		level,
		contents,
		timestamp
	}).then((id) => {
		const contentsWithIndex = {
			...contents,
			_index: id
		};
		if (!loggerProvider) return;
		try {
			emitLogRecord(event, level, contentsWithIndex, timestamp);
		} catch (error) {
			logger.warn("[OTel] Failed to track event:", error instanceof Error ? error.message : String(error));
		}
	}).catch((error) => {
		logger.warn("[OTel] event-store write failed, emitting without persistence:", error instanceof Error ? error.message : String(error));
		if (!loggerProvider) {
			eventQueue.push({
				event,
				level,
				contents,
				timestamp
			});
			return;
		}
		try {
			emitLogRecord(event, level, contents, timestamp);
		} catch (e) {
			logger.warn("[OTel] Failed to track event:", e instanceof Error ? e.message : String(e));
		}
	});
}
/**
* Wrapper around OTLPLogExporter that:
* 1. Extracts `_index` from each record's attributes (set by trackEventOtel).
* 2. Deletes the corresponding event-store rows immediately — the moment
*    we hand the batch off to the inner HTTP exporter we consider the
*    SDK done with persistence. (No retry, no failure-bookkeeping.)
* 3. Strips `_index` from a cloned record list before calling inner.export
*    so the attribute does not leak to OpenObserve.
*
* Rationale for "delete on handoff, not on success":
*   - If the HTTP POST fails after this point, we lose this batch. Accepted.
*   - If we keep the records and try to mark/sweep on success/failure, the
*     bookkeeping (status, retry, multi-tab orphans) blew up the complexity
*     vs. real-world value. Skipped.
*   - Records still in the store on next startup were never picked up at
*     all — those are the worthwhile replay candidates.
*/
var ReliableExporter = class {
	inner;
	constructor(inner) {
		this.inner = inner;
	}
	export(records, callback) {
		const ids = [];
		for (const r of records) {
			const id = r.attributes["_index"];
			if (typeof id === "number") ids.push(id);
		}
		const proceed = (taken) => {
			const remaining = new Set(taken);
			const toSend = records.filter((r) => {
				const id = r.attributes["_index"];
				if (typeof id !== "number") return true;
				if (remaining.has(id)) {
					remaining.delete(id);
					return true;
				}
				return false;
			});
			if (toSend.length === 0) {
				callback({ code: 0 });
				return;
			}
			for (const r of toSend) delete r.attributes["_index"];
			this.inner.export(toSend, callback);
		};
		if (ids.length === 0) {
			proceed(/* @__PURE__ */ new Set());
			return;
		}
		eventStore.takeIfExists(ids).then(proceed).catch((e) => {
			logger.warn("[OTel] takeIfExists failed, falling back to send-all:", e instanceof Error ? e.message : String(e));
			proceed(new Set(ids));
		});
	}
	shutdown() {
		return this.inner.shutdown();
	}
	forceFlush() {
		return this.inner.forceFlush();
	}
};
/**
* Replay events left in the store from a previous (possibly crashed) session.
* Called once during initializeOtel after loggerProvider is ready.
*/
async function replayPersistedEvents() {
	try {
		const pending = await eventStore.getAll();
		if (pending.length === 0) return;
		logger.log(`[OTel] Replaying ${pending.length} persisted events from previous session`);
		for (const e of pending) try {
			emitLogRecord(e.event, e.level, {
				...e.contents,
				_index: e.id
			}, e.timestamp);
		} catch (error) {
			logger.warn(`[OTel] Failed to replay event ${e.event}:`, error instanceof Error ? error.message : String(error));
		}
		if (loggerProvider) loggerProvider.forceFlush().catch(() => {});
	} catch (error) {
		logger.warn("[OTel] Failed to load persisted events:", error instanceof Error ? error.message : String(error));
	}
}
/**
* Cleanup OTel (flush remaining events and shutdown).
* @internal
*/
function cleanupOtel() {
	if (!isInitialized$1 || !loggerProvider) return;
	try {
		loggerProvider.shutdown().catch((error) => {
			logger.warn("[OTel] Shutdown error:", error instanceof Error ? error.message : String(error));
		});
		isInitialized$1 = false;
		loggerProvider = null;
		logger.log("[OTel] Cleaned up");
	} catch (error) {
		logger.warn("[OTel] Failed to cleanup:", error instanceof Error ? error.message : String(error));
		isInitialized$1 = false;
		loggerProvider = null;
	}
}
//#endregion
//#region utils/telemetry.ts
/**
* Telemetry facade for SDK-internal events and metrics.
*
* Every event goes to the OTel channels only (logs / metrics / traces, see
* `otel-*.ts`). The second, product-analytics channel that used to be dual-sent
* from here was removed in 2026-09 (after 1.3.9); see CHANGELOG.
* @internal
*/
/**
* 客户端环境字段，随每条 OTel log 注入。
* 全部从浏览器 API 现取，不解析 UA/不造设备信息，
* 浏览器/OS/设备类型交给后端从 user_agent 解析。GeoIP（国家/城市/IP）由后端从 IP 推断，此处不涉及。
* 每条 log 实时取：url/pathname 随 SPA 路由变，取当前值才准。全程 try/catch 兜底，缺失即省略该字段。
* @internal
*/
function clientContextFields() {
	const fields = {};
	try {
		if (typeof window !== "undefined" && window.location) {
			const loc = window.location;
			if (loc.host) fields.host = loc.host;
			if (loc.hostname) fields.domain = loc.hostname;
			if (loc.href) fields.url = loc.href;
			if (loc.pathname) fields.pathname = loc.pathname;
		}
		if (typeof document !== "undefined" && document.referrer) fields.referrer = document.referrer;
		if (typeof navigator !== "undefined") {
			if (navigator.userAgent) fields.user_agent = navigator.userAgent;
			if (navigator.language) fields.locale = navigator.language;
		}
		if (typeof screen !== "undefined") {
			if (screen.width) fields.screen_width = screen.width;
			if (screen.height) fields.screen_height = screen.height;
		}
		if (typeof window !== "undefined") {
			if (window.innerWidth) fields.viewport_width = window.innerWidth;
			if (window.innerHeight) fields.viewport_height = window.innerHeight;
		}
		const tz = Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone;
		if (tz) fields.timezone = tz;
	} catch {}
	return fields;
}
var TELEMETRY_LOG_METHOD = {
	debug: "log",
	info: "log",
	warning: "warn",
	error: "error"
};
/**
* 单个字符串字段的上报上限。线上合法字段最长的是 stall_events（~8.7KB），留一倍余量。
* 没有这道兜底时，1.3.9 的 WASM 加载报错把整个内联 wasm 的 base64 拼进了
* sdk_startup.reason，一条 1.3MB。
*/
var MAX_TELEMETRY_STRING_LENGTH = 16 * 1024;
function capStringFields(contents) {
	let capped = null;
	for (const [key, value] of Object.entries(contents)) if (typeof value === "string" && value.length > MAX_TELEMETRY_STRING_LENGTH) {
		capped ??= { ...contents };
		capped[key] = `${value.slice(0, MAX_TELEMETRY_STRING_LENGTH)}…(truncated, ${value.length} chars)`;
	}
	return capped ?? contents;
}
/** 组装上报 context（附加 session_token 后缀）并写一条本地 console。 */
function buildTelemetryContext(event, level, rawContents) {
	const contents = capStringFields(rawContents);
	const sessionToken = idManager.getSessionToken() ?? "";
	const context = {
		session_token_suffix: sessionToken ? sessionToken.slice(-8) : "",
		connection_id: idManager.getConnectionId() ?? "",
		...clientContextFields(),
		...contents
	};
	const logMethod = TELEMETRY_LOG_METHOD[level] ?? "log";
	const propsDescription = Object.entries(contents).map(([k, v]) => `${k}=${v}`).join(", ");
	logger[logMethod](`[Telemetry] ${event} [${propsDescription}]`);
	return context;
}
/** 通过 OTel 上报（失败隔离，不影响调用方）。 */
function emitToOtel(event, level, context) {
	try {
		trackEventOtel(event, level, context);
	} catch (error) {
		logger.warn("[OTel] Send failed:", error instanceof Error ? error.message : String(error));
	}
}
/**
* 日志上报接口：发往 OTel logs。
* 用于 SDK 内部**日志类**事件（失败、状态变更、生命周期等）。
* 指标类（延迟/帧率/时长/次数等度量）请用 {@link logMetric}——只发 OTel metric。
* @param event Event name
* @param level Log level
* @param contents Log contents
* @internal
*/
function logEvent(event, level = "info", contents = {}, opts = {}) {
	if (opts.rateLimit) {
		const suppressed = admitRateLimited(rateLimitKey(event, contents));
		if (suppressed === null) return;
		if (suppressed > 0) contents = {
			...contents,
			suppressed_count: suppressed
		};
	}
	emitToOtel(event, level, buildTelemetryContext(event, level, contents));
}
/**
* 指标上报：**只发** OTel Metric 信号（Histogram，供聚合 P95/均值/SLO）。
* 不再附带一条 log。
*
* 曾经每条 metric 都双发一条同名 log。那条 log 里 95% 的字节是每条都重复的
* resource 字段（一条约 1KB，有效载荷只有事件名 + value 约 50 字节），而数值本身
* 已经在 metric 信号里，聚合查询走的也是 metric——log 那一路纯属冗余。一轮播放
* 12 条 metric 就多出 12KB 重复数据。
*
* **需要高基数明细（avatar_id / conversation_id / trace_id 等）时，在调用点自己
* 再发一条 {@link logMetricDetail}**——显式一行，比让每条 metric 都默认背一条 log 便宜得多。
*
* - `value`  被记录到 Histogram（延迟 ms / 帧率 / 时长 / 次数 / 比率等）
* - `labels` 低基数标签（dsm / resolution / is_fallback / renderer_backend 等）。
*            **不要**放高基数字段，会撑爆 metric 基数。
*
* @param name Metric 名（如 `fetch_avatar_latency`）
* @param value 被聚合的数值
* @param labels 低基数标签
* @internal
*/
function logMetric(name, value, labels = {}) {
	recordMetric(name, value, labels);
}
/**
* 一条 metric 的高基数明细，作为独立 log 发出（走 OTel logs）。
*
* 事件名与对应 metric 同名——看板按名查；`props` 里放同一份低基数 labels +
* 高基数明细，与 {@link logMetric} 曾经自带的那条记录一致。
*
* 只在真的有 metric 装不下的字段（avatar_id / conversation_id / trace_id /
* description 等）时才调；没有明细就别发，那种 log 是 metric 的逐字重复。
*
* 与 android `SPLogger.logMetricDetail` / iOS `logMetricDetail` 同形。
* @internal
*/
function logMetricDetail(name, value, props = {}) {
	emitToOtel(name, "info", buildTelemetryContext(name, "info", {
		value,
		...props
	}));
}
//#endregion
//#region node_modules/.pnpm/@bufbuild+protobuf@2.10.1/node_modules/@bufbuild/protobuf/dist/esm/wire/varint.js
/**
* Read a 64 bit varint as two JS numbers.
*
* Returns tuple:
* [0]: low bits
* [1]: high bits
*
* Copyright 2008 Google Inc.  All rights reserved.
*
* See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L175
*/
function varint64read() {
	let lowBits = 0;
	let highBits = 0;
	for (let shift = 0; shift < 28; shift += 7) {
		let b = this.buf[this.pos++];
		lowBits |= (b & 127) << shift;
		if ((b & 128) == 0) {
			this.assertBounds();
			return [lowBits, highBits];
		}
	}
	let middleByte = this.buf[this.pos++];
	lowBits |= (middleByte & 15) << 28;
	highBits = (middleByte & 112) >> 4;
	if ((middleByte & 128) == 0) {
		this.assertBounds();
		return [lowBits, highBits];
	}
	for (let shift = 3; shift <= 31; shift += 7) {
		let b = this.buf[this.pos++];
		highBits |= (b & 127) << shift;
		if ((b & 128) == 0) {
			this.assertBounds();
			return [lowBits, highBits];
		}
	}
	throw new Error("invalid varint");
}
/**
* Write a 64 bit varint, given as two JS numbers, to the given bytes array.
*
* Copyright 2008 Google Inc.  All rights reserved.
*
* See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/writer.js#L344
*/
function varint64write(lo, hi, bytes) {
	for (let i = 0; i < 28; i = i + 7) {
		const shift = lo >>> i;
		const hasNext = !(shift >>> 7 == 0 && hi == 0);
		const byte = (hasNext ? shift | 128 : shift) & 255;
		bytes.push(byte);
		if (!hasNext) return;
	}
	const splitBits = lo >>> 28 & 15 | (hi & 7) << 4;
	const hasMoreBits = !(hi >> 3 == 0);
	bytes.push((hasMoreBits ? splitBits | 128 : splitBits) & 255);
	if (!hasMoreBits) return;
	for (let i = 3; i < 31; i = i + 7) {
		const shift = hi >>> i;
		const hasNext = !(shift >>> 7 == 0);
		const byte = (hasNext ? shift | 128 : shift) & 255;
		bytes.push(byte);
		if (!hasNext) return;
	}
	bytes.push(hi >>> 31 & 1);
}
var TWO_PWR_32_DBL = 4294967296;
/**
* Parse decimal string of 64 bit integer value as two JS numbers.
*
* Copyright 2008 Google Inc.  All rights reserved.
*
* See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
*/
function int64FromString(dec) {
	const minus = dec[0] === "-";
	if (minus) dec = dec.slice(1);
	const base = 1e6;
	let lowBits = 0;
	let highBits = 0;
	function add1e6digit(begin, end) {
		const digit1e6 = Number(dec.slice(begin, end));
		highBits *= base;
		lowBits = lowBits * base + digit1e6;
		if (lowBits >= TWO_PWR_32_DBL) {
			highBits = highBits + (lowBits / TWO_PWR_32_DBL | 0);
			lowBits = lowBits % TWO_PWR_32_DBL;
		}
	}
	add1e6digit(-24, -18);
	add1e6digit(-18, -12);
	add1e6digit(-12, -6);
	add1e6digit(-6);
	return minus ? negate(lowBits, highBits) : newBits(lowBits, highBits);
}
/**
* Losslessly converts a 64-bit signed integer in 32:32 split representation
* into a decimal string.
*
* Copyright 2008 Google Inc.  All rights reserved.
*
* See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
*/
function int64ToString(lo, hi) {
	let bits = newBits(lo, hi);
	const negative = bits.hi & 2147483648;
	if (negative) bits = negate(bits.lo, bits.hi);
	const result = uInt64ToString(bits.lo, bits.hi);
	return negative ? "-" + result : result;
}
/**
* Losslessly converts a 64-bit unsigned integer in 32:32 split representation
* into a decimal string.
*
* Copyright 2008 Google Inc.  All rights reserved.
*
* See https://github.com/protocolbuffers/protobuf-javascript/blob/a428c58273abad07c66071d9753bc4d1289de426/experimental/runtime/int64.js#L10
*/
function uInt64ToString(lo, hi) {
	({lo, hi} = toUnsigned(lo, hi));
	if (hi <= 2097151) return String(TWO_PWR_32_DBL * hi + lo);
	const low = lo & 16777215;
	const mid = (lo >>> 24 | hi << 8) & 16777215;
	const high = hi >> 16 & 65535;
	let digitA = low + mid * 6777216 + high * 6710656;
	let digitB = mid + high * 8147497;
	let digitC = high * 2;
	const base = 1e7;
	if (digitA >= base) {
		digitB += Math.floor(digitA / base);
		digitA %= base;
	}
	if (digitB >= base) {
		digitC += Math.floor(digitB / base);
		digitB %= base;
	}
	return digitC.toString() + decimalFrom1e7WithLeadingZeros(digitB) + decimalFrom1e7WithLeadingZeros(digitA);
}
function toUnsigned(lo, hi) {
	return {
		lo: lo >>> 0,
		hi: hi >>> 0
	};
}
function newBits(lo, hi) {
	return {
		lo: lo | 0,
		hi: hi | 0
	};
}
/**
* Returns two's compliment negation of input.
* @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers
*/
function negate(lowBits, highBits) {
	highBits = ~highBits;
	if (lowBits) lowBits = ~lowBits + 1;
	else highBits += 1;
	return newBits(lowBits, highBits);
}
/**
* Returns decimal representation of digit1e7 with leading zeros.
*/
var decimalFrom1e7WithLeadingZeros = (digit1e7) => {
	const partial = String(digit1e7);
	return "0000000".slice(partial.length) + partial;
};
/**
* Write a 32 bit varint, signed or unsigned. Same as `varint64write(0, value, bytes)`
*
* Copyright 2008 Google Inc.  All rights reserved.
*
* See https://github.com/protocolbuffers/protobuf/blob/1b18833f4f2a2f681f4e4a25cdf3b0a43115ec26/js/binary/encoder.js#L144
*/
function varint32write(value, bytes) {
	if (value >= 0) {
		while (value > 127) {
			bytes.push(value & 127 | 128);
			value = value >>> 7;
		}
		bytes.push(value);
	} else {
		for (let i = 0; i < 9; i++) {
			bytes.push(value & 127 | 128);
			value = value >> 7;
		}
		bytes.push(1);
	}
}
/**
* Read an unsigned 32 bit varint.
*
* See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L220
*/
function varint32read() {
	let b = this.buf[this.pos++];
	let result = b & 127;
	if ((b & 128) == 0) {
		this.assertBounds();
		return result;
	}
	b = this.buf[this.pos++];
	result |= (b & 127) << 7;
	if ((b & 128) == 0) {
		this.assertBounds();
		return result;
	}
	b = this.buf[this.pos++];
	result |= (b & 127) << 14;
	if ((b & 128) == 0) {
		this.assertBounds();
		return result;
	}
	b = this.buf[this.pos++];
	result |= (b & 127) << 21;
	if ((b & 128) == 0) {
		this.assertBounds();
		return result;
	}
	b = this.buf[this.pos++];
	result |= (b & 15) << 28;
	for (let readBytes = 5; (b & 128) !== 0 && readBytes < 10; readBytes++) b = this.buf[this.pos++];
	if ((b & 128) != 0) throw new Error("invalid varint");
	this.assertBounds();
	return result >>> 0;
}
//#endregion
//#region node_modules/.pnpm/@bufbuild+protobuf@2.10.1/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js
/**
* Int64Support for the current environment.
*/
var protoInt64 = /*@__PURE__*/ makeInt64Support();
function makeInt64Support() {
	const dv = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));
	if (typeof BigInt === "function" && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function" && (!!globalThis.Deno || typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
		const MIN = BigInt("-9223372036854775808");
		const MAX = BigInt("9223372036854775807");
		const UMIN = BigInt("0");
		const UMAX = BigInt("18446744073709551615");
		return {
			zero: BigInt(0),
			supported: true,
			parse(value) {
				const bi = typeof value == "bigint" ? value : BigInt(value);
				if (bi > MAX || bi < MIN) throw new Error(`invalid int64: ${value}`);
				return bi;
			},
			uParse(value) {
				const bi = typeof value == "bigint" ? value : BigInt(value);
				if (bi > UMAX || bi < UMIN) throw new Error(`invalid uint64: ${value}`);
				return bi;
			},
			enc(value) {
				dv.setBigInt64(0, this.parse(value), true);
				return {
					lo: dv.getInt32(0, true),
					hi: dv.getInt32(4, true)
				};
			},
			uEnc(value) {
				dv.setBigInt64(0, this.uParse(value), true);
				return {
					lo: dv.getInt32(0, true),
					hi: dv.getInt32(4, true)
				};
			},
			dec(lo, hi) {
				dv.setInt32(0, lo, true);
				dv.setInt32(4, hi, true);
				return dv.getBigInt64(0, true);
			},
			uDec(lo, hi) {
				dv.setInt32(0, lo, true);
				dv.setInt32(4, hi, true);
				return dv.getBigUint64(0, true);
			}
		};
	}
	return {
		zero: "0",
		supported: false,
		parse(value) {
			if (typeof value != "string") value = value.toString();
			assertInt64String(value);
			return value;
		},
		uParse(value) {
			if (typeof value != "string") value = value.toString();
			assertUInt64String(value);
			return value;
		},
		enc(value) {
			if (typeof value != "string") value = value.toString();
			assertInt64String(value);
			return int64FromString(value);
		},
		uEnc(value) {
			if (typeof value != "string") value = value.toString();
			assertUInt64String(value);
			return int64FromString(value);
		},
		dec(lo, hi) {
			return int64ToString(lo, hi);
		},
		uDec(lo, hi) {
			return uInt64ToString(lo, hi);
		}
	};
}
function assertInt64String(value) {
	if (!/^-?[0-9]+$/.test(value)) throw new Error("invalid int64: " + value);
}
function assertUInt64String(value) {
	if (!/^[0-9]+$/.test(value)) throw new Error("invalid uint64: " + value);
}
//#endregion
//#region node_modules/.pnpm/@bufbuild+protobuf@2.10.1/node_modules/@bufbuild/protobuf/dist/esm/wire/text-encoding.js
var symbol = Symbol.for("@bufbuild/protobuf/text-encoding");
function getTextEncoding() {
	if (globalThis[symbol] == void 0) {
		const te = new globalThis.TextEncoder();
		const td = new globalThis.TextDecoder();
		globalThis[symbol] = {
			encodeUtf8(text) {
				return te.encode(text);
			},
			decodeUtf8(bytes) {
				return td.decode(bytes);
			},
			checkUtf8(text) {
				try {
					return true;
				} catch (_) {
					return false;
				}
			}
		};
	}
	return globalThis[symbol];
}
//#endregion
//#region node_modules/.pnpm/@bufbuild+protobuf@2.10.1/node_modules/@bufbuild/protobuf/dist/esm/wire/binary-encoding.js
/**
* Protobuf binary format wire types.
*
* A wire type provides just enough information to find the length of the
* following value.
*
* See https://developers.google.com/protocol-buffers/docs/encoding#structure
*/
var WireType;
(function(WireType) {
	/**
	* Used for int32, int64, uint32, uint64, sint32, sint64, bool, enum
	*/
	WireType[WireType["Varint"] = 0] = "Varint";
	/**
	* Used for fixed64, sfixed64, double.
	* Always 8 bytes with little-endian byte order.
	*/
	WireType[WireType["Bit64"] = 1] = "Bit64";
	/**
	* Used for string, bytes, embedded messages, packed repeated fields
	*
	* Only repeated numeric types (types which use the varint, 32-bit,
	* or 64-bit wire types) can be packed. In proto3, such fields are
	* packed by default.
	*/
	WireType[WireType["LengthDelimited"] = 2] = "LengthDelimited";
	/**
	* Start of a tag-delimited aggregate, such as a proto2 group, or a message
	* in editions with message_encoding = DELIMITED.
	*/
	WireType[WireType["StartGroup"] = 3] = "StartGroup";
	/**
	* End of a tag-delimited aggregate.
	*/
	WireType[WireType["EndGroup"] = 4] = "EndGroup";
	/**
	* Used for fixed32, sfixed32, float.
	* Always 4 bytes with little-endian byte order.
	*/
	WireType[WireType["Bit32"] = 5] = "Bit32";
})(WireType || (WireType = {}));
var BinaryWriter = class {
	constructor(encodeUtf8 = getTextEncoding().encodeUtf8) {
		this.encodeUtf8 = encodeUtf8;
		/**
		* Previous fork states.
		*/
		this.stack = [];
		this.chunks = [];
		this.buf = [];
	}
	/**
	* Return all bytes written and reset this writer.
	*/
	finish() {
		if (this.buf.length) {
			this.chunks.push(new Uint8Array(this.buf));
			this.buf = [];
		}
		let len = 0;
		for (let i = 0; i < this.chunks.length; i++) len += this.chunks[i].length;
		let bytes = new Uint8Array(len);
		let offset = 0;
		for (let i = 0; i < this.chunks.length; i++) {
			bytes.set(this.chunks[i], offset);
			offset += this.chunks[i].length;
		}
		this.chunks = [];
		return bytes;
	}
	/**
	* Start a new fork for length-delimited data like a message
	* or a packed repeated field.
	*
	* Must be joined later with `join()`.
	*/
	fork() {
		this.stack.push({
			chunks: this.chunks,
			buf: this.buf
		});
		this.chunks = [];
		this.buf = [];
		return this;
	}
	/**
	* Join the last fork. Write its length and bytes, then
	* return to the previous state.
	*/
	join() {
		let chunk = this.finish();
		let prev = this.stack.pop();
		if (!prev) throw new Error("invalid state, fork stack empty");
		this.chunks = prev.chunks;
		this.buf = prev.buf;
		this.uint32(chunk.byteLength);
		return this.raw(chunk);
	}
	/**
	* Writes a tag (field number and wire type).
	*
	* Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
	*
	* Generated code should compute the tag ahead of time and call `uint32()`.
	*/
	tag(fieldNo, type) {
		return this.uint32((fieldNo << 3 | type) >>> 0);
	}
	/**
	* Write a chunk of raw bytes.
	*/
	raw(chunk) {
		if (this.buf.length) {
			this.chunks.push(new Uint8Array(this.buf));
			this.buf = [];
		}
		this.chunks.push(chunk);
		return this;
	}
	/**
	* Write a `uint32` value, an unsigned 32 bit varint.
	*/
	uint32(value) {
		assertUInt32(value);
		while (value > 127) {
			this.buf.push(value & 127 | 128);
			value = value >>> 7;
		}
		this.buf.push(value);
		return this;
	}
	/**
	* Write a `int32` value, a signed 32 bit varint.
	*/
	int32(value) {
		assertInt32(value);
		varint32write(value, this.buf);
		return this;
	}
	/**
	* Write a `bool` value, a variant.
	*/
	bool(value) {
		this.buf.push(value ? 1 : 0);
		return this;
	}
	/**
	* Write a `bytes` value, length-delimited arbitrary data.
	*/
	bytes(value) {
		this.uint32(value.byteLength);
		return this.raw(value);
	}
	/**
	* Write a `string` value, length-delimited data converted to UTF-8 text.
	*/
	string(value) {
		let chunk = this.encodeUtf8(value);
		this.uint32(chunk.byteLength);
		return this.raw(chunk);
	}
	/**
	* Write a `float` value, 32-bit floating point number.
	*/
	float(value) {
		assertFloat32(value);
		let chunk = /* @__PURE__ */ new Uint8Array(4);
		new DataView(chunk.buffer).setFloat32(0, value, true);
		return this.raw(chunk);
	}
	/**
	* Write a `double` value, a 64-bit floating point number.
	*/
	double(value) {
		let chunk = /* @__PURE__ */ new Uint8Array(8);
		new DataView(chunk.buffer).setFloat64(0, value, true);
		return this.raw(chunk);
	}
	/**
	* Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
	*/
	fixed32(value) {
		assertUInt32(value);
		let chunk = /* @__PURE__ */ new Uint8Array(4);
		new DataView(chunk.buffer).setUint32(0, value, true);
		return this.raw(chunk);
	}
	/**
	* Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
	*/
	sfixed32(value) {
		assertInt32(value);
		let chunk = /* @__PURE__ */ new Uint8Array(4);
		new DataView(chunk.buffer).setInt32(0, value, true);
		return this.raw(chunk);
	}
	/**
	* Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
	*/
	sint32(value) {
		assertInt32(value);
		value = (value << 1 ^ value >> 31) >>> 0;
		varint32write(value, this.buf);
		return this;
	}
	/**
	* Write a `fixed64` value, a signed, fixed-length 64-bit integer.
	*/
	sfixed64(value) {
		let chunk = /* @__PURE__ */ new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.enc(value);
		view.setInt32(0, tc.lo, true);
		view.setInt32(4, tc.hi, true);
		return this.raw(chunk);
	}
	/**
	* Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
	*/
	fixed64(value) {
		let chunk = /* @__PURE__ */ new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.uEnc(value);
		view.setInt32(0, tc.lo, true);
		view.setInt32(4, tc.hi, true);
		return this.raw(chunk);
	}
	/**
	* Write a `int64` value, a signed 64-bit varint.
	*/
	int64(value) {
		let tc = protoInt64.enc(value);
		varint64write(tc.lo, tc.hi, this.buf);
		return this;
	}
	/**
	* Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
	*/
	sint64(value) {
		const tc = protoInt64.enc(value), sign = tc.hi >> 31;
		varint64write(tc.lo << 1 ^ sign, (tc.hi << 1 | tc.lo >>> 31) ^ sign, this.buf);
		return this;
	}
	/**
	* Write a `uint64` value, an unsigned 64-bit varint.
	*/
	uint64(value) {
		const tc = protoInt64.uEnc(value);
		varint64write(tc.lo, tc.hi, this.buf);
		return this;
	}
};
var BinaryReader = class {
	constructor(buf, decodeUtf8 = getTextEncoding().decodeUtf8) {
		this.decodeUtf8 = decodeUtf8;
		this.varint64 = varint64read;
		/**
		* Read a `uint32` field, an unsigned 32 bit varint.
		*/
		this.uint32 = varint32read;
		this.buf = buf;
		this.len = buf.length;
		this.pos = 0;
		this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
	}
	/**
	* Reads a tag - field number and wire type.
	*/
	tag() {
		let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
		if (fieldNo <= 0 || wireType < 0 || wireType > 5) throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
		return [fieldNo, wireType];
	}
	/**
	* Skip one element and return the skipped data.
	*
	* When skipping StartGroup, provide the tags field number to check for
	* matching field number in the EndGroup tag.
	*/
	skip(wireType, fieldNo) {
		let start = this.pos;
		switch (wireType) {
			case WireType.Varint:
				while (this.buf[this.pos++] & 128);
				break;
			case WireType.Bit64: this.pos += 4;
			case WireType.Bit32:
				this.pos += 4;
				break;
			case WireType.LengthDelimited:
				let len = this.uint32();
				this.pos += len;
				break;
			case WireType.StartGroup:
				for (;;) {
					const [fn, wt] = this.tag();
					if (wt === WireType.EndGroup) {
						if (fieldNo !== void 0 && fn !== fieldNo) throw new Error("invalid end group tag");
						break;
					}
					this.skip(wt, fn);
				}
				break;
			default: throw new Error("cant skip wire type " + wireType);
		}
		this.assertBounds();
		return this.buf.subarray(start, this.pos);
	}
	/**
	* Throws error if position in byte array is out of range.
	*/
	assertBounds() {
		if (this.pos > this.len) throw new RangeError("premature EOF");
	}
	/**
	* Read a `int32` field, a signed 32 bit varint.
	*/
	int32() {
		return this.uint32() | 0;
	}
	/**
	* Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
	*/
	sint32() {
		let zze = this.uint32();
		return zze >>> 1 ^ -(zze & 1);
	}
	/**
	* Read a `int64` field, a signed 64-bit varint.
	*/
	int64() {
		return protoInt64.dec(...this.varint64());
	}
	/**
	* Read a `uint64` field, an unsigned 64-bit varint.
	*/
	uint64() {
		return protoInt64.uDec(...this.varint64());
	}
	/**
	* Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
	*/
	sint64() {
		let [lo, hi] = this.varint64();
		let s = -(lo & 1);
		lo = (lo >>> 1 | (hi & 1) << 31) ^ s;
		hi = hi >>> 1 ^ s;
		return protoInt64.dec(lo, hi);
	}
	/**
	* Read a `bool` field, a variant.
	*/
	bool() {
		let [lo, hi] = this.varint64();
		return lo !== 0 || hi !== 0;
	}
	/**
	* Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
	*/
	fixed32() {
		return this.view.getUint32((this.pos += 4) - 4, true);
	}
	/**
	* Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
	*/
	sfixed32() {
		return this.view.getInt32((this.pos += 4) - 4, true);
	}
	/**
	* Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
	*/
	fixed64() {
		return protoInt64.uDec(this.sfixed32(), this.sfixed32());
	}
	/**
	* Read a `fixed64` field, a signed, fixed-length 64-bit integer.
	*/
	sfixed64() {
		return protoInt64.dec(this.sfixed32(), this.sfixed32());
	}
	/**
	* Read a `float` field, 32-bit floating point number.
	*/
	float() {
		return this.view.getFloat32((this.pos += 4) - 4, true);
	}
	/**
	* Read a `double` field, a 64-bit floating point number.
	*/
	double() {
		return this.view.getFloat64((this.pos += 8) - 8, true);
	}
	/**
	* Read a `bytes` field, length-delimited arbitrary data.
	*/
	bytes() {
		let len = this.uint32(), start = this.pos;
		this.pos += len;
		this.assertBounds();
		return this.buf.subarray(start, start + len);
	}
	/**
	* Read a `string` field, length-delimited data converted to UTF-8 text.
	*/
	string() {
		return this.decodeUtf8(this.bytes());
	}
};
/**
* Assert a valid signed protobuf 32-bit integer as a number or string.
*/
function assertInt32(arg) {
	if (typeof arg == "string") arg = Number(arg);
	else if (typeof arg != "number") throw new Error("invalid int32: " + typeof arg);
	if (!Number.isInteger(arg) || arg > 2147483647 || arg < -2147483648) throw new Error("invalid int32: " + arg);
}
/**
* Assert a valid unsigned protobuf 32-bit integer as a number or string.
*/
function assertUInt32(arg) {
	if (typeof arg == "string") arg = Number(arg);
	else if (typeof arg != "number") throw new Error("invalid uint32: " + typeof arg);
	if (!Number.isInteger(arg) || arg > 4294967295 || arg < 0) throw new Error("invalid uint32: " + arg);
}
/**
* Assert a valid protobuf float value as a number or string.
*/
function assertFloat32(arg) {
	if (typeof arg == "string") {
		const o = arg;
		arg = Number(arg);
		if (Number.isNaN(arg) && o !== "NaN") throw new Error("invalid float32: " + o);
	} else if (typeof arg != "number") throw new Error("invalid float32: " + typeof arg);
	if (Number.isFinite(arg) && (arg > 34028234663852886e22 || arg < -34028234663852886e22)) throw new Error("invalid float32: " + arg);
}
//#endregion
//#region generated/google/protobuf/struct.ts
function nullValueFromJSON(object) {
	switch (object) {
		case 0:
		case "NULL_VALUE": return 0;
		default: return -1;
	}
}
function nullValueToJSON(object) {
	switch (object) {
		case 0: return "NULL_VALUE";
		default: return "UNRECOGNIZED";
	}
}
function createBaseStruct() {
	return { fields: {} };
}
var Struct = {
	encode(message, writer = new BinaryWriter()) {
		globalThis.Object.entries(message.fields).forEach(([key, value]) => {
			if (value !== void 0) Struct_FieldsEntry.encode({
				key,
				value
			}, writer.uint32(10).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStruct();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1: {
					if (tag !== 10) break;
					const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
					if (entry1.value !== void 0) message.fields[entry1.key] = entry1.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { fields: isObject$1(object.fields) ? globalThis.Object.entries(object.fields).reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {}) : {} };
	},
	toJSON(message) {
		const obj = {};
		if (message.fields) {
			const entries = globalThis.Object.entries(message.fields);
			if (entries.length > 0) {
				obj.fields = {};
				entries.forEach(([k, v]) => {
					obj.fields[k] = v;
				});
			}
		}
		return obj;
	},
	create(base) {
		return Struct.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStruct();
		message.fields = globalThis.Object.entries(object.fields ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = value;
			return acc;
		}, {});
		return message;
	},
	wrap(object) {
		const struct = createBaseStruct();
		if (object !== void 0) for (const key of globalThis.Object.keys(object)) struct.fields[key] = object[key];
		return struct;
	},
	unwrap(message) {
		const object = {};
		if (message.fields) for (const key of globalThis.Object.keys(message.fields)) object[key] = message.fields[key];
		return object;
	}
};
function createBaseStruct_FieldsEntry() {
	return {
		key: "",
		value: void 0
	};
}
var Struct_FieldsEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== void 0) Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseStruct_FieldsEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet$1(object.key) ? globalThis.String(object.key) : "",
			value: isSet$1(object?.value) ? object.value : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== void 0) obj.value = message.value;
		return obj;
	},
	create(base) {
		return Struct_FieldsEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseStruct_FieldsEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? void 0;
		return message;
	}
};
function createBaseValue() {
	return {
		nullValue: void 0,
		numberValue: void 0,
		stringValue: void 0,
		boolValue: void 0,
		structValue: void 0,
		listValue: void 0
	};
}
var Value = {
	encode(message, writer = new BinaryWriter()) {
		if (message.nullValue !== void 0) writer.uint32(8).int32(message.nullValue);
		if (message.numberValue !== void 0) writer.uint32(17).double(message.numberValue);
		if (message.stringValue !== void 0) writer.uint32(26).string(message.stringValue);
		if (message.boolValue !== void 0) writer.uint32(32).bool(message.boolValue);
		if (message.structValue !== void 0) Struct.encode(Struct.wrap(message.structValue), writer.uint32(42).fork()).join();
		if (message.listValue !== void 0) ListValue.encode(ListValue.wrap(message.listValue), writer.uint32(50).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseValue();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.nullValue = reader.int32();
					continue;
				case 2:
					if (tag !== 17) break;
					message.numberValue = reader.double();
					continue;
				case 3:
					if (tag !== 26) break;
					message.stringValue = reader.string();
					continue;
				case 4:
					if (tag !== 32) break;
					message.boolValue = reader.bool();
					continue;
				case 5:
					if (tag !== 42) break;
					message.structValue = Struct.unwrap(Struct.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 50) break;
					message.listValue = ListValue.unwrap(ListValue.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			nullValue: isSet$1(object.nullValue) ? nullValueFromJSON(object.nullValue) : isSet$1(object.null_value) ? nullValueFromJSON(object.null_value) : void 0,
			numberValue: isSet$1(object.numberValue) ? globalThis.Number(object.numberValue) : isSet$1(object.number_value) ? globalThis.Number(object.number_value) : void 0,
			stringValue: isSet$1(object.stringValue) ? globalThis.String(object.stringValue) : isSet$1(object.string_value) ? globalThis.String(object.string_value) : void 0,
			boolValue: isSet$1(object.boolValue) ? globalThis.Boolean(object.boolValue) : isSet$1(object.bool_value) ? globalThis.Boolean(object.bool_value) : void 0,
			structValue: isObject$1(object.structValue) ? object.structValue : isObject$1(object.struct_value) ? object.struct_value : void 0,
			listValue: globalThis.Array.isArray(object.listValue) ? [...object.listValue] : globalThis.Array.isArray(object.list_value) ? [...object.list_value] : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.nullValue !== void 0) obj.nullValue = nullValueToJSON(message.nullValue);
		if (message.numberValue !== void 0) obj.numberValue = message.numberValue;
		if (message.stringValue !== void 0) obj.stringValue = message.stringValue;
		if (message.boolValue !== void 0) obj.boolValue = message.boolValue;
		if (message.structValue !== void 0) obj.structValue = message.structValue;
		if (message.listValue !== void 0) obj.listValue = message.listValue;
		return obj;
	},
	create(base) {
		return Value.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseValue();
		message.nullValue = object.nullValue ?? void 0;
		message.numberValue = object.numberValue ?? void 0;
		message.stringValue = object.stringValue ?? void 0;
		message.boolValue = object.boolValue ?? void 0;
		message.structValue = object.structValue ?? void 0;
		message.listValue = object.listValue ?? void 0;
		return message;
	},
	wrap(value) {
		const result = createBaseValue();
		if (value === null) result.nullValue = 0;
		else if (typeof value === "boolean") result.boolValue = value;
		else if (typeof value === "number") result.numberValue = value;
		else if (typeof value === "string") result.stringValue = value;
		else if (globalThis.Array.isArray(value)) result.listValue = value;
		else if (typeof value === "object") result.structValue = value;
		else if (typeof value !== "undefined") throw new globalThis.Error("Unsupported any value type: " + typeof value);
		return result;
	},
	unwrap(message) {
		if (message.stringValue !== void 0) return message.stringValue;
		else if (message?.numberValue !== void 0) return message.numberValue;
		else if (message?.boolValue !== void 0) return message.boolValue;
		else if (message?.structValue !== void 0) return message.structValue;
		else if (message?.listValue !== void 0) return message.listValue;
		else if (message?.nullValue !== void 0) return null;
	}
};
function createBaseListValue() {
	return { values: [] };
}
var ListValue = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.values) Value.encode(Value.wrap(v), writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseListValue();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.values.push(Value.unwrap(Value.decode(reader, reader.uint32())));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { values: globalThis.Array.isArray(object?.values) ? [...object.values] : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.values?.length) obj.values = message.values;
		return obj;
	},
	create(base) {
		return ListValue.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseListValue();
		message.values = object.values?.map((e) => e) || [];
		return message;
	},
	wrap(array) {
		const result = createBaseListValue();
		result.values = array ?? [];
		return result;
	},
	unwrap(message) {
		if (message?.hasOwnProperty("values") && globalThis.Array.isArray(message.values)) return message.values;
		else return message;
	}
};
function isObject$1(value) {
	return typeof value === "object" && value !== null;
}
function isSet$1(value) {
	return value !== null && value !== void 0;
}
//#endregion
//#region generated/driveningress/v2/driveningress.ts
var MessageType = /* @__PURE__ */ function(MessageType) {
	MessageType[MessageType["MESSAGE_UNSPECIFIED"] = 0] = "MESSAGE_UNSPECIFIED";
	/** MESSAGE_CLIENT_CONFIGURE_SESSION - 协商会话参数 */
	MessageType[MessageType["MESSAGE_CLIENT_CONFIGURE_SESSION"] = 1] = "MESSAGE_CLIENT_CONFIGURE_SESSION";
	/** MESSAGE_SERVER_CONFIRM_SESSION - 确认协商成功 */
	MessageType[MessageType["MESSAGE_SERVER_CONFIRM_SESSION"] = 2] = "MESSAGE_SERVER_CONFIRM_SESSION";
	MessageType[MessageType["MESSAGE_CLIENT_AUDIO_INPUT"] = 3] = "MESSAGE_CLIENT_AUDIO_INPUT";
	MessageType[MessageType["MESSAGE_SERVER_ERROR"] = 4] = "MESSAGE_SERVER_ERROR";
	MessageType[MessageType["MESSAGE_SERVER_RESPONSE_ANIMATION"] = 5] = "MESSAGE_SERVER_RESPONSE_ANIMATION";
	/** MESSAGE_CLIENT_DRIVEN_CONFIG - 驱动配置消息 */
	MessageType[MessageType["MESSAGE_CLIENT_DRIVEN_CONFIG"] = 6] = "MESSAGE_CLIENT_DRIVEN_CONFIG";
	/** MESSAGE_CLIENT_INTERRUPT - 打断 */
	MessageType[MessageType["MESSAGE_CLIENT_INTERRUPT"] = 7] = "MESSAGE_CLIENT_INTERRUPT";
	MessageType[MessageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return MessageType;
}({});
function messageTypeFromJSON(object) {
	switch (object) {
		case 0:
		case "MESSAGE_UNSPECIFIED": return 0;
		case 1:
		case "MESSAGE_CLIENT_CONFIGURE_SESSION": return 1;
		case 2:
		case "MESSAGE_SERVER_CONFIRM_SESSION": return 2;
		case 3:
		case "MESSAGE_CLIENT_AUDIO_INPUT": return 3;
		case 4:
		case "MESSAGE_SERVER_ERROR": return 4;
		case 5:
		case "MESSAGE_SERVER_RESPONSE_ANIMATION": return 5;
		case 6:
		case "MESSAGE_CLIENT_DRIVEN_CONFIG": return 6;
		case 7:
		case "MESSAGE_CLIENT_INTERRUPT": return 7;
		default: return -1;
	}
}
function messageTypeToJSON(object) {
	switch (object) {
		case 0: return "MESSAGE_UNSPECIFIED";
		case 1: return "MESSAGE_CLIENT_CONFIGURE_SESSION";
		case 2: return "MESSAGE_SERVER_CONFIRM_SESSION";
		case 3: return "MESSAGE_CLIENT_AUDIO_INPUT";
		case 4: return "MESSAGE_SERVER_ERROR";
		case 5: return "MESSAGE_SERVER_RESPONSE_ANIMATION";
		case 6: return "MESSAGE_CLIENT_DRIVEN_CONFIG";
		case 7: return "MESSAGE_CLIENT_INTERRUPT";
		default: return "UNRECOGNIZED";
	}
}
var AudioFormat = /* @__PURE__ */ function(AudioFormat) {
	AudioFormat[AudioFormat["AUDIO_FORMAT_PCM_S16LE"] = 0] = "AUDIO_FORMAT_PCM_S16LE";
	AudioFormat[AudioFormat["AUDIO_FORMAT_OGG_OPUS"] = 1] = "AUDIO_FORMAT_OGG_OPUS";
	AudioFormat[AudioFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return AudioFormat;
}({});
function audioFormatFromJSON(object) {
	switch (object) {
		case 0:
		case "AUDIO_FORMAT_PCM_S16LE": return 0;
		case 1:
		case "AUDIO_FORMAT_OGG_OPUS": return 1;
		default: return -1;
	}
}
function audioFormatToJSON(object) {
	switch (object) {
		case 0: return "AUDIO_FORMAT_PCM_S16LE";
		case 1: return "AUDIO_FORMAT_OGG_OPUS";
		default: return "UNRECOGNIZED";
	}
}
var TransportCompression = /* @__PURE__ */ function(TransportCompression) {
	TransportCompression[TransportCompression["TRANSPORT_COMPRESSION_NONE"] = 0] = "TRANSPORT_COMPRESSION_NONE";
	TransportCompression[TransportCompression["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return TransportCompression;
}({});
function transportCompressionFromJSON(object) {
	switch (object) {
		case 0:
		case "TRANSPORT_COMPRESSION_NONE": return 0;
		default: return -1;
	}
}
function transportCompressionToJSON(object) {
	switch (object) {
		case 0: return "TRANSPORT_COMPRESSION_NONE";
		default: return "UNRECOGNIZED";
	}
}
/** EgressType specifies how animation and audio data should be delivered */
var EgressType = /* @__PURE__ */ function(EgressType) {
	/** EGRESS_TYPE_UNSPECIFIED - Default: return animation data via WebSocket */
	EgressType[EgressType["EGRESS_TYPE_UNSPECIFIED"] = 0] = "EGRESS_TYPE_UNSPECIFIED";
	/** EGRESS_TYPE_LIVEKIT - Stream to LiveKit room via egress service */
	EgressType[EgressType["EGRESS_TYPE_LIVEKIT"] = 1] = "EGRESS_TYPE_LIVEKIT";
	/** EGRESS_TYPE_AGORA - Stream to Agora channel via egress service */
	EgressType[EgressType["EGRESS_TYPE_AGORA"] = 2] = "EGRESS_TYPE_AGORA";
	EgressType[EgressType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
	return EgressType;
}({});
function egressTypeFromJSON(object) {
	switch (object) {
		case 0:
		case "EGRESS_TYPE_UNSPECIFIED": return 0;
		case 1:
		case "EGRESS_TYPE_LIVEKIT": return 1;
		case 2:
		case "EGRESS_TYPE_AGORA": return 2;
		default: return -1;
	}
}
function egressTypeToJSON(object) {
	switch (object) {
		case 0: return "EGRESS_TYPE_UNSPECIFIED";
		case 1: return "EGRESS_TYPE_LIVEKIT";
		case 2: return "EGRESS_TYPE_AGORA";
		default: return "UNRECOGNIZED";
	}
}
function createBaseLiveKitEgressConfig() {
	return {
		url: "",
		apiKey: "",
		apiSecret: "",
		roomName: "",
		publisherId: "",
		extraAttributes: {},
		idleTimeout: 0,
		apiToken: ""
	};
}
var LiveKitEgressConfig = {
	encode(message, writer = new BinaryWriter()) {
		if (message.url !== "") writer.uint32(10).string(message.url);
		if (message.apiKey !== "") writer.uint32(18).string(message.apiKey);
		if (message.apiSecret !== "") writer.uint32(26).string(message.apiSecret);
		if (message.roomName !== "") writer.uint32(34).string(message.roomName);
		if (message.publisherId !== "") writer.uint32(42).string(message.publisherId);
		globalThis.Object.entries(message.extraAttributes).forEach(([key, value]) => {
			LiveKitEgressConfig_ExtraAttributesEntry.encode({
				key,
				value
			}, writer.uint32(50).fork()).join();
		});
		if (message.idleTimeout !== 0) writer.uint32(56).int32(message.idleTimeout);
		if (message.apiToken !== "") writer.uint32(66).string(message.apiToken);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseLiveKitEgressConfig();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.url = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.apiKey = reader.string();
					continue;
				case 3:
					if (tag !== 26) break;
					message.apiSecret = reader.string();
					continue;
				case 4:
					if (tag !== 34) break;
					message.roomName = reader.string();
					continue;
				case 5:
					if (tag !== 42) break;
					message.publisherId = reader.string();
					continue;
				case 6: {
					if (tag !== 50) break;
					const entry6 = LiveKitEgressConfig_ExtraAttributesEntry.decode(reader, reader.uint32());
					if (entry6.value !== void 0) message.extraAttributes[entry6.key] = entry6.value;
					continue;
				}
				case 7:
					if (tag !== 56) break;
					message.idleTimeout = reader.int32();
					continue;
				case 8:
					if (tag !== 66) break;
					message.apiToken = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			url: isSet(object.url) ? globalThis.String(object.url) : "",
			apiKey: isSet(object.apiKey) ? globalThis.String(object.apiKey) : isSet(object.api_key) ? globalThis.String(object.api_key) : "",
			apiSecret: isSet(object.apiSecret) ? globalThis.String(object.apiSecret) : isSet(object.api_secret) ? globalThis.String(object.api_secret) : "",
			roomName: isSet(object.roomName) ? globalThis.String(object.roomName) : isSet(object.room_name) ? globalThis.String(object.room_name) : "",
			publisherId: isSet(object.publisherId) ? globalThis.String(object.publisherId) : isSet(object.publisher_id) ? globalThis.String(object.publisher_id) : "",
			extraAttributes: isObject(object.extraAttributes) ? globalThis.Object.entries(object.extraAttributes).reduce((acc, [key, value]) => {
				acc[key] = globalThis.String(value);
				return acc;
			}, {}) : isObject(object.extra_attributes) ? globalThis.Object.entries(object.extra_attributes).reduce((acc, [key, value]) => {
				acc[key] = globalThis.String(value);
				return acc;
			}, {}) : {},
			idleTimeout: isSet(object.idleTimeout) ? globalThis.Number(object.idleTimeout) : isSet(object.idle_timeout) ? globalThis.Number(object.idle_timeout) : 0,
			apiToken: isSet(object.apiToken) ? globalThis.String(object.apiToken) : isSet(object.api_token) ? globalThis.String(object.api_token) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.url !== "") obj.url = message.url;
		if (message.apiKey !== "") obj.apiKey = message.apiKey;
		if (message.apiSecret !== "") obj.apiSecret = message.apiSecret;
		if (message.roomName !== "") obj.roomName = message.roomName;
		if (message.publisherId !== "") obj.publisherId = message.publisherId;
		if (message.extraAttributes) {
			const entries = globalThis.Object.entries(message.extraAttributes);
			if (entries.length > 0) {
				obj.extraAttributes = {};
				entries.forEach(([k, v]) => {
					obj.extraAttributes[k] = v;
				});
			}
		}
		if (message.idleTimeout !== 0) obj.idleTimeout = Math.round(message.idleTimeout);
		if (message.apiToken !== "") obj.apiToken = message.apiToken;
		return obj;
	},
	create(base) {
		return LiveKitEgressConfig.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseLiveKitEgressConfig();
		message.url = object.url ?? "";
		message.apiKey = object.apiKey ?? "";
		message.apiSecret = object.apiSecret ?? "";
		message.roomName = object.roomName ?? "";
		message.publisherId = object.publisherId ?? "";
		message.extraAttributes = globalThis.Object.entries(object.extraAttributes ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = globalThis.String(value);
			return acc;
		}, {});
		message.idleTimeout = object.idleTimeout ?? 0;
		message.apiToken = object.apiToken ?? "";
		return message;
	}
};
function createBaseLiveKitEgressConfig_ExtraAttributesEntry() {
	return {
		key: "",
		value: ""
	};
}
var LiveKitEgressConfig_ExtraAttributesEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== "") writer.uint32(18).string(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseLiveKitEgressConfig_ExtraAttributesEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.value = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? globalThis.String(object.value) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== "") obj.value = message.value;
		return obj;
	},
	create(base) {
		return LiveKitEgressConfig_ExtraAttributesEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseLiveKitEgressConfig_ExtraAttributesEntry();
		message.key = object.key ?? "";
		message.value = object.value ?? "";
		return message;
	}
};
function createBaseAgoraEgressConfig() {
	return {
		channelName: "",
		token: "",
		uid: 0,
		publisherId: ""
	};
}
var AgoraEgressConfig = {
	encode(message, writer = new BinaryWriter()) {
		if (message.channelName !== "") writer.uint32(10).string(message.channelName);
		if (message.token !== "") writer.uint32(18).string(message.token);
		if (message.uid !== 0) writer.uint32(24).uint32(message.uid);
		if (message.publisherId !== "") writer.uint32(34).string(message.publisherId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseAgoraEgressConfig();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.channelName = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.token = reader.string();
					continue;
				case 3:
					if (tag !== 24) break;
					message.uid = reader.uint32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.publisherId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			channelName: isSet(object.channelName) ? globalThis.String(object.channelName) : isSet(object.channel_name) ? globalThis.String(object.channel_name) : "",
			token: isSet(object.token) ? globalThis.String(object.token) : "",
			uid: isSet(object.uid) ? globalThis.Number(object.uid) : 0,
			publisherId: isSet(object.publisherId) ? globalThis.String(object.publisherId) : isSet(object.publisher_id) ? globalThis.String(object.publisher_id) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.channelName !== "") obj.channelName = message.channelName;
		if (message.token !== "") obj.token = message.token;
		if (message.uid !== 0) obj.uid = Math.round(message.uid);
		if (message.publisherId !== "") obj.publisherId = message.publisherId;
		return obj;
	},
	create(base) {
		return AgoraEgressConfig.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseAgoraEgressConfig();
		message.channelName = object.channelName ?? "";
		message.token = object.token ?? "";
		message.uid = object.uid ?? 0;
		message.publisherId = object.publisherId ?? "";
		return message;
	}
};
function createBaseDrivenIngressConfig() {
	return {
		shapeNpy: /* @__PURE__ */ new Uint8Array(0),
		styleNpy: /* @__PURE__ */ new Uint8Array(0),
		drivenServerUrl: "",
		modelSettings: void 0,
		encoderStartFrame: 0
	};
}
var DrivenIngressConfig = {
	encode(message, writer = new BinaryWriter()) {
		if (message.shapeNpy.length !== 0) writer.uint32(10).bytes(message.shapeNpy);
		if (message.styleNpy.length !== 0) writer.uint32(18).bytes(message.styleNpy);
		if (message.drivenServerUrl !== "") writer.uint32(26).string(message.drivenServerUrl);
		if (message.modelSettings !== void 0) Struct.encode(Struct.wrap(message.modelSettings), writer.uint32(34).fork()).join();
		if (message.encoderStartFrame !== 0) writer.uint32(40).int32(message.encoderStartFrame);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseDrivenIngressConfig();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.shapeNpy = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) break;
					message.styleNpy = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) break;
					message.drivenServerUrl = reader.string();
					continue;
				case 4:
					if (tag !== 34) break;
					message.modelSettings = Struct.unwrap(Struct.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 40) break;
					message.encoderStartFrame = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			shapeNpy: isSet(object.shapeNpy) ? bytesFromBase64(object.shapeNpy) : isSet(object.shape_npy) ? bytesFromBase64(object.shape_npy) : /* @__PURE__ */ new Uint8Array(0),
			styleNpy: isSet(object.styleNpy) ? bytesFromBase64(object.styleNpy) : isSet(object.style_npy) ? bytesFromBase64(object.style_npy) : /* @__PURE__ */ new Uint8Array(0),
			drivenServerUrl: isSet(object.drivenServerUrl) ? globalThis.String(object.drivenServerUrl) : isSet(object.driven_server_url) ? globalThis.String(object.driven_server_url) : "",
			modelSettings: isObject(object.modelSettings) ? object.modelSettings : isObject(object.model_settings) ? object.model_settings : void 0,
			encoderStartFrame: isSet(object.encoderStartFrame) ? globalThis.Number(object.encoderStartFrame) : isSet(object.encoder_start_frame) ? globalThis.Number(object.encoder_start_frame) : 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.shapeNpy.length !== 0) obj.shapeNpy = base64FromBytes(message.shapeNpy);
		if (message.styleNpy.length !== 0) obj.styleNpy = base64FromBytes(message.styleNpy);
		if (message.drivenServerUrl !== "") obj.drivenServerUrl = message.drivenServerUrl;
		if (message.modelSettings !== void 0) obj.modelSettings = message.modelSettings;
		if (message.encoderStartFrame !== 0) obj.encoderStartFrame = Math.round(message.encoderStartFrame);
		return obj;
	},
	create(base) {
		return DrivenIngressConfig.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseDrivenIngressConfig();
		message.shapeNpy = object.shapeNpy ?? /* @__PURE__ */ new Uint8Array(0);
		message.styleNpy = object.styleNpy ?? /* @__PURE__ */ new Uint8Array(0);
		message.drivenServerUrl = object.drivenServerUrl ?? "";
		message.modelSettings = object.modelSettings ?? void 0;
		message.encoderStartFrame = object.encoderStartFrame ?? 0;
		return message;
	}
};
function createBaseClientConfigureSession() {
	return {
		sampleRate: 0,
		bitrate: 0,
		audioFormat: 0,
		transportCompression: 0,
		egressType: 0,
		livekitEgress: void 0,
		agoraEgress: void 0,
		extraParams: {}
	};
}
var ClientConfigureSession = {
	encode(message, writer = new BinaryWriter()) {
		if (message.sampleRate !== 0) writer.uint32(8).int32(message.sampleRate);
		if (message.bitrate !== 0) writer.uint32(16).int32(message.bitrate);
		if (message.audioFormat !== 0) writer.uint32(24).int32(message.audioFormat);
		if (message.transportCompression !== 0) writer.uint32(32).int32(message.transportCompression);
		if (message.egressType !== 0) writer.uint32(40).int32(message.egressType);
		if (message.livekitEgress !== void 0) LiveKitEgressConfig.encode(message.livekitEgress, writer.uint32(50).fork()).join();
		if (message.agoraEgress !== void 0) AgoraEgressConfig.encode(message.agoraEgress, writer.uint32(58).fork()).join();
		globalThis.Object.entries(message.extraParams).forEach(([key, value]) => {
			ClientConfigureSession_ExtraParamsEntry.encode({
				key,
				value
			}, writer.uint32(66).fork()).join();
		});
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClientConfigureSession();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.sampleRate = reader.int32();
					continue;
				case 2:
					if (tag !== 16) break;
					message.bitrate = reader.int32();
					continue;
				case 3:
					if (tag !== 24) break;
					message.audioFormat = reader.int32();
					continue;
				case 4:
					if (tag !== 32) break;
					message.transportCompression = reader.int32();
					continue;
				case 5:
					if (tag !== 40) break;
					message.egressType = reader.int32();
					continue;
				case 6:
					if (tag !== 50) break;
					message.livekitEgress = LiveKitEgressConfig.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.agoraEgress = AgoraEgressConfig.decode(reader, reader.uint32());
					continue;
				case 8: {
					if (tag !== 66) break;
					const entry8 = ClientConfigureSession_ExtraParamsEntry.decode(reader, reader.uint32());
					if (entry8.value !== void 0) message.extraParams[entry8.key] = entry8.value;
					continue;
				}
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			sampleRate: isSet(object.sampleRate) ? globalThis.Number(object.sampleRate) : isSet(object.sample_rate) ? globalThis.Number(object.sample_rate) : 0,
			bitrate: isSet(object.bitrate) ? globalThis.Number(object.bitrate) : 0,
			audioFormat: isSet(object.audioFormat) ? audioFormatFromJSON(object.audioFormat) : isSet(object.audio_format) ? audioFormatFromJSON(object.audio_format) : 0,
			transportCompression: isSet(object.transportCompression) ? transportCompressionFromJSON(object.transportCompression) : isSet(object.transport_compression) ? transportCompressionFromJSON(object.transport_compression) : 0,
			egressType: isSet(object.egressType) ? egressTypeFromJSON(object.egressType) : isSet(object.egress_type) ? egressTypeFromJSON(object.egress_type) : 0,
			livekitEgress: isSet(object.livekitEgress) ? LiveKitEgressConfig.fromJSON(object.livekitEgress) : isSet(object.livekit_egress) ? LiveKitEgressConfig.fromJSON(object.livekit_egress) : void 0,
			agoraEgress: isSet(object.agoraEgress) ? AgoraEgressConfig.fromJSON(object.agoraEgress) : isSet(object.agora_egress) ? AgoraEgressConfig.fromJSON(object.agora_egress) : void 0,
			extraParams: isObject(object.extraParams) ? globalThis.Object.entries(object.extraParams).reduce((acc, [key, value]) => {
				acc[key] = String(value);
				return acc;
			}, {}) : isObject(object.extra_params) ? globalThis.Object.entries(object.extra_params).reduce((acc, [key, value]) => {
				acc[key] = String(value);
				return acc;
			}, {}) : {}
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.sampleRate !== 0) obj.sampleRate = Math.round(message.sampleRate);
		if (message.bitrate !== 0) obj.bitrate = Math.round(message.bitrate);
		if (message.audioFormat !== 0) obj.audioFormat = audioFormatToJSON(message.audioFormat);
		if (message.transportCompression !== 0) obj.transportCompression = transportCompressionToJSON(message.transportCompression);
		if (message.egressType !== 0) obj.egressType = egressTypeToJSON(message.egressType);
		if (message.livekitEgress !== void 0) obj.livekitEgress = LiveKitEgressConfig.toJSON(message.livekitEgress);
		if (message.agoraEgress !== void 0) obj.agoraEgress = AgoraEgressConfig.toJSON(message.agoraEgress);
		if (message.extraParams) {
			const entries = globalThis.Object.entries(message.extraParams);
			if (entries.length > 0) {
				obj.extraParams = {};
				entries.forEach(([k, v]) => {
					obj.extraParams[k] = v;
				});
			}
		}
		return obj;
	},
	create(base) {
		return ClientConfigureSession.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClientConfigureSession();
		message.sampleRate = object.sampleRate ?? 0;
		message.bitrate = object.bitrate ?? 0;
		message.audioFormat = object.audioFormat ?? 0;
		message.transportCompression = object.transportCompression ?? 0;
		message.egressType = object.egressType ?? 0;
		message.livekitEgress = object.livekitEgress !== void 0 && object.livekitEgress !== null ? LiveKitEgressConfig.fromPartial(object.livekitEgress) : void 0;
		message.agoraEgress = object.agoraEgress !== void 0 && object.agoraEgress !== null ? AgoraEgressConfig.fromPartial(object.agoraEgress) : void 0;
		message.extraParams = globalThis.Object.entries(object.extraParams ?? {}).reduce((acc, [key, value]) => {
			if (value !== void 0) acc[key] = globalThis.String(value);
			return acc;
		}, {});
		return message;
	}
};
function createBaseClientConfigureSession_ExtraParamsEntry() {
	return {
		key: "",
		value: ""
	};
}
var ClientConfigureSession_ExtraParamsEntry = {
	encode(message, writer = new BinaryWriter()) {
		if (message.key !== "") writer.uint32(10).string(message.key);
		if (message.value !== "") writer.uint32(18).string(message.value);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClientConfigureSession_ExtraParamsEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			if (tag === 10) message.key = reader.string();
			else if (tag === 18) message.value = reader.string();
			else if ((tag & 7) === 4 || tag === 0) break;
			else reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			key: isSet(object.key) ? String(object.key) : "",
			value: isSet(object.value) ? String(object.value) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.key !== "") obj.key = message.key;
		if (message.value !== "") obj.value = message.value;
		return obj;
	},
	create(base) {
		return ClientConfigureSession_ExtraParamsEntry.fromPartial(base ?? {});
	},
	fromPartial(object) {
		return {
			key: object.key ?? "",
			value: object.value ?? ""
		};
	}
};
function createBaseServerConfirmSession() {
	return { connectionId: "" };
}
var ServerConfirmSession = {
	encode(message, writer = new BinaryWriter()) {
		if (message.connectionId !== "") writer.uint32(10).string(message.connectionId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseServerConfirmSession();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.connectionId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { connectionId: isSet(object.connectionId) ? globalThis.String(object.connectionId) : isSet(object.connection_id) ? globalThis.String(object.connection_id) : "" };
	},
	toJSON(message) {
		const obj = {};
		if (message.connectionId !== "") obj.connectionId = message.connectionId;
		return obj;
	},
	create(base) {
		return ServerConfirmSession.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseServerConfirmSession();
		message.connectionId = object.connectionId ?? "";
		return message;
	}
};
function createBaseTraceContext() {
	return {
		traceparent: "",
		tracestate: ""
	};
}
var TraceContext = {
	encode(message, writer = new BinaryWriter()) {
		if (message.traceparent !== "") writer.uint32(10).string(message.traceparent);
		if (message.tracestate !== "") writer.uint32(18).string(message.tracestate);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseTraceContext();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.traceparent = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.tracestate = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			traceparent: isSet(object.traceparent) ? globalThis.String(object.traceparent) : "",
			tracestate: isSet(object.tracestate) ? globalThis.String(object.tracestate) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.traceparent !== "") obj.traceparent = message.traceparent;
		if (message.tracestate !== "") obj.tracestate = message.tracestate;
		return obj;
	},
	create(base) {
		return TraceContext.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseTraceContext();
		message.traceparent = object.traceparent ?? "";
		message.tracestate = object.tracestate ?? "";
		return message;
	}
};
function createBaseClientAudioInput() {
	return {
		reqId: "",
		end: false,
		audio: /* @__PURE__ */ new Uint8Array(0),
		traceContext: void 0
	};
}
var ClientAudioInput = {
	encode(message, writer = new BinaryWriter()) {
		if (message.reqId !== "") writer.uint32(10).string(message.reqId);
		if (message.end !== false) writer.uint32(16).bool(message.end);
		if (message.audio.length !== 0) writer.uint32(26).bytes(message.audio);
		if (message.traceContext !== void 0) TraceContext.encode(message.traceContext, writer.uint32(34).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClientAudioInput();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.reqId = reader.string();
					continue;
				case 2:
					if (tag !== 16) break;
					message.end = reader.bool();
					continue;
				case 3:
					if (tag !== 26) break;
					message.audio = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) break;
					message.traceContext = TraceContext.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			reqId: isSet(object.reqId) ? globalThis.String(object.reqId) : isSet(object.req_id) ? globalThis.String(object.req_id) : "",
			end: isSet(object.end) ? globalThis.Boolean(object.end) : false,
			audio: isSet(object.audio) ? bytesFromBase64(object.audio) : /* @__PURE__ */ new Uint8Array(0),
			traceContext: isSet(object.traceContext) ? TraceContext.fromJSON(object.traceContext) : isSet(object.trace_context) ? TraceContext.fromJSON(object.trace_context) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.reqId !== "") obj.reqId = message.reqId;
		if (message.end !== false) obj.end = message.end;
		if (message.audio.length !== 0) obj.audio = base64FromBytes(message.audio);
		if (message.traceContext !== void 0) obj.traceContext = TraceContext.toJSON(message.traceContext);
		return obj;
	},
	create(base) {
		return ClientAudioInput.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClientAudioInput();
		message.reqId = object.reqId ?? "";
		message.end = object.end ?? false;
		message.audio = object.audio ?? /* @__PURE__ */ new Uint8Array(0);
		message.traceContext = object.traceContext !== void 0 && object.traceContext !== null ? TraceContext.fromPartial(object.traceContext) : void 0;
		return message;
	}
};
function createBaseServerError() {
	return {
		connectionId: "",
		reqId: "",
		code: 0,
		message: ""
	};
}
var ServerError = {
	encode(message, writer = new BinaryWriter()) {
		if (message.connectionId !== "") writer.uint32(10).string(message.connectionId);
		if (message.reqId !== "") writer.uint32(18).string(message.reqId);
		if (message.code !== 0) writer.uint32(24).int32(message.code);
		if (message.message !== "") writer.uint32(34).string(message.message);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseServerError();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.connectionId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.reqId = reader.string();
					continue;
				case 3:
					if (tag !== 24) break;
					message.code = reader.int32();
					continue;
				case 4:
					if (tag !== 34) break;
					message.message = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			connectionId: isSet(object.connectionId) ? globalThis.String(object.connectionId) : isSet(object.connection_id) ? globalThis.String(object.connection_id) : "",
			reqId: isSet(object.reqId) ? globalThis.String(object.reqId) : isSet(object.req_id) ? globalThis.String(object.req_id) : "",
			code: isSet(object.code) ? globalThis.Number(object.code) : 0,
			message: isSet(object.message) ? globalThis.String(object.message) : ""
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.connectionId !== "") obj.connectionId = message.connectionId;
		if (message.reqId !== "") obj.reqId = message.reqId;
		if (message.code !== 0) obj.code = Math.round(message.code);
		if (message.message !== "") obj.message = message.message;
		return obj;
	},
	create(base) {
		return ServerError.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseServerError();
		message.connectionId = object.connectionId ?? "";
		message.reqId = object.reqId ?? "";
		message.code = object.code ?? 0;
		message.message = object.message ?? "";
		return message;
	}
};
function createBaseFlame() {
	return {
		translation: [],
		rotation: [],
		neckPose: [],
		jawPose: [],
		eyePose: [],
		eyeLid: [],
		expression: []
	};
}
var Flame = {
	encode(message, writer = new BinaryWriter()) {
		writer.uint32(10).fork();
		for (const v of message.translation) writer.float(v);
		writer.join();
		writer.uint32(18).fork();
		for (const v of message.rotation) writer.float(v);
		writer.join();
		writer.uint32(26).fork();
		for (const v of message.neckPose) writer.float(v);
		writer.join();
		writer.uint32(34).fork();
		for (const v of message.jawPose) writer.float(v);
		writer.join();
		writer.uint32(42).fork();
		for (const v of message.eyePose) writer.float(v);
		writer.join();
		writer.uint32(50).fork();
		for (const v of message.eyeLid) writer.float(v);
		writer.join();
		writer.uint32(58).fork();
		for (const v of message.expression) writer.float(v);
		writer.join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFlame();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag === 13) {
						message.translation.push(reader.float());
						continue;
					}
					if (tag === 10) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.translation.push(reader.float());
						continue;
					}
					break;
				case 2:
					if (tag === 21) {
						message.rotation.push(reader.float());
						continue;
					}
					if (tag === 18) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.rotation.push(reader.float());
						continue;
					}
					break;
				case 3:
					if (tag === 29) {
						message.neckPose.push(reader.float());
						continue;
					}
					if (tag === 26) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.neckPose.push(reader.float());
						continue;
					}
					break;
				case 4:
					if (tag === 37) {
						message.jawPose.push(reader.float());
						continue;
					}
					if (tag === 34) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.jawPose.push(reader.float());
						continue;
					}
					break;
				case 5:
					if (tag === 45) {
						message.eyePose.push(reader.float());
						continue;
					}
					if (tag === 42) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.eyePose.push(reader.float());
						continue;
					}
					break;
				case 6:
					if (tag === 53) {
						message.eyeLid.push(reader.float());
						continue;
					}
					if (tag === 50) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.eyeLid.push(reader.float());
						continue;
					}
					break;
				case 7:
					if (tag === 61) {
						message.expression.push(reader.float());
						continue;
					}
					if (tag === 58) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) message.expression.push(reader.float());
						continue;
					}
					break;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			translation: globalThis.Array.isArray(object?.translation) ? object.translation.map((e) => globalThis.Number(e)) : [],
			rotation: globalThis.Array.isArray(object?.rotation) ? object.rotation.map((e) => globalThis.Number(e)) : [],
			neckPose: globalThis.Array.isArray(object?.neckPose) ? object.neckPose.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.neck_pose) ? object.neck_pose.map((e) => globalThis.Number(e)) : [],
			jawPose: globalThis.Array.isArray(object?.jawPose) ? object.jawPose.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.jaw_pose) ? object.jaw_pose.map((e) => globalThis.Number(e)) : [],
			eyePose: globalThis.Array.isArray(object?.eyePose) ? object.eyePose.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.eye_pose) ? object.eye_pose.map((e) => globalThis.Number(e)) : [],
			eyeLid: globalThis.Array.isArray(object?.eyeLid) ? object.eyeLid.map((e) => globalThis.Number(e)) : globalThis.Array.isArray(object?.eye_lid) ? object.eye_lid.map((e) => globalThis.Number(e)) : [],
			expression: globalThis.Array.isArray(object?.expression) ? object.expression.map((e) => globalThis.Number(e)) : []
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.translation?.length) obj.translation = message.translation;
		if (message.rotation?.length) obj.rotation = message.rotation;
		if (message.neckPose?.length) obj.neckPose = message.neckPose;
		if (message.jawPose?.length) obj.jawPose = message.jawPose;
		if (message.eyePose?.length) obj.eyePose = message.eyePose;
		if (message.eyeLid?.length) obj.eyeLid = message.eyeLid;
		if (message.expression?.length) obj.expression = message.expression;
		return obj;
	},
	create(base) {
		return Flame.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFlame();
		message.translation = object.translation?.map((e) => e) || [];
		message.rotation = object.rotation?.map((e) => e) || [];
		message.neckPose = object.neckPose?.map((e) => e) || [];
		message.jawPose = object.jawPose?.map((e) => e) || [];
		message.eyePose = object.eyePose?.map((e) => e) || [];
		message.eyeLid = object.eyeLid?.map((e) => e) || [];
		message.expression = object.expression?.map((e) => e) || [];
		return message;
	}
};
function createBaseFlameAnimation() {
	return { keyframes: [] };
}
var FlameAnimation = {
	encode(message, writer = new BinaryWriter()) {
		for (const v of message.keyframes) Flame.encode(v, writer.uint32(10).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseFlameAnimation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.keyframes.push(Flame.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { keyframes: globalThis.Array.isArray(object?.keyframes) ? object.keyframes.map((e) => Flame.fromJSON(e)) : [] };
	},
	toJSON(message) {
		const obj = {};
		if (message.keyframes?.length) obj.keyframes = message.keyframes.map((e) => Flame.toJSON(e));
		return obj;
	},
	create(base) {
		return FlameAnimation.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseFlameAnimation();
		message.keyframes = object.keyframes?.map((e) => Flame.fromPartial(e)) || [];
		return message;
	}
};
function createBaseServerResponseAnimation() {
	return {
		connectionId: "",
		reqId: "",
		end: false,
		animation: void 0,
		avatarId: "",
		traceContext: void 0
	};
}
var ServerResponseAnimation = {
	encode(message, writer = new BinaryWriter()) {
		if (message.connectionId !== "") writer.uint32(10).string(message.connectionId);
		if (message.reqId !== "") writer.uint32(18).string(message.reqId);
		if (message.end !== false) writer.uint32(24).bool(message.end);
		if (message.animation !== void 0) FlameAnimation.encode(message.animation, writer.uint32(34).fork()).join();
		if (message.avatarId !== "") writer.uint32(42).string(message.avatarId);
		if (message.traceContext !== void 0) TraceContext.encode(message.traceContext, writer.uint32(50).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseServerResponseAnimation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.connectionId = reader.string();
					continue;
				case 2:
					if (tag !== 18) break;
					message.reqId = reader.string();
					continue;
				case 3:
					if (tag !== 24) break;
					message.end = reader.bool();
					continue;
				case 4:
					if (tag !== 34) break;
					message.animation = FlameAnimation.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.avatarId = reader.string();
					continue;
				case 6:
					if (tag !== 50) break;
					message.traceContext = TraceContext.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			connectionId: isSet(object.connectionId) ? globalThis.String(object.connectionId) : isSet(object.connection_id) ? globalThis.String(object.connection_id) : "",
			reqId: isSet(object.reqId) ? globalThis.String(object.reqId) : isSet(object.req_id) ? globalThis.String(object.req_id) : "",
			end: isSet(object.end) ? globalThis.Boolean(object.end) : false,
			animation: isSet(object.animation) ? FlameAnimation.fromJSON(object.animation) : void 0,
			avatarId: isSet(object.avatarId) ? globalThis.String(object.avatarId) : isSet(object.avatar_id) ? globalThis.String(object.avatar_id) : "",
			traceContext: isSet(object.traceContext) ? TraceContext.fromJSON(object.traceContext) : isSet(object.trace_context) ? TraceContext.fromJSON(object.trace_context) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.connectionId !== "") obj.connectionId = message.connectionId;
		if (message.reqId !== "") obj.reqId = message.reqId;
		if (message.end !== false) obj.end = message.end;
		if (message.animation !== void 0) obj.animation = FlameAnimation.toJSON(message.animation);
		if (message.avatarId !== "") obj.avatarId = message.avatarId;
		if (message.traceContext !== void 0) obj.traceContext = TraceContext.toJSON(message.traceContext);
		return obj;
	},
	create(base) {
		return ServerResponseAnimation.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseServerResponseAnimation();
		message.connectionId = object.connectionId ?? "";
		message.reqId = object.reqId ?? "";
		message.end = object.end ?? false;
		message.animation = object.animation !== void 0 && object.animation !== null ? FlameAnimation.fromPartial(object.animation) : void 0;
		message.avatarId = object.avatarId ?? "";
		message.traceContext = object.traceContext !== void 0 && object.traceContext !== null ? TraceContext.fromPartial(object.traceContext) : void 0;
		return message;
	}
};
function createBaseClientInterrupt() {
	return { reqId: "" };
}
var ClientInterrupt = {
	encode(message, writer = new BinaryWriter()) {
		if (message.reqId !== "") writer.uint32(10).string(message.reqId);
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseClientInterrupt();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) break;
					message.reqId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return { reqId: isSet(object.reqId) ? globalThis.String(object.reqId) : isSet(object.req_id) ? globalThis.String(object.req_id) : "" };
	},
	toJSON(message) {
		const obj = {};
		if (message.reqId !== "") obj.reqId = message.reqId;
		return obj;
	},
	create(base) {
		return ClientInterrupt.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseClientInterrupt();
		message.reqId = object.reqId ?? "";
		return message;
	}
};
function createBaseMessage() {
	return {
		type: 0,
		clientConfigureSession: void 0,
		serverConfirmSession: void 0,
		clientAudioInput: void 0,
		serverError: void 0,
		serverResponseAnimation: void 0,
		drivenConfig: void 0,
		clientInterrupt: void 0
	};
}
var Message = {
	encode(message, writer = new BinaryWriter()) {
		if (message.type !== 0) writer.uint32(8).int32(message.type);
		if (message.clientConfigureSession !== void 0) ClientConfigureSession.encode(message.clientConfigureSession, writer.uint32(18).fork()).join();
		if (message.serverConfirmSession !== void 0) ServerConfirmSession.encode(message.serverConfirmSession, writer.uint32(26).fork()).join();
		if (message.clientAudioInput !== void 0) ClientAudioInput.encode(message.clientAudioInput, writer.uint32(34).fork()).join();
		if (message.serverError !== void 0) ServerError.encode(message.serverError, writer.uint32(42).fork()).join();
		if (message.serverResponseAnimation !== void 0) ServerResponseAnimation.encode(message.serverResponseAnimation, writer.uint32(50).fork()).join();
		if (message.drivenConfig !== void 0) DrivenIngressConfig.encode(message.drivenConfig, writer.uint32(58).fork()).join();
		if (message.clientInterrupt !== void 0) ClientInterrupt.encode(message.clientInterrupt, writer.uint32(66).fork()).join();
		return writer;
	},
	decode(input, length) {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === void 0 ? reader.len : reader.pos + length;
		const message = createBaseMessage();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) break;
					message.type = reader.int32();
					continue;
				case 2:
					if (tag !== 18) break;
					message.clientConfigureSession = ClientConfigureSession.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) break;
					message.serverConfirmSession = ServerConfirmSession.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) break;
					message.clientAudioInput = ClientAudioInput.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) break;
					message.serverError = ServerError.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) break;
					message.serverResponseAnimation = ServerResponseAnimation.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) break;
					message.drivenConfig = DrivenIngressConfig.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) break;
					message.clientInterrupt = ClientInterrupt.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) break;
			reader.skip(tag & 7);
		}
		return message;
	},
	fromJSON(object) {
		return {
			type: isSet(object.type) ? messageTypeFromJSON(object.type) : 0,
			clientConfigureSession: isSet(object.clientConfigureSession) ? ClientConfigureSession.fromJSON(object.clientConfigureSession) : isSet(object.client_configure_session) ? ClientConfigureSession.fromJSON(object.client_configure_session) : void 0,
			serverConfirmSession: isSet(object.serverConfirmSession) ? ServerConfirmSession.fromJSON(object.serverConfirmSession) : isSet(object.server_confirm_session) ? ServerConfirmSession.fromJSON(object.server_confirm_session) : void 0,
			clientAudioInput: isSet(object.clientAudioInput) ? ClientAudioInput.fromJSON(object.clientAudioInput) : isSet(object.client_audio_input) ? ClientAudioInput.fromJSON(object.client_audio_input) : void 0,
			serverError: isSet(object.serverError) ? ServerError.fromJSON(object.serverError) : isSet(object.server_error) ? ServerError.fromJSON(object.server_error) : void 0,
			serverResponseAnimation: isSet(object.serverResponseAnimation) ? ServerResponseAnimation.fromJSON(object.serverResponseAnimation) : isSet(object.server_response_animation) ? ServerResponseAnimation.fromJSON(object.server_response_animation) : void 0,
			drivenConfig: isSet(object.drivenConfig) ? DrivenIngressConfig.fromJSON(object.drivenConfig) : isSet(object.driven_config) ? DrivenIngressConfig.fromJSON(object.driven_config) : void 0,
			clientInterrupt: isSet(object.clientInterrupt) ? ClientInterrupt.fromJSON(object.clientInterrupt) : isSet(object.client_interrupt) ? ClientInterrupt.fromJSON(object.client_interrupt) : void 0
		};
	},
	toJSON(message) {
		const obj = {};
		if (message.type !== 0) obj.type = messageTypeToJSON(message.type);
		if (message.clientConfigureSession !== void 0) obj.clientConfigureSession = ClientConfigureSession.toJSON(message.clientConfigureSession);
		if (message.serverConfirmSession !== void 0) obj.serverConfirmSession = ServerConfirmSession.toJSON(message.serverConfirmSession);
		if (message.clientAudioInput !== void 0) obj.clientAudioInput = ClientAudioInput.toJSON(message.clientAudioInput);
		if (message.serverError !== void 0) obj.serverError = ServerError.toJSON(message.serverError);
		if (message.serverResponseAnimation !== void 0) obj.serverResponseAnimation = ServerResponseAnimation.toJSON(message.serverResponseAnimation);
		if (message.drivenConfig !== void 0) obj.drivenConfig = DrivenIngressConfig.toJSON(message.drivenConfig);
		if (message.clientInterrupt !== void 0) obj.clientInterrupt = ClientInterrupt.toJSON(message.clientInterrupt);
		return obj;
	},
	create(base) {
		return Message.fromPartial(base ?? {});
	},
	fromPartial(object) {
		const message = createBaseMessage();
		message.type = object.type ?? 0;
		message.clientConfigureSession = object.clientConfigureSession !== void 0 && object.clientConfigureSession !== null ? ClientConfigureSession.fromPartial(object.clientConfigureSession) : void 0;
		message.serverConfirmSession = object.serverConfirmSession !== void 0 && object.serverConfirmSession !== null ? ServerConfirmSession.fromPartial(object.serverConfirmSession) : void 0;
		message.clientAudioInput = object.clientAudioInput !== void 0 && object.clientAudioInput !== null ? ClientAudioInput.fromPartial(object.clientAudioInput) : void 0;
		message.serverError = object.serverError !== void 0 && object.serverError !== null ? ServerError.fromPartial(object.serverError) : void 0;
		message.serverResponseAnimation = object.serverResponseAnimation !== void 0 && object.serverResponseAnimation !== null ? ServerResponseAnimation.fromPartial(object.serverResponseAnimation) : void 0;
		message.drivenConfig = object.drivenConfig !== void 0 && object.drivenConfig !== null ? DrivenIngressConfig.fromPartial(object.drivenConfig) : void 0;
		message.clientInterrupt = object.clientInterrupt !== void 0 && object.clientInterrupt !== null ? ClientInterrupt.fromPartial(object.clientInterrupt) : void 0;
		return message;
	}
};
function bytesFromBase64(b64) {
	const bin = globalThis.atob(b64);
	const arr = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; ++i) arr[i] = bin.charCodeAt(i);
	return arr;
}
function base64FromBytes(arr) {
	const bin = [];
	arr.forEach((byte) => {
		bin.push(globalThis.String.fromCharCode(byte));
	});
	return globalThis.btoa(bin.join(""));
}
function isObject(value) {
	return typeof value === "object" && value !== null;
}
function isSet(value) {
	return value !== null && value !== void 0;
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/enums.js
var ExceptionEventName = "exception";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/Span.js
/**
* This class represents a span.
*/
var SpanImpl = class {
	_spanContext;
	kind;
	parentSpanContext;
	attributes = {};
	links = [];
	events = [];
	startTime;
	resource;
	instrumentationScope;
	_droppedAttributesCount = 0;
	_droppedEventsCount = 0;
	_droppedLinksCount = 0;
	_attributesCount = 0;
	name;
	status = { code: SpanStatusCode.UNSET };
	endTime = [0, 0];
	_ended = false;
	_duration = [-1, -1];
	_spanProcessor;
	_spanLimits;
	_attributeValueLengthLimit;
	_recordEndMetrics;
	_performanceStartTime;
	_performanceOffset;
	_startTimeProvided;
	/**
	* Constructs a new SpanImpl instance.
	*/
	constructor(opts) {
		const now = Date.now();
		this._spanContext = opts.spanContext;
		this._performanceStartTime = otperformance.now();
		this._performanceOffset = now - (this._performanceStartTime + otperformance.timeOrigin);
		this._startTimeProvided = opts.startTime != null;
		this._spanLimits = opts.spanLimits;
		this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit ?? 0;
		this._spanProcessor = opts.spanProcessor;
		this.name = opts.name;
		this.parentSpanContext = opts.parentSpanContext;
		this.kind = opts.kind;
		if (opts.links) for (const link of opts.links) this.addLink(link);
		this.startTime = this._getTime(opts.startTime ?? now);
		this.resource = opts.resource;
		this.instrumentationScope = opts.scope;
		this._recordEndMetrics = opts.recordEndMetrics;
		if (opts.attributes != null) this.setAttributes(opts.attributes);
		this._spanProcessor.onStart(this, opts.context);
	}
	spanContext() {
		return this._spanContext;
	}
	setAttribute(key, value) {
		if (value == null || this._isSpanEnded()) return this;
		if (key.length === 0) {
			diag.warn(`Invalid attribute key: ${key}`);
			return this;
		}
		if (!isAttributeValue(value)) {
			diag.warn(`Invalid attribute value set for key: ${key}`);
			return this;
		}
		const { attributeCountLimit } = this._spanLimits;
		const isNewKey = !Object.prototype.hasOwnProperty.call(this.attributes, key);
		if (attributeCountLimit !== void 0 && this._attributesCount >= attributeCountLimit && isNewKey) {
			this._droppedAttributesCount++;
			return this;
		}
		this.attributes[key] = this._truncateToSize(value);
		if (isNewKey) this._attributesCount++;
		return this;
	}
	setAttributes(attributes) {
		for (const key in attributes) if (Object.prototype.hasOwnProperty.call(attributes, key)) this.setAttribute(key, attributes[key]);
		return this;
	}
	/**
	*
	* @param name Span Name
	* @param [attributesOrStartTime] Span attributes or start time
	*     if type is {@type TimeInput} and 3rd param is undefined
	* @param [timeStamp] Specified time stamp for the event
	*/
	addEvent(name, attributesOrStartTime, timeStamp) {
		if (this._isSpanEnded()) return this;
		const { eventCountLimit } = this._spanLimits;
		if (eventCountLimit === 0) {
			diag.warn("No events allowed.");
			this._droppedEventsCount++;
			return this;
		}
		if (eventCountLimit !== void 0 && this.events.length >= eventCountLimit) {
			if (this._droppedEventsCount === 0) diag.debug("Dropping extra events.");
			this.events.shift();
			this._droppedEventsCount++;
		}
		if (isTimeInput(attributesOrStartTime)) {
			if (!isTimeInput(timeStamp)) timeStamp = attributesOrStartTime;
			attributesOrStartTime = void 0;
		}
		const sanitized = sanitizeAttributes(attributesOrStartTime);
		const { attributePerEventCountLimit } = this._spanLimits;
		const attributes = {};
		let droppedAttributesCount = 0;
		let eventAttributesCount = 0;
		for (const attr in sanitized) {
			if (!Object.prototype.hasOwnProperty.call(sanitized, attr)) continue;
			const attrVal = sanitized[attr];
			if (attributePerEventCountLimit !== void 0 && eventAttributesCount >= attributePerEventCountLimit) {
				droppedAttributesCount++;
				continue;
			}
			attributes[attr] = this._truncateToSize(attrVal);
			eventAttributesCount++;
		}
		this.events.push({
			name,
			attributes,
			time: this._getTime(timeStamp),
			droppedAttributesCount
		});
		return this;
	}
	addLink(link) {
		if (this._isSpanEnded()) return this;
		const { linkCountLimit } = this._spanLimits;
		if (linkCountLimit === 0) {
			this._droppedLinksCount++;
			return this;
		}
		if (linkCountLimit !== void 0 && this.links.length >= linkCountLimit) {
			if (this._droppedLinksCount === 0) diag.debug("Dropping extra links.");
			this.links.shift();
			this._droppedLinksCount++;
		}
		const { attributePerLinkCountLimit } = this._spanLimits;
		const sanitized = sanitizeAttributes(link.attributes);
		const attributes = {};
		let droppedAttributesCount = 0;
		let linkAttributesCount = 0;
		for (const attr in sanitized) {
			if (!Object.prototype.hasOwnProperty.call(sanitized, attr)) continue;
			const attrVal = sanitized[attr];
			if (attributePerLinkCountLimit !== void 0 && linkAttributesCount >= attributePerLinkCountLimit) {
				droppedAttributesCount++;
				continue;
			}
			attributes[attr] = this._truncateToSize(attrVal);
			linkAttributesCount++;
		}
		const processedLink = { context: link.context };
		if (linkAttributesCount > 0) processedLink.attributes = attributes;
		if (droppedAttributesCount > 0) processedLink.droppedAttributesCount = droppedAttributesCount;
		this.links.push(processedLink);
		return this;
	}
	addLinks(links) {
		for (const link of links) this.addLink(link);
		return this;
	}
	setStatus(status) {
		if (this._isSpanEnded()) return this;
		if (status.code === SpanStatusCode.UNSET) return this;
		if (this.status.code === SpanStatusCode.OK) return this;
		const newStatus = { code: status.code };
		if (status.code === SpanStatusCode.ERROR) {
			if (typeof status.message === "string") newStatus.message = status.message;
			else if (status.message != null) diag.warn(`Dropping invalid status.message of type '${typeof status.message}', expected 'string'`);
		}
		this.status = newStatus;
		return this;
	}
	updateName(name) {
		if (this._isSpanEnded()) return this;
		this.name = name;
		return this;
	}
	end(endTime) {
		if (this._isSpanEnded()) {
			diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
			return;
		}
		this.endTime = this._getTime(endTime);
		this._duration = hrTimeDuration(this.startTime, this.endTime);
		if (this._duration[0] < 0) {
			diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime);
			this.endTime = this.startTime.slice();
			this._duration = [0, 0];
		}
		if (this._droppedEventsCount > 0) diag.warn(`Dropped ${this._droppedEventsCount} events because eventCountLimit reached`);
		if (this._droppedLinksCount > 0) diag.warn(`Dropped ${this._droppedLinksCount} links because linkCountLimit reached`);
		if (this._spanProcessor.onEnding) this._spanProcessor.onEnding(this);
		this._recordEndMetrics?.();
		this._ended = true;
		this._spanProcessor.onEnd(this);
	}
	_getTime(inp) {
		if (typeof inp === "number" && inp <= otperformance.now()) return hrTime(inp + this._performanceOffset);
		if (typeof inp === "number") return millisToHrTime(inp);
		if (inp instanceof Date) return millisToHrTime(inp.getTime());
		if (isTimeInputHrTime(inp)) return inp;
		if (this._startTimeProvided) return millisToHrTime(Date.now());
		const msDuration = otperformance.now() - this._performanceStartTime;
		return addHrTimes(this.startTime, millisToHrTime(msDuration));
	}
	isRecording() {
		return this._ended === false;
	}
	recordException(exception, time) {
		const attributes = {};
		if (typeof exception === "string") attributes[ATTR_EXCEPTION_MESSAGE] = exception;
		else if (exception) {
			if (exception.code) attributes[ATTR_EXCEPTION_TYPE] = exception.code.toString();
			else if (exception.name) attributes[ATTR_EXCEPTION_TYPE] = exception.name;
			if (exception.message) attributes[ATTR_EXCEPTION_MESSAGE] = exception.message;
			if (exception.stack) attributes[ATTR_EXCEPTION_STACKTRACE] = exception.stack;
		}
		if (attributes["exception.type"] || attributes["exception.message"]) this.addEvent(ExceptionEventName, attributes, time);
		else diag.warn(`Failed to record an exception ${exception}`);
	}
	get duration() {
		return this._duration;
	}
	get ended() {
		return this._ended;
	}
	get droppedAttributesCount() {
		return this._droppedAttributesCount;
	}
	get droppedEventsCount() {
		return this._droppedEventsCount;
	}
	get droppedLinksCount() {
		return this._droppedLinksCount;
	}
	_isSpanEnded() {
		if (this._ended) {
			const error = /* @__PURE__ */ new Error(`Operation attempted on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`);
			diag.warn(`Cannot execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`, error);
		}
		return this._ended;
	}
	_truncateToLimitUtil(value, limit) {
		if (value.length <= limit) return value;
		return value.substring(0, limit);
	}
	/**
	* If the given attribute value is of type string and has more characters than given {@code attributeValueLengthLimit} then
	* return string with truncated to {@code attributeValueLengthLimit} characters
	*
	* If the given attribute value is array of strings then
	* return new array of strings with each element truncated to {@code attributeValueLengthLimit} characters
	*
	* Otherwise return same Attribute {@code value}
	*
	* @param value Attribute value
	* @returns truncated attribute value if required, otherwise same value
	*/
	_truncateToSize(value) {
		const limit = this._attributeValueLengthLimit;
		if (limit <= 0) {
			diag.warn(`Attribute value limit must be positive, got ${limit}`);
			return value;
		}
		if (typeof value === "string") return this._truncateToLimitUtil(value, limit);
		if (Array.isArray(value)) return value.map((val) => typeof val === "string" ? this._truncateToLimitUtil(val, limit) : val);
		return value;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/Sampler.js
/**
* A sampling decision that determines how a {@link Span} will be recorded
* and collected.
*/
var SamplingDecision;
(function(SamplingDecision) {
	/**
	* `Span.isRecording() === false`, span will not be recorded and all events
	* and attributes will be dropped.
	*/
	SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
	/**
	* `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
	* MUST NOT be set.
	*/
	SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
	/**
	* `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
	* MUST be set.
	*/
	SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOffSampler.js
/** Sampler that samples no traces. */
var AlwaysOffSampler = class {
	shouldSample() {
		return { decision: SamplingDecision.NOT_RECORD };
	}
	toString() {
		return "AlwaysOffSampler";
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/AlwaysOnSampler.js
/** Sampler that samples all traces. */
var AlwaysOnSampler = class {
	shouldSample() {
		return { decision: SamplingDecision.RECORD_AND_SAMPLED };
	}
	toString() {
		return "AlwaysOnSampler";
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/ParentBasedSampler.js
/**
* A composite sampler that either respects the parent span's sampling decision
* or delegates to `delegateSampler` for root spans.
*/
var ParentBasedSampler = class {
	_root;
	_remoteParentSampled;
	_remoteParentNotSampled;
	_localParentSampled;
	_localParentNotSampled;
	constructor(config) {
		this._root = config.root;
		if (!this._root) {
			globalErrorHandler(/* @__PURE__ */ new Error("ParentBasedSampler must have a root sampler configured"));
			this._root = new AlwaysOnSampler();
		}
		this._remoteParentSampled = config.remoteParentSampled ?? new AlwaysOnSampler();
		this._remoteParentNotSampled = config.remoteParentNotSampled ?? new AlwaysOffSampler();
		this._localParentSampled = config.localParentSampled ?? new AlwaysOnSampler();
		this._localParentNotSampled = config.localParentNotSampled ?? new AlwaysOffSampler();
	}
	shouldSample(context, traceId, spanName, spanKind, attributes, links) {
		const parentContext = trace.getSpanContext(context);
		if (!parentContext || !isSpanContextValid(parentContext)) return this._root.shouldSample(context, traceId, spanName, spanKind, attributes, links);
		if (parentContext.isRemote) {
			if (parentContext.traceFlags & TraceFlags.SAMPLED) return this._remoteParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
			return this._remoteParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
		}
		if (parentContext.traceFlags & TraceFlags.SAMPLED) return this._localParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
		return this._localParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
	}
	toString() {
		return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/sampler/TraceIdRatioBasedSampler.js
/** Sampler that samples a given fraction of traces based of trace id deterministically. */
var TraceIdRatioBasedSampler = class {
	_ratio;
	_upperBound;
	constructor(ratio = 0) {
		this._ratio = this._normalize(ratio);
		this._upperBound = Math.floor(this._ratio * 4294967295);
	}
	shouldSample(context, traceId) {
		return { decision: isValidTraceId(traceId) && this._accumulate(traceId) < this._upperBound ? SamplingDecision.RECORD_AND_SAMPLED : SamplingDecision.NOT_RECORD };
	}
	toString() {
		return `TraceIdRatioBased{${this._ratio}}`;
	}
	_normalize(ratio) {
		if (typeof ratio !== "number" || isNaN(ratio)) return 0;
		return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
	}
	_accumulate(traceId) {
		let accumulation = 0;
		for (let i = 0; i < 32; i += 8) {
			let part = 0;
			for (let j = 0; j < 8; j++) {
				const c = traceId.charCodeAt(i + j);
				const v = c < 58 ? c - 48 : c < 71 ? c - 55 : c - 87;
				part = part << 4 | v;
			}
			accumulation = (accumulation ^ part) >>> 0;
		}
		return accumulation;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/config.js
var TracesSamplerValues;
(function(TracesSamplerValues) {
	TracesSamplerValues["AlwaysOff"] = "always_off";
	TracesSamplerValues["AlwaysOn"] = "always_on";
	TracesSamplerValues["ParentBasedAlwaysOff"] = "parentbased_always_off";
	TracesSamplerValues["ParentBasedAlwaysOn"] = "parentbased_always_on";
	TracesSamplerValues["ParentBasedTraceIdRatio"] = "parentbased_traceidratio";
	TracesSamplerValues["TraceIdRatio"] = "traceidratio";
})(TracesSamplerValues || (TracesSamplerValues = {}));
var DEFAULT_RATIO = 1;
/**
* Load default configuration. For fields with primitive values, any user-provided
* value will override the corresponding default value. For fields with
* non-primitive values (like `spanLimits`), the user-provided value will be
* used to extend the default value.
*/
function loadDefaultConfig() {
	return {
		sampler: buildSamplerFromEnv(),
		forceFlushTimeoutMillis: 3e4,
		generalLimits: {
			attributeValueLengthLimit: Infinity,
			attributeCountLimit: 128
		},
		spanLimits: {
			attributeValueLengthLimit: Infinity,
			attributeCountLimit: 128,
			linkCountLimit: 128,
			eventCountLimit: 128,
			attributePerEventCountLimit: 128,
			attributePerLinkCountLimit: 128
		}
	};
}
/**
* Based on environment, builds a sampler, complies with specification.
*/
function buildSamplerFromEnv() {
	const sampler = TracesSamplerValues.ParentBasedAlwaysOn;
	switch (sampler) {
		case TracesSamplerValues.AlwaysOn: return new AlwaysOnSampler();
		case TracesSamplerValues.AlwaysOff: return new AlwaysOffSampler();
		case TracesSamplerValues.ParentBasedAlwaysOn: return new ParentBasedSampler({ root: new AlwaysOnSampler() });
		case TracesSamplerValues.ParentBasedAlwaysOff: return new ParentBasedSampler({ root: new AlwaysOffSampler() });
		case TracesSamplerValues.TraceIdRatio: return new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv());
		case TracesSamplerValues.ParentBasedTraceIdRatio: return new ParentBasedSampler({ root: new TraceIdRatioBasedSampler(getSamplerProbabilityFromEnv()) });
		default:
			diag.error(`OTEL_TRACES_SAMPLER value "${sampler}" invalid, defaulting to "${TracesSamplerValues.ParentBasedAlwaysOn}".`);
			return new ParentBasedSampler({ root: new AlwaysOnSampler() });
	}
}
function getSamplerProbabilityFromEnv() {
	diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${DEFAULT_RATIO}.`);
	return DEFAULT_RATIO;
}
/**
* Function to merge Default configuration (as specified in './config') with
* user provided configurations.
*/
function mergeConfig(userConfig) {
	const perInstanceDefaults = { sampler: buildSamplerFromEnv() };
	const DEFAULT_CONFIG = loadDefaultConfig();
	const target = Object.assign({}, DEFAULT_CONFIG, perInstanceDefaults, userConfig);
	target.generalLimits = Object.assign({}, DEFAULT_CONFIG.generalLimits, userConfig.generalLimits || {});
	target.spanLimits = Object.assign({}, DEFAULT_CONFIG.spanLimits, userConfig.spanLimits || {});
	return target;
}
/**
* When general limits are provided and model specific limits are not,
* configures the model specific limits by using the values from the general ones.
* @param userConfig User provided tracer configuration
*/
function reconfigureLimits(userConfig) {
	const spanLimits = Object.assign({}, userConfig.spanLimits);
	/**
	* Reassign span attribute count limit to use first non null value defined by user or use default value
	*/
	spanLimits.attributeCountLimit = userConfig.spanLimits?.attributeCountLimit ?? userConfig.generalLimits?.attributeCountLimit ?? void 0 ?? void 0 ?? 128;
	/**
	* Reassign span attribute value length limit to use first non null value defined by user or use default value
	*/
	spanLimits.attributeValueLengthLimit = userConfig.spanLimits?.attributeValueLengthLimit ?? userConfig.generalLimits?.attributeValueLengthLimit ?? void 0 ?? void 0 ?? Infinity;
	return Object.assign({}, userConfig, { spanLimits });
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/export/BatchSpanProcessorBase.js
/**
* Implementation of the {@link SpanProcessor} that batches spans exported by
* the SDK then pushes them to the exporter pipeline.
*/
var BatchSpanProcessorBase = class {
	_maxExportBatchSize;
	_maxQueueSize;
	_scheduledDelayMillis;
	_exportTimeoutMillis;
	_exporter;
	_isExporting = false;
	_finishedSpans = [];
	_timer;
	_shutdownOnce;
	_droppedSpansCount = 0;
	constructor(exporter, config) {
		this._exporter = exporter;
		this._maxExportBatchSize = typeof config?.maxExportBatchSize === "number" ? config.maxExportBatchSize : 512;
		this._maxQueueSize = typeof config?.maxQueueSize === "number" ? config.maxQueueSize : 2048;
		this._scheduledDelayMillis = typeof config?.scheduledDelayMillis === "number" ? config.scheduledDelayMillis : 5e3;
		this._exportTimeoutMillis = typeof config?.exportTimeoutMillis === "number" ? config.exportTimeoutMillis : 3e4;
		this._shutdownOnce = new BindOnceFuture(this._shutdown, this);
		if (this._maxExportBatchSize > this._maxQueueSize) {
			diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize");
			this._maxExportBatchSize = this._maxQueueSize;
		}
	}
	forceFlush() {
		if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
		return this._flushAll();
	}
	onStart(_span, _parentContext) {}
	onEnd(span) {
		if (this._shutdownOnce.isCalled) return;
		if ((span.spanContext().traceFlags & TraceFlags.SAMPLED) === 0) return;
		this._addToBuffer(span);
	}
	shutdown() {
		return this._shutdownOnce.call();
	}
	_shutdown() {
		return Promise.resolve().then(() => {
			return this.onShutdown();
		}).then(() => {
			return this._flushAll();
		}).then(() => {
			return this._exporter.shutdown();
		});
	}
	/** Add a span in the buffer. */
	_addToBuffer(span) {
		if (this._finishedSpans.length >= this._maxQueueSize) {
			if (this._droppedSpansCount === 0) diag.debug("maxQueueSize reached, dropping spans");
			this._droppedSpansCount++;
			return;
		}
		if (this._droppedSpansCount > 0) {
			diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`);
			this._droppedSpansCount = 0;
		}
		this._finishedSpans.push(span);
		this._maybeStartTimer();
	}
	/**
	* Send all spans to the exporter respecting the batch size limit
	* This function is used only on forceFlush or shutdown,
	* for all other cases _flush should be used
	* */
	_flushAll() {
		return new Promise((resolve, reject) => {
			const promises = [];
			const count = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
			for (let i = 0, j = count; i < j; i++) promises.push(this._flushOneBatch());
			Promise.all(promises).then(() => {
				resolve();
			}).catch(reject);
		});
	}
	_flushOneBatch() {
		this._clearTimer();
		if (this._finishedSpans.length === 0) return Promise.resolve();
		return new Promise((resolve, reject) => {
			const timer = setTimeout(() => {
				reject(/* @__PURE__ */ new Error("Timeout"));
			}, this._exportTimeoutMillis);
			context.with(suppressTracing(context.active()), () => {
				let spans;
				if (this._finishedSpans.length <= this._maxExportBatchSize) {
					spans = this._finishedSpans;
					this._finishedSpans = [];
				} else spans = this._finishedSpans.splice(0, this._maxExportBatchSize);
				const doExport = () => this._exporter.export(spans, (result) => {
					clearTimeout(timer);
					if (result.code === ExportResultCode.SUCCESS) resolve();
					else reject(result.error ?? /* @__PURE__ */ new Error("BatchSpanProcessor: span export failed"));
				});
				let pendingResources = null;
				for (let i = 0, len = spans.length; i < len; i++) {
					const span = spans[i];
					if (span.resource.asyncAttributesPending && span.resource.waitForAsyncAttributes) {
						pendingResources ??= [];
						pendingResources.push(span.resource.waitForAsyncAttributes());
					}
				}
				if (pendingResources === null) doExport();
				else Promise.all(pendingResources).then(doExport, (err) => {
					globalErrorHandler(err);
					reject(err);
				});
			});
		});
	}
	_maybeStartTimer() {
		if (this._isExporting) return;
		const flush = () => {
			this._isExporting = true;
			this._flushOneBatch().finally(() => {
				this._isExporting = false;
				if (this._finishedSpans.length > 0) {
					this._clearTimer();
					this._maybeStartTimer();
				}
			}).catch((e) => {
				this._isExporting = false;
				globalErrorHandler(e);
			});
		};
		if (this._finishedSpans.length >= this._maxExportBatchSize) return flush();
		if (this._timer !== void 0) return;
		this._timer = setTimeout(() => flush(), this._scheduledDelayMillis);
		if (typeof this._timer !== "number") this._timer.unref();
	}
	_clearTimer() {
		if (this._timer !== void 0) {
			clearTimeout(this._timer);
			this._timer = void 0;
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/browser/export/BatchSpanProcessor.js
var BatchSpanProcessor = class extends BatchSpanProcessorBase {
	_visibilityChangeListener;
	_pageHideListener;
	constructor(_exporter, config) {
		super(_exporter, config);
		this.onInit(config);
	}
	onInit(config) {
		if (config?.disableAutoFlushOnDocumentHide !== true && typeof document !== "undefined") {
			this._visibilityChangeListener = () => {
				if (document.visibilityState === "hidden") this.forceFlush().catch((error) => {
					globalErrorHandler(error);
				});
			};
			this._pageHideListener = () => {
				this.forceFlush().catch((error) => {
					globalErrorHandler(error);
				});
			};
			document.addEventListener("visibilitychange", this._visibilityChangeListener);
			document.addEventListener("pagehide", this._pageHideListener);
		}
	}
	onShutdown() {
		if (typeof document !== "undefined") {
			if (this._visibilityChangeListener) document.removeEventListener("visibilitychange", this._visibilityChangeListener);
			if (this._pageHideListener) document.removeEventListener("pagehide", this._pageHideListener);
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/platform/browser/RandomIdGenerator.js
var TRACE_ID_BYTES = 16;
var SPAN_ID_BYTES = 8;
var TRACE_BUFFER = new Uint8Array(TRACE_ID_BYTES);
var SPAN_BUFFER = new Uint8Array(SPAN_ID_BYTES);
var HEX = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
/**
* Fills buffer with random bytes, ensuring at least one is non-zero
* per W3C Trace Context spec.
*/
function randomFill(buf) {
	for (let i = 0; i < buf.length; i++) buf[i] = Math.random() * 256 >>> 0;
	for (let i = 0; i < buf.length; i++) if (buf[i] > 0) return;
	buf[buf.length - 1] = 1;
}
function toHex(buf) {
	let hex = "";
	for (let i = 0; i < buf.length; i++) hex += HEX[buf[i]];
	return hex;
}
var RandomIdGenerator = class {
	/**
	* Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
	* characters corresponding to 128 bits.
	*/
	generateTraceId() {
		randomFill(TRACE_BUFFER);
		return toHex(TRACE_BUFFER);
	}
	/**
	* Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
	* characters corresponding to 64 bits.
	*/
	generateSpanId() {
		randomFill(SPAN_BUFFER);
		return toHex(SPAN_BUFFER);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/semconv.js
/**
* Determines whether the span has a parent span, and if so, [whether it is a remote parent](https://opentelemetry.io/docs/specs/otel/trace/api/#isremote)
*
* @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
*/
var ATTR_OTEL_SPAN_PARENT_ORIGIN = "otel.span.parent.origin";
/**
* The result value of the sampler for this span
*
* @experimental This attribute is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
*/
var ATTR_OTEL_SPAN_SAMPLING_RESULT = "otel.span.sampling_result";
/**
* The number of created spans with `recording=true` for which the end operation has not been called yet.
*
* @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
*/
var METRIC_OTEL_SDK_SPAN_LIVE = "otel.sdk.span.live";
/**
* The number of created spans.
*
* @note Implementations **MUST** record this metric for all spans, even for non-recording ones.
*
* @experimental This metric is experimental and is subject to breaking changes in minor releases of `@opentelemetry/semantic-conventions`.
*/
var METRIC_OTEL_SDK_SPAN_STARTED = "otel.sdk.span.started";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/TracerMetrics.js
/**
* Generates `otel.sdk.span.*` metrics.
* https://opentelemetry.io/docs/specs/semconv/otel/sdk-metrics/#span-metrics
*/
var TracerMetrics = class {
	startedSpans;
	liveSpans;
	constructor(meter) {
		this.startedSpans = meter.createCounter(METRIC_OTEL_SDK_SPAN_STARTED, {
			unit: "{span}",
			description: "The number of created spans."
		});
		this.liveSpans = meter.createUpDownCounter(METRIC_OTEL_SDK_SPAN_LIVE, {
			unit: "{span}",
			description: "The number of currently live spans."
		});
	}
	startSpan(parentSpanCtx, samplingDecision) {
		const samplingDecisionStr = samplingDecisionToString(samplingDecision);
		this.startedSpans.add(1, {
			[ATTR_OTEL_SPAN_PARENT_ORIGIN]: parentOrigin(parentSpanCtx),
			[ATTR_OTEL_SPAN_SAMPLING_RESULT]: samplingDecisionStr
		});
		if (samplingDecision === SamplingDecision.NOT_RECORD) return () => {};
		const liveSpanAttributes = { [ATTR_OTEL_SPAN_SAMPLING_RESULT]: samplingDecisionStr };
		this.liveSpans.add(1, liveSpanAttributes);
		return () => {
			this.liveSpans.add(-1, liveSpanAttributes);
		};
	}
};
function parentOrigin(parentSpanContext) {
	if (!parentSpanContext) return "none";
	if (parentSpanContext.isRemote) return "remote";
	return "local";
}
function samplingDecisionToString(decision) {
	switch (decision) {
		case SamplingDecision.RECORD_AND_SAMPLED: return "RECORD_AND_SAMPLE";
		case SamplingDecision.RECORD: return "RECORD_ONLY";
		case SamplingDecision.NOT_RECORD: return "DROP";
	}
}
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/version.js
var VERSION = "2.7.1";
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/Tracer.js
/**
* This class represents a basic tracer.
*/
var Tracer = class {
	_sampler;
	_generalLimits;
	_spanLimits;
	_idGenerator;
	instrumentationScope;
	_resource;
	_spanProcessor;
	_tracerMetrics;
	/**
	* Constructs a new Tracer instance.
	*/
	constructor(instrumentationScope, config, resource, spanProcessor) {
		const localConfig = mergeConfig(config);
		this._sampler = localConfig.sampler;
		this._generalLimits = localConfig.generalLimits;
		this._spanLimits = localConfig.spanLimits;
		this._idGenerator = config.idGenerator || new RandomIdGenerator();
		this._resource = resource;
		this._spanProcessor = spanProcessor;
		this.instrumentationScope = instrumentationScope;
		const meter = localConfig.meterProvider ? localConfig.meterProvider.getMeter("@opentelemetry/sdk-trace", VERSION) : createNoopMeter();
		this._tracerMetrics = new TracerMetrics(meter);
	}
	/**
	* Starts a new Span or returns the default NoopSpan based on the sampling
	* decision.
	*/
	startSpan(name, options = {}, context$1 = context.active()) {
		if (options.root) context$1 = trace.deleteSpan(context$1);
		const parentSpan = trace.getSpan(context$1);
		if (isTracingSuppressed(context$1)) {
			diag.debug("Instrumentation suppressed, returning Noop Span");
			return trace.wrapSpanContext(INVALID_SPAN_CONTEXT);
		}
		const parentSpanContext = parentSpan?.spanContext();
		const spanId = this._idGenerator.generateSpanId();
		let validParentSpanContext;
		let traceId;
		let traceState;
		if (!parentSpanContext || !trace.isSpanContextValid(parentSpanContext)) traceId = this._idGenerator.generateTraceId();
		else {
			traceId = parentSpanContext.traceId;
			traceState = parentSpanContext.traceState;
			validParentSpanContext = parentSpanContext;
		}
		const spanKind = options.kind ?? SpanKind.INTERNAL;
		const links = (options.links ?? []).map((link) => {
			return {
				context: link.context,
				attributes: sanitizeAttributes(link.attributes)
			};
		});
		const attributes = sanitizeAttributes(options.attributes);
		const samplingResult = this._sampler.shouldSample(context$1, traceId, name, spanKind, attributes, links);
		const recordEndMetrics = this._tracerMetrics.startSpan(parentSpanContext, samplingResult.decision);
		traceState = samplingResult.traceState ?? traceState;
		const spanContext = {
			traceId,
			spanId,
			traceFlags: samplingResult.decision === SamplingDecision$1.RECORD_AND_SAMPLED ? TraceFlags.SAMPLED : TraceFlags.NONE,
			traceState
		};
		if (samplingResult.decision === SamplingDecision$1.NOT_RECORD) {
			diag.debug("Recording is off, propagating context in a non-recording span");
			return trace.wrapSpanContext(spanContext);
		}
		const initAttributes = sanitizeAttributes(Object.assign(attributes, samplingResult.attributes));
		return new SpanImpl({
			resource: this._resource,
			scope: this.instrumentationScope,
			context: context$1,
			spanContext,
			name,
			kind: spanKind,
			links,
			parentSpanContext: validParentSpanContext,
			attributes: initAttributes,
			startTime: options.startTime,
			spanProcessor: this._spanProcessor,
			spanLimits: this._spanLimits,
			recordEndMetrics
		});
	}
	startActiveSpan(name, arg2, arg3, arg4) {
		let opts;
		let ctx;
		let fn;
		if (arguments.length < 2) return;
		else if (arguments.length === 2) fn = arg2;
		else if (arguments.length === 3) {
			opts = arg2;
			fn = arg3;
		} else {
			opts = arg2;
			ctx = arg3;
			fn = arg4;
		}
		const parentContext = ctx ?? context.active();
		const span = this.startSpan(name, opts, parentContext);
		const contextWithSpanSet = trace.setSpan(parentContext, span);
		return context.with(contextWithSpanSet, fn, void 0, span);
	}
	/** Returns the active {@link GeneralLimits}. */
	getGeneralLimits() {
		return this._generalLimits;
	}
	/** Returns the active {@link SpanLimits}. */
	getSpanLimits() {
		return this._spanLimits;
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/MultiSpanProcessor.js
/**
* Implementation of the {@link SpanProcessor} that simply forwards all
* received events to a list of {@link SpanProcessor}s.
*/
var MultiSpanProcessor = class {
	_spanProcessors;
	constructor(spanProcessors) {
		this._spanProcessors = spanProcessors;
	}
	forceFlush() {
		const promises = [];
		for (const spanProcessor of this._spanProcessors) promises.push(spanProcessor.forceFlush());
		return new Promise((resolve) => {
			Promise.all(promises).then(() => {
				resolve();
			}).catch((error) => {
				globalErrorHandler(error || /* @__PURE__ */ new Error("MultiSpanProcessor: forceFlush failed"));
				resolve();
			});
		});
	}
	onStart(span, context) {
		for (const spanProcessor of this._spanProcessors) spanProcessor.onStart(span, context);
	}
	onEnding(span) {
		for (const spanProcessor of this._spanProcessors) if (spanProcessor.onEnding) spanProcessor.onEnding(span);
	}
	onEnd(span) {
		for (const spanProcessor of this._spanProcessors) spanProcessor.onEnd(span);
	}
	shutdown() {
		const promises = [];
		for (const spanProcessor of this._spanProcessors) promises.push(spanProcessor.shutdown());
		return new Promise((resolve, reject) => {
			Promise.all(promises).then(() => {
				resolve();
			}, reject);
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-base@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-base/build/esm/BasicTracerProvider.js
var ForceFlushState;
(function(ForceFlushState) {
	ForceFlushState[ForceFlushState["resolved"] = 0] = "resolved";
	ForceFlushState[ForceFlushState["timeout"] = 1] = "timeout";
	ForceFlushState[ForceFlushState["error"] = 2] = "error";
	ForceFlushState[ForceFlushState["unresolved"] = 3] = "unresolved";
})(ForceFlushState || (ForceFlushState = {}));
/**
* This class represents a basic tracer provider which platform libraries can extend
*/
var BasicTracerProvider = class {
	_config;
	_tracers = /* @__PURE__ */ new Map();
	_resource;
	_activeSpanProcessor;
	constructor(config = {}) {
		const mergedConfig = merge({}, loadDefaultConfig(), reconfigureLimits(config));
		this._resource = mergedConfig.resource ?? defaultResource();
		this._config = Object.assign({}, mergedConfig, { resource: this._resource });
		const spanProcessors = [];
		if (config.spanProcessors?.length) spanProcessors.push(...config.spanProcessors);
		this._activeSpanProcessor = new MultiSpanProcessor(spanProcessors);
	}
	getTracer(name, version, options) {
		const key = `${name}@${version || ""}:${options?.schemaUrl || ""}`;
		if (!this._tracers.has(key)) this._tracers.set(key, new Tracer({
			name,
			version,
			schemaUrl: options?.schemaUrl
		}, this._config, this._resource, this._activeSpanProcessor));
		return this._tracers.get(key);
	}
	forceFlush() {
		const timeout = this._config.forceFlushTimeoutMillis;
		const promises = this._activeSpanProcessor["_spanProcessors"].map((spanProcessor) => {
			return new Promise((resolve) => {
				let state;
				const timeoutInterval = setTimeout(() => {
					resolve(/* @__PURE__ */ new Error(`Span processor did not completed within timeout period of ${timeout} ms`));
					state = ForceFlushState.timeout;
				}, timeout);
				spanProcessor.forceFlush().then(() => {
					clearTimeout(timeoutInterval);
					if (state !== ForceFlushState.timeout) {
						state = ForceFlushState.resolved;
						resolve(state);
					}
				}).catch((error) => {
					clearTimeout(timeoutInterval);
					state = ForceFlushState.error;
					resolve(error);
				});
			});
		});
		return new Promise((resolve, reject) => {
			Promise.all(promises).then((results) => {
				const errors = results.filter((result) => result !== ForceFlushState.resolved);
				if (errors.length > 0) reject(errors);
				else resolve();
			}).catch((error) => reject([error]));
		});
	}
	shutdown() {
		return this._activeSpanProcessor.shutdown();
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-web@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-web/build/esm/StackContextManager.js
/**
* Stack Context Manager for managing the state in web
* it doesn't fully support the async calls though
*/
var StackContextManager = class {
	/**
	* whether the context manager is enabled or not
	*/
	_enabled = false;
	/**
	* Keeps the reference to current context
	*/
	_currentContext = ROOT_CONTEXT;
	/**
	*
	* @param context
	* @param target Function to be executed within the context
	*/
	_bindFunction(context = ROOT_CONTEXT, target) {
		const manager = this;
		const contextWrapper = function(...args) {
			return manager.with(context, () => target.apply(this, args));
		};
		Object.defineProperty(contextWrapper, "length", {
			enumerable: false,
			configurable: true,
			writable: false,
			value: target.length
		});
		return contextWrapper;
	}
	/**
	* Returns the active context
	*/
	active() {
		return this._currentContext;
	}
	/**
	* Binds a the certain context or the active one to the target function and then returns the target
	* @param context A context (span) to be bind to target
	* @param target a function or event emitter. When target or one of its callbacks is called,
	*  the provided context will be used as the active context for the duration of the call.
	*/
	bind(context, target) {
		if (context === void 0) context = this.active();
		if (typeof target === "function") return this._bindFunction(context, target);
		return target;
	}
	/**
	* Disable the context manager (clears the current context)
	*/
	disable() {
		this._currentContext = ROOT_CONTEXT;
		this._enabled = false;
		return this;
	}
	/**
	* Enables the context manager and creates a default(root) context
	*/
	enable() {
		if (this._enabled) return this;
		this._enabled = true;
		this._currentContext = ROOT_CONTEXT;
		return this;
	}
	/**
	* Calls the callback function [fn] with the provided [context]. If [context] is undefined then it will use the window.
	* The context will be set as active
	* @param context
	* @param fn Callback function
	* @param thisArg optional receiver to be used for calling fn
	* @param args optional arguments forwarded to fn
	*/
	with(context, fn, thisArg, ...args) {
		const previousContext = this._currentContext;
		this._currentContext = context || ROOT_CONTEXT;
		try {
			return fn.call(thisArg, ...args);
		} finally {
			this._currentContext = previousContext;
		}
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+sdk-trace-web@2.7.1_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/sdk-trace-web/build/esm/WebTracerProvider.js
function setupContextManager(contextManager) {
	if (contextManager === null) return;
	if (contextManager === void 0) {
		const defaultContextManager = new StackContextManager();
		defaultContextManager.enable();
		context.setGlobalContextManager(defaultContextManager);
		return;
	}
	contextManager.enable();
	context.setGlobalContextManager(contextManager);
}
function setupPropagator(propagator) {
	if (propagator === null) return;
	if (propagator === void 0) {
		propagation.setGlobalPropagator(new CompositePropagator({ propagators: [new W3CTraceContextPropagator(), new W3CBaggagePropagator()] }));
		return;
	}
	propagation.setGlobalPropagator(propagator);
}
/**
* This class represents a web tracer with {@link StackContextManager}
*/
var WebTracerProvider = class extends BasicTracerProvider {
	/**
	* Constructs a new Tracer instance.
	* @param config Web Tracer config
	*/
	constructor(config = {}) {
		super(config);
	}
	/**
	* Register this TracerProvider for use with the OpenTelemetry API.
	* Undefined values may be replaced with defaults, and
	* null values will be skipped.
	*
	* @param config Configuration object for SDK registration
	*/
	register(config = {}) {
		trace.setGlobalTracerProvider(this);
		setupPropagator(config.propagator);
		setupContextManager(config.contextManager);
	}
};
//#endregion
//#region node_modules/.pnpm/@opentelemetry+exporter-trace-otlp-http@0.218.0_@opentelemetry+api@1.9.1/node_modules/@opentelemetry/exporter-trace-otlp-http/build/esm/platform/browser/OTLPTraceExporter.js
/**
* Collector Trace Exporter for Web
*/
var OTLPTraceExporter = class extends OTLPExporterBase {
	constructor(config = {}) {
		super(createLegacyOtlpBrowserExportDelegate(config, JsonTraceSerializer, "v1/traces", { "Content-Type": "application/json" }));
	}
};
//#endregion
//#region utils/trace-id.ts
/**
* W3C trace-id / traceparent derivation for the driving-service upstream.
*
* Kept apart from `otel-trace.ts` so it pulls in no `@opentelemetry` packages:
* the WebSocket client stamps a traceparent on every first audio chunk, and it
* should not drag the tracer SDK into that path (nor into the unit tests, where
* the otel-api ESM build does not resolve cleanly).
*
* @internal
*/
/**
* 把 conversation_id 确定性映射成合法的 W3C trace_id（16 字节 / 32 位十六进制）。
*
* W3C/OTel 规定 trace_id 必须是 32 hex，而 conversation_id（形如
* `20260718110509_4xz9iyH8F3Gi`）不是合法格式，不能直接用。这里用 FNV-1a 以 4 个不同
* 初始种子各算一个 32bit 哈希，拼成 128bit —— 同步、确定性（同一 conversation_id 永远
* 得同一 trace_id）、无外部依赖，后端可用同一算法复现以串成同一条 trace。
* @internal
*/
/** FNV-1a 32-bit with a variable seed, so one string yields several independent hashes. */
function fnv1a(str, seed) {
	let h = seed >>> 0;
	for (let i = 0; i < str.length; i++) {
		h ^= str.charCodeAt(i);
		h = Math.imul(h, 16777619) >>> 0;
	}
	return h >>> 0;
}
function conversationIdToTraceId(conversationId) {
	const seeds = [
		2166136261,
		16777619,
		3735928559,
		2654435769
	];
	let hex = "";
	for (const s of seeds) hex += fnv1a(conversationId, s).toString(16).padStart(8, "0");
	return /^0+$/.test(hex) ? "0".repeat(31) + "1" : hex;
}
/**
* Derive the driven.request span_id (8 bytes / 16 hex) deterministically from
* the conversation_id.
*
* The server needs traceparent's parent span_id on the FIRST ClientAudioInput —
* before the SDK has built the driven.request span, which only happens when
* playback ends and the timeline is known. Deriving it means both moments can
* compute the same span_id independently, so the traceparent the server sees and
* the span the SDK later reports carry the identical id, with no state threaded
* between "audio sent" and "playback ended". Uses seeds distinct from the
* trace_id ones so the span_id is not a slice of the trace_id.
* @internal
*/
function conversationIdToDrivenSpanId(conversationId) {
	const hex = fnv1a(conversationId, 3421674724).toString(16).padStart(8, "0") + fnv1a(conversationId, 4294967297).toString(16).padStart(8, "0");
	return /^0+$/.test(hex) ? "0".repeat(15) + "1" : hex;
}
/**
* Monotonic counter mixed into every generated id. performance.now() barely moves
* between spans built in the same millisecond, so on its own it produced COLLIDING
* span ids (several recv spans shared one id, breaking the trace tree). The counter
* guarantees a distinct seed per call and per hex chunk.
*/
var idCounter = 0;
/** A random lowercase-hex string of `len` chars, non-zero. Not for ids that must be reproducible. */
function randomHex(len) {
	let out = "";
	while (out.length < len) {
		idCounter = idCounter + 1 >>> 0;
		const seed = ((performance.now() * 1e6 | 0) ^ Math.imul(idCounter, 2654435769)) >>> 0;
		const n = Math.imul(seed, 2246822507) >>> 0;
		out += n.toString(16).padStart(8, "0");
	}
	const hex = out.slice(0, len);
	return /^0+$/.test(hex) ? "0".repeat(len - 1) + "1" : hex;
}
/**
* OTel IdGenerator that lets one span be given a specific id — the officially
* supported way to control a span_id, versus reaching into span internals.
*
* driven.request must carry the exact span_id already placed in the first
* ClientAudioInput's traceparent, so the server's audio.process (parent = that
* id) hangs under the SDK's real span. Set `nextSpanId` right before startSpan;
* the generator hands it out once, then falls back to random for every other
* span (whose ids need not be predictable).
*
* Deliberately dependency-free (no `implements IdGenerator`) so this module pulls
* in no @opentelemetry package; it duck-types the two-method interface.
* @internal
*/
var PinnableIdGenerator = class {
	nextSpanId = null;
	generateTraceId() {
		return randomHex(32);
	}
	generateSpanId() {
		if (this.nextSpanId) {
			const id = this.nextSpanId;
			this.nextSpanId = null;
			return id;
		}
		return randomHex(16);
	}
};
/**
* Build the W3C `traceparent` for a conversation's upstream audio, to hand the
* driving service on the first ClientAudioInput of each req_id so its trace
* continues this SDK's rather than starting a fresh root.
*
* Both ids are DERIVED from the conversation_id, matching what the playback
* trace builds when it ends: the trace_id so the server's trace and the SDK's
* spans share one trace, and the span_id so it equals the driven.request span's
* id — which the server hangs audio.process under. Deriving both means the
* traceparent sent now and the span reported later carry the identical ids with
* no state threaded between them.
*
* Returns null when tracing is disabled or filtered, so callers simply omit the
* field — matching the proto's "absent → server starts a new root" contract.
*
* @internal
*/
function buildTraceparent(conversationId) {
	if (!conversationId) return null;
	return `00-${conversationIdToTraceId(conversationId)}-${conversationIdToDrivenSpanId(conversationId)}-01`;
}
/**
* Parse an inbound W3C `traceparent` — the one the driving service stamps on
* `ServerResponseAnimation.trace_context`.
*
* In backend mode the conversation_id is minted locally by the SDK, so the
* trace_id derived from it cannot possibly match the server's. This header is the
* only thing tying the round's playback trace to the upstream one, so it is
* validated strictly rather than trusted: a malformed value would produce a span
* the collector silently drops, which is worse than falling back to the derived
* trace_id.
*
* Returns null for anything not matching version 00, `00-<32hex>-<16hex>-<2hex>`,
* or carrying an all-zero (W3C-invalid) id.
*
* @internal
*/
function parseTraceparent(traceparent) {
	if (!traceparent) return null;
	const parts = traceparent.trim().split("-");
	if (parts.length !== 4) return null;
	const [version, traceId, spanId, flags] = parts;
	if (version !== "00") return null;
	if (!/^[0-9a-f]{32}$/.test(traceId) || /^0+$/.test(traceId)) return null;
	if (!/^[0-9a-f]{16}$/.test(spanId) || /^0+$/.test(spanId)) return null;
	if (!/^[0-9a-f]{2}$/.test(flags)) return null;
	return {
		traceId,
		spanId,
		sampled: (parseInt(flags, 16) & 1) === 1
	};
}
//#endregion
//#region utils/otel-trace.ts
/**
* OpenTelemetry Trace Tracker (Browser Version)
*
* 独立于 logs / metrics 的第三条 OTel 通道——**Trace 信号**（OTLP `/v1/traces`），
* 目标后端 OpenObserve。与另两条通道分离：各自 provider、各自 exporter、各自清理。
*
* 用途：一轮播放 = 一条 trace。root span 覆盖整轮，子 span 标记关键时刻
* （首包音频到达 / 首组动画到达 / 播放结束）。trace_id 由 conversation_id 确定性
* 派生（见 conversationIdToTraceId），使 SDK 与后端能以同一 conversation_id 关联/串联。
* @internal
*/
var OTEL_TRACER_NAME = "spatius-avatarkit";
var sdkVersion = "1.0.0";
var isInitialized = false;
var tracerProvider = null;
var tracer = null;
var idGenerator = new PinnableIdGenerator();
/**
* Initialize OTel TracerProvider.
* 与 logs / metrics 平行：同一份 resource 语义、同一套门禁与鉴权。
* @internal
*/
function initializeOtelTrace(version, resourceAttrs) {
	if (isInitialized) {
		logger.log("[OTel-Trace] Already initialized, skipping");
		return;
	}
	sdkVersion = version;
	try {
		tracerProvider = new WebTracerProvider({
			resource: resourceFromAttributes({
				[ATTR_SERVICE_NAME]: "avatarkit",
				"sdk.version": resolveSdkVersion(sdkVersion),
				"sdk.platform": "web",
				"sdk.package": getSdkPackage(),
				"render_sdk_version": sdkVersion,
				"app_id": resourceAttrs.appId || "",
				"region": resourceAttrs.region,
				"dsm": resourceAttrs.dsm,
				...clientContextFields()
			}),
			spanProcessors: [new BatchSpanProcessor(observeExporter(new OTLPTraceExporter({
				url: OTEL_TRACES_ENDPOINT,
				headers: { "stream-name": OTEL_TRACES_STREAM_NAME }
			}), "/v1/traces", OTEL_TRACES_ENDPOINT))],
			idGenerator
		});
		trace.setGlobalTracerProvider(tracerProvider);
		tracer = trace.getTracer(OTEL_TRACER_NAME, sdkVersion);
		isInitialized = true;
		logger.log(`[OTel-Trace] Initialized - endpoint: ${OTEL_TRACES_ENDPOINT}, stream: ${OTEL_TRACES_STREAM_NAME}`);
	} catch (error) {
		logger.warn("[OTel-Trace] Failed to initialize:", error instanceof Error ? error.message : String(error));
	}
}
/** 空实现：未初始化 / 被门禁拦截时返回，调用方无需判空。 */
var NOOP_GROUP = {
	span: () => {},
	end: () => {}
};
var NOOP_TRACE = {
	span: () => {},
	group: () => NOOP_GROUP,
	end: () => {}
};
/**
* 开一条**加载角色**的 trace。root span 名 `load_avatar`，覆盖 `AvatarManager` 加载
* 全过程，内部按四段切子 span（见调用处）。
*
* 与播放 trace 的两点不同：
* - **trace_id 随机**，不从业务 id 派生。加载链路上后端只参与元数据接口一处，串联需求
*   弱；而按 avatar_id 派生会让同一角色的多次加载撞进同一条 trace，在 viewer 里叠成
*   一条、时间轴错乱。avatar_id 作 span 属性照样能筛。
* - **无 anchor / 不钉 span_id**：那两样是为了匹配已在线上的 traceparent，加载没有这个约束。
*
* 量级上远小于播放 trace：一次会话通常只加载一次角色，而对话是几十轮。
* @internal
*/
/**
* 开一条 **SDK 初始化** 的 trace。root span 名 `sdk_init`。
*
* 与 load / playback 是三条**独立** trace：它们本就是独立流程（初始化一次、加载可多次、
* 对话更多次），硬串成一条会得到横跨整个 app 生命周期的怪 waterfall。三者靠 `session_id`
* 关联——后台按它一查就能还原「这次启动做了什么」。
*
* 注意调用时机：trace 通道本身要到 `initializeOtelTrace` 之后才就绪，所以初始化早期
* 阶段（region 解析等）只能先记时刻、等通道起来再用历史时间戳补发 span。
* @internal
*/
function startInitTrace(sessionId, startTimeMs, attrs = {}) {
	if (!tracer || !tracerProvider) return NOOP_TRACE;
	try {
		const root = tracer.startSpan("sdk_init", {
			startTime: startTimeMs,
			attributes: {
				session_id: sessionId,
				connection_id: idManager.getConnectionId() ?? "",
				...attrs
			}
		}, ROOT_CONTEXT);
		const rootCtx = trace.setSpan(ROOT_CONTEXT, root);
		return {
			span(name, startMs, endMs, spanAttrs = {}, isError = false) {
				try {
					const sp = tracer.startSpan(name, {
						startTime: startMs,
						attributes: spanAttrs
					}, rootCtx);
					if (isError) sp.setStatus({ code: SpanStatusCode.ERROR });
					sp.end(Math.max(endMs, startMs + 1));
				} catch {}
			},
			group: () => NOOP_GROUP,
			end(ok = true, endTimeMs, endAttrs = {}) {
				try {
					for (const [k, v] of Object.entries(endAttrs)) root.setAttribute(k, v);
					root.setStatus({ code: ok ? SpanStatusCode.OK : SpanStatusCode.ERROR });
					root.end(endTimeMs);
				} catch {}
			}
		};
	} catch (error) {
		logger.warn("[OTel-Trace] Failed to start init trace:", error instanceof Error ? error.message : String(error));
		return NOOP_TRACE;
	}
}
function startLoadTrace(avatarId, startTimeMs, attrs = {}) {
	if (!tracer || !tracerProvider) return NOOP_TRACE;
	try {
		const root = tracer.startSpan("load_avatar", {
			startTime: startTimeMs,
			attributes: {
				avatar_id: avatarId,
				session_id: idManager.getSessionId(),
				connection_id: idManager.getConnectionId() ?? "",
				...attrs
			}
		}, ROOT_CONTEXT);
		const rootCtx = trace.setSpan(ROOT_CONTEXT, root);
		return {
			span(name, startMs, endMs, spanAttrs = {}, isError = false) {
				try {
					const s = tracer.startSpan(name, {
						startTime: startMs,
						attributes: spanAttrs
					}, rootCtx);
					if (isError) s.setStatus({ code: SpanStatusCode.ERROR });
					s.end(Math.max(endMs, startMs + 1));
				} catch {}
			},
			group: () => NOOP_GROUP,
			end(ok = true, endTimeMs, endAttrs = {}) {
				try {
					for (const [k, v] of Object.entries(endAttrs)) root.setAttribute(k, v);
					root.setStatus({ code: ok ? SpanStatusCode.OK : SpanStatusCode.ERROR });
					root.end(endTimeMs);
				} catch {}
			}
		};
	} catch (error) {
		logger.warn("[OTel-Trace] Failed to start load trace:", error instanceof Error ? error.message : String(error));
		return NOOP_TRACE;
	}
}
/**
* 开一条建连 trace。root span 名 `connect`，下挂 `ws_handshake` / `session_confirm` 两段。
*
* 与 `ws_connect_latency` 互补：那条 metric 只给出总耗时，而慢在哪一段——TLS/网络握手，
* 还是服务端校验 token、分配资源——只有拆开才看得出。两段的边界就是 `onopen`。
*
* 与 load / playback 是三条独立 trace，靠 session_id 关联。
* @param startTimeMs root span 起点（发起连接那一刻，epoch ms）。
* @internal
*/
function startConnectTrace(startTimeMs, attrs = {}) {
	if (!tracer || !tracerProvider) return NOOP_TRACE;
	try {
		const root = tracer.startSpan("connect", {
			startTime: startTimeMs,
			attributes: {
				session_id: idManager.getSessionId(),
				...attrs
			}
		}, ROOT_CONTEXT);
		const rootCtx = trace.setSpan(ROOT_CONTEXT, root);
		return {
			span(name, startMs, endMs, spanAttrs = {}, isError = false) {
				try {
					const s = tracer.startSpan(name, {
						startTime: startMs,
						attributes: spanAttrs
					}, rootCtx);
					if (isError) s.setStatus({ code: SpanStatusCode.ERROR });
					s.end(Math.max(endMs, startMs + 1));
				} catch {}
			},
			group: () => NOOP_GROUP,
			end(ok = true, endTimeMs, endAttrs = {}) {
				try {
					for (const [k, v] of Object.entries(endAttrs)) root.setAttribute(k, v);
					root.setStatus({ code: ok ? SpanStatusCode.OK : SpanStatusCode.ERROR });
					root.end(endTimeMs);
				} catch {}
			}
		};
	} catch (error) {
		logger.warn("[OTel-Trace] Failed to start connect trace:", error instanceof Error ? error.message : String(error));
		return NOOP_TRACE;
	}
}
/**
* 开一条播放 trace。root span 名 `playback`，trace_id 默认由 conversation_id 确定性派生，
* conversation_id 同时作为 span 属性（无论是否与后端串成一条 trace，都能按它关联查询）。
* @param startTimeMs root span 起点（首包音频 tap_0 的真实时刻，epoch ms）；省略则用当前时刻。
* @param serverTraceparent 服务端在本轮动画包上带下来的 W3C traceparent，用它替代派生 id
*   接上服务端那条 trace。**仅 backend mode 传**：那边 trace 起点在服务端，SDK 是跟随方；
*   direct mode 起点是 SDK 自己（上行首包已带 traceparent），回传值必然等于派生值，故不传。
* @internal
*/
function startPlaybackTrace(conversationId, startTimeMs, attrs = {}, serverTraceparent) {
	if (!tracer || !tracerProvider) return NOOP_TRACE;
	if (!conversationId) return NOOP_TRACE;
	try {
		const inbound = parseTraceparent(serverTraceparent);
		const traceId = inbound ? inbound.traceId : conversationIdToTraceId(conversationId);
		const drivenSpanId = conversationIdToDrivenSpanId(conversationId);
		const traceRootCtx = trace.setSpanContext(ROOT_CONTEXT, {
			traceId,
			spanId: inbound ? inbound.spanId : randomHex(16),
			traceFlags: inbound && !inbound.sampled ? 0 : 1,
			isRemote: true
		});
		idGenerator.nextSpanId = drivenSpanId;
		const drivenRequest = tracer.startSpan("driven.request", {
			attributes: {
				conversation_id: conversationId,
				session_id: idManager.getSessionId(),
				connection_id: idManager.getConnectionId() ?? "",
				...attrs
			},
			...typeof startTimeMs === "number" ? { startTime: startTimeMs } : {}
		}, traceRootCtx);
		const drivenCtx = trace.setSpan(traceRootCtx, drivenRequest);
		const root = tracer.startSpan("playback", {
			attributes: {
				conversation_id: conversationId,
				session_id: idManager.getSessionId(),
				connection_id: idManager.getConnectionId() ?? "",
				...attrs
			},
			...typeof startTimeMs === "number" ? { startTime: startTimeMs } : {}
		}, drivenCtx);
		const rootCtx = trace.setSpan(drivenCtx, root);
		const emitSpan = (ctx, name, startMs, endMs, attrs, isError = false) => {
			try {
				const s = tracer.startSpan(name, {
					attributes: attrs,
					startTime: startMs
				}, ctx);
				if (isError) s.setStatus({ code: SpanStatusCode.ERROR });
				s.end(Math.max(endMs, startMs + 1));
			} catch {}
		};
		return {
			span(name, startMs, endMs, spanAttrs = {}, isError = false) {
				emitSpan(rootCtx, name, startMs, endMs, spanAttrs, isError);
			},
			group(name, startMs, groupAttrs = {}) {
				try {
					const container = tracer.startSpan(name, {
						attributes: groupAttrs,
						startTime: startMs
					}, rootCtx);
					const groupCtx = trace.setSpan(rootCtx, container);
					return {
						span(spanName, s, e, attrs = {}, isError = false) {
							emitSpan(groupCtx, spanName, s, e, attrs, isError);
						},
						end(endMs) {
							try {
								container.end(endMs);
							} catch {}
						}
					};
				} catch {
					return NOOP_GROUP;
				}
			},
			end(ok = true, endTimeMs, endAttrs = {}) {
				try {
					for (const [k, v] of Object.entries(endAttrs)) root.setAttribute(k, v);
					const status = { code: ok ? SpanStatusCode.OK : SpanStatusCode.ERROR };
					root.setStatus(status);
					root.end(endTimeMs);
					drivenRequest.setStatus(status);
					drivenRequest.end(endTimeMs);
					tracerProvider?.forceFlush().catch(() => {});
				} catch {}
			}
		};
	} catch (error) {
		logger.warn("[OTel-Trace] Failed to start playback trace:", error instanceof Error ? error.message : String(error));
		return NOOP_TRACE;
	}
}
/**
* Cleanup：flush 剩余 span 并关闭 provider。
* @internal
*/
function cleanupOtelTrace() {
	if (!isInitialized || !tracerProvider) return;
	try {
		tracerProvider.forceFlush().catch(() => {});
		tracerProvider.shutdown().catch((error) => {
			logger.warn("[OTel-Trace] Shutdown error:", error instanceof Error ? error.message : String(error));
		});
	} catch (error) {
		logger.warn("[OTel-Trace] Failed to cleanup:", error instanceof Error ? error.message : String(error));
	} finally {
		isInitialized = false;
		tracerProvider = null;
		tracer = null;
	}
}
//#endregion
export { FrameStarvationMode as $, recordHttpClientDuration as A, idManager as B, monoTimestamp as C, hostOf as D, fetchBootstrap as E, getSdkPackage as F, ConnectionState as G, AnimationType as H, resolveSdkVersion as I, DEFAULT_OPUS_BITRATE as J, ConversationState as K, setSdkIdentity as L, OTEL_LOGS_ENDPOINT as M, OTEL_STREAM_NAME as N, cleanupOtelMetrics as O, isDebugMode as P, ErrorCode as Q, logger as R, monoMarkFrom as S, clockSync as T, AvatarError as U, generateTraceId as V, AvatarState as W, DEFAULT_REGION_REQUEST as X, DEFAULT_REGION as Y, DrivingServiceMode as Z, logMetric as _, startLoadTrace as a, TransitionType as at, initializeOtel as b, AudioFormat as c, __commonJSMin as ct, MessageType as d, LoadProgress as et, TransportCompression as f, logEvent as g, clientContextFields as h, startInitTrace as i, SUPPORTED_SAMPLE_RATES as it, recordMetric as j, initializeOtelMetrics as k, EgressType as l, __toESM as lt, BinaryWriter as m, initializeOtelTrace as n, RENDER_QUALITY_PARAMS as nt, startPlaybackTrace as o, requireSDK as ot, BinaryReader as p, DEFAULT_AUDIO_FORMAT as q, startConnectTrace as r, RenderQuality as rt, buildTraceparent as s, setSDKRef as st, cleanupOtelTrace as t, LogLevel as tt, Message as u, logMetricDetail as v, resolveMarks as w, trackEventOtel as x, cleanupOtel as y, setLogLevel as z };
