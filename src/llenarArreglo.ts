/*let numeros: number[] = new Array(5);

for (let indice: number = 0; indice < 5; indice++) {
  numeros[indice] = Number(prompt("Ingrese número:"));
}

for (let indice: number = 0; indice < 5; indice++) {
  console.log(numeros[indice]);
}
*/

//MISMO EJERCICIO MODULARIZADO
function ingresarNumero() {
  for (let indice: number = 0; indice < 5; indice++) {
    numeros[indice] = Number(prompt("Ingrese número:"));
  }
}

function mostrarNumeros() {
  for (let indice: number = 0; indice < 5; indice++) {
    console.log(numeros[indice]);
  }
}

let numeros: number[] = new Array(5);

ingresarNumero();
mostrarNumeros();
