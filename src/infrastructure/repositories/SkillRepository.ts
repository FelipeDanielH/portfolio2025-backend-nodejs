import { SkillRepository } from '../../domain/interfaces/SkillRepository.interface';
import { SkillEntity, SkillProps } from '../../domain/entities/Skill.entity';
import { SkillModel } from '../models/Skill.model';

export class SkillRepositoryImpl implements SkillRepository {
  async getAll(): Promise<SkillEntity[]> {
    const docs = await SkillModel.find();
    return docs.map(doc => new SkillEntity({ ...doc.toObject(), _id: String(doc._id) }));
  }

  async create(data: SkillProps): Promise<SkillEntity> {
    const doc = new SkillModel(data);
    await doc.save();
    return new SkillEntity({ ...doc.toObject(), _id: String(doc._id) });
  }

  async update(id: string, data: Partial<SkillProps>): Promise<SkillEntity | null> {
    const doc = await SkillModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? new SkillEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async delete(id: string): Promise<boolean> {
    const doc = await SkillModel.findByIdAndDelete(id);
    return !!doc;
  }
}