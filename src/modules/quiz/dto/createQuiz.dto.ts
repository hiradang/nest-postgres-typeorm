import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Title is required' })
  @Length(3, 'Title must be longer then 3 characters')
  title: string;

  @IsNotEmpty({ message: 'This field is required' })
  @Length(3)
  description: string;
}
