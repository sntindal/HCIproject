// Call this function when the page loads (the jQuery "ready" event)

var searchInput = {
	'key1' : 'query',
	'key2' : 'address'
};
localStorage.setItem( 'objectToPass', searchInput );

/* when you first load the page, set a custom name if you have one:
var address = localStorage.getItem('customAddress');
if (address) {
	$("#myAddress").html(address);
}*/

// use localStorage to store your name
//$("#submit").click(function() {
	//var newAddress = document.getElementById('address').value;
	/*if (newAddress) {
		//$("#myAddress").html(newAddress);
		localStorage.setItem('customAddress', newAddress);
	}
});*/


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(this).click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	function geocodeAddress(geocoder, resultsMap) {
		//var address = localStorage.getItem('customAddress');
		//var address = document.getElementById('address').value;
		var address = localStorage.getItem('address');
		//localStorage.setItem('customAddress', address);
		geocoder.geocode({'address': address}, function(results, status) {
			if (status === 'OK') {
				resultsMap.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: resultsMap,
					position: results[0].geometry.location
				});
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	}

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
