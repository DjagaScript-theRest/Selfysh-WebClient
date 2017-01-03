import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
    templateUrl: 'app/authentication/login/login.component.html'
})

export class LoginComponent implements OnInit {
    public userToLogin: FormGroup;
    public error: boolean = false;
    public errorMessage: string;
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
               this._router.navigateByUrl('/posts')
               location.reload();
            },
            (err: any) => {
                let notificationMsg = JSON.parse(err._body).message;
                this.error = true
                this.errorMessage = notificationMsg;
                setTimeout(() => {
                this.error = false;
                    
                }, 2500);
            });
    }
}