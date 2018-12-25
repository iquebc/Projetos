import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartamemtoRoutingModule } from './departamento.routing.module';
import { DepartamentoComponent } from './departamento.component';
import { DepartamentoCreateUpdateComponent } from './departamento-create-update/departamento-create-update.component';
import { DepartamentoDetalheComponent } from './departamento-detalhe/departamento-detalhe.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DepartamemtoRoutingModule
  ],
  declarations: [DepartamentoComponent, DepartamentoCreateUpdateComponent, DepartamentoDetalheComponent]
})
export class DepartamentoModule {}
