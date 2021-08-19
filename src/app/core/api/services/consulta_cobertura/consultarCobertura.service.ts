import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';

const API_CONSULTAR_COBERTURA_URL = API_ROUTE + 'getCobertura';
const API_CONSULTAR_COBERTURA_URL_Nuevo = API_ROUTE + 'getCoberturaNuevo';
const API_CONSULTAR_Usuario_URL = API_ROUTE + 'getUsuariosRealizadas';
const API_CONSULTAR_Realizadas_URL = API_ROUTE + 'getCoberturasRealizadas';

@Injectable()
export class ConsultarCoberturas {

    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    consultarCoberturaRealizadas(
        Fechaini:               string,
        FechaFin:               string,
        idusuario:               number,
     
    ) {
       
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_CONSULTAR_Realizadas_URL, { 
            Fechaini:                Fechaini,
            FechaFin:                FechaFin,
            idusuario:                idusuario 
        } , { headers: httpHeaders} );
    }


    consultarCobertura(
        Provincia:               string,
        Poblacion:               string,
        Direccion:               string,
        Numero:                  string
    ) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_CONSULTAR_COBERTURA_URL, { 
            Provincia:                Provincia,
            Poblacion:                Poblacion,
            Direccion:                Direccion,
            Numero:                   Numero
        } , { headers: httpHeaders} );
    }

    consultarCoberturaNuevo(
        Provincia:               string,
        Poblacion:               string,
        Direccion:               string,
        Numero:                  string,
        Piso:                  string,
        Puerta:                  string
    ) {

        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_CONSULTAR_COBERTURA_URL_Nuevo, { 
            Provincia:                Provincia,
            Poblacion:                Poblacion,
            Direccion:                Direccion,
            Numero:                   Numero,
            Piso:                   Piso,
            Puerta:                   Puerta
        } , { headers: httpHeaders} );
    }



    getUsuario() {
        
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_CONSULTAR_Usuario_URL, { 
           
        } , { headers: httpHeaders} );
    }
}