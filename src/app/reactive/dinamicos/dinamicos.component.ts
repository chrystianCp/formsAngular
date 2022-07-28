import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  arr: string[] = [];
  miForm: FormGroup = this.fb.group({
    nombre: [ '' , [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array( [
      ['metal gear', Validators.required ],
      ['death stranding', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miForm.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  esCampoValido( campo: string ){
    return this.miForm.controls[campo].errors
          && this.miForm.controls[campo].touched;
  }

  guardar(){
    if( this.miForm.invalid ){
      this.miForm.markAllAsTouched();
      return;
    }
    console.log(this.miForm.value);
    this.miForm.reset();
  }
  agregarJuego(){
    if(this.nuevoFavorito.invalid){ return; }
    
    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required));    
    this.nuevoFavorito.reset();
  }

  borrar(index: number){
    this.favoritosArr.removeAt(index);
  }

}
