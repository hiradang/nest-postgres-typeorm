import { QuizRepository } from '../repositories/quiz.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from '../dto/createQuiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  getAllQuiz(): Promise<Quiz[]> {
    return this.quizRepository
      .createQueryBuilder('quiz')
      .leftJoinAndSelect('quiz.questions', 'question')
      .leftJoinAndSelect('question.options', 'option')
      .take(1) // limit number of records
      .getMany();
    // .getManyAndCount(); // count the number of all records => return [Quiz[], number]
  }

  async getQuizById(quizId: number) {
    return await this.quizRepository.findOne(quizId, {
      relations: ['questions', 'questions.options'],
    });
  }

  async createQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
