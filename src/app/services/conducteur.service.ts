import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  basurl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private authService: AuthentificationService) {
  }

  getall() {

  

    return this.http.get(this.basurl + '/listeConducteurs');

  }

  delete(id:any) {
    


    return this.http.delete(this.basurl + '/chauffeur/delete/' + id);


  }

  saveConducteur(data:any) {
    

    return this.http.post(this.basurl + '/chauffeur/add', data);


  }


  modif(id:any, data:any) {
 
    return this.http.put(this.basurl + '/chauffeur/edit/'+id, data);
  }



  nbrannonce(idChauffeur:any) {

   
    return this.http.get(this.basurl + '/chauffeur/allAnnoncebyxhaufeur/'+idChauffeur);


  }
  getbyid(id:any){
  
    return this.http.get(this.basurl + '/listeConducteurs/'+id);

  }
  findByUserName(name:any){
  
    return this.http.get("http://localhost:8080/conducteurs/search/byUserName?userName="+name);

  }
}
