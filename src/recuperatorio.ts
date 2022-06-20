//ROLON JORGE COMISION A 
//RECUPERATORIO EVALUACION

//Funcion cargar  productos,precio unitario,cantidad de articulos
function compra(): void {
  for (let i: number = 0  ; i < cantidadProductos ; i++) {
    productos[i] = prompt("Ingrese nombre del producto: ");
    precioUnitario[i] = Number(prompt("Ingrese el precio de " + productos[i] + ":"));
    while (precioUnitario[i] <= 0) {
      precioUnitario[i] = Number(prompt("Error ingrese el precio de " + productos[i] + " nuevamente!:"));
    }
    cantidadCadaArticulo[i] = Number(prompt("Ingrese la cantidad de " + productos[i] + ":"));
    while (cantidadCadaArticulo[i] <= 0) {
      cantidadCadaArticulo[i] = Number(prompt("Error ingrese la cantidad de " + productos[i] + " nuevamente!:"));
    }
  }
}

//Funcion detalle de la compra
function detalleCompra(): void {
  let precioFinalDelProducto: number = 0;
  for (let i: number = 0; i < cantidadProductos; i++) {
    precioFinalDelProducto =
      cantidadCadaArticulo[i] * precioUnitario[i];
    console.log(productos[i] + ": " + cantidadCadaArticulo[i] + " unidad * $" + precioUnitario[i] + " = $" + precioFinalDelProducto);
    precioFinalCompra = precioFinalDelProducto + precioFinalCompra;
  }
  console.log("El total de la compra es: $" + precioFinalCompra);
}

//Funcion sorteo
function sorteo(): void {
  if (precioFinalCompra > 3000) {
    console.log("Con la compra de $" + precioFinalCompra + " participa por un 0Km");
  } else if (precioFinalCompra > 2000) {
    console.log("Con la compra de $" + precioFinalCompra + " participa por una moto 0Km");
  } else if (precioFinalCompra > 1000) {
    console.log("Con la compra de $" + precioFinalCompra + " participa por un tv led");
  } else {
    console.log("Con la compra de $" + precioFinalCompra + " lamentabablente no participa del sorteo");
  }
}

//declaracion de variables y arrays
let cantidadProductos: number = Number(prompt("Ingrese cantidad de productos a llevar: "));
let productos: string[] = new Array(cantidadProductos);
let precioUnitario: number[] = new Array(cantidadProductos);
let cantidadCadaArticulo: number[] = new Array(cantidadProductos);
let precioFinalCompra: number = 0;

//programa
compra();
detalleCompra();
sorteo();
