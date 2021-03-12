import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { BaseLayoutComponent } from './common/components/layout/base-layout/base-layout.component'
import { BaseNavbarComponent } from './common/components/navbar/base-navbar/base-navbar.component'
import { BaseFooterComponent } from './common/components/footer/base-footer/base-footer.component'

import { HomeComponent } from './home/home.component'
import { EventsComponent } from './events/events.component'
import { TeamsComponent } from './teams/teams.component'

import { LoginComponent } from './user/login/login.component'
import { LoginFormComponent } from './user/login/components/login-form/login-form.component'
import { LoginFormCardComponent } from './user/login/components/login-form-card/login-form-card.component'

import { environment } from '../environments/environment'

import { LoginInterceptor } from './user/login/interceptors/login.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    BaseNavbarComponent,
    BaseFooterComponent,
    LoginComponent,
    LoginFormComponent,
    LoginFormCardComponent,
    HomeComponent,
    EventsComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
