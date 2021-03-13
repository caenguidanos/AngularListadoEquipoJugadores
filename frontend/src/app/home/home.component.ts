import { Component, OnInit } from '@angular/core'
import { AuthService } from '../common/services/auth.service'
import { SessionStoreQuery } from '../common/store/session/session.query'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService, public sessionStoreQuery: SessionStoreQuery) {}

  ngOnInit(): void {
    this.authService.verifyUserCredentials()
  }
}
