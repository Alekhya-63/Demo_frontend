import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public loginUser(user: User):Observable<any>{
   return this.http.post<any>("http://localhost:9381/login",user)
  }

  public registerUser(user: User):Observable<any> {
    return this.http.post<any>("http://localhost:9381/register",user);
  }

  public logoutUser(user: User):Observable<any>  {
    return this.http.post<any>("http://localhost:9381/login",user);
  }
}
