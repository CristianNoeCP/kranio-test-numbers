import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EvenNumber, EvenNumberDocument } from '../schemas/even-numbers.schema';
const MAX_RECORDS = Number(process.env.MAX_RECORDS);
@Injectable()
export class LastEvenNumbersService {
  constructor(
    @InjectModel(EvenNumber.name)
    private model: Model<EvenNumberDocument>,
  ) {}

  run(): Promise<EvenNumber[]> {
    return this.model.find().sort({ createdAt: -1 }).limit(MAX_RECORDS).exec();
  }
}
