window.onload = function() { //esperamos a que carge la página antes de empezar
    var formulario = document.getElementById('formulario_suscripcion'); //busco el id del formulario de la página index.html
    
    formulario.onsubmit = function() { //cuando le aprenten al botón de suscribirse:
        event.preventDefault(); //para q no se envie antes de tiempo
        let nombre = document.getElementById('nombre').value; //así se lee el valor que han puesto del campo en concreto
        let correo = document.getElementById('correo').value;
        let politica = document.getElementById('politica').checked; //aqui si apretaron al check de la poltica!
        let mensaje = document.getElementById('mensaje');

        if (nombre !== "" && correo !== "" && politica) { 
            mensaje.textContent = "¡Muchas gracias por suscribirte a nuestro Blog!";
            mensaje.className = "success"; //para css
            mensaje.style.display = "block";
        } 
    };
};