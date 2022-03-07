import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../../education.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Education} from "../../Education";

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.css']
})
export class EducationAddComponent implements OnInit {

  formEdu: FormGroup;
  edu : Education;

  constructor(private router: Router, private route: ActivatedRoute,
              private service: EducationService) { }

  ngOnInit(): void {
    let name = '';
    let degree = '';
    let field = '';
    let start = '';
    let stop = '';
    let grade = '';

    this.formEdu = new FormGroup({
      'eduName' : new FormControl(name, [Validators.required]),
      'eduDegree' : new FormControl(degree, [Validators.required]),
      'eduField' : new FormControl(field, [Validators.required]),
      'eduStart' : new FormControl(start, [Validators.required]),
      'eduStop' : new FormControl(stop, [Validators.required]),
      'eduGrade' : new FormControl(grade, [Validators.required]),

    })
  }

  onAddEdu() {
    let userData = JSON.parse(localStorage.getItem('userName'));
    this.edu = new Education(this.formEdu.value['eduName'],this.formEdu.value['eduDegree'],this.formEdu.value['eduField'],this.formEdu.value['eduNStart'],
      this.formEdu.value['eduStop'],this.formEdu.value['eduGrade']);
    // @ts-ignore
    this.service.addEdu(userData.id, this.edu).subscribe(
      data => {
        console.log("Education added!!");
        this.router.navigate(['../home'],{relativeTo: this.route});
      }
    )

  }

  goBack() {
    this.router.navigate(['../home'],{relativeTo: this.route});
  }
}
