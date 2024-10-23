"use strict";



// crear una funcion para usarla como constructor de objetos

function Fruta(nombre){
    // this contiene el objeto que se esta creando , y que va a devolver  new Fruta()
    this.nombre = nombre
    this.saluda = function(){console.log('Hola, soy', this.nombre)}
}

const limon = new Fruta('limon');
 

/**
 * Js para determinar que tiene "this"hace esto
 * Busca el primer punto a la izquierdadelos parentesisi de ejecucion ,y lo que haya a la izquierda  sera lo que use  com "this"
 */

//limon.saluda()

setTimeout(limon.saluda.bind(limon),2000);

//const saludoDeLimon = limon.saluda.bind(limon);
//saludoDeLimon()