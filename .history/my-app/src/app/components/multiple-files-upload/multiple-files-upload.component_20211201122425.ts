import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-multiple-files-upload',
  templateUrl: './multiple-files-upload.component.html',
  styleUrls: ['./multiple-files-upload.component.css']
})
export class MultipleFilesUploadComponent implements OnInit {
  selectedFiles: FileList;
  message = '';
  fileInfos: Observable<any>;
  images = [];
   imageUrl: string;

 constructor(private appService:AppService ) { }
 
 ngOnInit() {
  this.fileInfos = this.appService.getFiles();

 }   

 selectFiles(event) {
  this.selectedFiles = event.target.files;
  //this.images=event.target.files;
}

uploadFiles() {
  this.message = '';

  for (let i = 0; i < this.selectedFiles.length; i++) {
    this.upload(i, this.selectedFiles[i]);

  }
}

upload(idx, file) {


  const imageForm = new FormData();
  imageForm.append('image', file);
  this.appService.imageUpload(imageForm).subscribe(res => {
    this.imageUrl = res['image'];
    console.log(this.imageUrl)
  });

}


}
