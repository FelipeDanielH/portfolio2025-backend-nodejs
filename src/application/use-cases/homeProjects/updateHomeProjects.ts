import { HomeProjectsRepository } from '../../../domain/interfaces/HomeProjectsRepository.interface';
import { HomeProjectsProps } from '../../../domain/entities/HomeProjects.entity';

export const updateHomeProjects = async (repo: HomeProjectsRepository, projects: HomeProjectsProps['projects']) => {
  return await repo.update(projects);
}; 