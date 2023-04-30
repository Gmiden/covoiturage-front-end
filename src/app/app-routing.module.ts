import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';
import { ConducteurComponent } from './conducteur/conducteur.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Error404Component } from './error404/error404.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { PassagerComponent } from './passager/passager.component';
import { MarquevoitureComponent } from './marquevoiture/marquevoiture.component';
import { ProfileadminComponent } from './profileadmin/profileadmin.component';
import { ProfiluserComponent } from './profiluser/profiluser.component';
import { AnnonceComponent } from './annonce/annonce.component';

const routes: Routes = [

   {
                            path: 'home', component: HomeComponent,
                             children: [
                              { path: '', component: LayoutComponent },
                              { path: 'conducteur', component: ConducteurComponent },
{path:'reclamation',component: ReclamationComponent},
      {path:'passager',component:PassagerComponent},

      {path:'voiture',component:MarquevoitureComponent},
      {path:'profileadmin',component:ProfileadminComponent},
      {path:'profiluser/:id',component:ProfiluserComponent},
      {path:'statstique',component:AnnonceComponent},

                            ],
                          },


{ path: '', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '**', component: Error404Component }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
