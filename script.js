
function validateAndSubmit() {
   
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    alert("Your name is " + name)
    
    if (phone.length !== 10) {
        alert("Your number is invalid.");
        return;
    }

    
    var allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
    var isValidDomain = allowedDomains.some(function (domain) {
        return email.includes(domain);
    });

    if (isValidDomain) {
        alert("Please enter your official mail id.");
        return;
    }

    
    var banner = document.getElementById("banner");
    banner.textContent = "Thank you " + name + " for sharing your details. We will reach out to you on your mail id: " + email;
}
