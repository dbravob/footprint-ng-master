import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { API_ROUTE } from '../../../../api-config.configuration';

const API_EDIT_USER_URL = API_ROUTE + 'ModificarUsuario';

const API_EDIT_Pass_URL = API_ROUTE + 'ModificarPassUsuario';

@Injectable()
export class EditarUsuario {
    
    constructor(private http: HttpClient) {}

    
    editarUsuarioPass(id: string,pass:string) {
        
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_EDIT_Pass_URL, { 
            ID: id,
                Pass:pass
           
        } , { headers: httpHeaders} );
    }

    // Authentication/Authorization
    editarUsuario(id: string,usuario:string, nombre: string, apellido1: string, apellido2: string, dni: string, agencia: string, email: string, rol: number, NuevaAgencia: string, estado: string) {
        
        const userToken = localStorage.getItem(environment.authTokenKey);
        let httpHeaders = new HttpHeaders();
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + userToken);
        httpHeaders.set('Authorization', 'Bearer ' + userToken);

    	return this.http.post(API_EDIT_USER_URL, { 
            ID: id,
            Usuario:usuario,
            Nombre: nombre,
            Apellido1: apellido1,
            Apellido2: apellido2,
            DNI: dni,
            Agencia: agencia,
            Email: email,
            Rol: rol,
            NuevaAgencia: NuevaAgencia,
            Estado: estado
        } , { headers: httpHeaders} );
    }
}