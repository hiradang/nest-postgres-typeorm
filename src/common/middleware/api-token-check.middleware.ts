import {
  BadRequestException,
  HttpException,
  NestMiddleware,
  HttpStatus,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ApiTokenPaymentException } from '../exception/api-token-payment.exception';

export class ApiTokenCheckMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['api-token'] !== 'my-token') {
      //   throw new BadRequestException('The token does not match');
      //   throw new HttpException('My response', HttpStatus.PAYMENT_REQUIRED);
      throw new ApiTokenPaymentException();
    }
    next(); // After do checking, use next() to continue sending request to controller
  }
}
