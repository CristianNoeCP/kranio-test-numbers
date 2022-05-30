import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OddNumberController } from './odd-number.controller';
import { OddNumberService } from './application/odd-number.service';
import { OddNumber, OddNumberSchema } from './schemas/odd-numbers.schema';
import { LastOddNumbersService } from './application/last-odd-numbers.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OddNumber.name, schema: OddNumberSchema },
    ]),
  ],
  controllers: [OddNumberController],
  providers: [OddNumberService, LastOddNumbersService],
})
export class OddNumberModule {}
