import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Experience} from "./Experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }


  expAdd(id: number, Exp: Experience) {
    return this.http.post<any>("http://localhost:9381/add-exp/"+id, Exp);
  }

  displayExp(id: number) {
    return this.http.get<any>("http://localhost:9381/display-exp/"+id)
  }

  expDelete(id: number, eid: number) {
    return this.http.get<any>("http://localhost:9381/delete-exp/"+id+"/"+eid);
  }

  expEdit(id: number, eid: number, Exp: Experience) {
    return this.http.put<any>("http://localhost:9381/edit-exp/"+id+"/"+eid, Exp);
  }
}
