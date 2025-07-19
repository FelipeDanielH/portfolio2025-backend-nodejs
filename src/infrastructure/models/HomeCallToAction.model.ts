import { Schema, model, Document } from 'mongoose';

export interface IHomeCallToAction extends Document {
  titulo: string;
  subtitulo: string;
}

const HomeCallToActionSchema = new Schema<IHomeCallToAction>({
  titulo: { type: String, required: true },
  subtitulo: { type: String, required: true }
}, { timestamps: true });

export const HomeCallToActionModel = model<IHomeCallToAction>('HomeCallToAction', HomeCallToActionSchema); 