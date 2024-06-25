document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');
    const showSignUp = document.getElementById('showSignUp');
    const showLogin = document.getElementById('showLogin');

    showSignUp.addEventListener('click', function () {
        loginForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });

    showLogin.addEventListener('click', function () {
        signUpForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    document.getElementById('login').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateLogin()) {
            if (checkUser()) {
                alert('Login successful!');
                window.location.href = 'home.html';
            }


        }
    });

    document.getElementById('signup').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateSignUp()) {
            alert('Sign up successful! Please log in.');
            signUpForm.style.display = 'none';
            loginForm.style.display = 'block';
        }
    });



    function validateSignUp() {
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }


    function validateLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        return true;
    }

    function checkUser() {
        if (document.getElementById('loginEmail').value != document.getElementById('signupEmail').value) {
            alert('User not found');
            return false;
        }
        if (document.getElementById('loginPassword').value != document.getElementById('signupPassword').value) {
            alert('User not found');
            return false;
        }
        return true;
    }


});
