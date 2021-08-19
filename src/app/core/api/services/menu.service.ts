import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { API_ROUTE } from '../../../api-config.configuration';

const API_MONITOR_URL = API_ROUTE + 'getMenu';

@Injectable()
export class MenuService {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    getMenu() {
        
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);
        
        return this.http.get(API_MONITOR_URL, { headers: httpHeaders });
    }
}