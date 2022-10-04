import {
  OperationResult
} from './domain';
import {
  SumTwoNumbersService,
  SubtractTwoNumbersService,
  DivideTwoNumbersService,
  MultiplyTwoNumbersService,
} from './application';
import { 
  config,
  OperationResultModel,
  MongoRepository,
  SumTwoNumbersController,
  SubtractTwoNumbersController,
  DivideTwoNumbersController,
  MultiplyTwoNumbersController
} from "./infrastructure";

// Repositories
const mongoRepository = new MongoRepository<OperationResult>(OperationResultModel);

// Services
const sumTwoNumbersService = new SumTwoNumbersService({operationResultRepository: mongoRepository});
const subtractTwoNumbersService = new SubtractTwoNumbersService({operationResultRepository: mongoRepository});
const divideTwoNumbersService = new DivideTwoNumbersService({operationResultRepository: mongoRepository});
const multiplyTwoNumbersService = new MultiplyTwoNumbersService({operationResultRepository: mongoRepository});

// Controllers
const sumTwoNumbersController = new SumTwoNumbersController({sumTwoNumbersService});
const subtractTwoNumbersController = new SubtractTwoNumbersController({subtractTwoNumbersService});
const divideTwoNumbersController = new DivideTwoNumbersController({divideTwoNumbersService});
const multiplyTwoNumbersController = new MultiplyTwoNumbersController({multiplyTwoNumbersService});

export { 
  config,
  sumTwoNumbersController,
  subtractTwoNumbersController,
  divideTwoNumbersController,
  multiplyTwoNumbersController 
};
