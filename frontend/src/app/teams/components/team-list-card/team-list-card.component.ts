import { Component, Input, OnInit } from '@angular/core'

import { TeamsService } from '../../services/teams.service'
import { Team } from '../../store/teams.types'

@Component({
  selector: 'app-team-list-card',
  templateUrl: './team-list-card.component.html',
  styleUrls: ['./team-list-card.component.scss']
})
export class TeamListCardComponent implements OnInit {
  @Input() team: Team | undefined

  constructor(public teamsService: TeamsService) {}

  ngOnInit(): void {}
}
