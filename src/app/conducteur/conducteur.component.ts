import { Component, OnInit } from '@angular/core';
import { Conducteur } from '../model/conducteur';
import { ConducteurService } from '../services/conducteur.service';
import { ImageService } from '../services/image.service';
import Swal from 'sweetalert2';
import { ModalpopupComponent } from '../modalpoppup/modalpoppup.component';
import { MatDialog } from '@angular/material/dialog';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-conducteur',
  templateUrl: './conducteur.component.html',
  styleUrls: ['./conducteur.component.css']
})
export class ConducteurComponent implements OnInit {

  term: any;
  p: number = 1;
  progress: { percentage: number } = {percentage: 0};
  nbrannonce1: any;
  photo;
  filesToUpload!: Array<File>;
  added = false;
  id: any;
  conducteur = new Conducteur();
  conducteurs :any;
  currentConducteur = new Conducteur ();
  currentIndex = -1;
  userName ='';
  currentId:any;

  constructor(private conducteurserviceService: ConducteurService, private imsr: ImageService, private dialog: MatDialog) {
    this.all();

this.photo="choisir une image";
  }


  ngOnInit() {

    this.conducteurserviceService.getall().subscribe((res: any) => {
      console.log(res);
      this.conducteurs = res;

    });


  }


  all() {
    this.conducteurserviceService.getall().subscribe((res: any) => {
      console.log(res);
      this.conducteurs = res;


    });

  }

  delete(id: any) {
    Swal.fire(
       'Are you sure?',
     'You won\'t be able to revert this!',
       'warning'
    ).then((result: any ) => {
      if (result.value) {

        this.conducteurserviceService.delete(id).subscribe((res: any) => {

          this.all();

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        });
      }
    });
  }


  ajout() {
    const data = {
      username: this.conducteur.username,
      firstName: this.conducteur.prenom,
      lastName: this.conducteur.nom,
      email: this.conducteur.email,
      birthdate: this.conducteur.dateNaissance,
      genre: this.conducteur.genre,
      tel: this.conducteur.telephone,
      cin: this.conducteur.cin,
      adress: this.conducteur.adresse,

      password: this.conducteur.password,
      photo: this.filesToUpload[0].name
    };


    this.conducteurserviceService.saveConducteur(data).subscribe((res: any) => {
      console.log(res);
      this.added = true;
      this.imsr.pushFileToStorage(this.filesToUpload[0]).subscribe((rest: any) => {
        console.log(rest);
        // if (event.type === HttpEventType.UploadProgress) {
        //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
        // } else if (event instanceof HttpResponse) {
        //   console.log('File is completely uploaded!');
        // }
      });
      this.conducteur = new Conducteur();
      this.conducteur.genre ='';
      this.photo = 'choisir une image';
      this.all();




    });

  }


  recuper(id: any, username: string, firstName: string, lastName: string, email: string, birthdate: any, genre: string, tel: string, permis: string, cin: string, adress: string, image: string, password: string, confirmedPassword: string) {

    this.id = id;
    this.conducteur.username = username;
    this.conducteur.prenom = firstName;
    this.conducteur.nom = lastName;
    this.conducteur.email = email;
    this.conducteur.dateNaissance = birthdate;
    this.conducteur.genre = genre;
    this.conducteur.telephone = tel;
    this.conducteur.cin = cin;
    this.conducteur.adresse = adress;

    this.photo = image;
    this.conducteur.password = password;
    this.nbrannonce(this.id);

  }

  modifierconducteur() {
    const data = {
      username: this.conducteur.username,
      firstName: this.conducteur.prenom,
      lastName: this.conducteur.nom,
      email: this.conducteur.email,
      birthdate: this.conducteur.dateNaissance,
      genre: this.conducteur.genre,
      tel: this.conducteur.telephone,
      cin: this.conducteur.cin,
      adress: this.conducteur.adresse,


      password: this.conducteur.password,
      photo: this.photo
    };

    console.log(data);


    this.conducteurserviceService.modif(this.id, data).subscribe((res: any) => {
      console.log(res);

      if (this.filesToUpload != undefined) {

        this.imsr.pushFileToStorage(this.filesToUpload[0]).subscribe((rest: any) => {
          console.log(rest);
        });
      }

      // if (event.type === HttpEventType.UploadProgress) {
      //   this.progress.percentage = Math.round(100 * event.loaded / event.total);
      // } else if (event instanceof HttpResponse) {
      //   console.log('File is completely uploaded!');
      // }

      this.all();
    });

  }

  recuperFile(file:any) {
    this.filesToUpload = <Array<File>> file.target.files;

    this.photo = file.target.files[0]['name'];
  }

  closemodal() {
 this.conducteur = new Conducteur();
    this.photo = 'choisir une image';

  }

  nbrannonce(idconducteur:any) {
    this.conducteurserviceService.nbrannonce(idconducteur).subscribe((res: any) => {
      console.log(res);
      this.nbrannonce1 = res.length;


    });

  }
  setActiveConducteur(conducteur: Conducteur, index: number): void {
    this.currentConducteur = conducteur;
    console.log("a333")
    console.log(conducteur);
    console.log(conducteur.id);
    this.currentId=conducteur.id;
    this.currentIndex = index;
  }

  searchUserName(): void {
    this.currentConducteur = new Conducteur;
    this.currentIndex = -1;

    this.conducteurserviceService.findByUserName(this.userName)
      .subscribe({
        next: (data:any) => {
          if(data.length>0){
          this.conducteurs = data.conducteurs[0];
          console.log(data.conducteurs);
          console.log("haaa");
          }
        },
        error: (e:any) => console.error(e)
      });
  }
  OpenDialog(enteranimation: any, exitanimation: any,conducteurID:any) {

    this.dialog.open(ModalpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        conducteurID:conducteurID
      }
    })
  }
  FunctionEdit(code: any) {
    this.OpenDialog('1000ms','600ms',code)
  }
  FunctionDelete(code: any) {
    alertify.confirm("Remove Employee","Do you want to remove?",()=>{
      this.conducteurserviceService.delete(code).subscribe(result => {
        this.conducteurserviceService.getall();
        alertify.success("Removed successfully.")
      });

    },function(){

    })
    
  }
}






