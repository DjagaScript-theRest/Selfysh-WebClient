import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const RegisterUrl: string = 'http://localhost:1337/api/auth/register';
const LoginUrl: string = 'http://localhost:1337/api/auth/login';
const GetLoggedUserUrl: string = 'http://localhost:1337/api/auth/getLoggedUser';
const AuthToken: string = 'auth_token';

@Injectable()
export class AuthenticationService {

    private loggedIn: boolean = false;

    constructor(private http: Http) {

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

    logout(): void {
        localStorage.removeItem(AuthToken);
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    getLoggedUser(): Observable<any> {
        let headers = this.createAuthorizationHeader();
        let options = new RequestOptions({ headers: headers });

        return this.http.get(GetLoggedUserUrl, options)
            .map((res: Response) => {
                let body = res.json();
                return {
                    status: res.status,
                    body: body
                }
            })
    }

    createAuthorizationHeader(): Headers {
        let headers = new Headers({ 'Content-type': 'application/json' });
        let authToken = localStorage.getItem(AuthToken);
        headers.append('Authorization', authToken);
        return headers;
    }

}