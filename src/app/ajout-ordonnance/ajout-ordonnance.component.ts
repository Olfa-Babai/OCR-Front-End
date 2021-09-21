import { Component, OnInit } from '@angular/core';
import { OcrService } from 'app/ocr.service';

@Component({
  selector: 'app-ajout-ordonnance',
  templateUrl: './ajout-ordonnance.component.html',
  styleUrls: ['./ajout-ordonnance.component.css']
})
export class AjoutOrdonnanceComponent implements OnInit {
  
  static fileUpload:File;
  selectedFiles=false;
  constructor(private ocrService:OcrService) { }

  ngOnInit(): void {
  }
  
  selectFile(event) {
    AjoutOrdonnanceComponent.fileUpload = event.target.files.item(0);
    console.log(AjoutOrdonnanceComponent.fileUpload)
    if(AjoutOrdonnanceComponent.fileUpload==null){
      this.selectedFiles=false;
    }
    else{
      this.selectedFiles=true;
    }
  }

  done(){
    console.log(AjoutOrdonnanceComponent.fileUpload)
      this.ocrService.upload(AjoutOrdonnanceComponent.fileUpload).subscribe(
        response => {
          console.log(response);
          alert("Ajoutée avec succès!")
        },
        error => {
          console.log(error);
        });
    }

}
