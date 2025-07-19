import { HomeCallToActionRepository } from '../../domain/interfaces/HomeCallToActionRepository.interface';
import { HomeCallToActionEntity, HomeCallToActionProps } from '../../domain/entities/HomeCallToAction.entity';
import { HomeCallToActionModel } from '../models/HomeCallToAction.model';

export class HomeCallToActionRepositoryImpl implements HomeCallToActionRepository {
  async get(): Promise<HomeCallToActionEntity | null> {
    const doc = await HomeCallToActionModel.findOne();
    return doc ? new HomeCallToActionEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async update(data: HomeCallToActionProps): Promise<HomeCallToActionEntity> {
    const doc = await HomeCallToActionModel.findOneAndUpdate({}, data, { new: true, upsert: true });
    return new HomeCallToActionEntity({ ...doc.toObject(), _id: String(doc._id) });
  }
} 