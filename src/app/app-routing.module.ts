import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HeaderComponent} from "./header/header.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileView} from "./profileView/profileView.component";
import {EducationComponent} from "./education/education.component";
import {ExperienceComponent} from "./experience/experience.component";
import {SkillsComponent} from "./skills/skills.component";
import {SkillsAddComponent} from "./skills/skills-add/skills-add.component";
import {ProfileEditComponent} from "./profileView/profile-edit/profile-edit.component";
import {ProfileAddComponent} from "./profileView/profile-add/profile-add.component";
import {ExperienceAddComponent} from "./experience/experience-add/experience-add.component";
import {ExperienceEditComponent} from "./experience/experience-edit/experience-edit.component";
import {EducationAddComponent} from "./education/education-add/education-add.component";
import {EducationEditComponent} from "./education/education-edit/education-edit.component";
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
  {path: '', component: LoginComponent },
  { path: 'home', component: ViewComponent},
  {path: 'header', component: HeaderComponent },
  {path: 'registration', component: RegisterComponent },
  { path: 'profile', component: ProfileView},

  { path: 'education', component: EducationComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'newExperience', component: ExperienceAddComponent},
  { path: 'editExperience/:id', component: ExperienceEditComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'newSkill', component: SkillsAddComponent},
  { path: 'createProfile', component: ProfileAddComponent},
  { path: 'editProfile', component: ProfileEditComponent},
  { path: 'newEducation', component: EducationAddComponent},
  { path: 'editEducation/:id', component: EducationEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
