import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import {
  DefaultValuePipe,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common/pipes';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination.repsonse';
import { CreateQuizDto } from '@/modules/quiz/dto/createQuiz.dto';
import { QuizService } from '@/modules/quiz/services/quiz.service';
import { Quiz } from '../entities/quiz.entity';

@ApiTags('Quiz')
@Controller('quiz')
@ApiBearerAuth()
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get()
  getAllQuiz(): Promise<Quiz[]> {
    return this.quizService.getAllQuiz();
  }

  @Get('/pagination')
  @ApiPaginatedResponse({ model: Quiz, description: 'List of quizes ' })
  getAllQuizWithPagination(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(1), ParseIntPipe) limit: number,
  ): Promise<Pagination<Quiz>> {
    const options = {
      limit,
      page,
    };
    return this.quizService.getAllQuizWithPagination(options);
  }

  @Get('/:id')
  getQuizById(@Body() id: number) {
    return this.quizService.getQuizById(id);
  }

  @Post('/create')
  @ApiCreatedResponse({ description: 'A quiz has been created!' })
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quizData: CreateQuizDto) {
    return this.quizService.createQuiz(quizData);
  }
}
