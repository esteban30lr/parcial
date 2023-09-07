import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit{
  constructor(public api:ApiService){ }

  titulo = 'MASCOTA COMPONENTE'

  ngOnInit(){
    this.api.GetData('Mascotas');
  }
}
