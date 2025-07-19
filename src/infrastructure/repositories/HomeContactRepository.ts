import { HomeContactRepository } from '../../domain/interfaces/HomeContactRepository.interface';
import { HomeContactEntity, HomeContactProps } from '../../domain/entities/HomeContact.entity';
import { HomeContactModel } from '../models/HomeContact.model';

export class HomeContactRepositoryImpl implements HomeContactRepository {
  async get(): Promise<HomeContactEntity | null> {
    const doc = await HomeContactModel.findOne();
    return doc ? new HomeContactEntity(doc.toObject()) : null;
  }

  async update(data: HomeContactProps): Promise<HomeContactEntity> {
    const doc = await HomeContactModel.findOneAndUpdate({}, data, { new: true, upsert: true });
    return new HomeContactEntity(doc!.toObject());
  }
} 