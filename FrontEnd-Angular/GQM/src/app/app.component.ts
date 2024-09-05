import { Component, NgModule, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GQMContainerComponent } from './gqm-container/gqm-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GQMContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'GQM';
}
