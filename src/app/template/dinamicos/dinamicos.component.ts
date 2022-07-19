import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('miFormDinamico') miFormDinamico!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'chrystian',
    favoritos: [
      {id: 1, nombre: 'fall guys'},
      {id: 2, nombre: 'Apex'},
      {id: 3, nombre: 'Fifa'},
    ]
  }

  nombreValido(): boolean {
    return this.miFormDinamico?.controls['nombre']?.invalid &&
           this.miFormDinamico?.controls['nombre']?.touched 
  }

  guardar(){
    console.log('pooost');
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

}
