import { ExperienceRepository } from '../../domain/interfaces/ExperienceRepository.interface';
import { ExperienceEntity, ExperienceProps } from '../../domain/entities/Experience.entity';
import { ExperienceModel } from '../models/Experience.model';

function fixFechaFin<T extends { fecha_fin?: string | null }>(obj: T): Omit<T, 'fecha_fin'> & { fecha_fin?: string } {
  const { fecha_fin, ...rest } = obj;
  return { ...rest, fecha_fin: typeof fecha_fin === 'string' ? fecha_fin : undefined };
}

export class ExperienceRepositoryImpl implements ExperienceRepository {
  async getAll(): Promise<ExperienceEntity[]> {
    const docs = await ExperienceModel.find();
    return docs.map(doc => new ExperienceEntity(fixFechaFin({ ...doc.toObject(), _id: String(doc._id) })));
  }

  async create(data: ExperienceProps): Promise<ExperienceEntity> {
    const doc = new ExperienceModel(data);
    await doc.save();
    return new ExperienceEntity(fixFechaFin({ ...doc.toObject(), _id: String(doc._id) }));
  }

  async update(id: string, data: Partial<ExperienceProps>): Promise<ExperienceEntity | null> {
    const doc = await ExperienceModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? new ExperienceEntity(fixFechaFin({ ...doc.toObject(), _id: String(doc._id) })) : null;
  }

  async delete(id: string): Promise<boolean> {
    const doc = await ExperienceModel.findByIdAndDelete(id);
    return !!doc;
  }
}