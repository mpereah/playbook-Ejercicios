// Ejemplo 4: M�todos en los objetos
class Repository {
  constructor(name, author, language, stars){
   this.name = name
   this.author = author
   this.language = language
   this.stars = stars
  }

  getInfo(){ // es una funcion que ejecutara cualquier objeto instanciado de esta clase
    return `Repository ${this.name} has ${this.stars} stars`
  }
}
console.log("Ejemplo 4: Metodos en los objetos")
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
console.log(myRepo.getInfo())