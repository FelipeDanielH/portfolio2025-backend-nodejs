import { ProjectRepository } from '../../../domain/interfaces/ProjectRepository.interface';
import { ProjectProps } from '../../../domain/entities/Project.entity';

export const updateProject = async (repo: ProjectRepository, id: string, data: Partial<ProjectProps>) => {
  return await repo.update(id, data);
}; 