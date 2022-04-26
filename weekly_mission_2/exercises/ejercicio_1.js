console.log("-----------GITHUB------------------------")
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

console.log("---------------------------------------------------------------------------------")
   const issue = {
    title: "Playbook",
    repositoryNameAssociated: "Back-end node JS",
    status: "active",
    numberOfComments: 580,
    labels: 30,
    author: "mpereah",
    dateCreate: "20 de Abril 2022",
    lastUpdate: "25 de Abril 2022",
    getTitleAndAuthor: function(){
        return  `${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
        return `${this.repositoryNameAssociated} is ${this.status} with ${this.numberOfComments} comments and create ${this.dateCreate}`
    }
}

console.log("fecha de creacion:" + issue.dateCreate)
console.log(issue.getGeneralInfo())

console.log("----------------------------------------------------------------------")

const pullRequest ={
    title: "playbook",
    branchName: "Node JS",
    dateCreated: "1 de Abril 2022",
    status: "semana 2",
    repositoryNameAssociated: "weekly Mission 2",
    getStatus: function(){
        return `el curso esta en ${this.status}` 
    },
    getTitleAndAuthor: function(){
        return `${this.title} created by ${this.author}`
    }
}

console.log("nombre de pullrequest "  +  pullRequest.title)
console.log("created by " + repo.author)


console.log("--------------TWITTER------------------")

const user = {
    name: "Martin",
    telephoneNumber: 1234567890,
    email: "mph@ejemplo.com",
    getNameUser: function() {
    return `Nombre ${this.name}`
    },
    getEmail: function(){
        return `Informacion de contacto, Email: ${this.email} , numero de telefono ${this.telephoneNumber}`
    } 
}

console.log("informacion basica del usuario: " + user.name)
console.log(user.getEmail())

console.log("------------------------------------------------------")

const trending = {
    name: "Launch X",
    more_used: "Node JS",
    numberTrending: "1.2 millones",
    information: "Innovaccion",
    getName: function(){
        return `la noticia del momento es: ${this.name}`
    },
    getInformation: function() {
        return `hasta el momomento ${this.more_used} tiene ${this.numberTrending} de retwitts`
    },
    getNoticias: function() {
        return this.information
    }
}

console.log("el mejor twitt es " + trending.getName())
console.log(trending.getInformation())
console.log("El mejor curso: " + trending.getNoticias())

console.log("---------------------------------------------")

const hashtag = {
    frase: "Curso Node JS",
    hiperLink: "Inovaccion",
    discussion: "Launch X",
    getNotice: function(){
        return this.discussion
    },
    getFrase: function(){
        return `La palabra del momento ${this.frase}, en la link ${this.hiperLink}, participa en el hashtag #${this.frase} y unete al mejor curso`
    }
}

console.log(hashtag.getFrase())
console.log("unete a " + hashtag.getNotice())

console.log("------------------FACEBOOK---------------------")

const FacebookUser = {
    nickname: "Martin",
    age: 37,
    mail: "mpereah@ejemplo.com",
    numberTel: 1234567890,
    getInfoGeneral: function(){
        return `informacion general de usurio, Nombre: ${this.nickname}, Edad: ${this.age}, Email: ${this.mail}, numero de telefono: ${this.numberTel}`
    }
}

console.log(FacebookUser.getInfoGeneral())

console.log("-----------------------------------------------")

const post = {
    live: "Curso Launch X",
    lastPost: "Node Js semana 2",
    getInfo: function(){
        return `Estamos transmitiendo en vivo: ${this.live}`
    },
    getpost: function(){
        return `El post con mas vistas es: ${this.lastPost}`
    }
}
console.log(post.getInfo())
console.log(post.getpost()  +  post.live)
console.log("----------------------------------------------")

const biography = {
    enquepiensas: "Escribe tu post",
    transmitir: "Empezar a Transmitir en vivo",
    fotos: "Agregar Fotos",
    muro: "tienes 50 nuevas publicaciones de tus amigos",
    getGeneral: function(){
        return `accede a tu muro: ${this.muro}`
    },
    getDatos: function(){
        return this.enquepiensas + this.transmitir + this.fotos
    }
}
console.log(biography.getGeneral())
console.log("esto es tu inico" + biography.getDatos())
