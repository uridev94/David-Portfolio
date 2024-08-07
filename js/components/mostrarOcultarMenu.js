function mostrarOcultarMenu(){
    const nav = document.getElementById('nav')
    const navMenu = document.querySelector('nav-responsive')

    nav.addEventListener('click', function(e){
        if(e.target.closest('nav--responsive'))
    })
}

