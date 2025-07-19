import { Schema, model, Document } from 'mongoose';

export interface IHomeCertificationSnapshot {
  _id: string;
  titulo: string;
  institucion: string;
  estado: 'En curso' | 'Completado' | 'Abandonado';
  fecha_inicio?: string;
  fecha_fin?: string | null;
}

export interface IHomeCertifications extends Document {
  certifications: IHomeCertificationSnapshot[];
}

const HomeCertificationSnapshotSchema = new Schema<IHomeCertificationSnapshot>({
  _id: { type: String, required: true },
  titulo: { type: String, required: true },
  institucion: { type: String, required: true },
  estado: { type: String, enum: ['En curso', 'Completado', 'Abandonado'], required: true },
  fecha_inicio: { type: String },
  fecha_fin: { type: String, default: null }
}, { _id: false });

const HomeCertificationsSchema = new Schema<IHomeCertifications>({
  certifications: { type: [HomeCertificationSnapshotSchema], default: [] }
}, { timestamps: true });

export const HomeCertificationsModel = model<IHomeCertifications>('HomeCertifications', HomeCertificationsSchema); 