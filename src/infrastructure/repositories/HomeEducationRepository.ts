import { HomeEducationRepository } from '../../domain/interfaces/HomeEducationRepository.interface';
import { HomeEducationEntity, HomeEducationProps } from '../../domain/entities/HomeEducation.entity';
import { HomeEducationModel } from '../models/HomeEducation.model';

export class HomeEducationRepositoryImpl implements HomeEducationRepository {
  async get(): Promise<HomeEducationEntity | null> {
    const doc = await HomeEducationModel.findOne();
    return doc ? new HomeEducationEntity(doc.toObject()) : null;
  }

  async update(education: HomeEducationProps['education']): Promise<HomeEducationEntity> {
    const doc = await HomeEducationModel.findOneAndUpdate({}, { education }, { new: true, upsert: true });
    return new HomeEducationEntity(doc!.toObject());
  }
} 