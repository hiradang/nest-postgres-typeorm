import { QuizRepository } from '../repositories/quiz.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/createQuiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  getAllQuiz() {
    return [1, 2, 3, 'Service'];
  }

  getQuizById(quizId: number) {
    return this.quizRepository.findOne(quizId, { relations: ['questions'] });
  }

  async createQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
