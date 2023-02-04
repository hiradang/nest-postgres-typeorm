import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { QuestionRepository } from '../repositories/question.repository';
import { Quiz } from '../entities/quiz.entity';
import { Question } from '../entities/question.entity';

export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
  ) {}

  async getQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne(id, {
      relations: ['options'],
    });
  }

  async createQuestion(question: CreateQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    quiz.save();

    return newQuestion;
  }
}
