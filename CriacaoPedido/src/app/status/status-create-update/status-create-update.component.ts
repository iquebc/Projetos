import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Status } from 'src/app/Entidades/Status';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-status-create-update',
  templateUrl: './status-create-update.component.html',
  styleUrls: ['./status-create-update.component.css']
})
export class StatusCreateUpdateComponent implements OnInit {
  //#region :: Variaveis Globais
  formulario: FormGroup;
  Status: Status = new Status();
  titulo: String = 'Novo Status';
  IsEdit: Boolean;
  //#endregion

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Status.Id = params['id'] == null ? 0 : params['id'];
    });
    this.titulo = this.Status.Id !== 0 ? 'Editar Status' : 'Novo Status';
    this.formulario = this.formBuilder.group({
      Id: [this.Status.Id, Validators.required],
      Descricao: [null, Validators.required]
    });
    this.formulario.controls['Id'].disable();
    this.IsEdit = this.Status.Id !== 0;
  }

  Salvar() {
    this.Status.Id = this.formulario.getRawValue().Id;
    this.Status.Descricao = this.formulario.value.Descricao;
    console.log(this.Status);
    this.toastr.success('Dados Salvos com Sucesso!', '');
    this.router.navigate(['/status']);
  }

  VerificaCampoValido(nomeCampo: string) {
    return (
      !this.formulario.controls[nomeCampo].valid &&
      this.formulario.controls[nomeCampo].touched
    );
  }
}
