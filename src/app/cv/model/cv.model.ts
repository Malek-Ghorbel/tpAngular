export class Cv {
    public id :number ;
    public name : string ;
    public firstname : string ;
    public age : number ;
    public cin : string ;
    public job: string;
    public path : string ;

    constructor(id: number =0 , name: string= "" , firstname: string= "", age: number= 0, cin: string= "",job: string= "", path:string = "") {
        this.id = id;
        this.name = name;
        this.firstname= firstname;
        this.age = age ;
        this.cin = cin ;
        this.job = job;
        this.path = path ;
    }
}
