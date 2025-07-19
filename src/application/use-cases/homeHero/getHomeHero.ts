import { HomeHeroRepository } from '../../../domain/interfaces/HomeHeroRepository.interface';

export const getHomeHero = async (repo: HomeHeroRepository) => {
  return await repo.get();
}; 