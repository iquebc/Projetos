import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticarService } from './autenticar.service';
import { Usuario } from '../Entidades/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //#region Variaveis

  formulario: FormGroup;
  usuario: Usuario = new Usuario();

  //#endregion
  constructor(
    private formBuilder: FormBuilder,
    private autenticarService: AutenticarService
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      login: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  AutenticarUsuario() {
    this.usuario.Usuario = this.formulario.value.login;
    this.usuario.Senha = this.formulario.value.senha;
    this.autenticarService.AutenticarUsuario(this.usuario);
  }

  VerificaCampoValido(nomeCampo: string) {
    return (
      !this.formulario.controls[nomeCampo].valid &&
      this.formulario.controls[nomeCampo].touched
    );
  }
}
