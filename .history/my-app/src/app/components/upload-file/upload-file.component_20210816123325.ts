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

// selectedFiles: FileList;
//   currentFileUpload: File;
//   progress: { percentage: number } = { percentage: 0 };

//   constructor(private appService: AppService) { }

//   ngOnInit() {
//   }

//   selectFile(event) {
//     this.selectedFiles = event.target.files;
//   }

//   upload() {
//     this.progress.percentage = 0;

//     this.currentFileUpload = this.selectedFiles.item(0);
//     this.appService.upload(this.currentFileUpload).subscribe(event => {
//       if (event.type === HttpEventType.UploadProgress) {
//         this.progress.percentage = Math.round(100 * event.loaded / event.total);
//       } else if (event instanceof HttpResponse) {
//         console.log('File is completely uploaded!');
//       }
//     });

//     this.selectedFiles = undefined;
//   }
}