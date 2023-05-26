import { Profession } from './../Model/profession.model';
import { ClientService } from './../services/client.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-liste-professions',
  templateUrl: './liste-professions.component.html',
  styles: [
  ]
})
export class ListeProfessionsComponent implements OnInit {
  professions! : Profession[];
  ajout:boolean=true;
  updatedPro:Profession = {"idPro":0,"nomPro":""};




  constructor(private clientService : ClientService) { }


  ngOnInit(): void {
  this.clientService.listeProfessions().
  subscribe(professions => {this.professions = professions._embedded.professions;
  console.log(professions);
  
  });
  
  }
  chargerProfessions(){
    this.clientService.listeProfessions().
    subscribe(cats => {this.professions = cats._embedded.professions;
    console.log(cats);
    });
    }

  professionUpdated(pro:Profession){
    console.log("Pro updated event",pro);
    this.clientService.ajouterProfession(pro).
     subscribe( ()=> this.chargerProfessions());
    }

   
    updatePro(pro:Profession) {
      this.updatedPro=pro;
      this.ajout=false; 

      }
      

}
