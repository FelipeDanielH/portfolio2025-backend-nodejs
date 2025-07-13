import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import homeRoutes from '../routes/Home.routes';
import { Home } from '../models/Home.model';

dotenv.config(); // Cargar variables de entorno

const app = express();
app.use(express.json());
app.use('/home', homeRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Home.deleteMany(); // Limpiar base antes de cada test
});

describe('API /home', () => {
  it('debe retornar 404 si no existe información', async () => {
    const res = await request(app).get('/home');
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBeDefined();
  });

  it('debe crear información de inicio con POST', async () => {
    const data = {
      name: 'Felipe',
      title: 'Full Stack Developer',
      description: 'Desarrollador especializado en MERN.',
      links: {
        github: 'https://github.com/FelipeDanielH'
      }
    };

    const res = await request(app).post('/home').send(data);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Felipe');
    expect(res.body.title).toBe('Full Stack Developer');
  });

  it('debe eliminar correctamente la información', async () => {
    await new Home({
      name: 'Felipe',
      title: 'Developer',
      description: '...',
      links: {}
    }).save();

    const res = await request(app).delete('/home');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Información de inicio eliminada correctamente');
  });
});
