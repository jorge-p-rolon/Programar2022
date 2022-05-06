let sueld0: number = Number(prompt("Ingrese su sueldo:"));
let total : number = 0;
switch (true){
      
             //condicional para el 20% de aumento
     case (sueld0 >= 0 && sueld0 <= 15000);
      total = sueld0 + sueld0 * 0.2;
      console.log("Su Sueldo con aumento es:",total);
      break;

             //condicional para el 10% de aumento 
     case (sueld0 >= 15001 && sueld0 <= 20000);
      total = sueld0 + sueld0 * 0.1;
        console.log("Su Sueldo con aumento es:",total);
     break;

             //condicional para el 5% de aumento
     case (sueld0 >= 20001 && sueld0 <= 25000);
      total = sueld0 + sueld0 * 0.05;
          console.log("Su Sueldo con aumento es:",total);
     break;

            //por defecto si no cumple las condiciones anteriores el sueldo es el mismo
     default:
           console.log("su sueldo no tuvo aumento y es:",sueld0);
     break;
        
}                 
           
    