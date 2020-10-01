import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  invalidNamesarr:string[]=['hello','angular'];
  constructor() { }

  ngOnInit(): void {    this.signupForm= new FormGroup({
      name: new FormControl(null,[Validators.required,
            Validators.minLength(5),
            this.invalidNameValidation.bind(this)
          ]),

      email: new FormControl(null, [Validators.required,
            Validators.email,]),

      passwordgroup: new FormGroup({
        password: new FormControl(null,[Validators.required]),
        confirmpassword: new FormControl(null,[Validators.required]),
      },[this.matchpassword.bind(this)]),

      phone: new FormControl(null),
      notification: new FormControl('email'),
      hobbies: new  FormArray([]),
    });

    this.signupForm.get('notification').valueChanges.subscribe((x)=>this.setNotificationValidation(x));
  }

  setNotificationValidation(value:string){
      const phoneControl=this.signupForm.get('phone');
      const emailControl= this.signupForm.get('emai');

      if(value=='phone'){
        phoneControl.setValidators(Validators.required);
        emailControl.clearValidators();
        emailControl.setValidators(Validators.email);
      }
      else{
        emailControl.setValidators([Validators.required,Validators.email]);
        phoneControl.clearValidators();
      }
      phoneControl.updateValueAndValidity();
      emailControl.updateValueAndValidity();
  }

  onSignup()
  {
    console.log(this.signupForm);
  }

  invalidNameValidation(control: AbstractControl):{[key:string]:boolean}{
      if(this.invalidNamesarr.indexOf(control.value)>=0){
        return{invalidName:true}
      }
      return null;
  }
  matchpassword(control: AbstractControl):{[key:string]:boolean}{
      if(control.get('password').value != control.get('confirmpassword').value){
        return {passwordMatchError: true};
      }
      return null;
  }


  getControls(){
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }
  onAddHobbiesClick(){
    if(this.signupForm.get('hobbies').value.length<3){
    const control= new FormControl(null);
    (this.signupForm.get("hobbies") as FormArray).push(control);
    }
    else{
      alert("Max limit is 3");
    }
  }

  onRemoveHobbiesClick(i){
    (this.signupForm.get('hobbies') as FormArray).removeAt(i);
  }
}


