// src/config/cors.ts

import { CorsOptions } from 'cors';

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://portfolio2025-backend-nodejs.onrender.com',
];

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // Permitir requests sin origen (como Postman o curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: Origin ${origin} not allowed`));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true, // Si usas cookies o headers de autenticación personalizados
};
