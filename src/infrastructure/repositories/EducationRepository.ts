import { EducationRepository } from '../../domain/interfaces/EducationRepository.interface';
import { EducationEntity, EducationProps } from '../../domain/entities/Education.entity';
import { EducationModel } from '../models/Education.model';
import { Types } from 'mongoose';

export class EducationRepositoryImpl implements EducationRepository {
  async getAll(): Promise<EducationEntity[]> {
    const docs = await EducationModel.find();
    return docs.map(doc => new EducationEntity({ ...doc.toObject(), _id: String(doc._id) }));
  }

  async create(data: EducationProps): Promise<EducationEntity> {
    const doc = new EducationModel(data);
    await doc.save();
    return new EducationEntity({ ...doc.toObject(), _id: String(doc._id) });
  }

  async update(id: string, data: Partial<EducationProps>): Promise<EducationEntity | null> {
    const doc = await EducationModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? new EducationEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async delete(id: string): Promise<boolean> {
    const doc = await EducationModel.findByIdAndDelete(id);
    return !!doc;
  }
}