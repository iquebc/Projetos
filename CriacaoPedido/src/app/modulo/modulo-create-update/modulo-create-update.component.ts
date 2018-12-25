import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Modulo } from 'src/app/Entidades/Modulo';

@Component({
  selector: 'app-modulo-create-update',
  templateUrl: './modulo-create-update.component.html',
  styleUrls: ['./modulo-create-update.component.css']
})
export class ModuloCreateUpdateComponent implements OnInit {

  //#region :: Variaveis Globais
  formulario: FormGroup;
  Modulo: Modulo = new Modulo();
  titulo: String = 'Novo Modulo';
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
      this.Modulo.Id = params['id'] == null ? 0 : params['id'];
    });
    this.titulo = this.Modulo.Id !== 0 ? 'Editar Modulo' : 'Novo Modulo';
    this.formulario = this.formBuilder.group({
      Id: [this.Modulo.Id, Validators.required],
      Descricao: [null, Validators.required]
    });
    this.formulario.controls['Id'].disable();
    this.IsEdit = this.Modulo.Id !== 0;
  }

  Salvar() {
    this.Modulo.Id = this.formulario.getRawValue().Id;
    this.Modulo.Descricao = this.formulario.value.Descricao;
    console.log(this.Modulo);
    this.toastr.success('Dados Salvos com Sucesso!', '');
    this.router.navigate(['/modulo']);
  }

  VerificaCampoValido(nomeCampo: string) {
    return (
      !this.formulario.controls[nomeCampo].valid &&
      this.formulario.controls[nomeCampo].touched
    );
  }

}
