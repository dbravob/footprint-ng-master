import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';
import { Observable } from 'rxjs';
 
const API_GET_ROL = API_ROUTE + 'getRol';
const API_GET_ROLVisualizar = API_ROUTE + 'getRolVisualizar';

@Injectable()
export class GetRolUsuario {

	constructor(private http: HttpClient) {}

	// Authentication/Authorization
	getRolList()  {

		const userToken = localStorage.getItem(environment.authTokenKey);
		let httpHeaders = new HttpHeaders();
		httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
		httpHeaders.set('Authorization', 'Bearer ' + userToken);

		return this.http.get(API_GET_ROL, { headers: httpHeaders} );
	}
	getRolVisualizar()  {

		const userToken = localStorage.getItem(environment.authTokenKey);
		let httpHeaders = new HttpHeaders();
		httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
		httpHeaders.set('Authorization', 'Bearer ' + userToken);

		return this.http.get(API_GET_ROLVisualizar, { headers: httpHeaders} );
	}


 
  
}

