//Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
let numeroIf = parseInt(prompt("Po un número:"));

if(numeroIf > 0) {
  console.log("El número es positivo");
} else if(numeroIf < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es igual a cero");
}

//Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3
let numeroWhile = 0;

while(numeroWhile < 3) {
  numeroWhile++;
  console.log(numeroWhile);
}

//Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
let numeroDoWhile = 0;

do {
  numeroDoWhile++;
  console.log(numeroDoWhile);
} while(numeroDoWhile < 3);

//Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
for(let numeroFor = 1; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

//Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año.
let numEstacion = parseInt(prompt('Ingrese un número del 1 al 4 para seleccionar una estación del año, donde: 1: Invierno, 2: Primavera, 3: Verano y 4: Otoño'));

let estacion;

switch (numEstacion) {
  case 1:
    estacion = 'invierno';
    break;
  case 2:
    estacion = 'primavera';
    break;
  case 3:
    estacion = 'verano';
    break;
  case 4:
    estacion = 'otoño';
    break;
  default:
    estacion = null;
    console.log('El valor ingresado no es válido');
}

if (estacion) {
  console.log(`La estación seleccionada es: ${estacion}`);
}
