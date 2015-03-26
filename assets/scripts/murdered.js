$.fn.murdered = function() {
		//strip all inline styles
		$('*').removeAttr('style');

		//set interval to run code every so often
		setInterval(function(){

		//turn every element black
		$( '*, *:before, *:after' ).css({ "backgroundImage":"none", "backgroundColor":"black", "color":"#333", "textShadow":"0 0 0 black", "border":"1px solid black", "boxShadow":"0 0 0 black","border-color": "black", "fill":"black" });

		//turn every image greyscale and semi-opaque
		$('img').css({"-webkit-filter":"grayscale()", "opacity":"0.4"});

		$('*').addClass('murder');


		//delete h1
		$( 'h1' ).text(" ");

		//append text "lights out for earth day"

		
		}, 1000); //sets interval, end setInterval
}; //end murdered function
