import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNumberEvent } from 'src/share/domain/create-number.event';
import { OddNumber, OddNumberDocument } from '../schemas/odd-numbers.schema';
const BATCH_LENGTH = Number(process.env.BATCH_LENGTH);
@Injectable()
export class OddNumberService {
  private oddNumbers: number[] = [];

  constructor(
    @InjectModel(OddNumber.name)
    private oddNumberModel: Model<OddNumberDocument>,
  ) {}

  handleNumberOddCreated(data: CreateNumberEvent) {
    const { number } = data;
    this.oddNumbers.push(number);
    if (this.oddNumbers.length === BATCH_LENGTH) {
      Promise.all(
        this.oddNumbers.map(async (oddNumber) => {
          const createdOddNumber = new this.oddNumberModel({
            value: oddNumber,
          });
          await createdOddNumber.save();
        }),
      );
      this.oddNumbers = [];
    }
  }
}
