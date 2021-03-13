import { Controller, Get, Param, UseGuards } from '@nestjs/common'

import { AuthGuard } from 'src/auth/auth.guard'

import { TeamsService } from './teams.service'

@UseGuards(AuthGuard)
@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get(':league_id')
  findAllByLeagueID(@Param('league_id') league_id: string) {
    return this.teamsService.findAllByLeagueID(parseInt(league_id))
  }
}
