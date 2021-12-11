import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetAuthService } from 'src/app/Services/set-auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean | undefined;

  constructor(
    private setAuth:SetAuthService,
    private router:Router,
    private Token:TokenService
  ) { }

  ngOnInit(): void {
    this.setAuth.authStatus.subscribe(value => this.loggedIn = value)
  }

  logout(e: MouseEvent){
    e.preventDefault();
    this.Token.remove();
    this.setAuth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
