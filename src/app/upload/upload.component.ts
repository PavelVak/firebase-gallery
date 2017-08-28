import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload.model';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  files: FileList;
  upload: Upload;

  constructor(private uploadService: UploadService) { }

  handleFiles(event) {
    this.files = event.target.files;
  }

  uploadFiles() {
    const filesToUpload = this.files;
    let fileArr: any[] = [];
    for (let file in filesToUpload) {
      if(filesToUpload[file] instanceof File)
      fileArr.push(filesToUpload[file]);
    }
    fileArr.forEach( item => {
      this.upload = new Upload(item);
      this.uploadService.uploadFile(this.upload);
    });
  }
}
