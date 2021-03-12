import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginGuard } from './user/login/guards/login.guard'
import { LogoutGuard } from './user/logout/guards/logout.guard'
import { AuthGuard } from './common/guards/auth.guard'

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './user/login/login.component'
import { LogoutComponent } from './user/logout/logout.component'
import { TeamsComponent } from './teams/teams.component'
import { EventsComponent } from './events/events.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'user/logout', component: LogoutComponent, canActivate: [LogoutGuard] },
  { path: 'teams', component: TeamsComponent, canActivate: [AuthGuard] },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
