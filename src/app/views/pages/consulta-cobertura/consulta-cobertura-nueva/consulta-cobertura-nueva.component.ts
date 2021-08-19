import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthNoticeService} from '../../../../core/auth';
import {  MatTableDataSource} from '@angular/material';
 
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


import {GetConsultaProvincias} from '../../../../core/api/services/consulta_cobertura/getProvincias.service';
import {GetConsultaPoblaciones} from '../../../../core/api/services/consulta_cobertura/getPoblacion.service';
import {GetConsultaCalles} from '../../../../core/api/services/consulta_cobertura/getCalles.service';
import {ConsultarCoberturas} from '../../../../core/api/services/consulta_cobertura/consultarCobertura.service';

import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
 
 

@Component({
	selector: 'kt-consulta-cobertura-nueva',
	templateUrl: './consulta-cobertura-nueva.component.html',
	styleUrls: ['./consulta-cobertura-nueva.component.scss']
})

export class ConsultaCoberturaNuevaComponent implements OnInit {

	myControlProvincias = new FormControl();
	myControlPoblaciones = new FormControl();
	myControlCalles = new FormControl();
	listaNumeros: any = [''];
	listaPisos: any = [''];
	listaPuertas: any = [''];
optionsProvincia: string[] = [];
 
 
optionsPoblacion: string[] = [];
optionsCalles: string[] = [];
	filteredOptionsProvincia: Observable<string[]>;
	filteredOptionsPoblacion: Observable<string[]>;
	filteredOptionsCalle: 	  Observable<string[]>;

	private base64textString:String="";
 
	/*displayedColumns = ['X_ID_SCD','SERV_HFC','SERV_FTTH','SERV_NEBA','DENOMINACION','CALLE',
	'NUMERO', 'ESCALERA', 'PLANTA', 'PUERTA', 'CIUDAD','PROVINCIA','COD_POSTAL',
	'RECUENTO_CLIENTES','CLIENTE_ACTIVO','CLIENTE_ESTADO','AUTOIN'];
*/

	
	displayedColumns = ['PROVINCIA','CIUDAD','CALLE','NUMERO', 'ESCALERA','PLANTA','PUERTA', 'AUTOIN'];


	dataSource: MatTableDataSource<getConsulta>;
 public calle: boolean=true;
 public poblacion: boolean=true;
 
	@ViewChild('TABLE', {static: true}) table: any;

	items2: any = ['algo'];
	items3: any = ['algo'];
	items4: any = ['algo'];
	items5: any = ['algo'];
	items6: any = ['algo'];

  
	public header = 'Contacts';
	public description = 'Manage your contact list';
	public numContacts = 0;
	public counterClass = 'tag secondary';
	public formHidden = false;
	public Recaptcha=false;
  
	listaProvincias: any = [''];
	listaPoblaciones: any = [''];
	listaCalles: any = [''];
	listaCobertura: any = [''];
	
  
	public consulta: Consulta;

	public tableHidden: boolean = false;

  
	constructor(
		private changeDetector: ChangeDetectorRef,
	  private authNoticeService: AuthNoticeService,
	  private listaDeProvincias:  GetConsultaProvincias,
	  private listaDePoblaciones: GetConsultaPoblaciones,
	  private listaDeCalles:    GetConsultaCalles,
	  private listaDeCobertura:    ConsultarCoberturas
	) {

		Swal.fire({
			
			title: 'Cargando provincias.',
			allowOutsideClick: false ,
			onBeforeOpen: () => {
				Swal.showLoading()}
				
				
		  })

		this.listaDeProvincias.getProvinciasNuevo()
		.subscribe(data => {
			this.listaProvincias = data;
		

			this.items5 = data;
		  
		

			this.optionsProvincia = [];
			 
			for (let i = 0; i < this.items5.length; i++) { 
				this.optionsProvincia.push(data[i]['PROVINCIA']);
			 
			}

		 
	 

			this.filteredOptionsProvincia = this.myControlProvincias.valueChanges
			.pipe(
				startWith(''),
				map(value => this._filterProvincias(value))	
			);

			Swal.fire({
				
				title: 'Cargando provincias.',
				timer:1,
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })

			this.changeDetector.markForCheck();
	  });
  
	

	 

	
	  

	  
	  
	}
	
