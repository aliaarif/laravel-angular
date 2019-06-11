import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onFormSubmit(e){
    if(e.value.password != e.value.rpassword){
      console.log('Password Doesn\'t Match!');
    }
  }

}
