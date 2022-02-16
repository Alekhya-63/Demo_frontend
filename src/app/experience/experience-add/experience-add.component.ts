import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Experience} from "../../Experience";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../../experience.service";

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {

  formExp: FormGroup;
  Exp: Experience;

  constructor(private route: ActivatedRoute, private router: Router,
              private service: ExperienceService) { }

  ngOnInit(): void {
    let name = '';
    let role = '';
    let empType = '';
    let startDate = '';
    let stopDate;
    let des = '';

    this.formExp = new FormGroup({
      'expName' : new FormControl(name, [Validators.required]),
      'expRole' : new  FormControl(role, [Validators.required]),
      'expType' : new FormControl(empType, [Validators.required]),
      'expStart' : new FormControl(startDate, [Validators.required]),
      'expStop' : new FormControl(stopDate, [Validators.required]),
      'expDes' : new FormControl(des, [Validators.required]),
    })
  }

  onAddExp() {

    let userData = JSON.parse(localStorage.getItem('userName'));

    let name = this.formExp.value['expName'];
    let role = this.formExp.value['expRole'];
    let emp = this.formExp.value['expType'];
    let start = this.formExp.value['expStart'];
    let stop = this.formExp.value['expStop'];
    let des = this.formExp.value['expDes'];

    this.Exp = new Experience(name, role, emp, start, stop, des);

    // @ts-ignore
    this.service.expAdd(userData.id,this.Exp).subscribe(
      data => {
      console.log("Experience added!!");
      this.router.navigate(['../home'],{relativeTo: this.route});
    })
  }

  goBack() {
    this.router.navigate(['../home'],{relativeTo: this.route});
  }
}
