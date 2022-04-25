// Ejemplo 10: Overrinding methods

class Explorer{
  constructor(name, username, mission){
   this.name = name
   this.username = username
   this.mission = mission
  }

  getNameAndUsername(){
   return `Explorer ${this. name}, username: ${this.username}`
  }
}

class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission) // SUPER nos ayudar  a llamar el constructor padre
    this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername() // llamamos el m‚todo de la clase padre
    // nameAndUsername  es una variable de esta funci¢n, no necesitas usar this para referenciarla.
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // M‚todo de la clase padre
console.log(viajero1.getGeneralInfo()) // M‚todo de la clase hija