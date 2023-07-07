import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "http://localhost:3000";
  
  // aquí controlaremos con true y false, si el usuario a iniciado sesión en la app.
  public logueado:boolean = false;
  public user:User;

  constructor(private http:HttpClient) { 
    this.logueado = false;
  }


  register(user:User):Observable<Object> {

    let url = "http://localhost:3000/register";
    console.log(this.url+ "/register")
    return this.http.post(url, user)

  }

  login(user:User):Observable<Object> {

    return this.http.post(this.url + "/login", user)
  }

  modifyUser (user:User):Observable<Object> {

    return this.http.put('http://localhost:3000/modifyUser', user);
  }

}
