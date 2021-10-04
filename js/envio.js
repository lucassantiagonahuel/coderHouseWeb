//Instanciamos las entradas del formulario de contacto en las variables correspondientes.

let nombre = document.getElementById('nombre')
let telefono = document.getElementById('telefono')
let email = document.getElementById('email')
let mensaje = document.getElementById('mensaje')

//Guardamos el formulario en una constante

const form  = document.getElementById('form')

//Creamos un evento de escucha del formulario

form.addEventListener('submit', (e) => {
    //Se detiende el evento de recarga del navegador
    e.preventDefault()

    //Se invoca la funcion sender que se declara abajo
    sender(nombre.value,telefono.value,email.value,mensaje.value)

    //Se Blanquea el formulario
    form.reset()
})

//Se declara la funcion para enviar correos

function sender(nombre, telefono, email, mensaje) {
    Email.send({
        SecureToken: '0f55f559-8f8d-4816-94f5-a02efad5d436', //Para configurar los permisos de seguridad SSL
        To: 'lucassantiagonahuel@gmail.com', //Donde va a llegar el mail
        From: 'lucassantiagonahuel@gmail.com', //Desde donde se va a enviar. Tiene que ser el mismo que genero el token de seguridad
        Subject: `${nombre} envio un mensaje`,
        Body: `
                <p>Nombre: <b>${nombre}</b></p>
                <p>Telefono: <b>${telefono}</b></p>
                <p>Email: <b>${email}</b></p>
                <p>Mensaje: <b>${mensaje}</b></p>
                `
    }).then(
        message => swal("Correo enviado exitosamente", "En breve nos pondremos en contacto", "success")
        //Se utiliza la libreria sweetAlert para generar ventanas emergentes tipo popup, se cargo el cdn en el index para mostrar funcionamiento
        //mas info en https://sweetalert.js.org/
    )
    .catch(error => swal("Error al enviar el mensaje", "disculpa las molestias", "error"))
    //en caso de error sale otro popup informando esto
}
