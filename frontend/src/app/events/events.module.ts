import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { EventsInterceptor } from './interceptors/events.interceptor'

import { EventsComponent } from './events.component'
import { EventsTableComponent } from './components/events-table/events-table.component'

@NgModule({
  declarations: [EventsComponent, EventsTableComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EventsInterceptor,
      multi: true
    }
  ],
  exports: [EventsComponent]
})
export class EventsModule {}
