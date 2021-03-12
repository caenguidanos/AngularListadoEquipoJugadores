import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'
import { Observable } from 'rxjs'

import { SessionStoreQuery } from '../store/session/session.query'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private sessionStoreQuery: SessionStoreQuery, private router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userSnapshot = this.sessionStoreQuery.getValue()

    if (userSnapshot.email) return true

    this.router.navigateByUrl('/user/login')
    return false
  }
}
