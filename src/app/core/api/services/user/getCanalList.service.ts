import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';

const API_GET_CANAL_Nuevo = API_ROUTE + 'users/NuevoUsuario/getCanal.php';
const API_GET_CANAL_visializar = API_ROUTE + 'users/VisualizarUsuarios/getCanal.php';
const API_GET_CANAL_editar = API_ROUTE + 'users/EditarUsuario/getCanal.php';

@Injectable()
export class GetCanalNuevo {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    getCanalList() {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.get(API_GET_CANAL_Nuevo, { headers: httpHeaders} );
    }
}


@Injectable()
export class GetCanalVisualizar {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    getCanalList() {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.get(API_GET_CANAL_visializar, { headers: httpHeaders} );
    }
}


@Injectable()
export class GetCanalEditar {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    getCanalList() {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.get(API_GET_CANAL_editar, { headers: httpHeaders} );
    }
}