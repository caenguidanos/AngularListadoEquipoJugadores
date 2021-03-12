import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

import { SessionStoreQuery } from 'src/app/common/store/session/session.query'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private sessionStoreQuery: SessionStoreQuery) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userSnapshot = this.sessionStoreQuery.getValue()

    if (!userSnapshot.email) {
      return true
    }

    return false
  }
}
