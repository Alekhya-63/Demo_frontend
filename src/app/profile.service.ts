import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "./Profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  profileAdd(id: number, profile: Profile ) {
    return this.http.post<any>("http://localhost:9381/add-profile/"+id, profile);
  }

  displayAdd(id: number) {
    return this.http.get<any>("http://localhost:9381/display-profile/"+id);
  }
  profileEdit(id: number, profile: Profile ) {
    return this.http.put<any>("http://localhost:9381/update-profile/"+id, profile);
  }
}
