import { Request, Response } from 'express';
import { SumTwoNumbersService, SumTwoNumbersDTO } from '../../application';

interface SumTwoNumbersControllerDeps {
  sumTwoNumbersService: SumTwoNumbersService;
}

export class SumTwoNumbersController {
  protected readonly sumTwoNumbersService: SumTwoNumbersService;
  
  constructor({sumTwoNumbersService}: SumTwoNumbersControllerDeps) {
    this.sumTwoNumbersService = sumTwoNumbersService;
  }

  public execute = async (req: Request, res: Response)=> {
    const numberA = Number(req.query.numberA);
    const numberB = Number(req.query.numberB);
    const sumTwoNumbersDTO = {numberA, numberB} as SumTwoNumbersDTO;
    const sumResult = await this.sumTwoNumbersService.execute(sumTwoNumbersDTO);
    return res.json({result: sumResult});
  }
}
