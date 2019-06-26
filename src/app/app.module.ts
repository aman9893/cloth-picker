import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService2 } from './authservice';
import { AppComponent } from './app.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { AuthGuard } from './auth-guard.service';
import { ROUTING } from './routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('172052659201-vacjq9huqt6fkapu8afsnhsgsrloqmld.apps.googleusercontent.com')

  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1808877019257649")
  }
  ]);
  
  @NgModule({
  declarations: [
    AppComponent,
    GoogleLoginComponent,
    DashboardComponent,
    DetailsComponent
  ],
  imports: [ SocialLoginModule.initialize(config),
    BrowserModule,ROUTING
  ],
  providers: [AuthService2
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
