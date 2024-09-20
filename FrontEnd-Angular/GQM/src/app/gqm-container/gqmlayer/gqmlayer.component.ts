import { Component } from '@angular/core';
import { GoalComponent } from '../goal/goal.component';
import { QuestionComponent } from '../question/question.component';
import { MetricComponent } from '../metric/metric.component';

@Component({
  selector: 'app-gqmlayer',
  standalone: true,
  imports: [
    GoalComponent,
    QuestionComponent,
    MetricComponent,
  ],
  templateUrl: './gqmlayer.component.html',
  styleUrl: './gqmlayer.component.scss'
})
export class GQMlayerComponent {
  private Goals:Array<GoalComponent> = [];
  private Questions:Array<QuestionComponent> = [];
  private Metrics:Array<MetricComponent> = [];

  constructor(){

  }

}
