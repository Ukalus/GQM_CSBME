import { Component } from '@angular/core';
import { GQMItemComponent } from '../gqm-item/gqm-item.component';

@Component({
  selector: 'app-metric',
  standalone: true,
  imports: [],
  templateUrl: './metric.component.html',
  styleUrl: './metric.component.scss'
})
export class MetricComponent {

  private metrics:Array<GQMItemComponent> = [];

  public  setMetrics(metrics:Array<any>):void{
    for(let metric of metrics){
      this.metrics.push(new GQMItemComponent(metric));
    }
    console.log("Hier wurden jetzt die Metrics in MetricComponent gesetzt");
    console.log(metrics);
  }

  public getMetrics():Array<any>{
    return this.metrics
  }
}
