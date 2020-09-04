import { InjectFlags } from '@angular/core';

export class User {
    private _name:string;
    private _password:string;

    constructor() {

    }

    public get name() : string {
        return this._name;
    }

    
    public get password() : string {
        return this._password
    }

    /**
     * name
     */
    public verifyUser(user:string, pass:string): boolean {
        try {
            this.validateUser(user);
            this.validatePassword(pass);
            return true;
        }
        catch(e) {
            return false;
        }
    }

    private validateUser(username:string) :boolean {
        let flag:boolean = false;
        if(username.length < 1) {
            throw new Error("Usuario inválido");
        }
        else {
            flag = true;
        }

        return flag;
    }

    private validatePassword(password:string) :boolean {
        let flag:boolean = false;
        if(password.length < 8) {
            throw new Error("Password inválida");
        }
        else {
            flag = true;
        }

        return flag;
    }
}
