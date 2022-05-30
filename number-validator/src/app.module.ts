import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ValidatorModule } from './modules/validator/validator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ValidatorModule,
  ],
})
export class AppModule {}
