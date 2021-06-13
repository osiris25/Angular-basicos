import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent  {
	// @Input() personajes:Personaje[]=[];
  //Hacemos acceso a los personajes 
  get personajes(){
    return this.dbzService.personajes;//-> El personajes es el get que tenemos en el servicio
  }
  constructor(private dbzService: DbzService){

  }

}
