import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/utilisateur';
import { UtilisateurService } from 'app/utilisateur.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    email="";
    mdp="";

   currentUser=new Utilisateur('','','','','');
    
    constructor(private router: Router,private utilisateurService:UtilisateurService) {

     }

    connect(){
        this.utilisateurService.verif(this.email,this.mdp).subscribe(
            data =>{
                if(data.id==null || this.email=="" || this.mdp==""){
                    alert("Vérifiez les données entrées")
                } else{
                UtilisateurService.userConnected=data;
                this.utilisateurService.setU(data)
                console.log(data);                
                this.router.navigateByUrl('/landing');
              }
            }
        );
    }


    ngOnInit() {}
}

