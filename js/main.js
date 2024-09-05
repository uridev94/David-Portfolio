
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
        const sunIcon = document.querySelector('.bxs-sun')
        if (moonIcon.classList.contains('icon__hidden')) {
            moonIcon.classList.remove('icon__hidden')
            sunIcon.classList.add('icon__hidden')
        }else{
        sunIcon.classList.remove('icon__hidden')
        moonIcon.classList.add('icon__hidden')
        }
    })
    
    }


function idioma () {
    const englishButton = document.querySelector('.en')
    const spanishButton = document.querySelector('.es')

    spanishButton.addEventListener('click', function(){
        
        if (location.href = '/index.html') {
            console.log('Estoy en español')
        } else {
            console.log('Estoy en ingles')
        }
    })
}





