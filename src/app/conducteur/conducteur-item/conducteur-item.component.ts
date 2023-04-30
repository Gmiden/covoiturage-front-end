import { Component, OnInit,Input } from '@angular/core';
import { ConducteurService } from '../../services/conducteur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conducteur } from '../../model/conducteur';
@Component({
  selector: 'app-conducteur-item',
  templateUrl: './conducteur-item.component.html',
  styleUrls: ['./conducteur-item.component.css']
})
export class ConducteurItemComponent implements OnInit {
  progress: { percentage: number } = {percentage: 0};
  nbrannonce1: any;
  photo: any;
  filesToUpload!: Array<File>;
  @Input() viewMode =false;
  @Input() currentConducteurId ="1";
  @Input() currentConducteur: Conducteur = {
    id:'',
    username: '',
    prenom: '',
    nom: '',
    email: '',
    dateNaissance: '',
    genre: '',
    telephone: '',
    cin: '',
    adresse: '',
    vehicules :[{
      id: '',
      marque: '',
      couleur:'',
      matricule:''
    }],
    password: '',
    image: ''
  };
  message = '';
  constructor(
    private conducteurService: ConducteurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log("a333");
    console.log(this.viewMode);
    console.log(this.currentConducteurId);
    console.log(this.currentConducteur);   
     if (!this.viewMode) {
      console.log("5555555rraaaaaaaaaaaa");
      this.message = '';
      this.getConducteur(this.currentConducteurId);
      console.log(this.currentConducteur);

    }
  }
  getConducteur(id: string): void {
    this.conducteurService.getbyid(id).subscribe((res: any) => {
      console.log("getConducteur");
      console.log(res);
      this.currentConducteur = res;

    });
  }
  recuperFile(file:any) {
    this.filesToUpload = <Array<File>> file.target.files;

    this.photo = file.target.files[0]['name'];
  }

  closemodal() {
 this.currentConducteur = new Conducteur();
    this.photo = 'choisir une image';

  }
  ajout() {
    const data = {
      username: this.currentConducteur.username,
      firstName: this.currentConducteur.prenom,
      lastName: this.currentConducteur.nom,
      email: this.currentConducteur.email,
      birthdate: this.currentConducteur.dateNaissance,
      genre: this.currentConducteur.genre,
      tel: this.currentConducteur.telephone,
      cin: this.currentConducteur.cin,
      adress: this.currentConducteur.adresse,
      password: this.currentConducteur.password,
      photo: this.filesToUpload[0].name
    };
  }
}
