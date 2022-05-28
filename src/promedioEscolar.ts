//Rolón jorge comisión A

//funcion ingresar alumnos e ingresar notas
function ingresarNotas(num: number): number {
  for (let i: number = 0; i < num; i++) {
    alumnos[i] = prompt("Ingrese el nombre del alumno:");
    nota1[i] = Number(prompt("Ingrese nota del primer trimestre:"));
    nota2[i] = Number(prompt("Ingrese nota del segundo trimestre:"));
    nota3[i] = Number(prompt("Ingrese nota del tercer trimestre:"));
  }
}

//funcion cargar promedio
function cargarPromedio():number {
  for (let i: number = 0 ; i < cantidad ; i++) {
     promedio[i] = (nota1[i] + nota2[i] + nota3[i]) / 3;   
  }
}

//funcion mostrar los nombres y promedios de todos los estudiantes
function promedioTotales(): number {
  for (let i: number = 0; i < cantidad; i++) {
    let resultado: number = 0;
    resultado = (nota1[i] + nota2[i] + nota3[i]) / 3;
    console.log("El promedio final de", alumnos[i], "es:", resultado);
  }
}


//funcion mostrar promedio de cierto alumno
function mostrarPromedio():number{
  let alumno: string = prompt("Ingrese el Nombre del estudiante del cual desee saber su promedio:");

  for(let i :number= 0 ; i < cantidad ; i++){
    if(alumnos[i] === alumno){
      console.log("el promedio final de",alumnos[i]"es:",promedio[i]);
    }
  } 
}

let cantidad: number = Number(prompt("Ingrese la cantidad de alumnos:"));
let alumnos: number = new Array(cantidad);
let nota1 : number = new Array(3);
let nota2 : number = new Array(3);
let nota3 : number = new Array(3);
let promedio :number = new Array(cantidad);
let mostrarPromedioTotales: number = new Array(cantidad);

//se puede agregar la funcion promediosotales() para ver todos 
//se agregar la funcion mostrarPromedio() para ver uno en especial
ingresarNotas(cantidad);
cargarPromedio();
promedioTotales();
mostrarPromedio();



