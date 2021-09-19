import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {

  titleForChoice="abc"
  event1=false
  event2=false

  constructor() { }

  ngOnInit(): void {
  }

  isSelected(){
    return this.event1 || this.event2
  }

  listeSelected(){
    this.titleForChoice="Défilez vers le bas pour voir la liste"
    this.event1=true
    this.event2=false
  }

  ajoutSelected(){
    this.titleForChoice="Défilez vers le bas pour ajouter un utilisateur"
    this.event2=true
    this.event1=false
  }

  listeIsSelected(){
    return this.event1
  }

  ajoutIsSelected(){
    return this.event2
  }

  onButtonGroupClick($event){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }

}
