export class ConfigServiceTs {
    private WebURL:string = "http://localhost:8080/";

    constructor(){}
    
    public getWebUrl(){
        return this.WebURL;
    }
}
