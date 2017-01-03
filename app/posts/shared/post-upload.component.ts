import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';
import { Constants } from './../../constants/constants';

@Component({
    moduleId: module.id,
    selector: 'post-upload',
    templateUrl: './post-upload.component.html'
})
export class PostUploadComponent implements OnInit {
    public uploader: FileUploader = new FileUploader({ url: `${Constants.hostUrl}api/posts/upload` });
    @Output() onUploaded = new EventEmitter<any>();

    public ngOnInit() {
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            let file = JSON.parse(response).file;
            this.onUploaded.emit(file);
        };
    }

    public uploadImage(): void {
        this.uploader.uploadAll();
    }

    public removeImage(): void {
        this.uploader.clearQueue();
    }
}