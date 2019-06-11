import { Injectable } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  config = new Configuration(); 
  constructor(private http: HttpClient) { }
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
