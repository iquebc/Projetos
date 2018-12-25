import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status.component';
import { StatusCreateUpdateComponent } from './status-create-update/status-create-update.component';
import { StatusDetalheComponent } from './status-detalhe/status-detalhe.component';

const statusRouting: Routes = [
  { path: 'status', component: StatusComponent },
  { path: 'status/novo', component: StatusCreateUpdateComponent },
  { path: 'status/:id', component: StatusDetalheComponent },
  { path: 'status/:id/edit', component: StatusCreateUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(statusRouting)],
  exports: [RouterModule]
})
export class StatusRoutingModule {}
