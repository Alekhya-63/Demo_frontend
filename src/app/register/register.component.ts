import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user : User;
  msg='';
  constructor(private fb: FormBuilder, private service : RegistrationService, private router : Router) { }

  ngOnInit(): void {
    let name='';
    let pass='';
    // @ts-ignore
    this.registerForm = new FormGroup({
      'email': new FormControl(name, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')] ),
      'password': new FormControl(pass,[Validators.required, Validators.minLength(6)])
    })
  }

  userRegistration() {

   // this.user = Object.assign(this.user, this.registerForm.value);
    let email = this.registerForm.value['email'];
    let pass = this.registerForm.value['password'];
    this.user = new User(email, pass);
    this.service.registerUser(this.user).subscribe(
      data => {
        console.log("Accepted");
        this.msg="Created account successfully";
      },
      error =>{
        console.log("denied");
        this.msg="Email id already exists";
      }
    )

   this.registerForm.reset();
  }

}
