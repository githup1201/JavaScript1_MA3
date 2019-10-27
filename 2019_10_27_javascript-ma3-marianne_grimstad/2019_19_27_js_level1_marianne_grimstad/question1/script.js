//Use RegEx to validate form
function validateEmail(email) {
    var emailPattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   
    if (email.match(emailPattern)) {
        return true;
    } else {
        return false;
        console.log("The email address entered is invalid!");
        return false;
    }
  
} ;

var form = document.querySelector("form");
    form.addEventListener("submit", function() {    
    return validateEmail(this.emailaddress.value);
        });

function checkPhoneNumber(phoneNO) {
    var phoneRE = /^\(\d{3}) \d{3}-\d{4}$;
   
    if (phoneNO.match(phoneRE)) {
        return true;
    } else {
        return false;
        console.log("The phone number entered is invalid!");
        return false;
    }
  
} ;

var form = document.querySelector("form");
    form.addEventListener("submit", function() {    
    return checkPhoneNumber(this.phonenumber.value);
        });