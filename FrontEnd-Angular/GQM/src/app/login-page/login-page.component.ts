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
    public name:string = " ";
    password:string = "";
    private nameRegex = /^[A-Za-z]{4,}$/;
    public validLoginInformation:boolean=false;
    private button = document.getElementById('button') as HTMLButtonElement;


    ngOnInit(){
      this.name=""
      this.button = document.getElementById('button') as HTMLButtonElement;
      this.button.disabled = true;

    }

    login():void{
      console.log(this.name,this.password)
      if(this.password === "SYSADM" && this.name === "SYSADM"){       //hardcorded ATM
      console.log("richtiges pwd")
        this.loggedInChange.emit(true);
      }else{          //toggle error animation
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
