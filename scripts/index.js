window.addEventListener('load', function () {
  let $ = item => document.querySelector(item);
  
  // Esta es la base de datos de nuestros usuarios
  const baseDeDatos = {
    usuarios: [
      {
        id: 1,
        name: "Steve Jobs",
        email: "steve@jobs.com",
        password: "Steve123",
      },
      {
        id: 2,
        name: "Ervin Howell",
        email: "shanna@melissa.tv",
        password: "Ervin345",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        email: "nathan@yesenia.net",
        password: "Floppy39876",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        email: "julianne.oconner@kory.org",
        password: "MysuperPassword345",
      },
    ],
  };

  let nameUser = JSON.parse(localStorage.getItem('usuario'));
  let paginaActual = function(){

    if (nameUser == null && location.href.replace(/(.+\w\/)(.+)/,"/$2") != '/index.html') {
      window.location.href = 'index.html'
    }
  
    if (nameUser != null && location.href.replace(/(.+\w\/)(.+)/,"/$2") != '/bienvenido.html') {
      window.location.href = 'bienvenido.html'
    }
  }

  // ACTIVIDAD

  // Paso a paso:

  // 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
  // han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

  $('#formLogin').addEventListener('submit', validarForLogin);

  function validarForLogin(evento) {
    evento.preventDefault();

    let usuario = baseDeDatos['usuarios'].filter(element => element.email == $('#email-input').value)

    if (usuario.length != 1) {
      $('#error-container').classList.toggle('hidden')
      setTimeout(() => {
        $('#error-container').classList.toggle('hidden')
      }, 2000);
      return;
    }

    if ($('#password-input').value != usuario[0].password) {
      $('#error-container').classList.toggle('hidden')
      setTimeout(() => {
        $('#error-container').classList.toggle('hidden')
      }, 2000);
      return;
    }
    delete usuario[0].password;
    localStorage.setItem('usuario', JSON.stringify(usuario))
    $('#loader').classList.toggle('hidden')
    setTimeout(() => {
      if (true) {
        this.submit();
      }
    }, 1000);
 
  }

  // 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
  // persona y un botón de "Cerrar Sesión".

  if (nameUser != null) {
    if($('#nombreUsuario') != null){
    $('#nombreUsuario').innerHTML = nameUser[0].name
  }}

  // 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
  // recargue la página. Para ello, deberás validar si existe información del usuario al momento en
  // que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.


paginaActual();
  // 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
  // la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
  // la página para mostrar nuevamente el formulario de login.


  let boton = $('#logout');

  if (boton!=null) {
    boton.addEventListener('click', function () {
      localStorage.removeItem('usuario');
      $('#nombreUsuario').innerHTML = ''
      alert('La sesión finalizó')
      location.reload()
      // window.location.href = './index.html'
    });    
  }




  /* 
  TIPS:
    - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
      las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
      encontrarás todas las respuestas que necesitas para completar la actividad.
  
    - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
      recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
      estilos predefinidos para ayudarte a completar la actividad.
  
    - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
      información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
      separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
      usuario.
  
     ¡Manos a la obra!
   */





})