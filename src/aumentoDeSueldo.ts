let sueldo: number = Number(prompt("Ingrese su sueldo:"));
let total : number = 0;
switch (true){

     case (sueldo >= 0 && sueldo <= 15000);
    total = sueldo + sueldo * 0.2;
      console.log("Su sueldo recibe un aumento del 20% y es:",total);
        break;

    case (sueldo >= 15001 && sueldo <= 20000);
      total = sueldo + sueldo * 0.1;
        console.log("Su sueldo recibe un aumento del 10% y es:",total);
        break;

     case (sueldo >= 20001 && sueldo <= 25000);
        total = sueldo + sueldo * 0.05;
          console.log("Su sueldo recibe un aumento de 5% y es:",total);
        break;

     default:
           console.log("su sueldo no tuvo aumento y es:",sueldo);
     break;
   
}   
