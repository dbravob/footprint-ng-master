// Angular
import { Component } from '@angular/core';
import { AuthService } from '../../../../core/auth/_services/auth.service'

@Component({
	selector: 'kt-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {

	supervisor = false

	constructor(
		private authService: AuthService
	){

	}

	ngOnInit(){
		this.authService.getUserByToken()
		.subscribe(data =>{
			if(data.id == 1431){
				this.supervisor = true;
			}
		})
	}
}
