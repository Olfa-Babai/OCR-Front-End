import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/utilisateur';
import { UtilisateurService } from 'app/utilisateur.service';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.css']
})
export class AjoutUserComponent implements OnInit {

  prenom=""
  nom=""
  email=""
  mdp=""
  selectedChoice: string = 'all';
  bool=false;
  bool2=false;

  utilisateur:Utilisateur;
   
  constructor(private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
  }

  selectChangeHandler (event: any) {
    this.selectedChoice = event.target.value;
  }

  ajout(){
    if(this.selectedChoice=="all"){
      this.bool=true;
    }
    else if(this.selectedChoice!="all"){
      this.bool=false;
    }
    if(this.prenom=="" || this.nom=="" || this.email=="" ||this.mdp=="" ){
      this.bool2=true;
    }
    else{
      this.bool2=false;
    }

    if(this.prenom!="" && this.nom!="" && this.email!="" && this.mdp!="" && this.selectedChoice!="all"){
      console.log(this.nom)
      this.utilisateur=new Utilisateur(this.nom,this.prenom,this.email,this.selectedChoice,this.mdp);
      console.log(this.utilisateur)
      this.utilisateurService.create(this.utilisateur).subscribe(
        response => {
          console.log(response);
          alert("Ajouté avec succès!")
        },
        error => {
          console.log(error);
        });
    }
  }

  test(){
    return this.bool;
  }
  test2(){
    return this.bool2;
  }
 
}
