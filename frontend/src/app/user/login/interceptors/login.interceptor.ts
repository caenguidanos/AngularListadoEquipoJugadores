import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { environment } from 'src/environments/environment'
import { catchError } from 'rxjs/operators'

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        authorization: `Bearer ${environment.api.key}`
      }
    })

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        switch (err.status) {
          case 401:
            alert('El usuario no  existe')
            break
          case 403:
            alert('Credenciales invalidas')
            break
          default:
            break
        }

        return throwError(err)
      })
    )
  }
}
