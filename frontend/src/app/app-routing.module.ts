import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
  { path: 'teams', loadChildren: () => import('./teams/teams.module').then((m) => m.TeamsModule) },
  { path: 'events', loadChildren: () => import('./events/events.module').then((m) => m.EventsModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
