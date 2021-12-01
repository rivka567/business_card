import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { disableDebugTools } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';
import {User} from 'src/app/app-state/classes/user';
import {UserLinks} from 'src/app/app-state/classes/user-links';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  newUser:User
  newUserLinks:UserLinks;

  userId:string;

  constructor(private http: HttpClient) { 
  }


  rootURL = '/api';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user) {
    debugger
    alert('service')
   return this.http.post(this.rootURL + '/user', {user},{responseType: 'text'})
  }

  addUserLinks(userLinks)uploadFile
  {
    debugger
    let array={
      'userLinks':userLinks,
      'userId':this.userId
    }
    alert(this.userId)
    console.log(array);
   return this.http.post(this.rootURL + '/userLinks',{array},{responseType: 'text'});
  }

  getall()
  {
    return this.http.get(this.rootURL+'/users');
  }

  getUserById(id):Observable<any>
  {
   return this.http.get(this.rootURL+'/user?id='+id);
  }


  // imageUpload(imageForm: FormData) {
  //   let array={
  //     'userLinks':imageForm,
  //     'userId':this.userId
  //   }
  //   return this.http.post(this.rootURL+'/v1/upload', 
  //   array);
  //  }
  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    return this.http.post(this.rootURL+'/v1/upload', 
    imageForm);
   }


   upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.rootURL}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.rootURL}/files`);
  }


  // upload(file:File):Observable<any>
  // {
  // console.log(file)

  // const formdata: FormData = new FormData();
  // formdata.append('file', file);
  // // console.log(formdata.file)
  // return this.http.post(this.rootURL+'/upload',formdata);
  // }
 
}
