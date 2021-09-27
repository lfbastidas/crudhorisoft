import { Component, OnInit } from '@angular/core';
import {UsuarioService, User} from '../../SERVICES/usuario.service'
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  user: User ={
    id_person:'',
    number_identification:'',
    full_name:'',
    full_last_name:'',
    birthdate:'',
    sex:''
  }
  constructor(private UsuarioService:UsuarioService, private router:Router, private activeRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    const id_entrada =this.activeRoute.snapshot.params.id;
    console.log('id de entrada'+id_entrada)
    if(id_entrada){
      this.UsuarioService.getUnUsuario(id_entrada).subscribe(
        res=>{
        this.user =<User>res;
      },
      err=>console.log(err)
      )
    }
  }
modificar(){
  this.UsuarioService.editUser(this.user.id_person, this.user).subscribe(
    res=>{
      console.log(res);
    },
    err=>console.log(err)
  );

  this.router.navigate(['/inicio']);
}
}
