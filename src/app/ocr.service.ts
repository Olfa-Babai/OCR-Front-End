import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
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
  baseUrl='http://localhost:8080/ocr';

  constructor(private http: HttpClient) { }
 /*
  upload(f:File) {
    //const params = new HttpParams().set('file', f);
    this.url=baseUrl+'/upload';
    return this.http.post(this.url, f);
  }  */
 
  upload(file: File):any{
    let body = new FormData();
    body.append('file', file);
    this.http.post<File>('http://localhost:8080/ocr/upload', body)
  }



}
