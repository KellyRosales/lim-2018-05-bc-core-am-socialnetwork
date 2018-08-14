//Creating a function to show the users in fireBase

window.writeUserData = (userId, name, email, imageURL, cb) => {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageURL,
    }).then(()=> cb())
}

window.signUp = (email, password, cb) => {
    firebase.auth().createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        })
}

window.signIn = (email, password, cb) => {
    firebase.auth().signInWithEmailAndPassword(emailSignIn.value, passwordSignIn.value)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        });
}

window.signInGoogle = (provider, cb) => {
    provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        })
};

window.signInFacebook = (provider, cb) => {
    provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        })
};
