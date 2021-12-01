import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.css']
})
export class UserLinksComponent implements OnInit {

  constructor(private appService: AppService,private router:Router) {}

  userForm = new FormGroup({
    facebook: new FormControl(''),
    instagram: new FormControl(''),
    linkedIn: new FormControl(''),
    gitHub: new FormControl('' ),
  });

  
  onSubmit() {
   this.router.navigate(['uploadFile'])
    this.appService.addUserLinks(this.userForm.value).subscribe(data => {
      alert("work data")
      console.log('message::::', data);
       this.userForm.reset();
       this.router.navigate(['uploadFile'])
       //this.router.navigate(['my-web-site/'+this.appService.userId])
      //this.router.navigate(['uploadFile'])
    });
    
  }

  

  ngOnInit() {
   
  }
}



