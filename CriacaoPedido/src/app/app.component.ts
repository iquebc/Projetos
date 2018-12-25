import { Component, OnInit } from '@angular/core';
import { AutenticarService } from './login/autenticar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Criação de Pedidos';

  mostrarMenu = false;

  constructor(private autenticarService: AutenticarService) {}

  ngOnInit() {
    this.autenticarService.mostrarMenuEmitter.subscribe(
      mostrar => (this.mostrarMenu = mostrar)
    );
  }
}
