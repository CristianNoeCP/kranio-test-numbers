import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateNumberEvent } from 'src/share/domain/create-number.event';
import { LastEvenNumbersService } from './application/last-even-numbers.service';
import { EvenNumberService } from './application/even-number.service';
import { EvenNumber } from './schemas/even-numbers.schema';

@Controller()
export class EvenNumberController {
  constructor(
    private readonly evenNumberService: EvenNumberService,
    private readonly lastNumbersService: LastEvenNumbersService,
  ) {}
  @EventPattern(process.env.EVEN_EVENT)
  handleNumberEvenCreated(data: CreateNumberEvent) {
    this.evenNumberService.handleNumberEvenCreated(data);
  }
  @Get('/lastNumbers/even')
  async lastNumbers(): Promise<EvenNumber[]> {
    const lastNumbers = await this.lastNumbersService.run();
    return lastNumbers;
  }
}
