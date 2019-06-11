import { Injectable } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  config = new Configuration();
  checkStatus = new BehaviorSubject<boolean>(false); 
  isUseLoggedIn = this.checkStatus.asObservable();


  constructor(private http: HttpClient) { }

  checkLogin(){
    const token = localStorage.getItem('access_token', )
  }
  registerUser(user: any){
   return this.http
    .post(this.config.apiUrl+'/register', user)
    .subscribe(res => res); 
  }

  loginUser(user: any){
    return this.http
     .post(this.config.apiUrl+'/login', user)
     .subscribe(res => res); 
   }
}
