import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = new FormGroup({
    password: new FormControl('',[Validators.nullValidator,Validators.minLength(5),Validators.required] ),
    firstName: new FormControl('',[Validators.nullValidator,Validators.required]),
    lastName: new FormControl('',[Validators.nullValidator,Validators.required]),
    email: new FormControl('',[Validators.nullValidator,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required] ),
    phone: new FormControl('',[Validators.nullValidator,Validators.required]),
  }); 
  
  constructor(private appService:AppService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.appService.addUser(this.userForm.value).subscribe(data => {    
      alert(data)
      console.log('message::::', data);
      this.appService.userId=data;
      this.userForm.reset();
      // localStorage.setItem("userId",data)
      // sessionStorage.setItem("userId",data)
      this.router.navigate(['userLinks'])
    });

  }

  getall()
  {
    this.appService.getall().subscribe();

  }

}
