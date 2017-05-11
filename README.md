# What's in this repo?
Experiments with running built Elm programs through [Prepack](https://prepack.io/), which intends to make JS programs run faster (see their site for more details).

## HelloWorld
This folder contains a basic "Hello, World!" elm program.  It was copied from the new project template on [Ellie](https://ellie-app.com/new).

## RandomGifHttp
This folder contains the 'Http' example from Elm-lang.org, which fetches random Gifs of cats over Http.

# Contributing
Pull requests are very welcome!

Some ideas:
- More examples
- Insights into what changes Prepack has made to the Elm code
- Benchmarks comparing the 'raw' elm build vs prepacked.  Elm is already quite fast, so this would be very interesting!

# How was this done?
As of this writing (morning of 5/11/2017), the version of `prepack` on npm was missing support for some features (like setTimeout), so it had to be built from source.

Go to the [Prepack repo on Github](https://github.com/facebook/prepack) and follow their instructions to clone/install/build.

Once you have prepack built:

1. In the `prepack` directory, open `package.json` and modify the `prepack` script. `"prepack": "node lib/prepack-cli.js main.js --out prepacked.js"`.  I'm sure there are smarter ways of doing this, but it makes the rest of the commands simpler.
2. Use `elm-make` to compile your desired Elm code to a JS file.  I stuck with `elm-make main.elm --output main.js` for these examples to make things easier.
3. Add `window.Elm.Main.fullscreen();` to the bottom of your newly built `main.js`.  Since prepack partially executes the code, it couldn't hurt to try this?
4. Copy that JS file into your prepack directory
5. Run `npm run prepack`
6. Observe a relatively friendly error message, telling you: `badIndex already declared` with a line number.  Turns out elm-make duplicated a function...
7. Open `main.js` and remove the duplicate `function badIndex(index, nestedProblems) { ... }`.
8. Run `npm run prepack` again.  Should be a success this time unless you're using more features!
9. Copy the `prepacked.js` file back to your project/example directory.

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