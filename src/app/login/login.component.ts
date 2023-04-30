import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';


import Swal from 'sweetalert2';
import { AuthentificationService } from '../service/authentification.service';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message!: string ;
 
  loginForm!: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder,private _http:HttpClient, private _route:Router) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });


  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  logindata(login:FormGroup){
    // console.log(this.login.value);
     this._http.get<any>("http://localhost:8080/api/listeUsers")
     .subscribe(res=>{
       const user = res.find((a:any)=>{
         return a.email === this.loginForm.value.username && a.password === this.loginForm.value.password
       });
 
       if(user){
         alert('you are successfully login');
         this.loginForm.reset();
         $('.form-box').css('display','none');
         this._route.navigate(['home']);
        }else{
         alert('User Not Found');
         this._route.navigate(['login']);
       }
 
     }, err=>{
       alert('Vérifier votre connexion internet');
     })
    
 
   }

  
    


  }


