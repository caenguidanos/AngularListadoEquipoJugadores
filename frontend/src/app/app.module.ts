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
import { PlayersInterceptor } from './players/interceptors/players.interceptor'

import { UserImagePipe } from './common/pipes/user-image.pipe'
import { IntersectionObserverDirective } from './common/directives/intersection-observer.directive'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { BaseLayoutComponent } from './common/components/layout/base-layout/base-layout.component'
import { BaseNavbarComponent } from './common/components/navbar/base-navbar/base-navbar.component'
import { BaseFooterComponent } from './common/components/footer/base-footer/base-footer.component'
import { LoginFormComponent } from './user/login/components/login-form/login-form.component'
import { LoginModalComponent } from './user/login/components/login-modal/login-modal.component'
import { LeagueSelectorComponent } from './leagues/components/league-selector/league-selector.component'
import { LeagueSelectorModalComponent } from './leagues/components/league-selector-modal/league-selector-modal.component'
import { LeagueSelectorCardComponent } from './leagues/components/league-selector-card/league-selector-card.component'
import { TeamListCardComponent } from './teams/components/team-list-card/team-list-card.component'
import { TeamsListViewComponent } from './teams/components/teams-list-view/teams-list-view.component'
import { PlayersListViewComponent } from './players/components/players-list-view/players-list-view.component'
import { PlayerListCardComponent } from './players/components/player-list-card/player-list-card.component';
import { PlayerDeleteModalComponent } from './players/components/player-delete-modal/player-delete-modal.component';
import { PlayerCreateModalComponent } from './players/components/player-create-modal/player-create-modal.component';
import { PlayerUpdateModalComponent } from './players/components/player-update-modal/player-update-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseLayoutComponent,
    BaseNavbarComponent,
    BaseFooterComponent,
    LoginFormComponent,
    LoginModalComponent,
    LeagueSelectorComponent,
    LeagueSelectorCardComponent,
    LeagueSelectorModalComponent,
    TeamListCardComponent,
    TeamsListViewComponent,
    UserImagePipe,
    IntersectionObserverDirective,
    PlayersListViewComponent,
    PlayerListCardComponent,
    PlayerDeleteModalComponent,
    PlayerCreateModalComponent,
    PlayerUpdateModalComponent
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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PlayersInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
