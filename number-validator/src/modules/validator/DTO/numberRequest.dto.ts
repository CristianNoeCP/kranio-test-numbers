import { IsNotEmpty, IsNumber } from 'class-validator';

export class NumberRequestDTO {
  @IsNumber()
  @IsNotEmpty()
  private _number: number;
  public get number(): number {
    return this._number;
  }
  public set number(value: number) {
    this._number = value;
  }
  constructor(number: number) {
    this._number = number;
  }
}
