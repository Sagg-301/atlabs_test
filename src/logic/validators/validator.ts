export abstract class Validator{
    data:any

    constructor(data:any) {
        this.data = data
    }

   abstract validate():any
}