export class User {
    constructor (
       public password:string,
       public firstName: string,
       public lastName:String,
       public email: string,
       public phone:string,
       public facebookURL:String=null,
       public instagramURL:String=null,
       public linkedInURL:String=null,
       public gitHubURL:String=null,
       
        )
    {} 
}
