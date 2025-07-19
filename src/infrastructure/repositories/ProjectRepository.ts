import { ProjectRepository } from '../../domain/interfaces/ProjectRepository.interface';
import { ProjectEntity, ProjectProps } from '../../domain/entities/Project.entity';
import { ProjectModel } from '../models/Project.model';

export class ProjectRepositoryImpl implements ProjectRepository {
  async getAll(): Promise<ProjectEntity[]> {
    const docs = await ProjectModel.find();
    return docs.map(doc => new ProjectEntity({ ...doc.toObject(), _id: String(doc._id) }));
  }

  async create(data: ProjectProps): Promise<ProjectEntity> {
    const doc = new ProjectModel(data);
    await doc.save();
    return new ProjectEntity({ ...doc.toObject(), _id: String(doc._id) });
  }

  async update(id: string, data: Partial<ProjectProps>): Promise<ProjectEntity | null> {
    const doc = await ProjectModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? new ProjectEntity({ ...doc.toObject(), _id: String(doc._id) }) : null;
  }

  async delete(id: string): Promise<boolean> {
    const doc = await ProjectModel.findByIdAndDelete(id);
    return !!doc;
  }
}