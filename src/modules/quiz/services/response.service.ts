import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EVENTS } from '../../../common/constants/event.constants';
import { ReponseAddEvent } from '../events/response-add.event';

@Injectable()
export class ResponseService {
  @OnEvent(EVENTS.RESPONSE_SUBMIT)
  handleIfResponseIsCorrect(payload: ReponseAddEvent) {
    console.log(payload);
  }
}
