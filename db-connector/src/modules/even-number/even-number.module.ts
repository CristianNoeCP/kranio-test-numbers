import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LastEvenNumbersService } from './application/last-even-numbers.service';
import { EvenNumberController } from './even-number.controller';
import { EvenNumberService } from './application/even-number.service';
import { EvenNumber, EvenNumberSchema } from './schemas/even-numbers.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EvenNumber.name, schema: EvenNumberSchema },
    ]),
  ],
  controllers: [EvenNumberController],
  providers: [EvenNumberService, LastEvenNumbersService],
})
export class EvenNumberModule {}
