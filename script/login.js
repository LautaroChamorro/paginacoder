const usuarios = [];
class user {
    constructor (nombre, apellido, mensaje){
        this.nombre =  nombre;
        this.apellido = apellido;
        this.mensaje = mensaje;
    }
}
// validacion de formulario
let miFormulario = document.getElementsByClassName("formulario");
miFormulario.addEventListener ("submit", validarFormulario);
function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target;
    alert ("Su formulario ha sido enviado con exito!")
}




function agarrarDatosDeUsuario(){

}
