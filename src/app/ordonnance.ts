import { Medicament } from "./medicament";

export class Ordonnance{
    id:number;
    nomMedecin:string;
    nomPatient:string;
    dateConsultation:Date;
    dateNaissance:Date;
    medicaments:Medicament[];

    constructor(
        nomMedecin:string,
        nomPatient:string,
        dateConsultation:Date,
        dateNaissance:Date,
        medicaments:Medicament[]
    ){}

}