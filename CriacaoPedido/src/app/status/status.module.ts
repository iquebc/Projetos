import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StatusRoutingModule } from './status.routing.module';
import { StatusComponent } from './status.component';
import { StatusDetalheComponent } from './status-detalhe/status-detalhe.component';
import { StatusCreateUpdateComponent } from './status-create-update/status-create-update.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    StatusRoutingModule
  ],
  declarations: [
    StatusComponent,
    StatusDetalheComponent,
    StatusCreateUpdateComponent
  ]
})
export class StatusModule {}
