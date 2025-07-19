import { HomeHeroRepository } from '../../domain/interfaces/HomeHeroRepository.interface';
import { HomeHeroEntity, HomeHeroProps } from '../../domain/entities/HomeHero.entity';
import { HomeHeroModel } from '../models/HomeHero.model';

export class HomeHeroRepositoryImpl implements HomeHeroRepository {
  async get(): Promise<HomeHeroEntity | null> {
    const doc = await HomeHeroModel.findOne();
    return doc ? new HomeHeroEntity(doc.toObject()) : null;
  }

  async update(data: HomeHeroProps): Promise<HomeHeroEntity> {
    const doc = await HomeHeroModel.findOneAndUpdate({}, data, { new: true, upsert: true });
    return new HomeHeroEntity(doc!.toObject());
  }
} 