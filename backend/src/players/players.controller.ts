import { Controller, Get, UseGuards, Query, Delete, Param, Put, Body } from '@nestjs/common'

import { AuthGuard } from 'src/auth/auth.guard'

import { PlayersService } from './players.service'
import { TeamPlayerDTO } from './players.types'

@UseGuards(AuthGuard)
@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get()
  findAllByLeagueID(@Query('team_id') team_id: string, @Query('season') season: string) {
    return this.playersService.findAllByTeamIDAndSeason(parseInt(team_id), parseInt(season))
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() DTO: TeamPlayerDTO) {
    return this.playersService.findByIdAndUpdate(id, DTO)
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.playersService.findByIdAndDelete(id)
  }
}
