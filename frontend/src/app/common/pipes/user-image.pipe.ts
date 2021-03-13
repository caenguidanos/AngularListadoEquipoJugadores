import { Pipe, PipeTransform } from '@angular/core'
import { environment } from 'src/environments/environment'

@Pipe({
  name: 'userImage'
})
export class UserImagePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${environment.api.basePath}${value}`
  }
}
