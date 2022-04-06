import { Component, OnInit } from '@angular/core';

interface Pelicula {
  name: string;
  year: number;

}
@Component({
  selector: 'pelicula',
  templateUrl: './pelicula.component.html',
})
export class PeliculaComponent {

  peliculas: Pelicula[] = []
  
  nuevo: Pelicula = {
    name: 'Los inmortales',
    year: 2010

  }
  
  addPelicula( ) {
    this.peliculas.push(this.nuevo);

    this.nuevo = {
      name: '',
      year: 0
    }

    console.log( this.peliculas );
  }


}
