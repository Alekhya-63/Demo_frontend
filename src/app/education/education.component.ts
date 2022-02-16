import { Component, OnInit } from '@angular/core';
import {Education} from "../Education";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../experience.service";
import {EducationService} from "../education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
   edu : Education[]=[];

  constructor(private router: Router, private route: ActivatedRoute,
              private service: EducationService) { }

  ngOnInit(): void {
    let userData = JSON.parse(localStorage.getItem('userName'));
    this.service.displayEdu(userData.id).subscribe(
      data=>{
        console.log(data);

        this.edu=data;
      }
    )
  }

  createEdu() {
     return this.router.navigate(['/newEducation'],{relativeTo: this.route});
  }

  deleteEdu(eduId: number) {
    let userData = JSON.parse(localStorage.getItem('userName'));

    this.service.eduDelete(userData.id,eduId).subscribe(
      data =>  {
        console.log("deleted skill");
        //this.skill=data;
        this.ngOnInit();
      }
    )
  }

  updateEdu(eduId: number) {
       return this.router.navigate(['/editEducation/'+eduId],{relativeTo: this.route});
  }
}
