import { Schema, model, Document } from 'mongoose';

export interface IHomeProjectSnapshot {
  _id: string;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  estado: 'en desarrollo' | 'completado' | 'abandonado';
  año: number;
  imagen?: string;
  links: {
    demo?: string;
    frontend?: string;
    backend?: string;
    github?: string;
  };
}

export interface IHomeProjects extends Document {
  projects: IHomeProjectSnapshot[];
}

const HomeProjectLinksSchema = new Schema({
  demo: { type: String },
  frontend: { type: String },
  backend: { type: String },
  github: { type: String }
}, { _id: false });

const HomeProjectSnapshotSchema = new Schema<IHomeProjectSnapshot>({
  _id: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  tecnologias: { type: [String], required: true },
  estado: { type: String, enum: ['en desarrollo', 'completado', 'abandonado'], required: true },
  año: { type: Number, required: true },
  imagen: { type: String },
  links: { type: HomeProjectLinksSchema, required: true }
}, { _id: false });

const HomeProjectsSchema = new Schema<IHomeProjects>({
  projects: { type: [HomeProjectSnapshotSchema], default: [] }
}, { timestamps: true });

export const HomeProjectsModel = model<IHomeProjects>('HomeProjects', HomeProjectsSchema); 