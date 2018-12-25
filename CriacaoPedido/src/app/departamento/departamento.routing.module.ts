import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoComponent } from './departamento.component';
import { DepartamentoCreateUpdateComponent } from './departamento-create-update/departamento-create-update.component';
import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';

const departamentoRouting: Routes = [
  { path: 'departamento', component: DepartamentoComponent },
  { path: 'departamento/novo', component: DepartamentoCreateUpdateComponent },
  { path: 'departamento/:id', component: DepartamentoDetalheComponent },
  { path: 'departamento/:id/edit', component: DepartamentoCreateUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(departamentoRouting)],
  exports: [RouterModule]
})
export class DepartamemtoRoutingModule {}
