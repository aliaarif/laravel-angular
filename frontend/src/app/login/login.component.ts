import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private route: Router) { }
  loggedIn = false;
  ngOnInit() {
  }


  onLoginUser(e) {
    const user = {
      email: e.value.email,
      password: e.value.password
    };

    this.api.isUserLoggedIn.subscribe(val => {
      this.loggedIn = val;
      this.route.navigate(['/dashboard']);
    });

  }

}
