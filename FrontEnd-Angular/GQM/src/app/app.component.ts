import { Component, NgModule, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GQMContainerComponent } from './gqm-container/gqm-container.component';
import { LoginServiceTs } from './login-service.ts';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GQMContainerComponent,
    LoginPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'GQM';
}
