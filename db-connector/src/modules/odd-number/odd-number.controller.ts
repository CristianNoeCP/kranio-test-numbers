import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateNumberEvent } from 'src/share/domain/create-number.event';
import { LastOddNumbersService } from './application/last-odd-numbers.service';
import { OddNumberService } from './application/odd-number.service';
import { OddNumber } from './schemas/odd-numbers.schema';

@Controller()
export class OddNumberController {
  constructor(
    private readonly dbConnectorService: OddNumberService,
    private readonly lastNumbersService: LastOddNumbersService,
  ) {}
  @EventPattern(process.env.ODD_EVENT)
  handleNumberOddCreated(data: CreateNumberEvent) {
    this.dbConnectorService.handleNumberOddCreated(data);
  }

  @Get('/lastNumbers/odd')
  async lastNumbers(): Promise<OddNumber[]> {
    const lastNumbers = await this.lastNumbersService.run();
    return lastNumbers;
  }
}
