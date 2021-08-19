// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
 
import { PartialsModule } from '../../partials/partials.module';
 
// Components
import { VerUsuariosComponent } from './ver-usuarios/ver-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
 

import {
	MatInputModule,
	 
 
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule,
 
} from '@angular/material';

@NgModule({
  declarations: [
	VerUsuariosComponent,
	NuevoUsuarioComponent,
	EditarUsuarioComponent
  ],
  imports: [
 
 
    CommonModule,
 
	PartialsModule,
	FormsModule,
	ReactiveFormsModule,
	MatButtonModule,
	MatMenuModule,
	MatSelectModule,
	MatInputModule,
	MatTableModule,
	MatAutocompleteModule,
	MatRadioModule,
	MatIconModule,
	MatNativeDateModule,
	MatProgressBarModule,
	MatDatepickerModule,
	MatCardModule,
 
	MatSortModule,
	MatCheckboxModule,
 
	MatSnackBarModule,
	MatExpansionModule,
	MatTabsModule,
	MatTooltipModule,
	MatDialogModule,
    RouterModule.forChild([
		{
			path: 'ver-usuarios',
			component: VerUsuariosComponent
		},
		{
			path: 'nuevo-usuario',
			component: NuevoUsuarioComponent
		},
		{
			
			path: 'editar-usuario/:idUsuario',
			component: EditarUsuarioComponent
		},
	]),
  ]
})
export class UsuariosModule { }
