class User {
    constructor(id, userName, name, bio, dateCreated, lastUpdate){
        this.id = id
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }

    get getUserName(){
        return this.userName
    }
    get getBio(){
        return this.getBio
    }
    get getdateCreated(){
        return this.getdateCreated
    }
    get getLastUpdate(){
        return this.getLastUpdate
    }

    set setUsername(newUsername){
        this.username = newUsername
    }
    set setBio(newBio){
        this.bio = newBio
    }
}

module.exports = User
