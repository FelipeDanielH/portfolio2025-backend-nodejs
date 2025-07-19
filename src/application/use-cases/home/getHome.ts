import { HeroRepository } from '../../../domain/interfaces/HomeRepository.interface';

export const getHero = async (repo: HeroRepository) => {
  return await repo.get();
}; 