submit.onclick = function() {
	var submit = document.getElementById("submit");
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var borough = document.getElementById("borough");
	var message = document.getElementById("message");
    var price = document.getElementById("price");
    var price = document.getElementById("Donation");
       var price = document.getElementById("Login");
	message.innerText = "Dear  " + name.value + " Thank you for your shopping with us in our   " + borough.value + "  depapartment. ";	
    
};