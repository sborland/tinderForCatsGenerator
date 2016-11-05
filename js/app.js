var app = {
	seeds: [],
};

$(document).ready(function() {



	$("#setcount").change(function() {
		console.log($(this).val());
		setCount($(this).val());
	})

	var controls = $("#controls");
	createStorableDropdown(controls, "count", "count", [1, 5, 10, 20, 50], setCount, true);
	createStorableDropdown(controls, "style", "style", ["text", "html", "twitter", "sound"], setOutputStyle);

	var grammarNames = Object.keys(rawGrammars);
	createStorableDropdown(controls, "grammar", "grammar", grammarNames, loadGrammar);

	setSeed(localStorage.getItem("lastSeed"));
	reroll();

	$("main").resizable();

});


/*
 * Setting styles etc
 */

function setCount(count) {
	console.log("set count " + count);
	app.count = count;
	reroll();
}

function setOutputStyle(style) {
	app.style = style;
}

function loadGrammar(name) {
	app.grammarName = name;

	app.grammar = tracery.createGrammar(rawGrammars[name]);
	app.grammar.addModifiers(baseEngModifiers);

	console.log(app.grammar);
	reroll();
}


/*
 * Seeds
 */

function reroll() {
	if (app.grammar) {
		var origin = $("#origin").val();

		var outputRaw = $("#output-raw");
		var outputFormatted = $("#output-formatted");
		outputRaw.html("");
		outputFormatted.html("");
		var outputs = [];
		var seeds = [];

		Math.seedrandom(app.currentSeed);

		for (var i = 0; i < app.count; i++) {
			seeds[i] = utilities.words.getRandomID();
		}

		outputs = seeds.map(function(seed) {
			Math.seedrandom(seed);
			return app.grammar.flatten(origin);
		});

		console.log(app.grammarName + ": " + app.count);

		$.each(outputs, function(index, text) {

			var raw = $("<div/>").appendTo(outputRaw).text(niceFormat(text));
			var formatted = $("<div/>", {
				class: "output"
			}).appendTo(outputFormatted).html(text).click(function() {
				speak(text);
			});

		});

	}
}

var currentTalk;
var rate = 1;

function speak(text) {
	responsiveVoice.speak(text, "UK English Male", {
		rate: rate,

	});
	/*
		clearTimeout(currentTalk);
		currentTalk = setTimeout(function() {

		
			responsiveVoice.speak(text, "UK English Male", {
				rate: rate,
				onend: speak
			});

			speak(text);
		}, 100);



		var time = 10 * text.length;
		*/

}


function niceFormat(s) {
	return s;
}

// Reroll the tracery grammar
function nextSeed() {
	setSeed();
	reroll();
}

function prevSeed() {
	if (app.seeds.length > 1) {
		app.seeds.pop();
		setSeed(app.seeds.pop());
	}
	reroll();
}

function setSeed(seed) {
	if (!seed) {
		Math.seedrandom(Date.now());
		seed = utilities.words.getRandomID();
	}
	app.seeds.push(seed);
	app.currentSeed = seed;
	$("#seed").val(app.currentSeed);
	localStorage.setItem("lastSeed", seed);
}