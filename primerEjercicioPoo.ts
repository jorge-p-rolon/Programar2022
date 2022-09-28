class Auto{
  marca:string;
  modelo:string;
  patente:string;
  tamañoLlantas:number;
  

  constructor(pMarca:string , pPatente:string , pModelo:string , ptamañoLlantas){
      this.marca = pMarca;
      this.patente = pPatente;
      this.modelo = pModelo;
      this.tamañoLlantas = ptamañoLlantas;
  }


  //algunos metodos

  obtenerMarca():string{             
      return this.marca;             
  }   

  obtenerModelo():string{
      return this.modelo;
  }       

  obtenerPatente():string{           
      return this.patente;           
  }

  obtenerTamañoLlantas():number{
      return this.tamañoLlantas;
  }

      
}

let autoDeBraian = new Auto("FIAT","AAA123","UNO",15);  
let autoDeJorge = new Auto("HONDA","BBB123","CIVIC",16);    // instancia
let autoDeRocio = new Auto("TOYOTA","CCC123","COROLLA",17);

//puede haber cientos de instancias


//ejecucución

let marcaAutoBraian :string = autoDeBraian.obtenerMarca();
let marcaAutoJorge :string = autoDeJorge.obtenerMarca();
let marcaAutoRocio:string = autoDeRocio.obtenerMarca();

let modeloAutoBraian:string = autoDeBraian.obtenerModelo();
let modeloAutoJorge:string = autoDeJorge.obtenerModelo();
let modeloAutoDeRocio:string = autoDeRocio.obtenerModelo();

console.log(marcaAutoBraian,modeloAutoBraian);
console.log(marcaAutoJorge,modeloAutoJorge);
console.log(marcaAutoRocio,modeloAutoDeRocio);