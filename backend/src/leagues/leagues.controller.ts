import { Controller, Get, UseGuards } from '@nestjs/common'

import { AuthGuard } from 'src/auth/auth.guard'

import { LeaguesService } from './leagues.service'

@UseGuards(AuthGuard)
@Controller('leagues')
export class LeaguesController {
  constructor(private leaguesService: LeaguesService) {}

  @Get()
  findAll() {
    return this.leaguesService.findAll()
  }
}
