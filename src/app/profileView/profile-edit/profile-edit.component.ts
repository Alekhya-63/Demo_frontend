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

    let userData = JSON.parse(localStorage.getItem('userName'));
  this.service.getProfileData(userData.id).subscribe(
    (result) => {
      this.formEditProfile = new FormGroup({
        'profileName' : new FormControl(result['name'], [Validators.required]),
        'profileTitle' : new FormControl(result['title'], [Validators.required]),
        'profileAbout' : new FormControl(result['about'], [Validators.required]),
        'profileLocation' : new FormControl(result['location'], [Validators.required]),
        'profilePhone' : new FormControl(result['phoneNo'], [Validators.required]),
        'profileEmail' : new FormControl(result['email'], [Validators.required]),
      })
    }
  )

  }

  onEditProfile() {
    let userData = JSON.parse(localStorage.getItem('userName'));
    // @ts-ignore
    let name = this.formEditProfile.value['profileName'];
    let title = this.formEditProfile.value['profileTitle'];
    let about = this.formEditProfile.value['profileAbout'];
    let location = this.formEditProfile.value['profileLocation'];
    let phoneNo = this.formEditProfile.value['profilePhone'];
    let email = this.formEditProfile.value['profileEmail'];

    this.profile = new Profile(name, title, about, location, phoneNo, email);

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
