import { HomeAboutRepository } from '../../domain/interfaces/HomeAboutRepository.interface';
import { HomeAboutEntity, HomeAboutProps } from '../../domain/entities/HomeAbout.entity';
import { HomeAboutModel } from '../models/HomeAbout.model';

export class HomeAboutRepositoryImpl implements HomeAboutRepository {
  async get(): Promise<HomeAboutEntity | null> {
    const doc = await HomeAboutModel.findOne();
    return doc ? new HomeAboutEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async update(about: HomeAboutProps['about']): Promise<HomeAboutEntity> {
    const doc = await HomeAboutModel.findOneAndUpdate({}, { about }, { new: true, upsert: true });
    return new HomeAboutEntity({ ...doc.toObject(), _id: String(doc._id) });
  }
} 