export abstract class Command{
    payload:any;

    constructor(payload:any) {
        this.payload = payload
    }

    abstract execute():any;
}