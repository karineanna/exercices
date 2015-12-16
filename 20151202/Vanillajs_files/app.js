$(document).ready(function(){
	
	$("form").on("submit",function(event){ // val "Get the current value of the first element in the set of matched elements." *//
		
		var toAdd = $("input, #id").val();
		
		$("#liste").append("<li>+toAdd</li>");


	});

});