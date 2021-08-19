// Angular
import { Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject } from 'rxjs';
// Object path
import * as objectPath from 'object-path';
// Services
import { MenuConfigService } from './menu-config.service';

import { MenuService } from '../../../../../app/core/api/services/menu.service';

@Injectable()
export class MenuAsideService {
	// Public properties
	menuList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

	/**
	 * Service constructor
	 *
	 * @param menuConfigService: MenuConfigService
	 */
	constructor(
		private Menu: MenuService,
		private menuConfigService: MenuConfigService
	) {
		
		
		this.loadMenu();
	}

	/**
	 * Load menu list
	 */
	loadMenu() {

		// GET LIST MENU
		this.Menu.getMenu()		
		.subscribe(data => {
			console.log(data)
			let original = this.menuConfigService.getMenus();
			let updated = this.menuConfigService.getMenus();
			let array = new Array();

	

			original.aside.items.forEach(element => {

				Object.values(data).forEach(element2 => {

					if	(element2.Menu == element.title) {

						let flag = true;

						element.submenu.forEach((subMenuFront, index) => {			
							let flag = true;				
							element2.SubMenu.forEach(subMenuApi => {

								if (subMenuFront.title === subMenuApi){
									flag = false;
								}
							});

							if	(flag) {
								element.submenu.splice(index,1);
							}
						});

						array.push(element);
					}
				});

			});

			updated.aside.items = array;
			
			// get menu list
			const menuItems: any[] = objectPath.get(updated, 'aside.items');
			this.menuList$.next(menuItems);
			
		});

	}
}
