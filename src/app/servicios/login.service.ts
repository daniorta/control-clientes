// aqui crearemos un metodo para iniciar sesion mediante email y contraseña
import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private autService: Auth) { }

  login(email: string, password: string) {
    // retoprnamos una promesa
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.autService, email, password)
      .then(datos => resolve(datos))
      .catch(error => reject(error));
      
    });
  }

  // estado de la autenticacion del estado del usuario con authState()
  getAuthState() :Observable<any>{
    return authState(this.autService)
  }

  logout(){
    this.autService.signOut()
  }

}
