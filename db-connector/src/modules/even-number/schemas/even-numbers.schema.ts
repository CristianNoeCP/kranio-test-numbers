import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EvenNumberDocument = EvenNumber & Document;

@Schema({ timestamps: true })
export class EvenNumber {
  @Prop()
  value: number;
}

export const EvenNumberSchema = SchemaFactory.createForClass(EvenNumber);
