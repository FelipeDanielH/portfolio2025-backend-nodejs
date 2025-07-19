import { Schema, model, Document } from 'mongoose';

export interface ITech extends Document {
  tipo: 'lenguaje' | 'framework' | 'rol' | 'herramienta';
  nombre: string;
  icono?: string;
}

const TechSchema = new Schema<ITech>({
  tipo: { type: String, enum: ['lenguaje', 'framework', 'rol', 'herramienta'], required: true },
  nombre: { type: String, required: true },
  icono: { type: String }
}, { timestamps: true });

export const TechModel = model<ITech>('Tech', TechSchema); 