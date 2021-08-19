import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import { MenuService } from '../../../core/api/services/menu.service';
import { UserService } from '../../../core/api/services/user/user.service';

import {PagePersonalComponent} from './page-personal.component';

@NgModule({
  declarations: [
    PagePersonalComponent,
  ],
  providers:[
    MenuService,
    UserService
  ],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatDividerModule,    
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
    RouterModule.forChild([
			{
				path: '',
				component: PagePersonalComponent
			},
		]),
  ]
})
export class PagePersonalModule { }
