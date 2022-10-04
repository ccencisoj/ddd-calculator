import { Request, Response } from 'express';
import { SubtractTwoNumbersService, SubtractTwoNumbersDTO } from '../../application';

interface SubtractTwoNumbersControllerDeps {
  subtractTwoNumbersService: SubtractTwoNumbersService;
}

export class SubtractTwoNumbersController {
  protected readonly subtractTwoNumbersService: SubtractTwoNumbersService;
  
  constructor({subtractTwoNumbersService}: SubtractTwoNumbersControllerDeps) {
    this.subtractTwoNumbersService = subtractTwoNumbersService;
  }

  public execute = async (req: Request, res: Response)=> {
    const numberA = Number(req.query.numberA);
    const numberB = Number(req.query.numberB);
    const subtractTwoNumbersDTO = {numberA, numberB} as SubtractTwoNumbersDTO;
    const subtractResult = await this.subtractTwoNumbersService.execute(subtractTwoNumbersDTO);
    return res.json({result: subtractResult});
  }
}
