$(document).ready(function(){
  $('.right.menu.open').on("click",function(e){
    e.preventDefault();
     $('.ui.vertical.menu').toggle();
   });
   $('.ui.dropdown').dropdown();

   $('#contact-form').submit(function(e) {
     console.log('yue');
   	e.preventDefault();
   	var c_name = $('#c_name').val();
   	var c_email = $('#c_email').val();
   	var c_message = $('#c_message ').val();
   	var response = $('#contact-form .ajax-response');
   	$('#response-text').html("Thank you!");

   	var formData = {
   		'name'       : c_name,
   		'email'      : c_email,
   		'message'    : c_message
   	};

   	if (( c_name== '' || c_email == '' || c_message == '')) {
   		response.fadeIn(500);
   		response.html('<i class="fa fa-warning"></i> Please fix the data and try again.');
   	}

   	else {
   	   $.ajax({
   		  type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
   			url         : 'https://formspree.io/nt92@ufl.edu', // the url where we want to POST
   			data        : formData, // our data object
   			dataType    : 'json', // what type of data do we expect back from the server
   			encode      : true,
   		success		: function(res){
   			var ret = $.parseJSON(JSON.stringify(res));
   			response.html(ret.message).fadeIn(500);
   			}
   		});
   	}
     return false;
   });
 });

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-98779661-1', 'auto');
ga('send', 'pageview');
