import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OddNumber, OddNumberDocument } from '../schemas/odd-numbers.schema';

const MAX_RECORDS = Number(process.env.MAX_RECORDS);
@Injectable()
export class LastOddNumbersService {
  constructor(
    @InjectModel(OddNumber.name)
    private model: Model<OddNumberDocument>,
  ) {}

  run(): Promise<OddNumber[]> {
    return this.model.find().sort({ createdAt: -1 }).limit(MAX_RECORDS).exec();
  }
}
