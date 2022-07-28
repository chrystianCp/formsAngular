import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miForm: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080ti'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5),
  // })
  miForm: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.required, Validators.min(0)]],
    existencias: [ , [Validators.required, Validators.min(0)]],    
  });


  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miForm.setValue({
      nombre: 'RTX 4080ti',
      precio: 1800,
      existencias: 10
    })
  }

  campoEsValido( campo: string ){
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
}
