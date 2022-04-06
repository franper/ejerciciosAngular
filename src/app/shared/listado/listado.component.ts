import { Component, Input } from "@angular/core";

@Component({
    selector: 'listado',
    templateUrl: './listado.component.html'
})

export class ListadoComponent {
    @Input() peliculas: any[] = [];


    borrar (event:any){
        let node = event.path[1];
        console.log(node);
        node.parentNode.removeChild(node);
         
    }
}