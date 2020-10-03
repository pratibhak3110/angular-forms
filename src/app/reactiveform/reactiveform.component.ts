import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signupForm= new FormGroup({
      name: new FormControl(null,[Validators.required,Validators.minLength(5)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
    });

  }

  onSignup(){
    console.log(this.signupForm);
  }

}
