import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(private form: FormBuilder,){}

  ngOnInit(): void {
    this.registerForm = this.form.group({
      email: [""],
      password: [""]
    })
  }

  onSubmit(){
    console.log(this.registerForm.value)
  }

}
