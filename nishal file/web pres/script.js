
function validateForm(){
    let name=document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent ="";

    if(name==""){
        nameError.textContent = "Name is required.";
        isValid = false;
    }
    if(email ==""){
        emailError.textContent = "Email is required.";
        isValid = false;
    }else if(!isValidEmail(email)){
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }
    if(message ==""){
        messageError.textContent = "Message is required.";
        isValid = false;
    }
    return isValid;
}
function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}




