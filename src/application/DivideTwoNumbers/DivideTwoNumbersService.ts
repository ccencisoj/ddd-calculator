import { DivideTwoNumbersDTO } from './DivideTwoNumbersDTO';
import { IRepository, Calculator, Number, OperationResult } from '../../domain';

interface SubtractTwoNumbersServiceDeps {
  operationResultRepository: IRepository<OperationResult>;
}

export class DivideTwoNumbersService { 
  protected readonly operationResultRepository: IRepository<OperationResult>;

  constructor({operationResultRepository}: SubtractTwoNumbersServiceDeps) {
    this.operationResultRepository = operationResultRepository;
  }

  public execute = async (req: DivideTwoNumbersDTO)=> {
    const calculator = Calculator.create();
    const numberA = Number.create(req.numberA);
    const numberB = Number.create(req.numberB);  
    const divideResult = calculator.divideTwoNumbers(numberA, numberB);
    await this.operationResultRepository.save(divideResult);
    return divideResult;
  }
}
