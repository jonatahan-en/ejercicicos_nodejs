'use strict';

function creandoVeiculo(nombre){
    let numRuedas = 4
    return{
        saluda: function(){console.log('hola soy', nombre, 'y tengo', numRuedas, 'ruedas')}
    
    }
}

const seat = creandoVeiculo('Seat ibiza')
const opel = creandoVeiculo('Opel astra')
//seat.saluda()
setTimeout(seat.saluda,2000)
setTimeout(opel.saluda,2000)



opel.saluda = 