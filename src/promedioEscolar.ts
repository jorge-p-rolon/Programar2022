/*Actividad (Promedio Escolar)
Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información 

Rolón jorge  comision A */

function ingresarNotas(num: number): number {
  for (let i: number = 0; i < num; i++) {
    alumnos[i] = prompt("Ingrese el nombre del alumno:");
    nota1[i] = Number(prompt("Ingrese nota del primer trimestre:"));
    nota2[i] = Number(prompt("Ingrese nota del segundo trimestre:"));
    nota3[i] = Number(prompt("Ingrese nota del tercer trimestre:"));
  }
}

function mostrarPromedio(): void {
  for (let i: number = 0; i < cantidad; i++) {
    let resultado: number = 0;
    resultado = (nota1[i] + nota2[i] + nota3[i]) / 3;
    console.log("El promedio final de", alumnos[i], "es:", resultado);
  }
}

let cantidad: number = Number(prompt("Ingrese la cantidad de alumnos:"));
let alumnos: number = new Array(cantidad);
let nota1: number = new Array(3);
let nota2: number = new Array(3);
let nota3: number = new Array(3);

ingresarNotas(cantidad);
mostrarPromedio();
