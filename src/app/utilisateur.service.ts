import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from './utilisateur';
import { SignupComponent } from './examples/signup/signup.component';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  formData : SignupComponent
 static userConnected:Utilisateur;
  url : string;
  

  constructor(private http: HttpClient) { }

  
  getAll():Observable<Utilisateur[]> {
    this.url=baseUrl+'/afficher';
    return this.http.get<Utilisateur[]>(this.url);
  }

  get(id):Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${baseUrl}/${id}`);
  }

  create(u:Utilisateur) {
    this.url=baseUrl+'/ajouter';
    return this.http.post(this.url, u);
  }

  update(id, u:Utilisateur) {
    this.url=baseUrl+'/maj';
    return this.http.put(`${this.url}/${id}`, u);
  }

  delete(id) {
    this.url=baseUrl+'/supprimer';
    return this.http.delete(`${this.url}/${id}`);
  }
  
  verif(email,mdp): Observable<Utilisateur> {
    this.url=baseUrl+'/verif';
    return this.http.get<Utilisateur>(`${this.url}/${email}/${mdp}`);
  }

  research(mot):Observable<Utilisateur[]>{
    this.url=baseUrl+'/researchu';
    return this.http.get<Utilisateur[]>(`${this.url}/${mot}`);

  } 

  setU(u:Utilisateur){
   UtilisateurService.userConnected;
  }

  getU(){
    return UtilisateurService.userConnected;
  }

  isCurrentAdmin(){
    return UtilisateurService.userConnected.role=="admin";
  }

  triu(pos:number):Observable<Utilisateur[]>{
    this.url=baseUrl+'/tri';
    return this.http.get<Utilisateur[]>(`${this.url}/${pos}`);
  }

  admins():Observable<Utilisateur[]> {
    this.url=baseUrl+'/admins';
    return this.http.get<Utilisateur[]>(this.url);
  }

  susers():Observable<Utilisateur[]> {
    this.url=baseUrl+'/susers';
    return this.http.get<Utilisateur[]>(this.url);
  }

}
