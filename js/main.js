
let menuVisible = false;
//Función para ocultar o mostrar el menú//

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}


function seleccionar(){
    //ocultar el menu una vez que  selecciono una opción
    document.getElementById("nav").classList="";
    menuVisible = false;
};


// Función para aplicar colores de dark mode
function darkMode () {
    const darkBTn = document.querySelector('.btn--dark')
    const darkBody = document.querySelector('body')

    darkBTn.addEventListener('click', function (){
        darkBody.classList.toggle('dark')
       
        const moonIcon = document.querySelector('.bx-moon')
        const sunIcon = document.querySelector('.bx-sun')
        if (moonIcon.classList.contains('icon__hidden')) {
            moonIcon.classList.remove('icon__hidden')
            sunIcon.classList.add('icon__hidden')
        }else{
        sunIcon.classList.remove('icon__hidden')
        moonIcon.classList.add('icon__hidden')
        }
    })
    
    }


    console.log(darkMode())





