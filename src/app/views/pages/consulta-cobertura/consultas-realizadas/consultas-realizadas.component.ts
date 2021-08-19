import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
 
import {  MatTableDataSource} from '@angular/material';

 


import {ConsultarCoberturas} from '../../../../core/api/services/consulta_cobertura/consultarCobertura.service';

 
import * as XLSX from 'xlsx';
 
 
@Component({
	selector: 'kt-consultas-realizadas',
	templateUrl: './consultas-realizadas.component.html',
	styleUrls: ['./consultas-realizadas.component.scss']
})

export class ConsultasRealizadasComponent implements OnInit {

	 
    public getFiltros:GetFiltros;
 	public num=0;
	displayedColumns = [ 'id_consulta', 'fecha', 'usuario' , 'provincia','poblacion','direccion','numero'];
	dataSource: MatTableDataSource<getConsulta>;
	public banderaViewSpinner: boolean=false;
	public banderaViewData: boolean=false;
	public users: getConsulta[] = [];
	@ViewChild('TABLE', {static: true}) table: any;
 

  
	public header = 'Contacts';
	public description = 'Manage your contact list';
	public numContacts = 0;
	public counterClass = 'tag secondary';
	public formHidden = false;
	public  items2;
  
 
	listaUsuarios: any = [''];
 
	


 

	public tableHidden: boolean = false;

  
	constructor(
		private changeDetector: ChangeDetectorRef,
 
 
	  private listaDeUsuarios: ConsultarCoberturas,
 
	  private listaDeCobertura:    ConsultarCoberturas
	) {

		
  
		this.listaDeUsuarios.getUsuario()
		.subscribe(data => {
			this.listaUsuarios = data;
	
			 this.getFiltros.selectedOptionAgente=0;
		 
			this.changeDetector.markForCheck();
	  });

	  
	  
	 
	  
	}
	
	public ngOnInit() {

		this.getFiltros = {
	 
			fechaInicioValue :new Date(),
			fechaFinValue :new Date(),
			selectedOptionAgente:    0,
			 
		  };
	
		 
	 
	}

	
	
  

	 

 
	
	public searchData() {


		
		this.banderaViewSpinner = true;

var fechaInicio = this.getFiltros.fechaInicioValue.getFullYear() + "-" + (this.getFiltros.fechaInicioValue.getMonth() + 1) + "-" + this.getFiltros.fechaInicioValue.getDate();
var 			fechaFin = this.getFiltros.fechaFinValue.getFullYear() + "-" + (this.getFiltros.fechaFinValue.getMonth()+1) + "-" + this.getFiltros.fechaFinValue.getDate();


		this.listaDeUsuarios.consultarCoberturaRealizadas(fechaInicio,fechaFin,this.getFiltros.selectedOptionAgente).subscribe(data => {
			
				
		this.banderaViewData = true;
		this.items2 = data;
		this.users=[];
		for (let i = 0; i < this.items2.length; i++) { 
			this.users.push(createConsulta(data[i].id,data[i].fecha,data[i].nombre,data[i].provincia
				,data[i].poblacion,data[i].calle,data[i].numero
			));
	
		  }
		  
	
			this.dataSource = new MatTableDataSource(this.users);
	 
		 
			this.banderaViewSpinner = false;
			this.changeDetector.markForCheck();
		  
		});


 
		
	}

 
 

	ExportTOExcel()
	{
		const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
		
		/* save to file */
		XLSX.writeFile(wb, 'report.xlsx');
	}

 
	
	
 
  }

  
  /** Builds and returns a new User. */
function createConsulta(
	 

	id_consulta:            string,
	fecha:            string,
	usuario:                string,
 
	provincia:               string,
	poblacion:		 string,
	direccion:		 string,
	numero:		 string,
	): getConsulta {	  
	return {
		id_consulta:            id_consulta,
		fecha:            fecha,
		usuario:                usuario,
 
		provincia:               provincia,
		poblacion:  poblacion,
		direccion:  direccion,
		numero:  numero
 
	}
}


 
export interface GetFiltros {
 
	fechaInicioValue:			Date,
	fechaFinValue:				Date,
	selectedOptionAgente:  number;
 

}
 
 
  
  export interface getConsulta {

	id_consulta:            string;
	fecha:            string;
	usuario:                string;
 
	provincia:               string;
	poblacion:               string;
	direccion:               string;
	numero:               string;

}