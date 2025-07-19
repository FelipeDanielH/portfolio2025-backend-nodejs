import { HomeAboutRepository } from '../../domain/interfaces/HomeAboutRepository.interface';
import { HomeAboutEntity, HomeAboutProps } from '../../domain/entities/HomeAbout.entity';
import { HomeAboutModel } from '../models/HomeAbout.model';

export class HomeAboutRepositoryImpl implements HomeAboutRepository {
  async get(): Promise<HomeAboutEntity | null> {
    const doc = await HomeAboutModel.findOne();
    return doc ? new HomeAboutEntity(doc.toObject()) : null;
  }

  async update(data: { about: string[] }): Promise<HomeAboutEntity | null> {
    const doc = await HomeAboutModel.findOneAndUpdate({}, data, { new: true, upsert: true });
    return doc ? new HomeAboutEntity(doc.toObject()) : null;
  }
} 