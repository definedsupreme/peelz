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
	        this.prepend('<li id="small-peel-white"/>');
	        this.prepend('<li id="small-peel-curl"/>'); 
	        this.find('.large-intro').prepend('<div id="peel-close"/>'); 
	        
	        // START UP STYLES
	        this.find('.large-intro').css({overflow:'hidden',position: "absolute", left: nlWidth});
	        this.find('.small-intro').css({overflow:'hidden',position: "absolute", left: 0, height: introsHeight, width: intosWidth});
	        this.css({ minHeight: o.sHeight, minWidth: o.sWidth});
	        
	        // HOVER FUNCTIONALITY
	        this.hover(function(){
	
						//gets rid of small preview text
						$('.small-intro').stop().animate({left: nsWidth });
						
						//changes the small preview curl to the larger preview curl
						$('#small-peel-curl').stop().click(function(){
								$(this).hide();
								$('#small-peel-white').css({background:'white'});
						}).animate({width: o.lWidth, height: o.lHeight}, 500, function(){ 
								$('#large-peel-curl').stop().animate({width: o.lWidth, height: o.lHeight}, 500)
								$('#large-peel-curl').click( function(){
										$(this).stop().animate({backgroundPositionX:o.lWidth, backgroundPositionY: o.lHeight},500);
										$('#large-peel-white').addClass('white-bg');
								});
						});
						
						$('.large-intro').stop().animate({width: intolWidth, height: introlHeight, left: 0},500);
						$('#small-peel-white').stop().animate({width:o.lWidth, height: o.lHeight},500);
						$('.full-open').removeClass("hide");
						$('#peel-close').click( function(){ 
								$('#small-peel-curl').show()
								$('#small-peel-white').css({backgroundColor:'transparent'});
						});
			}, 
			//TOGGLE HOVER OPTIONS
			function(){
						//gets rid of small preview text
						if ($('#small-peel-curl').is(":visible")) {
								$('.small-intro').stop().animate({left: 0 });
								//changes the small preview curl to the larger preview curl
								$('#small-peel-curl').stop().animate({width: o.sWidth, height: o.sHeight}, 500, function(){ 
											$('#large-peel-curl').stop().animate({width: o.lWidth, height: o.lHeight}, 500)
											$('#large-peel-curl').click( function(){
												$(this).stop().animate({backgroundPositionX: o.lWidth, backgroundPositionY: o.lHeight},500);
												$('#large-peel-white').addClass('white-bg');
											});
								});
								$('.large-intro').stop().animate({width: o.sWidth, height: o.sHeight, left: nlWidth},500);
								$('#small-peel-white').stop().animate({width: o.sWidth, height: o.sHeight},500);
					}
			}); //END hover
    	} // END peelz 
	}); //END extend 
	
})(jQuery);




