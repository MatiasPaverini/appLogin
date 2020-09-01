import { Component, OnInit } from '@angular/core';
import { User } from "../../classes/user";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  private _user:User;

  constructor() { }

  ngOnInit(): void {
  }

  /**
     * login
     */
    public login(user:string, password:string) {
      this._user.verifyUser(user, password);
  }

}
