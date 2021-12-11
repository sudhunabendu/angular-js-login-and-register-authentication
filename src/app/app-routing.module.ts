import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';

const routes: Routes = [

{
  path:'',
  component: HomeComponent,
  canActivate: [AfterLoginService] 
},

{
  path:'login',
  component:LoginComponent,
  canActivate: [BeforeLoginService]
},

{
  path:'profile',
   component:ProfileComponent,
   canActivate: [AfterLoginService] 

},

{
  path:'register',
  component:RegisterComponent,
  canActivate: [BeforeLoginService]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
