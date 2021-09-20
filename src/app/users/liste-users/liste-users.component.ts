import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'app/utilisateur.service';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {
  
  utilisateurs?:Utilisateur[];
  currentUser?:Utilisateur={
    id:0,
    prenom:'',
    nom:'',
    adresseEmail:'',
    role:'',
    mdp:'',
  };

  constructor(private utilisateurService:UtilisateurService, private router:Router) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers():void{
    this.utilisateurService.getAll()
    .subscribe(
      data =>{
        this.utilisateurs=data;
        console.log(data)
      });
  }
  checkRole(u){
    if (u.role=="admin"){
      return true;
    }
    else return false;
  }

  refreshContent(){
    this.retrieveUsers();
  }

  findById(id:number): void{
    this.utilisateurService.get(id)
    .subscribe(
      data => {
        this.currentUser = data;
        console.log(this.currentUser);
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  deleteUser(id:number):void{
      this.utilisateurService.delete(id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/gestion-users']);
      },
      error => {
        console.log(error);
      });
  }

}
