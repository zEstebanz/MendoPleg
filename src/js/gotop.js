window.onscroll = function() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 300) { // Cuando sea mayor a 100 se muestre
        document.querySelector('.go-top-container').classList.add('show');
    } else { // Cuando sea menor a 100, remueve esa clase (es decir el boton)
        document.querySelector('.go-top-container').classList.remove('show');
    }
}