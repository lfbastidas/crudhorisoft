import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuarioService, User} from '../../SERVICES/usuario.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarUsuarios: User[] | undefined;

  constructor(private UsuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

listarUsuarios(){
  this.UsuarioService.getUsuarios().subscribe(
    res=> {console.log(res)
      this.ListarUsuarios=<any>res;
    },
    err => console.log(err)
  );
}
eliminar(id:string)
{
  this.UsuarioService.deleteUser(id).subscribe(
    res=>{
      console.log('User eliminado');
      this.listarUsuarios();
    },
    err=> console.log(err)
    );
}

modificar(id:string){
  this.router.navigate(['/edit/'+id]);
}


}
