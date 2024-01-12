function registration(){
var firstname=document.getElementById('#FirstName').value
var lastname=document.getElementById('#Lastnme').value
var email=document.getElementById('#email').value
var password=document.getElementById('#Password').value
var verifyPassword=document.getElementById('#verifyPssword').value
// for testing
        var password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(firstname===''){
        alert('please enter your FirstName !')
    }
    else if(lastname===''){
        alert('please enter you LastName !')
    }
    











}