export class MenuConfig {
	public list = this.defaultMenu();

	public defaults: any = {
		header: {
			
		},
		aside: {
			self: {},
			items: this.list
		},
	};

	public get configs(): any {
		return this.defaults;
	}

	public defaultMenu(): any {

		// DEFAULT MENU
		return [
			{
				title: 'Area Personal',
				root: true,
				alignment: 'left',
				toggle: 'click',
				icon: 'flaticon-user-settings',
				submenu: [
					{
						title: 'Cambiar Contraseña',
						bullet: 'dot',
						page: '/page-personal',
					}
				]
				
			},	
			{
				title: 'Usuarios',
				root: true,
				alignment: 'left',
				toggle: 'click',
				icon: 'flaticon-users',
				submenu: [
					{
						title: 'Nuevo Usuario',
						bullet: 'dot',
						page: '/usuarios/nuevo-usuario',
					},
					{
						title: 'Visualizar Usuarios',
						bullet: 'dot',
						page: '/usuarios/ver-usuarios',
					}
					
				]
				
			},
			 
			{
				title: 'Consultas',
				root: true,
				alignment: 'left',
				toggle: 'click',
				icon: 'flaticon2-graph-1',
				submenu: [
					{
						title: 'Consulta Cobertura',
						bullet: 'dot',
						page: '/consulta-cobertura/consulta-cobertura',
					},
					{
						title: 'Consulta Autoin',
						bullet: 'dot',
						page: '/consulta-cobertura/consulta-cobertura-nueva',
					},
					{
						title: 'Consultas Realizadas',
						bullet: 'dot',
						page: '/consulta-cobertura/consultas-realizadas',
					}

				]
				
			},	
		]
	}
}
