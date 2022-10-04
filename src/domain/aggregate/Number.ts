import { IValueObject } from '../common/IValueObject';

export class Number implements IValueObject {
  public readonly value: number;

  private constructor(value: number) {
    this.value = value;
  }

  public static create = (value: number)=> {
    return new Number(value);
  }
}
