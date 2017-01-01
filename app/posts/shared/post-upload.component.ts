import { Component } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    selector: 'post-upload',
    templateUrl: './post-upload.component.html'
})
export class PostUploadComponent {
    public uploader: FileUploader = new FileUploader({ url: 'http://localhost:1337/api/posts/upload' });

    public uploadImage(): void {
        this.uploader.uploadAll();
    }

    public removeImage(): void {
        console.log(this.uploader.queue[0].isUploaded);
    }
}