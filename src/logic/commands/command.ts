export abstract class Command{
    payload:any;

    /**
     * 
     * @param payload payload that the command will recieve, it can be any kind of data the commands needs to work
     */
    constructor(payload:any) {
        this.payload = payload
    }

    /**
     * Abstract method that should implement the command logic
     */
    abstract execute():any;
}