import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloComponent } from './modulo.component';
import { ModuloDetalheComponent } from './modulo-detalhe/modulo-detalhe.component';
import { ModuloCreateUpdateComponent } from './modulo-create-update/modulo-create-update.component';

const moduloRoutes: Routes = [
  { path: 'modulo', component: ModuloComponent },
  { path: 'modulo/novo', component: ModuloCreateUpdateComponent },
  { path: 'modulo/:id', component: ModuloDetalheComponent },
  { path: 'modulo/:id/edit', component: ModuloCreateUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(moduloRoutes)],
  exports: [RouterModule]
})
export class ModuloRoutingModule {}
