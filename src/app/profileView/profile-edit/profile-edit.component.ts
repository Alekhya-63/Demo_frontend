import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Profile} from "../../Profile";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../profile.service";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  formEditProfile : FormGroup;
  profile: Profile;

  constructor(private router: Router, private route: ActivatedRoute,
              private service: ProfileService) { }

  ngOnInit(): void {
    let name = '';
    let title = '';
    let about = '';
    let location = '';

    this.formEditProfile = new FormGroup({
      'profileName' : new FormControl(name, [Validators.required]),
      'profileTitle' : new FormControl(title, [Validators.required]),
      'profileAbout' : new FormControl(about, [Validators.required]),
      'profileLocation' : new FormControl(location, [Validators.required]),
    })
  }

  onEditProfile() {
    let userData = JSON.parse(localStorage.getItem('userName'));
    // @ts-ignore
    let name = this.formEditProfile.value['profileName'];
    let title = this.formEditProfile.value['profileTitle'];
    let about = this.formEditProfile.value['profileAbout'];
    let location = this.formEditProfile.value['profileLocation'];

    this.profile = new Profile(name, title, about, location);

    console.log(this.profile);
    // @ts-ignore
    this.service.profileEdit(userData.id, this.profile).subscribe(
      data => {
        console.log("Profile edited!!");
        this.router.navigate(['../home'],{relativeTo: this.route});
      }
    )

  }

  goBack() {
    this.router.navigate(['../home'],{relativeTo: this.route});
  }
}
