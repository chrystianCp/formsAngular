import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miForm') miForm!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 1,
    existencias: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miForm?.controls['producto']?.invalid &&
           this.miForm?.controls['producto']?.touched 
  }
  precioValido(): boolean{
    return this.miForm?.controls['precio']?.invalid &&
           this.miForm?.controls['precio']?.touched
  }


  guardar(){
    console.log('posteo correcto');
    this.miForm.resetForm({
      precio: 0,
      existencias: 0
    });
    
  }

}
