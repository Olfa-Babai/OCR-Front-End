import { Component, OnInit, Input, Output } from '@angular/core';
import { Medicament } from 'app/medicament';
import { Ordonnance } from 'app/ordonnance';
import { OrdonnanceService } from 'app/ordonnance.service';

@Component({
  selector: 'app-show-ordonnance',
  templateUrl: './show-ordonnance.component.html',
  styleUrls: ['./show-ordonnance.component.css']
})
export class ShowOrdonnanceComponent implements OnInit {

  @Input() dataO : Ordonnance;
  @Input() state : boolean;
  meds?:Medicament[];
  @Input() ordonnanceService:OrdonnanceService;
  constructor() { }
  ngOnInit(): void {
  //this.retrieveMeds();
  }

  deleteOrdonnance(id:number){
    this.ordonnanceService.delete(id)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  retrieveMeds(){
    this.ordonnanceService.getMeds(this.dataO.id)
    .subscribe(
      data =>{
        this.meds=data;
        console.log(data)
        console.log("here")
      });
  }

}
