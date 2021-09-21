import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AjoutOrdonnanceComponent } from './ajout-ordonnance/ajout-ordonnance.component';
import { Ordonnance } from './ordonnance';

const baseUrl = 'http://localhost:8080/ocr';

@Injectable({
  providedIn: 'root'
})
export class OcrService {
  formData : AjoutOrdonnanceComponent
  url : string;

  constructor(private http: HttpClient) { }
  
  upload(f:File) {
    this.url=baseUrl+'/upload';
    return this.http.post(this.url, f);
  }

}
