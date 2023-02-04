import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Option } from '../entities/options.entity';
import { Question } from '../entities/question.entity';
import { OptionRepository } from '../repositories/options.repository';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private optionRepository: OptionRepository,
  ) {}

  async getOptionById(id: number): Promise<Option> {
    return await this.optionRepository.findOne(id);
  }

  async createOption(createOption: CreateOptionDto, question: Question) {
    const newOption = await this.optionRepository.save({
      text: createOption.text,
      isCorrect: createOption.isCorrect,
    });

    question.options = [...question.options, newOption];
    question.save();

    return newOption;
  }
}
