import { AuthService } from '../services/auth.service';
import { Client } from './../Model/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',

})
export class ClientsComponent implements OnInit {
  clients !: Client[];

  constructor(private clientService: ClientService, public authService: AuthService) {
    // this.clients = clientService.listeClients();


  }

  ngOnInit(): void {
    this.clientService.listeClient().subscribe(prods => {
      console.log(prods);
      this.clients = prods;

      });
  }

  chargerClients(){
    this.clientService.listeClient().subscribe(prods => {
    console.log(prods);
    this.clients = prods;
    });
    }


    supprimerClient(f: Client){
      let conf = confirm("Are you sure?");
      if (conf && f.idClient !== undefined)
        this.clientService.supprimerClient(f.idClient).subscribe(()=>{
          console.log("Client deleted");
          this.chargerClients();
        });
    }


}
