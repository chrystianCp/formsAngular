import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit{  

  miForm: FormGroup = this.fb.group({
    nombre:  ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:  ['', [Validators.required, Validators.pattern( this.validatorService.emailPattern )], [this.emailValidator]],
    username:  ['', [Validators.required, this.validatorService.noPuedeserDeathApex ], ],
    password:  ['', [Validators.required, Validators.minLength(6)], ],
    password2:  ['', [Validators.required, Validators.minLength(6) ], ],
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2')]
  })

  

  get emailErrorMsg(): string{
    
    const errors = this.miForm.get('email')?.errors;
    if( errors?.['required'] ){
      return 'El email es obligatorio'
    }else if( errors?.['pattern'] ){
      return 'No es un email valido'
    }else if( errors?.['emailTomado']){
      return 'El email ya tiene una cuenta registrada'
    }    
    return '';
  }

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService
  ){}

  ngOnInit(): void {
    this.miForm.reset({
      nombre: 'Chrystian Cardenas',
      email: 'test1@test.com',
      username: 'chrystian_ecp',
      password: '123456',
      password2: '123456'
    })
    
  }

  

  campoValido(campo: string){
    return this.miForm.get(campo)?.invalid
        && this.miForm.get(campo)?.touched;
  }
  

  submitForm(){
    console.log(this.miForm.value);

    this.miForm.markAllAsTouched();
  }



}
