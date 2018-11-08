function processSearch(){
    //var input = document.myform.input.value;
    var address = document.myform.address.value;

    //localStorage.setItem("input", input);
    localStorage.setItem("address", address);
    alert("Saved: " + localStorage.getItem("input") + ", and " + localStorage.getItem("address"));
}

function clearSearch(){
    $('#myform').get(0).reset();
}

function retrieveSearchInfo(){
    //var input = localStorage.getItem("input");
  //  $("#query").html("Input: " + input);


    var address = localStorage.getItem("address");
    $("#address").html("Address: " + address);
}

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

/*function onSuccessPopDatabase(position){
    localStorage.setItem("carLoc", new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
     if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
    alert("The location has been saved.");
}

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function retrieveLocation(){
    var retrievedStringwParens = localStorage.getItem("carLoc");
    if(retrievedStringwParens == null){
        alert("no location saved");
        return null;
    }
    var retrievedString = retrievedStringwParens.replace(/[()]/g,'')
    var splitArray = retrievedString.split(",");
    var lat = parseFloat(splitArray[0]);
    var lng = parseFloat(splitArray[1]);
    var retrievedLatLng = new google.maps.LatLng(lat,lng);
    return retrievedLatLng;
}

function processForm(){
    var level = document.myform.level.value;
    var spot = document.myform.spot.value;
    var addInfo = document.myform.notes.value;

    localStorage.setItem("level", level);
    localStorage.setItem("spot", spot);
    localStorage.setItem("addInfo", addInfo);
    alert("Saved: " + localStorage.getItem("level") + ", " + localStorage.getItem("spot") + ", and " + localStorage.getItem("addInfo"));
}

function clearForm(){
    $('#myform').get(0).reset();
}

function retrieveFormInfo(){
    var level = localStorage.getItem("level");
    $("#level2").html("Level: " + level);


    var spot = localStorage.getItem("spot");
    $("#spot").html("Spot: " + spot);


    var notes = localStorage.getItem("addInfo");
    $("#notes").html("Notes: " + notes);
}*/
