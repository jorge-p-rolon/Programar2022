let numTotal: number = 0;
let positivos: number = 0;
let porcentajePositivos: number = 0;
let num1 = Number(prompt("Ingrese un número:"));

while (num1 !== 0) {
  if (num1 > 0) {
    positivos++; //cada vez que ingreso un numero positivo, se incrementa un numero a la variable(contador)
  }
  numTotal++; //cada vez que ingreso un numero positivo o negativo incrementa  un numero en la variable(contador)
  num1 = Number(prompt("Ingrese un número:"));
}
if (numTotal > 0) {
  porcentajePositivos = (positivos * 100) / numTotal;
  console.log(positivos, "positivos", porcentajePositivos, " % del total.");
}

//Rolon jorge Comision A
