import { MultiplyTwoNumbersDTO } from './MultiplyTwoNumbersDTO';
import { IRepository, Calculator, Number, OperationResult } from '../../domain';

interface SubtractTwoNumbersServiceDeps {
  operationResultRepository: IRepository<OperationResult>;
}

export class MultiplyTwoNumbersService { 
  protected readonly operationResultRepository: IRepository<OperationResult>;

  constructor({operationResultRepository}: SubtractTwoNumbersServiceDeps) {
    this.operationResultRepository = operationResultRepository;
  }

  public execute = async (req: MultiplyTwoNumbersDTO)=> {
    const calculator = Calculator.create();
    const numberA = Number.create(req.numberA);
    const numberB = Number.create(req.numberB);  
    const multiplyResult = calculator.multiplyTwoNumbers(numberA, numberB);
    await this.operationResultRepository.save(multiplyResult);
    return multiplyResult;
  }
}
