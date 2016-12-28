import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostListComponent } from './post-list.component';

import { PostService } from './post.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'posts', component: PostListComponent }
        ])
    ],
    declarations: [
        PostListComponent
    ],
    providers: [
        PostService
    ]
})
export class PostModule { }