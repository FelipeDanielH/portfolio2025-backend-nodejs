import { AboutRepository } from '../../domain/interfaces/AboutRepository.interface';
import { AboutEntity, AboutProps } from '../../domain/entities/About.entity';
import { AboutModel } from '../models/About.model';

export class AboutRepositoryImpl implements AboutRepository {
  async getAll(): Promise<AboutEntity[]> {
    const docs = await AboutModel.find();
    return docs.map(doc => new AboutEntity({ ...doc.toObject(), _id: String(doc._id) }));
  }

  async create(data: AboutProps): Promise<AboutEntity> {
    const doc = new AboutModel(data);
    await doc.save();
    return new AboutEntity({ ...doc.toObject(), _id: String(doc._id) });
  }

  async update(id: string, data: Partial<AboutProps>): Promise<AboutEntity | null> {
    const doc = await AboutModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? new AboutEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async delete(id: string): Promise<boolean> {
    const doc = await AboutModel.findByIdAndDelete(id);
    return !!doc;
  }
}