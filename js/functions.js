$( document ).ready(function() {
	function randomColor(){
		// Creating a randomColor function
		// returning random color
		var colors = ["#E53935", "#880E4F", "#8E24AA", "#4A148C", "#D500F9", "#5E35B1", "#7C4DFF", "#536DFE", "#1565C0", "##0097A7", "#006064", "#00B8D4", "#00897B", "#004D40", "#388E3C", "#558B2F", "#F57F17", "#795548", "#A1887F"];
		var randomColorIndex = Math.floor(Math.random() * colors.length);
		return colors[randomColorIndex];
	} 
	function randomQuote(){
		// Creating a randomQuote function
		// returning random quote
		var quotes = ["Don't cry because it's over, smile because it happened.", "Be yourself; everyone else is already taken.", "So many books, so little time.", "A room without books is like a body without a soul.", "You only live once, but if you do it right, once is enough.", "Be the change that you wish to see in the world.", "No one can make you feel inferior without your consent.", "If you tell the truth, you don't have to remember anything.", "Always forgive your enemies; nothing annoys them so much.", "Without music, life would be a mistake.", "We accept the love we think we deserve.", "It does not do to dwell on dreams and forget to live.", "Life is what happens to us while we are making other plans.", "I have not failed. I've just found 10,000 ways that won't work."];
		var randomIndex = Math.floor(Math.random()* quotes.length);
		return quotes[randomIndex];
	}
	function fillFirst(){
		// Creating a fillFirst function
		// which needs to get random color
		// and random text for 
		// window.onready
		let colors = randomColor();
		$("#text").html(randomQuote);	
		$("body").css({"background-color": colors, "color": colors, })
		;
		$(".topDots span").css({"background-color": colors});
		$(".bottomDots span").css({"background-color": colors});
	};
	fillFirst();
	// Creating an onclick function
	$("#btn").on("click",function(){
		// storing the randomColor into a variable
		// so it can be always same once executed
	    let colors = randomColor()
	    // now colors will be always same
		$("#text").html(randomQuote);
		$("body").css({"background-color": colors, "color": colors});
		$(".topDots span").css({"background-color": colors});
		$(".bottomDots span").css({"background-color": colors});
	});

});