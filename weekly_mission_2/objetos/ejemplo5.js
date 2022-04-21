// Ejercicio 5: Objeto con método que recibe parámetros
const myPet = {
    name: "cora",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejercicio 5: Objeto con metodo que recibe parametros")
  myPet.sayHelloToMyPet("moca")