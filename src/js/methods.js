//SignUp variables
const nameSignUp = document.getElementById('name-signup');
const userSignUp = document.getElementById('user-signup');
const emailSignUp = document.getElementById('email-signup');
const passwordSignUp = document.getElementById('password-signup');
const passwordValidation = document.getElementById('password-validation');
const registerButton = document.getElementById('register');
//SignIn variables
const googleButton = document.getElementById('google-button');
const facebookButton = document.getElementById('facebook-button');
const emailSignIn = document.getElementById('email-signin');
const passwordSignIn = document.getElementById('password-signin');
const signInButton = document.getElementById('sign-in-button');


//Function to call the other HTML where's the main page of the app
const htmlCall = () => {
  window.location.assign('../src/components/mainpage.html');
};
// ../src/components/mainpage.html

//EMAIL register
registerButton.addEventListener('click', () => {
  const cb = (error, result) => {
    if (error) {
      console.log(error.code, error.message);
    } else {
      alert('¡Te Has Registrado Exitosamente!');
      htmlCall();
      let user = result.user;
      writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    }
  }

  signUp(emailSignUp.value, passwordSignUp.value, cb);

});

///////////////////////////////////Métodos de Inicio de Sesión///////////////////////////////////

//EMAIL LogIn button 
signInButton.addEventListener('click', () => {
  const cb = (error, result) => {
    if (error) {
      console.log(error.code, error.message);
    } else {
      alert('Has Iniciado Sesión Correctamente');
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
      console.log(error.code);
      console.log(error.message);
      console.log(error.email);
      console.log(error.credential);
    } else {
      alert('¡Has Sido Logueado Exitosamente!');
      htmlCall();
      let user = result.user;
      writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    }
  }
  signInGoogle(provider, cb);
});

//FACEBOOK LogIn button
facebookButton.addEventListener('click', () => {
  let provider;
  const cb = (error, result) => {
    if (error) {
      console.log(error.code);
      console.log(error.message);
      console.log(error.email);
      console.log(error.credential);

    } else {
      let user = result.user;
      writeUserData(user.uid, user.displayName, user.email, user.photoURL);
      alert('¡Has Sido Logueado Exitosamente!');
      htmlCall();
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