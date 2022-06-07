function contarOvejas(arrayDeOvejas:boolean | undefined | null)[]: number{
  let ovejas: number = 0;

  for(let i:number = 0 ; i < arrayDeOvejas.length ; i++){
    if (arrayDeOvejas[i] === true){
      ovejas= + 1;
    }
  }
  return ovejas;
}

var array1 = [true, true, true, false];

console.log('las ovejas en el array son:',contarOvejas(array1));