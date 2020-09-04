import { Component, OnInit } from '@angular/core';
import { User } from "../../classes/user";

import{ Router} from "@angular/router"

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  private _user:User;

  constructor(public router: Router) {
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
      let result: boolean;
      username = (document.getElementById('user') as HTMLInputElement).value;
      password = (document.getElementById('pass') as HTMLInputElement).value;
      result = this._user.verifyUser(username, password);
      if(result){
        this.router.navigate(['bienvenida']);
      }
      else {
        this.router.navigate(['error']);
      }
  }

}
