import { TechRepository } from '../../domain/interfaces/TechRepository.interface';
import { TechEntity, TechProps } from '../../domain/entities/Tech.entity';
import { TechModel } from '../models/Tech.model';

export class TechRepositoryImpl implements TechRepository {
  async getAll(): Promise<TechEntity[]> {
    const docs = await TechModel.find();
    return docs.map(doc => new TechEntity(doc.toObject()));
  }

  async create(data: TechProps): Promise<TechEntity> {
    const doc = new TechModel(data);
    await doc.save();
    return new TechEntity(doc.toObject());
  }

  async update(id: string, data: Partial<TechProps>): Promise<TechEntity | null> {
    const doc = await TechModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? new TechEntity(doc.toObject()) : null;
  }

  async delete(id: string): Promise<boolean> {
    const doc = await TechModel.findByIdAndDelete(id);
    return !!doc;
  }
} 