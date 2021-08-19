import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';

const API_CHANGE_PASS_URL = API_ROUTE + 'ModificarPass';

@Injectable()
export class UserService {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    changePassword(Pass: string, NuevaPass: string, ConfirmarNuevaPass: string) {
        
   
        
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_CHANGE_PASS_URL, { Pass: Pass, NuevaPass: NuevaPass, ConfirmarNuevaPass: ConfirmarNuevaPass } , { headers: httpHeaders} );
    }
}