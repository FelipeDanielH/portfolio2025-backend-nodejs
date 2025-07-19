import { ProjectRepository } from '../../../domain/interfaces/ProjectRepository.interface';

export const getProjects = async (repo: ProjectRepository) => {
  return await repo.getAll();
}; 