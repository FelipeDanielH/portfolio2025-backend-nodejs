import { HomeExperienceRepository } from '../../domain/interfaces/HomeExperienceRepository.interface';
import { HomeExperienceEntity, HomeExperienceProps } from '../../domain/entities/HomeExperience.entity';
import { HomeExperienceModel } from '../models/HomeExperience.model';

export class HomeExperienceRepositoryImpl implements HomeExperienceRepository {
  async get(): Promise<HomeExperienceEntity | null> {
    const doc = await HomeExperienceModel.findOne();
    return doc ? new HomeExperienceEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async update(experience: HomeExperienceProps['experience']): Promise<HomeExperienceEntity> {
    const doc = await HomeExperienceModel.findOneAndUpdate({}, { experience }, { new: true, upsert: true });
    return new HomeExperienceEntity({ ...doc.toObject(), _id: String(doc._id) });
  }
} 