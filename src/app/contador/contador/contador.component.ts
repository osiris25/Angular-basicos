import { Component } from "@angular/core";
@Component({
	selector: 'app-contador',
	template:`
	<h1>{{title}}</h1><!-- las dobles llaves sirven para agregar cualquier expresion js -->
	<h3>La base es: <strong>{{base}}</strong></h3>
	<button (click)="acumular(base)">+5</button><!--Se esta mandando llamar el metodo-->
	<span>{{numero}}</span>
	<button (click)="acumular(-base)">-5</button>`
})

export class ContadorComponent {

  public title: string = 'Contador App';
	numero:number = 10;
	base:number = 5;

	// Esta es una forma y solo se mandan llamar en el HTML
	// sumar(){
	// 	this.numero += 1;
	// }
	// restar(){
	// 	this.numero -= 1;
	// }

	//ESTA ES UNA SEGUNRA  OPCION MAS LIMPIA
	acumular( valor:number){
		this.numero += valor;
	}

}