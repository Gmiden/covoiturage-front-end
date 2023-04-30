import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  basurl = 'http://localhost:8080';

  username!: string;


  constructor(private http: HttpClient) {

  }

  login(data:any) {

    return this.http.post(this.basurl + '/login', data, {observe: 'response'});

  }

  register(data:any) {
   
    return this.http.post(this.basurl + '/admin/add', data);


  }

  getprofile() {
    return this.http.get<Admin>(this.basurl + '/user/byiduser');
  }

 

  

 

  

 

  initParams() {
    
  }

}
