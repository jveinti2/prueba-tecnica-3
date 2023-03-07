import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioFormComponent } from './components/inventario-form/inventario-form.component';
import { InventarioListComponent } from './components/inventario-list/inventario-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inventario',
    pathMatch: 'full',
  },
  {
    path: 'inventario',
    component: InventarioListComponent,
  },
  {
    path: 'formulario',
    component: InventarioFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
