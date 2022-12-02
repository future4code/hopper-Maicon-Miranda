export type TUser = {
    id: string,
    email: string,
    password: string
}

export class User {
    public id: string
    public email: string 
    public password: string

    constructor(id: string, email: string, password: string) {
        this.id = id,
        this.email = email,
        this.password = password
    }

    public getId() {
        return this.id
    }
    
    public getEmail() {
        return this.email
    }
    
    public getPassword() {
        return this.password
    }

    
    public setId(newId: string) {
        this.id = newId
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setPassword(newPassword: string) {
        this.password = newPassword
    }

}

