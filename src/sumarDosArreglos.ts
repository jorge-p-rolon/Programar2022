//Ejercicio Suma de Arrays con Parametros
//Rolón Jorge
//Comisión A

function llenarVector(palabra: string): number {
  for (let indice: number = 0; indice < 6; indice++) {
    palabra[indice] = Number(prompt("Ingrese número: "));
  }
}

function sumarVector(palabra1: string, palabra2: string): number {
  for (let indice: number = 0; indice < 6; indice++) {
    resultSuma[indice] = palabra1[indice] + palabra2[indice];
  }
}

function mostrarSuma() {
  console.log("Array1: ", arreglo1);
  console.log("Array2: ", arreglo2);
  console.log("Suma:", resultSuma);
}

let arreglo1: number[] = new Array(6);
let arreglo2: number[] = new Array(6);
let resultSuma: number[] = new Array(6);

llenarVector(arreglo1);
llenarVector(arreglo2);
sumarVector(arreglo1, arreglo2);
mostrarSuma();
