function handleSubmit() {
    const message = document.getElementById('message');
    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const messeges = document.getElementById('messeges').value;
    const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let testEmail = validateEmail.test(email);
    message.style.display = "none";
    if (name.length === 0) {
        message.innerText = "Please enter your name";
        message.style.display = "block";
        return false;
    } else if (place.length === 0) {
        message.innerText = "Please enter your place";
        message.style.display = "block";
        return false;
    } else if (email.length === 0) {
        message.innerText = "Please enter your email";
        message.style.display = "block";
        return false;
    } else if (testEmail === false) {
        message.innerText = "Please enter the proper email address";
        message.style.display = "block";
        return false;
    } else if (mobile.length === 0) {
        message.innerText = "Please enter your mobile number";
        message.style.display = "block";
        return false;
    } else if (messeges.length === 0) {
        message.innerText = "Please enter any message";
        message.style.display = "block";
        return false;
    } else {
        alert("Form submitted");
        return false;
    }
}

