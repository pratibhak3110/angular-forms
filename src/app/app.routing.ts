import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import {  AngularformComponent  } from "./angularform/angularform.component";

import { ParentComponent } from './parent/parent.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { SignupComponent } from './signup/signup.component';
import { DemoComponent } from './demo/demo.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


const arr: Routes=[

  {path: '',component:AngularformComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'button', component: ButtonsComponent},
  {path: 'cart', component: AddtocartComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registration',component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'reactiveform', component: ReactiveformComponent},
  {path:'pagenotfound', component: PagenotfoundComponent},

 // {path: "**", redirectTo: '/pagenotfound'}
];

export const arrRouting= RouterModule.forRoot(arr);

