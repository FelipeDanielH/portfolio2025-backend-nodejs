import { ProjectEntity, ProjectProps } from '../entities/Project.entity';

export interface ProjectRepository {
  getAll(): Promise<ProjectEntity[]>;
  create(data: ProjectProps): Promise<ProjectEntity>;
  update(id: string, data: Partial<ProjectProps>): Promise<ProjectEntity | null>;
  delete(id: string): Promise<boolean>;
}