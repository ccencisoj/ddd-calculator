import { Number } from './Number';
import { OperationResult } from './OperationResult';

export class Calculator {
  private constructor() {};

  public static create = ()=> {
    return new Calculator();
  }

  public sumTwoNumbers = (numberA: Number, numberB: Number)=> {
    return OperationResult.create({
      type: "sum",
      result: numberA.value + numberB.value
    });
  }

  public subtractTwoNumbers = (numberA: Number, numberB: Number)=> {
    return OperationResult.create({
      type: "subtract",
      result: numberA.value - numberB.value
    });
  }

  public divideTwoNumbers = (numberA: Number, numberB: Number)=> {
    return OperationResult.create({
      type: "divide",
      result: numberA.value / numberB.value
    });
  }

  public multiplyTwoNumbers = (numberA: Number, numberB: Number)=> {
    return OperationResult.create({
      type: "multiply",
      result: numberA.value * numberB.value
    });
  }
}
