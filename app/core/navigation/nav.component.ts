import { Component, OnInit } from '@angular/core';

import { MenuItem } from './menu-item.js';

@Component({
    moduleId: module.id,
    selector: 'selfysh-nav',
    templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
    public menuItems: MenuItem[];

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
                link: ['/bitches'],
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
    }
}