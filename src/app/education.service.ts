import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Education} from "./Education";

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  displayEdu(id: number) {
    return this.http.get<any>("http://localhost:9381/edu-display/"+id);
  }

  eduDelete(id, eduId: number) {
    return this.http.get<any>("http://localhost:9381/edu-delete/"+id+"/"+eduId);
  }

  addEdu(id, edu: Education) {
    return this.http.post<any>("http://localhost:9381/edu-add/"+id,edu);
  }

  editEdu(id: number, eid: number, edu: Education){
    return this.http.put<any>("http://localhost:9381/edu-edit/"+id+"/"+eid,edu);
  }

  getEduData(id: number, eid: number) {
    return this.http.get<any>("http://localhost:9381/display-edu-byId/"+id+"/"+eid);
  }
}
