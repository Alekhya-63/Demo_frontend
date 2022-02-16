import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SkillsService} from "../skills.service";
import {ProfileService} from "../profile.service";
import {Profile} from "../Profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profileView.component.html',
  styleUrls: ['./profileView.component.css']
})
export class ProfileView {

  // @ts-ignore
  // @ts-ignore
  profile: Profile;
  constructor(private router: Router, private route: ActivatedRoute,
              private service: ProfileService) { }

   ngOnInit(): void{
     let userData = JSON.parse(localStorage.getItem('userName'));
     this.service.displayAdd(userData.id).subscribe(
       data =>{
           console.log(data);
           this.profile = data;
       }
     )
   }
  createProfile() {
    this.router.navigate(['/createProfile'], {relativeTo: this.route});
  }

  updateProfile() {
     this.router.navigate(['/editProfile'],{relativeTo: this.route});
  }
}
