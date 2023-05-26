import { Client } from './../Model/client.model';
import { ClientService } from './../services/client.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  constructor(private clientService: ClientService) { }
  clients!: Client[];
  nomClient!:string;


  allClients! : Client[];
searchTerm!: string;
ngOnInit(): void {
this.clientService.listeClient().subscribe(prods => {
console.log(prods);
this.clients = prods;
});
}
onKeyUp(filterText : string){
  this.clients = this.allClients.filter(item =>
  item.nomClient.toLowerCase().includes(filterText));
  }
  



  rechercherProds(){
    this.clientService.rechercherParNom(this.nomClient).
    subscribe(prods => {
    this.clients = prods;
    console.log(prods)});
    }

    supprimerClient(client:Client){

    }

}
