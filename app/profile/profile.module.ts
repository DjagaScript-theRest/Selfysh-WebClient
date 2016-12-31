import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../services/user-service'
import { ProfileComponent } from './profile.component'

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        RouterModule,
        HttpModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: [
        UserService
    ]
})
export class ProfileModule { }