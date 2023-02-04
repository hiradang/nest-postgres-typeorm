import { QuizService } from '../services/quiz.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId);

    return await this.questionService.createQuestion(question, quiz);
  }
}
