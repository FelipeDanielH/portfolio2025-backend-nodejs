import { CorsOptions } from 'cors';

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://portfolio2025-frontend.vercel.app',
  'file://', 
];

const isDev = process.env.NODE_ENV !== 'production';

export const corsOptions: CorsOptions = {
  origin: isDev
    ? '*'
    : (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error(`CORS blocked: Origin ${origin} not allowed`));
        }
      },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
};
