import { ClientGuard } from './client.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { ListeProfessionsComponent } from './liste-professions/liste-professions.component';
import { ClientsComponent } from './clients/clients.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { RechercheParDomaineComponent } from './recherche-par-domaine/recherche-par-domaine.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path:"clients",component:ClientsComponent},
  {path:"addClient",component:AddClientComponent, canActivate:[ClientGuard]},
  {path: "rechercheParProfession", component : RechercheParDomaineComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path:"updateClient/:id",component:UpdateClientComponent},
  {path: "listeProfessions", component : ListeProfessionsComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'login', component: LoginComponent},

  { path: "", redirectTo: "clients", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
