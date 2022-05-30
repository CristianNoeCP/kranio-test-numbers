import { Body, Controller, Post } from '@nestjs/common';
import { ValidatorService } from './application/validator.service';
import { NumberRequestDTO } from './DTO/numberRequest.dto';

@Controller()
export class ValidatorController {
  constructor(private readonly validatorService: ValidatorService) {}

  @Post('/sendNumber')
  sendNumber(@Body() request: NumberRequestDTO): string {
    return this.validatorService.run(request);
  }
}
