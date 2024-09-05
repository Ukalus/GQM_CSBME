import { HttpClient } from '@angular/common/http';
import { ConfigServiceTs } from './config-service.ts';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })

export class DataServiceTs {
    //
    constructor(
        private  http: HttpClient,
        private ConfigService:ConfigServiceTs,
     ){   
    }
    getGQM(){
       return this.http.get(this.ConfigService.getWebUrl + "getGQM")
    }
}
