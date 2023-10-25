import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { comidaModel } from 'src/app/models/comidaModel';
import { ApiService } from 'src/app/service/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: ['./comida-form.component.css']
})


export class ComidaFormComponent {
  constructor(public api: ApiService) { }
  comida: comidaModel = {
    añoExpedicion: null,
    especieComida: null,
    marcaComida: null,
    precioComida: null,
    referenciaComida: null
  }
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    añoExpedicion: [null, Validators.compose([
      Validators.required, Validators.pattern('^[0-9]+$'),
      Validators.maxLength(4)
    ])],
    referenciaComida: [null, Validators.required],
    marcaComida: [null, Validators.required],
    especieComida: [null, Validators.required],
    precioComida: [null, Validators.compose([
      Validators.required, Validators.pattern('^[0-9]+$')
    ])],
  });


  onSubmit(): void {
    if (this.addressForm.valid) {
      this.comida.añoExpedicion = this.addressForm.controls['añoExpedicion'].value;
      this.comida.precioComida = this.addressForm.controls['precioComida'].value;
      this.comida.especieComida = this.addressForm.controls['especieComida'].value;
      this.comida.marcaComida = this.addressForm.controls['marcaComida'].value;
      this.comida.referenciaComida = this.addressForm.controls['referenciaComida'].value;
      console.log(this.comida)
      this.api.PostData("Comidums", this.comida).then((res) => {
        console.log(res)
        Swal.fire(
          'Registro completo',
          'Ya estás registrado en nuestro sistema...',
          'success'
        )
      }).catch((err) => {
        Swal.fire(
          'Alerta',
          err,
          'error'
        )
      })
    } else {
      Swal.fire(
        'ALERTA',
        'Por favor registre el formulario de manera correcta...',
        'error'
      )
    }
  }
}
