import { Profession } from '../Model/profession.model';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-profession',
  templateUrl: './update-profession.component.html',
  styles: [
  ]
})
export class UpdateProfessionComponent implements OnInit {
  @Input()
  profession! : Profession;

  @Output()
  professionUpdated = new EventEmitter<Profession>();

  @Input()
ajout!:boolean;


  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateProfession ",this.profession);
  }

  saveProfession(){
    this.professionUpdated.emit(this.profession);
    }

}
