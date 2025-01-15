import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { CanActivate, Router} from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// primeto que tenemos que hacer es implementar la interface de canActivate
export class LoginGuardianService implements CanActivate {

  constructor(
    private authService: Auth,
    private router: Router
  ) { }

  canActivate() :Observable<boolean> {
    return authState(this.authService).pipe(
      map(auth => !!auth || (this.router.navigate(['/login']), false))
    )
  }
}
