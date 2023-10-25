import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MascotaFormComponent } from 'src/app/formularios/mascota-form/mascota-form.component';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['idMascota', 'especie', 'nombreMascota', 'peso', 'raza'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(); // Inicializar dataSource 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public api: ApiService, public dialog: MatDialog) { }

  titulo = 'MASCOTA COMPONENTE'

  ngOnInit() {
    this.api.GetData('Mascotas').then((res) => {
      if (res) {
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

  openDialog() {
    this.dialog.open(MascotaFormComponent, {
    });
  }
}
