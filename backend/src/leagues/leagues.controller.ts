import { CacheInterceptor, Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common'

import { AuthGuard } from 'src/auth/auth.guard'

import { LeaguesService } from './leagues.service'

@UseGuards(AuthGuard)
@Controller('leagues')
@UseInterceptors(CacheInterceptor)
export class LeaguesController {
  constructor(private leaguesService: LeaguesService) {}

  @Get()
  async findAll() {
    return await this.leaguesService.findAll()
  }
}
