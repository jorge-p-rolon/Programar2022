//ejercicio cantidad de divisores
//ROLON jORGE

function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

function cantidadDeDivisores(num: number): Number {
  let multiplo: number = 0;
  for (let cant: number = 0; cant <= num; cant++) {
    if (esMultiplo(num, cant)) {
      multiplo++;
    }
  }
  return multiplo;
}

let numero: number = Number(prompt("ingrese numero:  "));
console.log(
  "La cantidad de divisores de " + numero + " es : ",
  cantidadDeDivisores(numero)
);
