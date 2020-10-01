import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  signupForm: FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.signupForm= new FormGroup({
     name: new FormControl(null,[Validators.required]),
     email: new FormControl(null),
    })
  }

  OnSignup(){
    console.log(this.signupForm);
  }

}
