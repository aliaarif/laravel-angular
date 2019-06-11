import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService) { }
  loggedIn = false;
  ngOnInit() {
  }


  onFormSubmit(e){
  const user = {
      email: e.value.email,
      password: e.value.password
    };
this.loggedIn = this.api.loginUser(user) ? true : false;
    
  }

}
