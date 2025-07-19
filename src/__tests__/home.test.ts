import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import homeRoutes from '../presentation/routes/Home.routes';
import { HomeModel } from '../infrastructure/models/Home.model';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/home', homeRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI!);
  await HomeModel.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('API /home', () => {
  it('debe retornar 404 si no existe información', async () => {
    const res = await request(app).get('/home');
    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBeDefined();
  });

  it('debe crear o actualizar información de inicio con PUT', async () => {
    const data = {
      nombre: 'Felipe',
      titulo: 'Full Stack Developer',
      claim: '¡Construyo soluciones digitales!',
      telefono: '+56912345678',
      ubicacion: 'Santiago, Chile',
      email: 'felipe@email.com',
      linkedin: 'https://linkedin.com/in/felipe',
      cv: 'https://cv.com/felipe',
      boton_contacto: 'Contáctame'
    };

    const res = await request(app).put('/home').send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.nombre).toBe('Felipe');
    expect(res.body.titulo).toBe('Full Stack Developer');
    expect(res.body.email).toBe('felipe@email.com');
  });

  it('debe obtener la información de inicio con GET', async () => {
    const res = await request(app).get('/home');
    expect(res.statusCode).toBe(200);
    expect(res.body.nombre).toBeDefined();
    expect(res.body.titulo).toBeDefined();
    expect(res.body.email).toBeDefined();
  });
});
