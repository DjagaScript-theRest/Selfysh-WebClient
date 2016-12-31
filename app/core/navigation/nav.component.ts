import { Component, OnInit } from '@angular/core';

import { MenuItem } from './menu-item.js';
import { UserService } from '../../services/user-service'
import { AuthenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'selfysh-nav',
    templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
    public menuItems: MenuItem[];
    public user: any = null;
    public logoutUrl = 'http://localhost:1337/api/auth/logout';

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
                name: 'Bitches',
                link: ['/posts/bitches'],
                children: null
            }, {
                name: 'Fun',
                link: ['/fun'],
                children: null
            }]
        }, {
            name: 'Top',
            link: [''],
            children: [{
                name: 'Weekly top',
                link: ['/weekly-top'],
                children: null
            }, {
                name: 'Monthly top',
                link: ['/monthly-top'],
                children: null
            }]
        }, {
            name: 'Daily Challenge',
            link: ['/daily-challenge'],
            children: null
        }, {
            name: 'Weekly Challenge',
            link: ['/weekly-challenge'],
            children: null
        }];
        this.userService
            .getLoggedUser()
            .subscribe(x => this.user = x.user);

    }

    public logout() {
        this.authService.logout()
        .subscribe(()=> location.reload())
    }
}