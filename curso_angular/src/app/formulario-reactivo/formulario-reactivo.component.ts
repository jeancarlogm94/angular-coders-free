import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent {
  formState = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get name() {
    return this.formState.get('name') as FormControl;
  }

  get email() {
    return this.formState.get('email') as FormControl;
  }

  process() {
    console.log(this.formState.value);
  }
}
