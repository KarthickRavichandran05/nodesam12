var sql = require("bluemix-secure-gateway").defaults({
    apiKey: "https://api.ng.bluemix.net",
    username: "karthickravi594@gmail.com",
    password: "K@rthick1"
});

// Get an existing Secure Gateway instance using the configuration ID presented
// in the Service UI
//
console.log(sql);
sql.getGateway ({id:'IzcNa7Zn2Ck_prod_ng',securityToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25maWd1cmF0aW9uX2lkIjoiSXpjTmE3Wm4yQ2tfcHJvZF9uZyIsInJlZ2lvbiI6InVzLXNvdXRoIiwiaWF0IjoxNDg0Mjg3ODMzLCJleHAiOjE0OTIwNjM4MzN9.j91B2hJBXzSB4Vr3UUWSTx5v1KfHydcnjZr2hm3qcv0'}, function (err,gateway) {
	/*if(err) {
		throw err; 
	}*/
    // Retrieve an existing Destination and use the Host and Port information to
    // to connect to this remote destination
    //
	
	console.log(gateway);
	
	//gateway.createDestination({desc: 'Secure', ip:'', port:<destination port>, protocol:<'TCP' | 'TLS' | 'HTTP' | 'HTTPS'>}, function(error, destination));
	
    gateway.getDestination ('IzcNa7Zn2Ck_vqd', function (a, b) {

	console.log(a);
	console.log('XXXXXXXXXXXXXXXXXXXXXXXXXxx');
	console.log(b);
	
});
});