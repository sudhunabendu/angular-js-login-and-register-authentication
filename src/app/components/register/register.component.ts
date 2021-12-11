// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { SetAuthService } from 'src/app/Services/set-auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    name:null,
    email:null,
    password:null,
    password_confirmation:null
  }

  public error = [];

  constructor(
    private Auth:AuthService,
    private Token:TokenService,
    private router:Router,
    private SetAuth:SetAuthService
    ) { }


  onSubmit(){
    // console.log(this.form)
    this.Auth.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error =>this.handleError(error)
    );
  }

  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.SetAuth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error:any){
    this.error = error.error.errors;
  }

  ngOnInit(): void {
  }

}
