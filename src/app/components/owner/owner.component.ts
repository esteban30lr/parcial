import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit{
  constructor(public api:ApiService){ }

  ngOnInit(){
    this.api.GetData('dueño');
  }
  titulo = 'DUEÑO COMPONENTE'
}
