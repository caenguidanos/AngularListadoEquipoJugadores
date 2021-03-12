import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: 'logout', loadChildren: () => import('./logout/logout.module').then((m) => m.LogoutModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule) }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
