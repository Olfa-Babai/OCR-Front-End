import { Component, OnInit } from '@angular/core';
import { OcrService } from 'app/ocr.service';

@Component({
  selector: 'app-new-ordonnance',
  templateUrl: './new-ordonnance.component.html',
  styleUrls: ['./new-ordonnance.component.css']
})
export class NewOrdonnanceComponent implements OnInit {

  file:File;
  constructor(private ocrService:OcrService) { }

  ngOnInit(): void {
  }


}
