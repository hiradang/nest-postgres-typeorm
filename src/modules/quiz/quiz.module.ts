import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { OptionController } from './controllers/option.controller';
import { QuestionController } from './controllers/question.controller';
import { QuizController } from './controllers/quiz.controller';
import { ResponseController } from './controllers/response.controller';
import { OptionRepository } from './repositories/options.repository';
import { QuestionRepository } from './repositories/question.repository';
import { QuizRepository } from './repositories/quiz.repository';
import { OptionService } from './services/option.service';
import { QuestionService } from './services/question.service';
import { QuizService } from './services/quiz.service';
import { ResponseService } from './services/response.service';

@Module({
  controllers: [
    QuizController,
    QuestionController,
    OptionController,
    ResponseController,
  ],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]),
    UserModule,
  ],
  providers: [QuizService, QuestionService, OptionService, ResponseService],
})
export class QuizModule {}
