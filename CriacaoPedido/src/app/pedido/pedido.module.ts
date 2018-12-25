import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoComponent } from './pedido.component';
import { PedidoRouting } from './pedido.routing.module';

@NgModule({
imports: [CommonModule, FormsModule, ReactiveFormsModule, PedidoRouting],
declarations: [PedidoComponent]
})



export class PedidoModule {

}
