import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Education} from "../../Education";
import {ActivatedRoute, Router} from "@angular/router";
import {EducationService} from "../../education.service";

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {
  formEditEdu: FormGroup;
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

    this.formEditEdu = new FormGroup({
      'eduName' : new FormControl(name, [Validators.required]),
      'eduDegree' : new FormControl(degree, [Validators.required]),
      'eduField' : new FormControl(field, [Validators.required]),
      'eduStart' : new FormControl(start, [Validators.required]),
      'eduStop' : new FormControl(stop, [Validators.required]),
      'eduGrade' : new FormControl(grade, [Validators.required]),

    })
  }

  onEditEdu() {
    let userData = JSON.parse(localStorage.getItem('userName'));
    let eid = this.route.snapshot.params.id;
    console.log(eid);
    this.edu = new Education(this.formEditEdu.value['eduName'],this.formEditEdu.value['eduDegree'],this.formEditEdu.value['eduField'],this.formEditEdu.value['eduNStart'],
      this.formEditEdu.value['eduStop'],this.formEditEdu.value['eduGrade']);
    // @ts-ignore
    this.service.editEdu(userData.id, eid, this.edu).subscribe(
      data => {
        console.log("Education edited!!");
        this.router.navigate(['../../education'],{relativeTo: this.route});
      }
    )

  }

  goBack() {
    this.router.navigate(['../../education'],{relativeTo: this.route});

  }
}
