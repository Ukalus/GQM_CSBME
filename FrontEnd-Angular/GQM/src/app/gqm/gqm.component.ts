import { Component } from '@angular/core';
import { Input,Output ,EventEmitter } from '@angular/core';
import { NgIf,NgFor,NgStyle } from '@angular/common';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';
import { item } from '../app.component';

@Component({
  selector: 'app-gqm',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgStyle
  ],
  templateUrl: './gqm.component.html',
  styleUrl: './gqm.component.scss'
})
export class GqmComponent {

  @Input() user:any;
  @Input() rowName:any;
  @Input() isShown:any;
  @Input() data:Array<any> = [];

  @Output() GoalSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() QuestionSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  DataServiceService:DataServiceService;
  items:Array<any> = [];
  offset:number = 0;
  hasToolbar:boolean = true;

  constructor(){
    this.DataServiceService = new DataServiceService()
  }
  
  ngOnInit(){
    if(this.rowName == "Goal" && this.user['roleName'] !== 'Sysadm')  this.hasToolbar = false;
    this.items = [];
    switch(this.rowName){
      case "Goal":
        this.getGoals()
        break
      case "Question":
        this.getQuestions()
        break  
      case "Metric":
      this.getMetrics()
        break
    }
  }

  getGoals(){ 
   for(let i = 0+this.offset; i < this.data.length;i++){
    if(i < 7+this.offset){
      this.items.push(this.data[i])
    }
   }
  }
  getQuestions(){ 
    for(let i = 0+this.offset; i < this.data.length;i++){
      if(i < 7 + this.offset){
        this.items.push(this.data[i])
      }
     }
   }
  getMetrics(){ 
    for(let i = 0+this.offset; i < this.data.length;i++){
      if(i < 7 + this.offset){
        this.items.push(this.data[i])
      }
     }
  }
  selectedItem(item:item){
    console.log(item)
    for(let items of this.items){
      items.selected = (items == item);
    }
    switch(item.row){
      case "Goals":
        this.GoalSelected.emit(true);
      break;
      case "Questions":
        this.QuestionSelected.emit(true);
      break;  
    }
  }
  selectedNext(){
    this.offset += 7;
    switch(this.rowName){
      case "Goal":
        this.items = [];
        this.GoalSelected.emit(false);
        this.getGoals()
      break
      case "Question":
        this.items = [];
        this.QuestionSelected.emit(false);
        this.getQuestions();
      break
      case "Metric":
        this.items = [];
        this.getMetrics();
      break
    }
  }
  selectedPrev(){
    this.offset -= 7;
    switch(this.rowName){
      case "Goal":
        this.items = [];
        this.GoalSelected.emit(false);
        this.getGoals()
      break
      case "Question":
        this.items = [];
        this.QuestionSelected.emit(false);
        this.getQuestions();
      break
      case "Metric":
        this.items = [];
        this.getMetrics();
      break
    }
  }
}
