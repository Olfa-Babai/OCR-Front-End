import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListeOrdonnancesComponent } from './liste-ordonnances/liste-ordonnances.component';
import { Medicament } from './medicament';
import { Ordonnance } from './ordonnance';

const baseUrl = 'http://localhost:8080/ordonnance';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  formData : ListeOrdonnancesComponent
  url:string;

  constructor(private http: HttpClient) { }

  getAll():Observable<Ordonnance[]> {
    this.url=baseUrl+'/afficher';
    return this.http.get<Ordonnance[]>(this.url);
  }
  get(id):Observable<Ordonnance> {
    return this.http.get<Ordonnance>(`${baseUrl}/${id}`);
  }
  getMeds(id):Observable<Medicament[]> {
    this.url=baseUrl+'/getmeds';
    return this.http.get<Medicament[]>(`${this.url}/${id}`);
  }
  delete(id) {
    this.url=baseUrl+'/supprimer';
    return this.http.delete(`${this.url}/${id}`);
  }
  triO(pos:number):Observable<Ordonnance[]>{
    this.url=baseUrl+'/trio';
    return this.http.get<Ordonnance[]>(`${this.url}/${pos}`);
  }
  //researcho
  researcho(mot:string):Observable<Ordonnance[]>{
    this.url=baseUrl+'/researcho';
    return this.http.get<Ordonnance[]>(`${this.url}/${mot}`);
  }
  
}
