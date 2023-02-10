export class User{
    constructor(
        private id: string,
        private name: string,
        private lastname: string,
        private participation: number,
    ) {
        this.id = id
        this.name = name
        this.lastname = lastname
        this.participation = participation
    }

    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getLastName(){
        return this.lastname
    }
    public getParticipation(){
        return this.participation
    }

    public setId(newId: string){
        this.id = newId
    }
    public setName(newName: string){
        this.name = newName
    }
    public setEmail(newLastName: string){
        this.lastname = newLastName
    }
    public setParticipation(newParticipation: number){
        this.participation = newParticipation
    }
}