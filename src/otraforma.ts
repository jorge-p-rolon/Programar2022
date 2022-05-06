let num1: number = Number(prompt("Ingrese un numero:"));
let num2: number = Number(prompt("Ingrese otro numero"));
let resultado: number = 0;

for (let indice: number = num1; indice <= num2; indice++) {
  resultado = resultado + indice;
  console.log(resultado);
}
