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
	selector: 'kt-consulta-cobertura',
	templateUrl: './consulta-cobertura.component.html',
	styleUrls: ['./consulta-cobertura.component.scss']
})

export class ConsultaCoberturaComponent implements OnInit {

	myControlProvincias = new FormControl();
	myControlPoblaciones = new FormControl();
	myControlCalles = new FormControl();

optionsProvincia: string[] = [];
optionsProvinciaLower: string[] = [];
optionsPoblacionLower: string[] = [];
optionsPoblacion: string[] = [];
optionsCalles: string[] = [];
	filteredOptionsProvincia: Observable<string[]>;
	filteredOptionsPoblacion: Observable<string[]>;
	filteredOptionsCalle: 	  Observable<string[]>;

	private base64textString:String="";

	displayedColumns = [ 'provincia', 'poblacion', 'nombreVia', 'numero', 'tipo_huella','acceso'];
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

		this.listaDeProvincias.getProvincias()
		.subscribe(data => {
			this.listaProvincias = data;
		

			this.items5 = data;
		  
		

			this.optionsProvincia = [];
			this.optionsProvinciaLower= [];
			for (let i = 0; i < this.items5.length; i++) { 
				this.optionsProvincia.push(data[i]['Provincia']);
				this.optionsProvinciaLower.push(data[i]['Provincia'].normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase());
			}

			console.log(this.optionsProvincia);
			console.log(this.optionsProvinciaLower);

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
		this.listaCobertura = [''];
	
	 
		//this.optionsProvinciaLower = [];
		this.optionsPoblacionLower = [];
		this.optionsPoblacion = [];
		this.optionsCalles = [];
	
		this.consulta = {
			Provincia:            '',
			Poblacion:            '',
			Calle:                '',
			Numero:               ''
		};
	 
  
	}

	
	
  
	public onProvinciaChanged($event) {
	
	 
		  

		
		if (this.optionsProvinciaLower.indexOf(this.consulta.Provincia.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase())!=-1 ){
		Swal.fire({
			
			title: 'Cargando poblaciones.',
			allowOutsideClick: false ,
			onBeforeOpen: () => {
				Swal.showLoading()}
				
				
		  })

		
		  
		this.listaDePoblaciones.getPoblaciones(this.consulta.Provincia.toString())
		.subscribe(data => {
		  this.listaPoblaciones = data;
		  this.items3 = data;

		

			this.optionsPoblacion = [];
			this.optionsPoblacionLower= [];
			this.optionsCalles = [];

			for (let i = 0; i < this.items3.length; i++) { 
				this.optionsPoblacion.push(data[i]['Poblacion']);
				this.optionsPoblacionLower.push(data[i]['Poblacion'].normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase());
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
	 
	
	 
	 
		this.optionsPoblacionLower = [];
		this.optionsPoblacion = [];
		this.optionsCalles = [];
	
	 
		 
		this.consulta.Poblacion  ='';
		this.consulta.Calle  ='';
		this.consulta.Numero  ='';
	 

	}
	}

	public onPoblacionChanged() {


		if (this.optionsPoblacionLower.indexOf(this.consulta.Poblacion.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase())!=-1 ){
			Swal.fire({
				
				title: 'Cargando direcciones.',
				allowOutsideClick: false ,
				onBeforeOpen: () => {
					Swal.showLoading()}
					
			  })
	

		this.listaDeCalles.getCalles(this.consulta.Provincia.toString(),this.consulta.Poblacion.toString())
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
		 
		  
		   
		   
	 
	 
		  
			 
			   
		 
			  this.consulta.Calle  ='';
			  this.consulta.Numero  ='';
		
	
			this.changeDetector.markForCheck();

		}); 
	}
	}

	public realizarConsulta() {
		this.listaDeCalles.getCalles(this.consulta.Provincia.toString(),this.consulta.Poblacion.toString())
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

		var numero="";
		const consultas: getConsulta[] = [];
		 if (this.consulta.Numero!=null){
			   numero=this.consulta.Numero.toString();
		 } 
 
		this.listaDeCobertura.consultarCobertura(this.consulta.Provincia.toString(),this.consulta.Poblacion.toString(),
		this.consulta.Calle.toString(),numero.toString())
		.subscribe(data => {
			console.log(data);


			if (data['Response']=='KO'){
				Swal.fire({
				  icon: 'error',
				  title: data['Status']
			  
				})
		
		 
			  } else{
				this.items2 = data;

	

				for (let i = 0; i < this.items2.length; i++) { 
					consultas.push(createConsulta(data[i].PROVINCIA,data[i].POBLACION,data[i].NOMBRE_VIA,data[i].NUMERO,data[i].TIPO_HUELLA,data[i].ACCESO));
				}
	
				this.tableHidden = false;
				
				this.dataSource = new MatTableDataSource(consultas);
				grecaptcha.reset();
				this.Recaptcha=false;
				this.changeDetector.markForCheck();
			} 
			});
				
			  


			

	}
 	
	} 

 

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase(); // Datasource defaults to lowercase matches
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
		const filterValue = value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
	
		return this.optionsPoblacion.filter(option => option.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().includes(filterValue));
	}
	
	public _filterProvincias(value: string): string[] {
		const filterValue = value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
		return this.optionsProvincia.filter(option => option.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().includes(filterValue));
	}

	public _filterCalles(value: string): string[] {
		const filterValue = value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
		return this.optionsCalles.filter(option => option.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase().includes(filterValue));
	}
	
	
 
  }

  
  /** Builds and returns a new User. */
function createConsulta(
		Provincia:            string,
		Poblacion:            string,
		Calle:                string,
		Numero:               string,
		Huella:               string,
		ACCESO:		 string
	): getConsulta {	  
	return {
		Provincia:            Provincia,
		Poblacion:            Poblacion,
		Calle:                Calle,
		Numero:               Numero,
		Huella:               Huella,
		ACCESO:  ACCESO
	}
}

  
  export interface Consulta {
	Provincia:            string;
	Poblacion:            string;
	Calle:                string;
	Numero:               string;
  }
  
  export interface getConsulta {

	Provincia:            string;
	Poblacion:            string;
	Calle:                string;
	Numero:               string;
	Huella:				  string;
	ACCESO:  string;

}