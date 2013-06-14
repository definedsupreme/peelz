(function($){

 	$.fn.extend({ 
 		
		//pass the options variable to the function
 		peelz: function(options) {


			//Set the default values, use comma to separate the settings, example:
			var defaults = {
			
				// OPTIONS FOR START(small) HEIGHT & WIDTH
			    sHeight: 162,
			    sWidth: 153,
			    
				// OPTIONS FOR END(large) HEIGHT & WIDTH
			    lHeight: 484,
			    lWidth: 264
			}
				
			var options =  $.extend(defaults, options);
			var o = options;
			
			// HELPER VARIABLES
			var nlWidth = -(o.lWidth);
			var nsWidth = -(o.sWidth);

			var intosWidth = ((o.sWidth) * 88.33333333) / 100;
			var introsHeight = ((o.sHeight) * 95.75) / 100;

			var intolWidth = ((o.lWidth) * 88.33333333) / 100;
			var introlHeight = ((o.lHeight) * 95.75) / 100;
			
			// BUILD PAGE PEEL
		    this.find("li:first-child").addClass('small-intro');
		    this.find("li:nth-child(2)").addClass('large-intro');
	        this.prepend('<li id="peelz-bg"/>');
	        this.prepend('<li id="peelz-curl"/>'); 
	        this.find('.large-intro').prepend('<div id="peel-close"/>'); 
	        
	        // START UP STYLES
	        this.find('.large-intro').css({overflow:'hidden',position: "absolute", left: nlWidth});
	        this.find('.small-intro').css({overflow:'hidden',position: "absolute", left: 0, height: introsHeight, width: intosWidth});
	        this.css({ minHeight: o.sHeight, minWidth: o.sWidth});
	        
	        // HOVER FUNCTIONALITY
	        this.hover(function(){
	
						//gets rid of small preview text
						$('.small-intro').stop().animate({left: nsWidth });
						//on click of page peel curl
						$('#peelz-curl').stop().click(function(){
								//hide page peel curl
								$(this).hide();
								//change background color to white
								$('#peelz-bg').css({background:'white'});
						//animate the small page curl to the larger size
						}).animate({width: o.lWidth, height: o.lHeight}, 500);
						//animate large intro text to slide on screen
						$('.large-intro').stop().animate({width: intolWidth, height: introlHeight, left: 0},500);
						//animate small peel to large size
						$('#peelz-bg').stop().animate({width:o.lWidth, height: o.lHeight},500);
						//on click of close button do this
						$('#peel-close').click(function(){ 
								//show background image of peel curl
								$('#peelz-curl').show()
								//remove background color
								$('#peelz-bg').css({backgroundColor:'transparent'});
						});
			}, 
			//TOGGLE HOVER OPTIONS
			function(){
						//Check to see if page curl is visible
						if ($('#peelz-curl').is(":visible")) {
								//if it is, get rid of small intro text
								$('.small-intro').stop().animate({left: 0 });
								//animate the small curl to the larger size
								$('#peelz-curl').stop().animate({width: o.sWidth, height: o.sHeight}, 500);
								//remove large intro text
								$('.large-intro').stop().animate({width: o.sWidth, height: o.sHeight, left: nlWidth},500);
								//animate bacground
								$('#peelz-bg').stop().animate({width: o.sWidth, height: o.sHeight},500);
					}
			}); //END hover
    	} // END peelz 
	}); //END extend 
	
})(jQuery);




