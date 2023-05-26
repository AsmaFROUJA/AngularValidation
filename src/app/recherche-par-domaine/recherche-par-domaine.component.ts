import { ProfessionWrapper } from '../Model/ProfessionWrapped';
import { Profession } from '../Model/profession.model';
import { Client } from '../Model/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-recherche-par-domaine',
  templateUrl: './recherche-par-domaine.component.html',
  styles: [
  ]
})
export class RechercheParDomaineComponent implements OnInit {
  clients: Client[] = [];
  idPro: number | undefined;
  professions: Profession[] = [];
  searchTerm!: string;
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.listeProfessions().subscribe(
      (professionWrapper: ProfessionWrapper) => {
        this.professions = professionWrapper._embedded.professions;
        console.log(this.professions);
        console.log(this.idPro);
      },
      error => {
        console.log('Une erreur est survenue lors de la récupération des professions:', error);
      }
    );
    this. onChange();
  }

  onChange(): void {
    console.log('Selected idPro:', this.idPro);
  
    if (this.idPro !== undefined) {
      this.clientService.rechercherParProfession(this.idPro).subscribe(
        (clients: Client[]) => {
          this.clients = clients;
        },
        (error: any) => {
          console.log('Une erreur est survenue lors de la recherche par profession:', error);
        }
      );
    } else {
      this.clients = []; // Réinitialiser la liste des clients si aucune profession n'est sélectionnée
    }
  }
  
  
  
  

  supprimerClient() {
    // Logique de suppression du client
  }
}
