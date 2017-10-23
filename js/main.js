$(document).ready(function(){
	$(".navbar-toggle").click(function(e){
		e.preventDefault();
		$(".nav").toggleClass("active");
	})
})