import { Schema, model, Document } from 'mongoose';

export interface IEducationLink {
  titulo: string;
  url: string;
}

export interface IEducation extends Document {
  tipo: 'formacion' | 'certificacion';
  titulo: string;
  institucion: string;
  estado: 'En curso' | 'Completado' | 'Abandonado';
  fecha_inicio?: string;
  fecha_fin?: string | null;
  descripcion?: string;
  aprendizajes?: string[];
  certificado_url?: string;
  links_relevantes?: IEducationLink[];
}

const EducationLinkSchema = new Schema<IEducationLink>({
  titulo: { type: String, required: true },
  url: { type: String, required: true }
}, { _id: false });

const EducationSchema = new Schema<IEducation>({
  tipo: { type: String, enum: ['formacion', 'certificacion'], required: true },
  titulo: { type: String, required: true },
  institucion: { type: String, required: true },
  estado: { type: String, enum: ['En curso', 'Completado', 'Abandonado'], required: true },
  fecha_inicio: { type: String },
  fecha_fin: { type: String, default: null },
  descripcion: { type: String },
  aprendizajes: { type: [String], default: [] },
  certificado_url: { type: String },
  links_relevantes: { type: [EducationLinkSchema], default: [] }
}, { timestamps: true });

export const EducationModel = model<IEducation>('Education', EducationSchema);