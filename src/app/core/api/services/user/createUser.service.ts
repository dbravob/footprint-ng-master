import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';

const API_CREATE_USER_URL = API_ROUTE + 'CrearUsuario';

@Injectable()
export class CreateUser {
    
    constructor(private http: HttpClient) {}

    // Authentication/Authorization
    createUser(Usuario: string,Nombre: string, Apellido1: string, Apellido2: string, DNI: string, Agencia: string, NuevaAgencia: string, Email: string, Pass: string, Rol: number) {
        
     
        
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_CREATE_USER_URL, { 
            "Usuario": Usuario,
            "Nombre": Nombre,
            "Apellido1": Apellido1,
            "Apellido2": Apellido2,
            "DNI": DNI,
            "Agencia": Agencia,
            "NuevaAgencia": NuevaAgencia,
            "Email": Email,
            "Pass": Pass,
            "Rol": Rol 
             
        } , { headers: httpHeaders} );
    }
}