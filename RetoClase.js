var nombre = document.getElementById("Nombre");
var botonEnviar = document.getElementById("botonEnviar");
var checkBox = document.getElementById("cajaComplemento");

checkBox.hidden = true;
botonEnviar.disabled = true; 

function QuitarFoco(){
    alert(nombre.value.toUpperCase());
}

function BotonApellido() {
    let apellido = document.getElementById("Apellido");
    if (apellido.value.trim() !== '') {
        botonEnviar.disabled = false;
    }
}

function ActivarCajaComplemento() {
    checkBox.hidden = false;
}

function DesactivarCajaComplemento() {
    checkBox.hidden = true;
}

function validarCorreo() {
    let email = document.getElementById("Email");
    if (!email.value.includes("@")) {
        alert("El correo no es válido. Debe incluir un '@'. ");
    }
}

function validarContrasena() {
    let passUno = document.getElementById("PasswordUno");
    let passDos = document.getElementById("PasswordDos");
    
    if (passUno.value === passDos.value) {
        passUno.classList.add("bueno");
        passDos.classList.add("bueno");
        passUno.classList.remove("malo");
        passDos.classList.remove("malo");
    } else {
        passUno.classList.add("malo");
        passDos.classList.add("malo");
        passUno.classList.remove("bueno");
        passDos.classList.remove("bueno");
    }
}