(function () {
	"use strict";

	function $_a() {
		return $_9("[]");
	}

	function $_9(__0) {
		return {
			ctor: __0
		};
	}

	var _$0 = this;

	function $_0(fun, a) {
		return function (b) {
			return fun(a, b);
		};
	}

	function $_1(fun, a) {
		return function (b) {
			return function (c) {
				return fun(a, b, c);
			};
		};
	}

	function $_2(fun, a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return fun(a, b, c, d);
				};
			};
		};
	}

	function $_3(fun, a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return fun(a, b, c, d, e);
					};
				};
			};
		};
	}

	function $_4(fun, a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return fun(a, b, c, d, e, f);
						};
					};
				};
			};
		};
	}

	function $_5(fun, a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return fun(a, b, c, d, e, f, g);
							};
						};
					};
				};
			};
		};
	}

	function $_6(fun, a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return fun(a, b, c, d, e, f, g, h);
								};
							};
						};
					};
				};
			};
		};
	}

	function $_7(fun, a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return fun(a, b, c, d, e, f, g, h, i);
									};
								};
							};
						};
					};
				};
			};
		};
	}

	function $_8(tag, factList, kidList) {
		return _3y(tag, factList, kidList);
	}

	function _2(flags) {
		return _3(_$0.undefined, flags, false);
	}

	function _3(rootDomNode, flags, withRenderer) {
		try {
			var program = _4("Todo", _3o);

			if (!withRenderer) {
				program.renderer = _63;
			}

			return _64("Todo", program, rootDomNode, flags);
		} catch (e) {
			rootDomNode.innerHTML = _6D(e.message);
			throw e;
		}
	}

	function _4(moduleName, wrappedMain) {
		var main = wrappedMain.main;

		if (typeof main.init === 'undefined') {
			var emptyBag = _5(_6.Nil);

			var noChange = _t.Tuple2(_t.Tuple0, emptyBag);

			return _W({
				init: function () {
					return noChange;
				},
				view: function () {
					return main;
				},
				update: _O(function () {
					return noChange;
				}),
				subscriptions: function () {
					return emptyBag;
				}
			});
		}

		var flags = wrappedMain.flags;
		var init = flags ? _3m(moduleName, main.init, flags) : _3n(moduleName, main.init);
		return _W({
			init: init,
			view: main.view,
			update: main.update,
			subscriptions: main.subscriptions
		});
	}

	function _5(list) {
		return {
			type: 'node',
			branches: list
		};
	}

	function _8(hd, tl) {
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}

	function _B(a) {
		return $_0.call(this, _C, a);
	}

	function _M(a) {
		return $_0.call(this, _N, a);
	}

	function _r(a) {
		return $_0.call(this, _s, a);
	}

	function _16(a) {
		return $_0.call(this, _17, a);
	}

	function _3B(a) {
		return $_0.call(this, _3C, a);
	}

	function _40(a) {
		return $_0.call(this, _41, a);
	}

	function _4j(a) {
		return $_0.call(this, _4k, a);
	}

	function _4g(a) {
		return $_0.call(this, _4h, a);
	}

	function _57(a) {
		return $_0.call(this, _58, a);
	}

	function _5S(a) {
		return $_0.call(this, _5T, a);
	}

	function _a(xs) {
		var out = [];

		while (xs.ctor !== '[]') {
			out.push(xs._0);
			xs = xs._1;
		}

		return out;
	}

	function _b(arr) {
		var out = _7;

		for (var i = arr.length; i--;) {
			out = _8(arr[i], out);
		}

		return out;
	}

	function _c(lo, hi) {
		var list = _7;

		if (lo <= hi) {
			do {
				list = _8(hi, list);
			} while (hi-- > lo);
		}

		return list;
	}

	function _5n(a) {
		return $_1.call(this, _5o, a);
	}

	function _e(f, b, xs) {
		var arr = _a(xs);

		var acc = b;

		for (var i = arr.length; i--;) {
			acc = _f(f, arr[i], acc);
		}

		return acc;
	}

	function _f(fun, a, b) {
		return fun.arity === 2 ? fun.func(a, b) : fun(a)(b);
	}

	function _h(f, xs, ys) {
		var arr = [];

		while (xs.ctor !== '[]' && ys.ctor !== '[]') {
			arr.push(_f(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}

		return _b(arr);
	}

	function _j(f, xs, ys, zs) {
		var arr = [];

		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]') {
			arr.push(_k(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}

		return _b(arr);
	}

	function _k(fun, a, b, c) {
		return fun.arity === 3 ? fun.func(a, b, c) : fun(a)(b)(c);
	}

	function _m(f, ws, xs, ys, zs) {
		var arr = [];

		while (ws.ctor !== '[]' && xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]') {
			arr.push(_n(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}

		return _b(arr);
	}

	function _n(fun, a, b, c, d) {
		return fun.arity === 4 ? fun.func(a, b, c, d) : fun(a)(b)(c)(d);
	}

	function _p(f, vs, ws, xs, ys, zs) {
		var arr = [];

		while (vs.ctor !== '[]' && ws.ctor !== '[]' && xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]') {
			arr.push(_q(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}

		return _b(arr);
	}

	function _q(fun, a, b, c, d, e) {
		return fun.arity === 5 ? fun.func(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
	}

	function _s(f, xs) {
		return _b(_a(xs).sort(function (a, b) {
			return _t.cmp(f(a), f(b));
		}));
	}

	function _u(rootX, rootY) {
		var stack = [{
			x: rootX,
			y: rootY
		}];

		while (stack.length > 0) {
			var front = stack.pop();
			var x = front.x;
			var y = front.y;

			if (x === y) {
				continue;
			}

			if (typeof x === 'object') {
				var c = 0;

				for (var key in x) {
					++c;

					if (!(key in y)) {
						return false;
					}

					if (key === 'ctor') {
						continue;
					}

					stack.push({
						x: x[key],
						y: y[key]
					});
				}

				if ('ctor' in x) {
					stack.push({
						x: x.ctor,
						y: y.ctor
					});
				}

				if (c !== _$0.Object.keys(y).length) {
					return false;
				}
			} else if (typeof x === 'function') {
				throw new _$0.Error('Equality error: general function equality is ' + 'undecidable, and therefore, unsupported');
			} else {
				return false;
			}
		}

		return true;
	}

	function _v(x, y) {
		var ord;

		if (typeof x !== 'object') {
			return x === y ? 0 : x < y ? -1 : 1;
		} else if (x instanceof _$0.String) {
			var a = x.valueOf();
			var b = y.valueOf();
			return a === b ? 0 : a < b ? -1 : 1;
		} else if (x.ctor === '::' || x.ctor === '[]') {
			while (true) {
				if (x.ctor === '[]' && y.ctor === '[]') {
					return 0;
				}

				if (x.ctor !== y.ctor) {
					return x.ctor === '[]' ? -1 : 1;
				}

				ord = _v(x._0, y._0);

				if (ord !== 0) {
					return ord;
				}

				x = x._1;
				y = y._1;
			}
		} else if (x.ctor.slice(0, 6) === '_Tuple') {
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return 0;

			if (n >= 1) {
				ord = _v(x._0, y._0);
				if (ord !== 0) return ord;

				if (n >= 2) {
					ord = _v(x._1, y._1);
					if (ord !== 0) return ord;

					if (n >= 3) {
						ord = _v(x._2, y._2);
						if (ord !== 0) return ord;

						if (n >= 4) {
							ord = _v(x._3, y._3);
							if (ord !== 0) return ord;

							if (n >= 5) {
								ord = _v(x._4, y._4);
								if (ord !== 0) return ord;

								if (n >= 6) {
									ord = _v(x._5, y._5);
									if (ord !== 0) return ord;
									if (n >= 7) throw new _$0.Error('Comparison error: ' + err);
								}
							}
						}
					}
				}
			}

			return 0;
		} else {
			throw new _$0.Error('Comparison error: comparison is only defined on ints, ' + 'floats, times, chars, strings, lists of comparable values, ' + 'and tuples of comparable values.');
		}
	}

	function _x(x, y) {
		return {
			ctor: '_Tuple2',
			_0: x,
			_1: y
		};
	}

	function _y(c) {
		return new _$0.String(c);
	}

	function _z(oldRecord, updatedFields) {
		var newRecord = {};

		for (var key in oldRecord) {
			var value = key in updatedFields ? updatedFields[key] : oldRecord[key];
			newRecord[key] = value;
		}

		return newRecord;
	}

	function _A(_) {
		return $0++;
	}

	function _C(xs, ys) {
		// append Strings
		if (typeof xs === 'string') {
			return xs + ys;
		} // append Lists


		if (xs.ctor === '[]') {
			return ys;
		}

		var root = _D(xs._0, _E);

		var curr = root;
		xs = xs._1;

		while (xs.ctor !== '[]') {
			curr._1 = _D(xs._0, _E);
			xs = xs._1;
			curr = curr._1;
		}

		curr._1 = ys;
		return root;
	}

	function _D(hd, tl) {
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}

	function _F(moduleName, region) {
		return function (message) {
			throw new _$0.Error('Ran into a `Debug.crash` in module `' + moduleName + '` ' + _G(region) + '\n' + 'The message provided by the code author is:\n\n    ' + message);
		};
	}

	function _G(region) {
		if (region.start.line == region.end.line) {
			return 'on line ' + region.start.line;
		}

		return 'between lines ' + region.start.line + ' and ' + region.end.line;
	}

	function _H(moduleName, region, value) {
		return function (message) {
			throw new _$0.Error('Ran into a `Debug.crash` in module `' + moduleName + '`\n\n' + 'This was caused by the `case` expression ' + _G(region) + '.\n' + 'One of the branches ended with a crash and the following value got through:\n\n    ' + _I(value) + '\n\n' + 'The message provided by the code author is:\n\n    ' + message);
		};
	}

	function _I(v) {
		var type = typeof v;

		if (type === 'function') {
			var name = v.func ? v.func.name : v.name;
			return '<function' + (name === '' ? '' : ':') + name + '>';
		}

		if (type === 'boolean') {
			return v ? 'True' : 'False';
		}

		if (type === 'number') {
			return v + '';
		}

		if (v instanceof _$0.String) {
			return '\'' + _J(v, true) + '\'';
		}

		if (type === 'string') {
			return '"' + _J(v, false) + '"';
		}

		if (v === null) {
			return 'null';
		}

		if (type === 'object' && 'ctor' in v) {
			var ctorStarter = v.ctor.substring(0, 5);

			if (ctorStarter === '_Tupl') {
				var output = [];

				for (var k in v) {
					if (k === 'ctor') continue;
					output.push(_I(v[k]));
				}

				return '(' + output.join(',') + ')';
			}

			if (ctorStarter === '_Task') {
				return '<task>';
			}

			if (v.ctor === '_Array') {
				var list = _K(v);

				return 'Array.fromList ' + _I(list);
			}

			if (v.ctor === '<decoder>') {
				return '<decoder>';
			}

			if (v.ctor === '_Process') {
				return '<process:' + v.id + '>';
			}

			if (v.ctor === '::') {
				var output = '[' + _I(v._0);

				v = v._1;

				while (v.ctor === '::') {
					output += ',' + _I(v._0);
					v = v._1;
				}

				return output + ']';
			}

			if (v.ctor === '[]') {
				return '[]';
			}

			if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin' || v.ctor === 'Set_elm_builtin') {
				var name, list;

				if (v.ctor === 'Set_elm_builtin') {
					name = 'Set';
					list = _f(_M, function (x) {
						return x._0;
					}, _Q(v._0));
				} else {
					name = 'Dict';
					list = _Q(v);
				}

				return name + '.fromList ' + _I(list);
			}

			var output = '';

			for (var i in v) {
				if (i === 'ctor') continue;

				var str = _I(v[i]);

				var c0 = str[0];
				var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
				output += ' ' + (parenless ? str : '(' + str + ')');
			}

			return v.ctor + output;
		}

		if (type === 'object') {
			var output = [];

			for (var k in v) {
				output.push(k + ' = ' + _I(v[k]));
			}

			if (output.length === 0) {
				return '{}';
			}

			return '{ ' + output.join(', ') + ' }';
		}

		return '<internal structure>';
	}

	function _J(str, isChar) {
		var s = str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

		if (isChar) {
			return s.replace(/\'/g, '\\\'');
		} else {
			return s.replace(/\"/g, '\\"');
		}
	}

	function _K(a) {
		return _L(_6.Nil, a);
	}

	function _L(list, a) {
		for (var i = a.table.length - 1; i >= 0; i--) {
			list = a.height === 0 ? _6.Cons(a.table[i], list) : _L(list, a.table[i]);
		}

		return list;
	}

	function _N(f, xs) {
		return _k(_d, _O(function (x, acc) {
			return _f(_P['::'], f(x), acc);
		}), _6.fromArray([]), xs);
	}

	function _O(fun) {
		function wrapper(a) {
			return function (b) {
				return fun(a, b);
			};
		}

		wrapper.arity = 2;
		wrapper.func = fun;
		return wrapper;
	}

	function _Q(dict) {
		return _k(_R, _T(function (key, value, list) {
			return _f(_P['::'], {
				ctor: '_Tuple2',
				_0: key,
				_1: value
			}, list);
		}), _6.fromArray([]), dict);
	}

	function _S(f, acc, t) {
		foldr: while (true) {
			var _p0 = t;

			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
				    _v2 = _k(f, _p0._1, _p0._2, _k(_R, f, acc, _p0._4)),
				    _v3 = _p0._3;

				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	}

	function _T(fun) {
		function wrapper(a) {
			return function (b) {
				return function (c) {
					return fun(a, b, c);
				};
			};
		}

		wrapper.arity = 3;
		wrapper.func = fun;
		return wrapper;
	}

	function _V(f, xs) {
		return _b(_a(xs).sort(function (a, b) {
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	function _W(details) {
		return {
			init: details.init,
			update: details.update,
			subscriptions: details.subscriptions,
			view: details.view,
			renderer: _X
		};
	}

	function _X(parent, tagger, initialVirtualNode) {
		var eventNode = {
			tagger: tagger,
			parent: _$0.undefined
		};

		var domNode = _Y(initialVirtualNode, eventNode);

		parent.appendChild(domNode);
		var state = 'NO_REQUEST';
		var currentVirtualNode = initialVirtualNode;
		var nextVirtualNode = initialVirtualNode;

		function registerVirtualNode(nextVirtualNode) {
			var patches = _36(currentVirtualNode, nextVirtualNode);

			domNode = _3g(domNode, currentVirtualNode, patches, eventNode);
			currentVirtualNode = nextVirtualNode;
		}

		return {
			update: registerVirtualNode
		};
	}

	function _Y(vNode, eventNode) {
		switch (vNode.type) {
			case 'thunk':
				if (!vNode.node) {
					vNode.node = vNode.thunk();
				}

				return _Y(vNode.node, eventNode);

			case 'tagger':
				var subNode = vNode.node;
				var tagger = vNode.tagger;

				while (subNode.type === 'tagger') {
					typeof tagger !== 'object' ? tagger = [tagger, subNode.tagger] : tagger.push(subNode.tagger);
					subNode = subNode.node;
				}

				var subEventRoot = {
					tagger: tagger,
					parent: eventNode
				};

				var domNode = _Y(subNode, subEventRoot);

				domNode.elm_event_node_ref = subEventRoot;
				return domNode;

			case 'text':
				return _$0.document.createTextNode(vNode.text);

			case 'node':
				var domNode = vNode.namespace ? _$0.document.createElementNS(vNode.namespace, vNode.tag) : _$0.document.createElement(vNode.tag);

				_Z(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++) {
					domNode.appendChild(_Y(children[i], eventNode));
				}

				return domNode;

			case 'keyed-node':
				var domNode = vNode.namespace ? _$0.document.createElementNS(vNode.namespace, vNode.tag) : _$0.document.createElement(vNode.tag);

				_Z(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++) {
					domNode.appendChild(_Y(children[i]._1, eventNode));
				}

				return domNode;

			case 'custom':
				var domNode = vNode.impl.render(vNode.model);

				_Z(domNode, eventNode, vNode.facts);

				return domNode;
		}
	}

	function _Z(domNode, eventNode, facts) {
		for (var key in facts) {
			var value = facts[key];

			switch (key) {
				case "STYLE":
					_10(domNode, value);

					break;

				case "EVENT":
					_11(domNode, eventNode, value);

					break;

				case "ATTR":
					_34(domNode, value);

					break;

				case "ATTR_NS":
					_35(domNode, value);

					break;

				case 'value':
					if (domNode[key] !== value) {
						domNode[key] = value;
					}

					break;

				default:
					domNode[key] = value;
					break;
			}
		}
	}

	function _10(domNode, styles) {
		var domNodeStyle = domNode.style;

		for (var key in styles) {
			domNodeStyle[key] = styles[key];
		}
	}

	function _11(domNode, eventNode, events) {
		var allHandlers = domNode.elm_handlers || {};

		for (var key in events) {
			var handler = allHandlers[key];
			var value = events[key];

			if (typeof value === 'undefined') {
				domNode.removeEventListener(key, handler);
				allHandlers[key] = _$0.undefined;
			} else if (typeof handler === 'undefined') {
				var handler = _12(eventNode, value);

				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			} else {
				handler.info = value;
			}
		}

		domNode.elm_handlers = allHandlers;
	}

	function _12(eventNode, info) {
		function eventHandler(event) {
			var info = eventHandler.info;

			var value = _f(_13.run, info.decoder, event);

			if (value.ctor === 'Ok') {
				var options = info.options;

				if (options.stopPropagation) {
					event.stopPropagation();
				}

				if (options.preventDefault) {
					event.preventDefault();
				}

				var message = value._0;
				var currentEventNode = eventNode;

				while (currentEventNode) {
					var tagger = currentEventNode.tagger;

					if (typeof tagger === 'function') {
						message = tagger(message);
					} else {
						for (var i = tagger.length; i--;) {
							message = tagger[i](message);
						}
					}

					currentEventNode = currentEventNode.parent;
				}
			}
		}

		;
		eventHandler.info = info;
		return eventHandler;
	}

	function _15(indentLevel, value) {
		return _$0.JSON.stringify(value, null, indentLevel);
	}

	function _17(decoder, string) {
		var json;

		try {
			json = _$0.JSON.parse(string);
		} catch (e) {
			return _18('Given an invalid JSON: ' + e.message);
		}

		return _19(decoder, json);
	}

	function _18(a) {
		return {
			ctor: 'Err',
			_0: a
		};
	}

	function _19(decoder, value) {
		var result = _1a(decoder, value);

		return result.tag === 'ok' ? _2a(result.value) : _18(_2b(result));
	}

	function _1a(decoder, value) {
		switch (decoder.tag) {
			case 'bool':
				return typeof value === 'boolean' ? _1b(value) : _1c('a Bool', value);

			case 'int':
				if (typeof value !== 'number') {
					return _1c('an Int', value);
				}

				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return _1b(value);
				}

				if (_$0.isFinite(value) && !(value % 1)) {
					return _1b(value);
				}

				return _1c('an Int', value);

			case 'float':
				return typeof value === 'number' ? _1b(value) : _1c('a Float', value);

			case 'string':
				return typeof value === 'string' ? _1b(value) : value instanceof _$0.String ? _1b(value + '') : _1c('a String', value);

			case 'null':
				return value === null ? _1b(decoder.value) : _1c('null', value);

			case 'value':
				return _1b(value);

			case 'list':
				if (!(value instanceof _$0.Array)) {
					return _1c('a List', value);
				}

				var list = _6.Nil;

				for (var i = value.length; i--;) {
					var result = _1a(decoder.decoder, value[i]);

					if (result.tag !== 'ok') {
						return _1d(i, result);
					}

					list = _6.Cons(result.value, list);
				}

				return _1b(list);

			case 'array':
				if (!(value instanceof _$0.Array)) {
					return _1c('an Array', value);
				}

				var len = value.length;
				var array = new _$0.Array(len);

				for (var i = len; i--;) {
					var result = _1a(decoder.decoder, value[i]);

					if (result.tag !== 'ok') {
						return _1d(i, result);
					}

					array[i] = result.value;
				}

				return _1b(_1e.fromJSArray(array));

			case 'maybe':
				var result = _1a(decoder.decoder, value);

				return result.tag === 'ok' ? _1b(_25(result.value)) : _1b(_26);

			case 'field':
				var field = decoder.field;

				if (typeof value !== 'object' || value === null || !(field in value)) {
					return _1c('an object with a field named `' + field + '`', value);
				}

				var result = _1a(decoder.decoder, value[field]);

				return result.tag === 'ok' ? result : _27(field, result);

			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof _$0.Array) {
					return _1c('an object', value);
				}

				var keyValuePairs = _6.Nil;

				for (var key in value) {
					var result = _1a(decoder.decoder, value[key]);

					if (result.tag !== 'ok') {
						return _27(key, result);
					}

					var pair = _t.Tuple2(key, result.value);

					keyValuePairs = _6.Cons(pair, keyValuePairs);
				}

				return _1b(keyValuePairs);

			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;

				for (var i = 0; i < decoders.length; i++) {
					var result = _1a(decoders[i], value);

					if (result.tag !== 'ok') {
						return result;
					}

					answer = answer(result.value);
				}

				return _1b(answer);

			case 'tuple':
				var decoders = decoder.decoders;
				var len = decoders.length;

				if (!(value instanceof _$0.Array) || value.length !== len) {
					return _1c('a Tuple with ' + len + ' entries', value);
				}

				var answer = decoder.func;

				for (var i = 0; i < len; i++) {
					var result = _1a(decoders[i], value[i]);

					if (result.tag !== 'ok') {
						return _1d(i, result);
					}

					answer = answer(result.value);
				}

				return _1b(answer);

			case 'customAndThen':
				var result = _1a(decoder.decoder, value);

				if (result.tag !== 'ok') {
					return result;
				}

				var realResult = decoder.callback(result.value);

				if (realResult.ctor === 'Err') {
					return _1c('something custom', value);
				}

				return _1b(realResult._0);

			case 'andThen':
				var result = _1a(decoder.decoder, value);

				return result.tag !== 'ok' ? result : _1a(decoder.callback(result.value), value);

			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;

				while (temp.ctor !== '[]') {
					var result = _1a(temp._0, value);

					if (result.tag === 'ok') {
						return result;
					}

					errors.push(result);
					temp = temp._1;
				}

				return _28(errors);

			case 'fail':
				return _29(decoder.msg);

			case 'succeed':
				return _1b(decoder.msg);
		}
	}

	function _1b(value) {
		return {
			tag: 'ok',
			value: value
		};
	}

	function _1c(type, value) {
		return {
			tag: 'primitive',
			type: type,
			value: value
		};
	}

	function _1d(index, nestedProblems) {
		return {
			tag: 'index',
			index: index,
			rest: nestedProblems
		};
	}

	function _1h(list) {
		if (list.ctor === '[]') {
			return _1f;
		} // Allocate M sized blocks (table) and write list elements to it.


		var table = new _$0.Array(32);
		var nodes = [];
		var i = 0;

		while (list.ctor !== '[]') {
			table[i] = list._0;
			list = list._1;
			i++; // table is full, so we can push a leaf containing it into the
			// next node.

			if (i === 32) {
				var leaf = {
					ctor: '_Array',
					height: 0,
					table: table
				};

				_1i(leaf, nodes);

				table = new _$0.Array(32);
				i = 0;
			}
		} // Maybe there is something left on the table.


		if (i > 0) {
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table.splice(0, i)
			};

			_1i(leaf, nodes);
		} // Go through all of the nodes and eventually push them into higher nodes.


		for (var h = 0; h < nodes.length - 1; h++) {
			if (nodes[h].table.length > 0) {
				_1i(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];

		if (head.height > 0 && head.table.length === 1) {
			return head.table[0];
		} else {
			return head;
		}
	}

	function _1i(toPush, nodes) {
		var h = toPush.height; // Maybe the node on this height does not exist.

		if (nodes.length === h) {
			var node = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
			nodes.push(node);
		}

		nodes[h].table.push(toPush);

		var len = _1j(toPush);

		if (nodes[h].lengths.length > 0) {
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}

		nodes[h].lengths.push(len);

		if (nodes[h].table.length === 32) {
			_1i(nodes[h], nodes);

			nodes[h] = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
		}
	}

	function _1j(array) {
		if (array.height === 0) {
			return array.table.length;
		} else {
			return array.lengths[array.lengths.length - 1];
		}
	}

	function _1l(len, f) {
		if (len <= 0) {
			return _1f;
		}

		var h = _$0.Math.floor(_$0.Math.log(len) / _$0.Math.log(32));

		return _1m(f, h, 0, len);
	}

	function _1m(f, h, from, to) {
		if (h === 0) {
			var table = new _$0.Array((to - from) % (32 + 1));

			for (var i = 0; i < table.length; i++) {
				table[i] = f(from + i);
			}

			return {
				ctor: '_Array',
				height: 0,
				table: table
			};
		}

		var step = _$0.Math.pow(32, h);

		var table = new _$0.Array(_$0.Math.ceil((to - from) / step));
		var lengths = new _$0.Array(table.length);

		for (var i = 0; i < table.length; i++) {
			table[i] = _1m(f, h - 1, from + i * step, _$0.Math.min(from + (i + 1) * step, to));
			lengths[i] = _1j(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}

		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function _1o(a, b) {
		if (a.table.length === 0) {
			return b;
		}

		if (b.table.length === 0) {
			return a;
		}

		var c = _1p(a, b); // Check if both nodes can be crunshed together.


		if (c[0].table.length + c[1].table.length <= 32) {
			if (c[0].table.length === 0) {
				return c[1];
			}

			if (c[1].table.length === 0) {
				return c[0];
			} // Adjust .table and .lengths


			c[0].table = c[0].table.concat(c[1].table);

			if (c[0].height > 0) {
				var len = _1j(c[0]);

				for (var i = 0; i < c[1].lengths.length; i++) {
					c[1].lengths[i] += len;
				}

				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0) {
			var toRemove = _1w(a, b);

			if (toRemove > 2) {
				c = _1x(c[0], c[1], toRemove);
			}
		}

		return _1C(c[0], c[1]);
	}

	function _1p(a, b) {
		if (a.height === 0 && b.height === 0) {
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1) {
			if (a.height === b.height) {
				a = _1q(a);
				b = _1q(b);

				var appended = _1p(_1r(a), _1s(b));

				_1t(a, appended[1]);

				_1u(b, appended[0]);
			} else if (a.height > b.height) {
				a = _1q(a);

				var appended = _1p(_1r(a), b);

				_1t(a, appended[0]);

				b = _1v(appended[1], appended[1].height + 1);
			} else {
				b = _1q(b);

				var appended = _1p(a, _1s(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;

				_1u(b, appended[left]);

				a = _1v(appended[right], appended[right].height + 1);
			}
		} // Check if balancing is needed and return based on that.


		if (a.table.length === 0 || b.table.length === 0) {
			return [a, b];
		}

		var toRemove = _1w(a, b);

		if (toRemove <= 2) {
			return [a, b];
		}

		return _1x(a, b, toRemove);
	}

	function _1q(a) {
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice()
		};

		if (a.height > 0) {
			newA.lengths = a.lengths.slice();
		}

		return newA;
	}

	function _1r(a) {
		return a.table[a.table.length - 1];
	}

	function _1s(a) {
		return a.table[0];
	}

	function _1t(parent, node) {
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = _1j(node);
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function _1u(parent, node) {
		if (node.table.length > 0) {
			parent.table[0] = node;
			parent.lengths[0] = _1j(node);

			var len = _1j(parent.table[0]);

			for (var i = 1; i < parent.lengths.length; i++) {
				len += _1j(parent.table[i]);
				parent.lengths[i] = len;
			}
		} else {
			parent.table.shift();

			for (var i = 1; i < parent.lengths.length; i++) {
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}

			parent.lengths.shift();
		}
	}

	function _1v(tree, h) {
		if (h === tree.height) {
			return tree;
		}

		return {
			ctor: '_Array',
			height: h,
			table: [_1v(tree, h - 1)],
			lengths: [_1j(tree)]
		};
	}

	function _1w(a, b) {
		var subLengths = 0;

		for (var i = 0; i < a.table.length; i++) {
			subLengths += a.table[i].table.length;
		}

		for (var i = 0; i < b.table.length; i++) {
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length;
		return toRemove - (_$0.Math.floor((subLengths - 1) / 32) + 1);
	}

	function _1x(a, b, toRemove) {
		var newA = _1y(a.height, _$0.Math.min(32, a.table.length + b.table.length - toRemove));

		var newB = _1y(a.height, newA.table.length - (a.table.length + b.table.length - toRemove)); // Skip the slots with size M. More precise: copy the slot references
		// to the new node


		var read = 0;

		while (_1z(a.table, b.table, read).table.length % 32 === 0) {
			_1A(newA.table, newB.table, read, _1z(a.table, b.table, read));

			_1A(newA.lengths, newB.lengths, read, _1z(a.lengths, b.lengths, read));

			read++;
		} // Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.


		var write = read;
		var slot = new _1y(a.height - 1, 0);
		var from = 0; // If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.

		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove) {
			// Find out the max possible items for copying.
			var source = _1z(a.table, b.table, read);

			var to = _$0.Math.min(32 - slot.table.length, source.table.length); // Copy and adjust size table.


			slot.table = slot.table.concat(source.table.slice(from, to));

			if (slot.height > 0) {
				var len = slot.lengths.length;

				for (var i = len; i < len + to - from; i++) {
					slot.lengths[i] = _1j(slot.table[i]);
					slot.lengths[i] += i > 0 ? slot.lengths[i - 1] : 0;
				}
			}

			from += to; // Only proceed to next slots[i] if the current one was
			// fully copied.

			if (source.table.length <= to) {
				read++;
				from = 0;
			} // Only create a new slot if the current one is filled up.


			if (slot.table.length === 32) {
				_1B(newA, newB, write, slot);

				slot = _1y(a.height - 1, 0);
				write++;
			}
		} // Cleanup after the loop. Copy the last slot into the new nodes.


		if (slot.table.length > 0) {
			_1B(newA, newB, write, slot);

			write++;
		} // Shift the untouched slots to the left


		while (read < a.table.length + b.table.length) {
			_1B(newA, newB, write, _1z(a.table, b.table, read));

			read++;
			write++;
		}

		return [newA, newB];
	}

	function _1y(h, length) {
		if (length < 0) {
			length = 0;
		}

		var a = {
			ctor: '_Array',
			height: h,
			table: new _$0.Array(length)
		};

		if (h > 0) {
			a.lengths = new _$0.Array(length);
		}

		return a;
	}

	function _1z(a, b, index) {
		return index < a.length ? a[index] : b[index - a.length];
	}

	function _1A(a, b, index, value) {
		if (index < a.length) {
			a[index] = value;
		} else {
			b[index - a.length] = value;
		}
	}

	function _1B(a, b, index, slot) {
		_1A(a.table, b.table, index, slot);

		var l = index === 0 || index === a.lengths.length ? 0 : _1z(a.lengths, a.lengths, index - 1);

		_1A(a.lengths, b.lengths, index, l + _1j(slot));
	}

	function _1C(a, b) {
		return {
			ctor: '_Array',
			height: a.height + 1,
			table: [a, b],
			lengths: [_1j(a), _1j(a) + _1j(b)]
		};
	}

	function _1E(item, a) {
		var pushed = _1F(item, a);

		if (pushed !== null) {
			return pushed;
		}

		var newTree = _1G(item, a.height);

		return _1C(a, newTree);
	}

	function _1F(item, a) {
		// Handle resursion stop at leaf level.
		if (a.height === 0) {
			if (a.table.length < 32) {
				var newA = {
					ctor: '_Array',
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			} else {
				return null;
			}
		} // Recursively push


		var pushed = _1F(item, _1r(a)); // There was space in the bottom right tree, so the slot will
		// be updated.


		if (pushed !== null) {
			var newA = _1q(a);

			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		} // When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.


		if (a.table.length < 32) {
			var newSlot = _1G(item, a.height - 1);

			var newA = _1q(a);

			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + _1j(newSlot));
			return newA;
		} else {
			return null;
		}
	}

	function _1G(item, h) {
		if (h === 0) {
			return {
				ctor: '_Array',
				height: 0,
				table: [item]
			};
		}

		return {
			ctor: '_Array',
			height: h,
			table: [_1G(item, h - 1)],
			lengths: [1]
		};
	}

	function _1I(from, to, a) {
		if (from < 0) {
			from += _1j(a);
		}

		if (to < 0) {
			to += _1j(a);
		}

		return _1J(from, _1L(to, a));
	}

	function _1J(from, a) {
		if (from === 0) {
			return a;
		} // Handle leaf level.


		if (a.height === 0) {
			var newA = {
				ctor: '_Array',
				height: 0
			};
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		} // Slice the left recursively.


		var left = _1K(from, a);

		var sliced = _1J(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]); // Maybe the a node is not even needed, as sliced contains the whole slice.


		if (left === a.table.length - 1) {
			return sliced;
		} // Create new node.


		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new _$0.Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;

		for (var i = 0; i < newA.table.length; i++) {
			len += _1j(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	function _1K(i, a) {
		var slot = i >> 5 * a.height;

		while (a.lengths[slot] <= i) {
			slot++;
		}

		return slot;
	}

	function _1L(to, a) {
		if (to === _1j(a)) {
			return a;
		} // Handle leaf level.


		if (a.height === 0) {
			var newA = {
				ctor: '_Array',
				height: 0
			};
			newA.table = a.table.slice(0, to);
			return newA;
		} // Slice the right recursively.


		var right = _1K(to, a);

		var sliced = _1L(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]); // Maybe the a node is not even needed, as sliced contains the whole slice.


		if (right === 0) {
			return sliced;
		} // Create new node.


		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};

		if (sliced.table.length > 0) {
			newA.table[right] = sliced;
			newA.lengths[right] = _1j(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}

		return newA;
	}

	function _1N(i, array) {
		if (i < 0 || i >= _1j(array)) {
			throw new _$0.Error('Index ' + i + ' is out of range. Check the length of ' + 'your array first or use getMaybe or getWithDefault.');
		}

		return _1O(i, array);
	}

	function _1O(i, array) {
		for (var x = array.height; x > 0; x--) {
			var slot = i >> x * 5;

			while (array.lengths[slot] <= i) {
				slot++;
			}

			if (slot > 0) {
				i -= array.lengths[slot - 1];
			}

			array = array.table[slot];
		}

		return array.table[i];
	}

	function _1Q(i, item, array) {
		if (i < 0 || _1j(array) <= i) {
			return array;
		}

		return _1R(i, item, array);
	}

	function _1R(i, item, array) {
		array = _1q(array);

		if (array.height === 0) {
			array.table[i] = item;
		} else {
			var slot = _1K(i, array);

			if (slot > 0) {
				i -= array.lengths[slot - 1];
			}

			array.table[slot] = _1R(i, item, array.table[slot]);
		}

		return array;
	}

	function _1T(f, a) {
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new _$0.Array(a.table.length)
		};

		if (a.height > 0) {
			newA.lengths = a.lengths;
		}

		for (var i = 0; i < a.table.length; i++) {
			newA.table[i] = a.height === 0 ? f(a.table[i]) : _1T(f, a.table[i]);
		}

		return newA;
	}

	function _1V(f, a) {
		return _1W(f, a, 0);
	}

	function _1W(f, a, from) {
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new _$0.Array(a.table.length)
		};

		if (a.height > 0) {
			newA.lengths = a.lengths;
		}

		for (var i = 0; i < a.table.length; i++) {
			newA.table[i] = a.height === 0 ? _f(f, from + i, a.table[i]) : _1W(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
		}

		return newA;
	}

	function _1Y(f, b, a) {
		if (a.height === 0) {
			for (var i = 0; i < a.table.length; i++) {
				b = _f(f, a.table[i], b);
			}
		} else {
			for (var i = 0; i < a.table.length; i++) {
				b = _1Y(f, b, a.table[i]);
			}
		}

		return b;
	}

	function _20(f, b, a) {
		if (a.height === 0) {
			for (var i = a.table.length; i--;) {
				b = _f(f, a.table[i], b);
			}
		} else {
			for (var i = a.table.length; i--;) {
				b = _20(f, b, a.table[i]);
			}
		}

		return b;
	}

	function _21(a) {
		var jsArray = new _$0.Array(_1j(a));

		_22(jsArray, 0, a);

		return jsArray;
	}

	function _22(jsArray, i, a) {
		for (var t = 0; t < a.table.length; t++) {
			if (a.height === 0) {
				jsArray[i + t] = a.table[t];
			} else {
				var inc = t === 0 ? 0 : a.lengths[t - 1];

				_22(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function _23(jsArray) {
		if (jsArray.length === 0) {
			return _1f;
		}

		var h = _$0.Math.floor(_$0.Math.log(jsArray.length) / _$0.Math.log(32));

		return _24(jsArray, h, 0, jsArray.length);
	}

	function _24(jsArray, h, from, to) {
		if (h === 0) {
			return {
				ctor: '_Array',
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = _$0.Math.pow(32, h);

		var table = new _$0.Array(_$0.Math.ceil((to - from) / step));
		var lengths = new _$0.Array(table.length);

		for (var i = 0; i < table.length; i++) {
			table[i] = _24(jsArray, h - 1, from + i * step, _$0.Math.min(from + (i + 1) * step, to));
			lengths[i] = _1j(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}

		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function _25(a) {
		return {
			ctor: 'Just',
			_0: a
		};
	}

	function _27(field, nestedProblems) {
		return {
			tag: 'field',
			field: field,
			rest: nestedProblems
		};
	}

	function _28(problems) {
		return {
			tag: 'oneOf',
			problems: problems
		};
	}

	function _29(msg) {
		return {
			tag: 'fail',
			msg: msg
		};
	}

	function _2a(a) {
		return {
			ctor: 'Ok',
			_0: a
		};
	}

	function _2b(problem) {
		var context = '_';

		while (problem) {
			switch (problem.tag) {
				case 'primitive':
					return 'Expecting ' + problem.type + (context === '_' ? '' : ' at ' + context) + ' but instead got: ' + _2c(problem.value);

				case 'index':
					context += '[' + problem.index + ']';
					problem = problem.rest;
					break;

				case 'field':
					context += '.' + problem.field;
					problem = problem.rest;
					break;

				case 'oneOf':
					var problems = problem.problems;

					for (var i = 0; i < problems.length; i++) {
						problems[i] = _2b(problems[i]);
					}

					return 'I ran into the following problems' + (context === '_' ? '' : ' at ' + context) + ':\n\n' + problems.join('\n');

				case 'fail':
					return 'I ran into a `fail` decoder' + (context === '_' ? '' : ' at ' + context) + ': ' + problem.msg;
			}
		}
	}

	function _2c(value) {
		return value === _$0.undefined ? 'undefined' : _$0.JSON.stringify(value);
	}

	function _2e(value) {
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}

	function _2f(tag) {
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}

	function _2h(tag, decoder) {
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}

	function _2j(field, decoder) {
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}

	function _2l(f, d1) {
		return _2m(f, [d1]);
	}

	function _2m(f, decoders) {
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}

	function _2o(f, d1, d2) {
		return _2m(f, [d1, d2]);
	}

	function _2q(f, d1, d2, d3) {
		return _2m(f, [d1, d2, d3]);
	}

	function _2s(f, d1, d2, d3, d4) {
		return _2m(f, [d1, d2, d3, d4]);
	}

	function _2u(f, d1, d2, d3, d4, d5) {
		return _2m(f, [d1, d2, d3, d4, d5]);
	}

	function _2w(f, d1, d2, d3, d4, d5, d6) {
		return _2m(f, [d1, d2, d3, d4, d5, d6]);
	}

	function _2y(f, d1, d2, d3, d4, d5, d6, d7) {
		return _2m(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function _2A(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return _2m(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}

	function _2B(decoder) {
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}

	function _2D(f, d1) {
		return _2E(f, [d1]);
	}

	function _2E(f, decoders) {
		return {
			ctor: '<decoder>',
			tag: 'tuple',
			func: f,
			decoders: decoders
		};
	}

	function _2G(f, d1, d2) {
		return _2E(f, [d1, d2]);
	}

	function _2I(f, d1, d2, d3) {
		return _2E(f, [d1, d2, d3]);
	}

	function _2K(f, d1, d2, d3, d4) {
		return _2E(f, [d1, d2, d3, d4]);
	}

	function _2M(f, d1, d2, d3, d4, d5) {
		return _2E(f, [d1, d2, d3, d4, d5]);
	}

	function _2O(f, d1, d2, d3, d4, d5, d6) {
		return _2E(f, [d1, d2, d3, d4, d5, d6]);
	}

	function _2Q(f, d1, d2, d3, d4, d5, d6, d7) {
		return _2E(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function _2S(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return _2E(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}

	function _2U(decoder, callback) {
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}

	function _2W(decoder, callback) {
		return {
			ctor: '<decoder>',
			tag: 'customAndThen',
			decoder: decoder,
			callback: callback
		};
	}

	function _2X(msg) {
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}

	function _2Y(msg) {
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}

	function _2Z(decoders) {
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}

	function _30(value) {
		return value;
	}

	function _31(keyValuePairs) {
		var obj = {};

		while (keyValuePairs.ctor !== '[]') {
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}

		return obj;
	}

	function _32(a, b) {
		if (a === b) {
			return true;
		}

		if (a.tag !== b.tag) {
			return false;
		}

		switch (a.tag) {
			case 'succeed':
			case 'fail':
				return a.msg === b.msg;

			case 'bool':
			case 'int':
			case 'float':
			case 'string':
			case 'value':
				return true;

			case 'null':
				return a.value === b.value;

			case 'list':
			case 'array':
			case 'maybe':
			case 'key-value':
				return _32(a.decoder, b.decoder);

			case 'field':
				return a.field === b.field && _32(a.decoder, b.decoder);

			case 'map-many':
			case 'tuple':
				if (a.func !== b.func) {
					return false;
				}

				return _33(a.decoders, b.decoders);

			case 'andThen':
			case 'customAndThen':
				return a.callback === b.callback && _32(a.decoder, b.decoder);

			case 'oneOf':
				return _33(a.decoders, b.decoders);
		}
	}

	function _33(aDecoders, bDecoders) {
		var len = aDecoders.length;

		if (len !== bDecoders.length) {
			return false;
		}

		for (var i = 0; i < len; i++) {
			if (!_32(aDecoders[i], bDecoders[i])) {
				return false;
			}
		}

		return true;
	}

	function _34(domNode, attrs) {
		for (var key in attrs) {
			var value = attrs[key];

			if (typeof value === 'undefined') {
				domNode.removeAttribute(key);
			} else {
				domNode.setAttribute(key, value);
			}
		}
	}

	function _35(domNode, nsAttrs) {
		for (var key in nsAttrs) {
			var pair = nsAttrs[key];
			var namespace = pair.namespace;
			var value = pair.value;

			if (typeof value === 'undefined') {
				domNode.removeAttributeNS(namespace, key);
			} else {
				domNode.setAttributeNS(namespace, key, value);
			}
		}
	}

	function _36(a, b) {
		var patches = [];

		_37(a, b, patches, 0);

		return patches;
	}

	function _37(a, b, patches, index) {
		if (a === b) {
			return;
		}

		var aType = a.type;
		var bType = b.type; // Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.

		if (aType !== bType) {
			patches.push(_38('p-redraw', index, b));
			return;
		} // Now we know that both nodes are the same type.


		switch (bType) {
			case 'thunk':
				var aArgs = a.args;
				var bArgs = b.args;
				var i = aArgs.length;
				var same = a.func === b.func && i === bArgs.length;

				while (same && i--) {
					same = aArgs[i] === bArgs[i];
				}

				if (same) {
					b.node = a.node;
					return;
				}

				b.node = b.thunk();
				var subPatches = [];

				_37(a.node, b.node, subPatches, 0);

				if (subPatches.length > 0) {
					patches.push(_38('p-thunk', index, subPatches));
				}

				return;

			case 'tagger':
				// gather nested taggers
				var aTaggers = a.tagger;
				var bTaggers = b.tagger;
				var nesting = false;
				var aSubNode = a.node;

				while (aSubNode.type === 'tagger') {
					nesting = true;
					typeof aTaggers !== 'object' ? aTaggers = [aTaggers, aSubNode.tagger] : aTaggers.push(aSubNode.tagger);
					aSubNode = aSubNode.node;
				}

				var bSubNode = b.node;

				while (bSubNode.type === 'tagger') {
					nesting = true;
					typeof bTaggers !== 'object' ? bTaggers = [bTaggers, bSubNode.tagger] : bTaggers.push(bSubNode.tagger);
					bSubNode = bSubNode.node;
				} // Just bail if different numbers of taggers. This implies the
				// structure of the virtual DOM has changed.


				if (nesting && aTaggers.length !== bTaggers.length) {
					patches.push(_38('p-redraw', index, b));
					return;
				} // check if taggers are "the same"


				if (nesting ? !_39(aTaggers, bTaggers) : aTaggers !== bTaggers) {
					patches.push(_38('p-tagger', index, bTaggers));
				} // diff everything below the taggers


				_37(aSubNode, bSubNode, patches, index + 1);

				return;

			case 'text':
				if (a.text !== b.text) {
					patches.push(_38('p-text', index, b.text));
					return;
				}

				return;

			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace) {
					patches.push(_38('p-redraw', index, b));
					return;
				}

				var factsDiff = _3a(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_38('p-facts', index, factsDiff));
				}

				_3c(a, b, patches, index);

				return;

			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace) {
					patches.push(_38('p-redraw', index, b));
					return;
				}

				var factsDiff = _3a(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_38('p-facts', index, factsDiff));
				}

				_3d(a, b, patches, index);

				return;

			case 'custom':
				if (a.impl !== b.impl) {
					patches.push(_38('p-redraw', index, b));
					return;
				}

				var factsDiff = _3a(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_38('p-facts', index, factsDiff));
				}

				var patch = b.impl.diff(a, b);

				if (patch) {
					patches.push(_38('p-custom', index, patch));
					return;
				}

				return;
		}
	}

	function _38(type, index, data) {
		return {
			index: index,
			type: type,
			data: data,
			domNode: _$0.undefined,
			eventNode: _$0.undefined
		};
	}

	function _39(as, bs) {
		for (var i = 0; i < as.length; i++) {
			if (as[i] !== bs[i]) {
				return false;
			}
		}

		return true;
	}

	function _3a(a, b, category) {
		var diff; // look for changes and removals

		for (var aKey in a) {
			if (aKey === "STYLE" || aKey === "EVENT" || aKey === "ATTR" || aKey === "ATTR_NS") {
				var subDiff = _3a(a[aKey], b[aKey] || {}, aKey);

				if (subDiff) {
					diff = diff || {};
					diff[aKey] = subDiff;
				}

				continue;
			} // remove if not in the new facts


			if (!(aKey in b)) {
				diff = diff || {};
				diff[aKey] = typeof category === 'undefined' ? typeof a[aKey] === 'string' ? '' : null : category === "STYLE" ? '' : category === "EVENT" || category === "ATTR" ? _$0.undefined : {
					namespace: a[aKey].namespace,
					value: _$0.undefined
				};
				continue;
			}

			var aValue = a[aKey];
			var bValue = b[aKey]; // reference equal, so don't worry about it

			if (aValue === bValue && aKey !== 'value' || category === "EVENT" && _3b(aValue, bValue)) {
				continue;
			}

			diff = diff || {};
			diff[aKey] = bValue;
		} // add new stuff


		for (var bKey in b) {
			if (!(bKey in a)) {
				diff = diff || {};
				diff[bKey] = b[bKey];
			}
		}

		return diff;
	}

	function _3b(a, b) {
		if (!a.options === b.options) {
			if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault) {
				return false;
			}
		}

		return _13.equality(a.decoder, b.decoder);
	}

	function _3c(aParent, bParent, patches, rootIndex) {
		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length; // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

		if (aLen > bLen) {
			patches.push(_38('p-remove-last', rootIndex, aLen - bLen));
		} else if (aLen < bLen) {
			patches.push(_38('p-append', rootIndex, bChildren.slice(aLen)));
		} // PAIRWISE DIFF EVERYTHING ELSE


		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;

		for (var i = 0; i < minLen; i++) {
			index++;
			var aChild = aChildren[i];

			_37(aChild, bChildren[i], patches, index);

			index += aChild.descendantsCount || 0;
		}
	}

	function _3d(aParent, bParent, patches, rootIndex) {
		var localPatches = [];
		var changes = {}; // Dict String Entry

		var inserts = []; // Array { index : Int, entry : Entry }
		// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length;
		var aIndex = 0;
		var bIndex = 0;
		var index = rootIndex;

		while (aIndex < aLen && bIndex < bLen) {
			var a = aChildren[aIndex];
			var b = bChildren[bIndex];
			var aKey = a._0;
			var bKey = b._0;
			var aNode = a._1;
			var bNode = b._1; // check if keys match

			if (aKey === bKey) {
				index++;

				_37(aNode, bNode, localPatches, index);

				index += aNode.descendantsCount || 0;
				aIndex++;
				bIndex++;
				continue;
			} // look ahead 1 to detect insertions and removals.


			var aLookAhead = aIndex + 1 < aLen;
			var bLookAhead = bIndex + 1 < bLen;

			if (aLookAhead) {
				var aNext = aChildren[aIndex + 1];
				var aNextKey = aNext._0;
				var aNextNode = aNext._1;
				var oldMatch = bKey === aNextKey;
			}

			if (bLookAhead) {
				var bNext = bChildren[bIndex + 1];
				var bNextKey = bNext._0;
				var bNextNode = bNext._1;
				var newMatch = aKey === bNextKey;
			} // swap a and b


			if (aLookAhead && bLookAhead && newMatch && oldMatch) {
				index++;

				_37(aNode, bNextNode, localPatches, index);

				_3e(changes, localPatches, aKey, bNode, bIndex, inserts);

				index += aNode.descendantsCount || 0;
				index++;

				_3f(changes, localPatches, aKey, aNextNode, index);

				index += aNextNode.descendantsCount || 0;
				aIndex += 2;
				bIndex += 2;
				continue;
			} // insert b


			if (bLookAhead && newMatch) {
				index++;

				_3e(changes, localPatches, bKey, bNode, bIndex, inserts);

				_37(aNode, bNextNode, localPatches, index);

				index += aNode.descendantsCount || 0;
				aIndex += 1;
				bIndex += 2;
				continue;
			} // remove a


			if (aLookAhead && oldMatch) {
				index++;

				_3f(changes, localPatches, aKey, aNode, index);

				index += aNode.descendantsCount || 0;
				index++;

				_37(aNextNode, bNode, localPatches, index);

				index += aNextNode.descendantsCount || 0;
				aIndex += 2;
				bIndex += 1;
				continue;
			} // remove a, insert b


			if (aLookAhead && bLookAhead && aNextKey === bNextKey) {
				index++;

				_3f(changes, localPatches, aKey, aNode, index);

				_3e(changes, localPatches, bKey, bNode, bIndex, inserts);

				index += aNode.descendantsCount || 0;
				index++;

				_37(aNextNode, bNextNode, localPatches, index);

				index += aNextNode.descendantsCount || 0;
				aIndex += 2;
				bIndex += 2;
				continue;
			}

			break;
		} // eat up any remaining nodes with removeNode and insertNode


		while (aIndex < aLen) {
			index++;
			var a = aChildren[aIndex];
			var aNode = a._1;

			_3f(changes, localPatches, a._0, aNode, index);

			index += aNode.descendantsCount || 0;
			aIndex++;
		}

		var endInserts;

		while (bIndex < bLen) {
			endInserts = endInserts || [];
			var b = bChildren[bIndex];

			_3e(changes, localPatches, b._0, b._1, _$0.undefined, endInserts);

			bIndex++;
		}

		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined') {
			patches.push(_38('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}

	function _3e(changes, localPatches, key, vnode, bIndex, inserts) {
		var entry = changes[key]; // never seen this key before

		if (typeof entry === 'undefined') {
			entry = {
				tag: 'insert',
				vnode: vnode,
				index: bIndex,
				data: _$0.undefined
			};
			inserts.push({
				index: bIndex,
				entry: entry
			});
			changes[key] = entry;
			return;
		} // this key was removed earlier, a match!


		if (entry.tag === 'remove') {
			inserts.push({
				index: bIndex,
				entry: entry
			});
			entry.tag = 'move';
			var subPatches = [];

			_37(entry.vnode, vnode, subPatches, entry.index);

			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};
			return;
		} // this key has already been inserted or moved, a duplicate!


		_3e(changes, localPatches, key + "_elmW6BL", vnode, bIndex, inserts);
	}

	function _3f(changes, localPatches, key, vnode, index) {
		var entry = changes[key]; // never seen this key before

		if (typeof entry === 'undefined') {
			var patch = _38('p-remove', index, _$0.undefined);

			localPatches.push(patch);
			changes[key] = {
				tag: 'remove',
				vnode: vnode,
				index: index,
				data: patch
			};
			return;
		} // this key was inserted earlier, a match!


		if (entry.tag === 'insert') {
			entry.tag = 'move';
			var subPatches = [];

			_37(vnode, entry.vnode, subPatches, index);

			var patch = _38('p-remove', index, {
				patches: subPatches,
				entry: entry
			});

			localPatches.push(patch);
			return;
		} // this key has already been removed or moved, a duplicate!


		_3f(changes, localPatches, key + "_elmW6BL", vnode, index);
	}

	function _3g(rootDomNode, oldVirtualNode, patches, eventNode) {
		if (patches.length === 0) {
			return rootDomNode;
		}

		_3h(rootDomNode, oldVirtualNode, patches, eventNode);

		return _3j(rootDomNode, patches);
	}

	function _3h(domNode, vNode, patches, eventNode) {
		_3i(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}

	function _3i(domNode, vNode, patches, i, low, high, eventNode) {
		var patch = patches[i];
		var index = patch.index;

		while (index === low) {
			var patchType = patch.type;

			if (patchType === 'p-thunk') {
				_3h(domNode, vNode.node, patch.data, eventNode);
			} else if (patchType === 'p-reorder') {
				patch.domNode = domNode;
				patch.eventNode = eventNode;
				var subPatches = patch.data.patches;

				if (subPatches.length > 0) {
					_3i(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			} else if (patchType === 'p-remove') {
				patch.domNode = domNode;
				patch.eventNode = eventNode;
				var data = patch.data;

				if (typeof data !== 'undefined') {
					data.entry.data = domNode;
					var subPatches = data.patches;

					if (subPatches.length > 0) {
						_3i(domNode, vNode, subPatches, 0, low, high, eventNode);
					}
				}
			} else {
				patch.domNode = domNode;
				patch.eventNode = eventNode;
			}

			i++;

			if (!(patch = patches[i]) || (index = patch.index) > high) {
				return i;
			}
		}

		switch (vNode.type) {
			case 'tagger':
				var subNode = vNode.node;

				while (subNode.type === "tagger") {
					subNode = subNode.node;
				}

				return _3i(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;

				for (var j = 0; j < vChildren.length; j++) {
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);

					if (low <= index && index <= nextLow) {
						i = _3i(childNodes[j], vChild, patches, i, low, nextLow, eventNode);

						if (!(patch = patches[i]) || (index = patch.index) > high) {
							return i;
						}
					}

					low = nextLow;
				}

				return i;

			case 'keyed-node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;

				for (var j = 0; j < vChildren.length; j++) {
					low++;
					var vChild = vChildren[j]._1;
					var nextLow = low + (vChild.descendantsCount || 0);

					if (low <= index && index <= nextLow) {
						i = _3i(childNodes[j], vChild, patches, i, low, nextLow, eventNode);

						if (!(patch = patches[i]) || (index = patch.index) > high) {
							return i;
						}
					}

					low = nextLow;
				}

				return i;

			case 'text':
			case 'thunk':
				throw new _$0.Error('should never traverse `text` or `thunk` nodes like this');
		}
	}

	function _3j(rootDomNode, patches) {
		for (var i = 0; i < patches.length; i++) {
			var patch = patches[i];
			var localDomNode = patch.domNode;

			var newNode = _3k(localDomNode, patch);

			if (localDomNode === rootDomNode) {
				rootDomNode = newNode;
			}
		}

		return rootDomNode;
	}

	function _3k(domNode, patch) {
		switch (patch.type) {
			case 'p-redraw':
				return _3l(domNode, patch.data, patch.eventNode);

			case 'p-facts':
				_Z(domNode, patch.eventNode, patch.data);

				return domNode;

			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;

			case 'p-thunk':
				return _3j(domNode, patch.data);

			case 'p-tagger':
				domNode.elm_event_node_ref.tagger = patch.data;
				return domNode;

			case 'p-remove-last':
				var i = patch.data;

				while (i--) {
					domNode.removeChild(domNode.lastChild);
				}

				return domNode;

			case 'p-append':
				var newNodes = patch.data;

				for (var i = 0; i < newNodes.length; i++) {
					domNode.appendChild(_Y(newNodes[i], patch.eventNode));
				}

				return domNode;

			case 'p-remove':
				var data = patch.data;

				if (typeof data === 'undefined') {
					domNode.parentNode.removeChild(domNode);
					return domNode;
				}

				var entry = data.entry;

				if (typeof entry.index !== 'undefined') {
					domNode.parentNode.removeChild(domNode);
				}

				entry.data = _3j(domNode, data.patches);
				return domNode;

			case 'p-reorder':
				var data = patch.data; // end inserts

				var endInserts = data.endInserts;
				var end;

				if (typeof endInserts !== 'undefined') {
					if (endInserts.length === 1) {
						var insert = endInserts[0];
						var entry = insert.entry;
						var end = entry.tag === 'move' ? entry.data : _Y(entry.vnode, patch.eventNode);
					} else {
						end = _$0.document.createDocumentFragment();

						for (var i = 0; i < endInserts.length; i++) {
							var insert = endInserts[i];
							var entry = insert.entry;
							var node = entry.tag === 'move' ? entry.data : _Y(entry.vnode, patch.eventNode);
							end.appendChild(node);
						}
					}
				} // removals


				domNode = _3j(domNode, data.patches); // inserts

				var inserts = data.inserts;

				for (var i = 0; i < inserts.length; i++) {
					var insert = inserts[i];
					var entry = insert.entry;
					var node = entry.tag === 'move' ? entry.data : _Y(entry.vnode, patch.eventNode);
					domNode.insertBefore(node, domNode.childNodes[insert.index]);
				}

				if (typeof end !== 'undefined') {
					domNode.appendChild(end);
				}

				return domNode;

			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);

			default:
				throw new _$0.Error('Ran into an unknown patch!');
		}
	}

	function _3l(domNode, vNode, eventNode) {
		var parentNode = domNode.parentNode;

		var newNode = _Y(vNode, eventNode);

		if (typeof newNode.elm_event_node_ref === 'undefined') {
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}

		if (parentNode && newNode !== domNode) {
			parentNode.replaceChild(newNode, domNode);
		}

		return newNode;
	}

	function _3m(moduleName, realInit, flagDecoder) {
		return function init(flags) {
			var result = _f(_13.run, flagDecoder, flags);

			if (result.ctor === 'Err') {
				throw new _$0.Error('You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n' + 'When trying to convert it to a usable Elm value, I run into this problem:\n\n' + result._0);
			}

			return realInit(result._0);
		};
	}

	function _3n(moduleName, realInit) {
		return function init(flags) {
			if (typeof flags !== 'undefined') {
				throw new _$0.Error('You are giving module `' + moduleName + '` an argument in JavaScript.\n' + 'This module does not take arguments though! You probably need to change the\n' + 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`');
			}

			return realInit();
		};
	}

	function _3q(_p0) {
		return _3r.init;
	}

	function _3v(model) {
		return _f(_3w, _6.fromArray([_3A('todomvc-wrapper'), _3F(_6.fromArray([{
			ctor: '_Tuple2',
			_0: 'visibility',
			_1: 'hidden'
		}]))]), _6.fromArray([_f(_3G, _6.fromArray([_3A('todoapp')]), _6.fromArray([_f(_3I, _3L, model.field), _k(_4e, _4g, model.visibility, model.entries), _k(_4e, _57, model.visibility, model.entries)])), _5v]));
	}

	function _3y(tag, factList, kidList) {
		var organized = _3z(factList);

		var namespace = organized.namespace;
		var facts = organized.facts;
		var children = [];
		var descendantsCount = 0;

		while (kidList.ctor !== '[]') {
			var kid = kidList._0;
			descendantsCount += kid.descendantsCount || 0;
			children.push(kid);
			kidList = kidList._1;
		}

		descendantsCount += children.length;
		return {
			type: 'node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}

	function _3z(factList) {
		var namespace,
		    facts = {};

		while (factList.ctor !== '[]') {
			var entry = factList._0;
			var key = entry.key;

			if (key === "ATTR" || key === "ATTR_NS" || key === "EVENT") {
				var subFacts = facts[key] || {};
				subFacts[entry.realKey] = entry.value;
				facts[key] = subFacts;
			} else if (key === "STYLE") {
				var styles = facts[key] || {};
				var styleList = entry.value;

				while (styleList.ctor !== '[]') {
					var style = styleList._0;
					styles[style._0] = style._1;
					styleList = styleList._1;
				}

				facts[key] = styles;
			} else if (key === 'namespace') {
				namespace = entry.value;
			} else {
				facts[key] = entry.value;
			}

			factList = factList._1;
		}

		return {
			facts: facts,
			namespace: namespace
		};
	}

	function _3A(name) {
		return _f(_3B, 'className', name);
	}

	function _3C(name, string) {
		return _f(_3D, name, _30(string));
	}

	function _3E(key, value) {
		return {
			key: key,
			value: value
		};
	}

	function _3F(value) {
		return {
			key: "STYLE",
			value: value
		};
	}

	function _3J(fn, a) {
		return _3K(fn, [a], function () {
			return fn(a);
		});
	}

	function _3K(func, args, thunk) {
		return {
			type: 'thunk',
			func: func,
			args: args,
			thunk: thunk,
			node: _$0.undefined
		};
	}

	function _3L(task) {
		return _f(_3M, _6.fromArray([_3A('header')]), _6.fromArray([_f(_3O, _6.fromArray([]), _6.fromArray([_3Q('todos')])), _f(_3R, _6.fromArray([_3A('new-todo'), _3T('What needs to be done?'), _3U(true), _3X(task), _3Y('newTodo'), _3Z(_48), _49(_4d)]), _6.fromArray([]))]));
	}

	function _3Q(string) {
		return {
			type: 'text',
			text: string
		};
	}

	function _3T(value) {
		return _f(_3B, 'placeholder', value);
	}

	function _3U(bool) {
		return _f(_3V, 'autofocus', bool);
	}

	function _3W(name, bool) {
		return _f(_3D, name, _30(bool));
	}

	function _3X(value) {
		return _f(_3B, 'value', value);
	}

	function _3Y(value) {
		return _f(_3B, 'name', value);
	}

	function _3Z(tagger) {
		return _f(_40, 'input', _f(_2k, tagger, _45));
	}

	function _41(eventName, decoder) {
		return _k(_42, eventName, _44, decoder);
	}

	function _43(name, options, decoder) {
		return {
			key: "EVENT",
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}

	function _48(a) {
		return {
			ctor: 'UpdateField',
			_0: a
		};
	}

	function _49(msg) {
		var tagger = function (code) {
			return _t.eq(code, 13) ? msg : _4a;
		};

		return _f(_40, 'keydown', _f(_2k, tagger, _4b));
	}

	function _4f(fn, a, b) {
		return _3K(fn, [a, b], function () {
			return _f(fn, a, b);
		});
	}

	function _4h(visibility, entries) {
		var cssVisibility = _4i(entries) ? 'hidden' : 'visible';

		var allCompleted = _f(_4j, function (_) {
			return _.completed;
		}, entries);

		var isVisible = function (todo) {
			var _p3 = visibility;

			switch (_p3) {
				case 'Completed':
					return todo.completed;

				case 'Active':
					return _4l(todo.completed);

				default:
					return true;
			}
		};

		return _f(_3G, _6.fromArray([_3A('main'), _3F(_6.fromArray([{
			ctor: '_Tuple2',
			_0: 'visibility',
			_1: cssVisibility
		}]))]), _6.fromArray([_f(_3R, _6.fromArray([_3A('toggle-all'), _4o('checkbox'), _3Y('toggle'), _4p(allCompleted), _4q(_4r(_4l(allCompleted)))]), _6.fromArray([])), _f(_4s, _6.fromArray([_4u('toggle-all')]), _6.fromArray([_3Q('Mark all as complete')])), _f(_4v, _6.fromArray([_3A('todo-list')]), _f(_M, _4x, _f(_4F, isVisible, entries)))]));
	}

	function _4i(xs) {
		var _p7 = xs;

		if (_p7.ctor === '[]') {
			return true;
		} else {
			return false;
		}
	}

	function _4k(isOkay, list) {
		return _4l(_f(_4m, function (_p2) {
			return _4l(isOkay(_p2));
		}, list));
	}

	function _4l(b) {
		return !b;
	}

	function _4n(isOkay, list) {
		any: while (true) {
			var _p1 = list;

			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
					    _v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	}

	function _4o(value) {
		return _f(_3B, 'type', value);
	}

	function _4p(bool) {
		return _f(_3V, 'checked', bool);
	}

	function _4q(msg) {
		return _f(_40, 'click', _2Y(msg));
	}

	function _4r(a) {
		return {
			ctor: 'CheckAll',
			_0: a
		};
	}

	function _4u(value) {
		return _f(_3B, 'htmlFor', value);
	}

	function _4v(b) {
		return function (c) {
			return _4w("ul", b, c);
		};
	}

	function _4w(tag, factList, kidList) {
		var organized = _3z(factList);

		var namespace = organized.namespace;
		var facts = organized.facts;
		var children = [];
		var descendantsCount = 0;

		while (kidList.ctor !== '[]') {
			var kid = kidList._0;
			descendantsCount += kid._1.descendantsCount || 0;
			children.push(kid);
			kidList = kidList._1;
		}

		descendantsCount += children.length;
		return {
			type: 'keyed-node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}

	function _4x(todo) {
		return {
			ctor: '_Tuple2',
			_0: _I(todo.id),
			_1: _f(_3I, _4y, todo)
		};
	}

	function _4y(todo) {
		return _f(_4z, _6.fromArray([_4B(_6.fromArray([{
			ctor: '_Tuple2',
			_0: 'completed',
			_1: todo.completed
		}, {
			ctor: '_Tuple2',
			_0: 'editing',
			_1: todo.editing
		}]))]), _6.fromArray([_f(_3w, _6.fromArray([_3A('view')]), _6.fromArray([_f(_3R, _6.fromArray([_3A('toggle'), _4o('checkbox'), _4p(todo.completed), _4q(_f(_4I, todo.id, _4l(todo.completed)))]), _6.fromArray([])), _f(_4s, _6.fromArray([_4K(_f(_4L, todo.id, true))]), _6.fromArray([_3Q(todo.description)])), _f(_4N, _6.fromArray([_3A('destroy'), _4q(_4P(todo.id))]), _6.fromArray([]))])), _f(_3R, _6.fromArray([_3A('edit'), _3X(todo.description), _3Y('title'), _4Q(_f(_4R['++'], 'todo-', _I(todo.id))), _3Z(_54(todo.id)), _56(_f(_4L, todo.id, false)), _49(_f(_4L, todo.id, false))]), _6.fromArray([]))]));
	}

	function _4B(list) {
		return _3A(_f(_4C, ' ', _f(_M, _4E, _f(_4F, _4H, list))));
	}

	function _4D(sep, strs) {
		return _6.toArray(strs).join(sep);
	}

	function _4E(_p4) {
		var _p5 = _p4;
		return _p5._0;
	}

	function _4G(pred, xs) {
		var conditionalCons = _O(function (x, xs$) {
			return pred(x) ? _f(_P['::'], x, xs$) : xs$;
		});

		return _k(_d, conditionalCons, _6.fromArray([]), xs);
	}

	function _4H(_p2) {
		var _p3 = _p2;
		return _p3._1;
	}

	function _4J(a, b) {
		return {
			ctor: 'Check',
			_0: a,
			_1: b
		};
	}

	function _4K(msg) {
		return _f(_40, 'dblclick', _2Y(msg));
	}

	function _4M(a, b) {
		return {
			ctor: 'EditingEntry',
			_0: a,
			_1: b
		};
	}

	function _4P(a) {
		return {
			ctor: 'Delete',
			_0: a
		};
	}

	function _4Q(name) {
		return _f(_3B, 'id', name);
	}

	function _4T(f, x) {
		return f(x);
	}

	function _4V(x, f) {
		return f(x);
	}

	function _4X(f, g, x) {
		return g(f(x));
	}

	function _4Z(g, f, x) {
		return g(f(x));
	}

	function _51(a, b) {
		if (b === 0) {
			throw new _$0.Error('Cannot perform mod 0. Division by zero error.');
		}

		var r = a % b;
		var m = a === 0 ? 0 : b > 0 ? a >= 0 ? r : r + b : -_51(-a, -b);
		return m === b ? 0 : m;
	}

	function _53(a, b) {
		return a / b | 0;
	}

	function _55(a, b) {
		return {
			ctor: 'UpdateEntry',
			_0: a,
			_1: b
		};
	}

	function _56(msg) {
		return _f(_40, 'blur', _2Y(msg));
	}

	function _58(visibility, entries) {
		var entriesCompleted = _59(_f(_4F, function (_) {
			return _.completed;
		}, entries));

		var entriesLeft = _59(entries) - entriesCompleted;
		return _f(_5c, _6.fromArray([_3A('footer'), _5e(_4i(entries))]), _6.fromArray([_f(_3I, _5f, entriesLeft), _f(_3I, _5k, visibility), _f(_3I, _5t, entriesCompleted)]));
	}

	function _59(xs) {
		return _k(_5a, _O(function (_p4, i) {
			return i + 1;
		}), 0, xs);
	}

	function _5b(func, acc, list) {
		foldl: while (true) {
			var _p3 = list;

			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
				    _v8 = _f(func, _p3._0, acc),
				    _v9 = _p3._1;

				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	}

	function _5e(bool) {
		return _f(_3V, 'hidden', bool);
	}

	function _5f(entriesLeft) {
		var item_ = _t.eq(entriesLeft, 1) ? ' item' : ' items';
		return _f(_5g, _6.fromArray([_3A('todo-count')]), _6.fromArray([_f(_5i, _6.fromArray([]), _6.fromArray([_3Q(_I(entriesLeft))])), _3Q(_f(_4R['++'], item_, ' left'))]));
	}

	function _5k(visibility) {
		return _f(_5l, _6.fromArray([_3A('filters')]), _6.fromArray([_k(_5n, '#/', 'All', visibility), _3Q(' '), _k(_5n, '#/active', 'Active', visibility), _3Q(' '), _k(_5n, '#/completed', 'Completed', visibility)]));
	}

	function _5o(uri, visibility, actualVisibility) {
		return _f(_4z, _6.fromArray([_4q(_5p(visibility))]), _6.fromArray([_f(_5q, _6.fromArray([_5s(uri), _4B(_6.fromArray([{
			ctor: '_Tuple2',
			_0: 'selected',
			_1: _t.eq(visibility, actualVisibility)
		}]))]), _6.fromArray([_3Q(visibility)]))]));
	}

	function _5p(a) {
		return {
			ctor: 'ChangeVisibility',
			_0: a
		};
	}

	function _5s(value) {
		return _f(_3B, 'href', value);
	}

	function _5t(entriesCompleted) {
		return _f(_4N, _6.fromArray([_3A('clear-completed'), _5e(_t.eq(entriesCompleted, 0)), _4q(_5u)]), _6.fromArray([_3Q(_f(_4R['++'], 'Clear completed (', _f(_4R['++'], _I(entriesCompleted), ')')))]));
	}

	function _5T(msg, model) {
		var _p0 = msg;

		switch (_p0.ctor) {
			case 'NoOp':
				return _f(_5U['!'], model, _6.fromArray([]));

			case 'Add':
				return _f(_5U['!'], _t.update(model, {
					uid: model.uid + 1,
					field: '',
					entries: _5X(model.field) ? model.entries : _f(_4R['++'], model.entries, _6.fromArray([_f(_5Y, model.field, model.uid)]))
				}), _6.fromArray([]));

			case 'UpdateField':
				return _f(_5U['!'], _t.update(model, {
					field: _p0._0
				}), _6.fromArray([]));

			case 'EditingEntry':
				var _p1 = _p0._0;

				var updateEntry = function (t) {
					return _t.eq(t.id, _p1) ? _t.update(t, {
						editing: _p0._1
					}) : t;
				};

				return _f(_5U['!'], _t.update(model, {
					entries: _f(_M, updateEntry, model.entries)
				}), _6.fromArray([_60(_f(_4R['++'], '#todo-', _I(_p1)))]));

			case 'UpdateEntry':
				var updateEntry = function (t) {
					return _t.eq(t.id, _p0._0) ? _t.update(t, {
						description: _p0._1
					}) : t;
				};

				return _f(_5U['!'], _t.update(model, {
					entries: _f(_M, updateEntry, model.entries)
				}), _6.fromArray([]));

			case 'Delete':
				return _f(_5U['!'], _t.update(model, {
					entries: _f(_4F, function (t) {
						return !_t.eq(t.id, _p0._0);
					}, model.entries)
				}), _6.fromArray([]));

			case 'DeleteComplete':
				return _f(_5U['!'], _t.update(model, {
					entries: _f(_4F, function (_p2) {
						return _4l(function (_) {
							return _.completed;
						}(_p2));
					}, model.entries)
				}), _6.fromArray([]));

			case 'Check':
				var updateEntry = function (t) {
					return _t.eq(t.id, _p0._0) ? _t.update(t, {
						completed: _p0._1
					}) : t;
				};

				return _f(_5U['!'], _t.update(model, {
					entries: _f(_M, updateEntry, model.entries)
				}), _6.fromArray([]));

			case 'CheckAll':
				var updateEntry = function (t) {
					return _t.update(t, {
						completed: _p0._0
					});
				};

				return _f(_5U['!'], _t.update(model, {
					entries: _f(_M, updateEntry, model.entries)
				}), _6.fromArray([]));

			default:
				return _f(_5U['!'], _t.update(model, {
					visibility: _p0._0
				}), _6.fromArray([]));
		}
	}

	function _5W(model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _5(commands)
		};
	}

	function _5X(str) {
		return str.length === 0;
	}

	function _5Z(desc, id) {
		return {
			description: desc,
			completed: false,
			editing: false,
			id: id
		};
	}

	function _60(value) {
		return {
			type: 'leaf',
			home: "focus",
			value: value
		};
	}

	function _61(_p4) {
		return _62;
	}

	function _63() {
		return {
			update: function () {}
		};
	}

	function _64(moduleName, program, rootDomNode, flags) {
		var init = program.init;
		var update = program.update;
		var subscriptions = program.subscriptions;
		var view = program.view;
		var makeRenderer = program.renderer; // ambient state

		var managers = {};
		var renderer; // init and update state in main process

		var initApp = _65.nativeBinding(function (callback) {
			var results = init(flags);
			var model = results._0;
			renderer = makeRenderer(rootDomNode, enqueue, view(model));
			var cmds = results._1;
			var subs = subscriptions(model);

			_6p(managers, cmds, subs);

			callback(_65.succeed(model));
		});

		function onMessage(msg, model) {
			return _65.nativeBinding(function (callback) {
				var results = _f(update, msg, model);

				model = results._0;
				renderer.update(view(model));
				var cmds = results._1;
				var subs = subscriptions(model);

				_6p(managers, cmds, subs);

				callback(_65.succeed(model));
			});
		}

		var mainProcess = _6y(initApp, onMessage);

		function enqueue(msg) {
			_65.rawSend(mainProcess, msg);
		}

		var ports = _6z(managers, enqueue);

		return ports ? {
			ports: ports
		} : {};
	}

	function _66(value) {
		return {
			ctor: '_Task_succeed',
			value: value
		};
	}

	function _67(error) {
		return {
			ctor: '_Task_fail',
			value: error
		};
	}

	function _68(callback) {
		return {
			ctor: '_Task_nativeBinding',
			callback: callback,
			cancel: null
		};
	}

	function _6a(task, callback) {
		return {
			ctor: '_Task_andThen',
			task: task,
			callback: callback
		};
	}

	function _6c(task, callback) {
		return {
			ctor: '_Task_onError',
			task: task,
			callback: callback
		};
	}

	function _6d(callback) {
		return {
			ctor: '_Task_receive',
			callback: callback
		};
	}

	function _6e(task) {
		return _68(function (callback) {
			var process = _6f(task);

			callback(_66(process));
		});
	}

	function _6f(task) {
		var process = {
			ctor: '_Process',
			id: _t.guid(),
			root: task,
			stack: null,
			mailbox: []
		};

		_6g(process);

		return process;
	}

	function _6g(process) {
		_6h.push(process);

		if (!$1) {
			_$0.setTimeout(_6i, 0);

			$1 = true;
		}
	}

	function _6i() {
		var numSteps = 0;
		var process;

		while (numSteps < 10000 && (process = _6h.shift())) {
			numSteps = _6j(numSteps, process);
		}

		if (!process) {
			$1 = false;
			return;
		}

		_$0.setTimeout(_6i, 0);
	}

	function _6j(numSteps, process) {
		while (numSteps < 10000) {
			var ctor = process.root.ctor;

			if (ctor === '_Task_succeed') {
				while (process.stack && process.stack.ctor === '_Task_onError') {
					process.stack = process.stack.rest;
				}

				if (process.stack === null) {
					break;
				}

				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_fail') {
				while (process.stack && process.stack.ctor === '_Task_andThen') {
					process.stack = process.stack.rest;
				}

				if (process.stack === null) {
					break;
				}

				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_andThen') {
				process.stack = {
					ctor: '_Task_andThen',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_onError') {
				process.stack = {
					ctor: '_Task_onError',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_nativeBinding') {
				process.root.cancel = process.root.callback(function (newRoot) {
					process.root = newRoot;

					_6g(process);
				});
				break;
			}

			if (ctor === '_Task_receive') {
				var mailbox = process.mailbox;

				if (mailbox.length === 0) {
					break;
				}

				process.root = process.root.callback(mailbox.shift());
				++numSteps;
				continue;
			}

			throw new _$0.Error(ctor);
		}

		if (numSteps < 10000) {
			return numSteps + 1;
		}

		_6g(process);

		return numSteps;
	}

	function _6k(process) {
		return _68(function (callback) {
			var root = process.root;

			if (root.ctor === '_Task_nativeBinding' && root.cancel) {
				root.cancel();
			}

			process.root = null;
			callback(_66(_t.Tuple0));
		});
	}

	function _6l(time) {
		return _68(function (callback) {
			var id = _$0.setTimeout(function () {
				callback(_66(_t.Tuple0));
			}, time);

			return function () {
				_$0.clearTimeout(id);
			};
		});
	}

	function _6n(process, msg) {
		return _68(function (callback) {
			_6o(process, msg);

			callback(_66(_t.Tuple0));
		});
	}

	function _6o(process, msg) {
		process.mailbox.push(msg);

		_6g(process);
	}

	function _6p(managers, cmdBag, subBag) {
		var effectsDict = {};

		_6q(true, cmdBag, effectsDict, null);

		_6q(false, subBag, effectsDict, null);

		for (var home in managers) {
			var fx = home in effectsDict ? effectsDict[home] : {
				cmds: _6.Nil,
				subs: _6.Nil
			};

			_65.rawSend(managers[home], {
				ctor: 'fx',
				_0: fx
			});
		}
	}

	function _6q(isCmd, bag, effectsDict, taggers) {
		switch (bag.type) {
			case 'leaf':
				var home = bag.home;

				var effect = _6r(isCmd, home, taggers, bag.value);

				effectsDict[home] = _6x(isCmd, effect, effectsDict[home]);
				return;

			case 'node':
				var list = bag.branches;

				while (list.ctor !== '[]') {
					_6q(isCmd, list._0, effectsDict, taggers);

					list = list._1;
				}

				return;

			case 'map':
				_6q(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});

				return;
		}
	}

	function _6r(isCmd, home, taggers, value) {
		function applyTaggers(x) {
			var temp = taggers;

			while (temp) {
				x = temp.tagger(x);
				temp = temp.rest;
			}

			return x;
		}

		var map = isCmd ? _6s[home].cmdMap : _6s[home].subMap;
		return _f(map, applyTaggers, value);
	}

	function _6v(tagger, value) {
		return value;
	}

	function _6w(v) {
		return v;
	}

	function _6x(isCmd, newEffect, effects) {
		effects = effects || {
			cmds: _6.Nil,
			subs: _6.Nil
		};

		if (isCmd) {
			effects.cmds = _6.Cons(newEffect, effects.cmds);
			return effects;
		}

		effects.subs = _6.Cons(newEffect, effects.subs);
		return effects;
	}

	function _6y(init, onMessage) {
		var andThen = _65.andThen;

		function loop(state) {
			var handleMsg = _65.receive(function (msg) {
				return onMessage(msg, state);
			});

			return _f(andThen, handleMsg, loop);
		}

		var task = _f(andThen, init, loop);

		return _65.rawSpawn(task);
	}

	function _6z(managers, callback) {
		var ports; // setup all necessary effect managers

		for (var key in _6s) {
			var manager = _6s[key];

			if (manager.isForeign) {
				ports = ports || {};
				ports[key] = manager.tag === 'cmd' ? _6A(key) : _6B(key, callback);
			}

			managers[key] = _6C(manager, callback);
		}

		return ports;
	}

	function _6A(name) {
		var subs = [];
		var converter = _6s[name].converter; // CREATE MANAGER

		var init = _65.succeed(null);

		function onEffects(router, cmdList, state) {
			while (cmdList.ctor !== '[]') {
				var value = converter(cmdList._0);

				for (var i = 0; i < subs.length; i++) {
					subs[i](value);
				}

				cmdList = cmdList._1;
			}

			return init;
		}

		_6s[name].init = init;
		_6s[name].onEffects = _T(onEffects); // PUBLIC API

		function subscribe(callback) {
			subs.push(callback);
		}

		function unsubscribe(callback) {
			var index = subs.indexOf(callback);

			if (index >= 0) {
				subs.splice(index, 1);
			}
		}

		return {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};
	}

	function _6B(name, callback) {
		var subs = _6.Nil;
		var converter = _6s[name].converter; // CREATE MANAGER

		var init = _65.succeed(null);

		function onEffects(router, subList, state) {
			subs = subList;
			return init;
		}

		_6s[name].init = init;
		_6s[name].onEffects = _T(onEffects); // PUBLIC API

		function send(value) {
			var result = _f(_2d, converter, value);

			if (result.ctor === 'Err') {
				throw new _$0.Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
			}

			var value = result._0;
			var temp = subs;

			while (temp.ctor !== '[]') {
				callback(temp._0(value));
				temp = temp._1;
			}
		}

		return {
			send: send
		};
	}

	function _6C(info, callback) {
		var router = {
			main: callback,
			self: _$0.undefined
		};
		var tag = info.tag;
		var onEffects = info.onEffects;
		var onSelfMsg = info.onSelfMsg;

		function onMessage(msg, state) {
			if (msg.ctor === 'self') {
				return _k(onSelfMsg, router, msg._0, state);
			}

			var fx = msg._0;

			switch (tag) {
				case 'cmd':
					return _k(onEffects, router, fx.cmds, state);

				case 'sub':
					return _k(onEffects, router, fx.subs, state);

				case 'fx':
					return _n(onEffects, router, fx.cmds, fx.subs, state);
			}
		}

		var process = _6y(info.init, onMessage);

		router.self = process;
		return process;
	}

	function _6D(message) {
		return '<div style="padding-left:1em;">' + '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>' + '<pre style="padding-left:1em;">' + message + '</pre>' + '</div>';
	}

	function _6E(domNode, flags) {
		return _3(domNode, flags, true);
	}

	function _6F(flags) {
		return _3(_$0.document.body, flags, true);
	}

	var _7 = $_a();

	var _9 = $_0.bind(null, _8);

	_9.arity = 2;
	_9.func = _8;

	var _d = $_1.bind(null, _e);

	_d.arity = 3;
	_d.func = _e;

	var _g = $_1.bind(null, _h);

	_g.arity = 3;
	_g.func = _h;

	var _i = $_2.bind(null, _j);

	_i.arity = 4;
	_i.func = _j;

	var _l = $_3.bind(null, _m);

	_l.arity = 5;
	_l.func = _m;

	var _o = $_4.bind(null, _p);

	_o.arity = 6;
	_o.func = _p;
	var $0 = 0;

	var _E = $_a();

	_B.arity = 2;
	_B.func = _C;
	var _P = {
		"::": _9
	};
	_M.arity = 2;
	_M.func = _N;

	var _R = $_1.bind(null, _S);

	_R.arity = 3;
	_R.func = _S;
	var _t = {
		eq: _u,
		cmp: _v,
		Tuple0: {
			ctor: "_Tuple0"
		},
		Tuple2: _x,
		chr: _y,
		update: _z,
		guid: _A,
		append: _B,
		crash: _F,
		crashCase: _H,
		toString: _I
	};
	_r.arity = 2;
	_r.func = _s;

	var _U = $_0.bind(null, _V);

	_U.arity = 2;
	_U.func = _V;
	var _6 = {
		Nil: _7,
		Cons: _8,
		cons: _9,
		toArray: _a,
		fromArray: _b,
		range: _c,
		foldr: _d,
		map2: _g,
		map3: _i,
		map4: _l,
		map5: _o,
		sortBy: _r,
		sortWith: _U
	};

	var _14 = $_0.bind(null, _15);

	_14.arity = 2;
	_14.func = _15;
	var _1f = {
		ctor: "_Array",
		height: 0,
		table: []
	};

	var _1k = $_0.bind(null, _1l);

	_1k.arity = 2;
	_1k.func = _1l;

	var _1n = $_0.bind(null, _1o);

	_1n.arity = 2;
	_1n.func = _1o;

	var _1D = $_0.bind(null, _1E);

	_1D.arity = 2;
	_1D.func = _1E;

	var _1H = $_1.bind(null, _1I);

	_1H.arity = 3;
	_1H.func = _1I;

	var _1M = $_0.bind(null, _1N);

	_1M.arity = 2;
	_1M.func = _1N;

	var _1P = $_1.bind(null, _1Q);

	_1P.arity = 3;
	_1P.func = _1Q;

	var _1S = $_0.bind(null, _1T);

	_1S.arity = 2;
	_1S.func = _1T;

	var _1U = $_0.bind(null, _1V);

	_1U.arity = 2;
	_1U.func = _1V;

	var _1X = $_1.bind(null, _1Y);

	_1X.arity = 3;
	_1X.func = _1Y;

	var _1Z = $_1.bind(null, _20);

	_1Z.arity = 3;
	_1Z.func = _20;
	var _1e = {
		empty: _1f,
		fromList: _1h,
		toList: _K,
		initialize: _1k,
		append: _1n,
		push: _1D,
		slice: _1H,
		get: _1M,
		set: _1P,
		map: _1S,
		indexedMap: _1U,
		foldl: _1X,
		foldr: _1Z,
		length: _1j,
		toJSArray: _21,
		fromJSArray: _23
	};

	var _26 = $_9("Nothing");

	_16.arity = 2;
	_16.func = _17;

	var _2d = $_0.bind(null, _19);

	_2d.arity = 2;
	_2d.func = _19;

	var _2g = $_0.bind(null, _2h);

	_2g.arity = 2;
	_2g.func = _2h;

	var _2i = $_0.bind(null, _2j);

	_2i.arity = 2;
	_2i.func = _2j;

	var _2k = $_0.bind(null, _2l);

	_2k.arity = 2;
	_2k.func = _2l;

	var _2n = $_1.bind(null, _2o);

	_2n.arity = 3;
	_2n.func = _2o;

	var _2p = $_2.bind(null, _2q);

	_2p.arity = 4;
	_2p.func = _2q;

	var _2r = $_3.bind(null, _2s);

	_2r.arity = 5;
	_2r.func = _2s;

	var _2t = $_4.bind(null, _2u);

	_2t.arity = 6;
	_2t.func = _2u;

	var _2v = $_5.bind(null, _2w);

	_2v.arity = 7;
	_2v.func = _2w;

	var _2x = $_6.bind(null, _2y);

	_2x.arity = 8;
	_2x.func = _2y;

	var _2z = $_7.bind(null, _2A);

	_2z.arity = 9;
	_2z.func = _2A;

	var _2C = $_0.bind(null, _2D);

	_2C.arity = 2;
	_2C.func = _2D;

	var _2F = $_1.bind(null, _2G);

	_2F.arity = 3;
	_2F.func = _2G;

	var _2H = $_2.bind(null, _2I);

	_2H.arity = 4;
	_2H.func = _2I;

	var _2J = $_3.bind(null, _2K);

	_2J.arity = 5;
	_2J.func = _2K;

	var _2L = $_4.bind(null, _2M);

	_2L.arity = 6;
	_2L.func = _2M;

	var _2N = $_5.bind(null, _2O);

	_2N.arity = 7;
	_2N.func = _2O;

	var _2P = $_6.bind(null, _2Q);

	_2P.arity = 8;
	_2P.func = _2Q;

	var _2R = $_7.bind(null, _2S);

	_2R.arity = 9;
	_2R.func = _2S;

	var _2T = $_0.bind(null, _2U);

	_2T.arity = 2;
	_2T.func = _2U;

	var _2V = $_0.bind(null, _2W);

	_2V.arity = 2;
	_2V.func = _2W;
	var _13 = {
		encode: _14,
		runOnString: _16,
		run: _2d,
		decodeNull: _2e,
		decodePrimitive: _2f,
		decodeContainer: _2g,
		decodeField: _2i,
		decodeObject1: _2k,
		decodeObject2: _2n,
		decodeObject3: _2p,
		decodeObject4: _2r,
		decodeObject5: _2t,
		decodeObject6: _2v,
		decodeObject7: _2x,
		decodeObject8: _2z,
		decodeKeyValuePairs: _2B,
		decodeTuple1: _2C,
		decodeTuple2: _2F,
		decodeTuple3: _2H,
		decodeTuple4: _2J,
		decodeTuple5: _2L,
		decodeTuple6: _2N,
		decodeTuple7: _2P,
		decodeTuple8: _2R,
		andThen: _2T,
		customAndThen: _2V,
		fail: _2X,
		succeed: _2Y,
		oneOf: _2Z,
		identity: _30,
		encodeNull: null,
		encodeArray: _21,
		encodeList: _a,
		encodeObject: _31,
		equality: _32
	};

	var _3x = $_8.bind(null, "div");

	var _3w = $_0.bind(null, _3x);

	_3w.arity = 2;
	_3w.func = _3x;

	var _3D = $_0.bind(null, _3E);

	_3D.arity = 2;
	_3D.func = _3E;
	_3B.arity = 2;
	_3B.func = _3C;

	var _3H = $_8.bind(null, "section");

	var _3G = $_0.bind(null, _3H);

	_3G.arity = 2;
	_3G.func = _3H;

	var _3I = $_0.bind(null, _3J);

	_3I.arity = 2;
	_3I.func = _3J;

	var _3N = $_8.bind(null, "header");

	var _3M = $_0.bind(null, _3N);

	_3M.arity = 2;
	_3M.func = _3N;

	var _3P = $_8.bind(null, "h1");

	var _3O = $_0.bind(null, _3P);

	_3O.arity = 2;
	_3O.func = _3P;

	var _3S = $_8.bind(null, "input");

	var _3R = $_0.bind(null, _3S);

	_3R.arity = 2;
	_3R.func = _3S;

	var _3V = $_0.bind(null, _3W);

	_3V.arity = 2;
	_3V.func = _3W;

	var _42 = $_1.bind(null, _43);

	_42.arity = 3;
	_42.func = _43;
	var _44 = {
		stopPropagation: false,
		preventDefault: false
	};
	_40.arity = 2;
	_40.func = _41;
	var _45 = {
		ctor: "<decoder>",
		tag: "field",
		field: "target",
		decoder: {
			ctor: "<decoder>",
			tag: "field",
			field: "value",
			decoder: {
				ctor: "<decoder>",
				tag: "string"
			}
		}
	};

	var _4a = $_9("NoOp");

	var _4b = {
		ctor: "<decoder>",
		tag: "field",
		field: "keyCode",
		decoder: {
			ctor: "<decoder>",
			tag: "int"
		}
	};

	var _4d = $_9("Add");

	var _4e = $_1.bind(null, _4f);

	_4e.arity = 3;
	_4e.func = _4f;

	var _4m = $_0.bind(null, _4n);

	_4m.arity = 2;
	_4m.func = _4n;
	_4j.arity = 2;
	_4j.func = _4k;

	var _4t = $_8.bind(null, "label");

	var _4s = $_0.bind(null, _4t);

	_4s.arity = 2;
	_4s.func = _4t;

	var _4A = $_8.bind(null, "li");

	var _4z = $_0.bind(null, _4A);

	_4z.arity = 2;
	_4z.func = _4A;

	var _4C = $_0.bind(null, _4D);

	_4C.arity = 2;
	_4C.func = _4D;

	var _4F = $_0.bind(null, _4G);

	_4F.arity = 2;
	_4F.func = _4G;

	var _4I = $_0.bind(null, _4J);

	_4I.arity = 2;
	_4I.func = _4J;

	var _4L = $_0.bind(null, _4M);

	_4L.arity = 2;
	_4L.func = _4M;

	var _4O = $_8.bind(null, "button");

	var _4N = $_0.bind(null, _4O);

	_4N.arity = 2;
	_4N.func = _4O;

	var _4S = $_0.bind(null, _4T);

	_4S.arity = 2;
	_4S.func = _4T;

	var _4U = $_0.bind(null, _4V);

	_4U.arity = 2;
	_4U.func = _4V;

	var _4W = $_1.bind(null, _4X);

	_4W.arity = 3;
	_4W.func = _4X;

	var _4Y = $_1.bind(null, _4Z);

	_4Y.arity = 3;
	_4Y.func = _4Z;

	var _50 = $_0.bind(null, _51);

	_50.arity = 2;
	_50.func = _51;

	var _52 = $_0.bind(null, _53);

	_52.arity = 2;
	_52.func = _53;
	var _4R = {
		"<|": _4S,
		"|>": _4U,
		">>": _4W,
		"<<": _4Y,
		"++": _B,
		"||": undefined,
		"&&": undefined,
		">=": undefined,
		"<=": undefined,
		">": undefined,
		"<": undefined,
		"/=": undefined,
		"==": undefined,
		"^": undefined,
		"%": _50,
		"//": _52,
		"/": undefined,
		"*": undefined,
		"-": undefined,
		"+": undefined
	};

	var _54 = $_0.bind(null, _55);

	_54.arity = 2;
	_54.func = _55;
	_4g.arity = 2;
	_4g.func = _4h;

	var _5a = $_1.bind(null, _5b);

	_5a.arity = 3;
	_5a.func = _5b;

	var _5d = $_8.bind(null, "footer");

	var _5c = $_0.bind(null, _5d);

	_5c.arity = 2;
	_5c.func = _5d;

	var _5h = $_8.bind(null, "span");

	var _5g = $_0.bind(null, _5h);

	_5g.arity = 2;
	_5g.func = _5h;

	var _5j = $_8.bind(null, "strong");

	var _5i = $_0.bind(null, _5j);

	_5i.arity = 2;
	_5i.func = _5j;

	var _5m = $_8.bind(null, "ul");

	var _5l = $_0.bind(null, _5m);

	_5l.arity = 2;
	_5l.func = _5m;

	var _5r = $_8.bind(null, "a");

	var _5q = $_0.bind(null, _5r);

	_5q.arity = 2;
	_5q.func = _5r;
	_5n.arity = 3;
	_5n.func = _5o;

	var _5u = $_9("DeleteComplete");

	_57.arity = 2;
	_57.func = _58;
	var _5v = {
		type: "node",
		tag: "footer",
		facts: {
			className: "info"
		},
		children: [{
			type: "node",
			tag: "p",
			facts: {},
			children: [{
				type: "text",
				text: "Double-click to edit a todo"
			}],
			namespace: undefined,
			descendantsCount: 1
		}, {
			type: "node",
			tag: "p",
			facts: {},
			children: [{
				type: "text",
				text: "Written by "
			}, {
				type: "node",
				tag: "a",
				facts: {
					href: "https://github.com/evancz"
				},
				children: [{
					type: "text",
					text: "Evan Czaplicki"
				}],
				namespace: undefined,
				descendantsCount: 1
			}],
			namespace: undefined,
			descendantsCount: 3
		}, {
			type: "node",
			tag: "p",
			facts: {},
			children: [{
				type: "text",
				text: "Part of "
			}, {
				type: "node",
				tag: "a",
				facts: {
					href: "http://todomvc.com"
				},
				children: [{
					type: "text",
					text: "TodoMVC"
				}],
				namespace: undefined,
				descendantsCount: 1
			}],
			namespace: undefined,
			descendantsCount: 3
		}],
		namespace: undefined,
		descendantsCount: 10
	};

	var _5V = $_0.bind(null, _5W);

	_5V.arity = 2;
	_5V.func = _5W;
	var _5U = {
		"!": _5V
	};

	var _5Y = $_0.bind(null, _5Z);

	_5Y.arity = 2;
	_5Y.func = _5Z;
	_5S.arity = 2;
	_5S.func = _5T;
	var _62 = {
		type: "node",
		branches: _7
	};
	var _3r = {
		init: {
			ctor: "_Tuple2",
			_0: {
				entries: _7,
				visibility: "All",
				field: "",
				uid: 0
			},
			_1: {
				type: "node",
				branches: _7
			}
		},
		view: _3v,
		update: _5S,
		subscriptions: _61
	};
	var _3o = {
		main: {
			init: _3q,
			update: _5S,
			subscriptions: _61,
			view: _3v,
			renderer: _X
		}
	};

	var _69 = $_0.bind(null, _6a);

	_69.arity = 2;
	_69.func = _6a;

	var _6b = $_0.bind(null, _6c);

	_6b.arity = 2;
	_6b.func = _6c;
	var _6h = [];
	var $1 = false;

	var _6m = $_0.bind(null, _6n);

	_6m.arity = 2;
	_6m.func = _6n;
	var _65 = {
		succeed: _66,
		fail: _67,
		nativeBinding: _68,
		andThen: _69,
		onError: _6b,
		receive: _6d,
		spawn: _6e,
		kill: _6k,
		sleep: _6l,
		send: _6m,
		rawSpawn: _6f,
		rawSend: _6o
	};

	var _6u = $_0.bind(null, _6v);

	_6u.arity = 2;
	_6u.func = _6v;
	var _6s = {
		focus: {
			tag: "cmd",
			cmdMap: _6u,
			converter: _6w,
			isForeign: true
		}
	};
	window.Elm = {
		Todo: {
			worker: _2,
			embed: _6E,
			fullscreen: _6F
		}
	};
}).call(this);