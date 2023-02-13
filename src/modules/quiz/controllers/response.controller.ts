import { Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { EVENTS } from '../../../common/constants/event.constants';
import { ReponseAddEvent } from '../events/response-add.event';

@Controller('response')
@ApiTags('Response')
export class ResponseController {
  constructor(private eventEmitter: EventEmitter2) {}

  @Post()
  async handleResponseQuestion() {
    this.eventEmitter.emit(EVENTS.RESPONSE_SUBMIT, new ReponseAddEvent(1, 1));
  }
}
