import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';

const API_GET_AGENCIA = API_ROUTE + 'getAgencia';
const API_GET_AGENCIAVisualizar = API_ROUTE + 'getAgenciaVisualizar';
 
@Injectable()
export class GetAgencia {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    getAgenciaList() {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.get(API_GET_AGENCIA, { headers: httpHeaders} );
    }
    getAgenciaVisualizar() {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.get(API_GET_AGENCIAVisualizar, { headers: httpHeaders} );
    }
}