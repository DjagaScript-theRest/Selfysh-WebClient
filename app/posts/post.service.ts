import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IPost } from './post';

@Injectable()
export class PostService {
    private _postUrl = 'http://localhost:1337/api/posts';

    constructor(private _http: Http) { }

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

    getPostById(id: string): Observable<IPost> {
        return this.getPosts()
            .map((posts: IPost[]) => posts.find(p => p._id === id));
    }
}
