import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
  nombre: string;
  orden: number;
}

const CategorySchema = new Schema<ICategory>({
  nombre: { type: String, required: true },
  orden: { type: Number, required: true }
}, { timestamps: true });

export const CategoryModel = model<ICategory>('Category', CategorySchema); 