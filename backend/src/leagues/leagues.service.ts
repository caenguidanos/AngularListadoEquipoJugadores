import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'
import { League, LeagueDocument } from './leagues.schema'

@Injectable()
export class LeaguesService {
  constructor(@InjectModel(League.name) private leagueModel: Model<LeagueDocument>) {}
}
