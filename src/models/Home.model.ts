import { Schema, model, Document } from 'mongoose';

export interface IHome extends Document {
  name: string;
  title: string;
  description: string;
  image?: string;
  links: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
}

const HomeSchema = new Schema<IHome>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  links: {
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
  }
}, { timestamps: true });

export const Home = model<IHome>('Home', HomeSchema);
