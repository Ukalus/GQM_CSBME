import { Component } from '@angular/core';
import { GQMlayerComponent } from './gqmlayer/gqmlayer.component';
import { GqmToolBarComponent } from './gqm-tool-bar/gqm-tool-bar.component';

@Component({
  selector: 'app-gqm-container',
  standalone: true,
  imports: [
    GQMlayerComponent,
    GqmToolBarComponent,
  ],
  templateUrl: './gqm-container.component.html',
  styleUrl: './gqm-container.component.scss'
})

export class GQMContainerComponent {

}
