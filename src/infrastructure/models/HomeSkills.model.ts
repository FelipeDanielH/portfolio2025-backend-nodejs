import { Schema, model, Document } from 'mongoose';

export interface IHomeSkills extends Document {
  skills: string[];
}

const HomeSkillsSchema = new Schema<IHomeSkills>({
  skills: { type: [String], required: true, default: [] }
}, { timestamps: true });

export const HomeSkillsModel = model<IHomeSkills>('HomeSkills', HomeSkillsSchema); 