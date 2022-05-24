//Ejercicio Suma de Arrays con Parametros
//Rolón Jorge
//Comisión A

function llenarVector(nombre1: string, nombre2: string): number {
  for (let indice: number = 0; indice < 6; indice++) {
    nombre1[indice] = Number(
      prompt("Ingrese los 6 números del primer Array: ")
    );
  }
  for (let indice: number = 0; indice < 6; indice++) {
    nombre2[indice] = Number(
      prompt("Ingrese los 6 números del segundo Array: ")
    );
  }
}

function sumarVector(nombre1: string, nombre2: string): number {
  for (let indice: number = 0; indice < 6; indice++) {
    resultSuma[indice] = nombre1[indice] + nombre2[indice];
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

llenarVector(arreglo1, arreglo2);
sumarVector(arreglo1, arreglo2);
mostrarSuma();
