
export class Utilisateur{
    id : number;
    nom : string;
    prenom : string;
    adresseEmail : string;
    role:string;
    mdp : string;

    constructor(
        nom:string,
        prenom:string,
        adresseEmail:string,
        role:string,
        mdp:string){
            this.prenom=prenom;
            this.nom=nom;
            this.adresseEmail=adresseEmail;
            this.role=role;
            this.mdp=mdp;
            
        }
        
}