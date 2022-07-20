import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  miForm: FormGroup = new FormGroup({
    'nombre': new FormControl('RTX 4080ti'),
    'precio': new FormControl(1500),
    'existencias': new FormControl(5),
  })


  constructor() { }

  ngOnInit(): void {
  }

}
