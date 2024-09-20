import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class ConfigServiceTs {
    private WebURL:string = "http://localhost:8080/";
    private config: any = null;


    constructor(private http: HttpClient) { }

    public getWebUrl(){
        return this.WebURL;
    }

    getConfig(): any {
        return this.config;
    }

    public loadConfig(): Observable<any> {
        return this.http.get('./assets/env.json');
    }

      
}
