import { user } from '../src/app/models/user.model';
import { login } from '../src/app/models/login.model';
import { reg } from '../src/app/models/reg.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
login: login;
reg: reg;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.login = new login();
this.reg = new reg();
//CREATE NEW DM INSTANCE
    }
}
