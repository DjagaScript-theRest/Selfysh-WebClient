import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { Observable } from 'rxjs'


@Injectable()
export class GuardIsLoggedUser implements CanActivate {
    private userService: UserService;

    constructor(authService: UserService, private router: Router) {
        this.userService = authService;
    }

    public canActivate():Observable<boolean> {

        return this.userService.isLoggedIn();
    }
}