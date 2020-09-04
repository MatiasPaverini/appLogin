import { Component, OnInit } from '@angular/core';
import { User } from "../../classes/user";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  private _user:User;

  constructor() {
    this._user = new User();
   }

  ngOnInit(): void {
  }

  /**
     * login
     */
    public login() {
      let username:string;
      let password:string;

      username = (document.getElementById('user') as HTMLInputElement).value;
      password = (document.getElementById('pass') as HTMLInputElement).value;
      this._user.verifyUser(username, password);
  }

}
