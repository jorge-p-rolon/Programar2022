let num1: number = Number(prompt("Ingrese un numero: "));
let num2: number = Number(prompt("Ingrese otro numero: "));
let actual, suma, aux: number; //Se agrega la variable aux
actual = num1;
suma = 0;

if (num1 > num2) {
  aux = num1; //si los nuumeros estan alrevéz,
  num1 = num2; //intercambio el primer numero
  num2 = aux; //con el segundo
}

for (let actual: number = num1; actual <= num2; actual++) {
  suma = suma + actual;
}
console.log("El resultado de la suma es: ", suma);

//en este ejercicio se usa el metodo de la burbuja
