import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http';
import { IUser } from './user';
import { UserService } from '../services/user-service';
import { AuthenticationService } from '../services/authentication.service';
import { Constants } from './../constants/constants'

@Component({
    templateUrl: 'app/profile/profile.component.html',
    styleUrls: ['app/profile/profile.component.css']

})
export class ProfileComponent implements OnInit {
    public user: any;
    // public cover= "https://pbs.twimg.com/profile_banners/50988711/1384539792/600x200";
    public imagesUrl = Constants.imagesUrl;

    constructor(private userService: UserService) {
        this.userService
            .getLoggedUser()
            .toPromise()
            .then(x => {
                this.user = x.user
                console.log(x)
            });
    }

    public ngOnInit(): void {

    }
}