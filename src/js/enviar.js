const btnEnvio = document.getElementById('enviarCorreo');
btnEnvio.addEventListener('click', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    window.location.href = `mailto:estebanoller73@gmail.com?subject=Consulta desde la web&body=Nombre%3A${name}%0ATeléfono%3A${phone}%0AMensaje%3A${message}`;
})