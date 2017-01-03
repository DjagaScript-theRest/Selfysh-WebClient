import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Constants } from '../../constants/constants'
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { HttpHeadersService } from '../../services/http-headers.service';
import { Router } from '@angular/router'
import { AuthenticationService } from '../../services/authentication.service'
import { FileUploader } from 'ng2-file-upload';
@Component({
    templateUrl: 'app/profile/profile-settings/profile-settings.component.html'
})

export class ProfileSettingsComponent implements OnInit {
    private formUploaderConfig = {url:''};
    public user: any;
    public imagesUrl = Constants.imagesUrl;
    public userSettingsToUpdate: FormGroup;
    public uploader: FileUploader ;
    constructor(
        private userService: UserService,
        private fb: FormBuilder,
        private httpHeadersService: HttpHeadersService,
        private router: Router,
        private authService: AuthenticationService) {

    }
    public ngOnInit(): void {

        this.userService
            .getLoggedUser()
            .subscribe(x => {
                this.user = x.user;
                this.uploader = new FileUploader({url: Constants.hostUrl + 'api/users/user/' + this.user.id + '/avatar'})
                console.log(Constants.hostUrl + 'api/users/user/' + this.user.id + '/avatar')
            });

        this.userSettingsToUpdate = this.fb.group({
            'newPassword': ['', Validators.minLength(4)],
            'confirmedPassword': ['', Validators.minLength(4)],
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
        });


    }

    updateSettings() {
        this.uploader.uploadAll();
        this.userService.updateSettings(this.user.id, this.userSettingsToUpdate.value)
            .subscribe(x => {
                // this.router.navigate(['/profile'])
                this.authService.logout();
                this.router.navigate(['/login']);
                location.reload();

            })
    }

    public uploadImage(): void {
        this.uploader.uploadAll();
    }

    public removeImage(): void {
        this.uploader.clearQueue();
    }
}