import Viajero from './viajero.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante modulos.
*/

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Metodo de la clase padre
console.log(viajero1.getGeneralInfo()) // Metodo de la clase hija