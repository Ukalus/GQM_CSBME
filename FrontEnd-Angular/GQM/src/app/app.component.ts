import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent, User } from './login-page/login-page.component';
import { NgIf } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GqmComponent } from './gqm/gqm.component';
import { DataServiceService } from './data-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginPageComponent,
    NgIf,
    TopBarComponent,
    GqmComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GQM';
  logedIn:boolean = false;
  projectSelected:boolean = false;
  user:any;
  showQuestions:boolean = false;
  showMetrics:boolean = false
  DataServiceService:DataServiceService;
  goals:Array<any> = [];
  questions:Array<any> = [];
  metrics:Array<any> =  [];

  constructor(){
    this.DataServiceService =  new DataServiceService();
  } 

  ngOnInit(){
    let data = this.DataServiceService.getGoals();
    for(let i = 0; i < data.length ; i++){
      this.goals.push(new item(data[i],"Goals"))
    }
    data = this.DataServiceService.getQustions();
    for(let i = 0; i < data.length ; i++){
      this.questions.push(new item(data[i],"Questions"))
    }
     data =  this.DataServiceService.getMetrics();
    for(let i = 0; i < data.length ; i++){
      this.metrics.push(new item(data[i],"Questions"))
    }
  }
  onLogedInInChange(loggedInStatus: any) {
    if(loggedInStatus)
    this.logedIn = loggedInStatus;
    else{
      
    }
  }
  onUserChange(user:any){
    console.log(user);
    this.user = user;
  } 

  onLoggedOut(loggedOut:any){
    if(loggedOut){
      this.logedIn  = false;
      this.projectSelected = false;
      this.showQuestions = false;
      this.showMetrics = false;
      this.goals.forEach((elm) => {elm['selected'] = false;})
      this.questions.forEach((elm) => {elm['selected'] = false;})
      this.metrics.forEach((elm) => {elm['selected'] = false;})
    } 
  }
  onProjectChange(ProjectSelected:any){
     this.projectSelected = ProjectSelected;
  }
  onGoalSelected(SelectedGoal:any){
      if(SelectedGoal){
        this.questions.forEach((elm) => {elm['selected'] = false;})
        this.metrics.forEach((elm) => {elm['selected'] = false;})
        this.showQuestions = SelectedGoal;
      }else{
        this.showQuestions = SelectedGoal;
        this.showMetrics = SelectedGoal;
      }
     
  }
  onQuestionSelected(SelectedQuestion:any){ 
    if(SelectedQuestion){
      this.showMetrics = SelectedQuestion;
      this.metrics.forEach((elm) => {elm['selected'] = false;})
    }else{
      this.showMetrics = SelectedQuestion;
    }
  }

}
export class item{
  value:string = "";
  selected:boolean = false;
  row:string="";
  
  constructor(value:string,row:string){
    this.value = value;
    this.row = row;
  }
}