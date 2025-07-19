import { Schema, model, Document } from 'mongoose';

export interface IHomeAboutSnapshot {
  _id: string;
  titulo: string;
  descripcion: string;
  orden: number;
}

export interface IHomeAbout extends Document {
  about: IHomeAboutSnapshot[];
}

const HomeAboutSnapshotSchema = new Schema<IHomeAboutSnapshot>({
  _id: { type: String, required: true },
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  orden: { type: Number, required: true }
}, { _id: false });

const HomeAboutSchema = new Schema<IHomeAbout>({
  about: { type: [HomeAboutSnapshotSchema], default: [] }
}, { timestamps: true });

export const HomeAboutModel = model<IHomeAbout>('HomeAbout', HomeAboutSchema); 