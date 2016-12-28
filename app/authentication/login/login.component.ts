import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { NotificationsService } from '../../../node_modules/angular2-notifications';

@Component({ 
  templateUrl: 'app/authentication/login/login.component.html'
})

export class LoginComponent implements OnInit {
    public userToLogin: FormGroup;

    constructor(private fb: FormBuilder,
        private _authService: AuthenticationService,
        private _router: Router) { }

    ngOnInit() {
        this.userToLogin = this.fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        });

    }


    login(): void {
    this._authService.login(this.userToLogin.value)
      .subscribe((res: any) => {        
         this._router.navigateByUrl('/home');
      },
        (err: any) => {
        let notificationMsg = JSON.parse(err._body).message;
      });
  }
}