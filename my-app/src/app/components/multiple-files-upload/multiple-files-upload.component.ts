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
//   myForm = new FormGroup({
//    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
//    file: new FormControl('', [Validators.required]),
//    fileSource: new FormControl('', [Validators.required])
//  });
  
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

  // this.appService.upload(file).subscribe(
  //   event => {
  //     if (event.type === HttpEventType.UploadProgress) {
  //     } else if (event instanceof HttpResponse) {
  //       this.fileInfos = this.appService.getFiles();
  //     }
  //   },
  //   err => {
  //     this.message = 'Could not upload the file:' + file.name;
  //   });
}

//  get f(){
//    return this.myForm.controls;
//  }
  
//  onFileChange(event) {
//    if (event.target.files && event.target.files[0]) {
//        var filesAmount = event.target.files.length;
//        for (let i = 0; i < filesAmount; i++) {
//                var reader = new FileReader();
  
//                reader.onload = (event:any) => {
//                  console.log(event.target.result);
//                   this.images.push(event.target.result); 
  
//                   this.myForm.patchValue({
//                      fileSource: this.images
//                   });
//                }
 
//                reader.readAsDataURL(event.target.files[i]);
//        }
//    }
//  }
   
//  submit(){
//    console.log(this.myForm.value);
  //  this.appService.multipleImageUpload(this.myForm.value)
  //    .subscribe(res => {
  //      console.log(res);
  //      alert('Uploaded Successfully.');
  //    })
//  }

}
