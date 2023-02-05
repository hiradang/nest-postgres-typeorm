import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';

export class UserRegisterRequestDto {
  @ApiProperty({
    description: 'Name',
    example: 'binhdang',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Email',
    example: 'binhdt@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
    example: '123456',
  })
  @IsNotEmpty()
  @Length(6, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MESSAGE,
  })
  password: string;

  @ApiProperty({
    description: 'Confirm password',
    example: '123455',
  })
  @IsNotEmpty()
  @Length(6, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MESSAGE,
  })
  confirm: string;
}
