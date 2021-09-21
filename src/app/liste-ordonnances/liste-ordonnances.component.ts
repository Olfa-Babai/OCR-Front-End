import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordonnance } from 'app/ordonnance';
import { OrdonnanceService } from 'app/ordonnance.service';
import { ShowOrdonnanceComponent } from './show-ordonnance/show-ordonnance.component';

@Component({
  selector: 'app-liste-ordonnances',
  templateUrl: './liste-ordonnances.component.html',
  styleUrls: ['./liste-ordonnances.component.css']
})
export class ListeOrdonnancesComponent implements OnInit {
  ordonnances?:Ordonnance[];
  currentO?:Ordonnance={
    id:0,
    nomMedecin:'',
        nomPatient:'',
        dateConsultation:null,
        dateNaissance:null,
        medicaments:null
  };
  resp:boolean = false;
  @Output()
  ordonnance:Ordonnance;
  mot:string;
  os:OrdonnanceService;

  @ViewChild(ShowOrdonnanceComponent) showOrd:ShowOrdonnanceComponent;

  constructor(private route: ActivatedRoute, private router:Router,private ordonnanceService:OrdonnanceService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }
  
  retrieveUsers():void{
    this.ordonnanceService.getAll()
    .subscribe(
      data =>{
        this.ordonnances=data;
        console.log(data)
      });
  }

  refreshContent(){
    this.retrieveUsers();
  }

  findById(id:number): void{
    this.ordonnanceService.get(id)
    .subscribe(
      data => {
        this.currentO = data;
        console.log(this.currentO);
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  deleteOrdonnance(id:number):void{
    this.ordonnanceService.delete(id)
  .subscribe(
    response => {
      console.log(id)
      console.log(response);
      this.retrieveUsers();
    },
    error => {
      console.log("non "+id)
      console.log(error);
    });
}

showOrdonnance(o:Ordonnance){
 this.currentO=o;
 this.resp=true;
 this.os=this.ordonnanceService;
}

reFresh(){
  this.resp=false;
  this.mot="";
}

trier(pos:number){
  this.ordonnanceService.triO(pos)
    .subscribe(
      data =>{
        this.ordonnances=data;
        console.log(data)
      });
}

  researcho(mot:string){
    this.ordonnanceService.researcho(mot)
    .subscribe(
      data =>{
        this.ordonnances=data;
        console.log(data)
      });
  }

}
