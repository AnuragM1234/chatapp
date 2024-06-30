function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateSignUpInputCredentials() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var nameErr = true, emailErr = true, passwordErr = true, confirmPasswordErr = true;

    if (username == "") {
        printError("nameErr", "Please enter your Name");
    } else {
        var regex = /^[A-Za-z]+$/;
        if (regex.test(username) === false) {
            printError("nameErr", "Please enter a valid Name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    if (confirmPassword == "") {
        printError("confirmPasswordErr", "Please enter your password again");
    } else if (confirmPassword !== password) {
        printError("confirmPasswordErr", "Passwords do not match");
    } else {
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
    }

    if (nameErr || emailErr || passwordErr || confirmPasswordErr) {
        return false;
    } else {
        return true;
    }
}

function validateLoginInputCredentials() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailErr = true, passwordErr = true;

    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    if (emailErr || passwordErr) {
        return false;
    } else {
        return true;
    }
}
