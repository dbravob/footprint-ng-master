// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Components
import {BaseComponent} from './views/theme/base/base.component';
 
// Auth
import {AuthGuard} from './core/auth';

const routes: Routes = [
	{path: 'auth', loadChildren: () => import('../app/views/pages/auth/auth.module').then(m => m.AuthModule)},

	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'page-personal',
				loadChildren: () => import('../app/views/pages/page-personal/page-personal.module').then(m => m.PagePersonalModule)
			},
			{
				path: 'usuarios',
				loadChildren: () => import('../app/views/pages/usuarios/usuarios.module').then(m => m.UsuariosModule)
			},
			 
			 
		 
			{
				path: 'consulta-cobertura',
				loadChildren: () => import('../app/views/pages/consulta-cobertura/consulta-cobertura.module').then(m => m.ConsultaCoberturaModule)
			},
			 
		 
			{path: '', redirectTo: 'consulta-cobertura/consulta-cobertura', pathMatch: 'full'},
			{path: '**', redirectTo: 'consulta-cobertura/consulta-cobertura', pathMatch: 'full'},
		],
	} 

 
];

@NgModule({
	imports: [
		RouterModule.forRoot(			
			routes,	
			{useHash: true}	
		),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
