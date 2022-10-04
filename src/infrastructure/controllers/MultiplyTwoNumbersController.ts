import { Request, Response } from 'express';
import { MultiplyTwoNumbersService, MultiplyTwoNumbersDTO } from '../../application';

interface MultiplyTwoNumbersControllerDeps {
  multiplyTwoNumbersService: MultiplyTwoNumbersService;
}

export class MultiplyTwoNumbersController {
  protected readonly multiplyTwoNumbersService: MultiplyTwoNumbersService;
  
  constructor({multiplyTwoNumbersService}: MultiplyTwoNumbersControllerDeps) {
    this.multiplyTwoNumbersService = multiplyTwoNumbersService;
  }

  public execute = async (req: Request, res: Response)=> {
    const numberA = Number(req.query.numberA);
    const numberB = Number(req.query.numberB);
    const multiplyTwoNumbersDTO = {numberA, numberB} as MultiplyTwoNumbersDTO;
    const multiplyResult = await this.multiplyTwoNumbersService.execute(multiplyTwoNumbersDTO);
    return res.json({result: multiplyResult});
  }
}
