import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Experience} from "../../Experience";
import {ActivatedRoute, Router} from "@angular/router";
import {ExperienceService} from "../../experience.service";

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {
   formEditExp: FormGroup;
  Exp: Experience;
 id: number;

  constructor(private route: ActivatedRoute, private router: Router,
              private service: ExperienceService) { }

  ngOnInit(): void {

    let userData = JSON.parse(localStorage.getItem('userName'));

this.service.getExpData(userData.id, this.route.snapshot.params.id).subscribe(
  (result) => {
    this.formEditExp = new FormGroup({
      'expName' : new FormControl(result['companyName'], [Validators.required]),
      'expRole' : new  FormControl(result['role'], [Validators.required]),
      'expType' : new FormControl(result['empType'], [Validators.required]),
      'expStart' : new FormControl(result['startDate'], [Validators.required]),
      'expStop' : new FormControl(result['stopDate'], [Validators.required]),
      'expDes' : new FormControl(result['description'], [Validators.required]),
    })
  }
)

  }

  onEditExp() {

    let userData = JSON.parse(localStorage.getItem('userName'));
    let eid = this.route.snapshot.params.id;
    console.log(eid);
    console.log(this.route.snapshot.paramMap.get('id'));
    let name = this.formEditExp.value['expName'];
    let role = this.formEditExp.value['expRole'];
    let emp = this.formEditExp.value['expType'];
    let start = this.formEditExp.value['expStart'];
    let stop = this.formEditExp.value['expStop'];
    let des = this.formEditExp.value['expDes'];

    this.Exp = new Experience(name, role, emp, start, stop, des);

    // @ts-ignore
    this.service.expEdit(userData.id, eid, this.Exp).subscribe(
      data => {
        console.log("Experience edited!!");
        this.router.navigate(['../../home'],{relativeTo: this.route});
      })
  }


  goBack() {
    this.router.navigate(['../../home'],{relativeTo: this.route});

  }
}
