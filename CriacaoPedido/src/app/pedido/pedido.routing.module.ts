import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedido.component';

const pedidoRotas: Routes = [{ path: 'pedido', component: PedidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(pedidoRotas)],
  exports: [RouterModule]
})
export class PedidoRouting {}
