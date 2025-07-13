import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
connectDB(); // conectar a MongoDB

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API del Portafolio Backend funcionando 🧠');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
