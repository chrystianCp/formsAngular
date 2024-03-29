import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

 public nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-Z]+)';
 public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
 

  // constructor() { }

  noPuedeserDeathApex( control: FormControl): ValidationErrors | null{
    const valor: string = control.value?.trim().toLowerCase();
    if( valor === 'deathapex'){      
      return {
        noDeathApex: true
      }
    }
    return null;
  }

  camposIguales( campo1: string, campo2: string ){

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;      
      const pass2 = formGroup.get(campo2)?.value;  

      if( pass1 !== pass2 ){
        formGroup.get(campo2)?.setErrors({noIguales: true})
        return { noIguales: true }
      }      
      //purga por completo todos los errores
      formGroup.get(campo2)?.setErrors(null);
      return null;
    }    
  }

}
