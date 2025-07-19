import { HomeHeroEntity, HomeHeroProps } from '../entities/HomeHero.entity';

export interface HomeHeroRepository {
  get(): Promise<HomeHeroEntity | null>;
  update(data: HomeHeroProps): Promise<HomeHeroEntity>;
} 