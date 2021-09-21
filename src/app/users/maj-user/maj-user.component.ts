import { Component, OnInit } from '@angular/core';
import { ListeOrdonnancesComponent } from 'app/liste-ordonnances/liste-ordonnances.component';
import { Utilisateur } from 'app/utilisateur';
import { UtilisateurService } from 'app/utilisateur.service';
import { ListeUsersComponent } from '../liste-users/liste-users.component';

@Component({
  selector: 'app-maj-user',
  templateUrl: './maj-user.component.html',
  styleUrls: ['./maj-user.component.css']
})
export class MajUserComponent implements OnInit {

  prenom:string;
  nom:string;
  email:string;
  mdp:string;
  selectedChoice:string;
  bool=false;
  bool2=false;

  utilisateur:Utilisateur;

  constructor(private utilisateurService:UtilisateurService) {
    this.utilisateur=ListeUsersComponent.uSelected;
    this.selectedChoice=this.utilisateur.role;
   }

  ngOnInit(): void {
  }

  selectChangeHandler (event: any) {
    this.selectedChoice = event.target.value;
  }

  done(){
    if(this.selectedChoice=="all"){
      this.bool=true;
    }
    else if(this.selectedChoice!="all"){
      this.bool=false;
    }
    if(this.utilisateur.prenom=="" || this.utilisateur.nom=="" || this.utilisateur.adresseEmail=="" ||this.utilisateur.mdp=="" ){
      this.bool2=true;
    }
    else{
      this.bool2=false;
    }
    if(this.utilisateur.prenom!="" && this.utilisateur.nom!="" && this.utilisateur.adresseEmail!="" && this.utilisateur.mdp!="" && this.selectedChoice!="all"){
      this.utilisateur.role=this.selectedChoice;
      console.log(this.utilisateur)
      this.utilisateurService.update(ListeUsersComponent.uSelected.id,this.utilisateur).subscribe(
        response => {
          console.log(response);
          alert("Modifié avec succès!")
        },
        error => {
          console.log(this.utilisateur)
          console.log(error);
        });
    }
  }

  miseaj(){
    
  }


}
