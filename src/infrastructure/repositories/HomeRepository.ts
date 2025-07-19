import { HeroRepository } from '../../domain/interfaces/HomeRepository.interface';
import { HeroEntity, HeroProps } from '../../domain/entities/Home.entity';
import { HeroModel } from '../models/Home.model';

export class HeroRepositoryImpl implements HeroRepository {
  async get(): Promise<HeroEntity | null> {
    const doc = await HeroModel.findOne();
    return doc ? new HeroEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async update(data: HeroProps): Promise<HeroEntity> {
    const doc = await HeroModel.findOneAndUpdate({}, data, { new: true, upsert: true });
    return new HeroEntity({ ...doc.toObject(), _id: String(doc._id) });
  }
} 