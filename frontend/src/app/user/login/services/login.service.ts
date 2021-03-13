import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

import { SessionUser } from 'src/app/common/store/session/session.types'
import { SessionStoreService } from 'src/app/common/store/session/session.service'

import { environment } from 'src/environments/environment'

interface LoginForm {
  username: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private sessionStoreService: SessionStoreService,
    private router: Router
  ) {}

  login(loginForm: LoginForm): Observable<SessionUser> {
    return this.http.post<SessionUser>(environment.api.basePath + '/auth/login', loginForm).pipe(
      tap((user) => {
        this.sessionStoreService.updateUser(user)
        this.router.navigateByUrl('/')
      })
    )
  }
}
