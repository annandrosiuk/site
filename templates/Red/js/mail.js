$("form.ppp__form").submit(function(e){
	e.preventDefault();
	data = $(this).serialize(); 
	if(  $('form input').val() != '' ){ 
		$.ajax({
			url: "/order.php",
			type: "POST",
			data: data,
			dataType: "JSON", 
			success:  function (jsonString) {
var json = JSON.parse(jsonString);         //parse the JSON string and create JSON object
if (json.success) {
    // it worked
    alert('ok');
    $('#message').append('<div class="alert alert-dismissible ' + json.cssClass + '" role="alert">' + json.message + '</div>');
    $('#message').show();
} else {
    // something went wrong
    alert('not ok');
    }
}
});

	var text = "";
$("a.js-ppp.learn__btn").click(function(){ 
		 text = $(this).parent().parent().find(".learn__title").text();

		$("input#title").attr("value", text);   
});

$("button.recall__btn.js-ppp").click(function(){ 
		if($(this).data("title")){ 
			 text = $(this).data("title"); 
		}else{ 
			 text = $(this).text(); 
		}

		$("input#title").attr("value", text);   
});