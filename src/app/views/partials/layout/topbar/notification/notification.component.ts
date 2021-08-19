// Angular
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificacionesService } from '../../../../../core/api/services/notificaciones/notificaciones.service'

@Component({
	selector: 'kt-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['notification.component.scss']
})
export class NotificationComponent {

	newNoticeFlag:boolean = false;
	selectNoticias = [
		{value: 'Lentitud en la web', viewValue: 'Lentitud en la web'},
		{value: 'Error al descargar informe', viewValue: 'Error al descargar informe'},
		{value: 'Error de usuario', viewValue: 'Error de usuario'},
		{value: 'Lentitud', viewValue: 'Lentitud'},
		{value: 'Error de informes', viewValue: 'Error de informes'}
	  ];
	// Show dot on top of the icon
	@Input() dot: string;

	// Show pulse on icon
	@Input() pulse: boolean;

	@Input() pulseLight: boolean;

	// Set icon class name
	@Input() icon = 'flaticon2-bell-alarm-symbol';
	@Input() iconType: '' | 'success';

	// Set true to icon as SVG or false as icon class
	@Input() useSVG: boolean;

	// Set bg image path
	@Input() bgImage: string;

	// Set skin color, default to light
	@Input() skin: 'light' | 'dark' = 'light';

	@Input() type: 'brand' | 'success' = 'success';

	/**
	 * Component constructor
	 *
	 * @param sanitizer: DomSanitizer
	 */
	constructor(private sanitizer: DomSanitizer,private _snackBar: MatSnackBar, private notificacionesService:NotificacionesService) {
	}

	backGroundStyle(): string {
		if (!this.bgImage) {
			return 'none';
		}

		return 'url(' + this.bgImage + ')';
	}

	openSnackBar(type: string, comment: string) {
		this._snackBar.open(type, "Enviado", {
		  duration: 2000,
		});

		this.notificacionesService.postNotificacion(type,comment)
		.subscribe((data)=>{
	
		})
	}

	newNotice(){
		this.newNoticeFlag = true;
	}

	drpOpen(e){
		e.preventDefault();
	}
}
