var Auto = /** @class */ (function () {
  function Auto(pMarca, pPatente, pModelo, ptamañoLlantas) {
    this.marca = pMarca;
    this.patente = pPatente;
    this.modelo = pModelo;
    this.tamañoLlantas = ptamañoLlantas;
  }
  //algunos metodos
  Auto.prototype.obtenerMarca = function () {
    return this.marca;
  };
  Auto.prototype.obtenerModelo = function () {
    return this.modelo;
  };
  Auto.prototype.obtenerPatente = function () {
    return this.patente;
  };
  Auto.prototype.obtenerTamañoLlantas = function () {
    return this.tamañoLlantas;
  };
  return Auto;
})();
var autoDeBraian = new Auto("FIAT", "AAA123", "UNO", 15);
var autoDeJorge = new Auto("HONDA", "BBB123", "CIVIC", 16); // instancia
var autoDeRocio = new Auto("TOYOTA", "CCC123", "COROLLA", 17);
//puede haber cientos de instancias
//ejecucución
var marcaAutoBraian = autoDeBraian.obtenerMarca();
var marcaAutoJorge = autoDeJorge.obtenerMarca();
var marcaAutoRocio = autoDeRocio.obtenerMarca();
var modeloAutoBraian = autoDeBraian.obtenerModelo();
var modeloAutoJorge = autoDeJorge.obtenerModelo();
var modeloAutoDeRocio = autoDeRocio.obtenerModelo();
console.log(marcaAutoBraian, modeloAutoBraian);
console.log(marcaAutoJorge, modeloAutoJorge);
console.log(marcaAutoRocio, modeloAutoDeRocio);
