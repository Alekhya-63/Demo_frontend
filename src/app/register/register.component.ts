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
  user = new User();
  msg='';
  constructor(private fb: FormBuilder, private service : RegistrationService, private router : Router) { }

  ngOnInit(): void {
    let name='';
    let pass='';
    // @ts-ignore
    this.registerForm = new FormGroup({
      email: new FormControl(name, [Validators.required,Validators.email] ),
      password: new FormControl(pass,[Validators.required])
    })
  }

  userRegistration() {

   // this.user = Object.assign(this.user, this.registerForm.value);

    this.service.registerUser(this.user).subscribe(
      data => {
        console.log("Accepted");
        this.msg="Created account successfully";


       // this.addUser(this.user);

      },
      error =>{
        console.log("denied");
        this.msg=error.error;
      }
    )

   // this.registerForm.reset();
  }


  // addUser(user: User) {
  //   let users = [];
  //   if(localStorage.getItem('User')){
  //     users = JSON.parse(localStorage.getItem('User'));
  //     users = [user, ...users];
  //   }
  //   else{
  //     users = [user];
  //   }
  //   localStorage.setItem('User', JSON.stringify(users));
  // }
}
