import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BsDropdownModule.forRoot(), LoginModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
