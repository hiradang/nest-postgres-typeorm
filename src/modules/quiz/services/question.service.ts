import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuestionRepository } from '../repositories/question.repository';
import { Quiz } from '../entities/quiz.entity';

export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async createQuestion(question: CreateQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    quiz.save();

    return newQuestion;
  }
}
