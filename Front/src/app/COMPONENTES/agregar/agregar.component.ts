import { Component, OnInit } from '@angular/core';
import {UsuarioService, User} from '../../SERVICES/usuario.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

user: User ={
  id_person: '',
  number_identification:'',
  full_name:'',
  full_last_name:'',
  birthdate:'',
  sex:''
}

  constructor(private UsuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }
agregar(){
  this.UsuarioService.addUser(this.user).subscribe()
  this.router.navigate(['/inicio'])

}
}
