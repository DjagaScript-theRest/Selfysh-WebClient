import { Component } from '@angular/core';

import { UserService } from './../../services/user-service';

const DEFAULT_CATEGORY: String = 'other';

@Component({
    moduleId: module.id,
    templateUrl: './post.component.html'
})
export class PostCreateComponent {
    public postTitle: String;
    public selectedCategory: String = DEFAULT_CATEGORY;
    public categories: String[];

    constructor(private userService: UserService) {
        this.categories = ['fun', 'chilling', 'crazy', 'extreme', 'party',
            'celebration', 'kifla', 'other'];
    }

    public createPost() {
        if (!this.postTitle) {
            console.log('No title');
        }
    }
}