import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'app/utilisateur';
import { UtilisateurService } from 'app/utilisateur.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  
  currentUser:Utilisateur;

  constructor(private utilisateurService:UtilisateurService) { 
    this.currentUser=UtilisateurService.userConnected;
  }

  isAdmin(){
    return this.currentUser.role;
  }

  ngOnInit() {}

}
