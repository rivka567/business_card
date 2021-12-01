import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { environment } from '../environments/environment';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { Routes,RouterModule } from '@angular/router';
import { UserLinksComponent } from './components/user-links/user-links.component';
import { LoginComponent } from './components/login/login.component';
import { WebSiteComponent } from './components/web-site/web-site.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { MultipleFilesUploadComponent } from './components/multiple-files-upload/multiple-files-upload.component';



const appRoutes:Routes=[
  {path:"",component:LoginComponent},
  {path:"sign-up"}
  {path:"upload-file",component:UploadFileComponent},
  {path:"user-links",component:UserLinksComponent},
  {path:"my-web-site/:id",component:WebSiteComponent},
  {path:"upload-multi-files",component:MultipleFilesUploadComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    UserLinksComponent,
    LoginComponent,
    WebSiteComponent,
    UploadFileComponent,
    MultipleFilesUploadComponent
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
