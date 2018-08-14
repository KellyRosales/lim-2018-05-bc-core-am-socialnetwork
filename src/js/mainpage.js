const logOutButton = document.getElementById('btnLogout');

$(document).ready(() => {
  $buttonFood = $('#button-food');
  $containerNewPost = $('#container-new-post');
  $comment = $('#comment');

  firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
      var codeUser = user.uid;
      var nameUser = user.displayName;
      var photoUser = user.photoURL;
      var like = 0

      $buttonFood.on('click', function (event) {
        if ($comment.val() && $comment.val() !== 0) {
          var publication = $comment.val();
          var hour = moment().format('LT');

          firebase.database().ref('bd').child('publication').push({
            publication: publication,
            hour: hour,
            code: codeUser,
            name: nameUser,
            photo: photoUser,
            like: like
          });
        }
      });

      showPublication();

      function showPublication() {
        firebase.database().ref('bd').on('value',(element) => {

            var data = element.child('publication').val();
            var uid = Object.keys(data)
            var arrNewData = []

            uid.map(elem => {
              data[elem].uid = elem
              arrNewData.push(data[elem])
            })

            $containerNewPost.html('');
            arrNewData.map(elem => {
              $containerNewPost.prepend(`
                 <div class="col-xs-12 container-background container-food">
                    <div id="container-icon-user" class="col-xs-6 col-md-1 col-sm-3 col-lg-1 container-food ">
                      <img class="profile img-responsive img-circle user-background" src='${elem.photo}'>
                    </div>
                    <div id="container-publication" class="col-xs-10 ">
                      <p class="text name" color=yellow >${elem.name}</p>
            
                      <div class="container-publication-day" data-newPublication=${elem.code}>
                        <p id="publication-day" class="text publication">${elem.publication}</p>
                      </div>
                      <p class="delete container-edit edit" data-uid=${elem.uid} data-edit=${elem.code}>Editar</p>
                      <p class="text hour">${elem.hour}</p>
                      <img class="img-responsive like container-like" src='../../img/muro/like.svg' data-uid=${elem.uid} data-like=${elem.like}>
                      <p>${elem.like}</p>
                      
                    </div>
                    <img class="img-responsive like delete container-delete" src='../../img/muro/delete.svg' data-uid=${elem.uid} data-delete=${elem.code}>
                </div>`);
            });
            //Perfil
            // $('#private').on('click', function(){
            //   // console.log('hola');
            //   window.location.assign('../components/perfil.html');

            //   var uidData = $(this).data('uid');

            // })

            // cuenta likes
            $('.container-like').on('click', function(e) {
              e.preventDefault();
              var uidData = $(this).data('uid')
              var likeData = $(this).data('like')

              uid.map(elem => {
                if (elem === uidData) {
                  var sum = parseInt(likeData);
                  sum = sum + 1;
                  firebase.database().ref('bd').child('publication').child(elem).child('like').set(sum);
                }
              })
            })

            // eliminar post
            $('.container-delete').on('click', function (e) {
              e.preventDefault();
              var uidData = $(this).data('uid')
              var uidUser = $(this).data('delete')
              var textConfirm = confirm("¿seguro que quiere eliminar el post?")
              if (uidUser === codeUser) {
                uid.map(elem => {
                  if (elem === uidData &&  textConfirm == true ) {
                    firebase.database().ref('bd').child('publication').child(elem).remove();
                  }
                  else{
                    //se queda igual
                  }
                })
              }
            })

            $('.container-delete').each(function () {
              var uidUser = $(this).attr('data-delete');
              if (codeUser === uidUser) {
                $(this).removeClass('delete')
              }
            });

            // editar post
            $('.container-edit').each(function () {
              var uidUser = $(this).attr('data-edit');
              if (codeUser === uidUser) {
                $(this).removeClass('delete')
              }
            });

            $('.container-edit').on('click', function () {
              var uidData = $(this).data('uid')
              var uidUser = $(this).data('edit')
              if (uidUser === codeUser) {
                uid.map(elem => {
                  if (elem === uidData) {
                    $(this).prev().html(`<div><input type="text" class="input-edit" placeholder="Actualiza"/><button class="button-editar">Guardar</button></div>`)
                    $(this).prev().find('.button-editar').on('click', function () {
                      var newPublication = $(this).prev().val();
                      firebase.database().ref('bd').child('publication').child(elem).child('publication').set(newPublication);
                      $(this).parent().html(`<p id="publication-day" class="text publication">${newPublication}</p>`)
                    })
                  }
                })
              }
            })
          });
      }
    } else {
      // No user is signed in.
    }
  }); 
});

// LogOut button 
logOutButton.addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      window.location.assign('../index.html');
    }).catch((error) => {
      // console.log('error al cerrar sesión');
    });
  });
