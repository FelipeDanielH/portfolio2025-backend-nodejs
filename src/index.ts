// src/index.ts

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import apiRoutes from './presentation/routes';
import { notFoundHandler } from './middlewares/notFoundHandler';
import { errorHandler } from './middlewares/errorHandler';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cors from 'cors';
import { corsOptions } from './config/cors'; // 👈 Importas tu configuración

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors(corsOptions)); // 👈 Aquí se aplica CORS antes de las rutas
app.use(express.json());

// 🚨 Swagger debe ir antes de notFoundHandler
const swaggerDocument = YAML.load('./src/docs/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas API
app.use('/', apiRoutes);

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
