import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IPost } from './post';
import { HttpHeadersService } from './../services/http-headers.service';

const AuthToken: string = 'auth_token';

@Injectable()
export class PostService {
    private _postUrl = 'http://localhost:1337/api/posts';

    constructor(private _http: Http, private httpHeadersService: HttpHeadersService) { }

    getPosts(): Observable<IPost[]> {
        return this._http.get(this._postUrl)
            .map((response: Response) => <IPost[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
    }

    getPostsByCategory(category: string): Observable<IPost[]> {
        return this._http.get(this._postUrl + '/' + category)
            .map((response: Response) => <IPost[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
    }

    createPost(post: IPost): Observable<IPost> {
        let token = localStorage.getItem(AuthToken);
        let options = this.httpHeadersService.getHeaders(token);

        return this._http.post(this._postUrl, post, options)
            .map((response: Response) => {
                return <IPost>response.json()
            });
    }
}
