import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';

const API_GET_USUARIOS_BY_ID_LIST_URL = API_ROUTE + 'GetUserByID';

@Injectable()
export class GetUsuarioById {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    getUsuario(id:string) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_GET_USUARIOS_BY_ID_LIST_URL, {ID:id} , { headers: httpHeaders} );
    }
}