import dotenv from 'dotenv';
import express from 'express';
import { config } from './config.ts/config';
import { connectDB } from './config.ts/db'

const app = express();
dotenv.config();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connectDB()
}   );