import { Schema, model, Document } from 'mongoose';

export interface IHomeContact extends Document {
  email: string;
  telefono: string;
  linkedin: string;
  github?: string;
  portfolio_url?: string;
}

const HomeContactSchema = new Schema<IHomeContact>({
  email: { type: String, required: true },
  telefono: { type: String, required: true },
  linkedin: { type: String, required: true },
  github: { type: String },
  portfolio_url: { type: String }
}, { timestamps: true });

export const HomeContactModel = model<IHomeContact>('HomeContact', HomeContactSchema); 