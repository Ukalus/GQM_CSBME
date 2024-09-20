import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GQMlayerComponent } from './gqmlayer/gqmlayer.component';
import { GqmToolBarComponent } from './gqm-tool-bar/gqm-tool-bar.component';
import { DataServiceTs } from '../data-service.ts';
import { GoalComponent } from './goal/goal.component';
import { QuestionComponent } from './question/question.component';
import { MetricComponent } from './metric/metric.component';

@Component({
  selector: 'app-gqm-container',
  standalone: true,
  imports: [
    GQMlayerComponent,
    GqmToolBarComponent,
    GoalComponent,
    QuestionComponent,
    MetricComponent,
  ],
  templateUrl: './gqm-container.component.html',
  styleUrls: ['./gqm-container.component.scss'] // Renamed from styleUrl to styleUrls
})
export class GQMContainerComponent implements AfterViewInit {
  
  // Use ViewChild to get access to child components
  @ViewChild(GoalComponent) goalComponent!: GoalComponent;
  @ViewChild(QuestionComponent) questionComponent!: QuestionComponent;
  @ViewChild(MetricComponent) metricComponent!: MetricComponent;

  constructor(private dataService: DataServiceTs) {}

  ngOnInit() {
    console.log('ngOnInit funktioniert');
  }

  ngAfterViewInit() {
    // Interact with child components after they have been initialized
    this.dataService.getGoals().subscribe((result: any) => {
      console.log('Goals Result:', result);
      if (result) {
        console.log("jaa die Goals sind da ")
        this.goalComponent.setGoals(result);
      }
    });

    this.dataService.getQuestions().subscribe((result: any) => {
      console.log('Questions Result:', result);
      if (result && this.questionComponent) {
        this.questionComponent.setQuestions(result);
      }
    });

    this.dataService.getMetrics().subscribe((result: any) => {
      console.log('Metrics Result:', result);
      if (result && this.metricComponent) {
        this.metricComponent.setMetrics(result);
      }
    });
  }
}
