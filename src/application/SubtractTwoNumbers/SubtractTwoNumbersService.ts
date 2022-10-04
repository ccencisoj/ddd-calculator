import { SubtractTwoNumbersDTO } from './SubtractTwoNumbersDTO';
import { IRepository, Calculator, Number, OperationResult } from '../../domain';

interface SubtractTwoNumbersServiceDeps {
  operationResultRepository: IRepository<OperationResult>;
}

export class SubtractTwoNumbersService { 
  protected readonly operationResultRepository: IRepository<OperationResult>;

  constructor({operationResultRepository}: SubtractTwoNumbersServiceDeps) {
    this.operationResultRepository = operationResultRepository;
  }

  public execute = async (req: SubtractTwoNumbersDTO)=> {
    const calculator = Calculator.create();
    const numberA = Number.create(req.numberA);
    const numberB = Number.create(req.numberB);  
    const subtractResult = calculator.subtractTwoNumbers(numberA, numberB);
    await this.operationResultRepository.save(subtractResult);
    return subtractResult;
  }
}
