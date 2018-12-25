import { Component, OnInit } from '@angular/core';
import { Status } from '../Entidades/Status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  listaStatus: Status[] = [
    { Id: 1, Descricao: 'Solicitado' },
    { Id: 2, Descricao: 'Em análise' },
    { Id: 3, Descricao: 'Em Desenvolvimento' },
    { Id: 4, Descricao: 'Em Homologação' },
    { Id: 5, Descricao: 'Validado' }
  ];

  constructor() {}

  ngOnInit() {}
}
