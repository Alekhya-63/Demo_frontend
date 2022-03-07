import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../profile.service";
import {Profile} from "../../Profile";

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.css']
})
export class ProfileAddComponent implements OnInit {

  formProfile: FormGroup;
  profile: Profile;

  constructor(private router: Router, private route: ActivatedRoute,
              private service: ProfileService) { }


  ngOnInit(): void {
    let name = '';
    let title = '';
    let about = '';
    let location = '';
    let phoneNo = '';
    let email = '';
    this.formProfile = new FormGroup({
      'profileName' : new FormControl(name, [Validators.required]),
      'profileTitle' : new FormControl(title, [Validators.required]),
      'profileAbout' : new FormControl(about, [Validators.required]),
      'profileLocation' : new FormControl(location, [Validators.required]),
      'profilePhone' : new FormControl(phoneNo, [Validators.required]),
      'profileEmail' : new FormControl(email, [Validators.required]),
    })
  }

  onAddProfile() {
    let userData = JSON.parse(localStorage.getItem('userName'));
    // @ts-ignore
    let name = this.formProfile.value['profileName'];
    let title = this.formProfile.value['profileTitle'];
    let about = this.formProfile.value['profileAbout'];
    let location = this.formProfile.value['profileLocation'];
    let phoneNo = this.formProfile.value['profilePhone'];
    let email = this.formProfile.value['profileEmail'];

    this.profile = new Profile(name, title, about, location, phoneNo, email);

    console.log(this.profile);
    // @ts-ignore
    this.service.profileAdd(userData.id, this.profile).subscribe(
      data => {
         console.log("Profile created!!");
        this.router.navigate(['../home'],{relativeTo: this.route});
      }
    )

  }

  goBack() {
    return this.router.navigate(['../home'],{relativeTo: this.route});
  }
}
