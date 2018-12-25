import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../Entidades/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  private usuarioAutenticado = false;

  mostrarMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  AutenticarUsuario(usuario: Usuario) {
     this.usuarioAutenticado = (usuario.Usuario === 'henrique.ciraulo' && usuario.Senha === 'henrique123');
     if (this.usuarioAutenticado) {
       this.mostrarMenuEmitter.emit(true);
       this.router.navigate(['/pedido']);
     } else {
     this.mostrarMenuEmitter.emit(false);
     }
  }
}
