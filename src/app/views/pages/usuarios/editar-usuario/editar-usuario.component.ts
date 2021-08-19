import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

 
import { ActivatedRoute } from '@angular/router';

import { GetUsuarioById } from '../../../../core/api/services/user/getUsuarioById.service';
import { GetRolUsuario } from '../../../../core/api/services/user/getRolList.service';
import { GetAgencia } from '../../../../core/api/services/user/getAgenciaList.service';
 

import { EditarUsuario } from '../../../../core/api/services/user/editUser.service';
import Swal from 'sweetalert2';

 
 
@Component({
  selector: 'kt-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})

export class EditarUsuarioComponent  implements OnInit {

  public userProfilePic: string;
  public listaParams:    any = [];
  public roles:          any = [];
  public agencias:       any = [];
  public canales:        any = [];
  public passwordChanged:string;

  public descripcionRol:string;

  public usuario:           Usuario;
  public listaEmpresas: any = [];
  public listaTiendas: any = [];
  public Nuevaspass: string;
  
 public existeAgencia = false;
 public existeNuevaAgencia = false;


 
 defaultAgencia: string;
 
 editable: boolean;


  constructor(
    private _route:           ActivatedRoute,
    private listaParamsUsers: GetUsuarioById,
    private listaPermisos:    GetRolUsuario,
    private listaAgencias:    GetAgencia,
 
    private editarUsuario:    EditarUsuario,
    private changeDetector: ChangeDetectorRef,
  ) {




   
	this.listaPermisos.getRolList()
	.subscribe(data => {

				this.roles = data;



		  this.changeDetector.markForCheck();
	});

	this.listaAgencias.getAgenciaList()
	.subscribe(data => {
		this.agencias = data;
		this.defaultAgencia = data[0].Agencia;

    this.changeDetector.markForCheck();
	});
 
 




    this.listaParamsUsers.getUsuario(this._route.snapshot.paramMap.get('idUsuario'))
		.subscribe(data => {

 
      this.listaParams = data;

        this.usuario = {
          id: this._route.snapshot.paramMap.get('idUsuario'),
          usuario:  data[0]['Usuario'],
          nombre:               data[0]['Nombre'],
          primerApellido:       data[0]['Apellido1'],
          segundoApellido:      data[0]['Apellido2'],
          documentacion:        data[0]['DNI'],
          email:                data[0]['Email'],
          permisos:             data[0]['Rol'],
          agencia:              data[0]['Agencia'],
          NuevaAgencia:               '',
          estado:               data[0]['Estado'],
        };
        this.editable=data[0]['Editable'];
     
   

          this.existeAgencia = false;
        
    
      
         if (this.usuario.permisos <= 4) {
          this.existeAgencia = true;

             
             
         }
     
        this.changeDetector.markForCheck();
        
       
      })

 
   }

  ngOnInit() {

 

    this.usuario = {
      id:               '',
      agencia:          '',
      usuario:           '',
      nombre:           '',
      primerApellido:        '',
      segundoApellido:        '',
      documentacion: '',
      email:             '',
      permisos:              0,
      NuevaAgencia:  '',
      estado:           ''
    }
    
     
 

  }

 
  

  public editPass(){
    this.editarUsuario.editarUsuarioPass(
      this._route.snapshot.paramMap.get('idUsuario'),
      this.Nuevaspass,
    ).subscribe(data => {

      if (data['Response']=='OK'){
        Swal.fire({
          icon: 'success',
          title: data['Status']
      
        })

 
      } else{
        Swal.fire({
          icon: 'error',
          title: data['Status']
         
        })
        
      }   

      this.changeDetector.markForCheck();
       
      
     
   
    });
  }
 



  public editUser(){
    this.editarUsuario.editarUsuario(
      this._route.snapshot.paramMap.get('idUsuario'),
      this.usuario.usuario,
      this.usuario.nombre,
      this.usuario.primerApellido,
      this.usuario.segundoApellido,
      this.usuario.documentacion,
      this.usuario.agencia,
      this.usuario.email,
      this.usuario.permisos,
       this.usuario.NuevaAgencia,
      this.usuario.estado,
    ).subscribe(data => {

      if (data['Response']=='OK'){
        Swal.fire({
          icon: 'success',
          title: data['Status']
      
        })

 
      } else{
        Swal.fire({
          icon: 'error',
          title: data['Status']
         
        })
        
      }   

      this.changeDetector.markForCheck();
       
      
     
   
    });
  }
 

  public onChangePermisos() {

  	this.existeAgencia = false;
 
	  this.usuario.agencia = '';

	  this.existeNuevaAgencia = false;
 
	  this.usuario.NuevaAgencia = '';
	  
	  if (this.usuario.permisos<6){
		this.existeAgencia = true;
	  }
  
 
  }

  
public onChangeAgencia() {

	this.existeNuevaAgencia = false;
 
	this.usuario.NuevaAgencia = '';

	if (this.usuario.agencia=="Nueva Agencia"){
	  this.existeNuevaAgencia = true;
	}


}
}

  
    
  


  
 


export interface Usuario {
  id: string;
  usuario:           string;
  nombre:           string;
  primerApellido:   string;
  segundoApellido:  string;
  documentacion:    string;
  email:            string;
  permisos:         number;
  agencia:          string;
  NuevaAgencia:            string;
  estado:           string;
}

 