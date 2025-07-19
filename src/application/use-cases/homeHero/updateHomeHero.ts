import { HomeHeroRepository } from '../../../domain/interfaces/HomeHeroRepository.interface';
import { HomeHeroProps } from '../../../domain/entities/HomeHero.entity';

export const updateHomeHero = async (repo: HomeHeroRepository, data: HomeHeroProps) => {
  return await repo.update(data);
}; 