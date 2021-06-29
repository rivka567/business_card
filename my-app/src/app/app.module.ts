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



// state related imports
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { reducers, metaReducers } from './app-state/reducers';
// import { CustomRouterStateSerializer } from './app-state/shared/utils';
// import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';


const appRoutes:Routes=[
  {path:"",component:LoginComponent},
  {path:"upload-file",component:UploadFileComponent},
  {path:"userLinks",component:UserLinksComponent},
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
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.

    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.

    StoreRouterConnectingModule,

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension

     !environment.production ? StoreDevtoolsModule.instrument() : [],

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
