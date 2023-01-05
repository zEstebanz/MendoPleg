window.onscroll = function() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement) { // Cuando sea mayor a 100 se muestre
        document.querySelector('.button-WhatsApp-container').classList.add('show');
    } else { // Cuando sea menor a 100, remueve esa clase (es decir el boton)
        document.querySelector('.button-WhatsApp-container').classList.remove('show');
    }
}