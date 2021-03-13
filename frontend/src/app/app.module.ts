import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools'

import { AppRoutingModule } from './app-routing.module'

import { environment } from '../environments/environment'

import { LoginInterceptor } from './user/login/interceptors/login.interceptor'
import { LeaguesInterceptor } from './leagues/interceptors/leagues.interceptor'
import { TeamsInterceptor } from './teams/interceptors/teams.interceptor'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { BaseLayoutComponent } from './common/components/layout/base-layout/base-layout.component'
import { BaseNavbarComponent } from './common/components/navbar/base-navbar/base-navbar.component'
import { BaseFooterComponent } from './common/components/footer/base-footer/base-footer.component'
import { LoginFormComponent } from './user/login/components/login-form/login-form.component'
import { LoginModalComponent } from './user/login/components/login-modal/login-modal.component'
import { LeagueSelectorComponent } from './leagues/components/league-selector/league-selector.component'

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    BaseNavbarComponent,
    BaseFooterComponent,
    LoginFormComponent,
    LoginModalComponent,
    HomeComponent,
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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TeamsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
