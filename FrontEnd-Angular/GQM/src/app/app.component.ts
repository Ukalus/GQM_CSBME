import { Component, Input, NgModule, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GQMContainerComponent } from './gqm-container/gqm-container.component';
import { LoginServiceTs } from './login-service.ts';
import { LoginPageComponent } from './login-page/login-page.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GQMContainerComponent,
    LoginPageComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
  title = 'GQM';
  logedIn:boolean = false ; 
  LoginService:Observable<any> =  new Observable((obser)=> {

  })
  constructor(){
    
  }

  ngOnInit(){
    const loginPage = new LoginPageComponent();
    this.logedIn = false;

  }
  onLogedInInChange(loggedInStatus: any) {
    if(loggedInStatus)
    this.logedIn = loggedInStatus;
    else{
      
    }
  }
}
