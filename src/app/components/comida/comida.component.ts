import { ApiService } from 'src/app/service/api.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ComidaFormComponent } from 'src/app/formularios/comida-form/comida-form.component';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idComida', 'marcaComida','precioComida','especieComida','referenciaComida','opciones'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(); // Inicializar dataSource 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public api: ApiService, public dialog: MatDialog) { }
  titulo = 'VISTA COMIDA';

  ngOnInit() {
    this.api.GetData('Comidums').then((res) => {
      if(res){
        this.dataSource.data = res;
        console.log(this.dataSource.data)
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editar(row: any) {
    // Aquí debes implementar la lógica para editar el elemento
    console.log('Editar', row);
  }
  
  eliminar(row: any) {
    // Aquí debes implementar la lógica para eliminar el elemento
    console.log('Eliminar', row);
  }

  openDialog(){
    this.dialog.open(ComidaFormComponent,{
    });
  }

}
