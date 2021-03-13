import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { BaseLayoutComponent } from './common/components/layout/base-layout/base-layout.component'
import { BaseNavbarComponent } from './common/components/navbar/base-navbar/base-navbar.component'
import { BaseFooterComponent } from './common/components/footer/base-footer/base-footer.component'

import { HomeComponent } from './home/home.component'
import { EventsComponent } from './events/events.component'
import { TeamsComponent } from './teams/teams.component'
import { LeagueSelectorComponent } from './leagues/components/league-selector/league-selector.component'

import { LoginComponent } from './user/login/login.component'
import { LoginFormComponent } from './user/login/components/login-form/login-form.component'
import { LoginModalComponent } from './user/login/components/login-modal/login-modal.component'

import { environment } from '../environments/environment'

import { LoginInterceptor } from './user/login/interceptors/login.interceptor'
import { LeaguesInterceptor } from './leagues/interceptors/leagues.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    BaseNavbarComponent,
    BaseFooterComponent,
    LoginComponent,
    LoginFormComponent,
    LoginModalComponent,
    HomeComponent,
    EventsComponent,
    TeamsComponent,
    LeagueSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LeaguesInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
