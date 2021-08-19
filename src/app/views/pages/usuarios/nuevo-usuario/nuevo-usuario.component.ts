import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { CreateUser } from '../../../../core/api/services/user/createUser.service';
import { GetRolUsuario } from '../../../../core/api/services/user/getRolList.service';
import { GetAgencia } from '../../../../core/api/services/user/getAgenciaList.service';
  

 
import Swal from 'sweetalert2';
 

@Component({
  selector: 'kt-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss'],
})

export class NuevoUsuarioComponent implements OnInit {

  public userProfilePic: string;
  public nuevoUsuario: NuevoUsuario;
  public loading = true;
  public roles: any = [];
  public agencias: any = [];
 

  public listaEmpresas: any = [];
  public listaTiendas: any = [];

 public existeAgencia = false;
  public existeNuevaAgencia = false;


 
 defaultAgencia: string;
 
 

  constructor(
	private changeDetector: ChangeDetectorRef,
	private crearUsuario: CreateUser,
	private listaPermisos: GetRolUsuario,
	private listaAgencias: GetAgencia,
 


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
 


 





   }


  

  ngOnInit() {



	this.nuevoUsuario = {
		usuario:         '',
		nombre:         '',
		primerApellido: '',
		segundoApellido: '',
		documentacion:  '',
		email:          '',
		pass:          '',
		permisos:       0,
		agencia:        '' ,
		NuevaAgencia: ''
	 
	};
  }

  createUser() {



	this.crearUsuario.createUser(
		this.nuevoUsuario.usuario,
		this.nuevoUsuario.nombre,
		this.nuevoUsuario.primerApellido,
		this.nuevoUsuario.segundoApellido,
		this.nuevoUsuario.documentacion,
		this.nuevoUsuario.agencia,
		this.nuevoUsuario.NuevaAgencia,
		this.nuevoUsuario.email,
		this.nuevoUsuario.pass,
		this.nuevoUsuario.permisos 
	 
	).subscribe(data => {

		if (data['Response'] === 'OK') {
		Swal.fire({
			icon: 'success',
			title: data['Status'] ,

		});


		} else {
		Swal.fire({
			icon: 'error',
			title: 'No se ha podido crear el usuario.',
			text: data['Status']
		});

		}

		this.changeDetector.markForCheck();



		// alert(valueUsuario);
	});
  }

  public onChangePermisos() {

  	this.existeAgencia = false;
 
	  this.nuevoUsuario.agencia = '';

	  this.existeNuevaAgencia = false;
 
	  this.nuevoUsuario.NuevaAgencia = '';
	  
	  if (this.nuevoUsuario.permisos<6){
		this.existeAgencia = true;
	  }
  
 
  }


public onChangeAgencia() {

	this.existeNuevaAgencia = false;
 
	this.nuevoUsuario.NuevaAgencia = '';

	if (this.nuevoUsuario.agencia=="Nueva Agencia"){
	  this.existeNuevaAgencia = true;
	}


}
}





export interface NuevoUsuario {
	usuario: string;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  documentacion: string;
  email: string;
  pass: string;
  permisos: number;
  agencia: string;
  NuevaAgencia: string;
 
}
