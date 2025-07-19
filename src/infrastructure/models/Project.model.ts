import { Schema, model, Document } from 'mongoose';

export interface IProjectLinks {
  demo?: string;
  frontend?: string;
  backend?: string;
  github?: string;
  otros?: { titulo: string; url: string }[];
}

export interface IProject extends Document {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  roles?: string[];
  frameworks?: string[];
  lenguajes?: string[];
  herramientas?: string[];
  estado: 'en desarrollo' | 'completado' | 'abandonado';
  año: number;
  imagen?: string;
  links: IProjectLinks;
}

const ProjectLinksSchema = new Schema<IProjectLinks>({
  demo: { type: String },
  frontend: { type: String },
  backend: { type: String },
  github: { type: String },
  otros: [{ titulo: String, url: String }]
}, { _id: false });

const ProjectSchema = new Schema<IProject>({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  tecnologias: { type: [String], required: true },
  roles: { type: [String], default: [] },
  frameworks: { type: [String], default: [] },
  lenguajes: { type: [String], default: [] },
  herramientas: { type: [String], default: [] },
  estado: { type: String, enum: ['en desarrollo', 'completado', 'abandonado'], required: true },
  año: { type: Number, required: true },
  imagen: { type: String },
  links: { type: ProjectLinksSchema, required: true }
}, { timestamps: true });

export const ProjectModel = model<IProject>('Project', ProjectSchema);