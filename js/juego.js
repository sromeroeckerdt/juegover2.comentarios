// variables constantes: tenerminan el tamaño del plano (width y height) y el punto donde está el panda (X e Y)
const WIDTH = 700;
const HEIGHT = 450;
const X = 570;
const Y = 175; 

// variable que usa los valores de las constantes X e Y declaradas arriba
let target = {
    x: (X) ,
    y: (Y)
}
// muestra en consola
console.log(target);

// variable, llama por ID a etiqueta del HTML, en este caso "mapa", la imagen del mapa
let $map = document.getElementById('mapa');
//variable, igual que la anterior, llama por ID a etiqueta del HTML, que es "distancia" como el H3, que da pistas de distancia
let $distancia = document.getElementById('distancia');


$map.addEventListener('click', function (e) {
    let distance = getDistance(e, target); 
    let distanceHint = getDistanceHint(distance); 
    $distancia.innerHTML = distanceHint; 
    console.log(distance)
// variable let nombrada $map, con función de escuchar el evento 'click' que realiza el usuario al mismo tiempo que la que mide ese evento con el X e Y de la variable target declara más arriba en el código
// además, hay otro "console.log que muestra en consola"
})
