import { HomeProjectsRepository } from '../../domain/interfaces/HomeProjectsRepository.interface';
import { HomeProjectsEntity, HomeProjectsProps } from '../../domain/entities/HomeProjects.entity';
import { HomeProjectsModel } from '../models/HomeProjects.model';

export class HomeProjectsRepositoryImpl implements HomeProjectsRepository {
  async get(): Promise<HomeProjectsEntity | null> {
    const doc = await HomeProjectsModel.findOne();
    return doc ? new HomeProjectsEntity(doc.toObject()) : null;
  }

  async update(projects: HomeProjectsProps['projects']): Promise<HomeProjectsEntity> {
    const doc = await HomeProjectsModel.findOneAndUpdate({}, { projects }, { new: true, upsert: true });
    return new HomeProjectsEntity(doc!.toObject());
  }
} 