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

	var _$1 = this;

	var _$2 = this.setTimeout;

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

	function $_5(onMessage, loop, state) {
		var handleMsg = _6.receive(function (msg) {
			return onMessage(msg, state);
		});

		return _F(_a, loop, handleMsg);
	}

	function $_6(onSelfMsg, router, tag, onEffects, msg, state) {
		if (msg.ctor === 'self') {
			return _l(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;

		switch (tag) {
			case 'cmd':
				return _l(onEffects, router, fx.cmds, state);

			case 'sub':
				return _l(onEffects, router, fx.subs, state);

			case 'fx':
				return _M(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	function $_7(tag, factList, kidList) {
		return _5q(tag, factList, kidList);
	}

	function $_8(flagChecker, debugWrap, impl) {
		return function (flagDecoder) {
			return function (object, moduleName, debugMetadata) {
				var checker = flagChecker(flagDecoder, moduleName);

				if (typeof debugMetadata === 'undefined') {
					_7A(impl, object, moduleName, checker);
				} else {
					_7C(_F(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	}

	function _2(node, flags) {
		while (node.lastChild) {
			node.removeChild(node.lastChild);
		}

		return _3.initialize(_82(_83.init, flags, node), _83.update, _83.subscriptions, _7B(node, _83.view));
	}

	function _1L(a) {
		return $_0.call(this, _1M, a);
	}

	function _2G(a) {
		return $_0.call(this, _2H, a);
	}

	function _2q(a) {
		return $_0.call(this, _2r, a);
	}

	function _3n(a) {
		return $_0.call(this, _3o, a);
	}

	function _2g(a) {
		return $_0.call(this, _2h, a);
	}

	function _3v(a) {
		return $_0.call(this, _3w, a);
	}

	function _20(a) {
		return $_0.call(this, _21, a);
	}

	function _4s(a) {
		return $_0.call(this, _4t, a);
	}

	function _4N(a) {
		return $_0.call(this, _4O, a);
	}

	function _5y(a) {
		return $_0.call(this, _5z, a);
	}

	function _5K(a) {
		return $_0.call(this, _5L, a);
	}

	function _4(a) {
		return $_0.call(this, _5, a);
	}

	function _7w(a) {
		return $_0.call(this, _7x, a);
	}

	function _5(router, msg) {
		return _6.nativeBinding(function (callback) {
			router.main(msg);
			callback(_6.succeed(_h.Tuple0));
		});
	}

	function _7(value) {
		return {
			ctor: '_Task_succeed',
			value: value
		};
	}

	function _8(error) {
		return {
			ctor: '_Task_fail',
			value: error
		};
	}

	function _9(callback) {
		return {
			ctor: '_Task_nativeBinding',
			callback: callback,
			cancel: null
		};
	}

	function _b(callback, task) {
		return {
			ctor: '_Task_andThen',
			callback: callback,
			task: task
		};
	}

	function _d(callback, task) {
		return {
			ctor: '_Task_onError',
			callback: callback,
			task: task
		};
	}

	function _e(callback) {
		return {
			ctor: '_Task_receive',
			callback: callback
		};
	}

	function _f(task) {
		return _9(function (callback) {
			var process = _g(task);

			callback(_7(process));
		});
	}

	function _g(task) {
		var process = {
			ctor: '_Process',
			id: _h.guid(),
			root: task,
			stack: null,
			mailbox: []
		};

		_1U(process);

		return process;
	}

	function _i(x, y) {
		var stack = [];

		var isEqual = _j(x, y, 0, stack);

		var pair;

		while (isEqual && (pair = stack.pop())) {
			isEqual = _j(pair.x, pair.y, 0, stack);
		}

		return isEqual;
	}

	function _j(x, y, depth, stack) {
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
				throw new _$1.Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.' + ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#==' + ' which describes why it is this way and what the better version will look like.');
			}

			return false;
		}

		if (x === null || y === null) {
			return false;
		}

		if (x instanceof _$1.Date) {
			return x.getTime() === y.getTime();
		}

		if (!('ctor' in x)) {
			for (var key in x) {
				if (!_j(x[key], y[key], depth + 1, stack)) {
					return false;
				}
			}

			return true;
		} // convert Dicts and Sets to lists


		if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin') {
			x = _k(x);
			y = _k(y);
		}

		if (x.ctor === 'Set_elm_builtin') {
			x = _elm_lang$core$Set$toList(x);
			y = _elm_lang$core$Set$toList(y);
		} // check if lists are equal without recursion


		if (x.ctor === '::') {
			var a = x;
			var b = y;

			while (a.ctor === '::' && b.ctor === '::') {
				if (!_j(a._0, b._0, depth + 1, stack)) {
					return false;
				}

				a = a._1;
				b = b._1;
			}

			return a.ctor === b.ctor;
		} // check if Arrays are equal


		if (x.ctor === '_Array') {
			var xs = _p.toJSArray(x);

			var ys = _p.toJSArray(y);

			if (xs.length !== ys.length) {
				return false;
			}

			for (var i = 0; i < xs.length; i++) {
				if (!_j(xs[i], ys[i], depth + 1, stack)) {
					return false;
				}
			}

			return true;
		}

		if (!_j(x.ctor, y.ctor, depth + 1, stack)) {
			return false;
		}

		for (var key in x) {
			if (!_j(x[key], y[key], depth + 1, stack)) {
				return false;
			}
		}

		return true;
	}

	function _k(dict) {
		return _l(_m, _o(function (key, value, list) {
			return {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: key,
					_1: value
				},
				_1: list
			};
		}), {
			ctor: '[]'
		}, dict);
	}

	function _l(fun, a, b, c) {
		return fun.arity === 3 ? fun.func(a, b, c) : fun(a)(b)(c);
	}

	function _2L(a) {
		return $_1.call(this, _2M, a);
	}

	function _2y(a) {
		return $_1.call(this, _2z, a);
	}

	function _43(a) {
		return $_1.call(this, _44, a);
	}

	function _4m(a) {
		return $_1.call(this, _4n, a);
	}

	function _4D(a) {
		return $_1.call(this, _4E, a);
	}

	function _4j(a) {
		return $_1.call(this, _4k, a);
	}

	function _4J(a) {
		return $_1.call(this, _4K, a);
	}

	function _n(f, acc, t) {
		foldr: while (true) {
			var _p0 = t;

			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
				    _v2 = _l(f, _p0._1, _p0._2, _l(_m, f, acc, _p0._4)),
				    _v3 = _p0._3;

				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	}

	function _o(fun) {
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

	function _s(list) {
		if (list.ctor === '[]') {
			return _q;
		} // Allocate M sized blocks (table) and write list elements to it.


		var table = new _$1.Array(32);
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

				_t(leaf, nodes);

				table = new _$1.Array(32);
				i = 0;
			}
		} // Maybe there is something left on the table.


		if (i > 0) {
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table.splice(0, i)
			};

			_t(leaf, nodes);
		} // Go through all of the nodes and eventually push them into higher nodes.


		for (var h = 0; h < nodes.length - 1; h++) {
			if (nodes[h].table.length > 0) {
				_t(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];

		if (head.height > 0 && head.table.length === 1) {
			return head.table[0];
		} else {
			return head;
		}
	}

	function _t(toPush, nodes) {
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

		var len = _u(toPush);

		if (nodes[h].lengths.length > 0) {
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}

		nodes[h].lengths.push(len);

		if (nodes[h].table.length === 32) {
			_t(nodes[h], nodes);

			nodes[h] = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
		}
	}

	function _u(array) {
		if (array.height === 0) {
			return array.table.length;
		} else {
			return array.lengths[array.lengths.length - 1];
		}
	}

	function _v(a) {
		return _w(_x.Nil, a);
	}

	function _w(list, a) {
		for (var i = a.table.length - 1; i >= 0; i--) {
			list = a.height === 0 ? _x.Cons(a.table[i], list) : _w(list, a.table[i]);
		}

		return list;
	}

	function _z(hd, tl) {
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}

	function _B(xs) {
		var out = [];

		while (xs.ctor !== '[]') {
			out.push(xs._0);
			xs = xs._1;
		}

		return out;
	}

	function _C(arr) {
		var out = _y;

		for (var i = arr.length; i--;) {
			out = _z(arr[i], out);
		}

		return out;
	}

	function _E(f, b, xs) {
		var arr = _B(xs);

		var acc = b;

		for (var i = arr.length; i--;) {
			acc = _F(f, arr[i], acc);
		}

		return acc;
	}

	function _F(fun, a, b) {
		return fun.arity === 2 ? fun.func(a, b) : fun(a)(b);
	}

	function _H(f, xs, ys) {
		var arr = [];

		while (xs.ctor !== '[]' && ys.ctor !== '[]') {
			arr.push(_F(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}

		return _C(arr);
	}

	function _J(f, xs, ys, zs) {
		var arr = [];

		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]') {
			arr.push(_l(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}

		return _C(arr);
	}

	function _32(a) {
		return $_3.call(this, _33, a);
	}

	function _2Z(a) {
		return $_3.call(this, _30, a);
	}

	function _2X(a) {
		return $_3.call(this, _2Y, a);
	}

	function _L(f, ws, xs, ys, zs) {
		var arr = [];

		while (ws.ctor !== '[]' && xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]') {
			arr.push(_M(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}

		return _C(arr);
	}

	function _M(fun, a, b, c, d) {
		return fun.arity === 4 ? fun.func(a, b, c, d) : fun(a)(b)(c)(d);
	}

	function _4x(a) {
		return $_4.call(this, _4y, a);
	}

	function _O(f, vs, ws, xs, ys, zs) {
		var arr = [];

		while (vs.ctor !== '[]' && ws.ctor !== '[]' && xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]') {
			arr.push(_P(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}

		return _C(arr);
	}

	function _P(fun, a, b, c, d, e) {
		return fun.arity === 5 ? fun.func(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
	}

	function _R(f, xs) {
		return _C(_B(xs).sort(function (a, b) {
			return _h.cmp(f(a), f(b));
		}));
	}

	function _T(f, xs) {
		return _C(_B(xs).sort(function (a, b) {
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	function _V(len, f) {
		if (len <= 0) {
			return _q;
		}

		var h = _$1.Math.floor(_$1.Math.log(len) / _$1.Math.log(32));

		return _W(f, h, 0, len);
	}

	function _W(f, h, from, to) {
		if (h === 0) {
			var table = new _$1.Array((to - from) % (32 + 1));

			for (var i = 0; i < table.length; i++) {
				table[i] = f(from + i);
			}

			return {
				ctor: '_Array',
				height: 0,
				table: table
			};
		}

		var step = _$1.Math.pow(32, h);

		var table = new _$1.Array(_$1.Math.ceil((to - from) / step));
		var lengths = new _$1.Array(table.length);

		for (var i = 0; i < table.length; i++) {
			table[i] = _W(f, h - 1, from + i * step, _$1.Math.min(from + (i + 1) * step, to));
			lengths[i] = _u(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}

		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function _Y(a, b) {
		if (a.table.length === 0) {
			return b;
		}

		if (b.table.length === 0) {
			return a;
		}

		var c = _Z(a, b); // Check if both nodes can be crunshed together.


		if (c[0].table.length + c[1].table.length <= 32) {
			if (c[0].table.length === 0) {
				return c[1];
			}

			if (c[1].table.length === 0) {
				return c[0];
			} // Adjust .table and .lengths


			c[0].table = c[0].table.concat(c[1].table);

			if (c[0].height > 0) {
				var len = _u(c[0]);

				for (var i = 0; i < c[1].lengths.length; i++) {
					c[1].lengths[i] += len;
				}

				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0) {
			var toRemove = _16(a, b);

			if (toRemove > 2) {
				c = _17(c[0], c[1], toRemove);
			}
		}

		return _1c(c[0], c[1]);
	}

	function _Z(a, b) {
		if (a.height === 0 && b.height === 0) {
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1) {
			if (a.height === b.height) {
				a = _10(a);
				b = _10(b);

				var appended = _Z(_11(a), _12(b));

				_13(a, appended[1]);

				_14(b, appended[0]);
			} else if (a.height > b.height) {
				a = _10(a);

				var appended = _Z(_11(a), b);

				_13(a, appended[0]);

				b = _15(appended[1], appended[1].height + 1);
			} else {
				b = _10(b);

				var appended = _Z(a, _12(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;

				_14(b, appended[left]);

				a = _15(appended[right], appended[right].height + 1);
			}
		} // Check if balancing is needed and return based on that.


		if (a.table.length === 0 || b.table.length === 0) {
			return [a, b];
		}

		var toRemove = _16(a, b);

		if (toRemove <= 2) {
			return [a, b];
		}

		return _17(a, b, toRemove);
	}

	function _10(a) {
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

	function _11(a) {
		return a.table[a.table.length - 1];
	}

	function _12(a) {
		return a.table[0];
	}

	function _13(parent, node) {
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = _u(node);
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function _14(parent, node) {
		if (node.table.length > 0) {
			parent.table[0] = node;
			parent.lengths[0] = _u(node);

			var len = _u(parent.table[0]);

			for (var i = 1; i < parent.lengths.length; i++) {
				len += _u(parent.table[i]);
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

	function _15(tree, h) {
		if (h === tree.height) {
			return tree;
		}

		return {
			ctor: '_Array',
			height: h,
			table: [_15(tree, h - 1)],
			lengths: [_u(tree)]
		};
	}

	function _16(a, b) {
		var subLengths = 0;

		for (var i = 0; i < a.table.length; i++) {
			subLengths += a.table[i].table.length;
		}

		for (var i = 0; i < b.table.length; i++) {
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length;
		return toRemove - (_$1.Math.floor((subLengths - 1) / 32) + 1);
	}

	function _17(a, b, toRemove) {
		var newA = _18(a.height, _$1.Math.min(32, a.table.length + b.table.length - toRemove));

		var newB = _18(a.height, newA.table.length - (a.table.length + b.table.length - toRemove)); // Skip the slots with size M. More precise: copy the slot references
		// to the new node


		var read = 0;

		while (_19(a.table, b.table, read).table.length % 32 === 0) {
			_1a(newA.table, newB.table, read, _19(a.table, b.table, read));

			_1a(newA.lengths, newB.lengths, read, _19(a.lengths, b.lengths, read));

			read++;
		} // Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.


		var write = read;
		var slot = new _18(a.height - 1, 0);
		var from = 0; // If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.

		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove) {
			// Find out the max possible items for copying.
			var source = _19(a.table, b.table, read);

			var to = _$1.Math.min(32 - slot.table.length, source.table.length); // Copy and adjust size table.


			slot.table = slot.table.concat(source.table.slice(from, to));

			if (slot.height > 0) {
				var len = slot.lengths.length;

				for (var i = len; i < len + to - from; i++) {
					slot.lengths[i] = _u(slot.table[i]);
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
				_1b(newA, newB, write, slot);

				slot = _18(a.height - 1, 0);
				write++;
			}
		} // Cleanup after the loop. Copy the last slot into the new nodes.


		if (slot.table.length > 0) {
			_1b(newA, newB, write, slot);

			write++;
		} // Shift the untouched slots to the left


		while (read < a.table.length + b.table.length) {
			_1b(newA, newB, write, _19(a.table, b.table, read));

			read++;
			write++;
		}

		return [newA, newB];
	}

	function _18(h, length) {
		if (length < 0) {
			length = 0;
		}

		var a = {
			ctor: '_Array',
			height: h,
			table: new _$1.Array(length)
		};

		if (h > 0) {
			a.lengths = new _$1.Array(length);
		}

		return a;
	}

	function _19(a, b, index) {
		return index < a.length ? a[index] : b[index - a.length];
	}

	function _1a(a, b, index, value) {
		if (index < a.length) {
			a[index] = value;
		} else {
			b[index - a.length] = value;
		}
	}

	function _1b(a, b, index, slot) {
		_1a(a.table, b.table, index, slot);

		var l = index === 0 || index === a.lengths.length ? 0 : _19(a.lengths, a.lengths, index - 1);

		_1a(a.lengths, b.lengths, index, l + _u(slot));
	}

	function _1c(a, b) {
		return {
			ctor: '_Array',
			height: a.height + 1,
			table: [a, b],
			lengths: [_u(a), _u(a) + _u(b)]
		};
	}

	function _1e(item, a) {
		var pushed = _1f(item, a);

		if (pushed !== null) {
			return pushed;
		}

		var newTree = _1g(item, a.height);

		return _1c(a, newTree);
	}

	function _1f(item, a) {
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


		var pushed = _1f(item, _11(a)); // There was space in the bottom right tree, so the slot will
		// be updated.


		if (pushed !== null) {
			var newA = _10(a);

			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		} // When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.


		if (a.table.length < 32) {
			var newSlot = _1g(item, a.height - 1);

			var newA = _10(a);

			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + _u(newSlot));
			return newA;
		} else {
			return null;
		}
	}

	function _1g(item, h) {
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
			table: [_1g(item, h - 1)],
			lengths: [1]
		};
	}

	function _1i(from, to, a) {
		if (from < 0) {
			from += _u(a);
		}

		if (to < 0) {
			to += _u(a);
		}

		return _1j(from, _1l(to, a));
	}

	function _1j(from, a) {
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


		var left = _1k(from, a);

		var sliced = _1j(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]); // Maybe the a node is not even needed, as sliced contains the whole slice.


		if (left === a.table.length - 1) {
			return sliced;
		} // Create new node.


		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new _$1.Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;

		for (var i = 0; i < newA.table.length; i++) {
			len += _u(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	function _1k(i, a) {
		var slot = i >> 5 * a.height;

		while (a.lengths[slot] <= i) {
			slot++;
		}

		return slot;
	}

	function _1l(to, a) {
		if (to === _u(a)) {
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


		var right = _1k(to, a);

		var sliced = _1l(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]); // Maybe the a node is not even needed, as sliced contains the whole slice.


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
			newA.lengths[right] = _u(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}

		return newA;
	}

	function _1n(i, array) {
		if (i < 0 || i >= _u(array)) {
			throw new _$1.Error('Index ' + i + ' is out of range. Check the length of ' + 'your array first or use getMaybe or getWithDefault.');
		}

		return _1o(i, array);
	}

	function _1o(i, array) {
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

	function _1q(i, item, array) {
		if (i < 0 || _u(array) <= i) {
			return array;
		}

		return _1r(i, item, array);
	}

	function _1r(i, item, array) {
		array = _10(array);

		if (array.height === 0) {
			array.table[i] = item;
		} else {
			var slot = _1k(i, array);

			if (slot > 0) {
				i -= array.lengths[slot - 1];
			}

			array.table[slot] = _1r(i, item, array.table[slot]);
		}

		return array;
	}

	function _1t(f, a) {
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new _$1.Array(a.table.length)
		};

		if (a.height > 0) {
			newA.lengths = a.lengths;
		}

		for (var i = 0; i < a.table.length; i++) {
			newA.table[i] = a.height === 0 ? f(a.table[i]) : _1t(f, a.table[i]);
		}

		return newA;
	}

	function _1v(f, a) {
		return _1w(f, a, 0);
	}

	function _1w(f, a, from) {
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new _$1.Array(a.table.length)
		};

		if (a.height > 0) {
			newA.lengths = a.lengths;
		}

		for (var i = 0; i < a.table.length; i++) {
			newA.table[i] = a.height === 0 ? _F(f, from + i, a.table[i]) : _1w(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
		}

		return newA;
	}

	function _1y(f, b, a) {
		if (a.height === 0) {
			for (var i = 0; i < a.table.length; i++) {
				b = _F(f, a.table[i], b);
			}
		} else {
			for (var i = 0; i < a.table.length; i++) {
				b = _1y(f, b, a.table[i]);
			}
		}

		return b;
	}

	function _1A(f, b, a) {
		if (a.height === 0) {
			for (var i = a.table.length; i--;) {
				b = _F(f, a.table[i], b);
			}
		} else {
			for (var i = a.table.length; i--;) {
				b = _1A(f, b, a.table[i]);
			}
		}

		return b;
	}

	function _1B(a) {
		var jsArray = new _$1.Array(_u(a));

		_1C(jsArray, 0, a);

		return jsArray;
	}

	function _1C(jsArray, i, a) {
		for (var t = 0; t < a.table.length; t++) {
			if (a.height === 0) {
				jsArray[i + t] = a.table[t];
			} else {
				var inc = t === 0 ? 0 : a.lengths[t - 1];

				_1C(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function _1D(jsArray) {
		if (jsArray.length === 0) {
			return _q;
		}

		var h = _$1.Math.floor(_$1.Math.log(jsArray.length) / _$1.Math.log(32));

		return _1E(jsArray, h, 0, jsArray.length);
	}

	function _1E(jsArray, h, from, to) {
		if (h === 0) {
			return {
				ctor: '_Array',
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = _$1.Math.pow(32, h);

		var table = new _$1.Array(_$1.Math.ceil((to - from) / step));
		var lengths = new _$1.Array(table.length);

		for (var i = 0; i < table.length; i++) {
			table[i] = _1E(jsArray, h - 1, from + i * step, _$1.Math.min(from + (i + 1) * step, to));
			lengths[i] = _u(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}

		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function _1F(x, y) {
		if (typeof x !== 'object') {
			return x === y ? 0 : x < y ? -1 : 1;
		}

		if (x instanceof _$1.String) {
			var a = x.valueOf();
			var b = y.valueOf();
			return a === b ? 0 : a < b ? -1 : 1;
		}

		if (x.ctor === '::' || x.ctor === '[]') {
			while (x.ctor === '::' && y.ctor === '::') {
				var ord = _1F(x._0, y._0);

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
				ord = _1F(x._0, y._0);
				if (ord !== 0) return ord;

				if (n >= 2) {
					ord = _1F(x._1, y._1);
					if (ord !== 0) return ord;

					if (n >= 3) {
						ord = _1F(x._2, y._2);
						if (ord !== 0) return ord;

						if (n >= 4) {
							ord = _1F(x._3, y._3);
							if (ord !== 0) return ord;

							if (n >= 5) {
								ord = _1F(x._4, y._4);
								if (ord !== 0) return ord;

								if (n >= 6) {
									ord = _1F(x._5, y._5);
									if (ord !== 0) return ord;
									if (n >= 7) throw new _$1.Error('Comparison error: ' + err);
								}
							}
						}
					}
				}
			}

			return 0;
		}

		throw new _$1.Error('Comparison error: comparison is only defined on ints, ' + 'floats, times, chars, strings, lists of comparable values, ' + 'and tuples of comparable values.');
	}

	function _1H(x, y) {
		return {
			ctor: '_Tuple2',
			_0: x,
			_1: y
		};
	}

	function _1I(c) {
		return new _$1.String(c);
	}

	function _1J(oldRecord, updatedFields) {
		var newRecord = {};

		for (var key in oldRecord) {
			newRecord[key] = oldRecord[key];
		}

		for (var key in updatedFields) {
			newRecord[key] = updatedFields[key];
		}

		return newRecord;
	}

	function _1K(_) {
		return $0++;
	}

	function _1M(xs, ys) {
		// append Strings
		if (typeof xs === 'string') {
			return xs + ys;
		} // append Lists


		if (xs.ctor === '[]') {
			return ys;
		}

		var root = _1N(xs._0, _1O);

		var curr = root;
		xs = xs._1;

		while (xs.ctor !== '[]') {
			curr._1 = _1N(xs._0, _1O);
			xs = xs._1;
			curr = curr._1;
		}

		curr._1 = ys;
		return root;
	}

	function _1N(hd, tl) {
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}

	function _1P(moduleName, region) {
		return function (message) {
			throw new _$1.Error('Ran into a `Debug.crash` in module `' + moduleName + '` ' + _1Q(region) + '\n' + 'The message provided by the code author is:\n\n    ' + message);
		};
	}

	function _1Q(region) {
		if (region.start.line == region.end.line) {
			return 'on line ' + region.start.line;
		}

		return 'between lines ' + region.start.line + ' and ' + region.end.line;
	}

	function _1R(moduleName, region, value) {
		return function (message) {
			throw new _$1.Error('Ran into a `Debug.crash` in module `' + moduleName + '`\n\n' + 'This was caused by the `case` expression ' + _1Q(region) + '.\n' + 'One of the branches ended with a crash and the following value got through:\n\n    ' + _1S(value) + '\n\n' + 'The message provided by the code author is:\n\n    ' + message);
		};
	}

	function _1S(v) {
		var type = typeof v;

		if (type === 'function') {
			return '<function>';
		}

		if (type === 'boolean') {
			return v ? 'True' : 'False';
		}

		if (type === 'number') {
			return v + '';
		}

		if (v instanceof _$1.String) {
			return '\'' + _1T(v, true) + '\'';
		}

		if (type === 'string') {
			return '"' + _1T(v, false) + '"';
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
					output.push(_1S(v[k]));
				}

				return '(' + output.join(',') + ')';
			}

			if (ctorStarter === '_Task') {
				return '<task>';
			}

			if (v.ctor === '_Array') {
				var list = _v(v);

				return 'Array.fromList ' + _1S(list);
			}

			if (v.ctor === '<decoder>') {
				return '<decoder>';
			}

			if (v.ctor === '_Process') {
				return '<process:' + v.id + '>';
			}

			if (v.ctor === '::') {
				var output = '[' + _1S(v._0);

				v = v._1;

				while (v.ctor === '::') {
					output += ',' + _1S(v._0);
					v = v._1;
				}

				return output + ']';
			}

			if (v.ctor === '[]') {
				return '[]';
			}

			if (v.ctor === 'Set_elm_builtin') {
				return 'Set.fromList ' + _1S(_elm_lang$core$Set$toList(v));
			}

			if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin') {
				return 'Dict.fromList ' + _1S(_k(v));
			}

			var output = '';

			for (var i in v) {
				if (i === 'ctor') continue;

				var str = _1S(v[i]);

				var c0 = str[0];
				var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
				output += ' ' + (parenless ? str : '(' + str + ')');
			}

			return v.ctor + output;
		}

		if (type === 'object') {
			if (v instanceof _$1.Date) {
				return '<' + v.toString() + '>';
			}

			if (v.elm_web_socket) {
				return '<websocket>';
			}

			var output = [];

			for (var k in v) {
				output.push(k + ' = ' + _1S(v[k]));
			}

			if (output.length === 0) {
				return '{}';
			}

			return '{ ' + output.join(', ') + ' }';
		}

		return '<internal structure>';
	}

	function _1T(str, isChar) {
		var s = str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\t/g, '\\t').replace(/\r/g, '\\r').replace(/\v/g, '\\v').replace(/\0/g, '\\0');

		if (isChar) {
			return s.replace(/\'/g, '\\\'');
		} else {
			return s.replace(/\"/g, '\\"');
		}
	}

	function _1U(process) {
		_1V.push(process);

		if (!$1) {
			_$1.setTimeout(_6T, 0);

			$1 = true;
		}
	}

	function _4V(state) {
		return $_5.call(this, _4W, _4V, state);
	}

	function _52(state) {
		return $_5.call(this, _53, _52, state);
	}

	function _1Y(state) {
		return $_5.call(this, _1Z, _1Y, state);
	}

	function _1Z(msg, model) {
		return _6.nativeBinding(function (callback) {
			var results = _F(_20, msg, model);

			model = results._0;
			$2(model);
			var cmds = results._1;

			var subs = _3T(model);

			_3W(_4S, cmds, subs);

			callback(_6.succeed(model));
		});
	}

	function _21(msg, model) {
		var _p0 = msg;

		if (_p0.ctor === 'MorePlease') {
			return {
				ctor: '_Tuple2',
				_0: model,
				_1: _22(model.topic)
			};
		} else {
			if (_p0._0.ctor === 'Ok') {
				return {
					ctor: '_Tuple2',
					_0: _F(_3P, model.topic, _p0._0._0),
					_1: _3R
				};
			} else {
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _3R
				};
			}
		}
	}

	function _22(topic) {
		var url = _F(_23['++'], 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=', topic);

		return _F(_2g, _3u, _F(_3v, url, _3M));
	}

	function _25(f, x) {
		return f(x);
	}

	function _27(x, f) {
		return f(x);
	}

	function _29(f, g, x) {
		return g(f(x));
	}

	function _2b(g, f, x) {
		return g(f(x));
	}

	function _2d(a, b) {
		if (b === 0) {
			throw new _$1.Error('Cannot perform mod 0. Division by zero error.');
		}

		var r = a % b;
		var m = a === 0 ? 0 : b > 0 ? a >= 0 ? r : r + b : -_2d(-a, -b);
		return m === b ? 0 : m;
	}

	function _2f(a, b) {
		return a / b | 0;
	}

	function _2h(resultToMessage, request) {
		return _F(_2i, resultToMessage, _2o(request));
	}

	function _2j(resultToMessage, task) {
		return _2k(_2l(_F(_c, function (_p8) {
			return _7(resultToMessage(_2m(_p8)));
		}, _F(_a, function (_p9) {
			return _7(resultToMessage(_2n(_p9)));
		}, task))));
	}

	function _2k(value) {
		return {
			type: 'leaf',
			home: "Task",
			value: value
		};
	}

	function _2l(a) {
		return {
			ctor: 'Perform',
			_0: a
		};
	}

	function _2m(a) {
		return {
			ctor: 'Err',
			_0: a
		};
	}

	function _2n(a) {
		return {
			ctor: 'Ok',
			_0: a
		};
	}

	function _2o(_p0) {
		var _p1 = _p0;
		return _F(_2p.toTask, _p1._0, _2A);
	}

	function _2r(request, maybeProgress) {
		return _6.nativeBinding(function (callback) {
			var xhr = new XMLHttpRequest();

			_2s(xhr, maybeProgress);

			xhr.addEventListener('error', function () {
				callback(_6.fail({
					ctor: 'NetworkError'
				}));
			});
			xhr.addEventListener('timeout', function () {
				callback(_6.fail({
					ctor: 'Timeout'
				}));
			});
			xhr.addEventListener('load', function () {
				callback(_2t(xhr, request.expect.responseToResult));
			});

			try {
				xhr.open(request.method, request.url, true);
			} catch (e) {
				return callback(_6.fail({
					ctor: 'BadUrl',
					_0: request.url
				}));
			}

			_3h(xhr, request);

			_3l(xhr, request.body);

			return function () {
				xhr.abort();
			};
		});
	}

	function _2s(xhr, maybeProgress) {
		if (maybeProgress.ctor === 'Nothing') {
			return;
		}

		xhr.addEventListener('progress', function (event) {
			if (!event.lengthComputable) {
				return;
			}

			_6.rawSpawn(maybeProgress._0({
				bytes: event.loaded,
				bytesExpected: event.total
			}));
		});
	}

	function _2t(xhr, responseToResult) {
		var response = _2u(xhr);

		if (xhr.status < 200 || 300 <= xhr.status) {
			response.body = xhr.responseText;
			return _6.fail({
				ctor: 'BadStatus',
				_0: response
			});
		}

		var result = responseToResult(response);

		if (result.ctor === 'Ok') {
			return _6.succeed(result._0);
		} else {
			response.body = xhr.responseText;
			return _6.fail({
				ctor: 'BadPayload',
				_0: result._0,
				_1: response
			});
		}
	}

	function _2u(xhr) {
		return {
			status: {
				code: xhr.status,
				message: xhr.statusText
			},
			headers: _2v(xhr.getAllResponseHeaders()),
			url: xhr.responseURL,
			body: xhr.response
		};
	}

	function _2v(rawHeaders) {
		var headers = _2w;

		if (!rawHeaders) {
			return headers;
		}

		var headerPairs = rawHeaders.split('\u000d\u000a');

		for (var i = headerPairs.length; i--;) {
			var headerPair = headerPairs[i];
			var index = headerPair.indexOf('\u003a\u0020');

			if (index > 0) {
				var key = headerPair.substring(0, index);
				var value = headerPair.substring(index + 2);
				headers = _l(_2y, key, function (oldValue) {
					if (oldValue.ctor === 'Just') {
						return _2J(value + ', ' + oldValue._0);
					}

					return _2J(value);
				}, headers);
			}
		}

		return headers;
	}

	function _2z(k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;

			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_2A);

				if (_p44.ctor === 'Nothing') {
					return {
						ctor: '_Tuple2',
						_0: _2B,
						_1: _2w
					};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _2C,
						_1: _P(_2D, _2F, k, _p44._0, _2w, _2w)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;

				var _p45 = _F(_2G, k, _p52);

				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(_2J(_p55));

						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _2K,
								_1: _l(_2L, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _2B,
								_1: _P(_2D, _p51, _p52, _p46._0, _p53, _p54)
							};
						}

					case 'LT':
						var _p47 = up(_p53);

						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;

						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _2B,
									_1: _P(_2D, _p51, _p52, _p55, newLeft, _p54)
								};

							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _2C,
									_1: _P(_32, _p51, _p52, _p55, newLeft, _p54)
								};

							default:
								return {
									ctor: '_Tuple2',
									_0: _2K,
									_1: _P(_2Z, _p51, _p52, _p55, newLeft, _p54)
								};
						}

					default:
						var _p49 = up(_p54);

						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;

						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _2B,
									_1: _P(_2D, _p51, _p52, _p55, _p53, newRight)
								};

							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _2C,
									_1: _P(_32, _p51, _p52, _p55, _p53, newRight)
								};

							default:
								return {
									ctor: '_Tuple2',
									_0: _2K,
									_1: _P(_2Z, _p51, _p52, _p55, _p53, newRight)
								};
						}

				}
			}
		};

		var _p56 = up(dict);

		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;

		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;

			case 'Insert':
				return _3f(updatedDict);

			default:
				return _3g(updatedDict);
		}
	}

	function _2E(a, b, c, d, e) {
		return {
			ctor: 'RBNode_elm_builtin',
			_0: a,
			_1: b,
			_2: c,
			_3: d,
			_4: e
		};
	}

	function _2H(x, y) {
		return {
			ctor: _2I[_h.cmp(x, y) + 1]
		};
	}

	function _2J(a) {
		return {
			ctor: 'Just',
			_0: a
		};
	}

	function _2M(color, left, right) {
		var _p29 = {
			ctor: '_Tuple2',
			_0: left,
			_1: right
		};

		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;

				switch (_p30.ctor) {
					case 'Red':
						return _2N(_2x);

					case 'Black':
						return _2N(_2O);

					default:
						return _2P.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {
					ctor: '_Tuple3',
					_0: color,
					_1: _p32,
					_2: _p33
				};

				if (_p31.ctor === '_Tuple3' && _p31._0.ctor === 'Black' && _p31._1.ctor === 'LBlack' && _p31._2.ctor === 'Red') {
					return _P(_2D, _2T, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return _M(_2U, 'Black/LBlack/Red', color, _1S(_p32), _1S(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {
					ctor: '_Tuple3',
					_0: color,
					_1: _p35,
					_2: _p36
				};

				if (_p34.ctor === '_Tuple3' && _p34._0.ctor === 'Black' && _p34._1.ctor === 'Red' && _p34._2.ctor === 'LBlack') {
					return _P(_2D, _2T, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return _M(_2U, 'Black/Red/LBlack', color, _1S(_p35), _1S(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;

				var newLeft = _P(_2X, _p29._0._0, _p38, _p40, _p29._0._3, _p39);

				var _p37 = _l(_3d, _p38, _p40, _p39);

				var k = _p37._0;
				var v = _p37._1;
				return _P(_2Z, color, k, v, newLeft, right);
			}
		}
	}

	function _2N(a) {
		return {
			ctor: 'RBEmpty_elm_builtin',
			_0: a
		};
	}

	function _2Q(message) {
		throw new _$1.Error(message);
	}

	function _2S(tag, value) {
		var msg = tag + ': ' + _h.toString(value);

		var process = process || {};

		if (process.stdout) {
			process.stdout.write(msg);
		} else {
			_$1.console.log(msg);
		}

		return value;
	}

	function _2V(msg, c, lgot, rgot) {
		return _2P.crash(_2W({
			ctor: '::',
			_0: 'Internal red-black tree invariant violated, expected ',
			_1: {
				ctor: '::',
				_0: msg,
				_1: {
					ctor: '::',
					_0: ' and got ',
					_1: {
						ctor: '::',
						_0: _1S(c),
						_1: {
							ctor: '::',
							_0: '/',
							_1: {
								ctor: '::',
								_0: lgot,
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: rgot,
										_1: {
											ctor: '::',
											_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
											_1: {
												ctor: '[]'
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}));
	}

	function _2W(strs) {
		return _x.toArray(strs).join('');
	}

	function _2Y(c, k, v, l, r) {
		var _p28 = r;

		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return _l(_2L, c, l, r);
		} else {
			return _P(_2Z, c, k, v, l, _P(_2X, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	}

	function _30(c, k, v, l, r) {
		return _31(l) || _31(r) ? _P(_32, _3b(c), k, v, _3c(l), _3c(r)) : _P(_2D, c, k, v, l, r);
	}

	function _31(dict) {
		var _p13 = dict;

		_v14_2: do {
			if (_p13.ctor === 'RBNode_elm_builtin') {
				if (_p13._0.ctor === 'BBlack') {
					return true;
				} else {
					break _v14_2;
				}
			} else {
				if (_p13._0.ctor === 'LBBlack') {
					return true;
				} else {
					break _v14_2;
				}
			}
		} while (false);

		return false;
	}

	function _33(c, k, v, l, r) {
		var tree = _P(_2D, c, k, v, l, r);

		return _34(tree) ? _36(tree) : tree;
	}

	function _34(t) {
		var _p19 = t;

		if (_p19.ctor === 'RBNode_elm_builtin') {
			var _p20 = _p19._0;
			return _h.eq(_p20, _2T) || _h.eq(_p20, _35);
		} else {
			return true;
		}
	}

	function _36(tree) {
		var _p27 = tree;

		_v36_6: do {
			_v36_5: do {
				_v36_4: do {
					_v36_3: do {
						_v36_2: do {
							_v36_1: do {
								_v36_0: do {
									if (_p27.ctor === 'RBNode_elm_builtin') {
										if (_p27._3.ctor === 'RBNode_elm_builtin') {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._3._0.ctor) {
													case 'Red':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if (_p27._3._3.ctor === 'RBNode_elm_builtin' && _p27._3._3._0.ctor === 'Red') {
																	break _v36_0;
																} else {
																	if (_p27._3._4.ctor === 'RBNode_elm_builtin' && _p27._3._4._0.ctor === 'Red') {
																		break _v36_1;
																	} else {
																		if (_p27._4._3.ctor === 'RBNode_elm_builtin' && _p27._4._3._0.ctor === 'Red') {
																			break _v36_2;
																		} else {
																			if (_p27._4._4.ctor === 'RBNode_elm_builtin' && _p27._4._4._0.ctor === 'Red') {
																				break _v36_3;
																			} else {
																				break _v36_6;
																			}
																		}
																	}
																}

															case 'NBlack':
																if (_p27._3._3.ctor === 'RBNode_elm_builtin' && _p27._3._3._0.ctor === 'Red') {
																	break _v36_0;
																} else {
																	if (_p27._3._4.ctor === 'RBNode_elm_builtin' && _p27._3._4._0.ctor === 'Red') {
																		break _v36_1;
																	} else {
																		if (_p27._0.ctor === 'BBlack' && _p27._4._3.ctor === 'RBNode_elm_builtin' && _p27._4._3._0.ctor === 'Black' && _p27._4._4.ctor === 'RBNode_elm_builtin' && _p27._4._4._0.ctor === 'Black') {
																			break _v36_4;
																		} else {
																			break _v36_6;
																		}
																	}
																}

															default:
																if (_p27._3._3.ctor === 'RBNode_elm_builtin' && _p27._3._3._0.ctor === 'Red') {
																	break _v36_0;
																} else {
																	if (_p27._3._4.ctor === 'RBNode_elm_builtin' && _p27._3._4._0.ctor === 'Red') {
																		break _v36_1;
																	} else {
																		break _v36_6;
																	}
																}

														}

													case 'NBlack':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if (_p27._4._3.ctor === 'RBNode_elm_builtin' && _p27._4._3._0.ctor === 'Red') {
																	break _v36_2;
																} else {
																	if (_p27._4._4.ctor === 'RBNode_elm_builtin' && _p27._4._4._0.ctor === 'Red') {
																		break _v36_3;
																	} else {
																		if (_p27._0.ctor === 'BBlack' && _p27._3._3.ctor === 'RBNode_elm_builtin' && _p27._3._3._0.ctor === 'Black' && _p27._3._4.ctor === 'RBNode_elm_builtin' && _p27._3._4._0.ctor === 'Black') {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																}

															case 'NBlack':
																if (_p27._0.ctor === 'BBlack') {
																	if (_p27._4._3.ctor === 'RBNode_elm_builtin' && _p27._4._3._0.ctor === 'Black' && _p27._4._4.ctor === 'RBNode_elm_builtin' && _p27._4._4._0.ctor === 'Black') {
																		break _v36_4;
																	} else {
																		if (_p27._3._3.ctor === 'RBNode_elm_builtin' && _p27._3._3._0.ctor === 'Black' && _p27._3._4.ctor === 'RBNode_elm_builtin' && _p27._3._4._0.ctor === 'Black') {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																} else {
																	break _v36_6;
																}

															default:
																if (_p27._0.ctor === 'BBlack' && _p27._3._3.ctor === 'RBNode_elm_builtin' && _p27._3._3._0.ctor === 'Black' && _p27._3._4.ctor === 'RBNode_elm_builtin' && _p27._3._4._0.ctor === 'Black') {
																	break _v36_5;
																} else {
																	break _v36_6;
																}

														}

													default:
														switch (_p27._4._0.ctor) {
															case 'Red':
																if (_p27._4._3.ctor === 'RBNode_elm_builtin' && _p27._4._3._0.ctor === 'Red') {
																	break _v36_2;
																} else {
																	if (_p27._4._4.ctor === 'RBNode_elm_builtin' && _p27._4._4._0.ctor === 'Red') {
																		break _v36_3;
																	} else {
																		break _v36_6;
																	}
																}

															case 'NBlack':
																if (_p27._0.ctor === 'BBlack' && _p27._4._3.ctor === 'RBNode_elm_builtin' && _p27._4._3._0.ctor === 'Black' && _p27._4._4.ctor === 'RBNode_elm_builtin' && _p27._4._4._0.ctor === 'Black') {
																	break _v36_4;
																} else {
																	break _v36_6;
																}

															default:
																break _v36_6;
														}

												}
											} else {
												switch (_p27._3._0.ctor) {
													case 'Red':
														if (_p27._3._3.ctor === 'RBNode_elm_builtin' && _p27._3._3._0.ctor === 'Red') {
															break _v36_0;
														} else {
															if (_p27._3._4.ctor === 'RBNode_elm_builtin' && _p27._3._4._0.ctor === 'Red') {
																break _v36_1;
															} else {
																break _v36_6;
															}
														}

													case 'NBlack':
														if (_p27._0.ctor === 'BBlack' && _p27._3._3.ctor === 'RBNode_elm_builtin' && _p27._3._3._0.ctor === 'Black' && _p27._3._4.ctor === 'RBNode_elm_builtin' && _p27._3._4._0.ctor === 'Black') {
															break _v36_5;
														} else {
															break _v36_6;
														}

													default:
														break _v36_6;
												}
											}
										} else {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._4._0.ctor) {
													case 'Red':
														if (_p27._4._3.ctor === 'RBNode_elm_builtin' && _p27._4._3._0.ctor === 'Red') {
															break _v36_2;
														} else {
															if (_p27._4._4.ctor === 'RBNode_elm_builtin' && _p27._4._4._0.ctor === 'Red') {
																break _v36_3;
															} else {
																break _v36_6;
															}
														}

													case 'NBlack':
														if (_p27._0.ctor === 'BBlack' && _p27._4._3.ctor === 'RBNode_elm_builtin' && _p27._4._3._0.ctor === 'Black' && _p27._4._4.ctor === 'RBNode_elm_builtin' && _p27._4._4._0.ctor === 'Black') {
															break _v36_4;
														} else {
															break _v36_6;
														}

													default:
														break _v36_6;
												}
											} else {
												break _v36_6;
											}
										}
									} else {
										break _v36_6;
									}
								} while (false);

								return _37(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
							} while (false);

							return _37(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
						} while (false);

						return _37(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
					} while (false);

					return _37(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
				} while (false);

				return _P(_2D, _2T, _p27._4._3._1, _p27._4._3._2, _P(_2D, _2T, _p27._1, _p27._2, _p27._3, _p27._4._3._3), _P(_32, _2T, _p27._4._1, _p27._4._2, _p27._4._3._4, _3a(_p27._4._4)));
			} while (false);

			return _P(_2D, _2T, _p27._3._4._1, _p27._3._4._2, _P(_32, _2T, _p27._3._1, _p27._3._2, _3a(_p27._3._3), _p27._3._4._3), _P(_2D, _2T, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
		} while (false);

		return tree;
	}

	function _37(col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return _P(_2D, _38(col), yk, yv, _P(_2D, _2T, xk, xv, a, b), _P(_2D, _2T, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	}

	function _38(color) {
		var _p22 = color;

		switch (_p22.ctor) {
			case 'BBlack':
				return _2T;

			case 'Black':
				return _2F;

			case 'Red':
				return _39;

			default:
				return _2P.crash('Can\'t make a negative black node less black!');
		}
	}

	function _3a(t) {
		var _p26 = t;

		if (_p26.ctor === 'RBEmpty_elm_builtin') {
			return _2P.crash('can\'t make a Leaf red');
		} else {
			return _P(_2D, _2F, _p26._1, _p26._2, _p26._3, _p26._4);
		}
	}

	function _3b(color) {
		var _p21 = color;

		switch (_p21.ctor) {
			case 'Black':
				return _35;

			case 'Red':
				return _2T;

			case 'NBlack':
				return _2F;

			default:
				return _2P.crash('Can\'t make a double black node more black!');
		}
	}

	function _3c(dict) {
		var _p24 = dict;

		if (_p24.ctor === 'RBNode_elm_builtin') {
			return _P(_2D, _38(_p24._0), _p24._1, _p24._2, _p24._3, _p24._4);
		} else {
			return _2N(_2x);
		}
	}

	function _3e(k, v, r) {
		maxWithDefault: while (true) {
			var _p18 = r;

			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {
					ctor: '_Tuple2',
					_0: k,
					_1: v
				};
			} else {
				var _v26 = _p18._1,
				    _v27 = _p18._2,
				    _v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	}

	function _3f(dict) {
		var _p23 = dict;

		if (_p23.ctor === 'RBNode_elm_builtin' && _p23._0.ctor === 'Red') {
			return _P(_2D, _2T, _p23._1, _p23._2, _p23._3, _p23._4);
		} else {
			return dict;
		}
	}

	function _3g(t) {
		var _p25 = t;

		if (_p25.ctor === 'RBEmpty_elm_builtin') {
			return _2N(_2x);
		} else {
			return _P(_2D, _2T, _p25._1, _p25._2, _p25._3, _p25._4);
		}
	}

	function _3h(xhr, request) {
		function setHeader(pair) {
			xhr.setRequestHeader(pair._0, pair._1);
		}

		_F(_3i, setHeader, request.headers);

		xhr.responseType = request.expect.responseType;
		xhr.withCredentials = request.withCredentials;

		if (request.timeout.ctor === 'Just') {
			xhr.timeout = request.timeout._0;
		}
	}

	function _3j(f, xs) {
		return _l(_D, _3k(function (x, acc) {
			return {
				ctor: '::',
				_0: f(x),
				_1: acc
			};
		}), {
			ctor: '[]'
		}, xs);
	}

	function _3k(fun) {
		function wrapper(a) {
			return function (b) {
				return fun(a, b);
			};
		}

		wrapper.arity = 2;
		wrapper.func = fun;
		return wrapper;
	}

	function _3l(xhr, body) {
		switch (body.ctor) {
			case 'EmptyBody':
				xhr.send();
				return;

			case 'StringBody':
				xhr.setRequestHeader('Content-Type', body._0);
				xhr.send(body._1);
				return;

			case 'FormDataBody':
				xhr.send(body._0);
				return;
		}
	}

	function _3m(responseToResult) {
		return {
			responseType: 'text',
			responseToResult: responseToResult
		};
	}

	function _3o(func, expect) {
		return {
			responseType: expect.responseType,
			responseToResult: function (response) {
				var convertedResponse = expect.responseToResult(response);
				return _F(_3p, func, convertedResponse);
			}
		};
	}

	function _3q(func, ra) {
		var _p3 = ra;

		if (_p3.ctor === 'Ok') {
			return _2n(func(_p3._0));
		} else {
			return _2m(_p3._0);
		}
	}

	function _3r(parts) {
		var formData = new FormData();

		while (parts.ctor !== '[]') {
			var part = parts._0;
			formData.append(part._0, part._1);
			parts = parts._1;
		}

		return {
			ctor: 'FormDataBody',
			_0: formData
		};
	}

	function _3s(string) {
		return _$1.encodeURIComponent(string);
	}

	function _3t(string) {
		try {
			return _2J(_$1.decodeURIComponent(string));
		} catch (e) {
			return _2A;
		}
	}

	function _3u(a) {
		return {
			ctor: 'NewGif',
			_0: a
		};
	}

	function _3w(url, decoder) {
		return _3x({
			method: 'GET',
			headers: {
				ctor: '[]'
			},
			url: url,
			body: _3y,
			expect: _3z(decoder),
			timeout: _2A,
			withCredentials: false
		});
	}

	function _3x(a) {
		return {
			ctor: 'Request',
			_0: a
		};
	}

	function _3z(decoder) {
		return _3m(function (response) {
			return _F(_3A, decoder, response.body);
		});
	}

	function _3B(decoder, string) {
		var json;

		try {
			json = _$1.JSON.parse(string);
		} catch (e) {
			return _2m('Given an invalid JSON: ' + e.message);
		}

		return _3C(decoder, json);
	}

	function _3C(decoder, value) {
		var result = _3D(decoder, value);

		return result.tag === 'ok' ? _2n(result.value) : _2m(_3K(result));
	}

	function _3D(decoder, value) {
		switch (decoder.tag) {
			case 'bool':
				return typeof value === 'boolean' ? _3E(value) : _3F('a Bool', value);

			case 'int':
				if (typeof value !== 'number') {
					return _3F('an Int', value);
				}

				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return _3E(value);
				}

				if (_$1.isFinite(value) && !(value % 1)) {
					return _3E(value);
				}

				return _3F('an Int', value);

			case 'float':
				return typeof value === 'number' ? _3E(value) : _3F('a Float', value);

			case 'string':
				return typeof value === 'string' ? _3E(value) : value instanceof _$1.String ? _3E(value + '') : _3F('a String', value);

			case 'null':
				return value === null ? _3E(decoder.value) : _3F('null', value);

			case 'value':
				return _3E(value);

			case 'list':
				if (!(value instanceof _$1.Array)) {
					return _3F('a List', value);
				}

				var list = _x.Nil;

				for (var i = value.length; i--;) {
					var result = _3D(decoder.decoder, value[i]);

					if (result.tag !== 'ok') {
						return _3G(i, result);
					}

					list = _x.Cons(result.value, list);
				}

				return _3E(list);

			case 'array':
				if (!(value instanceof _$1.Array)) {
					return _3F('an Array', value);
				}

				var len = value.length;
				var array = new _$1.Array(len);

				for (var i = len; i--;) {
					var result = _3D(decoder.decoder, value[i]);

					if (result.tag !== 'ok') {
						return _3G(i, result);
					}

					array[i] = result.value;
				}

				return _3E(_p.fromJSArray(array));

			case 'maybe':
				var result = _3D(decoder.decoder, value);

				return result.tag === 'ok' ? _3E(_2J(result.value)) : _3E(_2A);

			case 'field':
				var field = decoder.field;

				if (typeof value !== 'object' || value === null || !(field in value)) {
					return _3F('an object with a field named `' + field + '`', value);
				}

				var result = _3D(decoder.decoder, value[field]);

				return result.tag === 'ok' ? result : _3H(field, result);

			case 'index':
				var index = decoder.index;

				if (!(value instanceof _$1.Array)) {
					return _3F('an array', value);
				}

				if (index >= value.length) {
					return _3F('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
				}

				var result = _3D(decoder.decoder, value[index]);

				return result.tag === 'ok' ? result : _3G(index, result);

			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof _$1.Array) {
					return _3F('an object', value);
				}

				var keyValuePairs = _x.Nil;

				for (var key in value) {
					var result = _3D(decoder.decoder, value[key]);

					if (result.tag !== 'ok') {
						return _3H(key, result);
					}

					var pair = _h.Tuple2(key, result.value);

					keyValuePairs = _x.Cons(pair, keyValuePairs);
				}

				return _3E(keyValuePairs);

			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;

				for (var i = 0; i < decoders.length; i++) {
					var result = _3D(decoders[i], value);

					if (result.tag !== 'ok') {
						return result;
					}

					answer = answer(result.value);
				}

				return _3E(answer);

			case 'andThen':
				var result = _3D(decoder.decoder, value);

				return result.tag !== 'ok' ? result : _3D(decoder.callback(result.value), value);

			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;

				while (temp.ctor !== '[]') {
					var result = _3D(temp._0, value);

					if (result.tag === 'ok') {
						return result;
					}

					errors.push(result);
					temp = temp._1;
				}

				return _3I(errors);

			case 'fail':
				return _3J(decoder.msg);

			case 'succeed':
				return _3E(decoder.msg);
		}
	}

	function _3E(value) {
		return {
			tag: 'ok',
			value: value
		};
	}

	function _3F(type, value) {
		return {
			tag: 'primitive',
			type: type,
			value: value
		};
	}

	function _3G(index, nestedProblems) {
		return {
			tag: 'index',
			index: index,
			rest: nestedProblems
		};
	}

	function _3H(field, nestedProblems) {
		return {
			tag: 'field',
			field: field,
			rest: nestedProblems
		};
	}

	function _3I(problems) {
		return {
			tag: 'oneOf',
			problems: problems
		};
	}

	function _3J(msg) {
		return {
			tag: 'fail',
			msg: msg
		};
	}

	function _3K(problem) {
		var context = '_';

		while (problem) {
			switch (problem.tag) {
				case 'primitive':
					return 'Expecting ' + problem.type + (context === '_' ? '' : ' at ' + context) + ' but instead got: ' + _3L(problem.value);

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
						problems[i] = _3K(problems[i]);
					}

					return 'I ran into the following problems' + (context === '_' ? '' : ' at ' + context) + ':\n\n' + problems.join('\n');

				case 'fail':
					return 'I ran into a `fail` decoder' + (context === '_' ? '' : ' at ' + context) + ': ' + problem.msg;
			}
		}
	}

	function _3L(value) {
		return value === _$1.undefined ? 'undefined' : _$1.JSON.stringify(value);
	}

	function _3Q(a, b) {
		return {
			topic: a,
			gifUrl: b
		};
	}

	function _3T(model) {
		return _3U;
	}

	function _3W(managers, cmdBag, subBag) {
		var effectsDict = {};

		_3X(true, cmdBag, effectsDict, null);

		_3X(false, subBag, effectsDict, null);

		for (var home in managers) {
			var fx = home in effectsDict ? effectsDict[home] : {
				cmds: _x.Nil,
				subs: _x.Nil
			};

			_6.rawSend(managers[home], {
				ctor: 'fx',
				_0: fx
			});
		}
	}

	function _3X(isCmd, bag, effectsDict, taggers) {
		switch (bag.type) {
			case 'leaf':
				var home = bag.home;

				var effect = _3Y(isCmd, home, taggers, bag.value);

				effectsDict[home] = _4R(isCmd, effect, effectsDict[home]);
				return;

			case 'node':
				var list = bag.branches;

				while (list.ctor !== '[]') {
					_3X(isCmd, list._0, effectsDict, taggers);

					list = list._1;
				}

				return;

			case 'map':
				_3X(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});

				return;
		}
	}

	function _3Y(isCmd, home, taggers, value) {
		function applyTaggers(x) {
			var temp = taggers;

			while (temp) {
				x = temp.tagger(x);
				temp = temp.rest;
			}

			return x;
		}

		var map = isCmd ? _3Z[home].cmdMap : _3Z[home].subMap;
		return _F(map, applyTaggers, value);
	}

	function _44(router, commands, state) {
		return _F(_45, function (_p4) {
			return {
				ctor: '_Tuple0'
			};
		}, _47(_F(_3i, _4a(router), commands)));
	}

	function _46(func, taskA) {
		return _F(_a, function (a) {
			return _7(func(a));
		}, taskA);
	}

	function _47(tasks) {
		var _p3 = tasks;

		if (_p3.ctor === '[]') {
			return _7({
				ctor: '[]'
			});
		} else {
			return _l(_48, _3k(function (x, y) {
				return {
					ctor: '::',
					_0: x,
					_1: y
				};
			}), _p3._0, _47(_p3._1));
		}
	}

	function _49(func, taskA, taskB) {
		return _F(_a, function (a) {
			return _F(_a, function (b) {
				return _7(_F(func, a, b));
			}, taskB);
		}, taskA);
	}

	function _4b(router, _p0) {
		var _p1 = _p0;
		return _6.spawn(_F(_a, _4(router), _p1._0));
	}

	function _4d(_p7, _p6, _p5) {
		return _7({
			ctor: '_Tuple0'
		});
	}

	function _4f(tagger, _p10) {
		var _p11 = _p10;
		return _2l(_F(_45, tagger, _p11._0));
	}

	function _4k(router, subs, _p9) {
		var _p10 = _p9;

		var rightStep = _o(function (_p12, id, _p11) {
			var _p13 = _p11;
			return {
				ctor: '_Tuple3',
				_0: _p13._0,
				_1: _p13._1,
				_2: _F(_a, function (_p14) {
					return _p13._2;
				}, _6.kill(id))
			};
		});

		var bothStep = _4l(function (interval, taggers, id, _p15) {
			var _p16 = _p15;
			return {
				ctor: '_Tuple3',
				_0: _p16._0,
				_1: _l(_4m, interval, id, _p16._1),
				_2: _p16._2
			};
		});

		var leftStep = _o(function (interval, taggers, _p17) {
			var _p18 = _p17;
			return {
				ctor: '_Tuple3',
				_0: {
					ctor: '::',
					_0: interval,
					_1: _p18._0
				},
				_1: _p18._1,
				_2: _p18._2
			};
		});

		var newTaggers = _l(_4q, _4s, _2w, subs);

		var _p19 = _4w(_4x, leftStep, bothStep, rightStep, newTaggers, _p10.processes, {
			ctor: '_Tuple3',
			_0: {
				ctor: '[]'
			},
			_1: _2w,
			_2: _7({
				ctor: '_Tuple0'
			})
		});

		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return _F(_a, function (newProcesses) {
			return _7(_F(_4B, newTaggers, newProcesses));
		}, _F(_a, function (_p20) {
			return _l(_4D, router, spawnList, existingDict);
		}, killTask));
	}

	function _4l(fun) {
		function wrapper(a) {
			return function (b) {
				return function (c) {
					return function (d) {
						return fun(a, b, c, d);
					};
				};
			};
		}

		wrapper.arity = 4;
		wrapper.func = fun;
		return wrapper;
	}

	function _4n(key, value, dict) {
		return _l(_2y, key, _4o(_2J(value)), dict);
	}

	function _4p(a, _p4) {
		return a;
	}

	function _4r(func, acc, list) {
		foldl: while (true) {
			var _p3 = list;

			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
				    _v8 = _F(func, _p3._0, acc),
				    _v9 = _p3._1;

				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	}

	function _4t(_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;

		var _p4 = _F(_4u, _p5, state);

		if (_p4.ctor === 'Nothing') {
			return _l(_4m, _p5, {
				ctor: '::',
				_0: _p6,
				_1: {
					ctor: '[]'
				}
			}, state);
		} else {
			return _l(_4m, _p5, {
				ctor: '::',
				_0: _p6,
				_1: _p4._0
			}, state);
		}
	}

	function _4v(targetKey, dict) {
		get: while (true) {
			var _p15 = dict;

			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _2A;
			} else {
				var _p16 = _F(_2G, targetKey, _p15._1);

				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
						    _v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;

					case 'EQ':
						return _2J(_p15._2);

					default:
						var _v22 = targetKey,
						    _v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	}

	function _4w(fun, a, b, c, d, e, f) {
		return fun.arity === 6 ? fun.func(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
	}

	function _4y(leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = _o(function (rKey, rValue, _p2) {
			stepState: while (true) {
				var _p3 = _p2;
				var _p9 = _p3._1;
				var _p8 = _p3._0;
				var _p4 = _p8;

				if (_p4.ctor === '[]') {
					return {
						ctor: '_Tuple2',
						_0: _p8,
						_1: _l(rightStep, rKey, rValue, _p9)
					};
				} else {
					var _p7 = _p4._1;
					var _p6 = _p4._0._1;
					var _p5 = _p4._0._0;

					if (_h.cmp(_p5, rKey) < 0) {
						var _v10 = rKey,
						    _v11 = rValue,
						    _v12 = {
							ctor: '_Tuple2',
							_0: _p7,
							_1: _l(leftStep, _p5, _p6, _p9)
						};
						rKey = _v10;
						rValue = _v11;
						_p2 = _v12;
						continue stepState;
					} else {
						if (_h.cmp(_p5, rKey) > 0) {
							return {
								ctor: '_Tuple2',
								_0: _p8,
								_1: _l(rightStep, rKey, rValue, _p9)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _p7,
								_1: _M(bothStep, _p5, _p6, rValue, _p9)
							};
						}
					}
				}
			}
		});

		var _p10 = _l(_4z, stepState, {
			ctor: '_Tuple2',
			_0: _k(leftDict),
			_1: initialResult
		}, rightDict);

		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return _l(_4q, _3k(function (_p11, result) {
			var _p12 = _p11;
			return _l(leftStep, _p12._0, _p12._1, result);
		}), intermediateResult, leftovers);
	}

	function _4A(f, acc, dict) {
		foldl: while (true) {
			var _p1 = dict;

			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
				    _v6 = _l(f, _p1._1, _p1._2, _l(_4z, f, acc, _p1._3)),
				    _v7 = _p1._4;

				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	}

	function _4C(a, b) {
		return {
			taggers: a,
			processes: b
		};
	}

	function _4E(router, intervals, processes) {
		var _p0 = intervals;

		if (_p0.ctor === '[]') {
			return _7(processes);
		} else {
			var _p1 = _p0._0;

			var spawnRest = function (id) {
				return _l(_4D, router, _p0._1, _l(_4m, _p1, id, processes));
			};

			var spawnTimer = _6.spawn(_F(_4F, _p1, _F(_4H, router, _p1)));

			return _F(_a, spawnRest, spawnTimer);
		}
	}

	function _4G(interval, task) {
		return _6.nativeBinding(function (callback) {
			var id = _$1.setInterval(function () {
				_6.rawSpawn(task);
			}, interval);

			return function () {
				_$1.clearInterval(id);
			};
		});
	}

	function _4I(router, msg) {
		return _F(_6.send, router.self, {
			ctor: 'self',
			_0: msg
		});
	}

	function _4K(router, interval, state) {
		var _p7 = _F(_4u, interval, state.taggers);

		if (_p7.ctor === 'Nothing') {
			return _7(state);
		} else {
			var tellTaggers = function (time) {
				return _47(_F(_3i, function (tagger) {
					return _F(_4, router, tagger(time));
				}, _p7._0));
			};

			return _F(_a, function (_p8) {
				return _7(state);
			}, _F(_a, tellTaggers, _4L));
		}
	}

	function _4M(callback) {
		callback(_6.succeed(_$1.Date.now()));
	}

	function _4O(f, _p21) {
		var _p22 = _p21;
		return _F(_4P, _p22._0, function (_p23) {
			return f(_p22._1(_p23));
		});
	}

	function _4Q(a, b) {
		return {
			ctor: 'Every',
			_0: a,
			_1: b
		};
	}

	function _4R(isCmd, newEffect, effects) {
		effects = effects || {
			cmds: _x.Nil,
			subs: _x.Nil
		};

		if (isCmd) {
			effects.cmds = _x.Cons(newEffect, effects.cmds);
			return effects;
		}

		effects.subs = _x.Cons(newEffect, effects.subs);
		return effects;
	}

	function _4W(msg, state) {
		return $_6.call(this, _4c, _4X, "cmd", _43, msg, state);
	}

	function _53(msg, state) {
		return $_6.call(this, _4J, _54, "sub", _4j, msg, state);
	}

	function _4Y(msg) {
		_6.rawSend(_1W, msg);
	}

	function _57(callback) {
		var model = _58._0;
		$2 = _5m(_4Y, model);
		var cmds = _58._1;

		var subs = _3T(model);

		_3W(_4S, cmds, subs);

		callback(_6.succeed(model));
	}

	function _5d(_p8) {
		return _7(_3u(_2m(_p8)));
	}

	function _5f(_p9) {
		return _7(_3u(_2n(_p9)));
	}

	function _5h(callback) {
		var xhr = new XMLHttpRequest();

		_2s(xhr, _2A);

		xhr.addEventListener('error', function () {
			callback(_6.fail({
				ctor: 'NetworkError'
			}));
		});
		xhr.addEventListener('timeout', function () {
			callback(_6.fail({
				ctor: 'Timeout'
			}));
		});
		xhr.addEventListener('load', function () {
			callback(_2t(xhr, _5i.expect.responseToResult));
		});

		try {
			xhr.open(_5i.method, _5i.url, true);
		} catch (e) {
			return callback(_6.fail({
				ctor: 'BadUrl',
				_0: _5i.url
			}));
		}

		_3h(xhr, _5i);

		_3l(xhr, _5i.body);

		return function () {
			xhr.abort();
		};
	}

	function _5l(response) {
		return _F(_3A, _3M, response.body);
	}

	function _5m(tagger, initialModel) {
		var eventNode = {
			tagger: tagger,
			parent: _$1.undefined
		};

		var initialVirtualNode = _5n(initialModel);

		var domNode = _5P(initialVirtualNode, eventNode);

		document.body.appendChild(domNode);
		return _6y(domNode, _5n, initialVirtualNode, eventNode);
	}

	function _5n(model) {
		return _F(_5o, {
			ctor: '[]'
		}, {
			ctor: '::',
			_0: _F(_5s, {
				ctor: '[]'
			}, {
				ctor: '::',
				_0: _5u(model.topic),
				_1: {
					ctor: '[]'
				}
			}),
			_1: {
				ctor: '::',
				_0: _F(_5v, {
					ctor: '::',
					_0: _5x(_5E),
					_1: {
						ctor: '[]'
					}
				}, {
					ctor: '::',
					_0: _5u('More Please!'),
					_1: {
						ctor: '[]'
					}
				}),
				_1: {
					ctor: '::',
					_0: _F(_5F, {
						ctor: '[]'
					}, {
						ctor: '[]'
					}),
					_1: {
						ctor: '::',
						_0: _F(_5H, {
							ctor: '::',
							_0: _5J(model.gifUrl),
							_1: {
								ctor: '[]'
							}
						}, {
							ctor: '[]'
						}),
						_1: {
							ctor: '[]'
						}
					}
				}
			}
		});
	}

	function _5q(tag, factList, kidList) {
		var organized = _5r(factList);

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

	function _5r(factList) {
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
			} else if (key === 'className') {
				var classes = facts[key];
				facts[key] = typeof classes === 'undefined' ? entry.value : classes + ' ' + entry.value;
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

	function _5u(string) {
		return {
			type: 'text',
			text: string
		};
	}

	function _5x(msg) {
		return _F(_5y, 'click', _5D(msg));
	}

	function _5z(eventName, decoder) {
		return _l(_5A, eventName, _5C, decoder);
	}

	function _5B(name, options, decoder) {
		return {
			key: "EVENT",
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}

	function _5D(msg) {
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}

	function _5J(value) {
		return _F(_5K, 'src', value);
	}

	function _5L(name, string) {
		return _F(_5M, name, _5O(string));
	}

	function _5N(key, value) {
		return {
			key: key,
			value: value
		};
	}

	function _5O(value) {
		return value;
	}

	function _5P(vNode, eventNode) {
		switch (vNode.type) {
			case 'thunk':
				if (!vNode.node) {
					vNode.node = vNode.thunk();
				}

				return _5P(vNode.node, eventNode);

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

				var domNode = _5P(subNode, subEventRoot);

				domNode.elm_event_node_ref = subEventRoot;
				return domNode;

			case 'text':
				return $3.createTextNode(vNode.text);

			case 'node':
				var domNode = vNode.namespace ? $3.createElementNS(vNode.namespace, vNode.tag) : $3.createElement(vNode.tag);

				_5R(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++) {
					domNode.appendChild(_5P(children[i], eventNode));
				}

				return domNode;

			case 'keyed-node':
				var domNode = vNode.namespace ? $3.createElementNS(vNode.namespace, vNode.tag) : $3.createElement(vNode.tag);

				_5R(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++) {
					domNode.appendChild(_5P(children[i]._1, eventNode));
				}

				return domNode;

			case 'custom':
				var domNode = vNode.impl.render(vNode.model);

				_5R(domNode, eventNode, vNode.facts);

				return domNode;
		}
	}

	function _5R(domNode, eventNode, facts) {
		for (var key in facts) {
			var value = facts[key];

			switch (key) {
				case "STYLE":
					_5S(domNode, value);

					break;

				case "EVENT":
					_5T(domNode, eventNode, value);

					break;

				case "ATTR":
					_6w(domNode, value);

					break;

				case "ATTR_NS":
					_6x(domNode, value);

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

	function _5S(domNode, styles) {
		var domNodeStyle = domNode.style;

		for (var key in styles) {
			domNodeStyle[key] = styles[key];
		}
	}

	function _5T(domNode, eventNode, events) {
		var allHandlers = domNode.elm_handlers || {};

		for (var key in events) {
			var handler = allHandlers[key];
			var value = events[key];

			if (typeof value === 'undefined') {
				domNode.removeEventListener(key, handler);
				allHandlers[key] = _$1.undefined;
			} else if (typeof handler === 'undefined') {
				var handler = _5U(eventNode, value);

				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			} else {
				handler.info = value;
			}
		}

		domNode.elm_handlers = allHandlers;
	}

	function _5U(eventNode, info) {
		function eventHandler(event) {
			var info = eventHandler.info;

			var value = _F(_5V.run, info.decoder, event);

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

	function _5X(indentLevel, value) {
		return _$1.JSON.stringify(value, null, indentLevel);
	}

	function _5Z(value) {
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}

	function _60(tag) {
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}

	function _62(tag, decoder) {
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}

	function _64(field, decoder) {
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}

	function _66(index, decoder) {
		return {
			ctor: '<decoder>',
			tag: 'index',
			index: index,
			decoder: decoder
		};
	}

	function _68(f, d1) {
		return _69(f, [d1]);
	}

	function _69(f, decoders) {
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}

	function _6b(f, d1, d2) {
		return _69(f, [d1, d2]);
	}

	function _6d(f, d1, d2, d3) {
		return _69(f, [d1, d2, d3]);
	}

	function _6f(f, d1, d2, d3, d4) {
		return _69(f, [d1, d2, d3, d4]);
	}

	function _6h(f, d1, d2, d3, d4, d5) {
		return _69(f, [d1, d2, d3, d4, d5]);
	}

	function _6i(a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return _6j(a, b, c, d, e, f, g);
							};
						};
					};
				};
			};
		};
	}

	function _6j(f, d1, d2, d3, d4, d5, d6) {
		return _69(f, [d1, d2, d3, d4, d5, d6]);
	}

	function _6k(a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return _6l(a, b, c, d, e, f, g, h);
								};
							};
						};
					};
				};
			};
		};
	}

	function _6l(f, d1, d2, d3, d4, d5, d6, d7) {
		return _69(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function _6m(a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return _6n(a, b, c, d, e, f, g, h, i);
									};
								};
							};
						};
					};
				};
			};
		};
	}

	function _6n(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return _69(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}

	function _6o(decoder) {
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}

	function _6q(callback, decoder) {
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}

	function _6r(msg) {
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}

	function _6s(decoders) {
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}

	function _6t(keyValuePairs) {
		var obj = {};

		while (keyValuePairs.ctor !== '[]') {
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}

		return obj;
	}

	function _6u(a, b) {
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
				return _6u(a.decoder, b.decoder);

			case 'field':
				return a.field === b.field && _6u(a.decoder, b.decoder);

			case 'index':
				return a.index === b.index && _6u(a.decoder, b.decoder);

			case 'map-many':
				if (a.func !== b.func) {
					return false;
				}

				return _6v(a.decoders, b.decoders);

			case 'andThen':
				return a.callback === b.callback && _6u(a.decoder, b.decoder);

			case 'oneOf':
				return _6v(a.decoders, b.decoders);
		}
	}

	function _6v(aDecoders, bDecoders) {
		var len = aDecoders.length;

		if (len !== bDecoders.length) {
			return false;
		}

		for (var i = 0; i < len; i++) {
			if (!_6u(aDecoders[i], bDecoders[i])) {
				return false;
			}
		}

		return true;
	}

	function _6w(domNode, attrs) {
		for (var key in attrs) {
			var value = attrs[key];

			if (typeof value === 'undefined') {
				domNode.removeAttribute(key);
			} else {
				domNode.setAttribute(key, value);
			}
		}
	}

	function _6x(domNode, nsAttrs) {
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

	function _6y(domNode, view, initialVirtualNode, eventNode) {
		var state = 'NO_REQUEST';
		var currNode = initialVirtualNode;
		var nextModel;

		function updateIfNeeded() {
			switch (state) {
				case 'NO_REQUEST':
					throw new _$1.Error('Unexpected draw callback.\n' + 'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.');

				case 'PENDING_REQUEST':
					_6z(updateIfNeeded);

					state = 'EXTRA_REQUEST';
					var nextNode = view(nextModel);

					var patches = _6A(currNode, nextNode);

					domNode = _6K(domNode, currNode, patches, eventNode);
					currNode = nextNode;
					return;

				case 'EXTRA_REQUEST':
					state = 'NO_REQUEST';
					return;
			}
		}

		return function stepper(model) {
			if (state === 'NO_REQUEST') {
				_6z(updateIfNeeded);
			}

			state = 'PENDING_REQUEST';
			nextModel = model;
		};
	}

	function _6z(callback) {
		_$1.setTimeout(callback, 1000 / 60);
	}

	function _6A(a, b) {
		var patches = [];

		_6B(a, b, patches, 0);

		return patches;
	}

	function _6B(a, b, patches, index) {
		if (a === b) {
			return;
		}

		var aType = a.type;
		var bType = b.type; // Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.

		if (aType !== bType) {
			patches.push(_6C('p-redraw', index, b));
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

				_6B(a.node, b.node, subPatches, 0);

				if (subPatches.length > 0) {
					patches.push(_6C('p-thunk', index, subPatches));
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
					patches.push(_6C('p-redraw', index, b));
					return;
				} // check if taggers are "the same"


				if (nesting ? !_6D(aTaggers, bTaggers) : aTaggers !== bTaggers) {
					patches.push(_6C('p-tagger', index, bTaggers));
				} // diff everything below the taggers


				_6B(aSubNode, bSubNode, patches, index + 1);

				return;

			case 'text':
				if (a.text !== b.text) {
					patches.push(_6C('p-text', index, b.text));
					return;
				}

				return;

			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace) {
					patches.push(_6C('p-redraw', index, b));
					return;
				}

				var factsDiff = _6E(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_6C('p-facts', index, factsDiff));
				}

				_6G(a, b, patches, index);

				return;

			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace) {
					patches.push(_6C('p-redraw', index, b));
					return;
				}

				var factsDiff = _6E(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_6C('p-facts', index, factsDiff));
				}

				_6H(a, b, patches, index);

				return;

			case 'custom':
				if (a.impl !== b.impl) {
					patches.push(_6C('p-redraw', index, b));
					return;
				}

				var factsDiff = _6E(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_6C('p-facts', index, factsDiff));
				}

				var patch = b.impl.diff(a, b);

				if (patch) {
					patches.push(_6C('p-custom', index, patch));
					return;
				}

				return;
		}
	}

	function _6C(type, index, data) {
		return {
			index: index,
			type: type,
			data: data,
			domNode: _$1.undefined,
			eventNode: _$1.undefined
		};
	}

	function _6D(as, bs) {
		for (var i = 0; i < as.length; i++) {
			if (as[i] !== bs[i]) {
				return false;
			}
		}

		return true;
	}

	function _6E(a, b, category) {
		var diff; // look for changes and removals

		for (var aKey in a) {
			if (aKey === "STYLE" || aKey === "EVENT" || aKey === "ATTR" || aKey === "ATTR_NS") {
				var subDiff = _6E(a[aKey], b[aKey] || {}, aKey);

				if (subDiff) {
					diff = diff || {};
					diff[aKey] = subDiff;
				}

				continue;
			} // remove if not in the new facts


			if (!(aKey in b)) {
				diff = diff || {};
				diff[aKey] = typeof category === 'undefined' ? typeof a[aKey] === 'string' ? '' : null : category === "STYLE" ? '' : category === "EVENT" || category === "ATTR" ? _$1.undefined : {
					namespace: a[aKey].namespace,
					value: _$1.undefined
				};
				continue;
			}

			var aValue = a[aKey];
			var bValue = b[aKey]; // reference equal, so don't worry about it

			if (aValue === bValue && aKey !== 'value' || category === "EVENT" && _6F(aValue, bValue)) {
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

	function _6F(a, b) {
		if (a.options !== b.options) {
			if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault) {
				return false;
			}
		}

		return _5V.equality(a.decoder, b.decoder);
	}

	function _6G(aParent, bParent, patches, rootIndex) {
		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length; // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

		if (aLen > bLen) {
			patches.push(_6C('p-remove-last', rootIndex, aLen - bLen));
		} else if (aLen < bLen) {
			patches.push(_6C('p-append', rootIndex, bChildren.slice(aLen)));
		} // PAIRWISE DIFF EVERYTHING ELSE


		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;

		for (var i = 0; i < minLen; i++) {
			index++;
			var aChild = aChildren[i];

			_6B(aChild, bChildren[i], patches, index);

			index += aChild.descendantsCount || 0;
		}
	}

	function _6H(aParent, bParent, patches, rootIndex) {
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

				_6B(aNode, bNode, localPatches, index);

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

				_6B(aNode, bNextNode, localPatches, index);

				_6I(changes, localPatches, aKey, bNode, bIndex, inserts);

				index += aNode.descendantsCount || 0;
				index++;

				_6J(changes, localPatches, aKey, aNextNode, index);

				index += aNextNode.descendantsCount || 0;
				aIndex += 2;
				bIndex += 2;
				continue;
			} // insert b


			if (bLookAhead && newMatch) {
				index++;

				_6I(changes, localPatches, bKey, bNode, bIndex, inserts);

				_6B(aNode, bNextNode, localPatches, index);

				index += aNode.descendantsCount || 0;
				aIndex += 1;
				bIndex += 2;
				continue;
			} // remove a


			if (aLookAhead && oldMatch) {
				index++;

				_6J(changes, localPatches, aKey, aNode, index);

				index += aNode.descendantsCount || 0;
				index++;

				_6B(aNextNode, bNode, localPatches, index);

				index += aNextNode.descendantsCount || 0;
				aIndex += 2;
				bIndex += 1;
				continue;
			} // remove a, insert b


			if (aLookAhead && bLookAhead && aNextKey === bNextKey) {
				index++;

				_6J(changes, localPatches, aKey, aNode, index);

				_6I(changes, localPatches, bKey, bNode, bIndex, inserts);

				index += aNode.descendantsCount || 0;
				index++;

				_6B(aNextNode, bNextNode, localPatches, index);

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

			_6J(changes, localPatches, a._0, aNode, index);

			index += aNode.descendantsCount || 0;
			aIndex++;
		}

		var endInserts;

		while (bIndex < bLen) {
			endInserts = endInserts || [];
			var b = bChildren[bIndex];

			_6I(changes, localPatches, b._0, b._1, _$1.undefined, endInserts);

			bIndex++;
		}

		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined') {
			patches.push(_6C('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}

	function _6I(changes, localPatches, key, vnode, bIndex, inserts) {
		var entry = changes[key]; // never seen this key before

		if (typeof entry === 'undefined') {
			entry = {
				tag: 'insert',
				vnode: vnode,
				index: bIndex,
				data: _$1.undefined
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

			_6B(entry.vnode, vnode, subPatches, entry.index);

			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};
			return;
		} // this key has already been inserted or moved, a duplicate!


		_6I(changes, localPatches, key + "_elmW6BL", vnode, bIndex, inserts);
	}

	function _6J(changes, localPatches, key, vnode, index) {
		var entry = changes[key]; // never seen this key before

		if (typeof entry === 'undefined') {
			var patch = _6C('p-remove', index, _$1.undefined);

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

			_6B(vnode, entry.vnode, subPatches, index);

			var patch = _6C('p-remove', index, {
				patches: subPatches,
				entry: entry
			});

			localPatches.push(patch);
			return;
		} // this key has already been removed or moved, a duplicate!


		_6J(changes, localPatches, key + "_elmW6BL", vnode, index);
	}

	function _6K(rootDomNode, oldVirtualNode, patches, eventNode) {
		if (patches.length === 0) {
			return rootDomNode;
		}

		_6L(rootDomNode, oldVirtualNode, patches, eventNode);

		return _6N(rootDomNode, patches);
	}

	function _6L(domNode, vNode, patches, eventNode) {
		_6M(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}

	function _6M(domNode, vNode, patches, i, low, high, eventNode) {
		var patch = patches[i];
		var index = patch.index;

		while (index === low) {
			var patchType = patch.type;

			if (patchType === 'p-thunk') {
				_6L(domNode, vNode.node, patch.data, eventNode);
			} else if (patchType === 'p-reorder') {
				patch.domNode = domNode;
				patch.eventNode = eventNode;
				var subPatches = patch.data.patches;

				if (subPatches.length > 0) {
					_6M(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			} else if (patchType === 'p-remove') {
				patch.domNode = domNode;
				patch.eventNode = eventNode;
				var data = patch.data;

				if (typeof data !== 'undefined') {
					data.entry.data = domNode;
					var subPatches = data.patches;

					if (subPatches.length > 0) {
						_6M(domNode, vNode, subPatches, 0, low, high, eventNode);
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

				return _6M(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;

				for (var j = 0; j < vChildren.length; j++) {
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);

					if (low <= index && index <= nextLow) {
						i = _6M(childNodes[j], vChild, patches, i, low, nextLow, eventNode);

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
						i = _6M(childNodes[j], vChild, patches, i, low, nextLow, eventNode);

						if (!(patch = patches[i]) || (index = patch.index) > high) {
							return i;
						}
					}

					low = nextLow;
				}

				return i;

			case 'text':
			case 'thunk':
				throw new _$1.Error('should never traverse `text` or `thunk` nodes like this');
		}
	}

	function _6N(rootDomNode, patches) {
		for (var i = 0; i < patches.length; i++) {
			var patch = patches[i];
			var localDomNode = patch.domNode;

			var newNode = _6O(localDomNode, patch);

			if (localDomNode === rootDomNode) {
				rootDomNode = newNode;
			}
		}

		return rootDomNode;
	}

	function _6O(domNode, patch) {
		switch (patch.type) {
			case 'p-redraw':
				return _6P(domNode, patch.data, patch.eventNode);

			case 'p-facts':
				_5R(domNode, patch.eventNode, patch.data);

				return domNode;

			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;

			case 'p-thunk':
				return _6N(domNode, patch.data);

			case 'p-tagger':
				if (typeof domNode.elm_event_node_ref !== 'undefined') {
					domNode.elm_event_node_ref.tagger = patch.data;
				} else {
					domNode.elm_event_node_ref = {
						tagger: patch.data,
						parent: patch.eventNode
					};
				}

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
					domNode.appendChild(_5P(newNodes[i], patch.eventNode));
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

				entry.data = _6N(domNode, data.patches);
				return domNode;

			case 'p-reorder':
				return _6Q(domNode, patch);

			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);

			default:
				throw new _$1.Error('Ran into an unknown patch!');
		}
	}

	function _6P(domNode, vNode, eventNode) {
		var parentNode = domNode.parentNode;

		var newNode = _5P(vNode, eventNode);

		if (typeof newNode.elm_event_node_ref === 'undefined') {
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}

		if (parentNode && newNode !== domNode) {
			parentNode.replaceChild(newNode, domNode);
		}

		return newNode;
	}

	function _6Q(domNode, patch) {
		var data = patch.data; // remove end inserts

		var frag = _6R(data.endInserts, patch); // removals


		domNode = _6N(domNode, data.patches); // inserts

		var inserts = data.inserts;

		for (var i = 0; i < inserts.length; i++) {
			var insert = inserts[i];
			var entry = insert.entry;
			var node = entry.tag === 'move' ? entry.data : _5P(entry.vnode, patch.eventNode);
			domNode.insertBefore(node, domNode.childNodes[insert.index]);
		} // add end inserts


		if (typeof frag !== 'undefined') {
			domNode.appendChild(frag);
		}

		return domNode;
	}

	function _6R(endInserts, patch) {
		if (typeof endInserts === 'undefined') {
			return;
		}

		var frag = $3.createDocumentFragment();

		for (var i = 0; i < endInserts.length; i++) {
			var insert = endInserts[i];
			var entry = insert.entry;
			frag.appendChild(entry.tag === 'move' ? entry.data : _5P(entry.vnode, patch.eventNode));
		}

		return frag;
	}

	function _6T() {
		var numSteps = 0;
		var process;

		while (numSteps < 10000 && (process = _1V.shift())) {
			if (process.root) {
				numSteps = _6U(numSteps, process);
			}
		}

		if (!process) {
			$1 = false;
			return;
		}

		_$1.setTimeout(_6T, 0);
	}

	function _6U(numSteps, process) {
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

					_1U(process);
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

			throw new _$1.Error(ctor);
		}

		if (numSteps < 10000) {
			return numSteps + 1;
		}

		_1U(process);

		return numSteps;
	}

	function _6V(process) {
		return _9(function (callback) {
			var root = process.root;

			if (root.ctor === '_Task_nativeBinding' && root.cancel) {
				root.cancel();
			}

			process.root = null;
			callback(_7(_h.Tuple0));
		});
	}

	function _6W(time) {
		return _9(function (callback) {
			var id = _$1.setTimeout(function () {
				callback(_7(_h.Tuple0));
			}, time);

			return function () {
				_$1.clearTimeout(id);
			};
		});
	}

	function _6Y(process, msg) {
		return _9(function (callback) {
			_6Z(process, msg);

			callback(_7(_h.Tuple0));
		});
	}

	function _6Z(process, msg) {
		process.mailbox.push(msg);

		_1U(process);
	}

	function _70(name, converter) {
		_71(name);

		_3Z[name] = {
			tag: 'cmd',
			cmdMap: _72,
			converter: converter,
			isForeign: true
		};
		return _74(name);
	}

	function _71(name) {
		if (name in _3Z) {
			throw new _$1.Error('There can only be one port named `' + name + '`, but your program has multiple.');
		}
	}

	function _73(tagger, value) {
		return value;
	}

	function _74(home) {
		return function (value) {
			return {
				type: 'leaf',
				home: home,
				value: value
			};
		};
	}

	function _75(name, converter) {
		_71(name);

		_3Z[name] = {
			tag: 'sub',
			subMap: _76,
			converter: converter,
			isForeign: true
		};
		return _74(name);
	}

	function _77(tagger, finalTagger) {
		return function (value) {
			return tagger(finalTagger(value));
		};
	}

	function _78(vnode) {
		var emptyBag = _79(_x.Nil);

		var noChange = _h.Tuple2(_h.Tuple0, emptyBag);

		return _7a({
			init: noChange,
			view: function (model) {
				return main;
			},
			update: _3k(function (msg, model) {
				return noChange;
			}),
			subscriptions: function (model) {
				return emptyBag;
			}
		});
	}

	function _79(list) {
		return {
			type: 'node',
			branches: list
		};
	}

	function _7a(impl) {
		return _F(_7b.program, undefined, impl);
	}

	function _7c(tag) {
		return _3k(function (factList, kidList) {
			return _5q(tag, factList, kidList);
		});
	}

	function _7d(factList, model, impl) {
		var facts = _5r(factList).facts;

		return {
			type: 'custom',
			facts: facts,
			model: model,
			impl: impl
		};
	}

	function _7f(tagger, node) {
		return {
			type: 'tagger',
			tagger: tagger,
			node: node,
			descendantsCount: 1 + (node.descendantsCount || 0)
		};
	}

	function _7g(value) {
		return {
			key: "STYLE",
			value: value
		};
	}

	function _7i(key, value) {
		return {
			key: "ATTR",
			realKey: key,
			value: value
		};
	}

	function _7k(namespace, key, value) {
		return {
			key: "ATTR_NS",
			realKey: key,
			value: {
				value: value,
				namespace: namespace
			}
		};
	}

	function _7m(func, property) {
		if (property.key !== "EVENT") {
			return property;
		}

		return _5B(property.realKey, property.value.options, _F(_67, func, property.value.decoder));
	}

	function _7o(fn, a) {
		return _7p(fn, [a], function () {
			return fn(a);
		});
	}

	function _7p(func, args, thunk) {
		return {
			type: 'thunk',
			func: func,
			args: args,
			thunk: thunk,
			node: _$1.undefined
		};
	}

	function _7r(fn, a, b) {
		return _7p(fn, [a, b], function () {
			return _F(fn, a, b);
		});
	}

	function _7t(fn, a, b, c) {
		return _7p(fn, [a, b, c], function () {
			return _l(fn, a, b, c);
		});
	}

	function _7v(tag, factList, kidList) {
		var organized = _5r(factList);

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

	function _7x(debugWrap, impl) {
		return $_8.call(this, _7y, debugWrap, impl);
	}

	function _7y(flagDecoder, moduleName) {
		return function (init, flags, domNode) {
			if (typeof flags === 'undefined') {
				return init;
			}

			var errorMessage = 'The `' + moduleName + '` module does not need flags.\n' + 'Initialize it with no arguments and you should be all set!';

			_7z(errorMessage, domNode);
		};
	}

	function _7z(errorMessage, domNode) {
		if (domNode) {
			domNode.innerHTML = '<div style="padding-left:1em;">' + '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>' + '<pre style="padding-left:1em;">' + errorMessage + '</pre>' + '</div>';
		}

		throw new _$1.Error(errorMessage);
	}

	function _7A(impl, object, moduleName, flagChecker) {
		object['embed'] = function embed(node, flags) {
			while (node.lastChild) {
				node.removeChild(node.lastChild);
			}

			return _3.initialize(flagChecker(impl.init, flags, node), impl.update, impl.subscriptions, _7B(node, impl.view));
		};

		object['fullscreen'] = function fullscreen(flags) {
			return _3.initialize(flagChecker(impl.init, flags, _$1.document.body), impl.update, impl.subscriptions, _7B(_$1.document.body, impl.view));
		};
	}

	function _7B(parentNode, view) {
		return function (tagger, initialModel) {
			var eventNode = {
				tagger: tagger,
				parent: _$1.undefined
			};
			var initialVirtualNode = view(initialModel);

			var domNode = _5P(initialVirtualNode, eventNode);

			parentNode.appendChild(domNode);
			return _6y(domNode, view, initialVirtualNode, eventNode);
		};
	}

	function _7C(impl, object, moduleName, flagChecker) {
		object['fullscreen'] = function fullscreen(flags) {
			var popoutRef = {
				doc: _$1.undefined
			};
			return _3.initialize(flagChecker(impl.init, flags, _$1.document.body), impl.update(_7D(popoutRef)), impl.subscriptions, _7E(moduleName, _$1.document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut));
		};

		object['embed'] = function fullscreen(node, flags) {
			var popoutRef = {
				doc: _$1.undefined
			};
			return _3.initialize(flagChecker(impl.init, flags, node), impl.update(_7D(popoutRef)), impl.subscriptions, _7E(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut));
		};
	}

	function _7D(popoutRef) {
		return _6.nativeBinding(function (callback) {
			var doc = popoutRef.doc;

			if (doc) {
				var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];

				if (msgs) {
					msgs.scrollTop = msgs.scrollHeight;
				}
			}

			callback(_6.succeed(_h.Tuple0));
		});
	}

	function _7E(moduleName, parentNode, popoutRef, view, viewIn, viewOut) {
		return function (tagger, initialModel) {
			var appEventNode = {
				tagger: tagger,
				parent: _$1.undefined
			};
			var eventNode = {
				tagger: tagger,
				parent: _$1.undefined
			}; // make normal stepper

			var appVirtualNode = view(initialModel);

			var appNode = _5P(appVirtualNode, appEventNode);

			parentNode.appendChild(appNode);

			var appStepper = _6y(appNode, view, appVirtualNode, appEventNode); // make overlay stepper


			var overVirtualNode = viewIn(initialModel)._1;

			var overNode = _5P(overVirtualNode, eventNode);

			parentNode.appendChild(overNode);

			var wrappedViewIn = _7F(appEventNode, overNode, viewIn);

			var overStepper = _6y(overNode, wrappedViewIn, overVirtualNode, eventNode); // make debugger stepper


			var debugStepper = _7L(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

			return function stepper(model) {
				appStepper(model);
				overStepper(model);
				debugStepper(model);
			};
		};
	}

	function _7F(appEventNode, overlayNode, viewIn) {
		var ignorer = _7G(overlayNode);

		var blocking = 'Normal';
		var overflow;
		var normalTagger = appEventNode.tagger;

		var blockTagger = function () {};

		return function (model) {
			var tuple = viewIn(model);
			var newBlocking = tuple._0.ctor;
			appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;

			if (blocking !== newBlocking) {
				_7H('removeEventListener', ignorer, blocking);

				_7H('addEventListener', ignorer, newBlocking);

				if (blocking === 'Normal') {
					overflow = _$1.document.body.style.overflow;
					_$1.document.body.style.overflow = 'hidden';
				}

				if (newBlocking === 'Normal') {
					_$1.document.body.style.overflow = overflow;
				}

				blocking = newBlocking;
			}

			return tuple._1;
		};
	}

	function _7G(overlayNode) {
		return function (event) {
			if (event.type === 'keydown' && event.metaKey && event.which === 82) {
				return;
			}

			var isScroll = event.type === 'scroll' || event.type === 'wheel';
			var node = event.target;

			while (node !== null) {
				if (node.className === 'elm-overlay-message-details' && isScroll) {
					return;
				}

				if (node === overlayNode && !isScroll) {
					return;
				}

				node = node.parentNode;
			}

			event.stopPropagation();
			event.preventDefault();
		};
	}

	function _7H(verbEventListener, ignorer, blocking) {
		switch (blocking) {
			case 'Normal':
				return;

			case 'Pause':
				return _7I(verbEventListener, ignorer, _7J);

			case 'Message':
				return _7I(verbEventListener, ignorer, _7K);
		}
	}

	function _7I(verbEventListener, handler, eventNames) {
		for (var i = 0; i < eventNames.length; i++) {
			_$1.document.body[verbEventListener](eventNames[i], handler, true);
		}
	}

	function _7L(initialModel, view, eventNode, parentNode, moduleName, popoutRef) {
		var curr;
		var domNode;
		return function stepper(model) {
			if (!model.isDebuggerOpen) {
				return;
			}

			if (!popoutRef.doc) {
				curr = view(model);
				domNode = _7M(moduleName, popoutRef, curr, eventNode);
				return;
			} // switch to document of popout


			$3 = popoutRef.doc;
			var next = view(model);

			var patches = _6A(curr, next);

			domNode = _6K(domNode, curr, patches, eventNode);
			curr = next; // switch back to normal document

			$3 = _$1.document;
		};
	}

	function _7M(moduleName, popoutRef, virtualNode, eventNode) {
		var w = 900;
		var h = 360;
		var x = screen.width - w;
		var y = screen.height - h;

		var debugWindow = _$1.window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y); // switch to window document


		$3 = debugWindow.document;
		popoutRef.doc = $3;
		$3.title = 'Debugger - ' + moduleName;
		$3.body.style.margin = '0';
		$3.body.style.padding = '0';

		var domNode = _5P(virtualNode, eventNode);

		$3.body.appendChild(domNode);
		$3.addEventListener('keydown', function (event) {
			if (event.metaKey && event.which === 82) {
				_$1.window.location.reload();
			}

			if (event.which === 38) {
				eventNode.tagger({
					ctor: 'Up'
				});
				event.preventDefault();
			}

			if (event.which === 40) {
				eventNode.tagger({
					ctor: 'Down'
				});
				event.preventDefault();
			}
		});

		function close() {
			popoutRef.doc = _$1.undefined;
			debugWindow.close();
		}

		_$1.window.addEventListener('unload', close);

		debugWindow.addEventListener('unload', function () {
			popoutRef.doc = _$1.undefined;

			_$1.window.removeEventListener('unload', close);

			eventNode.tagger({
				ctor: 'Close'
			});
		}); // switch back to the normal document

		$3 = _$1.document;
		return domNode;
	}

	function _7P(flagDecoder, moduleName) {
		return function (init, flags, domNode) {
			if (typeof flagDecoder === 'undefined') {
				var errorMessage = 'Are you trying to sneak a Never value into Elm? Trickster!\n' + 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n' + 'Use `program` instead if you do not want flags.';

				_7z(errorMessage, domNode);
			}

			var result = _F(_5V.run, flagDecoder, flags);

			if (result.ctor === 'Ok') {
				return init(result._0);
			}

			var errorMessage = 'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n' + 'I tried to convert it to an Elm value, but ran into this problem:\n\n' + result._0;

			_7z(errorMessage, domNode);
		};
	}

	function _7Q(vNode) {
		var nothing = _h.Tuple2(_h.Tuple0, _3R);

		return _F(_7w, undefined, {
			init: nothing,
			view: function () {
				return vNode;
			},
			update: _3k(function () {
				return nothing;
			}),
			subscriptions: function () {
				return _3U;
			}
		})();
	}

	function _7R(impl) {
		return function (flagDecoder) {
			return function (object, moduleName) {
				object['worker'] = function worker(flags) {
					if (typeof flags !== 'undefined') {
						throw new _$1.Error('The `' + moduleName + '` module does not need flags.\n' + 'Call ' + moduleName + '.worker() with no arguments and you should be all set!');
					}

					return _7S(impl.init, impl.update, impl.subscriptions, _7Y);
				};
			};
		};
	}

	function _7S(init, update, subscriptions, renderer) {
		// ambient state
		var managers = {};
		var updateView; // init and update state in main process

		var initApp = _6.nativeBinding(function (callback) {
			var model = init._0;
			updateView = renderer(enqueue, model);
			var cmds = init._1;
			var subs = subscriptions(model);

			_3W(managers, cmds, subs);

			callback(_6.succeed(model));
		});

		function onMessage(msg, model) {
			return _6.nativeBinding(function (callback) {
				var results = _F(update, msg, model);

				model = results._0;
				updateView(model);
				var cmds = results._1;
				var subs = subscriptions(model);

				_3W(managers, cmds, subs);

				callback(_6.succeed(model));
			});
		}

		var mainProcess = _7T(initApp, onMessage);

		function enqueue(msg) {
			_6.rawSend(mainProcess, msg);
		}

		var ports = _7U(managers, enqueue);

		return ports ? {
			ports: ports
		} : {};
	}

	function _7T(init, onMessage) {
		var andThen = _6.andThen;

		function loop(state) {
			var handleMsg = _6.receive(function (msg) {
				return onMessage(msg, state);
			});

			return _F(andThen, loop, handleMsg);
		}

		var task = _F(andThen, loop, init);

		return _6.rawSpawn(task);
	}

	function _7U(managers, callback) {
		var ports; // setup all necessary effect managers

		for (var key in _3Z) {
			var manager = _3Z[key];

			if (manager.isForeign) {
				ports = ports || {};
				ports[key] = manager.tag === 'cmd' ? _7V(key) : _7W(key, callback);
			}

			managers[key] = _7X(manager, callback);
		}

		return ports;
	}

	function _7V(name) {
		var subs = [];
		var converter = _3Z[name].converter; // CREATE MANAGER

		var init = _6.succeed(null);

		function onEffects(router, cmdList, state) {
			while (cmdList.ctor !== '[]') {
				// grab a separate reference to subs in case unsubscribe is called
				var currentSubs = subs;
				var value = converter(cmdList._0);

				for (var i = 0; i < currentSubs.length; i++) {
					currentSubs[i](value);
				}

				cmdList = cmdList._1;
			}

			return init;
		}

		_3Z[name].init = init;
		_3Z[name].onEffects = _o(onEffects); // PUBLIC API

		function subscribe(callback) {
			subs.push(callback);
		}

		function unsubscribe(callback) {
			// copy subs into a new array in case unsubscribe is called within a
			// subscribed callback
			subs = subs.slice();
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

	function _7W(name, callback) {
		var sentBeforeInit = [];
		var subs = _x.Nil;
		var converter = _3Z[name].converter;
		var currentOnEffects = preInitOnEffects;
		var currentSend = preInitSend; // CREATE MANAGER

		var init = _6.succeed(null);

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

		_3Z[name].init = init;
		_3Z[name].onEffects = _o(onEffects); // PUBLIC API

		function preInitSend(value) {
			sentBeforeInit.push(value);
		}

		function postInitSend(value) {
			var temp = subs;

			while (temp.ctor !== '[]') {
				callback(temp._0(value));
				temp = temp._1;
			}
		}

		function send(incomingValue) {
			var result = _F(_5Y, converter, incomingValue);

			if (result.ctor === 'Err') {
				throw new _$1.Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
			}

			currentSend(result._0);
		}

		return {
			send: send
		};
	}

	function _7X(info, callback) {
		var router = {
			main: callback,
			self: _$1.undefined
		};
		var tag = info.tag;
		var onEffects = info.onEffects;
		var onSelfMsg = info.onSelfMsg;

		function onMessage(msg, state) {
			if (msg.ctor === 'self') {
				return _l(onSelfMsg, router, msg._0, state);
			}

			var fx = msg._0;

			switch (tag) {
				case 'cmd':
					return _l(onEffects, router, fx.cmds, state);

				case 'sub':
					return _l(onEffects, router, fx.subs, state);

				case 'fx':
					return _M(onEffects, router, fx.cmds, fx.subs, state);
			}
		}

		var process = _7T(info.init, onMessage);

		router.self = process;
		return process;
	}

	function _7Y(enqueue, _) {
		return function (_) {};
	}

	function _7Z(impl) {
		return function (flagDecoder) {
			return function (object, moduleName) {
				object['worker'] = function worker(flags) {
					if (typeof flagDecoder === 'undefined') {
						throw new _$1.Error('Are you trying to sneak a Never value into Elm? Trickster!\n' + 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n' + 'Use `program` instead if you do not want flags.');
					}

					var result = _F(_5V.run, flagDecoder, flags);

					if (result.ctor === 'Err') {
						throw new _$1.Error(moduleName + '.worker(...) was called with an unexpected argument.\n' + 'I tried to convert it to an Elm value, but ran into this problem:\n\n' + result._0);
					}

					return _7S(impl.init(result._0), impl.update, impl.subscriptions, _7Y);
				};
			};
		};
	}

	function _81(tagger, bag) {
		return {
			type: 'map',
			tagger: tagger,
			tree: bag
		};
	}

	function _82(init, flags, domNode) {
		if (typeof flags === 'undefined') {
			return init;
		}

		var errorMessage = 'The `' + "Main" + '` module does not need flags.\n' + 'Initialize it with no arguments and you should be all set!';

		_7z(errorMessage, domNode);
	}

	function _84(flags) {
		return _3.initialize(_82(_83.init, flags, _$1.document.body), _83.update, _83.subscriptions, _7B(_$1.document.body, _83.view));
	}

	var _a = $_0.bind(null, _b);

	_a.arity = 2;
	_a.func = _b;

	var _c = $_0.bind(null, _d);

	_c.arity = 2;
	_c.func = _d;

	var _m = $_1.bind(null, _n);

	_m.arity = 3;
	_m.func = _n;
	var _q = {
		ctor: "_Array",
		height: 0,
		table: []
	};

	var _y = $_a();

	var _A = $_0.bind(null, _z);

	_A.arity = 2;
	_A.func = _z;

	var _D = $_1.bind(null, _E);

	_D.arity = 3;
	_D.func = _E;

	var _G = $_1.bind(null, _H);

	_G.arity = 3;
	_G.func = _H;

	var _I = $_2.bind(null, _J);

	_I.arity = 4;
	_I.func = _J;

	var _K = $_3.bind(null, _L);

	_K.arity = 5;
	_K.func = _L;

	var _N = $_4.bind(null, _O);

	_N.arity = 6;
	_N.func = _O;

	var _Q = $_0.bind(null, _R);

	_Q.arity = 2;
	_Q.func = _R;

	var _S = $_0.bind(null, _T);

	_S.arity = 2;
	_S.func = _T;
	var _x = {
		Nil: _y,
		Cons: _z,
		cons: _A,
		toArray: _B,
		fromArray: _C,
		foldr: _D,
		map2: _G,
		map3: _I,
		map4: _K,
		map5: _N,
		sortBy: _Q,
		sortWith: _S
	};

	var _U = $_0.bind(null, _V);

	_U.arity = 2;
	_U.func = _V;

	var _X = $_0.bind(null, _Y);

	_X.arity = 2;
	_X.func = _Y;

	var _1d = $_0.bind(null, _1e);

	_1d.arity = 2;
	_1d.func = _1e;

	var _1h = $_1.bind(null, _1i);

	_1h.arity = 3;
	_1h.func = _1i;

	var _1m = $_0.bind(null, _1n);

	_1m.arity = 2;
	_1m.func = _1n;

	var _1p = $_1.bind(null, _1q);

	_1p.arity = 3;
	_1p.func = _1q;

	var _1s = $_0.bind(null, _1t);

	_1s.arity = 2;
	_1s.func = _1t;

	var _1u = $_0.bind(null, _1v);

	_1u.arity = 2;
	_1u.func = _1v;

	var _1x = $_1.bind(null, _1y);

	_1x.arity = 3;
	_1x.func = _1y;

	var _1z = $_1.bind(null, _1A);

	_1z.arity = 3;
	_1z.func = _1A;
	var _p = {
		empty: _q,
		fromList: _s,
		toList: _v,
		initialize: _U,
		append: _X,
		push: _1d,
		slice: _1h,
		get: _1m,
		set: _1p,
		map: _1s,
		indexedMap: _1u,
		foldl: _1x,
		foldr: _1z,
		length: _u,
		toJSArray: _1B,
		fromJSArray: _1D
	};
	var $0 = 3;

	var _1O = $_a();

	_1L.arity = 2;
	_1L.func = _1M;
	var _h = {
		eq: _i,
		cmp: _1F,
		Tuple0: {
			ctor: "_Tuple0"
		},
		Tuple2: _1H,
		chr: _1I,
		update: _1J,
		guid: _1K,
		append: _1L,
		crash: _1P,
		crashCase: _1R,
		toString: _1S
	};

	var _24 = $_0.bind(null, _25);

	_24.arity = 2;
	_24.func = _25;

	var _26 = $_0.bind(null, _27);

	_26.arity = 2;
	_26.func = _27;

	var _28 = $_1.bind(null, _29);

	_28.arity = 3;
	_28.func = _29;

	var _2a = $_1.bind(null, _2b);

	_2a.arity = 3;
	_2a.func = _2b;

	var _2c = $_0.bind(null, _2d);

	_2c.arity = 2;
	_2c.func = _2d;

	var _2e = $_0.bind(null, _2f);

	_2e.arity = 2;
	_2e.func = _2f;
	var _23 = {
		"<|": _24,
		"|>": _26,
		">>": _28,
		"<<": _2a,
		"++": _1L,
		"||": undefined,
		"&&": undefined,
		">=": undefined,
		"<=": undefined,
		">": undefined,
		"<": undefined,
		"/=": undefined,
		"==": undefined,
		"^": undefined,
		"%": _2c,
		"//": _2e,
		"/": undefined,
		"*": undefined,
		"-": undefined,
		"+": undefined
	};

	var _2i = $_0.bind(null, _2j);

	_2i.arity = 2;
	_2i.func = _2j;

	var _2x = $_9("LBlack");

	var _2w = {
		ctor: "RBEmpty_elm_builtin",
		_0: _2x
	};

	var _2A = $_9("Nothing");

	var _2B = $_9("Same");

	var _2C = $_9("Insert");

	var _2D = $_3.bind(null, _2E);

	_2D.arity = 5;
	_2D.func = _2E;

	var _2F = $_9("Red");

	var _2I = ["LT", "EQ", "GT"];
	_2G.arity = 2;
	_2G.func = _2H;

	var _2K = $_9("Remove");

	var _2O = $_9("LBBlack");

	var _2R = $_0.bind(null, _2S);

	_2R.arity = 2;
	_2R.func = _2S;
	var _2P = {
		crash: _2Q,
		log: _2R
	};

	var _2T = $_9("Black");

	var _2U = $_2.bind(null, _2V);

	_2U.arity = 4;
	_2U.func = _2V;

	var _35 = $_9("BBlack");

	var _39 = $_9("NBlack");

	_32.arity = 5;
	_32.func = _33;
	_2Z.arity = 5;
	_2Z.func = _30;
	_2X.arity = 5;
	_2X.func = _2Y;

	var _3d = $_1.bind(null, _3e);

	_3d.arity = 3;
	_3d.func = _3e;
	_2L.arity = 3;
	_2L.func = _2M;
	_2y.arity = 3;
	_2y.func = _2z;

	var _3i = $_0.bind(null, _3j);

	_3i.arity = 2;
	_3i.func = _3j;
	_2q.arity = 2;
	_2q.func = _2r;

	var _3p = $_0.bind(null, _3q);

	_3p.arity = 2;
	_3p.func = _3q;
	_3n.arity = 2;
	_3n.func = _3o;
	var _2p = {
		toTask: _2q,
		expectStringResponse: _3m,
		mapExpect: _3n,
		multipart: _3r,
		encodeUri: _3s,
		decodeUri: _3t
	};
	_2g.arity = 2;
	_2g.func = _2h;

	var _3y = $_9("EmptyBody");

	var _3A = $_0.bind(null, _3B);

	_3A.arity = 2;
	_3A.func = _3B;
	_3v.arity = 2;
	_3v.func = _3w;
	var _3M = {
		ctor: "<decoder>",
		tag: "field",
		field: "data",
		decoder: {
			ctor: "<decoder>",
			tag: "field",
			field: "image_url",
			decoder: {
				ctor: "<decoder>",
				tag: "string"
			}
		}
	};

	var _3P = $_0.bind(null, _3Q);

	_3P.arity = 2;
	_3P.func = _3Q;
	var _3R = {
		type: "node",
		branches: {
			ctor: "[]"
		}
	};
	_20.arity = 2;
	_20.func = _21;
	var _3U = {
		type: "node",
		branches: {
			ctor: "[]"
		}
	};
	var _41 = {
		ctor: "_Task_succeed",
		value: {
			ctor: "_Tuple0"
		}
	};

	var _45 = $_0.bind(null, _46);

	_45.arity = 2;
	_45.func = _46;

	var _48 = $_1.bind(null, _49);

	_48.arity = 3;
	_48.func = _49;

	var _4a = $_0.bind(null, _4b);

	_4a.arity = 2;
	_4a.func = _4b;
	_43.arity = 3;
	_43.func = _44;

	var _4c = $_1.bind(null, _4d);

	_4c.arity = 3;
	_4c.func = _4d;

	var _4e = $_0.bind(null, _4f);

	_4e.arity = 2;
	_4e.func = _4f;
	var _4h = {
		ctor: "_Task_succeed",
		value: {
			taggers: _2w,
			processes: _2w
		}
	};

	var _4o = $_0.bind(null, _4p);

	_4o.arity = 2;
	_4o.func = _4p;
	_4m.arity = 3;
	_4m.func = _4n;

	var _4q = $_1.bind(null, _4r);

	_4q.arity = 3;
	_4q.func = _4r;

	var _4u = $_0.bind(null, _4v);

	_4u.arity = 2;
	_4u.func = _4v;
	_4s.arity = 2;
	_4s.func = _4t;

	var _4z = $_1.bind(null, _4A);

	_4z.arity = 3;
	_4z.func = _4A;
	_4x.arity = 6;
	_4x.func = _4y;

	var _4B = $_0.bind(null, _4C);

	_4B.arity = 2;
	_4B.func = _4C;

	var _4F = $_0.bind(null, _4G);

	_4F.arity = 2;
	_4F.func = _4G;

	var _4H = $_0.bind(null, _4I);

	_4H.arity = 2;
	_4H.func = _4I;
	_4D.arity = 3;
	_4D.func = _4E;
	_4j.arity = 3;
	_4j.func = _4k;
	var _4L = {
		ctor: "_Task_nativeBinding",
		callback: _4M,
		cancel: null
	};
	_4J.arity = 3;
	_4J.func = _4K;

	var _4P = $_0.bind(null, _4Q);

	_4P.arity = 2;
	_4P.func = _4Q;
	_4N.arity = 2;
	_4N.func = _4O;
	var _3Z = {
		Task: {
			pkg: "elm-lang/core",
			init: _41,
			onEffects: _43,
			onSelfMsg: _4c,
			tag: "cmd",
			cmdMap: _4e
		},
		Time: {
			pkg: "elm-lang/core",
			init: _4h,
			onEffects: _4j,
			onSelfMsg: _4J,
			tag: "sub",
			subMap: _4N
		}
	};
	var _4X = {
		main: _4Y
	};
	var _4T = {
		ctor: "_Process",
		id: 1,
		root: {
			ctor: "_Task_andThen",
			callback: _4V,
			task: _41
		},
		stack: null,
		mailbox: []
	};
	var _54 = {
		main: _4Y
	};
	var _50 = {
		ctor: "_Process",
		id: 2,
		root: {
			ctor: "_Task_andThen",
			callback: _52,
			task: _4h
		},
		stack: null,
		mailbox: []
	};
	var _4S = {
		Task: _4T,
		Time: _50
	};
	var _5i = {
		method: "GET",
		headers: {
			ctor: "[]"
		},
		url: "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats",
		body: _3y,
		expect: {
			responseType: "text",
			responseToResult: _5l
		},
		timeout: _2A,
		withCredentials: false
	};
	var _58 = {
		ctor: "_Tuple2",
		_0: {
			topic: "cats",
			gifUrl: "waiting.gif"
		},
		_1: {
			type: "leaf",
			home: "Task",
			value: {
				ctor: "Perform",
				_0: {
					ctor: "_Task_onError",
					callback: _5d,
					task: {
						ctor: "_Task_andThen",
						callback: _5f,
						task: {
							ctor: "_Task_nativeBinding",
							callback: _5h,
							cancel: null
						}
					}
				}
			}
		}
	};

	var _5p = $_7.bind(null, "div");

	var _5o = $_0.bind(null, _5p);

	_5o.arity = 2;
	_5o.func = _5p;

	var _5t = $_7.bind(null, "h2");

	var _5s = $_0.bind(null, _5t);

	_5s.arity = 2;
	_5s.func = _5t;

	var _5w = $_7.bind(null, "button");

	var _5v = $_0.bind(null, _5w);

	_5v.arity = 2;
	_5v.func = _5w;

	var _5A = $_1.bind(null, _5B);

	_5A.arity = 3;
	_5A.func = _5B;
	var _5C = {
		stopPropagation: false,
		preventDefault: false
	};
	_5y.arity = 2;
	_5y.func = _5z;

	var _5E = $_9("MorePlease");

	var _5G = $_7.bind(null, "br");

	var _5F = $_0.bind(null, _5G);

	_5F.arity = 2;
	_5F.func = _5G;

	var _5I = $_7.bind(null, "img");

	var _5H = $_0.bind(null, _5I);

	_5H.arity = 2;
	_5H.func = _5I;

	var _5M = $_0.bind(null, _5N);

	_5M.arity = 2;
	_5M.func = _5N;
	_5K.arity = 2;
	_5K.func = _5L;
	var _5Q = document;

	var _5W = $_0.bind(null, _5X);

	_5W.arity = 2;
	_5W.func = _5X;

	var _5Y = $_0.bind(null, _3C);

	_5Y.arity = 2;
	_5Y.func = _3C;

	var _61 = $_0.bind(null, _62);

	_61.arity = 2;
	_61.func = _62;

	var _63 = $_0.bind(null, _64);

	_63.arity = 2;
	_63.func = _64;

	var _65 = $_0.bind(null, _66);

	_65.arity = 2;
	_65.func = _66;

	var _67 = $_0.bind(null, _68);

	_67.arity = 2;
	_67.func = _68;

	var _6a = $_1.bind(null, _6b);

	_6a.arity = 3;
	_6a.func = _6b;

	var _6c = $_2.bind(null, _6d);

	_6c.arity = 4;
	_6c.func = _6d;

	var _6e = $_3.bind(null, _6f);

	_6e.arity = 5;
	_6e.func = _6f;

	var _6g = $_4.bind(null, _6h);

	_6g.arity = 6;
	_6g.func = _6h;
	_6i.arity = 7;
	_6i.func = _6j;
	_6k.arity = 8;
	_6k.func = _6l;
	_6m.arity = 9;
	_6m.func = _6n;

	var _6p = $_0.bind(null, _6q);

	_6p.arity = 2;
	_6p.func = _6q;
	var _5V = {
		encode: _5W,
		runOnString: _3A,
		run: _5Y,
		decodeNull: _5Z,
		decodePrimitive: _60,
		decodeContainer: _61,
		decodeField: _63,
		decodeIndex: _65,
		map1: _67,
		map2: _6a,
		map3: _6c,
		map4: _6e,
		map5: _6g,
		map6: _6i,
		map7: _6k,
		map8: _6m,
		decodeKeyValuePairs: _6o,
		andThen: _6p,
		fail: _6r,
		succeed: _5D,
		oneOf: _6s,
		identity: _5O,
		encodeNull: null,
		encodeArray: _1B,
		encodeList: _B,
		encodeObject: _6t,
		equality: _6u
	};
	var $3 = _5Q;
	var _1W = {
		ctor: "_Process",
		id: 0,
		root: {
			ctor: "_Task_andThen",
			callback: _1Y,
			task: {
				ctor: "_Task_nativeBinding",
				callback: _57,
				cancel: null
			}
		},
		stack: null,
		mailbox: []
	};
	var _1V = [_1W, _4T, _50];
	var $1 = true;

	var _6X = $_0.bind(null, _6Y);

	_6X.arity = 2;
	_6X.func = _6Y;
	var _6 = {
		succeed: _7,
		fail: _8,
		nativeBinding: _9,
		andThen: _a,
		onError: _c,
		receive: _e,
		spawn: _f,
		kill: _6V,
		sleep: _6W,
		send: _6X,
		rawSpawn: _g,
		rawSend: _6Z
	};
	_4.arity = 2;
	_4.func = _5;

	var _72 = $_0.bind(null, _73);

	_72.arity = 2;
	_72.func = _73;

	var _76 = $_0.bind(null, _77);

	_76.arity = 2;
	_76.func = _77;

	var _7e = $_0.bind(null, _7f);

	_7e.arity = 2;
	_7e.func = _7f;

	var _7h = $_0.bind(null, _7i);

	_7h.arity = 2;
	_7h.func = _7i;

	var _7j = $_1.bind(null, _7k);

	_7j.arity = 3;
	_7j.func = _7k;

	var _7l = $_0.bind(null, _7m);

	_7l.arity = 2;
	_7l.func = _7m;

	var _7n = $_0.bind(null, _7o);

	_7n.arity = 2;
	_7n.func = _7o;

	var _7q = $_1.bind(null, _7r);

	_7q.arity = 3;
	_7q.func = _7r;

	var _7s = $_2.bind(null, _7t);

	_7s.arity = 4;
	_7s.func = _7t;

	var _7u = $_1.bind(null, _7v);

	_7u.arity = 3;
	_7u.func = _7v;
	var _7J = ["click", "dblclick", "mousemove", "mouseup", "mousedown", "mouseenter", "mouseleave", "touchstart", "touchend", "touchcancel", "touchmove", "pointerdown", "pointerup", "pointerover", "pointerout", "pointerenter", "pointerleave", "pointermove", "pointercancel", "dragstart", "drag", "dragend", "dragenter", "dragover", "dragleave", "drop", "keyup", "keydown", "keypress", "input", "change", "focus", "blur"];
	var _7K = ["click", "dblclick", "mousemove", "mouseup", "mousedown", "mouseenter", "mouseleave", "touchstart", "touchend", "touchcancel", "touchmove", "pointerdown", "pointerup", "pointerover", "pointerout", "pointerenter", "pointerleave", "pointermove", "pointercancel", "dragstart", "drag", "dragend", "dragenter", "dragover", "dragleave", "drop", "keyup", "keydown", "keypress", "input", "change", "focus", "blur", "wheel", "scroll"];
	_7w.arity = 2;
	_7w.func = _7x;

	var _7O = $_8.bind(null, _7P);

	var _7N = $_0.bind(null, _7O);

	_7N.arity = 2;
	_7N.func = _7O;
	var _7b = {
		node: _7c,
		text: _5u,
		custom: _7d,
		map: _7e,
		on: _5A,
		style: _7g,
		property: _5M,
		attribute: _7h,
		attributeNS: _7j,
		mapProperty: _7l,
		lazy: _7n,
		lazy2: _7q,
		lazy3: _7s,
		keyedNode: _7u,
		program: _7w,
		programWithFlags: _7N,
		staticProgram: _7Q
	};

	var _80 = $_0.bind(null, _81);

	_80.arity = 2;
	_80.func = _81;
	var _3 = {
		sendToApp: _4,
		sendToSelf: _4H,
		effectManagers: _3Z,
		outgoingPort: _70,
		incomingPort: _75,
		htmlToProgram: _78,
		program: _7R,
		programWithFlags: _7Z,
		initialize: _7S,
		leaf: _74,
		batch: _79,
		map: _80
	};
	var _83 = {
		init: _58,
		view: _5n,
		update: _20,
		subscriptions: _3T
	};
	var $2 = undefined;
	_4X.self = _4T;
	_54.self = _50;
	window.Elm = {
		Main: {
			embed: _2,
			fullscreen: _84
		}
	};

	var _$0 = _$2(_6T, 0);
}).call(this);