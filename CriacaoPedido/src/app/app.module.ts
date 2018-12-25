import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routing.module';
import { PedidoModule } from './pedido/pedido.module';
import { StatusModule } from './status/status.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { ModuloModule } from './modulo/modulo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    PedidoModule,
    StatusModule,
    DepartamentoModule,
    ModuloModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
