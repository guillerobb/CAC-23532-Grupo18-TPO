function enviarFormulario() {

    let name = document.getElementById("name").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let nationality = document.getElementById("nationality").value
    let age = parseInt(document.getElementById("age").value)
    let reason = document.getElementById("reason").value
    let textMensaje = document.getElementById("textMensaje").value

    if (name === '' || lastName === '' || email === '' || nationality === '' || age === 0 || textMensaje === '') {
        alert('Por favor, complete todos los campos.');
        //console.log('1.quitar show-modal');
        return;
    } else {
        
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(email)) {
            // No hacemos nada por ahora.
        } else {
            alert('Por favor, Ingrese un email válido.');
            return;
        }

        if (Number.isInteger(age)) {
            // Todo OK.
        } else {
            alert('Por favor, en Edad ingrese un nº entero.');
            return;
        }

        let open = document.getElementById("open")
        open.addEventListener('click', () => {
            console.log('agregar show-modal');
            let modal = document.getElementById("mensaje-enviado-modal")
            modal.classList.add('show-modal');
        })
    }

    let close = document.getElementById("close")
    close.addEventListener('click', () => {
        console.log('2.quitar show-modal');
        let modal = document.getElementById("mensaje-enviado-modal")
        modal.classList.remove('show-modal');
        document.getElementById("formulario").reset();
    })
}
