import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  //das hier ist alles dummy data
  getProjekts(){
    return ["Projekt1","Projekt2"];
  }
  getGoals(){
    return ["Goal1","Goal2","Goal3","test","noch eins","Goal4","Goal5","Goal6","Goal7","Goal8"];
  }
  getQustions(){
    return ["Question1","Question2","Question3","Question4","Question5","Question6","Question7","Question8"];
  }
  getMetrics(){
    return ["Metric1","Metric2","Metric3"];
  }
}
