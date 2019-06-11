import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }


  onFormSubmit(e){
    if(e.value.password != e.value.rpassword){
      console.log('Password Doesn\'t Match!');
      return false;
    }

    const user = {
      name: e.value.name,
      email: e.value.email,
      password: e.value.password
    };

    //console.log(user);
    this.api.registerUser(user);
    
  }

}
