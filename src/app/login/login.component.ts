import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg='';
  constructor(private service : RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    this.service.loginUser(this.user).subscribe(
      data => {
        console.log("Accepted");
        this.router.navigate(['/header'])
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
