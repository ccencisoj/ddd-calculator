import 'dotenv/config';
import 'express-async-errors';

export const config = {
  PORT: process.env.PORT as string,
  MONGO_URI: process.env.MONGO_URI as string
};
