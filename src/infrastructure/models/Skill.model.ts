import { Schema, model, Document } from 'mongoose';

export interface ISkillConcept {
  nombre: string;
  aprendido: boolean;
  _id?: string;
}

export interface ISkill extends Document {
  categoria_id: string;
  tecnologia: string;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  puntuacion: number;
  descripcion?: string;
  conceptos?: ISkillConcept[];
  orden?: number;
}

const SkillConceptSchema = new Schema<ISkillConcept>({
  nombre: { type: String, required: true },
  aprendido: { type: Boolean, required: true }
}, { _id: true });

const SkillSchema = new Schema<ISkill>({
  categoria_id: { type: String, required: true },
  tecnologia: { type: String, required: true },
  nivel: { type: String, enum: ['Básico', 'Intermedio', 'Avanzado', 'Experto'], required: true },
  puntuacion: { type: Number, required: true },
  descripcion: { type: String },
  conceptos: { type: [SkillConceptSchema], default: [] },
  orden: { type: Number }
}, { timestamps: true });

export const SkillModel = model<ISkill>('Skill', SkillSchema);