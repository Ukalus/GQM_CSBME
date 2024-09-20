import { Component } from '@angular/core';

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.scss'
})
export class GoalComponent {

  private goals:Array<any> = [];

  ngOnInit(){

  }
  constructor(){}

  public setGoals(Goals:Array<any>):void{
    console.log("wird das übehaupt aufgerufen ")
    for(let goal of Goals){
      this.goals.push(goal);
    }
    console.log("die Goals wurden geladen")
    console.log(this.goals);
  }

  public getGoals():Array<any>{
    return this.goals;
  }
}
