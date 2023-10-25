import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { mascotaModel } from 'src/app/models/mascotaModel';
import { ApiService } from 'src/app/service/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styleUrls: ['./mascota-form.component.css']
})
export class MascotaFormComponent {
  constructor(public api: ApiService) { }
  mascota:mascotaModel={
    especie:null,
    nombreDueño:null,
    nombreMascota:null,
    peso:null,
    raza:null
  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    nombreMascota: [null, Validators.required],
    nombreDueño: [null, Validators.required],
    peso:[null,Validators.compose([
      Validators.required,Validators.pattern('^[0-9]+$')
    ])],
    raza: [null, Validators.required],
    especie: [null, Validators.required],
  });

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.mascota.especie = this.addressForm.controls['especie'].value;
      this.mascota.nombreDueño = this.addressForm.controls['nombreDueño'].value;
      this.mascota.nombreMascota = this.addressForm.controls['nombreMascota'].value;
      this.mascota.peso = this.addressForm.controls['peso'].value;
      this.mascota.raza = this.addressForm.controls['raza'].value;

      console.log(this.mascota)
      this.api.PostData("Mascotas", this.mascota).then((res) => {
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
