import express, { type Request, type Response } from 'express';
import { routes } from './routes/index.js';
import { erroHandler } from './middlewares/erro-handler.middleware.js';

const app = express();
const PORT = 3000;

app.use(express.json());
routes(app);
erroHandler(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
