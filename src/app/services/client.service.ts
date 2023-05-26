import { ProfessionWrapper } from '../Model/ProfessionWrapped';
import { Profession } from '../Model/profession.model';
import { Client } from '../Model/client.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})


export class ClientService {
  clientApiURL: string = 'http://localhost:8082/clients/api';
  apiURLPro: string = 'http://localhost:8082/clients/pro';

  Clients !: Client[]; 
  professions!:Profession[];

  constructor(private http : HttpClient) {
    this.Clients = [];
  this.professions = [];

}

listeClient(): Observable<Client[]>{
  return this.http.get<Client[]>(this.clientApiURL);
  }
ajouterClient( prod: Client):Observable<Client>{
  return this.http.post<Client>(this.clientApiURL, prod, httpOptions);
  }
  

supprimerClient(id : number) {
  const url = `${this.clientApiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }

client!: Client;


  consulterClient(id: number): Observable<Client> {
    const url = `${this.clientApiURL}/${id}`;
    return this.http.get<Client>(url);
    }
   
updateClient(prod :Client) : Observable<Client>
{
return this.http.put<Client>(this.clientApiURL, prod, httpOptions);
}
trierClients(){
  this.Clients = this.Clients?.sort((n1, n2) => {
    if (n1 && n2 && n1.idClient && n2.idClient) {
      if (n1.idClient > n2.idClient) {
        return 1;
      } else if (n1.idClient < n2.idClient) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  });
  }


  listeProfessions():Observable<ProfessionWrapper>{
    return this.http.get<ProfessionWrapper>(this.apiURLPro);
    }
    
    
      

    consulterProfession(id: number): Profession | undefined {
      return this.professions.find(profession => profession.idPro === id);
    }
    

      rechercherParProfession(idPro: number):Observable< Client[]> {
        const url = `${this.clientApiURL}/clientsPro/${idPro}`;
        return this.http.get<Client[]>(url);
        }

        rechercherParNom(nom: string):Observable< Client[]> {
          const url = `${this.clientApiURL}/clientsByName/${nom}`;
          return this.http.get<Client[]>(url);
          }

          ajouterProfession( pro: Profession):Observable<Profession>{
            return this.http.post<Profession>(this.apiURLPro, pro, httpOptions);
            }
            
        



}