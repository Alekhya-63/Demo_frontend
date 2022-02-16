import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validator, Validators} from "@angular/forms";
import { NgForm} from "@angular/forms";
import {Skills} from "../skills";
import {ActivatedRoute, Router} from "@angular/router";
import {SkillsService} from "../skills.service";
import {SkillsAddComponent} from "./skills-add/skills-add.component";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
 formSkill: FormGroup;
  msg= '';
  skill: Skills[]=[];
  name= '';
  id: number;
  newSkillForm: any;


  constructor(private router: Router, private route: ActivatedRoute,
              private service: SkillsService) { }

  ngOnInit(): void {
    let userData = JSON.parse(localStorage.getItem('userName'));
    this.service.displaySkills(userData.id).subscribe(
      data=>{
        console.log(data);

        this.skill=data;
      }
    )

  }
  createNew() {
    this.router.navigate(['/newSkill'], {relativeTo: this.route});
  }

  deleteSkill(sid: number) {
    let userData = JSON.parse(localStorage.getItem('userName'));
    //let sid = this.skill1.id;
    this.service.skillDelete(userData.id,sid).subscribe(
      data =>  {
        console.log("deleted skill");
        //this.skill=data;
        this.ngOnInit();
      }
    )
  }
}
