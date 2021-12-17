const array = [1, 100, 200, 2, 15, 23, 233, 5, 555, 854, 999, 12];

// coges el 1er valor
// ese valor es tu valor maximo por el momento
let numeroMayor = array[0];
// comparas ese valor con el siguiente valor y DECIDES si te quedas con esa o con la nueva
for (let i = 1; i < array.length; i++) {
  if (numeroMayor < array[i]) {
    numeroMayor = array[i];
  }
}
// repetir el paso anterior hasta que haya recorrido todo el grupo de valores
// result
console.log(numeroMayor);

// ejercicio2
const string =
  "tratemos con una palabra grande a ver su longitud: paralelepípedo";

const split = string.split(" ");

let biggestWord = split[0];
// comparas ese valor con el siguiente valor y DECIDES si te quedas con esa o con la nueva
for (let i = 1; i < split.length; i++) {
  if (biggestWord.length < split[i].length) {
    biggestWord.length = split[i];
  }
}

console.log(
  "la palabra más larga es ${biggestWord} y su posición es ${biggestWord.length}"
);

// 3er ejercicio
const size = 3;
const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const arregloSolucion = [];
let miniArreglo = [];
let i = 0;

while (i < letras.length) {
  if (miniArreglo.length < size) {
    miniArreglo.push(letras[i]);
    i++;
  }
  if (i >= letras.length || miniArreglo.length == size) {
    arregloSolucion.push(miniArreglo);
    miniArreglo = [];
  }
}

console.log(arregloSolucion);
