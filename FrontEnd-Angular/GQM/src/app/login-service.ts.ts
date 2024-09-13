import { HttpClient } from '@angular/common/http';
import { ConfigServiceTs } from './config-service.ts';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginServiceTs {
    constructor(
        private  http: HttpClient,
        private ConfigService:ConfigServiceTs,
     ){   
           
    }
    ngOnInit(){
            
    }     
}
