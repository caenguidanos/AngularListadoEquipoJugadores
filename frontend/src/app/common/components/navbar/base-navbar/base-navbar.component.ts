import { Component, OnInit } from '@angular/core'

import { SessionStoreQuery } from '../../../store/session/session.query'

@Component({
  selector: 'app-base-navbar',
  templateUrl: './base-navbar.component.html',
  styleUrls: ['./base-navbar.component.scss']
})
export class BaseNavbarComponent implements OnInit {
  ngOnInit(): void {}
}
