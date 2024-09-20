import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GQMContainerComponent } from './gqm-container/gqm-container.component.js';
import { LoginPageComponent } from './login-page/login-page.component.js';
import { ConfigServiceTs } from './config-service.ts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GQMContainerComponent,
    LoginPageComponent,
    CommonModule,
    HttpClientModule // Stelle sicher, dass dies hier importiert ist
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GQM';
  logedIn: boolean = false;

  constructor(private configService: ConfigServiceTs) {
    this.configService.loadConfig().subscribe((config: any) => {
      console.log(config);
    });
  }

  ngOnInit() {
    this.logedIn = false;
  }


  onLogedInInChange(loggedInStatus: any) {
    if(loggedInStatus)
    this.logedIn = loggedInStatus;
    else{
      
    }
  }
}
