//SignUp variables
const emailSignUp = document.getElementById('email-signup');
const registerButton = document.getElementById('register');

//SignIn variables
const googleButton = document.getElementById('google-button');
const facebookButton = document.getElementById('facebook-button');
const emailSignIn = document.getElementById('email-signin');
const passwordSignIn = document.getElementById('password-signin');
const passwordSignUp = document.getElementById('password-signup');
const signInButton = document.getElementById('sign-in-button');


//Function to call the other HTML where's the main page of the app
const htmlCall = () => {
  window.location.assign('../src/components/mainpage.html');
};

//EMAIL register
registerButton.addEventListener('click', () => {

  registerEmail=(emailSignUp)=>{
    emailSignUp.value ="Email válido"
  }

  registerPassword=(passwordSignUp)=>{
    passwordSignUp.value="contraseña válida"
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

  loginEmail=(emailSignIn)=>{
    emailSignIn.value ="Email válido"
  }

  loginPassword=(passwordSignIn)=>{
    passwordSignIn.value= "Password válido"
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
