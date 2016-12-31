import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http';
import { IUser } from './user';
import { UserService } from '../services/user-service';

@Component({
    templateUrl: 'app/profile/profile.component.html',
    styleUrls: ['app/profile/profile.component.css']

})
export class ProfileComponent implements OnInit {
    public user: any;
    constructor(private userService: UserService) { }

    public ngOnInit(): void {
        this.userService
            .getLoggedUser()
            .subscribe((res: any) => {this.user = res.user })
}
}