import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IPost } from './post';

@Injectable()
export class PostService {
    private _postUrl = '../../api-test/posts.json';

    constructor(private _http: Http) { }

    getPosts(): Observable<IPost[]> {
        return this._http.get(this._postUrl)
            .map((response: Response) => <IPost[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
    }
}
