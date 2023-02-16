import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class SearchMovieDto {
  @ApiProperty({
    description: 'Search content',
    type: 'string',
    example: 'wo',
  })
  @IsNotEmpty()
  @Length(2, 255)
  text: string;
}
