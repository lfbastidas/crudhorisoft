import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='/usuarios/obtenerusuarios'
  url2 = '/usuarios/borrarusuario'
  url3 = '/usuarios/crearusuario'
  url4 = '/usuarios/obtenerunusuario'
  url5 ='/usuarios/actualizarusuario'
  constructor(private http: HttpClient) { }

  
  //get usuarios
  getUsuarios()
  {
    return this.http.get(this.url);
  }

  getUnUsuario(id:String){
    return this.http.get(this.url4+'/'+id)
  }
  //Agregar un usuario
  addUser(user:User){
return this.http.post(this.url3,user)
  }
  //Eliminar usuario
  deleteUser(id:string){
    return this.http.delete(this.url2+'/'+id)

  }
//Modificar usuario
editUser(id:string, user:User){
return this.http.put(this.url5+'/'+id, user)
}
}

export interface User {
  id_person:string,
  number_identification?:string,
  full_name?:string;
  full_last_name?:string;
  birthdate?:string,
  sex?:string

}