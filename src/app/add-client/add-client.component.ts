import { Profession } from './../Model/profession.model';
import { Client } from './../Model/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
})
export class AddClientComponent implements OnInit {
  newClient = new Client();
  msg: string = '';
  professions!: Profession[];
  newIdPro!: number;
  newProfession!: Profession;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientService.listeProfessions().subscribe(
      (professions) => {
        console.log(professions);
        this.professions = professions._embedded.professions;
      },
      (error) => {
        console.log('Error fetching professions:', error);
      }
    );
  }

  addClient() {
    this.newClient.profession = this.professions.find(profession => profession.idPro == this.newIdPro)!;
    this.clientService.ajouterClient(this.newClient)
      .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['clients']);
      });
  }
}
