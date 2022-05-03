const User = require('./../../app/models/user')

describe ("Unit test for user class", () => {
    test ('create a user object', () => {
        const user = new User(1, "mperea", "Martin", "bio", "dateCreate", "lastUpdate")
        expect(user.id).toBe(1)
        expect(user.userName).toBe("mperea")
        expect(user.name).toBe("Martin")
        expect(user.bio).toBe("bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined() 
    });

    test ('Add Getters', () => {
        const user = new User (1, "mperea", "Martin", "Bio")
        expect(user.getUserName).toBe("mpereah")
        expect(user.getBio).toBe("Bio")
        expect(user.getdateCreated).not.toBeUndefined()
        expect(user.getLastUpdate).not.toBeUndefined()  
    });

    test ('Add setters', () =>{
        const user = new User(1, "mperea", "Martin", "Bio")
        user.setUserName = "perea"
        expect(user.userName).toBe("perea")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    });
})    