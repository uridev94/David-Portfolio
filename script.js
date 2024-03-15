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
}

//Función con variable de scope global que aplica a las animaciones de las habilidades, detectando el scroll para desarrollar la animación de las barras.

function efectoHabilidades(){
    var skills = document.getElementById("skills")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[1].classList.add("javascript");
    }
}
//Método para detectar el scrolling cuando pase por la sección de habilidades

window.onscroll = function(){
    efectoHabilidades();
}

