import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Departamento } from 'src/app/Entidades/Departamento';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-departamento-create-update',
  templateUrl: './departamento-create-update.component.html',
  styleUrls: ['./departamento-create-update.component.css']
})
export class DepartamentoCreateUpdateComponent implements OnInit {

  //#region :: Variaveis Globais
  formulario: FormGroup;
  Departamento: Departamento = new Departamento();
  titulo: String = 'Novo Departamento';
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
      this.Departamento.Id = params['id'] == null ? 0 : params['id'];
    });
    this.titulo = this.Departamento.Id !== 0 ? 'Editar Departamento' : 'Novo Departamento';
    this.formulario = this.formBuilder.group({
      Id: [this.Departamento.Id, Validators.required],
      Descricao: [null, Validators.required]
    });
    this.formulario.controls['Id'].disable();
    this.IsEdit = this.Departamento.Id !== 0;
  }

  Salvar() {
    this.Departamento.Id = this.formulario.getRawValue().Id;
    this.Departamento.Descricao = this.formulario.value.Descricao;
    console.log(this.Departamento);
    this.toastr.success('Dados Salvos com Sucesso!', '');
    this.router.navigate(['/departamento']);
  }

  VerificaCampoValido(nomeCampo: string) {
    return (
      !this.formulario.controls[nomeCampo].valid &&
      this.formulario.controls[nomeCampo].touched
    );
  }

}
