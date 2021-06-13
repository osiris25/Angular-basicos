import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

personajes: Personaje[] = [];//creamos el arreglo de personajes

nuevo:Personaje={
	nombre:'Tronks',
	poder:176
 }

constructor(){
}
}
