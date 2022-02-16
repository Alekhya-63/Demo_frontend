import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Skills} from "../../skills";
import {ActivatedRoute, Router} from "@angular/router";
import {SkillsService} from "../../skills.service";

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {
  formSkill: FormGroup;
  msg= '';
  skill= Skills;
  name= '';
  newSkillForm: any;

  constructor(private router: Router, private route: ActivatedRoute,
              private service: SkillsService) { }

  ngOnInit(): void {
    let name='';
    this.formSkill = new FormGroup({
      'skillName' : new FormControl(name, [Validators.required]),
    })
  }

  onAddskill() {
   // console.log( this.route.snapshot);
    let userData = JSON.parse(localStorage.getItem('userName'));
console.log( this.route.snapshot);
    // @ts-ignore
    this.skill = new Skills(this.formSkill.value['skillName']);

    // @ts-ignore
    this.service.skillAdd(userData.id, this.skill).subscribe(
      data => {
        console.log("added skill!!!");
        this.router.navigate(['../home'],{relativeTo: this.route});
      },
      error => {
        console.log("denied");
        this.msg="Invalid, please enter valid details";
       // this.router.navigate(['../'],{relativeTo: this.route});
      }

    )
  }


  goBack() {
    this.router.navigate(['../home'],{relativeTo: this.route});
  }
}
