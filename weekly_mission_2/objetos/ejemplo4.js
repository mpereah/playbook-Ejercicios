const pet = {
    name: "cora",
    color: "white",
    // Esta es una función que se guarda como propiedad
    sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda`)
        console.log(this.color + " es mi color")
    }
}

console.log("ejercicio 4: Objeto con Metodos")
pet.sayHello()
