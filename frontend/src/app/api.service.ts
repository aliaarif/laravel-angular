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
  isUserLoggedIn = this.checkStatus.asObservable();



  constructor(private http: HttpClient) { }

  checkLogin(){
    const token = localStorage.getItem('access_token');
    if(token){
      this.checkStatus.next(true);
    }else{
      this.checkStatus.next(false);  
    }
  }

  registerUser(user: any){
   return this.http
    .post(this.config.apiUrl+'/register', user)
    .subscribe(res => res); 
  }

  loginUser(user: any){
    return this.http
     .post(this.config.apiUrl+'/login', user)
     .subscribe((checkUser:any) => {
       if(checkUser.access_token){
        localStorage.setItem('access_token', checkUser.access_token);
        localStorage.setItem('user', JSON.stringify(checkUser.user));
        return true;
       }
     }); 
   }
}