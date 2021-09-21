import { Component, OnInit } from '@angular/core';
import { OcrService } from 'app/ocr.service';

@Component({
  selector: 'app-ajout-ordonnance',
  templateUrl: './ajout-ordonnance.component.html',
  styleUrls: ['./ajout-ordonnance.component.css']
})
export class AjoutOrdonnanceComponent implements OnInit {
  
  fileUpload:File;
  selectedFiles=false;
  constructor(private ocrService:OcrService) { }

  ngOnInit(): void {
  }
  
  selectFile(event) {
    this.fileUpload = event.target.files;
    if(this.fileUpload==null){
      this.selectedFiles=false;
    }
    else{
      this.selectedFiles=true;
    }
  }

  done(){
    console.log(this.fileUpload)
      this.ocrService.upload(this.fileUpload).subscribe(
        response => {
          console.log(response);
          alert("Ajouté avec succès!")
        },
        error => {
          console.log(error);
        }
      );}

}
