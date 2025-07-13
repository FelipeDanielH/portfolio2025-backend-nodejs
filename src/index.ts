import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import homeRoutes from './routes/Home.routes';
import { notFoundHandler } from './middlewares/notFoundHandler';
import { errorHandler } from './middlewares/errorHandler';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// 🚨 Swagger debe ir antes de notFoundHandler
const swaggerDocument = YAML.load('./src/docs/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas API
app.use('/home', homeRoutes);

// Ruta raíz
app.get('/', (_req, res) => {
  res.send('API del Portafolio Backend funcionando 🧠');
});

// Middlewares de error
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
