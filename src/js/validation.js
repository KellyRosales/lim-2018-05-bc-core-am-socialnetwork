
window.registerEmail = (emailSignUp) => {
        // Una expresión regular es un objeto que describe un patrón de caracteres.
        let regExpRegisterEmail = new RegExp(/^[a-zA-Z0-9_\-~]{2,}@[a-zA-Z0-9_\-~]{2,}[a-zA-Z]{2,4}/)
        let result;
        if (regExpRegisterEmail.test(emailSignUp)) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }



window.registerPassword = (passwordSignUp) => {

    let regExpRegisterPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)
    let result;
    if (regExpRegisterPassword.test(passwordSignUp)) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

window.loginEmail = (emailSignIn) => {

    let regExpLoginEmail = new RegExp(/^[a-zA-Z0-9_\-~]{2,}@[a-zA-Z0-9_\-~]{2,}[a-zA-Z]{2,4}/)
    let result;
    if (regExpLoginEmail.test( emailSignUp )) {
        result = true;
    } else {
        result = false;
    }
    return result;
};

window.loginPassword = (password) => {

    let regExpLoginPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/)
    let result;
    if (regExpLoginPassword.test(password)) {
        result = true;
    } else {
        result = false;
    }
    return result;
};