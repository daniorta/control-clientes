import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

  isLoggedIn: boolean = false;
  loggedInUser: string | null = null; // almacena el email.
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  // este metodo se carga directamente despues del constructor
  ngOnInit() {
    this.loginService.getAuthState().subscribe(usuario => {
      if (usuario) {
        this.isLoggedIn = true;
        this.loggedInUser = usuario.email;
      } else{
        this.isLoggedIn = false;
      }
    })
  }

  logout(){
    this.loginService.logout()
    this.isLoggedIn = false;
    this.router.navigate(['/login'])
  }





}
