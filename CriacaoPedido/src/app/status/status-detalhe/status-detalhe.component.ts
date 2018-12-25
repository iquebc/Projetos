import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/Entidades/Status';

@Component({
  selector: 'app-status-detalhe',
  templateUrl: './status-detalhe.component.html',
  styleUrls: ['./status-detalhe.component.css']
})
export class StatusDetalheComponent implements OnInit {
  //#region :: Variaveis Globais
  Status: Status = new Status();
  //#endregion

  constructor() {}

  ngOnInit() {}
}
