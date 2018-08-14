const logOutButton = document.getElementById('btnLogout');
const userName = document.getElementById('user-name');
const bd = document.getElementById('new-post');

const post = document.getElementById('post') //textarea del post principal

const btnSave = document.getElementById('bttn-new-post');

const posts = document.getElementById('posts');

window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      userName.innerHTML = `Bienvenida ${user.displayName}`
    } else {
      // No user is signed in.
    }
  });
}
logOutButton.addEventListener('click', () => {
  signOff();
});

// function writeNewPost(uid, username, body) {
//   // A post entry.
//   let postData = {
//     author: username,
//     uid: uid,
//     body: body,
//     // title: title,
//     starCount: 0,
//     // authorPic: picture
//   };

//   //obtiene una clave para un nuevo post
//   var newPostKey = firebase.database().ref().child('posts').push().key;

//   // Escribe los datos de los nuevos post's simultaneamente en la lista de post y la lista de user's post
//   var updates = {};

//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return firebase.database().ref().update(updates);
// }

// btnSave.addEventListener('click', () => {
//   // verifico qué usuario se ha logueado
//   let userId = firebase.auth().currentUser.uid;

//   // escribo los post en la base de datos
//   const newPost = writeNewPost(userId, post.Value);

//   //creo el boton de actualizar
//   var btnUpdate = document.createElement("input");
//   btnUpdate.setAttribute("value", "Update");
//   btnUpdate.setAttribute("type", "button");

//   //creo el boton de eliminar
//   var btnDelete = document.createElement("input");
//   btnDelete.setAttribute("value", "Delete");
//   btnDelete.setAttribute("type", "button");

//   var contPost = document.createElement('div');

//   // creo el textarea donde se publican los nuevos post
//   var textPost = document.createElement('textarea')
//   textPost.setAttribute("id", newPost);

//   // le añado el valor del post
//   textPost.innerHTML = post.Value;

//   // le doy funcionalidad al botón 'eliminar'
//   btnDelete.addEventListener('click', () => {
//     // ubico el post que voy a eliminar (Base de datos)
//     firebase.database().ref().child('/user-posts/' + userId + '/' + newPost).remove();
//     firebase.database().ref().child('posts/' + newPost).remove();

//     //falta crear una función que elimine post a post porque actualmente 
//     // está eliminando todos los posts (DOM)
//     while (posts.firstChild) post.removeChild(posts.firstChild);

//     // Para no recargar la pagina
//     window.location.reload();
//   });
//   // boton editar
//   btnUpdate.addEventListener('click', () => {
//     const newUpdate = document.getElementById(newPost);

//     const nuevoPost = {
//       body: newUpdate.value,
//     };

//     var updatesUser = {};
//     var updatesPost = {};

//     updatesUser['/user-posts/' + userId + '/' + newPost] = nuevoPost;
//     updatesPost['/posts/' + newPost ] = nuevoPost;

//     firebase.database().ref().update(updatesUser);
//     firebase.database().ref().update(updatesPost);
    
//   });

//   contPost.appendChild(textPost);
//   contPost.appendChild(btnUpdate );
//   contPost.appendChild(btnDelete);
//   posts.appendChild(contPost);

// })