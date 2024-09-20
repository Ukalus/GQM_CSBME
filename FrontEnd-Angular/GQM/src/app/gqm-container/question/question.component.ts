import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  private questions:Array<any> =  [];

  ngOnInit(){

  }
  public setQuestions(Questions:Array<any>){
    for(let question of Questions){
      this.questions.push(question);
    }
     console.log("Die Questions wurden geladen")
     console.log(this.questions);
  }

  public getQuestions():Array<any>{
    return this.questions;
  }

}
