import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
  
  UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return !this.Token.loggedIn();
  }

  constructor(private Token:TokenService) { }
 
}
