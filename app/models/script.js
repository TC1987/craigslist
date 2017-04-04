var form = document.getElementById('inputForm')

function submitForm() {
    // Need to start validations with top-most input field because if you start with bottom input field and a top field validation fails,
    // error will show up for just the bottom input field making the UX horrible.

    // This isn't even a good way to write this either. Should possibly pass in a flag and then have a function that displays all errors?
    if (!validateEmail()) {
        alert('Hey, you\'re missing your email or the format is messed up.');
        error(form.email);
        return;
    }

    console.log(form);
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
    target.style.border = '#px solid #F00';
}

function clearError(target) {
    target.style.border = '';
}
