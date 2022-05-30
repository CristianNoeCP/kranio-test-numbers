import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNumberEvent } from 'src/share/domain/create-number.event';

import { EvenNumber, EvenNumberDocument } from '../schemas/even-numbers.schema';
const BATCH_LENGTH = Number(process.env.BATCH_LENGTH);
@Injectable()
export class EvenNumberService {
  private evenNumbers: number[] = [];

  constructor(
    @InjectModel(EvenNumber.name)
    private evenNumberModel: Model<EvenNumberDocument>,
  ) {}

  handleNumberEvenCreated(data: CreateNumberEvent) {
    const { number } = data;
    this.evenNumbers.push(number);
    if (this.evenNumbers.length === BATCH_LENGTH) {
      Promise.all(
        this.evenNumbers.map(async (evenNumber) => {
          const createdEvenNumber = new this.evenNumberModel({
            value: evenNumber,
          });
          await createdEvenNumber.save();
        }),
      );
      this.evenNumbers = [];
    }
  }
}
