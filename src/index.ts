import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import homeRoutes from './routes/Home.routes';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/home', homeRoutes);

app.get('/', (_req, res) => {
  res.send('API del Portafolio Backend funcionando 🧠');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
