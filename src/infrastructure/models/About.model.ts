import { Schema, model, Document } from 'mongoose';

export interface IAbout extends Document {
  titulo: string;
  descripcion: string;
  orden: number;
}

const AboutSchema = new Schema<IAbout>({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  orden: { type: Number, required: true }
}, { timestamps: true });

export const AboutModel = model<IAbout>('About', AboutSchema); 