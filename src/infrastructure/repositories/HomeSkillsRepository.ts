import { HomeSkillsRepository } from '../../domain/interfaces/HomeSkillsRepository.interface';
import { HomeSkillsEntity } from '../../domain/entities/HomeSkills.entity';
import { HomeSkillsModel } from '../models/HomeSkills.model';

export class HomeSkillsRepositoryImpl implements HomeSkillsRepository {
  async get(): Promise<HomeSkillsEntity | null> {
    const doc = await HomeSkillsModel.findOne();
    return doc ? new HomeSkillsEntity(doc.toObject()) : null;
  }

  async update(skills: string[]): Promise<HomeSkillsEntity> {
    const doc = await HomeSkillsModel.findOneAndUpdate({}, { skills }, { new: true, upsert: true });
    return new HomeSkillsEntity(doc!.toObject());
  }
} 