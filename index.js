document.addEventListener('DOMContentLoaded', function() {
    const elementosDuvidas = document.querySelectorAll('.duvida');

    elementosDuvidas.forEach(function (duvida) {
        duvida.addEventListener('click', function(){
            duvida.classList.toggle('ativa'); 
        })
    });
});