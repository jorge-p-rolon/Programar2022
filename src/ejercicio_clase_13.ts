let continuar: number = 1;
let numero: number;
let maximo: number = -99999;

while (continuar !== 0) {
  numero = Number(prompt("Ingrese numero:"));
  continuar = Number(prompt("continuar?"));
  if (numero > maximo) {
    maximo = numero;
  }
}
console.log(maximo);
