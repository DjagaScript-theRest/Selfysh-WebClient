import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { PostListComponent } from './post-list.component';
import { PostCategoryComponent } from './post-category.component';
import { PostUploadComponent } from './shared/post-upload.component';
import { PostCreateComponent } from './post/post.component';
import { InitCapsPipe } from './shared/init-caps.pipe';
import { GuardIsLoggedUser } from './../guards/is-loggedIn.guard';

import { PostService } from './post.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'posts/create', component: PostCreateComponent, canActivate: [GuardIsLoggedUser] },
            { path: 'posts', component: PostListComponent },
            { path: 'posts/:category', component: PostCategoryComponent }
        ])
    ],
    declarations: [
        PostListComponent,
        PostCategoryComponent,
        PostCreateComponent,
        PostUploadComponent,
        FileSelectDirective,
        InitCapsPipe
    ],
    providers: [
        PostService,
        GuardIsLoggedUser
    ]
})
export class PostModule { }