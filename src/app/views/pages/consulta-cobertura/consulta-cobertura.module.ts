// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { RecaptchaModule } from 'ng-recaptcha'; 
import { PartialsModule } from '../../partials/partials.module';
 
 
// Components
import { ConsultaCoberturaComponent } from './consulta-cobertura/consulta-cobertura.component';
import { ConsultaCoberturaNuevaComponent } from './consulta-cobertura-nueva/consulta-cobertura-nueva.component';
import { ConsultasRealizadasComponent } from './consultas-realizadas/consultas-realizadas.component';
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
	MatTooltipModule
} from '@angular/material';


@NgModule({
  declarations: [
    ConsultaCoberturaComponent,
    ConsultaCoberturaNuevaComponent,
    ConsultasRealizadasComponent 
  ],
  imports: [
    CommonModule,
    RecaptchaModule,
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
				path: 'consulta-cobertura',
        component: ConsultaCoberturaComponent,
      },
      {
				path: 'consulta-cobertura-nueva',
        component: ConsultaCoberturaNuevaComponent,
      },
      {
				path: 'consultas-realizadas',
        component: ConsultasRealizadasComponent,
			}
		]),
  ]
})
export class ConsultaCoberturaModule { }
