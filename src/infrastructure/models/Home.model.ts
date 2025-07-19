import { Schema, model, Document } from 'mongoose';

export interface IHero extends Document {
  nombre: string;
  titulo: string;
  claim: string;
  telefono: string;
  ubicacion: string;
  email: string;
  linkedin: string;
  cv: string;
  boton_contacto: string;
}

const HeroSchema = new Schema<IHero>({
  nombre: { type: String, required: true },
  titulo: { type: String, required: true },
  claim: { type: String, required: true },
  telefono: { type: String, required: true },
  ubicacion: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: String, required: true },
  cv: { type: String, required: true },
  boton_contacto: { type: String, required: true }
}, { timestamps: true });

export const HeroModel = model<IHero>('Hero', HeroSchema);