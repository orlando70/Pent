import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

export default app;
