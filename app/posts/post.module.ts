import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { PostListComponent } from './post-list.component';
import { PostCategoryComponent } from './post-category.component';
import { PostUploadComponent } from './shared/post-upload.component';
import { PostCreateComponent } from './post-create/post-create.component';

import { PostService } from './post.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'posts/create', component: PostCreateComponent },
            { path: 'posts', component: PostListComponent },
            { path: 'posts/:category', component: PostCategoryComponent }
        ])
    ],
    declarations: [
        PostListComponent,
        PostCategoryComponent,
        PostCreateComponent,
        PostUploadComponent,
        FileSelectDirective
    ],
    providers: [
        PostService
    ]
})
export class PostModule { }