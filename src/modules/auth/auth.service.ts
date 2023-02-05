import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new BadRequestException();

    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();

    return user;
  }

  async generateToken(user: any) {
    return {
      accessToken: this.jwtService.sign({
        name: user.name,
        sub: user.id,
      }),
    };
  }
}
