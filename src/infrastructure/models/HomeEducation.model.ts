import { Schema, model, Document } from 'mongoose';

export interface IHomeEducationSnapshot {
  _id: string;
  tipo: 'formacion' | 'certificacion';
  titulo: string;
  institucion: string;
  estado: 'En curso' | 'Completado' | 'Abandonado';
  fecha_inicio?: string;
  fecha_fin?: string | null;
  descripcion?: string;
}

export interface IHomeEducation extends Document {
  education: IHomeEducationSnapshot[];
}

const HomeEducationSnapshotSchema = new Schema<IHomeEducationSnapshot>({
  _id: { type: String, required: true },
  tipo: { type: String, enum: ['formacion', 'certificacion'], required: true },
  titulo: { type: String, required: true },
  institucion: { type: String, required: true },
  estado: { type: String, enum: ['En curso', 'Completado', 'Abandonado'], required: true },
  fecha_inicio: { type: String },
  fecha_fin: { type: String, default: null },
  descripcion: { type: String }
}, { _id: false });

const HomeEducationSchema = new Schema<IHomeEducation>({
  education: { type: [HomeEducationSnapshotSchema], default: [] }
}, { timestamps: true });

export const HomeEducationModel = model<IHomeEducation>('HomeEducation', HomeEducationSchema); 