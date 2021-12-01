import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/app-state/classes/user';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-web-site',
  templateUrl: './web-site.component.html',
  styleUrls: ['./web-site.component.css']
})
export class WebSiteComponent implements OnInit {

  constructor(private route:ActivatedRoute,private appService:AppService) { }

  user:User;

  ngOnInit(): void {
    const id= this.route.snapshot.params['id'];
    this.getUserById(id);

  }

  getUserById(id:string)
  {
    this.appService.getUserById(id).subscribe(
    data=>{console.log(data);
      debugger
           this.user=data
     console.log(this.user);     

    },
    err=>{console.log(err);
    }
   )
  } 


}
