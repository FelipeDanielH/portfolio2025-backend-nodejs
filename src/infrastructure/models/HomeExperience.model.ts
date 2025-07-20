import { Schema, model, Document } from 'mongoose';

export interface IHomeExperienceSnapshot {
  _id: string;
  rol: string;
  empresa: string;
  ubicacion: string;
  fecha_inicio: string;
  fecha_fin?: string | null;
  descripcion: string;
}

export interface IHomeExperience extends Document {
  experience: IHomeExperienceSnapshot[];
}

const HomeExperienceSnapshotSchema = new Schema<IHomeExperienceSnapshot>({
  _id: { type: String, required: true },
  rol: { type: String, required: true },
  empresa: { type: String, required: true },
  ubicacion: { type: String, required: true },
  fecha_inicio: { type: String, required: true },
  fecha_fin: { type: String, default: null },
  descripcion: { type: String, required: true }
}, { _id: false });

const HomeExperienceSchema = new Schema<IHomeExperience>({
  experience: { type: [HomeExperienceSnapshotSchema], default: [] }
}, { timestamps: true });

export const HomeExperienceModel = model<IHomeExperience>('HomeExperience', HomeExperienceSchema); 