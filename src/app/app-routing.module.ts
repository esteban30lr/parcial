import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './components/owner/owner.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { ComidaComponent } from './components/comida/comida.component';

const routes: Routes = [
  {
    'path': 'owner',
    'component': OwnerComponent
  },
  {
    'path': 'mascota',
    'component': MascotaComponent
  },
  {
    'path': 'comida',
    'component': ComidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
