//Rolon jorge

     
//1
function ventaMaxima(nombre):number{
  let maximo:number = 0;
  
  for (let i :number = 0 ; i < nombre.length ; i++){
    if (nombre[i] > maximo){
    maximo = nombre[i];
    }
  }
  return maximo;
}
//2
function ventaMinima(nombre):number{
  let minimo:number = 99999;
  
  for (let i :number = 0 ; i < nombre.length ; i++){
    if (nombre[i] < minimo){
    minimo = nombre[i];
    }
  }
  return minimo;

}

//3
function PromedioSemanalDeVentas(nombre):number{
  
  for (let i :number = 0 ; i < nombre.length ; i++){
    console.log('promedio semanana',i+1":",nombre[i]);
  }
  

}

//4
function promedioMensualVentasTodos(nom1,nom2,nom3,nom4,nom5):number{

/*
  let mes1:number = 0;
  let mes2:number = 0;
  let mes3:number = 0;


  let promedio1:number =  0;
  let promedio2:number =  0;
  let promedio2:number =  0;


  for (let i :number = 0 ; i < 3 ; i++){
    mes1= mes1+nom1[i]
  }

  for (let i :number = 4 ; i < 8 ; i++){
    mes2= mes2+nom1[i]
  }

  for (let i :number = 9 ; i < 13 ; i++){
    mes3= mes3+nom1[i]
  }
   

  return 
  console.log('El promedio mensual mensual de:',nom1,'es:',promedio1,promedio2,promedio3),
  console.log('El promedio mensual mensual de:',nom2,'es:',promedio1,promedio2,promedio3),
  console.log('El promedio mensual mensual de:',nom3,'es:',promedio1,promedio2,promedio3),
  console.log('El promedio mensual mensual de:',nom4,'es:',promedio1,promedio2,promedio3),
  console.log('El promedio mensual mensual de:',nom5,'es:',promedio1,promedio2,promedio3);
  */
}

//5
function montoVendidoMejorVendedorDeCadaSemana():number{

}

//6
function sumaDeMontosVendidoMejorVendedorCadaMes():number{

}

//7
function sumaDeMontosVendidoPeorVendedorCadaMes():number{

}

//8
function SumaDeMontosVendidosPeorVendedorDelTrimestre():number{

}

let Camila : number[] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let Franco : number[] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let Sofia : number[] = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let Matias : number[] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let Agustina : number[] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];

console.log("su venta maxima es:",(ventaMaxima(nombre));
console.log("su venta minima es:",(ventaMinima(nombre));
PromedioSemanalDeVentas(nombre);
promedioMensualVentasTodos(nom1,nom2,nom3,nom4,nom5);