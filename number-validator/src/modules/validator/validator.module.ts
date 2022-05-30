import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ValidatorController } from './validator.controller';
import { ValidatorService } from './application/validator.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: process.env.CONNECTOR_NAME,
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_URL],
        },
      },
    ]),
  ],
  controllers: [ValidatorController],
  providers: [ValidatorService],
})
export class ValidatorModule {}
