import { Controller, Get, UseGuards, Delete, Param, Put, Body, Post } from '@nestjs/common'

import { AuthGuard } from 'src/auth/auth.guard'

import { PlayersService } from './players.service'
import { TeamPlayerDTO } from './players.types'

@UseGuards(AuthGuard)
@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get(':team_season')
  findAllByTeamIDAndSeason(@Param('team_season') team_season: string) {
    const [team_id, season] = team_season.split(/_/).map((v) => parseInt(v))
    return this.playersService.findAllByTeamIDAndSeason(team_id, season)
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() DTO: TeamPlayerDTO) {
    return this.playersService.findByIdAndUpdate(id, DTO)
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.playersService.findByIdAndDelete(id)
  }

  @Post()
  create(@Body() DTO: TeamPlayerDTO) {
    return this.playersService.create(DTO)
  }
}
