import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Validator } from 'src/modules/validator/domain/validator';
import { CreateNumberEvent } from '../domain/create-number.event';
import { NumberRequestDTO } from '../DTO/numberRequest.dto';

@Injectable()
export class ValidatorService {
  constructor(
    @Inject(process.env.CONNECTOR_NAME)
    private readonly dbConnectorClient: ClientProxy,
  ) {}
  run(request: NumberRequestDTO): string {
    const validator = new Validator({ number: request.number });

    if (validator.isEvenNumbers()) {
      this.dbConnectorClient.emit(
        process.env.EVEN_EVENT,
        new CreateNumberEvent(validator.number),
      );
      return 'is Even';
    }

    this.dbConnectorClient.emit(process.env.ODD_EVENT, {
      number: validator.number,
    });

    return 'is Odd';
  }
}
