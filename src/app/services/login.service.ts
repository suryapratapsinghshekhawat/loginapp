import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url="http://localhost:8080/v2";



  generateToken(credentials :any){
    return this.http.post(`${this.url}/token`,credentials)
  }

  loginUser(token:any){
    localStorage.setItem("token",token)
    return true
  }

  isLoggedIn(){
     let token = localStorage.getItem("token")

    if(token==undefined || token===' ' || token==null){
      return false
    }
    else{
      return true; 
    }
  }

  logout(){
    localStorage.removeItem('token')
    return true
  }

  getToken(){
    return localStorage.getItem('token')
  }



}
