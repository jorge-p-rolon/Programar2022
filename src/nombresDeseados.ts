
let longitud : number = Number(prompt("Longitud del arreglo"));
let arregloNombres : string[] = new Array(longitud);


for (let indice: number = 0; indice < longitud ; indice++) {
  arregloNombres[indice] = prompt("Ingrese nombre: "));
}

for (let indice: number = 0; indice < longitud ; indice++) {
  console.log(arregloNombres[indice]);
}

