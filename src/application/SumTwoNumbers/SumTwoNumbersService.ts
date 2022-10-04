import { SumTwoNumbersDTO } from './SumTwoNumbersDTO';
import { IRepository, Calculator, Number, OperationResult } from '../../domain';

interface SumTwoNumbersServiceDeps {
  operationResultRepository: IRepository<OperationResult>;
}

export class SumTwoNumbersService { 
  protected readonly operationResultRepository: IRepository<OperationResult>;

  constructor({operationResultRepository}: SumTwoNumbersServiceDeps) {
    this.operationResultRepository = operationResultRepository;
  }

  public execute = async (req: SumTwoNumbersDTO)=> {
    const calculator = Calculator.create();
    const numberA = Number.create(req.numberA);
    const numberB = Number.create(req.numberB);  
    const sumResult = calculator.sumTwoNumbers(numberA, numberB);
    await this.operationResultRepository.save(sumResult);
    return sumResult;
  }
}
