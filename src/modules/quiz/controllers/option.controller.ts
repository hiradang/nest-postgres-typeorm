import { ApiTags } from '@nestjs/swagger/dist';
import { ValidationPipe } from '@nestjs/common/pipes';
import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { CreateOptionDto } from '../dto/create-option.dto';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';

@ApiTags('Option')
@Controller('option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Get('/:id')
  getOption(@Param() id: number) {
    return this.optionService.getOptionById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createOption(@Body() createOption: CreateOptionDto) {
    const question = await this.questionService.getQuestionById(
      createOption.questionId,
    );

    return this.optionService.createOption(createOption, question);
  }
}
