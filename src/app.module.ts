import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageProducer } from './message.producer';
import { MessageConsumer } from './message.consumer';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      }
    }),
    BullModule.registerQueue({
      name: 'message-queue'
    })
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducer, MessageConsumer],
})
export class AppModule {}
