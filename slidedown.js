/*$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
}); */

/* this script will create a slide down on the page
for everything captured in the div lead by #slidedown...
*/

$(document).ready( function() { /* this is telling the computer to get ready to run a
Jquery function on the document. The curly bracket means this is the start of a code 
block statement. It is closed at the end of the javascript. */     

$menu = $('#slide-down'); /* the javascript will run an event/do something with a variable. 
$ means jQuery, Menu is the variable, Menu is defined as a jQuery event on the tag slidedown. 
The variable value menu equals a jQuery function on the tag slidedown.  
Slide down is a tag in the html. It encapsulates an entire section of content.*/

$('nav li a').on('click', function(event){
event.preventDefault(); /* this is the statement. A jquery function on tag primary-nav anchor. 
on the click there will be a function. A function will happen. An event. There are many events. 
The event is to preventDefault */

	targetId = $(this).attr('href'); /* the variable  */
	$targetSection = $( targetId );

		$(this).parent().siblings().removeClass('active');

		if( ! $(this).parent().hasClass('active') ) {
			$targetSection.show().siblings().hide();
			$(this).parent().toggleClass('active');
			$menu.slideDown(150);
} else{
	$(this).parent().toggleClass('active');
	$menu.slideUp(150);
}
	
	});
});