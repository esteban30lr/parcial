import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { OwnerModel } from 'src/app/models/ownerModel';
import { ApiService } from 'src/app/service/api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent {
  constructor(public api: ApiService) { }
  owner:OwnerModel={
    identificacion:null,
    apellido1:null,
    apellido2:null,
    direccion:null,
    nombre:null,
    email:null,
    telefono:null
  }
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    identificacion:[null,Validators.compose([
      Validators.required,Validators.pattern('^[0-9]+$')
    ])],
    nombre:[null, Validators.required],
    apellido:[null, Validators.required], 
    apellido2:[null, Validators.required],
    telefono:[null, Validators.required],
    direccion:[null, Validators.required],
    email:[null,Validators.compose([
      Validators.required,Validators.email
    ])]
  });


  onSubmit(): void {

    if (this.addressForm.valid) {
      this.owner.identificacion = this.addressForm.controls['identificacion'].value;
      this.owner.apellido1 = this.addressForm.controls['apellido'].value;
      this.owner.apellido2 = this.addressForm.controls['apellido2'].value;
      this.owner.direccion = this.addressForm.controls['direccion'].value;
      this.owner.email = this.addressForm.controls['email'].value;
      this.owner.nombre = this.addressForm.controls['nombre'].value;
      this.owner.telefono = this.addressForm.controls['telefono'].value;
      console.log(this.owner)
      this.api.PostData("Dueño", this.owner).then((res) => {
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
