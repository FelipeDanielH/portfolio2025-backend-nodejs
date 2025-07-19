import { HomeProjectsRepository } from '../../../domain/interfaces/HomeProjectsRepository.interface';

export const getHomeProjects = async (repo: HomeProjectsRepository) => {
  return await repo.get();
}; 