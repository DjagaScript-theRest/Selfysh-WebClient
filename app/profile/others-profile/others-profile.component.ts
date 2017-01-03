import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http';
import { UserService } from '../../services/user-service';
import { AuthenticationService } from '../../services/authentication.service';
import { Constants } from './../../constants/constants'
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/profile/others-profile/others-profile.component.html',
    styleUrls: ['app/profile/others-profile/others-profile.component.css']

})
export class OthersProfileComponent implements OnInit {
    public loggedUser: any;
    public profilesUser: any;
    public imagesUrl = Constants.imagesUrl;

    constructor(private userService: UserService,
        private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.userService
            .getLoggedUser()
            .toPromise()
            .then(x => {
                this.loggedUser = x.user
            });
        let userId: string = (<any>this.route.params)._value.id;
        this.userService.getUserData(userId)
            .subscribe(x => {
                console.log(x)
                this.profilesUser = x
            });
    }

    subscribe() {
        let subscribed = { id: this.profilesUser._id, username: this.profilesUser.username };
        if (!this.loggedUser) {
            return
        }

        this.userService.subscribe(subscribed.id)
            .subscribe(() => location.reload)
    }
}