	public ngOnInit() {

		

	

	 
		this.listaPoblaciones = [''];
		this.listaCalles = [''];
		this.listaNumeros = [''];
		this.listaPisos = [''];
		this.listaPuertas = [''];
		this.listaCobertura = [''];
	
 
		this.optionsPoblacion = [];
		this.optionsCalles = [];
	
		this.consulta = {
			Provincia:            '',
			Poblacion:            '',
			Calle:                '',
			Numero:               '',
			Piso:               '',
			Puerta:               ''
		};
	 
  
	}

	
	
  
	public onProvinciaChanged($event) {
		if (this.optionsProvincia.indexOf(this.consulta.Provincia)!=-1 ){
		Swal.fire({			
			title: 'Cargando poblaciones.',
			allowOutsideClick: false ,
			onBeforeOpen: () => {
				Swal.showLoading()}		
		  })  
		this.listaDePoblaciones.getPoblacionesNuevo(this.consulta.Provincia.toString())
		.subscribe(data => {
		  this.listaPoblaciones = data;
		  this.items3 = data;
			this.optionsPoblacion = [];
			this.optionsCalles = [];
			for (let i = 0; i < this.items3.length; i++) { 
				this.optionsPoblacion.push(data[i]['CIUDAD']);
			 
			}

			Swal.fire({
				
				title: 'Cargando poblaciones.',
				timer:1,
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })


			  this.filteredOptionsPoblacion = this.myControlPoblaciones.valueChanges
			  .pipe(
				  startWith(''),
				  map(value => this._filterPoblaciones(value))
			  );

			this.changeDetector.markForCheck();
		}); 

		this.listaPoblaciones = [''];
		this.listaCalles = [''];
	 
	
	 
	 
		 
		this.optionsPoblacion = [];
		this.optionsCalles = [];
		this.listaNumeros = [];
		this.listaPisos = [];
		this.listaPuertas = [];
	 
		 
		this.consulta.Poblacion  ='';
		this.consulta.Calle  ='';
		this.consulta.Numero  ='';
		this.consulta.Piso  ='';
		this.consulta.Puerta  ='';
		
		

	}
	}


	

	

	

	public onPoblacionChanged() {

	
	 
		if (this.optionsPoblacion.indexOf(this.consulta.Poblacion)!=-1 ){
			Swal.fire({
				
				title: 'Cargando direcciones.',
				allowOutsideClick: false ,
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })
	

		this.listaDeCalles.getCallesNuevo(this.consulta.Provincia.toString(),this.consulta.Poblacion.toString())
		.subscribe(data => {
		  this.listaCalles = data;
	 
		  this.items4 = data;
		  
		

			this.optionsCalles = [];

			for (let i = 0; i < this.items4.length; i++) { 
				this.optionsCalles.push(data[i]['VIA']);
			}

	

			Swal.fire({
				
				timer:1,
				title: 'Cargando direcciones.',
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })

			  this.filteredOptionsCalle = this.myControlCalles.valueChanges
			  .pipe(
				  startWith(''),
				  map(value => this._filterCalles(value))
			  );

			 
		 
			  this.listaCalles = [''];
			  this.listaNumeros = [];
			  this.listaPisos = [];
		this.listaPuertas = [];
		  
		   
		   
			   
		 
			   
		  
		   
			   
			 
			  this.consulta.Calle  ='';
			  this.consulta.Numero  ='';
			  this.consulta.Piso ='';
			  this.consulta.Puerta ='';
	
			this.changeDetector.markForCheck();

		}); 
	}
	}

	public onCalleChange(){

		console.log("onCalleChanged")
	 
		if (this.optionsCalles.indexOf(this.consulta.Calle)!=-1 ){
			Swal.fire({
				
				title: 'Cargando Numeros.',
				allowOutsideClick: false ,
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })
	

		this.listaDeCalles.getNumeros(this.consulta.Provincia.toString(),this.consulta.Poblacion.toString(),this.consulta.Calle.toString())
		.subscribe(data => {
		  this.listaNumeros = data;
		  console.log(data)
		   
		  
		

		 

	

			Swal.fire({
				
				timer:1,
				title: 'Cargando Numeros.',
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })

			   
			  this.consulta.Numero  ='';
	
			this.changeDetector.markForCheck();

		}); 
	} 
	}

