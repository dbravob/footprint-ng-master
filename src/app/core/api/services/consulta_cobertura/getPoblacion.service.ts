import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';
 
const API_GET_POBLACIONES_LIST_URL_nuevo = API_ROUTE + 'getPoblacionNuevo';
const API_GET_POBLACIONES_LIST_URL = API_ROUTE + 'getPoblacion';
@Injectable()
export class GetConsultaPoblaciones {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    getPoblacionesNuevo(provincia: string) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

        return this.http.post(API_GET_POBLACIONES_LIST_URL_nuevo , {Provincia:provincia} , { headers: httpHeaders} );
        
    }

    getPoblaciones(provincia: string) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

        return this.http.post(API_GET_POBLACIONES_LIST_URL , {Provincia:provincia} , { headers: httpHeaders} );
        
    }
}