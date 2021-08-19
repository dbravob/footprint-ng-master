import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';
 
const API_GET_USER_LIST_URL = API_ROUTE + 'getUsuarios';

@Injectable()
export class GetUsersLists {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    getUserList(
        agencia:         string,
        rol:             number,
        dni:             string,
        estado:          string
    ) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_GET_USER_LIST_URL, { 
            Agencia: agencia, 
            Rol:     rol, 
            DNI:     dni,
            Estado:  estado } , { headers: httpHeaders} );
    }
}