	public onNumeroChange(){

		console.log("onNumeroChange")
	 
		 
			Swal.fire({
				
				title: 'Cargando Pisos.',
				allowOutsideClick: false ,
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })
	

		this.listaDeCalles.getPisos(this.consulta.Provincia.toString(),this.consulta.Poblacion.toString(),this.consulta.Calle.toString(),this.consulta.Numero.toString())
		.subscribe(data => {
		  this.listaPisos = data;
		  console.log(data)
		   
		  
		

		 

	

			Swal.fire({
				
				timer:1,
				title: 'Cargando Pisos.',
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })

			  this.listaPuertas = [];
			  this.consulta.Piso  ='';
			  this.consulta.Puerta  ='';
			this.changeDetector.markForCheck();

		}); 
	 
	}

	public onPisoChange(){

		console.log("onPisoChange")
	 
		 
			Swal.fire({
				
				title: 'Cargando Puertas.',
				allowOutsideClick: false ,
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })

			  
	

		this.listaDeCalles.getPuertas(this.consulta.Provincia.toString(),this.consulta.Poblacion.toString(),this.consulta.Calle.toString(),this.consulta.Numero.toString(),this.consulta.Piso.toString())
		.subscribe(data => {
		  this.listaPuertas = data;
		  console.log(data)
		   
		  
		

		 

	

			Swal.fire({
				
				timer:1,
				title: 'Cargando Puertas.',
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })

		 
		 
			  this.consulta.Puerta  ='';
			this.changeDetector.markForCheck();

		}); 
	 
	}

	public realizarConsulta() {
		this.listaDeCalles.getCallesNuevo(this.consulta.Provincia.toString(),this.consulta.Poblacion.toString())
		.subscribe(data => {
		  this.listaCalles = data;
		
		  this.changeDetector.markForCheck();
		}); 
	}

	public resolved(captchaResponse: string) {

	
		if (captchaResponse!=null){
			this.Recaptcha=true;
		}else{
			this.Recaptcha=false;
		}
		
	  }

	  

	  public Limpiar() {
 
		this.ngOnInit();
		
	   } 

	public consultarCobertura() {
 
 	if (this.Recaptcha==false){ 
	 
			 
			Swal.fire({
			  icon: 'error',
			  title: 'Debes pulsar en "No soy un robot"'
			 
			})
			
		    

	 }else{


		Swal.fire({
				
			title: 'Cargando Coberturas.',
			allowOutsideClick: false ,
			onBeforeOpen: () => {
				Swal.showLoading()}
				
		  })

		


		var numero="";
		const consultas: getConsulta[] = [];
		 if (this.consulta.Numero!=null){
			   numero=this.consulta.Numero.toString();
		 } 
 
		this.listaDeCobertura.consultarCoberturaNuevo(this.consulta.Provincia.toString(),this.consulta.Poblacion.toString(),
		this.consulta.Calle.toString(),numero.toString(),this.consulta.Piso.toString(),this.consulta.Puerta.toString())
		.subscribe(data => {
		 
			Swal.fire({
			
				timer:1,
				title: 'Cargando Coberturas.',
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })

			if (data['Response']=='KO'){
				Swal.fire({
				  icon: 'error',
				  title: data['Status']
			  
				})
		
		 
			  } else{
				this.items2 = data;

	

				for (let i = 0; i < this.items2.length; i++) { 
					consultas.push(createConsulta( 
						 data[i].X_ID_SCD
						,data[i].SERV_HFC
						,data[i].SERV_FTTH
						,data[i].SERV_NEBA
						,data[i].DENOMINACION
						,data[i].CALLE
						,data[i].PUERTA
						,data[i].NUMERO
						,data[i].ESCALERA
						,data[i].PLANTA
						,data[i].CIUDAD
						,data[i].PROVINCIA
						,data[i].COD_POSTAL
						,data[i].RECUENTO_CLIENTES
						,data[i].CLIENTE_ACTIVO
						,data[i].CLIENTE_ESTADO
						
 

						));
				}
	
				this.tableHidden = false;
				
				this.dataSource = new MatTableDataSource(consultas);
				grecaptcha.reset();
				this.Recaptcha=false;

				Swal.fire({
					 
					title: 'El resultado de la consulta es de carácter orientativo'
				
				  })
				
				this.changeDetector.markForCheck();
			} 
			});
				
			  


			

	}
 	
	} 

 

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toUpperCase(); // Datasource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	ExportTOExcel()
	{
		const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
		
		/* save to file */
		XLSX.writeFile(wb, 'report.xlsx');
	}

