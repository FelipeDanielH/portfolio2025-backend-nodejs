import { Schema, model, Document } from 'mongoose';

export interface IExperience extends Document {
  rol: string;
  empresa: string;
  ubicacion: string;
  modalidad?: 'Remoto' | 'Presencial' | 'Híbrido';
  equipo?: string;
  sector?: string;
  fecha_inicio: string;
  fecha_fin?: string | null;
  descripcion: string;
  responsabilidades?: string[];
  logros?: string[];
  tecnologias?: string[];
}

const ExperienceSchema = new Schema<IExperience>({
  rol: { type: String, required: true },
  empresa: { type: String, required: true },
  ubicacion: { type: String, required: true },
  modalidad: { type: String, enum: ['Remoto', 'Presencial', 'Híbrido'] },
  equipo: { type: String },
  sector: { type: String },
  fecha_inicio: { type: String, required: true },
  fecha_fin: { type: String, default: null },
  descripcion: { type: String, required: true },
  responsabilidades: { type: [String], default: [] },
  logros: { type: [String], default: [] },
  tecnologias: { type: [String], default: [] }
}, { timestamps: true });

export const ExperienceModel = model<IExperience>('Experience', ExperienceSchema);