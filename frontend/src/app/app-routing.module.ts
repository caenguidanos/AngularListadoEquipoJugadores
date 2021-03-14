import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BaseLayoutComponent } from './common/components/layout/base-layout/base-layout.component'
import { EventsComponent } from './events/events.component'

import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'eventos',
        component: EventsComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
