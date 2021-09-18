import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from './utilisateur';
import { SignupComponent } from './examples/signup/signup.component';

const baseUrl = 'http://localhost:8080/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  formData : SignupComponent

  constructor(private http: HttpClient) { }
  url : string;
  
  getAll() {
    this.url=baseUrl+'/afficher';
    return this.http.get(this.url);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
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
  
  verif(email,mdp) {
    this.url=baseUrl+'/verif';
    return this.http.get(`${this.url}/${email}/${mdp}`);
  }

}
