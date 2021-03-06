import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpHeadersService } from './http-headers.service';
import { Constants } from './../constants/constants';
import { IPost } from './../posts/post';
import { AuthenticationService } from './authentication.service'

const UsersUrl: String = Constants.hostUrl + 'api/users';
const UserByIdUrl: string = Constants.hostUrl + 'api/users/user/';
const GetLoggedUserUrl: string = Constants.hostUrl + 'api/auth/getLoggedUser';
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

    public addPost(username: String, post: IPost): Observable<any> {
        let token = localStorage.getItem(AuthToken);
        let options = this.httpHeadersService.getHeaders(token);

        let url = `${UsersUrl}/${username}/image-posts`;
        return this.http.post(url, post, options)
            .map((res: Response) => {
                let body = res.json();
            });
    }

    public getLoggedUser(): Observable<any> {
        let token = localStorage.getItem(AuthToken);
        let options = this.httpHeadersService.getHeaders(token);

        return this.http.get(GetLoggedUserUrl, options)
            .map((res: Response) => {
                let body = res.json();
                return {
                    status: res.status,
                    user: body.user
                }
            })
    }


    public isLoggedIn(): Observable<boolean> {
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

    public updateSettings(id: any, settings: any) {
        let token = localStorage.getItem(AuthToken);
        let options = this.httpHeadersService.getHeaders(token);
        console.log(options)
        return this.http.put(`${UserByIdUrl}${id}`, JSON.stringify(settings), options)
            .map((res: Response) => {
                return { status: res.status, body: res.json() }
            })
    }

    public subscribe(subscribedId: any) {
        let token = localStorage.getItem(AuthToken);
        let options = this.httpHeadersService.getHeaders(token);
        return this.http.get(Constants.hostUrl + 'api/users/subscribe/' + subscribedId, options)

    }
}

