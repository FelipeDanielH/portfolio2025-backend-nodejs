import { ExperienceRepository } from '../../domain/interfaces/ExperienceRepository.interface';
import { ExperienceEntity, ExperienceProps } from '../../domain/entities/Experience.entity';
import { ExperienceModel } from '../models/Experience.model';

export class ExperienceRepositoryImpl implements ExperienceRepository {
  async getAll(): Promise<ExperienceEntity[]> {
    const docs = await ExperienceModel.find();
    return docs.map(doc => new ExperienceEntity(doc.toObject()));
  }

  async create(data: ExperienceProps): Promise<ExperienceEntity> {
    const doc = new ExperienceModel(data);
    await doc.save();
    return new ExperienceEntity(doc.toObject());
  }

  async update(id: string, data: Partial<ExperienceProps>): Promise<ExperienceEntity | null> {
    const doc = await ExperienceModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? new ExperienceEntity(doc.toObject()) : null;
  }

  async delete(id: string): Promise<boolean> {
    const doc = await ExperienceModel.findByIdAndDelete(id);
    return !!doc;
  }
}