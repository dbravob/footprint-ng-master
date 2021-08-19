import {Component, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {  MatTableDataSource} from '@angular/material';

import {GetUsersLists} from '../../../../core/api/services/user/getUsersList.service';
import {GetRolUsuario} from '../../../../core/api/services/user/getRolList.service';
import {GetAgencia} from '../../../../core/api/services/user/getAgenciaList.service';
 

import * as XLSX from 'xlsx';

/**
* @title Data table with sorting, pagination, and filtering.
*/
@Component({
	selector: 'kt-ver-usuarios',
	templateUrl: './ver-usuarios.component.html',
	styleUrls: ['./ver-usuarios.component.scss']
  })
  
  export class VerUsuariosComponent {

	public roles: any = [];
	public agencias: any = [];
 
	public rol: any = [];
	public items2: any = []; 

	public users: User[] = [];

	public getFiltros: getFiltros;

	public banderaViewSpinner: boolean = false;
	public banderaViewData: boolean = false;


	@ViewChild('TABLE', {static: true}) table: any;

	displayedColumns = ['editar', 'id', 'username','agencia', 'rol',
	'email', 'nombre', 'apellido1', 'apellido2', 'dni',  'pass','estado', 'ultima_conexion' ];
	dataSource: MatTableDataSource<User>;
 
 

	constructor(
		private listaDeUsuarios: GetUsersLists,
		private rolUsuario: 	 GetRolUsuario,
		private agenciaUsuario:  GetAgencia,
	 
		private changeDetector: ChangeDetectorRef,
	) {
		this.rolUsuario.getRolVisualizar()
		.subscribe(dataRol => {
		
			this.roles=dataRol;
		 
			this.getFiltros.selectedOptionRol=-10;
		
			
			this.changeDetector.markForCheck();
    	});

		this.agenciaUsuario.getAgenciaVisualizar()
		.subscribe(data => {
			this.agencias=data;
			 

			this.getFiltros.selectedOptionAgencia='Todas';
			this.changeDetector.markForCheck();
		});
		
		 
	}

	public ngOnInit() {
		this.getFiltros = {
			selectedOptionAgencia: 		'', 
			selectedOptionRol:			-10,
			selectedOptionEstado:		'',
			dniEmail:					''
		};
		this.getFiltros.selectedOptionEstado='Activo';
	
	  }

	 

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	ExportTOExcel(){
		const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
		
		/* save to file */
		XLSX.writeFile(wb, 'report.xlsx');
	}

	searchData(){
		 

		this.banderaViewSpinner = true;
		this.listaDeUsuarios.getUserList(this.getFiltros.selectedOptionAgencia, 
			this.getFiltros.selectedOptionRol, 
			this.getFiltros.dniEmail, this.getFiltros.selectedOptionEstado)
			.subscribe(data => {
		
		this.banderaViewData = true;
		this.items2 = data;

		console.log(data);
		this.users=[];
		for (let i = 0; i < this.items2.length; i++) { 
			this.users.push(createNewUser2(
				'edit',
				data[i]["ID"],
				data[i]["Usuario"],
				data[i]["AGENCIA"],
				data[i]["ROL"],
				data[i]["MAIL"],
				data[i]["Nombre"],
				data[i]["Apellido1"],
				data[i]["Apellido2"],
				data[i]["CANAL"],
				
				data[i]["DNI"],
				data[i]["Contra"],
				data[i]["Estado"],
				data[i]["Ultima_Conexion"],
			));
	
		  }
		  
	
			this.dataSource = new MatTableDataSource(this.users);
	 
		 
			this.banderaViewSpinner = false;
			this.changeDetector.markForCheck();
		  
		});
	
	}
}

/** Builds and returns a new User. */
function createNewUser2(
	icon:				string,
	id:					string,
	usuario:					string,
	agencia: 			string,
	rol: 			string,
	mail:  				string,
	nombre:  			string,
	apellido1:			string,
	apellido2:  		string,
	canal:  			string,
	dni:  				string,
	pass:  				string,
	estado: 			string,
	ultima_conexion:	string,
): User {	  
	return {
		icon:			icon,
		id:  			id,
		usuario:  			usuario,
		agencia: 		agencia,
		rol: 		rol,
		mail:  			mail,
		nombre:  		nombre,
		apellido1:		apellido1,
		apellido2:  	apellido2,
		canal:  		canal,
		dni:  			dni,
		pass:  			pass,
		estado: 		estado,
		ultima_conexion:ultima_conexion
	}
}

export interface User {
	icon:			string,
	id:  			string;
	usuario:  			string;
	
	agencia: 		string;
	rol: 		string;
	mail:  			string;
	nombre:  		string;
	apellido1:		string;
	apellido2:  	string;
	canal:  		string;
	dni:  			string;
	pass:  			string;
	estado: 		string;
	ultima_conexion:string;
}

export interface getFiltros {
	selectedOptionAgencia: 		string, 
	selectedOptionRol:			number,
	selectedOptionEstado:		string,
	dniEmail:					string
}