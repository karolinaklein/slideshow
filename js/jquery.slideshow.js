(function($, window, document, undefined) {

	
	$.fn.slideshow = function(){
		
		return this.each(function(){
			
			var that = $(this);
			
			var slide = $(".slide"),
				prevBtn = $(".prev"),
				nextBtn = $(".next"),
				dot = $(".dot"),
				index = 0;
			
			slide.eq(index).show();
			dot.eq(index).addClass("active");
			
			nextBtn.on("click", function(){
				showSlide(index++);				
			});
			
			prevBtn.on("click", function(){
				showSlide(index--);
			});
			
			dot.on("click", function(){
				index = $(this).index();
				showSlide(index);
			});
			
			function showSlide(){
				slide.hide();
				dot.removeClass("active");
				if(index > slide.length-1){index = 0};
				if(index < 0){index = slide.length-1};
				slide.eq(index).fadeIn(500);
				dot.eq(index).addClass("active");
			}
			
			
		
		});
	}
	
	
})(jQuery, window, document);