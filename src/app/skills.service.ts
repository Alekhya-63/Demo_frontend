import { Injectable } from '@angular/core';
import {Skills} from "./skills";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {


  constructor(private http: HttpClient) { }

  skillAdd(id: any, skill: Skills) {
    return this.http.post<any>("http://localhost:9381/add-skill/"+id, skill);
  }


  displaySkills(id: number) {
    return this.http.get<Skills[]>("http://localhost:9381/display-skill/"+id);
  }

  skillDelete(id: number, sid: number) {
    return this.http.get<any>("http://localhost:9381/delete-skill/"+id+"/"+sid);
  }


}
