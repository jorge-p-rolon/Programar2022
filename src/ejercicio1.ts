let num1: number = Number(prompt("Ingrese un numero:"));
let num2: number = Number(prompt("Ingrese otro numero"));
let actual, suma, auxiliar: number;

actual = num1;
if (num1 > num2) {
  auxiliar = num1;
  num1 = num2;
  num2 = auxiliar;
}
suma = 0;

for (let actual: number = num1; actual <= num2; actual++) {
  suma = suma + actual;
}

console.log("El resultado de la suma es: ", suma); 
