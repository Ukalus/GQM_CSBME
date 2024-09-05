import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ViewEncapsulation } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-gqm-tool-bar',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './gqm-tool-bar.component.html',
  styleUrl: './gqm-tool-bar.component.scss'
})
export class GqmToolBarComponent {
   GqmList:Array<any> = ["eins","kein"]
}
