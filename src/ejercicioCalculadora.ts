function dibujarLinea() {
  let linea: string = "-";
  for (let cont : number = 0; cont <= 6; cont++) {
    linea = linea + linea;
  }
  console.log(linea);
}

let num1: number = Number(prompt("Ingrese el primer numero: "));
let num2: number = Number(prompt("Ingrese el segundo numero: "));
let operacion: number = Number(prompt("Presiona 1 para sumar ,2 para restar, 3 para dividir, 4 para multiplicar ");




switch (operacion) {
  case 1:
    dibujarLinea();
    console.log(
      "El resultado de la suma de " + num1 + " y " + num2 + " es : ",
      num1 + num2
    );
    dibujarLinea();
    break;

  case 2:
    dibujarLinea();
    console.log(
      "El resultado de la resta de " + num1 + " y " + num2 + " es : ",
      num1 - num2
    );
    dibujarLinea();
    break;

  case 3:
    dibujarLinea();
    console.log(
      "El resultado de la divicion de " + num1 + " y " + num2 + " es : ",
      num1 / num2
    );
    dibujarLinea();
    break;

  case 4:
    dibujarLinea();
    console.log(
      "El resultado de la multiplicacion de " + num1 + " y " + num2 + " es : ",
      num1 * num2
    );
    dibujarLinea();
    break;

  default:
    dibujarLinea();
    console.log("Opcion incorrecta!");
    dibujarLinea();
}      
   