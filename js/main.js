$(document).ready(function(){
	$('img').click(function(){
		/*call replaceImg function, which
			takes the this object (img) and
			it's data-alt-src attribute name*/
		replaceImg(this, 'data-alt-src');
	});
});

/*Swap out each current img for a cat image*/
	var replaceImg = function(theObject, theAttribute){
		/*store current img src url
			returned by the .attr function*/
		var srcUrl = $(theObject).attr('src');

		/*store current img data-alt-src url
			returned by the .attr function*/
		var altUrl = $(theObject).attr(theAttribute);

		/*fadeOut current img, fadeIn alternate image*/
		$(theObject).fadeOut(1000, function(){

			/*src attribute is assigned the 
				alternate data-alt-src url, and faded in*/
			$(theObject).attr('src', altUrl).fadeIn(1000);

			/*data-alt-src attribute is assigned 
				the original src url*/
			$(theObject).attr('data-alt-src', srcUrl);
		});
	};