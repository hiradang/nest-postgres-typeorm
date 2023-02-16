import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchMovieDto } from '../dto/search-movie.dto';
import { quizSampleData } from '../../database/data/quiz.data';

@Controller('search')
@ApiTags('Search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get('/')
  async getSearch() {
    const documents = [];
    quizSampleData.forEach((quiz, quizIndex) =>
      quiz.questions.map((question, questionIndex) => {
        documents.push({
          id: `${quizIndex}${questionIndex}`,
          question: question.question,
        });
      }),
    );
    const response = await this.searchService.addDocuments(documents);
    console.log(response);
  }

  @Post('/')
  searchText(@Body() search: SearchMovieDto) {
    return this.searchService.search(search.text, {
      attributesToHighlight: ['*'],
    });
  }
}
