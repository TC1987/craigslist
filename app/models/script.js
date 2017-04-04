var form = document.getElementById('inputForm')

function submitForm() {
    // Need to start validations with top-most input field because if you start with bottom input field and a top field validation fails,
    // error will show up for just the bottom input field making the UX horrible.

    // This isn't even a good way to write this either. Should possibly pass in a flag and then have a function that displays all errors?
    var errorMessage = '';

    if (!validateEmail()) {
        error(form.email);
        errorMessage += 'Missing email.\n';
    }

    if (!validatePassword()) {
        error(form.password);
        errorMessage += 'Missing password.\n'
    }

    if (errorMessage) {
        displayError(errorMessage);
        return;
    };

    var data = {
        email: form.phone.value,
        password: form.password.value
    };

    // New to ES6. First arg is the URL that you went to send the data to. Second is the configuration object.
    // headers: Specifying the data type being sent.
    // method: The request method.
    // body: The data being sent. Note that if you want to pass an object, it needs to be converted into JSON first, hence JSON.stringify.
    fetch('http://localhost:3000/users', {
        headers: {
            'Content/Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    });
}

function validateEmail() {
    var email = form.email.value,
        re = /.+@.+/;
    return re.test(email);
}

function validatePassword(password) {
    var password = form.password.value,
        confirmPassword = form.confirmPassword.value;
}

function error(target) {
    target.style.border = '3px solid #F00';
}

function clearError(target) {
    target.style.border = '';
}

function displayError(message) {
    var errorDiv = document.getElementById('error-message');
    errorDiv.innerHTML = message;
    errorDiv.style.visibility = 'visible';
}
