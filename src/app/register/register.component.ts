import { Component, OnInit } from '@angular/core';

import {AuthentificationService} from '../service/authentification.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;




  constructor(private formBuilder: FormBuilder,private authenService: AuthentificationService, private  router: Router) {
  }


  ngOnInit() {


    this.registerForm = this.formBuilder.group({
     username: ['', [Validators.required]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      genre: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)],
      confirmedPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmedPassword')
    });
  }
  get f() {
    return this.registerForm.controls;
  }







  inscrit() {
    this.submitted = true;
    const data={
      username: this.registerForm.value["username"],
      firstName: this.registerForm.value["firstName"],
      lastName: this.registerForm.value["lastName"],
      genre: this.registerForm.value["genre"],
      email: this.registerForm.value["email"],
      tel: this.registerForm.value["tel"],
      password:this.registerForm.value["password"],
      confirmedPassword:this.registerForm.value["confirmedPassword"]}
    console.log(data);
 
if(this.registerForm.valid){
  this.router.navigate(['']);
}else{
  return
}

        
     
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      
        return;
      }


      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }



}
