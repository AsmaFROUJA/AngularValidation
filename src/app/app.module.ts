import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

import { RechercheParDomaineComponent } from './recherche-par-domaine/recherche-par-domaine.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ListeProfessionsComponent } from './liste-professions/liste-professions.component';
import { UpdateProfessionComponent } from './update-profession/update-profession.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AddClientComponent,
    UpdateClientComponent,
    RechercheParDomaineComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeProfessionsComponent,
    UpdateProfessionComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
