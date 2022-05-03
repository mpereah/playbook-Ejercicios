const userservice = require ('./../../app/services/userservice')

describe ("Test for userservice", () =>{
    test("1. create a new user using the service", () =>{
        const user = userservice.create (1, "mperea", "Martin",)
        expect (user.username).toBe("mperea")
        expect(user.name).toBe("Martin")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})