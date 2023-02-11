import { QuestionController } from './controllers/question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionService } from './services/question.service';
import { QuestionRepository } from './repositories/question.repository';
import { OptionController } from './controllers/option.controller';
import { OptionRepository } from './repositories/options.repository';
import { OptionService } from './services/option.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]),
    UserModule,
  ],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
