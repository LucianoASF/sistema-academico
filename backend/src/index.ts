import express, { type Request, type Response } from 'express';
import router from './routes/index.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
