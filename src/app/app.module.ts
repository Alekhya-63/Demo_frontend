import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileView} from "./profileView/profileView.component";
import {HeaderComponent} from "./header/header.component";
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { SkillsAddComponent } from './skills/skills-add/skills-add.component';
import { ProfileAddComponent } from './profileView/profile-add/profile-add.component';
import { ProfileEditComponent } from './profileView/profile-edit/profile-edit.component';
import { ExperienceAddComponent } from './experience/experience-add/experience-add.component';
import { ExperienceEditComponent } from './experience/experience-edit/experience-edit.component';
import { EducationAddComponent } from './education/education-add/education-add.component';
import { EducationEditComponent } from './education/education-edit/education-edit.component';
import { ViewComponent } from './view/view.component';
//import { SkillDeleteComponent } from './skills/skill-delete/skill-delete.component';

const appRoutes: Routes = [
  // { path: 'profile', component: ProfileView},
  //
  // { path: 'education', component: EducationComponent},
  // { path: 'experience', component: ExperienceComponent},
  // { path: 'skills', component: SkillsComponent},
  // { path: 'newSkill', component: SkillsAddComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    ProfileView,
    HeaderComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    LoginComponent,
    RegisterComponent,
    SkillsAddComponent,
    ProfileAddComponent,
    ProfileEditComponent,
    ExperienceAddComponent,
    ExperienceEditComponent,
    EducationAddComponent,
    EducationEditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
