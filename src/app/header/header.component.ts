import {Component, OnInit} from "@angular/core";
import {NgModel} from "@angular/forms";
import {NgIf} from "@angular/common";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RegistrationService} from "../registration.service";
import {User} from "../user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // @ts-ignore
  user = new User();
 id: number;
  msg=""

  constructor(private service: RegistrationService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  userLogout() {

    this.service.logoutUser(this.user).subscribe(
      data => {
        console.log("Accepted");
        this.router.navigate(['/register'])
      },
      error => {
        console.log("denied");
        this.msg="Invalid, please enter valid details";
      })
  }


  logout() {
    window.alert("Logged out successfully");
    this.router.navigateByUrl("/");
  }
}
