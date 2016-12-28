import {Component} from '@angular/core';

import {IPost} from './post';
import {PostService} from './post.service';

@Component({
    templateUrl: './post-list.component.html',
})

export class PostListComponent {
    posts: IPost[]

    constructor(private _productService: PostService) {
    }
    
}