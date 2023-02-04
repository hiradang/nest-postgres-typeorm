import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @Length(3)
  question: string;

  @IsNotEmpty()
  quizId: number;
}
