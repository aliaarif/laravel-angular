import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  name = '';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.isUserLoggedIn.subscribe(val => {
      if(val){
        this.isLoggedIn = val;
        const user  = JSON.parse(localStorage.getItem('user'));
        this.name = user.name; 
      }
      
    });
  }

}
