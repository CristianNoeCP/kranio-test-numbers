export class Validator {
  readonly number: number;
  constructor({ number }: { number: number }) {
    this.number = number;
  }
  isEvenNumbers(): boolean {
    return this.number % 2 === 0;
  }
  isOddNumbers(): boolean {
    return this.number % 2 !== 0;
  }
}
