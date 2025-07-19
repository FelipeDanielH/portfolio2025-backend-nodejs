import { HeroRepository } from '../../../domain/interfaces/HomeRepository.interface';
import { HeroProps } from '../../../domain/entities/Home.entity';

export const updateHero = async (repo: HeroRepository, data: Partial<HeroProps>) => {
  return await repo.update(data);
}; 