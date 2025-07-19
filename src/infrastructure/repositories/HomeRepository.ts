import { HeroRepository } from '../../domain/interfaces/HomeRepository.interface';
import { HeroEntity, HeroProps } from '../../domain/entities/Home.entity';
import { HeroModel } from '../models/Home.model';

export class HeroRepositoryImpl implements HeroRepository {
  async get(): Promise<HeroEntity | null> {
    const doc = await HeroModel.findOne();
    return doc ? new HeroEntity(doc.toObject()) : null;
  }

  async update(data: Partial<HeroProps>): Promise<HeroEntity | null> {
    const doc = await HeroModel.findOneAndUpdate({}, data, { new: true, upsert: true });
    return doc ? new HeroEntity(doc.toObject()) : null;
  }
} 