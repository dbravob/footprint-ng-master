import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';
 
const API_GET_CALLES_LIST_URL_Nuevo = API_ROUTE + 'getDireccionNuevo';
const API_GET_CALLES_LIST_URL = API_ROUTE + 'getDireccion';
const API_GET_NUmeros_LIST_URL = API_ROUTE + 'getCalle';
const API_GET_Pisos_LIST_URL = API_ROUTE + 'getPisos';
const API_GET_Puertas_LIST_URL = API_ROUTE + 'getPuertas';

@Injectable()
export class GetConsultaCalles {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    

    getPuertas(provincia:string, poblacion:string, calle:string, numero:string, piso:string) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_GET_Puertas_LIST_URL , {Provincia:provincia, Poblacion:poblacion, Calle:calle, Numero:numero, Piso:piso} , { headers: httpHeaders} );
    }


    getPisos(provincia:string, poblacion:string, calle:string, numero:string) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_GET_Pisos_LIST_URL , {Provincia:provincia, Poblacion:poblacion, Calle:calle, Numero:numero} , { headers: httpHeaders} );
    }



    getNumeros(provincia:string, poblacion:string, calle:string) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_GET_NUmeros_LIST_URL , {Provincia:provincia, Poblacion:poblacion, Calle:calle} , { headers: httpHeaders} );
    }

    getCalles(provincia:string, poblacion:string) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_GET_CALLES_LIST_URL , {Provincia:provincia, Poblacion:poblacion} , { headers: httpHeaders} );
    }

    getCallesNuevo(provincia:string, poblacion:string) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_GET_CALLES_LIST_URL_Nuevo , {Provincia:provincia, Poblacion:poblacion} , { headers: httpHeaders} );
    }
}