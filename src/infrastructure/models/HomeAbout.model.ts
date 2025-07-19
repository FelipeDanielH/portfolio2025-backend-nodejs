import { Schema, model, Document } from 'mongoose';

export interface IHomeAbout extends Document {
  about: string[];
}

const HomeAboutSchema = new Schema<IHomeAbout>({
  about: [{ type: String, required: true }]
}, { timestamps: true });

export const HomeAboutModel = model<IHomeAbout>('HomeAbout', HomeAboutSchema); 