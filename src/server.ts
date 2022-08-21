import 'reflect-metadata';
import http from 'http';
import stoppable from 'stoppable';

import initialize from './initialize';


import config from './config';
import { seedApartment } from './scripts';

const startServer = async () => {
  (global as any).isStartingUp = true;

  const app = (await import('./app')).default;

  const server = stoppable(http.createServer(app));

  server.listen(config.app.port, () => {
    console.log(
      `! Server Started and Listening on Port: ${config.app.port} with PID: ${process.pid}`,
    );
    (global as any).isStartingUp = false;
  });
};

const start = async () => {
  try {
    await initialize();
    await seedApartment();
    await startServer();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default start();