	public _filterPoblaciones(value: string): string[] {
		if (value.length>2){
		const filterValue = value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toUpperCase();
	
		return this.optionsPoblacion.filter(option => option.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toUpperCase().includes(filterValue));
		}
	}
	
	public _filterProvincias(value: string): string[] {
		if (value.length>2){
		const filterValue = value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toUpperCase();
		return this.optionsProvincia.filter(option => option.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toUpperCase().includes(filterValue));
		}
	}

	public _filterCalles(value: string): string[] {
		if (value.length>2){
			 
		const filterValue = value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toUpperCase();
		return this.optionsCalles.filter(option => option.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toUpperCase().includes(filterValue));
	}
	}
	
	
 
  }

  
  /** Builds and returns a new User. */
function createConsulta(
 

	X_ID_SCD:            string,
	SERV_HFC:            string,
	SERV_FTTH:                string,
	SERV_NEBA:               string,
	DENOMINACION:				  string,
	CALLE:  string,
	PUERTA:  string,
	NUMERO:  string,
	ESCALERA:  string,
	PLANTA:  string,
	CIUDAD:  string,
	PROVINCIA:  string,
	COD_POSTAL:  string,
	RECUENTO_CLIENTES:  string,
	CLIENTE_ACTIVO:  string,
	CLIENTE_ESTADO:  string,

	): getConsulta {	
		if (SERV_HFC=="SI" && RECUENTO_CLIENTES=="SI"){
		
	return {
 
		X_ID_SCD:            X_ID_SCD,
	SERV_HFC:            SERV_HFC,
	SERV_FTTH:                SERV_FTTH,
	SERV_NEBA:               SERV_NEBA,
	DENOMINACION:				  DENOMINACION,
	CALLE:  CALLE,
	PUERTA:  PUERTA,
	NUMERO:  NUMERO,
	ESCALERA:  ESCALERA,
	PLANTA:  PLANTA,
	CIUDAD:  CIUDAD,
	PROVINCIA:  PROVINCIA,
	COD_POSTAL:  COD_POSTAL,
	RECUENTO_CLIENTES:  RECUENTO_CLIENTES,
	CLIENTE_ACTIVO:  CLIENTE_ACTIVO,
	CLIENTE_ESTADO:  CLIENTE_ESTADO,
	Potencialmente_autoin: "Si"
	}
}else{

	return {
 
		X_ID_SCD:            X_ID_SCD,
	SERV_HFC:            SERV_HFC,
	SERV_FTTH:                SERV_FTTH,
	SERV_NEBA:               SERV_NEBA,
	DENOMINACION:				  DENOMINACION,
	CALLE:  CALLE,
	PUERTA:  PUERTA,
	NUMERO:  NUMERO,
	ESCALERA:  ESCALERA,
	PLANTA:  PLANTA,
	CIUDAD:  CIUDAD,
	PROVINCIA:  PROVINCIA,
	COD_POSTAL:  COD_POSTAL,
	RECUENTO_CLIENTES:  RECUENTO_CLIENTES,
	CLIENTE_ACTIVO:  CLIENTE_ACTIVO,
	CLIENTE_ESTADO:  CLIENTE_ESTADO,
	Potencialmente_autoin: "No"
	}
}}

  
  export interface Consulta {
	Provincia:            string;
	Poblacion:            string;
	Calle:                string;
	Numero:               string;
	Piso:               string;
	Puerta:               string;
  }
  
  export interface getConsulta {
 
	X_ID_SCD:            string;
	SERV_HFC:            string;
	SERV_FTTH:                string;
	SERV_NEBA:               string;
	DENOMINACION:				  string;
	CALLE:  string;
	PUERTA:  string;
	NUMERO:  string;
	ESCALERA:  string;
	PLANTA:  string;
	CIUDAD:  string;
	PROVINCIA:  string;
	COD_POSTAL:  string;
	RECUENTO_CLIENTES:  string;
	CLIENTE_ACTIVO:  string;
	CLIENTE_ESTADO:  string;
	Potencialmente_autoin:  string;
 
 
 
}