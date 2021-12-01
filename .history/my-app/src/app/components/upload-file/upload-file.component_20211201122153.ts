import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  imageObj: File;
   imageUrl: string;

   constructor(private appService: AppService) {}

   ngOnInit() {}   

   onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
   }

   onImageUpload() {
    const imageForm = new FormData();
    imageForm.append('image', this.imageObj);
    this.appService.imageUpload(imageForm).subscribe(res => {
      this.imageUrl = res['image'];
      console.log(this.imageUrl)
    });
   }


}