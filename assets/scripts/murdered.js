$.fn.murdered ({
	//turn every element black
	$( '*' ).css({ "backgroundImage":"none", "backgroundColor":"black", "color":"#333", "textShadow":"0 0 0 black", "border":"1px solid black", "boxShadow":"0 0 0 black","border-color": "black", "fill":"black" });
	//turn every image greyscale and semi-opaque
	// $('img').css({"-webkit-filter":"grayscale()", "opacity":"0.4"});
	$('img').css({"position":"relative"});
	$('img').after('<div style= "background-color:black; opacity:0.5; position:absolute; top:0; left:0; width:100%; height:100%;">');
	//delete h1
	$( 'h1' ).
	//append text "lights out for earth day"
});