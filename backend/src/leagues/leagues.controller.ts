import { Controller, Post, UseGuards } from '@nestjs/common'

import { AuthGuard } from 'src/auth/auth.guard'

import { LeaguesService } from './leagues.service'

@UseGuards(AuthGuard)
@Controller('leagues')
export class LeaguesController {
  constructor(private leaguesService: LeaguesService) {}
}
