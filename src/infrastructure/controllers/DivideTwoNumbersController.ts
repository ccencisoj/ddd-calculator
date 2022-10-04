import { Request, Response } from 'express';
import { DivideTwoNumbersService, DivideTwoNumbersDTO } from '../../application';

interface DivideTwoNumbersControllerDeps {
  divideTwoNumbersService: DivideTwoNumbersService;
}

export class DivideTwoNumbersController {
  protected readonly divideTwoNumbersService: DivideTwoNumbersService;
  
  constructor({divideTwoNumbersService}: DivideTwoNumbersControllerDeps) {
    this.divideTwoNumbersService = divideTwoNumbersService;
  }

  public execute = async (req: Request, res: Response)=> {
    const numberA = Number(req.query.numberA);
    const numberB = Number(req.query.numberB);
    const divideTwoNumbersDTO = {numberA, numberB} as DivideTwoNumbersDTO;
    const divideResult = await this.divideTwoNumbersService.execute(divideTwoNumbersDTO);
    return res.json({result: divideResult});
  }
}
