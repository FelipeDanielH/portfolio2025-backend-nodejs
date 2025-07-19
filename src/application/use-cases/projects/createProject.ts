import { ProjectRepository } from '../../../domain/interfaces/ProjectRepository.interface';
import { ProjectProps } from '../../../domain/entities/Project.entity';

export const createProject = async (repo: ProjectRepository, data: ProjectProps) => {
  return await repo.create(data);
};