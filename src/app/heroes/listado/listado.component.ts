import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

 heroes: string[] = ['Spidergirl','Wonder Woman','Black Widow',' Bat Girl'];
 borrado: string= "";

 borarHeroe(){
	 const heroeBorrado=this.heroes.shift() || '';
	this.borrado=heroeBorrado;
 }

}
