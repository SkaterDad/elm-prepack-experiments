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
		return _3A(tag, factList, kidList);
	}

	function _2(flags) {
		return _3(_$0.undefined, flags, false);
	}

	function _3(rootDomNode, flags, withRenderer) {
		try {
			var program = _4("Todo", _3q);

			if (!withRenderer) {
				program.renderer = _5Z;
			}

			return _60("Todo", program, rootDomNode, flags);
		} catch (e) {
			rootDomNode.innerHTML = _6z(e.message);
			throw e;
		}
	}

	function _4(moduleName, wrappedMain) {
		var main = wrappedMain.main;

		if (typeof main.init === 'undefined') {
			var emptyBag = _5(_6.Nil);

			var noChange = _t.Tuple2(_t.Tuple0, emptyBag);

			return _1L({
				init: function () {
					return noChange;
				},
				view: function () {
					return main;
				},
				update: _3n(function () {
					return noChange;
				}),
				subscriptions: function () {
					return emptyBag;
				}
			});
		}

		var flags = wrappedMain.flags;
		var init = flags ? _3o(moduleName, main.init, flags) : _3p(moduleName, main.init);
		return _1L({
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

	function _1A(a) {
		return $_0.call(this, _1B, a);
	}

	function _r(a) {
		return $_0.call(this, _s, a);
	}

	function _1V(a) {
		return $_0.call(this, _1W, a);
	}

	function _3D(a) {
		return $_0.call(this, _3E, a);
	}

	function _3Z(a) {
		return $_0.call(this, _40, a);
	}

	function _4g(a) {
		return $_0.call(this, _4h, a);
	}

	function _4d(a) {
		return $_0.call(this, _4e, a);
	}

	function _55(a) {
		return $_0.call(this, _56, a);
	}

	function _5O(a) {
		return $_0.call(this, _5P, a);
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

	function _5j(a) {
		return $_1.call(this, _5k, a);
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

	function _u(x, y) {
		var stack = [];

		var isEqual = _v(x, y, 0, stack);

		var pair;

		while (isEqual && (pair = stack.pop())) {
			isEqual = _v(pair.x, pair.y, 0, stack);
		}

		return isEqual;
	}

	function _v(x, y, depth, stack) {
		if (depth > 100) {
			stack.push({
				x: x,
				y: y
			});
			return true;
		}

		if (x === y) {
			return true;
		}

		if (typeof x !== 'object') {
			if (typeof x === 'function') {
				throw new _$0.Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.' + ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#==' + ' which describes why it is this way and what the better version will look like.');
			}

			return false;
		}

		if (x === null || y === null) {
			return false;
		}

		if (x instanceof _$0.Date) {
			return x.getTime() === y.getTime();
		}

		if (!('ctor' in x)) {
			for (var key in x) {
				if (!_v(x[key], y[key], depth + 1, stack)) {
					return false;
				}
			}

			return true;
		} // convert Dicts and Sets to lists


		if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin') {
			x = _w(x);
			y = _w(y);
		}

		if (x.ctor === 'Set_elm_builtin') {
			x = _elm_lang$core$Set$toList(x);
			y = _elm_lang$core$Set$toList(y);
		} // check if lists are equal without recursion


		if (x.ctor === '::') {
			var a = x;
			var b = y;

			while (a.ctor === '::' && b.ctor === '::') {
				if (!_v(a._0, b._0, depth + 1, stack)) {
					return false;
				}

				a = a._1;
				b = b._1;
			}

			return a.ctor === b.ctor;
		} // check if Arrays are equal


		if (x.ctor === '_Array') {
			var xs = _B.toJSArray(x);

			var ys = _B.toJSArray(y);

			if (xs.length !== ys.length) {
				return false;
			}

			for (var i = 0; i < xs.length; i++) {
				if (!_v(xs[i], ys[i], depth + 1, stack)) {
					return false;
				}
			}

			return true;
		}

		if (!_v(x.ctor, y.ctor, depth + 1, stack)) {
			return false;
		}

		for (var key in x) {
			if (!_v(x[key], y[key], depth + 1, stack)) {
				return false;
			}
		}

		return true;
	}

	function _w(dict) {
		return _k(_x, _z(function (key, value, list) {
			return _f(_A['::'], {
				ctor: '_Tuple2',
				_0: key,
				_1: value
			}, list);
		}), _6.fromArray([]), dict);
	}

	function _y(f, acc, t) {
		foldr: while (true) {
			var _p0 = t;

			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
				    _v2 = _k(f, _p0._1, _p0._2, _k(_x, f, acc, _p0._4)),
				    _v3 = _p0._3;

				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	}

	function _z(fun) {
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

	function _E(list) {
		if (list.ctor === '[]') {
			return _C;
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

				_F(leaf, nodes);

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

			_F(leaf, nodes);
		} // Go through all of the nodes and eventually push them into higher nodes.


		for (var h = 0; h < nodes.length - 1; h++) {
			if (nodes[h].table.length > 0) {
				_F(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];

		if (head.height > 0 && head.table.length === 1) {
			return head.table[0];
		} else {
			return head;
		}
	}

	function _F(toPush, nodes) {
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

		var len = _G(toPush);

		if (nodes[h].lengths.length > 0) {
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}

		nodes[h].lengths.push(len);

		if (nodes[h].table.length === 32) {
			_F(nodes[h], nodes);

			nodes[h] = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
		}
	}

	function _G(array) {
		if (array.height === 0) {
			return array.table.length;
		} else {
			return array.lengths[array.lengths.length - 1];
		}
	}

	function _H(a) {
		return _I(_6.Nil, a);
	}

	function _I(list, a) {
		for (var i = a.table.length - 1; i >= 0; i--) {
			list = a.height === 0 ? _6.Cons(a.table[i], list) : _I(list, a.table[i]);
		}

		return list;
	}

	function _K(len, f) {
		if (len <= 0) {
			return _C;
		}

		var h = _$0.Math.floor(_$0.Math.log(len) / _$0.Math.log(32));

		return _L(f, h, 0, len);
	}

	function _L(f, h, from, to) {
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
			table[i] = _L(f, h - 1, from + i * step, _$0.Math.min(from + (i + 1) * step, to));
			lengths[i] = _G(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}

		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function _N(a, b) {
		if (a.table.length === 0) {
			return b;
		}

		if (b.table.length === 0) {
			return a;
		}

		var c = _O(a, b); // Check if both nodes can be crunshed together.


		if (c[0].table.length + c[1].table.length <= 32) {
			if (c[0].table.length === 0) {
				return c[1];
			}

			if (c[1].table.length === 0) {
				return c[0];
			} // Adjust .table and .lengths


			c[0].table = c[0].table.concat(c[1].table);

			if (c[0].height > 0) {
				var len = _G(c[0]);

				for (var i = 0; i < c[1].lengths.length; i++) {
					c[1].lengths[i] += len;
				}

				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0) {
			var toRemove = _V(a, b);

			if (toRemove > 2) {
				c = _W(c[0], c[1], toRemove);
			}
		}

		return _11(c[0], c[1]);
	}

	function _O(a, b) {
		if (a.height === 0 && b.height === 0) {
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1) {
			if (a.height === b.height) {
				a = _P(a);
				b = _P(b);

				var appended = _O(_Q(a), _R(b));

				_S(a, appended[1]);

				_T(b, appended[0]);
			} else if (a.height > b.height) {
				a = _P(a);

				var appended = _O(_Q(a), b);

				_S(a, appended[0]);

				b = _U(appended[1], appended[1].height + 1);
			} else {
				b = _P(b);

				var appended = _O(a, _R(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;

				_T(b, appended[left]);

				a = _U(appended[right], appended[right].height + 1);
			}
		} // Check if balancing is needed and return based on that.


		if (a.table.length === 0 || b.table.length === 0) {
			return [a, b];
		}

		var toRemove = _V(a, b);

		if (toRemove <= 2) {
			return [a, b];
		}

		return _W(a, b, toRemove);
	}

	function _P(a) {
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

	function _Q(a) {
		return a.table[a.table.length - 1];
	}

	function _R(a) {
		return a.table[0];
	}

	function _S(parent, node) {
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = _G(node);
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function _T(parent, node) {
		if (node.table.length > 0) {
			parent.table[0] = node;
			parent.lengths[0] = _G(node);

			var len = _G(parent.table[0]);

			for (var i = 1; i < parent.lengths.length; i++) {
				len += _G(parent.table[i]);
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

	function _U(tree, h) {
		if (h === tree.height) {
			return tree;
		}

		return {
			ctor: '_Array',
			height: h,
			table: [_U(tree, h - 1)],
			lengths: [_G(tree)]
		};
	}

	function _V(a, b) {
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

	function _W(a, b, toRemove) {
		var newA = _X(a.height, _$0.Math.min(32, a.table.length + b.table.length - toRemove));

		var newB = _X(a.height, newA.table.length - (a.table.length + b.table.length - toRemove)); // Skip the slots with size M. More precise: copy the slot references
		// to the new node


		var read = 0;

		while (_Y(a.table, b.table, read).table.length % 32 === 0) {
			_Z(newA.table, newB.table, read, _Y(a.table, b.table, read));

			_Z(newA.lengths, newB.lengths, read, _Y(a.lengths, b.lengths, read));

			read++;
		} // Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.


		var write = read;
		var slot = new _X(a.height - 1, 0);
		var from = 0; // If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.

		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove) {
			// Find out the max possible items for copying.
			var source = _Y(a.table, b.table, read);

			var to = _$0.Math.min(32 - slot.table.length, source.table.length); // Copy and adjust size table.


			slot.table = slot.table.concat(source.table.slice(from, to));

			if (slot.height > 0) {
				var len = slot.lengths.length;

				for (var i = len; i < len + to - from; i++) {
					slot.lengths[i] = _G(slot.table[i]);
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
				_10(newA, newB, write, slot);

				slot = _X(a.height - 1, 0);
				write++;
			}
		} // Cleanup after the loop. Copy the last slot into the new nodes.


		if (slot.table.length > 0) {
			_10(newA, newB, write, slot);

			write++;
		} // Shift the untouched slots to the left


		while (read < a.table.length + b.table.length) {
			_10(newA, newB, write, _Y(a.table, b.table, read));

			read++;
			write++;
		}

		return [newA, newB];
	}

	function _X(h, length) {
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

	function _Y(a, b, index) {
		return index < a.length ? a[index] : b[index - a.length];
	}

	function _Z(a, b, index, value) {
		if (index < a.length) {
			a[index] = value;
		} else {
			b[index - a.length] = value;
		}
	}

	function _10(a, b, index, slot) {
		_Z(a.table, b.table, index, slot);

		var l = index === 0 || index === a.lengths.length ? 0 : _Y(a.lengths, a.lengths, index - 1);

		_Z(a.lengths, b.lengths, index, l + _G(slot));
	}

	function _11(a, b) {
		return {
			ctor: '_Array',
			height: a.height + 1,
			table: [a, b],
			lengths: [_G(a), _G(a) + _G(b)]
		};
	}

	function _13(item, a) {
		var pushed = _14(item, a);

		if (pushed !== null) {
			return pushed;
		}

		var newTree = _15(item, a.height);

		return _11(a, newTree);
	}

	function _14(item, a) {
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


		var pushed = _14(item, _Q(a)); // There was space in the bottom right tree, so the slot will
		// be updated.


		if (pushed !== null) {
			var newA = _P(a);

			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		} // When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.


		if (a.table.length < 32) {
			var newSlot = _15(item, a.height - 1);

			var newA = _P(a);

			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + _G(newSlot));
			return newA;
		} else {
			return null;
		}
	}

	function _15(item, h) {
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
			table: [_15(item, h - 1)],
			lengths: [1]
		};
	}

	function _17(from, to, a) {
		if (from < 0) {
			from += _G(a);
		}

		if (to < 0) {
			to += _G(a);
		}

		return _18(from, _1a(to, a));
	}

	function _18(from, a) {
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


		var left = _19(from, a);

		var sliced = _18(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]); // Maybe the a node is not even needed, as sliced contains the whole slice.


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
			len += _G(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	function _19(i, a) {
		var slot = i >> 5 * a.height;

		while (a.lengths[slot] <= i) {
			slot++;
		}

		return slot;
	}

	function _1a(to, a) {
		if (to === _G(a)) {
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


		var right = _19(to, a);

		var sliced = _1a(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]); // Maybe the a node is not even needed, as sliced contains the whole slice.


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
			newA.lengths[right] = _G(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}

		return newA;
	}

	function _1c(i, array) {
		if (i < 0 || i >= _G(array)) {
			throw new _$0.Error('Index ' + i + ' is out of range. Check the length of ' + 'your array first or use getMaybe or getWithDefault.');
		}

		return _1d(i, array);
	}

	function _1d(i, array) {
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

	function _1f(i, item, array) {
		if (i < 0 || _G(array) <= i) {
			return array;
		}

		return _1g(i, item, array);
	}

	function _1g(i, item, array) {
		array = _P(array);

		if (array.height === 0) {
			array.table[i] = item;
		} else {
			var slot = _19(i, array);

			if (slot > 0) {
				i -= array.lengths[slot - 1];
			}

			array.table[slot] = _1g(i, item, array.table[slot]);
		}

		return array;
	}

	function _1i(f, a) {
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new _$0.Array(a.table.length)
		};

		if (a.height > 0) {
			newA.lengths = a.lengths;
		}

		for (var i = 0; i < a.table.length; i++) {
			newA.table[i] = a.height === 0 ? f(a.table[i]) : _1i(f, a.table[i]);
		}

		return newA;
	}

	function _1k(f, a) {
		return _1l(f, a, 0);
	}

	function _1l(f, a, from) {
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new _$0.Array(a.table.length)
		};

		if (a.height > 0) {
			newA.lengths = a.lengths;
		}

		for (var i = 0; i < a.table.length; i++) {
			newA.table[i] = a.height === 0 ? _f(f, from + i, a.table[i]) : _1l(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
		}

		return newA;
	}

	function _1n(f, b, a) {
		if (a.height === 0) {
			for (var i = 0; i < a.table.length; i++) {
				b = _f(f, a.table[i], b);
			}
		} else {
			for (var i = 0; i < a.table.length; i++) {
				b = _1n(f, b, a.table[i]);
			}
		}

		return b;
	}

	function _1p(f, b, a) {
		if (a.height === 0) {
			for (var i = a.table.length; i--;) {
				b = _f(f, a.table[i], b);
			}
		} else {
			for (var i = a.table.length; i--;) {
				b = _1p(f, b, a.table[i]);
			}
		}

		return b;
	}

	function _1q(a) {
		var jsArray = new _$0.Array(_G(a));

		_1r(jsArray, 0, a);

		return jsArray;
	}

	function _1r(jsArray, i, a) {
		for (var t = 0; t < a.table.length; t++) {
			if (a.height === 0) {
				jsArray[i + t] = a.table[t];
			} else {
				var inc = t === 0 ? 0 : a.lengths[t - 1];

				_1r(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function _1s(jsArray) {
		if (jsArray.length === 0) {
			return _C;
		}

		var h = _$0.Math.floor(_$0.Math.log(jsArray.length) / _$0.Math.log(32));

		return _1t(jsArray, h, 0, jsArray.length);
	}

	function _1t(jsArray, h, from, to) {
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
			table[i] = _1t(jsArray, h - 1, from + i * step, _$0.Math.min(from + (i + 1) * step, to));
			lengths[i] = _G(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}

		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function _1u(x, y) {
		if (typeof x !== 'object') {
			return x === y ? 0 : x < y ? -1 : 1;
		}

		if (x instanceof _$0.String) {
			var a = x.valueOf();
			var b = y.valueOf();
			return a === b ? 0 : a < b ? -1 : 1;
		}

		if (x.ctor === '::' || x.ctor === '[]') {
			while (x.ctor === '::' && y.ctor === '::') {
				var ord = _1u(x._0, y._0);

				if (ord !== 0) {
					return ord;
				}

				x = x._1;
				y = y._1;
			}

			return x.ctor === y.ctor ? 0 : x.ctor === '[]' ? -1 : 1;
		}

		if (x.ctor.slice(0, 6) === '_Tuple') {
			var ord;
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return 0;

			if (n >= 1) {
				ord = _1u(x._0, y._0);
				if (ord !== 0) return ord;

				if (n >= 2) {
					ord = _1u(x._1, y._1);
					if (ord !== 0) return ord;

					if (n >= 3) {
						ord = _1u(x._2, y._2);
						if (ord !== 0) return ord;

						if (n >= 4) {
							ord = _1u(x._3, y._3);
							if (ord !== 0) return ord;

							if (n >= 5) {
								ord = _1u(x._4, y._4);
								if (ord !== 0) return ord;

								if (n >= 6) {
									ord = _1u(x._5, y._5);
									if (ord !== 0) return ord;
									if (n >= 7) throw new _$0.Error('Comparison error: ' + err);
								}
							}
						}
					}
				}
			}

			return 0;
		}

		throw new _$0.Error('Comparison error: comparison is only defined on ints, ' + 'floats, times, chars, strings, lists of comparable values, ' + 'and tuples of comparable values.');
	}

	function _1w(x, y) {
		return {
			ctor: '_Tuple2',
			_0: x,
			_1: y
		};
	}

	function _1x(c) {
		return new _$0.String(c);
	}

	function _1y(oldRecord, updatedFields) {
		var newRecord = {};

		for (var key in oldRecord) {
			var value = key in updatedFields ? updatedFields[key] : oldRecord[key];
			newRecord[key] = value;
		}

		return newRecord;
	}

	function _1z(_) {
		return $0++;
	}

	function _1B(xs, ys) {
		// append Strings
		if (typeof xs === 'string') {
			return xs + ys;
		} // append Lists


		if (xs.ctor === '[]') {
			return ys;
		}

		var root = _1C(xs._0, _1D);

		var curr = root;
		xs = xs._1;

		while (xs.ctor !== '[]') {
			curr._1 = _1C(xs._0, _1D);
			xs = xs._1;
			curr = curr._1;
		}

		curr._1 = ys;
		return root;
	}

	function _1C(hd, tl) {
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}

	function _1E(moduleName, region) {
		return function (message) {
			throw new _$0.Error('Ran into a `Debug.crash` in module `' + moduleName + '` ' + _1F(region) + '\n' + 'The message provided by the code author is:\n\n    ' + message);
		};
	}

	function _1F(region) {
		if (region.start.line == region.end.line) {
			return 'on line ' + region.start.line;
		}

		return 'between lines ' + region.start.line + ' and ' + region.end.line;
	}

	function _1G(moduleName, region, value) {
		return function (message) {
			throw new _$0.Error('Ran into a `Debug.crash` in module `' + moduleName + '`\n\n' + 'This was caused by the `case` expression ' + _1F(region) + '.\n' + 'One of the branches ended with a crash and the following value got through:\n\n    ' + _1H(value) + '\n\n' + 'The message provided by the code author is:\n\n    ' + message);
		};
	}

	function _1H(v) {
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
			return '\'' + _1I(v, true) + '\'';
		}

		if (type === 'string') {
			return '"' + _1I(v, false) + '"';
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
					output.push(_1H(v[k]));
				}

				return '(' + output.join(',') + ')';
			}

			if (ctorStarter === '_Task') {
				return '<task>';
			}

			if (v.ctor === '_Array') {
				var list = _H(v);

				return 'Array.fromList ' + _1H(list);
			}

			if (v.ctor === '<decoder>') {
				return '<decoder>';
			}

			if (v.ctor === '_Process') {
				return '<process:' + v.id + '>';
			}

			if (v.ctor === '::') {
				var output = '[' + _1H(v._0);

				v = v._1;

				while (v.ctor === '::') {
					output += ',' + _1H(v._0);
					v = v._1;
				}

				return output + ']';
			}

			if (v.ctor === '[]') {
				return '[]';
			}

			if (v.ctor === 'Set_elm_builtin') {
				return 'Set.fromList ' + _1H(_elm_lang$core$Set$toList(v));
			}

			if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin') {
				return 'Dict.fromList ' + _1H(_w(v));
			}

			var output = '';

			for (var i in v) {
				if (i === 'ctor') continue;

				var str = _1H(v[i]);

				var c0 = str[0];
				var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
				output += ' ' + (parenless ? str : '(' + str + ')');
			}

			return v.ctor + output;
		}

		if (type === 'object') {
			if (v instanceof _$0.Date) {
				return '<' + v.toString() + '>';
			}

			if (v.elm_web_socket) {
				return '<websocket>';
			}

			var output = [];

			for (var k in v) {
				output.push(k + ' = ' + _1H(v[k]));
			}

			if (output.length === 0) {
				return '{}';
			}

			return '{ ' + output.join(', ') + ' }';
		}

		return '<internal structure>';
	}

	function _1I(str, isChar) {
		var s = str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

		if (isChar) {
			return s.replace(/\'/g, '\\\'');
		} else {
			return s.replace(/\"/g, '\\"');
		}
	}

	function _1K(f, xs) {
		return _b(_a(xs).sort(function (a, b) {
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	function _1L(details) {
		return {
			init: details.init,
			update: details.update,
			subscriptions: details.subscriptions,
			view: details.view,
			renderer: _1M
		};
	}

	function _1M(parent, tagger, initialVirtualNode) {
		var eventNode = {
			tagger: tagger,
			parent: _$0.undefined
		};

		var domNode = _1N(initialVirtualNode, eventNode);

		parent.appendChild(domNode);
		var state = 'NO_REQUEST';
		var currentVirtualNode = initialVirtualNode;
		var nextVirtualNode = initialVirtualNode;

		function registerVirtualNode(nextVirtualNode) {
			var patches = _35(currentVirtualNode, nextVirtualNode);

			domNode = _3f(domNode, currentVirtualNode, patches, eventNode);
			currentVirtualNode = nextVirtualNode;
		}

		return {
			update: registerVirtualNode
		};
	}

	function _1N(vNode, eventNode) {
		switch (vNode.type) {
			case 'thunk':
				if (!vNode.node) {
					vNode.node = vNode.thunk();
				}

				return _1N(vNode.node, eventNode);

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

				var domNode = _1N(subNode, subEventRoot);

				domNode.elm_event_node_ref = subEventRoot;
				return domNode;

			case 'text':
				return _$0.document.createTextNode(vNode.text);

			case 'node':
				var domNode = vNode.namespace ? _$0.document.createElementNS(vNode.namespace, vNode.tag) : _$0.document.createElement(vNode.tag);

				_1O(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++) {
					domNode.appendChild(_1N(children[i], eventNode));
				}

				return domNode;

			case 'keyed-node':
				var domNode = vNode.namespace ? _$0.document.createElementNS(vNode.namespace, vNode.tag) : _$0.document.createElement(vNode.tag);

				_1O(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++) {
					domNode.appendChild(_1N(children[i]._1, eventNode));
				}

				return domNode;

			case 'custom':
				var domNode = vNode.impl.render(vNode.model);

				_1O(domNode, eventNode, vNode.facts);

				return domNode;
		}
	}

	function _1O(domNode, eventNode, facts) {
		for (var key in facts) {
			var value = facts[key];

			switch (key) {
				case "STYLE":
					_1P(domNode, value);

					break;

				case "EVENT":
					_1Q(domNode, eventNode, value);

					break;

				case "ATTR":
					_33(domNode, value);

					break;

				case "ATTR_NS":
					_34(domNode, value);

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

	function _1P(domNode, styles) {
		var domNodeStyle = domNode.style;

		for (var key in styles) {
			domNodeStyle[key] = styles[key];
		}
	}

	function _1Q(domNode, eventNode, events) {
		var allHandlers = domNode.elm_handlers || {};

		for (var key in events) {
			var handler = allHandlers[key];
			var value = events[key];

			if (typeof value === 'undefined') {
				domNode.removeEventListener(key, handler);
				allHandlers[key] = _$0.undefined;
			} else if (typeof handler === 'undefined') {
				var handler = _1R(eventNode, value);

				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			} else {
				handler.info = value;
			}
		}

		domNode.elm_handlers = allHandlers;
	}

	function _1R(eventNode, info) {
		function eventHandler(event) {
			var info = eventHandler.info;

			var value = _f(_1S.run, info.decoder, event);

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

	function _1U(indentLevel, value) {
		return _$0.JSON.stringify(value, null, indentLevel);
	}

	function _1W(decoder, string) {
		var json;

		try {
			json = _$0.JSON.parse(string);
		} catch (e) {
			return _1X('Given an invalid JSON: ' + e.message);
		}

		return _1Y(decoder, json);
	}

	function _1X(a) {
		return {
			ctor: 'Err',
			_0: a
		};
	}

	function _1Y(decoder, value) {
		var result = _1Z(decoder, value);

		return result.tag === 'ok' ? _29(result.value) : _1X(_2a(result));
	}

	function _1Z(decoder, value) {
		switch (decoder.tag) {
			case 'bool':
				return typeof value === 'boolean' ? _20(value) : _21('a Bool', value);

			case 'int':
				if (typeof value !== 'number') {
					return _21('an Int', value);
				}

				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return _20(value);
				}

				if (_$0.isFinite(value) && !(value % 1)) {
					return _20(value);
				}

				return _21('an Int', value);

			case 'float':
				return typeof value === 'number' ? _20(value) : _21('a Float', value);

			case 'string':
				return typeof value === 'string' ? _20(value) : value instanceof _$0.String ? _20(value + '') : _21('a String', value);

			case 'null':
				return value === null ? _20(decoder.value) : _21('null', value);

			case 'value':
				return _20(value);

			case 'list':
				if (!(value instanceof _$0.Array)) {
					return _21('a List', value);
				}

				var list = _6.Nil;

				for (var i = value.length; i--;) {
					var result = _1Z(decoder.decoder, value[i]);

					if (result.tag !== 'ok') {
						return _22(i, result);
					}

					list = _6.Cons(result.value, list);
				}

				return _20(list);

			case 'array':
				if (!(value instanceof _$0.Array)) {
					return _21('an Array', value);
				}

				var len = value.length;
				var array = new _$0.Array(len);

				for (var i = len; i--;) {
					var result = _1Z(decoder.decoder, value[i]);

					if (result.tag !== 'ok') {
						return _22(i, result);
					}

					array[i] = result.value;
				}

				return _20(_B.fromJSArray(array));

			case 'maybe':
				var result = _1Z(decoder.decoder, value);

				return result.tag === 'ok' ? _20(_23(result.value)) : _20(_24);

			case 'field':
				var field = decoder.field;

				if (typeof value !== 'object' || value === null || !(field in value)) {
					return _21('an object with a field named `' + field + '`', value);
				}

				var result = _1Z(decoder.decoder, value[field]);

				return result.tag === 'ok' ? result : _25(field, result);

			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof _$0.Array) {
					return _21('an object', value);
				}

				var keyValuePairs = _6.Nil;

				for (var key in value) {
					var result = _1Z(decoder.decoder, value[key]);

					if (result.tag !== 'ok') {
						return _25(key, result);
					}

					var pair = _t.Tuple2(key, result.value);

					keyValuePairs = _6.Cons(pair, keyValuePairs);
				}

				return _20(keyValuePairs);

			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;

				for (var i = 0; i < decoders.length; i++) {
					var result = _1Z(decoders[i], value);

					if (result.tag !== 'ok') {
						return result;
					}

					answer = answer(result.value);
				}

				return _20(answer);

			case 'tuple':
				var decoders = decoder.decoders;
				var len = decoders.length;

				if (!(value instanceof _$0.Array) || value.length !== len) {
					return _21('a Tuple with ' + len + ' entries', value);
				}

				var answer = decoder.func;

				for (var i = 0; i < len; i++) {
					var result = _1Z(decoders[i], value[i]);

					if (result.tag !== 'ok') {
						return _22(i, result);
					}

					answer = answer(result.value);
				}

				return _20(answer);

			case 'customAndThen':
				var result = _1Z(decoder.decoder, value);

				if (result.tag !== 'ok') {
					return result;
				}

				var realResult = decoder.callback(result.value);

				if (realResult.ctor === 'Err') {
					return _26(realResult._0);
				}

				return _20(realResult._0);

			case 'andThen':
				var result = _1Z(decoder.decoder, value);

				return result.tag !== 'ok' ? result : _1Z(decoder.callback(result.value), value);

			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;

				while (temp.ctor !== '[]') {
					var result = _1Z(temp._0, value);

					if (result.tag === 'ok') {
						return result;
					}

					errors.push(result);
					temp = temp._1;
				}

				return _27(errors);

			case 'fail':
				return _28(decoder.msg);

			case 'succeed':
				return _20(decoder.msg);
		}
	}

	function _20(value) {
		return {
			tag: 'ok',
			value: value
		};
	}

	function _21(type, value) {
		return {
			tag: 'primitive',
			type: type,
			value: value
		};
	}

	function _22(index, nestedProblems) {
		return {
			tag: 'index',
			index: index,
			rest: nestedProblems
		};
	}

	function _23(a) {
		return {
			ctor: 'Just',
			_0: a
		};
	}

	function _25(field, nestedProblems) {
		return {
			tag: 'field',
			field: field,
			rest: nestedProblems
		};
	}

	function _26(msg) {
		return {
			tag: 'custom',
			msg: msg
		};
	}

	function _27(problems) {
		return {
			tag: 'oneOf',
			problems: problems
		};
	}

	function _28(msg) {
		return {
			tag: 'fail',
			msg: msg
		};
	}

	function _29(a) {
		return {
			ctor: 'Ok',
			_0: a
		};
	}

	function _2a(problem) {
		var context = '_';

		while (problem) {
			switch (problem.tag) {
				case 'primitive':
					return 'Expecting ' + problem.type + (context === '_' ? '' : ' at ' + context) + ' but instead got: ' + _2b(problem.value);

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
						problems[i] = _2a(problems[i]);
					}

					return 'I ran into the following problems' + (context === '_' ? '' : ' at ' + context) + ':\n\n' + problems.join('\n');

				case 'custom':
					return 'A `customDecoder` failed' + (context === '_' ? '' : ' at ' + context) + ' with the message: ' + problem.msg;

				case 'fail':
					return 'I ran into a `fail` decoder' + (context === '_' ? '' : ' at ' + context) + ': ' + problem.msg;
			}
		}
	}

	function _2b(value) {
		return value === _$0.undefined ? 'undefined' : _$0.JSON.stringify(value);
	}

	function _2d(value) {
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}

	function _2e(tag) {
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}

	function _2g(tag, decoder) {
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}

	function _2i(field, decoder) {
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}

	function _2k(f, d1) {
		return _2l(f, [d1]);
	}

	function _2l(f, decoders) {
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}

	function _2n(f, d1, d2) {
		return _2l(f, [d1, d2]);
	}

	function _2p(f, d1, d2, d3) {
		return _2l(f, [d1, d2, d3]);
	}

	function _2r(f, d1, d2, d3, d4) {
		return _2l(f, [d1, d2, d3, d4]);
	}

	function _2t(f, d1, d2, d3, d4, d5) {
		return _2l(f, [d1, d2, d3, d4, d5]);
	}

	function _2v(f, d1, d2, d3, d4, d5, d6) {
		return _2l(f, [d1, d2, d3, d4, d5, d6]);
	}

	function _2x(f, d1, d2, d3, d4, d5, d6, d7) {
		return _2l(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function _2z(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return _2l(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}

	function _2A(decoder) {
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}

	function _2C(f, d1) {
		return _2D(f, [d1]);
	}

	function _2D(f, decoders) {
		return {
			ctor: '<decoder>',
			tag: 'tuple',
			func: f,
			decoders: decoders
		};
	}

	function _2F(f, d1, d2) {
		return _2D(f, [d1, d2]);
	}

	function _2H(f, d1, d2, d3) {
		return _2D(f, [d1, d2, d3]);
	}

	function _2J(f, d1, d2, d3, d4) {
		return _2D(f, [d1, d2, d3, d4]);
	}

	function _2L(f, d1, d2, d3, d4, d5) {
		return _2D(f, [d1, d2, d3, d4, d5]);
	}

	function _2N(f, d1, d2, d3, d4, d5, d6) {
		return _2D(f, [d1, d2, d3, d4, d5, d6]);
	}

	function _2P(f, d1, d2, d3, d4, d5, d6, d7) {
		return _2D(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function _2R(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return _2D(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}

	function _2T(decoder, callback) {
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}

	function _2V(decoder, callback) {
		return {
			ctor: '<decoder>',
			tag: 'customAndThen',
			decoder: decoder,
			callback: callback
		};
	}

	function _2W(msg) {
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}

	function _2X(msg) {
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}

	function _2Y(decoders) {
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}

	function _2Z(value) {
		return value;
	}

	function _30(keyValuePairs) {
		var obj = {};

		while (keyValuePairs.ctor !== '[]') {
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}

		return obj;
	}

	function _31(a, b) {
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
				return _31(a.decoder, b.decoder);

			case 'field':
				return a.field === b.field && _31(a.decoder, b.decoder);

			case 'map-many':
			case 'tuple':
				if (a.func !== b.func) {
					return false;
				}

				return _32(a.decoders, b.decoders);

			case 'andThen':
			case 'customAndThen':
				return a.callback === b.callback && _31(a.decoder, b.decoder);

			case 'oneOf':
				return _32(a.decoders, b.decoders);
		}
	}

	function _32(aDecoders, bDecoders) {
		var len = aDecoders.length;

		if (len !== bDecoders.length) {
			return false;
		}

		for (var i = 0; i < len; i++) {
			if (!_31(aDecoders[i], bDecoders[i])) {
				return false;
			}
		}

		return true;
	}

	function _33(domNode, attrs) {
		for (var key in attrs) {
			var value = attrs[key];

			if (typeof value === 'undefined') {
				domNode.removeAttribute(key);
			} else {
				domNode.setAttribute(key, value);
			}
		}
	}

	function _34(domNode, nsAttrs) {
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

	function _35(a, b) {
		var patches = [];

		_36(a, b, patches, 0);

		return patches;
	}

	function _36(a, b, patches, index) {
		if (a === b) {
			return;
		}

		var aType = a.type;
		var bType = b.type; // Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.

		if (aType !== bType) {
			patches.push(_37('p-redraw', index, b));
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

				_36(a.node, b.node, subPatches, 0);

				if (subPatches.length > 0) {
					patches.push(_37('p-thunk', index, subPatches));
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
					patches.push(_37('p-redraw', index, b));
					return;
				} // check if taggers are "the same"


				if (nesting ? !_38(aTaggers, bTaggers) : aTaggers !== bTaggers) {
					patches.push(_37('p-tagger', index, bTaggers));
				} // diff everything below the taggers


				_36(aSubNode, bSubNode, patches, index + 1);

				return;

			case 'text':
				if (a.text !== b.text) {
					patches.push(_37('p-text', index, b.text));
					return;
				}

				return;

			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace) {
					patches.push(_37('p-redraw', index, b));
					return;
				}

				var factsDiff = _39(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_37('p-facts', index, factsDiff));
				}

				_3b(a, b, patches, index);

				return;

			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace) {
					patches.push(_37('p-redraw', index, b));
					return;
				}

				var factsDiff = _39(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_37('p-facts', index, factsDiff));
				}

				_3c(a, b, patches, index);

				return;

			case 'custom':
				if (a.impl !== b.impl) {
					patches.push(_37('p-redraw', index, b));
					return;
				}

				var factsDiff = _39(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_37('p-facts', index, factsDiff));
				}

				var patch = b.impl.diff(a, b);

				if (patch) {
					patches.push(_37('p-custom', index, patch));
					return;
				}

				return;
		}
	}

	function _37(type, index, data) {
		return {
			index: index,
			type: type,
			data: data,
			domNode: _$0.undefined,
			eventNode: _$0.undefined
		};
	}

	function _38(as, bs) {
		for (var i = 0; i < as.length; i++) {
			if (as[i] !== bs[i]) {
				return false;
			}
		}

		return true;
	}

	function _39(a, b, category) {
		var diff; // look for changes and removals

		for (var aKey in a) {
			if (aKey === "STYLE" || aKey === "EVENT" || aKey === "ATTR" || aKey === "ATTR_NS") {
				var subDiff = _39(a[aKey], b[aKey] || {}, aKey);

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

			if (aValue === bValue && aKey !== 'value' || category === "EVENT" && _3a(aValue, bValue)) {
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

	function _3a(a, b) {
		if (!a.options === b.options) {
			if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault) {
				return false;
			}
		}

		return _1S.equality(a.decoder, b.decoder);
	}

	function _3b(aParent, bParent, patches, rootIndex) {
		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length; // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

		if (aLen > bLen) {
			patches.push(_37('p-remove-last', rootIndex, aLen - bLen));
		} else if (aLen < bLen) {
			patches.push(_37('p-append', rootIndex, bChildren.slice(aLen)));
		} // PAIRWISE DIFF EVERYTHING ELSE


		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;

		for (var i = 0; i < minLen; i++) {
			index++;
			var aChild = aChildren[i];

			_36(aChild, bChildren[i], patches, index);

			index += aChild.descendantsCount || 0;
		}
	}

	function _3c(aParent, bParent, patches, rootIndex) {
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

				_36(aNode, bNode, localPatches, index);

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

				_36(aNode, bNextNode, localPatches, index);

				_3d(changes, localPatches, aKey, bNode, bIndex, inserts);

				index += aNode.descendantsCount || 0;
				index++;

				_3e(changes, localPatches, aKey, aNextNode, index);

				index += aNextNode.descendantsCount || 0;
				aIndex += 2;
				bIndex += 2;
				continue;
			} // insert b


			if (bLookAhead && newMatch) {
				index++;

				_3d(changes, localPatches, bKey, bNode, bIndex, inserts);

				_36(aNode, bNextNode, localPatches, index);

				index += aNode.descendantsCount || 0;
				aIndex += 1;
				bIndex += 2;
				continue;
			} // remove a


			if (aLookAhead && oldMatch) {
				index++;

				_3e(changes, localPatches, aKey, aNode, index);

				index += aNode.descendantsCount || 0;
				index++;

				_36(aNextNode, bNode, localPatches, index);

				index += aNextNode.descendantsCount || 0;
				aIndex += 2;
				bIndex += 1;
				continue;
			} // remove a, insert b


			if (aLookAhead && bLookAhead && aNextKey === bNextKey) {
				index++;

				_3e(changes, localPatches, aKey, aNode, index);

				_3d(changes, localPatches, bKey, bNode, bIndex, inserts);

				index += aNode.descendantsCount || 0;
				index++;

				_36(aNextNode, bNextNode, localPatches, index);

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

			_3e(changes, localPatches, a._0, aNode, index);

			index += aNode.descendantsCount || 0;
			aIndex++;
		}

		var endInserts;

		while (bIndex < bLen) {
			endInserts = endInserts || [];
			var b = bChildren[bIndex];

			_3d(changes, localPatches, b._0, b._1, _$0.undefined, endInserts);

			bIndex++;
		}

		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined') {
			patches.push(_37('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}

	function _3d(changes, localPatches, key, vnode, bIndex, inserts) {
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

			_36(entry.vnode, vnode, subPatches, entry.index);

			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};
			return;
		} // this key has already been inserted or moved, a duplicate!


		_3d(changes, localPatches, key + "_elmW6BL", vnode, bIndex, inserts);
	}

	function _3e(changes, localPatches, key, vnode, index) {
		var entry = changes[key]; // never seen this key before

		if (typeof entry === 'undefined') {
			var patch = _37('p-remove', index, _$0.undefined);

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

			_36(vnode, entry.vnode, subPatches, index);

			var patch = _37('p-remove', index, {
				patches: subPatches,
				entry: entry
			});

			localPatches.push(patch);
			return;
		} // this key has already been removed or moved, a duplicate!


		_3e(changes, localPatches, key + "_elmW6BL", vnode, index);
	}

	function _3f(rootDomNode, oldVirtualNode, patches, eventNode) {
		if (patches.length === 0) {
			return rootDomNode;
		}

		_3g(rootDomNode, oldVirtualNode, patches, eventNode);

		return _3i(rootDomNode, patches);
	}

	function _3g(domNode, vNode, patches, eventNode) {
		_3h(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}

	function _3h(domNode, vNode, patches, i, low, high, eventNode) {
		var patch = patches[i];
		var index = patch.index;

		while (index === low) {
			var patchType = patch.type;

			if (patchType === 'p-thunk') {
				_3g(domNode, vNode.node, patch.data, eventNode);
			} else if (patchType === 'p-reorder') {
				patch.domNode = domNode;
				patch.eventNode = eventNode;
				var subPatches = patch.data.patches;

				if (subPatches.length > 0) {
					_3h(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			} else if (patchType === 'p-remove') {
				patch.domNode = domNode;
				patch.eventNode = eventNode;
				var data = patch.data;

				if (typeof data !== 'undefined') {
					data.entry.data = domNode;
					var subPatches = data.patches;

					if (subPatches.length > 0) {
						_3h(domNode, vNode, subPatches, 0, low, high, eventNode);
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

				return _3h(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;

				for (var j = 0; j < vChildren.length; j++) {
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);

					if (low <= index && index <= nextLow) {
						i = _3h(childNodes[j], vChild, patches, i, low, nextLow, eventNode);

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
						i = _3h(childNodes[j], vChild, patches, i, low, nextLow, eventNode);

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

	function _3i(rootDomNode, patches) {
		for (var i = 0; i < patches.length; i++) {
			var patch = patches[i];
			var localDomNode = patch.domNode;

			var newNode = _3j(localDomNode, patch);

			if (localDomNode === rootDomNode) {
				rootDomNode = newNode;
			}
		}

		return rootDomNode;
	}

	function _3j(domNode, patch) {
		switch (patch.type) {
			case 'p-redraw':
				return _3k(domNode, patch.data, patch.eventNode);

			case 'p-facts':
				_1O(domNode, patch.eventNode, patch.data);

				return domNode;

			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;

			case 'p-thunk':
				return _3i(domNode, patch.data);

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
					domNode.appendChild(_1N(newNodes[i], patch.eventNode));
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

				entry.data = _3i(domNode, data.patches);
				return domNode;

			case 'p-reorder':
				return _3l(domNode, patch);

			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);

			default:
				throw new _$0.Error('Ran into an unknown patch!');
		}
	}

	function _3k(domNode, vNode, eventNode) {
		var parentNode = domNode.parentNode;

		var newNode = _1N(vNode, eventNode);

		if (typeof newNode.elm_event_node_ref === 'undefined') {
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}

		if (parentNode && newNode !== domNode) {
			parentNode.replaceChild(newNode, domNode);
		}

		return newNode;
	}

	function _3l(domNode, patch) {
		var data = patch.data; // remove end inserts

		var frag = _3m(data.endInserts, patch); // removals


		domNode = _3i(domNode, data.patches); // inserts

		var inserts = data.inserts;

		for (var i = 0; i < inserts.length; i++) {
			var insert = inserts[i];
			var entry = insert.entry;
			var node = entry.tag === 'move' ? entry.data : _1N(entry.vnode, patch.eventNode);
			domNode.insertBefore(node, domNode.childNodes[insert.index]);
		} // add end inserts


		if (typeof frag !== 'undefined') {
			domNode.appendChild(frag);
		}

		return domNode;
	}

	function _3m(endInserts, patch) {
		if (typeof endInserts === 'undefined') {
			return;
		}

		var frag = _$0.document.createDocumentFragment();

		for (var i = 0; i < endInserts.length; i++) {
			var insert = endInserts[i];
			var entry = insert.entry;
			frag.appendChild(entry.tag === 'move' ? entry.data : _1N(entry.vnode, patch.eventNode));
		}

		return frag;
	}

	function _3n(fun) {
		function wrapper(a) {
			return function (b) {
				return fun(a, b);
			};
		}

		wrapper.arity = 2;
		wrapper.func = fun;
		return wrapper;
	}

	function _3o(moduleName, realInit, flagDecoder) {
		return function init(flags) {
			var result = _f(_1S.run, flagDecoder, flags);

			if (result.ctor === 'Err') {
				throw new _$0.Error('You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n' + 'When trying to convert it to a usable Elm value, I run into this problem:\n\n' + result._0);
			}

			return realInit(result._0);
		};
	}

	function _3p(moduleName, realInit) {
		return function init(flags) {
			if (typeof flags !== 'undefined') {
				throw new _$0.Error('You are giving module `' + moduleName + '` an argument in JavaScript.\n' + 'This module does not take arguments though! You probably need to change the\n' + 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`');
			}

			return realInit();
		};
	}

	function _3s(_p0) {
		return _3t.init;
	}

	function _3x(model) {
		return _f(_3y, _6.fromArray([_3C('todomvc-wrapper'), _3H(_6.fromArray([{
			ctor: '_Tuple2',
			_0: 'visibility',
			_1: 'hidden'
		}]))]), _6.fromArray([_f(_3I, _6.fromArray([_3C('todoapp')]), _6.fromArray([_3K(model.field), _f(_4d, model.visibility, model.entries), _f(_55, model.visibility, model.entries)])), _5r]));
	}

	function _3A(tag, factList, kidList) {
		var organized = _3B(factList);

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

	function _3B(factList) {
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

	function _3C(name) {
		return _f(_3D, 'className', name);
	}

	function _3E(name, string) {
		return _f(_3F, name, _2Z(string));
	}

	function _3G(key, value) {
		return {
			key: key,
			value: value
		};
	}

	function _3H(value) {
		return {
			key: "STYLE",
			value: value
		};
	}

	function _3K(task) {
		return _f(_3L, _6.fromArray([_3C('header')]), _6.fromArray([_f(_3N, _6.fromArray([]), _6.fromArray([_3P('todos')])), _f(_3Q, _6.fromArray([_3C('new-todo'), _3S('What needs to be done?'), _3T(true), _3W(task), _3X('newTodo'), _3Y(_47), _48(_4c)]), _6.fromArray([]))]));
	}

	function _3P(string) {
		return {
			type: 'text',
			text: string
		};
	}

	function _3S(value) {
		return _f(_3D, 'placeholder', value);
	}

	function _3T(bool) {
		return _f(_3U, 'autofocus', bool);
	}

	function _3V(name, bool) {
		return _f(_3F, name, _2Z(bool));
	}

	function _3W(value) {
		return _f(_3D, 'value', value);
	}

	function _3X(value) {
		return _f(_3D, 'name', value);
	}

	function _3Y(tagger) {
		return _f(_3Z, 'input', _f(_2j, tagger, _44));
	}

	function _40(eventName, decoder) {
		return _k(_41, eventName, _43, decoder);
	}

	function _42(name, options, decoder) {
		return {
			key: "EVENT",
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}

	function _47(a) {
		return {
			ctor: 'UpdateField',
			_0: a
		};
	}

	function _48(msg) {
		var tagger = function (code) {
			return _t.eq(code, 13) ? msg : _49;
		};

		return _f(_3Z, 'keydown', _f(_2j, tagger, _4a));
	}

	function _4e(visibility, entries) {
		var cssVisibility = _4f(entries) ? 'hidden' : 'visible';

		var allCompleted = _f(_4g, function (_) {
			return _.completed;
		}, entries);

		var isVisible = function (todo) {
			var _p3 = visibility;

			switch (_p3) {
				case 'Completed':
					return todo.completed;

				case 'Active':
					return _4i(todo.completed);

				default:
					return true;
			}
		};

		return _f(_3I, _6.fromArray([_3C('main'), _3H(_6.fromArray([{
			ctor: '_Tuple2',
			_0: 'visibility',
			_1: cssVisibility
		}]))]), _6.fromArray([_f(_3Q, _6.fromArray([_3C('toggle-all'), _4l('checkbox'), _3X('toggle'), _4m(allCompleted), _4n(_4o(_4i(allCompleted)))]), _6.fromArray([])), _f(_4p, _6.fromArray([_4r('toggle-all')]), _6.fromArray([_3P('Mark all as complete')])), _f(_4s, _6.fromArray([_3C('todo-list')]), _f(_4u, _4w, _f(_4D, isVisible, entries)))]));
	}

	function _4f(xs) {
		var _p7 = xs;

		if (_p7.ctor === '[]') {
			return true;
		} else {
			return false;
		}
	}

	function _4h(isOkay, list) {
		return _4i(_f(_4j, function (_p2) {
			return _4i(isOkay(_p2));
		}, list));
	}

	function _4i(b) {
		return !b;
	}

	function _4k(isOkay, list) {
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

	function _4l(value) {
		return _f(_3D, 'type', value);
	}

	function _4m(bool) {
		return _f(_3U, 'checked', bool);
	}

	function _4n(msg) {
		return _f(_3Z, 'click', _2X(msg));
	}

	function _4o(a) {
		return {
			ctor: 'CheckAll',
			_0: a
		};
	}

	function _4r(value) {
		return _f(_3D, 'htmlFor', value);
	}

	function _4v(f, xs) {
		return _k(_d, _3n(function (x, acc) {
			return _f(_A['::'], f(x), acc);
		}), _6.fromArray([]), xs);
	}

	function _4w(todo) {
		return _f(_4x, _6.fromArray([_4z(_6.fromArray([{
			ctor: '_Tuple2',
			_0: 'completed',
			_1: todo.completed
		}, {
			ctor: '_Tuple2',
			_0: 'editing',
			_1: todo.editing
		}]))]), _6.fromArray([_f(_3y, _6.fromArray([_3C('view')]), _6.fromArray([_f(_3Q, _6.fromArray([_3C('toggle'), _4l('checkbox'), _4m(todo.completed), _4n(_f(_4G, todo.id, _4i(todo.completed)))]), _6.fromArray([])), _f(_4p, _6.fromArray([_4I(_f(_4J, todo.id, true))]), _6.fromArray([_3P(todo.description)])), _f(_4L, _6.fromArray([_3C('destroy'), _4n(_4N(todo.id))]), _6.fromArray([]))])), _f(_3Q, _6.fromArray([_3C('edit'), _3W(todo.description), _3X('title'), _4O(_f(_4P['++'], 'todo-', _1H(todo.id))), _3Y(_52(todo.id)), _54(_f(_4J, todo.id, false)), _48(_f(_4J, todo.id, false))]), _6.fromArray([]))]));
	}

	function _4z(list) {
		return _3C(_f(_4A, ' ', _f(_4u, _4C, _f(_4D, _4F, list))));
	}

	function _4B(sep, strs) {
		return _6.toArray(strs).join(sep);
	}

	function _4C(_p4) {
		var _p5 = _p4;
		return _p5._0;
	}

	function _4E(pred, xs) {
		var conditionalCons = _3n(function (x, xs$) {
			return pred(x) ? _f(_A['::'], x, xs$) : xs$;
		});

		return _k(_d, conditionalCons, _6.fromArray([]), xs);
	}

	function _4F(_p2) {
		var _p3 = _p2;
		return _p3._1;
	}

	function _4H(a, b) {
		return {
			ctor: 'Check',
			_0: a,
			_1: b
		};
	}

	function _4I(msg) {
		return _f(_3Z, 'dblclick', _2X(msg));
	}

	function _4K(a, b) {
		return {
			ctor: 'EditingEntry',
			_0: a,
			_1: b
		};
	}

	function _4N(a) {
		return {
			ctor: 'Delete',
			_0: a
		};
	}

	function _4O(name) {
		return _f(_3D, 'id', name);
	}

	function _4R(f, x) {
		return f(x);
	}

	function _4T(x, f) {
		return f(x);
	}

	function _4V(f, g, x) {
		return g(f(x));
	}

	function _4X(g, f, x) {
		return g(f(x));
	}

	function _4Z(a, b) {
		if (b === 0) {
			throw new _$0.Error('Cannot perform mod 0. Division by zero error.');
		}

		var r = a % b;
		var m = a === 0 ? 0 : b > 0 ? a >= 0 ? r : r + b : -_4Z(-a, -b);
		return m === b ? 0 : m;
	}

	function _51(a, b) {
		return a / b | 0;
	}

	function _53(a, b) {
		return {
			ctor: 'UpdateEntry',
			_0: a,
			_1: b
		};
	}

	function _54(msg) {
		return _f(_3Z, 'blur', _2X(msg));
	}

	function _56(visibility, entries) {
		var entriesCompleted = _57(_f(_4D, function (_) {
			return _.completed;
		}, entries));

		var entriesLeft = _57(entries) - entriesCompleted;
		return _f(_5a, _6.fromArray([_3C('footer'), _5c(_4f(entries))]), _6.fromArray([_5d(entriesLeft), _5i(visibility), _5p(entriesCompleted)]));
	}

	function _57(xs) {
		return _k(_58, _3n(function (_p4, i) {
			return i + 1;
		}), 0, xs);
	}

	function _59(func, acc, list) {
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

	function _5c(bool) {
		return _f(_3U, 'hidden', bool);
	}

	function _5d(entriesLeft) {
		var item_ = _t.eq(entriesLeft, 1) ? ' item' : ' items';
		return _f(_5e, _6.fromArray([_3C('todo-count')]), _6.fromArray([_f(_5g, _6.fromArray([]), _6.fromArray([_3P(_1H(entriesLeft))])), _3P(_f(_4P['++'], item_, ' left'))]));
	}

	function _5i(visibility) {
		return _f(_4s, _6.fromArray([_3C('filters')]), _6.fromArray([_k(_5j, '#/', 'All', visibility), _3P(' '), _k(_5j, '#/active', 'Active', visibility), _3P(' '), _k(_5j, '#/completed', 'Completed', visibility)]));
	}

	function _5k(uri, visibility, actualVisibility) {
		return _f(_4x, _6.fromArray([_4n(_5l(visibility))]), _6.fromArray([_f(_5m, _6.fromArray([_5o(uri), _4z(_6.fromArray([{
			ctor: '_Tuple2',
			_0: 'selected',
			_1: _t.eq(visibility, actualVisibility)
		}]))]), _6.fromArray([_3P(visibility)]))]));
	}

	function _5l(a) {
		return {
			ctor: 'ChangeVisibility',
			_0: a
		};
	}

	function _5o(value) {
		return _f(_3D, 'href', value);
	}

	function _5p(entriesCompleted) {
		return _f(_4L, _6.fromArray([_3C('clear-completed'), _5c(_t.eq(entriesCompleted, 0)), _4n(_5q)]), _6.fromArray([_3P(_f(_4P['++'], 'Clear completed (', _f(_4P['++'], _1H(entriesCompleted), ')')))]));
	}

	function _5P(msg, model) {
		var _p0 = msg;

		switch (_p0.ctor) {
			case 'NoOp':
				return _f(_5Q['!'], model, _6.fromArray([]));

			case 'Add':
				return _f(_5Q['!'], _t.update(model, {
					uid: model.uid + 1,
					field: '',
					entries: _5T(model.field) ? model.entries : _f(_4P['++'], model.entries, _6.fromArray([_f(_5U, model.field, model.uid)]))
				}), _6.fromArray([]));

			case 'UpdateField':
				return _f(_5Q['!'], _t.update(model, {
					field: _p0._0
				}), _6.fromArray([]));

			case 'EditingEntry':
				var _p1 = _p0._0;

				var updateEntry = function (t) {
					return _t.eq(t.id, _p1) ? _t.update(t, {
						editing: _p0._1
					}) : t;
				};

				return _f(_5Q['!'], _t.update(model, {
					entries: _f(_4u, updateEntry, model.entries)
				}), _6.fromArray([_5W(_f(_4P['++'], '#todo-', _1H(_p1)))]));

			case 'UpdateEntry':
				var updateEntry = function (t) {
					return _t.eq(t.id, _p0._0) ? _t.update(t, {
						description: _p0._1
					}) : t;
				};

				return _f(_5Q['!'], _t.update(model, {
					entries: _f(_4u, updateEntry, model.entries)
				}), _6.fromArray([]));

			case 'Delete':
				return _f(_5Q['!'], _t.update(model, {
					entries: _f(_4D, function (t) {
						return !_t.eq(t.id, _p0._0);
					}, model.entries)
				}), _6.fromArray([]));

			case 'DeleteComplete':
				return _f(_5Q['!'], _t.update(model, {
					entries: _f(_4D, function (_p2) {
						return _4i(function (_) {
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

				return _f(_5Q['!'], _t.update(model, {
					entries: _f(_4u, updateEntry, model.entries)
				}), _6.fromArray([]));

			case 'CheckAll':
				var updateEntry = function (t) {
					return _t.update(t, {
						completed: _p0._0
					});
				};

				return _f(_5Q['!'], _t.update(model, {
					entries: _f(_4u, updateEntry, model.entries)
				}), _6.fromArray([]));

			default:
				return _f(_5Q['!'], _t.update(model, {
					visibility: _p0._0
				}), _6.fromArray([]));
		}
	}

	function _5S(model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _5(commands)
		};
	}

	function _5T(str) {
		return str.length === 0;
	}

	function _5V(desc, id) {
		return {
			description: desc,
			completed: false,
			editing: false,
			id: id
		};
	}

	function _5W(value) {
		return {
			type: 'leaf',
			home: "focus",
			value: value
		};
	}

	function _5X(_p4) {
		return _5Y;
	}

	function _5Z() {
		return {
			update: function () {}
		};
	}

	function _60(moduleName, program, rootDomNode, flags) {
		var init = program.init;
		var update = program.update;
		var subscriptions = program.subscriptions;
		var view = program.view;
		var makeRenderer = program.renderer; // ambient state

		var managers = {};
		var renderer; // init and update state in main process

		var initApp = _61.nativeBinding(function (callback) {
			var results = init(flags);
			var model = results._0;
			renderer = makeRenderer(rootDomNode, enqueue, view(model));
			var cmds = results._1;
			var subs = subscriptions(model);

			_6l(managers, cmds, subs);

			callback(_61.succeed(model));
		});

		function onMessage(msg, model) {
			return _61.nativeBinding(function (callback) {
				var results = _f(update, msg, model);

				model = results._0;
				renderer.update(view(model));
				var cmds = results._1;
				var subs = subscriptions(model);

				_6l(managers, cmds, subs);

				callback(_61.succeed(model));
			});
		}

		var mainProcess = _6u(initApp, onMessage);

		function enqueue(msg) {
			_61.rawSend(mainProcess, msg);
		}

		var ports = _6v(managers, enqueue);

		return ports ? {
			ports: ports
		} : {};
	}

	function _62(value) {
		return {
			ctor: '_Task_succeed',
			value: value
		};
	}

	function _63(error) {
		return {
			ctor: '_Task_fail',
			value: error
		};
	}

	function _64(callback) {
		return {
			ctor: '_Task_nativeBinding',
			callback: callback,
			cancel: null
		};
	}

	function _66(task, callback) {
		return {
			ctor: '_Task_andThen',
			task: task,
			callback: callback
		};
	}

	function _68(task, callback) {
		return {
			ctor: '_Task_onError',
			task: task,
			callback: callback
		};
	}

	function _69(callback) {
		return {
			ctor: '_Task_receive',
			callback: callback
		};
	}

	function _6a(task) {
		return _64(function (callback) {
			var process = _6b(task);

			callback(_62(process));
		});
	}

	function _6b(task) {
		var process = {
			ctor: '_Process',
			id: _t.guid(),
			root: task,
			stack: null,
			mailbox: []
		};

		_6c(process);

		return process;
	}

	function _6c(process) {
		_6d.push(process);

		if (!$1) {
			_$0.setTimeout(_6e, 0);

			$1 = true;
		}
	}

	function _6e() {
		var numSteps = 0;
		var process;

		while (numSteps < 10000 && (process = _6d.shift())) {
			if (process.root) {
				numSteps = _6f(numSteps, process);
			}
		}

		if (!process) {
			$1 = false;
			return;
		}

		_$0.setTimeout(_6e, 0);
	}

	function _6f(numSteps, process) {
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

					_6c(process);
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

		_6c(process);

		return numSteps;
	}

	function _6g(process) {
		return _64(function (callback) {
			var root = process.root;

			if (root.ctor === '_Task_nativeBinding' && root.cancel) {
				root.cancel();
			}

			process.root = null;
			callback(_62(_t.Tuple0));
		});
	}

	function _6h(time) {
		return _64(function (callback) {
			var id = _$0.setTimeout(function () {
				callback(_62(_t.Tuple0));
			}, time);

			return function () {
				_$0.clearTimeout(id);
			};
		});
	}

	function _6j(process, msg) {
		return _64(function (callback) {
			_6k(process, msg);

			callback(_62(_t.Tuple0));
		});
	}

	function _6k(process, msg) {
		process.mailbox.push(msg);

		_6c(process);
	}

	function _6l(managers, cmdBag, subBag) {
		var effectsDict = {};

		_6m(true, cmdBag, effectsDict, null);

		_6m(false, subBag, effectsDict, null);

		for (var home in managers) {
			var fx = home in effectsDict ? effectsDict[home] : {
				cmds: _6.Nil,
				subs: _6.Nil
			};

			_61.rawSend(managers[home], {
				ctor: 'fx',
				_0: fx
			});
		}
	}

	function _6m(isCmd, bag, effectsDict, taggers) {
		switch (bag.type) {
			case 'leaf':
				var home = bag.home;

				var effect = _6n(isCmd, home, taggers, bag.value);

				effectsDict[home] = _6t(isCmd, effect, effectsDict[home]);
				return;

			case 'node':
				var list = bag.branches;

				while (list.ctor !== '[]') {
					_6m(isCmd, list._0, effectsDict, taggers);

					list = list._1;
				}

				return;

			case 'map':
				_6m(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});

				return;
		}
	}

	function _6n(isCmd, home, taggers, value) {
		function applyTaggers(x) {
			var temp = taggers;

			while (temp) {
				x = temp.tagger(x);
				temp = temp.rest;
			}

			return x;
		}

		var map = isCmd ? _6o[home].cmdMap : _6o[home].subMap;
		return _f(map, applyTaggers, value);
	}

	function _6r(tagger, value) {
		return value;
	}

	function _6s(v) {
		return v;
	}

	function _6t(isCmd, newEffect, effects) {
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

	function _6u(init, onMessage) {
		var andThen = _61.andThen;

		function loop(state) {
			var handleMsg = _61.receive(function (msg) {
				return onMessage(msg, state);
			});

			return _f(andThen, handleMsg, loop);
		}

		var task = _f(andThen, init, loop);

		return _61.rawSpawn(task);
	}

	function _6v(managers, callback) {
		var ports; // setup all necessary effect managers

		for (var key in _6o) {
			var manager = _6o[key];

			if (manager.isForeign) {
				ports = ports || {};
				ports[key] = manager.tag === 'cmd' ? _6w(key) : _6x(key, callback);
			}

			managers[key] = _6y(manager, callback);
		}

		return ports;
	}

	function _6w(name) {
		var subs = [];
		var converter = _6o[name].converter; // CREATE MANAGER

		var init = _61.succeed(null);

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

		_6o[name].init = init;
		_6o[name].onEffects = _z(onEffects); // PUBLIC API

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

	function _6x(name, callback) {
		var sentBeforeInit = [];
		var subs = _6.Nil;
		var converter = _6o[name].converter;
		var currentOnEffects = preInitOnEffects;
		var currentSend = preInitSend; // CREATE MANAGER

		var init = _61.succeed(null);

		function preInitOnEffects(router, subList, state) {
			var postInitResult = postInitOnEffects(router, subList, state);

			for (var i = 0; i < sentBeforeInit.length; i++) {
				postInitSend(sentBeforeInit[i]);
			}

			sentBeforeInit = null; // to release objects held in queue

			currentSend = postInitSend;
			currentOnEffects = postInitOnEffects;
			return postInitResult;
		}

		function postInitOnEffects(router, subList, state) {
			subs = subList;
			return init;
		}

		function onEffects(router, subList, state) {
			return currentOnEffects(router, subList, state);
		}

		_6o[name].init = init;
		_6o[name].onEffects = _z(onEffects); // PUBLIC API

		function preInitSend(value) {
			sentBeforeInit.push(value);
		}

		function postInitSend(incomingValue) {
			var result = _f(_2c, converter, incomingValue);

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

		function send(incomingValue) {
			currentSend(incomingValue);
		}

		return {
			send: send
		};
	}

	function _6y(info, callback) {
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

		var process = _6u(info.init, onMessage);

		router.self = process;
		return process;
	}

	function _6z(message) {
		return '<div style="padding-left:1em;">' + '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>' + '<pre style="padding-left:1em;">' + message + '</pre>' + '</div>';
	}

	function _6A(domNode, flags) {
		return _3(domNode, flags, true);
	}

	function _6B(flags) {
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

	var _x = $_1.bind(null, _y);

	_x.arity = 3;
	_x.func = _y;
	var _A = {
		"::": _9
	};
	var _C = {
		ctor: "_Array",
		height: 0,
		table: []
	};

	var _J = $_0.bind(null, _K);

	_J.arity = 2;
	_J.func = _K;

	var _M = $_0.bind(null, _N);

	_M.arity = 2;
	_M.func = _N;

	var _12 = $_0.bind(null, _13);

	_12.arity = 2;
	_12.func = _13;

	var _16 = $_1.bind(null, _17);

	_16.arity = 3;
	_16.func = _17;

	var _1b = $_0.bind(null, _1c);

	_1b.arity = 2;
	_1b.func = _1c;

	var _1e = $_1.bind(null, _1f);

	_1e.arity = 3;
	_1e.func = _1f;

	var _1h = $_0.bind(null, _1i);

	_1h.arity = 2;
	_1h.func = _1i;

	var _1j = $_0.bind(null, _1k);

	_1j.arity = 2;
	_1j.func = _1k;

	var _1m = $_1.bind(null, _1n);

	_1m.arity = 3;
	_1m.func = _1n;

	var _1o = $_1.bind(null, _1p);

	_1o.arity = 3;
	_1o.func = _1p;
	var _B = {
		empty: _C,
		fromList: _E,
		toList: _H,
		initialize: _J,
		append: _M,
		push: _12,
		slice: _16,
		get: _1b,
		set: _1e,
		map: _1h,
		indexedMap: _1j,
		foldl: _1m,
		foldr: _1o,
		length: _G,
		toJSArray: _1q,
		fromJSArray: _1s
	};
	var $0 = 0;

	var _1D = $_a();

	_1A.arity = 2;
	_1A.func = _1B;
	var _t = {
		eq: _u,
		cmp: _1u,
		Tuple0: {
			ctor: "_Tuple0"
		},
		Tuple2: _1w,
		chr: _1x,
		update: _1y,
		guid: _1z,
		append: _1A,
		crash: _1E,
		crashCase: _1G,
		toString: _1H
	};
	_r.arity = 2;
	_r.func = _s;

	var _1J = $_0.bind(null, _1K);

	_1J.arity = 2;
	_1J.func = _1K;
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
		sortWith: _1J
	};

	var _1T = $_0.bind(null, _1U);

	_1T.arity = 2;
	_1T.func = _1U;

	var _24 = $_9("Nothing");

	_1V.arity = 2;
	_1V.func = _1W;

	var _2c = $_0.bind(null, _1Y);

	_2c.arity = 2;
	_2c.func = _1Y;

	var _2f = $_0.bind(null, _2g);

	_2f.arity = 2;
	_2f.func = _2g;

	var _2h = $_0.bind(null, _2i);

	_2h.arity = 2;
	_2h.func = _2i;

	var _2j = $_0.bind(null, _2k);

	_2j.arity = 2;
	_2j.func = _2k;

	var _2m = $_1.bind(null, _2n);

	_2m.arity = 3;
	_2m.func = _2n;

	var _2o = $_2.bind(null, _2p);

	_2o.arity = 4;
	_2o.func = _2p;

	var _2q = $_3.bind(null, _2r);

	_2q.arity = 5;
	_2q.func = _2r;

	var _2s = $_4.bind(null, _2t);

	_2s.arity = 6;
	_2s.func = _2t;

	var _2u = $_5.bind(null, _2v);

	_2u.arity = 7;
	_2u.func = _2v;

	var _2w = $_6.bind(null, _2x);

	_2w.arity = 8;
	_2w.func = _2x;

	var _2y = $_7.bind(null, _2z);

	_2y.arity = 9;
	_2y.func = _2z;

	var _2B = $_0.bind(null, _2C);

	_2B.arity = 2;
	_2B.func = _2C;

	var _2E = $_1.bind(null, _2F);

	_2E.arity = 3;
	_2E.func = _2F;

	var _2G = $_2.bind(null, _2H);

	_2G.arity = 4;
	_2G.func = _2H;

	var _2I = $_3.bind(null, _2J);

	_2I.arity = 5;
	_2I.func = _2J;

	var _2K = $_4.bind(null, _2L);

	_2K.arity = 6;
	_2K.func = _2L;

	var _2M = $_5.bind(null, _2N);

	_2M.arity = 7;
	_2M.func = _2N;

	var _2O = $_6.bind(null, _2P);

	_2O.arity = 8;
	_2O.func = _2P;

	var _2Q = $_7.bind(null, _2R);

	_2Q.arity = 9;
	_2Q.func = _2R;

	var _2S = $_0.bind(null, _2T);

	_2S.arity = 2;
	_2S.func = _2T;

	var _2U = $_0.bind(null, _2V);

	_2U.arity = 2;
	_2U.func = _2V;
	var _1S = {
		encode: _1T,
		runOnString: _1V,
		run: _2c,
		decodeNull: _2d,
		decodePrimitive: _2e,
		decodeContainer: _2f,
		decodeField: _2h,
		decodeObject1: _2j,
		decodeObject2: _2m,
		decodeObject3: _2o,
		decodeObject4: _2q,
		decodeObject5: _2s,
		decodeObject6: _2u,
		decodeObject7: _2w,
		decodeObject8: _2y,
		decodeKeyValuePairs: _2A,
		decodeTuple1: _2B,
		decodeTuple2: _2E,
		decodeTuple3: _2G,
		decodeTuple4: _2I,
		decodeTuple5: _2K,
		decodeTuple6: _2M,
		decodeTuple7: _2O,
		decodeTuple8: _2Q,
		andThen: _2S,
		customAndThen: _2U,
		fail: _2W,
		succeed: _2X,
		oneOf: _2Y,
		identity: _2Z,
		encodeNull: null,
		encodeArray: _1q,
		encodeList: _a,
		encodeObject: _30,
		equality: _31
	};

	var _3z = $_8.bind(null, "div");

	var _3y = $_0.bind(null, _3z);

	_3y.arity = 2;
	_3y.func = _3z;

	var _3F = $_0.bind(null, _3G);

	_3F.arity = 2;
	_3F.func = _3G;
	_3D.arity = 2;
	_3D.func = _3E;

	var _3J = $_8.bind(null, "section");

	var _3I = $_0.bind(null, _3J);

	_3I.arity = 2;
	_3I.func = _3J;

	var _3M = $_8.bind(null, "header");

	var _3L = $_0.bind(null, _3M);

	_3L.arity = 2;
	_3L.func = _3M;

	var _3O = $_8.bind(null, "h1");

	var _3N = $_0.bind(null, _3O);

	_3N.arity = 2;
	_3N.func = _3O;

	var _3R = $_8.bind(null, "input");

	var _3Q = $_0.bind(null, _3R);

	_3Q.arity = 2;
	_3Q.func = _3R;

	var _3U = $_0.bind(null, _3V);

	_3U.arity = 2;
	_3U.func = _3V;

	var _41 = $_1.bind(null, _42);

	_41.arity = 3;
	_41.func = _42;
	var _43 = {
		stopPropagation: false,
		preventDefault: false
	};
	_3Z.arity = 2;
	_3Z.func = _40;
	var _44 = {
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

	var _49 = $_9("NoOp");

	var _4a = {
		ctor: "<decoder>",
		tag: "field",
		field: "keyCode",
		decoder: {
			ctor: "<decoder>",
			tag: "int"
		}
	};

	var _4c = $_9("Add");

	var _4j = $_0.bind(null, _4k);

	_4j.arity = 2;
	_4j.func = _4k;
	_4g.arity = 2;
	_4g.func = _4h;

	var _4q = $_8.bind(null, "label");

	var _4p = $_0.bind(null, _4q);

	_4p.arity = 2;
	_4p.func = _4q;

	var _4t = $_8.bind(null, "ul");

	var _4s = $_0.bind(null, _4t);

	_4s.arity = 2;
	_4s.func = _4t;

	var _4u = $_0.bind(null, _4v);

	_4u.arity = 2;
	_4u.func = _4v;

	var _4y = $_8.bind(null, "li");

	var _4x = $_0.bind(null, _4y);

	_4x.arity = 2;
	_4x.func = _4y;

	var _4A = $_0.bind(null, _4B);

	_4A.arity = 2;
	_4A.func = _4B;

	var _4D = $_0.bind(null, _4E);

	_4D.arity = 2;
	_4D.func = _4E;

	var _4G = $_0.bind(null, _4H);

	_4G.arity = 2;
	_4G.func = _4H;

	var _4J = $_0.bind(null, _4K);

	_4J.arity = 2;
	_4J.func = _4K;

	var _4M = $_8.bind(null, "button");

	var _4L = $_0.bind(null, _4M);

	_4L.arity = 2;
	_4L.func = _4M;

	var _4Q = $_0.bind(null, _4R);

	_4Q.arity = 2;
	_4Q.func = _4R;

	var _4S = $_0.bind(null, _4T);

	_4S.arity = 2;
	_4S.func = _4T;

	var _4U = $_1.bind(null, _4V);

	_4U.arity = 3;
	_4U.func = _4V;

	var _4W = $_1.bind(null, _4X);

	_4W.arity = 3;
	_4W.func = _4X;

	var _4Y = $_0.bind(null, _4Z);

	_4Y.arity = 2;
	_4Y.func = _4Z;

	var _50 = $_0.bind(null, _51);

	_50.arity = 2;
	_50.func = _51;
	var _4P = {
		"<|": _4Q,
		"|>": _4S,
		">>": _4U,
		"<<": _4W,
		"++": _1A,
		"||": undefined,
		"&&": undefined,
		">=": undefined,
		"<=": undefined,
		">": undefined,
		"<": undefined,
		"/=": undefined,
		"==": undefined,
		"^": undefined,
		"%": _4Y,
		"//": _50,
		"/": undefined,
		"*": undefined,
		"-": undefined,
		"+": undefined
	};

	var _52 = $_0.bind(null, _53);

	_52.arity = 2;
	_52.func = _53;
	_4d.arity = 2;
	_4d.func = _4e;

	var _58 = $_1.bind(null, _59);

	_58.arity = 3;
	_58.func = _59;

	var _5b = $_8.bind(null, "footer");

	var _5a = $_0.bind(null, _5b);

	_5a.arity = 2;
	_5a.func = _5b;

	var _5f = $_8.bind(null, "span");

	var _5e = $_0.bind(null, _5f);

	_5e.arity = 2;
	_5e.func = _5f;

	var _5h = $_8.bind(null, "strong");

	var _5g = $_0.bind(null, _5h);

	_5g.arity = 2;
	_5g.func = _5h;

	var _5n = $_8.bind(null, "a");

	var _5m = $_0.bind(null, _5n);

	_5m.arity = 2;
	_5m.func = _5n;
	_5j.arity = 3;
	_5j.func = _5k;

	var _5q = $_9("DeleteComplete");

	_55.arity = 2;
	_55.func = _56;
	var _5r = {
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

	var _5R = $_0.bind(null, _5S);

	_5R.arity = 2;
	_5R.func = _5S;
	var _5Q = {
		"!": _5R
	};

	var _5U = $_0.bind(null, _5V);

	_5U.arity = 2;
	_5U.func = _5V;
	_5O.arity = 2;
	_5O.func = _5P;
	var _5Y = {
		type: "node",
		branches: _7
	};
	var _3t = {
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
		view: _3x,
		update: _5O,
		subscriptions: _5X
	};
	var _3q = {
		main: {
			init: _3s,
			update: _5O,
			subscriptions: _5X,
			view: _3x,
			renderer: _1M
		}
	};

	var _65 = $_0.bind(null, _66);

	_65.arity = 2;
	_65.func = _66;

	var _67 = $_0.bind(null, _68);

	_67.arity = 2;
	_67.func = _68;
	var _6d = [];
	var $1 = false;

	var _6i = $_0.bind(null, _6j);

	_6i.arity = 2;
	_6i.func = _6j;
	var _61 = {
		succeed: _62,
		fail: _63,
		nativeBinding: _64,
		andThen: _65,
		onError: _67,
		receive: _69,
		spawn: _6a,
		kill: _6g,
		sleep: _6h,
		send: _6i,
		rawSpawn: _6b,
		rawSend: _6k
	};

	var _6q = $_0.bind(null, _6r);

	_6q.arity = 2;
	_6q.func = _6r;
	var _6o = {
		focus: {
			tag: "cmd",
			cmdMap: _6q,
			converter: _6s,
			isForeign: true
		}
	};
	window.Elm = {
		Todo: {
			worker: _2,
			embed: _6A,
			fullscreen: _6B
		}
	};
}).call(this);