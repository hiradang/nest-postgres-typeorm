import { ValidationPipe } from '@nestjs/common/pipes';
import { Body, Controller, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @UsePipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  )
  async register(@Body() userInfo: UserRegisterRequestDto): Promise<User> {
    return await this.userService.register(userInfo);
  }
}
