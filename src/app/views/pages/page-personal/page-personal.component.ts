import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/api/services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/reducers';

import { AuthNoticeService} from '../../../core/auth';
import { currentUser, Logout, User } from '../../../core/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'kt-page-personal',
  templateUrl: './page-personal.component.html',
  styleUrls: ['./page-personal.component.scss']
})
export class PagePersonalComponent implements OnInit {

  user$: Observable<User>;
  renewPassForm: FormGroup;
  public userProfilePic: string;

  constructor(
    private User: UserService,
		private fb: FormBuilder,
    private authNoticeService: AuthNoticeService,
    private store: Store<AppState>
  ) {

    this.user$ = this.store.pipe(select(currentUser));
    
   }

  ngOnInit() {

    this.initrenewPassForm();
  }

  initrenewPassForm() {
		// demo message to show
		this.renewPassForm = this.fb.group({
			pass: [''
			],
			newPass: [''
			],
			newNewPass: [''
			]
		});
  }

  renewPass() {
    
    const controls = this.renewPassForm.controls;
    
    const authData = {
			pass: controls.pass.value,
      newPass: controls.newPass.value,
      newNewPass: controls.newNewPass.value
    };
    
    this.User.changePassword(authData.pass, authData.newPass, authData.newNewPass)
    
    .subscribe(data => {
      if (data['Response']=='OK'){
        Swal.fire({
          icon: 'success',
          text: data['Status']
      
        })

 
      } else{
        Swal.fire({
          icon: 'error',
          text: data['Status']
        
        })
        
      }
    
      
    });
  }

}
