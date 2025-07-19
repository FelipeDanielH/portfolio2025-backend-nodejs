import { HomeCertificationsRepository } from '../../domain/interfaces/HomeCertificationsRepository.interface';
import { HomeCertificationsEntity, HomeCertificationsProps } from '../../domain/entities/HomeCertifications.entity';
import { HomeCertificationsModel } from '../models/HomeCertifications.model';

export class HomeCertificationsRepositoryImpl implements HomeCertificationsRepository {
  async get(): Promise<HomeCertificationsEntity | null> {
    const doc = await HomeCertificationsModel.findOne();
    return doc ? new HomeCertificationsEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async update(certifications: HomeCertificationsProps['certifications']): Promise<HomeCertificationsEntity> {
    const doc = await HomeCertificationsModel.findOneAndUpdate({}, { certifications }, { new: true, upsert: true });
    return new HomeCertificationsEntity({ ...doc.toObject(), _id: String(doc._id) });
  }
} 