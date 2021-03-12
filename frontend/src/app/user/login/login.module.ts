import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { LoginRoutingModule } from './login-routing.module'

import { LoginService } from './services/login-service.service'

import { LoginComponent } from './login.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { LoginFormCardComponent } from './components/login-form-card/login-form-card.component'
import { LoginInterceptor } from './interceptors/login.interceptor'

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, LoginFormCardComponent],
  imports: [CommonModule, LoginRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ]
})
export class LoginModule {}
