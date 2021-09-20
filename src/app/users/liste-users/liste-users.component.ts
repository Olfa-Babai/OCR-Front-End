import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/utilisateur';
import { UtilisateurService } from 'app/utilisateur.service';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {
  
  utilisateurs?:Utilisateur[];
  //currentUser:Utilisateur={};

  constructor(private utilisateurService:UtilisateurService) { }

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


}
