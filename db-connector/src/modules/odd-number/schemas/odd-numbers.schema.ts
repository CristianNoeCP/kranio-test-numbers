import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OddNumberDocument = OddNumber & Document;

@Schema({ timestamps: true })
export class OddNumber {
  @Prop()
  value: number;
}

export const OddNumberSchema = SchemaFactory.createForClass(OddNumber);
