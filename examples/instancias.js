'use strict';

// crear una funcion para usarla como constructor de objetos

function Fruta(nombre){
    // this contiene el objeto que se esta creando , y que va a devolver  new Fruta()
    this.nombre = nombre
    this.saluda = function(){console.log('Hola, soy', this.nombre)}
}
// utilizando new en una funcion podemos tambien crear objetos
const fruta = new Fruta('limon');
console.log(fruta);
fruta.saluda();

// Pruebas mias 

function Carros(marcas,matriculas,modelos){
    this.marca = marcas
    this.matricula = matriculas
    this.modelo = modelos

    this.tipo = function(){ console.log('soy de la marca', this.marca)}
    this.numero = function(){ console.log('tengo la matricula', this.matricula)}
    this.modelin = function(){ console.log('soy del modelo', this.modelo)}// cuidado con los nombres hay confuncion nos devuelne una (funcion anonima )

}
const carros = new Carros('seat', '123546798','ibiza')

//console.log(carros)
carros.tipo()
carros.numero()
carros.modelin()

