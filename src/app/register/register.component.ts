import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  msg='';
  constructor(private service : RegistrationService, private router : Router) { }

  ngOnInit(): void {
  }

  userRegistration() {

    this.service.registerUser(this.user).subscribe(
      data => {
        console.log("Accepted");
        this.msg="Created account successfully";
      },
      error =>{
        console.log("denied");
        this.msg=error.error;
      }
    )
  }
}
