// validacion de formulario
let miFormulario = document.getElementsByClassName("formulario");
miFormulario.addEventListener ("submit", validarFormulario);
 export function validarFormulario(e){
    e.preventDefault();
    alert ("Su formulario ha sido enviado con exito!")
}

// guardado de usuarios para el descuento
const users = [];
class user {
    constructor (nombre, mail, telefono){
        this.nombre =  nombre;
        this.mail = mail;
        this.telefono = telefono;
    }
}



