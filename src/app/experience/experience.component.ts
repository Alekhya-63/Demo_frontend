import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../experience.service";
import {Experience} from "../Experience";
import {addExpressionIdentifier} from "@angular/compiler-cli/src/ngtsc/typecheck/src/comments";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience : Experience[]=[];

  constructor(private router: Router, private route: ActivatedRoute,
              private service: ExperienceService) { }

  ngOnInit(): void {

    let userData = JSON.parse(localStorage.getItem('userName'));
    this.service.displayExp(userData.id).subscribe(
      data=>{
        console.log(data);

        this.experience=data;
      }
    )

  }

  createExp() {
     this.router.navigate(['/newExperience'], {relativeTo: this.route});
  }

  updateExp(eid: number) {
     // @ts-ignore
    this.router.navigate(['/editExperience/'+eid],{relativeTo: this.route});
  }

  deleteExp(eid: number) {
    let userData = JSON.parse(localStorage.getItem('userName'));

    this.service.expDelete(userData.id,eid).subscribe(
      data =>  {
        console.log("deleted skill");
        //this.skill=data;
        this.ngOnInit();
      }
    )
  }
}
