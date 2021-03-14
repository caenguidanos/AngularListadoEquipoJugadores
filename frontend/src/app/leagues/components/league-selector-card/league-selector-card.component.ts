import { Component, Input, OnInit } from '@angular/core'

import { LeaguesService } from '../../services/leagues.service'

import type { League } from '../../store/leagues.types'

@Component({
  selector: 'app-league-selector-card',
  templateUrl: './league-selector-card.component.html',
  styleUrls: ['./league-selector-card.component.scss']
})
export class LeagueSelectorCardComponent implements OnInit {
  @Input() league: League | undefined

  public isImageLoaded = false

  constructor(private leaguesService: LeaguesService) {}

  ngOnInit(): void {}

  public selectLeague(league: League) {
    this.leaguesService.selectLeague(league)
  }

  public onLoad() {
    this.isImageLoaded = true
  }
}
