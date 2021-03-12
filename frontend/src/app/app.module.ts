import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { BaseLayoutComponent } from './common/layout/base-layout/base-layout.component'
import { BaseNavbarComponent } from './common/navbar/base-navbar/base-navbar.component'
import { BaseFooterComponent } from './common/footer/base-footer/base-footer.component'

@NgModule({
  declarations: [AppComponent, BaseLayoutComponent, BaseNavbarComponent, BaseFooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
