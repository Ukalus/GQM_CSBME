import { Component,Output , EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { NgIf } from '@angular/common';
import { NgFor} from '@angular/common';
import { Input } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    LoginPageComponent,
    MatIconModule,
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  
  @Input() user:any;
  @Output() loggedOut: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() ProjectSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  DataServiceService:DataServiceService;
  protectedsLoaded:boolean=false;
  projects:Array<string> = [];
  selectedProject:string = "";
  title:string="Bitte ein Projekt auswählen";
  rollName:String="";

  constructor(){
    this.DataServiceService = new DataServiceService();
  }

  ngOnInit(){
    //wegen dummy data brauchen wir die boolean eig noch nicht aber ich lasse sie mal drinne
    this.projects = this.DataServiceService.getProjekts();
    this.protectedsLoaded = true;
    this.rollName = this.user.getRoleName();
  }

  changeSelectedProject(value:string):void{
    this.title = value;
    if(this.projects.includes(value))
    this.ProjectSelected.emit(true);
    else this.ProjectSelected.emit(false);
  }

  logOut():void{
    this.loggedOut.emit(true);
  }
}
