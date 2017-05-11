(function () {
	"use strict";

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

	function $_5(flagChecker, debugWrap, impl) {
		return function (flagDecoder) {
			return function (object, moduleName, debugMetadata) {
				var checker = flagChecker(flagDecoder, moduleName);

				if (typeof debugMetadata === 'undefined') {
					_4x(impl, object, moduleName, checker);
				} else {
					_4z(_F(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	}

	function _2(node, flags) {
		while (node.lastChild) {
			node.removeChild(node.lastChild);
		}

		return _3.initialize(_4Z(_50.init, flags, node), _50.update, _50.subscriptions, _4y(node, _50.view));
	}

	function _1L(a) {
		return $_0.call(this, _1M, a);
	}

	function _20(a) {
		return $_0.call(this, _21, a);
	}

	function _2s(a) {
		return $_0.call(this, _2t, a);
	}

	function _4(a) {
		return $_0.call(this, _5, a);
	}

	function _4t(a) {
		return $_0.call(this, _4u, a);
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
			_$1.setTimeout(_3G, 0);

			$1 = true;
		}
	}

	function _1Y(state) {
		var handleMsg = _6.receive(function (msg) {
			return _1Z(msg, state);
		});

		return _F(_a, _1Y, handleMsg);
	}

	function _1Z(msg, model) {
		return _6.nativeBinding(function (callback) {
			var results = _F(_20, msg, model);

			model = results._0;
			$2(model);
			var cmds = results._1;

			var subs = _25(model);

			_28(_2d, cmds, subs);

			callback(_6.succeed(model));
		});
	}

	function _21() {
		return _22;
	}

	function _25() {
		return _26;
	}

	function _28(managers, cmdBag, subBag) {
		var effectsDict = {};

		_29(true, cmdBag, effectsDict, null);

		_29(false, subBag, effectsDict, null);

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

	function _29(isCmd, bag, effectsDict, taggers) {
		switch (bag.type) {
			case 'leaf':
				var home = bag.home;

				var effect = _2a(isCmd, home, taggers, bag.value);

				effectsDict[home] = _2c(isCmd, effect, effectsDict[home]);
				return;

			case 'node':
				var list = bag.branches;

				while (list.ctor !== '[]') {
					_29(isCmd, list._0, effectsDict, taggers);

					list = list._1;
				}

				return;

			case 'map':
				_29(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});

				return;
		}
	}

	function _2a(isCmd, home, taggers, value) {
		function applyTaggers(x) {
			var temp = taggers;

			while (temp) {
				x = temp.tagger(x);
				temp = temp.rest;
			}

			return x;
		}

		var map = isCmd ? _2b[home].cmdMap : _2b[home].subMap;
		return _F(map, applyTaggers, value);
	}

	function _2c(isCmd, newEffect, effects) {
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

	function _2f(callback) {
		var model = _22._0;
		$2 = _2g(_3E, model);
		var cmds = _22._1;

		var subs = _25(model);

		_28(_2d, cmds, subs);

		callback(_6.succeed(model));
	}

	function _2g(tagger, initialModel) {
		var eventNode = {
			tagger: tagger,
			parent: _$1.undefined
		};

		var initialVirtualNode = _2h(initialModel);

		var domNode = _2j(initialVirtualNode, eventNode);

		document.body.appendChild(domNode);
		return _3k(domNode, _2h, initialVirtualNode, eventNode);
	}

	function _2h() {
		return _2i;
	}

	function _2j(vNode, eventNode) {
		switch (vNode.type) {
			case 'thunk':
				if (!vNode.node) {
					vNode.node = vNode.thunk();
				}

				return _2j(vNode.node, eventNode);

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

				var domNode = _2j(subNode, subEventRoot);

				domNode.elm_event_node_ref = subEventRoot;
				return domNode;

			case 'text':
				return $3.createTextNode(vNode.text);

			case 'node':
				var domNode = vNode.namespace ? $3.createElementNS(vNode.namespace, vNode.tag) : $3.createElement(vNode.tag);

				_2l(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++) {
					domNode.appendChild(_2j(children[i], eventNode));
				}

				return domNode;

			case 'keyed-node':
				var domNode = vNode.namespace ? $3.createElementNS(vNode.namespace, vNode.tag) : $3.createElement(vNode.tag);

				_2l(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++) {
					domNode.appendChild(_2j(children[i]._1, eventNode));
				}

				return domNode;

			case 'custom':
				var domNode = vNode.impl.render(vNode.model);

				_2l(domNode, eventNode, vNode.facts);

				return domNode;
		}
	}

	function _2l(domNode, eventNode, facts) {
		for (var key in facts) {
			var value = facts[key];

			switch (key) {
				case "STYLE":
					_2m(domNode, value);

					break;

				case "EVENT":
					_2n(domNode, eventNode, value);

					break;

				case "ATTR":
					_3i(domNode, value);

					break;

				case "ATTR_NS":
					_3j(domNode, value);

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

	function _2m(domNode, styles) {
		var domNodeStyle = domNode.style;

		for (var key in styles) {
			domNodeStyle[key] = styles[key];
		}
	}

	function _2n(domNode, eventNode, events) {
		var allHandlers = domNode.elm_handlers || {};

		for (var key in events) {
			var handler = allHandlers[key];
			var value = events[key];

			if (typeof value === 'undefined') {
				domNode.removeEventListener(key, handler);
				allHandlers[key] = _$1.undefined;
			} else if (typeof handler === 'undefined') {
				var handler = _2o(eventNode, value);

				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			} else {
				handler.info = value;
			}
		}

		domNode.elm_handlers = allHandlers;
	}

	function _2o(eventNode, info) {
		function eventHandler(event) {
			var info = eventHandler.info;

			var value = _F(_2p.run, info.decoder, event);

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

	function _2r(indentLevel, value) {
		return _$1.JSON.stringify(value, null, indentLevel);
	}

	function _2t(decoder, string) {
		var json;

		try {
			json = _$1.JSON.parse(string);
		} catch (e) {
			return _2u('Given an invalid JSON: ' + e.message);
		}

		return _2v(decoder, json);
	}

	function _2u(a) {
		return {
			ctor: 'Err',
			_0: a
		};
	}

	function _2v(decoder, value) {
		var result = _2w(decoder, value);

		return result.tag === 'ok' ? _2F(result.value) : _2u(_2G(result));
	}

	function _2w(decoder, value) {
		switch (decoder.tag) {
			case 'bool':
				return typeof value === 'boolean' ? _2x(value) : _2y('a Bool', value);

			case 'int':
				if (typeof value !== 'number') {
					return _2y('an Int', value);
				}

				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return _2x(value);
				}

				if (_$1.isFinite(value) && !(value % 1)) {
					return _2x(value);
				}

				return _2y('an Int', value);

			case 'float':
				return typeof value === 'number' ? _2x(value) : _2y('a Float', value);

			case 'string':
				return typeof value === 'string' ? _2x(value) : value instanceof _$1.String ? _2x(value + '') : _2y('a String', value);

			case 'null':
				return value === null ? _2x(decoder.value) : _2y('null', value);

			case 'value':
				return _2x(value);

			case 'list':
				if (!(value instanceof _$1.Array)) {
					return _2y('a List', value);
				}

				var list = _x.Nil;

				for (var i = value.length; i--;) {
					var result = _2w(decoder.decoder, value[i]);

					if (result.tag !== 'ok') {
						return _2z(i, result);
					}

					list = _x.Cons(result.value, list);
				}

				return _2x(list);

			case 'array':
				if (!(value instanceof _$1.Array)) {
					return _2y('an Array', value);
				}

				var len = value.length;
				var array = new _$1.Array(len);

				for (var i = len; i--;) {
					var result = _2w(decoder.decoder, value[i]);

					if (result.tag !== 'ok') {
						return _2z(i, result);
					}

					array[i] = result.value;
				}

				return _2x(_p.fromJSArray(array));

			case 'maybe':
				var result = _2w(decoder.decoder, value);

				return result.tag === 'ok' ? _2x(_2A(result.value)) : _2x(_2B);

			case 'field':
				var field = decoder.field;

				if (typeof value !== 'object' || value === null || !(field in value)) {
					return _2y('an object with a field named `' + field + '`', value);
				}

				var result = _2w(decoder.decoder, value[field]);

				return result.tag === 'ok' ? result : _2C(field, result);

			case 'index':
				var index = decoder.index;

				if (!(value instanceof _$1.Array)) {
					return _2y('an array', value);
				}

				if (index >= value.length) {
					return _2y('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
				}

				var result = _2w(decoder.decoder, value[index]);

				return result.tag === 'ok' ? result : _2z(index, result);

			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof _$1.Array) {
					return _2y('an object', value);
				}

				var keyValuePairs = _x.Nil;

				for (var key in value) {
					var result = _2w(decoder.decoder, value[key]);

					if (result.tag !== 'ok') {
						return _2C(key, result);
					}

					var pair = _h.Tuple2(key, result.value);

					keyValuePairs = _x.Cons(pair, keyValuePairs);
				}

				return _2x(keyValuePairs);

			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;

				for (var i = 0; i < decoders.length; i++) {
					var result = _2w(decoders[i], value);

					if (result.tag !== 'ok') {
						return result;
					}

					answer = answer(result.value);
				}

				return _2x(answer);

			case 'andThen':
				var result = _2w(decoder.decoder, value);

				return result.tag !== 'ok' ? result : _2w(decoder.callback(result.value), value);

			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;

				while (temp.ctor !== '[]') {
					var result = _2w(temp._0, value);

					if (result.tag === 'ok') {
						return result;
					}

					errors.push(result);
					temp = temp._1;
				}

				return _2D(errors);

			case 'fail':
				return _2E(decoder.msg);

			case 'succeed':
				return _2x(decoder.msg);
		}
	}

	function _2x(value) {
		return {
			tag: 'ok',
			value: value
		};
	}

	function _2y(type, value) {
		return {
			tag: 'primitive',
			type: type,
			value: value
		};
	}

	function _2z(index, nestedProblems) {
		return {
			tag: 'index',
			index: index,
			rest: nestedProblems
		};
	}

	function _2A(a) {
		return {
			ctor: 'Just',
			_0: a
		};
	}

	function _2C(field, nestedProblems) {
		return {
			tag: 'field',
			field: field,
			rest: nestedProblems
		};
	}

	function _2D(problems) {
		return {
			tag: 'oneOf',
			problems: problems
		};
	}

	function _2E(msg) {
		return {
			tag: 'fail',
			msg: msg
		};
	}

	function _2F(a) {
		return {
			ctor: 'Ok',
			_0: a
		};
	}

	function _2G(problem) {
		var context = '_';

		while (problem) {
			switch (problem.tag) {
				case 'primitive':
					return 'Expecting ' + problem.type + (context === '_' ? '' : ' at ' + context) + ' but instead got: ' + _2H(problem.value);

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
						problems[i] = _2G(problems[i]);
					}

					return 'I ran into the following problems' + (context === '_' ? '' : ' at ' + context) + ':\n\n' + problems.join('\n');

				case 'fail':
					return 'I ran into a `fail` decoder' + (context === '_' ? '' : ' at ' + context) + ': ' + problem.msg;
			}
		}
	}

	function _2H(value) {
		return value === _$1.undefined ? 'undefined' : _$1.JSON.stringify(value);
	}

	function _2J(value) {
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}

	function _2K(tag) {
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}

	function _2M(tag, decoder) {
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}

	function _2O(field, decoder) {
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}

	function _2Q(index, decoder) {
		return {
			ctor: '<decoder>',
			tag: 'index',
			index: index,
			decoder: decoder
		};
	}

	function _2S(f, d1) {
		return _2T(f, [d1]);
	}

	function _2T(f, decoders) {
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}

	function _2V(f, d1, d2) {
		return _2T(f, [d1, d2]);
	}

	function _2X(f, d1, d2, d3) {
		return _2T(f, [d1, d2, d3]);
	}

	function _2Z(f, d1, d2, d3, d4) {
		return _2T(f, [d1, d2, d3, d4]);
	}

	function _31(f, d1, d2, d3, d4, d5) {
		return _2T(f, [d1, d2, d3, d4, d5]);
	}

	function _32(a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return _33(a, b, c, d, e, f, g);
							};
						};
					};
				};
			};
		};
	}

	function _33(f, d1, d2, d3, d4, d5, d6) {
		return _2T(f, [d1, d2, d3, d4, d5, d6]);
	}

	function _34(a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return _35(a, b, c, d, e, f, g, h);
								};
							};
						};
					};
				};
			};
		};
	}

	function _35(f, d1, d2, d3, d4, d5, d6, d7) {
		return _2T(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function _36(a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return _37(a, b, c, d, e, f, g, h, i);
									};
								};
							};
						};
					};
				};
			};
		};
	}

	function _37(f, d1, d2, d3, d4, d5, d6, d7, d8) {
		return _2T(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}

	function _38(decoder) {
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}

	function _3a(callback, decoder) {
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}

	function _3b(msg) {
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}

	function _3c(msg) {
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}

	function _3d(decoders) {
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}

	function _3e(value) {
		return value;
	}

	function _3f(keyValuePairs) {
		var obj = {};

		while (keyValuePairs.ctor !== '[]') {
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}

		return obj;
	}

	function _3g(a, b) {
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
				return _3g(a.decoder, b.decoder);

			case 'field':
				return a.field === b.field && _3g(a.decoder, b.decoder);

			case 'index':
				return a.index === b.index && _3g(a.decoder, b.decoder);

			case 'map-many':
				if (a.func !== b.func) {
					return false;
				}

				return _3h(a.decoders, b.decoders);

			case 'andThen':
				return a.callback === b.callback && _3g(a.decoder, b.decoder);

			case 'oneOf':
				return _3h(a.decoders, b.decoders);
		}
	}

	function _3h(aDecoders, bDecoders) {
		var len = aDecoders.length;

		if (len !== bDecoders.length) {
			return false;
		}

		for (var i = 0; i < len; i++) {
			if (!_3g(aDecoders[i], bDecoders[i])) {
				return false;
			}
		}

		return true;
	}

	function _3i(domNode, attrs) {
		for (var key in attrs) {
			var value = attrs[key];

			if (typeof value === 'undefined') {
				domNode.removeAttribute(key);
			} else {
				domNode.setAttribute(key, value);
			}
		}
	}

	function _3j(domNode, nsAttrs) {
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

	function _3k(domNode, view, initialVirtualNode, eventNode) {
		var state = 'NO_REQUEST';
		var currNode = initialVirtualNode;
		var nextModel;

		function updateIfNeeded() {
			switch (state) {
				case 'NO_REQUEST':
					throw new _$1.Error('Unexpected draw callback.\n' + 'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.');

				case 'PENDING_REQUEST':
					_3l(updateIfNeeded);

					state = 'EXTRA_REQUEST';
					var nextNode = view(nextModel);

					var patches = _3m(currNode, nextNode);

					domNode = _3w(domNode, currNode, patches, eventNode);
					currNode = nextNode;
					return;

				case 'EXTRA_REQUEST':
					state = 'NO_REQUEST';
					return;
			}
		}

		return function stepper(model) {
			if (state === 'NO_REQUEST') {
				_3l(updateIfNeeded);
			}

			state = 'PENDING_REQUEST';
			nextModel = model;
		};
	}

	function _3l(callback) {
		_$1.setTimeout(callback, 1000 / 60);
	}

	function _3m(a, b) {
		var patches = [];

		_3n(a, b, patches, 0);

		return patches;
	}

	function _3n(a, b, patches, index) {
		if (a === b) {
			return;
		}

		var aType = a.type;
		var bType = b.type; // Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.

		if (aType !== bType) {
			patches.push(_3o('p-redraw', index, b));
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

				_3n(a.node, b.node, subPatches, 0);

				if (subPatches.length > 0) {
					patches.push(_3o('p-thunk', index, subPatches));
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
					patches.push(_3o('p-redraw', index, b));
					return;
				} // check if taggers are "the same"


				if (nesting ? !_3p(aTaggers, bTaggers) : aTaggers !== bTaggers) {
					patches.push(_3o('p-tagger', index, bTaggers));
				} // diff everything below the taggers


				_3n(aSubNode, bSubNode, patches, index + 1);

				return;

			case 'text':
				if (a.text !== b.text) {
					patches.push(_3o('p-text', index, b.text));
					return;
				}

				return;

			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace) {
					patches.push(_3o('p-redraw', index, b));
					return;
				}

				var factsDiff = _3q(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_3o('p-facts', index, factsDiff));
				}

				_3s(a, b, patches, index);

				return;

			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace) {
					patches.push(_3o('p-redraw', index, b));
					return;
				}

				var factsDiff = _3q(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_3o('p-facts', index, factsDiff));
				}

				_3t(a, b, patches, index);

				return;

			case 'custom':
				if (a.impl !== b.impl) {
					patches.push(_3o('p-redraw', index, b));
					return;
				}

				var factsDiff = _3q(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined') {
					patches.push(_3o('p-facts', index, factsDiff));
				}

				var patch = b.impl.diff(a, b);

				if (patch) {
					patches.push(_3o('p-custom', index, patch));
					return;
				}

				return;
		}
	}

	function _3o(type, index, data) {
		return {
			index: index,
			type: type,
			data: data,
			domNode: _$1.undefined,
			eventNode: _$1.undefined
		};
	}

	function _3p(as, bs) {
		for (var i = 0; i < as.length; i++) {
			if (as[i] !== bs[i]) {
				return false;
			}
		}

		return true;
	}

	function _3q(a, b, category) {
		var diff; // look for changes and removals

		for (var aKey in a) {
			if (aKey === "STYLE" || aKey === "EVENT" || aKey === "ATTR" || aKey === "ATTR_NS") {
				var subDiff = _3q(a[aKey], b[aKey] || {}, aKey);

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

			if (aValue === bValue && aKey !== 'value' || category === "EVENT" && _3r(aValue, bValue)) {
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

	function _3r(a, b) {
		if (a.options !== b.options) {
			if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault) {
				return false;
			}
		}

		return _2p.equality(a.decoder, b.decoder);
	}

	function _3s(aParent, bParent, patches, rootIndex) {
		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length; // FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

		if (aLen > bLen) {
			patches.push(_3o('p-remove-last', rootIndex, aLen - bLen));
		} else if (aLen < bLen) {
			patches.push(_3o('p-append', rootIndex, bChildren.slice(aLen)));
		} // PAIRWISE DIFF EVERYTHING ELSE


		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;

		for (var i = 0; i < minLen; i++) {
			index++;
			var aChild = aChildren[i];

			_3n(aChild, bChildren[i], patches, index);

			index += aChild.descendantsCount || 0;
		}
	}

	function _3t(aParent, bParent, patches, rootIndex) {
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

				_3n(aNode, bNode, localPatches, index);

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

				_3n(aNode, bNextNode, localPatches, index);

				_3u(changes, localPatches, aKey, bNode, bIndex, inserts);

				index += aNode.descendantsCount || 0;
				index++;

				_3v(changes, localPatches, aKey, aNextNode, index);

				index += aNextNode.descendantsCount || 0;
				aIndex += 2;
				bIndex += 2;
				continue;
			} // insert b


			if (bLookAhead && newMatch) {
				index++;

				_3u(changes, localPatches, bKey, bNode, bIndex, inserts);

				_3n(aNode, bNextNode, localPatches, index);

				index += aNode.descendantsCount || 0;
				aIndex += 1;
				bIndex += 2;
				continue;
			} // remove a


			if (aLookAhead && oldMatch) {
				index++;

				_3v(changes, localPatches, aKey, aNode, index);

				index += aNode.descendantsCount || 0;
				index++;

				_3n(aNextNode, bNode, localPatches, index);

				index += aNextNode.descendantsCount || 0;
				aIndex += 2;
				bIndex += 1;
				continue;
			} // remove a, insert b


			if (aLookAhead && bLookAhead && aNextKey === bNextKey) {
				index++;

				_3v(changes, localPatches, aKey, aNode, index);

				_3u(changes, localPatches, bKey, bNode, bIndex, inserts);

				index += aNode.descendantsCount || 0;
				index++;

				_3n(aNextNode, bNextNode, localPatches, index);

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

			_3v(changes, localPatches, a._0, aNode, index);

			index += aNode.descendantsCount || 0;
			aIndex++;
		}

		var endInserts;

		while (bIndex < bLen) {
			endInserts = endInserts || [];
			var b = bChildren[bIndex];

			_3u(changes, localPatches, b._0, b._1, _$1.undefined, endInserts);

			bIndex++;
		}

		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined') {
			patches.push(_3o('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}

	function _3u(changes, localPatches, key, vnode, bIndex, inserts) {
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

			_3n(entry.vnode, vnode, subPatches, entry.index);

			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};
			return;
		} // this key has already been inserted or moved, a duplicate!


		_3u(changes, localPatches, key + "_elmW6BL", vnode, bIndex, inserts);
	}

	function _3v(changes, localPatches, key, vnode, index) {
		var entry = changes[key]; // never seen this key before

		if (typeof entry === 'undefined') {
			var patch = _3o('p-remove', index, _$1.undefined);

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

			_3n(vnode, entry.vnode, subPatches, index);

			var patch = _3o('p-remove', index, {
				patches: subPatches,
				entry: entry
			});

			localPatches.push(patch);
			return;
		} // this key has already been removed or moved, a duplicate!


		_3v(changes, localPatches, key + "_elmW6BL", vnode, index);
	}

	function _3w(rootDomNode, oldVirtualNode, patches, eventNode) {
		if (patches.length === 0) {
			return rootDomNode;
		}

		_3x(rootDomNode, oldVirtualNode, patches, eventNode);

		return _3z(rootDomNode, patches);
	}

	function _3x(domNode, vNode, patches, eventNode) {
		_3y(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}

	function _3y(domNode, vNode, patches, i, low, high, eventNode) {
		var patch = patches[i];
		var index = patch.index;

		while (index === low) {
			var patchType = patch.type;

			if (patchType === 'p-thunk') {
				_3x(domNode, vNode.node, patch.data, eventNode);
			} else if (patchType === 'p-reorder') {
				patch.domNode = domNode;
				patch.eventNode = eventNode;
				var subPatches = patch.data.patches;

				if (subPatches.length > 0) {
					_3y(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			} else if (patchType === 'p-remove') {
				patch.domNode = domNode;
				patch.eventNode = eventNode;
				var data = patch.data;

				if (typeof data !== 'undefined') {
					data.entry.data = domNode;
					var subPatches = data.patches;

					if (subPatches.length > 0) {
						_3y(domNode, vNode, subPatches, 0, low, high, eventNode);
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

				return _3y(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;

				for (var j = 0; j < vChildren.length; j++) {
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);

					if (low <= index && index <= nextLow) {
						i = _3y(childNodes[j], vChild, patches, i, low, nextLow, eventNode);

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
						i = _3y(childNodes[j], vChild, patches, i, low, nextLow, eventNode);

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

	function _3z(rootDomNode, patches) {
		for (var i = 0; i < patches.length; i++) {
			var patch = patches[i];
			var localDomNode = patch.domNode;

			var newNode = _3A(localDomNode, patch);

			if (localDomNode === rootDomNode) {
				rootDomNode = newNode;
			}
		}

		return rootDomNode;
	}

	function _3A(domNode, patch) {
		switch (patch.type) {
			case 'p-redraw':
				return _3B(domNode, patch.data, patch.eventNode);

			case 'p-facts':
				_2l(domNode, patch.eventNode, patch.data);

				return domNode;

			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;

			case 'p-thunk':
				return _3z(domNode, patch.data);

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
					domNode.appendChild(_2j(newNodes[i], patch.eventNode));
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

				entry.data = _3z(domNode, data.patches);
				return domNode;

			case 'p-reorder':
				return _3C(domNode, patch);

			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);

			default:
				throw new _$1.Error('Ran into an unknown patch!');
		}
	}

	function _3B(domNode, vNode, eventNode) {
		var parentNode = domNode.parentNode;

		var newNode = _2j(vNode, eventNode);

		if (typeof newNode.elm_event_node_ref === 'undefined') {
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}

		if (parentNode && newNode !== domNode) {
			parentNode.replaceChild(newNode, domNode);
		}

		return newNode;
	}

	function _3C(domNode, patch) {
		var data = patch.data; // remove end inserts

		var frag = _3D(data.endInserts, patch); // removals


		domNode = _3z(domNode, data.patches); // inserts

		var inserts = data.inserts;

		for (var i = 0; i < inserts.length; i++) {
			var insert = inserts[i];
			var entry = insert.entry;
			var node = entry.tag === 'move' ? entry.data : _2j(entry.vnode, patch.eventNode);
			domNode.insertBefore(node, domNode.childNodes[insert.index]);
		} // add end inserts


		if (typeof frag !== 'undefined') {
			domNode.appendChild(frag);
		}

		return domNode;
	}

	function _3D(endInserts, patch) {
		if (typeof endInserts === 'undefined') {
			return;
		}

		var frag = $3.createDocumentFragment();

		for (var i = 0; i < endInserts.length; i++) {
			var insert = endInserts[i];
			var entry = insert.entry;
			frag.appendChild(entry.tag === 'move' ? entry.data : _2j(entry.vnode, patch.eventNode));
		}

		return frag;
	}

	function _3E(msg) {
		_6.rawSend(_1W, msg);
	}

	function _3G() {
		var numSteps = 0;
		var process;

		while (numSteps < 10000 && (process = _1V.shift())) {
			if (process.root) {
				numSteps = _3H(numSteps, process);
			}
		}

		if (!process) {
			$1 = false;
			return;
		}

		_$1.setTimeout(_3G, 0);
	}

	function _3H(numSteps, process) {
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

	function _3I(process) {
		return _9(function (callback) {
			var root = process.root;

			if (root.ctor === '_Task_nativeBinding' && root.cancel) {
				root.cancel();
			}

			process.root = null;
			callback(_7(_h.Tuple0));
		});
	}

	function _3J(time) {
		return _9(function (callback) {
			var id = _$1.setTimeout(function () {
				callback(_7(_h.Tuple0));
			}, time);

			return function () {
				_$1.clearTimeout(id);
			};
		});
	}

	function _3L(process, msg) {
		return _9(function (callback) {
			_3M(process, msg);

			callback(_7(_h.Tuple0));
		});
	}

	function _3M(process, msg) {
		process.mailbox.push(msg);

		_1U(process);
	}

	function _3O(router, msg) {
		return _F(_6.send, router.self, {
			ctor: 'self',
			_0: msg
		});
	}

	function _3P(name, converter) {
		_3Q(name);

		_2b[name] = {
			tag: 'cmd',
			cmdMap: _3R,
			converter: converter,
			isForeign: true
		};
		return _3T(name);
	}

	function _3Q(name) {
		if (name in _2b) {
			throw new _$1.Error('There can only be one port named `' + name + '`, but your program has multiple.');
		}
	}

	function _3S(tagger, value) {
		return value;
	}

	function _3T(home) {
		return function (value) {
			return {
				type: 'leaf',
				home: home,
				value: value
			};
		};
	}

	function _3U(name, converter) {
		_3Q(name);

		_2b[name] = {
			tag: 'sub',
			subMap: _3V,
			converter: converter,
			isForeign: true
		};
		return _3T(name);
	}

	function _3W(tagger, finalTagger) {
		return function (value) {
			return tagger(finalTagger(value));
		};
	}

	function _3X(vnode) {
		var emptyBag = _3Y(_x.Nil);

		var noChange = _h.Tuple2(_h.Tuple0, emptyBag);

		return _3Z({
			init: noChange,
			view: function (model) {
				return main;
			},
			update: _42(function (msg, model) {
				return noChange;
			}),
			subscriptions: function (model) {
				return emptyBag;
			}
		});
	}

	function _3Y(list) {
		return {
			type: 'node',
			branches: list
		};
	}

	function _3Z(impl) {
		return _F(_40.program, undefined, impl);
	}

	function _41(tag) {
		return _42(function (factList, kidList) {
			return _43(tag, factList, kidList);
		});
	}

	function _42(fun) {
		function wrapper(a) {
			return function (b) {
				return fun(a, b);
			};
		}

		wrapper.arity = 2;
		wrapper.func = fun;
		return wrapper;
	}

	function _43(tag, factList, kidList) {
		var organized = _44(factList);

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

	function _44(factList) {
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

	function _45(string) {
		return {
			type: 'text',
			text: string
		};
	}

	function _46(factList, model, impl) {
		var facts = _44(factList).facts;

		return {
			type: 'custom',
			facts: facts,
			model: model,
			impl: impl
		};
	}

	function _48(tagger, node) {
		return {
			type: 'tagger',
			tagger: tagger,
			node: node,
			descendantsCount: 1 + (node.descendantsCount || 0)
		};
	}

	function _4a(name, options, decoder) {
		return {
			key: "EVENT",
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}

	function _4b(value) {
		return {
			key: "STYLE",
			value: value
		};
	}

	function _4d(key, value) {
		return {
			key: key,
			value: value
		};
	}

	function _4f(key, value) {
		return {
			key: "ATTR",
			realKey: key,
			value: value
		};
	}

	function _4h(namespace, key, value) {
		return {
			key: "ATTR_NS",
			realKey: key,
			value: {
				value: value,
				namespace: namespace
			}
		};
	}

	function _4j(func, property) {
		if (property.key !== "EVENT") {
			return property;
		}

		return _4a(property.realKey, property.value.options, _F(_2R, func, property.value.decoder));
	}

	function _4l(fn, a) {
		return _4m(fn, [a], function () {
			return fn(a);
		});
	}

	function _4m(func, args, thunk) {
		return {
			type: 'thunk',
			func: func,
			args: args,
			thunk: thunk,
			node: _$1.undefined
		};
	}

	function _4o(fn, a, b) {
		return _4m(fn, [a, b], function () {
			return _F(fn, a, b);
		});
	}

	function _4q(fn, a, b, c) {
		return _4m(fn, [a, b, c], function () {
			return _l(fn, a, b, c);
		});
	}

	function _4s(tag, factList, kidList) {
		var organized = _44(factList);

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

	function _4u(debugWrap, impl) {
		return $_5.call(this, _4v, debugWrap, impl);
	}

	function _4v(flagDecoder, moduleName) {
		return function (init, flags, domNode) {
			if (typeof flags === 'undefined') {
				return init;
			}

			var errorMessage = 'The `' + moduleName + '` module does not need flags.\n' + 'Initialize it with no arguments and you should be all set!';

			_4w(errorMessage, domNode);
		};
	}

	function _4w(errorMessage, domNode) {
		if (domNode) {
			domNode.innerHTML = '<div style="padding-left:1em;">' + '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>' + '<pre style="padding-left:1em;">' + errorMessage + '</pre>' + '</div>';
		}

		throw new _$1.Error(errorMessage);
	}

	function _4x(impl, object, moduleName, flagChecker) {
		object['embed'] = function embed(node, flags) {
			while (node.lastChild) {
				node.removeChild(node.lastChild);
			}

			return _3.initialize(flagChecker(impl.init, flags, node), impl.update, impl.subscriptions, _4y(node, impl.view));
		};

		object['fullscreen'] = function fullscreen(flags) {
			return _3.initialize(flagChecker(impl.init, flags, _$1.document.body), impl.update, impl.subscriptions, _4y(_$1.document.body, impl.view));
		};
	}

	function _4y(parentNode, view) {
		return function (tagger, initialModel) {
			var eventNode = {
				tagger: tagger,
				parent: _$1.undefined
			};
			var initialVirtualNode = view(initialModel);

			var domNode = _2j(initialVirtualNode, eventNode);

			parentNode.appendChild(domNode);
			return _3k(domNode, view, initialVirtualNode, eventNode);
		};
	}

	function _4z(impl, object, moduleName, flagChecker) {
		object['fullscreen'] = function fullscreen(flags) {
			var popoutRef = {
				doc: _$1.undefined
			};
			return _3.initialize(flagChecker(impl.init, flags, _$1.document.body), impl.update(_4A(popoutRef)), impl.subscriptions, _4B(moduleName, _$1.document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut));
		};

		object['embed'] = function fullscreen(node, flags) {
			var popoutRef = {
				doc: _$1.undefined
			};
			return _3.initialize(flagChecker(impl.init, flags, node), impl.update(_4A(popoutRef)), impl.subscriptions, _4B(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut));
		};
	}

	function _4A(popoutRef) {
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

	function _4B(moduleName, parentNode, popoutRef, view, viewIn, viewOut) {
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

			var appNode = _2j(appVirtualNode, appEventNode);

			parentNode.appendChild(appNode);

			var appStepper = _3k(appNode, view, appVirtualNode, appEventNode); // make overlay stepper


			var overVirtualNode = viewIn(initialModel)._1;

			var overNode = _2j(overVirtualNode, eventNode);

			parentNode.appendChild(overNode);

			var wrappedViewIn = _4C(appEventNode, overNode, viewIn);

			var overStepper = _3k(overNode, wrappedViewIn, overVirtualNode, eventNode); // make debugger stepper


			var debugStepper = _4I(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

			return function stepper(model) {
				appStepper(model);
				overStepper(model);
				debugStepper(model);
			};
		};
	}

	function _4C(appEventNode, overlayNode, viewIn) {
		var ignorer = _4D(overlayNode);

		var blocking = 'Normal';
		var overflow;
		var normalTagger = appEventNode.tagger;

		var blockTagger = function () {};

		return function (model) {
			var tuple = viewIn(model);
			var newBlocking = tuple._0.ctor;
			appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;

			if (blocking !== newBlocking) {
				_4E('removeEventListener', ignorer, blocking);

				_4E('addEventListener', ignorer, newBlocking);

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

	function _4D(overlayNode) {
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

	function _4E(verbEventListener, ignorer, blocking) {
		switch (blocking) {
			case 'Normal':
				return;

			case 'Pause':
				return _4F(verbEventListener, ignorer, _4G);

			case 'Message':
				return _4F(verbEventListener, ignorer, _4H);
		}
	}

	function _4F(verbEventListener, handler, eventNames) {
		for (var i = 0; i < eventNames.length; i++) {
			_$1.document.body[verbEventListener](eventNames[i], handler, true);
		}
	}

	function _4I(initialModel, view, eventNode, parentNode, moduleName, popoutRef) {
		var curr;
		var domNode;
		return function stepper(model) {
			if (!model.isDebuggerOpen) {
				return;
			}

			if (!popoutRef.doc) {
				curr = view(model);
				domNode = _4J(moduleName, popoutRef, curr, eventNode);
				return;
			} // switch to document of popout


			$3 = popoutRef.doc;
			var next = view(model);

			var patches = _3m(curr, next);

			domNode = _3w(domNode, curr, patches, eventNode);
			curr = next; // switch back to normal document

			$3 = _$1.document;
		};
	}

	function _4J(moduleName, popoutRef, virtualNode, eventNode) {
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

		var domNode = _2j(virtualNode, eventNode);

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

	function _4M(flagDecoder, moduleName) {
		return function (init, flags, domNode) {
			if (typeof flagDecoder === 'undefined') {
				var errorMessage = 'Are you trying to sneak a Never value into Elm? Trickster!\n' + 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n' + 'Use `program` instead if you do not want flags.';

				_4w(errorMessage, domNode);
			}

			var result = _F(_2p.run, flagDecoder, flags);

			if (result.ctor === 'Ok') {
				return init(result._0);
			}

			var errorMessage = 'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n' + 'I tried to convert it to an Elm value, but ran into this problem:\n\n' + result._0;

			_4w(errorMessage, domNode);
		};
	}

	function _4N(vNode) {
		var nothing = _h.Tuple2(_h.Tuple0, _23);

		return _F(_4t, undefined, {
			init: nothing,
			view: function () {
				return vNode;
			},
			update: _42(function () {
				return nothing;
			}),
			subscriptions: function () {
				return _26;
			}
		})();
	}

	function _4O(impl) {
		return function (flagDecoder) {
			return function (object, moduleName) {
				object['worker'] = function worker(flags) {
					if (typeof flags !== 'undefined') {
						throw new _$1.Error('The `' + moduleName + '` module does not need flags.\n' + 'Call ' + moduleName + '.worker() with no arguments and you should be all set!');
					}

					return _4P(impl.init, impl.update, impl.subscriptions, _4V);
				};
			};
		};
	}

	function _4P(init, update, subscriptions, renderer) {
		// ambient state
		var managers = {};
		var updateView; // init and update state in main process

		var initApp = _6.nativeBinding(function (callback) {
			var model = init._0;
			updateView = renderer(enqueue, model);
			var cmds = init._1;
			var subs = subscriptions(model);

			_28(managers, cmds, subs);

			callback(_6.succeed(model));
		});

		function onMessage(msg, model) {
			return _6.nativeBinding(function (callback) {
				var results = _F(update, msg, model);

				model = results._0;
				updateView(model);
				var cmds = results._1;
				var subs = subscriptions(model);

				_28(managers, cmds, subs);

				callback(_6.succeed(model));
			});
		}

		var mainProcess = _4Q(initApp, onMessage);

		function enqueue(msg) {
			_6.rawSend(mainProcess, msg);
		}

		var ports = _4R(managers, enqueue);

		return ports ? {
			ports: ports
		} : {};
	}

	function _4Q(init, onMessage) {
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

	function _4R(managers, callback) {
		var ports; // setup all necessary effect managers

		for (var key in _2b) {
			var manager = _2b[key];

			if (manager.isForeign) {
				ports = ports || {};
				ports[key] = manager.tag === 'cmd' ? _4S(key) : _4T(key, callback);
			}

			managers[key] = _4U(manager, callback);
		}

		return ports;
	}

	function _4S(name) {
		var subs = [];
		var converter = _2b[name].converter; // CREATE MANAGER

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

		_2b[name].init = init;
		_2b[name].onEffects = _o(onEffects); // PUBLIC API

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

	function _4T(name, callback) {
		var sentBeforeInit = [];
		var subs = _x.Nil;
		var converter = _2b[name].converter;
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

		_2b[name].init = init;
		_2b[name].onEffects = _o(onEffects); // PUBLIC API

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
			var result = _F(_2I, converter, incomingValue);

			if (result.ctor === 'Err') {
				throw new _$1.Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
			}

			currentSend(result._0);
		}

		return {
			send: send
		};
	}

	function _4U(info, callback) {
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

		var process = _4Q(info.init, onMessage);

		router.self = process;
		return process;
	}

	function _4V(enqueue, _) {
		return function (_) {};
	}

	function _4W(impl) {
		return function (flagDecoder) {
			return function (object, moduleName) {
				object['worker'] = function worker(flags) {
					if (typeof flagDecoder === 'undefined') {
						throw new _$1.Error('Are you trying to sneak a Never value into Elm? Trickster!\n' + 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n' + 'Use `program` instead if you do not want flags.');
					}

					var result = _F(_2p.run, flagDecoder, flags);

					if (result.ctor === 'Err') {
						throw new _$1.Error(moduleName + '.worker(...) was called with an unexpected argument.\n' + 'I tried to convert it to an Elm value, but ran into this problem:\n\n' + result._0);
					}

					return _4P(impl.init(result._0), impl.update, impl.subscriptions, _4V);
				};
			};
		};
	}

	function _4Y(tagger, bag) {
		return {
			type: 'map',
			tagger: tagger,
			tree: bag
		};
	}

	function _4Z(init, flags, domNode) {
		if (typeof flags === 'undefined') {
			return init;
		}

		var errorMessage = 'The `' + "Main" + '` module does not need flags.\n' + 'Initialize it with no arguments and you should be all set!';

		_4w(errorMessage, domNode);
	}

	function _51(flags) {
		return _3.initialize(_4Z(_50.init, flags, _$1.document.body), _50.update, _50.subscriptions, _4y(_$1.document.body, _50.view));
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
	var _y = {
		ctor: "[]"
	};

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
	var _1G = {
		ctor: "_Tuple0"
	};
	var $0 = 1;
	var _1O = {
		ctor: "[]"
	};
	_1L.arity = 2;
	_1L.func = _1M;
	var _h = {
		eq: _i,
		cmp: _1F,
		Tuple0: _1G,
		Tuple2: _1H,
		chr: _1I,
		update: _1J,
		guid: _1K,
		append: _1L,
		crash: _1P,
		crashCase: _1R,
		toString: _1S
	};
	var _23 = {
		type: "node",
		branches: {
			ctor: "[]"
		}
	};
	var _22 = {
		ctor: "_Tuple2",
		_0: _1G,
		_1: _23
	};
	_20.arity = 2;
	_20.func = _21;
	var _26 = {
		type: "node",
		branches: {
			ctor: "[]"
		}
	};
	var _2b = {};
	var _2d = {};
	var _2i = {
		type: "text",
		text: "Hello, World!"
	};
	var _2k = document;

	var _2q = $_0.bind(null, _2r);

	_2q.arity = 2;
	_2q.func = _2r;
	var _2B = {
		ctor: "Nothing"
	};
	_2s.arity = 2;
	_2s.func = _2t;

	var _2I = $_0.bind(null, _2v);

	_2I.arity = 2;
	_2I.func = _2v;

	var _2L = $_0.bind(null, _2M);

	_2L.arity = 2;
	_2L.func = _2M;

	var _2N = $_0.bind(null, _2O);

	_2N.arity = 2;
	_2N.func = _2O;

	var _2P = $_0.bind(null, _2Q);

	_2P.arity = 2;
	_2P.func = _2Q;

	var _2R = $_0.bind(null, _2S);

	_2R.arity = 2;
	_2R.func = _2S;

	var _2U = $_1.bind(null, _2V);

	_2U.arity = 3;
	_2U.func = _2V;

	var _2W = $_2.bind(null, _2X);

	_2W.arity = 4;
	_2W.func = _2X;

	var _2Y = $_3.bind(null, _2Z);

	_2Y.arity = 5;
	_2Y.func = _2Z;

	var _30 = $_4.bind(null, _31);

	_30.arity = 6;
	_30.func = _31;
	_32.arity = 7;
	_32.func = _33;
	_34.arity = 8;
	_34.func = _35;
	_36.arity = 9;
	_36.func = _37;

	var _39 = $_0.bind(null, _3a);

	_39.arity = 2;
	_39.func = _3a;
	var _2p = {
		encode: _2q,
		runOnString: _2s,
		run: _2I,
		decodeNull: _2J,
		decodePrimitive: _2K,
		decodeContainer: _2L,
		decodeField: _2N,
		decodeIndex: _2P,
		map1: _2R,
		map2: _2U,
		map3: _2W,
		map4: _2Y,
		map5: _30,
		map6: _32,
		map7: _34,
		map8: _36,
		decodeKeyValuePairs: _38,
		andThen: _39,
		fail: _3b,
		succeed: _3c,
		oneOf: _3d,
		identity: _3e,
		encodeNull: null,
		encodeArray: _1B,
		encodeList: _B,
		encodeObject: _3f,
		equality: _3g
	};
	var $3 = _2k;
	var _1W = {
		ctor: "_Process",
		id: 0,
		root: {
			ctor: "_Task_andThen",
			callback: _1Y,
			task: {
				ctor: "_Task_nativeBinding",
				callback: _2f,
				cancel: null
			}
		},
		stack: null,
		mailbox: []
	};
	var _1V = [_1W];
	var $1 = true;

	var _3K = $_0.bind(null, _3L);

	_3K.arity = 2;
	_3K.func = _3L;
	var _6 = {
		succeed: _7,
		fail: _8,
		nativeBinding: _9,
		andThen: _a,
		onError: _c,
		receive: _e,
		spawn: _f,
		kill: _3I,
		sleep: _3J,
		send: _3K,
		rawSpawn: _g,
		rawSend: _3M
	};
	_4.arity = 2;
	_4.func = _5;

	var _3N = $_0.bind(null, _3O);

	_3N.arity = 2;
	_3N.func = _3O;

	var _3R = $_0.bind(null, _3S);

	_3R.arity = 2;
	_3R.func = _3S;

	var _3V = $_0.bind(null, _3W);

	_3V.arity = 2;
	_3V.func = _3W;

	var _47 = $_0.bind(null, _48);

	_47.arity = 2;
	_47.func = _48;

	var _49 = $_1.bind(null, _4a);

	_49.arity = 3;
	_49.func = _4a;

	var _4c = $_0.bind(null, _4d);

	_4c.arity = 2;
	_4c.func = _4d;

	var _4e = $_0.bind(null, _4f);

	_4e.arity = 2;
	_4e.func = _4f;

	var _4g = $_1.bind(null, _4h);

	_4g.arity = 3;
	_4g.func = _4h;

	var _4i = $_0.bind(null, _4j);

	_4i.arity = 2;
	_4i.func = _4j;

	var _4k = $_0.bind(null, _4l);

	_4k.arity = 2;
	_4k.func = _4l;

	var _4n = $_1.bind(null, _4o);

	_4n.arity = 3;
	_4n.func = _4o;

	var _4p = $_2.bind(null, _4q);

	_4p.arity = 4;
	_4p.func = _4q;

	var _4r = $_1.bind(null, _4s);

	_4r.arity = 3;
	_4r.func = _4s;
	var _4G = ["click", "dblclick", "mousemove", "mouseup", "mousedown", "mouseenter", "mouseleave", "touchstart", "touchend", "touchcancel", "touchmove", "pointerdown", "pointerup", "pointerover", "pointerout", "pointerenter", "pointerleave", "pointermove", "pointercancel", "dragstart", "drag", "dragend", "dragenter", "dragover", "dragleave", "drop", "keyup", "keydown", "keypress", "input", "change", "focus", "blur"];
	var _4H = ["click", "dblclick", "mousemove", "mouseup", "mousedown", "mouseenter", "mouseleave", "touchstart", "touchend", "touchcancel", "touchmove", "pointerdown", "pointerup", "pointerover", "pointerout", "pointerenter", "pointerleave", "pointermove", "pointercancel", "dragstart", "drag", "dragend", "dragenter", "dragover", "dragleave", "drop", "keyup", "keydown", "keypress", "input", "change", "focus", "blur", "wheel", "scroll"];
	_4t.arity = 2;
	_4t.func = _4u;

	var _4L = $_5.bind(null, _4M);

	var _4K = $_0.bind(null, _4L);

	_4K.arity = 2;
	_4K.func = _4L;
	var _40 = {
		node: _41,
		text: _45,
		custom: _46,
		map: _47,
		on: _49,
		style: _4b,
		property: _4c,
		attribute: _4e,
		attributeNS: _4g,
		mapProperty: _4i,
		lazy: _4k,
		lazy2: _4n,
		lazy3: _4p,
		keyedNode: _4r,
		program: _4t,
		programWithFlags: _4K,
		staticProgram: _4N
	};

	var _4X = $_0.bind(null, _4Y);

	_4X.arity = 2;
	_4X.func = _4Y;
	var _3 = {
		sendToApp: _4,
		sendToSelf: _3N,
		effectManagers: _2b,
		outgoingPort: _3P,
		incomingPort: _3U,
		htmlToProgram: _3X,
		program: _4O,
		programWithFlags: _4W,
		initialize: _4P,
		leaf: _3T,
		batch: _3Y,
		map: _4X
	};
	var _50 = {
		init: _22,
		view: _2h,
		update: _20,
		subscriptions: _25
	};
	var $2 = undefined;
	window.Elm = {
		Main: {
			embed: _2,
			fullscreen: _51
		}
	};

	var _$0 = _$2(_3G, 0);
}).call(this);
