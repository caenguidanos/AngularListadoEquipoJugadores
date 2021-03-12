import { Controller, UseGuards } from '@nestjs/common'

import { AuthGuard } from './auth.guard'

@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {}
