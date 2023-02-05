import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { Quiz } from '../entities/quiz.entity';
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get()
  getAllQuiz(): Promise<Quiz[]> {
    return this.quizService.getAllQuiz();
  }

  @Get('/:id')
  getQuizById(@Body() id: number) {
    return this.quizService.getQuizById(id);
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: CreateQuizDto) {
    return this.quizService.createQuiz(quizData);
  }
}
