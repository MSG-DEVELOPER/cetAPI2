//DECLARAMOS VARIABLES AL PRINCIPIO DE CODIGO

const imagen = document.getElementById("imagen");
const selector = document.getElementById("selector");
const pantalla = document.getElementById("pantalla");
const tempertaura = document.getElementById("temperatura");
const presion = document.getElementById("presion");

let lat = 0;
let lon = 0;
let apiid = "f8f9fc72c29078e5fd330dc83c7ee6ca";
let API = "";

// FIN DE BLOQUE DE LINEA1

//EL USUARIO ELIJE UNA OPCION DEL DESPLEGABLE Y ENTRA EN LA FUNCION, ASIGNANDO LAT Y LON PARA INSERTARLO EN LA API Y HACER LA LLAMADA
function verTodo() {
  let opcion = selector.value;

  if (opcion == "zocca") {
    lat = 44.34;
    lon = 10.99;
    pantalla.style.backgroundImage = " url(img/zocca2.jpg)";

    iniciar();
  } else if (opcion == "agadez") {
    lat = 20;
    lon = 10.99;
    pantalla.style.backgroundImage = " url(img/agadez2.jpg)";

    iniciar();
  } else if (opcion == "a") {
  
  
    lat = 44.34;
    lon = 20;
    pantalla.style.backgroundImage = " url(img/serbia.jpg)";

    iniciar();
  }
}
//FIN DEL BLOQUE LINEA


//ACEMOS PETICION CON LOS DATOS ESCOGIDOS
function iniciar() {
  API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiid}`;

  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      tempertaura.innerHTML = "Temp:  " + data.main.temp;
      presion.innerHTML = "Press:  " + data.main.pressure;
      wind.innerHTML = "Wind:  " + data.wind.speed + " m/s";
    });
}
