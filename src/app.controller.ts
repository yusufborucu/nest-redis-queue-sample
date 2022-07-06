import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProducer } from './message.producer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private messageProducer: MessageProducer) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-message')
  async sendMessage(@Query('message') message: string) {
    this.messageProducer.sendMessage(message);
    return message;
  }
}
