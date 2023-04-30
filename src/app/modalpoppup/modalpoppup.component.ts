import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConducteurService } from '../services/conducteur.service';
import * as alertify from 'alertifyjs';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from '../model/file-handle.model';
import { Conducteur } from '../model/conducteur';

@Component({
  selector: 'app-modalpoppup',
  templateUrl: './modalpoppup.component.html',
  styleUrls: ['./modalpoppup.component.css']
})
export class ModalpopupComponent implements OnInit {
  photo: any;
  filesToUpload!: Array<File>;
  constructor(private service: ConducteurService, public dialogref: MatDialogRef<ModalpopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  respdata: any;
  editdata: any;
  imageFile: any;
 currentConducteur: Conducteur = {
    id:'',
    nom: '',
    prenom: '',
    username: '',
    image: '',
    email: '',
    password: '',
    cin: '',
    dateNaissance: '',
    genre: '',
    adresse: '',
    telephone: '',
    vehicules :[{
      id: '',
      marque: '',
      couleur:'',
      matricule:''
    }],
       
  };
  ngOnInit(): void {
    if(this.data.conducteurID!=null && this.data.conducteurID!=''){
this.LoadEditData(this.data.conducteurID);
    }
  }


  LoadEditData(code: any) {
    this.service.getbyid(code).subscribe((item :any)=> {
      this.editdata = item;
      this.currentConducteur=item;
      console.log(this.editdata.vehicules+"mta3 zzebbi")
      this.Reactiveform.setValue({id:this.editdata.id,nom:this.editdata.nom,prenom:this.editdata.prenom,userName:this.editdata.userName,password:this.editdata.password,confirmedPassword:this.editdata.password,cin:this.editdata.cin,adresse:this.editdata.adresse,image:this.editdata.image,email:this.editdata.email,
        phone:this.editdata.telephone,vehiculePrincipale:this.editdata.vehicules,gender:'M',isactive:true})
    });

  }

  Reactiveform = new FormGroup({
    id: new FormControl({ value: 0, disabled: true }),
    prenom: new FormControl("", Validators.required),
    nom: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmedPassword: new FormControl("", Validators.required),
    cin: new FormControl("", Validators.required),
    adresse: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    vehiculePrincipale: new FormControl(""),
    gender: new FormControl("M"),
    isactive: new FormControl(true)
  });
  SaveEmployee() {
    if (this.Reactiveform.valid) {
      this.service.saveConducteur(this.Reactiveform.value.prenom).subscribe(result => {
        this.respdata = result;
        if (this.respdata.result == 'pass') {
          alertify.success("saved successfully.")
          this.dialogref.close();
        }
      });

    } else {
      alertify.error("Please Enter valid data")
    }
  }
  uploadImage(file:any) {
    this.filesToUpload = <Array<File>> file.target.files;

    this.photo = file.target.files[0]['name'];
  }
  fileDropped(fileHandle: FileHandle){
    this.imageFile=fileHandle;
  }
}
