import { Profession } from '../Model/profession.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../Model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styles: []
})
export class UpdateClientComponent implements OnInit {
  currentClient = new Client();
  professions!: Profession[] ;
  updatedProId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) { }


  

  ngOnInit(): void {
    this.clientService.listeProfessions().subscribe(professions => {
      console.log(professions);
      this.professions = professions._embedded.professions;
    });

    this.clientService.consulterClient(this.activatedRoute.snapshot.params['id']).subscribe((prod: Client) => {
      this.currentClient = prod;
      this.updatedProId = this.currentClient.profession.idPro;
    });
  }

  updateClient() {
    this.currentClient.profession = this.professions.find(profession => profession.idPro== this.updatedProId)!;
    this.clientService.updateClient(this.currentClient).subscribe(client => {
    this.router.navigate(['clients']); }
    );

  }
  

  onDateChange(event: any) {
    this.currentClient.dateAjout = new Date(event.target.value);
  }
}
