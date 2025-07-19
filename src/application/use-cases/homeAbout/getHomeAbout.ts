import { HomeAboutRepository } from '../../../domain/interfaces/HomeAboutRepository.interface';

export const getHomeAbout = async (repo: HomeAboutRepository) => {
  return await repo.get();
}; 