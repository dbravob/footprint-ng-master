import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';
 
const API_GET_PROVINCIAS_URL = API_ROUTE + 'getProvincias';
const API_GET_PROVINCIAS_URLNuevo = API_ROUTE + 'getProvinciasNuevo';

@Injectable()
export class GetConsultaProvincias {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    getProvinciasNuevo() {
        
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

        return this.http.get(API_GET_PROVINCIAS_URLNuevo , { headers: httpHeaders} );
        
    }

    getProvincias() {
        
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

        return this.http.get(API_GET_PROVINCIAS_URL , { headers: httpHeaders} );
        
    }
}