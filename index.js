jQuery(document).ready(function() {     

	if (Modernizr.geolocation) {
		$("#dimeLoc").click(getLocation);
	} else {
		$("#dimeLoc").click(navigator.geolocation.watchPosition);
	}
	

    function getLocation() {

    	if (navigator.geolocation) {

    	    navigator.geolocation.getCurrentPosition(showPosition);

   		} else {
$('#coor').html("Hola");
        	//x.innerHTML = "Geolocation is not supported by this browser.";
    	}
	}
	function showPosition(position) {
    	var coorde = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
		$('#coor').html(coorde);
	}

});
