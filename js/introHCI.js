// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

$("text").click(initiaizePage);

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(this).click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
