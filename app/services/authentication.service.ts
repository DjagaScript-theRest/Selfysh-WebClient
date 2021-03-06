import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpHeadersService } from './http-headers.service'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Constants } from '../constants/constants';

const RegisterUrl: string = Constants.hostUrl + 'api/auth/register';
const LoginUrl: string = Constants.hostUrl + 'api/auth/login';
const LogoutUrl: string = Constants.hostUrl + 'api/auth/logout';
const GetLoggedUser: string = Constants.hostUrl + 'api/auth/getLoggedUser';
const AuthToken: string = 'auth_token';
@Injectable()
export class AuthenticationService {

    private loggedIn: boolean = false;

    constructor(
        private http: Http,
        private httpHedersService: HttpHeadersService
    ) {

    }

    register(userToRegister: Object): Observable<any> {
        return this.http.post(RegisterUrl, userToRegister)
            .map((res: Response) => {
                return {
                    status: res.status,
                    body: res.json()
                }
            })
    }

    login(userToLogin: Object): Observable<any> {
        return this.http.post(LoginUrl, userToLogin)
            .map((res: Response) => {
                let body = res.json();
                let token = body.token;

                localStorage.setItem(AuthToken, token);
                this.loggedIn = true;
                return {
                    status: res.status,
                    body: res.json()
                }
            })
    }

    logout(): Observable<Response> {
        localStorage.removeItem(AuthToken);
        this.loggedIn = false;
        return this.http.post(LogoutUrl, '');
    }
}