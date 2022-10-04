import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { 
  config,
  sumTwoNumbersController,
  subtractTwoNumbersController,
  divideTwoNumbersController,
  multiplyTwoNumbersController 
} from './container';

const server = express();

// Middlewares
server.use(cors());
server.use(express.json());

// Routes
server.post("/sum", sumTwoNumbersController.execute);
server.post("/subtract", subtractTwoNumbersController.execute);
server.post("/divide", divideTwoNumbersController.execute);
server.post("/multiply", multiplyTwoNumbersController.execute);

// DB connetion
mongoose.connect(config.MONGO_URI).then();

// Listen server
server.listen(config.PORT, ()=> {
  console.log(`Server running on port ${config.PORT}`);
});
