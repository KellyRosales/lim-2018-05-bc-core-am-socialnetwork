//SignUp variables (registrarse)
// const nameSignUp = document.getElementById('name-signup');
const userSignUP = document.getElementById('user-signup');
const emailSignUp = document.getElementById('email-signup');
const passwordSignUp = document.getElementById('password-signup');
const passwordValidation = document.getElementById('password-validation');
const registerButton = document.getElementById('register');

//SignIn variables (logueare)
const googleButton = document.getElementById('google-button');
const facebookButton = document.getElementById('facebook-button');
const emailSignIn = document.getElementById('email-signin');
const passwordSignIn = document.getElementById('password-signin');
const signInButton = document.getElementById('sign-in-button');


//Function to call the other HTML where's the main page of the app
const htmlCall = () => {
  window.location.assign('../src/components/mainpage.html');
};

//EMAIL register
registerButton.addEventListener('click', () => {
  let correo = emailSignUp.value;
  let contador = 0;
  let contador2 = 0;
  
//validación de email por campos
  for (i = 1; i < correo.length; i++) {
    if (correo.charAt(i - 1) === "@") {
      contador = contador + 1;
    }
    if (contador === 1) {
      if (correo.charAt(i - 1) === ".") {
        contador2 = contador2 + 1;
      }
    }
  }

  if (contador === 1 && contador2 === 2 || contador === 1) {
  }
  else {
    alert('correo no valido, el correo debe tener el formato  ejemplo@hotmail.com')
  }
  //validacion con expresión regular
  registerEmail = (emailSignUp) => {
    emailSignUp.value
  }
  registerPassword = (passwordSignUp) => {
    passwordSignUp.value
  }

  const cb = (error, result) => {
    if (error) {
      // console.log(error.code, error.message);
    } else {
      let user = result.user;
      writeUserData(user.uid, user.displayName, user.email, user.photoURL, htmlCall);
    }
  };

  signUp(emailSignUp.value, passwordSignUp.value, cb);

});


///////////////////////////////////Métodos de Inicio de Sesión///////////////////////////////////

//EMAIL LogIn button 
signInButton.addEventListener('click', () => {

  // let contraseñaLogueo= passwordSignUp.value;
  // let contraseñaRegistro= passwordSignIn.value;
  let correo = emailSignIn.value;
  let contador = 0;
  let contador2 = 0;

  //validación de email por campos
  for (i = 1; i < correo.length; i++) {
    if (correo.charAt(i - 1) === "@") {
      contador = contador + 1;
    }
    if (contador === 1) {
      if (correo.charAt(i - 1) === ".") {
        contador2 = contador2 + 1;
      }
    }
  }

  if (contador === 1 && contador2 === 2 || contador === 1) {
  }
  else {
    alert('correo no valido, por favor verifica errores')
  }


  loginEmail = (emailSignIn) => {
    emailSignIn.value = "Email válido"
  }
  loginPassword = (passwordSignIn) => {
    passwordSignIn.value = "Password válido"
  }

  const cb = (error, result) => {
    if (error) {
      // console.log(error.code, error.message);
    } else {
      result;
      htmlCall();
    }
  }
  signIn(emailSignIn.value, passwordSignIn.value, cb);

});

//GOOGLE LogIn button 

googleButton.addEventListener('click', () => {
  let provider;
  const cb = (error, result) => {
    if (error) {

    } else {
      let user = result.user;
      writeUserData(user.uid, user.displayName, user.email, user.photoURL, htmlCall);
    }
  }
  signInGoogle(provider, cb);
});

//FACEBOOK LogIn button
facebookButton.addEventListener('click', () => {
  let provider;
  const cb = (error, result) => {
    if (error) {

    } else {
      let user = result.user;
      writeUserData(user.uid, user.displayName, user.email, user.photoURL, htmlCall);
    }
  }

  signInFacebook(provider, cb);

});

const registerLink = document.getElementById('register-link');
const registerSection = document.getElementById('register-section');

registerLink.addEventListener('click', () => {
  registerSection.style.display = 'block';
  loginSection.style.display = 'none';
});

const loginLink = document.getElementById('login-link');
const loginSection = document.getElementById('login-section');

loginLink.addEventListener('click', () => {
  loginSection.style.display = 'block';
  registerSection.style.display = 'none';
});


//validando registro
// if (nameSignUp === "" || emailSignUp === "" || passwordSignUp === "" || passwordValidation === "") {
//   alert("Este campo es obligatorio de llenar");
//   return false;
// }
// else (nameSignUp.length > 30 || passwordSignUp > 50 || passwordValidation > 50){
//   alert("Este campo es muy largo");
//   return false;
// }

