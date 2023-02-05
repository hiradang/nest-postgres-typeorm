import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  async register(userInfo: UserRegisterRequestDto): Promise<User> {
    const user = new User();
    user.name = userInfo.name;
    user.email = userInfo.email;
    user.password = userInfo.password;

    return await user.save();
  }
}
