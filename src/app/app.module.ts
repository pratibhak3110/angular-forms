import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TodosComponent } from './todos/todos.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';

import { arrRouting } from "./app.routing";


import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ShowtableComponent } from './showtable/showtable.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { HighlighterDirective } from './highlighter.directive';
import { CreditcardDirective } from './creditcard.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AngularformComponent } from './angularform/angularform.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { SignupComponent } from './signup/signup.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TodosComponent,
    ProductComponent,
    EmployeeComponent,
    RegistrationComponent,
    LoginComponent,
    ShowtableComponent,
    ForDemoComponent,
    HighlighterDirective,
    CreditcardDirective,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    HomeComponent,
    PagenotfoundComponent,
    AngularformComponent,
    ButtonsComponent,
    AddtocartComponent,
    SignupComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    arrRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
