// 1) grabs all the elements by id
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// 3) start writing your functions that are being called from within your 
// event listener.

// Show input Error message
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const small = formControl.querySelector("small");
    small.innerHTML = message
}

// Show input success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isValidEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// 2) creates the event listener and passes it two parameters
// a- 'submit'
// b- and another function to run other events/functions
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'username is required');
    } else {
        showSuccess(username);
    }

    if(email.value === '') {
        showError(email, 'email is required');
    } else if (isValidEmail(email.value)) {
        showError(email, 'email is not valid');
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'password is required');
    } else {
        showSuccess(password);
    }

    if(password2.value === '') {
        showError(password2, 'password2 is required');
    } else {
        showSuccess(password2);
    }


    
});



