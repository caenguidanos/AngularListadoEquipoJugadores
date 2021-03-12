import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment'

type User = {
  username: string
  name: string
  lastname: string
  email: string
  image: string
}

type LoginForm = {
  username: string
  password: string
}

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginForm: LoginForm): Observable<User> {
    return this.http.post<User>(environment.api.basePath + '/auth/login', loginForm)
  }
}
