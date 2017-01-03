import { Component, OnInit } from '@angular/core';

import { MenuItem } from './menu-item.js';
import { UserService } from '../../services/user-service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Constants } from '../../constants/constants';
import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'selfysh-nav',
    templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
    public menuItems: MenuItem[];
    public user: any = null;
    public logoutUrl = 'http://localhost:1337/api/auth/logout';
    public imagesUrl = Constants.imagesUrl;

    constructor(private userService: UserService,
        private authService: AuthenticationService,
        private router: Router) {

    }

    ngOnInit() {
        this.menuItems = [{
            name: 'Home',
            link: ['/home'],
            children: null
        }, {
            name: 'Category',
            link: [''],
            children: [{
                name: 'Kifla',
                link: ['/posts/kifla'],
                children: null
            }, {
                name: 'Fun',
                link: ['/posts/fun'],
                children: null
            }, {
                name: 'Chilling',
                link: ['/posts/chilling'],
                children: null
            }, {
                name: 'Crazy',
                link: ['/posts/crazy'],
                children: null
            }, {
                name: 'Extreme',
                link: ['/posts/extreme'],
                children: null
            }, {
                name: 'Party',
                link: ['/posts/party'],
                children: null
            }, {
                name: 'Celebration',
                link: ['/posts/celebration'],
                children: null
            }, {
                name: 'Other',
                link: ['/posts/other'],
                children: null
            }]
        }
        // {
        //     name: 'Top',
        //     link: [''],
        //     children: [{
        //         name: 'Weekly top',
        //         link: ['/weekly-top'],
        //         children: null
        //     }, {
        //         name: 'Monthly top',
        //         link: ['/monthly-top'],
        //         children: null
        //     }]
        // }, {
        //     name: 'Daily Challenge',
        //     link: ['/daily-challenge'],
        //     children: null
        // }, {
        //     name: 'Weekly Challenge',
        //     link: ['/weekly-challenge'],
        //     children: null
        // }
        ];
        this.userService
            .getLoggedUser()
            .toPromise()
            .then(x => {
                this.user = x.user
            });
    }

    public logout() {
        this.authService.logout()
            .subscribe(() => location.reload())
    }
}