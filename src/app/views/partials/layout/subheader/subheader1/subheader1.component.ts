// Angular
import { AfterViewInit, Component, Input, OnDestroy, OnInit, Directive, ChangeDetectorRef } from '@angular/core';
// RxJS
import { Subscription } from 'rxjs';
// Layout
import { SubheaderService } from '../../../../../core/_base/layout';
import { Breadcrumb } from '../../../../../core/_base/layout/services/subheader.service';

import {MonitorService} from '../../../../../core/api/services/monitor.service';

@Component({
	selector: 'kt-subheader1',
	templateUrl: './subheader1.component.html',
	styleUrls: ['./subheader1.component.scss']
})


export class Subheader1Component implements OnInit, OnDestroy, AfterViewInit {
	// Public properties
	@Input() fluid: boolean;
	@Input() clear: boolean;
 
	today: number = Date.now();
	title = '';
	desc = '';
	aaa:string = '/ventas/nueva-venta';
	breadcrumbs: Breadcrumb[] = [];
	items: any = [];

	// Private properties
	private subscriptions: Subscription[] = [];
	mostrar: boolean;
	/**
	 * Component constructor
	 *
	 * @param subheaderService: SubheaderService
	 */
	constructor(
		public subheaderService: SubheaderService,
		public monitor: MonitorService,
		private changeDetector: ChangeDetectorRef
	) {
	 
		 
		 
				document.getElementById('kt_wrapper').style.paddingTop = '40px';
		 
		 
			 
		 


		
	}

 
	
	
	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
	}

	/**
	 * After view init
	 */
	ngAfterViewInit(): void {
		
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
	}

 

}


