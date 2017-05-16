# What's in this repo?
Experiments with running built Elm programs through [Prepack](https://prepack.io/), which intends to make JS programs run faster (see their site for more details).

## HelloWorld
This folder contains a basic "Hello, World!" elm program.  It was copied from the new project template on [Ellie](https://ellie-app.com/new).

## RandomGifHttp
This folder contains the 'Http' example from Elm-lang.org, which fetches random Gifs of cats over Http.

## RealWorldSPA
This folder contains Richard Feldman's elm-spa-example, which implements the RealWorldApp specification.  This folder doesn't contain a prepacked verison yet due to errors.  Up for a challenge?

# Contributing
Pull requests are very welcome!

Some ideas:
- More examples
- Insights into what changes Prepack has made to the Elm code
- Benchmarks comparing the 'raw' elm build vs prepacked.  Elm is already quite fast, so this would be very interesting!

# How was this done?
First you need to install `prepack` via npm.  It must be version 0.2.2+.
```
npm install prepack -g
```

Note:  Prepack is still in active developement.  If you need the latest & greatest, go to the [Prepack repo on Github](https://github.com/facebook/prepack) and follow their instructions to clone/install/build.

Once you have prepack built:

1. Use `elm-make` to compile your desired Elm code to a JS file.  I stuck with `elm-make main.elm --output main.js` for these examples to make things easier.
2. Add `window.Elm.Main.fullscreen();` to the bottom of your newly built `main.js`.  Since prepack partially executes the code, it couldn't hurt to try this?
3. Run `prepack main.js --out prepacked.js` (or the names you prefer)
4. Observe a relatively friendly error message, telling you: `badIndex already declared` with a line number.  Turns out elm-make duplicated a function...
5. Open `main.js` and remove the duplicate `function badIndex(index, nestedProblems) { ... }`.
6. Run `prepack main.js --out prepacked.js` again.  Should be a success this time unless you're using more features!
7. Copy the `prepacked.js` file back to your project/example directory.
8. Fix errors in the prepack output which are preventing the code from running (check browser console logs or let the debugger pause on exceptions).  See the [commit history of the example files](https://github.com/SkaterDad/elm-prepack-experiments/commit/5785de8d63e8690138ddf26a7f4e1af3ff36ba8c) for more info.
9. Minify & gzip the JS files.  I used Uglify (`npm install uglify-js -g`) and gzip.
	```
	uglifyjs main.js -c -m -o main.uglify.js
	uglifyjs prepacked.js -c -m -o prepacked.uglify.js
	gzip -k main.uglify.js
	gzip -k prepacked.uglify.js
	```

# Some notes
Some higher order functions (ie. functions returning other functions) get squashed/eliminated.  For example:

```javascript
function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}
```
Seems to be transformed into this:

```javascript
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
```

Virtual dom nodes can be evaluated by prepack, so they show up as objects instead of functions.

From the HelloWorld example:
```javascript
var _user$project$Main$main = _elm_lang$virtual_dom$Native_VirtualDom.staticProgram(
	_elm_lang$html$Html$text('Hello, World!'));
```
Transformed into:
```javascript
// this function gets passed into the View of elm's runtime
function _2h() {
	return _2i;
}
var _2i = {
	type: "text",
	text: "Hello, World!"
};
```

### Uncompressed, un-minified JS file stats:

HelloWorld example
- Before = 182 KB (7832 lines)
- After = 96 KB (4788 lines)

RandomGifHttp example
- Before = 223 KB (9183 lines)
- After = 137 KB (6817 lines)

### Compressed & Minified File Stats
These are interesting to look at, but since `prepack` is trying to optimize for performance, not size, they're not necessarily relevant. There may be cases when it generates longer code in order to get better performance (not with these examples, though).

HelloWorld|Raw|Minified|Min+Gzip
----------|---|--------|--------
Elm build|175 KB|66 KB|20 KB
Prepacked|92 KB|47 KB|15 KB

RandomGifHttp|Raw|Minified|Min+Gzip
----------|---|--------|--------
Elm build|214 KB|74 KB|23 KB
Prepacked|130 KB|67 KB|21 KB



### TodoMVC Benchmark Results
To see if `prepack` makes a significant difference in runtime performance, I copied the [TodoMVC benchmarks from Evan](https://github.com/evancz/react-angular-ember-elm-performance-comparison) and ran the Elm implementaitons through `prepack`.

The files can be found in the `Benchmarks` folder of this repo.

On the machine I ran these tests on (Windows 7, Intel Core i5-4590), I saw no significant performance benefit to running the compiled `elm` code through `prepack`.  On the "optimized" implementations, where `Html.lazy` is utilized, the prepack versions seem to perform slightly worse w/ 10x CPU slowdown.

IE11

Implementation|Run 1
--------------|-----
Elm 0.17|5944 ms
Prepacked Elm 0.17|5942 ms
Elm 0.17 (optimized)|4274 ms
Prepacked Elm 0.17 (optimized)|4244 ms

Chrome 58.0.3029.96 (64-bit) - Full CPU Speed

Implementation|Run 1|Run 2|Run 3
--------------|-----|-----|-----
Elm 0.17|1993 ms|2012 ms|2009 ms
Prepacked Elm 0.17|2008 ms|2003 ms|1992 ms
Elm 0.17 (optimized)|1980 ms|1972 ms|1981 ms
Prepacked Elm 0.17 (optimized)|1992 ms|1979 ms|1978 ms

Chrome 58.0.3029.96 (64-bit) - 5x CPU Slowdown

Implementation|Run 1|Run 2|Run 3
--------------|-----|-----|-----
Elm 0.17|5379 ms|5397 ms|5540 ms
Prepacked Elm 0.17|5424 ms|5491 ms|5391 ms
Elm 0.17 (optimized)|3511 ms|3608 ms|3528 ms
Prepacked Elm 0.17 (optimized)|3477 ms|3642 ms|3648 ms

Chrome 58.0.3029.96 (64-bit) - 10x CPU Slowdown

Implementation|Run 1|Run 2
--------------|-----|-----
Elm 0.17|12782 ms|12180 ms
Prepacked Elm 0.17|12397 ms|11937 ms
Elm 0.17 (optimized)|7628 ms|7272 ms
Prepacked Elm 0.17 (optimized)|7742 ms|8279 ms

### TodoMVC Page Load Performance
To see if the prepacked version affected page load performance, I used Chrome Dev Tools' Performance tab to profile page reloads.

As with the file size metrics posted before, I used uglifyjs to minify both version of the "optimized" TodoMVC.

I expected to see some small wins for `prepack` here, since the minified file sizes are smaller.  In my opinion, the results aren't significantly different, especially if you account for the variability in numbers that Dev Tools measured (the 2 versions traded back & forth for "best" results).  Overall it does seem the "scripting" time is lower with the prepacked file, but that's likely due to some dead code elimination that uglify wasn't capapble of.  Less code = less parse time, so no news here!

Full CPU Speed - Averages of 4 runs each

Metric|Original (Min)|Prepacked (Min)
------|--------------|---------------
Loading|3.2 ms|2.85 ms
Scripting|45.75 ms|30.73 ms
Rendering|4.2 ms|7.15 ms
Painting|0.75 ms|0.475 ms

10x CPU Slowdown - Averages of 5 runs each

Metric|Original (Min)|Prepacked (Min)
------|--------------|---------------
Loading|30.14 ms|25.36 ms
Scripting|286.74 ms|264.1 ms
Rendering|25.48 ms|28.6 ms
Painting|2.36 ms|3.28 ms