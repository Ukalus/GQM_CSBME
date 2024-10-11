import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-gqm-item',
  standalone: true,
  imports: [],
  templateUrl: './gqm-item.component.html',
  styleUrls: ['./gqm-item.component.scss'] // Korrigiere styleUrl zu styleUrls
})
export class GQMItemComponent {
  constructor(@Inject('DataItem') private dataItem: any) {
    console.log(dataItem);
  }
}