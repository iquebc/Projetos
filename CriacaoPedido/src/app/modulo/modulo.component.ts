import { Component, OnInit } from '@angular/core';
import { Modulo } from '../Entidades/Modulo';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  listaModulo: Modulo[] = [
    { Id: 1, Descricao: 'Módulo 1' },
    { Id: 2, Descricao: 'Módulo 2' },
    { Id: 3, Descricao: 'Módulo 3' }
  ];

  constructor() { }

  ngOnInit() {

  }

}
