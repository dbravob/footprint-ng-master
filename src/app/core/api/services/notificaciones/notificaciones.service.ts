import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';

const API = API_ROUTE + 'notificaciones';

@Injectable()
export class NotificacionesService {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    postNotificacion(

        type:            string,
        comment:         string
        
    ) {
        
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API, { 

            type:               type,
            comment:            comment
            
        } , { headers: httpHeaders} );
    }
}