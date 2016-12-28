import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/User';

import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/authentication/register/register.component.html'
})

export class RegisterComponent implements OnInit {

    public userToRegister: FormGroup;
    
    public error: boolean = false;
    public errorMessage: string;

    constructor(
        private fb: FormBuilder,
        private _authService: AuthenticationService,
        private _router: Router) { }

    ngOnInit() {
        this.userToRegister = this.fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
            'email': ['', Validators.required],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'confirmedPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
    }

    register(): void {
        console.log(this.userToRegister.value);
        this._authService
            .register(this.userToRegister.value)
            .subscribe((res: any) => {
                 this._router.navigateByUrl('/login');
            },
            (err: any) => {
               
                let notificationMsg = JSON.parse(err._body).message;
                this.error = true
                this.errorMessage = notificationMsg;
                setTimeout(() => {
                this.error = false;
                    
                }, 4500);
            });
    }
}