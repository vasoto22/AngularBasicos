import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>

        <!--<button (click)=" numero = numero + 1; "> + 1 </button>--> <!-- Una forma de hacer le contador sin funciones -->
        <!--<button (click)=" sumar() "> + 1 </button>--> <!--Otra forma de hacer el contador, llamando un método que se creó de sumar -->
        <button (click)=" acumular(+ base )"> {{ base }} </button>

        <!--<button (click)=" acumular(+1) "> + 1 </button> -->

        <span>{{numero}}</span>

        <button (click)=" acumular(- base) "> {{ base }} </button>

        <!--<button (click)=" acumular(-1) "> - 1 </button>-->
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 0;
    base: number = 5;
  
    acumular (valor: number) {
      this.numero += valor;
    }
}