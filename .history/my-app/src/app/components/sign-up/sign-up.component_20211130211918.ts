import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private appService: AppService) {}

  userForm = new FormGroup({
    password: new FormControl('',[Validators.nullValidator,Validators.minLength(5),Validators.required] ),
    firstName: new FormControl('', [Validators.nullValidator,Validators.required]),
    email: new FormControl('',[Validators.nullValidator,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required] ),
    phone: new FormControl('', [Validators.nullValidator,Validators.required]),
  }); 

  ngOnInit() {
   
  }

  onSubmit() {
    alert("onSubmit")
   // this.appService.addUser(this.userForm.value)
    // this.appService.addUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
    //   console.log('message::::', data);
    //   this.userCount = this.userCount + 1;
    //   console.log(this.userCount);
    //   this.userForm.reset();
    // });

    this.appService.addUser(this.userForm.value).subscribe(data => {   
      alert('si')  
      console.log('message::::', data);
      this.userForm.reset();
    });
    
  }

  // getAllUsers() {
  //   this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
  //       this.users = users;
  //   });
  // }

 
}
