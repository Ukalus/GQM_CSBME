import { Component, Input ,Output , EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  @Output() loggedInChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() UserCahnge : EventEmitter<User> = new EventEmitter<User>();
  
  public name:string = " ";
  password:string = "";
  private nameRegex = /^[A-Za-z]{4,}$/;
  public validLoginInformation:boolean=false;
  private button = document.getElementById('button') as HTMLButtonElement;
  user:User = new User("");


  ngOnInit(){
    this.name=""
    this.button = document.getElementById('button') as HTMLButtonElement;
    this.button.disabled = true;
  }

  login():void{
    if(this.password === "SYSADM" && this.name === "SYSADM"){       //hardcorded ATM
      this.user =  new User("Sysadm");
      this.user.writeRigths = true;
      this.UserCahnge.emit(this.user);
      this.loggedInChange.emit(true);
    } else if (this.name === "QAAnalyst" && this.password === "tsylanAAQ") {
      this.user =  new User("QS-Analyst");
      this.UserCahnge.emit(this.user);
      this.loggedInChange.emit(true);
    } else if (this.name === "Developer" && this.password === "repoleveD") {
      this.user =  new User("Developer");
      this.UserCahnge.emit(this.user);
      this.loggedInChange.emit(true);
    } else  {          //toggle error animation
      this.password = "";
    }

  }

  validateName():void{
    if(this.nameRegex.test(this.name)){
      this.validLoginInformation = true;
      this.button.disabled = false;
    }else{
      this.validLoginInformation = false;
      this.button.disabled = true;
    }
  }

}

export class User {
   roleName:string = "";
   writeRigths:boolean = false;

  constructor(rolename:string){
    this.roleName = rolename 
  }

  getRoleName():string{
    return this.roleName;
  }

  getRights():boolean{
    return this.writeRigths;
  }
}