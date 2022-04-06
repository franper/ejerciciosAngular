import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


import { ListadoComponent } from "./listado/listado.component";
import { PeliculaComponent } from "./pelicula/pelicula.component";

@NgModule({
    declarations:[
        PeliculaComponent,
        ListadoComponent
    ],

    exports: [
        PeliculaComponent,
        ListadoComponent
    ],

    imports: [
        CommonModule,
        FormsModule
    ],
})

export class SharedModule { }