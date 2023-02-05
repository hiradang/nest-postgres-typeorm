import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() request): Promise<any> {
    return this.authService.generateToken(request.user);
  }

  @Get('/user')
  @UseGuards(JwtAuthGuard)
  async getUser(@Request() req): Promise<any> {
    return req.user;
  }
}
