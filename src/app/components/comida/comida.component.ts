import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit{
  constructor(public api:ApiService){ }
   titulo = 'COMIDA COMPONENTE'

   ngOnInit(){
    this.api.GetData('Comidums');
  }
}
