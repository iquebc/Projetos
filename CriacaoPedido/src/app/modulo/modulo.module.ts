import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModuloComponent } from './modulo.component';
import { ModuloRoutingModule } from './modulo.routing.module';
import { ModuloCreateUpdateComponent } from './modulo-create-update/modulo-create-update.component';
import { ModuloDetalheComponent } from './modulo-detalhe/modulo-detalhe.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ModuloRoutingModule
  ],
  declarations: [ModuloComponent, ModuloCreateUpdateComponent, ModuloDetalheComponent]
})
export class ModuloModule {}
