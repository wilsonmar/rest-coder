/*
$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:8124/',
        dataType: "jsonp",
        jsonpCallback: "_testcb",
        cache: false,
        timeout: 5000,
        success: function(data) {
		alert(data);
            $("#test").append(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('error ' + textStatus + " " + errorThrown);
        }
    });
});
*/
submitOperation = function ( event ){	
 $.ajax({
        url: 'http://localhost:8124/',
        dataType: "json",
        //jsonpCallback: "_testcb",
        cache: false,
        timeout: 5000,
        success: function(data) {
	    //$( ".response_body" ).html( "<strong>" + data + "</strong>" );
            $(".response_body").append(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('error ' + textStatus + " " + errorThrown);
        }
    });
/*	
$.ajax({
	//url: "http://localhost:8080/starbucks-1.0-SNAPSHOT/starbucks/",
	url: "http://localhost:1337/",
	//data: {
	//orderId: "18810dea-f744-43ed-9897-a73cfe666647"
	//},

	type: "GET",

	dataType: "json",

	success: function(data) {
		alert("Response" + data);
		$( ".response_body" ).html( "<strong>" + data + "</strong> degrees" );
	  },

	 // code to run if the request fails; the raw request and
	// status codes are passed to the function
	error: function( xhr, status ) {
	alert( "Sorry, there was a problem!" );
	},
	// code to run regardless of success or failure
	complete: function( xhr, status ) {

	$( ".request_url" ).html( "test" );
	alert( "The request is complete!" );
	}
	//$( "#weather-temp" ).html( "<strong>" + data + "</strong> degrees" );

	});
*/
};

/*
var request = require("request");
request({
  uri: "http://www.jspro.com",
  method: "GET",
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10
}, function(error, response, body) {
  console.log(body);
});

*/
