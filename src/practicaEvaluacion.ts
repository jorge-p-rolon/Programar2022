//console.log('hello world'+' '+'pepe');
//ejercicio repaso viernes 3 de junio
/*
function azar(): number {
  return Math.floor(Math.random() * 100);
}

let arreglo : number = new Array(10); //crear arreglo
let edadAlumnos : number[] = new Array(5,7,4,3,5,6,4,5,4,7);

let suma:number = 0;
let promedio:number;

for(let indice:number = 0; indice < edadAlumnos.length ; indice++){
  suma = suma  + edadAlumnos[indice];
}

promedio = suma / edadAlumnos.length;

console.log(promedio);

............................................................
*/
/*
function obtenerPromedio(): number {
  let suma: number = 0;
  let promedio: number;
  for (let indice: number = 0; indice < edadAlumnos.length; indice++) {
    suma = suma + edadAlumnos[indice];
  }
  promedio = suma / edadAlumnos.length;
  return promedio;
}

let edadAlumnos: number[] = new Array(5, 7, 4, 3, 5, 6, 4, 5, 4, 7);


console.log(obtenerPromedio());
//video 1:07
*/

let dimencion: number = 10;
let edadAlumnos: number[] = new Array(dimencion);

function obtenerPromedio(): number {
  let suma: number = 0;
  let promedio: number;
  for (let indice: number = 0; indice < edadAlumnos.length; indice++) {
    suma = suma + edadAlumnos[indice];
  }
  promedio = suma / edadAlumnos.length;
  return promedio;
}

function aleatorio(min, max): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

//console.log(Math.floor(Math.random() * (7 -3) ) + 3) ;
//console.log(Math.floor(Math.random() * (max - min) ) + min)

//console.log(aleatorio(3,7));

function cargarDatosAleatorio() {
  for (let indice: number = 0; indice < edadAlumnos.length; indice++) {
    edadAlumnos[indice] = aleatorio(3, 7);
  }
}

cargarDatosAleatorio();
let promedioEdades: number = obtenerPromedio();

console.log(promedioEdades);
