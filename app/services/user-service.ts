import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpHeadersService } from './http-headers.service';

const UserByIdUrl: string = 'http://localhost:1337/api/users/user';
const GetLoggedUserUrl: string = 'http://localhost:1337/api/auth/getLoggedUser';
const AuthToken: string = 'auth_token';


@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private httpHeadersService: HttpHeadersService) {
    }

    public getUserData(userId: string): Observable<any> {
        let url = `${UserByIdUrl}${userId}`;
        return this.http.get(url).map((response: Response) => response.json());
    }

    public getLoggedUser(): Observable<any> {
        let token = localStorage.getItem(AuthToken);
        let options = this.httpHeadersService.getHeaders(token);

        return this.http.get(GetLoggedUserUrl, options)
            .map((res: Response) => {
                let body = res.json();
                return {
                    status: res.status,
                    body: body
                }
            })
    }


    public isLoggedIn():Observable<boolean> {
        let userDataString: string = localStorage.getItem(AuthToken);
        if (!userDataString) {
            return Observable.of(false);
        }

        return this.getLoggedUser()
            .map((res: any) => {
                if (+res.status == 200) {
                    return true;
                }
                return false;
            })
    }


}

}
