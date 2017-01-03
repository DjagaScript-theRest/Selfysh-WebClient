import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Constants } from '../../constants/constants'
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { HttpHeadersService } from '../../services/http-headers.service';
import { Router } from '@angular/router'
@Component({
    templateUrl: 'app/profile/profile-settings/profile-settings.component.html'
})

export class ProfileSettingsComponent implements OnInit {
    public user: any;
    public imagesUrl = Constants.imagesUrl;
    public userSettingsToUpdate: FormGroup;

    constructor(
        private userService: UserService,
        private fb: FormBuilder,
        private httpHeadersService: HttpHeadersService,
        private router: Router) {

    }
    public ngOnInit(): void {

        this.userService
            .getLoggedUser()
            .subscribe(x => this.user = x.user);

        this.userSettingsToUpdate = this.fb.group({
            'newPassword': ['', Validators.minLength(4)],
            'confirmedPassword': ['', Validators.minLength(4)],
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
        });
    }

    updateSettings() {
        this.userService.updateSettings(this.user.id, this.userSettingsToUpdate.value)
            .subscribe(x => {
                this.router.navigate(['/profile'])
            })
    }
}