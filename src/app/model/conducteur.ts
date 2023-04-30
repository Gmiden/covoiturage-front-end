export class Conducteur {
  id!: string;
  genre!: string;
  username!: string;
  password!: string;
  email!: string;
  cin !: string;
  nom!: string;
  prenom!: string;
  telephone!: string;
  image!: string;
  adresse!: string;
  dateNaissance!: any;
  vehicules !: [{
    id: string;
    marque: string;
    couleur: string;
    matricule:string
  }]

}
