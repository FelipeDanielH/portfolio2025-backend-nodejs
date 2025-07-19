import { ProjectRepository } from '../../../domain/interfaces/ProjectRepository.interface';

export const deleteProject = async (repo: ProjectRepository, id: string) => {
  return await repo.delete(id);
}; 