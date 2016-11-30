$(document).ready(function() {

	 var navBarPosition = $(".navbar-container").offset().top;
	 $(window).scroll(function() {
	  
	  var currentScroll = $(window).scrollTop();
	  
	  console.log(currentScroll);
	  if (currentScroll < navBarPosition) {
	    $(".navbar-container").removeClass("nav-bar-fixed");
	  } else {
	    $(".navbar-container").addClass("nav-bar-fixed");
	  }

	});

	 $(".form-button").click(function(){
	 	$("#modal").fadeIn();
	 });

	 $("#modal").click(function(){
	 	$("#modal").fadeOut();
	 })
	 $(function() {
 		 $('a[href*="#"]:not([href="#"])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     		 var target = $(this.hash);
    		 target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     		 if (target.length) {
       			 $('html, body').animate({
      			    scrollTop: target.offset().top
    			    }, 1000);
    	    return false;
      }
    }
  });
});
});