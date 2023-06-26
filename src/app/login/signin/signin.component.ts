import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  userLogin: UserLogin = new UserLogin;

  ngOnInit(): void {
  }
}
