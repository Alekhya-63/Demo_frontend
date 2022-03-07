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

    let userData = JSON.parse(localStorage.getItem('userName'));

   this.service.getEduData(userData.id,  this.route.snapshot.params.id).subscribe(
     (result) => {
       this.formEditEdu = new FormGroup({
         'eduName' : new FormControl(result['eduName'], [Validators.required]),
         'eduDegree' : new FormControl(result['degree'], [Validators.required]),
         'eduField' : new FormControl(result['field'], [Validators.required]),
         'eduStart' : new FormControl(result['eduStart'], [Validators.required]),
         'eduStop' : new FormControl(result['eduStop'], [Validators.required]),
         'eduGrade' : new FormControl(result['grade'], [Validators.required]),

       })
     }
   )

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
        this.router.navigate(['../../home'],{relativeTo: this.route});
      }
    )

  }

  goBack() {
    this.router.navigate(['../../home'],{relativeTo: this.route});
  }
}
