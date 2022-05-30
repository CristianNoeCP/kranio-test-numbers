import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EvenNumberModule } from './modules/even-number/even-number.module';
import { OddNumberModule } from './modules/odd-number/odd-number.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}`,
      {
        dbName: `${process.env.MONGO_DB}`,
      },
    ),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    EvenNumberModule,
    OddNumberModule,
  ],
})
export class AppModule {}
