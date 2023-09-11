import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { confirmPasswordValidator } from './component.validator';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit{

   form: FormGroup = new FormGroup({});
   genders:string[] = ["male","female","others"]
  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null,{validators:[Validators.required, Validators.email]}),
      'password': new FormControl(null,{validators:[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$")]}),
      'confirmPassword': new FormControl(null,{validators:[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$")]}),
      'gender':  new FormControl(null,{validators:[Validators.required]}),
      'accept': new FormControl(null,{validators:[Validators.required]}),

    },{validators:[confirmPasswordValidator]})
  }


  handleSubmit(){
    console.log(this.form)
  }

  onCancel(){
    this.form.reset()
  }
}
