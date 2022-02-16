import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {ActivatedRoute, Router} from "@angular/router";
import { NgModel} from "@angular/forms";
import {NgIf} from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user = new User();
  msg='';
  id : number;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service : RegistrationService, private router: Router) { }

  ngOnInit(): void {
    let name='';
    let pass='';
    // @ts-ignore
    this.loginForm = new FormGroup({
      email: new FormControl(name, [Validators.required,Validators.email] ),
      password: new FormControl(pass,[Validators.required])
    })
  }

  userLogin(){
    this.service.loginUser(this.user).subscribe(
      data => {
        console.log("Accepted");
        console.log(data);
        this.id = data.id;
       this.user = data;
      localStorage.setItem('userName', JSON.stringify(this.user));
        this.router.navigate(['/home'],{relativeTo: this.route});
      },
      error => {
        console.log("denied");
        this.msg="Invalid, please enter valid details";
      }
    )


  }


  completeRegistration() {
    this.router.navigate(['/registration'])
  }


}
