import { Component, OnInit } from '@angular/core';
import { Departamento } from '../Entidades/Departamento';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  listaDepartamento: Departamento[] = [
    { Id: 1, Descricao: 'Departamento 1' },
    { Id: 2, Descricao: 'Departamento 2' },
    { Id: 3, Descricao: 'Departamento 3' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
